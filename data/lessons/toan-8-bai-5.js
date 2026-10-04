/* Toán 8 – Bài 5. Phép chia đa thức cho đơn thức. Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('toan-8/bai-5', {
  objectives: [
    'Nhận biết khi nào đơn thức A chia hết cho đơn thức B.',
    'Thực hiện được phép chia đơn thức cho đơn thức.',
    'Thực hiện được phép chia đa thức cho đơn thức trong trường hợp chia hết.'
  ],
  intro: 'Nếu phép nhân “ghép” các đơn thức lại với nhau thì phép chia “tách” chúng ra. Bài này giúp em biết khi nào chia được và chia như thế nào.',
  steps: [
    { title: 'Khi nào đơn thức A chia hết cho đơn thức B?', html: `<p>Đơn thức A chia hết cho đơn thức B (B ≠ 0) khi <b>mỗi biến của B đều là biến của A</b> với <b>số mũ không lớn hơn</b> số mũ của nó trong A.</p>
      <p>Ví dụ: 6x<sup>3</sup>y<sup>2</sup> chia hết cho 2xy<sup>2</sup>, nhưng 6x<sup>3</sup>y<sup>2</sup> <b>không</b> chia hết cho xz (vì z không có trong A) hay cho y<sup>3</sup> (số mũ 3 &gt; 2).</p>` },
    { title: 'Chia đơn thức cho đơn thức', html: `<ol><li>Chia hệ số của A cho hệ số của B.</li><li>Chia luỹ thừa của từng biến trong A cho luỹ thừa của cùng biến đó trong B: x<sup>m</sup> : x<sup>n</sup> = x<sup>m − n</sup> (m ≥ n).</li><li>Nhân các kết quả lại.</li></ol>
      <p class="math">12x<sup>4</sup>y<sup>3</sup> : (−4x<sup>2</sup>y) = −3x<sup>2</sup>y<sup>2</sup></p>
      <div class="box tip">x<sup>n</sup> : x<sup>n</sup> = 1 (x ≠ 0), nên biến đó “biến mất” khỏi thương.</div>` },
    { title: 'Chia đa thức cho đơn thức', html: `<p>Đa thức A chia hết cho đơn thức B khi <b>mọi hạng tử</b> của A đều chia hết cho B. Khi đó chia từng hạng tử của A cho B rồi cộng các kết quả.</p>
      <p class="math">(9x<sup>3</sup>y − 6x<sup>2</sup>y<sup>2</sup> + 3xy) : 3xy = 3x<sup>2</sup> − 2xy + 1</p>` },
    { title: 'Kiểm tra lại bằng phép nhân', html: `<p>Nếu A : B = Q thì Q · B = A. Luôn thử lại: 3xy · (3x<sup>2</sup> − 2xy + 1) = 9x<sup>3</sup>y − 6x<sup>2</sup>y<sup>2</sup> + 3xy ✓.</p>
      <div class="box warn">Hạng tử bằng chính B khi chia cho B được <b>1</b>, không phải 0.</div>` }
  ],
  summary: 'Chia đơn thức: chia hệ số, trừ số mũ từng biến (cần mỗi biến của B có trong A với số mũ không lớn hơn). Chia đa thức cho đơn thức: chia từng hạng tử rồi cộng lại.',
  examples: [
    { title: 'Xét tính chia hết', problem: 'Đơn thức 8x<sup>2</sup>y<sup>3</sup>z có chia hết cho các đơn thức sau không: a) 2xy<sup>2</sup>; b) 4x<sup>3</sup>y; c) −yz?', solution: 'a) Có (x: 1 ≤ 2; y: 2 ≤ 3).<br>b) Không, vì x trong B có số mũ 3 &gt; 2.<br>c) Có (y: 1 ≤ 3; z: 1 ≤ 1); thương là −8x<sup>2</sup>y<sup>2</sup>.' },
    { title: 'Chia đơn thức', problem: 'Tính (−15x<sup>5</sup>y<sup>4</sup>z<sup>2</sup>) : (5x<sup>2</sup>y<sup>4</sup>z).', solution: 'Hệ số: −15 : 5 = −3; x<sup>5 − 2</sup> = x<sup>3</sup>; y<sup>4 − 4</sup> = 1; z<sup>2 − 1</sup> = z. Thương: −3x<sup>3</sup>z.' },
    { title: 'Chia đa thức rồi tính giá trị', problem: 'Tính (4x<sup>3</sup>y<sup>2</sup> − 8x<sup>2</sup>y + 2xy) : 2xy rồi tính giá trị thương tại x = 1, y = −2.', solution: 'Thương Q = 2x<sup>2</sup>y − 4x + 1. Tại x = 1, y = −2: Q = 2 · 1 · (−2) − 4 + 1 = −7.' }
  ],
  exercises: [
    { question: 'Tính: 20x<sup>4</sup>y<sup>3</sup> : (−4x<sup>3</sup>y).', hints: ['Hệ số: 20 : (−4).', 'x<sup>4 − 3</sup>, y<sup>3 − 1</sup>.'], solution: '−5xy<sup>2</sup>.' },
    { question: 'Tính: (6x<sup>4</sup> − 9x<sup>3</sup> + 3x<sup>2</sup>) : 3x<sup>2</sup>.', hints: ['Chia từng hạng tử cho 3x<sup>2</sup>.', '3x<sup>2</sup> : 3x<sup>2</sup> = 1.'], solution: '2x<sup>2</sup> − 3x + 1.' },
    { question: 'Tìm số tự nhiên n để đa thức 5x<sup>4</sup>y<sup>3</sup> − 2x<sup>3</sup>y<sup>2</sup> chia hết cho đơn thức x<sup>n</sup>y<sup>2</sup>.', hints: ['Mỗi hạng tử phải chia hết cho x<sup>n</sup>y<sup>2</sup>.', 'Số mũ của x trong các hạng tử là 4 và 3, nên n ≤ 3.'], solution: 'n ∈ {0; 1; 2; 3}.' }
  ],
  quiz: [
    { type: 'mcq', q: '10x<sup>5</sup> : 2x<sup>2</sup> bằng:', options: ['5x<sup>3</sup>', '5x<sup>7</sup>', '8x<sup>3</sup>', '5x<sup>2</sup>'], answer: 0, explain: '10 : 2 = 5; x<sup>5 − 2</sup> = x<sup>3</sup>.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Đơn thức 7x<sup>2</sup>y chia hết cho đơn thức xy<sup>2</sup>.', answer: false, explain: 'Số mũ của y trong xy<sup>2</sup> là 2, lớn hơn số mũ 1 trong 7x<sup>2</sup>y.' },
    { type: 'mcq', q: '(−12x<sup>3</sup>y<sup>2</sup>) : (3xy<sup>2</sup>) bằng:', options: ['−4x<sup>2</sup>y', '−4x<sup>2</sup>', '4x<sup>2</sup>', '−9x<sup>2</sup>'], answer: 1, explain: '−12 : 3 = −4; x<sup>2</sup>; y<sup>0</sup> = 1.' },
    { type: 'mcq', q: '(8x<sup>3</sup> − 4x<sup>2</sup> + 2x) : 2x bằng:', options: ['4x<sup>2</sup> − 2x', '4x<sup>2</sup> − 2x + 1', '4x<sup>2</sup> − 2x + 2x', '6x<sup>2</sup> − 2x + 1'], answer: 1, explain: 'Chia từng hạng tử: 4x<sup>2</sup> − 2x + 1 (2x : 2x = 1).' },
    { type: 'short', calc: '(6 * 2 * 2 * 2) / (3 * 2)', q: 'Tính giá trị của 6x<sup>3</sup> : 3x tại x = 2.', answer: '8', explain: '6x<sup>3</sup> : 3x = 2x<sup>2</sup> = 2 · 4 = 8.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Đa thức x<sup>3</sup>y + xy<sup>2</sup> chia hết cho đơn thức xy.', answer: true, explain: 'Cả hai hạng tử đều chia hết cho xy; thương là x<sup>2</sup> + y.' },
    { type: 'short', calc: '3', q: 'Số tự nhiên n lớn nhất để x<sup>5</sup> − 4x<sup>3</sup> chia hết cho x<sup>n</sup> là bao nhiêu?', answer: '3', explain: 'Số mũ nhỏ nhất của x trong các hạng tử là 3, nên n lớn nhất là 3.' },
    { type: 'short', calc: '3 * 2 - 2 * (-1) + 1', q: '(9x<sup>2</sup>y − 6xy<sup>2</sup> + 3xy) : 3xy = Q. Tính giá trị của Q tại x = 2, y = −1.', answer: '9', explain: 'Q = 3x − 2y + 1 = 6 + 2 + 1 = 9.' }
  ]
});
