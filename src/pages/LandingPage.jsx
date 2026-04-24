import { Link } from 'react-router-dom';

export default function LandingPage() {
    return (
        <header className="hero">
            <h1>study vocabulary</h1>
            <p>
                Nền tảng học Vocabulary tiếng Anh - Hàn toàn diện với từ vựng phong phú, phát âm chuẩn,
                luyện nghe hiệu quả, flashcard sinh động và trợ lý AI thông minh.
            </p>
            <div className="hero-buttons">
                <Link to="/dashboard"><button className="btn btn-primary" id="btn-get-started">Bắt đầu ngay</button></Link>
                <Link to="/login"><button className="btn btn-secondary">Đã có tài khoản</button></Link>
            </div>
        </header>
    );
}
