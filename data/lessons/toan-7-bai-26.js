/* Toán 7 – Bài 26. Phép cộng và phép trừ đa thức một biến. Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('toan-7/bai-26', {
  objectives: [
    'Thực hiện phép cộng hai đa thức một biến theo hàng ngang và theo cột dọc.',
    'Thực hiện phép trừ hai đa thức một biến.',
    'Vận dụng tính chất của phép cộng đa thức để tính hợp lí; tìm đa thức chưa biết.'
  ],
  intro: 'Cộng hai đa thức giống như gom đồ vào đúng ngăn: các hạng tử cùng bậc được cộng với nhau.',
  steps: [
    { title: 'Cộng theo hàng ngang', html: `<p>Viết hai đa thức trong ngoặc, bỏ ngoặc, nhóm các hạng tử cùng bậc rồi thu gọn.</p>
      <p>P(x) = 2x<sup>3</sup> − x + 4; Q(x) = −x<sup>3</sup> + 3x<sup>2</sup> + 5x − 1.</p>
      <p class="math">P + Q = (2x<sup>3</sup> − x<sup>3</sup>) + 3x<sup>2</sup> + (−x + 5x) + (4 − 1) = x<sup>3</sup> + 3x<sup>2</sup> + 4x + 3</p>` },
    { title: 'Cộng theo cột dọc', html: `<p>Sắp xếp hai đa thức cùng theo luỹ thừa giảm dần, đặt các hạng tử cùng bậc thẳng cột (để trống chỗ bậc bị thiếu):</p>
      <table class="tbl"><tr><td>P(x) =</td><td>2x<sup>3</sup></td><td></td><td>− x</td><td>+ 4</td></tr><tr><td>Q(x) =</td><td>−x<sup>3</sup></td><td>+ 3x<sup>2</sup></td><td>+ 5x</td><td>− 1</td></tr><tr><th>P + Q =</th><th>x<sup>3</sup></th><th>+ 3x<sup>2</sup></th><th>+ 4x</th><th>+ 3</th></tr></table>` },
    { title: 'Phép trừ', html: `<p>P − Q = P + (−Q): đổi dấu <b>tất cả</b> hạng tử của Q rồi cộng.</p>
      <p class="math">P − Q = 2x<sup>3</sup> − x + 4 + x<sup>3</sup> − 3x<sup>2</sup> − 5x + 1 = 3x<sup>3</sup> − 3x<sup>2</sup> − 6x + 5</p>
      <div class="box note">Lỗi hay gặp: chỉ đổi dấu hạng tử đầu tiên của Q.</div>` },
    { title: 'Tính chất và tìm đa thức', html: `<p>Phép cộng đa thức có tính giao hoán, kết hợp. Từ đó:</p><ul><li>P + A = Q ⇒ A = Q − P.</li><li>A − P = Q ⇒ A = Q + P.</li></ul>` }
  ],
  summary: 'Cộng: gom các hạng tử cùng bậc (hàng ngang hoặc cột dọc). Trừ: đổi dấu mọi hạng tử của đa thức trừ rồi cộng. Tìm đa thức chưa biết bằng quy tắc chuyển vế.',
  examples: [
    { title: 'Cộng', problem: 'Tính A + B với A = x<sup>2</sup> − 2x + 1, B = 3x<sup>2</sup> + 2x − 5.', solution: 'A + B = 4x<sup>2</sup> − 4.' },
    { title: 'Trừ', problem: 'Tính A − B.', solution: 'A − B = x<sup>2</sup> − 2x + 1 − 3x<sup>2</sup> − 2x + 5 = −2x<sup>2</sup> − 4x + 6.' },
    { title: 'Tìm đa thức', problem: 'Tìm M biết M + (x<sup>2</sup> − 1) = 3x<sup>2</sup> + x.', solution: 'M = 3x<sup>2</sup> + x − x<sup>2</sup> + 1 = 2x<sup>2</sup> + x + 1.' }
  ],
  exercises: [
    { question: 'Cho P(x) = 5x<sup>3</sup> − 2x<sup>2</sup> + x, Q(x) = −5x<sup>3</sup> + x<sup>2</sup> + 4. Tính P + Q và bậc của nó.', hints: ['5x<sup>3</sup> − 5x<sup>3</sup> = 0.', 'Còn −x<sup>2</sup> + x + 4.'], solution: 'P + Q = −x<sup>2</sup> + x + 4, bậc 2.' },
    { question: 'Tính P − Q với P, Q ở bài 1, rồi tính giá trị tại x = 1.', hints: ['P − Q = 10x<sup>3</sup> − 3x<sup>2</sup> + x − 4.', 'Thay x = 1.'], solution: '10 − 3 + 1 − 4 = 4.' },
    { question: 'Tìm N biết N − (2x<sup>2</sup> − 3x) = x<sup>2</sup> + x − 1.', hints: ['N = (x<sup>2</sup> + x − 1) + (2x<sup>2</sup> − 3x).', 'Thu gọn.'], solution: 'N = 3x<sup>2</sup> − 2x − 1.' }
  ],
  quiz: [
    { type: 'mcq', q: '(x<sup>2</sup> − 2x + 1) + (3x<sup>2</sup> + 2x − 5) bằng:', options: ['4x<sup>2</sup> − 4', '4x<sup>2</sup> + 4x − 4', '2x<sup>2</sup> − 4', '4x<sup>2</sup> − 6'], answer: 0, explain: '−2x + 2x = 0; 1 − 5 = −4.' },
    { type: 'short', calc: 'poly([6, -4, -2], 1)', q: 'A − B = −2x<sup>2</sup> − 4x + 6. Tính giá trị tại x = 1.', answer: '0', explain: '−2 − 4 + 6 = 0.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: (3x − 1) − (x − 4) = 2x − 5.', answer: false, explain: '3x − 1 − x + 4 = 2x + 3.' },
    { type: 'short', calc: 'poly([-4, 1, -3, 10], 1)', q: 'P − Q = 10x<sup>3</sup> − 3x<sup>2</sup> + x − 4. Tính giá trị tại x = 1.', answer: '4', explain: '10 − 3 + 1 − 4.' },
    { type: 'short', calc: '2', q: 'P + Q = −x<sup>2</sup> + x + 4 có bậc bằng bao nhiêu?', answer: '2', explain: 'Số mũ lớn nhất là 2.' },
    { type: 'mcq', q: 'M + (x<sup>2</sup> − 1) = 3x<sup>2</sup> + x. Đa thức M là:', options: ['2x<sup>2</sup> + x + 1', '2x<sup>2</sup> + x − 1', '4x<sup>2</sup> + x − 1', '2x<sup>2</sup> − x + 1'], answer: 0, explain: 'M = 3x<sup>2</sup> + x − x<sup>2</sup> + 1.' },
    { type: 'short', calc: 'poly([-1, -2, 3], 2)', q: 'N = 3x<sup>2</sup> − 2x − 1. Tính N(2).', answer: '7', explain: '12 − 4 − 1 = 7.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Phép cộng đa thức có tính chất giao hoán.', answer: true, explain: 'P + Q = Q + P.' }
  ]
});
