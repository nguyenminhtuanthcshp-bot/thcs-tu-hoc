/* LS&ĐL 9 – Lịch sử, Bài 21. Việt Nam từ năm 1991 đến nay. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-9/ls-bai-21', {
  objectives: [
    "Trình bày được những thành tựu của công cuộc Đổi mới từ năm 1991.",
    "Nêu được quá trình hội nhập quốc tế của Việt Nam.",
    "Nêu được một số hạn chế và thách thức."
  ],
  intro: "Năm 2024, quy mô GDP của Việt Nam ước đạt 476,3 tỉ USD (Tổng cục Thống kê). Từ một nước nghèo, Việt Nam đã đạt được điều đó như thế nào?",
  steps: [
    { title: "Kinh tế", html: "<p>Kinh tế tăng trưởng khá cao, liên tục. Năm 2024 GDP tăng 7,09%; GDP bình quân đầu người khoảng 4 700 USD (Tổng cục Thống kê).</p>",
      svg: S.pieChart({ title: "Cơ cấu GDP năm 2024 (%)", parts: [{ v: 11.86, label: "Nông, lâm, thuỷ sản 11,86" }, { v: 37.64, label: "Công nghiệp, xây dựng 37,64" }, { v: 42.36, label: "Dịch vụ 42,36" }, { v: 8.14, label: "Thuế sản phẩm 8,14" }] }), caption: "Nguồn: Tổng cục Thống kê, Thông cáo báo chí kinh tế – xã hội năm 2024." },
    { title: "Hội nhập quốc tế", html: "<p>Các mốc quan trọng:</p>",
      svg: S.timeline({ title: "Hội nhập quốc tế", items: [{ y: "7/1995", s: "Vào ASEAN" }, { y: "1998", s: "APEC" }, { y: "1/2007", s: "WTO" }, { y: "2008 – 2009", s: "Uỷ viên HĐBA" }] }), caption: "Việt Nam gia nhập WTO ngày 11/1/2007." },
    { title: "Xã hội", html: "<ul><li>Tỉ lệ nghèo giảm mạnh; giáo dục, y tế được nâng cao.</li><li>Năm 2024 xuất khẩu hàng hoá đạt 405,53 tỉ USD (Tổng cục Thống kê).</li></ul>" },
    { title: "Hạn chế và thách thức", html: "<div class=\"box key\">Năng suất lao động còn thấp, ô nhiễm môi trường, chênh lệch giàu nghèo, biến đổi khí hậu; cần tiếp tục đổi mới, phát triển bền vững.</div>" }
  ],
  summary: "Từ năm 1991, công cuộc Đổi mới đạt nhiều thành tựu: kinh tế tăng trưởng cao (2024 tăng 7,09%; GDP khoảng 476,3 tỉ USD); cơ cấu chuyển dịch theo hướng công nghiệp hoá, hiện đại hoá. Việt Nam hội nhập sâu rộng: vào ASEAN (1995), APEC (1998), WTO (2007). Còn nhiều thách thức: năng suất thấp, môi trường, biến đổi khí hậu.",
  examples: [
    { title: "Tính", problem: "Năm 2024, công nghiệp – xây dựng 37,64%, dịch vụ 42,36%. Tổng hai khu vực?", solution: "80%." },
    { title: "Nhận xét", problem: "Cơ cấu GDP 2024 cho thấy điều gì?", solution: "Dịch vụ và công nghiệp chiếm phần lớn; nông nghiệp chỉ khoảng 12% – kinh tế chuyển dịch theo hướng công nghiệp hoá." },
    { title: "Giải thích", problem: "Lợi ích của gia nhập WTO?", solution: "Mở rộng thị trường xuất khẩu, thu hút đầu tư, thúc đẩy cải cách." }
  ],
  exercises: [
    { question: "Việt Nam vào WTO năm nào?", hints: ["Đầu năm 2007.", "Ngày 11/1."], solution: "11/1/2007." },
    { question: "Tăng trưởng GDP năm 2024?", hints: ["Trên 7%.", "7,0…"], solution: "7,09%." },
    { question: "Tỉ trọng dịch vụ năm 2024?", hints: ["Lớn nhất.", "42,…"], solution: "42,36%." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Việt Nam gia nhập Tổ chức Thương mại thế giới (WTO) năm 2007.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Tăng trưởng GDP năm 2024 (Tổng cục Thống kê):", options: ["7,09%", "5,05%", "8,02%", "2,91%"], answer: 0, explain: "7,09%." },
    { type: 'short', q: "Cơ cấu GDP 2024: công nghiệp – xây dựng 37,64%, dịch vụ 42,36%. Tổng hai khu vực bao nhiêu %?", answer: "80", unit: "%", calc: "37.64+42.36", explain: "80." },
    { type: 'mcq', q: "Khu vực chiếm tỉ trọng lớn nhất trong GDP năm 2024:", options: ["Dịch vụ", "Nông, lâm, thuỷ sản", "Công nghiệp, xây dựng", "Thuế sản phẩm"], answer: 0, explain: "Dịch vụ." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Việt Nam gia nhập APEC năm 2007.", answer: false, explain: "Năm 1998." },
    { type: 'mcq', q: "Kim ngạch xuất khẩu hàng hoá năm 2024:", options: ["405,53 tỉ USD", "100 tỉ USD", "786,29 tỉ USD", "47,6 tỉ USD"], answer: 0, explain: "405,53 tỉ USD (786,29 là tổng xuất nhập khẩu)." },
    { type: 'short', q: "Năm 2024 xuất khẩu 405,53 tỉ USD, nhập khẩu 380,76 tỉ USD. Xuất siêu bao nhiêu tỉ USD?", answer: "24.77", answerText: "24,77", unit: "tỉ USD", calc: "405.53-380.76", explain: "24,77." },
    { type: 'mcq', q: "Năm Việt Nam bình thường hoá quan hệ với Mỹ:", options: ["1995", "1991", "2000", "2007"], answer: 0, explain: "1995." }
  ]
});
})();
