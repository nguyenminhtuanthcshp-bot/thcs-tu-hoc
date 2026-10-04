/* Toán 8 – Bài 31. Cách tính xác suất của biến cố bằng tỉ số. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-8/bai-31', {
    objectives: [
      'Sử dụng được tỉ số để mô tả xác suất của một biến cố ngẫu nhiên trong một số ví dụ đơn giản.',
      'Tính được xác suất của biến cố khi các kết quả có thể là đồng khả năng.',
      'Nhận biết được xác suất của biến cố chắc chắn bằng 1, của biến cố không thể bằng 0.'
    ],
    intro: 'Khả năng lấy được bóng xanh từ túi 3 đỏ, 5 xanh, 2 vàng là bao nhiêu? Toán học trả lời bằng một con số: {{5|10}} = {{1|2}}.',
    steps: [
      { title: 'Công thức tính xác suất', html: `<div class="box key">Nếu các kết quả có thể của phép thử là <b>đồng khả năng</b> thì xác suất của biến cố A là<br>P(A) = {{Số kết quả thuận lợi cho A|Tổng số kết quả có thể}}</div>
        <p>Ví dụ: gieo xúc xắc cân đối, A: “Số chấm chẵn” ⇒ P(A) = {{3|6}} = {{1|2}}.</p>` },
      { title: 'Các bước tính', html: `<ol><li>Kiểm tra các kết quả có đồng khả năng không.</li><li>Đếm tổng số kết quả có thể (n).</li><li>Đếm số kết quả thuận lợi cho A (k).</li><li>P(A) = {{k|n}}; rút gọn phân số.</li></ol>`,
        svg: S.flow({ items: [{ title: 'Đồng khả năng?', text: 'kiểm tra' }, { title: 'Đếm n', text: 'tổng số kết quả' }, { title: 'Đếm k', text: 'kết quả thuận lợi' }, { title: 'P = k/n', text: 'rút gọn' }], w: 620, size: 14 }), caption: 'Quy trình tính xác suất bằng tỉ số.' },
      { title: 'Giá trị của xác suất', html: `<ul><li>0 ≤ P(A) ≤ 1.</li><li>Biến cố <b>chắc chắn</b> có xác suất 1; biến cố <b>không thể</b> có xác suất 0.</li><li>P(A) càng gần 1 thì A càng dễ xảy ra.</li></ul>` },
      { title: 'Biến cố đối (mở rộng)', html: `<p>Biến cố “A không xảy ra” có xác suất 1 − P(A). Ví dụ: P(lấy bóng xanh) = {{1|2}} ⇒ P(không lấy bóng xanh) = {{1|2}}.</p>` }
    ],
    summary: 'P(A) = số kết quả thuận lợi : tổng số kết quả có thể (khi đồng khả năng). 0 ≤ P(A) ≤ 1.',
    examples: [
      { title: 'Túi bóng', problem: 'Túi có 3 bóng đỏ, 5 bóng xanh, 2 bóng vàng. Lấy ngẫu nhiên 1 bóng. Tính xác suất lấy được bóng đỏ; bóng không phải màu vàng.', solution: 'n = 10. P(đỏ) = {{3|10}}. Không vàng: 8 kết quả ⇒ P = {{8|10}} = {{4|5}}.' },
      { title: 'Rút thẻ', problem: 'Rút ngẫu nhiên 1 thẻ từ 20 thẻ đánh số 1 đến 20. Tính xác suất rút được thẻ ghi số chia hết cho 5.', solution: 'Thuận lợi: 5, 10, 15, 20 ⇒ P = {{4|20}} = {{1|5}}.' },
      { title: 'Chọn học sinh', problem: 'Lớp 8A có 18 nam, 22 nữ. Chọn ngẫu nhiên 1 bạn trực nhật. Tính xác suất chọn được bạn nam.', solution: 'P = {{18|40}} = {{9|20}}.' }
    ],
    exercises: [
      { question: 'Gieo xúc xắc cân đối. Tính xác suất số chấm là số nguyên tố.', hints: ['Số nguyên tố trong 1..6: 2, 3, 5.', '{{3|6}}.'], solution: '{{1|2}}.' },
      { question: 'Một hộp có 12 viên bi gồm 4 bi trắng, còn lại là bi đen. Lấy 1 viên. Tính xác suất lấy được bi đen.', hints: ['Số bi đen: 12 − 4 = 8.', '{{8|12}} rút gọn.'], solution: '{{2|3}}.' },
      { question: 'Chọn ngẫu nhiên một số tự nhiên có hai chữ số. Tính xác suất số đó chia hết cho 10.', hints: ['Có 90 số có hai chữ số (10 đến 99).', 'Chia hết cho 10: 10, 20, …, 90.'], solution: '{{9|90}} = {{1|10}}.' }
    ],
    quiz: [
      { type: 'short', requireSimplest: true, calc: '3 / 6', q: 'Gieo xúc xắc cân đối. Xác suất ra số chấm chẵn là bao nhiêu? (Dạng a/b tối giản.)', answer: ['1/2'], answerText: '1/2', explain: '{{3|6}} = {{1|2}}.' },
      { type: 'short', requireSimplest: true, calc: '3 / 10', q: 'Túi 3 đỏ, 5 xanh, 2 vàng. Xác suất lấy được bóng đỏ? (Dạng a/b tối giản.)', answer: ['3/10'], answerText: '3/10', explain: '{{3|10}}.' },
      { type: 'short', requireSimplest: true, calc: '8 / 10', q: 'Túi 3 đỏ, 5 xanh, 2 vàng. Xác suất lấy được bóng không phải màu vàng? (Dạng a/b tối giản.)', answer: ['4/5'], answerText: '4/5', explain: '{{8|10}} = {{4|5}}.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Xác suất của một biến cố có thể bằng {{3|2}}.', answer: false, explain: 'Xác suất luôn từ 0 đến 1.' },
      { type: 'short', requireSimplest: true, calc: '18 / 40', q: 'Lớp có 18 nam, 22 nữ. Xác suất chọn ngẫu nhiên được bạn nam? (Dạng a/b tối giản.)', answer: ['9/20'], answerText: '9/20', explain: '{{18|40}} = {{9|20}}.' },
      { type: 'mcq', q: 'Xác suất của biến cố “Gieo xúc xắc được số chấm nhỏ hơn 7” là:', options: ['0', '{{1|6}}', '{{1|2}}', '1'], answer: 3, explain: 'Biến cố chắc chắn.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nếu P(A) = {{1|4}} thì xác suất A không xảy ra là {{3|4}}.', answer: true, explain: '1 − {{1|4}}.' },
      { type: 'short', requireSimplest: true, calc: '4 / 20', q: 'Rút 1 thẻ từ 20 thẻ số 1–20. Xác suất rút được số chia hết cho 5? (Dạng a/b tối giản.)', answer: ['1/5'], answerText: '1/5', explain: '{{4|20}} = {{1|5}}.' }
    ]
  });
})();
