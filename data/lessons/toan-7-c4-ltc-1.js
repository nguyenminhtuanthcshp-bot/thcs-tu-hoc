/* Toán 7 – Chương IV. Luyện tập chung (sau Bài 13). Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, C = S.C;
THCS.registerLesson('toan-7/c4-ltc-1', {
  objectives: [
    'Vận dụng định lí tổng ba góc và tính chất góc ngoài để tính góc.',
    'Viết đúng kí hiệu hai tam giác bằng nhau, suy ra cạnh – góc tương ứng.',
    'Chứng minh hai tam giác bằng nhau theo trường hợp c.c.c và suy ra góc bằng nhau.'
  ],
  intro: 'Luyện tập Bài 12 và Bài 13. Mỗi bài chứng minh là một “câu chuyện” ngắn: xét hai tam giác nào, có những gì bằng nhau, kết luận ra sao.',
  steps: [
    { title: 'Tính góc trong tam giác', html: `<ul><li>∠A + ∠B + ∠C = 180°.</li><li>Tam giác vuông: hai góc nhọn phụ nhau.</li><li>Góc ngoài = tổng hai góc trong không kề.</li></ul>` },
    { title: 'Tìm tam giác bằng nhau trong hình', html: `<p>Hình có nhiều đoạn thẳng thường chứa những cặp tam giác bằng nhau “ẩn”. Tìm cạnh chung trước tiên.</p>`,
      svg: S.geo({ w: 360, h: 230, P: { A: [180, 20], B: [60, 120], D: [300, 120], C: [180, 210] }, seg: ['AB', 'BC', 'CD', 'DA', { s: 'AC', color: C.blue, width: 2.5 }], ticks: [['AB', 1], ['AD', 1], ['BC', 2], ['DC', 2]], arcs: [['BAC', 1, '', C.orange, 26], ['CAD', 1, '', C.orange, 26]], off: { A: [0, -10], C: [0, 22] } }),
      caption: 'AB = AD, CB = CD, AC chung ⇒ ΔABC = ΔADC (c.c.c) ⇒ ∠BAC = ∠DAC: AC là tia phân giác của ∠BAD.' },
    { title: 'Trình bày chuẩn', html: `<p><i>Xét</i> ΔABC và ΔADC có:<br>AB = AD (gt)<br>CB = CD (gt)<br>AC là cạnh chung<br><i>Do đó</i> ΔABC = ΔADC (c.c.c).<br><i>Suy ra</i> ∠BAC = ∠DAC (hai góc tương ứng).</p>` },
    { title: 'Lỗi thường gặp', html: `<ul><li>Viết sai thứ tự đỉnh trong kí hiệu.</li><li>Kết luận hai tam giác bằng nhau khi mới có hai cặp cạnh bằng nhau.</li><li>Quên nêu lí do (gt, cạnh chung…).</li></ul>` }
  ],
  summary: 'Tổng ba góc 180°, góc ngoài bằng tổng hai góc trong không kề. Kí hiệu tam giác bằng nhau theo đúng thứ tự đỉnh. c.c.c cần đủ ba cặp cạnh; cạnh chung là trợ thủ quen thuộc.',
  examples: [
    { title: 'Góc ngoài', problem: 'ΔABC có góc ngoài tại C bằng 110°, ∠A = 45°. Tính ∠B.', solution: 'Góc ngoài tại C = ∠A + ∠B ⇒ ∠B = 110° − 45° = 65°.' },
    { title: 'Tia phân giác', problem: 'Ở hình bước 2, ∠BAD = 80°. Tính ∠BAC.', solution: 'ΔABC = ΔADC ⇒ ∠BAC = ∠DAC = 80° : 2 = 40°.' },
    { title: 'Kí hiệu', problem: 'ΔABC = ΔDEF, AB = 4 cm, BC = 6 cm, DF = 5 cm. Tính chu vi mỗi tam giác.', solution: 'DE = 4, EF = 6, AC = DF = 5. Chu vi mỗi tam giác = 4 + 6 + 5 = 15 (cm).' }
  ],
  exercises: [
    { question: 'Tam giác ABC có ∠A = 80°, ∠B − ∠C = 20°. Tính ∠B, ∠C.', hints: ['∠B + ∠C = 100°.', 'Tổng và hiệu.'], solution: '∠B = 60°, ∠C = 40°.' },
    { question: 'Cho ΔABC có AB = AC, M là trung điểm BC. Chứng minh ΔABM = ΔACM.', hints: ['MB = MC vì M là trung điểm.', 'AM là cạnh chung.'], solution: 'AB = AC (gt), MB = MC (M trung điểm), AM chung ⇒ ΔABM = ΔACM (c.c.c).' },
    { question: 'Tiếp bài 2: chứng minh AM ⊥ BC.', hints: ['Suy ra ∠AMB = ∠AMC.', 'Hai góc này kề bù.'], solution: '∠AMB = ∠AMC và ∠AMB + ∠AMC = 180° ⇒ mỗi góc bằng 90° ⇒ AM ⊥ BC.' }
  ],
  quiz: [
    { type: 'short', calc: '110 - 45', q: 'Góc ngoài tại C của ΔABC bằng 110°, ∠A = 45°. Tính ∠B (độ).', unit: 'độ', answer: '65', explain: '110° − 45° = 65°.' },
    { type: 'short', calc: '(180 - 80 + 20) / 2', q: 'ΔABC có ∠A = 80°, ∠B − ∠C = 20°. Tính ∠B (độ).', unit: 'độ', answer: '60', explain: '∠B + ∠C = 100°; ∠B = 60°.' },
    { type: 'mcq', q: 'ΔABC = ΔDEF. Khẳng định nào đúng?', options: ['AC = DE', '∠C = ∠E', 'BC = EF', '∠A = ∠F'], answer: 2, explain: 'B ↔ E, C ↔ F nên BC = EF.' },
    { type: 'short', calc: '80 / 2', q: 'AB = AD, CB = CD, ∠BAD = 80°. Tính ∠BAC (độ).', unit: 'độ', answer: '40', explain: 'ΔABC = ΔADC ⇒ AC là phân giác.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: ΔABC có AB = AC, M là trung điểm BC thì AM ⊥ BC.', answer: true, explain: 'ΔABM = ΔACM (c.c.c) ⇒ hai góc kề bù bằng nhau = 90°.' },
    { type: 'short', calc: '4 + 6 + 5', q: 'ΔABC = ΔDEF, AB = 4 cm, BC = 6 cm, DF = 5 cm. Chu vi ΔABC là bao nhiêu cm?', unit: 'cm', answer: '15', explain: 'AC = DF = 5; 4 + 6 + 5 = 15.' },
    { type: 'mcq', q: 'Để kết luận ΔABC = ΔA\'B\'C\' theo c.c.c, cần:', options: ['AB = A\'B\', AC = A\'C\'', 'AB = A\'B\', BC = B\'C\', AC = A\'C\'', '∠A = ∠A\', AB = A\'B\'', 'ba góc bằng nhau'], answer: 1, explain: 'Cần đủ ba cặp cạnh.' },
    { type: 'short', calc: '90 - 32', q: 'Tam giác vuông có một góc nhọn 32°. Góc nhọn còn lại bằng bao nhiêu độ?', unit: 'độ', answer: '58', explain: '90° − 32° = 58°.' }
  ]
});
})();
