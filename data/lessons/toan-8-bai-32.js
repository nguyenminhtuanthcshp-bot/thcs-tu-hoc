/* Toán 8 – Bài 32. Mối liên hệ giữa xác suất thực nghiệm với xác suất và ứng dụng. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-8/bai-32', {
    objectives: [
      'Nhận biết được mối liên hệ giữa xác suất thực nghiệm của một biến cố với xác suất của biến cố đó khi số lần thử đủ lớn.',
      'Tính được xác suất thực nghiệm của một biến cố từ bảng số liệu.',
      'Sử dụng được xác suất thực nghiệm để dự đoán, ước lượng số lần xảy ra của biến cố hoặc số lượng trong thực tế.'
    ],
    intro: 'Tung đồng xu 10 lần có thể được 7 lần ngửa, nhưng tung 10 000 lần thì tỉ lệ ngửa sẽ rất gần {{1|2}}. Đó là cầu nối giữa thực nghiệm và lí thuyết.',
    steps: [
      { title: 'Xác suất thực nghiệm', html: `<p>Thực hiện một phép thử n lần, biến cố A xảy ra k lần. <b>Xác suất thực nghiệm</b> của A là tỉ số {{k|n}}.</p>
        <p>Ví dụ: gieo xúc xắc 60 lần, mặt 6 xuất hiện 12 lần ⇒ xác suất thực nghiệm {{12|60}} = {{1|5}}.</p>` },
      { title: 'Khi số lần thử tăng lên', html: `<div class="box key">Khi số lần thử n đủ lớn, xác suất thực nghiệm của biến cố A <b>xấp xỉ</b> xác suất của A.</div>
        <p>Bảng dưới đây ghi tỉ lệ số lần mặt ngửa khi tung một đồng xu cân đối:</p>`,
        svg: S.lineChart({ title: 'Tỉ lệ mặt ngửa (%) theo số lần tung', cats: ['10', '50', '100', '500', '1000', '5000'], values: [70, 58, 46, 52, 49.2, 50.1], yMin: 30, yMax: 80, yStep: 10, yLabel: '%' }), caption: 'Tỉ lệ dần ổn định quanh 50%.' },
      { title: 'Ước lượng xác suất', html: `<p>Với những phép thử mà các kết quả không đồng khả năng (đinh bấm rơi ngửa hay úp, hạt giống nảy mầm…), ta dùng xác suất thực nghiệm với số lần thử lớn để <b>ước lượng</b> xác suất.</p>` },
      { title: 'Dự đoán số lần xảy ra', html: `<p>Nếu xác suất của A là p thì trong n lần thử, A xảy ra khoảng <b>n · p</b> lần.</p>
        <p>Ví dụ: tỉ lệ nảy mầm của một loại hạt khoảng 0,9. Gieo 500 hạt thì dự đoán có khoảng 450 hạt nảy mầm.</p>` }
    ],
    summary: 'Xác suất thực nghiệm = k/n. Khi n lớn, xác suất thực nghiệm ≈ xác suất. Dự đoán: số lần xảy ra ≈ n · p.',
    examples: [
      { title: 'Tính xác suất thực nghiệm', problem: 'Một cửa hàng ghi nhận trong 200 khách có 46 khách mua kèm nước uống. Tính xác suất thực nghiệm của biến cố “Khách mua kèm nước uống”.', solution: '{{46|200}} = {{23|100}} = 0,23.' },
      { title: 'Dự đoán', problem: 'Với kết quả trên, nếu tuần tới có 1500 khách, dự đoán có khoảng bao nhiêu khách mua kèm nước uống?', solution: '1500 · 0,23 = 345 khách.' },
      { title: 'Ước lượng số lượng', problem: 'Trong một hộp có nhiều bi xanh và đỏ. An lấy ra 1 viên, ghi màu rồi trả lại, làm 100 lần thì được 30 lần bi đỏ. Biết hộp có 50 viên bi, ước lượng số bi đỏ.', solution: 'Xác suất thực nghiệm lấy bi đỏ: {{30|100}} = 0,3. Số bi đỏ ≈ 50 · 0,3 = 15 viên.' }
    ],
    exercises: [
      { question: 'Gieo xúc xắc 120 lần, mặt 1 chấm xuất hiện 18 lần. Tính xác suất thực nghiệm của biến cố “Ra mặt 1 chấm” và so sánh với xác suất lí thuyết.', hints: ['{{18|120}} = 0,15.', 'Xác suất lí thuyết {{1|6}} ≈ 0,167.'], solution: '0,15; khá gần {{1|6}} ≈ 0,167.' },
      { question: 'Tỉ lệ sản phẩm lỗi của một máy khoảng 2%. Trong 3000 sản phẩm, dự đoán có khoảng bao nhiêu sản phẩm lỗi?', hints: ['n · p.', '3000 · 0,02.'], solution: 'Khoảng 60 sản phẩm.' },
      { question: 'Tung đinh bấm 400 lần, có 240 lần mũi đinh chĩa lên. Ước lượng xác suất mũi đinh chĩa lên.', hints: ['{{240|400}}.', 'Rút gọn thành số thập phân.'], solution: '0,6.' }
    ],
    quiz: [
      { type: 'short', requireSimplest: true, calc: '12 / 60', q: 'Gieo xúc xắc 60 lần, mặt 6 xuất hiện 12 lần. Xác suất thực nghiệm của “Ra mặt 6” là? (Dạng a/b tối giản.)', answer: ['1/5'], answerText: '1/5', explain: '{{12|60}} = {{1|5}}.' },
      { type: 'short', calc: '1500 * 0.23', q: 'Xác suất khách mua kèm nước uống khoảng 0,23. Trong 1500 khách, dự đoán khoảng bao nhiêu khách mua kèm?', unit: 'khách', answer: '345', explain: '1500 · 0,23.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khi số lần thử càng lớn, xác suất thực nghiệm càng có xu hướng gần xác suất của biến cố.', answer: true, explain: 'Mối liên hệ giữa xác suất thực nghiệm và xác suất.' },
      { type: 'short', calc: '3000 * 0.02', q: 'Tỉ lệ lỗi khoảng 2%. Trong 3000 sản phẩm, dự đoán có khoảng bao nhiêu sản phẩm lỗi?', answer: '60', explain: '3000 · 0,02.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tung đồng xu 10 lần được 7 lần ngửa chứng tỏ đồng xu không cân đối.', answer: false, explain: '10 lần là quá ít để kết luận.' },
      { type: 'short', calc: '240 / 400', q: 'Tung đinh bấm 400 lần, 240 lần mũi chĩa lên. Ước lượng xác suất mũi chĩa lên (số thập phân).', answer: '0.6', answerText: '0,6', explain: '{{240|400}} = 0,6.' },
      { type: 'short', calc: '50 * 30 / 100', q: 'Hộp 50 bi; lấy có trả lại 100 lần được 30 lần bi đỏ. Ước lượng số bi đỏ.', unit: 'viên', answer: '15', explain: '50 · 0,3.' },
      { type: 'mcq', q: 'Muốn ước lượng xác suất một hạt giống nảy mầm, cách tốt nhất là:', options: ['Gieo 2 hạt', 'Gieo thật nhiều hạt và tính tỉ lệ nảy mầm', 'Đoán là 0,5', 'Chỉ quan sát 1 hạt'], answer: 1, explain: 'Số lần thử lớn cho ước lượng tốt.' }
    ]
  });
})();
