/* GDCD 9 – Bài 3. Tích cực tham gia các hoạt động cộng đồng. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('gdcd-9/bai-3', {
  objectives: [
    'Nêu được khái niệm và các loại hoạt động cộng đồng.',
    'Giải thích được sự cần thiết phải tham gia hoạt động cộng đồng.',
    'Tích cực, tự giác tham gia các hoạt động cộng đồng phù hợp lứa tuổi.',
    'Phê phán thái độ thờ ơ, né tránh hoạt động cộng đồng.'
  ],
  intro: 'Sau trận lũ, Chi đoàn trường của Tâm phát động “Áo ấm cho em” gửi các bạn ở vùng bị thiệt hại. Tâm cùng nhóm bạn thu gom quần áo, sách vở, phân loại và đóng thùng mỗi chiều. Đó là <b>tham gia hoạt động cộng đồng</b>.',
  steps: [
    { title: 'Hoạt động cộng đồng là gì?', html: `<p><b>Hoạt động cộng đồng</b> là những hoạt động vì lợi ích chung, do tập thể tổ chức, nhằm xây dựng cộng đồng (lớp, trường, khu dân cư, xã hội) ngày càng tốt đẹp.</p>`,
      svg: S.mindmap({ center: 'Hoạt động cộng đồng', branches: [{ title: 'Chính trị – xã hội', items: ['Hoạt động Đoàn, Đội', 'Tuyên truyền pháp luật'] }, { title: 'Nhân đạo', items: ['Quyên góp, từ thiện', 'Hiến máu (đủ tuổi)'] }, { title: 'Môi trường', items: ['Dọn vệ sinh', 'Trồng cây xanh'] }, { title: 'Văn hoá – thể thao', items: ['Văn nghệ, lễ hội', 'Giải thể thao'] }], w: 640, size: 13 }), caption: 'Một số loại hoạt động cộng đồng.' },
    { title: 'Vì sao cần tham gia?', html: `<ul><li>Phát triển kĩ năng giao tiếp, hợp tác, tổ chức; mở rộng hiểu biết.</li><li>Bồi dưỡng tình yêu thương, trách nhiệm với cộng đồng.</li><li>Góp phần giải quyết vấn đề chung, xây dựng cộng đồng gắn kết.</li></ul>` },
    { title: 'Kết quả hoạt động', html: `<p>Kết quả quyên góp của trường Tâm qua các tuần:</p>`,
      svg: S.lineChart({ title: 'Số thùng hàng quyên góp được (minh hoạ)', cats: ['Tuần 1', 'Tuần 2', 'Tuần 3', 'Tuần 4'], values: [12, 20, 26, 30], yMin: 0, yMax: 35, yStep: 5, yLabel: 'thùng' }), caption: 'Số liệu minh hoạ.' },
    { title: 'Tham gia tích cực', html: `<ul><li>Tự giác đăng kí, nhận và hoàn thành nhiệm vụ.</li><li>Đề xuất ý tưởng; vận động bạn bè, người thân cùng tham gia.</li><li>Tham gia phù hợp sức khoẻ, an toàn, có sự đồng ý của gia đình.</li></ul>
      <div class="box key">Phê phán: thờ ơ, đùn đẩy, tham gia cho có, lợi dụng từ thiện để trục lợi.</div>` }
  ],
  summary: 'Hoạt động cộng đồng là hoạt động vì lợi ích chung: chính trị – xã hội, nhân đạo, môi trường, văn hoá – thể thao… Tham gia giúp phát triển kĩ năng, trách nhiệm và góp phần xây dựng cộng đồng tốt đẹp. Học sinh cần tự giác, tích cực tham gia phù hợp lứa tuổi; phê phán thái độ thờ ơ, né tránh.',
  examples: [
    { title: 'Tính tổng', problem: 'Theo biểu đồ, cả 4 tuần quyên góp được bao nhiêu thùng?', solution: '12 + 20 + 26 + 30 = 88 thùng.' },
    { title: 'Nhận diện', problem: 'Lớp được giao trồng cây, Bình viện cớ ốm để ở nhà chơi game. Nhận xét?', solution: 'Bình thờ ơ, né tránh hoạt động cộng đồng; cần phê phán và động viên bạn.' },
    { title: 'Đề xuất', problem: 'Đề xuất một hoạt động cộng đồng phù hợp ở khu em sống.', solution: 'Ví dụ: “Thư viện sách cũ” cho trẻ em trong khu phố vào dịp hè.' }
  ],
  exercises: [
    { question: 'Kể ba hoạt động cộng đồng em đã tham gia và lợi ích nhận được.', hints: ['Ở trường.', 'Ở khu dân cư.'], solution: 'Dọn vệ sinh trường (kĩ năng hợp tác), quyên góp sách (biết chia sẻ), văn nghệ khu phố (tự tin).' },
    { question: 'Mỗi bạn góp 3 quyển sách, lớp có 42 bạn. Lớp góp được bao nhiêu quyển?', hints: ['Nhân.', '42 × 3.'], solution: '126 quyển.' },
    { question: 'Vì sao cần cảnh giác với một số “hoạt động từ thiện” trên mạng?', hints: ['Lừa đảo.', 'Minh bạch.'], solution: 'Vì có kẻ lợi dụng để trục lợi; nên tham gia qua tổ chức uy tín, có công khai, minh bạch.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hoạt động cộng đồng là hoạt động vì lợi ích chung.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Hoạt động thuộc lĩnh vực môi trường:', options: ['Trồng cây xanh', 'Thi văn nghệ', 'Quyên góp áo ấm', 'Sinh hoạt Đoàn'], answer: 0, explain: 'Môi trường.' },
    { type: 'short', q: 'Lớp 42 bạn, mỗi bạn góp 3 quyển sách. Tổng bao nhiêu quyển?', answer: '126', unit: 'quyển', calc: '42*3', explain: '126.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Học sinh còn nhỏ nên không cần tham gia hoạt động cộng đồng.', answer: false, explain: 'Tham gia phù hợp lứa tuổi.' },
    { type: 'short', q: 'Quyên góp 12, 20, 26, 30 thùng trong 4 tuần. Tổng bao nhiêu thùng?', answer: '88', unit: 'thùng', calc: '12+20+26+30', explain: '88.' },
    { type: 'mcq', q: 'Thái độ cần phê phán:', options: ['Đùn đẩy, tham gia cho có', 'Tự giác đăng kí', 'Đề xuất ý tưởng', 'Vận động bạn bè'], answer: 0, explain: 'Thờ ơ.' },
    { type: 'mcq', q: 'Lợi ích khi tham gia hoạt động cộng đồng:', options: ['Phát triển kĩ năng, trách nhiệm', 'Mất thời gian vô ích', 'Không học được gì', 'Chỉ để lấy điểm'], answer: 0, explain: 'Đúng.' },
    { type: 'short', q: 'Số thùng tăng từ 12 (tuần 1) lên 30 (tuần 4). Tăng bao nhiêu thùng?', answer: '18', unit: 'thùng', calc: '30-12', explain: '18.' }
  ]
});
})();
