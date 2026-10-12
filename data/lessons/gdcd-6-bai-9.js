/* GDCD 6 – Bài 9. Công dân nước Cộng hoà xã hội chủ nghĩa Việt Nam. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('gdcd-6/bai-9', {
  objectives: [
    'Nêu được khái niệm công dân và căn cứ xác định công dân nước Cộng hoà xã hội chủ nghĩa Việt Nam (quốc tịch).',
    'Nhận biết được một số trường hợp có quốc tịch Việt Nam theo Luật Quốc tịch Việt Nam.',
    'Có ý thức, tự hào là công dân Việt Nam và thực hiện tốt trách nhiệm của công dân.'
  ],
  intro: 'Bạn Anna sinh ra ở Hà Nội, mẹ là người Việt Nam, bố là người Pháp. Anna có phải công dân Việt Nam không? Để trả lời, cần hiểu <b>quốc tịch</b> – căn cứ xác định công dân của một nước.',
  steps: [
    { title: 'Công dân và quốc tịch', html: `<p><b>Công dân</b> là người dân của một nước, có quyền và nghĩa vụ do pháp luật nước đó quy định.</p>
      <p><b>Quốc tịch</b> là căn cứ xác định công dân của một nước, thể hiện mối quan hệ giữa Nhà nước và công dân.</p>
      <div class="box key">Hiến pháp năm 2013, Điều 17: Công dân nước Cộng hoà xã hội chủ nghĩa Việt Nam là người có quốc tịch Việt Nam.</div>` },
    { title: 'Ai có quốc tịch Việt Nam?', html: `<p>Theo Luật Quốc tịch Việt Nam năm 2008 (đã được sửa đổi, bổ sung), một số trường hợp trẻ em có quốc tịch Việt Nam:</p>`,
      svg: S.table({ title: 'Một số trường hợp trẻ em có quốc tịch Việt Nam', head: ['Trường hợp', 'Quốc tịch'], rows: [['Cha mẹ đều là công dân VN', 'Có quốc tịch Việt Nam'], ['Cha hoặc mẹ là công dân VN', 'Theo thoả thuận của cha mẹ'], ['Trẻ bị bỏ rơi, không rõ cha mẹ', 'Có quốc tịch Việt Nam'], ['Được nhập quốc tịch Việt Nam', 'Có quốc tịch Việt Nam']], colW: 260 }), caption: 'VN: Việt Nam. Trẻ bị bỏ rơi: được tìm thấy trên lãnh thổ Việt Nam. Tóm tắt, diễn đạt lại; không thay thế văn bản luật.' },
    { title: 'Mối quan hệ Nhà nước – công dân', html: `<p>Công dân Việt Nam được Nhà nước bảo hộ, có các quyền và nghĩa vụ theo Hiến pháp, pháp luật. Công dân thực hiện nghĩa vụ đối với Nhà nước (học tập, tuân thủ pháp luật, bảo vệ Tổ quốc…).</p>`,
      svg: S.flow({ items: ['Nhà nước bảo đảm quyền, bảo hộ công dân', 'Công dân thực hiện nghĩa vụ với Nhà nước'], size: 13, label: 'Quan hệ hai chiều' }), caption: 'Quyền đi đôi với nghĩa vụ.' },
    { title: 'Trách nhiệm của học sinh', html: `<p>Chăm học, rèn luyện đạo đức, tuân thủ nội quy và pháp luật, tham gia bảo vệ môi trường, giữ gìn bản sắc văn hoá – để xứng đáng là công dân Việt Nam.</p>` }
  ],
  summary: 'Công dân là người dân của một nước, có quyền và nghĩa vụ theo pháp luật nước đó. Quốc tịch là căn cứ xác định công dân. Hiến pháp năm 2013 (Điều 17): công dân Việt Nam là người có quốc tịch Việt Nam. Theo Luật Quốc tịch Việt Nam, trẻ có cha mẹ đều là công dân Việt Nam, trẻ bị bỏ rơi tìm thấy ở Việt Nam không rõ cha mẹ… có quốc tịch Việt Nam. Học sinh cần tự hào và thực hiện tốt trách nhiệm công dân.',
  examples: [
    { title: 'Xác định quốc tịch', problem: 'Bố mẹ Minh đều là công dân Việt Nam, Minh sinh ra khi gia đình đang sống ở Nhật Bản. Minh có quốc tịch Việt Nam không?', solution: 'Có. Trẻ có cha mẹ đều là công dân Việt Nam thì có quốc tịch Việt Nam, dù sinh ở trong hay ngoài lãnh thổ Việt Nam.' },
    { title: 'Tình huống Anna', problem: 'Mẹ Anna là công dân Việt Nam, bố là người Pháp. Quốc tịch của Anna xác định thế nào?', solution: 'Theo thoả thuận bằng văn bản của cha mẹ khi đăng kí khai sinh; nếu cha mẹ chọn quốc tịch Việt Nam thì Anna là công dân Việt Nam.' },
    { title: 'Trẻ bị bỏ rơi', problem: 'Một em bé bị bỏ rơi được tìm thấy ở Việt Nam, không rõ cha mẹ là ai. Em có quốc tịch Việt Nam không?', solution: 'Có, theo Luật Quốc tịch Việt Nam.' }
  ],
  exercises: [
    { question: 'Căn cứ nào để xác định một người là công dân Việt Nam? Nêu điều luật.', hints: ['Một từ hai tiếng.', 'Hiến pháp năm 2013.'], solution: 'Quốc tịch Việt Nam; Hiến pháp năm 2013, Điều 17.' },
    { question: 'Người nước ngoài sống lâu năm ở Việt Nam có tự động trở thành công dân Việt Nam không?', hints: ['Họ cần làm gì?', 'Nhập quốc tịch.'], solution: 'Không tự động; họ phải đủ điều kiện, làm thủ tục và được Nhà nước cho nhập quốc tịch Việt Nam.' },
    { question: 'Nêu ba việc học sinh làm để thực hiện trách nhiệm công dân.', hints: ['Ở trường.', 'Ở cộng đồng.'], solution: 'Chăm học, rèn luyện; chấp hành nội quy, luật giao thông; tham gia bảo vệ môi trường.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Quốc tịch là căn cứ xác định công dân của một nước.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Theo Hiến pháp năm 2013, công dân Việt Nam là:', options: ['người có quốc tịch Việt Nam', 'mọi người sống ở Việt Nam', 'người nói tiếng Việt', 'người có hộ chiếu bất kì'], answer: 0, explain: 'Điều 17.' },
    { type: 'short', q: 'Điều mấy của Hiến pháp năm 2013 quy định công dân Việt Nam là người có quốc tịch Việt Nam?', answer: '17', calc: '17', explain: 'Điều 17.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Người nước ngoài ở Việt Nam trên 5 năm tự động là công dân Việt Nam.', answer: false, explain: 'Phải được nhập quốc tịch.' },
    { type: 'mcq', q: 'Trẻ có cha mẹ đều là công dân Việt Nam, sinh ở nước ngoài thì:', options: ['có quốc tịch Việt Nam', 'không có quốc tịch', 'chỉ có quốc tịch nước sinh ra', 'phải đợi 18 tuổi'], answer: 0, explain: 'Có quốc tịch VN.' },
    { type: 'mcq', q: 'Văn bản quy định chi tiết về quốc tịch:', options: ['Luật Quốc tịch Việt Nam', 'Luật Giao thông đường bộ', 'Luật Đất đai', 'Luật Thuế'], answer: 0, explain: 'Luật Quốc tịch.' },
    { type: 'short', q: 'Hiến pháp hiện hành được thông qua năm 2013. Đến năm 2026 là bao nhiêu năm?', answer: '13', unit: 'năm', calc: '2026-2013', explain: '13.' },
    { type: 'mcq', q: 'Trẻ bị bỏ rơi tìm thấy ở Việt Nam, không rõ cha mẹ:', options: ['có quốc tịch Việt Nam', 'không có quốc tịch', 'là người nước ngoài', 'không được khai sinh'], answer: 0, explain: 'Có quốc tịch VN.' }
  ]
});
})();
