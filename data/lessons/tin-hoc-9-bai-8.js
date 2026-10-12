/* Tin học 9 – Bài 8. Thực hành: Sử dụng công cụ trực quan trình bày thông tin trong trao đổi và hợp tác. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-9/bai-8', {
  objectives: [
    'Sử dụng được công cụ trực tuyến để cùng soạn thảo, cùng tạo sơ đồ, trang chiếu với các bạn.',
    'Biết chia sẻ tệp với quyền phù hợp (xem, nhận xét, chỉnh sửa), dùng bình luận và lịch sử phiên bản.',
    'Tạo được một sản phẩm trình bày trực quan theo nhóm (đồ hoạ thông tin hoặc trang chiếu).'
  ],
  intro: 'Bốn bạn ở bốn nhà vẫn có thể cùng làm một bài trình chiếu cùng lúc. <b>Công cụ cộng tác trực tuyến</b> cho phép cả nhóm cùng soạn, góp ý và theo dõi thay đổi.',
  steps: [
    { title: 'Công cụ cộng tác trực tuyến', html: `<p>Ví dụ: bộ văn phòng trực tuyến (tài liệu, bảng tính, trang chiếu dùng chung), công cụ vẽ sơ đồ, thiết kế đồ hoạ trực tuyến, bảng trắng trực tuyến. Tệp lưu trên đám mây, nhiều người mở và sửa cùng lúc.</p>` },
    { title: 'Chia sẻ và phân quyền', html: `<p>Khi chia sẻ, chọn quyền phù hợp:</p>`,
      svg: S.table({ title: 'Các mức quyền khi chia sẻ', head: ['Quyền', 'Được làm gì', 'Dùng khi'], rows: [['Người xem', 'Chỉ xem', 'Công bố sản phẩm cho lớp'], ['Người nhận xét', 'Xem, bình luận', 'Thầy cô góp ý'], ['Người chỉnh sửa', 'Xem, sửa nội dung', 'Thành viên trong nhóm']], colW: 190 }), caption: 'Chỉ cấp quyền sửa cho người cần sửa.' },
    { title: 'Bình luận và lịch sử phiên bản', html: `<p>Dùng <b>bình luận</b> để góp ý mà không sửa trực tiếp; <b>lịch sử phiên bản</b> cho biết ai sửa gì, lúc nào và cho phép khôi phục bản cũ khi sửa nhầm.</p>`,
      svg: S.flow({ items: ['Tạo tệp chung', 'Chia sẻ, phân quyền', 'Cùng soạn, bình luận', 'Xem lịch sử, chỉnh sửa', 'Hoàn thiện, công bố'], size: 12, label: 'Quy trình làm việc nhóm trực tuyến' }), caption: 'Làm việc nhóm trực tuyến theo các bước.' },
    { title: 'Sản phẩm nhóm và quy tắc', html: `<p>Ví dụ: đồ hoạ thông tin “Tiết kiệm điện ở trường” gồm số liệu khảo sát (biểu đồ), các mẹo (biểu tượng + từ khoá), nguồn số liệu. Quy tắc: sửa phần mình phụ trách, góp ý lịch sự, không xoá nội dung của bạn khi chưa trao đổi.</p>
      <div class="box key">Chia sẻ đúng quyền; góp ý bằng bình luận; lịch sử phiên bản để khôi phục.</div>` }
  ],
  summary: 'Công cụ cộng tác trực tuyến cho phép nhiều người cùng soạn tài liệu, bảng tính, trang chiếu, sơ đồ. Chia sẻ với quyền xem, nhận xét hoặc chỉnh sửa phù hợp; góp ý bằng bình luận; dùng lịch sử phiên bản để theo dõi, khôi phục. Làm việc có phân công, tôn trọng phần việc của nhau.',
  examples: [
    { title: 'Chọn quyền', problem: 'Gửi sản phẩm cho cô giáo để cô góp ý nhưng không sửa trực tiếp. Chọn quyền nào?', solution: 'Người nhận xét.' },
    { title: 'Khôi phục', problem: 'Một bạn lỡ xoá mất trang 3 của bài trình chiếu chung. Làm sao lấy lại?', solution: 'Mở lịch sử phiên bản, chọn phiên bản trước khi xoá để khôi phục (hoặc sao chép lại trang 3).' },
    { title: 'Phân công', problem: 'Bài 12 trang, nhóm 4 bạn chia đều. Mỗi bạn bao nhiêu trang?', solution: '3 trang.' }
  ],
  exercises: [
    { question: 'Nêu ba lợi ích của công cụ cộng tác trực tuyến.', hints: ['Về thời gian, địa điểm.', 'Về theo dõi thay đổi.'], solution: 'Làm cùng lúc từ nhiều nơi; luôn có bản mới nhất; xem lịch sử, khôi phục bản cũ; góp ý bằng bình luận.' },
    { question: 'Vì sao không nên chia sẻ quyền chỉnh sửa cho “bất kì ai có đường liên kết”?', hints: ['Ai có thể nhận được đường liên kết?', 'Họ có thể làm gì?'], solution: 'Người lạ có thể sửa, xoá nội dung hoặc chèn thông tin xấu; chỉ nên cấp quyền sửa cho thành viên nhóm.' },
    { question: 'Khảo sát số bóng đèn bật khi không có người: 3 lớp, mỗi lớp 6 bóng, mỗi bóng 40 W, bật thừa 2 giờ/ngày. Mỗi ngày lãng phí bao nhiêu kWh?', hints: ['Tổng công suất: 3 × 6 × 40 W.', 'Nhân 2 giờ, đổi ra kWh.'], solution: '720 W × 2 h = 1 440 Wh = 1,44 kWh.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Công cụ trực tuyến cho phép nhiều người cùng soạn một tài liệu.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Quyền cho phép xem và bình luận nhưng không sửa:', options: ['Người xem', 'Người nhận xét', 'Người chỉnh sửa', 'Chủ sở hữu'], answer: 1, explain: 'Người nhận xét.' },
    { type: 'mcq', q: 'Chức năng giúp khôi phục bản cũ khi sửa nhầm:', options: ['Lịch sử phiên bản', 'Bình luận', 'Phóng to', 'In'], answer: 0, explain: 'Lịch sử phiên bản.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Có thể tuỳ ý xoá phần việc của bạn khác trong tệp chung.', answer: false, explain: 'Cần trao đổi trước.' },
    { type: 'short', q: 'Bài 15 trang, nhóm 5 bạn chia đều. Mỗi bạn bao nhiêu trang?', answer: '3', unit: 'trang', calc: '15/5', explain: '3.' },
    { type: 'short', q: '10 bóng đèn 40 W bật thừa 3 giờ. Lãng phí bao nhiêu kWh?', answer: '1.2', answerText: '1,2', unit: 'kWh', calc: '10*40*3/1000', explain: '1 200 Wh = 1,2 kWh.' },
    { type: 'mcq', q: 'Góp ý cho bạn mà không sửa trực tiếp, nên dùng:', options: ['bình luận', 'xoá đoạn văn', 'đổi phông chữ', 'tải tệp về máy'], answer: 0, explain: 'Bình luận.' },
    { type: 'mcq', q: 'Tệp cộng tác trực tuyến thường được lưu:', options: ['trên đám mây', 'chỉ trong USB', 'trên giấy', 'trong máy in'], answer: 0, explain: 'Đám mây.' }
  ]
});
})();
