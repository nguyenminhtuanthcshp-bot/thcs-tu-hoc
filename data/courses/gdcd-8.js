/* Khung chương trình Giáo dục công dân 8 – theo thứ tự bài học SGK "Kết nối tri thức với cuộc sống" (đã đối chiếu mục lục SGK). */
THCS.registerCourse({
  subject: 'gdcd', grade: 8, book: 'Kết nối tri thức với cuộc sống',
  chapters: [
    {"id": "m1", "title": "Giáo dục đạo đức", "lessons": ["Bài 1. Tự hào về truyền thống dân tộc Việt Nam", "Bài 2. Tôn trọng sự đa dạng của các dân tộc", "Bài 3. Lao động cần cù, sáng tạo", "Bài 4. Bảo vệ lẽ phải", "Bài 5. Bảo vệ môi trường và tài nguyên thiên nhiên"]},
    {"id": "m2", "title": "Giáo dục kĩ năng sống", "lessons": ["Bài 6. Xác định mục tiêu cá nhân", "Bài 7. Phòng, chống bạo lực gia đình"]},
    {"id": "m3", "title": "Giáo dục kinh tế", "lessons": ["Bài 8. Lập kế hoạch chi tiêu"]},
    {"id": "m4", "title": "Giáo dục pháp luật", "lessons": ["Bài 9. Phòng ngừa tai nạn vũ khí, cháy, nổ và các chất độc hại", "Bài 10. Quyền và nghĩa vụ lao động của công dân"]}
  ],
  diagnostic: {
    questions: [
      { lesson: 'bai-1', type: 'tf', q: 'Khẳng định sau đúng hay sai: Yêu nước là một truyền thống tốt đẹp nổi bật của dân tộc Việt Nam.', answer: true, explain: 'Đúng.' },
      { lesson: 'bai-1', type: 'short', q: 'Chiến thắng Điện Biên Phủ diễn ra vào năm nào?', answer: '1954', calc: '1954', explain: '1954.' },
      { lesson: 'bai-2', type: 'short', q: 'Việt Nam có bao nhiêu dân tộc?', answer: '54', unit: 'dân tộc', calc: '54', explain: '54.' },
      { lesson: 'bai-2', type: 'mcq', q: 'Hành vi thể hiện tôn trọng sự đa dạng của các dân tộc:', options: ['Tìm hiểu phong tục của bạn khác dân tộc', 'Chế giễu giọng nói vùng miền', 'Xa lánh bạn người dân tộc thiểu số', 'Cho văn hoá mình là nhất'], answer: 0, explain: 'Tôn trọng, học hỏi.' },
      { lesson: 'bai-3', type: 'mcq', q: 'Biểu hiện của lao động sáng tạo:', options: ['Cải tiến cách làm cho hiệu quả hơn', 'Làm theo lối mòn', 'Đùn đẩy việc', 'Bỏ dở khi gặp khó'], answer: 0, explain: 'Sáng tạo.' },
      { lesson: 'bai-4', type: 'tf', q: 'Khẳng định sau đúng hay sai: Bao che cho bạn thân làm sai là bảo vệ lẽ phải.', answer: false, explain: 'Là bao che cái sai.' },
      { lesson: 'bai-5', type: 'mcq', q: 'Luật Bảo vệ môi trường hiện hành là luật năm:', options: ['2020', '2005', '2014', '1993'], answer: 0, explain: 'Luật số 72/2020/QH14.' },
      { lesson: 'bai-5', type: 'short', q: 'Mỗi ngày tiết kiệm 15 lít nước. Sau 30 ngày tiết kiệm bao nhiêu lít?', answer: '450', unit: 'lít', calc: '15*30', explain: '450.' },
      { lesson: 'bai-6', type: 'mcq', q: 'Mục tiêu đáp ứng tiêu chí SMART:', options: ['Đạt 8,0 Văn cuối học kì I', 'Học giỏi hơn', 'Sống vui vẻ', 'Thành người nổi tiếng'], answer: 0, explain: 'Cụ thể, đo được, có thời hạn.' },
      { lesson: 'bai-7', type: 'tf', q: 'Khẳng định sau đúng hay sai: Lăng mạ, đe doạ thành viên gia đình là một hình thức bạo lực gia đình.', answer: true, explain: 'Bạo lực tinh thần.' },
      { lesson: 'bai-7', type: 'short', q: 'Số Tổng đài quốc gia bảo vệ trẻ em là số mấy?', answer: '111', calc: '111', explain: '111.' },
      { lesson: 'bai-8', type: 'short', q: 'Muốn mua đồ 600 000 đồng, mỗi tháng để dành 150 000 đồng. Cần bao nhiêu tháng?', answer: '4', unit: 'tháng', calc: '600000/150000', explain: '4.' },
      { lesson: 'bai-9', type: 'short', q: 'Số điện thoại báo cháy, cứu nạn cứu hộ là số mấy?', answer: '114', calc: '114', explain: '114.' },
      { lesson: 'bai-9', type: 'mcq', q: 'Khi phát hiện vật lạ nghi là bom mìn, em nên:', options: ['Tránh xa, báo công an', 'Mang về nhà', 'Đập thử', 'Bán phế liệu'], answer: 0, explain: 'An toàn.' },
      { lesson: 'bai-10', type: 'short', q: 'Theo Bộ luật Lao động 2019, người chưa đủ 15 tuổi làm việc tối đa bao nhiêu giờ một tuần?', answer: '20', unit: 'giờ', calc: '20', explain: 'Điều 146.' }
    ]
  }
});
