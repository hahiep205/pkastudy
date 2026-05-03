/* ═══════════════════════════════════════════════════════
   PKA Study — Spaced Repetition System (SM-2 variant)
   Interval schedule:
     New word        → review after 1 day
     2nd correct     → review after 3 days
     3rd correct     → review after 7 days
     4th correct     → review after 14 days
     5th+ correct    → interval × easeFactor
     Any wrong (forgot / hard) → reset to 1 day
═══════════════════════════════════════════════════════ */

const SRS_KEY = 'pka_srs_queue_v1';

function getQueue() {
  try { return JSON.parse(localStorage.getItem(SRS_KEY)) || []; }
  catch { return []; }
}
function saveQueue(q) { localStorage.setItem(SRS_KEY, JSON.stringify(q)); }

function addDays(days) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString();
}

/* ── Interval schedule table ── */
const INTERVAL_TABLE = [1, 1, 3, 7, 14]; // index = repetitions after review

/* ── Thêm từ vào SRS ── */
export function addToSrs(word, topicId, courseId) {
  const q = getQueue();
  const exists = q.find(i => i.wordId === word.id);
  if (exists) {
    // Already tracked — reset on re-add (treat as fail)
    exists.interval = 1;
    exists.repetitions = 0;
    exists.nextReview = addDays(1);
    exists.failCount = (exists.failCount || 0) + 1;
    saveQueue(q);
    return;
  }
  q.push({
    wordId: word.id,
    word: word.word,
    mean: word.mean,
    transcription: word.transcription || '',
    example: word.example || '',
    wordtype: word.wordtype || '',
    topicId,
    courseId,
    interval: 1,
    repetitions: 0,
    easeFactor: 2.5,
    nextReview: addDays(1),
    addedAt: new Date().toISOString(),
    failCount: 0,
  });
  saveQueue(q);
}

export function addManyToSrs(words, topicId, courseId) {
  words.forEach(w => addToSrs(w, topicId, courseId));
}

/* ── Lấy từ đến hạn ôn ── */
export function getDueItems() {
  const now = new Date().toISOString();
  return getQueue().filter(i => i.nextReview <= now);
}

export function getDueCount() { return getDueItems().length; }
export function getTotalSrsCount() { return getQueue().length; }

/* ── Tính interval tiếp theo (helper hiển thị) ── */
export function getNextIntervalLabel(item, quality) {
  if (quality === 'forgot') return '1 ngày';
  if (quality === 'hard') {
    const days = Math.max(1, Math.round(item.interval * 1.2));
    return `${days} ngày`;
  }
  const reps = (item.repetitions || 0) + 1;
  if (quality === 'good') {
    if (reps < INTERVAL_TABLE.length) return `${INTERVAL_TABLE[reps]} ngày`;
    const days = Math.round(item.interval * (item.easeFactor || 2.5));
    return `${days} ngày`;
  }
  if (quality === 'easy') {
    const days = Math.round(item.interval * Math.max(item.easeFactor || 2.5, 2.5) * 1.3);
    return `${days} ngày`;
  }
  return '?';
}

/* ── Đánh giá sau ôn (SM-2 variant) ──
   quality: 'forgot' | 'hard' | 'good' | 'easy'
   ─────────────────────────────────────────────
   forgot → interval = 1,  reps reset
   hard   → interval × 1.2 (min 1 day)
   good   → use interval table (1→3→7→14→ef×interval)
   easy   → skip a step, interval × ef × 1.3
*/
export function reviewItem(wordId, quality) {
  const q = getQueue();
  const idx = q.findIndex(i => i.wordId === wordId);
  if (idx === -1) return;

  const item = { ...q[idx] };

  if (quality === 'forgot') {
    item.interval = 1;
    item.repetitions = 0;
    item.failCount = (item.failCount || 0) + 1;
    // Slightly reduce easeFactor on full forget
    item.easeFactor = Math.max(1.3, (item.easeFactor || 2.5) - 0.2);
  } else if (quality === 'hard') {
    item.interval = Math.max(1, Math.round((item.interval || 1) * 1.2));
    // Don't advance repetitions on hard
    item.easeFactor = Math.max(1.3, (item.easeFactor || 2.5) - 0.15);
  } else if (quality === 'good') {
    const reps = (item.repetitions || 0) + 1;
    if (reps < INTERVAL_TABLE.length) {
      item.interval = INTERVAL_TABLE[reps];
    } else {
      item.interval = Math.round((item.interval || 1) * (item.easeFactor || 2.5));
    }
    item.repetitions = reps;
    // Slight ease factor boost
    item.easeFactor = Math.min(3.0, (item.easeFactor || 2.5) + 0.05);
  } else if (quality === 'easy') {
    const reps = (item.repetitions || 0) + 2; // skip a step
    const baseInterval = reps < INTERVAL_TABLE.length
      ? INTERVAL_TABLE[reps]
      : Math.round((item.interval || 1) * (item.easeFactor || 2.5));
    item.interval = Math.round(baseInterval * 1.3);
    item.repetitions = Math.max(item.repetitions + 1, reps);
    item.easeFactor = Math.min(3.0, (item.easeFactor || 2.5) + 0.15);
  }

  item.nextReview = addDays(item.interval);
  item.lastReviewedAt = new Date().toISOString();
  q[idx] = item;
  saveQueue(q);
}

/* ── Xóa từ khỏi SRS ── */
export function removeFromSrs(wordId) {
  saveQueue(getQueue().filter(i => i.wordId !== wordId));
}

/* ── Lấy toàn bộ queue ── */
export function getFullQueue() { return getQueue(); }

/* ── Dự báo ngọn lửa trí nhớ (Forecast) ── */
export function getSrsForecast() {
  const q = getQueue();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Mảng chứa số từ cần ôn trong 7 ngày tới (index 0 = hôm nay, 1 = ngày mai...)
  const forecast = Array(7).fill(0);

  q.forEach(item => {
    const nextDate = new Date(item.nextReview);
    nextDate.setHours(0, 0, 0, 0);
    
    // Tính khoảng cách ngày so với hôm nay
    const diffTime = nextDate - today;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    // Nếu quá hạn (diffDays <= 0) thì tính vào hôm nay
    if (diffDays <= 0) {
        forecast[0]++;
    } else if (diffDays < 7) {
        forecast[diffDays]++;
    }
  });

  return forecast;
}

/* ── Hệ thống cảnh báo (Decay System) ── */
export function checkSrsDecayWarning() {
  const q = getQueue();
  const now = new Date();
  
  let heavilyOverdueCount = 0;
  
  q.forEach(item => {
    const nextDate = new Date(item.nextReview);
    const diffTime = now - nextDate;
    const diffDays = diffTime / (1000 * 60 * 60 * 24);
    
    // Nếu quá hạn hơn 3 ngày thì bị coi là phai mờ
    if (diffDays > 3) {
      heavilyOverdueCount++;
    }
  });

  return heavilyOverdueCount;
}
