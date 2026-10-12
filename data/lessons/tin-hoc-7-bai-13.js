/* Tin học 7 – Bài 13. Thực hành tổng hợp: Hoàn thiện bài trình chiếu. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-7/bai-13', {
  objectives: [
    'Thực hiện được quy trình tạo bài trình chiếu: xác định mục đích – lập dàn ý – soạn nội dung – định dạng – kiểm tra – trình bày.',
    'Kết hợp được văn bản, hình ảnh, bảng biểu, hiệu ứng trong một bài trình chiếu hoàn chỉnh.',
    'Tự đánh giá được bài trình chiếu theo tiêu chí; ghi nguồn tư liệu đúng cách.'
  ],
  intro: 'Đã biết tạo trang, chèn ảnh, thêm hiệu ứng – giờ là lúc ghép tất cả thành một sản phẩm hoàn chỉnh, sẵn sàng thuyết trình trước lớp.',
  steps: [
    { title: 'Quy trình làm bài trình chiếu', html: `<p>Làm theo từng bước giúp bài chặt chẽ và tiết kiệm thời gian.</p>`,
      svg: S.flow({ items: ['Mục đích, người nghe', 'Lập dàn ý', 'Soạn nội dung', 'Định dạng, hiệu ứng', 'Kiểm tra, tập nói'], size: 12, label: 'Quy trình 5 bước' }), caption: 'Quy trình tạo bài trình chiếu.' },
    { title: 'Ví dụ: “Danh lam thắng cảnh quê em”', html: `<p>Dàn ý gợi ý: (1) Trang tiêu đề; (2) Giới thiệu chung; (3) Cảnh đẹp nổi bật (ảnh + 3 ý ngắn); (4) Hoạt động du lịch, bảo tồn; (5) Kết và nguồn tham khảo.</p>`,
      svg: S.slide({ title: 'Cảnh đẹp nổi bật', bullets: ['Hồ nước trong xanh', 'Rừng thông bốn mùa', 'Lễ hội mùa xuân'], layout: 'image', note: 'Trang nội dung kết hợp chữ ngắn gọn và hình ảnh' }), caption: 'Mỗi trang một ý chính, có ảnh minh hoạ.' },
    { title: 'Tiêu chí đánh giá', html: `<p>Nhóm có thể tự chấm theo bảng tiêu chí dưới (thang điểm minh hoạ).</p>`,
      svg: S.table({ title: 'Bảng tiêu chí (thang điểm minh hoạ, tổng 10)', head: ['Tiêu chí', 'Điểm'], rows: [['Nội dung đúng, đủ, có nguồn', '4'], ['Bố cục rõ, phân cấp hợp lí', '2'], ['Hình ảnh, định dạng đẹp, dễ đọc', '2'], ['Hiệu ứng vừa phải; trình bày tự tin', '2']], colW: 260 }), caption: 'Tiêu chí giúp tự đánh giá sản phẩm.' },
    { title: 'Ghi nguồn và kiểm tra lần cuối', html: `<ul><li>Ghi nguồn ảnh, tư liệu ở trang kết (tên trang web/sách, tác giả nếu có).</li><li>Kiểm tra chính tả, cỡ chữ, ảnh không bị méo.</li><li>Tập nói theo thời gian quy định.</li></ul>
      <div class="box key">Bài trình chiếu hỗ trợ người nói, không thay cho người nói.</div>` }
  ],
  summary: 'Quy trình: xác định mục đích – lập dàn ý – soạn nội dung – định dạng, hiệu ứng – kiểm tra, tập nói. Bài hoàn chỉnh kết hợp chữ ngắn gọn, ảnh, bảng, hiệu ứng vừa phải; có trang kết ghi nguồn; tự đánh giá theo tiêu chí.',
  examples: [
    { title: 'Chấm theo tiêu chí', problem: 'Nhóm A được 3/4 nội dung, 2/2 bố cục, 1/2 hình ảnh, 2/2 trình bày. Tổng điểm?', solution: '3 + 2 + 1 + 2 = 8 điểm.' },
    { title: 'Phân công', problem: 'Nhóm 4 bạn làm bài 10 trang (gồm trang tiêu đề và trang kết). Chia thế nào?', solution: 'Ví dụ: mỗi bạn soạn 2 trang nội dung (8 trang), một bạn thêm trang tiêu đề, một bạn trang kết; cả nhóm thống nhất mẫu Design.' },
    { title: 'Sửa lỗi', problem: 'Một trang có 12 dòng chữ cỡ 16. Góp ý sửa.', solution: 'Rút gọn còn 3–5 ý chính, tăng cỡ chữ khoảng 24–28, tách thành 2 trang nếu cần.' }
  ],
  exercises: [
    { question: 'Lập dàn ý 5 trang cho bài “An toàn khi dùng mạng xã hội”.', hints: ['Trang đầu và trang cuối là gì?', '3 trang giữa có thể là lợi ích, nguy cơ, lời khuyên.'], solution: 'Tiêu đề; lợi ích; nguy cơ; lời khuyên an toàn; kết và nguồn tham khảo.' },
    { question: 'Thuyết trình tối đa 7 phút, có 1 phút giới thiệu và 1 phút kết. Có 5 trang nội dung, mỗi trang trung bình bao nhiêu phút?', hints: ['Thời gian cho nội dung = 7 − 2.', 'Chia cho 5.'], solution: '5 : 5 = 1 phút mỗi trang.' },
    { question: 'Vì sao phải ghi nguồn tư liệu?', hints: ['Tôn trọng ai?', 'Giúp người xem làm gì?'], solution: 'Tôn trọng tác giả, bản quyền; giúp người xem kiểm chứng thông tin.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nên lập dàn ý trước khi soạn các trang chiếu.', answer: true, explain: 'Giúp bài chặt chẽ.' },
    { type: 'mcq', q: 'Trang kết thường có:', options: ['tóm tắt, cảm ơn, nguồn tham khảo', 'mật khẩu', 'toàn bộ nội dung', 'chỉ hiệu ứng'], answer: 0, explain: 'Đúng.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Người thuyết trình nên đọc nguyên văn mọi chữ trên trang chiếu.', answer: false, explain: 'Trang chiếu chỉ hỗ trợ.' },
    { type: 'short', q: 'Điểm thành phần 4, 2, 1, 2. Tổng điểm?', answer: '9', unit: 'điểm', calc: '4+2+1+2', explain: '9.' },
    { type: 'mcq', q: 'Bước nào nên làm cuối cùng trước khi trình bày?', options: ['Kiểm tra, tập nói', 'Chọn đề tài', 'Lập dàn ý', 'Tìm tư liệu'], answer: 0, explain: 'Kiểm tra và tập nói.' },
    { type: 'short', q: 'Thuyết trình 6 phút cho 4 trang nội dung đều nhau. Mỗi trang bao nhiêu phút?', answer: '1.5', answerText: '1,5', unit: 'phút', calc: '6/4', explain: '6 : 4 = 1,5.' },
    { type: 'mcq', q: 'Trang có quá nhiều chữ, nên:', options: ['giảm cỡ chữ', 'rút gọn ý, tách trang', 'thêm hiệu ứng', 'đổi màu nền'], answer: 1, explain: 'Rút gọn, tách trang.' },
    { type: 'short', q: 'Nhóm 5 bạn làm 12 trang, trong đó 2 trang chung. Mỗi bạn soạn bao nhiêu trang còn lại (chia đều)?', answer: '2', unit: 'trang', calc: '(12-2)/5', explain: '10 : 5.' }
  ]
});
})();
