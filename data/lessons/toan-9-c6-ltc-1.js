/* Toán 9 – Luyện tập chung (sau Bài 19). Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-9/c6-ltc-1', {
    objectives: [
      'Củng cố cách vẽ đồ thị và tìm điểm thuộc parabol y = ax².',
      'Lựa chọn cách giải phù hợp cho phương trình bậc hai (khuyết hệ số, Δ, Δ\').',
      'Biện luận số nghiệm của phương trình bậc hai có chứa tham số.'
    ],
    intro: 'Luyện tập tổng hợp về hàm số y = ax² và phương trình bậc hai trước khi học hệ thức Viète.',
    steps: [
      { title: 'Chọn cách giải nhanh', html: `<ul><li>Khuyết c: đặt nhân tử chung x.</li><li>Khuyết b: đưa về x² = k.</li><li>b chẵn: dùng Δ'.</li><li>Trường hợp còn lại: dùng Δ.</li></ul>` },
      { title: 'Biện luận số nghiệm', html: `<p>Với phương trình x² − 2x + m = 0: Δ' = 1 − m.</p><ul><li>m &lt; 1: hai nghiệm phân biệt.</li><li>m = 1: nghiệm kép x = 1.</li><li>m &gt; 1: vô nghiệm.</li></ul><p>Ý nghĩa hình học: số giao điểm của parabol y = x² với đường thẳng y = 2x − m.</p>` },
      { title: 'Giao điểm parabol và đường thẳng', html: `<p>Hoành độ giao điểm của y = x² và y = x + 2 là nghiệm của x² = x + 2 ⇔ x² − x − 2 = 0 ⇔ x = −1 hoặc x = 2. Hai giao điểm: (−1; 1) và (2; 4).</p>`,
        svg: S.plane({ x: [-3, 3], y: [-2, 5], u: 34, curves: [{ f: function (x) { return x * x; }, label: 'y = x²', color: C.blue, lx: -2.1, dx: -62, dy: 2 }], lines: [{ a: 1, b: 2, label: 'y = x + 2', color: C.orange, at: 0.05, dx: 10, dy: 18 }], pts: [{ x: -1, y: 1, label: 'A', dx: -18, dy: -4 }, { x: 2, y: 4, label: 'B', dx: 10, dy: 12 }] }), caption: 'Parabol y = x² cắt đường thẳng y = x + 2 tại A(−1; 1) và B(2; 4).' },
      { title: 'Lưu ý khi giải bài toán thực tế', html: `<p>Sau khi giải phương trình bậc hai, phải <b>đối chiếu điều kiện</b> của ẩn (độ dài dương, số người nguyên dương…) để loại nghiệm không phù hợp.</p>` }
    ],
    summary: 'Chọn công thức phù hợp; biện luận theo dấu của Δ (hoặc Δ\'); giao điểm parabol – đường thẳng ứng với nghiệm của phương trình hoành độ giao điểm.',
    examples: [
      { title: 'Giải nhanh', problem: 'Giải: a) 5x² + 20x = 0; b) x² − 10x + 21 = 0.', solution: 'a) 5x(x + 4) = 0 ⇒ x = 0; x = −4. b) Δ\' = 25 − 21 = 4 ⇒ x = 5 ± 2: x = 7; x = 3.' },
      { title: 'Biện luận', problem: 'Tìm m để x² + 4x + m = 0 có nghiệm kép; tìm nghiệm kép đó.', solution: 'Δ\' = 4 − m = 0 ⇒ m = 4; nghiệm kép x = −2.' },
      { title: 'Giao điểm', problem: 'Tìm toạ độ giao điểm của y = 2x² và y = 3x − 1.', solution: '2x² − 3x + 1 = 0 ⇒ x = 1 hoặc x = {{1|2}}. Giao điểm (1; 2) và ({{1|2}}; {{1|2}}).' }
    ],
    exercises: [
      { question: 'Tìm m để phương trình x² − 6x + m = 0 có hai nghiệm phân biệt.', hints: ['Δ\' = 9 − m.', 'Cần Δ\' &gt; 0.'], solution: 'm &lt; 9.' },
      { question: 'Giải 3x² − 2x − 5 = 0.', hints: ['Δ\' = 1 + 15 = 16.', 'x = {{1 ± 4|3}}.'], solution: 'x = {{5|3}} hoặc x = −1.' },
      { question: 'Một tấm bìa hình vuông, cắt bỏ ở mỗi góc hình vuông cạnh 2 cm rồi gấp thành hộp không nắp có thể tích 50 cm³. Tính cạnh tấm bìa.', hints: ['Đáy là hình vuông cạnh x − 4, chiều cao 2.', '2(x − 4)² = 50.'], solution: 'x − 4 = 5 ⇒ x = 9 cm.' }
    ],
    quiz: [
      { type: 'short', calc: '(10 + Math.sqrt(100 - 84)) / 2', q: 'Nghiệm lớn của x² − 10x + 21 = 0 là bao nhiêu?', answer: '7', explain: 'Δ\' = 4.' },
      { type: 'short', calc: '(4 / 2) ** 2 / 1', q: 'Tìm m để x² + 4x + m = 0 có nghiệm kép.', answer: '4', explain: 'Δ\' = 4 − m = 0.' },
      { type: 'short', calc: '(1 + Math.sqrt(1 + 15)) / 3', requireSimplest: true, q: 'Nghiệm dương của 3x² − 2x − 5 = 0 (phân số tối giản a/b)?', answer: ['5/3'], explain: 'Δ\' = 16.' },
      { type: 'short', calc: '4 + Math.sqrt(50 / 2)', q: 'Cắt bỏ 4 hình vuông cạnh 2 cm ở các góc tấm bìa vuông, gấp thành hộp thể tích 50 cm³. Cạnh tấm bìa (cm)?', unit: 'cm', answer: '9', explain: '2(x − 4)² = 50.' },
      { type: 'mcq', q: 'Parabol y = x² và đường thẳng y = x + 2 cắt nhau tại:', options: ['(1; 1) và (−2; 4)', '(−1; 1) và (2; 4)', 'chỉ (2; 4)', 'không cắt nhau'], answer: 1, explain: 'x² − x − 2 = 0.' },
      { type: 'mcq', q: 'Phương trình x² − 6x + m = 0 có hai nghiệm phân biệt khi:', options: ['m &gt; 9', 'm &lt; 9', 'm = 9', 'm &lt; −9'], answer: 1, explain: 'Δ\' = 9 − m &gt; 0.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Phương trình x² − 2x + 3 = 0 có hai nghiệm phân biệt.', answer: false, explain: 'Δ\' = 1 − 3 &lt; 0.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Parabol y = 2x² đi qua điểm ({{1|2}}; {{1|2}}).', answer: true, explain: '2 · {{1|4}} = {{1|2}}.' }
    ]
  });
})();
