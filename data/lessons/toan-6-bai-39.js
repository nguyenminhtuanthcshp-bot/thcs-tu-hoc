/* Toán 6 – Bài 39. Bảng thống kê và biểu đồ tranh. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('toan-6/bai-39', {
  objectives: [
    'Đọc và lập được bảng thống kê từ dữ liệu thu thập được.',
    'Đọc và mô tả dữ liệu trên biểu đồ tranh.',
    'Vẽ được biểu đồ tranh đơn giản và rút ra nhận xét.'
  ],
  intro: 'Thay vì liệt kê dài dòng từng câu trả lời, ta có thể sắp xếp dữ liệu vào bảng hoặc vẽ bằng hình ảnh sinh động. Đó là bảng thống kê và biểu đồ tranh.',
  steps: [
    { title: 'Bảng thống kê', html: `<p>Bảng thống kê trình bày dữ liệu gọn gàng theo hàng và cột: một dòng (cột) ghi đối tượng, dòng (cột) kia ghi số lượng tương ứng.</p>
      <table class="tbl"><tr><th>Lớp</th><th>6A</th><th>6B</th><th>6C</th><th>6D</th></tr><tr><td>Số cây trồng được</td><td>40</td><td>25</td><td>30</td><td>45</td></tr></table>` },
    { title: 'Biểu đồ tranh', html: `<p>Biểu đồ tranh dùng biểu tượng (hình ảnh) để biểu diễn dữ liệu. Mỗi biểu tượng ứng với một số lượng nhất định (ghi ở chú thích); nửa biểu tượng ứng với một nửa số lượng đó.</p>`,
      svg: S.picto({ title: 'Số cây trồng được của khối 6', rows: [{ label: 'Lớp 6A', n: 4 }, { label: 'Lớp 6B', n: 2.5 }, { label: 'Lớp 6C', n: 3 }, { label: 'Lớp 6D', n: 4.5 }], icon: '🌳', key: '= 10 cây' }),
      caption: 'Mỗi 🌳 ứng với 10 cây; nửa biểu tượng ứng với 5 cây.' },
    { title: 'Đọc biểu đồ tranh', html: `<ol><li>Đọc tiêu đề và chú thích (mỗi biểu tượng ứng với bao nhiêu).</li><li>Đếm số biểu tượng trên từng dòng.</li><li>Nhân với giá trị của một biểu tượng.</li></ol><p>Ví dụ ở biểu đồ trên: lớp 6B có 2,5 biểu tượng ⇒ 25 cây; lớp 6D trồng nhiều nhất (45 cây).</p>` },
    { title: 'Vẽ biểu đồ tranh', html: `<ol><li>Chọn biểu tượng và giá trị cho mỗi biểu tượng sao cho dễ vẽ (thường là ước chung của các số liệu).</li><li>Vẽ số biểu tượng tương ứng trên mỗi dòng.</li><li>Ghi tiêu đề, tên các đối tượng và chú thích.</li></ol>` }
  ],
  summary: 'Bảng thống kê sắp xếp dữ liệu theo hàng, cột. Biểu đồ tranh dùng biểu tượng, mỗi biểu tượng ứng với một số lượng ghi ở chú thích. Đọc: đếm biểu tượng rồi nhân với giá trị mỗi biểu tượng.',
  examples: [
    { title: 'Đọc biểu đồ', problem: 'Theo biểu đồ tranh ở bước 2, cả khối 6 trồng được bao nhiêu cây?', solution: '40 + 25 + 30 + 45 = <b>140 cây</b>.' },
    { title: 'So sánh', problem: 'Lớp 6D trồng nhiều hơn lớp 6B bao nhiêu cây?', solution: '45 − 25 = <b>20 cây</b> (tương ứng 2 biểu tượng).' },
    { title: 'Chọn giá trị biểu tượng', problem: 'Số sách quyên góp của bốn tổ: 30; 45; 60; 15 quyển. Nên chọn mỗi biểu tượng 📘 ứng với bao nhiêu quyển?', solution: 'ƯCLN(30, 45, 60, 15) = 15 ⇒ mỗi 📘 ứng với <b>15 quyển</b>; số biểu tượng lần lượt 2; 3; 4; 1.' }
  ],
  exercises: [
    { question: 'Trong một biểu đồ tranh, mỗi ⭐ ứng với 4 bạn. Dòng “Thích Toán” có 5 ⭐ và nửa ⭐. Có bao nhiêu bạn thích Toán?', hints: ['Nửa ⭐ ứng với 2 bạn.', '5 · 4 + 2.'], solution: '<b>22 bạn</b>.' },
    { question: 'Lập bảng thống kê từ dữ liệu điểm số của 10 bạn: 8; 9; 7; 8; 10; 9; 8; 7; 8; 9.', hints: ['Liệt kê các điểm khác nhau: 7; 8; 9; 10.', 'Đếm số lần xuất hiện của mỗi điểm.'], solution: 'Điểm 7: <b>2</b>; điểm 8: <b>4</b>; điểm 9: <b>3</b>; điểm 10: <b>1</b>.' },
    { question: 'Nếu mỗi 🍎 ứng với 6 quả và một cửa hàng bán được 27 quả táo, em sẽ vẽ bao nhiêu biểu tượng?', hints: ['27 : 6 = 4,5.', 'Dùng nửa biểu tượng.'], solution: '<b>4 biểu tượng rưỡi</b> (4 🍎 và nửa 🍎).' }
  ],
  quiz: [
    { type: 'short', q: 'Mỗi 🌳 ứng với 10 cây. Dòng có 3 🌳 và nửa 🌳 ứng với bao nhiêu cây?', answer: '35', calc: '3.5*10', explain: '3,5 · 10 = 35.' },
    { type: 'mcq', q: 'Trong biểu đồ tranh ở bước 2, lớp nào trồng ít cây nhất?', options: ['6A', '6B', '6C', '6D'], answer: 1, explain: '6B có 2,5 biểu tượng (25 cây).' },
    { type: 'short', q: 'Theo biểu đồ ở bước 2, lớp 6A trồng được bao nhiêu cây?', answer: '40', calc: '4*10', explain: '4 biểu tượng · 10 = 40.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Biểu đồ tranh bắt buộc phải có chú thích giá trị của mỗi biểu tượng.', answer: true, explain: 'Không có chú thích thì không đọc được số liệu.' },
    { type: 'short', q: 'Mỗi 📘 ứng với 5 quyển sách. Tổ 1 góp 35 quyển thì cần vẽ bao nhiêu 📘?', answer: '7', calc: '35/5', explain: '35 : 5 = 7.' },
    { type: 'mcq', q: 'Số liệu 12; 18; 24; 30. Giá trị mỗi biểu tượng hợp lí nhất là:', options: ['5', '6', '7', '10'], answer: 1, calc: 'gcd(gcd(12,18),gcd(24,30))', explain: 'ƯCLN = 6, mỗi dòng được số nguyên biểu tượng.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nửa biểu tượng ứng với một nửa giá trị của một biểu tượng.', answer: true, explain: 'Đúng quy ước.' },
    { type: 'short', q: 'Theo biểu đồ ở bước 2, lớp 6D trồng nhiều hơn lớp 6C bao nhiêu cây?', answer: '15', calc: '45-30', explain: '45 − 30 = 15.' }
  ]
});
})();
