/* Toán 7 – Bài 3. Luỹ thừa với số mũ tự nhiên của một số hữu tỉ. Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('toan-7/bai-3', {
  objectives: [
    'Mô tả được luỹ thừa với số mũ tự nhiên của một số hữu tỉ.',
    'Thực hiện được phép nhân, chia hai luỹ thừa cùng cơ số.',
    'Tính được luỹ thừa của một luỹ thừa.',
    'Xác định đúng dấu của luỹ thừa của một số âm.'
  ],
  intro: 'Ở lớp 6, em đã biết 2<sup>3</sup> = 2 · 2 · 2. Bây giờ cơ số có thể là phân số, số thập phân hay số âm như (−{{1|2}})<sup>3</sup>, (0,2)<sup>2</sup>…',
  steps: [
    { title: 'Định nghĩa luỹ thừa', html: `<p>Luỹ thừa bậc n của số hữu tỉ x (n ∈ ℕ, n &gt; 1) là tích của n thừa số x:</p>
      <p class="math">x<sup>n</sup> = x · x · … · x &nbsp; (n thừa số x)</p>
      <p>x gọi là <b>cơ số</b>, n gọi là <b>số mũ</b>. Quy ước: x<sup>1</sup> = x; x<sup>0</sup> = 1 (x ≠ 0).</p>
      <p>Với phân số: ({{a|b}})<sup>n</sup> = {{a<sup>n</sup>|b<sup>n</sup>}}. Ví dụ: ({{2|3}})<sup>2</sup> = {{4|9}}.</p>` },
    { title: 'Dấu của luỹ thừa số âm', html: `<ul><li>Số âm nâng lên luỹ thừa bậc <b>chẵn</b> → kết quả <b>dương</b>: (−0,5)<sup>2</sup> = 0,25.</li>
      <li>Số âm nâng lên luỹ thừa bậc <b>lẻ</b> → kết quả <b>âm</b>: (−{{2|3}})<sup>3</sup> = −{{8|27}}.</li></ul>
      <div class="box tip">Cẩn thận: (−3)<sup>2</sup> = 9 nhưng −3<sup>2</sup> = −9 (chỉ 3 được bình phương, dấu “−” đứng ngoài).</div>` },
    { title: 'Nhân, chia hai luỹ thừa cùng cơ số', html: `<p class="math">x<sup>m</sup> · x<sup>n</sup> = x<sup>m + n</sup></p>
      <p class="math">x<sup>m</sup> : x<sup>n</sup> = x<sup>m − n</sup> &nbsp; (x ≠ 0, m ≥ n)</p>
      <p>Ví dụ: ({{1|2}})<sup>3</sup> · ({{1|2}})<sup>2</sup> = ({{1|2}})<sup>5</sup> = {{1|32}}; &nbsp; (−3)<sup>6</sup> : (−3)<sup>4</sup> = (−3)<sup>2</sup> = 9.</p>` },
    { title: 'Luỹ thừa của luỹ thừa', html: `<p class="math">(x<sup>m</sup>)<sup>n</sup> = x<sup>m · n</sup></p>
      <p>Ví dụ: [(−{{1|2}})<sup>2</sup>]<sup>3</sup> = (−{{1|2}})<sup>6</sup> = {{1|64}}.</p>
      <div class="box note">Phân biệt: x<sup>2</sup> · x<sup>3</sup> = x<sup>5</sup> (cộng số mũ), còn (x<sup>2</sup>)<sup>3</sup> = x<sup>6</sup> (nhân số mũ).</div>` }
  ],
  summary: 'x<sup>m</sup> · x<sup>n</sup> = x<sup>m+n</sup>; x<sup>m</sup> : x<sup>n</sup> = x<sup>m−n</sup>; (x<sup>m</sup>)<sup>n</sup> = x<sup>m·n</sup>; x<sup>0</sup> = 1 (x ≠ 0). Số âm mũ chẵn → dương, mũ lẻ → âm.',
  examples: [
    { title: 'Tính luỹ thừa', problem: 'Tính: a) (−{{2|3}})<sup>3</sup>; &nbsp; b) (−0,5)<sup>2</sup>.', solution: 'a) (−{{2|3}})<sup>3</sup> = {{(−2)<sup>3</sup>|3<sup>3</sup>}} = −{{8|27}}.<br>b) (−0,5)<sup>2</sup> = (−0,5) · (−0,5) = 0,25.' },
    { title: 'Nhân, chia cùng cơ số', problem: 'Tính: a) ({{1|2}})<sup>3</sup> · ({{1|2}})<sup>2</sup>; &nbsp; b) (−3)<sup>6</sup> : (−3)<sup>4</sup>.', solution: 'a) ({{1|2}})<sup>3 + 2</sup> = ({{1|2}})<sup>5</sup> = {{1|32}}.<br>b) (−3)<sup>6 − 4</sup> = (−3)<sup>2</sup> = 9.' },
    { title: 'Luỹ thừa của luỹ thừa', problem: 'Viết [(0,2)<sup>2</sup>]<sup>3</sup> dưới dạng luỹ thừa của 0,2.', solution: '[(0,2)<sup>2</sup>]<sup>3</sup> = (0,2)<sup>2 · 3</sup> = (0,2)<sup>6</sup>.' }
  ],
  exercises: [
    { question: 'Viết số {{1|16}} dưới dạng luỹ thừa của {{1|2}} và dưới dạng luỹ thừa của {{1|4}}.', hints: ['16 = 2 · 2 · 2 · 2 = 2<sup>4</sup>.', '16 = 4 · 4 = 4<sup>2</sup>.'], solution: '{{1|16}} = ({{1|2}})<sup>4</sup> = ({{1|4}})<sup>2</sup>.' },
    { question: 'Tính (0,2)<sup>3</sup>.', hints: ['(0,2)<sup>3</sup> = 0,2 · 0,2 · 0,2.', '0,2 · 0,2 = 0,04.'], solution: '(0,2)<sup>3</sup> = 0,04 · 0,2 = 0,008.' },
    { question: 'Tìm x, biết: x : (−{{1|2}})<sup>3</sup> = −{{1|2}}.', hints: ['Số bị chia = thương × số chia: x = (−{{1|2}}) · (−{{1|2}})<sup>3</sup>.', 'Nhân hai luỹ thừa cùng cơ số: cộng số mũ, 1 + 3 = 4.'], solution: 'x = (−{{1|2}})<sup>1</sup> · (−{{1|2}})<sup>3</sup> = (−{{1|2}})<sup>4</sup> = {{1|16}}.' }
  ],
  quiz: [
    { type: 'short', calc: 'Math.pow(-3, 3)', q: 'Tính: (−3)<sup>3</sup>', answer: '-27', answerText: '−27', explain: '(−3) · (−3) · (−3) = −27 (mũ lẻ nên kết quả âm).' },
    { type: 'mcq', q: '({{2|3}})<sup>2</sup> bằng:', options: ['{{4|6}}', '{{4|9}}', '{{2|9}}', '{{4|3}}'], answer: 1, explain: '({{2|3}})<sup>2</sup> = {{2<sup>2</sup>|3<sup>2</sup>}} = {{4|9}}.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: (−{{1|2}})<sup>4</sup> là một số âm.', answer: false, explain: 'Số âm nâng lên luỹ thừa bậc chẵn cho kết quả dương: (−{{1|2}})<sup>4</sup> = {{1|16}}.' },
    { type: 'mcq', q: 'x<sup>5</sup> · x<sup>3</sup> bằng:', options: ['x<sup>15</sup>', 'x<sup>8</sup>', 'x<sup>2</sup>', '2x<sup>8</sup>'], answer: 1, explain: 'Nhân hai luỹ thừa cùng cơ số: giữ cơ số, cộng số mũ 5 + 3 = 8.' },
    { type: 'short', calc: 'Math.pow(1 / 3, 0)', q: 'Tính: ({{1|3}})<sup>0</sup>', answer: '1', explain: 'Quy ước: x<sup>0</sup> = 1 với mọi x ≠ 0.' },
    { type: 'mcq', q: '(x<sup>2</sup>)<sup>4</sup> bằng:', options: ['x<sup>6</sup>', 'x<sup>8</sup>', 'x<sup>16</sup>', '4x<sup>2</sup>'], answer: 1, explain: 'Luỹ thừa của luỹ thừa: nhân số mũ 2 · 4 = 8.' },
    { type: 'short', calc: 'Math.pow(5, 7) / Math.pow(5, 5)', q: 'Tính: 5<sup>7</sup> : 5<sup>5</sup>', answer: '25', explain: '5<sup>7 − 5</sup> = 5<sup>2</sup> = 25.' },
    { type: 'mcq', q: '(−0,1)<sup>3</sup> bằng:', options: ['0,001', '−0,001', '−0,01', '−0,3'], answer: 1, explain: '(−0,1)<sup>3</sup> = −0,001 (mũ lẻ nên âm; 0,1 · 0,1 · 0,1 = 0,001).' }
  ]
});
