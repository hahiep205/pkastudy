import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/useAuth';
import '../assets/css/login-styles.css';

export default function Register() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleGoogleRegister = () => {
        // Mock Google register/login
        const guestUser = { name: "Guest User", role: "Tài khoản khách" };
        login(guestUser);
        navigate('/dashboard');
    };

    return (
        <main className="login-container" style={{ minHeight: 'calc(100vh - 80px)' }}>
            <div className="login-card">
                <div className="login-header">
                    <h1>register now!</h1>
                    <p>Chào mừng bạn đến với Pkastudy!</p>
                </div>

                <div className="login-content">
                    <button type="button" className="btn btn-google" onClick={handleGoogleRegister}>
                        <svg width="24" height="24" viewBox="0 0 24 24" className="google-icon">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                        <span>Đăng ký với Google</span>
                    </button>

                    <div className="login-benefits">
                        <h3>Lợi ích khi đăng ký:</h3>
                        <ul className="benefits-list">
                            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg><span>Học ngoại ngữ hoàn toàn miễn phí!</span></li>
                            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg><span>Lưu tiến trình học tập của bạn.</span></li>
                            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg><span>Quyền truy cập vào tất cả khóa học.</span></li>
                            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg><span>Sử dụng trợ lý AI thông minh để hỗ trợ hỏi đáp.</span></li>
                            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg><span>Cá nhân hóa nội dung học tập với list từ vựng mà bạn tự tạo.</span></li>
                        </ul>
                    </div>

                    <div className="login-footer-text">
                        <p>Bằng việc đăng ký, bạn đồng ý với tất cả <a href="#" className="text-link">Điều khoản dịch vụ</a> và <a href="#" className="text-link">Chính sách bảo mật</a> của chúng tôi.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
