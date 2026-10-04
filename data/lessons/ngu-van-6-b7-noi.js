/* Ngữ văn 6 – Bài 7. Nói và nghe: Kể lại một truyện cổ tích bằng lời một nhân vật. Truyện cổ tích dân gian (phạm vi công cộng); dàn ý và lời mẫu do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-6/b7-noi', {
  objectives: [
    'Kể lại được một truyện cổ tích bằng lời một nhân vật (ngôi thứ nhất), đúng cốt truyện.',
    'Biết chuẩn bị: chọn truyện và nhân vật, lập dàn ý, chuẩn bị đạo cụ/giọng điệu.',
    'Biết lắng nghe, nhận xét phần kể của bạn theo bảng kiểm.'
  ],
  intro: 'Tưởng tượng em là Sọ Dừa, là Thạch Sanh hay là quả khế ngọt… Kể chuyện bằng lời nhân vật là một “màn nhập vai” thú vị trước cả lớp.',
  steps: [
    { title: 'Yêu cầu', html: `<ul><li>Chọn một truyện cổ tích và một nhân vật; xưng “tôi”.</li><li>Kể đúng các sự việc chính, giữ yếu tố kì ảo.</li><li>Thể hiện được cảm xúc, suy nghĩ của nhân vật qua giọng kể.</li><li>Thời gian 3–5 phút.</li></ul>` },
    { title: 'Quy trình chuẩn bị', html: `<p>Các bước:</p>`,
      svg: S.flow({ items: [{ title: 'Chọn truyện', text: 'và nhân vật nhập vai' }, { title: 'Tóm tắt', text: 'Sự việc chính theo góc nhìn nhân vật' }, { title: 'Dàn ý', text: 'Mở đầu – diễn biến – kết thúc' }, { title: 'Luyện tập', text: 'Giọng điệu, cử chỉ, đạo cụ' }] }),
      caption: 'Quy trình chuẩn bị kể chuyện nhập vai.' },
    { title: 'Ví dụ dàn ý (vai Sọ Dừa)', html: `<table class="tbl"><tr><th>Phần</th><th>Nội dung</th></tr><tr><td>Mở đầu</td><td>“Tôi là Sọ Dừa – chàng trai sinh ra không chân không tay, tròn như quả dừa.”</td></tr><tr><td>Diễn biến</td><td>Đi chăn bò cho phú ông; cô út tốt bụng nhận ra tôi là chàng trai khôi ngô; cưới cô út; đỗ trạng nguyên, đi sứ; vợ bị hai chị hại, nhờ vật dặn mang theo mà thoát nạn; đoàn tụ.</td></tr><tr><td>Kết thúc</td><td>Suy nghĩ của tôi: đừng đánh giá người qua vẻ bề ngoài.</td></tr></table>` },
    { title: 'Kĩ năng nhập vai', html: `<ul><li>Chọn giọng phù hợp nhân vật: Sọ Dừa hóm hỉnh; Thạch Sanh hiền hậu; lão nhà giàu kênh kiệu.</li><li>Có thể dùng đạo cụ đơn giản (khăn, nón) nhưng không để lấn át lời kể.</li><li>Giữ ánh mắt với người nghe; không đọc giấy.</li></ul>` },
    { title: 'Bảng kiểm', html: `<table class="tbl"><tr><th>Tiêu chí</th><th>Đạt / Chưa đạt</th></tr><tr><td>Xưng “tôi” nhất quán; nhập vai rõ</td><td></td></tr><tr><td>Đúng cốt truyện, đủ sự việc chính</td><td></td></tr><tr><td>Có cảm xúc, suy nghĩ của nhân vật</td><td></td></tr><tr><td>Giọng điệu, cử chỉ phù hợp nhân vật</td><td></td></tr><tr><td>Kết thúc nêu được ý nghĩa</td><td></td></tr><tr><td>Đúng thời gian</td><td></td></tr></table>` }
  ],
  summary: 'Kể lại truyện cổ tích bằng lời nhân vật: chọn nhân vật, xưng “tôi”, kể đúng cốt truyện, bộc lộ cảm xúc nhân vật; chuẩn bị tóm tắt, dàn ý, luyện giọng điệu; người nghe nhận xét theo bảng kiểm.',
  examples: [
    { title: 'Lời mở đầu nhập vai', problem: 'Viết lời mở đầu khi đóng vai Thạch Sanh.', solution: '“Chào các bạn, tôi là Thạch Sanh, một chàng trai mồ côi sống dưới gốc đa, cả gia tài chỉ có chiếc rìu. Tôi muốn kể các bạn nghe những thử thách tôi đã vượt qua.”' },
    { title: 'Bộc lộ cảm xúc nhân vật', problem: 'Nói 2 câu thể hiện cảm xúc của Sọ Dừa khi cô út mang cơm cho mình.', solution: '“Giữa bao người chê cười, chỉ có cô út đối xử tử tế với tôi. Tôi thấy lòng ấm áp và thầm mong một ngày được đền đáp tấm lòng ấy.”' },
    { title: 'Nhận xét bạn', problem: 'Bạn nhập vai tốt nhưng quên một sự việc chính. Viết lời nhận xét.', solution: '“Giọng kể của bạn rất đúng chất nhân vật, cử chỉ tự nhiên. Tuy nhiên bạn bỏ qua đoạn Sọ Dừa đi sứ nên phần kết hơi đột ngột. Lần sau bạn kiểm tra lại dàn ý trước khi kể nhé.”' }
  ],
  exercises: [
    { question: 'Chọn một truyện cổ tích và nêu nhân vật em muốn nhập vai, giải thích lí do.', hints: ['Nhân vật chính hay phụ đều được.', 'Lí do: tính cách, góc nhìn thú vị.'], solution: 'Ví dụ: Truyện “Cây khế”, nhập vai chim thần – vì nhân vật này chứng kiến cả người em hiền lành và người anh tham lam, có góc nhìn khách quan và thú vị.' },
    { question: 'Tóm tắt truyện “Thạch Sanh” theo lời Thạch Sanh (4–5 ý).', hints: ['Mồ côi, sống gốc đa.', 'Lí Thông lừa; diệt chằn tinh, đại bàng; bị hãm hại; tiếng đàn.'], solution: 'Tôi mồ côi, được thiên thần dạy võ. Lí Thông kết nghĩa rồi lừa tôi đi canh miếu, tôi giết chằn tinh. Tôi cứu công chúa khỏi đại bàng nhưng bị Lí Thông lấp cửa hang. Bị vu oan vào ngục, tiếng đàn thần giúp công chúa khỏi câm, sự thật sáng tỏ. Tôi đánh lui quân mười tám nước chư hầu bằng niêu cơm thần và được nhường ngôi.' },
    { question: 'Nêu hai điểm khác nhau giữa kể chuyện bằng lời nhân vật và kể theo ngôi thứ ba.', hints: ['Xưng hô.', 'Cảm xúc bên trong.'], solution: 'Lời nhân vật xưng “tôi”, người nghe thấy trực tiếp suy nghĩ, cảm xúc; kể ngôi thứ ba khách quan hơn, có thể kể mọi nhân vật.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Kể lại truyện bằng lời một nhân vật, người kể xưng:', options: ['Tôi', 'Hắn', 'Họ', 'Anh ấy'], answer: 0, explain: 'Ngôi thứ nhất.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Có thể dùng đạo cụ đơn giản để hỗ trợ nhập vai.', answer: true, explain: 'Không lấn át lời kể.' },
    { type: 'mcq', q: 'Nhân vật Sọ Dừa có hình dạng:', options: ['Tròn như quả dừa, không chân tay', 'Khổng lồ', 'Có cánh', 'Là con vật'], answer: 0, explain: 'Chi tiết kì ảo.' },
    { type: 'mcq', q: 'Bài học từ truyện “Sọ Dừa” là:', options: ['Không đánh giá người qua vẻ bề ngoài', 'Nên sống một mình', 'Đừng chăn bò', 'Giàu là tốt'], answer: 0, explain: 'Vẻ đẹp bên trong.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nhập vai thì có thể kể sai sự việc để hấp dẫn hơn.', answer: false, explain: 'Phải đúng cốt truyện.' },
    { type: 'mcq', q: 'Giọng kể nên:', options: ['Phù hợp tính cách nhân vật', 'Luôn thì thầm', 'Luôn hét to', 'Không thay đổi'], answer: 0, explain: 'Giọng nhân vật.' },
    { type: 'mcq', q: 'Chuẩn bị quan trọng nhất trước khi kể:', options: ['Tóm tắt sự việc theo góc nhìn nhân vật', 'Chọn áo đẹp', 'Học thuộc truyện gốc từng chữ', 'Mời khán giả'], answer: 0, explain: 'Nắm cốt truyện.' },
    { type: 'mcq', q: 'Người nghe nên nhận xét:', options: ['Theo bảng kiểm, cụ thể, tôn trọng', 'Chung chung', 'Chỉ chê', 'Không cần nhận xét'], answer: 0, explain: 'Phản hồi xây dựng.' }
  ]
});
})();
