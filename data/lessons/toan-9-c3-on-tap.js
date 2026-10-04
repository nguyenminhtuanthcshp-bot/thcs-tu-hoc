/* Toán 9 – Bài tập cuối chương III. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-9/c3-on-tap', {
    objectives: [
      'Hệ thống hoá căn bậc hai, căn bậc ba, căn thức và các phép biến đổi.',
      'Rút gọn biểu thức chứa căn, tính giá trị, giải phương trình đơn giản chứa căn.',
      'Vận dụng căn bậc hai, căn bậc ba vào các bài toán hình học và thực tế.'
    ],
    intro: 'Ôn tập chương III với các bài tổng hợp về tính toán, rút gọn và ứng dụng.',
    steps: [
      { title: 'Sơ đồ chương', html: `<p>Các nội dung chính:</p>`,
        svg: S.mindmap({ center: 'Căn bậc hai, căn bậc ba', branches: [
          { title: 'Căn bậc hai', items: ['√A xác định ⇔ A ≥ 0', '√(A²) = |A|'] },
          { title: 'Nhân, chia', items: ['√(ab) = √a·√b', '√(a/b) = √a/√b'] },
          { title: 'Biến đổi', items: ['Đưa ra/vào dấu căn', 'Khử mẫu, trục căn'] },
          { title: 'Căn bậc ba', items: ['x³ = a', 'Mọi số đều có'] }
        ] }) },
      { title: 'Phương trình chứa căn đơn giản', html: `<p>√(A) = B (B ≥ 0) ⇔ A = B<sup>2</sup>. Ví dụ: √(x + 3) = 4 ⇔ x + 3 = 16 ⇔ x = 13.</p><p>∛A = B ⇔ A = B<sup>3</sup> (không cần điều kiện).</p>` },
      { title: 'Ứng dụng hình học', html: `<p>Tam giác đều cạnh a có đường cao {{a√3|2}}; hình vuông cạnh a có đường chéo a√2.</p>`,
        svg: S.geo({ w: 280, h: 220, P: { A: [140, 30], B: [40, 190], C: [240, 190], H: [140, 190] }, seg: ['AB', 'BC', 'CA', { s: 'AH', color: C.red, width: 2.5 }], right: ['AHC'], ticks: [['AB', 1], ['AC', 1], ['BC', 1]], text: [[108, 140, 'a√3/2', C.red]] }), caption: 'Đường cao tam giác đều cạnh a bằng a√3 : 2.' },
      { title: 'Sai lầm thường gặp', html: `<ul><li>√(a + b) ≠ √a + √b.</li><li>√(A<sup>2</sup>) = |A| chứ không phải A.</li><li>Quên ĐKXĐ khi rút gọn biểu thức chứa biến.</li></ul>` }
    ],
    summary: '√A cần A ≥ 0, √(A²) = |A|; nhân/chia căn; đưa thừa số ra/vào; khử mẫu, trục căn. ∛a xác định với mọi a, ∛(a³) = a.',
    examples: [
      { title: 'Rút gọn số', problem: 'Tính {{2|√5 − √3}} − {{2|√5 + √3}}.', solution: '= (√5 + √3) − (√5 − √3) = 2√3.' },
      { title: 'Phương trình', problem: 'Giải √(2x − 1) = 3.', solution: 'ĐK x ≥ {{1|2}}; 2x − 1 = 9 ⇒ x = 5 (thoả mãn).' },
      { title: 'Thực tế', problem: 'Một quả cầu kim loại được đúc lại thành khối lập phương có thể tích 125 cm³. Tính cạnh khối lập phương.', solution: 'a = ∛125 = 5 cm.' }
    ],
    exercises: [
      { question: 'Tính √(3 − 2√2) (gợi ý: 3 − 2√2 = (√2 − 1)<sup>2</sup>).', hints: ['√((√2 − 1)<sup>2</sup>) = |√2 − 1|.', '√2 &gt; 1.'], solution: '√2 − 1.' },
      { question: 'Tam giác đều cạnh 6 cm. Tính đường cao (làm tròn đến hàng phần mười).', hints: ['h = {{6√3|2}} = 3√3.', '√3 ≈ 1,732.'], solution: '≈ 5,2 cm.' },
      { question: 'Giải ∛(x + 5) = −2.', hints: ['Lập phương: x + 5 = −8.', 'x = −13.'], solution: 'x = −13.' }
    ],
    quiz: [
      { type: 'short', calc: '(9 + 1) / 2', q: 'Giải √(2x − 1) = 3. Nghiệm x = ?', answer: '5', explain: '2x − 1 = 9.' },
      { type: 'short', calc: 'Math.cbrt(125)', q: 'Khối lập phương thể tích 125 cm³ có cạnh bao nhiêu cm?', unit: 'cm', answer: '5', explain: '∛125.' },
      { type: 'short', calc: 'round(3 * Math.sqrt(3), 1)', q: 'Đường cao tam giác đều cạnh 6 cm (làm tròn đến hàng phần mười)?', unit: 'cm', answer: '5.2', explain: '3√3.' },
      { type: 'short', calc: '-8 - 5', q: 'Giải ∛(x + 5) = −2. Nghiệm x = ?', answer: '-13', answerText: '−13', explain: 'x + 5 = −8.' },
      { type: 'mcq', q: '{{2|√5 − √3}} − {{2|√5 + √3}} bằng:', options: ['2√5', '2√3', '0', '√3'], answer: 1, explain: 'Trục căn thức từng phân thức.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: √(3 − 2√2) = √2 − 1.', answer: true, explain: '(√2 − 1)² = 3 − 2√2.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: √(16 + 9) = 4 + 3.', answer: false, explain: '√25 = 5.' },
      { type: 'short', calc: '16 - 3', q: 'Giải √(x + 3) = 4. Nghiệm x = ?', answer: '13', explain: 'x + 3 = 16.' }
    ]
  });
})();
