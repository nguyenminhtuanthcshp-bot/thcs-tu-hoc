/* KHTN 7 – Bài 25. Hô hấp tế bào. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-7/bai-25', {
  objectives: [
    'Mô tả được một cách tổng quát quá trình hô hấp ở tế bào (ở thực vật và động vật): nguyên liệu, sản phẩm, nơi diễn ra.',
    'Viết được phương trình hô hấp dạng chữ.',
    'Thể hiện được hai chiều tổng hợp và phân giải; nêu được mối quan hệ giữa quang hợp và hô hấp.'
  ],
  intro: 'Sau khi chạy một vòng sân, em thở nhanh và thấy người nóng lên. Oxygen hít vào đã đi đến đâu và năng lượng giúp em chạy được lấy từ đâu?',
  steps: [
    { title: 'Khái niệm hô hấp tế bào', html: `<p><b>Hô hấp tế bào</b> là quá trình tế bào <b>phân giải chất hữu cơ</b> (chủ yếu là glucose) nhờ oxygen, tạo ra khí carbon dioxide, nước và giải phóng <b>năng lượng</b> cung cấp cho các hoạt động sống của cơ thể.</p>
      <div class="box key">Glucose + Oxygen → Carbon dioxide + Nước + Năng lượng (ATP + nhiệt)</div>
      <p>Viết bằng công thức: C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub> → 6CO<sub>2</sub> + 6H<sub>2</sub>O + năng lượng.</p>`,
      svg: S.respirationScheme(), caption: 'Hô hấp tế bào diễn ra chủ yếu ở ti thể.' },
    { title: 'Nơi diễn ra và vai trò', html: `<ul><li>Hô hấp tế bào diễn ra ở <b>mọi tế bào sống</b> của cả thực vật và động vật, chủ yếu trong <b>ti thể</b>.</li><li>Năng lượng giải phóng một phần được tích luỹ trong phân tử <b>ATP</b> (dạng năng lượng tế bào dùng trực tiếp), phần còn lại toả ra dưới dạng nhiệt.</li><li>Vai trò: cung cấp năng lượng cho tế bào và cơ thể hoạt động (co cơ, vận chuyển chất, sinh trưởng…); ở động vật hằng nhiệt, nhiệt toả ra giúp giữ ổn định thân nhiệt.</li></ul>` },
    { title: 'Hai chiều tổng hợp và phân giải', html: `<p>Trong cơ thể luôn diễn ra đồng thời hai chiều ngược nhau nhưng thống nhất:</p>
      <table class="tbl"><tr><th></th><th>Tổng hợp (ví dụ: quang hợp)</th><th>Phân giải (ví dụ: hô hấp tế bào)</th></tr>
      <tr><td>Chất</td><td>Chất đơn giản → chất hữu cơ phức tạp</td><td>Chất hữu cơ → chất đơn giản</td></tr>
      <tr><td>Năng lượng</td><td>Tích luỹ năng lượng</td><td>Giải phóng năng lượng</td></tr></table>` },
    { title: 'Mối quan hệ giữa quang hợp và hô hấp', html: `<table class="tbl"><tr><th>Đặc điểm</th><th>Quang hợp</th><th>Hô hấp tế bào</th></tr>
      <tr><td>Nơi diễn ra</td><td>Lục lạp (tế bào có diệp lục)</td><td>Ti thể (mọi tế bào sống)</td></tr>
      <tr><td>Nguyên liệu</td><td>Nước, carbon dioxide</td><td>Glucose, oxygen</td></tr>
      <tr><td>Sản phẩm</td><td>Glucose, oxygen</td><td>Carbon dioxide, nước, năng lượng</td></tr>
      <tr><td>Điều kiện</td><td>Cần ánh sáng</td><td>Diễn ra cả ngày lẫn đêm</td></tr></table>
      <p>Sản phẩm của quá trình này là nguyên liệu của quá trình kia: quang hợp tạo chất hữu cơ và oxygen cho hô hấp; hô hấp tạo carbon dioxide, nước và năng lượng cho cơ thể hoạt động.</p>` }
  ],
  summary: 'Hô hấp tế bào: glucose + oxygen → carbon dioxide + nước + năng lượng (ATP + nhiệt); diễn ra chủ yếu ở ti thể của mọi tế bào sống, cả ngày lẫn đêm. Quang hợp tổng hợp và tích luỹ năng lượng; hô hấp phân giải và giải phóng năng lượng; hai quá trình liên quan chặt chẽ với nhau.',
  examples: [
    { title: 'Xác định nguyên liệu, sản phẩm', problem: 'Nêu nguyên liệu và sản phẩm của hô hấp tế bào.', solution: 'Nguyên liệu: glucose, oxygen. Sản phẩm: carbon dioxide, nước và năng lượng (ATP, nhiệt).' },
    { title: 'Đếm phân tử theo phương trình', problem: 'Theo phương trình C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O, phân giải hoàn toàn 2 phân tử glucose cần bao nhiêu phân tử oxygen và tạo ra bao nhiêu phân tử carbon dioxide?', solution: 'Cần 2 · 6 = 12 phân tử oxygen; tạo ra 2 · 6 = 12 phân tử carbon dioxide.' },
    { title: 'Giải thích hiện tượng', problem: 'Vì sao khi vận động mạnh, cơ thể thở nhanh và nóng lên?', solution: 'Cơ cần nhiều năng lượng nên hô hấp tế bào tăng: cần nhiều oxygen hơn (thở nhanh để lấy oxygen, thải carbon dioxide) và toả nhiều nhiệt hơn (người nóng lên).' }
  ],
  exercises: [
    { question: 'Vì sao nói quang hợp và hô hấp là hai quá trình trái ngược nhưng liên quan chặt chẽ?', hints: ['So sánh nguyên liệu và sản phẩm của hai quá trình.', 'So sánh chiều biến đổi năng lượng.'], solution: 'Trái ngược: quang hợp tổng hợp chất hữu cơ, tích luỹ năng lượng; hô hấp phân giải chất hữu cơ, giải phóng năng lượng. Liên quan: sản phẩm của quá trình này là nguyên liệu của quá trình kia.' },
    { question: 'Cây xanh có hô hấp vào ban đêm không? Vì sao không nên để nhiều cây xanh trong phòng ngủ đóng kín cửa?', hints: ['Hô hấp có cần ánh sáng không?', 'Ban đêm cây có quang hợp không?'], solution: 'Có, cây hô hấp cả ngày lẫn đêm. Ban đêm cây không quang hợp mà vẫn hô hấp, lấy oxygen và thải carbon dioxide, trong phòng kín sẽ làm không khí thiếu oxygen.' },
    { question: 'Trong một ngày, một tế bào cơ phân giải 3 000 phân tử glucose. Theo phương trình hô hấp, tế bào tạo ra bao nhiêu phân tử carbon dioxide?', hints: ['Mỗi phân tử glucose tạo ra 6 phân tử CO₂.', 'Nhân 3 000 với 6.'], solution: '3 000 · 6 = 18 000 phân tử carbon dioxide.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hô hấp tế bào diễn ra chủ yếu ở ti thể.', answer: true, explain: 'Ti thể là “nhà máy năng lượng” của tế bào.' },
    { type: 'mcq', q: 'Sản phẩm của hô hấp tế bào là:', options: ['glucose và oxygen', 'carbon dioxide, nước và năng lượng', 'tinh bột và nước', 'oxygen và năng lượng'], answer: 1, explain: 'Glucose bị phân giải thành carbon dioxide và nước.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Thực vật chỉ hô hấp vào ban đêm.', answer: false, explain: 'Thực vật hô hấp cả ngày lẫn đêm.' },
    { type: 'mcq', q: 'Năng lượng giải phóng từ hô hấp được tích luỹ trực tiếp cho tế bào sử dụng ở dạng:', options: ['ATP', 'tinh bột', 'diệp lục', 'muối khoáng'], answer: 0, explain: 'Phần còn lại toả ra dạng nhiệt.' },
    { type: 'short', q: 'Theo phương trình hô hấp, phân giải hoàn toàn 2 phân tử glucose cần bao nhiêu phân tử oxygen?', answer: '12', unit: 'phân tử', calc: '2*6', explain: '2 · 6 = 12.' },
    { type: 'short', q: 'Trong phương trình C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O, vế phải có tổng cộng bao nhiêu phân tử?', answer: '12', unit: 'phân tử', calc: '6+6', explain: '6 CO₂ + 6 H₂O = 12 phân tử.' },
    { type: 'mcq', q: 'Điểm KHÁC nhau giữa quang hợp và hô hấp là:', options: ['Quang hợp cần ánh sáng, hô hấp diễn ra cả ngày lẫn đêm', 'Cả hai đều giải phóng năng lượng', 'Cả hai đều diễn ra ở ti thể', 'Cả hai đều thải oxygen'], answer: 0, explain: 'Hô hấp không cần ánh sáng.' },
    { type: 'short', q: 'Tế bào phân giải 3 000 phân tử glucose. Số phân tử carbon dioxide tạo ra là bao nhiêu?', answer: '18000', unit: 'phân tử', calc: '3000*6', explain: '3 000 · 6 = 18 000.' }
  ]
});
})();
