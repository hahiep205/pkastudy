import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../../assets/images/logo2.png';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Xử lý đóng/mở menu và các hiệu ứng đi kèm
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.classList.add('mobile-menu-open');
        } else {
            document.body.classList.remove('mobile-menu-open');
        }

        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('keydown', handleEscape);
        return () => {
            window.removeEventListener('keydown', handleEscape);
            document.body.classList.remove('mobile-menu-open');
        };
    }, [isMobileMenuOpen]);

    const closeMenu = () => setIsMobileMenuOpen(false);

    return (
        <nav className="navbar">
            <div className="nav-left">
                <a href="/"><img src={logo2} style={{ width: '179px', height: 'auto' }} alt="pkastudy Logo" className="nav-logo" /></a>
            </div>

            <button
                className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div
                className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}
                onClick={closeMenu}
            ></div>

            <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                <div className="mobile-menu-header">
                    <Link to="/" onClick={closeMenu}><img src={logo2} alt="pkastudy Logo" className="mobile-menu-logo" /></Link>
                    <button className="mobile-menu-close" onClick={closeMenu} aria-label="Close">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>

                <nav className="mobile-menu-nav">
                    <a href="/#hero-section" className="mobile-nav-link" onClick={closeMenu}>Trang chủ</a>
                    <a href="/#gioi-thieu" className="mobile-nav-link" onClick={closeMenu}>Giới thiệu</a>
                    <a href="/#tai-lieu" className="mobile-nav-link" onClick={closeMenu}>Tài liệu</a>
                    <a href="/#chatbot-ai" className="mobile-nav-link" onClick={closeMenu}>Chatbot AI</a>
                </nav>

                <div className="mobile-menu-actions">
                    <Link to="/login" onClick={closeMenu}><button className="btn btn-secondary btn-mobile-menu">Đăng nhập</button></Link>
                    <Link to="/register" onClick={closeMenu}><button className="btn btn-primary btn-mobile-menu">Đăng ký</button></Link>
                </div>
            </div>

            <div className="nav-links">
                <a href="/#hero-section" className="nav-link">Trang chủ</a>
                <a href="/#gioi-thieu" className="nav-link">Giới thiệu</a>
                <a href="/#tai-lieu" className="nav-link">Tài liệu</a>
                <a href="/#chatbot-ai" className="nav-link">Chatbot AI</a>
            </div>

            <div className="nav-right">
                <Link to="/login"><button className="btn btn-nav btn-secondary" style={{ maxHeight: '38px' }}>Đăng nhập</button></Link>
                <Link to="/register"><button className="btn btn-nav btn-primary" style={{ maxHeight: '38px' }}>Đăng ký</button></Link>
            </div>
        </nav>
    );
}
