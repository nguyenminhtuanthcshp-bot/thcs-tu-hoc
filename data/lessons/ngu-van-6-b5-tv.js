/* Ngữ văn 6 – Bài 5. Tiếng Việt: Dấu ngoặc kép; ẩn dụ và so sánh trong văn miêu tả. Ví dụ do nhóm biên soạn tự viết (một số lấy từ đoạn du kí tự viết ở bài Đọc). */
THCS.registerLesson('ngu-van-6/b5-tv', {
  objectives: [
    'Nêu được các công dụng của dấu ngoặc kép.',
    'Sử dụng dấu ngoặc kép đúng trong câu văn.',
    'Nhận biết và nêu tác dụng của so sánh, ẩn dụ trong văn miêu tả cảnh vật.',
    'Viết được câu văn miêu tả có dùng so sánh hoặc ẩn dụ.'
  ],
  intro: 'Trong đoạn du kí “Bình minh trên chợ nổi”, tác giả viết cả một “khu phố” trên sông. Vì sao “khu phố” lại nằm trong dấu ngoặc kép? Bài học này sẽ trả lời câu hỏi ấy.',
  steps: [
    { title: 'Công dụng của dấu ngoặc kép', html: `<table class="tbl"><tr><th>Công dụng</th><th>Ví dụ</th></tr><tr><td>1. Đánh dấu <b>lời dẫn trực tiếp</b> (lời nói, ý nghĩ của người khác)</td><td>Anh lái xuồng bảo: “Cây bẹo đó!”</td></tr><tr><td>2. Đánh dấu từ ngữ được hiểu theo <b>nghĩa đặc biệt</b>, hàm ý (mỉa mai, ẩn dụ…)</td><td>cả một “khu phố” trên sông (chợ nổi, không phải phố thật)</td></tr><tr><td>3. Đánh dấu <b>tên tác phẩm</b>, tờ báo, tập san</td><td>Em thích truyện “Sự tích Hồ Gươm”.</td></tr></table>` },
    { title: 'Lưu ý khi dùng dấu ngoặc kép', html: `<ul><li>Dấu ngoặc kép luôn đi thành <b>cặp</b> (mở – đóng).</li><li>Lời dẫn trực tiếp thường đứng sau dấu hai chấm.</li><li>Không lạm dụng: chỉ đặt từ ngữ trong ngoặc kép khi thật sự có nghĩa đặc biệt.</li></ul>` },
    { title: 'So sánh trong văn miêu tả', html: `<p><b>So sánh</b>: đối chiếu sự vật này với sự vật khác có nét tương đồng, thường có từ so sánh (như, tựa, giống như, là…).</p><p>Ví dụ: “Mặt hồ phẳng lặng <b>như</b> một tấm gương khổng lồ.” – giúp người đọc hình dung rõ độ phẳng, trong của mặt hồ.</p>` },
    { title: 'Ẩn dụ trong văn miêu tả', html: `<p><b>Ẩn dụ</b>: gọi tên sự vật này bằng tên sự vật khác có nét tương đồng, <b>không</b> có từ so sánh.</p><p>Ví dụ: “Cánh đồng là một <b>tấm thảm vàng</b> trải dài tới chân trời.” / “Những <b>ngọn lửa</b> hoa phượng rực cháy trên sân trường.”</p>
      <table class="tbl"><tr><th>So sánh</th><th>Ẩn dụ</th></tr><tr><td>Có cả vế được so sánh và vế so sánh, thường có từ “như”</td><td>Chỉ còn vế so sánh (hình ảnh thay thế), ẩn đi sự vật được nói đến</td></tr><tr><td>Hoa phượng đỏ <b>như</b> lửa.</td><td><b>Lửa</b> phượng rực cháy.</td></tr></table>` },
    { title: 'Tác dụng chung', html: `<div class="box tip">So sánh và ẩn dụ giúp cảnh vật hiện lên <b>cụ thể, sinh động, gợi hình, gợi cảm</b>, đồng thời bộc lộ cảm xúc của người viết.</div>` }
  ],
  summary: 'Dấu ngoặc kép: đánh dấu lời dẫn trực tiếp, từ ngữ có nghĩa đặc biệt, tên tác phẩm. So sánh (có từ so sánh) và ẩn dụ (ẩn vế được so sánh) giúp văn miêu tả gợi hình, gợi cảm.',
  examples: [
    { title: 'Xác định công dụng dấu ngoặc kép', problem: 'Nêu công dụng của dấu ngoặc kép trong: “Mẹ dặn: ‘Đi đường nhớ cẩn thận nhé!’” (ngoặc kép trong câu là lời mẹ).', solution: 'Đánh dấu lời dẫn trực tiếp (lời nói của mẹ).' },
    { title: 'Ngoặc kép với nghĩa đặc biệt', problem: '“Cậu bé ‘chăm chỉ’ đến mức ngủ gật suốt giờ học.” Dấu ngoặc kép có tác dụng gì?', solution: 'Đánh dấu từ “chăm chỉ” được dùng với hàm ý mỉa mai (thực ra là lười).' },
    { title: 'Chuyển so sánh thành ẩn dụ', problem: 'Chuyển câu “Hàng dừa như những người lính canh bên bờ biển.” thành câu dùng ẩn dụ.', solution: 'Ví dụ: “Những người lính canh hiên ngang đứng dọc bờ biển, tàu lá xanh vẫy gió.” (người lính canh = hàng dừa).' }
  ],
  exercises: [
    { question: 'Đặt dấu ngoặc kép vào chỗ thích hợp: Bà dặn: Cháu nhớ mang áo ấm nhé!', hints: ['Tìm lời nói trực tiếp của bà.', 'Lời dẫn đứng sau dấu hai chấm.'], solution: 'Bà dặn: “Cháu nhớ mang áo ấm nhé!”' },
    { question: 'Tìm phép so sánh, ẩn dụ trong câu: “Mặt trời như quả cầu lửa từ từ lăn xuống, nhuộm đỏ tấm lụa sông.”', hints: ['Tìm từ “như”.', 'Hình ảnh nào gọi tên dòng sông bằng một sự vật khác?'], solution: 'So sánh: “Mặt trời như quả cầu lửa”. Ẩn dụ: “tấm lụa sông” (mặt sông mềm mại, óng ánh như tấm lụa).' },
    { question: 'Viết một câu tả cánh đồng lúa chín có dùng so sánh.', hints: ['Nghĩ tới màu vàng và sự rộng lớn.', 'Dùng từ “như” hoặc “tựa”.'], solution: 'Ví dụ: “Cánh đồng lúa chín vàng óng như một tấm thảm khổng lồ trải dài đến tận chân trời.”' }
  ],
  quiz: [
    { type: 'mcq', q: 'Dấu ngoặc kép KHÔNG dùng để:', options: ['Kết thúc câu hỏi', 'Đánh dấu lời dẫn trực tiếp', 'Đánh dấu tên tác phẩm', 'Đánh dấu từ ngữ có nghĩa đặc biệt'], answer: 0, explain: 'Kết thúc câu hỏi dùng dấu chấm hỏi.' },
    { type: 'mcq', q: 'Trong câu: Em đọc truyện “Sự tích Hồ Gươm”, dấu ngoặc kép đánh dấu:', options: ['Tên tác phẩm', 'Lời nói', 'Nghĩa mỉa mai', 'Tên người'], answer: 0, explain: 'Tên truyện.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Dấu ngoặc kép luôn đi thành cặp.', answer: true, explain: 'Có ngoặc mở và ngoặc đóng.' },
    { type: 'mcq', q: 'Câu nào dùng phép so sánh?', options: ['Mặt hồ phẳng lặng như tấm gương.', 'Lửa phượng rực cháy.', 'Cả lớp reo hò.', 'Em đi học.'], answer: 0, explain: 'Có từ so sánh “như”.' },
    { type: 'mcq', q: '“Tấm thảm vàng trải dài tới chân trời” (chỉ cánh đồng lúa chín) là:', options: ['Ẩn dụ', 'So sánh', 'Hoán dụ', 'Điệp ngữ'], answer: 0, explain: 'Gọi cánh đồng bằng “tấm thảm vàng”, không có từ so sánh.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Ẩn dụ luôn có từ “như”.', answer: false, explain: 'Ẩn dụ không có từ so sánh.' },
    { type: 'mcq', q: 'Tác dụng chung của so sánh và ẩn dụ trong văn miêu tả:', options: ['Gợi hình, gợi cảm, sinh động', 'Làm câu văn khó hiểu', 'Cung cấp số liệu', 'Kéo dài bài văn'], answer: 0, explain: 'Tăng sức gợi.' },
    { type: 'mcq', q: 'Lời dẫn trực tiếp thường đứng sau dấu câu nào?', options: ['Dấu hai chấm', 'Dấu chấm hỏi', 'Dấu chấm phẩy', 'Dấu chấm than'], answer: 0, explain: 'Sau dấu hai chấm, đặt trong ngoặc kép.' }
  ]
});
