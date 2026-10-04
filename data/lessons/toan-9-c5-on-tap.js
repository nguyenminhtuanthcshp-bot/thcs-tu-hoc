/* Toán 9 – Bài tập cuối chương V. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C, G = S.geom;
  var O = [150, 125], R = 80;
  THCS.registerLesson('toan-9/c5-on-tap', {
    objectives: [
      'Hệ thống hoá kiến thức về đường tròn: dây, cung, góc ở tâm, độ dài cung, diện tích hình quạt và vành khuyên.',
      'Vận dụng vị trí tương đối của đường thẳng, đường tròn và tính chất tiếp tuyến trong bài toán tổng hợp.',
      'Giải quyết bài toán thực tế liên quan đến đường tròn.'
    ],
    intro: 'Chương V là chương hình học trọng tâm của học kì I. Hãy ôn lại và luyện các bài tổng hợp.',
    steps: [
      { title: 'Sơ đồ chương', html: `<p>Các nội dung chính:</p>`,
        svg: S.mindmap({ center: 'Đường tròn', branches: [
          { title: 'Cơ bản', items: ['(O; R), đối xứng', 'Dây ≤ đường kính'] },
          { title: 'Cung', items: ['sđ cung = góc ở tâm', 'l = πRn/180'] },
          { title: 'Diện tích', items: ['Quạt: πR²n/360', 'Vành khuyên: π(R² − r²)'] },
          { title: 'Vị trí tương đối', items: ['d và R', 'OO\', R + r, R − r', 'Tiếp tuyến ⊥ bán kính'] }
        ] }) },
      { title: 'Bài toán tổng hợp mẫu', html: `<p>Từ M ngoài (O; R) kẻ hai tiếp tuyến MA, MB với ∠AOB = 120°. Khi đó ∠AMB = 60°, tam giác MAB đều, MA = R√3 và diện tích hình quạt OAB (cung nhỏ) là {{πR<sup>2</sup>|3}}.</p>`,
        svg: S.geo({ w: 340, h: 260, P: { O: O, A: G.polar(O, 60, R), B: G.polar(O, -60, R), M: [O[0] + 2 * R, O[1]] }, circles: [{ c: 'O', r: R, color: C.blue }], sectors: [{ c: 'O', a: 'A', b: 'B', fill: C.orangeL }], seg: ['OA', 'OB', 'MA', 'MB'], right: ['OAM', 'OBM'], arcs: [['AOB', 1, '120°', C.orange, 13]], off: { O: [-14, 5], M: [14, 5] } }), caption: '∠AOB = 120° ⇒ ∠AMB = 60°.' },
      { title: 'Tổng các góc trong tứ giác OAMB', html: `<p>∠OAM = ∠OBM = 90° nên ∠AOB + ∠AMB = 180°.</p>` },
      { title: 'Sai lầm thường gặp', html: `<ul><li>Dùng công thức cung 180 thay cho 360 khi tính diện tích quạt.</li><li>Quên rằng tiếp tuyến vuông góc với bán kính <b>tại tiếp điểm</b>.</li><li>Nhầm tiếp xúc trong (R − r) với tiếp xúc ngoài (R + r).</li></ul>` }
    ],
    summary: 'Dây – cung – góc ở tâm; công thức độ dài cung, diện tích quạt, vành khuyên; vị trí tương đối và tính chất tiếp tuyến.',
    examples: [
      { title: 'Tiếp tuyến và quạt', problem: 'Hai tiếp tuyến MA, MB của (O; 6 cm) với ∠AOB = 120°. Tính MA và diện tích hình quạt OAB (cung nhỏ).', solution: '∠AOM = 60° ⇒ MA = 6 · tan 60° = 6√3 ≈ 10,39 cm; S quạt = {{π · 36 · 120|360}} = 12π ≈ 37,7 cm².' },
      { title: 'Vành khuyên', problem: 'Một bồn hoa hình tròn bán kính 3 m, xung quanh có lối đi rộng 1 m. Tính diện tích lối đi (theo π).', solution: 'π(4<sup>2</sup> − 3<sup>2</sup>) = 7π m².' },
      { title: 'Hai đường tròn', problem: '(O; 8 cm) và (O\'; 3 cm) tiếp xúc ngoài tại A. Tính OO\'.', solution: 'OO\' = 11 cm.' }
    ],
    exercises: [
      { question: 'Cho (O; 10 cm), dây AB = 12 cm. Tính khoảng cách từ O đến AB và số đo góc ∠AOB (làm tròn đến độ).', hints: ['OH = √(100 − 36) = 8.', 'sin ∠AOH = {{6|10}} ⇒ ∠AOH ≈ 37°.'], solution: 'OH = 8 cm, ∠AOB ≈ 74°.' },
      { question: 'Một chiếc quạt giấy xoè 150°, nan dài 25 cm. Tính diện tích quạt (π ≈ 3,14, làm tròn đến hàng đơn vị).', hints: ['S = {{πR<sup>2</sup>n|360}}.', '3,14 · 625 · 150 : 360.'], solution: '≈ 818 cm².' },
      { question: 'Đường thẳng a cách tâm O 5 cm và cắt (O) tại A, B với AB = 24 cm. Tính R.', hints: ['AH = 12.', 'R = √(25 + 144).'], solution: 'R = 13 cm.' }
    ],
    quiz: [
      { type: 'short', calc: 'round(6 * Math.tan(60 * Math.PI / 180), 2)', q: 'Tiếp tuyến MA, MB của (O; 6 cm), ∠AOB = 120°. MA = ? (cm, làm tròn đến hàng phần trăm)', unit: 'cm', answer: '10.39', explain: '6 · tan 60°.' },
      { type: 'short', calc: '36 * 120 / 360', q: 'Hình quạt OAB của (O; 6 cm) với cung 120° có diện tích kπ cm². Tìm k.', answer: '12', explain: '36 · 120/360.' },
      { type: 'short', calc: '4 * 4 - 3 * 3', q: 'Bồn hoa bán kính 3 m, lối đi xung quanh rộng 1 m. Diện tích lối đi là kπ m². Tìm k.', answer: '7', explain: '16 − 9.' },
      { type: 'short', calc: 'Math.sqrt(5 * 5 + 12 * 12)', q: 'Đường thẳng cách O 5 cm, cắt (O) theo dây dài 24 cm. R = ? (cm)', unit: 'cm', answer: '13', explain: '√(25 + 144).' },
      { type: 'short', calc: 'Math.round(3.14 * 625 * 150 / 360)', q: 'Quạt giấy xoè 150°, nan dài 25 cm. Diện tích (cm², π ≈ 3,14, làm tròn đến hàng đơn vị)?', unit: 'cm²', answer: '818', explain: '3,14 · 625 · 150/360.' },
      { type: 'mcq', q: 'Tứ giác OAMB (MA, MB là tiếp tuyến) có ∠AOB = 120°. ∠AMB bằng:', options: ['30°', '60°', '90°', '120°'], answer: 1, explain: '180° − 120°.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: (O; 8 cm) và (O\'; 3 cm) tiếp xúc ngoài thì OO\' = 5 cm.', answer: false, explain: 'OO\' = 11 cm.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Dây AB = 12 cm của (O; 10 cm) cách tâm 8 cm.', answer: true, explain: '√(100 − 36) = 8.' }
    ]
  });
})();
