/* Tin học 7 – Bài 6. Làm quen với phần mềm bảng tính. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-7/bai-6', {
  objectives: [
    'Nêu được một số chức năng cơ bản của phần mềm bảng tính.',
    'Nhận biết được trang tính, hàng, cột, ô, địa chỉ ô, vùng dữ liệu.',
    'Nhập, chỉnh sửa, xoá được dữ liệu; biết dữ liệu số và dữ liệu văn bản được căn lề khác nhau.'
  ],
  intro: 'Lớp trưởng cần ghi điểm, tính trung bình cho 40 bạn. Làm bằng tay vừa lâu vừa dễ nhầm. <b>Phần mềm bảng tính</b> giúp ghi dữ liệu dạng bảng và tính toán tự động.',
  steps: [
    { title: 'Phần mềm bảng tính làm được gì?', html: `<p>Phần mềm bảng tính (ví dụ Microsoft Excel, Google Trang tính, LibreOffice Calc) giúp: lưu dữ liệu dạng bảng; <b>tính toán tự động</b> bằng công thức, hàm; sắp xếp, lọc dữ liệu; vẽ <b>biểu đồ</b>.</p>` },
    { title: 'Trang tính: hàng, cột, ô', html: `<p>Một tệp bảng tính (sổ tính) gồm một hoặc nhiều <b>trang tính</b>. Trang tính gồm các <b>cột</b> (tên là chữ cái A, B, C…) và các <b>hàng</b> (tên là số 1, 2, 3…). Giao của cột và hàng là <b>ô</b>. <b>Địa chỉ ô</b> = tên cột + tên hàng, ví dụ <b>B3</b>.</p>`,
      svg: S.sheet({ title: 'Một trang tính', cols: ['A', 'B', 'C', 'D'], rows: [['Họ tên', 'Toán', 'Văn', 'Tin'], ['An', 8, 7, 9], ['Bình', 6, 8, 7], ['Chi', 9, 9, 8]], active: 'B3', formula: '6', note: 'Ô B3 (cột B, hàng 3) đang được chọn, chứa số 6' }), caption: 'Ô được kích hoạt có viền đậm; địa chỉ hiện ở hộp tên.' },
    { title: 'Vùng dữ liệu', html: `<p><b>Vùng</b> là các ô liền nhau tạo thành hình chữ nhật, kí hiệu <b>ô trên trái : ô dưới phải</b>. Ví dụ vùng <b>B2:D4</b> gồm 3 cột (B, C, D) × 3 hàng (2, 3, 4) = <b>9 ô</b>.</p>`,
      svg: S.sheet({ title: 'Vùng B2:D4', cols: ['A', 'B', 'C', 'D'], rows: [['Họ tên', 'Toán', 'Văn', 'Tin'], ['An', 8, 7, 9], ['Bình', 6, 8, 7], ['Chi', 9, 9, 8]], sel: ['B2', 'D4'], note: 'Vùng được chọn tô màu xanh: 3 cột × 3 hàng = 9 ô' }), caption: 'Số ô của vùng = số cột × số hàng.' },
    { title: 'Nhập và sửa dữ liệu', html: `<ul><li>Nháy chọn ô, gõ dữ liệu, nhấn Enter.</li><li>Sửa: nháy đúp ô (hoặc sửa trên thanh công thức). Xoá: chọn ô, nhấn Delete.</li><li>Mặc định, <b>dữ liệu số căn phải</b>, <b>dữ liệu văn bản căn trái</b> trong ô.</li></ul>
      <div class="box key">Địa chỉ ô: cột trước, hàng sau (B3). Vùng: B2:D4.</div>` }
  ],
  summary: 'Phần mềm bảng tính lưu dữ liệu dạng bảng, tính toán tự động, sắp xếp, lọc, vẽ biểu đồ. Trang tính gồm cột (A, B, C…), hàng (1, 2, 3…), ô; địa chỉ ô như B3. Vùng như B2:D4 có (số cột × số hàng) ô. Số căn phải, văn bản căn trái theo mặc định.',
  examples: [
    { title: 'Đọc địa chỉ ô', problem: 'Trong trang tính ở bước 2, ô nào chứa điểm Tin của Chi?', solution: 'Cột Tin là D, Chi ở hàng 4 → ô D4 (giá trị 8).' },
    { title: 'Đếm ô trong vùng', problem: 'Vùng A1:C5 có bao nhiêu ô?', solution: 'Cột A, B, C (3 cột) × hàng 1 đến 5 (5 hàng) = 15 ô.' },
    { title: 'Căn lề mặc định', problem: 'Gõ “An” vào A2 và 8 vào B2. Dữ liệu được căn thế nào?', solution: '“An” (văn bản) căn trái; 8 (số) căn phải.' }
  ],
  exercises: [
    { question: 'Viết địa chỉ ô nằm ở cột E, hàng 12.', hints: ['Địa chỉ = tên cột + tên hàng.', 'Cột viết trước.'], solution: 'E12.' },
    { question: 'Vùng B3:E10 có bao nhiêu ô?', hints: ['Đếm số cột từ B đến E.', 'Đếm số hàng từ 3 đến 10.'], solution: '4 cột × 8 hàng = 32 ô.' },
    { question: 'Nêu hai ưu điểm của bảng tính so với ghi điểm trên giấy.', hints: ['Khi sửa một điểm thì sao?', 'Khi cần tính trung bình thì sao?'], solution: 'Tính toán tự động, cập nhật ngay khi sửa dữ liệu; dễ sắp xếp, tìm kiếm, vẽ biểu đồ.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Ô C5 nằm ở cột C, hàng 5.', answer: true, explain: 'Cột trước, hàng sau.' },
    { type: 'mcq', q: 'Tên các cột trong trang tính được đặt bằng:', options: ['số', 'chữ cái', 'màu sắc', 'kí hiệu toán'], answer: 1, explain: 'Cột A, B, C…' },
    { type: 'short', q: 'Vùng A1:D3 có bao nhiêu ô?', answer: '12', unit: 'ô', calc: '4*3', explain: '4 cột × 3 hàng.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mặc định, dữ liệu số được căn trái trong ô.', answer: false, explain: 'Số căn phải.' },
    { type: 'mcq', q: 'Giao của một hàng và một cột gọi là:', options: ['trang tính', 'vùng', 'ô', 'sổ tính'], answer: 2, explain: 'Đó là ô.' },
    { type: 'short', q: 'Vùng B2:F11 có bao nhiêu ô?', answer: '50', unit: 'ô', calc: '5*10', explain: '5 cột (B–F) × 10 hàng (2–11).' },
    { type: 'mcq', q: 'Để sửa dữ liệu trong một ô, em có thể:', options: ['nháy đúp vào ô', 'tắt máy', 'nhấn Ctrl+P', 'đổi tên trang tính'], answer: 0, explain: 'Nháy đúp hoặc sửa trên thanh công thức.' },
    { type: 'mcq', q: 'Kí hiệu vùng đúng là:', options: ['A1-C3', 'A1:C3', 'A1;C3', 'A1/C3'], answer: 1, explain: 'Dùng dấu hai chấm.' }
  ]
});
})();
