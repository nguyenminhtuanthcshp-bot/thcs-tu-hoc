/* Ngữ văn 7 – Bài 9. Viết: Văn bản thuyết minh về quy tắc hoặc luật lệ trong một hoạt động, trò chơi. Bài viết mẫu (trò chơi kéo co) do nhóm biên soạn tự viết; luật chơi mang tính phổ biến, mỗi nơi có thể khác nhau. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-7/b9-viet', {
  objectives: [
    'Viết được văn bản thuyết minh về quy tắc hoặc luật lệ trong một trò chơi hay hoạt động.',
    'Trình bày rõ ràng: giới thiệu, chuẩn bị, cách chơi, luật thắng thua, lưu ý an toàn; dùng từ ngữ chính xác, khách quan.',
    'Biết sử dụng đề mục, số thứ tự, sơ đồ, hình vẽ minh hoạ.'
  ],
  intro: 'Đến hội làng, hội trường, em sẽ thấy những đội kéo co hô “dô ta” rộn ràng. Nhưng một người chưa từng chơi làm sao biết cách chơi cho đúng? Hãy viết cho họ một văn bản thuyết minh rõ ràng!',
  steps: [
    { title: 'Yêu cầu của kiểu bài', html: `<ul><li>Giới thiệu được tên trò chơi, hoạt động và mục đích, ý nghĩa.</li><li>Nêu đủ các <b>quy tắc, luật lệ</b>: số người chơi, dụng cụ, sân chơi, cách chơi, cách tính thắng thua, những điều cấm.</li><li>Trình bày theo <b>trình tự hợp lí</b>; có thể dùng đề mục, gạch đầu dòng, số thứ tự.</li><li>Ngôn ngữ <b>chính xác, rõ ràng, khách quan</b>; có thể kèm hình vẽ, sơ đồ.</li></ul>` },
    { title: 'Quy trình viết', html: `<p>Viết theo bốn bước:</p>`,
      svg: S.flow({ items: [{ title: 'Chọn trò chơi', text: 'Em hiểu rõ luật chơi' }, { title: 'Thu thập thông tin', text: 'Hỏi người lớn, tìm tài liệu' }, { title: 'Lập dàn ý', text: 'Giới thiệu – chuẩn bị – luật – lưu ý' }, { title: 'Viết và kiểm tra', text: 'Người khác đọc có chơi được không?' }] }),
      caption: 'Quy trình viết văn bản thuyết minh luật chơi.' },
    { title: 'Dàn ý', html: `<table class="tbl"><tr><th>Phần</th><th>Nội dung</th></tr>
      <tr><td>Mở bài</td><td>Giới thiệu trò chơi, nguồn gốc, ý nghĩa khái quát.</td></tr>
      <tr><td>Thân bài</td><td>1. Người chơi, dụng cụ, sân chơi. 2. Cách chơi (các bước). 3. Luật thắng thua. 4. Những lỗi, điều cấm. 5. Lưu ý an toàn.</td></tr>
      <tr><td>Kết bài</td><td>Khẳng định giá trị của trò chơi, lời khuyên.</td></tr></table>` },
    { title: 'Sơ đồ sân kéo co', html: `<p>Hình minh hoạ giúp người đọc hình dung vị trí vạch và dây:</p>
      <table class="tbl"><tr><th>Đội A (vạch giới hạn A)</th><th>Vạch giữa + dải băng giữa dây</th><th>Đội B (vạch giới hạn B)</th></tr>
      <tr><td>← kéo về phía mình</td><td>Dải băng ở đúng vạch giữa khi bắt đầu</td><td>kéo về phía mình →</td></tr></table>
      <div class="box tip">Trong bài viết thật, em có thể vẽ sơ đồ bằng tay hoặc chèn ảnh, nhớ ghi chú thích cho hình.</div>` },
    { title: 'Bài viết tham khảo', html: `<div class="box text"><div class="t-title">Trò chơi kéo co</div>
      <p>Kéo co là trò chơi dân gian quen thuộc trong các lễ hội và hoạt động ngoại khoá. Trò chơi đề cao sức mạnh tập thể và tinh thần đoàn kết. Nghi lễ và trò chơi kéo co của Việt Nam cùng một số nước đã được UNESCO ghi danh là di sản văn hoá phi vật thể đại diện của nhân loại.</p>
      <p><b>1. Chuẩn bị.</b> Mỗi đội thường có số người bằng nhau (ví dụ 8 hoặc 10 người). Dụng cụ gồm một sợi dây thừng chắc, dài khoảng 20–30 m, giữa dây buộc một dải băng màu. Sân chơi bằng phẳng, kẻ một vạch giữa và hai vạch giới hạn cách vạch giữa khoảng 2 m về hai phía.</p>
      <p><b>2. Cách chơi.</b> Hai đội đứng hai bên, nắm chặt dây sao cho dải băng nằm đúng vạch giữa. Khi trọng tài hô “Bắt đầu!” hoặc thổi còi, hai đội cùng dùng sức kéo dây về phía mình.</p>
      <p><b>3. Luật thắng thua.</b> Đội nào kéo được dải băng qua vạch giới hạn phía mình là thắng hiệp đó. Thông thường, đội thắng hai trong ba hiệp là đội thắng chung cuộc.</p>
      <p><b>4. Điều cấm.</b> Không quấn dây vào tay, vào người; không ngồi hẳn xuống đất; không kéo trước khi có hiệu lệnh. Đội phạm lỗi có thể bị nhắc nhở hoặc xử thua hiệp đó.</p>
      <p><b>5. Lưu ý an toàn.</b> Khởi động trước khi chơi; đi giày hoặc dép bám; không buông dây đột ngột khi đội bạn đang kéo.</p>
      <p>Kéo co không chỉ rèn sức khoẻ mà còn dạy chúng ta rằng: sức mạnh lớn nhất là khi mọi người cùng chung một nhịp.</p>
      <div class="t-source">Bài viết do nhóm biên soạn tự viết; luật chơi có thể thay đổi theo từng địa phương, từng giải đấu.</div></div>` }
  ],
  summary: 'Văn bản thuyết minh quy tắc, luật lệ trò chơi: mở bài giới thiệu trò chơi và ý nghĩa; thân bài nêu người chơi, dụng cụ, sân chơi, cách chơi, luật thắng thua, điều cấm, lưu ý an toàn theo trình tự rõ ràng (đề mục, số thứ tự, hình minh hoạ); kết bài khẳng định giá trị. Ngôn ngữ chính xác, khách quan.',
  examples: [
    { title: 'Mở bài', problem: 'Viết mở bài cho văn bản thuyết minh luật chơi “Ô ăn quan”.', solution: '“Ô ăn quan là trò chơi dân gian dành cho hai người, chơi trên một bàn kẻ ô với những viên sỏi nhỏ. Trò chơi đòi hỏi khả năng tính toán và là kỉ niệm tuổi thơ của nhiều thế hệ.”' },
    { title: 'Diễn đạt luật chính xác', problem: 'Sửa câu cho chính xác: “Đội nào kéo mạnh hơn một chút thì thắng.”', solution: '“Đội nào kéo được dải băng giữa dây vượt qua vạch giới hạn về phía mình là thắng hiệp đó.” – nêu tiêu chí cụ thể, đo được.' },
    { title: 'Dùng đề mục', problem: 'Vì sao nên chia luật chơi thành các đề mục có số thứ tự?', solution: 'Đề mục giúp thông tin rõ ràng, người đọc dễ theo dõi, dễ tìm lại khi cần tra cứu một quy định (ví dụ chỉ cần xem mục “Điều cấm”).' }
  ],
  exercises: [
    { question: 'Lập dàn ý thuyết minh luật chơi “Nhảy dây tập thể”.', hints: ['Người chơi: hai bạn quay dây, các bạn khác nhảy.', 'Luật: vướng dây thì ra quay thay.'], solution: 'MB: giới thiệu trò nhảy dây tập thể, ích lợi. TB: 1) Chuẩn bị – dây dài 4–5 m, sân phẳng, 2 người quay, nhiều người nhảy. 2) Cách chơi – hai người quay đều, người nhảy lần lượt vào nhảy theo nhịp, có thể đếm số lần. 3) Luật – ai vướng dây thì ra thay người quay; người nhảy được nhiều lần nhất thắng. 4) An toàn – quay vừa phải, không đứng sát người quay. KB: trò chơi vui, rèn sức bền.' },
    { question: 'Chỉ ra ưu điểm về ngôn ngữ trong mục “3. Luật thắng thua” của bài kéo co.', hints: ['Có tiêu chí cụ thể không?', 'Có từ ngữ biểu cảm không?'], solution: 'Ngôn ngữ chính xác, khách quan: nêu tiêu chí rõ ràng (dải băng qua vạch giới hạn), số hiệp cụ thể (thắng hai trong ba hiệp); không dùng từ biểu cảm hay nói quá, nên ai đọc cũng hiểu giống nhau.' },
    { question: 'Viết mục “Lưu ý an toàn” (3 ý) cho trò chơi “Bịt mắt bắt dê”.', hints: ['Người bị bịt mắt không nhìn thấy.', 'Sân chơi, vật cản.'], solution: 'Ví dụ: 1) Chơi ở sân rộng, bằng phẳng, dọn hết vật cản, tránh xa bậc thềm, cột. 2) Khăn bịt mắt sạch, không buộc quá chặt. 3) Người chạy tránh không xô đẩy, không đưa người bị bịt mắt đến chỗ nguy hiểm.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Văn bản thuyết minh luật chơi cần có nội dung nào?', options: ['Người chơi, dụng cụ, cách chơi, luật thắng thua', 'Chỉ cảm xúc của người chơi', 'Truyện cổ tích về trò chơi', 'Lời bình luận trận đấu'], answer: 0, explain: 'Các nội dung cơ bản của luật chơi.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Ngôn ngữ thuyết minh luật chơi cần chính xác, khách quan.', answer: true, explain: 'Để người đọc hiểu giống nhau.' },
    { type: 'mcq', q: 'Theo bài mẫu, đội kéo co thắng hiệp khi:', options: ['Kéo dải băng qua vạch giới hạn phía mình', 'Hô to hơn', 'Có nhiều người hơn', 'Ngồi xuống đất trước'], answer: 0, explain: 'Luật thắng thua trong bài.' },
    { type: 'mcq', q: 'Hành động nào bị cấm trong kéo co?', options: ['Quấn dây vào tay, vào người', 'Nắm chặt dây', 'Khởi động trước khi chơi', 'Kéo sau hiệu lệnh'], answer: 0, explain: 'Quấn dây rất nguy hiểm.' },
    { type: 'short', q: 'Theo bài mẫu, đội thắng chung cuộc thường là đội thắng mấy trong ba hiệp? (ghi số)', answer: ['2', 'hai'], answerText: '2', explain: 'Thắng hai trong ba hiệp.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Luật chơi kéo co ở mọi nơi đều giống hệt nhau.', answer: false, explain: 'Luật có thể khác nhau theo địa phương, giải đấu.' },
    { type: 'mcq', q: 'Phương tiện nào giúp người đọc hình dung sân chơi dễ nhất?', options: ['Sơ đồ, hình vẽ', 'Câu cảm thán', 'Thành ngữ', 'Điệp ngữ'], answer: 0, explain: 'Phương tiện phi ngôn ngữ trực quan.' },
    { type: 'mcq', q: 'Kết bài của văn bản thuyết minh luật chơi thường:', options: ['Khẳng định giá trị, ý nghĩa của trò chơi', 'Kể thêm một luật mới', 'Liệt kê dụng cụ', 'Để trống'], answer: 0, explain: 'Khái quát giá trị.' }
  ]
});
})();
