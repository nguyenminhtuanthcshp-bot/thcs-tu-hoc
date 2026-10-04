/* Toán 8 – Luyện tập chung (sau Bài 3). Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('toan-8/c1-ltc-1', {
  objectives: [
    'Nhận biết đơn thức, đa thức; xác định hệ số, phần biến và bậc.',
    'Thu gọn đơn thức, đa thức và tính giá trị của đa thức tại giá trị cho trước của biến.',
    'Cộng, trừ đa thức thành thạo; tìm đa thức chưa biết trong một đẳng thức.'
  ],
  intro: 'Ba bài đầu của chương là “bảng chữ cái” của đại số lớp 8. Buổi luyện tập này giúp em ôn lại cách nhận diện, thu gọn và cộng trừ đa thức trước khi học phép nhân.',
  steps: [
    { title: 'Nhắc lại: đơn thức và bậc', html: `<p><b>Đơn thức</b> là một số, một biến hoặc một tích giữa các số và các biến. Đơn thức thu gọn gồm <b>hệ số</b> (phần số) và <b>phần biến</b>.</p>
      <p><b>Bậc</b> của đơn thức có hệ số khác 0 là tổng số mũ của tất cả các biến. Ví dụ −5x<sup>2</sup>yz<sup>3</sup> có bậc 2 + 1 + 3 = 6.</p>
      <div class="box tip">Hai đơn thức <b>đồng dạng</b> khi có hệ số khác 0 và cùng phần biến. Chỉ cộng, trừ được các đơn thức đồng dạng thành một đơn thức.</div>` },
    { title: 'Nhắc lại: đa thức thu gọn và bậc của đa thức', html: `<p>Đa thức là tổng của những đơn thức; mỗi đơn thức là một <b>hạng tử</b>. Muốn thu gọn đa thức, ta nhóm và cộng các hạng tử đồng dạng.</p>
      <p><b>Bậc của đa thức</b> (đã thu gọn) là bậc của hạng tử có bậc cao nhất.</p>
      <p class="math">P = 3x<sup>2</sup>y − xy + 2x<sup>2</sup>y + 4 = 5x<sup>2</sup>y − xy + 4 → bậc 3</p>
      <div class="box warn">Phải thu gọn <b>trước</b> rồi mới tìm bậc: có khi hạng tử bậc cao triệt tiêu nhau.</div>` },
    { title: 'Cộng, trừ đa thức', html: `<ol><li>Viết mỗi đa thức trong một cặp ngoặc.</li><li>Bỏ ngoặc: sau dấu “−” đổi dấu <b>mọi</b> hạng tử.</li><li>Nhóm các hạng tử đồng dạng và thu gọn.</li></ol>
      <p class="math">(2x<sup>2</sup> − 3xy) − (x<sup>2</sup> − 3xy + 1) = x<sup>2</sup> − 1</p>` },
    { title: 'Tìm đa thức chưa biết', html: `<ul><li>M + B = A ⇒ M = A − B.</li><li>M − B = A ⇒ M = A + B.</li><li>A − M = B ⇒ M = A − B.</li></ul>
      <p>Sau khi tìm được M, hãy thử lại bằng cách thay vào đẳng thức ban đầu.</p>` },
    { title: 'Tính giá trị nhanh', html: `<p>Để tính giá trị của một đa thức, nên <b>thu gọn trước</b> rồi mới thay số – ít phép tính hơn và ít sai hơn.</p>
      <p>Ví dụ: Q = x<sup>2</sup> + 3xy − x<sup>2</sup> + 1 = 3xy + 1. Tại x = 2, y = −1: Q = 3 · 2 · (−1) + 1 = −5.</p>` }
  ],
  summary: 'Thu gọn trước – tính sau. Bậc đa thức tính sau khi thu gọn. Bỏ ngoặc sau dấu “−” thì đổi dấu mọi hạng tử.',
  examples: [
    { title: 'Thu gọn và tìm bậc', problem: 'Thu gọn rồi tìm bậc của đa thức P = 4x<sup>3</sup>y − 2xy<sup>2</sup> + x − 4x<sup>3</sup>y + 5xy<sup>2</sup>.', solution: 'P = (4x<sup>3</sup>y − 4x<sup>3</sup>y) + (−2xy<sup>2</sup> + 5xy<sup>2</sup>) + x = 3xy<sup>2</sup> + x. Hạng tử bậc cao nhất là 3xy<sup>2</sup> (bậc 3) nên P có bậc 3 (không phải bậc 4).' },
    { title: 'Cộng và trừ', problem: 'Cho A = x<sup>2</sup> − 2xy + 3 và B = −x<sup>2</sup> + xy − 1. Tính A + B và A − B.', solution: 'A + B = (x<sup>2</sup> − x<sup>2</sup>) + (−2xy + xy) + (3 − 1) = −xy + 2.<br>A − B = x<sup>2</sup> − 2xy + 3 + x<sup>2</sup> − xy + 1 = 2x<sup>2</sup> − 3xy + 4.' },
    { title: 'Bài toán thực tế', problem: 'Một mảnh vườn hình chữ nhật dài (3x + 2) m, rộng (x + 4) m. Người ta làm lối đi rộng 1 m chạy dọc theo chiều dài. Viết đa thức biểu thị hiệu giữa chu vi mảnh vườn và chiều dài lối đi.', solution: 'Chu vi: 2[(3x + 2) + (x + 4)] = 8x + 12 (m). Lối đi dài bằng chiều dài vườn: 3x + 2 (m). Hiệu: (8x + 12) − (3x + 2) = 5x + 10 (m).' }
  ],
  exercises: [
    { question: 'Cho P = 2x<sup>2</sup>y − 3xy + 5 và Q = −x<sup>2</sup>y + 3xy − 2. Tính P + Q và cho biết bậc của kết quả.', hints: ['Nhóm: (2x<sup>2</sup>y − x<sup>2</sup>y) + (−3xy + 3xy) + (5 − 2).', 'Hạng tử −3xy và 3xy triệt tiêu nhau.'], solution: 'P + Q = x<sup>2</sup>y + 3, có bậc 3.' },
    { question: 'Tìm đa thức M biết (3x<sup>2</sup> − xy) − M = x<sup>2</sup> + 2xy − 1.', hints: ['A − M = B nên M = A − B.', 'M = 3x<sup>2</sup> − xy − x<sup>2</sup> − 2xy + 1.'], solution: 'M = 2x<sup>2</sup> − 3xy + 1.' },
    { question: 'Tính giá trị của đa thức R = 5xy − x<sup>2</sup> + 2 − 3xy + x<sup>2</sup> tại x = −3, y = 2.', hints: ['Thu gọn trước: x<sup>2</sup> − x<sup>2</sup> = 0, 5xy − 3xy = 2xy.', 'R = 2xy + 2; thay x = −3, y = 2.'], solution: 'R = 2 · (−3) · 2 + 2 = −10.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Biểu thức nào sau đây <b>không</b> phải là đơn thức?', options: ['−2x<sup>3</sup>y', '{{1|2}}xy', 'x + y', '7'], answer: 2, explain: 'x + y là tổng của hai đơn thức, đó là một đa thức chứ không phải đơn thức.' },
    { type: 'short', calc: '1 + 2 + 3', q: 'Bậc của đơn thức −x y<sup>2</sup> z<sup>3</sup> là bao nhiêu?', answer: '6', explain: '1 + 2 + 3 = 6.' },
    { type: 'mcq', q: 'Thu gọn 3xy<sup>2</sup> − 5xy<sup>2</sup> + xy<sup>2</sup> được:', options: ['−xy<sup>2</sup>', 'xy<sup>2</sup>', '−2xy<sup>2</sup>', '9xy<sup>2</sup>'], answer: 0, explain: '(3 − 5 + 1)xy<sup>2</sup> = −xy<sup>2</sup>.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Đa thức x<sup>4</sup> + 2x − x<sup>4</sup> + 1 có bậc 4.', answer: false, explain: 'Thu gọn được 2x + 1, bậc 1.' },
    { type: 'short', calc: '3 * 2 * 1 + 1', q: 'Tính giá trị của Q = x<sup>2</sup> + 3xy − x<sup>2</sup> + 1 tại x = 2, y = 1.', answer: '7', explain: 'Q = 3xy + 1 = 3 · 2 · 1 + 1 = 7.' },
    { type: 'mcq', q: '(4x − y) − (x − 3y) bằng:', options: ['3x − 4y', '3x + 2y', '5x − 4y', '3x − 2y'], answer: 1, explain: '4x − y − x + 3y = 3x + 2y.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nếu M + (x − 2) = 5x thì M = 4x + 2.', answer: true, explain: 'M = 5x − (x − 2) = 4x + 2.' },
    { type: 'short', calc: '2 * (-1) * 3 + 2', q: 'Cho A = xy + 2 và B = −xy. Tính giá trị của A − B tại x = −1, y = 3.', answer: '-4', answerText: '−4', explain: 'A − B = 2xy + 2 = 2 · (−1) · 3 + 2 = −4.' }
  ]
});
