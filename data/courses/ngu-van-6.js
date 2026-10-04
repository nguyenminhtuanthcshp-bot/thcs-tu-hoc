/* Khung chương trình Ngữ văn 6 – theo thứ tự các bài (chủ đề) của SGK "Kết nối tri thức với cuộc sống".
   Mỗi bài (chủ đề) gồm các bài học nhỏ theo kĩ năng: Đọc hiểu, Thực hành tiếng Việt, Viết, Nói và nghe. */
THCS.registerCourse({
  subject: 'ngu-van', grade: 6, book: 'Kết nối tri thức với cuộc sống',
  chapters: [
    { id: 'b1', title: 'Bài 1. Tôi và các bạn', lessons: [
      { id: 'b1-doc', title: 'Đọc hiểu: Truyện đồng thoại – người kể chuyện và nhân vật' },
      { id: 'b1-tv', title: 'Tiếng Việt: Từ đơn và từ phức (từ ghép, từ láy)' },
      { id: 'b1-viet', title: 'Viết: Viết bài văn kể lại một trải nghiệm của em' },
      { id: 'b1-noi', title: 'Nói và nghe: Kể lại một trải nghiệm của em' }] },
    { id: 'b2', title: 'Bài 2. Gõ cửa trái tim', lessons: [
      { id: 'b2-doc', title: 'Đọc hiểu: Thơ có yếu tố tự sự và miêu tả' },
      { id: 'b2-tv', title: 'Tiếng Việt: Biện pháp tu từ ẩn dụ và điệp ngữ' },
      { id: 'b2-viet', title: 'Viết: Viết đoạn văn ghi lại cảm xúc về một bài thơ có yếu tố tự sự và miêu tả' },
      { id: 'b2-noi', title: 'Nói và nghe: Trình bày ý kiến về một vấn đề trong đời sống gia đình' }] },
    { id: 'b3', title: 'Bài 3. Yêu thương và chia sẻ', lessons: [
      { id: 'b3-doc', title: 'Đọc hiểu: Truyện – cốt truyện, lời người kể chuyện và lời nhân vật' },
      { id: 'b3-tv', title: 'Tiếng Việt: Cụm danh từ, cụm động từ, cụm tính từ; biện pháp tu từ so sánh' },
      { id: 'b3-viet', title: 'Viết: Viết bài văn kể lại một trải nghiệm của em (kết hợp miêu tả và biểu cảm)' },
      { id: 'b3-noi', title: 'Nói và nghe: Kể về một trải nghiệm của em' }] },
    { id: 'b4', title: 'Bài 4. Quê hương yêu dấu', lessons: [
      { id: 'b4-doc', title: 'Đọc hiểu: Ca dao và thơ lục bát' },
      { id: 'b4-tv', title: 'Tiếng Việt: Từ đồng âm, từ đa nghĩa; biện pháp tu từ hoán dụ' },
      { id: 'b4-viet', title: 'Viết: Tập làm thơ lục bát; viết đoạn văn thể hiện cảm xúc về một bài thơ lục bát' },
      { id: 'b4-noi', title: 'Nói và nghe: Trình bày suy nghĩ về tình cảm của con người với quê hương' }] },
    { id: 'b5', title: 'Bài 5. Những nẻo đường xứ sở', lessons: [
      { id: 'b5-doc', title: 'Đọc hiểu: Kí và du kí' },
      { id: 'b5-tv', title: 'Tiếng Việt: Dấu ngoặc kép; ẩn dụ và so sánh trong văn miêu tả' },
      { id: 'b5-viet', title: 'Viết: Viết bài văn tả cảnh sinh hoạt' },
      { id: 'b5-noi', title: 'Nói và nghe: Chia sẻ một trải nghiệm về nơi em sống hoặc từng đến' }] },
    { id: 'hk1', title: 'Ôn tập học kì I', lessons: [
      { id: 'on-tap-hk1', title: 'Ôn tập học kì I: đọc, tiếng Việt, viết, nói và nghe (Bài 1 – Bài 5)' }] },
    { id: 'b6', title: 'Bài 6. Chuyện kể về những người anh hùng', lessons: [
      { id: 'b6-doc', title: 'Đọc hiểu: Truyền thuyết' },
      { id: 'b6-tv', title: 'Tiếng Việt: Dấu chấm phẩy; từ Hán Việt; biện pháp tu từ điệp ngữ' },
      { id: 'b6-viet', title: 'Viết: Viết bài văn thuyết minh thuật lại một sự kiện' },
      { id: 'b6-noi', title: 'Nói và nghe: Kể lại một truyền thuyết' }] },
    { id: 'b7', title: 'Bài 7. Thế giới cổ tích', lessons: [
      { id: 'b7-doc', title: 'Đọc hiểu: Truyện cổ tích' },
      { id: 'b7-tv', title: 'Tiếng Việt: Nghĩa của từ ngữ (yếu tố Hán Việt, thành ngữ); tác dụng của điệp ngữ' },
      { id: 'b7-viet', title: 'Viết: Viết bài văn đóng vai nhân vật kể lại một truyện cổ tích' },
      { id: 'b7-noi', title: 'Nói và nghe: Kể lại một truyện cổ tích bằng lời một nhân vật' }] },
    { id: 'b8', title: 'Bài 8. Khác biệt và gần gũi', lessons: [
      { id: 'b8-doc', title: 'Đọc hiểu: Văn bản nghị luận – ý kiến, lí lẽ, bằng chứng' },
      { id: 'b8-tv', title: 'Tiếng Việt: Trạng ngữ; lựa chọn từ ngữ và cấu trúc câu' },
      { id: 'b8-viet', title: 'Viết: Viết bài văn trình bày ý kiến về một hiện tượng (vấn đề) mà em quan tâm' },
      { id: 'b8-noi', title: 'Nói và nghe: Trình bày ý kiến về một hiện tượng (vấn đề) đời sống' }] },
    { id: 'b9', title: 'Bài 9. Trái Đất – ngôi nhà chung', lessons: [
      { id: 'b9-doc', title: 'Đọc hiểu: Văn bản thông tin' },
      { id: 'b9-tv', title: 'Tiếng Việt: Từ mượn' },
      { id: 'b9-viet', title: 'Viết: Viết biên bản cuộc họp, cuộc thảo luận; tóm tắt bằng sơ đồ nội dung một văn bản' },
      { id: 'b9-noi', title: 'Nói và nghe: Thảo luận về giải pháp khắc phục nạn ô nhiễm môi trường' }] },
    { id: 'b10', title: 'Bài 10. Cuốn sách tôi yêu', lessons: [
      { id: 'b10-doc', title: 'Đọc: Đọc sách tự chọn và sáng tạo sản phẩm minh hoạ cho cuốn sách' },
      { id: 'b10-viet', title: 'Viết: Viết bài văn trình bày ý kiến về một hiện tượng đời sống được gợi ra từ cuốn sách đã đọc' },
      { id: 'b10-noi', title: 'Nói và nghe: Giới thiệu sản phẩm minh hoạ sách; trình bày ý kiến về cuốn sách' }] },
    { id: 'hk2', title: 'Ôn tập học kì II', lessons: [
      { id: 'on-tap-hk2', title: 'Ôn tập học kì II: đọc, tiếng Việt, viết, nói và nghe (Bài 6 – Bài 10)' }] }
  ],
  diagnostic: {
    questions: [
      { lesson: 'b1-doc', type: 'mcq', q: 'Truyện đồng thoại là loại truyện:', options: ['kể về các nhân vật lịch sử có thật', 'viết cho thiếu nhi, nhân vật thường là loài vật hoặc đồ vật được nhân hoá', 'chỉ kể về các vị thần', 'luôn được viết bằng thơ'], answer: 1, explain: 'Truyện đồng thoại dành cho thiếu nhi; nhân vật thường là loài vật, đồ vật được nhân hoá, vừa mang đặc điểm của loài vật vừa mang đặc điểm của con người.' },
      { lesson: 'b8-tv', type: 'mcq', q: 'Trong câu “Vì trời mưa to, trận đấu bóng đá của lớp em bị hoãn.”, bộ phận “Vì trời mưa to” là trạng ngữ chỉ:', options: ['thời gian', 'nơi chốn', 'nguyên nhân', 'mục đích'], answer: 2, explain: '“Vì trời mưa to” trả lời câu hỏi “Vì sao?”, bổ sung thông tin về nguyên nhân cho sự việc trong câu – đó là trạng ngữ chỉ nguyên nhân.' },
      { lesson: 'b1-tv', type: 'mcq', q: 'Từ “xinh xắn” thuộc loại từ nào?', options: ['Từ đơn', 'Từ ghép', 'Từ láy', 'Cụm từ'], answer: 2, explain: '“Xinh xắn” có hai tiếng lặp lại phụ âm đầu “x”, tạo nên từ láy.' },
      { lesson: 'b1-tv', type: 'tf', q: 'Khẳng định sau đúng hay sai: “Quần áo” là từ láy.', answer: false, explain: '“Quần” và “áo” đều có nghĩa, ghép lại với nhau theo quan hệ nghĩa, nên “quần áo” là từ ghép.' },
      { lesson: 'b2-tv', type: 'mcq', q: 'Trong câu ca dao “Thuyền về có nhớ bến chăng / Bến thì một dạ khăng khăng đợi thuyền”, hình ảnh “thuyền” và “bến” được dùng theo biện pháp tu từ nào?', options: ['So sánh', 'Ẩn dụ', 'Điệp ngữ', 'Nói quá'], answer: 1, explain: '“Thuyền” gợi người đi xa, “bến” gợi người chờ đợi thuỷ chung – gọi tên sự vật này bằng tên sự vật khác có nét tương đồng, đó là ẩn dụ.' },
      { lesson: 'b3-tv', type: 'mcq', q: 'Cụm danh từ trong câu “Mấy bạn học sinh lớp em đang tưới cây ngoài vườn.” là:', options: ['đang tưới cây', 'mấy bạn học sinh lớp em', 'ngoài vườn', 'tưới cây ngoài vườn'], answer: 1, explain: 'Cụm từ có danh từ trung tâm “bạn học sinh”, phần phụ trước “mấy”, phần phụ sau “lớp em”.' },
      { lesson: 'b4-doc', type: 'short', q: 'Trong thơ lục bát, dòng bát (dòng thứ hai của mỗi cặp) có bao nhiêu tiếng?', answer: ['8', 'tám'], answerText: '8 tiếng', explain: 'Thơ lục bát gồm các cặp câu: dòng lục có 6 tiếng, dòng bát có 8 tiếng.' },
      { lesson: 'b4-tv', type: 'mcq', q: 'Trong câu “Cả lớp em đều hào hứng với chuyến tham quan.”, từ “lớp” được dùng theo biện pháp tu từ nào?', options: ['Ẩn dụ', 'Hoán dụ', 'Nhân hoá', 'So sánh'], answer: 1, explain: '“Lớp” dùng để chỉ các bạn học sinh trong lớp – lấy vật chứa để gọi vật bị chứa, dựa trên quan hệ gần gũi, đó là hoán dụ.' },
      { lesson: 'b5-doc', type: 'tf', q: 'Khẳng định sau đúng hay sai: Du kí là thể loại kí ghi chép lại những điều người viết tận mắt thấy, tai nghe trong một chuyến đi.', answer: true, explain: 'Du kí thường được kể ở ngôi thứ nhất, ghi lại cảnh vật, con người và cảm xúc của người viết trong chuyến đi.' },
      { lesson: 'b6-doc', type: 'mcq', q: 'Truyền thuyết là loại truyện dân gian:', options: ['kể về các nhân vật, sự kiện liên quan đến lịch sử, thường có yếu tố kì ảo', 'chỉ để gây cười', 'mượn chuyện loài vật để răn dạy', 'kể về cuộc sống hằng ngày của người nông dân, không có yếu tố kì ảo'], answer: 0, explain: 'Truyền thuyết kể về nhân vật, sự kiện có liên quan đến lịch sử (như Thánh Gióng), thường có yếu tố kì ảo, thể hiện thái độ, cách đánh giá của nhân dân.' },
      { lesson: 'b7-doc', type: 'mcq', q: 'Kết thúc có hậu trong truyện cổ tích (người tốt được đền đáp, kẻ xấu bị trừng trị) thể hiện điều gì?', options: ['Ước mơ về công bằng, cái thiện chiến thắng cái ác của nhân dân', 'Sự sợ hãi của con người trước thiên nhiên', 'Quá trình dựng nước của cha ông', 'Kinh nghiệm sản xuất nông nghiệp'], answer: 0, explain: 'Kết thúc có hậu thể hiện niềm tin, ước mơ của nhân dân vào lẽ công bằng và sự chiến thắng của cái thiện.' },
      { lesson: 'b8-doc', type: 'mcq', q: 'Mục đích chính của văn bản nghị luận là:', options: ['kể lại một câu chuyện', 'miêu tả cảnh vật', 'thuyết phục người đọc, người nghe về một ý kiến, quan điểm', 'bộc lộ cảm xúc bằng vần điệu'], answer: 2, explain: 'Văn bản nghị luận dùng lí lẽ và bằng chứng để thuyết phục người đọc về một ý kiến.' },
      { lesson: 'b9-doc', type: 'mcq', q: 'Văn bản thông tin được viết chủ yếu để:', options: ['cung cấp thông tin, tri thức chính xác về sự vật, hiện tượng', 'kể chuyện tưởng tượng', 'gây cười', 'thể hiện cảm xúc riêng bằng hình ảnh ẩn dụ'], answer: 0, explain: 'Văn bản thông tin cung cấp thông tin khách quan, chính xác; thường có nhan đề, đề mục, số liệu, hình ảnh minh hoạ.' },
      { lesson: 'b1-viet', type: 'tf', q: 'Khẳng định sau đúng hay sai: Bài văn kể lại một trải nghiệm của em thường được kể ở ngôi thứ nhất (xưng “tôi” hoặc “em”).', answer: true, explain: 'Người viết là người trong cuộc, kể lại trải nghiệm của chính mình nên dùng ngôi thứ nhất.' },
      { lesson: 'b9-viet', type: 'mcq', q: 'Nội dung nào KHÔNG bắt buộc phải có trong biên bản một cuộc họp?', options: ['Thời gian, địa điểm', 'Thành phần tham dự', 'Diễn biến và kết luận của cuộc họp', 'Cảm xúc riêng của thư kí về từng thành viên'], answer: 3, explain: 'Biên bản ghi lại khách quan, chính xác sự việc; không đưa cảm xúc, nhận xét riêng của người ghi.' }
    ]
  }
});
