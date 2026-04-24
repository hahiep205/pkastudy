import { useState } from 'react';
import CustomModal from './CustomModal';

const AI_API_URL = 'https://platform.beeknoee.com/api/v1/chat/completions';
const AI_BEARER = 'sk-bee-c3b440a14f7a434283c95709c96c5879';

const LANG_LABEL = { 'en': 'Anh', 'ko': 'Hàn', 'ja': 'Nhật', 'zh': 'Trung', 'fr': 'Pháp' };
const FLAG_MAP = { 'en': '🇺🇸', 'ko': '🇰🇷', 'ja': '🇯🇵', 'zh': '🇨🇳', 'fr': '🇫🇷' };

export default function AIGenModal({ isOpen, onClose, onSave, topicLang }) {
    const [theme, setTheme] = useState('');
    const [count, setCount] = useState(10);
    const [status, setStatus] = useState('input'); // input, loading, preview, error
    const [errorMsg, setErrorMsg] = useState('');
    const [previewWords, setPreviewWords] = useState([]);
    const [selectedIndexes, setSelectedIndexes] = useState(new Set());

    const langLabel = LANG_LABEL[topicLang] || 'Anh';
    const flag = FLAG_MAP[topicLang] || '🌐';

    const handleGenerate = async () => {
        if (!theme.trim()) { alert('Vui lòng nhập chủ đề'); return; }
        setStatus('loading');
        
        try {
            const prompt = `Tạo ${count} từ vựng tiếng ${langLabel} về chủ đề: "${theme}".
Yêu cầu: Trả về CHỈ một JSON array hợp lệ, không có markdown, không có backtick, không có chú thích.
Mỗi phần tử trong array là một object với đúng 6 trường:
{"word":"từ vựng tiếng ${langLabel}","transcription":"phiên âm IPA","mean":"nghĩa tiếng Việt","wordtype":"danh từ/động từ/tính từ/...","example":"câu ví dụ ngắn bằng tiếng ${langLabel}","example_vi":"bản dịch tiếng Việt của câu ví dụ"}`;

            const resp = await fetch(AI_API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${AI_BEARER}` },
                body: JSON.stringify({
                    model: 'llama3.1-8b',
                    messages: [{ role: 'user', content: prompt }],
                    max_tokens: 3000,
                    temperature: 0.35,
                    stream: false
                })
            });

            if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
            const data = await resp.json();
            let text = data.choices?.[0]?.message?.content || '';
            text = text.replace(/```json[\s\S]*?```/g, m => m.replace(/```json|```/g, '')).replace(/```/g, '').trim();
            const match = text.match(/\[[\s\S]*\]/);
            if (!match) throw new Error('Dữ liệu trả về bị lỗi, hãy thử lại');
            
            const words = JSON.parse(match[0]);
            setPreviewWords(words);
            setSelectedIndexes(new Set(words.map((_, i) => i)));
            setStatus('preview');
        } catch (err) {
            setErrorMsg(err.message);
            setStatus('error');
        }
    };

    const handleToggleCheck = (idx) => {
        const newSet = new Set(selectedIndexes);
        if (newSet.has(idx)) newSet.delete(idx);
        else newSet.add(idx);
        setSelectedIndexes(newSet);
    };

    const handleToggleAll = () => {
        if (selectedIndexes.size === previewWords.length) setSelectedIndexes(new Set());
        else setSelectedIndexes(new Set(previewWords.map((_, i) => i)));
    };

    const handleSaveWords = () => {
        const selected = Array.from(selectedIndexes).map(idx => previewWords[idx]);
        if (selected.length === 0) { alert('Vui lòng chọn ít nhất 1 từ'); return; }
        onSave(selected);
        handleReset();
        onClose();
    };

    const handleReset = () => {
        setStatus('input');
        setTheme('');
        setPreviewWords([]);
    };

    return (
        <CustomModal isOpen={isOpen} onClose={() => { handleReset(); onClose(); }} title="✨ AI tạo từ vựng hàng loạt">
            {status === 'input' && (
                <>
                    <div className="cv-modal-body" id="cv-ai-modal-body">
                        <div className="cv-ai-intro">
                            <p>Mô tả chủ đề bạn muốn học - AI sẽ tự động tạo danh sách từ vựng kèm phiên âm, nghĩa và câu ví dụ!</p>
                        </div>
                        <div className="cv-form-row">
                            <div className="cv-form-group" style={{flex:2}}>
                                <label className="cv-form-label">Chủ đề / Mô tả <span style={{color:'var(--red)'}}>*</span></label>
                                <input className="cv-form-input" placeholder="Ví dụ: từ vựng văn phòng, du lịch..." value={theme} onChange={(e) => setTheme(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleGenerate()} />
                            </div>
                            <div className="cv-form-group" style={{flex:1}}>
                                <label className="cv-form-label">Ngôn ngữ</label>
                                <div className="cv-form-input" style={{display:'flex', alignItems:'center', gap:'8px', background:'var(--bg-page)', cursor:'default', color:'var(--gray-text)'}}>
                                    <span>{flag}</span><span>Tiếng {langLabel}</span>
                                </div>
                            </div>
                            <div className="cv-form-group" style={{flex:1}}>
                                <label className="cv-form-label">Số từ</label>
                                <select className="cv-form-input cv-form-select" value={count} onChange={(e) => setCount(Number(e.target.value))}>
                                    <option value="5">5 từ</option><option value="10">10 từ</option>
                                    <option value="15">15 từ</option><option value="20">20 từ</option>
                                    <option value="30">30 từ</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="cv-modal-footer cv-modal-footer-split">
                        <button className="btn btn-secondary" onClick={onClose}>Hủy</button>
                        <button className="cv-btn-ai cv-btn-ai-large" onClick={handleGenerate}>✨ Tạo từ vựng</button>
                    </div>
                </>
            )}

            {status === 'loading' && (
                <div className="cv-modal-body">
                    <div className="cv-ai-loading">
                        <div className="cv-ai-spinner"></div>
                        <p>AI đang tạo <strong>{count} từ vựng tiếng {langLabel}</strong><br/>về "<em>{theme}</em>"...</p>
                    </div>
                </div>
            )}

            {status === 'error' && (
                <div className="cv-modal-body">
                    <div className="cv-ai-error">
                        <div style={{fontSize:'2.5rem', marginBottom:'12px'}}>😕</div>
                        <p>Có lỗi xảy ra khi gọi AI.<br/><small style={{color:'var(--gray-light)'}}>{errorMsg}</small></p>
                        <button className="btn btn-primary" onClick={() => setStatus('input')}>Thử lại</button>
                    </div>
                </div>
            )}

            {status === 'preview' && (
                <>
                    <div className="cv-modal-body" style={{ padding: 0 }}>
                        <div className="cv-ai-preview-header">
                            <p>✅ AI tạo được <strong>{previewWords.length} từ vựng tiếng {langLabel}</strong> về "<em>{theme}</em>"</p>
                            <label className="cv-ai-select-all-wrap">
                                <input type="checkbox" checked={selectedIndexes.size === previewWords.length} onChange={handleToggleAll} />
                                <span>Chọn tất cả</span>
                            </label>
                        </div>
                        <div className="cv-ai-preview-table">
                            <div className="cv-ai-preview-head">
                                <span></span>
                                <span>Từ vựng</span>
                                <span>Nghĩa</span>
                                <span>Loại</span>
                                <span>Ví dụ</span>
                            </div>
                            {previewWords.map((w, i) => (
                                <div key={i} className="cv-ai-preview-row">
                                    <div className="cv-ai-preview-check">
                                        <input type="checkbox" checked={selectedIndexes.has(i)} onChange={() => handleToggleCheck(i)} />
                                    </div>
                                    <div className="cv-ai-preview-word">
                                        <strong>{w.word}</strong>
                                        <div className="cv-ai-preview-trans">{w.transcription}</div>
                                    </div>
                                    <div className="cv-ai-preview-mean">{w.mean}</div>
                                    <div className="cv-ai-preview-type">
                                        <span className="cv-type-badge">{w.wordtype}</span>
                                    </div>
                                    <div className="cv-ai-preview-example">{w.example}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="cv-modal-footer">
                        <span className="cv-ai-selected-count">{selectedIndexes.size} từ được chọn</span>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <button className="btn btn-secondary" onClick={() => setStatus('input')}>← Tạo lại</button>
                            <button className="btn btn-primary" onClick={handleSaveWords}>Thêm vào danh sách</button>
                        </div>
                    </div>
                </>
            )}
        </CustomModal>
    );
}
