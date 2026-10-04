/* Khung chương trình Ngữ văn 7 – theo thứ tự các bài (chủ đề) của SGK "Kết nối tri thức với cuộc sống" (tập 1: Bài 1 – 5, tập 2: Bài 6 – 10).
   Mỗi bài (chủ đề) gồm các bài học nhỏ theo kĩ năng: Đọc hiểu, Thực hành tiếng Việt, Viết, Nói và nghe; cuối mỗi học kì có một bài ôn tập. */
THCS.registerCourse({
  subject: 'ngu-van', grade: 7, book: 'Kết nối tri thức với cuộc sống',
  chapters: [
    { id: 'b1', title: 'Bài 1. Bầu trời tuổi thơ', lessons: [
      { id: 'b1-doc', title: 'Đọc hiểu: Truyện ngắn và tiểu thuyết – đề tài, chi tiết, tính cách nhân vật' },
      { id: 'b1-tv', title: 'Tiếng Việt: Mở rộng trạng ngữ và thành phần chính của câu bằng cụm từ' },
      { id: 'b1-viet', title: 'Viết: Tóm tắt văn bản theo những yêu cầu khác nhau về độ dài' },
      { id: 'b1-noi', title: 'Nói và nghe: Trao đổi về một vấn đề mà em quan tâm' }] },
    { id: 'b2', title: 'Bài 2. Khúc nhạc tâm hồn', lessons: [
      { id: 'b2-doc', title: 'Đọc hiểu: Thơ bốn chữ, thơ năm chữ – vần, nhịp, hình ảnh, biện pháp tu từ' },
      { id: 'b2-tv', title: 'Tiếng Việt: Nói giảm nói tránh; điệp ngữ, liệt kê; nghĩa của từ ngữ' },
      { id: 'b2-viet', title: 'Viết: Tập làm thơ bốn chữ, năm chữ; đoạn văn ghi lại cảm xúc sau khi đọc bài thơ' },
      { id: 'b2-noi', title: 'Nói và nghe: Trình bày suy nghĩ về một vấn đề đời sống gợi ra từ tác phẩm văn học đã đọc' }] },
    { id: 'b3', title: 'Bài 3. Cội nguồn yêu thương', lessons: [
      { id: 'b3-doc', title: 'Đọc hiểu: Truyện – tính cách nhân vật và sự thay đổi kiểu người kể chuyện' },
      { id: 'b3-tv', title: 'Tiếng Việt: Số từ, phó từ' },
      { id: 'b3-viet', title: 'Viết: Bài văn phân tích đặc điểm nhân vật trong một tác phẩm văn học' },
      { id: 'b3-noi', title: 'Nói và nghe: Trình bày ý kiến về một vấn đề đời sống gợi ra từ một nhân vật văn học' }] },
    { id: 'b4', title: 'Bài 4. Giai điệu đất nước', lessons: [
      { id: 'b4-doc', title: 'Đọc hiểu: Thơ – tình cảm, cảm xúc của người viết; hình ảnh và biện pháp tu từ' },
      { id: 'b4-tv', title: 'Tiếng Việt: Ngữ cảnh và nghĩa của từ ngữ trong ngữ cảnh; dấu ngoặc đơn, dấu ngoặc kép' },
      { id: 'b4-viet', title: 'Viết: Bài văn biểu cảm về con người hoặc sự việc' },
      { id: 'b4-noi', title: 'Nói và nghe: Trình bày ý kiến về những hoạt động thiện nguyện vì cộng đồng' }] },
    { id: 'b5', title: 'Bài 5. Màu sắc trăm miền', lessons: [
      { id: 'b5-doc', title: 'Đọc hiểu: Tuỳ bút và tản văn' },
      { id: 'b5-tv', title: 'Tiếng Việt: Từ ngữ địa phương; dấu gạch ngang; biện pháp tu từ trong tuỳ bút, tản văn' },
      { id: 'b5-viet', title: 'Viết: Văn bản tường trình' },
      { id: 'b5-noi', title: 'Nói và nghe: Trình bày ý kiến về vấn đề văn hoá truyền thống trong xã hội hiện đại' }] },
    { id: 'hk1', title: 'Ôn tập học kì I', lessons: [
      { id: 'on-tap-hk1', title: 'Ôn tập học kì I: đọc, tiếng Việt, viết, nói và nghe (Bài 1 – Bài 5)' }] },
    { id: 'b6', title: 'Bài 6. Bài học cuộc sống', lessons: [
      { id: 'b6-doc', title: 'Đọc hiểu: Truyện ngụ ngôn và tục ngữ' },
      { id: 'b6-tv', title: 'Tiếng Việt: Thành ngữ; biện pháp tu từ nói quá' },
      { id: 'b6-viet', title: 'Viết: Bài văn nghị luận về một vấn đề trong đời sống (trình bày ý kiến tán thành)' },
      { id: 'b6-noi', title: 'Nói và nghe: Kể lại một truyện ngụ ngôn' }] },
    { id: 'b7', title: 'Bài 7. Thế giới viễn tưởng', lessons: [
      { id: 'b7-doc', title: 'Đọc hiểu: Truyện khoa học viễn tưởng' },
      { id: 'b7-tv', title: 'Tiếng Việt: Mạch lạc và liên kết của văn bản; dấu chấm lửng' },
      { id: 'b7-viet', title: 'Viết: Bài văn kể lại sự việc có thật liên quan đến một nhân vật lịch sử' },
      { id: 'b7-noi', title: 'Nói và nghe: Thảo luận về vai trò của công nghệ đối với đời sống con người' }] },
    { id: 'b8', title: 'Bài 8. Trải nghiệm để trưởng thành', lessons: [
      { id: 'b8-doc', title: 'Đọc hiểu: Văn bản nghị luận – luận đề, luận điểm, lí lẽ, bằng chứng' },
      { id: 'b8-tv', title: 'Tiếng Việt: Liên kết câu và từ ngữ liên kết (phép nối); thuật ngữ' },
      { id: 'b8-viet', title: 'Viết: Bài văn nghị luận về một vấn đề trong đời sống (ý kiến phản đối một quan niệm, cách hiểu khác)' },
      { id: 'b8-noi', title: 'Nói và nghe: Trình bày ý kiến về một vấn đề đời sống' }] },
    { id: 'b9', title: 'Bài 9. Hoà điệu với tự nhiên', lessons: [
      { id: 'b9-doc', title: 'Đọc hiểu: Văn bản thông tin – cách triển khai ý, phương tiện phi ngôn ngữ' },
      { id: 'b9-tv', title: 'Tiếng Việt: Cước chú, tài liệu tham khảo; nghĩa của một số yếu tố Hán Việt thông dụng' },
      { id: 'b9-viet', title: 'Viết: Bài văn thuyết minh về quy tắc hoặc luật lệ trong một trò chơi hay hoạt động' },
      { id: 'b9-noi', title: 'Nói và nghe: Giải thích quy tắc hoặc luật lệ trong một trò chơi hay hoạt động' }] },
    { id: 'b10', title: 'Bài 10. Trang sách và cuộc sống', lessons: [
      { id: 'b10-doc', title: 'Đọc mở rộng: Chinh phục những cuốn sách mới' },
      { id: 'b10-viet', title: 'Viết: Bài văn phân tích một nhân vật văn học yêu thích trong cuốn sách đã đọc' },
      { id: 'b10-ve-dich', title: 'Về đích: Ngày hội với sách' }] },
    { id: 'hk2', title: 'Ôn tập học kì II', lessons: [
      { id: 'on-tap-hk2', title: 'Ôn tập học kì II: đọc, tiếng Việt, viết, nói và nghe (Bài 6 – Bài 10)' }] }
  ],
  diagnostic: {
    questions: [
      { lesson: 'b1-doc', type: 'mcq', q: 'Đề tài của một truyện là:', options: ['tên của tác giả', 'phạm vi đời sống được nhà văn phản ánh, thể hiện trong tác phẩm', 'lời thoại của nhân vật', 'số trang của truyện'], answer: 1, explain: 'Đề tài là phạm vi đời sống được phản ánh (ví dụ: tuổi thơ, gia đình, thiên nhiên…).' },
      { lesson: 'b2-tv', type: 'mcq', q: 'Câu nào sử dụng biện pháp nói giảm nói tránh?', options: ['Bạn ấy học chưa được chăm lắm.', 'Bạn ấy lười học.', 'Bạn ấy học rất giỏi.', 'Bạn ấy đi học đúng giờ.'], answer: 0, explain: '“Chưa được chăm lắm” là cách nói tế nhị thay cho “lười”, giúp tránh gây cảm giác nặng nề, thể hiện sự tôn trọng người nghe.' },
      { lesson: 'b1-tv', type: 'mcq', q: 'Trạng ngữ của câu “Vào một buổi sáng mùa thu trong trẻo, bà dẫn tôi ra chợ quê.” là:', options: ['bà dẫn tôi', 'ra chợ quê', 'Vào một buổi sáng mùa thu trong trẻo', 'tôi ra chợ quê'], answer: 2, explain: 'Trạng ngữ chỉ thời gian “Vào một buổi sáng mùa thu trong trẻo” được mở rộng bằng cụm từ, giúp câu cụ thể, giàu hình ảnh hơn.' },
      { lesson: 'b1-viet', type: 'mcq', q: 'Yêu cầu quan trọng nhất của một bản tóm tắt văn bản là:', options: ['chép lại nguyên văn các đoạn hay nhất', 'nêu đúng, đủ các ý chính của văn bản gốc bằng lời văn ngắn gọn của mình', 'thêm nhiều nhận xét, cảm xúc riêng', 'kể dài hơn văn bản gốc'], answer: 1, explain: 'Tóm tắt phải trung thành với nội dung chính của văn bản gốc, ngắn gọn, mạch lạc, dùng lời văn của người tóm tắt.' },
      { lesson: 'b2-doc', type: 'short', q: 'Trong thơ bốn chữ, mỗi dòng thơ thường có bao nhiêu tiếng?', answer: ['4', 'bốn'], answerText: '4 tiếng', explain: 'Thơ bốn chữ có mỗi dòng 4 tiếng (thơ năm chữ: mỗi dòng 5 tiếng), thường có nhịp 2/2.' },
      { lesson: 'b3-tv', type: 'short', q: 'Tìm số từ trong câu: “Ba chú mèo con nằm sưởi nắng bên hiên.”', answer: ['ba'], answerText: 'ba', explain: '“Ba” là số từ chỉ số lượng, đứng trước danh từ “chú mèo con”.' },
      { lesson: 'b7-tv', type: 'mcq', q: 'Hai câu “Ned Land là thợ săn cá voi giỏi nhất. Anh có thể phóng lao trúng đích từ rất xa.” được liên kết bằng phép gì?', options: ['Phép lặp', 'Phép thế', 'Phép nối', 'Phép liệt kê'], answer: 1, explain: 'Đại từ “anh” ở câu sau thay thế cho “Ned Land” ở câu trước – đó là phép thế.' },
      { lesson: 'b5-doc', type: 'mcq', q: 'Tuỳ bút là thể loại văn xuôi:', options: ['ghi chép tự do những cảm xúc, suy nghĩ của người viết trước sự vật, hiện tượng', 'chỉ gồm lời đối thoại của nhân vật', 'có vần và nhịp chặt chẽ như thơ lục bát', 'kể về các vị thần'], answer: 0, explain: 'Tuỳ bút thiên về bộc lộ cảm xúc, suy tư của cái “tôi” người viết; ngôn ngữ giàu hình ảnh, chất trữ tình.' },
      { lesson: 'b6-doc', type: 'mcq', q: 'Đặc điểm nào đúng với truyện ngụ ngôn?', options: ['Rất dài, nhiều nhân vật lịch sử', 'Ngắn gọn, mượn chuyện loài vật, đồ vật hoặc con người để nêu bài học sâu sắc', 'Luôn có yếu tố khoa học viễn tưởng', 'Chỉ được viết bằng thơ'], answer: 1, explain: 'Truyện ngụ ngôn thường ngắn, dùng lối nói ẩn ý để khuyên răn, đưa ra bài học về cách nhìn, cách ứng xử.' },
      { lesson: 'b6-tv', type: 'mcq', q: 'Câu nào sử dụng biện pháp tu từ nói quá?', options: ['Mồ hôi thánh thót như mưa ruộng cày.', 'Hôm nay trời nắng nhẹ.', 'Em đi học lúc sáu giờ.', 'Cây bàng trước cổng trường đã rụng lá.'], answer: 0, explain: 'Câu ca dao phóng đại lượng mồ hôi (“như mưa”) để nhấn mạnh nỗi vất vả của người nông dân – đó là nói quá.' },
      { lesson: 'b7-doc', type: 'mcq', q: 'Truyện khoa học viễn tưởng là loại truyện:', options: ['kể lại sự kiện lịch sử có thật', 'có những yếu tố tưởng tượng dựa trên tri thức khoa học, thường về thế giới tương lai hoặc những phát minh kì lạ', 'chỉ kể chuyện loài vật biết nói', 'ghi chép một chuyến đi'], answer: 1, explain: 'Truyện khoa học viễn tưởng kết hợp tưởng tượng với tri thức, giả thuyết khoa học.' },
      { lesson: 'b8-doc', type: 'mcq', q: 'Trong văn bản nghị luận, lí lẽ và bằng chứng có vai trò:', options: ['trang trí cho bài viết đẹp hơn', 'làm sáng tỏ, thuyết phục người đọc tin vào ý kiến (luận điểm) của người viết', 'kể lại diễn biến câu chuyện', 'tả hình dáng nhân vật'], answer: 1, explain: 'Lí lẽ là những lời giải thích, cắt nghĩa; bằng chứng là dẫn chứng cụ thể (sự việc, số liệu…) giúp luận điểm có sức thuyết phục.' },
      { lesson: 'b9-doc', type: 'tf', q: 'Khẳng định sau đúng hay sai: Văn bản thông tin thường sử dụng nhan đề, sa-pô, đề mục, hình ảnh hoặc số liệu để giúp người đọc nắm thông tin dễ dàng.', answer: true, explain: 'Đây là những yếu tố hình thức thường gặp giúp văn bản thông tin rõ ràng, dễ theo dõi.' },
      { lesson: 'b5-viet', type: 'mcq', q: 'Văn bản tường trình được viết nhằm:', options: ['bày tỏ cảm xúc về một bài thơ', 'trình bày lại khách quan, trung thực một sự việc đã xảy ra để người có trách nhiệm xem xét', 'kể một câu chuyện tưởng tượng', 'quảng cáo một sản phẩm'], answer: 1, explain: 'Tường trình trình bày rõ thời gian, địa điểm, diễn biến, hậu quả của sự việc và người viết có liên quan.' },
      { lesson: 'b6-viet', type: 'tf', q: 'Khẳng định sau đúng hay sai: Trong bài văn nghị luận trình bày ý kiến tán thành, người viết cần nêu rõ ý kiến mình tán thành và đưa ra lí lẽ, bằng chứng thuyết phục.', answer: true, explain: 'Bài viết cần giới thiệu vấn đề, khẳng định sự tán thành, dùng lí lẽ và bằng chứng để chứng minh, rồi khẳng định lại ý nghĩa của ý kiến.' }
    ]
  }
});
