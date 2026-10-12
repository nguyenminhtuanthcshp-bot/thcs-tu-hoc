/* GDCD 7 – Bài 2. Quan tâm, cảm thông và chia sẻ. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('gdcd-7/bai-2', {
  objectives: [
    'Nêu được biểu hiện của sự quan tâm, cảm thông và chia sẻ với người khác.',
    'Giải thích được vì sao mọi người cần quan tâm, cảm thông, chia sẻ với nhau.',
    'Thường xuyên có lời nói, việc làm thể hiện sự quan tâm, cảm thông; khích lệ bạn bè cùng làm; phê phán thói ích kỉ, thờ ơ.'
  ],
  intro: 'Bố của Khánh mất việc, Khánh buồn và ít nói hẳn. Cả nhóm bạn nhận ra, rủ Khánh cùng học, lắng nghe Khánh tâm sự mà không tò mò hỏi han quá mức. <b>Quan tâm, cảm thông và chia sẻ</b> đúng lúc giúp bạn vượt qua khó khăn.',
  steps: [
    { title: 'Khái niệm', html: `<ul><li><b>Quan tâm</b>: để ý, chú ý tới người khác, tới những điều xảy ra với họ.</li><li><b>Cảm thông</b>: hiểu và đồng cảm với cảm xúc, hoàn cảnh của người khác (đặt mình vào vị trí của họ).</li><li><b>Chia sẻ</b>: cùng người khác san sẻ niềm vui, nỗi buồn, khó khăn bằng lời nói, việc làm.</li></ul>` },
    { title: 'Biểu hiện', html: `<p>Sự quan tâm thể hiện từ những việc nhỏ:</p>`,
      svg: S.compare({ title: 'Quan tâm, cảm thông và trái ngược', left: { h: 'Quan tâm, chia sẻ', items: ['Hỏi han khi bạn buồn, ốm', 'Lắng nghe, không phán xét', 'Giúp đỡ người gặp hoạn nạn', 'Chúc mừng thành công của bạn'] }, right: { h: 'Ích kỉ, thờ ơ', items: ['Mặc kệ bạn gặp khó khăn', 'Cười cợt khi bạn mắc lỗi', 'Ghen tị khi bạn được khen', 'Tò mò, đem chuyện bạn đi kể'] } }), caption: 'Chia sẻ cả niềm vui lẫn nỗi buồn.' },
    { title: 'Vì sao cần quan tâm, cảm thông?', html: `<ul><li>Giúp người khác vượt qua khó khăn, cảm thấy không cô đơn.</li><li>Gắn kết tình cảm, xây dựng tập thể, cộng đồng đoàn kết.</li><li>Người biết quan tâm được mọi người yêu quý, tin cậy.</li></ul>` },
    { title: 'Lắng nghe để cảm thông', html: `<p>Khi bạn tâm sự, hãy làm theo các bước:</p>`,
      svg: S.flow({ items: ['Chú ý, nhìn bạn', 'Lắng nghe, không ngắt lời', 'Nói lời đồng cảm', 'Hỏi: “Mình giúp gì được?”', 'Giữ kín chuyện riêng'], size: 12, label: 'Các bước lắng nghe tích cực' }), caption: 'Lắng nghe chân thành là cách chia sẻ đầu tiên.' }
  ],
  summary: 'Quan tâm là chú ý tới người khác; cảm thông là hiểu, đồng cảm với hoàn cảnh của họ; chia sẻ là cùng san sẻ niềm vui, nỗi buồn, khó khăn. Các phẩm chất này giúp người khác vượt khó, gắn kết cộng đồng, khiến ta được yêu quý. Cần thể hiện bằng lắng nghe, lời nói, việc làm cụ thể; phê phán ích kỉ, thờ ơ.',
  examples: [
    { title: 'Nhận diện', problem: 'Thấy em lớp 6 lạc đường trong trường, Vân dẫn em đến đúng lớp. Vân thể hiện điều gì?', solution: 'Sự quan tâm, giúp đỡ người khác.' },
    { title: 'Chia sẻ niềm vui', problem: 'Bạn thân đạt giải học sinh giỏi, còn em thì không. Em nên làm gì?', solution: 'Chân thành chúc mừng bạn, học hỏi kinh nghiệm; không ghen tị.' },
    { title: 'Tính quyên góp', problem: 'Lớp 42 bạn, mỗi bạn góp 10 000 đồng giúp bạn có nhà bị ngập. Tổng số tiền?', solution: '420 000 đồng.' }
  ],
  exercises: [
    { question: 'Phân biệt cảm thông với thương hại.', hints: ['Có tôn trọng người kia không?', 'Có đặt mình vào vị trí họ không?'], solution: 'Cảm thông là hiểu và đồng cảm, tôn trọng người khác; thương hại mang thái độ ban ơn, coi người kia yếu kém.' },
    { question: 'Nêu ba việc em có thể làm để quan tâm tới ông bà.', hints: ['Lời hỏi han.', 'Việc chăm sóc vừa sức.'], solution: 'Hỏi thăm sức khoẻ, gọi điện thường xuyên; giúp ông bà việc nhà; trò chuyện, đọc báo cho ông bà nghe.' },
    { question: 'Khánh đang buồn vì gia đình khó khăn. Viết hai câu nói thể hiện sự cảm thông, chia sẻ.', hints: ['Thể hiện hiểu cảm xúc.', 'Đề nghị giúp đỡ cụ thể.'], solution: 'Ví dụ: “Mình hiểu cậu đang rất lo, có gì cứ kể với mình nhé.” “Chiều nay mình cùng ôn bài với cậu nhé?”' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Cảm thông là hiểu và đồng cảm với hoàn cảnh của người khác.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Biểu hiện của sự thờ ơ:', options: ['Mặc kệ bạn gặp khó khăn', 'Hỏi han khi bạn ốm', 'Chúc mừng bạn', 'Lắng nghe bạn tâm sự'], answer: 0, explain: 'Thờ ơ.' },
    { type: 'mcq', q: 'Khi bạn tâm sự chuyện buồn, em nên:', options: ['lắng nghe, giữ kín chuyện', 'kể lại cho cả lớp', 'cười cợt', 'ngắt lời liên tục'], answer: 0, explain: 'Lắng nghe, giữ kín.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Chỉ cần chia sẻ nỗi buồn, không cần chia sẻ niềm vui.', answer: false, explain: 'Chia sẻ cả hai.' },
    { type: 'short', q: 'Lớp 38 bạn, mỗi bạn góp 15 000 đồng. Tổng bao nhiêu đồng?', answer: '570000', answerText: '570 000', unit: 'đồng', calc: '38*15000', explain: '570 000.' },
    { type: 'short', q: 'Quyên được 120 quyển vở, chia đều cho 8 bạn khó khăn. Mỗi bạn bao nhiêu quyển?', answer: '15', unit: 'quyển', calc: '120/8', explain: '15.' },
    { type: 'mcq', q: 'Ý nghĩa của quan tâm, chia sẻ:', options: ['gắn kết tập thể, cộng đồng', 'gây chia rẽ', 'làm mất thời gian vô ích', 'khiến người khác ỷ lại'], answer: 0, explain: 'Gắn kết.' },
    { type: 'mcq', q: 'Bạn thân đạt giải, em không đạt. Cách cư xử phù hợp:', options: ['chân thành chúc mừng bạn', 'ghen tị, nói xấu bạn', 'giận bạn', 'giả vờ không biết'], answer: 0, explain: 'Chúc mừng.' }
  ]
});
})();
