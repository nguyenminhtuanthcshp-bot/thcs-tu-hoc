/* Toán 6 – Bài tập cuối chương VIII. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, C = S.C;
var fig = S.draw({ w: 420, h: 180, items: [{ line: [40, 140, 380, 140], ext: 10 }, { pt: [80, 140, 'A', 0, 24] }, { pt: [200, 140, 'O', 0, 24], color: C.red }, { pt: [320, 140, 'B', 0, 24] }, { ray: [200, 140, 290, 40], ext: 20, color: C.blue }, { text: [312, 26, 'z'], bold: true, color: C.blue }, { arc: [200, 140, 320, 140, 290, 40], r: 30, label: '48°' }], aria: 'Đường thẳng AB, điểm O nằm giữa, tia Oz' });
THCS.registerLesson('toan-6/c8-on-tap', {
  objectives: [
    'Hệ thống hoá kiến thức chương VIII: điểm, đường thẳng, tia, đoạn thẳng, trung điểm, góc, số đo góc.',
    'Vận dụng tính độ dài đoạn thẳng, số đo góc trong bài tập tổng hợp.',
    'Tự đánh giá mức độ nắm vững chương VIII.'
  ],
  intro: 'Ôn tập chương VIII – Những hình hình học cơ bản. Vẽ hình cẩn thận là một nửa lời giải!',
  steps: [
    { title: 'Điểm, đường thẳng, tia', html: `<p>∈, ∉; ba điểm thẳng hàng; điểm nằm giữa; tia gốc O; hai tia đối nhau.</p>` },
    { title: 'Đoạn thẳng và trung điểm', html: `<p>M nằm giữa A, B ⇒ AM + MB = AB. M là trung điểm ⇒ MA = MB = AB : 2.</p>` },
    { title: 'Góc và số đo góc', html: `<p>Góc gồm hai tia chung gốc; góc bẹt 180°; nhọn, vuông, tù.</p>`, svg: fig, caption: 'O nằm giữa A và B nên OA, OB là hai tia đối nhau; ∠BOz = 48°.' },
    { title: 'Công thức đếm', html: `<p>n điểm (không có 3 điểm thẳng hàng) → {{n(n − 1)|2}} đường thẳng/đoạn thẳng; n tia chung gốc → {{n(n − 1)|2}} góc.</p>` }
  ],
  summary: 'Chương VIII: điểm, đường thẳng, tia, đoạn thẳng, độ dài, trung điểm, góc, số đo góc và phân loại góc.',
  examples: [
    { title: 'Đoạn thẳng', problem: 'Trên tia Ox lấy A, B với OA = 5 cm, OB = 9 cm. Gọi M là trung điểm OA. Tính MB.', solution: 'OM = 2,5 cm; M nằm giữa O và B nên MB = OB − OM = 9 − 2,5 = <b>6,5 cm</b>.' },
    { title: 'Góc bẹt', problem: 'Ở hình bước 3, ∠BOz = 48°. Tính ∠AOz, biết ∠AOz + ∠zOB = ∠AOB (góc bẹt).', solution: '∠AOz = 180° − 48° = <b>132°</b> (góc tù).' },
    { title: 'Thực tế', problem: 'Một con đường thẳng có 5 cột điện, hai cột liên tiếp cách nhau 40 m. Khoảng cách từ cột đầu đến cột cuối là bao nhiêu?', solution: '5 cột tạo 4 khoảng: 4 · 40 = <b>160 m</b>.' }
  ],
  exercises: [
    { question: 'AB = 10 cm. Lấy C trên đoạn AB sao cho AC = 6 cm. Gọi I là trung điểm CB. Tính AI.', hints: ['CB = 4 cm, CI = 2 cm.', 'AI = AC + CI.'], solution: 'AI = <b>8 cm</b>.' },
    { question: 'Lúc 8 giờ, góc (nhỏ hơn 180°) giữa hai kim đồng hồ bằng bao nhiêu?', hints: ['Từ 8 đến 12 có 4 khoảng.', 'Mỗi khoảng 30°.'], solution: '<b>120°</b>.' },
    { question: 'Có bao nhiêu góc tạo bởi 3 tia chung gốc Ox, Oy, Oz, biết Ox, Oy đối nhau? Góc nào là góc bẹt?', hints: ['3 tia tạo 3 góc.', 'Hai tia đối nhau tạo góc bẹt.'], solution: '3 góc: ∠xOy (<b>bẹt</b>), ∠xOz, ∠yOz.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Qua ba điểm không thẳng hàng vẽ được đúng 3 đường thẳng đi qua hai trong ba điểm.', answer: true, explain: 'AB, BC, CA.' },
    { type: 'short', q: 'M nằm giữa A và B, AM = 4 cm, AB = 11 cm. Tính MB (cm).', answer: '7', unit: 'cm', calc: '11-4', explain: '11 − 4 = 7.' },
    { type: 'short', q: 'I là trung điểm CD, CD = 9 cm. Tính CI (cm).', answer: '4,5', unit: 'cm', calc: '9/2', explain: '9 : 2 = 4,5.' },
    { type: 'mcq', q: 'Góc 179° là góc:', options: ['Nhọn', 'Vuông', 'Tù', 'Bẹt'], answer: 2, explain: '90° &lt; 179° &lt; 180°.' },
    { type: 'short', q: 'Cho 10 điểm, không có ba điểm nào thẳng hàng. Có bao nhiêu đoạn thẳng nối hai điểm?', answer: '45', calc: '10*9/2', explain: '10 · 9 : 2 = 45.' },
    { type: 'short', q: 'Hai tia Ox, Oy đối nhau, tia Oz tạo ∠xOz = 70°. Tính ∠yOz (độ).', answer: '110', unit: '°', calc: '180-70', explain: '180° − 70° = 110°.' },
    { type: 'mcq', q: 'Tia AB và tia AC trùng nhau khi:', options: ['A nằm giữa B và C', 'B, C nằm cùng phía đối với A trên một đường thẳng qua A', 'AB = AC', 'B trùng C'], answer: 1, explain: 'Cùng gốc A, cùng hướng.' },
    { type: 'short', q: 'Một hàng rào thẳng dài 60 m, cứ 3 m đóng một cọc, hai đầu đều có cọc. Cần bao nhiêu cọc?', answer: '21', calc: '60/3+1', explain: '60 : 3 = 20 khoảng ⇒ 21 cọc.' }
  ]
});
})();
