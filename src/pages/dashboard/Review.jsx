import { useState, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  getDueItems,
  getTotalSrsCount,
  reviewItem,
  getNextIntervalLabel,
  getFullQueue,
} from '../../utils/srsStorage';
import { addXp } from '../../utils/xpSystem';

/* ─── Rating config ──────────────────────────────────────────────────────── */
const RATINGS = [
  {
    key: 'forgot',
    label: 'Quên hoàn toàn',
    emoji: '😰',
    className: 'rating-btn rating-forgot',
    desc: 'Reset về 1 ngày',
  },
  {
    key: 'hard',
    label: 'Nhớ mang máng',
    emoji: '😅',
    className: 'rating-btn rating-hard',
    desc: 'interval × 1.2',
  },
  {
    key: 'good',
    label: 'Nhớ tốt',
    emoji: '😊',
    className: 'rating-btn rating-good',
    desc: 'Theo lịch SM-2',
  },
  {
    key: 'easy',
    label: 'Quá dễ',
    emoji: '🚀',
    className: 'rating-btn rating-easy',
    desc: 'Bỏ qua bước',
  },
];

/* ─── Flashcard component ────────────────────────────────────────────────── */
function Flashcard({ item, flipped, onFlip }) {
  return (
    <div
      className={`review-card${flipped ? ' flipped' : ''}`}
      onClick={onFlip}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onFlip()}
    >
      <div className="review-card-inner">
        {/* Front */}
        <div className="review-card-front">
          <span className="review-card-hint">Nhớ nghĩa của từ này không?</span>
          <h2 className="review-card-word">{item.word}</h2>
          {item.transcription && (
            <span className="review-card-trans">{item.transcription}</span>
          )}
          <span className="review-flip-hint">↩ Nhấn để lật thẻ</span>
        </div>

        {/* Back */}
        <div className="review-card-back">
          <span className="review-card-meaning-label">Nghĩa</span>
          <h2 className="review-card-meaning">{item.mean}</h2>
          {item.wordtype && (
            <span className="review-card-type">{item.wordtype}</span>
          )}
          {item.example && (
            <p className="review-card-example">"{item.example}"</p>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── Rating buttons ─────────────────────────────────────────────────────── */
function RatingButtons({ item, onRate }) {
  return (
    <div className="rating-row">
      {RATINGS.map((r) => (
        <button
          key={r.key}
          className={r.className}
          onClick={() => onRate(r.key)}
          title={r.desc}
        >
          <span className="rating-emoji">{r.emoji}</span>
          <span className="rating-label">{r.label}</span>
          <span className="rating-next">
            {getNextIntervalLabel(item, r.key)}
          </span>
        </button>
      ))}
    </div>
  );
}

/* ─── Answer feedback banner ─────────────────────────────────────────────── */
function FeedbackBanner({ quality, nextLabel, onNext, isLast }) {
  const cfg = {
    forgot: { cls: 'feedback-miss', icon: '😰', msg: 'Không sao! Bạn sẽ gặp lại từ này sớm.' },
    hard:   { cls: 'feedback-miss', icon: '😅', msg: 'Cần luyện thêm. Ôn lại sau một chút.' },
    good:   { cls: 'feedback-ok',   icon: '✓',  msg: 'Tốt lắm! Ghi nhớ đúng hạn.' },
    easy:   { cls: 'feedback-ok',   icon: '🚀', msg: 'Xuất sắc! Tiến lên bước tiếp theo.' },
  }[quality] || {};

  return (
    <div className={`review-answer-feedback ${cfg.cls}`}>
      <p>
        <strong>{cfg.icon} {cfg.msg}</strong>{' '}
        Ôn lại sau <strong>{nextLabel}</strong>.
      </p>
      <button className="review-next-btn" onClick={onNext}>
        {isLast ? 'Xem kết quả 🏁' : 'Từ tiếp theo →'}
      </button>
    </div>
  );
}

/* ─── Review Session ─────────────────────────────────────────────────────── */
function ReviewSession({ dueItems, onFinish }) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [ratedQuality, setRatedQuality] = useState(null);   // current card rating
  const [nextLabel, setNextLabel] = useState('');
  const [results, setResults] = useState([]);                // { wordId, quality }

  const item = dueItems[index];
  const correctCount = results.filter(
    (r) => r.quality === 'good' || r.quality === 'easy'
  ).length;

  const handleRate = useCallback(
    (quality) => {
      if (ratedQuality) return; // prevent double-tap
      const label = getNextIntervalLabel(item, quality);
      reviewItem(item.wordId, quality);

      // Award XP
      if (quality === 'good') addXp(8, 'SRS ôn tốt');
      else if (quality === 'easy') addXp(15, 'SRS siêu dễ');
      else if (quality === 'hard') addXp(3, 'SRS nhớ mang máng');

      setRatedQuality(quality);
      setNextLabel(label);
      setResults((prev) => [...prev, { wordId: item.wordId, quality }]);
    },
    [item, ratedQuality]
  );

  const handleNext = () => {
    if (index < dueItems.length - 1) {
      setIndex(index + 1);
      setFlipped(false);
      setRatedQuality(null);
      setNextLabel('');
    } else {
      onFinish(results);
    }
  };

  return (
    <div className="review-session">
      {/* Progress */}
      <div className="review-progress-bar-wrap">
        <div className="review-progress-bar">
          <div
            className="review-progress-fill"
            style={{ width: `${(index / dueItems.length) * 100}%` }}
          />
        </div>
        <span className="review-progress-label">
          {index + 1} / {dueItems.length}
        </span>
      </div>

      {/* Flashcard */}
      <Flashcard
        item={item}
        flipped={flipped}
        onFlip={() => !ratedQuality && setFlipped(!flipped)}
      />

      {/* Rating — only shown after flip, before rating */}
      {flipped && !ratedQuality && (
        <RatingButtons item={item} onRate={handleRate} />
      )}

      {/* Feedback — after rating */}
      {ratedQuality && (
        <FeedbackBanner
          quality={ratedQuality}
          nextLabel={nextLabel}
          onNext={handleNext}
          isLast={index === dueItems.length - 1}
        />
      )}

      {/* Live counters */}
      <div className="review-live-stats">
        <span className="review-stat-ok">✓ {correctCount} nhớ</span>
        <span className="review-stat-miss">
          ✗ {results.length - correctCount} cần cải thiện
        </span>
        <span className="review-stat-remaining">
          🃏 {dueItems.length - index - 1} còn lại
        </span>
      </div>
    </div>
  );
}

/* ─── Result Screen ──────────────────────────────────────────────────────── */
function ReviewResult({ results, dueItems, onRestart, onGoHome }) {
  const correct = results.filter(
    (r) => r.quality === 'good' || r.quality === 'easy'
  ).length;
  const total = results.length;
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0;

  const emoji = pct >= 80 ? '🏆' : pct >= 50 ? '👍' : '💪';
  const msg =
    pct >= 80
      ? 'Tuyệt vời! Trí nhớ của bạn rất tốt.'
      : pct >= 50
      ? 'Khá tốt! Hãy tiếp tục luyện tập.'
      : 'Đừng nản! Ôn lại nhiều hơn nhé.';

  const ratingCount = (q) => results.filter((r) => r.quality === q).length;

  return (
    <div className="review-result">
      <div className="review-result-icon">{emoji}</div>
      <h2 className="review-result-title">Phiên ôn tập hoàn thành!</h2>
      <p className="review-result-msg">{msg}</p>

      {/* Main stats */}
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
          <span>Cần cải thiện</span>
        </div>
        <div className="review-result-stat">
          <strong>{pct}%</strong>
          <span>Tỉ lệ nhớ</span>
        </div>
      </div>

      {/* Rating breakdown */}
      <div className="review-result-breakdown">
        {RATINGS.map((r) => (
          <div key={r.key} className={`breakdown-item breakdown-${r.key}`}>
            <span className="breakdown-emoji">{r.emoji}</span>
            <span className="breakdown-label">{r.label}</span>
            <span className="breakdown-count">{ratingCount(r.key)}</span>
          </div>
        ))}
      </div>

      {/* Word list */}
      <div className="review-result-words">
        {dueItems.map((item) => {
          const result = results.find((r) => r.wordId === item.wordId);
          const q = result?.quality || 'forgot';
          const isOk = q === 'good' || q === 'easy';
          return (
            <div
              key={item.wordId}
              className={`review-result-word ${isOk ? 'rw-ok' : 'rw-miss'}`}
            >
              <span className="rw-icon">
                {RATINGS.find((r) => r.key === q)?.emoji || '?'}
              </span>
              <strong>{item.word}</strong>
              <span>{item.mean}</span>
            </div>
          );
        })}
      </div>

      <div className="review-result-actions">
        <button className="review-restart-btn" onClick={onRestart}>
          🔄 Ôn lại phiên này
        </button>
        <button className="review-home-btn" onClick={onGoHome}>
          ← Về tổng quan
        </button>
      </div>
    </div>
  );
}

/* ─── Upcoming word card ─────────────────────────────────────────────────── */
function UpcomingSection({ queue }) {
  const upcoming = queue
    .filter((i) => new Date(i.nextReview) > new Date())
    .sort((a, b) => new Date(a.nextReview) - new Date(b.nextReview))
    .slice(0, 12);

  if (!upcoming.length) return null;

  return (
    <section className="review-upcoming-section reveal" data-reveal-order="2">
      <h2 className="review-section-title">📅 Từ sẽ cần ôn sắp tới</h2>
      <div className="review-upcoming-grid">
        {upcoming.map((item) => {
          const daysLeft = Math.max(
            0,
            Math.ceil(
              (new Date(item.nextReview) - new Date()) / (1000 * 60 * 60 * 24)
            )
          );
          return (
            <div key={item.wordId} className="review-upcoming-card">
              <strong>{item.word}</strong>
              <span>{item.mean}</span>
              <span className="review-upcoming-days">+{daysLeft} ngày</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ─── Main Page ──────────────────────────────────────────────────────────── */
export default function Review() {
  const navigate = useNavigate();
  const [phase, setPhase] = useState('overview'); // 'overview' | 'session' | 'result'
  const [sessionResults, setSessionResults] = useState([]);

  // Read from srsStorage
  const dueItems = useMemo(() => getDueItems(), []);
  const totalSrs = useMemo(() => getTotalSrsCount(), []);
  const fullQueue = useMemo(() => getFullQueue(), []);
  const upcomingCount = totalSrs - dueItems.length;

  const handleFinish = (results) => {
    setSessionResults(results);
    setPhase('result');
  };

  /* ── Session screen ── */
  if (phase === 'session') {
    if (dueItems.length === 0) {
      setPhase('overview');
      return null;
    }
    return (
      <main className="dash-main review-page" id="page-review">
        <ReviewSession dueItems={dueItems} onFinish={handleFinish} />
      </main>
    );
  }

  /* ── Result screen ── */
  if (phase === 'result') {
    return (
      <main className="dash-main review-page" id="page-review">
        <ReviewResult
          results={sessionResults}
          dueItems={dueItems}
          onRestart={() => {
            setSessionResults([]);
            setPhase('session');
          }}
          onGoHome={() => {
            setSessionResults([]);
            setPhase('overview');
          }}
        />
      </main>
    );
  }

  /* ── Overview screen ── */
  return (
    <main className="dash-main review-page" id="page-review">
      {/* Hero */}
      <section className="review-hero reveal" data-reveal-order="0">
        <div className="review-hero-copy">
          <div className="review-eyebrow">Spaced Repetition · SM-2</div>
          <h1>Ôn tập thông minh</h1>
          <p>
            Hệ thống SRS tự động nhắc nhở bạn ôn lại đúng lúc, giúp ghi nhớ
            từ vựng lâu dài theo thuật toán SM-2.
          </p>
        </div>

        <div className="review-summary-pills">
          <div className="review-summary-pill review-pill-due">
            <strong>{dueItems.length}</strong>
            <span>Cần ôn hôm nay</span>
          </div>
          <div className="review-summary-pill review-pill-total">
            <strong>{totalSrs}</strong>
            <span>Từ trong SRS</span>
          </div>
          <div className="review-summary-pill review-pill-upcoming">
            <strong>{upcomingCount}</strong>
            <span>Sắp đến lịch</span>
          </div>
        </div>
      </section>

      {/* SM-2 algorithm info */}
      <section className="review-algo-section reveal" data-reveal-order="1">
        <h2 className="review-section-title">📐 Lịch ôn theo SM-2</h2>
        <div className="algo-timeline">
          {[
            { step: 'Từ mới', interval: '1 ngày', icon: '🌱' },
            { step: 'Ôn lần 2 đúng', interval: '3 ngày', icon: '📗' },
            { step: 'Ôn lần 3 đúng', interval: '7 ngày', icon: '📘' },
            { step: 'Ôn lần 4 đúng', interval: '14 ngày', icon: '⭐' },
            { step: 'Ôn sai bất kỳ', interval: '1 ngày', icon: '🔄' },
          ].map((s, i) => (
            <div key={i} className="algo-step">
              <span className="algo-icon">{s.icon}</span>
              <div className="algo-text">
                <span className="algo-step-name">{s.step}</span>
                <span className="algo-arrow">→</span>
                <span className="algo-interval">{s.interval}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className="review-action-section reveal" data-reveal-order="2">
        {dueItems.length > 0 ? (
          <div className="review-start-card">
            <div className="review-start-icon">🔔</div>
            <h2>
              Bạn có <strong>{dueItems.length} từ</strong> cần ôn tập!
            </h2>
            <p>
              Ôn ngay để duy trì trí nhớ dài hạn và không bị quên những từ đã
              học.
            </p>

            {/* Rating guide */}
            <div className="review-rating-guide">
              {RATINGS.map((r) => (
                <div key={r.key} className="guide-item">
                  <span>{r.emoji}</span>
                  <span>{r.label}</span>
                </div>
              ))}
            </div>

            <button
              className="review-start-btn"
              onClick={() => setPhase('session')}
            >
              Bắt đầu ôn tập →
            </button>
          </div>
        ) : totalSrs === 0 ? (
          <div className="review-empty-card">
            <div className="review-empty-icon">📚</div>
            <h2>Chưa có từ nào trong SRS</h2>
            <p>
              Khi học từ vựng, nhấn "Thêm vào SRS" để hệ thống nhắc bạn ôn
              đúng lịch.
            </p>
            <button
              className="review-start-btn"
              style={{ marginTop: 16 }}
              onClick={() => navigate('/dashboard/courses')}
            >
              Đi học từ vựng →
            </button>
          </div>
        ) : (
          <div className="review-empty-card">
            <div className="review-empty-icon">✅</div>
            <h2>Tuyệt vời! Bạn đã ôn hết rồi</h2>
            <p>
              Không có từ nào cần ôn hôm nay. Quay lại vào ngày mai để tiếp
              tục.
            </p>
          </div>
        )}
      </section>

      {/* Upcoming */}
      <UpcomingSection queue={fullQueue} />
    </main>
  );
}
