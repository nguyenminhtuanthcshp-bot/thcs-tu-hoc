/* GDCD 6 – Bài 12. Thực hiện quyền trẻ em. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('gdcd-6/bai-12', {
  objectives: [
    'Nêu được trách nhiệm của gia đình, nhà trường, xã hội trong việc thực hiện quyền trẻ em.',
    'Nêu được bổn phận của trẻ em theo Luật Trẻ em năm 2016.',
    'Biết cách tự bảo vệ và tìm kiếm trợ giúp khi quyền của mình hoặc của bạn bị xâm phạm (Tổng đài 111).'
  ],
  intro: 'Bé Na hàng xóm thường xuyên bị đánh và bị bỏ đói. Em nên làm gì? Thực hiện quyền trẻ em là trách nhiệm của <b>gia đình, nhà trường, xã hội</b> – và cả của chính các em.',
  steps: [
    { title: 'Trách nhiệm của gia đình, nhà trường, xã hội', html: `<p>Mỗi chủ thể có trách nhiệm riêng:</p>`,
      svg: S.table({ title: 'Ai có trách nhiệm thực hiện quyền trẻ em?', head: ['Chủ thể', 'Trách nhiệm (ví dụ)'], rows: [['Gia đình', 'Nuôi dưỡng, cho con đi học'], ['Nhà trường', 'Giáo dục, bảo đảm an toàn'], ['Xã hội, Nhà nước', 'Ban hành luật, hỗ trợ trẻ em']], colW: 300 }), caption: 'Mọi người lớn đều có trách nhiệm bảo vệ trẻ em.' },
    { title: 'Bổn phận của trẻ em', html: `<p>Luật Trẻ em năm 2016 quy định bổn phận của trẻ em (Điều 37–41) đối với gia đình, nhà trường, cộng đồng, quê hương đất nước và bản thân, ví dụ:</p>
      <ul><li>Kính trọng, lễ phép, hiếu thảo với ông bà, cha mẹ; giúp đỡ gia đình việc vừa sức.</li><li>Chăm chỉ học tập, tôn trọng thầy cô, đoàn kết với bạn bè.</li><li>Tôn trọng người khác, chấp hành pháp luật, bảo vệ môi trường.</li><li>Tự chịu trách nhiệm về hành vi của mình; không đánh bạc, không dùng chất cấm…</li></ul>` },
    { title: 'Khi quyền trẻ em bị xâm phạm', html: `<p>Em có thể làm theo sơ đồ sau:</p>`,
      svg: S.flowchart({ title: 'Phát hiện trẻ em bị xâm hại, bạo lực', steps: [{ t: 'start', s: 'Phát hiện dấu hiệu' }, { t: 'if', s: 'Đang nguy hiểm ngay?', yes: 'Gọi 113, người lớn', no: 'Báo thầy cô, bố mẹ' }, { t: 'proc', s: 'Gọi Tổng đài 111 (miễn phí)' }, { t: 'end', s: 'Theo dõi, hỗ trợ' }] }), caption: 'Tổng đài quốc gia bảo vệ trẻ em 111 hoạt động 24/7, miễn phí.' },
    { title: 'Học sinh thực hiện quyền và bổn phận', html: `<p>Biết quyền để tự bảo vệ; thực hiện bổn phận để xứng đáng; tôn trọng quyền của bạn bè (không bắt nạt, không chế giễu, không tung ảnh bạn lên mạng).</p>`,
      svg: S.card({ tag: 'Tình huống', lines: ['Nhóm bạn trong lớp chụp ảnh Tâm ngủ gật rồi đăng lên mạng', 'kèm lời chế giễu. Tâm rất buồn và xấu hổ.'], q: 'Quyền nào của Tâm bị xâm phạm? Em sẽ làm gì?' }), caption: 'Gợi ý: xâm phạm quyền được bảo vệ danh dự, bí mật đời sống riêng tư; khuyên các bạn gỡ ảnh, xin lỗi; báo giáo viên chủ nhiệm.' }
  ],
  summary: 'Gia đình nuôi dưỡng, chăm sóc, giáo dục; nhà trường giáo dục, bảo đảm an toàn; Nhà nước và xã hội ban hành luật, xử lí vi phạm, hỗ trợ trẻ em. Trẻ em có bổn phận với gia đình, nhà trường, cộng đồng, đất nước và bản thân (Luật Trẻ em 2016, Điều 37–41). Khi quyền trẻ em bị xâm phạm: báo người lớn tin cậy, gọi 113 nếu nguy hiểm, Tổng đài 111.',
  examples: [
    { title: 'Bé Na', problem: 'Em phát hiện bé Na hàng xóm thường bị đánh, bỏ đói. Em làm gì?', solution: 'Kể với bố mẹ, thầy cô; gọi Tổng đài 111 để được hỗ trợ; nếu bé đang gặp nguy hiểm ngay thì báo 113.' },
    { title: 'Bổn phận', problem: 'Việc Hưng lễ phép với ông bà, giúp mẹ rửa bát thể hiện bổn phận nào?', solution: 'Bổn phận của trẻ em đối với gia đình.' },
    { title: 'Trách nhiệm nhà trường', problem: 'Nhà trường tổ chức tuyên truyền phòng chống bạo lực học đường thể hiện điều gì?', solution: 'Trách nhiệm của nhà trường trong việc bảo vệ, giáo dục trẻ em.' }
  ],
  exercises: [
    { question: 'Nêu một trách nhiệm của gia đình, một của nhà trường và một của xã hội đối với trẻ em.', hints: ['Xem bảng ở bước 1.', 'Mỗi chủ thể một ví dụ.'], solution: 'Gia đình: cho con đi học; nhà trường: bảo đảm an toàn; xã hội: hỗ trợ trẻ em có hoàn cảnh khó khăn.' },
    { question: 'Vì sao trẻ em có quyền thì cũng phải có bổn phận?', hints: ['Quyền đi đôi với gì?', 'Bổn phận giúp trẻ em thế nào?'], solution: 'Vì quyền luôn đi đôi với nghĩa vụ, bổn phận; thực hiện bổn phận giúp trẻ trưởng thành, sống có trách nhiệm và tôn trọng quyền của người khác.' },
    { question: 'Lớp 40 bạn, khảo sát có 36 bạn biết số Tổng đài 111. Tỉ lệ biết là bao nhiêu? Lớp cần làm gì?', hints: ['36 : 40.', 'Số bạn chưa biết.'], solution: '90%; còn 4 bạn chưa biết – lớp có thể làm bảng tin giới thiệu Tổng đài 111.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Bảo vệ quyền trẻ em là trách nhiệm của gia đình, nhà trường và xã hội.', answer: true, explain: 'Đúng.' },
    { type: 'short', q: 'Số điện thoại Tổng đài quốc gia bảo vệ trẻ em là số mấy?', answer: '111', calc: '111', explain: '111.' },
    { type: 'mcq', q: 'Bổn phận của trẻ em đối với gia đình:', options: ['Kính trọng, hiếu thảo với ông bà, cha mẹ', 'Bỏ học đi chơi', 'Đòi hỏi mọi thứ', 'Cãi lại cha mẹ'], answer: 0, explain: 'Hiếu thảo.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Đăng ảnh chế giễu bạn lên mạng là chuyện đùa, không vi phạm quyền trẻ em.', answer: false, explain: 'Xâm phạm danh dự, đời tư.' },
    { type: 'mcq', q: 'Phát hiện bạn bị bạo lực ở nhà, em nên:', options: ['báo người lớn tin cậy, gọi 111', 'giữ im lặng mãi', 'tự đến đánh lại', 'kể chuyện lên mạng'], answer: 0, explain: 'Báo, gọi 111.' },
    { type: 'short', q: 'Lớp 45 bạn, 36 bạn biết Tổng đài 111. Tỉ lệ (%)?', answer: '80', unit: '%', calc: '36/45*100', explain: '80%.' },
    { type: 'mcq', q: 'Bổn phận của trẻ em được quy định tại Luật Trẻ em 2016 từ:', options: ['Điều 37 đến Điều 41', 'Điều 1 đến Điều 5', 'Điều 12 đến Điều 36', 'Điều 100'], answer: 0, explain: 'Điều 37–41.' },
    { type: 'mcq', q: 'Trách nhiệm của nhà trường:', options: ['giáo dục, bảo đảm an toàn cho học sinh', 'thu tiền tuỳ ý', 'phạt học sinh bằng roi', 'không cần quan tâm'], answer: 0, explain: 'Đúng.' }
  ]
});
})();
