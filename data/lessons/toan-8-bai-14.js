/* Toán 8 – Bài 14. Hình thoi và hình vuông. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  var A = [190, 30], B = [320, 120], Cc = [190, 210], D = [60, 120], O = [190, 120];
  var P = [90, 40], Q = [250, 40], R = [250, 200], T = [90, 200], I = [170, 120];
  THCS.registerLesson('toan-8/bai-14', {
    objectives: [
      'Nhận biết được hình thoi, hình vuông.',
      'Giải thích được tính chất về đường chéo của hình thoi, hình vuông.',
      'Nhận biết được các dấu hiệu để một tứ giác là hình thoi, hình vuông.',
      'Vận dụng tính chất và dấu hiệu nhận biết để giải bài toán chứng minh, tính toán.'
    ],
    intro: 'Hoa văn trên gạch bông, mắt cáo hàng rào có dạng hình thoi; ô bàn cờ là hình vuông. Hình vuông là tứ giác “đặc biệt nhất” – vừa là hình chữ nhật, vừa là hình thoi.',
    steps: [
      { title: 'Hình thoi', html: `<p><b>Hình thoi</b> là tứ giác có bốn cạnh bằng nhau. Hình thoi là một hình bình hành đặc biệt.</p>
        <div class="box key">Trong hình thoi: hai đường chéo <b>vuông góc</b> với nhau và là các <b>đường phân giác</b> của các góc của hình thoi.</div>`,
        svg: S.geo({ w: 380, h: 240, P: { A: A, B: B, C: Cc, D: D, O: O }, seg: ['AB', 'BC', 'CD', 'DA', { s: 'AC', color: C.red, dash: true }, { s: 'BD', color: C.blue, dash: true }], fill: [['ABCD', C.blueL]], ticks: [['AB', 1], ['BC', 1], ['CD', 1], ['DA', 1]], right: ['AOB'], arcs: [['BAO', 1, '', C.orange, 26], ['OAD', 1, '', C.orange, 30]], off: { O: [12, 18] } }), caption: 'Hình thoi ABCD: AC ⊥ BD, AC là phân giác của góc A.' },
      { title: 'Dấu hiệu nhận biết hình thoi', html: `<ol><li>Tứ giác có bốn cạnh bằng nhau.</li><li>Hình bình hành có hai cạnh kề bằng nhau.</li><li>Hình bình hành có hai đường chéo vuông góc.</li><li>Hình bình hành có một đường chéo là đường phân giác của một góc.</li></ol>` },
      { title: 'Hình vuông', html: `<p><b>Hình vuông</b> là tứ giác có bốn góc vuông và bốn cạnh bằng nhau.</p>
        <div class="box key">Hai đường chéo của hình vuông: bằng nhau, vuông góc với nhau, cắt nhau tại trung điểm mỗi đường và là phân giác các góc.</div>`,
        svg: S.geo({ w: 340, h: 240, P: { A: P, B: Q, C: R, D: T }, seg: ['AB', 'BC', 'CD', 'DA', { s: 'AC', color: C.red }, { s: 'BD', color: C.red }], fill: [['ABCD', C.greenL]], right: ['DAB', 'ABC', 'BCD', 'CDA'], ticks: [['AB', 1], ['BC', 1], ['CD', 1], ['DA', 1]] }), caption: 'Hình vuông ABCD.' },
      { title: 'Dấu hiệu nhận biết hình vuông', html: `<ul><li>Hình chữ nhật có hai cạnh kề bằng nhau, hoặc có hai đường chéo vuông góc, hoặc có một đường chéo là phân giác của một góc.</li><li>Hình thoi có một góc vuông, hoặc có hai đường chéo bằng nhau.</li></ul>
        <div class="box tip">Nhớ: hình vuông = hình chữ nhật + hình thoi.</div>` },
      { title: 'Diện tích hình thoi', html: `<p>Vì hai đường chéo vuông góc nên diện tích hình thoi bằng <b>nửa tích hai đường chéo</b>: S = {{d<sub>1</sub> · d<sub>2</sub>|2}}.</p><p>Ví dụ: hai đường chéo 6 cm và 8 cm ⇒ S = 24 cm<sup>2</sup>.</p>` }
    ],
    summary: 'Hình thoi: 4 cạnh bằng nhau; đường chéo vuông góc và là phân giác. Hình vuông: 4 góc vuông, 4 cạnh bằng nhau; có mọi tính chất của hình chữ nhật và hình thoi.',
    examples: [
      { title: 'Tính góc hình thoi', problem: 'Hình thoi ABCD có ∠A = 70°. Tính ∠BAC và ∠ABD.', solution: 'AC là phân giác ∠A: ∠BAC = 35°. ∠B = 180° − 70° = 110°, BD là phân giác ∠B: ∠ABD = 55°.' },
      { title: 'Tính cạnh hình thoi', problem: 'Hình thoi có hai đường chéo 6 cm và 8 cm. Tính cạnh và diện tích.', solution: 'Nửa hai đường chéo là 3 cm và 4 cm, vuông góc nhau. Theo Pythagore (Bài 35), cạnh = √(9 + 16) = 5 cm. Diện tích = 6 · 8 : 2 = 24 cm<sup>2</sup>.' },
      { title: 'Nhận biết hình vuông', problem: 'Tam giác ABC vuông cân tại A, M là trung điểm BC; MD ⊥ AB, ME ⊥ AC. Chứng minh ADME là hình vuông.', solution: 'ADME có ba góc vuông nên là hình chữ nhật. AM là trung tuyến đồng thời là phân giác góc A (tam giác cân) nên đường chéo AM là phân giác ∠DAE. Hình chữ nhật có đường chéo là phân giác một góc là hình vuông.' }
    ],
    exercises: [
      { question: 'Hình thoi có chu vi 20 cm. Tính độ dài cạnh.', hints: ['Bốn cạnh bằng nhau.', '20 : 4.'], solution: '5 cm.' },
      { question: 'Hình vuông có đường chéo dài 6 cm. Tính diện tích (gợi ý: hình vuông cũng là hình thoi).', hints: ['Hai đường chéo bằng nhau và vuông góc.', 'S = d · d : 2.'], solution: '18 cm<sup>2</sup>.' },
      { question: 'Hình bình hành ABCD có AC ⊥ BD và AC = BD. Tứ giác đó là hình gì?', hints: ['Hình bình hành có đường chéo vuông góc là hình thoi.', 'Hình thoi có hai đường chéo bằng nhau.'], solution: 'Hình vuông.' }
    ],
    quiz: [
      { type: 'mcq', q: 'Hình thoi là tứ giác có:', options: ['Bốn góc bằng nhau', 'Bốn cạnh bằng nhau', 'Hai đường chéo bằng nhau', 'Một góc vuông'], answer: 1, explain: 'Định nghĩa.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hai đường chéo của hình thoi vuông góc với nhau.', answer: true, explain: 'Tính chất hình thoi.' },
      { type: 'short', calc: '70 / 2', q: 'Hình thoi ABCD có ∠A = 70°. Tính ∠BAC (độ).', unit: 'độ', answer: '35', explain: 'AC là phân giác ∠A.' },
      { type: 'short', calc: '6 * 8 / 2', q: 'Hình thoi có hai đường chéo 6 cm và 8 cm. Diện tích bằng bao nhiêu cm²?', unit: 'cm²', answer: '24', explain: '6 · 8 : 2.' },
      { type: 'mcq', q: 'Hình chữ nhật trở thành hình vuông khi có thêm điều kiện:', options: ['Hai đường chéo bằng nhau', 'Hai cạnh kề bằng nhau', 'Hai cạnh đối song song', 'Một góc vuông'], answer: 1, explain: 'Dấu hiệu nhận biết.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hình thoi có hai đường chéo bằng nhau là hình vuông.', answer: true, explain: 'Dấu hiệu nhận biết.' },
      { type: 'short', calc: '6 * 6 / 2', q: 'Hình vuông có đường chéo 6 cm. Diện tích bằng bao nhiêu cm²?', unit: 'cm²', answer: '18', explain: '6 · 6 : 2.' },
      { type: 'mcq', q: 'Tứ giác nào có hai đường chéo bằng nhau, vuông góc và cắt nhau tại trung điểm mỗi đường?', options: ['Hình thoi', 'Hình chữ nhật', 'Hình vuông', 'Hình thang cân'], answer: 2, explain: 'Chỉ hình vuông có đủ ba tính chất.' }
    ]
  });
})();
