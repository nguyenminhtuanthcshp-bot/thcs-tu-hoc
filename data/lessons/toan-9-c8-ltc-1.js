/* Toán 9 – Luyện tập chung (sau Bài 26). Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-9/c8-ltc-1', {
    objectives: [
      'Củng cố cách mô tả không gian mẫu bằng liệt kê, sơ đồ cây và bảng.',
      'Tính xác suất của biến cố trong các phép thử hai, ba bước.',
      'Phân biệt các phép thử có hoàn lại, không hoàn lại, có thứ tự và không thứ tự.'
    ],
    intro: 'Luyện tập các mô hình xác suất đơn giản: đồng xu, xúc xắc, thẻ số, bi màu, chọn người.',
    steps: [
      { title: 'Có hoàn lại và không hoàn lại', html: `<p>Hộp có 3 thẻ 1, 2, 3; rút lần lượt 2 thẻ.</p><ul><li><b>Có hoàn lại</b>: 3 · 3 = 9 kết quả (kể cả 11, 22, 33).</li><li><b>Không hoàn lại</b>: 3 · 2 = 6 kết quả.</li></ul>`,
        svg: S.probTree({ levels: [['1', '2', '3'], ['1', '2', '3']], names: ['Thẻ 1', 'Thẻ 2'], dy: 22, mark: function (p) { return p[0] === p[1]; } }), caption: 'Rút có hoàn lại: 9 kết quả; các kết quả tô đỏ không xảy ra nếu rút không hoàn lại.' },
      { title: 'Đếm bằng bảng', html: `<p>Với phép thử hai bước có nhiều kết quả (hai xúc xắc, hai vòng quay), bảng giúp đếm nhanh và không sót.</p>` },
      { title: 'Biến cố đối', html: `<p>Đôi khi đếm kết quả <b>không thuận lợi</b> dễ hơn. Ví dụ gieo hai xúc xắc, A: “có ít nhất một mặt 6”: số kết quả không có mặt 6 là 5 · 5 = 25 ⇒ n(A) = 36 − 25 = 11 ⇒ P(A) = {{11|36}}.</p>` },
      { title: 'Kiểm tra đồng khả năng', html: `<p>Công thức P(A) = {{n(A)|n(Ω)}} chỉ đúng khi các kết quả đồng khả năng. Ví dụ “tổng hai xúc xắc” có 11 giá trị (2 → 12) nhưng <b>không</b> đồng khả năng, nên không thể nói P(tổng = 7) = {{1|11}}.</p>` }
    ],
    summary: 'Xác định rõ thứ tự và hoàn lại khi mô tả Ω; dùng sơ đồ cây hoặc bảng để đếm; có thể đếm phần bù; chỉ dùng công thức khi các kết quả đồng khả năng.',
    examples: [
      { title: 'Không hoàn lại', problem: 'Rút lần lượt không hoàn lại 2 thẻ từ 3 thẻ 1, 2, 3 để lập số có hai chữ số. Tính xác suất số lập được lớn hơn 20.', solution: 'Ω = {12; 13; 21; 23; 31; 32}. Thuận lợi: 21, 23, 31, 32 ⇒ P = {{4|6}} = {{2|3}}.' },
      { title: 'Chọn người', problem: 'Chọn ngẫu nhiên 2 bạn trong 4 bạn An, Bình, Chi, Dũng để trực nhật. Tính xác suất An được chọn.', solution: 'Ω có 6 cặp; cặp chứa An: 3 ⇒ P = {{1|2}}.' },
      { title: 'Ít nhất một', problem: 'Gieo đồng xu ba lần. Tính xác suất có ít nhất một lần ngửa.', solution: 'Chỉ SSS không thỏa ⇒ P = {{7|8}}.' }
    ],
    exercises: [
      { question: 'Gieo hai xúc xắc. Tính xác suất tích số chấm là số lẻ.', hints: ['Tích lẻ khi cả hai mặt lẻ.', '3 · 3 = 9 kết quả.'], solution: '{{9|36}} = {{1|4}}.' },
      { question: 'Rút có hoàn lại 2 lần từ hộp 3 thẻ 1, 2, 3. Tính xác suất hai thẻ giống nhau.', hints: ['Ω có 9 kết quả.', '11, 22, 33.'], solution: '{{3|9}} = {{1|3}}.' },
      { question: 'Gieo hai xúc xắc. Tính xác suất có ít nhất một mặt 6.', hints: ['Không có mặt 6: 5 · 5.', '36 − 25.'], solution: '{{11|36}}.' }
    ],
    quiz: [
      { type: 'short', calc: '4 / 6', requireSimplest: true, q: 'Lập số hai chữ số từ thẻ 1, 2, 3 (không lặp). Xác suất số lớn hơn 20 (phân số tối giản)?', answer: ['2/3'], explain: '21, 23, 31, 32.' },
      { type: 'short', calc: '3 / 6', requireSimplest: true, q: 'Chọn 2 trong 4 bạn. Xác suất An được chọn (phân số tối giản)?', answer: ['1/2'], explain: '3/6.' },
      { type: 'short', calc: '(2 ** 3 - 1) / 2 ** 3', requireSimplest: true, q: 'Gieo đồng xu 3 lần. Xác suất có ít nhất một lần ngửa (phân số tối giản)?', answer: ['7/8'], explain: '1 − 1/8.' },
      { type: 'short', calc: '(36 - 5 * 5) / 36', requireSimplest: true, q: 'Gieo hai xúc xắc. Xác suất có ít nhất một mặt 6 (phân số tối giản)?', answer: ['11/36'], explain: '11/36.' },
      { type: 'short', calc: '3 * 3 / 36', requireSimplest: true, q: 'Gieo hai xúc xắc. Xác suất tích số chấm là số lẻ (phân số tối giản)?', answer: ['1/4'], explain: '9/36.' },
      { type: 'mcq', q: 'Rút có hoàn lại 2 lần từ 3 thẻ. Số phần tử của Ω là:', options: ['6', '9', '3', '8'], answer: 1, explain: '3 · 3.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Gieo hai xúc xắc, xác suất tổng bằng 7 là 1/11 vì tổng có 11 giá trị.', answer: false, explain: 'Các tổng không đồng khả năng; đúng là 1/6.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Rút không hoàn lại 2 thẻ từ 3 thẻ có 6 kết quả có thứ tự.', answer: true, explain: '3 · 2.' }
    ]
  });
})();
