/* Toán 7 – Bài 20. Tỉ lệ thức. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, C = S.C;
THCS.registerLesson('toan-7/bai-20', {
  objectives: [
    'Nhận biết tỉ lệ thức, các số hạng (ngoại tỉ, trung tỉ) của tỉ lệ thức.',
    'Vận dụng tính chất cơ bản: tích ngoại tỉ bằng tích trung tỉ; lập các tỉ lệ thức từ một đẳng thức tích.',
    'Tìm số hạng chưa biết của tỉ lệ thức và giải bài toán thực tế.'
  ],
  intro: 'Công thức pha nước chanh: 2 thìa đường cho 3 cốc nước. Muốn pha 9 cốc thì cần bao nhiêu thìa? Câu trả lời nằm trong một “tỉ lệ thức”.',
  steps: [
    { title: 'Tỉ lệ thức là gì?', html: `<p><b>Tỉ lệ thức</b> là đẳng thức của hai tỉ số: <span class="math">{{a|b}} = {{c|d}}</span> (còn viết a : b = c : d), với b, d ≠ 0.</p>
      <p>a và d là các <b>ngoại tỉ</b> (số hạng ngoài), b và c là các <b>trung tỉ</b> (số hạng trong).</p>
      <p>Ví dụ: {{2|3}} = {{6|9}} là tỉ lệ thức vì hai tỉ số cùng bằng {{2|3}}.</p>`,
      svg: S.draw({ w: 360, h: 150, items: [{ text: [60, 50, 'a'], size: 30, bold: true, color: C.orange }, { text: [95, 50, ':'], size: 30, bold: true }, { text: [130, 50, 'b'], size: 30, bold: true, color: C.blue }, { text: [180, 50, '='], size: 30, bold: true }, { text: [230, 50, 'c'], size: 30, bold: true, color: C.blue }, { text: [265, 50, ':'], size: 30, bold: true }, { text: [300, 50, 'd'], size: 30, bold: true, color: C.orange },
        { seg: [130, 62, 130, 82], color: C.blue }, { seg: [130, 82, 230, 82], color: C.blue }, { seg: [230, 82, 230, 62], color: C.blue }, { text: [180, 100, 'trung tỉ: b và c'], color: C.blue, bold: true, size: 13 },
        { seg: [60, 62, 60, 118], color: C.orange }, { seg: [60, 118, 300, 118], color: C.orange }, { seg: [300, 118, 300, 62], color: C.orange }, { text: [180, 138, 'ngoại tỉ: a và d'], color: C.orange, bold: true, size: 13 }] }),
      caption: 'Ngoại tỉ ở hai đầu, trung tỉ ở giữa.' },
    { title: 'Tính chất cơ bản', html: `<div class="box note">Nếu {{a|b}} = {{c|d}} thì <b>a · d = b · c</b> (tích ngoại tỉ bằng tích trung tỉ).</div>
      <p>Ngược lại, nếu a · d = b · c (a, b, c, d ≠ 0) thì ta lập được 4 tỉ lệ thức:</p>
      <p class="math">{{a|b}} = {{c|d}}; &nbsp; {{a|c}} = {{b|d}}; &nbsp; {{d|b}} = {{c|a}}; &nbsp; {{d|c}} = {{b|a}}</p>` },
    { title: 'Tìm số hạng chưa biết', html: `<p>Từ {{x|b}} = {{c|d}} suy ra x · d = b · c ⇒ <span class="math">x = {{b · c|d}}</span>.</p>
      <p>Quy tắc: một ngoại tỉ bằng tích hai trung tỉ chia cho ngoại tỉ kia; một trung tỉ bằng tích hai ngoại tỉ chia cho trung tỉ kia.</p>
      <p>Ví dụ: {{x|4}} = {{6|8}} ⇒ x = {{4 · 6|8}} = 3.</p>` },
    { title: 'Ứng dụng thực tế', html: `<p>Pha nước chanh: {{2|3}} = {{x|9}} ⇒ x = {{2 · 9|3}} = 6 thìa đường.</p>
      <p>Bản đồ tỉ lệ 1 : 100 000: 3 cm trên bản đồ ứng với 300 000 cm = 3 km ngoài thực tế.</p>` }
  ],
  summary: '{{a|b}} = {{c|d}} là tỉ lệ thức; ngoại tỉ a, d; trung tỉ b, c. Tính chất: a · d = b · c. Tìm x: ngoại tỉ = (tích trung tỉ) : ngoại tỉ còn lại, và ngược lại.',
  examples: [
    { title: 'Kiểm tra tỉ lệ thức', problem: 'Các tỉ số 1,2 : 3,6 và 2 : 6 có lập thành tỉ lệ thức không?', solution: '1,2 : 3,6 = {{1|3}}; 2 : 6 = {{1|3}}. Hai tỉ số bằng nhau nên lập được tỉ lệ thức 1,2 : 3,6 = 2 : 6.' },
    { title: 'Tìm x', problem: 'Tìm x, biết: {{-5|x}} = {{15|12}}.', solution: '−5 · 12 = 15 · x ⇒ x = {{−60|15}} = −4.' },
    { title: 'Lập tỉ lệ thức', problem: 'Lập các tỉ lệ thức từ đẳng thức 3 · 8 = 4 · 6.', solution: '{{3|4}} = {{6|8}}; {{3|6}} = {{4|8}}; {{8|4}} = {{6|3}}; {{8|6}} = {{4|3}}.' }
  ],
  exercises: [
    { question: 'Tìm x, biết: 2,5 : x = 7,5 : 6.', hints: ['Tích ngoại tỉ: 2,5 · 6.', 'Tích trung tỉ: x · 7,5.'], solution: 'x = 2,5 · 6 : 7,5 = 2.' },
    { question: 'Trên bản đồ tỉ lệ 1 : 500 000, khoảng cách giữa hai thành phố là 8 cm. Khoảng cách thực tế là bao nhiêu kilômét?', hints: ['Thực tế = 8 · 500 000 (cm).', '1 km = 100 000 cm.'], solution: '4 000 000 cm = 40 km.' },
    { question: 'Cứ 5 kg gạo nấu được 60 suất cơm. Hỏi 12 kg gạo nấu được bao nhiêu suất?', hints: ['{{5|60}} = {{12|x}}.', 'x = 60 · 12 : 5.'], solution: '144 suất.' }
  ],
  quiz: [
    { type: 'short', calc: '4 * 6 / 8', q: 'Tìm x trong tỉ lệ thức {{x|4}} = {{6|8}}.', answer: '3', explain: 'x = 4 · 6 : 8 = 3.' },
    { type: 'mcq', q: 'Trong tỉ lệ thức a : b = c : d, các ngoại tỉ là:', options: ['a và b', 'b và c', 'a và d', 'c và d'], answer: 2, explain: 'Ngoại tỉ ở hai đầu.' },
    { type: 'short', calc: '-5 * 12 / 15', q: 'Tìm x, biết {{−5|x}} = {{15|12}}.', answer: '-4', answerText: '−4', explain: 'x = −5 · 12 : 15 = −4.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: {{2|3}} = {{10|15}} là một tỉ lệ thức.', answer: true, explain: '2 · 15 = 3 · 10 = 30.' },
    { type: 'short', calc: '2.5 * 6 / 7.5', q: 'Tìm x, biết 2,5 : x = 7,5 : 6.', answer: '2', explain: '2,5 · 6 = 7,5x ⇒ x = 2.' },
    { type: 'short', calc: '8 * 500000 / 100000', q: 'Bản đồ tỉ lệ 1 : 500 000, 8 cm trên bản đồ ứng với bao nhiêu km thực tế?', unit: 'km', answer: '40', explain: '4 000 000 cm = 40 km.' },
    { type: 'short', calc: '60 * 12 / 5', q: '5 kg gạo nấu được 60 suất cơm. 12 kg gạo nấu được bao nhiêu suất?', answer: '144', explain: '60 · 12 : 5 = 144.' },
    { type: 'mcq', q: 'Từ 3 · 8 = 4 · 6, tỉ lệ thức nào SAI?', options: ['{{3|4}} = {{6|8}}', '{{3|6}} = {{4|8}}', '{{3|8}} = {{4|6}}', '{{8|6}} = {{4|3}}'], answer: 2, explain: '{{3|8}} ≠ {{4|6}} vì 3 · 6 ≠ 8 · 4.' }
  ]
});
})();
