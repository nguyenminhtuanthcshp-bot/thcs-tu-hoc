/* Toán 9 – Luyện tập chung (sau Bài 5). Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-9/c2-ltc-1', {
    objectives: [
      'Giải thành thạo phương trình tích và phương trình chứa ẩn ở mẫu quy về phương trình bậc nhất.',
      'Vận dụng tính chất của bất đẳng thức để so sánh các biểu thức.',
      'Chứng minh bất đẳng thức đơn giản bằng phương pháp xét hiệu.'
    ],
    intro: 'Luyện tập kết hợp hai nội dung đầu chương: phương trình quy về bậc nhất và bất đẳng thức.',
    steps: [
      { title: 'Nhắc lại: phương trình', html: `<ul><li>A · B = 0 ⇔ A = 0 hoặc B = 0.</li><li>Chứa ẩn ở mẫu: ĐKXĐ → khử mẫu → giải → đối chiếu.</li></ul>` },
      { title: 'Nhắc lại: bất đẳng thức', html: `<ul><li>Cộng cùng một số: giữ chiều.</li><li>Nhân số dương: giữ chiều; nhân số âm: đổi chiều.</li><li>Bắc cầu: a &lt; b, b &lt; c ⇒ a &lt; c.</li></ul>`,
        svg: S.flow({ items: [{ title: 'a < b', text: 'giả thiết' }, { title: '× (−2)', text: '−2a > −2b' }, { title: '+ 7', text: '7 − 2a > 7 − 2b' }] }), caption: 'Mỗi phép biến đổi được ghi rõ.' },
      { title: 'Phân tích để đưa về tích', html: `<p>Các công cụ: đặt nhân tử chung, hằng đẳng thức, nhóm hạng tử. Ví dụ: x<sup>3</sup> − 4x = x(x − 2)(x + 2).</p>` },
      { title: 'Chú ý khi so sánh', html: `<p>Muốn so sánh hai biểu thức phức tạp, có thể so sánh hiệu của chúng với 0 hoặc dùng một số trung gian.</p>` }
    ],
    summary: 'Phương trình tích và phương trình chứa ẩn ở mẫu đều quy về bậc nhất. Bất đẳng thức: nhớ đổi chiều khi nhân số âm và dùng hiệu để chứng minh.',
    examples: [
      { title: 'Phương trình tích bậc ba', problem: 'Giải phương trình x<sup>3</sup> − 4x = 0.', solution: 'x(x − 2)(x + 2) = 0 ⇒ x ∈ {0; 2; −2}.' },
      { title: 'Chứa ẩn ở mẫu', problem: 'Giải {{1|x − 2}} + 3 = {{x − 3|x − 2}}.', solution: 'ĐKXĐ x ≠ 2. 1 + 3(x − 2) = x − 3 ⇔ 3x − 5 = x − 3 ⇔ x = 1 (thoả mãn).' },
      { title: 'So sánh qua trung gian', problem: 'So sánh √50 + 1 và 8.', solution: '√50 &gt; √49 = 7 ⇒ √50 + 1 &gt; 8.' }
    ],
    exercises: [
      { question: 'Giải phương trình (x + 1)<sup>2</sup> = 4(x + 1).', hints: ['Chuyển vế: (x + 1)(x + 1 − 4) = 0.', '(x + 1)(x − 3) = 0.'], solution: 'x = −1 hoặc x = 3.' },
      { question: 'Cho a ≥ b. Chứng minh 7 − 2a ≤ 7 − 2b.', hints: ['Nhân −2: −2a ≤ −2b.', 'Cộng 7.'], solution: '7 − 2a ≤ 7 − 2b.' },
      { question: 'Chứng minh a<sup>2</sup> + b<sup>2</sup> ≥ 2ab.', hints: ['Xét hiệu a<sup>2</sup> + b<sup>2</sup> − 2ab.', '= (a − b)<sup>2</sup>.'], solution: 'Hiệu bằng (a − b)² ≥ 0; dấu bằng khi a = b.' }
    ],
    quiz: [
      { type: 'short', calc: '(4 - 1) * 1', q: 'Phương trình (x + 1)<sup>2</sup> = 4(x + 1) có nghiệm dương là?', answer: '3', explain: '(x + 1)(x − 3) = 0.' },
      { type: 'mcq', q: 'Số nghiệm của phương trình x<sup>3</sup> − 4x = 0 là:', options: ['1', '2', '3', '4'], answer: 2, explain: '0; 2; −2.', calc: '[0, 2, -2].length' },
      { type: 'short', calc: '(5 - 3) / (3 - 1)', q: 'Nghiệm của phương trình {{1|x − 2}} + 3 = {{x − 3|x − 2}} là?', answer: '1', explain: '3x − 5 = x − 3.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: √50 + 1 &gt; 8.', answer: true, explain: '√50 &gt; 7.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nếu a ≥ b thì 7 − 2a ≥ 7 − 2b.', answer: false, explain: 'Phải đổi chiều: ≤.' },
      { type: 'mcq', q: 'Giá trị nào KHÔNG thoả mãn ĐKXĐ của phương trình {{1|x − 2}} + 3 = {{x − 3|x − 2}}?', options: ['x = 0', 'x = 1', 'x = 2', 'x = 3'], answer: 2, explain: 'Mẫu x − 2 = 0.' },
      { type: 'short', calc: '(1 - 1) * (1 - 1)', q: 'Tìm giá trị nhỏ nhất của biểu thức a<sup>2</sup> + b<sup>2</sup> − 2ab.', answer: '0', explain: '(a − b)² ≥ 0, bằng 0 khi a = b.' },
      { type: 'short', calc: '2 * 2 - 4 * 2 + 5', q: 'Tìm giá trị nhỏ nhất của x<sup>2</sup> − 4x + 5.', answer: '1', explain: '(x − 2)² + 1 ≥ 1.' }
    ]
  });
})();
