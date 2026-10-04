/* Toán 8 – Bài tập cuối chương IX. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C, G = S.geom;
  var A = [60, 40], B = [60, 200], Cc = [300, 200], H = G.foot(B, A, Cc);
  THCS.registerLesson('toan-8/c9-on-tap', {
    objectives: [
      'Hệ thống hoá khái niệm tam giác đồng dạng, các trường hợp đồng dạng của tam giác và tam giác vuông.',
      'Vận dụng định lí Pythagore (thuận và đảo) trong tính toán và chứng minh.',
      'Giải quyết bài toán tổng hợp và thực tế về tam giác đồng dạng, hình đồng dạng.'
    ],
    intro: 'Chương IX cung cấp công cụ đo đạc gián tiếp mạnh mẽ. Hãy ôn lại toàn bộ và thử sức với các bài tổng hợp.',
    steps: [
      { title: 'Sơ đồ chương', html: `<p>Các nội dung chính của chương:</p>`,
        svg: S.mindmap({ center: 'Tam giác đồng dạng', branches: [
          { title: 'Định nghĩa', items: ['Góc bằng nhau', 'Cạnh tỉ lệ (tỉ số k)'] },
          { title: 'Trường hợp', items: ['c.c.c, c.g.c, g.g', 'Tam giác vuông: góc nhọn, cạnh huyền – cạnh góc vuông'] },
          { title: 'Pythagore', items: ['c² = a² + b²', 'Định lí đảo'] },
          { title: 'Hình đồng dạng', items: ['Phối cảnh tâm O, tỉ số k', 'Diện tích tỉ số k²'] }
        ] }) },
      { title: 'Bài toán mẫu: tam giác vuông và đường cao', html: `<p>ΔABC vuông tại B, AB = 6, BC = 8, đường cao BH. Khi đó AC = 10 (Pythagore), ΔAHB ∽ ΔABC nên AH = {{AB<sup>2</sup>|AC}} = 3,6; BH = {{AB · BC|AC}} = 4,8.</p>`,
        svg: S.geo({ w: 360, h: 230, P: { A: A, B: B, C: Cc, H: H }, seg: ['AB', 'BC', 'CA', { s: 'BH', color: C.blue, width: 2.5 }], right: ['ABC', 'BHC'], off: { H: [10, -10] }, text: [[42, 124, '6', C.blue], [180, 220, '8', C.blue]] }), caption: 'AC = 10, AH = 3,6, BH = 4,8.' },
      { title: 'Sai lầm thường gặp', html: `<ul><li>Viết sai thứ tự đỉnh trong kí hiệu ∽ dẫn đến lập sai tỉ lệ thức.</li><li>Dùng Pythagore cho tam giác không vuông.</li><li>Quên bình phương tỉ số khi tính diện tích.</li></ul>` },
      { title: 'Chiến lược', html: `<p>Vẽ hình rõ ràng, đánh dấu các góc bằng nhau, tìm tam giác vuông hoặc cặp tam giác đồng dạng rồi mới tính.</p>` }
    ],
    summary: 'Định nghĩa và ba trường hợp đồng dạng; các trường hợp riêng của tam giác vuông; Pythagore thuận/đảo; hình đồng dạng phối cảnh. Tỉ số chu vi k, diện tích k².',
    examples: [
      { title: 'Đường cao tam giác vuông', problem: 'ΔABC vuông tại B, AB = 6, BC = 8, đường cao BH. Tính AC, AH, BH.', solution: 'AC = 10; AH = 36 : 10 = 3,6; BH = 48 : 10 = 4,8.' },
      { title: 'Đo khoảng cách qua sông', problem: 'Để đo khoảng cách AB qua sông, người ta dựng ΔABC vuông tại A và ΔA\'B\'C\' ∽ ΔABC trên bờ với A\'B\' = 3 m, A\'C\' = 2 m, còn AC = 20 m. Tính AB.', solution: '{{AB|A\'B\'}} = {{AC|A\'C\'}} = 10 ⇒ AB = 30 m.' },
      { title: 'Định lí đảo', problem: 'ΔMNP có MN = 15, NP = 8, MP = 17. Tính diện tích tam giác.', solution: '15² + 8² = 289 = 17² ⇒ vuông tại N. S = {{1|2}} · 15 · 8 = 60.' }
    ],
    exercises: [
      { question: 'Hình thang ABCD (AB // CD) có AB = 6, CD = 15, hai đường chéo cắt nhau tại O. Biết diện tích ΔOAB bằng 8. Tính diện tích ΔOCD.', hints: ['ΔOAB ∽ ΔOCD với tỉ số {{6|15}} = {{2|5}}.', 'S<sub>OCD</sub> = 8 · ({{5|2}})².'], solution: '8 · {{25|4}} = 50.' },
      { question: 'Chiếc thang 6,5 m dựa vào tường, đỉnh thang cao 6 m. Chân thang cách tường bao xa?', hints: ['6,5² − 6² = 42,25 − 36.', '√6,25.'], solution: '2,5 m.' },
      { question: 'ΔABC có AB = 9, AC = 12, BC = 15. Kẻ AH ⊥ BC. Tính AH.', hints: ['81 + 144 = 225 ⇒ vuông tại A.', 'AH · BC = AB · AC.'], solution: 'AH = 108 : 15 = 7,2.' }
    ],
    quiz: [
      { type: 'short', calc: 'sqrt(6*6 + 8*8)', q: 'ΔABC vuông tại B, AB = 6, BC = 8. Tính AC.', answer: '10', explain: 'Pythagore.' },
      { type: 'short', calc: '6 * 8 / 10', q: 'ΔABC vuông tại B, AB = 6, BC = 8, AC = 10, đường cao BH. Tính BH.', answer: '4.8', explain: 'BH = AB · BC : AC.' },
      { type: 'short', calc: '8 * (15/6) * (15/6)', q: 'Hình thang ABCD (AB // CD), AB = 6, CD = 15, O là giao hai đường chéo, S<sub>OAB</sub> = 8. Tính S<sub>OCD</sub>.', answer: '50', explain: 'k = {{5|2}}, k² = {{25|4}}.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tam giác có ba cạnh 8, 15, 17 là tam giác vuông.', answer: true, explain: '64 + 225 = 289.' },
      { type: 'short', calc: 'sqrt(6.5*6.5 - 6*6)', q: 'Thang dài 6,5 m, đỉnh thang cao 6 m. Chân thang cách tường bao nhiêu mét?', unit: 'm', answer: '2.5', explain: '√6,25.' },
      { type: 'mcq', q: 'ΔABC ∽ ΔDEF theo tỉ số {{1|3}}. Tỉ số diện tích của ΔABC so với ΔDEF là:', options: ['{{1|3}}', '{{1|6}}', '{{1|9}}', '3'], answer: 2, explain: 'k².' },
      { type: 'short', calc: '9 * 12 / 15', q: 'ΔABC có AB = 9, AC = 12, BC = 15, AH ⊥ BC. Tính AH.', answer: '7.2', explain: 'Vuông tại A, AH = 108 : 15.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hai tam giác bằng nhau thì đồng dạng với tỉ số 1.', answer: true, explain: 'Góc bằng nhau, cạnh tỉ lệ 1.' }
    ]
  });
})();
