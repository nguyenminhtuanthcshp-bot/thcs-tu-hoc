/* Ngữ văn 7 – Ôn tập học kì II (Bài 6 – Bài 10). Ví dụ do nhóm biên soạn tự viết hoặc là văn học dân gian, tác phẩm thuộc phạm vi công cộng. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-7/on-tap-hk2', {
  objectives: [
    'Hệ thống hoá các thể loại đã học ở học kì II: truyện ngụ ngôn, tục ngữ, truyện khoa học viễn tưởng, văn bản nghị luận, văn bản thông tin.',
    'Hệ thống hoá kiến thức tiếng Việt: thành ngữ, nói quá, mạch lạc và liên kết, dấu chấm lửng, từ ngữ liên kết, thuật ngữ, cước chú, tài liệu tham khảo, yếu tố Hán Việt.',
    'Ôn lại các kiểu bài viết, bài nói; tự tin làm bài kiểm tra cuối năm.'
  ],
  intro: 'Từ những câu chuyện ngụ ngôn dân gian đến con tàu Nautilus, từ bài văn nghị luận đến văn bản thông tin về rừng ngập mặn – học kì II đã mở ra rất nhiều cánh cửa. Hãy cùng xâu chuỗi lại!',
  steps: [
    { title: 'Bản đồ học kì II', html: `<p>Năm bài học của học kì II:</p>`,
      svg: S.mindmap({ center: 'Ngữ văn 7 – HK II', branches: [{ title: 'Bài 6', items: ['Ngụ ngôn, tục ngữ', 'Thành ngữ, nói quá'] }, { title: 'Bài 7', items: ['Truyện khoa học viễn tưởng', 'Liên kết; dấu chấm lửng'] }, { title: 'Bài 8', items: ['Văn bản nghị luận', 'Từ ngữ liên kết; thuật ngữ'] }, { title: 'Bài 9', items: ['Văn bản thông tin', 'Cước chú; Hán Việt'] }, { title: 'Bài 10', items: ['Đọc sách mới', 'Ngày hội với sách'] }] }),
      caption: 'Sơ đồ tư duy tổng hợp học kì II.' },
    { title: 'So sánh các thể loại', html: `<table class="tbl"><tr><th>Thể loại</th><th>Mục đích</th><th>Dấu hiệu nhận biết</th></tr>
      <tr><td>Truyện ngụ ngôn</td><td>Nêu bài học ứng xử</td><td>Ngắn, nhân vật loài vật/đồ vật/người không tên, tình huống bất ngờ</td></tr>
      <tr><td>Tục ngữ</td><td>Đúc kết kinh nghiệm</td><td>Câu ngắn, có vần, nhịp, hình ảnh</td></tr>
      <tr><td>Truyện khoa học viễn tưởng</td><td>Tưởng tượng về tương lai dựa trên khoa học</td><td>Phát minh vượt thời đại, không gian kì lạ, nhân vật nhà khoa học</td></tr>
      <tr><td>Văn bản nghị luận</td><td>Thuyết phục</td><td>Luận đề, luận điểm, lí lẽ, bằng chứng</td></tr>
      <tr><td>Văn bản thông tin</td><td>Cung cấp tri thức</td><td>Sa-pô, đề mục, cước chú, phương tiện phi ngôn ngữ</td></tr></table>` },
    { title: 'Tổng hợp tiếng Việt', html: `<table class="tbl"><tr><th>Kiến thức</th><th>Ghi nhớ nhanh</th><th>Ví dụ</th></tr>
      <tr><td>Thành ngữ</td><td>Cụm từ cố định, nghĩa bóng</td><td>ếch ngồi đáy giếng</td></tr>
      <tr><td>Nói quá</td><td>Phóng đại để nhấn mạnh, biểu cảm</td><td>nghìn cân treo sợi tóc</td></tr>
      <tr><td>Liên kết</td><td>Phép lặp, thế, nối, từ đồng nghĩa</td><td>Nemo → ông → vị thuyền trưởng</td></tr>
      <tr><td>Dấu chấm lửng</td><td>Liệt kê chưa hết; ngập ngừng; giãn nhịp; âm thanh kéo dài</td><td>bám vào… lưng “quái vật”</td></tr>
      <tr><td>Thuật ngữ</td><td>Khái niệm khoa học, chính xác, không biểu cảm</td><td>quang hợp, số nguyên tố</td></tr>
      <tr><td>Cước chú, tài liệu tham khảo</td><td>Cuối trang / cuối văn bản</td><td><sup>(1)</sup> Thuỷ triều: …</td></tr>
      <tr><td>Yếu tố Hán Việt</td><td>thuỷ – nước, hải – biển, lâm – rừng…</td><td>hải đăng, lâm sản</td></tr></table>` },
    { title: 'Các kiểu bài viết và nói', html: `<table class="tbl"><tr><th>Bài</th><th>Viết</th><th>Nói và nghe</th></tr>
      <tr><td>6</td><td>Nghị luận: ý kiến tán thành</td><td>Kể lại một truyện ngụ ngôn</td></tr>
      <tr><td>7</td><td>Kể sự việc có thật liên quan nhân vật, sự kiện lịch sử</td><td>Thảo luận về vai trò của công nghệ</td></tr>
      <tr><td>8</td><td>Nghị luận: ý kiến phản đối</td><td>Trình bày ý kiến về vấn đề đời sống</td></tr>
      <tr><td>9</td><td>Thuyết minh quy tắc, luật lệ trò chơi, hoạt động</td><td>Giải thích quy tắc trò chơi</td></tr>
      <tr><td>10</td><td>Phân tích nhân vật yêu thích trong sách</td><td>Ngày hội với sách</td></tr></table>` },
    { title: 'Chiến lược làm bài kiểm tra', html: `<p>Với phần đọc hiểu, trước hết xác định loại văn bản để chọn “chìa khoá”:</p>`,
      svg: S.flow({ items: [{ title: 'Nhận diện thể loại', text: 'Truyện? Nghị luận? Thông tin?' }, { title: 'Tìm ý chính', text: 'Bài học / luận điểm / thông tin' }, { title: 'Tiếng Việt', text: 'Gọi tên đúng, nêu tác dụng' }, { title: 'Viết', text: 'Dàn ý 5 phút, soát lỗi 5 phút' }] }),
      caption: 'Bốn bước làm bài kiểm tra Ngữ văn.' }
  ],
  summary: 'Học kì II: đọc truyện ngụ ngôn, tục ngữ, truyện khoa học viễn tưởng, văn bản nghị luận (luận đề, luận điểm, lí lẽ, bằng chứng), văn bản thông tin (sa-pô, đề mục, cước chú, phi ngôn ngữ); tiếng Việt: thành ngữ, nói quá, mạch lạc – liên kết, dấu chấm lửng, từ ngữ liên kết, thuật ngữ, cước chú, tài liệu tham khảo, yếu tố Hán Việt; viết: nghị luận tán thành, phản đối, kể sự việc lịch sử, thuyết minh luật chơi, phân tích nhân vật.',
  examples: [
    { title: 'Nhận diện văn bản', problem: 'Một văn bản có nhan đề, sa-pô in nghiêng, các đề mục đánh số và một bảng số liệu. Đó là loại văn bản gì?', solution: 'Văn bản thông tin – vì có sa-pô, đề mục và phương tiện phi ngôn ngữ (bảng số liệu), mục đích cung cấp tri thức.' },
    { title: 'Nói quá và thành ngữ', problem: 'Trong câu “Bài toán này khó như lên trời”, có biện pháp gì?', solution: 'Nói quá (“khó như lên trời”) kết hợp so sánh, phóng đại mức độ khó để nhấn mạnh, gây ấn tượng.' },
    { title: 'Phân biệt tán thành – phản đối', problem: 'Đề “Viết bài văn trình bày ý kiến không đồng tình với quan niệm: học chỉ để thi” thuộc kiểu bài nào?', solution: 'Nghị luận trình bày ý kiến phản đối (Bài 8): nêu quan niệm, chỉ ra điểm chưa đúng bằng lí lẽ, bằng chứng và đề xuất quan điểm đúng (học để hiểu biết, để sống tốt).' }
  ],
  exercises: [
    { question: 'Chỉ ra phép liên kết và thuật ngữ trong đoạn: “Quang hợp diễn ra ở lá cây. Nhờ quá trình này, cây tạo ra chất hữu cơ và thải ra khí oxygen.”', hints: ['“Quá trình này” thay cho từ nào?', 'Từ nào biểu thị khái niệm khoa học?'], solution: 'Phép thế: “quá trình này” thay cho “quang hợp”. Thuật ngữ: “quang hợp”, “chất hữu cơ”, “oxygen”.' },
    { question: 'Giải thích và nêu bài học từ thành ngữ “ếch ngồi đáy giếng”.', hints: ['Thành ngữ bắt nguồn từ truyện ngụ ngôn nào?', 'Liên hệ việc học.'], solution: 'Thành ngữ chỉ người hiểu biết hạn hẹp mà huênh hoang, bắt nguồn từ truyện ngụ ngôn cùng tên. Bài học: luôn khiêm tốn, không ngừng học hỏi, mở rộng hiểu biết; không tự mãn với những gì mình biết.' },
    { question: 'Lập dàn ý cho đề: “Tán thành ý kiến: Sách là người bạn lớn của con người”.', hints: ['Hai – ba lí lẽ.', 'Bằng chứng từ các cuốn sách đã học.'], solution: 'MB: nêu ý kiến, khẳng định tán thành. TB: lí lẽ 1 – sách mở rộng hiểu biết (bằng chứng: văn bản thông tin về rừng ngập mặn cho em hiểu vai trò của rừng); lí lẽ 2 – sách bồi dưỡng tâm hồn (bằng chứng: “Không gia đình” dạy lòng biết ơn, nghị lực); lí lẽ 3 – sách khơi dậy ước mơ (bằng chứng: truyện của Jules Verne khơi gợi khát vọng khám phá); phản bác ý kiến “Internet đã thay thế sách”. KB: khẳng định, nêu kế hoạch đọc sách của em.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Thể loại nào mượn chuyện loài vật để nêu bài học ứng xử?', options: ['Truyện ngụ ngôn', 'Văn bản thông tin', 'Tuỳ bút', 'Tường trình'], answer: 0, explain: 'Đặc trưng truyện ngụ ngôn.' },
    { type: 'mcq', q: '“Hai vạn dặm dưới đáy biển” thuộc thể loại:', options: ['Truyện khoa học viễn tưởng', 'Truyện ngụ ngôn', 'Văn bản nghị luận', 'Thơ bốn chữ'], answer: 0, explain: 'Tác phẩm của Jules Verne.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Luận điểm là những ý kiến làm sáng tỏ luận đề.', answer: true, explain: 'Đúng khái niệm.' },
    { type: 'mcq', q: 'Dấu chấm lửng trong “Họ bám vào… lưng “quái vật”” có tác dụng:', options: ['Giãn nhịp, chuẩn bị cho điều bất ngờ', 'Liệt kê chưa hết', 'Đánh dấu lời dẫn', 'Kết thúc câu hỏi'], answer: 0, explain: 'Tạo sự chờ đợi.' },
    { type: 'short', q: 'Yếu tố Hán Việt “lâm” có nghĩa là gì? (một tiếng)', answer: ['rừng'], answerText: 'rừng', explain: 'lâm sản, nông lâm.' },
    { type: 'mcq', q: 'Từ nào là thuật ngữ?', options: ['Số nguyên tố', 'Lung linh', 'Thân thương', 'Rực rỡ'], answer: 0, explain: 'Thuật ngữ toán học.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nói quá là hành vi khoe khoang, lừa dối người nghe.', answer: false, explain: 'Đó là nói khoác; nói quá là biện pháp tu từ.' },
    { type: 'mcq', q: 'Văn bản thuyết minh luật chơi cần ngôn ngữ:', options: ['Chính xác, rõ ràng, khách quan', 'Giàu vần điệu', 'Nhiều nói quá', 'Nhiều từ địa phương'], answer: 0, explain: 'Để người đọc hiểu và chơi đúng.' }
  ]
});
})();
