/* Toán 6 – Bài 41. Biểu đồ cột kép. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
var chart = S.bar({ title: 'Số học sinh giỏi của hai lớp qua các năm', cats: ['2022', '2023', '2024', '2025'], series: [{ name: 'Lớp 6A', values: [8, 10, 12, 15] }, { name: 'Lớp 6B', values: [10, 9, 14, 13] }], yMax: 16, yStep: 2, yLabel: 'Số học sinh' });
var gender = S.bar({ title: 'Môn học yêu thích theo giới tính', cats: ['Toán', 'Văn', 'Anh', 'KHTN'], series: [{ name: 'Nam', values: [10, 4, 6, 8] }, { name: 'Nữ', values: [7, 9, 8, 5] }], yMax: 10, yStep: 2, yLabel: 'Số bạn' });
THCS.registerLesson('toan-6/bai-41', {
  objectives: [
    'Đọc và mô tả dữ liệu trên biểu đồ cột kép.',
    'Vẽ được biểu đồ cột kép từ bảng thống kê hai loại số liệu.',
    'So sánh hai bộ dữ liệu và rút ra nhận xét.'
  ],
  intro: 'Muốn so sánh kết quả học tập của hai lớp qua nhiều năm, ta đặt hai cột cạnh nhau cho mỗi năm. Đó là biểu đồ cột kép.',
  steps: [
    { title: 'Biểu đồ cột kép là gì?', html: `<p>Biểu đồ cột kép gồm các cặp cột đặt cạnh nhau, mỗi cặp ứng với một đối tượng trên trục ngang. Hai cột trong cặp có <b>hai màu khác nhau</b> biểu diễn hai bộ dữ liệu; phần <b>chú thích</b> cho biết màu nào ứng với bộ dữ liệu nào.</p>`,
      svg: chart, caption: 'Cột xanh: lớp 6A; cột cam: lớp 6B.' },
    { title: 'Đọc biểu đồ cột kép', html: `<ol><li>Đọc tiêu đề, chú thích màu.</li><li>Với mỗi đối tượng trên trục ngang, đọc chiều cao hai cột.</li><li>So sánh trong từng cặp và theo từng màu.</li></ol><p>Ví dụ: năm 2024, lớp 6A có 12 học sinh giỏi, lớp 6B có 14. Số học sinh giỏi của lớp 6A tăng đều qua các năm.</p>` },
    { title: 'Vẽ biểu đồ cột kép', html: `<ol><li>Vẽ trục ngang (đối tượng) và trục đứng (số liệu, chia đều từ 0).</li><li>Với mỗi đối tượng, vẽ hai cột sát nhau, hai màu khác nhau.</li><li>Ghi chú thích màu, tên biểu đồ, tên trục.</li></ol>` },
    { title: 'So sánh hai nhóm', html: `<p>Biểu đồ cột kép rất thuận tiện để so sánh hai nhóm, ví dụ nam và nữ:</p>`,
      svg: gender, caption: 'Nam thích Toán nhiều nhất; nữ thích Văn nhiều nhất.' }
  ],
  summary: 'Biểu đồ cột kép đặt hai cột (hai màu) cạnh nhau cho mỗi đối tượng để so sánh hai bộ dữ liệu; luôn đọc chú thích màu trước.',
  examples: [
    { title: 'Tổng hợp', problem: 'Theo biểu đồ ở bước 1, tổng số học sinh giỏi của lớp 6A trong 4 năm là bao nhiêu?', solution: '8 + 10 + 12 + 15 = <b>45</b>.' },
    { title: 'So sánh', problem: 'Năm nào lớp 6A có nhiều học sinh giỏi hơn lớp 6B?', solution: '2023 (10 &gt; 9) và 2025 (15 &gt; 13).' },
    { title: 'Nhận xét', problem: 'Theo biểu đồ ở bước 4, môn nào có số bạn nữ thích nhiều hơn nam?', solution: '<b>Văn</b> (9 &gt; 4) và <b>Anh</b> (8 &gt; 6).' }
  ],
  exercises: [
    { question: 'Theo biểu đồ ở bước 1, năm 2025 cả hai lớp có bao nhiêu học sinh giỏi?', hints: ['Đọc hai cột của năm 2025.', '15 + 13.'], solution: '<b>28</b> học sinh giỏi.' },
    { question: 'Theo biểu đồ ở bước 4, có tất cả bao nhiêu bạn nam được khảo sát?', hints: ['Cộng các cột màu xanh.', '10 + 4 + 6 + 8.'], solution: '<b>28 bạn nam</b>.' },
    { question: 'Theo biểu đồ ở bước 1, số học sinh giỏi của lớp 6B năm nào giảm so với năm trước?', hints: ['Xét các cột cam theo thứ tự thời gian: 10; 9; 14; 13.', 'Tìm chỗ số sau nhỏ hơn số trước.'], solution: '<b>2023</b> (giảm từ 10 xuống 9) và <b>2025</b> (giảm từ 14 xuống 13).' }
  ],
  quiz: [
    { type: 'short', q: 'Theo biểu đồ ở bước 1, năm 2022 lớp 6B có bao nhiêu học sinh giỏi?', answer: '10', explain: 'Cột cam năm 2022 cao 10.' },
    { type: 'short', q: 'Theo biểu đồ ở bước 1, năm 2024 lớp 6B hơn lớp 6A bao nhiêu học sinh giỏi?', answer: '2', calc: '14-12', explain: '14 − 12 = 2.' },
    { type: 'mcq', q: 'Trong biểu đồ cột kép, phần giúp phân biệt hai bộ dữ liệu là:', options: ['Tiêu đề', 'Chú thích màu', 'Trục ngang', 'Số trên đỉnh cột'], answer: 1, explain: 'Chú thích cho biết màu ứng với bộ dữ liệu nào.' },
    { type: 'short', q: 'Theo biểu đồ ở bước 4, có bao nhiêu bạn nữ được khảo sát?', answer: '29', calc: '7+9+8+5', explain: '7 + 9 + 8 + 5 = 29.' },
    { type: 'mcq', q: 'Theo biểu đồ ở bước 4, môn có chênh lệch nam – nữ lớn nhất là:', options: ['Toán', 'Văn', 'Anh', 'KHTN'], answer: 1, explain: 'Văn: 9 − 4 = 5 (Toán 3, Anh 2, KHTN 3).' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Theo biểu đồ ở bước 1, số học sinh giỏi của lớp 6A tăng liên tục qua các năm.', answer: true, explain: '8 → 10 → 12 → 15.' },
    { type: 'short', q: 'Theo biểu đồ ở bước 1, tổng số học sinh giỏi của lớp 6B trong 4 năm là bao nhiêu?', answer: '46', calc: '10+9+14+13', explain: '10 + 9 + 14 + 13 = 46.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hai cột trong một cặp của biểu đồ cột kép phải cùng màu.', answer: false, explain: 'Hai màu khác nhau để phân biệt hai bộ dữ liệu.' }
  ]
});
})();
