/* Toán 7 – Chương I. Luyện tập chung (sau Bài 4). Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('toan-7/c1-ltc-2', {
  objectives: [
    'Vận dụng các công thức luỹ thừa của số hữu tỉ để tính và rút gọn.',
    'Tính giá trị biểu thức đúng thứ tự, kết hợp quy tắc dấu ngoặc.',
    'Tìm x bằng quy tắc chuyển vế, kể cả khi x nằm trong luỹ thừa đơn giản.'
  ],
  intro: 'Luyện tập Bài 3 và Bài 4: luỹ thừa, thứ tự phép tính, dấu ngoặc và chuyển vế. Làm chậm mà chắc, ghi rõ từng bước.',
  steps: [
    { title: 'Bảng công thức luỹ thừa', html: `<table class="tbl"><tr><th>Công thức</th><th>Ví dụ</th></tr>
      <tr><td>x<sup>m</sup> · x<sup>n</sup> = x<sup>m + n</sup></td><td>({{1|2}})<sup>2</sup> · ({{1|2}})<sup>3</sup> = ({{1|2}})<sup>5</sup></td></tr>
      <tr><td>x<sup>m</sup> : x<sup>n</sup> = x<sup>m − n</sup> (x ≠ 0, m ≥ n)</td><td>(−3)<sup>5</sup> : (−3)<sup>3</sup> = (−3)<sup>2</sup> = 9</td></tr>
      <tr><td>(x<sup>m</sup>)<sup>n</sup> = x<sup>m · n</sup></td><td>(2<sup>2</sup>)<sup>3</sup> = 2<sup>6</sup> = 64</td></tr>
      <tr><td>(x · y)<sup>n</sup> = x<sup>n</sup> · y<sup>n</sup></td><td>(0,5 · 4)<sup>3</sup> = 2<sup>3</sup> = 8</td></tr>
      <tr><td>({{x|y}})<sup>n</sup> = {{x<sup>n</sup>|y<sup>n</sup>}}</td><td>({{2|3}})<sup>2</sup> = {{4|9}}</td></tr></table>` },
    { title: 'Dấu của luỹ thừa số âm', html: `<p>Luỹ thừa <b>bậc chẵn</b> của số âm là số dương; luỹ thừa <b>bậc lẻ</b> của số âm là số âm.</p>
      <p>Chú ý: (−2)<sup>4</sup> = 16 nhưng −2<sup>4</sup> = −16 (chỉ 2 được nâng lên luỹ thừa, dấu “−” đứng ngoài).</p>` },
    { title: 'Thứ tự và dấu ngoặc', html: `<p>Luỹ thừa → nhân, chia → cộng, trừ; ngoặc ( ) → [ ] → { }.</p><p>Khi bỏ ngoặc có dấu “−” đằng trước, đổi dấu mọi số hạng trong ngoặc. Nhóm các số hạng “dễ cộng” để tính nhanh.</p>` },
    { title: 'Tìm x trong luỹ thừa', html: `<p>Nếu x<sup>2</sup> = a<sup>2</sup> thì x = a hoặc x = −a. Nếu x<sup>3</sup> = a<sup>3</sup> thì x = a.</p>
      <p>Ví dụ: (x − 1)<sup>2</sup> = {{1|4}} = ({{1|2}})<sup>2</sup> ⇒ x − 1 = {{1|2}} hoặc x − 1 = −{{1|2}} ⇒ x = {{3|2}} hoặc x = {{1|2}}.</p>
      <div class="box note">Đừng quên nghiệm âm khi số mũ là số chẵn!</div>` }
  ],
  summary: 'Nhớ 5 công thức luỹ thừa và quy tắc dấu (mũ chẵn dương, mũ lẻ giữ dấu). Tính đúng thứ tự; bỏ ngoặc “−” thì đổi dấu; chuyển vế thì đổi dấu; mũ chẵn có hai giá trị x đối nhau.',
  examples: [
    { title: 'Rút gọn luỹ thừa', problem: 'Tính: {{2<sup>7</sup> · 9<sup>3</sup>|6<sup>5</sup> · 8<sup>2</sup>}}.', solution: 'Phân tích: 9<sup>3</sup> = 3<sup>6</sup>; 6<sup>5</sup> = 2<sup>5</sup> · 3<sup>5</sup>; 8<sup>2</sup> = 2<sup>6</sup>.<br>Biểu thức = {{2<sup>7</sup> · 3<sup>6</sup>|2<sup>11</sup> · 3<sup>5</sup>}} = {{3|2<sup>4</sup>}} = {{3|16}}.' },
    { title: 'Biểu thức có ngoặc', problem: 'Tính: 1 − [({{1|2}})<sup>2</sup> + {{3|4}} : 3].', solution: '({{1|2}})<sup>2</sup> = {{1|4}}; {{3|4}} : 3 = {{1|4}}; trong ngoặc: {{1|4}} + {{1|4}} = {{1|2}}.<br>Kết quả: 1 − {{1|2}} = {{1|2}}.' },
    { title: 'Tìm x', problem: 'Tìm x, biết: (2x − 1)<sup>3</sup> = −8.', solution: '−8 = (−2)<sup>3</sup> nên 2x − 1 = −2 ⇒ 2x = −1 ⇒ x = −{{1|2}}.' }
  ],
  exercises: [
    { question: 'Tính: (−{{2|3}})<sup>3</sup> · ({{3|2}})<sup>2</sup>.', hints: ['(−{{2|3}})<sup>3</sup> = −{{8|27}}; ({{3|2}})<sup>2</sup> = {{9|4}}.', 'Nhân rồi rút gọn; tích mang dấu âm.'], solution: '−{{8|27}} · {{9|4}} = −{{72|108}} = −{{2|3}}.' },
    { question: 'Tìm x, biết: x<sup>2</sup> − {{1|9}} = 0.', hints: ['Chuyển vế: x<sup>2</sup> = {{1|9}}.', '{{1|9}} = ({{1|3}})<sup>2</sup> = (−{{1|3}})<sup>2</sup>.'], solution: 'x = {{1|3}} hoặc x = −{{1|3}}.' },
    { question: 'Tính hợp lí: {{7|13}} − ({{5|8}} + {{7|13}}) + {{13|8}}.', hints: ['Bỏ ngoặc có dấu “−”: đổi dấu {{5|8}} và {{7|13}}.', 'Nhóm {{7|13}} với −{{7|13}}, nhóm −{{5|8}} với {{13|8}}.'], solution: '{{7|13}} − {{5|8}} − {{7|13}} + {{13|8}} = 0 + {{8|8}} = 1.' }
  ],
  quiz: [
    { type: 'short', calc: 'Math.pow(-3, 5) / Math.pow(-3, 3)', q: 'Tính: (−3)<sup>5</sup> : (−3)<sup>3</sup>.', answer: '9', explain: '(−3)<sup>5 − 3</sup> = (−3)<sup>2</sup> = 9.' },
    { type: 'mcq', calc: '-Math.pow(2, 4)', q: 'Giá trị của −2<sup>4</sup> là:', options: ['16', '−16', '−8', '8'], answer: 1, explain: 'Chỉ 2 được nâng lên luỹ thừa: −(2<sup>4</sup>) = −16.' },
    { type: 'short', calc: 'Math.pow(2, 7) * Math.pow(9, 3) / (Math.pow(6, 5) * Math.pow(8, 2))', requireSimplest: true, q: 'Tính: {{2<sup>7</sup> · 9<sup>3</sup>|6<sup>5</sup> · 8<sup>2</sup>}} (dạng a/b tối giản).', answer: ['3/16'], answerText: '3/16', explain: 'Đưa về cơ số 2 và 3: {{2<sup>7</sup> · 3<sup>6</sup>|2<sup>11</sup> · 3<sup>5</sup>}} = {{3|16}}.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nếu x<sup>2</sup> = 25 thì x = 5.', answer: false, explain: 'x còn có thể bằng −5 vì (−5)<sup>2</sup> = 25.' },
    { type: 'short', calc: '1 - (Math.pow(1/2, 2) + (3/4) / 3)', requireSimplest: true, q: 'Tính: 1 − [({{1|2}})<sup>2</sup> + {{3|4}} : 3] (dạng a/b tối giản).', answer: ['1/2'], answerText: '1/2', explain: '{{1|4}} + {{1|4}} = {{1|2}}; 1 − {{1|2}} = {{1|2}}.' },
    { type: 'short', calc: '(-2 + 1) / 2', q: 'Tìm x, biết: (2x − 1)<sup>3</sup> = −8 (viết dạng a/b hoặc số thập phân).', answer: ['-1/2', '-0.5'], answerText: '−1/2 (−0,5)', explain: '2x − 1 = −2 ⇒ x = −{{1|2}}.' },
    { type: 'mcq', calc: 'Math.pow(Math.pow(2, 2), 3)', q: '(2<sup>2</sup>)<sup>3</sup> bằng:', options: ['32', '64', '12', '4 096'], answer: 1, explain: '(2<sup>2</sup>)<sup>3</sup> = 2<sup>6</sup> = 64.' },
    { type: 'short', calc: '7/13 - (5/8 + 7/13) + 13/8', q: 'Tính hợp lí: {{7|13}} − ({{5|8}} + {{7|13}}) + {{13|8}}.', answer: '1', explain: 'Bỏ ngoặc, nhóm: 0 + {{8|8}} = 1.' }
  ]
});
