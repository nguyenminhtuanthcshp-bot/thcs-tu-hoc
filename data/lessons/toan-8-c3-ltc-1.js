/* Toán 8 – Luyện tập chung (sau Bài 11). Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-8/c3-ltc-1', {
    objectives: [
      'Vận dụng định lí tổng các góc của tứ giác để tính góc.',
      'Vận dụng định nghĩa, tính chất của hình thang, hình thang cân để tính độ dài, số đo góc.',
      'Chứng minh một tứ giác là hình thang, hình thang cân.'
    ],
    intro: 'Buổi luyện tập kết hợp tứ giác nói chung và hình thang cân – hai bài học đầu tiên của chương III.',
    steps: [
      { title: 'Ôn tập nhanh', html: `<ul><li>Tổng bốn góc của tứ giác: 360°.</li><li>Hình thang: hai cạnh đối song song; hai góc kề một cạnh bên bù nhau.</li><li>Hình thang cân: hai góc kề một đáy bằng nhau ⇒ hai cạnh bên bằng nhau, hai đường chéo bằng nhau.</li></ul>` },
      { title: 'Chứng minh tứ giác là hình thang', html: `<p>Chỉ ra hai cạnh đối song song, thường nhờ: hai góc so le trong bằng nhau, hai góc đồng vị bằng nhau, hoặc hai góc trong cùng phía bù nhau.</p>` },
      { title: 'Chứng minh hình thang là hình thang cân', html: `<p>Hai cách thường dùng: chứng minh hai góc kề một đáy bằng nhau, hoặc chứng minh hai đường chéo bằng nhau.</p>
        <div class="box tip">Nếu tam giác ABC cân tại A, một đường thẳng song song với BC cắt AB, AC tại M, N thì BMNC là hình thang cân.</div>`,
        svg: S.geo({ w: 340, h: 230, P: { A: [170, 30], B: [60, 200], C: [280, 200], M: [126, 98], N: [214, 98] }, seg: ['AB', 'AC', 'BC', { s: 'MN', color: C.blue, width: 2.5 }], fill: [['MNCB', C.blueL]], ticks: [['AB', 1], ['AC', 1]], arcs: [['MBC', 1, '', C.orange], ['NCB', 1, '', C.orange]] }), caption: 'MN // BC trong tam giác cân tạo thành hình thang cân BMNC.' },
      { title: 'Bài toán tính toán', html: `<p>Với hình thang cân, hãy kẻ hai đường cao từ hai đỉnh của đáy nhỏ để tạo ra một hình chữ nhật ở giữa và hai tam giác vuông bằng nhau ở hai bên.</p>` }
    ],
    summary: 'Tổng góc tứ giác 360°; hình thang ⇔ có cặp cạnh đối song song; hình thang cân ⇔ hai góc kề một đáy bằng nhau ⇔ hai đường chéo bằng nhau.',
    examples: [
      { title: 'Hình thang cân trong tam giác cân', problem: 'Tam giác ABC cân tại A, M ∈ AB, N ∈ AC sao cho AM = AN. Chứng minh BMNC là hình thang cân.', solution: 'ΔAMN cân tại A nên ∠AMN = (180° − ∠A) : 2 = ∠ABC ⇒ MN // BC (hai góc đồng vị bằng nhau). BMNC là hình thang có ∠B = ∠C nên là hình thang cân.' },
      { title: 'Tính góc', problem: 'Tứ giác ABCD có AB // CD, ∠A = 3∠D. Tính ∠A và ∠D.', solution: '∠A + ∠D = 180° ⇒ 4∠D = 180° ⇒ ∠D = 45°, ∠A = 135°.' },
      { title: 'Tính chu vi', problem: 'Hình thang cân có hai đáy 5 cm và 11 cm, cạnh bên 5 cm. Tính chu vi.', solution: 'Chu vi = 5 + 11 + 5 + 5 = 26 cm.' }
    ],
    exercises: [
      { question: 'Tứ giác ABCD có ∠A = 105°, ∠B = 75°, ∠C = 110°. Chứng minh AD // BC và tính ∠D.', hints: ['∠A + ∠B = 180° là hai góc trong cùng phía của AD và BC với cát tuyến AB.', '∠D = 360° − 105° − 75° − 110°.'], solution: 'AD // BC; ∠D = 70°.' },
      { question: 'Hình thang cân ABCD (AB // CD) có ∠A = 2∠D. Tính các góc.', hints: ['∠A + ∠D = 180°.', '3∠D = 180°.'], solution: '∠D = ∠C = 60°, ∠A = ∠B = 120°.' },
      { question: 'Hình thang cân có đáy nhỏ 3 cm, đáy lớn 9 cm, chiều cao 4 cm. Tính diện tích.', hints: ['S = (a + b) · h : 2.', '(3 + 9) · 4 : 2.'], solution: '24 cm<sup>2</sup>.' }
    ],
    quiz: [
      { type: 'short', calc: '180 / 4', q: 'Hình thang ABCD (AB // CD) có ∠A = 3∠D. Tính ∠D (độ).', unit: 'độ', answer: '45', explain: '4∠D = 180°.' },
      { type: 'mcq', q: 'Tứ giác ABCD có ∠A + ∠B = 180°. Khẳng định nào đúng?', options: ['AB // CD', 'AD // BC', 'AC = BD', 'AB = CD'], answer: 1, explain: '∠A, ∠B là hai góc trong cùng phía tạo bởi AD, BC và cát tuyến AB.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hình thang có hai góc kề một đáy bằng nhau là hình thang cân.', answer: true, explain: 'Định nghĩa.' },
      { type: 'short', calc: '5 + 11 + 5 + 5', q: 'Hình thang cân có hai đáy 5 cm, 11 cm và cạnh bên 5 cm. Chu vi bằng bao nhiêu cm?', unit: 'cm', answer: '26', explain: '5 + 11 + 5 + 5.' },
      { type: 'mcq', q: 'Hình thang cân ABCD (AB // CD) có ∠C = 70°. Khi đó ∠B bằng:', options: ['70°', '110°', '20°', '140°'], answer: 1, explain: '∠B + ∠C = 180°.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hình thang cân có hai cạnh bên song song với nhau.', answer: false, explain: 'Nếu hai cạnh bên cũng song song thì đó là hình bình hành; hình thang cân (không phải hình chữ nhật) có hai cạnh bên không song song.' },
      { type: 'short', calc: '(3 + 9) * 4 / 2', q: 'Hình thang có hai đáy 3 cm, 9 cm, chiều cao 4 cm. Diện tích bằng bao nhiêu cm²?', unit: 'cm²', answer: '24', explain: '(3 + 9) · 4 : 2.' },
      { type: 'mcq', q: 'Tam giác ABC cân tại A; MN // BC (M ∈ AB, N ∈ AC). Tứ giác BMNC là:', options: ['Hình thang vuông', 'Hình thang cân', 'Hình bình hành', 'Hình chữ nhật'], answer: 1, explain: 'Hình thang có ∠B = ∠C.' }
    ]
  });
})();
