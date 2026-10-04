/* Ngữ văn 8 – Bài 7. Nói và nghe: Thảo luận ý kiến về một vấn đề đời sống phù hợp với lứa tuổi (gợi ra từ tác phẩm văn học đã học). Đoạn thảo luận mẫu do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-8/b7-noi', {
  objectives: [
    'Xác định được vấn đề đời sống phù hợp lứa tuổi được gợi ra từ tác phẩm văn học đã học (ví dụ: sự trưởng thành, lòng biết ơn, tình yêu thương).',
    'Tham gia thảo luận: nêu ý kiến có lí lẽ, bằng chứng (từ tác phẩm và đời sống); lắng nghe, phản hồi tôn trọng.',
    'Tổng hợp ý kiến, rút ra kết luận và bài học cho bản thân.'
  ],
  intro: 'Bài thơ “Bàn tay bố” gợi ra một câu hỏi rất gần với tuổi mười bốn: “Bố mẹ nên để con tự lập đến đâu?” Văn học không chỉ để đọc – nó còn là điểm khởi đầu cho những cuộc trò chuyện về chính cuộc sống của chúng ta.',
  text: {
    title: 'Đoạn thảo luận mẫu: “Tự lập ở tuổi học trò – nên bắt đầu từ đâu?”',
    html: `<p><b>Nhóm trưởng An:</b> Bài thơ “Bàn tay bố” có câu “có những cái buông tay / cũng là một cách ôm”. Nhóm mình bàn: học sinh lớp 8 nên tự lập như thế nào?</p>
<p><b>Bình:</b> Mình nghĩ tự lập bắt đầu từ việc nhỏ: tự dậy đúng giờ, tự chuẩn bị sách vở. Hồi trước mẹ mình phải gọi ba lần, giờ mình đặt báo thức và tự dậy.</p>
<p><b>Chi:</b> Mình đồng ý, và bổ sung: tự lập còn là tự học. Như cậu bé trong bài “Những ô cửa sáng đèn” “lặng im giải nốt bài toán khó” – không phải lúc nào cũng hỏi đáp án ngay.</p>
<p><b>Dũng:</b> Nhưng mình băn khoăn: nếu cái gì cũng tự làm thì có khi làm sai, mất thời gian. Có nên nhờ bố mẹ không?</p>
<p><b>An:</b> Ý hay. Các bạn nghĩ sao?</p>
<p><b>Chi:</b> Mình nghĩ tự lập không có nghĩa là không nhờ ai. Mình cứ thử trước, khi thật sự khó thì hỏi – như bố trong bài thơ vẫn “đứng lặng” phía sau.</p>
<p><b>An:</b> Vậy nhóm mình thống nhất: tự lập bắt đầu từ việc nhỏ hằng ngày, tự thử trước khi nhờ, và biết hỏi đúng lúc.</p>`,
    source: 'Đoạn thảo luận mẫu do nhóm biên soạn tự viết; các câu thơ dẫn trích từ bài thơ do nhóm biên soạn sáng tác.'
  },
  steps: [
    { title: 'Tìm vấn đề từ tác phẩm văn học', html: `<table class="tbl"><tr><th>Tác phẩm đã học</th><th>Vấn đề đời sống gợi ra</th></tr>
      <tr><td>“Bàn tay bố”</td><td>Tự lập ở tuổi học trò; tình cha con</td></tr>
      <tr><td>“Những ô cửa sáng đèn”</td><td>Lan toả yêu thương; sự gắn kết cộng đồng</td></tr>
      <tr><td>“Cái bơm xe của ông Sáu”</td><td>Lòng biết ơn; đừng đánh giá người qua vẻ ngoài</td></tr>
      <tr><td>“Món quà bằng gỗ”</td><td>Giá trị của món quà; cách trao và nhận</td></tr></table>
      <div class="box key">Vấn đề tốt để thảo luận: gần gũi, có nhiều cách nhìn, gắn với trải nghiệm của lứa tuổi.</div>` },
    { title: 'Chuẩn bị ý kiến', html: `<p>Mỗi thành viên chuẩn bị ý kiến theo sơ đồ:</p>`,
      svg: S.flow({ items: [{ title: 'Ý kiến', text: 'Em nghĩ gì?' }, { title: 'Lí lẽ', text: 'Vì sao?' }, { title: 'Bằng chứng', text: 'Từ tác phẩm và đời sống' }, { title: 'Dự kiến phản biện', text: 'Bạn có thể hỏi gì?' }] }),
      caption: 'Chuẩn bị ý kiến cá nhân trước khi thảo luận.' },
    { title: 'Dùng bằng chứng từ tác phẩm', html: `<p>Điểm đặc biệt của bài thảo luận này là <b>kết nối văn học với đời sống</b>:</p>
      <ul><li>Dẫn câu thơ, chi tiết truyện ngắn gọn, chính xác (như Chi dẫn “lặng im giải nốt bài toán khó”).</li><li>Giải thích chi tiết ấy liên quan thế nào đến vấn đề.</li><li>Kết hợp bằng chứng đời sống: trải nghiệm bản thân, bạn bè, gia đình.</li></ul>` },
    { title: 'Thảo luận và phản hồi', html: `<ul><li>Nhóm trưởng nêu vấn đề, mời lần lượt phát biểu, khuyến khích phản biện.</li><li>Khi phản biện, dùng câu hỏi mở: “Nếu … thì sao?”, “Bạn có ví dụ nào không?”</li><li>Khi được phản biện, ghi nhận và làm rõ: “Ý bạn đúng một phần, mình bổ sung…”.</li><li>Thư kí ghi ý kiến theo nhóm: đồng thuận – còn khác biệt.</li></ul>` },
    { title: 'Kết luận và bài học', html: `<p>Kết luận tổng hợp những điểm đồng thuận, ghi nhận điểm còn khác biệt, rút ra bài học hành động. Ví dụ: <i>“Tự lập bắt đầu từ việc nhỏ: tự dậy, tự chuẩn bị, tự học; tự thử trước khi nhờ; biết hỏi đúng lúc. Mỗi bạn chọn một việc để tự làm trong tuần tới.”</i></p>` }
  ],
  summary: 'Thảo luận về vấn đề đời sống gợi ra từ tác phẩm văn học cần: chọn vấn đề gần gũi, có nhiều cách nhìn; chuẩn bị ý kiến với lí lẽ, bằng chứng (từ tác phẩm và đời sống) và dự kiến phản biện; thảo luận tôn trọng, dùng câu hỏi mở; tổng hợp kết luận và bài học hành động.',
  examples: [
    { title: 'Xác định vấn đề', problem: 'Từ truyện “Cái bơm xe của ông Sáu”, hãy nêu một vấn đề phù hợp để thảo luận.', solution: 'Ví dụ: “Học sinh có nên đánh giá người khác qua vẻ bề ngoài?” hoặc “Làm thế nào để bày tỏ lòng biết ơn với những người lao động thầm lặng quanh ta?” Đây là những vấn đề gần gũi, có nhiều cách nhìn và gắn với trải nghiệm của lứa tuổi.' },
    { title: 'Dùng bằng chứng từ tác phẩm', problem: 'Dẫn một chi tiết từ bài thơ “Bàn tay bố” làm bằng chứng cho ý kiến “Cha mẹ yêu thương con bằng cách để con tự lập”.', solution: 'Chi tiết bàn tay bố “từng buông con ra / trên chiếc xe đạp chòng chành / rồi đứng lặng / nhìn con tự đi”. Bố không giữ mãi vì biết con phải tự đi; nhưng bố vẫn đứng đó dõi theo. Điều đó cho thấy để con tự lập cũng là một cách yêu thương.' },
    { title: 'Phản biện bằng câu hỏi mở', problem: 'Viết một câu phản biện dạng câu hỏi mở cho ý kiến: “Tự lập là không nhờ ai giúp.”', solution: 'Ví dụ: “Nếu gặp bài toán quá khó mà đã thử nhiều cách vẫn không giải được, thì việc hỏi thầy cô có phải là thiếu tự lập không?”' }
  ],
  exercises: [
    { question: 'Chọn một tác phẩm đã học trong học kì II và nêu một vấn đề đời sống để thảo luận, kèm hai câu hỏi gợi mở.', hints: ['Vấn đề gần gũi với học sinh lớp 8.', 'Câu hỏi gợi mở nhiều cách trả lời.'], solution: 'Ví dụ: Tác phẩm “Món quà bằng gỗ”. Vấn đề: “Món quà ý nghĩa là món quà như thế nào?” Câu hỏi: (1) Có nên tặng quà đắt tiền cho bạn trong dịp sinh nhật? (2) Ta nên phản ứng thế nào khi nhận một món quà không như mong đợi?' },
    { question: 'Chuẩn bị ý kiến cá nhân theo sơ đồ: ý kiến – lí lẽ – bằng chứng (1 từ tác phẩm, 1 từ đời sống) – dự kiến phản biện.', hints: ['Dùng vấn đề ở bài tập 1.', 'Dự đoán bạn sẽ hỏi gì và chuẩn bị trả lời.'], solution: 'Ví dụ: Ý kiến: món quà ý nghĩa là món quà thể hiện sự quan tâm. Lí lẽ: người nhận cảm thấy mình được thấu hiểu. Bằng chứng: Minh khắc con mèo Hằng hay kể (tác phẩm); tấm thiệp em gái tự vẽ tặng em (đời sống). Dự kiến phản biện: “Quà tự làm có bị coi là rẻ tiền không?” – Trả lời: giá trị nằm ở tấm lòng; người biết quý sẽ trân trọng.' },
    { question: 'Viết lời kết luận (3 – 4 câu) của nhóm trưởng sau cuộc thảo luận về vấn đề em chọn.', hints: ['Tổng hợp điểm đồng thuận.', 'Ghi nhận điểm khác biệt và nêu bài học hành động.'], solution: 'Ví dụ: “Như vậy, nhóm mình thống nhất: món quà ý nghĩa là món quà thể hiện sự quan tâm, không nhất thiết đắt tiền. Bạn Dũng vẫn cho rằng quà mua sẵn cũng có thể ý nghĩa nếu chọn kĩ – nhóm ghi nhận ý kiến này. Tuần tới, mỗi bạn sẽ thử làm một tấm thiệp tặng người thân.”' }
  ],
  quiz: [
    { type: 'mcq', q: 'Vấn đề nào phù hợp để thảo luận, gợi ra từ bài thơ “Bàn tay bố”?', options: ['Tự lập ở tuổi học trò', 'Giá xăng dầu', 'Cách trồng lúa nước', 'Lịch sử thế giới cổ đại'], answer: 0, explain: 'Gắn với ý thơ “buông tay”.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Trong buổi thảo luận này, bằng chứng có thể lấy từ tác phẩm văn học và từ đời sống.', answer: true, explain: 'Kết nối văn học với đời sống.' },
    { type: 'short', q: 'Theo sơ đồ chuẩn bị ý kiến, sau “ý kiến” và “lí lẽ” là bước gì?', answer: ['bằng chứng', 'bang chung'], answerText: 'bằng chứng', explain: 'Ý kiến – lí lẽ – bằng chứng – dự kiến phản biện.' },
    { type: 'mcq', q: 'Câu phản biện nào mang tính xây dựng?', options: ['“Nếu đã thử nhiều cách mà vẫn không làm được thì sao?”', '“Ý bạn vô lí quá.”', '“Bạn chẳng hiểu gì.”', '“Thôi, khỏi bàn.”'], answer: 0, explain: 'Câu hỏi mở, tôn trọng.' },
    { type: 'mcq', q: 'Kết luận của cuộc thảo luận nên có:', options: ['điểm đồng thuận, điểm còn khác biệt và bài học hành động', 'chỉ ý kiến của nhóm trưởng', 'danh sách bạn nói sai', 'lời phê bình cá nhân'], answer: 0, explain: 'Kết luận toàn diện.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khi dẫn chứng từ tác phẩm, có thể dẫn sai lời thơ miễn đúng ý.', answer: false, explain: 'Cần dẫn chính xác.' },
    { type: 'short', q: 'Trong đoạn thảo luận mẫu, nhóm bàn về vấn đề gì (một từ ghép hai tiếng, “tự …”)?', answer: ['tự lập', 'tu lap'], answerText: 'tự lập', explain: 'Tự lập ở tuổi học trò.' },
    { type: 'mcq', q: 'Khi bị phản biện, người nói nên:', options: ['ghi nhận và làm rõ, bổ sung ý kiến', 'im lặng bỏ đi', 'phản bác gay gắt', 'đổi chủ đề'], answer: 0, explain: 'Thái độ cầu thị.' }
  ]
});
})();
