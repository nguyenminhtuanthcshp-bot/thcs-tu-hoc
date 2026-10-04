/* Toán 9 – Bài 4. Phương trình quy về phương trình bậc nhất một ẩn. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-9/bai-4', {
    objectives: [
      'Giải được phương trình tích dạng (ax + b)(cx + d) = 0.',
      'Giải được phương trình chứa ẩn ở mẫu quy về phương trình bậc nhất: tìm điều kiện xác định, quy đồng, khử mẫu, đối chiếu điều kiện.',
      'Vận dụng phương trình tích, phương trình chứa ẩn ở mẫu để giải bài toán thực tế.'
    ],
    intro: 'Nhiều phương trình trông “khó” nhưng thực ra có thể tách thành những phương trình bậc nhất quen thuộc. Bài này giới thiệu hai dạng như vậy.',
    steps: [
      { title: 'Phương trình tích', html: `<div class="box key">A · B = 0 ⇔ A = 0 hoặc B = 0.</div><p>Muốn giải (ax + b)(cx + d) = 0: giải hai phương trình ax + b = 0 và cx + d = 0 rồi lấy tất cả các nghiệm.</p><p>Ví dụ: (x − 3)(2x + 1) = 0 ⇔ x = 3 hoặc x = −{{1|2}}.</p>` },
      { title: 'Đưa về phương trình tích', html: `<p>Chuyển hết sang một vế, phân tích vế đó thành nhân tử (đặt nhân tử chung, hằng đẳng thức…).</p><p>Ví dụ: x<sup>2</sup> = 5x ⇔ x<sup>2</sup> − 5x = 0 ⇔ x(x − 5) = 0 ⇔ x = 0 hoặc x = 5.</p><div class="box warn">Không được chia hai vế cho x: sẽ làm mất nghiệm x = 0.</div>` },
      { title: 'Điều kiện xác định', html: `<p>Với phương trình chứa ẩn ở mẫu, <b>điều kiện xác định</b> (ĐKXĐ) là điều kiện để mọi mẫu khác 0.</p><p>Ví dụ: {{2|x − 1}} + {{1|x}} = 3 có ĐKXĐ: x ≠ 1 và x ≠ 0.</p>` },
      { title: 'Bốn bước giải phương trình chứa ẩn ở mẫu', html: `<p>Làm theo đúng thứ tự:</p>`,
        svg: S.flow({ items: [{ title: 'Bước 1', text: 'Tìm ĐKXĐ' }, { title: 'Bước 2', text: 'Quy đồng, khử mẫu' }, { title: 'Bước 3', text: 'Giải phương trình' }, { title: 'Bước 4', text: 'Đối chiếu ĐKXĐ, kết luận' }] }), caption: 'Bước 4 rất quan trọng: loại giá trị làm mẫu bằng 0.' },
      { title: 'Ví dụ có nghiệm bị loại', html: `<p>Giải {{x|x − 2}} = {{2|x − 2}} + 1 (ĐKXĐ x ≠ 2). Khử mẫu: x = 2 + (x − 2) ⇔ x = x, đúng với mọi x. Đối chiếu ĐKXĐ: phương trình có nghiệm là mọi số x ≠ 2.</p><p>Còn {{x|x − 2}} = {{2|x − 2}}: khử mẫu được x = 2, không thoả ĐKXĐ ⇒ phương trình <b>vô nghiệm</b>.</p>` }
    ],
    summary: 'A · B = 0 ⇔ A = 0 hoặc B = 0. Phương trình chứa ẩn ở mẫu: tìm ĐKXĐ → quy đồng, khử mẫu → giải → đối chiếu ĐKXĐ.',
    examples: [
      { title: 'Phương trình tích', problem: 'Giải phương trình (2x − 6)(x + 4) = 0.', solution: '2x − 6 = 0 ⇒ x = 3; x + 4 = 0 ⇒ x = −4. Tập nghiệm {3; −4}.' },
      { title: 'Đặt nhân tử chung', problem: 'Giải phương trình x(x − 2) + 3(x − 2) = 0.', solution: '(x − 2)(x + 3) = 0 ⇒ x = 2 hoặc x = −3.' },
      { title: 'Chứa ẩn ở mẫu', problem: 'Giải phương trình {{3|x + 1}} = {{2|x − 1}}.', solution: 'ĐKXĐ: x ≠ ±1. Khử mẫu: 3(x − 1) = 2(x + 1) ⇔ 3x − 3 = 2x + 2 ⇔ x = 5 (thoả mãn). Nghiệm x = 5.' }
    ],
    exercises: [
      { question: 'Giải phương trình x<sup>2</sup> − 9 = 0.', hints: ['Hiệu hai bình phương: (x − 3)(x + 3) = 0.', 'Giải từng nhân tử.'], solution: 'x = 3 hoặc x = −3.' },
      { question: 'Giải phương trình {{x + 2|x}} = {{x + 5|x + 1}}.', hints: ['ĐKXĐ: x ≠ 0, x ≠ −1.', '(x + 2)(x + 1) = x(x + 5) ⇔ x<sup>2</sup> + 3x + 2 = x<sup>2</sup> + 5x.'], solution: '2x = 2 ⇒ x = 1 (thoả mãn).' },
      { question: 'Một người đi xe đạp 24 km. Nếu mỗi giờ đi nhanh hơn 4 km thì đến sớm hơn 1 giờ. Tính vận tốc lúc đầu (biết vận tốc là 8 km/h hoặc 12 km/h, hãy kiểm tra).', hints: ['Phương trình: {{24|x}} − {{24|x + 4}} = 1.', 'Thử x = 8: 3 − 2 = 1.'], solution: 'x = 8 km/h thoả mãn (x = 12 cho 2 − 1,5 = 0,5 ≠ 1).' }
    ],
    quiz: [
      { type: 'mcq', q: 'Tập nghiệm của phương trình (2x − 6)(x + 4) = 0 là:', options: ['{3; 4}', '{−3; 4}', '{3; −4}', '{6; −4}'], answer: 2, explain: 'x = 3 hoặc x = −4.' },
      { type: 'short', calc: '(2 + 3) / (3 - 2)', q: 'Nghiệm của phương trình {{3|x + 1}} = {{2|x − 1}} là?', answer: '5', explain: '3(x − 1) = 2(x + 1).' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Phương trình x<sup>2</sup> = 5x tương đương với phương trình x = 5.', answer: false, explain: 'Mất nghiệm x = 0.' },
      { type: 'short', calc: '2 / 2', q: 'Nghiệm của phương trình {{x + 2|x}} = {{x + 5|x + 1}} là?', answer: '1', explain: '2x = 2.' },
      { type: 'mcq', q: 'Điều kiện xác định của phương trình {{2|x − 1}} + {{1|x}} = 3 là:', options: ['x ≠ 1', 'x ≠ 0', 'x ≠ 0 và x ≠ 1', 'mọi x'], answer: 2, explain: 'Hai mẫu khác 0.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Phương trình {{x|x − 2}} = {{2|x − 2}} vô nghiệm.', answer: true, explain: 'Khử mẫu được x = 2, bị loại.' },
      { type: 'short', calc: '-9 / 3', q: 'Phương trình x(x − 2) + 3(x − 2) = 0 có một nghiệm âm. Đó là?', answer: '-3', answerText: '−3', explain: '(x − 2)(x + 3) = 0.' },
      { type: 'short', calc: '24 / 3', q: 'Đi 24 km; nếu nhanh hơn 4 km/h thì đến sớm 1 giờ. Vận tốc lúc đầu (km/h)?', unit: 'km/h', answer: '8', explain: '{{24|8}} − {{24|12}} = 1.' }
    ]
  });
})();
