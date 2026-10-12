/* Tin học 6 – Bài 11. Định dạng văn bản. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-6/bai-11', {
  objectives: [
    'Nêu được chức năng đặc trưng của phần mềm soạn thảo văn bản.',
    'Thực hiện được các thao tác định dạng kí tự, định dạng đoạn văn bản.',
    'Thực hiện được việc định dạng trang (hướng giấy, lề trang) và in văn bản.'
  ],
  intro: 'Cùng một nội dung, nhưng một thông báo có tiêu đề nổi bật, đoạn văn ngay ngắn sẽ dễ đọc hơn nhiều so với một khối chữ lộn xộn. Phần mềm soạn thảo văn bản giúp em làm điều đó nhờ các lệnh <b>định dạng</b>.',
  steps: [
    { title: 'Phần mềm soạn thảo văn bản', html: `<p>Phần mềm soạn thảo văn bản (ví dụ Microsoft Word, LibreOffice Writer, Google Tài liệu) giúp <b>nhập</b>, <b>chỉnh sửa</b>, <b>định dạng</b>, <b>lưu</b> và <b>in</b> văn bản.</p>
      <p><b>Định dạng văn bản</b> là thay đổi cách trình bày (kiểu chữ, cỡ chữ, căn lề…) để văn bản rõ ràng, đẹp mắt.</p>` },
    { title: 'Định dạng kí tự', html: `<p>Định dạng kí tự gồm: <b>phông chữ</b>, <b>cỡ chữ</b>, <b>kiểu chữ</b> (<b>đậm</b>, <i>nghiêng</i>, <u>gạch chân</u>), <b>màu chữ</b>.</p>
      <p>Cách làm: chọn (bôi đen) phần văn bản, rồi chọn lệnh định dạng trên thanh công cụ. Phím tắt thường dùng: Ctrl+B (đậm), Ctrl+I (nghiêng), Ctrl+U (gạch chân).</p>` },
    { title: 'Định dạng đoạn văn bản', html: `<p>Định dạng đoạn gồm: <b>căn lề</b> (trái, giữa, phải, đều hai bên), <b>thụt lề</b>, <b>khoảng cách giữa các dòng</b>, <b>khoảng cách giữa các đoạn</b>.</p>
      <p>Đặt con trỏ vào đoạn (hoặc chọn nhiều đoạn) rồi chọn lệnh.</p>`,
      svg: S.docPage(), caption: 'Một thông báo đã được định dạng: tiêu đề căn giữa, chữ đậm; nội dung căn đều hai lề.' },
    { title: 'Định dạng trang và in', html: `<p><b>Định dạng trang</b>: chọn hướng giấy (dọc/ngang), kích thước giấy (thường là A4), lề trang (trên, dưới, trái, phải).</p>
      <p>Trước khi in, nên <b>xem trước</b> (Print Preview) để kiểm tra, rồi chọn máy in, số bản in.</p>
      <div class="box key">Chọn văn bản trước – rồi mới chọn lệnh định dạng.</div>` }
  ],
  summary: 'Phần mềm soạn thảo giúp nhập, sửa, định dạng, lưu, in văn bản. Định dạng kí tự: phông, cỡ, kiểu (đậm, nghiêng, gạch chân), màu. Định dạng đoạn: căn lề, thụt lề, khoảng cách dòng, đoạn. Định dạng trang: hướng giấy, khổ giấy, lề. Xem trước khi in.',
  examples: [
    { title: 'Chọn lệnh', problem: 'Muốn tiêu đề “THÔNG BÁO” nằm giữa dòng và in đậm, em làm gì?', solution: 'Chọn dòng tiêu đề, nhấn lệnh căn giữa và lệnh chữ đậm (Ctrl+B).' },
    { title: 'Phân loại định dạng', problem: 'Thay đổi khoảng cách giữa các dòng là định dạng kí tự hay định dạng đoạn?', solution: 'Định dạng đoạn văn bản.' },
    { title: 'Tính số trang', problem: 'Một bài viết dài 5 trang, em in 3 bản. Cần bao nhiêu tờ giấy nếu in một mặt?', solution: '5 × 3 = 15 tờ.' }
  ],
  exercises: [
    { question: 'Kể tên ba thao tác định dạng kí tự và hai thao tác định dạng đoạn văn bản.', hints: ['Kí tự: những gì làm thay đổi hình dạng chữ.', 'Đoạn: căn lề, khoảng cách…'], solution: 'Kí tự: phông chữ, cỡ chữ, chữ đậm (hoặc nghiêng, gạch chân, màu). Đoạn: căn lề, khoảng cách giữa các dòng (hoặc thụt lề, khoảng cách đoạn).' },
    { question: 'Vì sao nên xem trước văn bản trước khi in?', hints: ['Nghĩ đến lỗi trình bày có thể có.', 'Nghĩ đến việc tiết kiệm giấy, mực.'], solution: 'Để phát hiện lỗi trình bày (lề, ngắt trang…) và sửa trước khi in, tránh lãng phí giấy, mực.' },
    { question: 'Một tờ giấy A4 có chiều rộng 21 cm. Lề trái 3 cm, lề phải 2 cm. Chiều rộng vùng soạn thảo là bao nhiêu xăng-ti-mét?', hints: ['Lấy chiều rộng trang trừ đi hai lề.', '21 − 3 − 2.'], solution: '21 − 3 − 2 = 16 cm.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Muốn định dạng kí tự, trước tiên cần chọn phần văn bản cần định dạng.', answer: true, explain: 'Chọn văn bản rồi mới chọn lệnh.' },
    { type: 'mcq', q: 'Tổ hợp phím Ctrl+B thường dùng để:', options: ['in nghiêng', 'in đậm', 'gạch chân', 'căn giữa'], answer: 1, explain: 'B – Bold: chữ đậm.' },
    { type: 'mcq', q: 'Căn lề đều hai bên thuộc loại định dạng:', options: ['kí tự', 'đoạn văn bản', 'trang', 'tệp'], answer: 1, explain: 'Căn lề là định dạng đoạn.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hướng giấy dọc hay ngang là một định dạng kí tự.', answer: false, explain: 'Đó là định dạng trang.' },
    { type: 'short', q: 'Trang giấy rộng 21 cm, lề trái 2,5 cm, lề phải 2 cm. Vùng soạn thảo rộng bao nhiêu cm?', answer: '16,5', unit: 'cm', calc: '21-2.5-2', explain: '21 − 2,5 − 2 = 16,5.' },
    { type: 'mcq', q: 'Phần mềm nào dùng để soạn thảo văn bản?', options: ['Paint', 'LibreOffice Writer', 'Scratch', 'Calculator'], answer: 1, explain: 'Writer là phần mềm soạn thảo.' },
    { type: 'short', q: 'In 4 bản một văn bản 6 trang (mỗi tờ in một trang). Cần bao nhiêu tờ giấy?', answer: '24', unit: 'tờ', calc: '4*6', explain: '4 × 6 = 24.' },
    { type: 'mcq', q: 'Nên làm gì trước khi in để tránh lãng phí?', options: ['Xem trước khi in', 'In ngay nhiều bản', 'Xoá văn bản', 'Tắt máy in'], answer: 0, explain: 'Xem trước để kiểm tra.' }
  ]
});
})();
