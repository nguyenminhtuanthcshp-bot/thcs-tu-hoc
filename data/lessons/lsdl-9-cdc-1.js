/* LS&ĐL 9 – Chủ đề chung, Chủ đề chung 1. Đô thị: Lịch sử và hiện tại. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-9/cdc-1', {
  objectives: [
    "Nêu được một số đô thị tiêu biểu trong lịch sử Việt Nam và thế giới.",
    "Trình bày được vai trò của đô thị trong phát triển.",
    "Nêu được đặc điểm đô thị hoá hiện nay và vấn đề phát triển đô thị bền vững."
  ],
  intro: "Từ kinh thành Thăng Long năm 1010 đến các siêu đô thị hiện đại, đô thị luôn là nơi hội tụ quyền lực, kinh tế và văn hoá. Đô thị đã biến đổi như thế nào?",
  steps: [
    { title: "Đô thị trong lịch sử", html: "<p>Các đô thị cổ ra đời sớm ở Lưỡng Hà, Ai Cập; thời trung đại có các thành thị châu Âu. Ở Việt Nam:</p>",
      svg: S.timeline({ title: "Một số đô thị Việt Nam", items: [{ y: "1010", s: "Thăng Long" }, { y: "Thế kỉ XVI – XVII", s: "Phố Hiến, Hội An" }, { y: "1698", s: "Sài Gòn – Gia Định" }, { y: "1802", s: "Phú Xuân – Huế" }] }), caption: "Mốc 1698 gắn với việc lập phủ Gia Định." },
    { title: "Vai trò của đô thị", html: "<ul><li>Trung tâm chính trị, kinh tế, văn hoá, giáo dục.</li><li>Thúc đẩy giao thương, đổi mới sáng tạo.</li><li>Lan toả phát triển cho vùng xung quanh.</li></ul>",
      svg: S.mindmap({ center: "Vai trò đô thị", branches: [{ title: "Chính trị", items: ["Cơ quan quản lí"] }, { title: "Kinh tế", items: ["Công nghiệp", "Dịch vụ"] }, { title: "Văn hoá", items: ["Di sản", "Giáo dục"] }], w: 640, size: 13 }), caption: "Ba vai trò chính." },
    { title: "Đô thị hoá hiện nay", html: "<p>Năm 2024, dân số thành thị khoảng 39 triệu người, chiếm 38,5% dân số (Tổng cục Thống kê). Từ năm 2025, cả nước có 6 thành phố trực thuộc Trung ương: Hà Nội, TP Hồ Chí Minh, Hải Phòng, Đà Nẵng, Cần Thơ, Huế.</p>" },
    { title: "Đô thị bền vững", html: "<div class=\"box key\">Phát triển đô thị xanh, thông minh; giao thông công cộng; bảo tồn di sản (phố cổ Hội An, Cố đô Huế); chống ngập, ô nhiễm; bảo đảm nhà ở cho người lao động.</div>" }
  ],
  summary: "Đô thị xuất hiện từ thời cổ đại. Ở Việt Nam có Thăng Long (1010), Phố Hiến, Hội An (thế kỉ XVI – XVII), Sài Gòn – Gia Định (1698), Huế. Đô thị là trung tâm chính trị, kinh tế, văn hoá. Năm 2024, dân thành thị chiếm 38,5%; từ năm 2025 có 6 thành phố trực thuộc Trung ương. Cần phát triển đô thị bền vững, xanh, thông minh.",
  examples: [
    { title: "Tính", problem: "Từ 1010 đến 2010 Thăng Long – Hà Nội tròn bao nhiêu năm?", solution: "1 000 năm." },
    { title: "Giải thích", problem: "Vì sao Hội An phát triển vào thế kỉ XVI – XVII?", solution: "Là thương cảng ven sông Thu Bồn gần biển, thuyền buôn nước ngoài tới buôn bán." },
    { title: "Nhận xét", problem: "Vấn đề lớn của đô thị lớn hiện nay?", solution: "Ùn tắc, ngập úng, ô nhiễm, thiếu nhà ở." }
  ],
  exercises: [
    { question: "Thăng Long được định đô năm nào?", hints: ["Thời Lý Công Uẩn.", "101…"], solution: "Năm 1010." },
    { question: "Thương cảng ở Đà Nẵng (trước thuộc Quảng Nam)?", hints: ["Phố cổ di sản thế giới.", "Hội …"], solution: "Hội An." },
    { question: "Có bao nhiêu thành phố trực thuộc Trung ương từ 2025?", hints: ["Thêm Huế.", "6."], solution: "6 thành phố." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Thăng Long được định đô năm 1010.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Thành phố trực thuộc Trung ương từ năm 2025:", options: ["Huế", "Nha Trang", "Vũng Tàu", "Đà Lạt"], answer: 0, explain: "Huế." },
    { type: 'short', q: "Dân số 101,3 triệu, thành thị 38,5%. Dân thành thị bao nhiêu triệu (làm tròn 1 chữ số thập phân)?", answer: "39", unit: "triệu người", calc: "Math.round(101.3*0.385*10)/10", explain: "39." },
    { type: 'mcq', q: "Đô thị gắn với việc lập phủ Gia Định năm 1698:", options: ["Sài Gòn", "Hội An", "Phố Hiến", "Thăng Long"], answer: 0, explain: "Sài Gòn." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Đô thị chỉ có vai trò về kinh tế.", answer: false, explain: "Có vai trò chính trị, kinh tế, văn hoá." },
    { type: 'mcq', q: "Biện pháp phát triển đô thị bền vững:", options: ["Phát triển giao thông công cộng", "Lấp hồ xây nhà", "Phá di sản", "Tăng xe cá nhân"], answer: 0, explain: "Giao thông công cộng." },
    { type: 'short', q: "Từ 1698 đến 2028 Sài Gòn – TP Hồ Chí Minh tròn bao nhiêu năm?", answer: "330", unit: "năm", calc: "2028-1698", explain: "330." },
    { type: 'mcq', q: "Phố Hiến từ năm 2025 thuộc tỉnh:", options: ["Hưng Yên", "Hải Phòng", "Ninh Bình", "Bắc Ninh"], answer: 0, explain: "Hưng Yên." }
  ]
});
})();
