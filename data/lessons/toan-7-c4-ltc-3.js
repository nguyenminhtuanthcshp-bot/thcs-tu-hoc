/* Toán 7 – Chương IV. Luyện tập chung (sau Bài 16). Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, C = S.C;
THCS.registerLesson('toan-7/c4-ltc-3', {
  objectives: [
    'Vận dụng các trường hợp bằng nhau của tam giác vuông.',
    'Vận dụng tính chất, dấu hiệu nhận biết tam giác cân, tam giác đều.',
    'Vận dụng tính chất đường trung trực để chứng minh các đoạn thẳng bằng nhau.'
  ],
  intro: 'Luyện tập Bài 15 và Bài 16. Tam giác cân là “nhà máy” sinh ra các cặp tam giác vuông bằng nhau – chỉ cần kẻ đường cao từ đỉnh.',
  steps: [
    { title: 'Tam giác cân và đường cao', html: `<p>ΔABC cân tại A, kẻ AH ⊥ BC. Khi đó ΔAHB = ΔAHC (cạnh huyền – cạnh góc vuông), suy ra:</p><ul><li>HB = HC (H là trung điểm BC);</li><li>∠BAH = ∠CAH (AH là tia phân giác của ∠A);</li><li>AH là đường trung trực của BC.</li></ul>`,
      svg: S.geo({ w: 340, h: 220, P: { A: [170, 25], B: [60, 195], C: [280, 195], H: [170, 195] }, seg: ['AB', 'BC', 'CA', { s: 'AH', color: C.blue }], right: ['AHC'], ticks: [['AB', 1], ['AC', 1], ['BH', 2], ['HC', 2]], arcs: [['BAH', 1, '', C.orange, 34], ['HAC', 1, '', C.orange, 34]], off: { A: [0, -10], H: [0, 22] } }),
      caption: 'Đường cao AH của tam giác cân đồng thời là trung tuyến, phân giác, trung trực.' },
    { title: 'Nhận biết tam giác cân, đều', html: `<ul><li>Hai cạnh bằng nhau hoặc hai góc bằng nhau ⇒ cân.</li><li>Ba cạnh bằng nhau, hoặc ba góc bằng nhau, hoặc cân có một góc 60° ⇒ đều.</li></ul>` },
    { title: 'Dùng đường trung trực', html: `<p>Muốn chứng minh MA = MB, có thể chỉ ra M nằm trên đường trung trực của AB. Ngược lại, biết MA = MB và NA = NB thì MN là trung trực của AB.</p>` },
    { title: 'Bài toán tính góc tổng hợp', html: `<p>Kết hợp: tổng ba góc, góc ở đáy tam giác cân, góc ngoài, góc kề bù. Ví dụ: ΔABC cân tại A, ∠A = 36°; phân giác BD. Khi đó ∠B = ∠C = 72°, ∠ABD = 36° = ∠A ⇒ ΔABD cân tại D.</p>` }
  ],
  summary: 'Đường cao từ đỉnh tam giác cân tạo hai tam giác vuông bằng nhau, đồng thời là trung tuyến, phân giác, trung trực. Nhận biết cân/đều qua cạnh hoặc góc; dùng trung trực để có đoạn thẳng bằng nhau.',
  examples: [
    { title: 'Tính độ dài', problem: 'ΔABC cân tại A, AH ⊥ BC, BC = 8 cm. Tính BH.', solution: 'H là trung điểm BC ⇒ BH = 4 cm.' },
    { title: 'Tam giác cân sinh ra từ phân giác', problem: 'ΔABC cân tại A, ∠A = 36°, BD là phân giác (D ∈ AC). Chứng minh ΔABD cân.', solution: '∠B = (180° − 36°) : 2 = 72° ⇒ ∠ABD = 36° = ∠BAD ⇒ ΔABD cân tại D.' },
    { title: 'Tam giác đều', problem: 'ΔABC cân tại A có ∠B = 60°. Chứng minh ΔABC đều.', solution: '∠C = ∠B = 60° ⇒ ∠A = 60°: ba góc bằng nhau ⇒ đều.' }
  ],
  exercises: [
    { question: 'ΔABC cân tại A, ∠A = 120°, AH ⊥ BC. Tính ∠BAH, ∠B.', hints: ['AH là phân giác của ∠A.', '∠B = (180° − 120°) : 2.'], solution: '∠BAH = 60°, ∠B = 30°.' },
    { question: 'Cho đoạn AB, đường trung trực d. Lấy M ∈ d sao cho ∠AMB = 60°. ΔMAB là tam giác gì?', hints: ['MA = MB ⇒ cân tại M.', 'Cân có góc 60°.'], solution: 'ΔMAB đều.' },
    { question: 'ΔABC cân tại A; trên cạnh AB, AC lấy D, E sao cho AD = AE. Chứng minh BE = CD.', hints: ['Xét ΔABE và ΔACD.', 'c.g.c với góc A chung.'], solution: 'AB = AC, ∠A chung, AE = AD ⇒ ΔABE = ΔACD (c.g.c) ⇒ BE = CD.' }
  ],
  quiz: [
    { type: 'short', calc: '8 / 2', q: 'ΔABC cân tại A, AH ⊥ BC, BC = 8 cm. Tính BH (cm).', unit: 'cm', answer: '4', explain: 'H là trung điểm BC.' },
    { type: 'short', calc: '(180 - 36) / 2 / 2', q: 'ΔABC cân tại A, ∠A = 36°, BD là phân giác của ∠B. Tính ∠ABD (độ).', unit: 'độ', answer: '36', explain: '∠B = 72° ⇒ ∠ABD = 36°.' },
    { type: 'mcq', q: 'Tam giác cân có một góc bằng 60° là:', options: ['tam giác vuông', 'tam giác tù', 'tam giác đều', 'tam giác vuông cân'], answer: 2, explain: 'Dấu hiệu nhận biết tam giác đều.' },
    { type: 'short', calc: '(180 - 120) / 2', q: 'ΔABC cân tại A, ∠A = 120°. Tính ∠B (độ).', unit: 'độ', answer: '30', explain: '(180° − 120°) : 2 = 30°.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Trong tam giác cân, đường cao kẻ từ đỉnh cũng là tia phân giác của góc ở đỉnh.', answer: true, explain: 'ΔAHB = ΔAHC ⇒ ∠BAH = ∠CAH.' },
    { type: 'short', calc: '120 / 2', q: 'ΔABC cân tại A, ∠A = 120°, AH ⊥ BC. Tính ∠BAH (độ).', unit: 'độ', answer: '60', explain: 'AH là phân giác: 120° : 2.' },
    { type: 'mcq', q: 'M thuộc đường trung trực của AB và ∠AMB = 60°. ΔMAB là:', options: ['tam giác vuông', 'tam giác đều', 'tam giác tù', 'không xác định'], answer: 1, explain: 'Cân tại M có góc 60°.' },
    { type: 'short', calc: '3 * 5', q: 'Tam giác đều có cạnh 5 cm. Chu vi bằng bao nhiêu cm?', unit: 'cm', answer: '15', explain: '3 · 5 = 15.' }
  ]
});
})();
