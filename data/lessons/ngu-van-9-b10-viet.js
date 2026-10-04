/* Ngữ văn 9 – Bài 10. Thách thức thứ hai: Quảng bá giá trị của sách – viết bài quảng cáo sách dưới hình thức văn bản đa phương thức. Ngữ liệu: bài quảng cáo mẫu cho “Truyện Kiều” do nhóm biên soạn tự viết; các câu thơ trích “Truyện Kiều” (Nguyễn Du) thuộc phạm vi công cộng. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-9/b10-viet', {
  objectives: [
    'Viết được bài quảng cáo một cuốn sách dưới hình thức văn bản đa phương thức: kết hợp chữ, hình ảnh, màu sắc, bố cục, biểu tượng.',
    'Làm nổi bật giá trị của cuốn sách bằng thông tin chính xác và lời lẽ hấp dẫn, trung thực.',
    'Tôn trọng bản quyền: ghi rõ tên sách, tác giả; chỉ trích dẫn ngắn, đúng nguồn; dùng hình ảnh tự vẽ hoặc được phép sử dụng.'
  ],
  intro: 'Một cuốn sách hay cũng cần được “giới thiệu” để đến với người đọc. Một tấm áp phích đẹp, một câu khẩu hiệu ấn tượng, một câu thơ trích dẫn đúng lúc có thể khiến bạn bè tò mò mở sách ra đọc.',
  text: {
    title: 'Bài quảng cáo mẫu (dạng áp phích): “Truyện Kiều – hơn hai thế kỉ vẫn làm rung động lòng người”',
    html: `<p><b>[Khẩu hiệu – chữ lớn, màu đỏ trầm]</b> ĐỌC KIỀU – ĐỂ HIỂU MỘT KIẾP NGƯỜI, THƯƠNG MỘT KIẾP NGƯỜI</p>
<p><b>[Hình ảnh – tranh tự vẽ]</b> Thuý Kiều ngồi bên lầu, nhìn ra cửa bể chiều hôm; nền màu xanh nhạt gợi “chân mây mặt đất một màu xanh xanh”.</p>
<p><b>[Thông tin sách – khung bên trái]</b></p>
<ul><li>Tác phẩm: “Truyện Kiều” (“Đoạn trường tân thanh”)</li><li>Tác giả: Nguyễn Du (1765 – 1820)</li><li>Thể loại: truyện thơ Nôm, thể lục bát</li><li>Độ dài: 3254 câu thơ</li></ul>
<p><b>[Nội dung – khung giữa]</b> Câu chuyện về Thuý Kiều – người con gái tài sắc vẹn toàn – bán mình chuộc cha, trải qua mười lăm năm lưu lạc đầy đau khổ. Một tác phẩm kết tinh tinh hoa tiếng Việt và tấm lòng nhân đạo bao la của Nguyễn Du.</p>
<p><b>[Trích dẫn – chữ nghiêng, khung giấy dó]</b></p>
<div class="poem">Buồn trông cửa bể chiều hôm,<br>Thuyền ai thấp thoáng cánh buồm xa xa?</div>
<p><b>[Vì sao nên đọc? – ba biểu tượng]</b> (biểu tượng quyển sách) Tiếng Việt tinh tế, giàu đẹp – (biểu tượng trái tim) Tấm lòng thương người – (biểu tượng la bàn) Bài học về nghị lực và nhân cách.</p>
<p><b>[Lời kêu gọi – cuối áp phích]</b> Mượn ngay tại thư viện trường! Góc “Kiều” mở cửa giờ ra chơi mỗi thứ Năm.</p>`,
    source: 'Bài quảng cáo do nhóm biên soạn tự viết; câu thơ trích “Truyện Kiều” (Nguyễn Du) thuộc phạm vi công cộng; hình ảnh chỉ được mô tả (học sinh tự vẽ khi thực hành).'
  },
  steps: [
    { title: 'Văn bản đa phương thức là gì?', html: `<ul><li>Là văn bản kết hợp <b>nhiều phương thức</b>: ngôn ngữ (chữ), hình ảnh, màu sắc, bố cục, biểu tượng, có thể cả âm thanh, video.</li>
      <li>Các phương thức <b>phối hợp</b> để truyền tải thông điệp nhanh, ấn tượng.</li>
      <li>Bài quảng cáo sách: áp phích, tờ rơi, bưu thiếp, video ngắn, bài đăng trên bảng tin lớp.</li></ul>`,
      svg: S.mindmap({ center: 'Quảng cáo sách', branches: [{ title: 'Ngôn ngữ', items: ['Khẩu hiệu', 'Thông tin, trích dẫn'] }, { title: 'Hình ảnh', items: ['Tranh tự vẽ', 'Bìa sách'] }, { title: 'Màu sắc, bố cục', items: ['Khung, cỡ chữ', 'Màu chủ đạo'] }, { title: 'Biểu tượng', items: ['Icon ý nghĩa', 'Lời kêu gọi'] }] }),
      caption: 'Các phương thức trong bài quảng cáo sách.' },
    { title: 'Nội dung cần có', html: `<table class="tbl"><tr><th>Thành phần</th><th>Yêu cầu</th><th>Trong bài mẫu</th></tr>
      <tr><td>Khẩu hiệu</td><td>Ngắn, ấn tượng, nêu giá trị</td><td>“Đọc Kiều – để hiểu… thương một kiếp người”</td></tr>
      <tr><td>Thông tin sách</td><td>Chính xác: tên, tác giả, thể loại</td><td>Khung bên trái</td></tr>
      <tr><td>Nội dung, giá trị</td><td>Ngắn gọn, không “tiết lộ” hết</td><td>Khung giữa</td></tr>
      <tr><td>Trích dẫn</td><td>Ngắn, đúng nguồn</td><td>Hai câu thơ</td></tr>
      <tr><td>Lời kêu gọi</td><td>Cụ thể: mượn ở đâu, khi nào</td><td>Thư viện trường</td></tr></table>` },
    { title: 'Quy trình thực hiện', html: `<p>Từ ý tưởng đến sản phẩm:</p>`,
      svg: S.flow({ w: 620, items: [{ title: 'Chọn sách', text: 'Đã đọc, yêu thích' }, { title: 'Tìm giá trị', text: '2 – 3 điểm nổi bật' }, { title: 'Phác bố cục', text: 'Chữ + hình + màu' }, { title: 'Hoàn thiện', text: 'Kiểm tra, trưng bày' }] }),
      caption: 'Quy trình làm bài quảng cáo sách.' },
    { title: 'Nguyên tắc trung thực và bản quyền', html: `<ul><li>Quảng cáo hấp dẫn nhưng <b>không phóng đại sai sự thật</b>.</li>
      <li>Ghi rõ tên sách, tác giả; trích dẫn ngắn và ghi nguồn.</li>
      <li>Dùng hình ảnh tự vẽ, tự chụp hoặc được phép sử dụng; không lấy tuỳ tiện ảnh trên mạng.</li></ul>
      <div class="box key">Một bài quảng cáo sách tốt khiến người xem muốn đọc – và khi đọc, họ thấy đúng như lời giới thiệu.</div>` },
    { title: 'Bảng kiểm', html: `<table class="tbl"><tr><th>Tiêu chí</th><th>Đạt?</th></tr>
      <tr><td>Khẩu hiệu ngắn, ấn tượng</td><td>☐</td></tr>
      <tr><td>Thông tin sách chính xác</td><td>☐</td></tr>
      <tr><td>Chữ, hình, màu, bố cục phối hợp hài hoà</td><td>☐</td></tr>
      <tr><td>Trích dẫn ngắn, đúng nguồn; hình ảnh hợp lệ</td><td>☐</td></tr>
      <tr><td>Có lời kêu gọi cụ thể</td><td>☐</td></tr></table>` }
  ],
  summary: 'Bài quảng cáo sách dạng văn bản đa phương thức kết hợp ngôn ngữ (khẩu hiệu, thông tin, trích dẫn), hình ảnh, màu sắc, bố cục, biểu tượng để giới thiệu giá trị cuốn sách. Cần: khẩu hiệu ấn tượng, thông tin chính xác, nội dung ngắn gọn, trích dẫn đúng nguồn, lời kêu gọi cụ thể; trung thực, không phóng đại; tôn trọng bản quyền hình ảnh và văn bản.',
  examples: [
    { title: 'Phân tích khẩu hiệu', problem: 'Khẩu hiệu “Đọc Kiều – để hiểu một kiếp người, thương một kiếp người” hay ở điểm nào?', solution: 'Ngắn gọn, có cấu trúc điệp “một kiếp người” tạo nhịp; nêu đúng hai giá trị lớn của tác phẩm: giá trị hiện thực (hiểu số phận con người) và giá trị nhân đạo (thương con người). Người xem nắm ngay vì sao nên đọc.' },
    { title: 'Phối hợp chữ và hình', problem: 'Hình ảnh Kiều nhìn ra cửa bể có quan hệ thế nào với câu thơ trích dẫn?', solution: 'Hình ảnh minh hoạ trực tiếp cho câu thơ “Buồn trông cửa bể chiều hôm…”, giúp người xem vừa đọc vừa hình dung, cảm nhận được nỗi buồn cô đơn của Kiều. Chữ và hình bổ sung cho nhau, tăng sức gợi.' },
    { title: 'Lời kêu gọi cụ thể', problem: 'Vì sao lời kêu gọi cần nêu rõ nơi mượn sách và thời gian?', solution: 'Để người xem biết ngay phải làm gì tiếp theo (đến thư viện trường, góc “Kiều” giờ ra chơi thứ Năm). Lời kêu gọi chung chung như “Hãy đọc sách!” ít tạo ra hành động thực tế.' }
  ],
  exercises: [
    { question: 'Viết 3 khẩu hiệu quảng cáo cho một cuốn sách em đã đọc (hoặc “Lục Vân Tiên”).', hints: ['Ngắn, dưới 12 chữ.', 'Nêu giá trị nổi bật.'], solution: 'Ví dụ cho “Lục Vân Tiên”: (1) “Thấy việc nghĩa – hãy ra tay!” (2) “Lục Vân Tiên – bản anh hùng ca của lòng nhân nghĩa.” (3) “Đọc Vân Tiên, học làm người tử tế.”' },
    { question: 'Phác thảo bố cục (bằng lời) một áp phích quảng cáo sách khổ A4.', hints: ['Chia vùng: trên – giữa – dưới.', 'Ghi rõ nội dung, màu, hình ở từng vùng.'], solution: 'Ví dụ: Vùng trên (1/4 trang): khẩu hiệu chữ lớn, màu nổi bật trên nền tối. Vùng giữa (1/2 trang): bên trái là hình tự vẽ minh hoạ nhân vật; bên phải là khung thông tin sách và 2 – 3 câu giới thiệu nội dung, một câu trích ngắn. Vùng dưới (1/4 trang): ba biểu tượng “Vì sao nên đọc?”, lời kêu gọi mượn sách, tên người thực hiện.' },
    { question: 'Nhận xét và sửa bài quảng cáo sau: “Cuốn sách hay nhất thế giới! Ai không đọc sẽ hối hận cả đời!”', hints: ['Có phóng đại không?', 'Thiếu thông tin gì?'], solution: 'Lỗi: phóng đại, thiếu trung thực (“hay nhất thế giới”, “hối hận cả đời”); không có tên sách, tác giả, nội dung, giá trị cụ thể, lời kêu gọi rõ ràng. Sửa: “Những tấm lòng cao cả (Edmondo De Amicis) – cuốn nhật kí học trò khiến bao thế hệ rưng rưng. Đọc để biết ơn thầy cô, thương cha mẹ và quý bạn bè hơn. Có tại thư viện trường – kệ Văn học nước ngoài.”' }
  ],
  quiz: [
    { type: 'mcq', q: 'Văn bản đa phương thức là văn bản:', options: ['kết hợp chữ, hình ảnh, màu sắc, bố cục, biểu tượng…', 'chỉ có chữ', 'chỉ có hình ảnh', 'chỉ có âm thanh'], answer: 0, explain: 'Nhiều phương thức phối hợp.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Bài quảng cáo sách được phép phóng đại sai sự thật để thu hút người đọc.', answer: false, explain: 'Cần trung thực.' },
    { type: 'short', q: 'Câu ngắn, ấn tượng, nêu giá trị nổi bật đặt ở đầu áp phích gọi là khẩu … (một chữ).', answer: ['hiệu', 'hieu'], answerText: 'hiệu', explain: 'khẩu hiệu.' },
    { type: 'mcq', q: 'Theo bài mẫu, “Truyện Kiều” được viết theo thể thơ:', options: ['lục bát', 'song thất lục bát', 'tám chữ', 'thất ngôn bát cú'], answer: 0, explain: 'Truyện thơ Nôm lục bát.' },
    { type: 'mcq', q: 'Hình ảnh dùng trong áp phích nên là:', options: ['tự vẽ, tự chụp hoặc được phép sử dụng', 'lấy tuỳ ý trên mạng', 'không cần ghi nguồn', 'ảnh không liên quan'], answer: 0, explain: 'Tôn trọng bản quyền.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Lời kêu gọi cụ thể giúp người xem biết phải làm gì tiếp theo.', answer: true, explain: 'Ví dụ: mượn ở thư viện trường.' },
    { type: 'short', q: 'Tên khác của “Truyện Kiều” là “Đoạn trường tân …” (một chữ).', answer: ['thanh', 'Thanh'], answerText: 'thanh', explain: '“Đoạn trường tân thanh”.' },
    { type: 'mcq', q: 'Phần nội dung trong bài quảng cáo sách nên:', options: ['ngắn gọn, gợi tò mò, không kể hết', 'kể toàn bộ kết thúc', 'chép nguyên chương đầu', 'bỏ trống'], answer: 0, explain: 'Khơi gợi mong muốn đọc.' }
  ]
});
})();
