/* LS&ĐL 6 – Lịch sử, Bài 18. Bước ngoặt lịch sử đầu thế kỉ X. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-6/ls-bai-18', {
  objectives: [
    'Trình bày được những nét chính về cuộc đấu tranh giành quyền tự chủ của họ Khúc, họ Dương.',
    'Mô tả được những nét chính về chiến thắng Bạch Đằng năm 938.',
    'Nêu được ý nghĩa lịch sử của chiến thắng Bạch Đằng.',
    'Đánh giá được công lao của Ngô Quyền.'
  ],
  intro: 'Trên sông Bạch Đằng, khi thuỷ triều rút, những hàng cọc gỗ nhọn nhô lên làm thuyền giặc vỡ tan. Trận đánh năm 938 đã chấm dứt hơn một nghìn năm Bắc thuộc, mở ra <b>thời kì độc lập</b> lâu dài.',
  steps: [
    { title: 'Họ Khúc dựng quyền tự chủ', html: `<ul><li>Năm <b>905</b>, nhân nhà Đường suy yếu, <b>Khúc Thừa Dụ</b> chiếm phủ thành Tống Bình, tự xưng Tiết độ sứ.</li><li>Khúc Hạo thực hiện cải cách: định lại thuế, giảm lao dịch, lập sổ hộ khẩu.</li></ul>` },
    { title: 'Dương Đình Nghệ', html: `<p>Năm <b>931</b>, Dương Đình Nghệ đánh bại quân Nam Hán, giữ vững quyền tự chủ. Năm 937, ông bị Kiều Công Tiễn giết; Tiễn cầu cứu Nam Hán.</p>` },
    { title: 'Chiến thắng Bạch Đằng 938', html: `<p>Ngô Quyền giết Kiều Công Tiễn, chuẩn bị đánh quân Nam Hán:</p>`,
      svg: S.flowchart({ title: 'Kế sách của Ngô Quyền', steps: [{ t: 'start', s: 'Cắm cọc lòng sông' }, { t: 'proc', s: 'Triều lên: nhử địch vào' }, { t: 'proc', s: 'Triều xuống: phản công' }, { t: 'end', s: 'Đại thắng 938' }] }), caption: 'Hoằng Tháo (con vua Nam Hán) tử trận.' },
    { title: 'Ý nghĩa', html: `<p>Trục thời gian:</p>`,
      svg: S.timeline({ title: 'Đầu thế kỉ X', items: [{ y: '905', s: 'Khúc Thừa Dụ' }, { y: '931', s: 'Dương Đình Nghệ' }, { y: '938', s: 'Bạch Đằng' }, { y: '939', s: 'Ngô Quyền xưng vương' }] }), caption: 'Năm 939 Ngô Quyền xưng vương, đóng đô ở Cổ Loa.' }
  ],
  summary: 'Năm 905, Khúc Thừa Dụ dựng quyền tự chủ; Khúc Hạo cải cách. Năm 931, Dương Đình Nghệ đánh bại Nam Hán. Năm 938, Ngô Quyền dùng kế cắm cọc trên sông Bạch Đằng, lợi dụng thuỷ triều, đánh tan quân Nam Hán. Chiến thắng chấm dứt hơn một nghìn năm Bắc thuộc, mở ra thời kì độc lập; năm 939 Ngô Quyền xưng vương, đóng đô ở Cổ Loa.',
  examples: [
    { title: 'Nghệ thuật quân sự', problem: 'Ngô Quyền lợi dụng yếu tố tự nhiên nào?', solution: 'Thuỷ triều lên xuống của sông Bạch Đằng.' },
    { title: 'Tính thời gian', problem: 'Từ năm 905 đến năm 938 là bao nhiêu năm?', solution: '33 năm.' },
    { title: 'Ý nghĩa', problem: 'Vì sao chiến thắng 938 là “bước ngoặt”?', solution: 'Chấm dứt thời Bắc thuộc, mở ra thời kì độc lập, tự chủ lâu dài.' }
  ],
  exercises: [
    { question: 'Sắp xếp: Dương Đình Nghệ đánh Nam Hán, Khúc Thừa Dụ tự chủ, chiến thắng Bạch Đằng.', hints: ['905.', '931, 938.'], solution: 'Khúc Thừa Dụ (905) → Dương Đình Nghệ (931) → Bạch Đằng (938).' },
    { question: 'Từ năm 931 đến năm 938 là bao nhiêu năm?', hints: ['938 − 931.', 'Số nhỏ hơn 10.'], solution: '7 năm.' },
    { question: 'Ai là chỉ huy quân Nam Hán tử trận ở Bạch Đằng?', hints: ['Con vua Nam Hán.', 'Hoằng …'], solution: 'Lưu Hoằng Tháo.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Năm 938, Ngô Quyền đánh tan quân Nam Hán trên sông Bạch Đằng.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Người dựng quyền tự chủ năm 905:', options: ['Khúc Thừa Dụ', 'Dương Đình Nghệ', 'Ngô Quyền', 'Khúc Hạo'], answer: 0, explain: 'Khúc Thừa Dụ.' },
    { type: 'short', q: 'Từ năm 905 đến năm 938 là bao nhiêu năm?', answer: '33', unit: 'năm', calc: '938-905', explain: '33.' },
    { type: 'mcq', q: 'Năm 939, Ngô Quyền đóng đô ở:', options: ['Cổ Loa', 'Hoa Lư', 'Thăng Long', 'Mê Linh'], answer: 0, explain: 'Cổ Loa.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Kiều Công Tiễn là người đánh bại quân Nam Hán năm 931.', answer: false, explain: 'Dương Đình Nghệ.' },
    { type: 'short', q: 'Từ năm 931 đến năm 938 là bao nhiêu năm?', answer: '7', unit: 'năm', calc: '938-931', explain: '7.' },
    { type: 'mcq', q: 'Ngô Quyền cắm cọc nhằm:', options: ['Lợi dụng thuỷ triều để phá thuyền giặc', 'Làm cầu qua sông', 'Đánh dấu ranh giới', 'Nuôi cá'], answer: 0, explain: 'Đúng.' },
    { type: 'mcq', q: 'Nhà cải cách thuế, lập sổ hộ khẩu:', options: ['Khúc Hạo', 'Ngô Quyền', 'Phùng Hưng', 'Lý Bí'], answer: 0, explain: 'Khúc Hạo.' }
  ]
});
})();
