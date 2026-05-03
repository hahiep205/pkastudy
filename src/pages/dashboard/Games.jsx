import { useEffect, useRef, useState, useMemo } from 'react';
import flappyLogo from '../../assets/images/logo-flappybird.png';
import FlappyBirdExperience, { GAME_CARD, GAME_ID } from '../../components/games/FlappyBirdExperience';
import Quiz from '../../components/Quiz';
import Typing from '../../components/Typing';
import Listening from '../../components/Listening';
import Match from '../../components/Match';
import Flashcard from '../../components/Flashcard';
import { useCourseProgress } from '../../hooks/useCourseProgress';
import { useCustomCourses } from '../../hooks/useCustomCourses';
import { coursesData } from '../../data/coursesData';
import { getDueItems, reviewItem, addToSrs, removeFromSrs } from '../../utils/srsStorage';

// ─── Vocab game definitions ───────────────────────────────────────────────────
const VOCAB_GAMES = [
    { id: 'quiz',      name: 'Trắc nghiệm', icon: '🎯', desc: '4 đáp án – chọn nghĩa đúng',        color: '#6366f1' },
    { id: 'typing',    name: 'Gõ từ',        icon: '⌨️', desc: 'Nhìn nghĩa, gõ lại từ vựng',        color: '#f59e0b' },
    { id: 'listen',    name: 'Luyện nghe',   icon: '🎧', desc: 'Nghe phát âm, điền lại từ',          color: '#10b981' },
    { id: 'match',     name: 'Nối từ',       icon: '🔗', desc: 'Ghép từ vựng với nghĩa đúng',        color: '#ec4899' },
    { id: 'flashcard', name: 'Flashcard',    icon: '🃏', desc: 'Lật thẻ, ôn lại từ nhanh chóng',    color: '#8b5cf6' },
];

// ─── Topic Picker ─────────────────────────────────────────────────────────────
function TopicPicker({ gameInfo, onSelect, onBack }) {
    const { customCourses } = useCustomCourses();
    const [search, setSearch] = useState('');
    const [isMultiMode, setIsMultiMode] = useState(false);
    const [selectedTopicIds, setSelectedTopicIds] = useState(new Set());

    const allTopics = useMemo(() => {
        const list = [];
        
        const dueItems = getDueItems();
        if (dueItems.length >= 2) {
            list.push({
                id: 'srs-due',
                title: '🔥 Từ vựng cần ôn tập (SRS)',
                source: 'Hệ thống Ôn tập thông minh',
                lang: 'en',
                words: dueItems.map(item => ({
                    id: item.wordId,
                    word: item.word,
                    mean: item.mean,
                    transcription: item.transcription,
                    example: item.example,
                    wordtype: item.wordtype,
                })),
                isSrs: true
            });
        }

        Object.values(coursesData).forEach((course) => {
            course.topics.forEach((topic) => {
                if (topic.words?.length >= 2) {
                    list.push({
                        id: topic.id,
                        title: topic.title,
                        source: course.title,
                        lang: course.lang || 'en',
                        words: topic.words,
                    });
                }
            });
        });
        customCourses.forEach((topic) => {
            if (topic.words?.length >= 2) {
                list.push({
                    id: topic.id,
                    title: topic.title,
                    source: 'Tài liệu của bạn',
                    lang: topic.lang || 'en',
                    words: topic.words,
                });
            }
        });
        return list;
    }, [customCourses]);

    const filtered = allTopics.filter(
        (t) =>
            t.title.toLowerCase().includes(search.toLowerCase()) ||
            t.source.toLowerCase().includes(search.toLowerCase()),
    );

    const toggleTopic = (topic) => {
        const next = new Set(selectedTopicIds);
        if (next.has(topic.id)) {
            next.delete(topic.id);
        } else {
            next.add(topic.id);
        }
        setSelectedTopicIds(next);
    };

    const handleStartMixed = () => {
        if (selectedTopicIds.size === 0) return;
        
        const mixedWords = [];
        const seenIds = new Set();
        
        selectedTopicIds.forEach(id => {
            const topic = allTopics.find(t => t.id === id);
            if (topic) {
                topic.words.forEach(w => {
                    if (!seenIds.has(w.id)) {
                        seenIds.add(w.id);
                        mixedWords.push(w);
                    }
                });
            }
        });
        
        if (mixedWords.length < 2) {
             alert('Cần ít nhất 2 từ vựng để chơi.');
             return;
        }

        const combinedTopic = {
            id: 'mixed-' + Date.now(),
            title: `🔀 Chủ đề kết hợp (${selectedTopicIds.size})`,
            source: 'Đã trộn nhiều chủ đề',
            lang: 'en',
            words: mixedWords,
            isSrs: false 
        };
        
        onSelect(combinedTopic);
    };

    return (
        <div className="game-topic-picker">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <button className="game-picker-back-btn" onClick={onBack} style={{ margin: 0 }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                        <path d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z" />
                    </svg>
                    Quay lại
                </button>

                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', background: 'var(--surface-color)', padding: '6px 12px', borderRadius: '20px', border: '1px solid var(--border-color)' }}>
                    <input 
                        type="checkbox" 
                        checked={isMultiMode} 
                        onChange={(e) => {
                            setIsMultiMode(e.target.checked);
                            if (!e.target.checked) setSelectedTopicIds(new Set());
                        }} 
                        style={{ cursor: 'pointer' }}
                    />
                    <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>Chế độ Trộn (Mix)</span>
                </label>
            </div>

            <div className="game-picker-hero" style={{ marginTop: 0 }}>
                <span className="game-picker-game-icon">{gameInfo.icon}</span>
                <div>
                    <h2 className="game-picker-title">Chọn chủ đề để chơi</h2>
                    <p className="game-picker-subtitle">
                        {gameInfo.name} · {gameInfo.desc}
                    </p>
                </div>
            </div>

            <input
                className="game-picker-search"
                placeholder="🔍 Tìm chủ đề..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                autoFocus
            />

            {filtered.length === 0 ? (
                <div className="game-picker-empty">
                    <div className="game-picker-empty-icon">📭</div>
                    <p>Không tìm thấy chủ đề nào có ít nhất 2 từ vựng.</p>
                    <p>Hãy thêm từ vựng vào các topic trước nhé!</p>
                </div>
            ) : (
                <>
                    <div className="game-picker-grid" id="game-picker-grid" style={{ paddingBottom: isMultiMode && selectedTopicIds.size > 0 ? '80px' : '0' }}>
                        {filtered.map((topic) => {
                            const isSelected = selectedTopicIds.has(topic.id);
                            return (
                                <button
                                    key={topic.id}
                                    className={`game-picker-card ${isSelected ? 'selected' : ''}`}
                                    onClick={() => {
                                        if (isMultiMode) toggleTopic(topic);
                                        else onSelect(topic);
                                    }}
                                    id={`game-picker-${topic.id}`}
                                    style={isSelected ? { borderColor: 'var(--primary-color)', backgroundColor: 'rgba(99, 102, 241, 0.05)' } : {}}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                        <div style={{ textAlign: 'left' }}>
                                            <span className="game-picker-card-title">{topic.title}</span>
                                            <span className="game-picker-card-source">{topic.source}</span>
                                        </div>
                                        {isMultiMode && (
                                            <div style={{ 
                                                width: '20px', height: '20px', borderRadius: '4px', 
                                                border: `2px solid ${isSelected ? 'var(--primary-color)' : 'var(--border-color)'}`,
                                                background: isSelected ? 'var(--primary-color)' : 'transparent',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                color: 'white', fontSize: '12px'
                                            }}>
                                                {isSelected && '✓'}
                                            </div>
                                        )}
                                    </div>
                                    <span className="game-picker-card-count">{topic.words.length} từ</span>
                                </button>
                            );
                        })}
                    </div>
                    {isMultiMode && selectedTopicIds.size > 0 && (
                        <div style={{ position: 'fixed', bottom: '24px', left: '0', right: '0', display: 'flex', justifyContent: 'center', zIndex: 100 }}>
                            <button 
                                className="btn btn-primary" 
                                onClick={handleStartMixed} 
                                style={{ padding: '14px 32px', fontSize: '1.1rem', borderRadius: '100px', boxShadow: '0 10px 25px -5px var(--primary-color)' }}
                            >
                                🔀 Bắt đầu trộn {selectedTopicIds.size} chủ đề ({
                                    Array.from(selectedTopicIds).reduce((sum, id) => {
                                        const t = allTopics.find(t => t.id === id);
                                        return sum + (t ? t.words.length : 0);
                                    }, 0)
                                } từ)
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Games() {
    const [activeGameId, setActiveGameId] = useState(null);
    const [vocabGame, setVocabGame] = useState(null);
    const [selectedTopic, setSelectedTopic] = useState(null);
    const [phase, setPhase] = useState('hub');
    const [studyWordIds, setStudyWordIds] = useState(null); // Added for 'Học lại từ sai' loop
    const { remembered, replaceRememberedInTopic } = useCourseProgress();
    const pageRef = useRef(null);

    const activeWords = useMemo(() => {
        if (!selectedTopic) return [];
        return studyWordIds ? selectedTopic.words.filter(w => studyWordIds.includes(w.id)) : selectedTopic.words;
    }, [selectedTopic, studyWordIds]);

    // ── viewport CSS vars (for flappy bird fullscreen) ──────────────────────
    useEffect(() => {
        const pageEl = pageRef.current;
        if (!pageEl) return undefined;
        const topbarEl = document.querySelector('.topbar');
        const mobileNavEl = document.querySelector('.mobile-nav');
        const update = () => {
            const topH = topbarEl?.getBoundingClientRect().height || 0;
            const navVisible = mobileNavEl ? window.getComputedStyle(mobileNavEl).display !== 'none' : false;
            const navH = navVisible ? (mobileNavEl?.getBoundingClientRect().height || 0) : 0;
            pageEl.style.setProperty('--games-dashboard-topbar-h', `${Math.round(topH)}px`);
            pageEl.style.setProperty('--games-mobile-nav-h', `${Math.round(navH)}px`);
        };
        update();
        const ro = new ResizeObserver(update);
        if (topbarEl) ro.observe(topbarEl);
        if (mobileNavEl) ro.observe(mobileNavEl);
        window.addEventListener('resize', update);
        return () => { ro.disconnect(); window.removeEventListener('resize', update); };
    }, []);

    // ── handlers ─────────────────────────────────────────────────────────────
    const handleVocabGameClick = (game) => {
        setVocabGame(game);
        setPhase('picker');
    };

    const handleTopicSelect = (topic) => {
        setSelectedTopic(topic);
        setPhase('playing');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleExitGame = () => {
        setPhase('hub');
        setVocabGame(null);
        setSelectedTopic(null);
        setStudyWordIds(null);
    };

    const handleBackToPicker = () => {
        setSelectedTopic(null);
        setPhase('picker');
        setStudyWordIds(null);
    };

    const handleStudyWrongWords = (wrongWordIds) => {
        setStudyWordIds(wrongWordIds);
        setVocabGame(VOCAB_GAMES.find(g => g.id === 'flashcard') || vocabGame);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // ── shared props for study mode components ────────────────────────────────
    const studyModeProps = selectedTopic
        ? {
              topicLang: selectedTopic.lang,
              words: activeWords,
              allTopicWords: selectedTopic.words, // For Quiz distractors
              initialLearnedWordIds: activeWords
                  .filter((w) => remembered[w.id])
                  .map((w) => w.id),
              onExit: handleExitGame,
              onBackToTopic: handleBackToPicker,
              learnUntilMastered: false,
              onSaveLearnedWords: (correctWordIds, wrongWordIds = []) => {
                  // SRS Integration: Every game played forces active recall
                  activeWords.forEach(w => {
                      if (correctWordIds.includes(w.id)) {
                          if (!selectedTopic.isSrs) addToSrs(w, selectedTopic.id, 'game');
                          reviewItem(w.id, 'good');
                      } else if (wrongWordIds.includes(w.id)) {
                          if (!selectedTopic.isSrs) addToSrs(w, selectedTopic.id, 'game');
                          reviewItem(w.id, 'forgot');
                      }
                  });

                  // Update UI checkmarks
                  replaceRememberedInTopic(
                      activeWords.map((w) => w.id),
                      correctWordIds,
                  );
              },
              onStartQuiz: () => {
                  setVocabGame(VOCAB_GAMES.find(g => g.id === 'quiz') || vocabGame);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
              },
              onStudyWrongWords: handleStudyWrongWords,
          }
        : null;

    // ── render: Flappy Bird (fullscreen overlay) ─────────────────────────────
    if (activeGameId === GAME_ID) {
        return (
            <main
                ref={pageRef}
                className="dash-main games-page is-game-active"
                id="page-games"
            >
                <FlappyBirdExperience onBackGallery={() => setActiveGameId(null)} />
            </main>
        );
    }

    // ── render: Vocab game playing ────────────────────────────────────────────
    if (phase === 'playing' && selectedTopic && studyModeProps) {
        const modeMap = {
            quiz:      <Quiz      {...studyModeProps} />,
            typing:    <Typing    {...studyModeProps} />,
            listen:    <Listening {...studyModeProps} />,
            match:     <Match     {...studyModeProps} />,
            flashcard: <Flashcard {...studyModeProps} onSaveLearnedWords={studyModeProps.onSaveLearnedWords} />,
        };
        return (
            <main ref={pageRef} className="dash-main games-page" id="page-games">
                {modeMap[vocabGame?.id] ?? null}
            </main>
        );
    }

    // ── render: Topic picker ──────────────────────────────────────────────────
    if (phase === 'picker' && vocabGame) {
        return (
            <main ref={pageRef} className="dash-main games-page" id="page-games">
                <TopicPicker
                    gameInfo={vocabGame}
                    onSelect={handleTopicSelect}
                    onBack={() => { setPhase('hub'); setVocabGame(null); }}
                />
            </main>
        );
    }

    // ── render: Hub (default) ─────────────────────────────────────────────────
    return (
        <main ref={pageRef} className="dash-main games-page" id="page-games">
            <section className="games-hub">
                <div className="games-hero">
                    <div>
                        <div className="games-eyebrow">Luyện tập từ vựng</div>
                        <h1>Chọn trò chơi để bắt đầu</h1>
                        <p>
                            Ôn luyện từ vựng qua các mini-game tương tác. Chọn chủ đề và bắt đầu thách thức bản thân!
                        </p>
                    </div>
                </div>

                {/* Vocabulary game modes */}
                <div className="games-section-label" id="games-vocab-label">🎮 Luyện từ vựng</div>
                <div className="games-vocab-grid" id="games-vocab-grid">
                    {VOCAB_GAMES.map((game) => (
                        <button
                            key={game.id}
                            className="games-vocab-card"
                            id={`game-card-${game.id}`}
                            onClick={() => handleVocabGameClick(game)}
                            style={{ '--game-color': game.color }}
                        >
                            <span className="games-vocab-icon">{game.icon}</span>
                            <span className="games-vocab-name">{game.name}</span>
                            <span className="games-vocab-desc">{game.desc}</span>
                            <span className="games-vocab-play">Chơi ngay →</span>
                        </button>
                    ))}
                </div>

                {/* Fun games */}
                <div className="games-section-label" id="games-fun-label">🕹️ Mini-game vui</div>
                <div className="games-grid">
                    <button
                        type="button"
                        className="game-card-image-button"
                        onClick={() => setActiveGameId(GAME_ID)}
                        aria-label={GAME_CARD.title}
                        id="game-card-flappy"
                    >
                        <img className="game-card-image" src={flappyLogo} alt={GAME_CARD.title} />
                    </button>
                </div>
            </section>
        </main>
    );
}
