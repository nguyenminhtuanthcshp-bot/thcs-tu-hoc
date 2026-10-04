/* Toán 7 – Bài 27. Phép nhân đa thức một biến. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, C = S.C;
THCS.registerLesson('toan-7/bai-27', {
  objectives: [
    'Nhân được đơn thức với đơn thức, đơn thức với đa thức một biến.',
    'Nhân được đa thức với đa thức một biến (hàng ngang và đặt tính).',
    'Vận dụng phép nhân để rút gọn biểu thức và giải bài toán diện tích.'
  ],
  intro: 'Diện tích hình chữ nhật có các cạnh x + 2 và x + 3 là bao nhiêu? Chia hình thành các ô nhỏ, em sẽ thấy ngay quy tắc nhân hai đa thức.',
  steps: [
    { title: 'Nhân đơn thức với đơn thức', html: `<p>Nhân các hệ số với nhau, nhân các luỹ thừa của biến (cộng số mũ):</p>
      <p class="math">a x<sup>m</sup> · b x<sup>n</sup> = (a · b) x<sup>m + n</sup></p>
      <p>Ví dụ: 3x<sup>2</sup> · (−4x<sup>3</sup>) = −12x<sup>5</sup>.</p>` },
    { title: 'Nhân đơn thức với đa thức', html: `<p>Nhân đơn thức với từng hạng tử của đa thức rồi cộng các tích:</p>
      <p class="math">2x · (x<sup>2</sup> − 3x + 1) = 2x<sup>3</sup> − 6x<sup>2</sup> + 2x</p>` },
    { title: 'Nhân đa thức với đa thức', html: `<p>Nhân <b>mỗi hạng tử</b> của đa thức này với <b>từng hạng tử</b> của đa thức kia rồi cộng các tích, thu gọn.</p>
      <p class="math">(x + 2)(x + 3) = x<sup>2</sup> + 3x + 2x + 6 = x<sup>2</sup> + 5x + 6</p>`,
      svg: S.draw({ w: 340, h: 230, items: [{ poly: [[60, 30], [210, 30], [210, 180], [60, 180]], fill: C.blueL, color: C.blue }, { poly: [[210, 30], [300, 30], [300, 180], [210, 180]], fill: C.orangeL, color: C.orange }, { poly: [[60, 180], [210, 180], [210, 215], [60, 215]], fill: C.greenL, color: C.green }, { poly: [[210, 180], [300, 180], [300, 215], [210, 215]], fill: '#f3e8ff', color: C.purple }, { text: [135, 110, 'x²'], bold: true, size: 20 }, { text: [255, 110, '3x'], bold: true, size: 18 }, { text: [135, 203, '2x'], bold: true, size: 15 }, { text: [255, 203, '6'], bold: true, size: 15 }, { text: [135, 22, 'x'], color: C.blue, bold: true }, { text: [255, 22, '3'], color: C.orange, bold: true }, { text: [48, 110, 'x'], color: C.blue, bold: true, anchor: 'end' }, { text: [48, 203, '2'], color: C.green, bold: true, anchor: 'end' }] }),
      caption: 'Hình chữ nhật cạnh (x + 3) và (x + 2) gồm bốn ô: x² + 3x + 2x + 6.' },
    { title: 'Đặt tính nhân', html: `<p>Với đa thức nhiều hạng tử, có thể đặt tính theo cột như nhân số:</p>
      <table class="tbl"><tr><td></td><td></td><td>x<sup>2</sup></td><td>− 2x</td><td>+ 1</td></tr><tr><td>×</td><td></td><td></td><td>x</td><td>− 3</td></tr><tr><td></td><td></td><td>−3x<sup>2</sup></td><td>+ 6x</td><td>− 3</td></tr><tr><td></td><td>x<sup>3</sup></td><td>− 2x<sup>2</sup></td><td>+ x</td><td></td></tr><tr><th></th><th>x<sup>3</sup></th><th>− 5x<sup>2</sup></th><th>+ 7x</th><th>− 3</th></tr></table>` }
  ],
  summary: 'Đơn thức × đơn thức: nhân hệ số, cộng số mũ. Đơn thức × đa thức: nhân với từng hạng tử. Đa thức × đa thức: mỗi hạng tử nhân từng hạng tử, rồi thu gọn.',
  examples: [
    { title: 'Nhân đơn thức', problem: 'Tính (−2x<sup>3</sup>) · 5x<sup>4</sup>.', solution: '−10x<sup>7</sup>.' },
    { title: 'Nhân hai nhị thức', problem: 'Tính (2x − 1)(x + 4).', solution: '2x<sup>2</sup> + 8x − x − 4 = 2x<sup>2</sup> + 7x − 4.' },
    { title: 'Rút gọn', problem: 'Rút gọn x(x + 2) − (x − 1)(x + 3).', solution: 'x<sup>2</sup> + 2x − (x<sup>2</sup> + 2x − 3) = 3.' }
  ],
  exercises: [
    { question: 'Tính (x − 3)(x + 3).', hints: ['Nhân từng hạng tử.', '3x và −3x triệt tiêu.'], solution: 'x<sup>2</sup> − 9.' },
    { question: 'Tính (x<sup>2</sup> − 2x + 1)(x − 3) theo hàng ngang và so sánh với kết quả đặt tính ở bước 4.', hints: ['x<sup>2</sup> · (x − 3) − 2x · (x − 3) + 1 · (x − 3).', 'Thu gọn.'], solution: 'x<sup>3</sup> − 5x<sup>2</sup> + 7x − 3 (trùng kết quả).' },
    { question: 'Một mảnh vườn hình chữ nhật có chiều dài 2x + 1 (m), chiều rộng x (m). Viết biểu thức diện tích và tính khi x = 5.', hints: ['S = x(2x + 1).', 'Thay x = 5.'], solution: 'S = 2x<sup>2</sup> + x; khi x = 5: 55 m².' }
  ],
  quiz: [
    { type: 'mcq', q: '3x<sup>2</sup> · (−4x<sup>3</sup>) bằng:', options: ['−12x<sup>6</sup>', '−12x<sup>5</sup>', '−x<sup>5</sup>', '12x<sup>5</sup>'], answer: 1, explain: 'Nhân hệ số, cộng số mũ.' },
    { type: 'short', calc: 'poly([6, 5, 1], 2)', q: '(x + 2)(x + 3) = x<sup>2</sup> + 5x + 6. Tính giá trị tại x = 2.', answer: '20', explain: '4 · 5 = 20.' },
    { type: 'short', calc: '(2 * 1 - 1) * (1 + 4)', q: 'Tính giá trị của (2x − 1)(x + 4) tại x = 1.', answer: '5', explain: '1 · 5 = 5.' },
    { type: 'short', calc: '3', q: 'Rút gọn x(x + 2) − (x − 1)(x + 3), được số nào?', answer: '3', explain: 'x<sup>2</sup> + 2x − x<sup>2</sup> − 2x + 3 = 3.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: (x − 3)(x + 3) = x<sup>2</sup> − 9.', answer: true, explain: 'x<sup>2</sup> + 3x − 3x − 9.' },
    { type: 'short', calc: '5 * (2 * 5 + 1)', q: 'Vườn dài 2x + 1 (m), rộng x (m). Diện tích khi x = 5 là bao nhiêu m²?', unit: 'm²', answer: '55', explain: '5 · 11 = 55.' },
    { type: 'short', calc: '5 + 2', q: 'Bậc của tích (−2x<sup>3</sup>) · 5x<sup>4</sup> bằng bao nhiêu?', answer: '7', explain: '3 + 4 = 7.' },
    { type: 'mcq', q: 'Hệ số của x trong (2x − 1)(x + 4) là:', options: ['8', '7', '−1', '9'], answer: 1, explain: '8x − x = 7x.' }
  ]
});
})();
