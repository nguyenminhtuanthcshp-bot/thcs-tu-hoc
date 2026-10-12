/* LS&ĐL 9 – Địa lí, Bài 13. Thực hành: Tìm hiểu về vùng kinh tế trọng điểm Bắc Bộ. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-9/dl-bai-13', {
  objectives: [
    "Thu thập thông tin về vùng kinh tế trọng điểm Bắc Bộ.",
    "Trình bày được thế mạnh và vai trò của vùng kinh tế trọng điểm.",
    "Viết được báo cáo ngắn."
  ],
  intro: "Vùng kinh tế trọng điểm là “đầu tàu” kéo cả miền Bắc phát triển. Ở phía Bắc, đầu tàu ấy gồm những địa phương nào?",
  steps: [
    { title: "Phạm vi", html: "<p>Trước năm 2025, vùng kinh tế trọng điểm Bắc Bộ gồm 7 tỉnh, thành phố: Hà Nội, Hải Phòng, Quảng Ninh, Hải Dương, Hưng Yên, Bắc Ninh, Vĩnh Phúc. Sau sắp xếp, các địa phương này thuộc Hà Nội, Hải Phòng, Quảng Ninh, Hưng Yên, Bắc Ninh, Phú Thọ.</p>",
      svg: S.sketchMap({ title: "Tam giác tăng trưởng phía Bắc (giản lược)", sea: false, areas: [], lines: [{ pts: [[120, 180], [330, 150], [400, 90], [120, 180]], label: "" }], points: [{ x: 120, y: 180, label: "Hà Nội", left: true }, { x: 330, y: 150, label: "Hải Phòng" }, { x: 400, y: 90, label: "Quảng Ninh" }], note: 'Lược đồ giản lược, không theo tỉ lệ.' }), caption: "Tam giác Hà Nội – Hải Phòng – Quảng Ninh." },
    { title: "Thế mạnh", html: "<ul><li>Vị trí đầu mối giao thông, cảng biển, sân bay quốc tế Nội Bài.</li><li>Lao động có trình độ, nhiều trường đại học, viện nghiên cứu.</li><li>Nhiều khu công nghiệp điện tử, ô tô, cơ khí.</li></ul>" },
    { title: "Dàn ý báo cáo", html: "<p>Gợi ý:</p>",
      svg: S.flowchart({ title: "Báo cáo vùng kinh tế trọng điểm", steps: [{ t: 'start', s: "Phạm vi, vị trí" }, { t: 'proc', s: "Thế mạnh" }, { t: 'proc', s: "Các ngành chủ đạo" }, { t: 'end', s: "Vai trò, định hướng" }] }), caption: "Có thể dùng số liệu từ cổng thông tin các tỉnh." },
    { title: "Vai trò", html: "<div class=\"box key\">Đóng góp lớn vào GDP, xuất khẩu, thu ngân sách; lan toả phát triển ra các vùng lân cận; định hướng xây dựng khu vực Hải Phòng – Quảng Ninh thành trung tâm kinh tế biển hiện đại.</div>" }
  ],
  summary: "Vùng kinh tế trọng điểm Bắc Bộ trước năm 2025 gồm 7 tỉnh, thành phố, nay thuộc Hà Nội, Hải Phòng, Quảng Ninh, Hưng Yên, Bắc Ninh, Phú Thọ. Thế mạnh: vị trí, giao thông, lao động trình độ cao, khu công nghiệp. Vai trò: đầu tàu kinh tế miền Bắc, lan toả phát triển.",
  examples: [
    { title: "Xác định", problem: "Ba đỉnh của tam giác tăng trưởng phía Bắc?", solution: "Hà Nội – Hải Phòng – Quảng Ninh." },
    { title: "Giải thích", problem: "Vì sao vùng thu hút nhiều đầu tư điện tử?", solution: "Hạ tầng khu công nghiệp tốt, lao động trẻ, gần cảng và sân bay, chính sách ưu đãi." },
    { title: "Liên hệ", problem: "Một khu công nghiệp lớn ở Bắc Ninh?", solution: "Ví dụ: khu công nghiệp Yên Phong." }
  ],
  exercises: [
    { question: "Trước 2025 vùng có mấy tỉnh, thành phố?", hints: ["Lớn hơn 5.", "…7."], solution: "7 tỉnh, thành phố." },
    { question: "Vĩnh Phúc cũ nay thuộc tỉnh nào?", hints: ["Một tỉnh trung du.", "Phú …"], solution: "Phú Thọ." },
    { question: "Sân bay quốc tế của vùng?", hints: ["Ở Hà Nội.", "Nội …"], solution: "Nội Bài." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Hà Nội, Hải Phòng, Quảng Ninh tạo thành tam giác tăng trưởng phía Bắc.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Hải Dương cũ từ năm 2025 thuộc:", options: ["Hải Phòng", "Hà Nội", "Bắc Ninh", "Hưng Yên"], answer: 0, explain: "Hải Phòng." },
    { type: 'short', q: "Trước 2025 vùng có 7 đơn vị; sau sắp xếp các địa phương ấy thuộc 6 tỉnh, thành phố. Giảm mấy đơn vị?", answer: "1", unit: "đơn vị", calc: "7-6", explain: "1." },
    { type: 'mcq', q: "Thế mạnh nổi bật của vùng:", options: ["Lao động trình độ cao, hạ tầng tốt", "Đất badan", "Khí hậu khô hạn", "Rừng ngập mặn lớn nhất"], answer: 0, explain: "Lao động, hạ tầng." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Vùng kinh tế trọng điểm Bắc Bộ không có cảng biển.", answer: false, explain: "Có cảng Hải Phòng, Quảng Ninh." },
    { type: 'mcq', q: "Phần mở đầu báo cáo nên nêu:", options: ["Phạm vi, vị trí", "Kết luận", "Tài liệu tham khảo", "Lời cảm ơn"], answer: 0, explain: "Phạm vi, vị trí." },
    { type: 'short', q: "Hà Nội 3 359,84 km², Hải Phòng 3 194,7 km², Quảng Ninh 6 207,93 km². Tổng diện tích tam giác (làm tròn đến km²)?", answer: "12762", answerText: "12 762", unit: "km²", calc: "Math.round(3359.84+3194.7+6207.93)", explain: "12 762." },
    { type: 'mcq', q: "Định hướng cho khu vực Hải Phòng – Quảng Ninh:", options: ["Trung tâm kinh tế biển hiện đại", "Vùng trồng cà phê", "Vùng chăn nuôi gia súc lớn", "Vùng khai thác dầu khí chính"], answer: 0, explain: "Kinh tế biển." }
  ]
});
})();
