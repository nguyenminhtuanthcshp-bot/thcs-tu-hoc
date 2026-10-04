/* Toán 6 – Chương VIII. Luyện tập chung (sau Bài 35). Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, C = S.C;
var fig = S.draw({ w: 420, h: 110, items: [{ ray: [40, 55, 380, 55], ext: 10 }, { pt: [40, 55, 'O', 0, 26], color: C.red }, { pt: [130, 55, 'A', 0, 26] }, { pt: [220, 55, 'M', 0, 26], color: C.orange }, { pt: [310, 55, 'B', 0, 26] }, { tick: [130, 55, 220, 55] }, { tick: [220, 55, 310, 55] }, { text: [398, 45, 'x'], bold: true, color: C.blue }], aria: 'Tia Ox với các điểm A, M, B' });
THCS.registerLesson('toan-6/c8-ltc-1', {
  objectives: [
    'Củng cố điểm, đường thẳng, ba điểm thẳng hàng, điểm nằm giữa, tia.',
    'Tính độ dài đoạn thẳng dựa vào AM + MB = AB và tính chất trung điểm.',
    'Đếm số đường thẳng, đoạn thẳng qua các điểm cho trước.'
  ],
  intro: 'Luyện tập Bài 32 – Bài 35. Luôn vẽ hình chính xác trước khi lập luận.',
  steps: [
    { title: 'Điểm, đường thẳng, tia', html: `<p>A ∈ d / A ∉ d; qua hai điểm có đúng một đường thẳng; tia gốc O; hai tia đối nhau.</p>` },
    { title: 'Điểm trên tia', html: `<p>Trên tia Ox, nếu OA &lt; OB thì A nằm giữa O và B, do đó AB = OB − OA.</p>`,
      svg: fig, caption: 'OA &lt; OB ⇒ A nằm giữa O và B; M là trung điểm AB.' },
    { title: 'Trung điểm', html: `<p>M là trung điểm AB ⇔ M nằm giữa A, B và MA = MB = {{AB|2}}.</p>` },
    { title: 'Đếm hình', html: `<p>n điểm, không có ba điểm nào thẳng hàng: số đường thẳng (hoặc đoạn thẳng) nối hai điểm là {{n · (n − 1)|2}}.</p>` }
  ],
  summary: 'Điểm – đường thẳng – tia – đoạn thẳng – trung điểm. Trên tia Ox, OA &lt; OB thì A nằm giữa O, B. Công thức đếm n(n − 1) : 2.',
  examples: [
    { title: 'Trên tia', problem: 'Trên tia Ox lấy A, B với OA = 2 cm, OB = 6 cm, M là trung điểm AB. Tính OM.', solution: 'AB = 4 cm, AM = 2 cm, OM = OA + AM = <b>4 cm</b>.' },
    { title: 'Hai tia đối', problem: 'Trên đường thẳng xy lấy O. Trên tia Ox lấy A với OA = 3 cm, trên tia Oy lấy B với OB = 5 cm. Tính AB.', solution: 'A và B khác phía đối với O nên O nằm giữa A và B: AB = 3 + 5 = <b>8 cm</b>.' },
    { title: 'Đếm', problem: 'Cho 7 điểm, không có ba điểm nào thẳng hàng. Có bao nhiêu đoạn thẳng nối hai trong bảy điểm?', solution: '7 · 6 : 2 = <b>21</b> đoạn thẳng.' }
  ],
  exercises: [
    { question: 'Trên tia Ox lấy M, N sao cho OM = 4 cm, ON = 10 cm. Tính MN và cho biết M có phải trung điểm ON không.', hints: ['MN = ON − OM.', 'So sánh OM với MN.'], solution: 'MN = 6 cm ≠ OM = 4 cm ⇒ M <b>không</b> là trung điểm ON.' },
    { question: 'AB = 12 cm, C nằm giữa A và B với AC = 4 cm. Gọi M, N lần lượt là trung điểm AC, CB. Tính MN.', hints: ['MC = 2 cm, CB = 8 cm, CN = 4 cm.', 'MN = MC + CN.'], solution: 'MN = 2 + 4 = <b>6 cm</b> (bằng nửa AB).' },
    { question: 'Có bao nhiêu đường thẳng đi qua 2 trong 4 điểm A, B, C, D, biết A, B, C thẳng hàng và D nằm ngoài đường thẳng đó?', hints: ['A, B, C chỉ tạo 1 đường thẳng.', 'D nối với A, B, C tạo thêm 3 đường.'], solution: '1 + 3 = <b>4 đường thẳng</b>.' }
  ],
  quiz: [
    { type: 'short', q: 'Trên tia Ox, OA = 3 cm, OB = 9 cm. Tính AB (cm).', answer: '6', unit: 'cm', calc: '9-3', explain: 'AB = 9 − 3 = 6.' },
    { type: 'short', q: 'O nằm giữa A và B, OA = 2,5 cm, OB = 3,5 cm. Tính AB (cm).', answer: '6', unit: 'cm', calc: '2.5+3.5', explain: 'AB = OA + OB = 6.' },
    { type: 'short', q: 'M là trung điểm AB, AB = 11 cm. Tính MB (cm).', answer: '5,5', unit: 'cm', calc: '11/2', explain: '11 : 2 = 5,5.' },
    { type: 'mcq', q: 'Cho 8 điểm, không có ba điểm nào thẳng hàng. Số đường thẳng đi qua hai điểm là:', options: ['16', '28', '56', '64'], answer: 1, calc: '8*7/2', explain: '8 · 7 : 2 = 28.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hai tia Ox và Oy đối nhau thì x, O, y thẳng hàng.', answer: true, explain: 'Hai tia đối nhau tạo thành đường thẳng xy.' },
    { type: 'mcq', q: 'A, B, C thẳng hàng; AB = 3 cm, BC = 5 cm, AC = 8 cm. Điểm nằm giữa là:', options: ['A', 'B', 'C', 'Không xác định'], answer: 1, explain: 'AB + BC = AC nên B nằm giữa A và C.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Trung điểm của đoạn thẳng AB nằm trên tia AB.', answer: true, explain: 'Trung điểm nằm giữa A và B nên thuộc tia AB.' },
    { type: 'short', q: 'AB = 16 cm, M là trung điểm AB, I là trung điểm MB. Tính AI (cm).', answer: '12', unit: 'cm', calc: '8+4', explain: 'AM = 8, MI = 4, AI = 12.' }
  ]
});
})();
