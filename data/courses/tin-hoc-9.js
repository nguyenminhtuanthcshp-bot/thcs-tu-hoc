/* Khung chương trình Tin học 9 – theo thứ tự bài học SGK "Kết nối tri thức với cuộc sống" (đã đối chiếu mục lục SGK). */
THCS.registerCourse({
  subject: 'tin-hoc', grade: 9, book: 'Kết nối tri thức với cuộc sống',
  chapters: [
    {"id": "cd1", "title": "Chủ đề 1. Máy tính và cộng đồng", "lessons": ["Bài 1. Thế giới kĩ thuật số"]},
    {"id": "cd2", "title": "Chủ đề 2. Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin", "lessons": ["Bài 2. Thông tin trong giải quyết vấn đề", "Bài 3. Thực hành: Đánh giá chất lượng thông tin"]},
    {"id": "cd3", "title": "Chủ đề 3. Đạo đức, pháp luật và văn hoá trong môi trường số", "lessons": ["Bài 4. Một số vấn đề pháp lí về sử dụng dịch vụ Internet"]},
    {"id": "cd4", "title": "Chủ đề 4. Ứng dụng tin học", "lessons": ["Bài 5. Tìm hiểu phần mềm mô phỏng", "Bài 6. Thực hành: Khai thác phần mềm mô phỏng", "Bài 7. Trình bày thông tin trong trao đổi và hợp tác", "Bài 8. Thực hành: Sử dụng công cụ trực quan trình bày thông tin trong trao đổi và hợp tác"]},
    {"id": "cd5", "title": "Chủ đề 4 (lựa chọn a). Sử dụng bảng tính điện tử nâng cao", "lessons": [{"id": "bai-9a", "title": "Bài 9a. Sử dụng công cụ xác thực dữ liệu"}, {"id": "bai-10a", "title": "Bài 10a. Sử dụng hàm COUNTIF"}, {"id": "bai-11a", "title": "Bài 11a. Sử dụng hàm SUMIF"}, {"id": "bai-12a", "title": "Bài 12a. Sử dụng hàm IF"}, {"id": "bai-13a", "title": "Bài 13a. Hoàn thiện bảng tính quản lí tài chính gia đình"}]},
    {"id": "cd6", "title": "Chủ đề 4 (lựa chọn b). Tạo và chỉnh sửa video", "lessons": [{"id": "bai-9b", "title": "Bài 9b. Các chức năng chính của phần mềm làm video"}, {"id": "bai-10b", "title": "Bài 10b. Chuẩn bị dữ liệu và dựng video"}, {"id": "bai-11b", "title": "Bài 11b. Thực hành: Dựng video theo kịch bản"}, {"id": "bai-12b", "title": "Bài 12b. Hoàn thành việc dựng video"}, {"id": "bai-13b", "title": "Bài 13b. Biên tập và xuất video"}]},
    {"id": "cd7", "title": "Chủ đề 5. Giải quyết vấn đề với sự trợ giúp của máy tính", "lessons": ["Bài 14. Giải quyết vấn đề", "Bài 15. Bài toán tin học", "Bài 16. Thực hành: Lập chương trình máy tính"]},
    {"id": "cd8", "title": "Chủ đề 6. Hướng nghiệp với tin học", "lessons": ["Bài 17. Tin học và thế giới nghề nghiệp"]}
    ],
  diagnostic: {
    questions: [
      { lesson: 'bai-1', type: 'tf', q: 'Khẳng định sau đúng hay sai: Máy giặt tự động có gắn bộ xử lí thông tin.', answer: true, explain: 'Đúng.' },
      { lesson: 'bai-2', type: 'mcq', q: 'Dùng dự báo thời tiết của tuần trước vi phạm tiêu chí chất lượng nào?', options: ['Cập nhật', 'Phù hợp', 'Đầy đủ', 'Chính xác'], answer: 0, explain: 'Thông tin cũ.' },
      { lesson: 'bai-3', type: 'short', q: 'Một nguồn được 2, 1, 2, 2 điểm theo bốn tiêu chí. Tổng điểm?', answer: '7', calc: '2+1+2+2', explain: '7.' },
      { lesson: 'bai-4', type: 'tf', q: 'Khẳng định sau đúng hay sai: Công khai thông tin cá nhân của người khác khi chưa được phép là vi phạm.', answer: true, explain: 'Đúng.' },
      { lesson: 'bai-5', type: 'mcq', q: 'Hạn chế của phần mềm mô phỏng là:', options: ['chỉ gần đúng với thực tế', 'nguy hiểm', 'tốn hoá chất', 'không lặp lại được'], answer: 0, explain: 'Mô hình đơn giản hoá.' },
      { lesson: 'bai-6', type: 'short', q: 'Ba lần đo chu kì: 2,1 s; 1,9 s; 2,0 s. Chu kì trung bình (s)?', answer: '2', unit: 's', calc: '(2.1+1.9+2.0)/3', explain: '2.' },
      { lesson: 'bai-7', type: 'mcq', q: 'Trình bày các bước của một quy trình nên dùng:', options: ['sơ đồ khối', 'biểu đồ hình tròn', 'biểu đồ cột', 'bảng số'], answer: 0, explain: 'Sơ đồ khối.' },
      { lesson: 'bai-8', type: 'mcq', q: 'Quyền cho phép xem và bình luận nhưng không sửa:', options: ['Người nhận xét', 'Người chỉnh sửa', 'Chủ sở hữu', 'Người xem'], answer: 0, explain: 'Người nhận xét.' },
      { lesson: 'bai-10a', type: 'short', q: 'Vùng chứa 6, 9, 8, 4, 10. Kết quả =COUNTIF(vùng,">=8")?', answer: '3', calc: '3', explain: '9, 8, 10.' },
      { lesson: 'bai-12a', type: 'mcq', q: '=IF(A1>=5,"Đạt","Chưa đạt") với A1 = 4,5 cho:', options: ['Chưa đạt', 'Đạt', 'Lỗi', '4,5'], answer: 0, explain: '4,5 < 5.' },
      { lesson: 'bai-11a', type: 'short', q: 'Vùng chứa 150, 40, 300, 60. Kết quả =SUMIF(vùng,">=100")?', answer: '450', calc: '150+300', explain: '450.' },
      { lesson: 'bai-9b', type: 'short', q: 'Video 25 khung hình/giây dài 8 giây có bao nhiêu khung hình?', answer: '200', unit: 'khung hình', calc: '25*8', explain: '200.' },
      { lesson: 'bai-13b', type: 'short', q: 'Video 60 giây, tốc độ bit 8 Mbps. Dung lượng khoảng bao nhiêu MB?', answer: '60', unit: 'MB', calc: '8*60/8', explain: '480 Mb = 60 MB.' },
      { lesson: 'bai-15', type: 'tf', q: 'Khẳng định sau đúng hay sai: Chương trình con chỉ được gọi một lần.', answer: false, explain: 'Gọi được nhiều lần.' },
      { lesson: 'bai-17', type: 'mcq', q: 'Công việc phát hiện, ngăn chặn tấn công mạng thuộc nhóm nghề:', options: ['An toàn thông tin', 'Thiết kế số', 'Kế toán', 'Du lịch'], answer: 0, explain: 'An toàn thông tin.' }
    ]
  }
});
