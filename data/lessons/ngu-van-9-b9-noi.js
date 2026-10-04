/* Ngữ văn 9 – Bài 9. Nói và nghe: Thuyết minh về một danh lam thắng cảnh hay di tích lịch sử (trình bày bằng lời). Bài nói mẫu “Văn Miếu – Quốc Tử Giám” do nhóm biên soạn tự viết dựa trên kiến thức lịch sử phổ thông. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-9/b9-noi', {
  objectives: [
    'Thuyết minh bằng lời về một danh lam thắng cảnh hay di tích lịch sử: thông tin chính xác, trình tự rõ ràng, hấp dẫn.',
    'Sử dụng phương tiện hỗ trợ (bản đồ, ảnh, trình chiếu) và yếu tố phi ngôn ngữ hiệu quả.',
    'Biết lắng nghe, ghi chép, đặt câu hỏi và nhận xét bài thuyết minh của bạn.'
  ],
  intro: 'Thuyết minh bằng lời giống như làm “hướng dẫn viên”: em không chỉ đọc thông tin mà còn dẫn người nghe đi qua từng địa điểm, khơi gợi sự tò mò và niềm tự hào.',
  text: {
    title: 'Bài nói mẫu: “Văn Miếu – Quốc Tử Giám”',
    html: `<p><b>Mở đầu.</b> Chào các bạn! Nếu có ai hỏi: trường đại học đầu tiên của Việt Nam ở đâu, các bạn sẽ trả lời thế nào? <i>(Dừng, nhìn người nghe.)</i> Câu trả lời nằm ngay giữa Hà Nội: Văn Miếu – Quốc Tử Giám. Hôm nay, mình xin làm “hướng dẫn viên” đưa các bạn tham quan di tích này.</p>
<p><b>Lịch sử.</b> Theo sử sách, Văn Miếu được xây dựng năm 1070 dưới thời vua Lý Thánh Tông để thờ Khổng Tử và các bậc hiền triết. Năm 1076, Quốc Tử Giám được lập bên cạnh – được xem là trường đại học đầu tiên của nước ta.</p>
<p><b>Tham quan.</b> <i>(Chiếu sơ đồ khu di tích.)</i> Khu di tích được chia thành nhiều lớp không gian nối tiếp nhau. Điểm nổi bật đầu tiên là <b>Khuê Văn Các</b> – gác nhỏ có bốn cửa sổ tròn, được xây dựng dưới thời Nguyễn, nay là biểu tượng của Thủ đô Hà Nội. Tiếp đến là giếng Thiên Quang hình vuông, và hai bên là <b>82 tấm bia tiến sĩ</b> đặt trên lưng rùa đá, khắc tên những người đỗ tiến sĩ trong các khoa thi thời Lê – Mạc. Những tấm bia này đã được UNESCO công nhận là Di sản tư liệu thuộc Chương trình Ký ức Thế giới.</p>
<p><b>Ý nghĩa.</b> Văn Miếu – Quốc Tử Giám là minh chứng cho truyền thống hiếu học, tôn sư trọng đạo của dân tộc. Ngày nay, nhiều học sinh đến đây trước các kì thi quan trọng để tham quan và tự nhắc mình chăm chỉ học tập.</p>
<p><b>Lưu ý khi tham quan.</b> Các bạn không nên xoa đầu rùa đá hay leo trèo lên bia – vì điều đó làm hư hại hiện vật quý.</p>
<p><b>Kết thúc.</b> Cảm ơn các bạn đã cùng mình “tham quan”. Các bạn có câu hỏi nào không?</p>`,
    source: 'Bài nói do nhóm biên soạn tự viết, dựa trên kiến thức lịch sử phổ thông (sách giáo khoa Lịch sử, thông tin giới thiệu di tích); khi thực hành học sinh cần đối chiếu nguồn chính thống.'
  },
  steps: [
    { title: 'Chuẩn bị nội dung', html: `<ul><li>Chọn di tích, danh thắng em biết rõ hoặc có tư liệu tin cậy.</li>
      <li>Thu thập thông tin: lịch sử, vị trí, đặc điểm nổi bật, giá trị, lưu ý khi tham quan.</li>
      <li>Chuẩn bị phương tiện hỗ trợ: sơ đồ khu di tích, ảnh; ghi dàn ý bằng từ khoá.</li></ul>`,
      svg: S.mindmap({ center: 'Văn Miếu – Quốc Tử Giám', branches: [{ title: 'Lịch sử', items: ['1070: Văn Miếu', '1076: Quốc Tử Giám'] }, { title: 'Điểm nổi bật', items: ['Khuê Văn Các', '82 bia tiến sĩ'] }, { title: 'Ý nghĩa', items: ['Hiếu học', 'Tôn sư trọng đạo'] }, { title: 'Lưu ý', items: ['Không xoa đầu rùa', 'Bảo vệ hiện vật'] }] }),
      caption: 'Dàn ý bài nói mẫu.' },
    { title: 'Trình tự thuyết minh bằng lời', html: `<p>Đi theo trình tự “tham quan” giúp người nghe dễ hình dung:</p>`,
      svg: S.flow({ w: 620, items: [{ title: 'Câu hỏi mở đầu', text: 'Gây tò mò' }, { title: 'Lịch sử', text: 'Mốc thời gian' }, { title: 'Tham quan', text: 'Theo không gian' }, { title: 'Ý nghĩa, lưu ý', text: 'Kết, hỏi đáp' }] }),
      caption: 'Trình tự bài thuyết minh.' },
    { title: 'Kĩ năng trình bày', html: `<ul><li>Vào vai “hướng dẫn viên”: dùng từ ngữ dẫn dắt “Tiếp đến là…”, “Hai bên là…”.</li>
      <li>Chỉ vào sơ đồ, ảnh đúng lúc nói tới địa điểm.</li>
      <li>Nói rõ nguồn khi nêu thông tin lịch sử: “Theo sử sách…”.</li>
      <li>Giọng rõ ràng, tốc độ vừa phải; nhìn người nghe; thời lượng 4 – 5 phút.</li></ul>` },
    { title: 'Lắng nghe và nhận xét', html: `<table class="tbl"><tr><th>Tiêu chí</th><th>Nhận xét</th></tr>
      <tr><td>Thông tin chính xác, có nguồn</td><td>☐ Tốt ☐ Cần cải thiện</td></tr>
      <tr><td>Trình tự rõ, dễ hình dung</td><td>☐ Tốt ☐ Cần cải thiện</td></tr>
      <tr><td>Phương tiện hỗ trợ phù hợp</td><td>☐ Tốt ☐ Cần cải thiện</td></tr>
      <tr><td>Giọng nói, cử chỉ, tương tác</td><td>☐ Tốt ☐ Cần cải thiện</td></tr></table>
      <div class="box key">Người nghe nên ghi chép 2 – 3 thông tin mới và chuẩn bị ít nhất một câu hỏi.</div>` }
  ],
  summary: 'Thuyết minh bằng lời về di tích, danh thắng: chuẩn bị thông tin chính xác (lịch sử, đặc điểm, giá trị, lưu ý), phương tiện hỗ trợ và dàn ý từ khoá; trình bày theo trình tự “tham quan” (mở đầu gây tò mò → lịch sử → các điểm nổi bật → ý nghĩa, lưu ý → hỏi đáp); vào vai hướng dẫn viên, dẫn nguồn, dùng sơ đồ, ảnh đúng lúc. Người nghe ghi chép, đặt câu hỏi, nhận xét theo tiêu chí.',
  examples: [
    { title: 'Mở đầu bằng câu hỏi', problem: 'Câu hỏi mở đầu của bài nói mẫu có tác dụng gì?', solution: 'Câu hỏi “trường đại học đầu tiên của Việt Nam ở đâu?” khơi gợi tò mò, khiến người nghe tự suy nghĩ rồi dẫn thẳng vào đối tượng thuyết minh; kèm động tác dừng, nhìn người nghe tạo sự tương tác.' },
    { title: 'Trình tự không gian', problem: 'Phần “Tham quan” sắp xếp thông tin theo trình tự nào?', solution: 'Theo không gian, như đang đi từ ngoài vào trong: Khuê Văn Các → giếng Thiên Quang → hai dãy bia tiến sĩ. Từ ngữ dẫn dắt “Điểm nổi bật đầu tiên…”, “Tiếp đến…”, “hai bên là…” giúp người nghe hình dung như đang đi tham quan thật.' },
    { title: 'Lồng ghép giáo dục ứng xử', problem: 'Vì sao bài nói có phần “Lưu ý khi tham quan”?', solution: 'Để nhắc người nghe ứng xử đúng với di tích (không xoa đầu rùa, không leo trèo lên bia), góp phần bảo vệ hiện vật – thể hiện trách nhiệm với di sản, không chỉ cung cấp thông tin.' }
  ],
  exercises: [
    { question: 'Lập dàn ý bằng từ khoá cho bài thuyết minh (4 – 5 phút) về một di tích, danh thắng em yêu thích.', hints: ['Mở đầu – lịch sử – điểm nổi bật – ý nghĩa – lưu ý – kết.', 'Ghi phương tiện hỗ trợ đi kèm.'], solution: 'Ví dụ (Cố đô Huế): Mở đầu – câu hỏi “Kinh đô cuối cùng của Việt Nam?”; Lịch sử – kinh đô triều Nguyễn, UNESCO ghi danh Quần thể di tích Cố đô Huế năm 1993; Điểm nổi bật – Ngọ Môn, điện Thái Hoà, lăng tẩm (chiếu ảnh); Ý nghĩa – giá trị kiến trúc, lịch sử; Lưu ý – ăn mặc lịch sự, không chạm hiện vật; Kết – cảm ơn, mời hỏi.' },
    { question: 'Viết lời dẫn dắt (3 – 4 câu) khi chuyển từ phần lịch sử sang phần tham quan, có chỉ vào phương tiện hỗ trợ.', hints: ['Vào vai hướng dẫn viên.', 'Nhắc đến sơ đồ, ảnh.'], solution: 'Ví dụ: “Vừa rồi chúng ta đã đi qua gần một nghìn năm lịch sử. Bây giờ, mời các bạn nhìn lên sơ đồ này. Chúng ta sẽ bắt đầu từ cổng chính, rồi lần lượt đi qua từng khu. Điểm dừng đầu tiên chính là toà gác có bốn cửa sổ tròn mà các bạn thấy trong ảnh.”' },
    { question: 'Đặt 2 câu hỏi cho người thuyết minh về Văn Miếu – Quốc Tử Giám.', hints: ['Hỏi mở rộng thông tin.', 'Hỏi về cách bảo tồn.'], solution: '(1) “Các khoa thi tiến sĩ ngày xưa được tổ chức như thế nào để một người được khắc tên lên bia?” (2) “Hiện nay di tích làm gì để bảo vệ bia đá trước lượng khách tham quan đông?”' }
  ],
  quiz: [
    { type: 'mcq', q: 'Theo bài nói mẫu, Quốc Tử Giám được xem là:', options: ['trường đại học đầu tiên của nước ta', 'cung điện của vua', 'một ngôi chùa', 'bảo tàng hiện đại'], answer: 0, explain: 'Lập năm 1076.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Có 82 tấm bia tiến sĩ đặt trên lưng rùa đá ở Văn Miếu – Quốc Tử Giám.', answer: true, explain: 'Khắc tên tiến sĩ các khoa thi thời Lê – Mạc.' },
    { type: 'short', q: 'Gác có bốn cửa sổ tròn, biểu tượng của Thủ đô: Khuê Văn … (một chữ).', answer: ['Các', 'Cac'], answerText: 'Các (Khuê Văn Các)', explain: 'Khuê Văn Các.' },
    { type: 'mcq', q: 'Văn Miếu được xây dựng năm 1070 dưới thời vua:', options: ['Lý Thánh Tông', 'Trần Nhân Tông', 'Lê Lợi', 'Quang Trung'], answer: 0, explain: 'Theo sử sách.' },
    { type: 'mcq', q: 'Trình tự phù hợp nhất để giới thiệu các điểm trong khu di tích là:', options: ['theo không gian, như đi tham quan', 'ngẫu nhiên', 'theo bảng chữ cái', 'chỉ nói điểm cuối'], answer: 0, explain: 'Người nghe dễ hình dung.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Xoa đầu rùa đá là hành động nên làm để cầu may.', answer: false, explain: 'Làm hư hại hiện vật.' },
    { type: 'short', q: 'Văn Miếu – Quốc Tử Giám là minh chứng cho truyền thống hiếu … của dân tộc (một chữ).', answer: ['học', 'hoc'], answerText: 'học', explain: 'hiếu học.' },
    { type: 'mcq', q: 'Khi nêu thông tin lịch sử, người nói nên:', options: ['nêu nguồn, ví dụ “Theo sử sách…”', 'tự đặt năm tháng', 'bỏ qua mốc thời gian', 'nói thật nhanh'], answer: 0, explain: 'Tăng độ tin cậy.' }
  ]
});
})();
