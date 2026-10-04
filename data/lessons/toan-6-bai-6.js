/* Toán 6 – Bài 6. Luỹ thừa với số mũ tự nhiên. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('toan-6/bai-6', {
  objectives: [
    'Hiểu luỹ thừa là tích của nhiều thừa số bằng nhau; gọi đúng tên cơ số, số mũ.',
    'Tính được bình phương, lập phương và các luỹ thừa đơn giản.',
    'Thực hiện được phép nhân, phép chia hai luỹ thừa cùng cơ số.',
    'Viết được số tự nhiên dưới dạng tổng các luỹ thừa của 10.'
  ],
  intro: 'Một tờ giấy gấp đôi 1 lần được 2 lớp, gấp đôi 5 lần được 2 · 2 · 2 · 2 · 2 lớp. Viết như vậy khá dài! Luỹ thừa giúp ta viết gọn tích của nhiều thừa số bằng nhau.',
  steps: [
    { title: 'Luỹ thừa là gì?', html: `<p>Luỹ thừa bậc n của a là tích của n thừa số bằng nhau, mỗi thừa số bằng a:</p>
      <p class="math">a<sup>n</sup> = a · a · … · a (n thừa số a), n ∈ ℕ*</p>
      <p>a gọi là <b>cơ số</b>, n gọi là <b>số mũ</b>. Đọc a<sup>n</sup> là “a mũ n”. Quy ước: a<sup>1</sup> = a.</p>
      <p>Chú ý: 2<sup>3</sup> = 2 · 2 · 2 = 8, <b>không phải</b> 2 · 3 = 6.</p>` },
    { title: 'Bình phương và lập phương', html: `<p>a<sup>2</sup> đọc là “a bình phương” – đó chính là diện tích hình vuông cạnh a. a<sup>3</sup> đọc là “a lập phương” – thể tích hình lập phương cạnh a.</p>`,
      svg: S.draw({ w: 200, h: 140, items: [{ grid: [50, 12, 3, 3, 36], filled: 9, fill: S.C.greenL }, { text: [100, 136, '3 × 3 = 3² = 9 ô'], size: 14 }] }), caption: 'Hình vuông cạnh 3 ô có 3<sup>2</sup> = 9 ô vuông.' },
    { title: 'Nhân hai luỹ thừa cùng cơ số', html: `<p class="math">a<sup>m</sup> · a<sup>n</sup> = a<sup>m + n</sup></p>
      <p>Giữ nguyên cơ số, <b>cộng</b> các số mũ. Ví dụ: 3<sup>2</sup> · 3<sup>4</sup> = 3<sup>6</sup> (vì có tất cả 2 + 4 = 6 thừa số 3).</p>` },
    { title: 'Chia hai luỹ thừa cùng cơ số', html: `<p class="math">a<sup>m</sup> : a<sup>n</sup> = a<sup>m − n</sup> (a ≠ 0, m ≥ n)</p>
      <p>Giữ nguyên cơ số, <b>trừ</b> các số mũ. Quy ước <b>a<sup>0</sup> = 1</b> (a ≠ 0). Ví dụ: 5<sup>7</sup> : 5<sup>3</sup> = 5<sup>4</sup>; 7<sup>5</sup> : 7<sup>5</sup> = 7<sup>0</sup> = 1.</p>` },
    { title: 'Luỹ thừa của 10 và cấu tạo số', html: `<p>10<sup>n</sup> là số 1 theo sau bởi n chữ số 0: 10<sup>3</sup> = 1 000; 10<sup>6</sup> = 1 000 000.</p>
      <p>Mọi số tự nhiên viết được thành tổng các luỹ thừa của 10: <span class="math">4 507 = 4 · 10<sup>3</sup> + 5 · 10<sup>2</sup> + 0 · 10 + 7 · 10<sup>0</sup></span>.</p>` }
  ],
  summary: 'a<sup>n</sup> là tích n thừa số a (a: cơ số, n: số mũ). a<sup>m</sup> · a<sup>n</sup> = a<sup>m+n</sup>; a<sup>m</sup> : a<sup>n</sup> = a<sup>m−n</sup> (a ≠ 0, m ≥ n); a<sup>1</sup> = a; a<sup>0</sup> = 1.',
  examples: [
    { title: 'Tính luỹ thừa', problem: 'Tính 2<sup>6</sup>, 5<sup>3</sup> và 10<sup>4</sup>.', solution: '2<sup>6</sup> = 2 · 2 · 2 · 2 · 2 · 2 = <b>64</b>; 5<sup>3</sup> = 5 · 5 · 5 = <b>125</b>; 10<sup>4</sup> = <b>10 000</b>.' },
    { title: 'Viết gọn', problem: 'Viết kết quả dưới dạng một luỹ thừa: a) 7<sup>3</sup> · 7<sup>5</sup>; b) 2<sup>10</sup> : 2<sup>4</sup>; c) 3 · 3<sup>2</sup> · 3<sup>3</sup>.', solution: 'a) 7<sup>8</sup>; b) 2<sup>6</sup>; c) 3<sup>1 + 2 + 3</sup> = 3<sup>6</sup>.' },
    { title: 'Bài toán thực tế', problem: 'Một loại vi khuẩn cứ 1 giờ lại nhân đôi số lượng. Ban đầu có 1 con, sau 8 giờ có bao nhiêu con?', solution: 'Sau mỗi giờ số vi khuẩn nhân với 2. Sau 8 giờ: 2<sup>8</sup> = <b>256 con</b>.' }
  ],
  exercises: [
    { question: 'Viết các tích sau dưới dạng luỹ thừa: a) 6 · 6 · 6 · 6; b) 2 · 2 · 2 · 3 · 3.', hints: ['Đếm số thừa số bằng nhau.', 'Trong câu b có hai loại cơ số khác nhau: viết thành tích của hai luỹ thừa.'], solution: 'a) 6<sup>4</sup>; b) 2<sup>3</sup> · 3<sup>2</sup>.' },
    { question: 'Tìm số tự nhiên n biết 3<sup>n</sup> = 81.', hints: ['Lần lượt tính 3<sup>1</sup>, 3<sup>2</sup>, 3<sup>3</sup>, …', '3<sup>4</sup> = 81.'], solution: '81 = 3 · 3 · 3 · 3 = 3<sup>4</sup> nên <b>n = 4</b>.' },
    { question: 'Tính giá trị: 2<sup>3</sup> · 2<sup>2</sup> − 5<sup>2</sup>.', hints: ['2<sup>3</sup> · 2<sup>2</sup> = 2<sup>5</sup>.', '2<sup>5</sup> = 32 và 5<sup>2</sup> = 25.'], solution: '32 − 25 = <b>7</b>.' }
  ],
  quiz: [
    { type: 'short', q: 'Tính 3<sup>4</sup>.', answer: '81', calc: 'Math.pow(3,4)', explain: '3 · 3 · 3 · 3 = 81.' },
    { type: 'mcq', q: 'Trong luỹ thừa 5<sup>7</sup>, số mũ là:', options: ['5', '7', '35', '12'], answer: 1, explain: 'Số viết nhỏ phía trên bên phải là số mũ: 7.' },
    { type: 'mcq', q: '4<sup>3</sup> · 4<sup>5</sup> bằng:', options: ['4<sup>15</sup>', '4<sup>8</sup>', '16<sup>8</sup>', '4<sup>2</sup>'], answer: 1, explain: 'Cộng số mũ: 3 + 5 = 8.' },
    { type: 'short', q: 'Tính 9<sup>6</sup> : 9<sup>4</sup>.', answer: '81', calc: 'Math.pow(9,6)/Math.pow(9,4)', explain: '9<sup>6 − 4</sup> = 9<sup>2</sup> = 81.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: 2<sup>3</sup> = 6.', answer: false, explain: '2<sup>3</sup> = 2 · 2 · 2 = 8.' },
    { type: 'short', q: 'Giá trị của 2 024<sup>0</sup> là bao nhiêu?', answer: '1', calc: 'Math.pow(2024,0)', explain: 'Quy ước a<sup>0</sup> = 1 với a ≠ 0.' },
    { type: 'short', q: 'Tìm n biết 2<sup>n</sup> = 32.', answer: '5', calc: 'Math.log2(32)', explain: '2<sup>5</sup> = 32.' },
    { type: 'mcq', q: 'Số 10<sup>5</sup> có bao nhiêu chữ số 0?', options: ['4', '5', '6', '10'], answer: 1, calc: '5', explain: '10<sup>5</sup> = 100 000 có 5 chữ số 0.' }
  ]
});
})();
