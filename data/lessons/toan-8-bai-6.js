/* Toán 8 – Bài 6. Hiệu hai bình phương. Bình phương của một tổng hay một hiệu. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  function squareFig() {
    var x0 = 50, y0 = 30, a = 140, b = 70, it = [];
    it.push({ poly: [[x0, y0], [x0 + a, y0], [x0 + a, y0 + a], [x0, y0 + a]], fill: C.blueL });
    it.push({ poly: [[x0 + a, y0], [x0 + a + b, y0], [x0 + a + b, y0 + a], [x0 + a, y0 + a]], fill: C.greenL });
    it.push({ poly: [[x0, y0 + a], [x0 + a, y0 + a], [x0 + a, y0 + a + b], [x0, y0 + a + b]], fill: C.greenL });
    it.push({ poly: [[x0 + a, y0 + a], [x0 + a + b, y0 + a], [x0 + a + b, y0 + a + b], [x0 + a, y0 + a + b]], fill: C.orangeL });
    it.push({ text: [x0 + a / 2, y0 + a / 2 + 6, 'a²'], bold: true, size: 18 });
    it.push({ text: [x0 + a + b / 2, y0 + a / 2 + 6, 'ab'], bold: true });
    it.push({ text: [x0 + a / 2, y0 + a + b / 2 + 6, 'ab'], bold: true });
    it.push({ text: [x0 + a + b / 2, y0 + a + b / 2 + 6, 'b²'], bold: true });
    it.push({ text: [x0 + a / 2, y0 - 8, 'a'], color: C.blue, bold: true });
    it.push({ text: [x0 + a + b / 2, y0 - 8, 'b'], color: C.blue, bold: true });
    it.push({ text: [x0 - 12, y0 + a / 2 + 5, 'a'], color: C.blue, bold: true });
    it.push({ text: [x0 - 12, y0 + a + b / 2 + 5, 'b'], color: C.blue, bold: true });
    it.push({ text: [x0 + (a + b) / 2, y0 + a + b + 26, '(a + b)² = a² + 2ab + b²'], bold: true, size: 14 });
    return S.draw({ w: 310, h: 280, items: it, aria: 'Hình vuông cạnh a + b chia thành bốn phần' });
  }
  THCS.registerLesson('toan-8/bai-6', {
    objectives: [
      'Nhận biết và phát biểu được các hằng đẳng thức: bình phương của một tổng, bình phương của một hiệu, hiệu hai bình phương.',
      'Vận dụng các hằng đẳng thức để khai triển hoặc viết gọn biểu thức.',
      'Vận dụng hằng đẳng thức để tính nhanh, tính nhẩm giá trị số.'
    ],
    intro: 'Có những phép nhân đa thức lặp đi lặp lại nhiều đến mức người ta ghi nhớ sẵn kết quả. Những đẳng thức ấy được gọi là “hằng đẳng thức đáng nhớ”.',
    steps: [
      { title: 'Hằng đẳng thức là gì?', html: `<p>Một đẳng thức mà hai vế luôn nhận cùng một giá trị <b>với mọi giá trị của biến</b> được gọi là một <b>hằng đẳng thức</b>.</p>
        <p>Ví dụ: a(b + c) = ab + ac là hằng đẳng thức; còn 2x + 1 = 5 chỉ đúng khi x = 2 nên không phải hằng đẳng thức.</p>` },
      { title: 'Bình phương của một tổng', html: `<div class="box key">(A + B)<sup>2</sup> = A<sup>2</sup> + 2AB + B<sup>2</sup></div>
        <p>Đọc: bình phương một tổng bằng bình phương số thứ nhất, cộng hai lần tích, cộng bình phương số thứ hai.</p>
        <p class="math">(x + 3)<sup>2</sup> = x<sup>2</sup> + 6x + 9</p>`, svg: squareFig(), caption: 'Diện tích hình vuông lớn bằng tổng diện tích bốn phần.' },
      { title: 'Bình phương của một hiệu', html: `<div class="box key">(A − B)<sup>2</sup> = A<sup>2</sup> − 2AB + B<sup>2</sup></div>
        <p class="math">(2x − 1)<sup>2</sup> = 4x<sup>2</sup> − 4x + 1</p>
        <div class="box warn">(A − B)<sup>2</sup> ≠ A<sup>2</sup> − B<sup>2</sup>. Không được quên hạng tử −2AB.</div>` },
      { title: 'Hiệu hai bình phương', html: `<div class="box key">A<sup>2</sup> − B<sup>2</sup> = (A − B)(A + B)</div>
        <p class="math">x<sup>2</sup> − 16 = (x − 4)(x + 4); &nbsp; (3y + 2)(3y − 2) = 9y<sup>2</sup> − 4</p>` },
      { title: 'Tính nhanh bằng hằng đẳng thức', html: `<ul><li>51<sup>2</sup> = (50 + 1)<sup>2</sup> = 2500 + 100 + 1 = 2601.</li><li>99<sup>2</sup> = (100 − 1)<sup>2</sup> = 10000 − 200 + 1 = 9801.</li><li>48 · 52 = (50 − 2)(50 + 2) = 2500 − 4 = 2496.</li></ul>` }
    ],
    summary: '(A + B)² = A² + 2AB + B²; (A − B)² = A² − 2AB + B²; A² − B² = (A − B)(A + B).',
    examples: [
      { title: 'Khai triển', problem: 'Khai triển: a) (3x + 2y)<sup>2</sup>; b) (x − {{1|2}})<sup>2</sup>.', solution: 'a) 9x<sup>2</sup> + 12xy + 4y<sup>2</sup>.<br>b) x<sup>2</sup> − x + {{1|4}} (vì 2 · x · {{1|2}} = x).' },
      { title: 'Viết gọn thành bình phương', problem: 'Viết x<sup>2</sup> − 10x + 25 dưới dạng bình phương của một hiệu.', solution: 'x<sup>2</sup> − 2 · x · 5 + 5<sup>2</sup> = (x − 5)<sup>2</sup>.' },
      { title: 'Tính nhanh', problem: 'Tính nhanh: 102 · 98 và 201<sup>2</sup>.', solution: '102 · 98 = (100 + 2)(100 − 2) = 10000 − 4 = 9996.<br>201<sup>2</sup> = (200 + 1)<sup>2</sup> = 40000 + 400 + 1 = 40401.' }
    ],
    exercises: [
      { question: 'Khai triển (2a − 3b)<sup>2</sup>.', hints: ['A = 2a, B = 3b, dùng (A − B)<sup>2</sup>.', '2AB = 2 · 2a · 3b = 12ab.'], solution: '4a<sup>2</sup> − 12ab + 9b<sup>2</sup>.' },
      { question: 'Rút gọn (x + 4)<sup>2</sup> − (x − 4)<sup>2</sup>.', hints: ['Khai triển từng bình phương.', 'Hoặc dùng hiệu hai bình phương với A = x + 4, B = x − 4.'], solution: '(x<sup>2</sup> + 8x + 16) − (x<sup>2</sup> − 8x + 16) = 16x.' },
      { question: 'Tính nhanh 73<sup>2</sup> − 27<sup>2</sup>.', hints: ['Hiệu hai bình phương: (73 − 27)(73 + 27).', '46 · 100.'], solution: '4600.' }
    ],
    quiz: [
      { type: 'mcq', q: '(x + 5)<sup>2</sup> bằng:', options: ['x<sup>2</sup> + 25', 'x<sup>2</sup> + 5x + 25', 'x<sup>2</sup> + 10x + 25', 'x<sup>2</sup> + 10x + 5'], answer: 2, explain: 'x<sup>2</sup> + 2 · 5 · x + 25.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: (a − b)<sup>2</sup> = a<sup>2</sup> − b<sup>2</sup> với mọi a, b.', answer: false, explain: '(a − b)<sup>2</sup> = a<sup>2</sup> − 2ab + b<sup>2</sup>.' },
      { type: 'mcq', q: 'x<sup>2</sup> − 49 bằng:', options: ['(x − 7)<sup>2</sup>', '(x − 7)(x + 7)', '(x + 7)<sup>2</sup>', '(x − 49)(x + 1)'], answer: 1, explain: 'Hiệu hai bình phương với B = 7.' },
      { type: 'short', calc: '99 * 99', q: 'Tính nhanh 99<sup>2</sup>.', answer: '9801', explain: '(100 − 1)<sup>2</sup> = 10000 − 200 + 1.' },
      { type: 'mcq', q: 'Biểu thức 4x<sup>2</sup> + 4x + 1 viết gọn là:', options: ['(2x + 1)<sup>2</sup>', '(4x + 1)<sup>2</sup>', '(2x − 1)<sup>2</sup>', '(x + 2)<sup>2</sup>'], answer: 0, explain: '(2x)<sup>2</sup> + 2 · 2x · 1 + 1<sup>2</sup>.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: (3y + 2)(3y − 2) = 9y<sup>2</sup> − 4.', answer: true, explain: '(3y)<sup>2</sup> − 2<sup>2</sup>.' },
      { type: 'short', calc: '48 * 52', q: 'Tính nhanh 48 · 52.', answer: '2496', explain: '(50 − 2)(50 + 2) = 2500 − 4.' },
      { type: 'short', calc: '4 + 4', q: 'Khai triển (x + 2y)<sup>2</sup> − (x − 2y)<sup>2</sup> = kxy. Tìm k.', answer: '8', explain: '(x<sup>2</sup> + 4xy + 4y<sup>2</sup>) − (x<sup>2</sup> − 4xy + 4y<sup>2</sup>) = 8xy.' }
    ]
  });
})();
