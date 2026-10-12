/* Tin học 8 – Bài 7. Trình bày dữ liệu bằng biểu đồ. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-8/bai-7', {
  objectives: [
    'Tạo được biểu đồ từ bảng dữ liệu; nhận biết các thành phần: tiêu đề, trục, chú giải, nhãn dữ liệu.',
    'Chọn được loại biểu đồ phù hợp: cột (so sánh), đoạn thẳng (thay đổi theo thời gian), hình tròn (tỉ lệ thành phần).',
    'Chỉnh sửa được biểu đồ và đọc, nhận xét được thông tin từ biểu đồ.'
  ],
  intro: 'Một bảng số với hàng chục ô khó thấy xu hướng; một biểu đồ cho thấy ngay tháng nào cao nhất, phần nào chiếm nhiều nhất. Bảng tính vẽ biểu đồ chỉ với vài thao tác.',
  steps: [
    { title: 'Tạo biểu đồ', html: `<p>Chọn vùng dữ liệu (cả tiêu đề hàng, cột) → <b>Insert → Chart</b> → chọn loại. Biểu đồ <b>tự cập nhật</b> khi dữ liệu thay đổi.</p>` },
    { title: 'Biểu đồ cột – so sánh', html: `<p>Biểu đồ cột thích hợp để so sánh số liệu giữa các đối tượng. Thành phần: tiêu đề, trục ngang (hạng mục), trục đứng (giá trị), chú giải, nhãn dữ liệu.</p>`,
      svg: S.bar({ title: 'Số sách thư viện cho mượn (số liệu minh hoạ)', cats: ['Lớp 6', 'Lớp 7', 'Lớp 8', 'Lớp 9'], series: [{ name: 'Học kì 1', values: [120, 150, 110, 90] }, { name: 'Học kì 2', values: [140, 130, 160, 100] }], width: 560, height: 300 }), caption: 'Biểu đồ cột có chú giải hai học kì.' },
    { title: 'Biểu đồ đoạn thẳng – xu hướng', html: `<p>Biểu đồ đoạn thẳng cho thấy sự thay đổi theo thời gian (tăng, giảm).</p>`,
      svg: S.lineChart({ title: 'Nhiệt độ trung bình trong tuần (°C, số liệu minh hoạ)', cats: ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'], values: [26, 28, 29, 27, 30, 31, 29], yMin: 0, yMax: 35, yStep: 5, yLabel: '°C' }), caption: 'Thấy rõ nhiệt độ cao nhất vào thứ Bảy.' },
    { title: 'Biểu đồ hình tròn – tỉ lệ', html: `<p>Biểu đồ hình tròn biểu diễn tỉ lệ các phần trong một tổng (100%). Sau khi tạo, có thể đổi loại biểu đồ, sửa tiêu đề, thêm nhãn dữ liệu, đổi màu.</p>`,
      svg: S.pieChart({ title: 'Cách đến trường của lớp 8A (minh hoạ)', parts: [{ v: 45, label: 'Xe đạp 45%' }, { v: 30, label: 'Đi bộ 30%' }, { v: 20, label: 'Bố mẹ đưa 20%' }, { v: 5, label: 'Xe buýt 5%' }] }), caption: 'Tổng các phần bằng 100%.' }
  ],
  summary: 'Tạo biểu đồ: chọn dữ liệu → Insert → Chart. Thành phần: tiêu đề, trục, chú giải, nhãn dữ liệu. Biểu đồ cột để so sánh, đoạn thẳng để thấy xu hướng theo thời gian, hình tròn để thấy tỉ lệ trong tổng. Biểu đồ tự cập nhật theo dữ liệu.',
  examples: [
    { title: 'Chọn loại biểu đồ', problem: 'Chọn biểu đồ cho: (a) dân số một xã qua 10 năm; (b) tỉ lệ các loại cây trong vườn trường.', solution: '(a) đoạn thẳng; (b) hình tròn.' },
    { title: 'Đọc biểu đồ cột', problem: 'Theo biểu đồ ở bước 2, lớp nào mượn nhiều nhất trong học kì 2? Tổng cả năm của lớp đó?', solution: 'Lớp 8 (160); cả năm 110 + 160 = 270 cuốn.' },
    { title: 'Tính từ biểu đồ hình tròn', problem: 'Lớp 8A có 40 bạn. Theo biểu đồ, bao nhiêu bạn đi xe đạp?', solution: '45% × 40 = 18 bạn.' }
  ],
  exercises: [
    { question: 'Nêu các thành phần chính của một biểu đồ.', hints: ['Tên biểu đồ là gì?', 'Trục và phần giải thích màu.'], solution: 'Tiêu đề, trục ngang, trục đứng, chú giải, nhãn dữ liệu (và vùng vẽ).' },
    { question: 'Theo biểu đồ đoạn thẳng ở bước 3, nhiệt độ trung bình của cả tuần là bao nhiêu (làm tròn 1 chữ số thập phân)?', hints: ['Cộng 7 giá trị.', 'Chia cho 7.'], solution: '200 : 7 ≈ 28,6 °C.' },
    { question: 'Vì sao không nên dùng biểu đồ hình tròn cho số sách mượn của các lớp qua hai học kì?', hints: ['Biểu đồ hình tròn biểu diễn một tổng hay nhiều dãy?', 'Mục đích là so sánh.'], solution: 'Hình tròn chỉ thể hiện tỉ lệ trong một tổng; muốn so sánh nhiều nhóm và hai học kì nên dùng biểu đồ cột.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Biểu đồ trong bảng tính tự cập nhật khi dữ liệu thay đổi.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Biểu đồ phù hợp nhất để thể hiện tỉ lệ các phần trong một tổng:', options: ['Cột', 'Đoạn thẳng', 'Hình tròn', 'Không loại nào'], answer: 2, explain: 'Hình tròn.' },
    { type: 'mcq', q: 'Biểu đồ phù hợp để thể hiện nhiệt độ thay đổi qua các ngày:', options: ['Đoạn thẳng', 'Hình tròn', 'Bảng', 'Sơ đồ tư duy'], answer: 0, explain: 'Xu hướng theo thời gian.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Chú giải cho biết tên của biểu đồ.', answer: false, explain: 'Tiêu đề mới là tên; chú giải giải thích màu, kí hiệu.' },
    { type: 'short', q: 'Lớp 40 bạn, 30% đi bộ. Có bao nhiêu bạn đi bộ?', answer: '12', unit: 'bạn', calc: '40*0.3', explain: '12.' },
    { type: 'short', q: 'Biểu đồ hình tròn có ba phần 45%, 30%, 20% và một phần còn lại. Phần còn lại bao nhiêu phần trăm?', answer: '5', unit: '%', calc: '100-45-30-20', explain: '5%.' },
    { type: 'mcq', q: 'Lệnh chèn biểu đồ là:', options: ['Insert → Chart', 'Data → Filter', 'Home → Merge', 'View → Zoom'], answer: 0, explain: 'Insert → Chart.' },
    { type: 'short', q: 'Học kì 1 mượn 120 cuốn, học kì 2 mượn 150 cuốn. Học kì 2 tăng bao nhiêu phần trăm so với học kì 1?', answer: '25', unit: '%', calc: '(150-120)/120*100', explain: '30 : 120 = 25%.' }
  ]
});
})();
