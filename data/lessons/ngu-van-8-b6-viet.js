/* Ngữ văn 8 – Bài 6. Viết: Phân tích một tác phẩm văn học (truyện) – nhân vật và tình huống. Ngữ liệu: truyện rất ngắn “Món quà bằng gỗ” do nhóm biên soạn tự viết; dàn ý, đoạn văn mẫu do nhóm biên soạn viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-8/b6-viet', {
  objectives: [
    'Nắm được yêu cầu của bài văn phân tích một tác phẩm truyện: chủ đề, nhân vật, tình huống, chi tiết, ngôi kể và tác dụng.',
    'Tìm ý, lập dàn ý cho bài văn phân tích truyện ngắn theo các luận điểm.',
    'Viết được bài văn có luận điểm rõ, dẫn chứng từ tác phẩm, lời văn mạch lạc.',
    'Biết tự rà soát, chỉnh sửa bài viết.'
  ],
  intro: 'Sau khi đọc một truyện ngắn hay, ta thường muốn nói với người khác: “Truyện này hay lắm!”. Bài văn phân tích giúp em nói điều đó một cách thuyết phục: hay ở nhân vật nào, tình huống nào, chi tiết nào và vì sao.',
  text: {
    title: 'Món quà bằng gỗ (truyện rất ngắn)',
    html: `<p>Sinh nhật Hằng, cả lớp mang quà đến: hộp bút màu nhập khẩu, con gấu bông to bằng người, chiếc đồng hồ điện tử… Minh đứng cuối hàng, tay giấu sau lưng một hộp đựng bút bằng gỗ. Cả tuần, tối nào cậu cũng ngồi bên chiếc đèn dầu nhà bà ngoại, dùng con dao nhỏ của ông gọt từng thớ gỗ mít, khắc lên đó một chú mèo đang ngủ – con mèo Hằng hay kể.</p>
<p>Đến lượt Minh, có đứa bật cười: “Ơ, quà gì mà bé tí!” Minh đỏ mặt, đặt vội hộp gỗ lên bàn rồi lùi ra.</p>
<p>Hằng cầm hộp bút lên, xoay đi xoay lại. Cô bé chợt reo: “Con Mướp nhà mình đây mà! Sao cậu biết nó hay ngủ cuộn tròn thế này?” Cả lớp xúm lại. Những ngón tay Minh còn vài vết xước chưa lành.</p>
<p>Mười năm sau, trên bàn làm việc của Hằng – bây giờ là một cô giáo – vẫn có chiếc hộp gỗ nhỏ. Gỗ đã lên màu nâu bóng. Chú mèo vẫn ngủ ngon lành.</p>`,
    source: 'Truyện rất ngắn do nhóm biên soạn tự viết để minh hoạ.'
  },
  steps: [
    { title: 'Yêu cầu của bài văn phân tích truyện', html: `<ul><li>Giới thiệu tác phẩm (tác giả nếu có), nêu khái quát chủ đề và nét đặc sắc.</li><li>Phân tích <b>chủ đề</b> qua các yếu tố nghệ thuật: <b>tình huống, nhân vật, chi tiết, ngôi kể, kết cấu</b>.</li><li>Mỗi luận điểm có dẫn chứng từ truyện (chi tiết, lời nói, hành động) và lời phân tích tác dụng.</li><li>Đánh giá giá trị tác phẩm, nêu cảm nhận của bản thân.</li></ul>` },
    { title: 'Tìm ý: đọc kĩ và đặt câu hỏi', html: `<table class="tbl"><tr><th>Câu hỏi</th><th>Ý tìm được (“Món quà bằng gỗ”)</th></tr>
      <tr><td>Tình huống truyện?</td><td>Buổi sinh nhật: món quà tự làm giản dị giữa những món quà đắt tiền</td></tr>
      <tr><td>Nhân vật Minh thế nào?</td><td>Chân thành, chu đáo (nhớ con mèo bạn kể), khéo tay, kiên trì, hơi tự ti</td></tr>
      <tr><td>Chi tiết đáng chú ý?</td><td>Đèn dầu, dao nhỏ của ông, vết xước trên ngón tay, chú mèo ngủ cuộn tròn</td></tr>
      <tr><td>Kết thúc có gì đặc biệt?</td><td>Mười năm sau, chiếc hộp vẫn ở trên bàn – giá trị bền lâu của tấm lòng</td></tr>
      <tr><td>Chủ đề?</td><td>Giá trị của món quà nằm ở tấm lòng, sự quan tâm chứ không ở giá tiền</td></tr></table>` },
    { title: 'Lập dàn ý', html: `<p>Dàn ý bài phân tích truyện theo luận điểm:</p>`,
      svg: S.flow({ vertical: true, w: 580, items: [{ title: 'Mở bài', text: 'Giới thiệu truyện; nêu chủ đề: giá trị của tấm lòng' }, { title: 'Luận điểm 1', text: 'Tình huống: món quà nhỏ giữa những món quà đắt tiền' }, { title: 'Luận điểm 2', text: 'Nhân vật Minh: chân thành, chu đáo, kiên trì' }, { title: 'Luận điểm 3', text: 'Chi tiết và kết thúc mười năm sau' }, { title: 'Kết bài', text: 'Đánh giá; bài học về cách trao và nhận' }] }),
      caption: 'Dàn ý bài văn phân tích truyện “Món quà bằng gỗ”.' },
    { title: 'Đoạn văn mẫu (luận điểm 2)', html: `<p>Nhân vật Minh hiện lên là một cậu bé chân thành và chu đáo. Không có tiền mua quà đắt tiền, Minh chọn cách tự tay làm: “cả tuần, tối nào cậu cũng ngồi bên chiếc đèn dầu”, gọt “từng thớ gỗ mít”. Các chi tiết “đèn dầu”, “con dao nhỏ của ông” gợi hoàn cảnh không khá giả, càng làm nổi bật sự kiên trì của cậu. Đặc biệt, Minh khắc “một chú mèo đang ngủ – con mèo Hằng hay kể”: cậu đã lắng nghe và nhớ từng điều nhỏ bé bạn chia sẻ. Những “vết xước chưa lành” trên ngón tay là minh chứng lặng lẽ cho tấm lòng ấy. Qua nhân vật Minh, tác giả cho thấy món quà quý nhất là món quà chứa đựng sự quan tâm thật lòng.</p>` },
    { title: 'Kiểm tra và chỉnh sửa', html: `<table class="tbl"><tr><th>Tiêu chí</th><th>Có / Chưa</th></tr>
      <tr><td>Mở bài giới thiệu truyện, nêu chủ đề</td><td>☐</td></tr><tr><td>Phân tích tình huống, nhân vật, chi tiết có dẫn chứng</td><td>☐</td></tr>
      <tr><td>Chỉ ra tác dụng của yếu tố nghệ thuật với chủ đề</td><td>☐</td></tr><tr><td>Không kể lại toàn bộ câu chuyện</td><td>☐</td></tr>
      <tr><td>Kết bài đánh giá, nêu cảm nhận</td><td>☐</td></tr><tr><td>Diễn đạt mạch lạc, đúng chính tả</td><td>☐</td></tr></table>` }
  ],
  summary: 'Bài văn phân tích truyện cần giới thiệu tác phẩm và chủ đề; phân tích các yếu tố nghệ thuật (tình huống, nhân vật, chi tiết, ngôi kể, kết cấu) và chỉ ra tác dụng của chúng trong việc thể hiện chủ đề; có dẫn chứng từ truyện; kết bài đánh giá giá trị và nêu cảm nhận. Tránh kể lại toàn bộ câu chuyện.',
  examples: [
    { title: 'Viết mở bài', problem: 'Viết mở bài gián tiếp cho bài văn phân tích truyện “Món quà bằng gỗ”.', solution: 'Có những món quà ta nhận rồi quên, nhưng cũng có món quà theo ta suốt nhiều năm. Truyện rất ngắn “Món quà bằng gỗ” kể về một món quà như thế: chiếc hộp bút tự tay cậu bé Minh làm tặng bạn. Qua tình huống giản dị và những chi tiết giàu ý nghĩa, truyện gửi gắm thông điệp: giá trị của món quà nằm ở tấm lòng người trao.' },
    { title: 'Phân tích tình huống', problem: 'Viết 3 – 4 câu phân tích tình huống truyện.', solution: 'Truyện đặt món quà gỗ nhỏ bé của Minh bên cạnh “hộp bút màu nhập khẩu, con gấu bông to bằng người, chiếc đồng hồ điện tử”. Tình huống tương phản ấy khiến người đọc, cũng như Minh, lo lắng món quà sẽ bị coi thường – điều được đẩy lên khi có bạn cười “quà gì mà bé tí”. Nhưng phản ứng của Hằng đã đảo ngược tình thế, làm nổi bật giá trị thật của món quà.' },
    { title: 'Phân tích kết thúc', problem: 'Kết thúc “Mười năm sau…” có tác dụng gì?', solution: 'Kết thúc mở ra khoảng thời gian dài, cho thấy món quà không bị lãng quên mà trở thành kỉ vật gắn bó. Chi tiết “gỗ đã lên màu nâu bóng” gợi thời gian và sự nâng niu; “chú mèo vẫn ngủ ngon lành” tạo cảm giác bình yên, ấm áp. Kết thúc khẳng định chủ đề: tấm lòng chân thành có giá trị bền lâu.' }
  ],
  exercises: [
    { question: 'Tìm ba chi tiết thể hiện sự chu đáo của Minh khi chuẩn bị món quà.', hints: ['Minh làm quà trong bao lâu, bằng gì?', 'Hình ảnh khắc trên hộp liên quan gì đến Hằng?'], solution: '(1) Cả tuần, tối nào Minh cũng ngồi gọt gỗ bên đèn dầu; (2) Minh khắc chú mèo đang ngủ – con mèo Hằng hay kể, cho thấy cậu nhớ điều bạn thích; (3) những vết xước chưa lành trên ngón tay cho thấy sự cần mẫn, tận tâm.' },
    { question: 'Viết đoạn văn phân tích nhân vật Hằng (4 – 6 câu).', hints: ['Phản ứng của Hằng khi nhận quà.', 'Chi tiết mười năm sau Hằng vẫn giữ chiếc hộp.'], solution: 'Ví dụ: Hằng là cô bé tinh tế, biết trân trọng tấm lòng người khác. Khi cả lớp còn chú ý đến những món quà đắt tiền, Hằng “cầm hộp bút lên, xoay đi xoay lại” và nhận ra ngay con mèo Mướp của mình. Lời reo “Sao cậu biết nó hay ngủ cuộn tròn thế này?” vừa bày tỏ niềm vui, vừa giúp Minh bớt ngượng. Mười năm sau, Hằng vẫn giữ chiếc hộp trên bàn làm việc, chứng tỏ cô đã coi đó là món quà quý giá. Nhân vật Hằng cho thấy: biết nhận quà cũng là một cách thể hiện tấm lòng.' },
    { question: 'Viết kết bài cho bài văn phân tích truyện, có liên hệ bản thân.', hints: ['Đánh giá ngắn gọn nghệ thuật: tình huống tương phản, chi tiết giàu ý nghĩa, kết thúc dư âm.', 'Liên hệ: em đã từng tặng/nhận món quà nào đặc biệt?'], solution: 'Ví dụ: Với tình huống tương phản, những chi tiết nhỏ mà giàu ý nghĩa và một kết thúc đầy dư âm, “Món quà bằng gỗ” nhắc chúng ta rằng giá trị thật của món quà không đo bằng tiền. Em nhớ mãi tấm thiệp em gái tự vẽ tặng em năm ngoái – nét vẽ còn vụng nhưng em luôn cất trong ngăn bàn. Từ nay, em sẽ chọn quà bằng sự quan tâm và biết trân trọng mọi món quà mình nhận được.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Khi phân tích truyện, điều cần tránh là:', options: ['kể lại toàn bộ câu chuyện mà không phân tích', 'dẫn chứng chi tiết', 'nêu chủ đề', 'chỉ ra tác dụng của tình huống'], answer: 0, explain: 'Kể lại không phải là phân tích.' },
    { type: 'short', q: 'Minh khắc hình con vật gì lên hộp bút?', answer: ['mèo', 'con mèo', 'chú mèo'], answerText: 'con mèo', explain: 'Chú mèo đang ngủ – con mèo Hằng hay kể.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tình huống truyện dựa trên sự tương phản giữa món quà tự làm và những món quà đắt tiền.', answer: true, explain: 'Tình huống tương phản.' },
    { type: 'mcq', q: 'Chi tiết “những ngón tay Minh còn vài vết xước chưa lành” thể hiện:', options: ['sự cần mẫn, tận tâm của Minh', 'Minh bị bạn bắt nạt', 'Minh vụng về', 'Minh chơi thể thao'], answer: 0, explain: 'Minh đã vất vả gọt gỗ.' },
    { type: 'mcq', q: 'Chủ đề của truyện “Món quà bằng gỗ” là:', options: ['giá trị của món quà nằm ở tấm lòng, sự quan tâm', 'nên mua quà thật đắt', 'cách làm đồ gỗ', 'kỉ niệm về con mèo'], answer: 0, explain: 'Thông điệp chính.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mỗi luận điểm trong bài phân tích truyện cần có dẫn chứng từ tác phẩm.', answer: true, explain: 'Dẫn chứng làm luận điểm thuyết phục.' },
    { type: 'short', q: 'Theo phần kết của truyện, bao nhiêu năm sau chiếc hộp vẫn ở trên bàn của Hằng?', answer: ['10', 'mười', 'mười năm'], answerText: '10 năm', explain: '“Mười năm sau…”' },
    { type: 'mcq', q: 'Yếu tố nào KHÔNG phải yếu tố nghệ thuật cần phân tích trong truyện?', options: ['Giá tiền của cuốn sách', 'Tình huống', 'Nhân vật', 'Chi tiết'], answer: 0, explain: 'Giá sách không liên quan.' }
  ]
});
})();
