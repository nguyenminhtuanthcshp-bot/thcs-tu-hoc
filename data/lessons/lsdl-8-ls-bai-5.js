/* LS&ĐL 8 – Lịch sử, Bài 5. Cuộc xung đột Nam – Bắc triều và Trịnh – Nguyễn. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-8/ls-bai-5', {
  objectives: [
    "Nêu được những nét chính về sự ra đời của vương triều Mạc.",
    "Giải thích được nguyên nhân bùng nổ xung đột Nam – Bắc triều và Trịnh – Nguyễn.",
    "Nêu được hệ quả của các cuộc xung đột."
  ],
  intro: "Sông Gianh (Quảng Trị ngày nay, trước thuộc Quảng Bình) từng là ranh giới chia cắt đất nước thành Đàng Ngoài và Đàng Trong suốt hơn một thế kỉ.",
  steps: [
    { title: "Nhà Mạc thành lập", html: "<p>Đầu thế kỉ XVI, nhà Lê sơ suy yếu. Năm <b>1527</b>, Mạc Đăng Dung lập nhà Mạc. Nhà Mạc có nhiều chính sách ổn định kinh tế, chú trọng giáo dục, thi cử.</p>" },
    { title: "Xung đột Nam – Bắc triều", html: "<p>Năm <b>1533</b>, Nguyễn Kim dựng một người dòng dõi Lê lên ngôi ở Thanh Hoá, lập <b>Nam triều</b>, đối lập với <b>Bắc triều</b> (nhà Mạc). Chiến tranh kéo dài đến năm <b>1592</b>, khi Nam triều chiếm lại Thăng Long.</p>" },
    { title: "Xung đột Trịnh – Nguyễn", html: "<p>Năm 1558, Nguyễn Hoàng vào trấn thủ Thuận Hoá, dần xây dựng thế lực riêng. Từ <b>1627 đến 1672</b>, hai họ Trịnh – Nguyễn đánh nhau 7 lần; sau đó lấy <b>sông Gianh</b> làm ranh giới: Đàng Ngoài (họ Trịnh) và Đàng Trong (họ Nguyễn).</p>",
      svg: S.timeline({ title: "Các cuộc xung đột", items: [{ y: "1527", s: "Lập nhà Mạc" }, { y: "1533 – 1592", s: "Nam – Bắc triều" }, { y: "1558", s: "Nguyễn Hoàng vào Thuận Hoá" }, { y: "1627 – 1672", s: "Trịnh – Nguyễn" }] }), caption: "Sau năm 1672, đất nước bị chia cắt hơn 100 năm." },
    { title: "Hệ quả", html: "<div class=\"box key\">Chiến tranh gây tổn thất lớn về người và của; đất nước bị chia cắt lâu dài, ảnh hưởng đến sự phát triển chung của dân tộc.</div>",
      svg: S.sketchMap({ title: "Đàng Ngoài – Đàng Trong (giản lược)", areas: [{ pts: [[170, 10], [330, 10], [310, 120], [250, 120], [180, 80]], label: "Đàng Ngoài", lx: 250, ly: 60 }, { pts: [[250, 120], [310, 120], [340, 230], [300, 295], [250, 290], [280, 200]], label: "Đàng Trong", lx: 300, ly: 210, fill: "#fde68a" }], lines: [{ pts: [[240, 120], [320, 120]], label: "Sông Gianh", color: "#2563eb", lp: [325, 115] }], points: [], note: 'Lược đồ giản lược, không theo tỉ lệ.' }), caption: "Ranh giới vẽ tượng trưng." }
  ],
  summary: "Năm 1527 Mạc Đăng Dung lập nhà Mạc. Năm 1533 Nguyễn Kim lập Nam triều, chiến tranh Nam – Bắc triều kéo dài đến 1592. Năm 1558 Nguyễn Hoàng vào Thuận Hoá; từ 1627 đến 1672 Trịnh – Nguyễn giao tranh 7 lần, lấy sông Gianh làm ranh giới chia Đàng Ngoài – Đàng Trong. Chiến tranh gây tổn thất lớn, đất nước chia cắt lâu dài.",
  examples: [
    { title: "Tính", problem: "Chiến tranh Nam – Bắc triều kéo dài từ 1533 đến 1592 là bao nhiêu năm?", solution: "59 năm." },
    { title: "Tính", problem: "Chiến tranh Trịnh – Nguyễn từ 1627 đến 1672 là bao nhiêu năm?", solution: "45 năm." },
    { title: "Giải thích", problem: "Vì sao nói đây là chiến tranh phong kiến?", solution: "Đó là cuộc tranh giành quyền lực giữa các tập đoàn phong kiến, không phải chống ngoại xâm." }
  ],
  exercises: [
    { question: "Ai lập nhà Mạc?", hints: ["Năm 1527.", "Mạc Đăng …"], solution: "Mạc Đăng Dung." },
    { question: "Ranh giới Đàng Ngoài – Đàng Trong?", hints: ["Một con sông.", "Sông G…"], solution: "Sông Gianh." },
    { question: "Họ Trịnh và họ Nguyễn đánh nhau mấy lần?", hints: ["Từ 1627 đến 1672.", "Số lẻ."], solution: "7 lần." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Nhà Mạc được thành lập năm 1527.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Người lập Nam triều năm 1533:", options: ["Nguyễn Kim", "Trịnh Kiểm", "Nguyễn Hoàng", "Mạc Đăng Dung"], answer: 0, explain: "Nguyễn Kim." },
    { type: 'short', q: "Từ 1627 đến 1672 là bao nhiêu năm?", answer: "45", unit: "năm", calc: "1672-1627", explain: "45." },
    { type: 'mcq', q: "Đàng Trong do họ nào cai quản?", options: ["Nguyễn", "Trịnh", "Mạc", "Lê"], answer: 0, explain: "Họ Nguyễn." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Chiến tranh Trịnh – Nguyễn là cuộc chiến chống ngoại xâm.", answer: false, explain: "Là chiến tranh phong kiến." },
    { type: 'mcq', q: "Năm Nam triều chiếm lại Thăng Long:", options: ["1592", "1533", "1527", "1672"], answer: 0, explain: "1592." },
    { type: 'short', q: "Từ 1533 đến 1592 là bao nhiêu năm?", answer: "59", unit: "năm", calc: "1592-1533", explain: "59." },
    { type: 'mcq', q: "Năm 1558, Nguyễn Hoàng vào trấn thủ:", options: ["Thuận Hoá", "Gia Định", "Thăng Long", "Lạng Sơn"], answer: 0, explain: "Thuận Hoá." }
  ]
});
})();
