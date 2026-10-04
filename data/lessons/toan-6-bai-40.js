/* Toán 6 – Bài 40. Biểu đồ cột. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
var chart = S.bar({ title: 'Môn thể thao yêu thích của lớp 6A', cats: ['Bóng đá', 'Cầu lông', 'Bơi', 'Bóng rổ', 'Cờ vua'], series: [{ name: 'Số bạn', values: [12, 8, 5, 7, 4] }], yMax: 14, yStep: 2, yLabel: 'Số bạn', xLabel: 'Môn thể thao' });
var temp = S.bar({ title: 'Nhiệt độ trung bình (°C) một số tháng', cats: ['Th1', 'Th3', 'Th5', 'Th7', 'Th9', 'Th11'], series: [{ name: 'Nhiệt độ', values: [17, 20, 28, 29, 27, 21], color: S.C.orange }], yMax: 30, yStep: 5, yLabel: '°C' });
THCS.registerLesson('toan-6/bai-40', {
  objectives: [
    'Đọc và mô tả dữ liệu trên biểu đồ cột.',
    'Vẽ được biểu đồ cột từ bảng thống kê.',
    'Rút ra nhận xét đơn giản (lớn nhất, nhỏ nhất, chênh lệch, tổng) từ biểu đồ cột.'
  ],
  intro: 'Biểu đồ tranh sinh động nhưng khó vẽ khi số liệu lớn. Biểu đồ cột giúp so sánh số liệu nhanh chóng chỉ bằng chiều cao của các cột.',
  steps: [
    { title: 'Các thành phần của biểu đồ cột', html: `<ul><li><b>Trục ngang</b>: ghi tên các đối tượng.</li><li><b>Trục đứng</b>: ghi số liệu, chia đều từ 0.</li><li>Mỗi cột có chiều rộng bằng nhau, chiều cao ứng với số liệu.</li><li><b>Tên biểu đồ</b>, tên các trục.</li></ul>`,
      svg: chart, caption: 'Biểu đồ cột về môn thể thao yêu thích của lớp 6A.' },
    { title: 'Đọc biểu đồ cột', html: `<p>Nhìn đỉnh cột, dóng sang trục đứng để đọc số liệu. Ở biểu đồ trên: bóng đá 12 bạn (nhiều nhất), cờ vua 4 bạn (ít nhất). Tổng số bạn tham gia khảo sát: 12 + 8 + 5 + 7 + 4 = 36.</p>` },
    { title: 'Vẽ biểu đồ cột', html: `<ol><li>Vẽ hai trục vuông góc: trục ngang ghi đối tượng, trục đứng ghi số liệu.</li><li>Chọn khoảng chia phù hợp trên trục đứng (ví dụ mỗi vạch 2 đơn vị), bắt đầu từ 0.</li><li>Vẽ các cột cùng độ rộng, cách đều, cao đúng số liệu.</li><li>Ghi số liệu trên đỉnh cột (nếu cần), tên biểu đồ và tên trục.</li></ol>` },
    { title: 'Nhận xét từ biểu đồ', html: `<p>Biểu đồ cột cũng biểu diễn sự thay đổi theo thời gian, ví dụ nhiệt độ theo tháng:</p>`,
      svg: temp, caption: 'Nhiệt độ cao nhất vào tháng 7 (29 °C), thấp nhất vào tháng 1 (17 °C).' }
  ],
  summary: 'Biểu đồ cột gồm trục ngang (đối tượng), trục đứng (số liệu, chia đều từ 0), các cột cùng độ rộng, cao theo số liệu. Đọc bằng cách dóng đỉnh cột sang trục đứng; dùng để so sánh nhanh.',
  examples: [
    { title: 'Đọc số liệu', problem: 'Theo biểu đồ ở bước 1, số bạn thích bóng đá gấp mấy lần số bạn thích cờ vua?', solution: '12 : 4 = <b>3 lần</b>.' },
    { title: 'Chênh lệch', problem: 'Theo biểu đồ nhiệt độ, chênh lệch giữa tháng nóng nhất và tháng lạnh nhất là bao nhiêu?', solution: '29 − 17 = <b>12 °C</b>.' },
    { title: 'Tỉ lệ phần trăm', problem: 'Theo biểu đồ ở bước 1, số bạn thích cầu lông chiếm bao nhiêu phần trăm số bạn được khảo sát (làm tròn đến hàng đơn vị)?', solution: '{{8|36}} · 100% ≈ 22,2% ≈ <b>22%</b>.' }
  ],
  exercises: [
    { question: 'Theo biểu đồ ở bước 1, số bạn thích bơi và bóng rổ nhiều hơn hay ít hơn số bạn thích bóng đá? Bao nhiêu bạn?', hints: ['Bơi 5 bạn, bóng rổ 7 bạn.', 'So sánh 5 + 7 với 12.'], solution: '5 + 7 = 12: <b>bằng nhau</b>.' },
    { question: 'Số học sinh đi xe đạp của 4 lớp: 6A: 15; 6B: 20; 6C: 10; 6D: 25. Trục đứng nên chia mỗi vạch bao nhiêu? Cột nào cao nhất?', hints: ['Các số đều chia hết cho 5.', 'Số lớn nhất là 25.'], solution: 'Mỗi vạch <b>5 học sinh</b>; cột <b>6D</b> cao nhất.' },
    { question: 'Theo biểu đồ nhiệt độ, từ tháng 1 đến tháng 7 nhiệt độ thay đổi thế nào?', hints: ['So sánh các cột từ Th1 đến Th7.', '17 → 20 → 28 → 29.'], solution: 'Nhiệt độ <b>tăng dần</b> từ 17 °C lên 29 °C.' }
  ],
  quiz: [
    { type: 'short', q: 'Theo biểu đồ ở bước 1, có bao nhiêu bạn thích cầu lông?', answer: '8', explain: 'Cột cầu lông cao 8.' },
    { type: 'mcq', q: 'Theo biểu đồ ở bước 1, môn nào được yêu thích ít nhất?', options: ['Bơi', 'Bóng rổ', 'Cờ vua', 'Cầu lông'], answer: 2, explain: 'Cờ vua: 4 bạn.' },
    { type: 'short', q: 'Theo biểu đồ ở bước 1, tổng số bạn được khảo sát là bao nhiêu?', answer: '36', calc: '12+8+5+7+4', explain: '12 + 8 + 5 + 7 + 4 = 36.' },
    { type: 'short', q: 'Theo biểu đồ ở bước 1, số bạn thích bóng đá nhiều hơn số bạn thích bơi bao nhiêu bạn?', answer: '7', calc: '12-5', explain: '12 − 5 = 7.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Trên trục đứng của biểu đồ cột, các vạch chia phải cách đều nhau.', answer: true, explain: 'Chia đều để chiều cao cột đúng tỉ lệ.' },
    { type: 'mcq', q: 'Theo biểu đồ nhiệt độ, tháng nào có nhiệt độ 27 °C?', options: ['Th5', 'Th7', 'Th9', 'Th11'], answer: 2, explain: 'Cột Th9 cao 27.' },
    { type: 'short', q: 'Theo biểu đồ nhiệt độ, nhiệt độ tháng 5 cao hơn tháng 3 bao nhiêu độ?', answer: '8', unit: '°C', calc: '28-20', explain: '28 − 20 = 8.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Các cột trong biểu đồ cột có thể có độ rộng khác nhau tuỳ số liệu.', answer: false, explain: 'Các cột phải cùng độ rộng; chỉ chiều cao thay đổi.' }
  ]
});
})();
