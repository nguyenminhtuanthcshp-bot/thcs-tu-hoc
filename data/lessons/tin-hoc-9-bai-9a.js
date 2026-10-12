/* Tin học 9 – Bài 9a. Sử dụng công cụ xác thực dữ liệu. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-9/bai-9a', {
  objectives: [
    'Giải thích được mục đích của xác thực dữ liệu (Data Validation) trong bảng tính.',
    'Thiết lập được điều kiện: số nguyên/thập phân trong khoảng, danh sách chọn, độ dài văn bản.',
    'Tạo được thông báo hướng dẫn và thông báo lỗi khi nhập sai.'
  ],
  intro: 'Nhập điểm 85 thay vì 8,5, gõ “nam”, “Nam”, “NAM” lẫn lộn – những lỗi nhỏ này làm sai cả bảng tổng hợp. <b>Xác thực dữ liệu</b> ngăn lỗi ngay từ lúc nhập.',
  steps: [
    { title: 'Xác thực dữ liệu là gì?', html: `<p><b>Xác thực dữ liệu</b> là đặt điều kiện cho dữ liệu được phép nhập vào ô. Nếu nhập sai điều kiện, phần mềm báo lỗi hoặc cảnh báo. Lệnh: <b>Data → Data Validation</b>.</p>` },
    { title: 'Các loại điều kiện', html: `<p>Tab Settings, mục Allow:</p>`,
      svg: S.table({ title: 'Một số điều kiện xác thực', head: ['Allow', 'Ví dụ điều kiện'], rows: [['Whole number', 'Số nguyên từ 1 đến 45 (số thứ tự)'], ['Decimal', 'Số từ 0 đến 10 (điểm)'], ['List', 'Chọn một trong: Nam, Nữ'], ['Date', 'Ngày trong năm học'], ['Text length', 'Mã học sinh đúng 6 kí tự']], colW: 250 }), caption: 'Chọn loại điều kiện phù hợp với dữ liệu.' },
    { title: 'Danh sách chọn', html: `<p>Với List, nhập các giá trị cách nhau bởi dấu phẩy (hoặc chấm phẩy tuỳ cài đặt), ví dụ <code>Nam,Nữ</code>. Ô sẽ có nút ▼ để chọn, tránh gõ sai chính tả.</p>`,
      svg: S.sheet({ title: 'Cột Điểm chỉ nhận số từ 0 đến 10', cols: ['A', 'B', 'C'], rows: [['Họ tên', 'Giới tính ▼', 'Điểm'], ['An', 'Nam', '8,5'], ['Bình', 'Nữ', '85'], ['Chi', 'Nữ', '9']], active: 'C3', colW: 140, note: 'Nhập 85 vào C3 → hiện thông báo lỗi, không cho nhập' }), caption: 'Giá trị 85 vi phạm điều kiện 0 – 10.' },
    { title: 'Thông báo hướng dẫn và báo lỗi', html: `<ul><li><b>Input Message</b>: hiện gợi ý khi chọn ô (ví dụ “Nhập điểm từ 0 đến 10”).</li><li><b>Error Alert</b>: kiểu Stop (không cho nhập), Warning (cảnh báo, vẫn có thể nhập), Information (thông tin).</li></ul>
      <div class="box key">Data Validation: đặt điều kiện – gợi ý – báo lỗi, ngăn sai sót ngay khi nhập.</div>` }
  ],
  summary: 'Xác thực dữ liệu (Data → Data Validation) đặt điều kiện cho ô: số nguyên, số thập phân trong khoảng, danh sách chọn, ngày, độ dài văn bản. Input Message hiện gợi ý; Error Alert (Stop, Warning, Information) báo khi nhập sai. Giúp dữ liệu chính xác, thống nhất.',
  examples: [
    { title: 'Chọn điều kiện', problem: 'Cột “Số buổi vắng” chỉ nhận số nguyên từ 0 đến 30. Thiết lập thế nào?', solution: 'Allow: Whole number; Data: between; Minimum 0; Maximum 30.' },
    { title: 'Danh sách', problem: 'Cột “Xếp loại” chỉ nhận Tốt, Khá, Đạt, Chưa đạt.', solution: 'Allow: List; Source: Tốt,Khá,Đạt,Chưa đạt.' },
    { title: 'Kiểm tra giá trị', problem: 'Điều kiện số thập phân từ 0 đến 10. Giá trị nào bị từ chối: 7,5; 10; −1; 10,5?', solution: '−1 và 10,5.' }
  ],
  exercises: [
    { question: 'Thiết lập xác thực cho cột “Mã học sinh” có đúng 6 kí tự.', hints: ['Allow nào liên quan tới độ dài?', 'Điều kiện equal to.'], solution: 'Allow: Text length; Data: equal to; Length: 6.' },
    { question: 'Phân biệt kiểu báo lỗi Stop và Warning.', hints: ['Kiểu nào chặn hẳn?', 'Kiểu nào cho phép tiếp tục?'], solution: 'Stop không cho nhập giá trị sai; Warning cảnh báo nhưng người dùng vẫn có thể chọn nhập.' },
    { question: 'Điều kiện số nguyên từ 1 đến 45. Có bao nhiêu giá trị hợp lệ?', hints: ['Đếm các số nguyên từ 1 đến 45.', '45 − 1 + 1.'], solution: '45 giá trị.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Xác thực dữ liệu giúp hạn chế lỗi khi nhập.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Lệnh mở công cụ xác thực dữ liệu:', options: ['Data → Data Validation', 'Insert → Chart', 'Home → Merge', 'File → Print'], answer: 0, explain: 'Data Validation.' },
    { type: 'mcq', q: 'Để tạo ô có nút chọn Nam/Nữ, chọn Allow:', options: ['List', 'Decimal', 'Date', 'Text length'], answer: 0, explain: 'List.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Kiểu báo lỗi Warning luôn chặn hoàn toàn việc nhập giá trị sai.', answer: false, explain: 'Stop mới chặn.' },
    { type: 'short', q: 'Điều kiện số nguyên từ 0 đến 30. Có bao nhiêu giá trị hợp lệ?', answer: '31', calc: '30-0+1', explain: '31.' },
    { type: 'mcq', q: 'Với điều kiện số thập phân 0 – 10, giá trị bị từ chối là:', options: ['0', '9,5', '10', '11'], answer: 3, explain: '11 > 10.' },
    { type: 'short', q: 'Mã học sinh gồm 2 chữ cái và 4 chữ số. Đặt điều kiện độ dài bằng bao nhiêu kí tự?', answer: '6', unit: 'kí tự', calc: '2+4', explain: '6.' },
    { type: 'mcq', q: 'Gợi ý hiện ra khi chọn ô được thiết lập ở tab:', options: ['Input Message', 'Error Alert', 'Settings', 'Format'], answer: 0, explain: 'Input Message.' }
  ]
});
})();
