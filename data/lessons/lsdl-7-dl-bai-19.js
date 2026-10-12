/* LS&ĐL 7 – Địa lí, Bài 19. Châu Nam Cực. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-7/dl-bai-19', {
  objectives: [
    "Trình bày được lịch sử khám phá và nghiên cứu châu Nam Cực.",
    "Trình bày được đặc điểm vị trí và tự nhiên của châu Nam Cực.",
    "Mô tả được kịch bản thay đổi thiên nhiên Nam Cực khi Trái Đất nóng lên."
  ],
  intro: "Ngày 21/7/1983, trạm Vô-xtốc ở Nam Cực đo được −89,2 °C – nhiệt độ không khí thấp nhất từng đo được bằng nhiệt kế trên Trái Đất.",
  steps: [
    { title: "Lịch sử khám phá", html: "<p>Năm <b>1820</b>, các nhà hàng hải đã nhìn thấy lục địa Nam Cực. Năm <b>1911</b>, đoàn của R. A-mun-xen (Na Uy) lần đầu tới điểm cực Nam. Năm <b>1959</b>, 12 nước kí <b>Hiệp ước Nam Cực</b>: chỉ dùng Nam Cực cho mục đích hoà bình, nghiên cứu khoa học.</p>",
      svg: S.timeline({ title: "Khám phá Nam Cực", items: [{ y: "1820", s: "Nhìn thấy lục địa" }, { y: "1911", s: "A-mun-xen tới cực Nam" }, { y: "1959", s: "Hiệp ước Nam Cực" }, { y: "1983", s: "−89,2 °C ở Vô-xtốc" }] }), caption: "Hiện nhiều nước có trạm nghiên cứu ở Nam Cực." },
    { title: "Vị trí, tự nhiên", html: "<p>Châu Nam Cực rộng khoảng <b>14,1 triệu km²</b>, gần như nằm hoàn toàn trong vòng cực Nam. Khoảng <b>98%</b> diện tích bị băng phủ, độ dày trung bình gần 2 000 m. Khí hậu lạnh và khô nhất thế giới; gió bão nhiều.</p>",
      svg: S.climateChart({ title: "Nhiệt độ trung bình tháng ở trạm Vô-xtốc (gần đúng)", temp: [-32, -44, -58, -65, -66, -66, -67, -68, -66, -57, -43, -32], rain: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], tMax: 0, rMax: 10, tMin: -80, note: "Số liệu làm tròn, gần đúng; lượng mưa rất nhỏ nên coi như 0." }), caption: "Tháng 7, 8 là mùa đông ở Nam Cực." },
    { title: "Sinh vật", html: "<p>Thực vật nghèo nàn (rêu, địa y). Động vật sống ven biển: chim cánh cụt, hải cẩu, cá voi.</p>" },
    { title: "Kịch bản khi Trái Đất nóng lên", html: "<p>Tóm tắt:</p>",
      svg: S.flowchart({ title: "Kịch bản biến đổi ở Nam Cực", steps: [{ t: 'start', s: "Nhiệt độ tăng" }, { t: 'proc', s: "Băng tan nhanh hơn" }, { t: 'proc', s: "Nước biển dâng" }, { t: 'end', s: "Mất nơi sống của sinh vật" }] }), caption: "Băng Nam Cực tan nhiều có thể làm mực nước biển dâng, đe doạ vùng ven biển như đồng bằng sông Cửu Long." }
  ],
  summary: "Lục địa Nam Cực được nhìn thấy năm 1820; năm 1911 A-mun-xen tới cực Nam; năm 1959 Hiệp ước Nam Cực được kí. Châu Nam Cực rộng khoảng 14,1 triệu km², gần 98% bị băng phủ, lạnh và khô nhất thế giới (−89,2 °C ở Vô-xtốc năm 1983). Sinh vật nghèo, chủ yếu chim cánh cụt, hải cẩu ven biển. Trái Đất nóng lên làm băng tan, nước biển dâng.",
  examples: [
    { title: "Tính", problem: "Từ năm 1959 đến năm 2029 là bao nhiêu năm?", solution: "70 năm." },
    { title: "Tính", problem: "98% của 14,1 triệu km² bị băng phủ là khoảng bao nhiêu triệu km²?", solution: "14,1 × 98% ≈ 13,8 triệu km²." },
    { title: "Giải thích", problem: "Vì sao Nam Cực rất lạnh?", solution: "Ở vĩ độ rất cao, nhận ít nhiệt; băng phản xạ phần lớn ánh sáng Mặt Trời; địa hình cao." }
  ],
  exercises: [
    { question: "Hiệp ước Nam Cực kí năm nào?", hints: ["Giữa thế kỉ XX.", "195…"], solution: "Năm 1959." },
    { question: "Loài chim tiêu biểu ở Nam Cực?", hints: ["Không bay được.", "Chim cánh …"], solution: "Chim cánh cụt." },
    { question: "Từ 1820 đến 1911 là bao nhiêu năm?", hints: ["1911 − 1820.", "Gần một thế kỉ."], solution: "91 năm." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Phần lớn diện tích châu Nam Cực bị băng phủ.", answer: true, explain: "Đúng, khoảng 98%." },
    { type: 'mcq', q: "Hiệp ước Nam Cực được kí năm:", options: ["1959", "1911", "1820", "1983"], answer: 0, explain: "1959." },
    { type: 'short', q: "Từ năm 1820 đến năm 1911 là bao nhiêu năm?", answer: "91", unit: "năm", calc: "1911-1820", explain: "91." },
    { type: 'mcq', q: "Người đầu tiên tới cực Nam (1911):", options: ["A-mun-xen", "Cô-lôm-bô", "Ma-gien-lan", "Cúc"], answer: 0, explain: "A-mun-xen." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Nam Cực có rừng rậm nhiệt đới.", answer: false, explain: "Chỉ có rêu, địa y." },
    { type: 'mcq', q: "Hậu quả khi băng Nam Cực tan nhiều:", options: ["Nước biển dâng", "Sa mạc mở rộng ở Nam Cực", "Nhiệt độ giảm mạnh", "Hết mưa toàn cầu"], answer: 0, explain: "Nước biển dâng." },
    { type: 'short', q: "Nhiệt độ ở Vô-xtốc tháng 1 khoảng −32 °C, tháng 8 khoảng −68 °C. Chênh lệch bao nhiêu °C?", answer: "36", unit: "°C", calc: "-32-(-68)", explain: "36." },
    { type: 'mcq', q: "Diện tích châu Nam Cực khoảng:", options: ["14,1 triệu km²", "44,4 triệu km²", "8,5 triệu km²", "42 triệu km²"], answer: 0, explain: "14,1 triệu km²." }
  ]
});
})();
