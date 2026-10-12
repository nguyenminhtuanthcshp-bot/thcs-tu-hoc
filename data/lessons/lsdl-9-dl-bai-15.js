/* LS&ĐL 9 – Địa lí, Bài 15. Vùng Duyên hải Nam Trung Bộ. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-9/dl-bai-15', {
  objectives: [
    "Trình bày được vị trí, phạm vi lãnh thổ của vùng và sự thay đổi tổ chức không gian năm 2025.",
    "Phân tích được thế mạnh biển và tự nhiên.",
    "Trình bày được sự phát triển kinh tế biển của vùng."
  ],
  intro: "Từ Đà Nẵng đến Phan Thiết là chuỗi bãi biển, vũng vịnh, cảng nước sâu. Vùng duyên hải này khai thác “mặt tiền biển” như thế nào?",
  steps: [
    { title: "Phạm vi và tổ chức mới", html: "<p>Theo SGK, vùng gồm dải tỉnh ven biển từ Đà Nẵng đến Bình Thuận, có hai quần đảo Hoàng Sa (thuộc TP Đà Nẵng) và Trường Sa (thuộc tỉnh Khánh Hoà). Từ năm 2025, vùng này cùng Tây Nguyên hợp thành <b>vùng Duyên hải Nam Trung Bộ và Tây Nguyên</b> gồm 6 tỉnh, thành phố: Đà Nẵng, Quảng Ngãi, Gia Lai, Đắk Lắk, Khánh Hoà, Lâm Đồng.</p>",
      svg: S.table({ title: "Tỉnh ven biển cũ thuộc tỉnh mới (2025)", head: ["Tỉnh cũ", "Thuộc"], rows: [["Quảng Nam", "TP Đà Nẵng"], ["Bình Định", "Gia Lai"], ["Phú Yên", "Đắk Lắk"], ["Ninh Thuận", "Khánh Hoà"], ["Bình Thuận", "Lâm Đồng"]], colW: 250 }), caption: "Theo Nghị quyết 202/2025/QH15." },
    { title: "Thế mạnh tự nhiên", html: "<ul><li>Bờ biển nhiều vũng vịnh: Dung Quất, Vân Phong, Cam Ranh; bãi biển đẹp: Mỹ Khê, Nha Trang, Mũi Né.</li><li>Nguồn hải sản phong phú, nghề muối (Sa Huỳnh, Cà Ná).</li><li>Hạn chế: khô hạn ở cực Nam Trung Bộ, bão, lũ.</li></ul>" },
    { title: "Kinh tế biển", html: "<p>Các ngành:</p>",
      svg: S.mindmap({ center: "Kinh tế biển", branches: [{ title: "Du lịch", items: ["Đà Nẵng", "Nha Trang"] }, { title: "Cảng", items: ["Dung Quất", "Vân Phong"] }, { title: "Thuỷ sản", items: ["Đánh bắt xa bờ"] }, { title: "Năng lượng", items: ["Lọc dầu", "Điện gió, mặt trời"] }], w: 640, size: 13 }), caption: "Các ngành kinh tế biển chính." },
    { title: "Ghi nhớ", html: "<div class=\"box key\">Vùng có thế mạnh tổng hợp kinh tế biển: du lịch, cảng biển, thuỷ sản, năng lượng; giữ vị trí chiến lược về quốc phòng, có hai quần đảo Hoàng Sa, Trường Sa.</div>" }
  ],
  summary: "Duyên hải Nam Trung Bộ là dải ven biển từ Đà Nẵng đến Bình Thuận (theo SGK), có quần đảo Hoàng Sa (TP Đà Nẵng) và Trường Sa (Khánh Hoà). Từ năm 2025, vùng hợp với Tây Nguyên thành vùng Duyên hải Nam Trung Bộ và Tây Nguyên (6 tỉnh, thành phố). Thế mạnh: vũng vịnh, bãi biển, hải sản, muối; kinh tế biển tổng hợp: du lịch, cảng, thuỷ sản, năng lượng.",
  examples: [
    { title: "Xác định", problem: "Quần đảo Hoàng Sa thuộc đơn vị hành chính nào?", solution: "Thành phố Đà Nẵng." },
    { title: "Giải thích", problem: "Vì sao cực Nam Trung Bộ phát triển nghề muối?", solution: "Nắng nhiều, ít mưa, nước biển mặn cao." },
    { title: "Nhận xét", problem: "Vì sao vùng có nhiều cảng nước sâu?", solution: "Bờ biển khúc khuỷu, nhiều vũng vịnh kín gió, nước sâu." }
  ],
  exercises: [
    { question: "Ninh Thuận cũ nay thuộc tỉnh?", hints: ["Tỉnh có Nha Trang.", "Khánh …"], solution: "Khánh Hoà." },
    { question: "Khu lọc dầu ở Quảng Ngãi?", hints: ["Một khu kinh tế.", "Dung …"], solution: "Dung Quất." },
    { question: "Quần đảo Trường Sa thuộc tỉnh?", hints: ["Tỉnh có Cam Ranh.", "Khánh …"], solution: "Khánh Hoà." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Quần đảo Trường Sa thuộc tỉnh Khánh Hoà.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Từ năm 2025, Bình Định cũ thuộc tỉnh:", options: ["Gia Lai", "Quảng Ngãi", "Đắk Lắk", "Khánh Hoà"], answer: 0, explain: "Gia Lai." },
    { type: 'short', q: "Trước sắp xếp, Duyên hải Nam Trung Bộ có 8 và Tây Nguyên có 5 tỉnh, thành phố. Vùng mới có 6 đơn vị. Giảm bao nhiêu đơn vị?", answer: "7", unit: "đơn vị", calc: "8+5-6", explain: "7." },
    { type: 'mcq', q: "Nghề nổi tiếng ở Sa Huỳnh, Cà Ná:", options: ["Làm muối", "Trồng chè", "Khai thác than", "Dệt thổ cẩm"], answer: 0, explain: "Làm muối." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Từ năm 2025, Tây Nguyên vẫn là một vùng kinh tế – xã hội riêng.", answer: false, explain: "Hợp với Duyên hải Nam Trung Bộ." },
    { type: 'mcq', q: "Vịnh nổi tiếng ở Khánh Hoà:", options: ["Cam Ranh", "Hạ Long", "Bái Tử Long", "Lan Hạ"], answer: 0, explain: "Cam Ranh." },
    { type: 'short', q: "Lâm Đồng mới rộng 24 233,1 km², Khánh Hoà 8 555,9 km². Chênh lệch?", answer: "15677.2", answerText: "15677,2", unit: "km²", calc: "24233.1-8555.9", explain: "15 677,2." },
    { type: 'mcq', q: "Hạn chế tự nhiên ở cực Nam Trung Bộ:", options: ["Khô hạn", "Mùa đông lạnh", "Băng tuyết", "Ngập mặn quanh năm"], answer: 0, explain: "Khô hạn." }
  ]
});
})();
