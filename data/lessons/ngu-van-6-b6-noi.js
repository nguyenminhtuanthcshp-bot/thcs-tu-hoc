/* Ngữ văn 6 – Bài 6. Nói và nghe: Kể lại một truyền thuyết. Truyền thuyết dân gian (phạm vi công cộng), dàn ý do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-6/b6-noi', {
  objectives: [
    'Kể lại được một truyền thuyết bằng lời của mình, đúng các sự việc chính, giữ được chi tiết kì ảo.',
    'Biết chuẩn bị: chọn truyện, tóm tắt sự việc, lập dàn ý, luyện kể với giọng điệu phù hợp.',
    'Biết lắng nghe, nhận xét bài kể của bạn theo bảng kiểm.'
  ],
  intro: 'Ngày xưa, truyền thuyết sống được là nhờ người kể: ông bà kể cho con cháu, người làng kể cho nhau nghe bên bếp lửa. Hôm nay, em sẽ là người tiếp nối, kể lại một truyền thuyết như Thánh Gióng, Sơn Tinh – Thuỷ Tinh hay Sự tích Hồ Gươm.',
  steps: [
    { title: 'Yêu cầu bài kể', html: `<ul><li>Kể đúng <b>cốt truyện</b> và các <b>sự việc chính</b>; có thể thêm lời dẫn, cảm xúc nhưng không làm sai lệch truyện.</li><li>Giữ các <b>chi tiết kì ảo</b> tiêu biểu.</li><li>Dùng <b>ngôi thứ ba</b> (hoặc đóng vai một nhân vật nếu được yêu cầu).</li><li>Mở đầu và kết thúc hấp dẫn; nêu ý nghĩa truyện.</li></ul>` },
    { title: 'Tóm tắt sự việc chính (ví dụ: Thánh Gióng)', html: `<p>Truyền thuyết Thánh Gióng (dân gian) có các sự việc chính:</p>`,
      svg: S.flow({ items: [{ title: 'Ra đời', text: 'Bà mẹ ướm chân; Gióng lên ba chưa biết nói' }, { title: 'Tiếng nói đầu', text: 'Giặc Ân đến, Gióng xin đi đánh giặc' }, { title: 'Lớn nhanh', text: 'Dân làng góp gạo nuôi Gióng' }, { title: 'Đánh giặc', text: 'Ngựa sắt, roi sắt, nhổ tre' }, { title: 'Về trời', text: 'Bay lên trời; dấu tích còn lại' }] }),
      caption: 'Chuỗi sự việc chính của truyền thuyết Thánh Gióng.' },
    { title: 'Lập dàn ý bài kể', html: `<table class="tbl"><tr><th>Phần</th><th>Nội dung</th></tr><tr><td>Mở đầu</td><td>Chào; giới thiệu tên truyền thuyết, lí do chọn kể.</td></tr><tr><td>Diễn biến</td><td>Kể lần lượt các sự việc chính; nhấn mạnh chi tiết kì ảo (tiếng nói đầu tiên, lớn nhanh như thổi, nhổ tre đánh giặc, bay về trời).</td></tr><tr><td>Kết thúc</td><td>Dấu tích (tre đằng ngà, ao hồ, làng Cháy); ý nghĩa; cảm nghĩ của em.</td></tr></table>` },
    { title: 'Luyện kể', html: `<ul><li>Giọng kể thay đổi theo diễn biến: trầm lắng ở đoạn mở đầu, hào hùng ở đoạn đánh giặc.</li><li>Có thể thay giọng khi dẫn lời nhân vật (tiếng nói đầu tiên của Gióng).</li><li>Dùng cử chỉ minh hoạ (vươn vai, nhổ tre) vừa phải.</li><li>Nhìn người nghe; kể trong 3–5 phút.</li></ul>` },
    { title: 'Bảng kiểm', html: `<table class="tbl"><tr><th>Tiêu chí</th><th>Đạt / Chưa đạt</th></tr><tr><td>Giới thiệu tên truyền thuyết</td><td></td></tr><tr><td>Kể đủ, đúng trình tự các sự việc chính</td><td></td></tr><tr><td>Giữ chi tiết kì ảo tiêu biểu</td><td></td></tr><tr><td>Nêu được ý nghĩa truyện</td><td></td></tr><tr><td>Giọng kể truyền cảm, thay đổi phù hợp</td><td></td></tr><tr><td>Ánh mắt, cử chỉ; đúng thời gian</td><td></td></tr></table>` }
  ],
  summary: 'Kể lại truyền thuyết: kể đúng cốt truyện và sự việc chính, giữ chi tiết kì ảo, dùng lời văn của mình, nêu ý nghĩa; chuẩn bị bằng tóm tắt và dàn ý; giọng kể truyền cảm; người nghe nhận xét theo bảng kiểm.',
  examples: [
    { title: 'Lời mở đầu', problem: 'Viết lời mở đầu cho bài kể “Sơn Tinh, Thuỷ Tinh”.', solution: '“Chào các bạn! Vì sao năm nào nước ta cũng có mùa lũ? Người xưa đã giải thích bằng một câu chuyện rất kì lạ về cuộc giao tranh giữa thần núi và thần nước. Mình xin kể truyền thuyết Sơn Tinh, Thuỷ Tinh.”' },
    { title: 'Nhấn mạnh chi tiết kì ảo', problem: 'Kể lại chi tiết Gióng vươn vai bằng lời của em (2–3 câu).', solution: '“Ăn xong, Gióng vươn vai một cái – chỉ một cái thôi – mà đã thành tráng sĩ cao lớn, oai phong lẫm liệt. Chú mặc áo giáp sắt, cầm roi sắt, nhảy lên lưng ngựa sắt. Ngựa hí vang, phun lửa, phi thẳng ra trận.”' },
    { title: 'Kết thúc bài kể', problem: 'Viết lời kết bài kể Thánh Gióng.', solution: '“Ngày nay, ở làng Phù Đổng vẫn còn đền thờ Gióng, hằng năm mở hội Gióng. Câu chuyện nhắc chúng ta nhớ về tinh thần yêu nước và sức mạnh đoàn kết của nhân dân. Cảm ơn các bạn đã lắng nghe!”' }
  ],
  exercises: [
    { question: 'Tóm tắt truyền thuyết “Sơn Tinh, Thuỷ Tinh” thành 5 sự việc chính.', hints: ['Bắt đầu từ việc vua Hùng kén rể.', 'Kết thúc bằng hiện tượng lũ hằng năm.'], solution: '1) Vua Hùng kén rể cho Mị Nương; Sơn Tinh, Thuỷ Tinh đến cầu hôn. 2) Vua ra sính lễ, hẹn ai đến trước được vợ. 3) Sơn Tinh đến trước, rước Mị Nương về núi. 4) Thuỷ Tinh nổi giận dâng nước đánh; Sơn Tinh bốc đồi dời núi chống cự, Thuỷ Tinh thua. 5) Hằng năm Thuỷ Tinh vẫn dâng nước báo thù – giải thích lũ lụt.' },
    { question: 'Nêu hai cách làm cho giọng kể hấp dẫn hơn.', hints: ['Tốc độ, cao độ giọng.', 'Lời nhân vật.'], solution: 'Thay đổi tốc độ, âm lượng theo diễn biến (nhanh, mạnh ở đoạn giao tranh); thay giọng khi dẫn lời nhân vật.' },
    { question: 'Viết một lời nhận xét cho bạn kể đúng truyện nhưng giọng đều đều.', hints: ['Khen trước.', 'Góp ý và gợi ý cụ thể.'], solution: 'Ví dụ: “Bạn kể đủ và đúng các sự việc, giữ được các chi tiết kì ảo. Tuy nhiên giọng kể hơi đều. Bạn thử nói to, nhanh hơn ở đoạn Gióng đánh giặc và chậm lại khi Gióng bay về trời nhé.”' }
  ],
  quiz: [
    { type: 'mcq', q: 'Khi kể lại truyền thuyết, điều quan trọng nhất là:', options: ['Kể đúng các sự việc chính', 'Thay đổi kết thúc', 'Bỏ chi tiết kì ảo', 'Đọc thuộc văn bản'], answer: 0, explain: 'Giữ đúng cốt truyện.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Có thể dùng lời văn của mình khi kể.', answer: true, explain: 'Kể bằng lời của em.' },
    { type: 'mcq', q: 'Chi tiết nào là chi tiết kì ảo trong Thánh Gióng?', options: ['Gióng vươn vai thành tráng sĩ', 'Dân làng góp gạo', 'Giặc Ân xâm lược', 'Bà mẹ làm ruộng'], answer: 0, explain: 'Lớn nhanh kì lạ.' },
    { type: 'mcq', q: 'Truyền thuyết “Sơn Tinh, Thuỷ Tinh” giải thích hiện tượng:', options: ['Lũ lụt hằng năm', 'Động đất', 'Nhật thực', 'Cầu vồng'], answer: 0, explain: 'Thuỷ Tinh dâng nước báo thù.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Giọng kể nên đều đều từ đầu đến cuối.', answer: false, explain: 'Cần thay đổi theo diễn biến.' },
    { type: 'mcq', q: 'Phần kết thúc bài kể nên có:', options: ['Dấu tích, ý nghĩa truyện, lời cảm ơn', 'Một truyện khác', 'Lời chê người nghe', 'Chỉ tên truyện'], answer: 0, explain: 'Khép lại trọn vẹn.' },
    { type: 'mcq', q: 'Ngôi kể thường dùng khi kể lại truyền thuyết:', options: ['Ngôi thứ ba', 'Ngôi thứ hai', 'Không có ngôi', 'Luôn là ngôi thứ nhất'], answer: 0, explain: 'Người kể giấu mình.' },
    { type: 'mcq', q: 'Chuẩn bị bài kể nên bắt đầu bằng:', options: ['Tóm tắt các sự việc chính', 'Học thuộc từng chữ', 'Vẽ tranh', 'Chọn trang phục'], answer: 0, explain: 'Nắm cốt truyện trước.' }
  ]
});
})();
