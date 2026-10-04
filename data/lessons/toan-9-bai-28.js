/* Toán 9 – Bài 28. Đường tròn ngoại tiếp và đường tròn nội tiếp của một tam giác. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C, G = S.geom;
  var A = [110, 40], B = [40, 200], Cc = [270, 200], O = G.circumcenter(A, B, Cc), Rr = G.dist(O, A);
  var I = G.incenter(A, B, Cc), D = G.foot(I, B, Cc), E = G.foot(I, A, Cc), F = G.foot(I, A, B), ri = G.dist(I, D);
  var eA = [150, 40], eB = [60, 40 + 90 * Math.sqrt(3)], eC = [240, 40 + 90 * Math.sqrt(3)], eO = G.centroid(eA, eB, eC);
  var rA = [60, 50], rB = [60, 200], rC = [280, 200], rM = G.mid(rA, rC);
  THCS.registerLesson('toan-9/bai-28', {
    objectives: [
      'Nhận biết đường tròn ngoại tiếp tam giác và xác định tâm là giao điểm ba đường trung trực.',
      'Nhận biết đường tròn nội tiếp tam giác và xác định tâm là giao điểm ba đường phân giác trong.',
      'Tính bán kính đường tròn ngoại tiếp tam giác vuông, tam giác đều; bán kính đường tròn nội tiếp tam giác đều.'
    ],
    intro: 'Muốn đặt một chiếc đèn cách đều ba ngôi nhà, hay cắt một tấm gỗ tròn to nhất từ tấm gỗ hình tam giác, ta cần đến đường tròn ngoại tiếp và nội tiếp tam giác.',
    steps: [
      { title: 'Đường tròn ngoại tiếp tam giác', html: `<p>Đường tròn đi qua ba đỉnh của tam giác gọi là <b>đường tròn ngoại tiếp</b> tam giác; tam giác gọi là tam giác <b>nội tiếp</b> đường tròn.</p><p>Tâm O cách đều ba đỉnh nên là <b>giao điểm ba đường trung trực</b> của tam giác.</p>`,
        svg: S.geo({ w: 320, h: 280, P: { A: A, B: B, C: Cc, O: O, M: G.mid(B, Cc) }, circles: [{ c: 'O', r: Rr, color: C.blue }], seg: ['AB', 'BC', 'CA'], dash: ['OA', 'OB', 'OC', { s: 'OM', color: C.orange }], right: ['OMC'], hide: ['M'], off: { O: [14, -10] } }), caption: 'O là giao điểm các đường trung trực; OA = OB = OC = R.' },
      { title: 'Tam giác vuông và tam giác đều', html: `<ul><li>Tam giác vuông: tâm đường tròn ngoại tiếp là <b>trung điểm cạnh huyền</b>, R = {{cạnh huyền|2}}.</li><li>Tam giác đều cạnh a: tâm là trọng tâm, R = {{a√3|3}}.</li></ul>`,
        svg: [S.geo({ w: 320, h: 250, P: { A: rA, B: rB, C: rC, M: rM }, circles: [{ c: 'M', r: G.dist(rM, rA), color: C.blue }], seg: ['AB', 'BC', 'CA'], dash: ['MB'], right: ['ABC'], off: { M: [8, -8] } }),
          S.geo({ w: 300, h: 250, P: { A: eA, B: eB, C: eC, O: eO }, circles: [{ c: 'O', r: G.dist(eO, eA), color: C.blue }, { c: 'O', r: G.dist(eO, G.mid(eB, eC)), color: C.green, dash: true }], seg: ['AB', 'BC', 'CA'], ticks: [['AB', 1], ['BC', 1], ['CA', 1]], off: { O: [12, 4] } })], caption: 'Trái: M là trung điểm cạnh huyền. Phải: tam giác đều có tâm hai đường tròn trùng nhau.' },
      { title: 'Đường tròn nội tiếp tam giác', html: `<p>Đường tròn tiếp xúc với ba cạnh của tam giác gọi là <b>đường tròn nội tiếp</b> tam giác.</p><p>Tâm I cách đều ba cạnh nên là <b>giao điểm ba đường phân giác trong</b>.</p>`,
        svg: S.geo({ w: 320, h: 250, P: { A: A, B: B, C: Cc, I: I, D: D, E: E, F: F }, circles: [{ c: 'I', r: ri, color: C.green }], seg: ['AB', 'BC', 'CA'], dash: ['BI', 'CI', 'AI', { s: 'ID', color: C.red }, { s: 'IE', color: C.red }, { s: 'IF', color: C.red }], right: ['IDC', 'IEC', 'IFB'], off: { I: [16, 16] } }), caption: 'I là giao điểm các đường phân giác; ID = IE = IF = r.' },
      { title: 'Bán kính trong tam giác đều', html: `<p>Tam giác đều cạnh a có đường cao h = {{a√3|2}}. Tâm O là trọng tâm nên:</p><ul><li>R = {{2|3}}h = {{a√3|3}};</li><li>r = {{1|3}}h = {{a√3|6}} = {{R|2}}.</li></ul><p>Ví dụ: a = 6 cm ⇒ R = 2√3 ≈ 3,46 cm, r = √3 ≈ 1,73 cm.</p>` }
    ],
    summary: 'Tâm đường tròn ngoại tiếp = giao ba đường trung trực; tâm đường tròn nội tiếp = giao ba đường phân giác. Tam giác vuông: R = cạnh huyền/2. Tam giác đều cạnh a: R = a√3/3, r = a√3/6.',
    examples: [
      { title: 'Tam giác vuông', problem: 'Tam giác ABC vuông tại A, AB = 9 cm, AC = 12 cm. Tính bán kính đường tròn ngoại tiếp.', solution: 'BC = 15 ⇒ R = 7,5 cm.' },
      { title: 'Tam giác đều', problem: 'Tam giác đều cạnh 9 cm. Tính R và r.', solution: 'R = {{9√3|3}} = 3√3 ≈ 5,2 cm; r = {{3√3|2}} ≈ 2,6 cm.' },
      { title: 'Ngược lại', problem: 'Tam giác đều nội tiếp đường tròn bán kính 4 cm. Tính cạnh tam giác.', solution: 'a = R√3 = 4√3 ≈ 6,93 cm.' }
    ],
    exercises: [
      { question: 'Tam giác ABC vuông tại A có BC = 20 cm. Tính bán kính đường tròn ngoại tiếp tam giác.', hints: ['Tâm là trung điểm BC.', 'R = BC : 2.'], solution: 'R = 10 cm.' },
      { question: 'Tam giác đều có bán kính đường tròn nội tiếp là 2 cm. Tính cạnh và bán kính đường tròn ngoại tiếp.', hints: ['R = 2r.', 'a = R√3.'], solution: 'R = 4 cm; a = 4√3 ≈ 6,93 cm.' },
      { question: 'Giải thích vì sao tâm đường tròn nội tiếp tam giác luôn nằm bên trong tam giác.', hints: ['Tâm là giao ba đường phân giác trong.', 'Các đường phân giác trong đều nằm trong tam giác.'], solution: 'Ba đường phân giác trong nằm trong tam giác nên giao điểm của chúng nằm trong tam giác.' }
    ],
    quiz: [
      { type: 'short', calc: 'Math.sqrt(9 ** 2 + 12 ** 2) / 2', q: 'Tam giác vuông có hai cạnh góc vuông 9 cm và 12 cm. Bán kính đường tròn ngoại tiếp (cm)?', unit: 'cm', answer: '7.5', explain: 'Cạnh huyền 15.' },
      { type: 'short', calc: 'round(9 * Math.sqrt(3) / 3, 2)', q: 'Tam giác đều cạnh 9 cm. R = ? (cm, làm tròn đến hàng phần trăm)', unit: 'cm', answer: '5.2', explain: '3√3 ≈ 5,196.' },
      { type: 'short', calc: 'round(4 * Math.sqrt(3), 2)', q: 'Tam giác đều nội tiếp đường tròn bán kính 4 cm. Cạnh (cm, làm tròn đến hàng phần trăm)?', unit: 'cm', answer: '6.93', explain: 'a = R√3.' },
      { type: 'short', calc: '2 * 2', q: 'Tam giác đều có r = 2 cm. Bán kính đường tròn ngoại tiếp R = ? (cm)', unit: 'cm', answer: '4', explain: 'R = 2r.' },
      { type: 'short', calc: '20 / 2', q: 'Tam giác vuông có cạnh huyền 20 cm. R = ? (cm)', unit: 'cm', answer: '10', explain: 'Nửa cạnh huyền.' },
      { type: 'mcq', q: 'Tâm đường tròn nội tiếp tam giác là giao điểm của:', options: ['ba đường trung trực', 'ba đường phân giác trong', 'ba đường cao', 'ba đường trung tuyến'], answer: 1, explain: 'Cách đều ba cạnh.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tâm đường tròn ngoại tiếp tam giác vuông là trung điểm cạnh huyền.', answer: true, explain: 'Hệ quả góc nội tiếp chắn nửa đường tròn.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tâm đường tròn ngoại tiếp tam giác luôn nằm bên trong tam giác.', answer: false, explain: 'Với tam giác tù, tâm nằm ngoài tam giác.' }
    ]
  });
})();
