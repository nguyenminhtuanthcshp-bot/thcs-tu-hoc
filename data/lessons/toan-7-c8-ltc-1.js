/* Toán 7 – Chương VIII. Luyện tập chung. Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('toan-7/c8-ltc-1', {
  objectives: [
    'Củng cố phân loại biến cố chắc chắn, không thể, ngẫu nhiên.',
    'Tính xác suất của biến cố trong trường hợp các kết quả đồng khả năng.',
    'Vận dụng xác suất để so sánh khả năng và đưa ra lựa chọn hợp lí.'
  ],
  intro: 'Luyện tập Bài 29 và Bài 30. Quy trình ba bước: liệt kê tất cả kết quả – đếm kết quả thuận lợi – lập phân số và rút gọn.',
  steps: [
    { title: 'Bước 1: Liệt kê kết quả', html: `<p>Xác định rõ hoạt động và tập hợp các kết quả có thể. Kiểm tra các kết quả có đồng khả năng không (xúc xắc cân đối, các bóng giống nhau…).</p>` },
    { title: 'Bước 2: Đếm kết quả thuận lợi', html: `<p>Đọc kĩ biến cố: “lớn hơn” khác “không nhỏ hơn”; “số nguyên tố” không gồm 1; “chia hết cho 2 hoặc 3”…</p>` },
    { title: 'Bước 3: Lập phân số', html: `<p>Xác suất = {{thuận lợi|tổng}}, rút gọn về phân số tối giản. Kết quả luôn nằm trong đoạn từ 0 đến 1 – nếu lớn hơn 1 là đã đếm sai.</p>` },
    { title: 'So sánh và lựa chọn', html: `<p>Hai trò chơi: A thắng khi gieo xúc xắc được mặt 6 (xác suất {{1|6}}); B thắng khi rút thẻ từ 1 – 10 được số chia hết cho 5 (xác suất {{2|10}} = {{1|5}}). Vì {{1|5}} &gt; {{1|6}} nên nên chọn trò B.</p>` }
  ],
  summary: 'Liệt kê – đếm thuận lợi – lập phân số tối giản. Xác suất từ 0 đến 1; so sánh xác suất để chọn phương án có khả năng cao hơn.',
  examples: [
    { title: 'Chia hết cho 2 hoặc 3', problem: 'Rút một thẻ từ 12 thẻ số 1 – 12. Tính xác suất số trên thẻ chia hết cho 2 hoặc 3.', solution: '2, 3, 4, 6, 8, 9, 10, 12: 8 kết quả ⇒ {{8|12}} = {{2|3}}.' },
    { title: 'Chữ cái', problem: 'Chọn ngẫu nhiên một chữ cái trong từ “TOAN HOC”. Tính xác suất chọn được chữ O.', solution: '7 chữ cái T, O, A, N, H, O, C; có 2 chữ O ⇒ {{2|7}}.' },
    { title: 'Chọn trò chơi', problem: 'Trò A: gieo xúc xắc được số chấm lớn hơn 4. Trò B: tung đồng xu được mặt ngửa. Trò nào dễ thắng hơn?', solution: 'A: {{2|6}} = {{1|3}}; B: {{1|2}} ⇒ trò B.' }
  ],
  exercises: [
    { question: 'Hộp có 5 thẻ xanh, 3 thẻ đỏ, 2 thẻ vàng. Tính xác suất rút được thẻ không phải màu xanh.', hints: ['Thuận lợi: 3 + 2.', 'Tổng 10.'], solution: '{{5|10}} = {{1|2}}.' },
    { question: 'Chọn ngẫu nhiên một số có hai chữ số. Tính xác suất số đó chia hết cho 10.', hints: ['Có 90 số (10 – 99).', '10, 20, …, 90: 9 số.'], solution: '{{9|90}} = {{1|10}}.' },
    { question: 'Gieo xúc xắc. Biến cố nào có xác suất lớn hơn: “số chấm là ước của 6” hay “số chấm là bội của 2”?', hints: ['Ước của 6 trong 1 – 6: 1, 2, 3, 6.', 'Bội của 2: 2, 4, 6.'], solution: '{{4|6}} &gt; {{3|6}}: “ước của 6” lớn hơn.' }
  ],
  quiz: [
    { type: 'short', calc: '8 / 12', requireSimplest: true, q: 'Rút một thẻ từ 12 thẻ số 1 – 12. Xác suất số chia hết cho 2 hoặc 3 (phân số tối giản)?', answer: '2/3', explain: '8 kết quả thuận lợi.' },
    { type: 'short', calc: '2 / 7', requireSimplest: true, q: 'Chọn ngẫu nhiên một chữ cái trong “TOAN HOC” (7 chữ cái). Xác suất được chữ O?', answer: '2/7', explain: '2 chữ O.' },
    { type: 'short', calc: '5 / 10', requireSimplest: true, q: 'Hộp có 5 thẻ xanh, 3 đỏ, 2 vàng. Xác suất rút được thẻ không xanh (phân số tối giản)?', answer: '1/2', explain: '{{5|10}}.' },
    { type: 'short', calc: '9 / 90', requireSimplest: true, q: 'Chọn ngẫu nhiên một số có hai chữ số. Xác suất số đó chia hết cho 10 (phân số tối giản)?', answer: '1/10', explain: '{{9|90}}.' },
    { type: 'short', calc: 'divisors(6).length / 6', requireSimplest: true, q: 'Gieo xúc xắc. Xác suất “số chấm là ước của 6” (phân số tối giản)?', answer: '2/3', explain: '1, 2, 3, 6 ⇒ {{4|6}}.' },
    { type: 'mcq', q: 'Số nào KHÔNG thể là xác suất của một biến cố?', options: ['0', '{{3|4}}', '1', '{{5|4}}'], answer: 3, explain: 'Xác suất không vượt quá 1.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Gieo xúc xắc, “số chấm lớn hơn 4” có xác suất {{1|3}}.', answer: true, explain: '5, 6 ⇒ {{2|6}}.' },
    { type: 'mcq', q: 'Trò A thắng với xác suất {{1|6}}, trò B với xác suất {{1|5}}. Nên chọn:', options: ['A', 'B', 'như nhau', 'không so sánh được'], answer: 1, explain: '{{1|5}} &gt; {{1|6}}.' }
  ]
});
