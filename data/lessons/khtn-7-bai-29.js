/* KHTN 7 – Bài 29. Vai trò của nước và các chất dinh dưỡng đối với sinh vật. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
var wbar = S.bar({ title: 'Hàm lượng nước trong một số cơ thể, cơ quan (khoảng, %)', cats: ['Sứa', 'Rau xà lách', 'Cơ thể người', 'Hạt lúa khô'], series: [{ name: 'Nước', values: [95, 95, 65, 13], color: '#0284c7' }], yMax: 100, yStep: 20, width: 580, height: 300 });
THCS.registerLesson('khtn-7/bai-29', {
  objectives: [
    'Nêu được thành phần hoá học và cấu trúc, tính chất của nước.',
    'Trình bày được vai trò của nước đối với sinh vật.',
    'Nêu được vai trò của các chất dinh dưỡng đối với cơ thể sinh vật.'
  ],
  intro: 'Một người có thể nhịn ăn vài tuần nhưng chỉ nhịn uống được vài ngày. Vì sao nước lại quan trọng đến vậy?',
  steps: [
    { title: 'Cấu trúc và tính chất của nước', html: `<p>Phân tử nước (H<sub>2</sub>O) gồm <b>1 nguyên tử oxygen</b> liên kết với <b>2 nguyên tử hydrogen</b> bằng liên kết cộng hoá trị. Cặp electron dùng chung lệch về phía oxygen nên phân tử nước có hai đầu tích điện trái dấu: đầu oxygen mang một phần điện tích âm, đầu hydrogen mang một phần điện tích dương – nước là <b>phân tử phân cực</b>.</p>
      <p>Nhờ tính phân cực, nước có thể <b>hoà tan nhiều chất</b> (muối, đường…), là dung môi tốt trong tế bào.</p>`,
      svg: S.moleculeModel('H2O', { title: 'Phân tử nước H₂O' }), caption: 'Mô hình phân tử nước: 1 nguyên tử O liên kết với 2 nguyên tử H.' },
    { title: 'Vai trò của nước đối với sinh vật', html: `<ul><li><b>Thành phần cấu tạo</b> chủ yếu của tế bào và cơ thể.</li><li><b>Dung môi</b> hoà tan và môi trường cho các phản ứng hoá học trong tế bào.</li><li><b>Vận chuyển các chất</b>: máu, dịch mạch gỗ, mạch rây chủ yếu là nước.</li><li><b>Nguyên liệu</b> của một số quá trình (ví dụ quang hợp).</li><li><b>Điều hoà thân nhiệt</b>: thoát hơi nước ở lá, tiết mồ hôi ở người giúp làm mát cơ thể.</li></ul>`,
      svg: wbar, caption: 'Số liệu tham khảo: nước chiếm tỉ lệ lớn trong hầu hết cơ thể sống; hạt khô chứa ít nước.' },
    { title: 'Các chất dinh dưỡng và vai trò', html: `<p><b>Chất dinh dưỡng</b> là những chất có trong thức ăn mà cơ thể hấp thụ được, dùng để cung cấp nguyên liệu cấu tạo tế bào và năng lượng.</p>
      <table class="tbl"><tr><th>Chất dinh dưỡng</th><th>Vai trò chính</th><th>Nguồn thực phẩm</th></tr>
      <tr><td>Carbohydrate (tinh bột, đường)</td><td>Cung cấp năng lượng chủ yếu</td><td>Gạo, ngô, khoai</td></tr>
      <tr><td>Protein (chất đạm)</td><td>Cấu tạo tế bào, xây dựng cơ thể</td><td>Thịt, cá, trứng, đậu</td></tr>
      <tr><td>Lipid (chất béo)</td><td>Dự trữ năng lượng, cấu tạo màng tế bào</td><td>Dầu, mỡ, lạc, vừng</td></tr>
      <tr><td>Vitamin, chất khoáng</td><td>Tham gia điều hoà hoạt động của cơ thể</td><td>Rau, quả, sữa</td></tr></table>
      <p>Thực vật lấy nước và muối khoáng từ đất, tự tổng hợp chất hữu cơ nhờ quang hợp; động vật lấy chất dinh dưỡng từ thức ăn.</p>` },
    { title: 'Ăn uống hợp lí', html: `<div class="box key">Cần ăn đủ và cân đối các nhóm chất, uống đủ nước (người trưởng thành khoảng 1,5 – 2 lít nước mỗi ngày, nhiều hơn khi trời nóng hoặc vận động mạnh).</div>` }
  ],
  summary: 'Phân tử nước gồm 1 O và 2 H, là phân tử phân cực nên hoà tan được nhiều chất. Nước là thành phần cấu tạo, dung môi, môi trường phản ứng, phương tiện vận chuyển, nguyên liệu và điều hoà thân nhiệt. Chất dinh dưỡng (carbohydrate, protein, lipid, vitamin, chất khoáng) cung cấp nguyên liệu cấu tạo và năng lượng cho cơ thể.',
  examples: [
    { title: 'Tính khối lượng nước trong cơ thể', problem: 'Nước chiếm khoảng 65% khối lượng cơ thể người. Một bạn nặng 40 kg có khoảng bao nhiêu kg nước?', solution: '40 · 65 : 100 = 26 kg.' },
    { title: 'Tính khối lượng phân tử nước', problem: 'Tính khối lượng phân tử H₂O (H = 1, O = 16 amu).', solution: '2 · 1 + 16 = 18 amu.' },
    { title: 'Giải thích vai trò điều hoà nhiệt', problem: 'Vì sao khi trời nóng hoặc chạy nhiều, cơ thể đổ mồ hôi?', solution: 'Mồ hôi bay hơi lấy nhiệt từ cơ thể, giúp hạ nhiệt độ cơ thể, giữ thân nhiệt ổn định.' }
  ],
  exercises: [
    { question: 'Vì sao nước hoà tan được nhiều chất?', hints: ['Nhớ lại cấu trúc phân tử nước.', 'Hai đầu phân tử mang điện thế nào?'], solution: 'Phân tử nước phân cực (đầu O hơi âm, đầu H hơi dương) nên hút được các phân tử, ion khác, làm chúng tách ra và phân tán vào nước.' },
    { question: 'Kể tên các nhóm chất dinh dưỡng trong bữa cơm gồm: cơm, cá kho, canh rau, dầu ăn.', hints: ['Cơm giàu chất nào?', 'Cá và dầu ăn giàu chất nào?'], solution: 'Cơm: carbohydrate; cá: protein (và lipid); rau: vitamin, chất khoáng, chất xơ; dầu ăn: lipid.' },
    { question: 'Mỗi ngày bạn Hoa uống 8 cốc nước, mỗi cốc 250 mL. Bạn uống bao nhiêu lít nước mỗi ngày?', hints: ['Tổng mL = 8 · 250.', '1 L = 1 000 mL.'], solution: '8 · 250 = 2 000 mL = 2 L.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Phân tử nước là phân tử phân cực.', answer: true, explain: 'Đầu O hơi âm, đầu H hơi dương.' },
    { type: 'mcq', q: 'Một phân tử nước gồm:', options: ['1 H và 2 O', '2 H và 1 O', '2 H và 2 O', '1 H và 1 O'], answer: 1, explain: 'Công thức H₂O.' },
    { type: 'mcq', q: 'Chất dinh dưỡng cung cấp năng lượng chủ yếu cho cơ thể là:', options: ['carbohydrate', 'vitamin', 'chất khoáng', 'nước'], answer: 0, explain: 'Tinh bột, đường.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nước không tham gia vận chuyển các chất trong cơ thể sinh vật.', answer: false, explain: 'Máu, dịch mạch gỗ, mạch rây chủ yếu là nước.' },
    { type: 'short', q: 'Nước chiếm 65% khối lượng cơ thể. Bạn nặng 40 kg có bao nhiêu kg nước?', answer: '26', unit: 'kg', calc: '40*65/100', explain: '40 · 0,65 = 26 kg.' },
    { type: 'short', q: 'Tính khối lượng phân tử H₂O (H = 1, O = 16) theo amu.', answer: '18', unit: 'amu', calc: '2*1+16', explain: '2 + 16 = 18 amu.' },
    { type: 'mcq', q: 'Protein có vai trò chính là:', options: ['cấu tạo tế bào, xây dựng cơ thể', 'hoà tan các chất', 'tạo màu xanh cho lá', 'dự trữ nước'], answer: 0, explain: 'Protein là chất đạm.' },
    { type: 'short', q: 'Uống 8 cốc nước, mỗi cốc 250 mL. Tổng lượng nước là bao nhiêu lít?', answer: '2', unit: 'L', calc: '8*250/1000', explain: '2 000 mL = 2 L.' }
  ]
});
})();
