/* Toán 9 – Bài 14. Cung và dây của một đường tròn. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C, G = S.geom;
  var O = [150, 130], R = 90;
  THCS.registerLesson('toan-9/bai-14', {
    objectives: [
      'Nhận biết được dây và đường kính của đường tròn; so sánh độ dài dây và đường kính.',
      'Nhận biết được góc ở tâm, cung, số đo của một cung.',
      'Vận dụng số đo cung để tính góc, so sánh cung trong các bài toán.'
    ],
    intro: 'Kim phút quay từ số 12 đến số 3 quét một góc 90° và vạch lên một cung bằng một phần tư đường tròn. Góc và cung có liên hệ chặt chẽ.',
    steps: [
      { title: 'Dây và đường kính', html: `<p>Đoạn thẳng nối hai điểm của đường tròn gọi là <b>dây</b>. Dây đi qua tâm gọi là <b>đường kính</b>.</p><div class="box key">Trong một đường tròn, đường kính là dây lớn nhất: AB ≤ 2R.</div>`,
        svg: S.geo({ w: 300, h: 260, P: { O: O, A: G.polar(O, 200, R), B: G.polar(O, 20, R), C: G.polar(O, 110, R), D: G.polar(O, 40, R) }, circles: [{ c: 'O', r: R, color: C.blue }], seg: [{ s: 'AB', color: C.red, width: 2.5 }, 'CD'] }), caption: 'AB là đường kính, CD là một dây.' },
      { title: 'Góc ở tâm', html: `<p>Góc có đỉnh trùng tâm đường tròn gọi là <b>góc ở tâm</b>. Hai cạnh của góc cắt đường tròn tại A, B chia đường tròn thành hai cung: cung nhỏ nằm bên trong góc và cung lớn.</p>`,
        svg: S.geo({ w: 300, h: 260, P: { O: O, A: G.polar(O, 10, R), B: G.polar(O, 80, R) }, circles: [{ c: 'O', r: R, color: C.muted }], seg: ['OA', 'OB'], carcs: [{ c: 'O', a: 'A', b: 'B', color: C.red, label: 'cung nhỏ AB' }], arcs: [['AOB', 1, '70°', C.orange, 26]] }), caption: '∠AOB là góc ở tâm chắn cung nhỏ AB.' },
      { title: 'Số đo cung', html: `<div class="box key">Số đo cung nhỏ bằng số đo góc ở tâm chắn cung đó. Số đo cung lớn bằng 360° trừ số đo cung nhỏ. Nửa đường tròn có số đo 180°.</div><p>Ví dụ: ∠AOB = 70° ⇒ sđ cung nhỏ AB = 70°, cung lớn AB = 290°.</p>` },
      { title: 'So sánh và cộng cung', html: `<ul><li>Trong một đường tròn, hai cung bằng nhau nếu chúng có cùng số đo; cung lớn hơn có số đo lớn hơn.</li><li>Nếu C nằm trên cung AB thì sđ AB = sđ AC + sđ CB.</li><li>Hai cung bằng nhau thì căng hai dây bằng nhau.</li></ul>` }
    ],
    summary: 'Dây nối hai điểm của đường tròn; đường kính là dây lớn nhất. Số đo cung nhỏ = góc ở tâm; cung lớn = 360° − cung nhỏ. Cung bằng nhau ⇔ dây bằng nhau (trong một đường tròn).',
    examples: [
      { title: 'Đồng hồ', problem: 'Lúc 4 giờ, kim giờ và kim phút tạo thành góc ở tâm bao nhiêu độ?', solution: 'Mỗi số cách nhau 360° : 12 = 30°; 4 khoảng ⇒ 120°.' },
      { title: 'Cung lớn', problem: 'Góc ở tâm ∠AOB = 65°. Tính số đo cung lớn AB.', solution: '360° − 65° = 295°.' },
      { title: 'Dây và khoảng cách', problem: 'Dây AB của (O; 5 cm) dài 8 cm. Tính khoảng cách từ O đến AB.', solution: 'Gọi H là trung điểm AB, OH ⊥ AB; OH = √(25 − 16) = 3 cm.' }
    ],
    exercises: [
      { question: 'Cho (O; R) và dây AB = R. Tính số đo góc ∠AOB và cung nhỏ AB.', hints: ['Tam giác OAB có OA = OB = AB.', 'Tam giác đều.'], solution: '∠AOB = 60°, cung nhỏ AB = 60°.' },
      { question: 'Trên đường tròn lấy A, B, C sao cho sđ cung AB = 100°, sđ cung BC = 80° (C không thuộc cung AB). Tính sđ cung AC chứa B.', hints: ['Cộng cung: AC = AB + BC.', '100° + 80°.'], solution: '180°: AC là đường kính.' },
      { question: 'Dây AB của đường tròn (O; 10 cm) cách tâm 6 cm. Tính AB.', hints: ['AH = √(100 − 36) = 8.', 'AB = 2AH.'], solution: 'AB = 16 cm.' }
    ],
    quiz: [
      { type: 'short', calc: '4 * 360 / 12', q: 'Lúc 4 giờ, góc giữa kim giờ và kim phút là bao nhiêu độ?', unit: 'độ', answer: '120', explain: '4 · 30°.' },
      { type: 'short', calc: '360 - 65', q: 'Góc ở tâm ∠AOB = 65°. Số đo cung lớn AB (độ)?', unit: 'độ', answer: '295', explain: '360° − 65°.' },
      { type: 'short', calc: 'Math.sqrt(5 * 5 - 4 * 4)', q: 'Dây AB = 8 cm của (O; 5 cm). Khoảng cách từ O đến AB (cm)?', unit: 'cm', answer: '3', explain: 'OH = √(25 − 16).' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mọi dây của đường tròn (O; R) đều có độ dài không vượt quá 2R.', answer: true, explain: 'Đường kính là dây lớn nhất.' },
      { type: 'short', calc: '2 * Math.sqrt(10 * 10 - 6 * 6)', q: 'Dây AB của (O; 10 cm) cách tâm 6 cm. Tính AB (cm).', unit: 'cm', answer: '16', explain: '2 · 8.' },
      { type: 'mcq', q: 'Dây AB bằng bán kính R. Số đo cung nhỏ AB là:', options: ['30°', '45°', '60°', '90°'], answer: 2, explain: 'Tam giác OAB đều.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Số đo cung lớn luôn bằng hai lần số đo cung nhỏ.', answer: false, explain: 'Cung lớn = 360° − cung nhỏ.' },
      { type: 'mcq', q: 'Góc ở tâm là góc:', options: ['có đỉnh nằm trên đường tròn', 'có đỉnh trùng với tâm đường tròn', 'có hai cạnh là hai dây', 'có đỉnh nằm ngoài đường tròn'], answer: 1, explain: 'Định nghĩa.' }
    ]
  });
})();
