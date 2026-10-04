/* Toán 9 – Bài 29. Tứ giác nội tiếp. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C, G = S.geom;
  var O = [150, 130], R = 90;
  function P(deg) { return G.polar(O, deg, R); }
  var tA = [120, 40], tB = [40, 210], tC = [280, 210], tE = G.foot(tB, tA, tC), tF = G.foot(tC, tA, tB), tM = G.mid(tB, tC);
  THCS.registerLesson('toan-9/bai-29', {
    objectives: [
      'Nhận biết tứ giác nội tiếp đường tròn.',
      'Giải thích được định lí: trong tứ giác nội tiếp, tổng hai góc đối bằng 180°.',
      'Chứng minh một tứ giác là tứ giác nội tiếp bằng các dấu hiệu thường dùng.',
      'Nhận biết hình chữ nhật, hình vuông, hình thang cân là các tứ giác nội tiếp và xác định tâm đường tròn ngoại tiếp.'
    ],
    intro: 'Không phải tứ giác nào cũng có một đường tròn đi qua cả bốn đỉnh. Những tứ giác “may mắn” đó có một tính chất rất đẹp về góc.',
    steps: [
      { title: 'Tứ giác nội tiếp', html: `<p>Tứ giác có bốn đỉnh cùng nằm trên một đường tròn gọi là <b>tứ giác nội tiếp</b> đường tròn đó.</p>`,
        svg: S.geo({ w: 300, h: 260, P: { O: O, A: P(130), B: P(200), C: P(300), D: P(30) }, circles: [{ c: 'O', r: R, color: C.blue }], seg: ['AB', 'BC', 'CD', 'DA'], fill: [['ABCD', C.blueL || '#dbeafe']], arcs: [['DAB', 1, '', C.orange, 22], ['BCD', 2, '', C.green, 22]], off: { O: [-4, 20] } }), caption: 'ABCD nội tiếp (O): ∠A + ∠C = 180°.' },
      { title: 'Định lí tổng hai góc đối', html: `<p>Trong một tứ giác nội tiếp, <b>tổng số đo hai góc đối bằng 180°</b>.</p><p>Lí do: ∠A chắn cung BCD, ∠C chắn cung BAD; hai cung này hợp thành cả đường tròn (360°) nên ∠A + ∠C = {{360°|2}} = 180°.</p>` },
      { title: 'Dấu hiệu nhận biết', html: `<ul><li>Tứ giác có tổng hai góc đối bằng 180°.</li><li>Tứ giác có bốn đỉnh cách đều một điểm.</li><li>Tứ giác có hai đỉnh kề nhau cùng nhìn cạnh nối hai đỉnh còn lại dưới hai góc bằng nhau (đặc biệt là hai góc vuông).</li></ul>`,
        svg: S.geo({ w: 320, h: 250, P: { A: tA, B: tB, C: tC, E: tE, F: tF, M: tM }, circles: [{ c: 'M', r: G.dist(tM, tB), color: C.blue, dash: true }], seg: ['AB', 'BC', 'CA', { s: 'BE', color: C.red }, { s: 'CF', color: C.red }], right: ['BEC', 'CFB'], off: { M: [0, 18] } }), caption: '∠BEC = ∠BFC = 90° ⇒ BCEF nội tiếp đường tròn đường kính BC.' },
      { title: 'Các tứ giác nội tiếp đặc biệt', html: `<ul><li>Hình chữ nhật, hình vuông: tâm là giao điểm hai đường chéo, R = {{đường chéo|2}}.</li><li>Hình thang cân luôn nội tiếp được.</li><li>Hình bình hành (không phải hình chữ nhật), hình thoi (không phải hình vuông) <b>không</b> nội tiếp được.</li></ul>`,
        svg: S.geo({ w: 300, h: 230, P: { A: [60, 50], B: [240, 50], C: [240, 170], D: [60, 170], I: [150, 110] }, circles: [{ c: 'I', r: G.dist([150, 110], [60, 50]), color: C.blue }], seg: ['AB', 'BC', 'CD', 'DA'], dash: ['AC', 'BD'], right: ['DAB', 'ABC', 'BCD', 'CDA'], off: { I: [0, 20] } }), caption: 'Hình chữ nhật nội tiếp đường tròn có tâm là giao điểm hai đường chéo.' }
    ],
    summary: 'Tứ giác nội tiếp: 4 đỉnh trên một đường tròn ⇔ tổng hai góc đối bằng 180°. Dấu hiệu: tổng hai góc đối 180°; 4 đỉnh cách đều một điểm; hai đỉnh kề cùng nhìn một cạnh dưới hai góc bằng nhau. Hình chữ nhật, hình vuông, hình thang cân nội tiếp được.',
    examples: [
      { title: 'Tính góc', problem: 'Tứ giác ABCD nội tiếp có ∠A = 75°, ∠B = 110°. Tính ∠C, ∠D.', solution: '∠C = 180° − 75° = 105°; ∠D = 180° − 110° = 70°.' },
      { title: 'Chứng minh nội tiếp', problem: 'Cho tam giác ABC nhọn, hai đường cao BE, CF cắt nhau tại H. Chứng minh tứ giác AEHF nội tiếp.', solution: '∠AEH = ∠AFH = 90° ⇒ ∠AEH + ∠AFH = 180° ⇒ AEHF nội tiếp (đường tròn đường kính AH).' },
      { title: 'Bán kính', problem: 'Hình chữ nhật 6 cm × 8 cm nội tiếp đường tròn. Tính bán kính.', solution: 'Đường chéo 10 cm ⇒ R = 5 cm.' }
    ],
    exercises: [
      { question: 'Tứ giác ABCD nội tiếp có ∠A = 2∠C. Tính ∠A và ∠C.', hints: ['∠A + ∠C = 180°.', '3∠C = 180°.'], solution: '∠C = 60°, ∠A = 120°.' },
      { question: 'Hình vuông cạnh 4 cm nội tiếp đường tròn. Tính bán kính (làm tròn đến hàng phần trăm).', hints: ['Đường chéo 4√2.', 'R = 2√2.'], solution: 'R = 2√2 ≈ 2,83 cm.' },
      { question: 'Tứ giác có các góc 80°, 95°, 100°, 85° (theo thứ tự) có nội tiếp được không?', hints: ['Kiểm tra tổng hai góc đối.', '80° + 100° = 180°.'], solution: 'Có, vì 80° + 100° = 180° (và 95° + 85° = 180°).' }
    ],
    quiz: [
      { type: 'short', calc: '180 - 75', q: 'ABCD nội tiếp, ∠A = 75°. ∠C = ? (độ)', unit: '°', answer: '105', explain: '180° − 75°.' },
      { type: 'short', calc: '2 * 180 / 3', q: 'ABCD nội tiếp, ∠A = 2∠C. ∠A = ? (độ)', unit: '°', answer: '120', explain: '3∠C = 180°.' },
      { type: 'short', calc: 'Math.sqrt(6 ** 2 + 8 ** 2) / 2', q: 'Hình chữ nhật 6 cm × 8 cm. Bán kính đường tròn ngoại tiếp (cm)?', unit: 'cm', answer: '5', explain: 'Nửa đường chéo.' },
      { type: 'short', calc: 'round(4 * Math.sqrt(2) / 2, 2)', q: 'Hình vuông cạnh 4 cm. Bán kính đường tròn ngoại tiếp (cm, làm tròn đến hàng phần trăm)?', unit: 'cm', answer: '2.83', explain: '2√2.' },
      { type: 'short', calc: '180 - 110', q: 'ABCD nội tiếp, ∠B = 110°. ∠D = ? (độ)', unit: '°', answer: '70', explain: 'Hai góc đối bù nhau.' },
      { type: 'mcq', q: 'Tứ giác nào luôn nội tiếp được đường tròn?', options: ['Hình bình hành', 'Hình thang cân', 'Hình thoi', 'Hình thang vuông'], answer: 1, explain: 'Hình thang cân có hai góc đối bù nhau.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tứ giác có các góc 80°, 95°, 100°, 85° (theo thứ tự) nội tiếp được.', answer: true, explain: '80° + 100° = 180°.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mọi hình thoi đều nội tiếp được đường tròn.', answer: false, explain: 'Chỉ hình vuông.' }
    ]
  });
})();
