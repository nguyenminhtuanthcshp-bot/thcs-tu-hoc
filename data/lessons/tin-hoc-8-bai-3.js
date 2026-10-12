/* Tin học 8 – Bài 3. Thực hành: Khai thác thông tin số. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-8/bai-3', {
  objectives: [
    'Sử dụng được máy tìm kiếm với từ khoá phù hợp để tìm thông tin phục vụ một nhiệm vụ cụ thể.',
    'Đánh giá, chọn lọc được thông tin từ nhiều nguồn; ghi lại nguồn tham khảo.',
    'Tổng hợp được thông tin thành sản phẩm học tập (bảng, sơ đồ, bài viết ngắn).'
  ],
  intro: 'Nhóm em cần giới thiệu “Năng lượng tái tạo ở Việt Nam”. Gõ một câu hỏi vào máy tìm kiếm, em nhận về hàng triệu kết quả. Làm sao chọn được thông tin đúng, đủ, đáng tin?',
  steps: [
    { title: 'Quy trình khai thác thông tin', html: `<p>Làm theo quy trình giúp tiết kiệm thời gian và tránh thông tin sai.</p>`,
      svg: S.flow({ items: ['Xác định câu hỏi', 'Chọn từ khoá', 'Tìm kiếm', 'Đánh giá, chọn lọc', 'Tổng hợp, ghi nguồn'], size: 12, label: 'Quy trình 5 bước' }), caption: 'Khai thác thông tin số theo 5 bước.' },
    { title: 'Chọn từ khoá hiệu quả', html: `<ul><li>Dùng từ khoá ngắn, cụ thể: “điện mặt trời Việt Nam” thay cho cả câu dài.</li><li>Dùng dấu ngoặc kép để tìm cụm từ chính xác: <code>"năng lượng tái tạo"</code>.</li><li>Thêm từ thu hẹp: năm, địa danh, loại tài liệu.</li></ul>`,
      svg: S.searchBox({ query: '"năng lượng tái tạo" Việt Nam', results: [['Năng lượng tái tạo ở Việt Nam – tổng quan', 'https://…/nang-luong-tai-tao', 'Điện mặt trời, điện gió, thuỷ điện nhỏ…'], ['Tiềm năng điện gió ven biển', 'https://…/dien-gio', 'Các vùng có tốc độ gió phù hợp…']] }), caption: 'Dùng cụm từ chính xác trong dấu ngoặc kép.' },
    { title: 'Đánh giá và chọn lọc', html: `<p>Ưu tiên trang của cơ quan nhà nước, tổ chức khoa học, báo chí chính thống, sách giáo khoa. Kiểm tra ngày đăng và đối chiếu số liệu giữa các nguồn.</p>` },
    { title: 'Tổng hợp và ghi nguồn', html: `<p>Ghi lại thông tin vào bảng hoặc sơ đồ tư duy, kèm tên nguồn và ngày truy cập. Diễn đạt lại bằng lời của mình, không sao chép nguyên văn.</p>`,
      svg: S.table({ title: 'Phiếu ghi chép (ví dụ mẫu)', head: ['Ý chính', 'Nguồn', 'Ngày truy cập'], rows: [['Các loại năng lượng tái tạo', 'Sách giáo khoa KHTN', '—'], ['Tiềm năng điện gió ven biển', 'Trang tin chính thống', '12/10'], ['Lợi ích với môi trường', 'Trang tổ chức khoa học', '12/10']], colW: 200 }), caption: 'Ghi nguồn giúp kiểm chứng và tôn trọng tác giả.' }
  ],
  summary: 'Khai thác thông tin số theo quy trình: xác định câu hỏi – chọn từ khoá – tìm kiếm – đánh giá, chọn lọc – tổng hợp, ghi nguồn. Từ khoá ngắn, cụ thể, dùng ngoặc kép cho cụm từ chính xác. Ưu tiên nguồn chính thống, đối chiếu, diễn đạt lại bằng lời của mình và ghi nguồn.',
  examples: [
    { title: 'Chọn từ khoá', problem: 'Câu hỏi: “Ở Việt Nam, những tỉnh nào có nhiều nhà máy điện gió?”. Đề xuất từ khoá.', solution: '“điện gió” Việt Nam tỉnh (có thể thêm năm cần tìm).' },
    { title: 'Chọn nguồn', problem: 'Trong 3 kết quả: blog cá nhân không tên tác giả, trang báo chính thống, trang quảng cáo bán pin mặt trời – chọn nguồn nào trước?', solution: 'Trang báo chính thống; sau đó đối chiếu thêm nguồn khác.' },
    { title: 'Ghi nguồn', problem: 'Vì sao cần ghi ngày truy cập trang web?', solution: 'Nội dung trang web có thể thay đổi; ngày truy cập cho biết thông tin được lấy vào lúc nào.' }
  ],
  exercises: [
    { question: 'Viết hai từ khoá để tìm thông tin về “cách phân loại rác tại nguồn”.', hints: ['Rút gọn câu thành cụm danh từ.', 'Có thể dùng ngoặc kép.'], solution: 'Ví dụ: "phân loại rác tại nguồn"; phân loại rác hướng dẫn hộ gia đình.' },
    { question: 'Nêu ba tiêu chí em dùng để chọn một trang web làm nguồn tham khảo.', hints: ['Ai viết, ở đâu?', 'Khi nào, có bằng chứng không?'], solution: 'Tác giả/cơ quan rõ ràng; thông tin còn cập nhật; có bằng chứng, nguồn dẫn và khớp với nguồn khác.' },
    { question: 'Nhóm tìm được 24 kết quả, loại bỏ 3/4 vì không đáng tin hoặc không liên quan. Còn lại bao nhiêu nguồn?', hints: ['Tính 3/4 của 24.', 'Lấy 24 trừ đi.'], solution: '24 − 18 = 6 nguồn.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Đặt cụm từ trong dấu ngoặc kép giúp tìm chính xác cụm từ đó.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Bước đầu tiên khi khai thác thông tin là:', options: ['Tìm kiếm ngay', 'Xác định câu hỏi cần trả lời', 'Sao chép bài viết', 'Ghi nguồn'], answer: 1, explain: 'Xác định câu hỏi.' },
    { type: 'mcq', q: 'Từ khoá nào hiệu quả hơn để tìm thông tin về điện mặt trời ở Việt Nam?', options: ['cho tôi hỏi về cái điện mặt trời ở nước mình thế nào', 'điện mặt trời Việt Nam', 'điện', 'năng lượng'], answer: 1, explain: 'Ngắn gọn, cụ thể.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Có thể sao chép nguyên văn bài viết trên mạng làm bài của mình mà không cần ghi nguồn.', answer: false, explain: 'Phải diễn đạt lại và ghi nguồn.' },
    { type: 'short', q: 'Tìm được 30 kết quả, giữ lại 1/5 số đó. Giữ lại bao nhiêu kết quả?', answer: '6', unit: 'kết quả', calc: '30/5', explain: '30 : 5.' },
    { type: 'mcq', q: 'Vì sao cần đối chiếu nhiều nguồn?', options: ['Để bài dài hơn', 'Để kiểm chứng độ chính xác', 'Để tốn thời gian', 'Không cần thiết'], answer: 1, explain: 'Kiểm chứng.' },
    { type: 'short', q: 'Mỗi bạn trong nhóm 4 người tìm 5 nguồn. Nhóm có tất cả bao nhiêu nguồn?', answer: '20', unit: 'nguồn', calc: '4*5', explain: '20.' },
    { type: 'mcq', q: 'Thông tin nên được ghi lại kèm:', options: ['nguồn và ngày truy cập', 'số lượt thích', 'màu chữ', 'ảnh đại diện tác giả'], answer: 0, explain: 'Nguồn, ngày truy cập.' }
  ]
});
})();
