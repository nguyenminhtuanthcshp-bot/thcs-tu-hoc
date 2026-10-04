/* Toán 8 – Bài 23. Phép cộng và phép trừ phân thức đại số. Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('toan-8/bai-23', {
  objectives: [
    'Thực hiện được phép cộng, phép trừ hai phân thức cùng mẫu.',
    'Thực hiện được phép cộng, phép trừ hai phân thức khác mẫu bằng cách quy đồng.',
    'Vận dụng tính chất giao hoán, kết hợp và quy tắc dấu ngoặc để tính hợp lí.'
  ],
  intro: 'Cộng phân thức giống hệt cộng phân số: cùng mẫu thì cộng tử, khác mẫu thì quy đồng trước.',
  steps: [
    { title: 'Cộng, trừ cùng mẫu', html: `<div class="box key">{{A|M}} + {{B|M}} = {{A + B|M}}; &nbsp; {{A|M}} − {{B|M}} = {{A − B|M}}</div>
      <p class="math">{{x + 1|x − 2}} + {{3 − 2x|x − 2}} = {{4 − x|x − 2}}</p>
      <div class="box warn">Khi trừ, đặt tử của phân thức trừ trong ngoặc: {{2x|x + 1}} − {{x − 1|x + 1}} = {{2x − (x − 1)|x + 1}} = {{x + 1|x + 1}} = 1.</div>` },
    { title: 'Cộng, trừ khác mẫu', html: `<ol><li>Quy đồng mẫu thức.</li><li>Cộng (trừ) các tử, giữ nguyên mẫu chung.</li><li>Rút gọn kết quả (nếu được).</li></ol>
      <p class="math">{{1|x}} + {{1|x + 1}} = {{x + 1 + x|x(x + 1)}} = {{2x + 1|x(x + 1)}}</p>` },
    { title: 'Phân thức đối', html: `<p>Phân thức đối của {{A|B}} là −{{A|B}} = {{−A|B}} = {{A|−B}}. Ta có {{A|B}} − {{C|D}} = {{A|B}} + (−{{C|D}}).</p>` },
    { title: 'Tính chất', html: `<p>Phép cộng phân thức có tính chất giao hoán, kết hợp. Hãy nhóm các phân thức cùng mẫu (hoặc mẫu đối nhau) để tính nhanh.</p>
      <p class="math">{{x|x − 1}} + {{2|x + 1}} + {{1|1 − x}} = ({{x|x − 1}} − {{1|x − 1}}) + {{2|x + 1}} = 1 + {{2|x + 1}} = {{x + 3|x + 1}}</p>` }
  ],
  summary: 'Cùng mẫu: cộng/trừ tử. Khác mẫu: quy đồng rồi cộng/trừ tử. Luôn rút gọn kết quả; khi trừ nhớ đặt ngoặc.',
  examples: [
    { title: 'Cùng mẫu', problem: 'Tính {{x<sup>2</sup>|x − 3}} − {{9|x − 3}}.', solution: '{{x<sup>2</sup> − 9|x − 3}} = {{(x − 3)(x + 3)|x − 3}} = x + 3.' },
    { title: 'Khác mẫu', problem: 'Tính {{3|x − 2}} − {{12|x<sup>2</sup> − 4}}.', solution: 'MTC = (x − 2)(x + 2). {{3(x + 2) − 12|(x − 2)(x + 2)}} = {{3x − 6|(x − 2)(x + 2)}} = {{3|x + 2}}.' },
    { title: 'Mẫu đối nhau', problem: 'Tính {{2x|x − 5}} + {{10|5 − x}}.', solution: '{{10|5 − x}} = −{{10|x − 5}}. Tổng: {{2x − 10|x − 5}} = 2.' }
  ],
  exercises: [
    { question: 'Tính {{2x + 1|x + 3}} + {{x + 8|x + 3}}.', hints: ['Cùng mẫu: cộng tử.', '3x + 9 = 3(x + 3).'], solution: '3.' },
    { question: 'Tính {{1|x − 1}} − {{1|x + 1}}.', hints: ['MTC = (x − 1)(x + 1).', 'Tử: (x + 1) − (x − 1).'], solution: '{{2|x<sup>2</sup> − 1}}.' },
    { question: 'Tính {{x|2x − 6}} + {{3|6 − 2x}}.', hints: ['6 − 2x = −(2x − 6).', 'Tử: x − 3; mẫu 2(x − 3).'], solution: '{{1|2}}.' }
  ],
  quiz: [
    { type: 'mcq', q: '{{x|x + 2}} + {{2|x + 2}} bằng:', options: ['1', '{{x + 2|2x + 4}}', '{{2x|x + 2}}', 'x + 2'], answer: 0, explain: '{{x + 2|x + 2}} = 1.' },
    { type: 'short', calc: '(2 * 5 + 1 + 5 + 8) / (5 + 3)', q: 'Tính {{2x + 1|x + 3}} + {{x + 8|x + 3}} (với x ≠ −3). Kết quả là số nào?', answer: '3', explain: '{{3x + 9|x + 3}} = 3.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: {{2x|x + 1}} − {{x − 1|x + 1}} = {{x − 1|x + 1}}.', answer: false, explain: '2x − (x − 1) = x + 1, kết quả là 1.' },
    { type: 'mcq', q: '{{1|x}} + {{1|x + 1}} bằng:', options: ['{{2|2x + 1}}', '{{2x + 1|x(x + 1)}}', '{{2|x(x + 1)}}', '{{1|x(x + 1)}}'], answer: 1, explain: 'Quy đồng MTC x(x + 1).' },
    { type: 'short', calc: '(2 * 7 - 10) / (7 - 5)', q: 'Tính giá trị của {{2x|x − 5}} + {{10|5 − x}} tại x = 7.', answer: '2', explain: 'Biểu thức rút gọn bằng 2.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Phân thức đối của {{x − 1|x}} là {{1 − x|x}}.', answer: true, explain: '−{{x − 1|x}} = {{1 − x|x}}.' },
    { type: 'short', requireSimplest: true, calc: '1 / 2', q: 'Tính {{x|2x − 6}} + {{3|6 − 2x}} (x ≠ 3). Viết kết quả dạng a/b tối giản.', answer: ['1/2'], answerText: '1/2', explain: '{{x − 3|2(x − 3)}} = {{1|2}}.' },
    { type: 'short', calc: '3 / (1 + 2)', q: 'Tính {{3|x − 2}} − {{12|x<sup>2</sup> − 4}} rồi tìm giá trị tại x = 1.', answer: '1', explain: 'Kết quả {{3|x + 2}}, tại x = 1 bằng 1.' }
  ]
});
