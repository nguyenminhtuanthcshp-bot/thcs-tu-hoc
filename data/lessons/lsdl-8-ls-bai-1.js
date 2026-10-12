/* LS&ĐL 8 – Lịch sử, Bài 1. Cách mạng tư sản Anh và Chiến tranh giành độc lập của 13 thuộc địa Anh ở Bắc Mỹ. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-8/ls-bai-1', {
  objectives: [
    "Trình bày được nguyên nhân, diễn biến chính của Cách mạng tư sản Anh.",
    "Trình bày được những nét chính của Chiến tranh giành độc lập của 13 thuộc địa Anh ở Bắc Mỹ.",
    "Nêu được tính chất, ý nghĩa của hai cuộc cách mạng."
  ],
  intro: "Năm 1649, vua Anh Sác-lơ I bị xử tử – lần đầu tiên ở châu Âu một ông vua bị chính thần dân của mình đưa ra xét xử. Đó là một mốc của <b>Cách mạng tư sản Anh</b>.",
  steps: [
    { title: "Cách mạng tư sản Anh: nguyên nhân", html: "<p>Đầu thế kỉ XVII, kinh tế tư bản chủ nghĩa ở Anh phát triển, tầng lớp tư sản và quý tộc mới lớn mạnh nhưng bị chế độ quân chủ chuyên chế cản trở. Mâu thuẫn giữa nhà vua và Quốc hội ngày càng gay gắt.</p>" },
    { title: "Diễn biến và kết quả", html: "<p>Năm <b>1642</b>, nội chiến bùng nổ giữa phe vua và phe Quốc hội (do Crôm-oen chỉ huy). Năm 1649, vua bị xử tử, nước Anh trở thành cộng hoà. Năm <b>1688</b>, cuộc “Cách mạng vẻ vang” lập nên chế độ <b>quân chủ lập hiến</b>.</p>",
      svg: S.timeline({ title: "Cách mạng tư sản Anh", items: [{ y: "1640", s: "Quốc hội triệu tập" }, { y: "1642", s: "Nội chiến" }, { y: "1649", s: "Xử tử vua, lập cộng hoà" }, { y: "1688", s: "Quân chủ lập hiến" }] }), caption: "Quân chủ lập hiến: vua vẫn còn nhưng quyền lực bị hạn chế bởi hiến pháp và Quốc hội." },
    { title: "Chiến tranh giành độc lập ở Bắc Mỹ", html: "<p>Anh thành lập 13 thuộc địa ở bờ đông Bắc Mỹ và áp đặt nhiều thứ thuế. Năm 1773, sự kiện “Tiệc trà Bô-xtơn” nổ ra. Ngày <b>4/7/1776</b>, <b>Tuyên ngôn Độc lập</b> được công bố. Năm <b>1783</b>, Anh kí Hoà ước Véc-xai công nhận nền độc lập của Hợp chúng quốc Mỹ.</p>",
      svg: S.flowchart({ title: "Chiến tranh giành độc lập Bắc Mỹ", steps: [{ t: 'start', s: "1773: Tiệc trà Bô-xtơn" }, { t: 'proc', s: "1775: chiến tranh bùng nổ" }, { t: 'proc', s: "4/7/1776: Tuyên ngôn Độc lập" }, { t: 'end', s: "1783: Anh công nhận độc lập" }] }), caption: "G. Oa-sinh-tơn chỉ huy quân thuộc địa, sau trở thành tổng thống đầu tiên của Mỹ." },
    { title: "Tính chất, ý nghĩa", html: "<div class=\"box key\">Cả hai đều là cách mạng tư sản: lật đổ hoặc thoát khỏi chế độ cũ, mở đường cho chủ nghĩa tư bản phát triển. Chiến tranh ở Bắc Mỹ còn là cuộc chiến tranh giải phóng dân tộc, khai sinh nước Mỹ.</div>" }
  ],
  summary: "Cách mạng tư sản Anh bùng nổ năm 1640, nội chiến từ 1642; năm 1649 vua bị xử tử, nước Anh thành cộng hoà; năm 1688 lập chế độ quân chủ lập hiến. Ở Bắc Mỹ, 13 thuộc địa đấu tranh chống Anh: Tiệc trà Bô-xtơn (1773), Tuyên ngôn Độc lập (4/7/1776), Anh công nhận độc lập năm 1783. Đây là các cuộc cách mạng tư sản, mở đường cho chủ nghĩa tư bản.",
  examples: [
    { title: "Tính", problem: "Từ 1640 đến 1688 là bao nhiêu năm?", solution: "48 năm." },
    { title: "Khái niệm", problem: "Quân chủ lập hiến là gì?", solution: "Chế độ có vua nhưng quyền lực của vua bị hiến pháp và quốc hội hạn chế." },
    { title: "Tính", problem: "Từ 4/7/1776 đến năm 2026 nước Mỹ tròn bao nhiêu năm?", solution: "250 năm." }
  ],
  exercises: [
    { question: "Ai chỉ huy quân Quốc hội trong nội chiến Anh?", hints: ["Họ Crôm-…", "Tên Ô-li-vơ."], solution: "Ô-li-vơ Crôm-oen." },
    { question: "Tuyên ngôn Độc lập của Mỹ công bố ngày nào?", hints: ["Tháng 7.", "Năm 1776."], solution: "Ngày 4/7/1776." },
    { question: "Từ 1776 đến 1783 là bao nhiêu năm?", hints: ["1783 − 1776.", "Một số lẻ."], solution: "7 năm." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Năm 1688, nước Anh lập chế độ quân chủ lập hiến.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Tuyên ngôn Độc lập của Mỹ được công bố năm:", options: ["1776", "1789", "1640", "1783"], answer: 0, explain: "1776." },
    { type: 'short', q: "Từ 1642 đến 1649 là bao nhiêu năm?", answer: "7", unit: "năm", calc: "1649-1642", explain: "7." },
    { type: 'mcq', q: "Tổng tư lệnh quân thuộc địa Bắc Mỹ:", options: ["G. Oa-sinh-tơn", "Crôm-oen", "Rô-be-xpi-e", "Na-pô-lê-ông"], answer: 0, explain: "Oa-sinh-tơn." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Có 15 thuộc địa Anh ở Bắc Mỹ tham gia chiến tranh giành độc lập.", answer: false, explain: "13 thuộc địa." },
    { type: 'mcq', q: "Sự kiện năm 1773 ở Bắc Mỹ:", options: ["Tiệc trà Bô-xtơn", "Chiếm ngục Ba-xti", "Xử tử vua Anh", "Hoà ước Véc-xai"], answer: 0, explain: "Tiệc trà Bô-xtơn." },
    { type: 'short', q: "Năm 1640 thuộc thế kỉ thứ mấy? (ghi số)", answer: "17", calc: "Math.floor((1640-1)/100)+1", explain: "Thế kỉ XVII." },
    { type: 'mcq', q: "Năm 1783, Anh công nhận độc lập của:", options: ["Hợp chúng quốc Mỹ", "Ca-na-đa", "Ấn Độ", "Pháp"], answer: 0, explain: "Mỹ." }
  ]
});
})();
