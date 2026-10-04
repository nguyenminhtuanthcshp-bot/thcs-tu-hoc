/* Toán 6 – Bài 34. Đoạn thẳng. Độ dài đoạn thẳng. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, C = S.C;
function ruler(x0, y, cm, px) { var it = [{ poly: [[x0 - 10, y], [x0 + cm * px + 10, y], [x0 + cm * px + 10, y + 30], [x0 - 10, y + 30]], fill: C.yellowL, color: C.muted, width: 1.2 }];
  for (var k = 0; k <= cm * 10; k++) { var x = x0 + k * px / 10, big = k % 10 === 0, mid = k % 5 === 0; it.push({ seg: [x, y, x, y + (big ? 14 : mid ? 10 : 6)], color: C.muted, width: big ? 1.4 : 0.8 }); if (big) it.push({ text: [x, y + 26, String(k / 10)], size: 10, color: C.muted }); }
  return it; }
var seg = S.draw({ w: 420, h: 120, items: [{ seg: [60, 40, 340, 40], color: C.blue, width: 3 }, { pt: [60, 40, 'A', 0, -12] }, { pt: [340, 40, 'B', 0, -12] }].concat(ruler(60, 52, 5, 56), [{ text: [390, 72, 'cm'], size: 12, color: C.muted }]), aria: 'Đo đoạn thẳng AB dài 5 cm bằng thước' });
var sum = S.draw({ w: 420, h: 110, items: [{ seg: [50, 60, 370, 60], width: 2.4 }, { pt: [50, 60, 'A', 0, 24] }, { pt: [170, 60, 'M', 0, 24], color: C.orange }, { pt: [370, 60, 'B', 0, 24] }, { text: [110, 45, '3 cm'], color: C.orange, bold: true, size: 13 }, { text: [270, 45, '5 cm'], color: C.blue, bold: true, size: 13 }, { text: [210, 104, 'AB = AM + MB = 8 cm'], bold: true, size: 13 }], aria: 'M nằm giữa A và B nên AM + MB = AB' });
THCS.registerLesson('toan-6/bai-34', {
  objectives: [
    'Nhận biết đoạn thẳng, đầu mút; vẽ và gọi tên đoạn thẳng.',
    'Đo được độ dài đoạn thẳng bằng thước; so sánh hai đoạn thẳng qua độ dài.',
    'Vận dụng: nếu M nằm giữa A và B thì AM + MB = AB để tính độ dài.'
  ],
  intro: 'Chiếc thước kẻ, cạnh bàn, sợi dây căng giữa hai cọc đều gợi hình ảnh đoạn thẳng. Khác với đường thẳng, đoạn thẳng có hai đầu và đo được độ dài.',
  steps: [
    { title: 'Đoạn thẳng', html: `<p>Đoạn thẳng AB là hình gồm điểm A, điểm B và tất cả các điểm nằm giữa A và B. A, B là hai <b>đầu mút</b>. Đoạn thẳng AB còn gọi là đoạn thẳng BA.</p>` },
    { title: 'Độ dài đoạn thẳng', html: `<p>Mỗi đoạn thẳng có một độ dài, là một số dương. Đặt vạch 0 của thước trùng A, đọc vạch trùng B. Kí hiệu độ dài là AB (ví dụ AB = 5 cm).</p><p>Khi A trùng B, ta nói khoảng cách giữa A và B bằng 0.</p>`,
      svg: seg, caption: 'Đoạn thẳng AB dài 5 cm.' },
    { title: 'So sánh hai đoạn thẳng', html: `<p>Hai đoạn thẳng bằng nhau nếu có cùng độ dài: AB = CD. Đoạn nào có độ dài lớn hơn thì dài hơn: nếu AB = 5 cm, EF = 4 cm thì AB &gt; EF.</p>` },
    { title: 'Cộng độ dài đoạn thẳng', html: `<p>Nếu điểm M nằm giữa hai điểm A và B thì <span class="math">AM + MB = AB</span>. Từ đó có thể tính một đoạn khi biết hai đoạn còn lại: MB = AB − AM.</p>`,
      svg: sum, caption: 'AM = 3 cm, MB = 5 cm ⇒ AB = 8 cm.' }
  ],
  summary: 'Đoạn thẳng AB gồm A, B và mọi điểm nằm giữa A, B. Mỗi đoạn thẳng có độ dài dương. So sánh đoạn thẳng qua độ dài. M nằm giữa A và B thì AM + MB = AB.',
  examples: [
    { title: 'Tính độ dài', problem: 'M nằm giữa A và B, AB = 10 cm, AM = 4 cm. Tính MB.', solution: 'AM + MB = AB ⇒ MB = 10 − 4 = <b>6 cm</b>.' },
    { title: 'So sánh', problem: 'Cho AB = 4,5 cm; CD = 45 mm; EF = 5 cm. So sánh các đoạn thẳng.', solution: 'Đổi CD = 4,5 cm. Vậy <b>AB = CD &lt; EF</b>.' },
    { title: 'Đếm đoạn thẳng', problem: 'Trên đường thẳng có 4 điểm A, B, C, D. Có bao nhiêu đoạn thẳng có hai đầu mút là hai trong bốn điểm đó?', solution: 'AB, AC, AD, BC, BD, CD: <b>6 đoạn thẳng</b>.' }
  ],
  exercises: [
    { question: 'Cho ba điểm thẳng hàng A, B, C với B nằm giữa A và C. AB = 3,5 cm; BC = 2,5 cm. Tính AC.', hints: ['B nằm giữa A và C.', 'AC = AB + BC.'], solution: 'AC = <b>6 cm</b>.' },
    { question: 'Trên tia Ox lấy A, B sao cho OA = 3 cm, OB = 7 cm. Tính AB.', hints: ['Trên tia Ox, OA &lt; OB nên A nằm giữa O và B.', 'AB = OB − OA.'], solution: 'AB = <b>4 cm</b>.' },
    { question: 'Có 5 điểm, không có ba điểm nào thẳng hàng. Vẽ được bao nhiêu đoạn thẳng nối hai trong năm điểm?', hints: ['Mỗi điểm nối với 4 điểm còn lại.', 'Chia 2 vì mỗi đoạn được đếm hai lần.'], solution: '5 · 4 : 2 = <b>10 đoạn thẳng</b>.' }
  ],
  quiz: [
    { type: 'short', q: 'M nằm giữa A và B, AM = 2 cm, MB = 5 cm. Tính AB (cm).', answer: '7', unit: 'cm', calc: '2+5', explain: 'AB = AM + MB = 7 cm.' },
    { type: 'short', q: 'M nằm giữa A và B, AB = 9 cm, AM = 3,5 cm. Tính MB (cm).', answer: '5,5', unit: 'cm', calc: '9-3.5', explain: 'MB = 9 − 3,5 = 5,5 cm.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Đoạn thẳng AB và đoạn thẳng BA là một.', answer: true, explain: 'Cùng hai đầu mút A, B.' },
    { type: 'mcq', q: 'Đoạn thẳng nào dài nhất: AB = 6 cm, CD = 58 mm, EF = 0,7 dm?', options: ['AB', 'CD', 'EF', 'Bằng nhau'], answer: 2, explain: 'EF = 7 cm lớn nhất.' },
    { type: 'short', q: 'Trên tia Ox, OA = 2 cm, OB = 8 cm. Tính AB (cm).', answer: '6', unit: 'cm', calc: '8-2', explain: 'A nằm giữa O và B: AB = 6 cm.' },
    { type: 'mcq', q: 'Có 4 điểm trên một đường thẳng. Số đoạn thẳng có đầu mút là hai trong bốn điểm là:', options: ['4', '6', '8', '12'], answer: 1, calc: '4*3/2', explain: '4 · 3 : 2 = 6.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Độ dài đoạn thẳng có thể là số âm.', answer: false, explain: 'Độ dài là số dương.' },
    { type: 'short', q: 'Có 6 điểm, không có ba điểm nào thẳng hàng. Có bao nhiêu đoạn thẳng nối hai trong sáu điểm?', answer: '15', calc: '6*5/2', explain: '6 · 5 : 2 = 15.' }
  ]
});
})();
