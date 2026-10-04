/* Toán 9 – Bài 20. Định lí Viète và ứng dụng. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-9/bai-20', {
    objectives: [
      'Phát biểu được định lí Viète về tổng và tích hai nghiệm của phương trình bậc hai.',
      'Tính nhẩm nghiệm trong các trường hợp a + b + c = 0 và a − b + c = 0.',
      'Tìm được hai số khi biết tổng và tích của chúng.',
      'Tính giá trị các biểu thức đối xứng của hai nghiệm mà không cần giải phương trình.'
    ],
    intro: 'Nhà toán học Pháp François Viète (thế kỉ XVI) phát hiện mối liên hệ đơn giản giữa các nghiệm và các hệ số của phương trình. Nhờ đó, ta có thể nhẩm nghiệm rất nhanh.',
    steps: [
      { title: 'Định lí Viète', html: `<p>Nếu x<sub>1</sub>, x<sub>2</sub> là hai nghiệm của ax² + bx + c = 0 (a ≠ 0) thì:</p><p style="text-align:center"><b>x<sub>1</sub> + x<sub>2</sub> = −{{b|a}}</b>, &nbsp; <b>x<sub>1</sub> · x<sub>2</sub> = {{c|a}}</b>.</p><p>Lưu ý: chỉ áp dụng khi phương trình <b>có nghiệm</b> (Δ ≥ 0).</p>` },
      { title: 'Nhẩm nghiệm', html: `<ul><li>Nếu <b>a + b + c = 0</b> thì x<sub>1</sub> = 1, x<sub>2</sub> = {{c|a}}.</li><li>Nếu <b>a − b + c = 0</b> thì x<sub>1</sub> = −1, x<sub>2</sub> = −{{c|a}}.</li></ul><p>Ví dụ: 3x² − 7x + 4 = 0 có 3 − 7 + 4 = 0 ⇒ x = 1; x = {{4|3}}.</p>` },
      { title: 'Tìm hai số biết tổng và tích', html: `<p>Nếu hai số có tổng S và tích P (với S² − 4P ≥ 0) thì chúng là hai nghiệm của phương trình</p><p style="text-align:center"><b>x² − Sx + P = 0</b>.</p><p>Ví dụ: tổng 11, tích 28 ⇒ x² − 11x + 28 = 0 ⇒ hai số là 4 và 7.</p>`,
        svg: S.plane({ x: [-1, 9], y: [-3, 3], u: 28, curves: [{ f: function (x) { return (x * x - 11 * x + 28) / 2; }, label: 'y = (x² − 11x + 28) : 2', color: C.blue, lx: 3.2, dx: -40, dy: -70 }], pts: [{ x: 4, y: 0, label: '4', dx: -14, dy: -8 }, { x: 7, y: 0, label: '7', dx: 6, dy: -8 }] }), caption: 'Hai số có tổng 11, tích 28 là hoành độ giao điểm với trục Ox.' },
      { title: 'Biểu thức đối xứng của hai nghiệm', html: `<p>Biến đổi về S = x<sub>1</sub> + x<sub>2</sub> và P = x<sub>1</sub>x<sub>2</sub>:</p><ul><li>x<sub>1</sub>² + x<sub>2</sub>² = S² − 2P.</li><li>{{1|x<sub>1</sub>}} + {{1|x<sub>2</sub>}} = {{S|P}} (P ≠ 0).</li><li>(x<sub>1</sub> − x<sub>2</sub>)² = S² − 4P.</li></ul>` }
    ],
    summary: 'x₁ + x₂ = −b/a; x₁x₂ = c/a (khi Δ ≥ 0). a + b + c = 0 ⇒ nghiệm 1 và c/a; a − b + c = 0 ⇒ nghiệm −1 và −c/a. Hai số có tổng S, tích P là nghiệm của x² − Sx + P = 0.',
    examples: [
      { title: 'Tổng và tích', problem: 'Không giải, tính tổng và tích hai nghiệm của 2x² − 9x + 4 = 0.', solution: 'Δ = 81 − 32 = 49 &gt; 0. S = {{9|2}}, P = {{4|2}} = 2.' },
      { title: 'Nhẩm nghiệm', problem: 'Nhẩm nghiệm: a) 5x² + 3x − 8 = 0; b) x² + 6x + 5 = 0.', solution: 'a) 5 + 3 − 8 = 0 ⇒ x = 1; x = −{{8|5}}. b) 1 − 6 + 5 = 0 ⇒ x = −1; x = −5.' },
      { title: 'Biểu thức', problem: 'Gọi x<sub>1</sub>, x<sub>2</sub> là nghiệm của x² − 5x + 3 = 0. Tính x<sub>1</sub>² + x<sub>2</sub>².', solution: 'Δ = 13 &gt; 0; S = 5, P = 3 ⇒ S² − 2P = 25 − 6 = 19.' }
    ],
    exercises: [
      { question: 'Tìm hai số có tổng bằng 3 và tích bằng −10.', hints: ['Giải x² − 3x − 10 = 0.', 'Δ = 9 + 40 = 49.'], solution: 'Hai số là 5 và −2.' },
      { question: 'Phương trình x² − 7x + m = 0 có một nghiệm bằng 2. Tìm m và nghiệm còn lại.', hints: ['x<sub>1</sub> + x<sub>2</sub> = 7.', 'm = x<sub>1</sub>x<sub>2</sub>.'], solution: 'Nghiệm còn lại 5; m = 10.' },
      { question: 'Gọi x<sub>1</sub>, x<sub>2</sub> là nghiệm của x² + 4x − 1 = 0. Tính {{1|x<sub>1</sub>}} + {{1|x<sub>2</sub>}}.', hints: ['S = −4, P = −1.', 'Tính {{S|P}}.'], solution: '{{−4|−1}} = 4.' }
    ],
    quiz: [
      { type: 'short', calc: '9 / 2', q: 'Tổng hai nghiệm của 2x² − 9x + 4 = 0 bằng bao nhiêu (viết dạng số thập phân)?', answer: '4.5', explain: 'S = 9/2.' },
      { type: 'short', calc: '5 ** 2 - 2 * 3', q: 'x₁, x₂ là nghiệm của x² − 5x + 3 = 0. Tính x₁² + x₂².', answer: '19', explain: 'S² − 2P.' },
      { type: 'short', calc: '2 * (7 - 2)', q: 'x² − 7x + m = 0 có một nghiệm bằng 2. Tìm m.', answer: '10', explain: 'Nghiệm kia 5, m = 10.' },
      { type: 'short', calc: '-4 / -1', q: 'x₁, x₂ là nghiệm của x² + 4x − 1 = 0. Tính 1/x₁ + 1/x₂.', answer: '4', explain: 'S/P = −4/−1.' },
      { type: 'short', calc: '-8 / 5', requireSimplest: true, q: 'Phương trình 5x² + 3x − 8 = 0 có một nghiệm là 1. Nghiệm còn lại là? (phân số tối giản)', answer: ['-8/5'], explain: 'c/a = −8/5.' },
      { type: 'mcq', q: 'Hai số có tổng 11 và tích 28 là:', options: ['2 và 14', '4 và 7', '−4 và −7', '3 và 8'], answer: 1, explain: 'x² − 11x + 28 = 0.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Phương trình x² + x + 5 = 0 có tổng hai nghiệm bằng −1.', answer: false, explain: 'Δ = 1 − 20 &lt; 0: vô nghiệm, không áp dụng Viète.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Phương trình x² + 6x + 5 = 0 có hai nghiệm −1 và −5.', answer: true, explain: 'a − b + c = 0.' }
    ]
  });
})();
