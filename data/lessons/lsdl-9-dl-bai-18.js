/* LS&ĐL 9 – Địa lí, Bài 18. Vùng Đông Nam Bộ. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-9/dl-bai-18', {
  objectives: [
    "Trình bày được vị trí, phạm vi lãnh thổ của vùng (từ năm 2025).",
    "Phân tích được thế mạnh tự nhiên, dân cư, cơ sở hạ tầng.",
    "Trình bày được sự phát triển kinh tế năng động; vị thế của TP Hồ Chí Minh."
  ],
  intro: "Năm 2024, Đông Nam Bộ có thu nhập bình quân cao nhất (gần 7,1 triệu đồng/người/tháng) và tỉ lệ hộ nghèo thấp nhất (0,2%) cả nước. Vì sao vùng năng động như vậy?",
  steps: [
    { title: "Phạm vi", html: "<p>Từ năm 2025, vùng gồm 3 tỉnh, thành phố: TP Hồ Chí Minh (gồm cả Bình Dương, Bà Rịa – Vũng Tàu cũ), Đồng Nai (gồm cả Bình Phước cũ), Tây Ninh (gồm cả Long An cũ).</p>",
      svg: S.table({ title: "Các tỉnh, thành phố (từ năm 2025)", head: ["Tỉnh, thành phố", "Diện tích (km²)"], rows: [["Đồng Nai", "12 737,2"], ["Tây Ninh", "8 536,5"], ["TP Hồ Chí Minh", "6 772,6"]], colW: 250 }), caption: "Diện tích theo đề án sắp xếp đơn vị hành chính năm 2025 (Nghị quyết 306/NQ-CP). Tổng khoảng 28 046 km²." },
    { title: "Thế mạnh", html: "<ul><li>Đất badan, đất xám; khí hậu cận xích đạo – thuận lợi cây công nghiệp (cao su, điều, hồ tiêu).</li><li>Dầu khí ở thềm lục địa; cảng Cái Mép – Thị Vải.</li><li>Lao động đông, trình độ cao; hạ tầng hiện đại.</li></ul>" },
    { title: "Kinh tế", html: "<p>Cơ cấu:</p>",
      svg: S.mindmap({ center: "Đông Nam Bộ", branches: [{ title: "Công nghiệp", items: ["Dầu khí", "Điện tử", "Hoá chất"] }, { title: "Dịch vụ", items: ["Tài chính", "Logistics", "Du lịch"] }, { title: "Nông nghiệp", items: ["Cao su", "Điều"] }], w: 640, size: 13 }), caption: "Công nghiệp và dịch vụ chiếm ưu thế." },
    { title: "TP Hồ Chí Minh", html: "<div class=\"box key\">Thành phố lớn nhất cả nước về quy mô kinh tế; định hướng trở thành trung tâm tài chính quốc tế; đầu mối giao thông (Tân Sơn Nhất, cảng biển). Vấn đề: ùn tắc, ngập úng, ô nhiễm môi trường.</div>" }
  ],
  summary: "Đông Nam Bộ (từ 2025 gồm TP Hồ Chí Minh, Đồng Nai, Tây Ninh; khoảng 28 046 km²) có đất badan, đất xám, dầu khí, cảng nước sâu, lao động trình độ cao. Kinh tế năng động nhất cả nước: công nghiệp, dịch vụ phát triển mạnh; thu nhập cao nhất (gần 7,1 triệu đồng/người/tháng năm 2024), tỉ lệ hộ nghèo thấp nhất (0,2%).",
  examples: [
    { title: "Tính", problem: "Đồng Nai 12 737,2 km² chiếm khoảng bao nhiêu % diện tích vùng (28 046 km²)?", solution: "≈ 45,4%." },
    { title: "Giải thích", problem: "Vì sao vùng thu hút nhiều đầu tư nước ngoài?", solution: "Vị trí, hạ tầng, lao động trình độ cao, thị trường lớn, chính sách năng động." },
    { title: "Nhận xét", problem: "Thách thức của TP Hồ Chí Minh?", solution: "Ùn tắc giao thông, ngập úng, ô nhiễm." }
  ],
  exercises: [
    { question: "Bà Rịa – Vũng Tàu cũ nay thuộc?", hints: ["Thành phố lớn nhất.", "TP Hồ …"], solution: "TP Hồ Chí Minh." },
    { question: "Cảng nước sâu của vùng?", hints: ["Hai tên ghép.", "Cái Mép – …"], solution: "Cái Mép – Thị Vải." },
    { question: "Tỉ lệ hộ nghèo của vùng năm 2024?", hints: ["Thấp nhất.", "0,…"], solution: "0,2%." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Đông Nam Bộ có thu nhập bình quân đầu người cao nhất cả nước năm 2024.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Từ năm 2025, Long An cũ thuộc tỉnh:", options: ["Tây Ninh", "Đồng Nai", "TP Hồ Chí Minh", "Đồng Tháp"], answer: 0, explain: "Tây Ninh." },
    { type: 'short', q: "Đồng Nai 12 737,2, Tây Ninh 8 536,5, TP Hồ Chí Minh 6 772,6 km². Tổng diện tích vùng?", answer: "28046.3", answerText: "28046,3", unit: "km²", calc: "12737.2+8536.5+6772.6", explain: "28 046,3." },
    { type: 'mcq', q: "Khoáng sản quan trọng ở thềm lục địa:", options: ["Dầu khí", "Than đá", "A-pa-tít", "Bô-xít"], answer: 0, explain: "Dầu khí." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Nông nghiệp chiếm tỉ trọng lớn nhất trong kinh tế Đông Nam Bộ.", answer: false, explain: "Công nghiệp, dịch vụ chiếm ưu thế." },
    { type: 'mcq', q: "Cây công nghiệp tiêu biểu của vùng:", options: ["Cao su", "Chè", "Đay", "Cói"], answer: 0, explain: "Cao su." },
    { type: 'short', q: "Thu nhập Đông Nam Bộ 7,1 triệu, cả nước 5,4 triệu đồng/tháng. Cao hơn bao nhiêu?", answer: "1.7", answerText: "1,7", unit: "triệu đồng", calc: "7.1-5.4", explain: "1,7." },
    { type: 'mcq', q: "Định hướng của TP Hồ Chí Minh:", options: ["Trung tâm tài chính quốc tế", "Vùng chuyên canh lúa", "Khu khai thác than", "Vùng chăn nuôi"], answer: 0, explain: "Trung tâm tài chính." }
  ]
});
})();
