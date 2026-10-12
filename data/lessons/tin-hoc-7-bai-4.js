/* Tin học 7 – Bài 4. Mạng xã hội và một số kênh trao đổi thông tin trên Internet. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-7/bai-4', {
  objectives: [
    'Nêu được một số chức năng cơ bản của mạng xã hội; kể tên một số kênh trao đổi thông tin trên Internet.',
    'Nêu được lợi ích và tác hại có thể có khi sử dụng mạng xã hội.',
    'Sử dụng được một kênh trao đổi thông tin phù hợp với mục đích, an toàn.'
  ],
  intro: 'Cả lớp lập một nhóm nhắn tin để thông báo bài tập, chia sẻ ảnh hoạt động. Đó là một cách dùng <b>mạng xã hội</b> và các kênh trao đổi thông tin trên Internet. Dùng thế nào cho hiệu quả và an toàn?',
  steps: [
    { title: 'Mạng xã hội là gì?', html: `<p><b>Mạng xã hội</b> là ứng dụng trên Internet cho phép người dùng tạo trang cá nhân, kết nối, chia sẻ, trao đổi thông tin với nhau.</p>
      <p>Chức năng thường có: tạo hồ sơ cá nhân; kết bạn, theo dõi; đăng bài, ảnh, video; bình luận, bày tỏ cảm xúc; nhắn tin, gọi điện; lập nhóm.</p>` },
    { title: 'Các kênh trao đổi thông tin', html: `<p>Ngoài mạng xã hội còn có: <b>thư điện tử</b>, <b>diễn đàn</b>, <b>trang web</b> (tin tức, học tập), <b>ứng dụng nhắn tin, gọi video</b>, <b>lớp học trực tuyến</b>.</p>`,
      svg: S.mindmap({ center: 'Kênh trao đổi thông tin', branches: [{ title: 'Mạng xã hội', items: ['Chia sẻ, kết nối'] }, { title: 'Thư điện tử', items: ['Trao đổi chính thức'] }, { title: 'Diễn đàn', items: ['Thảo luận theo chủ đề'] }, { title: 'Nhắn tin, gọi video', items: ['Trao đổi tức thời'] }], w: 640, size: 14 }), caption: 'Một số kênh trao đổi thông tin trên Internet.' },
    { title: 'Lợi ích và tác hại', html: `<table><tr><th>Lợi ích</th><th>Tác hại có thể gặp</th></tr><tr><td>Kết nối bạn bè, người thân; học tập, chia sẻ kiến thức; cập nhật tin tức; tham gia hoạt động cộng đồng.</td><td>Mất thời gian, nghiện; lộ thông tin cá nhân; tin giả; bị bắt nạt, lừa đảo; ảnh hưởng sức khoẻ.</td></tr></table>`,
      svg: S.bar({ title: 'Thời gian dùng mạng xã hội trong tuần của một bạn (số liệu minh hoạ)', cats: ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'], series: [{ name: 'phút', values: [30, 20, 45, 30, 25, 90, 120], color: '#0e7490' }], width: 560, height: 280 }), caption: 'Cuối tuần thời gian dùng mạng tăng mạnh (số liệu minh hoạ).' },
    { title: 'Sử dụng an toàn', html: `<ul><li>Nhiều mạng xã hội quy định người dùng phải từ 13 tuổi trở lên; hãy tìm hiểu điều khoản và hỏi ý kiến bố mẹ.</li><li>Đặt chế độ riêng tư, chỉ kết bạn với người quen; không chia sẻ địa chỉ, số điện thoại, mật khẩu.</li><li>Đặt giới hạn thời gian; chọn kênh phù hợp mục đích (ví dụ: gửi bài cho thầy cô qua thư điện tử).</li></ul>
      <div class="box key">Mạng xã hội là công cụ: dùng đúng mục đích, có giới hạn và an toàn.</div>` }
  ],
  summary: 'Mạng xã hội cho phép tạo hồ sơ, kết nối, chia sẻ, bình luận, nhắn tin. Các kênh khác: thư điện tử, diễn đàn, trang web, nhắn tin, lớp học trực tuyến. Mạng xã hội có lợi ích (kết nối, học tập) và tác hại (nghiện, lộ thông tin, tin giả, bắt nạt). Cần dùng đúng tuổi, có giới hạn, bảo vệ thông tin cá nhân.',
  examples: [
    { title: 'Chọn kênh', problem: 'Em cần nộp bài báo cáo có tệp đính kèm cho cô giáo. Nên dùng kênh nào?', solution: 'Thư điện tử (hoặc hệ thống lớp học trực tuyến của trường).' },
    { title: 'Xử lí lời mời kết bạn', problem: 'Một người lạ có ảnh đại diện đẹp gửi lời mời kết bạn và nhắn hỏi trường em học. Em làm gì?', solution: 'Không chấp nhận, không trả lời thông tin cá nhân; báo bố mẹ nếu người đó tiếp tục làm phiền.' },
    { title: 'Đọc biểu đồ', problem: 'Theo biểu đồ ở bước 3, tổng thời gian dùng mạng xã hội trong tuần là bao nhiêu phút?', solution: '30 + 20 + 45 + 30 + 25 + 90 + 120 = 360 phút = 6 giờ.' }
  ],
  exercises: [
    { question: 'Nêu ba chức năng cơ bản của mạng xã hội.', hints: ['Nghĩ đến việc tạo trang cá nhân.', 'Nghĩ đến việc đăng bài, nhắn tin.'], solution: 'Tạo hồ sơ cá nhân; kết bạn, đăng bài, chia sẻ ảnh; bình luận, nhắn tin.' },
    { question: 'Đề xuất ba quy tắc giúp em dùng mạng xã hội lành mạnh.', hints: ['Về thời gian.', 'Về thông tin cá nhân và cách bình luận.'], solution: 'Ví dụ: không quá 1 giờ mỗi ngày; không chia sẻ thông tin cá nhân; bình luận lịch sự, kiểm chứng trước khi chia sẻ.' },
    { question: 'Mỗi ngày em dùng mạng xã hội 45 phút. Nếu giảm còn 30 phút/ngày, mỗi tuần tiết kiệm được bao nhiêu phút?', hints: ['Mỗi ngày giảm bao nhiêu phút?', 'Nhân với 7.'], solution: '(45 − 30) × 7 = 105 phút.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mạng xã hội cho phép người dùng chia sẻ thông tin và kết nối với nhau.', answer: true, explain: 'Đó là chức năng chính.' },
    { type: 'mcq', q: 'Kênh nào phù hợp nhất để gửi bài làm có tệp đính kèm cho thầy cô?', options: ['Bình luận công khai', 'Thư điện tử', 'Đăng trạng thái', 'Diễn đàn trò chơi'], answer: 1, explain: 'Thư điện tử phù hợp, có tệp đính kèm.' },
    { type: 'mcq', q: 'Việc nào là tác hại có thể có của mạng xã hội?', options: ['Kết nối bạn bè', 'Học nhóm trực tuyến', 'Lộ thông tin cá nhân', 'Cập nhật tin tức'], answer: 2, explain: 'Lộ thông tin là tác hại.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nên chấp nhận mọi lời mời kết bạn để có nhiều bạn.', answer: false, explain: 'Chỉ kết bạn với người quen.' },
    { type: 'short', q: 'Mỗi ngày dùng mạng xã hội 40 phút. Một tuần dùng bao nhiêu phút?', answer: '280', unit: 'phút', calc: '40*7', explain: '40 × 7 = 280.' },
    { type: 'mcq', q: 'Diễn đàn là kênh trao đổi thông tin:', options: ['theo các chủ đề thảo luận', 'chỉ để gửi tiền', 'không cần Internet', 'chỉ để xem phim'], answer: 0, explain: 'Diễn đàn thảo luận theo chủ đề.' },
    { type: 'short', q: 'Trong 1 tuần dùng mạng 420 phút. Trung bình mỗi ngày bao nhiêu phút?', answer: '60', unit: 'phút', calc: '420/7', explain: '420 : 7 = 60.' },
    { type: 'mcq', q: 'Để bảo vệ trang cá nhân, em nên:', options: ['để công khai mọi thông tin', 'đặt chế độ riêng tư', 'đăng số điện thoại', 'chia sẻ mật khẩu cho bạn'], answer: 1, explain: 'Chế độ riêng tư giúp bảo vệ thông tin.' }
  ]
});
})();
