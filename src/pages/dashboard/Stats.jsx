import { buildStatsLeaderboard } from '../../utils/userStats';

const STREAK_FALLBACK = [
    { name: 'Linh Tran', score: 42 },
    { name: 'Minh Khoa', score: 37 },
    { name: 'Thu An', score: 33 },
];

const EXP_FALLBACK = [
    { name: 'Ngoc Mai', score: 12840 },
    { name: 'Quang Huy', score: 11920 },
    { name: 'Hoai Thu', score: 11310 },
];

const GAMES_FALLBACK = [
    { name: 'Bao Han', score: 86 },
    { name: 'Gia Huy', score: 74 },
    { name: 'Mai Anh', score: 61 },
];

function getInitial(name) {
    return name.charAt(0).toUpperCase();
}

function getHandle(name) {
    return `@${name.toLowerCase().replace(/\s+/g, '')}`;
}

function formatScore(score, unit) {
    if (unit === 'ngày') {
        return `Chuỗi ${score.toLocaleString('vi-VN')} ngày`;
    }

    return `${score.toLocaleString('vi-VN')} ${unit}`;
}

function LeaderboardCard({ title, subtitle, unit, leaders, tone }) {
    return (
        <section className={`stats2-board stats2-board-${tone} reveal`}>
            <header className="stats2-board-header">
                <div className="stats2-board-copy">
                    <h2>{title}</h2>
                    <p>{subtitle}</p>
                </div>
            </header>

            <div className="stats2-history">
                {leaders.length ? leaders.map((entry) => (
                    <article key={`${title}-${entry.rank}-${entry.name}`} className="stats2-history-item">
                        <div className="stats2-leader-main">
                            <div className="stats2-list-rank">#{entry.rank}</div>
                            <div className={`stats2-avatar-badge accent-${entry.accent}`}>
                                <div className="stats2-avatar-glyph">{getInitial(entry.name)}</div>
                            </div>
                            <div className="stats2-leader-copy">
                                <strong>{entry.name}</strong>
                                <small>{getHandle(entry.name)}</small>
                            </div>
                        </div>
                        <div className="stats2-history-values">
                            <span>{formatScore(entry.score, unit)}</span>
                        </div>
                    </article>
                )) : (
                    <div className="stats2-empty">
                        Chưa có dữ liệu để xếp hạng. Hãy bắt đầu học hoặc chơi game để bảng thống kê cập nhật.
                    </div>
                )}
            </div>
        </section>
    );
}

export default function Stats() {
    const streakLeaders = buildStatsLeaderboard('streak', 3, STREAK_FALLBACK);
    const expLeaders = buildStatsLeaderboard('exp', 3, EXP_FALLBACK);
    const gamesLeaders = buildStatsLeaderboard('games', 3, GAMES_FALLBACK);

    return (
        <main className="dash-main stats-page stats2-page" id="page-stats">
            <section className="stats2-hero reveal" data-reveal-order="0">
                <div className="stats2-hero-copy">
                    <div className="stats2-kicker">Bảng xếp hạng</div>
                    <h1>Theo dõi những người học nổi bật nhất tuần này.</h1>
                    <p>Xem nhanh thứ hạng streak, EXP và số lượt chơi game trong một giao diện ngắn gọn, dễ đọc.</p>
                </div>
            </section>

            <div className="stats2-grid stats2-grid-triple">
                <LeaderboardCard
                    title="Bảng Xếp Hạng Streak"
                    subtitle="Chuỗi ngày học liên tiếp cao nhất"
                    unit="ngày"
                    leaders={streakLeaders}
                    tone="streak"
                />
                <LeaderboardCard
                    title="Bảng Xếp Hạng EXP"
                    subtitle="Tổng EXP tích lũy cao nhất"
                    unit="EXP"
                    leaders={expLeaders}
                    tone="exp"
                />
                <LeaderboardCard
                    title="Bảng Xếp Hạng Games"
                    subtitle="Tổng số lần bắt đầu chơi game nhiều nhất"
                    unit="lượt chơi"
                    leaders={gamesLeaders}
                    tone="games"
                />
            </div>
        </main>
    );
}
