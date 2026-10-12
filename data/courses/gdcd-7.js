/* Khung chương trình Giáo dục công dân 7 – theo thứ tự bài học SGK "Kết nối tri thức với cuộc sống" (đã đối chiếu mục lục SGK). */
THCS.registerCourse({
  subject: 'gdcd', grade: 7, book: 'Kết nối tri thức với cuộc sống',
  chapters: [
    {"id": "m1", "title": "Giáo dục đạo đức", "lessons": ["Bài 1. Tự hào về truyền thống quê hương", "Bài 2. Quan tâm, cảm thông và chia sẻ", "Bài 3. Học tập tự giác, tích cực", "Bài 4. Giữ chữ tín", "Bài 5. Bảo tồn di sản văn hoá"]},
    {"id": "m2", "title": "Giáo dục kĩ năng sống", "lessons": ["Bài 6. Ứng phó với tâm lí căng thẳng", "Bài 7. Phòng, chống bạo lực học đường"]},
    {"id": "m3", "title": "Giáo dục kinh tế", "lessons": ["Bài 8. Quản lí tiền"]},
    {"id": "m4", "title": "Giáo dục pháp luật", "lessons": ["Bài 9. Phòng, chống tệ nạn xã hội", "Bài 10. Quyền và nghĩa vụ của công dân trong gia đình"]}
  ],
  diagnostic: {
    questions: [
      { lesson: 'bai-1', type: 'tf', q: 'Khẳng định sau đúng hay sai: Truyền thống quê hương là những giá trị tốt đẹp được hình thành và lưu truyền qua nhiều thế hệ ở một địa phương.', answer: true, explain: 'Đúng.' },
      { lesson: 'bai-1', type: 'mcq', q: 'Việc làm thể hiện niềm tự hào về truyền thống quê hương:', options: ['Giới thiệu món ăn, lễ hội quê mình với bạn bè', 'Chê phong tục quê mình là lạc hậu', 'Vẽ bậy lên đình làng', 'Không quan tâm lịch sử địa phương'], answer: 0, explain: 'Tìm hiểu, giới thiệu.' },
      { lesson: 'bai-2', type: 'mcq', q: 'Hành vi thể hiện sự cảm thông, chia sẻ:', options: ['Lắng nghe khi bạn kể chuyện buồn', 'Cười cợt khi bạn mắc lỗi', 'Kể chuyện riêng của bạn cho cả lớp', 'Làm ngơ khi bạn bị ốm'], answer: 0, explain: 'Lắng nghe.' },
      { lesson: 'bai-2', type: 'short', q: 'Lớp có 40 bạn, mỗi bạn góp 5 quyển vở ủng hộ vùng lũ. Cả lớp góp được bao nhiêu quyển?', answer: '200', unit: 'quyển', calc: '40*5', explain: '40 × 5 = 200.' },
      { lesson: 'bai-3', type: 'tf', q: 'Khẳng định sau đúng hay sai: Học tập tự giác là chỉ học khi bị bố mẹ, thầy cô nhắc nhở.', answer: false, explain: 'Tự giác là tự mình chủ động.' },
      { lesson: 'bai-3', type: 'short', q: 'Mỗi ngày đọc 15 trang sách. Sau 1 tuần (7 ngày) đọc được bao nhiêu trang?', answer: '105', unit: 'trang', calc: '15*7', explain: '105.' },
      { lesson: 'bai-4', type: 'mcq', q: 'Biểu hiện của người giữ chữ tín:', options: ['Trả sách mượn đúng hẹn', 'Hứa rồi quên', 'Nhận việc nhưng bỏ dở', 'Bán hàng kém chất lượng'], answer: 0, explain: 'Đúng hẹn.' },
      { lesson: 'bai-5', type: 'short', q: 'Phố cổ Hội An được UNESCO ghi danh là Di sản văn hoá thế giới vào năm nào?', answer: '1999', calc: '1999', explain: 'Năm 1999.' },
      { lesson: 'bai-5', type: 'mcq', q: 'Hành vi bị nghiêm cấm đối với di sản văn hoá:', options: ['Viết, khắc tên lên di tích', 'Tham quan, tìm hiểu di tích', 'Học hát dân ca', 'Báo khi thấy di tích bị xâm hại'], answer: 0, explain: 'Xâm hại di tích.' },
      { lesson: 'bai-6', type: 'tf', q: 'Khẳng định sau đúng hay sai: Thức khuya chơi game là cách ứng phó tích cực với căng thẳng.', answer: false, explain: 'Tiêu cực.' },
      { lesson: 'bai-7', type: 'short', q: 'Số Tổng đài quốc gia bảo vệ trẻ em là số mấy?', answer: '111', calc: '111', explain: '111.' },
      { lesson: 'bai-7', type: 'mcq', q: 'Khi bị bạn đe doạ, bắt nạt, em nên:', options: ['Báo thầy cô, bố mẹ và lưu lại bằng chứng', 'Rủ nhóm khác đánh trả', 'Im lặng chịu đựng', 'Đăng bài bêu xấu bạn'], answer: 0, explain: 'Tìm người lớn giúp đỡ.' },
      { lesson: 'bai-8', type: 'short', q: 'Có 300 000 đồng, để dành 30% để tiết kiệm. Số tiền tiết kiệm là bao nhiêu đồng?', answer: '90000', answerText: '90 000', unit: 'đồng', calc: '300000*30/100', explain: '90 000.' },
      { lesson: 'bai-9', type: 'mcq', q: 'Theo Luật Phòng, chống ma túy năm 2021, hành vi nào bị nghiêm cấm?', options: ['Sử dụng trái phép chất ma tuý', 'Tuyên truyền phòng, chống ma tuý', 'Báo công an khi phát hiện buôn ma tuý', 'Đi khám chữa bệnh'], answer: 0, explain: 'Điều 5 của Luật.' },
      { lesson: 'bai-10', type: 'tf', q: 'Khẳng định sau đúng hay sai: Theo Luật Hôn nhân và gia đình 2014, con có nghĩa vụ kính trọng, chăm sóc, phụng dưỡng cha mẹ.', answer: true, explain: 'Điều 70.' }
    ]
  }
});
