/* LS&ĐL 9 – Lịch sử, Bài 8. Cách mạng tháng Tám năm 1945. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-9/ls-bai-8', {
  objectives: [
    "Trình bày được sự chuẩn bị cho Cách mạng tháng Tám (1939 – 1945).",
    "Trình bày được diễn biến tổng khởi nghĩa giành chính quyền.",
    "Phân tích được nguyên nhân thắng lợi và ý nghĩa lịch sử."
  ],
  intro: "Chỉ trong khoảng nửa tháng, nhân dân cả nước đã giành chính quyền. Ngày 2/9/1945, nước Việt Nam Dân chủ Cộng hoà ra đời. Thắng lợi ấy được chuẩn bị ra sao?",
  steps: [
    { title: "Chuẩn bị lực lượng", html: "<ul><li>28/1/<b>1941</b>: Nguyễn Ái Quốc về nước, ở Pác Bó (Cao Bằng).</li><li>19/5/1941: thành lập Mặt trận Việt Minh.</li><li>22/12/<b>1944</b>: thành lập Đội Việt Nam Tuyên truyền Giải phóng quân.</li><li>9/3/1945: Nhật đảo chính Pháp; Chỉ thị “Nhật – Pháp bắn nhau và hành động của chúng ta” (12/3/1945).</li></ul>" },
    { title: "Tổng khởi nghĩa", html: "<p>Ngày 15/8/1945, Nhật đầu hàng Đồng minh. Hội nghị toàn quốc của Đảng (14 – 15/8) và Quốc dân Đại hội Tân Trào (16 – 17/8) quyết định tổng khởi nghĩa.</p>",
      svg: S.timeline({ title: "Tháng Tám năm 1945", items: [{ y: "14 – 15/8", s: "Hội nghị toàn quốc" }, { y: "16/8", s: "Quốc dân Đại hội" }, { y: "19/8", s: "Hà Nội" }, { y: "23/8", s: "Huế" }, { y: "25/8", s: "Sài Gòn" }, { y: "30/8", s: "Bảo Đại thoái vị" }, { y: "2/9", s: "Tuyên ngôn Độc lập" }] }), caption: "Tổng khởi nghĩa thắng lợi trong cả nước từ 14 đến 28/8/1945." },
    { title: "Ngày 2/9/1945", html: "<p>Tại Quảng trường Ba Đình, Chủ tịch Hồ Chí Minh đọc <b>Tuyên ngôn Độc lập</b>, khai sinh nước Việt Nam Dân chủ Cộng hoà.</p>",
      svg: S.mindmap({ center: "Nguyên nhân thắng lợi", branches: [{ title: "Khách quan", items: ["Đồng minh đánh bại phát xít"] }, { title: "Chủ quan", items: ["Truyền thống yêu nước", "Đảng lãnh đạo đúng", "Chuẩn bị 15 năm", "Chớp thời cơ"] }], w: 640, size: 13 }), caption: "Chủ quan giữ vai trò quyết định." },
    { title: "Ý nghĩa", html: "<div class=\"box key\">Phá tan ách thống trị của Pháp – Nhật, lật đổ chế độ phong kiến; mở ra kỉ nguyên độc lập, tự do; cổ vũ phong trào giải phóng dân tộc trên thế giới.</div>" }
  ],
  summary: "Từ 1941 Nguyễn Ái Quốc về nước, lập Mặt trận Việt Minh (19/5/1941), Đội Việt Nam Tuyên truyền Giải phóng quân (22/12/1944). Khi Nhật đầu hàng (15/8/1945), Đảng phát động tổng khởi nghĩa; giành chính quyền ở Hà Nội (19/8), Huế (23/8), Sài Gòn (25/8). Ngày 2/9/1945, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập, khai sinh nước Việt Nam Dân chủ Cộng hoà.",
  examples: [
    { title: "Tính", problem: "Từ 19/8 đến 25/8/1945 cách nhau bao nhiêu ngày?", solution: "25 − 19 = 6 ngày." },
    { title: "Giải thích", problem: "Thời cơ “ngàn năm có một” là gì?", solution: "Nhật đã đầu hàng, quân Đồng minh chưa vào; kẻ thù cũ hoang mang, nhân dân sẵn sàng." },
    { title: "Đánh giá", problem: "Vì sao nhân tố chủ quan là quyết định?", solution: "Đảng chuẩn bị lực lượng suốt 15 năm, có đường lối đúng và chớp đúng thời cơ." }
  ],
  exercises: [
    { question: "Mặt trận Việt Minh thành lập ngày nào?", hints: ["Trùng ngày sinh Nguyễn Ái Quốc.", "Ngày 19/5."], solution: "19/5/1941." },
    { question: "Giành chính quyền ở Hà Nội ngày nào?", hints: ["Ngày kỉ niệm Cách mạng tháng Tám.", "Ngày 19/…"], solution: "19/8/1945." },
    { question: "Ai đọc Tuyên ngôn Độc lập?", hints: ["Chủ tịch nước.", "Hồ …"], solution: "Chủ tịch Hồ Chí Minh." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Ngày 2/9/1945, nước Việt Nam Dân chủ Cộng hoà ra đời.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Nơi họp Quốc dân Đại hội tháng 8/1945:", options: ["Tân Trào", "Pác Bó", "Ba Đình", "Hương Cảng"], answer: 0, explain: "Tân Trào." },
    { type: 'short', q: "Từ 1945 đến 2025 là bao nhiêu năm?", answer: "80", unit: "năm", calc: "2025-1945", explain: "80." },
    { type: 'mcq', q: "Ngày giành chính quyền ở Sài Gòn:", options: ["25/8/1945", "19/8/1945", "23/8/1945", "2/9/1945"], answer: 0, explain: "25/8/1945." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Tổng khởi nghĩa nổ ra trước khi Nhật đầu hàng Đồng minh.", answer: false, explain: "Nhật đầu hàng 15/8, tổng khởi nghĩa ngay sau đó." },
    { type: 'mcq', q: "Đội Việt Nam Tuyên truyền Giải phóng quân thành lập:", options: ["22/12/1944", "19/5/1941", "9/3/1945", "19/8/1945"], answer: 0, explain: "22/12/1944." },
    { type: 'short', q: "Từ 1930 (thành lập Đảng) đến 1945 là bao nhiêu năm chuẩn bị?", answer: "15", unit: "năm", calc: "1945-1930", explain: "15." },
    { type: 'mcq', q: "Ngày Nhật đảo chính Pháp ở Đông Dương:", options: ["9/3/1945", "15/8/1945", "12/3/1945", "2/9/1945"], answer: 0, explain: "9/3/1945." }
  ]
});
})();
