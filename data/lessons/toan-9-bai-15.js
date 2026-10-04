/* Toán 9 – Bài 15. Độ dài của cung tròn. Diện tích hình quạt tròn và hình vành khuyên. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C, G = S.geom;
  var O = [150, 130], R = 90;
  THCS.registerLesson('toan-9/bai-15', {
    objectives: [
      'Tính được độ dài cung tròn n° của đường tròn bán kính R.',
      'Tính được diện tích hình quạt tròn và diện tích hình vành khuyên.',
      'Giải quyết được bài toán thực tế gắn với cung tròn, hình quạt, hình vành khuyên (quạt giấy, đường chạy, miếng bánh).'
    ],
    intro: 'Một chiếc quạt giấy khi xoè ra có dạng hình quạt tròn; một đĩa CD có dạng hình vành khuyên. Làm sao tính diện tích giấy dán quạt hay diện tích mặt đĩa?',
    steps: [
      { title: 'Độ dài cung tròn', html: `<p>Chu vi đường tròn là 2πR, ứng với cung 360°. Cung 1° dài {{2πR|360}} = {{πR|180}}.</p><div class="box key">Độ dài cung n°: l = {{πRn|180}}.</div><p>Ví dụ: R = 6 cm, n = 60°: l = {{π · 6 · 60|180}} = 2π ≈ 6,28 cm.</p>`,
        svg: S.geo({ w: 300, h: 260, P: { O: O, A: G.polar(O, 10, R), B: G.polar(O, 70, R) }, circles: [{ c: 'O', r: R, color: C.muted }], seg: ['OA', 'OB'], carcs: [{ c: 'O', a: 'A', b: 'B', color: C.red, label: 'l' }], arcs: [['AOB', 1, 'n°', C.orange, 26]], text: [[190, 150, 'R', C.blue]] }), caption: 'Cung AB có số đo n°, độ dài l.' },
      { title: 'Hình quạt tròn', html: `<p>Hình quạt tròn là phần hình tròn giới hạn bởi một cung và hai bán kính đi qua hai đầu cung.</p><div class="box key">S<sub>quạt</sub> = {{πR<sup>2</sup>n|360}} = {{l · R|2}}.</div>`,
        svg: S.geo({ w: 300, h: 260, P: { O: O, A: G.polar(O, 20, R), B: G.polar(O, 110, R) }, circles: [{ c: 'O', r: R, color: C.muted }], sectors: [{ c: 'O', a: 'A', b: 'B', fill: C.orangeL }], seg: ['OA', 'OB'], arcs: [['AOB', 1, '90°', C.orange, 24]] }), caption: 'Hình quạt tròn OAB ứng với cung 90°: bằng {{1|4}} hình tròn.' },
      { title: 'Hình vành khuyên', html: `<p>Phần nằm giữa hai đường tròn đồng tâm bán kính R và r (R &gt; r) gọi là hình vành khuyên.</p><div class="box key">S<sub>vành khuyên</sub> = π(R<sup>2</sup> − r<sup>2</sup>).</div>`,
        svg: S.geo({ w: 300, h: 260, P: { O: O, A: G.polar(O, 0, R), B: G.polar(O, 90, 50) }, circles: [{ c: 'O', r: R, color: C.ink, fill: C.greenL }, { c: 'O', r: 50, color: C.ink, fill: '#fff' }], seg: [{ s: 'OA', color: C.blue }, { s: 'OB', color: C.red }], text: [[218, 122, 'R', C.blue], [162, 110, 'r', C.red]], off: { A: [14, 5], B: [0, -8] } }), caption: 'Phần tô màu là hình vành khuyên.' },
      { title: 'Ứng dụng', html: `<p>Chiếc quạt giấy xoè 120°, nan dài 30 cm, phần dán giấy từ 10 cm đến 30 cm tính từ đầu nan: diện tích giấy (một mặt) = {{π(30<sup>2</sup> − 10<sup>2</sup>) · 120|360}} = {{800π|3}} ≈ 837,8 cm².</p>` }
    ],
    summary: 'l = πRn/180; S quạt = πR²n/360 = lR/2; S vành khuyên = π(R² − r²).',
    examples: [
      { title: 'Độ dài cung', problem: 'Tính độ dài cung 45° của đường tròn bán kính 8 cm.', solution: 'l = {{π · 8 · 45|180}} = 2π ≈ 6,28 cm.' },
      { title: 'Diện tích quạt', problem: 'Một miếng bánh pizza hình quạt, bán kính 15 cm, góc 60°. Tính diện tích (lấy π ≈ 3,14).', solution: 'S = {{3,14 · 225 · 60|360}} ≈ 117,75 cm².' },
      { title: 'Vành khuyên', problem: 'Một đĩa CD có đường kính 12 cm, lỗ giữa đường kính 1,5 cm. Tính diện tích mặt đĩa (theo π).', solution: 'S = π(6<sup>2</sup> − 0,75<sup>2</sup>) = 35,4375π ≈ 111,3 cm².' }
    ],
    exercises: [
      { question: 'Đường tròn bán kính 9 cm. Cung có độ dài 3π cm có số đo bao nhiêu độ?', hints: ['{{π · 9 · n|180}} = 3π.', 'n = {{3 · 180|9}}.'], solution: 'n = 60°.' },
      { question: 'Hình quạt có bán kính 10 cm và độ dài cung 12 cm. Tính diện tích.', hints: ['S = {{l · R|2}}.', '{{12 · 10|2}}.'], solution: '60 cm².' },
      { question: 'Một đường chạy vành khuyên có bán kính trong 30 m, bán kính ngoài 35 m. Tính diện tích đường chạy (lấy π ≈ 3,14).', hints: ['S = π(35<sup>2</sup> − 30<sup>2</sup>).', '= 325π.'], solution: '≈ 1020,5 m².' }
    ],
    quiz: [
      { type: 'short', calc: '8 * 45 / 180', q: 'Độ dài cung 45° của đường tròn bán kính 8 cm bằng kπ cm. Tìm k.', answer: '2', explain: 'πRn/180 = 2π.' },
      { type: 'short', calc: '3 * 180 / 9', q: 'Đường tròn bán kính 9 cm, cung dài 3π cm có số đo bao nhiêu độ?', unit: 'độ', answer: '60', explain: 'n = 3·180/9.' },
      { type: 'short', calc: '12 * 10 / 2', q: 'Hình quạt bán kính 10 cm, độ dài cung 12 cm. Diện tích (cm²)?', unit: 'cm²', answer: '60', explain: 'S = lR/2.' },
      { type: 'short', calc: 'round(3.14 * 15 * 15 * 60 / 360, 2)', q: 'Miếng bánh hình quạt bán kính 15 cm, góc 60°. Diện tích (cm², lấy π ≈ 3,14)?', unit: 'cm²', answer: '117.75', explain: '3,14 · 225 · 60 : 360.' },
      { type: 'short', calc: 'round(3.14 * (35 * 35 - 30 * 30), 1)', q: 'Đường chạy vành khuyên bán kính trong 30 m, ngoài 35 m. Diện tích (m², π ≈ 3,14)?', unit: 'm²', answer: '1020.5', explain: '325π.' },
      { type: 'mcq', q: 'Công thức diện tích hình quạt tròn bán kính R, cung n° là:', options: ['{{πRn|180}}', '{{πR<sup>2</sup>n|360}}', '{{πR<sup>2</sup>n|180}}', 'πR<sup>2</sup>'], answer: 1, explain: 'S = πR²n/360.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hình quạt ứng với cung 90° có diện tích bằng một phần tư hình tròn.', answer: true, explain: '90/360.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Diện tích hình vành khuyên bằng π(R − r)².', answer: false, explain: 'π(R² − r²).' }
    ]
  });
})();
