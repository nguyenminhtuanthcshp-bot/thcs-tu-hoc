/* Toán 8 – Bài tập cuối chương VIII. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-8/c8-on-tap', {
    objectives: [
      'Hệ thống hoá các khái niệm: kết quả có thể, kết quả thuận lợi, xác suất, xác suất thực nghiệm.',
      'Tính xác suất của biến cố bằng tỉ số trong các tình huống đa dạng.',
      'Vận dụng xác suất thực nghiệm để ước lượng, dự đoán trong thực tế.'
    ],
    intro: 'Tổng kết chương “Mở đầu về tính xác suất của biến cố”.',
    steps: [
      { title: 'Sơ đồ chương VIII', html: `<p>Ba khái niệm nối tiếp nhau:</p>`, svg: S.mindmap({ center: 'Xác suất', branches: [
        { title: 'Phép thử', items: ['Kết quả có thể', 'Đồng khả năng'] },
        { title: 'Biến cố', items: ['Kết quả thuận lợi', 'Chắc chắn / không thể'] },
        { title: 'Tính P(A)', items: ['P = k/n', '0 ≤ P ≤ 1'] },
        { title: 'Thực nghiệm', items: ['Tỉ số số lần', 'n lớn ⇒ ≈ P', 'Dự đoán n · p'] } ] }), caption: 'Sơ đồ tư duy chương VIII.' },
      { title: 'Vòng quay không đều', html: `<p>Vòng quay có các phần không bằng nhau: phần xanh chiếm {{1|2}} hình tròn, phần đỏ {{1|4}}, phần vàng {{1|4}}. Các kết quả “xanh, đỏ, vàng” không đồng khả năng; nhưng nếu chia thành 4 phần bằng nhau (2 xanh, 1 đỏ, 1 vàng) thì P(xanh) = {{2|4}} = {{1|2}}.</p>`,
        svg: S.sectorChart({ title: 'Vòng quay ba màu', parts: [{ label: 'Xanh', value: 50, color: C.blue }, { label: 'Đỏ', value: 25, color: C.red }, { label: 'Vàng', value: 25, color: '#eab308' }], unit: '%' }), caption: 'Xác suất tỉ lệ với diện tích phần hình quạt.' },
      { title: 'Các lỗi thường gặp', html: `<ul><li>Áp dụng công thức tỉ số khi các kết quả không đồng khả năng.</li><li>Đếm thiếu kết quả (SN và NS là hai kết quả khác nhau).</li><li>Quên rút gọn phân số.</li><li>Kết luận vội từ vài lần thử.</li></ul>` },
      { title: 'Ứng dụng', html: `<p>Xác suất được dùng trong dự báo thời tiết, bảo hiểm, kiểm tra chất lượng sản phẩm, y học… Ví dụ: “khả năng mưa 70%” có nghĩa là trong những ngày có điều kiện thời tiết tương tự, khoảng 70% số ngày có mưa.</p>` }
    ],
    summary: 'P(A) = k/n khi đồng khả năng; xác suất thực nghiệm = số lần xảy ra / số lần thử, xấp xỉ P(A) khi số lần thử lớn.',
    examples: [
      { title: 'Chọn số', problem: 'Chọn ngẫu nhiên một số trong các số 10, 11, …, 29. Tính xác suất chọn được số chia hết cho 4.', solution: 'Có 20 số; chia hết cho 4: 12, 16, 20, 24, 28 ⇒ P = {{5|20}} = {{1|4}}.' },
      { title: 'Hai xúc xắc', problem: 'Gieo hai xúc xắc cân đối. Tính xác suất tổng số chấm bằng 7.', solution: 'Có 6 · 6 = 36 kết quả. Tổng bằng 7: (1;6), (2;5), (3;4), (4;3), (5;2), (6;1) ⇒ P = {{6|36}} = {{1|6}}.' },
      { title: 'Dự đoán', problem: 'Khảo sát 400 học sinh thấy 140 bạn đi học bằng xe đạp. Trường có 1200 học sinh, dự đoán khoảng bao nhiêu bạn đi xe đạp?', solution: 'Xác suất thực nghiệm {{140|400}} = 0,35 ⇒ 1200 · 0,35 = 420 bạn.' }
    ],
    exercises: [
      { question: 'Một hộp có 6 bi đỏ, 4 bi xanh, 10 bi trắng. Lấy 1 viên. Tính xác suất lấy được bi không phải màu trắng.', hints: ['Không trắng: 6 + 4 = 10 viên.', 'Tổng 20 viên.'], solution: '{{1|2}}.' },
      { question: 'Gieo hai xúc xắc. Tính xác suất hai mặt có cùng số chấm.', hints: ['Các kết quả (1;1), (2;2), …, (6;6).', '{{6|36}}.'], solution: '{{1|6}}.' },
      { question: 'Tỉ lệ nảy mầm của hạt giống khoảng 85%. Cần gieo ít nhất bao nhiêu hạt để dự kiến có 170 cây con?', hints: ['n · 0,85 = 170.', 'n = 170 : 0,85.'], solution: '200 hạt.' }
    ],
    quiz: [
      { type: 'short', requireSimplest: true, calc: '5 / 20', q: 'Chọn ngẫu nhiên một số từ 10 đến 29. Xác suất số đó chia hết cho 4? (Dạng a/b tối giản.)', answer: ['1/4'], answerText: '1/4', explain: '{{5|20}}.' },
      { type: 'short', requireSimplest: true, calc: '6 / 36', q: 'Gieo hai xúc xắc cân đối. Xác suất tổng số chấm bằng 7? (Dạng a/b tối giản.)', answer: ['1/6'], answerText: '1/6', explain: '{{6|36}}.' },
      { type: 'short', calc: '1200 * 140 / 400', q: '140/400 học sinh được khảo sát đi xe đạp. Trường có 1200 học sinh; dự đoán số bạn đi xe đạp?', answer: '420', explain: '1200 · 0,35.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Với vòng quay có phần xanh chiếm nửa hình tròn, xác suất mũi tên chỉ vào phần xanh là {{1|3}} vì có 3 màu.', answer: false, explain: 'Các màu không đồng khả năng; P(xanh) = {{1|2}}.' },
      { type: 'short', requireSimplest: true, calc: '10 / 20', q: 'Hộp 6 đỏ, 4 xanh, 10 trắng. Xác suất lấy được bi không trắng? (Dạng a/b tối giản.)', answer: ['1/2'], answerText: '1/2', explain: '{{10|20}}.' },
      { type: 'short', calc: '170 / 0.85', q: 'Tỉ lệ nảy mầm 85%. Cần gieo bao nhiêu hạt để dự kiến có 170 cây con?', unit: 'hạt', answer: '200', explain: '170 : 0,85.' },
      { type: 'mcq', q: 'Biến cố nào là biến cố không thể khi gieo một xúc xắc?', options: ['Số chấm là 6', 'Số chấm lớn hơn 6', 'Số chấm là số lẻ', 'Số chấm nhỏ hơn 7'], answer: 1, explain: 'Không có mặt nào lớn hơn 6.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khi gieo hai xúc xắc, (2; 5) và (5; 2) là hai kết quả khác nhau.', answer: true, explain: 'Hai xúc xắc phân biệt.' }
    ]
  });
})();
