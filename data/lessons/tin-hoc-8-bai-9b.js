/* Tin học 8 – Bài 9b. Thay đổi khung hình, kích thước ảnh. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-8/bai-9b', {
  objectives: [
    'Cắt được ảnh (crop) để giữ phần cần thiết; xoay, lật được ảnh.',
    'Thay đổi được kích thước ảnh (scale) có giữ tỉ lệ; tính được kích thước mới.',
    'Phân biệt được cắt ảnh và thu nhỏ ảnh.'
  ],
  intro: 'Ảnh chụp có quá nhiều khoảng trời trống, lại nghiêng một chút, dung lượng thì quá lớn để gửi. Ba thao tác <b>cắt – xoay – đổi kích thước</b> sẽ giải quyết tất cả.',
  steps: [
    { title: 'Cắt ảnh (Crop)', html: `<p>Công cụ <b>Crop</b>: kéo chọn vùng muốn giữ, nhấn Enter. Phần bên ngoài bị loại bỏ. Có thể cố định tỉ lệ khung (ví dụ 1:1, 16:9) trong tuỳ chọn công cụ.</p>`,
      svg: S.cropBox({ title: 'Cắt giữ lại phần núi và mặt trời', w: 1200, h: 800, crop: [300, 100, 800, 600], note: 'Ảnh gốc 1 200 × 800; sau khi cắt còn 800 × 600 điểm ảnh' }), caption: 'Cắt ảnh làm giảm khung hình, giữ nguyên độ chi tiết vùng còn lại.' },
    { title: 'Xoay và lật ảnh', html: `<p><b>Image → Transform</b>: xoay 90° theo/ngược chiều kim đồng hồ, xoay 180°, lật ngang, lật dọc. Công cụ <b>Rotate</b> cho phép xoay góc tuỳ ý để chỉnh ảnh bị nghiêng.</p>` },
    { title: 'Thay đổi kích thước (Scale)', html: `<p><b>Image → Scale Image</b>: nhập chiều rộng mới; giữ biểu tượng xích nối để chiều cao tự tính theo <b>cùng tỉ lệ</b>, ảnh không bị méo.</p>
      <p>Chiều cao mới = chiều cao cũ × (rộng mới : rộng cũ).</p>`,
      svg: S.table({ title: 'Thu nhỏ ảnh 4 000 × 3 000 giữ tỉ lệ', head: ['Chiều rộng mới', 'Chiều cao mới', 'Số điểm ảnh'], rows: [['4 000', '3 000', '12 000 000'], ['2 000', '1 500', '3 000 000'], ['1 000', '750', '750 000']], colW: 170 }), caption: 'Rộng giảm một nửa thì số điểm ảnh giảm còn 1/4.' },
    { title: 'Cắt khác thu nhỏ thế nào?', html: `<ul><li><b>Cắt</b>: bỏ bớt một phần khung hình, phần còn lại giữ nguyên chi tiết.</li><li><b>Thu nhỏ</b>: giữ toàn bộ khung hình nhưng giảm số điểm ảnh, ảnh kém chi tiết hơn.</li><li>Phóng to quá nhiều làm ảnh bị nhoè, vỡ hạt.</li></ul>
      <div class="box key">Giữ tỉ lệ: cao mới = cao cũ × rộng mới : rộng cũ.</div>` }
  ],
  summary: 'Crop cắt bỏ phần ngoài vùng chọn; Transform/Rotate xoay, lật ảnh; Scale Image đổi kích thước, giữ tỉ lệ để không méo (cao mới = cao cũ × rộng mới : rộng cũ). Cắt giữ chi tiết phần còn lại; thu nhỏ giữ khung hình nhưng giảm số điểm ảnh; phóng to nhiều làm ảnh nhoè.',
  examples: [
    { title: 'Tính kích thước', problem: 'Ảnh 3 000 × 2 000, thu nhỏ giữ tỉ lệ để rộng 1 200. Chiều cao mới?', solution: '2 000 × 1 200 : 3 000 = 800 điểm ảnh.' },
    { title: 'Cắt theo tỉ lệ 1:1', problem: 'Ảnh 1 600 × 1 200, muốn cắt ảnh vuông lớn nhất. Kích thước?', solution: '1 200 × 1 200 điểm ảnh.' },
    { title: 'Chỉnh ảnh nghiêng', problem: 'Đường chân trời trong ảnh nghiêng khoảng 3°. Dùng công cụ nào?', solution: 'Rotate, xoay ngược lại khoảng 3° rồi cắt bỏ phần mép trống.' }
  ],
  exercises: [
    { question: 'Ảnh 2 400 × 1 600, thu nhỏ còn rộng 600 giữ tỉ lệ. Chiều cao mới và số điểm ảnh?', hints: ['Tỉ lệ 600 : 2 400 = 1/4.', 'Nhân rồi tính rộng × cao.'], solution: 'Cao 400; 600 × 400 = 240 000 điểm ảnh.' },
    { question: 'Phân biệt cắt ảnh và thu nhỏ ảnh.', hints: ['Khung hình thay đổi thế nào?', 'Độ chi tiết thay đổi thế nào?'], solution: 'Cắt bỏ một phần khung, phần còn lại giữ chi tiết; thu nhỏ giữ cả khung nhưng giảm số điểm ảnh, kém chi tiết.' },
    { question: 'Ảnh 1 920 × 1 080 cần cắt theo tỉ lệ 1:1 lớn nhất rồi thu nhỏ còn 540 × 540. Chiều rộng giảm bao nhiêu lần so với ảnh vuông?', hints: ['Ảnh vuông lớn nhất có cạnh bằng cạnh ngắn.', '1 080 : 540.'], solution: 'Ảnh vuông 1 080 × 1 080; giảm 2 lần.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Công cụ Crop loại bỏ phần ảnh nằm ngoài vùng chọn.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Lệnh đổi kích thước toàn bộ ảnh trong GIMP:', options: ['Image → Scale Image', 'Layer → New', 'Edit → Copy', 'File → Open'], answer: 0, explain: 'Scale Image.' },
    { type: 'short', q: 'Ảnh 1 600 × 1 200, thu nhỏ giữ tỉ lệ còn rộng 800. Chiều cao mới (điểm ảnh)?', answer: '600', unit: 'điểm ảnh', calc: '1200*800/1600', explain: '600.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Phóng to ảnh nhỏ lên rất lớn luôn làm ảnh rõ nét hơn.', answer: false, explain: 'Ảnh bị nhoè.' },
    { type: 'short', q: 'Ảnh 2 000 × 1 000 thu nhỏ giữ tỉ lệ còn rộng 1 000. Số điểm ảnh giảm bao nhiêu lần?', answer: '4', unit: 'lần', calc: '(2000*1000)/(1000*500)', explain: 'Mỗi chiều giảm 2 lần.' },
    { type: 'mcq', q: 'Để ảnh không bị méo khi đổi kích thước cần:', options: ['giữ tỉ lệ rộng – cao', 'chỉ đổi chiều cao', 'xoay ảnh trước', 'đổi màu ảnh'], answer: 0, explain: 'Giữ tỉ lệ.' },
    { type: 'short', q: 'Cắt ảnh 1 200 × 900 thành ảnh vuông lớn nhất. Cạnh ảnh vuông (điểm ảnh)?', answer: '900', unit: 'điểm ảnh', calc: 'Math.min(1200,900)', explain: 'Bằng cạnh ngắn.' },
    { type: 'mcq', q: 'Lật ảnh theo chiều ngang giống như:', options: ['soi gương', 'cắt ảnh', 'phóng to', 'đổi màu'], answer: 0, explain: 'Đối xứng như soi gương.' }
  ]
});
})();
