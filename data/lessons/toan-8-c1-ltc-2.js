/* Toán 8 – Luyện tập chung (sau Bài 5). Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('toan-8/c1-ltc-2', {
  objectives: [
    'Thực hiện thành thạo phép nhân đơn thức, đa thức.',
    'Chia đơn thức cho đơn thức, đa thức cho đơn thức trong trường hợp chia hết.',
    'Phối hợp các phép tính để rút gọn biểu thức và giải bài toán tìm x đơn giản.'
  ],
  intro: 'Nhân và chia đa thức thường xuất hiện cùng nhau trong một bài rút gọn. Buổi luyện tập này rèn thứ tự thực hiện phép tính và thói quen thử lại.',
  steps: [
    { title: 'Thứ tự thực hiện', html: `<p>Giống như với số: <b>ngoặc</b> trước, rồi <b>nhân, chia</b>, sau cùng <b>cộng, trừ</b>.</p>
      <p class="math">x(x + 2) − (6x<sup>3</sup> − 4x<sup>2</sup>) : 2x = x<sup>2</sup> + 2x − (3x<sup>2</sup> − 2x) = −2x<sup>2</sup> + 4x</p>` },
    { title: 'Bảng quy tắc nhanh', html: `<table class="tbl"><tr><th>Phép tính</th><th>Cách làm</th></tr>
      <tr><td>Đơn thức × đơn thức</td><td>Nhân hệ số, cộng số mũ</td></tr>
      <tr><td>A × (B + C)</td><td>AB + AC</td></tr>
      <tr><td>(A + B)(C + D)</td><td>AC + AD + BC + BD</td></tr>
      <tr><td>Đơn thức : đơn thức</td><td>Chia hệ số, trừ số mũ</td></tr>
      <tr><td>(A + B) : M</td><td>A : M + B : M</td></tr></table>` },
    { title: 'Bài toán tìm x', html: `<p>Rút gọn vế chứa x cho đến khi còn dạng ax + b = c, rồi tìm x.</p>
      <p>Ví dụ: x(x − 3) − x<sup>2</sup> = 12 ⇒ −3x = 12 ⇒ x = −4.</p>
      <div class="box tip">Các hạng tử x<sup>2</sup> thường triệt tiêu nhau – nếu còn x<sup>2</sup>, hãy kiểm tra lại phép nhân.</div>` },
    { title: 'Thử lại', html: `<p>Sau khi chia, nhân thương với số chia để kiểm tra; sau khi tìm x, thay x vào đề bài để kiểm tra hai vế bằng nhau.</p>` }
  ],
  summary: 'Làm theo thứ tự ngoặc → nhân chia → cộng trừ; nhân từng hạng tử với từng hạng tử; chia từng hạng tử; luôn thử lại.',
  examples: [
    { title: 'Rút gọn biểu thức', problem: 'Rút gọn A = (x − 1)(x + 4) − (2x<sup>3</sup> + 6x<sup>2</sup>) : 2x.', solution: '(x − 1)(x + 4) = x<sup>2</sup> + 3x − 4; (2x<sup>3</sup> + 6x<sup>2</sup>) : 2x = x<sup>2</sup> + 3x.<br>A = x<sup>2</sup> + 3x − 4 − x<sup>2</sup> − 3x = −4.' },
    { title: 'Tìm x', problem: 'Tìm x biết (x + 2)(x − 3) − x(x + 1) = 6.', solution: 'x<sup>2</sup> − x − 6 − x<sup>2</sup> − x = 6 ⇒ −2x − 6 = 6 ⇒ −2x = 12 ⇒ x = −6.' },
    { title: 'Diện tích hình', problem: 'Một hình chữ nhật có diện tích (6x<sup>2</sup> + 9x) m<sup>2</sup> và chiều rộng 3x m. Tìm chiều dài và chu vi theo x.', solution: 'Chiều dài: (6x<sup>2</sup> + 9x) : 3x = 2x + 3 (m). Chu vi: 2(2x + 3 + 3x) = 10x + 6 (m).' }
  ],
  exercises: [
    { question: 'Rút gọn: 2x(3x − 1) − (12x<sup>3</sup> − 4x<sup>2</sup>) : 4x.', hints: ['2x(3x − 1) = 6x<sup>2</sup> − 2x.', '(12x<sup>3</sup> − 4x<sup>2</sup>) : 4x = 3x<sup>2</sup> − x.'], solution: '6x<sup>2</sup> − 2x − 3x<sup>2</sup> + x = 3x<sup>2</sup> − x.' },
    { question: 'Tìm x biết 3x(x − 2) − 3x<sup>2</sup> = 18.', hints: ['Nhân phá ngoặc: 3x<sup>2</sup> − 6x.', 'Rút gọn còn −6x = 18.'], solution: 'x = −3.' },
    { question: 'Tìm đa thức Q biết Q · 2xy = 4x<sup>3</sup>y<sup>2</sup> − 6x<sup>2</sup>y + 2xy.', hints: ['Q = (4x<sup>3</sup>y<sup>2</sup> − 6x<sup>2</sup>y + 2xy) : 2xy.', 'Nhớ 2xy : 2xy = 1.'], solution: 'Q = 2x<sup>2</sup>y − 3x + 1.' }
  ],
  quiz: [
    { type: 'mcq', q: '(x + 1)(x − 4) bằng:', options: ['x<sup>2</sup> − 3x − 4', 'x<sup>2</sup> + 3x − 4', 'x<sup>2</sup> − 5x − 4', 'x<sup>2</sup> − 4'], answer: 0, explain: 'x<sup>2</sup> − 4x + x − 4 = x<sup>2</sup> − 3x − 4.' },
    { type: 'mcq', q: '(15x<sup>4</sup>y<sup>2</sup>) : (−5x<sup>2</sup>y<sup>2</sup>) bằng:', options: ['3x<sup>2</sup>', '−3x<sup>2</sup>', '−3x<sup>2</sup>y', '−10x<sup>2</sup>'], answer: 1, explain: '15 : (−5) = −3; x<sup>2</sup>; y<sup>0</sup> = 1.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: (4x<sup>2</sup> + 2x) : 2x = 2x.', answer: false, explain: '2x : 2x = 1, kết quả là 2x + 1.' },
    { type: 'short', calc: '12 / (-3)', q: 'Tìm x biết x(x − 3) − x<sup>2</sup> = 12.', answer: '-4', answerText: '−4', explain: '−3x = 12 ⇒ x = −4.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Biểu thức x(x + 5) − (x + 2)(x + 3) luôn bằng −6.', answer: true, explain: 'x<sup>2</sup> + 5x − x<sup>2</sup> − 5x − 6 = −6.' },
    { type: 'mcq', q: 'Hình chữ nhật có diện tích (8x<sup>2</sup> + 4x) cm² và chiều rộng 4x cm. Chiều dài là:', options: ['2x + 1 (cm)', '2x (cm)', '2x + 4 (cm)', '4x + 1 (cm)'], answer: 0, explain: '(8x<sup>2</sup> + 4x) : 4x = 2x + 1.' },
    { type: 'short', calc: '3 * 1 * 1 - 1', q: 'Rút gọn 2x(3x − 1) − (12x<sup>3</sup> − 4x<sup>2</sup>) : 4x rồi tính giá trị tại x = 1.', answer: '2', explain: 'Rút gọn được 3x<sup>2</sup> − x; tại x = 1: 3 − 1 = 2.' },
    { type: 'short', calc: '12 / (-2)', q: 'Tìm x biết (x + 2)(x − 3) − x(x + 1) = 6.', answer: '-6', answerText: '−6', explain: '−2x − 6 = 6 ⇒ x = −6.' }
  ]
});
