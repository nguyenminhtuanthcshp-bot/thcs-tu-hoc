/* Toán 6 – Chương IX. Luyện tập chung (sau Bài 43). Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
var spin = S.bar({ title: 'Kết quả 80 lần quay vòng quay 3 màu', cats: ['Đỏ', 'Xanh', 'Vàng'], series: [{ name: 'Số lần', values: [36, 28, 16] }], yMax: 40, yStep: 5, yLabel: 'Số lần' });
THCS.registerLesson('toan-6/c9-ltc-2', {
  objectives: [
    'Củng cố liệt kê kết quả có thể và phân loại sự kiện (chắc chắn, không thể, có thể).',
    'Tính thành thạo xác suất thực nghiệm từ bảng kiểm đếm, bảng số liệu, biểu đồ.',
    'Dùng xác suất thực nghiệm để ước lượng số lần xảy ra trong tình huống thực tế.'
  ],
  intro: 'Luyện tập Bài 42 và Bài 43: từ “có thể xảy ra hay không” đến “xảy ra thường xuyên đến mức nào”.',
  steps: [
    { title: 'Liệt kê kết quả', html: `<p>Liệt kê đầy đủ, không lặp. Với hai bước (tung 2 đồng xu), ghi theo thứ tự lần 1 – lần 2: SS, SN, NS, NN.</p>` },
    { title: 'Phân loại sự kiện', html: `<p>Chắc chắn – mọi kết quả đều làm sự kiện xảy ra; không thể – không kết quả nào; có thể – một số kết quả.</p>` },
    { title: 'Tính xác suất thực nghiệm', html: `<p>Xác suất thực nghiệm = {{k|n}}. Nhớ cộng số lần của mọi kết quả thuộc sự kiện.</p>`, svg: spin, caption: 'Số lần mũi tên chỉ vào mỗi màu sau 80 lần quay.' },
    { title: 'Ước lượng', html: `<p>Số lần dự đoán ≈ (tổng số lần mới) · (xác suất thực nghiệm).</p>` }
  ],
  summary: 'Liệt kê kết quả → xác định sự kiện → đếm số lần xảy ra → lập tỉ số → nhận xét, dự đoán.',
  examples: [
    { title: 'Theo biểu đồ', problem: 'Theo biểu đồ ở bước 3, tính xác suất thực nghiệm mũi tên chỉ vào màu đỏ.', solution: '{{36|80}} = {{9|20}} = <b>0,45</b>.' },
    { title: 'Sự kiện ghép', problem: 'Theo biểu đồ ở bước 3, tính xác suất thực nghiệm mũi tên <i>không</i> chỉ vào màu vàng.', solution: '36 + 28 = 64 lần ⇒ {{64|80}} = <b>0,8</b>.' },
    { title: 'Phân loại', problem: 'Rút một thẻ từ các thẻ 3, 6, 9, 12. Phân loại: A “số chia hết cho 3”; B “số lẻ”; C “số lớn hơn 20”.', solution: 'A: <b>chắc chắn</b>; B: <b>có thể</b> (3, 9); C: <b>không thể</b>.' }
  ],
  exercises: [
    { question: 'Theo biểu đồ ở bước 3, nếu quay thêm 200 lần, ước lượng mũi tên chỉ vào màu vàng bao nhiêu lần?', hints: ['Xác suất thực nghiệm màu vàng: {{16|80}}.', 'Nhân với 200.'], solution: '200 · {{16|80}} = <b>40 lần</b>.' },
    { question: 'Tung hai đồng xu 50 lần, được 12 lần SS, 26 lần có một sấp một ngửa, còn lại NN. Tính xác suất thực nghiệm của sự kiện “hai đồng xu cùng mặt”.', hints: ['Số lần NN = 50 − 12 − 26.', 'Cùng mặt = SS hoặc NN.'], solution: 'NN = 12 lần; cùng mặt: 24 lần ⇒ {{24|50}} = <b>0,48</b>.' },
    { question: 'Gieo xúc xắc. Liệt kê kết quả làm cho sự kiện “số chấm là ước của 6” xảy ra.', hints: ['Tìm các ước của 6.', 'Chỉ chọn những số từ 1 đến 6.'], solution: '<b>1, 2, 3, 6</b>.' }
  ],
  quiz: [
    { type: 'short', q: 'Theo biểu đồ ở bước 3, xác suất thực nghiệm mũi tên chỉ vào màu xanh là (số thập phân)?', answer: '0,35', calc: '28/80', explain: '{{28|80}} = 0,35.' },
    { type: 'short', q: 'Theo biểu đồ ở bước 3, xác suất thực nghiệm mũi tên chỉ vào màu vàng là (số thập phân)?', answer: '0,2', calc: '16/80', explain: '{{16|80}} = 0,2.' },
    { type: 'mcq', q: 'Tung hai đồng xu, số kết quả có thể là:', options: ['2', '3', '4', '6'], answer: 2, calc: '4', keepOrder: true, explain: 'SS, SN, NS, NN.' },
    { type: 'mcq', q: 'Hộp chỉ có bi xanh và bi đỏ. Lấy 1 viên. “Lấy được bi xanh hoặc bi đỏ” là sự kiện:', options: ['Không thể', 'Chắc chắn', 'Có thể', 'Không biết'], answer: 1, explain: 'Viên nào cũng xanh hoặc đỏ.' },
    { type: 'short', requireSimplest: true, q: 'Một bạn gieo xúc xắc 30 lần, mặt 3 chấm xuất hiện 6 lần. Xác suất thực nghiệm (phân số tối giản) là?', answer: '1/5', calc: '6/30', explain: '{{6|30}} = {{1|5}}.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nếu làm lại thí nghiệm, xác suất thực nghiệm chắc chắn không đổi.', answer: false, explain: 'Kết quả có thể khác nhau giữa các lần làm.' },
    { type: 'short', q: 'Trong 120 ngày theo dõi có 30 ngày mưa. Ước lượng số ngày mưa trong 360 ngày.', answer: '90', calc: '360*30/120', explain: '360 · {{30|120}} = 90.' },
    { type: 'short', q: 'Theo biểu đồ ở bước 3, mũi tên chỉ vào màu đỏ nhiều hơn màu vàng bao nhiêu lần?', answer: '20', calc: '36-16', explain: '36 − 16 = 20.' }
  ]
});
})();
