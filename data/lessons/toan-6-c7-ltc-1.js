/* Toán 6 – Chương VII. Luyện tập chung (sau Bài 31). Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('toan-6/c7-ltc-1', {
  objectives: [
    'Củng cố số thập phân: đọc, viết, so sánh, bốn phép tính.',
    'Làm tròn và ước lượng thành thạo.',
    'Giải các bài toán tỉ số, tỉ số phần trăm trong thực tế.'
  ],
  intro: 'Luyện tập Bài 28 – Bài 31. Ước lượng trước khi tính giúp em phát hiện kết quả sai.',
  steps: [
    { title: 'Số thập phân và trục số', html: `<p>So sánh: phần nguyên trước, rồi từng hàng thập phân; số âm thì ngược lại.</p>`,
      svg: S.numberLine({ min: -1, max: 1, div: 10, decLabels: false, marks: [{ v: -0.7, label: '−0,7', color: S.C.orange }, { v: -0.2, label: '−0,2', color: S.C.purple }, { v: 0.4, label: '0,4', color: S.C.blue }] }),
      caption: '−0,7 &lt; −0,2 &lt; 0,4.' },
    { title: 'Tính toán', html: `<p>Cộng trừ thẳng dấu phẩy; nhân rồi tách đủ chữ số thập phân; chia thì biến số chia thành số tự nhiên.</p>` },
    { title: 'Làm tròn và ước lượng', html: `<p>Xét chữ số bên phải hàng làm tròn: &lt; 5 giữ nguyên, ≥ 5 cộng 1.</p>` },
    { title: 'Phần trăm', html: `<p>Tỉ số phần trăm: {{a · 100|b}}%. m% của b: b · {{m|100}}. Số có m% bằng a: a : {{m|100}}.</p>` }
  ],
  summary: 'Số thập phân, làm tròn, ước lượng, tỉ số và tỉ số phần trăm.',
  examples: [
    { title: 'Biểu thức', problem: 'Tính (2,5 − 4,75) · 0,4 + 1,2.', solution: '(−2,25) · 0,4 = −0,9; −0,9 + 1,2 = <b>0,3</b>.' },
    { title: 'Làm tròn kết quả', problem: 'Chia đều 10 kg đường vào 3 túi. Mỗi túi khoảng bao nhiêu ki-lô-gam (làm tròn đến hàng phần trăm)?', solution: '10 : 3 = 3,333… ≈ <b>3,33 kg</b>.' },
    { title: 'Phần trăm thay đổi', problem: 'Giá một cuốn sách tăng từ 40 000 đồng lên 46 000 đồng. Giá đã tăng bao nhiêu phần trăm?', solution: 'Tăng 6 000 đồng; {{6 000 · 100|40 000}}% = <b>15%</b>.' }
  ],
  exercises: [
    { question: 'Sắp xếp giảm dần: 1,05; −1,5; 1,5; −1,05; 0,15.', hints: ['Các số dương trước, lớn nhất là 1,5.', 'Trong hai số âm, −1,05 lớn hơn −1,5.'], solution: '<b>1,5 &gt; 1,05 &gt; 0,15 &gt; −1,05 &gt; −1,5</b>.' },
    { question: 'Một người mua hàng được giảm 10% và trả 180 000 đồng. Giá gốc là bao nhiêu?', hints: ['Số tiền trả bằng 90% giá gốc.', '180 000 : 0,9.'], solution: '<b>200 000 đồng</b>.' },
    { question: 'Ước lượng rồi tính: 0,98 · 51.', hints: ['0,98 ≈ 1 ⇒ ước lượng ≈ 51.', 'Tính: 51 − 0,02 · 51.'], solution: 'Ước lượng ≈ 51; chính xác <b>49,98</b>.' }
  ],
  quiz: [
    { type: 'short', q: 'Tính 1,25 · 8.', answer: '10', calc: '1.25*8', explain: '1,25 · 8 = 10.' },
    { type: 'short', q: 'Tính (−3,6) : 1,2.', answer: '-3', answerText: '−3', calc: '-3.6/1.2', explain: 'Khác dấu ⇒ −3.' },
    { type: 'short', q: 'Làm tròn 0,666 đến hàng phần trăm.', answer: '0,67', calc: 'round(0.666,2)', explain: 'Chữ số phần nghìn 6 ≥ 5.' },
    { type: 'mcq', q: 'Số nào lớn nhất?', options: ['−0,5', '−0,05', '−0,55', '−5'], answer: 1, calc: '-0.05', explain: '−0,05 gần 0 nhất.' },
    { type: 'short', q: '12% của 250 là bao nhiêu?', answer: '30', calc: '250*0.12', explain: '250 · 0,12 = 30.' },
    { type: 'short', q: 'Tỉ số phần trăm của 3 và 12 là bao nhiêu phần trăm?', answer: '25', unit: '%', calc: '3*100/12', explain: '25%.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: 0,1 · 0,1 = 0,1.', answer: false, explain: '0,1 · 0,1 = 0,01.' },
    { type: 'short', q: 'Một lớp có 16 bạn nữ, chiếm 40% số học sinh. Lớp có bao nhiêu học sinh?', answer: '40', calc: '16/0.4', explain: '16 : 0,4 = 40.' }
  ]
});
})();
