/* Tin học 6 – Bài 12. Trình bày thông tin ở dạng bảng. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-6/bai-12', {
  objectives: [
    'Nêu được ưu điểm của việc trình bày thông tin ở dạng bảng.',
    'Thực hiện được việc tạo bảng, nhập dữ liệu vào bảng.',
    'Thực hiện được thao tác chỉnh sửa bảng: chèn, xoá hàng, cột; gộp, tách ô; điều chỉnh độ rộng cột.'
  ],
  intro: 'Thời khoá biểu, bảng điểm, danh sách lớp… đều được trình bày dạng bảng. Vì sao bảng giúp ta đọc thông tin nhanh hơn, và làm thế nào để tạo bảng trong phần mềm soạn thảo?',
  steps: [
    { title: 'Ưu điểm của bảng', html: `<p><b>Bảng</b> gồm các <b>hàng</b> (ngang) và <b>cột</b> (dọc); giao của một hàng và một cột là một <b>ô</b>.</p>
      <p>Trình bày bằng bảng giúp thông tin <b>cô đọng</b>, <b>dễ so sánh</b>, <b>dễ tìm kiếm</b>.</p>`,
      svg: S.table({ title: 'Thời khoá biểu (một phần)', head: ['Tiết', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư'], rows: [['1', 'Chào cờ', 'Toán', 'Tin học'], ['2', 'Ngữ văn', 'KHTN', 'Toán'], ['3', 'Toán', 'Tiếng Anh', 'Ngữ văn']], hl: [1, 2], colW: 130, note: 'Ô tô vàng nằm ở hàng tiết 2, cột Thứ Ba' }), caption: 'Bảng gồm hàng, cột, ô; hàng đầu tiên là hàng tiêu đề.' },
    { title: 'Tạo bảng', html: `<ol><li>Đặt con trỏ tại vị trí cần tạo bảng.</li><li>Chọn lệnh <b>Insert → Table</b> (Chèn → Bảng).</li><li>Chọn số cột, số hàng; nháy chuột để tạo.</li><li>Nháy vào từng ô để nhập dữ liệu; dùng phím <b>Tab</b> để sang ô kế tiếp.</li></ol>` },
    { title: 'Chỉnh sửa bảng', html: `<ul><li><b>Chèn</b> hàng/cột: chèn phía trên, dưới, trái, phải ô đang chọn.</li><li><b>Xoá</b> hàng, cột hoặc cả bảng.</li><li><b>Gộp ô</b> (Merge Cells): gộp nhiều ô thành một; <b>tách ô</b> (Split Cells): chia một ô thành nhiều ô.</li><li>Kéo đường biên để thay đổi độ rộng cột, chiều cao hàng.</li></ul>` },
    { title: 'Dùng bảng hợp lí', html: `<p>Nên dùng bảng khi thông tin có nhiều đối tượng cần so sánh theo cùng các tiêu chí. Hàng đầu nên là hàng tiêu đề, có định dạng nổi bật.</p>
      <div class="box key">Số ô của bảng = số hàng × số cột.</div>` }
  ],
  summary: 'Bảng gồm hàng, cột, ô; giúp thông tin cô đọng, dễ so sánh, dễ tìm. Tạo bảng: Insert → Table, chọn số hàng, cột. Chỉnh sửa: chèn, xoá hàng/cột; gộp, tách ô; thay đổi độ rộng cột. Số ô = số hàng × số cột.',
  examples: [
    { title: 'Đếm ô', problem: 'Một bảng có 5 hàng và 4 cột. Bảng có bao nhiêu ô?', solution: '5 × 4 = 20 ô.' },
    { title: 'Chọn thao tác', problem: 'Bảng danh sách lớp thiếu một bạn ở cuối. Em làm gì?', solution: 'Chọn hàng cuối, dùng lệnh chèn hàng phía dưới (Insert Below) rồi nhập thông tin.' },
    { title: 'Gộp ô', problem: 'Muốn dòng tiêu đề “BẢNG ĐIỂM HỌC KÌ I” nằm trên toàn bộ chiều rộng bảng, em làm gì?', solution: 'Chọn các ô của hàng đầu và dùng lệnh gộp ô (Merge Cells).' }
  ],
  exercises: [
    { question: 'Nêu hai ưu điểm của việc trình bày thông tin dạng bảng so với viết thành đoạn văn.', hints: ['Dễ làm gì với các số liệu?', 'Tìm một thông tin cụ thể có nhanh không?'], solution: 'Dễ so sánh số liệu; dễ tìm kiếm thông tin; trình bày cô đọng, rõ ràng.' },
    { question: 'Lập (bằng lời) cấu trúc một bảng theo dõi đọc sách của tổ em gồm những cột nào?', hints: ['Mỗi hàng là một bạn.', 'Các cột là các thông tin cần ghi: tên sách, số trang…'], solution: 'Ví dụ: STT, Họ tên, Tên sách, Số trang đã đọc, Ngày hoàn thành.' },
    { question: 'Bảng có 6 hàng, 5 cột. Em chèn thêm 2 hàng. Bảng mới có bao nhiêu ô?', hints: ['Số hàng mới: 6 + 2.', 'Số ô = số hàng × số cột.'], solution: '(6 + 2) × 5 = 40 ô.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Giao của một hàng và một cột trong bảng gọi là ô.', answer: true, explain: 'Đúng khái niệm ô.' },
    { type: 'short', q: 'Bảng có 7 hàng, 3 cột. Bảng có bao nhiêu ô?', answer: '21', unit: 'ô', calc: '7*3', explain: '7 × 3 = 21.' },
    { type: 'mcq', q: 'Lệnh tạo bảng trong phần mềm soạn thảo thường nằm ở:', options: ['Insert → Table', 'File → Exit', 'View → Zoom', 'Home → Bold'], answer: 0, explain: 'Chèn bảng bằng Insert → Table.' },
    { type: 'mcq', q: 'Muốn gộp nhiều ô thành một ô, dùng lệnh:', options: ['Split Cells', 'Merge Cells', 'Delete Table', 'Insert Below'], answer: 1, explain: 'Merge Cells – gộp ô.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Sau khi tạo bảng thì không thể thêm hàng mới.', answer: false, explain: 'Có thể chèn hàng, cột bất cứ lúc nào.' },
    { type: 'mcq', q: 'Phím nào giúp di chuyển sang ô kế tiếp trong bảng?', options: ['Tab', 'Esc', 'Delete', 'Caps Lock'], answer: 0, explain: 'Phím Tab.' },
    { type: 'short', q: 'Bảng có 4 hàng, 4 cột; em xoá 1 cột. Bảng còn bao nhiêu ô?', answer: '12', unit: 'ô', calc: '4*(4-1)', explain: '4 × 3 = 12.' },
    { type: 'mcq', q: 'Trình bày thông tin dạng bảng giúp:', options: ['khó so sánh hơn', 'dễ so sánh, dễ tìm kiếm', 'văn bản dài hơn', 'không in được'], answer: 1, explain: 'Bảng giúp dễ so sánh, tìm kiếm.' }
  ]
});
})();
