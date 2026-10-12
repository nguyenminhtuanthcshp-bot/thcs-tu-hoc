/* Tin học 6 – Bài 7. Tìm kiếm thông tin trên Internet. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-6/bai-7', {
  objectives: [
    'Nêu được công dụng của máy tìm kiếm và kể tên một số máy tìm kiếm.',
    'Xác định được từ khoá phù hợp với thông tin cần tìm.',
    'Thực hiện được việc tìm kiếm, chọn lọc và kiểm chứng thông tin trên Internet.'
  ],
  intro: 'Trên Internet có hàng tỉ trang web. Làm thế nào để tìm được đúng trang có thông tin em cần chỉ trong vài giây? Câu trả lời là dùng <b>máy tìm kiếm</b> với <b>từ khoá</b> phù hợp.',
  steps: [
    { title: 'Máy tìm kiếm', html: `<p><b>Máy tìm kiếm</b> là website đặc biệt giúp người dùng tìm thông tin trên Internet theo yêu cầu. Một số máy tìm kiếm: Google, Bing, Cốc Cốc…</p>
      <p>Kết quả trả về là danh sách các trang web có liên quan, mỗi kết quả có tiêu đề (là siêu liên kết), địa chỉ và đoạn mô tả ngắn.</p>`,
      svg: S.searchBox(), caption: 'Ô nhập từ khoá và danh sách kết quả của máy tìm kiếm (minh hoạ).' },
    { title: 'Từ khoá', html: `<p><b>Từ khoá</b> là từ hoặc cụm từ ngắn gọn, đặc trưng cho thông tin cần tìm.</p>
      <ul><li>Chọn từ khoá cụ thể, ví dụ: <i>“nhiệt độ sôi của nước”</i> tốt hơn <i>“nước”</i>.</li><li>Đặt cụm từ trong dấu ngoặc kép để tìm đúng cả cụm.</li><li>Có thể thêm từ để thu hẹp kết quả.</li></ul>` },
    { title: 'Các bước tìm kiếm', html: `<p>Thực hiện theo các bước:</p>`,
      svg: S.flow({ items: ['Mở trình duyệt, vào máy tìm kiếm', 'Gõ từ khoá, nhấn Enter', 'Đọc danh sách kết quả', 'Nháy vào kết quả phù hợp', 'Kiểm chứng thông tin'], size: 13, label: 'Các bước tìm kiếm thông tin' }), caption: 'Các bước tìm kiếm thông tin trên Internet.' },
    { title: 'Chọn lọc và kiểm chứng thông tin', html: `<p>Không phải trang nào cũng đáng tin. Nên ưu tiên trang của cơ quan nhà nước, trường học, tổ chức khoa học, báo chí chính thống; so sánh thông tin ở nhiều nguồn; xem ngày đăng.</p>
      <div class="box key">Từ khoá tốt + nguồn tin cậy = kết quả chính xác.</div>` }
  ],
  summary: 'Máy tìm kiếm (Google, Bing, Cốc Cốc…) giúp tìm thông tin trên Internet. Từ khoá là từ, cụm từ đặc trưng cho thông tin cần tìm. Tìm kiếm: mở máy tìm kiếm → gõ từ khoá → xem kết quả → chọn trang phù hợp → kiểm chứng thông tin.',
  examples: [
    { title: 'Chọn từ khoá', problem: 'Em cần tìm chiều cao của đỉnh Phan-xi-păng. Từ khoá nào tốt hơn: “núi” hay “độ cao đỉnh Phan-xi-păng”?', solution: '“độ cao đỉnh Phan-xi-păng”, vì cụ thể và đặc trưng cho thông tin cần tìm.' },
    { title: 'Dùng ngoặc kép', problem: 'Vì sao nên gõ “Văn Miếu – Quốc Tử Giám” trong dấu ngoặc kép?', solution: 'Để máy tìm kiếm tìm các trang có chứa đúng cả cụm từ, kết quả sát hơn.' },
    { title: 'Kiểm chứng', problem: 'Hai trang web cho hai con số khác nhau về dân số một tỉnh. Em làm gì?', solution: 'Tra thêm nguồn chính thống (ví dụ trang của cơ quan thống kê), so sánh và xem ngày cập nhật.' }
  ],
  exercises: [
    { question: 'Đề xuất từ khoá để tìm thông tin về “cách trồng cây cà chua trong chậu”.', hints: ['Giữ lại những từ quan trọng nhất.', 'Có thể dùng ngoặc kép cho cụm từ.'], solution: 'Ví dụ: “trồng cà chua trong chậu” hoặc trồng cà chua chậu.' },
    { question: 'Nêu hai dấu hiệu giúp em đánh giá một trang web đáng tin cậy.', hints: ['Ai là người đăng thông tin?', 'Thông tin có được cập nhật không?'], solution: 'Trang của cơ quan, tổ chức uy tín; có ghi rõ nguồn, tác giả, ngày đăng; thông tin trùng khớp với các nguồn khác.' },
    { question: 'Lần tìm thứ nhất trả về 120 kết quả, sau khi thêm từ khoá chỉ còn 30 kết quả. Số kết quả giảm bao nhiêu lần?', hints: ['Lấy 120 chia cho 30.', 'Thêm từ khoá giúp thu hẹp kết quả.'], solution: '120 : 30 = 4 lần.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Google là một máy tìm kiếm.', answer: true, explain: 'Google, Bing, Cốc Cốc là các máy tìm kiếm.' },
    { type: 'mcq', q: 'Từ khoá là:', options: ['mật khẩu đăng nhập', 'từ hoặc cụm từ đặc trưng cho thông tin cần tìm', 'tên của trình duyệt', 'địa chỉ thư điện tử'], answer: 1, explain: 'Đúng khái niệm từ khoá.' },
    { type: 'mcq', q: 'Muốn tìm đúng cả cụm từ, em nên:', options: ['viết hoa toàn bộ', 'đặt cụm từ trong dấu ngoặc kép', 'thêm dấu chấm than', 'viết sai chính tả'], answer: 1, explain: 'Dùng dấu ngoặc kép.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Kết quả đầu tiên của máy tìm kiếm luôn là thông tin chính xác nhất.', answer: false, explain: 'Cần chọn lọc, kiểm chứng.' },
    { type: 'mcq', q: 'Nguồn nào thường đáng tin cậy hơn?', options: ['Trang của cơ quan nhà nước', 'Bình luận không rõ người viết', 'Tin nhắn lan truyền', 'Trang không ghi nguồn'], answer: 0, explain: 'Nguồn chính thống đáng tin hơn.' },
    { type: 'short', q: 'Có 200 kết quả, em đọc 5% số kết quả. Em đã đọc bao nhiêu kết quả?', answer: '10', unit: 'kết quả', calc: '200*5/100', explain: '200 × 5% = 10.' },
    { type: 'mcq', q: 'Bước cuối cùng nên làm sau khi tìm được thông tin là:', options: ['tắt máy ngay', 'kiểm chứng thông tin', 'xoá lịch sử', 'chia sẻ ngay lên mạng'], answer: 1, explain: 'Kiểm chứng trước khi sử dụng.' },
    { type: 'short', q: 'Số kết quả giảm từ 90 xuống 15 khi thêm từ khoá. Giảm bao nhiêu lần?', answer: '6', unit: 'lần', calc: '90/15', explain: '90 : 15 = 6.' }
  ]
});
})();
