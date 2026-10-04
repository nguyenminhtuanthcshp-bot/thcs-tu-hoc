/* Toán 9 – Bài 12. Một số hệ thức giữa cạnh, góc trong tam giác vuông và ứng dụng. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-9/bai-12', {
    objectives: [
      'Giải thích được hệ thức giữa cạnh góc vuông, cạnh huyền và các tỉ số lượng giác của góc nhọn.',
      'Giải được tam giác vuông (tính các cạnh, góc còn lại khi biết hai yếu tố, trong đó có ít nhất một cạnh).',
      'Vận dụng hệ thức để tính chiều cao, khoảng cách trong thực tế (góc nâng, góc hạ, độ dốc).'
    ],
    intro: 'Làm sao đo chiều cao một toà nhà khi chỉ có thước dây và giác kế? Chỉ cần đo một khoảng cách và một góc, hệ thức lượng trong tam giác vuông sẽ làm phần còn lại.',
    steps: [
      { title: 'Các hệ thức cơ bản', html: `<p>Tam giác ABC vuông tại A, BC = a, AC = b, AB = c:</p><div class="box key">b = a · sin B = a · cos C;&nbsp; c = a · sin C = a · cos B;<br>b = c · tan B = c · cot C;&nbsp; c = b · tan C = b · cot B.</div><p>Nói gọn: cạnh góc vuông = huyền × sin góc đối = huyền × cos góc kề; cạnh góc vuông = cạnh kia × tan góc đối.</p>`,
        svg: S.geo({ w: 340, h: 220, P: { A: [50, 190], B: [50, 50], C: [290, 190] }, seg: ['AB', 'AC', 'BC'], right: ['BAC'], arcs: [['ABC', 1, '', C.orange, 24], ['ACB', 1, '', C.green, 34]], text: [[32, 124, 'c', C.blue], [170, 210, 'b', C.blue], [182, 110, 'a', C.purple]] }), caption: 'Tam giác ABC vuông tại A.' },
      { title: 'Giải tam giác vuông', html: `<p>Biết hai yếu tố (ít nhất một cạnh), tìm các yếu tố còn lại.</p><p>Ví dụ: biết a = 10, ∠B = 40°: ∠C = 50°; b = 10 · sin 40° ≈ 6,43; c = 10 · cos 40° ≈ 7,66.</p>` },
      { title: 'Góc nâng và chiều cao', html: `<p>Đứng cách chân tháp 50 m, nhìn đỉnh tháp với góc nâng 35°; mắt cách mặt đất 1,5 m. Chiều cao tháp ≈ 50 · tan 35° + 1,5 ≈ 36,5 m.</p>`,
        svg: S.geo({ w: 340, h: 235, P: { M: [50, 180], H: [280, 180], T: [280, 30], G: [280, 205], N: [50, 205] }, hide: ['G', 'N'], seg: ['MH', { s: 'MT', color: C.orange }, { s: 'HT', color: C.red, width: 3 }, { s: 'NG', color: C.muted, width: 4 }, { s: 'HG', color: C.muted, dash: true }, { s: 'MN', color: C.green, width: 4 }], right: ['MHT'], arcs: [['HMT', 1, '35°', C.orange, 40]], text: [[165, 172, '50 m', C.blue], [300, 110, 'h', C.red], [24, 198, '1,5 m', C.green], [165, 222, 'mặt đất', C.muted, false, 12]], off: { M: [-12, -6] } }), caption: 'Góc nâng 35°, khoảng cách 50 m.' },
      { title: 'Độ dốc', html: `<p>Con dốc cao 3 m trên quãng đường nằm ngang 40 m có tan α = {{3|40}} = 0,075 (độ dốc 7,5%), góc dốc α ≈ 4,3°.</p>` }
    ],
    summary: 'Cạnh góc vuông = huyền · sin góc đối = huyền · cos góc kề = cạnh góc vuông kia · tan góc đối. Giải tam giác vuông cần biết hai yếu tố, trong đó có ít nhất một cạnh.',
    examples: [
      { title: 'Tính cạnh', problem: 'Tam giác ABC vuông tại A có BC = 12 cm, ∠B = 30°. Tính AC, AB.', solution: 'AC = 12 · sin 30° = 6 cm; AB = 12 · cos 30° = 6√3 ≈ 10,39 cm.' },
      { title: 'Chiều cao cây', problem: 'Bóng một cây dài 12 m khi tia nắng tạo với mặt đất góc 40°. Tính chiều cao cây (làm tròn đến hàng phần mười).', solution: 'h = 12 · tan 40° ≈ 10,1 m.' },
      { title: 'Thang dựa tường', problem: 'Thang dài 5 m dựa vào tường, tạo với mặt đất góc 65°. Chân thang cách tường bao xa?', solution: 'd = 5 · cos 65° ≈ 2,11 m.' }
    ],
    exercises: [
      { question: 'Tam giác ABC vuông tại A có AB = 9, ∠C = 30°. Tính BC.', hints: ['AB = BC · sin C.', 'BC = 9 : sin 30°.'], solution: 'BC = 18.' },
      { question: 'Một máy bay cất cánh theo đường thẳng tạo với mặt đất góc 20°. Bay được 5 km thì máy bay ở độ cao bao nhiêu (làm tròn đến hàng phần trăm)?', hints: ['Độ cao = 5 · sin 20°.', 'sin 20° ≈ 0,342.'], solution: '≈ 1,71 km.' },
      { question: 'Đứng cách chân tháp 50 m, góc nâng tới đỉnh tháp là 35°, mắt cao 1,5 m. Tính chiều cao tháp (làm tròn đến hàng phần mười).', hints: ['Phần trên tầm mắt: 50 · tan 35°.', 'Cộng 1,5 m.'], solution: '≈ 36,5 m.' }
    ],
    quiz: [
      { type: 'short', calc: '12 * Math.sin(30 * Math.PI / 180)', q: 'Tam giác ABC vuông tại A, BC = 12 cm, ∠B = 30°. Tính AC (cm).', unit: 'cm', answer: '6', explain: 'AC = BC · sin B.' },
      { type: 'short', calc: 'round(12 * Math.tan(40 * Math.PI / 180), 1)', q: 'Bóng cây dài 12 m, tia nắng tạo với mặt đất góc 40°. Chiều cao cây (m, làm tròn đến hàng phần mười)?', unit: 'm', answer: '10.1', explain: '12 · tan 40°.' },
      { type: 'short', calc: 'round(5 * Math.cos(65 * Math.PI / 180), 2)', q: 'Thang 5 m tạo với mặt đất góc 65°. Chân thang cách tường (m, làm tròn đến hàng phần trăm)?', unit: 'm', answer: '2.11', explain: '5 · cos 65°.' },
      { type: 'short', calc: '9 / Math.sin(30 * Math.PI / 180)', q: 'Tam giác ABC vuông tại A, AB = 9, ∠C = 30°. Tính BC.', answer: '18', explain: 'BC = AB : sin C.' },
      { type: 'mcq', q: 'Tam giác ABC vuông tại A. Hệ thức nào đúng?', options: ['AC = BC · cos B', 'AC = BC · sin B', 'AC = AB · sin B', 'AC = BC · tan B'], answer: 1, explain: 'Cạnh góc vuông = huyền × sin góc đối.' },
      { type: 'short', calc: 'round(50 * Math.tan(35 * Math.PI / 180) + 1.5, 1)', q: 'Cách chân tháp 50 m, góc nâng 35°, mắt cao 1,5 m. Chiều cao tháp (m, làm tròn đến hàng phần mười)?', unit: 'm', answer: '36.5', explain: '50 · tan 35° + 1,5.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Chỉ biết hai góc nhọn thì giải được tam giác vuông.', answer: false, explain: 'Cần biết ít nhất một cạnh.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Trong tam giác vuông, cạnh góc vuông bằng cạnh góc vuông kia nhân với tan góc đối.', answer: true, explain: 'b = c · tan B.' }
    ]
  });
})();
