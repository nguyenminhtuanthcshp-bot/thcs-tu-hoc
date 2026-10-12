/* Tin học 7 – Bài 5. Ứng xử trên mạng. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-7/bai-5', {
  objectives: [
    'Nêu được ví dụ về hành vi có văn hoá và thiếu văn hoá khi giao tiếp qua mạng.',
    'Nhận biết được tin giả, lừa đảo, bắt nạt trên mạng và cách ứng xử phù hợp.',
    'Biết nhờ người lớn giúp đỡ và tránh các tác hại khi gặp tình huống xấu trên mạng.'
  ],
  intro: 'Một lời bình luận chê bai có thể làm bạn khác buồn nhiều ngày; một tin đồn chia sẻ vội có thể gây hoang mang cho cả trường. Ứng xử trên mạng cũng cần văn hoá như ngoài đời.',
  steps: [
    { title: 'Giao tiếp có văn hoá trên mạng', html: `<ul><li>Dùng lời lẽ lịch sự, tôn trọng người khác; không nói tục, xúc phạm.</li><li>Không đăng, chia sẻ ảnh, thông tin của người khác khi chưa được đồng ý.</li><li>Tôn trọng bản quyền: ghi nguồn khi dùng tác phẩm của người khác.</li></ul>
      <p>Pháp luật Việt Nam (ví dụ Luật An ninh mạng năm 2018) nghiêm cấm việc dùng không gian mạng để xúc phạm danh dự người khác, đưa tin sai sự thật.</p>` },
    { title: 'Nhận biết tin giả', html: `<p><b>Tin giả</b> là thông tin sai sự thật, thường giật gân, kêu gọi “chia sẻ ngay”. Trước khi tin và chia sẻ, hãy kiểm tra theo các bước:</p>`,
      svg: S.flowchart({ title: 'Có nên chia sẻ một tin?', steps: [{ t: 'start', s: 'Nhận một tin' }, { t: 'proc', s: 'Kiểm tra nguồn, ngày đăng' }, { t: 'if', s: 'Nguồn đáng tin cậy?', yes: 'Có thể chia sẻ, ghi nguồn', no: 'Không chia sẻ, báo cáo' }, { t: 'end', s: 'Kết thúc' }] }), caption: 'Chỉ chia sẻ khi nguồn tin đáng tin cậy.' },
    { title: 'Bắt nạt và lừa đảo trên mạng', html: `<p><b>Bắt nạt trên mạng</b>: chế giễu, đe doạ, tung ảnh xấu, cô lập người khác qua mạng. <b>Lừa đảo</b>: giả danh để xin mật khẩu, mã OTP, tiền; dụ nháy vào đường liên kết lạ, “trúng thưởng”.</p>`,
      svg: S.table({ title: 'Gặp tình huống xấu – nên làm gì?', head: ['Tình huống', 'Cách ứng xử'], rows: [['Bị nhắn tin đe doạ', 'Không đáp trả, lưu bằng chứng, báo người lớn'], ['Tin nhắn “trúng thưởng”', 'Không nháy liên kết, không gửi thông tin'], ['Bạn bị chế giễu', 'Không hùa theo, động viên bạn, báo thầy cô'], ['Người lạ xin mật khẩu', 'Từ chối, chặn, báo cáo tài khoản']], colW: 310 }), caption: 'Một số tình huống và cách ứng xử.' },
    { title: 'Bảo vệ bản thân', html: `<p>Đặt mật khẩu mạnh, không dùng chung; không hẹn gặp người chỉ quen qua mạng; dùng chức năng <b>chặn</b> và <b>báo cáo</b>; luôn chia sẻ với bố mẹ, thầy cô khi gặp chuyện khó.</p>
      <div class="box key">Dừng lại – Kiểm tra – Hỏi người lớn trước khi tin, chia sẻ hay trả lời.</div>` }
  ],
  summary: 'Ứng xử trên mạng cần lịch sự, tôn trọng, tôn trọng bản quyền, không chia sẻ thông tin người khác khi chưa được phép. Cần nhận biết tin giả (kiểm tra nguồn trước khi chia sẻ), bắt nạt và lừa đảo trên mạng; không đáp trả, lưu bằng chứng, chặn, báo cáo và nhờ người lớn giúp đỡ.',
  examples: [
    { title: 'Hành vi có văn hoá?', problem: 'Bạn A đăng ảnh chụp lén bạn B đang ngủ gật kèm lời chế giễu. Nhận xét hành vi này.', solution: 'Thiếu văn hoá, xâm phạm hình ảnh cá nhân và là bắt nạt trên mạng; cần gỡ ảnh và xin lỗi bạn B.' },
    { title: 'Tin giật gân', problem: 'Em nhận tin “Ngày mai trường nghỉ học, chia sẻ ngay!” từ một tài khoản lạ. Em làm gì?', solution: 'Không chia sẻ; kiểm tra thông báo chính thức của nhà trường hoặc hỏi thầy cô.' },
    { title: 'Lừa đảo', problem: 'Có người nhắn tự xưng là nhân viên ngân hàng, xin mã OTP của mẹ em. Em làm gì?', solution: 'Không cung cấp; báo ngay cho bố mẹ. Mã OTP không bao giờ được cho người khác.' }
  ],
  exercises: [
    { question: 'Nêu ba dấu hiệu thường gặp của tin giả.', hints: ['Tiêu đề thế nào?', 'Nguồn tin và lời kêu gọi thế nào?'], solution: 'Tiêu đề giật gân; nguồn không rõ ràng; kêu gọi chia sẻ gấp (hoặc không có thông tin kiểm chứng).' },
    { question: 'Khi thấy bạn bị chế giễu trong nhóm lớp, em nên làm gì?', hints: ['Có nên hùa theo không?', 'Nên báo cho ai?'], solution: 'Không hùa theo, nhắc nhở nhẹ nhàng, động viên bạn và báo thầy cô chủ nhiệm.' },
    { question: 'Một tin giả được chia sẻ: mỗi giờ số người chia sẻ gấp đôi. Giờ đầu có 3 người. Sau 4 giờ (ở giờ thứ 4) có bao nhiêu người chia sẻ trong giờ đó?', hints: ['Giờ 1: 3, giờ 2: 6…', '3 × 2 × 2 × 2.'], solution: '3 × 2³ = 24 người. Tin giả lan rất nhanh, vì vậy cần dừng lại ngay từ mình.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Cần kiểm tra nguồn tin trước khi chia sẻ.', answer: true, explain: 'Để tránh lan truyền tin giả.' },
    { type: 'mcq', q: 'Hành vi nào thể hiện văn hoá khi bình luận trên mạng?', options: ['Dùng từ ngữ thô tục', 'Góp ý lịch sự, tôn trọng', 'Chế giễu ngoại hình', 'Viết toàn chữ in hoa để quát'], answer: 1, explain: 'Góp ý lịch sự là có văn hoá.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Có thể cho người lạ mã OTP nếu họ nói là nhân viên ngân hàng.', answer: false, explain: 'Không bao giờ cung cấp mã OTP.' },
    { type: 'mcq', q: 'Khi bị nhắn tin đe doạ, em nên:', options: ['đáp trả gay gắt', 'xoá hết và im lặng', 'lưu bằng chứng và báo người lớn', 'chia sẻ lên mạng'], answer: 2, explain: 'Lưu bằng chứng, báo người lớn.' },
    { type: 'mcq', q: 'Dấu hiệu nào thường gặp ở tin lừa đảo?', options: ['Có nguồn chính thức', 'Hứa “trúng thưởng”, yêu cầu nháy liên kết lạ', 'Do thầy cô gửi trong lớp', 'Có ngày tháng rõ ràng'], answer: 1, explain: 'Dụ trúng thưởng là dấu hiệu lừa đảo.' },
    { type: 'short', q: 'Một tin giả: giờ đầu 2 người chia sẻ, mỗi giờ sau gấp 3 giờ trước. Ở giờ thứ 3 có bao nhiêu người chia sẻ?', answer: '18', unit: 'người', calc: '2*3*3', explain: '2 → 6 → 18.' },
    { type: 'short', q: 'Luật An ninh mạng của Việt Nam được thông qua năm nào?', answer: '2018', calc: '2018', explain: 'Luật An ninh mạng năm 2018.' },
    { type: 'mcq', q: 'Đăng ảnh của bạn khác lên mạng, em cần:', options: ['không cần hỏi ai', 'xin phép bạn đó trước', 'chỉnh sửa cho xấu đi', 'chờ bạn đi vắng'], answer: 1, explain: 'Tôn trọng quyền hình ảnh.' }
  ]
});
})();
