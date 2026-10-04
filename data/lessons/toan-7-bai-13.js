/* Toán 7 – Bài 13. Hai tam giác bằng nhau. Trường hợp bằng nhau thứ nhất của tam giác. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, C = S.C;
var P2 = { A: [80, 30], B: [30, 150], C: [170, 150], D: [285, 30], E: [235, 150], F: [375, 150] };
THCS.registerLesson('toan-7/bai-13', {
  objectives: [
    'Hiểu định nghĩa hai tam giác bằng nhau; viết đúng kí hiệu với các đỉnh tương ứng theo cùng thứ tự.',
    'Nắm trường hợp bằng nhau cạnh – cạnh – cạnh (c.c.c).',
    'Vận dụng c.c.c để chứng minh hai tam giác bằng nhau, từ đó suy ra các góc bằng nhau.'
  ],
  intro: 'Hai miếng bánh cắt từ cùng một khuôn chồng khít lên nhau – toán học gọi đó là hai hình bằng nhau. Với tam giác, liệu có cần đo đủ 3 cạnh và 3 góc mới biết chúng bằng nhau?',
  steps: [
    { title: 'Hai tam giác bằng nhau', html: `<p>Hai tam giác ABC và DEF gọi là <b>bằng nhau</b> nếu chúng có các cạnh tương ứng bằng nhau và các góc tương ứng bằng nhau:</p>
      <p class="math">AB = DE, BC = EF, CA = FD; &nbsp; ∠A = ∠D, ∠B = ∠E, ∠C = ∠F</p>
      <p>Kí hiệu: <b>ΔABC = ΔDEF</b>. Khi viết, các đỉnh tương ứng phải viết <b>theo cùng thứ tự</b>: A ↔ D, B ↔ E, C ↔ F.</p>`,
      svg: S.geo({ w: 410, h: 180, P: P2, seg: ['AB', 'BC', 'CA', 'DE', 'EF', 'FD'], ticks: [['AB', 1], ['DE', 1], ['BC', 2], ['EF', 2], ['CA', 3], ['FD', 3]], arcs: [['BAC', 1, '', C.orange, 20], ['EDF', 1, '', C.orange, 20], ['ABC', 2, '', C.blue, 20], ['DEF', 2, '', C.blue, 20], ['BCA', 3, '', C.green, 18], ['EFD', 3, '', C.green, 18]] }),
      caption: 'Các cạnh (góc) có cùng số vạch (số cung) là các cạnh (góc) tương ứng bằng nhau.' },
    { title: 'Đọc kí hiệu cho đúng', html: `<p>Từ ΔMNP = ΔHIK suy ra ngay: M ↔ H, N ↔ I, P ↔ K; MN = HI, NP = IK, MP = HK; ∠M = ∠H, ∠N = ∠I, ∠P = ∠K.</p>
      <div class="box note">ΔABC = ΔDEF khác với ΔABC = ΔEDF! Thứ tự đỉnh cho biết đỉnh nào tương ứng với đỉnh nào.</div>` },
    { title: 'Trường hợp cạnh – cạnh – cạnh (c.c.c)', html: `<div class="box note">Nếu ba cạnh của tam giác này bằng ba cạnh của tam giác kia thì hai tam giác đó bằng nhau.</div>
      <p class="math">AB = A'B', BC = B'C', CA = C'A' &nbsp;⇒&nbsp; ΔABC = ΔA'B'C' (c.c.c)</p>
      <p>Chỉ cần biết 3 cạnh, không cần đo góc: ba thanh gỗ có độ dài cố định ghép thành một khung tam giác “cứng”, không xô lệch được.</p>`,
      svg: S.geo({ w: 410, h: 180, P: { A: [60, 40], B: [30, 150], C: [180, 150], "A'": [265, 40], "B'": [235, 150], "C'": [385, 150] }, seg: ['AB', 'BC', 'CA', "A'-B'", "B'-C'", "C'-A'"], ticks: [['AB', 1], ["A'-B'", 1], ['BC', 2], ["B'-C'", 2], ['CA', 3], ["C'-A'", 3]] }),
      caption: 'Ba cặp cạnh bằng nhau ⇒ ΔABC = ΔA\'B\'C\' (c.c.c).' },
    { title: 'Các bước chứng minh', html: `<ol><li>Xét hai tam giác cần chứng minh bằng nhau.</li><li>Liệt kê ba cặp cạnh bằng nhau, mỗi cặp kèm lí do (giả thiết, cạnh chung…).</li><li>Kết luận: Δ… = Δ… (c.c.c).</li><li>Suy ra các góc tương ứng bằng nhau nếu đề hỏi.</li></ol>
      <p>Mẹo: một cạnh chung của hai tam giác luôn là một cặp cạnh bằng nhau.</p>` }
  ],
  summary: 'ΔABC = ΔDEF: các cạnh và góc tương ứng bằng nhau, đỉnh viết theo đúng thứ tự tương ứng. c.c.c: ba cạnh bằng ba cạnh ⇒ hai tam giác bằng nhau ⇒ các góc tương ứng bằng nhau.',
  examples: [
    { title: 'Suy ra từ kí hiệu', problem: 'Cho ΔABC = ΔMNP, AB = 5 cm, ∠N = 70°. Tìm MN và ∠B.', solution: 'A ↔ M, B ↔ N nên MN = AB = 5 cm và ∠B = ∠N = 70°.' },
    { title: 'Chứng minh bằng c.c.c', problem: 'Cho tứ giác ABCD có AB = AD, CB = CD. Chứng minh ΔABC = ΔADC và ∠ABC = ∠ADC.', solution: 'Xét ΔABC và ΔADC: AB = AD (gt), CB = CD (gt), AC chung. Vậy ΔABC = ΔADC (c.c.c) ⇒ ∠ABC = ∠ADC (hai góc tương ứng).' },
    { title: 'Tính góc', problem: 'ΔABC = ΔDEF, ∠A = 50°, ∠E = 75°. Tính ∠F.', solution: '∠D = ∠A = 50°. ∠F = 180° − 50° − 75° = 55°.' }
  ],
  exercises: [
    { question: 'ΔHIK = ΔDEF, HI = 3 cm, IK = 4 cm, HK = 5 cm. Tính chu vi ΔDEF.', hints: ['Hai tam giác bằng nhau có các cạnh tương ứng bằng nhau.', 'Chu vi là tổng ba cạnh.'], solution: 'DE = 3, EF = 4, DF = 5 ⇒ chu vi 12 cm.' },
    { question: 'Cho đoạn AB, hai điểm C, D nằm khác phía đối với AB sao cho CA = DA, CB = DB. Chứng minh ∠CAB = ∠DAB.', hints: ['Xét ΔCAB và ΔDAB.', 'AB là cạnh chung.'], solution: 'ΔCAB = ΔDAB (c.c.c: CA = DA, CB = DB, AB chung) ⇒ ∠CAB = ∠DAB.' },
    { question: 'Viết các cặp góc bằng nhau khi biết ΔPQR = ΔXYZ.', hints: ['Đọc theo thứ tự: P ↔ X…', 'Có ba cặp.'], solution: '∠P = ∠X, ∠Q = ∠Y, ∠R = ∠Z.' }
  ],
  quiz: [
    { type: 'mcq', q: 'ΔABC = ΔMNP. Cạnh tương ứng với BC là:', options: ['MN', 'NP', 'MP', 'PN và MN'], answer: 1, explain: 'B ↔ N, C ↔ P nên BC ↔ NP.' },
    { type: 'short', calc: '180 - 50 - 75', q: 'ΔABC = ΔDEF, ∠A = 50°, ∠E = 75°. Tính ∠F (độ).', unit: 'độ', answer: '55', explain: '∠D = 50°; ∠F = 180° − 125° = 55°.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nếu ΔABC = ΔDEF thì ∠B = ∠F.', answer: false, explain: 'B ↔ E nên ∠B = ∠E.' },
    { type: 'short', calc: '3 + 4 + 5', q: 'ΔHIK = ΔDEF với HI = 3 cm, IK = 4 cm, HK = 5 cm. Chu vi ΔDEF là bao nhiêu cm?', unit: 'cm', answer: '12', explain: '3 + 4 + 5 = 12.' },
    { type: 'mcq', q: 'Trường hợp c.c.c cần biết:', options: ['hai cạnh và góc xen giữa', 'ba cặp cạnh bằng nhau', 'ba cặp góc bằng nhau', 'một cạnh và hai góc kề'], answer: 1, explain: 'c.c.c = cạnh – cạnh – cạnh.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hai tam giác có ba cặp góc bằng nhau thì bằng nhau.', answer: false, explain: 'Hai tam giác đều cạnh 1 cm và 5 cm có các góc bằng nhau nhưng không bằng nhau.' },
    { type: 'short', calc: '5', q: 'ΔABC = ΔMNP, AB = 5 cm. Độ dài MN là bao nhiêu cm?', unit: 'cm', answer: '5', explain: 'AB ↔ MN.' },
    { type: 'mcq', q: 'Tứ giác ABCD có AB = AD, CB = CD. Cặp tam giác bằng nhau theo c.c.c là:', options: ['ΔABC = ΔADC', 'ΔABC = ΔCDA', 'ΔABD = ΔCBD', 'ΔABC = ΔACD'], answer: 0, explain: 'AB = AD, BC = DC, AC chung, đỉnh viết đúng thứ tự: ΔABC = ΔADC.' }
  ]
});
})();
