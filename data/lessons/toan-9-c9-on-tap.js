/* Toán 9 – Bài tập cuối chương IX. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C, G = S.geom;
  var A = [120, 40], B = [40, 210], Cc = [280, 210], O = G.circumcenter(A, B, Cc), E = G.foot(B, A, Cc), F = G.foot(Cc, A, B), D = G.foot(A, B, Cc), H = G.orthocenter(A, B, Cc);
  THCS.registerLesson('toan-9/c9-on-tap', {
    objectives: [
      'Hệ thống hoá: góc nội tiếp, đường tròn ngoại tiếp – nội tiếp tam giác, tứ giác nội tiếp, đa giác đều.',
      'Giải bài toán hình học tổng hợp: tính góc, chứng minh tứ giác nội tiếp, tính bán kính.',
      'Vận dụng vào các tình huống thực tế có hình tròn và đa giác đều.'
    ],
    intro: 'Ôn tập chương IX với sơ đồ tư duy và một bài hình tổng hợp kiểu đề thi vào lớp 10.',
    steps: [
      { title: 'Sơ đồ chương', html: `<p>Các nội dung chính:</p>`,
        svg: S.mindmap({ center: 'Đường tròn ngoại tiếp, nội tiếp', branches: [
          { title: 'Góc nội tiếp', items: ['= ½ sđ cung bị chắn', 'Chắn nửa đường tròn: 90°'] },
          { title: 'Tam giác', items: ['Ngoại tiếp: trung trực', 'Nội tiếp: phân giác'] },
          { title: 'Tứ giác nội tiếp', items: ['Hai góc đối bù nhau', 'Dấu hiệu nhận biết'] },
          { title: 'Đa giác đều', items: ['Góc (n − 2)·180°/n', 'Phép quay 360°/n'] }
        ] }) },
      { title: 'Bài hình tổng hợp', html: `<p>Tam giác ABC nhọn nội tiếp (O), các đường cao AD, BE, CF cắt nhau tại H.</p><ul><li>BCEF nội tiếp (∠BEC = ∠BFC = 90°).</li><li>AEHF nội tiếp (∠AEH + ∠AFH = 180°).</li><li>∠AEF = ∠ABC (cùng bù ∠FEC).</li></ul>`,
        svg: S.geo({ w: 320, h: 250, P: { A: A, B: B, C: Cc, D: D, E: E, F: F, H: H, O: O }, circles: [{ c: 'O', r: G.dist(O, A), color: C.muted }], seg: ['AB', 'BC', 'CA', { s: 'AD', color: C.red }, { s: 'BE', color: C.red }, { s: 'CF', color: C.red }, { s: 'EF', color: C.blue }], right: ['ADC', 'BEC', 'CFB'], off: { H: [-12, -8], O: [12, -6] } }), caption: 'Ba đường cao và các tứ giác nội tiếp BCEF, AEHF.' },
      { title: 'Bảng công thức', html: `<table class="tbl"><tr><th>Nội dung</th><th>Công thức</th></tr><tr><td>Góc nội tiếp</td><td>= {{1|2}} sđ cung bị chắn</td></tr><tr><td>Tứ giác nội tiếp</td><td>∠A + ∠C = ∠B + ∠D = 180°</td></tr><tr><td>Tam giác đều cạnh a</td><td>R = {{a√3|3}}, r = {{a√3|6}}</td></tr><tr><td>Đa giác đều n cạnh</td><td>Mỗi góc {{(n − 2) · 180°|n}}</td></tr></table>` },
      { title: 'Sai lầm thường gặp', html: `<ul><li>Cho rằng góc nội tiếp bằng góc ở tâm.</li><li>Dùng “hai góc đối bù nhau” cho hai góc kề.</li><li>Nhầm tâm ngoại tiếp (trung trực) với tâm nội tiếp (phân giác).</li></ul>` }
    ],
    summary: 'Góc nội tiếp = ½ cung bị chắn; tâm ngoại tiếp/nội tiếp tam giác; tứ giác nội tiếp ⇔ hai góc đối bù nhau; đa giác đều: góc, R, r, phép quay.',
    examples: [
      { title: 'Tính góc', problem: 'Trong bài hình tổng hợp, biết ∠ABC = 65° và ∠ACB = 55°. Tính ∠AEF và ∠BHC.', solution: '∠AEF = ∠ABC = 65°. ∠BAC = 180° − 65° − 55° = 60°. Tứ giác AEHF nội tiếp ⇒ ∠EHF = 180° − 60° = 120° ⇒ ∠BHC = ∠EHF = 120° (đối đỉnh).' },
      { title: 'Bán kính', problem: 'Tam giác ABC vuông tại A nội tiếp đường tròn bán kính 6,5 cm, AB = 12 cm. Tính AC và bán kính đường tròn nội tiếp (dùng r = {{AB + AC − BC|2}}).', solution: 'BC = 13, AC = 5; r = {{12 + 5 − 13|2}} = 2 cm.' },
      { title: 'Thực tế', problem: 'Một bàn tròn đường kính 1,2 m. Người ta muốn đặt một mặt kính hình lục giác đều lớn nhất nằm trong mặt bàn. Tính cạnh mặt kính.', solution: 'Lục giác đều nội tiếp đường tròn bán kính 0,6 m có cạnh 0,6 m.' }
    ],
    exercises: [
      { question: 'Cho tứ giác ABCD nội tiếp, ∠A − ∠C = 40°. Tính ∠A, ∠C.', hints: ['∠A + ∠C = 180°.', 'Giải hệ.'], solution: '∠A = 110°, ∠C = 70°.' },
      { question: 'Tam giác đều có chu vi 18 cm. Tính bán kính đường tròn ngoại tiếp (làm tròn đến hàng phần trăm).', hints: ['a = 6.', 'R = 2√3.'], solution: 'R ≈ 3,46 cm.' },
      { question: 'Tam giác ABC nhọn nội tiếp (O) có ∠BAC = 60°, BC = 6 cm. Tính R.', hints: ['∠BOC = 120°.', 'Kẻ OM ⊥ BC: BM = 3, ∠BOM = 60° ⇒ R = {{3|sin 60°}}.'], solution: 'R = 2√3 ≈ 3,46 cm.' }
    ],
    quiz: [
      { type: 'short', calc: '(180 + 40) / 2', q: 'ABCD nội tiếp, ∠A − ∠C = 40°. ∠A = ? (độ)', unit: '°', answer: '110', explain: 'Tổng 180°.' },
      { type: 'short', calc: '(12 + Math.sqrt(13 ** 2 - 12 ** 2) - 13) / 2', q: 'Tam giác vuông tại A, BC = 13 cm, AB = 12 cm. Bán kính đường tròn nội tiếp r = (AB + AC − BC)/2 = ? (cm)', unit: 'cm', answer: '2', explain: 'AC = 5.' },
      { type: 'short', calc: '1.2 / 2', q: 'Lục giác đều lớn nhất đặt trong mặt bàn tròn đường kính 1,2 m có cạnh bao nhiêu mét?', unit: 'm', answer: '0.6', explain: 'Cạnh = R.' },
      { type: 'short', calc: 'round(18 / 3 * Math.sqrt(3) / 3, 2)', q: 'Tam giác đều chu vi 18 cm. R = ? (cm, làm tròn đến hàng phần trăm)', unit: 'cm', answer: '3.46', explain: '2√3.' },
      { type: 'short', calc: 'round(3 / Math.sin(60 * Math.PI / 180), 2)', q: 'Tam giác ABC nội tiếp (O), ∠BAC = 60°, BC = 6 cm. R = ? (cm, làm tròn đến hàng phần trăm)', unit: 'cm', answer: '3.46', explain: '3 : sin 60°.' },
      { type: 'mcq', q: 'Tam giác ABC có đường cao BE, CF. Tứ giác nào chắc chắn nội tiếp?', options: ['ABEF', 'BCEF', 'ABCE', 'ACFE'], answer: 1, explain: '∠BEC = ∠BFC = 90°.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Góc nội tiếp chắn cung 100° có số đo 50°.', answer: true, explain: 'Bằng nửa số đo cung.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tâm đường tròn nội tiếp tam giác là giao điểm ba đường trung trực.', answer: false, explain: 'Là giao ba đường phân giác.' }
    ]
  });
})();
