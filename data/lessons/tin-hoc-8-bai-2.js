/* Tin học 8 – Bài 2. Thông tin trong môi trường số. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-8/bai-2', {
  objectives: [
    'Nêu được các đặc điểm của thông tin số: đa dạng, lưu trữ lớn, lan truyền nhanh, dễ sao chép và chỉnh sửa.',
    'Giải thích được vì sao cần đánh giá độ tin cậy của thông tin trên mạng.',
    'Biết các tiêu chí đánh giá nguồn tin: tác giả, cơ quan xuất bản, thời gian, bằng chứng, đối chiếu.'
  ],
  intro: 'Chỉ vài giây, một tấm ảnh có thể đi khắp thế giới. Nhưng tấm ảnh ấy có thật không, hay đã bị chỉnh sửa? Hiểu đặc điểm của <b>thông tin số</b> giúp em vừa khai thác tốt, vừa không bị đánh lừa.',
  steps: [
    { title: 'Thông tin số là gì?', html: `<p><b>Thông tin số</b> là thông tin được mã hoá thành dãy bit, lưu trữ và xử lí bằng thiết bị số: văn bản, ảnh, âm thanh, video trên máy tính, điện thoại, Internet.</p>` },
    { title: 'Đặc điểm của thông tin số', html: `<p>Thông tin số có những đặc điểm nổi bật:</p>`,
      svg: S.mindmap({ center: 'Thông tin số', branches: [{ title: 'Đa dạng', items: ['chữ, ảnh, âm thanh, video'] }, { title: 'Lưu trữ lớn', items: ['dung lượng rất lớn'] }, { title: 'Lan truyền nhanh', items: ['khắp thế giới'] }, { title: 'Dễ sao chép, sửa', items: ['khó phân biệt thật – giả'] }], w: 640, size: 14 }), caption: 'Đặc điểm của thông tin số.' },
    { title: 'Độ tin cậy của thông tin', html: `<p>Vì ai cũng có thể đăng tải và chỉnh sửa, thông tin số có độ tin cậy rất khác nhau. Thông tin từ cơ quan nhà nước, tổ chức khoa học, báo chí chính thống thường đáng tin cậy hơn tin không rõ nguồn.</p>`,
      svg: S.table({ title: 'Các câu hỏi khi đánh giá một nguồn tin', head: ['Tiêu chí', 'Câu hỏi'], rows: [['Tác giả', 'Ai viết? Có chuyên môn không?'], ['Nơi đăng', 'Trang chính thức hay tài khoản lạ?'], ['Thời gian', 'Đăng khi nào? Còn đúng không?'], ['Bằng chứng', 'Có số liệu, nguồn dẫn không?'], ['Đối chiếu', 'Nguồn khác có nói giống không?']], colW: 250 }), caption: 'Đối chiếu nhiều tiêu chí trước khi tin.' },
    { title: 'Ứng xử với thông tin số', html: `<ul><li>Đọc kĩ, không chỉ đọc tiêu đề; kiểm tra ngày đăng.</li><li>Đối chiếu ít nhất hai nguồn đáng tin cậy.</li><li>Không lan truyền tin chưa kiểm chứng.</li></ul>
      <div class="box key">Thông tin số: nhanh, nhiều, dễ sửa – nên càng phải kiểm chứng.</div>` }
  ],
  summary: 'Thông tin số được mã hoá bằng bit, có đặc điểm: đa dạng, lưu trữ lớn, lan truyền nhanh, dễ sao chép và chỉnh sửa. Vì vậy độ tin cậy khác nhau; cần đánh giá tác giả, nơi đăng, thời gian, bằng chứng và đối chiếu nhiều nguồn trước khi tin hay chia sẻ.',
  examples: [
    { title: 'Nguồn nào đáng tin hơn?', problem: 'Thông tin lịch nghỉ Tết: trên cổng thông tin Bộ Giáo dục và Đào tạo, hay trong một bình luận ẩn danh?', solution: 'Cổng thông tin chính thức của Bộ đáng tin cậy hơn.' },
    { title: 'Thông tin cũ', problem: 'Một bài viết năm 2015 nói “điện thoại mới nhất có bộ nhớ 16 GB”. Có dùng làm thông tin hiện nay được không?', solution: 'Không, thông tin đã cũ; cần tìm nguồn cập nhật.' },
    { title: 'Lan truyền nhanh', problem: 'Mỗi người chia sẻ cho 5 người mới. Qua 3 lượt chia sẻ (bắt đầu từ 1 người) có thêm bao nhiêu người nhận ở lượt thứ 3?', solution: '5³ = 125 người.' }
  ],
  exercises: [
    { question: 'Nêu bốn đặc điểm của thông tin số.', hints: ['Nghĩ về dạng thể hiện và dung lượng.', 'Nghĩ về tốc độ lan truyền và việc chỉnh sửa.'], solution: 'Đa dạng; lưu trữ lớn; lan truyền nhanh; dễ sao chép, chỉnh sửa.' },
    { question: 'Em đọc được tin “ăn tỏi chữa khỏi mọi bệnh”. Nêu cách kiểm tra.', hints: ['Ai đăng? Có bằng chứng khoa học không?', 'Các nguồn y tế chính thống nói gì?'], solution: 'Xem tác giả, nơi đăng; tìm bằng chứng; đối chiếu với trang của cơ quan y tế. Câu “chữa khỏi mọi bệnh” là dấu hiệu tin không đáng tin.' },
    { question: 'Một tin giả: lượt 1 có 4 người nhận, mỗi lượt sau gấp 4 lượt trước. Lượt 4 có bao nhiêu người nhận?', hints: ['4, 16, 64, …', '4⁴.'], solution: '4⁴ = 256 người.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Thông tin số có thể lan truyền rất nhanh.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Đặc điểm nào khiến thông tin số khó phân biệt thật – giả?', options: ['Đa dạng', 'Dễ sao chép, chỉnh sửa', 'Lưu trữ lâu', 'Có màu sắc'], answer: 1, explain: 'Dễ chỉnh sửa.' },
    { type: 'mcq', q: 'Nguồn tin nào thường đáng tin cậy nhất?', options: ['Bài đăng ẩn danh', 'Trang web chính thức của cơ quan nhà nước', 'Tin nhắn chuyển tiếp', 'Bình luận dạo'], answer: 1, explain: 'Nguồn chính thức.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Chỉ cần đọc tiêu đề là đủ để đánh giá một tin.', answer: false, explain: 'Cần đọc kĩ, kiểm chứng.' },
    { type: 'short', q: 'Mỗi người chia sẻ cho 3 người mới. Lượt thứ 4 (bắt đầu lượt 1 có 3 người) có bao nhiêu người nhận?', answer: '81', unit: 'người', calc: '3**4', explain: '3⁴ = 81.' },
    { type: 'mcq', q: 'Tiêu chí “đối chiếu” nghĩa là:', options: ['so sánh với các nguồn khác', 'đếm số lượt thích', 'xem ảnh đại diện', 'đọc bình luận đầu tiên'], answer: 0, explain: 'So sánh nhiều nguồn.' },
    { type: 'short', q: 'Một bài viết đăng năm 2016. Đến năm 2026, bài viết đã bao nhiêu năm?', answer: '10', unit: 'năm', calc: '2026-2016', explain: '10 năm.' },
    { type: 'mcq', q: 'Thông tin số được mã hoá thành:', options: ['dãy bit', 'chữ viết tay', 'tín hiệu khói', 'màu sơn'], answer: 0, explain: 'Dãy bit.' }
  ]
});
})();
