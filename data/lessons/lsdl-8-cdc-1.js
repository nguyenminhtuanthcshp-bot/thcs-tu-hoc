/* LS&ĐL 8 – Chủ đề chung, Chủ đề chung 1. Văn minh châu thổ sông Hồng và sông Cửu Long. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-8/cdc-1', {
  objectives: [
    "Trình bày được quá trình hình thành và phát triển của châu thổ sông Hồng, sông Cửu Long.",
    "Nêu được những nét chính về nền văn minh ở hai châu thổ.",
    "Phân tích được mối quan hệ giữa con người và tự nhiên ở hai châu thổ."
  ],
  intro: "Nhà nước Văn Lang ra đời bên châu thổ sông Hồng; vương quốc Phù Nam với cảng thị Óc Eo phát triển ở châu thổ sông Cửu Long. Hai dòng sông lớn đã nuôi dưỡng những nền văn minh rực rỡ.",
  steps: [
    { title: "Văn minh châu thổ sông Hồng", html: "<p>Nền văn minh lúa nước gắn với nhà nước Văn Lang – Âu Lạc (khoảng thế kỉ VII TCN). Để trị thuỷ, cư dân đắp đê; hệ thống đê sông Hồng được xây dựng, củng cố qua nhiều triều đại (thời Trần đặt Hà đê sứ).</p>" },
    { title: "Văn minh châu thổ sông Cửu Long", html: "<p>Vương quốc Phù Nam (khoảng thế kỉ I – VII) với cảng thị Óc Eo buôn bán với nhiều nước. Từ thế kỉ XVII, người Việt cùng các dân tộc khai phá, đào kênh, “sống chung với lũ”.</p>",
      svg: S.table({ title: "So sánh hai châu thổ", head: ["Nội dung", "Sông Hồng / Sông Cửu Long"], rows: [["Trị thuỷ", "Đắp đê / Đào kênh, sống chung với lũ"], ["Văn minh sớm", "Văn Lang / Phù Nam (Óc Eo)"], ["Kinh tế", "Lúa nước / Lúa, cây ăn quả, thuỷ sản"]], colW: 250 }), caption: "Hai cách ứng xử khác nhau với tự nhiên." },
    { title: "Con người và tự nhiên", html: "<p>Mối quan hệ:</p>",
      svg: S.flowchart({ title: "Con người với châu thổ", steps: [{ t: 'start', s: "Phù sa bồi đắp" }, { t: 'proc', s: "Trồng lúa nước" }, { t: 'proc', s: "Trị thuỷ, làm thuỷ lợi" }, { t: 'end', s: "Hình thành làng xã, văn minh" }] }), caption: "Văn hoá làng xã là nét đặc trưng của châu thổ." },
    { title: "Ghi nhớ", html: "<div class=\"box key\">Châu thổ sông Hồng: đắp đê trị thuỷ, văn minh Văn Lang – Âu Lạc. Châu thổ sông Cửu Long: văn hoá Óc Eo – Phù Nam, đào kênh, sống chung với lũ.</div>" }
  ],
  summary: "Châu thổ sông Hồng gắn với văn minh lúa nước, nhà nước Văn Lang – Âu Lạc; cư dân đắp đê trị thuỷ qua nhiều thế kỉ. Châu thổ sông Cửu Long gắn với vương quốc Phù Nam (thế kỉ I – VII) và cảng thị Óc Eo; từ thế kỉ XVII được khai phá, đào kênh, sống chung với lũ. Con người thích ứng và cải tạo tự nhiên, tạo nên những nền văn minh đặc sắc.",
  examples: [
    { title: "Tính", problem: "Vương quốc Phù Nam tồn tại từ khoảng thế kỉ I đến thế kỉ VII, khoảng bao nhiêu thế kỉ?", solution: "Khoảng 7 thế kỉ." },
    { title: "So sánh", problem: "Cách trị thuỷ ở hai châu thổ khác nhau thế nào?", solution: "Sông Hồng: đắp đê ngăn lũ; sông Cửu Long: đào kênh thoát lũ, sống chung với lũ." },
    { title: "Giải thích", problem: "Vì sao văn minh lúa nước hình thành ở châu thổ?", solution: "Đất phù sa màu mỡ, nguồn nước dồi dào, khí hậu nóng ẩm." }
  ],
  exercises: [
    { question: "Cảng thị cổ ở châu thổ sông Cửu Long?", hints: ["Thuộc Phù Nam.", "Óc …"], solution: "Óc Eo." },
    { question: "Chức quan trông coi đê thời Trần?", hints: ["Hà đê …", "…"], solution: "Hà đê sứ." },
    { question: "Nêu một cách cư dân sông Cửu Long thích nghi với lũ.", hints: ["Nhà.", "Kênh."], solution: "Đào kênh, làm nhà sàn, sống chung với lũ." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Cư dân châu thổ sông Hồng đắp đê để trị thuỷ.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Văn hoá gắn với vương quốc Phù Nam:", options: ["Óc Eo", "Đông Sơn", "Sa Huỳnh", "Hoà Bình"], answer: 0, explain: "Óc Eo." },
    { type: 'short', q: "Phù Nam tồn tại khoảng từ thế kỉ I đến thế kỉ VII. Khoảng bao nhiêu thế kỉ?", answer: "7", unit: "thế kỉ", calc: "7-1+1", explain: "7." },
    { type: 'mcq', q: "Nhà nước sớm ở châu thổ sông Hồng:", options: ["Văn Lang", "Phù Nam", "Chăm-pa", "Chân Lạp"], answer: 0, explain: "Văn Lang." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Cư dân sông Cửu Long chỉ đắp đê cao để ngăn lũ.", answer: false, explain: "Chủ yếu đào kênh, sống chung với lũ." },
    { type: 'mcq', q: "Cây trồng chính ở cả hai châu thổ:", options: ["Lúa nước", "Cà phê", "Chè", "Cao su"], answer: 0, explain: "Lúa nước." },
    { type: 'short', q: "Hà đê sứ được đặt năm 1248. Đến năm 2048 là bao nhiêu năm?", answer: "800", unit: "năm", calc: "2048-1248", explain: "800." },
    { type: 'mcq', q: "Nét văn hoá đặc trưng của châu thổ:", options: ["Làng xã", "Du mục", "Săn bắt cá voi", "Đô thị hoang mạc"], answer: 0, explain: "Làng xã." }
  ]
});
})();
