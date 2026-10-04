/* Toán 8 – Luyện tập chung (sau Bài 22). Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('toan-8/c6-ltc-1', {
  objectives: [
    'Tìm điều kiện xác định và tính giá trị của phân thức.',
    'Rút gọn phân thức bằng cách phân tích tử, mẫu thành nhân tử (kể cả dùng quy tắc đổi dấu).',
    'Quy đồng mẫu thức nhiều phân thức.'
  ],
  intro: 'Rút gọn và quy đồng là hai kĩ năng nền tảng để cộng, trừ, nhân, chia phân thức. Hãy luyện cho thật nhuần nhuyễn.',
  steps: [
    { title: 'Quy trình rút gọn', html: `<ol><li>Viết điều kiện xác định.</li><li>Phân tích tử và mẫu thành nhân tử (nhân tử chung, hằng đẳng thức, nhóm).</li><li>Đổi dấu nếu cần để xuất hiện nhân tử chung.</li><li>Chia tử và mẫu cho nhân tử chung.</li></ol>` },
    { title: 'Rút gọn để tính nhanh giá trị', html: `<p>Tính {{x<sup>2</sup> + 2x|x + 2}} tại x = 98. Thay số trực tiếp: {{9604 + 196|100}} = 98 – khá dài. Rút gọn trước: {{x(x + 2)|x + 2}} = x, nên giá trị bằng 98 ngay lập tức.</p>
      <p>Bài học: rút gọn trước khi thay số giúp tính nhanh và tránh sai sót.</p>` },
    { title: 'Tìm MTC nhanh', html: `<ul><li>Hệ số: BCNN của các hệ số.</li><li>Mỗi nhân tử: lấy số mũ lớn nhất.</li></ul>
      <p>Ví dụ: 4x<sup>2</sup>(x − 1) và 6x(x − 1)<sup>2</sup> ⇒ MTC = 12x<sup>2</sup>(x − 1)<sup>2</sup>.</p>` },
    { title: 'Chứng minh đẳng thức phân thức', html: `<p>Để chứng minh {{A|B}} = {{C|D}}: rút gọn vế phức tạp về vế còn lại, hoặc kiểm tra A · D = B · C.</p>` }
  ],
  summary: 'ĐKXĐ → phân tích → đổi dấu → chia nhân tử chung. MTC: BCNN hệ số × các nhân tử với số mũ lớn nhất.',
  examples: [
    { title: 'Rút gọn và tính', problem: 'Rút gọn A = {{x<sup>2</sup> + 2x|x<sup>2</sup> + 4x + 4}} rồi tính A tại x = 8.', solution: 'A = {{x(x + 2)|(x + 2)<sup>2</sup>}} = {{x|x + 2}} (x ≠ −2). Tại x = 8: A = {{8|10}} = {{4|5}}.' },
    { title: 'Rút gọn có đổi dấu', problem: 'Rút gọn {{y<sup>2</sup> − xy|x<sup>2</sup> − y<sup>2</sup>}}.', solution: '{{y(y − x)|(x − y)(x + y)}} = {{−y(x − y)|(x − y)(x + y)}} = {{−y|x + y}}.' },
    { title: 'Quy đồng', problem: 'Quy đồng {{1|4x<sup>2</sup>(x − 1)}} và {{5|6x(x − 1)<sup>2</sup>}}.', solution: 'MTC = 12x<sup>2</sup>(x − 1)<sup>2</sup>. {{3(x − 1)|12x<sup>2</sup>(x − 1)<sup>2</sup>}} và {{10x|12x<sup>2</sup>(x − 1)<sup>2</sup>}}.' }
  ],
  exercises: [
    { question: 'Rút gọn {{5x − 10|x<sup>2</sup> − 4x + 4}}.', hints: ['Tử: 5(x − 2); mẫu: (x − 2)<sup>2</sup>.', 'Chia cho x − 2.'], solution: '{{5|x − 2}} (x ≠ 2).' },
    { question: 'Chứng minh {{x<sup>2</sup> − 1|x<sup>2</sup> + x}} = {{x − 1|x}}.', hints: ['Tử: (x − 1)(x + 1); mẫu: x(x + 1).', 'Chia cho x + 1.'], solution: 'Vế trái = {{(x − 1)(x + 1)|x(x + 1)}} = {{x − 1|x}} = vế phải (x ≠ 0, x ≠ −1).' },
    { question: 'Tìm MTC của {{1|x<sup>2</sup> − 2x}} và {{1|3x − 6}}.', hints: ['x<sup>2</sup> − 2x = x(x − 2); 3x − 6 = 3(x − 2).', 'MTC = 3x(x − 2).'], solution: '3x(x − 2).' }
  ],
  quiz: [
    { type: 'short', requireSimplest: true, calc: '8 / (8 + 2)', q: 'Rút gọn A = {{x<sup>2</sup> + 2x|x<sup>2</sup> + 4x + 4}} rồi tính A tại x = 8 (dạng a/b tối giản).', answer: ['4/5'], answerText: '4/5', explain: 'A = {{x|x + 2}} = {{8|10}} = {{4|5}}.' },
    { type: 'mcq', q: '{{y<sup>2</sup> − xy|x<sup>2</sup> − y<sup>2</sup>}} rút gọn bằng:', options: ['{{y|x + y}}', '{{−y|x + y}}', '{{y|x − y}}', '{{−y|x − y}}'], answer: 1, explain: 'y(y − x) = −y(x − y).' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: MTC của 4x<sup>2</sup>(x − 1) và 6x(x − 1)<sup>2</sup> là 12x<sup>2</sup>(x − 1)<sup>2</sup>.', answer: true, explain: 'BCNN(4, 6) = 12; lấy số mũ lớn nhất.' },
    { type: 'short', calc: '5 / (7 - 2)', q: 'Rút gọn {{5x − 10|x<sup>2</sup> − 4x + 4}} rồi tính giá trị tại x = 7.', answer: '1', explain: '{{5|x − 2}} = {{5|5}} = 1.' },
    { type: 'mcq', q: 'Điều kiện xác định của {{x|x<sup>2</sup> + 4x + 4}} là:', options: ['x ≠ 2', 'x ≠ −2', 'x ≠ ±2', 'x ≠ 4'], answer: 1, explain: '(x + 2)<sup>2</sup> ≠ 0.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: {{x<sup>2</sup> − 1|x<sup>2</sup> + x}} = {{x − 1|x}} (với x ≠ 0, x ≠ −1).', answer: true, explain: 'Chia cả tử và mẫu cho x + 1.' },
    { type: 'short', calc: '98', q: 'Tính giá trị của {{x<sup>2</sup> + 2x|x + 2}} tại x = 98.', answer: '98', explain: 'Rút gọn bằng x.' },
    { type: 'mcq', q: 'MTC của {{1|x<sup>2</sup> − 2x}} và {{1|3x − 6}} là:', options: ['3x(x − 2)', 'x(x − 2)', '3(x − 2)', '3x<sup>2</sup>(x − 2)<sup>2</sup>'], answer: 0, explain: 'x(x − 2) và 3(x − 2).' }
  ]
});
