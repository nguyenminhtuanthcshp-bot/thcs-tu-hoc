/* LS&ĐL 6 – Lịch sử, Bài 14. Nhà nước Văn Lang, Âu Lạc. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-6/ls-bai-14', {
  objectives: [
    'Nêu được khoảng thời gian thành lập và xác định được phạm vi không gian của nước Văn Lang, Âu Lạc trên lược đồ.',
    'Trình bày được tổ chức nhà nước của Văn Lang, Âu Lạc.',
    'Mô tả được đời sống vật chất và tinh thần của cư dân Văn Lang, Âu Lạc.',
    'Tự hào về truyền thống dựng nước của dân tộc.'
  ],
  intro: '“Dù ai đi ngược về xuôi, Nhớ ngày giỗ Tổ mùng mười tháng ba.” Câu ca dao nhắc nhở mỗi người Việt về các Vua Hùng – những người đã dựng nên nhà nước đầu tiên: <b>Văn Lang</b>.',
  steps: [
    { title: 'Nhà nước Văn Lang', html: `<ul><li>Ra đời khoảng <b>thế kỉ VII TCN</b>, trên địa bàn Bắc Bộ và Bắc Trung Bộ ngày nay.</li><li>Kinh đô: <b>Phong Châu</b> (Phú Thọ).</li><li>Nguyên nhân: nhu cầu trị thuỷ, làm thuỷ lợi; chống ngoại xâm; xã hội phân hoá.</li></ul>`,
      svg: S.sketchMap({ title: 'Địa bàn Văn Lang – Âu Lạc (giản lược)', areas: [{ pts: [[215,15],[260,10],[300,22],[340,40],[345,62],[318,78],[300,95],[285,110],[280,125],[300,150],[320,175],[335,200],[340,225],[330,250],[300,270],[270,290],[255,280],[268,262],[290,245],[295,220],[280,195],[262,170],[245,145],[235,120],[248,100],[240,80],[220,65],[205,40]], fill: '#e5e7eb', label: 'Việt Nam ngày nay', lx: 440, ly: 250, size: 11 }, { pts: [[215,15],[260,10],[300,22],[340,40],[345,62],[318,78],[300,95],[285,110],[280,125],[262,128],[245,145],[235,120],[248,100],[240,80],[220,65],[205,40]], fill: '#fde68a', label: 'Văn Lang – Âu Lạc', lx: 420, ly: 60, size: 12 }], points: [{ x: 262, y: 40, label: 'Phong Châu', left: true }, { x: 280, y: 52, label: 'Cổ Loa' }], note: 'Lược đồ giản lược, không theo tỉ lệ; phạm vi gần đúng (Bắc Bộ, Bắc Trung Bộ).' }), caption: 'Địa bàn chủ yếu: lưu vực sông Hồng, sông Mã, sông Cả.' },
    { title: 'Tổ chức nhà nước', html: `<p>Bộ máy còn đơn giản:</p>`,
      svg: S.flowchart({ title: 'Tổ chức nhà nước Văn Lang', steps: [{ t: 'start', s: 'Hùng Vương' }, { t: 'proc', s: 'Lạc hầu, Lạc tướng' }, { t: 'proc', s: 'Bộ (15 bộ)' }, { t: 'end', s: 'Chiềng, chạ' }] }), caption: 'Lạc tướng đứng đầu các bộ; Bồ chính đứng đầu chiềng, chạ.' },
    { title: 'Nhà nước Âu Lạc', html: `<ul><li>Năm <b>208 TCN</b>, Thục Phán lãnh đạo người Âu Việt và Lạc Việt đánh thắng quân Tần, lập nước Âu Lạc, xưng <b>An Dương Vương</b>.</li><li>Đóng đô ở <b>Cổ Loa</b> (Đông Anh, Hà Nội); thành có ba vòng hình xoáy trôn ốc; có nỏ bắn nhiều phát.</li><li>Năm <b>179 TCN</b>, Triệu Đà chiếm Âu Lạc.</li></ul>` },
    { title: 'Đời sống cư dân', html: `<p>Đời sống phong phú:</p>`,
      svg: S.table({ title: 'Đời sống cư dân Văn Lang – Âu Lạc', head: ['Vật chất', 'Tinh thần'], rows: [['Trồng lúa nước, đánh cá', 'Thờ cúng tổ tiên, thần tự nhiên'], ['Ở nhà sàn', 'Lễ hội, đua thuyền'], ['Ăn cơm, rau, cá', 'Nhuộm răng, ăn trầu, xăm mình'], ['Đúc trống đồng', 'Nhạc cụ: trống, chiêng']], colW: 250 }), caption: 'Nhiều phong tục còn lưu giữ đến ngày nay.' }
  ],
  summary: 'Nhà nước Văn Lang ra đời khoảng thế kỉ VII TCN, kinh đô Phong Châu (Phú Thọ), đứng đầu là Hùng Vương, giúp việc có Lạc hầu, Lạc tướng; cả nước chia 15 bộ. Năm 208 TCN, Thục Phán lập nước Âu Lạc, đóng đô ở Cổ Loa (Hà Nội). Năm 179 TCN, Âu Lạc bị Triệu Đà chiếm. Cư dân trồng lúa nước, ở nhà sàn, đúc trống đồng, thờ cúng tổ tiên.',
  examples: [
    { title: 'Nguyên nhân', problem: 'Vì sao nhà nước Văn Lang ra đời?', solution: 'Nhu cầu trị thuỷ, thuỷ lợi; chống giặc ngoại xâm; xã hội phân hoá giàu nghèo.' },
    { title: 'Tính thời gian', problem: 'Âu Lạc tồn tại từ 208 TCN đến 179 TCN. Bao nhiêu năm?', solution: '208 − 179 = 29 năm.' },
    { title: 'Di tích', problem: 'Thành Cổ Loa có đặc điểm gì?', solution: 'Ba vòng thành hình xoáy trôn ốc, có hào nước bao quanh.' }
  ],
  exercises: [
    { question: 'Nước Văn Lang chia thành bao nhiêu bộ?', hints: ['Đơn vị dưới vua.', 'Số giữa 10 và 20.'], solution: '15 bộ.' },
    { question: 'Từ năm 208 TCN đến năm 179 TCN là bao nhiêu năm?', hints: ['Cùng TCN: số lớn trừ số nhỏ.', '208 − 179.'], solution: '29 năm.' },
    { question: 'Nêu ba phong tục của cư dân Văn Lang còn đến nay.', hints: ['Liên quan miếng trầu.', 'Ngày Tết.'], solution: 'Ăn trầu, làm bánh chưng bánh giầy, thờ cúng tổ tiên.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Kinh đô nước Văn Lang là Phong Châu.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Nước Âu Lạc được thành lập năm:', options: ['208 TCN', '179 TCN', '938', '40'], answer: 0, explain: '208 TCN.' },
    { type: 'short', q: 'Từ 208 TCN đến 179 TCN là bao nhiêu năm?', answer: '29', unit: 'năm', calc: '208-179', explain: '29.' },
    { type: 'mcq', q: 'Kinh đô nước Âu Lạc:', options: ['Cổ Loa', 'Phong Châu', 'Hoa Lư', 'Thăng Long'], answer: 0, explain: 'Cổ Loa.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nhà nước Văn Lang chia thành 20 bộ.', answer: false, explain: '15 bộ.' },
    { type: 'short', q: 'Nước Văn Lang có bao nhiêu bộ?', answer: '15', unit: 'bộ', calc: '15', explain: '15.' },
    { type: 'mcq', q: 'Người lập nước Âu Lạc:', options: ['Thục Phán', 'Triệu Đà', 'Lý Bí', 'Ngô Quyền'], answer: 0, explain: 'Thục Phán.' },
    { type: 'mcq', q: 'Đứng đầu các bộ ở Văn Lang:', options: ['Lạc tướng', 'Bồ chính', 'Lạc hầu', 'Quan lang'], answer: 0, explain: 'Lạc tướng.' }
  ]
});
})();
