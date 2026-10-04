/* Toán 8 – Bài tập cuối chương II. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-8/c2-on-tap', {
    objectives: [
      'Hệ thống hoá bảy hằng đẳng thức đáng nhớ và các phương pháp phân tích đa thức thành nhân tử.',
      'Vận dụng hằng đẳng thức để khai triển, rút gọn, tính nhanh và tìm giá trị lớn nhất, nhỏ nhất đơn giản.',
      'Phân tích đa thức thành nhân tử bằng cách phối hợp các phương pháp và vận dụng để tìm x.'
    ],
    intro: 'Chương II là “hộp công cụ” sẽ theo em suốt những năm THCS. Hãy ôn thật chắc trước khi sang phần hình học.',
    steps: [
      { title: 'Sơ đồ chương II', html: `<p>Hai mảng lớn: các hằng đẳng thức và ứng dụng của chúng để phân tích thành nhân tử.</p>`, svg: S.mindmap({ center: 'Hằng đẳng thức', branches: [
        { title: 'Bình phương', items: ['(A ± B)²', 'A² − B²'] },
        { title: 'Lập phương', items: ['(A ± B)³', 'A³ ± B³'] },
        { title: 'Nhân tử', items: ['Nhân tử chung', 'Dùng HĐT', 'Nhóm hạng tử'] },
        { title: 'Ứng dụng', items: ['Tính nhanh', 'Tìm x', 'GTNN'] } ] }), caption: 'Sơ đồ tư duy chương II.' },
      { title: 'Hai chiều của một hằng đẳng thức', html: `<p>Đọc từ trái sang phải để <b>khai triển</b> (tích → tổng); đọc từ phải sang trái để <b>phân tích</b> (tổng → tích).</p>
        <p class="math">(x − 3)<sup>2</sup> ⇄ x<sup>2</sup> − 6x + 9</p>` },
      { title: 'Bẫy thường gặp', html: `<ul><li>(A + B)<sup>2</sup> ≠ A<sup>2</sup> + B<sup>2</sup>.</li><li>A<sup>3</sup> + B<sup>3</sup> ≠ (A + B)<sup>3</sup>.</li><li>Bình phương thiếu A<sup>2</sup> − AB + B<sup>2</sup> không phải bình phương đủ.</li><li>Quên phân tích “đến cùng”.</li></ul>` },
      { title: 'Tìm giá trị nhỏ nhất, lớn nhất', html: `<p>x<sup>2</sup> − 2x + 5 = (x − 1)<sup>2</sup> + 4 ≥ 4 (nhỏ nhất bằng 4 khi x = 1).</p>
        <p>−x<sup>2</sup> + 6x − 1 = 8 − (x − 3)<sup>2</sup> ≤ 8 (lớn nhất bằng 8 khi x = 3).</p>` }
    ],
    summary: 'Bảy hằng đẳng thức dùng theo cả hai chiều; phân tích thành nhân tử bằng nhân tử chung, hằng đẳng thức, nhóm hạng tử; A · B = 0 ⇔ A = 0 hoặc B = 0.',
    examples: [
      { title: 'Rút gọn', problem: 'Rút gọn (x − 2)<sup>3</sup> − x(x − 3)(x + 3) + 6x<sup>2</sup>.', solution: '(x − 2)<sup>3</sup> = x<sup>3</sup> − 6x<sup>2</sup> + 12x − 8; x(x<sup>2</sup> − 9) = x<sup>3</sup> − 9x.<br>Kết quả: x<sup>3</sup> − 6x<sup>2</sup> + 12x − 8 − x<sup>3</sup> + 9x + 6x<sup>2</sup> = 21x − 8.' },
      { title: 'Phân tích', problem: 'Phân tích x<sup>3</sup> − 2x<sup>2</sup> + x − xy<sup>2</sup>.', solution: 'x(x<sup>2</sup> − 2x + 1 − y<sup>2</sup>) = x[(x − 1)<sup>2</sup> − y<sup>2</sup>] = x(x − 1 − y)(x − 1 + y).' },
      { title: 'Giá trị lớn nhất', problem: 'Tìm giá trị lớn nhất của B = 4x − x<sup>2</sup>.', solution: 'B = 4 − (x<sup>2</sup> − 4x + 4) = 4 − (x − 2)<sup>2</sup> ≤ 4. Lớn nhất bằng 4 khi x = 2.' }
    ],
    exercises: [
      { question: 'Tính nhanh 1002<sup>2</sup> − 4 · 1002 + 4.', hints: ['Dạng A<sup>2</sup> − 2 · A · 2 + 2<sup>2</sup>.', '(1002 − 2)<sup>2</sup>.'], solution: '1000<sup>2</sup> = 1 000 000.' },
      { question: 'Tìm x biết (2x − 1)<sup>2</sup> − 25 = 0.', hints: ['Hiệu hai bình phương: (2x − 1 − 5)(2x − 1 + 5).', '(2x − 6)(2x + 4) = 0.'], solution: 'x = 3 hoặc x = −2.' },
      { question: 'Chứng minh (n + 3)<sup>2</sup> − (n − 1)<sup>2</sup> chia hết cho 8 với mọi số nguyên n.', hints: ['Dùng hiệu hai bình phương.', '(n + 3 − n + 1)(n + 3 + n − 1) = 4(2n + 2).'], solution: '= 8(n + 1), chia hết cho 8.' }
    ],
    quiz: [
      { type: 'mcq', q: '(2x − 3)<sup>2</sup> bằng:', options: ['4x<sup>2</sup> − 9', '4x<sup>2</sup> − 6x + 9', '4x<sup>2</sup> − 12x + 9', '2x<sup>2</sup> − 12x + 9'], answer: 2, explain: '2 · 2x · 3 = 12x.' },
      { type: 'mcq', q: 'x<sup>3</sup> − 27 bằng:', options: ['(x − 3)<sup>3</sup>', '(x − 3)(x<sup>2</sup> + 3x + 9)', '(x − 3)(x<sup>2</sup> − 3x + 9)', '(x + 3)(x<sup>2</sup> − 3x + 9)'], answer: 1, explain: 'Hiệu hai lập phương.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: x<sup>2</sup> − 2x + 5 &gt; 0 với mọi x.', answer: true, explain: '(x − 1)<sup>2</sup> + 4 ≥ 4.' },
      { type: 'short', calc: '(1002 - 2) ** 2', q: 'Tính nhanh 1002<sup>2</sup> − 4 · 1002 + 4.', answer: '1000000', explain: '(1002 − 2)<sup>2</sup>.' },
      { type: 'short', calc: '4', q: 'Giá trị lớn nhất của B = 4x − x<sup>2</sup> là bao nhiêu?', answer: '4', explain: 'B = 4 − (x − 2)<sup>2</sup> ≤ 4.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: 2x<sup>2</sup> − 8 = 2(x − 2)<sup>2</sup>.', answer: false, explain: '2x<sup>2</sup> − 8 = 2(x − 2)(x + 2).' },
      { type: 'mcq', q: 'Các giá trị x thoả mãn (2x − 1)<sup>2</sup> = 25 là:', options: ['3', '3 và −2', '−3 và 2', '13 và −12'], answer: 1, explain: '2x − 1 = 5 hoặc 2x − 1 = −5.' },
      { type: 'short', calc: '21 * 2 - 8', q: 'Rút gọn (x − 2)<sup>3</sup> − x(x − 3)(x + 3) + 6x<sup>2</sup> rồi tính giá trị tại x = 2.', answer: '34', explain: 'Rút gọn được 21x − 8; tại x = 2: 42 − 8 = 34.' }
    ]
  });
})();
