/* Toán 8 – Bài 27. Khái niệm hàm số và đồ thị của hàm số. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-8/bai-27', {
    objectives: [
      'Nhận biết được những mô hình thực tế dẫn đến khái niệm hàm số.',
      'Tính được giá trị của hàm số khi hàm số đó xác định bởi công thức.',
      'Xác định được toạ độ của một điểm trên mặt phẳng toạ độ; xác định được một điểm khi biết toạ độ của nó.',
      'Nhận biết được đồ thị của hàm số.'
    ],
    intro: 'Tiền điện phụ thuộc vào số điện tiêu thụ, quãng đường phụ thuộc vào thời gian… Khi mỗi giá trị của đại lượng này cho đúng một giá trị của đại lượng kia, ta có một hàm số.',
    steps: [
      { title: 'Khái niệm hàm số', html: `<p>Nếu đại lượng y phụ thuộc vào đại lượng thay đổi x sao cho với <b>mỗi giá trị của x</b>, ta luôn xác định được <b>chỉ một giá trị tương ứng của y</b> thì y gọi là <b>hàm số</b> của x, x gọi là <b>biến số</b>.</p>
        <p>Hàm số có thể cho bằng bảng hoặc bằng công thức, ví dụ y = 2x + 1, y = 3x<sup>2</sup>.</p>
        <table class="tbl"><tr><th>x</th><td>1</td><td>2</td><td>3</td><td>4</td></tr><tr><th>y = 5x</th><td>5</td><td>10</td><td>15</td><td>20</td></tr></table>` },
      { title: 'Giá trị của hàm số', html: `<p>Với hàm số y = f(x), giá trị của y tại x = a được kí hiệu f(a).</p>
        <p>Ví dụ: f(x) = 2x − 3 ⇒ f(0) = −3, f(2) = 1, f(−1) = −5.</p>` },
      { title: 'Mặt phẳng toạ độ', html: `<p>Hai trục số Ox (trục hoành) và Oy (trục tung) vuông góc với nhau tại gốc O tạo thành <b>mặt phẳng toạ độ Oxy</b>. Mỗi điểm M được xác định bởi cặp số (x<sub>0</sub>; y<sub>0</sub>): x<sub>0</sub> là hoành độ, y<sub>0</sub> là tung độ.</p>`,
        svg: S.plane({ x: [-4, 4], y: [-3, 4], u: 36, pts: [{ x: 3, y: 2, label: 'M(3; 2)', proj: true, color: C.red }, { x: -2, y: 3, label: 'N(−2; 3)', proj: true, color: C.blue }, { x: -3, y: -2, label: 'P(−3; −2)', proj: true, color: C.green, dy: 18 }] }), caption: 'Các điểm M, N, P trên mặt phẳng toạ độ.' },
      { title: 'Đồ thị của hàm số', html: `<p><b>Đồ thị</b> của hàm số y = f(x) là tập hợp tất cả các điểm M(x; f(x)) trên mặt phẳng toạ độ.</p>
        <p>Ví dụ: hàm số cho bởi bảng x: −2, −1, 0, 1, 2 và y: 4, 1, 0, 1, 4 có đồ thị gồm 5 điểm.</p>`,
        svg: S.plane({ x: [-3, 3], y: [-1, 5], u: 34, pts: [{ x: -2, y: 4, label: '(−2; 4)', dx: -26, dy: -10 }, { x: -1, y: 1, label: '(−1; 1)', dx: -60 }, { x: 0, y: 0 }, { x: 1, y: 1, label: '(1; 1)' }, { x: 2, y: 4, label: '(2; 4)' }] }), caption: 'Đồ thị hàm số cho bằng bảng gồm các điểm rời rạc.' }
    ],
    summary: 'Mỗi x cho đúng một y ⇒ y là hàm số của x. f(a) là giá trị của hàm số tại a. Đồ thị là tập hợp các điểm (x; f(x)).',
    examples: [
      { title: 'Nhận biết hàm số', problem: 'Bảng sau có xác định y là hàm số của x không? x: 1, 2, 2, 3; y: 4, 5, 6, 7.', solution: 'Không, vì x = 2 ứng với hai giá trị y khác nhau (5 và 6).' },
      { title: 'Tính giá trị', problem: 'Cho f(x) = x<sup>2</sup> − 2x. Tính f(3), f(−1).', solution: 'f(3) = 9 − 6 = 3; f(−1) = 1 + 2 = 3.' },
      { title: 'Thực tế', problem: 'Giá cước taxi: 12 000 đồng cho km đầu tiên và 10 000 đồng cho mỗi km tiếp theo. Viết công thức tính tiền y (đồng) theo quãng đường x km (x ≥ 1) và tính tiền khi đi 8 km.', solution: 'y = 12 000 + 10 000(x − 1). Khi x = 8: y = 12 000 + 70 000 = 82 000 đồng.' }
    ],
    exercises: [
      { question: 'Cho hàm số y = f(x) = −3x + 2. Tính f(0), f(1), f(−2).', hints: ['Thay từng giá trị vào công thức.', 'f(−2) = 6 + 2.'], solution: 'f(0) = 2, f(1) = −1, f(−2) = 8.' },
      { question: 'Điểm A(0; −3) nằm trên trục nào?', hints: ['Hoành độ bằng 0.', 'Điểm có hoành độ 0 nằm trên trục tung.'], solution: 'Trên trục tung Oy.' },
      { question: 'Điểm M(2; 5) có thuộc đồ thị hàm số y = 3x − 1 không?', hints: ['Tính 3 · 2 − 1.', 'So sánh với tung độ 5.'], solution: 'Có, vì 3 · 2 − 1 = 5.' }
    ],
    quiz: [
      { type: 'short', calc: '2 * 2 - 3', q: 'Cho f(x) = 2x − 3. Tính f(2).', answer: '1', explain: '4 − 3 = 1.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Bảng x: 1, 2, 2, 3; y: 4, 5, 6, 7 xác định y là hàm số của x.', answer: false, explain: 'x = 2 ứng với hai giá trị của y.' },
      { type: 'mcq', q: 'Điểm N(−2; 3) có hoành độ là:', options: ['3', '−2', '2', '−3'], answer: 1, explain: 'Hoành độ là số đứng trước.' },
      { type: 'short', calc: '12000 + 10000 * 7', q: 'Taxi: 12 000 đồng km đầu, 10 000 đồng mỗi km sau. Đi 8 km hết bao nhiêu đồng?', unit: 'đồng', answer: '82000', explain: '12 000 + 7 · 10 000.' },
      { type: 'mcq', q: 'Điểm nào thuộc đồ thị hàm số y = 3x − 1?', options: ['(1; 3)', '(2; 5)', '(0; 1)', '(−1; 2)'], answer: 1, explain: '3 · 2 − 1 = 5.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Điểm A(0; −3) nằm trên trục tung.', answer: true, explain: 'Hoành độ bằng 0.' },
      { type: 'short', calc: '(-1) * (-1) - 2 * (-1)', q: 'Cho f(x) = x<sup>2</sup> − 2x. Tính f(−1).', answer: '3', explain: '1 + 2 = 3.' },
      { type: 'short', calc: '-3 * (-2) + 2', q: 'Cho f(x) = −3x + 2. Tính f(−2).', answer: '8', explain: '6 + 2 = 8.' }
    ]
  });
})();
