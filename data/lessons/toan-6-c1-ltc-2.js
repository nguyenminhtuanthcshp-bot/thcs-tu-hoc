/* Toán 6 – Chương I. Luyện tập chung (sau Bài 7). Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('toan-6/c1-ltc-2', {
  objectives: [
    'Củng cố định nghĩa và các phép tính với luỹ thừa.',
    'Tính thành thạo giá trị biểu thức theo đúng thứ tự thực hiện phép tính.',
    'Tìm số chưa biết trong biểu thức có luỹ thừa và dấu ngoặc.'
  ],
  intro: 'Luyện tập Bài 6 và Bài 7: luỹ thừa và thứ tự thực hiện phép tính. Hãy viết từng bước thật cẩn thận!',
  steps: [
    { title: 'Nhắc lại công thức luỹ thừa', html: `<ul><li>a<sup>n</sup> = a · a · … · a (n thừa số).</li><li>a<sup>m</sup> · a<sup>n</sup> = a<sup>m+n</sup>; a<sup>m</sup> : a<sup>n</sup> = a<sup>m−n</sup> (a ≠ 0, m ≥ n).</li><li>a<sup>1</sup> = a; a<sup>0</sup> = 1 (a ≠ 0).</li></ul>` },
    { title: 'Nhắc lại thứ tự phép tính', html: `<p>Luỹ thừa → nhân, chia → cộng, trừ. Có ngoặc: ( ) → [ ] → { }. Cùng mức: trái sang phải.</p>` },
    { title: 'Một số bình phương, lập phương nên nhớ', html: `<p>1<sup>2</sup>…10<sup>2</sup>: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100.</p><p>1<sup>3</sup>…5<sup>3</sup>: 1, 8, 27, 64, 125. Các luỹ thừa của 2: 2, 4, 8, 16, 32, 64, 128, 256, 512, 1 024.</p>` },
    { title: 'Tìm x trong luỹ thừa', html: `<ul><li>Đưa hai vế về <b>cùng cơ số</b> rồi so sánh số mũ: 2<sup>x</sup> = 16 = 2<sup>4</sup> ⇒ x = 4.</li><li>Hoặc cùng số mũ rồi so sánh cơ số: x<sup>2</sup> = 49 = 7<sup>2</sup> ⇒ x = 7 (x ∈ ℕ).</li></ul>` }
  ],
  summary: 'Nhớ công thức nhân, chia luỹ thừa cùng cơ số; tính theo đúng thứ tự; tìm x bằng cách đưa về cùng cơ số hoặc cùng số mũ.',
  examples: [
    { title: 'Rút gọn', problem: 'Viết dưới dạng một luỹ thừa: 2<sup>5</sup> · 8.', solution: '8 = 2<sup>3</sup> nên 2<sup>5</sup> · 2<sup>3</sup> = <b>2<sup>8</sup></b>.' },
    { title: 'Tính giá trị', problem: 'Tính 3<sup>2</sup> · 10 − (4<sup>3</sup> : 4<sup>2</sup> + 6).', solution: '4<sup>3</sup> : 4<sup>2</sup> = 4; 4 + 6 = 10; 9 · 10 = 90; 90 − 10 = <b>80</b>.' },
    { title: 'Tìm x', problem: 'Tìm số tự nhiên x biết 5<sup>x + 1</sup> = 125.', solution: '125 = 5<sup>3</sup> nên x + 1 = 3 ⇒ <b>x = 2</b>.' }
  ],
  exercises: [
    { question: 'Tính: 7<sup>2</sup> − 2<sup>4</sup> · 3 + 10<sup>0</sup>.', hints: ['7<sup>2</sup> = 49; 2<sup>4</sup> = 16; 10<sup>0</sup> = 1.', 'Nhân trước: 16 · 3 = 48.'], solution: '49 − 48 + 1 = <b>2</b>.' },
    { question: 'Tìm x ∈ ℕ biết (x − 2)<sup>3</sup> = 64.', hints: ['64 = 4<sup>3</sup>.', 'x − 2 = 4.'], solution: '<b>x = 6</b>.' },
    { question: 'Một hình lập phương có cạnh 4 cm. Tính thể tích.', hints: ['Thể tích hình lập phương cạnh a là a<sup>3</sup>.', '4<sup>3</sup> = 4 · 4 · 4.'], solution: 'V = 4<sup>3</sup> = <b>64 cm³</b>.' }
  ],
  quiz: [
    { type: 'short', q: 'Tính 6<sup>2</sup> + 2<sup>6</sup>.', answer: '100', calc: '36+64', explain: '36 + 64 = 100.' },
    { type: 'mcq', q: '3<sup>5</sup> : 3<sup>2</sup> · 3 bằng:', options: ['3<sup>2</sup>', '3<sup>4</sup>', '3<sup>6</sup>', '3<sup>3</sup>'], answer: 1, explain: 'Từ trái sang phải: 3<sup>3</sup> · 3<sup>1</sup> = 3<sup>4</sup>.' },
    { type: 'short', q: 'Tìm x biết 2<sup>x</sup> = 64.', answer: '6', calc: 'Math.log2(64)', explain: '64 = 2<sup>6</sup>.' },
    { type: 'short', q: 'Tính: 200 − 5 · (3 + 2)<sup>2</sup>.', answer: '75', calc: '200-5*Math.pow(5,2)', explain: '(5)<sup>2</sup> = 25; 5 · 25 = 125; 200 − 125 = 75.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: 2<sup>3</sup> · 3<sup>2</sup> = 6<sup>5</sup>.', answer: false, explain: 'Khác cơ số không cộng số mũ được. 2<sup>3</sup> · 3<sup>2</sup> = 8 · 9 = 72.' },
    { type: 'short', q: 'Tìm x ∈ ℕ biết x<sup>2</sup> = 144.', answer: '12', calc: 'Math.sqrt(144)', explain: '12<sup>2</sup> = 144.' },
    { type: 'mcq', q: 'Giá trị của 4 + 36 : 3<sup>2</sup> là:', options: ['8', '40', '20', '16'], answer: 0, calc: '4+36/9', explain: '3<sup>2</sup> = 9; 36 : 9 = 4; 4 + 4 = 8.' },
    { type: 'short', q: 'Tính: 10<sup>3</sup> − 10<sup>2</sup>.', answer: '900', calc: '1000-100', explain: '1 000 − 100 = 900.' }
  ]
});
