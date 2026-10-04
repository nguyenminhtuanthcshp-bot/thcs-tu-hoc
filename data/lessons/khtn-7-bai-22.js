/* KHTN 7 – Bài 22. Quang hợp ở thực vật. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-7/bai-22', {
  objectives: [
    'Mô tả được một cách tổng quát quá trình quang hợp ở tế bào lá cây: nguyên liệu, sản phẩm, nơi diễn ra.',
    'Viết được phương trình quang hợp dạng chữ.',
    'Nêu được vai trò của lá cây với chức năng quang hợp.',
    'Vẽ được sơ đồ diễn tả quang hợp diễn ra ở lá cây và nêu được quan hệ giữa trao đổi chất và chuyển hoá năng lượng.'
  ],
  intro: 'Một hạt đậu nặng chưa đến 1 g có thể mọc thành cây nặng hàng trăm gam. Phần lớn khối lượng ấy không lấy từ đất, mà được cây “chế tạo” từ không khí, nước và ánh sáng.',
  steps: [
    { title: 'Khái niệm quang hợp', html: `<p><b>Quang hợp</b> là quá trình lá cây sử dụng nước và khí carbon dioxide nhờ năng lượng ánh sáng đã được diệp lục hấp thụ để tổng hợp chất hữu cơ (glucose) và giải phóng khí oxygen.</p>
      <div class="box key">Nước + Carbon dioxide <b>—(ánh sáng, diệp lục)→</b> Glucose + Oxygen</div>
      <p>Viết bằng công thức hoá học: 6CO<sub>2</sub> + 6H<sub>2</sub>O → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub>.</p>`,
      svg: S.photosynthesisScheme(), caption: 'Sơ đồ quang hợp ở lá: nguyên liệu, điều kiện và sản phẩm.' },
    { title: 'Nguyên liệu, sản phẩm và nơi diễn ra', html: `<table class="tbl"><tr><th>Thành phần</th><th>Nội dung</th></tr>
      <tr><td>Nguyên liệu</td><td>Nước (rễ hút từ đất, vận chuyển lên lá theo mạch gỗ); carbon dioxide (từ không khí, vào lá qua khí khổng)</td></tr>
      <tr><td>Điều kiện</td><td>Ánh sáng, diệp lục</td></tr>
      <tr><td>Sản phẩm</td><td>Glucose (sau đó có thể chuyển thành tinh bột); oxygen (thải ra ngoài qua khí khổng)</td></tr>
      <tr><td>Nơi diễn ra</td><td>Chủ yếu ở lá, trong <b>lục lạp</b> của tế bào thịt lá</td></tr></table>` },
    { title: 'Lá cây – cơ quan quang hợp', html: `<p>Lá có nhiều đặc điểm phù hợp với chức năng quang hợp:</p>
      <ul><li><b>Phiến lá</b> dạng bản mỏng, diện tích lớn để nhận nhiều ánh sáng.</li><li><b>Gân lá</b> chứa mạch dẫn, vận chuyển nước đến lá và đưa chất hữu cơ đi khỏi lá.</li><li>Tế bào thịt lá có nhiều <b>lục lạp</b> chứa diệp lục hấp thụ ánh sáng.</li><li><b>Khí khổng</b> (thường nhiều ở mặt dưới lá) là nơi khí carbon dioxide đi vào và oxygen, hơi nước đi ra.</li></ul>`,
      svg: S.stomataPair(), caption: 'Khí khổng mở cho khí carbon dioxide vào lá và oxygen, hơi nước ra ngoài.' },
    { title: 'Quan hệ trao đổi chất – chuyển hoá năng lượng trong quang hợp', html: `<p>Trong quang hợp, hai quá trình diễn ra đồng thời:</p>
      <ul><li><b>Trao đổi chất</b>: lấy nước, carbon dioxide; tổng hợp glucose; thải oxygen.</li><li><b>Chuyển hoá năng lượng</b>: quang năng → hoá năng tích luỹ trong glucose.</li></ul>
      <p>Vai trò: tạo chất hữu cơ nuôi cây và làm thức ăn cho sinh vật khác; cung cấp oxygen cho hô hấp; góp phần điều hoà lượng khí carbon dioxide trong không khí.</p>` }
  ],
  summary: 'Quang hợp: nước + carbon dioxide —(ánh sáng, diệp lục)→ glucose + oxygen; diễn ra chủ yếu ở lục lạp tế bào thịt lá. Lá có phiến rộng, mỏng, nhiều lục lạp, gân dẫn và khí khổng phù hợp với quang hợp. Quang năng được chuyển thành hoá năng trong chất hữu cơ.',
  examples: [
    { title: 'Xác định nguồn gốc nguyên liệu', problem: 'Nước và carbon dioxide dùng cho quang hợp được lá lấy từ đâu và bằng con đường nào?', solution: 'Nước: rễ hút từ đất, vận chuyển theo mạch gỗ của thân lên lá. Carbon dioxide: từ không khí, khuếch tán vào lá qua khí khổng.' },
    { title: 'Tính khối lượng phân tử glucose', problem: 'Tính khối lượng phân tử glucose C₆H₁₂O₆ (C = 12, H = 1, O = 16 amu).', solution: '6 · 12 + 12 · 1 + 6 · 16 = 72 + 12 + 96 = 180 amu.' },
    { title: 'Giải thích hiện tượng', problem: 'Vì sao trồng cây xanh quanh nhà, trường học giúp không khí trong lành hơn?', solution: 'Cây quang hợp hấp thụ khí carbon dioxide và thải khí oxygen; ngoài ra lá cây còn giữ bụi, tạo bóng mát.' }
  ],
  exercises: [
    { question: 'Viết phương trình quang hợp dạng chữ và chỉ rõ nguyên liệu, sản phẩm, điều kiện.', hints: ['Nguyên liệu viết bên trái mũi tên.', 'Điều kiện ghi trên mũi tên.'], solution: 'Nước + Carbon dioxide —(ánh sáng, diệp lục)→ Glucose + Oxygen. Nguyên liệu: nước, carbon dioxide; sản phẩm: glucose, oxygen; điều kiện: ánh sáng, diệp lục.' },
    { question: 'Trong phương trình 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂, hãy đếm số nguyên tử oxygen ở mỗi vế.', hints: ['Vế trái: 6 · 2 + 6 · 1.', 'Vế phải: 6 + 6 · 2.'], solution: 'Vế trái: 12 + 6 = 18; vế phải: 6 + 12 = 18. Số nguyên tử oxygen bằng nhau ở hai vế.' },
    { question: 'Vì sao lá cây thường có màu xanh và mặt trên xanh đậm hơn mặt dưới?', hints: ['Chất nào tạo màu xanh?', 'Mặt nào nhận nhiều ánh sáng hơn?'], solution: 'Lá chứa nhiều diệp lục có màu xanh lục. Mặt trên nhận nhiều ánh sáng nên tế bào thịt lá phía trên có nhiều lục lạp hơn, màu xanh đậm hơn.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Quang hợp tạo ra glucose và giải phóng khí oxygen.', answer: true, explain: 'Sản phẩm của quang hợp là glucose và oxygen.' },
    { type: 'mcq', q: 'Bào quan thực hiện quang hợp là:', options: ['ti thể', 'lục lạp', 'nhân tế bào', 'không bào'], answer: 1, explain: 'Lục lạp chứa diệp lục.' },
    { type: 'mcq', q: 'Khí carbon dioxide đi vào lá qua:', options: ['lông hút', 'khí khổng', 'mạch rây', 'gân lá'], answer: 1, explain: 'Khí khổng là nơi trao đổi khí.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Cây xanh có thể quang hợp trong bóng tối hoàn toàn.', answer: false, explain: 'Quang hợp cần ánh sáng.' },
    { type: 'short', q: 'Tính khối lượng phân tử glucose C₆H₁₂O₆ (C = 12, H = 1, O = 16) theo amu.', answer: '180', unit: 'amu', calc: '6*12+12*1+6*16', explain: '72 + 12 + 96 = 180 amu.' },
    { type: 'mcq', q: 'Trong quang hợp, năng lượng ánh sáng được chuyển thành:', options: ['nhiệt năng', 'hoá năng trong chất hữu cơ', 'cơ năng', 'điện năng'], answer: 1, explain: 'Tích luỹ trong glucose.' },
    { type: 'short', q: 'Trong phương trình 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂, vế trái có bao nhiêu nguyên tử oxygen?', answer: '18', unit: 'nguyên tử', calc: '6*2+6*1', explain: '12 + 6 = 18.' },
    { type: 'short', q: 'Để tạo ra 1 phân tử glucose, cây cần bao nhiêu phân tử CO₂ và H₂O tổng cộng (theo phương trình 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂)?', answer: '12', unit: 'phân tử', calc: '6+6', explain: '6 + 6 = 12 phân tử.' }
  ]
});
})();
