/* Ngữ văn 9 – Bài 5. Thực hành tiếng Việt: Câu rút gọn và câu đặc biệt. Ngữ liệu: ca dao, tục ngữ (văn học dân gian), câu văn do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-9/b5-tv', {
  objectives: [
    'Nhận biết câu rút gọn và câu đặc biệt; phân biệt hai kiểu câu này.',
    'Khôi phục được thành phần bị lược bỏ trong câu rút gọn; nêu được tác dụng của câu rút gọn, câu đặc biệt.',
    'Sử dụng câu rút gọn, câu đặc biệt phù hợp trong lời thoại kịch, văn tự sự, miêu tả.'
  ],
  intro: 'Trong kịch, nhân vật thường nói những câu rất ngắn: “Ai đó?”, “Trời ơi!”, “Đi thôi!”. Những câu ấy thiếu chủ ngữ, vị ngữ hoặc không có cấu tạo chủ – vị, nhưng vẫn rõ nghĩa và giàu cảm xúc. Đó là câu rút gọn và câu đặc biệt.',
  text: {
    title: 'Ngữ liệu thực hành',
    html: `<p>(1) <i>Ăn quả nhớ kẻ trồng cây.</i> (Tục ngữ)</p>
<p>(2) <i>Đêm. Vườn nhà Ca-piu-lét. Ánh trăng.</i> (Chỉ dẫn sân khấu do nhóm biên soạn viết)</p>
<p>(3) – Ai đó? – Rô-mê-ô đây. (Lời thoại do nhóm biên soạn viết)</p>
<p>(4) <i>Ôi! Tình yêu mới mạnh mẽ làm sao!</i></p>
<p>(5) – Bao giờ cậu đi Huế? – Ngày mai.</p>
<p>(6) <i>Học, học nữa, học mãi.</i></p>`,
    source: 'Tục ngữ (văn học dân gian); các câu còn lại do nhóm biên soạn tự viết (câu 6 mô phỏng theo một lời khuyên học tập quen thuộc).'
  },
  steps: [
    { title: 'Câu rút gọn', html: `<ul><li><b>Câu rút gọn</b> là câu bị lược bỏ một số thành phần (chủ ngữ, vị ngữ, hoặc cả hai) nhưng vẫn <b>khôi phục được</b> dựa vào ngữ cảnh.</li>
      <li>Ví dụ (5): “Ngày mai.” → khôi phục: “<u>Tớ</u> <u>đi Huế</u> ngày mai.” (lược chủ ngữ và vị ngữ).</li>
      <li>Ví dụ (1): “Ăn quả nhớ kẻ trồng cây.” → lược chủ ngữ để câu mang tính khái quát, là lời khuyên chung cho mọi người.</li></ul>
      <div class="box key">Tác dụng: làm câu gọn hơn, thông tin nhanh, tránh lặp từ; ngụ ý hành động, đặc điểm là của chung mọi người.</div>` },
    { title: 'Câu đặc biệt', html: `<ul><li><b>Câu đặc biệt</b> là câu <b>không cấu tạo theo mô hình chủ ngữ – vị ngữ</b>, không thể khôi phục thành câu đủ thành phần.</li>
      <li>Ví dụ (2): “Đêm. Vườn nhà Ca-piu-lét. Ánh trăng.” – xác định thời gian, nơi chốn, liệt kê sự vật.</li>
      <li>Ví dụ (4): “Ôi!” – bộc lộ cảm xúc.</li></ul>`,
      svg: S.mindmap({ center: 'Câu đặc biệt', branches: [{ title: 'Thời gian, nơi chốn', items: ['“Đêm.”', '“Vườn nhà Ca-piu-lét.”'] }, { title: 'Liệt kê, thông báo', items: ['“Ánh trăng.”', '“Tiếng gà gáy.”'] }, { title: 'Bộc lộ cảm xúc', items: ['“Ôi!”', '“Trời ơi!”'] }, { title: 'Gọi đáp', items: ['“Giu-li-ét ơi!”', '“Mẹ ơi!”'] }] }),
      caption: 'Các tác dụng thường gặp của câu đặc biệt.' },
    { title: 'Phân biệt hai kiểu câu', html: `<table class="tbl"><tr><th></th><th>Câu rút gọn</th><th>Câu đặc biệt</th></tr>
      <tr><td>Cấu tạo</td><td>Vốn có C – V, bị lược bớt</td><td>Không có mô hình C – V</td></tr>
      <tr><td>Khôi phục</td><td>Được, nhờ ngữ cảnh</td><td>Không cần, không thể</td></tr>
      <tr><td>Ví dụ</td><td>“Ngày mai.” (= Tớ đi Huế ngày mai)</td><td>“Đêm.”, “Ôi!”</td></tr></table>`,
      svg: S.flow({ w: 620, items: [{ title: 'Câu thiếu C/V?', text: 'Xét câu' }, { title: 'Khôi phục được?', text: 'Dựa ngữ cảnh' }, { title: 'Có → rút gọn', text: '“Ngày mai.”' }, { title: 'Không → đặc biệt', text: '“Đêm.”' }] }),
      caption: 'Các bước phân biệt câu rút gọn và câu đặc biệt.' },
    { title: 'Lưu ý khi sử dụng', html: `<ul><li>Không rút gọn làm câu khó hiểu, sai nghĩa.</li>
      <li>Khi nói với người trên, rút gọn có thể thành cộc lốc: “Ăn rồi.” → nên nói “Con ăn rồi ạ.”</li>
      <li>Trong kịch, văn miêu tả, câu đặc biệt giúp dựng bối cảnh nhanh, tạo nhịp dồn dập, bộc lộ cảm xúc mạnh.</li></ul>` }
  ],
  summary: 'Câu rút gọn là câu lược bỏ một số thành phần nhưng khôi phục được nhờ ngữ cảnh; giúp câu gọn, thông tin nhanh, tránh lặp, hoặc ngụ ý hành động của chung mọi người. Câu đặc biệt không cấu tạo theo mô hình chủ – vị; dùng để nêu thời gian, nơi chốn, liệt kê, thông báo sự có mặt của sự vật, bộc lộ cảm xúc, gọi đáp. Tránh rút gọn gây khó hiểu hoặc thiếu lễ phép.',
  examples: [
    { title: 'Khôi phục câu rút gọn', problem: 'Khôi phục thành phần bị lược trong câu trả lời: “– Ai đó? – Rô-mê-ô đây.”', solution: '“Rô-mê-ô đây.” lược vị ngữ “đang ở”, có thể khôi phục: “Người đang ở đây là Rô-mê-ô” hoặc “Rô-mê-ô đang ở đây.” Câu rút gọn giúp lời thoại tự nhiên, nhanh, phù hợp tình huống bất ngờ.' },
    { title: 'Tác dụng câu đặc biệt', problem: 'Nêu tác dụng của các câu “Đêm. Vườn nhà Ca-piu-lét. Ánh trăng.”', solution: 'Đây là ba câu đặc biệt: “Đêm.” xác định thời gian; “Vườn nhà Ca-piu-lét.” xác định nơi chốn; “Ánh trăng.” thông báo sự có mặt của sự vật. Chúng dựng bối cảnh cảnh kịch một cách ngắn gọn, gợi không khí lãng mạn, tĩnh lặng.' },
    { title: 'Câu rút gọn tạo tính khái quát', problem: 'Vì sao câu “Học, học nữa, học mãi.” lược chủ ngữ?', solution: 'Câu lược chủ ngữ để trở thành lời khuyên chung cho mọi người, không riêng ai; cấu trúc điệp “học” tăng dần “nữa”, “mãi” nhấn mạnh việc học suốt đời.' }
  ],
  exercises: [
    { question: 'Xác định câu rút gọn, câu đặc biệt: “Mùa hè. Tiếng ve râm ran. – Cậu làm bài tập chưa? – Làm rồi.”', hints: ['Câu nào không thể khôi phục C – V?', 'Câu nào khôi phục được nhờ câu hỏi?'], solution: '“Mùa hè.” – câu đặc biệt (nêu thời gian). “Tiếng ve râm ran.” – câu bình thường (C: tiếng ve; V: râm ran). “Cậu làm bài tập chưa?” – câu đầy đủ. “Làm rồi.” – câu rút gọn (lược chủ ngữ “Tớ” và bổ ngữ “bài tập”): “Tớ làm bài tập rồi.”' },
    { question: 'Sửa câu rút gọn chưa phù hợp: Bà hỏi: “Cháu đã ăn cơm chưa?” – Cháu đáp: “Ăn rồi.”', hints: ['Nói với người lớn tuổi.', 'Bổ sung chủ ngữ và từ tình thái.'], solution: 'Sửa: “Cháu ăn rồi ạ.” Câu rút gọn “Ăn rồi.” thiếu lễ phép khi trả lời người lớn; cần thêm chủ ngữ “Cháu” và từ tình thái “ạ”.' },
    { question: 'Viết đoạn văn (5 – 7 câu) tả cảnh sân trường giờ ra chơi, có ít nhất một câu đặc biệt và một câu rút gọn. Gạch chân và gọi tên.', hints: ['Câu đặc biệt mở đầu: “Giờ ra chơi.”', 'Câu rút gọn trong lời thoại.'], solution: 'Ví dụ: <u>Giờ ra chơi.</u> (câu đặc biệt) Tiếng trống vừa dứt, cả sân trường như vỡ oà. Nhóm con trai ùa ra gốc bàng đá cầu. Con gái túm tụm dưới hành lang chơi nhảy dây. Nam gọi to: “Đá cầu không?” – Tuấn đáp: “<u>Đá luôn!</u>” (câu rút gọn – lược chủ ngữ “Tớ”). <u>Ôi, vui quá!</u> (câu đặc biệt “Ôi” bộc lộ cảm xúc).' }
  ],
  quiz: [
    { type: 'mcq', q: 'Câu rút gọn là câu:', options: ['lược bỏ một số thành phần nhưng khôi phục được nhờ ngữ cảnh', 'không có mô hình chủ – vị', 'luôn là câu cảm thán', 'có hai cụm chủ – vị'], answer: 0, explain: 'Có thể khôi phục.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Câu “Đêm.” trong chỉ dẫn sân khấu là câu đặc biệt.', answer: true, explain: 'Nêu thời gian, không có C – V.' },
    { type: 'mcq', q: 'Câu “Ăn quả nhớ kẻ trồng cây.” lược chủ ngữ nhằm:', options: ['tạo lời khuyên chung cho mọi người', 'tránh nói với người lớn', 'bộc lộ cảm xúc', 'gọi đáp'], answer: 0, explain: 'Tính khái quát của tục ngữ.' },
    { type: 'short', q: 'Câu không cấu tạo theo mô hình chủ – vị gọi là câu … (hai chữ).', answer: ['đặc biệt', 'dac biet'], answerText: 'đặc biệt', explain: 'Câu đặc biệt.' },
    { type: 'mcq', q: 'Câu nào là câu đặc biệt?', options: ['“Trời ơi!”', '“Làm rồi.”', '“Mai tớ đi.”', '“Ngày mai.” (trả lời câu hỏi)'], answer: 0, explain: '“Trời ơi!” bộc lộ cảm xúc, không có C – V.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Trả lời người lớn “Ăn rồi.” luôn là cách nói lễ phép, phù hợp.', answer: false, explain: 'Nên nói “Cháu ăn rồi ạ.”' },
    { type: 'short', q: 'Khôi phục chủ ngữ của “Làm rồi.” khi bạn trả lời câu hỏi “Cậu làm bài chưa?” (một từ ngôi thứ nhất thân mật).', answer: ['tớ', 'to', 'mình', 'minh'], answerText: 'Tớ (mình)', explain: '“Tớ làm rồi.”' },
    { type: 'mcq', q: 'Trong kịch, câu đặc biệt thường giúp:', options: ['dựng bối cảnh nhanh và bộc lộ cảm xúc mạnh', 'kéo dài lời thoại', 'giải thích khái niệm', 'liệt kê số liệu'], answer: 0, explain: 'Ngắn gọn, giàu cảm xúc.' }
  ]
});
})();
