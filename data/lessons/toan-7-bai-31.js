/* Toán 7 – Bài 31. Quan hệ giữa góc và cạnh đối diện trong một tam giác. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, C = S.C, G = S.geom;
var A = [150, 40], B = [50, 190], Cc = [340, 190], D = G.along(A, Cc, G.dist(A, B) / G.dist(A, Cc));
THCS.registerLesson('toan-7/bai-31', {
  objectives: [
    'Nhận biết quan hệ giữa góc và cạnh đối diện trong một tam giác.',
    'So sánh các góc của tam giác khi biết độ dài các cạnh và ngược lại.',
    'Vận dụng để giải thích một số tình huống thực tế và chứng minh đơn giản.'
  ],
  intro: 'Trong một tam giác, cạnh càng dài thì “nằm đối diện” với góc càng lớn. Bài này giúp em so sánh các góc mà không cần thước đo góc!',
  steps: [
    { title: 'Góc đối diện, cạnh đối diện', html: `<p>Trong tam giác ABC: cạnh BC đối diện với góc A; cạnh CA đối diện với góc B; cạnh AB đối diện với góc C.</p>`,
      svg: S.geo({ w: 390, h: 220, P: { A: A, B: B, C: Cc }, seg: ['AB', { s: 'BC', color: C.orange, width: 3 }, 'CA'], arcs: [['BAC', 1, '', C.orange]], text: [[195, 212, 'cạnh BC đối diện góc A', C.orange, true, 13]] }),
      caption: 'Góc A và cạnh BC cùng màu cam.' },
    { title: 'Định lí 1: cạnh lớn hơn ⇒ góc lớn hơn', html: `<p>Trong một tam giác, <b>góc đối diện với cạnh lớn hơn là góc lớn hơn</b>.</p>
      <p>Ví dụ: tam giác ABC có AC &gt; AB thì góc B &gt; góc C.</p>`,
      svg: S.geo({ w: 390, h: 220, P: { A: A, B: B, C: Cc }, seg: ['AB', { s: 'AC', color: C.blue, width: 3 }, 'BC'], arcs: [['ABC', 2, '', C.blue], ['ACB', 1, '', C.green]] }),
      caption: 'AC dài hơn AB nên góc B (hai cung) lớn hơn góc C.' },
    { title: 'Vì sao?', html: `<p>Giả sử AC &gt; AB. Lấy D trên cạnh AC sao cho AD = AB.</p>
      <ul><li>Tam giác ABD cân tại A nên góc ABD = góc ADB.</li><li>Góc ADB là góc ngoài của tam giác BDC nên góc ADB &gt; góc C.</li><li>Tia BD nằm giữa BA và BC nên góc ABC &gt; góc ABD.</li></ul>
      <p>Vậy góc ABC &gt; góc ADB &gt; góc C.</p>`,
      svg: S.geo({ w: 390, h: 220, P: { A: A, B: B, C: Cc, D: D }, seg: ['AB', 'AC', 'BC', { s: 'BD', color: C.purple }], ticks: [['AB', 1], ['AD', 1]], arcs: [['ABD', 1, '', C.orange], ['ADB', 1, '', C.orange]], off: { D: [14, -2] } }),
      caption: 'AD = AB: tam giác ABD cân tại A.' },
    { title: 'Định lí 2: góc lớn hơn ⇒ cạnh lớn hơn', html: `<p>Ngược lại, trong một tam giác, <b>cạnh đối diện với góc lớn hơn là cạnh lớn hơn</b>.</p>
      <p>Hệ quả: trong tam giác tù (hoặc vuông), cạnh đối diện góc tù (góc vuông) là cạnh lớn nhất. Trong tam giác vuông, cạnh huyền là cạnh lớn nhất.</p>` },
    { title: 'Cách so sánh', html: `<ol><li>Xác định cạnh đối diện với mỗi góc (hoặc góc đối diện với mỗi cạnh).</li><li>Nếu biết số đo hai góc, tính góc thứ ba bằng tổng 180°.</li><li>Sắp xếp các góc ⇔ sắp xếp các cạnh đối diện theo cùng thứ tự.</li></ol>` }
  ],
  summary: 'Trong một tam giác: cạnh lớn hơn đối diện góc lớn hơn và ngược lại; hai cạnh bằng nhau đối diện hai góc bằng nhau. Cạnh đối diện góc tù (góc vuông) là cạnh lớn nhất.',
  examples: [
    { title: 'So sánh góc', problem: 'Tam giác ABC có AB = 5 cm, BC = 7 cm, CA = 6 cm. So sánh các góc.', solution: 'BC &gt; CA &gt; AB nên góc A &gt; góc B &gt; góc C.' },
    { title: 'So sánh cạnh', problem: 'Tam giác MNP có góc M = 70°, góc N = 50°. So sánh các cạnh.', solution: 'Góc P = 60°. Góc M &gt; góc P &gt; góc N nên NP &gt; MN &gt; MP.' },
    { title: 'Tam giác tù', problem: 'Tam giác DEF có góc E = 100°. Cạnh nào lớn nhất?', solution: 'DF (đối diện góc tù E).' }
  ],
  exercises: [
    { question: 'Tam giác ABC có góc A = 90°, góc B = 35°. Sắp xếp các cạnh theo thứ tự tăng dần.', hints: ['Góc C = 55°.', 'Góc B &lt; góc C &lt; góc A.'], solution: 'AC &lt; AB &lt; BC.' },
    { question: 'Tam giác ABC cân tại A có góc A = 50°. So sánh BC và AB.', hints: ['Góc B = góc C = 65°.', 'Góc A &lt; góc C.'], solution: 'BC &lt; AB.' },
    { question: 'Tam giác có ba cạnh 4 cm, 6 cm, 8 cm. Góc lớn nhất đối diện cạnh nào?', hints: ['Cạnh lớn nhất.', '8 cm.'], solution: 'Góc đối diện cạnh 8 cm.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Tam giác ABC có AB = 5, BC = 7, CA = 6. Góc lớn nhất là:', options: ['góc A', 'góc B', 'góc C', 'bằng nhau'], answer: 0, explain: 'Đối diện cạnh BC lớn nhất.' },
    { type: 'short', calc: '180 - 70 - 50', q: 'Tam giác MNP có góc M = 70°, góc N = 50°. Góc P bằng bao nhiêu độ?', unit: '°', answer: '60', explain: '180 − 120.' },
    { type: 'mcq', q: 'Tam giác MNP có góc M = 70°, góc N = 50°. Cạnh lớn nhất là:', options: ['MN', 'NP', 'MP', 'MN = NP'], answer: 1, explain: 'Đối diện góc M lớn nhất.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Trong tam giác vuông, cạnh huyền là cạnh lớn nhất.', answer: true, explain: 'Đối diện góc vuông – góc lớn nhất.' },
    { type: 'short', calc: '(180 - 50) / 2', q: 'Tam giác ABC cân tại A, góc A = 50°. Góc B bằng bao nhiêu độ?', unit: '°', answer: '65', explain: '(180 − 50) : 2.' },
    { type: 'mcq', q: 'Tam giác ABC cân tại A, góc A = 50°. Khẳng định đúng:', options: ['BC &gt; AB', 'BC &lt; AB', 'BC = AB', 'không so sánh được'], answer: 1, explain: 'Góc A (50°) &lt; góc C (65°).' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tam giác có góc E = 100° thì cạnh DF là cạnh lớn nhất (tam giác DEF).', answer: true, explain: 'DF đối diện góc tù.' },
    { type: 'short', calc: '180 - 90 - 35', q: 'Tam giác ABC vuông tại A có góc B = 35°. Góc C bằng bao nhiêu độ?', unit: '°', answer: '55', explain: '90 − 35.' }
  ]
});
})();
