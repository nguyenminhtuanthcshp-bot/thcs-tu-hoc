/* Toán 9 – Bài 27. Góc nội tiếp. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C, G = S.geom;
  var O = [150, 130], R = 90;
  function P(deg) { return G.polar(O, deg, R); }
  THCS.registerLesson('toan-9/bai-27', {
    objectives: [
      'Nhận biết được góc nội tiếp và cung bị chắn.',
      'Giải thích được mối liên hệ: số đo góc nội tiếp bằng nửa số đo cung bị chắn (bằng nửa góc ở tâm cùng chắn cung đó).',
      'Vận dụng các hệ quả: các góc nội tiếp cùng chắn một cung thì bằng nhau; góc nội tiếp chắn nửa đường tròn là góc vuông.',
      'Giải bài toán tính góc và chứng minh hình học liên quan đến góc nội tiếp.'
    ],
    intro: 'Đứng ở các vị trí khác nhau trên khán đài hình tròn, bạn luôn “nhìn” khung thành (một dây cung) dưới cùng một góc. Điều thú vị đó đến từ tính chất của góc nội tiếp.',
    steps: [
      { title: 'Góc nội tiếp', html: `<p><b>Góc nội tiếp</b> là góc có đỉnh nằm trên đường tròn và hai cạnh chứa hai dây cung của đường tròn đó.</p><p>Cung nằm bên trong góc gọi là <b>cung bị chắn</b>. Trong hình, ∠BAC là góc nội tiếp chắn cung nhỏ BC.</p>`,
        svg: S.geo({ w: 300, h: 260, P: { O: O, A: P(105), B: P(205), C: P(335) }, circles: [{ c: 'O', r: R, color: C.muted }], seg: ['AB', 'AC'], carcs: [{ c: 'O', a: 'B', b: 'C', color: C.red, width: 3.5 }], arcs: [['BAC', 1, '', C.orange, 24]], off: { O: [-4, 18] } }), caption: '∠BAC là góc nội tiếp; cung BC (tô đỏ) là cung bị chắn.' },
      { title: 'Định lí góc nội tiếp', html: `<p>Trong một đường tròn, <b>số đo góc nội tiếp bằng nửa số đo cung bị chắn</b>.</p><p style="text-align:center">∠BAC = {{1|2}} sđ BC = {{1|2}} ∠BOC.</p><p>Ví dụ: ∠BOC = 130° ⇒ ∠BAC = 65°.</p>`,
        svg: S.geo({ w: 300, h: 260, P: { O: O, A: P(105), B: P(205), C: P(335) }, circles: [{ c: 'O', r: R, color: C.muted }], seg: ['AB', 'AC'], dash: ['OB', 'OC'], carcs: [{ c: 'O', a: 'B', b: 'C', color: C.red, width: 3.5 }], arcs: [['BAC', 1, '65°', C.orange, 26], ['BOC', 2, '130°', C.blue, 22]], off: { O: [-4, -12] } }), caption: 'Góc nội tiếp ∠BAC bằng nửa góc ở tâm ∠BOC cùng chắn cung BC.' },
      { title: 'Các góc nội tiếp cùng chắn một cung', html: `<p><b>Hệ quả 1.</b> Các góc nội tiếp cùng chắn một cung (hoặc chắn các cung bằng nhau) thì bằng nhau.</p>`,
        svg: S.geo({ w: 300, h: 260, P: { O: O, A: P(120), D: P(60), B: P(205), C: P(335) }, circles: [{ c: 'O', r: R, color: C.muted }], seg: ['AB', 'AC', { s: 'DB', color: C.blue }, { s: 'DC', color: C.blue }], carcs: [{ c: 'O', a: 'B', b: 'C', color: C.red, width: 3.5 }], arcs: [['BAC', 1, '', C.orange, 22], ['BDC', 1, '', C.orange, 22]], off: { O: [-4, 18] } }), caption: '∠BAC = ∠BDC vì cùng chắn cung BC.' },
      { title: 'Góc chắn nửa đường tròn', html: `<p><b>Hệ quả 2.</b> Góc nội tiếp chắn nửa đường tròn là góc vuông.</p><p>Ngược lại, nếu ∠BAC = 90° thì BC là đường kính của đường tròn ngoại tiếp tam giác ABC.</p>`,
        svg: S.geo({ w: 300, h: 260, P: { O: O, A: P(125), B: P(180), C: P(0) }, circles: [{ c: 'O', r: R, color: C.muted }], seg: ['AB', 'AC', 'BC'], right: ['BAC'], off: { O: [-4, 18] } }), caption: 'BC là đường kính ⇒ ∠BAC = 90°.' },
      { title: 'Góc nội tiếp và góc ở tâm', html: `<ul><li>Góc nội tiếp (nhỏ hơn hoặc bằng 90°) có số đo bằng nửa số đo góc ở tâm cùng chắn một cung.</li><li>Góc nội tiếp chắn cung lớn thì lớn hơn 90°.</li><li>Tổng quát: ∠(nội tiếp) = {{1|2}} sđ cung bị chắn, với mọi vị trí của tâm O (trong, trên cạnh hoặc ngoài góc).</li></ul>` }
    ],
    summary: 'Góc nội tiếp: đỉnh trên đường tròn, hai cạnh chứa hai dây. Số đo = ½ số đo cung bị chắn. Cùng chắn một cung ⇒ bằng nhau; chắn nửa đường tròn ⇒ 90°.',
    examples: [
      { title: 'Tính góc', problem: 'Cho đường tròn (O), ∠BOC = 110°, A thuộc cung lớn BC. Tính ∠BAC.', solution: '∠BAC = {{110°|2}} = 55°.' },
      { title: 'Góc chắn nửa đường tròn', problem: 'Tam giác ABC nội tiếp đường tròn đường kính BC = 10 cm, AB = 6 cm. Tính AC.', solution: '∠BAC = 90° ⇒ AC = √(100 − 36) = 8 cm.' },
      { title: 'Chứng minh', problem: 'Hai dây AB và CD cắt nhau tại M bên trong đường tròn. Chứng minh MA · MB = MC · MD.', solution: '∠MAC = ∠MDB (cùng chắn cung CB), ∠AMC = ∠DMB (đối đỉnh) ⇒ △MAC ∽ △MDB ⇒ {{MA|MD}} = {{MC|MB}} ⇒ MA · MB = MC · MD.' }
    ],
    exercises: [
      { question: 'Cho ∠BAC = 40° là góc nội tiếp. Tính số đo cung bị chắn và góc ở tâm ∠BOC.', hints: ['Cung bị chắn gấp đôi góc nội tiếp.', '2 · 40°.'], solution: 'sđ BC = 80°, ∠BOC = 80°.' },
      { question: 'Tam giác ABC nội tiếp (O; 6,5 cm) có ∠A = 90°, AB = 5 cm. Tính AC.', hints: ['BC là đường kính = 13 cm.', 'AC = √(169 − 25).'], solution: 'AC = 12 cm.' },
      { question: 'Cho A, B, C, D thuộc (O) theo thứ tự đó, ∠ABD = 35°. Tính ∠ACD.', hints: ['∠ABD và ∠ACD cùng chắn cung AD.', 'Hai góc bằng nhau.'], solution: '∠ACD = 35°.' }
    ],
    quiz: [
      { type: 'short', calc: '110 / 2', q: '∠BOC = 110°, A thuộc cung lớn BC. ∠BAC = ? (độ)', unit: '°', answer: '55', explain: 'Nửa góc ở tâm.' },
      { type: 'short', calc: '2 * 40', q: 'Góc nội tiếp 40° chắn cung có số đo bao nhiêu độ?', unit: '°', answer: '80', explain: 'Gấp đôi.' },
      { type: 'short', calc: 'Math.sqrt(10 ** 2 - 6 ** 2)', q: 'Tam giác ABC nội tiếp đường tròn đường kính BC = 10 cm, AB = 6 cm. AC = ? (cm)', unit: 'cm', answer: '8', explain: '∠A = 90°.' },
      { type: 'short', calc: 'Math.sqrt((2 * 6.5) ** 2 - 5 ** 2)', q: 'Tam giác ABC vuông tại A nội tiếp (O; 6,5 cm), AB = 5 cm. AC = ? (cm)', unit: 'cm', answer: '12', explain: 'BC = 13.' },
      { type: 'short', calc: '(180 - 2 * 35) / 2', q: 'Tam giác ABC nội tiếp (O), ∠BAC = 35°. Tính ∠OBC (độ).', unit: '°', answer: '55', explain: '∠BOC = 70°, tam giác OBC cân: (180° − 70°) : 2 = 55°.' },
      { type: 'mcq', q: 'Góc nội tiếp chắn nửa đường tròn có số đo:', options: ['45°', '90°', '180°', '60°'], answer: 1, explain: 'Hệ quả 2.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hai góc nội tiếp cùng chắn một cung thì bằng nhau.', answer: true, explain: 'Hệ quả 1.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Góc nội tiếp luôn bằng góc ở tâm cùng chắn một cung.', answer: false, explain: 'Bằng một nửa.' }
    ]
  });
})();
