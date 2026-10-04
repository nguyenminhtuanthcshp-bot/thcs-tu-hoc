/* KHTN 6 – Bài 38. Đa dạng sinh học. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-6/bai-38', {
  objectives: [
    'Nêu được khái niệm đa dạng sinh học và các biểu hiện của đa dạng sinh học.',
    'So sánh được sự đa dạng sinh học ở một số môi trường (rừng mưa nhiệt đới, hoang mạc, đại dương…).',
    'Nêu được vai trò của đa dạng sinh học, nguyên nhân suy giảm và các biện pháp bảo vệ.'
  ],
  intro: 'Việt Nam là một trong những nước có đa dạng sinh học cao trên thế giới, với nhiều loài quý hiếm như sao la, voọc mũi hếch, voọc Cát Bà. Đa dạng sinh học là gì và vì sao phải bảo vệ nó?',
  steps: [
    { title: 'Đa dạng sinh học là gì?', html: `<p><b>Đa dạng sinh học</b> là sự phong phú về <b>số lượng loài</b>, về <b>số cá thể</b> trong mỗi loài và về <b>môi trường sống</b> (hệ sinh thái) của sinh vật.</p>
      <p>Đa dạng sinh học được thể hiện qua: sự đa dạng loài, sự đa dạng nguồn gen trong mỗi loài và sự đa dạng các hệ sinh thái (rừng, biển, đồng cỏ, sông hồ…).</p>` },
    { title: 'Đa dạng sinh học ở các môi trường', html: `<table class="tbl"><tr><th>Môi trường</th><th>Đặc điểm</th><th>Mức đa dạng</th></tr>
      <tr><td>Rừng mưa nhiệt đới</td><td>Nóng ẩm quanh năm, nhiều tầng cây</td><td>Rất cao – nhiều loài nhất trên cạn</td></tr>
      <tr><td>Đại dương, rạn san hô</td><td>Rộng lớn, nhiều nơi ở</td><td>Rất cao</td></tr>
      <tr><td>Hoang mạc</td><td>Khô hạn, nóng ban ngày, lạnh ban đêm</td><td>Thấp; sinh vật có đặc điểm thích nghi (xương rồng lá biến thành gai, lạc đà chịu khát)</td></tr>
      <tr><td>Vùng cực</td><td>Rất lạnh</td><td>Thấp; gấu trắng, chim cánh cụt có lớp mỡ dày</td></tr></table>` },
    { title: 'Vai trò của đa dạng sinh học', html: `<ul><li><b>Với tự nhiên</b>: giữ cân bằng hệ sinh thái; các loài liên hệ với nhau qua chuỗi thức ăn; rừng điều hoà khí hậu, giữ đất, giữ nước.</li>
      <li><b>Với con người</b>: cung cấp lương thực, thực phẩm, dược liệu, gỗ, nguyên liệu; là nơi du lịch, nghỉ dưỡng; là nguồn gen quý để lai tạo giống mới.</li></ul>` },
    { title: 'Suy giảm và bảo vệ đa dạng sinh học', html: `<p><b>Nguyên nhân suy giảm</b>: phá rừng, đốt rừng làm nương rẫy; săn bắt, buôn bán động vật hoang dã; khai thác quá mức; ô nhiễm môi trường; biến đổi khí hậu; loài ngoại lai xâm hại (như ốc bươu vàng).</p>
      <p><b>Biện pháp bảo vệ</b>: cấm săn bắt, buôn bán động vật hoang dã; xây dựng <b>vườn quốc gia, khu bảo tồn</b> (Cúc Phương – vườn quốc gia đầu tiên của Việt Nam, thành lập năm 1962; Cát Tiên, Phong Nha – Kẻ Bàng…); trồng và bảo vệ rừng; giảm ô nhiễm; tuyên truyền nâng cao ý thức.</p>`,
      svg: S.mindmap({ center: 'Bảo vệ đa dạng sinh học', branches: [{ title: 'Pháp luật', items: ['Cấm săn bắt', 'Cấm buôn bán động vật hoang dã'] }, { title: 'Bảo tồn', items: ['Vườn quốc gia', 'Khu bảo tồn'] }, { title: 'Hành động', items: ['Trồng rừng', 'Giảm rác thải, ô nhiễm'] }, { title: 'Giáo dục', items: ['Tuyên truyền', 'Không dùng sản phẩm từ động vật quý hiếm'] }], w: 620 }),
      caption: 'Các nhóm biện pháp bảo vệ đa dạng sinh học.' }
  ],
  summary: 'Đa dạng sinh học là sự phong phú về số loài, số cá thể trong loài và môi trường sống. Rừng mưa nhiệt đới, rạn san hô có đa dạng sinh học cao; hoang mạc, vùng cực thấp. Đa dạng sinh học giữ cân bằng tự nhiên và cung cấp nhiều lợi ích cho con người. Cần bảo vệ bằng cách cấm săn bắt, lập khu bảo tồn, trồng rừng, giảm ô nhiễm.',
  examples: [
    { title: 'So sánh', problem: 'Vì sao rừng mưa nhiệt đới có nhiều loài hơn hoang mạc?', solution: 'Rừng mưa nhiệt đới <b>nóng ẩm quanh năm</b>, nhiều ánh sáng, nước, nhiều tầng cây tạo nhiều nơi ở và thức ăn. Hoang mạc khô hạn, khắc nghiệt nên chỉ ít loài thích nghi được.' },
    { title: 'Thích nghi', problem: 'Lá cây xương rồng biến thành gai có lợi gì khi sống ở hoang mạc?', solution: 'Giảm <b>thoát hơi nước</b>, giúp cây giữ nước; gai còn chống động vật ăn cây.' },
    { title: 'Vườn quốc gia', problem: 'Vườn quốc gia đầu tiên của Việt Nam là vườn nào, thành lập năm nào?', solution: 'Vườn quốc gia <b>Cúc Phương</b>, thành lập năm <b>1962</b>.' }
  ],
  exercises: [
    { question: 'Nêu ba nguyên nhân làm suy giảm đa dạng sinh học.', hints: ['Nghĩ về rừng.', 'Nghĩ về săn bắt và ô nhiễm.'], solution: 'Phá rừng, đốt rừng; săn bắt, buôn bán động vật hoang dã; ô nhiễm môi trường (hoặc: biến đổi khí hậu, loài ngoại lai xâm hại).' },
    { question: 'Vì sao khi một loài bị mất đi có thể ảnh hưởng tới nhiều loài khác?', hints: ['Các loài liên hệ với nhau như thế nào?', 'Nghĩ về chuỗi thức ăn.'], solution: 'Các loài liên hệ qua <b>chuỗi thức ăn</b> và nơi ở. Một loài mất đi thì loài ăn nó thiếu thức ăn, loài bị nó ăn có thể tăng quá mức… làm mất cân bằng cả hệ sinh thái.' },
    { question: 'Là học sinh, em có thể làm gì để góp phần bảo vệ đa dạng sinh học?', hints: ['Việc nhỏ hằng ngày.', 'Nói với người khác.'], solution: 'Không bắt chim, không mua bán động vật hoang dã và sản phẩm từ chúng; trồng, chăm sóc cây; phân loại, giảm rác thải nhựa; tuyên truyền cho gia đình, bạn bè.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Đa dạng sinh học là sự phong phú về:', options: ['Số loài, số cá thể trong loài và môi trường sống', 'Chỉ số lượng cây xanh', 'Chỉ số lượng động vật nuôi', 'Số nhà máy'], answer: 0, explain: 'Định nghĩa đa dạng sinh học.' },
    { type: 'mcq', q: 'Môi trường có đa dạng sinh học cao nhất trên cạn là:', options: ['Rừng mưa nhiệt đới', 'Hoang mạc', 'Vùng cực', 'Núi đá trọc'], answer: 0, explain: 'Nóng ẩm, nhiều tầng cây, nhiều loài.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Phá rừng là một nguyên nhân làm suy giảm đa dạng sinh học.', answer: true, explain: 'Mất rừng là mất nơi ở của nhiều loài.' },
    { type: 'short', q: 'Vườn quốc gia Cúc Phương – vườn quốc gia đầu tiên của Việt Nam – được thành lập năm nào?', answer: '1962', explain: 'Năm 1962.' },
    { type: 'mcq', q: 'Lá xương rồng biến thành gai giúp cây:', options: ['Giảm thoát hơi nước', 'Quang hợp mạnh hơn', 'Hút nhiều nước hơn', 'Mọc nhanh hơn'], answer: 0, explain: 'Thích nghi với môi trường khô hạn.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mua bán động vật hoang dã quý hiếm giúp bảo vệ chúng.', answer: false, explain: 'Buôn bán thúc đẩy săn bắt, làm suy giảm loài.' },
    { type: 'mcq', q: 'Biện pháp nào giúp bảo vệ đa dạng sinh học?', options: ['Xây dựng khu bảo tồn thiên nhiên', 'Đốt rừng làm rẫy', 'Săn bắt tự do', 'Thải rác xuống sông'], answer: 0, explain: 'Khu bảo tồn giữ nơi ở cho các loài.' },
    { type: 'mcq', q: 'Loài ngoại lai xâm hại gây thiệt hại lớn cho lúa ở Việt Nam là:', options: ['Ốc bươu vàng', 'Trâu', 'Cá chép', 'Chim sẻ'], answer: 0, explain: 'Ốc bươu vàng du nhập, phá hại lúa non.' }
  ]
});
})();
