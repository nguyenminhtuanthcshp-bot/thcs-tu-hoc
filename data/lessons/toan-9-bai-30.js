/* Toán 9 – Bài 30. Đa giác đều. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-9/bai-30', {
    objectives: [
      'Nhận biết đa giác đều và các yếu tố: tâm, bán kính đường tròn ngoại tiếp, nội tiếp.',
      'Tính được số đo mỗi góc của đa giác đều n cạnh: (n − 2) · 180° : n.',
      'Nhận biết các phép quay giữ nguyên hình đa giác đều.',
      'Nhận biết hình phẳng có dạng đa giác đều trong thực tiễn (tổ ong, gạch lát, bông tuyết…).'
    ],
    intro: 'Tổ ong có dạng lục giác đều, viên gạch lát nền có dạng hình vuông, biển báo “dừng lại” có dạng bát giác đều… Đa giác đều xuất hiện khắp nơi vì chúng cân đối và đẹp mắt.',
    steps: [
      { title: 'Đa giác đều', html: `<p><b>Đa giác đều</b> là đa giác lồi có tất cả các cạnh bằng nhau và tất cả các góc bằng nhau.</p><p>Tam giác đều, hình vuông, ngũ giác đều, lục giác đều… là các đa giác đều. Hình thoi (không vuông) có các cạnh bằng nhau nhưng không phải đa giác đều.</p>`,
        svg: [S.regPoly({ n: 3, R: 70, outer: false, O: false, w: 180, h: 170 }), S.regPoly({ n: 5, R: 70, outer: false, O: false, w: 190, h: 180 }), S.regPoly({ n: 6, R: 70, outer: false, O: false, rot: 0, w: 200, h: 170 })], caption: 'Tam giác đều, ngũ giác đều, lục giác đều.' },
      { title: 'Góc của đa giác đều', html: `<p>Tổng các góc của đa giác n cạnh là (n − 2) · 180°, nên mỗi góc của đa giác đều n cạnh bằng</p><p style="text-align:center"><b>{{(n − 2) · 180°|n}}</b>.</p><table class="tbl"><tr><th>n</th><td>3</td><td>4</td><td>5</td><td>6</td><td>8</td></tr><tr><th>Mỗi góc</th><td>60°</td><td>90°</td><td>108°</td><td>120°</td><td>135°</td></tr></table>` },
      { title: 'Đường tròn ngoại tiếp, nội tiếp', html: `<p>Mỗi đa giác đều có một đường tròn ngoại tiếp và một đường tròn nội tiếp, hai đường tròn có <b>cùng tâm O</b> (tâm của đa giác đều).</p><p>Lục giác đều cạnh a: R = a; r = {{a√3|2}}. Hình vuông cạnh a: R = {{a√2|2}}; r = {{a|2}}.</p>`,
        svg: S.regPoly({ n: 6, R: 90, rot: 0, inner: true, radii: true, apothem: true, off: { O: [-20, 12] } }), caption: 'Lục giác đều: R = OA = AB; r = OH (H là trung điểm AB).' },
      { title: 'Phép quay giữ nguyên đa giác đều', html: `<p>Phép quay tâm O góc α biến mỗi điểm M thành M' sao cho OM' = OM và góc quay từ OM đến OM' bằng α (theo chiều đã chọn).</p><p>Các phép quay tâm O với góc {{360°|n}}, 2 · {{360°|n}}, …, n · {{360°|n}} = 360° giữ nguyên hình đa giác đều n cạnh. Lục giác đều: 60°, 120°, 180°, 240°, 300°, 360°.</p>`,
        svg: S.regPoly({ n: 6, R: 90, rot: 90, radii: true, fill: '#fef3c7', arcs: [['A-O-B', 1, '60°', C.red, 26]], off: { O: [-18, 5] } }), caption: 'Phép quay 60° quanh O biến A thành B, B thành C, … nên giữ nguyên lục giác đều.' },
      { title: 'Đa giác đều trong thực tiễn', html: `<ul><li>Tổ ong, đai ốc, bút chì: lục giác đều.</li><li>Gạch lát: tam giác đều, hình vuông, lục giác đều là ba loại đa giác đều lát kín được mặt phẳng.</li><li>Biển báo “STOP”: bát giác đều.</li></ul>` }
    ],
    summary: 'Đa giác đều: lồi, các cạnh bằng nhau, các góc bằng nhau; mỗi góc (n − 2)·180°/n. Có đường tròn ngoại tiếp và nội tiếp cùng tâm. Các phép quay tâm O góc k·360°/n giữ nguyên đa giác đều.',
    examples: [
      { title: 'Tính góc', problem: 'Tính mỗi góc của thập giác đều (10 cạnh).', solution: '{{8 · 180°|10}} = 144°.' },
      { title: 'Tìm số cạnh', problem: 'Đa giác đều có mỗi góc 150°. Đa giác có bao nhiêu cạnh?', solution: '(n − 2) · 180 = 150n ⇒ 30n = 360 ⇒ n = 12.' },
      { title: 'Lục giác đều', problem: 'Một đai ốc có mặt hình lục giác đều cạnh 1,2 cm. Tính bán kính đường tròn ngoại tiếp và diện tích mặt đó (làm tròn đến hàng phần trăm).', solution: 'R = 1,2 cm. Lục giác gồm 6 tam giác đều cạnh 1,2: S = 6 · {{1,2² · √3|4}} ≈ 3,74 cm².' }
    ],
    exercises: [
      { question: 'Tính mỗi góc của bát giác đều.', hints: ['n = 8.', '{{6 · 180°|8}}.'], solution: '135°.' },
      { question: 'Có những phép quay tâm O nào (góc từ 0° đến 360°) giữ nguyên hình vuông ABCD?', hints: ['{{360°|4}} = 90°.', 'Các bội của 90°.'], solution: '90°, 180°, 270°, 360°.' },
      { question: 'Hình vuông nội tiếp đường tròn bán kính 5 cm. Tính cạnh hình vuông (làm tròn đến hàng phần trăm).', hints: ['Đường chéo = 2R = 10.', 'Cạnh = {{10|√2}}.'], solution: '5√2 ≈ 7,07 cm.' }
    ],
    quiz: [
      { type: 'short', calc: '(10 - 2) * 180 / 10', q: 'Mỗi góc của thập giác đều bằng bao nhiêu độ?', unit: '°', answer: '144', explain: '8 · 180/10.' },
      { type: 'short', calc: '360 / (180 - 150)', q: 'Đa giác đều có mỗi góc 150°. Số cạnh?', unit: 'cạnh', answer: '12', explain: '30n = 360.' },
      { type: 'short', calc: 'round(6 * 1.2 ** 2 * Math.sqrt(3) / 4, 2)', q: 'Lục giác đều cạnh 1,2 cm. Diện tích (cm², làm tròn đến hàng phần trăm)?', unit: 'cm²', answer: '3.74', explain: '6 tam giác đều.' },
      { type: 'short', calc: '360 / 5', q: 'Phép quay tâm O góc nhỏ nhất (lớn hơn 0°) giữ nguyên ngũ giác đều là bao nhiêu độ?', unit: '°', answer: '72', explain: '360°/5.' },
      { type: 'short', calc: 'round(2 * 5 / Math.sqrt(2), 2)', q: 'Hình vuông nội tiếp đường tròn bán kính 5 cm. Cạnh (cm, làm tròn đến hàng phần trăm)?', unit: 'cm', answer: '7.07', explain: '5√2.' },
      { type: 'mcq', q: 'Mỗi góc của ngũ giác đều bằng:', options: ['72°', '108°', '120°', '135°'], answer: 1, explain: '3 · 180/5.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hình thoi là đa giác đều.', answer: false, explain: 'Các góc của hình thoi (không vuông) không bằng nhau.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Lục giác đều cạnh a có bán kính đường tròn ngoại tiếp bằng a.', answer: true, explain: 'Gồm 6 tam giác đều cạnh a.' }
    ]
  });
})();
