/* LS&ĐL 7 – Lịch sử, Bài 8. Vương quốc Cam-pu-chia. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-7/ls-bai-8', {
  objectives: [
    'Mô tả được quá trình hình thành và phát triển của Vương quốc Cam-pu-chia.',
    'Nêu được những nét chính về thời kì Ăng-co.',
    'Giới thiệu được những thành tựu văn hoá tiêu biểu của Cam-pu-chia.',
    'Đánh giá được sự phát triển của văn hoá Cam-pu-chia thời Ăng-co.'
  ],
  intro: 'Hình ảnh năm ngọn tháp Ăng-co Vát in trên quốc kỳ Cam-pu-chia. Đây là công trình tôn giáo lớn nhất thế giới, được xây dựng vào thế kỉ XII, thời kì <b>Ăng-co huy hoàng</b>.',
  steps: [
    { title: 'Sự hình thành', html: `<p>Người Khơ-me lập nước Chân Lạp (thế kỉ VI), sau đó thôn tính Phù Nam. Năm <b>802</b>, Giay-a-vác-man II thống nhất đất nước, mở ra <b>thời kì Ăng-co</b> (thế kỉ IX – XV).</p>` },
    { title: 'Thời kì Ăng-co', html: `<p>Diễn biến:</p>`,
      svg: S.timeline({ title: 'Cam-pu-chia thời Ăng-co', items: [{ y: '802', s: 'Giay-a-vác-man II' }, { y: 'TK XII', s: 'Xây Ăng-co Vát' }, { y: 'Cuối TK XII', s: 'Ăng-co Thom' }, { y: 'TK XV', s: 'Bỏ kinh đô Ăng-co' }], note: 'TK: thế kỉ.' }), caption: 'Đỉnh cao dưới thời Giay-a-vác-man VII.' },
    { title: 'Kinh tế, chính trị', html: `<ul><li>Xây dựng hồ chứa nước (ba-ray), kênh mương; trồng lúa nhiều vụ.</li><li>Lãnh thổ mở rộng; vua được thần thánh hoá.</li></ul>` },
    { title: 'Văn hoá', html: `<p>Thành tựu:</p>`,
      svg: S.table({ title: 'Văn hoá Cam-pu-chia', head: ['Lĩnh vực', 'Thành tựu'], rows: [['Chữ viết', 'Chữ Khơ-me cổ (từ chữ Phạn)'], ['Tôn giáo', 'Hin-đu giáo, Phật giáo'], ['Kiến trúc', 'Ăng-co Vát, Ăng-co Thom'], ['Điêu khắc', 'Phù điêu vũ nữ Áp-sa-ra']], colW: 250 }), caption: 'Quần thể Ăng-co là Di sản thế giới.' }
  ],
  summary: 'Người Khơ-me lập nước Chân Lạp, sau thôn tính Phù Nam. Năm 802, Giay-a-vác-man II thống nhất đất nước, mở đầu thời kì Ăng-co (thế kỉ IX – XV) – thời kì phát triển huy hoàng: thuỷ lợi, nông nghiệp, lãnh thổ mở rộng. Văn hoá: chữ Khơ-me cổ, Hin-đu giáo và Phật giáo, Ăng-co Vát (thế kỉ XII), Ăng-co Thom, phù điêu tinh xảo.',
  examples: [
    { title: 'Thời gian', problem: 'Năm 802 thuộc thế kỉ nào?', solution: 'Thế kỉ IX.' },
    { title: 'Tính', problem: 'Từ 802 đến năm 1431 (mốc quy ước khi kinh đô Ăng-co bị bỏ) là bao nhiêu năm?', solution: '629 năm.' },
    { title: 'Nhận diện', problem: 'Công trình in trên quốc kỳ Cam-pu-chia?', solution: 'Ăng-co Vát.' }
  ],
  exercises: [
    { question: 'Ai mở đầu thời kì Ăng-co?', hints: ['Năm 802.', 'Giay-a-vác-man…'], solution: 'Giay-a-vác-man II.' },
    { question: 'Năm 802 cách năm 2002 bao nhiêu năm?', hints: ['2002 − 802.', 'Tròn nghìn.'], solution: '1 200 năm.' },
    { question: 'Vì sao nông nghiệp thời Ăng-co phát triển?', hints: ['Nước.', 'Hồ, kênh.'], solution: 'Xây dựng nhiều hồ chứa, kênh mương, trồng lúa được nhiều vụ.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Ăng-co Vát được xây dựng vào thế kỉ XII.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Năm 802, người thống nhất Cam-pu-chia:', options: ['Giay-a-vác-man II', 'Pha Ngừm', 'A-cơ-ba', 'Lý Công Uẩn'], answer: 0, explain: 'Đúng.' },
    { type: 'short', q: 'Năm 802 thuộc thế kỉ thứ mấy? (ghi số)', answer: '9', calc: 'Math.floor((802-1)/100)+1', explain: 'IX.' },
    { type: 'mcq', q: 'Thời kì phát triển huy hoàng của Cam-pu-chia:', options: ['Thời kì Ăng-co', 'Thời kì Óc Eo', 'Thời kì Lạn Xạng', 'Thời kì Pa-gan'], answer: 0, explain: 'Ăng-co.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Chữ Khơ-me cổ được tạo từ chữ Hán.', answer: false, explain: 'Từ chữ Phạn.' },
    { type: 'short', q: 'Từ năm 802 đến năm 2002 là bao nhiêu năm?', answer: '1200', answerText: '1 200', unit: 'năm', calc: '2002-802', explain: '1 200.' },
    { type: 'mcq', q: 'Hồ chứa nước lớn thời Ăng-co gọi là:', options: ['Ba-ray', 'Ốc đảo', 'Đầm phá', 'Vịnh'], answer: 0, explain: 'Ba-ray.' },
    { type: 'short', q: 'Từ 802 đến 1431 (mốc quy ước bỏ kinh đô Ăng-co) là bao nhiêu năm?', answer: '629', unit: 'năm', calc: '1431-802', explain: '1431 − 802 = 629.' }
  ]
});
})();
