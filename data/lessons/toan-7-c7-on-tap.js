/* Toán 7 – Bài tập cuối chương VII. Biểu thức đại số và đa thức một biến. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, C = S.C;
THCS.registerLesson('toan-7/c7-on-tap', {
  objectives: [
    'Hệ thống kiến thức chương VII: biểu thức đại số, đa thức một biến, bậc, nghiệm, bốn phép tính với đa thức.',
    'Giải bài tập tổng hợp về thu gọn, tính giá trị, tìm nghiệm, cộng trừ nhân chia đa thức.',
    'Vận dụng đa thức để biểu diễn các đại lượng trong bài toán thực tế, hình học.'
  ],
  intro: 'Ôn tập chương VII. Đa thức là “ngôn ngữ” để viết gọn những quy luật – từ công thức diện tích đến giá cước taxi.',
  steps: [
    { title: 'Sơ đồ chương', html: `<p>Các khái niệm và phép toán chính:</p>`,
      svg: S.mindmap({ center: 'Đa thức một biến', branches: [{ title: 'Khái niệm', items: ['hạng tử, bậc', 'hệ số cao nhất, tự do'] }, { title: 'Giá trị, nghiệm', items: ['P(a)', 'P(a) = 0'] }, { title: 'Cộng, trừ', items: ['gom cùng bậc', 'trừ: đổi dấu'] }, { title: 'Nhân, chia', items: ['từng hạng tử', 'A = BQ + R'] }] }) },
    { title: 'Những lỗi thường gặp', html: `<ul><li>Quên thu gọn trước khi xác định bậc.</li><li>Trừ đa thức chỉ đổi dấu hạng tử đầu.</li><li>Nhân lũy thừa: nhân số mũ thay vì cộng (x<sup>2</sup> · x<sup>3</sup> = x<sup>5</sup>, không phải x<sup>6</sup>).</li><li>Đặt tính chia quên điền hạng tử 0 cho bậc thiếu.</li></ul>` },
    { title: 'Bài toán mẫu', html: `<p>Cho P(x) = x<sup>3</sup> − 2x<sup>2</sup> + x − 2, Q(x) = x − 2.</p><ol><li>P(2) = 8 − 8 + 2 − 2 = 0 ⇒ 2 là nghiệm của P.</li><li>P : Q = x<sup>2</sup> + 1 (dư 0) ⇒ P(x) = (x − 2)(x<sup>2</sup> + 1).</li><li>Vì x<sup>2</sup> + 1 &gt; 0 nên P chỉ có một nghiệm x = 2.</li></ol>` },
    { title: 'Mô hình thực tế', html: `<p>Cước taxi: 12 000 đồng cho km đầu tiên, 10 000 đồng cho mỗi km tiếp theo. Đi x km (x ≥ 1): T(x) = 12 000 + 10 000(x − 1) = 10 000x + 2 000 (đồng).</p>` }
  ],
  summary: 'Chương VII: biểu thức đại số, đa thức một biến (thu gọn, bậc, hệ số, giá trị, nghiệm), cộng – trừ – nhân – chia đa thức, A = B · Q + R; ứng dụng mô hình hoá thực tế.',
  examples: [
    { title: 'Tổng hợp', problem: 'Cho A(x) = 2x<sup>2</sup> − 3x + 1, B(x) = x<sup>2</sup> + x − 2. Tính A − 2B.', solution: 'A − 2B = 2x<sup>2</sup> − 3x + 1 − 2x<sup>2</sup> − 2x + 4 = −5x + 5, nghiệm x = 1.' },
    { title: 'Nhân rồi chia', problem: 'Tính (x − 1)(x + 1)(x<sup>2</sup> + 1) và chia kết quả cho x<sup>2</sup> − 1.', solution: '(x<sup>2</sup> − 1)(x<sup>2</sup> + 1) = x<sup>4</sup> − 1; (x<sup>4</sup> − 1) : (x<sup>2</sup> − 1) = x<sup>2</sup> + 1.' },
    { title: 'Taxi', problem: 'Với T(x) = 10 000x + 2 000, đi 15 km hết bao nhiêu tiền?', solution: 'T(15) = 152 000 đồng.' }
  ],
  exercises: [
    { question: 'Tìm nghiệm của 3x + 12.', hints: ['3x = −12.', 'Chia 3.'], solution: 'x = −4.' },
    { question: 'Cho P(x) = x<sup>2</sup> − 6x + 9. Tính P(3) và P(−1).', hints: ['P(3) = 9 − 18 + 9.', 'P(−1) = 1 + 6 + 9.'], solution: 'P(3) = 0, P(−1) = 16.' },
    { question: 'Tìm thương và dư khi chia x<sup>3</sup> + 2x<sup>2</sup> − x + 3 cho x + 2.', hints: ['x<sup>3</sup> : x = x<sup>2</sup>; trừ x<sup>3</sup> + 2x<sup>2</sup> được −x + 3.', '−x : x = −1; trừ −x − 2 được 5.'], solution: 'Thương x<sup>2</sup> − 1, dư 5.' }
  ],
  quiz: [
    { type: 'short', calc: 'poly([-2, 1, -2, 1], 2)', q: 'P(x) = x<sup>3</sup> − 2x<sup>2</sup> + x − 2. Tính P(2).', answer: '0', explain: '8 − 8 + 2 − 2 = 0.' },
    { type: 'short', calc: '-12 / 3', q: 'Tìm nghiệm của 3x + 12.', answer: '-4', answerText: '−4', explain: '3x = −12.' },
    { type: 'short', calc: 'poly([9, -6, 1], -1)', q: 'P(x) = x<sup>2</sup> − 6x + 9. Tính P(−1).', answer: '16', explain: '1 + 6 + 9.' },
    { type: 'short', calc: '10000 * 15 + 2000', q: 'T(x) = 10 000x + 2 000 (đồng). Đi 15 km hết bao nhiêu đồng?', unit: 'đồng', answer: '152000', answerText: '152 000', explain: '150 000 + 2 000.' },
    { type: 'mcq', q: 'x<sup>2</sup> · x<sup>3</sup> bằng:', options: ['x<sup>6</sup>', 'x<sup>5</sup>', '2x<sup>5</sup>', 'x<sup>1</sup>'], answer: 1, explain: 'Cộng số mũ.' },
    { type: 'short', calc: 'poly([3, -1, 2, 1], -2)', q: 'Dư khi chia x<sup>3</sup> + 2x<sup>2</sup> − x + 3 cho x + 2?', answer: '5', explain: 'Thương x<sup>2</sup> − 1; (x + 2)(x<sup>2</sup> − 1) = x<sup>3</sup> + 2x<sup>2</sup> − x − 2 nên dư 3 + 2 = 5.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Đa thức (x − 2)(x<sup>2</sup> + 1) có đúng một nghiệm.', answer: true, explain: 'x<sup>2</sup> + 1 luôn dương.' },
    { type: 'short', calc: '5 / 5', q: 'A − 2B = −5x + 5. Tìm nghiệm.', answer: '1', explain: '5x = 5.' }
  ]
});
})();
