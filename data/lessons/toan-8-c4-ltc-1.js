/* Toán 8 – Luyện tập chung (sau Bài 17). Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C, G = S.geom;
  var A = [60, 200], B = [60, 40], Cc = [330, 200], H = [150, 200], K = G.along(B, Cc, 1 / 3);
  THCS.registerLesson('toan-8/c4-ltc-1', {
    objectives: [
      'Vận dụng định lí Thalès (thuận, đảo, hệ quả) để tính độ dài và chứng minh song song.',
      'Vận dụng tính chất đường trung bình của tam giác và tính chất đường phân giác.',
      'Giải quyết bài toán đo đạc thực tế bằng các định lí của chương IV.'
    ],
    intro: 'Ba bài học của chương IV đều xoay quanh “tỉ lệ”. Buổi luyện tập giúp em chọn đúng định lí cho từng tình huống.',
    steps: [
      { title: 'Chọn định lí nào?', html: `<table class="tbl"><tr><th>Dữ kiện</th><th>Định lí</th></tr>
        <tr><td>Có đường song song, cần tính đoạn</td><td>Thalès thuận / hệ quả</td></tr>
        <tr><td>Có đoạn tỉ lệ, cần chứng minh song song</td><td>Thalès đảo</td></tr>
        <tr><td>Có trung điểm hai cạnh</td><td>Đường trung bình</td></tr>
        <tr><td>Có tia phân giác</td><td>Tính chất đường phân giác</td></tr></table>` },
      { title: 'Đo chiều cao bằng bóng nắng', html: `<p>Cây AB có bóng nắng AC trên mặt đất. Cắm một cọc HK thẳng đứng sao cho đỉnh K nằm trên tia nắng BC. Vì HK và AB cùng vuông góc với mặt đất nên HK // AB; theo hệ quả Thalès trong ΔABC: {{HK|AB}} = {{CH|CA}}. Đo HK, CH, CA ta tính được chiều cao AB.</p>`,
        svg: S.geo({ w: 380, h: 230, P: { A: A, B: B, C: Cc, H: H, K: K }, seg: ['AB', 'AC', { s: 'BC', color: C.orange, dash: true }, { s: 'HK', color: C.green, width: 3 }], right: ['BAC', 'KHC'], off: { H: [0, 20], A: [0, 20] } }), caption: 'HK // AB: {{HK|AB}} = {{CH|CA}}.' },
      { title: 'Kết hợp nhiều định lí', html: `<p>Nhiều bài cần dùng liên tiếp: đường trung bình → song song → Thalès. Hãy đánh dấu các cặp song song và các trung điểm trên hình trước khi lập tỉ lệ thức.</p>` },
      { title: 'Lưu ý trình bày', html: `<ul><li>Viết rõ “trong tam giác …, có … // … (gt), theo định lí Thalès ta có …”.</li><li>Tỉ lệ thức phải lấy các đoạn <b>tương ứng</b> trên cùng một cạnh.</li></ul>` }
    ],
    summary: 'Song song → tỉ lệ (Thalès); tỉ lệ → song song (Thalès đảo); trung điểm → đường trung bình; phân giác → {{DB|DC}} = {{AB|AC}}.',
    examples: [
      { title: 'Đo chiều cao cây', problem: 'Một cọc cao 1,5 m có bóng dài 2 m. Cùng lúc đó, bóng của một cây dài 12 m. Tính chiều cao của cây.', solution: 'Tia nắng song song nên các tam giác tạo thành có cạnh tỉ lệ: {{h|1,5}} = {{12|2}} ⇒ h = 9 m.' },
      { title: 'Đường trung bình và Thalès', problem: 'ΔABC, M là trung điểm AB, N là trung điểm AC, BC = 16 cm. Trên MN lấy I là trung điểm. Tính MI.', solution: 'MN = BC : 2 = 8 cm, MI = MN : 2 = 4 cm.' },
      { title: 'Phân giác', problem: 'ΔABC có AB = 12, AC = 18, BC = 20, phân giác AD. Tính DB.', solution: '{{DB|12}} = {{DC|18}} = {{20|30}} ⇒ DB = 8.' }
    ],
    exercises: [
      { question: 'ΔABC có DE // BC (D ∈ AB, E ∈ AC), AD = 3, AB = 9, BC = 12. Tính DE.', hints: ['Hệ quả Thalès: {{DE|BC}} = {{AD|AB}}.', 'DE = 12 · {{1|3}}.'], solution: 'DE = 4.' },
      { question: 'Một cột điện có bóng dài 8 m, cùng lúc một người cao 1,6 m có bóng dài 1,2 m. Tính chiều cao cột điện (làm tròn đến hàng phần mười).', hints: ['{{h|1,6}} = {{8|1,2}}.', 'h = 1,6 · 8 : 1,2.'], solution: 'h ≈ 10,7 m.' },
      { question: 'ΔABC có AB = 5, AC = 7, BC = 6, phân giác AD. Tính DC.', hints: ['{{DC|7}} = {{6|12}}.', 'DC = 7 · {{1|2}}.'], solution: 'DC = 3,5.' }
    ],
    quiz: [
      { type: 'short', calc: '1.5 * 12 / 2', q: 'Cọc cao 1,5 m có bóng dài 2 m; bóng của cây dài 12 m. Cây cao bao nhiêu mét?', unit: 'm', answer: '9', explain: '{{h|1,5}} = {{12|2}}.' },
      { type: 'short', calc: '12 * 3 / 9', q: 'DE // BC, AD = 3, AB = 9, BC = 12. Tính DE.', answer: '4', explain: '{{DE|12}} = {{3|9}}.' },
      { type: 'mcq', q: 'Để chứng minh MN // BC khi biết {{AM|AB}} = {{AN|AC}}, ta dùng:', options: ['Thalès thuận', 'Thalès đảo', 'Tính chất phân giác', 'Pythagore'], answer: 1, explain: 'Từ tỉ lệ suy ra song song.' },
      { type: 'short', calc: '12 * 20 / 30', q: 'ΔABC có AB = 12, AC = 18, BC = 20, phân giác AD. Tính DB.', answer: '8', explain: '{{DB|12}} = {{20|30}}.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nếu M, N là trung điểm AB, AC thì MN // BC.', answer: true, explain: 'Tính chất đường trung bình.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nếu DE // BC thì {{AD|DB}} = {{DE|BC}}.', answer: false, explain: 'Hệ quả đúng là {{AD|AB}} = {{DE|BC}}.' },
      { type: 'short', calc: '7 * 6 / 12', q: 'ΔABC có AB = 5, AC = 7, BC = 6, phân giác AD. Tính DC.', answer: '3.5', answerText: '3,5', explain: '{{DC|7}} = {{6|12}}.' },
      { type: 'mcq', q: 'M, N là trung điểm AB, AC; BC = 16 cm; I là trung điểm MN. MI bằng:', options: ['8 cm', '4 cm', '16 cm', '2 cm'], answer: 1, explain: 'MN = 8, MI = 4.' }
    ]
  });
})();
