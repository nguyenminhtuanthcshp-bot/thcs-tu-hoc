/* Toán 7 – Chương V. Luyện tập chung (sau Bài 19). Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, C = S.C;
THCS.registerLesson('toan-7/c5-ltc-1', {
  objectives: [
    'Phân loại dữ liệu và đánh giá tính đại diện, tính hợp lí của dữ liệu.',
    'Đọc, tính toán từ biểu đồ hình quạt tròn và biểu đồ đoạn thẳng.',
    'Chọn loại biểu đồ phù hợp với mục đích biểu diễn.'
  ],
  intro: 'Luyện tập chương V: từ một bộ dữ liệu, em sẽ phân loại, chọn biểu đồ, đọc số liệu và rút ra nhận xét – đúng quy trình của một “nhà thống kê nhí”.',
  steps: [
    { title: 'Chọn biểu đồ phù hợp', html: `<table class="tbl"><tr><th>Mục đích</th><th>Biểu đồ</th></tr><tr><td>So sánh số lượng các nhóm</td><td>Biểu đồ cột, biểu đồ tranh</td></tr><tr><td>So sánh các phần với tổng thể</td><td>Biểu đồ hình quạt tròn</td></tr><tr><td>Theo dõi thay đổi theo thời gian</td><td>Biểu đồ đoạn thẳng</td></tr></table>` },
    { title: 'Đọc biểu đồ hình quạt', html: `<p>Kết quả xếp loại học tập của 120 học sinh khối 7:</p>`,
      svg: S.sectorChart({ title: 'Xếp loại học tập khối 7 (120 học sinh)', parts: [{ label: 'Tốt', value: 30 }, { label: 'Khá', value: 45 }, { label: 'Đạt', value: 20 }, { label: 'Chưa đạt', value: 5 }], unit: '%' }),
      caption: 'Số học sinh xếp loại Khá: 120 · 45% = 54.' },
    { title: 'Đọc biểu đồ đoạn thẳng', html: `<p>Số lượt khách đến thư viện trường trong 6 tháng:</p>`,
      svg: S.lineChart({ title: 'Lượt khách đến thư viện', cats: ['Th9', 'Th10', 'Th11', 'Th12', 'Th1', 'Th2'], values: [120, 150, 180, 140, 160, 200], yMin: 0, yMax: 220, yStep: 40, yLabel: 'lượt' }),
      caption: 'Tháng 12 giảm (ôn thi), tháng 2 tăng mạnh nhất.' },
    { title: 'Nhận xét từ dữ liệu', html: `<ul><li>Tìm giá trị lớn nhất, nhỏ nhất.</li><li>Tính mức tăng/giảm giữa hai thời điểm, tỉ lệ phần trăm.</li><li>Giải thích hợp lí (không “bịa” thông tin không có trong dữ liệu).</li></ul>` }
  ],
  summary: 'Cột/tranh: so sánh nhóm; hình quạt: phần – tổng thể; đoạn thẳng: thay đổi theo thời gian. Số lượng = tổng × %; nhận xét dựa trên số liệu.',
  examples: [
    { title: 'Từ hình quạt', problem: 'Theo biểu đồ bước 2, số học sinh xếp loại Tốt và Khá là bao nhiêu?', solution: '75% của 120 = 90 (học sinh).' },
    { title: 'Từ đoạn thẳng', problem: 'Theo biểu đồ bước 3, lượt khách tháng 2 tăng bao nhiêu phần trăm so với tháng 9?', solution: '(200 − 120) : 120 · 100% ≈ 66,7%.' },
    { title: 'Kiểm tra hợp lí', problem: 'Một bạn nói: “Lượt khách tháng 12 là 140, bằng 70% tháng 2.” Đúng không?', solution: '140 : 200 = 0,7 = 70%. Đúng.' }
  ],
  exercises: [
    { question: 'Biểu đồ bước 2: có bao nhiêu học sinh Chưa đạt?', hints: ['5% của 120.', '120 · 0,05.'], solution: '6 học sinh.' },
    { question: 'Biểu đồ bước 3: tính tổng lượt khách 6 tháng và trung bình mỗi tháng.', hints: ['Cộng 6 giá trị.', 'Chia 6.'], solution: 'Tổng 950; trung bình ≈ 158,3 lượt.' },
    { question: 'Để biểu diễn tỉ lệ các loại cây trong vườn trường, em chọn biểu đồ nào? Vì sao?', hints: ['Các loại cây tạo thành toàn bộ vườn.', 'So sánh phần với tổng.'], solution: 'Biểu đồ hình quạt tròn, vì cần so sánh từng phần với tổng thể.' }
  ],
  quiz: [
    { type: 'short', calc: '120 * 45 / 100', q: 'Biểu đồ bước 2: số học sinh xếp loại Khá?', answer: '54', explain: '120 · 45% = 54.' },
    { type: 'short', calc: '120 * 5 / 100', q: 'Biểu đồ bước 2: số học sinh Chưa đạt?', answer: '6', explain: '120 · 5% = 6.' },
    { type: 'short', calc: '200 - 120', q: 'Biểu đồ bước 3: lượt khách tháng 2 nhiều hơn tháng 9 bao nhiêu lượt?', answer: '80', explain: '200 − 120 = 80.' },
    { type: 'short', calc: 'sum([120, 150, 180, 140, 160, 200])', q: 'Biểu đồ bước 3: tổng lượt khách trong 6 tháng?', answer: '950', explain: 'Cộng 6 giá trị.' },
    { type: 'mcq', q: 'Theo dõi chiều cao của em qua các năm nên dùng:', options: ['biểu đồ hình quạt', 'biểu đồ đoạn thẳng', 'biểu đồ tranh', 'bảng chữ cái'], answer: 1, explain: 'Thay đổi theo thời gian.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: “Màu mắt” là dữ liệu định lượng.', answer: false, explain: 'Là dữ liệu định tính.' },
    { type: 'short', calc: '140 / 200 * 100', q: 'Lượt khách tháng 12 (140) bằng bao nhiêu phần trăm tháng 2 (200)?', unit: '%', answer: '70', explain: '140 : 200 = 70%.' },
    { type: 'mcq', q: 'Biểu đồ bước 3: tháng nào lượt khách giảm so với tháng trước?', options: ['Th10', 'Th11', 'Th12', 'Th2'], answer: 2, explain: 'Th11: 180 → Th12: 140.' }
  ]
});
})();
