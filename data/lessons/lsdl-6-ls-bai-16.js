/* LS&ĐL 6 – Lịch sử, Bài 16. Các cuộc khởi nghĩa tiêu biểu giành độc lập trước thế kỉ X. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-6/ls-bai-16', {
  objectives: [
    'Lập được biểu đồ, sơ đồ về diễn biến chính, nguyên nhân, kết quả và ý nghĩa của các cuộc khởi nghĩa tiêu biểu thời Bắc thuộc.',
    'Nêu được kết quả và ý nghĩa của các cuộc khởi nghĩa.',
    'Giới thiệu được những nét chính về các anh hùng dân tộc.',
    'Biết ơn những người có công với đất nước.'
  ],
  intro: 'Nhiều con phố ở Việt Nam mang tên Hai Bà Trưng, Bà Triệu, Lý Nam Đế, Mai Hắc Đế, Phùng Hưng. Họ là ai, và vì sao nhân dân muốn ghi nhớ mãi?',
  steps: [
    { title: 'Nguyên nhân chung', html: `<p>Chính sách cai trị tàn bạo, bóc lột nặng nề của phong kiến phương Bắc; tinh thần yêu nước, ý chí độc lập của nhân dân ta.</p>` },
    { title: 'Các cuộc khởi nghĩa tiêu biểu', html: `<p>Trục thời gian:</p>`,
      svg: S.timeline({ title: 'Khởi nghĩa tiêu biểu thời Bắc thuộc', items: [{ y: '40', s: 'Hai Bà Trưng' }, { y: '248', s: 'Bà Triệu' }, { y: '542', s: 'Lý Bí' }, { y: '713', s: 'Mai Thúc Loan' }, { y: '776', s: 'Phùng Hưng' }] }), caption: 'Năm 713 theo nhiều tài liệu phổ biến.' },
    { title: 'Tóm tắt', html: `<p>Bảng hệ thống:</p>`,
      svg: S.table({ title: 'Kết quả các cuộc khởi nghĩa', head: ['Khởi nghĩa', 'Kết quả nổi bật'], rows: [['Hai Bà Trưng (40)', 'Trưng Trắc làm vua, đóng đô Mê Linh'], ['Bà Triệu (248)', 'Làm quân Ngô khiếp sợ'], ['Lý Bí (542)', 'Lập nước Vạn Xuân (544)'], ['Mai Thúc Loan (713)', 'Xưng đế (Mai Hắc Đế), thành Vạn An'], ['Phùng Hưng (776)', 'Chiếm phủ thành Tống Bình']], colW: 250 }), caption: 'Các cuộc khởi nghĩa cuối cùng đều bị đàn áp nhưng để lại ý nghĩa to lớn.' },
    { title: 'Ý nghĩa', html: `<ul><li>Thể hiện tinh thần yêu nước, ý chí quật cường.</li><li>Khẳng định nhân dân ta không chịu khuất phục; tạo tiền đề cho thắng lợi năm 938.</li></ul>
      <div class="box key">Phụ nữ Việt Nam (Hai Bà Trưng, Bà Triệu) giữ vai trò nổi bật trong đấu tranh giữ nước.</div>` }
  ],
  summary: 'Do chính sách đô hộ tàn bạo, nhân dân ta liên tục khởi nghĩa: Hai Bà Trưng (40), Bà Triệu (248), Lý Bí (542, lập nước Vạn Xuân năm 544), Mai Thúc Loan (713), Phùng Hưng (776). Các cuộc khởi nghĩa thể hiện ý chí độc lập, tinh thần yêu nước và tạo tiền đề cho thắng lợi năm 938.',
  examples: [
    { title: 'Nguyên nhân', problem: 'Vì sao Hai Bà Trưng khởi nghĩa?', solution: 'Căm thù chính quyền đô hộ nhà Hán (Thái thú Tô Định) tàn bạo; trả nợ nước, thù nhà.' },
    { title: 'Tính thời gian', problem: 'Lý Bí khởi nghĩa năm 542, lập nước Vạn Xuân năm 544. Sau bao nhiêu năm?', solution: '2 năm.' },
    { title: 'Thế kỉ', problem: 'Khởi nghĩa Phùng Hưng năm 776 thuộc thế kỉ nào?', solution: 'Thế kỉ VIII.' }
  ],
  exercises: [
    { question: 'Sắp xếp theo thời gian: Lý Bí, Hai Bà Trưng, Phùng Hưng, Bà Triệu.', hints: ['Năm 40 sớm nhất.', 'Năm 776 muộn nhất.'], solution: 'Hai Bà Trưng → Bà Triệu → Lý Bí → Phùng Hưng.' },
    { question: 'Từ khởi nghĩa Hai Bà Trưng (40) đến khởi nghĩa Bà Triệu (248) là bao nhiêu năm?', hints: ['Cùng Công nguyên.', '248 − 40.'], solution: '208 năm.' },
    { question: 'Nêu ý nghĩa chung của các cuộc khởi nghĩa.', hints: ['Tinh thần.', 'Chuẩn bị cho tương lai.'], solution: 'Thể hiện ý chí độc lập; tạo tiền đề cho thắng lợi năm 938.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khởi nghĩa Hai Bà Trưng nổ ra năm 40.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Lý Bí lập nước:', options: ['Vạn Xuân', 'Văn Lang', 'Âu Lạc', 'Đại Việt'], answer: 0, explain: 'Vạn Xuân.' },
    { type: 'short', q: 'Từ năm 40 đến năm 248 là bao nhiêu năm?', answer: '208', unit: 'năm', calc: '248-40', explain: '208.' },
    { type: 'mcq', q: 'Người được tôn là Mai Hắc Đế:', options: ['Mai Thúc Loan', 'Phùng Hưng', 'Lý Bí', 'Triệu Quang Phục'], answer: 0, explain: 'Mai Thúc Loan.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Bà Triệu khởi nghĩa chống quân Đường.', answer: false, explain: 'Chống quân Ngô.' },
    { type: 'short', q: 'Năm 776 thuộc thế kỉ thứ mấy? (ghi số)', answer: '8', calc: 'Math.floor((776-1)/100)+1', explain: 'VIII.' },
    { type: 'mcq', q: 'Hai Bà Trưng đóng đô ở:', options: ['Mê Linh', 'Cổ Loa', 'Phong Châu', 'Vạn An'], answer: 0, explain: 'Mê Linh.' },
    { type: 'mcq', q: 'Cuộc khởi nghĩa diễn ra sớm nhất:', options: ['Hai Bà Trưng', 'Bà Triệu', 'Lý Bí', 'Phùng Hưng'], answer: 0, explain: 'Năm 40.' }
  ]
});
})();
