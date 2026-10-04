/* Ngữ văn 8 – Ôn tập học kì I (Bài 1 – Bài 5). Ngữ liệu: thơ Nôm cổ (Nguyễn Khuyến, Hồ Xuân Hương – phạm vi công cộng), ca dao, tục ngữ (văn học dân gian) và câu văn do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-8/on-tap-hk1', {
  objectives: [
    'Hệ thống hoá các thể loại đã học ở học kì I: truyện lịch sử, thơ Đường luật, văn bản nghị luận, thơ trào phúng, hài kịch và truyện cười.',
    'Hệ thống hoá kiến thức tiếng Việt: biệt ngữ xã hội, từ địa phương, từ tượng hình – tượng thanh, đảo ngữ, các kiểu đoạn văn, yếu tố Hán Việt, sắc thái nghĩa, câu hỏi tu từ, nghĩa tường minh – hàm ẩn.',
    'Ôn lại các kiểu bài viết, bài nói; vận dụng làm đề kiểm tra cuối học kì I.'
  ],
  intro: 'Năm bài học của học kì I đưa em đi qua lịch sử, thơ cổ điển, lời sông núi và những tiếng cười. Bài ôn tập này giúp em sắp xếp kiến thức thành một “bản đồ” gọn gàng và luyện tập theo dạng đề kiểm tra.',
  text: {
    title: 'Ngữ liệu luyện tập',
    html: `<div class="poem">Thân em vừa trắng lại vừa tròn,<br>Bảy nổi ba chìm với nước non.<br>Rắn nát mặc dầu tay kẻ nặn,<br>Mà em vẫn giữ tấm lòng son.<br><i>(Hồ Xuân Hương, “Bánh trôi nước”)</i></div>
<p>(2) Rầm! Cánh cửa đóng sập lại. Ngoài hiên, mưa vẫn rả rích, những giọt nước lách tách rơi trên lá chuối. <i>(Câu văn do nhóm biên soạn viết)</i></p>
<p>(3) Chồng người đi ngược về xuôi, / Chồng em ngồi bếp sờ đuôi con mèo. <i>(Ca dao)</i></p>`,
    source: '(1) “Bánh trôi nước” – Hồ Xuân Hương, thơ Nôm cổ, phạm vi công cộng. (2) Câu văn do nhóm biên soạn tự viết. (3) Ca dao (văn học dân gian).'
  },
  steps: [
    { title: 'Bản đồ học kì I', html: `<p>Mỗi bài gắn với một thể loại đọc và một nhóm kiến thức tiếng Việt:</p>`,
      svg: S.mindmap({ center: 'Ngữ văn 8 – HK I', branches: [{ title: 'Bài 1', items: ['Truyện lịch sử', 'Biệt ngữ, từ địa phương'] }, { title: 'Bài 2', items: ['Thơ Đường luật', 'Tượng hình, tượng thanh, đảo ngữ'] }, { title: 'Bài 3', items: ['Văn bản nghị luận', 'Diễn dịch, quy nạp…'] }, { title: 'Bài 4', items: ['Thơ trào phúng', 'Hán Việt, sắc thái nghĩa'] }, { title: 'Bài 5', items: ['Hài kịch, truyện cười', 'Câu hỏi tu từ, hàm ý'] }] }),
      caption: 'Sơ đồ tư duy tổng hợp học kì I.' },
    { title: 'So sánh các thể loại', html: `<table class="tbl"><tr><th>Thể loại</th><th>Đặc điểm nhận biết</th><th>Khi đọc cần chú ý</th></tr>
      <tr><td>Truyện lịch sử</td><td>Nhân vật, sự kiện lịch sử có thật + hư cấu</td><td>Bối cảnh, nhân vật lịch sử, yếu tố hư cấu, ngôn ngữ thời đại</td></tr>
      <tr><td>Thơ Đường luật</td><td>Bát cú (8 câu) / tứ tuyệt (4 câu), 7 chữ; niêm, luật, vần, đối</td><td>Bố cục, phép đối, hình ảnh, tâm trạng</td></tr>
      <tr><td>Văn bản nghị luận</td><td>Luận đề, luận điểm, lí lẽ, bằng chứng</td><td>Cách lập luận, thái độ người viết</td></tr>
      <tr><td>Thơ trào phúng</td><td>Tiếng cười phê phán; mâu thuẫn trào phúng</td><td>Đối tượng, thủ pháp, giọng điệu</td></tr>
      <tr><td>Hài kịch, truyện cười</td><td>Nhân vật hài, xung đột, kết thúc bất ngờ</td><td>Mâu thuẫn gây cười, ý nghĩa phê phán</td></tr></table>` },
    { title: 'Tổng hợp tiếng Việt', html: `<table class="tbl"><tr><th>Kiến thức</th><th>Ghi nhớ nhanh</th><th>Ví dụ</th></tr>
      <tr><td>Biệt ngữ xã hội / từ địa phương</td><td>Dùng trong một nhóm xã hội / một vùng</td><td>“ngỗng” (điểm 2 – học sinh); “má” (mẹ – Nam Bộ)</td></tr>
      <tr><td>Từ tượng hình / tượng thanh</td><td>Gợi hình dáng / mô phỏng âm thanh</td><td>lom khom; róc rách</td></tr>
      <tr><td>Đảo ngữ</td><td>Đảo trật tự thông thường để nhấn mạnh</td><td>“Lác đác bên sông chợ mấy nhà”</td></tr>
      <tr><td>Kiểu đoạn văn</td><td>Vị trí câu chủ đề: đầu / cuối / đầu và cuối / không có</td><td>diễn dịch / quy nạp / phối hợp / song song</td></tr>
      <tr><td>Yếu tố Hán Việt, sắc thái nghĩa</td><td>Nghĩa từng yếu tố; trang trọng – thân mật…</td><td>thiên (trời / nghìn); qua đời – chết</td></tr>
      <tr><td>Câu hỏi tu từ; nghĩa hàm ẩn</td><td>Hỏi mà không để hỏi; nghĩa suy ra từ ngữ cảnh</td><td>“Ai mà chẳng muốn…?”; “Mười một giờ rồi.”</td></tr></table>` },
    { title: 'Các kiểu bài viết, bài nói', html: `<table class="tbl"><tr><th>Bài</th><th>Viết</th><th>Nói và nghe</th></tr>
      <tr><td>1</td><td>Kể lại một chuyến đi (tham quan di tích)</td><td>Giới thiệu ngắn về một cuốn truyện lịch sử</td></tr>
      <tr><td>2</td><td>Phân tích bài thơ Đường luật</td><td>Ý kiến về sản phẩm văn hoá truyền thống</td></tr>
      <tr><td>3</td><td>Nghị luận: con người với cộng đồng, đất nước</td><td>Thảo luận về trách nhiệm với cộng đồng</td></tr>
      <tr><td>4</td><td>Phân tích bài thơ trào phúng</td><td>Ý kiến về ý nghĩa của tiếng cười</td></tr>
      <tr><td>5</td><td>Nghị luận về một thói xấu</td><td>Ý kiến về một thói xấu</td></tr></table>` },
    { title: 'Chiến lược làm bài kiểm tra', html: `<ol><li><b>Đọc hiểu:</b> đọc kĩ ngữ liệu, gạch chân từ khoá của câu hỏi; trả lời đúng trọng tâm, có dẫn chứng.</li><li><b>Tiếng Việt:</b> nêu tên hiện tượng → chỉ ra từ ngữ cụ thể → nêu tác dụng.</li><li><b>Viết:</b> dành 5 phút lập dàn ý; viết đủ ba phần; dành 3 – 5 phút đọc lại, sửa lỗi.</li></ol>
      <div class="box key">Công thức nêu tác dụng: “Biện pháp/từ ngữ … → giúp câu văn/câu thơ … (gợi hình, gợi cảm, nhấn mạnh) → thể hiện … (cảm xúc, thái độ) của tác giả.”</div>` }
  ],
  summary: 'Học kì I gồm năm bài: truyện lịch sử; thơ Đường luật; văn bản nghị luận; thơ trào phúng; hài kịch, truyện cười. Kiến thức tiếng Việt: biệt ngữ xã hội, từ địa phương, từ tượng hình – tượng thanh, đảo ngữ, các kiểu đoạn văn, yếu tố Hán Việt, sắc thái nghĩa, câu hỏi tu từ, nghĩa tường minh – hàm ẩn. Khi làm bài: đọc kĩ, trả lời đúng trọng tâm, nêu tác dụng theo công thức và lập dàn ý trước khi viết.',
  examples: [
    { title: 'Đọc hiểu thơ Đường luật', problem: 'Bài “Bánh trôi nước” viết theo thể thơ nào? Nêu bố cục và chủ đề.', solution: 'Thể thất ngôn tứ tuyệt Đường luật (4 câu, mỗi câu 7 chữ, vần “on” ở cuối câu 1, 2, 4). Bố cục khai – thừa – chuyển – hợp. Chủ đề: qua hình ảnh chiếc bánh trôi, bài thơ ca ngợi vẻ đẹp, phẩm chất son sắt của người phụ nữ và cảm thông với thân phận chìm nổi của họ.' },
    { title: 'Nhận diện từ tượng thanh', problem: 'Tìm từ tượng thanh trong ngữ liệu (2) và nêu tác dụng.', solution: 'Từ tượng thanh: “Rầm”, “rả rích”, “lách tách”. Chúng mô phỏng tiếng cửa đóng mạnh, tiếng mưa kéo dài, tiếng giọt nước rơi trên lá, giúp cảnh vật hiện lên sống động bằng âm thanh; tiếng “rầm” đột ngột đối lập với tiếng mưa rả rích, gợi không khí căng thẳng rồi lặng buồn.' },
    { title: 'Ca dao trào phúng', problem: 'Bài ca dao (3) phê phán điều gì? Bằng nghệ thuật nào?', solution: 'Bài ca dao phê phán những người đàn ông lười biếng, vô tích sự. Nghệ thuật tương phản giữa “chồng người đi ngược về xuôi” và “chồng em ngồi bếp sờ đuôi con mèo”, cùng hình ảnh hài hước, tạo tiếng cười châm biếm.' }
  ],
  exercises: [
    { question: 'Chỉ ra hai lớp nghĩa của câu thơ “Bảy nổi ba chìm với nước non”.', hints: ['Nghĩa thực: cách luộc bánh.', 'Nghĩa ẩn dụ: thân phận người phụ nữ.'], solution: 'Nghĩa thực: khi luộc, bánh trôi lúc chìm lúc nổi trong nồi nước. Nghĩa ẩn dụ: thân phận người phụ nữ xưa long đong, lận đận, chìm nổi giữa cuộc đời (“nước non”).' },
    { question: 'Viết đoạn văn quy nạp (5 – 6 câu) nêu cảm nhận về hình tượng người phụ nữ trong “Bánh trôi nước”; câu chủ đề ở cuối đoạn.', hints: ['Các câu đầu nêu từng ý cụ thể: vẻ đẹp, thân phận, tấm lòng.', 'Câu cuối khái quát, có thể mở đầu bằng “Có thể nói”.'], solution: 'Ví dụ: Người phụ nữ hiện lên với vẻ đẹp trong trắng, đầy đặn qua hình ảnh chiếc bánh “vừa trắng lại vừa tròn”. Cuộc đời của họ lại “bảy nổi ba chìm”, số phận bị định đoạt bởi “tay kẻ nặn”. Thế nhưng, bằng chữ “Mà” đầy kiêu hãnh, họ khẳng định “vẫn giữ tấm lòng son”. Hình ảnh ấy vừa đáng thương vừa đáng trọng. Có thể nói, qua “Bánh trôi nước”, Hồ Xuân Hương đã ca ngợi vẻ đẹp và phẩm chất son sắt của người phụ nữ Việt Nam.' },
    { question: 'Lập dàn ý cho đề: “Nghị luận về thói vô cảm của một số người trong xã hội hiện đại.”', hints: ['Giải thích – biểu hiện – nguyên nhân – tác hại – phân biệt – giải pháp.', 'Chọn bằng chứng gần gũi.'], solution: 'Mở bài: dẫn một tình huống (người bị nạn giữa đường, nhiều người chỉ đứng quay phim), nêu vấn đề. Thân bài: (1) Vô cảm là thờ ơ, dửng dưng trước khó khăn, nỗi đau của người khác. (2) Biểu hiện: thấy người gặp nạn không giúp, thấy bạn bị bắt nạt im lặng, chỉ quan tâm bản thân. (3) Nguyên nhân: lối sống ích kỉ, sợ liên luỵ, mải mê thiết bị điện tử. (4) Tác hại: người gặp nạn thêm đau, xã hội lạnh lẽo, bản thân dần mất lòng nhân ái. (5) Phân biệt với sự thận trọng hợp lí (giúp đỡ an toàn, báo người lớn). (6) Giải pháp: giáo dục lòng nhân ái, bắt đầu từ việc nhỏ. Kết bài: khẳng định, liên hệ bản thân.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Văn bản nào thuộc thể loại thơ trào phúng đã học ở học kì I?', options: ['Tiến sĩ giấy', 'Bánh trôi nước', 'Thu ẩm', 'Nam quốc sơn hà'], answer: 0, explain: '“Tiến sĩ giấy” châm biếm những người hư danh.' },
    { type: 'short', q: 'Thơ thất ngôn bát cú có bao nhiêu câu?', answer: ['8', 'tám'], answerText: '8', explain: '“Bát cú” là tám câu.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Đoạn văn quy nạp có câu chủ đề đứng ở đầu đoạn.', answer: false, explain: 'Câu chủ đề của đoạn quy nạp ở cuối đoạn.' },
    { type: 'mcq', q: 'Từ nào là từ tượng thanh trong ngữ liệu (2)?', options: ['lách tách', 'cánh cửa', 'lá chuối', 'ngoài hiên'], answer: 0, explain: 'Mô phỏng tiếng giọt nước.' },
    { type: 'mcq', q: 'Câu “Lác đác bên sông chợ mấy nhà” sử dụng biện pháp tu từ:', options: ['đảo ngữ', 'nói quá', 'hoán dụ', 'nói giảm nói tránh'], answer: 0, explain: 'Đảo “lác đác” lên đầu câu.' },
    { type: 'short', q: 'Yếu tố Hán Việt “sơn” trong “sơn hà” có nghĩa là gì?', answer: ['núi'], answerText: 'núi', explain: 'Sơn hà: núi sông.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hài kịch “Trưởng giả học làm sang” phê phán thói học đòi, sĩ diện.', answer: true, explain: 'Qua nhân vật ông Giuốc-đanh.' },
    { type: 'mcq', q: 'Trong văn bản nghị luận, sự việc, số liệu cụ thể để chứng minh cho luận điểm gọi là:', options: ['bằng chứng', 'luận đề', 'lí lẽ', 'kết luận'], answer: 0, explain: 'Bằng chứng có tính khách quan, kiểm chứng được.' }
  ]
});
})();
