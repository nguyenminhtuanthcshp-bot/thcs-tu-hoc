/* Tin học 8 – Bài 10a. Định dạng nâng cao cho trang chiếu. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-8/bai-10a', {
  objectives: [
    'Định dạng được nền trang chiếu (màu, ảnh), phông và màu chữ hài hoà, tương phản.',
    'Sử dụng được trang chiếu cái (Slide Master) để định dạng thống nhất cho nhiều trang.',
    'Chèn và định dạng được hình khối, chữ nghệ thuật, nhóm đối tượng; căn chỉnh các đối tượng.'
  ],
  intro: 'Bài trình chiếu 15 trang, muốn đổi phông chữ tiêu đề cho cả bài – sửa từng trang thì mất cả buổi. <b>Trang chiếu cái</b> giúp thay đổi một lần cho tất cả.',
  steps: [
    { title: 'Nền và màu sắc', html: `<p><b>Design → Format Background</b>: tô màu đơn, chuyển sắc hoặc dùng ảnh làm nền. <b>Apply to All</b> để áp dụng cho mọi trang. Chọn màu chữ <b>tương phản</b> với nền; dùng tối đa khoảng 2–3 màu chủ đạo.</p>`,
      svg: S.slide({ title: 'Nền sáng – chữ tối', bullets: ['Tương phản rõ', 'Ít màu, hài hoà', 'Phông dễ đọc'], theme: ['#fef3c7', '#92400e'], note: 'Màu nền nhạt, chữ đậm giúp dễ đọc trên máy chiếu' }), caption: 'Phối màu tương phản.' },
    { title: 'Trang chiếu cái (Slide Master)', html: `<p><b>View → Slide Master</b>: mọi định dạng (phông, màu, vị trí tiêu đề, logo, chân trang) đặt trên trang cái sẽ <b>áp dụng cho mọi trang</b> dùng bố cục đó. Đóng bằng Close Master View.</p>`,
      svg: S.flow({ items: ['Trang chiếu cái', 'Bố cục Tiêu đề', 'Bố cục Nội dung', 'Các trang chiếu'], size: 13, label: 'Sửa trang cái → mọi trang thay đổi theo' }), caption: 'Định dạng một lần, áp dụng cho tất cả.' },
    { title: 'Hình khối, chữ nghệ thuật, nhóm', html: `<ul><li><b>Insert → Shapes</b>: hình chữ nhật, mũi tên, khối… dùng để tạo sơ đồ.</li><li><b>Insert → WordArt</b>: chữ nghệ thuật cho tiêu đề (dùng tiết chế).</li><li><b>Group</b>: nhóm nhiều đối tượng để di chuyển cùng nhau.</li><li><b>Align</b>: căn thẳng hàng, phân bố đều các đối tượng.</li></ul>` },
    { title: 'Nguyên tắc thẩm mĩ', html: `<p>Bố cục cân đối, khoảng trắng hợp lí; các đối tượng căn thẳng hàng; thống nhất phông, màu, cỡ chữ giữa các trang.</p>
      <div class="box key">Slide Master: một lần sửa – cả bài thống nhất.</div>` }
  ],
  summary: 'Định dạng nền bằng Format Background (Apply to All), chọn màu chữ tương phản, ít màu. Slide Master giúp định dạng thống nhất mọi trang. Chèn hình khối (Shapes), chữ nghệ thuật (WordArt), nhóm (Group) và căn chỉnh (Align) đối tượng; bố cục cân đối, thống nhất.',
  examples: [
    { title: 'Đổi phông cho cả bài', problem: 'Muốn đổi phông tiêu đề ở tất cả 15 trang. Làm cách nào nhanh nhất?', solution: 'View → Slide Master → đổi phông tiêu đề trên trang cái → Close Master View.' },
    { title: 'Logo ở mọi trang', problem: 'Muốn logo trường xuất hiện ở góc mọi trang.', solution: 'Chèn logo vào trang chiếu cái.' },
    { title: 'Căn đều', problem: 'Ba hình khối nằm lộn xộn. Làm sao để chúng cách đều nhau theo chiều ngang?', solution: 'Chọn cả ba → Align → Distribute Horizontally.' }
  ],
  exercises: [
    { question: 'Nêu hai lợi ích của Slide Master.', hints: ['Sửa bao nhiêu lần?', 'Các trang trông thế nào?'], solution: 'Tiết kiệm thời gian (sửa một lần); các trang thống nhất về phông, màu, bố cục.' },
    { question: 'Nền xanh đậm nên chọn màu chữ nào? Giải thích.', hints: ['Nguyên tắc tương phản.', 'Màu sáng hay tối?'], solution: 'Trắng hoặc vàng nhạt, vì tương phản mạnh với nền tối nên dễ đọc.' },
    { question: 'Trang chiếu rộng 33,9 cm, đặt 3 hình mỗi hình rộng 7 cm cách đều nhau và cách đều hai mép. Khoảng cách mỗi khoảng?', hints: ['Có 4 khoảng trống.', '(33,9 − 21) : 4.'], solution: '12,9 : 4 ≈ 3,2 cm.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Định dạng trên trang chiếu cái áp dụng cho các trang dùng bố cục đó.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Mở trang chiếu cái bằng lệnh:', options: ['View → Slide Master', 'Insert → Shapes', 'Home → New Slide', 'File → Save'], answer: 0, explain: 'View → Slide Master.' },
    { type: 'mcq', q: 'Lệnh nhóm nhiều đối tượng thành một:', options: ['Align', 'Group', 'Crop', 'Merge'], answer: 1, explain: 'Group.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nên dùng thật nhiều màu khác nhau trên mỗi trang chiếu.', answer: false, explain: 'Chỉ 2–3 màu chủ đạo.' },
    { type: 'mcq', q: 'Để áp dụng màu nền cho mọi trang, chọn:', options: ['Apply to All', 'Reset', 'Close', 'Undo'], answer: 0, explain: 'Apply to All.' },
    { type: 'short', q: 'Bài 12 trang, sửa phông thủ công mất 1,5 phút/trang. Tổng thời gian (phút)?', answer: '18', unit: 'phút', calc: '12*1.5', explain: '18 phút – dùng Slide Master nhanh hơn nhiều.' },
    { type: 'short', q: 'Ba hình mỗi hình rộng 6 cm đặt trên chiều rộng 30 cm, cách đều nhau và cách đều hai mép. Mỗi khoảng trống rộng bao nhiêu cm?', answer: '3', unit: 'cm', calc: '(30-18)/4', explain: '12 : 4.' },
    { type: 'mcq', q: 'Chèn chữ nghệ thuật dùng:', options: ['WordArt', 'Bullets', 'Table', 'Header'], answer: 0, explain: 'WordArt.' }
  ]
});
})();
