/* Tin học 7 – Bài 1. Thiết bị vào – ra. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-7/bai-1', {
  objectives: [
    'Nêu được chức năng của thiết bị vào và thiết bị ra; phân loại được một số thiết bị thông dụng.',
    'Nhận biết được thiết bị vừa là thiết bị vào vừa là thiết bị ra.',
    'Biết sử dụng thiết bị vào – ra đúng cách, an toàn, tránh làm hỏng thiết bị và mất dữ liệu.'
  ],
  intro: 'Em gõ phím, nói vào micro hay chạm vào màn hình điện thoại – máy tính nhận được yêu cầu và trả lời bằng hình ảnh, âm thanh. Những thiết bị giúp máy tính “nghe, nhìn” và “nói, hiện” đó gọi là <b>thiết bị vào – ra</b>.',
  steps: [
    { title: 'Thiết bị vào', html: `<p><b>Thiết bị vào</b> giúp đưa dữ liệu, lệnh từ bên ngoài vào máy tính: bàn phím, chuột, micro, máy quét, webcam, bút cảm ứng, cảm biến…</p>` },
    { title: 'Thiết bị ra', html: `<p><b>Thiết bị ra</b> đưa kết quả xử lí từ máy tính ra bên ngoài dưới dạng chữ, hình ảnh, âm thanh, chuyển động: màn hình, loa, tai nghe, máy in, máy chiếu…</p>`,
      svg: S.computerParts(), caption: 'Thiết bị vào thu nhận dữ liệu, thiết bị ra đưa kết quả ra ngoài.' },
    { title: 'Thiết bị vừa vào vừa ra', html: `<p>Một số thiết bị đảm nhận cả hai chức năng: <b>màn hình cảm ứng</b> (chạm để nhập, hiển thị kết quả), ổ USB, thẻ nhớ (ghi và đọc dữ liệu), tai nghe có micro.</p>`,
      svg: S.table({ title: 'Phân loại một số thiết bị', head: ['Thiết bị', 'Vào', 'Ra'], rows: [['Bàn phím', '✓', ''], ['Máy chiếu', '', '✓'], ['Màn hình cảm ứng', '✓', '✓'], ['Webcam', '✓', ''], ['Máy in', '', '✓']], colW: 160 }), caption: 'Màn hình cảm ứng vừa là thiết bị vào vừa là thiết bị ra.' },
    { title: 'Sử dụng thiết bị an toàn, đúng cách', html: `<ul><li>Cắm, rút thiết bị nhẹ nhàng, đúng cổng; tháo USB an toàn trước khi rút.</li><li>Giữ thiết bị khô ráo, không để đồ ăn, nước gần bàn phím.</li><li>Tắt máy đúng cách (Shut down), không ngắt điện đột ngột.</li><li>Ngồi đúng tư thế, giữ khoảng cách mắt – màn hình hợp lí, nghỉ giải lao.</li></ul>
      <div class="box key">Vào: đưa dữ liệu vào máy. Ra: đưa kết quả ra ngoài.</div>` }
  ],
  summary: 'Thiết bị vào (bàn phím, chuột, micro, máy quét, webcam…) đưa dữ liệu vào máy tính; thiết bị ra (màn hình, loa, máy in, máy chiếu…) đưa kết quả ra ngoài. Màn hình cảm ứng, ổ USB vừa vào vừa ra. Cần dùng thiết bị đúng cách để tránh hỏng hóc và mất dữ liệu.',
  examples: [
    { title: 'Phân loại', problem: 'Xếp các thiết bị vào nhóm: micro, loa, máy quét, máy chiếu.', solution: 'Vào: micro, máy quét. Ra: loa, máy chiếu.' },
    { title: 'Thiết bị hai chiều', problem: 'Vì sao màn hình cảm ứng của điện thoại vừa là thiết bị vào vừa là thiết bị ra?', solution: 'Vì nó nhận thao tác chạm (vào) và hiển thị hình ảnh kết quả (ra).' },
    { title: 'An toàn', problem: 'Bạn Nam rút ổ USB khi đang chép tệp. Điều gì có thể xảy ra?', solution: 'Tệp có thể bị hỏng hoặc mất dữ liệu; cần chờ chép xong và tháo an toàn.' }
  ],
  exercises: [
    { question: 'Kể tên hai thiết bị vào và hai thiết bị ra có ở lớp học của em.', hints: ['Thiết bị giáo viên dùng để trình chiếu là gì?', 'Thiết bị dùng để gõ chữ là gì?'], solution: 'Ví dụ: vào – bàn phím, chuột; ra – máy chiếu, loa.' },
    { question: 'Nêu ba việc nên làm để bảo vệ bàn phím và chuột.', hints: ['Nghĩ về đồ ăn, nước uống.', 'Nghĩ về cách cắm, rút và vệ sinh.'], solution: 'Không ăn uống gần bàn phím; vệ sinh định kì; cắm, rút đúng cổng, nhẹ nhàng.' },
    { question: 'Một máy in in 30 trang mỗi phút. In 450 trang hết bao nhiêu phút?', hints: ['Chia tổng số trang cho tốc độ in.', '450 : 30.'], solution: '450 : 30 = 15 phút.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Máy quét là thiết bị vào.', answer: true, explain: 'Máy quét đưa hình ảnh tài liệu vào máy tính.' },
    { type: 'mcq', q: 'Thiết bị nào là thiết bị ra?', options: ['Chuột', 'Webcam', 'Loa', 'Micro'], answer: 2, explain: 'Loa phát âm thanh ra ngoài.' },
    { type: 'mcq', q: 'Thiết bị nào vừa là thiết bị vào vừa là thiết bị ra?', options: ['Màn hình cảm ứng', 'Bàn phím', 'Máy in', 'Loa'], answer: 0, explain: 'Chạm để nhập và hiển thị kết quả.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Có thể rút ổ USB bất cứ lúc nào, kể cả khi đang chép tệp.', answer: false, explain: 'Có thể làm hỏng, mất dữ liệu.' },
    { type: 'short', q: 'Máy in in 25 trang mỗi phút. In 200 trang hết bao nhiêu phút?', answer: '8', unit: 'phút', calc: '200/25', explain: '200 : 25 = 8.' },
    { type: 'mcq', q: 'Để tắt máy tính đúng cách, em nên:', options: ['rút phích điện', 'chọn lệnh Shut down', 'tắt màn hình', 'giữ nút nguồn thật lâu mỗi lần'], answer: 1, explain: 'Dùng lệnh Shut down.' },
    { type: 'short', q: 'Phòng máy có 20 máy, mỗi máy có 1 bàn phím và 1 chuột. Có tất cả bao nhiêu thiết bị vào loại này?', answer: '40', unit: 'thiết bị', calc: '20*2', explain: '20 × 2 = 40.' },
    { type: 'mcq', q: 'Webcam dùng để:', options: ['in tài liệu', 'thu hình ảnh vào máy tính', 'phát âm thanh', 'lưu điện'], answer: 1, explain: 'Webcam là thiết bị vào.' }
  ]
});
})();
