/* Toán 9 – Luyện tập chung (sau Bài 8). Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-9/c3-ltc-1', {
    objectives: [
      'Tính căn bậc hai, tìm điều kiện xác định của căn thức bậc hai.',
      'Vận dụng hằng đẳng thức √(A<sup>2</sup>) = |A| để rút gọn.',
      'Vận dụng quy tắc khai căn một tích, một thương để tính nhanh và giải bài toán thực tế.'
    ],
    intro: 'Củng cố các kiến thức mở đầu về căn bậc hai trước khi học các phép biến đổi phức tạp hơn.',
    steps: [
      { title: 'Ba công thức cần nhớ', html: `<ul><li>√(A<sup>2</sup>) = |A|.</li><li>√(ab) = √a · √b (a, b ≥ 0).</li><li>√(a/b) = √a / √b (a ≥ 0, b &gt; 0).</li></ul>` },
      { title: 'Ứng dụng: độ dài đường chéo', html: `<p>Hình chữ nhật 3 × 6 có đường chéo √(9 + 36) = √45 = 3√5.</p>`,
        svg: S.geo({ w: 320, h: 180, P: { A: [40, 140], B: [280, 140], C: [280, 30], D: [40, 30] }, seg: ['AB', 'BC', 'CD', 'DA', { s: 'AC', color: C.red, width: 2.5 }], right: ['DAB'], text: [[160, 160, '6', C.blue], [296, 90, '3', C.blue], [150, 72, '3√5', C.red]] }), caption: 'AC = √(6² + 3²) = √45 = 3√5.' },
      { title: 'So sánh căn', html: `<p>Với a, b ≥ 0: a &lt; b ⇔ √a &lt; √b. Ví dụ: 2√3 = √12 &lt; √13.</p>` },
      { title: 'Công thức vật lí', html: `<p>Vận tốc rơi tự do khi chạm đất từ độ cao h (m): v = √(2gh) với g ≈ 9,8 m/s². Rơi từ 5 m: v = √98 ≈ 9,9 m/s.</p>` }
    ],
    summary: 'Khai căn tích/thương, √(A²) = |A|, so sánh hai căn bằng so sánh hai số dưới dấu căn.',
    examples: [
      { title: 'Rút gọn', problem: 'Rút gọn √((√3 − 2)<sup>2</sup>) + √3.', solution: '|√3 − 2| + √3 = 2 − √3 + √3 = 2.' },
      { title: 'So sánh', problem: 'So sánh 3√2 và 2√3.', solution: '3√2 = √18, 2√3 = √12 ⇒ 3√2 &gt; 2√3.' },
      { title: 'Tính nhanh', problem: 'Tính √(1,3) · √(52) · √(10).', solution: '√(1,3 · 52 · 10) = √676 = 26.' }
    ],
    exercises: [
      { question: 'Tìm x để √(4 − 2x) xác định.', hints: ['4 − 2x ≥ 0.', 'Chia −2: đổi chiều.'], solution: 'x ≤ 2.' },
      { question: 'Tính {{√(0,5)|√(12,5)}}.', hints: ['= √(0,5 : 12,5).', '= √0,04.'], solution: '0,2.' },
      { question: 'Một vật rơi tự do từ độ cao 20 m. Tính vận tốc khi chạm đất (g = 9,8; làm tròn đến hàng phần mười).', hints: ['v = √(2 · 9,8 · 20).', '= √392.'], solution: 'v ≈ 19,8 m/s.' }
    ],
    quiz: [
      { type: 'short', calc: '2 - sqrt(3) + sqrt(3)', q: 'Tính √((√3 − 2)<sup>2</sup>) + √3.', answer: '2', explain: '|√3 − 2| = 2 − √3.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: 3√2 &gt; 2√3.', answer: true, explain: '√18 &gt; √12.' },
      { type: 'short', calc: 'sqrt(1.3 * 52 * 10)', q: 'Tính √1,3 · √52 · √10.', answer: '26', explain: '√676.' },
      { type: 'short', calc: 'sqrt(0.5 / 12.5)', q: 'Tính √0,5 : √12,5.', answer: '0.2', explain: '√0,04.' },
      { type: 'short', calc: 'round(sqrt(2 * 9.8 * 20), 1)', q: 'Vật rơi từ 20 m (v = √(2gh), g = 9,8). Vận tốc chạm đất (m/s, làm tròn đến hàng phần mười)?', unit: 'm/s', answer: '19.8', explain: '√392.' },
      { type: 'mcq', q: 'Đường chéo hình chữ nhật 3 × 6 bằng:', options: ['3√5', '5√3', '9', '√27'], answer: 0, explain: '√45 = 3√5.' },
      { type: 'short', calc: '4 / 2', q: '√(4 − 2x) xác định khi x ≤ a. Tìm a.', answer: '2', explain: '4 − 2x ≥ 0.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: √13 &lt; 2√3.', answer: false, explain: '2√3 = √12 &lt; √13.' }
    ]
  });
})();
