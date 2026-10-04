/* Toán 6 – Bài 7. Thứ tự thực hiện các phép tính. Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('toan-6/bai-7', {
  objectives: [
    'Nhớ và áp dụng đúng thứ tự thực hiện phép tính trong biểu thức không có ngoặc và có ngoặc.',
    'Tính đúng giá trị biểu thức có luỹ thừa.',
    'Tránh được các lỗi thường gặp như cộng trước nhân, tính từ phải sang trái.'
  ],
  intro: 'Cùng một dãy phép tính 2 + 3 · 4, bạn A ra 20, bạn B ra 14. Ai đúng? Để mọi người cùng ra một kết quả, toán học có quy ước về thứ tự thực hiện phép tính.',
  steps: [
    { title: 'Biểu thức không có dấu ngoặc', html: `<p>Thứ tự: <b>Luỹ thừa → Nhân và chia → Cộng và trừ</b>.</p>
      <p>Nếu chỉ có cộng, trừ (hoặc chỉ có nhân, chia) thì làm <b>từ trái sang phải</b>.</p>
      <p>Ví dụ: 2 + 3 · 4 = 2 + 12 = 14 (bạn B đúng).</p>` },
    { title: 'Biểu thức có dấu ngoặc', html: `<p>Làm trong ngoặc trước, theo thứ tự: <b>( ) → [ ] → { }</b> (ngoặc tròn, rồi ngoặc vuông, rồi ngoặc nhọn).</p>
      <p>Ví dụ: 2 · [ 15 − (3 + 2) ] = 2 · [ 15 − 5 ] = 2 · 10 = 20.</p>` },
    { title: 'Từ trái sang phải', html: `<p>Với cùng mức ưu tiên, luôn đi từ trái sang phải:</p>
      <p class="math">48 : 4 · 2 = 12 · 2 = 24 (không phải 48 : 8 = 6)</p>
      <p class="math">20 − 5 + 3 = 15 + 3 = 18 (không phải 20 − 8 = 12)</p>` },
    { title: 'Lỗi thường gặp', html: `<ul><li>Nhầm 3 · 2<sup>2</sup> = 6<sup>2</sup>: sai! Luỹ thừa trước: 3 · 4 = 12.</li>
      <li>Bỏ quên dấu ngoặc khi viết lại từng bước.</li>
      <li>Tính luỹ thừa bằng cách nhân cơ số với số mũ.</li></ul>
      <p>Mẹo: viết mỗi bước trên một dòng và gạch chân phép tính sắp làm.</p>` }
  ],
  summary: 'Không có ngoặc: luỹ thừa → nhân, chia → cộng, trừ; cùng mức thì từ trái sang phải. Có ngoặc: ( ) → [ ] → { }.',
  examples: [
    { title: 'Không có ngoặc', problem: 'Tính 5 · 2<sup>3</sup> − 36 : 4.', solution: '= 5 · 8 − 36 : 4 = 40 − 9 = <b>31</b>.' },
    { title: 'Có ngoặc', problem: 'Tính 100 − [ 60 − (12 − 4)<sup>2</sup> : 2 ].', solution: '(12 − 4)<sup>2</sup> = 8<sup>2</sup> = 64; 64 : 2 = 32; 60 − 32 = 28; 100 − 28 = <b>72</b>.' },
    { title: 'Lập biểu thức', problem: 'Mẹ mua 3 kg táo, mỗi kg 45 000 đồng và 2 kg cam, mỗi kg 30 000 đồng. Viết biểu thức tính tổng số tiền và tính.', solution: '3 · 45 000 + 2 · 30 000 = 135 000 + 60 000 = <b>195 000 đồng</b>.' }
  ],
  exercises: [
    { question: 'Tính: 80 − 4 · 5<sup>2</sup> : 10.', hints: ['Tính 5<sup>2</sup> trước.', 'Sau đó 4 · 25 : 10 từ trái sang phải.'], solution: '5<sup>2</sup> = 25; 4 · 25 = 100; 100 : 10 = 10; 80 − 10 = <b>70</b>.' },
    { question: 'Tính: 2 · {30 − [ 5 + (9 − 6)<sup>2</sup> ]}.', hints: ['Trong cùng: (9 − 6)<sup>2</sup> = 9.', 'Rồi đến ngoặc vuông 5 + 9 = 14, ngoặc nhọn 30 − 14.'], solution: '30 − 14 = 16; 2 · 16 = <b>32</b>.' },
    { question: 'Tìm x biết 2x − 3<sup>2</sup> = 15.', hints: ['Tính 3<sup>2</sup> = 9.', '2x = 15 + 9.'], solution: '2x = 24 ⇒ x = <b>12</b>.' }
  ],
  quiz: [
    { type: 'short', q: 'Tính: 12 + 8 · 3.', answer: '36', calc: '12+8*3', explain: 'Nhân trước: 8 · 3 = 24; 12 + 24 = 36.' },
    { type: 'short', q: 'Tính: 60 : 5 · 2.', answer: '24', calc: '60/5*2', explain: 'Từ trái sang phải: 60 : 5 = 12; 12 · 2 = 24.' },
    { type: 'short', q: 'Tính: 3 · 2<sup>3</sup> + 4.', answer: '28', calc: '3*Math.pow(2,3)+4', explain: '2<sup>3</sup> = 8; 3 · 8 = 24; 24 + 4 = 28.' },
    { type: 'mcq', q: 'Giá trị của (15 − 3) : 4 + 1 là:', options: ['2', '4', '3', '13'], answer: 1, calc: '(15-3)/4+1', explain: '12 : 4 = 3; 3 + 1 = 4.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: 50 − 20 + 10 = 20.', answer: false, explain: 'Từ trái sang phải: 50 − 20 = 30; 30 + 10 = 40.' },
    { type: 'short', q: 'Tính: 5 · [ 18 − (2 + 4)<sup>2</sup> : 3 ].', answer: '30', calc: '5*(18-Math.pow(2+4,2)/3)', explain: '(2 + 4)<sup>2</sup> = 36; 36 : 3 = 12; 18 − 12 = 6; 5 · 6 = 30.' },
    { type: 'mcq', q: 'Thứ tự thực hiện đúng với biểu thức không có ngoặc là:', options: ['Cộng, trừ → nhân, chia → luỹ thừa', 'Luỹ thừa → nhân, chia → cộng, trừ', 'Nhân, chia → luỹ thừa → cộng, trừ', 'Từ trái sang phải, không cần ưu tiên'], answer: 1, explain: 'Luỹ thừa trước, rồi nhân chia, sau cùng cộng trừ.' },
    { type: 'short', q: 'Tìm x biết 4x + 2<sup>4</sup> = 40.', answer: '6', calc: '(40-16)/4', explain: '4x = 40 − 16 = 24 ⇒ x = 6.' }
  ]
});
