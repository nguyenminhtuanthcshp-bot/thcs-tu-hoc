/* Ngữ văn 8 – Bài 1. Viết: Kể lại một chuyến đi (tham quan một di tích lịch sử, văn hoá). Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('ngu-van-8/b1-viet', {
  objectives: [
    'Nêu được yêu cầu của bài văn kể lại một chuyến đi tham quan di tích lịch sử, văn hoá.',
    'Lập được dàn ý theo trình tự chuyến đi (thời gian, không gian).',
    'Viết được bài văn có kết hợp kể, miêu tả, biểu cảm và thông tin về di tích.',
    'Biết tự kiểm tra, chỉnh sửa bài viết.'
  ],
  intro: 'Một chuyến tham quan di tích không chỉ là một buổi đi chơi: đó là dịp em “gặp gỡ” lịch sử. Khi kể lại, em vừa là người kể chuyện, vừa là “hướng dẫn viên” đưa người đọc cùng đến nơi ấy.',
  steps: [
    { title: 'Yêu cầu của bài văn', html: `<ul><li>Kể theo <b>ngôi thứ nhất</b>; giới thiệu chuyến đi: thời gian, địa điểm, người cùng đi, mục đích.</li><li>Kể theo <b>trình tự hợp lí</b>: trình tự thời gian (trước – trong – sau chuyến đi) hoặc trình tự không gian (lần lượt các khu vực tham quan).</li><li>Miêu tả những <b>điểm nổi bật</b> của di tích, kết hợp <b>thông tin chính xác</b> về lịch sử, văn hoá.</li><li>Bày tỏ <b>cảm xúc, suy nghĩ</b> và ý nghĩa của chuyến đi.</li></ul>` },
    { title: 'Chuẩn bị tư liệu', html: `<p>Trước khi viết, hãy gom lại: ảnh chụp, vé tham quan, ghi chép lời hướng dẫn viên, bảng giới thiệu tại di tích, sách báo chính thống.</p>
      <div class="box tip">Thông tin lịch sử (năm xây dựng, nhân vật, sự kiện) phải <b>chính xác</b>, có nguồn tin cậy. Nếu không chắc chắn, đừng đưa số liệu vào bài.</div>` },
    { title: 'Dàn ý', html: `<table class="tbl"><tr><th>Phần</th><th>Nội dung</th></tr>
      <tr><td><b>Mở bài</b></td><td>Giới thiệu chuyến đi (đi đâu, khi nào, với ai) và ấn tượng chung.</td></tr>
      <tr><td><b>Thân bài</b></td><td>(1) Trên đường đi: tâm trạng, khung cảnh.<br>(2) Đến nơi: cảnh quan chung.<br>(3) Lần lượt các điểm tham quan: miêu tả + thông tin + cảm xúc.<br>(4) Hoạt động đáng nhớ (nghe thuyết minh, dâng hương, trò chuyện…).</td></tr>
      <tr><td><b>Kết bài</b></td><td>Cảm nghĩ về chuyến đi; điều em học được; mong muốn.</td></tr></table>`,
      svg: THCS.svg.flow({ vertical: true, w: 580, items: [{ title: 'Mở bài', text: 'Giới thiệu chuyến đi: thời gian, địa điểm, người cùng đi' }, { title: 'Thân bài 1', text: 'Trên đường đi, ấn tượng ban đầu' }, { title: 'Thân bài 2', text: 'Lần lượt các điểm tham quan: tả, thông tin, cảm xúc' }, { title: 'Kết bài', text: 'Ý nghĩa chuyến đi, suy nghĩ của em' }] }),
      caption: 'Sơ đồ dàn ý bài văn kể lại chuyến đi tham quan di tích.' },
    { title: 'Ví dụ: tham quan Văn Miếu – Quốc Tử Giám', html: `<p>Một vài thông tin có thể dùng: Văn Miếu được xây dựng năm <b>1070</b> dưới triều vua Lý Thánh Tông; năm <b>1076</b>, Quốc Tử Giám – được coi là trường đại học đầu tiên của nước ta – được lập. Tại đây có <b>82 tấm bia tiến sĩ</b>, được UNESCO công nhận là Di sản tư liệu thuộc Chương trình Ký ức Thế giới (năm 2010). Khuê Văn Các là biểu tượng của Thủ đô Hà Nội.</p>
      <p>Hãy <b>kết hợp</b> thông tin với miêu tả và cảm xúc, ví dụ: “Đứng trước hàng bia đá rêu phong đặt trên lưng rùa, em như nghe thấy tiếng đọc sách vọng về từ nhiều trăm năm trước.”</p>` },
    { title: 'Kiểm tra và chỉnh sửa', html: `<ul><li>Trình tự các sự việc, địa điểm có rõ ràng không?</li><li>Thông tin về di tích có chính xác không?</li><li>Đã có đủ miêu tả, cảm xúc chưa, hay chỉ liệt kê?</li><li>Câu văn, chính tả, dấu câu đã đúng chưa?</li></ul>` }
  ],
  summary: 'Kể chuyến tham quan bằng ngôi thứ nhất, theo trình tự thời gian hoặc không gian; kết hợp kể, tả, biểu cảm và thông tin chính xác về di tích; kết bài nêu cảm nghĩ, ý nghĩa.',
  examples: [
    { title: 'Mở bài mẫu', problem: 'Viết mở bài cho đề: “Kể lại chuyến tham quan Văn Miếu – Quốc Tử Giám.”', solution: '“Sáng Chủ nhật cuối tháng Mười, lớp 8A chúng em được cô chủ nhiệm đưa đi tham quan Văn Miếu – Quốc Tử Giám. Dù đã nhiều lần nhìn thấy Khuê Văn Các trên sách vở, đến khi tận mắt đứng trước công trình ấy, em mới thấy lòng mình xúc động và tự hào đến thế.”' },
    { title: 'Đoạn thân bài kết hợp thông tin', problem: 'Viết một đoạn tả khu bia tiến sĩ, có kết hợp thông tin và cảm xúc.', solution: '“Qua Khuê Văn Các, chúng em đến khu bia tiến sĩ. Hai bên giếng Thiên Quang là những dãy bia đá xám đặt trang nghiêm trên lưng rùa. Cô hướng dẫn viên cho biết nơi đây hiện còn 82 tấm bia, ghi tên những người đỗ tiến sĩ qua các khoa thi xưa, và đã được UNESCO công nhận là di sản tư liệu thế giới. Em đưa tay chạm nhẹ vào lớp đá mát lạnh, bỗng thấy thêm trân trọng truyền thống hiếu học của cha ông.”' },
    { title: 'Nhận xét lỗi', problem: 'Đoạn sau mắc lỗi gì: “Chúng em đến Văn Miếu. Có bia. Có Khuê Văn Các. Có giếng. Sau đó về.”', solution: 'Chỉ liệt kê khô khan, câu cụt, thiếu miêu tả, thiếu cảm xúc và thông tin. Cần viết câu đầy đủ, thêm chi tiết miêu tả và suy nghĩ của em.' }
  ],
  exercises: [
    { question: 'Lập dàn ý ngắn cho bài văn kể lại một chuyến tham quan di tích ở địa phương em.', hints: ['Mở bài: đi đâu, khi nào, với ai.', 'Thân bài: đường đi → cảnh chung → từng khu vực → hoạt động đáng nhớ. Kết bài: cảm nghĩ.'], solution: 'Học sinh tự lập theo mẫu: Mở bài (giới thiệu chuyến đi) – Thân bài (trên đường đi; cảnh quan chung; các điểm tham quan kèm thông tin; hoạt động đáng nhớ) – Kết bài (cảm nghĩ, bài học, mong muốn). Lưu ý dùng thông tin chính xác từ bảng giới thiệu tại di tích.' },
    { question: 'Tìm 4 từ ngữ chỉ trình tự không gian có thể dùng khi kể lại chuyến tham quan.', hints: ['Các từ chỉ vị trí, hướng di chuyển.', 'Ví dụ: “bước qua cổng…”.'], solution: 'Ví dụ: bước qua cổng chính, tiến vào bên trong, phía bên trái, đi tiếp đến, ở chính giữa, sau cùng là…' },
    { question: 'Viết kết bài (3–4 câu) cho bài văn kể lại chuyến tham quan một di tích lịch sử.', hints: ['Nêu cảm xúc sau chuyến đi.', 'Nêu điều em học được và mong muốn (ví dụ: giữ gìn di tích).'], solution: 'Ví dụ: “Chuyến đi khép lại nhưng hình ảnh những tấm bia đá vẫn còn in đậm trong em. Em hiểu hơn về truyền thống hiếu học của dân tộc và tự nhủ phải chăm chỉ học tập hơn nữa. Em mong sẽ có dịp quay lại, và mong mọi người cùng chung tay giữ gìn những di tích quý giá này.”' }
  ],
  quiz: [
    { type: 'mcq', q: 'Bài văn kể lại chuyến tham quan di tích thường sử dụng ngôi kể nào?', options: ['Ngôi thứ nhất', 'Ngôi thứ hai', 'Ngôi thứ ba', 'Không có ngôi kể'], answer: 0, explain: 'Em kể lại chuyến đi của chính mình nên dùng ngôi thứ nhất.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Có thể kể chuyến đi theo trình tự không gian (lần lượt các khu vực tham quan).', answer: true, explain: 'Có thể kể theo trình tự thời gian hoặc không gian.' },
    { type: 'short', q: 'Văn Miếu (Hà Nội) được xây dựng vào năm nào?', answer: '1070', explain: 'Văn Miếu được xây dựng năm 1070, thời vua Lý Thánh Tông.' },
    { type: 'short', q: 'Tại Văn Miếu – Quốc Tử Giám hiện có bao nhiêu tấm bia tiến sĩ?', answer: '82', explain: 'Có 82 tấm bia tiến sĩ.' },
    { type: 'mcq', q: 'Khi đưa thông tin lịch sử vào bài viết, em cần:', options: ['Tự đoán năm tháng cho nhanh', 'Dùng thông tin chính xác từ nguồn tin cậy', 'Viết càng nhiều số liệu càng tốt, không cần kiểm tra', 'Không cần thông tin nào'], answer: 1, explain: 'Thông tin phải chính xác, có nguồn tin cậy.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Bài văn chỉ cần liệt kê các địa điểm đã đến là đủ.', answer: false, explain: 'Cần kết hợp kể, miêu tả, cảm xúc và thông tin.' },
    { type: 'mcq', q: 'Phần kết bài nên có nội dung:', options: ['Giới thiệu chuyến đi', 'Liệt kê giờ xuất phát', 'Cảm nghĩ, điều học được sau chuyến đi', 'Miêu tả đường đi'], answer: 2, explain: 'Kết bài nêu cảm nghĩ, ý nghĩa của chuyến đi.' },
    { type: 'mcq', q: 'Công trình nào được xem là biểu tượng của Thủ đô Hà Nội, nằm trong khu Văn Miếu – Quốc Tử Giám?', options: ['Chùa Một Cột', 'Khuê Văn Các', 'Tháp Rùa', 'Cột cờ Hà Nội'], answer: 1, explain: 'Khuê Văn Các nằm trong khu di tích Văn Miếu – Quốc Tử Giám.' }
  ]
});
