/* Ngữ văn 8 – Bài 5. Thực hành tiếng Việt: Câu hỏi tu từ; nghĩa tường minh và nghĩa hàm ẩn. Ngữ liệu: ca dao, truyện cười dân gian (kể lại) và câu văn, đoạn hội thoại do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-8/b5-tv', {
  objectives: [
    'Nhận biết được câu hỏi tu từ và phân tích được tác dụng của nó (khẳng định, phủ định, bộc lộ cảm xúc, tăng sức biểu cảm).',
    'Phân biệt được nghĩa tường minh và nghĩa hàm ẩn của câu; biết suy luận nghĩa hàm ẩn dựa vào ngữ cảnh.',
    'Vận dụng được câu hỏi tu từ và cách nói hàm ẩn phù hợp, tế nhị trong giao tiếp và khi viết.'
  ],
  intro: '“Bạn có biết mấy giờ rồi không?” – khi mẹ nói câu ấy lúc em vẫn còn mải xem ti vi lúc 11 giờ đêm, mẹ có thật sự muốn hỏi giờ? Chắc chắn là không! Bài học hôm nay giúp em hiểu những câu hỏi “không để hỏi” và những điều “không nói ra mà vẫn hiểu”.',
  text: {
    title: 'Ngữ liệu thực hành',
    html: `<p>(1) <i>Ai ơi bưng bát cơm đầy / Dẻo thơm một hạt, đắng cay muôn phần.</i> <i>(Ca dao)</i></p>
<p>(2) Ông Giuốc-đanh hỏi bác phó may: “Bác may hoa ngược thế này là thế nào?” <i>(lời kể của nhóm biên soạn)</i></p>
<p>(3) Mẹ nhìn đồng hồ rồi nói với Nam: “Mười một giờ rồi đấy con ạ.”</p>
<p>(4) Lan: “Cuối tuần này cậu đi xem phim với tớ nhé?” – Hoa: “Thứ Hai tớ có bài kiểm tra Toán.”</p>
<p>(5) Chẳng lẽ chúng ta lại đứng nhìn bạn ấy gặp khó khăn mà không giúp?</p>
<p><i>(Câu (3), (4), (5) do nhóm biên soạn viết.)</i></p>`,
    source: '(1) Ca dao (văn học dân gian). (2) Lời kể của nhóm biên soạn theo tình huống trong hài kịch “Trưởng giả học làm sang” (Mô-li-e, phạm vi công cộng). (3) – (5) Câu văn do nhóm biên soạn tự viết.'
  },
  steps: [
    { title: 'Câu hỏi tu từ', html: `<p><b>Câu hỏi tu từ</b> là câu có hình thức câu hỏi (thường có dấu chấm hỏi, từ để hỏi) nhưng <b>không dùng để hỏi</b> mà để khẳng định, phủ định, bộc lộ cảm xúc, nhấn mạnh… Người nói không chờ câu trả lời.</p>
      <table class="tbl"><tr><th>Câu hỏi tu từ</th><th>Ý nghĩa</th></tr>
      <tr><td>“Chẳng lẽ chúng ta lại đứng nhìn bạn ấy gặp khó khăn mà không giúp?” (5)</td><td>Khẳng định: chúng ta phải giúp bạn</td></tr>
      <tr><td>“Bác may hoa ngược thế này là thế nào?” (2)</td><td>Bộc lộ sự ngạc nhiên, thắc mắc, có ý trách</td></tr>
      <tr><td>“Ai mà chẳng muốn được yêu thương?”</td><td>Khẳng định: ai cũng muốn được yêu thương</td></tr></table>` },
    { title: 'Tác dụng của câu hỏi tu từ', html: `<p>So sánh: “Chúng ta phải giúp bạn ấy.” (câu kể) với “Chẳng lẽ chúng ta lại đứng nhìn … mà không giúp?” (câu hỏi tu từ). Câu hỏi tu từ:</p>
      <ul><li>tăng sức biểu cảm, khiến người nghe <b>tự suy nghĩ</b> và đồng tình;</li><li>diễn đạt ý <b>tế nhị, uyển chuyển</b> hơn (nhắc nhở, phê phán mà không gay gắt);</li><li>tạo giọng điệu thuyết phục trong văn nghị luận, sâu lắng trong thơ.</li></ul>` },
    { title: 'Nghĩa tường minh và nghĩa hàm ẩn', html: `<p><b>Nghĩa tường minh</b>: nghĩa được diễn đạt trực tiếp bằng các từ ngữ trong câu. <b>Nghĩa hàm ẩn</b> (hàm ý): nghĩa được suy ra từ nghĩa tường minh, từ nghĩa của từ ngữ trong câu và từ ngữ cảnh sử dụng.</p>`,
      svg: S.flow({ items: [{ title: 'Câu nói', text: '“Mười một giờ rồi đấy con ạ.”' }, { title: 'Nghĩa tường minh', text: 'Thông báo: bây giờ là 11 giờ' }, { title: 'Ngữ cảnh', text: 'Đêm khuya, Nam còn thức' }, { title: 'Nghĩa hàm ẩn', text: 'Con đi ngủ đi!' }] }),
      caption: 'Suy luận nghĩa hàm ẩn từ nghĩa tường minh và ngữ cảnh.' },
    { title: 'Suy luận nghĩa hàm ẩn', html: `<p>Ngữ liệu (4): Hoa không trả lời trực tiếp “có” hay “không”. Nghĩa tường minh: thứ Hai Hoa có bài kiểm tra Toán. Nghĩa hàm ẩn: cuối tuần Hoa cần ôn bài, nên <b>từ chối</b> lời mời một cách tế nhị.</p>
      <p>Ngữ liệu (1): nghĩa tường minh nói về bát cơm và hạt gạo; nghĩa hàm ẩn nhắc người ăn nhớ công sức vất vả của người nông dân, biết quý trọng thành quả lao động.</p>
      <div class="box key">Cách suy luận: (1) Hiểu nghĩa tường minh; (2) Đặt câu vào ngữ cảnh: ai nói, với ai, lúc nào, nhằm mục đích gì; (3) Hỏi: “Vì sao người nói lại nói như vậy?” → nghĩa hàm ẩn.</div>` },
    { title: 'Sử dụng hàm ý và câu hỏi tu từ cho phù hợp', html: `<ul><li>Dùng hàm ý khi cần <b>tế nhị</b> (từ chối, nhắc nhở, góp ý) hoặc muốn tạo <b>dư âm</b> trong văn chương.</li><li>Tránh dùng hàm ý khi cần thông tin rõ ràng, chính xác (hướng dẫn, thông báo, văn bản hành chính).</li><li>Người nghe cần tinh ý, chú ý ngữ cảnh để hiểu đúng hàm ý, tránh hiểu lầm.</li></ul>` }
  ],
  summary: 'Câu hỏi tu từ có hình thức câu hỏi nhưng không nhằm hỏi mà để khẳng định, phủ định, bộc lộ cảm xúc; nó tăng sức biểu cảm và giúp diễn đạt tế nhị. Nghĩa tường minh là nghĩa được diễn đạt trực tiếp bằng từ ngữ; nghĩa hàm ẩn là nghĩa được suy ra từ nghĩa tường minh và ngữ cảnh. Cần dùng và hiểu hàm ý phù hợp với tình huống giao tiếp.',
  examples: [
    { title: 'Nhận diện câu hỏi tu từ', problem: 'Câu nào là câu hỏi tu từ? (a) “Mấy giờ thì tàu chạy hả bác?”; (b) “Có ai lại không yêu quê hương mình?”', solution: '(b) là câu hỏi tu từ: người nói không cần câu trả lời mà khẳng định “ai cũng yêu quê hương mình”. (a) là câu hỏi thông thường vì người hỏi thật sự cần biết giờ tàu chạy.' },
    { title: 'Chuyển câu hỏi tu từ thành câu kể', problem: 'Chuyển câu “Chẳng lẽ chúng ta lại đứng nhìn bạn ấy gặp khó khăn mà không giúp?” thành câu kể và so sánh hiệu quả.', solution: 'Câu kể: “Chúng ta phải giúp bạn ấy khi bạn gặp khó khăn.” Câu kể nêu ý trực tiếp, rõ ràng; câu hỏi tu từ khơi gợi người nghe tự suy nghĩ, thể hiện cảm xúc mạnh hơn (không thể làm ngơ), nên giàu sức thuyết phục hơn.' },
    { title: 'Xác định nghĩa hàm ẩn', problem: 'Khách đến chơi, chủ nhà nói: “Trời sắp mưa to rồi đấy!” Xác định nghĩa hàm ẩn có thể có trong hai ngữ cảnh: (a) khách vừa đến; (b) khách đã ngồi rất lâu, trời tối.', solution: '(a) Chủ nhà có thể ngầm mời khách ở lại chơi lâu hơn, đợi tạnh mưa rồi hãy về. (b) Chủ nhà có thể ngầm nhắc khách nên về sớm kẻo mưa. Cùng một câu nói nhưng nghĩa hàm ẩn phụ thuộc vào ngữ cảnh.' }
  ],
  exercises: [
    { question: 'Xác định câu hỏi tu từ và nêu ý nghĩa: “Còn gì vui hơn khi cả nhà quây quần bên mâm cơm ngày Tết?”', hints: ['Người nói có cần câu trả lời không?', 'Câu này khẳng định điều gì?'], solution: 'Đây là câu hỏi tu từ. Người nói không hỏi mà khẳng định: không có gì vui hơn khi cả nhà quây quần bên mâm cơm ngày Tết – qua đó bộc lộ niềm hạnh phúc, trân trọng sự đoàn viên.' },
    { question: 'Tìm nghĩa hàm ẩn trong câu trả lời của Minh: Thầy hỏi: “Sao em chưa nộp bài?” – Minh: “Dạ, hôm qua nhà em mất điện cả tối ạ.”', hints: ['Minh có trả lời trực tiếp không?', 'Câu nói ngầm giải thích điều gì?'], solution: 'Nghĩa tường minh: tối qua nhà Minh mất điện. Nghĩa hàm ẩn: vì mất điện nên Minh không làm được bài, đó là lí do Minh chưa nộp bài (ngầm xin thầy thông cảm).' },
    { question: 'Viết một đoạn hội thoại ngắn (3 – 4 lượt lời) trong đó có một câu mang nghĩa hàm ẩn dùng để từ chối tế nhị. Chỉ rõ câu đó.', hints: ['Tình huống: bạn rủ đi chơi khi em bận việc.', 'Không nói “không” trực tiếp.'], solution: 'Ví dụ: Tuấn: “Chiều nay đá bóng không?” – Bình: “Chiều nay tớ phải trông em giúp mẹ rồi.” – Tuấn: “Tiếc thế! Hẹn cậu Chủ nhật nhé.” – Bình: “Ừ, Chủ nhật tớ rảnh.” Câu “Chiều nay tớ phải trông em giúp mẹ rồi.” mang nghĩa hàm ẩn: Bình từ chối lời rủ một cách tế nhị.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Câu hỏi tu từ được dùng chủ yếu để:', options: ['khẳng định, phủ định hoặc bộc lộ cảm xúc', 'hỏi thông tin chưa biết', 'ra lệnh', 'chào hỏi'], answer: 0, explain: 'Không nhằm hỏi.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Câu “Ai mà chẳng muốn được yêu thương?” là câu hỏi tu từ.', answer: true, explain: 'Khẳng định ai cũng muốn được yêu thương.' },
    { type: 'mcq', q: 'Nghĩa được suy ra từ nghĩa tường minh và ngữ cảnh gọi là:', options: ['nghĩa hàm ẩn', 'nghĩa gốc', 'nghĩa chuyển', 'nghĩa đen'], answer: 0, explain: 'Hàm ý.' },
    { type: 'short', q: 'Nghĩa được diễn đạt trực tiếp bằng từ ngữ trong câu gọi là nghĩa gì (nghĩa …)?', answer: ['tường minh', 'tuong minh'], answerText: 'tường minh', explain: 'Nghĩa tường minh.' },
    { type: 'mcq', q: 'Câu trả lời “Thứ Hai tớ có bài kiểm tra Toán.” (khi được rủ đi xem phim cuối tuần) có hàm ý:', options: ['từ chối lời mời', 'nhận lời mời', 'rủ bạn học Toán', 'hỏi lịch kiểm tra'], answer: 0, explain: 'Cần ôn bài nên không đi được.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Trong văn bản thông báo, hướng dẫn nên dùng nhiều hàm ý để câu văn hay hơn.', answer: false, explain: 'Cần rõ ràng, chính xác.' },
    { type: 'short', q: 'Câu “Mười một giờ rồi đấy con ạ.” (mẹ nói lúc đêm khuya) có hàm ý khuyên con đi làm gì?', answer: ['ngủ', 'đi ngủ'], answerText: 'đi ngủ', explain: 'Hàm ý: con đi ngủ đi.' },
    { type: 'mcq', q: 'Câu ca dao “Ai ơi bưng bát cơm đầy / Dẻo thơm một hạt, đắng cay muôn phần” có hàm ý:', options: ['nhắc nhớ công sức người làm ra hạt gạo', 'tả món ăn ngon', 'khen cơm dẻo', 'kể chuyện đi chợ'], answer: 0, explain: 'Biết quý trọng thành quả lao động.' }
  ]
});
})();
