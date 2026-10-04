/* Toán 8 – Bài 7. Lập phương của một tổng. Lập phương của một hiệu. Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('toan-8/bai-7', {
  objectives: [
    'Nhận biết và phát biểu được hằng đẳng thức lập phương của một tổng, lập phương của một hiệu.',
    'Khai triển được (A + B)<sup>3</sup>, (A − B)<sup>3</sup> và viết gọn biểu thức có dạng khai triển về lập phương.',
    'Vận dụng để tính nhanh và rút gọn biểu thức.'
  ],
  intro: 'Khối lập phương cạnh (a + b) có thể được cắt thành 8 khối nhỏ. Đếm thể tích các khối ấy, ta được hằng đẳng thức lập phương của một tổng.',
  steps: [
    { title: 'Lập phương của một tổng', html: `<div class="box key">(A + B)<sup>3</sup> = A<sup>3</sup> + 3A<sup>2</sup>B + 3AB<sup>2</sup> + B<sup>3</sup></div>
      <p>Có được bằng cách nhân (A + B)<sup>2</sup> với (A + B): (A<sup>2</sup> + 2AB + B<sup>2</sup>)(A + B).</p>
      <p class="math">(x + 2)<sup>3</sup> = x<sup>3</sup> + 6x<sup>2</sup> + 12x + 8</p>` },
    { title: 'Lập phương của một hiệu', html: `<div class="box key">(A − B)<sup>3</sup> = A<sup>3</sup> − 3A<sup>2</sup>B + 3AB<sup>2</sup> − B<sup>3</sup></div>
      <p>Dấu các hạng tử <b>đan xen</b> +, −, +, −.</p>
      <p class="math">(x − 1)<sup>3</sup> = x<sup>3</sup> − 3x<sup>2</sup> + 3x − 1</p>` },
    { title: 'Hệ số 1 – 3 – 3 – 1', html: `<p>Hệ số của các hạng tử trong khai triển luôn là <b>1, 3, 3, 1</b>; số mũ của A giảm dần 3 → 0, số mũ của B tăng dần 0 → 3.</p>
      <div class="box tip">Mỗi hạng tử đều có tổng số mũ của A và B bằng 3 – dùng để tự kiểm tra.</div>` },
    { title: 'Nhận dạng để viết gọn', html: `<p>Biểu thức có 4 hạng tử, hai đầu là lập phương, hệ số giữa gợi “3 · A<sup>2</sup> · B”, có thể viết gọn:</p>
      <p class="math">8x<sup>3</sup> + 12x<sup>2</sup> + 6x + 1 = (2x)<sup>3</sup> + 3(2x)<sup>2</sup> · 1 + 3 · 2x · 1<sup>2</sup> + 1<sup>3</sup> = (2x + 1)<sup>3</sup></p>` },
    { title: 'Tính nhanh', html: `<p>101<sup>3</sup> = (100 + 1)<sup>3</sup> = 1 000 000 + 30 000 + 300 + 1 = 1 030 301.</p>
      <p>Giá trị x<sup>3</sup> − 6x<sup>2</sup> + 12x − 8 tại x = 12 bằng (12 − 2)<sup>3</sup> = 1000.</p>` }
  ],
  summary: '(A + B)³ = A³ + 3A²B + 3AB² + B³; (A − B)³ = A³ − 3A²B + 3AB² − B³ (hệ số 1, 3, 3, 1).',
  examples: [
    { title: 'Khai triển', problem: 'Khai triển (2x + y)<sup>3</sup>.', solution: '(2x)<sup>3</sup> + 3(2x)<sup>2</sup>y + 3 · 2x · y<sup>2</sup> + y<sup>3</sup> = 8x<sup>3</sup> + 12x<sup>2</sup>y + 6xy<sup>2</sup> + y<sup>3</sup>.' },
    { title: 'Viết gọn', problem: 'Viết x<sup>3</sup> − 9x<sup>2</sup> + 27x − 27 dưới dạng lập phương.', solution: 'x<sup>3</sup> − 3 · x<sup>2</sup> · 3 + 3 · x · 3<sup>2</sup> − 3<sup>3</sup> = (x − 3)<sup>3</sup>.' },
    { title: 'Tính giá trị', problem: 'Tính giá trị x<sup>3</sup> + 3x<sup>2</sup> + 3x + 1 tại x = 99.', solution: 'Biểu thức bằng (x + 1)<sup>3</sup> = 100<sup>3</sup> = 1 000 000.' }
  ],
  exercises: [
    { question: 'Khai triển (x − 2y)<sup>3</sup>.', hints: ['A = x, B = 2y.', '3A<sup>2</sup>B = 6x<sup>2</sup>y; 3AB<sup>2</sup> = 12xy<sup>2</sup>; B<sup>3</sup> = 8y<sup>3</sup>.'], solution: 'x<sup>3</sup> − 6x<sup>2</sup>y + 12xy<sup>2</sup> − 8y<sup>3</sup>.' },
    { question: 'Rút gọn (x + 1)<sup>3</sup> − (x − 1)<sup>3</sup>.', hints: ['Khai triển cả hai lập phương.', 'Các hạng tử x<sup>3</sup> và 3x triệt tiêu.'], solution: '6x<sup>2</sup> + 2.' },
    { question: 'Tính nhanh giá trị của 27x<sup>3</sup> − 27x<sup>2</sup> + 9x − 1 tại x = 7.', hints: ['Biểu thức bằng (3x − 1)<sup>3</sup>.', '3 · 7 − 1 = 20.'], solution: '20<sup>3</sup> = 8000.' }
  ],
  quiz: [
    { type: 'mcq', q: '(a + 1)<sup>3</sup> bằng:', options: ['a<sup>3</sup> + 1', 'a<sup>3</sup> + 3a<sup>2</sup> + 3a + 1', 'a<sup>3</sup> + 3a + 1', 'a<sup>3</sup> + a<sup>2</sup> + a + 1'], answer: 1, explain: 'Hệ số 1, 3, 3, 1.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: (x − 2)<sup>3</sup> = x<sup>3</sup> − 8.', answer: false, explain: 'Thiếu −6x<sup>2</sup> + 12x.' },
    { type: 'mcq', q: 'Hệ số của x trong khai triển (x − 3)<sup>3</sup> là:', options: ['27', '−27', '9', '−9'], answer: 0, explain: '3 · x · 3<sup>2</sup> = 27x.' },
    { type: 'short', calc: '(12 - 2) ** 3', q: 'Tính giá trị x<sup>3</sup> − 6x<sup>2</sup> + 12x − 8 tại x = 12.', answer: '1000', explain: '(x − 2)<sup>3</sup> = 10<sup>3</sup>.' },
    { type: 'mcq', q: '8 + 12y + 6y<sup>2</sup> + y<sup>3</sup> bằng:', options: ['(2 + y)<sup>3</sup>', '(8 + y)<sup>3</sup>', '(2 + 2y)<sup>3</sup>', '(4 + y)<sup>3</sup>'], answer: 0, explain: '2<sup>3</sup> + 3 · 2<sup>2</sup>y + 3 · 2 · y<sup>2</sup> + y<sup>3</sup>.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: (−A − B)<sup>3</sup> = −(A + B)<sup>3</sup>.', answer: true, explain: '(−1)<sup>3</sup> = −1 nên (−(A + B))<sup>3</sup> = −(A + B)<sup>3</sup>.' },
    { type: 'short', calc: '(99 + 1) ** 3', q: 'Tính giá trị x<sup>3</sup> + 3x<sup>2</sup> + 3x + 1 tại x = 99.', answer: '1000000', explain: '(x + 1)<sup>3</sup> = 100<sup>3</sup>.' },
    { type: 'short', calc: '3 * 2 * 2', q: 'Trong khai triển (2x + 1)<sup>3</sup>, hệ số của x<sup>2</sup> là bao nhiêu?', answer: '12', explain: '3 · (2x)<sup>2</sup> · 1 = 12x<sup>2</sup>.' }
  ]
});
