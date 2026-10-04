/* KHTN 6 – Bài 29. Virus. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-6/bai-29', {
  objectives: [
    'Mô tả được hình dạng và cấu tạo đơn giản của virus.',
    'Phân biệt được virus với vi khuẩn.',
    'Nêu được vai trò, tác hại của virus; kể được một số bệnh do virus và cách phòng tránh.'
  ],
  intro: 'Cúm, sởi, thuỷ đậu, COVID-19 đều do <b>virus</b> gây ra. Virus nhỏ hơn vi khuẩn rất nhiều và có cách sống rất đặc biệt.',
  steps: [
    { title: 'Virus có kích thước siêu nhỏ', html: `<p>Virus nhỏ hơn vi khuẩn hàng chục đến hàng trăm lần, kích thước khoảng 20–300 <b>nanomet</b> (1 µm = 1 000 nm). Chỉ quan sát được bằng <b>kính hiển vi điện tử</b>.</p>` },
    { title: 'Cấu tạo', html: `<p>Virus <b>chưa có cấu tạo tế bào</b>. Mỗi virus gồm:</p><ul><li><b>Vỏ protein</b> bao bọc bên ngoài.</li><li><b>Vật chất di truyền</b> (lõi) nằm bên trong.</li><li>Một số virus có thêm <b>vỏ ngoài</b> với các gai (như virus cúm).</li></ul>`,
      svg: S.virus('cau-tao'), caption: 'Sơ đồ cấu tạo virus.' },
    { title: 'Hình dạng', html: `<p>Virus có ba dạng cấu trúc chính: <b>dạng xoắn</b> (virus khảm thuốc lá, virus dại), <b>dạng khối</b> (virus adeno, virus bại liệt), <b>dạng hỗn hợp</b> (thể thực khuẩn – virus kí sinh ở vi khuẩn).</p>`,
      svg: S.virus('hinh-dang'), caption: 'Ba dạng cấu trúc của virus.' },
    { title: 'Virus sống kí sinh bắt buộc', html: `<ul><li>Virus <b>không tự sinh sản</b> được bên ngoài tế bào. Chúng phải xâm nhập vào tế bào sống (người, động vật, thực vật, vi khuẩn) và dùng "nguyên liệu" của tế bào để nhân lên – gọi là <b>kí sinh nội bào bắt buộc</b>.</li>
      <li>Vì vậy virus được coi là dạng sống đặc biệt, <b>không</b> xếp vào giới nào trong năm giới.</li></ul>
      <div class="box warn"><b>Kháng sinh không diệt được virus.</b> Tự ý uống kháng sinh khi bị cảm cúm là sai và có hại.</div>` },
    { title: 'Vai trò, tác hại, phòng bệnh', html: `<ul><li><b>Tác hại</b>: gây bệnh ở người (cúm, sởi, quai bị, thuỷ đậu, dại, viêm gan B, sốt xuất huyết, COVID-19…), ở vật nuôi (lở mồm long móng, cúm gia cầm), ở cây trồng (khảm thuốc lá, xoăn lá cà chua).</li>
      <li><b>Có lợi</b>: dùng sản xuất vaccine, thuốc trừ sâu sinh học; nghiên cứu khoa học.</li>
      <li><b>Phòng bệnh</b>: tiêm vaccine; đeo khẩu trang nơi đông người; rửa tay; diệt muỗi (bệnh sốt xuất huyết); tiêm phòng dại cho chó mèo; ăn uống, sinh hoạt hợp lí để tăng sức đề kháng.</li></ul>` }
  ],
  summary: 'Virus rất nhỏ (nanomet), chưa có cấu tạo tế bào, gồm vỏ protein và vật chất di truyền; có dạng xoắn, khối, hỗn hợp. Virus chỉ nhân lên được trong tế bào sống (kí sinh bắt buộc). Virus gây nhiều bệnh (cúm, sởi, dại…); phòng bệnh bằng vaccine, vệ sinh. Kháng sinh không diệt được virus.',
  examples: [
    { title: 'Virus hay vi khuẩn', problem: 'Nêu hai điểm khác nhau giữa virus và vi khuẩn.', solution: 'Vi khuẩn có cấu tạo tế bào (nhân sơ), tự sinh sản được; virus chưa có cấu tạo tế bào, chỉ nhân lên trong tế bào sống. Virus nhỏ hơn vi khuẩn rất nhiều.' },
    { title: 'Kháng sinh', problem: 'Bạn Lan bị cúm, mẹ định cho uống kháng sinh còn thừa. Có nên không?', solution: '<b>Không</b>. Cúm do virus, kháng sinh không có tác dụng với virus; tự ý dùng kháng sinh còn gây hại. Nên nghỉ ngơi, uống đủ nước và đi khám khi cần.' },
    { title: 'Đổi đơn vị', problem: 'Một virus có kích thước 100 nm. Đổi ra µm.', solution: '1 µm = 1 000 nm nên 100 nm = 100 : 1 000 = <b>0,1 µm</b>.' }
  ],
  exercises: [
    { question: 'Vì sao virus không được xếp vào giới nào trong năm giới sinh vật?', hints: ['Năm giới đều gồm sinh vật có cấu tạo gì?', 'Virus có tự sống, sinh sản bên ngoài tế bào không?'], solution: 'Sinh vật trong năm giới đều có cấu tạo <b>tế bào</b>. Virus chưa có cấu tạo tế bào, chỉ gồm vỏ protein và vật chất di truyền, không tự sinh sản ngoài tế bào sống, nên được coi là dạng sống đặc biệt.' },
    { question: 'Vi khuẩn dài 2 µm, virus dài 100 nm. Vi khuẩn dài gấp bao nhiêu lần virus?', hints: ['Đổi cùng đơn vị: 2 µm = ? nm.', '2 µm = 2 000 nm.'], solution: '2 000 : 100 = <b>20</b> lần.' },
    { question: 'Nêu ba biện pháp phòng bệnh sốt xuất huyết (do virus, lây qua muỗi vằn).', hints: ['Muỗi vằn đẻ trứng ở đâu?', 'Làm sao để không bị muỗi đốt?'], solution: 'Diệt lăng quăng: đậy kín, thay nước thường xuyên các dụng cụ chứa nước, dọn vật đọng nước; ngủ màn, mặc áo dài tay; phun thuốc diệt muỗi khi có dịch.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Virus có cấu tạo gồm:', options: ['Vỏ protein và vật chất di truyền', 'Màng, tế bào chất, nhân', 'Thành tế bào và lục lạp', 'Nhiều tế bào'], answer: 0, explain: 'Virus chưa có cấu tạo tế bào.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Kháng sinh dùng để diệt virus cúm.', answer: false, explain: 'Kháng sinh chỉ tác dụng với vi khuẩn, không diệt được virus.' },
    { type: 'mcq', q: 'Bệnh nào do virus gây ra?', options: ['Bệnh sởi', 'Bệnh lao', 'Bệnh tả', 'Bệnh sốt rét'], answer: 0, explain: 'Sởi do virus; lao, tả do vi khuẩn; sốt rét do trùng sốt rét.' },
    { type: 'mcq', q: 'Để quan sát virus cần dùng:', options: ['Mắt thường', 'Kính lúp', 'Kính hiển vi quang học', 'Kính hiển vi điện tử'], answer: 3, explain: 'Virus quá nhỏ, chỉ thấy dưới kính hiển vi điện tử.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Virus chỉ nhân lên được khi ở bên trong tế bào sống.', answer: true, explain: 'Virus kí sinh nội bào bắt buộc.' },
    { type: 'mcq', q: 'Thể thực khuẩn (virus kí sinh ở vi khuẩn) có dạng cấu trúc:', options: ['Xoắn', 'Khối', 'Hỗn hợp', 'Hình que'], answer: 2, explain: 'Đầu khối, đuôi xoắn – dạng hỗn hợp.' },
    { type: 'short', q: 'Đổi 200 nm ra µm (dùng dấu phẩy cho số thập phân).', answer: '0,2', unit: 'µm', explain: '200 : 1 000 = 0,2 µm.' },
    { type: 'mcq', q: 'Biện pháp hiệu quả nhất để phòng nhiều bệnh do virus như sởi, bại liệt là:', options: ['Tiêm vaccine', 'Uống kháng sinh', 'Ăn nhiều đường', 'Tắm nắng buổi trưa'], answer: 0, explain: 'Vaccine giúp cơ thể có miễn dịch.' }
  ]
});
})();
