/* Toán 8 – Luyện tập chung (sau Bài 32). Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-8/c8-ltc-1', {
    objectives: [
      'Liệt kê kết quả có thể, kết quả thuận lợi và tính xác suất bằng tỉ số.',
      'Tính xác suất thực nghiệm từ bảng hoặc biểu đồ và so sánh với xác suất lí thuyết.',
      'Vận dụng xác suất để dự đoán trong tình huống thực tế.'
    ],
    intro: 'Buổi luyện tập kết hợp hai cách tiếp cận xác suất: tính bằng lí thuyết (đếm) và ước lượng bằng thực nghiệm.',
    steps: [
      { title: 'Hai loại xác suất', html: `<table class="tbl"><tr><th></th><th>Xác suất (lí thuyết)</th><th>Xác suất thực nghiệm</th></tr><tr><td>Cách tính</td><td>{{Số kết quả thuận lợi|Số kết quả có thể}}</td><td>{{Số lần A xảy ra|Số lần thử}}</td></tr><tr><td>Điều kiện</td><td>Kết quả đồng khả năng</td><td>Thực hiện phép thử nhiều lần</td></tr></table>` },
      { title: 'Đọc biểu đồ thực nghiệm', html: `<p>Gieo một xúc xắc 300 lần, số lần xuất hiện mỗi mặt:</p>`,
        svg: S.bar({ title: 'Số lần xuất hiện mỗi mặt (300 lần gieo)', cats: ['1', '2', '3', '4', '5', '6'], series: [{ name: 'Số lần', values: [48, 52, 55, 47, 50, 48] }], yMax: 60, yStep: 10, yLabel: 'Số lần', width: 520, height: 280 }), caption: 'Mỗi mặt xuất hiện khoảng 50 lần ≈ 300 · {{1|6}}.' },
      { title: 'Đếm cẩn thận', html: `<p>Với phép thử hai bước (tung hai đồng xu, gieo hai xúc xắc…), hãy lập bảng hoặc liệt kê có hệ thống để không bỏ sót kết quả.</p>
        <table class="tbl"><tr><th>Đồng xu 1 \\ Đồng xu 2</th><th>S</th><th>N</th></tr><tr><th>S</th><td>SS</td><td>SN</td></tr><tr><th>N</th><td>NS</td><td>NN</td></tr></table>` },
      { title: 'Dự đoán', html: `<p>Số lần dự kiến = số lần thử × xác suất. Ví dụ: gieo xúc xắc 600 lần, mặt 6 xuất hiện khoảng 600 · {{1|6}} = 100 lần.</p>` }
    ],
    summary: 'Lí thuyết: đếm kết quả thuận lợi / có thể. Thực nghiệm: số lần xảy ra / số lần thử. n lớn thì hai giá trị xấp xỉ nhau.',
    examples: [
      { title: 'Tung hai đồng xu', problem: 'Tung hai đồng xu cân đối. Tính xác suất được một mặt sấp và một mặt ngửa.', solution: '4 kết quả SS, SN, NS, NN; thuận lợi SN, NS ⇒ P = {{2|4}} = {{1|2}}.' },
      { title: 'Từ biểu đồ', problem: 'Với biểu đồ 300 lần gieo ở trên, tính xác suất thực nghiệm của biến cố “Ra mặt có số chấm chẵn”.', solution: 'Mặt chẵn: 52 + 47 + 48 = 147 lần ⇒ {{147|300}} = 0,49 (gần với {{1|2}}).' },
      { title: 'Chọn số', problem: 'Chọn ngẫu nhiên một số từ 1 đến 30. Tính xác suất chọn được số chính phương.', solution: 'Số chính phương: 1, 4, 9, 16, 25 ⇒ P = {{5|30}} = {{1|6}}.' }
    ],
    exercises: [
      { question: 'Hộp có 5 thẻ ghi các chữ cái A, B, C, D, E. Rút 1 thẻ. Tính xác suất rút được nguyên âm.', hints: ['Nguyên âm: A, E.', '{{2|5}}.'], solution: '{{2|5}}.' },
      { question: 'Gieo xúc xắc 600 lần. Dự đoán số lần xuất hiện mặt có số chấm lớn hơn 4.', hints: ['P = {{2|6}} = {{1|3}}.', '600 · {{1|3}}.'], solution: 'Khoảng 200 lần.' },
      { question: 'Một xạ thủ bắn 50 phát, trúng hồng tâm 42 phát. Ước lượng xác suất xạ thủ bắn trúng hồng tâm.', hints: ['{{42|50}}.', 'Đổi ra số thập phân.'], solution: '0,84.' }
    ],
    quiz: [
      { type: 'short', requireSimplest: true, calc: '2 / 4', q: 'Tung hai đồng xu cân đối. Xác suất được một sấp một ngửa là? (Dạng a/b tối giản.)', answer: ['1/2'], answerText: '1/2', explain: '{{2|4}}.' },
      { type: 'short', calc: '(52 + 47 + 48) / 300', q: 'Gieo 300 lần: mặt 2 ra 52 lần, mặt 4 ra 47 lần, mặt 6 ra 48 lần. Xác suất thực nghiệm “Ra mặt chẵn” (số thập phân)?', answer: '0.49', answerText: '0,49', explain: '{{147|300}} = 0,49.' },
      { type: 'short', requireSimplest: true, calc: '5 / 30', q: 'Chọn ngẫu nhiên một số từ 1 đến 30. Xác suất chọn được số chính phương? (Dạng a/b tối giản.)', answer: ['1/6'], answerText: '1/6', explain: '{{5|30}}.' },
      { type: 'short', calc: '600 / 3', q: 'Gieo xúc xắc 600 lần. Dự đoán số lần ra mặt lớn hơn 4.', answer: '200', explain: '600 · {{1|3}}.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Xác suất thực nghiệm luôn bằng đúng xác suất lí thuyết.', answer: false, explain: 'Chỉ xấp xỉ khi số lần thử lớn.' },
      { type: 'short', calc: '42 / 50', q: 'Xạ thủ bắn 50 phát, trúng 42 phát. Ước lượng xác suất trúng (số thập phân).', answer: '0.84', answerText: '0,84', explain: '{{42|50}}.' },
      { type: 'mcq', q: 'Hộp 5 thẻ A, B, C, D, E. Xác suất rút được nguyên âm là:', options: ['{{1|5}}', '{{2|5}}', '{{3|5}}', '{{1|2}}'], answer: 1, explain: 'A và E.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tung hai đồng xu có 4 kết quả có thể đồng khả năng.', answer: true, explain: 'SS, SN, NS, NN.' }
    ]
  });
})();
