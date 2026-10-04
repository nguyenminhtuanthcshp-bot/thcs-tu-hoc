/* Toán 9 – Luyện tập chung (sau Bài 21). Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-9/c6-ltc-2', {
    objectives: [
      'Vận dụng định lí Viète để nhẩm nghiệm, tìm tham số và tính biểu thức của hai nghiệm.',
      'Giải phương trình quy về phương trình bậc hai (phương trình trùng phương, phương trình tích).',
      'Giải bài toán thực tế bằng cách lập phương trình bậc hai.'
    ],
    intro: 'Luyện tập phối hợp Viète, công thức nghiệm và lập phương trình – bộ ba công cụ của chương VI.',
    steps: [
      { title: 'Viète có điều kiện', html: `<p>Khi bài toán chứa tham số m, trước khi dùng Viète phải tìm điều kiện để phương trình <b>có nghiệm</b> (Δ ≥ 0) hoặc có hai nghiệm phân biệt (Δ &gt; 0).</p>` },
      { title: 'Phương trình trùng phương', html: `<p>ax⁴ + bx² + c = 0 (a ≠ 0): đặt t = x² (t ≥ 0), đưa về at² + bt + c = 0, giải t rồi suy ra x.</p><p>Ví dụ: x⁴ − 5x² + 4 = 0 ⇒ t² − 5t + 4 = 0 ⇒ t = 1; t = 4 ⇒ x = ±1; ±2.</p>`,
        svg: S.plane({ x: [-3, 3], y: [-4, 5], u: 30, curves: [{ f: function (x) { return x * x * x * x - 5 * x * x + 4; }, label: 'y = x⁴ − 5x² + 4', color: C.purple, lx: -1.58, dx: -40, dy: 32 }], pts: [{ x: -2, y: 0 }, { x: -1, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }] }), caption: 'Bốn nghiệm ±1, ±2 là bốn giao điểm với trục Ox.' },
      { title: 'Hai nghiệm trái dấu, cùng dấu', html: `<ul><li>Hai nghiệm trái dấu ⇔ P = {{c|a}} &lt; 0 (tức ac &lt; 0).</li><li>Hai nghiệm dương ⇔ Δ ≥ 0, S &gt; 0, P &gt; 0.</li><li>Hai nghiệm âm ⇔ Δ ≥ 0, S &lt; 0, P &gt; 0.</li></ul>` },
      { title: 'Lập bảng cho bài toán thực tế', html: `<table class="tbl"><tr><th></th><th>Năng suất</th><th>Thời gian</th><th>Khối lượng</th></tr><tr><td>Dự định</td><td>x</td><td>{{K|x}}</td><td>K</td></tr><tr><td>Thực tế</td><td>x + a</td><td>{{K|x + a}}</td><td>K</td></tr></table><p>Chênh lệch thời gian cho ta phương trình.</p>` }
    ],
    summary: 'Kiểm tra Δ trước khi dùng Viète; phương trình trùng phương đặt t = x² ≥ 0; dấu của nghiệm xét qua S và P; bài toán thực tế nên lập bảng.',
    examples: [
      { title: 'Tìm m', problem: 'Tìm m để x² − 2x + m − 3 = 0 có hai nghiệm x<sub>1</sub>, x<sub>2</sub> thỏa mãn x<sub>1</sub>² + x<sub>2</sub>² = 10.', solution: 'Δ\' = 4 − m ≥ 0 ⇔ m ≤ 4. S = 2, P = m − 3 ⇒ 4 − 2(m − 3) = 10 ⇔ m = 0 (thỏa mãn).' },
      { title: 'Trùng phương', problem: 'Giải x⁴ − 7x² − 18 = 0.', solution: 't = x² ≥ 0: t² − 7t − 18 = 0 ⇒ t = 9 (nhận), t = −2 (loại) ⇒ x = ±3.' },
      { title: 'Thực tế', problem: 'Một đội xe cần chở 120 tấn hàng. Khi làm việc có 2 xe phải điều đi nơi khác nên mỗi xe còn lại chở thêm 2 tấn. Hỏi lúc đầu đội có bao nhiêu xe?', solution: '{{120|x − 2}} − {{120|x}} = 2 ⇔ x² − 2x − 120 = 0 ⇔ x = 12 (nhận) hoặc x = −10. Lúc đầu có 12 xe.' }
    ],
    exercises: [
      { question: 'Giải phương trình x⁴ − 13x² + 36 = 0.', hints: ['Đặt t = x²: t² − 13t + 36 = 0.', 't = 4; t = 9.'], solution: 'x = ±2; x = ±3.' },
      { question: 'Tìm m để phương trình x² + 5x + m − 2 = 0 có hai nghiệm trái dấu.', hints: ['Cần ac &lt; 0.', '1 · (m − 2) &lt; 0.'], solution: 'm &lt; 2.' },
      { question: 'Gọi x<sub>1</sub>, x<sub>2</sub> là nghiệm của x² − 6x + 4 = 0. Tính (x<sub>1</sub> − x<sub>2</sub>)².', hints: ['S = 6, P = 4.', '(x<sub>1</sub> − x<sub>2</sub>)² = S² − 4P.'], solution: '36 − 16 = 20.' }
    ],
    quiz: [
      { type: 'short', calc: '(4 - 10) / 2 + 3', q: 'Tìm m để x² − 2x + m − 3 = 0 có hai nghiệm thỏa x₁² + x₂² = 10.', answer: '0', explain: '4 − 2(m − 3) = 10.' },
      { type: 'short', calc: 'Math.sqrt((7 + Math.sqrt(49 + 72)) / 2)', q: 'Nghiệm dương của x⁴ − 7x² − 18 = 0 là?', answer: '3', explain: 't = 9.' },
      { type: 'short', calc: '(2 + Math.sqrt(4 + 480)) / 2', q: 'Đội xe chở 120 tấn; bớt 2 xe thì mỗi xe chở thêm 2 tấn. Lúc đầu có bao nhiêu xe?', unit: 'xe', answer: '12', explain: 'x² − 2x − 120 = 0.' },
      { type: 'short', calc: '6 ** 2 - 4 * 4', q: 'x₁, x₂ là nghiệm của x² − 6x + 4 = 0. Tính (x₁ − x₂)².', answer: '20', explain: 'S² − 4P.' },
      { type: 'short', calc: '[1, 4].filter(t => t > 0).length * 2', q: 'Phương trình x⁴ − 5x² + 4 = 0 có bao nhiêu nghiệm?', unit: 'nghiệm', answer: '4', explain: '±1, ±2.' },
      { type: 'mcq', q: 'x² + 5x + m − 2 = 0 có hai nghiệm trái dấu khi:', options: ['m &gt; 2', 'm &lt; 2', 'm = 2', 'm &lt; −2'], answer: 1, explain: 'ac = m − 2 &lt; 0.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Phương trình x² − 5x + 6 = 0 có hai nghiệm dương.', answer: true, explain: 'S = 5 &gt; 0, P = 6 &gt; 0, Δ = 1 &gt; 0.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khi đặt t = x² trong phương trình trùng phương, ta nhận cả nghiệm t âm.', answer: false, explain: 'Cần t ≥ 0.' }
    ]
  });
})();
