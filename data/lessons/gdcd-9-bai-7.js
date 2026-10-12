/* GDCD 9 – Bài 7. Thích ứng với thay đổi. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('gdcd-9/bai-7', {
  objectives: [
    'Nêu được một số thay đổi có thể xảy ra trong cuộc sống của bản thân.',
    'Nêu được ý nghĩa của việc thích ứng trước những thay đổi.',
    'Biết cách thích ứng với một số thay đổi (nếu có) trong cuộc sống.',
    'Giữ được thái độ tích cực, chủ động trước thay đổi.'
  ],
  intro: 'Bố mẹ chuyển công tác, Việt phải chuyển từ Huế vào Đà Lạt học lớp 9. Trường mới, bạn mới, khí hậu lạnh hơn, Việt thấy lạc lõng và buồn. Sau vài tuần, Việt chủ động làm quen, tham gia câu lạc bộ cờ vua và dần thấy yêu nơi ở mới. Việt đã biết <b>thích ứng với thay đổi</b>.',
  steps: [
    { title: 'Những thay đổi trong cuộc sống', html: `<p>Thay đổi có thể đến từ:</p>`,
      svg: S.mindmap({ center: 'Thay đổi trong cuộc sống', branches: [{ title: 'Bản thân', items: ['Tuổi dậy thì', 'Ốm đau, tai nạn'] }, { title: 'Gia đình', items: ['Chuyển nhà', 'Kinh tế khó khăn'] }, { title: 'Học tập', items: ['Chuyển trường', 'Chuyển cấp, thi cử'] }, { title: 'Xã hội', items: ['Thiên tai, dịch bệnh', 'Công nghệ mới'] }], w: 640, size: 13 }), caption: 'Thay đổi có thể tích cực hoặc tiêu cực.' },
    { title: 'Ý nghĩa của thích ứng', html: `<ul><li>Giúp bình tĩnh, giảm lo âu, căng thẳng.</li><li>Nhanh chóng ổn định học tập, sinh hoạt.</li><li>Biến thay đổi thành cơ hội để trưởng thành, học điều mới.</li></ul>` },
    { title: 'Cách thích ứng', html: `<p>Các bước:</p>`,
      svg: S.flowchart({ title: 'Thích ứng với thay đổi', steps: [{ t: 'start', s: 'Gặp thay đổi' }, { t: 'proc', s: 'Chấp nhận, gọi tên cảm xúc' }, { t: 'proc', s: 'Tìm hiểu tình hình mới' }, { t: 'if', s: 'Tự giải quyết được?', yes: 'Lập kế hoạch', no: 'Tìm người hỗ trợ' }, { t: 'end', s: 'Trưởng thành' }] }), caption: 'Nhìn vào điều mình có thể làm.' },
    { title: 'Thái độ tích cực', html: `<ul><li>Suy nghĩ tích cực: “Đây là dịp để mình học điều mới”.</li><li>Chủ động kết nối: làm quen bạn mới, tham gia hoạt động chung.</li><li>Giữ thói quen tốt: ngủ đủ, tập thể dục, chia sẻ với người thân.</li></ul>
      <div class="box key">Tránh: trốn tránh, tự cô lập, đổ lỗi, tìm đến game hay chất kích thích.</div>` }
  ],
  summary: 'Cuộc sống luôn có thay đổi: bản thân, gia đình, học tập, xã hội. Thích ứng giúp bình tĩnh, nhanh ổn định và trưởng thành. Cách thích ứng: chấp nhận và gọi tên cảm xúc, tìm hiểu tình hình mới, lập kế hoạch hành động, tìm người hỗ trợ khi cần, giữ thái độ tích cực.',
  examples: [
    { title: 'Tình huống của Việt', problem: 'Việt đã làm gì để thích ứng?', solution: 'Chủ động làm quen, tham gia câu lạc bộ, nhìn nhận tích cực về nơi ở mới.' },
    { title: 'Thay đổi do dịch bệnh', problem: 'Khi phải học trực tuyến, học sinh cần thích ứng thế nào?', solution: 'Học cách dùng nền tảng học trực tuyến, lập thời gian biểu, giữ liên lạc với thầy cô, bạn bè.' },
    { title: 'Theo dõi tiến bộ', problem: 'Tuần đầu Việt quen 2 bạn, mỗi tuần sau quen thêm 3 bạn. Sau 4 tuần quen bao nhiêu bạn?', solution: '2 + 3 × 3 = 11 bạn.' }
  ],
  exercises: [
    { question: 'Gia đình gặp khó khăn kinh tế, em cần thích ứng thế nào?', hints: ['Chi tiêu.', 'Chia sẻ việc nhà.'], solution: 'Tiết kiệm, không đòi hỏi; giúp bố mẹ việc nhà; động viên gia đình; tập trung học tập.' },
    { question: 'Mỗi ngày Việt đọc 10 trang tài liệu về Đà Lạt. Sau 2 tuần (14 ngày) đọc bao nhiêu trang?', hints: ['Nhân.', '10 × 14.'], solution: '140 trang.' },
    { question: 'Vì sao trốn tránh thay đổi không phải là cách tốt?', hints: ['Thay đổi có tự biến mất?', 'Hậu quả.'], solution: 'Vì thay đổi vẫn diễn ra; trốn tránh khiến khó khăn kéo dài, dễ căng thẳng và bỏ lỡ cơ hội.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Biết thích ứng giúp con người nhanh chóng ổn định khi có thay đổi.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Cách thích ứng tích cực khi chuyển trường:', options: ['Chủ động làm quen bạn mới', 'Tự cô lập', 'Đòi về trường cũ', 'Bỏ học'], answer: 0, explain: 'Đúng.' },
    { type: 'short', q: 'Tuần đầu quen 2 bạn, mỗi tuần sau thêm 3 bạn. Sau 4 tuần quen bao nhiêu bạn?', answer: '11', unit: 'bạn', calc: '2+3*3', explain: '11.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mọi thay đổi trong cuộc sống đều tiêu cực.', answer: false, explain: 'Có thay đổi tích cực.' },
    { type: 'mcq', q: 'Thái độ cần tránh khi gặp thay đổi:', options: ['Đổ lỗi, trốn tránh', 'Bình tĩnh', 'Tìm người hỗ trợ', 'Lập kế hoạch'], answer: 0, explain: 'Tiêu cực.' },
    { type: 'short', q: 'Đọc 10 trang/ngày trong 14 ngày. Tổng bao nhiêu trang?', answer: '140', unit: 'trang', calc: '10*14', explain: '140.' },
    { type: 'mcq', q: 'Thay đổi thuộc nhóm “xã hội”:', options: ['Dịch bệnh', 'Tuổi dậy thì', 'Chuyển nhà', 'Bị ốm'], answer: 0, explain: 'Xã hội.' },
    { type: 'short', q: 'Ngủ 8 giờ mỗi đêm, một tuần ngủ bao nhiêu giờ?', answer: '56', unit: 'giờ', calc: '8*7', explain: '56.' }
  ]
});
})();
