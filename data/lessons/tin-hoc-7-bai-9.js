/* Tin học 7 – Bài 9. Trình bày bảng tính. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-7/bai-9', {
  objectives: [
    'Thực hiện được thao tác định dạng dữ liệu số (số chữ số thập phân), căn lề, phông chữ, màu.',
    'Gộp ô, kẻ đường viền, điều chỉnh độ rộng cột, chiều cao hàng.',
    'Chèn, xoá hàng và cột; hiểu ảnh hưởng tới công thức.'
  ],
  intro: 'Cùng một bảng điểm, bảng có tiêu đề rõ, kẻ viền, số thẳng hàng sẽ dễ đọc hơn nhiều. Đó là việc <b>trình bày bảng tính</b>.',
  steps: [
    { title: 'Định dạng dữ liệu', html: `<ul><li>Phông, cỡ, kiểu chữ (đậm, nghiêng), màu chữ, màu nền ô.</li><li>Căn lề trái, giữa, phải; căn theo chiều dọc.</li><li>Định dạng số: tăng/giảm số chữ số thập phân (ví dụ 7,333… hiển thị 7,3); định dạng phần trăm, tiền tệ.</li></ul>
      <p>Định dạng chỉ thay đổi <b>cách hiển thị</b>, giá trị lưu trong ô vẫn giữ nguyên.</p>` },
    { title: 'Gộp ô và kẻ viền', html: `<p><b>Gộp ô</b> (Merge &amp; Center) để tạo tiêu đề nằm giữa bảng. <b>Kẻ viền</b> (Borders) giúp các ô rõ ràng khi in. Điều chỉnh <b>độ rộng cột</b> bằng cách kéo đường biên giữa hai tên cột (nháy đúp để vừa khít dữ liệu).</p>`,
      svg: S.sheet({ title: 'Bảng sau khi trình bày', cols: ['A', 'B', 'C', 'D'], rows: [['BẢNG ĐIỂM LỚP 7A', '', '', ''], ['Họ tên', 'Toán', 'Tin', 'TB'], ['An', 8, 9, '8,5'], ['Bình', 7, 8, '7,5']], sel: ['A1', 'D1'], colW: 120, note: 'Hàng 1: gộp A1:D1 làm tiêu đề; TB hiển thị 1 chữ số thập phân' }), caption: 'Tiêu đề được gộp trên vùng A1:D1.' },
    { title: 'Chèn, xoá hàng và cột', html: `<p>Nháy phải tên hàng/cột → <b>Insert</b> (chèn) hoặc <b>Delete</b> (xoá). Khi chèn, xoá hàng, cột, các công thức tự điều chỉnh địa chỉ. Ví dụ: <code>=SUM(B2:B6)</code>, chèn một hàng ở giữa vùng → thành <code>=SUM(B2:B7)</code>.</p>`,
      svg: S.flow({ items: ['Chọn tên hàng/cột', 'Nháy chuột phải', 'Insert (chèn) / Delete (xoá)'], size: 13, label: 'Chèn hoặc xoá hàng, cột' }), caption: 'Thao tác chèn, xoá.' },
    { title: 'Nguyên tắc trình bày đẹp', html: `<ul><li>Tiêu đề nổi bật, tên cột in đậm.</li><li>Số căn phải và cùng số chữ số thập phân; văn bản căn trái.</li><li>Dùng ít màu, màu hài hoà.</li></ul>
      <div class="box key">Định dạng làm thay đổi cách hiển thị, không làm thay đổi giá trị.</div>` }
  ],
  summary: 'Trình bày bảng tính: định dạng chữ, màu, căn lề, số chữ số thập phân (chỉ đổi cách hiển thị); gộp ô làm tiêu đề, kẻ viền, chỉnh độ rộng cột, chiều cao hàng; chèn, xoá hàng/cột (công thức tự điều chỉnh).',
  examples: [
    { title: 'Giá trị và hiển thị', problem: 'Ô A1 chứa 7,456 được định dạng 1 chữ số thập phân. Ô hiển thị gì? Công thức =A1*1000 cho kết quả bao nhiêu?', solution: 'Hiển thị 7,5; nhưng giá trị vẫn là 7,456 nên =A1*1000 cho 7 456.' },
    { title: 'Gộp ô', problem: 'Bảng có 5 cột từ A đến E. Muốn tiêu đề ở hàng 1 nằm giữa bảng, gộp vùng nào?', solution: 'Gộp A1:E1 rồi căn giữa.' },
    { title: 'Chèn hàng', problem: 'B10 chứa =SUM(B2:B9). Chèn một hàng mới ở hàng 5. Công thức tổng nằm ở ô nào và là gì?', solution: 'Công thức chuyển xuống B11 và thành =SUM(B2:B10).' }
  ],
  exercises: [
    { question: 'Nêu ba thao tác giúp bảng điểm dễ đọc hơn.', hints: ['Về tiêu đề.', 'Về đường viền và số chữ số thập phân.'], solution: 'Gộp ô, căn giữa tiêu đề; kẻ viền; định dạng điểm trung bình 1 chữ số thập phân (hoặc in đậm tên cột).' },
    { question: 'Ô chứa 8,25 định dạng 0 chữ số thập phân hiển thị gì? Giá trị thật là bao nhiêu?', hints: ['Làm tròn để hiển thị.', 'Giá trị lưu không đổi.'], solution: 'Hiển thị 8; giá trị vẫn là 8,25.' },
    { question: 'Xoá cột C trong bảng có công thức =A1+B1+D1 ở E1. Sau khi xoá, công thức nằm ở ô nào và là gì?', hints: ['Các cột sau C dịch sang trái một cột.', 'D thành C, E thành D.'], solution: 'Ở D1: =A1+B1+C1.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Định dạng số chữ số thập phân chỉ làm thay đổi cách hiển thị.', answer: true, explain: 'Giá trị lưu không đổi.' },
    { type: 'mcq', q: 'Lệnh dùng để gộp các ô và căn giữa là:', options: ['Borders', 'Merge & Center', 'Insert', 'Sort'], answer: 1, explain: 'Merge & Center.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Chèn thêm hàng vào giữa vùng dữ liệu làm công thức SUM bị sai và phải sửa tay.', answer: false, explain: 'Công thức tự điều chỉnh.' },
    { type: 'mcq', q: 'Để mỗi ô có đường kẻ rõ khi in, em dùng:', options: ['Kẻ viền (Borders)', 'Đổi phông chữ', 'Xoá hàng', 'Gộp ô'], answer: 0, explain: 'Borders.' },
    { type: 'short', q: 'Ô A1 chứa 6,48, hiển thị 1 chữ số thập phân. Kết quả =A1*100?', answer: '648', calc: '6.48*100', explain: 'Giá trị thật 6,48.' },
    { type: 'short', q: 'Gộp vùng A1:F1 thành một ô. Có bao nhiêu ô được gộp?', answer: '6', unit: 'ô', calc: '6', explain: 'A đến F: 6 ô.' },
    { type: 'mcq', q: 'Mặc định, dữ liệu văn bản trong ô được căn:', options: ['trái', 'phải', 'giữa', 'đều hai bên'], answer: 0, explain: 'Căn trái.' },
    { type: 'short', q: 'B12 chứa =SUM(B2:B11). Xoá hàng 4. Vùng trong công thức mới có bao nhiêu ô?', answer: '9', unit: 'ô', calc: '10-1', explain: 'Thành =SUM(B2:B10): 9 ô.' }
  ]
});
})();
