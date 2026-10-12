/* LS&ĐL 8 – Địa lí, Bài 4. Khí hậu Việt Nam. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-8/dl-bai-4', {
  objectives: [
    "Trình bày được đặc điểm khí hậu nhiệt đới ẩm gió mùa của Việt Nam.",
    "Chứng minh được sự phân hoá đa dạng của khí hậu.",
    "Phân tích được ảnh hưởng của gió mùa."
  ],
  intro: "Mùa đông ở Hà Nội có những ngày nhiệt độ xuống dưới 10 °C, trong khi Thành phố Hồ Chí Minh vẫn nóng quanh năm. Khí hậu nước ta đa dạng như thế nào?",
  steps: [
    { title: "Tính nhiệt đới", html: "<p>Nhiệt độ trung bình năm của nước ta phần lớn trên <b>20 °C</b> (trừ vùng núi cao). Ví dụ, năm 2023 trạm Láng (Hà Nội) có nhiệt độ các tháng từ 18,2 °C đến 31,5 °C (Niên giám thống kê 2023).</p>",
      svg: S.climateChart({ title: "Nhiệt độ và lượng mưa trạm Láng (Hà Nội) năm 2023", temp: [18.2, 20.7, 22.7, 25.5, 29.5, 30.4, 31.5, 29.8, 29.1, 27.8, 24.4, 19.8], rain: [8.0, 24.2, 7.6, 72.0, 64.2, 375.4, 134.6, 358.8, 269.7, 22.4, 61.0, 21.6], tMax: 40, rMax: 400, tMin: 0, note: "Nguồn: Niên giám thống kê 2023, Tổng cục Thống kê." }), caption: "Tháng nóng nhất là tháng 7 (31,5 °C), tháng lạnh nhất là tháng 1 (18,2 °C)." },
    { title: "Tính ẩm và gió mùa", html: "<ul><li>Lượng mưa lớn, thường 1 500 – 2 000 mm/năm; độ ẩm không khí cao, trên 80%.</li><li><b>Gió mùa mùa đông</b> (tháng 11 – 4): gió hướng đông bắc, lạnh khô ở miền Bắc.</li><li><b>Gió mùa mùa hạ</b> (tháng 5 – 10): gió hướng tây nam, nóng ẩm, mưa nhiều.</li></ul>" },
    { title: "Phân hoá khí hậu", html: "<p>Bảng tóm tắt:</p>",
      svg: S.table({ title: "Phân hoá khí hậu", head: ["Kiểu phân hoá", "Biểu hiện"], rows: [["Bắc – nam", "Bắc: có mùa đông lạnh; Nam: nóng quanh năm"], ["Đông – tây", "Sườn đón gió mưa nhiều hơn sườn khuất gió"], ["Theo độ cao", "Lên cao nhiệt độ giảm"]], colW: 250 }), caption: "Dãy Bạch Mã là ranh giới khí hậu giữa miền Bắc và miền Nam." },
    { title: "Ghi nhớ", html: "<div class=\"box key\">Khí hậu nhiệt đới ẩm gió mùa, phân hoá đa dạng theo bắc – nam, đông – tây và độ cao.</div>" }
  ],
  summary: "Khí hậu Việt Nam nhiệt đới ẩm gió mùa: nhiệt độ trung bình năm phần lớn trên 20 °C, lượng mưa lớn (1 500 – 2 000 mm), độ ẩm trên 80%. Có gió mùa mùa đông (hướng đông bắc) và gió mùa mùa hạ (hướng tây nam). Khí hậu phân hoá theo chiều bắc – nam (ranh giới dãy Bạch Mã), đông – tây và theo độ cao. Năm 2023, trạm Láng có nhiệt độ tháng từ 18,2 °C đến 31,5 °C.",
  examples: [
    { title: "Tính", problem: "Biên độ nhiệt năm 2023 ở trạm Láng (31,5 °C và 18,2 °C)?", solution: "31,5 − 18,2 = 13,3 °C." },
    { title: "Đọc biểu đồ", problem: "Tháng mưa nhiều nhất năm 2023 ở trạm Láng?", solution: "Tháng 6, 375,4 mm." },
    { title: "Giải thích", problem: "Vì sao miền Bắc có mùa đông lạnh?", solution: "Do ảnh hưởng của gió mùa đông bắc từ phương bắc tràn xuống." }
  ],
  exercises: [
    { question: "Gió mùa mùa hạ có hướng chính nào?", hints: ["Từ biển vào.", "Tây …"], solution: "Tây nam." },
    { question: "Ranh giới khí hậu giữa miền Bắc và miền Nam?", hints: ["Một dãy núi ở Huế – Đà Nẵng.", "Bạch …"], solution: "Dãy Bạch Mã." },
    { question: "Tháng 6 mưa 375,4 mm, tháng 1 mưa 8,0 mm. Chênh lệch?", hints: ["Trừ.", "Có phần thập phân."], solution: "367,4 mm." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Khí hậu Việt Nam là khí hậu nhiệt đới ẩm gió mùa.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Hướng của gió mùa mùa đông ở miền Bắc:", options: ["Đông bắc", "Tây nam", "Tây", "Nam"], answer: 0, explain: "Đông bắc." },
    { type: 'short', q: "Trạm Láng 2023: tháng 7 là 31,5 °C, tháng 1 là 18,2 °C. Biên độ nhiệt (°C)?", answer: "13.3", answerText: "13,3", unit: "°C", calc: "31.5-18.2", explain: "13,3." },
    { type: 'mcq', q: "Ranh giới khí hậu Bắc – Nam:", options: ["Dãy Bạch Mã", "Dãy Hoàng Liên Sơn", "Dãy Trường Sơn Nam", "Sông Gianh"], answer: 0, explain: "Bạch Mã." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Miền Nam nước ta có mùa đông lạnh.", answer: false, explain: "Nóng quanh năm." },
    { type: 'mcq', q: "Lượng mưa trung bình năm phổ biến ở nước ta:", options: ["1 500 – 2 000 mm", "100 – 200 mm", "5 000 – 6 000 mm", "Dưới 50 mm"], answer: 0, explain: "1 500 – 2 000 mm." },
    { type: 'short', q: "Lượng mưa tháng 6 năm 2023 ở trạm Láng là 375,4 mm, tháng 1 là 8,0 mm. Chênh lệch (mm)?", answer: "367.4", answerText: "367,4", unit: "mm", calc: "375.4-8.0", explain: "367,4." },
    { type: 'mcq', q: "Độ ẩm không khí phổ biến ở nước ta:", options: ["Trên 80%", "Dưới 30%", "Khoảng 10%", "Khoảng 50%"], answer: 0, explain: "Trên 80%." }
  ]
});
})();
