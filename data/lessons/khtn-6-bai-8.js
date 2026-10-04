/* KHTN 6 – Bài 8. Đo nhiệt độ. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-6/bai-8', {
  objectives: [
    'Nêu được nhiệt độ là số đo độ “nóng”, “lạnh” của vật; biết các mốc nhiệt độ của thang Celsius.',
    'Hiểu vì sao không thể dựa vào cảm giác để xác định chính xác nhiệt độ.',
    'Nêu được nguyên tắc hoạt động của nhiệt kế chất lỏng; kể tên một số loại nhiệt kế.',
    'Đo được nhiệt độ bằng nhiệt kế đúng cách và đọc đúng số chỉ.'
  ],
  intro: 'Thò tay vào chậu nước, em thấy “ấm” hay “mát”? Câu trả lời lại phụ thuộc vào việc trước đó tay em vừa ở đâu! Muốn biết chính xác vật nóng, lạnh thế nào, ta cần <b>đo nhiệt độ</b>.',
  steps: [
    { title: 'Nhiệt độ và thang Celsius', html: `<p><b>Nhiệt độ</b> là số đo độ “nóng”, “lạnh” của vật. Vật càng nóng thì nhiệt độ càng cao.</p>
      <p>Ở nước ta, nhiệt độ thường đo bằng <b>độ C (°C)</b> theo thang nhiệt độ Celsius, trong đó (ở áp suất khí quyển bình thường):</p>
      <ul><li>nước đá đang tan có nhiệt độ <b>0 °C</b>;</li><li>nước đang sôi có nhiệt độ <b>100 °C</b>.</li></ul>
      <p>Nhiệt độ thấp hơn 0 °C được ghi dấu trừ, ví dụ −5 °C. Thân nhiệt người khoẻ mạnh khoảng <b>37 °C</b>.</p>
      <div class="box note">Em có biết: trong khoa học còn dùng thang Kelvin (K) với T(K) = t(°C) + 273, và một số nước dùng độ F (°F) với t(°F) = t(°C) × 1,8 + 32.</div>` },
    { title: 'Cảm giác có đáng tin không?', html: `<p>Thí nghiệm: nhúng tay trái vào cốc nước nóng (vừa phải, không gây bỏng), tay phải vào cốc nước lạnh. Sau một phút, nhúng cả hai tay vào cốc nước ấm. Tay trái thấy <b>mát</b>, tay phải thấy <b>nóng</b> – dù cùng một cốc nước!</p>
      <div class="box key">Cảm giác của tay không cho biết chính xác nhiệt độ. Muốn biết chính xác phải dùng <b>nhiệt kế</b>.</div>` },
    { title: 'Nhiệt kế', html: `<p><b>Nhiệt kế chất lỏng</b> (rượu, thuỷ ngân) hoạt động dựa trên <b>sự nở vì nhiệt của chất lỏng</b>: nóng lên thì chất lỏng nở ra, dâng cao trong ống; lạnh đi thì co lại, hạ xuống.</p>
      <table class="tbl"><tr><th>Loại nhiệt kế</th><th>Dùng để</th></tr>
      <tr><td>Nhiệt kế y tế (thuỷ ngân, điện tử)</td><td>Đo thân nhiệt, thang đo khoảng 35 – 42 °C</td></tr>
      <tr><td>Nhiệt kế rượu</td><td>Đo nhiệt độ không khí trong phòng, ngoài trời</td></tr>
      <tr><td>Nhiệt kế hồng ngoại</td><td>Đo nhanh nhiệt độ mà không cần chạm vào vật</td></tr>
      <tr><td>Nhiệt kế điện tử có que đo</td><td>Đo nhiệt độ nước, thức ăn, thí nghiệm…</td></tr></table>` },
    { title: 'Đọc số chỉ nhiệt kế', html: `<p>Nhiệt kế ở hình có GHĐ 50 °C. Giữa hai số liên tiếp (cách nhau 10 °C) có 5 khoảng chia, nên ĐCNN = 10 : 5 = <b>2 °C</b>. Mực chất lỏng ở vạch thứ 4 trên số 20, nên nhiệt độ là 20 + 4 × 2 = <b>28 °C</b>.</p>`,
      svg: S.thermometer({ min: -10, max: 50, step: 10, minor: 5, value: 28, title: 'Nhiệt kế rượu' }), caption: 'Nhiệt kế chỉ 28 °C.' },
    { title: 'Các bước đo nhiệt độ', html: `<ol><li><b>Ước lượng</b> nhiệt độ của vật để chọn nhiệt kế phù hợp (GHĐ phải lớn hơn nhiệt độ cần đo).</li>
      <li>Kiểm tra nhiệt kế (nhiệt kế y tế thuỷ ngân phải vẩy cho mực thuỷ ngân xuống dưới vạch 35).</li>
      <li>Đặt bầu nhiệt kế <b>tiếp xúc tốt</b> với vật cần đo (ví dụ kẹp dưới nách, nhúng vào nước) và chờ đủ thời gian.</li>
      <li>Mắt nhìn <b>ngang mực chất lỏng</b>, đọc theo vạch chia gần nhất và ghi kết quả kèm đơn vị °C.</li></ol>
      <div class="box tip">Nhiệt kế thuỷ ngân vỡ rất nguy hiểm vì hơi thuỷ ngân độc: phải báo ngay người lớn, không dùng tay nhặt.</div>` }
  ],
  summary: 'Nhiệt độ là số đo độ nóng, lạnh của vật, thường dùng °C (nước đá tan 0 °C, nước sôi 100 °C). Cảm giác không xác định chính xác được nhiệt độ; phải dùng nhiệt kế. Nhiệt kế chất lỏng hoạt động dựa trên sự nở vì nhiệt của chất lỏng. Đo: ước lượng – chọn nhiệt kế – đặt bầu tiếp xúc tốt – chờ – đọc ngang mực chất lỏng.',
  examples: [
    { title: 'Chọn nhiệt kế', problem: 'Nhiệt kế y tế có thang đo 35 – 42 °C. Có dùng nó để đo nhiệt độ nước sôi được không?', solution: '<b>Không.</b> Nước sôi ở 100 °C, vượt xa GHĐ 42 °C; chất lỏng nở quá mức có thể làm vỡ nhiệt kế.' },
    { title: 'Đọc nhiệt kế', problem: 'Một nhiệt kế có ĐCNN 1 °C; mực chất lỏng nằm ở vạch thứ 3 phía dưới số 0. Nhiệt độ là bao nhiêu?', solution: 'Dưới số 0 là nhiệt độ âm: <b>−3 °C</b>.' },
    { title: 'Đổi thang nhiệt độ (mở rộng)', problem: 'Thân nhiệt 37 °C ứng với bao nhiêu độ F và bao nhiêu kelvin?', solution: 't(°F) = 37 × 1,8 + 32 = <b>98,6 °F</b>. T = 37 + 273 = <b>310 K</b>.' }
  ],
  exercises: [
    { question: 'Vì sao nói “nhúng tay vào nước để biết nhiệt độ” là cách không chính xác?', hints: ['Nhớ lại thí nghiệm ba cốc nước.', 'Cảm giác còn phụ thuộc vào tay vừa tiếp xúc với gì.'], solution: 'Vì cảm giác nóng, lạnh phụ thuộc vào nhiệt độ của tay trước đó: cùng một cốc nước, tay vừa ở nước nóng thấy mát, tay vừa ở nước lạnh thấy ấm. Cảm giác cũng không cho ra con số cụ thể.' },
    { question: 'Buổi sáng nhiệt độ ngoài trời là 18 °C, buổi trưa là 31 °C. Nhiệt độ đã tăng thêm bao nhiêu độ C?', hints: ['Lấy nhiệt độ buổi trưa trừ nhiệt độ buổi sáng.', '31 − 18 = ?'], solution: 'Nhiệt độ tăng 31 − 18 = <b>13 °C</b>.' },
    { question: 'Nhiệt kế hồng ngoại có ưu điểm gì khi đo thân nhiệt ở cổng trường?', hints: ['Nhiệt kế này có cần chạm vào người không?', 'Nghĩ về tốc độ và vệ sinh.'], solution: 'Đo rất nhanh (khoảng một giây) và không cần chạm vào người, nên đo được nhiều người liên tiếp và hạn chế lây bệnh.' }
  ],
  quiz: [
    { type: 'short', q: 'Theo thang Celsius, nước đang sôi (ở áp suất khí quyển bình thường) có nhiệt độ bao nhiêu độ C?', answer: '100', unit: '°C', explain: 'Nước đá tan ở 0 °C, nước sôi ở 100 °C.' },
    { type: 'mcq', q: 'Nhiệt kế chất lỏng hoạt động dựa trên:', options: ['Sự nở vì nhiệt của chất lỏng', 'Sự bay hơi của chất lỏng', 'Màu sắc của chất lỏng', 'Khối lượng của chất lỏng'], answer: 0, explain: 'Chất lỏng nở ra khi nóng lên và co lại khi lạnh đi.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Có thể dùng tay để xác định chính xác nhiệt độ của nước.', answer: false, explain: 'Cảm giác của tay không chính xác; cần dùng nhiệt kế.' },
    { type: 'mcq', q: 'Để đo thân nhiệt người, nên dùng:', options: ['Nhiệt kế rượu đo nhiệt độ phòng', 'Nhiệt kế y tế', 'Nhiệt kế dùng trong lò nung', 'Thước dây'], answer: 1, explain: 'Nhiệt kế y tế có thang đo khoảng 35 – 42 °C, phù hợp đo thân nhiệt.' },
    { type: 'short', q: 'Nhiệt kế ở hình chỉ bao nhiêu độ C?', svg: S.thermometer({ min: 0, max: 50, step: 10, minor: 5, value: 34, showValue: false }), answer: '34', unit: '°C', calc: '30+2*2', explain: 'ĐCNN = 10 : 5 = 2 °C. Mực chất lỏng ở vạch thứ 2 trên số 30: 30 + 2 × 2 = 34 °C.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nước đá đang tan có nhiệt độ 0 °C.', answer: true, explain: 'Đây là một mốc của thang Celsius.' },
    { type: 'short', q: 'Nhiệt độ ban đêm là −4 °C, ban ngày là 6 °C. Nhiệt độ ban ngày cao hơn ban đêm bao nhiêu độ C?', answer: '10', unit: '°C', calc: '6-(-4)', explain: '6 − (−4) = 10 °C.' },
    { type: 'mcq', q: 'Khi đọc số chỉ của nhiệt kế chất lỏng, mắt cần đặt:', options: ['Cao hơn mực chất lỏng', 'Thấp hơn mực chất lỏng', 'Ngang với mực chất lỏng', 'Ở bất kì vị trí nào'], answer: 2, explain: 'Mắt nhìn ngang mực chất lỏng để đọc đúng.' }
  ]
});
})();
