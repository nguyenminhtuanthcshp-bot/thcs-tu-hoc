/* Toán 6 – Bài 15. Quy tắc dấu ngoặc. Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('toan-6/bai-15', {
  objectives: [
    'Phát biểu và vận dụng quy tắc bỏ dấu ngoặc có dấu “+” hoặc dấu “−” đứng trước.',
    'Vận dụng quy tắc dấu ngoặc và tính chất phép cộng để tính nhanh tổng đại số.',
    'Biết cách đưa các số hạng vào trong ngoặc một cách hợp lí.'
  ],
  intro: 'Tính 125 − (25 + 67) ta có thể làm trong ngoặc trước, nhưng nếu bỏ ngoặc khéo léo thì tính nhanh hơn nhiều: 125 − 25 − 67 = 100 − 67 = 33.',
  steps: [
    { title: 'Bỏ ngoặc có dấu “+” đứng trước', html: `<p>Khi bỏ dấu ngoặc có dấu “+” đứng trước, <b>giữ nguyên dấu</b> các số hạng trong ngoặc:</p>
      <p class="math">a + (b − c + d) = a + b − c + d</p>` },
    { title: 'Bỏ ngoặc có dấu “−” đứng trước', html: `<p>Khi bỏ dấu ngoặc có dấu “−” đứng trước, phải <b>đổi dấu tất cả</b> các số hạng trong ngoặc: “+” thành “−”, “−” thành “+”.</p>
      <p class="math">a − (b − c + d) = a − b + c − d</p>
      <p>Lỗi hay gặp: chỉ đổi dấu số hạng đầu tiên. Ví dụ đúng: 20 − (8 − 3) = 20 − 8 + 3 = 15.</p>` },
    { title: 'Tổng đại số', html: `<p>Một dãy phép cộng, trừ số nguyên gọi là <b>tổng đại số</b>. Trong tổng đại số, ta có thể đổi chỗ các số hạng <b>kèm theo dấu của chúng</b>:</p>
      <p class="math">17 − 45 + 83 = 17 + 83 − 45 = 100 − 45 = 55</p>` },
    { title: 'Đặt dấu ngoặc', html: `<p>Có thể nhóm các số hạng vào ngoặc: nếu đặt trước ngoặc dấu “−” thì phải đổi dấu các số hạng được đưa vào.</p>
      <p class="math">235 − 64 − 36 = 235 − (64 + 36) = 235 − 100 = 135</p>` }
  ],
  summary: 'Bỏ ngoặc có dấu “+” đằng trước: giữ nguyên dấu. Bỏ ngoặc có dấu “−” đằng trước: đổi dấu mọi số hạng trong ngoặc. Trong tổng đại số có thể đổi chỗ số hạng kèm dấu, nhóm số hạng tuỳ ý.',
  examples: [
    { title: 'Bỏ ngoặc', problem: 'Tính: (58 − 17) − (58 + 23).', solution: '= 58 − 17 − 58 − 23 = (58 − 58) − (17 + 23) = 0 − 40 = <b>−40</b>.' },
    { title: 'Tính nhanh', problem: 'Tính: 356 − (156 − 99).', solution: '= 356 − 156 + 99 = 200 + 99 = <b>299</b>.' },
    { title: 'Nhóm số hạng', problem: 'Tính: −12 + 34 − 88 + 66.', solution: '= (34 + 66) − (12 + 88) = 100 − 100 = <b>0</b>.' }
  ],
  exercises: [
    { question: 'Bỏ ngoặc rồi tính: (−45) − (27 − 45).', hints: ['Bỏ ngoặc thứ hai có dấu “−” đằng trước: đổi dấu 27 và −45.', '−45 − 27 + 45.'], solution: '= (−45 + 45) − 27 = <b>−27</b>.' },
    { question: 'Tính hợp lí: 2 024 − (524 + 1 000) + 500.', hints: ['Bỏ ngoặc: 2 024 − 524 − 1 000 + 500.', '2 024 − 524 = 1 500.'], solution: '1 500 − 1 000 + 500 = <b>1 000</b>.' },
    { question: 'Tìm x ∈ ℤ biết 15 − (x + 7) = 20.', hints: ['Bỏ ngoặc: 15 − x − 7 = 20, tức 8 − x = 20.', 'x = 8 − 20.'], solution: 'x = <b>−12</b>.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Bỏ ngoặc biểu thức a − (b + c − d) ta được:', options: ['a − b + c − d', 'a − b − c + d', 'a + b + c − d', 'a − b − c − d'], answer: 1, explain: 'Đổi dấu mọi số hạng trong ngoặc.' },
    { type: 'short', q: 'Tính: 100 − (40 − 15).', answer: '75', calc: '100-(40-15)', explain: '100 − 40 + 15 = 75.' },
    { type: 'short', q: 'Tính: (37 − 12) − (37 + 8).', answer: '-20', answerText: '−20', calc: '(37-12)-(37+8)', explain: '37 − 12 − 37 − 8 = −20.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: −(5 − 9) = −5 − 9.', answer: false, explain: '−(5 − 9) = −5 + 9 = 4.' },
    { type: 'short', q: 'Tính nhanh: 67 − 45 + 33 − 55.', answer: '0', calc: '67-45+33-55', explain: '(67 + 33) − (45 + 55) = 100 − 100 = 0.' },
    { type: 'short', q: 'Tìm x biết x − (12 − 5) = −3.', answer: '4', calc: '-3+(12-5)', explain: 'x − 7 = −3 ⇒ x = 4.' },
    { type: 'mcq', q: 'Giá trị của −(−8) + (−(3)) là:', options: ['5', '−11', '11', '−5'], answer: 0, calc: '-(-8)+(-(3))', explain: '8 + (−3) = 5.' },
    { type: 'short', q: 'Tính: 450 − (150 + 99).', answer: '201', calc: '450-(150+99)', explain: '450 − 150 − 99 = 300 − 99 = 201.' }
  ]
});
