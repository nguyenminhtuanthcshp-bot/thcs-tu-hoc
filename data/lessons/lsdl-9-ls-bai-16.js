/* LS&ĐL 9 – Lịch sử, Bài 16. Việt Nam kháng chiến chống Mỹ, cứu nước, thống nhất đất nước giai đoạn 1954 – 1965. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-9/ls-bai-16', {
  objectives: [
    "Nêu được tình hình hai miền sau Hiệp định Giơ-ne-vơ.",
    "Trình bày được phong trào Đồng khởi (1959 – 1960).",
    "Nêu được cuộc chiến đấu chống chiến lược “Chiến tranh đặc biệt” (1961 – 1965) và xây dựng miền Bắc."
  ],
  intro: "Từ những chiếc gậy tầm vông ở Bến Tre năm 1960, phong trào Đồng khởi đã lan khắp miền Nam. Cách mạng miền Nam chuyển từ thế giữ gìn lực lượng sang tiến công.",
  steps: [
    { title: "Đất nước bị chia cắt", html: "<p>Mỹ thay Pháp, dựng chính quyền Ngô Đình Diệm ở miền Nam, âm mưu chia cắt lâu dài Việt Nam. Miền Bắc hoàn thành cải cách ruộng đất, khôi phục kinh tế, tiến lên chủ nghĩa xã hội.</p>" },
    { title: "Phong trào Đồng khởi", html: "<p>Hội nghị Trung ương 15 (1/1959) quyết định dùng bạo lực cách mạng. Ngày <b>17/1/1960</b>, Đồng khởi nổ ra ở Mỏ Cày (Bến Tre, nay thuộc tỉnh Vĩnh Long), lan rộng khắp Nam Bộ, Tây Nguyên. Ngày 20/12/1960, Mặt trận Dân tộc Giải phóng miền Nam Việt Nam ra đời.</p>",
      svg: S.timeline({ title: "1954 – 1965", items: [{ y: "21/7/1954", s: "Giơ-ne-vơ" }, { y: "1/1959", s: "Nghị quyết 15" }, { y: "17/1/1960", s: "Đồng khởi" }, { y: "9/1960", s: "Đại hội III" }, { y: "20/12/1960", s: "Mặt trận DTGP" }, { y: "2/1/1963", s: "Ấp Bắc" }] }), caption: "Các mốc chính." },
    { title: "“Chiến tranh đặc biệt”", html: "<p>Mỹ dùng quân đội Sài Gòn là chủ yếu, cố vấn Mỹ chỉ huy, dồn dân vào “ấp chiến lược”. Quân dân miền Nam thắng ở Ấp Bắc (2/1/1963), Bình Giã (12/1964 – 1/1965)… làm phá sản chiến lược này.</p>",
      svg: S.flowchart({ title: "Chiến tranh đặc biệt", steps: [{ t: 'start', s: "Mỹ đề ra (1961)" }, { t: 'proc', s: "Ấp chiến lược" }, { t: 'proc', s: "Ta thắng Ấp Bắc, Bình Giã" }, { t: 'end', s: "Phá sản (1965)" }] }), caption: "Diễn biến chính." },
    { title: "Miền Bắc xây dựng", html: "<div class=\"box key\">Đại hội III của Đảng (9/1960) đề ra nhiệm vụ: miền Bắc xây dựng chủ nghĩa xã hội – nhiệm vụ quyết định nhất; miền Nam cách mạng dân tộc dân chủ nhân dân – quyết định trực tiếp. Kế hoạch 5 năm lần thứ nhất (1961 – 1965) đạt nhiều thành tựu.</div>" }
  ],
  summary: "Sau 1954, đất nước tạm chia cắt. Miền Bắc khôi phục kinh tế, xây dựng chủ nghĩa xã hội (Đại hội III, 9/1960). Ở miền Nam, phong trào Đồng khởi (1959 – 1960, mở đầu ở Bến Tre ngày 17/1/1960) đưa cách mạng sang thế tiến công; Mặt trận Dân tộc Giải phóng miền Nam ra đời (20/12/1960). Quân dân miền Nam làm phá sản chiến lược “Chiến tranh đặc biệt” (1961 – 1965).",
  examples: [
    { title: "Tính", problem: "Từ 1954 đến 1975 đất nước bị chia cắt bao nhiêu năm?", solution: "21 năm." },
    { title: "Giải thích", problem: "Ý nghĩa phong trào Đồng khởi?", solution: "Làm lung lay chính quyền Ngô Đình Diệm, chuyển cách mạng miền Nam từ giữ gìn lực lượng sang tiến công." },
    { title: "So sánh", problem: "Vai trò của cách mạng hai miền theo Đại hội III?", solution: "Miền Bắc giữ vai trò quyết định nhất; miền Nam quyết định trực tiếp." }
  ],
  exercises: [
    { question: "Đồng khởi mở đầu ở tỉnh nào?", hints: ["Tỉnh xứ dừa.", "Bến …"], solution: "Bến Tre (nay thuộc Vĩnh Long), 17/1/1960." },
    { question: "Chiến thắng Ấp Bắc ngày nào?", hints: ["Đầu năm 1963.", "Ngày 2/1."], solution: "2/1/1963." },
    { question: "Mặt trận ra đời ngày 20/12/1960?", hints: ["Ở miền Nam.", "Mặt trận Dân tộc …"], solution: "Mặt trận Dân tộc Giải phóng miền Nam Việt Nam." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Phong trào Đồng khởi diễn ra trong những năm 1959 – 1960.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Biện pháp xương sống của “Chiến tranh đặc biệt”:", options: ["Ấp chiến lược", "Tìm diệt", "Việt Nam hoá", "Ném bom miền Bắc"], answer: 0, explain: "Ấp chiến lược." },
    { type: 'short', q: "Kế hoạch 5 năm lần thứ nhất ở miền Bắc từ 1961 đến 1965 kéo dài bao nhiêu năm?", answer: "5", unit: "năm", calc: "1965-1961+1", explain: "5." },
    { type: 'mcq', q: "Đại hội III của Đảng họp năm:", options: ["1960", "1951", "1976", "1986"], answer: 0, explain: "1960." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Lực lượng chủ yếu trong “Chiến tranh đặc biệt” là quân Mỹ.", answer: false, explain: "Quân đội Sài Gòn là chủ yếu." },
    { type: 'mcq', q: "Chiến thắng mở đầu khả năng đánh bại “Chiến tranh đặc biệt”:", options: ["Ấp Bắc", "Vạn Tường", "Điện Biên Phủ", "Đường 9 – Nam Lào"], answer: 0, explain: "Ấp Bắc." },
    { type: 'short', q: "Từ 1960 đến 2030 là bao nhiêu năm?", answer: "70", unit: "năm", calc: "2030-1960", explain: "70." },
    { type: 'mcq', q: "Mặt trận Dân tộc Giải phóng miền Nam Việt Nam ra đời ngày:", options: ["20/12/1960", "17/1/1960", "2/9/1945", "19/5/1941"], answer: 0, explain: "20/12/1960." }
  ]
});
})();
