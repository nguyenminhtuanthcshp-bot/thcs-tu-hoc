/* Toán 8 – Bài 1. Đơn thức. Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('toan-8/bai-1', {
  objectives: [
    'Nhận biết được đơn thức, đơn thức thu gọn, hệ số, phần biến và bậc của đơn thức.',
    'Thu gọn được một đơn thức.',
    'Nhận biết được các đơn thức đồng dạng; cộng, trừ được các đơn thức đồng dạng.',
    'Tính được giá trị của đơn thức khi biết giá trị của các biến.'
  ],
  intro: 'Diện tích hình chữ nhật có chiều dài 2x và chiều rộng y là 2xy. Biểu thức 2xy là một <b>đơn thức</b> – “viên gạch” để xây nên các đa thức mà em sẽ học trong cả chương.',
  steps: [
    { title: 'Đơn thức là gì?', html: `<p><b>Đơn thức</b> là biểu thức đại số chỉ gồm <b>một số</b>, hoặc <b>một biến</b>, hoặc <b>một tích</b> giữa các số và các biến.</p>
      <p>Ví dụ đơn thức: 5; x; −3x<sup>2</sup>y; {{1|2}}xy<sup>3</sup>.</p>
      <p>Không phải đơn thức: x + y (có phép cộng); {{2|x}} (có phép chia cho biến).</p>` },
    { title: 'Đơn thức thu gọn', html: `<p><b>Đơn thức thu gọn</b> chỉ gồm một số, hoặc có dạng tích của một số với các biến, <b>mỗi biến chỉ xuất hiện một lần</b> và đã được nâng lên luỹ thừa với số mũ nguyên dương.</p>
      <p>Trong đơn thức thu gọn −3x<sup>2</sup>y: <b>hệ số</b> là −3, <b>phần biến</b> là x<sup>2</sup>y.</p>
      <p>Thu gọn: 2x · (−3)xy<sup>2</sup> = (2 · (−3)) · (x · x) · y<sup>2</sup> = −6x<sup>2</sup>y<sup>2</sup>.</p>` },
    { title: 'Bậc của đơn thức', html: `<p><b>Bậc</b> của đơn thức có hệ số khác 0 là <b>tổng số mũ của tất cả các biến</b> trong đơn thức thu gọn.</p>
      <ul><li>−3x<sup>2</sup>y có bậc 2 + 1 = 3.</li><li>7x<sup>3</sup>y<sup>2</sup>z có bậc 3 + 2 + 1 = 6.</li><li>Số khác 0 (ví dụ 5) có bậc 0. Số 0 là đơn thức không có bậc.</li></ul>` },
    { title: 'Đơn thức đồng dạng', html: `<p>Hai đơn thức <b>đồng dạng</b> là hai đơn thức có hệ số khác 0 và có <b>cùng phần biến</b>.</p>
      <p>Ví dụ: 3x<sup>2</sup>y và −{{1|2}}x<sup>2</sup>y đồng dạng; 3x<sup>2</sup>y và 3xy<sup>2</sup> <b>không</b> đồng dạng.</p>
      <div class="box key">Cộng (trừ) các đơn thức đồng dạng: cộng (trừ) các hệ số và giữ nguyên phần biến.<br>5xy<sup>2</sup> − 2xy<sup>2</sup> + xy<sup>2</sup> = (5 − 2 + 1)xy<sup>2</sup> = 4xy<sup>2</sup>.</div>` },
    { title: 'Giá trị của đơn thức', html: `<p>Thay giá trị của các biến vào đơn thức rồi tính.</p>
      <p>Ví dụ: giá trị của −2x<sup>2</sup>y tại x = −1, y = 3 là −2 · (−1)<sup>2</sup> · 3 = −2 · 1 · 3 = −6.</p>` }
  ],
  summary: 'Đơn thức: số, biến hoặc tích giữa số và biến. Bậc = tổng số mũ các biến (đã thu gọn). Đơn thức đồng dạng có cùng phần biến; cộng trừ bằng cách cộng trừ hệ số.',
  examples: [
    { title: 'Thu gọn và tìm bậc', problem: 'Thu gọn đơn thức A = 2x<sup>2</sup>y · (−3xy<sup>3</sup>), chỉ ra hệ số, phần biến và bậc.', solution: 'A = (2 · (−3)) · (x<sup>2</sup> · x) · (y · y<sup>3</sup>) = −6x<sup>3</sup>y<sup>4</sup>.<br>Hệ số: −6; phần biến: x<sup>3</sup>y<sup>4</sup>; bậc: 3 + 4 = 7.' },
    { title: 'Cộng đơn thức đồng dạng', problem: 'Tính: 5xy<sup>2</sup> − 2xy<sup>2</sup> + xy<sup>2</sup>.', solution: 'Ba đơn thức đồng dạng (cùng phần biến xy<sup>2</sup>): (5 − 2 + 1)xy<sup>2</sup> = 4xy<sup>2</sup>.' },
    { title: 'Tính giá trị', problem: 'Tính giá trị của đơn thức −2x<sup>2</sup>y tại x = −1, y = 3.', solution: '−2 · (−1)<sup>2</sup> · 3 = −2 · 1 · 3 = −6.' }
  ],
  exercises: [
    { question: 'Trong các biểu thức sau, biểu thức nào là đơn thức: 4x<sup>2</sup>; x + 1; −{{3|4}}xy; {{5|y}}; 0?', hints: ['Đơn thức không chứa phép cộng, trừ giữa các hạng tử và không chia cho biến.', 'Một số (kể cả số 0) cũng là đơn thức.'], solution: 'Các đơn thức là: 4x<sup>2</sup>; −{{3|4}}xy; 0.' },
    { question: 'Thu gọn rồi tìm bậc của đơn thức B = −{{1|2}}x<sup>2</sup>y · 4xy<sup>2</sup>.', hints: ['Nhân các hệ số: −{{1|2}} · 4.', 'Nhân các luỹ thừa cùng biến: x<sup>2</sup> · x = x<sup>3</sup>; y · y<sup>2</sup> = y<sup>3</sup>.'], solution: 'B = −2x<sup>3</sup>y<sup>3</sup>. Bậc của B là 3 + 3 = 6.' },
    { question: 'Tính tổng: 3x<sup>2</sup>y + (−7x<sup>2</sup>y) + {{1|2}}x<sup>2</sup>y.', hints: ['Ba đơn thức có cùng phần biến x<sup>2</sup>y nên đồng dạng.', 'Cộng các hệ số: 3 − 7 + {{1|2}}.'], solution: '(3 − 7 + {{1|2}})x<sup>2</sup>y = −{{7|2}}x<sup>2</sup>y.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Biểu thức nào sau đây là đơn thức?', options: ['x + y', '−5x<sup>2</sup>y', '{{3|x}}', 'x − 1'], answer: 1, explain: '−5x<sup>2</sup>y là tích của số và các biến nên là đơn thức.' },
    { type: 'short', calc: '3 + 2 + 1', q: 'Bậc của đơn thức 4x<sup>3</sup>y<sup>2</sup>z là bao nhiêu?', answer: '6', explain: 'Tổng số mũ các biến: 3 + 2 + 1 = 6.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hai đơn thức 2x<sup>2</sup>y và 2xy<sup>2</sup> là hai đơn thức đồng dạng.', answer: false, explain: 'Phần biến x<sup>2</sup>y và xy<sup>2</sup> khác nhau nên hai đơn thức không đồng dạng.' },
    { type: 'mcq', q: 'Thu gọn đơn thức 3x · (−2)x<sup>2</sup>y ta được:', options: ['−6x<sup>3</sup>y', '6x<sup>3</sup>y', '−6x<sup>2</sup>y', 'x<sup>3</sup>y'], answer: 0, explain: '3 · (−2) = −6; x · x<sup>2</sup> = x<sup>3</sup>. Kết quả: −6x<sup>3</sup>y.' },
    { type: 'short', calc: '-7', q: 'Hệ số của đơn thức thu gọn −7xy<sup>2</sup> là bao nhiêu?', answer: '-7', answerText: '−7', explain: 'Hệ số là phần số đứng trước phần biến: −7.' },
    { type: 'mcq', q: 'Kết quả của 6xy − 9xy + xy là:', options: ['−2xy', '2xy', '−3xy', '16xy'], answer: 0, explain: '(6 − 9 + 1)xy = −2xy.' },
    { type: 'short', calc: '3 * 2 * 2 * (-1)', q: 'Tính giá trị của đơn thức 3x<sup>2</sup>y tại x = 2, y = −1.', answer: '-12', answerText: '−12', explain: '3 · 2<sup>2</sup> · (−1) = 3 · 4 · (−1) = −12.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Số 5 là một đơn thức bậc 0.', answer: true, explain: 'Mỗi số khác 0 là một đơn thức bậc 0.' }
  ]
});
