/* Tin học 9 – Bài 15. Bài toán tin học. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-9/bai-15', {
  objectives: [
    'Xác định được bài toán tin học: dữ liệu vào (input), kết quả ra (output), yêu cầu xử lí.',
    'Chia được bài toán thành các bài toán con và mô tả bằng sơ đồ phân cấp.',
    'Hiểu được vai trò của chương trình con (khối lệnh tự định nghĩa) trong việc giải bài toán.'
  ],
  intro: 'Viết chương trình vẽ một ngôi nhà gồm thân nhà, mái, cửa – nếu viết một mạch dài sẽ rất rối. Chia thành các <b>bài toán con</b>, mỗi phần một chương trình con, mọi thứ trở nên gọn gàng.',
  steps: [
    { title: 'Bài toán tin học', html: `<p>Một bài toán tin học được xác định bởi: <b>Input</b> (dữ liệu vào), <b>Output</b> (kết quả cần đưa ra) và yêu cầu xử lí. Ví dụ: Input – điểm 3 môn; Output – điểm trung bình và xếp loại.</p>`,
      svg: S.ipo({ title: 'Bài toán tính điểm trung bình', input: 'Điểm Toán, Văn, Anh', process: 'Tính trung bình, xếp loại', output: 'Điểm trung bình, xếp loại', storage: false }), caption: 'Xác định Input – xử lí – Output.' },
    { title: 'Chia thành bài toán con', html: `<p>Bài toán lớn được chia thành các bài toán con độc lập, mỗi bài toán con có thể chia tiếp – tạo thành <b>sơ đồ phân cấp</b>.</p>`,
      svg: S.folderTree({ title: 'Sơ đồ phân cấp: vẽ ngôi nhà', root: { name: 'Vẽ ngôi nhà', children: [{ name: 'Vẽ thân nhà', children: ['Vẽ hình vuông'] }, { name: 'Vẽ mái', children: ['Vẽ tam giác'] }, { name: 'Vẽ cửa', children: ['Vẽ hình chữ nhật'] }] } }), caption: 'Mỗi nhánh là một bài toán con.' },
    { title: 'Chương trình con trong Scratch', html: `<p>Scratch cho phép <b>tạo khối lệnh</b> (Các khối của tôi → Tạo một khối): định nghĩa một lần, gọi nhiều lần, có thể có tham số (ví dụ độ dài cạnh).</p>`,
      svg: S.blocks({ title: 'Khối tự định nghĩa “vẽ hình vuông cạnh”', stack: [{ k: 'event', s: 'định nghĩa vẽ hình vuông (cạnh)' }, { k: 'control', s: 'lặp lại 4 lần', inner: [{ k: 'motion', s: 'di chuyển (cạnh) bước' }, { k: 'motion', s: 'xoay ↻ 90 độ' }] }] }), caption: 'Gọi “vẽ hình vuông 100” để vẽ thân nhà.' },
    { title: 'Lợi ích của việc chia nhỏ', html: `<ul><li>Dễ hiểu, dễ viết, dễ kiểm tra từng phần.</li><li>Dùng lại chương trình con nhiều lần.</li><li>Nhiều người cùng làm, mỗi người một phần.</li></ul>
      <div class="box key">Input – Output – xử lí; chia bài toán con; chương trình con dùng lại được.</div>` }
  ],
  summary: 'Bài toán tin học xác định bởi Input, Output và yêu cầu xử lí. Chia bài toán lớn thành các bài toán con theo sơ đồ phân cấp. Chương trình con (khối tự định nghĩa trong Scratch, có thể có tham số) giúp chương trình gọn, dễ kiểm tra, dùng lại, làm việc nhóm.',
  examples: [
    { title: 'Xác định Input/Output', problem: 'Bài toán: đổi nhiệt độ từ °C sang °F. Input, Output?', solution: 'Input: nhiệt độ °C. Output: nhiệt độ °F = °C × 1,8 + 32.' },
    { title: 'Tính kết quả', problem: 'Với 25 °C, chương trình phải cho kết quả bao nhiêu °F?', solution: '25 × 1,8 + 32 = 77 °F.' },
    { title: 'Chia bài toán', problem: 'Chia bài toán “quản lí thư viện lớp” thành các bài toán con.', solution: 'Nhập sách; cho mượn; nhận trả; tìm kiếm sách; thống kê.' }
  ],
  exercises: [
    { question: 'Xác định Input, Output của bài toán tính tiền điện theo số kWh.', hints: ['Người dùng nhập gì?', 'Chương trình đưa ra gì?'], solution: 'Input: số kWh đã dùng (và bảng giá). Output: số tiền phải trả.' },
    { question: 'Vẽ (mô tả) sơ đồ phân cấp cho bài toán “vẽ lá cờ có ngôi sao”.', hints: ['Lá cờ gồm những phần nào?', 'Mỗi phần là hình gì?'], solution: 'Vẽ lá cờ → vẽ nền (hình chữ nhật), vẽ ngôi sao (5 cánh); có thể thêm vẽ cán cờ.' },
    { question: 'Khối “vẽ hình vuông (cạnh)” được gọi 3 lần với cạnh 50, 80, 100. Tổng quãng đường nhân vật di chuyển?', hints: ['Mỗi hình vuông đi 4 cạnh.', '4 × (50 + 80 + 100).'], solution: '920 bước.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Bài toán tin học được xác định bởi Input, Output và yêu cầu xử lí.', answer: true, explain: 'Đúng.' },
    { type: 'short', q: 'Đổi 30 °C sang °F theo công thức °C × 1,8 + 32. Kết quả?', answer: '86', unit: '°F', calc: '30*1.8+32', explain: '86.' },
    { type: 'mcq', q: 'Trong Scratch, tạo chương trình con bằng nhóm:', options: ['Các khối của tôi', 'Âm thanh', 'Hiển thị', 'Bút vẽ'], answer: 0, explain: 'Tạo một khối.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Chương trình con chỉ được gọi một lần duy nhất.', answer: false, explain: 'Gọi nhiều lần.' },
    { type: 'short', q: 'Gọi “vẽ hình vuông (cạnh)” với cạnh 60. Nhân vật di chuyển tổng bao nhiêu bước?', answer: '240', unit: 'bước', calc: '4*60', explain: '240.' },
    { type: 'mcq', q: 'Lợi ích của việc chia bài toán con:', options: ['dễ hiểu, dễ kiểm tra, dùng lại', 'chương trình dài hơn', 'khó sửa lỗi hơn', 'không làm nhóm được'], answer: 0, explain: 'Đúng.' },
    { type: 'short', q: 'Điểm 3 môn 7, 8, 9. Output điểm trung bình?', answer: '8', calc: '(7+8+9)/3', explain: '8.' },
    { type: 'mcq', q: 'Với bài toán đổi °C sang °F, Input là:', options: ['nhiệt độ °C', 'nhiệt độ °F', 'công thức', 'máy tính'], answer: 0, explain: '°C.' }
  ]
});
})();
