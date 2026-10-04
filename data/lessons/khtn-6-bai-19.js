/* KHTN 6 – Bài 19. Cấu tạo và chức năng các thành phần của tế bào. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-6/bai-19', {
  objectives: [
    'Nêu được ba thành phần chính của tế bào (màng tế bào, tế bào chất, nhân hoặc vùng nhân) và chức năng của chúng.',
    'Phân biệt được tế bào nhân sơ và tế bào nhân thực.',
    'So sánh được tế bào động vật và tế bào thực vật; nêu được vai trò của lục lạp.'
  ],
  intro: 'Nếu ví tế bào như một ngôi nhà, thì cần có "tường bao" để ngăn cách với bên ngoài, "không gian bên trong" để làm việc và "phòng điều khiển" để chỉ huy. Tế bào cũng có ba thành phần chính như vậy.',
  steps: [
    { title: 'Ba thành phần chính của tế bào', html: `<table class="tbl"><tr><th>Thành phần</th><th>Chức năng</th></tr>
      <tr><td><b>Màng tế bào</b></td><td>Bao bọc tế bào, bảo vệ và kiểm soát sự ra vào của các chất.</td></tr>
      <tr><td><b>Tế bào chất</b></td><td>Chất keo lỏng chứa các bào quan; là nơi diễn ra hầu hết các hoạt động sống của tế bào.</td></tr>
      <tr><td><b>Nhân</b> (hoặc <b>vùng nhân</b>)</td><td>Chứa vật chất di truyền; điều khiển mọi hoạt động sống của tế bào.</td></tr></table>` },
    { title: 'Tế bào nhân sơ', html: `<p><b>Tế bào nhân sơ</b> <b>chưa có màng nhân</b>: vật chất di truyền nằm trong <b>vùng nhân</b>. Kích thước rất nhỏ, cấu tạo đơn giản. Ví dụ: <b>vi khuẩn</b>.</p>`,
      svg: S.cell('nhan-so'), caption: 'Sơ đồ tế bào nhân sơ (vi khuẩn).' },
    { title: 'Tế bào nhân thực: động vật', html: `<p><b>Tế bào nhân thực</b> có <b>nhân hoàn chỉnh</b> (có màng nhân bao bọc) và nhiều bào quan có màng. Gặp ở nấm, thực vật, động vật, nguyên sinh vật.</p>`,
      svg: S.cell('dong-vat'), caption: 'Sơ đồ tế bào động vật.' },
    { title: 'Tế bào nhân thực: thực vật', html: `<p>Tế bào thực vật có thêm:</p><ul><li><b>Thành tế bào</b> (bằng cellulose) bên ngoài màng – giúp tế bào có hình dạng ổn định, cây đứng vững.</li>
      <li><b>Lục lạp</b> chứa diệp lục – nơi thực hiện <b>quang hợp</b>.</li><li>Thường có <b>không bào</b> lớn.</li></ul>`,
      svg: S.cell('thuc-vat'), caption: 'Sơ đồ tế bào thực vật.' },
    { title: 'So sánh', html: `<table class="tbl"><tr><th>Đặc điểm</th><th>Tế bào động vật</th><th>Tế bào thực vật</th></tr>
      <tr><td>Màng tế bào, tế bào chất, nhân</td><td>Có</td><td>Có</td></tr><tr><td>Thành tế bào</td><td>Không</td><td>Có</td></tr>
      <tr><td>Lục lạp</td><td>Không</td><td>Có (ở phần xanh của cây)</td></tr><tr><td>Không bào</td><td>Nhỏ hoặc không có</td><td>Thường lớn</td></tr></table>` }
  ],
  summary: 'Tế bào gồm màng tế bào, tế bào chất và nhân (hoặc vùng nhân). Tế bào nhân sơ chưa có màng nhân (vi khuẩn); tế bào nhân thực có nhân hoàn chỉnh. Tế bào thực vật khác tế bào động vật ở chỗ có thành tế bào, lục lạp và không bào lớn.',
  examples: [
    { title: 'Chức năng', problem: 'Thành phần nào điều khiển mọi hoạt động của tế bào nhân thực?', solution: '<b>Nhân tế bào</b> – nơi chứa vật chất di truyền.' },
    { title: 'Nhận diện', problem: 'Dưới kính hiển vi, một tế bào có thành tế bào và nhiều hạt màu xanh lục. Đó là tế bào động vật hay thực vật?', solution: 'Tế bào <b>thực vật</b>: có thành tế bào và lục lạp (hạt màu xanh).' },
    { title: 'Nhân sơ hay nhân thực', problem: 'Vi khuẩn E. coli không có màng nhân. Tế bào của nó thuộc loại nào?', solution: 'Tế bào <b>nhân sơ</b>.' }
  ],
  exercises: [
    { question: 'Vì sao lá cây có màu xanh, còn tế bào ở củ khoai tây (nằm dưới đất) hầu như không có màu xanh?', hints: ['Màu xanh do sắc tố nào tạo ra, nằm trong bào quan nào?', 'Lục lạp phát triển khi có ánh sáng.'], solution: 'Màu xanh do <b>diệp lục</b> trong <b>lục lạp</b>. Tế bào lá nhận ánh sáng nên có nhiều lục lạp để quang hợp; củ khoai tây nằm trong đất, không có ánh sáng nên hầu như không có lục lạp.' },
    { question: 'Nêu hai điểm giống nhau và hai điểm khác nhau giữa tế bào nhân sơ và tế bào nhân thực.', hints: ['Cả hai đều có những thành phần chính nào?', 'Nhân khác nhau ra sao? Kích thước?'], solution: 'Giống: đều có màng tế bào, tế bào chất và vật chất di truyền. Khác: nhân sơ chưa có màng nhân (chỉ có vùng nhân), kích thước nhỏ, cấu tạo đơn giản; nhân thực có nhân hoàn chỉnh, có nhiều bào quan có màng, kích thước lớn hơn.' },
    { question: 'Màng tế bào giống bộ phận nào của một ngôi nhà? Giải thích.', hints: ['Màng bao ở ngoài cùng (với tế bào động vật).', 'Màng cho chất này vào, chất kia ra.'], solution: 'Giống <b>tường và cửa ra vào</b>: bao bọc, bảo vệ, đồng thời kiểm soát việc cho các chất đi vào, đi ra khỏi tế bào.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Ba thành phần chính của tế bào là:', options: ['Màng tế bào, tế bào chất, nhân (vùng nhân)', 'Thành tế bào, lục lạp, không bào', 'Mô, cơ quan, hệ cơ quan', 'Nhân, lục lạp, thành tế bào'], answer: 0, explain: 'Mọi tế bào đều có màng, tế bào chất và nhân hoặc vùng nhân.' },
    { type: 'mcq', q: 'Bào quan thực hiện quang hợp ở tế bào thực vật là:', options: ['Nhân', 'Lục lạp', 'Không bào', 'Màng tế bào'], answer: 1, explain: 'Lục lạp chứa diệp lục, thực hiện quang hợp.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tế bào vi khuẩn có nhân hoàn chỉnh với màng nhân.', answer: false, explain: 'Vi khuẩn là tế bào nhân sơ, chưa có màng nhân.' },
    { type: 'mcq', q: 'Thành phần có ở tế bào thực vật nhưng KHÔNG có ở tế bào động vật:', options: ['Màng tế bào', 'Tế bào chất', 'Thành tế bào', 'Nhân'], answer: 2, explain: 'Thành tế bào (cellulose) chỉ có ở tế bào thực vật (trong hai loại này).' },
    { type: 'mcq', q: 'Nơi diễn ra hầu hết các hoạt động sống của tế bào là:', options: ['Tế bào chất', 'Thành tế bào', 'Vùng nhân', 'Không bào'], answer: 0, explain: 'Tế bào chất chứa các bào quan, nơi diễn ra phần lớn hoạt động sống.' },
    { type: 'mcq', q: 'Hình dưới đây là sơ đồ loại tế bào nào?', svg: S.cell('nhan-so'), options: ['Tế bào động vật', 'Tế bào thực vật', 'Tế bào nhân sơ', 'Tế bào thần kinh'], answer: 2, explain: 'Có vùng nhân, không có màng nhân – tế bào nhân sơ.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nhân tế bào chứa vật chất di truyền và điều khiển hoạt động của tế bào.', answer: true, explain: 'Đó là chức năng của nhân.' },
    { type: 'short', q: 'Tế bào chưa có màng nhân gọi là tế bào nhân gì? (điền 1 tiếng)', answer: ['sơ', 'so', 'nhân sơ', 'nhan so'], answerText: 'sơ (tế bào nhân sơ)', explain: 'Tế bào nhân sơ, ví dụ vi khuẩn.' }
  ]
});
})();
