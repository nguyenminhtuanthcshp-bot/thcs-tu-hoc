/* Toán 9 – Bài 8. Khai căn bậc hai với phép nhân và phép chia. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-9/bai-8', {
    objectives: [
      'Giải thích được quy tắc khai căn một tích: √(ab) = √a · √b (a, b ≥ 0) và nhân các căn bậc hai.',
      'Giải thích được quy tắc khai căn một thương: √(a/b) = √a / √b (a ≥ 0, b &gt; 0) và chia các căn bậc hai.',
      'Vận dụng các quy tắc để tính nhanh, rút gọn biểu thức chứa căn.'
    ],
    intro: 'Tính √(16 · 25) thế nào cho nhanh? Có thể tính 16 · 25 = 400 rồi khai căn, hoặc khai căn từng thừa số: 4 · 5 = 20. Hai cách cho cùng kết quả – đó là quy tắc khai căn một tích.',
    steps: [
      { title: 'Khai căn một tích', html: `<div class="box key">Với a ≥ 0, b ≥ 0: √(a · b) = √a · √b.</div><p>Ví dụ: √(9 · 49) = 3 · 7 = 21; √360 = √(36 · 10) = 6√10.</p>` },
      { title: 'Nhân các căn bậc hai', html: `<p>Đọc quy tắc theo chiều ngược lại: √a · √b = √(ab).</p><p>Ví dụ: √2 · √18 = √36 = 6; √5 · √20 = √100 = 10.</p>`,
        svg: S.flow({ items: [{ title: '√2 · √18', text: 'nhân dưới dấu căn' }, { title: '√36', text: 'số chính phương' }, { title: '6', text: 'kết quả' }] }) },
      { title: 'Khai căn một thương', html: `<div class="box key">Với a ≥ 0, b &gt; 0: √({{a|b}}) = {{√a|√b}}.</div><p>Ví dụ: √({{25|64}}) = {{5|8}}; {{√50|√2}} = √25 = 5.</p>` },
      { title: 'Với biểu thức', html: `<p>Các quy tắc vẫn đúng khi a, b là biểu thức không âm (mẫu dương). Ví dụ với x ≥ 0: √(3x) · √(12x) = √(36x<sup>2</sup>) = 6x.</p>` }
    ],
    summary: '√(ab) = √a·√b (a, b ≥ 0); √(a/b) = √a/√b (a ≥ 0, b > 0). Dùng theo hai chiều để khai căn hoặc để nhân, chia các căn.',
    examples: [
      { title: 'Khai căn một tích', problem: 'Tính √(0,16 · 81).', solution: '0,4 · 9 = 3,6.' },
      { title: 'Nhân các căn', problem: 'Tính √3 · √27 và √1,6 · √40.', solution: '√81 = 9; √64 = 8.' },
      { title: 'Chia các căn', problem: 'Tính {{√72|√8}} và √({{49|121}}).', solution: '√9 = 3; {{7|11}}.' }
    ],
    exercises: [
      { question: 'Tính √(12,1 · 250).', hints: ['12,1 · 250 = 121 · 25.', '√121 · √25.'], solution: '11 · 5 = 55.' },
      { question: 'Rút gọn √(2a) · √(8a<sup>3</sup>) với a ≥ 0.', hints: ['= √(16a<sup>4</sup>).', '√(a<sup>4</sup>) = a<sup>2</sup>.'], solution: '4a<sup>2</sup>.' },
      { question: 'Tính √2,5 · √14,4.', hints: ['Nhân dưới dấu căn: 2,5 · 14,4 = 36.', '√36.'], solution: '6.' }
    ],
    quiz: [
      { type: 'short', calc: 'sqrt(9 * 49)', q: 'Tính √(9 · 49).', answer: '21', explain: '3 · 7.' },
      { type: 'short', calc: 'sqrt(2 * 18)', q: 'Tính √2 · √18.', answer: '6', explain: '√36.' },
      { type: 'short', calc: 'sqrt(50 / 2)', q: 'Tính √50 : √2.', answer: '5', explain: '√25.' },
      { type: 'short', requireSimplest: true, calc: 'sqrt(25) / sqrt(64)', q: 'Tính √({{25|64}}). (Dạng a/b tối giản.)', answer: ['5/8'], answerText: '5/8', explain: '{{5|8}}.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: √(a + b) = √a + √b với mọi a, b ≥ 0.', answer: false, explain: 'Ví dụ √(9 + 16) = 5 ≠ 3 + 4.' },
      { type: 'mcq', q: '√360 bằng:', options: ['6√10', '10√6', '36√10', '18√2'], answer: 0, explain: '√(36 · 10).' },
      { type: 'short', calc: 'sqrt(12.1 * 250)', q: 'Tính √(12,1 · 250).', answer: '55', explain: '√(121 · 25).' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Với x ≥ 0, √(3x) · √(12x) = 6x.', answer: true, explain: '√(36x²) = 6x.' }
    ]
  });
})();
