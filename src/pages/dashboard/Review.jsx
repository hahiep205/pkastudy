import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  getDueItems as getLocalDueItems,
  getFullQueue as getLocalFullQueue,
  getNextIntervalLabel as getLocalNextIntervalLabel,
  getTotalSrsCount as getLocalTotalSrsCount,
  reviewItem as reviewLocalItem,
} from '../../utils/srsStorage';
import {
  fetchDueReviews,
  hasServerSrsAccess,
  mapReviewRatingToQualityScore,
  submitSrsReviewBatch,
} from '../../utils/srsApi';
import { calculateSM2 } from '../../utils/sm2';
import { addXp } from '../../utils/xpSystem';

const RATINGS = [
  { key: 'forgot', label: 'Quên hoàn toàn', emoji: '😰', className: 'rating-btn rating-forgot', desc: 'Ôn lại sớm theo SM-2' },
  { key: 'hard', label: 'Nhớ mang máng', emoji: '😅', className: 'rating-btn rating-hard', desc: 'Nhớ khó, tăng chậm hơn' },
  { key: 'good', label: 'Nhớ tốt', emoji: '😊', className: 'rating-btn rating-good', desc: 'Tăng theo nhịp SM-2 chuẩn' },
  { key: 'easy', label: 'Quá dễ', emoji: '🚀', className: 'rating-btn rating-easy', desc: 'Tăng nhanh nhất' },
];

function formatIntervalLabel(days) {
  return `${days} ngày`;
}

function getServerNextIntervalLabel(item, rating) {
  const schedule = calculateSM2(
    mapReviewRatingToQualityScore(rating),
    item.interval || 0,
    item.ef || 2.5,
    item.repetition || 0
  );
  return formatIntervalLabel(schedule.interval);
}

function mapServerDueItem(item) {
  return {
    wordId: item.flashcardId ?? item.reviewId,
    flashcardId: item.flashcardId,
    word: item.word,
    mean: item.mean,
    transcription: item.transcription,
    example: item.example,
    wordtype: item.wordtype,
    interval: item.interval,
    ef: item.ef,
    repetition: item.repetition,
  };
}

function FlashcardCard({ item, flipped, onFlip }) {
  return (
    <div
      className={`review-card${flipped ? ' flipped' : ''}`}
      onClick={onFlip}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onFlip();
        }
      }}
    >
      <div className="review-card-inner">
        <div className="review-card-front">
          <span className="review-card-hint">Bạn còn nhớ nghĩa của từ này không?</span>
          <h2 className="review-card-word">{item.word}</h2>
          {item.transcription ? <span className="review-card-trans">{item.transcription}</span> : null}
          <span className="review-flip-hint">↩ Nhấn để lật thẻ</span>
        </div>

        <div className="review-card-back">
          <span className="review-card-meaning-label">Nghĩa</span>
          <h2 className="review-card-meaning">{item.mean}</h2>
          {item.wordtype ? <span className="review-card-type">{item.wordtype}</span> : null}
          {item.example ? <p className="review-card-example">"{item.example}"</p> : null}
        </div>
      </div>
    </div>
  );
}

function RatingButtons({ item, onRate, useServerSrs }) {
  return (
    <div className="rating-row">
      {RATINGS.map((rating) => (
        <button
          key={rating.key}
          className={rating.className}
          onClick={() => onRate(rating.key)}
          title={rating.desc}
        >
          <span className="rating-emoji">{rating.emoji}</span>
          <span className="rating-label">{rating.label}</span>
          <span className="rating-next">
            {useServerSrs
              ? getServerNextIntervalLabel(item, rating.key)
              : getLocalNextIntervalLabel(item, rating.key)}
          </span>
        </button>
      ))}
    </div>
  );
}

function FeedbackBanner({ quality, nextLabel, onNext, isLast }) {
  const config = {
    forgot: { cls: 'feedback-miss', icon: '😰', msg: 'Không sao. Bạn sẽ gặp lại từ này sớm.' },
    hard: { cls: 'feedback-miss', icon: '😅', msg: 'Cần luyện thêm. Ôn lại sau một chút.' },
    good: { cls: 'feedback-ok', icon: '✓', msg: 'Tốt lắm. Bạn đang đi đúng nhịp ôn tập.' },
    easy: { cls: 'feedback-ok', icon: '🚀', msg: 'Xuất sắc. Từ này sẽ được giãn lịch mạnh hơn.' },
  }[quality];

  return (
    <div className={`review-answer-feedback ${config.cls}`}>
      <p>
        <strong>{config.icon} {config.msg}</strong>{' '}
        Ôn lại sau <strong>{nextLabel}</strong>.
      </p>
      <button className="review-next-btn" onClick={onNext}>
        {isLast ? 'Xem kết quả 🏁' : 'Từ tiếp theo →'}
      </button>
    </div>
  );
}

function ReviewSession({ dueItems, onFinish, useServerSrs }) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [ratedQuality, setRatedQuality] = useState(null);
  const [nextLabel, setNextLabel] = useState('');
  const [results, setResults] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const item = dueItems[index];
  const correctCount = results.filter((entry) => entry.quality === 'good' || entry.quality === 'easy').length;

  const handleRate = useCallback(async (quality) => {
    if (ratedQuality || isSubmitting) return;

    setIsSubmitting(true);
    try {
      let label;

      if (useServerSrs) {
        const updated = await submitSrsReviewBatch([
          { flashcard_id: item.flashcardId, quality: mapReviewRatingToQualityScore(quality) },
        ]);
        label = updated[0] ? formatIntervalLabel(updated[0].interval) : getServerNextIntervalLabel(item, quality);
      } else {
        label = getLocalNextIntervalLabel(item, quality);
        reviewLocalItem(item.wordId, quality);
      }

      if (quality === 'good') addXp(8, 'SRS nhớ tốt');
      else if (quality === 'easy') addXp(15, 'SRS quá dễ');
      else if (quality === 'hard') addXp(3, 'SRS nhớ mang máng');

      setRatedQuality(quality);
      setNextLabel(label);
      setResults((prev) => [...prev, { wordId: item.wordId, quality }]);
    } finally {
      setIsSubmitting(false);
    }
  }, [isSubmitting, item, ratedQuality, useServerSrs]);

  const handleNext = () => {
    if (index < dueItems.length - 1) {
      setIndex((current) => current + 1);
      setFlipped(false);
      setRatedQuality(null);
      setNextLabel('');
      return;
    }
    onFinish(results);
  };

  return (
    <div className="review-session">
      <div className="review-progress-bar-wrap">
        <div className="review-progress-bar">
          <div className="review-progress-fill" style={{ width: `${(index / dueItems.length) * 100}%` }} />
        </div>
        <span className="review-progress-label">{index + 1} / {dueItems.length}</span>
      </div>

      <FlashcardCard
        item={item}
        flipped={flipped}
        onFlip={() => {
          if (!ratedQuality) setFlipped((current) => !current);
        }}
      />

      {flipped && !ratedQuality ? <RatingButtons item={item} onRate={handleRate} useServerSrs={useServerSrs} /> : null}

      {ratedQuality ? (
        <FeedbackBanner
          quality={ratedQuality}
          nextLabel={nextLabel}
          onNext={handleNext}
          isLast={index === dueItems.length - 1}
        />
      ) : null}

      <div className="review-live-stats">
        <span className="review-stat-ok">✓ {correctCount} nhớ tốt</span>
        <span className="review-stat-miss">✕ {results.length - correctCount} cần ôn lại</span>
        <span className="review-stat-remaining">🃏 {dueItems.length - index - 1} còn lại</span>
      </div>
    </div>
  );
}

function ReviewResult({ results, dueItems, onRestart, onGoHome }) {
  const correct = results.filter((entry) => entry.quality === 'good' || entry.quality === 'easy').length;
  const total = results.length;
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
  const emoji = pct >= 80 ? '🏆' : pct >= 50 ? '👍' : '💪';
  const message = pct >= 80
    ? 'Tuyệt vời. Trí nhớ của bạn đang rất tốt.'
    : pct >= 50
      ? 'Khá tốt. Hãy tiếp tục giữ nhịp ôn đều.'
      : 'Chưa sao. Ôn lại thêm vài vòng là sẽ ổn hơn.';

  const ratingCount = (quality) => results.filter((entry) => entry.quality === quality).length;

  return (
    <div className="review-result">
      <div className="review-result-icon">{emoji}</div>
      <h2 className="review-result-title">Phiên ôn tập hoàn thành</h2>
      <p className="review-result-msg">{message}</p>

      <div className="review-result-stats">
        <div className="review-result-stat">
          <strong>{total}</strong>
          <span>Từ đã ôn</span>
        </div>
        <div className="review-result-stat review-result-stat-ok">
          <strong>{correct}</strong>
          <span>Nhớ tốt</span>
        </div>
        <div className="review-result-stat review-result-stat-miss">
          <strong>{total - correct}</strong>
          <span>Cần ôn lại</span>
        </div>
        <div className="review-result-stat">
          <strong>{pct}%</strong>
          <span>Tỉ lệ nhớ</span>
        </div>
      </div>

      <div className="review-result-breakdown">
        {RATINGS.map((rating) => (
          <div key={rating.key} className={`breakdown-item breakdown-${rating.key}`}>
            <span className="breakdown-emoji">{rating.emoji}</span>
            <span className="breakdown-label">{rating.label}</span>
            <span className="breakdown-count">{ratingCount(rating.key)}</span>
          </div>
        ))}
      </div>

      <div className="review-result-words">
        {dueItems.map((item) => {
          const result = results.find((entry) => entry.wordId === item.wordId);
          const quality = result?.quality || 'forgot';
          const isOk = quality === 'good' || quality === 'easy';
          return (
            <div key={item.wordId} className={`review-result-word ${isOk ? 'ok' : 'miss'}`}>
              <span className="review-result-word-main">{item.word}</span>
              <span className="review-result-word-mean">{item.mean}</span>
              <span className="review-result-word-quality">{RATINGS.find((rating) => rating.key === quality)?.label}</span>
            </div>
          );
        })}
      </div>

      <div className="review-result-actions">
        <button className="btn btn-primary" onClick={onRestart}>Ôn lại danh sách này</button>
        <button className="btn btn-secondary" onClick={onGoHome}>Quay về Dashboard</button>
      </div>
    </div>
  );
}

function EmptyState({ useServerSrs }) {
  const title = useServerSrs ? 'Chưa có từ nào đến hạn ôn tập' : 'Hàng đợi ôn tập đang trống';
  const desc = useServerSrs
    ? 'Khi có từ đến hạn từ backend SRS, chúng sẽ xuất hiện tại đây.'
    : 'Hãy học và đánh dấu vài từ trước, sau đó hệ thống sẽ tự lên lịch ôn.';

  return (
    <div className="review-empty">
      <div className="review-empty-icon">📭</div>
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
}

function UpcomingSection({ queue }) {
  const upcoming = [...queue]
    .sort((a, b) => new Date(a.nextReview) - new Date(b.nextReview))
    .slice(0, 6);

  if (upcoming.length === 0) return null;

  return (
    <section className="review-upcoming">
      <h3>Lịch ôn sắp tới</h3>
      <div className="review-upcoming-list">
        {upcoming.map((item) => (
          <div key={item.wordId} className="review-upcoming-item">
            <strong>{item.word}</strong>
            <span>{new Date(item.nextReview).toLocaleDateString('vi-VN')}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Review() {
  const navigate = useNavigate();
  const useServerSrs = hasServerSrsAccess();
  const [dueItems, setDueItems] = useState([]);
  const [fullQueue, setFullQueue] = useState([]);
  const [status, setStatus] = useState('loading');
  const [sessionKey, setSessionKey] = useState(0);
  const [results, setResults] = useState(null);

  const totalCount = useMemo(() => (
    useServerSrs ? dueItems.length : getLocalTotalSrsCount()
  ), [dueItems.length, useServerSrs, sessionKey]);

  const loadData = useCallback(async () => {
    setStatus('loading');

    if (useServerSrs) {
      try {
        const items = await fetchDueReviews();
        setDueItems(items.map(mapServerDueItem));
        setFullQueue([]);
        setStatus('ready');
        return;
      } catch (error) {
        console.error('Failed to load server SRS queue.', error);
      }
    }

    setDueItems(getLocalDueItems());
    setFullQueue(getLocalFullQueue());
    setStatus('ready');
  }, [useServerSrs]);

  useEffect(() => {
    loadData();
  }, [loadData, sessionKey]);

  const handleFinish = (sessionResults) => {
    setResults(sessionResults);
  };

  const handleRestart = () => {
    setResults(null);
    setSessionKey((current) => current + 1);
  };

  const dueCount = dueItems.length;

  return (
    <main className="dash-main review-page" id="page-review">
      <section className="review-hero">
        <div>
          <span className="review-eyebrow">Spaced Repetition</span>
          <h1>Ôn tập đúng lúc với SM-2</h1>
          <p>Hệ thống SRS nhắc bạn ôn lại đúng thời điểm để giữ từ vựng lâu hơn trong trí nhớ.</p>
        </div>

        <div className="review-hero-stats">
          <div className="review-hero-stat">
            <strong>{dueCount}</strong>
            <span>Đến hạn hôm nay</span>
          </div>
          <div className="review-hero-stat">
            <strong>{totalCount}</strong>
            <span>Tổng số thẻ</span>
          </div>
        </div>
      </section>

      <section className="review-sm2-info">
        <div className="review-sm2-card">
          <h3>Cách tính nhịp ôn</h3>
          <div className="review-sm2-steps">
            {[
              { step: 'Lần 1', interval: '1 ngày', icon: '1️⃣' },
              { step: 'Lần 2', interval: '6 ngày', icon: '2️⃣' },
              { step: 'Từ lần 3 trở đi', interval: 'Nhân theo EF', icon: '📘' },
            ].map((item) => (
              <div key={item.step} className="review-sm2-step">
                <span>{item.icon}</span>
                <div>
                  <strong>{item.step}</strong>
                  <p>{item.interval}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {status === 'loading' ? (
        <div className="review-empty">
          <div className="review-empty-icon">⏳</div>
          <p>Đang tải danh sách ôn tập...</p>
        </div>
      ) : results ? (
        <ReviewResult
          results={results}
          dueItems={dueItems}
          onRestart={handleRestart}
          onGoHome={() => navigate('/dashboard')}
        />
      ) : dueCount > 0 ? (
        <ReviewSession
          key={sessionKey}
          dueItems={dueItems}
          onFinish={handleFinish}
          useServerSrs={useServerSrs}
        />
      ) : (
        <EmptyState useServerSrs={useServerSrs} />
      )}

      {!useServerSrs ? <UpcomingSection queue={fullQueue} /> : null}
    </main>
  );
}
