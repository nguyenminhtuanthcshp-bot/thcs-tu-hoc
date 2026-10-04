/* Ngữ văn 6 – Bài 6. Đọc hiểu: Truyền thuyết. Văn bản đọc: truyền thuyết dân gian “Sự tích Hồ Gươm” (văn học dân gian, thuộc phạm vi công cộng), do nhóm biên soạn kể lại bằng lời của mình. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-6/b6-doc', {
  objectives: [
    'Nhận biết được đặc điểm của truyền thuyết: nhân vật, sự kiện liên quan đến lịch sử; yếu tố kì ảo; cốt truyện.',
    'Tóm tắt được truyền thuyết theo các sự việc chính.',
    'Chỉ ra và nêu ý nghĩa của các chi tiết kì ảo.',
    'Hiểu được thái độ, tình cảm của nhân dân gửi gắm trong truyền thuyết.'
  ],
  intro: 'Giữa lòng Hà Nội có một hồ nước xanh mang tên Hoàn Kiếm – “trả gươm”. Vì sao hồ lại có tên như vậy? Câu trả lời nằm trong một truyền thuyết được ông cha ta kể lại qua bao đời.',
  text: {
    title: 'Sự tích Hồ Gươm (kể lại)',
    html: `<p>Ngày xưa, giặc Minh đô hộ nước ta, làm nhiều điều bạo ngược. Ở vùng Lam Sơn, Lê Lợi dựng cờ khởi nghĩa, nhưng buổi đầu thế lực còn yếu, nhiều lần bị thua. Đức Long Quân thấy vậy bèn quyết định cho nghĩa quân mượn thanh gươm thần.</p>
<p>Ở Thanh Hoá có người đánh cá tên Lê Thận. Một đêm thả lưới, anh kéo lên được một thanh sắt. Anh vứt đi, thả lưới lần nữa, lại gặp đúng thanh sắt ấy, đến lần thứ ba vẫn thế. Anh mang về nhà, không để ý. Về sau Lê Thận gia nhập nghĩa quân. Một lần chủ tướng Lê Lợi ghé nhà, thấy thanh sắt trong góc tối bỗng sáng rực; cầm lên xem thì thấy khắc hai chữ “Thuận Thiên” (thuận theo ý trời). Đó chính là lưỡi gươm.</p>
<p>Một lần bị giặc đuổi, Lê Lợi chạy vào rừng, thấy trên ngọn cây đa có ánh sáng lạ. Trèo lên, ông lấy được một chuôi gươm nạm ngọc. Đem tra vào lưỡi gươm của Lê Thận thì vừa như in. Từ đó, nhờ gươm thần, nghĩa quân đánh đâu thắng đó, cuối cùng đuổi sạch giặc ra khỏi bờ cõi.</p>
<p>Một năm sau, vua Lê Lợi cưỡi thuyền rồng dạo quanh hồ Tả Vọng. Bỗng một con Rùa Vàng nổi lên, nói: “Việc quân đã xong, xin bệ hạ hoàn gươm lại cho Long Quân.” Nhà vua hiểu ra, rút gươm trao cho Rùa. Rùa ngậm lấy gươm, lặn xuống đáy nước. Từ đó hồ Tả Vọng được gọi là hồ Hoàn Kiếm.</p>`,
    source: 'Truyền thuyết dân gian Việt Nam (phạm vi công cộng), nhóm biên soạn kể lại bằng lời văn của mình, không sao chép văn bản SGK.'
  },
  steps: [
    { title: 'Truyền thuyết là gì?', html: `<p><b>Truyền thuyết</b> là loại truyện dân gian kể về các nhân vật, sự kiện có liên quan đến <b>lịch sử</b>, thường có yếu tố <b>kì ảo</b>, thể hiện thái độ và cách đánh giá của nhân dân.</p>
      <ul><li>Nhân vật chính: thường là người anh hùng có công với cộng đồng (Thánh Gióng, Lê Lợi…).</li><li>Thường gắn với địa danh, di tích có thật (hồ Hoàn Kiếm, làng Gióng…).</li><li>Cốt truyện xoay quanh một sự kiện: chống giặc, trị thuỷ, dựng nước…</li></ul>` },
    { title: 'Cốt truyện “Sự tích Hồ Gươm”', html: `<p>Các sự việc chính được sắp xếp theo trình tự thời gian:</p>`,
      svg: S.storyArc({ stages: ['Hoàn cảnh', 'Nhận gươm', 'Đánh giặc', 'Trả gươm'], peak: 2, notes: ['Giặc Minh đô hộ; nghĩa quân yếu', 'Lê Thận vớt lưỡi, Lê Lợi được chuôi', 'Gươm thần giúp thắng giặc', 'Rùa Vàng đòi gươm; hồ Hoàn Kiếm'] }),
      caption: 'Sơ đồ cốt truyện truyền thuyết “Sự tích Hồ Gươm”.' },
    { title: 'Yếu tố kì ảo và ý nghĩa', html: `<table class="tbl"><tr><th>Chi tiết kì ảo</th><th>Ý nghĩa</th></tr><tr><td>Long Quân cho mượn gươm thần</td><td>Cuộc khởi nghĩa chính nghĩa, được thần linh (tổ tiên) ủng hộ</td></tr><tr><td>Lưỡi gươm dưới nước, chuôi gươm trên rừng; ghép lại vừa khít</td><td>Sức mạnh đoàn kết của nhân dân mọi miền (miền xuôi – miền ngược)</td></tr><tr><td>Chữ “Thuận Thiên”</td><td>Khởi nghĩa hợp lòng trời, lòng người</td></tr><tr><td>Rùa Vàng đòi gươm</td><td>Tư tưởng yêu hoà bình; lời nhắc giữ gìn đất nước; giải thích tên hồ</td></tr></table>` },
    { title: 'Cốt lõi lịch sử và yếu tố tưởng tượng', html: `<p>Truyền thuyết có <b>cốt lõi lịch sử</b> (khởi nghĩa Lam Sơn do Lê Lợi lãnh đạo chống quân Minh, thế kỉ XV) được bao phủ bởi <b>yếu tố tưởng tượng, kì ảo</b>. Nhờ đó, lịch sử trở nên gần gũi, thiêng liêng và dễ nhớ.</p><div class="box tip">Đọc truyền thuyết: tìm <b>nhân vật – sự kiện lịch sử – chi tiết kì ảo – ý nghĩa – dấu tích còn lại</b>.</div>` },
    { title: 'So sánh với truyện cổ tích (chuẩn bị Bài 7)', html: `<table class="tbl"><tr><th></th><th>Truyền thuyết</th><th>Cổ tích</th></tr><tr><td>Nội dung</td><td>Nhân vật, sự kiện lịch sử</td><td>Số phận con người bình thường</td></tr><tr><td>Mục đích</td><td>Ngợi ca người anh hùng, giải thích di tích</td><td>Ước mơ công bằng, cái thiện thắng cái ác</td></tr><tr><td>Dấu tích</td><td>Thường gắn với địa danh có thật</td><td>Thường không xác định</td></tr></table>` }
  ],
  summary: 'Truyền thuyết kể về nhân vật, sự kiện liên quan đến lịch sử, có yếu tố kì ảo, gắn với dấu tích có thật, thể hiện thái độ của nhân dân. “Sự tích Hồ Gươm” ca ngợi khởi nghĩa Lam Sơn chính nghĩa, đoàn kết, và giải thích tên hồ Hoàn Kiếm.',
  examples: [
    { title: 'Tóm tắt truyện', problem: 'Tóm tắt “Sự tích Hồ Gươm” trong 4 câu.', solution: 'Giặc Minh đô hộ, nghĩa quân Lam Sơn còn yếu nên Long Quân cho mượn gươm thần. Lê Thận vớt được lưỡi gươm dưới nước, Lê Lợi lấy được chuôi gươm trên ngọn đa; ghép lại vừa khít. Nhờ gươm thần, nghĩa quân đánh tan giặc. Khi hoà bình, Rùa Vàng đòi gươm, hồ Tả Vọng đổi tên là hồ Hoàn Kiếm.' },
    { title: 'Ý nghĩa chi tiết', problem: 'Vì sao lưỡi gươm và chuôi gươm lại ở hai nơi khác nhau?', solution: 'Lưỡi gươm ở dưới nước (miền xuôi), chuôi gươm ở trên rừng (miền ngược) – thể hiện cuộc khởi nghĩa có sự đoàn kết, góp sức của nhân dân khắp nơi.' },
    { title: 'Nhận diện thể loại', problem: 'Nêu hai dấu hiệu cho thấy đây là truyền thuyết.', solution: 'Gắn với nhân vật, sự kiện lịch sử có thật (Lê Lợi, khởi nghĩa Lam Sơn); có yếu tố kì ảo (gươm thần, Rùa Vàng) và giải thích một địa danh có thật (hồ Hoàn Kiếm).' }
  ],
  exercises: [
    { question: 'Liệt kê các nhân vật trong truyện và cho biết nhân vật nào là con vật kì ảo.', hints: ['Có người đánh cá, chủ tướng, thần linh.', 'Con vật nổi lên giữa hồ.'], solution: 'Lê Lợi, Lê Thận, Long Quân, Rùa Vàng. Rùa Vàng là con vật kì ảo (biết nói, thay Long Quân đòi gươm).' },
    { question: 'Chi tiết “Rùa Vàng đòi gươm” có ý nghĩa gì?', hints: ['Khi nào Rùa đòi gươm?', 'Nghĩ về hoà bình.'], solution: 'Khi đất nước đã yên, gươm được trả lại: thể hiện khát vọng hoà bình, tinh thần cảnh giác; đồng thời giải thích tên hồ Hoàn Kiếm.' },
    { question: 'Viết đoạn văn (4–5 câu) nêu cảm nhận về nhân vật Lê Lợi.', hints: ['Lê Lợi là người như thế nào?', 'Vì sao ông được giao gươm thần?'], solution: 'Ví dụ: Lê Lợi là vị chủ tướng yêu nước, dám đứng lên chống giặc khi đất nước bị đô hộ. Ông được Long Quân tin tưởng trao gươm thần vì cuộc khởi nghĩa chính nghĩa, hợp lòng dân. Ông biết đoàn kết mọi người, như lưỡi gươm và chuôi gươm hợp lại vừa khít. Khi đất nước yên bình, ông sẵn lòng trả gươm, cho thấy tấm lòng yêu hoà bình. Em kính phục và biết ơn người anh hùng ấy.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Truyền thuyết là truyện dân gian kể về:', options: ['Nhân vật, sự kiện liên quan đến lịch sử', 'Loài vật biết nói để răn dạy', 'Chuyện cười', 'Người mồ côi, người em út'], answer: 0, explain: 'Đặc trưng truyền thuyết.' },
    { type: 'mcq', q: 'Người vớt được lưỡi gươm là:', options: ['Lê Thận', 'Lê Lợi', 'Long Quân', 'Thánh Gióng'], answer: 0, explain: 'Người đánh cá Lê Thận.' },
    { type: 'mcq', q: 'Hai chữ khắc trên lưỡi gươm là:', options: ['Thuận Thiên', 'Hoàn Kiếm', 'Lam Sơn', 'Thăng Long'], answer: 0, explain: '“Thuận Thiên” – thuận theo ý trời.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Chi tiết lưỡi gươm và chuôi gươm ở hai nơi thể hiện sức mạnh đoàn kết của nhân dân.', answer: true, explain: 'Miền xuôi – miền ngược hợp sức.' },
    { type: 'mcq', q: 'Con vật đòi lại gươm là:', options: ['Rùa Vàng', 'Rồng', 'Chim Lạc', 'Ngựa sắt'], answer: 0, explain: 'Rùa Vàng thay Long Quân đòi gươm.' },
    { type: 'mcq', q: 'Truyện giải thích tên gọi của:', options: ['Hồ Hoàn Kiếm', 'Núi Tản Viên', 'Làng Gióng', 'Sông Hồng'], answer: 0, explain: 'Hồ Tả Vọng đổi thành hồ Hoàn Kiếm.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Truyền thuyết không có yếu tố kì ảo.', answer: false, explain: 'Truyền thuyết thường có yếu tố kì ảo.' },
    { type: 'mcq', q: 'Cốt lõi lịch sử của truyện là:', options: ['Khởi nghĩa Lam Sơn chống quân Minh', 'Cuộc chiến với giặc Ân', 'Việc trị thuỷ', 'Việc tìm ra lửa'], answer: 0, explain: 'Lê Lợi lãnh đạo khởi nghĩa Lam Sơn (thế kỉ XV).' }
  ]
});
})();
