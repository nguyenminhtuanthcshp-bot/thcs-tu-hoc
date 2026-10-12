/* Tin học 8 – Bài 9a. Tạo đầu trang, chân trang cho văn bản. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-8/bai-9a', {
  objectives: [
    'Nêu được tác dụng của đầu trang, chân trang và số trang.',
    'Tạo, chỉnh sửa, xoá được đầu trang, chân trang; chèn được số trang.',
    'Trình bày được văn bản nhiều trang chuyên nghiệp, dễ theo dõi.'
  ],
  intro: 'Mở một cuốn sách, em thấy tên sách ở đầu mỗi trang và số trang ở cuối. Phần mềm soạn thảo cho phép tạo những dòng lặp lại ấy chỉ một lần – đó là <b>đầu trang</b> và <b>chân trang</b>.',
  steps: [
    { title: 'Đầu trang, chân trang là gì?', html: `<p><b>Đầu trang</b> (Header) là vùng ở lề trên, <b>chân trang</b> (Footer) là vùng ở lề dưới mỗi trang. Nội dung trong đó (tên tài liệu, tác giả, ngày, số trang, logo) <b>tự lặp lại</b> trên mọi trang.</p>`,
      svg: S.pageHF({ title: 'Vị trí đầu trang, chân trang', header: 'Báo cáo dự án – Nhóm 2', footer: 'Trang 3 / 8', note: 'Đầu trang và chân trang lặp lại trên mọi trang' }), caption: 'Header ở lề trên, Footer ở lề dưới.' },
    { title: 'Tạo đầu trang, chân trang', html: `<p><b>Insert → Header</b> (hoặc Footer) → chọn mẫu → gõ nội dung. Có thể nháy đúp vào vùng lề trên/dưới để sửa. Nhấn <b>Close Header and Footer</b> (hoặc nháy đúp vào phần thân) để quay lại soạn nội dung chính.</p>` },
    { title: 'Chèn số trang', html: `<p><b>Insert → Page Number</b> → chọn vị trí (đầu trang/chân trang, trái/giữa/phải). Số trang <b>tự động cập nhật</b> khi thêm, bớt trang. Có thể chọn định dạng số (1, 2, 3 hoặc i, ii, iii) và số bắt đầu.</p>`,
      svg: S.flow({ items: ['Insert', 'Page Number', 'Bottom of Page', 'Chọn vị trí giữa'], size: 13, label: 'Chèn số trang ở giữa chân trang' }), caption: 'Các bước chèn số trang.' },
    { title: 'Một số tuỳ chọn', html: `<ul><li><b>Different First Page</b>: trang bìa không có đầu trang, chân trang.</li><li><b>Different Odd &amp; Even Pages</b>: trang chẵn, lẻ khác nhau (như sách in).</li><li>Xoá: Insert → Header → Remove Header.</li></ul>
      <div class="box key">Gõ một lần ở Header/Footer – xuất hiện trên mọi trang.</div>` }
  ],
  summary: 'Đầu trang (Header) và chân trang (Footer) là vùng ở lề trên, lề dưới, nội dung tự lặp lại trên mọi trang. Tạo bằng Insert → Header/Footer; chèn số trang bằng Insert → Page Number (tự cập nhật). Tuỳ chọn: trang đầu khác, trang chẵn lẻ khác.',
  examples: [
    { title: 'Chọn nội dung', problem: 'Báo cáo môn Lịch sử của nhóm em nên đặt gì ở đầu trang và chân trang?', solution: 'Đầu trang: tên báo cáo, tên nhóm/lớp. Chân trang: số trang (có thể kèm tên trường).' },
    { title: 'Trang bìa', problem: 'Không muốn số trang xuất hiện ở trang bìa. Làm thế nào?', solution: 'Bật Different First Page.' },
    { title: 'Đếm trang', problem: 'Văn bản 12 trang, trang bìa không đánh số, số trang bắt đầu từ 1 ở trang thứ hai. Trang cuối mang số mấy?', solution: '11.' }
  ],
  exercises: [
    { question: 'Nêu hai lợi ích của việc chèn số trang tự động thay vì gõ tay.', hints: ['Khi thêm trang thì sao?', 'Có phải gõ trên từng trang không?'], solution: 'Tự cập nhật khi thêm/bớt trang; chỉ thực hiện một lần cho mọi trang.' },
    { question: 'Viết các bước tạo chân trang có nội dung “Lớp 8A – Trường THCS Hoà Bình”.', hints: ['Bắt đầu từ thẻ Insert.', 'Kết thúc bằng lệnh nào?'], solution: 'Insert → Footer → chọn mẫu → gõ nội dung → Close Header and Footer.' },
    { question: 'Tài liệu 20 trang, đánh số kiểu sách (trang lẻ số ở bên phải). Có bao nhiêu trang số ở bên phải?', hints: ['Đếm trang lẻ từ 1 đến 20.', '20 : 2.'], solution: '10 trang.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nội dung đầu trang tự lặp lại trên mọi trang.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Chân trang nằm ở:', options: ['lề trên', 'lề dưới', 'giữa trang', 'lề trái'], answer: 1, explain: 'Footer ở lề dưới.' },
    { type: 'mcq', q: 'Lệnh chèn số trang:', options: ['Insert → Page Number', 'Home → Bullets', 'Layout → Columns', 'View → Ruler'], answer: 0, explain: 'Page Number.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Số trang chèn tự động phải sửa tay khi thêm trang mới.', answer: false, explain: 'Tự cập nhật.' },
    { type: 'mcq', q: 'Muốn trang bìa không có đầu trang, chân trang, chọn:', options: ['Different First Page', 'Different Odd & Even Pages', 'Remove Footer', 'Page Color'], answer: 0, explain: 'Different First Page.' },
    { type: 'short', q: 'Văn bản 15 trang, trang bìa không đánh số, trang 2 mang số 1. Trang cuối mang số mấy?', answer: '14', calc: '15-1', explain: '14.' },
    { type: 'short', q: 'Tài liệu 30 trang. Có bao nhiêu trang chẵn?', answer: '15', unit: 'trang', calc: '30/2', explain: '15.' },
    { type: 'mcq', q: 'Nội dung phù hợp đặt ở đầu trang của báo cáo:', options: ['Tên báo cáo', 'Toàn bộ mục lục', 'Ảnh kích thước lớn', 'Bảng số liệu'], answer: 0, explain: 'Tên báo cáo.' }
  ]
});
})();
