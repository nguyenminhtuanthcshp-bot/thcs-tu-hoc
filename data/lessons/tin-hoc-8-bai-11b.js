/* Tin học 8 – Bài 11b. Thực hành tổng hợp (chỉnh sửa ảnh). Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-8/bai-11b', {
  objectives: [
    'Lập được kế hoạch và thực hiện một sản phẩm ảnh hoàn chỉnh (thiệp, áp phích, bìa).',
    'Phối hợp được các kĩ năng: cắt, đổi kích thước, chỉnh màu, thêm chữ, sắp xếp lớp, xuất ảnh.',
    'Tự đánh giá sản phẩm theo tiêu chí; tôn trọng bản quyền ảnh sử dụng.'
  ],
  intro: 'Trường tổ chức “Tuần lễ xanh”. Nhóm em được giao làm áp phích cỡ 1 080 × 1 350 điểm ảnh để đăng trên trang của trường. Hãy dùng tất cả kĩ năng đã học!',
  steps: [
    { title: 'Lập kế hoạch', html: `<p>Xác định mục đích, người xem, kích thước, nội dung chữ, ảnh sẽ dùng (tự chụp hoặc được phép dùng), phác thảo bố cục trên giấy.</p>`,
      svg: S.flow({ items: ['Mục đích, kích thước', 'Phác thảo bố cục', 'Chuẩn bị ảnh', 'Chỉnh sửa, ghép lớp', 'Xuất ảnh, đánh giá'], size: 12, label: 'Quy trình làm áp phích' }), caption: 'Lập kế hoạch trước khi làm.' },
    { title: 'Chuẩn bị ảnh', html: `<p>Mở ảnh, <b>cắt</b> theo tỉ lệ 4:5, <b>đổi kích thước</b> về 1 080 × 1 350, chỉnh <b>độ sáng, màu</b> cho tươi sáng.</p>`,
      svg: S.cropBox({ title: 'Cắt ảnh 1 600 × 1 200 theo tỉ lệ 4:5', w: 1600, h: 1200, crop: [320, 0, 960, 1200], note: 'Giữ chiều cao 1 200, rộng 960 (tỉ lệ 4:5), rồi thu nhỏ về 1 080 × 1 350' }), caption: 'Cắt đúng tỉ lệ trước khi đổi kích thước.' },
    { title: 'Ghép chữ và hiệu ứng', html: `<p>Thêm các lớp chữ: tiêu đề lớn, khẩu hiệu, thời gian – địa điểm; đổ bóng cho chữ để dễ đọc; sắp xếp lớp hợp lí.</p>`,
      svg: S.layers({ title: 'Các lớp của áp phích “Tuần lễ xanh”', items: ['Chữ: TUẦN LỄ XANH', 'Chữ: khẩu hiệu', 'Chữ: thời gian, địa điểm', 'Ảnh: cây xanh đã chỉnh màu'], active: 0 }), caption: 'Mỗi thành phần một lớp.' },
    { title: 'Xuất ảnh và đánh giá', html: `<p>Lưu .xcf để sửa sau; xuất .png hoặc .jpg. Đánh giá: nội dung rõ, chữ dễ đọc, màu hài hoà, đúng kích thước, có ghi nguồn ảnh nếu không tự chụp.</p>
      <div class="box key">Kế hoạch → ảnh → lớp chữ → hiệu ứng → xuất → đánh giá.</div>` }
  ],
  summary: 'Làm sản phẩm ảnh: lập kế hoạch (mục đích, kích thước, bố cục) – chuẩn bị ảnh (cắt đúng tỉ lệ, đổi kích thước, chỉnh màu) – thêm các lớp chữ, hiệu ứng – lưu .xcf, xuất .png/.jpg – đánh giá theo tiêu chí, tôn trọng bản quyền.',
  examples: [
    { title: 'Tỉ lệ', problem: 'Kích thước 1 080 × 1 350 có tỉ lệ rộng : cao là bao nhiêu?', solution: '1 080 : 1 350 = 4 : 5.' },
    { title: 'Cắt đúng tỉ lệ', problem: 'Ảnh 2 000 × 1 500, cắt theo tỉ lệ 4:5 giữ toàn bộ chiều cao. Chiều rộng vùng cắt?', solution: '1 500 × 4 : 5 = 1 200 điểm ảnh.' },
    { title: 'Đánh giá', problem: 'Áp phích có chữ vàng trên nền trời vàng nhạt. Góp ý?', solution: 'Chữ khó đọc; đổi màu chữ đậm hơn hoặc thêm đổ bóng, viền chữ.' }
  ],
  exercises: [
    { question: 'Lập danh sách các lớp cho một tấm thiệp sinh nhật.', hints: ['Nền, hình trang trí.', 'Các dòng chữ.'], solution: 'Ví dụ: nền màu; ảnh bánh sinh nhật; chữ “Chúc mừng sinh nhật”; chữ tên người nhận; lời chúc.' },
    { question: 'Ảnh 1 200 × 1 500 thu nhỏ giữ tỉ lệ để rộng 1 080. Chiều cao mới?', hints: ['Tỉ lệ 1 080 : 1 200 = 0,9.', '1 500 × 0,9.'], solution: '1 350 điểm ảnh.' },
    { question: 'Nêu bốn tiêu chí đánh giá một áp phích.', hints: ['Về nội dung, chữ.', 'Về màu, kích thước, bản quyền.'], solution: 'Nội dung rõ; chữ dễ đọc; màu hài hoà; đúng kích thước, ảnh hợp pháp có ghi nguồn.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nên lập kế hoạch, phác thảo bố cục trước khi chỉnh sửa ảnh.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Để sửa áp phích sau này, nên lưu dạng:', options: ['.xcf', '.jpg', '.txt', '.mp4'], answer: 0, explain: '.xcf giữ lớp.' },
    { type: 'short', q: 'Ảnh cao 1 500, cắt tỉ lệ 4:5 giữ nguyên chiều cao. Chiều rộng vùng cắt?', answer: '1200', answerText: '1 200', unit: 'điểm ảnh', calc: '1500*4/5', explain: '1 200.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Có thể dùng mọi ảnh trên mạng cho áp phích mà không cần quan tâm bản quyền.', answer: false, explain: 'Phải dùng ảnh hợp pháp.' },
    { type: 'short', q: 'Ảnh 1 200 × 1 500 thu nhỏ giữ tỉ lệ còn rộng 1 080. Chiều cao mới?', answer: '1350', answerText: '1 350', unit: 'điểm ảnh', calc: '1500*1080/1200', explain: '1 350.' },
    { type: 'mcq', q: 'Chữ khó đọc trên nền rối, giải pháp tốt là:', options: ['thêm đổ bóng hoặc làm mờ nền', 'thu nhỏ chữ', 'dùng màu giống nền', 'xoá chữ'], answer: 0, explain: 'Tăng tương phản.' },
    { type: 'short', q: 'Kích thước 1 080 × 1 350 có bao nhiêu điểm ảnh?', answer: '1458000', answerText: '1 458 000', unit: 'điểm ảnh', calc: '1080*1350', explain: '1 458 000.' },
    { type: 'mcq', q: 'Bước cuối cùng của quy trình là:', options: ['Xuất ảnh và đánh giá', 'Phác thảo', 'Chuẩn bị ảnh', 'Chọn mục đích'], answer: 0, explain: 'Xuất và đánh giá.' }
  ]
});
})();
