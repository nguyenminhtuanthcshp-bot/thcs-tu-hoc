/* Ngữ văn 7 – Bài 10. Viết: Bài văn phân tích một nhân vật văn học yêu thích trong cuốn sách đã đọc. Ví dụ: nhân vật cụ Vitalis và Rémi trong tiểu thuyết “Không gia đình” của Hector Malot (1830–1907, tác phẩm thuộc phạm vi công cộng); tóm lược và bài viết mẫu do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-7/b10-viet', {
  objectives: [
    'Viết được bài văn phân tích đặc điểm một nhân vật văn học yêu thích trong cuốn sách đã đọc.',
    'Nêu được đặc điểm nhân vật dựa trên chi tiết về ngoại hình, lời nói, hành động, suy nghĩ và mối quan hệ với nhân vật khác.',
    'Đánh giá được ý nghĩa của nhân vật và nghệ thuật xây dựng nhân vật.'
  ],
  intro: 'Có những nhân vật đi theo ta rất lâu sau khi gấp sách lại. Với nhiều bạn đọc, đó là cụ Vitalis – người thầy nghèo khó mà cao thượng trong “Không gia đình”. Hãy học cách viết về nhân vật em yêu thích một cách thuyết phục.',
  steps: [
    { title: 'Yêu cầu của kiểu bài', html: `<ul><li>Giới thiệu tác phẩm, tác giả và nhân vật được phân tích.</li><li>Nêu các <b>đặc điểm nổi bật</b> của nhân vật (mỗi đặc điểm là một luận điểm).</li><li>Dùng <b>chi tiết, sự việc</b> trong tác phẩm làm bằng chứng; phân tích ý nghĩa của chi tiết.</li><li>Đánh giá nghệ thuật xây dựng nhân vật và ý nghĩa của nhân vật; nêu tình cảm của em.</li></ul>
      <div class="box note">Bài 3 em đã học phân tích nhân vật trong một truyện ngắn; Bài 10 mở rộng ra nhân vật trong cả một cuốn sách, cần chọn lọc chi tiết tiêu biểu từ nhiều chương.</div>` },
    { title: 'Tóm lược tác phẩm', html: `<div class="box text"><div class="t-title">Không gia đình (Hector Malot) – tóm lược</div>
      <p>Rémi là đứa trẻ bị bỏ rơi, được bà mẹ nuôi Barberin thương yêu. Năm lên tám, cậu bị người cha nuôi bán cho cụ Vitalis – một nghệ sĩ hát rong có gánh xiếc thú gồm chú khỉ Joli-Coeur và ba con chó, trong đó có chú chó thông minh Capi. Cụ dạy Rémi đọc chữ, học nhạc và dạy cậu cách làm người. Theo gánh hát, Rémi đi khắp nước Pháp, trải qua bao gian khổ: đói rét, mất bạn đồng hành, thầy bị bắt giam. Cuối cùng, cụ Vitalis chết vì giá rét trong một đêm tuyết ở ngoại ô Paris. Rémi tiếp tục cuộc hành trình, được nhiều người tốt giúp đỡ, và sau cùng tìm được mẹ đẻ của mình.</p>
      <div class="t-source">Tóm lược do nhóm biên soạn viết; tác phẩm gốc (1878) thuộc phạm vi công cộng.</div></div>` },
    { title: 'Tìm ý: đặc điểm cụ Vitalis', html: `<p>Đặt câu hỏi: nhân vật có những phẩm chất gì, thể hiện qua chi tiết nào?</p>`,
      svg: S.mindmap({ center: 'Cụ Vitalis', branches: [{ title: 'Nhân hậu', items: ['Thương Rémi như con', 'Che chở trò trong đêm tuyết'] }, { title: 'Người thầy tận tâm', items: ['Dạy Rémi đọc chữ, học nhạc', 'Dạy cách sống tự trọng'] }, { title: 'Tự trọng, cao thượng', items: ['Nghèo nhưng không hèn', 'Không muốn ai thương hại'] }, { title: 'Nghệ thuật', items: ['Qua lời kể của Rémi', 'Chi tiết cảm động, chân thực'] }] }),
      caption: 'Sơ đồ tìm ý cho bài phân tích nhân vật cụ Vitalis.' },
    { title: 'Dàn ý', html: `<table class="tbl"><tr><th>Phần</th><th>Nội dung</th></tr>
      <tr><td>Mở bài</td><td>Giới thiệu “Không gia đình” (Hector Malot), nhân vật cụ Vitalis; ấn tượng chung.</td></tr>
      <tr><td>Thân bài</td><td>Luận điểm 1: nhân hậu, thương yêu Rémi (chi tiết). Luận điểm 2: người thầy tận tâm (dạy chữ, dạy nhạc). Luận điểm 3: tự trọng, cao thượng. Đánh giá nghệ thuật: kể ở ngôi thứ nhất (Rémi), chi tiết chân thực, cảm động.</td></tr>
      <tr><td>Kết bài</td><td>Khẳng định vẻ đẹp nhân vật; bài học, tình cảm của em.</td></tr></table>` },
    { title: 'Đoạn văn mẫu (một luận điểm)', html: `<div class="box text"><p>Trước hết, cụ Vitalis là một người thầy tận tâm. Không có trường lớp, không có sách vở, cụ tự tay khắc chữ cái lên những mảnh gỗ nhỏ để dạy Rémi đọc. Trên những chặng đường lang thang, cụ còn dạy cậu học nhạc, đọc nốt, hát. Nhưng bài học lớn nhất cụ dạy Rémi là cách sống: làm việc để tự nuôi mình, giữ lòng tự trọng dù nghèo khó. Chính nhờ người thầy ấy, cậu bé bị bán đi với giá vài chục đồng bạc đã trở thành một con người có học thức và nhân cách. Chi tiết những mảnh gỗ khắc chữ tuy nhỏ bé mà khiến người đọc xúc động, bởi nó cho thấy tình thương được thể hiện bằng sự kiên nhẫn từng ngày.</p></div>
      <p class="muted">Đoạn văn do nhóm biên soạn tự viết để minh hoạ; chi tiết dựa theo nội dung tác phẩm.</p>` }
  ],
  summary: 'Bài văn phân tích nhân vật yêu thích trong sách: mở bài giới thiệu tác phẩm, tác giả, nhân vật; thân bài nêu từng đặc điểm (luận điểm) kèm chi tiết, sự việc làm bằng chứng và phân tích ý nghĩa; đánh giá nghệ thuật xây dựng nhân vật; kết bài khẳng định ý nghĩa và tình cảm của em. Ví dụ: cụ Vitalis trong “Không gia đình” – nhân hậu, người thầy tận tâm, tự trọng, cao thượng.',
  examples: [
    { title: 'Mở bài', problem: 'Viết mở bài cho đề: “Phân tích nhân vật Rémi trong “Không gia đình””.', solution: '“Không gia đình” của nhà văn Pháp Hector Malot đã đưa em theo chân cậu bé Rémi đi khắp nước Pháp. Rémi để lại trong em ấn tượng sâu sắc về một cậu bé nghị lực, giàu tình thương và biết ơn.”' },
    { title: 'Chi tiết làm bằng chứng', problem: 'Nêu một chi tiết thể hiện lòng nhân hậu của cụ Vitalis.', solution: 'Trong đêm tuyết rét buốt, đói lả, không nơi trú ngụ, cụ để Rémi nằm sát vào mình, đặt chú chó Capi lên ngực cậu cho ấm. Sáng hôm sau, cụ đã chết vì giá rét, còn Rémi được một gia đình làm vườn cứu sống. Chi tiết cho thấy tình thương cụ dành cho Rémi như tình cha con.' },
    { title: 'Đánh giá nghệ thuật', problem: 'Việc truyện được kể bằng lời Rémi (ngôi thứ nhất) giúp gì cho việc khắc hoạ cụ Vitalis?', solution: 'Người đọc nhìn cụ Vitalis qua đôi mắt và cảm xúc của cậu học trò, nên hình ảnh cụ vừa chân thực vừa thấm đượm lòng biết ơn, kính yêu; những nỗi buồn cụ giấu kín cũng được Rémi dần dần thấu hiểu.' }
  ],
  exercises: [
    { question: 'Lập dàn ý phân tích nhân vật Rémi (3 luận điểm).', hints: ['Nghị lực vượt khó.', 'Tình thương, lòng biết ơn; ham học.'], solution: 'MB: giới thiệu tác phẩm, nhân vật Rémi. TB: LĐ1 – nghị lực, không gục ngã trước khó khăn (đói rét, mất thầy vẫn tiếp tục hành trình); LĐ2 – giàu tình thương, biết ơn (nhớ mẹ nuôi, thương thầy Vitalis, yêu các con vật trong gánh xiếc); LĐ3 – ham học (chăm chỉ học chữ, học nhạc với thầy). Nghệ thuật: kể ở ngôi thứ nhất, bộc lộ nội tâm. KB: Rémi là tấm gương về nghị lực và lòng nhân hậu.' },
    { question: 'Vì sao khi phân tích nhân vật trong một cuốn sách dài, cần chọn lọc chi tiết tiêu biểu?', hints: ['Cuốn sách có rất nhiều chi tiết.', 'Bài viết có giới hạn độ dài.'], solution: 'Cuốn sách dài có quá nhiều sự việc; nếu kể hết, bài viết thành tóm tắt, lan man. Chọn chi tiết tiêu biểu nhất cho từng đặc điểm giúp bài viết tập trung, sâu sắc và thuyết phục.' },
    { question: 'Viết đoạn kết bài (3–4 câu) cho bài phân tích cụ Vitalis.', hints: ['Khẳng định vẻ đẹp nhân vật.', 'Nêu tình cảm, bài học.'], solution: 'Ví dụ: “Cụ Vitalis là hình ảnh người thầy nghèo khó mà cao thượng, nhân hậu và giàu lòng tự trọng. Bằng lời kể chân thành của Rémi, Hector Malot đã khắc hoạ một nhân vật khiến người đọc nhiều thế hệ xúc động. Gấp sách lại, em càng thêm biết ơn những thầy cô đã dạy em không chỉ con chữ mà cả cách làm người.”' }
  ],
  quiz: [
    { type: 'mcq', q: 'Tác giả tiểu thuyết “Không gia đình” là:', options: ['Hector Malot', 'Jules Verne', 'H. C. Andersen', 'Lev Tolstoy'], answer: 0, explain: 'Nhà văn Pháp Hector Malot.' },
    { type: 'short', q: 'Tên chú chó thông minh trong gánh xiếc của cụ Vitalis là gì?', answer: ['Capi'], answerText: 'Capi', explain: 'Chú chó Capi.' },
    { type: 'mcq', q: 'Trong bài phân tích nhân vật, mỗi đặc điểm của nhân vật được triển khai như:', options: ['Một luận điểm kèm chi tiết làm bằng chứng', 'Một câu cảm thán', 'Một bài thơ', 'Một mục tài liệu tham khảo'], answer: 0, explain: 'Đặc điểm = luận điểm.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Bài phân tích nhân vật chỉ cần kể lại toàn bộ câu chuyện.', answer: false, explain: 'Cần phân tích, đánh giá, không chỉ kể.' },
    { type: 'mcq', q: 'Cụ Vitalis dạy Rémi đọc bằng cách:', options: ['Khắc chữ lên những mảnh gỗ nhỏ', 'Cho đi học ở trường', 'Mua sách giáo khoa', 'Nhờ bà Barberin dạy'], answer: 0, explain: 'Chi tiết trong tác phẩm.' },
    { type: 'mcq', q: '“Không gia đình” được kể bằng lời của nhân vật nào?', options: ['Rémi', 'Cụ Vitalis', 'Chó Capi', 'Bà Barberin'], answer: 0, explain: 'Rémi kể ở ngôi thứ nhất.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Kết bài nên khẳng định ý nghĩa nhân vật và nêu tình cảm, bài học của em.', answer: true, explain: 'Đúng yêu cầu kết bài.' },
    { type: 'mcq', q: 'Đặc điểm nào phù hợp với cụ Vitalis?', options: ['Nhân hậu, tự trọng, tận tâm', 'Tham lam, độc ác', 'Lười biếng, ích kỉ', 'Hèn nhát, dối trá'], answer: 0, explain: 'Vẻ đẹp của nhân vật.' }
  ]
});
})();
