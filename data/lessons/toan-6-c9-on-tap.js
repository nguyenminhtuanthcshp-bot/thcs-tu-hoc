/* Toán 6 – Chương IX. Bài tập cuối chương. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
var trans = S.bar({ title: 'Phương tiện đến trường của lớp 6A', cats: ['Đi bộ', 'Xe đạp', 'Xe buýt', 'Bố mẹ đưa'], series: [{ name: 'Số bạn', values: [8, 14, 6, 12] }], yMax: 16, yStep: 2, yLabel: 'Số bạn' });
THCS.registerLesson('toan-6/c9-on-tap', {
  objectives: [
    'Hệ thống hóa kiến thức chương IX: dữ liệu, bảng thống kê, các loại biểu đồ.',
    'Ôn tập kết quả có thể, sự kiện và xác suất thực nghiệm.',
    'Giải bài tập tổng hợp đọc biểu đồ và tính xác suất thực nghiệm.'
  ],
  intro: 'Ôn tập toàn bộ chương “Dữ liệu và xác suất thực nghiệm”.',
  steps: [
    { title: 'Dữ liệu và bảng', html: `<p>Phân loại dữ liệu; thu thập bằng quan sát, phiếu hỏi, thí nghiệm; kiểm tra tính hợp lí; lập bảng thống kê.</p>` },
    { title: 'Biểu đồ', html: `<p>Biểu đồ tranh (có chú thích biểu tượng), biểu đồ cột (một bộ dữ liệu), cột kép (hai bộ dữ liệu).</p>`, svg: trans, caption: 'Kết quả khảo sát 40 bạn lớp 6A.' },
    { title: 'Kết quả và sự kiện', html: `<p>Kết quả có thể; sự kiện chắc chắn, không thể, có thể xảy ra.</p>` },
    { title: 'Xác suất thực nghiệm', html: `<p>= số lần sự kiện xảy ra : tổng số lần thực hiện. Dùng để ước lượng.</p>` }
  ],
  summary: 'Dữ liệu → bảng/biểu đồ → đọc, nhận xét; trò chơi, thí nghiệm → kết quả, sự kiện → xác suất thực nghiệm.',
  examples: [
    { title: 'Đọc biểu đồ', problem: 'Theo biểu đồ ở bước 2, phương tiện nào được nhiều bạn chọn nhất? Chiếm bao nhiêu phần trăm cả lớp?', solution: '<b>Xe đạp</b>: {{14|40}} = <b>35%</b>.' },
    { title: 'Chọn ngẫu nhiên', problem: 'Chọn ngẫu nhiên một bạn trong lớp 6A (dữ liệu ở bước 2), lặp lại có hoàn lại 50 lần thì có 15 lần gặp bạn đi xe buýt. Tính xác suất thực nghiệm.', solution: '{{15|50}} = <b>0,3</b>.' },
    { title: 'Kiểm tra hợp lí', problem: 'Một bảng ghi “số bạn đi bộ: −3”. Dữ liệu này có hợp lí không?', solution: '<b>Không</b>: số bạn không thể âm.' }
  ],
  exercises: [
    { question: 'Theo biểu đồ ở bước 2, số bạn được bố mẹ đưa đón gấp mấy lần số bạn đi xe buýt?', hints: ['Đọc hai cột: 12 và 6.', 'Lấy 12 : 6.'], solution: '<b>2 lần</b>.' },
    { question: 'Tung đồng xu 50 lần, sấp nhiều hơn ngửa 6 lần. Tính xác suất thực nghiệm xuất hiện mặt sấp.', hints: ['Sấp + ngửa = 50; sấp − ngửa = 6.', 'Sấp = (50 + 6) : 2.'], solution: 'Sấp = 28 ⇒ {{28|50}} = <b>0,56</b>.' },
    { question: 'Hộp có 1 bi đỏ, 1 bi xanh. Lấy lần lượt 2 viên (không hoàn lại). Liệt kê các kết quả có thể.', hints: ['Viên đầu có 2 khả năng.', 'Viên sau là viên còn lại.'], solution: '<b>(đỏ, xanh), (xanh, đỏ)</b>.' }
  ],
  quiz: [
    { type: 'short', q: 'Theo biểu đồ ở bước 2, lớp 6A có bao nhiêu bạn?', answer: '40', calc: '8+14+6+12', explain: '8 + 14 + 6 + 12 = 40.' },
    { type: 'short', q: 'Theo biểu đồ ở bước 2, số bạn đi xe đạp nhiều hơn số bạn đi bộ bao nhiêu bạn?', answer: '6', calc: '14-8', explain: '14 − 8 = 6.' },
    { type: 'short', q: 'Theo biểu đồ ở bước 2, số bạn đi bộ chiếm bao nhiêu phần trăm cả lớp?', answer: '20', unit: '%', calc: '8/40*100', explain: '{{8|40}} = 20%.' },
    { type: 'mcq', q: 'Để so sánh điểm Toán và điểm Văn của 5 bạn, nên dùng:', options: ['Biểu đồ tranh', 'Biểu đồ cột', 'Biểu đồ cột kép', 'Bảng một cột'], answer: 2, explain: 'Hai bộ dữ liệu.' },
    { type: 'mcq', q: 'Gieo xúc xắc, sự kiện “số chấm là số nguyên tố” là:', options: ['Chắc chắn', 'Không thể', 'Có thể xảy ra', 'Không xác định'], answer: 2, explain: 'Xảy ra với 2, 3, 5.' },
    { type: 'short', q: 'Gieo xúc xắc 40 lần, được 14 lần mặt chẵn. Xác suất thực nghiệm mặt lẻ là (số thập phân)?', answer: '0,65', calc: '(40-14)/40', explain: '26 : 40 = 0,65.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Biểu đồ tranh cần có chú thích mỗi biểu tượng ứng với bao nhiêu đối tượng.', answer: true, explain: 'Thiếu chú thích thì không đọc được.' },
    { type: 'short', q: 'Kiểm tra 250 bóng đèn thấy 5 bóng hỏng. Ước lượng số bóng hỏng trong 2 000 bóng.', answer: '40', calc: '2000*5/250', explain: '2 000 · {{5|250}} = 40.' }
  ]
});
})();
