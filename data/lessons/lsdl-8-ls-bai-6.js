/* LS&ĐL 8 – Lịch sử, Bài 6. Công cuộc khai phá vùng đất phía Nam từ thế kỉ XVI đến thế kỉ XVIII. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-8/ls-bai-6', {
  objectives: [
    "Trình bày được quá trình khai phá vùng đất phía Nam.",
    "Nêu được ý nghĩa của công cuộc khai phá.",
    "Nêu được quá trình thực thi chủ quyền đối với quần đảo Hoàng Sa, Trường Sa."
  ],
  intro: "Năm 1698, Nguyễn Hữu Cảnh vào kinh lược, lập phủ Gia Định. Mốc này được xem là năm thành lập Sài Gòn – Thành phố Hồ Chí Minh ngày nay.",
  steps: [
    { title: "Quá trình khai phá", html: "<p>Từ cuối thế kỉ XVI, cư dân Việt từ Thuận Quảng di cư vào phía Nam, cùng các dân tộc tại chỗ khai hoang lập làng. Chúa Nguyễn từng bước thiết lập bộ máy cai quản.</p>",
      svg: S.timeline({ title: "Khai phá vùng đất phía Nam", items: [{ y: "1611", s: "Lập phủ Phú Yên" }, { y: "1698", s: "Lập phủ Gia Định" }, { y: "1757", s: "Hoàn thành cơ bản việc xác lập ở Nam Bộ" }] }), caption: "Mạc Cửu và Mạc Thiên Tứ có công khai phá vùng Hà Tiên." },
    { title: "Chủ quyền Hoàng Sa, Trường Sa", html: "<p>Các chúa Nguyễn lập <b>đội Hoàng Sa</b> (và đội Bắc Hải), hằng năm ra khai thác sản vật, đo đạc, cắm mốc ở các đảo – thể hiện việc thực thi chủ quyền của nhà nước.</p>" },
    { title: "Ý nghĩa", html: "<p>Tóm tắt:</p>",
      svg: S.mindmap({ center: "Ý nghĩa khai phá phía Nam", branches: [{ title: "Lãnh thổ", items: ["Mở rộng đất nước", "Xác lập chủ quyền"] }, { title: "Kinh tế", items: ["Vựa lúa Nam Bộ", "Buôn bán phát triển"] }, { title: "Văn hoá", items: ["Giao lưu các dân tộc"] }], w: 640, size: 13 }), caption: "Vùng đất Nam Bộ trở thành vùng sản xuất lúa gạo lớn." },
    { title: "Ghi nhớ", html: "<div class=\"box key\">Năm 1698: lập phủ Gia Định. Đội Hoàng Sa: thực thi chủ quyền biển đảo từ thời chúa Nguyễn.</div>" }
  ],
  summary: "Từ cuối thế kỉ XVI, cư dân Việt cùng các dân tộc khai phá vùng đất phía Nam. Chúa Nguyễn lập phủ Phú Yên (1611), phủ Gia Định (1698 – Nguyễn Hữu Cảnh), đến năm 1757 cơ bản xác lập chủ quyền ở Nam Bộ. Các chúa Nguyễn lập đội Hoàng Sa, Bắc Hải ra khai thác và thực thi chủ quyền ở Hoàng Sa, Trường Sa. Công cuộc khai phá mở rộng lãnh thổ, phát triển kinh tế.",
  examples: [
    { title: "Tính", problem: "Từ 1698 đến 1998 (300 năm Sài Gòn) là bao nhiêu năm?", solution: "300 năm." },
    { title: "Nhân vật", problem: "Ai lập phủ Gia Định?", solution: "Nguyễn Hữu Cảnh (1698)." },
    { title: "Giải thích", problem: "Hoạt động của đội Hoàng Sa có ý nghĩa gì?", solution: "Chứng minh nhà nước Việt Nam đã sớm xác lập và thực thi chủ quyền đối với Hoàng Sa, Trường Sa." }
  ],
  exercises: [
    { question: "Phủ Gia Định lập năm nào?", hints: ["Cuối thế kỉ XVII.", "169…"], solution: "Năm 1698." },
    { question: "Người có công khai phá vùng Hà Tiên?", hints: ["Họ Mạc.", "Mạc C…"], solution: "Mạc Cửu (và con là Mạc Thiên Tứ)." },
    { question: "Từ 1611 đến 1698 là bao nhiêu năm?", hints: ["1698 − 1611.", "Gần 90."], solution: "87 năm." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Năm 1698, Nguyễn Hữu Cảnh lập phủ Gia Định.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Đội thực thi chủ quyền ở Hoàng Sa thời chúa Nguyễn:", options: ["Đội Hoàng Sa", "Đội Sát Thát", "Đội Long Vân", "Đội Thần Sách"], answer: 0, explain: "Đội Hoàng Sa." },
    { type: 'short', q: "Từ 1698 đến 2023 là bao nhiêu năm?", answer: "325", unit: "năm", calc: "2023-1698", explain: "325." },
    { type: 'mcq', q: "Người có công khai phá vùng Hà Tiên:", options: ["Mạc Cửu", "Nguyễn Kim", "Trịnh Kiểm", "Lê Lợi"], answer: 0, explain: "Mạc Cửu." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Vùng đất Nam Bộ chỉ có người Việt sinh sống.", answer: false, explain: "Có nhiều dân tộc cùng khai phá." },
    { type: 'mcq', q: "Phủ Phú Yên được lập năm:", options: ["1611", "1698", "1757", "1558"], answer: 0, explain: "1611." },
    { type: 'short', q: "Từ 1611 đến 1757 là bao nhiêu năm?", answer: "146", unit: "năm", calc: "1757-1611", explain: "146." },
    { type: 'mcq', q: "Ý nghĩa của công cuộc khai phá vùng đất phía Nam:", options: ["Mở rộng lãnh thổ", "Chia cắt đất nước", "Gây chiến tranh", "Thu hẹp sản xuất"], answer: 0, explain: "Mở rộng lãnh thổ." }
  ]
});
})();
