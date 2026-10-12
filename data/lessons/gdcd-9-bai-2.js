/* GDCD 9 – Bài 2. Khoan dung. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('gdcd-9/bai-2', {
  objectives: [
    'Nêu được khái niệm và biểu hiện của khoan dung.',
    'Nhận biết được giá trị của khoan dung.',
    'Thực hiện được hành vi khoan dung trong quan hệ với mọi người.',
    'Phê phán thái độ hẹp hòi, định kiến, thù hằn.'
  ],
  intro: 'Trong trận bóng đá giữa hai lớp, Phúc vô tình đá trượt làm Duy bị ngã trầy chân. Phúc rối rít xin lỗi. Bạn bè xúm vào đòi “trả đũa”, nhưng Duy cười: “Không sao, ai đá bóng mà chẳng có lúc va chạm”. Thái độ của Duy là <b>khoan dung</b>.',
  steps: [
    { title: 'Khoan dung là gì?', html: `<p><b>Khoan dung</b> là rộng lòng tha thứ; biết tôn trọng, thông cảm với người khác, chấp nhận sự khác biệt; sẵn sàng tha thứ khi người khác biết hối hận, sửa chữa lỗi lầm.</p>` },
    { title: 'Biểu hiện', html: `<p>So sánh:</p>`,
      svg: S.compare({ title: 'Khoan dung và hẹp hòi', left: { h: 'Khoan dung', items: ['Tha thứ khi bạn biết lỗi', 'Lắng nghe ý kiến khác mình', 'Không chấp nhặt chuyện nhỏ', 'Tôn trọng khác biệt'] }, right: { h: 'Hẹp hòi', items: ['Thù dai, trả đũa', 'Định kiến, áp đặt', 'Bới móc lỗi nhỏ', 'Chế giễu người khác mình'] } }), caption: 'Khoan dung không phải là dung túng cái sai.' },
    { title: 'Giá trị của khoan dung', html: `<ul><li>Giúp quan hệ giữa con người trở nên lành mạnh, thân ái.</li><li>Người khoan dung được yêu quý, tin cậy; sống thanh thản.</li><li>Giúp người mắc lỗi có cơ hội sửa sai.</li><li>Góp phần xây dựng cộng đồng, xã hội hoà bình.</li></ul>` },
    { title: 'Rèn luyện', html: `<p>Khi bị người khác làm tổn thương:</p>`,
      svg: S.flowchart({ title: 'Ứng xử khoan dung khi có va chạm', steps: [{ t: 'start', s: 'Bị tổn thương' }, { t: 'proc', s: 'Bình tĩnh, tìm hiểu lí do' }, { t: 'if', s: 'Người đó biết lỗi?', yes: 'Tha thứ, bỏ qua', no: 'Góp ý chân thành' }, { t: 'end', s: 'Giữ quan hệ tốt' }] }), caption: 'Đặt mình vào vị trí người khác.' }
  ],
  summary: 'Khoan dung là rộng lòng tha thứ, tôn trọng, thông cảm, chấp nhận khác biệt. Khoan dung giúp quan hệ lành mạnh, được tin yêu, cho người khác cơ hội sửa sai, góp phần xây dựng xã hội hoà bình. Khoan dung không phải là dung túng cái sai. Cần phê phán thái độ hẹp hòi, định kiến, thù hằn.',
  examples: [
    { title: 'Tình huống của Duy', problem: 'Vì sao thái độ của Duy đáng học tập?', solution: 'Duy hiểu va chạm là vô tình, chấp nhận lời xin lỗi, tránh xung đột giữa hai lớp.' },
    { title: 'Phân biệt', problem: 'Bạn liên tục lấy tiền của em và nói “bỏ qua đi”. Có nên “khoan dung” không?', solution: 'Không. Đó là hành vi sai trái lặp lại; cần báo thầy cô, bố mẹ. Khoan dung không phải dung túng.' },
    { title: 'Khảo sát (minh hoạ)', problem: 'Lớp có 40 bạn, 32 bạn chọn “tha thứ khi bạn xin lỗi”. Tỉ lệ bao nhiêu?', solution: '32 : 40 × 100% = 80%.' }
  ],
  exercises: [
    { question: 'Giải thích câu “Đánh kẻ chạy đi, không ai đánh người chạy lại”.', hints: ['“Người chạy lại” là ai?', 'Liên hệ với tha thứ.'], solution: 'Nên tha thứ cho người biết nhận lỗi, quay về sửa sai.' },
    { question: '18 trong 45 bạn từng giận bạn quá một tuần. Tỉ lệ này là bao nhiêu phần trăm?', hints: ['18 : 45.', 'Nhân 100%.'], solution: '40%.' },
    { question: 'Kể hai việc làm thể hiện khoan dung trong gia đình.', hints: ['Với em nhỏ.', 'Với ông bà, cha mẹ.'], solution: 'Bỏ qua khi em nhỏ làm hỏng đồ và hướng dẫn em; thông cảm khi bố mẹ mệt mỏi lỡ to tiếng.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khoan dung là rộng lòng tha thứ, tôn trọng và chấp nhận sự khác biệt.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Biểu hiện của khoan dung:', options: ['Tha thứ khi bạn biết lỗi', 'Thù dai, trả đũa', 'Định kiến', 'Bới móc lỗi nhỏ'], answer: 0, explain: 'Đúng.' },
    { type: 'short', q: '32 trong 40 bạn chọn tha thứ. Tỉ lệ bao nhiêu %?', answer: '80', unit: '%', calc: '32/40*100', explain: '80%.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khoan dung nghĩa là bỏ qua mọi hành vi sai trái lặp đi lặp lại.', answer: false, explain: 'Không dung túng cái sai.' },
    { type: 'mcq', q: 'Câu tục ngữ nói về khoan dung:', options: ['Đánh kẻ chạy đi, không ai đánh người chạy lại', 'Có công mài sắt có ngày nên kim', 'Tốt gỗ hơn tốt nước sơn', 'Học thầy không tày học bạn'], answer: 0, explain: 'Tha thứ người biết lỗi.' },
    { type: 'short', q: '18 trong 45 bạn từng giận dai. Tỉ lệ bao nhiêu %?', answer: '40', unit: '%', calc: '18/45*100', explain: '40%.' },
    { type: 'mcq', q: 'Giá trị của khoan dung:', options: ['Quan hệ lành mạnh, thân ái', 'Gây chia rẽ', 'Khuyến khích làm sai', 'Bị coi thường'], answer: 0, explain: 'Đúng.' },
    { type: 'mcq', q: 'Thái độ cần phê phán:', options: ['Hẹp hòi, định kiến', 'Lắng nghe', 'Thông cảm', 'Tôn trọng'], answer: 0, explain: 'Hẹp hòi.' }
  ]
});
})();
