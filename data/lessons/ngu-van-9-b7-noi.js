/* Ngữ văn 9 – Bài 7. Nói và nghe: Thảo luận về một vấn đề đáng quan tâm trong đời sống được gợi ra từ tác phẩm văn học – “Tuổi thơ gắn với thiên nhiên hay với màn hình?” (gợi từ bài thơ “Cánh diều tuổi thơ”). Kịch bản thảo luận mẫu do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-9/b7-noi', {
  objectives: [
    'Thảo luận về vấn đề đời sống gợi ra từ một bài thơ: tuổi thơ gắn với thiên nhiên và tuổi thơ gắn với thiết bị số.',
    'Trình bày ý kiến có lí lẽ, bằng chứng; biết nhìn vấn đề đa chiều, tránh cực đoan.',
    'Lắng nghe, tóm tắt ý kiến người khác; cùng đưa ra giải pháp khả thi.'
  ],
  intro: 'Bài thơ “Cánh diều tuổi thơ” khép lại bằng nỗi thèm “một chiều quê chạng vạng”. Nhiều bạn nhỏ hôm nay lớn lên bên máy tính bảng hơn là cánh diều. Điều đó đáng lo hay chỉ là sự thay đổi tự nhiên?',
  text: {
    title: 'Kịch bản thảo luận mẫu: “Cánh diều và màn hình”',
    html: `<p><b>Điều phối (Vy):</b> Bài thơ gợi nỗi nhớ tuổi thơ với cánh diều, tiếng sáo. Vấn đề nhóm mình bàn: Trẻ em ngày nay có đang mất đi tuổi thơ gắn với thiên nhiên không?</p>
<p><b>Nam:</b> Mình nghĩ là có. Em trai mình học lớp 3, cuối tuần chỉ muốn xem video. Theo mình quan sát, nhiều bạn nhỏ ít chạy nhảy ngoài trời, dễ cận thị và ngại giao tiếp.</p>
<p><b>Hà:</b> Mình đồng ý một phần. Nhưng thiết bị số không xấu: em gái mình học vẽ, học tiếng Anh qua ứng dụng rất tiến bộ. Vấn đề là <b>cách dùng</b>, không phải bản thân thiết bị.</p>
<p><b>Phong:</b> Mình bổ sung: nhiều bạn ở thành phố muốn chơi ngoài trời nhưng thiếu sân chơi. Không thể chỉ trách trẻ em.</p>
<p><b>Vy:</b> Vậy tóm lại: có dấu hiệu trẻ em ít gắn bó với thiên nhiên; nguyên nhân gồm thói quen dùng thiết bị, thiếu không gian chơi, cha mẹ bận rộn; thiết bị số cũng có mặt tích cực. Giải pháp?</p>
<p><b>Hà:</b> Gia đình đặt “giờ không màn hình”, ví dụ bữa tối và trước khi ngủ.</p>
<p><b>Nam:</b> Cuối tuần cả nhà đi công viên, về quê, thả diều – như trong bài thơ.</p>
<p><b>Phong:</b> Nhà trường, khu dân cư có thể tổ chức hoạt động ngoài trời, trồng cây, dã ngoại.</p>
<p><b>Vy:</b> Nhóm thống nhất: cân bằng giữa thế giới số và thế giới thật; mỗi bạn về nhà đề xuất với gia đình một “giờ không màn hình”.</p>`,
    source: 'Kịch bản do nhóm biên soạn tự viết; tên nhân vật là giả định; các ví dụ là trải nghiệm giả định, không phải số liệu khảo sát.'
  },
  steps: [
    { title: 'Từ bài thơ đến vấn đề đời sống', html: `<ul><li>Bài thơ: tuổi thơ gắn với cánh diều, tiếng sáo, gió đồng ↔ phố thị “khói mờ bay”.</li>
      <li>Vấn đề gợi ra: tuổi thơ hôm nay gắn với thiên nhiên hay với màn hình?</li>
      <li>Đây là vấn đề có nhiều ý kiến khác nhau → phù hợp để thảo luận.</li></ul>` },
    { title: 'Nhìn vấn đề đa chiều', html: `<p>Tránh nhìn một chiều “màn hình là xấu”:</p>`,
      svg: S.mindmap({ center: 'Tuổi thơ và màn hình', branches: [{ title: 'Thực trạng', items: ['Ít chơi ngoài trời', 'Dùng thiết bị nhiều'] }, { title: 'Nguyên nhân', items: ['Thói quen', 'Thiếu sân chơi'] }, { title: 'Mặt tích cực', items: ['Học tập qua ứng dụng', 'Kết nối'] }, { title: 'Giải pháp', items: ['Giờ không màn hình', 'Hoạt động ngoài trời'] }] }),
      caption: 'Các khía cạnh của vấn đề.' },
    { title: 'Kĩ năng tham gia thảo luận', html: `<ul><li>Đồng ý một phần: “Mình đồng ý một phần. Nhưng…” (Hà).</li>
      <li>Bổ sung góc nhìn mới: “Không thể chỉ trách trẻ em” (Phong).</li>
      <li>Điều phối <b>tóm tắt</b> trước khi chuyển sang giải pháp.</li>
      <li>Khi nêu bằng chứng từ trải nghiệm, nói rõ “theo mình quan sát” – không khẳng định như số liệu.</li></ul>`,
      svg: S.flow({ w: 620, items: [{ title: 'Nêu vấn đề', text: 'Từ bài thơ' }, { title: 'Thực trạng, nguyên nhân', text: 'Nhiều góc nhìn' }, { title: 'Tóm tắt', text: 'Điều phối' }, { title: 'Giải pháp', text: 'Việc làm cụ thể' }] }),
      caption: 'Tiến trình buổi thảo luận.' },
    { title: 'Đánh giá', html: `<table class="tbl"><tr><th>Tiêu chí</th><th>Mức độ</th></tr>
      <tr><td>Ý kiến gắn với tác phẩm và đời sống</td><td>☐ Tốt ☐ Chưa</td></tr>
      <tr><td>Nhìn vấn đề đa chiều, không cực đoan</td><td>☐ Tốt ☐ Chưa</td></tr>
      <tr><td>Lắng nghe, phản hồi tôn trọng</td><td>☐ Tốt ☐ Chưa</td></tr>
      <tr><td>Giải pháp cụ thể, khả thi</td><td>☐ Tốt ☐ Chưa</td></tr></table>` }
  ],
  summary: 'Thảo luận vấn đề gợi từ bài thơ: xác định vấn đề (tuổi thơ gắn với thiên nhiên hay màn hình), xem xét thực trạng, nguyên nhân, mặt tích cực và tiêu cực, tránh cực đoan; dùng các cách phản hồi đồng ý một phần, bổ sung; điều phối tóm tắt rồi hướng tới giải pháp cụ thể (giờ không màn hình, hoạt động ngoài trời, cân bằng thế giới số và thế giới thật).',
  examples: [
    { title: 'Ý kiến đa chiều', problem: 'Vì sao ý kiến của Hà giúp buổi thảo luận sâu hơn?', solution: 'Hà không phủ nhận thực trạng nhưng chỉ ra mặt tích cực của thiết bị số (học vẽ, học tiếng Anh) và chuyển trọng tâm sang “cách dùng”. Nhờ vậy nhóm tránh kết luận cực đoan “màn hình là xấu” và tìm giải pháp cân bằng.' },
    { title: 'Vai trò của tóm tắt', problem: 'Lời tóm tắt của Vy có tác dụng gì?', solution: 'Gom các ý đã nêu (thực trạng, nguyên nhân, mặt tích cực) thành một kết luận tạm thời, giúp cả nhóm thấy rõ đã bàn đến đâu và chuyển mạch lạc sang phần giải pháp.' },
    { title: 'Bằng chứng thận trọng', problem: 'Vì sao Nam nói “Theo mình quan sát”?', solution: 'Vì đó là trải nghiệm cá nhân (em trai, các bạn nhỏ quanh mình), không phải số liệu khảo sát. Nói rõ nguồn bằng chứng giúp ý kiến trung thực, người nghe đánh giá đúng mức độ tin cậy.' }
  ],
  exercises: [
    { question: 'Nêu một vấn đề đời sống khác được gợi ra từ bài thơ “Gửi lớp chín” và hai câu hỏi để mở đầu thảo luận.', hints: ['Tình bạn, lòng biết ơn thầy cô, chọn hướng đi sau lớp 9.', 'Câu hỏi mở, nhiều cách trả lời.'], solution: 'Ví dụ vấn đề: “Giữ gìn tình bạn khi mỗi người một ngả sau lớp 9”. Câu hỏi: (1) Vì sao nhiều tình bạn phai nhạt khi chuyển trường? (2) Mạng xã hội giúp hay không giúp giữ gìn tình bạn thật sự?' },
    { question: 'Viết lời phát biểu (5 – 6 câu) thể hiện ý kiến “đồng ý một phần” với quan điểm: “Trẻ em bây giờ không còn tuổi thơ”.', hints: ['Công nhận điểm hợp lí.', 'Nêu điểm chưa hợp lí, kèm lí do.'], solution: 'Ví dụ: Mình đồng ý một phần với ý kiến này. Đúng là nhiều bạn nhỏ bây giờ ít được chạy nhảy ngoài đồng, thả diều, tắm sông như ông bà, cha mẹ ngày xưa. Nhưng nói “không còn tuổi thơ” thì mình thấy chưa thật đúng. Tuổi thơ hôm nay chỉ khác đi: các em có câu lạc bộ, sân chơi, những chuyến dã ngoại cùng trường. Điều quan trọng là người lớn và chính các em biết cân bằng, để tuổi thơ có cả thế giới số lẫn thiên nhiên.' },
    { question: 'Đề xuất một kế hoạch “Cuối tuần không màn hình” cho gia đình em (3 – 4 hoạt động).', hints: ['Hoạt động ngoài trời, cùng cả nhà.', 'Thời gian cụ thể.'], solution: 'Ví dụ: Sáng thứ Bảy – cả nhà đạp xe quanh hồ (7h – 8h). Chiều – cùng làm một cánh diều giấy và thả ở bãi cỏ gần nhà. Tối – đọc sách chung và kể chuyện, không mở ti vi, điện thoại từ 19h – 21h. Chủ nhật – trồng rau ở ban công, ghi nhật kí cây lớn.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Vấn đề trong buổi thảo luận được gợi ra từ bài thơ:', options: ['“Cánh diều tuổi thơ”', '“Đây thôn Vĩ Dạ”', '“Truyện Kiều”', '“Chinh phụ ngâm”'], answer: 0, explain: 'Nỗi nhớ tuổi thơ với cánh diều.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nhìn vấn đề đa chiều nghĩa là chỉ nêu mặt tiêu cực của thiết bị số.', answer: false, explain: 'Cần xem cả mặt tích cực và tiêu cực.' },
    { type: 'short', q: 'Giải pháp Hà đề xuất cho gia đình: đặt “giờ không màn …” (một chữ).', answer: ['hình', 'hinh'], answerText: 'hình', explain: '“giờ không màn hình”.' },
    { type: 'mcq', q: 'Câu “Mình đồng ý một phần. Nhưng…” thể hiện cách phản hồi:', options: ['đồng ý một phần, bổ sung ý khác', 'phản đối hoàn toàn', 'im lặng', 'chuyển chủ đề'], answer: 0, explain: 'Tôn trọng và đa chiều.' },
    { type: 'mcq', q: 'Theo Phong, một nguyên nhân khiến trẻ em thành phố ít chơi ngoài trời là:', options: ['thiếu sân chơi', 'thời tiết quá đẹp', 'có quá nhiều công viên', 'không thích thiết bị số'], answer: 0, explain: '“Không thể chỉ trách trẻ em”.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khi dùng trải nghiệm cá nhân làm bằng chứng, nên nói rõ đó là quan sát của mình.', answer: true, explain: 'Trung thực về nguồn bằng chứng.' },
    { type: 'short', q: 'Kết luận của nhóm: cần … bằng giữa thế giới số và thế giới thật (một chữ).', answer: ['cân', 'can'], answerText: 'cân', explain: 'cân bằng.' },
    { type: 'mcq', q: 'Trước khi chuyển sang giải pháp, người điều phối nên:', options: ['tóm tắt các ý kiến đã nêu', 'kết thúc thảo luận', 'phê bình thành viên', 'đổi đề tài'], answer: 0, explain: 'Giúp mạch thảo luận rõ ràng.' }
  ]
});
})();
