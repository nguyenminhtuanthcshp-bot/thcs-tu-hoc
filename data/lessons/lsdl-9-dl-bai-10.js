/* LS&ĐL 9 – Địa lí, Bài 10. Thực hành: Tìm hiểu xu hướng phát triển ngành thương mại, du lịch. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-9/dl-bai-10', {
  objectives: [
    "Thu thập, xử lí số liệu về thương mại, du lịch.",
    "Nhận xét được xu hướng phát triển ngành thương mại, du lịch.",
    "Trình bày được kết quả dưới dạng bảng, báo cáo ngắn."
  ],
  intro: "Năm 2024, tổng kim ngạch xuất, nhập khẩu hàng hoá đạt mức kỉ lục 786,29 tỉ USD. Con số ấy cho thấy xu hướng gì?",
  steps: [
    { title: "Số liệu thương mại", html: "<p>Năm 2024 (Tổng cục Thống kê):</p>",
      svg: S.table({ title: "Xuất, nhập khẩu hàng hoá năm 2024", head: ["Chỉ tiêu", "Tỉ USD"], rows: [["Xuất khẩu", "405,53"], ["Nhập khẩu", "380,76"], ["Tổng kim ngạch", "786,29"], ["Xuất siêu", "24,77"]], colW: 250 }), caption: "Nguồn: Tổng cục Thống kê, năm 2024." },
    { title: "Các mốc xuất khẩu", html: "<p>Xuất khẩu hàng hoá vượt các mốc lớn ngày càng nhanh:</p>",
      svg: S.timeline({ title: "Kim ngạch xuất khẩu", items: [{ y: "2012", s: "Vượt 100 tỉ USD" }, { y: "2017", s: "Vượt 200 tỉ USD" }, { y: "2021", s: "Vượt 300 tỉ USD" }, { y: "2024", s: "Vượt 400 tỉ USD" }] }), caption: "Nguồn: Tổng cục Thống kê." },
    { title: "Du lịch", html: "<p>Khách quốc tế năm 2024 gần 17,6 triệu lượt, tăng 39,5% so với 2023, bằng 97,6% năm 2019 – năm trước dịch Covid-19. Khoảng 84,4% khách đến bằng đường hàng không.</p>" },
    { title: "Nhận xét xu hướng", html: "<div class=\"box key\">Thương mại tăng nhanh, cán cân xuất siêu; du lịch phục hồi mạnh sau dịch, hướng tới du lịch xanh, du lịch số.</div>" }
  ],
  summary: "Năm 2024, xuất khẩu 405,53 tỉ USD, nhập khẩu 380,76 tỉ USD, tổng kim ngạch 786,29 tỉ USD, xuất siêu 24,77 tỉ USD. Xuất khẩu vượt các mốc 100 (2012), 200 (2017), 300 (2021), 400 tỉ USD (2024). Khách quốc tế gần 17,6 triệu lượt, phục hồi gần bằng năm 2019 (Tổng cục Thống kê).",
  examples: [
    { title: "Tính", problem: "Kiểm tra: 405,53 + 380,76 = ?", solution: "786,29 tỉ USD – khớp tổng kim ngạch." },
    { title: "Tính", problem: "Từ mốc 300 tỉ (2021) đến 400 tỉ (2024) mất mấy năm?", solution: "3 năm." },
    { title: "Nhận xét", problem: "Thời gian vượt mỗi mốc 100 tỉ USD thay đổi thế nào?", solution: "Ngắn dần: 5 năm, 4 năm, 3 năm." }
  ],
  exercises: [
    { question: "Xuất khẩu năm 2024?", hints: ["Hơn 400 tỉ USD.", "405,…"], solution: "405,53 tỉ USD." },
    { question: "Xuất siêu năm 2024?", hints: ["Hơn 24 tỉ USD.", "24,…"], solution: "24,77 tỉ USD." },
    { question: "Khách quốc tế chủ yếu đến bằng?", hints: ["Hơn 84%.", "Đường …"], solution: "Đường hàng không." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Năm 2024, Việt Nam xuất siêu hàng hoá.", answer: true, explain: "Đúng, 24,77 tỉ USD." },
    { type: 'mcq', q: "Tổng kim ngạch xuất, nhập khẩu năm 2024:", options: ["786,29 tỉ USD", "405,53 tỉ USD", "100 tỉ USD", "1 000 tỉ USD"], answer: 0, explain: "786,29." },
    { type: 'short', q: "Xuất khẩu 405,53, nhập khẩu 380,76 tỉ USD. Tổng kim ngạch?", answer: "786.29", answerText: "786,29", unit: "tỉ USD", calc: "405.53+380.76", explain: "786,29." },
    { type: 'mcq', q: "Năm xuất khẩu lần đầu vượt 300 tỉ USD:", options: ["2021", "2017", "2012", "2024"], answer: 0, explain: "2021." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Năm 2024, lượng khách quốc tế vượt xa năm 2019.", answer: false, explain: "Bằng 97,6% năm 2019." },
    { type: 'mcq', q: "Phương tiện chủ yếu của khách quốc tế:", options: ["Hàng không", "Đường bộ", "Đường biển", "Đường sắt"], answer: 0, explain: "Hàng không (84,4%)." },
    { type: 'short', q: "Từ 2012 (100 tỉ USD) đến 2024 (400 tỉ USD) mất bao nhiêu năm?", answer: "12", unit: "năm", calc: "2024-2012", explain: "12." },
    { type: 'mcq', q: "Xu hướng du lịch hiện nay:", options: ["Du lịch xanh, du lịch số", "Đóng cửa biên giới", "Hạn chế khách quốc tế", "Bỏ quảng bá"], answer: 0, explain: "Du lịch xanh, số." }
  ]
});
})();
