/* GDCD 7 – Bài 3. Học tập tự giác, tích cực. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('gdcd-7/bai-3', {
  objectives: [
    'Nêu được các biểu hiện của học tập tự giác, tích cực.',
    'Hiểu được vì sao phải học tập tự giác, tích cực.',
    'Lập được và thực hiện kế hoạch học tập; góp ý, nhắc nhở bạn bè chưa tự giác học tập.'
  ],
  intro: 'Không cần bố mẹ nhắc, mỗi tối Phúc tự ngồi vào bàn học đúng 19 giờ; gặp bài khó, Phúc ghi lại để hỏi cô vào hôm sau. Đó là <b>học tập tự giác, tích cực</b>.',
  steps: [
    { title: 'Thế nào là học tập tự giác, tích cực?', html: `<ul><li><b>Tự giác</b>: chủ động học tập, không cần ai nhắc nhở, giám sát.</li><li><b>Tích cực</b>: hăng hái, nỗ lực, sáng tạo trong học tập; chủ động tìm tòi, đặt câu hỏi, vượt khó.</li></ul>` },
    { title: 'Biểu hiện', html: `<p>Học tập tự giác, tích cực thể hiện ở trên lớp và ở nhà:</p>`,
      svg: S.compare({ title: 'Tự giác, tích cực và trái ngược', left: { h: 'Tự giác, tích cực', items: ['Chủ động chuẩn bị bài trước', 'Hăng hái phát biểu, đặt câu hỏi', 'Tự lập kế hoạch học tập', 'Tìm thêm tài liệu tham khảo'] }, right: { h: 'Thiếu tự giác', items: ['Chỉ học khi bị nhắc', 'Làm việc riêng trong giờ học', 'Chép bài làm của bạn', 'Học đối phó trước kiểm tra'] } }), caption: 'Tự giác là động lực bên trong.' },
    { title: 'Lập kế hoạch học tập', html: `<p>Thời gian biểu giúp học đều đặn, cân bằng giữa học và nghỉ:</p>`,
      svg: S.table({ title: 'Thời gian biểu buổi tối (ví dụ)', head: ['Thời gian', 'Việc làm'], rows: [['19:00 – 19:45', 'Làm bài tập Toán'], ['19:45 – 20:00', 'Nghỉ, vận động nhẹ'], ['20:00 – 20:45', 'Ôn Ngữ văn, đọc sách'], ['20:45 – 21:00', 'Chuẩn bị sách vở ngày mai'], ['22:00', 'Đi ngủ']], colW: 220 }), caption: 'Xen kẽ học và nghỉ để giữ tập trung.' },
    { title: 'Ý nghĩa', html: `<p>Học tập tự giác, tích cực giúp nắm vững kiến thức, rèn kĩ năng, tiến bộ nhanh, đạt kết quả cao; hình thành thói quen tự học suốt đời; được thầy cô, bạn bè tin yêu.</p>
      <div class="box key">Tự giác: không cần nhắc. Tích cực: chủ động, nỗ lực, sáng tạo.</div>` }
  ],
  summary: 'Học tập tự giác là chủ động học không cần nhắc nhở; tích cực là hăng hái, nỗ lực, sáng tạo, chủ động tìm tòi. Biểu hiện: chuẩn bị bài, phát biểu, lập kế hoạch, tìm tài liệu. Học tự giác, tích cực giúp tiến bộ, đạt kết quả cao, hình thành thói quen tự học suốt đời. Cần lập thời gian biểu và thực hiện đều đặn.',
  examples: [
    { title: 'Nhận diện', problem: 'Hà chỉ học khi mẹ đứng bên cạnh nhắc. Hà đã học tập tự giác chưa?', solution: 'Chưa; Hà cần tự lập thời gian biểu và tự thực hiện.' },
    { title: 'Tích cực', problem: 'Đọc bài trước khi đến lớp, Minh ghi lại 2 câu hỏi để hỏi thầy. Minh thể hiện điều gì?', solution: 'Học tập tích cực, chủ động tìm tòi.' },
    { title: 'Tính thời gian', problem: 'Theo thời gian biểu ở bước 3, tổng thời gian học (không kể nghỉ và chuẩn bị sách vở) là bao nhiêu phút?', solution: '45 + 45 = 90 phút.' }
  ],
  exercises: [
    { question: 'Lập thời gian biểu học tập buổi tối cho bản thân.', hints: ['Chia các môn, có thời gian nghỉ.', 'Đi ngủ đúng giờ.'], solution: 'Học sinh tự lập; cần có khung giờ cụ thể, xen kẽ nghỉ, đi ngủ trước 22 giờ.' },
    { question: 'Bạn em hay làm việc riêng trong giờ học. Em góp ý thế nào?', hints: ['Góp ý tế nhị, lúc riêng tư.', 'Nêu tác hại và cách thay đổi.'], solution: 'Góp ý riêng: làm việc riêng sẽ bỏ lỡ kiến thức, ảnh hưởng kết quả; rủ bạn cùng tập trung, cùng ôn bài.' },
    { question: 'Mỗi ngày tự học 90 phút, 6 ngày/tuần. Một tuần tự học bao nhiêu giờ?', hints: ['90 × 6 phút.', 'Đổi ra giờ.'], solution: '540 phút = 9 giờ.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Học tập tự giác là chủ động học không cần người khác nhắc nhở.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Biểu hiện học tập tích cực:', options: ['Hăng hái phát biểu, đặt câu hỏi', 'Làm việc riêng', 'Chép bài bạn', 'Chỉ học khi bị nhắc'], answer: 0, explain: 'Tích cực.' },
    { type: 'mcq', q: 'Biểu hiện thiếu tự giác:', options: ['Học đối phó trước kiểm tra', 'Lập kế hoạch học tập', 'Chuẩn bị bài trước', 'Tìm thêm tài liệu'], answer: 0, explain: 'Đối phó.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Học liên tục nhiều giờ không nghỉ là cách học hiệu quả nhất.', answer: false, explain: 'Cần xen kẽ nghỉ.' },
    { type: 'short', q: 'Tự học 75 phút mỗi ngày trong 4 ngày. Tổng bao nhiêu giờ?', answer: '5', unit: 'giờ', calc: '75*4/60', explain: '300 phút = 5 giờ.' },
    { type: 'short', q: 'Kế hoạch đọc 120 trang sách, mỗi ngày đọc 15 trang. Cần bao nhiêu ngày?', answer: '8', unit: 'ngày', calc: '120/15', explain: '8.' },
    { type: 'mcq', q: 'Ý nghĩa của học tập tự giác, tích cực:', options: ['hình thành thói quen tự học suốt đời', 'không cần thầy cô', 'chỉ để được khen', 'không có ý nghĩa'], answer: 0, explain: 'Đúng.' },
    { type: 'mcq', q: 'Công cụ giúp học tập đều đặn:', options: ['thời gian biểu', 'trò chơi điện tử', 'mạng xã hội', 'xem phim khuya'], answer: 0, explain: 'Thời gian biểu.' }
  ]
});
})();
