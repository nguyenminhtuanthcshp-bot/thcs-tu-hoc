/* Toán 6 – Chương V. Bài tập cuối chương. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, C = S.C;
var mirror = S.draw({ w: 260, h: 200, items: [{ grid: [10, 10, 8, 6, 30] }, { axis: [2, 100, 258, 100] },
  { poly: [[40, 100], [70, 40], [130, 70], [190, 40], [220, 100]], fill: C.blueL, color: C.blue },
  { poly: [[40, 100], [70, 160], [130, 130], [190, 160], [220, 100]], fill: C.orangeL, color: C.orange, dash: true },
  { text: [248, 92, 'd'], color: C.red, bold: true }] });
var H = S.shapePts('lucgiacdeu').pts;
THCS.registerLesson('toan-6/c5-on-tap', {
  objectives: [
    'Hệ thống hóa kiến thức chương V: hình có trục đối xứng, hình có tâm đối xứng.',
    'Vận dụng tính chất đối xứng để tính độ dài, đếm trục, vẽ hình.',
    'Nhận ra vẻ đẹp đối xứng trong tự nhiên, kiến trúc, logo.'
  ],
  intro: 'Ôn tập chương “Tính đối xứng của hình phẳng trong tự nhiên”.',
  steps: [
    { title: 'Trục đối xứng', html: `<p>Gấp theo d, hai phần chồng khít ⇒ d là trục đối xứng. Hai điểm đối xứng qua d nằm hai bên d, cách đều d, và đoạn nối chúng vuông góc với d.</p>` },
    { title: 'Vẽ hình đối xứng qua trục', html: `<p>Trên lưới ô vuông với trục d nằm ngang: điểm cách d bao nhiêu ô phía trên thì ảnh cách d bấy nhiêu ô phía dưới.</p>`, svg: mirror, caption: 'Phần xanh lấy đối xứng qua d được phần cam; cả hình nhận d làm trục.' },
    { title: 'Tâm đối xứng', html: `<p>Quay 180° quanh O, hình trùng chính nó ⇒ O là tâm. Hai điểm đối xứng qua O khi O là trung điểm đoạn nối chúng.</p>`,
      svg: S.shape('lucgiacdeu', { diag: true, center: 'O' }), caption: 'Lục giác đều ABCDEF: tâm O là giao điểm các đường chéo chính; A đối xứng với D qua O.' },
    { title: 'Đối xứng quanh ta', html: `<p>Lá cây, cánh bướm, bông tuyết (6 trục), mặt trống đồng, nhiều logo và công trình kiến trúc đều có tính đối xứng, tạo cảm giác cân đối, hài hòa.</p>` }
  ],
  summary: 'Nắm vững định nghĩa, cách kiểm tra, số trục và tâm đối xứng của các hình quen thuộc; biết vẽ hình đối xứng trên lưới ô vuông.',
  examples: [
    { title: 'Độ dài', problem: 'Lục giác đều ABCDEF có tâm O, cạnh 5 cm. Biết OA = AB. Tính AD.', solution: 'OA = 5 cm; O là trung điểm AD ⇒ AD = <b>10 cm</b>.' },
    { title: 'Đếm trên hình', problem: 'Hình ghép ở bước 2 (phần xanh cùng phần cam) có trục đối xứng d. Nó có thêm trục đối xứng thẳng đứng không?', solution: 'Đường thẳng đứng đi qua đỉnh lõm ở giữa (cách mép trái lưới 4 ô) chia hình thành hai nửa trái – phải chồng khít: mỗi đỉnh bên trái có một đỉnh bên phải cách đường đó bằng đúng số ô. Vậy <b>có</b>, hình có 2 trục đối xứng.' },
    { title: 'Nhận biết', problem: 'Trong các hình: bông tuyết, chiếc lá, chữ S, cánh quạt 3 cánh, hình nào có tâm đối xứng?', solution: '<b>Bông tuyết</b> (6 cánh) và <b>chữ S</b> có tâm đối xứng. Chiếc lá chỉ có trục; cánh quạt 3 cánh không có tâm đối xứng (quay 180° không trùng).' }
  ],
  exercises: [
    { question: 'Điểm A cách trục d 3 ô vuông về phía trên. Điểm A\' đối xứng với A qua d cách A bao nhiêu ô?', hints: ['A\' cách d 3 ô về phía dưới.', 'Cộng hai khoảng cách.'], solution: '<b>6 ô</b>.' },
    { question: 'Hình vuông ABCD có tâm O, AC = 12 cm. Tính OB.', hints: ['Hai đường chéo hình vuông bằng nhau: BD = 12 cm.', 'O là trung điểm BD.'], solution: 'OB = <b>6 cm</b>.' },
    { question: 'Kể tên các chữ cái in hoa trong từ “TOÁN” (bỏ dấu) có trục đối xứng dọc.', hints: ['Xét T, O, A, N.', 'N không có trục đối xứng.'], solution: '<b>T, O, A</b>.' }
  ],
  quiz: [
    { type: 'short', q: 'Lục giác đều có bao nhiêu trục đối xứng?', answer: '6', explain: '3 đường chéo chính và 3 đường nối trung điểm cạnh đối.' },
    { type: 'mcq', q: 'Hình nào không có tâm đối xứng?', options: ['Hình bình hành', 'Hình thoi', 'Tam giác đều', 'Đường tròn'], answer: 2, explain: 'Tam giác đều chỉ có trục.' },
    { type: 'short', q: 'Lục giác đều ABCDEF có tâm O, OA = 4 cm. Độ dài AD là bao nhiêu cm?', answer: '8', unit: 'cm', calc: '2*4', explain: 'O là trung điểm AD.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hình ghép (xanh + cam) ở bước 2 nhận đường thẳng d làm trục đối xứng.', answer: true, explain: 'Phần cam là ảnh đối xứng của phần xanh qua d.' },
    { type: 'short', q: 'Điểm M cách trục d là 5 cm. Khoảng cách từ M đến điểm đối xứng M\' qua d là bao nhiêu cm?', answer: '10', unit: 'cm', calc: '2*5', explain: '5 + 5 = 10 cm.' },
    { type: 'mcq', q: 'Chữ nào có cả trục đối xứng và tâm đối xứng?', options: ['X', 'Z', 'A', 'E'], answer: 0, explain: 'X có 2 trục và có tâm.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hình bình hành luôn có ít nhất một trục đối xứng.', answer: false, explain: 'Hình bình hành thông thường không có trục đối xứng.' },
    { type: 'short', q: 'Tổng số trục đối xứng của tam giác đều, hình vuông và hình bình hành (không phải chữ nhật, thoi) là bao nhiêu?', answer: '7', calc: '3+4+0', explain: '3 + 4 + 0 = 7.' }
  ]
});
})();
