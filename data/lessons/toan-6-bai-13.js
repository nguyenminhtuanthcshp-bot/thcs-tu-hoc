/* Toán 6 – Bài 13. Tập hợp các số nguyên. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('toan-6/bai-13', {
  objectives: [
    'Nhận biết số nguyên âm, tập hợp các số nguyên ℤ và ý nghĩa của số âm trong thực tế.',
    'Biểu diễn được số nguyên trên trục số; tìm được số đối của một số nguyên.',
    'So sánh được hai số nguyên và sắp xếp dãy số nguyên theo thứ tự.'
  ],
  intro: 'Mùa đông ở Sa Pa có lúc nhiệt độ xuống −2 °C; đáy vịnh có thể ở độ cao −20 m so với mực nước biển. Để ghi những đại lượng “dưới mức 0” như vậy, ta cần số nguyên âm.',
  steps: [
    { title: 'Số nguyên âm và tập hợp ℤ', html: `<p>Các số −1, −2, −3, … (đọc là “âm một”, “trừ hai”, …) là các <b>số nguyên âm</b>. Các số 1, 2, 3, … còn gọi là <b>số nguyên dương</b> (có thể viết +1, +2, …).</p>
      <p class="math">ℤ = {…; −3; −2; −1; 0; 1; 2; 3; …}</p>
      <p>Số 0 không là số nguyên âm, cũng không là số nguyên dương. Ví dụ ý nghĩa: nhiệt độ dưới 0 °C, độ cao dưới mực nước biển, số tiền nợ, năm trước Công nguyên.</p>` },
    { title: 'Trục số', html: `<p>Vẽ đường thẳng nằm ngang, chọn điểm 0 (gốc). Bên phải gốc là các số nguyên dương, bên trái là các số nguyên âm, các vạch cách đều nhau. Chiều từ trái sang phải là chiều dương (có mũi tên).</p>`,
      svg: S.numberLine({ min: -5, max: 5, marks: [{ v: -4, label: 'A' }, { v: 3, label: 'B' }, { v: -1, label: 'C' }] }),
      caption: 'Điểm A biểu diễn số −4, điểm B biểu diễn số 3, điểm C biểu diễn số −1.' },
    { title: 'Số đối', html: `<p>Hai điểm cách đều gốc 0, nằm về hai phía, biểu diễn hai số <b>đối nhau</b>. Số đối của 3 là −3, số đối của −3 là 3; số đối của 0 là 0.</p>`,
      svg: S.numberLine({ min: -5, max: 5, jumps: [{ from: 0, to: 3, label: '3 đơn vị', color: S.C.blue }, { from: 0, to: -3, label: '3 đơn vị' }], marks: [{ v: -3, label: '−3', color: S.C.orange }, { v: 3, label: '3', color: S.C.blue }] }),
      caption: '3 và −3 cách đều điểm 0 nên là hai số đối nhau.' },
    { title: 'So sánh hai số nguyên', html: `<p>Trên trục số nằm ngang, điểm a nằm bên trái điểm b thì <span class="math">a &lt; b</span>.</p>
      <ul><li>Mọi số nguyên dương đều lớn hơn 0; mọi số nguyên âm đều nhỏ hơn 0.</li><li>Mọi số nguyên âm nhỏ hơn mọi số nguyên dương.</li>
      <li>Hai số nguyên âm: số nào có phần số (bỏ dấu “−”) <b>lớn hơn</b> thì <b>nhỏ hơn</b>. Ví dụ −7 &lt; −2 (nợ 7 nghìn thì “nghèo” hơn nợ 2 nghìn).</li></ul>` },
    { title: 'Số liền trước, liền sau', html: `<p>Số liền sau của a là a + 1, số liền trước là a − 1, kể cả với số âm: số liền sau của −5 là −4; số liền trước của −5 là −6. Trong ℤ, mọi số đều có số liền trước.</p>` }
  ],
  summary: 'ℤ gồm số nguyên âm, số 0 và số nguyên dương. Trên trục số, số bên trái nhỏ hơn số bên phải. Số đối của a là −a. Với hai số nguyên âm, số có phần số lớn hơn thì nhỏ hơn.',
  examples: [
    { title: 'Ý nghĩa số âm', problem: 'Dùng số nguyên để biểu thị: a) Nhiệt độ 5 độ dưới 0 °C; b) Độ cao 120 m dưới mực nước biển; c) Có 50 000 đồng.', solution: 'a) <b>−5 °C</b>; b) <b>−120 m</b>; c) <b>+50 000 đồng</b> (hay 50 000).' },
    { title: 'Sắp xếp', problem: 'Sắp xếp theo thứ tự tăng dần: 4; −9; 0; −2; 7; −11.', solution: 'Số âm đứng trước, số âm nào có phần số lớn hơn thì nhỏ hơn: <b>−11 &lt; −9 &lt; −2 &lt; 0 &lt; 4 &lt; 7</b>.' },
    { title: 'Liệt kê', problem: 'Liệt kê các số nguyên x thoả mãn −3 &lt; x ≤ 2.', solution: 'Trên trục số, các số lớn hơn −3 và không vượt quá 2: <b>−2; −1; 0; 1; 2</b>.',
      svg: S.numberLine({ min: -5, max: 5, range: [-2, 2], marks: [{ v: -2 }, { v: -1 }, { v: 0 }, { v: 1 }, { v: 2 }].map(function (m) { m.color = S.C.green; return m; }) }) }
  ],
  exercises: [
    { question: 'Tìm số đối của các số: 12; −8; 0; −(−5).', hints: ['Số đối của a là −a.', '−(−5) là số đối của −5, tức là 5.'], solution: 'Số đối lần lượt: <b>−12; 8; 0; −5</b>.' },
    { question: 'Nhiệt độ lúc 6 giờ sáng ở một thành phố là −3 °C, buổi trưa là 4 °C, buổi tối là −1 °C. Thời điểm nào lạnh nhất?', hints: ['Nhiệt độ thấp nhất ứng với số nhỏ nhất.', 'So sánh −3; 4; −1.'], solution: '−3 &lt; −1 &lt; 4 nên <b>6 giờ sáng</b> lạnh nhất.' },
    { question: 'Có bao nhiêu số nguyên x thoả mãn −5 ≤ x &lt; 4?', hints: ['Liệt kê từ −5 đến 3.', 'Đừng quên số 0.'], solution: '−5; −4; −3; −2; −1; 0; 1; 2; 3: có <b>9</b> số.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Số nguyên biểu thị “nợ 20 000 đồng” là:', options: ['20 000', '−20 000', '0', '+20 000'], answer: 1, calc: '-20000', explain: 'Nợ được biểu thị bằng số âm.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Số 0 là số nguyên dương nhỏ nhất.', answer: false, explain: '0 không là số nguyên dương; số nguyên dương nhỏ nhất là 1.' },
    { type: 'short', q: 'Số đối của −15 là số nào?', answer: '15', calc: '-(-15)', explain: 'Số đối của −15 là 15.' },
    { type: 'mcq', q: 'Khẳng định nào đúng?', options: ['−5 &gt; −3', '−8 &lt; −10', '−1 &gt; −100', '0 &lt; −2'], answer: 2, explain: 'Hai số âm: 1 &lt; 100 nên −1 &gt; −100.' },
    { type: 'short', q: 'Số liền trước của −9 là số nào?', answer: '-10', answerText: '−10', calc: '-9-1', explain: '−9 − 1 = −10.' },
    { type: 'short', q: 'Số nguyên âm lớn nhất là số nào?', answer: '-1', answerText: '−1', calc: '-1', explain: 'Trên trục số, −1 là số âm gần 0 nhất.' },
    { type: 'short', q: 'Có bao nhiêu số nguyên x thoả mãn −4 &lt; x &lt; 4?', answer: '7', calc: '3-(-3)+1', explain: '−3; −2; −1; 0; 1; 2; 3.' },
    { type: 'mcq', q: 'Điểm nằm cách điểm 0 bốn đơn vị về bên trái trên trục số biểu diễn số:', options: ['4', '−4', '0', '−3'], answer: 1, calc: '-4', explain: 'Bên trái gốc là số âm: −4.' }
  ]
});
})();
