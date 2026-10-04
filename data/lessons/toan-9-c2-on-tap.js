/* Toán 9 – Bài tập cuối chương II. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-9/c2-on-tap', {
    objectives: [
      'Hệ thống hoá phương trình quy về phương trình bậc nhất, bất đẳng thức và bất phương trình bậc nhất một ẩn.',
      'Giải thành thạo phương trình tích, phương trình chứa ẩn ở mẫu, bất phương trình bậc nhất.',
      'Vận dụng vào bài toán thực tế có điều kiện “không vượt quá”, “ít nhất”, “tối đa”.'
    ],
    intro: 'Ôn tập chương II: từ phương trình đến bất phương trình, và các quy tắc biến đổi đi kèm.',
    steps: [
      { title: 'Sơ đồ chương', html: `<p>Các nội dung chính:</p>`,
        svg: S.mindmap({ center: 'Chương II', branches: [
          { title: 'Phương trình tích', items: ['A·B = 0 ⇔ A = 0 hoặc B = 0'] },
          { title: 'Ẩn ở mẫu', items: ['ĐKXĐ', 'Khử mẫu, đối chiếu'] },
          { title: 'Bất đẳng thức', items: ['Bắc cầu', 'Cộng: giữ chiều', 'Nhân số âm: đổi chiều'] },
          { title: 'Bất phương trình', items: ['ax + b > 0 (a ≠ 0)', 'Tập nghiệm trên trục số'] }
        ] }) },
      { title: 'Phương trình và bất phương trình', html: `<table class="tbl"><tr><th></th><th>Phương trình 2x − 6 = 0</th><th>Bất phương trình 2x − 6 &gt; 0</th></tr><tr><td>Nghiệm</td><td>x = 3</td><td>x &gt; 3 (vô số nghiệm)</td></tr><tr><td>Nhân với số âm</td><td>giữ dấu “=”</td><td>đổi chiều</td></tr></table>` },
      { title: 'Biểu diễn tập nghiệm', html: `<p>Tập nghiệm x ≥ −1:</p>`,
        svg: S.numberLine({ min: -4, max: 4, width: 440, range: [-1, 4], marks: [{ v: -1, label: 'lấy cả −1', color: C.green }] }), caption: 'x ≥ −1.' },
      { title: 'Từ khoá trong bài toán thực tế', html: `<ul><li>“không vượt quá”, “tối đa” → ≤.</li><li>“ít nhất”, “không dưới” → ≥.</li><li>“nhiều hơn” → &gt;; “ít hơn” → &lt;.</li></ul>` }
    ],
    summary: 'Phương trình tích, chứa ẩn ở mẫu quy về bậc nhất. Bất đẳng thức: cộng giữ chiều, nhân số âm đổi chiều. Bất phương trình bậc nhất giải tương tự phương trình nhưng chú ý chiều.',
    examples: [
      { title: 'Phương trình chứa ẩn ở mẫu', problem: 'Giải {{2x|x + 3}} = 2 − {{6|x + 3}}.', solution: 'ĐKXĐ x ≠ −3. 2x = 2(x + 3) − 6 ⇔ 2x = 2x: đúng với mọi x. Tập nghiệm: mọi x ≠ −3.' },
      { title: 'Bất phương trình có mẫu', problem: 'Giải {{2x + 1|3}} − {{x|2}} ≤ 1.', solution: 'Nhân 6: 2(2x + 1) − 3x ≤ 6 ⇔ x + 2 ≤ 6 ⇔ x ≤ 4.' },
      { title: 'Thực tế', problem: 'Thang máy chở tối đa 600 kg. Một người 75 kg chở các thùng hàng 30 kg. Chở được tối đa bao nhiêu thùng?', solution: '75 + 30x ≤ 600 ⇔ x ≤ 17,5 ⇒ tối đa 17 thùng.' }
    ],
    exercises: [
      { question: 'Giải phương trình (3x − 2)(x + 5) = (3x − 2)(2x − 1).', hints: ['Chuyển vế: (3x − 2)[(x + 5) − (2x − 1)] = 0.', '(3x − 2)(6 − x) = 0.'], solution: 'x = {{2|3}} hoặc x = 6.' },
      { question: 'Giải bất phương trình 3(x − 1) − 2(x + 1) &lt; x + 1 và nhận xét.', hints: ['Rút gọn vế trái: x − 5.', 'x − 5 &lt; x + 1 ⇔ −5 &lt; 1.'], solution: 'Luôn đúng: mọi x đều là nghiệm.' },
      { question: 'Một hãng taxi tính 12 nghìn đồng cho km đầu tiên và 10 nghìn đồng cho mỗi km tiếp theo. Với 150 nghìn đồng, đi được tối đa bao nhiêu km (tính theo số km nguyên)?', hints: ['12 + 10(x − 1) ≤ 150.', '10x ≤ 148.'], solution: 'x ≤ 14,8 ⇒ tối đa 14 km.' }
    ],
    quiz: [
      { type: 'short', calc: 'Math.floor((600 - 75) / 30)', q: 'Thang máy tối đa 600 kg; người 75 kg chở thùng 30 kg. Tối đa bao nhiêu thùng?', answer: '17', explain: 'x ≤ 17,5.' },
      { type: 'short', calc: '6 - 2', q: 'Giải {{2x + 1|3}} − {{x|2}} ≤ 1. Giá trị lớn nhất của x là?', answer: '4', explain: 'x + 2 ≤ 6.' },
      { type: 'short', calc: 'Math.floor((150 - 12) / 10 + 1)', q: 'Taxi: km đầu 12 nghìn, mỗi km sau 10 nghìn. Có 150 nghìn đi tối đa bao nhiêu km (số nguyên)?', unit: 'km', answer: '14', explain: '10x ≤ 148.' },
      { type: 'mcq', q: 'Nghiệm của phương trình (3x − 2)(x + 5) = (3x − 2)(2x − 1) là:', options: ['x = 6', 'x = {{2|3}}', 'x = {{2|3}} hoặc x = 6', 'x = −5'], answer: 2, explain: '(3x − 2)(6 − x) = 0.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: “Chở không vượt quá 600 kg” được viết là m ≤ 600.', answer: true, explain: 'Không vượt quá: ≤.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Bất phương trình 3(x − 1) − 2(x + 1) &lt; x + 1 vô nghiệm.', answer: false, explain: 'Luôn đúng: mọi x là nghiệm.' },
      { type: 'mcq', q: 'Hình biểu diễn tập nghiệm x ≥ −1 trên trục số:', options: ['tô phần bên trái −1, không lấy −1', 'tô phần bên phải −1, lấy cả −1', 'tô phần bên phải −1, không lấy −1', 'chỉ đánh dấu điểm −1'], answer: 1, explain: '≥ lấy cả điểm −1.' },
      { type: 'short', requireSimplest: true, calc: '2 / 3', q: 'Phương trình (3x − 2)(6 − x) = 0 có một nghiệm là phân số. Nghiệm đó bằng? (Dạng a/b tối giản.)', answer: ['2/3'], answerText: '2/3', explain: '3x − 2 = 0.' }
    ]
  });
})();
