/* LS&ĐL 9 – Lịch sử, Bài 6. Hoạt động của Nguyễn Ái Quốc và sự thành lập Đảng Cộng sản Việt Nam. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-9/ls-bai-6', {
  objectives: [
    "Nêu được hoạt động của Nguyễn Ái Quốc từ 1918 đến 1930.",
    "Trình bày được sự ra đời của ba tổ chức cộng sản năm 1929.",
    "Trình bày được Hội nghị thành lập Đảng và ý nghĩa của sự kiện."
  ],
  intro: "Năm 1920, đọc Luận cương của Lê-nin, Nguyễn Ái Quốc đã tìm thấy con đường giải phóng dân tộc. Mười năm sau, Đảng Cộng sản Việt Nam ra đời.",
  steps: [
    { title: "Nguyễn Ái Quốc 1919 – 1924", html: "<ul><li>6/1919: gửi Bản yêu sách của nhân dân An Nam đến Hội nghị Véc-xai.</li><li>7/1920: đọc Luận cương của Lê-nin về vấn đề dân tộc và thuộc địa.</li><li>12/1920: tán thành Quốc tế Cộng sản, tham gia sáng lập Đảng Cộng sản Pháp.</li></ul>",
      svg: S.timeline({ title: "Nguyễn Ái Quốc", items: [{ y: "6/1919", s: "Yêu sách" }, { y: "7/1920", s: "Đọc Luận cương" }, { y: "12/1920", s: "Đại hội Tua" }, { y: "6/1925", s: "Hội VNCMTN" }, { y: "2/1930", s: "Hợp nhất" }] }), caption: "Các mốc chính." },
    { title: "Hội Việt Nam Cách mạng Thanh niên", html: "<p>Tháng 6/<b>1925</b>, tại Quảng Châu, Nguyễn Ái Quốc lập Hội Việt Nam Cách mạng Thanh niên, ra báo Thanh niên, mở lớp huấn luyện; tác phẩm “Đường Kách mệnh” (1927). Năm 1928, Hội thực hiện chủ trương “vô sản hoá”.</p>" },
    { title: "Ba tổ chức cộng sản 1929", html: "<p>Năm 1929 lần lượt ra đời:</p>",
      svg: S.table({ title: "Ba tổ chức cộng sản năm 1929", head: ["Tổ chức", "Thời gian"], rows: [["Đông Dương Cộng sản đảng", "6/1929"], ["An Nam Cộng sản đảng", "8/1929"], ["Đông Dương Cộng sản liên đoàn", "9/1929"]], colW: 250 }), caption: "Ba tổ chức cần được hợp nhất." },
    { title: "Thành lập Đảng", html: "<div class=\"box key\">Từ ngày 6/1 đến 7/2/<b>1930</b>, tại Cửu Long (Hương Cảng, Trung Quốc), Nguyễn Ái Quốc chủ trì hội nghị hợp nhất, thành lập <b>Đảng Cộng sản Việt Nam</b>, thông qua Chính cương vắn tắt, Sách lược vắn tắt. Ngày 3/2 được chọn làm ngày kỉ niệm thành lập Đảng. Đây là bước ngoặt vĩ đại của cách mạng Việt Nam.</div>" }
  ],
  summary: "Nguyễn Ái Quốc gửi Bản yêu sách (1919), đọc Luận cương của Lê-nin (7/1920), tham gia sáng lập Đảng Cộng sản Pháp (12/1920), lập Hội Việt Nam Cách mạng Thanh niên (6/1925). Năm 1929, ba tổ chức cộng sản ra đời. Hội nghị hợp nhất (6/1 – 7/2/1930) ở Hương Cảng thành lập Đảng Cộng sản Việt Nam; ngày 3/2 là ngày kỉ niệm thành lập Đảng.",
  examples: [
    { title: "Tính", problem: "Từ khi đọc Luận cương (1920) đến khi thành lập Đảng (1930) là bao nhiêu năm?", solution: "10 năm." },
    { title: "Giải thích", problem: "Vì sao phải hợp nhất ba tổ chức cộng sản?", solution: "Ba tổ chức hoạt động riêng rẽ, tranh giành ảnh hưởng, làm phong trào có nguy cơ chia rẽ." },
    { title: "Đánh giá", problem: "Ý nghĩa của việc thành lập Đảng?", solution: "Chấm dứt khủng hoảng về đường lối, cách mạng Việt Nam có tổ chức lãnh đạo thống nhất, gắn với cách mạng thế giới." }
  ],
  exercises: [
    { question: "Hội Việt Nam Cách mạng Thanh niên thành lập ở đâu?", hints: ["Một thành phố miền Nam Trung Quốc.", "Quảng …"], solution: "Quảng Châu (6/1925)." },
    { question: "Ngày kỉ niệm thành lập Đảng?", hints: ["Đầu tháng 2.", "Ngày 3/…"], solution: "3/2/1930." },
    { question: "Tổ chức cộng sản ra đời đầu tiên năm 1929?", hints: ["Ở Bắc Kì, tháng 6.", "Đông Dương …"], solution: "Đông Dương Cộng sản đảng." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Đảng Cộng sản Việt Nam được thành lập đầu năm 1930.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Nguyễn Ái Quốc đọc Luận cương của Lê-nin vào:", options: ["7/1920", "6/1919", "6/1925", "2/1930"], answer: 0, explain: "7/1920." },
    { type: 'short', q: "Từ 1930 đến 2030 Đảng tròn bao nhiêu năm?", answer: "100", unit: "năm", calc: "2030-1930", explain: "100." },
    { type: 'mcq', q: "Tác phẩm “Đường Kách mệnh” xuất bản năm:", options: ["1927", "1925", "1930", "1920"], answer: 0, explain: "1927." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Hội nghị thành lập Đảng họp ở Hà Nội.", answer: false, explain: "Họp ở Cửu Long, Hương Cảng." },
    { type: 'mcq', q: "Tổ chức do Nguyễn Ái Quốc lập năm 1925:", options: ["Hội Việt Nam Cách mạng Thanh niên", "Tân Việt Cách mạng đảng", "Việt Nam Quốc dân đảng", "Việt Minh"], answer: 0, explain: "Hội VNCMTN." },
    { type: 'short', q: "Tổ chức cộng sản đầu tiên ra đời tháng 6/1929, tổ chức thứ ba tháng 9/1929. Cách nhau bao nhiêu tháng?", answer: "3", unit: "tháng", calc: "9-6", explain: "3." },
    { type: 'mcq', q: "Người chủ trì hội nghị hợp nhất:", options: ["Nguyễn Ái Quốc", "Trần Phú", "Lê Hồng Phong", "Hà Huy Tập"], answer: 0, explain: "Nguyễn Ái Quốc." }
  ]
});
})();
