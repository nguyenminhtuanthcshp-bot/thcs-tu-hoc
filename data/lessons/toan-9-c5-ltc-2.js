/* Toán 9 – Luyện tập chung (sau Bài 17). Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C, G = S.geom;
  var O = [110, 120], R = 60, O2 = [250, 120], r = 40;
  THCS.registerLesson('toan-9/c5-ltc-2', {
    objectives: [
      'Vận dụng khoảng cách từ tâm đến đường thẳng để xác định vị trí tương đối của đường thẳng và đường tròn.',
      'Vận dụng dấu hiệu nhận biết và tính chất của tiếp tuyến, hai tiếp tuyến cắt nhau.',
      'Xác định vị trí tương đối của hai đường tròn và tính các độ dài liên quan.'
    ],
    intro: 'Luyện tập các bài toán về tiếp tuyến và vị trí tương đối – những dạng toán quan trọng của hình học lớp 9.',
    steps: [
      { title: 'So sánh để kết luận', html: `<ul><li>Đường thẳng – đường tròn: so sánh d với R.</li><li>Hai đường tròn: so sánh OO' với R + r và R − r.</li></ul>` },
      { title: 'Tiếp tuyến chung', html: `<p>Đường thẳng tiếp xúc với cả hai đường tròn gọi là <b>tiếp tuyến chung</b>. Hai đường tròn ở ngoài nhau có 4 tiếp tuyến chung (2 chung ngoài, 2 chung trong).</p>`,
        svg: S.geo({ w: 360, h: 240, P: { O: O, "O'": O2, A: G.polar(O, Math.acos((R - r) / 140) * 180 / Math.PI, R), B: G.polar(O2, Math.acos((R - r) / 140) * 180 / Math.PI, r) }, circles: [{ c: 'O', r: R, color: C.blue }, { c: "O'", r: r, color: C.orange }], seg: [{ s: 'AB', color: C.red }, 'OA', "O'-B"], dash: ["O-O'"], right: ["O-A-B", "O'-B-A"], off: { O: [-4, 18], "O'": [6, 18] } }), caption: 'AB là một tiếp tuyến chung ngoài: OA ⊥ AB, O\'B ⊥ AB.' },
      { title: 'Độ dài đoạn tiếp tuyến chung ngoài', html: `<p>Kẻ O'H ⊥ OA: tứ giác ABO'H là hình chữ nhật nên AB = HO' = √(OO'<sup>2</sup> − (R − r)<sup>2</sup>).</p>` },
      { title: 'Chứng minh tiếp tuyến', html: `<p>Để chứng minh đường thẳng a là tiếp tuyến của (O) tại A: chứng minh A thuộc (O) và a ⊥ OA (hoặc khoảng cách từ O đến a bằng R).</p>` }
    ],
    summary: 'd và R quyết định vị trí đường thẳng – đường tròn; OO\', R + r, R − r quyết định vị trí hai đường tròn. Tiếp tuyến chung ngoài dài √(OO\'² − (R − r)²).',
    examples: [
      { title: 'Tiếp tuyến chung', problem: 'Hai đường tròn (O; 6 cm), (O\'; 2 cm), OO\' = 5 cm. Tính độ dài đoạn tiếp tuyến chung ngoài AB.', solution: 'R − r = 4 &lt; 5 &lt; 8: cắt nhau. AB = √(25 − 16) = 3 cm.' },
      { title: 'Hai tiếp tuyến', problem: 'Từ M kẻ tiếp tuyến MA, MB tới (O; 5 cm), OM = 13 cm. Tính MA và độ dài dây AB.', solution: 'MA = 12. Gọi H = OM ∩ AB: AH = {{MA · OA|OM}} = {{60|13}} ⇒ AB = {{120|13}} ≈ 9,23 cm.' },
      { title: 'Vị trí đường thẳng', problem: 'Trên mặt phẳng toạ độ, đường tròn tâm I(2; 3) bán kính 3. Đường thẳng y = 0 (trục hoành) có vị trí thế nào với đường tròn?', solution: 'Khoảng cách từ I đến trục hoành là 3 = R ⇒ tiếp xúc.' }
    ],
    exercises: [
      { question: 'Hai đường tròn (O; 5 cm), (O\'; 2 cm), OO\' = 5 cm. Tính độ dài đoạn tiếp tuyến chung ngoài.', hints: ['R − r = 3.', '√(25 − 9).'], solution: '4 cm.' },
      { question: 'Đường tròn tâm I(−3; 2) bán kính 2 có vị trí thế nào với trục tung?', hints: ['Khoảng cách từ I đến trục tung là |−3| = 3.', 'So với R = 2.'], solution: '3 &gt; 2: không giao nhau.' },
      { question: 'Từ M kẻ tiếp tuyến MA, MB tới (O; R), ∠AMB = 90°. Tính OM theo R.', hints: ['OAMB là hình vuông.', 'OM là đường chéo.'], solution: 'OM = R√2.' }
    ],
    quiz: [
      { type: 'short', calc: 'Math.sqrt(5 * 5 - (6 - 2) ** 2)', q: '(O; 6 cm), (O\'; 2 cm), OO\' = 5 cm. Độ dài đoạn tiếp tuyến chung ngoài (cm)?', unit: 'cm', answer: '3', explain: '√(25 − 16).' },
      { type: 'short', calc: 'Math.sqrt(5 * 5 - (5 - 2) ** 2)', q: '(O; 5 cm), (O\'; 2 cm), OO\' = 5 cm. Độ dài đoạn tiếp tuyến chung ngoài (cm)?', unit: 'cm', answer: '4', explain: '√(25 − 9).' },
      { type: 'mcq', q: 'Đường tròn tâm I(2; 3) bán kính 3 và trục hoành:', options: ['cắt nhau', 'tiếp xúc', 'không giao nhau', 'trùng nhau'], answer: 1, explain: 'd = 3 = R.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hai đường tròn ở ngoài nhau có bốn tiếp tuyến chung.', answer: true, explain: '2 chung ngoài, 2 chung trong.' },
      { type: 'short', calc: 'Math.sqrt(13 * 13 - 5 * 5)', q: 'MA là tiếp tuyến của (O; 5 cm), OM = 13 cm. MA = ? (cm)', unit: 'cm', answer: '12', explain: '√144.' },
      { type: 'short', calc: 'round(2 * 12 * 5 / 13, 2)', q: 'Với bài trên (MA, MB là hai tiếp tuyến), tính dây AB (cm, làm tròn đến hàng phần trăm).', unit: 'cm', answer: '9.23', explain: 'AB = 2 · MA · OA : OM.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Đường tròn tâm I(−3; 2) bán kính 2 cắt trục tung.', answer: false, explain: 'd = 3 &gt; 2.' },
      { type: 'mcq', q: 'MA, MB là tiếp tuyến của (O; R), ∠AMB = 90°. OM bằng:', options: ['R', '2R', 'R√2', 'R√3'], answer: 2, explain: 'OAMB là hình vuông.' }
    ]
  });
})();
