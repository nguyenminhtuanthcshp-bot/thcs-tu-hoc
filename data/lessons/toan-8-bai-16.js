/* Toán 8 – Bài 16. Đường trung bình của tam giác. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C, G = S.geom;
  var A = [170, 30], B = [50, 210], Cc = [330, 210], M = G.mid(A, B), N = G.mid(A, Cc);
  THCS.registerLesson('toan-8/bai-16', {
    objectives: [
      'Nhận biết được đường trung bình của tam giác.',
      'Giải thích được tính chất đường trung bình của tam giác (song song với cạnh thứ ba và bằng nửa cạnh ấy).',
      'Vận dụng tính chất đường trung bình để tính độ dài, chứng minh song song và giải quyết bài toán thực tế.'
    ],
    intro: 'Muốn đo khoảng cách giữa hai điểm bị ngăn bởi một cái ao, chỉ cần đo một đoạn thẳng ngắn hơn rồi nhân đôi – nhờ đường trung bình của tam giác.',
    steps: [
      { title: 'Định nghĩa', html: `<p><b>Đường trung bình</b> của tam giác là đoạn thẳng nối <b>trung điểm hai cạnh</b> của tam giác.</p><p>Mỗi tam giác có ba đường trung bình.</p>`,
        svg: S.geo({ w: 380, h: 240, P: { A: A, B: B, C: Cc, M: M, N: N }, seg: ['AB', 'BC', 'CA', { s: 'MN', color: C.blue, width: 2.8 }], ticks: [['AM', 1], ['MB', 1], ['AN', 2], ['NC', 2]] }), caption: 'MN là đường trung bình của ΔABC.' },
      { title: 'Tính chất', html: `<div class="box key">Đường trung bình của tam giác thì <b>song song với cạnh thứ ba</b> và <b>bằng nửa cạnh ấy</b>.</div>
        <p>MN // BC và MN = {{1|2}}BC.</p>
        <p>Giải thích: {{AM|AB}} = {{AN|AC}} = {{1|2}} nên MN // BC (Thalès đảo); theo hệ quả Thalès, {{MN|BC}} = {{AM|AB}} = {{1|2}}.</p>` },
      { title: 'Đường thẳng qua trung điểm, song song với cạnh thứ hai', html: `<p>Đường thẳng đi qua trung điểm một cạnh của tam giác và song song với cạnh thứ hai thì đi qua trung điểm cạnh thứ ba.</p>
        <p>Ví dụ: M là trung điểm AB, đường thẳng qua M song song BC cắt AC tại N ⇒ N là trung điểm AC.</p>` },
      { title: 'Ứng dụng đo đạc', html: `<p>Để đo khoảng cách BC bị ngăn bởi chướng ngại vật: chọn điểm A nhìn thấy cả B và C, xác định trung điểm M của AB, N của AC, đo MN rồi nhân đôi: BC = 2 · MN.</p>`,
        svg: S.geo({ w: 380, h: 240, P: { A: A, B: B, C: Cc, M: M, N: N }, seg: ['AB', 'CA', { s: 'MN', color: C.blue, width: 2.8 }], dash: ['BC'], ticks: [['AM', 1], ['MB', 1], ['AN', 2], ['NC', 2]], text: [[190, 112, 'MN = 35 m', C.blue], [190, 232, 'BC = ?', C.red]] }), caption: 'BC = 2 · MN = 70 m.' },
      { title: 'Tứ giác trung điểm', html: `<p>Với tứ giác ABCD bất kì, gọi M, N, P, Q là trung điểm AB, BC, CD, DA. MN và QP đều là đường trung bình ứng với cạnh AC trong ΔABC và ΔADC, nên MN // QP và MN = QP = {{1|2}}AC ⇒ MNPQ là hình bình hành.</p>` }
    ],
    summary: 'Đường trung bình nối trung điểm hai cạnh; song song với cạnh thứ ba và bằng nửa cạnh đó.',
    examples: [
      { title: 'Tính độ dài', problem: 'ΔABC có BC = 12 cm; M, N là trung điểm AB, AC. Tính MN.', solution: 'MN là đường trung bình nên MN = BC : 2 = 6 cm.' },
      { title: 'Chu vi tam giác trung điểm', problem: 'ΔABC có AB = 8, BC = 10, CA = 12. M, N, P là trung điểm AB, BC, CA. Tính chu vi ΔMNP.', solution: 'MN = CA : 2 = 6, NP = AB : 2 = 4, PM = BC : 2 = 5. Chu vi = 15 (bằng nửa chu vi ΔABC).' },
      { title: 'Chứng minh trung điểm', problem: 'ΔABC, M là trung điểm AB. Qua M kẻ đường thẳng song song với BC, cắt AC tại N. Biết AC = 9 cm. Tính AN.', solution: 'Đường thẳng qua trung điểm M của AB và song song BC thì đi qua trung điểm AC, nên AN = 9 : 2 = 4,5 cm.' }
    ],
    exercises: [
      { question: 'MN là đường trung bình của ΔABC (M ∈ AB, N ∈ AC) và MN = 7 cm. Tính BC.', hints: ['MN = {{1|2}}BC.', 'BC = 2 · MN.'], solution: 'BC = 14 cm.' },
      { question: 'Tam giác đều ABC cạnh 10 cm. Tính chu vi tam giác tạo bởi ba đường trung bình.', hints: ['Mỗi đường trung bình bằng nửa một cạnh.', 'Ba đường trung bình đều bằng 5 cm.'], solution: '15 cm.' },
      { question: 'Tứ giác ABCD có AC = 10 cm, BD = 8 cm. Tính chu vi tứ giác trung điểm MNPQ.', hints: ['MN = PQ = AC : 2; NP = QM = BD : 2.', '2 · (5 + 4).'], solution: '18 cm.' }
    ],
    quiz: [
      { type: 'mcq', q: 'Đường trung bình của tam giác là đoạn thẳng nối:', options: ['Đỉnh với trung điểm cạnh đối diện', 'Trung điểm hai cạnh', 'Hai đỉnh', 'Trọng tâm với một đỉnh'], answer: 1, explain: 'Định nghĩa.' },
      { type: 'short', calc: '12 / 2', q: 'ΔABC có BC = 12 cm, MN là đường trung bình ứng với BC. Tính MN (cm).', unit: 'cm', answer: '6', explain: 'MN = BC : 2.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mỗi tam giác có ba đường trung bình.', answer: true, explain: 'Mỗi cặp cạnh cho một đường trung bình.' },
      { type: 'short', calc: '2 * 35', q: 'Đo được MN = 35 m với M, N là trung điểm AB, AC. Khoảng cách BC là bao nhiêu mét?', unit: 'm', answer: '70', explain: 'BC = 2 · MN.' },
      { type: 'short', calc: '(8 + 10 + 12) / 2', q: 'ΔABC có các cạnh 8, 10, 12. Chu vi tam giác tạo bởi ba đường trung bình là bao nhiêu?', answer: '15', explain: 'Bằng nửa chu vi ΔABC.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Đường trung bình của tam giác bằng cạnh thứ ba.', answer: false, explain: 'Bằng nửa cạnh thứ ba.' },
      { type: 'mcq', q: 'M là trung điểm AB, đường thẳng qua M song song BC cắt AC tại N. Khi đó:', options: ['AN = 2NC', 'N là trung điểm AC', 'MN = BC', 'MN ⊥ BC'], answer: 1, explain: 'Tính chất đường thẳng qua trung điểm và song song cạnh thứ hai.' },
      { type: 'mcq', q: 'Tứ giác trung điểm của một tứ giác bất kì là:', options: ['Hình bình hành', 'Hình chữ nhật', 'Hình thoi', 'Hình thang cân'], answer: 0, explain: 'Hai cạnh đối song song và bằng nửa một đường chéo.' }
    ]
  });
})();
