/* LS&ĐL 9 – Địa lí, Bài 12. Vùng Đồng bằng sông Hồng. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-9/dl-bai-12', {
  objectives: [
    "Trình bày được vị trí, phạm vi lãnh thổ của vùng (từ năm 2025).",
    "Phân tích được thế mạnh và hạn chế về tự nhiên, dân cư.",
    "Trình bày được sự phát triển kinh tế; vị thế của Thủ đô Hà Nội."
  ],
  intro: "Diện tích vùng chỉ khoảng 23 939 km² nhưng có mật độ dân số cao nhất cả nước và là trung tâm chính trị, văn hoá của cả nước. Vùng phát triển ra sao?",
  steps: [
    { title: "Phạm vi", html: "<p>Từ năm 2025, vùng gồm 6 tỉnh, thành phố: Hà Nội, Hải Phòng, Quảng Ninh, Bắc Ninh, Hưng Yên, Ninh Bình.</p>",
      svg: S.table({ title: "Các tỉnh, thành phố (từ năm 2025)", head: ["Tỉnh, thành phố", "Diện tích (km²)"], rows: [["Quảng Ninh", "6 207,93"], ["Bắc Ninh", "4 718,6"], ["Ninh Bình", "3 942,6"], ["Hà Nội", "3 359,84"], ["Hải Phòng", "3 194,7"], ["Hưng Yên", "2 514,8"]], colW: 250 }), caption: "Diện tích theo đề án sắp xếp đơn vị hành chính năm 2025 (Nghị quyết 306/NQ-CP). Tổng khoảng 23 939 km²." },
    { title: "Tự nhiên", html: "<ul><li>Đất phù sa sông Hồng màu mỡ; khí hậu có mùa đông lạnh – trồng được cây vụ đông.</li><li>Than (Quảng Ninh), vịnh Hạ Long – di sản thiên nhiên thế giới.</li><li>Hạn chế: thiếu đất, nhiều nơi ngập úng, đất bạc màu.</li></ul>" },
    { title: "Dân cư", html: "<p>Dân cư đông đúc nhất cả nước; lao động có trình độ; nhiều di sản văn hoá. Năm 2024 vùng có mức bất bình đẳng thu nhập thấp nhất (hệ số GINI 0,336 – Tổng cục Thống kê).</p>" },
    { title: "Kinh tế", html: "<div class=\"box key\">Công nghiệp – dịch vụ phát triển mạnh (điện tử, ô tô, cảng biển Hải Phòng); nông nghiệp thâm canh lúa, vụ đông. Hà Nội là trung tâm chính trị, kinh tế, văn hoá, giáo dục lớn của cả nước.</div>",
      svg: S.mindmap({ center: "Đồng bằng sông Hồng", branches: [{ title: "Công nghiệp", items: ["Điện tử", "Cơ khí"] }, { title: "Dịch vụ", items: ["Cảng biển", "Du lịch"] }, { title: "Nông nghiệp", items: ["Lúa", "Vụ đông"] }], w: 640, size: 13 }), caption: "Cơ cấu kinh tế chuyển dịch mạnh sang công nghiệp, dịch vụ." }
  ],
  summary: "Vùng Đồng bằng sông Hồng (từ 2025 gồm 6 tỉnh, thành phố, khoảng 23 939 km²) có đất phù sa, mùa đông lạnh, than và vịnh Hạ Long. Dân cư đông nhất, lao động có trình độ. Kinh tế phát triển mạnh công nghiệp, dịch vụ; nông nghiệp thâm canh. Hà Nội là trung tâm chính trị, kinh tế, văn hoá của cả nước.",
  examples: [
    { title: "Tính", problem: "Quảng Ninh rộng 6 207,93 km² so với tổng 23 939 km² chiếm bao nhiêu %?", solution: "≈ 25,9%." },
    { title: "Giải thích", problem: "Vì sao vùng trồng được cây vụ đông?", solution: "Khí hậu có mùa đông lạnh thích hợp rau ôn đới (su hào, bắp cải…)." },
    { title: "Nhận xét", problem: "Hạn chế lớn về đất?", solution: "Bình quân đất nông nghiệp đầu người thấp do dân quá đông." }
  ],
  exercises: [
    { question: "Di sản thiên nhiên của vùng?", hints: ["Ở Quảng Ninh.", "Vịnh …"], solution: "Vịnh Hạ Long." },
    { question: "Tỉnh có diện tích nhỏ nhất vùng (2025)?", hints: ["Gồm Thái Bình cũ.", "Hưng …"], solution: "Hưng Yên (2 514,8 km²)." },
    { question: "Cảng biển lớn của vùng?", hints: ["Thành phố cảng.", "Hải …"], solution: "Hải Phòng." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Đồng bằng sông Hồng có mật độ dân số cao nhất cả nước.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Từ năm 2025, Nam Định và Hà Nam cũ thuộc tỉnh:", options: ["Ninh Bình", "Hưng Yên", "Hà Nội", "Hải Phòng"], answer: 0, explain: "Ninh Bình." },
    { type: 'short', q: "Hà Nội 3 359,84 km², Hải Phòng 3 194,7 km². Tổng diện tích?", answer: "6554.54", answerText: "6554,54", unit: "km²", calc: "3359.84+3194.7", explain: "6 554,54." },
    { type: 'mcq', q: "Lợi thế nông nghiệp đặc biệt của vùng:", options: ["Vụ đông", "Cà phê", "Cao su", "Hồ tiêu"], answer: 0, explain: "Vụ đông." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Vùng không có tài nguyên than.", answer: false, explain: "Quảng Ninh có than." },
    { type: 'mcq', q: "Trung tâm chính trị của cả nước:", options: ["Hà Nội", "Hải Phòng", "Bắc Ninh", "Ninh Bình"], answer: 0, explain: "Hà Nội." },
    { type: 'short', q: "Vùng có 6 tỉnh, thành phố, tổng khoảng 23 939 km². Diện tích trung bình mỗi đơn vị (làm tròn đến km²)?", answer: "3990", answerText: "3 990", unit: "km²", calc: "Math.round(23939/6)", explain: "3 990." },
    { type: 'mcq', q: "Hạn chế của vùng:", options: ["Bình quân đất nông nghiệp thấp", "Thiếu lao động", "Ít di sản", "Không có biển"], answer: 0, explain: "Đất ít, người đông." }
  ]
});
})();
