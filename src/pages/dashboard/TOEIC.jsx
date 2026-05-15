import { useEffect, useRef, useState } from "react";
import { TOEIC_PARTS, convertToToeicScore } from "../../data/toeicData";
import { TOEIC_LISTENING_PRACTICE_MODES } from "../../data/toeicListeningPracticeData";
import { TOEIC_READING_PRACTICE_MODES } from "../../data/toeicReadingPracticeData";
import { xpToeicFullTest, xpToeicPartComplete } from "../../utils/xpSystem";

function formatTime(s) {
  return `${Math.floor(s / 60).toString().padStart(2, "0")}:${(s % 60).toString().padStart(2, "0")}`;
}

const LISTENING_PRACTICE_TYPES = new Set([
  "part1-picture",
  "part2-response",
  "part3-conversations",
  "part4-talks",
]);

const READING_PRACTICE_TYPES = new Set([
  "part5-reading",
  "part6-reading",
  "part7-reading",
]);

function speakToeicText(text) {
  if (!window.speechSynthesis || !text) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.85;
  window.speechSynthesis.speak(utterance);
}

function clonePartsForFullTest(parts, suffix, transformQuestions) {
  return {
    listening: parts.listening.map((part) => ({
      ...part,
      id: `${part.id}-${suffix}`,
      questions: transformQuestions(part.questions).map((q, index) => ({
        ...q,
        id: `${q.id}-${suffix}-${index + 1}`,
      })),
    })),
    reading: parts.reading.map((part) => ({
      ...part,
      id: `${part.id}-${suffix}`,
      questions: transformQuestions(part.questions).map((q, index) => ({
        ...q,
        id: `${q.id}-${suffix}-${index + 1}`,
      })),
    })),
  };
}

function getBasePartId(partId = "") {
  return partId.split("-")[0];
}

function getBaseQuestionId(questionId = "") {
  return questionId.split("-")[0];
}

function getFullTestQuestionImageSrc(question) {
  if (question.image) return question.image;
  if (question.imageUrl) return question.imageUrl;
  if (getBasePartId(question.partId) === "part1") {
    return `/toeic-fulltest/placeholders/${getBaseQuestionId(question.id)}.svg`;
  }
  return "";
}

const FULL_TEST_VARIANTS = [
  {
    id: "fulltest-a",
    name: "Đề 1",
    desc: "Bộ đề chuẩn hiện tại với thứ tự câu mặc định.",
    parts: TOEIC_PARTS,
  },
  {
    id: "fulltest-b",
    name: "Đề 2",
    desc: "Biến thể tương tự với thứ tự câu đảo lại theo từng part để luyện thêm.",
    parts: clonePartsForFullTest(TOEIC_PARTS, "set2", (questions) => [...questions].reverse()),
  },
];

function ModeGrid({ modes, onSelect }) {
  return (
    <div className="toeic-parts-grid">
      {modes.map((mode) => (
        <button key={mode.id} className="toeic-part-card" onClick={() => onSelect(mode)}>
          <span className="toeic-part-card-icon">{mode.icon}</span>
          <div className="toeic-part-card-body">
            <strong>{mode.label}: {mode.title}</strong>
            <span className="toeic-part-card-desc">{mode.desc}</span>
            <span className="toeic-part-card-count">{mode.topics.length} topic luyện tập</span>
          </div>
          <span className="toeic-part-card-arrow">→</span>
        </button>
      ))}
    </div>
  );
}

function TopicGrid({ mode, onSelect, onBack, backLabel }) {
  return (
    <div className="toeic-practice-layout">
      <button className="toeic-back-link" onClick={onBack}>{backLabel}</button>
      <div className="toeic-listening-topic-hero">
        <div className="toeic-test-hero-icon">{mode.icon}</div>
        <div>
          <h2>{mode.title}</h2>
          <p>{mode.desc}</p>
        </div>
      </div>
      <div className="toeic-parts-grid">
        {mode.topics.map((topic) => (
          <button key={topic.id} className="toeic-part-card" onClick={() => onSelect(topic)}>
            <span className="toeic-part-card-icon">{topic.icon}</span>
            <div className="toeic-part-card-body">
              <strong>{topic.title}</strong>
              <span className="toeic-part-card-desc">{topic.desc}</span>
              <span className="toeic-part-card-count">{topic.questions.length} câu hỏi</span>
            </div>
            <span className="toeic-part-card-arrow">→</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function PracticeSession({ part, onBack, backLabel = "← Quay lại" }) {
  const [qi, setQi] = useState(0);
  const [sel, setSel] = useState(null);
  const [showRes, setShowRes] = useState(false);
  const [answers, setAnswers] = useState({});
  const [done, setDone] = useState(false);
  const practiceType = part.practiceType || "";
  const isListeningPractice = LISTENING_PRACTICE_TYPES.has(practiceType);
  const isReadingPractice = READING_PRACTICE_TYPES.has(practiceType);
  const isCustomPractice = isListeningPractice || isReadingPractice;
  const isPart1 = practiceType === "part1-picture";
  const isPart2 = practiceType === "part2-response";
  const isPart3 = practiceType === "part3-conversations";
  const isPart4 = practiceType === "part4-talks";
  const isPart5 = practiceType === "part5-reading";
  const isPart6 = practiceType === "part6-reading";
  const isPart7 = practiceType === "part7-reading";
  const isListening = isListeningPractice || part.id.startsWith("part1") || part.id.startsWith("part2") || part.id.startsWith("part3") || part.id.startsWith("part4");
  const q = part.questions[qi];
  const xpAwardedRef = useRef(false);

  if (!q || !Array.isArray(q.options)) {
    return (
      <div className="toeic-practice-layout">
        <div className="toeic-question-card">
          <div className="toeic-qcard-header">
            <button className="toeic-back-link toeic-back-link-inline" onClick={onBack}>{backLabel}</button>
            <span className="toeic-qcard-part">{part.icon} {part.label || "Topic"} - {part.title}</span>
            <span className="toeic-qcard-counter">-</span>
          </div>
          <div className="toeic-feedback feedback-wrong">
            <strong>Không tải được câu hỏi</strong>
            <p>Dữ liệu của topic này đang bị thiếu hoặc sai định dạng.</p>
          </div>
        </div>
      </div>
    );
  }

  useEffect(() => {
    if (done && !xpAwardedRef.current) {
      xpToeicPartComplete();
      xpAwardedRef.current = true;
    }
  }, [done]);

  const answer = (idx) => {
    if (showRes) return;
    setSel(idx);
    setShowRes(true);
    setAnswers((prev) => ({ ...prev, [q.id]: idx }));
  };

  const next = () => {
    if (qi < part.questions.length - 1) {
      setQi(qi + 1);
      setSel(null);
      setShowRes(false);
    } else {
      setDone(true);
    }
  };

  const prev = () => {
    if (qi > 0) {
      setQi(qi - 1);
      setSel(null);
      setShowRes(false);
    }
  };

  const getInstruction = () => {
    if (isPart1) return "Quan sát hình, nghe bốn câu mô tả và chọn đáp án A/B/C/D đúng nhất.";
    if (isPart2) return "Nghe câu hỏi hoặc câu nói, rồi chọn phản hồi A/B/C phù hợp nhất.";
    if (isPart3) return "Nghe đoạn hội thoại ngắn rồi trả lời câu hỏi trắc nghiệm.";
    if (isPart4) return "Nghe bài nói ngắn rồi trả lời câu hỏi trắc nghiệm.";
    if (isPart5) return "Đọc câu chưa hoàn chỉnh và chọn đáp án đúng nhất để điền vào chỗ trống.";
    if (isPart6) return "Đọc đoạn văn ngắn và chọn đáp án phù hợp nhất với chỗ trống.";
    if (isPart7) return "Đọc passage và trả lời câu hỏi về nội dung bài đọc.";
    return "";
  };

  const renderOptionLabel = (opt, idx) => {
    if (isPart1 || isPart2) {
      return <span className="toeic-option-code-only">Đáp án {String.fromCharCode(65 + idx)}</span>;
    }
    return opt;
  };

  if (done) {
    const correct = part.questions.filter((qq) => answers[qq.id] === qq.correct).length;
    const pct = Math.round((correct / part.questions.length) * 100);
    const wrong = part.questions.filter((qq) => answers[qq.id] !== undefined && answers[qq.id] !== qq.correct);

    return (
      <div className="toeic-result">
        <div className="toeic-result-header">
          <div className="toeic-result-score-circle"><div className="toeic-score-inner">
            <span className="toeic-score-num">{correct}/{part.questions.length}</span>
            <span className="toeic-score-label">câu đúng</span>
          </div></div>
          <h2>{pct >= 80 ? "Excellent" : pct >= 60 ? "Good job" : "Keep practicing"}</h2>
          <p>Bạn đạt {pct}% - {correct}/{part.questions.length} câu đúng</p>
        </div>

        <div className="toeic-result-review">
          <h3>Xem giải thích</h3>
          {part.questions.map((qq, i) => {
            const ua = answers[qq.id];
            const ok = ua === qq.correct;
            const skip = ua === undefined;
            return (
              <div key={qq.id} className={`toeic-review-item ${ok ? "review-correct" : skip ? "review-unanswered" : "review-wrong"}`}>
                <div className="toeic-review-top">
                  <span className="toeic-review-num">Câu {i + 1}</span>
                  <span className={`toeic-review-badge ${ok ? "badge-ok" : skip ? "badge-unanswered" : "badge-err"}`}>
                    {ok ? "✓ Đúng" : skip ? "○ Bỏ qua" : "✗ Sai"}
                  </span>
                </div>
                {(qq.imageTitle || qq.imageEmoji) && (
                  <p className="toeic-review-q">
                    <strong>{qq.imageEmoji || ""} {qq.imageTitle || ""}</strong> {qq.imageDetail || ""}
                  </p>
                )}
                {qq.passage && <p className="toeic-review-q">{qq.passage}</p>}
                {(qq.question || qq.text) && <p className="toeic-review-q"><strong>{qq.question || qq.text}</strong></p>}
                {qq.audioText && <p className="toeic-review-q">{qq.audioText}</p>}
                <p className="toeic-review-ans">Đáp án đúng: <strong>{String.fromCharCode(65 + qq.correct)}. {qq.options[qq.correct]}</strong></p>
                {!ok && ua !== undefined && <p className="toeic-review-user">Bạn chọn: {String.fromCharCode(65 + ua)}. {qq.options[ua]}</p>}
                <p className="toeic-review-explain">💡 {qq.explanation}</p>
              </div>
            );
          })}
        </div>

        <div className="toeic-result-actions">
          {wrong.length > 0 && (
            <button
              className="toeic-retry-btn"
              onClick={() => {
                setDone(false);
                setQi(0);
                setSel(null);
                setShowRes(false);
                setAnswers({});
                xpAwardedRef.current = false;
              }}
            >
              ↻ Làm lại câu sai
            </button>
          )}
          <button className="toeic-back-btn" onClick={onBack}>← Quay lại</button>
        </div>
      </div>
    );
  }

  return (
    <div className="toeic-practice-layout">
      <div className="toeic-question-card">
        <div className="toeic-qcard-header">
          <button className="toeic-back-link toeic-back-link-inline" onClick={onBack}>{backLabel}</button>
          <span className="toeic-qcard-part">{part.icon} {part.label || "Topic"} - {part.title}</span>
          <span className="toeic-qcard-counter">{qi + 1} / {part.questions.length}</span>
        </div>

        {isListening && q.audioText && (
          <div className="toeic-audio-row">
            <button className="toeic-audio-btn" onClick={() => speakToeicText(q.audioText || "")}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M2 16H5.889L11.183 20.332C11.273 20.405 11.385 20.445 11.5 20.445C11.776 20.445 12 20.221 12 19.945V4.055C12 3.94 11.96 3.828 11.887 3.739C11.713 3.525 11.399 3.493 11.185 3.668L5.889 8H2C1.448 8 1 8.448 1 9V15C1 15.552 1.448 16 2 16ZM23 12C23 15.292 21.554 18.246 19.262 20.262L17.845 18.844C19.776 17.194 21 14.74 21 12C21 9.26 19.776 6.806 17.845 5.156L19.262 3.738C21.554 5.754 23 8.708 23 12Z" /></svg>
              Nghe
            </button>
          </div>
        )}

        {q.imageUrl && <div className="toeic-q-image"><img src={q.imageUrl} alt="Question figure" /></div>}
        {q.imageEmoji && !q.imageUrl && (
          <div className="toeic-visual-card">
            <div className="toeic-visual-emoji">{q.imageEmoji}</div>
            <div className="toeic-visual-copy">
              <strong>{q.imageTitle}</strong>
              <p>{q.imageDetail}</p>
            </div>
          </div>
        )}

        <p className="toeic-qcard-stem">{getInstruction()}</p>
        {q.passage && <div className="toeic-reading-passage">{q.passage}</div>}
        {(isPart3 || isPart4 || isPart6 || isPart7) && q.question && <p className="toeic-qcard-stem"><strong>{q.question}</strong></p>}
        {isPart5 && q.text && <p className="toeic-qcard-stem"><strong>{q.text}</strong></p>}

        <div className="toeic-options-grid">
          {q.options.map((opt, idx) => {
            let cls = "toeic-option";
            if (showRes) {
              if (idx === q.correct) cls += " correct";
              else if (idx === sel) cls += " wrong";
            } else if (idx === sel) {
              cls += " selected";
            }

            return (
              <button key={idx} className={cls} onClick={() => answer(idx)}>
                <span className="toeic-option-letter">{String.fromCharCode(65 + idx)}</span>
                {renderOptionLabel(opt, idx)}
              </button>
            );
          })}
        </div>

        {showRes && sel !== q.correct && (
          <div className="toeic-feedback feedback-wrong">
            <strong>✗ Sai rồi</strong>
            <p>
              Đáp án đúng: <strong>{String.fromCharCode(65 + q.correct)}. {q.options[q.correct]}</strong>
            </p>
            <div className="toeic-practice-nav">
              {qi > 0 && <button className="toeic-practice-btn toeic-practice-prev" onClick={prev}>← Câu trước</button>}
              <button className="toeic-practice-btn toeic-practice-next" onClick={next}>
                {qi < part.questions.length - 1 ? "Câu tiếp theo →" : "Xem kết quả →"}
              </button>
            </div>
          </div>
        )}

        {showRes && sel === q.correct && (
          <div className="toeic-practice-nav">
            {qi > 0 && <button className="toeic-practice-btn toeic-practice-prev" onClick={prev}>← Câu trước</button>}
            <button className="toeic-practice-btn toeic-practice-next" onClick={next}>
              {qi < part.questions.length - 1 ? "Câu tiếp theo →" : "Xem kết quả →"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function FullTestMode({ onBack }) {
  const [selectedVariantId, setSelectedVariantId] = useState("fulltest-a");
  const [savedSession, setSavedSession] = useState(null);
  const selectedVariant = FULL_TEST_VARIANTS.find((variant) => variant.id === selectedVariantId) || FULL_TEST_VARIANTS[0];
  const allParts = [...selectedVariant.parts.listening, ...selectedVariant.parts.reading];
  const allQs = allParts.flatMap((part) =>
    part.questions.map((q) => ({
      ...q,
      partId: part.id,
      partLabel: part.label,
      skill: allParts.indexOf(part) < selectedVariant.parts.listening.length ? "Listening" : "Reading",
    }))
  );

  const [phase, setPhase] = useState("intro");
  const [qi, setQi] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(120 * 60);
  const timerRef = useRef(null);
  const xpAwardedRef = useRef(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("toeic_fulltest_state");
      if (!saved) return;
      const parsed = JSON.parse(saved);
      if (parsed.timeLeft > 0 && parsed.phase === "running") {
        setSelectedVariantId(parsed.variantId || "fulltest-a");
        setSavedSession({
          variantId: parsed.variantId || "fulltest-a",
          qi: parsed.qi || 0,
          answers: parsed.answers || {},
          timeLeft: parsed.timeLeft,
        });
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (phase === "running") {
      localStorage.setItem("toeic_fulltest_state", JSON.stringify({ phase, qi, answers, timeLeft, variantId: selectedVariantId }));
    }
  }, [phase, qi, answers, timeLeft, selectedVariantId]);

  useEffect(() => {
    if (phase === "result" && !xpAwardedRef.current) {
      xpToeicFullTest();
      xpAwardedRef.current = true;
      localStorage.removeItem("toeic_fulltest_state");
    }
  }, [phase]);

  useEffect(() => {
    if (phase !== "running") return undefined;
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          setPhase("result");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [phase]);

  const submit = () => {
    clearInterval(timerRef.current);
    setPhase("result");
  };

  const getFullTestInstruction = (q) => {
    const basePartId = getBasePartId(q.partId);
    if (basePartId === "part1") return "Quan sát hình và chọn câu mô tả đúng nhất.";
    if (basePartId === "part2") return "Nghe câu hỏi hoặc câu nói và chọn phản hồi phù hợp nhất.";
    if (basePartId === "part3") return "Nghe đoạn hội thoại và chọn đáp án đúng cho câu hỏi.";
    if (basePartId === "part4") return "Nghe bài nói ngắn và chọn đáp án đúng cho câu hỏi.";
    if (basePartId === "part5") return "Đọc câu chưa hoàn chỉnh và chọn đáp án đúng nhất để điền vào chỗ trống.";
    if (basePartId === "part6") return "Đọc đoạn văn và chọn đáp án phù hợp nhất để hoàn thành nội dung.";
    if (basePartId === "part7") return "Đọc bài đọc và chọn đáp án đúng cho câu hỏi.";
    return "";
  };

  const getFullTestPrompt = (q) => {
    const basePartId = getBasePartId(q.partId);
    if (basePartId === "part3" || basePartId === "part4" || basePartId === "part7") return q.question || "";
    if (basePartId === "part5") return q.text || "";
    if (basePartId === "part6") return q.question || "";
    return "";
  };

  const getFullTestPassage = (q) => {
    const basePartId = getBasePartId(q.partId);
    if (basePartId === "part6") return q.text || q.passage || "";
    if (basePartId === "part7") return q.passage || "";
    return q.passage || "";
  };

  const renderFullTestOptionLabel = (q, opt, idx) => {
    const basePartId = getBasePartId(q.partId);
    if (basePartId === "part1" || basePartId === "part2") {
      return <span className="toeic-option-code-only">Đáp án {String.fromCharCode(65 + idx)}</span>;
    }
    return opt;
  };

  if (phase === "intro") {
    return (
      <div className="toeic-test-select">
        <button className="toeic-back-link" onClick={onBack}>← Quay lại</button>
        <div className="toeic-test-hero">
          <div className="toeic-test-hero-icon">📋</div>
          <h2>Thi thử TOEIC</h2>
          <p>{allQs.length} câu hỏi · 120 phút · Mô phỏng bài thi TOEIC theo chuẩn ETS</p>
        </div>
        <div className="toeic-test-cards">
          {FULL_TEST_VARIANTS.map((variant) => (
            <div key={variant.id} className={`toeic-test-card${selectedVariantId === variant.id ? " toeic-test-card-full" : ""}`}>
              <div className="toeic-test-card-icon">📝</div>
              <h3>{variant.name}</h3>
              <p>{variant.desc}</p>
              <ul className="toeic-test-features">
                <li>{[...variant.parts.listening, ...variant.parts.reading].flatMap((part) => part.questions).length} câu hỏi</li>
                <li>120 phút</li>
                <li>Listening + Reading</li>
              </ul>
              <button
                className="toeic-start-btn toeic-start-btn-full"
                onClick={() => {
                  localStorage.removeItem("toeic_fulltest_state");
                  setSavedSession(null);
                  setSelectedVariantId(variant.id);
                  setPhase("running");
                  setQi(0);
                  setAnswers({});
                  setTimeLeft(120 * 60);
                  xpAwardedRef.current = false;
                }}
              >
                Bắt đầu {variant.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (phase === "running") {
    const q = allQs[qi];
    const questionImageSrc = getFullTestQuestionImageSrc(q);
    const answered = Object.keys(answers).length;
    const isUrgent = timeLeft < 120;
    return (
      <div className="toeic-test-running">
        <div className="toeic-test-topbar">
          <div className="toeic-test-info">
            <span className="toeic-test-badge">Full Test</span>
            <span className="toeic-test-badge">{selectedVariant.name}</span>
            <span className="toeic-test-progress">Câu {qi + 1} / {allQs.length}</span>
            <span className="toeic-answered-count">{answered} đã trả lời</span>
          </div>
          <div className={`toeic-timer${isUrgent ? " urgent" : ""}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm1-10V7h-2v7h6v-2h-4Z" /></svg>
            {formatTime(timeLeft)}
          </div>
          <button className="toeic-submit-early-btn" onClick={submit}>Nộp bài</button>
        </div>
        <div className="toeic-timer-bar"><div className="toeic-timer-fill" style={{ width: `${(timeLeft / (120 * 60)) * 100}%`, background: isUrgent ? "var(--red,#ef4444)" : "var(--blue,#3b82f6)" }} /></div>
        <div className="toeic-question-nav"><div className="toeic-nav-grid">
          {allQs.map((qq, i) => (
            <button key={qq.id} className={`toeic-nav-cell${i === qi ? " active" : ""}${answers[qq.id] !== undefined ? " answered" : ""}`} onClick={() => setQi(i)}>{i + 1}</button>
          ))}
        </div></div>
        <div className="toeic-test-question-area">
          <div className="toeic-test-part-label">{q.partLabel} · {q.skill}</div>
          {questionImageSrc && <div className="toeic-q-image"><img src={questionImageSrc} alt="Question figure" /></div>}
          {q.imageEmoji && !questionImageSrc && (
            <div className="toeic-visual-card">
              <div className="toeic-visual-emoji">{q.imageEmoji}</div>
              <div className="toeic-visual-copy">
                <strong>{q.imageTitle}</strong>
                <p>{q.imageDetail}</p>
              </div>
            </div>
          )}
          {q.skill === "Listening" && q.audioText && (
            <div className="toeic-audio-row toeic-audio-row-spaced">
              <button className="toeic-audio-btn" onClick={() => speakToeicText(q.audioText || "")}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M2 16H5.889L11.183 20.332C11.273 20.405 11.385 20.445 11.5 20.445C11.776 20.445 12 20.221 12 19.945V4.055C12 3.94 11.96 3.828 11.887 3.739C11.713 3.525 11.399 3.493 11.185 3.668L5.889 8H2C1.448 8 1 8.448 1 9V15C1 15.552 1.448 16 2 16ZM23 12C23 15.292 21.554 18.246 19.262 20.262L17.845 18.844C19.776 17.194 21 14.74 21 12C21 9.26 19.776 6.806 17.845 5.156L19.262 3.738C21.554 5.754 23 8.708 23 12Z" /></svg>
                Phát audio
              </button>
            </div>
          )}
          {q.skill === "Listening" && q.audioText && <div className="toeic-reading-passage">{q.audioText}</div>}
          <div className="toeic-test-q-text">{getFullTestInstruction(q)}</div>
          {getFullTestPassage(q) && <div className="toeic-reading-passage">{getFullTestPassage(q)}</div>}
          {getFullTestPrompt(q) && <div className="toeic-test-q-text"><strong>{getFullTestPrompt(q)}</strong></div>}
          <div className="toeic-options-grid">
            {q.options.map((opt, idx) => (
              <button key={idx} className={`toeic-option${answers[q.id] === idx ? " selected" : ""}`} onClick={() => setAnswers({ ...answers, [q.id]: idx })}>
                <span className="toeic-option-letter">{String.fromCharCode(65 + idx)}</span>{renderFullTestOptionLabel(q, opt, idx)}
              </button>
            ))}
          </div>
          <div className="toeic-test-nav">
            <button disabled={qi === 0} onClick={() => setQi(qi - 1)} className="toeic-nav-btn">← Trước</button>
            {qi < allQs.length - 1
              ? <button onClick={() => setQi(qi + 1)} className="toeic-nav-btn toeic-nav-next">Tiếp theo →</button>
              : <button onClick={submit} className="toeic-nav-btn toeic-nav-submit">Nộp bài ✓</button>}
          </div>
        </div>
      </div>
    );
  }

  const lQs = allQs.filter((q) => q.skill === "Listening");
  const rQs = allQs.filter((q) => q.skill === "Reading");
  const lCorrect = lQs.filter((q) => answers[q.id] === q.correct).length;
  const rCorrect = rQs.filter((q) => answers[q.id] === q.correct).length;
  const score = convertToToeicScore(lCorrect, lQs.length, rCorrect, rQs.length);
  const totalCorrect = lCorrect + rCorrect;
  const pct = Math.round((totalCorrect / allQs.length) * 100);
  const byPart = {};

  allQs.forEach((q) => {
    if (!byPart[q.partLabel]) byPart[q.partLabel] = { correct: 0, total: 0 };
    byPart[q.partLabel].total += 1;
    if (answers[q.id] === q.correct) byPart[q.partLabel].correct += 1;
  });

  return (
    <div className="toeic-result">
      <div className="toeic-result-header">
        {timeLeft === 0 && <div className="toeic-timeout-badge">Hết giờ - Bài đã được nộp tự động</div>}
        <div className="toeic-result-score-circle"><div className="toeic-score-inner">
          <span className="toeic-score-num">{score.total}</span>
          <span className="toeic-score-label">điểm TOEIC</span>
        </div></div>
        <h2>{pct >= 80 ? "Excellent" : pct >= 60 ? "Good job" : "Keep practicing"}</h2>
        <p>Listening: {score.listening} · Reading: {score.reading} · Tổng: {score.total}/990</p>
        <p className="toeic-result-meta">{totalCorrect}/{allQs.length} câu đúng ({pct}%) · Thời gian: {formatTime(120 * 60 - timeLeft)}</p>
      </div>

      <div className="toeic-result-stats">
        <h3>Điểm theo part</h3>
        <div className="toeic-part-scores">
          {Object.entries(byPart).map(([partName, detail]) => {
            const pp = Math.round((detail.correct / detail.total) * 100);
            return (
              <div key={partName} className="toeic-part-score-card">
                <div className="toeic-part-score-header"><span className="toeic-part-score-name">{partName}</span><span className="toeic-part-score-pct">{pp}%</span></div>
                <div className="toeic-part-score-bar"><div className="toeic-part-score-fill" style={{ width: `${pp}%` }} /></div>
                <span className="toeic-part-score-detail">{detail.correct}/{detail.total} câu</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="toeic-result-review">
        <h3>Xem giải thích</h3>
        {allQs.map((q, i) => {
          const ua = answers[q.id];
          const ok = ua === q.correct;
          const skip = ua === undefined;
          return (
            <div key={q.id} className={`toeic-review-item ${ok ? "review-correct" : skip ? "review-unanswered" : "review-wrong"}`}>
              <div className="toeic-review-top">
                <span className="toeic-review-num">Câu {i + 1}</span>
                <span className="toeic-review-part">{q.partLabel}</span>
                <span className={`toeic-review-badge ${ok ? "badge-ok" : skip ? "badge-unanswered" : "badge-err"}`}>{ok ? "✓ Đúng" : skip ? "○ Bỏ qua" : "✗ Sai"}</span>
              </div>
              <p className="toeic-review-q">{q.passage || q.text || q.audioText}</p>
              {q.question && <p className="toeic-review-q"><strong>{q.question}</strong></p>}
              <p className="toeic-review-ans">Đáp án: <strong>{String.fromCharCode(65 + q.correct)}. {q.options[q.correct]}</strong></p>
              {!ok && ua !== undefined && <p className="toeic-review-user">Bạn chọn: {String.fromCharCode(65 + ua)}. {q.options[ua]}</p>}
              <p className="toeic-review-explain">💡 {q.explanation}</p>
            </div>
          );
        })}
      </div>
      <div className="toeic-result-actions">
        <button className="toeic-retry-btn" onClick={() => { setPhase("intro"); setAnswers({}); setQi(0); setTimeLeft(120 * 60); xpAwardedRef.current = false; }}>↻ Làm lại</button>
        <button className="toeic-back-btn" onClick={onBack}>← Luyện part khác</button>
      </div>
    </div>
  );
}

export default function TOEIC() {
  const [tab, setTab] = useState("listening");
  const [activeListeningMode, setActiveListeningMode] = useState(null);
  const [activeListeningTopic, setActiveListeningTopic] = useState(null);
  const [activeReadingMode, setActiveReadingMode] = useState(null);
  const [activeReadingTopic, setActiveReadingTopic] = useState(null);

  const handleTabChange = (nextTab) => {
    setTab(nextTab);
    if (nextTab !== "listening") {
      setActiveListeningMode(null);
      setActiveListeningTopic(null);
    }
    if (nextTab !== "reading") {
      setActiveReadingMode(null);
      setActiveReadingTopic(null);
    }
  };

  if (tab === "fulltest") {
    return (
      <main className="dash-main toeic-page" id="page-toeic">
        <FullTestMode onBack={() => handleTabChange("listening")} />
      </main>
    );
  }

  if (tab === "listening" && activeListeningTopic) {
    return (
      <main className="dash-main toeic-page" id="page-toeic">
        <PracticeSession part={activeListeningTopic} onBack={() => setActiveListeningTopic(null)} backLabel="← Quay lại chọn topic" />
      </main>
    );
  }

  if (tab === "reading" && activeReadingTopic) {
    return (
      <main className="dash-main toeic-page" id="page-toeic">
        <PracticeSession part={activeReadingTopic} onBack={() => setActiveReadingTopic(null)} backLabel="← Quay lại chọn topic" />
      </main>
    );
  }

  return (
    <main className="dash-main toeic-page" id="page-toeic">
      <section className="toeic-hero">
        <div className="toeic-hero-copy">
          <div className="toeic-eyebrow">TOEIC</div>
          <h1>Luyện tập và thi thử TOEIC</h1>
          <p>Chọn kỹ năng và dạng bài để luyện tập. Listening và Reading hiện được chia theo đúng từng part để bám sát cấu trúc đề TOEIC hơn.</p>
        </div>
        <div className="toeic-tab-switch">
          <button className={`toeic-tab-btn${tab === "listening" ? " active" : ""}`} onClick={() => handleTabChange("listening")}>🎧 Listening</button>
          <button className={`toeic-tab-btn${tab === "reading" ? " active" : ""}`} onClick={() => handleTabChange("reading")}>📖 Reading</button>
          <button className={`toeic-tab-btn${tab === "fulltest" ? " active" : ""}`} onClick={() => handleTabChange("fulltest")}>📋 Full Test</button>
        </div>
      </section>

      <div className="toeic-content">
        {tab === "listening" ? (
          activeListeningMode ? (
            <TopicGrid
              mode={activeListeningMode}
              onSelect={setActiveListeningTopic}
              onBack={() => {
                setActiveListeningMode(null);
                setActiveListeningTopic(null);
              }}
              backLabel="← Quay lại chọn loại listening"
            />
          ) : (
            <ModeGrid modes={TOEIC_LISTENING_PRACTICE_MODES} onSelect={setActiveListeningMode} />
          )
        ) : activeReadingMode ? (
          <TopicGrid
            mode={activeReadingMode}
            onSelect={setActiveReadingTopic}
            onBack={() => {
              setActiveReadingMode(null);
              setActiveReadingTopic(null);
            }}
            backLabel="← Quay lại chọn loại reading"
          />
        ) : (
          <ModeGrid modes={TOEIC_READING_PRACTICE_MODES} onSelect={setActiveReadingMode} />
        )}
      </div>
    </main>
  );
}

