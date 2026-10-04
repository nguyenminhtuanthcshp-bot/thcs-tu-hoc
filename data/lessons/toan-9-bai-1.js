/* Toán 9 – Bài 1. Khái niệm phương trình và hệ hai phương trình bậc nhất hai ẩn. Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('toan-9/bai-1', {
  objectives: [
    'Nhận biết được phương trình bậc nhất hai ẩn và nghiệm của nó.',
    'Nhận biết được hệ hai phương trình bậc nhất hai ẩn và nghiệm của hệ.',
    'Kiểm tra được một cặp số có là nghiệm của phương trình (hệ phương trình) hay không.',
    'Biết mỗi phương trình bậc nhất hai ẩn có vô số nghiệm, biểu diễn bởi một đường thẳng.'
  ],
  intro: 'An mua một số bút giá 5 nghìn đồng và một số vở giá 8 nghìn đồng, hết 36 nghìn đồng. Gọi x là số bút, y là số vở, ta có 5x + 8y = 36. Đó là một phương trình có <b>hai ẩn</b>.',
  steps: [
    { title: 'Phương trình bậc nhất hai ẩn', html: `<p><b>Phương trình bậc nhất hai ẩn</b> x và y là hệ thức dạng</p>
      <p class="math">ax + by = c</p>
      <p>trong đó a, b, c là các số đã biết, <b>a và b không đồng thời bằng 0</b>.</p>
      <p>Ví dụ: 2x + y = 5; x − 3y = 0; 0x + 2y = 4 đều là phương trình bậc nhất hai ẩn.</p>` },
    { title: 'Nghiệm của phương trình', html: `<p>Cặp số (x₀; y₀) là <b>một nghiệm</b> của phương trình ax + by = c nếu a·x₀ + b·y₀ = c là đẳng thức đúng.</p>
      <p>Ví dụ: (1; 3) là nghiệm của 2x + y = 5 vì 2 · 1 + 3 = 5. Còn (2; 2) không phải nghiệm vì 2 · 2 + 2 = 6 ≠ 5.</p>` },
    { title: 'Vô số nghiệm – một đường thẳng', html: `<p>Phương trình bậc nhất hai ẩn luôn có <b>vô số nghiệm</b>. Chẳng hạn với 2x + y = 5, chọn x tuỳ ý rồi tính y = 5 − 2x: (0; 5), (1; 3), (2; 1), (3; −1)…</p>
      <p>Trên mặt phẳng toạ độ, tập nghiệm của phương trình được biểu diễn bởi <b>một đường thẳng</b>. Với 2x + y = 5, đó là đường thẳng y = −2x + 5.</p>`,
      svg: THCS.svg.plane({ x: [-2, 4], y: [-2, 6], u: 30, lines: [{ a: -2, b: 5, label: '2x + y = 5', color: THCS.svg.C.blue, at: 0.95, dx: 10, dy: 4 }], pts: [{ x: 0, y: 5, label: '(0; 5)', dx: 8, dy: 4 }, { x: 1, y: 3, label: '(1; 3)', dx: 8, dy: 4 }, { x: 2, y: 1, label: '(2; 1)', dx: 8, dy: 4 }] }), caption: 'Mọi nghiệm của 2x + y = 5 nằm trên đường thẳng y = −2x + 5.' },
    { title: 'Hệ hai phương trình bậc nhất hai ẩn', html: `<p>Hệ hai phương trình bậc nhất hai ẩn có dạng</p>
      <p class="math"><span class="sys"><span>ax + by = c</span><span>a'x + b'y = c'</span></span></p>
      <p>Cặp số (x₀; y₀) là <b>nghiệm của hệ</b> nếu nó là nghiệm của <b>cả hai</b> phương trình. <b>Giải hệ</b> là tìm tất cả các nghiệm của hệ.</p>` },
    { title: 'Kiểm tra nghiệm của hệ', html: `<p>Ví dụ: kiểm tra (2; 1) có là nghiệm của hệ <span class="sys"><span>x + 2y = 4</span><span>3x − y = 5</span></span> không.</p>
      <ul><li>Phương trình thứ nhất: 2 + 2 · 1 = 4 ✔</li><li>Phương trình thứ hai: 3 · 2 − 1 = 5 ✔</li></ul>
      <p>Vậy (2; 1) là nghiệm của hệ.</p>
      <div class="box tip">Chỉ cần sai ở <b>một</b> phương trình là cặp số đó không phải nghiệm của hệ.</div>` }
  ],
  summary: 'Phương trình bậc nhất hai ẩn: ax + by = c (a, b không đồng thời bằng 0), có vô số nghiệm, biểu diễn bởi một đường thẳng. Nghiệm của hệ là nghiệm chung của hai phương trình.',
  examples: [
    { title: 'Nhận biết phương trình', problem: 'Trong các phương trình sau, phương trình nào là phương trình bậc nhất hai ẩn: a) 3x − 2y = 1; b) x² + y = 4; c) 0x + 5y = 10?', solution: 'a) Có (a = 3, b = −2). b) Không, vì có x². c) Có (a = 0, b = 5, không đồng thời bằng 0).' },
    { title: 'Tìm nghiệm', problem: 'Tìm ba nghiệm của phương trình x − 2y = 4.', solution: 'Viết x = 4 + 2y. Chọn y = 0 ⇒ x = 4; y = 1 ⇒ x = 6; y = −1 ⇒ x = 2.<br>Ba nghiệm: (4; 0), (6; 1), (2; −1).' },
    { title: 'Kiểm tra nghiệm của hệ', problem: 'Cặp số (1; −1) có là nghiệm của hệ <span class="sys"><span>2x − y = 3</span><span>x + 3y = 1</span></span> không?', solution: 'Phương trình thứ nhất: 2 · 1 − (−1) = 3 ✔.<br>Phương trình thứ hai: 1 + 3 · (−1) = −2 ≠ 1 ✘.<br>Vậy (1; −1) <b>không</b> là nghiệm của hệ.' }
  ],
  exercises: [
    { question: 'Cặp số nào là nghiệm của phương trình 3x + y = 7: (2; 1), (1; 3), (0; 7)?', hints: ['Thay từng cặp (x; y) vào vế trái 3x + y.', 'Cặp nào cho vế trái bằng 7 là nghiệm.'], solution: '(2; 1): 6 + 1 = 7 ✔. (1; 3): 3 + 3 = 6 ✘. (0; 7): 0 + 7 = 7 ✔. Vậy (2; 1) và (0; 7) là nghiệm.' },
    { question: 'Viết phương trình bậc nhất hai ẩn biểu thị: “Tổng số học sinh nam (x) và nữ (y) của lớp 9A là 40”. Nêu một nghiệm phù hợp với thực tế.', hints: ['Tổng x + y bằng 40.', 'Trong thực tế x, y là số tự nhiên. Thử x = 18.'], solution: 'Phương trình: x + y = 40. Một nghiệm phù hợp: (18; 22), tức 18 bạn nam và 22 bạn nữ.' },
    { question: 'Kiểm tra (3; 2) có là nghiệm của hệ <span class="sys"><span>x + y = 5</span><span>2x − 3y = 0</span></span> không.', hints: ['Thay x = 3, y = 2 vào phương trình thứ nhất.', 'Thay tiếp vào phương trình thứ hai: 2 · 3 − 3 · 2 = ?'], solution: '3 + 2 = 5 ✔; 6 − 6 = 0 ✔. Vậy (3; 2) là nghiệm của hệ.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Phương trình nào sau đây là phương trình bậc nhất hai ẩn?', options: ['x² − y = 1', '2x + 3y = 6', 'xy = 4', '{{1|x}} + y = 2'], answer: 1, explain: '2x + 3y = 6 có dạng ax + by = c với a = 2, b = 3.' },
    { type: 'mcq', q: 'Cặp số nào là nghiệm của phương trình x + 2y = 5?', options: ['(1; 1)', '(3; 1)', '(2; 2)', '(0; 3)'], answer: 1, explain: '3 + 2 · 1 = 5.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Phương trình bậc nhất hai ẩn luôn có vô số nghiệm.', answer: true, explain: 'Tập nghiệm được biểu diễn bởi một đường thẳng, gồm vô số điểm.' },
    { type: 'short', calc: '3 * 2 - 4', q: 'Biết (2; y₀) là một nghiệm của phương trình 3x − y = 4. Tìm y₀.', answer: '2', explain: '3 · 2 − y₀ = 4 ⇒ y₀ = 2.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: (1; 2) là nghiệm của hệ <span class="sys"><span>x + y = 3</span><span>x − y = 1</span></span>.', answer: false, explain: '1 + 2 = 3 đúng, nhưng 1 − 2 = −1 ≠ 1. Vậy (1; 2) không là nghiệm của hệ.' },
    { type: 'mcq', q: 'Cặp số nào là nghiệm của hệ <span class="sys"><span>x + y = 4</span><span>x − y = 2</span></span>?', options: ['(1; 3)', '(3; 1)', '(2; 2)', '(4; 0)'], answer: 1, explain: '3 + 1 = 4 và 3 − 1 = 2.' },
    { type: 'short', calc: '(10 - 2 * 0) / 5', q: 'Với x = 0, giá trị của y để (0; y) là nghiệm của phương trình 2x + 5y = 10 là bao nhiêu?', answer: '2', explain: '5y = 10 ⇒ y = 2.' },
    { type: 'mcq', q: 'Trên mặt phẳng toạ độ, tập nghiệm của phương trình x + y = 3 được biểu diễn bởi:', options: ['một điểm', 'hai điểm', 'một đường thẳng', 'một đường tròn'], answer: 2, explain: 'Đó là đường thẳng y = −x + 3.' }
  ]
});
