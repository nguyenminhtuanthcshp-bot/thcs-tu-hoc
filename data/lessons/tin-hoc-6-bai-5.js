/* Tin học 6 – Bài 5. Internet. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-6/bai-5', {
  objectives: [
    'Nêu được Internet là gì và các đặc điểm chính của Internet.',
    'Nêu được một số lợi ích của Internet trong học tập và đời sống.',
    'Nhận biết được một số tác hại khi sử dụng Internet không đúng cách và cách phòng tránh.'
  ],
  intro: 'Em có thể xem một bài giảng của thầy cô ở thành phố khác, đọc tin tức thế giới hay gọi video cho người thân ở xa – tất cả nhờ Internet. Vậy Internet là gì và dùng Internet thế nào cho đúng?',
  steps: [
    { title: 'Internet là gì?', html: `<p><b>Internet</b> là mạng kết nối hàng triệu máy tính và mạng máy tính trên khắp thế giới, giúp người dùng xem, tìm kiếm, chia sẻ và trao đổi thông tin.</p>
      <p>Người dùng thường truy cập Internet thông qua một <b>nhà cung cấp dịch vụ Internet</b>.</p>`,
      svg: S.network({ kind: 'internet' }), caption: 'Internet kết nối máy tính, điện thoại, mạng LAN và máy chủ trên toàn thế giới (sơ đồ đơn giản).' },
    { title: 'Đặc điểm của Internet', html: `<ul><li><b>Tính toàn cầu:</b> kết nối người dùng ở mọi nơi trên thế giới.</li><li><b>Tính tương tác:</b> người dùng vừa nhận vừa gửi, trao đổi thông tin hai chiều.</li><li><b>Tính dễ tiếp cận:</b> có thể truy cập ở bất kì đâu có kết nối, bằng nhiều thiết bị.</li><li><b>Tính không chủ sở hữu:</b> không một cá nhân hay tổ chức nào sở hữu toàn bộ Internet.</li></ul>` },
    { title: 'Lợi ích của Internet', html: `<p>Internet giúp: tìm kiếm và học tập (bài giảng, sách điện tử), liên lạc (thư điện tử, gọi video), giải trí (nghe nhạc, xem phim), mua bán, dịch vụ công trực tuyến…</p>`,
      svg: S.mindmap({ center: 'Lợi ích của Internet', branches: [{ title: 'Học tập', items: ['Bài giảng, sách điện tử'] }, { title: 'Liên lạc', items: ['Thư điện tử, gọi video'] }, { title: 'Giải trí', items: ['Âm nhạc, phim'] }, { title: 'Dịch vụ', items: ['Mua sắm, dịch vụ công'] }], w: 620, size: 14 }), caption: 'Một số lợi ích của Internet.' },
    { title: 'Sử dụng Internet an toàn, hợp lí', html: `<p>Dùng Internet quá nhiều hoặc thiếu cẩn trọng có thể gây hại: nghiện mạng, ảnh hưởng sức khoẻ, gặp thông tin sai lệch, bị lừa đảo hoặc lộ thông tin cá nhân.</p>
      <div class="box tip">Đặt giới hạn thời gian dùng mạng, kiểm chứng thông tin ở nguồn tin cậy, không chia sẻ thông tin cá nhân với người lạ và báo cho người lớn khi gặp điều bất thường.</div>` }
  ],
  summary: 'Internet là mạng kết nối hàng triệu máy tính và mạng máy tính trên toàn thế giới. Đặc điểm: toàn cầu, tương tác, dễ tiếp cận, không chủ sở hữu. Internet có nhiều lợi ích (học tập, liên lạc, giải trí, dịch vụ) nhưng cần sử dụng an toàn, có giới hạn.',
  examples: [
    { title: 'Nhận biết đặc điểm', problem: 'Bạn Nam ở Hà Nội tham gia lớp học trực tuyến cùng các bạn ở Cà Mau và có thể đặt câu hỏi cho thầy giáo. Tình huống thể hiện những đặc điểm nào của Internet?', solution: 'Tính toàn cầu (kết nối người ở xa) và tính tương tác (trao đổi hai chiều).' },
    { title: 'Lợi ích', problem: 'Nêu một lợi ích của Internet đối với việc học của học sinh.', solution: 'Ví dụ: tra cứu tài liệu, xem lại bài giảng, làm bài tập trực tuyến.' },
    { title: 'Quản lí thời gian', problem: 'Mỗi ngày Lan dùng Internet để giải trí 2 giờ. Một tuần Lan dùng bao nhiêu giờ để giải trí trên mạng?', solution: '2 × 7 = 14 giờ. Lan nên giảm bớt để dành thời gian học tập, vận động.' }
  ],
  exercises: [
    { question: 'Vì sao nói Internet “không có chủ sở hữu”?', hints: ['Internet được tạo thành từ những gì?', 'Có tổ chức nào sở hữu toàn bộ các mạng đó không?'], solution: 'Internet là sự kết nối của rất nhiều mạng thuộc nhiều tổ chức, cá nhân khác nhau; không ai sở hữu toàn bộ Internet.' },
    { question: 'Nêu hai tác hại khi sử dụng Internet không hợp lí và cách phòng tránh.', hints: ['Nghĩ đến sức khoẻ và thời gian.', 'Nghĩ đến thông tin cá nhân, tin giả.'], solution: 'Ví dụ: nghiện mạng → đặt giới hạn thời gian; bị lừa đảo, lộ thông tin cá nhân → không chia sẻ thông tin cá nhân, hỏi ý kiến người lớn.' },
    { question: 'Một buổi học trực tuyến kéo dài 45 phút. Một tuần có 4 buổi. Tổng thời gian học trực tuyến mỗi tuần là bao nhiêu giờ?', hints: ['45 × 4 = ? phút.', 'Đổi ra giờ: chia cho 60.'], solution: '45 × 4 = 180 phút = 3 giờ.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Internet là mạng kết nối các máy tính và mạng máy tính trên khắp thế giới.', answer: true, explain: 'Đúng khái niệm Internet.' },
    { type: 'mcq', q: 'Đặc điểm nào KHÔNG phải của Internet?', options: ['Tính toàn cầu', 'Tính tương tác', 'Có một chủ sở hữu duy nhất', 'Tính dễ tiếp cận'], answer: 2, explain: 'Internet không có chủ sở hữu.' },
    { type: 'mcq', q: 'Việc nào thể hiện tính tương tác của Internet?', options: ['Đọc sách giấy', 'Bình luận, trao đổi trong lớp học trực tuyến', 'Nghe đài bán dẫn', 'Xem tivi truyền hình mặt đất'], answer: 1, explain: 'Trao đổi hai chiều là tương tác.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mọi thông tin trên Internet đều chính xác.', answer: false, explain: 'Cần kiểm chứng thông tin ở nguồn tin cậy.' },
    { type: 'short', q: 'Mỗi ngày em dùng Internet để học 30 phút. Trong 6 ngày em dùng bao nhiêu giờ?', answer: '3', unit: 'giờ', calc: '30*6/60', explain: '30 × 6 = 180 phút = 3 giờ.' },
    { type: 'mcq', q: 'Khi người lạ trên mạng hỏi địa chỉ nhà, em nên:', options: ['cung cấp ngay', 'không cung cấp và báo cho bố mẹ, thầy cô', 'hẹn gặp người đó', 'gửi thêm ảnh gia đình'], answer: 1, explain: 'Bảo vệ thông tin cá nhân.' },
    { type: 'short', q: 'Một lớp 40 học sinh, 36 bạn có thể truy cập Internet ở nhà. Có bao nhiêu phần trăm học sinh truy cập được?', answer: '90', unit: '%', calc: '36/40*100', explain: '36 : 40 = 90%.' },
    { type: 'mcq', q: 'Để truy cập Internet, người dùng thường cần:', options: ['nhà cung cấp dịch vụ Internet', 'một máy in', 'một máy quét', 'đĩa CD'], answer: 0, explain: 'Nhà cung cấp dịch vụ kết nối người dùng với Internet.' }
  ]
});
})();
