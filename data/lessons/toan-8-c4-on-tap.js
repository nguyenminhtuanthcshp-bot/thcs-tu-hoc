/* Toán 8 – Bài tập cuối chương IV. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C, G = S.geom;
  var A = [120, 30], B = [50, 210], Cc = [340, 210], M = G.mid(A, B), N = G.mid(A, Cc), D = G.bisectFoot(A, B, Cc);
  THCS.registerLesson('toan-8/c4-on-tap', {
    objectives: [
      'Hệ thống hoá định lí Thalès (thuận, đảo, hệ quả), đường trung bình và tính chất đường phân giác của tam giác.',
      'Vận dụng tổng hợp các định lí để tính độ dài, chứng minh song song, trung điểm.',
      'Giải quyết một số bài toán đo đạc thực tế.'
    ],
    intro: 'Chương IV giúp em “đo cái không đo được” nhờ tỉ lệ. Hãy tổng kết lại trước khi chuyển sang chương thống kê.',
    steps: [
      { title: 'Sơ đồ chương IV', html: `<p>Tất cả đều bắt nguồn từ định lí Thalès:</p>`, svg: S.mindmap({ center: 'Định lí Thalès', branches: [
        { title: 'Thalès thuận', items: ['MN // BC ⇒ đoạn tỉ lệ'] }, { title: 'Thalès đảo', items: ['Đoạn tỉ lệ ⇒ MN // BC'] },
        { title: 'Đường trung bình', items: ['// cạnh thứ ba', '= nửa cạnh ấy'] }, { title: 'Phân giác', items: ['DB : DC = AB : AC'] } ] }), caption: 'Sơ đồ tư duy chương IV.' },
      { title: 'Hình tổng hợp', html: `<p>Trong cùng một tam giác có thể xuất hiện đồng thời đường trung bình MN và phân giác AD.</p>`,
        svg: S.geo({ w: 380, h: 240, P: { A: A, B: B, C: Cc, M: M, N: N, D: D }, seg: ['AB', 'BC', 'CA', { s: 'MN', color: C.blue, width: 2.5 }, { s: 'AD', color: C.orange, width: 2.5 }], ticks: [['AM', 1], ['MB', 1], ['AN', 2], ['NC', 2]], off: { D: [0, 20] } }), caption: 'MN là đường trung bình, AD là phân giác của ΔABC.' },
      { title: 'Các lỗi thường gặp', html: `<ul><li>Lập tỉ lệ thức với các đoạn không tương ứng.</li><li>Dùng hệ quả {{MN|BC}} = {{AM|MB}} (sai) thay vì {{AM|AB}}.</li><li>Nhầm tỉ số phân giác: {{DB|DC}} = {{AB|AC}} (cạnh kề với đoạn), không phải {{AC|AB}}.</li></ul>` },
      { title: 'Ứng dụng', html: `<p>Đo chiều cao (bóng nắng, cọc tiêu), đo khoảng cách qua sông, chia một đoạn thẳng thành nhiều phần bằng nhau bằng thước và ê ke (nhờ các đường song song cách đều).</p>` }
    ],
    summary: 'Thalès: song song ⇔ tỉ lệ. Đường trung bình: song song và bằng nửa. Phân giác: chia cạnh đối diện theo tỉ lệ hai cạnh kề.',
    examples: [
      { title: 'Kết hợp', problem: 'ΔABC có AB = 6, AC = 10, BC = 12, M, N là trung điểm AB, AC, phân giác AD. Tính MN và DB.', solution: 'MN = BC : 2 = 6. {{DB|6}} = {{DC|10}} = {{12|16}} ⇒ DB = 4,5.' },
      { title: 'Chứng minh song song', problem: 'ΔABC có AD là phân giác (D ∈ BC). Qua D kẻ DE // AB (E ∈ AC). Biết AB = 4, AC = 6. Tính {{AE|EC}}.', solution: 'DE // AB ⇒ {{AE|EC}} = {{BD|DC}} (Thalès trong ΔCAB). Mà {{BD|DC}} = {{AB|AC}} = {{2|3}}. Vậy {{AE|EC}} = {{2|3}}.' },
      { title: 'Thực tế', problem: 'Để đo khoảng cách BC giữa hai gốc cây bị ngăn bởi hồ nước, bạn An chọn điểm A, đánh dấu trung điểm M của AB, N của AC và đo được MN = 23 m. Tính BC.', solution: 'MN là đường trung bình của ΔABC nên BC = 2 · 23 = 46 m.' }
    ],
    exercises: [
      { question: 'ΔABC có MN // BC (M ∈ AB, N ∈ AC), AM = 2, MB = 3, MN = 4. Tính BC.', hints: ['{{MN|BC}} = {{AM|AB}}, AB = 5.', 'BC = 4 · 5 : 2.'], solution: 'BC = 10.' },
      { question: 'ΔABC vuông tại A có AB = 9, AC = 12, BC = 15. Phân giác AD. Tính DB, DC.', hints: ['{{DB|9}} = {{DC|12}} = {{15|21}}.', 'DB = 9 · {{5|7}}.'], solution: 'DB = {{45|7}} ≈ 6,43; DC = {{60|7}} ≈ 8,57.' },
      { question: 'Hình thang ABCD (AB // CD), M là trung điểm AD, qua M kẻ đường thẳng song song với AB cắt BD tại I, cắt BC tại N. Biết AB = 6, CD = 10. Tính MN.', hints: ['Trong ΔABD: MI là đường trung bình ⇒ MI = AB : 2 = 3; I là trung điểm BD.', 'Trong ΔBDC: IN là đường trung bình ⇒ IN = CD : 2 = 5.'], solution: 'MN = 3 + 5 = 8 (bằng nửa tổng hai đáy).' }
    ],
    quiz: [
      { type: 'short', calc: '4 * 5 / 2', q: 'MN // BC, AM = 2, MB = 3, MN = 4. Tính BC.', answer: '10', explain: '{{4|BC}} = {{2|5}}.' },
      { type: 'short', calc: '2 * 23', q: 'M, N là trung điểm AB, AC và MN = 23 m. BC dài bao nhiêu mét?', unit: 'm', answer: '46', explain: 'BC = 2MN.' },
      { type: 'short', calc: '6 * 12 / 16', q: 'ΔABC có AB = 6, AC = 10, BC = 12, phân giác AD. Tính DB.', answer: '4.5', answerText: '4,5', explain: '{{DB|6}} = {{12|16}}.' },
      { type: 'short', requireSimplest: true, calc: '4 / 6', q: 'AD là phân giác của ΔABC với AB = 4, AC = 6. Tính tỉ số {{DB|DC}} (dạng a/b tối giản).', answer: ['2/3'], answerText: '2/3', explain: '{{4|6}} = {{2|3}}.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Đường trung bình của tam giác song song với cạnh thứ ba.', answer: true, explain: 'Tính chất.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nếu DE // BC (D ∈ AB, E ∈ AC) thì {{DE|BC}} = {{AD|DB}}.', answer: false, explain: 'Phải là {{AD|AB}}.' },
      { type: 'mcq', q: 'Hình thang có hai đáy 6 và 10. Đoạn nối trung điểm hai cạnh bên dài:', options: ['16', '8', '4', '5'], answer: 1, explain: '(6 + 10) : 2 = 8.' },
      { type: 'mcq', q: 'Định lí nào giúp tính chiều cao cây nhờ bóng nắng?', options: ['Hệ quả của định lí Thalès', 'Tổng các góc tứ giác', 'Tính chất hình thoi', 'Hằng đẳng thức'], answer: 0, explain: 'Hai đoạn thẳng đứng song song tạo tỉ lệ.' }
    ]
  });
})();
