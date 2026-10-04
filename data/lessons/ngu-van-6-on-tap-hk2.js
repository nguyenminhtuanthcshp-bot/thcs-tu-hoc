/* Ngữ văn 6 – Ôn tập học kì II (Bài 6 – Bài 10). Ví dụ do nhóm biên soạn tự viết hoặc từ văn học dân gian. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-6/on-tap-hk2', {
  objectives: [
    'Hệ thống hoá các thể loại đã học ở học kì II: truyền thuyết, truyện cổ tích, văn bản nghị luận, văn bản thông tin.',
    'Hệ thống hoá kiến thức tiếng Việt: dấu chấm phẩy, từ Hán Việt, nghĩa của từ, thành ngữ, điệp ngữ, trạng ngữ, lựa chọn từ ngữ – cấu trúc câu, từ mượn.',
    'Ôn lại các kiểu bài viết, nói và nghe; vận dụng làm bài kiểm tra cuối năm.'
  ],
  intro: 'Học kì II đưa em từ thế giới truyền thuyết, cổ tích đến những văn bản nghị luận, thông tin gắn với đời sống hiện đại. Hãy cùng xâu chuỗi kiến thức để kết thúc năm học thật vững vàng.',
  steps: [
    { title: 'Bản đồ học kì II', html: `<p>Tổng hợp theo từng bài:</p>`,
      svg: S.mindmap({ center: 'Ngữ văn 6 – HK II', branches: [{ title: 'Bài 6', items: ['Truyền thuyết', 'Chấm phẩy, Hán Việt'] }, { title: 'Bài 7', items: ['Truyện cổ tích', 'Nghĩa từ, thành ngữ'] }, { title: 'Bài 8', items: ['Văn bản nghị luận', 'Trạng ngữ'] }, { title: 'Bài 9', items: ['Văn bản thông tin', 'Từ mượn'] }, { title: 'Bài 10', items: ['Đọc sách tự chọn', 'Sản phẩm minh hoạ'] }] }),
      caption: 'Sơ đồ tư duy tổng hợp học kì II.' },
    { title: 'So sánh truyền thuyết và cổ tích', html: `<table class="tbl"><tr><th></th><th>Truyền thuyết</th><th>Truyện cổ tích</th></tr><tr><td>Nhân vật</td><td>Anh hùng, nhân vật lịch sử (Gióng, Lê Lợi)</td><td>Người mồ côi, người em út, người nghèo (Tấm, anh Khoai)</td></tr><tr><td>Sự kiện</td><td>Liên quan đến lịch sử</td><td>Đời sống gia đình, xã hội</td></tr><tr><td>Yếu tố kì ảo</td><td>Có</td><td>Có</td></tr><tr><td>Ý nghĩa</td><td>Ngợi ca anh hùng, giải thích dấu tích</td><td>Ước mơ công bằng, cái thiện thắng</td></tr><tr><td>Dấu tích</td><td>Gắn địa danh có thật</td><td>Thường không xác định</td></tr></table>` },
    { title: 'So sánh văn bản nghị luận và văn bản thông tin', html: `<table class="tbl"><tr><th></th><th>Văn bản nghị luận</th><th>Văn bản thông tin</th></tr><tr><td>Mục đích</td><td>Thuyết phục về một ý kiến</td><td>Cung cấp thông tin</td></tr><tr><td>Yếu tố chính</td><td>Ý kiến, lí lẽ, bằng chứng</td><td>Nhan đề, sa pô, đề mục, số liệu, hình ảnh</td></tr><tr><td>Ngôn ngữ</td><td>Lập luận chặt chẽ, có từ ngữ liên kết</td><td>Chính xác, khách quan</td></tr><tr><td>Ví dụ đã học</td><td>“Khác biệt không làm ta xa nhau”</td><td>“Rừng ngập mặn – lá chắn xanh ven biển”</td></tr></table>` },
    { title: 'Tiếng Việt và các kiểu bài viết, nói', html: `<table class="tbl"><tr><th>Bài</th><th>Tiếng Việt</th><th>Viết</th><th>Nói và nghe</th></tr><tr><td>6</td><td>Dấu chấm phẩy; từ Hán Việt; điệp ngữ</td><td>Thuyết minh thuật lại sự kiện</td><td>Kể lại truyền thuyết</td></tr><tr><td>7</td><td>Nghĩa của từ; thành ngữ; điệp ngữ</td><td>Đóng vai nhân vật kể truyện cổ tích</td><td>Kể truyện cổ tích bằng lời nhân vật</td></tr><tr><td>8</td><td>Trạng ngữ; lựa chọn từ ngữ, cấu trúc câu</td><td>Trình bày ý kiến về hiện tượng</td><td>Trình bày ý kiến</td></tr><tr><td>9</td><td>Từ mượn</td><td>Biên bản; tóm tắt bằng sơ đồ</td><td>Thảo luận giải pháp chống ô nhiễm</td></tr><tr><td>10</td><td>—</td><td>Ý kiến về hiện tượng gợi ra từ sách</td><td>Giới thiệu sản phẩm minh hoạ sách</td></tr></table>` },
    { title: 'Chiến lược làm bài cuối năm', html: `<ul><li><b>Đọc hiểu</b>: xác định thể loại → nội dung chính → yếu tố đặc trưng (chi tiết kì ảo / lí lẽ – bằng chứng / đề mục – số liệu).</li><li><b>Tiếng Việt</b>: nhận diện trạng ngữ (hỏi khi nào, ở đâu, vì sao…), giải nghĩa yếu tố Hán Việt, phân loại từ mượn.</li><li><b>Viết</b>: với bài nghị luận, viết câu nêu ý kiến trước; mỗi lí lẽ một bằng chứng; kết bài khẳng định.</li></ul>` }
  ],
  summary: 'Học kì II: đọc truyền thuyết, cổ tích, văn bản nghị luận, văn bản thông tin, sách tự chọn; tiếng Việt: dấu chấm phẩy, từ Hán Việt, nghĩa của từ, thành ngữ, điệp ngữ, trạng ngữ, lựa chọn từ ngữ – cấu trúc câu, từ mượn; viết và nói: thuật lại sự kiện, kể truyện, trình bày ý kiến, biên bản, sơ đồ tóm tắt, giới thiệu sản phẩm.',
  examples: [
    { title: 'Nhận diện thể loại', problem: 'Một truyện kể về chàng trai nghèo được Bụt giúp đỡ, cuối cùng lấy được vợ. Đó là thể loại gì?', solution: 'Truyện cổ tích – nhân vật người nghèo, có yếu tố kì ảo (Bụt), kết thúc có hậu, không gắn với sự kiện lịch sử.' },
    { title: 'Xác định trạng ngữ', problem: 'Tìm và gọi tên trạng ngữ: “Để bảo vệ rừng ngập mặn, người dân Cần Giờ đã trồng lại hàng nghìn héc-ta rừng.”', solution: '“Để bảo vệ rừng ngập mặn” – trạng ngữ chỉ mục đích.' },
    { title: 'Phân loại từ mượn', problem: 'Phân loại: sinh quyển, in-tơ-nét, cà phê.', solution: 'sinh quyển: gốc Hán; in-tơ-nét: gốc Anh; cà phê: gốc Pháp.' }
  ],
  exercises: [
    { question: 'Chỉ ra ý kiến, một lí lẽ và một bằng chứng trong đoạn: “Đọc sách mỗi ngày rất có ích. Sách giúp ta mở rộng hiểu biết. Nhờ đọc truyện cổ tích, em biết thêm nhiều phong tục xưa của ông cha.”', hints: ['Câu nêu quan điểm.', 'Câu giải thích và câu ví dụ cụ thể.'], solution: 'Ý kiến: “Đọc sách mỗi ngày rất có ích.” Lí lẽ: “Sách giúp ta mở rộng hiểu biết.” Bằng chứng: “Nhờ đọc truyện cổ tích, em biết thêm nhiều phong tục xưa.”' },
    { question: 'Giải thích nghĩa yếu tố Hán Việt in đậm: <b>thuỷ</b> triều, <b>gia</b> vị, <b>quốc</b> kì, <b>sơn</b> hà.', hints: ['Nhớ bảng yếu tố ở Bài 6, 7.', 'Gia vị: thêm.'], solution: 'thuỷ – nước; gia – thêm; quốc – nước (đất nước); sơn – núi.' },
    { question: 'Viết đoạn văn (4–5 câu) trình bày ý kiến về việc học sinh nên bảo vệ môi trường, có ít nhất một trạng ngữ và một từ mượn.', hints: ['Nêu ý kiến ở câu đầu.', 'Trạng ngữ: “Ở trường,” “Để…”; từ mượn: môi trường, ni lông…'], solution: 'Ví dụ: Theo em, học sinh cần chung tay bảo vệ môi trường. Ở trường, chúng em có thể phân loại rác và trồng thêm cây xanh. Để giảm rác thải, mỗi bạn nên hạn chế dùng túi ni lông. Những việc nhỏ ấy, nếu ai cũng làm, sẽ giúp Trái Đất – ngôi nhà chung – xanh sạch hơn.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Truyền thuyết khác cổ tích chủ yếu ở chỗ:', options: ['Gắn với nhân vật, sự kiện lịch sử', 'Có yếu tố kì ảo', 'Là truyện dân gian', 'Được kể bằng văn xuôi'], answer: 0, explain: 'Cả hai đều có kì ảo; truyền thuyết gắn lịch sử.' },
    { type: 'mcq', q: 'Văn bản thông tin có đặc điểm:', options: ['Sa pô, đề mục, thông tin khách quan', 'Vần nhịp', 'Cốt truyện hư cấu', 'Lời nhân vật'], answer: 0, explain: 'Đặc trưng văn bản thông tin.' },
    { type: 'mcq', q: '“Vì trời mưa” là trạng ngữ chỉ:', options: ['Nguyên nhân', 'Thời gian', 'Nơi chốn', 'Mục đích'], answer: 0, explain: 'Trả lời “vì sao?”.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Biên bản cần ghi cảm xúc của người viết.', answer: false, explain: 'Biên bản khách quan.' },
    { type: 'mcq', q: 'Từ nào là từ mượn gốc Pháp?', options: ['xà phòng', 'sơn hà', 'quốc gia', 'thuỷ triều'], answer: 0, explain: 'Các từ còn lại gốc Hán.' },
    { type: 'mcq', q: 'Yếu tố “sơn” nghĩa là:', options: ['Núi', 'Nước', 'Trời', 'Nhà'], answer: 0, explain: 'Sơn = núi.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Văn bản nghị luận dùng lí lẽ và bằng chứng để thuyết phục.', answer: true, explain: 'Đặc trưng nghị luận.' },
    { type: 'mcq', q: 'Kiểu bài viết của Bài 7 là:', options: ['Đóng vai nhân vật kể lại truyện cổ tích', 'Viết biên bản', 'Tả cảnh sinh hoạt', 'Làm thơ lục bát'], answer: 0, explain: 'Theo chương trình Bài 7.' }
  ]
});
})();
