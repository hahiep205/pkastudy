import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

// ── Scroll reveal hook ──────────────────────────────────────────────────────
function useLandingReveal() {
    useEffect(() => {
        const elements = Array.from(document.querySelectorAll('.lp-reveal, .lp-step'));
        if (!elements.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('lp-visible');
                        // Trigger progress bars
                        const fill = entry.target.querySelector('.lp-course-progress-fill');
                        if (fill) {
                            entry.target.classList.add('lp-visible');
                        }
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
        );

        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);
}

// ── Counter animation ───────────────────────────────────────────────────────
function useCounterAnimation() {
    useEffect(() => {
        const counters = Array.from(document.querySelectorAll('[data-count]'));
        if (!counters.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    const el = entry.target;
                    const target = parseInt(el.getAttribute('data-count'), 10);
                    const suffix = el.getAttribute('data-suffix') || '';
                    const duration = 1200;
                    const start = performance.now();

                    function update(now) {
                        const progress = Math.min((now - start) / duration, 1);
                        const ease = 1 - Math.pow(1 - progress, 3);
                        el.textContent = Math.floor(target * ease).toLocaleString('vi-VN') + suffix;
                        if (progress < 1) requestAnimationFrame(update);
                    }

                    requestAnimationFrame(update);
                    observer.unobserve(el);
                });
            },
            { threshold: 0.5 }
        );

        counters.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);
}

// ── Data ────────────────────────────────────────────────────────────────────
const FEATURES = [
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="56" height="56" color="currentColor" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round">
            <path d="M19 16V14C19 11.1716 19 9.75736 18.1213 8.87868C17.2426 8 15.8284 8 13 8H11C8.17157 8 6.75736 8 5.87868 8.87868C5 9.75736 5 11.1716 5 14V16C5 18.8284 5 20.2426 5.87868 21.1213C6.75736 22 8.17157 22 11 22H13C15.8284 22 17.2426 22 18.1213 21.1213C19 20.2426 19 18.8284 19 16Z" />
            <path d="M19 18C20.4142 18 21.1213 18 21.5607 17.5607C22 17.1213 22 16.4142 22 15C22 13.5858 22 12.8787 21.5607 12.4393C21.1213 12 20.4142 12 19 12" />
            <path d="M5 18C3.58579 18 2.87868 18 2.43934 17.5607C2 17.1213 2 16.4142 2 15C2 13.5858 2 12.8787 2.43934 12.4393C2.87868 12 3.58579 12 5 12" />
            <path d="M13.5 3.5C13.5 4.32843 12.8284 5 12 5C11.1716 5 10.5 4.32843 10.5 3.5C10.5 2.67157 11.1716 2 12 2C12.8284 2 13.5 2.67157 13.5 3.5Z" />
            <path d="M12 5V8" />
            <path d="M9 13V14" />
            <path d="M15 13V14" />
            <path d="M10 17.5C10 17.5 10.6667 18 12 18C13.3333 18 14 17.5 14 17.5" />
        </svg>,
        tone: 'no',
        badge: 'AI Powered',
        title: 'Trợ lý AI thông minh',
        desc: 'Hỏi bất kỳ điều gì về từ vựng, ngữ pháp hay cách phát âm. AI giải thích chi tiết, đưa ví dụ thực tế và gợi ý mẹo ghi nhớ ngay lập tức.',
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="56" height="56" color="currentColor" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M22 18C22 19.4001 22 20.1002 21.7275 20.635C21.4878 21.1054 21.1054 21.4878 20.635 21.7275C20.1002 22 19.4001 22 18 22C16.5999 22 15.8998 22 15.365 21.7275C14.8946 21.4878 14.5122 21.1054 14.2725 20.635C14 20.1002 14 19.4001 14 18C14 16.5999 14 15.8998 14.2725 15.365C14.5122 14.8946 14.8946 14.5122 15.365 14.2725C15.8998 14 16.5999 14 18 14C19.4001 14 20.1002 14 20.635 14.2725C21.1054 14.5122 21.4878 14.8946 21.7275 15.365C22 15.8998 22 16.5999 22 18Z" />
            <path d="M22 10C22 11.4001 22 12.1002 21.7275 12.635C21.4878 13.1054 21.1054 13.4878 20.635 13.7275C20.1002 14 19.4001 14 18 14C16.5999 14 15.8998 14 15.365 13.7275C14.8946 13.4878 14.5122 13.1054 14.2725 12.635C14 12.1002 14 11.4001 14 10C14 8.59987 14 7.8998 14.2725 7.36502C14.5122 6.89462 14.8946 6.51217 15.365 6.27248C15.8998 6 16.5999 6 18 6C19.4001 6 20.1002 6 20.635 6.27248C21.1054 6.51217 21.4878 6.89462 21.7275 7.36502C22 7.8998 22 8.59987 22 10Z" />
            <path d="M14 18C14 19.4001 14 20.1002 13.7275 20.635C13.4878 21.1054 13.1054 21.4878 12.635 21.7275C12.1002 22 11.4001 22 10 22C8.59987 22 7.8998 22 7.36502 21.7275C6.89462 21.4878 6.51217 21.1054 6.27248 20.635C6 20.1002 6 19.4001 6 18C6 16.5999 6 15.8998 6.27248 15.365C6.51217 14.8946 6.89462 14.5122 7.36502 14.2725C7.8998 14 8.59987 14 10 14C11.4001 14 12.1002 14 12.635 14.2725C13.1054 14.5122 13.4878 14.8946 13.7275 15.365C14 15.8998 14 16.5999 14 18Z" />
            <path d="M10 6C10 7.40013 10 8.1002 9.72752 8.63497C9.48783 9.10538 9.10538 9.48783 8.63498 9.72752C8.1002 10 7.40013 10 6 10C4.59987 10 3.8998 10 3.36502 9.72751C2.89462 9.48783 2.51217 9.10538 2.27248 8.63497C2 8.10019 2 7.40013 2 6C2 4.59987 2 3.8998 2.27248 3.36502C2.51217 2.89462 2.89462 2.51217 3.36502 2.27248C3.8998 2 4.59987 2 6 2C7.40013 2 8.1002 2 8.63498 2.27248C9.10538 2.51217 9.48783 2.89462 9.72752 3.36502C10 3.8998 10 4.59987 10 6Z" />
        </svg>,
        tone: 'no',
        badge: 'Interactive',
        title: 'Chức năng học đa dạng',
        desc: 'Học và ôn từ vựng với đa dạng chức năng: Flashcard, Quiz, Listening, Typing, Match. Ghi nhớ nhanh và lâu dài nhờ kỹ thuật học ngắt quãng.',
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="56" height="56" color="currentColor" fill="none" stroke="#141B34" stroke-width="1.5">
            <path d="M22 14V10C22 6.22876 22 4.34315 20.8284 3.17157C19.6569 2 17.7712 2 14 2H12C8.22876 2 6.34315 2 5.17157 3.17157C4 4.34315 4 6.22876 4 10V14C4 17.7712 4 19.6569 5.17157 20.8284C6.34315 22 8.22876 22 12 22H14C17.7712 22 19.6569 22 20.8284 20.8284C22 19.6569 22 17.7712 22 14Z" />
            <path d="M5 6L2 6M5 12H2M5 18H2" />
            <path d="M17.5 7L13.5 7M15.5 11H13.5" />
            <path d="M9 22L9 2" />
        </svg>,
        tone: 'no',
        badge: '2 Language',
        title: 'Kho từ vựng phong phú',
        desc: 'Hơn 600 từ vựng TOEIC và 200+ từ TOPIK 1 được phân loại theo chủ đề, kèm phiên âm chuẩn IPA / Romaji và câu ví dụ thực tế.',
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="56" height="56" color="currentColor" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M16.3083 4.38394C15.7173 4.38394 15.4217 4.38394 15.1525 4.28405C15.1151 4.27017 15.0783 4.25491 15.042 4.23828C14.781 4.11855 14.5721 3.90959 14.1541 3.49167C13.1922 2.52977 12.7113 2.04882 12.1195 2.00447C12.04 1.99851 11.96 1.99851 11.8805 2.00447C11.2887 2.04882 10.8077 2.52977 9.84585 3.49166C9.42793 3.90959 9.21897 4.11855 8.95797 4.23828C8.92172 4.25491 8.88486 4.27017 8.84747 4.28405C8.57825 4.38394 8.28273 4.38394 7.69171 4.38394H7.58269C6.07478 4.38394 5.32083 4.38394 4.85239 4.85239C4.38394 5.32083 4.38394 6.07478 4.38394 7.58269V7.69171C4.38394 8.28273 4.38394 8.57825 4.28405 8.84747C4.27017 8.88486 4.25491 8.92172 4.23828 8.95797C4.11855 9.21897 3.90959 9.42793 3.49166 9.84585C2.52977 10.8077 2.04882 11.2887 2.00447 11.8805C1.99851 11.96 1.99851 12.04 2.00447 12.1195C2.04882 12.7113 2.52977 13.1922 3.49166 14.1541C3.90959 14.5721 4.11855 14.781 4.23828 15.042C4.25491 15.0783 4.27017 15.1151 4.28405 15.1525C4.38394 15.4217 4.38394 15.7173 4.38394 16.3083V16.4173C4.38394 17.9252 4.38394 18.6792 4.85239 19.1476C5.32083 19.6161 6.07478 19.6161 7.58269 19.6161H7.69171C8.28273 19.6161 8.57825 19.6161 8.84747 19.7159C8.88486 19.7298 8.92172 19.7451 8.95797 19.7617C9.21897 19.8815 9.42793 20.0904 9.84585 20.5083C10.8077 21.4702 11.2887 21.9512 11.8805 21.9955C11.96 22.0015 12.04 22.0015 12.1195 21.9955C12.7113 21.9512 13.1922 21.4702 14.1541 20.5083C14.5721 20.0904 14.781 19.8815 15.042 19.7617C15.0783 19.7451 15.1151 19.7298 15.1525 19.7159C15.4217 19.6161 15.7173 19.6161 16.3083 19.6161H16.4173C17.9252 19.6161 18.6792 19.6161 19.1476 19.1476C19.6161 18.6792 19.6161 17.9252 19.6161 16.4173V16.3083C19.6161 15.7173 19.6161 15.4217 19.7159 15.1525C19.7298 15.1151 19.7451 15.0783 19.7617 15.042C19.8815 14.781 20.0904 14.5721 20.5083 14.1541C21.4702 13.1922 21.9512 12.7113 21.9955 12.1195C22.0015 12.04 22.0015 11.96 21.9955 11.8805C21.9512 11.2887 21.4702 10.8077 20.5083 9.84585C20.0904 9.42793 19.8815 9.21897 19.7617 8.95797C19.7451 8.92172 19.7298 8.88486 19.7159 8.84747C19.6161 8.57825 19.6161 8.28273 19.6161 7.69171V7.58269C19.6161 6.07478 19.6161 5.32083 19.1476 4.85239C18.6792 4.38394 17.9252 4.38394 16.4173 4.38394H16.3083Z" />
            <path d="M8.5 16.5C9.19863 15.2923 10.5044 14.4797 12 14.4797C13.4956 14.4797 14.8014 15.2923 15.5 16.5M14 10C14 11.1046 13.1046 12 12 12C10.8955 12 10 11.1046 10 10C10 8.89544 10.8955 8.00001 12 8.00001C13.1046 8.00001 14 8.89544 14 10Z" />
        </svg>,
        tone: 'no',
        badge: 'Personalization',
        title: 'Cá nhân hóa bộ từ của bạn',
        desc: 'Cá nhân hóa bộ từ vựng của bạn qua các chủ đề tự tạo. Bạn có thể tạo từ vựng đa ngôn ngữ bằng AI hoặc thêm thủ công nếu muốn. Hỗ trợ tạo từ vựng của 5 ngôn ngữ Anh, Hàn, Trung, Nhật, Pháp.',
    },
];

const AVATARS = [
    { initial: 'L', bg: 'linear-gradient(135deg, #1cb0f6, #0e80c4)' },
    { initial: 'M', bg: 'linear-gradient(135deg, #58cc02, #3d9600)' },
    { initial: 'T', bg: 'linear-gradient(135deg, #ff9600, #cc7000)' },
    { initial: 'A', bg: 'linear-gradient(135deg, #8b5cf6, #6d28d9)' },
    { initial: 'N', bg: 'linear-gradient(135deg, #ec4899, #be185d)' },
];

// ── Component ───────────────────────────────────────────────────────────────
export default function LandingPage() {
    useLandingReveal();
    useCounterAnimation();

    return (
        <>
            {/* ── HERO (existing, kept intact) ── */}
            <header className="hero">
                <div className="hero-left">
                    <div class="lp-eyebrow lp-eyebrow-blue" style={{ marginTop: '7%' }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="currentColor" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round">
                        <path d="M11.5143 2.09327C11.8265 1.96891 12.1735 1.96891 12.4857 2.09327C13.4921 2.49406 13.6887 4.03744 14.8762 4.12336C15.7124 4.18386 16.533 3.48677 17.3721 3.69574C17.7105 3.78003 18.0028 3.99579 18.186 4.29657C18.7472 5.21824 18.0229 6.57292 18.9383 7.33768C19.5743 7.86877 20.6251 7.80004 21.178 8.4511C21.4108 8.72534 21.5252 9.08303 21.4953 9.4437C21.4068 10.5166 20.0389 11.1876 20.3395 12.3439C20.5475 13.1443 21.4253 13.707 21.4953 14.5563C21.5252 14.917 21.4108 15.2747 21.178 15.5489C20.4832 16.3669 18.9808 16.0975 18.5476 17.2062C18.2434 17.9844 18.634 18.9677 18.186 19.7034C18.0028 20.0042 17.7105 20.22 17.3721 20.3043C16.3302 20.5637 15.2727 19.4445 14.2701 20.0758C13.5543 20.5264 13.2978 21.5835 12.4857 21.9067C12.1735 22.0311 11.8265 22.0311 11.5143 21.9067C10.7022 21.5835 10.4457 20.5264 9.72989 20.0758C8.73971 19.4524 7.65213 20.5593 6.62791 20.3043C6.28947 20.22 5.9972 20.0042 5.81405 19.7034C5.25286 18.7818 5.97704 17.427 5.0617 16.6623C4.42582 16.1312 3.37494 16.2 2.82204 15.5489C2.58921 15.2747 2.47484 14.917 2.50465 14.5563C2.57485 13.707 3.4524 13.1443 3.6605 12.3439C3.95808 11.1997 2.59204 10.5009 2.50465 9.4437C2.47484 9.08303 2.58921 8.72534 2.82204 8.4511C3.51676 7.63284 5.01899 7.90253 5.45238 6.79383C5.75662 6.0156 5.36608 5.03227 5.81405 4.29657C5.9972 3.99579 6.28947 3.78003 6.62791 3.69574C7.46705 3.48677 8.28757 4.18387 9.12378 4.12336C10.3113 4.03746 10.5079 2.49406 11.5143 2.09327Z" />
                        <path d="M9 13.3333C9 13.3333 9.875 13.3333 10.75 15C10.75 15 13.5294 10.8333 16 10" />
                    </svg> Học thử miễn phí ngay!</div>
                    <h1>Learn and retain vocabulary effectively with <span style={{
                        display: 'inline-block',
                        fontWeight: '900',
                        // Pha 3 lớp màu loang vào nhau: xanh đậm, xanh sáng và trắng xanh
                        backgroundImage: `
    radial-gradient(at 0% 0%, #7dd3fc 0%, transparent 50%), 
    radial-gradient(at 100% 0%, #1cb0f6 0%, transparent 50%),
    radial-gradient(at 50% 100%, #b3e5fc 0%, transparent 50%),
    linear-gradient(#1cb0f6, #1cb0f6)
  `,
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        color: 'transparent',
                    }}>pkastudy</span></h1>
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

                {/* <div className="hero-right">
                    <div className="lp-stats-strip lp-reveal" style={{ transitionDelay: '160ms' }}>
                        <div className="lp-stat-item">
                            <span className="lp-stat-num" data-count="800" data-suffix="+">0</span>
                            <span className="lp-stat-label">Từ vựng</span>
                        </div>
                        <div className="lp-stat-item">
                            <span className="lp-stat-num" data-count="35" data-suffix="+">0</span>
                            <span className="lp-stat-label">Chủ đề học</span>
                        </div>
                        <div className="lp-stat-item">
                            <span className="lp-stat-num" data-count="2" data-suffix=" language">0</span>
                            <span className="lp-stat-label">Tiếng Anh &amp; Hàn</span>
                        </div>
                        <div className="lp-stat-item">
                            <span className="lp-stat-num" data-count="100" data-suffix="% free">0</span>
                            <span className="lp-stat-label">Không mất phí</span>
                        </div>
                    </div>
                </div> */}
            </header>

            {/* ══════════════════════════════════════════
                SECTION 1: GIỚI THIỆU - Features
            ══════════════════════════════════════════ */}
            <section className="lp-section lp-features" id="gioi-thieu">
                <div className="lp-container">
                    <div className="lp-features-header lp-reveal">
                        <div className="lp-eyebrow lp-eyebrow-blue">
                            Giới thiệu
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
                                    Tài liệu
                                </div>
                                <h2 className="lp-heading">Build vocabulary that sticks with <span style={{
                                    display: 'inline-block',
                                    fontWeight: '900',
                                    // Pha 3 lớp màu loang vào nhau: xanh đậm, xanh sáng và trắng xanh
                                    backgroundImage: `
    radial-gradient(at 0% 0%, #7dd3fc 0%, transparent 50%), 
    radial-gradient(at 100% 0%, #1cb0f6 0%, transparent 50%),
    radial-gradient(at 50% 100%, #b3e5fc 0%, transparent 50%),
    linear-gradient(#1cb0f6, #1cb0f6)
  `,
                                    WebkitBackgroundClip: 'text',
                                    backgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    color: 'transparent',
                                }}>pkastudy</span>!</h2>
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
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="20"
                                    height="20"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                >
                                    <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" />
                                    <path d="M8 12.5L10.5 15L16 9" />
                                </svg>
                                Bạn có thể học thử ngay mà không cần đăng nhập!
                            </p>
                        </div>

                        {/* Right: cards */}
                        <div className="lp-courses-cards">
                            {/* TOEIC card */}
                            <div className="lp-course-card lp-reveal" style={{ transitionDelay: '80ms' }}>
                                <div className="lp-course-banner" style={{ background: 'linear-gradient(135deg,#eef2ff,#e0e7ff)' }}>
                                    <span className="lp-course-banner-label">Tiếng Anh</span>
                                </div>
                                <div className="lp-course-body">
                                    <div className="lp-course-info">
                                        <h3 className="lp-course-name">Bộ từ vựng TOEIC cơ bản từ 0 tới 500+</h3>
                                        <div className="lp-course-meta">
                                            <span className="lp-course-tag lp-course-tag--blue">TOEIC</span>
                                            <span className="lp-course-tag lp-course-tag--blue">600+ từ</span>
                                            <span className="lp-course-tag lp-course-tag--blue">24 chủ đề</span>
                                        </div>
                                        <p className="lp-course-desc">
                                            Từ vựng cốt lõi phân loại theo chủ đề: văn phòng, tài chính, du lịch, sức khỏe, IT và nhiều hơn nữa.
                                        </p>
                                        <div className="lp-course-progress-bar">
                                            <div className="lp-course-progress-fill" style={{ '--fill-width': '24%' }}></div>
                                        </div>
                                    </div>
                                    <Link to="/dashboard/courses/toeic-basic" className="lp-btn lp-btn--primary" style={{ flexShrink: 0, height: '40px', fontSize: '13px', padding: '0 36px' }}>
                                        Học ngay
                                    </Link>
                                </div>
                            </div>

                            {/* TOPIK card */}
                            <div className="lp-course-card lp-reveal" style={{ transitionDelay: '160ms' }}>
                                <div className="lp-course-banner" style={{ background: 'linear-gradient(135deg,#fdf4ff,#ede9fe)' }}>
                                    <span className="lp-course-banner-label">Tiếng Hàn</span>
                                </div>
                                <div className="lp-course-body">
                                    <div className="lp-course-info">
                                        <h3 className="lp-course-name">Bộ từ vựng TOPIK 1 dành cho người mới</h3>
                                        <div className="lp-course-meta">
                                            <span className="lp-course-tag lp-course-tag--pink">TOPIK 1</span>
                                            <span className="lp-course-tag lp-course-tag--pink">200+ từ</span>
                                            <span className="lp-course-tag lp-course-tag--pink">18 chủ đề</span>
                                        </div>
                                        <p className="lp-course-desc">
                                            Hangul, giao tiếp hàng ngày, gia đình, thời tiết, mua sắm - từ vựng sơ cấp bám sát đề thi TOPIK thực tế.
                                        </p>
                                        <div className="lp-course-progress-bar">
                                            <div className="lp-course-progress-fill" style={{ '--fill-width': '45%' }}></div>
                                        </div>
                                    </div>
                                    <Link to="/dashboard/courses/topik1-basic" className="lp-btn lp-btn--primary" style={{ flexShrink: 0, height: '40px', fontSize: '13px', padding: '0 36px' }}>
                                        Học ngay
                                    </Link>
                                </div>
                            </div>

                            {/* Custom card */}
                            <div className="lp-course-card lp-reveal" style={{ transitionDelay: '160ms' }}>
                                <div className="lp-course-banner" style={{ background: 'linear-gradient(135deg,#fdf4ff,#ede9fe)' }}>
                                    <span className="lp-course-banner-label">Cá nhân</span>
                                </div>
                                <div className="lp-course-body">
                                    <div className="lp-course-info">
                                        <h3 className="lp-course-name" style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px'
                                        }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M3.49977 18.9853V20.5H5.01449C6.24074 20.5 6.85387 20.5 7.40518 20.2716C7.9565 20.0433 8.39004 19.6097 9.25713 18.7426L19.1211 8.87868C20.0037 7.99612 20.4449 7.55483 20.4937 7.01325C20.5018 6.92372 20.5018 6.83364 20.4937 6.74411C20.4449 6.20253 20.0037 5.76124 19.1211 4.87868C18.2385 3.99612 17.7972 3.55483 17.2557 3.50605C17.1661 3.49798 17.0761 3.49798 16.9865 3.50605C16.4449 3.55483 16.0037 3.99612 15.1211 4.87868L5.25713 14.7426C4.39004 15.6097 3.9565 16.0433 3.72813 16.5946C3.49977 17.1459 3.49977 17.759 3.49977 18.9853Z" />
                                                <path d="M13.5 6.5L17.5 10.5" />
                                            </svg> Tạo bộ từ vựng của riêng bạn</h3>
                                        <div className="lp-course-meta">
                                            <span className="lp-course-tag lp-course-tag--yellow">AI tạo hàng loạt</span>
                                            <span className="lp-course-tag lp-course-tag--yellow">5 ngôn ngữ</span>
                                            <span className="lp-course-tag lp-course-tag--yellow">Cá nhân</span>
                                        </div>
                                        <p className="lp-course-desc">
                                            Thêm từ thủ công hoặc dùng AI tạo hàng loạt - hoàn toàn cá nhân hoá. AI hỗ trợ tạo từ vựng của 5 ngôn ngữ: Anh, Hàn, Nhật, Trung, Pháp.
                                        </p>
                                        <div className="lp-course-progress-bar">
                                            <div className="lp-course-progress-fill" style={{ '--fill-width': '72%' }}></div>
                                        </div>
                                    </div>
                                    <Link to="/dashboard/courses?tab=custom" className="lp-btn lp-btn--primary" style={{ flexShrink: 0, height: '40px', fontSize: '13px', padding: '0 36px' }}>
                                        Tạo ngay
                                    </Link>
                                </div>
                            </div>
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
