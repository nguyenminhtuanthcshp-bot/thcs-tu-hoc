/* KHTN 6 – Bài 50. Năng lượng tái tạo. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-6/bai-50', {
  objectives: [
    'Phân biệt được nguồn năng lượng tái tạo và nguồn năng lượng không tái tạo; lấy được ví dụ.',
    'Nêu được ưu điểm, hạn chế của một số nguồn năng lượng tái tạo (Mặt Trời, gió, nước, sinh khối, địa nhiệt).',
    'Kể được một số công trình năng lượng tái tạo ở Việt Nam.'
  ],
  intro: 'Than đá, dầu mỏ, khí đốt đang cạn dần và khi đốt gây ô nhiễm. Ngược lại, ánh nắng, gió, dòng nước gần như không bao giờ cạn. Đó là các nguồn <b>năng lượng tái tạo</b>.',
  steps: [
    { title: 'Năng lượng tái tạo và không tái tạo', html: `<table class="tbl"><tr><th></th><th>Năng lượng tái tạo</th><th>Năng lượng không tái tạo</th></tr>
      <tr><td>Đặc điểm</td><td>Có sẵn trong tự nhiên, được bổ sung liên tục, gần như vô tận</td><td>Có hạn, cần hàng triệu năm để hình thành, sẽ cạn kiệt</td></tr>
      <tr><td>Ví dụ</td><td>Mặt Trời, gió, nước (thuỷ điện, thuỷ triều), sinh khối, địa nhiệt</td><td>Than đá, dầu mỏ, khí tự nhiên (nhiên liệu hoá thạch)</td></tr>
      <tr><td>Môi trường</td><td>Ít gây ô nhiễm</td><td>Khi đốt thải nhiều khí carbon dioxide, khói bụi, gây ô nhiễm và biến đổi khí hậu</td></tr></table>` },
    { title: 'Các nguồn năng lượng tái tạo', html: `<ul><li><b>Năng lượng Mặt Trời</b>: pin mặt trời tạo điện; bình nước nóng năng lượng mặt trời; phơi sấy nông sản.</li>
      <li><b>Năng lượng gió</b>: tua-bin gió phát điện, thuyền buồm.</li><li><b>Năng lượng nước</b>: nhà máy thuỷ điện dùng dòng nước chảy từ hồ chứa.</li>
      <li><b>Năng lượng sinh khối</b>: từ củi, rơm rạ, bã mía, chất thải chăn nuôi (khí biogas).</li><li><b>Năng lượng địa nhiệt</b>: nhiệt từ lòng đất.</li></ul>`,
      svg: S.mindmap({ center: 'Năng lượng tái tạo', branches: [{ title: 'Mặt Trời', items: ['Pin mặt trời', 'Bình nước nóng'] }, { title: 'Gió', items: ['Tua-bin gió'] }, { title: 'Nước', items: ['Thuỷ điện', 'Thuỷ triều'] }, { title: 'Sinh khối', items: ['Biogas', 'Rơm, bã mía'] }, { title: 'Địa nhiệt', items: ['Nhiệt lòng đất'] }], w: 640 }),
      caption: 'Các nguồn năng lượng tái tạo.' },
    { title: 'Ưu điểm và hạn chế', html: `<table class="tbl"><tr><th>Nguồn</th><th>Ưu điểm</th><th>Hạn chế</th></tr>
      <tr><td>Mặt Trời</td><td>Vô tận, sạch, lắp được trên mái nhà</td><td>Phụ thuộc thời tiết, không có vào ban đêm</td></tr>
      <tr><td>Gió</td><td>Sạch, không tốn nhiên liệu</td><td>Phụ thuộc gió, có tiếng ồn, cần diện tích lớn</td></tr>
      <tr><td>Thuỷ điện</td><td>Sản lượng lớn, ổn định, hồ chứa điều tiết lũ</td><td>Ngập đất rừng, ảnh hưởng dòng chảy và sinh vật; phụ thuộc lượng mưa</td></tr>
      <tr><td>Sinh khối</td><td>Tận dụng chất thải, giảm ô nhiễm</td><td>Đốt vẫn tạo khói; sản lượng nhỏ</td></tr></table>` },
    { title: 'Năng lượng tái tạo ở Việt Nam', html: `<ul><li>Thuỷ điện: <b>Hoà Bình</b> (sông Đà), <b>Sơn La</b> – nhà máy thuỷ điện lớn nhất Đông Nam Á, Trị An, Yaly…</li>
      <li>Điện mặt trời: nhiều nhà máy ở <b>Ninh Thuận</b>, Bình Thuận, Tây Ninh – nơi nắng nhiều quanh năm.</li><li>Điện gió: các cánh đồng điện gió ven biển <b>Bạc Liêu</b>, Ninh Thuận, Sóc Trăng…</li>
      <li>Hầm biogas ở nhiều gia đình chăn nuôi nông thôn.</li></ul>` }
  ],
  summary: 'Năng lượng tái tạo (Mặt Trời, gió, nước, sinh khối, địa nhiệt) được bổ sung liên tục, gần như vô tận và ít ô nhiễm. Năng lượng không tái tạo (than, dầu, khí) có hạn, sẽ cạn kiệt và gây ô nhiễm khi đốt. Mỗi nguồn tái tạo có ưu điểm, hạn chế riêng. Việt Nam có thuỷ điện Hoà Bình, Sơn La; điện mặt trời Ninh Thuận; điện gió Bạc Liêu.',
  examples: [
    { title: 'Phân loại', problem: 'Xếp vào nhóm tái tạo hoặc không tái tạo: gió, than đá, ánh nắng, dầu mỏ, khí biogas.', solution: 'Tái tạo: <b>gió, ánh nắng, khí biogas</b>. Không tái tạo: <b>than đá, dầu mỏ</b>.' },
    { title: 'Chọn nguồn năng lượng', problem: 'Vì sao Ninh Thuận phát triển mạnh điện mặt trời và điện gió?', solution: 'Ninh Thuận có <b>nhiều nắng</b> quanh năm, ít mưa và có <b>gió mạnh</b> ven biển – điều kiện thuận lợi cho điện mặt trời và điện gió.' },
    { title: 'Hạn chế', problem: 'Nêu một hạn chế của điện mặt trời.', solution: 'Không tạo điện vào <b>ban đêm</b> và giảm mạnh khi trời nhiều mây, mưa.' }
  ],
  exercises: [
    { question: 'Vì sao than đá, dầu mỏ được gọi là năng lượng không tái tạo?', hints: ['Than, dầu hình thành từ đâu, mất bao lâu?', 'Tốc độ khai thác so với tốc độ hình thành?'], solution: 'Than, dầu hình thành từ xác sinh vật bị vùi lấp qua <b>hàng triệu năm</b>; con người khai thác nhanh hơn rất nhiều so với tốc độ hình thành nên chúng sẽ <b>cạn kiệt</b>, không thể bổ sung kịp.' },
    { question: 'Gia đình em ở nông thôn nuôi nhiều lợn. Có thể tận dụng nguồn năng lượng tái tạo nào? Lợi ích là gì?', hints: ['Chất thải chăn nuôi có thể ủ để tạo khí gì?', 'Khí đó dùng để làm gì?'], solution: 'Xây <b>hầm biogas</b>: ủ phân chuồng tạo khí sinh học dùng để đun nấu, thắp sáng. Lợi ích: tiết kiệm chi phí chất đốt, giảm mùi hôi, giảm ô nhiễm môi trường.' },
    { question: 'Nêu ưu điểm và hạn chế của nhà máy thuỷ điện.', hints: ['Nước có cạn không? Có thải khói không?', 'Xây hồ chứa ảnh hưởng gì đến rừng, dòng sông?'], solution: 'Ưu điểm: nguồn nước được bổ sung bởi mưa, không thải khói, sản lượng điện lớn, hồ chứa góp phần điều tiết lũ. Hạn chế: làm ngập đất, rừng; thay đổi dòng chảy, ảnh hưởng sinh vật; mùa khô ít nước thì giảm sản lượng.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Nguồn năng lượng nào là năng lượng tái tạo?', options: ['Năng lượng gió', 'Than đá', 'Dầu mỏ', 'Khí tự nhiên'], answer: 0, explain: 'Gió được bổ sung liên tục.' },
    { type: 'mcq', q: 'Nhà máy thuỷ điện Sơn La sử dụng nguồn năng lượng:', options: ['Nước', 'Gió', 'Mặt Trời', 'Than đá'], answer: 0, explain: 'Thuỷ điện dùng năng lượng của dòng nước.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Than đá là nguồn năng lượng tái tạo.', answer: false, explain: 'Than đá là nhiên liệu hoá thạch, không tái tạo.' },
    { type: 'mcq', q: 'Hạn chế của pin mặt trời là:', options: ['Không tạo điện vào ban đêm', 'Thải nhiều khói độc', 'Sẽ cạn kiệt nhanh', 'Cần đốt nhiên liệu'], answer: 0, explain: 'Cần ánh sáng Mặt Trời.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khí biogas từ chất thải chăn nuôi là năng lượng sinh khối.', answer: true, explain: 'Sinh khối gồm chất thải sinh vật.' },
    { type: 'mcq', q: 'Tỉnh nào nổi tiếng với các nhà máy điện mặt trời nhờ nắng nhiều?', options: ['Ninh Thuận', 'Lào Cai', 'Hà Giang', 'Cao Bằng'], answer: 0, explain: 'Ninh Thuận nắng nhiều, ít mưa.' },
    { type: 'mcq', q: 'Ưu điểm chung của năng lượng tái tạo là:', options: ['Gần như vô tận, ít gây ô nhiễm', 'Luôn rẻ và không phụ thuộc thời tiết', 'Sẽ sớm cạn kiệt', 'Thải nhiều khí carbon dioxide'], answer: 0, explain: 'Được bổ sung liên tục và sạch hơn.' },
    { type: 'short', q: 'Tua-bin gió biến năng lượng gió thành năng lượng gì? (điền 1 tiếng)', answer: ['điện', 'dien', 'điện năng'], answerText: 'điện', explain: 'Tua-bin gió phát điện.' }
  ]
});
})();
