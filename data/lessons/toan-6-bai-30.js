/* Toán 6 – Bài 30. Làm tròn và ước lượng. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('toan-6/bai-30', {
  objectives: [
    'Làm tròn được số thập phân (và số nguyên) đến một hàng cho trước.',
    'Hiểu ý nghĩa của làm tròn trong thực tế.',
    'Ước lượng được kết quả phép tính để kiểm tra nhanh tính hợp lí của đáp số.'
  ],
  intro: 'Bản tin nói “dân số Việt Nam khoảng 100 triệu người”, hoá đơn 49 800 đồng được làm tròn thành 50 000 đồng. Làm tròn giúp số liệu gọn và dễ nhớ.',
  steps: [
    { title: 'Quy tắc làm tròn', html: `<p>Để làm tròn một số đến một hàng nào đó, ta xét <b>chữ số ngay bên phải</b> hàng đó:</p>
      <ul><li>Nếu chữ số đó <b>nhỏ hơn 5</b>: giữ nguyên chữ số hàng làm tròn, bỏ (hoặc thay bằng 0) các chữ số bên phải.</li>
      <li>Nếu chữ số đó <b>lớn hơn hoặc bằng 5</b>: cộng thêm 1 vào chữ số hàng làm tròn, bỏ (hoặc thay bằng 0) các chữ số bên phải.</li></ul>` },
    { title: 'Làm tròn số thập phân', html: `<p>Làm tròn 2,37 đến hàng phần mười: chữ số bên phải là 7 ≥ 5 ⇒ 2,37 ≈ 2,4. Trên trục số, 2,37 gần 2,4 hơn 2,3.</p>`,
      svg: S.numberLine({ min: 2.3, max: 2.4, div: 100, decLabels: true, jumps: [{ from: 2.37, to: 2.4, label: '0,03', color: S.C.green }, { from: 2.37, to: 2.3, label: '0,07', color: S.C.muted }], marks: [{ v: 2.37, label: '', color: S.C.orange }] }),
      caption: '2,37 cách 2,4 là 0,03 và cách 2,3 là 0,07 ⇒ 2,37 ≈ 2,4.' },
    { title: 'Làm tròn số nguyên', html: `<p>Làm tròn 45 678 đến hàng nghìn: chữ số hàng trăm là 6 ≥ 5 ⇒ 45 678 ≈ 46 000. Làm tròn đến hàng chục: chữ số hàng đơn vị 8 ≥ 5 ⇒ ≈ 45 680.</p>
      <p>Với số âm: làm tròn phần số rồi giữ dấu “−”: −3,146 ≈ −3,15 (đến hàng phần trăm).</p>` },
    { title: 'Ước lượng kết quả', html: `<p>Làm tròn các số đến hàng thích hợp rồi tính nhẩm để có kết quả gần đúng.</p><p>Ví dụ: 19,8 · 5,1 ≈ 20 · 5 = 100. Nếu tính ra 1 009,8 thì chắc chắn sai (thực tế 19,8 · 5,1 = 100,98).</p>` }
  ],
  summary: 'Làm tròn: xét chữ số ngay bên phải hàng làm tròn; nhỏ hơn 5 thì giữ nguyên, từ 5 trở lên thì cộng 1. Kí hiệu ≈. Ước lượng bằng cách làm tròn rồi tính nhẩm.',
  examples: [
    { title: 'Làm tròn nhiều hàng', problem: 'Làm tròn 12,3456 đến hàng: a) đơn vị; b) phần mười; c) phần trăm.', solution: 'a) chữ số phần mười là 3 &lt; 5 ⇒ <b>12</b>. b) chữ số phần trăm 4 &lt; 5 ⇒ <b>12,3</b>. c) chữ số phần nghìn 5 ≥ 5 ⇒ <b>12,35</b>.' },
    { title: 'Thực tế', problem: 'Một chiếc xe đạp giá 2 486 000 đồng. Làm tròn giá đến hàng trăm nghìn.', solution: 'Chữ số hàng chục nghìn là 8 ≥ 5 ⇒ ≈ <b>2 500 000 đồng</b>.' },
    { title: 'Ước lượng', problem: 'Ước lượng tổng 38,9 + 21,2 + 49,7.', solution: '≈ 39 + 21 + 50 = <b>110</b> (tổng đúng là 109,8).' }
  ],
  exercises: [
    { question: 'Làm tròn 7,956 đến hàng phần mười.', hints: ['Chữ số hàng phần trăm là 5.', '9 + 1 = 10: phải nhớ sang hàng đơn vị.'], solution: '7,956 ≈ <b>8,0</b>.' },
    { question: 'Làm tròn −0,0724 đến hàng phần trăm.', hints: ['Làm tròn phần số 0,0724.', 'Chữ số hàng phần nghìn là 2 &lt; 5.'], solution: '<b>−0,07</b>.' },
    { question: 'Ước lượng rồi tính chính xác: 4,9 · 20,4.', hints: ['4,9 ≈ 5; 20,4 ≈ 20.', 'Tính chính xác bằng cách nhân như số tự nhiên: 49 · 204.'], solution: 'Ước lượng ≈ 100. Chính xác: <b>99,96</b>.' }
  ],
  quiz: [
    { type: 'short', q: 'Làm tròn 3,1416 đến hàng phần trăm.', answer: '3,14', calc: 'round(3.1416,2)', explain: 'Chữ số phần nghìn là 1 &lt; 5.' },
    { type: 'short', q: 'Làm tròn 15,65 đến hàng phần mười.', answer: '15,7', calc: 'round(15.65,1)', explain: 'Chữ số phần trăm là 5 ≥ 5 ⇒ 15,7.' },
    { type: 'short', q: 'Làm tròn 83 459 đến hàng nghìn.', answer: '83000', answerText: '83 000', calc: 'round(83459/1000,0)*1000', explain: 'Chữ số hàng trăm là 4 &lt; 5.' },
    { type: 'mcq', q: 'Làm tròn 9,97 đến hàng phần mười được:', options: ['9,9', '10,0', '9,10', '10,9'], answer: 1, calc: 'round(9.97,1)', explain: '9 + 1 = 10 ⇒ 10,0.' },
    { type: 'mcq', q: 'Ước lượng 29,7 · 3,1 gần nhất với:', options: ['9', '90', '900', '60'], answer: 1, calc: '30*3', explain: '≈ 30 · 3 = 90.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Làm tròn 2,449 đến hàng phần mười được 2,5.', answer: false, explain: 'Chỉ xét chữ số hàng phần trăm là 4 &lt; 5 ⇒ 2,4.' },
    { type: 'short', q: 'Làm tròn −5,382 đến hàng đơn vị.', answer: '-5', answerText: '−5', calc: '-round(5.382,0)', explain: 'Phần số 5,382 ≈ 5 ⇒ −5.' },
    { type: 'mcq', q: 'Quãng đường 1 732,6 km làm tròn đến hàng trăm là:', options: ['1 700 km', '1 800 km', '1 730 km', '2 000 km'], answer: 0, calc: 'round(1732.6/100,0)*100', explain: 'Chữ số hàng chục là 3 &lt; 5.' }
  ]
});
})();
