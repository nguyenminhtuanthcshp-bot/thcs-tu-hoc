/* LS&ĐL 9 – Chủ đề chung, Chủ đề chung 3. Bảo vệ chủ quyền, các quyền và lợi ích hợp pháp của Việt Nam ở Biển Đông. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-9/cdc-3', {
  objectives: [
    "Nêu được các bằng chứng lịch sử và pháp lí về chủ quyền của Việt Nam ở Hoàng Sa, Trường Sa.",
    "Trình bày được cơ sở pháp lí quốc tế: Công ước Liên hợp quốc về Luật biển 1982.",
    "Nêu được trách nhiệm của công dân trong bảo vệ chủ quyền biển đảo."
  ],
  intro: "Từ những đội Hoàng Sa thời chúa Nguyễn đến Luật Biển Việt Nam năm 2012, chủ quyền biển đảo được khẳng định liên tục. Cơ sở của chủ quyền ấy là gì?",
  steps: [
    { title: "Bằng chứng lịch sử", html: "<ul><li>Thế kỉ XVII: chúa Nguyễn lập đội Hoàng Sa, sau đó đội Bắc Hải, khai thác và quản lí hai quần đảo.</li><li>Năm 1836, vua Minh Mạng cho đội thuỷ quân ra Hoàng Sa cắm mốc, dựng bia.</li></ul>",
      svg: S.timeline({ title: "Chủ quyền biển đảo", items: [{ y: "Thế kỉ XVII", s: "Đội Hoàng Sa" }, { y: "1836", s: "Cắm mốc Hoàng Sa" }, { y: "19/1/1974", s: "Trung Quốc chiếm Hoàng Sa" }, { y: "14/3/1988", s: "Gạc Ma" }, { y: "1982", s: "UNCLOS" }, { y: "21/6/2012", s: "Luật Biển Việt Nam" }] }), caption: "Một số mốc." },
    { title: "Cơ sở pháp lí", html: "<p>Công ước Liên hợp quốc về Luật biển (UNCLOS) được thông qua năm 1982; Việt Nam phê chuẩn ngày 23/6/1994. Tuyên bố về ứng xử của các bên ở Biển Đông (DOC) kí năm 2002. Luật Biển Việt Nam được Quốc hội thông qua ngày 21/6/2012, có hiệu lực từ 1/1/2013.</p>" },
    { title: "Chủ trương của Việt Nam", html: "<div class=\"box key\">Giải quyết tranh chấp bằng biện pháp hoà bình, trên cơ sở luật pháp quốc tế, đặc biệt là UNCLOS 1982; kiên quyết, kiên trì bảo vệ chủ quyền, quyền chủ quyền và quyền tài phán.</div>" },
    { title: "Trách nhiệm công dân", html: "<p>Học sinh có thể:</p>",
      svg: S.mindmap({ center: "Em làm gì vì biển đảo?", branches: [{ title: "Hiểu biết", items: ["Tìm hiểu lịch sử, pháp lí"] }, { title: "Lan toả", items: ["Chia sẻ thông tin đúng"] }, { title: "Hành động", items: ["Giữ sạch biển", "Ủng hộ ngư dân"] }], w: 640, size: 13 }), caption: "Quần đảo Hoàng Sa thuộc TP Đà Nẵng, Trường Sa thuộc tỉnh Khánh Hoà." }
  ],
  summary: "Việt Nam có bằng chứng lịch sử về chủ quyền ở Hoàng Sa, Trường Sa từ thế kỉ XVII (đội Hoàng Sa, cắm mốc năm 1836). Cơ sở pháp lí: UNCLOS 1982 (Việt Nam phê chuẩn 23/6/1994), DOC (2002), Luật Biển Việt Nam (21/6/2012). Việt Nam chủ trương giải quyết tranh chấp bằng biện pháp hoà bình theo luật pháp quốc tế. Công dân có trách nhiệm tìm hiểu, lan toả và hành động bảo vệ biển đảo.",
  examples: [
    { title: "Tính", problem: "Từ 1836 đến 2026 là bao nhiêu năm?", solution: "190 năm." },
    { title: "Giải thích", problem: "Vì sao UNCLOS 1982 quan trọng?", solution: "Là “hiến pháp của biển”, quy định các vùng biển và quyền của quốc gia ven biển." },
    { title: "Liên hệ", problem: "Một việc học sinh làm được?", solution: "Tìm hiểu và chia sẻ thông tin chính xác về chủ quyền; tham gia nhặt rác bờ biển." }
  ],
  exercises: [
    { question: "Vua cho cắm mốc ở Hoàng Sa năm 1836?", hints: ["Vua thứ hai nhà Nguyễn.", "Minh …"], solution: "Vua Minh Mạng." },
    { question: "Việt Nam phê chuẩn UNCLOS năm?", hints: ["Giữa thập niên 1990.", "199…"], solution: "Năm 1994 (23/6)." },
    { question: "Luật Biển Việt Nam thông qua ngày?", hints: ["Năm 2012.", "Ngày 21/6."], solution: "21/6/2012." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Việt Nam phê chuẩn Công ước Liên hợp quốc về Luật biển 1982 vào năm 1994.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Đội dân binh khai thác Hoàng Sa thời chúa Nguyễn:", options: ["Đội Hoàng Sa", "Đội Tuyên truyền Giải phóng quân", "Đội Cờ Đen", "Đội Thanh niên xung phong"], answer: 0, explain: "Đội Hoàng Sa." },
    { type: 'short', q: "Từ 1982 (UNCLOS) đến 1994 (Việt Nam phê chuẩn) là bao nhiêu năm?", answer: "12", unit: "năm", calc: "1994-1982", explain: "12." },
    { type: 'mcq', q: "Chủ trương giải quyết tranh chấp của Việt Nam:", options: ["Biện pháp hoà bình theo luật pháp quốc tế", "Dùng vũ lực", "Nhượng bộ", "Im lặng"], answer: 0, explain: "Hoà bình." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Luật Biển Việt Nam có hiệu lực từ năm 2010.", answer: false, explain: "Có hiệu lực từ 1/1/2013." },
    { type: 'mcq', q: "Quần đảo Trường Sa thuộc:", options: ["Tỉnh Khánh Hoà", "TP Đà Nẵng", "Tỉnh Quảng Ngãi", "TP Hồ Chí Minh"], answer: 0, explain: "Khánh Hoà." },
    { type: 'short', q: "Từ 2002 (DOC) đến 2012 (Luật Biển) là bao nhiêu năm?", answer: "10", unit: "năm", calc: "2012-2002", explain: "10." },
    { type: 'mcq', q: "Văn bản được gọi là “hiến pháp của biển”:", options: ["UNCLOS 1982", "DOC 2002", "Hiệp định Giơ-ne-vơ", "Hiệp định Pa-ri"], answer: 0, explain: "UNCLOS 1982." }
  ]
});
})();
