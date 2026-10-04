/* KHTN 9 – Bài 1. Nhận biết một số dụng cụ, hoá chất. Thuyết trình một vấn đề khoa học. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-9/bai-1', {
  objectives: [
    'Nhận biết được một số dụng cụ, thiết bị thí nghiệm về cơ, điện, quang, hoá học và sinh học ở lớp 9.',
    'Nhận biết được một số hoá chất thường dùng và cách sử dụng, bảo quản an toàn.',
    'Biết cách chuẩn bị và trình bày một bài thuyết trình về một vấn đề khoa học.'
  ],
  intro: 'Lớp 9 là năm cuối cấp: em sẽ làm thí nghiệm về ánh sáng, điện, kim loại, acid, base… và thường xuyên phải <b>trình bày kết quả</b> trước lớp. Bài mở đầu này giúp em chuẩn bị cả hai kĩ năng đó.',
  steps: [
    { title: 'Dụng cụ, thiết bị thường dùng', html: `<table class="tbl"><tr><th>Nhóm</th><th>Ví dụ</th></tr>
      <tr><td>Cơ học</td><td>Máng nghiêng, xe lăn, cổng quang điện, đồng hồ đo thời gian hiện số, lực kế</td></tr>
      <tr><td>Quang học</td><td>Nguồn sáng (đèn laser, đèn chiếu), lăng kính, thấu kính, màn chắn</td></tr>
      <tr><td>Điện học</td><td>Biến áp nguồn, ampe kế, vôn kế, điện trở, dây nối, công tắc, biến trở</td></tr>
      <tr><td>Hoá học</td><td>Ống nghiệm, cốc thuỷ tinh, bình tam giác, phễu, ống đong, đèn cồn, giá sắt</td></tr>
      <tr><td>Sinh học</td><td>Kính hiển vi, lam kính, lamen, kim mũi mác</td></tr></table>`,
      svg: S.apparatus({ items: ['ong-nghiem', 'coc', 'binh-tam-giac', 'ong-dong', 'den-con', 'ong-hut', 'thia', 'gia'] }), caption: 'Một số dụng cụ thí nghiệm hoá học thường dùng.' },
    { title: 'Hoá chất và nhãn hoá chất', html: `<p>Ở lớp 9 thường dùng: một số kim loại (iron, copper, aluminium, zinc…), dung dịch acid loãng (như hydrochloric acid), dung dịch base (như sodium hydroxide), muối, dầu ăn, ethylic alcohol…</p>
      <p>Mỗi lọ hoá chất đều có nhãn ghi tên, công thức, nồng độ và <b>hình đồ cảnh báo</b> (ví dụ: ăn mòn, dễ cháy, độc).</p>
      <div class="box tip">Acid và base có thể gây bỏng da, hỏng mắt: luôn đeo kính và găng tay; nếu bị dính phải rửa ngay dưới vòi nước sạch và báo thầy cô.</div>`,
      svg: S.signs([{ kind: 'canh-bao', glyph: 'an-mon', label: 'Chất ăn mòn' }, { kind: 'canh-bao', glyph: 'lua', label: 'Dễ cháy' }, { kind: 'canh-bao', glyph: 'doc', label: 'Chất độc' }, { kind: 'bat-buoc', glyph: 'kinh', label: 'Đeo kính bảo hộ' }]), caption: 'Một số biển cảnh báo và biển bắt buộc trong phòng thực hành.' },
    { title: 'Bảo quản hoá chất', html: `<ul><li>Để hoá chất đúng chỗ, lọ đậy kín, nhãn rõ ràng.</li><li>Một số kim loại hoạt động mạnh như sodium phải ngâm trong dầu hoả để không tiếp xúc với không khí và hơi nước.</li><li>Hoá chất dễ cháy để xa nguồn lửa; không để chung các hoá chất có thể phản ứng với nhau.</li></ul>` },
    { title: 'Thuyết trình một vấn đề khoa học', html: `<ol><li><b>Chuẩn bị:</b> xác định vấn đề và người nghe; tìm thông tin từ nguồn tin cậy; lập dàn ý; chuẩn bị hình ảnh, mô hình hoặc trang trình chiếu.</li>
      <li><b>Trình bày:</b> mở đầu giới thiệu vấn đề → nội dung chính (rõ ràng, có số liệu, minh hoạ) → kết luận ngắn gọn.</li>
      <li><b>Trao đổi:</b> lắng nghe câu hỏi, trả lời đúng trọng tâm; cảm ơn người nghe.</li></ol>
      <div class="box note">Nói rõ ràng, nhìn về phía người nghe, không đọc nguyên văn trên trang trình chiếu; ghi nguồn thông tin đã dùng.</div>` }
  ],
  summary: 'Nhận biết dụng cụ theo nhóm cơ, quang, điện, hoá, sinh. Đọc kĩ nhãn và hình đồ cảnh báo trên lọ hoá chất; bảo quản đúng cách. Thuyết trình: chuẩn bị → trình bày (mở đầu, nội dung, kết luận) → trao đổi.',
  examples: [
    { title: 'Chọn dụng cụ', problem: 'Để quan sát sự khúc xạ ánh sáng qua lăng kính, em cần những dụng cụ nào?', solution: 'Nguồn sáng (đèn laser hoặc đèn chiếu), lăng kính, màn chắn để hứng tia sáng.' },
    { title: 'Bảo quản đặc biệt', problem: 'Vì sao kim loại sodium được ngâm trong dầu hoả?', solution: 'Sodium phản ứng rất mạnh với oxygen và hơi nước trong không khí. Ngâm trong dầu hoả giúp cách li sodium với không khí.' },
    { title: 'Dàn ý thuyết trình', problem: 'Lập dàn ý ngắn cho bài thuyết trình “Vì sao nên tiết kiệm điện?”.', solution: 'Mở đầu: điện năng quan trọng trong đời sống. Nội dung: (1) sản xuất điện tốn tài nguyên, có thể gây ô nhiễm; (2) tiết kiệm điện giúp giảm chi phí gia đình; (3) các cách tiết kiệm: tắt thiết bị khi không dùng, dùng đèn LED… Kết luận: kêu gọi mọi người cùng hành động.' }
  ],
  exercises: [
    { question: 'Kể tên hai thiết bị đo điện thường dùng và đại lượng mà chúng đo.', hints: ['Một thiết bị đo cường độ dòng điện.', 'Một thiết bị đo hiệu điện thế.'], solution: 'Ampe kế đo cường độ dòng điện; vôn kế đo hiệu điện thế.' },
    { question: 'Khi bị dung dịch base bắn vào tay, em cần làm gì?', hints: ['Base có thể ăn mòn da.', 'Cần làm loãng và rửa trôi hoá chất ngay, rồi báo người phụ trách.'], solution: 'Rửa ngay vùng da bị dính dưới vòi nước sạch trong nhiều phút và báo ngay cho thầy cô.' },
    { question: 'Nêu ba điều cần lưu ý khi trình bày một bài thuyết trình.', hints: ['Nghĩ tới giọng nói, ánh mắt.', 'Nghĩ tới cách dùng trang trình chiếu và nguồn thông tin.'], solution: 'Ví dụ: nói rõ ràng, đủ nghe; nhìn về phía người nghe; không đọc nguyên văn trang trình chiếu; ghi rõ nguồn thông tin; trả lời câu hỏi đúng trọng tâm.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hoá chất dễ cháy cần để xa nguồn lửa.', answer: true, explain: 'Để gần nguồn lửa có thể gây cháy nổ.' },
    { type: 'mcq', q: 'Dụng cụ nào thuộc nhóm thí nghiệm quang học?', options: ['Ampe kế', 'Lăng kính', 'Ống đong', 'Lực kế'], answer: 1, explain: 'Lăng kính dùng trong thí nghiệm về ánh sáng.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Kim loại sodium được bảo quản bằng cách ngâm trong nước.', answer: false, explain: 'Sodium phản ứng mạnh với nước; phải ngâm trong dầu hoả.' },
    { type: 'mcq', q: 'Hình đồ cảnh báo trên nhãn lọ hoá chất cho biết:', options: ['Giá tiền của hoá chất', 'Mức độ nguy hiểm của hoá chất', 'Ngày sản xuất', 'Tên người dùng'], answer: 1, explain: 'Hình đồ cảnh báo cho biết hoá chất có thể gây nguy hiểm gì (ăn mòn, dễ cháy, độc…).' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khi thuyết trình nên đọc nguyên văn toàn bộ chữ trên trang trình chiếu.', answer: false, explain: 'Nên nói bằng lời của mình, trang trình chiếu chỉ ghi ý chính.' },
    { type: 'short', q: 'Một bài thuyết trình được phép dài 5 phút. Em dành 1 phút mở đầu và 1 phút kết luận. Phần nội dung chính dài bao nhiêu phút?', answer: '3', unit: 'phút', calc: '5-1-1', explain: '5 − 1 − 1 = 3 phút.' },
    { type: 'mcq', q: 'Phần đầu tiên của một bài thuyết trình là:', options: ['Trả lời câu hỏi', 'Kết luận', 'Mở đầu – giới thiệu vấn đề', 'Cảm ơn'], answer: 2, explain: 'Bài thuyết trình bắt đầu bằng phần giới thiệu vấn đề.' },
    { type: 'short', q: 'Một ống nghiệm có dung tích 15 mL. Khi đun, lượng chất lỏng trong ống nhiều nhất là bao nhiêu mL (không quá 1/3 ống)?', answer: '5', unit: 'mL', calc: '15/3', explain: '15 : 3 = 5 mL.' }
  ]
});
})();
