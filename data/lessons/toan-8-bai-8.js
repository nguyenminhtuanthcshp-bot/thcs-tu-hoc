/* Toán 8 – Bài 8. Tổng và hiệu hai lập phương. Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('toan-8/bai-8', {
  objectives: [
    'Nhận biết và phát biểu được hằng đẳng thức tổng hai lập phương, hiệu hai lập phương.',
    'Viết được A<sup>3</sup> + B<sup>3</sup>, A<sup>3</sup> − B<sup>3</sup> dưới dạng tích và ngược lại.',
    'Vận dụng bảy hằng đẳng thức đáng nhớ để rút gọn và tính nhanh.'
  ],
  intro: 'Hai hằng đẳng thức cuối cùng giúp biến một tổng (hay hiệu) các lập phương thành tích – rất có ích khi rút gọn phân thức ở chương VI.',
  steps: [
    { title: 'Tổng hai lập phương', html: `<div class="box key">A<sup>3</sup> + B<sup>3</sup> = (A + B)(A<sup>2</sup> − AB + B<sup>2</sup>)</div>
      <p>Biểu thức A<sup>2</sup> − AB + B<sup>2</sup> gọi là <b>bình phương thiếu</b> của hiệu A − B (thiếu hệ số 2 ở hạng tử giữa).</p>
      <p class="math">x<sup>3</sup> + 8 = (x + 2)(x<sup>2</sup> − 2x + 4)</p>` },
    { title: 'Hiệu hai lập phương', html: `<div class="box key">A<sup>3</sup> − B<sup>3</sup> = (A − B)(A<sup>2</sup> + AB + B<sup>2</sup>)</div>
      <p class="math">27y<sup>3</sup> − 1 = (3y − 1)(9y<sup>2</sup> + 3y + 1)</p>
      <div class="box tip">Mẹo nhớ dấu: dấu trong ngoặc thứ nhất <b>giống</b> dấu của vế trái; hạng tử AB trong ngoặc thứ hai mang dấu <b>ngược lại</b>.</div>` },
    { title: 'Phân biệt với lập phương của tổng', html: `<table class="tbl"><tr><th>Biểu thức</th><th>Là</th></tr>
      <tr><td>(A + B)<sup>3</sup></td><td>A<sup>3</sup> + 3A<sup>2</sup>B + 3AB<sup>2</sup> + B<sup>3</sup></td></tr>
      <tr><td>A<sup>3</sup> + B<sup>3</sup></td><td>(A + B)(A<sup>2</sup> − AB + B<sup>2</sup>)</td></tr></table>
      <p>Hai biểu thức này <b>khác nhau</b>: (1 + 1)<sup>3</sup> = 8 còn 1<sup>3</sup> + 1<sup>3</sup> = 2.</p>` },
    { title: 'Bảy hằng đẳng thức đáng nhớ', html: `<ol><li>(A + B)<sup>2</sup> = A<sup>2</sup> + 2AB + B<sup>2</sup></li><li>(A − B)<sup>2</sup> = A<sup>2</sup> − 2AB + B<sup>2</sup></li><li>A<sup>2</sup> − B<sup>2</sup> = (A − B)(A + B)</li><li>(A + B)<sup>3</sup> = A<sup>3</sup> + 3A<sup>2</sup>B + 3AB<sup>2</sup> + B<sup>3</sup></li><li>(A − B)<sup>3</sup> = A<sup>3</sup> − 3A<sup>2</sup>B + 3AB<sup>2</sup> − B<sup>3</sup></li><li>A<sup>3</sup> + B<sup>3</sup> = (A + B)(A<sup>2</sup> − AB + B<sup>2</sup>)</li><li>A<sup>3</sup> − B<sup>3</sup> = (A − B)(A<sup>2</sup> + AB + B<sup>2</sup>)</li></ol>` }
  ],
  summary: 'A³ + B³ = (A + B)(A² − AB + B²); A³ − B³ = (A − B)(A² + AB + B²). Không nhầm với (A ± B)³.',
  examples: [
    { title: 'Viết thành tích', problem: 'Viết 8x<sup>3</sup> + 27 dưới dạng tích.', solution: '(2x)<sup>3</sup> + 3<sup>3</sup> = (2x + 3)(4x<sup>2</sup> − 6x + 9).' },
    { title: 'Viết gọn tích', problem: 'Viết gọn (x − 4)(x<sup>2</sup> + 4x + 16).', solution: 'Đây là dạng (A − B)(A<sup>2</sup> + AB + B<sup>2</sup>) với A = x, B = 4, nên bằng x<sup>3</sup> − 64.' },
    { title: 'Rút gọn', problem: 'Rút gọn P = (x + 1)(x<sup>2</sup> − x + 1) − (x − 1)(x<sup>2</sup> + x + 1).', solution: 'P = (x<sup>3</sup> + 1) − (x<sup>3</sup> − 1) = 2.' }
  ],
  exercises: [
    { question: 'Viết a<sup>3</sup> − 125 dưới dạng tích.', hints: ['125 = 5<sup>3</sup>.', 'Dùng A<sup>3</sup> − B<sup>3</sup> với A = a, B = 5.'], solution: '(a − 5)(a<sup>2</sup> + 5a + 25).' },
    { question: 'Viết gọn (2y + 1)(4y<sup>2</sup> − 2y + 1).', hints: ['Nhận dạng A = 2y, B = 1 và ngoặc sau là bình phương thiếu của hiệu.', 'Kết quả là A<sup>3</sup> + B<sup>3</sup>.'], solution: '8y<sup>3</sup> + 1.' },
    { question: 'Tính giá trị của (x − 2)(x<sup>2</sup> + 2x + 4) − x<sup>3</sup> tại x = 2026.', hints: ['(x − 2)(x<sup>2</sup> + 2x + 4) = x<sup>3</sup> − 8.', 'x<sup>3</sup> − 8 − x<sup>3</sup> không phụ thuộc x.'], solution: '−8 (với mọi x).' }
  ],
  quiz: [
    { type: 'mcq', q: 'x<sup>3</sup> + 1 bằng:', options: ['(x + 1)<sup>3</sup>', '(x + 1)(x<sup>2</sup> − x + 1)', '(x + 1)(x<sup>2</sup> + x + 1)', '(x − 1)(x<sup>2</sup> + x + 1)'], answer: 1, explain: 'Tổng hai lập phương với B = 1.' },
    { type: 'mcq', q: '(y − 3)(y<sup>2</sup> + 3y + 9) bằng:', options: ['y<sup>3</sup> + 27', 'y<sup>3</sup> − 9', 'y<sup>3</sup> − 27', '(y − 3)<sup>3</sup>'], answer: 2, explain: 'Hiệu hai lập phương: y<sup>3</sup> − 3<sup>3</sup>.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: A<sup>3</sup> + B<sup>3</sup> = (A + B)<sup>3</sup> với mọi A, B.', answer: false, explain: 'Chẳng hạn A = B = 1: 2 ≠ 8.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: 8x<sup>3</sup> − 1 = (2x − 1)(4x<sup>2</sup> + 2x + 1).', answer: true, explain: 'A = 2x, B = 1.' },
    { type: 'short', calc: '2026 ** 3 - 8 - 2026 ** 3', q: 'Tính giá trị của (x − 2)(x<sup>2</sup> + 2x + 4) − x<sup>3</sup> tại x = 2026.', answer: '-8', answerText: '−8', explain: 'Biểu thức luôn bằng −8.' },
    { type: 'mcq', q: 'Bình phương thiếu của hiệu x − 5 là:', options: ['x<sup>2</sup> − 10x + 25', 'x<sup>2</sup> + 5x + 25', 'x<sup>2</sup> − 5x + 25', 'x<sup>2</sup> + 10x + 25'], answer: 2, explain: 'A<sup>2</sup> − AB + B<sup>2</sup> = x<sup>2</sup> − 5x + 25.' },
    { type: 'short', calc: '(1 + 1) - (1 - 1) + 0', q: 'Rút gọn (x + 1)(x<sup>2</sup> − x + 1) − (x − 1)(x<sup>2</sup> + x + 1). Kết quả bằng số nào?', answer: '2', explain: '(x<sup>3</sup> + 1) − (x<sup>3</sup> − 1) = 2.' },
    { type: 'short', calc: '(9 + 1) * (81 - 9 + 1)', q: 'Tính giá trị (x + 1)(x<sup>2</sup> − x + 1) tại x = 9.', answer: '730', explain: '= x<sup>3</sup> + 1 = 729 + 1 = 730.' }
  ]
});
