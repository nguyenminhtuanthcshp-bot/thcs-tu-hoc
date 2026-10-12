/* LS&ĐL 8 – Địa lí, Bài 1. Vị trí địa lí và phạm vi lãnh thổ Việt Nam. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-8/dl-bai-1', {
  objectives: [
    "Trình bày được đặc điểm vị trí địa lí của Việt Nam.",
    "Mô tả được phạm vi lãnh thổ: vùng đất, vùng biển, vùng trời.",
    "Phân tích được ảnh hưởng của vị trí địa lí đến tự nhiên Việt Nam."
  ],
  intro: "Từ cột cờ Lũng Cú ở cực Bắc đến mũi Cà Mau ở cực Nam, đất nước ta trải dài khoảng 15 vĩ độ. Vị trí ấy mang lại cho thiên nhiên Việt Nam những nét gì đặc biệt?",
  steps: [
    { title: "Vị trí địa lí", html: "<p>Việt Nam nằm ở rìa phía đông bán đảo Đông Dương, gần trung tâm khu vực Đông Nam Á; trong vùng nội chí tuyến bán cầu Bắc, khu vực gió mùa châu Á; giáp Biển Đông.</p>",
      svg: S.sketchMap({ title: "Việt Nam và các điểm cực (giản lược)", areas: [{ pts: [[170, 10], [300, 20], [290, 70], [240, 95], [262, 150], [290, 200], [280, 250], [230, 285], [200, 270], [245, 230], [255, 190], [225, 140], [200, 90], [160, 60]], label: "", lx: 0, ly: 0, fill: "#bbf7d0" }], lines: [], points: [{ x: 240, y: 12, label: "Lũng Cú (cực Bắc)" }, { x: 160, y: 55, label: "Sín Thầu (cực Tây)", left: true }, { x: 292, y: 195, label: "Mũi Đôi (cực Đông)" }, { x: 205, y: 282, label: "Đất Mũi (cực Nam)", left: true }, { x: 450, y: 170, label: "Biển Đông" }], note: 'Lược đồ giản lược, không theo tỉ lệ.' }), caption: "Sau sắp xếp đơn vị hành chính năm 2025: Lũng Cú thuộc tỉnh Tuyên Quang, Sín Thầu thuộc Điện Biên, Mũi Đôi thuộc Khánh Hoà, Đất Mũi thuộc Cà Mau." },
    { title: "Toạ độ các điểm cực", html: "<p>Bảng tóm tắt:</p>",
      svg: S.table({ title: "Các điểm cực trên đất liền", head: ["Điểm cực", "Vị trí (gần đúng)"], rows: [["Bắc – Lũng Cú", "23°23′B"], ["Nam – Đất Mũi", "8°34′B"], ["Tây – Sín Thầu", "102°09′Đ"], ["Đông – Mũi Đôi", "109°28′Đ"]], colW: 250 }), caption: "Toạ độ làm tròn đến phút, theo các nguồn công bố năm 2025." },
    { title: "Phạm vi lãnh thổ", html: "<ul><li><b>Vùng đất</b>: diện tích 331 344,8 km² (Niên giám thống kê 2023); đường biên giới đất liền với Trung Quốc khoảng 1 450 km, Lào khoảng 2 337 km, Cam-pu-chia khoảng 1 257 km.</li><li><b>Vùng biển</b>: rộng khoảng 1 triệu km² ở Biển Đông; đường bờ biển dài khoảng 3 260 km.</li><li><b>Vùng trời</b>: khoảng không gian bao trùm lãnh thổ.</li></ul>" },
    { title: "Ảnh hưởng của vị trí", html: "<div class=\"box key\">Vị trí nội chí tuyến, gần biển, trong khu vực gió mùa làm cho thiên nhiên nước ta mang tính nhiệt đới ẩm gió mùa, chịu ảnh hưởng sâu sắc của biển; tài nguyên sinh vật, khoáng sản phong phú; nhưng cũng nhiều thiên tai (bão, lũ).</div>" }
  ],
  summary: "Việt Nam nằm ở rìa đông bán đảo Đông Dương, trong vùng nội chí tuyến bán cầu Bắc và khu vực gió mùa châu Á. Lãnh thổ gồm vùng đất (331 344,8 km² – Niên giám thống kê 2023), vùng biển (khoảng 1 triệu km²) và vùng trời. Đường bờ biển dài khoảng 3 260 km. Vị trí làm thiên nhiên mang tính nhiệt đới ẩm gió mùa, chịu ảnh hưởng của biển.",
  examples: [
    { title: "Tính", problem: "Từ 8°34′B đến 23°23′B là bao nhiêu độ (làm tròn đến độ)?", solution: "Khoảng 15 độ vĩ." },
    { title: "Tính", problem: "Tổng chiều dài biên giới đất liền (1 450 + 2 337 + 1 257) là bao nhiêu km?", solution: "5 044 km (gần đúng)." },
    { title: "Giải thích", problem: "Vì sao thiên nhiên nước ta không bị khô hạn như nhiều nước cùng vĩ độ ở Tây Á, Bắc Phi?", solution: "Nhờ giáp biển và nằm trong khu vực gió mùa, nhận lượng mưa lớn." }
  ],
  exercises: [
    { question: "Điểm cực Bắc ở đâu?", hints: ["Có cột cờ nổi tiếng.", "Lũng …"], solution: "Lũng Cú (Tuyên Quang)." },
    { question: "Vùng biển nước ta rộng khoảng bao nhiêu?", hints: ["Gấp khoảng 3 lần đất liền.", "… triệu km²."], solution: "Khoảng 1 triệu km²." },
    { question: "Đường biên giới với Lào dài khoảng 2 337 km, với Trung Quốc khoảng 1 450 km. Chênh lệch?", hints: ["Trừ.", "Gần 900."], solution: "887 km." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Việt Nam nằm trong vùng nội chí tuyến bán cầu Bắc.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Diện tích đất liền Việt Nam (Niên giám thống kê 2023):", options: ["331 344,8 km²", "1 triệu km²", "3 260 km²", "100 000 km²"], answer: 0, explain: "331 344,8 km²." },
    { type: 'short', q: "Biên giới với Trung Quốc 1 450 km, Lào 2 337 km, Cam-pu-chia 1 257 km (làm tròn). Tổng bao nhiêu km?", answer: "5044", answerText: "5 044", unit: "km", calc: "1450+2337+1257", explain: "5 044." },
    { type: 'mcq', q: "Điểm cực Nam phần đất liền:", options: ["Đất Mũi", "Lũng Cú", "Sín Thầu", "Mũi Đôi"], answer: 0, explain: "Đất Mũi." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Việt Nam không giáp biển.", answer: false, explain: "Giáp Biển Đông, bờ biển khoảng 3 260 km." },
    { type: 'mcq', q: "Đường bờ biển Việt Nam dài khoảng:", options: ["3 260 km", "1 650 km", "5 044 km", "1 000 km"], answer: 0, explain: "3 260 km." },
    { type: 'short', q: "Lãnh thổ trải từ khoảng 8°B đến 23°B. Qua bao nhiêu độ vĩ?", answer: "15", unit: "độ", calc: "23-8", explain: "15." },
    { type: 'mcq', q: "Nước có đường biên giới đất liền dài nhất với Việt Nam:", options: ["Lào", "Trung Quốc", "Cam-pu-chia", "Thái Lan"], answer: 0, explain: "Lào." }
  ]
});
})();
