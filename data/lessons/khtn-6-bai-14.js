/* KHTN 6 – Bài 14. Một số nhiên liệu. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-6/bai-14', {
  objectives: [
    'Nêu được nhiên liệu là gì; phân loại được nhiên liệu rắn, lỏng, khí.',
    'Nêu được tính chất và cách sử dụng nhiên liệu an toàn, hiệu quả.',
    'Hiểu vì sao cần sử dụng tiết kiệm nhiên liệu và tìm nguồn năng lượng thay thế (an ninh năng lượng).'
  ],
  intro: 'Bếp gas nấu cơm, xăng chạy xe máy, than củi nướng bánh… Những chất này khi cháy toả ra nhiệt và ánh sáng mà con người dùng hằng ngày. Chúng được gọi là <b>nhiên liệu</b>.',
  steps: [
    { title: 'Nhiên liệu là gì?', html: `<p><b>Nhiên liệu</b> là những chất <b>cháy được</b> và khi cháy <b>toả nhiều nhiệt</b> (thường kèm ánh sáng). Nhiệt này được dùng để đun nấu, sưởi ấm, chạy máy móc, phát điện…</p>
      <table class="tbl"><tr><th>Loại</th><th>Ví dụ</th></tr><tr><td>Nhiên liệu rắn</td><td>Than đá, than củi, gỗ, củi, rơm rạ</td></tr>
      <tr><td>Nhiên liệu lỏng</td><td>Xăng, dầu hoả, dầu diesel, cồn</td></tr><tr><td>Nhiên liệu khí</td><td>Khí gas (khí hoá lỏng), khí thiên nhiên, khí biogas</td></tr></table>
      <p>Than đá, dầu mỏ, khí thiên nhiên được gọi là <b>nhiên liệu hoá thạch</b> (hình thành từ xác sinh vật cách đây hàng triệu năm).</p>` },
    { title: 'Sử dụng nhiên liệu hiệu quả', html: `<p>Để nhiên liệu cháy hết, toả nhiều nhiệt và ít khí độc:</p>
      <ul><li>Cung cấp <b>đủ không khí (oxygen)</b> cho sự cháy (mở cửa lò, bếp có lỗ thông khí).</li>
      <li><b>Tăng diện tích tiếp xúc</b> của nhiên liệu với không khí (chẻ nhỏ củi, than tổ ong có nhiều lỗ).</li>
      <li><b>Điều chỉnh lượng nhiên liệu</b> vừa đủ với nhu cầu (vặn nhỏ lửa khi không cần lửa to).</li></ul>`,
      svg: S.draw({ w: 420, h: 250, aria: 'Tam giác lửa: ba điều kiện của sự cháy', items: [{ poly: [[210, 30], [360, 210], [60, 210]], fill: '#ffedd5', color: '#ea580c', width: 4 }, { text: [210, 150, 'SỰ CHÁY'], bold: true, color: '#c2410c', size: 18 }, { text: [210, 238, 'Nhiên liệu (chất cháy)'], bold: true, size: 15 }, { text: [118, 110, 'Oxygen'], bold: true, size: 15, anchor: 'end' }, { text: [118, 128, '(không khí)'], size: 13, anchor: 'end' }, { text: [302, 110, 'Nhiệt độ'], bold: true, size: 15, anchor: 'start' }, { text: [302, 128, 'đủ cao'], size: 13, anchor: 'start' }] }),
      caption: 'Sự cháy cần đủ ba yếu tố; thiếu một yếu tố thì lửa tắt.' },
    { title: 'Sử dụng nhiên liệu an toàn', html: `<ul><li>Không đun nấu bằng than trong phòng kín: thiếu oxygen sinh ra khí <b>carbon monoxide</b> độc, gây ngạt.</li>
      <li>Kiểm tra dây dẫn, van bình gas; ngửi thấy mùi gas thì <b>không bật lửa, không bật tắt công tắc điện</b>, mở cửa cho thoáng và khoá van.</li>
      <li>Để xăng, dầu, cồn xa nguồn lửa; không hút thuốc ở cây xăng.</li>
      <li>Dầu ăn trong chảo bốc cháy: <b>tắt bếp</b> và <b>đậy kín</b> chảo bằng nắp (hoặc khăn ướt vắt kiệt) để ngăn oxygen; <b>tuyệt đối không đổ nước</b> vào vì dầu nóng sẽ bắn tung, lửa bùng mạnh hơn.</li></ul>
      <div class="box tip">Khí gas vốn không mùi; nhà sản xuất cho thêm chất có mùi đặc trưng để người dùng phát hiện khi bị rò rỉ.</div>` },
    { title: 'An ninh năng lượng', html: `<p>Nhiên liệu hoá thạch <b>có hạn</b> và khi cháy thải ra nhiều khí carbon dioxide làm Trái Đất nóng lên. Vì vậy cần:</p>
      <ul><li>Sử dụng <b>tiết kiệm</b> nhiên liệu (tắt bếp đúng lúc, đi chung xe, dùng phương tiện công cộng).</li>
      <li>Phát triển các nguồn năng lượng thay thế: năng lượng Mặt Trời, gió, nước, biogas, xăng sinh học E5…</li></ul>
      <p><b>An ninh năng lượng</b> là việc bảo đảm đủ năng lượng cho đất nước phát triển một cách ổn định, lâu dài với giá hợp lí.</p>` }
  ],
  summary: 'Nhiên liệu là chất cháy được, toả nhiều nhiệt: rắn (than, củi), lỏng (xăng, dầu, cồn), khí (gas, biogas). Dùng hiệu quả: đủ không khí, tăng diện tích tiếp xúc, điều chỉnh lượng vừa đủ. Dùng an toàn: không đốt than trong phòng kín, cẩn thận với gas, xăng. Nhiên liệu hoá thạch có hạn nên cần tiết kiệm và tìm năng lượng thay thế.',
  examples: [
    { title: 'Phân loại nhiên liệu', problem: 'Xếp các nhiên liệu sau theo thể: cồn, khí biogas, than tổ ong, dầu hoả, củi, khí gas.', solution: 'Rắn: <b>than tổ ong, củi</b>. Lỏng: <b>cồn, dầu hoả</b>. Khí: <b>khí biogas, khí gas</b>.' },
    { title: 'Vì sao chẻ nhỏ củi?', problem: 'Khi nhóm bếp củi, vì sao người ta chẻ nhỏ củi và xếp thưa?', solution: 'Chẻ nhỏ làm <b>tăng diện tích tiếp xúc</b> với không khí; xếp thưa giúp <b>không khí lưu thông</b>, cung cấp đủ oxygen. Nhờ đó củi dễ cháy, cháy mạnh và hết.' },
    { title: 'Xử lí rò rỉ gas', problem: 'Về nhà, em ngửi thấy mùi gas nồng nặc trong bếp. Em cần làm gì và không được làm gì?', solution: 'Cần: khoá van bình gas, mở hết cửa cho thông thoáng, ra khỏi bếp và báo người lớn. <b>Không được</b>: bật lửa, bật/tắt công tắc điện, quạt điện (có thể phát tia lửa gây cháy nổ).' }
  ],
  exercises: [
    { question: 'Than tổ ong có nhiều lỗ nhỏ xuyên suốt. Các lỗ đó có tác dụng gì?', hints: ['Than cháy cần gì từ không khí?', 'Lỗ làm tăng diện tích tiếp xúc và giúp không khí đi qua.'], solution: 'Các lỗ giúp <b>tăng diện tích tiếp xúc</b> giữa than và không khí, không khí lưu thông dễ dàng, cung cấp đủ oxygen nên than cháy đều và hết hơn.' },
    { question: 'Nêu hai lí do cần sử dụng tiết kiệm xăng, dầu.', hints: ['Dầu mỏ có vô hạn không?', 'Đốt xăng thải ra những khí gì?'], solution: '(1) Dầu mỏ là nhiên liệu hoá thạch, trữ lượng có hạn, sẽ cạn kiệt. (2) Đốt xăng dầu thải ra carbon dioxide và khí độc, gây ô nhiễm không khí và làm Trái Đất nóng lên. (Ngoài ra còn tiết kiệm chi phí.)' },
    { question: 'Vì sao khi đun bếp gas, nếu ngọn lửa có màu vàng, nhiều muội than thì cần điều chỉnh lại bếp?', hints: ['Lửa gas cháy tốt thường có màu xanh.', 'Lửa vàng, có muội là dấu hiệu thiếu gì?'], solution: 'Ngọn lửa vàng, có muội là dấu hiệu <b>thiếu không khí</b>, gas cháy không hết: lãng phí nhiên liệu, làm đen nồi và có thể sinh khí độc. Cần vệ sinh, chỉnh lỗ thông khí để lửa cháy xanh.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Nhiên liệu là những chất:', options: ['Không cháy được', 'Cháy được và toả nhiều nhiệt', 'Dùng làm thức ăn', 'Dùng để xây nhà'], answer: 1, explain: 'Nhiên liệu cháy được, khi cháy toả nhiều nhiệt.' },
    { type: 'mcq', q: 'Nhiên liệu nào sau đây ở thể khí?', options: ['Xăng', 'Than đá', 'Biogas', 'Cồn'], answer: 2, explain: 'Biogas (khí sinh học) là nhiên liệu khí.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Có thể đốt than sưởi ấm trong phòng đóng kín cửa.', answer: false, explain: 'Rất nguy hiểm: thiếu oxygen, sinh khí carbon monoxide độc gây ngạt.' },
    { type: 'mcq', q: 'Biện pháp nào giúp nhiên liệu cháy hiệu quả hơn?', options: ['Đóng kín cửa lò', 'Xếp củi thật chặt', 'Cung cấp đủ không khí cho sự cháy', 'Dùng củi ướt'], answer: 2, explain: 'Đủ oxygen giúp nhiên liệu cháy hết, toả nhiều nhiệt.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Than đá, dầu mỏ, khí thiên nhiên là nhiên liệu hoá thạch.', answer: true, explain: 'Chúng hình thành từ xác sinh vật qua hàng triệu năm.' },
    { type: 'mcq', q: 'Khi phát hiện rò rỉ gas, việc KHÔNG được làm là:', options: ['Khoá van bình gas', 'Mở cửa cho thông thoáng', 'Bật công tắc đèn để nhìn rõ', 'Báo cho người lớn'], answer: 2, explain: 'Bật công tắc điện có thể tạo tia lửa gây cháy nổ.' },
    { type: 'short', q: 'Sự cháy cần chất khí nào trong không khí? (viết tên khí)', answer: ['oxygen', 'oxi', 'oxy', 'khí oxygen'], answerText: 'oxygen', explain: 'Oxygen duy trì sự cháy.' },
    { type: 'mcq', q: 'Nguồn năng lượng nào có thể thay thế một phần nhiên liệu hoá thạch?', options: ['Than đá', 'Năng lượng Mặt Trời', 'Dầu diesel', 'Khí thiên nhiên'], answer: 1, explain: 'Năng lượng Mặt Trời là nguồn năng lượng tái tạo, sạch.' }
  ]
});
})();
