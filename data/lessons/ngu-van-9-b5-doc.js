/* Ngữ văn 9 – Bài 5. Đọc hiểu bi kịch. Ngữ liệu: tóm tắt và cảnh kịch kể lại từ “Rô-mê-ô và Giu-li-ét” (W. Shakespeare, khoảng 1595 – thuộc phạm vi công cộng) – lời thoại do nhóm biên soạn tự viết lại theo tinh thần nguyên tác, không trích bản dịch; tóm tắt tình huống “Lơ Xít” (P. Corneille, 1637 – phạm vi công cộng) bằng lời nhóm biên soạn. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-9/b5-doc', {
  objectives: [
    'Nhận biết được đặc điểm của bi kịch: xung đột, hành động, nhân vật, lời thoại, kết cục bi thảm và tác động thanh lọc tâm hồn.',
    'Phân tích được xung đột kịch và tâm trạng nhân vật qua lời thoại, độc thoại.',
    'Hiểu được chủ đề của đoạn trích “Rô-mê-ô và Giu-li-ét”: khát vọng tình yêu tự do vượt lên hận thù.',
    'Biết đồng cảm với nỗi đau của con người và rút ra bài học về lòng khoan dung.'
  ],
  intro: 'Có những câu chuyện khiến người xem rơi nước mắt nhưng lại khiến tâm hồn trong sáng hơn. Đó là bi kịch. “Rô-mê-ô và Giu-li-ét” của Sếch-xpia kể về tình yêu của hai người trẻ thuộc hai dòng họ thù địch – một tình yêu đẹp nhưng dẫn tới kết cục đau thương.',
  text: {
    title: 'Rô-mê-ô và Giu-li-ét (tóm tắt và cảnh kịch kể lại)',
    html: `<p><b>Tóm tắt (lời nhóm biên soạn).</b> Ở thành Vê-rô-na (I-ta-li-a), hai dòng họ Môn-ta-ghiu và Ca-piu-lét thù hận nhau đã lâu đời. Trong một buổi dạ hội nhà Ca-piu-lét, chàng Rô-mê-ô nhà Môn-ta-ghiu gặp và yêu nàng Giu-li-ét nhà Ca-piu-lét. Đêm ấy, Rô-mê-ô trèo tường vào vườn, nghe Giu-li-ét bày tỏ nỗi lòng bên cửa sổ. Hai người bí mật làm lễ cưới nhờ tu sĩ Lô-ren-xơ. Nhưng hận thù bùng lên: Rô-mê-ô lỡ tay giết anh họ của Giu-li-ét và bị trục xuất. Để thoát cuộc hôn nhân bị ép buộc, Giu-li-ét uống thuốc ngủ giả chết. Tin nhắn không đến kịp; Rô-mê-ô tưởng nàng chết thật, uống thuốc độc bên nàng. Giu-li-ét tỉnh dậy, thấy người yêu đã chết, cũng tự vẫn. Trước cái chết của hai người trẻ, hai dòng họ mới hối hận và làm lành.</p>
<p><b>Cảnh trong vườn (lời thoại do nhóm biên soạn viết lại, không trích bản dịch).</b></p>
<p><i>(Đêm. Giu-li-ét đứng bên cửa sổ, không biết Rô-mê-ô đang ở dưới vườn.)</i></p>
<p><b>GIU-LI-ÉT:</b> Rô-mê-ô ơi, sao chàng lại là Rô-mê-ô? Giá mà chàng mang một cái tên khác! Cái tên Môn-ta-ghiu có phải là tay, là mặt, là trái tim của chàng đâu. Bông hồng dù mang tên gì thì vẫn thơm như thế.</p>
<p><b>RÔ-MÊ-Ô</b> <i>(bước ra)</i>: Nàng hãy gọi ta là “người yêu”, ta sẽ bỏ cái tên cũ đi ngay.</p>
<p><b>GIU-LI-ÉT</b> <i>(giật mình)</i>: Ai đó? Sao chàng vào được đây? Tường cao thế, và nếu người nhà em bắt gặp, chàng sẽ mất mạng!</p>
<p><b>RÔ-MÊ-Ô:</b> Tình yêu cho ta đôi cánh để vượt tường. Ánh mắt giận dữ của nàng còn đáng sợ hơn hai mươi lưỡi gươm của họ.</p>
<p><b>GIU-LI-ÉT:</b> Em không muốn chàng gặp nguy hiểm vì em… Nhưng em cũng không thể giấu lòng mình nữa.</p>
<p><b>Tình huống “Lơ Xít” (Coóc-nây) – tóm tắt:</b> Chàng Rô-đri-gơ yêu nàng Si-men, nhưng cha của Si-men xúc phạm cha chàng. Chàng phải chọn giữa danh dự gia đình và tình yêu; chọn danh dự, chàng mất tình yêu – chọn tình yêu, chàng mất danh dự. Đó là xung đột bi kịch điển hình.</p>`,
    source: 'Tóm tắt “Rô-mê-ô và Giu-li-ét” (William Shakespeare, khoảng 1595) và “Lơ Xít” (Pierre Corneille, 1637) – tác phẩm thuộc phạm vi công cộng – do nhóm biên soạn kể lại; lời thoại cảnh trong vườn do nhóm biên soạn viết lại theo tinh thần nguyên tác, không trích bản dịch có bản quyền.'
  },
  steps: [
    { title: 'Bi kịch là gì?', html: `<ul><li><b>Bi kịch</b> là thể loại kịch thể hiện <b>xung đột gay gắt, không thể điều hoà</b> giữa khát vọng tốt đẹp của con người với hiện thực.</li>
      <li><b>Nhân vật bi kịch</b> thường có phẩm chất cao đẹp, khát vọng chính đáng nhưng gặp thất bại, đau khổ hoặc cái chết.</li>
      <li><b>Kết cục</b> thường bi thảm; gây xót thương, sợ hãi và giúp người xem “thanh lọc” tâm hồn, suy ngẫm về con người, cuộc đời.</li>
      <li>Ngôn ngữ: <b>đối thoại, độc thoại, bàng thoại</b>; chỉ dẫn sân khấu in nghiêng trong ngoặc.</li></ul>`,
      svg: S.mindmap({ center: 'Bi kịch', branches: [{ title: 'Xung đột', items: ['Gay gắt', 'Không thể điều hoà'] }, { title: 'Nhân vật', items: ['Phẩm chất đẹp', 'Khát vọng chính đáng'] }, { title: 'Kết cục', items: ['Đau thương', 'Thanh lọc tâm hồn'] }, { title: 'Ngôn ngữ', items: ['Đối thoại, độc thoại', 'Chỉ dẫn sân khấu'] }] }),
      caption: 'Đặc điểm cơ bản của bi kịch.' },
    { title: 'Cốt truyện và xung đột', html: `<p>Xung đột chính: <b>tình yêu tự do</b> của hai người trẻ ↔ <b>hận thù dòng họ</b> truyền kiếp.</p>`,
      svg: S.storyArc({ stages: ['Hai họ thù hận', 'Gặp gỡ, yêu nhau', 'Cưới bí mật', 'Rô-mê-ô bị trục xuất', 'Cái chết, hoà giải'], peak: 3, notes: ['bối cảnh', 'khát vọng', 'vượt rào cản', 'xung đột đỉnh điểm', 'kết cục bi thảm'] }),
      caption: 'Sơ đồ cốt truyện “Rô-mê-ô và Giu-li-ét” (tóm tắt).' },
    { title: 'Tâm trạng nhân vật qua lời thoại', html: `<ul><li><b>Giu-li-ét</b> (độc thoại, tưởng không ai nghe): “sao chàng lại là Rô-mê-ô?”, “Bông hồng dù mang tên gì thì vẫn thơm như thế” → nàng khát khao vượt qua cái tên, dòng họ; tình yêu chân thành, táo bạo.</li>
      <li><b>Rô-mê-ô</b>: sẵn sàng “bỏ cái tên cũ”, coi nguy hiểm không bằng ánh mắt giận dữ của người yêu → say đắm, dũng cảm.</li>
      <li>Giu-li-ét vừa lo cho người yêu vừa không giấu được lòng mình → tâm trạng giằng xé giữa lí trí và tình cảm.</li></ul>` },
    { title: 'Chủ đề và giá trị', html: `<ul><li>Ca ngợi tình yêu tự do, trong sáng, dám vượt qua định kiến.</li>
      <li>Lên án hận thù mù quáng đã giết chết tuổi trẻ và tình yêu.</li>
      <li>Kết cục: cái chết của hai người trẻ khiến hai dòng họ hoà giải – tình yêu chiến thắng hận thù bằng một cái giá quá đắt.</li></ul>
      <div class="box key">Ở “Lơ Xít”, xung đột nằm ngay trong tâm hồn nhân vật: danh dự ↔ tình yêu. Bi kịch có thể là xung đột giữa con người với hoàn cảnh, hoặc giữa hai khát vọng bên trong một con người.</div>` },
    { title: 'Cách đọc văn bản bi kịch', html: `<ol><li>Xác định bối cảnh, nhân vật, xung đột.</li><li>Theo dõi hành động và lời thoại để hiểu tâm trạng, tính cách.</li><li>Chú ý chỉ dẫn sân khấu (in nghiêng) để hình dung cảnh diễn.</li><li>Tìm nguyên nhân dẫn tới kết cục bi thảm; rút ra thông điệp.</li></ol>` }
  ],
  summary: 'Bi kịch thể hiện xung đột gay gắt, không thể điều hoà giữa khát vọng tốt đẹp của con người với hiện thực; nhân vật có phẩm chất cao đẹp nhưng chịu kết cục đau thương; tác phẩm gây xót thương và thanh lọc tâm hồn. “Rô-mê-ô và Giu-li-ét” thể hiện xung đột giữa tình yêu tự do và hận thù dòng họ, ca ngợi tình yêu, lên án hận thù; “Lơ Xít” là xung đột giữa danh dự và tình yêu trong tâm hồn nhân vật.',
  examples: [
    { title: 'Xác định xung đột', problem: 'Xung đột cơ bản trong “Rô-mê-ô và Giu-li-ét” là gì? Vì sao đó là xung đột bi kịch?', solution: 'Xung đột giữa tình yêu tự do, chân thành của Rô-mê-ô và Giu-li-ét với mối hận thù truyền kiếp của hai dòng họ. Đó là xung đột bi kịch vì không thể điều hoà: hai người không thể từ bỏ tình yêu, còn hận thù lại không chịu buông tha họ – cuối cùng chỉ có cái chết mới chấm dứt được xung đột.' },
    { title: 'Phân tích một câu thoại', problem: 'Câu “Bông hồng dù mang tên gì thì vẫn thơm như thế” thể hiện suy nghĩ gì của Giu-li-ét?', solution: 'Giu-li-ét cho rằng giá trị thật của con người nằm ở bản chất, không ở cái tên hay dòng họ. Như bông hồng đổi tên vẫn thơm, Rô-mê-ô dù mang họ Môn-ta-ghiu vẫn là người nàng yêu. Câu thoại thể hiện tư tưởng tiến bộ: phủ nhận định kiến dòng họ, đề cao con người và tình yêu tự do.' },
    { title: 'Nhận diện độc thoại', problem: 'Lời đầu tiên của Giu-li-ét là đối thoại hay độc thoại? Tác dụng?', solution: 'Đó là độc thoại: Giu-li-ét nói một mình bên cửa sổ, không biết Rô-mê-ô đang nghe. Độc thoại giúp bộc lộ trực tiếp những suy nghĩ thầm kín nhất của nhân vật – khát khao Rô-mê-ô không mang họ thù địch – nên chân thật và xúc động; đồng thời tạo tình huống kịch khi Rô-mê-ô bất ngờ bước ra.' }
  ],
  exercises: [
    { question: 'Tìm hai chỉ dẫn sân khấu trong cảnh kịch và nêu tác dụng.', hints: ['Chỉ dẫn sân khấu in nghiêng, trong ngoặc.', 'Chúng cho biết điều gì về hành động, cảm xúc?'], solution: '“(Đêm. Giu-li-ét đứng bên cửa sổ, không biết Rô-mê-ô đang ở dưới vườn.)” – cho biết thời gian, không gian, vị trí nhân vật, giúp hiểu lời của Giu-li-ét là độc thoại. “(giật mình)” – thể hiện cảm xúc bất ngờ của Giu-li-ét khi nghe tiếng Rô-mê-ô, giúp diễn viên diễn đúng và người đọc hình dung cảnh.' },
    { question: 'Vì sao nói kết cục của “Rô-mê-ô và Giu-li-ét” vừa bi thảm vừa có ý nghĩa tích cực?', hints: ['Điều gì xảy ra với hai nhân vật?', 'Hai dòng họ thay đổi thế nào?'], solution: 'Bi thảm vì hai người trẻ yêu nhau tha thiết đều chết – cái đẹp bị huỷ diệt. Nhưng có ý nghĩa tích cực vì cái chết của họ khiến hai dòng họ tỉnh ngộ, hối hận và làm lành: tình yêu cuối cùng đã chiến thắng hận thù, dù phải trả giá quá đắt. Kết cục khiến người xem xót thương và suy ngẫm về tác hại của hận thù.' },
    { question: 'Viết đoạn văn (6 – 8 câu) nêu suy nghĩ của em về thông điệp của tác phẩm đối với cuộc sống hôm nay.', hints: ['Hận thù, định kiến vẫn tồn tại ở đâu?', 'Bài học về khoan dung, đối thoại.'], solution: 'Ví dụ: Hơn bốn thế kỉ đã qua, câu chuyện Rô-mê-ô và Giu-li-ét vẫn làm người đọc day dứt. Bi kịch của hai người trẻ không đến từ số phận mà đến từ hận thù của người lớn – một hận thù mà không ai còn nhớ rõ nguyên do. Ngày nay, định kiến và hận thù vẫn có thể xuất hiện giữa các nhóm bạn, các cộng đồng, thậm chí trên mạng xã hội. Chúng khiến con người không nhìn thấy nhau như những con người. Tác phẩm nhắc em rằng hãy nhìn một người ở bản chất của họ, như Giu-li-ét nói về bông hồng. Và đừng đợi đến khi mất mát xảy ra mới biết hoà giải. Khoan dung, đối thoại chính là cách để những bi kịch như thế không lặp lại.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Đặc điểm cơ bản của bi kịch là:', options: ['xung đột gay gắt không thể điều hoà, kết cục thường đau thương', 'luôn kết thúc vui vẻ', 'chỉ có lời người kể chuyện', 'nhân vật chủ yếu là loài vật'], answer: 0, explain: 'Bi kịch gây xót thương, thanh lọc tâm hồn.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Rô-mê-ô và Giu-li-ét thuộc hai dòng họ thù địch nhau.', answer: true, explain: 'Môn-ta-ghiu và Ca-piu-lét.' },
    { type: 'short', q: 'Tác giả của vở “Rô-mê-ô và Giu-li-ét” là ai (tên phiên âm hoặc tên gốc)?', answer: ['Sếch-xpia', 'Shakespeare', 'Sech-xpia', 'Sếch xpia', 'William Shakespeare', 'Uy-li-am Sếch-xpia'], answerText: 'Sếch-xpia (W. Shakespeare)', explain: 'Nhà viết kịch Anh (1564 – 1616).' },
    { type: 'mcq', q: 'Lời Giu-li-ét nói một mình bên cửa sổ là:', options: ['độc thoại', 'đối thoại', 'lời người kể chuyện', 'chỉ dẫn sân khấu'], answer: 0, explain: 'Nàng không biết có người nghe.' },
    { type: 'mcq', q: 'Câu “Bông hồng dù mang tên gì thì vẫn thơm như thế” thể hiện:', options: ['giá trị con người ở bản chất, không ở dòng họ', 'Giu-li-ét thích hoa hồng', 'sự thù hận', 'lời chào hỏi'], answer: 0, explain: 'Phủ nhận định kiến dòng họ.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Chỉ dẫn sân khấu thường được in nghiêng và đặt trong ngoặc đơn.', answer: true, explain: 'Cho biết hành động, cảm xúc, bối cảnh.' },
    { type: 'short', q: 'Trong “Lơ Xít”, Rô-đri-gơ phải chọn giữa tình yêu và … gia đình (hai chữ, “danh …”).', answer: ['danh dự', 'danh du'], answerText: 'danh dự', explain: 'Xung đột bi kịch trong tâm hồn nhân vật.' },
    { type: 'mcq', q: 'Kết cục của vở kịch khiến hai dòng họ:', options: ['hối hận và làm lành', 'thù hận hơn', 'rời khỏi thành phố', 'không thay đổi gì'], answer: 0, explain: 'Tình yêu thắng hận thù bằng cái giá quá đắt.' }
  ]
});
})();
