/* Ngữ văn 9 – Bài 6. Nói và nghe: Kể một câu chuyện tưởng tượng. Bài kể mẫu “Người gác thư viện lúc nửa đêm” do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-9/b6-noi', {
  objectives: [
    'Kể được một câu chuyện tưởng tượng hấp dẫn, có mở đầu – diễn biến – kết thúc, có yếu tố bất ngờ.',
    'Sử dụng giọng kể, ngữ điệu, điệu bộ, ánh mắt phù hợp; tương tác với người nghe.',
    'Biết lắng nghe, nhận xét và góp ý bài kể của bạn.'
  ],
  intro: 'Kể chuyện bằng lời khác với viết: người nghe không thể “đọc lại” nên người kể phải giữ mạch chuyện rõ ràng, giọng kể lôi cuốn, biết dừng đúng lúc để tạo hồi hộp.',
  text: {
    title: 'Bài kể mẫu: “Người gác thư viện lúc nửa đêm”',
    html: `<p><i>(Người kể nhìn quanh lớp, hạ giọng.)</i> Các bạn có bao giờ tự hỏi: ban đêm, khi trường học vắng tanh, những cuốn sách trong thư viện làm gì không?</p>
<p>Tối hôm ấy, mình để quên áo khoác ở thư viện. Đèn đã tắt, nhưng qua khe cửa, mình thấy một vệt sáng xanh nhạt. <i>(Dừng một nhịp.)</i> Mình ghé mắt nhìn vào… và suýt hét lên. Trên bàn, cuốn “Truyện Kiều” đang tự lật từng trang, còn những con chữ thì bay lên như đom đóm.</p>
<p>“Đừng sợ,” một giọng nói trầm vang lên. Đó là một ông cụ đeo kính tròn, mặc áo dài the – không, đúng hơn là hình ảnh của ông cụ hiện ra từ ánh sáng. “Ta là người gác thư viện. Mỗi đêm, ta giúp những con chữ bị lãng quên được thở.”</p>
<p>Ông kể: có những cuốn sách lâu lắm không ai mượn, chữ trong đó sẽ mờ dần. <i>(Giơ một cuốn sách lên.)</i> “Nếu không ai đọc, một ngày kia, câu chuyện sẽ biến mất.” Mình hỏi: “Vậy cháu có thể giúp gì?” Ông mỉm cười: “Hãy mượn một cuốn sách cũ, đọc nó và kể lại cho người khác.”</p>
<p>Sáng hôm sau, mình đến thư viện sớm. Trên bàn vẫn là cuốn “Truyện Kiều”, mở đúng trang có câu “Trăm năm trong cõi người ta…”. Và kẹp giữa trang sách là… <i>(Dừng.)</i> chiếc áo khoác mình để quên, được gấp gọn gàng.</p>
<p>Từ hôm ấy, mỗi tuần mình mượn một cuốn sách cũ. Còn các bạn – các bạn sẽ cứu câu chuyện nào? <i>(Mỉm cười, nhìn người nghe.)</i></p>`,
    source: 'Bài kể do nhóm biên soạn tự viết; câu thơ “Trăm năm trong cõi người ta…” trích “Truyện Kiều” (Nguyễn Du – phạm vi công cộng).'
  },
  steps: [
    { title: 'Chuẩn bị câu chuyện', html: `<ul><li>Chọn ý tưởng: điều gì xảy ra nếu…? (đồ vật biết nói, du hành thời gian, gặp nhân vật văn học…).</li>
      <li>Xác định nhân vật, bối cảnh, sự việc chính, chi tiết bất ngờ, thông điệp.</li>
      <li>Ghi dàn ý bằng từ khoá trên thẻ nhỏ, <b>không viết thành văn để đọc</b>.</li></ul>`,
      svg: S.storyArc({ stages: ['Quên áo ở thư viện', 'Thấy ánh sáng lạ', 'Gặp người gác', 'Lời nhắn nhủ', 'Chiếc áo trong sách'], peak: 2, notes: ['mở đầu', 'tò mò', 'kì ảo', 'thông điệp', 'bất ngờ'] }),
      caption: 'Dàn ý bài kể mẫu.' },
    { title: 'Kĩ thuật kể chuyện', html: `<p>Kể bằng lời cần phối hợp nhiều yếu tố:</p>`,
      svg: S.mindmap({ center: 'Kể chuyện hấp dẫn', branches: [{ title: 'Giọng kể', items: ['Lên xuống, nhanh chậm', 'Giọng nhân vật'] }, { title: 'Ngắt nghỉ', items: ['Dừng tạo hồi hộp', 'Nhấn từ khoá'] }, { title: 'Phi ngôn ngữ', items: ['Ánh mắt, nét mặt', 'Cử chỉ, đạo cụ'] }, { title: 'Tương tác', items: ['Câu hỏi mở đầu', 'Câu hỏi kết thúc'] }] }),
      caption: 'Các kĩ thuật kể chuyện.' },
    { title: 'Trình bày', html: `<ol><li>Mở đầu gây tò mò (câu hỏi, tình huống lạ).</li><li>Kể diễn biến theo trình tự, dùng từ nối thời gian: “tối hôm ấy”, “sáng hôm sau”…</li><li>Tạo điểm nhấn bằng khoảng dừng trước chi tiết bất ngờ.</li><li>Kết thúc bằng thông điệp hoặc câu hỏi cho người nghe.</li></ol>
      <div class="box key">Thời lượng khoảng 3 – 5 phút. Nhìn người nghe thay vì nhìn giấy.</div>` },
    { title: 'Lắng nghe và nhận xét', html: `<table class="tbl"><tr><th>Tiêu chí</th><th>Nhận xét</th></tr>
      <tr><td>Câu chuyện có mở đầu – diễn biến – kết thúc rõ ràng</td><td>☐ Tốt ☐ Cần cải thiện</td></tr>
      <tr><td>Có yếu tố tưởng tượng, bất ngờ</td><td>☐ Tốt ☐ Cần cải thiện</td></tr>
      <tr><td>Giọng kể, ngắt nghỉ, cử chỉ phù hợp</td><td>☐ Tốt ☐ Cần cải thiện</td></tr>
      <tr><td>Có thông điệp, tương tác với người nghe</td><td>☐ Tốt ☐ Cần cải thiện</td></tr></table>
      <p>Góp ý theo cách: khen một điểm cụ thể → gợi ý một điểm cần cải thiện.</p>` }
  ],
  summary: 'Kể chuyện tưởng tượng: chọn ý tưởng “điều gì xảy ra nếu…”, xác định nhân vật, bối cảnh, sự việc, chi tiết bất ngờ, thông điệp; ghi dàn ý bằng từ khoá. Khi kể: mở đầu gây tò mò, diễn biến theo trình tự, dùng giọng kể, ngắt nghỉ, ánh mắt, cử chỉ, tạo khoảng dừng trước chi tiết bất ngờ, kết bằng thông điệp hoặc câu hỏi. Người nghe nhận xét theo tiêu chí, góp ý cụ thể, tôn trọng.',
  examples: [
    { title: 'Cách mở đầu', problem: 'Bài kể mẫu mở đầu như thế nào? Tác dụng?', solution: 'Bằng câu hỏi “ban đêm… những cuốn sách trong thư viện làm gì không?” kèm cử chỉ nhìn quanh, hạ giọng. Câu hỏi khơi gợi trí tò mò, kéo người nghe vào câu chuyện ngay từ đầu.' },
    { title: 'Tạo hồi hộp', problem: 'Người kể dùng kĩ thuật gì trước chi tiết chiếc áo khoác?', solution: 'Người kể dừng lại (“và kẹp giữa trang sách là… (Dừng.)”) trước khi nói ra chi tiết bất ngờ. Khoảng dừng khiến người nghe nín thở chờ đợi, làm chi tiết cuối thêm ấn tượng.' },
    { title: 'Thông điệp', problem: 'Câu chuyện gửi gắm thông điệp gì?', solution: 'Hãy đọc và kể lại những cuốn sách, nhất là sách cũ, để những câu chuyện không bị lãng quên. Thông điệp được lồng vào lời người gác thư viện và câu hỏi cuối bài dành cho người nghe.' }
  ],
  exercises: [
    { question: 'Lập dàn ý bằng từ khoá cho câu chuyện tưởng tượng: “Một ngày em gặp nhân vật Vân Tiên giữa thành phố hiện đại”.', hints: ['Mở đầu – diễn biến – kết thúc.', 'Chi tiết bất ngờ và thông điệp.'], solution: 'Ví dụ: Mở đầu: tan học, thấy chàng trai mặc áo nho sinh đứng giữa ngã tư, ngơ ngác. Diễn biến: em dẫn chàng qua đường; chàng thấy một bạn bị giật cặp liền đuổi theo giúp (tinh thần “kiến nghĩa bất vi”); em giải thích luật giao thông, cách gọi công an. Bất ngờ: chàng trao lại chiếc cặp cho em – hoá ra đó là cặp của em rơi lúc nào không biết. Kết thúc: chàng biến mất; thông điệp: lòng nghĩa hiệp cần đi cùng hiểu biết và cách làm phù hợp với thời đại.' },
    { question: 'Viết lại một đoạn trong bài kể mẫu, đánh dấu chỗ cần ngắt nghỉ (/) và chỗ nhấn giọng (in đậm).', hints: ['Chọn đoạn có chi tiết kì ảo.', 'Nhấn các từ gợi cảm xúc.'], solution: 'Ví dụ: Mình ghé mắt nhìn vào… / và <b>suýt hét lên</b>. // Trên bàn, / cuốn “Truyện Kiều” đang <b>tự lật</b> từng trang, / còn những con chữ / thì <b>bay lên</b> như đom đóm.' },
    { question: 'Viết 3 câu nhận xét bài kể của một bạn theo cách “khen cụ thể – góp ý cụ thể”.', hints: ['Nêu điểm mạnh rõ ràng.', 'Gợi ý có thể thực hiện được.'], solution: '“Mình rất thích đoạn mở đầu bằng câu hỏi của bạn, nó làm cả lớp tò mò ngay.” “Chi tiết con chữ bay lên như đom đóm rất đẹp và dễ hình dung.” “Nếu bạn nhìn người nghe nhiều hơn thay vì nhìn giấy thì phần kết sẽ còn cuốn hút hơn nữa.”' }
  ],
  quiz: [
    { type: 'mcq', q: 'Khi chuẩn bị kể chuyện, nên:', options: ['ghi dàn ý bằng từ khoá', 'viết thành bài văn rồi đọc to', 'không chuẩn bị gì', 'học thuộc từng chữ'], answer: 0, explain: 'Từ khoá giúp kể tự nhiên.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khoảng dừng trước chi tiết bất ngờ giúp tạo sự hồi hộp cho người nghe.', answer: true, explain: 'Kĩ thuật ngắt nghỉ.' },
    { type: 'short', q: 'Trong bài kể mẫu, đồ vật người kể để quên ở thư viện là chiếc áo … (một chữ).', answer: ['khoác', 'khoac'], answerText: 'khoác', explain: 'Chi tiết mở đầu và kết thúc.' },
    { type: 'mcq', q: 'Yếu tố phi ngôn ngữ trong kể chuyện gồm:', options: ['ánh mắt, nét mặt, cử chỉ', 'từ ngữ', 'câu ghép', 'dấu câu'], answer: 0, explain: 'Hỗ trợ lời kể.' },
    { type: 'mcq', q: 'Bài kể mẫu kết thúc bằng:', options: ['một câu hỏi dành cho người nghe', 'lời chào tạm biệt', 'một bài thơ dài', 'danh sách tài liệu'], answer: 0, explain: '“Các bạn sẽ cứu câu chuyện nào?”' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Người kể chuyện nên nhìn vào giấy suốt thời gian kể.', answer: false, explain: 'Nên nhìn người nghe.' },
    { type: 'short', q: 'Người gác thư viện khuyên mượn một cuốn sách cũ, đọc và … lại cho người khác (một chữ).', answer: ['kể', 'ke'], answerText: 'kể', explain: 'Thông điệp của câu chuyện.' },
    { type: 'mcq', q: 'Cách góp ý phù hợp cho bài kể của bạn là:', options: ['khen điểm cụ thể rồi gợi ý điểm cần cải thiện', 'chỉ nêu lỗi', 'nói “chán quá”', 'không nhận xét'], answer: 0, explain: 'Góp ý xây dựng.' }
  ]
});
})();
