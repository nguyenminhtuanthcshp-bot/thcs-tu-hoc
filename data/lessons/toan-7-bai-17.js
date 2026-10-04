/* Toán 7 – Bài 17. Thu thập và phân loại dữ liệu. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, C = S.C;
THCS.registerLesson('toan-7/bai-17', {
  objectives: [
    'Thu thập dữ liệu bằng quan sát, lập phiếu hỏi, phỏng vấn, tìm kiếm từ nguồn có sẵn.',
    'Phân loại dữ liệu: dữ liệu định tính (không phải số) và định lượng (là số); dữ liệu định tính có thứ bậc hay không.',
    'Nhận biết tính đại diện và tính hợp lí của dữ liệu.'
  ],
  intro: 'Lớp em muốn tổ chức một chuyến dã ngoại. Đi đâu? Mang gì? Muốn quyết định công bằng, cả lớp cần thu thập ý kiến – tức là thu thập dữ liệu.',
  steps: [
    { title: 'Các cách thu thập dữ liệu', html: `<ul><li><b>Quan sát, đo đạc, đếm</b>: đếm số xe qua cổng trường, đo chiều cao các bạn.</li><li><b>Lập phiếu hỏi (khảo sát)</b>: phát phiếu cho các bạn điền.</li><li><b>Phỏng vấn</b>: hỏi trực tiếp.</li><li><b>Thu thập từ nguồn có sẵn</b>: sách báo, trang web chính thống.</li></ul>
      <p>Khi thiết kế phiếu hỏi, câu hỏi cần ngắn, rõ, có các lựa chọn không trùng nhau.</p>` },
    { title: 'Phân loại dữ liệu', html: `<table class="tbl"><tr><th>Loại</th><th>Đặc điểm</th><th>Ví dụ</th></tr>
      <tr><td>Định lượng</td><td>Là số (đo, đếm được)</td><td>Chiều cao (cm), số anh chị em</td></tr>
      <tr><td>Định tính có thứ bậc</td><td>Không phải số, sắp xếp được</td><td>Mức độ hài lòng: kém, trung bình, tốt, rất tốt</td></tr>
      <tr><td>Định tính không thứ bậc</td><td>Không phải số, không sắp xếp</td><td>Môn thể thao yêu thích, màu sắc</td></tr></table>` },
    { title: 'Ví dụ: một bảng dữ liệu', html: `<p>Kết quả khảo sát “Môn thể thao em yêu thích nhất” của lớp 7A (dữ liệu định tính không có thứ bậc):</p>`,
      svg: S.bar({ title: 'Môn thể thao yêu thích – lớp 7A', cats: ['Bóng đá', 'Cầu lông', 'Bơi', 'Bóng rổ', 'Cờ vua'], series: [{ name: 'Số bạn', values: [12, 9, 6, 5, 4] }], yMax: 14, yStep: 2, yLabel: 'Số bạn', width: 560, height: 280 }),
      caption: 'Tổng cộng 36 bạn tham gia khảo sát.' },
    { title: 'Tính đại diện và tính hợp lí', html: `<p>Dữ liệu <b>đại diện</b> khi mẫu khảo sát phản ánh được cả nhóm cần tìm hiểu. Ví dụ: muốn biết ý kiến của cả trường mà chỉ hỏi đội bóng đá của trường thì không đại diện.</p>
      <p>Dữ liệu <b>hợp lí</b> khi các giá trị phù hợp thực tế: chiều cao học sinh lớp 7 là 350 cm hay tổng các tỉ lệ phần trăm là 120% là không hợp lí.</p>` }
  ],
  summary: 'Thu thập: quan sát, phiếu hỏi, phỏng vấn, nguồn có sẵn. Dữ liệu định lượng là số; định tính không phải số (có hoặc không có thứ bậc). Kiểm tra tính đại diện và tính hợp lí.',
  examples: [
    { title: 'Phân loại', problem: 'Phân loại các dữ liệu: cân nặng (kg); xếp loại học lực (Tốt, Khá, Đạt, Chưa đạt); nơi sinh.', solution: 'Cân nặng: định lượng. Xếp loại học lực: định tính có thứ bậc. Nơi sinh: định tính không có thứ bậc.' },
    { title: 'Tính hợp lí', problem: 'Bảng thống kê tỉ lệ học sinh chọn các môn: Toán 40%, Văn 35%, Anh 30%. Dữ liệu có hợp lí không (mỗi bạn chọn đúng một môn)?', solution: 'Tổng 40% + 35% + 30% = 105% &gt; 100% nên không hợp lí.' },
    { title: 'Tính đại diện', problem: 'Để biết thời gian đọc sách trung bình của học sinh cả trường, bạn Nam chỉ hỏi các bạn trong câu lạc bộ đọc sách. Mẫu có đại diện không?', solution: 'Không. Các bạn trong câu lạc bộ đọc sách thường đọc nhiều hơn mức chung; nên chọn ngẫu nhiên học sinh ở mọi khối lớp.' }
  ],
  exercises: [
    { question: 'Với biểu đồ ở bước 3, có bao nhiêu phần trăm số bạn thích bóng đá?', hints: ['Tổng số bạn là 36.', '12 : 36 · 100%.'], solution: '12 : 36 ≈ 33,3%.' },
    { question: 'Kể tên hai dữ liệu định lượng và hai dữ liệu định tính về bản thân em.', hints: ['Định lượng: là số.', 'Định tính: mô tả, phân loại.'], solution: 'Ví dụ: chiều cao, số giờ ngủ (định lượng); màu yêu thích, món ăn yêu thích (định tính).' },
    { question: 'Một phiếu hỏi có câu: “Em thường ngủ bao nhiêu giờ? □ 6–7 giờ □ 7–8 giờ □ 8–9 giờ”. Câu hỏi có vấn đề gì?', hints: ['Nếu em ngủ đúng 7 giờ thì chọn ô nào?', 'Ai ngủ ít hơn 6 giờ thì sao?'], solution: 'Các khoảng bị trùng mốc (7, 8) và thiếu lựa chọn “dưới 6 giờ”, “trên 9 giờ”.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Dữ liệu nào là dữ liệu định lượng?', options: ['Màu áo yêu thích', 'Số bạn trong tổ', 'Tên trường', 'Mức độ hài lòng'], answer: 1, explain: 'Số bạn là số (đếm được).' },
    { type: 'mcq', q: 'Mức độ hài lòng (không hài lòng, bình thường, hài lòng, rất hài lòng) là dữ liệu:', options: ['định lượng', 'định tính có thứ bậc', 'định tính không thứ bậc', 'không phải dữ liệu'], answer: 1, explain: 'Không phải số nhưng sắp xếp được theo mức độ.' },
    { type: 'short', calc: '12 + 9 + 6 + 5 + 4', q: 'Biểu đồ bước 3: tổng số bạn tham gia khảo sát là bao nhiêu?', answer: '36', explain: '12 + 9 + 6 + 5 + 4 = 36.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tỉ lệ các lựa chọn (mỗi người chọn một) là 40%, 35%, 30% là hợp lí.', answer: false, explain: 'Tổng 105% &gt; 100%.' },
    { type: 'short', calc: '12 - 4', q: 'Biểu đồ bước 3: số bạn thích bóng đá nhiều hơn số bạn thích cờ vua bao nhiêu bạn?', answer: '8', explain: '12 − 4 = 8.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Chỉ hỏi đội bóng của trường là đủ đại diện cho ý kiến cả trường về môn thể thao yêu thích.', answer: false, explain: 'Mẫu bị lệch, không đại diện.' },
    { type: 'short', calc: 'round((9 / 36) * 100, 0)', q: 'Biểu đồ bước 3: tỉ lệ phần trăm số bạn thích cầu lông là bao nhiêu (%)?', unit: '%', answer: '25', explain: '9 : 36 = 0,25 = 25%.' },
    { type: 'mcq', q: 'Cách thu thập nào phù hợp để biết nhiệt độ cao nhất mỗi ngày trong tháng trước ở Hà Nội?', options: ['phỏng vấn bạn bè', 'lập phiếu hỏi', 'tra cứu nguồn có sẵn (trang khí tượng)', 'đoán'], answer: 2, explain: 'Dữ liệu quá khứ lấy từ nguồn có sẵn đáng tin cậy.' }
  ]
});
})();
