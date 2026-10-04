/* Ngữ văn 7 – Bài 8. Nói và nghe: Trình bày ý kiến về một vấn đề trong đời sống. Ví dụ do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-7/b8-noi', {
  objectives: [
    'Trình bày được ý kiến (tán thành hoặc phản đối) về một vấn đề trong đời sống, có lí lẽ và bằng chứng thuyết phục.',
    'Biết sử dụng giọng nói, ánh mắt, cử chỉ phù hợp khi trình bày.',
    'Biết lắng nghe, ghi chép ý chính và phản hồi ý kiến của người khác.'
  ],
  intro: 'Viết được một bài nghị luận là tốt, nhưng đứng trước lớp nói cho mọi người cùng nghe lại là thử thách khác. Bài học này giúp em biến dàn ý thành một bài nói tự tin, thuyết phục.',
  steps: [
    { title: 'Chọn vấn đề', html: `<p>Một số vấn đề đời sống gần gũi với học sinh lớp 7:</p>
      <ul><li>Có nên cho học sinh mang điện thoại đến trường?</li><li>Vượt qua nỗi sợ nói trước đám đông.</li><li>Học sinh có nên tham gia hoạt động tình nguyện?</li><li>Ý kiến: “Thất bại là điều đáng xấu hổ”.</li></ul>
      <div class="box tip">Chọn vấn đề em thật sự có trải nghiệm và suy nghĩ – bài nói sẽ chân thành và tự nhiên hơn.</div>` },
    { title: 'Các bước chuẩn bị và trình bày', html: `<p>Quy trình:</p>`,
      svg: S.flow({ items: [{ title: 'Chuẩn bị', text: 'Xác định vấn đề, người nghe, thời gian' }, { title: 'Dàn ý', text: 'Ghi từ khoá lên thẻ nhỏ' }, { title: 'Luyện nói', text: 'Trước gương, bấm giờ' }, { title: 'Trình bày, trao đổi', text: 'Nói – nghe – phản hồi' }] }),
      caption: 'Bốn bước trình bày ý kiến.' },
    { title: 'Cấu trúc bài nói', html: `<table class="tbl"><tr><th>Phần</th><th>Nội dung</th><th>Ví dụ (vấn đề: sợ nói trước đám đông)</th></tr>
      <tr><td>Mở đầu</td><td>Chào, nêu vấn đề và ý kiến</td><td>“Chào các bạn! Mình tin nỗi sợ nói trước đám đông có thể vượt qua được.”</td></tr>
      <tr><td>Triển khai</td><td>2–3 lí lẽ + bằng chứng</td><td>Chuẩn bị kĩ làm giảm hồi hộp; luyện tập từ nhóm nhỏ; câu chuyện của bản thân</td></tr>
      <tr><td>Kết thúc</td><td>Khẳng định ý kiến, cảm ơn</td><td>“Hãy thử giơ tay phát biểu một lần mỗi tuần. Cảm ơn các bạn đã lắng nghe!”</td></tr></table>` },
    { title: 'Yếu tố phi ngôn ngữ', html: `<p>Người nghe tiếp nhận cả lời nói lẫn cách em nói:</p>`,
      svg: S.mindmap({ center: 'Nói thuyết phục', branches: [{ title: 'Giọng nói', items: ['Rõ ràng, âm lượng vừa', 'Nhấn giọng ý chính'] }, { title: 'Ánh mắt', items: ['Nhìn bao quát người nghe'] }, { title: 'Cử chỉ, tư thế', items: ['Đứng thẳng, tay tự nhiên', 'Nét mặt thân thiện'] }, { title: 'Phương tiện hỗ trợ', items: ['Tranh ảnh, trang chiếu', 'Thẻ ghi từ khoá'] }] }),
      caption: 'Kết hợp ngôn ngữ và phi ngôn ngữ.' },
    { title: 'Lắng nghe và phản hồi', html: `<table class="tbl"><tr><th>Người nói</th><th>Người nghe</th></tr>
      <tr><td>Nói đúng thời gian (3–5 phút)</td><td>Ghi chép ý chính, câu hỏi</td></tr>
      <tr><td>Sẵn sàng trả lời câu hỏi, tiếp thu góp ý</td><td>Nhận xét theo tiêu chí: ý kiến rõ, lí lẽ – bằng chứng, cách nói</td></tr>
      <tr><td>Cảm ơn người góp ý</td><td>Góp ý tôn trọng, cụ thể</td></tr></table>` }
  ],
  summary: 'Trình bày ý kiến về vấn đề đời sống: chọn vấn đề gần gũi; chuẩn bị dàn ý bằng từ khoá; bài nói gồm mở đầu (nêu vấn đề, ý kiến), triển khai (lí lẽ, bằng chứng), kết thúc (khẳng định, cảm ơn); kết hợp giọng nói, ánh mắt, cử chỉ, phương tiện hỗ trợ; người nghe ghi chép, nhận xét, góp ý tôn trọng.',
  examples: [
    { title: 'Lời mở đầu gây chú ý', problem: 'Viết lời mở đầu cho bài nói về vấn đề “Có nên mang điện thoại đến trường?”.', solution: '“Các bạn thử đếm xem hôm qua mình mở điện thoại bao nhiêu lần? Hôm nay, mình muốn chia sẻ ý kiến: học sinh không nên mang điện thoại vào lớp học, trừ khi thầy cô yêu cầu dùng cho bài học.”' },
    { title: 'Bằng chứng từ trải nghiệm', problem: 'Nêu một bằng chứng từ trải nghiệm bản thân cho ý kiến “Có thể vượt qua nỗi sợ nói trước đám đông”.', solution: '“Năm lớp 6, lần đầu thuyết trình mình run đến quên hết ý. Sau đó mình tập nói trước gương mỗi tối và trình bày trong nhóm nhỏ trước. Đến cuối năm, mình đã tự tin dẫn chương trình văn nghệ của lớp.”' },
    { title: 'Trả lời câu hỏi phản biện', problem: 'Người nghe hỏi: “Nếu có việc gấp cần gọi bố mẹ thì sao?” Em trả lời thế nào (với ý kiến không mang điện thoại vào lớp)?', solution: '“Cảm ơn bạn đã hỏi. Trường hợp khẩn cấp, bạn có thể nhờ thầy cô chủ nhiệm hoặc phòng bảo vệ liên lạc. Ngoài giờ học, điện thoại có thể được cất giữ an toàn và lấy lại khi ra về.”' }
  ],
  exercises: [
    { question: 'Lập dàn ý bài nói (bằng từ khoá) cho vấn đề: “Học sinh có nên tham gia hoạt động tình nguyện?”', hints: ['Nêu rõ ý kiến: nên.', 'Hai lí lẽ + bằng chứng.'], solution: 'Mở đầu: chào; ý kiến – nên tham gia. Triển khai: (1) giúp đỡ cộng đồng – quyên góp sách cho vùng khó khăn; (2) rèn kĩ năng, trưởng thành – làm việc nhóm, giao tiếp; (3) lưu ý: phù hợp sức khoẻ, có người lớn hướng dẫn. Kết thúc: kêu gọi, cảm ơn.' },
    { question: 'Khi trình bày, em quên mất một ý. Em nên xử lí thế nào?', hints: ['Thẻ từ khoá có ích gì?', 'Bình tĩnh, không dừng quá lâu.'], solution: 'Bình tĩnh nhìn thẻ từ khoá; nếu vẫn chưa nhớ, chuyển sang ý tiếp theo và bổ sung ý bị quên ở phần kết hoặc khi trả lời câu hỏi. Tránh im lặng quá lâu hoặc xin lỗi liên tục.' },
    { question: 'Viết 3 tiêu chí để nhận xét bài nói của bạn và một lời góp ý mẫu.', hints: ['Nội dung, lập luận, cách nói.', 'Góp ý: khen – góp ý – gợi ý.'], solution: 'Tiêu chí: (1) Ý kiến rõ ràng; (2) Lí lẽ, bằng chứng thuyết phục; (3) Giọng nói, ánh mắt, cử chỉ phù hợp. Góp ý mẫu: “Ý kiến của bạn rất rõ, bằng chứng từ trải nghiệm rất thuyết phục. Bạn có thể nhìn bao quát cả lớp hơn thay vì chỉ nhìn thẻ.”' }
  ],
  quiz: [
    { type: 'mcq', q: 'Khi chuẩn bị bài nói, nên ghi dàn ý như thế nào?', options: ['Từ khoá trên thẻ nhỏ', 'Viết cả bài để đọc', 'Không cần chuẩn bị', 'Chỉ ghi tên vấn đề'], answer: 0, explain: 'Từ khoá giúp nói tự nhiên.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Ánh mắt nên nhìn bao quát người nghe.', answer: true, explain: 'Tạo sự kết nối.' },
    { type: 'mcq', q: 'Phần mở đầu bài nói cần:', options: ['Chào và nêu vấn đề, ý kiến', 'Trình bày tất cả bằng chứng', 'Cảm ơn và kết thúc', 'Đặt câu hỏi cho giám khảo'], answer: 0, explain: 'Mở đầu nêu vấn đề.' },
    { type: 'mcq', q: 'Người nghe nên làm gì trong khi bạn trình bày?', options: ['Ghi chép ý chính và câu hỏi', 'Nói chuyện riêng', 'Ngắt lời liên tục', 'Làm bài tập môn khác'], answer: 0, explain: 'Lắng nghe tích cực.' },
    { type: 'short', q: 'Thời gian hợp lí cho một bài trình bày ý kiến trên lớp là khoảng 3 đến mấy phút? (ghi số)', answer: ['5', 'năm'], answerText: '5', explain: 'Khoảng 3–5 phút.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khi bị hỏi vặn, người nói nên tỏ ra khó chịu.', answer: false, explain: 'Cần bình tĩnh, cảm ơn và trả lời.' },
    { type: 'mcq', q: 'Yếu tố nào KHÔNG phải phi ngôn ngữ?', options: ['Lí lẽ trong bài', 'Nét mặt', 'Cử chỉ tay', 'Tư thế đứng'], answer: 0, explain: 'Lí lẽ là nội dung ngôn ngữ.' },
    { type: 'mcq', q: 'Bằng chứng từ trải nghiệm bản thân có tác dụng:', options: ['Làm bài nói chân thực, gần gũi', 'Làm bài nói lạc đề', 'Không có tác dụng', 'Khiến người nghe khó hiểu'], answer: 0, explain: 'Tăng sức thuyết phục.' }
  ]
});
})();
