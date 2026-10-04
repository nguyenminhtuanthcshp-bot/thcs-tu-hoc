/* Toán 6 – Bài tập cuối chương VII. Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('toan-6/c7-on-tap', {
  objectives: [
    'Hệ thống hoá kiến thức chương VII: số thập phân, tính toán, làm tròn, ước lượng, tỉ số và tỉ số phần trăm.',
    'Vận dụng tổng hợp vào các bài toán thực tế về tiền, đo lường, phần trăm.',
    'Tự đánh giá mức độ nắm vững chương VII.'
  ],
  intro: 'Ôn tập chương VII – Số thập phân. Hãy chú ý đơn vị và dấu của kết quả.',
  steps: [
    { title: 'Số thập phân', html: `<p>Phân số thập phân ↔ số thập phân; phần nguyên, phần thập phân; số đối; so sánh.</p>` },
    { title: 'Bốn phép tính', html: `<p>Quy tắc dấu như số nguyên. Nhân/chia với 10, 100…: dời dấu phẩy.</p>` },
    { title: 'Làm tròn, ước lượng', html: `<p>Làm tròn đến hàng cho trước; ước lượng để kiểm tra kết quả.</p>` },
    { title: 'Tỉ số phần trăm', html: `<p>Ba dạng: tính tỉ số phần trăm; tìm m% của một số; tìm một số biết m% của nó.</p>` }
  ],
  summary: 'Chương VII: số thập phân (kể cả âm), phép tính, làm tròn, ước lượng, tỉ số, tỉ số phần trăm và ứng dụng.',
  examples: [
    { title: 'Biểu thức', problem: 'Tính: 3,5 · (−2) + 12,6 : 4,2.', solution: '−7 + 3 = <b>−4</b>.' },
    { title: 'Hoá đơn', problem: 'Mua 2,5 kg táo giá 48 000 đồng/kg, được giảm 5% trên tổng hoá đơn. Phải trả bao nhiêu?', solution: 'Tổng: 2,5 · 48 000 = 120 000 đồng. Giảm 5%: 6 000 đồng. Trả <b>114 000 đồng</b>.' },
    { title: 'Làm tròn', problem: 'Chu vi của một hình tròn đường kính 7 cm được tính bằng 3,14 · 7. Tính và làm tròn đến hàng phần mười.', solution: '3,14 · 7 = 21,98 ≈ <b>22,0 cm</b>.' }
  ],
  exercises: [
    { question: 'Tìm x biết x + 2,75 = 1,2.', hints: ['x = 1,2 − 2,75.', 'Kết quả âm.'], solution: '<b>x = −1,55</b>.' },
    { question: 'Số học sinh giỏi của trường là 126 em, chiếm 18% số học sinh toàn trường. Trường có bao nhiêu học sinh?', hints: ['126 : 18%.', '126 : 0,18.'], solution: '<b>700 học sinh</b>.' },
    { question: 'Ước lượng rồi tính chính xác: 19,6 + 40,3 + 30,05.', hints: ['≈ 20 + 40 + 30.', 'Đặt tính thẳng dấu phẩy.'], solution: 'Ước lượng ≈ 90; chính xác <b>89,95</b>.' }
  ],
  quiz: [
    { type: 'short', q: 'Viết {{125|1000}} dưới dạng số thập phân.', answer: '0,125', calc: '125/1000', explain: '0,125.' },
    { type: 'short', q: 'Tính 7,5 − 10,25.', answer: '-2,75', answerText: '−2,75', calc: '7.5-10.25', explain: '−(10,25 − 7,5) = −2,75.' },
    { type: 'short', q: 'Tính 0,6 · (−0,5).', answer: '-0,3', answerText: '−0,3', calc: '0.6*-0.5', explain: 'Khác dấu: −0,3.' },
    { type: 'short', q: 'Làm tròn 4,8351 đến hàng phần trăm.', answer: '4,84', calc: 'round(4.8351,2)', explain: 'Chữ số phần nghìn 5 ≥ 5.' },
    { type: 'mcq', q: '20% của 45 000 đồng là:', options: ['9 000 đồng', '4 500 đồng', '900 đồng', '90 000 đồng'], answer: 0, calc: '45000*0.2', explain: '45 000 · 0,2 = 9 000.' },
    { type: 'short', q: 'Tìm một số biết 25% của nó là 17.', answer: '68', calc: '17/0.25', explain: '17 : 0,25 = 68.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: −2,5 &lt; −2,49.', answer: true, explain: '2,5 &gt; 2,49 nên −2,5 &lt; −2,49.' },
    { type: 'mcq', q: 'Tỉ số phần trăm của 7 và 20 là:', options: ['35%', '0,35%', '7%', '14%'], answer: 0, calc: '7*100/20', explain: '{{7 · 100|20}} = 35%.' }
  ]
});
