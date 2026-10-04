/* Toán 7 – Bài 29. Làm quen với biến cố. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, C = S.C;
THCS.registerLesson('toan-7/bai-29', {
  objectives: [
    'Làm quen với khái niệm biến cố ngẫu nhiên trong một số ví dụ đơn giản.',
    'Phân biệt biến cố chắc chắn, biến cố không thể và biến cố ngẫu nhiên.',
    'Nhận biết khả năng xảy ra của biến cố qua các ví dụ thực tế.'
  ],
  intro: 'Tung một đồng xu, em không biết trước mặt nào sẽ ngửa. Nhưng em biết chắc chắn nó không thể rơi ra mặt thứ ba! Toán học gọi những sự kiện như vậy là biến cố.',
  steps: [
    { title: 'Biến cố là gì?', html: `<p>Các sự kiện, hiện tượng trong tự nhiên hay đời sống gọi chung là <b>biến cố</b>. Khi thực hiện một hoạt động (gieo xúc xắc, rút thẻ, tung đồng xu…), mỗi biến cố có thể xảy ra hoặc không xảy ra.</p>
      <p>Ví dụ: gieo một con xúc xắc; biến cố “xuất hiện mặt 6 chấm”.</p>`,
      svg: S.draw({ w: 420, h: 110, items: [0, 1, 2, 3, 4, 5].map(function (i) { return { poly: [[15 + i * 68, 25], [73 + i * 68, 25], [73 + i * 68, 83], [15 + i * 68, 83]], fill: i === 5 ? C.orangeL : '#fff', color: C.ink }; }).concat([[1], [2], [3], [4], [5], [6]].map(function (n, i) { return { text: [44 + i * 68, 62, String(n[0])], bold: true, size: 22 }; })).concat([{ text: [210, 104, 'Sáu mặt của con xúc xắc – mỗi lần gieo xuất hiện đúng một mặt'], size: 12, color: C.muted }]) }),
      caption: 'Không biết trước lần gieo sẽ ra mặt nào.' },
    { title: 'Ba loại biến cố', html: `<table class="tbl"><tr><th>Loại</th><th>Ý nghĩa</th><th>Ví dụ (gieo xúc xắc)</th></tr><tr><td>Chắc chắn</td><td>Luôn xảy ra</td><td>“Số chấm nhỏ hơn 7”</td></tr><tr><td>Không thể</td><td>Không bao giờ xảy ra</td><td>“Số chấm là 8”</td></tr><tr><td>Ngẫu nhiên</td><td>Có thể xảy ra, có thể không</td><td>“Số chấm là số chẵn”</td></tr></table>` },
    { title: 'Khả năng xảy ra', html: `<p>Các biến cố ngẫu nhiên có khả năng xảy ra khác nhau. Ví dụ: hộp có 8 bi đỏ và 2 bi xanh; lấy ngẫu nhiên 1 bi: khả năng lấy được bi đỏ lớn hơn bi xanh.</p>`,
      svg: S.draw({ w: 440, h: 70, items: [{ seg: [60, 35, 380, 35], width: 3 }, { pt: [60, 35, 'Không thể', 0, 24], color: C.red }, { pt: [220, 35, 'Ngẫu nhiên', 0, 24], color: C.orange }, { pt: [380, 35, 'Chắc chắn', 0, 24], color: C.green }, { text: [60, 20, '0'], size: 13 }, { text: [380, 20, '1'], size: 13 }] }),
      caption: 'Thang khả năng: từ “không thể” (0) đến “chắc chắn” (1).' },
    { title: 'Mô tả biến cố bằng lời', html: `<p>Khi mô tả biến cố, cần nêu rõ hoạt động và kết quả được quan tâm. Ví dụ: “Rút ngẫu nhiên một thẻ từ 10 thẻ đánh số 1 – 10, biến cố A: thẻ rút được ghi số nguyên tố.” Các kết quả làm A xảy ra: 2, 3, 5, 7.</p>` }
  ],
  summary: 'Biến cố chắc chắn luôn xảy ra; biến cố không thể không bao giờ xảy ra; biến cố ngẫu nhiên có thể xảy ra hoặc không. Khả năng xảy ra của các biến cố ngẫu nhiên có thể khác nhau.',
  examples: [
    { title: 'Phân loại', problem: 'Tung một đồng xu. Phân loại: A “xuất hiện mặt sấp”; B “xuất hiện mặt sấp hoặc mặt ngửa”; C “xuất hiện cả hai mặt”.', solution: 'A ngẫu nhiên; B chắc chắn; C không thể.' },
    { title: 'Liệt kê kết quả', problem: 'Gieo xúc xắc. Liệt kê các kết quả làm biến cố “số chấm chia hết cho 3” xảy ra.', solution: 'Mặt 3 chấm và mặt 6 chấm.' },
    { title: 'So sánh khả năng', problem: 'Túi có 5 kẹo cam, 3 kẹo dâu, 1 kẹo chanh. Lấy ngẫu nhiên một viên. Loại kẹo nào có khả năng được lấy cao nhất?', solution: 'Kẹo cam (nhiều nhất).' }
  ],
  exercises: [
    { question: 'Rút một thẻ từ 10 thẻ số 1 – 10. Biến cố “số trên thẻ nhỏ hơn 11” thuộc loại nào?', hints: ['Mọi thẻ đều nhỏ hơn 11.', 'Luôn xảy ra.'], solution: 'Biến cố chắc chắn.' },
    { question: 'Gieo hai con xúc xắc. Biến cố “tổng số chấm bằng 13” thuộc loại nào?', hints: ['Tổng lớn nhất là 6 + 6.', '12 &lt; 13.'], solution: 'Biến cố không thể.' },
    { question: 'Lớp có 20 nam, 15 nữ; chọn ngẫu nhiên một bạn làm lớp trưởng. Biến cố “chọn được bạn nam” hay “chọn được bạn nữ” có khả năng cao hơn?', hints: ['So sánh số bạn.', '20 &gt; 15.'], solution: '“Chọn được bạn nam” có khả năng cao hơn.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Gieo một xúc xắc. Biến cố “số chấm lớn hơn 0” là:', options: ['chắc chắn', 'không thể', 'ngẫu nhiên', 'không xác định'], answer: 0, explain: 'Mọi mặt đều có ít nhất 1 chấm.' },
    { type: 'mcq', q: 'Biến cố nào là biến cố không thể khi gieo một xúc xắc?', options: ['Số chấm là 1', 'Số chấm là số lẻ', 'Số chấm là 7', 'Số chấm nhỏ hơn 4'], answer: 2, explain: 'Không có mặt 7 chấm.' },
    { type: 'short', calc: 'divisors(6).filter(function (d) { return d % 3 === 0; }).length', q: 'Gieo xúc xắc. Có bao nhiêu kết quả làm biến cố “số chấm chia hết cho 3” xảy ra?', answer: '2', explain: 'Mặt 3 và mặt 6.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tung đồng xu, biến cố “xuất hiện mặt ngửa” là biến cố ngẫu nhiên.', answer: true, explain: 'Có thể xảy ra hoặc không.' },
    { type: 'short', calc: '[2, 3, 5, 7].length', q: 'Rút một thẻ từ các thẻ số 1 – 10. Có bao nhiêu kết quả làm biến cố “số nguyên tố” xảy ra?', answer: '4', explain: '2, 3, 5, 7.' },
    { type: 'mcq', q: 'Túi có 5 kẹo cam, 3 dâu, 1 chanh. Khả năng lấy được kẹo nào thấp nhất?', options: ['cam', 'dâu', 'chanh', 'như nhau'], answer: 2, explain: 'Chỉ có 1 kẹo chanh.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Gieo hai xúc xắc, “tổng số chấm bằng 13” là biến cố ngẫu nhiên.', answer: false, explain: 'Tổng lớn nhất là 12: biến cố không thể.' },
    { type: 'short', calc: '6 - 3', q: 'Gieo xúc xắc. Có bao nhiêu kết quả làm biến cố “số chấm là số chẵn” xảy ra?', answer: '3', explain: '2, 4, 6.' }
  ]
});
})();
