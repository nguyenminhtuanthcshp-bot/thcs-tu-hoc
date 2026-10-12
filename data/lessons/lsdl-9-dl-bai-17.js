/* LS&ĐL 9 – Địa lí, Bài 17. Vùng Tây Nguyên. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-9/dl-bai-17', {
  objectives: [
    "Trình bày được vị trí, phạm vi vùng Tây Nguyên theo SGK và sự thay đổi năm 2025.",
    "Phân tích được thế mạnh về đất badan, khí hậu, rừng, thuỷ năng.",
    "Trình bày được sự phát triển cây công nghiệp, lâm nghiệp, thuỷ điện, du lịch."
  ],
  intro: "Những đồi cà phê bạt ngàn trên đất đỏ badan đã đưa Việt Nam thành một trong những nước xuất khẩu cà phê lớn nhất thế giới. Tây Nguyên còn có những thế mạnh nào?",
  steps: [
    { title: "Phạm vi", html: "<p>Theo SGK, Tây Nguyên gồm 5 tỉnh: Kon Tum, Gia Lai, Đắk Lắk, Đắk Nông, Lâm Đồng. Từ năm 2025: Kon Tum cũ thuộc Quảng Ngãi; Đắk Nông cũ thuộc Lâm Đồng; Tây Nguyên cùng Duyên hải Nam Trung Bộ hợp thành một vùng kinh tế – xã hội.</p>",
      svg: S.sketchMap({ title: "Tây Nguyên (giản lược)", sea: false, areas: [{ pts: [[200, 20], [330, 30], [350, 120], [330, 230], [230, 250], [190, 140]], label: "Tây Nguyên", lx: 255, ly: 135, fill: "#fde68a" }], lines: [], points: [{ x: 255, y: 60, label: "Kon Tum" }, { x: 265, y: 105, label: "Plây-cu" }, { x: 270, y: 165, label: "Buôn Ma Thuột" }, { x: 280, y: 220, label: "Đà Lạt" }], note: 'Lược đồ giản lược, không theo tỉ lệ.' }), caption: "Chỉ thể hiện vị trí tương đối các đô thị." },
    { title: "Thế mạnh tự nhiên", html: "<ul><li>Đất badan rộng lớn, khí hậu cận xích đạo có mùa khô rõ rệt.</li><li>Rừng còn nhiều; thuỷ năng trên sông Xê Xan, Xrê Pốk, Đồng Nai.</li><li>Bô-xít trữ lượng lớn.</li><li>Hạn chế: mùa khô thiếu nước, cháy rừng.</li></ul>" },
    { title: "Dân cư", html: "<p>Nhiều dân tộc: Gia-rai, Ê-đê, Ba-na, Xơ-đăng, Mnông, Cơ-ho…; văn hoá cồng chiêng Tây Nguyên là di sản văn hoá phi vật thể của nhân loại. Năm 2024, Tây Nguyên có hệ số GINI 0,405 – cao nhất cả nước (Tổng cục Thống kê).</p>" },
    { title: "Kinh tế", html: "<div class=\"box key\">Cây công nghiệp lâu năm (cà phê, cao su, hồ tiêu, chè), rau hoa Đà Lạt; thuỷ điện; khai thác bô-xít, sản xuất alumin; du lịch sinh thái, văn hoá.</div>",
      svg: S.mindmap({ center: "Tây Nguyên", branches: [{ title: "Cây công nghiệp", items: ["Cà phê", "Hồ tiêu", "Cao su"] }, { title: "Năng lượng", items: ["Thuỷ điện"] }, { title: "Khoáng sản", items: ["Bô-xít"] }, { title: "Du lịch", items: ["Đà Lạt", "Cồng chiêng"] }], w: 640, size: 13 }), caption: "Các thế mạnh chính." }
  ],
  summary: "Tây Nguyên (theo SGK gồm 5 tỉnh; từ năm 2025 thuộc Gia Lai, Đắk Lắk, Lâm Đồng và phía tây Quảng Ngãi, hợp cùng Duyên hải Nam Trung Bộ thành một vùng) có đất badan, khí hậu cận xích đạo, rừng, thuỷ năng, bô-xít. Nhiều dân tộc với không gian văn hoá cồng chiêng. Thế mạnh: cà phê, hồ tiêu, cao su, rau hoa, thuỷ điện, bô-xít, du lịch.",
  examples: [
    { title: "Giải thích", problem: "Vì sao Tây Nguyên thiếu nước mùa khô?", solution: "Mùa khô kéo dài, mưa rất ít, mực nước ngầm hạ thấp." },
    { title: "Xác định", problem: "Đắk Nông cũ nay thuộc tỉnh nào?", solution: "Lâm Đồng." },
    { title: "Nhận xét", problem: "Ý nghĩa của văn hoá cồng chiêng?", solution: "Di sản văn hoá đặc sắc, tài nguyên du lịch, cần bảo tồn." }
  ],
  exercises: [
    { question: "Loại đất chủ yếu của Tây Nguyên?", hints: ["Màu đỏ, từ dung nham.", "Bad…"], solution: "Đất badan." },
    { question: "Kon Tum cũ nay thuộc tỉnh?", hints: ["Tỉnh ven biển miền Trung.", "Quảng …"], solution: "Quảng Ngãi." },
    { question: "Khoáng sản có trữ lượng lớn?", hints: ["Làm nhôm.", "Bô-…"], solution: "Bô-xít." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Tây Nguyên là vùng trồng cà phê lớn nhất nước ta.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Thành phố nổi tiếng với rau, hoa ở Tây Nguyên:", options: ["Đà Lạt", "Buôn Ma Thuột", "Plây-cu", "Kon Tum"], answer: 0, explain: "Đà Lạt." },
    { type: 'short', q: "Theo SGK Tây Nguyên có 5 tỉnh. Từ 2025, Kon Tum và Đắk Nông cũ đã nhập vào tỉnh khác. Còn bao nhiêu tỉnh giữ tên cũ?", answer: "3", unit: "tỉnh", calc: "5-2", explain: "3 (Gia Lai, Đắk Lắk, Lâm Đồng)." },
    { type: 'mcq', q: "Di sản văn hoá phi vật thể của nhân loại ở Tây Nguyên:", options: ["Không gian văn hoá cồng chiêng", "Nhã nhạc", "Ca trù", "Quan họ"], answer: 0, explain: "Cồng chiêng." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Khí hậu Tây Nguyên không có mùa khô.", answer: false, explain: "Có mùa khô rõ rệt." },
    { type: 'mcq', q: "Hạn chế lớn của Tây Nguyên mùa khô:", options: ["Thiếu nước, cháy rừng", "Băng giá", "Bão mạnh", "Ngập mặn"], answer: 0, explain: "Thiếu nước, cháy rừng." },
    { type: 'short', q: "Gia Lai mới 21 576,5 km², Đắk Lắk mới 18 096,4 km². Tổng?", answer: "39672.9", answerText: "39672,9", unit: "km²", calc: "21576.5+18096.4", explain: "39 672,9." },
    { type: 'mcq', q: "Hệ số GINI của Tây Nguyên năm 2024:", options: ["0,405 – cao nhất", "0,336 – thấp nhất", "0,1", "0,9"], answer: 0, explain: "0,405." }
  ]
});
})();
