/* Khung chương trình Giáo dục công dân 9 – theo thứ tự bài học SGK "Kết nối tri thức với cuộc sống" (đã đối chiếu mục lục SGK). */
THCS.registerCourse({
  subject: 'gdcd', grade: 9, book: 'Kết nối tri thức với cuộc sống',
  chapters: [
    {"id": "m1", "title": "Giáo dục đạo đức", "lessons": ["Bài 1. Sống có lí tưởng", "Bài 2. Khoan dung", "Bài 3. Tích cực tham gia các hoạt động cộng đồng", "Bài 4. Khách quan và công bằng", "Bài 5. Bảo vệ hoà bình"]},
    {"id": "m2", "title": "Giáo dục kĩ năng sống", "lessons": ["Bài 6. Quản lí thời gian hiệu quả", "Bài 7. Thích ứng với thay đổi"]},
    {"id": "m3", "title": "Giáo dục kinh tế", "lessons": ["Bài 8. Tiêu dùng thông minh"]},
    {"id": "m4", "title": "Giáo dục pháp luật", "lessons": ["Bài 9. Vi phạm pháp luật và trách nhiệm pháp lí", "Bài 10. Quyền tự do kinh doanh và nghĩa vụ nộp thuế"]}
  ],
  diagnostic: {
    questions: [
      { lesson: 'bai-1', type: 'tf', q: 'Khẳng định sau đúng hay sai: Sống có lí tưởng là xác định mục đích cao đẹp và nỗ lực thực hiện.', answer: true, explain: 'Đúng.' },
      { lesson: 'bai-2', type: 'mcq', q: 'Biểu hiện của khoan dung:', options: ['Tha thứ khi bạn biết lỗi', 'Thù dai, trả đũa', 'Định kiến với người khác', 'Bới móc lỗi nhỏ'], answer: 0, explain: 'Khoan dung.' },
      { lesson: 'bai-3', type: 'short', q: 'Lớp 40 bạn, mỗi bạn góp 2 quyển sách. Lớp góp được bao nhiêu quyển?', answer: '80', unit: 'quyển', calc: '40*2', explain: '80.' },
      { lesson: 'bai-3', type: 'mcq', q: 'Hoạt động cộng đồng thuộc lĩnh vực nhân đạo:', options: ['Quyên góp giúp vùng lũ', 'Thi đấu bóng đá', 'Sinh hoạt Đoàn', 'Trồng cây'], answer: 0, explain: 'Nhân đạo.' },
      { lesson: 'bai-4', type: 'tf', q: 'Khẳng định sau đúng hay sai: Ưu ái bạn thân khi chấm thi đua là công bằng.', answer: false, explain: 'Thiên vị.' },
      { lesson: 'bai-4', type: 'short', q: 'Một bạn được 18 trong 40 phiếu bầu. Tỉ lệ bao nhiêu %?', answer: '45', unit: '%', calc: '18/40*100', explain: '45%.' },
      { lesson: 'bai-5', type: 'mcq', q: 'Cách giải quyết mâu thuẫn thể hiện tinh thần hoà bình:', options: ['Đối thoại, thương lượng', 'Hẹn đánh nhau', 'Nói xấu trên mạng', 'Cô lập bạn'], answer: 0, explain: 'Hoà bình.' },
      { lesson: 'bai-6', type: 'mcq', q: 'Việc quan trọng và khẩn cấp nên:', options: ['Làm ngay', 'Để sau', 'Bỏ qua', 'Nhờ người khác làm hết'], answer: 0, explain: 'Làm ngay.' },
      { lesson: 'bai-6', type: 'short', q: 'Tự học 2 giờ/ngày trong 30 ngày là bao nhiêu giờ?', answer: '60', unit: 'giờ', calc: '2*30', explain: '60.' },
      { lesson: 'bai-7', type: 'tf', q: 'Khẳng định sau đúng hay sai: Tự cô lập là cách thích ứng tốt khi chuyển trường.', answer: false, explain: 'Cần chủ động kết nối.' },
      { lesson: 'bai-8', type: 'short', q: 'Món hàng 400 000 đồng giảm 25%. Giá sau giảm bao nhiêu đồng?', answer: '300000', answerText: '300 000', unit: 'đồng', calc: '400000*0.75', explain: '300 000.' },
      { lesson: 'bai-8', type: 'mcq', q: 'Luật Bảo vệ quyền lợi người tiêu dùng hiện hành là luật năm:', options: ['2023', '2010', '2015', '2019'], answer: 0, explain: 'Luật số 19/2023/QH15.' },
      { lesson: 'bai-9', type: 'short', q: 'Theo Bộ luật Hình sự 2015, người từ đủ bao nhiêu tuổi chịu trách nhiệm hình sự về mọi tội phạm?', answer: '16', unit: 'tuổi', calc: '16', explain: 'Điều 12.' },
      { lesson: 'bai-9', type: 'mcq', q: 'Vượt đèn đỏ là loại vi phạm:', options: ['hành chính', 'hình sự', 'dân sự', 'kỉ luật'], answer: 0, explain: 'Hành chính.' },
      { lesson: 'bai-10', type: 'mcq', q: 'Hiến pháp 2013 quy định “Mọi người có nghĩa vụ nộp thuế theo luật định” tại:', options: ['Điều 47', 'Điều 33', 'Điều 35', 'Điều 43'], answer: 0, explain: 'Điều 47.' }
    ]
  }
});
