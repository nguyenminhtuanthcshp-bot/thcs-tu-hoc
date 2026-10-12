/* Tin học 9 – Bài 3. Thực hành: Đánh giá chất lượng thông tin. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-9/bai-3', {
  objectives: [
    'Đánh giá được chất lượng thông tin từ các nguồn khác nhau theo bốn tiêu chí.',
    'Sử dụng được bảng tiêu chí, chấm điểm để so sánh, chọn nguồn thông tin tốt nhất.',
    'Vận dụng thông tin đã đánh giá để đưa ra quyết định cho một tình huống thực tế.'
  ],
  intro: 'Nhóm em cần chọn một chiếc máy tính cũ cho phòng thư viện với ngân sách có hạn. Ba trang web đưa ra ba lời khuyên khác nhau. Hãy cùng <b>đánh giá chất lượng thông tin</b> trước khi quyết định.',
  steps: [
    { title: 'Lập bảng tiêu chí', html: `<p>Với mỗi nguồn, chấm điểm từ 0 đến 2 cho từng tiêu chí: chính xác, đầy đủ, cập nhật, phù hợp (tối đa 8 điểm).</p>`,
      svg: S.sheet({ title: 'Chấm điểm ba nguồn (ví dụ minh hoạ)', cols: ['A', 'B', 'C', 'D', 'E', 'F'], rows: [['Nguồn', 'Ch.xác', 'Đầy đủ', 'Cập nhật', 'Phù hợp', 'Tổng'], ['Trang hãng', 2, 2, 2, 1, 7], ['Diễn đàn', 1, 1, 2, 2, 6], ['Blog cũ', 1, 1, 0, 1, 3]], active: 'F2', formula: '=SUM(B2:E2)', colW: 90 }), caption: 'Dùng bảng tính để tổng hợp điểm.' },
    { title: 'Kiểm tra chính xác và cập nhật', html: `<p>Đối chiếu thông số với trang chính thức của nhà sản xuất; xem ngày đăng; bài viết quá cũ có thể không còn đúng về giá, phiên bản phần mềm.</p>` },
    { title: 'Kiểm tra đầy đủ và phù hợp', html: `<p>Thông tin có đủ các yếu tố cần cho quyết định (cấu hình, giá, bảo hành)? Có phù hợp với nhu cầu (dùng cho thư viện: tra cứu, soạn thảo) và ngân sách không?</p>`,
      svg: S.bar({ title: 'Tổng điểm chất lượng của ba nguồn (minh hoạ, tối đa 8)', cats: ['Trang hãng', 'Diễn đàn', 'Blog cũ'], series: [{ name: 'điểm', values: [7, 6, 3], color: '#0e7490' }], width: 480, height: 260 }), caption: 'Blog cũ có điểm thấp vì không cập nhật.' },
    { title: 'Ra quyết định và ghi nguồn', html: `<p>Kết hợp các nguồn điểm cao, ghi rõ nguồn và ngày truy cập trong báo cáo. Nếu các nguồn mâu thuẫn, ưu tiên nguồn chính thức và mới nhất.</p>
      <div class="box key">Chấm điểm theo tiêu chí giúp so sánh nguồn một cách khách quan.</div>` }
  ],
  summary: 'Đánh giá chất lượng thông tin bằng bảng tiêu chí (chính xác, đầy đủ, cập nhật, phù hợp), chấm điểm từng nguồn, tổng hợp bằng bảng tính và biểu đồ. Ưu tiên nguồn chính thức, mới nhất; ghi nguồn và ngày truy cập; dùng thông tin tốt nhất để quyết định.',
  examples: [
    { title: 'Tính tổng điểm', problem: 'Một nguồn được 2, 1, 2, 2 điểm. Tổng và tỉ lệ so với điểm tối đa 8?', solution: '7 điểm; 7 : 8 = 87,5%.' },
    { title: 'Mâu thuẫn', problem: 'Trang hãng ghi pin 10 giờ, diễn đàn nói pin 6 giờ. Xử lí thế nào?', solution: 'Trang hãng là thông số trong điều kiện thử nghiệm; diễn đàn là trải nghiệm thực tế. Ghi cả hai, ưu tiên kiểm chứng thêm bài đánh giá độc lập.' },
    { title: 'Nhận xét', problem: 'Vì sao “Blog cũ” bị 0 điểm cập nhật?', solution: 'Bài viết đã lâu, giá và cấu hình không còn đúng.' }
  ],
  exercises: [
    { question: 'Lập bảng tiêu chí đánh giá hai nguồn tin về “cách phòng chống sốt xuất huyết”.', hints: ['Bốn cột tiêu chí.', 'Nguồn nên có: trang cơ quan y tế, bài đăng cá nhân.'], solution: 'Ví dụ: trang cơ quan y tế 2-2-2-2 = 8; bài đăng cá nhân 1-1-1-2 = 5 → chọn trang cơ quan y tế.' },
    { question: 'Viết công thức tính tổng điểm ở F3 cho bảng ở bước 1.', hints: ['Các tiêu chí ở B3 đến E3.', 'Dùng hàm SUM.'], solution: '=SUM(B3:E3).' },
    { question: 'Ba nguồn đạt 7, 6, 3 điểm. Điểm trung bình (làm tròn 1 chữ số thập phân)?', hints: ['Cộng lại.', 'Chia 3.'], solution: '16 : 3 ≈ 5,3.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Có thể dùng bảng tính để tổng hợp điểm đánh giá các nguồn thông tin.', answer: true, explain: 'Đúng.' },
    { type: 'short', q: 'Nguồn được 2, 2, 1, 2 điểm. Tổng điểm?', answer: '7', calc: '2+2+1+2', explain: '7.' },
    { type: 'short', q: 'Nguồn đạt 6/8 điểm. Tỉ lệ phần trăm?', answer: '75', unit: '%', calc: '6/8*100', explain: '75%.' },
    { type: 'mcq', q: 'Khi các nguồn mâu thuẫn, nên ưu tiên:', options: ['nguồn chính thức, mới nhất', 'nguồn nhiều lượt thích', 'nguồn đầu tiên tìm thấy', 'nguồn dài nhất'], answer: 0, explain: 'Chính thức, cập nhật.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Bài viết cũ nhiều năm luôn đạt điểm cao ở tiêu chí cập nhật.', answer: false, explain: 'Ngược lại.' },
    { type: 'mcq', q: 'Công thức tính tổng điểm B2 đến E2:', options: ['=SUM(B2:E2)', '=B2:E2', 'SUM(B2;E2)', '=AVERAGE(B2:E2)'], answer: 0, explain: 'SUM.' },
    { type: 'short', q: 'Bốn nguồn đạt 8, 6, 5, 5 điểm. Điểm trung bình?', answer: '6', calc: '(8+6+5+5)/4', explain: '24 : 4.' },
    { type: 'mcq', q: 'Báo cáo cần ghi:', options: ['nguồn và ngày truy cập', 'chỉ tên người viết báo cáo', 'mật khẩu tài khoản', 'không cần gì'], answer: 0, explain: 'Nguồn, ngày truy cập.' }
  ]
});
})();
