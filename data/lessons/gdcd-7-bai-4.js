/* GDCD 7 – Bài 4. Giữ chữ tín. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('gdcd-7/bai-4', {
  objectives: [
    'Hiểu được chữ tín là gì; nêu được biểu hiện của giữ chữ tín.',
    'Hiểu được ý nghĩa của việc giữ chữ tín.',
    'Luôn giữ lời hứa; phê phán những người không biết giữ chữ tín.'
  ],
  intro: 'Tùng hứa trả lại cuốn truyện cho bạn vào thứ Hai. Sáng đó trời mưa to, Tùng vẫn bọc kĩ cuốn sách mang đến trường. Bạn bè nói: “Tùng nói là làm, rất đáng tin!”. Đó là <b>giữ chữ tín</b>.',
  steps: [
    { title: 'Chữ tín là gì?', html: `<p><b>Chữ tín</b> là sự tin tưởng giữa người với người. <b>Giữ chữ tín</b> là coi trọng lòng tin của mọi người đối với mình, biết trọng lời hứa và biết tin tưởng nhau.</p>
      <p>Tục ngữ: <i>“Một lần bất tín, vạn lần bất tin”</i>; <i>“Nói lời phải giữ lấy lời”</i>.</p>` },
    { title: 'Biểu hiện', html: `<p>Giữ chữ tín thể hiện trong học tập, quan hệ bạn bè, làm ăn kinh doanh:</p>`,
      svg: S.compare({ title: 'Giữ chữ tín và thất tín', left: { h: 'Giữ chữ tín', items: ['Giữ lời hứa, đúng hẹn', 'Làm tròn việc được giao', 'Bán hàng đúng chất lượng', 'Trả đồ mượn đúng hạn'] }, right: { h: 'Thất tín', items: ['Hứa rồi quên, sai hẹn', 'Nhận việc nhưng bỏ dở', 'Bán hàng kém chất lượng, gian lận', 'Mượn đồ không trả'] } }), caption: 'Lời nói đi đôi với việc làm.' },
    { title: 'Khi không thể giữ lời hứa', html: `<p>Có những lí do chính đáng khiến ta không thực hiện được lời hứa. Khi đó cần báo trước, giải thích, xin lỗi và hẹn lại:</p>`,
      svg: S.flowchart({ title: 'Xử lí khi khó giữ lời hứa', steps: [{ t: 'start', s: 'Đã hứa một việc' }, { t: 'if', s: 'Làm được đúng hẹn?', yes: 'Thực hiện đúng', no: 'Báo trước, xin lỗi' }, { t: 'proc', s: 'Hẹn lại và thực hiện' }, { t: 'end', s: 'Giữ được lòng tin' }] }), caption: 'Hứa vừa sức; không hứa điều sai trái.' },
    { title: 'Ý nghĩa', html: `<p>Người giữ chữ tín được mọi người tin cậy, hợp tác; trong kinh doanh, chữ tín giúp giữ khách hàng, phát triển bền vững. Thất tín làm mất lòng tin – rất khó lấy lại.</p>
      <div class="box key">Nói là làm; hứa vừa sức; không làm được thì báo trước.</div>` }
  ],
  summary: 'Chữ tín là sự tin tưởng giữa người với người; giữ chữ tín là coi trọng lòng tin của người khác, trọng lời hứa. Biểu hiện: đúng hẹn, giữ lời, làm tròn trách nhiệm, kinh doanh trung thực. Khi có lí do chính đáng không làm được cần báo trước, xin lỗi, hẹn lại. Giữ chữ tín giúp được tin cậy, hợp tác; thất tín làm mất lòng tin.',
  examples: [
    { title: 'Nhận diện', problem: 'Cửa hàng của bà Lan cân đúng, bán đúng giá, nên khách quen đông. Đó là biểu hiện gì?', solution: 'Giữ chữ tín trong kinh doanh.' },
    { title: 'Thất tín', problem: 'Nam hứa đi học nhóm nhưng đi chơi mà không báo. Hậu quả?', solution: 'Cả nhóm phải chờ, mất thời gian; các bạn mất lòng tin vào Nam.' },
    { title: 'Lời hứa sai trái', problem: 'Bạn bắt em hứa giữ bí mật việc bạn ấy lấy trộm tiền. Có phải giữ lời hứa không?', solution: 'Không; không giữ lời hứa với việc sai trái. Em nên khuyên bạn trả lại và báo người lớn nếu cần.' }
  ],
  exercises: [
    { question: 'Kể ba việc làm thể hiện giữ chữ tín ở trường.', hints: ['Với thầy cô.', 'Với bạn bè.'], solution: 'Nộp bài đúng hạn; trả sách mượn đúng hẹn; hoàn thành phần việc nhóm đã nhận.' },
    { question: 'Giải thích câu “Một lần bất tín, vạn lần bất tin”.', hints: ['Bất tín là gì?', 'Hậu quả lâu dài?'], solution: 'Chỉ một lần thất hứa, gian dối cũng khiến người khác mất lòng tin vào mình rất lâu, khó lấy lại.' },
    { question: 'Trong 20 lần hẹn, Lâm đúng hẹn 17 lần. Tỉ lệ giữ hẹn bao nhiêu phần trăm?', hints: ['17 : 20.', 'Nhân 100%.'], solution: '85%.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Giữ chữ tín là coi trọng lòng tin của người khác đối với mình.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Câu tục ngữ về chữ tín:', options: ['Một lần bất tín, vạn lần bất tin', 'Uống nước nhớ nguồn', 'Có chí thì nên', 'Ăn quả nhớ kẻ trồng cây'], answer: 0, explain: 'Đúng.' },
    { type: 'mcq', q: 'Biểu hiện thất tín:', options: ['Mượn đồ không trả', 'Đến đúng hẹn', 'Nộp bài đúng hạn', 'Bán hàng đúng chất lượng'], answer: 0, explain: 'Thất tín.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Đã hứa thì phải giữ lời kể cả khi đó là việc sai trái.', answer: false, explain: 'Không giữ lời hứa sai trái.' },
    { type: 'short', q: '25 lần hẹn, đúng hẹn 20 lần. Tỉ lệ đúng hẹn (%)?', answer: '80', unit: '%', calc: '20/25*100', explain: '80%.' },
    { type: 'mcq', q: 'Có lí do chính đáng không giữ được hẹn, nên:', options: ['báo trước, xin lỗi, hẹn lại', 'im lặng', 'đổ lỗi cho người khác', 'hứa thêm việc khác'], answer: 0, explain: 'Báo trước.' },
    { type: 'short', q: 'Cửa hàng có 200 khách quen, mỗi tháng tăng 10% nhờ uy tín. Sau 1 tháng có bao nhiêu khách quen?', answer: '220', unit: 'khách', calc: '200*1.1', explain: '220.' },
    { type: 'mcq', q: 'Trong kinh doanh, chữ tín giúp:', options: ['giữ khách hàng, phát triển bền vững', 'lừa khách dễ hơn', 'tăng giá tuỳ ý', 'không cần chất lượng'], answer: 0, explain: 'Đúng.' }
  ]
});
})();
