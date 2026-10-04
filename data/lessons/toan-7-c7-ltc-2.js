/* Toán 7 – Chương VII. Luyện tập chung (sau Bài 28). Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('toan-7/c7-ltc-2', {
  objectives: [
    'Thực hiện thành thạo phép nhân đa thức một biến.',
    'Thực hiện phép chia đa thức (chia hết và có dư) bằng cách đặt tính.',
    'Vận dụng nhân, chia đa thức để rút gọn biểu thức và giải bài toán thực tế.'
  ],
  intro: 'Luyện tập Bài 27 và Bài 28. Nhân và chia đa thức là hai phép toán ngược nhau – dùng phép này để kiểm tra phép kia.',
  steps: [
    { title: 'Nhân đa thức', html: `<p>Mỗi hạng tử của đa thức này nhân với từng hạng tử của đa thức kia; thu gọn. Kiểm tra nhanh: số hạng tử trước khi thu gọn = tích số hạng tử của hai đa thức.</p>` },
    { title: 'Chia đa thức', html: `<p>Sắp xếp cả hai đa thức theo luỹ thừa giảm dần (điền 0 cho bậc thiếu). Lặp lại: chia hạng tử cao nhất – nhân – trừ, đến khi dư có bậc nhỏ hơn bậc đa thức chia.</p>` },
    { title: 'Kiểm tra bằng phép nhân', html: `<p>Sau khi chia A cho B được Q dư R, kiểm tra: B · Q + R có bằng A không.</p>
      <p>Ví dụ: (x<sup>3</sup> − 1) : (x − 1) = x<sup>2</sup> + x + 1. Kiểm tra: (x − 1)(x<sup>2</sup> + x + 1) = x<sup>3</sup> + x<sup>2</sup> + x − x<sup>2</sup> − x − 1 = x<sup>3</sup> − 1 ✓.</p>` },
    { title: 'Ứng dụng hình học', html: `<p>Hình hộp chữ nhật có các kích thước x, x + 1, x + 2: thể tích V = x(x + 1)(x + 2) = x<sup>3</sup> + 3x<sup>2</sup> + 2x.</p>
      <p>Biết diện tích hình chữ nhật là x<sup>2</sup> + 5x + 6 và một cạnh là x + 2 thì cạnh kia là (x<sup>2</sup> + 5x + 6) : (x + 2) = x + 3.</p>` }
  ],
  summary: 'Nhân: từng hạng tử × từng hạng tử. Chia: đặt tính, dừng khi bậc dư nhỏ hơn bậc đa thức chia. Kiểm tra A = B · Q + R. Dùng để tính diện tích, thể tích, tìm cạnh.',
  examples: [
    { title: 'Nhân ba nhân tử', problem: 'Tính x(x + 1)(x + 2).', solution: 'x(x<sup>2</sup> + 3x + 2) = x<sup>3</sup> + 3x<sup>2</sup> + 2x.' },
    { title: 'Chia có dư', problem: 'Chia (2x<sup>3</sup> + x<sup>2</sup> − 4) cho (x + 1).', solution: '2x<sup>3</sup> + x<sup>2</sup> + 0x − 4: thương 2x<sup>2</sup> − x + 1, dư −5.' },
    { title: 'Tìm cạnh', problem: 'Hình chữ nhật diện tích x<sup>2</sup> + 5x + 6, một cạnh x + 2. Tìm cạnh kia.', solution: 'x + 3.' }
  ],
  exercises: [
    { question: 'Tính (x + 1)(x<sup>2</sup> − x + 1).', hints: ['Nhân từng hạng tử.', 'Các hạng tử x<sup>2</sup>, x triệt tiêu.'], solution: 'x<sup>3</sup> + 1.' },
    { question: 'Chia (x<sup>4</sup> − 1) cho (x<sup>2</sup> + 1).', hints: ['Viết x<sup>4</sup> + 0x<sup>3</sup> + 0x<sup>2</sup> + 0x − 1.', 'Thương bắt đầu bằng x<sup>2</sup>.'], solution: 'Thương x<sup>2</sup> − 1, dư 0.' },
    { question: 'Thể tích hình hộp chữ nhật kích thước x, x + 1, x + 2 (cm) khi x = 3?', hints: ['V = x<sup>3</sup> + 3x<sup>2</sup> + 2x.', 'Hoặc 3 · 4 · 5.'], solution: '60 cm³.' }
  ],
  quiz: [
    { type: 'short', calc: '3 * 4 * 5', q: 'Hình hộp chữ nhật kích thước x, x + 1, x + 2 (cm). Thể tích khi x = 3 là bao nhiêu cm³?', unit: 'cm³', answer: '60', explain: '3 · 4 · 5 = 60.' },
    { type: 'mcq', q: '(x + 1)(x<sup>2</sup> − x + 1) bằng:', options: ['x<sup>3</sup> − 1', 'x<sup>3</sup> + 1', 'x<sup>3</sup> + 2x<sup>2</sup> + 1', 'x<sup>3</sup> + x + 1'], answer: 1, explain: 'Các hạng tử giữa triệt tiêu.' },
    { type: 'short', calc: 'poly([-4, 0, 1, 2], -1)', q: 'Dư của phép chia (2x<sup>3</sup> + x<sup>2</sup> − 4) cho (x + 1)?', answer: '-5', answerText: '−5', explain: 'Thương 2x<sup>2</sup> − x + 1; (x + 1)(2x<sup>2</sup> − x + 1) = 2x<sup>3</sup> + x<sup>2</sup> + 1 nên dư −4 − 1 = −5.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: (x<sup>4</sup> − 1) chia hết cho (x<sup>2</sup> + 1).', answer: true, explain: 'Thương x<sup>2</sup> − 1.' },
    { type: 'short', calc: 'poly([2, 3, 1], 4)', q: 'x(x + 1)(x + 2) : x = x<sup>2</sup> + 3x + 2. Tính giá trị tại x = 4.', answer: '30', explain: '16 + 12 + 2.' },
    { type: 'mcq', q: 'Hình chữ nhật diện tích x<sup>2</sup> + 5x + 6, một cạnh x + 2. Cạnh kia là:', options: ['x + 1', 'x + 3', 'x + 4', 'x − 3'], answer: 1, explain: '(x + 2)(x + 3) = x<sup>2</sup> + 5x + 6.' },
    { type: 'short', calc: '3', q: 'Bậc của x(x + 1)(x + 2) là bao nhiêu?', answer: '3', explain: 'x<sup>3</sup> + 3x<sup>2</sup> + 2x.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Có thể kiểm tra phép chia bằng cách tính B · Q + R.', answer: true, explain: 'A = B · Q + R.' }
  ]
});
