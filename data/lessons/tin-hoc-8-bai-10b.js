/* Tin học 8 – Bài 10b. Thêm văn bản, tạo hiệu ứng cho ảnh. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-8/bai-10b', {
  objectives: [
    'Thêm được chữ vào ảnh bằng công cụ văn bản; định dạng phông, cỡ, màu chữ.',
    'Điều chỉnh được độ sáng, độ tương phản, màu sắc; áp dụng được bộ lọc (filter) tạo hiệu ứng.',
    'Lựa chọn được hiệu ứng phù hợp, giữ trung thực khi ảnh dùng làm thông tin.'
  ],
  intro: 'Một tấm ảnh phong cảnh thêm dòng chữ “Chào mừng năm học mới” và chút hiệu ứng ấm áp sẽ trở thành tấm thiệp, áp phích ấn tượng.',
  steps: [
    { title: 'Thêm chữ', html: `<p>Chọn công cụ <b>Text</b> (biểu tượng chữ A), nháy vào ảnh, gõ nội dung. Chọn phông, cỡ, màu ở bảng tuỳ chọn. Chữ được tạo trên <b>một lớp riêng</b>, có thể di chuyển, sửa lại bất cứ lúc nào (trước khi xuất ảnh).</p>`,
      svg: S.layers({ title: 'Áp phích “Ngày hội đọc sách”', items: ['Lớp chữ: tiêu đề', 'Lớp chữ: thời gian, địa điểm', 'Lớp ảnh: giá sách'], active: 0, note: 'Mỗi dòng chữ là một lớp riêng, dễ chỉnh sửa' }), caption: 'Chữ nằm trên các lớp riêng.' },
    { title: 'Chỉnh độ sáng và màu', html: `<p><b>Colors → Brightness-Contrast</b>: tăng/giảm độ sáng, độ tương phản. <b>Colors → Hue-Saturation</b>: đổi sắc màu, độ bão hoà. <b>Colors → Desaturate</b>: chuyển ảnh đen trắng.</p>` },
    { title: 'Bộ lọc tạo hiệu ứng', html: `<p>Menu <b>Filters</b> có nhiều hiệu ứng: làm mờ (Blur), làm nét (Sharpen), đổ bóng (Drop Shadow), hiệu ứng nghệ thuật… Dùng vừa phải để ảnh không bị giả.</p>`,
      svg: S.table({ title: 'Một số điều chỉnh và hiệu ứng', head: ['Lệnh', 'Tác dụng'], rows: [['Brightness-Contrast', 'Sáng hơn / tối hơn, rõ hơn'], ['Hue-Saturation', 'Đổi màu, độ rực màu'], ['Desaturate', 'Chuyển thành ảnh xám'], ['Blur', 'Làm mờ (ví dụ làm mờ nền)'], ['Drop Shadow', 'Đổ bóng cho chữ, hình']], colW: 230 }), caption: 'Các lệnh thường dùng.' },
    { title: 'Trung thực khi chỉnh ảnh', html: `<p>Ảnh dùng làm thông tin (báo cáo, tin tức) chỉ nên chỉnh sáng, cắt, xoay; không thêm/xoá chi tiết làm sai sự thật. Với ảnh nghệ thuật, thiệp, cần ghi rõ là ảnh đã chỉnh sửa khi cần.</p>
      <div class="box key">Chữ – lớp riêng; hiệu ứng – vừa phải; thông tin – trung thực.</div>` }
  ],
  summary: 'Công cụ Text thêm chữ trên lớp riêng, định dạng phông, cỡ, màu. Colors: Brightness-Contrast, Hue-Saturation, Desaturate để chỉnh sáng, màu. Filters: Blur, Sharpen, Drop Shadow… tạo hiệu ứng. Dùng hiệu ứng vừa phải; ảnh làm thông tin phải trung thực.',
  examples: [
    { title: 'Chữ dễ đọc trên ảnh', problem: 'Chữ trắng trên nền trời sáng khó đọc. Cải thiện thế nào?', solution: 'Đổi chữ màu đậm, hoặc thêm Drop Shadow, hoặc làm tối/làm mờ vùng nền sau chữ.' },
    { title: 'Ảnh đen trắng', problem: 'Muốn ảnh có cảm giác cổ điển. Dùng lệnh nào?', solution: 'Colors → Desaturate (chuyển xám), có thể thêm chút màu nâu bằng Hue-Saturation.' },
    { title: 'Trung thực', problem: 'Bạn muốn xoá vết rác trong ảnh hiện trường cho bài báo cáo môi trường. Có nên không?', solution: 'Không, vì làm sai lệch thông tin; ảnh báo cáo phải phản ánh đúng thực tế.' }
  ],
  exercises: [
    { question: 'Mô tả các bước thêm dòng chữ “Lớp 8A” màu vàng, cỡ 48 lên ảnh.', hints: ['Chọn công cụ nào?', 'Thiết lập ở đâu?'], solution: 'Chọn Text → nháy vào ảnh → gõ “Lớp 8A” → ở tuỳ chọn công cụ chọn cỡ 48, màu vàng → di chuyển chữ đến vị trí phù hợp.' },
    { question: 'Vì sao nên dùng hiệu ứng vừa phải?', hints: ['Người xem cảm nhận thế nào?', 'Ảnh còn tự nhiên không?'], solution: 'Lạm dụng làm ảnh giả, rối mắt, che mất nội dung chính.' },
    { question: 'Áp phích có 1 lớp ảnh nền và 3 dòng chữ, mỗi dòng một lớp, thêm 1 lớp logo. Tổng số lớp?', hints: ['Đếm từng loại.', '1 + 3 + 1.'], solution: '5 lớp.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Chữ thêm bằng công cụ Text nằm trên một lớp riêng.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Lệnh chuyển ảnh màu thành ảnh xám:', options: ['Desaturate', 'Blur', 'Crop', 'Scale'], answer: 0, explain: 'Desaturate.' },
    { type: 'mcq', q: 'Muốn làm mờ hậu cảnh, dùng bộ lọc:', options: ['Sharpen', 'Blur', 'Text', 'Rotate'], answer: 1, explain: 'Blur.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Ảnh dùng trong tin tức có thể tuỳ ý thêm, xoá chi tiết.', answer: false, explain: 'Phải trung thực.' },
    { type: 'mcq', q: 'Lệnh chỉnh độ sáng và độ tương phản:', options: ['Brightness-Contrast', 'Hue-Saturation', 'Drop Shadow', 'Flip'], answer: 0, explain: 'Brightness-Contrast.' },
    { type: 'short', q: 'Ảnh nền + 4 lớp chữ + 2 lớp hình. Tổng số lớp?', answer: '7', unit: 'lớp', calc: '1+4+2', explain: '7.' },
    { type: 'short', q: 'Chữ cỡ 36, phóng to thêm 50%. Cỡ chữ mới?', answer: '54', calc: '36*1.5', explain: '54.' },
    { type: 'mcq', q: 'Đổ bóng cho chữ dùng hiệu ứng:', options: ['Drop Shadow', 'Desaturate', 'Crop', 'Scale Image'], answer: 0, explain: 'Drop Shadow.' }
  ]
});
})();
