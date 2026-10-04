/* Toán 8 – Bài 3. Phép cộng và phép trừ đa thức. Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('toan-8/bai-3', {
  objectives: [
    'Thực hiện được phép cộng hai đa thức.',
    'Thực hiện được phép trừ hai đa thức, bỏ dấu ngoặc đúng quy tắc.',
    'Vận dụng phép cộng, trừ đa thức để giải bài toán thực tế đơn giản.'
  ],
  intro: 'Cộng, trừ đa thức giống như cộng, trừ các “nhóm đồ vật”: táo cộng với táo, cam cộng với cam – các hạng tử đồng dạng được gộp với nhau.',
  steps: [
    { title: 'Quy tắc bỏ dấu ngoặc', html: `<ul><li>Trước ngoặc có dấu “<b>+</b>”: bỏ ngoặc, <b>giữ nguyên</b> dấu các hạng tử bên trong.</li>
      <li>Trước ngoặc có dấu “<b>−</b>”: bỏ ngoặc, <b>đổi dấu</b> tất cả các hạng tử bên trong.</li></ul>
      <p>Ví dụ: −(2x − 3y + 1) = −2x + 3y − 1.</p>` },
    { title: 'Cộng hai đa thức', html: `<p>Để cộng hai đa thức A và B:</p><ol><li>Viết A + B, mỗi đa thức trong một dấu ngoặc.</li><li>Bỏ dấu ngoặc.</li><li>Nhóm và thu gọn các hạng tử đồng dạng.</li></ol>
      <p class="math">(x<sup>2</sup> + 2xy − 3) + (2x<sup>2</sup> − xy + 1)<br>= x<sup>2</sup> + 2xy − 3 + 2x<sup>2</sup> − xy + 1<br>= 3x<sup>2</sup> + xy − 2</p>` },
    { title: 'Trừ hai đa thức', html: `<p>Làm tương tự phép cộng, nhưng khi bỏ ngoặc sau dấu “−” phải <b>đổi dấu mọi hạng tử</b> của đa thức trừ.</p>
      <p class="math">(3x<sup>2</sup>y − 2x + 5) − (x<sup>2</sup>y − 2x + 1)<br>= 3x<sup>2</sup>y − 2x + 5 − x<sup>2</sup>y + 2x − 1<br>= 2x<sup>2</sup>y + 4</p>
      <div class="box tip">Lỗi hay gặp: chỉ đổi dấu hạng tử đầu tiên trong ngoặc. Hãy đổi dấu <b>tất cả</b>!</div>` },
    { title: 'Tính chất', html: `<p>Phép cộng đa thức có tính chất giao hoán và kết hợp: A + B = B + A; (A + B) + C = A + (B + C).</p>
      <p>Nếu A − B = C thì A = B + C. Điều này giúp ta tìm một đa thức chưa biết, ví dụ: tìm M biết M + (x − 1) = 3x + 2 ⇒ M = 3x + 2 − (x − 1) = 2x + 3.</p>` }
  ],
  summary: 'Cộng/trừ đa thức: viết trong ngoặc → bỏ ngoặc (sau dấu “−” đổi dấu tất cả hạng tử) → thu gọn các hạng tử đồng dạng.',
  examples: [
    { title: 'Cộng đa thức', problem: 'Cho A = x<sup>2</sup> + 2xy − 3 và B = 2x<sup>2</sup> − xy + 1. Tính A + B.', solution: 'A + B = x<sup>2</sup> + 2xy − 3 + 2x<sup>2</sup> − xy + 1 = (x<sup>2</sup> + 2x<sup>2</sup>) + (2xy − xy) + (−3 + 1) = 3x<sup>2</sup> + xy − 2.' },
    { title: 'Trừ đa thức', problem: 'Với A, B như trên, tính A − B.', solution: 'A − B = x<sup>2</sup> + 2xy − 3 − 2x<sup>2</sup> + xy − 1 = −x<sup>2</sup> + 3xy − 4.' },
    { title: 'Bài toán thực tế', problem: 'Một hình chữ nhật có chiều dài (2x + 3) cm và chiều rộng (x + 1) cm. Viết đa thức biểu thị chu vi của hình chữ nhật.', solution: 'Chu vi = 2 · [(2x + 3) + (x + 1)] = 2 · (3x + 4) = 6x + 8 (cm).' }
  ],
  exercises: [
    { question: 'Tính: (5x − 2y + 1) + (−3x + 4y − 6).', hints: ['Bỏ ngoặc (trước ngoặc là dấu “+” nên giữ nguyên dấu).', 'Nhóm: (5x − 3x) + (−2y + 4y) + (1 − 6).'], solution: '2x + 2y − 5.' },
    { question: 'Tính: (4x<sup>2</sup> − x + 3) − (x<sup>2</sup> + 2x − 1).', hints: ['Bỏ ngoặc thứ hai và đổi dấu: −x<sup>2</sup> − 2x + 1.', 'Thu gọn: (4x<sup>2</sup> − x<sup>2</sup>) + (−x − 2x) + (3 + 1).'], solution: '3x<sup>2</sup> − 3x + 4.' },
    { question: 'Tìm đa thức M, biết: M − (2xy − y<sup>2</sup>) = xy + 3y<sup>2</sup>.', hints: ['M = (xy + 3y<sup>2</sup>) + (2xy − y<sup>2</sup>).', 'Cộng các hạng tử đồng dạng: xy + 2xy và 3y<sup>2</sup> − y<sup>2</sup>.'], solution: 'M = 3xy + 2y<sup>2</sup>.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Bỏ dấu ngoặc trong biểu thức −(3x − y + 2) ta được:', options: ['−3x − y + 2', '−3x + y − 2', '3x − y + 2', '−3x + y + 2'], answer: 1, explain: 'Trước ngoặc là dấu “−” nên đổi dấu tất cả hạng tử: −3x + y − 2.' },
    { type: 'mcq', q: '(2x + 3) + (x − 5) bằng:', options: ['3x − 2', '3x + 8', 'x + 8', '3x + 2'], answer: 0, explain: '(2x + x) + (3 − 5) = 3x − 2.' },
    { type: 'mcq', q: '(x<sup>2</sup> + 4x) − (x<sup>2</sup> − x) bằng:', options: ['3x', '5x', '2x<sup>2</sup> + 5x', '2x<sup>2</sup> + 3x'], answer: 1, explain: 'x<sup>2</sup> + 4x − x<sup>2</sup> + x = 5x.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: A + B = B + A với mọi đa thức A, B.', answer: true, explain: 'Phép cộng đa thức có tính chất giao hoán.' },
    { type: 'short', calc: '(3 * 2 - 1) - (2 + 4)', q: 'Cho A = 3x − 1 và B = x + 4. Giá trị của A − B tại x = 2 là bao nhiêu?', answer: '-1', answerText: '−1', explain: 'A − B = 3x − 1 − x − 4 = 2x − 5. Tại x = 2: 4 − 5 = −1.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: (5y − 2) − (3y − 2) = 2y − 4.', answer: false, explain: '5y − 2 − 3y + 2 = 2y. Kết quả đúng là 2y.' },
    { type: 'mcq', q: 'Tìm M biết M + (x − 1) = 3x + 2.', options: ['M = 2x + 1', 'M = 2x + 3', 'M = 4x + 1', 'M = 2x − 3'], answer: 1, explain: 'M = 3x + 2 − (x − 1) = 3x + 2 − x + 1 = 2x + 3.' },
    { type: 'short', calc: '2 + 5', q: 'Tổng của hai đa thức (xy + 2) và (−xy + 5) bằng bao nhiêu?', answer: '7', explain: 'xy − xy + 2 + 5 = 7.' }
  ]
});
