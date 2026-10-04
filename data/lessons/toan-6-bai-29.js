/* Toán 6 – Bài 29. Tính toán với số thập phân. Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('toan-6/bai-29', {
  objectives: [
    'Cộng, trừ, nhân, chia được số thập phân (kể cả số thập phân âm).',
    'Vận dụng quy tắc dấu và tính chất các phép tính để tính nhanh.',
    'Giải bài toán thực tế có số thập phân (tiền, khối lượng, độ dài…).'
  ],
  intro: 'Đi chợ mua 1,5 kg thịt giá 120 nghìn đồng/kg và 2,4 kg rau giá 15 nghìn đồng/kg. Hết bao nhiêu tiền? Em cần tính toán với số thập phân.',
  steps: [
    { title: 'Cộng, trừ số thập phân', html: `<p>Đặt tính sao cho các dấu phẩy thẳng cột, cộng/trừ như số tự nhiên, rồi đặt dấu phẩy ở kết quả thẳng cột.</p>
      <p>Với số âm, dùng quy tắc như số nguyên: (−2,5) + 1,3 = −(2,5 − 1,3) = −1,2; 1,4 − 3,6 = −2,2.</p>` },
    { title: 'Nhân số thập phân', html: `<p>Nhân như số tự nhiên (bỏ dấu phẩy), rồi đếm tổng số chữ số ở phần thập phân của hai thừa số, dùng dấu phẩy tách ra từ phải sang trái bấy nhiêu chữ số.</p>
      <p>Ví dụ: 1,2 · 0,35: 12 · 35 = 420; tổng 1 + 2 = 3 chữ số thập phân ⇒ 0,420 = 0,42.</p>
      <p>Nhân với 10, 100, 1 000: dời dấu phẩy sang phải 1, 2, 3 chữ số. Nhân với 0,1; 0,01: dời sang trái.</p>` },
    { title: 'Chia số thập phân', html: `<p>Muốn chia cho một số thập phân, dời dấu phẩy ở số chia và số bị chia sang phải cùng số chữ số để số chia thành số tự nhiên, rồi chia.</p>
      <p>Ví dụ: 4,5 : 0,15 = 450 : 15 = 30. Quy tắc dấu giống số nguyên: (−7,2) : 0,8 = −9.</p>` },
    { title: 'Tính chất và thứ tự tính', html: `<p>Các tính chất giao hoán, kết hợp, phân phối và thứ tự thực hiện phép tính vẫn đúng. Ví dụ: 2,5 · 7,3 · 4 = (2,5 · 4) · 7,3 = 10 · 7,3 = 73.</p>` }
  ],
  summary: 'Cộng, trừ: dấu phẩy thẳng cột. Nhân: nhân như số tự nhiên rồi tách đủ số chữ số thập phân. Chia: làm số chia thành số tự nhiên bằng cách dời dấu phẩy ở cả hai số. Dấu: như số nguyên.',
  examples: [
    { title: 'Tính', problem: 'Tính: a) 12,5 + (−7,75); b) (−3,2) · 1,5; c) (−0,56) : (−0,7).', solution: 'a) 12,5 − 7,75 = <b>4,75</b>. b) −(3,2 · 1,5) = <b>−4,8</b>. c) 0,56 : 0,7 = 5,6 : 7 = <b>0,8</b>.' },
    { title: 'Tính nhanh', problem: 'Tính: 4,86 · 3,7 + 4,86 · 6,3.', solution: '4,86 · (3,7 + 6,3) = 4,86 · 10 = <b>48,6</b>.' },
    { title: 'Đi chợ', problem: 'Mua 1,5 kg thịt giá 120 nghìn đồng/kg và 2,4 kg rau giá 15 nghìn đồng/kg. Tính tổng tiền.', solution: '1,5 · 120 + 2,4 · 15 = 180 + 36 = <b>216 nghìn đồng</b>.' }
  ],
  exercises: [
    { question: 'Tính: 7,2 − 9,85.', hints: ['Kết quả âm vì 7,2 &lt; 9,85.', 'Tính 9,85 − 7,2 rồi thêm dấu “−”.'], solution: '<b>−2,65</b>.' },
    { question: 'Tính: 0,25 · (−12,8) · 4.', hints: ['Ghép 0,25 · 4 = 1.', 'Dấu: có một thừa số âm.'], solution: '<b>−12,8</b>.' },
    { question: 'Một sợi dây dài 12,6 m được cắt thành các đoạn dài 0,45 m. Được bao nhiêu đoạn?', hints: ['Tính 12,6 : 0,45.', 'Dời dấu phẩy: 1 260 : 45.'], solution: '<b>28 đoạn</b>.' }
  ],
  quiz: [
    { type: 'short', q: 'Tính 3,75 + 1,6.', answer: '5,35', calc: '3.75+1.6', explain: '3,75 + 1,60 = 5,35.' },
    { type: 'short', q: 'Tính (−4,2) + 1,5.', answer: '-2,7', answerText: '−2,7', calc: '-4.2+1.5', explain: '−(4,2 − 1,5) = −2,7.' },
    { type: 'short', q: 'Tính 2,4 · 0,5.', answer: '1,2', calc: '2.4*0.5', explain: '24 · 5 = 120, hai chữ số thập phân ⇒ 1,20.' },
    { type: 'short', q: 'Tính 6,3 : 0,9.', answer: '7', calc: '6.3/0.9', explain: '63 : 9 = 7.' },
    { type: 'mcq', q: 'Kết quả của (−1,5) · (−0,4) là:', options: ['−0,6', '0,6', '6', '−6'], answer: 1, calc: '-1.5*-0.4', explain: 'Cùng dấu ⇒ dương: 0,6.' },
    { type: 'short', q: 'Tính 0,37 · 100.', answer: '37', calc: '0.37*100', explain: 'Dời dấu phẩy sang phải hai chữ số.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: 5,6 : 0,1 = 0,56.', answer: false, explain: 'Chia cho 0,1 là nhân với 10: 56.' },
    { type: 'mcq', q: 'Mua 3 quyển vở, mỗi quyển 8,5 nghìn đồng và 1 cây bút 6,5 nghìn đồng. Tổng tiền là:', options: ['32 nghìn đồng', '15 nghìn đồng', '30,5 nghìn đồng', '25,5 nghìn đồng'], answer: 0, calc: '3*8.5+6.5', explain: '25,5 + 6,5 = 32 nghìn đồng.' }
  ]
});
