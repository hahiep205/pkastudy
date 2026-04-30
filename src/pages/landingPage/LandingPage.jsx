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
                    <div class="lp-eyebrow lp-eyebrow-blue" style={{ marginTop: '7%', color: 'var(--blue)' }}>{SVGS[0].svg} Học thử miễn phí ngay!</div>
                    <h1>Learn and retain vocabulary effectively with <span class="name-logo">pkastudy</span> now!</h1>
                    <p>
                        Học từ vựng tiếng Anh và tiếng Hàn dễ hơn qua bộ từ theo chủ đề, phát âm chuẩn,
                        luyện nghe thực tế, flashcard trực quan và trợ lý AI luôn sẵn sàng hỗ trợ khi bạn cần.
                    </p>
                    <div className="hero-buttons">
                        <Link to="/dashboard">
                            <button className="btn btn-primary hero-btn" id="btn-get-started">Bắt đầu ngay</button>
                        </Link>
                        <Link to="/login">
                            <button className="btn btn-secondary hero-btn">Đã có tài khoản</button>
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
                            Khám phá 4 trải nghiệm nổi bật: hỏi đáp cùng AI, học bằng nhiều chế độ khác nhau, ôn luyện với kho từ vựng theo chủ đề và vừa chơi vừa học qua các hoạt động tương tác sinh động.
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
                                <h2 className="lp-heading">Build vocabulary that sticks with <span class="name-logo">pkastudy.</span></h2>
                                <p className="lp-subheading">
                                    Hai bộ từ vựng chuẩn quốc tế được biên soạn bám sát đề thi thực tế,
                                    kèm phiên âm và ví dụ giúp bạn học đúng từ đầu.
                                </p>
                            </div>

                            <div className="lp-courses-cta">
                                <Link to="/dashboard/courses" className="lp-btn lp-btn--primary lp-cta-btn">
                                    Xem tài liệu
                                </Link>
                                <Link to="/dashboard/courses?tab=custom" className="lp-btn lp-btn--secondary lp-cta-btn">
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


        </>
    );
}
