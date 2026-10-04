/* Toán 6 – Chương IX. Luyện tập chung (sau Bài 41). Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
var chart = S.bar({ title: 'Số sách đọc được trong tháng của tổ 1 và tổ 2', cats: ['Tuần 1', 'Tuần 2', 'Tuần 3', 'Tuần 4'], series: [{ name: 'Tổ 1', values: [6, 9, 7, 10] }, { name: 'Tổ 2', values: [8, 5, 9, 8] }], yMax: 12, yStep: 2, yLabel: 'Số sách' });
THCS.registerLesson('toan-6/c9-ltc-1', {
  objectives: [
    'Củng cố thu thập dữ liệu, bảng thống kê, biểu đồ tranh, biểu đồ cột, biểu đồ cột kép.',
    'Chuyển đổi giữa bảng thống kê và biểu đồ.',
    'Đọc, phân tích và nhận xét số liệu trên biểu đồ.'
  ],
  intro: 'Luyện tập Bài 38 – Bài 41. Với mỗi biểu đồ, hãy tự đặt ba câu hỏi: lớn nhất? nhỏ nhất? tổng hoặc chênh lệch?',
  steps: [
    { title: 'Dữ liệu và thu thập', html: `<p>Số liệu / không phải số liệu; quan sát, phiếu hỏi, thí nghiệm, tra cứu; kiểm tra tính hợp lí.</p>` },
    { title: 'Bảng và biểu đồ tranh', html: `<p>Bảng thống kê gọn gàng; biểu đồ tranh cần chú thích giá trị mỗi biểu tượng.</p>`,
      svg: S.picto({ title: 'Số bạn đạt điểm 10 môn Toán', rows: [{ label: 'Tháng 9', n: 3 }, { label: 'Tháng 10', n: 4.5 }, { label: 'Tháng 11', n: 5 }], icon: '⭐', key: '= 2 bạn' }), caption: 'Mỗi ⭐ ứng với 2 bạn.' },
    { title: 'Biểu đồ cột và cột kép', html: `<p>Đọc chiều cao cột; với cột kép chú ý chú thích màu.</p>`, svg: chart, caption: 'Biểu đồ cột kép số sách đọc được của hai tổ.' },
    { title: 'Chọn biểu đồ phù hợp', html: `<ul><li>Một bộ dữ liệu, ít đối tượng, số liệu tròn: biểu đồ tranh hoặc cột.</li><li>So sánh hai bộ dữ liệu: biểu đồ cột kép.</li></ul>` }
  ],
  summary: 'Thu thập – sắp xếp – biểu diễn – đọc – nhận xét dữ liệu bằng bảng, biểu đồ tranh, biểu đồ cột, cột kép.',
  examples: [
    { title: 'Biểu đồ tranh', problem: 'Theo biểu đồ tranh ở bước 2, tháng 10 có bao nhiêu bạn đạt điểm 10?', solution: '4,5 · 2 = <b>9 bạn</b>.' },
    { title: 'Cột kép', problem: 'Theo biểu đồ ở bước 3, tổ nào đọc nhiều sách hơn trong cả tháng?', solution: 'Tổ 1: 6 + 9 + 7 + 10 = 32; Tổ 2: 8 + 5 + 9 + 8 = 30 ⇒ <b>Tổ 1</b> (hơn 2 quyển).' },
    { title: 'Tỉ lệ', problem: 'Tuần 4, số sách của tổ 1 chiếm bao nhiêu phần trăm tổng số sách hai tổ đọc tuần đó (làm tròn đến hàng đơn vị)?', solution: '{{10|18}} · 100% ≈ <b>56%</b>.' }
  ],
  exercises: [
    { question: 'Theo biểu đồ tranh ở bước 2, số bạn đạt điểm 10 tháng 11 tăng bao nhiêu so với tháng 9?', hints: ['Tháng 9: 3 · 2 = 6; tháng 11: 5 · 2 = 10.', 'Lấy hiệu.'], solution: '<b>4 bạn</b>.' },
    { question: 'Theo biểu đồ ở bước 3, tuần nào tổ 2 đọc nhiều hơn tổ 1?', hints: ['So sánh từng cặp cột.', 'Tuần 1: 8 &gt; 6; tuần 3: 9 &gt; 7.'], solution: '<b>Tuần 1 và tuần 3</b>.' },
    { question: 'Em sẽ dùng loại biểu đồ nào để so sánh chiều cao trung bình của nam và nữ lớp em qua 3 năm học? Vì sao?', hints: ['Có hai bộ dữ liệu (nam, nữ).', 'Mỗi năm là một đối tượng trên trục ngang.'], solution: '<b>Biểu đồ cột kép</b>, vì cần so sánh hai bộ dữ liệu theo từng năm.' }
  ],
  quiz: [
    { type: 'short', q: 'Theo biểu đồ tranh ở bước 2, tháng 9 có bao nhiêu bạn đạt điểm 10?', answer: '6', calc: '3*2', explain: '3 · 2 = 6.' },
    { type: 'short', q: 'Theo biểu đồ ở bước 3, tuần 2 tổ 1 đọc được bao nhiêu quyển sách?', answer: '9', explain: 'Cột xanh tuần 2 cao 9.' },
    { type: 'short', q: 'Theo biểu đồ ở bước 3, tổng số sách tổ 2 đọc trong tháng là bao nhiêu?', answer: '30', calc: '8+5+9+8', explain: '8 + 5 + 9 + 8 = 30.' },
    { type: 'mcq', q: 'Theo biểu đồ ở bước 3, tuần nào hai tổ đọc tổng cộng nhiều sách nhất?', options: ['Tuần 1', 'Tuần 2', 'Tuần 3', 'Tuần 4'], answer: 3, explain: 'Tuần 4: 10 + 8 = 18 (tuần 1: 14; tuần 2: 14; tuần 3: 16).' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: “Màu sắc yêu thích” là dữ liệu số liệu.', answer: false, explain: 'Không phải số.' },
    { type: 'mcq', q: 'Để so sánh số giờ tự học của An và Bình trong 7 ngày, nên dùng:', options: ['Biểu đồ tranh', 'Biểu đồ cột kép', 'Bảng có một dòng', 'Không cần biểu đồ'], answer: 1, explain: 'Hai bộ dữ liệu theo từng ngày.' },
    { type: 'short', q: 'Theo biểu đồ tranh ở bước 2, tổng số lượt bạn đạt điểm 10 trong ba tháng là bao nhiêu?', answer: '25', calc: '(3+4.5+5)*2', explain: '(3 + 4,5 + 5) · 2 = 25.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Theo biểu đồ ở bước 3, tổ 1 đọc nhiều sách nhất vào tuần 4.', answer: true, explain: 'Tuần 4 tổ 1 đọc 10 quyển.' }
  ]
});
})();
