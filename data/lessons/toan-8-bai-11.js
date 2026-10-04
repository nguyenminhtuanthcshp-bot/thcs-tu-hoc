/* Toán 8 – Bài 11. Hình thang cân. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C, G = S.geom;
  var A = [110, 50], B = [250, 50], Cc = [310, 180], D = [50, 180], H = G.foot(A, D, Cc), K = G.foot(B, D, Cc);
  THCS.registerLesson('toan-8/bai-11', {
    objectives: [
      'Nhận biết được hình thang, hình thang vuông, hình thang cân.',
      'Giải thích được tính chất của hình thang cân: hai cạnh bên bằng nhau, hai đường chéo bằng nhau, hai góc kề một đáy bằng nhau.',
      'Nhận biết được dấu hiệu để một hình thang là hình thang cân.',
      'Vận dụng tính chất và dấu hiệu nhận biết để tính toán, chứng minh đơn giản.'
    ],
    intro: 'Mặt cắt của con đê, chiếc thang gấp nhìn nghiêng hay cái xô từ bên cạnh thường có dạng hình thang cân – một hình thang “cân đối” hai bên.',
    steps: [
      { title: 'Hình thang', html: `<p><b>Hình thang</b> là tứ giác có hai cạnh đối song song. Hai cạnh song song là <b>hai đáy</b> (đáy lớn, đáy nhỏ), hai cạnh còn lại là <b>hai cạnh bên</b>. Đoạn vuông góc hạ từ một đỉnh xuống đáy đối diện là <b>đường cao</b>.</p>
        <p><b>Hình thang vuông</b> là hình thang có một góc vuông.</p>
        <div class="box tip">Trong hình thang ABCD (AB // CD), hai góc kề một cạnh bên bù nhau: ∠A + ∠D = 180°, ∠B + ∠C = 180°.</div>` },
      { title: 'Hình thang cân', html: `<p><b>Hình thang cân</b> là hình thang có hai góc kề một đáy bằng nhau.</p>
        <p>Hình thang ABCD (AB // CD) là hình thang cân khi ∠C = ∠D (hoặc ∠A = ∠B).</p>`,
        svg: S.geo({ w: 360, h: 220, P: { A: A, B: B, C: Cc, D: D }, seg: ['AB', 'BC', 'CD', 'DA'], fill: [['ABCD', C.blueL]], arcs: [['ADC', 1, '', C.orange], ['BCD', 1, '', C.orange], ['DAB', 2, '', C.blue], ['ABC', 2, '', C.blue]], ticks: [['AD', 1], ['BC', 1]], parallel: [['AB', 1], ['DC', 1]] }), caption: 'Hình thang cân ABCD: AB // CD, ∠C = ∠D, ∠A = ∠B, AD = BC.' },
      { title: 'Tính chất', html: `<p>Trong hình thang cân:</p><ul><li>Hai <b>cạnh bên</b> bằng nhau: AD = BC.</li><li>Hai <b>đường chéo</b> bằng nhau: AC = BD.</li></ul>
        <p>Chứng minh AC = BD: hai tam giác ADC và BCD có AD = BC, ∠ADC = ∠BCD, cạnh DC chung nên bằng nhau (c.g.c), suy ra AC = BD.</p>`,
        svg: S.geo({ w: 360, h: 220, P: { A: A, B: B, C: Cc, D: D }, seg: ['AB', 'BC', 'CD', 'DA', { s: 'AC', color: C.red, width: 2.5 }, { s: 'BD', color: C.red, width: 2.5 }], ticks: [['AC', 2, C.red], ['BD', 2, C.red], ['AD', 1], ['BC', 1]] }), caption: 'Hai đường chéo của hình thang cân bằng nhau.' },
      { title: 'Dấu hiệu nhận biết', html: `<ul><li>Hình thang có hai góc kề một đáy bằng nhau là hình thang cân (định nghĩa).</li><li>Hình thang có <b>hai đường chéo bằng nhau</b> là hình thang cân.</li></ul>
        <div class="box warn">Hình thang có hai cạnh bên bằng nhau <b>chưa chắc</b> là hình thang cân (có thể là hình bình hành).</div>` },
      { title: 'Tính toán với đường cao', html: `<p>Kẻ các đường cao AH, BK. Khi đó DH = KC = (CD − AB) : 2. Kết hợp với định lí Pythagore (Bài 35) ta có thể tính đường cao, diện tích.</p>
        <p>Diện tích hình thang: S = {{(a + b) · h|2}} (a, b là hai đáy, h là chiều cao).</p>`,
        svg: S.geo({ w: 360, h: 220, P: { A: A, B: B, C: Cc, D: D, H: H, K: K }, seg: ['AB', 'BC', 'CD', 'DA'], dash: ['AH', 'BK'], right: ['AHD', 'BKC'], off: { H: [0, 20], K: [0, 20] } }), caption: 'DH = KC = (CD − AB) : 2.' }
    ],
    summary: 'Hình thang cân: hình thang có hai góc kề một đáy bằng nhau; có hai cạnh bên bằng nhau và hai đường chéo bằng nhau. Hình thang có hai đường chéo bằng nhau là hình thang cân.',
    examples: [
      { title: 'Tính góc', problem: 'Hình thang cân ABCD (AB // CD) có ∠D = 65°. Tính các góc còn lại.', solution: '∠C = ∠D = 65°. ∠A = 180° − 65° = 115° (hai góc kề cạnh bên AD bù nhau), ∠B = ∠A = 115°.' },
      { title: 'Tính độ dài', problem: 'Hình thang cân ABCD có đáy nhỏ AB = 4 cm, đáy lớn CD = 10 cm, đường cao AH = 4 cm. Tính DH và diện tích hình thang.', solution: 'DH = (10 − 4) : 2 = 3 cm. S = (4 + 10) · 4 : 2 = 28 cm<sup>2</sup>.' },
      { title: 'Chứng minh', problem: 'Cho hình thang cân ABCD (AB // CD), O là giao điểm hai đường chéo. Chứng minh OA = OB.', solution: 'ΔADC = ΔBCD (c.g.c) ⇒ ∠ACD = ∠BDC ⇒ ΔOCD cân tại O ⇒ OC = OD. Mà AC = BD nên OA = AC − OC = BD − OD = OB.' }
    ],
    exercises: [
      { question: 'Hình thang cân MNPQ (MN // PQ) có ∠M = 120°. Tính ∠Q và ∠P.', hints: ['∠M + ∠Q = 180° (kề cạnh bên MQ).', '∠P = ∠Q (kề đáy PQ).'], solution: '∠Q = ∠P = 60°.' },
      { question: 'Hình thang cân ABCD có AB = 6 cm, CD = 14 cm. Kẻ đường cao AH. Tính DH.', hints: ['DH = (CD − AB) : 2.', '(14 − 6) : 2.'], solution: 'DH = 4 cm.' },
      { question: 'Tứ giác ABCD có AB // CD và AC = BD. Tứ giác đó là hình gì? Vì sao?', hints: ['AB // CD nên ABCD là hình thang.', 'Hình thang có hai đường chéo bằng nhau.'], solution: 'ABCD là hình thang cân (dấu hiệu hai đường chéo bằng nhau).' }
    ],
    quiz: [
      { type: 'mcq', q: 'Hình thang là tứ giác có:', options: ['Hai cạnh kề bằng nhau', 'Hai cạnh đối song song', 'Hai đường chéo bằng nhau', 'Bốn góc bằng nhau'], answer: 1, explain: 'Theo định nghĩa.' },
      { type: 'short', calc: '180 - 65', q: 'Hình thang cân ABCD (AB // CD) có ∠D = 65°. Tính ∠A (độ).', unit: 'độ', answer: '115', explain: '∠A + ∠D = 180°.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hai đường chéo của hình thang cân bằng nhau.', answer: true, explain: 'Tính chất của hình thang cân.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hình thang có hai cạnh bên bằng nhau luôn là hình thang cân.', answer: false, explain: 'Hình bình hành cũng là hình thang có hai cạnh bên bằng nhau nhưng thường không cân.' },
      { type: 'short', calc: '(14 - 6) / 2', q: 'Hình thang cân có đáy nhỏ 6 cm, đáy lớn 14 cm. Kẻ đường cao từ một đỉnh của đáy nhỏ; đoạn DH trên đáy lớn dài bao nhiêu cm?', unit: 'cm', answer: '4', explain: '(14 − 6) : 2 = 4.' },
      { type: 'mcq', q: 'Dấu hiệu nào đủ để hình thang ABCD (AB // CD) là hình thang cân?', options: ['AD = BC', 'AC = BD', 'AB = CD', '∠A = ∠C'], answer: 1, explain: 'Hình thang có hai đường chéo bằng nhau là hình thang cân.' },
      { type: 'short', calc: '(4 + 10) * 4 / 2', q: 'Tính diện tích (cm²) hình thang có hai đáy 4 cm, 10 cm và chiều cao 4 cm.', unit: 'cm²', answer: '28', explain: '(4 + 10) · 4 : 2.' },
      { type: 'mcq', q: 'Hình thang vuông là hình thang có:', options: ['Hai cạnh bên bằng nhau', 'Một góc vuông', 'Hai đường chéo vuông góc', 'Bốn góc vuông'], answer: 1, explain: 'Theo định nghĩa.' }
    ]
  });
})();
