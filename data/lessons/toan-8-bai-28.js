/* Toán 8 – Bài 28. Hàm số bậc nhất và đồ thị của hàm số bậc nhất. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-8/bai-28', {
    objectives: [
      'Nhận biết được hàm số bậc nhất y = ax + b (a ≠ 0).',
      'Thiết lập được bảng giá trị và vẽ được đồ thị của hàm số bậc nhất.',
      'Nhận biết được đồ thị của hàm số bậc nhất là một đường thẳng; xác định giao điểm với các trục toạ độ.',
      'Vận dụng hàm số bậc nhất và đồ thị vào giải quyết một số bài toán thực tiễn.'
    ],
    intro: 'Tiền gửi xe tăng đều theo số giờ, nhiệt độ nước tăng đều theo thời gian đun… Những quan hệ “tăng đều” ấy được mô tả bởi hàm số bậc nhất, và đồ thị của chúng luôn là một đường thẳng.',
    steps: [
      { title: 'Hàm số bậc nhất', html: `<div class="box key">Hàm số bậc nhất là hàm số cho bởi công thức y = ax + b, trong đó a, b là các số cho trước và a ≠ 0.</div>
        <p>Ví dụ: y = 2x + 1 (a = 2, b = 1); y = −x (a = −1, b = 0); y = {{1|2}}x − 3. Còn y = 0x + 5 hay y = x<sup>2</sup> không phải hàm số bậc nhất.</p>` },
      { title: 'Đồ thị của hàm số y = ax + b', html: `<p>Đồ thị của hàm số y = ax + b (a ≠ 0) là một <b>đường thẳng</b>:</p><ul><li>cắt trục tung tại điểm (0; b);</li><li>song song với đường thẳng y = ax nếu b ≠ 0, trùng với y = ax nếu b = 0.</li></ul>`,
        svg: S.plane({ x: [-4, 4], y: [-3, 5], u: 32, lines: [{ a: 2, b: 0, label: 'y = 2x', color: C.muted, dash: true, at: 0.75 }, { a: 2, b: 1, label: 'y = 2x + 1', color: C.blue, at: 0.95 }] }), caption: 'y = 2x + 1 song song với y = 2x và cắt trục tung tại (0; 1).' },
      { title: 'Cách vẽ đồ thị', html: `<p>Vì đồ thị là đường thẳng nên chỉ cần xác định <b>hai điểm</b>:</p><ol><li>Cho x = 0 ⇒ y = b: điểm (0; b) trên trục tung.</li><li>Cho y = 0 ⇒ x = −{{b|a}}: điểm (−{{b|a}}; 0) trên trục hoành.</li><li>Vẽ đường thẳng đi qua hai điểm đó.</li></ol>`,
        svg: S.plane({ x: [-2, 4], y: [-4, 3], u: 34, lines: [{ a: 2, b: -3, label: 'y = 2x − 3', color: C.blue, at: 0.8 }], pts: [{ x: 0, y: -3, label: '(0; −3)', color: C.red, dx: 8, dy: 4 }, { x: 1.5, y: 0, label: '(1,5; 0)', color: C.red, dx: -66, dy: -8 }] }), caption: 'Vẽ y = 2x − 3 qua (0; −3) và (1,5; 0).' },
      { title: 'Bảng giá trị', html: `<table class="tbl"><tr><th>x</th><td>−1</td><td>0</td><td>1</td><td>2</td></tr><tr><th>y = 2x − 3</th><td>−5</td><td>−3</td><td>−1</td><td>1</td></tr></table>
        <p>Các điểm (−1; −5), (0; −3), (1; −1), (2; 1) đều nằm trên cùng một đường thẳng.</p>` },
      { title: 'Ứng dụng thực tế', html: `<p>Một bể có sẵn 20 lít nước, mỗi phút vòi chảy thêm 5 lít. Lượng nước sau x phút: y = 5x + 20 – một hàm số bậc nhất.</p>`,
        svg: S.plane({ x: [0, 8], y: [0, 7], u: 30, yMul: 10, xName: 'x (phút)', yName: 'y (lít)', lines: [{ a: 0.5, b: 2, label: 'y = 5x + 20', color: C.green, at: 0.5, dy: -12 }], pts: [{ x: 0, y: 2, label: '(0; 20)', color: C.red, dx: 8, dy: 18 }] }), caption: 'Lượng nước y (lít) theo thời gian x (phút); mỗi ô trên trục tung ứng với 10 lít.' }
    ],
    summary: 'y = ax + b (a ≠ 0) là hàm số bậc nhất; đồ thị là đường thẳng cắt trục tung tại (0; b). Vẽ bằng hai điểm (0; b) và (−b/a; 0).',
    examples: [
      { title: 'Nhận biết', problem: 'Hàm số nào là hàm số bậc nhất? Xác định a, b: a) y = 3 − 2x; b) y = 5; c) y = {{x|4}}.', solution: 'a) Có: a = −2, b = 3. b) Không (a = 0). c) Có: a = {{1|4}}, b = 0.' },
      { title: 'Giao điểm với các trục', problem: 'Tìm giao điểm của đồ thị y = −x + 4 với hai trục toạ độ.', solution: 'x = 0 ⇒ y = 4: A(0; 4). y = 0 ⇒ x = 4: B(4; 0).' },
      { title: 'Điểm thuộc đồ thị', problem: 'Tìm m để điểm M(2; m) thuộc đồ thị y = 3x − 5.', solution: 'm = 3 · 2 − 5 = 1.' }
    ],
    exercises: [
      { question: 'Vẽ đồ thị y = −x + 4 (nêu hai điểm cần xác định).', hints: ['Cho x = 0 được y = 4.', 'Cho y = 0 được x = 4.'], solution: 'Đường thẳng qua (0; 4) và (4; 0).' },
      { question: 'Tìm b biết đồ thị y = 2x + b đi qua điểm A(1; 5).', hints: ['Thay x = 1, y = 5.', '5 = 2 + b.'], solution: 'b = 3.' },
      { question: 'Bể có 20 lít nước, mỗi phút chảy thêm 5 lít. Sau bao nhiêu phút bể có 65 lít?', hints: ['y = 5x + 20.', '5x + 20 = 65.'], solution: '9 phút.' }
    ],
    quiz: [
      { type: 'mcq', q: 'Hàm số nào là hàm số bậc nhất?', options: ['y = x<sup>2</sup> + 1', 'y = 5', 'y = 3 − 2x', 'y = {{2|x}}'], answer: 2, explain: 'a = −2 ≠ 0.' },
      { type: 'short', calc: '3 * 2 - 5', q: 'Điểm M(2; m) thuộc đồ thị y = 3x − 5. Tìm m.', answer: '1', explain: 'm = 6 − 5.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Đồ thị hàm số y = 2x + 1 cắt trục tung tại điểm (0; 1).', answer: true, explain: 'Cho x = 0 được y = 1.' },
      { type: 'short', requireSimplest: true, calc: '3 / 2', q: 'Đồ thị y = 2x − 3 cắt trục hoành tại điểm có hoành độ bằng bao nhiêu? (Dạng a/b tối giản.)', answer: ['3/2'], answerText: '3/2', explain: '2x − 3 = 0 ⇔ x = {{3|2}}.' },
      { type: 'short', calc: '5 - 2', q: 'Đồ thị y = 2x + b đi qua A(1; 5). Tìm b.', answer: '3', explain: '5 = 2 + b.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Đồ thị của y = 2x + 1 và y = 2x song song với nhau.', answer: true, explain: 'Cùng hệ số a, khác b.' },
      { type: 'short', calc: '(65 - 20) / 5', q: 'Bể có 20 lít, mỗi phút thêm 5 lít. Sau bao nhiêu phút có 65 lít?', unit: 'phút', answer: '9', explain: '5x + 20 = 65.' },
      { type: 'mcq', q: 'Giao điểm của đồ thị y = −x + 4 với trục hoành là:', options: ['(0; 4)', '(4; 0)', '(−4; 0)', '(0; −4)'], answer: 1, explain: 'y = 0 ⇒ x = 4.' }
    ]
  });
})();
