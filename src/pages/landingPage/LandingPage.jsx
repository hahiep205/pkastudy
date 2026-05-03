import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

import { useLandingReveal, useCounterAnimation } from './hooks';
import { FEATURES, AVATARS, SVGS, COURSE_CARDS } from '../../data/landingData';
import CourseCard from './CourseCard';

// ── Component ───────────────────────────────────────────────────────────────
export default function LandingPage() {
    useLandingReveal();
    useCounterAnimation();

    return (
        <>
            {/* ── HERO (existing, kept intact) ── */}
            <header className="hero">
                <div className="hero-left">
                    <div className="lp-eyebrow lp-eyebrow-blue" style={{ marginTop: '7%', color: 'var(--blue)' }}>{SVGS[0].svg} Học thử miễn phí ngay!</div>
                    <h1>Learn and retain vocabulary effectively with <span className="name-logo">pkastudy</span> now!</h1>
                    <p>
                        Nền tảng học Vocabulary tiếng Anh - Hàn toàn diện với từ vựng phong phú,
                        phát âm chuẩn, luyện nghe hiệu quả, flashcard sinh động và trợ lý AI thông minh.
                    </p>
                    <div className="hero-buttons">
                        <Link to="/dashboard">
                            <button className="btn btn-primary" id="btn-get-started">Bắt đầu ngay</button>
                        </Link>
                        <Link to="/login">
                            <button className="btn btn-secondary">Đã có tài khoản</button>
                        </Link>
                    </div>
                </div>

            </header>

            {/* ══════════════════════════════════════════
                SECTION 1: GIỚI THIỆU - Features
            ══════════════════════════════════════════ */}
            <section className="lp-section lp-features" id="gioi-thieu">
                <div className="lp-container">
                    <div className="lp-features-header lp-reveal">
                        <div className="lp-eyebrow lp-eyebrow-blue">
                            {SVGS[1].svg} Giới thiệu về pkastudy
                        </div>
                        <h2 className="lp-heading">Các tính năng chính</h2>
                        <p className="lp-subheading">
                            Học và ghi nhớ từ vựng lâu dài thông qua hệ thống tính năng đa dạng, kết hợp AI hỗ trợ hỏi đáp thông minh và cá nhân hóa bộ từ vựng của bạn.
                        </p>
                    </div>

                    <div className="lp-features-grid">
                        {FEATURES.map((feat, i) => (
                            <div
                                key={i}
                                className={`lp-feat-card lp-feat-card--${feat.tone} lp-reveal`}
                                style={{ transitionDelay: `${i * 80}ms` }}
                            >
                                <div className={`lp-feat-icon lp-feat-icon--${feat.tone}`}>
                                    {feat.icon}
                                </div>
                                <h3 className="lp-feat-title">{feat.title}</h3>
                                <p className="lp-feat-desc">{feat.desc}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* ══════════════════════════════════════════
                SECTION 2: KHÓA HỌC - Courses preview
            ══════════════════════════════════════════ */}
            <section className="lp-section lp-courses" id="khoa-hoc">
                <div className="lp-container">
                    <div className="lp-courses-layout">

                        {/* Left: text */}
                        <div className="lp-courses-text lp-reveal">
                            <div>
                                <div className="lp-eyebrow lp-eyebrow-blue">
                                    {SVGS[2].svg} Danh sách tài liệu
                                </div>
                                <h2 className="lp-heading">Build vocabulary that sticks with <span className="name-logo">pkastudy.</span></h2>
                                <p className="lp-subheading">
                                    Hai bộ từ vựng chuẩn quốc tế được biên soạn bám sát đề thi thực tế,
                                    kèm phiên âm và ví dụ giúp bạn học đúng từ đầu.
                                </p>
                            </div>

                            <div className="lp-courses-cta">
                                <Link to="/dashboard/courses" className="lp-btn lp-btn--primary">
                                    Xem tài liệu
                                </Link>
                                <Link to="/dashboard/courses?tab=custom" className="lp-btn lp-btn--secondary">
                                    Bộ từ cá nhân
                                </Link>
                            </div>

                            <p
                                style={{
                                    fontSize: '13px',
                                    color: 'var(--gray-light)',
                                    fontWeight: 600,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px'
                                }}
                            >
                                {SVGS[3].svg} Bạn có thể học thử ngay mà không cần đăng nhập!
                            </p>
                        </div>

                        {/* Right: cards */}
                        <div className="lp-courses-cards">
                            {COURSE_CARDS.map((card, i) => (
                                <CourseCard key={i} {...card} />
                            ))}
                        </div>

                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════
                SECTION 3: Chatbot AI
            ══════════════════════════════════════════ */}
            <section className="lp-section lp-ai-section" id="chatbot-ai">
                <div className="lp-container">
                    <div className="lp-ai-layout lp-reveal">
                        <div className="lp-ai-visual">
                            <div className="lp-ai-mockup">
                                <div className="lp-ai-mockup-header">
                                    <span className="lp-ai-dot" style={{ background: '#58cc02' }}></span>
                                    <span className="lp-ai-title">PKA AI Assistant</span>
                                </div>
                                <div className="lp-ai-mockup-body">
                                    <div className="lp-ai-bubble lp-ai-bubble-user">
                                        Giải thích từ "negotiate" cho tôi
                                    </div>
                                    <div className="lp-ai-bubble lp-ai-bubble-bot">
                                        <strong>negotiate</strong> /nɪˈɡoʊ.ʃi.eɪt/ — <em>(verb)</em><br />
                                        Nghĩa: Đàm phán, thương lượng<br />
                                        <br />
                                        📌 Ví dụ: <em>"We need to negotiate a better deal."</em><br />
                                        🔗 Đồng nghĩa: discuss, bargain, mediate<br />
                                        💡 Mẹo nhớ: nego = "nói go" → nói qua nói lại để đi đến thỏa thuận
                                    </div>
                                    <div className="lp-ai-bubble lp-ai-bubble-user">
                                        Cho thêm 3 ví dụ thực tế
                                    </div>
                                    <div className="lp-ai-typing">
                                        <span></span><span></span><span></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lp-ai-text">
                            <div className="lp-eyebrow lp-eyebrow-blue">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M11 2L5.5 16H7.74286L8.57143 13.5714H15.4286L16.2571 16H18.5L13 2H11ZM12 4.42857L14.7143 12H9.28571L12 4.42857ZM2.5 17L7 22H3V24H21V22H17L21.5 17H19.3L16 21H8L4.7 17H2.5Z"/></svg>
                                {' '}Trợ lý AI thông minh
                            </div>
                            <h2 className="lp-heading">Hỏi bất cứ điều gì về từ vựng</h2>
                            <p className="lp-subheading">
                                AI Chatbot tích hợp sẵn giúp bạn tra nghĩa, giải thích ngữ pháp, lấy ví dụ thực tế, và gợi ý cách ghi nhớ từ vựng hiệu quả — ngay trong ứng dụng.
                            </p>

                            <div className="lp-ai-features">
                                <div className="lp-ai-feat-item">
                                    <div className="lp-ai-feat-icon">💬</div>
                                    <div>
                                        <strong>Hỏi đáp thông minh</strong>
                                        <span>Giải thích chi tiết nghĩa, loại từ, cách dùng và ví dụ thực tế.</span>
                                    </div>
                                </div>
                                <div className="lp-ai-feat-item">
                                    <div className="lp-ai-feat-icon">🎧</div>
                                    <div>
                                        <strong>Hỗ trợ phát âm</strong>
                                        <span>Cung cấp phiên âm IPA và gợi ý luyện phát âm chuẩn.</span>
                                    </div>
                                </div>
                                <div className="lp-ai-feat-item">
                                    <div className="lp-ai-feat-icon">🧠</div>
                                    <div>
                                        <strong>Gợi ý cá nhân hóa</strong>
                                        <span>Đề xuất mẹo nhớ, từ đồng nghĩa/trái nghĩa và bài tập phù hợp.</span>
                                    </div>
                                </div>
                            </div>

                            <Link to="/dashboard" className="lp-btn lp-btn--primary" style={{ marginTop: '12px' }}>
                                Thử AI ngay →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}