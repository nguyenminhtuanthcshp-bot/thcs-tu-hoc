/* Toán 9 – Luyện tập chung (sau Bài 12). Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C, G = S.geom;
  var A = [60, 190], B = [60, 50], Cc = [300, 190], H = G.foot(A, B, Cc);
  THCS.registerLesson('toan-9/c4-ltc-1', {
    objectives: [
      'Tính tỉ số lượng giác của góc nhọn và sử dụng quan hệ giữa tỉ số lượng giác của hai góc phụ nhau.',
      'Giải tam giác vuông trong các tình huống khác nhau.',
      'Kết hợp tỉ số lượng giác với định lí Pythagore và đường cao để giải bài toán tổng hợp, thực tế.'
    ],
    intro: 'Luyện tập vận dụng tỉ số lượng giác trong các bài toán hình học có đường cao và các bài toán đo đạc.',
    steps: [
      { title: 'Đường cao trong tam giác vuông', html: `<p>Tam giác ABC vuông tại A, đường cao AH. Góc B xuất hiện trong hai tam giác vuông ABC và ABH, nên có thể tính cùng một tỉ số theo hai cách: sin B = {{AC|BC}} = {{AH|AB}}.</p>`,
        svg: S.geo({ w: 360, h: 220, P: { A: A, B: B, C: Cc, H: H }, seg: ['AB', 'AC', 'BC', { s: 'AH', color: C.blue, width: 2.5 }], right: ['BAC', 'AHC'], arcs: [['ABC', 1, '', C.orange, 24]], off: { H: [8, -12] } }), caption: 'sin B = AC : BC = AH : AB.' },
      { title: 'Giải tam giác vuông – bốn trường hợp', html: `<table class="tbl"><tr><th>Biết</th><th>Tính</th></tr><tr><td>Hai cạnh góc vuông</td><td>tan một góc, rồi cạnh huyền</td></tr><tr><td>Cạnh huyền và một cạnh góc vuông</td><td>sin/cos một góc, Pythagore</td></tr><tr><td>Cạnh huyền và một góc nhọn</td><td>hai cạnh góc vuông bằng sin, cos</td></tr><tr><td>Một cạnh góc vuông và một góc nhọn</td><td>cạnh kia bằng tan, huyền bằng sin/cos</td></tr></table>` },
      { title: 'Đo khoảng cách không tới được', html: `<p>Muốn đo khoảng cách từ A (bờ bên này) tới B (bờ bên kia): dựng AC ⊥ AB, đo AC và góc ∠ACB, khi đó AB = AC · tan ∠ACB.</p>` },
      { title: 'Làm tròn', html: `<p>Giữ nguyên giá trị trên máy tính đến bước cuối rồi mới làm tròn. Góc thường làm tròn đến độ, độ dài đến hàng phần mười hoặc phần trăm.</p>` }
    ],
    summary: 'Dùng đúng tỉ số theo vị trí cạnh so với góc; một góc có thể nằm trong nhiều tam giác vuông. Giải tam giác vuông cần hai yếu tố, ít nhất một cạnh.',
    examples: [
      { title: 'Tìm góc', problem: 'Tam giác ABC vuông tại A có AB = 6, AC = 8. Tính ∠B (làm tròn đến độ).', solution: 'tan B = {{8|6}} ≈ 1,333 ⇒ ∠B ≈ 53°.' },
      { title: 'Đường cao', problem: 'Tam giác ABC vuông tại A có AB = 10, ∠B = 60°, đường cao AH. Tính AH.', solution: 'Trong tam giác vuông ABH: AH = AB · sin B = 10 · {{√3|2}} = 5√3 ≈ 8,66.' },
      { title: 'Qua sông', problem: 'Dựng AC ⊥ AB với AC = 40 m, đo được ∠ACB = 58°. Tính AB (làm tròn đến mét).', solution: 'AB = 40 · tan 58° ≈ 64 m.' }
    ],
    exercises: [
      { question: 'Tam giác vuông có cạnh huyền 20 cm, một góc nhọn 35°. Tính cạnh góc vuông đối diện góc đó (làm tròn đến hàng phần mười).', hints: ['Cạnh đối = huyền · sin 35°.', 'sin 35° ≈ 0,5736.'], solution: '≈ 11,5 cm.' },
      { question: 'Một chiếc diều bay với dây dài 80 m, dây tạo với mặt đất góc 50°. Tính độ cao của diều so với tay người cầm (làm tròn đến mét).', hints: ['h = 80 · sin 50°.', 'sin 50° ≈ 0,766.'], solution: '≈ 61 m.' },
      { question: 'Tam giác ABC vuông tại A, AB = 6, AC = 8. Tính cos C.', hints: ['BC = 10.', 'cos C = {{AC|BC}}.'], solution: '{{4|5}}.' }
    ],
    quiz: [
      { type: 'short', calc: 'Math.round(Math.atan(8 / 6) * 180 / Math.PI)', q: 'Tam giác ABC vuông tại A, AB = 6, AC = 8. Tính ∠B (độ, làm tròn đến độ).', unit: 'độ', answer: '53', explain: 'tan B = 8/6.' },
      { type: 'short', calc: 'round(10 * Math.sin(60 * Math.PI / 180), 2)', q: 'Tam giác ABC vuông tại A, AB = 10, ∠B = 60°, đường cao AH. Tính AH (làm tròn đến hàng phần trăm).', answer: '8.66', explain: '10 · sin 60°.' },
      { type: 'short', calc: 'Math.round(40 * Math.tan(58 * Math.PI / 180))', q: 'AC ⊥ AB, AC = 40 m, ∠ACB = 58°. Tính AB (m, làm tròn đến mét).', unit: 'm', answer: '64', explain: '40 · tan 58°.' },
      { type: 'short', calc: 'round(20 * Math.sin(35 * Math.PI / 180), 1)', q: 'Cạnh huyền 20 cm, góc nhọn 35°. Cạnh đối diện góc đó (cm, làm tròn đến hàng phần mười)?', unit: 'cm', answer: '11.5', explain: '20 · sin 35°.' },
      { type: 'short', calc: 'Math.round(80 * Math.sin(50 * Math.PI / 180))', q: 'Dây diều dài 80 m tạo với mặt đất góc 50°. Độ cao diều (m, làm tròn đến mét)?', unit: 'm', answer: '61', explain: '80 · sin 50°.' },
      { type: 'short', requireSimplest: true, calc: '8 / 10', q: 'Tam giác ABC vuông tại A, AB = 6, AC = 8. Tính cos C. (Dạng a/b tối giản.)', answer: ['4/5'], answerText: '4/5', explain: 'cos C = AC/BC.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Trong tam giác ABC vuông tại A có đường cao AH thì sin B = {{AH|AB}}.', answer: true, explain: 'Xét tam giác vuông ABH.' },
      { type: 'mcq', q: 'Biết cạnh huyền và một góc nhọn, để tính cạnh kề góc đó ta dùng:', options: ['sin', 'cos', 'tan', 'cot'], answer: 1, explain: 'Kề = huyền · cos.' }
    ]
  });
})();
