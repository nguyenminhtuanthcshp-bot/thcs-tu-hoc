/* Khung chương trình Giáo dục công dân 6 – theo thứ tự bài học SGK "Kết nối tri thức với cuộc sống" (đã đối chiếu mục lục SGK). */
THCS.registerCourse({
  subject: 'gdcd', grade: 6, book: 'Kết nối tri thức với cuộc sống',
  chapters: [
    {"id": "m1", "title": "Giáo dục đạo đức", "lessons": ["Bài 1. Tự hào về truyền thống gia đình, dòng họ", "Bài 2. Yêu thương con người", "Bài 3. Siêng năng, kiên trì", "Bài 4. Tôn trọng sự thật", "Bài 5. Tự lập"]},
    {"id": "m2", "title": "Giáo dục kĩ năng sống", "lessons": ["Bài 6. Tự nhận thức bản thân", "Bài 7. Ứng phó với tình huống nguy hiểm"]},
    {"id": "m3", "title": "Giáo dục kinh tế", "lessons": ["Bài 8. Tiết kiệm"]},
    {"id": "m4", "title": "Giáo dục pháp luật", "lessons": ["Bài 9. Công dân nước Cộng hoà xã hội chủ nghĩa Việt Nam", "Bài 10. Quyền và nghĩa vụ cơ bản của công dân", "Bài 11. Quyền cơ bản của trẻ em", "Bài 12. Thực hiện quyền trẻ em"]}
    ],
  diagnostic: {
    questions: [
      { lesson: 'bai-1', type: 'tf', q: 'Khẳng định sau đúng hay sai: Truyền thống gia đình, dòng họ là những giá trị tốt đẹp được truyền từ đời này sang đời khác.', answer: true, explain: 'Đúng.' },
      { lesson: 'bai-2', type: 'mcq', q: 'Hành vi thể hiện sự vô cảm:', options: ['Quay video người bị nạn để câu “like”', 'Giúp cụ già sang đường', 'Ủng hộ vùng lũ', 'An ủi bạn buồn'], answer: 0, explain: 'Vô cảm.' },
      { lesson: 'bai-3', type: 'short', q: 'Mỗi ngày học 8 từ mới, sau 30 ngày học được bao nhiêu từ?', answer: '240', unit: 'từ', calc: '8*30', explain: '240.' },
      { lesson: 'bai-4', type: 'mcq', q: 'Hành vi KHÔNG tôn trọng sự thật:', options: ['Sửa điểm trong sổ liên lạc', 'Nhận lỗi khi làm sai', 'Kiểm chứng tin trước khi chia sẻ', 'Bảo vệ bạn bị đổ oan'], answer: 0, explain: 'Gian dối.' },
      { lesson: 'bai-5', type: 'tf', q: 'Khẳng định sau đúng hay sai: Người tự lập không bao giờ được nhận sự giúp đỡ của ai.', answer: false, explain: 'Vẫn có thể nhận giúp đỡ chính đáng.' },
      { lesson: 'bai-6', type: 'mcq', q: 'Câu nói thể hiện sự tự ti:', options: ['“Mình chẳng làm được gì cả”', '“Mình sẽ luyện thêm phần này”', '“Mình vẽ khá tốt”', '“Mình cần hỏi thầy cô”'], answer: 0, explain: 'Tự ti.' },
      { lesson: 'bai-7', type: 'short', q: 'Số điện thoại báo cháy, cứu nạn cứu hộ ở Việt Nam là số mấy?', answer: '114', calc: '114', explain: '114.' },
      { lesson: 'bai-7', type: 'mcq', q: 'Khi có giông sét, KHÔNG nên:', options: ['trú dưới gốc cây cao', 'vào nhà kiên cố', 'tránh xa cột điện', 'tránh chỗ trống trải'], answer: 0, explain: 'Gốc cây dễ bị sét.' },
      { lesson: 'bai-8', type: 'short', q: 'Mỗi tuần để dành 25 000 đồng. Sau 8 tuần có bao nhiêu đồng?', answer: '200000', answerText: '200 000', unit: 'đồng', calc: '25000*8', explain: '200 000.' },
      { lesson: 'bai-8', type: 'tf', q: 'Khẳng định sau đúng hay sai: Tiết kiệm là không chi tiêu cho bất cứ việc gì.', answer: false, explain: 'Đó là keo kiệt.' },
      { lesson: 'bai-9', type: 'mcq', q: 'Căn cứ xác định công dân của một nước là:', options: ['quốc tịch', 'nơi ở', 'ngôn ngữ', 'nghề nghiệp'], answer: 0, explain: 'Quốc tịch.' },
      { lesson: 'bai-10', type: 'mcq', q: 'Theo Hiến pháp năm 2013, học tập là:', options: ['vừa là quyền vừa là nghĩa vụ', 'chỉ là quyền', 'chỉ là nghĩa vụ', 'không bắt buộc với ai'], answer: 0, explain: 'Điều 39.' },
      { lesson: 'bai-11', type: 'short', q: 'Theo Luật Trẻ em năm 2016, trẻ em là người dưới bao nhiêu tuổi?', answer: '16', unit: 'tuổi', calc: '16', explain: 'Dưới 16 tuổi.' },
      { lesson: 'bai-11', type: 'mcq', q: 'Quyền được vui chơi, giải trí thuộc nhóm quyền:', options: ['phát triển', 'bảo vệ', 'sống còn', 'tham gia'], answer: 0, explain: 'Phát triển.' },
      { lesson: 'bai-12', type: 'short', q: 'Số Tổng đài quốc gia bảo vệ trẻ em là số mấy?', answer: '111', calc: '111', explain: '111.' }
    ]
  }
});
