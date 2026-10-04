/* KHTN 7 – Bài 33. Cảm ứng ở sinh vật và tập tính ở động vật. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-7/bai-33', {
  objectives: [
    'Phát biểu được khái niệm cảm ứng ở sinh vật và lấy được ví dụ về các hiện tượng cảm ứng ở thực vật và động vật.',
    'Nêu được vai trò của cảm ứng đối với sinh vật.',
    'Phát biểu được khái niệm tập tính ở động vật; phân biệt được tập tính bẩm sinh và tập tính học được; nêu được vai trò của tập tính.'
  ],
  intro: 'Chạm nhẹ vào lá cây trinh nữ, lá cụp lại ngay. Chạm tay vào cốc nước nóng, em rụt tay lại trước cả khi kịp nghĩ. Cả cây và người đều đang “phản ứng” với môi trường.',
  steps: [
    { title: 'Khái niệm cảm ứng', html: `<p><b>Cảm ứng</b> là khả năng <b>tiếp nhận</b> và <b>phản ứng lại</b> các kích thích từ môi trường (bên trong hoặc bên ngoài cơ thể) của sinh vật.</p>
      <p>Kích thích có thể là ánh sáng, nhiệt độ, nước, chất hoá học, sự va chạm, âm thanh…</p>` },
    { title: 'Cảm ứng ở thực vật', html: `<p>Thực vật phản ứng với kích thích thường <b>chậm</b>, khó nhận thấy, chủ yếu bằng sự sinh trưởng hướng về hoặc tránh xa nguồn kích thích (tính hướng):</p>
      <ul><li><b>Hướng sáng</b>: ngọn cây đặt gần cửa sổ vươn về phía ánh sáng.</li><li><b>Hướng nước</b>: rễ mọc hướng về nơi có nước.</li><li><b>Hướng tiếp xúc</b>: tua cuốn của cây mướp, bầu quấn vào giàn.</li><li><b>Hướng trọng lực</b>: rễ mọc hướng xuống đất, thân mọc hướng lên.</li></ul>
      <p>Một số phản ứng nhanh: lá cây trinh nữ cụp lại khi bị chạm; lá cây bắt ruồi khép lại khi có côn trùng đậu vào.</p>`,
      svg: S.row([{ svg: S.tropism('light'), caption: 'Hướng sáng' }, { svg: S.tropism('water'), caption: 'Hướng nước' }, { svg: S.tropism('touch'), caption: 'Cây trinh nữ cụp lá' }]) },
    { title: 'Cảm ứng ở động vật và vai trò của cảm ứng', html: `<p>Động vật có hệ thần kinh phản ứng <b>nhanh</b>, dễ nhận thấy. Ví dụ: chạm tay vào vật nóng thì rụt tay lại; gà con chạy đến khi nghe gà mẹ gọi; mèo dựng lông khi gặp chó.</p>
      <div class="box key">Vai trò: cảm ứng giúp sinh vật <b>thích nghi</b> với sự thay đổi của môi trường (tìm nguồn sống, tránh tác nhân có hại), nhờ đó tồn tại và phát triển.</div>` },
    { title: 'Tập tính ở động vật', html: `<p><b>Tập tính</b> là một chuỗi phản ứng của động vật trả lời kích thích từ môi trường, đảm bảo cho động vật thích nghi và tồn tại.</p>
      <table class="tbl"><tr><th></th><th>Tập tính bẩm sinh</th><th>Tập tính học được</th></tr>
      <tr><td>Nguồn gốc</td><td>Sinh ra đã có, di truyền từ bố mẹ, đặc trưng cho loài</td><td>Hình thành trong đời sống qua học tập, rút kinh nghiệm</td></tr>
      <tr><td>Ví dụ</td><td>Nhện giăng tơ, ong làm tổ, thú con bú mẹ</td><td>Chó chạy lại khi nghe gọi tên, khỉ làm xiếc, chim non tập bay tránh kẻ thù</td></tr></table>
      <p>Vai trò của tập tính: kiếm ăn, tự vệ, sinh sản, di cư, sống bầy đàn… giúp động vật thích nghi với môi trường sống.</p>` }
  ],
  summary: 'Cảm ứng là khả năng tiếp nhận và phản ứng lại kích thích từ môi trường, giúp sinh vật thích nghi. Thực vật phản ứng chậm (hướng sáng, hướng nước, hướng tiếp xúc, hướng trọng lực), một số phản ứng nhanh (trinh nữ cụp lá). Động vật phản ứng nhanh nhờ hệ thần kinh. Tập tính là chuỗi phản ứng trả lời kích thích; gồm tập tính bẩm sinh và tập tính học được.',
  examples: [
    { title: 'Nhận ra kích thích và phản ứng', problem: 'Cây trồng trong chậu đặt cạnh cửa sổ có ngọn cong về phía cửa sổ. Kích thích là gì? Phản ứng là gì?', solution: 'Kích thích: ánh sáng chiếu từ phía cửa sổ. Phản ứng: thân sinh trưởng cong về phía ánh sáng (tính hướng sáng).' },
    { title: 'Phân loại tập tính', problem: 'Xếp các tập tính sau vào nhóm bẩm sinh hoặc học được: (1) ve sầu kêu vào mùa hè; (2) học sinh dừng lại khi gặp đèn đỏ; (3) chim tha rác làm tổ; (4) chó biết bắt tay chủ.', solution: 'Bẩm sinh: (1), (3). Học được: (2), (4).' },
    { title: 'Tính tốc độ uốn cong', problem: 'Sau 3 ngày đặt cạnh cửa sổ, ngọn cây nghiêng 36° về phía ánh sáng. Trung bình mỗi ngày ngọn cây nghiêng thêm bao nhiêu độ?', solution: '36 : 3 = 12° mỗi ngày.' }
  ],
  exercises: [
    { question: 'Vì sao rễ cây mọc sâu xuống đất và lan rộng về phía có nước?', hints: ['Rễ có tính hướng gì?', 'Điều đó giúp cây như thế nào?'], solution: 'Rễ có tính hướng trọng lực (mọc xuống) và hướng nước (mọc về nơi có nước), giúp cây bám chắc vào đất và hút được nhiều nước, muối khoáng.' },
    { question: 'So sánh tốc độ phản ứng của thực vật và động vật với kích thích. Giải thích.', hints: ['Động vật có hệ cơ quan nào điều khiển phản ứng?', 'Thực vật phản ứng chủ yếu bằng cách nào?'], solution: 'Động vật phản ứng nhanh nhờ hệ thần kinh và cơ; thực vật không có hệ thần kinh, phản ứng chủ yếu bằng sinh trưởng nên thường chậm.' },
    { question: 'Người ta dùng chuông báo mỗi khi cho cá ăn. Sau một thời gian, chỉ cần rung chuông là cá bơi đến. Đây là loại tập tính nào? Vì sao?', hints: ['Cá sinh ra đã biết điều này chưa?', 'Tập tính hình thành nhờ đâu?'], solution: 'Tập tính học được, vì nó được hình thành trong đời sống do lặp lại nhiều lần việc rung chuông kèm cho ăn.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Cảm ứng giúp sinh vật thích nghi với sự thay đổi của môi trường.', answer: true, explain: 'Sinh vật phản ứng để tìm nguồn sống, tránh tác nhân có hại.' },
    { type: 'mcq', q: 'Tua cuốn của cây mướp quấn vào giàn là ví dụ về:', options: ['hướng sáng', 'hướng tiếp xúc', 'hướng nước', 'hướng trọng lực'], answer: 1, explain: 'Tua cuốn phản ứng với sự tiếp xúc.' },
    { type: 'mcq', q: 'Tập tính nào là tập tính bẩm sinh?', options: ['Chó biết bắt tay', 'Nhện giăng tơ', 'Khỉ làm xiếc', 'Vẹt nói tiếng người'], answer: 1, explain: 'Nhện sinh ra đã biết giăng tơ.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tập tính học được là tập tính sinh ra đã có và di truyền từ bố mẹ.', answer: false, explain: 'Đó là tập tính bẩm sinh.' },
    { type: 'short', q: 'Sau 3 ngày, ngọn cây nghiêng 36° về phía ánh sáng. Trung bình mỗi ngày nghiêng thêm bao nhiêu độ?', answer: '12', unit: '°', calc: '36/3', explain: '36 : 3 = 12°.' },
    { type: 'mcq', q: 'Rễ cây mọc hướng xuống đất là do tính:', options: ['hướng sáng', 'hướng trọng lực', 'hướng tiếp xúc', 'cụp lá'], answer: 1, explain: 'Rễ hướng trọng lực dương.' },
    { type: 'short', q: 'Lá cây trinh nữ có 12 cặp lá chét; khi bị chạm, 3/4 số cặp cụp lại. Có bao nhiêu cặp lá chét cụp lại?', answer: '9', unit: 'cặp', calc: '12*3/4', explain: '12 · 3/4 = 9 cặp.' },
    { type: 'short', q: 'Để hình thành phản xạ “nghe chuông thì đến ăn”, người nuôi rung chuông mỗi ngày 2 lần trong 15 ngày. Tổng số lần rung chuông là bao nhiêu?', answer: '30', unit: 'lần', calc: '2*15', explain: '2 · 15 = 30 lần.' }
  ]
});
})();
