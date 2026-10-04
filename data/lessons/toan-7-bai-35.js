/* Toán 7 – Bài 35. Sự đồng quy của ba đường trung trực, ba đường cao trong một tam giác. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, C = S.C, G = S.geom;
var A = [165, 45], B = [60, 215], Cc = [330, 215];
var O = G.circumcenter(A, B, Cc), R = G.dist(O, A), M = G.mid(B, Cc), N = G.mid(Cc, A), P = G.mid(A, B);
var Hh = G.orthocenter(A, B, Cc), D = G.foot(A, B, Cc), E = G.foot(B, Cc, A), F = G.foot(Cc, A, B);
function ext(X, Y, t) { return G.along(X, Y, t); }
function circleFig() {
  var it = [{ circle: [O[0], O[1], R], color: C.muted, width: 1.2 }, { poly: [A, B, Cc], color: C.ink }];
  [[M, B], [N, Cc], [P, A]].forEach(function (m) {
    var u = [O[0] - m[0][0], O[1] - m[0][1]], L = Math.sqrt(u[0] * u[0] + u[1] * u[1]) || 1, k = 1;
    var a = [m[0][0] - u[0] / L * 25, m[0][1] - u[1] / L * 25], b = [O[0] + u[0] / L * 30, O[1] + u[1] / L * 30];
    it.push({ seg: [a[0], a[1], b[0], b[1]], color: C.purple, dash: true, width: 1.8 }, { right: [m[0][0], m[0][1], O[0], O[1], m[1][0], m[1][1]], size: 9, color: C.purple });
  });
  it.push({ tick: [B[0], B[1], M[0], M[1]], n: 1 }, { tick: [M[0], M[1], Cc[0], Cc[1]], n: 1 }, { tick: [Cc[0], Cc[1], N[0], N[1]], n: 2 }, { tick: [N[0], N[1], A[0], A[1]], n: 2 }, { tick: [A[0], A[1], P[0], P[1]], n: 3 }, { tick: [P[0], P[1], B[0], B[1]], n: 3 });
  it.push({ seg: [O[0], O[1], A[0], A[1]], color: C.orange, width: 1.6 }, { seg: [O[0], O[1], B[0], B[1]], color: C.orange, width: 1.6 }, { seg: [O[0], O[1], Cc[0], Cc[1]], color: C.orange, width: 1.6 });
  it.push({ pt: [A[0], A[1], 'A', 0, -10] }, { pt: [B[0], B[1], 'B', -12, 6] }, { pt: [Cc[0], Cc[1], 'C', 12, 6] }, { pt: [O[0], O[1], 'O', 18, 6], color: C.orange });
  return S.draw({ w: 390, h: Math.ceil(O[1] + R + 10), items: it, aria: 'Ba đường trung trực đồng quy tại O' });
}
THCS.registerLesson('toan-7/bai-35', {
  objectives: [
    'Nhận biết đường trung trực của một đoạn thẳng, đường trung trực và đường cao của tam giác.',
    'Nắm tính chất: ba đường trung trực đồng quy tại điểm cách đều ba đỉnh; ba đường cao đồng quy tại trực tâm.',
    'Vận dụng tính chất để tính độ dài, số đo góc và giải bài toán thực tế.'
  ],
  intro: 'Ba ngôi làng muốn xây chung một cái giếng cách đều cả ba làng. Đặt giếng ở đâu? Câu trả lời nằm ở giao điểm ba đường trung trực.',
  steps: [
    { title: 'Đường trung trực của đoạn thẳng', html: `<p>Đường thẳng <b>vuông góc với đoạn thẳng tại trung điểm</b> của nó gọi là đường trung trực của đoạn thẳng đó.</p>
      <p>Tính chất: điểm nằm trên đường trung trực của đoạn AB thì cách đều A và B; ngược lại, điểm cách đều A và B thì nằm trên đường trung trực của AB.</p>` },
    { title: 'Ba đường trung trực của tam giác', html: `<p>Ba đường trung trực của một tam giác <b>cùng đi qua một điểm</b> O. Điểm O <b>cách đều ba đỉnh</b>: OA = OB = OC. Đường tròn tâm O bán kính OA đi qua ba đỉnh (đường tròn ngoại tiếp tam giác).</p>`,
      svg: circleFig(), caption: 'O cách đều ba đỉnh: OA = OB = OC.' },
    { title: 'Đường cao của tam giác', html: `<p>Đoạn vuông góc kẻ từ một đỉnh đến đường thẳng chứa cạnh đối diện gọi là <b>đường cao</b>. Mỗi tam giác có ba đường cao.</p>` },
    { title: 'Ba đường cao – trực tâm', html: `<p>Ba đường cao (hoặc các đường thẳng chứa chúng) <b>cùng đi qua một điểm</b> H gọi là <b>trực tâm</b> của tam giác.</p>
      <ul><li>Tam giác nhọn: H nằm trong tam giác.</li><li>Tam giác vuông: H trùng đỉnh góc vuông.</li><li>Tam giác tù: H nằm ngoài tam giác.</li></ul>`,
      svg: S.geo({ w: 390, h: 250, P: { A: A, B: B, C: Cc, D: D, E: E, F: F, H: Hh }, seg: ['AB', 'BC', 'CA', { s: 'AD', color: C.green }, { s: 'BE', color: C.green }, { s: 'CF', color: C.green }], right: ['ADC', 'BEC', 'CFB'], off: { H: [14, -2], D: [0, 22], E: [14, -4], F: [-14, -4] } }),
      caption: 'Tam giác nhọn: trực tâm H nằm trong tam giác.' },
    { title: 'Tam giác cân và tam giác đều', html: `<p>Trong tam giác cân tại A, đường trung tuyến, phân giác, đường cao xuất phát từ A và đường trung trực của BC trùng nhau. Trong tam giác đều, trọng tâm, trực tâm, điểm cách đều ba đỉnh và điểm cách đều ba cạnh trùng nhau.</p>` }
  ],
  summary: 'Trung trực: vuông góc tại trung điểm; điểm trên trung trực cách đều hai đầu mút. Ba trung trực đồng quy tại O cách đều ba đỉnh. Ba đường cao đồng quy tại trực tâm H.',
  examples: [
    { title: 'Cách đều ba đỉnh', problem: 'O là giao điểm ba đường trung trực tam giác ABC, OA = 5 cm. Tính OB + OC.', solution: 'OB = OC = 5 ⇒ 10 cm.' },
    { title: 'Góc với trực tâm', problem: 'Tam giác nhọn ABC có góc C = 50°, BE là đường cao. Tính góc EBC.', solution: 'Tam giác BEC vuông tại E: góc EBC = 90° − 50° = 40°.' },
    { title: 'Tam giác vuông', problem: 'Tam giác ABC vuông tại A. Trực tâm ở đâu?', solution: 'Tại A (AB, AC là hai đường cao).' }
  ],
  exercises: [
    { question: 'M thuộc đường trung trực của AB, MA = 7 cm. Tính MB.', hints: ['Cách đều A và B.', 'MB = MA.'], solution: '7 cm.' },
    { question: 'Tam giác ABC có góc B = 65°, AD là đường cao. Tính góc BAD.', hints: ['Tam giác ABD vuông tại D.', '90° − 65°.'], solution: '25°.' },
    { question: 'Ba nhà A, B, C không thẳng hàng. Tìm vị trí đặt trạm phát cách đều ba nhà.', hints: ['Điểm cách đều ba đỉnh tam giác.', 'Giao của hai trung trực.'], solution: 'Giao điểm hai đường trung trực của AB và AC (cũng nằm trên trung trực BC).' }
  ],
  quiz: [
    { type: 'short', calc: '5 + 5', q: 'O là giao điểm ba đường trung trực của tam giác ABC, OA = 5 cm. OB + OC = ? cm', unit: 'cm', answer: '10', explain: 'OA = OB = OC.' },
    { type: 'short', calc: '90 - 50', q: 'Tam giác nhọn ABC có góc C = 50°, BE là đường cao. Góc EBC = ?°', unit: '°', answer: '40', explain: '90 − 50.' },
    { type: 'short', calc: '90 - 65', q: 'Tam giác ABC có góc B = 65°, AD là đường cao. Góc BAD = ?°', unit: '°', answer: '25', explain: '90 − 65.' },
    { type: 'mcq', q: 'Trực tâm của tam giác vuông tại A nằm ở:', options: ['trung điểm BC', 'đỉnh A', 'ngoài tam giác', 'trọng tâm'], answer: 1, explain: 'AB, AC là đường cao.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Giao điểm ba đường trung trực của tam giác cách đều ba đỉnh.', answer: true, explain: 'OA = OB = OC.' },
    { type: 'mcq', q: 'Trực tâm của tam giác tù nằm:', options: ['trong tam giác', 'trên một cạnh', 'ngoài tam giác', 'tại đỉnh góc tù'], answer: 2, explain: 'Hai đường cao hạ từ đỉnh nhọn rơi ra ngoài.' },
    { type: 'short', calc: '7', q: 'M thuộc đường trung trực của AB, MA = 7 cm. MB = ? cm', unit: 'cm', answer: '7', explain: 'Cách đều hai đầu mút.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Trong tam giác đều, trọng tâm và trực tâm trùng nhau.', answer: true, explain: 'Các đường đặc biệt trùng nhau.' }
  ]
});
})();
