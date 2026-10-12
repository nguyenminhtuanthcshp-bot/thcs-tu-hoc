/* LS&ĐL 7 – Lịch sử, Bài 16. Khởi nghĩa Lam Sơn (1418 – 1427). Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-7/ls-bai-16', {
  objectives: [
    "Trình bày được những nét chính về diễn biến khởi nghĩa Lam Sơn.",
    "Giải thích được nguyên nhân thắng lợi và ý nghĩa lịch sử.",
    "Đánh giá được vai trò của Lê Lợi, Nguyễn Trãi và một số nhân vật khác."
  ],
  intro: "Mười năm “nếm mật nằm gai”, từ vùng núi Lam Sơn, nghĩa quân đã giành lại độc lập cho đất nước. Đó là <b>khởi nghĩa Lam Sơn</b> do Lê Lợi lãnh đạo.",
  steps: [
    { title: "Thời kì ở miền núi Thanh Hoá (1418 – 1423)", html: "<p>Năm <b>1418</b>, Lê Lợi dựng cờ khởi nghĩa ở Lam Sơn (Thanh Hoá), xưng là <b>Bình Định Vương</b>. Những năm đầu nghĩa quân gặp nhiều khó khăn; <b>Lê Lai</b> liều mình cứu chủ tướng.</p>" },
    { title: "Giải phóng Nghệ An, Tân Bình, Thuận Hoá (1424 – 1425)", html: "<p>Theo kế của <b>Nguyễn Chích</b>, năm 1424 nghĩa quân vào Nghệ An, rồi giải phóng Tân Bình, Thuận Hoá, tạo được vùng căn cứ rộng lớn.</p>" },
    { title: "Tiến quân ra Bắc, kết thúc thắng lợi (1426 – 1427)", html: "<p>Cuối năm <b>1426</b>, nghĩa quân thắng lớn ở <b>Tốt Động – Chúc Động</b>. Năm <b>1427</b>, ta tiêu diệt viện binh ở <b>Chi Lăng – Xương Giang</b>; Liễu Thăng bị giết. Tháng 12/1427, <b>Hội thề Đông Quan</b>, quân Minh rút về nước.</p>",
      svg: S.timeline({ title: "Khởi nghĩa Lam Sơn", items: [{ y: "1418", s: "Dựng cờ ở Lam Sơn" }, { y: "1424", s: "Vào Nghệ An" }, { y: "1426", s: "Tốt Động – Chúc Động" }, { y: "1427", s: "Chi Lăng – Xương Giang" }] }), caption: "Đầu năm 1428, Nguyễn Trãi viết “Bình Ngô đại cáo”." },
    { title: "Nguyên nhân thắng lợi, ý nghĩa", html: "<ul><li>Nhân dân đoàn kết, ủng hộ; chiến lược, chiến thuật đúng đắn.</li><li>Sự lãnh đạo của Lê Lợi, Nguyễn Trãi và các tướng.</li><li>Ý nghĩa: kết thúc 20 năm đô hộ của nhà Minh, mở ra thời Lê sơ.</li></ul>" }
  ],
  summary: "Năm 1418, Lê Lợi dựng cờ khởi nghĩa ở Lam Sơn. Năm 1424 nghĩa quân vào Nghệ An theo kế của Nguyễn Chích, rồi giải phóng Tân Bình, Thuận Hoá. Cuối năm 1426 thắng Tốt Động – Chúc Động; năm 1427 thắng Chi Lăng – Xương Giang, Hội thề Đông Quan, quân Minh rút về. Thắng lợi nhờ toàn dân đoàn kết và sự lãnh đạo tài giỏi.",
  examples: [
    { title: "Tính", problem: "Khởi nghĩa kéo dài từ 1418 đến 1427 là bao nhiêu năm?", solution: "9 năm (thường nói “mười năm” theo cách tính cả năm đầu và cuối)." },
    { title: "Nhân vật", problem: "Ai đề xuất chuyển quân vào Nghệ An?", solution: "Nguyễn Chích." },
    { title: "Tác phẩm", problem: "“Bình Ngô đại cáo” do ai viết?", solution: "Nguyễn Trãi, đầu năm 1428." }
  ],
  exercises: [
    { question: "Lê Lợi xưng hiệu gì khi khởi nghĩa?", hints: ["… Vương.", "Bình …"], solution: "Bình Định Vương." },
    { question: "Từ 1407 đến 1427 nhà Minh đô hộ bao nhiêu năm?", hints: ["1427 − 1407.", "Hai chục."], solution: "20 năm." },
    { question: "Hội thề nào kết thúc chiến tranh?", hints: ["Ở thành Đông Quan.", "Tháng 12/1427."], solution: "Hội thề Đông Quan." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Khởi nghĩa Lam Sơn bùng nổ năm 1418.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Người liều mình cứu Lê Lợi:", options: ["Lê Lai", "Nguyễn Chích", "Nguyễn Trãi", "Lê Văn Hưu"], answer: 0, explain: "Lê Lai." },
    { type: 'short', q: "Từ 1418 đến 1427 là bao nhiêu năm?", answer: "9", unit: "năm", calc: "1427-1418", explain: "9 năm." },
    { type: 'mcq', q: "Trận thắng tiêu diệt viện binh Liễu Thăng:", options: ["Chi Lăng – Xương Giang", "Tốt Động – Chúc Động", "Bạch Đằng", "Như Nguyệt"], answer: 0, explain: "Chi Lăng – Xương Giang." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Hội thề Đông Quan diễn ra năm 1418.", answer: false, explain: "Tháng 12/1427." },
    { type: 'mcq', q: "Khởi nghĩa Lam Sơn bùng nổ ở tỉnh:", options: ["Thanh Hoá", "Nghệ An", "Lạng Sơn", "Hà Nội"], answer: 0, explain: "Thanh Hoá." },
    { type: 'short', q: "Từ 1427 đến 2027 là bao nhiêu năm?", answer: "600", unit: "năm", calc: "2027-1427", explain: "600 năm." },
    { type: 'mcq', q: "Trận Tốt Động – Chúc Động diễn ra năm:", options: ["1426", "1418", "1424", "1428"], answer: 0, explain: "Cuối năm 1426." }
  ]
});
})();
