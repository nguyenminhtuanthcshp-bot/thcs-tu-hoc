/* LS&ĐL 8 – Địa lí, Bài 5. Thực hành: Vẽ và phân tích biểu đồ khí hậu. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-8/dl-bai-5', {
  objectives: [
    "Vẽ được biểu đồ nhiệt độ và lượng mưa.",
    "Tính được nhiệt độ trung bình năm, tổng lượng mưa, biên độ nhiệt.",
    "Nhận xét được đặc điểm khí hậu của một trạm."
  ],
  intro: "Trong bài này, em sẽ dùng số liệu thật của trạm Láng (Hà Nội) năm 2023 trong Niên giám thống kê để vẽ và đọc biểu đồ khí hậu.",
  steps: [
    { title: "Bảng số liệu", html: "<p>Số liệu trạm Láng năm 2023 (Niên giám thống kê 2023):</p>",
      svg: S.table({ title: "Trạm Láng năm 2023 (tháng 1 – 6)", head: ["Tháng", "Nhiệt độ (°C) / Mưa (mm)"], rows: [["1", "18,2 / 8,0"], ["2", "20,7 / 24,2"], ["3", "22,7 / 7,6"], ["4", "25,5 / 72,0"], ["5", "29,5 / 64,2"], ["6", "30,4 / 375,4"]], colW: 250 }), caption: "Tháng 7 – 12: 31,5/134,6; 29,8/358,8; 29,1/269,7; 27,8/22,4; 24,4/61,0; 19,8/21,6." },
    { title: "Cách vẽ", html: "<p>Các bước:</p>",
      svg: S.flowchart({ title: "Vẽ biểu đồ khí hậu", steps: [{ t: 'start', s: "Vẽ hai trục tung" }, { t: 'proc', s: "Vẽ cột lượng mưa" }, { t: 'proc', s: "Vẽ đường nhiệt độ" }, { t: 'end', s: "Ghi tên, chú giải" }] }), caption: "Trục trái: nhiệt độ (°C); trục phải: lượng mưa (mm)." },
    { title: "Biểu đồ hoàn chỉnh", html: "<p>Kết quả:</p>",
      svg: S.climateChart({ title: "Nhiệt độ và lượng mưa trạm Láng (Hà Nội) năm 2023", temp: [18.2, 20.7, 22.7, 25.5, 29.5, 30.4, 31.5, 29.8, 29.1, 27.8, 24.4, 19.8], rain: [8.0, 24.2, 7.6, 72.0, 64.2, 375.4, 134.6, 358.8, 269.7, 22.4, 61.0, 21.6], tMax: 40, rMax: 400, tMin: 0, note: "Nguồn: Niên giám thống kê 2023, Tổng cục Thống kê." }), caption: "Cột: lượng mưa; đường: nhiệt độ." },
    { title: "Tính toán và nhận xét", html: "<ul><li>Nhiệt độ trung bình năm = tổng 12 tháng : 12 = 309,4 : 12 ≈ 25,8 °C.</li><li>Tổng lượng mưa năm = 1 419,5 mm.</li><li>Biên độ nhiệt năm = 31,5 − 18,2 = 13,3 °C.</li></ul><div class=\"box key\">Nhận xét: nóng, có một mùa đông lạnh hơn (tháng 12 – 2); mưa tập trung vào tháng 6 – 9: khí hậu nhiệt đới ẩm gió mùa có mùa đông lạnh.</div>" }
  ],
  summary: "Biểu đồ khí hậu gồm cột (lượng mưa) và đường (nhiệt độ) với hai trục tung. Theo số liệu trạm Láng năm 2023 (Niên giám thống kê): nhiệt độ trung bình năm khoảng 25,8 °C, tổng lượng mưa 1 419,5 mm, biên độ nhiệt 13,3 °C; mưa tập trung tháng 6 – 9. Đây là khí hậu nhiệt đới ẩm gió mùa có mùa đông lạnh.",
  examples: [
    { title: "Tính", problem: "Tổng nhiệt độ 12 tháng là 309,4 °C. Nhiệt độ trung bình năm (làm tròn một chữ số thập phân)?", solution: "309,4 : 12 ≈ 25,8 °C." },
    { title: "Tính", problem: "Tổng lượng mưa tháng 6 và tháng 8?", solution: "375,4 + 358,8 = 734,2 mm." },
    { title: "Nhận xét", problem: "Mùa mưa ở Hà Nội năm 2023 tập trung vào những tháng nào?", solution: "Tháng 6 – 9." }
  ],
  exercises: [
    { question: "Biểu đồ khí hậu dùng cột để biểu diễn đại lượng nào?", hints: ["Đo bằng mm.", "Không phải nhiệt độ."], solution: "Lượng mưa." },
    { question: "Tháng nào nóng nhất năm 2023 ở trạm Láng?", hints: ["31,5 °C.", "Giữa mùa hạ."], solution: "Tháng 7." },
    { question: "Tổng lượng mưa tháng 6 – 9: 375,4 + 134,6 + 358,8 + 269,7 = ?", hints: ["Cộng lần lượt.", "Gần 1 140."], solution: "1 138,5 mm." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Trên biểu đồ khí hậu, nhiệt độ thường được vẽ bằng đường.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Tháng mưa nhiều nhất năm 2023 ở trạm Láng:", options: ["Tháng 6", "Tháng 1", "Tháng 3", "Tháng 12"], answer: 0, explain: "Tháng 6 (375,4 mm)." },
    { type: 'short', q: "Tổng nhiệt độ 12 tháng là 309,4 °C. Nhiệt độ trung bình năm bằng bao nhiêu °C? (làm tròn đến hàng phần mười)", answer: "25.8", answerText: "25,8", unit: "°C", calc: "Math.round(309.4/12*10)/10", explain: "25,8." },
    { type: 'mcq', q: "Số trục tung trên biểu đồ khí hậu:", options: ["2", "1", "3", "4"], answer: 0, explain: "2 trục." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Năm 2023 ở trạm Láng, tháng 3 mưa nhiều nhất.", answer: false, explain: "Tháng 3 chỉ 7,6 mm." },
    { type: 'mcq', q: "Khí hậu trạm Láng thuộc kiểu:", options: ["Nhiệt đới ẩm gió mùa có mùa đông lạnh", "Hoang mạc", "Ôn đới hải dương", "Cực"], answer: 0, explain: "Đúng." },
    { type: 'short', q: "Tổng lượng mưa tháng 6 (375,4 mm) và tháng 8 (358,8 mm)?", answer: "734.2", answerText: "734,2", unit: "mm", calc: "375.4+358.8", explain: "734,2." },
    { type: 'mcq', q: "Nguồn số liệu của bài:", options: ["Niên giám thống kê 2023", "Sách Toán 8", "Truyện Kiều", "Đại Việt sử kí"], answer: 0, explain: "Niên giám thống kê 2023." }
  ]
});
})();
