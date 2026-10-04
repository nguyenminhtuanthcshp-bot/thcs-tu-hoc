/* Toán 7 – Bài 34. Sự đồng quy của ba đường trung tuyến, ba đường phân giác trong một tam giác. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, C = S.C, G = S.geom;
var A = [170, 35], B = [50, 210], Cc = [340, 210];
var M = G.mid(B, Cc), N = G.mid(Cc, A), P = G.mid(A, B), Gt = G.centroid(A, B, Cc);
var I = G.incenter(A, B, Cc), H1 = G.foot(I, B, Cc), H2 = G.foot(I, Cc, A), H3 = G.foot(I, A, B);
var D = G.bisectFoot(A, B, Cc), E = G.bisectFoot(B, Cc, A), F = G.bisectFoot(Cc, A, B);
THCS.registerLesson('toan-7/bai-34', {
  objectives: [
    'Nhận biết đường trung tuyến, đường phân giác của tam giác.',
    'Nắm tính chất ba đường trung tuyến đồng quy tại trọng tâm G (G cách mỗi đỉnh {{2|3}} độ dài trung tuyến đi qua đỉnh đó).',
    'Nắm tính chất ba đường phân giác đồng quy tại một điểm cách đều ba cạnh; vận dụng tính độ dài, số đo góc.'
  ],
  intro: 'Đặt một tấm bìa hình tam giác lên đầu bút chì – có một điểm duy nhất để tấm bìa thăng bằng. Đó chính là trọng tâm, giao điểm của ba đường trung tuyến!',
  steps: [
    { title: 'Đường trung tuyến', html: `<p>Đoạn thẳng nối một đỉnh của tam giác với <b>trung điểm cạnh đối diện</b> gọi là đường trung tuyến. Mỗi tam giác có ba đường trung tuyến.</p>
      <p>Trong hình: M, N, P lần lượt là trung điểm BC, CA, AB; AM, BN, CP là các đường trung tuyến.</p>` },
    { title: 'Tính chất ba đường trung tuyến', html: `<p>Ba đường trung tuyến của một tam giác <b>cùng đi qua một điểm</b> G gọi là <b>trọng tâm</b>. Trọng tâm cách mỗi đỉnh một khoảng bằng {{2|3}} độ dài đường trung tuyến đi qua đỉnh ấy:</p>
      <p style="text-align:center">AG = {{2|3}}AM; &nbsp; BG = {{2|3}}BN; &nbsp; CG = {{2|3}}CP.</p>
      <p>Suy ra GM = {{1|3}}AM và AG = 2GM.</p>`,
      svg: S.geo({ w: 390, h: 240, P: { A: A, B: B, C: Cc, M: M, N: N, P: P, G: Gt }, seg: ['AB', 'BC', 'CA', { s: 'AM', color: C.blue }, { s: 'BN', color: C.blue }, { s: 'CP', color: C.blue }], ticks: [['BM', 1], ['MC', 1], ['CN', 2], ['NA', 2], ['AP', 3], ['PB', 3]], off: { G: [14, -6], M: [0, 22], N: [14, -4], P: [-14, -4] } }),
      caption: 'Ba trung tuyến đồng quy tại trọng tâm G.' },
    { title: 'Đường phân giác của tam giác', html: `<p>Đoạn thẳng nối đỉnh A với điểm D trên cạnh BC sao cho AD là tia phân giác của góc A gọi là đường phân giác của tam giác. Mỗi tam giác có ba đường phân giác.</p>
      <p>Nhắc lại: điểm nằm trên tia phân giác của một góc thì <b>cách đều hai cạnh</b> của góc đó.</p>` },
    { title: 'Tính chất ba đường phân giác', html: `<p>Ba đường phân giác của một tam giác <b>cùng đi qua một điểm</b> I. Điểm I <b>cách đều ba cạnh</b> của tam giác: IH = IK = IL.</p>`,
      svg: S.geo({ w: 390, h: 240, P: { A: A, B: B, C: Cc, I: I, D: D, E: E, F: F, H: H1, K: H2, L: H3 }, seg: ['AB', 'BC', 'CA', { s: 'AD', color: C.green }, { s: 'BE', color: C.green }, { s: 'CF', color: C.green }], dash: ['IH', 'IK', 'IL'], right: ['IHC', 'IKA', 'ILB'], arcs: [['BAD', 1, '', C.orange, 28], ['DAC', 1, '', C.orange, 33], ['ABE', 2, '', C.blue, 30], ['EBC', 2, '', C.blue, 40]], hide: ['D', 'E', 'F'], off: { I: [2, -12], H: [0, 22], K: [14, -4], L: [-14, -4] } }),
      caption: 'I cách đều ba cạnh: IH = IK = IL.' },
    { title: 'Ví dụ tính toán', html: `<p>AM là trung tuyến, AM = 9 cm ⇒ AG = {{2|3}} · 9 = 6 cm, GM = 3 cm.</p>
      <p>Tam giác ABC có góc A = 60°, I là giao điểm ba đường phân giác. Góc IBC + góc ICB = {{1|2}}(góc B + góc C) = {{1|2}} · 120° = 60° ⇒ góc BIC = 120°.</p>` }
  ],
  summary: 'Ba trung tuyến đồng quy tại trọng tâm G: AG = {{2|3}}AM, GM = {{1|3}}AM. Ba phân giác đồng quy tại I cách đều ba cạnh. Góc BIC = 180° − {{1|2}}(góc B + góc C).',
  examples: [
    { title: 'Trọng tâm', problem: 'G là trọng tâm tam giác ABC, trung tuyến BN = 12 cm. Tính BG, GN.', solution: 'BG = 8 cm, GN = 4 cm.' },
    { title: 'Ngược lại', problem: 'G là trọng tâm, GM = 2,5 cm (M là trung điểm BC). Tính AM.', solution: 'AM = 3GM = 7,5 cm.' },
    { title: 'Cách đều ba cạnh', problem: 'I là giao điểm ba phân giác, khoảng cách từ I đến AB là 3 cm. Tính khoảng cách từ I đến BC.', solution: '3 cm.' }
  ],
  exercises: [
    { question: 'Trung tuyến AM = 15 cm. Tính AG và GM.', hints: ['AG = {{2|3}}AM.', 'GM = AM − AG.'], solution: 'AG = 10 cm, GM = 5 cm.' },
    { question: 'Tam giác ABC có góc B = 70°, góc C = 50°; I là giao điểm các phân giác. Tính góc BIC.', hints: ['Góc IBC = 35°, góc ICB = 25°.', '180° − 60°.'], solution: '120°.' },
    { question: 'Chứng minh: trong tam giác cân tại A, trung tuyến AM cũng là phân giác.', hints: ['Tam giác ABM và ACM: AB = AC, BM = CM, AM chung.', 'c.c.c ⇒ góc BAM = góc CAM.'], solution: 'ΔABM = ΔACM (c.c.c) nên góc BAM = góc CAM: AM là phân giác.' }
  ],
  quiz: [
    { type: 'short', calc: '2 / 3 * 9', q: 'Trung tuyến AM = 9 cm, G là trọng tâm. AG = ? cm', unit: 'cm', answer: '6', explain: '{{2|3}} · 9.' },
    { type: 'short', calc: '12 / 3', q: 'Trung tuyến BN = 12 cm, G là trọng tâm. GN = ? cm', unit: 'cm', answer: '4', explain: '{{1|3}} · 12.' },
    { type: 'short', calc: '3 * 2.5', q: 'G là trọng tâm, GM = 2,5 cm. AM = ? cm', unit: 'cm', answer: '7.5', answerText: '7,5', explain: 'AM = 3GM.' },
    { type: 'short', calc: '2 / 3', requireSimplest: true, q: 'Tỉ số AG : AM (phân số tối giản) bằng bao nhiêu?', answer: '2/3', explain: 'Tính chất trọng tâm.' },
    { type: 'short', calc: '180 - (70 + 50) / 2', q: 'Tam giác ABC có góc B = 70°, góc C = 50°; I là giao điểm ba phân giác. Góc BIC = ?°', unit: '°', answer: '120', explain: '180 − 60.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Giao điểm ba đường phân giác cách đều ba đỉnh của tam giác.', answer: false, explain: 'Cách đều ba cạnh.' },
    { type: 'mcq', q: 'Trọng tâm của tam giác là giao điểm của ba đường:', options: ['phân giác', 'trung tuyến', 'cao', 'trung trực'], answer: 1, explain: 'Định nghĩa.' },
    { type: 'short', calc: '3', q: 'I là giao điểm ba phân giác, khoảng cách từ I đến AB là 3 cm. Khoảng cách từ I đến AC (cm)?', unit: 'cm', answer: '3', explain: 'Cách đều ba cạnh.' }
  ]
});
})();
