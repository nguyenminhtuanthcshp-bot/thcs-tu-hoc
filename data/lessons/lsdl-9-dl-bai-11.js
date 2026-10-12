/* LS&ĐL 9 – Địa lí, Bài 11. Vùng Trung du và miền núi Bắc Bộ. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-9/dl-bai-11', {
  objectives: [
    "Trình bày được vị trí địa lí, phạm vi lãnh thổ của vùng (theo đơn vị hành chính từ năm 2025).",
    "Phân tích được thế mạnh tự nhiên và dân cư của vùng.",
    "Trình bày được sự phát triển các ngành kinh tế thế mạnh."
  ],
  intro: "Đây là vùng có diện tích lớn, giàu khoáng sản và thuỷ năng, nhưng thu nhập bình quân thấp nhất cả nước (gần 3,8 triệu đồng/người/tháng năm 2024). Vùng có những tiềm năng gì để vươn lên?",
  steps: [
    { title: "Phạm vi lãnh thổ", html: "<p>Từ năm 2025, vùng gồm 9 tỉnh: Lào Cai, Tuyên Quang, Thái Nguyên, Cao Bằng, Lạng Sơn, Phú Thọ, Sơn La, Lai Châu, Điện Biên; giáp Trung Quốc, Lào.</p>",
      svg: S.table({ title: "Một số tỉnh của vùng (từ năm 2025)", head: ["Tỉnh", "Diện tích (km²)"], rows: [["Sơn La", "14 109,83"], ["Tuyên Quang", "13 795,6"], ["Lào Cai", "13 257"], ["Điện Biên", "9 539,93"], ["Cả vùng (9 tỉnh)", "khoảng 92 518"]], colW: 250 }), caption: "Diện tích theo đề án sắp xếp đơn vị hành chính năm 2025 (Nghị quyết 306/NQ-CP)." },
    { title: "Thế mạnh tự nhiên", html: "<ul><li>Khoáng sản: than, a-pa-tít (Lào Cai), sắt, thiếc…</li><li>Thuỷ năng lớn trên hệ thống sông Hồng, sông Đà: thuỷ điện Sơn La (2 400 MW), Lai Châu (1 200 MW), Hoà Bình.</li><li>Khí hậu có mùa đông lạnh: trồng chè, cây dược liệu, rau ôn đới.</li></ul>" },
    { title: "Dân cư", html: "<p>Nhiều dân tộc: Thái, Mường, Tày, Nùng, Mông, Dao…; mật độ thấp. Năm 2024 vùng có tỉ lệ hộ nghèo cao nhất cả nước (7,8%) (Tổng cục Thống kê).</p>" },
    { title: "Kinh tế thế mạnh", html: "<div class=\"box key\">Khai khoáng, thuỷ điện; trồng chè, cây ăn quả, dược liệu; chăn nuôi trâu, bò; du lịch (Sa Pa, Mộc Châu, cao nguyên đá Đồng Văn); kinh tế cửa khẩu (Lạng Sơn, Lào Cai).</div>",
      svg: S.mindmap({ center: "Thế mạnh của vùng", branches: [{ title: "Năng lượng", items: ["Thuỷ điện"] }, { title: "Khoáng sản", items: ["Than", "A-pa-tít"] }, { title: "Nông nghiệp", items: ["Chè", "Dược liệu"] }, { title: "Du lịch", items: ["Sa Pa", "Mộc Châu"] }], w: 640, size: 13 }), caption: "Các thế mạnh chính." }
  ],
  summary: "Vùng Trung du và miền núi Bắc Bộ (từ 2025 gồm 9 tỉnh, diện tích khoảng 92 518 km²) giáp Trung Quốc và Lào, giàu khoáng sản, thuỷ năng (thuỷ điện Sơn La 2 400 MW), khí hậu có mùa đông lạnh. Dân cư gồm nhiều dân tộc, tỉ lệ hộ nghèo cao nhất cả nước (7,8% năm 2024). Thế mạnh: khai khoáng, thuỷ điện, chè, dược liệu, du lịch, kinh tế cửa khẩu.",
  examples: [
    { title: "Tính", problem: "Thuỷ điện Sơn La 2 400 MW gấp mấy lần Lai Châu 1 200 MW?", solution: "2 lần." },
    { title: "Giải thích", problem: "Vì sao vùng trồng được chè và rau ôn đới?", solution: "Khí hậu có mùa đông lạnh, địa hình cao làm nhiệt độ giảm." },
    { title: "Nhận xét", problem: "Thu nhập thấp nhất cả nước nói lên điều gì?", solution: "Vùng còn nhiều khó khăn về hạ tầng, trình độ phát triển – cần đầu tư, hỗ trợ." }
  ],
  exercises: [
    { question: "Tỉnh có a-pa-tít?", hints: ["Giáp Trung Quốc.", "Lào …"], solution: "Lào Cai." },
    { question: "Nhà máy thuỷ điện lớn nhất vùng?", hints: ["Trên sông Đà.", "Sơn …"], solution: "Thuỷ điện Sơn La." },
    { question: "Tỉ lệ hộ nghèo của vùng năm 2024?", hints: ["Cao nhất cả nước.", "7,…"], solution: "7,8%." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Vùng Trung du và miền núi Bắc Bộ có thế mạnh về thuỷ điện.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Khoáng sản a-pa-tít tập trung ở:", options: ["Lào Cai", "Quảng Ninh", "Lâm Đồng", "Cà Mau"], answer: 0, explain: "Lào Cai." },
    { type: 'short', q: "Thuỷ điện Sơn La 2 400 MW, Lai Châu 1 200 MW. Sơn La hơn Lai Châu bao nhiêu MW?", answer: "1200", answerText: "1 200", unit: "MW", calc: "2400-1200", explain: "1 200." },
    { type: 'mcq', q: "Cây công nghiệp tiêu biểu của vùng:", options: ["Chè", "Cà phê", "Cao su", "Hồ tiêu"], answer: 0, explain: "Chè." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Từ năm 2025, Hà Giang cũ là một phần của tỉnh Tuyên Quang.", answer: true, explain: "Đúng, Hà Giang + Tuyên Quang thành Tuyên Quang." },
    { type: 'mcq', q: "Khu du lịch nổi tiếng của vùng:", options: ["Sa Pa", "Vũng Tàu", "Phú Quốc", "Hội An"], answer: 0, explain: "Sa Pa." },
    { type: 'short', q: "Sơn La 14 109,83 km², Lào Cai 13 257 km². Chênh lệch bao nhiêu km²?", answer: "852.83", answerText: "852,83", unit: "km²", calc: "14109.83-13257", explain: "852,83." },
    { type: 'mcq', q: "Thu nhập bình quân của vùng năm 2024 so với cả nước:", options: ["Thấp nhất", "Cao nhất", "Trung bình", "Không xác định"], answer: 0, explain: "Thấp nhất." }
  ]
});
})();
