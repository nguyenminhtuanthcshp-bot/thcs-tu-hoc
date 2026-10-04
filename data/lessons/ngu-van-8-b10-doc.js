/* Ngữ văn 8 – Bài 10 (Sách – người bạn đồng hành). Thách thức đầu tiên: Đọc như một hành trình. Ngữ liệu: tóm tắt tiểu thuyết “Rô-bin-xơn Cru-xô” (Daniel Defoe, 1719 – tác phẩm thuộc phạm vi công cộng) do nhóm biên soạn tự kể lại; trang nhật kí đọc mẫu do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-8/b10-doc', {
  objectives: [
    'Biết lựa chọn sách phù hợp, đặt mục tiêu và lập kế hoạch đọc mở rộng theo từng chặng.',
    'Biết ghi nhật kí đọc: tóm tắt, trích dẫn ngắn, câu hỏi, liên hệ bản thân và đánh giá.',
    'Vận dụng được kiến thức, kĩ năng đọc các thể loại đã học (truyện, thơ, văn bản nghị luận, văn bản thông tin) để tự đọc sách.',
    'Hình thành thói quen đọc sách, xem sách là người bạn đồng hành.'
  ],
  intro: 'Mỗi cuốn sách là một chuyến đi. Có chuyến đưa ta ra hoang đảo, có chuyến đưa ta vào lòng một bài thơ, có chuyến đưa ta tới những câu hỏi lớn của cuộc đời. Bài học này giúp em lên kế hoạch cho “hành trình đọc” của riêng mình.',
  text: {
    title: 'Chặng đường cùng “Rô-bin-xơn Cru-xô” và một trang nhật kí đọc',
    html: `<p><b>Tóm tắt (kể lại bằng lời của nhóm biên soạn).</b> Rô-bin-xơn là chàng trai người Anh ham phiêu lưu, bỏ nhà đi biển dù cha mẹ ngăn cản. Trong một chuyến đi, tàu gặp bão và đắm; mọi người đều chết, chỉ riêng anh dạt vào một hòn đảo hoang. Từ con tàu mắc cạn, anh cố gắng mang vào bờ lương thực, dụng cụ, súng, giấy bút. Anh dựng lều, rào chắn, đánh dấu ngày tháng trên một cây cột, tập làm gốm, trồng lúa mạch, nuôi dê. Những năm dài cô độc, có lúc anh tuyệt vọng, nhưng anh ghi nhật kí, liệt kê điều “tốt” và điều “xấu” trong hoàn cảnh của mình để giữ tinh thần. Về sau, anh cứu một người bản địa khỏi tay những kẻ ăn thịt người, đặt tên là Thứ Sáu, dạy anh ta ngôn ngữ và cùng nhau sinh sống. Cuối cùng, sau gần ba mươi năm, Rô-bin-xơn được một con tàu đưa trở về nước Anh.</p>
<p><b>Trang nhật kí đọc (mẫu).</b></p>
<p><i>Ngày 5/3 – Chặng 2 (đọc đến đoạn Rô-bin-xơn dựng nhà).</i></p>
<p>– Điều em ghi nhớ: Rô-bin-xơn khắc vạch trên cột gỗ để đếm ngày. Chi tiết nhỏ nhưng cho thấy anh không muốn đánh mất mình.<br>
– Câu hỏi: Nếu là anh, em có đủ kiên nhẫn làm lại chiếc nồi đất hỏng nhiều lần như vậy không?<br>
– Liên hệ: Em hay bỏ dở việc khi gặp khó. Rô-bin-xơn làm em muốn thử lại bài toán hôm qua.<br>
– Đánh giá: Đoạn này hơi chậm, nhưng rất thật. Em cho 4/5 sao.</p>`,
    source: 'Tóm tắt tiểu thuyết “Rô-bin-xơn Cru-xô” (Daniel Defoe, xuất bản 1719 – thuộc phạm vi công cộng) do nhóm biên soạn tự kể lại, không trích bản dịch; trang nhật kí đọc do nhóm biên soạn tự viết.'
  },
  steps: [
    { title: 'Chọn sách cho hành trình', html: `<ul><li>Chọn sách theo <b>sở thích</b> và <b>mục đích</b>: để giải trí, để hiểu biết, để rèn kĩ năng.</li>
      <li>Có thể chọn theo thể loại đã học ở lớp 8: truyện lịch sử, thơ Đường luật, truyện cười, hài kịch, truyện ngắn, thơ tự do, văn bản nghị luận văn học, văn bản thông tin.</li>
      <li>Ưu tiên sách phù hợp lứa tuổi, từ nguồn tin cậy (thư viện trường, lời giới thiệu của thầy cô, bạn bè).</li>
      <li>Đọc lời giới thiệu, mục lục, vài trang đầu trước khi quyết định.</li></ul>` },
    { title: 'Lập kế hoạch đọc theo chặng', html: `<p>Chia cuốn sách thành các chặng vừa sức, có mốc thời gian:</p>`,
      svg: S.flow({ w: 620, items: [{ title: 'Xuất phát', text: 'Chọn sách, đặt mục tiêu' }, { title: 'Chặng 1', text: 'Đọc, tóm tắt' }, { title: 'Chặng 2', text: 'Nhật kí đọc' }, { title: 'Chặng 3', text: 'Suy ngẫm, đánh giá' }, { title: 'Đích', text: 'Chia sẻ với bạn' }] }),
      caption: 'Hành trình đọc một cuốn sách theo từng chặng.' },
    { title: 'Ghi nhật kí đọc', html: `<p>Một trang nhật kí đọc có thể gồm:</p>
      <ul><li><b>Thời gian, chặng đọc</b> (đọc đến đâu).</li>
      <li><b>Điều ghi nhớ:</b> tóm tắt, chi tiết ấn tượng, trích dẫn ngắn.</li>
      <li><b>Câu hỏi</b> nảy sinh khi đọc.</li>
      <li><b>Liên hệ</b> với bản thân, cuộc sống, tác phẩm khác.</li>
      <li><b>Đánh giá</b> ngắn (thích/không thích, vì sao).</li></ul>
      <div class="box key">Nhật kí đọc giúp ta đọc chậm lại, nghĩ sâu hơn và có sẵn “nguyên liệu” để viết bài giới thiệu sách ở Thách thức thứ hai.</div>` },
    { title: 'Vận dụng kĩ năng đọc theo thể loại', html: `<p>Ví dụ với “Rô-bin-xơn Cru-xô” (tiểu thuyết phiêu lưu):</p>`,
      svg: S.storyArc({ stages: ['Ham đi biển', 'Đắm tàu', 'Sống một mình', 'Gặp Thứ Sáu', 'Trở về'], peak: 3, notes: ['mở đầu', 'biến cố', 'vượt khó', 'bước ngoặt', 'kết thúc'] }),
      caption: 'Cốt truyện “Rô-bin-xơn Cru-xô” (tóm tắt).' },
    { title: 'Tự đánh giá hành trình', html: `<table class="tbl"><tr><th>Câu hỏi tự đánh giá</th><th>Có/Chưa</th></tr>
      <tr><td>Em có đọc đúng kế hoạch các chặng không?</td><td>☐</td></tr>
      <tr><td>Nhật kí đọc có đủ điều ghi nhớ, câu hỏi, liên hệ, đánh giá?</td><td>☐</td></tr>
      <tr><td>Em rút ra được bài học hoặc điều mới mẻ nào?</td><td>☐</td></tr>
      <tr><td>Em sẵn sàng chia sẻ cuốn sách với bạn chưa?</td><td>☐</td></tr></table>` }
  ],
  summary: 'Đọc như một hành trình: chọn sách theo sở thích và mục đích; đặt mục tiêu, chia cuốn sách thành các chặng có mốc thời gian; ghi nhật kí đọc (điều ghi nhớ, câu hỏi, liên hệ, đánh giá); vận dụng kĩ năng đọc theo thể loại (với tiểu thuyết: cốt truyện, nhân vật, chủ đề); tự đánh giá và chia sẻ với cộng đồng người đọc.',
  examples: [
    { title: 'Nhận xét trang nhật kí đọc', problem: 'Trang nhật kí đọc mẫu có những mục nào? Mục nào thể hiện rõ nhất sự “đọc có suy nghĩ”?', solution: 'Trang nhật kí có: thời gian và chặng đọc, điều ghi nhớ, câu hỏi, liên hệ, đánh giá. Mục “Câu hỏi” và “Liên hệ” thể hiện rõ nhất việc đọc có suy nghĩ: người đọc tự đặt mình vào hoàn cảnh nhân vật và rút ra thay đổi cho bản thân (muốn thử lại bài toán hôm qua).' },
    { title: 'Lập kế hoạch đọc', problem: 'Cuốn sách em chọn dày khoảng 200 trang, em có 4 tuần. Hãy lập kế hoạch đọc.', solution: 'Chia 4 chặng, mỗi tuần khoảng 50 trang (khoảng 8 trang/ngày, đọc 20 – 30 phút trước khi ngủ). Cuối mỗi tuần viết một trang nhật kí đọc. Tuần 4 dành 2 ngày cuối để đọc lại những đoạn ấn tượng và chuẩn bị chia sẻ với nhóm.' },
    { title: 'Phân tích nhân vật qua tóm tắt', problem: 'Qua tóm tắt, em thấy Rô-bin-xơn có những phẩm chất gì?', solution: 'Rô-bin-xơn kiên trì, sáng tạo (tự làm gốm, trồng trọt, chăn nuôi), biết giữ tinh thần lạc quan (ghi nhật kí, liệt kê điều tốt – xấu), có lòng nhân hậu (cứu Thứ Sáu). Nhân vật cho thấy ý chí và trí tuệ con người có thể vượt qua hoàn cảnh khắc nghiệt.' }
  ],
  exercises: [
    { question: 'Chọn một cuốn sách em muốn đọc trong tháng tới và nêu mục tiêu đọc.', hints: ['Nghĩ đến thể loại em thích hoặc muốn khám phá.', 'Mục tiêu có thể là giải trí, hiểu biết, rèn kĩ năng.'], solution: 'Ví dụ: “Không gia đình” (Héc-to Ma-lô). Mục tiêu: hiểu hành trình trưởng thành của cậu bé Rê-mi; rèn kĩ năng tóm tắt và phân tích nhân vật; tìm những câu văn hay về tình thân để ghi vào sổ.' },
    { question: 'Viết một trang nhật kí đọc về một cuốn sách (hoặc truyện) em vừa đọc.', hints: ['Đủ các mục: thời gian – chặng, điều ghi nhớ, câu hỏi, liên hệ, đánh giá.', 'Trích dẫn ngắn nếu cần, ghi rõ trang.'], solution: 'Ví dụ: Ngày 12/3 – Chặng 1 “Chiếc lá cuối cùng”. Điều ghi nhớ: Giôn-xi tin rằng khi chiếc lá cuối cùng rụng, cô sẽ chết. Câu hỏi: Vì sao chiếc lá không rụng dù mưa gió suốt đêm? Liên hệ: Niềm tin có sức mạnh lớn với sức khoẻ con người, như khi em ốm và được mẹ động viên. Đánh giá: Truyện ngắn nhưng xúc động, kết thúc bất ngờ – 5/5.' },
    { question: 'Đọc tóm tắt “Rô-bin-xơn Cru-xô”, em rút ra bài học gì cho bản thân? Viết đoạn văn 5 – 7 câu.', hints: ['Nghĩ về cách Rô-bin-xơn đối mặt với khó khăn.', 'Liên hệ với việc học tập, cuộc sống của em.'], solution: 'Ví dụ: Câu chuyện Rô-bin-xơn một mình trên đảo hoang dạy em bài học về sự kiên trì và lạc quan. Anh không có gì trong tay ngoài vài dụng cụ vớt từ con tàu đắm, vậy mà anh dựng được nhà, trồng được lúa, nuôi được dê. Có lúc anh tuyệt vọng, nhưng anh ghi nhật kí, tự tìm điều tốt trong hoàn cảnh xấu để đứng dậy. So với anh, những khó khăn của em – một bài toán khó, một lần bị điểm kém – thật nhỏ bé. Em hiểu rằng khó khăn không đáng sợ bằng việc bỏ cuộc. Từ nay, gặp việc khó em sẽ thử lại thêm một lần nữa.' }
  ],
  quiz: [
    { type: 'mcq', q: '“Đọc như một hành trình” nghĩa là:', options: ['đặt mục tiêu, lập kế hoạch đọc theo chặng, ghi chép và chia sẻ', 'đọc thật nhanh cho xong', 'chỉ đọc khi đi du lịch', 'đọc mục lục là đủ'], answer: 0, explain: 'Đọc có mục tiêu, kế hoạch.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nhật kí đọc chỉ cần chép lại nguyên văn thật nhiều đoạn trong sách.', answer: false, explain: 'Cần có tóm tắt, câu hỏi, liên hệ, đánh giá của riêng mình.' },
    { type: 'short', q: 'Người bạn bản địa được Rô-bin-xơn cứu và đặt tên là gì (hai chữ, “Thứ …”)?', answer: ['thứ sáu', 'thu sau', 'sáu'], answerText: 'Thứ Sáu', explain: 'Nhân vật trong tiểu thuyết của Đi-phô.' },
    { type: 'mcq', q: 'Tác giả của tiểu thuyết “Rô-bin-xơn Cru-xô” là:', options: ['Đa-ni-en Đi-phô (Daniel Defoe)', 'Mô-li-e', 'O. Hen-ri', 'Héc-to Ma-lô'], answer: 0, explain: 'Xuất bản năm 1719.' },
    { type: 'mcq', q: 'Mục nào trong nhật kí đọc giúp em liên hệ sách với cuộc sống của mình?', options: ['Liên hệ', 'Thời gian đọc', 'Số trang', 'Tên nhà xuất bản'], answer: 0, explain: 'Liên hệ bản thân, cuộc sống.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Chia cuốn sách thành các chặng có mốc thời gian giúp việc đọc bền bỉ, không bỏ dở.', answer: true, explain: 'Mục tiêu vừa sức, dễ theo dõi.' },
    { type: 'short', q: 'Rô-bin-xơn khắc vạch trên vật gì để đếm ngày (hai chữ, “cột …”)?', answer: ['cột gỗ', 'cot go', 'cây cột', 'cột'], answerText: 'cột gỗ', explain: 'Chi tiết trong tóm tắt và nhật kí đọc.' },
    { type: 'mcq', q: 'Phẩm chất nổi bật của Rô-bin-xơn trên đảo hoang là:', options: ['kiên trì, sáng tạo, lạc quan', 'lười biếng, ỷ lại', 'kiêu căng, hống hách', 'nhút nhát, bỏ cuộc'], answer: 0, explain: 'Tự làm gốm, trồng trọt, ghi nhật kí.' }
  ]
});
})();
