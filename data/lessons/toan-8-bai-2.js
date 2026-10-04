/* Toán 8 – Bài 2. Đa thức. Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('toan-8/bai-2', {
  objectives: [
    'Nhận biết được đa thức và các hạng tử của đa thức.',
    'Thu gọn được đa thức bằng cách cộng các hạng tử đồng dạng.',
    'Xác định được bậc của đa thức.',
    'Tính được giá trị của đa thức khi biết giá trị của các biến.'
  ],
  intro: 'Một mảnh vườn gồm một phần hình vuông cạnh x và một phần hình chữ nhật kích thước x × y. Tổng diện tích là x<sup>2</sup> + xy – một <b>đa thức</b>.',
  steps: [
    { title: 'Đa thức là gì?', html: `<p><b>Đa thức</b> là một tổng của những đơn thức. Mỗi đơn thức trong tổng gọi là một <b>hạng tử</b>.</p>
      <p>Ví dụ: đa thức 3x<sup>2</sup>y − 5xy + 2 có ba hạng tử: 3x<sup>2</sup>y; −5xy; 2.</p>
      <div class="box note">Mỗi đơn thức cũng được coi là một đa thức (đa thức chỉ có một hạng tử).</div>` },
    { title: 'Thu gọn đa thức', html: `<p>Đa thức thu gọn là đa thức <b>không còn hai hạng tử nào đồng dạng</b>. Để thu gọn, ta nhóm và cộng các hạng tử đồng dạng.</p>
      <p class="math">P = 2x<sup>2</sup>y + 3xy − x<sup>2</sup>y + 4 − xy<br>= (2x<sup>2</sup>y − x<sup>2</sup>y) + (3xy − xy) + 4<br>= x<sup>2</sup>y + 2xy + 4</p>` },
    { title: 'Bậc của đa thức', html: `<p><b>Bậc của đa thức</b> là bậc của hạng tử có <b>bậc cao nhất</b> trong dạng thu gọn của đa thức đó.</p>
      <p>Ví dụ: P = x<sup>2</sup>y + 2xy + 4 có các hạng tử bậc 3, 2, 0. Vậy P có bậc 3.</p>
      <div class="box tip">Phải thu gọn trước khi tìm bậc! Ví dụ: x<sup>4</sup> + 2x − x<sup>4</sup> thu gọn thành 2x, có bậc 1 chứ không phải bậc 4.</div>` },
    { title: 'Giá trị của đa thức', html: `<p>Thay giá trị của các biến vào đa thức (nên thay vào dạng thu gọn cho gọn) rồi tính.</p>
      <p>Ví dụ: P = x<sup>2</sup>y + 2xy + 4 tại x = 1, y = −2:<br>P = 1<sup>2</sup> · (−2) + 2 · 1 · (−2) + 4 = −2 − 4 + 4 = −2.</p>` }
  ],
  summary: 'Đa thức là tổng các đơn thức (hạng tử). Thu gọn bằng cách cộng các hạng tử đồng dạng. Bậc của đa thức là bậc cao nhất của các hạng tử trong dạng thu gọn.',
  examples: [
    { title: 'Nhận biết hạng tử', problem: 'Chỉ ra các hạng tử của đa thức Q = x<sup>3</sup> − 2xy + {{1|3}}y<sup>2</sup> − 7.', solution: 'Q có bốn hạng tử: x<sup>3</sup>; −2xy; {{1|3}}y<sup>2</sup>; −7.' },
    { title: 'Thu gọn và tìm bậc', problem: 'Thu gọn rồi tìm bậc của M = 3x<sup>2</sup>y − xy<sup>2</sup> + 2x<sup>2</sup>y + 4xy<sup>2</sup> − 1.', solution: 'M = (3x<sup>2</sup>y + 2x<sup>2</sup>y) + (−xy<sup>2</sup> + 4xy<sup>2</sup>) − 1 = 5x<sup>2</sup>y + 3xy<sup>2</sup> − 1.<br>Các hạng tử có bậc 3; 3; 0. Vậy M có bậc 3.' },
    { title: 'Tính giá trị', problem: 'Tính giá trị của N = x<sup>2</sup> − 3x + 2 tại x = −1.', solution: 'N = (−1)<sup>2</sup> − 3 · (−1) + 2 = 1 + 3 + 2 = 6.' }
  ],
  exercises: [
    { question: 'Thu gọn đa thức A = 4xy − 3x<sup>2</sup> + 2xy + x<sup>2</sup> − 5.', hints: ['Nhóm các hạng tử đồng dạng: (4xy + 2xy) và (−3x<sup>2</sup> + x<sup>2</sup>).', '4xy + 2xy = 6xy; −3x<sup>2</sup> + x<sup>2</sup> = −2x<sup>2</sup>.'], solution: 'A = 6xy − 2x<sup>2</sup> − 5.' },
    { question: 'Tìm bậc của đa thức B = x<sup>5</sup> + 3x<sup>2</sup>y<sup>2</sup> − x<sup>5</sup> + y.', hints: ['Thu gọn trước: x<sup>5</sup> − x<sup>5</sup> = 0.', 'Sau khi thu gọn còn B = 3x<sup>2</sup>y<sup>2</sup> + y. Tìm bậc từng hạng tử.'], solution: 'B = 3x<sup>2</sup>y<sup>2</sup> + y. Hạng tử 3x<sup>2</sup>y<sup>2</sup> có bậc 4, y có bậc 1. Vậy B có bậc 4.' },
    { question: 'Tính giá trị của C = 2x<sup>2</sup>y − xy + 3 tại x = 2, y = 1.', hints: ['Thay x = 2, y = 1 vào từng hạng tử.', '2x<sup>2</sup>y = 2 · 4 · 1 = 8; xy = 2.'], solution: 'C = 8 − 2 + 3 = 9.' }
  ],
  quiz: [
    { type: 'short', calc: '4', q: 'Đa thức 2x<sup>2</sup> − 3xy + y − 4 có bao nhiêu hạng tử?', answer: '4', explain: 'Các hạng tử: 2x<sup>2</sup>; −3xy; y; −4.' },
    { type: 'mcq', q: 'Thu gọn đa thức 5x<sup>2</sup> + 3x − 2x<sup>2</sup> − x ta được:', options: ['3x<sup>2</sup> + 2x', '7x<sup>2</sup> + 2x', '3x<sup>2</sup> + 4x', '5x'], answer: 0, explain: '(5x<sup>2</sup> − 2x<sup>2</sup>) + (3x − x) = 3x<sup>2</sup> + 2x.' },
    { type: 'short', calc: '3 + 1', q: 'Bậc của đa thức x<sup>3</sup>y − 2xy + 5 là bao nhiêu?', answer: '4', explain: 'x<sup>3</sup>y có bậc 4 (cao nhất), −2xy có bậc 2, 5 có bậc 0.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Đa thức x<sup>4</sup> + 2x − x<sup>4</sup> có bậc 4.', answer: false, explain: 'Thu gọn được 2x, có bậc 1.' },
    { type: 'short', calc: 'poly([1, -2, 1], 3)', q: 'Tính giá trị của đa thức x<sup>2</sup> − 2x + 1 tại x = 3.', answer: '4', explain: '9 − 6 + 1 = 4.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mỗi đơn thức cũng được coi là một đa thức.', answer: true, explain: 'Đơn thức là đa thức có một hạng tử.' },
    { type: 'mcq', q: 'Đa thức nào dưới đây đã ở dạng thu gọn?', options: ['x<sup>2</sup> + 2x + x<sup>2</sup>', 'xy + 3 − xy', 'x<sup>2</sup>y + xy<sup>2</sup> − 1', '3x − x + 1'], answer: 2, explain: 'Các hạng tử x<sup>2</sup>y; xy<sup>2</sup>; −1 đôi một không đồng dạng.' },
    { type: 'short', calc: '(-1) * 2 + (-1) - 2', q: 'Tính giá trị của đa thức xy + x − y tại x = −1, y = 2.', answer: '-5', answerText: '−5', explain: '(−1) · 2 + (−1) − 2 = −2 − 1 − 2 = −5.' }
  ]
});
