/* LS&ĐL 7 – Lịch sử, Bài 18. Vương quốc Chăm-pa và vùng đất Nam Bộ từ đầu thế kỉ X đến đầu thế kỉ XVI. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-7/ls-bai-18', {
  objectives: [
    "Mô tả được sự hình thành và phát triển của vương quốc Chăm-pa từ thế kỉ X đến thế kỉ XVI.",
    "Nêu được một số thành tựu văn hoá Chăm-pa.",
    "Mô tả được những nét chính về vùng đất Nam Bộ thời kì này."
  ],
  intro: "Dọc miền Trung còn nhiều ngọn tháp gạch đỏ như tháp Bánh Ít (Bình Định), tháp Po Nagar (Nha Trang). Đó là dấu tích của <b>vương quốc Chăm-pa</b>.",
  steps: [
    { title: "Chăm-pa từ thế kỉ X", html: "<p>Khoảng cuối thế kỉ X – đầu thế kỉ XI, trung tâm của Chăm-pa chuyển dần vào <b>Vi-giay-a</b> (Vijaya, vùng Bình Định ngày nay). Năm <b>1471</b>, vua Lê Thánh Tông đánh chiếm Vi-giay-a; Chăm-pa suy yếu dần.</p>",
      svg: S.sketchMap({ title: "Vị trí một số trung tâm Chăm-pa (minh hoạ)", areas: [{ pts: [[200, 0], [330, 0], [300, 80], [330, 160], [360, 240], [330, 300], [220, 300], [240, 220], [220, 120], [190, 40]], label: "Dải đất miền Trung", lx: 100, ly: 150, fill: "#fde68a" }], lines: [], points: [{ x: 300, y: 70, label: "Inđrapura (Quảng Nam)" }, { x: 330, y: 170, label: "Vi-giay-a (Bình Định)" }, { x: 345, y: 250, label: "Po Nagar (Nha Trang)" }], note: 'Lược đồ giản lược, không theo tỉ lệ.' }), caption: "Vị trí chỉ mang tính tương đối." },
    { title: "Kinh tế, văn hoá Chăm-pa", html: "<ul><li>Kinh tế: trồng lúa nước, đánh cá, buôn bán qua các cảng biển; khai thác lâm sản (trầm hương).</li><li>Văn hoá: chữ Chăm cổ (từ chữ Phạn), Hin-đu giáo và Phật giáo; kiến trúc đền tháp, điêu khắc độc đáo.</li></ul>" },
    { title: "Vùng đất Nam Bộ", html: "<p>Sau khi Phù Nam suy tàn, vùng đất Nam Bộ thuộc quyền kiểm soát của <b>Chân Lạp</b>. Trong các thế kỉ X – XVI, vùng này còn hoang vu, nhiều đầm lầy, dân cư thưa thớt; cư dân sống bằng làm ruộng, đánh cá, buôn bán nhỏ.</p>" },
    { title: "Tổng hợp", html: "<p>So sánh:</p>",
      svg: S.table({ title: "Chăm-pa và Nam Bộ (TK X – XVI)", head: ["Nội dung", "Đặc điểm"], rows: [["Trung tâm Chăm-pa", "Vi-giay-a (Bình Định)"], ["Tôn giáo Chăm-pa", "Hin-đu giáo, Phật giáo"], ["Kiến trúc", "Tháp Bánh Ít, Po Nagar"], ["Nam Bộ", "Thuộc Chân Lạp, dân thưa"]], colW: 250 }), caption: "TK: thế kỉ." }
  ],
  summary: "Từ cuối thế kỉ X – đầu thế kỉ XI, trung tâm Chăm-pa chuyển vào Vi-giay-a (Bình Định). Cư dân trồng lúa nước, đánh cá, buôn bán đường biển; văn hoá nổi bật với chữ Chăm cổ, Hin-đu giáo, kiến trúc đền tháp. Năm 1471 Lê Thánh Tông chiếm Vi-giay-a. Vùng đất Nam Bộ thời kì này thuộc Chân Lạp, còn hoang vu, dân cư thưa thớt.",
  examples: [
    { title: "Địa danh", problem: "Vi-giay-a nay thuộc tỉnh nào?", solution: "Vùng Bình Định ngày nay." },
    { title: "Tính", problem: "Từ năm 1471 đến năm 2021 là bao nhiêu năm?", solution: "550 năm." },
    { title: "Văn hoá", problem: "Kể tên hai công trình kiến trúc Chăm.", solution: "Tháp Bánh Ít (Bình Định), tháp Po Nagar (Nha Trang)." }
  ],
  exercises: [
    { question: "Tôn giáo chủ yếu của người Chăm thời kì này?", hints: ["Từ Ấn Độ.", "Hai tôn giáo."], solution: "Hin-đu giáo và Phật giáo." },
    { question: "Thế kỉ X – XVI, vùng Nam Bộ thuộc quyền kiểm soát của ai?", hints: ["Không còn là Phù Nam.", "Chân …"], solution: "Chân Lạp." },
    { question: "Năm 1471 thuộc thế kỉ nào?", hints: ["(1471−1)/100 rồi +1.", "Thế kỉ XV."], solution: "Thế kỉ XV." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Tháp Po Nagar là công trình kiến trúc của người Chăm.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Trung tâm Chăm-pa từ đầu thế kỉ XI:", options: ["Vi-giay-a", "Thăng Long", "Ăng-co", "Óc Eo"], answer: 0, explain: "Vi-giay-a." },
    { type: 'short', q: "Từ năm 1471 đến năm 2021 là bao nhiêu năm?", answer: "550", unit: "năm", calc: "2021-1471", explain: "550 năm." },
    { type: 'mcq', q: "Vua đánh chiếm Vi-giay-a năm 1471:", options: ["Lê Thánh Tông", "Lê Lợi", "Trần Nhân Tông", "Lý Thường Kiệt"], answer: 0, explain: "Lê Thánh Tông." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Thế kỉ X – XVI, vùng Nam Bộ đông dân, nhiều đô thị lớn.", answer: false, explain: "Còn hoang vu, dân thưa." },
    { type: 'mcq', q: "Chữ Chăm cổ bắt nguồn từ:", options: ["Chữ Phạn", "Chữ Hán", "Chữ La-tinh", "Chữ Nôm"], answer: 0, explain: "Chữ Phạn (Ấn Độ)." },
    { type: 'short', q: "Năm 1471 thuộc thế kỉ thứ mấy? (ghi số)", answer: "15", calc: "Math.floor((1471-1)/100)+1", explain: "Thế kỉ XV." },
    { type: 'mcq', q: "Sản vật rừng nổi tiếng của Chăm-pa:", options: ["Trầm hương", "Chè", "Cà phê", "Cao su"], answer: 0, explain: "Trầm hương." }
  ]
});
})();
