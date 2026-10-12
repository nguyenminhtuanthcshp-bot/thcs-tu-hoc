/* LS&ĐL 9 – Địa lí, Bài 9. Dịch vụ. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-9/dl-bai-9', {
  objectives: [
    "Trình bày được vai trò và các nhân tố ảnh hưởng đến ngành dịch vụ.",
    "Trình bày được sự phát triển giao thông vận tải, bưu chính viễn thông.",
    "Nêu được tình hình thương mại, du lịch."
  ],
  intro: "Năm 2024, khu vực dịch vụ chiếm 42,36% GDP – lớn nhất trong ba khu vực kinh tế (Tổng cục Thống kê). Dịch vụ len vào đời sống mỗi người như thế nào?",
  steps: [
    { title: "Vai trò", html: "<p>Dịch vụ cung cấp nguyên liệu, tiêu thụ sản phẩm, tạo mối liên hệ giữa các ngành, các vùng; tạo nhiều việc làm, nâng cao đời sống.</p>",
      svg: S.mindmap({ center: "Ngành dịch vụ", branches: [{ title: "Tiêu dùng", items: ["Thương mại", "Ăn uống"] }, { title: "Sản xuất", items: ["Giao thông", "Ngân hàng"] }, { title: "Công", items: ["Giáo dục", "Y tế"] }], w: 640, size: 13 }), caption: "Ba nhóm dịch vụ." },
    { title: "Giao thông vận tải", html: "<ul><li>Đường bộ: quốc lộ 1, đường Hồ Chí Minh, cao tốc Bắc – Nam.</li><li>Đường sắt Thống Nhất (Hà Nội – TP Hồ Chí Minh).</li><li>Cảng biển: Hải Phòng, Đà Nẵng, Cái Mép – Thị Vải; sân bay quốc tế Nội Bài, Tân Sơn Nhất, Đà Nẵng…</li></ul>" },
    { title: "Bưu chính viễn thông", html: "<p>Phát triển nhanh, hiện đại; Internet, chuyển đổi số lan rộng tới vùng nông thôn, miền núi.</p>" },
    { title: "Thương mại và du lịch", html: "<p>Năm 2024 (Tổng cục Thống kê): tổng mức bán lẻ hàng hoá và doanh thu dịch vụ tiêu dùng tăng 9,0%; xuất khẩu hàng hoá 405,53 tỉ USD; khách quốc tế gần 17,6 triệu lượt.</p>",
      svg: S.table({ title: "Một số chỉ tiêu dịch vụ năm 2024", head: ["Chỉ tiêu", "Giá trị"], rows: [["Tỉ trọng dịch vụ trong GDP", "42,36%"], ["Xuất khẩu hàng hoá", "405,53 tỉ USD"], ["Khách quốc tế", "gần 17,6 triệu lượt"]], colW: 250 }), caption: "Nguồn: Tổng cục Thống kê, năm 2024." }
  ],
  summary: "Dịch vụ năm 2024 chiếm 42,36% GDP. Giao thông vận tải có đủ loại hình: đường bộ (quốc lộ 1, cao tốc Bắc – Nam), đường sắt Thống Nhất, cảng biển, sân bay. Bưu chính viễn thông phát triển nhanh. Thương mại, du lịch tăng trưởng: bán lẻ tăng 9,0%, xuất khẩu 405,53 tỉ USD, khách quốc tế gần 17,6 triệu lượt (Tổng cục Thống kê).",
  examples: [
    { title: "Tính", problem: "Khách quốc tế 2024 gần 17,6 triệu, tăng 39,5% so với 2023. Năm 2023 khoảng bao nhiêu?", solution: "17,6 : 1,395 ≈ 12,6 triệu lượt." },
    { title: "Giải thích", problem: "Vì sao quốc lộ 1 quan trọng?", solution: "Chạy dọc đất nước, nối hầu hết các vùng kinh tế." },
    { title: "Nhận xét", problem: "Vai trò của chuyển đổi số với dịch vụ?", solution: "Giao dịch nhanh, thương mại điện tử, dịch vụ công trực tuyến." }
  ],
  exercises: [
    { question: "Tỉ trọng dịch vụ trong GDP 2024?", hints: ["Lớn nhất.", "42,…"], solution: "42,36%." },
    { question: "Tuyến đường sắt dài nhất?", hints: ["Nối hai thành phố lớn nhất.", "Thống …"], solution: "Đường sắt Thống Nhất." },
    { question: "Khách quốc tế năm 2024?", hints: ["Gần 18 triệu.", "17,…"], solution: "Gần 17,6 triệu lượt." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Năm 2024, dịch vụ là khu vực chiếm tỉ trọng lớn nhất trong GDP.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Tuyến đường bộ xuyên suốt dọc đất nước:", options: ["Quốc lộ 1", "Quốc lộ 6", "Đường 9", "Quốc lộ 5"], answer: 0, explain: "Quốc lộ 1." },
    { type: 'short', q: "Khách quốc tế 2024 khoảng 17,6 triệu lượt, bằng 97,6% năm 2019. Năm 2019 khoảng bao nhiêu triệu (làm tròn 1 chữ số thập phân)?", answer: "18", unit: "triệu lượt", calc: "Math.round(17.6/0.976*10)/10", explain: "18." },
    { type: 'mcq', q: "Dịch vụ công:", options: ["Giáo dục, y tế", "Bán lẻ", "Ngân hàng", "Vận tải"], answer: 0, explain: "Giáo dục, y tế." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Năm 2024 khách quốc tế đến Việt Nam giảm so với 2023.", answer: false, explain: "Tăng 39,5%." },
    { type: 'mcq', q: "Cảng biển lớn ở miền Bắc:", options: ["Hải Phòng", "Cái Mép", "Quy Nhơn", "Cần Thơ"], answer: 0, explain: "Hải Phòng." },
    { type: 'short', q: "Dịch vụ 42,36%, công nghiệp – xây dựng 37,64%. Dịch vụ hơn bao nhiêu điểm %?", answer: "4.72", answerText: "4,72", unit: "điểm %", calc: "42.36-37.64", explain: "4,72." },
    { type: 'mcq', q: "Sân bay quốc tế ở Hà Nội:", options: ["Nội Bài", "Tân Sơn Nhất", "Cam Ranh", "Phú Quốc"], answer: 0, explain: "Nội Bài." }
  ]
});
})();
