/* Toán 7 – Bài 25. Đa thức một biến. Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('toan-7/bai-25', {
  objectives: [
    'Nhận biết đơn thức một biến, đa thức một biến; thu gọn và sắp xếp đa thức.',
    'Xác định bậc, hệ số cao nhất, hệ số tự do của đa thức một biến.',
    'Tính giá trị của đa thức và nhận biết nghiệm của đa thức một biến.'
  ],
  intro: 'Biểu thức 3x<sup>2</sup> − 5x + 2 chỉ có một biến x, gồm các “viên gạch” 3x<sup>2</sup>, −5x, 2. Những biểu thức như vậy gọi là đa thức một biến.',
  steps: [
    { title: 'Đơn thức và đa thức một biến', html: `<p><b>Đơn thức một biến</b> là biểu thức chỉ gồm một số, hoặc tích của một số với luỹ thừa có số mũ tự nhiên của biến: 5; −2x; {{1|2}}x<sup>3</sup>.</p>
      <p><b>Đa thức một biến</b> là tổng của những đơn thức của cùng một biến; mỗi đơn thức là một <b>hạng tử</b>. Một số cũng được coi là đa thức.</p>
      <p>Ví dụ: A(x) = 3x<sup>2</sup> − 5x + 2 có ba hạng tử 3x<sup>2</sup>, −5x, 2.</p>` },
    { title: 'Thu gọn và sắp xếp', html: `<p><b>Thu gọn</b>: cộng các hạng tử có cùng số mũ của biến. <b>Sắp xếp</b> theo luỹ thừa giảm dần (hoặc tăng dần) của biến.</p>
      <p>Ví dụ: P(x) = 2x − x<sup>3</sup> + 5 + 3x<sup>3</sup> − x = 2x<sup>3</sup> + x + 5.</p>` },
    { title: 'Bậc và các hệ số', html: `<p>Với đa thức đã thu gọn:</p><ul><li><b>Bậc</b>: số mũ lớn nhất của biến.</li><li><b>Hệ số cao nhất</b>: hệ số của hạng tử có bậc cao nhất.</li><li><b>Hệ số tự do</b>: hạng tử không chứa biến.</li></ul>
      <table class="tbl"><tr><th>Đa thức</th><th>Bậc</th><th>Hệ số cao nhất</th><th>Hệ số tự do</th></tr><tr><td>2x<sup>3</sup> + x + 5</td><td>3</td><td>2</td><td>5</td></tr><tr><td>−x<sup>4</sup> + 3x<sup>2</sup></td><td>4</td><td>−1</td><td>0</td></tr><tr><td>7</td><td>0</td><td>7</td><td>7</td></tr></table>
      <p>Số 0 là <b>đa thức không</b>, không có bậc.</p>` },
    { title: 'Giá trị và nghiệm của đa thức', html: `<p>Giá trị của P(x) tại x = a kí hiệu P(a). Nếu P(a) = 0 thì a là một <b>nghiệm</b> của P(x).</p>
      <p>Ví dụ: A(x) = x<sup>2</sup> − 4. A(2) = 0, A(−2) = 0 nên 2 và −2 là nghiệm của A(x); A(1) = −3 nên 1 không là nghiệm.</p>
      <div class="box note">Một đa thức (khác đa thức không) có thể không có nghiệm, có một nghiệm, hai nghiệm… nhưng số nghiệm không vượt quá bậc của nó.</div>` }
  ],
  summary: 'Đa thức một biến là tổng các đơn thức của cùng một biến. Thu gọn, sắp xếp rồi xác định bậc, hệ số cao nhất, hệ số tự do. a là nghiệm của P(x) khi P(a) = 0.',
  examples: [
    { title: 'Thu gọn, sắp xếp', problem: 'Thu gọn và sắp xếp theo luỹ thừa giảm dần: Q(x) = 4 − 2x<sup>2</sup> + x<sup>3</sup> + 3x<sup>2</sup> − 1.', solution: 'Q(x) = x<sup>3</sup> + x<sup>2</sup> + 3. Bậc 3, hệ số cao nhất 1, hệ số tự do 3.' },
    { title: 'Tính giá trị', problem: 'Cho P(x) = 2x<sup>3</sup> + x + 5. Tính P(−1), P(2).', solution: 'P(−1) = −2 − 1 + 5 = 2; P(2) = 16 + 2 + 5 = 23.' },
    { title: 'Kiểm tra nghiệm', problem: 'x = 3 có phải nghiệm của B(x) = x<sup>2</sup> − 5x + 6 không?', solution: 'B(3) = 9 − 15 + 6 = 0 nên x = 3 là nghiệm.' }
  ],
  exercises: [
    { question: 'Tìm bậc và hệ số tự do của M(x) = 5x − 3x<sup>4</sup> + x<sup>4</sup> + 2x<sup>4</sup> − 7.', hints: ['Thu gọn các hạng tử x<sup>4</sup>: −3 + 1 + 2 = 0.', 'Còn lại 5x − 7.'], solution: 'M(x) = 5x − 7: bậc 1, hệ số tự do −7.' },
    { question: 'Tìm nghiệm của đa thức 2x − 6.', hints: ['Giải 2x − 6 = 0.', 'x = 3.'], solution: 'x = 3.' },
    { question: 'Chứng tỏ đa thức x<sup>2</sup> + 1 không có nghiệm.', hints: ['x<sup>2</sup> ≥ 0 với mọi x.', 'x<sup>2</sup> + 1 ≥ 1.'], solution: 'x<sup>2</sup> + 1 ≥ 1 &gt; 0 với mọi x nên không có giá trị nào làm nó bằng 0.' }
  ],
  quiz: [
    { type: 'short', calc: '4', q: 'Tìm bậc của đa thức 3x<sup>4</sup> − 2x + 1.', answer: '4', explain: 'Số mũ lớn nhất là 4.' },
    { type: 'short', calc: 'poly([5, 1, 0, 2], -1)', q: 'P(x) = 2x<sup>3</sup> + x + 5. Tính P(−1).', answer: '2', explain: '−2 − 1 + 5 = 2.' },
    { type: 'mcq', q: 'Hệ số cao nhất của −x<sup>4</sup> + 3x<sup>2</sup> − 2 là:', options: ['4', '−1', '3', '−2'], answer: 1, explain: 'Hạng tử bậc cao nhất là −x<sup>4</sup>.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: x = 3 là nghiệm của x<sup>2</sup> − 5x + 6.', answer: true, explain: '9 − 15 + 6 = 0.' },
    { type: 'short', calc: '6 / 2', q: 'Tìm nghiệm của đa thức 2x − 6.', answer: '3', explain: '2x = 6.' },
    { type: 'short', calc: 'poly([5, 1, 0, 2], 2)', q: 'P(x) = 2x<sup>3</sup> + x + 5. Tính P(2).', answer: '23', explain: '16 + 2 + 5.' },
    { type: 'short', calc: '-7', q: 'Hệ số tự do của 5x − 3x<sup>4</sup> + x<sup>4</sup> + 2x<sup>4</sup> − 7 là bao nhiêu?', answer: '-7', answerText: '−7', explain: 'Hạng tử không chứa biến: −7.' },
    { type: 'mcq', q: 'Đa thức nào không có nghiệm?', options: ['x − 1', 'x<sup>2</sup> − 1', 'x<sup>2</sup> + 1', '2x'], answer: 2, explain: 'x<sup>2</sup> + 1 ≥ 1.' }
  ]
});
