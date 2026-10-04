/* Toán 7 – Bài 16. Tam giác cân. Đường trung trực của đoạn thẳng. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, C = S.C;
THCS.registerLesson('toan-7/bai-16', {
  objectives: [
    'Nhận biết tam giác cân, tam giác đều; nắm tính chất về góc của tam giác cân, tam giác đều.',
    'Nhận biết được một tam giác là tam giác cân nhờ dấu hiệu về cạnh hoặc góc.',
    'Hiểu đường trung trực của đoạn thẳng và tính chất các điểm nằm trên đường trung trực.'
  ],
  intro: 'Mái nhà, biển báo giao thông hình tam giác, chiếc móc treo quần áo… đều có dạng tam giác có hai cạnh bằng nhau. Chúng có những tính chất rất đẹp về đối xứng.',
  steps: [
    { title: 'Tam giác cân', html: `<p><b>Tam giác cân</b> là tam giác có hai cạnh bằng nhau. ΔABC cân tại A (AB = AC): A là <b>đỉnh</b>, AB, AC là <b>cạnh bên</b>, BC là <b>cạnh đáy</b>, ∠B và ∠C là hai <b>góc ở đáy</b>, ∠A là <b>góc ở đỉnh</b>.</p>
      <div class="box note">Trong tam giác cân, hai góc ở đáy bằng nhau. Ngược lại, tam giác có hai góc bằng nhau là tam giác cân.</div>`,
      svg: S.geo({ w: 360, h: 220, P: { A: [180, 25], B: [80, 195], C: [280, 195], H: [180, 195] }, seg: ['AB', 'BC', 'CA', { s: 'AH', dash: true, color: C.muted }], right: ['AHC'], ticks: [['AB', 1], ['AC', 1], ['BH', 2], ['HC', 2]], arcs: [['ABC', 1, '', C.orange, 26], ['BCA', 1, '', C.orange, 26]], off: { A: [0, -10], H: [0, 22] } }),
      caption: 'ΔABC cân tại A: AB = AC ⇒ ∠B = ∠C. Đường AH vừa là đường cao vừa chia đôi cạnh đáy.' },
    { title: 'Tính góc trong tam giác cân', html: `<p class="math">∠B = ∠C = {{180° − ∠A|2}}; &nbsp; ∠A = 180° − 2∠B</p>
      <p><b>Tam giác vuông cân</b>: vuông tại A và AB = AC; mỗi góc ở đáy bằng 45°.</p>
      <p><b>Tam giác đều</b>: ba cạnh bằng nhau; mỗi góc bằng 60°. Tam giác cân có một góc 60° là tam giác đều.</p>` },
    { title: 'Đường trung trực của đoạn thẳng', html: `<p>Đường thẳng vuông góc với đoạn thẳng AB tại trung điểm M của nó gọi là <b>đường trung trực</b> của AB.</p>
      <div class="box note">Điểm nằm trên đường trung trực của một đoạn thẳng thì cách đều hai mút của đoạn thẳng đó: P ∈ d ⇒ PA = PB. Ngược lại, điểm cách đều hai mút thì nằm trên đường trung trực.</div>`,
      svg: S.geo({ w: 360, h: 240, P: { A: [60, 170], B: [300, 170], M: [180, 170], P: [180, 50], Q: [180, 20], R: [180, 225] }, seg: ['AB', { s: 'QR', color: C.green, width: 2.5 }, { s: 'PA', dash: true, color: C.blue }, { s: 'PB', dash: true, color: C.blue }], hide: ['Q', 'R'], right: ['BMP'], ticks: [['AM', 1], ['MB', 1], ['PA', 2], ['PB', 2]], text: [[192, 30, 'd', C.green, true, 16]], off: { M: [-14, 22], P: [16, -4] } }),
      caption: 'd là đường trung trực của AB; mọi điểm P trên d đều có PA = PB.' },
    { title: 'Vẽ đường trung trực bằng thước và compa', html: `<ol><li>Quay hai cung tròn tâm A và tâm B cùng bán kính lớn hơn {{AB|2}}; hai cung cắt nhau tại P và Q.</li><li>Kẻ đường thẳng PQ: đó là đường trung trực của AB (vì P, Q cùng cách đều A và B).</li></ol>
      <p>Cách này cũng cho ta trung điểm của AB (giao điểm của PQ và AB).</p>` }
  ],
  summary: 'Tam giác cân: hai cạnh bên bằng nhau ⇔ hai góc ở đáy bằng nhau. Tam giác đều: ba góc 60°. Đường trung trực của AB vuông góc với AB tại trung điểm; điểm trên nó cách đều A và B.',
  examples: [
    { title: 'Góc ở đáy', problem: 'ΔABC cân tại A có ∠A = 40°. Tính ∠B, ∠C.', solution: '∠B = ∠C = (180° − 40°) : 2 = 70°.' },
    { title: 'Góc ở đỉnh', problem: 'ΔMNP cân tại M có ∠N = 65°. Tính ∠M.', solution: '∠P = ∠N = 65° ⇒ ∠M = 180° − 130° = 50°.' },
    { title: 'Trung trực', problem: 'Điểm P nằm trên đường trung trực của AB, PA = 7 cm, AB = 6 cm. Tính chu vi ΔPAB.', solution: 'PB = PA = 7 cm ⇒ chu vi = 7 + 7 + 6 = 20 (cm).' }
  ],
  exercises: [
    { question: 'ΔABC cân tại A, ∠B = 50°. Tính ∠A và góc ngoài tại đỉnh C.', hints: ['∠C = ∠B.', 'Góc ngoài tại C = 180° − ∠C.'], solution: '∠A = 80°; góc ngoài tại C = 130°.' },
    { question: 'Cho ΔABC có ∠B = ∠C = 60°. Tam giác ABC là tam giác gì?', hints: ['Tính ∠A.', 'Ba góc bằng nhau.'], solution: '∠A = 60°: ba góc bằng nhau ⇒ ΔABC đều.' },
    { question: 'Hai điểm M, N cùng cách đều hai mút của đoạn AB (M ≠ N). Chứng tỏ MN là đường trung trực của AB.', hints: ['Điểm cách đều hai mút thì nằm trên đường trung trực.', 'Qua hai điểm có đúng một đường thẳng.'], solution: 'M, N đều thuộc đường trung trực của AB, mà qua hai điểm chỉ có một đường thẳng ⇒ MN là đường trung trực của AB.' }
  ],
  quiz: [
    { type: 'short', calc: '(180 - 40) / 2', q: 'Tam giác cân có góc ở đỉnh 40°. Mỗi góc ở đáy bằng bao nhiêu độ?', unit: 'độ', answer: '70', explain: '(180° − 40°) : 2 = 70°.' },
    { type: 'short', calc: '180 - 2 * 65', q: 'ΔMNP cân tại M, ∠N = 65°. Tính ∠M (độ).', unit: 'độ', answer: '50', explain: '180° − 2 · 65° = 50°.' },
    { type: 'mcq', q: 'Mỗi góc của tam giác đều bằng:', options: ['45°', '60°', '90°', '30°'], answer: 1, explain: '180° : 3 = 60°.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tam giác có hai góc bằng nhau là tam giác cân.', answer: true, explain: 'Dấu hiệu nhận biết tam giác cân.' },
    { type: 'short', calc: '7 + 7 + 6', q: 'P thuộc đường trung trực của AB, PA = 7 cm, AB = 6 cm. Chu vi ΔPAB là bao nhiêu cm?', unit: 'cm', answer: '20', explain: 'PB = PA = 7.' },
    { type: 'short', calc: '(180 - 90) / 2', q: 'Tam giác vuông cân có mỗi góc nhọn bằng bao nhiêu độ?', unit: 'độ', answer: '45', explain: '90° : 2 = 45°.' },
    { type: 'mcq', q: 'Đường trung trực của đoạn AB là đường thẳng:', options: ['đi qua A và vuông góc với AB', 'đi qua trung điểm của AB', 'vuông góc với AB tại trung điểm của AB', 'song song với AB'], answer: 2, explain: 'Định nghĩa đường trung trực.' },
    { type: 'short', calc: '180 - 50', q: 'ΔABC cân tại A, ∠B = 50°. Góc ngoài tại đỉnh C bằng bao nhiêu độ?', unit: 'độ', answer: '130', explain: '∠C = 50° ⇒ góc ngoài 130°.' }
  ]
});
})();
