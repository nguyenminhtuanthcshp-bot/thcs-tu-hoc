/* LS&ĐL 9 – Địa lí, Bài 16. Thực hành: Phân tích ảnh hưởng của hạn hán và sa mạc hoá đối với phát triển kinh tế – xã hội ở vùng khô hạn Ninh Thuận – Bình Thuận. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-9/dl-bai-16', {
  objectives: [
    "Xác định được vùng khô hạn Ninh Thuận – Bình Thuận (từ năm 2025 thuộc Khánh Hoà và Lâm Đồng).",
    "Phân tích được ảnh hưởng của hạn hán, sa mạc hoá đến sản xuất và đời sống.",
    "Đề xuất được giải pháp ứng phó."
  ],
  intro: "Đây là nơi khô hạn nhất nước ta, có những đồi cát như sa mạc thu nhỏ. Hạn hán ảnh hưởng tới người dân ra sao?",
  steps: [
    { title: "Vùng khô hạn", html: "<p>Ninh Thuận cũ (nay thuộc tỉnh Khánh Hoà) và Bình Thuận cũ (nay thuộc tỉnh Lâm Đồng) có lượng mưa năm rất thấp, nhiều nơi chỉ khoảng 700 – 800 mm.</p>",
      svg: S.table({ title: "So sánh lượng mưa năm (gần đúng)", head: ["Nơi", "Lượng mưa (mm)"], rows: [["Phan Rang (Ninh Thuận cũ)", "khoảng 700 – 800"], ["Hà Nội (Láng, 2023)", "1 419,5"]], colW: 250 }), caption: "Số liệu Phan Rang là gần đúng, chỉ để so sánh; số liệu Láng theo Tổng cục Thống kê." },
    { title: "Nguyên nhân", html: "<ul><li>Địa hình: dãy núi chắn gió mùa mùa đông và gió mùa tây nam, vùng nằm ở sườn khuất gió.</li><li>Bờ biển song song hướng gió.</li><li>Con người: phá rừng, canh tác không hợp lí làm đất thoái hoá.</li></ul>" },
    { title: "Ảnh hưởng", html: "<p>Ảnh hưởng đến nhiều mặt:</p>",
      svg: S.mindmap({ center: "Tác động của hạn hán", branches: [{ title: "Nông nghiệp", items: ["Thiếu nước tưới", "Mất mùa"] }, { title: "Đời sống", items: ["Thiếu nước sinh hoạt"] }, { title: "Môi trường", items: ["Sa mạc hoá", "Cát bay"] }, { title: "Kinh tế", items: ["Giảm thu nhập"] }], w: 640, size: 13 }), caption: "Hạn hán kéo dài làm sa mạc hoá lan rộng." },
    { title: "Giải pháp", html: "<div class=\"box key\">Xây hồ chứa, kênh dẫn nước, tưới tiết kiệm (nhỏ giọt); trồng rừng, cây chịu hạn (nho, thanh long, táo); phát triển điện gió, điện mặt trời, nghề muối, du lịch – biến khó khăn thành lợi thế.</div>" }
  ],
  summary: "Vùng khô hạn Ninh Thuận – Bình Thuận (từ 2025 thuộc Khánh Hoà và Lâm Đồng) có lượng mưa rất thấp do nằm ở sườn khuất gió, bờ biển song song hướng gió và do tác động của con người. Hạn hán, sa mạc hoá gây thiếu nước, mất mùa, giảm thu nhập. Giải pháp: thuỷ lợi, tưới tiết kiệm, trồng rừng, cây chịu hạn, phát triển năng lượng tái tạo, nghề muối, du lịch.",
  examples: [
    { title: "Tính", problem: "Lượng mưa Láng 1 419,5 mm gấp khoảng mấy lần 700 mm (làm tròn 1 chữ số thập phân)?", solution: "≈ 2,0 lần." },
    { title: "Giải thích", problem: "Vì sao vùng có tiềm năng điện mặt trời?", solution: "Nắng nhiều, ít mây, số giờ nắng cao." },
    { title: "Đề xuất", problem: "Cây trồng thích hợp vùng khô hạn?", solution: "Nho, thanh long, táo, cây chịu hạn." }
  ],
  exercises: [
    { question: "Ninh Thuận cũ nay thuộc tỉnh nào?", hints: ["Tỉnh có Nha Trang.", "Khánh …"], solution: "Khánh Hoà." },
    { question: "Bình Thuận cũ nay thuộc tỉnh nào?", hints: ["Tỉnh có Đà Lạt.", "Lâm …"], solution: "Lâm Đồng." },
    { question: "Một phương pháp tưới tiết kiệm?", hints: ["Tưới từng giọt.", "Nhỏ …"], solution: "Tưới nhỏ giọt." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Ninh Thuận – Bình Thuận là vùng khô hạn nhất nước ta.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Nguyên nhân tự nhiên chính gây khô hạn:", options: ["Nằm ở sườn khuất gió", "Có nhiều sông lớn", "Rừng rậm bao phủ", "Gần xích đạo nhất"], answer: 0, explain: "Sườn khuất gió." },
    { type: 'short', q: "Láng năm 2023 mưa 1 419,5 mm; nơi khô hạn lấy tròn 700 mm. Chênh lệch?", answer: "719.5", answerText: "719,5", unit: "mm", calc: "1419.5-700", explain: "719,5." },
    { type: 'mcq', q: "Cây trồng thích hợp vùng khô hạn:", options: ["Nho, thanh long", "Lúa nước", "Chè", "Cao su"], answer: 0, explain: "Nho, thanh long." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Hạn hán không ảnh hưởng đến đời sống người dân.", answer: false, explain: "Thiếu nước sinh hoạt, giảm thu nhập." },
    { type: 'mcq', q: "Ngành tận dụng nắng, gió của vùng:", options: ["Điện mặt trời, điện gió", "Thuỷ điện lớn", "Khai thác than", "Trồng lúa vụ đông"], answer: 0, explain: "Năng lượng tái tạo." },
    { type: 'short', q: "Một hồ chứa cấp 3 triệu m³ nước, mỗi ha cần 6 000 m³/vụ (số liệu minh hoạ). Tưới được bao nhiêu ha?", answer: "500", unit: "ha", calc: "3000000/6000", explain: "500." },
    { type: 'mcq', q: "Biện pháp chống sa mạc hoá:", options: ["Trồng rừng", "Chặt cây làm củi", "Chăn thả quá mức", "Đốt rẫy"], answer: 0, explain: "Trồng rừng." }
  ]
});
})();
