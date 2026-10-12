/* Tin học 7 – Bài 10. Hoàn thiện bảng tính. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-7/bai-10', {
  objectives: [
    'Thực hiện được các thao tác với trang tính: chèn, xoá, đổi tên, sao chép, di chuyển.',
    'Biết xem trước và in bảng tính: chọn khổ giấy, hướng giấy, lề.',
    'Hoàn thiện được một bảng tính từ nhập liệu, tính toán đến trình bày; đọc được biểu đồ cột minh hoạ dữ liệu (mở rộng).'
  ],
  intro: 'Một sổ tính có thể có nhiều trang: “HocKi1”, “HocKi2”, “TongKet”. Biết sắp xếp các trang tính và in ra đẹp mắt là bước cuối để <b>hoàn thiện bảng tính</b>.',
  steps: [
    { title: 'Làm việc với trang tính', html: `<p>Các trang tính hiện ở dải tên phía dưới cửa sổ. Nháy phải tên trang để: <b>Insert</b> (chèn), <b>Delete</b> (xoá), <b>Rename</b> (đổi tên), <b>Move or Copy</b> (di chuyển, sao chép). Có thể kéo thả tên trang để đổi thứ tự.</p>`,
      svg: S.flow({ items: ['HocKi1', 'HocKi2', 'TongKet', '+ (thêm trang)'], size: 14, label: 'Dải tên trang tính của một sổ tính' }), caption: 'Mỗi sổ tính có thể có nhiều trang tính.' },
    { title: 'Công thức tham chiếu trang khác', html: `<p>Có thể dùng dữ liệu ở trang tính khác: <code>=HocKi1!E2</code> lấy giá trị ô E2 của trang HocKi1. Ví dụ trên trang TongKet: <code>=(HocKi1!E2+HocKi2!E2*2)/3</code>.</p>` },
    { title: 'Xem trước và in', html: `<p>Trước khi in, dùng <b>Print Preview</b> (xem trước). Trong <b>Page Setup</b>: chọn khổ giấy (A4), hướng giấy dọc (Portrait) hoặc ngang (Landscape), lề, vùng in. Bảng nhiều cột nên in ngang.</p>`,
      svg: S.table({ title: 'Chọn hướng giấy khi in', head: ['Hướng giấy', 'Hình dạng', 'Phù hợp với'], rows: [['Dọc (Portrait)', 'cao hơn rộng', 'bảng ít cột, nhiều hàng'], ['Ngang (Landscape)', 'rộng hơn cao', 'bảng nhiều cột']], colW: 170 }), caption: 'Bảng nhiều cột nên chọn hướng giấy ngang.' },
    { title: 'Mở rộng: biểu đồ minh hoạ dữ liệu', html: `<p>Bảng tính có thể vẽ <b>biểu đồ</b> từ dữ liệu (chọn vùng → Insert → Chart). Biểu đồ cột giúp so sánh nhanh các giá trị (sẽ học kĩ hơn ở lớp 8).</p>`,
      svg: S.bar({ title: 'Số sách đọc trong tháng của tổ 1 (số liệu minh hoạ)', cats: ['An', 'Bình', 'Chi', 'Dũng'], series: [{ name: 'cuốn', values: [4, 2, 5, 3], color: '#0e7490' }], width: 480, height: 260 }), caption: 'Biểu đồ cột từ bảng số liệu.' }
  ],
  summary: 'Sổ tính gồm nhiều trang tính; có thể chèn, xoá, đổi tên, sao chép, di chuyển trang. Công thức tham chiếu trang khác: =TênTrang!Ô. Trước khi in dùng Print Preview, Page Setup (khổ, hướng giấy, lề). Biểu đồ giúp minh hoạ dữ liệu trực quan.',
  examples: [
    { title: 'Tham chiếu trang', problem: 'Viết công thức ở trang TongKet lấy ô C5 của trang HocKi2.', solution: '=HocKi2!C5' },
    { title: 'Chọn hướng giấy', problem: 'Bảng có 14 cột điểm. Nên in dọc hay ngang?', solution: 'In ngang (Landscape) để đủ chỗ cho nhiều cột.' },
    { title: 'Đọc biểu đồ', problem: 'Theo biểu đồ ở bước 4, tổ 1 đọc tất cả bao nhiêu cuốn sách? Trung bình mỗi bạn bao nhiêu cuốn?', solution: '4 + 2 + 5 + 3 = 14 cuốn; 14 : 4 = 3,5 cuốn.' }
  ],
  exercises: [
    { question: 'Nêu các bước đổi tên trang tính “Sheet1” thành “HocKi1”.', hints: ['Nháy chuột phải vào đâu?', 'Chọn lệnh nào?'], solution: 'Nháy phải tên trang Sheet1 → Rename → gõ HocKi1 → Enter.' },
    { question: 'Ô E2 của HocKi1 là 7, của HocKi2 là 8. Tính =(HocKi1!E2+HocKi2!E2*2)/3 (làm tròn đến 1 chữ số thập phân).', hints: ['Tính 8 × 2 trước.', '(7 + 16) : 3.'], solution: '23 : 3 ≈ 7,7.' },
    { question: 'Mỗi trang in được 30 hàng dữ liệu. Bảng có 95 hàng thì cần bao nhiêu trang?', hints: ['95 : 30 = 3 dư 5.', 'Phần dư vẫn cần một trang.'], solution: '4 trang.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Một sổ tính có thể có nhiều trang tính.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Lệnh đổi tên trang tính là:', options: ['Delete', 'Rename', 'Insert', 'Print'], answer: 1, explain: 'Rename.' },
    { type: 'mcq', q: 'Công thức lấy ô B3 của trang “HocKi1” là:', options: ['=HocKi1!B3', '=B3!HocKi1', '=HocKi1:B3', '=HocKi1.B3'], answer: 0, explain: 'TênTrang!Ô.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Bảng có rất nhiều cột nên in theo hướng dọc.', answer: false, explain: 'Nên in ngang.' },
    { type: 'short', q: 'Mỗi trang in 40 hàng. Bảng có 130 hàng cần bao nhiêu trang?', answer: '4', unit: 'trang', calc: 'Math.ceil(130/40)', explain: '130 : 40 = 3 dư 10 → 4 trang.' },
    { type: 'mcq', q: 'Để xem bảng tính trước khi in, dùng:', options: ['Print Preview', 'Rename', 'Merge', 'Sort'], answer: 0, explain: 'Xem trước khi in.' },
    { type: 'short', q: 'HocKi1!E2 = 6, HocKi2!E2 = 9. Kết quả =(HocKi1!E2+HocKi2!E2*2)/3?', answer: '8', calc: '(6+9*2)/3', explain: '24 : 3.' },
    { type: 'mcq', q: 'Biểu đồ cột thích hợp để:', options: ['so sánh các giá trị', 'soạn thư', 'lưu mật khẩu', 'đổi tên trang'], answer: 0, explain: 'So sánh trực quan.' }
  ]
});
})();
