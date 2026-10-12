/* LS&ĐL 7 – Lịch sử, Bài 14. Ba lần kháng chiến chống quân xâm lược Mông – Nguyên. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-7/ls-bai-14', {
  objectives: [
    "Trình bày được những nét chính về ba lần kháng chiến chống quân Mông – Nguyên.",
    "Phân tích được nguyên nhân thắng lợi.",
    "Nêu được ý nghĩa lịch sử.",
    "Đánh giá được vai trò của Trần Quốc Tuấn và các tướng lĩnh."
  ],
  intro: "Thế kỉ XIII, đế quốc Mông Cổ chinh phục nhiều nước từ châu Á sang châu Âu. Vậy mà quân dân Đại Việt đã ba lần đánh bại họ. Vì sao làm được điều đó?",
  steps: [
    { title: "Lần thứ nhất (1258)", html: "<p>Đầu năm <b>1258</b>, quân Mông Cổ tiến vào Đại Việt. Vua Trần cho rút khỏi Thăng Long, thực hiện “vườn không nhà trống”. Quân ta phản công ở <b>Đông Bộ Đầu</b>, quân Mông Cổ phải rút về.</p>" },
    { title: "Lần thứ hai (1285)", html: "<p>Trước kháng chiến, nhà Trần mở <b>Hội nghị Bình Than</b> (1282) bàn kế đánh giặc và <b>Hội nghị Diên Hồng</b> (cuối năm 1284 – đầu năm 1285) hỏi ý kiến các bô lão; Trần Quốc Tuấn viết <b>Hịch tướng sĩ</b>. Năm 1285, quân ta thắng ở <b>Tây Kết, Hàm Tử, Chương Dương</b>, giải phóng Thăng Long.</p>" },
    { title: "Lần thứ ba (1287 – 1288)", html: "<p>Quân ta đánh tan đoàn thuyền lương của Trương Văn Hổ ở <b>Vân Đồn</b>, rồi bố trí trận địa cọc trên <b>sông Bạch Đằng</b>, đại thắng tháng 4 năm <b>1288</b>.</p>",
      svg: S.sketchMap({ title: "Trận Bạch Đằng 1288 (minh hoạ)", areas: [{ pts: [[0, 0], [600, 0], [600, 40], [420, 90], [300, 110], [0, 120]], label: "Vùng đồi núi", lx: 90, ly: 50, fill: "#bbf7d0" }, { pts: [[0, 200], [260, 180], [420, 220], [600, 190], [600, 300], [0, 300]], label: "Đồng bằng", lx: 120, ly: 260, fill: "#fde68a" }], lines: [{ pts: [[20, 160], [200, 150], [360, 160], [520, 150], [600, 140]], label: "Sông Bạch Đằng", color: "#2563eb", lp: [60, 150] }], points: [{ x: 360, y: 160, label: "Bãi cọc" }, { x: 560, y: 145, label: "Cửa biển", left: true }], note: 'Lược đồ giản lược, không theo tỉ lệ.' }), caption: "Quân ta nhử địch vào bãi cọc khi nước triều lên rồi đánh lúc triều rút." },
    { title: "Nguyên nhân thắng lợi, ý nghĩa", html: "<p>Tóm tắt:</p>",
      svg: S.mindmap({ center: "Thắng Mông – Nguyên", branches: [{ title: "Nhân dân", items: ["Đoàn kết toàn dân", "Vườn không nhà trống"] }, { title: "Lãnh đạo", items: ["Vua Trần sáng suốt", "Trần Quốc Tuấn tài giỏi"] }, { title: "Chiến lược", items: ["Rút lui chiến lược", "Phản công đúng lúc"] }, { title: "Ý nghĩa", items: ["Giữ độc lập", "Chặn đà bành trướng"] }], w: 640, size: 13 }), caption: "Tinh thần “Sát Thát” (giết giặc Mông Cổ) được quân sĩ thích lên cánh tay." }
  ],
  summary: "Nhà Trần ba lần đánh thắng quân Mông – Nguyên (1258, 1285, 1287 – 1288). Các trận tiêu biểu: Đông Bộ Đầu (1258); Tây Kết, Hàm Tử, Chương Dương (1285); Vân Đồn và Bạch Đằng (1288). Hội nghị Bình Than, Diên Hồng thể hiện tinh thần đoàn kết. Thắng lợi nhờ toàn dân đánh giặc, sự lãnh đạo tài giỏi của vua Trần và Trần Quốc Tuấn, chiến lược đúng đắn.",
  examples: [
    { title: "Mốc thời gian", problem: "Lần kháng chiến thứ nhất và lần thứ ba cách nhau bao nhiêu năm (tính năm bắt đầu)?", solution: "1287 − 1258 = 29 năm." },
    { title: "Phân tích", problem: "Vì sao nhà Trần chủ động rút khỏi Thăng Long?", solution: "Để tránh thế mạnh ban đầu của giặc, bảo toàn lực lượng, làm giặc thiếu lương rồi mới phản công." },
    { title: "Nhân vật", problem: "Ai viết “Hịch tướng sĩ”?", solution: "Trần Quốc Tuấn (Hưng Đạo Đại Vương)." }
  ],
  exercises: [
    { question: "Hội nghị Diên Hồng mời những ai?", hints: ["Người cao tuổi.", "Đại diện cho dân."], solution: "Các bô lão trong cả nước." },
    { question: "Trận thắng kết thúc lần kháng chiến thứ ba?", hints: ["Có bãi cọc.", "Giống trận năm 938."], solution: "Trận Bạch Đằng năm 1288." },
    { question: "Từ năm 1288 đến 2038 là bao nhiêu năm?", hints: ["2038 − 1288.", "Tròn năm mươi."], solution: "750 năm." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Nhà Trần ba lần đánh thắng quân Mông – Nguyên.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Lần kháng chiến thứ nhất diễn ra năm:", options: ["1258", "1285", "1288", "1077"], answer: 0, explain: "1258." },
    { type: 'short', q: "Từ năm 1258 đến năm 1288 là bao nhiêu năm?", answer: "30", unit: "năm", calc: "1288-1258", explain: "30 năm." },
    { type: 'mcq', q: "Hội nghị hỏi ý kiến các bô lão:", options: ["Diên Hồng", "Bình Than", "Đông Quan", "Lũng Nhai"], answer: 0, explain: "Diên Hồng." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Trận Bạch Đằng năm 1288 do Ngô Quyền chỉ huy.", answer: false, explain: "Do Trần Quốc Tuấn chỉ huy; Ngô Quyền chỉ huy năm 938." },
    { type: 'mcq', q: "Trận đánh tan đoàn thuyền lương giặc năm 1287 – 1288:", options: ["Vân Đồn", "Chi Lăng", "Rạch Gầm", "Như Nguyệt"], answer: 0, explain: "Vân Đồn." },
    { type: 'short', q: "Từ năm 1282 (Hội nghị Bình Than) đến 1285 là bao nhiêu năm?", answer: "3", unit: "năm", calc: "1285-1282", explain: "3 năm." },
    { type: 'mcq', q: "Chiến thắng nào thuộc lần kháng chiến thứ hai?", options: ["Chương Dương", "Đông Bộ Đầu", "Như Nguyệt", "Xương Giang"], answer: 0, explain: "Chương Dương (1285)." }
  ]
});
})();
