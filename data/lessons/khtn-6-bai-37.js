/* KHTN 6 – Bài 37. Thực hành: Quan sát và nhận biết một số nhóm động vật ngoài thiên nhiên. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-6/bai-37', {
  objectives: [
    'Quan sát được động vật ngoài thiên nhiên (vườn trường, công viên, cánh đồng, ao hồ) bằng mắt thường, kính lúp, ống nhòm.',
    'Nhận biết và xếp được các động vật quan sát được vào đúng nhóm.',
    'Chụp ảnh, ghi chép, làm được bộ sưu tập ảnh và báo cáo; có ý thức bảo vệ động vật.'
  ],
  intro: 'Thiên nhiên quanh em là một "phòng thí nghiệm" sống: kiến bò trên thân cây, bướm hút mật, ếch nhảy bên ao, chim hót trên cành. Hãy ra ngoài và quan sát!',
  steps: [
    { title: 'Chuẩn bị', html: `<ul><li>Dụng cụ: kính lúp, ống nhòm (nếu có), máy ảnh hoặc điện thoại, sổ ghi chép, bút, vợt bắt côn trùng, lọ nhựa có nắp đục lỗ, găng tay.</li>
      <li>Trang phục: quần áo dài, giày; mang nước uống, mũ.</li></ul>
      <div class="box warn">Đi theo nhóm, có giáo viên hoặc người lớn. Tránh xa ao sâu, bụi rậm có rắn; không chạm tay vào sâu róm, ong, kiến lửa, rết; không bắt động vật hoang dã.</div>` },
    { title: 'Cách quan sát', html: `<ol><li>Chọn khu vực: vườn cây, bãi cỏ, bờ ao, gốc cây mục.</li><li>Quan sát <b>nhẹ nhàng, yên lặng</b> để không làm động vật sợ.</li>
      <li>Ghi lại: tên (nếu biết), nơi sống, hình dạng, màu sắc, cách di chuyển, số lượng; chụp ảnh.</li><li>Với côn trùng nhỏ: bắt tạm vào lọ, quan sát bằng kính lúp, sau đó <b>thả lại</b> chỗ cũ.</li></ol>` },
    { title: 'Nhận biết và phân loại', html: `<p>Dùng các đặc điểm đã học để xếp nhóm:</p>
      <table class="tbl"><tr><th>Động vật</th><th>Nơi gặp</th><th>Đặc điểm</th><th>Nhóm</th></tr>
      <tr><td>Kiến</td><td>Thân cây</td><td>Có 6 chân phân đốt</td><td>Chân khớp</td></tr><tr><td>Giun đất</td><td>Đất ẩm</td><td>Thân dài, phân đốt, mềm</td><td>Giun</td></tr>
      <tr><td>Ốc sên</td><td>Lá cây ẩm</td><td>Thân mềm, có vỏ xoắn</td><td>Thân mềm</td></tr><tr><td>Ếch</td><td>Bờ ao</td><td>Da trần, ẩm</td><td>Lưỡng cư</td></tr><tr><td>Chim sẻ</td><td>Cành cây</td><td>Có lông vũ, cánh</td><td>Chim</td></tr></table>`,
      svg: S.keyTree({ q: 'Có xương sống?', yes: { q: 'Có lông vũ?', yes: 'Chim sẻ', no: 'Ếch' }, no: { q: 'Chân phân đốt, có khớp?', yes: 'Kiến', no: { q: 'Có vỏ đá vôi?', yes: 'Ốc sên', no: 'Giun đất' } } }, { w: 620 }),
      caption: 'Một khoá lưỡng phân cho các động vật quan sát được.' },
    { title: 'Báo cáo', html: `<ul><li>Làm bộ sưu tập ảnh theo nhóm động vật (có chú thích tên, nơi sống, nhóm).</li><li>Trình bày trước lớp: động vật nào gặp nhiều nhất? Chúng có lợi hay có hại?</li>
      <li>Đề xuất việc làm để bảo vệ động vật nơi em sống (không bắt chim, không phá tổ, không vứt rác xuống ao…).</li></ul>` }
  ],
  summary: 'Quan sát động vật ngoài thiên nhiên cần chuẩn bị dụng cụ, trang phục, đi theo nhóm và giữ an toàn. Quan sát nhẹ nhàng, ghi chép, chụp ảnh; bắt côn trùng chỉ để quan sát rồi thả lại. Dùng đặc điểm hoặc khoá lưỡng phân để xếp nhóm, làm bộ sưu tập ảnh và báo cáo.',
  examples: [
    { title: 'Xếp nhóm', problem: 'Trong vườn em gặp: con nhện, con thằn lằn, con bướm. Xếp chúng vào nhóm.', solution: 'Nhện, bướm: <b>Chân khớp</b>. Thằn lằn: <b>Bò sát</b>.' },
    { title: 'Quan sát chim', problem: 'Vì sao nên dùng ống nhòm để quan sát chim?', solution: 'Chim nhát, dễ bay đi khi ta lại gần; ống nhòm giúp quan sát rõ từ <b>xa</b> mà không làm chim sợ.' },
    { title: 'An toàn', problem: 'Em thấy một con sâu có nhiều lông trên lá. Có nên cầm lên xem không?', solution: '<b>Không</b>. Sâu róm có lông gây ngứa, sưng rát. Chỉ quan sát bằng mắt hoặc kính lúp, dùng que gắp nếu cần.' }
  ],
  exercises: [
    { question: 'Vì sao sau khi quan sát côn trùng nên thả chúng về chỗ cũ?', hints: ['Côn trùng có vai trò gì trong tự nhiên?', 'Nhốt lâu trong lọ thì sao?'], solution: 'Để bảo vệ động vật và cân bằng tự nhiên: nhiều côn trùng có ích (thụ phấn, làm thức ăn cho chim…); nhốt lâu trong lọ chúng sẽ chết.' },
    { question: 'Nếu quan sát được 12 con kiến, 3 con giun đất, 2 con ốc sên và 5 con chim sẻ, nhóm Chân khớp chiếm bao nhiêu con trong tổng số?', hints: ['Tính tổng số con quan sát được.', 'Kiến thuộc Chân khớp.'], solution: 'Tổng: 12 + 3 + 2 + 5 = 22 con. Chân khớp: <b>12 con</b> (trên 22 con).' },
    { question: 'Kể hai việc làm của học sinh giúp bảo vệ động vật hoang dã quanh trường.', hints: ['Nghĩ về tổ chim, cây xanh.', 'Nghĩ về rác thải.'], solution: 'Không bắt chim, không phá tổ chim; trồng và chăm sóc cây xanh (nơi ở của động vật); không vứt rác xuống ao hồ; tuyên truyền cho bạn bè.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Dụng cụ giúp quan sát chim từ xa là:', options: ['Ống nhòm', 'Kính hiển vi', 'Nhiệt kế', 'Cân'], answer: 0, explain: 'Ống nhòm giúp nhìn rõ vật ở xa.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Có thể dùng tay không để bắt sâu róm.', answer: false, explain: 'Lông sâu róm gây ngứa, rát.' },
    { type: 'mcq', q: 'Con kiến thuộc nhóm:', options: ['Chân khớp', 'Giun', 'Thân mềm', 'Bò sát'], answer: 0, explain: 'Kiến có 6 chân phân đốt.' },
    { type: 'mcq', q: 'Ốc sên thường gặp ở:', options: ['Nơi ẩm ướt như lá cây, gốc cây', 'Nơi khô nóng', 'Trên mái tôn giữa trưa', 'Trong nước biển sâu'], answer: 0, explain: 'Ốc sên ưa ẩm.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nên quan sát động vật nhẹ nhàng, yên lặng.', answer: true, explain: 'Để động vật không sợ hãi bỏ đi.' },
    { type: 'mcq', q: 'Việc nào góp phần bảo vệ động vật?', options: ['Thả côn trùng về chỗ cũ sau khi quan sát', 'Phá tổ chim', 'Vứt rác xuống ao', 'Bắt ếch về nuôi đến chết'], answer: 0, explain: 'Giúp giữ cân bằng tự nhiên.' },
    { type: 'mcq', q: 'Con vật có da trần, ẩm, gặp ở bờ ao là:', options: ['Ếch', 'Thằn lằn', 'Chim', 'Kiến'], answer: 0, explain: 'Ếch thuộc Lưỡng cư.' },
    { type: 'short', q: 'Quan sát được 8 con bướm, 5 con kiến, 3 con chim. Có bao nhiêu con thuộc nhóm Chân khớp?', answer: '13', unit: 'con', calc: '8+5', explain: 'Bướm và kiến đều là Chân khớp: 8 + 5 = 13.' }
  ]
});
})();
