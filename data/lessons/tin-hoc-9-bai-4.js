/* Tin học 9 – Bài 4. Một số vấn đề pháp lí về sử dụng dịch vụ Internet. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-9/bai-4', {
  objectives: [
    'Nêu được một số nội dung pháp lí cơ bản liên quan đến sử dụng dịch vụ Internet ở Việt Nam.',
    'Nhận biết được một số hành vi vi phạm pháp luật trên không gian mạng và hậu quả.',
    'Có ý thức tuân thủ pháp luật, bảo vệ thông tin cá nhân của mình và người khác.'
  ],
  intro: 'Không gian mạng không phải “vùng ngoài vòng pháp luật”. Đăng tin sai sự thật, phát tán ảnh người khác, chiếm đoạt tài khoản… đều có thể bị xử lí theo pháp luật.',
  steps: [
    { title: 'Một số văn bản pháp luật', html: `<p>Ở Việt Nam, việc sử dụng Internet được điều chỉnh bởi nhiều văn bản, ví dụ:</p>`,
      svg: S.table({ title: 'Một số văn bản pháp luật liên quan', head: ['Văn bản', 'Nội dung chính (tóm tắt)'], rows: [['Luật An ninh mạng (2018)', 'An ninh mạng; hành vi bị cấm'], ['Luật Sở hữu trí tuệ', 'Bảo hộ quyền tác giả'], ['Bộ luật Hình sự (2015)', 'Tội phạm lĩnh vực CNTT, viễn thông'], ['Nghị định 13/2023/NĐ-CP', 'Bảo vệ dữ liệu cá nhân']], colW: 250 }), caption: 'Danh sách nêu ví dụ, không đầy đủ.' },
    { title: 'Hành vi vi phạm thường gặp', html: `<ul><li>Đăng, chia sẻ thông tin sai sự thật, xúc phạm danh dự người khác.</li><li>Thu thập, mua bán, công khai thông tin cá nhân của người khác khi chưa được phép.</li><li>Truy cập trái phép, chiếm đoạt tài khoản, phát tán phần mềm độc hại.</li><li>Vi phạm bản quyền: phát tán phim, nhạc, phần mềm lậu.</li><li>Lừa đảo chiếm đoạt tài sản qua mạng.</li></ul>` },
    { title: 'Hậu quả', html: `<p>Tuỳ mức độ, người vi phạm có thể bị <b>xử phạt hành chính</b>, phải <b>bồi thường</b> thiệt hại, hoặc bị <b>truy cứu trách nhiệm hình sự</b>. Người bị hại chịu tổn thất về tinh thần, tài sản, danh dự.</p>`,
      svg: S.flow({ items: ['Hành vi vi phạm', 'Xác minh, xử lí', 'Phạt hành chính / bồi thường / hình sự'], size: 13, label: 'Vi phạm trên mạng có thể bị xử lí' }), caption: 'Hành vi trên mạng để lại dấu vết và có thể bị xử lí.' },
    { title: 'Tuân thủ và tự bảo vệ', html: `<p>Đọc điều khoản dịch vụ; không chia sẻ thông tin cá nhân của người khác; kiểm chứng trước khi đăng; dùng phần mềm hợp pháp; khi bị xâm phạm, lưu bằng chứng và báo người lớn, cơ quan chức năng.</p>
      <div class="box key">Điều gì trái pháp luật ngoài đời thì cũng trái pháp luật trên mạng.</div>` }
  ],
  summary: 'Việc dùng Internet ở Việt Nam được điều chỉnh bởi Luật An ninh mạng (2018), Luật Sở hữu trí tuệ, Bộ luật Hình sự (2015), quy định bảo vệ dữ liệu cá nhân (Nghị định 13/2023/NĐ-CP)… Các vi phạm thường gặp: tin sai sự thật, xâm phạm thông tin cá nhân, truy cập trái phép, vi phạm bản quyền, lừa đảo; có thể bị xử phạt hành chính, bồi thường hoặc truy cứu hình sự.',
  examples: [
    { title: 'Nhận diện vi phạm', problem: 'Bạn T đăng danh sách số điện thoại, địa chỉ của cả lớp lên một nhóm công khai. Vi phạm gì?', solution: 'Công khai thông tin cá nhân của người khác khi chưa được phép.' },
    { title: 'Tin sai sự thật', problem: 'Chia sẻ tin “cửa hàng X bán thực phẩm bẩn” khi không có bằng chứng có thể dẫn tới hậu quả gì?', solution: 'Xâm phạm uy tín người khác, có thể bị xử phạt và phải bồi thường.' },
    { title: 'Tính khoảng thời gian', problem: 'Luật An ninh mạng được thông qua năm 2018. Đến năm 2026 là bao nhiêu năm?', solution: '8 năm.' }
  ],
  exercises: [
    { question: 'Nêu ba hành vi vi phạm pháp luật trên không gian mạng.', hints: ['Về thông tin sai, thông tin cá nhân.', 'Về tài khoản, bản quyền.'], solution: 'Đăng tin sai sự thật; công khai thông tin cá nhân người khác; chiếm đoạt tài khoản (hoặc phát tán phần mềm lậu).' },
    { question: 'Em phát hiện tài khoản mạng xã hội của mình bị người khác đăng nhập. Em làm gì?', hints: ['Bảo vệ tài khoản ngay.', 'Báo cho ai?'], solution: 'Đổi mật khẩu, bật xác thực hai lớp, đăng xuất khỏi các thiết bị lạ, báo bố mẹ và nhà cung cấp dịch vụ; lưu bằng chứng.' },
    { question: 'Một bài viết sai sự thật được chia sẻ 120 lần; mỗi lượt chia sẻ đến trung bình 50 người. Ước tính có bao nhiêu lượt tiếp cận?', hints: ['Nhân hai số.', '120 × 50.'], solution: '6 000 lượt – cho thấy tác hại lan rất rộng.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Luật An ninh mạng của Việt Nam được ban hành năm 2018.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Hành vi nào vi phạm pháp luật?', options: ['Đổi mật khẩu định kì', 'Chiếm đoạt tài khoản người khác', 'Đọc điều khoản dịch vụ', 'Ghi nguồn khi trích dẫn'], answer: 1, explain: 'Truy cập trái phép.' },
    { type: 'mcq', q: 'Văn bản bảo hộ quyền tác giả:', options: ['Luật Sở hữu trí tuệ', 'Luật Đất đai', 'Luật Giao thông', 'Luật Thuế'], answer: 0, explain: 'Luật SHTT.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hành vi trên mạng không để lại dấu vết nên không bị xử lí.', answer: false, explain: 'Có dấu vết, có thể bị xử lí.' },
    { type: 'short', q: 'Từ năm 2015 (Bộ luật Hình sự) đến năm 2026 là bao nhiêu năm?', answer: '11', unit: 'năm', calc: '2026-2015', explain: '11.' },
    { type: 'short', q: 'Bài sai sự thật được chia sẻ 80 lần, mỗi lần tiếp cận 40 người. Tổng lượt tiếp cận?', answer: '3200', answerText: '3 200', unit: 'lượt', calc: '80*40', explain: '3 200.' },
    { type: 'mcq', q: 'Khi bị xâm phạm trên mạng, nên:', options: ['lưu bằng chứng, báo người lớn', 'trả đũa', 'xoá hết tài khoản ngay', 'im lặng chịu đựng'], answer: 0, explain: 'Lưu bằng chứng, báo người lớn.' },
    { type: 'mcq', q: 'Nghị định 13/2023/NĐ-CP liên quan đến:', options: ['bảo vệ dữ liệu cá nhân', 'thuế đất', 'giao thông', 'xây dựng'], answer: 0, explain: 'Dữ liệu cá nhân.' }
  ]
});
})();
