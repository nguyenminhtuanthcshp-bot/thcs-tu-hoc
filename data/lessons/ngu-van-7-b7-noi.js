/* Ngữ văn 7 – Bài 7. Nói và nghe: Thảo luận nhóm về một vấn đề gây tranh cãi – vai trò của công nghệ đối với đời sống con người. Ví dụ do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-7/b7-noi', {
  objectives: [
    'Biết thảo luận nhóm về một vấn đề gây tranh cãi: vai trò của công nghệ đối với đời sống con người.',
    'Trình bày ý kiến có lí lẽ, bằng chứng; biết tôn trọng, lắng nghe và phản hồi ý kiến khác biệt.',
    'Rút ra kết luận chung của nhóm và thái độ sử dụng công nghệ có trách nhiệm.'
  ],
  intro: 'Điện thoại thông minh giúp em tra cứu bài trong vài giây, nhưng cũng có thể “nuốt” mất cả buổi tối. Công nghệ là người bạn hay mối lo? Hãy cùng thảo luận!',
  steps: [
    { title: 'Vấn đề cần thảo luận', html: `<p><b>Vấn đề</b>: Công nghệ (điện thoại, máy tính, Internet, trí tuệ nhân tạo…) có vai trò như thế nào đối với đời sống con người?</p>
      <p>Đây là vấn đề <b>có nhiều ý kiến</b>: có người nhấn mạnh lợi ích, có người lo ngại tác hại. Mục tiêu của thảo luận không phải để “thắng” mà để hiểu vấn đề toàn diện hơn.</p>` },
    { title: 'Hai mặt của công nghệ', html: `<p>Tìm ý bằng sơ đồ:</p>`,
      svg: S.mindmap({ center: 'Công nghệ', branches: [{ title: 'Lợi ích', items: ['Học tập, tra cứu nhanh', 'Liên lạc dễ dàng', 'Y tế, sản xuất hiện đại'] }, { title: 'Tác hại (nếu lạm dụng)', items: ['Nghiện thiết bị, mất ngủ', 'Thông tin sai, lừa đảo', 'Ít giao tiếp trực tiếp'] }, { title: 'Giải pháp', items: ['Đặt giới hạn thời gian', 'Kiểm chứng thông tin', 'Bảo vệ thông tin cá nhân'] }] }),
      caption: 'Sơ đồ tìm ý cho cuộc thảo luận.' },
    { title: 'Các bước thảo luận nhóm', html: `<p>Một buổi thảo luận hiệu quả cần có phân vai rõ ràng và đi theo trình tự:</p>`,
      svg: S.flow({ items: [{ title: 'Phân vai', text: 'Người điều hành, thư kí, thành viên' }, { title: 'Nêu ý kiến', text: 'Mỗi người 1–2 phút, có bằng chứng' }, { title: 'Trao đổi', text: 'Hỏi lại, phản hồi tôn trọng' }, { title: 'Kết luận', text: 'Thư kí tổng hợp, báo cáo' }] }),
      caption: 'Quy trình thảo luận nhóm.' },
    { title: 'Mẫu câu khi thảo luận', html: `<table class="tbl"><tr><th>Mục đích</th><th>Mẫu câu</th></tr>
      <tr><td>Nêu ý kiến</td><td>“Theo mình, công nghệ giúp… vì…”; “Mình có một bằng chứng là…”</td></tr>
      <tr><td>Đồng tình</td><td>“Mình đồng ý với bạn, và bổ sung thêm…”</td></tr>
      <tr><td>Phản hồi khác biệt</td><td>“Mình hiểu ý bạn, nhưng mình nghĩ hơi khác…”; “Nếu vậy thì trường hợp… sẽ thế nào?”</td></tr>
      <tr><td>Điều hành</td><td>“Chúng ta đã nghe ba ý kiến, bây giờ mời bạn Nam…”; “Tóm lại, nhóm thống nhất…”</td></tr></table>
      <div class="box tip">Tránh nói “Bạn sai rồi!”. Hãy phản hồi vào ý kiến, không phê phán con người.</div>` },
    { title: 'Ví dụ một đoạn thảo luận', html: `<div class="box text"><p><b>An:</b> Theo mình, công nghệ giúp học tốt hơn. Hôm trước mình xem mô phỏng 3D về hệ tuần hoàn, hiểu bài nhanh hơn hẳn.</p>
      <p><b>Bình:</b> Mình đồng ý là có ích, nhưng mình lo nhiều bạn dùng điện thoại đến khuya, sáng ra ngủ gật trong lớp.</p>
      <p><b>Chi (điều hành):</b> Vậy vấn đề nằm ở công nghệ hay ở cách dùng?</p>
      <p><b>An:</b> Mình nghĩ ở cách dùng. Nếu đặt giới hạn thời gian thì vẫn tận dụng được lợi ích.</p>
      <p><b>Chi:</b> Tóm lại, nhóm thống nhất: công nghệ rất quan trọng, nhưng cần sử dụng có kế hoạch và có trách nhiệm.</p></div>
      <p class="muted">Đoạn hội thoại do nhóm biên soạn viết để minh hoạ.</p>` }
  ],
  summary: 'Thảo luận nhóm về vai trò của công nghệ: xác định vấn đề; tìm ý cả hai mặt lợi ích và tác hại, đề xuất giải pháp; phân vai (điều hành, thư kí, thành viên); nêu ý kiến có lí lẽ, bằng chứng; phản hồi tôn trọng; thư kí tổng hợp kết luận chung. Kết luận thường gặp: công nghệ quan trọng nhưng cần dùng có kế hoạch, có trách nhiệm.',
  examples: [
    { title: 'Nêu ý kiến có bằng chứng', problem: 'Nêu một ý kiến về lợi ích của công nghệ, kèm bằng chứng.', solution: '“Công nghệ giúp con người liên lạc dễ dàng. Ví dụ, ông bà em ở quê có thể gọi video để nhìn thấy các cháu hằng tuần.”' },
    { title: 'Phản hồi tôn trọng', problem: 'Bạn nói: “Công nghệ chỉ toàn tác hại.” Em phản hồi thế nào?', solution: '“Mình hiểu bạn lo về việc nghiện điện thoại, điều đó đúng là đáng lo. Nhưng công nghệ cũng giúp bác sĩ chẩn đoán bệnh, giúp chúng ta học trực tuyến. Có lẽ ta nên bàn về cách dùng cho đúng?”' },
    { title: 'Kết luận nhóm', problem: 'Viết câu kết luận của thư kí sau buổi thảo luận.', solution: '“Nhóm thống nhất: công nghệ mang lại nhiều lợi ích cho học tập, liên lạc, y tế; tác hại chủ yếu đến từ việc lạm dụng. Nhóm đề xuất mỗi bạn tự đặt giới hạn thời gian dùng thiết bị và luôn kiểm chứng thông tin.”' }
  ],
  exercises: [
    { question: 'Liệt kê 3 lợi ích và 3 tác hại có thể có của việc học sinh dùng điện thoại thông minh.', hints: ['Lợi ích: học tập, liên lạc, giải trí lành mạnh.', 'Tác hại: sức khoẻ, thời gian, an toàn thông tin.'], solution: 'Lợi ích: tra cứu tài liệu, từ điển; liên lạc với gia đình; học ngoại ngữ qua ứng dụng. Tác hại: mỏi mắt, mất ngủ nếu dùng khuya; mất tập trung học tập; dễ gặp thông tin xấu, lừa đảo, lộ thông tin cá nhân.' },
    { question: 'Trong nhóm có một bạn nói quá lâu, lấn át người khác. Là người điều hành, em sẽ nói gì?', hints: ['Ghi nhận ý kiến của bạn.', 'Chuyển lượt lịch sự.'], solution: 'Ví dụ: “Cảm ơn bạn, ý kiến của bạn rất rõ. Để kịp thời gian, mình mời các bạn khác chia sẻ thêm, lát nữa bạn bổ sung sau nhé.”' },
    { question: 'Đề xuất 3 giải pháp giúp học sinh sử dụng công nghệ có trách nhiệm.', hints: ['Nghĩ về thời gian sử dụng và sức khoẻ.', 'Nghĩ về độ tin cậy của thông tin và bảo mật thông tin cá nhân.'], solution: 'Ví dụ: 1) Đặt giới hạn thời gian dùng thiết bị, không dùng trước giờ ngủ 1 tiếng. 2) Kiểm chứng thông tin qua nguồn tin cậy trước khi tin hoặc chia sẻ. 3) Không chia sẻ mật khẩu, địa chỉ, ảnh cá nhân cho người lạ.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Mục tiêu của thảo luận nhóm về vấn đề gây tranh cãi là:', options: ['Hiểu vấn đề toàn diện, tìm tiếng nói chung', 'Bằng mọi giá thắng người khác', 'Chỉ nghe người điều hành', 'Tránh nêu ý kiến riêng'], answer: 0, explain: 'Thảo luận để hiểu và thống nhất.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khi không đồng ý, nên nói “Bạn sai rồi!” cho nhanh.', answer: false, explain: 'Cần phản hồi tôn trọng.' },
    { type: 'mcq', q: 'Người ghi chép và tổng hợp ý kiến của nhóm gọi là:', options: ['Thư kí', 'Khán giả', 'Giám khảo', 'Người dẫn chương trình truyền hình'], answer: 0, explain: 'Thư kí ghi chép, tổng hợp.' },
    { type: 'mcq', q: 'Câu nào là phản hồi tôn trọng ý kiến khác?', options: ['Mình hiểu ý bạn, nhưng mình nghĩ hơi khác…', 'Ý bạn vô lí quá.', 'Thôi bạn đừng nói nữa.', 'Ai cũng biết bạn sai.'], answer: 0, explain: 'Ghi nhận rồi nêu ý khác.' },
    { type: 'short', q: '“Trí tuệ nhân tạo” thường được viết tắt theo tiếng Anh là gì? (hai chữ cái)', answer: ['AI'], answerText: 'AI', explain: 'Artificial Intelligence – AI; tiếng Việt: trí tuệ nhân tạo.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Ý kiến trong thảo luận cần có lí lẽ và bằng chứng.', answer: true, explain: 'Giúp ý kiến thuyết phục.' },
    { type: 'mcq', q: 'Tác hại của công nghệ chủ yếu đến từ:', options: ['Việc lạm dụng, sử dụng thiếu kiểm soát', 'Bản thân phát minh khoa học', 'Việc học tập', 'Việc liên lạc với gia đình'], answer: 0, explain: 'Do cách con người sử dụng.' },
    { type: 'mcq', q: 'Việc nào giúp bảo vệ an toàn khi dùng Internet?', options: ['Không chia sẻ mật khẩu cho người khác', 'Đăng địa chỉ nhà công khai', 'Bấm mọi đường link lạ', 'Kết bạn với mọi người lạ'], answer: 0, explain: 'Giữ bí mật thông tin cá nhân.' }
  ]
});
})();
