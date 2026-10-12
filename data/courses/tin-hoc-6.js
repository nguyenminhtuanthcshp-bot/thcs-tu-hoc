/* Khung chương trình Tin học 6 – theo thứ tự bài học SGK "Kết nối tri thức với cuộc sống" (đã đối chiếu mục lục SGK). */
THCS.registerCourse({
  subject: 'tin-hoc', grade: 6, book: 'Kết nối tri thức với cuộc sống',
  chapters: [
    {"id": "cd1", "title": "Chủ đề 1. Máy tính và cộng đồng", "lessons": ["Bài 1. Thông tin và dữ liệu", "Bài 2. Xử lí thông tin", "Bài 3. Thông tin trong máy tính"]},
    {"id": "cd2", "title": "Chủ đề 2. Mạng máy tính và Internet", "lessons": ["Bài 4. Mạng máy tính", "Bài 5. Internet"]},
    {"id": "cd3", "title": "Chủ đề 3. Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin", "lessons": ["Bài 6. Mạng thông tin toàn cầu", "Bài 7. Tìm kiếm thông tin trên Internet", "Bài 8. Thư điện tử"]},
    {"id": "cd4", "title": "Chủ đề 4. Đạo đức, pháp luật và văn hoá trong môi trường số", "lessons": ["Bài 9. An toàn thông tin trên Internet"]},
    {"id": "cd5", "title": "Chủ đề 5. Ứng dụng tin học", "lessons": ["Bài 10. Sơ đồ tư duy", "Bài 11. Định dạng văn bản", "Bài 12. Trình bày thông tin ở dạng bảng", "Bài 13. Thực hành: Tìm kiếm và thay thế", "Bài 14. Thực hành tổng hợp: Hoàn thiện sổ lưu niệm"]},
    {"id": "cd6", "title": "Chủ đề 6. Giải quyết vấn đề với sự trợ giúp của máy tính", "lessons": ["Bài 15. Thuật toán", "Bài 16. Các cấu trúc điều khiển", "Bài 17. Chương trình máy tính"]}
  ],
  diagnostic: {
    questions: [
      { lesson: 'bai-1', type: 'tf', q: 'Khẳng định sau đúng hay sai: Thẻ nhớ, quyển vở, tấm bia đá đều là vật mang tin.', answer: true, explain: 'Chúng đều là phương tiện lưu trữ, truyền dữ liệu.' },
      { lesson: 'bai-2', type: 'mcq', q: 'Bộ phận nào của máy tính thực hiện hoạt động lưu trữ?', options: ['Bàn phím', 'Bộ nhớ', 'Màn hình', 'Loa'], answer: 1, explain: 'Bộ nhớ (RAM, ổ đĩa…) dùng để lưu trữ.' },
      { lesson: 'bai-3', type: 'short', q: 'Một thẻ nhớ 2 GB chứa được bao nhiêu ảnh, nếu mỗi ảnh 4 MB? (1 GB = 1 024 MB)', unit: 'ảnh', answer: '512', calc: '2*1024/4', explain: '2 GB = 2 048 MB; 2 048 : 4 = 512 ảnh.' },
      { lesson: 'bai-3', type: 'mcq', q: '1 byte bằng:', options: ['2 bit', '8 bit', '10 bit', '1 024 bit'], answer: 1, explain: '1 byte = 8 bit.' },
      { lesson: 'bai-4', type: 'tf', q: 'Khẳng định sau đúng hay sai: Mạng Wi-Fi là một loại mạng có dây.', answer: false, explain: 'Wi-Fi là mạng không dây, truyền bằng sóng.' },
      { lesson: 'bai-5', type: 'mcq', q: 'Đặc điểm nào là của Internet?', options: ['Có một chủ sở hữu duy nhất', 'Chỉ dùng trong một trường học', 'Tính toàn cầu', 'Không thể trao đổi hai chiều'], answer: 2, explain: 'Internet có tính toàn cầu, tương tác, dễ tiếp cận, không chủ sở hữu.' },
      { lesson: 'bai-6', type: 'mcq', q: 'Phần mềm dùng để xem các trang web gọi là:', options: ['trình duyệt', 'máy in', 'hệ điều hành', 'phần mềm soạn thảo'], answer: 0, explain: 'Trình duyệt (Chrome, Edge, Firefox, Cốc Cốc…).' },
      { lesson: 'bai-7', type: 'tf', q: 'Khẳng định sau đúng hay sai: Từ khoá càng cụ thể, kết quả tìm kiếm càng sát với thông tin cần tìm.', answer: true, explain: 'Từ khoá cụ thể giúp thu hẹp kết quả.' },
      { lesson: 'bai-8', type: 'mcq', q: 'Địa chỉ thư điện tử nào hợp lệ?', options: ['lan anh@gmail.com', 'lananh@gmail.com', 'lananh.gmail.com', 'lananh@'], answer: 1, explain: 'Dạng tên đăng nhập@tên miền, không có dấu cách.' },
      { lesson: 'bai-9', type: 'short', q: 'Một mật khẩu gồm 4 chữ số (mỗi chữ số từ 0 đến 9). Có tất cả bao nhiêu mật khẩu như vậy?', unit: 'mật khẩu', answer: '10000', answerText: '10 000', calc: '10*10*10*10', explain: '10 × 10 × 10 × 10 = 10 000 – rất ít, nên mật khẩu này yếu.' },
      { lesson: 'bai-10', type: 'mcq', q: 'Trong sơ đồ tư duy, chủ đề chính thường được đặt ở:', options: ['góc trên bên trái', 'trung tâm', 'cuối trang', 'ngoài trang giấy'], answer: 1, explain: 'Chủ đề chính ở trung tâm, các nhánh toả ra.' },
      { lesson: 'bai-11', type: 'short', q: 'Trang giấy rộng 21 cm, lề trái 3 cm, lề phải 2 cm. Vùng soạn thảo rộng bao nhiêu xăng-ti-mét?', unit: 'cm', answer: '16', calc: '21-3-2', explain: '21 − 3 − 2 = 16 (cm).' },
      { lesson: 'bai-12', type: 'short', q: 'Một bảng có 6 hàng và 4 cột. Bảng có bao nhiêu ô?', unit: 'ô', answer: '24', calc: '6*4', explain: 'Số ô = số hàng × số cột = 24.' },
      { lesson: 'bai-15', type: 'tf', q: 'Khẳng định sau đúng hay sai: Trong sơ đồ khối, hình thoi dùng để biểu diễn điều kiện.', answer: true, explain: 'Hình thoi: điều kiện; hình bình hành: nhập/xuất; hình chữ nhật: xử lí.' },
      { lesson: 'bai-17', type: 'short', q: 'Để nhân vật Scratch vẽ hình lục giác đều, mỗi lần lặp nhân vật xoay bao nhiêu độ?', unit: 'độ', answer: '60', calc: '360/6', explain: '360° : 6 = 60°.' }
    ]
  }
});
