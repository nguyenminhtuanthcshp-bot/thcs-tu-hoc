/* Tin học 6 – Bài 16. Các cấu trúc điều khiển. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-6/bai-16', {
  objectives: [
    'Nêu được ba cấu trúc điều khiển cơ bản: tuần tự, rẽ nhánh, lặp.',
    'Mô tả được thuật toán có cấu trúc rẽ nhánh và cấu trúc lặp bằng ngôn ngữ tự nhiên và sơ đồ khối.',
    'Thực hiện (chạy tay) được thuật toán đơn giản có rẽ nhánh hoặc lặp.'
  ],
  intro: '“Nếu trời mưa thì mang áo mưa”, “Lặp lại 10 lần: chống đẩy” – trong cuộc sống ta thường làm theo điều kiện hoặc lặp lại một việc. Thuật toán cũng được xây dựng từ ba kiểu sắp xếp các bước như vậy, gọi là <b>cấu trúc điều khiển</b>.',
  steps: [
    { title: 'Cấu trúc tuần tự', html: `<p><b>Cấu trúc tuần tự</b>: các bước được thực hiện lần lượt, bước này xong mới đến bước sau. Ví dụ: Nhập a, b → tính tổng → ghi ra tổng.</p>` },
    { title: 'Cấu trúc rẽ nhánh', html: `<p><b>Cấu trúc rẽ nhánh</b>: tuỳ theo một <b>điều kiện</b> đúng hay sai mà thực hiện các bước khác nhau.</p>
      <ul><li>Dạng thiếu: <b>Nếu</b> điều kiện đúng <b>thì</b> làm việc A.</li><li>Dạng đủ: <b>Nếu</b> điều kiện đúng <b>thì</b> làm A, <b>nếu không thì</b> làm B.</li></ul>`,
      svg: S.flowchart({ title: 'Rẽ nhánh dạng đủ: tìm số lớn hơn', steps: [{ t: 'start', s: 'Bắt đầu' }, { t: 'io', s: 'Nhập hai số a, b' }, { t: 'if', s: 'a > b ?', yes: 'Ghi ra a', no: 'Ghi ra b' }, { t: 'end', s: 'Kết thúc' }] }), caption: 'Sơ đồ khối của cấu trúc rẽ nhánh dạng đủ.' },
    { title: 'Cấu trúc lặp', html: `<p><b>Cấu trúc lặp</b>: một hoặc một số bước được thực hiện lặp lại nhiều lần.</p>
      <ul><li>Lặp với <b>số lần biết trước</b>: “Lặp lại 4 lần: đi 100 bước, quay phải 90°”.</li><li>Lặp với <b>điều kiện</b>: “Lặp lại cho đến khi đầy cốc: rót nước”.</li></ul>`,
      svg: S.flowchart({ title: 'Cấu trúc lặp: vẽ hình vuông', steps: [{ t: 'start', s: 'Bắt đầu' }, { t: 'loop', s: 'Chưa đủ 4 lần?', body: ['Đi thẳng 100 bước', 'Quay phải 90°'] }, { t: 'end', s: 'Kết thúc' }] }), caption: 'Lặp lại 4 lần “đi thẳng, quay phải 90°” để vẽ hình vuông.' },
    { title: 'Kết hợp các cấu trúc', html: `<p>Mọi thuật toán đều có thể xây dựng từ ba cấu trúc: tuần tự, rẽ nhánh, lặp. Trong một thuật toán, các cấu trúc có thể lồng nhau.</p>
      <div class="box key">Tuần tự: lần lượt. Rẽ nhánh: “nếu… thì… (nếu không thì…)”. Lặp: “lặp lại…”.</div>` }
  ],
  summary: 'Ba cấu trúc điều khiển: tuần tự (thực hiện lần lượt), rẽ nhánh (nếu… thì…, nếu không thì…), lặp (lặp với số lần biết trước hoặc lặp có điều kiện). Mọi thuật toán đều xây dựng được từ ba cấu trúc này.',
  examples: [
    { title: 'Nhận biết cấu trúc', problem: '“Nếu được điểm 10 thì em được khen thưởng.” Đây là cấu trúc gì?', solution: 'Cấu trúc rẽ nhánh dạng thiếu.' },
    { title: 'Chạy tay rẽ nhánh', problem: 'Thực hiện thuật toán tìm số lớn hơn (bước 2) với a = 12, b = 19. Kết quả ghi ra?', solution: '12 > 19 sai nên ghi ra b = 19.' },
    { title: 'Chạy tay vòng lặp', problem: 'Bắt đầu S = 0. Lặp lại 5 lần: S ← S + 3. Cuối cùng S bằng bao nhiêu?', solution: 'Sau mỗi lần S tăng 3: 3, 6, 9, 12, 15. S = 15.' }
  ],
  exercises: [
    { question: 'Viết một câu mô tả hoạt động hằng ngày có cấu trúc rẽ nhánh dạng đủ.', hints: ['Dùng mẫu “Nếu… thì…, nếu không thì…”.', 'Ví dụ về thời tiết, giờ giấc.'], solution: 'Ví dụ: Nếu hôm nay là ngày nghỉ thì em dậy lúc 7 giờ, nếu không thì em dậy lúc 6 giờ.' },
    { question: 'Mô tả thuật toán kiểm tra một số n là chẵn hay lẻ, có dùng cấu trúc rẽ nhánh.', hints: ['Số chẵn chia hết cho 2.', 'Nếu n chia 2 dư 0 thì… nếu không thì…'], solution: 'Nhập n. Nếu n chia cho 2 dư 0 thì ghi “chẵn”, nếu không thì ghi “lẻ”. Kết thúc.' },
    { question: 'Bắt đầu T = 1. Lặp lại 4 lần: T ← T × 2. Giá trị cuối của T là bao nhiêu?', hints: ['Lần lượt: 2, 4, …', 'Nhân 2 bốn lần.'], solution: 'T lần lượt bằng 2, 4, 8, 16. T = 16.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Ba cấu trúc điều khiển cơ bản là tuần tự, rẽ nhánh và lặp.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: '“Nếu trời lạnh thì mặc áo ấm, nếu không thì mặc áo cộc.” là cấu trúc:', options: ['tuần tự', 'rẽ nhánh dạng đủ', 'lặp', 'rẽ nhánh dạng thiếu'], answer: 1, explain: 'Có cả nhánh “nếu không thì”.' },
    { type: 'mcq', q: '“Lặp lại 10 lần: nhảy dây” là cấu trúc:', options: ['lặp với số lần biết trước', 'lặp có điều kiện', 'tuần tự', 'rẽ nhánh'], answer: 0, explain: 'Số lần lặp là 10, biết trước.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Trong cấu trúc rẽ nhánh dạng thiếu, khi điều kiện sai thì vẫn phải thực hiện việc A.', answer: false, explain: 'Điều kiện sai thì bỏ qua việc A.' },
    { type: 'short', q: 'S = 0. Lặp lại 6 lần: S ← S + 5. Giá trị cuối của S?', answer: '30', calc: '6*5', explain: '6 × 5 = 30.' },
    { type: 'short', q: 'Nhập a = 15, b = 9. Nếu a > b thì ghi a − b, nếu không thì ghi b − a. Kết quả ghi ra?', answer: '6', calc: '15-9', explain: '15 > 9 đúng nên ghi 15 − 9 = 6.' },
    { type: 'mcq', q: 'Để vẽ hình tam giác đều, có thể lặp lại 3 lần: đi thẳng rồi quay một góc:', options: ['60°', '90°', '120°', '180°'], answer: 2, explain: 'Góc quay = 360° : 3 = 120°.', calc: '360/3' },
    { type: 'short', q: 'T = 1. Lặp lại 3 lần: T ← T × 3. Giá trị cuối của T?', answer: '27', calc: '3*3*3', explain: '3, 9, 27.' }
  ]
});
})();
