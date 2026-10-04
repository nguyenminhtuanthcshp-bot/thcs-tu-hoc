/* KHTN 7 – Bài 11. Thảo luận về ảnh hưởng của tốc độ trong an toàn giao thông. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-7/bai-11', {
  objectives: [
    'Dựa vào tranh ảnh hoặc số liệu, thảo luận được ảnh hưởng của tốc độ trong an toàn giao thông.',
    'Giải thích được vì sao phải giữ khoảng cách an toàn và tuân thủ tốc độ tối đa cho phép.',
    'Tính được quãng đường xe đi được trong thời gian phản ứng của người lái.'
  ],
  intro: 'Khi thấy nguy hiểm, người lái xe không thể dừng xe ngay lập tức. Tốc độ càng lớn, xe càng cần nhiều quãng đường để dừng hẳn – và tai nạn càng nghiêm trọng.',
  steps: [
    { title: 'Thời gian phản ứng', html: `<p>Từ lúc người lái nhìn thấy vật cản đến lúc đạp phanh cần một khoảng thời gian gọi là <b>thời gian phản ứng</b>, thường khoảng 1 s (lâu hơn khi mệt mỏi, dùng điện thoại, uống rượu bia).</p>
      <p>Trong thời gian này xe vẫn chạy với tốc độ cũ: <b>quãng đường phản ứng</b> = v · t<sub>phản ứng</sub>.</p>
      <p>Ví dụ: xe chạy 54 km/h = 15 m/s, thời gian phản ứng 1 s ⇒ xe đi thêm 15 m trước khi bắt đầu phanh. Sau đó xe còn trượt thêm một đoạn nữa mới dừng.</p>` },
    { title: 'Khoảng cách an toàn', html: `<p>Vì cần quãng đường để phản ứng và phanh, các xe phải giữ <b>khoảng cách an toàn</b> với xe chạy phía trước. Tốc độ càng cao, khoảng cách an toàn càng lớn.</p>
      <table class="tbl"><tr><th>Tốc độ lưu hành (km/h)</th><th>Khoảng cách an toàn tối thiểu (m)</th></tr><tr><td>60</td><td>35</td></tr><tr><td>trên 60 đến 80</td><td>55</td></tr><tr><td>trên 80 đến 100</td><td>70</td></tr><tr><td>trên 100 đến 120</td><td>100</td></tr></table>
      <p class="muted">Bảng tham khảo khi mặt đường khô ráo; trời mưa, sương mù, đường trơn phải giữ khoảng cách lớn hơn.</p>`,
      svg: S.roadSafety({ v: 60, d: '35 m' }), caption: 'Ở tốc độ 60 km/h, xe sau cần cách xe trước ít nhất 35 m.' },
    { title: 'Tốc độ tối đa cho phép', html: `<p>Trên mỗi đoạn đường có <b>biển báo tốc độ tối đa</b>. Ví dụ, trong khu đông dân cư, trên đường hai chiều, tốc độ tối đa của ô tô, xe máy thường là 50 km/h.</p>
      <p>Chạy quá tốc độ khiến người lái khó xử lí tình huống bất ngờ, quãng đường dừng xe dài hơn và va chạm mạnh hơn. Các thiết bị bắn tốc độ giúp phát hiện xe chạy quá tốc độ.</p>` },
    { title: 'Thảo luận: em làm gì để an toàn?', html: `<ul><li>Đi xe đạp đúng làn, không lạng lách, không đi hàng ba, không vừa đi vừa dùng điện thoại.</li><li>Quan sát kĩ và chờ xe đi qua hẳn trước khi sang đường; không ước lượng “kịp” khi xe đang lao tới nhanh.</li><li>Nhắc người thân đội mũ bảo hiểm, chạy đúng tốc độ, giữ khoảng cách, không lái xe sau khi uống rượu bia.</li></ul>
      <div class="box key">Tốc độ càng lớn ⇒ quãng đường phản ứng và quãng đường phanh càng dài ⇒ càng khó tránh va chạm và hậu quả càng nặng.</div>` }
  ],
  summary: 'Tốc độ ảnh hưởng lớn đến an toàn giao thông. Quãng đường phản ứng = v · thời gian phản ứng (khoảng 1 s). Phải giữ khoảng cách an toàn (ví dụ 35 m ở 60 km/h) và tuân thủ tốc độ tối đa ghi trên biển báo.',
  examples: [
    { title: 'Quãng đường phản ứng', problem: 'Một ô tô chạy với tốc độ 72 km/h. Người lái có thời gian phản ứng 1 s. Tính quãng đường xe đi được trong thời gian phản ứng.', solution: '72 km/h = 20 m/s. Quãng đường phản ứng = 20 · 1 = 20 m.' },
    { title: 'Ảnh hưởng của mất tập trung', problem: 'Nếu người lái ở ví dụ trên đang nhìn điện thoại nên thời gian phản ứng tăng lên 2,5 s thì quãng đường phản ứng là bao nhiêu?', solution: '20 · 2,5 = 50 m – dài hơn khoảng cách an toàn 35 – 55 m ⇒ rất nguy hiểm.' },
    { title: 'Có vượt tốc độ không?', problem: 'Một xe máy đi được 180 m trong 12 s trên đường có biển tốc độ tối đa 50 km/h. Xe có vi phạm không?', solution: 'v = 180 : 12 = 15 m/s = 54 km/h > 50 km/h ⇒ xe chạy quá tốc độ cho phép.' }
  ],
  exercises: [
    { question: 'Một xe chạy 90 km/h, người lái có thời gian phản ứng 0,8 s. Tính quãng đường phản ứng.', hints: ['Đổi 90 km/h ra m/s.', 'Nhân tốc độ với thời gian phản ứng.'], solution: '90 km/h = 25 m/s; quãng đường phản ứng = 25 · 0,8 = 20 m.' },
    { question: 'Vì sao khi trời mưa, người lái xe phải giảm tốc độ và giữ khoảng cách xa hơn với xe phía trước?', hints: ['Đường ướt thì phanh có “ăn” như đường khô không?', 'Tầm nhìn khi mưa thế nào?'], solution: 'Đường trơn làm quãng đường phanh dài hơn, tầm nhìn kém làm phát hiện nguy hiểm chậm hơn. Giảm tốc độ và giữ khoảng cách lớn giúp có đủ quãng đường để dừng xe an toàn.' },
    { question: 'Một ô tô đang chạy 60 km/h phía sau một ô tô khác với khoảng cách 20 m. Nhận xét về mức độ an toàn và đề xuất cách xử lí.', hints: ['So sánh với bảng khoảng cách an toàn ở bước 2.', 'Có thể thay đổi đại lượng nào để an toàn hơn?'], solution: 'Khoảng cách 20 m nhỏ hơn mức tối thiểu 35 m ⇒ không an toàn. Người lái cần giảm tốc độ để tăng khoảng cách lên ít nhất 35 m.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tốc độ càng lớn thì quãng đường cần thiết để dừng xe càng dài.', answer: true, explain: 'Cả quãng đường phản ứng và quãng đường phanh đều tăng khi tốc độ tăng.' },
    { type: 'short', q: 'Xe chạy 72 km/h, thời gian phản ứng 1 s. Quãng đường phản ứng là bao nhiêu mét?', answer: '20', unit: 'm', calc: '72/3.6*1', explain: '72 km/h = 20 m/s ⇒ 20 · 1 = 20 m.' },
    { type: 'mcq', q: 'Ở tốc độ 60 km/h (đường khô ráo), khoảng cách an toàn tối thiểu với xe phía trước là:', options: ['10 m', '35 m', '70 m', '100 m'], answer: 1, explain: 'Theo bảng tham khảo: 60 km/h ⇒ 35 m.' },
    { type: 'short', q: 'Một xe máy đi 180 m trong 12 s. Tốc độ của xe là bao nhiêu km/h?', answer: '54', unit: 'km/h', calc: '180/12*3.6', explain: '180 : 12 = 15 m/s = 54 km/h.' },
    { type: 'mcq', q: 'Việc nào làm TĂNG thời gian phản ứng của người lái xe?', options: ['Tập trung quan sát', 'Nghe và nhắn tin điện thoại khi lái', 'Nghỉ ngơi đầy đủ trước khi đi', 'Giữ khoảng cách an toàn'], answer: 1, explain: 'Mất tập trung làm phản ứng chậm hơn.' },
    { type: 'short', q: 'Thời gian phản ứng 2 s, xe chạy 15 m/s. Quãng đường phản ứng là bao nhiêu mét?', answer: '30', unit: 'm', calc: '15*2', explain: '15 · 2 = 30 m.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khi trời mưa có thể giữ khoảng cách với xe trước nhỏ hơn khi trời khô.', answer: false, explain: 'Đường trơn, tầm nhìn kém ⇒ phải giữ khoảng cách lớn hơn.' },
    { type: 'short', q: 'Xe chạy 25 m/s. Đổi tốc độ này ra km/h.', answer: '90', unit: 'km/h', calc: '25*3.6', explain: '25 · 3,6 = 90 km/h.' }
  ]
});
})();
