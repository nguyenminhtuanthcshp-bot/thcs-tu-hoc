/* Toán 6 – Chương III. Luyện tập chung (sau Bài 17). Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('toan-6/c3-ltc-2', {
  objectives: [
    'Nhân, chia số nguyên thành thạo và đúng dấu.',
    'Phối hợp bốn phép tính với số nguyên theo đúng thứ tự.',
    'Tìm ước, bội của số nguyên và giải bài toán tìm x.'
  ],
  intro: 'Luyện tập Bài 16 và Bài 17. Điều quan trọng nhất: xác định dấu trước, tính phần số sau.',
  steps: [
    { title: 'Bảng dấu', html: `<table class="tbl"><tr><th>a</th><th>b</th><th>a · b và a : b</th></tr><tr><td>+</td><td>+</td><td>+</td></tr><tr><td>−</td><td>−</td><td>+</td></tr><tr><td>+</td><td>−</td><td>−</td></tr><tr><td>−</td><td>+</td><td>−</td></tr></table>` },
    { title: 'Luỹ thừa của số âm', html: `<p>(−a)<sup>n</sup> dương nếu n chẵn, âm nếu n lẻ. Phân biệt: (−3)<sup>2</sup> = 9 nhưng −3<sup>2</sup> = −9 (luỹ thừa tính trước, rồi mới lấy số đối).</p>` },
    { title: 'Thứ tự phép tính', html: `<p>Giống với số tự nhiên: luỹ thừa → nhân, chia → cộng, trừ; ngoặc trước.</p>` },
    { title: 'Ước của số nguyên', html: `<p>Ước của a (a ≠ 0) đi theo cặp ±. Dạng toán “tìm n để A chia hết cho B” thường đưa về “B là ước của một số cụ thể”.</p>` }
  ],
  summary: 'Nhân, chia: cùng dấu dương, khác dấu âm. (−a)<sup>n</sup> dương khi n chẵn. Thứ tự phép tính như với số tự nhiên. Ước của số nguyên đi theo cặp đối nhau.',
  examples: [
    { title: 'Tính giá trị', problem: 'Tính: (−3)<sup>2</sup> · (−2) − 24 : (−6).', solution: '9 · (−2) − (−4) = −18 + 4 = <b>−14</b>.' },
    { title: 'Tìm x', problem: 'Tìm x biết 3x − (−7) = −8.', solution: '3x + 7 = −8 ⇒ 3x = −15 ⇒ <b>x = −5</b>.' },
    { title: 'Bài toán điểm thi', problem: 'Trong một cuộc thi, mỗi câu đúng được +5 điểm, mỗi câu sai bị −2 điểm. Bạn Mai trả lời đúng 7 câu và sai 3 câu. Tính điểm của Mai.', solution: '7 · 5 + 3 · (−2) = 35 − 6 = <b>29 điểm</b>.' }
  ],
  exercises: [
    { question: 'Tính: (−125) · (−4) · (−2).', hints: ['Ba thừa số âm ⇒ tích âm.', '125 · 4 · 2 = 1 000.'], solution: '<b>−1 000</b>.' },
    { question: 'Tính: [(−36) : 4 + 5] · (−3).', hints: ['(−36) : 4 = −9.', '−9 + 5 = −4.'], solution: '(−4) · (−3) = <b>12</b>.' },
    { question: 'Tìm số nguyên x sao cho x − 2 là ước của 3.', hints: ['Ư(3) = {−3; −1; 1; 3}.', 'x = ước + 2.'], solution: 'x ∈ <b>{−1; 1; 3; 5}</b>.' }
  ],
  quiz: [
    { type: 'short', q: 'Tính: (−4)<sup>2</sup>.', answer: '16', calc: 'Math.pow(-4,2)', explain: '(−4) · (−4) = 16.' },
    { type: 'short', q: 'Tính: −4<sup>2</sup>.', answer: '-16', answerText: '−16', calc: '-Math.pow(4,2)', explain: 'Luỹ thừa trước: −(4<sup>2</sup>) = −16.' },
    { type: 'short', q: 'Tính: 18 : (−3) − (−2) · 5.', answer: '4', calc: '18/-3-(-2)*5', explain: '−6 − (−10) = −6 + 10 = 4.' },
    { type: 'mcq', q: 'Dấu của tích (−2) · (−3) · (−4) · (−5) · (−6) là:', options: ['Dương', 'Âm', 'Bằng 0', 'Không xác định'], answer: 1, explain: '5 thừa số âm (lẻ) ⇒ âm.' },
    { type: 'short', q: 'Tìm x biết −5x = 35.', answer: '-7', answerText: '−7', calc: '35/-5', explain: 'x = 35 : (−5) = −7.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nếu a chia hết cho b thì −a cũng chia hết cho b.', answer: true, explain: 'a = bq ⇒ −a = b · (−q).' },
    { type: 'mcq', q: 'Mỗi câu đúng +4 điểm, mỗi câu sai −1 điểm. Làm đúng 6 câu, sai 4 câu được:', options: ['20 điểm', '28 điểm', '24 điểm', '10 điểm'], answer: 0, calc: '6*4+4*-1', explain: '24 − 4 = 20.' },
    { type: 'short', q: 'Có bao nhiêu số nguyên là ước của 9?', answer: '6', calc: 'divisors(9).length*2', explain: '±1; ±3; ±9.' }
  ]
});
