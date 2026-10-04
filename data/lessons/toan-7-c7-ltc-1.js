/* Toán 7 – Chương VII. Luyện tập chung (sau Bài 26). Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('toan-7/c7-ltc-1', {
  objectives: [
    'Viết biểu thức đại số và tính giá trị của biểu thức.',
    'Thu gọn, sắp xếp đa thức; xác định bậc, hệ số, nghiệm.',
    'Cộng, trừ đa thức một biến và tìm đa thức chưa biết.'
  ],
  intro: 'Luyện tập Bài 24 – 26. Làm việc với đa thức giống như sắp xếp tủ đồ: gom đúng ngăn (cùng bậc), xếp theo thứ tự, rồi mới cộng trừ.',
  steps: [
    { title: 'Quy trình với đa thức', html: `<ol><li>Thu gọn (gộp các hạng tử cùng bậc).</li><li>Sắp xếp theo luỹ thừa giảm dần.</li><li>Xác định bậc, hệ số cao nhất, hệ số tự do.</li><li>Cộng/trừ: bỏ ngoặc (đổi dấu nếu trước ngoặc là “−”), gộp hạng tử cùng bậc.</li></ol>` },
    { title: 'Tính giá trị nhanh', html: `<p>Với P(x) đã thu gọn: P(0) = hệ số tự do; P(1) = tổng các hệ số; P(−1) = tổng hệ số bậc chẵn − tổng hệ số bậc lẻ.</p>
      <p>Ví dụ: P(x) = 2x<sup>3</sup> − 3x<sup>2</sup> + x + 5: P(0) = 5; P(1) = 2 − 3 + 1 + 5 = 5; P(−1) = (−3 + 5) − (2 + 1) = −1.</p>` },
    { title: 'Kiểm tra nghiệm', html: `<p>a là nghiệm của P(x) ⇔ P(a) = 0. Nếu tổng các hệ số bằng 0 thì x = 1 là một nghiệm.</p>` },
    { title: 'Tìm đa thức chưa biết', html: `<p>Dùng chuyển vế như với số: A + P = Q ⇒ A = Q − P; P − A = Q ⇒ A = P − Q.</p>` }
  ],
  summary: 'Thu gọn – sắp xếp – xác định bậc, hệ số. P(0) là hệ số tự do, P(1) là tổng các hệ số. Cộng trừ theo hạng tử cùng bậc; tìm đa thức bằng chuyển vế.',
  examples: [
    { title: 'Giá trị', problem: 'Tính P(1), P(−1) với P(x) = x<sup>4</sup> − 2x<sup>3</sup> + 3x − 1.', solution: 'P(1) = 1 − 2 + 3 − 1 = 1; P(−1) = 1 + 2 − 3 − 1 = −1.' },
    { title: 'Nghiệm', problem: 'Chứng tỏ x = 1 là nghiệm của Q(x) = 3x<sup>2</sup> − 5x + 2.', solution: 'Tổng các hệ số 3 − 5 + 2 = 0 ⇒ Q(1) = 0.' },
    { title: 'Tìm đa thức', problem: 'Tìm A biết (2x<sup>2</sup> + x) − A = x<sup>2</sup> − 3.', solution: 'A = 2x<sup>2</sup> + x − x<sup>2</sup> + 3 = x<sup>2</sup> + x + 3.' }
  ],
  exercises: [
    { question: 'Thu gọn, sắp xếp và tìm bậc: F(x) = 3x<sup>2</sup> − x<sup>5</sup> + 2x − 3x<sup>2</sup> + x<sup>5</sup> + 4.', hints: ['x<sup>5</sup> triệt tiêu, 3x<sup>2</sup> triệt tiêu.', 'Còn 2x + 4.'], solution: 'F(x) = 2x + 4, bậc 1; nghiệm x = −2.' },
    { question: 'Cho P(x) = x<sup>2</sup> − 4x + 3 và Q(x) = −x<sup>2</sup> + 2x. Tính P + Q và tìm nghiệm của P + Q.', hints: ['P + Q = −2x + 3.', 'Giải −2x + 3 = 0.'], solution: 'P + Q = −2x + 3, nghiệm x = {{3|2}}.' },
    { question: 'Một hình chữ nhật có chiều dài 2x + 3, chiều rộng x + 1 (cm). Viết biểu thức chu vi và tính khi x = 2.', hints: ['Chu vi = 2(dài + rộng).', '2(3x + 4) = 6x + 8.'], solution: 'P = 6x + 8; khi x = 2: 20 cm.' }
  ],
  quiz: [
    { type: 'short', calc: 'poly([-1, 3, 0, -2, 1], 1)', q: 'P(x) = x<sup>4</sup> − 2x<sup>3</sup> + 3x − 1. Tính P(1).', answer: '1', explain: 'Tổng các hệ số.' },
    { type: 'short', calc: 'poly([-1, 3, 0, -2, 1], -1)', q: 'P(x) = x<sup>4</sup> − 2x<sup>3</sup> + 3x − 1. Tính P(−1).', answer: '-1', answerText: '−1', explain: '1 + 2 − 3 − 1.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: x = 1 là nghiệm của 3x<sup>2</sup> − 5x + 2.', answer: true, explain: 'Tổng hệ số bằng 0.' },
    { type: 'short', calc: '-4 / 2', q: 'F(x) = 2x + 4. Tìm nghiệm của F(x).', answer: '-2', answerText: '−2', explain: '2x = −4.' },
    { type: 'short', calc: '3 / 2', q: 'Tìm nghiệm của −2x + 3 (dạng số thập phân hoặc a/b).', answer: ['1.5', '3/2'], answerText: '1,5 (3/2)', explain: 'x = {{3|2}}.' },
    { type: 'short', calc: '2 * ((2 * 2 + 3) + (2 + 1))', q: 'Hình chữ nhật dài 2x + 3, rộng x + 1 (cm). Chu vi khi x = 2 là bao nhiêu cm?', unit: 'cm', answer: '20', explain: '2(7 + 3) = 20.' },
    { type: 'mcq', q: '(2x<sup>2</sup> + x) − A = x<sup>2</sup> − 3. A bằng:', options: ['x<sup>2</sup> + x + 3', 'x<sup>2</sup> + x − 3', '3x<sup>2</sup> + x − 3', 'x<sup>2</sup> − x + 3'], answer: 0, explain: 'A = 2x<sup>2</sup> + x − x<sup>2</sup> + 3.' },
    { type: 'short', calc: 'poly([5, 1, -3, 2], 0)', q: 'P(x) = 2x<sup>3</sup> − 3x<sup>2</sup> + x + 5. Tính P(0).', answer: '5', explain: 'Hệ số tự do.' }
  ]
});
