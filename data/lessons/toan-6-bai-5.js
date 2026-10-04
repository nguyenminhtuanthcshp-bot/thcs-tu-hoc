/* Toán 6 – Bài 5. Phép nhân và phép chia số tự nhiên. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('toan-6/bai-5', {
  objectives: [
    'Thực hiện được phép nhân, phép chia số tự nhiên.',
    'Vận dụng tính chất giao hoán, kết hợp, phân phối của phép nhân đối với phép cộng để tính nhanh.',
    'Phân biệt phép chia hết và phép chia có dư; viết được a = b · q + r với 0 ≤ r &lt; b.',
    'Giải được bài toán thực tế có dùng phép nhân, phép chia.'
  ],
  intro: 'Một hộp có 12 cái bút, 8 hộp có bao nhiêu cái? Chia đều 50 cái kẹo cho 7 bạn thì mỗi bạn được mấy cái, còn thừa mấy cái? Phép nhân và phép chia giúp em trả lời nhanh những câu hỏi như vậy.',
  steps: [
    { title: 'Phép nhân', html: `<p>Trong phép nhân <span class="math">a · b = c</span>: a, b là các <b>thừa số</b>, c là <b>tích</b>. Có thể viết a × b hoặc a · b; với chữ, ta viết gọn ab (ví dụ 4 · x = 4x).</p>
      <p>Hình chữ nhật gồm 3 hàng, mỗi hàng 5 ô vuông có 3 · 5 = 15 ô.</p>`,
      svg: S.draw({ w: 220, h: 130, items: [{ grid: [20, 15, 5, 3, 32], filled: 15 }] }), caption: '3 hàng × 5 cột = 15 ô vuông.' },
    { title: 'Tính chất của phép nhân', html: `<ul><li><b>Giao hoán:</b> a · b = b · a.</li>
      <li><b>Kết hợp:</b> (a · b) · c = a · (b · c).</li>
      <li><b>Nhân với 1:</b> a · 1 = a. <b>Nhân với 0:</b> a · 0 = 0.</li>
      <li><b>Phân phối với phép cộng (và trừ):</b> a · (b + c) = a · b + a · c; a · (b − c) = a · b − a · c.</li></ul>
      <p>Ví dụ: 25 · 37 · 4 = (25 · 4) · 37 = 100 · 37 = 3 700; 17 · 99 = 17 · (100 − 1) = 1 700 − 17 = 1 683.</p>` },
    { title: 'Phép chia hết', html: `<p>Với a, b ∈ ℕ, b ≠ 0: nếu có số tự nhiên q sao cho <span class="math">a = b · q</span> thì ta nói a chia hết cho b và viết <span class="math">a : b = q</span> (a: số bị chia, b: số chia, q: thương).</p>
      <p><b>Không có phép chia cho 0.</b> Ngược lại, 0 : b = 0 với mọi b ≠ 0.</p>` },
    { title: 'Phép chia có dư', html: `<p>Chia a cho b (b ≠ 0) luôn tìm được đúng một cặp số tự nhiên q, r sao cho</p>
      <p class="math">a = b · q + r, với 0 ≤ r &lt; b</p>
      <ul><li>r = 0: phép chia hết.</li><li>r ≠ 0: phép chia có dư (q là thương, r là số dư). <b>Số dư luôn nhỏ hơn số chia.</b></li></ul>
      <p>Ví dụ: 50 = 7 · 7 + 1, nên 50 chia 7 được 7, dư 1.</p>` },
    { title: 'Tìm số chưa biết', html: `<ul><li>Thừa số chưa biết = Tích : thừa số đã biết: 6x = 72 ⇒ x = 12.</li>
      <li>Số bị chia = Thương · số chia: x : 8 = 15 ⇒ x = 120.</li>
      <li>Số chia = Số bị chia : thương: 96 : x = 4 ⇒ x = 24.</li></ul>` }
  ],
  summary: 'Phép nhân có tính chất giao hoán, kết hợp, nhân với 1, và phân phối với phép cộng, phép trừ. Chia a cho b (b ≠ 0): a = b · q + r với 0 ≤ r &lt; b; r = 0 là chia hết. Không chia cho 0.',
  examples: [
    { title: 'Tính nhanh', problem: 'Tính nhanh: a) 4 · 17 · 25; b) 36 · 58 + 36 · 42.', solution: 'a) (4 · 25) · 17 = 100 · 17 = <b>1 700</b>.<br>b) 36 · (58 + 42) = 36 · 100 = <b>3 600</b>.' },
    { title: 'Chia có dư', problem: 'Chia 125 cho 9. Viết kết quả dưới dạng a = b · q + r.', solution: '9 · 13 = 117 và 125 − 117 = 8 &lt; 9. Vậy <b>125 = 9 · 13 + 8</b>: thương 13, dư 8.' },
    { title: 'Bài toán xếp xe', problem: 'Có 158 học sinh đi tham quan. Mỗi xe chở được 45 học sinh. Cần ít nhất bao nhiêu xe?', solution: '158 = 45 · 3 + 23. Ba xe chở được 135 bạn, còn 23 bạn cần thêm một xe. Vậy cần ít nhất <b>4 xe</b>.' }
  ],
  exercises: [
    { question: 'Tính nhanh: 125 · 16.', hints: ['Tách 16 = 8 · 2.', '125 · 8 = 1 000.'], solution: '125 · 16 = (125 · 8) · 2 = 1 000 · 2 = <b>2 000</b>.' },
    { question: 'Tìm số tự nhiên x biết 7 · (x − 3) = 56.', hints: ['Coi (x − 3) là thừa số chưa biết.', 'x − 3 = 56 : 7.'], solution: 'x − 3 = 8 ⇒ x = <b>11</b>.' },
    { question: 'Một số khi chia cho 6 được thương là 14 và dư 5. Tìm số đó.', hints: ['Dùng công thức a = b · q + r.', 'b = 6, q = 14, r = 5.'], solution: 'a = 6 · 14 + 5 = 84 + 5 = <b>89</b>.' }
  ],
  quiz: [
    { type: 'short', q: 'Tính: 25 · 12 · 4.', answer: '1200', answerText: '1 200', calc: '25*12*4', explain: '(25 · 4) · 12 = 100 · 12 = 1 200.' },
    { type: 'short', q: 'Tính nhanh: 47 · 101 − 47.', answer: '4700', answerText: '4 700', calc: '47*101-47', explain: '47 · (101 − 1) = 47 · 100 = 4 700.' },
    { type: 'short', q: 'Số dư khi chia 100 cho 7 là bao nhiêu?', answer: '2', calc: '100%7', explain: '100 = 7 · 14 + 2.' },
    { type: 'mcq', q: 'Trong phép chia cho 5, số dư có thể là những số nào?', options: ['1; 2; 3; 4; 5', '0; 1; 2; 3; 4', '0; 1; 2; 3; 4; 5', '1; 2; 3; 4'], answer: 1, explain: 'Số dư r thoả mãn 0 ≤ r &lt; 5.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: 0 : 9 = 0.', answer: true, explain: '0 chia cho số khác 0 bằng 0.' },
    { type: 'short', q: 'Tìm x biết x : 12 = 15.', answer: '180', calc: '15*12', explain: 'Số bị chia = thương · số chia = 15 · 12 = 180.' },
    { type: 'mcq', q: 'Mỗi hộp xếp được 24 quả trứng. Cần ít nhất bao nhiêu hộp để xếp hết 200 quả trứng?', options: ['8', '9', '10', '7'], answer: 1, calc: 'Math.ceil(200/24)', explain: '200 = 24 · 8 + 8: 8 hộp còn thừa 8 quả, cần thêm 1 hộp. Vậy cần 9 hộp.' },
    { type: 'mcq', q: 'Đẳng thức nào thể hiện tính chất phân phối của phép nhân đối với phép cộng?', options: ['a · b = b · a', '(a · b) · c = a · (b · c)', 'a · (b + c) = a · b + a · c', 'a · 1 = a'], answer: 2, explain: 'Nhân một số với một tổng bằng tổng các tích.' }
  ]
});
})();
