/* Toán 8 – Luyện tập chung (sau Bài 9). Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('toan-8/c2-ltc-2', {
  objectives: [
    'Lựa chọn và phối hợp được các phương pháp phân tích đa thức thành nhân tử.',
    'Vận dụng phân tích thành nhân tử để tìm x và tính nhanh giá trị biểu thức.',
    'Chứng minh được một số tính chất chia hết đơn giản nhờ phân tích thành nhân tử.'
  ],
  intro: 'Trong thực tế, hiếm khi một phương pháp là đủ. Buổi luyện tập này dạy em cách “phối hợp” – bước nào trước, bước nào sau.',
  steps: [
    { title: 'Quy trình gợi ý', html: `<ol><li>Có nhân tử chung không? Nếu có, đặt ra ngoài trước.</li><li>Phần còn lại có phải hằng đẳng thức không?</li><li>Nếu có từ 4 hạng tử, thử nhóm hạng tử.</li><li>Kiểm tra từng nhân tử còn phân tích tiếp được không.</li></ol>` },
    { title: 'Ví dụ phối hợp', html: `<p class="math">3x<sup>3</sup> − 12x<sup>2</sup> + 12x = 3x(x<sup>2</sup> − 4x + 4) = 3x(x − 2)<sup>2</sup></p>
      <p class="math">x<sup>3</sup> + x<sup>2</sup> − x − 1 = x<sup>2</sup>(x + 1) − (x + 1) = (x + 1)(x<sup>2</sup> − 1) = (x + 1)<sup>2</sup>(x − 1)</p>` },
    { title: 'Tách một hạng tử (mở rộng)', html: `<p>Với tam thức x<sup>2</sup> + bx + c, có thể tách bx thành tổng hai hạng tử có tích hệ số bằng c:</p>
      <p class="math">x<sup>2</sup> + 5x + 6 = x<sup>2</sup> + 2x + 3x + 6 = x(x + 2) + 3(x + 2) = (x + 2)(x + 3)</p>` },
    { title: 'Chứng minh chia hết', html: `<p>n<sup>3</sup> − n = n(n − 1)(n + 1) là tích ba số nguyên liên tiếp, nên luôn chia hết cho 2 và cho 3, tức chia hết cho 6.</p>` }
  ],
  summary: 'Nhân tử chung trước, hằng đẳng thức sau, nhóm khi có nhiều hạng tử; phân tích “đến cùng”.',
  examples: [
    { title: 'Phân tích triệt để', problem: 'Phân tích x<sup>4</sup> − 16.', solution: '(x<sup>2</sup> − 4)(x<sup>2</sup> + 4) = (x − 2)(x + 2)(x<sup>2</sup> + 4).' },
    { title: 'Tìm x', problem: 'Tìm x biết 2x(x − 5) − x + 5 = 0.', solution: '2x(x − 5) − (x − 5) = (x − 5)(2x − 1) = 0 ⇒ x = 5 hoặc x = {{1|2}}.' },
    { title: 'Tính nhanh giá trị', problem: 'Tính nhanh A = x<sup>2</sup> − y<sup>2</sup> + 2x + 1 tại x = 49, y = 30.', solution: 'Nhóm x<sup>2</sup> + 2x + 1 = (x + 1)<sup>2</sup>, nên A = (x + 1 − y)(x + 1 + y) = (50 − 30)(50 + 30) = 20 · 80 = 1600.' }
  ],
  exercises: [
    { question: 'Phân tích 5x<sup>2</sup> − 10xy + 5y<sup>2</sup>.', hints: ['Đặt 5 ra ngoài.', 'x<sup>2</sup> − 2xy + y<sup>2</sup> = (x − y)<sup>2</sup>.'], solution: '5(x − y)<sup>2</sup>.' },
    { question: 'Phân tích x<sup>2</sup> − 7x + 12 bằng cách tách hạng tử.', hints: ['Tìm hai số có tích 12 và tổng −7.', '−3 và −4.'], solution: '(x − 3)(x − 4).' },
    { question: 'Tìm x biết x<sup>3</sup> − x<sup>2</sup> − 4x + 4 = 0.', hints: ['Nhóm x<sup>2</sup>(x − 1) − 4(x − 1).', '(x − 1)(x − 2)(x + 2) = 0.'], solution: 'x ∈ {1; 2; −2}.' }
  ],
  quiz: [
    { type: 'mcq', q: '3x<sup>2</sup> − 3 phân tích thành:', options: ['3(x − 1)<sup>2</sup>', '3(x − 1)(x + 1)', '(3x − 1)(x + 3)', '3x(x − 1)'], answer: 1, explain: '3(x<sup>2</sup> − 1).' },
    { type: 'mcq', q: 'x<sup>2</sup> + 5x + 6 bằng:', options: ['(x + 1)(x + 6)', '(x + 2)(x + 3)', '(x − 2)(x − 3)', '(x + 5)(x + 1)'], answer: 1, explain: '2 + 3 = 5, 2 · 3 = 6.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: n<sup>3</sup> − n chia hết cho 6 với mọi số nguyên n.', answer: true, explain: 'Tích ba số nguyên liên tiếp.' },
    { type: 'short', calc: '(49 + 1 - 30) * (49 + 1 + 30)', q: 'Tính A = x<sup>2</sup> + 2x + 1 − y<sup>2</sup> tại x = 49, y = 30.', answer: '1600', explain: '(x + 1 − y)(x + 1 + y) = 20 · 80.' },
    { type: 'short', calc: '1/2', requireSimplest: true, q: 'Phương trình (x − 5)(2x − 1) = 0 có một nghiệm là 5. Nghiệm còn lại là bao nhiêu? (Viết dạng a/b tối giản.)', answer: ['1/2'], answerText: '1/2', explain: '2x − 1 = 0 ⇒ x = {{1|2}}.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: x<sup>4</sup> − 16 = (x<sup>2</sup> − 4)(x<sup>2</sup> + 4) là đã phân tích triệt để.', answer: false, explain: 'x<sup>2</sup> − 4 còn phân tích được thành (x − 2)(x + 2).' },
    { type: 'mcq', q: 'Nghiệm của x<sup>3</sup> − x<sup>2</sup> − 4x + 4 = 0 là:', options: ['1; 4', '1; 2; −2', '−1; 2; −2', '2; −2'], answer: 1, explain: '(x − 1)(x − 2)(x + 2) = 0.' },
    { type: 'short', calc: '3 + 4', q: 'x<sup>2</sup> − 7x + 12 = (x − a)(x − b) với a &lt; b. Tính a + b.', answer: '7', explain: 'a = 3, b = 4.' }
  ]
});
