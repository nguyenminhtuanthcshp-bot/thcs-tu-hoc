/* GDCD 6 – Bài 2. Yêu thương con người. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('gdcd-6/bai-2', {
  objectives: [
    'Nêu được khái niệm và biểu hiện của tình yêu thương con người.',
    'Trình bày được giá trị của tình yêu thương con người.',
    'Thực hiện được những việc làm thể hiện yêu thương phù hợp với lứa tuổi; phê phán sự thờ ơ, lạnh nhạt.'
  ],
  intro: 'Bạn Hoa trong lớp bị ốm nghỉ học một tuần. Cả tổ thay nhau chép bài, đến thăm và giảng lại bài cho Hoa. Đó là biểu hiện của <b>tình yêu thương con người</b>.',
  steps: [
    { title: 'Yêu thương con người là gì?', html: `<p><b>Yêu thương con người</b> là quan tâm, giúp đỡ, làm những điều tốt đẹp cho người khác, nhất là những người gặp khó khăn, hoạn nạn.</p>
      <p>Ông cha ta dạy: <i>“Thương người như thể thương thân”</i>, <i>“Lá lành đùm lá rách”</i>.</p>` },
    { title: 'Biểu hiện', html: `<p>Tình yêu thương thể hiện qua lời nói, việc làm cụ thể:</p>`,
      svg: S.compare({ title: 'Biểu hiện trái ngược', left: { h: 'Yêu thương', items: ['Hỏi han, an ủi người buồn', 'Giúp bạn khó khăn trong học tập', 'Ủng hộ đồng bào vùng lũ', 'Tha thứ khi bạn biết lỗi'] }, right: { h: 'Thờ ơ, vô cảm', items: ['Chế giễu người khuyết tật', 'Quay video người bị nạn để câu “like”', 'Mặc kệ bạn bị bắt nạt', 'Ích kỉ, chỉ nghĩ cho mình'] } }), caption: 'Yêu thương thể hiện bằng hành động cụ thể.' },
    { title: 'Giá trị của tình yêu thương', html: `<ul><li>Giúp con người vượt qua khó khăn, thêm sức mạnh.</li><li>Làm các mối quan hệ gắn bó hơn.</li><li>Người biết yêu thương sẽ được mọi người yêu quý, kính trọng.</li><li>Là truyền thống quý báu của dân tộc Việt Nam.</li></ul>` },
    { title: 'Rèn luyện', html: `<p>Bắt đầu từ việc nhỏ: quan tâm ông bà, bố mẹ; giúp đỡ bạn bè; tham gia hoạt động thiện nguyện phù hợp lứa tuổi. Giúp đỡ cần chân thành, đúng cách, giữ an toàn cho bản thân (ví dụ: gặp người bị nạn nên gọi người lớn hoặc số 115).</p>`,
      svg: S.card({ tag: 'Tình huống', lines: ['Trên đường đi học, Nam thấy một cụ bà đứng mãi bên đường', 'muốn sang đường nhưng xe cộ qua lại rất đông.'], q: 'Nếu là Nam, em sẽ làm gì?' }), caption: 'Gợi ý: hỏi thăm, cùng cụ sang đường ở vạch kẻ, hoặc nhờ người lớn giúp.' }
  ],
  summary: 'Yêu thương con người là quan tâm, giúp đỡ, làm điều tốt đẹp cho người khác, nhất là người gặp khó khăn. Tình yêu thương giúp con người vượt khó, gắn bó, được yêu quý; là truyền thống quý báu của dân tộc. Cần thể hiện bằng việc làm cụ thể, chân thành, an toàn; phê phán thói thờ ơ, vô cảm.',
  examples: [
    { title: 'Nhận diện', problem: 'Lớp 6A quyên góp sách vở cũ gửi các bạn vùng cao. Việc làm thể hiện điều gì?', solution: 'Tình yêu thương, chia sẻ với người gặp khó khăn (“lá lành đùm lá rách”).' },
    { title: 'Phê phán', problem: 'Thấy bạn ngã xe, Tú đứng quay video đăng mạng mà không giúp. Em nhận xét thế nào?', solution: 'Đó là hành vi vô cảm, thiếu tôn trọng; cần giúp bạn đứng dậy, hỏi thăm, báo người lớn nếu bạn bị thương.' },
    { title: 'Tính quyên góp', problem: 'Lớp 40 bạn, mỗi bạn góp 5 quyển vở; nhà trường góp thêm 100 quyển. Tổng số vở?', solution: '40 × 5 + 100 = 300 quyển.' }
  ],
  exercises: [
    { question: 'Kể ba việc làm thể hiện tình yêu thương mà học sinh lớp 6 có thể làm.', hints: ['Trong gia đình.', 'Ở trường và cộng đồng.'], solution: 'Ví dụ: chăm sóc ông bà khi ốm; giảng bài cho bạn; tham gia quyên góp ủng hộ vùng thiên tai.' },
    { question: 'Phân biệt yêu thương với thương hại.', hints: ['Thái độ có tôn trọng người được giúp không?', 'Có hành động cụ thể không?'], solution: 'Yêu thương xuất phát từ sự tôn trọng, chân thành, có hành động giúp đỡ; thương hại là thái độ coi thường, ban ơn, không thật lòng.' },
    { question: 'Trường quyên góp được 6 000 000 đồng, chia đều cho 4 gia đình khó khăn. Mỗi gia đình nhận bao nhiêu?', hints: ['Chia tổng số tiền cho 4.', '6 000 000 : 4.'], solution: '1 500 000 đồng.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Yêu thương con người là quan tâm, giúp đỡ người khác, nhất là người gặp khó khăn.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Câu tục ngữ nói về tình yêu thương:', options: ['Thương người như thể thương thân', 'Ăn quả nhớ kẻ trồng cây', 'Có chí thì nên', 'Đi một ngày đàng học một sàng khôn'], answer: 0, explain: 'Thương người như thể thương thân.' },
    { type: 'mcq', q: 'Hành vi thể hiện sự vô cảm:', options: ['Giúp bạn bị ngã', 'Quay video người bị nạn để câu like', 'An ủi bạn buồn', 'Ủng hộ vùng lũ'], answer: 1, explain: 'Vô cảm.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Giúp đỡ người khác chỉ cần khi được trả công.', answer: false, explain: 'Yêu thương là chân thành.' },
    { type: 'short', q: 'Lớp 35 bạn, mỗi bạn góp 4 quyển vở. Tổng số vở?', answer: '140', unit: 'quyển', calc: '35*4', explain: '140.' },
    { type: 'short', q: 'Quyên góp 4 500 000 đồng chia đều cho 3 gia đình. Mỗi gia đình bao nhiêu đồng?', answer: '1500000', answerText: '1 500 000', unit: 'đồng', calc: '4500000/3', explain: '1 500 000.' },
    { type: 'mcq', q: 'Gặp người bị tai nạn chảy máu nhiều, học sinh nên:', options: ['gọi người lớn hoặc số 115', 'bỏ đi', 'đứng xem', 'tự di chuyển người bị nạn bằng mọi cách'], answer: 0, explain: 'Gọi trợ giúp.' },
    { type: 'mcq', q: 'Giá trị của tình yêu thương:', options: ['giúp con người vượt qua khó khăn', 'làm con người ích kỉ hơn', 'gây mất đoàn kết', 'không có giá trị'], answer: 0, explain: 'Đúng.' }
  ]
});
})();
