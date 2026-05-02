const fs = require('fs');
const vm = require('vm');

const file = 'C:/Users/hahie/OneDrive/Desktop/pkastudy/pkastudy/src/data/coursesData.js';

function loadModule() {
  let src = fs.readFileSync(file, 'utf8').replace('export const coursesData =', 'const coursesData =');
  src += '\nmodule.exports = { coursesData, TOEIC_BASIC_LESSONS_1_TO_50, TOPIK1_LESSONS_1_TO_30 };';
  const sandbox = { module: { exports: {} }, exports: {} };
  vm.runInNewContext(src, sandbox, { timeout: 10000 });
  return sandbox.module.exports;
}

function serialize(value, indent = 0) {
  const pad = ' '.repeat(indent);
  const next = ' '.repeat(indent + 4);
  if (Array.isArray(value)) {
    return '[\n' + value.map((item) => next + serialize(item, indent + 4)).join(',\n') + '\n' + pad + ']';
  }
  if (value && typeof value === 'object') {
    return '{\n' + Object.entries(value).map(([key, inner]) => `${next}${key}: ${serialize(inner, indent + 4)}`).join(',\n') + '\n' + pad + '}';
  }
  if (typeof value === 'string') {
    return JSON.stringify(value);
  }
  return String(value);
}

function replaceAll(text, replacements) {
  let out = text;
  for (const [from, to] of replacements) {
    out = out.split(from).join(to);
  }
  return out;
}

function cleanTopikMean(text) {
  const exact = new Map([
    ['gia đnh?', 'gia đình'],
    ['phụ huynh?', 'phụ huynh'],
    ['bố mẹ, phụ huynh?', 'bố mẹ, phụ huynh'],
    ['anh? trai (nam gi)', 'anh trai (người nam gọi)'],
    ['anh? trai (nữ gi)', 'anh trai (người nữ gọi)'],
    ['chị gi (nam gi)', 'chị gái (người nam gọi)'],
    ['chị gi (nữ gi)', 'chị gái (người nữ gọi)'],
    ['em gi', 'em gái'],
    ['ng', 'ông'],
    ['b', 'bà'],
    ['ch, cậu', 'chú, cậu'],
    ['d (bn mẹ)', 'dì (bên mẹ)'],
    ['c (bn bố)', 'cô (bên bố)'],
    ['anh?/chị/em h', 'anh/chị/em họ'],
    ['con gi', 'con gái'],
    ['nim vui', 'niềm vui'],
    ['t?nh? y?u', 'tình yêu'],
    ['t?nh y?u', 'tình yêu'],
    ['sự căm ght', 'sự căm ghét'],
    ['hạnh? ph?c', 'hạnh phúc'],
    ['sự ngạc nh?in', 'sự ngạc nhiên'],
    ['cổ, h?ng', 'cổ, họng'],
    ['ngn tay', 'ngón tay'],
    ['ng?n tay', 'ngón tay'],
    ['d?i', 'dài'],
    ['o khoc d?i, coat', 'áo khoác dài, coat'],
    ['s?ng', 'sông'],
    ['nh?ạt mu', 'nhạt màu'],
    ['tr?i quang, trong', 'trời quang, trong'],
    ['u ám, nh?iều mây', 'u ám, nhiều mây'],
    ['n?ng', 'nóng'],
    ['nh?iệt độ kh?ng kh', 'nhiệt độ không khí'],
    ['thin nh?in', 'thiên nhiên'],
    ['kh?ng kh', 'không khí'],
    ['th?c nước', 'thác nước'],
    ['mi trưng tự nh?in', 'môi trường tự nhiên'],
    ['buổi s?ng, bữa s?ng', 'buổi sáng, bữa sáng'],
    ['đồ ăn nh?ẹ', 'đồ ăn nhẹ'],
    ['nh? h?ng, qun ăn', 'nhà hàng, quán ăn'],
    ['nh?à vệ sinh?, phòng tắm', 'nhà vệ sinh, phòng tắm'],
    ['h?ng x?m', 'hàng xóm'],
    ['b?n h?c, bn lm việc', 'bàn học, bàn làm việc'],
    ['l vi s?ng', 'lò vi sóng'],
    ['th?ng rc', 'thùng rác'],
    ['c?ng vi?n', 'công viên'],
    ['cửa h?ng', 'cửa hàng'],
    ['ng?n h?ng', 'ngân hàng'],
    ['trưng h?c', 'trường học'],
    ['kh?ch sạn', 'khách sạn'],
    ['bi?n lai, ha đơn mua h?ng', 'biên lai, hóa đơn mua hàng'],
    ['kh?ch h?ng, kh?ch', 'khách hàng, khách'],
    ['nh?ân viên bán hàng', 'nhân viên bán hàng'],
    ['đổi h?ng', 'đổi hàng'],
    ['ti đựng h?ng', 'túi đựng hàng'],
    ['ti khoản ng?n h?ng', 'tài khoản ngân hàng'],
    ['ngh?o', 'nghèo'],
    ['cng việc, việc lm', 'công việc, việc làm'],
    ['nh?n vin', 'nhân viên'],
    ['nh?n vi?n', 'nhân viên'],
    ['nh?iệm vụ cng việc, nghiệp vụ', 'nhiệm vụ công việc, nghiệp vụ'],
    ['trch nh?iệm', 'trách nhiệm'],
    ['thnh? cng', 'thành công'],
    ['m?y t?nh', 'máy tính'],
    ['chuột m?y t?nh', 'chuột máy tính'],
    ['h?c sinh, sinh vi?n', 'học sinh, sinh viên'],
    ['gi?o vi?n', 'giáo viên'],
    ['tiết h?c, buổi h?c', 'tiết học, buổi học'],
    ['nh?ập h?c', 'nhập học'],
    ['khối lớp, năm h?c', 'khối lớp, năm học'],
    ['việc h?c, h?c tập', 'việc học, học tập'],
    ['h?c, tiếp thu', 'học, tiếp thu'],
    ['ghi nh?ớ', 'ghi nhớ'],
    ['giải th?ch', 'giải thích'],
    ['h?c trước, chuẩn bị bi trước', 'học trước, chuẩn bị bài trước'],
    ['ngn ngữ', 'ngôn ngữ'],
    ['cch d?iễn đạt, biểu hiện', 'cách diễn đạt, biểu hiện'],
    ['tin nh?ắn', 'tin nhắn'],
    ['th?i gian rảnh?, l?c nh?n rỗi', 'thời gian rảnh, lúc nhàn rỗi'],
    ['th?i gian', 'thời gian'],
    ['m nh?ạc', 'âm nhạc'],
    ['sở th?ch', 'sở thích'],
    ['điệu nh?ảy, nh?ảy ma', 'điệu nhảy, nhảy múa'],
    ['buổi biểu d?iễn', 'buổi biểu diễn'],
    ['tận hưởng, yu th?ch', 'tận hưởng, yêu thích'],
    ['nh?à thi đấu, phòng tập', 'nhà thi đấu, phòng tập'],
    ['nh?iệt độ cơ thể', 'nhiệt độ cơ thể'],
    ['buổi s?ng', 'buổi sáng'],
    ['h?c bi, h?c tập', 'học bài, học tập'],
    ['trần nh?', 'trần nhà'],
    ['lương th?ng', 'lương tháng'],
    ['lịch trình?, lịch làm việc', 'lịch trình, lịch làm việc']
    ,
    ['khe mạnh?', 'khỏe mạnh'],
    ['ta nh?', 'tòa nhà'],
    ['không kh?', 'không khí'],
    ['canh?, sp kiểu Hn', 'canh, súp kiểu Hàn'],
    ['tranh?, vẽ tranh?', 'tranh, vẽ tranh'],
    ['ni?m vui', 'niềm vui'],
    ['khi bệnh?, đỡ hơn', 'khỏi bệnh, đỡ hơn'],
    ['tủ lạnh?', 'tủ lạnh'],
    ['con g?i', 'con gái'],
    ['sn nh?', 'sân nhà'],
    ['bệnh?', 'bệnh'],
    ['bnh? m, bnh?', 'bánh mì, bánh'],
    ['ảnh?, chụp ảnh?', 'ảnh, chụp ảnh'],
    ['th?nh c?ng', 'thành công'],
    ['b?', 'bò'],
    ['m thanh?, tiếng', 'âm thanh, tiếng'],
    ['bi tập v nh?', 'bài tập về nhà'],
    ['th?ng r?c', 'thùng rác'],
    ['em g?i', 'em gái'],
    ['tiếng Anh?', 'tiếng Anh'],
    ['bn cạnh?', 'bên cạnh'],
    ['xinh?, đẹp', 'xinh, đẹp'],
    ['th?nh c?ng', 'thành công'],
    ['mi nh?', 'mái nhà'],
    ['nh?', 'nhà'],
    ['khởi hnh?', 'khởi hành'],
    ['lạnh?', 'lạnh'],
    ['?o kho?c d?i, coat', 'áo khoác dài, coat'],
    ['b?', 'bà'],
    ['anh trai (nam g?i)', 'anh trai (nam gọi)'],
    ['thi?n nhi?n', 'thiên nhiên'],
    ['l? vi s?ng', 'lò vi sóng']
  ]);

  if (exact.has(text)) return exact.get(text);

  return replaceAll(text, [
    ['nh?ớ', 'nhớ'],
    ['danh? từ', 'danh từ'],
    ['tnh? từ', 'tính từ'],
    ['nh?à', 'nhà'],
    ['nh?ân', 'nhân'],
    ['nh?iều', 'nhiều'],
    ['nh?ận', 'nhận'],
    ['nh?iễm', 'nhiễm'],
    ['nh?ẹ', 'nhẹ'],
    ['nh?ập', 'nhập'],
    ['nh?ỏ', 'nhỏ'],
    ['nh?ững', 'những'],
    ['nh?ất', 'nhất'],
    ['nh?ịp', 'nhịp'],
    ['nh?ạc', 'nhạc'],
    ['sinh?', 'sinh'],
    ['gia đình?', 'gia đình'],
    ['ngoại hình?', 'ngoại hình'],
    ['nh?iên', 'nhiên'],
    ['d?iện', 'diện'],
    ['d?i chuyển', 'di chuyển'],
    ['tình?', 'tình'],
    ['cảnh?', 'cảnh'],
    ['kh?ch', 'khách'],
    ['kh?ng', 'không'],
    ['h?c', 'học']
  ]).replace(/\s+/g, ' ').trim();
}

function cleanTopikDescription(text) {
  const exact = new Map([
    ['Từ vựng về gia đình?, người thân và các mối quan hệ trong nh?à.', 'Từ vựng về gia đình, người thân và các mối quan hệ trong nhà.'],
    ['Từ vựng về cơ thể, các bộ phận trên cơ thể và nh?ững từ cơ bản liên quan.', 'Từ vựng về cơ thể, các bộ phận trên cơ thể và những từ cơ bản liên quan.'],
    ['Từ vựng về ngoại hình?, vóc dáng, mái tóc và đặc điểm nh?ận d?iện.', 'Từ vựng về ngoại hình, vóc dáng, mái tóc và đặc điểm nhận diện.'],
    ['Từ vựng về thời tiết, khí hậu, nh?iệt độ và hiện tượng tự nh?iên thường gặp.', 'Từ vựng về thời tiết, khí hậu, nhiệt độ và hiện tượng tự nhiên thường gặp.'],
    ['Từ vựng về thiên nh?iên, cảnh? vật và môi trường tự nh?iên xung quanh?.', 'Từ vựng về thiên nhiên, cảnh vật và môi trường tự nhiên xung quanh.'],
    ['Từ vựng về bữa ăn, nh?à hàng, dụng cụ ăn uống và cảm giác khi ăn.', 'Từ vựng về bữa ăn, nhà hàng, dụng cụ ăn uống và cảm giác khi ăn.'],
    ['Từ vựng về nh?à cửa, các không gian trong nh?à và khu vực sinh? sống.', 'Từ vựng về nhà cửa, các không gian trong nhà và khu vực sinh sống.'],
    ['Từ vựng về đồ gia dụng, nội thất và thiết bị dùng trong nh?à.', 'Từ vựng về đồ gia dụng, nội thất và thiết bị dùng trong nhà.'],
    ['Từ vựng về giao thông, phương tiện d?i chuyển và các tình? huống đi đường.', 'Từ vựng về giao thông, phương tiện di chuyển và các tình huống đi đường.'],
    ['Từ vựng về tiền bạc, ngân hàng, thu nh?ập và chi tiêu hằng ngày.', 'Từ vựng về tiền bạc, ngân hàng, thu nhập và chi tiêu hằng ngày.'],
    ['Từ vựng về công việc, nghề nghiệp, trách nh?iệm và mục tiêu nghề nghiệp.', 'Từ vựng về công việc, nghề nghiệp, trách nhiệm và mục tiêu nghề nghiệp.'],
    ['Từ vựng về cuộc sống hằng ngày, nh?ịp sinh? hoạt và các hoạt động quen thuộc.', 'Từ vựng về cuộc sống hằng ngày, nhịp sinh hoạt và các hoạt động quen thuộc.']
  ]);

  return exact.get(text) || cleanTopikMean(text);
}

function normalizeTopikType(type) {
  const raw = replaceAll(type, [
    ['danh? từ phụ', 'danh từ phụ'],
    ['danh? từ', 'danh từ'],
    ['tnh? từ', 'tính từ']
  ]);

  if (raw.startsWith('의존명사')) return '의존명사 (danh từ phụ)';
  if (raw.startsWith('명사')) return '명사 (danh từ)';
  if (raw.startsWith('명 / 부')) return '명 / 부 (danh từ / phó từ)';
  if (raw.startsWith('명')) return '명 (danh từ)';
  if (raw.startsWith('형용사')) return '형용사 (tính từ)';
  if (raw.startsWith('형')) return '형 (tính từ)';
  if (raw.startsWith('동사')) return '동사 (động từ)';
  if (raw.startsWith('동') || raw.startsWith('뙂')) return '동 (động từ)';
  return raw;
}

function cleanToeicMean(text) {
  const exact = new Map([
    ['mốt nh?ất thi', 'mốt nhất thời'],
    ['xem xét, cân nh?ắc', 'xem xét, cân nhắc'],
    ['nh?iều loại, sự đa dạng', 'nhiều loại, sự đa dạng'],
    ['đánh? giá, nh?ận xét', 'đánh giá, nhận xét'],
    ['mục tiu; nh?ắm tới', 'mục tiêu; nhắm tới'],
    ['trước đ, trước khi d?iễn ra', 'trước đó, trước khi diễn ra'],
    ['tương th?ch', 'tương thích'],
    ['n?ng cao, cải thiện', 'nâng cao, cải thiện'],
    ['kỹ thuật vin', 'kỹ thuật viên'],
    ['sự giải th?ch, li giải th?ch', 'sự giải thích, lời giải thích'],
    ['tin nh?ắn, li nh?ắn', 'tin nhắn, lời nhắn'],
    ['theo d?i, lin hệ lại', 'theo dõi, liên hệ lại'],
    ['một cch nh?ất qun', 'một cách nhất quán'],
    ['việc h?c tập, qu? trình? h?c', 'việc học tập, quá trình học'],
    ['buổi định? hướng cho nh?ân viên mới', 'buổi định hướng cho nhân viên mới'],
    ['lương th?ng', 'lương tháng'],
    ['khoản khuyến kh?ch', 'khoản khuyến khích'],
    ['sự công nh?ận', 'sự công nhận'],
    ['rẻ, kh?ng đắt', 'rẻ, không đắt'],
    ['nh?à cung cấp nguyên liệu', 'nhà cung cấp nguyên liệu'],
    ['người bán hàng, nh?à cung ứng', 'người bán hàng, nhà cung ứng'],
    ['nh?ập khẩu', 'nhập khẩu'],
    ['nh?n', 'nhãn'],
    ['tnh? ph; khoản ph', 'tính phí; khoản phí'],
    ['kho hàng, nh?à kho', 'kho hàng, nhà kho'],
    ['thế chấp, khoản vay mua nh?à', 'thế chấp, khoản vay mua nhà'],
    ['t?nh? to?n', 'tính toán'],
    ['t?nh to?n', 'tính toán'],
    ['thu nh?ập', 'thu nhập'],
    ['kho bạc, ngn khố', 'kho bạc, ngân khố'],
    ['không gian, d?iện tích', 'không gian, diện tích'],
    ['người thuê (nh?à, văn phòng)', 'người thuê (nhà, văn phòng)'],
    ['đồng đu, nh?ất qun', 'đồng đều, nhất quán'],
    ['đồng nh?ất', 'đồng nhất'],
    ['kh?ng kh, không gian', 'không khí, không gian'],
    ['giao hàng, dịch vụ giao nh?ận', 'giao hàng, dịch vụ giao nhận'],
    ['cng thức nấu ăn', 'công thức nấu ăn'],
    ['kh?ch', 'khách'],
    ['chuyến hải trình?, chuyến đi d?i', 'chuyến hải trình, chuyến đi dài'],
    ['hnh? kh?ch', 'hành khách'],
    ['nh?à ga, bến cảng, kho đầu mối', 'nhà ga, bến cảng, kho đầu mối'],
    ['nh?ận phòng, làm thủ tục vào ở', 'nhận phòng, làm thủ tục vào ở'],
    ['nh?ân viên hỗ trợ khách', 'nhân viên hỗ trợ khách'],
    ['d?iễn vin', 'diễn viên'],
    ['nh?n vật', 'nhân vật'],
    ['đạo d?iễn', 'đạo diễn'],
    ['mn d?iễn; d?iễn xuất', 'màn diễn; diễn xuất'],
    ['dàn d?iễn viên', 'dàn diễn viên'],
    ['vai d?iễn', 'vai diễn'],
    ['album nh?ạc', 'album nhạc'],
    ['ban nh?ạc', 'ban nhạc'],
    ['buổi hòa nh?ạc', 'buổi hòa nhạc'],
    ['nh?ạc cụ', 'nhạc cụ'],
    ['nh?ạc sĩ; nh?ạc công', 'nhạc sĩ; nhạc công'],
    ['nh?ịp điệu', 'nhịp điệu'],
    ['hướng dẫn vin', 'hướng dẫn viên'],
    ['c?ng ch?ng', 'công chúng'],
    ['kh?ch tham quan', 'khách tham quan'],
    ['nh?à báo', 'nhà báo'],
    ['truyn th?ng', 'truyền thông'],
    ['bệnh? nh?n', 'bệnh nhân'],
    ['nh?a sĩ', 'nha sĩ'],
    ['nh?ập viện', 'nhập viện'],
    ['nh?à thuốc', 'nhà thuốc'],
    ['vin thuốc', 'viên thuốc'],
    ['th?ch nghi', 'thích nghi'],
    ['tuân theo, chấp hành?', 'tuân theo, chấp hành'],
    ['hon thnh?, đạt được', 'hoàn thành, đạt được'],
    ['điu chỉnh?', 'điều chỉnh'],
    ['cuộc hẹn khám bệnh?', 'cuộc hẹn khám bệnh'],
    ['tránh?', 'tránh'],
    ['knh?', 'kênh'],
    ['so sánh?', 'so sánh'],
    ['sự cạnh? tranh?, đối thủ cạnh? tranh?', 'sự cạnh tranh, đối thủ cạnh tranh'],
    ['linh? kiện, bộ phận cấu thnh?', 'linh kiện, bộ phận cấu thành'],
    ['tiến hành?, thực hiện', 'tiến hành, thực hiện'],
    ['chi ph?', 'chi phí'],
    ['hiện tại, hiện hành?', 'hiện tại, hiện hành'],
    ['quyết định?', 'quyết định'],
    ['chứng minh?, thể hiện', 'chứng minh, thể hiện'],
    ['sự khởi hành?, lúc bay đi', 'sự khởi hành, lúc bay đi'],
    ['xác định?, quyết định?', 'xác định, quyết định'],
    ['mn chnh?', 'món chính'],
    ['thuộc ti chnh?', 'thuộc tài chính'],
    ['lực, sức mạnh?', 'lực, sức mạnh'],
    ['vinh? dự; vinh? danh?', 'vinh dự; vinh danh'],
    ['định?', 'định'],
    ['hnh? trình?', 'hành trình'],
    ['chủ nh?', 'chủ nhà'],
    ['truy?n th?ng', 'truyền thông'],
    ['điu chỉnh?, sửa đổi', 'điều chỉnh, sửa đổi'],
    ['h?nh kh?ch', 'hành khách'],
    ['hoàn trả chi ph?', 'hoàn trả chi phí'],
    ['khoản hoàn trả chi ph?', 'khoản hoàn trả chi phí'],
    ['pht hành?', 'phát hành'],
    ['lịch trình?, thời gian biểu', 'lịch trình, thời gian biểu'],
    ['mạnh?, vững', 'mạnh, vững'],
    ['truyn hành?', 'truyền hình'],
    ['chức danh?', 'chức danh'],
    ['xc minh?', 'xác minh'],
    ['khoa, phòng bệnh?', 'khoa, phòng bệnh']
  ]);

  return exact.get(text) || replaceAll(text, [
    ['nh?à', 'nhà'],
    ['nh?ân', 'nhân'],
    ['nh?ập', 'nhập'],
    ['nh?ận', 'nhận'],
    ['nh?ất', 'nhất'],
    ['đánh?', 'đánh']
  ]).trim();
}

function lessonLabel(title) {
  const match = title.match(/LESSON\s+\d+:\s*(.*)$/i);
  return match ? match[1].trim() : title.trim();
}

const { TOEIC_BASIC_LESSONS_1_TO_50, TOPIK1_LESSONS_1_TO_30 } = loadModule();

for (const topic of TOEIC_BASIC_LESSONS_1_TO_50) {
  topic.title = topic.title.replace('Med?ia', 'Media');
  topic.description = `Từ vựng TOEIC theo chủ đề ${lessonLabel(topic.title)} trong ngữ cảnh công việc và giao tiếp thực tế.`;
  for (const word of topic.words) {
    word.mean = cleanToeicMean(word.mean);
    word.example_vi = `Ví dụ này minh họa cách dùng từ "${word.word}" trong ngữ cảnh TOEIC.`;
  }
}

for (const topic of TOPIK1_LESSONS_1_TO_30) {
  topic.description = cleanTopikDescription(topic.description);
  for (const word of topic.words) {
    word.mean = cleanTopikMean(word.mean);
    word.wordtype = normalizeTopikType(word.wordtype);
    word.example_vi = `"${word.word}" là từ vựng cơ bản cần ghi nhớ.`;
  }
}

let fileText = fs.readFileSync(file, 'utf8');
const toeicStart = fileText.indexOf('const TOEIC_BASIC_LESSONS_1_TO_50 = [');
const toeicEnd = fileText.indexOf("coursesData['toeic-basic'].topics.splice", toeicStart);
const topikStart = fileText.indexOf('const TOPIK1_LESSONS_1_TO_30 = [');
const topikEnd = fileText.indexOf("coursesData['topik1-basic'].topics.splice", topikStart);

if ([toeicStart, toeicEnd, topikStart, topikEnd].some((value) => value === -1)) {
  throw new Error('Failed to locate lesson blocks');
}

const toeicBlock = `const TOEIC_BASIC_LESSONS_1_TO_50 = ${serialize(TOEIC_BASIC_LESSONS_1_TO_50)};\n\n`;
const topikBlock = `const TOPIK1_LESSONS_1_TO_30 = ${serialize(TOPIK1_LESSONS_1_TO_30)};\n\n`;

fileText =
  fileText.slice(0, toeicStart) +
  toeicBlock +
  fileText.slice(toeicEnd, topikStart) +
  topikBlock +
  fileText.slice(topikEnd);

fs.writeFileSync(file, fileText, 'utf8');
