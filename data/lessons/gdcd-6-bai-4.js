/* GDCD 6 – Bài 4. Tôn trọng sự thật. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('gdcd-6/bai-4', {
  objectives: [
    'Nhận biết được một số biểu hiện của tôn trọng sự thật.',
    'Hiểu được vì sao phải tôn trọng sự thật.',
    'Luôn nói thật với người thân, thầy cô, bạn bè; không đồng tình với việc nói dối, che giấu sự thật, lan truyền tin giả.'
  ],
  intro: 'Trong giờ kiểm tra, Phương thấy bạn cùng bàn xem tài liệu. Cô hỏi cả lớp có ai biết chuyện gì không. Phương băn khoăn: nói thật hay im lặng? Đó là câu hỏi về <b>tôn trọng sự thật</b>.',
  steps: [
    { title: 'Tôn trọng sự thật là gì?', html: `<p><b>Tôn trọng sự thật</b> là nhìn nhận, đánh giá và nói đúng với sự việc đã xảy ra; dám nhận lỗi; bảo vệ lẽ phải; không nói dối, không bịa đặt, không che giấu cái sai.</p>` },
    { title: 'Biểu hiện', html: `<p>Biểu hiện trong lời nói và việc làm:</p>`,
      svg: S.compare({ title: 'Tôn trọng sự thật và trái ngược', left: { h: 'Tôn trọng sự thật', items: ['Thật thà nhận lỗi khi làm sai', 'Báo đúng kết quả học tập với bố mẹ', 'Kiểm chứng tin trước khi chia sẻ', 'Bảo vệ bạn bị đổ oan'] }, right: { h: 'Không tôn trọng sự thật', items: ['Sửa điểm trong sổ liên lạc', 'Đổ lỗi cho người khác', 'Chia sẻ tin đồn chưa kiểm chứng', 'Bao che cho việc làm sai'] } }), caption: 'Nói thật cần đi cùng sự tế nhị, đúng lúc, đúng chỗ.' },
    { title: 'Vì sao phải tôn trọng sự thật?', html: `<ul><li>Giúp nhìn nhận đúng sự việc, giải quyết vấn đề công bằng.</li><li>Tạo niềm tin, được mọi người tôn trọng.</li><li>Góp phần bảo vệ lẽ phải, ngăn cái xấu.</li></ul><p>Tục ngữ: <i>“Mất lòng trước, được lòng sau”</i>.</p>` },
    { title: 'Xử lí tình huống', html: `<p>Khi cần nói ra một sự thật khó nói, em có thể làm theo các bước:</p>`,
      svg: S.flowchart({ title: 'Nói ra sự thật thế nào cho phù hợp?', steps: [{ t: 'start', s: 'Biết sự thật' }, { t: 'if', s: 'Có gây hại nếu im lặng?', yes: 'Báo người lớn', no: 'Góp ý tế nhị' }, { t: 'end', s: 'Khách quan' }] }), caption: 'Nếu im lặng gây hại: nói với người có trách nhiệm (thầy cô, bố mẹ). Nếu không: góp ý riêng, tế nhị. Luôn giữ thái độ khách quan.' }
  ],
  summary: 'Tôn trọng sự thật là nhìn nhận, đánh giá, nói đúng sự việc; dám nhận lỗi, bảo vệ lẽ phải; không nói dối, bịa đặt, che giấu cái sai, lan truyền tin giả. Điều đó giúp giải quyết vấn đề công bằng, tạo niềm tin và bảo vệ lẽ phải. Nói thật cần tế nhị, đúng người, đúng lúc.',
  examples: [
    { title: 'Nhận diện', problem: 'Làm vỡ lọ hoa, Bình chủ động nói với mẹ và xin lỗi. Bình thể hiện điều gì?', solution: 'Tôn trọng sự thật, dám nhận lỗi.' },
    { title: 'Tin giả', problem: 'Nhóm lớp lan truyền tin “ngày mai nghỉ học” không rõ nguồn. Em làm gì?', solution: 'Không chia sẻ tiếp; hỏi lại giáo viên chủ nhiệm hoặc xem thông báo chính thức của nhà trường; nhắc các bạn kiểm chứng.' },
    { title: 'Tế nhị', problem: 'Bạn hỏi em bức tranh của bạn có đẹp không, nhưng em thấy màu còn rối. Nói thế nào?', solution: 'Nói thật nhưng tế nhị: khen điểm tốt (ý tưởng), góp ý phần màu sắc có thể chỉnh để đẹp hơn.' }
  ],
  exercises: [
    { question: 'Kể ba biểu hiện của tôn trọng sự thật ở trường.', hints: ['Trong kiểm tra, trong học tập.', 'Khi có mâu thuẫn giữa các bạn.'], solution: 'Không quay cóp, báo cáo đúng kết quả; nhận lỗi khi vi phạm; nói đúng sự việc khi thầy cô hỏi về mâu thuẫn.' },
    { question: 'Có phải mọi sự thật đều nên nói ngay với tất cả mọi người không? Vì sao?', hints: ['Bí mật riêng của bạn thì sao?', 'Nói thế nào để không gây tổn thương?'], solution: 'Không. Cần tôn trọng bí mật riêng tư hợp lí của người khác, nói đúng người, đúng lúc, tế nhị; nhưng không được che giấu việc sai gây hại.' },
    { question: 'Một tin giả được 1 người chia sẻ cho 5 người, mỗi người lại chia sẻ cho 5 người khác. Sau 3 lượt có bao nhiêu người mới nhận tin ở lượt thứ 3?', hints: ['Lượt 1: 5 người; lượt 2: 5 × 5.', 'Lượt 3: 5 × 5 × 5.'], solution: '125 người – cho thấy tin giả lan rất nhanh.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tôn trọng sự thật là nói đúng với sự việc đã xảy ra.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Hành vi KHÔNG tôn trọng sự thật:', options: ['Nhận lỗi khi làm sai', 'Sửa điểm trong sổ liên lạc', 'Kiểm chứng tin trước khi chia sẻ', 'Bảo vệ bạn bị đổ oan'], answer: 1, explain: 'Gian dối.' },
    { type: 'mcq', q: 'Câu tục ngữ khuyên nói thật dù có thể làm người khác phật lòng:', options: ['Mất lòng trước, được lòng sau', 'Ăn quả nhớ kẻ trồng cây', 'Có chí thì nên', 'Gần mực thì đen'], answer: 0, explain: 'Đúng.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Chia sẻ tin đồn chưa kiểm chứng không ảnh hưởng gì.', answer: false, explain: 'Có thể gây hại.' },
    { type: 'short', q: 'Tin giả: mỗi người chia sẻ cho 4 người. Ở lượt thứ 3 có bao nhiêu người mới nhận?', answer: '64', unit: 'người', calc: '4*4*4', explain: '4³ = 64.' },
    { type: 'mcq', q: 'Khi góp ý về bài làm của bạn, cách phù hợp là:', options: ['nói thật, tế nhị', 'chê bai trước lớp', 'khen dù sai', 'im lặng mãi'], answer: 0, explain: 'Thật và tế nhị.' },
    { type: 'mcq', q: 'Thấy tin “mai nghỉ học” không rõ nguồn, nên:', options: ['hỏi giáo viên hoặc xem thông báo chính thức', 'chia sẻ ngay', 'tự nghỉ học', 'thêm chi tiết cho hấp dẫn'], answer: 0, explain: 'Kiểm chứng.' },
    { type: 'short', q: 'Lớp 40 bạn, khảo sát có 34 bạn luôn kiểm chứng tin trước khi chia sẻ. Tỉ lệ (%)?', answer: '85', unit: '%', calc: '34/40*100', explain: '85%.' }
  ]
});
})();
