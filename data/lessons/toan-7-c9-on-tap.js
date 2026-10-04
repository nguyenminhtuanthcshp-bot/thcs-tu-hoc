/* Toán 7 – Bài tập cuối chương IX. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, C = S.C;
THCS.registerLesson('toan-7/c9-on-tap', {
  objectives: [
    'Hệ thống kiến thức chương IX: quan hệ góc – cạnh, đường vuông góc – đường xiên, bất đẳng thức tam giác, các điểm đồng quy.',
    'Giải bài tập tổng hợp so sánh độ dài, góc; tính độ dài liên quan trọng tâm.',
    'Vận dụng vào bài toán thực tế: chọn vị trí, đường đi ngắn nhất.'
  ],
  intro: 'Ôn tập chương IX. Chương này trả lời những câu hỏi “cái nào lớn hơn?” và “điểm nào đặc biệt?” trong tam giác.',
  steps: [
    { title: 'Sơ đồ chương', html: `<p>Các nội dung chính:</p>`,
      svg: S.mindmap({ center: 'Tam giác', branches: [{ title: 'Góc – cạnh', items: ['cạnh lớn ↔ góc lớn', 'cạnh huyền lớn nhất'] }, { title: 'Vuông góc – xiên', items: ['AH ngắn nhất', 'khoảng cách'] }, { title: 'Ba cạnh', items: ['|b − c| < a', 'a < b + c'] }, { title: 'Đồng quy', items: ['G, I', 'O, H'] }] }) },
    { title: 'Các dạng bài', html: `<ol><li>So sánh góc/cạnh trong tam giác.</li><li>Kiểm tra bộ ba độ dài, tìm cạnh thứ ba.</li><li>Tính độ dài với trọng tâm, khoảng cách với điểm I, O.</li><li>Bài toán thực tế: vị trí cách đều, đường đi ngắn nhất.</li></ol>` },
    { title: 'Bài toán mẫu', html: `<p>Tam giác ABC có AB = 5 cm, AC = 8 cm, BC = 7 cm.</p><ol><li>Kiểm tra: 8 &lt; 5 + 7 ✓.</li><li>So sánh góc: AC &gt; BC &gt; AB ⇒ góc B &gt; góc A &gt; góc C.</li><li>Trung tuyến AM = 6 cm (đo) ⇒ AG = 4 cm.</li></ol>` },
    { title: 'Đường đi ngắn nhất', html: `<p>Nhà An ở A, trường ở B, hai bên một con đường thẳng. Đoạn thẳng AB luôn ngắn hơn mọi đường gấp khúc A → M → B (bất đẳng thức tam giác): AM + MB ≥ AB, dấu “=” khi M nằm trên đoạn AB.</p>`,
      svg: S.geo({ w: 380, h: 200, P: { A: [60, 40], B: [320, 170], M: [250, 105], K: [190, 105], m: [20, 105], n: [360, 105] }, seg: [{ s: 'm-n', color: C.muted }, { s: 'AB', color: C.green, width: 3 }, { s: 'AM', color: C.orange, dash: true }, { s: 'MB', color: C.orange, dash: true }], hide: ['m', 'n'], off: { M: [8, -12], K: [-4, 22] } }),
      caption: 'AM + MB &gt; AB = AK + KB (K nằm trên AB).' }
  ],
  summary: 'Chương IX: góc lớn ↔ cạnh đối diện lớn; đường vuông góc ngắn nhất; |b − c| &lt; a &lt; b + c; G (trung tuyến, {{2|3}}), I (phân giác, cách đều cạnh), O (trung trực, cách đều đỉnh), H (đường cao).',
  examples: [
    { title: 'So sánh góc', problem: 'Tam giác ABC có AB = 5, AC = 8, BC = 7. Góc nào lớn nhất?', solution: 'Góc B (đối diện AC).' },
    { title: 'Cạnh thứ ba', problem: 'Tam giác có hai cạnh 3 cm và 10 cm, cạnh thứ ba nguyên. Tìm giá trị nhỏ nhất.', solution: '7 &lt; x &lt; 13 ⇒ nhỏ nhất 8 cm.' },
    { title: 'Trọng tâm', problem: 'BG = 6 cm (G trọng tâm). Tính trung tuyến BN.', solution: 'BN = {{3|2}} · 6 = 9 cm.' }
  ],
  exercises: [
    { question: 'Tam giác ABC vuông tại A, góc B = 55°. So sánh AB và AC.', hints: ['Góc C = 35°.', 'Góc B &gt; góc C.'], solution: 'AC &gt; AB.' },
    { question: 'Tam giác có hai cạnh 3 cm và 10 cm, cạnh thứ ba nguyên. Có mấy giá trị?', hints: ['7 &lt; x &lt; 13.', '8, 9, 10, 11, 12.'], solution: '5.' },
    { question: 'Tam giác ABC có I là giao điểm ba phân giác, góc A = 80°. Tính góc BIC.', hints: ['Góc B + góc C = 100°.', '180° − 50°.'], solution: '130°.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Tam giác ABC có AB = 5, AC = 8, BC = 7. Góc lớn nhất là:', options: ['góc A', 'góc B', 'góc C', 'bằng nhau'], answer: 1, explain: 'Đối diện AC.' },
    { type: 'short', calc: '10 - 3 + 1', q: 'Tam giác có hai cạnh 3 cm và 10 cm, cạnh thứ ba nguyên. Giá trị nhỏ nhất (cm)?', unit: 'cm', answer: '8', explain: 'x &gt; 7.' },
    { type: 'short', calc: '[8, 9, 10, 11, 12].length', q: 'Tam giác có hai cạnh 3 cm và 10 cm, cạnh thứ ba nguyên. Có bao nhiêu giá trị?', answer: '5', explain: '8 đến 12.' },
    { type: 'short', calc: '6 * 3 / 2', q: 'G là trọng tâm, BG = 6 cm. Trung tuyến BN = ? cm', unit: 'cm', answer: '9', explain: '{{3|2}} · 6.' },
    { type: 'short', calc: '180 - (180 - 80) / 2', q: 'I là giao điểm ba phân giác, góc A = 80°. Góc BIC = ?°', unit: '°', answer: '130', explain: '180 − 50.' },
    { type: 'short', calc: '2 / 3 * 6', q: 'Trung tuyến AM = 6 cm. AG = ? cm', unit: 'cm', answer: '4', explain: '{{2|3}} · 6.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tam giác vuông tại A có góc B = 55° thì AC &gt; AB.', answer: true, explain: 'Góc B &gt; góc C = 35°.' },
    { type: 'mcq', q: 'Muốn đặt trạm y tế cách đều ba xã A, B, C, chọn giao điểm ba đường:', options: ['trung tuyến', 'phân giác', 'trung trực', 'cao'], answer: 2, explain: 'Cách đều ba đỉnh.' }
  ]
});
})();
