/* Toán 7 – Chương IV. Luyện tập chung (sau Bài 14). Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, C = S.C;
THCS.registerLesson('toan-7/c4-ltc-2', {
  objectives: [
    'Chọn đúng trường hợp c.c.c, c.g.c, g.c.g để chứng minh hai tam giác bằng nhau.',
    'Dùng hai tam giác bằng nhau để chứng minh hai đoạn thẳng, hai góc bằng nhau, hai đường thẳng song song hoặc vuông góc.',
    'Trình bày lời giải chứng minh mạch lạc.'
  ],
  intro: 'Luyện tập ba trường hợp bằng nhau. Chìa khoá là nhìn ra cặp tam giác phù hợp và các “yếu tố bằng nhau miễn phí”: cạnh chung, góc chung, góc đối đỉnh.',
  steps: [
    { title: 'Ba trường hợp', html: `<ul><li><b>c.c.c</b>: ba cặp cạnh.</li><li><b>c.g.c</b>: hai cặp cạnh + góc xen giữa.</li><li><b>g.c.g</b>: một cặp cạnh + hai góc kề.</li></ul>` },
    { title: 'Hình điển hình: trung điểm và đối đỉnh', html: `<p>M là trung điểm BC, D trên tia đối của MA với MD = MA:</p>`,
      svg: S.geo({ w: 360, h: 260, P: { A: [140, 20], B: [50, 130], C: [270, 130], M: [160, 130], D: [180, 240] }, seg: ['AB', 'BC', 'CA', 'AD', { s: 'CD', color: C.blue }, { s: 'BD', dash: true, color: C.muted }], ticks: [['BM', 1], ['MC', 1], ['AM', 2], ['MD', 2]], arcs: [['AMB', 1, '', C.orange, 16], ['DMC', 1, '', C.orange, 16]], off: { M: [16, -4], D: [0, 20] } }),
      caption: 'ΔMAB = ΔMDC (c.g.c) ⇒ AB = DC và ∠BAM = ∠CDM ⇒ AB // CD (so le trong).' },
    { title: 'Từ tam giác bằng nhau đến song song, vuông góc', html: `<ul><li>Hai góc tương ứng ở vị trí so le trong bằng nhau ⇒ hai đường thẳng song song.</li><li>Hai góc tương ứng kề bù và bằng nhau ⇒ mỗi góc 90° ⇒ vuông góc.</li></ul>` },
    { title: 'Sơ đồ phân tích ngược', html: `<p>Muốn chứng minh AB = DC ⇐ ΔMAB = ΔMDC ⇐ (MA = MD, ∠AMB = ∠DMC, MB = MC). Viết lời giải theo chiều ngược lại của sơ đồ.</p>`,
      svg: S.flow({ items: ['AB = DC ?', 'ΔMAB = ΔMDC ?', 'MA = MD; ∠AMB = ∠DMC; MB = MC'] }) }
  ],
  summary: 'Chọn c.c.c/c.g.c/g.c.g theo dữ kiện; tận dụng cạnh chung, góc đối đỉnh, trung điểm. Tam giác bằng nhau ⇒ đoạn/góc bằng nhau ⇒ song song hoặc vuông góc. Phân tích ngược, trình bày xuôi.',
  examples: [
    { title: 'Chứng minh song song', problem: 'Theo hình bước 2, chứng minh AB // CD.', solution: 'ΔMAB = ΔMDC (c.g.c) ⇒ ∠BAM = ∠CDM. Hai góc này ở vị trí so le trong (cát tuyến AD) ⇒ AB // CD.' },
    { title: 'Góc chung', problem: 'Trên hai cạnh Ox, Oy của ∠xOy lấy A, C trên Ox và B, D trên Oy sao cho OA = OB, OC = OD. Chứng minh AD = BC.', solution: 'ΔOAD và ΔOBC: OA = OB, ∠O chung, OD = OC ⇒ ΔOAD = ΔOBC (c.g.c) ⇒ AD = BC.' },
    { title: 'g.c.g với góc tính được', problem: 'ΔABC và ΔDEF có BC = EF = 6 cm, ∠B = ∠E = 50°, ∠A = ∠D = 70°. Hai tam giác có bằng nhau không?', solution: '∠C = ∠F = 180° − 120° = 60°. Có BC = EF, ∠B = ∠E, ∠C = ∠F ⇒ bằng nhau (g.c.g).' }
  ],
  exercises: [
    { question: 'Theo hình bước 2, biết AB = 5 cm, ∠BAM = 35°. Tính CD và ∠CDM.', hints: ['ΔMAB = ΔMDC.', 'Cạnh, góc tương ứng.'], solution: 'CD = 5 cm; ∠CDM = 35°.' },
    { question: 'Cho ΔABC có ∠B = ∠C. Tia phân giác của ∠A cắt BC tại D. Chứng minh AB = AC.', hints: ['Xét ΔABD và ΔACD: ∠BAD = ∠CAD, AD chung.', 'Tính ∠ADB, ∠ADC theo tổng ba góc.'], solution: '∠ADB = 180° − ∠B − ∠BAD = 180° − ∠C − ∠CAD = ∠ADC. ΔABD = ΔACD (g.c.g) ⇒ AB = AC.' },
    { question: 'Đoạn AB và CD cắt nhau tại O, OA = OB, ∠A = ∠B (A, B là các đỉnh của ΔOAC và ΔOBD). Chứng minh OC = OD.', hints: ['Góc tại O đối đỉnh.', 'g.c.g.'], solution: 'ΔOAC = ΔOBD (∠A = ∠B, OA = OB, ∠AOC = ∠BOD) ⇒ OC = OD.' }
  ],
  quiz: [
    { type: 'short', calc: '5', q: 'Theo hình bước 2, AB = 5 cm. Tính CD (cm).', unit: 'cm', answer: '5', explain: 'ΔMAB = ΔMDC.' },
    { type: 'mcq', q: 'OA = OB, ∠O chung, OD = OC. ΔOAD = ΔOBC theo trường hợp:', options: ['c.c.c', 'c.g.c', 'g.c.g', 'không kết luận được'], answer: 1, explain: 'Góc O xen giữa hai cạnh.' },
    { type: 'short', calc: '180 - 50 - 70', q: 'ΔABC có ∠B = 50°, ∠A = 70°. Tính ∠C (độ).', unit: 'độ', answer: '60', explain: '180° − 120° = 60°.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nếu hai góc so le trong bằng nhau thì hai đường thẳng song song.', answer: true, explain: 'Dấu hiệu nhận biết.' },
    { type: 'short', calc: '35', q: 'Hình bước 2: ∠BAM = 35°. ∠CDM bằng bao nhiêu độ?', unit: 'độ', answer: '35', explain: 'Hai góc tương ứng.' },
    { type: 'mcq', q: 'Hai góc tương ứng bằng nhau và kề bù thì mỗi góc bằng:', options: ['45°', '60°', '90°', '180°'], answer: 2, explain: '180° : 2.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nếu ΔABD = ΔACD thì AB = AC.', answer: true, explain: 'AB ↔ AC là cặp cạnh tương ứng.' },
    { type: 'short', calc: '2 * 4', q: 'M là trung điểm BC, D trên tia đối của MA với MD = MA, AM = 4 cm. Tính AD (cm).', unit: 'cm', answer: '8', explain: 'AD = AM + MD = 8.' }
  ]
});
})();
