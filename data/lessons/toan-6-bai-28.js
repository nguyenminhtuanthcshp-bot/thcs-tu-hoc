/* Toán 6 – Bài 28. Số thập phân. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('toan-6/bai-28', {
  objectives: [
    'Nhận biết phân số thập phân và số thập phân (kể cả số thập phân âm); đọc, viết đúng.',
    'Chỉ ra phần nguyên, phần thập phân; tìm số đối của một số thập phân.',
    'So sánh được hai số thập phân; biểu diễn số thập phân trên trục số.'
  ],
  intro: 'Chiều cao của em là 1,52 m; nhiệt độ ở Mẫu Sơn có đêm xuống −1,5 °C. Số thập phân giúp ghi các đại lượng không nguyên một cách gọn gàng.',
  steps: [
    { title: 'Phân số thập phân và số thập phân', html: `<p>Phân số thập phân là phân số có mẫu là luỹ thừa của 10 (10, 100, 1 000, …): {{3|10}}; {{−47|100}}; {{2025|1000}}.</p>
      <p>Mọi phân số thập phân viết được dưới dạng <b>số thập phân</b>: {{3|10}} = 0,3; {{−47|100}} = −0,47; {{2025|1000}} = 2,025.</p>
      <p>Số chữ số ở phần thập phân bằng số chữ số 0 của mẫu.</p>` },
    { title: 'Cấu tạo số thập phân', html: `<p>Số thập phân gồm <b>phần nguyên</b> (bên trái dấu phẩy) và <b>phần thập phân</b> (bên phải dấu phẩy). Ví dụ 25,378: phần nguyên 25; phần thập phân 378 (3 phần mười, 7 phần trăm, 8 phần nghìn).</p>
      <p>Thêm hoặc bớt các chữ số 0 ở tận cùng bên phải phần thập phân, giá trị không đổi: 2,50 = 2,5.</p>` },
    { title: 'Số thập phân âm và số đối', html: `<p>Các số −0,5; −3,14 là số thập phân âm. Số đối của 1,25 là −1,25; số đối của −0,7 là 0,7.</p>`,
      svg: S.numberLine({ min: -2, max: 2, div: 2, marks: [{ v: -1.5, label: '−1,5', color: S.C.orange }, { v: 0.5, label: '0,5', color: S.C.blue }, { v: 1.5, label: '1,5', color: S.C.green }] }),
      caption: '−1,5 và 1,5 là hai số đối nhau.' },
    { title: 'So sánh hai số thập phân dương', html: `<ol><li>So sánh phần nguyên: phần nguyên lớn hơn thì số lớn hơn.</li><li>Nếu phần nguyên bằng nhau: so sánh lần lượt từng chữ số ở hàng phần mười, phần trăm, …</li></ol>
      <p>Ví dụ: 2,35 &lt; 2,4 vì hàng phần mười 3 &lt; 4.</p>`,
      svg: S.numberLine({ min: 2, max: 3, div: 10, decLabels: true, marks: [{ v: 2.35, label: '2,35', color: S.C.orange }, { v: 2.4, label: '', color: S.C.blue }] }),
      caption: 'Trên trục số, 2,35 nằm bên trái 2,4.' },
    { title: 'So sánh số thập phân âm', html: `<p>Số âm luôn nhỏ hơn 0 và nhỏ hơn số dương. Với hai số âm: số nào có phần số (bỏ dấu “−”) lớn hơn thì <b>nhỏ hơn</b>: −3,7 &lt; −3,2 vì 3,7 &gt; 3,2.</p>` }
  ],
  summary: 'Phân số thập phân có mẫu 10, 100, 1 000… và viết được thành số thập phân. Số thập phân có phần nguyên và phần thập phân. So sánh: phần nguyên trước, rồi từng hàng thập phân; với số âm thì ngược lại.',
  examples: [
    { title: 'Viết số thập phân', problem: 'Viết dưới dạng số thập phân: {{7|100}}; {{−123|10}}; {{56|1000}}.', solution: '<b>0,07</b>; <b>−12,3</b>; <b>0,056</b>.' },
    { title: 'Viết phân số thập phân', problem: 'Viết các số 1,25 và −0,008 dưới dạng phân số thập phân.', solution: '1,25 = <b>{{125|100}}</b>; −0,008 = <b>{{−8|1000}}</b>.' },
    { title: 'Sắp xếp', problem: 'Sắp xếp tăng dần: 3,05; −2,5; 3,5; −2,05; 0.', solution: '<b>−2,5 &lt; −2,05 &lt; 0 &lt; 3,05 &lt; 3,5</b>.' }
  ],
  exercises: [
    { question: 'Tìm số đối của: 4,2; −0,35; 0.', hints: ['Số đối của a là −a.', 'Số đối của 0 là 0.'], solution: '<b>−4,2; 0,35; 0</b>.' },
    { question: 'So sánh −5,12 và −5,2.', hints: ['So sánh phần số: 5,12 và 5,20.', 'Số âm có phần số lớn hơn thì nhỏ hơn.'], solution: '5,12 &lt; 5,2 ⇒ <b>−5,12 &gt; −5,2</b>.' },
    { question: 'Chiều cao của bốn bạn: An 1,48 m; Bình 1,5 m; Chi 1,45 m; Dũng 1,52 m. Ai cao nhất, ai thấp nhất?', hints: ['Cùng phần nguyên 1, so sánh hàng phần mười rồi phần trăm.', 'Viết 1,5 thành 1,50 cho dễ so.'], solution: 'Cao nhất: <b>Dũng</b> (1,52 m). Thấp nhất: <b>Chi</b> (1,45 m).' }
  ],
  quiz: [
    { type: 'short', q: 'Viết {{37|100}} dưới dạng số thập phân.', answer: '0,37', calc: '37/100', explain: '{{37|100}} = 0,37.' },
    { type: 'short', q: 'Viết {{−9|1000}} dưới dạng số thập phân.', answer: '-0,009', answerText: '−0,009', calc: '-9/1000', explain: 'Mẫu có ba chữ số 0 ⇒ ba chữ số thập phân.' },
    { type: 'mcq', q: 'Phần nguyên của số 47,086 là:', options: ['47', '086', '4', '86'], answer: 0, calc: '47', explain: 'Phần nguyên ở bên trái dấu phẩy.' },
    { type: 'mcq', q: 'Khẳng định nào đúng?', options: ['0,5 &lt; 0,45', '−1,2 &lt; −1,02', '3,1 &gt; 3,10', '−0,3 &lt; −0,5'], answer: 1, explain: '1,2 &gt; 1,02 nên −1,2 &lt; −1,02.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: 2,500 = 2,5.', answer: true, explain: 'Bớt chữ số 0 tận cùng bên phải phần thập phân, giá trị không đổi.' },
    { type: 'short', q: 'Số đối của −7,25 là số nào?', answer: '7,25', calc: '7.25', explain: '−(−7,25) = 7,25.' },
    { type: 'mcq', q: 'Số lớn nhất trong các số 0,9; 0,89; 0,099; 0,909 là:', options: ['0,9', '0,89', '0,099', '0,909'], answer: 3, calc: '0.909', explain: '0,909 &gt; 0,900 &gt; 0,890 &gt; 0,099.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mọi số thập phân âm đều nhỏ hơn 0.', answer: true, explain: 'Số âm nằm bên trái điểm 0.' }
  ]
});
})();
