/* Toán 9 – Luyện tập chung (sau Bài 30). Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C, G = S.geom;
  var O = [150, 130], R = 90;
  function P(deg) { return G.polar(O, deg, R); }
  THCS.registerLesson('toan-9/c9-ltc-2', {
    objectives: [
      'Vận dụng định lí và dấu hiệu nhận biết tứ giác nội tiếp trong bài toán chứng minh.',
      'Tính các yếu tố của đa giác đều: góc, cạnh, bán kính đường tròn ngoại tiếp và nội tiếp.',
      'Nhận biết phép quay giữ nguyên hình đa giác đều.'
    ],
    intro: 'Luyện tập tổng hợp về tứ giác nội tiếp và đa giác đều.',
    steps: [
      { title: 'Chứng minh tứ giác nội tiếp', html: `<p>Ba hướng thường dùng:</p><ul><li>Tổng hai góc đối bằng 180° (thường gặp khi có hai góc vuông đối nhau).</li><li>Hai đỉnh kề cùng nhìn một cạnh dưới góc bằng nhau.</li><li>Bốn đỉnh cách đều một điểm.</li></ul>` },
      { title: 'Hình minh hoạ', html: `<p>Từ điểm M nằm ngoài (O), kẻ hai tiếp tuyến MA, MB. Tứ giác OAMB có ∠OAM + ∠OBM = 90° + 90° = 180° nên nội tiếp đường tròn đường kính OM.</p>`,
        svg: S.geo({ w: 360, h: 260, P: { O: [110, 130], A: G.polar([110, 130], 60, 80), B: G.polar([110, 130], -60, 80), M: [270, 130], K: [190, 130] }, circles: [{ c: 'O', r: 80, color: C.muted }, { c: 'K', r: 80, color: C.blue, dash: true }], seg: ['OA', 'OB', 'MA', 'MB'], dash: ['OM'], right: ['OAM', 'OBM'], off: { O: [-14, 5], M: [14, 5], K: [0, 20] } }), caption: 'OAMB nội tiếp đường tròn tâm K (trung điểm OM).' },
      { title: 'Công thức đa giác đều', html: `<table class="tbl"><tr><th>Đa giác đều cạnh a</th><th>R</th><th>r</th></tr><tr><td>Tam giác đều</td><td>{{a√3|3}}</td><td>{{a√3|6}}</td></tr><tr><td>Hình vuông</td><td>{{a√2|2}}</td><td>{{a|2}}</td></tr><tr><td>Lục giác đều</td><td>a</td><td>{{a√3|2}}</td></tr></table>` },
      { title: 'Phép quay', html: `<p>Đa giác đều n cạnh được giữ nguyên bởi n phép quay tâm O với các góc k · {{360°|n}} (k = 1, 2, …, n).</p>`,
        svg: S.regPoly({ n: 8, R: 85, rot: 90, radii: true, arcs: [['A-O-B', 1, '45°', C.red, 28]], off: { O: [-17, 13] } }), caption: 'Bát giác đều: phép quay 45° quanh O biến A thành B.' }
    ],
    summary: 'Chứng minh nội tiếp bằng tổng hai góc đối, hai góc cùng nhìn một cạnh, hoặc bốn đỉnh cách đều một điểm. Công thức R, r cho tam giác đều, hình vuông, lục giác đều. Phép quay k·360°/n.',
    examples: [
      { title: 'Tiếp tuyến', problem: 'MA, MB là hai tiếp tuyến của (O; 3 cm), OM = 5 cm. Tính bán kính đường tròn đi qua bốn điểm O, A, M, B.', solution: 'OAMB nội tiếp đường tròn đường kính OM ⇒ bán kính 2,5 cm.' },
      { title: 'Góc trong tứ giác nội tiếp', problem: 'Tứ giác ABCD nội tiếp có ∠BAD = 100° và ∠ABD = 45°. Tính ∠BCD và ∠ACD.', solution: '∠BCD = 180° − 100° = 80°; ∠ACD = ∠ABD = 45° (cùng chắn cung AD).' },
      { title: 'Lục giác đều', problem: 'Lục giác đều nội tiếp đường tròn bán kính 4 cm. Tính chu vi và bán kính đường tròn nội tiếp.', solution: 'Cạnh 4 ⇒ chu vi 24 cm; r = 2√3 ≈ 3,46 cm.' }
    ],
    exercises: [
      { question: 'Tam giác ABC nhọn có các đường cao AD, BE cắt nhau tại H. Chứng minh tứ giác CDHE nội tiếp.', hints: ['∠HDC = ∠HEC = 90°.', 'Tổng hai góc đối bằng 180°.'], solution: '∠HDC + ∠HEC = 180° ⇒ CDHE nội tiếp đường tròn đường kính CH.' },
      { question: 'Hình vuông có bán kính đường tròn nội tiếp 3 cm. Tính bán kính đường tròn ngoại tiếp (làm tròn đến hàng phần trăm).', hints: ['Cạnh a = 2r = 6.', 'R = {{a√2|2}}.'], solution: 'R = 3√2 ≈ 4,24 cm.' },
      { question: 'Mỗi góc của một đa giác đều bằng 140°. Đa giác có bao nhiêu cạnh và phép quay nhỏ nhất giữ nguyên nó là bao nhiêu độ?', hints: ['Góc ngoài 40° ⇒ n = 360 : 40.', 'Góc quay {{360°|n}}.'], solution: 'n = 9; góc quay 40°.' }
    ],
    quiz: [
      { type: 'short', calc: '5 / 2', q: 'MA, MB là tiếp tuyến của (O; 3 cm), OM = 5 cm. Bán kính đường tròn qua O, A, M, B (cm)?', unit: 'cm', answer: '2.5', explain: 'Nửa OM.' },
      { type: 'short', calc: '180 - 100', q: 'ABCD nội tiếp, ∠BAD = 100°. ∠BCD = ? (độ)', unit: '°', answer: '80', explain: 'Bù nhau.' },
      { type: 'short', calc: '6 * 4', q: 'Lục giác đều nội tiếp đường tròn bán kính 4 cm. Chu vi (cm)?', unit: 'cm', answer: '24', explain: 'Cạnh bằng R.' },
      { type: 'short', calc: 'round(2 * 3 * Math.sqrt(2) / 2, 2)', q: 'Hình vuông có r = 3 cm. R = ? (cm, làm tròn đến hàng phần trăm)', unit: 'cm', answer: '4.24', explain: '3√2.' },
      { type: 'short', calc: '360 / (180 - 140)', q: 'Đa giác đều có mỗi góc 140°. Số cạnh?', unit: 'cạnh', answer: '9', explain: 'Góc ngoài 40°.' },
      { type: 'mcq', q: 'Tứ giác OAMB (MA, MB là tiếp tuyến của (O)) nội tiếp đường tròn có đường kính:', options: ['OA', 'OM', 'AB', 'MA'], answer: 1, explain: '∠OAM = ∠OBM = 90°.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Phép quay 45° quanh tâm giữ nguyên hình bát giác đều.', answer: true, explain: '360°/8 = 45°.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tứ giác ABCD nội tiếp thì ∠ACD = ∠ABC.', answer: false, explain: '∠ACD = ∠ABD (cùng chắn cung AD).' }
    ]
  });
})();
