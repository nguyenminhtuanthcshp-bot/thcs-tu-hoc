/* LS&ĐL 7 – Lịch sử, Bài 12. Cuộc kháng chiến chống quân xâm lược Tống (1075 – 1077). Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-7/ls-bai-12', {
  objectives: [
    'Trình bày được những nét chính về cuộc kháng chiến chống Tống (1075 – 1077).',
    'Mô tả được chiến thuật “tiên phát chế nhân” của Lý Thường Kiệt.',
    'Nêu được nguyên nhân thắng lợi và ý nghĩa lịch sử.',
    'Đánh giá được vai trò của Lý Thường Kiệt.'
  ],
  intro: '“Sông núi nước Nam vua Nam ở / Rành rành định phận ở sách trời…” Bài thơ “Nam quốc sơn hà” vang lên bên phòng tuyến sông Như Nguyệt năm 1077, được coi là một bản tuyên ngôn độc lập. Đó là cuộc <b>kháng chiến chống Tống</b>.',
  steps: [
    { title: 'Giai đoạn 1: tiến công để phòng vệ', html: `<p>Biết nhà Tống chuẩn bị xâm lược, cuối năm <b>1075</b>, Lý Thường Kiệt chủ động đem quân đánh vào các căn cứ ở châu Ung, châu Khâm, châu Liêm rồi rút về – kế sách <b>“tiên phát chế nhân”</b> (đánh trước để chế ngự giặc).</p>` },
    { title: 'Giai đoạn 2: phòng tuyến Như Nguyệt', html: `<p>Năm <b>1077</b>, quân Tống sang xâm lược. Lý Thường Kiệt xây phòng tuyến trên sông Như Nguyệt (sông Cầu), chặn đứng quân giặc.</p>`,
      svg: S.flowchart({ title: 'Diễn biến chính', steps: [{ t: 'start', s: '1075: đánh trước' }, { t: 'proc', s: '1077: Tống xâm lược' }, { t: 'proc', s: 'Chặn ở Như Nguyệt' }, { t: 'end', s: 'Giảng hoà, Tống rút' }] }), caption: 'Lý Thường Kiệt chủ động đề nghị giảng hoà để kết thúc chiến tranh.' },
    { title: 'Nguyên nhân thắng lợi, ý nghĩa', html: `<ul><li>Tinh thần đoàn kết của quân dân; tài chỉ huy của Lý Thường Kiệt.</li><li>Ý nghĩa: bảo vệ độc lập, khiến nhà Tống từ bỏ mộng xâm lược.</li></ul>` },
    { title: 'Mốc thời gian', html: `<p>Trục thời gian:</p>`,
      svg: S.timeline({ title: 'Kháng chiến chống Tống', items: [{ y: 'Cuối 1075', s: 'Đánh châu Ung, Khâm, Liêm' }, { y: 'Đầu 1077', s: 'Tống xâm lược' }, { y: '1077', s: 'Như Nguyệt, giảng hoà' }] }), caption: 'Cuộc kháng chiến thắng lợi vẻ vang.' }
  ],
  summary: 'Cuối năm 1075, Lý Thường Kiệt thực hiện “tiên phát chế nhân”, đánh vào các căn cứ châu Ung, Khâm, Liêm của nhà Tống rồi rút về. Năm 1077, quân Tống xâm lược, bị chặn đứng ở phòng tuyến sông Như Nguyệt; bài thơ “Nam quốc sơn hà” động viên quân sĩ. Lý Thường Kiệt chủ động giảng hoà, quân Tống rút về. Thắng lợi bảo vệ vững chắc nền độc lập.',
  examples: [
    { title: 'Khái niệm', problem: '“Tiên phát chế nhân” là gì?', solution: 'Đánh trước để chế ngự (làm suy yếu) kẻ thù.' },
    { title: 'Tính thời gian', problem: 'Từ cuối 1075 đến 1077 khoảng bao nhiêu năm?', solution: 'Khoảng 2 năm.' },
    { title: 'Nhân văn', problem: 'Vì sao Lý Thường Kiệt chủ động giảng hoà?', solution: 'Để kết thúc chiến tranh, giảm thương vong cho cả hai bên, giữ hoà hiếu lâu dài.' }
  ],
  exercises: [
    { question: 'Phòng tuyến chống Tống được xây trên sông nào?', hints: ['Nay là sông Cầu.', 'Như…'], solution: 'Sông Như Nguyệt.' },
    { question: 'Năm 1077 cách năm 2027 bao nhiêu năm?', hints: ['2027 − 1077.', 'Tròn trăm.'], solution: '950 năm.' },
    { question: 'Nêu ý nghĩa của bài thơ “Nam quốc sơn hà”.', hints: ['Chủ quyền.', 'Động viên.'], solution: 'Khẳng định chủ quyền, động viên tinh thần quân sĩ; được xem như bản tuyên ngôn độc lập.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Lý Thường Kiệt chỉ huy kháng chiến chống Tống.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Phòng tuyến chống Tống năm 1077:', options: ['Sông Như Nguyệt', 'Sông Bạch Đằng', 'Sông Hồng', 'Sông Mã'], answer: 0, explain: 'Như Nguyệt.' },
    { type: 'short', q: 'Từ 1077 đến 2027 là bao nhiêu năm?', answer: '950', unit: 'năm', calc: '2027-1077', explain: '950.' },
    { type: 'mcq', q: 'Kế sách đánh trước để chế ngự giặc:', options: ['Tiên phát chế nhân', 'Vườn không nhà trống', 'Sát Thát', 'Cắm cọc'], answer: 0, explain: 'Đúng.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Cuộc kháng chiến chống Tống kết thúc bằng việc nhà Lý đầu hàng.', answer: false, explain: 'Thắng lợi, giảng hoà.' },
    { type: 'short', q: 'Từ 1075 đến 1077 là bao nhiêu năm?', answer: '2', unit: 'năm', calc: '1077-1075', explain: '2.' },
    { type: 'mcq', q: 'Bài thơ được coi là bản tuyên ngôn độc lập đầu tiên:', options: ['Nam quốc sơn hà', 'Hịch tướng sĩ', 'Bình Ngô đại cáo', 'Chiếu dời đô'], answer: 0, explain: 'Đúng.' },
    { type: 'mcq', q: 'Cuối năm 1075, quân Lý đánh vào châu:', options: ['Ung, Khâm, Liêm', 'Giao, Ái, Hoan', 'Lạng, Cao, Bắc', 'Quảng, Nam, Hải'], answer: 0, explain: 'Đúng.' }
  ]
});
})();
