/* Tin học 7 – Bài 12. Định dạng đối tượng trên trang chiếu. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-7/bai-12', {
  objectives: [
    'Chèn được hình ảnh vào trang chiếu; thay đổi kích thước, vị trí, thứ tự lớp của hình.',
    'Định dạng được văn bản, chọn mẫu thiết kế (Design) phù hợp.',
    'Tạo được hiệu ứng chuyển trang và hiệu ứng động hợp lí, không lạm dụng.'
  ],
  intro: 'Một bức ảnh đẹp đúng chỗ đáng giá hơn nhiều dòng chữ. Nhưng quá nhiều hiệu ứng bay nhảy lại làm người xem rối mắt. Hãy học cách <b>định dạng đối tượng</b> sao cho vừa đẹp vừa rõ.',
  steps: [
    { title: 'Chèn và chỉnh hình ảnh', html: `<p><b>Insert → Pictures</b> để chèn ảnh. Kéo các nút ở góc để đổi kích thước (giữ tỉ lệ), kéo ảnh để di chuyển. Nên dùng ảnh tự chụp hoặc ảnh được phép sử dụng và ghi nguồn.</p>`,
      svg: S.slide({ title: 'Cây xanh quanh ta', bullets: ['Cho bóng mát', 'Làm sạch không khí', 'Giữ đất, giữ nước'], layout: 'image', note: 'Bố cục chữ bên trái, hình ảnh bên phải' }), caption: 'Hình ảnh minh hoạ cho nội dung.' },
    { title: 'Thứ tự lớp của đối tượng', html: `<p>Các đối tượng chồng lên nhau theo lớp. Dùng <b>Bring to Front</b> (đưa lên trên cùng), <b>Send to Back</b> (đưa xuống dưới cùng), <b>Bring Forward / Send Backward</b> (lên/xuống một lớp).</p>`,
      svg: S.flow({ items: ['Lớp dưới cùng: ảnh nền', 'Lớp giữa: hình khối', 'Lớp trên cùng: chữ'], vertical: true, w: 360, size: 13, label: 'Chữ nên nằm lớp trên cùng để không bị che' }), caption: 'Thứ tự lớp quyết định đối tượng nào bị che.' },
    { title: 'Định dạng văn bản và mẫu thiết kế', html: `<p>Chọn phông dễ đọc, cỡ chữ đủ lớn (tiêu đề khoảng 32–44, nội dung khoảng 24–28), màu chữ tương phản với nền. <b>Design</b> cung cấp các mẫu có sẵn để các trang thống nhất.</p>` },
    { title: 'Hiệu ứng', html: `<ul><li><b>Hiệu ứng chuyển trang</b> (Transitions): cách trang mới xuất hiện.</li><li><b>Hiệu ứng động</b> (Animations): cách từng đối tượng xuất hiện, nhấn mạnh, biến mất.</li></ul>
      <p>Dùng ít hiệu ứng, thống nhất, phục vụ nội dung.</p>
      <div class="box key">Ảnh rõ, có nguồn; chữ tương phản; hiệu ứng vừa phải.</div>` }
  ],
  summary: 'Chèn ảnh (Insert → Pictures), chỉnh kích thước giữ tỉ lệ, sắp xếp lớp (Bring to Front, Send to Back). Định dạng chữ dễ đọc, tương phản, dùng mẫu Design thống nhất. Hiệu ứng chuyển trang (Transitions) và hiệu ứng động (Animations) nên dùng vừa phải.',
  examples: [
    { title: 'Chữ bị che', problem: 'Dòng chữ bị ảnh che mất. Sửa thế nào?', solution: 'Chọn ảnh → Send to Back (hoặc chọn chữ → Bring to Front).' },
    { title: 'Chọn màu', problem: 'Nền xanh đậm, nên dùng chữ màu gì?', solution: 'Màu sáng như trắng, vàng nhạt để tương phản, dễ đọc.' },
    { title: 'Giữ tỉ lệ ảnh', problem: 'Ảnh rộng 1 600, cao 1 200 điểm ảnh, thu nhỏ còn rộng 400 và giữ tỉ lệ. Chiều cao mới?', solution: '1 200 × 400 : 1 600 = 300 điểm ảnh.' }
  ],
  exercises: [
    { question: 'Phân biệt hiệu ứng chuyển trang và hiệu ứng động.', hints: ['Áp dụng cho cả trang hay từng đối tượng?', 'Tên lệnh: Transitions và Animations.'], solution: 'Hiệu ứng chuyển trang áp dụng khi chuyển sang trang mới; hiệu ứng động áp dụng cho từng đối tượng trên trang.' },
    { question: 'Nêu ba lưu ý khi chèn hình ảnh vào bài trình chiếu.', hints: ['Về chất lượng và bản quyền.', 'Về kích thước và vị trí.'], solution: 'Ảnh rõ nét, đúng nội dung; được phép sử dụng, ghi nguồn; giữ tỉ lệ, không che chữ.' },
    { question: 'Ảnh 800 × 600 điểm ảnh, phóng to giữ tỉ lệ để rộng 1 200. Chiều cao mới?', hints: ['Tỉ lệ phóng = 1 200 : 800.', 'Nhân chiều cao với tỉ lệ.'], solution: '600 × 1,5 = 900 điểm ảnh.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Lệnh Send to Back đưa đối tượng xuống lớp dưới cùng.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Hiệu ứng áp dụng khi chuyển sang trang mới gọi là:', options: ['Animations', 'Transitions', 'Design', 'Layout'], answer: 1, explain: 'Transitions.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Càng nhiều hiệu ứng thì bài trình chiếu càng tốt.', answer: false, explain: 'Lạm dụng gây rối mắt.' },
    { type: 'mcq', q: 'Chữ màu trắng nên đặt trên nền:', options: ['trắng', 'vàng nhạt', 'xanh đậm', 'hồng nhạt'], answer: 2, explain: 'Cần tương phản.' },
    { type: 'short', q: 'Ảnh 1 000 × 800 điểm ảnh, thu nhỏ giữ tỉ lệ còn rộng 500. Chiều cao mới (điểm ảnh)?', answer: '400', unit: 'điểm ảnh', calc: '800*500/1000', explain: 'Giảm một nửa.' },
    { type: 'mcq', q: 'Lệnh chèn ảnh từ máy tính:', options: ['Insert → Pictures', 'Design → Themes', 'Slide Show → From Beginning', 'File → Print'], answer: 0, explain: 'Insert → Pictures.' },
    { type: 'short', q: 'Ảnh 640 × 480, phóng to giữ tỉ lệ để rộng 960. Chiều cao mới?', answer: '720', unit: 'điểm ảnh', calc: '480*960/640', explain: '480 × 1,5.' },
    { type: 'mcq', q: 'Muốn các trang có cùng phong cách, nên dùng:', options: ['mẫu thiết kế (Design)', 'mỗi trang một màu nền khác', 'nhiều phông chữ', 'chữ nhấp nháy'], answer: 0, explain: 'Design giúp thống nhất.' }
  ]
});
})();
