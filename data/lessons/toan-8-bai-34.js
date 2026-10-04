/* Toán 8 – Bài 34. Ba trường hợp đồng dạng của hai tam giác. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  var P = { A: [35, 93], B: [60, 190], C: [210, 190], D: [267.5, 141.6], E: [280, 190], F: [355, 190] };
  function pair(extra) { var o = { w: 380, h: 220, P: P, seg: ['AB', 'BC', 'CA', 'DE', 'EF', 'FD'], fill: [['ABC', C.blueL], ['DEF', C.orangeL]], off: { E: [8, 16] } }; Object.keys(extra || {}).forEach(function (k) { o[k] = extra[k]; }); return S.geo(o); }
  THCS.registerLesson('toan-8/bai-34', {
    objectives: [
      'Giải thích được các trường hợp đồng dạng của hai tam giác: cạnh – cạnh – cạnh, cạnh – góc – cạnh, góc – góc.',
      'Chứng minh được hai tam giác đồng dạng bằng cách chọn trường hợp phù hợp.',
      'Vận dụng tam giác đồng dạng để tính độ dài, số đo góc và giải quyết bài toán thực tế (đo chiều cao, khoảng cách).'
    ],
    intro: 'Giống như ba trường hợp bằng nhau của tam giác (c.c.c, c.g.c, g.c.g), tam giác đồng dạng cũng có ba trường hợp để nhận biết mà không cần kiểm tra đủ sáu yếu tố.',
    steps: [
      { title: 'Trường hợp 1: cạnh – cạnh – cạnh', html: `<div class="box key">Nếu ba cạnh của tam giác này tỉ lệ với ba cạnh của tam giác kia thì hai tam giác đó đồng dạng.</div>
        <p>{{DE|AB}} = {{EF|BC}} = {{FD|CA}} ⇒ ΔDEF ∽ ΔABC.</p><p>Ví dụ: ΔABC có AB = 4, BC = 6, CA = 8; ΔDEF có DE = 2, EF = 3, FD = 4 ⇒ tỉ số {{1|2}}, hai tam giác đồng dạng.</p>`,
        svg: pair({ text: [[36, 147, '4', C.blue], [135, 210, '6', C.blue], [132, 128, '8', C.blue], [262, 172, '2', C.orange], [317, 210, '3', C.orange], [320, 158, '4', C.orange]] }), caption: 'Ba cặp cạnh tỉ lệ cùng tỉ số {{1|2}}.' },
      { title: 'Trường hợp 2: cạnh – góc – cạnh', html: `<div class="box key">Nếu hai cạnh của tam giác này tỉ lệ với hai cạnh của tam giác kia và hai góc tạo bởi các cặp cạnh đó bằng nhau thì hai tam giác đồng dạng.</div>
        <p>{{DE|AB}} = {{EF|BC}} và ∠E = ∠B ⇒ ΔDEF ∽ ΔABC.</p>`,
        svg: pair({ arcs: [['ABC', 1, '', C.red, 20], ['DEF', 1, '', C.red, 14]] }), caption: 'Góc xen giữa hai cặp cạnh tỉ lệ bằng nhau.' },
      { title: 'Trường hợp 3: góc – góc', html: `<div class="box key">Nếu hai góc của tam giác này lần lượt bằng hai góc của tam giác kia thì hai tam giác đó đồng dạng.</div>
        <p>∠D = ∠A và ∠E = ∠B ⇒ ΔDEF ∽ ΔABC.</p>
        <div class="box tip">Trường hợp g.g thường dùng nhất: chỉ cần hai cặp góc, không cần độ dài.</div>`,
        svg: pair({ arcs: [['BAC', 1, '', C.green, 18], ['EDF', 1, '', C.green, 13], ['ABC', 2, '', C.purple, 18], ['DEF', 2, '', C.purple, 13]] }), caption: 'Hai cặp góc bằng nhau.' },
      { title: 'Ứng dụng: đo chiều cao', html: `<p>Đặt một cọc thẳng đứng, nhìn từ một điểm trên mặt đất sao cho đỉnh cọc và đỉnh cây thẳng hàng. Hai tam giác vuông tạo thành có chung một góc nhọn nên đồng dạng (g.g), từ đó tính được chiều cao cây.</p>` }
    ],
    summary: 'c.c.c: ba cặp cạnh tỉ lệ. c.g.c: hai cặp cạnh tỉ lệ và góc xen giữa bằng nhau. g.g: hai cặp góc bằng nhau.',
    examples: [
      { title: 'Nhận biết c.c.c', problem: 'ΔABC có AB = 6, BC = 9, CA = 12; ΔMNP có MN = 4, NP = 6, PM = 8. Hai tam giác có đồng dạng không?', solution: '{{MN|AB}} = {{NP|BC}} = {{PM|CA}} = {{2|3}} ⇒ ΔMNP ∽ ΔABC (c.c.c).' },
      { title: 'Nhận biết c.g.c', problem: 'ΔABC có AB = 8, AC = 6, ∠A = 60°; ΔDEF có DE = 4, DF = 3, ∠D = 60°. Chứng minh ΔDEF ∽ ΔABC và tính EF biết BC ≈ 7,2.', solution: '{{DE|AB}} = {{DF|AC}} = {{1|2}}, ∠D = ∠A ⇒ đồng dạng (c.g.c). EF = BC : 2 ≈ 3,6.' },
      { title: 'Đo chiều cao', problem: 'Bóng của một cây dài 15 m, cùng lúc bóng của một cọc cao 2 m dài 2,5 m. Tính chiều cao cây.', solution: 'Tia nắng tạo với mặt đất cùng một góc, cây và cọc đều vuông góc mặt đất ⇒ hai tam giác vuông đồng dạng (g.g). {{h|2}} = {{15|2,5}} ⇒ h = 12 m.' }
    ],
    exercises: [
      { question: 'ΔABC và ΔA\'B\'C\' có ∠A = ∠A\' = 70°, ∠B = 50°, ∠C\' = 60°. Hai tam giác có đồng dạng không?', hints: ['Tính ∠C = 180° − 70° − 50°.', '∠C = 60° = ∠C\'.'], solution: 'Có (g.g): ∠A = ∠A\', ∠C = ∠C\'.' },
      { question: 'Hình thang ABCD (AB // CD) có hai đường chéo cắt nhau tại O. Chứng minh ΔOAB ∽ ΔOCD. Biết AB = 4, CD = 10, OA = 2. Tính OC.', hints: ['∠OAB = ∠OCD (so le trong), ∠AOB = ∠COD (đối đỉnh).', '{{OA|OC}} = {{AB|CD}}.'], solution: 'ΔOAB ∽ ΔOCD (g.g). OC = 2 · 10 : 4 = 5.' },
      { question: 'Ba cạnh của một tam giác là 5, 7, 9. Tam giác đồng dạng với nó có cạnh nhỏ nhất bằng 10. Tính các cạnh còn lại.', hints: ['Tỉ số k = 10 : 5 = 2.', 'Nhân các cạnh với 2.'], solution: '14 và 18.' }
    ],
    quiz: [
      { type: 'mcq', q: 'Trường hợp đồng dạng nào chỉ cần biết hai cặp góc?', options: ['c.c.c', 'c.g.c', 'g.g', 'c.c.g'], answer: 2, explain: 'Góc – góc.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tam giác có các cạnh 4, 6, 8 đồng dạng với tam giác có các cạnh 6, 9, 12.', answer: true, explain: 'Tỉ số {{3|2}}.' },
      { type: 'short', calc: '2 * 15 / 2.5', q: 'Bóng cây dài 15 m; cọc cao 2 m có bóng 2,5 m. Cây cao bao nhiêu mét?', unit: 'm', answer: '12', explain: '{{h|2}} = {{15|2,5}}.' },
      { type: 'short', calc: '2 * 10 / 4', q: 'Hình thang ABCD (AB // CD), O là giao hai đường chéo, AB = 4, CD = 10, OA = 2. Tính OC.', answer: '5', explain: 'ΔOAB ∽ ΔOCD.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hai tam giác có hai cặp cạnh tỉ lệ thì luôn đồng dạng.', answer: false, explain: 'Cần thêm góc xen giữa bằng nhau.' },
      { type: 'short', calc: '9 * 10 / 5', q: 'Tam giác 5, 7, 9 đồng dạng với tam giác có cạnh nhỏ nhất 10. Cạnh lớn nhất của tam giác mới là?', answer: '18', explain: 'k = 2.' },
      { type: 'mcq', q: 'ΔABC có ∠A = 70°, ∠B = 50°. Tam giác nào đồng dạng với ΔABC?', options: ['ΔDEF có ∠D = 70°, ∠E = 60°', 'ΔMNP có ∠M = 60°, ∠N = 50°', 'ΔXYZ có ∠X = 70°, ∠Z = 60°', 'ΔHIK có ∠H = 50°, ∠K = 50°'], answer: 2, explain: '∠C = 60°; ΔXYZ có hai góc 70° và 60°.' },
      { type: 'short', requireSimplest: true, calc: '4 / 6', q: 'ΔMNP (4, 6, 8) ∽ ΔABC (6, 9, 12). Tỉ số đồng dạng của ΔMNP so với ΔABC? (Dạng a/b tối giản.)', answer: ['2/3'], answerText: '2/3', explain: '{{4|6}} = {{2|3}}.' }
    ]
  });
})();
