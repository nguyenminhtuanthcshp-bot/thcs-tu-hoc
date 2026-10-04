/* Toán 6 – Bài 38. Dữ liệu và thu thập dữ liệu. Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('toan-6/bai-38', {
  objectives: [
    'Nhận biết dữ liệu là số liệu và dữ liệu không phải là số liệu.',
    'Biết các cách thu thập dữ liệu đơn giản: quan sát, lập phiếu hỏi, làm thí nghiệm, tra cứu.',
    'Nhận biết dữ liệu không hợp lí dựa trên tiêu chí đơn giản.'
  ],
  intro: 'Lớp em muốn tổ chức chuyến tham quan. Để chọn địa điểm, cô chủ nhiệm hỏi ý kiến từng bạn. Các câu trả lời thu được chính là dữ liệu.',
  steps: [
    { title: 'Dữ liệu là gì?', html: `<p>Những thông tin thu thập được như số, chữ, hình ảnh… gọi là <b>dữ liệu</b>.</p><ul><li><b>Số liệu</b>: dữ liệu là các số, ví dụ chiều cao (cm), điểm kiểm tra, số anh chị em.</li><li><b>Dữ liệu không phải số liệu</b>: màu sắc yêu thích, tên môn thể thao, nơi sinh.</li></ul>` },
    { title: 'Cách thu thập dữ liệu', html: `<ul><li><b>Quan sát</b>: đếm số xe qua cổng trường trong 10 phút.</li><li><b>Lập phiếu hỏi</b> (phỏng vấn, khảo sát): hỏi các bạn về môn học yêu thích.</li><li><b>Làm thí nghiệm</b>: đo nhiệt độ nước sau mỗi phút đun.</li><li><b>Tra cứu</b>: sách báo, trang web tin cậy, số liệu thống kê chính thức.</li></ul>` },
    { title: 'Phiếu hỏi và kiểm đếm', html: `<p>Khi thu thập bằng phiếu hỏi, câu hỏi nên ngắn gọn, rõ ràng, có các lựa chọn cụ thể. Có thể dùng <b>vạch kiểm đếm</b>: mỗi lần gặp một lựa chọn ghi một vạch, cứ 5 vạch gom thành một nhóm (||||̸) cho dễ đếm.</p>
      <table class="tbl"><tr><th>Môn thể thao</th><th>Kiểm đếm</th><th>Số bạn</th></tr><tr><td>Bóng đá</td><td>||||̸ ||||̸ ||</td><td>12</td></tr><tr><td>Cầu lông</td><td>||||̸ |||</td><td>8</td></tr><tr><td>Bơi</td><td>||||̸</td><td>5</td></tr></table>` },
    { title: 'Tính hợp lí của dữ liệu', html: `<p>Dữ liệu cần <b>hợp lí</b>: đúng định dạng, nằm trong phạm vi cho phép. Ví dụ: chiều cao học sinh lớp 6 là 15 m là không hợp lí; điểm kiểm tra 12 (thang điểm 10) là không hợp lí; tổng các phần trăm lớn hơn 100% là không hợp lí.</p>` }
  ],
  summary: 'Dữ liệu gồm số liệu và dữ liệu không phải số liệu. Thu thập bằng quan sát, phiếu hỏi, thí nghiệm, tra cứu. Cần loại bỏ dữ liệu không hợp lí.',
  examples: [
    { title: 'Phân loại dữ liệu', problem: 'Trong các dữ liệu sau, dữ liệu nào là số liệu: cân nặng của các bạn; màu áo; số bước chân mỗi ngày; tên bài hát yêu thích?', solution: 'Số liệu: <b>cân nặng, số bước chân</b>. Không phải số liệu: màu áo, tên bài hát.' },
    { title: 'Chọn cách thu thập', problem: 'Để biết nhiệt độ cao nhất ở Hà Nội tuần trước, em nên thu thập bằng cách nào?', solution: '<b>Tra cứu</b> trên trang dự báo thời tiết hoặc báo chí tin cậy.' },
    { title: 'Dữ liệu không hợp lí', problem: 'Bảng ghi số anh chị em ruột của 6 bạn: 1; 2; 0; −1; 3; 2. Dữ liệu nào không hợp lí?', solution: 'Số anh chị em không thể âm ⇒ <b>−1</b> không hợp lí.' }
  ],
  exercises: [
    { question: 'Em hãy đề xuất một câu hỏi phiếu khảo sát để tìm hiểu “phương tiện đến trường của các bạn trong lớp”.', hints: ['Câu hỏi ngắn, rõ ràng.', 'Đưa các lựa chọn: đi bộ, xe đạp, xe máy (bố mẹ chở), xe buýt, khác.'], solution: 'Ví dụ: “Bạn thường đến trường bằng phương tiện nào? □ Đi bộ □ Xe đạp □ Bố mẹ chở □ Xe buýt □ Khác”.' },
    { question: 'Kết quả kiểm đếm “||||̸ ||||̸ ||||̸ |” ứng với số nào?', hints: ['Mỗi nhóm ||||̸ là 5.', 'Có 3 nhóm và 1 vạch lẻ.'], solution: '3 · 5 + 1 = <b>16</b>.' },
    { question: 'Một bạn ghi thời gian ngủ mỗi đêm (giờ) của 5 bạn: 8; 9; 7,5; 26; 8. Dữ liệu nào không hợp lí? Vì sao?', hints: ['Một ngày có bao nhiêu giờ?', 'Thời gian ngủ một đêm phải nhỏ hơn 24 giờ.'], solution: '<b>26</b> giờ không hợp lí vì lớn hơn số giờ trong một ngày.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Dữ liệu nào là số liệu?', options: ['Màu sắc yêu thích', 'Chiều cao (cm)', 'Tên trường', 'Món ăn yêu thích'], answer: 1, explain: 'Chiều cao là số.' },
    { type: 'mcq', q: 'Để biết số xe đạp gửi ở nhà xe mỗi buổi, cách thu thập phù hợp nhất là:', options: ['Tra cứu', 'Quan sát, đếm', 'Làm thí nghiệm', 'Đoán'], answer: 1, explain: 'Quan sát và đếm trực tiếp.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Điểm kiểm tra 11 ở thang điểm 10 là dữ liệu hợp lí.', answer: false, explain: 'Vượt quá thang điểm.' },
    { type: 'short', q: 'Kết quả kiểm đếm gồm 4 nhóm ||||̸ và 3 vạch lẻ. Số tương ứng là bao nhiêu?', answer: '23', calc: '4*5+3', explain: '4 · 5 + 3 = 23.' },
    { type: 'mcq', q: 'Dữ liệu “nơi sinh của các bạn” là:', options: ['Số liệu', 'Không phải số liệu', 'Không phải dữ liệu', 'Kết quả thí nghiệm'], answer: 1, explain: 'Là tên địa danh, không phải số.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Làm thí nghiệm cũng là một cách thu thập dữ liệu.', answer: true, explain: 'Ví dụ đo nhiệt độ nước khi đun.' },
    { type: 'mcq', q: 'Dữ liệu cân nặng (kg) nào của học sinh lớp 6 là không hợp lí?', options: ['35', '42,5', '400', '38'], answer: 2, calc: '400', explain: '400 kg không thể là cân nặng học sinh.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Có thể thu thập dữ liệu bằng cách tra cứu trên các nguồn tin cậy.', answer: true, explain: 'Tra cứu là một cách thu thập dữ liệu.' }
  ]
});
