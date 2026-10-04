/* Ngữ văn 8 – Bài 10. Thách thức thứ hai: Kết nối cộng đồng người đọc – viết bài giới thiệu sách, sáng tạo từ cuốn sách đã đọc. Ngữ liệu: bài giới thiệu tiểu thuyết “Không gia đình” (Hector Malot, 1878 – thuộc phạm vi công cộng) và lá thư gửi nhân vật cụ Bơ-men (“Chiếc lá cuối cùng”, O. Henry, 1907 – thuộc phạm vi công cộng); cả hai do nhóm biên soạn tự viết, chỉ tóm tắt nội dung, không trích bản dịch. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-8/b10-viet', {
  objectives: [
    'Viết được bài giới thiệu một cuốn sách đã đọc: thông tin cơ bản, nội dung chính, điểm đặc sắc, lời khuyên đọc.',
    'Sáng tạo được sản phẩm từ cuốn sách (thư gửi nhân vật, viết tiếp kết thúc, áp phích, bìa sách mới…).',
    'Biết chia sẻ, trao đổi trong cộng đồng người đọc (câu lạc bộ đọc, góc sách lớp, nhóm trực tuyến an toàn).',
    'Tôn trọng bản quyền: ghi rõ tên sách, tác giả; trích dẫn ngắn và đúng nguồn.'
  ],
  intro: 'Đọc xong một cuốn sách hay, ai cũng muốn kể cho người khác nghe. Bài học này giúp em biến niềm vui đọc thành bài giới thiệu sách hấp dẫn và những sản phẩm sáng tạo để kết nối với những người cùng yêu sách.',
  text: {
    title: 'Hai sản phẩm mẫu của cộng đồng người đọc',
    html: `<p><b>A. Bài giới thiệu sách: “Không gia đình” – hành trình của một trái tim can đảm</b></p>
<p>Nếu bạn đang tìm một cuốn sách vừa hấp dẫn như phim phiêu lưu, vừa ấm áp như một cái ôm, hãy đọc “Không gia đình” của nhà văn Pháp Héc-to Ma-lô, ra đời năm 1878.</p>
<p>Truyện kể về Rê-mi, cậu bé không biết cha mẹ ruột mình là ai. Năm lên tám tuổi, cậu bị bán cho cụ Vi-ta-li, một nghệ sĩ hát rong. Cùng cụ và gánh xiếc thú nhỏ gồm chú khỉ và mấy con chó, Rê-mi đi khắp nước Pháp, trải qua đói rét, mất mát, có lúc tưởng không thể đứng dậy. Nhưng trên đường đời, cậu gặp những con người tốt bụng và người bạn thân Ma-chi-a. Cuối cùng, Rê-mi tìm lại được gia đình.</p>
<p>Điều khiến tôi yêu cuốn sách nhất là cụ Vi-ta-li: nghiêm khắc nhưng thương Rê-mi như cháu, dạy cậu đọc chữ, dạy cậu sống có danh dự. Cuốn sách cho tôi hiểu: gia đình không chỉ là nơi ta sinh ra, mà còn là những người thương yêu ta vô điều kiện.</p>
<p>Sách khá dày, nhưng mỗi chương là một chặng đường nên rất dễ đọc từng phần. Hãy dành cho Rê-mi 20 phút mỗi tối – bạn sẽ không hối tiếc!</p>
<p><b>B. Sáng tạo: Thư gửi cụ Bơ-men (nhân vật trong “Chiếc lá cuối cùng”)</b></p>
<p><i>Cụ Bơ-men kính mến!</i></p>
<p>Cháu vừa đọc xong câu chuyện của cụ. Cả đời cụ mơ vẽ một kiệt tác, người ta cười cụ, còn cụ thì cứ lặng lẽ chờ. Đêm mưa gió ấy, cụ trèo lên bức tường lạnh buốt để vẽ một chiếc lá, chỉ để một cô gái xa lạ không buông xuôi. Cô Giôn-xi đã sống, còn cụ thì ra đi. Cháu đã khóc ở trang cuối cùng.</p>
<p>Cụ ơi, cháu nghĩ kiệt tác của cụ không chỉ là chiếc lá trên tường, mà là tấm lòng biết hi sinh thầm lặng. Cháu sẽ nhớ cụ mỗi lần thấy một chiếc lá thường xuân.</p>
<p><i>Cháu – một bạn đọc lớp 8.</i></p>`,
    source: 'Bài giới thiệu sách và lá thư do nhóm biên soạn tự viết. “Không gia đình” (Hector Malot, 1878) và “Chiếc lá cuối cùng” (O. Henry, 1907) là tác phẩm thuộc phạm vi công cộng; ở đây chỉ tóm tắt, kể lại nội dung bằng lời của nhóm biên soạn, không trích bản dịch.'
  },
  steps: [
    { title: 'Bài giới thiệu sách gồm những gì?', html: `<ul><li><b>Thông tin cơ bản:</b> tên sách, tác giả, năm ra đời (hoặc nhà xuất bản), thể loại.</li>
      <li><b>Nội dung chính:</b> tóm tắt ngắn gọn, <b>không “tiết lộ” hết</b> những bất ngờ quan trọng.</li>
      <li><b>Điểm đặc sắc:</b> nhân vật, chi tiết, thông điệp, cách viết khiến em ấn tượng.</li>
      <li><b>Cảm nhận, đánh giá</b> của bản thân.</li>
      <li><b>Lời khuyên, lời mời đọc:</b> sách hợp với ai, nên đọc thế nào.</li></ul>`,
      svg: S.mindmap({ center: 'Bài giới thiệu sách', branches: [{ title: 'Thông tin', items: ['Tên sách, tác giả', 'Thể loại, năm'] }, { title: 'Nội dung', items: ['Tóm tắt ngắn', 'Không tiết lộ hết'] }, { title: 'Điểm đặc sắc', items: ['Nhân vật, chi tiết', 'Thông điệp'] }, { title: 'Lời mời đọc', items: ['Hợp với ai', 'Đọc thế nào'] }] }),
      caption: 'Sơ đồ các ý của bài giới thiệu sách.' },
    { title: 'Cách mở đầu và kết thúc hấp dẫn', html: `<ul><li>Mở bằng câu hỏi, lời mời, so sánh gần gũi: “Nếu bạn đang tìm một cuốn sách vừa hấp dẫn như phim phiêu lưu, vừa ấm áp như một cái ôm…”</li>
      <li>Kết bằng lời khuyên cụ thể: “Hãy dành cho Rê-mi 20 phút mỗi tối”.</li>
      <li>Nhan đề bài viết nên gợi tò mò: “‘Không gia đình’ – hành trình của một trái tim can đảm”.</li></ul>` },
    { title: 'Sáng tạo từ cuốn sách', html: `<p>Một số hình thức sáng tạo:</p>
      <ul><li>Viết thư gửi nhân vật hoặc tác giả.</li>
      <li>Viết tiếp hoặc viết lại kết thúc theo hướng khác (giữ đúng tính cách nhân vật).</li>
      <li>Nhập vai nhân vật kể lại một sự việc.</li>
      <li>Vẽ bìa sách mới, áp phích, sơ đồ nhân vật; làm video giới thiệu ngắn.</li></ul>
      <div class="box key">Sản phẩm sáng tạo phải dựa trên hiểu biết đúng về tác phẩm; không bóp méo nội dung, tính cách nhân vật.</div>` },
    { title: 'Kết nối cộng đồng người đọc', html: `<p>Chia sẻ sản phẩm qua nhiều kênh:</p>`,
      svg: S.flow({ w: 620, items: [{ title: 'Đọc', text: 'Nhật kí đọc' }, { title: 'Viết', text: 'Giới thiệu, sáng tạo' }, { title: 'Chia sẻ', text: 'Góc sách, CLB đọc' }, { title: 'Trao đổi', text: 'Nhận xét, gợi ý sách' }] }),
      caption: 'Từ đọc cá nhân đến cộng đồng người đọc.' },
    { title: 'Tôn trọng bản quyền và chỉnh sửa', html: `<ul><li>Ghi rõ tên sách, tác giả, dịch giả (nếu có); trích dẫn ngắn, đặt trong ngoặc kép, ghi nguồn.</li>
      <li>Không chép nguyên văn bài giới thiệu của người khác; không đăng toàn văn sách còn bản quyền lên mạng.</li>
      <li>Kiểm tra: đủ thông tin chưa? tóm tắt có ngắn gọn? có nêu được điểm đặc sắc và cảm nhận riêng? chính tả, dùng từ?</li></ul>` }
  ],
  summary: 'Bài giới thiệu sách gồm thông tin cơ bản, tóm tắt ngắn (không tiết lộ hết), điểm đặc sắc, cảm nhận và lời mời đọc; nên có nhan đề, mở đầu, kết thúc hấp dẫn. Sáng tạo từ sách: thư gửi nhân vật, viết lại kết thúc, nhập vai, vẽ bìa, làm video… dựa trên hiểu biết đúng về tác phẩm. Chia sẻ trong cộng đồng người đọc và luôn tôn trọng bản quyền.',
  examples: [
    { title: 'Phân tích bài giới thiệu mẫu', problem: 'Chỉ ra các phần của bài giới thiệu “Không gia đình”.', solution: 'Thông tin cơ bản: tên sách, tác giả Héc-to Ma-lô, năm 1878 (đoạn 1). Nội dung chính: tóm tắt hành trình của Rê-mi (đoạn 2). Điểm đặc sắc và cảm nhận: nhân vật cụ Vi-ta-li, thông điệp về gia đình (đoạn 3). Lời khuyên đọc: đọc từng chương, 20 phút mỗi tối (đoạn 4). Mở đầu bằng lời mời có so sánh, kết thúc bằng lời khuyên cụ thể.' },
    { title: 'Tóm tắt không tiết lộ hết', problem: 'Viết lại câu tóm tắt cho “Chiếc lá cuối cùng” sao cho không tiết lộ kết thúc bất ngờ.', solution: 'Ví dụ: “Giôn-xi, một cô họa sĩ trẻ mắc bệnh nặng, tin rằng khi chiếc lá thường xuân cuối cùng ngoài cửa sổ rụng xuống, cô cũng sẽ ra đi. Đêm ấy, mưa gió dữ dội… Liệu chiếc lá có còn? Và ai đã lặng lẽ làm điều kì diệu?” Câu hỏi bỏ lửng gợi tò mò mà không nói ra bí mật về cụ Bơ-men.' },
    { title: 'Nhận xét sản phẩm sáng tạo', problem: 'Lá thư gửi cụ Bơ-men có dựa đúng vào tác phẩm không? Điểm hay của lá thư là gì?', solution: 'Lá thư dựa đúng các chi tiết của truyện: cụ Bơ-men mơ vẽ kiệt tác, đêm mưa vẽ chiếc lá trên tường, Giôn-xi sống lại, cụ qua đời. Điểm hay: người viết không kể lại cả truyện mà bày tỏ cảm xúc (“Cháu đã khóc ở trang cuối cùng”) và nêu cách hiểu riêng: kiệt tác thật sự là tấm lòng hi sinh thầm lặng.' }
  ],
  exercises: [
    { question: 'Lập dàn ý bài giới thiệu một cuốn sách em yêu thích.', hints: ['Bốn phần: thông tin – nội dung – điểm đặc sắc, cảm nhận – lời mời đọc.', 'Nghĩ một nhan đề gợi tò mò.'], solution: 'Ví dụ “Rô-bin-xơn Cru-xô – bài học từ hòn đảo hoang”: (1) Thông tin: tiểu thuyết phiêu lưu của Đa-ni-en Đi-phô, 1719. (2) Nội dung: chàng trai sống sót sau vụ đắm tàu, một mình trên đảo hoang nhiều năm (không kể hết kết thúc). (3) Đặc sắc: chi tiết khắc vạch đếm ngày, tự làm gốm; thông điệp về ý chí, lạc quan. (4) Lời mời: hợp với bạn thích phiêu lưu; đọc chậm, ghi chép những “phát minh” của Rô-bin-xơn.' },
    { question: 'Viết đoạn mở đầu (3 – 4 câu) cho bài giới thiệu sách theo một trong ba cách: câu hỏi, lời mời, so sánh.', hints: ['Đặt người đọc vào trung tâm: “Bạn đã bao giờ…?”', 'Gắn với điều hấp dẫn nhất của cuốn sách.'], solution: 'Ví dụ (câu hỏi): “Bạn đã bao giờ tự hỏi: nếu chỉ còn một mình giữa biển khơi, mình sẽ sống ra sao? Hơn ba trăm năm trước, Đa-ni-en Đi-phô đã trả lời câu hỏi ấy bằng một cuốn tiểu thuyết khiến bao thế hệ bạn đọc say mê. Hãy cùng tôi lên hòn đảo của Rô-bin-xơn Cru-xô.”' },
    { question: 'Viết một sản phẩm sáng tạo ngắn (thư gửi nhân vật, nhập vai, hoặc viết tiếp) từ một tác phẩm em đã đọc.', hints: ['Giữ đúng tính cách, sự việc của tác phẩm.', 'Thể hiện cảm xúc và cách hiểu riêng.'], solution: 'Ví dụ (nhập vai Thứ Sáu): “Tôi không biết ngày ấy mình chạy bao lâu, chỉ biết sau lưng là tiếng la hét, trước mặt là rừng rậm. Rồi một người đàn ông râu dài, mặc áo da dê bước ra. Ông ấy đã cứu tôi. Ông dạy tôi gọi tên các đồ vật, dạy tôi trồng lúa, và tôi dạy ông cách chèo thuyền của người đảo tôi. Ông gọi tôi là Thứ Sáu – cái tên của ngày chúng tôi gặp nhau. Tôi không có gì để cảm ơn ngoài lòng trung thành suốt đời.” (Giữ đúng các chi tiết cơ bản của tác phẩm.)' }
  ],
  quiz: [
    { type: 'mcq', q: 'Phần nào KHÔNG nên có trong bài giới thiệu sách?', options: ['Kể hết toàn bộ kết thúc bất ngờ', 'Tên sách, tác giả', 'Điểm đặc sắc của sách', 'Lời mời đọc'], answer: 0, explain: 'Không nên tiết lộ hết để giữ sự tò mò.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Viết thư gửi nhân vật là một hình thức sáng tạo từ cuốn sách đã đọc.', answer: true, explain: 'Như lá thư gửi cụ Bơ-men.' },
    { type: 'short', q: 'Tên cậu bé nhân vật chính trong “Không gia đình” là gì?', answer: ['rê-mi', 'rê mi', 'remi', 're-mi', 'rémi'], answerText: 'Rê-mi', explain: 'Cậu bé đi hát rong cùng cụ Vi-ta-li.' },
    { type: 'mcq', q: 'Tác giả “Không gia đình” là:', options: ['Héc-to Ma-lô', 'O. Hen-ri', 'Mô-li-e', 'Đa-ni-en Đi-phô'], answer: 0, explain: 'Nhà văn Pháp, 1878.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Có thể đăng toàn văn một cuốn sách còn bản quyền lên mạng để giới thiệu cho bạn bè.', answer: false, explain: 'Vi phạm bản quyền; chỉ trích dẫn ngắn, ghi nguồn.' },
    { type: 'mcq', q: 'Khi viết lại kết thúc một truyện, em cần:', options: ['giữ đúng tính cách nhân vật và logic câu chuyện', 'thay đổi hoàn toàn tính cách nhân vật', 'bỏ qua các sự việc đã có', 'chép lại kết thúc cũ'], answer: 0, explain: 'Sáng tạo dựa trên hiểu biết đúng.' },
    { type: 'short', q: 'Trong “Chiếc lá cuối cùng”, cụ họa sĩ già đã vẽ chiếc lá tên là gì (“cụ …”)?', answer: ['bơ-men', 'bơ men', 'bomen', 'bo-men', 'cụ bơ-men'], answerText: 'Bơ-men', explain: 'Kiệt tác của cụ Bơ-men.' },
    { type: 'mcq', q: 'Kênh nào phù hợp để kết nối cộng đồng người đọc ở trường?', options: ['Câu lạc bộ đọc sách, góc sách lớp', 'Chép bài của bạn nộp thay', 'Giữ sách không cho ai mượn', 'Chỉ đọc một mình, không trao đổi'], answer: 0, explain: 'Chia sẻ, trao đổi về sách.' }
  ]
});
})();
