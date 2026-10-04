/* Ngữ văn 8 – Bài 10. Về đích: Ngày hội với sách. Ngữ liệu: kế hoạch tổ chức ngày hội và lời dẫn chương trình mẫu do nhóm biên soạn tự viết (tên lớp, người là giả định); các tác phẩm được nhắc tới đều thuộc phạm vi công cộng hoặc là văn học dân gian. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-8/b10-ve-dich', {
  objectives: [
    'Biết lập kế hoạch và tham gia tổ chức một ngày hội với sách: mục đích, thời gian, địa điểm, hoạt động, phân công.',
    'Trình bày, giới thiệu được sản phẩm đọc – viết (bài giới thiệu sách, sản phẩm sáng tạo) trước tập thể; dẫn chương trình mạch lạc.',
    'Biết lắng nghe, nhận xét, đánh giá sản phẩm của bạn theo tiêu chí; tự đánh giá hành trình đọc cả năm.',
    'Lan toả tình yêu sách và văn hoá đọc trong cộng đồng.'
  ],
  intro: 'Sau hai thách thức, cả lớp đã có những trang nhật kí đọc, những bài giới thiệu sách và sản phẩm sáng tạo. Đã đến lúc “về đích” bằng một ngày hội với sách – nơi mọi người cùng khoe sách, kể sách, diễn sách và trao đổi sách.',
  text: {
    title: 'Kế hoạch và lời dẫn “Ngày hội Sách – Người bạn đồng hành” (mẫu)',
    html: `<p><b>KẾ HOẠCH NGÀY HỘI SÁCH – LỚP 8A</b></p>
<p><b>1. Mục đích:</b> chia sẻ sản phẩm đọc – viết; lan toả văn hoá đọc trong lớp và khối 8.</p>
<p><b>2. Thời gian, địa điểm:</b> tiết Hoạt động trải nghiệm, sáng thứ Bảy tuần 34; thư viện trường.</p>
<p><b>3. Các hoạt động:</b></p>
<table class="tbl"><tr><th>Thời lượng</th><th>Hoạt động</th><th>Phụ trách</th></tr>
<tr><td>10 phút</td><td>Khai mạc, giới thiệu chương trình</td><td>Dẫn chương trình</td></tr>
<tr><td>20 phút</td><td>Triển lãm “Góc sách của tôi”: bìa sách tự vẽ, áp phích, nhật kí đọc</td><td>Tổ 1</td></tr>
<tr><td>15 phút</td><td>Ba phút giới thiệu một cuốn sách</td><td>Tổ 2</td></tr>
<tr><td>15 phút</td><td>Sân khấu hoá: hoạt cảnh từ “Trưởng giả học làm sang”</td><td>Tổ 3</td></tr>
<tr><td>10 phút</td><td>Đố vui văn học; trao đổi sách “Một cũ đổi một mới”</td><td>Tổ 4</td></tr>
<tr><td>5 phút</td><td>Tổng kết, bình chọn sản phẩm ấn tượng</td><td>Lớp trưởng, cô giáo</td></tr></table>
<p><b>4. Chuẩn bị:</b> mỗi bạn mang ít nhất một cuốn sách để trao đổi; các tổ nộp kịch bản trước ba ngày.</p>
<p><b>Lời dẫn mở đầu (mẫu):</b> “Kính thưa cô giáo, thưa các bạn! Có người nói: mỗi cuốn sách là một người bạn không bao giờ bỏ ta đi. Suốt năm học vừa qua, lớp 8A đã cùng nhau đi qua những trang Hoàng Lê nhất thống chí, những câu thơ của Nguyễn Khuyến, tiếng cười của Mô-li-e, chiếc lá của O. Hen-ri… Hôm nay, ‘Ngày hội Sách – Người bạn đồng hành’ chính thức bắt đầu! Mở màn là triển lãm ‘Góc sách của tôi’ của Tổ 1.”</p>`,
    source: 'Kế hoạch và lời dẫn do nhóm biên soạn tự viết (tên lớp, thời gian là giả định). Các tác phẩm được nhắc tên (Hoàng Lê nhất thống chí, thơ Nguyễn Khuyến, Mô-li-e, O. Hen-ri) đều thuộc phạm vi công cộng.'
  },
  steps: [
    { title: 'Lập kế hoạch ngày hội', html: `<p>Một bản kế hoạch cần trả lời: <b>Để làm gì? Khi nào, ở đâu? Có những hoạt động gì? Ai phụ trách? Cần chuẩn bị gì?</b></p>`,
      svg: S.flow({ w: 620, items: [{ title: 'Mục đích', text: 'Chia sẻ, lan toả' }, { title: 'Thời gian', text: 'Địa điểm' }, { title: 'Hoạt động', text: 'Chương trình' }, { title: 'Phân công', text: 'Các tổ' }, { title: 'Chuẩn bị', text: 'Sản phẩm, sách' }] }),
      caption: 'Các bước lập kế hoạch ngày hội với sách.' },
    { title: 'Các hoạt động gợi ý', html: `<p>Ngày hội có thể kết hợp nhiều hoạt động đọc – viết – nói – nghe:</p>`,
      svg: S.mindmap({ center: 'Ngày hội với sách', branches: [{ title: 'Triển lãm', items: ['Bìa sách tự vẽ', 'Nhật kí đọc'] }, { title: 'Giới thiệu sách', items: ['Ba phút một cuốn', 'Video ngắn'] }, { title: 'Sân khấu hoá', items: ['Hoạt cảnh', 'Đọc diễn cảm'] }, { title: 'Giao lưu', items: ['Đố vui văn học', 'Trao đổi sách'] }] }),
      caption: 'Sơ đồ các hoạt động của ngày hội.' },
    { title: 'Dẫn chương trình và trình bày', html: `<ul><li><b>Người dẫn:</b> chào hỏi, giới thiệu mục đích, nối các tiết mục bằng lời dẫn ngắn gọn, gợi cảm xúc; giữ đúng thời gian.</li>
      <li><b>Người trình bày:</b> nói rõ, có điểm nhấn; nhìn người nghe; dùng sản phẩm minh hoạ (bìa sách, áp phích); kết thúc bằng lời mời đọc.</li>
      <li><b>Sân khấu hoá:</b> chỉ dùng đoạn tác phẩm được phép (văn học dân gian, tác phẩm thuộc phạm vi công cộng) hoặc kịch bản tự viết dựa trên tóm tắt.</li></ul>` },
    { title: 'Lắng nghe, nhận xét và bình chọn', html: `<table class="tbl"><tr><th>Tiêu chí bình chọn</th><th>Điểm (1 – 5)</th></tr>
      <tr><td>Nội dung đúng với tác phẩm, có cảm nhận riêng</td><td>…</td></tr>
      <tr><td>Hình thức hấp dẫn, sáng tạo</td><td>…</td></tr>
      <tr><td>Cách trình bày tự tin, rõ ràng</td><td>…</td></tr>
      <tr><td>Khơi gợi mong muốn đọc sách ở người nghe</td><td>…</td></tr></table>
      <p>Khi nhận xét: nêu điểm mạnh trước, góp ý cụ thể, lời lẽ tôn trọng.</p>` },
    { title: 'Tự đánh giá hành trình đọc cả năm', html: `<ul><li>Năm nay em đã đọc bao nhiêu cuốn sách? Cuốn nào em thích nhất, vì sao?</li>
      <li>Kĩ năng đọc nào của em đã tiến bộ (tóm tắt, phân tích nhân vật, đọc thơ, đọc văn bản thông tin…)?</li>
      <li>Kế hoạch đọc trong kì nghỉ hè: tên sách, mục tiêu, số trang mỗi ngày.</li></ul>
      <div class="box key">“Về đích” không phải là kết thúc: mỗi ngày hội sách là điểm xuất phát cho hành trình đọc tiếp theo.</div>` }
  ],
  summary: 'Ngày hội với sách là hoạt động tổng kết hành trình đọc: lập kế hoạch (mục đích, thời gian, địa điểm, hoạt động, phân công, chuẩn bị); tổ chức triển lãm, giới thiệu sách, sân khấu hoá, đố vui, trao đổi sách; dẫn chương trình mạch lạc; trình bày tự tin; nhận xét, bình chọn theo tiêu chí; tự đánh giá và lập kế hoạch đọc tiếp.',
  examples: [
    { title: 'Nhận xét bản kế hoạch mẫu', problem: 'Bản kế hoạch ngày hội của lớp 8A đã đủ các nội dung cần thiết chưa?', solution: 'Bản kế hoạch có đủ: mục đích (chia sẻ sản phẩm, lan toả văn hoá đọc); thời gian, địa điểm (thứ Bảy tuần 34, thư viện); các hoạt động kèm thời lượng và người phụ trách; phần chuẩn bị (mang sách trao đổi, nộp kịch bản trước). Tổng thời lượng 75 phút, phân công rõ cho bốn tổ nên dễ thực hiện.' },
    { title: 'Phân tích lời dẫn mở đầu', problem: 'Lời dẫn mở đầu có những ưu điểm gì?', solution: 'Lời dẫn chào hỏi lịch sự; mở bằng một câu nói hay về sách để tạo cảm xúc; điểm lại các tác phẩm đã học trong năm, gắn ngày hội với hành trình đọc của lớp; tuyên bố khai mạc và chuyển ngay sang tiết mục đầu tiên. Lời dẫn ngắn gọn, mạch lạc, giàu cảm xúc.' },
    { title: 'Viết lời dẫn chuyển tiết mục', problem: 'Viết lời dẫn chuyển từ phần “Ba phút giới thiệu một cuốn sách” sang hoạt cảnh của Tổ 3.', solution: 'Ví dụ: “Cảm ơn các bạn Tổ 2 đã đưa chúng ta đi qua ba cuốn sách thật hấp dẫn! Còn bây giờ, xin mời các bạn cùng trở về nước Pháp thế kỉ XVII, gặp một ông trưởng giả muốn làm quý tộc đến mức… tức cười. Xin một tràng pháo tay cho hoạt cảnh ‘Trưởng giả học làm sang’ của Tổ 3!”' }
  ],
  exercises: [
    { question: 'Lập kế hoạch ngắn cho một hoạt động trong ngày hội sách mà tổ em phụ trách.', hints: ['Nêu tên hoạt động, mục đích, thời lượng.', 'Phân công cụ thể từng bạn, liệt kê đồ dùng cần chuẩn bị.'], solution: 'Ví dụ: Hoạt động “Đố vui văn học” (10 phút). Mục đích: ôn lại tác phẩm đã học một cách vui vẻ. Nội dung: 10 câu hỏi về tác giả, nhân vật, chi tiết (VD: “Ai là tác giả bài ‘Thu ẩm’?”). Phân công: Nam soạn câu hỏi, Mai làm trình chiếu, Hùng dẫn trò chơi, Linh chuẩn bị quà nhỏ (bookmark tự làm). Chuẩn bị: máy chiếu, chuông, bảng điểm.' },
    { question: 'Soạn một bài nói “Ba phút giới thiệu một cuốn sách” (khoảng 150 – 200 chữ).', hints: ['Mở: gây chú ý; thân: thông tin, nội dung, điểm đặc sắc; kết: lời mời đọc.', 'Không tiết lộ hết kết thúc.'], solution: 'Ví dụ: “Chào các bạn! Nếu một ngày tỉnh dậy, bạn thấy mình ở một hòn đảo không bóng người, bạn sẽ làm gì? Đó là câu hỏi mà Rô-bin-xơn Cru-xô – nhân vật trong tiểu thuyết cùng tên của nhà văn Anh Đa-ni-en Đi-phô, ra đời năm 1719 – phải trả lời. Sau vụ đắm tàu, anh chỉ còn vài dụng cụ vớt được. Vậy mà anh dựng nhà, làm gốm, trồng lúa, nuôi dê, khắc vạch đếm từng ngày. Điều mình thích nhất là cách anh chống lại nỗi cô đơn: anh ghi nhật kí, liệt kê điều tốt bên cạnh điều xấu để tự vực dậy. Cuối cùng anh có được cứu không, và ai sẽ trở thành người bạn đồng hành của anh? Mời các bạn tự khám phá. Mình tin cuốn sách sẽ khiến bạn thấy những khó khăn của mình nhỏ lại. Xin cảm ơn!”' },
    { question: 'Viết đoạn văn (5 – 7 câu) tự đánh giá hành trình đọc năm học lớp 8 của em và kế hoạch đọc hè.', hints: ['Nêu số sách, cuốn yêu thích, kĩ năng tiến bộ.', 'Kế hoạch hè: tên sách, mục tiêu, thời lượng.'], solution: 'Ví dụ: Năm lớp 8, em đã đọc sáu cuốn sách, nhiều nhất từ trước tới nay. Em thích nhất “Không gia đình” vì cuốn sách cho em hiểu giá trị của tình thân. Nhờ ghi nhật kí đọc, em tóm tắt nhanh hơn và biết đặt câu hỏi khi đọc. Em vẫn còn hay bỏ dở những cuốn sách dày. Mùa hè này, em đặt mục tiêu đọc “Rô-bin-xơn Cru-xô” và một tập ca dao, mỗi ngày 20 trang trước khi ngủ. Em sẽ viết một bài giới thiệu sách để chia sẻ với lớp vào đầu năm học mới.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Nội dung nào cần có trong kế hoạch ngày hội sách?', options: ['Mục đích, thời gian, địa điểm, hoạt động, phân công', 'Chỉ cần tên ngày hội', 'Danh sách bạn vắng mặt', 'Điểm kiểm tra của từng bạn'], answer: 0, explain: 'Kế hoạch trả lời: làm gì, khi nào, ở đâu, ai làm.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Người dẫn chương trình có nhiệm vụ nối các tiết mục bằng lời dẫn ngắn gọn và giữ đúng thời gian.', answer: true, explain: 'Vai trò của người dẫn.' },
    { type: 'short', q: 'Hoạt động biến một đoạn tác phẩm thành hoạt cảnh biểu diễn gọi là gì (“sân khấu …”)?', answer: ['sân khấu hoá', 'sân khấu hóa', 'san khau hoa', 'hoá', 'hóa'], answerText: 'sân khấu hoá', explain: 'VD: hoạt cảnh “Trưởng giả học làm sang”.' },
    { type: 'mcq', q: 'Khi nhận xét sản phẩm của bạn, em nên:', options: ['nêu điểm mạnh trước, góp ý cụ thể, tôn trọng', 'chỉ nêu lỗi', 'chê trước lớp cho vui', 'không nhận xét gì'], answer: 0, explain: 'Nhận xét mang tính xây dựng.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: “Về đích” nghĩa là hành trình đọc đã kết thúc, không cần đọc thêm.', answer: false, explain: 'Là điểm xuất phát cho hành trình đọc tiếp theo.' },
    { type: 'mcq', q: 'Hoạt động “Một cũ đổi một mới” trong ngày hội là:', options: ['trao đổi sách giữa các bạn', 'bán sách lấy tiền', 'vứt sách cũ đi', 'chép lại sách cũ'], answer: 0, explain: 'Giúp sách được đọc tiếp.' },
    { type: 'short', q: 'Tên hoạt động triển lãm của Tổ 1 trong kế hoạch mẫu: “Góc sách của …”', answer: ['tôi', 'toi'], answerText: 'tôi', explain: '“Góc sách của tôi”.' },
    { type: 'mcq', q: 'Tiêu chí nào quan trọng nhất khi bình chọn bài giới thiệu sách?', options: ['Đúng với tác phẩm, có cảm nhận riêng, khơi gợi mong muốn đọc', 'Nói thật nhanh', 'Dùng thật nhiều hiệu ứng', 'Kể hết kết thúc'], answer: 0, explain: 'Mục đích là lan toả việc đọc.' }
  ]
});
})();
