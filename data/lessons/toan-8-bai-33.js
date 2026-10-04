/* Toán 8 – Bài 33. Hai tam giác đồng dạng. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C, G = S.geom;
  var P = { A: [70, 40], B: [30, 180], C: [170, 180], "A'": [260, 90], "B'": [240, 160], "C'": [310, 160] };
  var A = [170, 30], B = [50, 210], Cc = [320, 210], M = G.along(A, B, 0.45), N = G.along(A, Cc, 0.45);
  THCS.registerLesson('toan-8/bai-33', {
    objectives: [
      'Mô tả được định nghĩa hai tam giác đồng dạng và tỉ số đồng dạng.',
      'Viết đúng kí hiệu đồng dạng với các đỉnh tương ứng.',
      'Giải thích được định lí về trường hợp tạo thành tam giác đồng dạng bởi một đường thẳng song song với một cạnh.',
      'Tính được độ dài cạnh, tỉ số đồng dạng từ hai tam giác đồng dạng.'
    ],
    intro: 'Tấm ảnh phóng to, mô hình thu nhỏ của một toà nhà… giữ nguyên “hình dạng” nhưng thay đổi “kích thước”. Trong hình học, hai tam giác như vậy gọi là đồng dạng.',
    steps: [
      { title: 'Định nghĩa', html: `<p>Tam giác A'B'C' gọi là <b>đồng dạng</b> với tam giác ABC nếu:</p>
        <ul><li>∠A' = ∠A, ∠B' = ∠B, ∠C' = ∠C;</li><li>{{A'B'|AB}} = {{B'C'|BC}} = {{C'A'|CA}} = k.</li></ul>
        <p>Kí hiệu ΔA'B'C' ∽ ΔABC; k gọi là <b>tỉ số đồng dạng</b>.</p>`,
        svg: S.geo({ w: 340, h: 210, P: P, seg: ['AB', 'BC', 'CA', "A'B'", "B'C'", "C'A'"], fill: [['ABC', C.blueL], ["A'B'C'", C.orangeL]], arcs: [['BAC', 1, '', C.red, 18], ["B'A'C'", 1, '', C.red, 12], ['ABC', 2, '', C.green, 18], ["A'B'C'", 2, '', C.green, 12]], off: { "B'": [-14, 16] } }), caption: 'ΔA\'B\'C\' ∽ ΔABC với tỉ số k = {{1|2}}.' },
      { title: 'Viết đúng thứ tự đỉnh', html: `<p>Trong kí hiệu ΔA'B'C' ∽ ΔABC, các đỉnh được viết <b>theo thứ tự tương ứng</b>: A' ↔ A, B' ↔ B, C' ↔ C.</p>
        <div class="box tip">Từ kí hiệu đọc ngay được các cặp góc bằng nhau và các cặp cạnh tỉ lệ.</div>` },
      { title: 'Tính chất', html: `<ul><li>Mỗi tam giác đồng dạng với chính nó (k = 1).</li><li>Nếu ΔA'B'C' ∽ ΔABC theo tỉ số k thì ΔABC ∽ ΔA'B'C' theo tỉ số {{1|k}}.</li><li>Nếu ΔA'B'C' ∽ ΔA''B''C'' và ΔA''B''C'' ∽ ΔABC thì ΔA'B'C' ∽ ΔABC.</li></ul>
        <p>Hai tam giác bằng nhau là trường hợp đặc biệt của đồng dạng với k = 1.</p>` },
      { title: 'Định lí', html: `<div class="box key">Nếu một đường thẳng cắt hai cạnh của tam giác và song song với cạnh còn lại thì nó tạo thành một tam giác mới đồng dạng với tam giác đã cho.</div>
        <p>ΔABC, MN // BC (M ∈ AB, N ∈ AC) ⇒ ΔAMN ∽ ΔABC.</p>`,
        svg: S.geo({ w: 370, h: 240, P: { A: A, B: B, C: Cc, M: M, N: N }, seg: ['AB', 'BC', 'CA', { s: 'MN', color: C.blue, width: 2.5 }], fill: [['AMN', C.blueL]], parallel: [['MN', 1], ['BC', 1]] }), caption: 'ΔAMN ∽ ΔABC.' }
    ],
    summary: 'ΔA\'B\'C\' ∽ ΔABC: góc tương ứng bằng nhau, cạnh tương ứng tỉ lệ (tỉ số k). Đường thẳng song song với một cạnh tạo ra tam giác đồng dạng.',
    examples: [
      { title: 'Tính cạnh', problem: 'ΔDEF ∽ ΔABC với AB = 4, BC = 6, CA = 5 và DE = 6. Tính tỉ số đồng dạng và EF, FD.', solution: 'k = {{DE|AB}} = {{6|4}} = {{3|2}}. EF = {{3|2}} · 6 = 9; FD = {{3|2}} · 5 = 7,5.' },
      { title: 'Đọc kí hiệu', problem: 'Cho ΔMNP ∽ ΔHIK. Viết các cặp góc bằng nhau và tỉ lệ thức giữa các cạnh.', solution: '∠M = ∠H, ∠N = ∠I, ∠P = ∠K; {{MN|HI}} = {{NP|IK}} = {{PM|KH}}.' },
      { title: 'Đường song song', problem: 'ΔABC có AB = 9, AC = 12, BC = 15. M ∈ AB với AM = 3, kẻ MN // BC (N ∈ AC). Tính MN, AN.', solution: 'ΔAMN ∽ ΔABC với k = {{3|9}} = {{1|3}}. MN = 5, AN = 4.' }
    ],
    exercises: [
      { question: 'ΔA\'B\'C\' ∽ ΔABC theo tỉ số {{2|3}}, chu vi ΔABC là 45 cm. Tính chu vi ΔA\'B\'C\'.', hints: ['Tỉ số chu vi bằng tỉ số đồng dạng.', '45 · {{2|3}}.'], solution: '30 cm.' },
      { question: 'ΔABC ∽ ΔDEF, ∠A = 50°, ∠E = 70°. Tính ∠F.', hints: ['∠D = ∠A = 50°.', '∠F = 180° − 50° − 70°.'], solution: '60°.' },
      { question: 'ΔA\'B\'C\' ∽ ΔABC theo tỉ số k = 3. ΔABC ∽ ΔA\'B\'C\' theo tỉ số nào?', hints: ['Tỉ số đảo ngược.', '{{1|k}}.'], solution: '{{1|3}}.' }
    ],
    quiz: [
      { type: 'mcq', q: 'ΔMNP ∽ ΔHIK. Khẳng định nào đúng?', options: ['∠M = ∠I', '∠N = ∠I', '∠P = ∠H', '∠N = ∠K'], answer: 1, explain: 'Theo thứ tự đỉnh: N ↔ I.' },
      { type: 'short', requireSimplest: true, calc: '6 / 4', q: 'ΔDEF ∽ ΔABC, DE = 6, AB = 4. Tỉ số đồng dạng k = ? (Dạng a/b tối giản.)', answer: ['3/2'], answerText: '3/2', explain: '{{6|4}}.' },
      { type: 'short', calc: '6 * 6 / 4', q: 'ΔDEF ∽ ΔABC, DE = 6, AB = 4, BC = 6. Tính EF.', answer: '9', explain: 'k = 1,5.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hai tam giác bằng nhau thì đồng dạng với nhau.', answer: true, explain: 'k = 1.' },
      { type: 'short', calc: '180 - 50 - 70', q: 'ΔABC ∽ ΔDEF, ∠A = 50°, ∠E = 70°. Tính ∠F (độ).', unit: 'độ', answer: '60', explain: '∠D = 50°.' },
      { type: 'short', calc: '15 * 3 / 9', q: 'ΔABC có AB = 9, BC = 15; AM = 3, MN // BC. Tính MN.', answer: '5', explain: 'k = {{1|3}}.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nếu ΔA\'B\'C\' ∽ ΔABC theo tỉ số 2 thì ΔABC ∽ ΔA\'B\'C\' cũng theo tỉ số 2.', answer: false, explain: 'Theo tỉ số {{1|2}}.' },
      { type: 'short', calc: '45 * 2 / 3', q: 'ΔA\'B\'C\' ∽ ΔABC tỉ số {{2|3}}, chu vi ΔABC = 45 cm. Chu vi ΔA\'B\'C\' (cm)?', unit: 'cm', answer: '30', explain: '45 · {{2|3}}.' }
    ]
  });
})();
