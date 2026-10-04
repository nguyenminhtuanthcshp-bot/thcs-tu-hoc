/* Toán 9 – Luyện tập chung (sau Bài 15). Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C, G = S.geom;
  var O = [150, 130], R = 90;
  THCS.registerLesson('toan-9/c5-ltc-1', {
    objectives: [
      'Vận dụng quan hệ giữa đường kính và dây, góc ở tâm và số đo cung.',
      'Tính độ dài cung tròn, diện tích hình quạt tròn và hình vành khuyên.',
      'Giải bài toán thực tế liên quan đến bánh xe, đồng hồ, quạt, đường chạy.'
    ],
    intro: 'Luyện tập tổng hợp ba bài đầu chương V, đặc biệt là các công thức tính toán với cung và hình quạt.',
    steps: [
      { title: 'Công thức cần nhớ', html: `<table class="tbl"><tr><th>Đại lượng</th><th>Công thức</th></tr><tr><td>Chu vi đường tròn</td><td>C = 2πR</td></tr><tr><td>Độ dài cung n°</td><td>l = {{πRn|180}}</td></tr><tr><td>Diện tích hình tròn</td><td>S = πR<sup>2</sup></td></tr><tr><td>Diện tích hình quạt</td><td>{{πR<sup>2</sup>n|360}} = {{lR|2}}</td></tr><tr><td>Diện tích vành khuyên</td><td>π(R<sup>2</sup> − r<sup>2</sup>)</td></tr></table>` },
      { title: 'Hình viên phân', html: `<p>Phần hình tròn giới hạn bởi một cung và dây căng cung gọi là <b>hình viên phân</b>. Diện tích = S<sub>quạt</sub> − S<sub>tam giác OAB</sub>.</p>`,
        svg: S.geo({ w: 300, h: 260, P: { O: O, A: G.polar(O, 0, R), B: G.polar(O, 90, R) }, circles: [{ c: 'O', r: R, color: C.muted }], sectors: [{ c: 'O', a: 'A', b: 'B', fill: C.orangeL }], fill: [['OAB', '#fff']], seg: ['OA', 'OB', { s: 'AB', color: C.red }], right: ['AOB'], off: { O: [-12, 16] } }), caption: 'Phần tô cam là hình viên phân ứng với cung 90°.' },
      { title: 'Bánh xe lăn', html: `<p>Bánh xe bán kính R lăn một vòng thì đi được quãng đường bằng chu vi 2πR. Lăn k vòng: 2πRk.</p>` },
      { title: 'Chú ý đơn vị', html: `<p>Giữ kết quả theo π khi đề không yêu cầu làm tròn; khi làm tròn, ghi rõ lấy π ≈ 3,14 hay dùng máy tính.</p>` }
    ],
    summary: 'l = πRn/180, S quạt = πR²n/360, S vành khuyên = π(R² − r²); viên phân = quạt − tam giác.',
    examples: [
      { title: 'Viên phân', problem: 'Tính diện tích hình viên phân ứng với cung 90° của đường tròn bán kính 4 cm.', solution: 'S quạt = 4π; S tam giác = 8 ⇒ S = 4π − 8 ≈ 4,57 cm².' },
      { title: 'Bánh xe', problem: 'Bánh xe đạp đường kính 0,7 m lăn 100 vòng. Xe đi được bao nhiêu mét (π ≈ 3,14)?', solution: '3,14 · 0,7 · 100 = 219,8 m.' },
      { title: 'Kim phút', problem: 'Kim phút dài 10 cm. Sau 20 phút đầu kim vạch cung dài bao nhiêu?', solution: '20 phút ứng với 120°: l = {{π · 10 · 120|180}} = {{20π|3}} ≈ 20,94 cm.' }
    ],
    exercises: [
      { question: 'Tính chu vi hình quạt bán kính 6 cm, góc 60° (theo π).', hints: ['Cung l = 2π.', 'Chu vi = l + 2R.'], solution: '2π + 12 (cm).' },
      { question: 'Dây AB của (O; 13 cm) cách tâm 5 cm. Tính AB.', hints: ['AH = √(169 − 25) = 12.', 'AB = 2AH.'], solution: '24 cm.' },
      { question: 'Một hình tròn có diện tích 36π cm². Tính diện tích hình quạt 40° của nó.', hints: ['R = 6.', '36π · {{40|360}}.'], solution: '4π cm².' }
    ],
    quiz: [
      { type: 'short', calc: 'round(4 * Math.PI - 8, 2)', q: 'Diện tích hình viên phân ứng với cung 90° của đường tròn bán kính 4 cm (cm², làm tròn đến hàng phần trăm)?', unit: 'cm²', answer: '4.57', explain: '4π − 8.' },
      { type: 'short', calc: 'round(3.14 * 0.7 * 100, 1)', q: 'Bánh xe đường kính 0,7 m lăn 100 vòng. Quãng đường (m, π ≈ 3,14)?', unit: 'm', answer: '219.8', explain: 'πd · 100.' },
      { type: 'short', calc: '2 * Math.sqrt(13 * 13 - 5 * 5)', q: 'Dây AB của (O; 13 cm) cách tâm 5 cm. AB = ? (cm)', unit: 'cm', answer: '24', explain: '2 · 12.' },
      { type: 'short', calc: '36 * 40 / 360', q: 'Hình tròn diện tích 36π cm². Hình quạt 40° có diện tích kπ cm². Tìm k.', answer: '4', explain: '36 · 40/360.' },
      { type: 'short', calc: 'round(Math.PI * 10 * 120 / 180, 2)', q: 'Kim phút dài 10 cm. Sau 20 phút, đầu kim vạch cung dài bao nhiêu cm (làm tròn đến hàng phần trăm)?', unit: 'cm', answer: '20.94', explain: '120°.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Diện tích hình viên phân bằng diện tích hình quạt cộng diện tích tam giác OAB.', answer: false, explain: 'Là hiệu, không phải tổng.' },
      { type: 'mcq', q: 'Chu vi hình quạt bán kính 6 cm, góc 60° là:', options: ['2π cm', '2π + 12 cm', '6π cm', '12π cm'], answer: 1, explain: 'Cung 2π cộng hai bán kính.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Bánh xe bán kính R lăn một vòng đi được quãng đường 2πR.', answer: true, explain: 'Bằng chu vi.' }
    ]
  });
})();
