/* Tin học 9 – Bài 2. Thông tin trong giải quyết vấn đề. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-9/bai-2', {
  objectives: [
    'Giải thích được vai trò của thông tin trong việc giải quyết vấn đề, ra quyết định.',
    'Nêu được các tiêu chí đánh giá chất lượng thông tin: chính xác, đầy đủ, cập nhật, phù hợp (liên quan).',
    'Nhận biết được hậu quả của việc dùng thông tin kém chất lượng.'
  ],
  intro: 'Lớp em định đi dã ngoại vào thứ Bảy. Cần biết dự báo thời tiết, giá vé, quãng đường… Thông tin đúng giúp quyết định đúng; thông tin sai có thể khiến cả lớp “mắc kẹt” giữa mưa.',
  steps: [
    { title: 'Thông tin giúp giải quyết vấn đề', html: `<p>Giải quyết vấn đề cần thông tin ở mọi bước: hiểu vấn đề, tìm giải pháp, chọn giải pháp tốt nhất, đánh giá kết quả.</p>`,
      svg: S.flow({ items: ['Xác định vấn đề', 'Thu thập thông tin', 'Đề xuất giải pháp', 'Chọn và thực hiện', 'Đánh giá'], size: 12, label: 'Thông tin cần ở mọi bước' }), caption: 'Thông tin là “nguyên liệu” của quyết định.' },
    { title: 'Tiêu chí chất lượng thông tin', html: `<p>Thông tin có chất lượng cần:</p>`,
      svg: S.table({ title: 'Bốn tiêu chí chất lượng thông tin', head: ['Tiêu chí', 'Ý nghĩa', 'Ví dụ vi phạm'], rows: [['Chính xác', 'Đúng sự thật', 'Số liệu bị sai'], ['Đầy đủ', 'Đủ để quyết định', 'Thiếu giá vé'], ['Cập nhật', 'Còn đúng ở thời điểm dùng', 'Dự báo của tuần trước'], ['Phù hợp', 'Liên quan tới vấn đề', 'Thời tiết tỉnh khác']], colW: 190 }), caption: 'Thiếu một tiêu chí cũng có thể dẫn đến quyết định sai.' },
    { title: 'Hậu quả của thông tin kém chất lượng', html: `<p>Dùng thông tin sai, cũ, thiếu hoặc không liên quan dẫn tới quyết định sai: lãng phí tiền bạc, thời gian, thậm chí nguy hiểm (ví dụ uống thuốc theo lời khuyên không rõ nguồn).</p>` },
    { title: 'Ví dụ: chọn ngày dã ngoại', html: `<p>Thông tin cần: dự báo thời tiết mới nhất của đúng địa điểm, giá vé hiện hành, thời gian di chuyển, lịch học. Mỗi thông tin kiểm tra theo 4 tiêu chí rồi mới quyết định.</p>
      <div class="box key">Chính xác – Đầy đủ – Cập nhật – Phù hợp.</div>` }
  ],
  summary: 'Thông tin cần ở mọi bước giải quyết vấn đề. Thông tin có chất lượng phải chính xác, đầy đủ, cập nhật, phù hợp với vấn đề. Thông tin kém chất lượng dẫn tới quyết định sai, gây lãng phí hoặc nguy hiểm.',
  examples: [
    { title: 'Nhận diện tiêu chí', problem: 'Dùng bảng giá vé xe buýt của năm 2019 để tính chi phí năm nay. Vi phạm tiêu chí nào?', solution: 'Cập nhật.' },
    { title: 'Đầy đủ', problem: 'Chỉ biết giá vé vào cổng mà không biết giá vé xe. Có đủ để tính chi phí chuyến đi không?', solution: 'Không đầy đủ; cần thêm chi phí đi lại, ăn uống.' },
    { title: 'Tính chi phí', problem: 'Vé vào cổng 30 000 đồng, vé xe 45 000 đồng/người. Lớp 36 bạn cần bao nhiêu tiền?', solution: '(30 000 + 45 000) × 36 = 2 700 000 đồng.' }
  ],
  exercises: [
    { question: 'Nêu bốn tiêu chí đánh giá chất lượng thông tin, mỗi tiêu chí một ví dụ vi phạm.', hints: ['Đúng, đủ, mới, liên quan.', 'Ví dụ từ đời sống.'], solution: 'Chính xác (sai số liệu); đầy đủ (thiếu giá); cập nhật (dự báo cũ); phù hợp (thông tin nơi khác).' },
    { question: 'Vì sao không nên dùng thuốc theo bài đăng không rõ nguồn trên mạng?', hints: ['Tiêu chí chính xác.', 'Hậu quả với sức khoẻ.'], solution: 'Thông tin có thể sai, không phù hợp với từng người, gây nguy hiểm; cần hỏi bác sĩ.' },
    { question: 'Chuyến đi: vé 50 000 đồng/người, xe thuê trọn gói 3 600 000 đồng cho 40 người. Chi phí mỗi người?', hints: ['Chia tiền xe cho 40.', 'Cộng giá vé.'], solution: '90 000 + 50 000 = 140 000 đồng.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Thông tin cập nhật là thông tin còn đúng ở thời điểm sử dụng.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Dùng dự báo thời tiết của tỉnh khác cho chuyến đi vi phạm tiêu chí:', options: ['Chính xác', 'Phù hợp', 'Cập nhật', 'Đầy đủ'], answer: 1, explain: 'Không liên quan đúng địa điểm.' },
    { type: 'mcq', q: 'Tiêu chí “đầy đủ” nghĩa là:', options: ['đủ thông tin để ra quyết định', 'càng dài càng tốt', 'có nhiều hình ảnh', 'do nhiều người chia sẻ'], answer: 0, explain: 'Đủ để quyết định.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Thông tin cũ luôn dùng được cho quyết định hiện tại.', answer: false, explain: 'Cần cập nhật.' },
    { type: 'short', q: 'Vé 40 000 đồng, xe 60 000 đồng mỗi người. 30 bạn cần bao nhiêu đồng?', answer: '3000000', answerText: '3 000 000', unit: 'đồng', calc: '(40000+60000)*30', explain: '100 000 × 30.' },
    { type: 'short', q: 'Thuê xe 2 400 000 đồng cho 40 người. Mỗi người góp bao nhiêu đồng?', answer: '60000', answerText: '60 000', unit: 'đồng', calc: '2400000/40', explain: '60 000.' },
    { type: 'mcq', q: 'Bước nào cần thông tin?', options: ['Chỉ bước đầu', 'Chỉ bước cuối', 'Mọi bước giải quyết vấn đề', 'Không bước nào'], answer: 2, explain: 'Mọi bước.' },
    { type: 'mcq', q: 'Số liệu bị gõ nhầm vi phạm tiêu chí:', options: ['Chính xác', 'Phù hợp', 'Cập nhật', 'Đầy đủ'], answer: 0, explain: 'Chính xác.' }
  ]
});
})();
