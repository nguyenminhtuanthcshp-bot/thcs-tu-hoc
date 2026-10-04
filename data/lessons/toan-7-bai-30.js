/* Toán 7 – Bài 30. Làm quen với xác suất của biến cố. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, C = S.C;
THCS.registerLesson('toan-7/bai-30', {
  objectives: [
    'Làm quen với khái niệm xác suất của biến cố ngẫu nhiên qua các ví dụ đơn giản.',
    'Tính xác suất của biến cố khi các kết quả có thể có khả năng xảy ra như nhau.',
    'Biết xác suất của biến cố chắc chắn bằng 1, của biến cố không thể bằng 0.'
  ],
  intro: 'Bài trước, em đã biết biến cố có khả năng xảy ra “cao” hay “thấp”. Xác suất giúp đo khả năng đó bằng một con số từ 0 đến 1.',
  steps: [
    { title: 'Xác suất là gì?', html: `<p>Khả năng xảy ra của một biến cố được biểu thị bằng một số từ 0 đến 1, gọi là <b>xác suất</b> của biến cố đó. Biến cố có khả năng xảy ra càng cao thì xác suất càng gần 1.</p>
      <ul><li>Biến cố không thể có xác suất 0.</li><li>Biến cố chắc chắn có xác suất 1.</li></ul>` },
    { title: 'Các kết quả đồng khả năng', html: `<p>Nếu một hoạt động có <b>n</b> kết quả có thể xảy ra với khả năng như nhau thì xác suất của mỗi kết quả là {{1|n}}.</p>
      <p>Ví dụ: tung đồng xu cân đối có 2 kết quả như nhau (sấp, ngửa) ⇒ xác suất mỗi mặt là {{1|2}}. Gieo xúc xắc cân đối: mỗi mặt có xác suất {{1|6}}.</p>` },
    { title: 'Xác suất của một biến cố', html: `<p>Khi các kết quả đồng khả năng, đếm số kết quả làm biến cố xảy ra (kết quả <b>thuận lợi</b>):</p>
      <p style="text-align:center"><b>Xác suất = {{số kết quả thuận lợi|tổng số kết quả có thể}}</b></p>
      <p>Gieo xúc xắc, biến cố “số chấm chẵn” có 3 kết quả thuận lợi (2, 4, 6) trên 6 ⇒ xác suất {{3|6}} = {{1|2}}.</p>`,
      svg: S.draw({ w: 420, h: 96, items: [0, 1, 2, 3, 4, 5].map(function (i) { var ok = (i + 1) % 2 === 0; return { poly: [[15 + i * 68, 18], [73 + i * 68, 18], [73 + i * 68, 76], [15 + i * 68, 76]], fill: ok ? C.greenL : '#fff', color: ok ? C.green : C.ink }; }).concat([1, 2, 3, 4, 5, 6].map(function (n, i) { return { text: [44 + i * 68, 55, String(n)], bold: true, size: 22, color: n % 2 === 0 ? C.green : C.ink }; })).concat([{ text: [210, 92, '3 kết quả thuận lợi / 6 kết quả có thể'], size: 12, color: C.muted }]) }),
      caption: 'Tô xanh: các mặt chẵn.' },
    { title: 'Ví dụ với túi bóng', html: `<p>Túi có 3 bóng đỏ, 2 bóng xanh, cùng kích thước. Lấy ngẫu nhiên 1 bóng: có 5 kết quả đồng khả năng. Xác suất lấy được bóng đỏ là {{3|5}}, bóng xanh là {{2|5}}.</p>`,
      svg: S.draw({ w: 300, h: 80, items: [[40, C.red, '#fee2e2'], [95, C.red, '#fee2e2'], [150, C.red, '#fee2e2'], [205, C.blue, C.blueL], [260, C.blue, C.blueL]].map(function (b) { return { circle: [b[0], 40, 20], color: b[1], fill: b[2] }; }) }),
      caption: '3 bóng đỏ, 2 bóng xanh.' }
  ],
  summary: 'Xác suất là số từ 0 đến 1 đo khả năng xảy ra của biến cố. Không thể: 0; chắc chắn: 1. Nếu n kết quả đồng khả năng thì xác suất = số kết quả thuận lợi : n (viết dạng phân số tối giản).',
  examples: [
    { title: 'Xúc xắc', problem: 'Gieo xúc xắc cân đối. Tính xác suất biến cố “số chấm là số nguyên tố”.', solution: 'Thuận lợi: 2, 3, 5 ⇒ {{3|6}} = {{1|2}}.' },
    { title: 'Thẻ số', problem: 'Rút ngẫu nhiên một thẻ từ 20 thẻ đánh số 1 – 20. Tính xác suất rút được thẻ chia hết cho 5.', solution: 'Thuận lợi: 5, 10, 15, 20 ⇒ {{4|20}} = {{1|5}}.' },
    { title: 'Biến cố đặc biệt', problem: 'Gieo xúc xắc. Tính xác suất của “số chấm nhỏ hơn 7” và “số chấm bằng 0”.', solution: 'Chắc chắn: 1; không thể: 0.' }
  ],
  exercises: [
    { question: 'Túi có 4 bi đỏ và 6 bi vàng. Lấy ngẫu nhiên 1 bi. Tính xác suất lấy được bi đỏ.', hints: ['Có 10 kết quả đồng khả năng.', '{{4|10}} rút gọn.'], solution: '{{2|5}}.' },
    { question: 'Chọn ngẫu nhiên một tháng trong năm. Tính xác suất tháng đó có 31 ngày.', hints: ['Tháng 1, 3, 5, 7, 8, 10, 12.', '7 trên 12.'], solution: '{{7|12}}.' },
    { question: 'Gieo xúc xắc. So sánh xác suất của A “số chấm lớn hơn 4” và B “số chấm là số lẻ”.', hints: ['A: 5, 6.', 'B: 1, 3, 5.'], solution: 'P(A) = {{1|3}} &lt; P(B) = {{1|2}}.' }
  ],
  quiz: [
    { type: 'short', calc: '1 / 6', requireSimplest: true, q: 'Gieo xúc xắc cân đối. Xác suất xuất hiện mặt 5 chấm là bao nhiêu? (viết phân số tối giản)', answer: '1/6', explain: '6 mặt đồng khả năng.' },
    { type: 'short', calc: '3 / 6', requireSimplest: true, q: 'Gieo xúc xắc. Xác suất “số chấm là số nguyên tố” (phân số tối giản)?', answer: '1/2', explain: '2, 3, 5 ⇒ {{3|6}} = {{1|2}}.' },
    { type: 'short', calc: '4 / 20', requireSimplest: true, q: 'Rút một thẻ từ 20 thẻ số 1 – 20. Xác suất rút được thẻ chia hết cho 5 (phân số tối giản)?', answer: '1/5', explain: '{{4|20}} = {{1|5}}.' },
    { type: 'short', calc: '4 / 10', requireSimplest: true, q: 'Túi có 4 bi đỏ, 6 bi vàng. Xác suất lấy được bi đỏ (phân số tối giản)?', answer: '2/5', explain: '{{4|10}} = {{2|5}}.' },
    { type: 'mcq', q: 'Xác suất của biến cố chắc chắn bằng:', options: ['0', '{{1|2}}', '1', '100'], answer: 2, explain: 'Luôn xảy ra.' },
    { type: 'short', calc: '0', q: 'Gieo xúc xắc. Xác suất “số chấm là 7”?', answer: '0', explain: 'Biến cố không thể.' },
    { type: 'short', calc: '7 / 12', requireSimplest: true, q: 'Chọn ngẫu nhiên một tháng. Xác suất tháng đó có 31 ngày (phân số tối giản)?', answer: '7/12', explain: '7 tháng có 31 ngày.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tung đồng xu cân đối, xác suất xuất hiện mặt sấp là {{1|2}}.', answer: true, explain: '2 kết quả đồng khả năng.' }
  ]
});
})();
