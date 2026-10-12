/* GDCD 9 – Bài 10. Quyền tự do kinh doanh và nghĩa vụ nộp thuế. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('gdcd-9/bai-10', {
  objectives: [
    'Nêu được một số quy định cơ bản của pháp luật về quyền tự do kinh doanh và nghĩa vụ nộp thuế.',
    'Nêu được vai trò của thuế đối với đời sống.',
    'Phân tích, đánh giá được một số hành vi vi phạm pháp luật về kinh doanh và thuế.',
    'Ủng hộ hành vi kinh doanh, nộp thuế đúng pháp luật; phê phán hành vi trốn thuế.'
  ],
  intro: 'Mẹ của Hoa mở một tiệm bánh nhỏ. Mẹ đăng kí hộ kinh doanh, niêm yết giá, dùng hoá đơn điện tử và kê khai, nộp thuế đầy đủ. Hoa thắc mắc: “Sao mình phải nộp thuế hả mẹ?”. Câu trả lời liên quan đến <b>quyền tự do kinh doanh và nghĩa vụ nộp thuế</b>.',
  steps: [
    { title: 'Quyền tự do kinh doanh', html: `<p><b>Kinh doanh</b> là hoạt động sản xuất, mua bán, dịch vụ nhằm mục đích sinh lời.</p><p><b>Hiến pháp năm 2013, Điều 33</b>: mọi người có quyền tự do kinh doanh trong những ngành nghề mà pháp luật không cấm. Người kinh doanh được tự chủ lựa chọn ngành nghề, quy mô, hình thức, nhưng phải đăng kí theo quy định và kinh doanh đúng ngành nghề đã đăng kí.</p>` },
    { title: 'Nghĩa vụ nộp thuế', html: `<p><b>Thuế</b> là khoản nộp bắt buộc của tổ chức, cá nhân vào ngân sách nhà nước theo luật định.</p><ul><li><b>Hiến pháp năm 2013, Điều 47</b>: mọi người có nghĩa vụ nộp thuế theo luật định.</li><li><b>Luật Quản lý thuế năm 2025</b> (Luật số 108/2025/QH15, hiệu lực từ 1/7/2026) quy định việc đăng kí, kê khai, nộp thuế; thay thế Luật Quản lý thuế 2019.</li></ul>` },
    { title: 'Vai trò của thuế', html: `<p>Thuế là nguồn thu chủ yếu của ngân sách nhà nước, dùng để:</p>`,
      svg: S.mindmap({ center: 'Thuế được dùng để', branches: [{ title: 'Hạ tầng', items: ['Đường, cầu', 'Điện, nước'] }, { title: 'Giáo dục, y tế', items: ['Xây trường học', 'Bệnh viện'] }, { title: 'An sinh', items: ['Hỗ trợ người nghèo', 'Khắc phục thiên tai'] }, { title: 'Quốc phòng, an ninh', items: ['Bảo vệ Tổ quốc', 'Giữ trật tự'] }], w: 640, size: 13 }), caption: 'Thuế góp phần điều tiết kinh tế, bảo đảm công bằng xã hội.' },
    { title: 'Ví dụ tính thuế và vi phạm', html: `<p>Ví dụ giả định về thuế giá trị gia tăng (GTGT) trong giá bánh:</p>`,
      svg: S.table({ title: 'Ví dụ giả định: thuế GTGT 10%', head: ['Khoản', 'Số tiền (đồng)'], rows: [['Giá chưa thuế', '50 000'], ['Thuế GTGT (10%)', '5 000'], ['Giá thanh toán', '55 000']], colW: 250 }), caption: 'Ví dụ minh hoạ cách tính; thuế suất thực tế tuỳ loại hàng hoá, thời kì.' }
  ],
  summary: 'Mọi người có quyền tự do kinh doanh trong ngành nghề pháp luật không cấm (Hiến pháp 2013, Điều 33), phải đăng kí và kinh doanh đúng quy định. Mọi người có nghĩa vụ nộp thuế theo luật định (Điều 47); Luật Quản lý thuế 2025 (hiệu lực 1/7/2026) quy định việc kê khai, nộp thuế. Thuế là nguồn thu chủ yếu của ngân sách, dùng cho hạ tầng, giáo dục, y tế, an sinh, quốc phòng. Vi phạm: kinh doanh ngành nghề cấm, buôn hàng giả, trốn thuế.',
  examples: [
    { title: 'Câu hỏi của Hoa', problem: 'Vì sao mẹ Hoa phải nộp thuế?', solution: 'Vì nộp thuế là nghĩa vụ theo Hiến pháp; tiền thuế dùng xây trường, bệnh viện, đường sá… phục vụ mọi người, kể cả gia đình Hoa.' },
    { title: 'Nhận diện vi phạm', problem: 'Một cửa hàng bán thuốc lá điện tử, không đăng kí kinh doanh, không kê khai doanh thu. Có những vi phạm nào?', solution: 'Kinh doanh không đăng kí; không kê khai, trốn thuế; kinh doanh mặt hàng bị cấm hoặc hạn chế theo quy định.' },
    { title: 'Tính thuế', problem: 'Theo ví dụ giả định thuế suất 10%, món hàng giá chưa thuế 200 000 đồng có giá thanh toán bao nhiêu?', solution: '200 000 + 20 000 = 220 000 đồng.' }
  ],
  exercises: [
    { question: 'Nêu hai quyền và hai nghĩa vụ của người kinh doanh.', hints: ['Lựa chọn.', 'Đăng kí, thuế.'], solution: 'Quyền: chọn ngành nghề không bị cấm, chọn quy mô, hình thức. Nghĩa vụ: đăng kí kinh doanh, kinh doanh đúng ngành nghề; kê khai, nộp thuế đầy đủ.' },
    { question: 'Giả sử thuế suất 10%, giá thanh toán 330 000 đồng. Giá chưa thuế là bao nhiêu?', hints: ['Giá thanh toán = giá chưa thuế × 1,1.', '330 000 : 1,1.'], solution: '300 000 đồng.' },
    { question: 'Vì sao trốn thuế là hành vi đáng lên án?', hints: ['Ngân sách.', 'Công bằng.'], solution: 'Vì làm thất thu ngân sách, ảnh hưởng đến các công trình phục vụ cộng đồng, gây bất công với người nộp thuế đầy đủ; có thể bị xử phạt hoặc truy cứu trách nhiệm hình sự.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mọi người có quyền tự do kinh doanh trong những ngành nghề mà pháp luật không cấm.', answer: true, explain: 'Hiến pháp 2013, Điều 33.' },
    { type: 'mcq', q: 'Hiến pháp 2013 quy định nghĩa vụ nộp thuế tại:', options: ['Điều 47', 'Điều 33', 'Điều 5', 'Điều 43'], answer: 0, explain: 'Điều 47.' },
    { type: 'short', q: 'Thuế suất giả định 10%, giá chưa thuế 200 000 đồng. Giá thanh toán bao nhiêu đồng?', answer: '220000', answerText: '220 000', unit: 'đồng', calc: '200000*1.1', explain: '220 000.' },
    { type: 'mcq', q: 'Luật Quản lý thuế hiện hành có hiệu lực từ:', options: ['1/7/2026', '1/7/2020', '1/1/2007', '1/1/2015'], answer: 0, explain: 'Luật số 108/2025/QH15.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Kinh doanh nhỏ thì không cần tuân theo pháp luật.', answer: false, explain: 'Mọi hoạt động kinh doanh đều phải đúng pháp luật.' },
    { type: 'short', q: 'Giả sử thuế 10%, giá thanh toán 330 000 đồng. Giá chưa thuế bao nhiêu đồng?', answer: '300000', answerText: '300 000', unit: 'đồng', calc: '330000/1.1', explain: '300 000.' },
    { type: 'mcq', q: 'Hành vi vi phạm pháp luật về thuế:', options: ['Khai thấp doanh thu để trốn thuế', 'Kê khai đầy đủ', 'Dùng hoá đơn', 'Nộp thuế đúng hạn'], answer: 0, explain: 'Trốn thuế.' },
    { type: 'mcq', q: 'Vai trò của thuế:', options: ['Nguồn thu chủ yếu của ngân sách nhà nước', 'Làm giàu cho cá nhân', 'Không có vai trò', 'Chỉ để phạt người kinh doanh'], answer: 0, explain: 'Đúng.' }
  ]
});
})();
