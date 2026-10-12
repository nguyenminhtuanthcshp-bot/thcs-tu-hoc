/* LS&ĐL 9 – Lịch sử, Bài 22. Cách mạng khoa học – kĩ thuật và xu thế toàn cầu hoá. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-9/ls-bai-22', {
  objectives: [
    "Nêu được nguồn gốc, đặc điểm và thành tựu của cách mạng khoa học – kĩ thuật.",
    "Trình bày được tác động của cách mạng khoa học – kĩ thuật.",
    "Nêu được biểu hiện và tác động của toàn cầu hoá; liên hệ Việt Nam."
  ],
  intro: "Từ chiếc máy tính điện tử nặng 27 tấn (ENIAC, 1946) đến điện thoại thông minh trong túi áo – khoa học đã thay đổi cuộc sống nhanh như thế nào?",
  steps: [
    { title: "Đặc điểm", html: "<p>Từ giữa thế kỉ XX, khoa học trở thành <b>lực lượng sản xuất trực tiếp</b>; mọi phát minh kĩ thuật đều bắt nguồn từ nghiên cứu khoa học; thời gian từ phát minh đến ứng dụng ngày càng ngắn.</p>" },
    { title: "Thành tựu", html: "<p>Một số thành tựu tiêu biểu:</p>",
      svg: S.timeline({ title: "Thành tựu khoa học – kĩ thuật", items: [{ y: "1946", s: "Máy tính ENIAC" }, { y: "1957", s: "Vệ tinh nhân tạo" }, { y: "1969", s: "Người lên Mặt Trăng" }, { y: "1997", s: "Cừu Đô-li" }, { y: "2003", s: "Giải mã gen người" }] }), caption: "Ngày nay: trí tuệ nhân tạo, Internet vạn vật, năng lượng tái tạo." },
    { title: "Toàn cầu hoá", html: "<ul><li>Thương mại quốc tế tăng nhanh; công ti xuyên quốc gia phát triển.</li><li>Ra đời các tổ chức kinh tế lớn: WTO (1995), APEC (1989), EU…</li></ul>",
      svg: S.table({ title: "Tác động của toàn cầu hoá", head: ["Tích cực", "Tiêu cực"], rows: [["Tăng trưởng, chuyển giao công nghệ", "Phân hoá giàu nghèo"], ["Giao lưu văn hoá", "Nguy cơ mất bản sắc"], ["Mở rộng thị trường", "Cạnh tranh gay gắt"]], colW: 250 }), caption: "Toàn cầu hoá vừa là thời cơ vừa là thách thức." },
    { title: "Liên hệ Việt Nam", html: "<div class=\"box key\">Việt Nam tận dụng thời cơ để thu hút đầu tư, xuất khẩu, chuyển đổi số; đồng thời phải nâng cao chất lượng nguồn nhân lực, giữ gìn bản sắc văn hoá.</div>" }
  ],
  summary: "Cách mạng khoa học – kĩ thuật (từ những năm 1940) làm khoa học trở thành lực lượng sản xuất trực tiếp, với nhiều thành tựu: máy tính (1946), vệ tinh (1957), lên Mặt Trăng (1969), cừu Đô-li (1997), giải mã gen người (2003). Toàn cầu hoá thể hiện ở thương mại, công ti xuyên quốc gia, các tổ chức WTO, APEC…; vừa là thời cơ vừa là thách thức với Việt Nam.",
  examples: [
    { title: "Tính", problem: "Từ ENIAC (1946) đến giải mã gen người (2003) là bao nhiêu năm?", solution: "57 năm." },
    { title: "Giải thích", problem: "Vì sao toàn cầu hoá là thách thức với nước đang phát triển?", solution: "Cạnh tranh gay gắt, phụ thuộc thị trường, nguy cơ mất bản sắc nếu không chủ động." },
    { title: "Liên hệ", problem: "Một ví dụ toàn cầu hoá trong đời sống em?", solution: "Dùng điện thoại lắp ráp ở nhiều nước, xem phim nước ngoài trực tuyến…" }
  ],
  exercises: [
    { question: "Cừu Đô-li ra đời năm nào?", hints: ["Cuối thế kỉ XX.", "199…"], solution: "Năm 1996, công bố 1997." },
    { question: "WTO thành lập năm?", hints: ["Giữa thập niên 1990.", "1/1/199…"], solution: "Năm 1995." },
    { question: "Đặc điểm lớn nhất của cách mạng khoa học – kĩ thuật?", hints: ["Vai trò của khoa học.", "Lực lượng sản xuất …"], solution: "Khoa học trở thành lực lượng sản xuất trực tiếp." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Tổ chức Thương mại thế giới (WTO) ra đời năm 1995.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Máy tính điện tử ENIAC ra đời năm:", options: ["1946", "1957", "1969", "1997"], answer: 0, explain: "1946." },
    { type: 'short', q: "Từ 1957 (vệ tinh) đến 1969 (Mặt Trăng) là bao nhiêu năm?", answer: "12", unit: "năm", calc: "1969-1957", explain: "12." },
    { type: 'mcq', q: "Biểu hiện của toàn cầu hoá:", options: ["Sự phát triển của công ti xuyên quốc gia", "Chế độ phong kiến", "Chiến tranh lạnh", "Tự cung tự cấp"], answer: 0, explain: "Công ti xuyên quốc gia." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Toàn cầu hoá chỉ mang lại tác động tích cực.", answer: false, explain: "Có cả tác động tiêu cực." },
    { type: 'mcq', q: "Thành tựu công bố năm 2003:", options: ["Giải mã bản đồ gen người", "Cừu Đô-li", "Vệ tinh nhân tạo", "Máy tính ENIAC"], answer: 0, explain: "Bản đồ gen người." },
    { type: 'short', q: "ENIAC nặng khoảng 27 tấn. Bằng bao nhiêu kg?", answer: "27000", answerText: "27 000", unit: "kg", calc: "27*1000", explain: "27 000." },
    { type: 'mcq', q: "Diễn đàn Hợp tác kinh tế châu Á – Thái Bình Dương:", options: ["APEC", "ASEAN", "EU", "NATO"], answer: 0, explain: "APEC." }
  ]
});
})();
