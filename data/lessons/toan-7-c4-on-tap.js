/* Toán 7 – Bài tập cuối chương IV. Tam giác bằng nhau. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, C = S.C;
THCS.registerLesson('toan-7/c4-on-tap', {
  objectives: [
    'Hệ thống kiến thức chương IV: tổng ba góc, hai tam giác bằng nhau, các trường hợp bằng nhau, tam giác cân, đường trung trực.',
    'Giải bài tập tổng hợp: tính góc, chứng minh đoạn thẳng/góc bằng nhau, song song, vuông góc.',
    'Rèn kĩ năng vẽ hình, ghi GT – KL và trình bày chứng minh.'
  ],
  intro: 'Ôn tập chương IV. Hãy bắt đầu mỗi bài bằng một hình vẽ to, rõ, đánh dấu các yếu tố bằng nhau bằng vạch và cung – nửa lời giải nằm sẵn trong hình.',
  steps: [
    { title: 'Tổng kết các trường hợp bằng nhau', html: `<table class="tbl"><tr><th>Tam giác thường</th><th>Tam giác vuông</th></tr><tr><td>c.c.c</td><td>Cạnh huyền – cạnh góc vuông</td></tr><tr><td>c.g.c</td><td>Hai cạnh góc vuông</td></tr><tr><td>g.c.g</td><td>Cạnh góc vuông – góc nhọn kề; cạnh huyền – góc nhọn</td></tr></table>` },
    { title: 'Tam giác cân, đều, trung trực', html: `<ul><li>Cân: 2 cạnh bằng nhau ⇔ 2 góc đáy bằng nhau.</li><li>Đều: 3 cạnh bằng nhau ⇔ 3 góc 60°.</li><li>Trung trực của AB: vuông góc tại trung điểm; điểm trên đó cách đều A, B.</li></ul>` },
    { title: 'Bài toán mẫu có hình', html: `<p>ΔABC cân tại A, M là trung điểm BC. Trên tia đối của MA lấy D sao cho MD = MA.</p>`,
      svg: S.geo({ w: 340, h: 280, P: { A: [170, 20], B: [70, 140], C: [270, 140], M: [170, 140], D: [170, 260] }, seg: ['AB', 'AC', 'BC', 'AD', { s: 'BD', color: C.blue }, { s: 'CD', color: C.blue }], ticks: [['AB', 1], ['AC', 1], ['BM', 2], ['MC', 2], ['AM', 3], ['MD', 3]], right: ['AMC'], off: { A: [0, -10], M: [14, 20], D: [0, 20] } }),
      caption: 'Có thể chứng minh: AM ⊥ BC, ΔMAB = ΔMDC, AB // CD, tứ giác ABDC có bốn cạnh bằng nhau.' },
    { title: 'Kế hoạch giải', html: `<ol><li>ΔABM = ΔACM (c.c.c) ⇒ ∠AMB = ∠AMC = 90°.</li><li>ΔMAB = ΔMDC (c.g.c) ⇒ AB = DC, ∠BAM = ∠CDM ⇒ AB // CD.</li><li>BM là trung trực của AD (BM ⊥ AD tại trung điểm M) ⇒ BA = BD; tương tự CA = CD.</li></ol>` }
  ],
  summary: 'Chương IV: tổng ba góc 180°, góc ngoài; ΔABC = ΔDEF theo c.c.c, c.g.c, g.c.g và các trường hợp của tam giác vuông; tam giác cân, đều; đường trung trực và tính chất cách đều.',
  examples: [
    { title: 'Tính góc tổng hợp', problem: 'ΔABC cân tại A có góc ngoài tại A bằng 100°. Tính ∠B.', solution: 'Góc ngoài tại A = ∠B + ∠C = 2∠B = 100° ⇒ ∠B = 50°.' },
    { title: 'Chứng minh vuông góc', problem: 'Trong bài toán mẫu, chứng minh AM ⊥ BC.', solution: 'ΔABM = ΔACM (AB = AC, MB = MC, AM chung) ⇒ ∠AMB = ∠AMC, mà hai góc kề bù ⇒ mỗi góc 90°.' },
    { title: 'Độ dài', problem: 'Trong bài toán mẫu, AB = 5 cm. Tính BD, CD và chu vi tứ giác ABDC.', solution: 'BD = BA = 5, CD = CA = 5 (trung trực). Chu vi = 4 · 5 = 20 (cm).' }
  ],
  exercises: [
    { question: 'ΔABC vuông tại A có ∠B = 2∠C. Tính các góc.', hints: ['∠B + ∠C = 90°.', '3∠C = 90°.'], solution: '∠C = 30°, ∠B = 60°.' },
    { question: 'Cho ∠xOy, lấy A ∈ Ox, B ∈ Oy sao cho OA = OB. Đường trung trực của AB cắt Oz (phân giác) tại I. Chứng minh I cách đều A và B.', hints: ['I nằm trên trung trực của AB.', 'Tính chất trung trực.'], solution: 'I thuộc đường trung trực của AB ⇒ IA = IB.' },
    { question: 'ΔABC có AB = AC = BC = 6 cm. Tính mỗi góc và chu vi.', hints: ['Tam giác đều.', 'Chu vi = 3 · 6.'], solution: 'Mỗi góc 60°; chu vi 18 cm.' }
  ],
  quiz: [
    { type: 'short', calc: '100 / 2', q: 'ΔABC cân tại A, góc ngoài tại A bằng 100°. Tính ∠B (độ).', unit: 'độ', answer: '50', explain: '2∠B = 100°.' },
    { type: 'mcq', q: 'Trường hợp nào chỉ dùng cho tam giác vuông?', options: ['c.c.c', 'c.g.c', 'cạnh huyền – cạnh góc vuông', 'g.c.g'], answer: 2, explain: 'Cạnh huyền – cạnh góc vuông là trường hợp riêng của tam giác vuông.' },
    { type: 'short', calc: '4 * 5', q: 'Bài toán mẫu: AB = 5 cm. Chu vi tứ giác ABDC là bao nhiêu cm?', unit: 'cm', answer: '20', explain: 'Bốn cạnh đều bằng 5 cm.' },
    { type: 'short', calc: '90 / 3 * 2', q: 'ΔABC vuông tại A, ∠B = 2∠C. Tính ∠B (độ).', unit: 'độ', answer: '60', explain: '∠C = 30°, ∠B = 60°.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nếu ΔABC = ΔDEF và AB = 4 cm thì DE = 4 cm.', answer: true, explain: 'AB ↔ DE.' },
    { type: 'short', calc: '3 * 6', q: 'Tam giác đều có cạnh 6 cm. Chu vi bằng bao nhiêu cm?', unit: 'cm', answer: '18', explain: '3 · 6 = 18.' },
    { type: 'mcq', q: 'Điểm cách đều hai mút của đoạn thẳng AB thì:', options: ['là trung điểm AB', 'nằm trên đường trung trực của AB', 'nằm trên AB', 'nằm ngoài AB'], answer: 1, explain: 'Tính chất đảo của đường trung trực.' },
    { type: 'short', calc: '180 - 55 - 55', q: 'ΔABC cân tại A, ∠C = 55°. Tính ∠A (độ).', unit: 'độ', answer: '70', explain: '180° − 2 · 55° = 70°.' }
  ]
});
})();
