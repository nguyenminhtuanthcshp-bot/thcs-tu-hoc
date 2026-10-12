/* Tin học 8 – Bài 8b. Phần mềm chỉnh sửa ảnh. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-8/bai-8b', {
  objectives: [
    'Nêu được chức năng cơ bản của phần mềm chỉnh sửa ảnh; kể tên được một số phần mềm.',
    'Nhận biết được giao diện: vùng làm việc, hộp công cụ, bảng lớp (layers), thanh bảng chọn.',
    'Hiểu được khái niệm lớp ảnh và mở, lưu, xuất được tệp ảnh.'
  ],
  intro: 'Bức ảnh chụp lớp bị tối, lệch, có người đi ngang phía sau? <b>Phần mềm chỉnh sửa ảnh</b> giúp làm sáng, cắt, xoay, ghép chữ… biến bức ảnh bình thường thành sản phẩm đẹp.',
  steps: [
    { title: 'Phần mềm chỉnh sửa ảnh', html: `<p>Phần mềm chỉnh sửa ảnh cho phép: cắt, xoay, đổi kích thước; chỉnh độ sáng, màu sắc; xoá chi tiết thừa; thêm chữ, hiệu ứng; ghép ảnh. Ví dụ: GIMP (miễn phí, mã nguồn mở), Photoshop, các ứng dụng trên điện thoại.</p>` },
    { title: 'Giao diện', html: `<p>Giao diện thường gồm: <b>thanh bảng chọn</b> (File, Edit, Image, Layer…), <b>hộp công cụ</b> (chọn, cắt, cọ vẽ, chữ…), <b>vùng làm việc</b> chứa ảnh, <b>bảng tuỳ chọn công cụ</b> và <b>bảng lớp</b>.</p>`,
      svg: S.table({ title: 'Các thành phần giao diện (minh hoạ theo GIMP)', head: ['Thành phần', 'Tác dụng'], rows: [['Thanh bảng chọn', 'Chứa các lệnh: File, Image, Layer…'], ['Hộp công cụ', 'Chọn công cụ: cắt, chữ, cọ vẽ…'], ['Vùng làm việc', 'Hiển thị ảnh đang chỉnh sửa'], ['Tuỳ chọn công cụ', 'Thiết lập cho công cụ đang chọn'], ['Bảng lớp (Layers)', 'Quản lí các lớp ảnh']], colW: 250 }), caption: 'Giao diện phần mềm chỉnh sửa ảnh.' },
    { title: 'Lớp ảnh (layer)', html: `<p>Ảnh có thể gồm nhiều <b>lớp</b> chồng lên nhau như những tấm kính trong suốt. Lớp ở trên che lớp ở dưới. Chỉnh sửa một lớp không ảnh hưởng lớp khác; có thể ẩn/hiện, đổi thứ tự, đổi độ trong suốt của lớp.</p>`,
      svg: S.layers({ title: 'Ba lớp của một tấm thiệp', items: ['Lớp chữ: “Chúc mừng 20/11”', 'Lớp hình: bó hoa', 'Lớp nền: màu hồng nhạt'], active: 0, note: 'Lớp 1 ở trên cùng; lớp nền ở dưới cùng' }), caption: 'Lớp trên cùng hiển thị đè lên lớp dưới.' },
    { title: 'Mở, lưu và xuất ảnh', html: `<p>Ở GIMP: <b>File → Open</b> để mở ảnh. <b>File → Save</b> lưu dạng tệp dự án (.xcf) giữ nguyên các lớp để sửa tiếp. <b>File → Export As</b> xuất ra ảnh thông dụng (.png, .jpg) để chia sẻ – khi đó các lớp được gộp lại.</p>
      <div class="box key">Lưu .xcf để sửa tiếp; xuất .png/.jpg để dùng, chia sẻ.</div>` }
  ],
  summary: 'Phần mềm chỉnh sửa ảnh (GIMP, Photoshop…) giúp cắt, xoay, chỉnh màu, thêm chữ, ghép ảnh. Giao diện: thanh bảng chọn, hộp công cụ, vùng làm việc, tuỳ chọn công cụ, bảng lớp. Ảnh gồm nhiều lớp chồng lên nhau, lớp trên che lớp dưới. GIMP lưu dự án .xcf (giữ lớp), xuất .png/.jpg để chia sẻ.',
  examples: [
    { title: 'Thứ tự lớp', problem: 'Lớp chữ nằm dưới lớp ảnh bó hoa nên chữ bị che. Sửa thế nào?', solution: 'Kéo lớp chữ lên trên lớp bó hoa trong bảng Layers (hoặc dùng lệnh Raise Layer).' },
    { title: 'Lưu hay xuất', problem: 'Em làm thiệp chưa xong, mai sửa tiếp. Nên lưu dạng nào?', solution: 'Lưu .xcf (File → Save) để giữ các lớp.' },
    { title: 'Dung lượng', problem: 'Ảnh 4 000 × 3 000 điểm ảnh có bao nhiêu điểm ảnh (bao nhiêu megapixel)?', solution: '12 000 000 điểm ảnh = 12 megapixel.' }
  ],
  exercises: [
    { question: 'Nêu ba việc có thể làm với phần mềm chỉnh sửa ảnh.', hints: ['Về kích thước, khung hình.', 'Về màu sắc và chữ.'], solution: 'Cắt, xoay ảnh; chỉnh sáng, màu; thêm chữ, hiệu ứng.' },
    { question: 'Vì sao nên tách chữ và hình thành các lớp riêng?', hints: ['Muốn sửa chữ sau này thì sao?', 'Có ảnh hưởng tới hình không?'], solution: 'Sửa, di chuyển chữ dễ dàng mà không làm hỏng hình ở lớp khác.' },
    { question: 'Ảnh 1 920 × 1 080 điểm ảnh có bao nhiêu điểm ảnh?', hints: ['Nhân chiều rộng với chiều cao.', '1 920 × 1 080.'], solution: '2 073 600 điểm ảnh (khoảng 2,1 megapixel).' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: GIMP là phần mềm chỉnh sửa ảnh miễn phí, mã nguồn mở.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Trong bảng lớp, lớp nằm trên cùng sẽ:', options: ['bị che bởi các lớp dưới', 'hiển thị đè lên các lớp dưới', 'luôn trong suốt', 'không chỉnh sửa được'], answer: 1, explain: 'Lớp trên che lớp dưới.' },
    { type: 'mcq', q: 'Định dạng tệp dự án của GIMP, giữ nguyên các lớp:', options: ['.jpg', '.png', '.xcf', '.mp3'], answer: 2, explain: '.xcf.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Xuất ảnh ra .jpg vẫn giữ nguyên các lớp để sửa từng lớp.', answer: false, explain: 'Các lớp được gộp.' },
    { type: 'short', q: 'Ảnh 3 000 × 2 000 điểm ảnh có bao nhiêu megapixel?', answer: '6', unit: 'megapixel', calc: '3000*2000/1000000', explain: '6 000 000 điểm ảnh.' },
    { type: 'mcq', q: 'Lệnh xuất ảnh để chia sẻ trong GIMP:', options: ['File → Export As', 'Edit → Undo', 'Layer → New Layer', 'View → Zoom'], answer: 0, explain: 'Export As.' },
    { type: 'short', q: 'Thiệp có lớp nền, lớp hình, 2 lớp chữ. Tổng số lớp?', answer: '4', unit: 'lớp', calc: '1+1+2', explain: '4.' },
    { type: 'mcq', q: 'Thành phần chứa các công cụ cắt, chữ, cọ vẽ:', options: ['Hộp công cụ', 'Bảng lớp', 'Thanh trạng thái', 'Vùng làm việc'], answer: 0, explain: 'Hộp công cụ.' }
  ]
});
})();
