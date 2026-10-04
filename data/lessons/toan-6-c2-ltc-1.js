/* Toán 6 – Chương II. Luyện tập chung (sau Bài 10). Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('toan-6/c2-ltc-1', {
  objectives: [
    'Củng cố khái niệm ước, bội và tính chất chia hết của tổng, hiệu.',
    'Vận dụng thành thạo dấu hiệu chia hết cho 2, 3, 5, 9.',
    'Phân biệt số nguyên tố, hợp số; phân tích một số ra thừa số nguyên tố.'
  ],
  intro: 'Luyện tập Bài 8 – Bài 10. Những kĩ năng này là nền tảng để học ƯCLN và BCNN ngay sau đây.',
  steps: [
    { title: 'Ước và bội', html: `<p>a ⋮ b ⇔ a là bội của b ⇔ b là ước của a (b ≠ 0). Tìm ước: chia thử; tìm bội: nhân với 0, 1, 2, …</p>` },
    { title: 'Bảng dấu hiệu chia hết', html: `<ul><li>Cho 2: tận cùng 0, 2, 4, 6, 8.</li><li>Cho 5: tận cùng 0, 5.</li><li>Cho 3: tổng chữ số ⋮ 3.</li><li>Cho 9: tổng chữ số ⋮ 9.</li></ul>` },
    { title: 'Số nguyên tố', html: `<p>Nhớ các số nguyên tố nhỏ hơn 50: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47.</p>` },
    { title: 'Phân tích ra thừa số nguyên tố', html: `<p>Chia dần cho 2, 3, 5, 7, … Viết gọn bằng luỹ thừa, sắp thừa số tăng dần. Ví dụ 150 = 2 · 3 · 5<sup>2</sup>.</p>` }
  ],
  summary: 'Nắm vững ước – bội, dấu hiệu chia hết, số nguyên tố và cách phân tích ra thừa số nguyên tố.',
  examples: [
    { title: 'Kết hợp dấu hiệu', problem: 'Tìm các chữ số a, b để số 7a5b chia hết cho cả 2, 5 và 9.', solution: 'Chia hết cho 2 và 5 ⇒ b = 0. Tổng 7 + a + 5 + 0 = 12 + a ⋮ 9 ⇒ a = 6. Số cần tìm: <b>7 650</b>.' },
    { title: 'Phân tích', problem: 'Phân tích 252 ra thừa số nguyên tố.', solution: '252 = 2 · 126 = 2 · 2 · 63 = 2<sup>2</sup> · 3 · 21 = 2<sup>2</sup> · 3 · 3 · 7 = <b>2<sup>2</sup> · 3<sup>2</sup> · 7</b>.' },
    { title: 'Bài toán chia nhóm', problem: 'Lớp 6B có 36 học sinh. Có thể chia lớp thành bao nhiêu nhóm (nhiều hơn 1 nhóm) sao cho mỗi nhóm có số bạn bằng nhau và nhiều hơn 1 bạn?', solution: 'Số nhóm là ước của 36, khác 1 và khác 36: 2; 3; 4; 6; 9; 12; 18 nhóm.' }
  ],
  exercises: [
    { question: 'Tìm Ư(30) rồi cho biết những ước nào là số nguyên tố.', hints: ['Ư(30) có 8 phần tử.', 'Các ước nguyên tố chính là các thừa số trong phân tích 30 = 2 · 3 · 5.'], solution: 'Ư(30) = {1; 2; 3; 5; 6; 10; 15; 30}. Ước nguyên tố: <b>2; 3; 5</b>.' },
    { question: 'Tìm số tự nhiên n nhỏ nhất có hai chữ số sao cho n chia hết cho 3 và 5 nhưng không chia hết cho 2.', hints: ['Chia hết cho 5 mà không chia hết cho 2 ⇒ tận cùng là 5.', 'Thử 15, 25, 35, … với dấu hiệu chia hết cho 3.'], solution: '15 có tổng chữ số 6 ⋮ 3. Vậy <b>n = 15</b>.' },
    { question: 'Tích của hai số nguyên tố bằng 51. Tìm hai số đó.', hints: ['Thử chia 51 cho các số nguyên tố nhỏ.', '51 : 3 = 17.'], solution: '51 = <b>3 · 17</b>.' }
  ],
  quiz: [
    { type: 'short', q: 'Ư(24) có bao nhiêu phần tử?', answer: '8', calc: '[1,2,3,4,6,8,12,24].length', explain: '{1; 2; 3; 4; 6; 8; 12; 24}.' },
    { type: 'mcq', q: 'Số nào chia hết cho cả 3 và 5?', options: ['125', '135', '155', '215'], answer: 1, explain: '135 tận cùng 5 và tổng chữ số 9 ⋮ 3.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hợp số là số có ít nhất ba ước.', answer: true, explain: 'Hợp số lớn hơn 1 và có nhiều hơn hai ước.' },
    { type: 'mcq', q: 'Phân tích 90 ra thừa số nguyên tố được:', options: ['2 · 3<sup>2</sup> · 5', '2 · 45', '9 · 10', '2<sup>2</sup> · 3 · 5'], answer: 0, explain: '90 = 2 · 45 = 2 · 3<sup>2</sup> · 5.' },
    { type: 'short', q: 'Có bao nhiêu số nguyên tố trong khoảng từ 30 đến 50?', answer: '5', calc: '[31,37,41,43,47].length', explain: '31, 37, 41, 43, 47.' },
    { type: 'short', q: 'Tìm chữ số x để 1x2 chia hết cho 9.', answer: '6', calc: '9-1-2', explain: '1 + x + 2 = 3 + x ⋮ 9 ⇒ x = 6.' },
    { type: 'mcq', q: 'Bội của 12 nằm giữa 50 và 70 là:', options: ['56', '60', '64', '66'], answer: 1, calc: '60', explain: '12 · 5 = 60.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tổng 15 + 36 + 42 chia hết cho 3.', answer: true, explain: 'Cả ba số hạng đều chia hết cho 3.' }
  ]
});
