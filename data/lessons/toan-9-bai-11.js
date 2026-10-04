/* Toán 9 – Bài 11. Tỉ số lượng giác của góc nhọn. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  var A = [50, 190], B = [290, 190], Cc = [290, 50];
  THCS.registerLesson('toan-9/bai-11', {
    objectives: [
      'Nhận biết được các giá trị sin, cos, tan, cot của góc nhọn trong tam giác vuông.',
      'Giải thích được tỉ số lượng giác của các góc 30°, 45°, 60° và quan hệ giữa tỉ số lượng giác của hai góc phụ nhau.',
      'Tính được giá trị (đúng hoặc gần đúng) tỉ số lượng giác của góc nhọn bằng máy tính cầm tay.'
    ],
    intro: 'Độ dốc của một con dốc, góc nghiêng của một chiếc thang… đều liên quan đến tỉ số giữa các cạnh của tam giác vuông. Các tỉ số đó chỉ phụ thuộc vào góc nhọn và được gọi là tỉ số lượng giác.',
    steps: [
      { title: 'Cạnh đối, cạnh kề, cạnh huyền', html: `<p>Xét tam giác ABC vuông tại B, góc nhọn α = ∠A. Đối với góc α: BC là <b>cạnh đối</b>, AB là <b>cạnh kề</b>, AC là <b>cạnh huyền</b>.</p>`,
        svg: S.geo({ w: 340, h: 220, P: { A: A, B: B, C: Cc }, seg: ['AB', { s: 'BC', color: C.red, width: 3 }, 'CA'], right: ['ABC'], arcs: [['BAC', 1, 'α', C.orange, 34]], text: [[170, 210, 'cạnh kề', C.blue], [312, 124, 'đối', C.red], [150, 104, 'cạnh huyền', C.purple]] }), caption: 'Các cạnh được gọi tên theo góc α.' },
      { title: 'Định nghĩa', html: `<div class="box key">sin α = {{đối|huyền}}; cos α = {{kề|huyền}}; tan α = {{đối|kề}}; cot α = {{kề|đối}}.</div><p>Mẹo nhớ: “sin đi học, cos không hư, tan đoàn kết, cot kết đoàn”.</p><p>Vì cạnh góc vuông nhỏ hơn cạnh huyền nên 0 &lt; sin α &lt; 1, 0 &lt; cos α &lt; 1.</p>` },
      { title: 'Góc đặc biệt', html: `<table class="tbl"><tr><th>α</th><th>30°</th><th>45°</th><th>60°</th></tr><tr><td>sin α</td><td>{{1|2}}</td><td>{{√2|2}}</td><td>{{√3|2}}</td></tr><tr><td>cos α</td><td>{{√3|2}}</td><td>{{√2|2}}</td><td>{{1|2}}</td></tr><tr><td>tan α</td><td>{{√3|3}}</td><td>1</td><td>√3</td></tr><tr><td>cot α</td><td>√3</td><td>1</td><td>{{√3|3}}</td></tr></table>` },
      { title: 'Hai góc phụ nhau', html: `<div class="box key">Nếu α + β = 90° thì sin α = cos β, cos α = sin β, tan α = cot β, cot α = tan β.</div><p>Ví dụ: sin 25° = cos 65°; tan 40° = cot 50°.</p>` },
      { title: 'Dùng máy tính', html: `<p>Chuyển máy về chế độ độ (D). Nhấn sin 35 = được ≈ 0,5736. Ngược lại, biết sin α = 0,6 thì dùng SHIFT sin 0,6 = được α ≈ 36°52'.</p>` }
    ],
    summary: 'sin = đối/huyền, cos = kề/huyền, tan = đối/kề, cot = kề/đối. Hai góc phụ nhau: sin góc này bằng cos góc kia, tan góc này bằng cot góc kia.',
    examples: [
      { title: 'Tính tỉ số lượng giác', problem: 'Tam giác ABC vuông tại B có AB = 8, BC = 6, AC = 10. Tính các tỉ số lượng giác của góc A.', solution: 'sin A = {{6|10}} = {{3|5}}; cos A = {{8|10}} = {{4|5}}; tan A = {{6|8}} = {{3|4}}; cot A = {{4|3}}.' },
      { title: 'Góc phụ nhau', problem: 'Viết sin 72° và cot 68° thành tỉ số lượng giác của góc nhỏ hơn 45°.', solution: 'sin 72° = cos 18°; cot 68° = tan 22°.' },
      { title: 'Dùng góc đặc biệt', problem: 'Tính A = sin 30° + cos 60° − tan 45°.', solution: '{{1|2}} + {{1|2}} − 1 = 0.' }
    ],
    exercises: [
      { question: 'Tam giác MNP vuông tại M có MN = 5, MP = 12. Tính NP và sin N.', hints: ['NP = √(25 + 144) = 13.', 'sin N = {{MP|NP}}.'], solution: 'NP = 13; sin N = {{12|13}}.' },
      { question: 'Dùng máy tính, tính cos 50° (làm tròn đến hàng phần nghìn).', hints: ['Chế độ độ (D).', 'cos 50 =.'], solution: '≈ 0,643.' },
      { question: 'Tính sin<sup>2</sup> 30° + cos<sup>2</sup> 30°.', hints: ['sin 30° = {{1|2}}, cos 30° = {{√3|2}}.', '{{1|4}} + {{3|4}}.'], solution: '1.' }
    ],
    quiz: [
      { type: 'mcq', q: 'Trong tam giác vuông, sin của góc nhọn α bằng:', options: ['{{kề|huyền}}', '{{đối|huyền}}', '{{đối|kề}}', '{{kề|đối}}'], answer: 1, explain: 'sin = đối/huyền.' },
      { type: 'short', requireSimplest: true, calc: '6 / 10', q: 'Tam giác ABC vuông tại B có AB = 8, BC = 6, AC = 10. Tính sin A. (Dạng a/b tối giản.)', answer: ['3/5'], answerText: '3/5', explain: '{{6|10}}.' },
      { type: 'short', calc: 'round(Math.sin(30 * Math.PI / 180) + Math.cos(60 * Math.PI / 180) - Math.tan(45 * Math.PI / 180), 9)', q: 'Tính sin 30° + cos 60° − tan 45°.', answer: '0', explain: '{{1|2}} + {{1|2}} − 1.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: sin 25° = cos 65°.', answer: true, explain: '25° + 65° = 90°.' },
      { type: 'short', calc: 'round(Math.cos(50 * Math.PI / 180), 3)', q: 'Tính cos 50° (làm tròn đến hàng phần nghìn).', answer: '0.643', explain: 'Máy tính: 0,6427…' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Có góc nhọn α với sin α = 1,2.', answer: false, explain: '0 &lt; sin α &lt; 1.' },
      { type: 'short', requireSimplest: true, calc: '12 / 13', q: 'Tam giác MNP vuông tại M, MN = 5, MP = 12. Tính sin N. (Dạng a/b tối giản.)', answer: ['12/13'], answerText: '12/13', explain: 'NP = 13.' },
      { type: 'mcq', q: 'tan 60° bằng:', options: ['{{√3|3}}', '1', '√3', '{{1|2}}'], answer: 2, explain: 'Bảng góc đặc biệt.' }
    ]
  });
})();
