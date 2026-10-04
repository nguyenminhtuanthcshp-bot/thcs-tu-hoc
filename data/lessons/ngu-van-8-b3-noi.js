/* Ngữ văn 8 – Bài 3. Nói và nghe: Thảo luận về một vấn đề trong đời sống phù hợp với lứa tuổi (ý thức trách nhiệm với cộng đồng của học sinh). Tình huống, lời thoại mẫu do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-8/b3-noi', {
  objectives: [
    'Biết chuẩn bị và tham gia thảo luận nhóm về vấn đề ý thức trách nhiệm với cộng đồng của học sinh.',
    'Trình bày ý kiến rõ ràng, có lí lẽ và bằng chứng; biết đặt câu hỏi, bổ sung, phản biện tôn trọng.',
    'Biết tổng hợp các ý kiến để đi đến kết luận chung của nhóm.'
  ],
  intro: 'Một cuộc thảo luận tốt không phải là nơi ai nói to hơn thì thắng, mà là nơi mọi người cùng nghĩ để tìm ra cách làm hay nhất. Hôm nay, nhóm em sẽ thảo luận: “Học sinh lớp 8 có thể làm gì để thể hiện trách nhiệm với cộng đồng?”',
  text: {
    title: 'Đoạn thảo luận mẫu (nhóm 4 bạn)',
    html: `<p><b>Nhóm trưởng Mai:</b> Hôm nay nhóm mình bàn: học sinh lớp 8 thể hiện trách nhiệm với cộng đồng thế nào. Mỗi bạn nêu một ý nhé, Nam trước đi.</p>
<p><b>Nam:</b> Mình nghĩ trước hết là giữ gìn trường lớp. Tuần trước lớp mình bị trừ điểm vì còn rác trong ngăn bàn. Nếu ai cũng tự dọn chỗ của mình thì không cần ai nhắc.</p>
<p><b>Hoa:</b> Mình đồng ý với Nam và bổ sung: trách nhiệm còn ở ngoài trường. Khu phố mình có nhóm bạn nhỏ cuối tuần dạy các em lớp 1 đọc sách. Lớp mình cũng làm được.</p>
<p><b>Tuấn:</b> Nhưng mình hơi lo: học đã nhiều, lấy đâu thời gian làm tình nguyện?</p>
<p><b>Mai:</b> Câu hỏi hay đó! Các bạn nghĩ sao?</p>
<p><b>Hoa:</b> Mình nghĩ không cần việc lớn. Mỗi tháng một buổi sáng Chủ nhật, hoặc việc hằng ngày như tắt điện, không xả rác, cũng là trách nhiệm.</p>
<p><b>Mai:</b> Vậy nhóm mình thống nhất: trách nhiệm với cộng đồng bắt đầu từ việc nhỏ hằng ngày và vài hoạt động vừa sức mỗi tháng. Mình sẽ tổng hợp để báo cáo trước lớp.</p>`,
    source: 'Đoạn thảo luận mẫu do nhóm biên soạn tự viết.'
  },
  steps: [
    { title: 'Chuẩn bị thảo luận', html: `<ul><li><b>Xác định vấn đề</b> và mục tiêu: đi đến những việc làm cụ thể học sinh có thể thực hiện.</li>
      <li><b>Phân vai:</b> nhóm trưởng (điều hành), thư kí (ghi chép), các thành viên, người báo cáo.</li>
      <li><b>Chuẩn bị ý kiến riêng:</b> mỗi bạn ghi 2 – 3 ý, kèm lí lẽ và bằng chứng (trải nghiệm, số liệu, tấm gương).</li>
      <li><b>Thống nhất quy tắc:</b> nói lần lượt, không ngắt lời, tôn trọng ý kiến khác, giữ thời gian.</li></ul>` },
    { title: 'Tiến trình một buổi thảo luận', html: `<p>Buổi thảo luận nhóm nên đi qua bốn chặng:</p>`,
      svg: S.flow({ items: [{ title: 'Mở đầu', text: 'Nêu vấn đề, mục tiêu' }, { title: 'Nêu ý kiến', text: 'Lần lượt từng bạn' }, { title: 'Trao đổi', text: 'Hỏi, bổ sung, phản biện' }, { title: 'Kết luận', text: 'Tổng hợp, thống nhất' }] }),
      caption: 'Bốn chặng của một buổi thảo luận nhóm.' },
    { title: 'Nói sao cho thuyết phục và tôn trọng', html: `<table class="tbl"><tr><th>Mục đích</th><th>Mẫu câu gợi ý</th></tr>
      <tr><td>Nêu ý kiến</td><td>“Theo mình…, vì…”; “Mình nghĩ rằng…, ví dụ như…”</td></tr>
      <tr><td>Đồng tình, bổ sung</td><td>“Mình đồng ý với bạn … và muốn bổ sung…”</td></tr>
      <tr><td>Chưa đồng tình</td><td>“Mình hiểu ý bạn, nhưng mình băn khoăn…”; “Nếu … thì sao?”</td></tr>
      <tr><td>Đề nghị làm rõ</td><td>“Bạn có thể nói rõ hơn về…?”</td></tr>
      <tr><td>Tổng hợp</td><td>“Như vậy, nhóm mình có … ý chính: …”</td></tr></table>` },
    { title: 'Vai trò của nhóm trưởng và thư kí', html: `<p><b>Nhóm trưởng:</b> mời từng bạn phát biểu, khuyến khích bạn ít nói, giữ cuộc thảo luận đúng hướng, chuyển câu hỏi khó cho cả nhóm (như Mai trong đoạn mẫu), chốt kết luận.</p>
      <p><b>Thư kí:</b> ghi ý kiến theo bảng: <i>Ý kiến – Người nêu – Lí lẽ/bằng chứng – Ý kiến khác</i>; đọc lại cho nhóm kiểm tra trước khi báo cáo.</p>` },
    { title: 'Báo cáo và đánh giá', html: `<p>Người báo cáo trình bày: vấn đề – các ý kiến chính – điểm còn khác nhau – kết luận chung và đề xuất hành động (ví dụ: lập “Tủ sách chia sẻ”, trực nhật “lớp học không rác”, mỗi tháng một buổi tình nguyện).</p>
      <table class="tbl"><tr><th>Tiêu chí tự đánh giá</th><th>Đạt?</th></tr><tr><td>Mỗi thành viên đều phát biểu</td><td>☐</td></tr><tr><td>Ý kiến có lí lẽ, bằng chứng</td><td>☐</td></tr><tr><td>Thái độ tôn trọng, không ngắt lời</td><td>☐</td></tr><tr><td>Có kết luận và đề xuất cụ thể</td><td>☐</td></tr></table>` }
  ],
  summary: 'Thảo luận nhóm cần chuẩn bị vấn đề, phân vai, ý kiến riêng có lí lẽ, bằng chứng; tiến hành qua bốn chặng: mở đầu – nêu ý kiến – trao đổi – kết luận. Khi nói, dùng mẫu câu tôn trọng để đồng tình, bổ sung hay phản biện; nhóm trưởng điều hành, thư kí ghi chép; cuối cùng tổng hợp thành kết luận và đề xuất hành động cụ thể.',
  examples: [
    { title: 'Phản biện tôn trọng', problem: 'Trong đoạn mẫu, Tuấn băn khoăn: “Học đã nhiều, lấy đâu thời gian làm tình nguyện?” Hãy viết một câu phản hồi vừa tôn trọng vừa thuyết phục.', solution: 'Ví dụ: “Mình hiểu nỗi lo của Tuấn, vì lịch học của tụi mình đúng là dày. Nhưng trách nhiệm với cộng đồng không nhất thiết là việc lớn; chỉ cần mỗi ngày tắt điện khi ra về, không xả rác, và mỗi tháng dành một buổi sáng Chủ nhật là được rồi.”' },
    { title: 'Nhận xét vai trò nhóm trưởng', problem: 'Chỉ ra hai việc làm tốt của nhóm trưởng Mai trong đoạn thảo luận mẫu.', solution: '(1) Mai nêu rõ vấn đề và mời từng bạn phát biểu theo lượt. (2) Khi Tuấn nêu băn khoăn, Mai khen câu hỏi và chuyển cho cả nhóm cùng suy nghĩ; cuối buổi, Mai tổng hợp ý kiến thành kết luận chung.' },
    { title: 'Tổng hợp ý kiến', problem: 'Viết câu kết luận tổng hợp cho cuộc thảo luận mẫu.', solution: '“Như vậy, nhóm mình thống nhất ba ý: một là giữ gìn trường lớp sạch đẹp hằng ngày; hai là tham gia hoạt động vừa sức ngoài trường như đọc sách cùng các em nhỏ; ba là thực hiện những thói quen tốt như tiết kiệm điện, không xả rác. Nhóm đề xuất mỗi tháng cả lớp có một buổi sáng tình nguyện.”' }
  ],
  exercises: [
    { question: 'Chuẩn bị phiếu ý kiến cá nhân (3 ý, mỗi ý có lí lẽ hoặc bằng chứng) cho vấn đề: “Học sinh có nên tham gia hoạt động tình nguyện ở địa phương?”', hints: ['Có thể nêu cả ý tán thành và lưu ý.', 'Bằng chứng: trải nghiệm của em, hoạt động ở trường, khu phố.'], solution: 'Ví dụ: (1) Nên tham gia vì giúp ích cho cộng đồng – bằng chứng: buổi dọn rác ở bờ sông do Đoàn phường tổ chức làm sạch cả đoạn đường dài. (2) Tình nguyện giúp học sinh rèn kĩ năng làm việc nhóm, giao tiếp – lí lẽ: phải phối hợp, phân công công việc. (3) Cần sắp xếp thời gian hợp lí, không ảnh hưởng học tập – lí lẽ: chọn hoạt động cuối tuần, có sự đồng ý của gia đình.' },
    { question: 'Viết 3 câu nói phù hợp cho ba tình huống: đồng tình và bổ sung; chưa đồng tình; đề nghị bạn làm rõ ý.', hints: ['Dùng mẫu câu trong bảng ở bước 3.', 'Luôn gọi tên bạn và ghi nhận ý của bạn trước.'], solution: 'Đồng tình: “Mình đồng ý với Lan là cần giữ vệ sinh lớp, và mình bổ sung thêm việc phân loại rác.” Chưa đồng tình: “Mình hiểu ý Hùng, nhưng mình băn khoăn nếu chỉ làm khi có kiểm tra thì có bền lâu không?” Làm rõ: “Minh có thể nói rõ hơn về cách tổ chức tủ sách chia sẻ được không?”' },
    { question: 'Một bạn trong nhóm liên tục ngắt lời người khác. Nếu là nhóm trưởng, em xử lí thế nào?', hints: ['Nhắc lại quy tắc một cách nhẹ nhàng.', 'Ghi nhận sự nhiệt tình của bạn, hẹn lượt phát biểu.'], solution: 'Em nhẹ nhàng nói: “Mình thấy bạn rất hăng hái, ý của bạn chắc chắn thú vị. Nhưng mình cùng giữ quy tắc nói lần lượt nhé, bạn ghi ý lại và phát biểu ngay sau khi Hoa nói xong.” Như vậy vừa giữ trật tự, vừa không làm bạn mất hứng.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Ai có nhiệm vụ điều hành, giữ cuộc thảo luận đúng hướng?', options: ['Nhóm trưởng', 'Thư kí', 'Người nghe', 'Giáo viên luôn luôn'], answer: 0, explain: 'Nhóm trưởng điều hành thảo luận.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Trong thảo luận, khi không đồng tình, có thể ngắt lời bạn để nói ý của mình ngay.', answer: false, explain: 'Cần chờ lượt, không ngắt lời.' },
    { type: 'mcq', q: 'Câu nào thể hiện sự phản biện tôn trọng?', options: ['“Mình hiểu ý bạn, nhưng mình băn khoăn…”', '“Bạn sai rồi!”', '“Ý đó vô lí.”', '“Thôi, nghe mình đi.”'], answer: 0, explain: 'Ghi nhận ý người khác trước khi nêu băn khoăn.' },
    { type: 'short', q: 'Người ghi chép các ý kiến trong buổi thảo luận nhóm gọi là gì?', answer: ['thư kí', 'thu ky', 'thư ký'], answerText: 'thư kí', explain: 'Thư kí ghi chép và đọc lại ý kiến.' },
    { type: 'mcq', q: 'Chặng cuối cùng của buổi thảo luận là:', options: ['tổng hợp, thống nhất kết luận', 'nêu vấn đề', 'phân vai', 'chào hỏi'], answer: 0, explain: 'Kết luận và đề xuất.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mỗi ý kiến trong thảo luận nên có lí lẽ hoặc bằng chứng đi kèm.', answer: true, explain: 'Giúp ý kiến thuyết phục.' },
    { type: 'short', q: 'Buổi thảo luận nhóm được chia thành mấy chặng theo sơ đồ trong bài?', answer: ['4', 'bốn'], answerText: '4', explain: 'Mở đầu – nêu ý kiến – trao đổi – kết luận.' },
    { type: 'mcq', q: 'Việc nào thể hiện trách nhiệm với cộng đồng vừa sức học sinh lớp 8?', options: ['Giữ vệ sinh lớp, không xả rác nơi công cộng', 'Tự ý sửa đường điện khu phố', 'Bỏ học để đi làm từ thiện', 'Chỉ đăng ảnh làm việc tốt lên mạng'], answer: 0, explain: 'Việc làm vừa sức, thiết thực.' }
  ]
});
})();
