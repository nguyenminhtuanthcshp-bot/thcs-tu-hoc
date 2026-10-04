/* Ngữ văn 8 – Bài 3. Đọc hiểu: Văn bản nghị luận. Văn bản đọc: “Nam quốc sơn hà” (tương truyền của Lý Thường Kiệt, thế kỉ XI – nguyên văn chữ Hán, phạm vi công cộng; phần dịch nghĩa do nhóm biên soạn tự dịch) và đoạn nghị luận “Yêu nước từ những việc bình thường” do nhóm biên soạn tự viết. Lập luận của “Chiếu dời đô” (Lý Công Uẩn, 1010) được tóm lược bằng lời của nhóm biên soạn. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-8/b3-doc', {
  objectives: [
    'Nhận biết được luận đề, luận điểm, lí lẽ, bằng chứng và mối quan hệ giữa chúng trong văn bản nghị luận.',
    'Nhận biết được một số đặc điểm của nghị luận trung đại (thơ, chiếu, hịch) và nghị luận hiện đại.',
    'Phân tích được cách lập luận, thái độ, tình cảm của người viết.',
    'Bồi đắp lòng yêu nước, ý thức trách nhiệm với đất nước.'
  ],
  intro: 'Có những văn bản không kể chuyện, không tả cảnh mà vẫn làm lòng người sôi sục: một bài thơ tuyên bố chủ quyền, một tờ chiếu dời đô, một lời hịch kêu gọi tướng sĩ. Đó là sức mạnh của lập luận – “lời sông núi” của cha ông. Bài học này giúp em đọc hiểu văn bản nghị luận xưa và nay.',
  text: {
    title: 'Nam quốc sơn hà và “Yêu nước từ những việc bình thường”',
    html: `<p><b>1. Nam quốc sơn hà</b> (tương truyền của Lý Thường Kiệt)</p>
<div class="poem"><i>Phiên âm:</i><br>Nam quốc sơn hà Nam đế cư,<br>Tiệt nhiên định phận tại thiên thư.<br>Như hà nghịch lỗ lai xâm phạm,<br>Nhữ đẳng hành khan thủ bại hư.</div>
<div class="poem"><i>Dịch nghĩa (nhóm biên soạn dịch):</i><br>Núi sông nước Nam là nơi vua nước Nam ngự trị,<br>Ranh giới ấy đã được định rõ ràng ở sách trời.<br>Cớ sao bọn giặc ngang ngược lại dám đến xâm phạm?<br>Rồi đây chúng bay sẽ phải nhận lấy thất bại tan tành.</div>
<p><b>2. Yêu nước từ những việc bình thường</b></p>
<p>Nhắc đến lòng yêu nước, nhiều người nghĩ ngay đến chiến trường, đến những chiến công. Nhưng trong cuộc sống hôm nay, lòng yêu nước còn hiện diện trong những việc rất bình thường.</p>
<p>Yêu nước trước hết là làm tốt phần việc của mình. Người nông dân chăm chút từng thửa ruộng, người công nhân cẩn thận với từng sản phẩm, người học sinh chăm chỉ học tập – đó đều là những viên gạch xây nên đất nước. Yêu nước còn là biết giữ gìn những gì thuộc về dân tộc: nói và viết tiếng Việt trong sáng, trân trọng di tích, lễ hội, món ăn quê hương. Và yêu nước là biết sẻ chia: mỗi mùa bão lũ, hàng nghìn chuyến xe cứu trợ từ khắp nơi đổ về miền Trung là minh chứng sống động nhất.</p>
<p>Lòng yêu nước không phải là điều gì xa xôi. Nó bắt đầu từ chính những việc nhỏ ta làm mỗi ngày, bằng tất cả trách nhiệm và tình yêu.</p>`,
    source: '“Nam quốc sơn hà”: bài thơ chữ Hán thế kỉ XI, tương truyền của Lý Thường Kiệt – nguyên văn thuộc phạm vi công cộng; bản dịch nghĩa do nhóm biên soạn tự dịch. Đoạn nghị luận “Yêu nước từ những việc bình thường” do nhóm biên soạn tự viết.'
  },
  steps: [
    { title: 'Các yếu tố của văn bản nghị luận', html: `<table class="tbl"><tr><th>Yếu tố</th><th>Vai trò</th><th>Trong “Yêu nước từ những việc bình thường”</th></tr>
      <tr><td>Luận đề</td><td>Vấn đề chính, bao trùm</td><td>Lòng yêu nước hiện diện trong những việc bình thường</td></tr>
      <tr><td>Luận điểm</td><td>Ý kiến triển khai luận đề</td><td>Yêu nước là làm tốt phần việc; là giữ gìn bản sắc; là biết sẻ chia</td></tr>
      <tr><td>Lí lẽ</td><td>Lời giải thích, phân tích</td><td>Mỗi người làm tốt việc của mình là “viên gạch xây nên đất nước”</td></tr>
      <tr><td>Bằng chứng</td><td>Sự việc, số liệu, dẫn chứng</td><td>Hàng nghìn chuyến xe cứu trợ về miền Trung mùa bão lũ</td></tr></table>`,
      svg: S.mindmap({ center: 'Luận đề', branches: [{ title: 'Luận điểm 1', items: ['Lí lẽ', 'Bằng chứng'] }, { title: 'Luận điểm 2', items: ['Lí lẽ', 'Bằng chứng'] }, { title: 'Luận điểm 3', items: ['Lí lẽ', 'Bằng chứng'] }, { title: 'Kết luận', items: ['Khẳng định luận đề'] }] }),
      caption: 'Quan hệ giữa luận đề, luận điểm, lí lẽ và bằng chứng.' },
    { title: '“Nam quốc sơn hà” – bài thơ mang tính nghị luận', html: `<p>Bài thơ tứ tuyệt chữ Hán được xem như một “bản tuyên ngôn” khẳng định chủ quyền:</p>
      <ul><li><b>Luận điểm 1 (câu 1–2):</b> Núi sông nước Nam thuộc về người Nam – điều ấy đã định sẵn ở “sách trời” (căn cứ thiêng liêng, không ai thay đổi được).</li>
      <li><b>Luận điểm 2 (câu 3–4):</b> Kẻ thù xâm phạm là đi ngược lẽ trời nên nhất định thất bại.</li></ul>
      <p>Giọng thơ đanh thép, câu hỏi tu từ “Như hà…?” (Cớ sao…?) thể hiện sự khinh bỉ, phẫn nộ với kẻ thù; lời cảnh báo cuối bài khẳng định ý chí quyết chiến quyết thắng.</p>` },
    { title: 'Lập luận của “Chiếu dời đô” (tóm lược)', html: `<p>Năm 1010, vua Lý Công Uẩn ban chiếu dời đô từ Hoa Lư ra thành Đại La (sau đổi tên là Thăng Long). Lập luận của bài chiếu có thể tóm lược như sau:</p>`,
      svg: S.flow({ vertical: true, w: 580, items: [{ title: 'Tiền đề', text: 'Các triều đại xưa dời đô để mưu nghiệp lớn, theo mệnh trời, hợp lòng dân' }, { title: 'Soi vào thực tế', text: 'Hai triều Đinh, Lê cứ đóng yên ở Hoa Lư nên triều đại ngắn ngủi, dân khổ' }, { title: 'Lí do chọn Đại La', text: 'Ở trung tâm đất nước, thế đất đẹp, rộng mà bằng, cao mà thoáng, muôn vật phong phú' }, { title: 'Kết luận', text: 'Dời đô về Đại La; hỏi ý kiến quần thần để cùng quyết định' }] }),
      caption: 'Trình tự lập luận của “Chiếu dời đô” (tóm lược bằng lời của nhóm biên soạn).' },
    { title: 'Nghị luận trung đại và nghị luận hiện đại', html: `<table class="tbl"><tr><th></th><th>Nghị luận trung đại (chiếu, hịch, cáo, thơ)</th><th>Nghị luận hiện đại</th></tr>
      <tr><td>Người viết – người đọc</td><td>Vua, tướng – quần thần, tướng sĩ, nhân dân</td><td>Mọi người viết cho mọi người đọc</td></tr>
      <tr><td>Lí lẽ, bằng chứng</td><td>Viện dẫn “mệnh trời”, sử sách, tấm gương xưa</td><td>Dựa vào thực tế, số liệu, khoa học</td></tr>
      <tr><td>Ngôn ngữ</td><td>Chữ Hán, câu văn biền ngẫu, nhiều điển tích</td><td>Tiếng Việt hiện đại, gần gũi</td></tr></table>
      <p>Ví dụ: “Hịch tướng sĩ” (Trần Quốc Tuấn, thế kỉ XIII) nêu gương trung thần nghĩa sĩ, tố cáo tội ác giặc, phê phán thái độ cầu an của tướng sĩ và chỉ ra con đường phải theo – kết hợp lí lẽ sắc bén với tình cảm thống thiết.</p>` },
    { title: 'Thái độ, tình cảm của người viết', html: `<p>Văn nghị luận không khô khan: lí lẽ luôn đi cùng tình cảm. Ở “Nam quốc sơn hà” là niềm tự hào, sự phẫn nộ; ở “Chiếu dời đô” là tầm nhìn xa và sự tôn trọng ý kiến quần thần (câu hỏi cuối chiếu); ở đoạn nghị luận hiện đại là niềm tin rằng mỗi người đều có thể yêu nước bằng việc làm cụ thể.</p>
      <div class="box key">Khi đọc văn bản nghị luận, hãy trả lời: Người viết bàn về vấn đề gì? Ý kiến là gì? Lí lẽ, bằng chứng nào? Thái độ, tình cảm ra sao? Văn bản có ý nghĩa gì với hôm nay?</div>` }
  ],
  summary: 'Văn bản nghị luận gồm luận đề (vấn đề chính), luận điểm (ý kiến triển khai), lí lẽ và bằng chứng; chúng liên kết chặt chẽ để thuyết phục người đọc. Nghị luận trung đại (thơ, chiếu, hịch) thường viện dẫn mệnh trời, sử sách, giọng văn trang trọng; nghị luận hiện đại dựa vào thực tế, ngôn ngữ gần gũi. “Nam quốc sơn hà” khẳng định chủ quyền và ý chí chống xâm lăng; “Chiếu dời đô” lập luận chặt chẽ cho việc dời đô ra Đại La.',
  examples: [
    { title: 'Xác định luận đề, luận điểm', problem: 'Xác định luận đề và các luận điểm của đoạn “Yêu nước từ những việc bình thường”.', solution: 'Luận đề: Lòng yêu nước hiện diện trong những việc bình thường của cuộc sống hôm nay. Luận điểm: (1) Yêu nước là làm tốt phần việc của mình; (2) Yêu nước là giữ gìn những gì thuộc về dân tộc; (3) Yêu nước là biết sẻ chia với đồng bào.' },
    { title: 'Phân biệt lí lẽ và bằng chứng', problem: 'Trong đoạn nghị luận, câu “mỗi mùa bão lũ, hàng nghìn chuyến xe cứu trợ… đổ về miền Trung” là lí lẽ hay bằng chứng? Vì sao?', solution: 'Đó là bằng chứng, vì nó nêu một sự việc thực tế có thể kiểm chứng để chứng minh cho luận điểm “yêu nước là biết sẻ chia”. Còn câu “đó đều là những viên gạch xây nên đất nước” là lí lẽ – lời giải thích, đánh giá của người viết.' },
    { title: 'Căn cứ lập luận trong thơ trung đại', problem: 'Vì sao tác giả “Nam quốc sơn hà” viện dẫn “thiên thư” (sách trời)?', solution: 'Với người xưa, “trời” là đấng tối cao, “sách trời” là điều thiêng liêng không thể thay đổi. Viện dẫn “thiên thư” giúp khẳng định chủ quyền của nước Nam là chính đáng, tất yếu; kẻ xâm lược vì thế là kẻ đi ngược lẽ trời, chắc chắn thất bại. Đây là căn cứ lập luận vừa có sức thuyết phục vừa cổ vũ tinh thần quân dân.' }
  ],
  exercises: [
    { question: 'Chỉ ra câu hỏi tu từ trong bản dịch nghĩa “Nam quốc sơn hà” và nêu tác dụng.', hints: ['Tìm câu kết thúc bằng dấu chấm hỏi.', 'Câu hỏi ấy có cần câu trả lời không? Nó bộc lộ thái độ gì?'], solution: 'Câu hỏi tu từ: “Cớ sao bọn giặc ngang ngược lại dám đến xâm phạm?” Câu hỏi không nhằm hỏi mà để bày tỏ sự phẫn nộ, khinh bỉ trước hành động phi nghĩa của kẻ thù; đồng thời chuẩn bị cho lời khẳng định đanh thép ở câu cuối.' },
    { question: 'Theo lập luận của “Chiếu dời đô”, thành Đại La có những lợi thế gì? Những lợi thế ấy cho thấy tầm nhìn nào của nhà vua?', hints: ['Nhớ các ý: vị trí, địa thế, đời sống nhân dân.', 'Nghĩ đến sự phát triển lâu dài của đất nước.'], solution: 'Đại La ở trung tâm đất nước, thế đất đẹp, rộng mà bằng, cao mà thoáng, dân không khổ vì ngập lụt, muôn vật phong phú. Điều đó cho thấy tầm nhìn xa của nhà vua: đất nước đã thái bình cần một kinh đô thuận lợi để phát triển kinh tế, văn hoá, mưu nghiệp lớn lâu dài chứ không chỉ để phòng thủ như Hoa Lư.' },
    { question: 'Viết đoạn văn (5 – 7 câu) bổ sung một luận điểm mới cho văn bản “Yêu nước từ những việc bình thường”, có lí lẽ và bằng chứng.', hints: ['Gợi ý luận điểm: yêu nước là bảo vệ môi trường / tôn trọng pháp luật / quảng bá hình ảnh đất nước.', 'Viết theo trật tự: luận điểm – lí lẽ – bằng chứng – kết.'], solution: 'Ví dụ: Yêu nước còn là giữ gìn màu xanh cho đất nước. Mỗi dòng sông, cánh rừng là tài sản chung mà cha ông để lại, nếu bị tàn phá thì con cháu sẽ phải gánh chịu hậu quả. Vì thế, không xả rác, tiết kiệm điện nước, trồng thêm một cây xanh đều là những việc làm yêu nước thiết thực. Nhiều bạn học sinh đã tham gia các buổi nhặt rác trên bãi biển, thu gom pin cũ, đổi giấy vụn lấy cây. Những việc tưởng nhỏ ấy, khi nhân lên hàng triệu người, sẽ làm đất nước xanh đẹp hơn.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Luận điểm trong văn bản nghị luận là:', options: ['ý kiến, quan điểm triển khai luận đề', 'câu chuyện minh hoạ', 'tên văn bản', 'lời chào của người viết'], answer: 0, explain: 'Luận điểm triển khai và làm sáng tỏ luận đề.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Bằng chứng là những sự việc, số liệu, dẫn chứng cụ thể có thể kiểm chứng.', answer: true, explain: 'Bằng chứng khác lí lẽ ở tính cụ thể, khách quan.' },
    { type: 'short', q: '“Chiếu dời đô” được ban hành vào năm nào?', answer: ['1010'], answerText: '1010', explain: 'Năm 1010, vua Lý Công Uẩn dời đô ra Đại La.' },
    { type: 'mcq', q: 'Chữ “thiên thư” trong “Nam quốc sơn hà” có nghĩa là:', options: ['sách trời', 'nghìn cuốn sách', 'bức thư của vua', 'lịch sử'], answer: 0, explain: '“Thiên” là trời, “thư” là sách.' },
    { type: 'mcq', q: 'Nội dung chính của “Nam quốc sơn hà” là:', options: ['khẳng định chủ quyền và ý chí đánh bại kẻ xâm lược', 'tả cảnh sông núi', 'kể chuyện dời đô', 'ca ngợi tình bạn'], answer: 0, explain: 'Bài thơ được xem như bản tuyên ngôn độc lập.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nghị luận trung đại thường viện dẫn mệnh trời, sử sách, tấm gương người xưa làm căn cứ lập luận.', answer: true, explain: 'Đặc điểm lập luận của văn nghị luận trung đại.' },
    { type: 'short', q: 'Theo “Chiếu dời đô”, nhà vua dời đô từ Hoa Lư ra thành nào?', answer: ['Đại La', 'thanh Dai La'], answerText: 'Đại La', explain: 'Thành Đại La, sau gọi là Thăng Long.' },
    { type: 'mcq', q: 'Chi tiết cuối “Chiếu dời đô” hỏi ý kiến quần thần thể hiện:', options: ['sự tôn trọng, muốn đồng thuận của nhà vua', 'sự do dự, thiếu quyết đoán', 'ý muốn trì hoãn', 'thái độ mỉa mai'], answer: 0, explain: 'Lời chiếu vừa có tính mệnh lệnh vừa giàu sức thuyết phục.' }
  ]
});
})();
