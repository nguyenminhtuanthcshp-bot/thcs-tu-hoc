/* Toán 6 – Chương VIII. Luyện tập chung (sau Bài 37). Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('toan-6/c8-ltc-2', {
  objectives: [
    'Củng cố khái niệm góc, đỉnh, cạnh, góc bẹt, điểm nằm trong góc.',
    'Đo và so sánh góc; phân loại góc nhọn, vuông, tù, bẹt.',
    'Vận dụng số đo góc vào tình huống thực tế (đồng hồ, dụng cụ).'
  ],
  intro: 'Luyện tập Bài 36 và Bài 37. Khi đo góc, chú ý đọc đúng dãy số bắt đầu từ vạch 0.',
  steps: [
    { title: 'Góc và kí hiệu', html: `<p>Góc gồm hai tia chung gốc; ∠xOy có đỉnh O (viết giữa). Góc bẹt: hai cạnh là hai tia đối nhau.</p>` },
    { title: 'Đo góc', html: `<p>Tâm thước trùng đỉnh, vạch 0 trên một cạnh, đọc số ở cạnh kia.</p>`, svg: S.protractor({ deg: 130, names: ['y', 'x'] }), caption: '∠xOy = 130° (góc tù).' },
    { title: 'Phân loại', html: `<p>0° &lt; nhọn &lt; 90° = vuông &lt; tù &lt; 180° = bẹt.</p>` },
    { title: 'Góc trên mặt đồng hồ', html: `<p>Mỗi khoảng giữa hai số liên tiếp trên mặt đồng hồ ứng với 30°. Vào giờ đúng h (h ≤ 6), góc giữa hai kim là 30° · h.</p>` }
  ],
  summary: 'Góc, đo góc bằng thước đo góc, so sánh và phân loại góc theo số đo.',
  examples: [
    { title: 'Đếm góc', problem: 'Có 6 tia chung gốc, không có hai tia nào trùng nhau. Có bao nhiêu góc?', solution: '6 · 5 : 2 = <b>15 góc</b>.' },
    { title: 'Góc đồng hồ', problem: 'Lúc 9 giờ, góc (nhỏ hơn 180°) giữa hai kim là bao nhiêu độ?', solution: 'Từ 9 đến 12 có 3 khoảng: 3 · 30° = <b>90°</b>.' },
    { title: 'Phân loại', problem: 'Góc tạo bởi hai cạnh của ê ke là góc gì? Của một chiếc quạt giấy mở hết cỡ nằm trên một đường thẳng là góc gì?', solution: 'Ê ke: <b>góc vuông</b>. Quạt mở thành nửa hình tròn: <b>góc bẹt</b>.' }
  ],
  exercises: [
    { question: 'Tia Oz nằm trong ∠xOy = 120° sao cho ∠xOz = ∠zOy. Tính ∠xOz.', hints: ['Hai góc bằng nhau và có tổng 120°.', '120° : 2.'], solution: '<b>60°</b>.' },
    { question: 'Lúc 10 giờ, góc (nhỏ hơn 180°) giữa hai kim đồng hồ bằng bao nhiêu? Góc gì?', hints: ['Từ 10 đến 12 có 2 khoảng.', 'Mỗi khoảng 30°.'], solution: '<b>60°</b>: góc nhọn.' },
    { question: 'Cho ∠A = 45°, ∠B = 2 · ∠A, ∠C = 3 · ∠A. Phân loại ba góc.', hints: ['∠B = 90°, ∠C = 135°.', 'So với 90°.'], solution: '∠A nhọn, ∠B <b>vuông</b>, ∠C <b>tù</b>.' }
  ],
  quiz: [
    { type: 'short', q: 'Có 4 tia chung gốc (không trùng nhau). Có bao nhiêu góc?', answer: '6', calc: '4*3/2', explain: '4 · 3 : 2 = 6.' },
    { type: 'mcq', q: 'Góc 90° là góc:', options: ['Nhọn', 'Vuông', 'Tù', 'Bẹt'], answer: 1, explain: 'Góc vuông.' },
    { type: 'short', q: 'Lúc 1 giờ, góc giữa hai kim đồng hồ bằng bao nhiêu độ?', answer: '30', unit: '°', calc: '1*30', explain: '1 · 30° = 30°.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Góc 180° là góc tù.', answer: false, explain: 'Góc 180° là góc bẹt.' },
    { type: 'short', q: 'Tia Oz nằm trong ∠xOy = 100°, ∠xOz = 35°. Tính ∠zOy (độ).', answer: '65', unit: '°', calc: '100-35', explain: '100° − 35° = 65°.' },
    { type: 'mcq', q: 'Góc nào lớn nhất?', options: ['89°', 'góc vuông', '91°', 'góc nhọn bất kì'], answer: 2, calc: '91', explain: '91° lớn nhất.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hai góc có số đo bằng nhau thì bằng nhau.', answer: true, explain: 'So sánh góc qua số đo.' },
    { type: 'short', q: 'Lúc 6 giờ, góc giữa hai kim đồng hồ bằng bao nhiêu độ?', answer: '180', unit: '°', calc: '6*30', explain: 'Góc bẹt 180°.' }
  ]
});
})();
