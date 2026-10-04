/* Ngữ văn 8 – Bài 9. Thực hành tiếng Việt: Các kiểu câu phân loại theo mục đích nói; câu khẳng định và câu phủ định. Ngữ liệu: câu trích từ hai văn bản do nhóm biên soạn tự viết ở bài Đọc, ca dao (văn học dân gian) và câu tự đặt. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-8/b9-tv', {
  objectives: [
    'Nhận biết được bốn kiểu câu phân loại theo mục đích nói: câu kể, câu hỏi, câu khiến, câu cảm và dấu hiệu hình thức của mỗi kiểu.',
    'Phân biệt được câu khẳng định và câu phủ định; nhận ra phủ định miêu tả và phủ định bác bỏ.',
    'Nhận ra được trường hợp dùng kiểu câu này với mục đích của kiểu câu khác (dùng gián tiếp).',
    'Sử dụng được các kiểu câu phù hợp mục đích giao tiếp khi nói và viết.'
  ],
  intro: 'Cùng muốn bạn tắt điện, em có thể nói: “Tắt điện đi!”, “Cậu tắt điện giúp tớ nhé?”, hay “Phòng không có ai mà điện vẫn sáng.” Ba câu, ba kiểu câu khác nhau, nhưng chung một mục đích. Bài học giúp em hiểu và dùng khéo các kiểu câu.',
  text: {
    title: 'Ngữ liệu thực hành',
    html: `<p>(1) Đồng bằng sông Cửu Long được hình thành nhờ phù sa.</p>
<p>(2) Vì sao đồng bằng sông Cửu Long đang “đói” phù sa?</p>
<p>(3) Hãy bước thật nhẹ.</p>
<p>(4) Trái Đất của chúng ta đẹp biết bao!</p>
<p>(5) Văn bản không nhắc đến núi lửa.</p>
<p>(6) <i>Ai ơi bưng bát cơm đầy / Dẻo thơm một hạt, đắng cay muôn phần.</i> (ca dao)</p>`,
    source: 'Câu (1), (2), (3) trích từ hai văn bản do nhóm biên soạn tự viết (bài Đọc – Bài 9); câu (6) là ca dao (văn học dân gian); các câu còn lại do nhóm biên soạn tự đặt.'
  },
  steps: [
    { title: 'Bốn kiểu câu theo mục đích nói', html: `<table class="tbl"><tr><th>Kiểu câu</th><th>Mục đích</th><th>Dấu hiệu hình thức</th><th>Ví dụ</th></tr>
      <tr><td>Câu kể (trần thuật)</td><td>Kể, tả, thông báo, nhận định</td><td>Kết thúc bằng dấu chấm</td><td>(1)</td></tr>
      <tr><td>Câu hỏi (nghi vấn)</td><td>Hỏi</td><td>Có từ nghi vấn (ai, gì, sao, không, à, chưa…); dấu chấm hỏi</td><td>(2)</td></tr>
      <tr><td>Câu khiến (cầu khiến)</td><td>Yêu cầu, ra lệnh, đề nghị, khuyên bảo</td><td>Có hãy, đừng, chớ, đi, thôi, nào…; dấu chấm than hoặc chấm</td><td>(3)</td></tr>
      <tr><td>Câu cảm (cảm thán)</td><td>Bộc lộ cảm xúc</td><td>Có ôi, chao ôi, biết bao, thay, quá…; dấu chấm than</td><td>(4)</td></tr></table>`,
      svg: S.mindmap({ center: 'Kiểu câu theo mục đích', branches: [{ title: 'Câu kể', items: ['Thông báo, nhận định', 'Dấu chấm'] }, { title: 'Câu hỏi', items: ['ai, gì, sao, không', 'Dấu chấm hỏi'] }, { title: 'Câu khiến', items: ['hãy, đừng, chớ, đi', 'Yêu cầu, đề nghị'] }, { title: 'Câu cảm', items: ['ôi, biết bao, quá', 'Bộc lộ cảm xúc'] }] }),
      caption: 'Sơ đồ bốn kiểu câu phân loại theo mục đích nói.' },
    { title: 'Dùng kiểu câu một cách gián tiếp', html: `<p>Một kiểu câu có thể được dùng với mục đích của kiểu câu khác, khiến lời nói tế nhị hơn:</p>
      <ul><li>“Cậu có thể tắt điện giúp tớ không?” – hình thức câu hỏi, mục đích <b>cầu khiến</b>.</li>
      <li>“Sao mà lắm rác thế này?” – hình thức câu hỏi, mục đích <b>bộc lộ cảm xúc</b> (phàn nàn).</li>
      <li>“Phòng không có ai mà điện vẫn sáng.” – hình thức câu kể, mục đích <b>nhắc nhở</b> (cầu khiến).</li></ul>
      <div class="box key">Xác định kiểu câu dựa vào <b>dấu hiệu hình thức</b>; xác định mục đích thật dựa vào <b>tình huống giao tiếp</b>.</div>` },
    { title: 'Câu khẳng định và câu phủ định', html: `<ul><li><b>Câu khẳng định:</b> xác nhận sự vật, sự việc có đặc điểm, quan hệ nào đó. VD: “Đồng bằng được hình thành nhờ phù sa.”</li>
      <li><b>Câu phủ định:</b> có từ ngữ phủ định: <i>không, chẳng, chả, chưa, không phải (là), chẳng phải (là), đâu có phải (là), đâu (có)…</i> VD: (5) “Văn bản không nhắc đến núi lửa.”</li></ul>
      <p>Câu phủ định dùng để:</p>
      <ul><li><b>Phủ định miêu tả:</b> thông báo sự vật, sự việc không có đặc điểm, không diễn ra. VD: “Hôm nay trời không mưa.”</li>
      <li><b>Phủ định bác bỏ:</b> phản bác một ý kiến, nhận định của người khác. VD: A: “Bảo vệ môi trường là việc của người lớn.” – B: “Đâu có phải thế!”</li></ul>` },
    { title: 'Phủ định của phủ định', html: `<p>Câu có hai từ phủ định có thể mang ý <b>khẳng định mạnh</b>: “Không ai không yêu quê hương.” = Ai cũng yêu quê hương. “Chẳng phải là không có cách.” = Có cách.</p>
      <p>Câu hỏi tu từ cũng có thể mang ý phủ định hoặc khẳng định: “Ai mà chẳng muốn sống ở nơi trong lành?” = Ai cũng muốn.</p>` },
    { title: 'Vận dụng', html: `<p>Khi viết văn bản kiến nghị hay lời kêu gọi bảo vệ môi trường, có thể phối hợp các kiểu câu:</p>
      <ul><li>Câu kể để nêu thực trạng: “Con kênh sau trường đầy rác nhựa.”</li>
      <li>Câu hỏi tu từ gợi suy nghĩ: “Chẳng lẽ chúng ta cứ đứng nhìn?”</li>
      <li>Câu khiến để kêu gọi: “Hãy cùng nhau làm sạch con kênh!”</li>
      <li>Câu cảm bộc lộ cảm xúc: “Con kênh ngày xưa trong xanh biết bao!”</li></ul>` }
  ],
  summary: 'Theo mục đích nói có bốn kiểu câu: câu kể (dấu chấm), câu hỏi (từ nghi vấn, dấu chấm hỏi), câu khiến (hãy, đừng, chớ, đi…), câu cảm (ôi, biết bao, quá…). Một kiểu câu có thể dùng gián tiếp với mục đích khác. Câu phủ định có từ không, chẳng, chưa, không phải…; dùng để phủ định miêu tả hoặc phủ định bác bỏ; hai lần phủ định có thể tạo ý khẳng định mạnh.',
  examples: [
    { title: 'Xác định kiểu câu', problem: 'Xác định kiểu câu của các câu (1) – (4) trong ngữ liệu.', solution: '(1) Câu kể – thông báo, nhận định, kết thúc bằng dấu chấm. (2) Câu hỏi – có từ nghi vấn “vì sao”, dấu chấm hỏi. (3) Câu khiến – có từ “hãy”, dùng để kêu gọi. (4) Câu cảm – có từ “biết bao”, dấu chấm than, bộc lộ cảm xúc ngợi ca.' },
    { title: 'Mục đích gián tiếp', problem: 'Câu ca dao (6) có hình thức là câu gì? Mục đích thật là gì?', solution: 'Câu (6) mở đầu bằng lời gọi “Ai ơi”, hình thức là câu kể (nhận định: một hạt cơm dẻo thơm chứa bao đắng cay). Nhưng mục đích thật là khuyên nhủ: hãy trân trọng hạt gạo, biết ơn người nông dân – tức mang mục đích cầu khiến gián tiếp, nhẹ nhàng, thấm thía.' },
    { title: 'Phủ định bác bỏ', problem: 'Trong đoạn thoại: A: “Một người tiết kiệm thì chẳng thay đổi được gì.” – B: “Không phải vậy. Hàng triệu người cùng làm sẽ tạo nên thay đổi lớn.” Câu nào là phủ định bác bỏ?', solution: 'Câu “Không phải vậy.” của B là phủ định bác bỏ: B phản bác ý kiến của A. (Câu của A “…chẳng thay đổi được gì” là phủ định miêu tả – A nêu nhận định của mình.)' }
  ],
  exercises: [
    { question: 'Chuyển câu kể “Bạn tắt vòi nước khi đánh răng.” thành câu hỏi, câu khiến, câu cảm.', hints: ['Câu hỏi: thêm “có… không?”, “chưa?”', 'Câu khiến: thêm “hãy”, “đi”; câu cảm: thêm “quá”, “thật… biết bao”.'], solution: 'Câu hỏi: “Bạn có tắt vòi nước khi đánh răng không?” Câu khiến: “Bạn hãy tắt vòi nước khi đánh răng!” / “Tắt vòi nước khi đánh răng đi!” Câu cảm: “Bạn tắt vòi nước khi đánh răng, thật đáng khen quá!”' },
    { question: 'Tìm câu phủ định và cho biết đó là phủ định miêu tả hay bác bỏ: a) “Sáng nay, Lan chưa ăn sáng.” b) “Ai bảo rác nhựa vô hại? Đâu có!” c) “Không ai muốn sống cạnh bãi rác.”', hints: ['Tìm từ phủ định: chưa, đâu có, không.', 'Câu nào phản bác một ý kiến?'], solution: 'a) “chưa” – phủ định miêu tả (thông báo việc chưa diễn ra). b) “Đâu có!” – phủ định bác bỏ (phản bác ý kiến “rác nhựa vô hại”). c) “Không ai” – phủ định miêu tả, mang ý nhận định: mọi người đều không muốn sống cạnh bãi rác.' },
    { question: 'Viết đoạn văn (5 – 7 câu) kêu gọi các bạn giữ vệ sinh lớp học, dùng đủ bốn kiểu câu và ít nhất một câu phủ định. Gạch chân, ghi chú.', hints: ['Câu kể nêu thực trạng; câu hỏi tu từ gợi suy nghĩ.', 'Câu khiến kêu gọi; câu cảm bộc lộ cảm xúc.'], solution: 'Ví dụ: Mấy hôm nay, dưới gầm bàn lớp mình có khá nhiều vỏ bánh, giấy vụn (câu kể). Chẳng lẽ chúng ta muốn học trong một căn phòng bừa bộn như thế sao? (câu hỏi tu từ) Lớp học không phải của riêng ai mà là ngôi nhà chung của bốn mươi bạn (câu phủ định, câu kể). Một lớp học sạch sẽ, thơm tho thì dễ chịu biết bao! (câu cảm) Các bạn ơi, hãy bỏ rác đúng nơi quy định và nhắc nhau cùng làm nhé! (câu khiến)' }
  ],
  quiz: [
    { type: 'mcq', q: 'Câu “Hãy bước thật nhẹ.” thuộc kiểu câu nào?', options: ['Câu khiến', 'Câu kể', 'Câu hỏi', 'Câu cảm'], answer: 0, explain: 'Có từ “hãy”, dùng để kêu gọi.' },
    { type: 'mcq', q: 'Câu “Trái Đất của chúng ta đẹp biết bao!” là:', options: ['câu cảm', 'câu hỏi', 'câu khiến', 'câu phủ định'], answer: 0, explain: '“biết bao” + dấu chấm than, bộc lộ cảm xúc.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Câu “Cậu có thể tắt điện giúp tớ không?” có hình thức câu hỏi nhưng mục đích cầu khiến.', answer: true, explain: 'Dùng gián tiếp, lịch sự.' },
    { type: 'short', q: 'Trong câu “Văn bản không nhắc đến núi lửa.”, từ phủ định là từ nào?', answer: ['không', 'khong'], answerText: 'không', explain: 'Câu phủ định miêu tả.' },
    { type: 'mcq', q: 'Câu nào là phủ định bác bỏ?', options: ['“Đâu có phải thế!” (đáp lại một ý kiến sai)', '“Hôm nay trời không mưa.”', '“Em chưa làm bài.”', '“Ở đây không có ai.”'], answer: 0, explain: 'Phản bác ý kiến của người khác.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Câu “Không ai không yêu quê hương.” mang ý phủ định hoàn toàn.', answer: false, explain: 'Hai lần phủ định → khẳng định mạnh: ai cũng yêu quê hương.' },
    { type: 'short', q: 'Câu dùng để hỏi được gọi là câu gì (hai chữ, “câu …”)?', answer: ['câu hỏi', 'hỏi', 'câu nghi vấn', 'nghi vấn', 'cau hoi'], answerText: 'câu hỏi (nghi vấn)', explain: 'Có từ nghi vấn, dấu chấm hỏi.' },
    { type: 'mcq', q: 'Từ nào thường KHÔNG dùng để tạo câu khiến?', options: ['biết bao', 'hãy', 'đừng', 'chớ'], answer: 0, explain: '“biết bao” là dấu hiệu câu cảm.' }
  ]
});
})();
