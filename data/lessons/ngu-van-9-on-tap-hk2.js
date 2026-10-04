/* Ngữ văn 9 – Ôn tập học kì II (Bài 6 – Bài 10). Ngữ liệu: ca dao (văn học dân gian); đoạn truyện và đoạn văn thông tin do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-9/on-tap-hk2', {
  objectives: [
    'Hệ thống hoá các thể loại đã học ở học kì II: truyện trinh thám, thơ sáu chữ – bảy chữ – tám chữ, văn bản nghị luận xã hội, văn bản thông tin; đọc sách mở rộng.',
    'Hệ thống hoá kiến thức tiếng Việt: câu đơn – câu ghép, phương tiện nối vế câu ghép, nghĩa của từ và phát triển từ vựng, so sánh – nhân hoá, tên viết tắt tổ chức quốc tế, biến đổi và mở rộng cấu trúc câu.',
    'Ôn lại các kiểu bài viết, bài nói; vận dụng làm đề kiểm tra cuối học kì II và chuẩn bị thi vào lớp 10.'
  ],
  intro: 'Học kì II đưa em giải mã những bí mật, lắng nghe hồn thơ muôn điệu, tiếng nói của lương tri, đi và suy ngẫm về di sản, rồi khép lại bằng hành trình đọc sách. Hãy hệ thống lại tất cả – đây cũng là hành trang cho kì thi vào lớp 10.',
  text: {
    title: 'Ngữ liệu luyện tập',
    html: `<div class="poem">Đường vô xứ Nghệ quanh quanh,<br>Non xanh nước biếc như tranh hoạ đồ.<br><i>(Ca dao)</i></div>
<p>(2) Chiếc chìa khoá biến mất ngay trước giờ kiểm tra. Minh không vội kết luận; cậu quan sát kĩ bàn giáo viên. Vì trên mặt bàn còn vệt phấn hình bàn tay nhỏ nên Minh đoán người cầm chìa khoá là một bạn trực nhật vừa lau bảng. <i>(Đoạn truyện do nhóm biên soạn viết)</i></p>
<p>(3) Văn Miếu – Quốc Tử Giám được nhiều thế hệ học sinh xem là biểu tượng của truyền thống hiếu học. Những tấm bia tiến sĩ ở đây đã được Tổ chức Giáo dục, Khoa học và Văn hoá Liên hợp quốc (UNESCO) công nhận là Di sản tư liệu thuộc Chương trình Ký ức Thế giới. <i>(Đoạn văn do nhóm biên soạn viết)</i></p>`,
    source: '(1) Ca dao (văn học dân gian). (2), (3) Đoạn văn do nhóm biên soạn tự viết.'
  },
  steps: [
    { title: 'Bản đồ học kì II', html: `<p>Mỗi bài gắn với một thể loại đọc và một nhóm kiến thức tiếng Việt:</p>`,
      svg: S.mindmap({ center: 'Ngữ văn 9 – HK II', branches: [{ title: 'Bài 6', items: ['Truyện trinh thám', 'Câu đơn, câu ghép'] }, { title: 'Bài 7', items: ['Thơ 6, 7, 8 chữ', 'Từ vựng, so sánh'] }, { title: 'Bài 8', items: ['Nghị luận xã hội', 'Tên viết tắt'] }, { title: 'Bài 9', items: ['Văn bản thông tin', 'Biến đổi câu'] }, { title: 'Bài 10', items: ['Đọc sách', 'Quảng bá sách'] }] }),
      caption: 'Bản đồ kiến thức học kì II.' },
    { title: 'So sánh các thể loại', html: `<table class="tbl"><tr><th>Thể loại</th><th>Đặc điểm nhận biết</th><th>Khi đọc cần chú ý</th></tr>
      <tr><td>Truyện trinh thám</td><td>Vụ án, thám tử, nghi phạm, manh mối, lời giải</td><td>Chuỗi suy luận, chi tiết gây nhiễu</td></tr>
      <tr><td>Thơ 6, 7, 8 chữ</td><td>Số tiếng mỗi dòng; nhịp, vần linh hoạt</td><td>Hình ảnh, biện pháp tu từ, cảm xúc</td></tr>
      <tr><td>Nghị luận xã hội</td><td>Vấn đề đời sống; luận đề, luận điểm, bằng chứng</td><td>Quan điểm, thái độ người viết</td></tr>
      <tr><td>Văn bản thông tin</td><td>Thông tin khách quan; đề mục; phương tiện phi ngôn ngữ</td><td>Cách triển khai, độ tin cậy</td></tr></table>` },
    { title: 'Tổng hợp tiếng Việt', html: `<table class="tbl"><tr><th>Kiến thức</th><th>Ghi nhớ nhanh</th><th>Ví dụ</th></tr>
      <tr><td>Câu ghép</td><td>≥ 2 cụm C – V; đẳng lập / chính phụ</td><td>“Vì… nên…” ở ngữ liệu (2)</td></tr>
      <tr><td>Phát triển từ vựng</td><td>Nghĩa mới; từ mới (tạo mới, mượn)</td><td>ngân hàng đề; cư dân mạng</td></tr>
      <tr><td>So sánh, nhân hoá</td><td>Đối chiếu / tả vật như người</td><td>“như tranh hoạ đồ”</td></tr>
      <tr><td>Tên viết tắt</td><td>Lần đầu ghi tên đầy đủ + (viết tắt)</td><td>UNESCO ở ngữ liệu (3)</td></tr>
      <tr><td>Biến đổi câu</td><td>Chủ động ↔ bị động; tách, gộp; mở rộng</td><td>“được… xem là” ở (3)</td></tr></table>` },
    { title: 'Các kiểu bài viết, bài nói', html: `<table class="tbl"><tr><th>Bài</th><th>Viết</th><th>Nói và nghe</th></tr>
      <tr><td>6</td><td>Truyện có yếu tố trinh thám</td><td>Kể chuyện tưởng tượng</td></tr>
      <tr><td>7</td><td>Làm thơ tám chữ; đoạn văn cảm nghĩ</td><td>Thảo luận vấn đề gợi từ tác phẩm</td></tr>
      <tr><td>8</td><td>Nghị luận vấn đề cần giải quyết</td><td>Ý kiến về sự việc thời sự</td></tr>
      <tr><td>9</td><td>Thuyết minh danh thắng, di tích</td><td>Thuyết minh bằng lời</td></tr>
      <tr><td>10</td><td>Quảng cáo sách đa phương thức</td><td>Phỏng vấn về sách, văn hoá đọc</td></tr></table>` },
    { title: 'Chiến lược làm bài kiểm tra', html: `<p>Phân bổ thời gian hợp lí:</p>`,
      svg: S.flow({ w: 620, items: [{ title: 'Đọc hiểu', text: 'Xác định thể loại' }, { title: 'Tiếng Việt', text: 'Gọi tên → tác dụng' }, { title: 'Viết', text: 'Dàn ý 5 phút' }, { title: 'Soát lại', text: 'Chính tả, dẫn chứng' }] }),
      caption: 'Trình tự làm bài kiểm tra cuối năm.' }
  ],
  summary: 'Học kì II Ngữ văn 9: truyện trinh thám (vụ án, thám tử, manh mối, lời giải), thơ sáu – bảy – tám chữ (số tiếng, nhịp, vần), nghị luận xã hội (luận đề – luận điểm – bằng chứng), văn bản thông tin (khách quan, đề mục, phương tiện phi ngôn ngữ), đọc và quảng bá sách. Tiếng Việt: câu đơn – câu ghép, phương tiện nối, phát triển từ vựng, so sánh – nhân hoá, tên viết tắt, biến đổi và mở rộng câu. Viết: truyện trinh thám, thơ tám chữ, nghị luận xã hội, thuyết minh, quảng cáo sách.',
  examples: [
    { title: 'Biện pháp so sánh trong ca dao', problem: 'Chỉ ra và nêu tác dụng của biện pháp so sánh trong câu ca dao (1).', solution: '“Non xanh nước biếc như tranh hoạ đồ” – so sánh cảnh non nước xứ Nghệ với bức tranh vẽ. Biện pháp làm nổi bật vẻ đẹp hài hoà, thơ mộng của thiên nhiên, thể hiện niềm tự hào, tình yêu quê hương. Từ láy “quanh quanh” gợi con đường uốn lượn, mời gọi.' },
    { title: 'Câu ghép trong truyện trinh thám', problem: 'Tìm câu ghép chính phụ trong ngữ liệu (2) và nêu vai trò đối với truyện.', solution: '“Vì trên mặt bàn còn vệt phấn hình bàn tay nhỏ nên Minh đoán người cầm chìa khoá là một bạn trực nhật vừa lau bảng.” – cặp kết từ “vì… nên” (nguyên nhân – kết quả) thể hiện chuỗi suy luận từ manh mối đến kết luận, đúng đặc trưng truyện trinh thám.' },
    { title: 'Câu bị động và tên viết tắt', problem: 'Chỉ ra câu bị động và cách dùng tên viết tắt trong ngữ liệu (3).', solution: 'Câu bị động: “Văn Miếu – Quốc Tử Giám được nhiều thế hệ học sinh xem là…”, “Những tấm bia… đã được… công nhận…” – đưa đối tượng thuyết minh lên làm chủ ngữ. Tên viết tắt: lần đầu ghi tên đầy đủ “Tổ chức Giáo dục, Khoa học và Văn hoá Liên hợp quốc” kèm “(UNESCO)” trong ngoặc đơn – đúng quy tắc.' }
  ],
  exercises: [
    { question: 'Xác định đâu là câu đơn, đâu là câu ghép trong ngữ liệu (2); với câu ghép, cho biết các vế nối bằng phương tiện gì.', hints: ['Đếm cụm C – V nòng cốt.', 'Dấu chấm phẩy cũng là phương tiện nối.'], solution: 'Câu 1 “Chiếc chìa khoá biến mất ngay trước giờ kiểm tra.” – câu đơn. Câu 2 “Minh không vội kết luận; cậu quan sát kĩ bàn giáo viên.” – câu ghép đẳng lập, hai vế nối bằng dấu chấm phẩy. Câu 3 – câu ghép chính phụ, nối bằng cặp kết từ “vì… nên”.' },
    { question: 'Viết một khổ thơ bảy chữ hoặc tám chữ (4 dòng) về quê hương, có một phép so sánh hoặc nhân hoá.', hints: ['Đếm đủ tiếng mỗi dòng.', 'Gieo vần chân.'], solution: 'Ví dụ (bảy chữ): “Con đê làng nhỏ uốn quanh quanh, / Lúa mới đương thì trổ ngọn xanh. / Dòng sông hiền như lời mẹ hát, / Ru con tròn giấc tuổi thơ lành.” (vần “quanh – xanh – lành”; so sánh “Dòng sông hiền như lời mẹ hát”).' },
    { question: 'Lập dàn ý bài nghị luận về vấn đề “Nhiều học sinh ngại đọc sách” và đề xuất giải pháp.', hints: ['Thực trạng, nguyên nhân, hậu quả, giải pháp.', 'Nêu và bác bỏ ý kiến trái chiều.'], solution: 'MB: nêu vấn đề – nhiều học sinh ngại đọc sách. TB: Thực trạng (ít mượn sách, ưu tiên video ngắn – nêu là quan sát); Nguyên nhân (áp lực học tập, thiết bị số, chưa có thói quen, chưa được giới thiệu sách hay); Hậu quả (vốn từ nghèo, khó tập trung, thiếu chiều sâu suy nghĩ); Trái chiều (“xem video cũng học được” – bác bỏ: video hỗ trợ nhưng không thay được việc đọc sâu); Giải pháp (15 phút đọc mỗi ngày, góc sách lớp, ngày hội sách, gia đình đọc cùng con). KB: khẳng định giá trị của việc đọc, kêu gọi hành động.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Yếu tố nào đặc trưng cho truyện trinh thám?', options: ['manh mối và quá trình suy luận', 'vần chân', 'chỉ dẫn sân khấu', 'bảng số liệu'], answer: 0, explain: 'Bài 6.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Câu “Non xanh nước biếc như tranh hoạ đồ” sử dụng biện pháp so sánh.', answer: true, explain: 'Từ so sánh “như”.' },
    { type: 'short', q: 'Câu ghép có vế phụ và vế chính, nối bằng “vì… nên”, gọi là câu ghép … … (hai chữ).', answer: ['chính phụ', 'chinh phu'], answerText: 'chính phụ', explain: 'Quan hệ nguyên nhân – kết quả.' },
    { type: 'mcq', q: 'Lần đầu dùng tên viết tắt UNESCO trong văn bản, cần:', options: ['ghi tên đầy đủ kèm (UNESCO)', 'chỉ ghi UNESCO', 'viết thường unesco', 'không cần ghi'], answer: 0, explain: 'Quy tắc dùng tên viết tắt.' },
    { type: 'mcq', q: 'Thể thơ mà mỗi dòng có 8 tiếng, nhịp 3/5 thường gặp là:', options: ['thơ tám chữ', 'thơ bảy chữ', 'lục bát', 'song thất lục bát'], answer: 0, explain: 'Bài 7.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Văn bản thông tin được phép bịa số liệu nếu kết hợp yếu tố biểu cảm.', answer: false, explain: 'Thông tin phải chính xác.' },
    { type: 'short', q: 'Câu có chủ ngữ chỉ đối tượng chịu tác động, thường dùng “được/bị”, gọi là câu … … (hai chữ).', answer: ['bị động', 'bi dong'], answerText: 'bị động', explain: 'Bài 9.' },
    { type: 'mcq', q: 'Bài quảng cáo sách dạng văn bản đa phương thức kết hợp:', options: ['chữ, hình ảnh, màu sắc, bố cục', 'chỉ chữ viết tay', 'chỉ âm thanh', 'chỉ số liệu'], answer: 0, explain: 'Bài 10.' }
  ]
});
})();
