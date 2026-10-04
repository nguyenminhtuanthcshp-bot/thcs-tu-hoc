/* Toán 6 – Bài tập cuối chương III. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('toan-6/c3-on-tap', {
  objectives: [
    'Hệ thống hoá kiến thức về số nguyên: tập hợp ℤ, trục số, so sánh, bốn phép tính, quy tắc dấu ngoặc, ước và bội.',
    'Vận dụng tổng hợp giải bài tập và bài toán thực tế.',
    'Tự đánh giá mức độ nắm vững chương III.'
  ],
  intro: 'Ôn tập chương III – Số nguyên. Hãy vẽ lại trục số và bảng quy tắc dấu vào vở trước khi làm bài.',
  steps: [
    { title: 'Tập hợp ℤ và trục số', html: `<p>ℤ = {…; −2; −1; 0; 1; 2; …}. Số đối của a là −a. Trên trục số, bên trái nhỏ hơn.</p>`,
      svg: S.numberLine({ min: -4, max: 4, marks: [{ v: -3, label: '−3' }, { v: 3, label: '3' }] }), caption: '−3 và 3 là hai số đối nhau.' },
    { title: 'Cộng, trừ và dấu ngoặc', html: `<p>Cùng dấu: cộng phần số giữ dấu; khác dấu: trừ phần số, lấy dấu số lớn hơn về phần số. a − b = a + (−b). Bỏ ngoặc có “−” trước: đổi dấu.</p>` },
    { title: 'Nhân, chia', html: `<p>Cùng dấu ⇒ dương, khác dấu ⇒ âm. Số chẵn thừa số âm ⇒ tích dương.</p>` },
    { title: 'Ước và bội', html: `<p>a = b · q ⇒ a là bội của b, b là ước của a. Ước đi theo cặp ±.</p>` }
  ],
  summary: 'Chương III: tập hợp số nguyên, trục số, so sánh, cộng trừ, quy tắc dấu ngoặc, nhân chia, ước và bội của số nguyên.',
  examples: [
    { title: 'Tổng hợp', problem: 'Tính: (−2)<sup>3</sup> + 5 · (−4) − (−30) : 6.', solution: '−8 + (−20) − (−5) = −28 + 5 = <b>−23</b>.' },
    { title: 'Tính nhanh', problem: 'Tính: 23 · (−57) + 23 · 57 − 100.', solution: '23 · (−57 + 57) − 100 = 0 − 100 = <b>−100</b>.' },
    { title: 'Thực tế', problem: 'Một thang máy ở tầng 3, đi xuống 5 tầng (tầng hầm được ghi số âm, tầng trệt là 0), rồi đi lên 7 tầng. Thang máy dừng ở tầng nào?', solution: '3 + (−5) + 7 = <b>5</b>: tầng 5.' }
  ],
  exercises: [
    { question: 'Tính tổng các số nguyên x thoả mãn −6 &lt; x ≤ 5.', hints: ['Liệt kê từ −5 đến 5.', 'Ghép các cặp số đối.'], solution: 'Các cặp đối có tổng 0 ⇒ tổng = <b>0</b>.' },
    { question: 'Tìm x biết 2 · (x − 3) = −14.', hints: ['x − 3 = −14 : 2.', 'x − 3 = −7.'], solution: '<b>x = −4</b>.' },
    { question: 'Nhiệt độ ở đỉnh núi lúc 5 giờ là −6 °C, mỗi giờ tăng 2 °C. Hỏi lúc 11 giờ nhiệt độ là bao nhiêu?', hints: ['Từ 5 giờ đến 11 giờ là 6 giờ.', '−6 + 6 · 2.'], solution: '−6 + 12 = <b>6 °C</b>.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Sắp xếp tăng dần nào đúng?', options: ['−7; −3; 0; 2', '−3; −7; 0; 2', '0; −3; −7; 2', '2; 0; −3; −7'], answer: 0, explain: 'Số âm có phần số lớn hơn thì nhỏ hơn.' },
    { type: 'short', q: 'Tính: (−15) + (−25) − (−40).', answer: '0', calc: '-15+-25-(-40)', explain: '−40 + 40 = 0.' },
    { type: 'short', q: 'Tính: (−8) · (−5) : (−4).', answer: '-10', answerText: '−10', calc: '-8*-5/-4', explain: '40 : (−4) = −10.' },
    { type: 'short', q: 'Tính: 50 − (20 − (−10)).', answer: '20', calc: '50-(20-(-10))', explain: '20 − (−10) = 30; 50 − 30 = 20.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tích của hai số nguyên âm lớn hơn mỗi thừa số.', answer: true, explain: 'Tích dương, luôn lớn hơn số âm.' },
    { type: 'short', q: 'Tìm x biết x − 17 = −25.', answer: '-8', answerText: '−8', calc: '-25+17', explain: 'x = −25 + 17 = −8.' },
    { type: 'mcq', q: 'Ước dương lớn nhất của −24 khác 24 là:', options: ['12', '8', '6', '−12'], answer: 0, calc: '12', explain: 'Ước dương của 24: 1; 2; 3; 4; 6; 8; 12; 24.' },
    { type: 'short', q: 'Tàu ngầm ở độ sâu −120 m, nổi lên với tốc độ 15 m mỗi phút. Sau bao nhiêu phút tàu lên tới mặt nước (độ cao 0)?', answer: '8', calc: '120/15', explain: '0 − (−120) = 120 m; 120 : 15 = 8 phút.' }
  ]
});
})();
