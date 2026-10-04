/* Toán 8 – Bài 4. Phép nhân đa thức. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  function rectFig() {
    // hình chữ nhật (x + 3) × (x + 2) chia 4 ô
    var it = [], x0 = 40, y0 = 30, a = 150, b = 70, c = 110, d = 60;
    it.push({ poly: [[x0, y0], [x0 + a, y0], [x0 + a, y0 + c], [x0, y0 + c]], fill: C.blueL });
    it.push({ poly: [[x0 + a, y0], [x0 + a + b, y0], [x0 + a + b, y0 + c], [x0 + a, y0 + c]], fill: C.greenL });
    it.push({ poly: [[x0, y0 + c], [x0 + a, y0 + c], [x0 + a, y0 + c + d], [x0, y0 + c + d]], fill: C.orangeL });
    it.push({ poly: [[x0 + a, y0 + c], [x0 + a + b, y0 + c], [x0 + a + b, y0 + c + d], [x0 + a, y0 + c + d]], fill: C.purpleL });
    it.push({ text: [x0 + a / 2, y0 + c / 2 + 5, 'x · x = x²'], bold: true });
    it.push({ text: [x0 + a + b / 2, y0 + c / 2 + 5, '3x'], bold: true });
    it.push({ text: [x0 + a / 2, y0 + c + d / 2 + 5, '2x'], bold: true });
    it.push({ text: [x0 + a + b / 2, y0 + c + d / 2 + 5, '6'], bold: true });
    it.push({ text: [x0 + a / 2, y0 - 8, 'x'], color: C.blue, bold: true });
    it.push({ text: [x0 + a + b / 2, y0 - 8, '3'], color: C.blue, bold: true });
    it.push({ text: [x0 - 12, y0 + c / 2 + 5, 'x'], color: C.red, bold: true });
    it.push({ text: [x0 - 12, y0 + c + d / 2 + 5, '2'], color: C.red, bold: true });
    it.push({ text: [x0 + (a + b) / 2, y0 + c + d + 24, '(x + 3)(x + 2) = x² + 5x + 6'], bold: true, color: C.ink, size: 14 });
    return S.draw({ w: 300, h: 250, items: it, aria: 'Diện tích hình chữ nhật minh hoạ phép nhân hai đa thức' });
  }
  THCS.registerLesson('toan-8/bai-4', {
    objectives: [
      'Thực hiện được phép nhân đơn thức với đơn thức và đơn thức với đa thức.',
      'Thực hiện được phép nhân đa thức với đa thức.',
      'Vận dụng phép nhân đa thức để rút gọn biểu thức, tính diện tích, thể tích biểu thị bằng đa thức.'
    ],
    intro: 'Tính diện tích một hình chữ nhật có các cạnh là (x + 3) và (x + 2) – đó chính là nhân hai đa thức! Bài này cho em quy tắc để làm phép nhân ấy một cách có hệ thống.',
    steps: [
      { title: 'Nhân đơn thức với đơn thức', html: `<p>Nhân các <b>hệ số</b> với nhau và nhân các <b>phần biến</b> với nhau (cộng số mũ của cùng một biến).</p>
        <p class="math">(−3x<sup>2</sup>y) · (4xy<sup>3</sup>) = (−3 · 4) · (x<sup>2</sup> · x) · (y · y<sup>3</sup>) = −12x<sup>3</sup>y<sup>4</sup></p>
        <div class="box tip">Nhớ: x<sup>m</sup> · x<sup>n</sup> = x<sup>m + n</sup>.</div>` },
      { title: 'Nhân đơn thức với đa thức', html: `<p>Nhân đơn thức với <b>từng hạng tử</b> của đa thức rồi cộng các tích lại (tính chất phân phối).</p>
        <p class="math">2x(x<sup>2</sup> − 3x + 1) = 2x<sup>3</sup> − 6x<sup>2</sup> + 2x</p>
        <div class="box warn">Chú ý dấu: −x(2x − 5) = −2x<sup>2</sup> + 5x.</div>` },
      { title: 'Nhân đa thức với đa thức', html: `<p>Nhân <b>mỗi hạng tử</b> của đa thức này với <b>từng hạng tử</b> của đa thức kia, rồi cộng các tích và thu gọn.</p>
        <p class="math">(x + 3)(x + 2) = x · x + x · 2 + 3 · x + 3 · 2 = x<sup>2</sup> + 5x + 6</p>
        <p>Nếu hai đa thức có m và n hạng tử thì trước khi thu gọn có m · n tích.</p>`, svg: rectFig(), caption: 'Mỗi ô nhỏ là một tích; tổng diện tích bốn ô chính là tích hai đa thức.' },
      { title: 'Trình bày theo cột (khi đa thức một biến)', html: `<p>Có thể sắp xếp theo luỹ thừa giảm dần rồi nhân như nhân số nhiều chữ số:</p>
        <p class="math">(2x − 1)(x<sup>2</sup> + x − 3)<br>= 2x<sup>3</sup> + 2x<sup>2</sup> − 6x − x<sup>2</sup> − x + 3<br>= 2x<sup>3</sup> + x<sup>2</sup> − 7x + 3</p>` },
      { title: 'Tính chất và ứng dụng', html: `<p>Phép nhân đa thức có tính giao hoán, kết hợp và phân phối với phép cộng. Nhờ vậy ta có thể rút gọn biểu thức rồi mới thay số, hoặc chứng minh một biểu thức không phụ thuộc vào biến.</p>
        <p>Ví dụ: (x + 1)(x − 1) − x<sup>2</sup> = x<sup>2</sup> − 1 − x<sup>2</sup> = −1 với mọi x.</p>` }
    ],
    summary: 'Đơn thức × đơn thức: nhân hệ số, cộng số mũ. Đơn thức × đa thức và đa thức × đa thức: nhân từng hạng tử với từng hạng tử, rồi thu gọn.',
    examples: [
      { title: 'Nhân đơn thức với đa thức', problem: 'Tính −3xy(2x<sup>2</sup> − xy + 4y).', solution: '−3xy · 2x<sup>2</sup> = −6x<sup>3</sup>y; −3xy · (−xy) = 3x<sup>2</sup>y<sup>2</sup>; −3xy · 4y = −12xy<sup>2</sup>.<br>Kết quả: −6x<sup>3</sup>y + 3x<sup>2</sup>y<sup>2</sup> − 12xy<sup>2</sup>.' },
      { title: 'Nhân hai đa thức', problem: 'Tính (x − 2y)(3x + y).', solution: '= 3x<sup>2</sup> + xy − 6xy − 2y<sup>2</sup> = 3x<sup>2</sup> − 5xy − 2y<sup>2</sup>.' },
      { title: 'Chứng minh giá trị không phụ thuộc biến', problem: 'Chứng minh biểu thức A = (x + 2)(x − 5) − x(x − 3) không phụ thuộc vào x.', solution: '(x + 2)(x − 5) = x<sup>2</sup> − 5x + 2x − 10 = x<sup>2</sup> − 3x − 10; x(x − 3) = x<sup>2</sup> − 3x.<br>A = x<sup>2</sup> − 3x − 10 − x<sup>2</sup> + 3x = −10 với mọi x.' }
    ],
    exercises: [
      { question: 'Tính (2x<sup>2</sup>y) · (−5xy<sup>2</sup>) · ({{1|10}}x).', hints: ['Nhân các hệ số: 2 · (−5) · {{1|10}}.', 'Cộng số mũ: x có 2 + 1 + 1; y có 1 + 2.'], solution: '−x<sup>4</sup>y<sup>3</sup>.' },
      { question: 'Rút gọn B = (x + 4)(x − 1) − (x − 2)(x + 3).', hints: ['(x + 4)(x − 1) = x<sup>2</sup> + 3x − 4.', '(x − 2)(x + 3) = x<sup>2</sup> + x − 6.'], solution: 'B = x<sup>2</sup> + 3x − 4 − x<sup>2</sup> − x + 6 = 2x + 2.' },
      { question: 'Một hình hộp chữ nhật có ba kích thước x, (x + 1) và (x + 2) (cm). Viết đa thức biểu thị thể tích và tính thể tích khi x = 3.', hints: ['V = x(x + 1)(x + 2). Tính (x + 1)(x + 2) trước.', '(x + 1)(x + 2) = x<sup>2</sup> + 3x + 2, rồi nhân với x.'], solution: 'V = x<sup>3</sup> + 3x<sup>2</sup> + 2x (cm<sup>3</sup>). Khi x = 3: V = 27 + 27 + 6 = 60 cm<sup>3</sup>.' }
    ],
    quiz: [
      { type: 'mcq', q: '(−2x<sup>3</sup>) · (3x<sup>2</sup>) bằng:', options: ['−6x<sup>5</sup>', '−6x<sup>6</sup>', '6x<sup>5</sup>', 'x<sup>5</sup>'], answer: 0, explain: '(−2 · 3)x<sup>3 + 2</sup> = −6x<sup>5</sup>.' },
      { type: 'mcq', q: 'x(x − 4) bằng:', options: ['x<sup>2</sup> − 4', 'x<sup>2</sup> − 4x', '2x − 4', 'x<sup>2</sup> + 4x'], answer: 1, explain: 'x · x − x · 4 = x<sup>2</sup> − 4x.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: (x + 1)(x + 2) = x<sup>2</sup> + 2.', answer: false, explain: 'Thiếu các tích chéo: (x + 1)(x + 2) = x<sup>2</sup> + 3x + 2.' },
      { type: 'short', calc: '(-2) + 3', q: 'Khai triển (x − 2)(x + 3) = x<sup>2</sup> + bx − 6. Tìm b.', answer: '1', explain: 'x · 3 + (−2) · x = x, nên b = 1.' },
      { type: 'mcq', q: 'Kết quả của (2x − 1)(x + 5) là:', options: ['2x<sup>2</sup> + 9x − 5', '2x<sup>2</sup> + 11x − 5', '2x<sup>2</sup> − 9x − 5', '2x<sup>2</sup> + 9x + 5'], answer: 0, explain: '2x<sup>2</sup> + 10x − x − 5 = 2x<sup>2</sup> + 9x − 5.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: (x + 3)(x − 3) − x<sup>2</sup> có giá trị bằng −9 với mọi x.', answer: true, explain: 'x<sup>2</sup> − 9 − x<sup>2</sup> = −9.' },
      { type: 'short', calc: '(3 + 3) * (3 + 2)', q: 'Tính diện tích (cm²) hình chữ nhật có các cạnh (x + 3) cm và (x + 2) cm khi x = 3.', unit: 'cm²', answer: '30', explain: 'x<sup>2</sup> + 5x + 6 tại x = 3: 9 + 15 + 6 = 30 (hoặc 6 · 5 = 30).' },
      { type: 'short', calc: '3 * 3', q: 'Tích (x<sup>2</sup> + x + 1)(x − 1 + y) trước khi thu gọn gồm bao nhiêu tích đơn thức?', answer: '9', explain: 'Hai đa thức đều có 3 hạng tử nên có 3 · 3 = 9 tích.' }
    ]
  });
})();
