/* Toán 9 – Luyện tập chung (sau Bài 10). Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-9/c3-ltc-2', {
    objectives: [
      'Phối hợp các phép biến đổi (đưa thừa số ra ngoài/vào trong, khử mẫu, trục căn thức) để rút gọn biểu thức.',
      'Rút gọn biểu thức chứa biến dưới dấu căn và tính giá trị của biểu thức.',
      'Tính căn bậc ba và giải bài toán thực tế liên quan đến căn bậc hai, căn bậc ba.'
    ],
    intro: 'Dạng bài “rút gọn biểu thức rồi tính giá trị” xuất hiện thường xuyên. Buổi luyện tập này giúp em làm dạng bài đó một cách có hệ thống.',
    steps: [
      { title: 'Quy trình rút gọn biểu thức chứa biến', html: `<p>Thực hiện theo thứ tự:</p>`,
        svg: S.flow({ items: [{ title: 'ĐKXĐ', text: 'biểu thức dưới căn ≥ 0, mẫu ≠ 0' }, { title: 'Phân tích', text: 'x − 1 = (√x − 1)(√x + 1)' }, { title: 'Quy đồng', text: 'rút gọn' }, { title: 'Tính giá trị', text: 'thay số thoả ĐKXĐ' }] }) },
      { title: 'Hằng đẳng thức với căn', html: `<ul><li>x − 1 = (√x − 1)(√x + 1) (x ≥ 0).</li><li>x − 2√x + 1 = (√x − 1)<sup>2</sup>.</li><li>x√x − 1 = (√x − 1)(x + √x + 1).</li></ul>` },
      { title: 'Căn bậc hai và căn bậc ba', html: `<table class="tbl"><tr><th></th><th>√a</th><th>∛a</th></tr><tr><td>Xác định khi</td><td>a ≥ 0</td><td>mọi a</td></tr><tr><td>Giá trị</td><td>≥ 0</td><td>cùng dấu với a</td></tr><tr><td>Hằng đẳng thức</td><td>√(a<sup>2</sup>) = |a|</td><td>∛(a<sup>3</sup>) = a</td></tr></table>` },
      { title: 'Kiểm tra kết quả', html: `<p>Sau khi rút gọn, thay thử một giá trị (ví dụ x = 4) vào cả biểu thức ban đầu và kết quả để kiểm tra.</p>` }
    ],
    summary: 'Tìm ĐKXĐ → phân tích bằng hằng đẳng thức với √x → quy đồng, rút gọn → thay số. √a cần a ≥ 0, ∛a xác định với mọi a.',
    examples: [
      { title: 'Rút gọn', problem: 'Rút gọn P = {{1|√x − 1}} − {{1|√x + 1}} với x ≥ 0, x ≠ 1.', solution: 'P = {{(√x + 1) − (√x − 1)|x − 1}} = {{2|x − 1}}.' },
      { title: 'Tính giá trị', problem: 'Tính P tại x = 9.', solution: 'P = {{2|8}} = {{1|4}}.' },
      { title: 'Hằng đẳng thức', problem: 'Rút gọn Q = {{x − 2√x + 1|√x − 1}} (x ≥ 0, x ≠ 1).', solution: 'Q = {{(√x − 1)<sup>2</sup>|√x − 1}} = √x − 1.' }
    ],
    exercises: [
      { question: 'Rút gọn (√12 + √27 − √3) · √3.', hints: ['√12 + √27 − √3 = 2√3 + 3√3 − √3 = 4√3.', '4√3 · √3.'], solution: '12.' },
      { question: 'Tìm x để Q = √x − 1 (x ≥ 0, x ≠ 1) có giá trị bằng 2.', hints: ['√x = 3.', 'Bình phương.'], solution: 'x = 9.' },
      { question: 'Tính ∛(3√3) · ∛(3√3) (gợi ý: 3√3 = (√3)<sup>3</sup>).', hints: ['∛((√3)<sup>3</sup>) = √3.', '√3 · √3.'], solution: '3.' }
    ],
    quiz: [
      { type: 'short', calc: '(Math.sqrt(12) + Math.sqrt(27) - Math.sqrt(3)) * Math.sqrt(3)', q: 'Tính (√12 + √27 − √3) · √3.', answer: '12', explain: '4√3 · √3.' },
      { type: 'short', requireSimplest: true, calc: '2 / (9 - 1)', q: 'P = {{1|√x − 1}} − {{1|√x + 1}}. Tính P tại x = 9. (Dạng a/b tối giản.)', answer: ['1/4'], answerText: '1/4', explain: 'P = {{2|x − 1}}.' },
      { type: 'short', calc: '(2 + 1) * (2 + 1)', q: 'Q = √x − 1 (x ≥ 0, x ≠ 1). Tìm x để Q = 2.', answer: '9', explain: '√x = 3.' },
      { type: 'mcq', q: 'Rút gọn {{x − 2√x + 1|√x − 1}} (x ≥ 0, x ≠ 1):', options: ['√x + 1', '√x − 1', 'x − 1', '1'], answer: 1, explain: '(√x − 1)² : (√x − 1).' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: ∛(−8) xác định còn √(−8) không xác định.', answer: true, explain: 'Căn bậc ba xác định với mọi số.' },
      { type: 'short', calc: 'Math.cbrt(3 * Math.sqrt(3)) ** 2', q: 'Tính ∛(3√3) · ∛(3√3).', answer: '3', explain: '√3 · √3.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Với x ≥ 0, x − 1 = (√x − 1)(√x + 1).', answer: true, explain: 'Hiệu hai bình phương.' },
      { type: 'mcq', q: 'ĐKXĐ của P = {{1|√x − 1}} − {{1|√x + 1}} là:', options: ['x ≥ 0', 'x &gt; 1', 'x ≥ 0, x ≠ 1', 'x ≠ ±1'], answer: 2, explain: 'Cần x ≥ 0 và √x ≠ 1.' }
    ]
  });
})();
