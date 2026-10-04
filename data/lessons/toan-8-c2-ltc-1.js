/* Toán 8 – Luyện tập chung (sau Bài 8). Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('toan-8/c2-ltc-1', {
  objectives: [
    'Nhận dạng đúng từng hằng đẳng thức trong một biểu thức cho trước.',
    'Vận dụng linh hoạt bảy hằng đẳng thức để khai triển, viết gọn và rút gọn biểu thức.',
    'Tính nhanh giá trị số và giá trị biểu thức nhờ hằng đẳng thức.'
  ],
  intro: 'Biết công thức mới là một nửa; nhận ra công thức nằm “ẩn” trong biểu thức mới là kĩ năng quan trọng. Buổi luyện tập này rèn con mắt nhận dạng ấy.',
  steps: [
    { title: 'Nhận dạng theo số hạng tử', html: `<ul><li><b>2 hạng tử</b> dạng A<sup>2</sup> − B<sup>2</sup>, A<sup>3</sup> ± B<sup>3</sup> → viết thành tích.</li>
      <li><b>3 hạng tử</b> có hai bình phương và một “2AB” → (A ± B)<sup>2</sup>.</li>
      <li><b>4 hạng tử</b> có hai lập phương ở hai đầu → (A ± B)<sup>3</sup>.</li></ul>` },
    { title: 'Xác định A và B', html: `<p>Viết các hạng tử đầu – cuối dưới dạng bình phương hoặc lập phương: 9x<sup>2</sup> = (3x)<sup>2</sup>, 8y<sup>3</sup> = (2y)<sup>3</sup>, {{1|4}} = ({{1|2}})<sup>2</sup>.</p>
      <p>Sau đó kiểm tra hạng tử giữa có đúng bằng 2AB (hoặc 3A<sup>2</sup>B, 3AB<sup>2</sup>) không.</p>` },
    { title: 'Rút gọn biểu thức có nhiều hằng đẳng thức', html: `<p class="math">(x + 2)<sup>2</sup> − (x − 2)(x + 2) = x<sup>2</sup> + 4x + 4 − (x<sup>2</sup> − 4) = 4x + 8</p>
      <div class="box warn">Khi trừ một hằng đẳng thức, hãy giữ nguyên kết quả khai triển trong ngoặc rồi mới bỏ ngoặc.</div>` },
    { title: 'Giá trị nhỏ nhất của biểu thức bậc hai', html: `<p>Vì (A)<sup>2</sup> ≥ 0 nên x<sup>2</sup> − 6x + 10 = (x − 3)<sup>2</sup> + 1 ≥ 1. Giá trị nhỏ nhất là 1, đạt khi x = 3.</p>` }
  ],
  summary: 'Đếm số hạng tử → đoán hằng đẳng thức → xác định A, B → kiểm tra hạng tử giữa.',
  examples: [
    { title: 'Viết gọn', problem: 'Viết gọn 9x<sup>2</sup> − 12xy + 4y<sup>2</sup>.', solution: '(3x)<sup>2</sup> − 2 · 3x · 2y + (2y)<sup>2</sup> = (3x − 2y)<sup>2</sup>.' },
    { title: 'Rút gọn', problem: 'Rút gọn (a + b)<sup>3</sup> − (a − b)<sup>3</sup>.', solution: '(a<sup>3</sup> + 3a<sup>2</sup>b + 3ab<sup>2</sup> + b<sup>3</sup>) − (a<sup>3</sup> − 3a<sup>2</sup>b + 3ab<sup>2</sup> − b<sup>3</sup>) = 6a<sup>2</sup>b + 2b<sup>3</sup>.' },
    { title: 'Giá trị nhỏ nhất', problem: 'Tìm giá trị nhỏ nhất của Q = x<sup>2</sup> + 4x + 7.', solution: 'Q = (x + 2)<sup>2</sup> + 3 ≥ 3. Giá trị nhỏ nhất bằng 3 khi x = −2.' }
  ],
  exercises: [
    { question: 'Tính nhanh: 35<sup>2</sup> + 30 · 35 + 15<sup>2</sup>.', hints: ['30 · 35 = 2 · 35 · 15.', 'Biểu thức là (35 + 15)<sup>2</sup>.'], solution: '50<sup>2</sup> = 2500.' },
    { question: 'Rút gọn (2x − 1)<sup>2</sup> + (2x + 1)<sup>2</sup> − 8x<sup>2</sup>.', hints: ['(2x − 1)<sup>2</sup> = 4x<sup>2</sup> − 4x + 1.', '(2x + 1)<sup>2</sup> = 4x<sup>2</sup> + 4x + 1.'], solution: '2.' },
    { question: 'Chứng minh x<sup>2</sup> − 2x + 3 &gt; 0 với mọi x.', hints: ['Tách 3 = 1 + 2.', 'x<sup>2</sup> − 2x + 1 = (x − 1)<sup>2</sup> ≥ 0.'], solution: 'x<sup>2</sup> − 2x + 3 = (x − 1)<sup>2</sup> + 2 ≥ 2 &gt; 0.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Biểu thức x<sup>2</sup> − 8x + 16 bằng:', options: ['(x − 4)<sup>2</sup>', '(x + 4)<sup>2</sup>', '(x − 8)<sup>2</sup>', '(x − 4)(x + 4)'], answer: 0, explain: '2 · x · 4 = 8x.' },
    { type: 'mcq', q: 'Biểu thức nào là lập phương của một hiệu?', options: ['x<sup>3</sup> − 1', 'x<sup>3</sup> − 3x<sup>2</sup> + 3x − 1', 'x<sup>3</sup> + 3x<sup>2</sup> + 3x + 1', 'x<sup>3</sup> − x<sup>2</sup> + x − 1'], answer: 1, explain: '(x − 1)<sup>3</sup>.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: (x + 2)<sup>2</sup> − (x − 2)(x + 2) = 4x + 8.', answer: true, explain: 'x<sup>2</sup> + 4x + 4 − x<sup>2</sup> + 4.' },
    { type: 'short', calc: '(35 + 15) ** 2', q: 'Tính nhanh 35<sup>2</sup> + 30 · 35 + 15<sup>2</sup>.', answer: '2500', explain: '(35 + 15)<sup>2</sup>.' },
    { type: 'short', calc: '3', q: 'Giá trị nhỏ nhất của x<sup>2</sup> + 4x + 7 là bao nhiêu?', answer: '3', explain: '(x + 2)<sup>2</sup> + 3 ≥ 3.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: 4x<sup>2</sup> + 2x + 1 = (2x + 1)<sup>2</sup>.', answer: false, explain: '(2x + 1)<sup>2</sup> = 4x<sup>2</sup> + 4x + 1.' },
    { type: 'mcq', q: '(a − b)(a<sup>2</sup> + ab + b<sup>2</sup>) + b<sup>3</sup> bằng:', options: ['a<sup>3</sup>', 'a<sup>3</sup> + 2b<sup>3</sup>', 'a<sup>3</sup> − 2b<sup>3</sup>', '(a − b)<sup>3</sup>'], answer: 0, explain: 'a<sup>3</sup> − b<sup>3</sup> + b<sup>3</sup> = a<sup>3</sup>.' },
    { type: 'short', calc: '(2 * 5 - 1) ** 2 + (2 * 5 + 1) ** 2 - 8 * 25', q: 'Tính giá trị (2x − 1)<sup>2</sup> + (2x + 1)<sup>2</sup> − 8x<sup>2</sup> tại x = 5.', answer: '2', explain: 'Biểu thức rút gọn bằng 2 với mọi x.' }
  ]
});
