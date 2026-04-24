export default function Games() {
    return (
        <main className="dash-main games-page" id="page-games">
            <div className="coming-soon-wrapper">
                <div className="cs-badge blue">
                    <span className="cs-badge-dot"></span>
                    Sắp ra mắt
                </div>
                <div className="cs-icon-wrap blue">
                    <span className="cs-dot"></span>
                    <span className="cs-dot"></span>
                    <span className="cs-dot"></span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="var(--blue)">
                        <path d="M17 4C20.3137 4 23 6.68629 23 10V14C23 17.3137 20.3137 20 17 20H7C3.68629 20 1 17.3137 1 14V10C1 6.68629 3.68629 4 7 4H17ZM10 9H8V11H6V13H7.999L8 15H10L9.999 13H12V11H10V9ZM18 13H16V15H18V13ZM16 9H14V11H16V9Z" />
                    </svg>
                </div>
                <h2 className="cs-title">Trò chơi ngôn ngữ</h2>
                <p className="cs-sub">Tính năng trò chơi học từ vựng đang được phát triển. Sắp thôi — hãy chờ đón nhé! 🎮</p>
                <div className="cs-features">
                    <div className="cs-feature-pill">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="var(--blue)">
                            <path d="M12 2L13.09 8.26L19 7L14.74 11.74L21 13L14.74 14.26L19 19L13.09 15.74L12 22L10.91 15.74L5 19L9.26 14.26L3 13L9.26 11.74L5 7L10.91 8.26L12 2Z" />
                        </svg>
                        Flashcard nhanh
                    </div>
                    <div className="cs-feature-pill">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="var(--orange)">
                            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 16.5V7.5L16 12L10 16.5Z" />
                        </svg>
                        Trắc nghiệm từ vựng
                    </div>
                    <div className="cs-feature-pill">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="var(--green)">
                            <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z" />
                        </svg>
                        Bảng xếp hạng
                    </div>
                    <div className="cs-feature-pill">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="var(--golden)">
                            <path d="M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19H12V23C14.86 21.46 21 17.43 21 10.5C21 5.81 17.19 2 11.5 2ZM12.5 16.5H10.5V10.5H12.5V16.5ZM11.5 9C10.95 9 10.5 8.55 10.5 8C10.5 7.45 10.95 7 11.5 7C12.05 7 12.5 7.45 12.5 8C12.5 8.55 12.05 9 11.5 9Z" />
                        </svg>
                        Nối câu đôi
                    </div>
                </div>
            </div>
        </main>
    );
}
