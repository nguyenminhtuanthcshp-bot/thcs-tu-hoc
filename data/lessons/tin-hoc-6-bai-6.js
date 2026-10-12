/* Tin học 6 – Bài 6. Mạng thông tin toàn cầu. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-6/bai-6', {
  objectives: [
    'Trình bày được sơ lược các khái niệm WWW, website, trang web, trang chủ, địa chỉ trang web.',
    'Nêu được vai trò của trình duyệt và kể tên một số trình duyệt.',
    'Khai thác được thông tin trên một trang web bằng cách dùng siêu liên kết.'
  ],
  intro: 'Khi em mở một trang tin tức rồi nháy vào tiêu đề một bài báo, một trang mới hiện ra. Hàng tỉ trang như thế liên kết với nhau tạo thành <b>mạng thông tin toàn cầu</b> (World Wide Web).',
  steps: [
    { title: 'Trang web và siêu liên kết', html: `<p><b>Trang web</b> là một tài liệu có thể chứa chữ, hình ảnh, âm thanh, video… và các <b>siêu liên kết</b>. Siêu liên kết (thường có màu xanh, gạch chân hoặc là một hình ảnh) giúp chuyển tới trang web khác khi nháy chuột.</p>`,
      svg: S.web(), caption: 'Các trang web liên kết với nhau bằng siêu liên kết.' },
    { title: 'Website, trang chủ, địa chỉ trang web', html: `<ul><li><b>Website</b>: tập hợp các trang web liên quan, thường của cùng một tổ chức hay cá nhân.</li><li><b>Trang chủ</b>: trang được mở đầu tiên khi truy cập website.</li><li><b>Địa chỉ trang web</b>: dãy kí tự giúp tìm đúng trang, ví dụ <code>https://www.example.edu.vn</code>.</li></ul>
      <p><b>WWW</b> (World Wide Web – mạng thông tin toàn cầu) là hệ thống các website trên Internet.</p>` },
    { title: 'Trình duyệt web', html: `<p><b>Trình duyệt</b> là phần mềm giúp truy cập và xem trang web. Một số trình duyệt: Google Chrome, Microsoft Edge, Mozilla Firefox, Cốc Cốc, Safari.</p>
      <p>Muốn mở một trang web, em gõ địa chỉ vào <b>thanh địa chỉ</b> rồi nhấn Enter.</p>`,
      svg: S.browser({ url: 'https://www.example.edu.vn', tab: 'Trường THCS' }), caption: 'Cửa sổ trình duyệt: thanh địa chỉ, nút quay lại/tiến tới và vùng nội dung.' },
    { title: 'Khai thác thông tin trên trang web', html: `<ol><li>Mở trình duyệt, gõ địa chỉ trang web.</li><li>Đọc nội dung, nháy vào siêu liên kết để xem chi tiết.</li><li>Dùng nút <b>Quay lại</b> (←) để trở về trang trước.</li></ol>
      <div class="box key">Internet là mạng kết nối máy tính; WWW là một dịch vụ chạy trên Internet.</div>` }
  ],
  summary: 'Trang web chứa chữ, hình, âm thanh và siêu liên kết. Website là tập hợp các trang web liên quan; trang chủ là trang mở đầu tiên. Mỗi trang web có một địa chỉ. WWW là hệ thống các website trên Internet. Trình duyệt (Chrome, Edge, Firefox, Cốc Cốc…) dùng để xem trang web.',
  examples: [
    { title: 'Phân biệt khái niệm', problem: 'Website của một trường có các trang: giới thiệu, tin tức, thời khoá biểu. Trang nào thường là trang chủ?', solution: 'Trang mở ra đầu tiên khi gõ địa chỉ website, thường là trang giới thiệu chung có liên kết tới các trang còn lại.' },
    { title: 'Nhận biết siêu liên kết', problem: 'Làm sao biết một dòng chữ trên trang web là siêu liên kết?', solution: 'Khi đưa chuột tới, con trỏ thường đổi thành hình bàn tay; chữ thường có màu khác hoặc gạch chân.' },
    { title: 'Đếm trang', problem: 'Một website có 1 trang chủ, 4 mục, mỗi mục có 5 trang. Website có bao nhiêu trang?', solution: '1 + 4 × 5 = 21 trang.' }
  ],
  exercises: [
    { question: 'Phân biệt Internet và WWW.', hints: ['Internet là gì?', 'WWW là một dịch vụ chạy trên nền nào?'], solution: 'Internet là mạng kết nối máy tính toàn cầu. WWW là hệ thống các trang web liên kết với nhau, là một dịch vụ hoạt động trên Internet.' },
    { question: 'Kể tên ba trình duyệt web và nêu tác dụng của trình duyệt.', hints: ['Trên máy tính ở trường, em mở trang web bằng phần mềm nào?', 'Trình duyệt giúp làm gì với trang web?'], solution: 'Ví dụ: Chrome, Edge, Firefox (hoặc Cốc Cốc, Safari). Trình duyệt giúp truy cập và hiển thị trang web.' },
    { question: 'Một website có 3 mục, mỗi mục 6 trang, cộng thêm 1 trang chủ. Website có bao nhiêu trang?', hints: ['Số trang ở các mục: 3 × 6.', 'Cộng thêm trang chủ.'], solution: '3 × 6 + 1 = 19 trang.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Siêu liên kết giúp chuyển từ trang web này sang trang web khác.', answer: true, explain: 'Nháy vào siêu liên kết để chuyển trang.' },
    { type: 'mcq', q: 'Phần mềm nào là trình duyệt web?', options: ['Microsoft Word', 'Mozilla Firefox', 'Paint', 'Scratch'], answer: 1, explain: 'Firefox là trình duyệt.' },
    { type: 'mcq', q: 'Trang được mở đầu tiên khi truy cập một website gọi là:', options: ['trang chủ', 'trang cuối', 'trang liên kết', 'trang in'], answer: 0, explain: 'Đó là trang chủ.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: WWW và Internet là một.', answer: false, explain: 'WWW là dịch vụ chạy trên Internet.' },
    { type: 'mcq', q: 'Để mở một trang web khi đã biết địa chỉ, em gõ địa chỉ vào:', options: ['thanh địa chỉ của trình duyệt', 'ô tìm kiếm của máy tính bỏ túi', 'thanh tác vụ', 'phần mềm soạn thảo'], answer: 0, explain: 'Gõ địa chỉ vào thanh địa chỉ rồi nhấn Enter.' },
    { type: 'short', q: 'Một website có 1 trang chủ và 5 mục, mỗi mục 4 trang. Website có bao nhiêu trang?', answer: '21', unit: 'trang', calc: '1+5*4', explain: '1 + 5 × 4 = 21.' },
    { type: 'mcq', q: 'Website là:', options: ['một máy tính', 'tập hợp các trang web liên quan', 'một thư điện tử', 'một trình duyệt'], answer: 1, explain: 'Website gồm nhiều trang web liên quan.' },
    { type: 'short', q: 'Em đã đọc 3 trên tổng số 12 trang của một website. Còn bao nhiêu trang chưa đọc?', answer: '9', unit: 'trang', calc: '12-3', explain: '12 − 3 = 9.' }
  ]
});
})();
