/* Ngữ văn 9 – Bài 9. Đọc hiểu văn bản thông tin (giới thiệu danh lam thắng cảnh, di tích lịch sử). Ngữ liệu: văn bản “Hoàng thành Thăng Long – nơi lắng đọng nghìn năm” và mục thông tin “Yên Tử” do nhóm biên soạn tự viết dựa trên kiến thức phổ thông và thông tin công bố của UNESCO, cơ quan nhà nước. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-9/b9-doc', {
  objectives: [
    'Nhận biết đặc điểm của văn bản thông tin giới thiệu danh lam thắng cảnh, di tích lịch sử: thông tin khách quan, cách triển khai, phương tiện phi ngôn ngữ.',
    'Phân tích được cách trình bày thông tin (theo thời gian, không gian, quan hệ nhân quả, mức độ quan trọng…) và tác dụng của phương tiện hỗ trợ.',
    'Đánh giá được độ tin cậy của thông tin; kết hợp yếu tố miêu tả, biểu cảm trong văn bản thông tin.',
    'Có ý thức tự hào, trân trọng và gìn giữ di sản văn hoá dân tộc.'
  ],
  intro: 'Giữa lòng Hà Nội có một khu di tích mà mỗi lớp đất là một trang sử: Hoàng thành Thăng Long. Văn bản thông tin sẽ giúp em “đi” và “suy ngẫm” về nơi ấy.',
  text: {
    title: 'Hoàng thành Thăng Long – nơi lắng đọng nghìn năm',
    html: `<p><b>Kinh đô nghìn năm.</b> Năm 1010, vua Lý Thái Tổ (Lý Công Uẩn) dời đô từ Hoa Lư ra thành Đại La và đặt tên mới là Thăng Long. Từ đó, qua các triều Lý, Trần, Lê và đến thời Nguyễn, nơi đây gắn với vai trò trung tâm chính trị của đất nước trong nhiều thế kỉ. Khu vực Hoàng thành xưa nay nằm ở quận Ba Đình, Hà Nội.</p>
<p><b>Di sản văn hoá thế giới.</b> Năm 2010 – đúng dịp kỉ niệm 1000 năm Thăng Long – Hà Nội – Tổ chức Giáo dục, Khoa học và Văn hoá Liên hợp quốc (UNESCO) đã ghi danh Khu trung tâm Hoàng thành Thăng Long – Hà Nội là Di sản văn hoá thế giới. Di sản được đánh giá cao vì thể hiện sự giao thoa văn hoá lâu dài và sự tiếp nối liên tục của một trung tâm quyền lực qua nhiều thế kỉ.</p>
<p><b>Những điểm tham quan chính.</b></p>
<ul><li><i>Khu khảo cổ 18 Hoàng Diệu</i>: nơi các nhà khảo cổ phát hiện nhiều lớp dấu tích kiến trúc chồng lên nhau – nền móng, giếng nước, gạch ngói, đồ gốm – từ nhiều thời kì khác nhau.</li>
<li><i>Đoan Môn</i>: cổng phía nam dẫn vào khu cung điện.</li>
<li><i>Nền điện Kính Thiên</i>: nơi còn đôi rồng đá chạm khắc tinh xảo ở bậc thềm, được xác định thuộc thời Lê sơ.</li>
<li><i>Cột cờ Hà Nội</i>: xây dựng dưới thời Nguyễn, đầu thế kỉ XIX, nay là một biểu tượng quen thuộc của Thủ đô.</li>
<li><i>Nhà và hầm D67</i>: di tích thời kì kháng chiến chống Mỹ, nơi diễn ra nhiều cuộc họp quan trọng của các cơ quan lãnh đạo.</li></ul>
<p><b>Lời gợi ý.</b> Đứng giữa khu khảo cổ, nhìn những lớp gạch cổ nằm lặng lẽ dưới lòng đất, du khách như nghe được nhịp thở của nghìn năm lịch sử. Khi tham quan, hãy đi theo lối quy định, không chạm vào hiện vật và không xả rác – để di sản còn mãi với mai sau.</p>
<hr>
<p><b>Mục thông tin: Yên Tử.</b> Núi Yên Tử (tỉnh Quảng Ninh) gắn với vua Trần Nhân Tông – người sau khi nhường ngôi đã lên núi tu hành và khai sáng Thiền phái Trúc Lâm. Ngày 12 tháng 7 năm 2025, UNESCO ghi danh Quần thể di tích và danh thắng Yên Tử – Vĩnh Nghiêm, Côn Sơn, Kiếp Bạc (thuộc Quảng Ninh, Bắc Ninh và Hải Phòng) là Di sản văn hoá thế giới.</p>`,
    source: 'Văn bản do nhóm biên soạn tự viết, tổng hợp từ kiến thức lịch sử phổ thông và thông tin công bố chính thức (quyết định ghi danh của UNESCO năm 2010 và năm 2025, được Cổng Thông tin điện tử Chính phủ, Bộ Văn hoá, Thể thao và Du lịch đưa tin).'
  },
  steps: [
    { title: 'Đặc điểm văn bản thông tin giới thiệu di tích', html: `<ul><li>Mục đích: cung cấp thông tin <b>chính xác, khách quan</b> về một di tích, danh thắng.</li>
      <li>Có <b>nhan đề, đề mục</b>, đoạn văn ngắn, danh sách gạch đầu dòng; thường kèm <b>ảnh, bản đồ, sơ đồ</b>.</li>
      <li>Có thể kết hợp <b>miêu tả, biểu cảm</b> để tăng sức hấp dẫn nhưng không làm sai lệch thông tin.</li></ul>`,
      svg: S.mindmap({ center: 'Hoàng thành Thăng Long', branches: [{ title: 'Lịch sử', items: ['1010: dời đô', 'Lý – Trần – Lê – Nguyễn'] }, { title: 'Di sản', items: ['UNESCO 2010', 'Giao thoa văn hoá'] }, { title: 'Điểm tham quan', items: ['18 Hoàng Diệu', 'Kính Thiên, Cột cờ'] }, { title: 'Ứng xử', items: ['Đi đúng lối', 'Không chạm hiện vật'] }] }),
      caption: 'Hệ thống thông tin chính của văn bản.' },
    { title: 'Cách triển khai thông tin', html: `<p>Văn bản kết hợp nhiều cách triển khai:</p>`,
      svg: S.flow({ w: 620, items: [{ title: 'Thời gian', text: '1010 → 2010' }, { title: 'Mức độ quan trọng', text: 'Giá trị di sản' }, { title: 'Không gian', text: 'Các điểm tham quan' }, { title: 'Lời khuyên', text: 'Ứng xử với di sản' }] }),
      caption: 'Trình tự triển khai thông tin.' },
    { title: 'Phương tiện ngôn ngữ và phi ngôn ngữ', html: `<ul><li>Đề mục in đậm giúp người đọc nắm cấu trúc, tìm thông tin nhanh.</li>
      <li>Danh sách gạch đầu dòng trình bày các điểm tham quan rõ ràng.</li>
      <li>Nếu có bản đồ khu di tích, ảnh rồng đá, Cột cờ, người đọc sẽ hình dung trực quan hơn.</li>
      <li>Câu văn biểu cảm “nghe được nhịp thở của nghìn năm lịch sử” tạo ấn tượng, khơi gợi cảm xúc.</li></ul>` },
    { title: 'Đánh giá độ tin cậy của thông tin', html: `<table class="tbl"><tr><th>Thông tin</th><th>Cách kiểm chứng</th></tr>
      <tr><td>Năm 1010 dời đô</td><td>Sách giáo khoa Lịch sử</td></tr>
      <tr><td>UNESCO ghi danh năm 2010, năm 2025</td><td>Trang của UNESCO, cổng thông tin Chính phủ</td></tr>
      <tr><td>Rồng đá thời Lê sơ</td><td>Tài liệu giới thiệu của khu di tích</td></tr></table>
      <div class="box key">Văn bản thông tin tốt cần có nguồn đáng tin cậy; người đọc nên đối chiếu nhiều nguồn chính thống.</div>` }
  ],
  summary: 'Văn bản thông tin giới thiệu di tích, danh thắng cung cấp thông tin chính xác, khách quan; có nhan đề, đề mục, danh sách, phương tiện phi ngôn ngữ; có thể kết hợp miêu tả, biểu cảm. “Hoàng thành Thăng Long – nơi lắng đọng nghìn năm” triển khai theo thời gian (1010 → 2010), mức độ quan trọng (giá trị di sản), không gian (các điểm tham quan) và kết bằng lời khuyên ứng xử với di sản. Cần đánh giá độ tin cậy qua nguồn chính thống.',
  examples: [
    { title: 'Cách triển khai theo thời gian', problem: 'Chỉ ra các mốc thời gian trong văn bản và tác dụng.', solution: '1010 (dời đô, đặt tên Thăng Long), các triều Lý, Trần, Lê, Nguyễn, đầu thế kỉ XIX (xây Cột cờ), thời kháng chiến chống Mỹ (D67), 2010 (UNESCO ghi danh). Các mốc giúp người đọc thấy chiều dài lịch sử và sự tiếp nối liên tục của trung tâm quyền lực – chính là giá trị nổi bật của di sản.' },
    { title: 'Yếu tố biểu cảm', problem: 'Câu “du khách như nghe được nhịp thở của nghìn năm lịch sử” có tác dụng gì trong văn bản thông tin?', solution: 'Câu văn dùng so sánh, nhân hoá, gợi cảm xúc thiêng liêng khi đứng trước di tích, làm văn bản hấp dẫn hơn; nó không thay đổi hay làm sai lệch thông tin khách quan.' },
    { title: 'Mục thông tin bổ sung', problem: 'Mục “Yên Tử” có vai trò gì?', solution: 'Cung cấp thông tin mở rộng về một di sản khác (mới được UNESCO ghi danh năm 2025), giúp người đọc liên hệ, so sánh và thấy sự phong phú của di sản Việt Nam; đồng thời gợi ý địa điểm tham quan tiếp theo.' }
  ],
  exercises: [
    { question: 'Nêu 3 đề mục của văn bản và cho biết nội dung chính của mỗi đề mục.', hints: ['Các cụm từ in đậm đầu đoạn.', 'Mỗi đề mục trả lời một câu hỏi.'], solution: '“Kinh đô nghìn năm” – lịch sử hình thành từ năm 1010 và vai trò trung tâm chính trị qua các triều đại. “Di sản văn hoá thế giới” – UNESCO ghi danh năm 2010 và giá trị nổi bật. “Những điểm tham quan chính” – giới thiệu khu khảo cổ 18 Hoàng Diệu, Đoan Môn, điện Kính Thiên, Cột cờ, D67.' },
    { question: 'Nếu thiết kế một tờ rơi giới thiệu Hoàng thành Thăng Long, em sẽ dùng những phương tiện phi ngôn ngữ nào? Đặt ở đâu?', hints: ['Bản đồ, ảnh, biểu tượng.', 'Bố cục tờ rơi.'], solution: 'Trang đầu: ảnh Đoan Môn hoặc Cột cờ làm ảnh nền, nhan đề lớn. Bên trong: bản đồ khu di tích đánh số các điểm tham quan; ảnh nhỏ rồng đá điện Kính Thiên, hố khảo cổ 18 Hoàng Diệu cạnh phần chữ tương ứng; dòng thời gian 1010 → 2010. Trang cuối: biểu tượng quy định (không chạm hiện vật, không xả rác), giờ mở cửa, cách đi lại.' },
    { question: 'Viết đoạn văn (5 – 7 câu) nêu suy nghĩ của em về trách nhiệm của học sinh với di sản.', hints: ['Từ lời gợi ý cuối văn bản.', 'Việc làm cụ thể.'], solution: 'Ví dụ: Di sản như Hoàng thành Thăng Long là kí ức của cả dân tộc, không thể làm lại nếu bị huỷ hoại. Học sinh chúng ta tuy nhỏ nhưng có thể góp phần gìn giữ di sản bằng những việc cụ thể. Khi tham quan, em đi đúng lối, không chạm vào hiện vật, không khắc tên, không xả rác. Em tìm hiểu lịch sử của di tích trước khi đến để hiểu và trân trọng hơn. Em cũng có thể giới thiệu di sản với bạn bè qua những bài viết, hình ảnh chân thực. Gìn giữ di sản chính là gìn giữ cội nguồn của mình.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Vua Lý Thái Tổ dời đô ra thành Đại La và đặt tên Thăng Long vào năm:', options: ['1010', '1945', '2010', '938'], answer: 0, explain: 'Mốc lịch sử quan trọng.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: UNESCO ghi danh Khu trung tâm Hoàng thành Thăng Long – Hà Nội là Di sản văn hoá thế giới năm 2010.', answer: true, explain: 'Dịp kỉ niệm 1000 năm Thăng Long.' },
    { type: 'short', q: 'Địa chỉ khu khảo cổ trong Hoàng thành: số 18 phố Hoàng … (tên riêng).', answer: ['Diệu', 'Dieu', 'Hoàng Diệu', 'Hoang Dieu'], answerText: 'Diệu (18 Hoàng Diệu)', explain: 'Khu khảo cổ 18 Hoàng Diệu.' },
    { type: 'mcq', q: 'Đặc điểm quan trọng nhất của văn bản thông tin là:', options: ['thông tin chính xác, khách quan', 'hư cấu nhân vật', 'có vần điệu', 'có lời thoại'], answer: 0, explain: 'Mục đích cung cấp thông tin.' },
    { type: 'mcq', q: 'Danh sách gạch đầu dòng trong văn bản dùng để trình bày:', options: ['các điểm tham quan chính', 'lời thoại nhân vật', 'bài thơ', 'câu hỏi trắc nghiệm'], answer: 0, explain: 'Rõ ràng, dễ theo dõi.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Yếu tố biểu cảm trong văn bản thông tin được phép làm sai lệch sự thật để hấp dẫn hơn.', answer: false, explain: 'Chỉ tăng sức hấp dẫn, không làm sai lệch thông tin.' },
    { type: 'short', q: 'Vị vua khai sáng Thiền phái Trúc Lâm ở Yên Tử là Trần … … (tên, hai chữ).', answer: ['Nhân Tông', 'Nhan Tong'], answerText: 'Nhân Tông', explain: 'Vua Trần Nhân Tông.' },
    { type: 'mcq', q: 'Cách kiểm chứng đáng tin cậy nhất cho thông tin về việc UNESCO ghi danh là:', options: ['trang của UNESCO, cổng thông tin Chính phủ', 'một bình luận trên mạng', 'lời kể của người lạ', 'phim hoạt hình'], answer: 0, explain: 'Nguồn chính thống.' }
  ]
});
})();
