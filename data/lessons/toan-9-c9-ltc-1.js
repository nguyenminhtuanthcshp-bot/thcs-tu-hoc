/* Toán 9 – Luyện tập chung (sau Bài 28). Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C, G = S.geom;
  var O = [150, 130], R = 90;
  function P(deg) { return G.polar(O, deg, R); }
  THCS.registerLesson('toan-9/c9-ltc-1', {
    objectives: [
      'Vận dụng định lí và hệ quả về góc nội tiếp để tính góc, chứng minh các góc bằng nhau.',
      'Xác định tâm và tính bán kính đường tròn ngoại tiếp, nội tiếp tam giác.',
      'Phối hợp góc nội tiếp với tam giác đồng dạng, định lí Pythagore.'
    ],
    intro: 'Luyện tập các bài toán kết hợp góc nội tiếp với đường tròn ngoại tiếp, nội tiếp tam giác.',
    steps: [
      { title: 'Nhìn thấy góc nội tiếp', html: `<p>Khi đề bài cho các điểm cùng thuộc một đường tròn, hãy tìm các cặp góc nội tiếp <b>cùng chắn một cung</b> – chúng bằng nhau.</p>`,
        svg: S.geo({ w: 300, h: 260, P: { O: O, A: P(145), B: P(215), C: P(320), D: P(50) }, circles: [{ c: 'O', r: R, color: C.muted }], seg: ['AC', 'BD', 'AB', 'CD'], arcs: [['BAC', 1, '', C.orange, 24], ['BDC', 1, '', C.orange, 24]], off: { O: [0, 22] } }), caption: '∠BAC = ∠BDC (cùng chắn cung BC).' },
      { title: 'Tâm ngoại tiếp tam giác vuông', html: `<p>Nếu ∠AMB = 90° với A, B cố định thì M nằm trên đường tròn đường kính AB. Đây là cách nhanh nhất để chứng minh nhiều điểm cùng thuộc một đường tròn.</p>` },
      { title: 'Công thức liên hệ', html: `<ul><li>Tam giác vuông: R = {{cạnh huyền|2}}.</li><li>Tam giác đều cạnh a: R = {{a√3|3}}, r = {{a√3|6}}.</li><li>Góc nội tiếp = {{1|2}} góc ở tâm cùng chắn một cung.</li></ul>` },
      { title: 'Tích các đoạn dây', html: `<p>Hai dây AB, CD cắt nhau tại M: MA · MB = MC · MD (chứng minh bằng tam giác đồng dạng nhờ các góc nội tiếp bằng nhau).</p>` }
    ],
    summary: 'Tìm các góc nội tiếp cùng chắn một cung; góc vuông ⇒ đường tròn đường kính; công thức R, r của tam giác vuông và tam giác đều; tích các đoạn dây.',
    examples: [
      { title: 'Tính góc', problem: 'Tam giác ABC nội tiếp (O) có ∠A = 50°, ∠B = 70°. Tính ∠BOC, ∠AOC.', solution: '∠BOC = 2∠A = 100°; ∠AOC = 2∠B = 140°.' },
      { title: 'Tích đoạn dây', problem: 'Hai dây AB và CD cắt nhau tại M; MA = 4, MB = 6, MC = 3. Tính MD.', solution: 'MD = {{4 · 6|3}} = 8.' },
      { title: 'Bốn điểm cùng thuộc đường tròn', problem: 'Tam giác ABC có hai đường cao BE và CF. Chứng minh B, C, E, F cùng thuộc một đường tròn.', solution: '∠BEC = ∠BFC = 90° ⇒ E, F thuộc đường tròn đường kính BC.' }
    ],
    exercises: [
      { question: 'Tam giác ABC nội tiếp (O; R) với ∠A = 30°, BC = 6 cm. Tính R.', hints: ['∠BOC = 60° ⇒ tam giác OBC đều.', 'R = BC.'], solution: 'R = 6 cm.' },
      { question: 'Hai dây AB và CD cắt nhau tại M: MA = 2, MB = 9, MD = 3. Tính MC.', hints: ['MA · MB = MC · MD.', 'MC = 18 : 3.'], solution: 'MC = 6.' },
      { question: 'Tam giác đều nội tiếp đường tròn có bán kính 2√3 cm. Tính chu vi tam giác.', hints: ['a = R√3.', 'a = 6.'], solution: '18 cm.' }
    ],
    quiz: [
      { type: 'short', calc: '2 * 50', q: 'Tam giác ABC nội tiếp (O), ∠A = 50°. ∠BOC = ? (độ)', unit: '°', answer: '100', explain: 'Gấp đôi góc nội tiếp.' },
      { type: 'short', calc: '4 * 6 / 3', q: 'Dây AB, CD cắt nhau tại M; MA = 4, MB = 6, MC = 3. MD = ?', answer: '8', explain: 'MA · MB = MC · MD.' },
      { type: 'short', calc: '6 / (2 * Math.sin(30 * Math.PI / 180))', q: 'Tam giác ABC nội tiếp (O; R), ∠A = 30°, BC = 6 cm. R = ? (cm)', unit: 'cm', answer: '6', explain: 'Tam giác OBC đều.' },
      { type: 'short', calc: '3 * (2 * Math.sqrt(3)) * Math.sqrt(3)', q: 'Tam giác đều nội tiếp đường tròn bán kính 2√3 cm. Chu vi (cm)?', unit: 'cm', answer: '18', explain: 'a = R√3 = 6.' },
      { type: 'short', calc: '2 * 9 / 3', q: 'Dây AB, CD cắt nhau tại M: MA = 2, MB = 9, MD = 3. MC = ?', answer: '6', explain: '18 : 3.' },
      { type: 'mcq', q: 'Tam giác ABC có hai đường cao BE, CF. Bốn điểm B, C, E, F cùng thuộc đường tròn có đường kính:', options: ['AB', 'BC', 'AC', 'EF'], answer: 1, explain: '∠BEC = ∠BFC = 90°.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nếu ∠AMB = 90° thì M thuộc đường tròn đường kính AB.', answer: true, explain: 'Hệ quả góc nội tiếp.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tam giác ABC nội tiếp (O) có ∠B = 70° thì ∠AOC = 70°.', answer: false, explain: '∠AOC = 140°.' }
    ]
  });
})();
