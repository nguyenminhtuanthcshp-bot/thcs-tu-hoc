/* LS&ĐL 7 – Lịch sử, Bài 13. Đại Việt thời Trần (1226 – 1400). Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-7/ls-bai-13', {
  objectives: [
    "Mô tả được sự thành lập nhà Trần.",
    "Trình bày được những nét chính về chính trị, kinh tế, xã hội thời Trần.",
    "Nêu được những thành tựu văn hoá tiêu biểu thời Trần.",
    "Đánh giá được vai trò của một số nhân vật như Trần Thủ Độ, Trần Nhân Tông."
  ],
  intro: "Đầu thế kỉ XIII, nhà Lý suy yếu. Năm 1226, Lý Chiêu Hoàng nhường ngôi cho chồng là Trần Cảnh – mở đầu một triều đại ba lần đánh thắng quân Mông – Nguyên: <b>nhà Trần</b>.",
  steps: [
    { title: "Nhà Trần thành lập", html: "<p>Cuối thời Lý, triều chính rối ren, quyền hành dần vào tay họ Trần, đứng đầu là <b>Trần Thủ Độ</b>. Năm <b>1226</b>, Lý Chiêu Hoàng nhường ngôi cho Trần Cảnh (vua Trần Thái Tông); nhà Trần thành lập, quốc hiệu vẫn là <b>Đại Việt</b>, kinh đô <b>Thăng Long</b>.</p>" },
    { title: "Chính trị: chế độ Thái thượng hoàng", html: "<p>Vua thường sớm nhường ngôi cho con, lên làm <b>Thái thượng hoàng</b> cùng trông coi việc nước. Cả nước chia thành <b>12 lộ</b>. Nhà Trần ban hành bộ <b>Quốc triều hình luật</b>, quân đội theo chính sách “ngụ binh ư nông”.</p>",
      svg: S.flowchart({ title: "Bộ máy nhà nước thời Trần (giản lược)", steps: [{ t: 'start', s: "Thái thượng hoàng – Vua" }, { t: 'proc', s: "Quan văn, quan võ" }, { t: 'proc', s: "12 lộ" }, { t: 'proc', s: "Phủ, châu, huyện" }, { t: 'end', s: "Xã" }] }), caption: "Chế độ Thái thượng hoàng giúp việc chuyển giao quyền lực êm thấm." },
    { title: "Kinh tế – xã hội", html: "<ul><li>Nông nghiệp: khai hoang, đắp đê; năm 1248 đắp đê “quai vạc” dọc các sông lớn, đặt <b>Hà đê sứ</b> trông coi đê.</li><li>Quý tộc lập <b>điền trang</b>; vương hầu được phong <b>thái ấp</b>.</li><li>Thủ công, thương nghiệp phát triển; Vân Đồn là thương cảng quan trọng.</li></ul>" },
    { title: "Văn hoá, giáo dục", html: "<p>Tóm tắt thành tựu:</p>",
      svg: S.table({ title: "Thành tựu văn hoá thời Trần", head: ["Lĩnh vực", "Tiêu biểu"], rows: [["Tôn giáo", "Thiền phái Trúc Lâm Yên Tử"], ["Giáo dục", "Đặt tam khôi (năm 1247)"], ["Sử học", "Đại Việt sử kí (Lê Văn Hưu)"], ["Văn học", "Hịch tướng sĩ; thơ chữ Nôm"], ["Kiến trúc", "Tháp Phổ Minh (Nam Định)"]], colW: 250 }), caption: "Thiền phái Trúc Lâm do vua Trần Nhân Tông sáng lập." }
  ],
  summary: "Năm 1226 nhà Trần thành lập, kinh đô Thăng Long. Nhà Trần thực hiện chế độ Thái thượng hoàng, chia nước thành 12 lộ, ban hành Quốc triều hình luật. Kinh tế phát triển: đắp đê quai vạc, đặt Hà đê sứ; xuất hiện điền trang, thái ấp. Văn hoá rực rỡ: thiền phái Trúc Lâm, tam khôi (1247), Đại Việt sử kí của Lê Văn Hưu. Năm 1400 Hồ Quý Ly phế vua Trần.",
  examples: [
    { title: "Khái niệm", problem: "Thái thượng hoàng là gì?", solution: "Là vua cha đã nhường ngôi cho con nhưng vẫn cùng con trông coi việc nước." },
    { title: "Tính thời gian", problem: "Nhà Trần tồn tại từ 1226 đến 1400 là bao nhiêu năm?", solution: "1400 − 1226 = 174 năm." },
    { title: "So sánh", problem: "Điền trang khác thái ấp ở điểm nào?", solution: "Điền trang do quý tộc tự khai hoang lập nên; thái ấp là vùng đất vua phong cho vương hầu có công." }
  ],
  exercises: [
    { question: "Nhà Trần chia nước ta thành bao nhiêu lộ?", hints: ["Nhiều hơn 10.", "Ít hơn 13."], solution: "12 lộ." },
    { question: "Ai sáng lập thiền phái Trúc Lâm?", hints: ["Một vị vua thời Trần.", "Gắn với núi Yên Tử."], solution: "Vua Trần Nhân Tông." },
    { question: "Từ năm 1247 (đặt tam khôi) đến năm 2047 là bao nhiêu năm?", hints: ["Lấy năm sau trừ năm trước.", "Tròn trăm."], solution: "2047 − 1247 = 800 năm." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Nhà Trần được thành lập năm 1226.", answer: true, explain: "Đúng, năm 1226." },
    { type: 'mcq', q: "Bộ luật của nhà Trần:", options: ["Quốc triều hình luật", "Hình thư", "Luật Hồng Đức", "Hoàng Việt luật lệ"], answer: 0, explain: "Quốc triều hình luật." },
    { type: 'short', q: "Nhà Trần tồn tại từ 1226 đến 1400 là bao nhiêu năm?", answer: "174", unit: "năm", calc: "1400-1226", explain: "1400 − 1226 = 174." },
    { type: 'mcq', q: "Thời Trần, cả nước chia thành:", options: ["12 lộ", "24 lộ", "13 đạo", "5 đạo"], answer: 0, explain: "12 lộ." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Thời Trần, việc trông coi đê điều do Hà đê sứ phụ trách.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Người viết bộ Đại Việt sử kí thời Trần:", options: ["Lê Văn Hưu", "Ngô Sĩ Liên", "Nguyễn Trãi", "Lê Quý Đôn"], answer: 0, explain: "Lê Văn Hưu." },
    { type: 'short', q: "Năm 1247 thuộc thế kỉ thứ mấy? (ghi số)", answer: "13", calc: "Math.floor((1247-1)/100)+1", explain: "Thế kỉ XIII." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Thái ấp là đất do quý tộc tự khai hoang.", answer: false, explain: "Đó là điền trang; thái ấp là đất vua phong." }
  ]
});
})();
