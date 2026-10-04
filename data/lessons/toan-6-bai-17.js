/* Toán 6 – Bài 17. Phép chia hết. Ước và bội của một số nguyên. Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('toan-6/bai-17', {
  objectives: [
    'Thực hiện được phép chia hết hai số nguyên; xác định đúng dấu của thương.',
    'Nhận biết ước và bội của một số nguyên; tìm được các ước (cả âm) của một số nguyên.',
    'Tìm số chưa biết trong đẳng thức có phép nhân, chia số nguyên.'
  ],
  intro: 'Trong 5 ngày nhiệt độ giảm tổng cộng 15 °C (thay đổi −15 °C). Trung bình mỗi ngày thay đổi bao nhiêu? Cần phép chia số nguyên: (−15) : 5.',
  steps: [
    { title: 'Phép chia hết hai số nguyên', html: `<p>Với a, b ∈ ℤ, b ≠ 0: nếu có số nguyên q sao cho a = b · q thì a chia hết cho b và <span class="math">a : b = q</span>.</p>
      <p><b>Quy tắc dấu giống phép nhân:</b> cùng dấu ⇒ thương dương; khác dấu ⇒ thương âm. Ví dụ: (−15) : 5 = −3; (−24) : (−6) = 4; 36 : (−9) = −4.</p>` },
    { title: 'Ước và bội của số nguyên', html: `<p>Nếu a ⋮ b thì a là <b>bội</b> của b, b là <b>ước</b> của a (b ≠ 0).</p>
      <p>Nếu b là ước của a thì −b cũng là ước của a. Ví dụ: Ư(6) = {−6; −3; −2; −1; 1; 2; 3; 6}.</p>` },
    { title: 'Tìm ước và bội', html: `<ul><li>Tìm các ước dương của |a| như với số tự nhiên, rồi thêm các số đối của chúng.</li><li>Bội của b: b · k với k ∈ ℤ, ví dụ B(−4) = {…; −8; −4; 0; 4; 8; …}.</li></ul>
      <p>Chú ý: 0 là bội của mọi số nguyên khác 0; 1 và −1 là ước của mọi số nguyên.</p>` },
    { title: 'Tìm số chưa biết', html: `<p>(−5) · x = 40 ⇒ x = 40 : (−5) = −8. x : (−3) = −7 ⇒ x = (−7) · (−3) = 21.</p>` }
  ],
  summary: 'a : b = q khi a = b · q (b ≠ 0); dấu của thương theo quy tắc: cùng dấu dương, khác dấu âm. Mỗi số nguyên a ≠ 0 có các ước đi theo cặp đối nhau.',
  examples: [
    { title: 'Chia số nguyên', problem: 'Tính: a) (−72) : 8; b) (−56) : (−7); c) 0 : (−13).', solution: 'a) <b>−9</b>; b) <b>8</b>; c) <b>0</b>.' },
    { title: 'Tìm ước', problem: 'Tìm tất cả các ước của −10.', solution: 'Ước dương của 10: 1; 2; 5; 10. Vậy Ư(−10) = <b>{−10; −5; −2; −1; 1; 2; 5; 10}</b>.' },
    { title: 'Trung bình', problem: 'Nhiệt độ của một kho lạnh giảm đều từ 0 °C xuống −18 °C trong 6 giờ. Mỗi giờ nhiệt độ thay đổi bao nhiêu?', solution: '(−18) : 6 = <b>−3 °C</b> mỗi giờ (giảm 3 °C mỗi giờ).' }
  ],
  exercises: [
    { question: 'Tìm x ∈ ℤ biết (−4) · x = −52.', hints: ['x = (−52) : (−4).', 'Cùng dấu ⇒ thương dương.'], solution: 'x = <b>13</b>.' },
    { question: 'Tìm các bội của −6 lớn hơn −20 và nhỏ hơn 20.', hints: ['Bội của −6 cũng là bội của 6.', 'Liệt kê: 0; ±6; ±12; ±18.'], solution: '<b>−18; −12; −6; 0; 6; 12; 18</b>.' },
    { question: 'Tìm số nguyên n sao cho n + 1 là ước của 5.', hints: ['Ư(5) = {−5; −1; 1; 5}.', 'Mỗi trường hợp: n = ước − 1.'], solution: 'n + 1 ∈ {−5; −1; 1; 5} ⇒ n ∈ <b>{−6; −2; 0; 4}</b>.' }
  ],
  quiz: [
    { type: 'short', q: 'Tính: (−45) : 9.', answer: '-5', answerText: '−5', calc: '-45/9', explain: 'Khác dấu ⇒ −5.' },
    { type: 'short', q: 'Tính: (−63) : (−7).', answer: '9', calc: '-63/-7', explain: 'Cùng dấu ⇒ 9.' },
    { type: 'short', q: 'Số nguyên −8 có bao nhiêu ước?', answer: '8', calc: 'divisors(8).length*2', explain: '±1; ±2; ±4; ±8.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: −3 là ước của 12.', answer: true, explain: '12 = (−3) · (−4).' },
    { type: 'short', q: 'Tìm x biết x : (−5) = 12.', answer: '-60', answerText: '−60', calc: '12*-5', explain: 'x = 12 · (−5) = −60.' },
    { type: 'mcq', q: 'Số nào không phải là bội của −7?', options: ['−21', '0', '35', '−15'], answer: 3, explain: '−15 không chia hết cho 7.' },
    { type: 'mcq', q: 'Giá trị của [(−20) : 4] · (−3) là:', options: ['15', '−15', '−60', '60'], answer: 0, calc: '(-20/4)*-3', explain: '(−5) · (−3) = 15.' },
    { type: 'short', q: 'Trong 4 tháng, một hộ gia đình lỗ tổng cộng 20 triệu đồng (−20 triệu). Trung bình mỗi tháng thay đổi bao nhiêu triệu đồng?', answer: '-5', answerText: '−5', calc: '-20/4', explain: '(−20) : 4 = −5 (lỗ 5 triệu mỗi tháng).' }
  ]
});
