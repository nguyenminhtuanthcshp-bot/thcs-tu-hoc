/* Toán 8 – Bài 21. Phân thức đại số. Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('toan-8/bai-21', {
  objectives: [
    'Nhận biết được các khái niệm cơ bản về phân thức đại số: định nghĩa, tử thức, mẫu thức.',
    'Tìm được điều kiện xác định của một phân thức.',
    'Tính được giá trị của phân thức tại giá trị cho trước của biến.',
    'Nhận biết được hai phân thức bằng nhau.'
  ],
  intro: 'Phân số {{a|b}} có tử và mẫu là số nguyên. Khi tử và mẫu là các đa thức, ta được phân thức đại số – “phân số của đại số”.',
  steps: [
    { title: 'Định nghĩa', html: `<p><b>Phân thức đại số</b> (gọi tắt là phân thức) là biểu thức có dạng {{A|B}}, trong đó A, B là những đa thức và B khác đa thức 0. A là <b>tử thức</b>, B là <b>mẫu thức</b>.</p>
      <p>Ví dụ: {{x + 1|x − 2}}, {{3xy|x<sup>2</sup> + 1}}, {{5|x}}. Mỗi đa thức cũng là một phân thức có mẫu bằng 1.</p>` },
    { title: 'Điều kiện xác định', html: `<p>Phân thức {{A|B}} chỉ có nghĩa khi giá trị của mẫu <b>khác 0</b>. Điều kiện của biến để mẫu khác 0 gọi là <b>điều kiện xác định</b> của phân thức.</p>
      <p>Ví dụ: {{x + 1|x − 2}} xác định khi x − 2 ≠ 0, tức x ≠ 2. &nbsp; {{3|x(x + 5)}} xác định khi x ≠ 0 và x ≠ −5.</p>
      <div class="box tip">{{1|x<sup>2</sup> + 1}} xác định với mọi x vì x<sup>2</sup> + 1 ≥ 1 &gt; 0.</div>` },
    { title: 'Giá trị của phân thức', html: `<p>Để tính giá trị của phân thức tại một giá trị của biến, trước hết kiểm tra giá trị đó thoả mãn điều kiện xác định, rồi thay vào tử và mẫu.</p>
      <p>Ví dụ: {{x + 1|x − 2}} tại x = 4: {{5|2}}. Tại x = 2 phân thức <b>không xác định</b>.</p>` },
    { title: 'Hai phân thức bằng nhau', html: `<div class="box key">{{A|B}} = {{C|D}} nếu A · D = B · C.</div>
      <p>Ví dụ: {{x|x + 1}} = {{x<sup>2</sup>|x<sup>2</sup> + x}} vì x · (x<sup>2</sup> + x) = (x + 1) · x<sup>2</sup> = x<sup>3</sup> + x<sup>2</sup>.</p>` }
  ],
  summary: 'Phân thức {{A|B}}: A, B là đa thức, B ≠ 0. Điều kiện xác định: mẫu khác 0. {{A|B}} = {{C|D}} ⇔ AD = BC.',
  examples: [
    { title: 'Điều kiện xác định', problem: 'Tìm điều kiện xác định của {{2x|x<sup>2</sup> − 9}}.', solution: 'x<sup>2</sup> − 9 = (x − 3)(x + 3) ≠ 0 ⇔ x ≠ 3 và x ≠ −3.' },
    { title: 'Tính giá trị', problem: 'Tính giá trị của {{x<sup>2</sup> − 1|x + 3}} tại x = −2 và tại x = 1.', solution: 'Tại x = −2: {{4 − 1|1}} = 3. Tại x = 1: {{0|4}} = 0.' },
    { title: 'Kiểm tra bằng nhau', problem: 'Hai phân thức {{x − 2|3}} và {{x<sup>2</sup> − 4|3x + 6}} có bằng nhau không?', solution: '(x − 2)(3x + 6) = 3(x − 2)(x + 2) = 3(x<sup>2</sup> − 4). Vậy hai phân thức bằng nhau.' }
  ],
  exercises: [
    { question: 'Tìm điều kiện xác định của {{x + 4|2x − 6}}.', hints: ['Mẫu 2x − 6 ≠ 0.', '2x ≠ 6.'], solution: 'x ≠ 3.' },
    { question: 'Tính giá trị của {{3x − 1|x<sup>2</sup> + 1}} tại x = 2.', hints: ['Mẫu luôn dương nên xác định.', 'Tử: 5; mẫu: 5.'], solution: '1.' },
    { question: 'Tìm đa thức A biết {{A|x − 1}} = {{x<sup>2</sup> + x|x<sup>2</sup> − 1}}.', hints: ['A · (x<sup>2</sup> − 1) = (x − 1)(x<sup>2</sup> + x).', 'x<sup>2</sup> − 1 = (x − 1)(x + 1); x<sup>2</sup> + x = x(x + 1).'], solution: 'A = x.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Biểu thức nào <b>không</b> phải là phân thức đại số?', options: ['{{x + 1|x}}', '{{2|x − 3}}', 'x<sup>2</sup> + 1', '{{x|0}}'], answer: 3, explain: 'Mẫu phải khác đa thức 0.' },
    { type: 'short', calc: '6 / 2', q: '{{x + 4|2x − 6}} xác định khi x ≠ a. Tìm a.', answer: '3', explain: '2x − 6 ≠ 0 ⇔ x ≠ 3.' },
    { type: 'short', requireSimplest: true, calc: '(4 + 1) / (4 - 2)', q: 'Tính giá trị của {{x + 1|x − 2}} tại x = 4 (dạng a/b tối giản).', answer: ['5/2'], answerText: '5/2', explain: '{{5|2}}.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Phân thức {{1|x<sup>2</sup> + 1}} xác định với mọi giá trị của x.', answer: true, explain: 'x<sup>2</sup> + 1 &gt; 0.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hai phân thức {{x|3}} và {{x<sup>2</sup>|3x}} bằng nhau.', answer: true, explain: 'x · 3x = 3 · x<sup>2</sup> nên hai phân thức bằng nhau (theo định nghĩa A · D = B · C).' },
    { type: 'mcq', q: 'Điều kiện xác định của {{2x|x<sup>2</sup> − 9}} là:', options: ['x ≠ 3', 'x ≠ ±3', 'x ≠ 9', 'x ≠ 0'], answer: 1, explain: '(x − 3)(x + 3) ≠ 0.' },
    { type: 'short', calc: '(3 * 2 - 1) / (2 * 2 + 1)', q: 'Tính giá trị của {{3x − 1|x<sup>2</sup> + 1}} tại x = 2.', answer: '1', explain: '{{5|5}} = 1.' },
    { type: 'short', calc: '(4 - 1) / (-2 + 3)', q: 'Tính giá trị của {{x<sup>2</sup> − 1|x + 3}} tại x = −2.', answer: '3', explain: '{{3|1}} = 3.' }
  ]
});
