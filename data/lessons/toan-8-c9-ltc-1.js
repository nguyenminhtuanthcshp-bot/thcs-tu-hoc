/* Toán 8 – Luyện tập chung (sau Bài 34). Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C, G = S.geom;
  var A = [60, 40], B = [60, 200], Cc = [330, 200], H = G.foot(B, A, Cc);
  THCS.registerLesson('toan-8/c9-ltc-1', {
    objectives: [
      'Vận dụng định nghĩa và ba trường hợp đồng dạng để chứng minh hai tam giác đồng dạng.',
      'Từ hai tam giác đồng dạng suy ra góc bằng nhau, cạnh tỉ lệ để tính toán.',
      'Chứng minh các hệ thức dạng tích (AB · CD = EF · GH) nhờ tam giác đồng dạng.'
    ],
    intro: 'Tam giác đồng dạng là công cụ mạnh để chứng minh các đẳng thức về độ dài. Buổi luyện tập này rèn kĩ năng “tìm cặp tam giác đồng dạng”.',
    steps: [
      { title: 'Tìm cặp tam giác', html: `<p>Muốn chứng minh {{AB|CD}} = {{EF|GH}} hay AB · GH = CD · EF: tìm hai tam giác chứa các đoạn AB, EF (tam giác thứ nhất) và CD, GH (tam giác thứ hai), rồi chứng minh chúng đồng dạng.</p>` },
      { title: 'Đường cao trong tam giác vuông', html: `<p>ΔABC vuông tại B, đường cao BH. Ba tam giác ΔABC, ΔAHB, ΔBHC đôi một đồng dạng (g.g) vì có chung góc nhọn hoặc cùng phụ với một góc.</p>`,
        svg: S.geo({ w: 380, h: 230, P: { A: A, B: B, C: Cc, H: H }, seg: ['AB', 'BC', 'CA', { s: 'BH', color: C.blue, width: 2.5 }], right: ['ABC', 'BHC'], off: { H: [10, -10] } }), caption: 'ΔAHB ∽ ΔABC ∽ ΔBHC.' },
      { title: 'Hệ thức suy ra', html: `<p>Từ ΔAHB ∽ ΔABC: {{AB|AC}} = {{AH|AB}} ⇒ AB<sup>2</sup> = AH · AC.</p><p>Từ ΔAHB ∽ ΔBHC: {{BH|HC}} = {{AH|BH}} ⇒ BH<sup>2</sup> = AH · HC.</p>` },
      { title: 'Mẹo', html: `<ul><li>Góc chung, góc đối đỉnh, góc so le trong là “nguồn” của các cặp góc bằng nhau.</li><li>Viết kí hiệu đồng dạng đúng thứ tự trước khi lập tỉ lệ thức.</li></ul>` }
    ],
    summary: 'Chọn trường hợp đồng dạng phù hợp (thường là g.g), viết đúng thứ tự đỉnh, lập tỉ lệ thức rồi suy ra hệ thức cần chứng minh.',
    examples: [
      { title: 'Đường cao', problem: 'ΔABC vuông tại B, đường cao BH, AH = 4, AC = 16. Tính AB.', solution: 'AB<sup>2</sup> = AH · AC = 64 ⇒ AB = 8.' },
      { title: 'Hệ thức tích', problem: 'ΔABC có hai đường cao BD, CE cắt nhau tại H. Chứng minh HB · HD = HC · HE.', solution: 'ΔHEB và ΔHDC có ∠HEB = ∠HDC = 90°, ∠EHB = ∠DHC (đối đỉnh) ⇒ ΔHEB ∽ ΔHDC (g.g) ⇒ {{HE|HD}} = {{HB|HC}} ⇒ HB · HD = HC · HE.' },
      { title: 'Tính cạnh', problem: 'ΔABC có AB = 12, AC = 18. Trên AB lấy D với AD = 8, trên AC lấy E với AE = 12. Chứng minh ΔADE ∽ ΔABC.', solution: '{{AD|AB}} = {{8|12}} = {{2|3}}, {{AE|AC}} = {{12|18}} = {{2|3}}, góc A chung ⇒ ΔADE ∽ ΔABC (c.g.c).' }
    ],
    exercises: [
      { question: 'ΔABC vuông tại B, đường cao BH, AH = 3, HC = 12. Tính BH.', hints: ['BH<sup>2</sup> = AH · HC.', '3 · 12 = 36.'], solution: 'BH = 6.' },
      { question: 'ΔABC có AB = 6, AC = 9. D ∈ AC sao cho AD = 4. Chứng minh ΔABD ∽ ΔACB.', hints: ['{{AB|AC}} = {{6|9}} = {{2|3}}; {{AD|AB}} = {{4|6}} = {{2|3}}.', 'Góc A chung.'], solution: 'ΔABD ∽ ΔACB (c.g.c).' },
      { question: 'Với bài trên, biết BC = 7,5. Tính BD.', hints: ['{{BD|CB}} = {{AB|AC}} = {{2|3}}.', 'BD = 7,5 · {{2|3}}.'], solution: 'BD = 5.' }
    ],
    quiz: [
      { type: 'short', calc: 'sqrt(4 * 16)', q: 'ΔABC vuông tại B, đường cao BH, AH = 4, AC = 16. Tính AB.', answer: '8', explain: 'AB² = AH · AC = 64.' },
      { type: 'short', calc: 'sqrt(3 * 12)', q: 'ΔABC vuông tại B, đường cao BH, AH = 3, HC = 12. Tính BH.', answer: '6', explain: 'BH² = 36.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Trong tam giác vuông, đường cao ứng với cạnh huyền chia tam giác thành hai tam giác đồng dạng với tam giác ban đầu.', answer: true, explain: 'Trường hợp g.g.' },
      { type: 'mcq', q: 'ΔADE ∽ ΔABC với AD = 8, AB = 12. Tỉ số đồng dạng là:', options: ['{{3|2}}', '{{2|3}}', '{{1|2}}', '{{4|3}}'], answer: 1, explain: '{{8|12}}.' },
      { type: 'short', calc: '7.5 * 2 / 3', q: 'ΔABD ∽ ΔACB tỉ số {{2|3}}, BC = 7,5. Tính BD.', answer: '5', explain: '7,5 · {{2|3}}.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hai đường cao BD, CE của ΔABC cắt nhau tại H thì ΔHEB ∽ ΔHDC.', answer: true, explain: 'Góc vuông và góc đối đỉnh.' },
      { type: 'mcq', q: 'Từ ΔHEB ∽ ΔHDC suy ra:', options: ['HB · HC = HD · HE', 'HB · HD = HC · HE', 'HB + HD = HC + HE', 'HB = HC'], answer: 1, explain: '{{HE|HD}} = {{HB|HC}}.' },
      { type: 'short', calc: '12 * 18 / 12', q: 'ΔADE ∽ ΔABC (tỉ số {{2|3}}), DE = 12. Tính BC.', answer: '18', explain: 'BC = 12 : {{2|3}} = 18.' }
    ]
  });
})();
