/* Tin học 6 – Bài 9. An toàn thông tin trên Internet. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-6/bai-9', {
  objectives: [
    'Nêu được một số tác hại và nguy cơ khi sử dụng Internet.',
    'Nêu được một số quy tắc an toàn khi sử dụng Internet, bảo vệ thông tin cá nhân và tài khoản.',
    'Biết cách xử lí khi gặp tình huống không an toàn trên mạng (bắt nạt, lừa đảo, nội dung xấu).'
  ],
  intro: 'Internet giống như một thành phố lớn: có thư viện, trường học, khu vui chơi, nhưng cũng có những nơi nguy hiểm. Để “đi lại” an toàn trong thành phố đó, em cần biết các quy tắc an toàn thông tin.',
  steps: [
    { title: 'Một số nguy cơ trên Internet', html: `<ul><li>Bị lộ thông tin cá nhân, bị đánh cắp tài khoản.</li><li>Bị lừa đảo, dụ dỗ; bị bắt nạt trên mạng.</li><li>Máy tính nhiễm phần mềm độc hại (virus…) khi mở tệp, liên kết lạ.</li><li>Tiếp xúc nội dung xấu, tin giả; nghiện Internet, trò chơi trực tuyến.</li></ul>` },
    { title: 'Bảo vệ thông tin cá nhân và tài khoản', html: `<p>Thông tin cá nhân: họ tên, ngày sinh, địa chỉ, số điện thoại, ảnh, mật khẩu… Không chia sẻ những thông tin này với người lạ.</p>
      <p><b>Mật khẩu mạnh</b>: đủ dài (từ 8 kí tự trở lên), kết hợp chữ hoa, chữ thường, chữ số và kí hiệu; không dùng ngày sinh, tên; không dùng chung cho mọi tài khoản; giữ bí mật.</p>`,
      svg: S.table({ title: 'Ví dụ so sánh mật khẩu', head: ['Mật khẩu', 'Đánh giá', 'Lí do'], rows: [['12345678', 'Yếu', 'Dễ đoán'], ['an2012', 'Yếu', 'Tên + năm sinh'], ['Mua#He8Qua!', 'Mạnh', 'Dài, đủ loại kí tự']], colW: 170, note: 'Ví dụ minh hoạ – không dùng các mật khẩu này' }), caption: 'Mật khẩu mạnh dài và kết hợp nhiều loại kí tự.' },
    { title: 'Quy tắc ứng xử an toàn', html: `<p>Những điều nên làm khi dùng Internet:</p>`,
      svg: S.mindmap({ center: 'An toàn trên Internet', branches: [{ title: 'Giữ bí mật', items: ['Mật khẩu, thông tin cá nhân'] }, { title: 'Cẩn trọng', items: ['Không mở tệp, liên kết lạ'] }, { title: 'Không gặp', items: ['người quen qua mạng khi chưa hỏi bố mẹ'] }, { title: 'Báo ngay', items: ['cho người lớn khi bị đe doạ'] }], w: 640, size: 14 }), caption: 'Một số quy tắc an toàn khi sử dụng Internet.' },
    { title: 'Xử lí tình huống không an toàn', html: `<p>Khi bị bắt nạt, đe doạ hay gặp nội dung xấu: không đáp trả, lưu lại bằng chứng (chụp màn hình), chặn người gửi và <b>báo ngay cho bố mẹ, thầy cô</b>. Khi nghi ngờ bị lừa đảo, không chuyển tiền, không cung cấp mã xác nhận.</p>
      <div class="box key">Có thể gọi Tổng đài quốc gia bảo vệ trẻ em <b>111</b> (miễn phí) để được hỗ trợ.</div>` }
  ],
  summary: 'Internet có nguy cơ: lộ thông tin, lừa đảo, bắt nạt, phần mềm độc hại, nội dung xấu, nghiện mạng. Cần bảo vệ thông tin cá nhân, đặt mật khẩu mạnh và giữ bí mật, không mở tệp/liên kết lạ, không gặp người lạ quen qua mạng, báo cho người lớn khi gặp tình huống không an toàn.',
  examples: [
    { title: 'Đánh giá mật khẩu', problem: 'Mật khẩu “binh2012” có mạnh không? Vì sao?', solution: 'Không mạnh: ngắn, chỉ gồm tên và năm sinh, dễ đoán.' },
    { title: 'Xử lí tình huống', problem: 'Một tài khoản lạ nhắn tin trêu chọc, đe doạ em nhiều lần. Em nên làm gì?', solution: 'Không đáp trả; chụp màn hình lưu bằng chứng; chặn tài khoản; báo bố mẹ, thầy cô.' },
    { title: 'Nhận biết lừa đảo', problem: 'Tin nhắn: “Bạn trúng thưởng điện thoại, gửi mã xác nhận để nhận quà”. Đây là gì?', solution: 'Dấu hiệu lừa đảo. Không gửi mã, không bấm liên kết, báo người lớn.' }
  ],
  exercises: [
    { question: 'Kể ba loại thông tin cá nhân không nên chia sẻ với người lạ trên mạng.', hints: ['Những thông tin giúp người khác tìm ra em.', 'Những thông tin dùng để đăng nhập.'], solution: 'Địa chỉ nhà, số điện thoại, mật khẩu (hoặc ảnh cá nhân, tên trường, lịch đi lại).' },
    { question: 'Hãy tạo một quy tắc đặt mật khẩu mạnh cho bản thân (không ghi mật khẩu thật).', hints: ['Độ dài tối thiểu bao nhiêu kí tự?', 'Cần những loại kí tự nào?'], solution: 'Ví dụ: ít nhất 10 kí tự; có chữ hoa, chữ thường, chữ số và kí hiệu; không chứa tên, ngày sinh; mỗi tài khoản một mật khẩu riêng.' },
    { question: 'Một mật khẩu chỉ gồm 4 chữ số (0–9). Có tất cả bao nhiêu mật khẩu như vậy? Vì sao mật khẩu này yếu?', hints: ['Mỗi vị trí có 10 cách chọn.', '10 × 10 × 10 × 10.'], solution: '10 × 10 × 10 × 10 = 10 000 mật khẩu; máy tính thử hết rất nhanh nên mật khẩu yếu.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Không nên chia sẻ mật khẩu của mình cho người khác.', answer: true, explain: 'Mật khẩu phải giữ bí mật.' },
    { type: 'mcq', q: 'Mật khẩu nào mạnh nhất?', options: ['123456', 'nam2012', 'Hoc#Tin6!Vui', 'abcdef'], answer: 2, explain: 'Dài, có chữ hoa, thường, số, kí hiệu.' },
    { type: 'mcq', q: 'Khi bị bắt nạt trên mạng, em nên:', options: ['đáp trả gay gắt', 'giữ bí mật một mình', 'lưu bằng chứng và báo người lớn', 'xoá hết tài khoản của bạn khác'], answer: 2, explain: 'Lưu bằng chứng và báo bố mẹ, thầy cô.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Có thể hẹn gặp một người quen qua mạng mà không cần báo bố mẹ.', answer: false, explain: 'Rất nguy hiểm; phải hỏi ý kiến bố mẹ.' },
    { type: 'mcq', q: 'Tổng đài quốc gia bảo vệ trẻ em là:', options: ['113', '114', '111', '115'], answer: 2, explain: 'Tổng đài 111.' },
    { type: 'short', q: 'Mật khẩu gồm 3 chữ số (0–9). Có bao nhiêu mật khẩu khác nhau?', answer: '1000', answerText: '1 000', unit: 'mật khẩu', calc: '10*10*10', explain: '10 × 10 × 10 = 1 000.' },
    { type: 'mcq', q: 'Việc nào dễ làm máy tính nhiễm phần mềm độc hại?', options: ['Cập nhật phần mềm diệt virus', 'Mở tệp đính kèm từ người lạ', 'Đăng xuất sau khi dùng', 'Đặt mật khẩu mạnh'], answer: 1, explain: 'Tệp lạ có thể chứa mã độc.' },
    { type: 'short', q: 'Mật khẩu 8 kí tự, em thêm 4 kí tự nữa. Mật khẩu mới dài bao nhiêu kí tự?', answer: '12', unit: 'kí tự', calc: '8+4', explain: '8 + 4 = 12.' }
  ]
});
})();
