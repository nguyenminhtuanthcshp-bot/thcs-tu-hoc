/* Toán 7 – Chương IX. Luyện tập chung (sau Bài 33). Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, C = S.C;
THCS.registerLesson('toan-7/c9-ltc-1', {
  objectives: [
    'Củng cố quan hệ giữa góc và cạnh đối diện, đường vuông góc và đường xiên.',
    'Vận dụng bất đẳng thức tam giác để kiểm tra và tìm độ dài cạnh.',
    'Phối hợp các kết quả để so sánh độ dài đoạn thẳng trong hình.'
  ],
  intro: 'Luyện tập Bài 31 – 33. Ba công cụ so sánh độ dài: góc đối diện, đường vuông góc – đường xiên, và bất đẳng thức tam giác.',
  steps: [
    { title: 'Công cụ 1: góc ↔ cạnh', html: `<p>Trong một tam giác, so sánh góc thì suy ra so sánh cạnh đối diện (và ngược lại). Nhớ tính góc thứ ba nếu cần.</p>` },
    { title: 'Công cụ 2: vuông góc ↔ xiên', html: `<p>Nếu AH ⊥ d thì AH ngắn hơn mọi đoạn AB với B ∈ d, B ≠ H.</p>`,
      svg: S.geo({ w: 380, h: 190, P: { A: [140, 35], H: [140, 160], B: [250, 160], C: [330, 160] }, seg: ['AH', 'HC', 'AB', 'AC'], right: ['AHB'], arcs: [['ABC', 1, '', C.orange]], off: { H: [0, 22], B: [0, 22], C: [0, 22] } }),
      caption: 'Góc ABC là góc tù nên AC &gt; AB; AH ngắn nhất.' },
    { title: 'Công cụ 3: bất đẳng thức tam giác', html: `<p>|b − c| &lt; a &lt; b + c. Kiểm tra ba đoạn: đoạn lớn nhất &lt; tổng hai đoạn kia.</p>` },
    { title: 'Bài toán phối hợp', html: `<p>Trong hình trên, H, B, C thẳng hàng theo thứ tự đó. Góc ABH nhọn (tam giác AHB vuông) nên góc ABC tù. Trong tam giác ABC, cạnh AC đối diện góc tù là lớn nhất: AC &gt; AB &gt; AH.</p>` }
  ],
  summary: 'So sánh độ dài: dùng góc đối diện, đường vuông góc ngắn nhất, bất đẳng thức tam giác. Góc kề bù với góc nhọn là góc tù.',
  examples: [
    { title: 'Sắp xếp cạnh', problem: 'Tam giác ABC có góc A = 45°, góc B = 75°. Sắp xếp các cạnh tăng dần.', solution: 'Góc C = 60°. A &lt; C &lt; B nên BC &lt; AB &lt; AC.' },
    { title: 'Chu vi nhỏ nhất', problem: 'Tam giác có hai cạnh 4 cm và 6 cm, cạnh thứ ba nguyên. Chu vi nhỏ nhất là bao nhiêu?', solution: 'Cạnh thứ ba ≥ 3 ⇒ chu vi nhỏ nhất 13 cm.' },
    { title: 'Ba cạnh bằng nhau', problem: 'Tam giác ABC có góc A = góc B = 60°. So sánh các cạnh.', solution: 'Góc C = 60° ⇒ ba cạnh bằng nhau.' }
  ],
  exercises: [
    { question: 'Tam giác ABC có AB = 6, AC = 8, BC = 10. Góc nào nhỏ nhất?', hints: ['Cạnh nhỏ nhất là AB.', 'Đối diện AB là góc C.'], solution: 'Góc C.' },
    { question: 'Tam giác có chu vi 20 cm, hai cạnh 6 cm và 5 cm. Có tồn tại không?', hints: ['Cạnh thứ ba 9 cm.', '9 &lt; 11.'], solution: 'Có (6; 5; 9).' },
    { question: 'Tam giác cân có chu vi 25 cm, một cạnh 5 cm. Tìm hai cạnh còn lại.', hints: ['Nếu cạnh bên 5: đáy 15 – vô lí.', 'Đáy 5 ⇒ cạnh bên 10.'], solution: '10 cm và 10 cm.' }
  ],
  quiz: [
    { type: 'short', calc: '180 - 45 - 75', q: 'Tam giác ABC có góc A = 45°, góc B = 75°. Góc C bằng bao nhiêu độ?', unit: '°', answer: '60', explain: '180 − 120.' },
    { type: 'mcq', q: 'Tam giác ABC có góc A = 45°, góc B = 75°. Cạnh lớn nhất là:', options: ['AB', 'BC', 'AC', 'bằng nhau'], answer: 2, explain: 'Đối diện góc B lớn nhất.' },
    { type: 'short', calc: '4 + 6 + (6 - 4 + 1)', q: 'Tam giác có hai cạnh 4 cm và 6 cm, cạnh thứ ba nguyên. Chu vi nhỏ nhất (cm)?', unit: 'cm', answer: '13', explain: 'Cạnh thứ ba nhỏ nhất 3.' },
    { type: 'short', calc: '20 - 6 - 5', q: 'Tam giác có chu vi 20 cm, hai cạnh 6 cm và 5 cm. Cạnh thứ ba (cm)?', unit: 'cm', answer: '9', explain: '20 − 11.' },
    { type: 'short', calc: '(25 - 5) / 2', q: 'Tam giác cân chu vi 25 cm, một cạnh 5 cm. Cạnh bên dài bao nhiêu cm?', unit: 'cm', answer: '10', explain: 'Đáy 5, cạnh bên 10.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Góc kề bù với một góc nhọn là góc tù.', answer: true, explain: '180° − góc nhọn &gt; 90°.' },
    { type: 'mcq', q: 'Tam giác ABC có AB = 6, AC = 8, BC = 10. Góc nhỏ nhất là:', options: ['góc A', 'góc B', 'góc C', 'bằng nhau'], answer: 2, explain: 'Đối diện AB.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Ba đoạn 5 cm, 7 cm, 13 cm là ba cạnh của một tam giác.', answer: false, explain: '13 &gt; 12.' }
  ]
});
})();
