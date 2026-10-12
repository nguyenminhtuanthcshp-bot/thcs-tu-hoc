/* Khung chương trình Tin học 8 – theo thứ tự bài học SGK "Kết nối tri thức với cuộc sống" (đã đối chiếu mục lục SGK). */
THCS.registerCourse({
  subject: 'tin-hoc', grade: 8, book: 'Kết nối tri thức với cuộc sống',
  chapters: [
    {"id": "cd1", "title": "Chủ đề 1. Máy tính và cộng đồng", "lessons": ["Bài 1. Lược sử công cụ tính toán"]},
    {"id": "cd2", "title": "Chủ đề 2. Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin", "lessons": ["Bài 2. Thông tin trong môi trường số", "Bài 3. Thực hành: Khai thác thông tin số"]},
    {"id": "cd3", "title": "Chủ đề 3. Đạo đức, pháp luật và văn hoá trong môi trường số", "lessons": ["Bài 4. Đạo đức và văn hoá trong sử dụng công nghệ kĩ thuật số"]},
    {"id": "cd4", "title": "Chủ đề 4. Ứng dụng tin học", "lessons": ["Bài 5. Sử dụng bảng tính giải quyết bài toán thực tế", "Bài 6. Sắp xếp và lọc dữ liệu", "Bài 7. Trình bày dữ liệu bằng biểu đồ"]},
    {"id": "cd5", "title": "Chủ đề 4 (lựa chọn a). Soạn thảo văn bản và phần mềm trình chiếu nâng cao", "lessons": [{"id": "bai-8a", "title": "Bài 8a. Làm việc với danh sách dạng liệt kê và hình ảnh trong văn bản"}, {"id": "bai-9a", "title": "Bài 9a. Tạo đầu trang, chân trang cho văn bản"}, {"id": "bai-10a", "title": "Bài 10a. Định dạng nâng cao cho trang chiếu"}, {"id": "bai-11a", "title": "Bài 11a. Sử dụng bản mẫu tạo bài trình chiếu"}]},
    {"id": "cd6", "title": "Chủ đề 4 (lựa chọn b). Làm quen với phần mềm chỉnh sửa ảnh", "lessons": [{"id": "bai-8b", "title": "Bài 8b. Phần mềm chỉnh sửa ảnh"}, {"id": "bai-9b", "title": "Bài 9b. Thay đổi khung hình, kích thước ảnh"}, {"id": "bai-10b", "title": "Bài 10b. Thêm văn bản, tạo hiệu ứng cho ảnh"}, {"id": "bai-11b", "title": "Bài 11b. Thực hành tổng hợp"}]},
    {"id": "cd7", "title": "Chủ đề 5. Giải quyết vấn đề với sự trợ giúp của máy tính", "lessons": ["Bài 12. Từ thuật toán đến chương trình", "Bài 13. Biểu diễn dữ liệu", "Bài 14. Cấu trúc điều khiển", "Bài 15. Gỡ lỗi"]},
    {"id": "cd8", "title": "Chủ đề 6. Hướng nghiệp với tin học", "lessons": ["Bài 16. Tin học với nghề nghiệp"]}
  ],
  diagnostic: {
    questions: [
      { lesson: 'bai-1', type: 'mcq', q: 'Linh kiện chính của máy tính điện tử thế hệ thứ nhất là:', options: ['Bóng bán dẫn', 'Đèn điện tử chân không', 'Mạch tích hợp', 'Vi mạch VLSI'], answer: 1, explain: 'Đèn chân không.' },
      { lesson: 'bai-2', type: 'tf', q: 'Khẳng định sau đúng hay sai: Thông tin số dễ sao chép, chỉnh sửa nên cần đánh giá độ tin cậy.', answer: true, explain: 'Đúng.' },
      { lesson: 'bai-4', type: 'tf', q: 'Khẳng định sau đúng hay sai: Ảnh trên Internet thì ai cũng được tự do sử dụng, không cần ghi nguồn.', answer: false, explain: 'Ảnh có quyền tác giả.' },
      { lesson: 'bai-5', type: 'mcq', q: 'D2 chứa =B2*$E$1. Sao chép xuống D5 được:', options: ['=B5*$E$1', '=B5*$E$4', '=B2*$E$1', '=D5*$E$1'], answer: 0, explain: '$E$1 giữ nguyên.' },
      { lesson: 'bai-6', type: 'tf', q: 'Khẳng định sau đúng hay sai: Lọc dữ liệu xoá vĩnh viễn các hàng không thoả mãn điều kiện.', answer: false, explain: 'Chỉ ẩn tạm thời.' },
      { lesson: 'bai-7', type: 'short', q: 'Biểu đồ hình tròn có ba phần 50%, 30% và phần còn lại. Phần còn lại bao nhiêu phần trăm?', unit: '%', answer: '20', calc: '100-50-30', explain: '20%.' },
      { lesson: 'bai-8a', type: 'mcq', q: 'Các bước có trình tự trong văn bản nên trình bày bằng:', options: ['danh sách số thứ tự', 'danh sách kí hiệu', 'bảng', 'chữ nghệ thuật'], answer: 0, explain: 'Numbering.' },
      { lesson: 'bai-10a', type: 'mcq', q: 'Muốn đổi phông tiêu đề cho mọi trang chiếu một lần, dùng:', options: ['Slide Master', 'Crop', 'Page Number', 'Filter'], answer: 0, explain: 'Trang chiếu cái.' },
      { lesson: 'bai-8b', type: 'mcq', q: 'Trong phần mềm chỉnh sửa ảnh, lớp nằm trên cùng sẽ:', options: ['bị lớp dưới che', 'hiển thị đè lên các lớp dưới', 'luôn bị ẩn', 'không sửa được'], answer: 1, explain: 'Lớp trên che lớp dưới.' },
      { lesson: 'bai-9b', type: 'short', q: 'Ảnh 2 000 × 1 500 điểm ảnh, thu nhỏ giữ tỉ lệ còn rộng 800. Chiều cao mới (điểm ảnh)?', unit: 'điểm ảnh', answer: '600', calc: '1500*800/2000', explain: '600.' },
      { lesson: 'bai-12', type: 'mcq', q: 'Khối Scratch dùng để nhập dữ liệu từ bàn phím:', options: ['hỏi … và đợi', 'nói … trong 2 giây', 'đợi 1 giây', 'di chuyển 10 bước'], answer: 0, explain: 'hỏi … và đợi.' },
      { lesson: 'bai-13', type: 'short', q: 'Phần dư của 38 chia 5 là bao nhiêu?', answer: '3', calc: '38%5', explain: '38 = 5 × 7 + 3.' },
      { lesson: 'bai-14', type: 'short', q: 'đặt s thành 0; lặp lại 6 lần: thay đổi s một lượng 4. Giá trị cuối của s?', answer: '24', calc: '6*4', explain: '24.' },
      { lesson: 'bai-15', type: 'tf', q: 'Khẳng định sau đúng hay sai: Lỗi logic làm chương trình chạy được nhưng cho kết quả sai.', answer: true, explain: 'Đúng.' },
      { lesson: 'bai-16', type: 'mcq', q: 'Nghề lắp đặt, cấu hình và giám sát mạng máy tính là:', options: ['Quản trị mạng', 'Kế toán', 'Thiết kế thời trang', 'Biên tập viên'], answer: 0, explain: 'Quản trị mạng.' }
    ]
  }
});
