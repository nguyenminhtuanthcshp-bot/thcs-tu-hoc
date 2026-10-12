/* Khung chương trình Tin học 7 – theo thứ tự bài học SGK "Kết nối tri thức với cuộc sống" (đã đối chiếu mục lục SGK). */
THCS.registerCourse({
  subject: 'tin-hoc', grade: 7, book: 'Kết nối tri thức với cuộc sống',
  chapters: [
    {"id": "cd1", "title": "Chủ đề 1. Máy tính và cộng đồng", "lessons": ["Bài 1. Thiết bị vào – ra", "Bài 2. Phần mềm máy tính", "Bài 3. Quản lí dữ liệu trong máy tính"]},
    {"id": "cd2", "title": "Chủ đề 2. Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin", "lessons": ["Bài 4. Mạng xã hội và một số kênh trao đổi thông tin trên Internet"]},
    {"id": "cd3", "title": "Chủ đề 3. Đạo đức, pháp luật và văn hoá trong môi trường số", "lessons": ["Bài 5. Ứng xử trên mạng"]},
    {"id": "cd4", "title": "Chủ đề 4. Ứng dụng tin học", "lessons": ["Bài 6. Làm quen với phần mềm bảng tính", "Bài 7. Tính toán tự động trên bảng tính", "Bài 8. Công cụ hỗ trợ tính toán", "Bài 9. Trình bày bảng tính", "Bài 10. Hoàn thiện bảng tính", "Bài 11. Tạo bài trình chiếu", "Bài 12. Định dạng đối tượng trên trang chiếu", "Bài 13. Thực hành tổng hợp: Hoàn thiện bài trình chiếu"]},
    {"id": "cd5", "title": "Chủ đề 5. Giải quyết vấn đề với sự trợ giúp của máy tính", "lessons": ["Bài 14. Thuật toán tìm kiếm tuần tự", "Bài 15. Thuật toán tìm kiếm nhị phân", "Bài 16. Thuật toán sắp xếp"]}
  ],
  diagnostic: {
    questions: [
      { lesson: 'bai-1', type: 'tf', q: 'Khẳng định sau đúng hay sai: Màn hình cảm ứng vừa là thiết bị vào vừa là thiết bị ra.', answer: true, explain: 'Chạm để nhập và hiển thị kết quả.' },
      { lesson: 'bai-2', type: 'mcq', q: 'Phần mềm nào là hệ điều hành?', options: ['Phần mềm bảng tính', 'Android', 'Trình duyệt web', 'Phần mềm trình chiếu'], answer: 1, explain: 'Android là hệ điều hành.' },
      { lesson: 'bai-3', type: 'mcq', q: 'Trong đường dẫn D:\\Lop7\\Tin\\bai.docx, tệp bai.docx nằm trực tiếp trong thư mục:', options: ['D:', 'Lop7', 'Tin', 'docx'], answer: 2, explain: 'Thư mục chứa trực tiếp là Tin.' },
      { lesson: 'bai-4', type: 'tf', q: 'Khẳng định sau đúng hay sai: Nên chia sẻ địa chỉ nhà và số điện thoại công khai trên mạng xã hội.', answer: false, explain: 'Cần bảo vệ thông tin cá nhân.' },
      { lesson: 'bai-5', type: 'mcq', q: 'Khi nhận một tin giật gân kêu gọi “chia sẻ ngay”, em nên:', options: ['chia sẻ ngay', 'kiểm tra nguồn tin trước', 'bình luận chê bai', 'gửi cho mọi người'], answer: 1, explain: 'Kiểm tra nguồn trước.' },
      { lesson: 'bai-6', type: 'short', q: 'Vùng B2:D6 có bao nhiêu ô?', unit: 'ô', answer: '15', calc: '3*5', explain: '3 cột × 5 hàng.' },
      { lesson: 'bai-7', type: 'short', q: 'Kết quả của công thức =2+3*4 là bao nhiêu?', answer: '14', calc: '2+3*4', explain: 'Nhân trước.' },
      { lesson: 'bai-8', type: 'short', q: 'B1:B5 chứa 6, 9, 7, 10, 8. Kết quả =AVERAGE(B1:B5)?', answer: '8', calc: '(6+9+7+10+8)/5', explain: '40 : 5.' },
      { lesson: 'bai-9', type: 'tf', q: 'Khẳng định sau đúng hay sai: Giảm số chữ số thập phân hiển thị làm thay đổi giá trị lưu trong ô.', answer: false, explain: 'Chỉ đổi cách hiển thị.' },
      { lesson: 'bai-10', type: 'mcq', q: 'Công thức lấy ô C2 của trang tính “HocKi1” là:', options: ['=HocKi1!C2', '=C2!HocKi1', '=HocKi1:C2', '=HocKi1(C2)'], answer: 0, explain: 'TênTrang!Ô.' },
      { lesson: 'bai-11', type: 'mcq', q: 'Phím bắt đầu trình chiếu từ trang đầu tiên là:', options: ['F1', 'F5', 'Esc', 'Tab'], answer: 1, explain: 'F5.' },
      { lesson: 'bai-12', type: 'short', q: 'Ảnh 1 200 × 900 điểm ảnh thu nhỏ giữ tỉ lệ còn rộng 400. Chiều cao mới (điểm ảnh)?', unit: 'điểm ảnh', answer: '300', calc: '900*400/1200', explain: 'Giảm 3 lần.' },
      { lesson: 'bai-14', type: 'short', q: 'Tìm kiếm tuần tự số 8 trong dãy 3, 5, 1, 8, 2. Cần mấy lần so sánh?', unit: 'lần', answer: '4', calc: '4', explain: '8 ở vị trí 4.' },
      { lesson: 'bai-15', type: 'tf', q: 'Khẳng định sau đúng hay sai: Tìm kiếm nhị phân dùng được cho dãy chưa sắp xếp.', answer: false, explain: 'Dãy phải được sắp xếp.' },
      { lesson: 'bai-16', type: 'mcq', q: 'Dãy 4, 1, 3 sau lượt 1 sắp xếp nổi bọt tăng dần là:', options: ['1, 4, 3', '1, 3, 4', '4, 3, 1', '3, 1, 4'], answer: 1, explain: '(4,1) đổi → 1,4,3; (4,3) đổi → 1,3,4.' }
    ]
  }
});
