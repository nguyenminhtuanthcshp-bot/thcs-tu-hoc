/* Tin học 6 – Bài 2. Xử lí thông tin. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-6/bai-2', {
  objectives: [
    'Nêu được các hoạt động cơ bản trong xử lí thông tin: thu nhận, xử lí, lưu trữ, truyền.',
    'Chỉ ra được các thành phần của máy tính tương ứng với các hoạt động xử lí thông tin.',
    'Nêu được ưu thế của máy tính trong xử lí thông tin.'
  ],
  intro: 'Khi trọng tài thổi còi, cầu thủ nghe thấy, hiểu rằng trận đấu tạm dừng và dừng chạy. Bộ não của cầu thủ vừa thực hiện một quá trình xử lí thông tin. Máy tính cũng xử lí thông tin theo các bước tương tự, nhưng nhanh và chính xác hơn rất nhiều.',
  steps: [
    { title: 'Các hoạt động xử lí thông tin', html: `<p>Quá trình xử lí thông tin gồm các hoạt động:</p>
      <ol><li><b>Thu nhận</b> thông tin (nhìn, nghe, đọc…);</li><li><b>Xử lí</b> thông tin (suy nghĩ, tính toán, so sánh…);</li><li><b>Lưu trữ</b> thông tin (ghi nhớ, ghi chép);</li><li><b>Truyền</b> thông tin (nói, viết, gửi cho người khác).</li></ol>`,
      svg: S.ipo({ input: 'Nghe tiếng còi', process: 'Hiểu: trận đấu tạm dừng', output: 'Dừng chạy, báo đồng đội', storage: 'Nhớ luật thi đấu' }), caption: 'Các hoạt động xử lí thông tin của cầu thủ khi nghe tiếng còi.' },
    { title: 'Máy tính – công cụ xử lí thông tin', html: `<p>Máy tính có các thành phần tương ứng với các hoạt động xử lí thông tin:</p>
      <ul><li><b>Thiết bị vào</b> (bàn phím, chuột, micro, máy quét…): thu nhận.</li><li><b>Bộ xử lí</b> (CPU): xử lí.</li><li><b>Bộ nhớ</b> (RAM, ổ đĩa cứng, thẻ nhớ…): lưu trữ.</li><li><b>Thiết bị ra</b> (màn hình, loa, máy in…): đưa ra kết quả.</li></ul>`,
      svg: S.computerParts(), caption: 'Các thành phần của máy tính và hoạt động tương ứng.' },
    { title: 'Ưu thế của máy tính', html: `<p>Máy tính xử lí thông tin <b>nhanh</b>, <b>chính xác</b>, làm việc <b>bền bỉ</b> không mệt mỏi, <b>lưu trữ</b> được lượng dữ liệu rất lớn và kết nối, chia sẻ dữ liệu qua mạng.</p>
      <p>Ví dụ: máy tính có thể cộng hàng triệu số trong chưa tới một giây, lưu hàng nghìn cuốn sách trong một thẻ nhớ nhỏ.</p>` },
    { title: 'Giới hạn của máy tính', html: `<p>Máy tính chỉ làm theo các chương trình do con người tạo ra; máy tính không tự có cảm xúc, không tự chịu trách nhiệm về quyết định. Con người cần kiểm tra kết quả và sử dụng máy tính một cách có trách nhiệm.</p>
      <div class="box key">Thu nhận → Xử lí → Lưu trữ → Truyền: đó là bốn hoạt động xử lí thông tin của cả con người lẫn máy tính.</div>` }
  ],
  summary: 'Xử lí thông tin gồm: thu nhận, xử lí, lưu trữ, truyền. Máy tính có thiết bị vào (thu nhận), bộ xử lí (xử lí), bộ nhớ (lưu trữ), thiết bị ra (đưa ra). Máy tính nhanh, chính xác, bền bỉ, lưu trữ lớn nhưng chỉ làm theo chương trình của con người.',
  examples: [
    { title: 'Xác định hoạt động', problem: 'Em đọc đề bài toán, suy nghĩ cách giải, viết lời giải vào vở và đọc cho bạn nghe. Hãy chỉ ra các hoạt động xử lí thông tin.', solution: 'Đọc đề: thu nhận. Suy nghĩ cách giải: xử lí. Viết vào vở: lưu trữ. Đọc cho bạn nghe: truyền.' },
    { title: 'Phân loại thiết bị', problem: 'Xếp các thiết bị sau vào nhóm thiết bị vào hoặc thiết bị ra: chuột, màn hình, micro, loa.', solution: 'Thiết bị vào: chuột, micro. Thiết bị ra: màn hình, loa.' },
    { title: 'So sánh tốc độ', problem: 'Một người cộng 1 phép tính mất 5 giây. Người đó cần bao lâu để cộng 120 phép tính?', solution: '120 × 5 = 600 giây = 10 phút. Máy tính làm việc này trong chưa tới một phần nghìn giây.' }
  ],
  exercises: [
    { question: 'Khi em dùng điện thoại chụp ảnh rồi gửi cho bạn, những hoạt động xử lí thông tin nào đã diễn ra?', hints: ['Camera làm nhiệm vụ gì?', 'Ảnh được lưu ở đâu, gửi đi bằng cách nào?'], solution: 'Camera thu nhận hình ảnh; bộ xử lí biến đổi thành dữ liệu ảnh (xử lí); ảnh được lưu vào bộ nhớ (lưu trữ); gửi qua mạng cho bạn (truyền).' },
    { question: 'Nêu ba ưu thế của máy tính so với con người trong xử lí thông tin.', hints: ['Nghĩ về tốc độ và độ chính xác.', 'Nghĩ về khả năng lưu trữ và làm việc liên tục.'], solution: 'Tính toán nhanh; chính xác; làm việc liên tục không mệt; lưu trữ lượng dữ liệu rất lớn (nêu ba ý bất kì).' },
    { question: 'Một máy in in được 20 trang mỗi phút. In 300 trang mất bao nhiêu phút?', hints: ['Lấy tổng số trang chia cho số trang in được mỗi phút.', '300 : 20.'], solution: '300 : 20 = 15 phút.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Bàn phím là thiết bị vào của máy tính.', answer: true, explain: 'Bàn phím dùng để nhập (thu nhận) dữ liệu.' },
    { type: 'mcq', q: 'Bộ phận nào của máy tính thực hiện hoạt động xử lí thông tin?', options: ['Màn hình', 'Bộ xử lí (CPU)', 'Loa', 'Chuột'], answer: 1, explain: 'CPU là bộ xử lí trung tâm.' },
    { type: 'mcq', q: 'Thiết bị nào là thiết bị ra?', options: ['Micro', 'Máy quét', 'Máy in', 'Bàn phím'], answer: 2, explain: 'Máy in đưa kết quả ra giấy.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Máy tính có thể tự quyết định mọi việc mà không cần chương trình do con người tạo ra.', answer: false, explain: 'Máy tính chỉ làm theo chương trình.' },
    { type: 'mcq', q: 'Ghi chép bài giảng vào vở thuộc hoạt động:', options: ['thu nhận', 'lưu trữ', 'truyền', 'xử lí'], answer: 1, explain: 'Ghi chép là lưu trữ thông tin.' },
    { type: 'short', q: 'Một máy in in 25 trang mỗi phút. Trong 4 phút máy in được bao nhiêu trang?', answer: '100', unit: 'trang', calc: '25*4', explain: '25 × 4 = 100.' },
    { type: 'mcq', q: 'Đâu KHÔNG phải ưu thế của máy tính?', options: ['Tính toán nhanh', 'Lưu trữ lớn', 'Tự có cảm xúc', 'Làm việc bền bỉ'], answer: 2, explain: 'Máy tính không có cảm xúc.' },
    { type: 'short', q: 'Mỗi phép tính cần 4 giây. Một người làm 90 phép tính mất bao nhiêu phút?', answer: '6', unit: 'phút', calc: '90*4/60', explain: '90 × 4 = 360 giây = 6 phút.' }
  ]
});
})();
