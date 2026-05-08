import { useState, useEffect, useRef } from "react";
import { TOEIC_PARTS, convertToToeicScore } from "../../data/toeicData";
import { xpToeicPartComplete, xpToeicFullTest } from "../../utils/xpSystem";

function formatTime(s) {
  return `${Math.floor(s/60).toString().padStart(2,"0")}:${(s%60).toString().padStart(2,"0")}`;
}

// ── Part Selection Grid ──
function PartGrid({ parts, onSelect }) {
  return (
    <div className="toeic-parts-grid">
      {parts.map(p => (
        <button key={p.id} className="toeic-part-card" onClick={() => onSelect(p)}>
          <span className="toeic-part-card-icon">{p.icon}</span>
          <div className="toeic-part-card-body">
            <strong>{p.label}: {p.title}</strong>
            <span className="toeic-part-card-desc">{p.desc}</span>
            <span className="toeic-part-card-count">{p.questions.length} câu luyện tập</span>
          </div>
          <span className="toeic-part-card-arrow">→</span>
        </button>
      ))}
    </div>
  );
}

// ── Practice Session (per part) ──
function PracticeSession({ part, onBack }) {
  const [qi, setQi] = useState(0);
  const [sel, setSel] = useState(null);
  const [showRes, setShowRes] = useState(false);
  const [showScript, setShowScript] = useState(false);
  const [answers, setAnswers] = useState({});
  const [done, setDone] = useState(false);
  const isL = part.id.startsWith("part1") || part.id.startsWith("part2") || part.id.startsWith("part3") || part.id.startsWith("part4");
  const q = part.questions[qi];
  const xpAwardedRef = useRef(false);

  useEffect(() => {
    if (done && !xpAwardedRef.current) {
      xpToeicPartComplete();
      xpAwardedRef.current = true;
    }
  }, [done]);

  const speak = () => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const ut = new SpeechSynthesisUtterance(q.audioText || "");
    ut.lang = "en-US"; ut.rate = 0.85;
    window.speechSynthesis.speak(ut);
  };

  const answer = (idx) => {
    if (showRes) return;
    setSel(idx); setShowRes(true);
    setAnswers(prev => ({ ...prev, [q.id]: idx }));
  };

  const next = () => {
    if (qi < part.questions.length - 1) {
      setQi(qi + 1); setSel(null); setShowRes(false); setShowScript(false);
    } else { setDone(true); }
  };
  const prev = () => {
    if (qi > 0) { setQi(qi - 1); setSel(null); setShowRes(false); setShowScript(false); }
  };

  // Result view
  if (done) {
    const correct = part.questions.filter(qq => answers[qq.id] === qq.correct).length;
    const pct = Math.round((correct / part.questions.length) * 100);
    const wrong = part.questions.filter(qq => answers[qq.id] !== undefined && answers[qq.id] !== qq.correct);
    return (
      <div className="toeic-result">
        <div className="toeic-result-header">
          <div className="toeic-result-score-circle"><div className="toeic-score-inner">
            <span className="toeic-score-num">{correct}/{part.questions.length}</span>
            <span className="toeic-score-label">câu đúng</span>
          </div></div>
          <h2>{pct >= 80 ? "🎉 Xuất sắc!" : pct >= 60 ? "👍 Khá tốt!" : "💪 Cần ôn thêm!"}</h2>
          <p>Bạn đạt {pct}% – {correct}/{part.questions.length} câu đúng</p>
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
                  <span className="toeic-review-num">Câu {i+1}</span>
                  <span className={`toeic-review-badge ${ok ? "badge-ok" : skip ? "badge-unanswered" : "badge-err"}`}>
                    {ok ? "✓ Đúng" : skip ? "○ Bỏ qua" : "✗ Sai"}
                  </span>
                </div>
                <p className="toeic-review-q">{qq.passage || qq.text || qq.audioText}</p>
                {qq.question && <p className="toeic-review-q"><strong>{qq.question}</strong></p>}
                <p className="toeic-review-ans">Đáp án đúng: <strong>{String.fromCharCode(65+qq.correct)}. {qq.options[qq.correct]}</strong></p>
                {!ok && ua !== undefined && <p className="toeic-review-user">Bạn chọn: {String.fromCharCode(65+ua)}. {qq.options[ua]}</p>}
                <p className="toeic-review-explain">💡 {qq.explanation}</p>
              </div>
            );
          })}
        </div>

        <div className="toeic-result-actions">
          {wrong.length > 0 && (
            <button className="toeic-retry-btn" onClick={() => { setDone(false); setQi(0); setSel(null); setShowRes(false); setAnswers({}); xpAwardedRef.current = false; }}>
              ↻ Làm lại câu sai
            </button>
          )}
          <button className="toeic-back-btn" onClick={onBack}>← Luyện part khác</button>
        </div>
      </div>
    );
  }

  return (
    <div className="toeic-practice-layout">
      <button className="toeic-back-link" onClick={onBack}>← Quay lại chọn Part</button>

      <div className="toeic-question-card">
        <div className="toeic-qcard-header">
          <span className="toeic-qcard-part">{part.icon} {part.label} – {part.title}</span>
          <span className="toeic-qcard-counter">{qi+1} / {part.questions.length}</span>
        </div>

        {isL && q.audioText && (
          <div className="toeic-audio-row">
            <button className="toeic-audio-btn" onClick={speak}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M2 16H5.889L11.183 20.332C11.273 20.405 11.385 20.445 11.5 20.445C11.776 20.445 12 20.221 12 19.945V4.055C12 3.94 11.96 3.828 11.887 3.739C11.713 3.525 11.399 3.493 11.185 3.668L5.889 8H2C1.448 8 1 8.448 1 9V15C1 15.552 1.448 16 2 16ZM23 12C23 15.292 21.554 18.246 19.262 20.262L17.845 18.844C19.776 17.194 21 14.74 21 12C21 9.26 19.776 6.806 17.845 5.156L19.262 3.738C21.554 5.754 23 8.708 23 12Z"/></svg>
              Nghe
            </button>
            <button className="toeic-script-btn" onClick={() => setShowScript(!showScript)}>
              {showScript ? "Ẩn script" : "Xem script"}
            </button>
            {showScript && <p className="toeic-script-text">"{q.audioText}"</p>}
          </div>
        )}

        {q.image && <div className="toeic-q-image"><img src={q.image} alt="Question figure" /></div>}
        {q.imageUrl && <div className="toeic-q-image"><img src={q.imageUrl} alt="Question figure" /></div>}
        {q.passage && <div className="toeic-reading-passage">{q.passage}</div>}
        {q.question && <p className="toeic-qcard-stem">{q.question}</p>}
        {q.text && !q.passage && <p className="toeic-qcard-stem">{q.text}</p>}

        <div className="toeic-options-grid">
          {q.options.map((opt, idx) => {
            let cls = "toeic-option";
            if (showRes) { if (idx === q.correct) cls += " correct"; else if (idx === sel) cls += " wrong"; }
            else if (idx === sel) cls += " selected";
            return (
              <button key={idx} className={cls} onClick={() => answer(idx)}>
                <span className="toeic-option-letter">{String.fromCharCode(65+idx)}</span>{opt}
              </button>
            );
          })}
        </div>

        {showRes && (
          <div className={`toeic-feedback ${sel === q.correct ? "feedback-correct" : "feedback-wrong"}`}>
            <strong>{sel === q.correct ? "✓ Chính xác!" : "✗ Sai rồi!"}</strong>
            <p>{q.explanation}</p>
            <div className="toeic-practice-nav">
              {qi > 0 && <button className="toeic-practice-btn toeic-practice-prev" onClick={prev}>← Câu trước</button>}
              <button className="toeic-practice-btn toeic-practice-next" onClick={next}>
                {qi < part.questions.length - 1 ? "Câu tiếp theo →" : "Xem kết quả →"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Full Test Mode ──
function FullTestMode({ onBack }) {
  const allParts = [...TOEIC_PARTS.listening, ...TOEIC_PARTS.reading];
  const allQs = allParts.flatMap(p => p.questions.map(q => ({ ...q, partId: p.id, partLabel: p.label, skill: allParts.indexOf(p) < TOEIC_PARTS.listening.length ? "Listening" : "Reading" })));
  
  const [phase, setPhase] = useState("intro");
  const [qi, setQi] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(120 * 60);
  const timerRef = useRef(null);
  const xpAwardedRef = useRef(false);

  // Restore state from localStorage if exists
  useEffect(() => {
    try {
      const saved = localStorage.getItem('toeic_fulltest_state');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.timeLeft > 0 && parsed.phase === "running") {
          setPhase("running");
          setQi(parsed.qi || 0);
          setAnswers(parsed.answers || {});
          setTimeLeft(parsed.timeLeft);
        }
      }
    } catch {
      // ignore invalid saved state
    }
  }, []);

  // Save state periodically and on change
  useEffect(() => {
    if (phase === "running") {
      localStorage.setItem('toeic_fulltest_state', JSON.stringify({ phase, qi, answers, timeLeft }));
    }
  }, [phase, qi, answers, timeLeft]);

  // Award XP when test is done
  useEffect(() => {
    if (phase === "result" && !xpAwardedRef.current) {
      xpToeicFullTest();
      xpAwardedRef.current = true;
      localStorage.removeItem('toeic_fulltest_state');
    }
  }, [phase]);

  useEffect(() => {
    if (phase !== "running") return;
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => { if (prev <= 1) { clearInterval(timerRef.current); setPhase("result"); return 0; } return prev - 1; });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [phase]);

  const submit = () => { clearInterval(timerRef.current); setPhase("result"); };
  const isUrgent = timeLeft < 120;

  if (phase === "intro") {
    return (
      <div className="toeic-test-select">
        <button className="toeic-back-link" onClick={onBack}>← Quay lại</button>
        <div className="toeic-test-hero">
          <div className="toeic-test-hero-icon">📋</div>
          <h2>Thi thử TOEIC</h2>
          <p>{allQs.length} câu hỏi · 120 phút · Mô phỏng bài thi TOEIC theo chuẩn ETS</p>
        </div>
        <div style={{textAlign:"center"}}>
          <button className="toeic-start-btn toeic-start-btn-full" onClick={() => setPhase("running")}>Bắt đầu thi thử</button>
        </div>
      </div>
    );
  }

  if (phase === "running") {
    const q = allQs[qi];
    const answered = Object.keys(answers).length;
    return (
      <div className="toeic-test-running">
        <div className="toeic-test-topbar">
          <div className="toeic-test-info">
            <span className="toeic-test-badge">Full Test</span>
            <span className="toeic-test-progress">Câu {qi+1} / {allQs.length}</span>
            <span className="toeic-answered-count">{answered} đã trả lời</span>
          </div>
          <div className={`toeic-timer${isUrgent ? " urgent" : ""}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm1-10V7h-2v7h6v-2h-4Z"/></svg>
            {formatTime(timeLeft)}
          </div>
          <button className="toeic-submit-early-btn" onClick={submit}>Nộp bài</button>
        </div>
        <div className="toeic-timer-bar"><div className="toeic-timer-fill" style={{width:`${(timeLeft/(120*60))*100}%`,background:isUrgent?"var(--red,#ef4444)":"var(--blue,#3b82f6)"}}/></div>
        <div className="toeic-question-nav"><div className="toeic-nav-grid">
          {allQs.map((qq,i) => (
            <button key={qq.id} className={`toeic-nav-cell${i===qi?" active":""}${answers[qq.id]!==undefined?" answered":""}`} onClick={()=>setQi(i)}>{i+1}</button>
          ))}
        </div></div>
        <div className="toeic-test-question-area">
          <div className="toeic-test-part-label">{q.partLabel} · {q.skill}</div>
          {q.image && <div className="toeic-q-image"><img src={q.image} alt="Question figure" /></div>}
          {q.imageUrl && <div className="toeic-q-image"><img src={q.imageUrl} alt="Question figure" /></div>}
          
          {q.skill === "Listening" && q.audioText && (
            <div className="toeic-audio-row" style={{ marginBottom: "16px" }}>
              <button className="toeic-audio-btn" onClick={() => {
                if (!window.speechSynthesis) return;
                window.speechSynthesis.cancel();
                const ut = new SpeechSynthesisUtterance(q.audioText || "");
                ut.lang = "en-US"; ut.rate = 0.85;
                window.speechSynthesis.speak(ut);
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M2 16H5.889L11.183 20.332C11.273 20.405 11.385 20.445 11.5 20.445C11.776 20.445 12 20.221 12 19.945V4.055C12 3.94 11.96 3.828 11.887 3.739C11.713 3.525 11.399 3.493 11.185 3.668L5.889 8H2C1.448 8 1 8.448 1 9V15C1 15.552 1.448 16 2 16ZM23 12C23 15.292 21.554 18.246 19.262 20.262L17.845 18.844C19.776 17.194 21 14.74 21 12C21 9.26 19.776 6.806 17.845 5.156L19.262 3.738C21.554 5.754 23 8.708 23 12Z"/></svg>
                Phát Audio
              </button>
            </div>
          )}

          {q.passage && <div className="toeic-reading-passage">{q.passage}</div>}
          {q.question && <div className="toeic-test-q-text">{q.question}</div>}
          {q.text && !q.passage && <div className="toeic-test-q-text">{q.text}</div>}
          
          <div className="toeic-options-grid">
            {q.options.map((opt,idx) => (
              <button key={idx} className={`toeic-option${answers[q.id]===idx?" selected":""}`} onClick={()=>setAnswers({...answers,[q.id]:idx})}>
                <span className="toeic-option-letter">{String.fromCharCode(65+idx)}</span>{opt}
              </button>
            ))}
          </div>
          <div className="toeic-test-nav">
            <button disabled={qi===0} onClick={()=>setQi(qi-1)} className="toeic-nav-btn">← Trước</button>
            {qi < allQs.length - 1
              ? <button onClick={()=>setQi(qi+1)} className="toeic-nav-btn toeic-nav-next">Tiếp theo →</button>
              : <button onClick={submit} className="toeic-nav-btn toeic-nav-submit">Nộp bài ✓</button>}
          </div>
        </div>
      </div>
    );
  }

  // Result
  const lQs = allQs.filter(q=>q.skill==="Listening");
  const rQs = allQs.filter(q=>q.skill==="Reading");
  const lCorrect = lQs.filter(q=>answers[q.id]===q.correct).length;
  const rCorrect = rQs.filter(q=>answers[q.id]===q.correct).length;
  const score = convertToToeicScore(lCorrect, lQs.length, rCorrect, rQs.length);
  const totalCorrect = lCorrect + rCorrect;
  const pct = Math.round((totalCorrect / allQs.length) * 100);

  const byPart = {};
  allQs.forEach(q => {
    if (!byPart[q.partLabel]) byPart[q.partLabel] = {correct:0,total:0};
    byPart[q.partLabel].total++;
    if (answers[q.id] === q.correct) byPart[q.partLabel].correct++;
  });

  return (
    <div className="toeic-result">
      <div className="toeic-result-header">
        {timeLeft===0 && <div className="toeic-timeout-badge">⏰ Hết giờ – Bài đã được nộp tự động</div>}
        <div className="toeic-result-score-circle"><div className="toeic-score-inner">
          <span className="toeic-score-num">{score.total}</span>
          <span className="toeic-score-label">điểm TOEIC</span>
        </div></div>
        <h2>{pct >= 80 ? "🎉 Xuất sắc!" : pct >= 60 ? "👍 Khá tốt!" : "💪 Cần ôn thêm!"}</h2>
        <p>Listening: {score.listening} · Reading: {score.reading} · Tổng: {score.total}/990</p>
        <p style={{fontSize:"13px",color:"var(--text-secondary)"}}>{totalCorrect}/{allQs.length} câu đúng ({pct}%) · Thời gian: {formatTime(120*60 - timeLeft)}</p>
      </div>

      <div className="toeic-result-stats">
        <h3>Điểm theo Part</h3>
        <div className="toeic-part-scores">
          {Object.entries(byPart).map(([part,d]) => {
            const pp = Math.round((d.correct/d.total)*100);
            return (
              <div key={part} className="toeic-part-score-card">
                <div className="toeic-part-score-header"><span className="toeic-part-score-name">{part}</span><span className="toeic-part-score-pct">{pp}%</span></div>
                <div className="toeic-part-score-bar"><div className="toeic-part-score-fill" style={{width:`${pp}%`}}/></div>
                <span className="toeic-part-score-detail">{d.correct}/{d.total} câu</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="toeic-result-review">
        <h3>Xem giải thích</h3>
        {allQs.map((q,i) => {
          const ua = answers[q.id]; const ok = ua === q.correct; const skip = ua === undefined;
          return (
            <div key={q.id} className={`toeic-review-item ${ok?"review-correct":skip?"review-unanswered":"review-wrong"}`}>
              <div className="toeic-review-top">
                <span className="toeic-review-num">Câu {i+1}</span>
                <span className="toeic-review-part">{q.partLabel}</span>
                <span className={`toeic-review-badge ${ok?"badge-ok":skip?"badge-unanswered":"badge-err"}`}>{ok?"✓ Đúng":skip?"○ Bỏ qua":"✗ Sai"}</span>
              </div>
              <p className="toeic-review-q">{q.passage || q.text || q.audioText}</p>
              {q.question && <p className="toeic-review-q"><strong>{q.question}</strong></p>}
              <p className="toeic-review-ans">Đáp án: <strong>{String.fromCharCode(65+q.correct)}. {q.options[q.correct]}</strong></p>
              {!ok && ua !== undefined && <p className="toeic-review-user">Bạn chọn: {String.fromCharCode(65+ua)}. {q.options[ua]}</p>}
              <p className="toeic-review-explain">💡 {q.explanation}</p>
            </div>
          );
        })}
      </div>
      <div className="toeic-result-actions">
        <button className="toeic-retry-btn" onClick={() => { setPhase("intro"); setAnswers({}); setQi(0); setTimeLeft(120*60); xpAwardedRef.current = false; }}>↻ Làm lại</button>
        <button className="toeic-back-btn" onClick={onBack}>← Luyện part khác</button>
      </div>
    </div>
  );
}

// ── Main TOEIC Page ──
export default function TOEIC() {
  const [tab, setTab] = useState("listening");
  const [activePart, setActivePart] = useState(null);

  if (tab === "fulltest") {
    return (
      <main className="dash-main toeic-page" id="page-toeic">
        <FullTestMode onBack={() => setTab("listening")} />
      </main>
    );
  }

  if (activePart) {
    return (
      <main className="dash-main toeic-page" id="page-toeic">
        <PracticeSession part={activePart} onBack={() => setActivePart(null)} />
      </main>
    );
  }

  const parts = tab === "listening" ? TOEIC_PARTS.listening : TOEIC_PARTS.reading;

  return (
    <main className="dash-main toeic-page" id="page-toeic">
      <section className="toeic-hero">
        <div className="toeic-hero-copy">
          <div className="toeic-eyebrow">TOEIC</div>
          <h1>Luyện tập & Thi thử TOEIC</h1>
          <p>Chọn kỹ năng và Part để luyện tập, hoặc thi thử Full Test.</p>
        </div>
        <div className="toeic-tab-switch">
          <button className={`toeic-tab-btn${tab==="listening"?" active":""}`} onClick={()=>setTab("listening")}>🎧 Listening</button>
          <button className={`toeic-tab-btn${tab==="reading"?" active":""}`} onClick={()=>setTab("reading")}>📖 Reading</button>
          <button className={`toeic-tab-btn${tab==="fulltest"?" active":""}`} onClick={()=>setTab("fulltest")}>📋 Full Test</button>
        </div>
      </section>
      <div className="toeic-content">
        <PartGrid parts={parts} onSelect={setActivePart} />
      </div>
    </main>
  );
}
