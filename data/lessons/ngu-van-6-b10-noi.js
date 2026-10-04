/* Ngữ văn 6 – Bài 10. Nói và nghe: Giới thiệu sản phẩm minh hoạ sách; trình bày ý kiến về cuốn sách. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-6/b10-noi', {
  objectives: [
    'Giới thiệu được sản phẩm minh hoạ cho cuốn sách đã đọc: ý tưởng, cách thực hiện, thông điệp.',
    'Trình bày được ý kiến về cuốn sách (điều em thích, bài học, hiện tượng gợi ra) có lí lẽ, dẫn chứng.',
    'Biết lắng nghe, đặt câu hỏi, nhận xét sản phẩm và bài nói của bạn.'
  ],
  intro: 'Sản phẩm đã sẵn sàng: một bức tranh, một chiếc bookmark hay một áp phích. Giờ là lúc giới thiệu nó trước lớp và thuyết phục các bạn: “Hãy đọc cuốn sách này!”',
  steps: [
    { title: 'Nội dung bài giới thiệu', html: `<ul><li>Thông tin cuốn sách: tên, tác giả, thể loại.</li><li>Sản phẩm: là gì, thể hiện nội dung nào của sách, vì sao chọn cách thể hiện ấy.</li><li>Ý kiến về cuốn sách: điều em thích nhất, bài học, hiện tượng đời sống gợi ra.</li><li>Lời mời các bạn đọc sách.</li></ul>` },
    { title: 'Các bước chuẩn bị', html: `<p>Thực hiện:</p>`,
      svg: S.flow({ items: [{ title: 'Hoàn thiện', text: 'Sản phẩm minh hoạ' }, { title: 'Dàn ý', text: 'Sách – sản phẩm – ý kiến – lời mời' }, { title: 'Luyện nói', text: 'Vừa nói vừa chỉ vào sản phẩm' }, { title: 'Trình bày', text: 'Nói, trả lời câu hỏi' }] }),
      caption: 'Quy trình chuẩn bị giới thiệu sản phẩm minh hoạ sách.' },
    { title: 'Dàn ý mẫu (áp phích “Vịt con xấu xí”)', html: `<table class="tbl"><tr><th>Phần</th><th>Nội dung</th></tr><tr><td>Mở đầu</td><td>Chào; giơ áp phích: “Các bạn có đoán được chú chim trắng này từng bị gọi là xấu xí không?”</td></tr><tr><td>Giới thiệu sách</td><td>Truyện của Andersen, nhà văn Đan Mạch; tóm tắt 2–3 câu.</td></tr><tr><td>Giới thiệu sản phẩm</td><td>Nửa trái là vịt con xám co ro giữa mùa đông, nửa phải là thiên nga trắng: thể hiện sự thay đổi; màu lạnh – ấm.</td></tr><tr><td>Ý kiến</td><td>Em thích truyện vì thông điệp: đừng đánh giá qua vẻ ngoài; liên hệ việc chê bai bạn bè.</td></tr><tr><td>Kết thúc</td><td>Mời các bạn đọc; cảm ơn.</td></tr></table>` },
    { title: 'Kĩ năng trình bày và lắng nghe', html: `<ul><li>Đứng cạnh sản phẩm, không che; chỉ vào chi tiết khi nói đến.</li><li>Giọng hào hứng; nhìn người nghe.</li><li>Người nghe: quan sát sản phẩm, ghi nhận điểm hay, đặt câu hỏi (“Vì sao bạn chọn màu này?”).</li></ul>` },
    { title: 'Bảng kiểm', html: `<table class="tbl"><tr><th>Tiêu chí</th><th>Đạt / Chưa đạt</th></tr><tr><td>Giới thiệu rõ sách (tên, tác giả, nội dung chính)</td><td></td></tr><tr><td>Giải thích được ý tưởng sản phẩm</td><td></td></tr><tr><td>Nêu ý kiến về sách có lí lẽ, dẫn chứng</td><td></td></tr><tr><td>Sản phẩm sáng tạo, liên quan chặt chẽ với sách</td><td></td></tr><tr><td>Giọng nói, ánh mắt, cử chỉ phù hợp</td><td></td></tr><tr><td>Trả lời câu hỏi rõ ràng; đúng thời gian</td><td></td></tr></table>` }
  ],
  summary: 'Giới thiệu sản phẩm minh hoạ sách: nêu thông tin sách, giải thích ý tưởng sản phẩm, trình bày ý kiến về sách (điều thích, bài học), lời mời đọc; trình bày tự tin, dùng sản phẩm minh hoạ; người nghe quan sát, hỏi, nhận xét theo bảng kiểm.',
  examples: [
    { title: 'Giải thích ý tưởng sản phẩm', problem: 'Viết 2 câu giải thích vì sao chọn làm bookmark cho truyện “Cây tre trăm đốt”.', solution: '“Mình làm bookmark hình cây tre có đúng một trăm đốt nhỏ, vì đó là chi tiết kì ảo nổi bật nhất. Mặt sau ghi câu ‘Khắc nhập, khắc xuất’ để ai dùng bookmark cũng nhớ bài học giữ lời hứa.”' },
    { title: 'Nêu ý kiến về sách', problem: 'Nêu ý kiến về truyện “Bộ quần áo mới của hoàng đế” trong 2–3 câu.', solution: '“Mình thích truyện vì nó vừa hài hước vừa sâu sắc. Cậu bé dám nói thật trong khi cả đám đông im lặng. Truyện nhắc mình đừng sợ nói điều đúng chỉ vì mọi người nói khác.”' },
    { title: 'Câu hỏi của người nghe', problem: 'Đặt một câu hỏi cho bạn giới thiệu truyện tranh 4 khung.', solution: '“Nếu được vẽ thêm khung thứ năm, bạn sẽ vẽ cảnh gì và vì sao?”' }
  ],
  exercises: [
    { question: 'Lập dàn ý giới thiệu một sản phẩm minh hoạ cho cuốn sách em đã đọc.', hints: ['Theo 5 phần như dàn ý mẫu.', 'Chú ý phần giải thích ý tưởng.'], solution: 'Ví dụ: MĐ – chào, câu hỏi gợi tò mò; Sách – “Sự tích Hồ Gươm” (dân gian), tóm tắt; Sản phẩm – truyện tranh 4 khung, mỗi khung một sự việc; Ý kiến – thích chi tiết Rùa Vàng đòi gươm, bài học yêu hoà bình; KT – mời đọc thêm truyền thuyết, cảm ơn.' },
    { question: 'Nêu hai lỗi thường gặp khi giới thiệu sản phẩm trước lớp và cách khắc phục.', hints: ['Vị trí đứng.', 'Nội dung chỉ tả sản phẩm, quên nói về sách.'], solution: 'Che mất sản phẩm hoặc quay lưng lại lớp → đứng nghiêng bên cạnh. Chỉ tả sản phẩm mà quên nêu ý kiến về sách → theo dàn ý đủ các phần.' },
    { question: 'Viết một lời nhận xét cho sản phẩm của bạn theo cách “khen – góp ý – gợi ý”.', hints: ['Khen điểm sáng tạo.', 'Góp ý cụ thể, gợi ý cách sửa.'], solution: 'Ví dụ: “Áp phích của bạn màu sắc đẹp, hình ảnh bắt mắt. Tuy nhiên chữ tên sách hơi nhỏ, đứng xa khó đọc. Bạn thử viết to và đậm hơn ở phía trên nhé.”' }
  ],
  quiz: [
    { type: 'mcq', q: 'Bài giới thiệu sản phẩm minh hoạ cần có:', options: ['Thông tin sách, ý tưởng sản phẩm, ý kiến về sách', 'Chỉ giá tiền sản phẩm', 'Chỉ tên sách', 'Chỉ lời cảm ơn'], answer: 0, explain: 'Đủ các nội dung.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khi giới thiệu, nên chỉ vào chi tiết sản phẩm lúc nói đến.', answer: true, explain: 'Minh hoạ trực quan.' },
    { type: 'mcq', q: 'Khi đứng trình bày, em nên:', options: ['Đứng cạnh sản phẩm, hướng về người nghe', 'Che sản phẩm', 'Quay lưng lại lớp', 'Ngồi xuống'], answer: 0, explain: 'Giữ giao tiếp.' },
    { type: 'mcq', q: 'Câu hỏi phù hợp của người nghe:', options: ['“Vì sao bạn chọn màu này?”', '“Sao xấu thế?”', '“Bao giờ xong?”', '“Mình về được chưa?”'], answer: 0, explain: 'Câu hỏi xây dựng.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Chỉ cần giới thiệu sản phẩm, không cần nói về cuốn sách.', answer: false, explain: 'Sản phẩm gắn với sách.' },
    { type: 'mcq', q: 'Phần kết thúc nên có:', options: ['Lời mời đọc sách và cảm ơn', 'Một câu chuyện khác', 'Lời chê sách khác', 'Im lặng'], answer: 0, explain: 'Khép lại trọn vẹn.' },
    { type: 'mcq', q: 'Công thức nhận xét được khuyến khích:', options: ['Khen – góp ý – gợi ý', 'Chỉ chê', 'Chỉ khen', 'Không nhận xét'], answer: 0, explain: 'Nhận xét xây dựng.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nên giải thích vì sao chọn cách thể hiện sản phẩm.', answer: true, explain: 'Giúp người nghe hiểu ý tưởng.' }
  ]
});
})();
