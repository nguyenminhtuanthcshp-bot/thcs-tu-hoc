/* Khung chương trình Ngữ văn 8 – theo thứ tự các bài (chủ đề) của SGK "Kết nối tri thức với cuộc sống" (tập 1: Bài 1 – 5, tập 2: Bài 6 – 10).
   Mỗi bài (chủ đề) gồm các bài học nhỏ theo kĩ năng: Đọc hiểu, Thực hành tiếng Việt, Viết, Nói và nghe; cuối mỗi học kì có một bài ôn tập.
   Văn bản đọc trong các bài học là văn học dân gian, tác phẩm đã thuộc phạm vi công cộng hoặc văn bản do nhóm biên soạn tự viết (không chép văn bản SGK). */
THCS.registerCourse({
  subject: 'ngu-van', grade: 8, book: 'Kết nối tri thức với cuộc sống',
  chapters: [
    { id: 'b1', title: 'Bài 1. Câu chuyện của lịch sử', lessons: [
      { id: 'b1-doc', title: 'Đọc hiểu: Truyện lịch sử – bối cảnh, nhân vật, sự kiện, yếu tố hư cấu' },
      { id: 'b1-tv', title: 'Tiếng Việt: Biệt ngữ xã hội và từ ngữ địa phương' },
      { id: 'b1-viet', title: 'Viết: Kể lại một chuyến đi (tham quan một di tích lịch sử, văn hoá)' },
      { id: 'b1-noi', title: 'Nói và nghe: Trình bày bài giới thiệu ngắn về một cuốn sách (cuốn truyện lịch sử)' }] },
    { id: 'b2', title: 'Bài 2. Vẻ đẹp cổ điển', lessons: [
      { id: 'b2-doc', title: 'Đọc hiểu: Thơ Đường luật – thất ngôn bát cú và tứ tuyệt' },
      { id: 'b2-tv', title: 'Tiếng Việt: Từ tượng hình, từ tượng thanh; biện pháp tu từ đảo ngữ' },
      { id: 'b2-viet', title: 'Viết: Phân tích một tác phẩm văn học (bài thơ thất ngôn bát cú hoặc tứ tuyệt Đường luật)' },
      { id: 'b2-noi', title: 'Nói và nghe: Trình bày ý kiến về một vấn đề xã hội (một sản phẩm văn hoá truyền thống trong cuộc sống hiện tại)' }] },
    { id: 'b3', title: 'Bài 3. Lời sông núi', lessons: [
      { id: 'b3-doc', title: 'Đọc hiểu: Văn bản nghị luận – luận đề, luận điểm, lí lẽ, bằng chứng (nghị luận trung đại và hiện đại)' },
      { id: 'b3-tv', title: 'Tiếng Việt: Đoạn văn diễn dịch, quy nạp, song song, phối hợp' },
      { id: 'b3-viet', title: 'Viết: Nghị luận về một vấn đề đời sống (con người trong mối quan hệ với cộng đồng, đất nước)' },
      { id: 'b3-noi', title: 'Nói và nghe: Thảo luận về một vấn đề trong đời sống phù hợp với lứa tuổi (ý thức trách nhiệm với cộng đồng của học sinh)' }] },
    { id: 'b4', title: 'Bài 4. Tiếng cười trào phúng trong thơ', lessons: [
      { id: 'b4-doc', title: 'Đọc hiểu: Thơ trào phúng – đối tượng, thủ pháp và giọng điệu tiếng cười' },
      { id: 'b4-tv', title: 'Tiếng Việt: Nghĩa của một số yếu tố Hán Việt; sắc thái nghĩa của từ ngữ và việc lựa chọn từ ngữ' },
      { id: 'b4-viet', title: 'Viết: Phân tích một tác phẩm văn học (thơ trào phúng)' },
      { id: 'b4-noi', title: 'Nói và nghe: Trình bày ý kiến về một vấn đề xã hội (ý nghĩa của tiếng cười trong đời sống)' }] },
    { id: 'b5', title: 'Bài 5. Những câu chuyện hài', lessons: [
      { id: 'b5-doc', title: 'Đọc hiểu: Hài kịch, truyện cười và ca dao trào phúng' },
      { id: 'b5-tv', title: 'Tiếng Việt: Câu hỏi tu từ; nghĩa tường minh và nghĩa hàm ẩn' },
      { id: 'b5-viet', title: 'Viết: Nghị luận về một vấn đề đời sống (một thói xấu của con người trong xã hội hiện đại)' },
      { id: 'b5-noi', title: 'Nói và nghe: Trình bày ý kiến về một vấn đề xã hội (một thói xấu của con người trong xã hội hiện đại)' }] },
    { id: 'hk1', title: 'Ôn tập học kì I', lessons: [
      { id: 'on-tap-hk1', title: 'Ôn tập học kì I: đọc, tiếng Việt, viết, nói và nghe (Bài 1 – Bài 5)' }] },
    { id: 'b6', title: 'Bài 6. Chân dung cuộc sống', lessons: [
      { id: 'b6-doc', title: 'Đọc hiểu: Truyện ngắn – cốt truyện, tình huống, nhân vật, chi tiết' },
      { id: 'b6-tv', title: 'Tiếng Việt: Trợ từ và thán từ' },
      { id: 'b6-viet', title: 'Viết: Phân tích một tác phẩm văn học (truyện) – nhân vật và tình huống' },
      { id: 'b6-noi', title: 'Nói và nghe: Giới thiệu về một cuốn sách (truyện)' }] },
    { id: 'b7', title: 'Bài 7. Tin yêu và ước vọng', lessons: [
      { id: 'b7-doc', title: 'Đọc hiểu: Thơ tự do – hình ảnh, cảm xúc, vần nhịp linh hoạt' },
      { id: 'b7-tv', title: 'Tiếng Việt: Biện pháp tu từ, nghĩa của từ ngữ và lựa chọn cấu trúc câu' },
      { id: 'b7-viet', title: 'Viết: Tập làm một bài thơ tự do; đoạn văn ghi lại cảm nghĩ về một bài thơ tự do' },
      { id: 'b7-noi', title: 'Nói và nghe: Thảo luận ý kiến về một vấn đề đời sống phù hợp với lứa tuổi (gợi ra từ tác phẩm văn học đã học)' }] },
    { id: 'b8', title: 'Bài 8. Nhà văn và trang viết', lessons: [
      { id: 'b8-doc', title: 'Đọc hiểu: Văn bản nghị luận văn học – luận đề, luận điểm, lí lẽ, bằng chứng từ tác phẩm' },
      { id: 'b8-tv', title: 'Tiếng Việt: Thành phần biệt lập (tình thái, cảm thán, gọi – đáp, phụ chú)' },
      { id: 'b8-viet', title: 'Viết: Phân tích một tác phẩm văn học (truyện) – chủ đề và nét đặc sắc nghệ thuật' },
      { id: 'b8-noi', title: 'Nói và nghe: Trình bày ý kiến về một vấn đề xã hội (văn học trong đời sống hiện nay)' }] },
    { id: 'b9', title: 'Bài 9. Hôm nay và ngày mai', lessons: [
      { id: 'b9-doc', title: 'Đọc hiểu: Văn bản thông tin và văn bản nghị luận về vấn đề môi trường' },
      { id: 'b9-tv', title: 'Tiếng Việt: Các kiểu câu phân loại theo mục đích nói; câu khẳng định và câu phủ định' },
      { id: 'b9-viet', title: 'Viết: Thuyết minh giải thích một hiện tượng tự nhiên; văn bản kiến nghị về một vấn đề đời sống' },
      { id: 'b9-noi', title: 'Nói và nghe: Thảo luận về một vấn đề đời sống (cách tổ chức hợp lí nề nếp sinh hoạt của bản thân)' }] },
    { id: 'b10', title: 'Bài 10. Sách – người bạn đồng hành', lessons: [
      { id: 'b10-doc', title: 'Thách thức đầu tiên: Đọc như một hành trình (đọc mở rộng)' },
      { id: 'b10-viet', title: 'Thách thức thứ hai: Kết nối cộng đồng người đọc (viết giới thiệu sách, sáng tạo từ cuốn sách đã đọc)' },
      { id: 'b10-ve-dich', title: 'Về đích: Ngày hội với sách' }] },
    { id: 'hk2', title: 'Ôn tập học kì II', lessons: [
      { id: 'on-tap-hk2', title: 'Ôn tập học kì II: đọc, tiếng Việt, viết, nói và nghe (Bài 6 – Bài 10)' }] }
  ],
  diagnostic: {
    questions: [
      { lesson: 'b1-doc', type: 'mcq', q: 'Truyện lịch sử là loại truyện:', options: ['hoàn toàn bịa đặt, không liên quan đến lịch sử', 'tái hiện nhân vật, sự kiện lịch sử có thật, kết hợp với hư cấu nghệ thuật của nhà văn', 'chỉ liệt kê số liệu, năm tháng', 'mượn loài vật để răn dạy'], answer: 1, explain: 'Truyện lịch sử dựa trên sự kiện, nhân vật có thật nhưng có hư cấu (chi tiết, lời thoại…) để tái hiện sinh động không khí thời đại.' },
      { lesson: 'b1-tv', type: 'tf', q: 'Khẳng định sau đúng hay sai: Biệt ngữ xã hội là những từ ngữ chỉ được dùng trong một nhóm người nhất định (theo nghề nghiệp, lứa tuổi…).', answer: true, explain: 'Biệt ngữ xã hội có phạm vi sử dụng hẹp trong một nhóm xã hội; cần tránh lạm dụng trong giao tiếp chung.' },
      { lesson: 'b2-doc', type: 'short', q: 'Một bài thơ thất ngôn bát cú Đường luật có bao nhiêu câu?', answer: ['8', 'tám'], answerText: '8 câu', explain: '“Bát cú” nghĩa là tám câu; “thất ngôn” nghĩa là mỗi câu bảy chữ.' },
      { lesson: 'b2-tv', type: 'mcq', q: 'Nhóm từ nào gồm toàn từ tượng hình?', options: ['lom khom, lác đác, khấp khểnh', 'róc rách, líu lo, ầm ầm', 'nhà cửa, sách vở, bàn ghế', 'đi, chạy, nhảy'], answer: 0, explain: '“Lom khom, lác đác, khấp khểnh” gợi hình ảnh, dáng vẻ; “róc rách, líu lo, ầm ầm” mô phỏng âm thanh (từ tượng thanh).' },
      { lesson: 'b3-doc', type: 'mcq', q: 'Trong văn bản nghị luận, “luận đề” là:', options: ['vấn đề chính, bao trùm được bàn luận trong toàn văn bản', 'một dẫn chứng cụ thể', 'lời kết của bài', 'tên tác giả'], answer: 0, explain: 'Luận đề là vấn đề trung tâm; các luận điểm triển khai luận đề; lí lẽ, bằng chứng làm sáng tỏ luận điểm.' },
      { lesson: 'b3-tv', type: 'mcq', q: 'Đoạn văn có câu chủ đề đứng ở cuối đoạn, các câu trước nêu ý cụ thể dẫn tới kết luận, là đoạn văn:', options: ['diễn dịch', 'quy nạp', 'song song', 'phối hợp'], answer: 1, explain: 'Quy nạp: đi từ các ý cụ thể đến câu chủ đề khái quát ở cuối đoạn.' },
      { lesson: 'b4-doc', type: 'mcq', q: 'Thơ trào phúng dùng tiếng cười chủ yếu để:', options: ['ca ngợi vẻ đẹp thiên nhiên', 'phê phán, châm biếm những thói hư tật xấu, cái lố bịch trong xã hội', 'kể lại truyền thuyết', 'cung cấp thông tin khoa học'], answer: 1, explain: 'Thơ trào phúng mang tiếng cười phê phán, đả kích cái xấu, cái giả dối.' },
      { lesson: 'b4-tv', type: 'short', q: 'Trong các từ “thiên nhiên, thiên lí, thiên thư”, yếu tố “thiên” có nghĩa là “trời”. Trong từ “thiên lí mã” (ngựa chạy nghìn dặm), “thiên” có nghĩa là gì?', answer: ['nghìn', 'ngàn', 'một nghìn'], answerText: 'nghìn', explain: '“Thiên” trong “thiên lí mã” nghĩa là nghìn; đây là hiện tượng đồng âm của yếu tố Hán Việt.' },
      { lesson: 'b5-doc', type: 'mcq', q: 'Tiếng cười trong truyện cười dân gian thường được tạo ra từ:', options: ['những mâu thuẫn trái tự nhiên, những điều ngược đời, lố bịch', 'những con số thống kê', 'các sự kiện lịch sử có thật', 'các vần thơ lục bát'], answer: 0, explain: 'Truyện cười khai thác mâu thuẫn, sự ngược đời, thói xấu của con người để gây cười và phê phán.' },
      { lesson: 'b5-tv', type: 'tf', q: 'Khẳng định sau đúng hay sai: Câu hỏi tu từ là câu hỏi dùng để hỏi thông tin mà người nói chưa biết.', answer: false, explain: 'Câu hỏi tu từ không nhằm hỏi mà để khẳng định, phủ định hoặc bộc lộ cảm xúc.' },
      { lesson: 'b6-doc', type: 'tf', q: 'Khẳng định sau đúng hay sai: Truyện ngắn là tác phẩm tự sự cỡ nhỏ, thường tập trung vào một tình huống, ít nhân vật và sự kiện.', answer: true, explain: 'Truyện ngắn có dung lượng nhỏ, cốt truyện thường xoay quanh một tình huống; chi tiết cô đọng, giàu ý nghĩa.' },
      { lesson: 'b7-doc', type: 'mcq', q: 'Đặc điểm nổi bật về hình thức của thơ tự do là:', options: ['mỗi câu luôn có đúng 7 chữ', 'không bị giới hạn về số tiếng trong dòng, số dòng trong khổ; vần, nhịp linh hoạt', 'luôn gồm hai câu 6 – 8', 'không có cảm xúc'], answer: 1, explain: 'Thơ tự do có hình thức linh hoạt, phù hợp với dòng cảm xúc của người viết.' },
      { lesson: 'b8-tv', type: 'short', q: 'Trong câu “Có lẽ, ngày mai trời sẽ mưa.”, từ ngữ nào là thành phần tình thái?', answer: ['có lẽ'], answerText: 'có lẽ', explain: '“Có lẽ” thể hiện sự phỏng đoán của người nói – đó là thành phần tình thái (một loại thành phần biệt lập).' },
      { lesson: 'b9-viet', type: 'mcq', q: 'Một văn bản kiến nghị cần nêu rõ:', options: ['cảm xúc về một bài thơ', 'người/cơ quan nhận kiến nghị, thực trạng vấn đề, nội dung đề xuất và giải pháp cụ thể', 'diễn biến một câu chuyện tưởng tượng', 'tóm tắt một bộ phim'], answer: 1, explain: 'Văn bản kiến nghị trình bày vấn đề, lí do và đề xuất giải pháp gửi đến người hoặc cơ quan có thẩm quyền giải quyết.' },
      { lesson: 'b10-doc', type: 'tf', q: 'Khẳng định sau đúng hay sai: Khi “đọc như một hành trình”, người đọc nên đặt mục tiêu, lập kế hoạch đọc và ghi lại những điều mình khám phá được qua từng chặng.', answer: true, explain: 'Đọc mở rộng hiệu quả cần mục tiêu, kế hoạch, nhật kí đọc và chia sẻ với cộng đồng người đọc.' }
    ]
  }
});
