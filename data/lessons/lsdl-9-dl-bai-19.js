/* LS&ĐL 9 – Địa lí, Bài 19. Thực hành: Tìm hiểu về vùng kinh tế trọng điểm phía Nam. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-9/dl-bai-19', {
  objectives: [
    "Thu thập thông tin về vùng kinh tế trọng điểm phía Nam.",
    "Trình bày được thế mạnh và vai trò của vùng.",
    "Viết được báo cáo ngắn."
  ],
  intro: "Vùng kinh tế trọng điểm phía Nam là nơi tập trung nhiều khu công nghiệp, cảng biển và trung tâm tài chính bậc nhất cả nước. Vùng gồm những địa phương nào và vì sao quan trọng?",
  steps: [
    { title: "Phạm vi", html: "<p>Trước năm 2025, vùng gồm 8 tỉnh, thành phố: TP Hồ Chí Minh, Đồng Nai, Bình Dương, Bà Rịa – Vũng Tàu, Bình Phước, Tây Ninh, Long An, Tiền Giang. Sau sắp xếp, các địa phương này thuộc TP Hồ Chí Minh, Đồng Nai, Tây Ninh và một phần Đồng Tháp.</p>",
      svg: S.table({ title: "Địa phương cũ thuộc đơn vị mới (2025)", head: ["Tỉnh cũ", "Thuộc"], rows: [["Bình Dương, BR – VT", "TP Hồ Chí Minh"], ["Bình Phước", "Đồng Nai"], ["Long An", "Tây Ninh"], ["Tiền Giang", "Đồng Tháp"]], colW: 250 }), caption: "Theo Nghị quyết 202/2025/QH15." },
    { title: "Thế mạnh", html: "<ul><li>Vị trí trung tâm phía Nam, cửa ngõ ra biển; cảng Cái Mép – Thị Vải, sân bay Tân Sơn Nhất, Long Thành (đang xây dựng).</li><li>Lao động trình độ cao, thị trường lớn.</li><li>Dầu khí, đất badan, đất xám.</li></ul>" },
    { title: "Dàn ý báo cáo", html: "<p>Gợi ý:</p>",
      svg: S.flowchart({ title: "Báo cáo", steps: [{ t: 'start', s: "Phạm vi" }, { t: 'proc', s: "Thế mạnh" }, { t: 'proc', s: "Ngành chủ đạo" }, { t: 'end', s: "Vai trò, định hướng" }] }), caption: "Tương tự bài thực hành về vùng kinh tế trọng điểm Bắc Bộ." },
    { title: "Vai trò", html: "<div class=\"box key\">Là vùng đóng góp lớn nhất vào GDP, xuất khẩu và thu ngân sách cả nước; đầu tàu của Nam Bộ; định hướng phát triển công nghiệp công nghệ cao, tài chính, logistics.</div>" }
  ],
  summary: "Vùng kinh tế trọng điểm phía Nam trước năm 2025 gồm 8 tỉnh, thành phố, nay thuộc TP Hồ Chí Minh, Đồng Nai, Tây Ninh và một phần Đồng Tháp. Thế mạnh: vị trí, cảng biển, sân bay, lao động, thị trường, dầu khí. Vai trò: đóng góp lớn nhất vào GDP, xuất khẩu; đầu tàu phát triển Nam Bộ.",
  examples: [
    { title: "So sánh", problem: "Trước 2025, vùng KTTĐ phía Nam có 8, Bắc Bộ có 7 tỉnh, thành phố. Chênh lệch?", solution: "1 đơn vị." },
    { title: "Giải thích", problem: "Vì sao cần sân bay Long Thành?", solution: "Tân Sơn Nhất quá tải; cần đầu mối hàng không quốc tế lớn." },
    { title: "Nhận xét", problem: "Ngành chủ đạo của vùng?", solution: "Dầu khí, điện tử, cơ khí, hoá chất, dịch vụ tài chính, logistics." }
  ],
  exercises: [
    { question: "Tiền Giang cũ nay thuộc tỉnh?", hints: ["Vùng ĐBSCL.", "Đồng …"], solution: "Đồng Tháp." },
    { question: "Sân bay đang xây dựng ở Đồng Nai?", hints: ["Tên một huyện cũ.", "Long …"], solution: "Sân bay Long Thành." },
    { question: "Bình Phước cũ nay thuộc tỉnh?", hints: ["Tỉnh láng giềng.", "Đồng …"], solution: "Đồng Nai." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Vùng kinh tế trọng điểm phía Nam đóng góp lớn nhất vào GDP cả nước.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Từ năm 2025, Bình Dương cũ thuộc:", options: ["TP Hồ Chí Minh", "Đồng Nai", "Tây Ninh", "Bình Phước"], answer: 0, explain: "TP Hồ Chí Minh." },
    { type: 'short', q: "Trước năm 2025 vùng có 8 tỉnh, thành phố. Nay các địa phương ấy thuộc 4 đơn vị. Giảm bao nhiêu đơn vị?", answer: "4", unit: "đơn vị", calc: "8-4", explain: "4." },
    { type: 'mcq', q: "Cảng nước sâu của vùng:", options: ["Cái Mép – Thị Vải", "Hải Phòng", "Dung Quất", "Nghi Sơn"], answer: 0, explain: "Cái Mép – Thị Vải." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Vùng không có tài nguyên dầu khí.", answer: false, explain: "Có dầu khí ở thềm lục địa." },
    { type: 'mcq', q: "Định hướng phát triển của vùng:", options: ["Công nghệ cao, tài chính, logistics", "Trồng lúa nước", "Khai thác than", "Chăn nuôi trâu"], answer: 0, explain: "Công nghệ cao, tài chính." },
    { type: 'short', q: "TP Hồ Chí Minh 6 772,6 km², Đồng Nai 12 737,2 km². Đồng Nai rộng gấp mấy lần (làm tròn 1 chữ số thập phân)?", answer: "1.9", answerText: "1,9", unit: "lần", calc: "Math.round(12737.2/6772.6*10)/10", explain: "1,9." },
    { type: 'mcq', q: "Sân bay quốc tế lớn đang hoạt động ở TP Hồ Chí Minh:", options: ["Tân Sơn Nhất", "Nội Bài", "Cam Ranh", "Phù Cát"], answer: 0, explain: "Tân Sơn Nhất." }
  ]
});
})();
