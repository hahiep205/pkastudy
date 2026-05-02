const fs = require('fs');
const vm = require('vm');

const file = 'C:/Users/hahie/OneDrive/Desktop/pkastudy/pkastudy/src/data/coursesData.js';
const headFile = 'C:/Users/hahie/OneDrive/Desktop/pkastudy/pkastudy/.codex-tmp/coursesData_HEAD.js';

function load(filePath, encoding, head = false) {
  let src = fs.readFileSync(filePath, encoding).replace(/^\uFEFF/, '');
  src = src.replace('export const coursesData =', 'const coursesData =');
  src += head
    ? '\nmodule.exports = { coursesData };'
    : '\nmodule.exports = { coursesData, TOEIC_BASIC_LESSONS_1_TO_50, TOPIK1_LESSONS_1_TO_30 };';
  const sandbox = { module: { exports: {} }, exports: {} };
  vm.runInNewContext(src, sandbox, { timeout: 10000 });
  return sandbox.module.exports;
}

function deepClone(value) {
  return JSON.parse(JSON.stringify(value));
}

function suspiciousScore(text) {
  return (text.match(/\?/g) || []).length * 10 + (text.match(/\b[a-z]{2,}\b/g) || []).length;
}

function cleanText(text) {
  const replacements = [
    ['T? v?ng', 'Từ vựng'],
    ['ch? ??', 'chủ đề'],
    ['ng? c?nh', 'ngữ cảnh'],
    ['c?ng vi?c', 'công việc'],
    ['v? giao ti?p th?c t?', 'và giao tiếp thực tế'],
    ['V? d? n?y minh h?a c?ch d?ng t?', 'Ví dụ này minh họa cách dùng từ'],
    ['tu?n theo', 'tuân theo'],
    ['chấp h?nh', 'chấp hành'],
    ['tha thuận', 'thỏa thuận'],
    ['xc định', 'xác định'],
    ['rng buộc', 'ràng buộc'],
    ['tnh chất', 'tính chất'],
    ['cn nhắc', 'cân nhắc'],
    ['thưng xuyn', 'thường xuyên'],
    ['tiu thụ', 'tiêu thụ'],
    ['thị trưng', 'thị trường'],
    ['quảng b', 'quảng bá'],
    ['thu h?t', 'thu hút'],
    ['so s?nh', 'so sánh'],
    ['hi lng', 'hài lòng'],
    ['bo co', 'báo cáo'],
    ['hư hng', 'hư hỏng'],
    ['quyn lợi', 'quyền lợi'],
    ['qu tr?nh', 'quá trình'],
    ['liệu tr?nh', 'liệu trình'],
    ['ko di', 'kéo dài'],
    ['hon trả', 'hoàn trả'],
    ['bồi hon', 'bồi hoàn'],
    ['bc sĩ', 'bác sĩ'],
    ['khn giả', 'khán giả'],
    ['nh bo', 'nhà báo'],
    ['ph?ng vin', 'phóng viên'],
    ['pht sng', 'phát sóng'],
    ['ha nhạc', 'hòa nhạc'],
    ['nhạc cng', 'nhạc công'],
    ['ph?ng thu', 'phòng thu'],
    ['ph?ng trưng by', 'phòng trưng bày'],
    ['bi đnh gi', 'bài đánh giá'],
    ['dn diễn vin', 'dàn diễn viên'],
    ['mn tr?nh diễn', 'màn trình diễn'],
    ['liu dng', 'liều dùng'],
    ['huyết p', 'huyết áp'],
    ['khe mạnh', 'khỏe mạnh'],
    ['sức khe', 'sức khỏe'],
    ['điu trị', 'điều trị'],
    ['thu m', 'thu âm'],
    ['ngưi', 'người'],
    ['nhn vin', 'nhân viên'],
    ['khch hng', 'khách hàng'],
    ['c?ng ty', 'công ty'],
    ['cc ', 'các '],
    [' ngy', ' ngày'],
    [' ny', ' này'],
    [' vo ', ' vào '],
    [' hng', ' hàng'],
    [' t?i', ' tôi'],
    [' Ch?ng', ' Chúng'],
    ['Vui l?ng', 'Vui lòng'],
    [' tr?n ', ' trên '],
    [' ph?ng', ' phòng'],
    [' tr?nh', ' trình'],
    [' l?ng', ' lòng'],
    [' nhi?u', ' nhiều'],
    [' x?t', ' xét'],
    [' Kh?ch', ' Khách'],
    [' kh?ng', ' không'],
    [' Nh?m', ' Nhóm'],
    [' ch?nh', ' chính'],
    [' kh?m', ' khám'],
    [' ph?p', ' pháp'],
    [' x?c', ' xác'],
    [' b?n h?ng', ' bán hàng'],
    [' to?n', ' toán'],
    [' tr?ng', ' trọng'],
    [' s?ch', ' sách'],
    [' h?m', ' hôm'],
    [' th?ng', ' tháng'],
    [' x?a', ' xa'],
    [' h?c', ' học'],
    [' h?nh', ' hành'],
    [' M?y', ' Máy'],
    [' H?y', ' Hãy'],
    [' cng', ' công'],
    [' lm ', ' làm '],
    [' pht ', ' phát '],
    [' chuyn', ' chuyển'],
    [' phn ', ' phần '],
    [' nghim', 'nghiệm'],
    ['ph?p l?', 'pháp lý'],
    ['mi trưng', 'môi trường'],
  ];

  let out = text;
  for (const [from, to] of replacements) {
    out = out.split(from).join(to);
  }
  return out.replace(/\s+/g, ' ').trim();
}

function lessonLabel(title) {
  const match = title.match(/LESSON\s+\d+:\s*(.*)$/i);
  return match ? match[1].trim() : title.replace(/^.*?:\s*/, '').trim();
}

function serialize(value, indent = 0) {
  const pad = ' '.repeat(indent);
  const next = ' '.repeat(indent + 4);

  if (Array.isArray(value)) {
    return '[\n' + value.map((item) => next + serialize(item, indent + 4)).join(',\n') + '\n' + pad + ']';
  }

  if (value && typeof value === 'object') {
    const entries = Object.entries(value).map(([key, inner]) => `${next}${key}: ${serialize(inner, indent + 4)}`);
    return '{\n' + entries.join(',\n') + '\n' + pad + '}';
  }

  if (typeof value === 'string') {
    return JSON.stringify(value);
  }

  return String(value);
}

const current = load(file, 'utf8');
const head = load(headFile, 'utf16le', true);
const lessons = deepClone(current.TOEIC_BASIC_LESSONS_1_TO_50);

const headMap = new Map();
for (const topic of head.coursesData['toeic-basic'].topics) {
  for (const word of topic.words) {
    if (!headMap.has(word.word)) {
      headMap.set(word.word, word);
    }
  }
}

const bestCurrent = new Map();
for (const lesson of lessons) {
  for (const word of lesson.words) {
    const candidate = {
      mean: cleanText(word.mean),
      wordtype: cleanText(word.wordtype),
      transcription: word.transcription,
    };
    const previous = bestCurrent.get(word.word);
    if (!previous || suspiciousScore(candidate.mean) < suspiciousScore(previous.mean)) {
      bestCurrent.set(word.word, candidate);
    }
  }
}

for (const lesson of lessons) {
  const label = lessonLabel(lesson.title);
  lesson.description = `Từ vựng TOEIC theo chủ đề ${label} trong ngữ cảnh công việc và giao tiếp thực tế.`;

  for (const word of lesson.words) {
    word.mean = cleanText(word.mean);
    word.wordtype = cleanText(word.wordtype);

    const headWord = headMap.get(word.word);
    const best = bestCurrent.get(word.word);

    if (headWord && suspiciousScore(word.mean) > 0) {
      word.mean = headWord.mean;
      word.wordtype = headWord.wordtype;
      if (headWord.transcription) {
        word.transcription = headWord.transcription;
      }
    } else if (best && suspiciousScore(best.mean) < suspiciousScore(word.mean)) {
      word.mean = best.mean;
      word.wordtype = best.wordtype;
    }

    word.mean = cleanText(word.mean);
    word.wordtype = cleanText(word.wordtype);
    word.example = word.example.replace(/\?/g, '’');
    word.example_vi = `Ví dụ này minh họa cách dùng từ ${JSON.stringify(word.word)} trong ngữ cảnh TOEIC.`;
  }
}

let source = fs.readFileSync(file, 'utf8');
const start = source.indexOf('const TOEIC_BASIC_LESSONS_1_TO_50 = [');
const end = source.indexOf("coursesData['toeic-basic'].topics.splice", start);
const block = `const TOEIC_BASIC_LESSONS_1_TO_50 = ${serialize(lessons, 0)};\n\n`;
source = source.slice(0, start) + block + source.slice(end);
fs.writeFileSync(file, source, 'utf8');
