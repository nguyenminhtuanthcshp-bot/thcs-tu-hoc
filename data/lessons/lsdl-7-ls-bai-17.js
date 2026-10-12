/* LS&ĐL 7 – Lịch sử, Bài 17. Đại Việt thời Lê sơ (1428 – 1527). Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-7/ls-bai-17', {
  objectives: [
    "Mô tả được sự thành lập nhà Lê sơ.",
    "Giới thiệu được tình hình chính trị, kinh tế, xã hội thời Lê sơ.",
    "Nêu được những thành tựu văn hoá, giáo dục tiêu biểu.",
    "Đánh giá được vai trò của Lê Thánh Tông."
  ],
  intro: "Ở Văn Miếu – Quốc Tử Giám còn 82 tấm bia tiến sĩ, được UNESCO ghi danh là Di sản tư liệu thế giới. Việc dựng bia bắt đầu năm 1484, thời vua <b>Lê Thánh Tông</b>.",
  steps: [
    { title: "Nhà Lê sơ thành lập", html: "<p>Năm <b>1428</b>, Lê Lợi lên ngôi hoàng đế (Lê Thái Tổ), khôi phục quốc hiệu <b>Đại Việt</b>, đóng đô ở Thăng Long (còn gọi là Đông Kinh).</p>" },
    { title: "Chính trị thời Lê Thánh Tông", html: "<p>Vua Lê Thánh Tông (trị vì 1460 – 1497) cải cách hành chính, chia cả nước thành <b>13 đạo thừa tuyên</b>, ban hành <b>Quốc triều hình luật</b> (thường gọi là <b>luật Hồng Đức</b>) có nhiều điểm bảo vệ quyền lợi phụ nữ.</p>",
      svg: S.flowchart({ title: "Hành chính thời Lê Thánh Tông (giản lược)", steps: [{ t: 'start', s: "Vua" }, { t: 'proc', s: "Lục bộ ở triều đình" }, { t: 'proc', s: "13 đạo thừa tuyên" }, { t: 'proc', s: "Phủ – huyện – châu" }, { t: 'end', s: "Xã" }] }), caption: "Vua trực tiếp nắm mọi quyền hành." },
    { title: "Kinh tế – xã hội", html: "<ul><li>Thực hiện <b>phép quân điền</b>: chia ruộng công cho dân theo định kì.</li><li>Khuyến khích khai hoang, đắp đê; thủ công nghiệp, buôn bán phát triển.</li><li>Xã hội: vua, quan, địa chủ; nông dân chiếm đa số.</li></ul>" },
    { title: "Văn hoá, giáo dục", html: "<p>Nho giáo chiếm địa vị độc tôn; thi cử phát triển mạnh.</p>",
      svg: S.table({ title: "Thành tựu thời Lê sơ", head: ["Lĩnh vực", "Tiêu biểu"], rows: [["Giáo dục", "Dựng bia tiến sĩ (từ 1484)"], ["Văn học", "Bình Ngô đại cáo (Nguyễn Trãi)"], ["Sử học", "Đại Việt sử kí toàn thư"], ["Khoa học", "Đại thành toán pháp (Lương Thế Vinh)"]], colW: 250 }), caption: "“Đại Việt sử kí toàn thư” do Ngô Sĩ Liên biên soạn, hoàn thành năm 1479." }
  ],
  summary: "Năm 1428 Lê Lợi lên ngôi, lập nhà Lê sơ, quốc hiệu Đại Việt. Thời Lê Thánh Tông (1460 – 1497), cả nước chia thành 13 đạo thừa tuyên; luật Hồng Đức được ban hành. Kinh tế: phép quân điền, khai hoang. Văn hoá: Nho giáo độc tôn, thi cử thịnh, dựng bia tiến sĩ từ 1484; nhiều tác phẩm như Bình Ngô đại cáo, Đại Việt sử kí toàn thư.",
  examples: [
    { title: "Tính", problem: "Nhà Lê sơ tồn tại từ 1428 đến 1527 là bao nhiêu năm?", solution: "99 năm." },
    { title: "Khái niệm", problem: "Phép quân điền là gì?", solution: "Chính sách chia ruộng đất công ở làng xã cho nhân dân theo định kì." },
    { title: "Tính", problem: "Lê Thánh Tông trị vì từ 1460 đến 1497 là bao nhiêu năm?", solution: "37 năm." }
  ],
  exercises: [
    { question: "Thời Lê Thánh Tông chia nước ta thành bao nhiêu đạo?", hints: ["Hơn 12.", "Ít hơn 14."], solution: "13 đạo thừa tuyên." },
    { question: "Bộ luật tiêu biểu thời Lê sơ thường gọi là gì?", hints: ["Mang tên niên hiệu của Lê Thánh Tông.", "Hồng …"], solution: "Luật Hồng Đức (Quốc triều hình luật)." },
    { question: "Từ năm 1484 đến 2024 là bao nhiêu năm?", hints: ["2024 − 1484.", "Hơn 500."], solution: "540 năm." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Năm 1428, Lê Lợi lên ngôi hoàng đế.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Thời Lê Thánh Tông, cả nước chia thành:", options: ["13 đạo thừa tuyên", "12 lộ", "24 lộ", "5 đạo"], answer: 0, explain: "13 đạo." },
    { type: 'short', q: "Từ 1428 đến 1527 là bao nhiêu năm?", answer: "99", unit: "năm", calc: "1527-1428", explain: "99 năm." },
    { type: 'mcq', q: "Tác giả “Đại Việt sử kí toàn thư”:", options: ["Ngô Sĩ Liên", "Lê Văn Hưu", "Lương Thế Vinh", "Trần Quốc Tuấn"], answer: 0, explain: "Ngô Sĩ Liên." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Thời Lê sơ, Phật giáo chiếm địa vị độc tôn.", answer: false, explain: "Nho giáo độc tôn." },
    { type: 'mcq', q: "Chính sách chia ruộng công theo định kì:", options: ["Quân điền", "Hạn điền", "Hạn nô", "Ngụ binh ư nông"], answer: 0, explain: "Quân điền." },
    { type: 'short', q: "Việc dựng bia tiến sĩ bắt đầu năm 1484. Năm đó thuộc thế kỉ thứ mấy? (ghi số)", answer: "15", calc: "Math.floor((1484-1)/100)+1", explain: "Thế kỉ XV." },
    { type: 'mcq', q: "Ông vua trị vì 1460 – 1497:", options: ["Lê Thánh Tông", "Lê Thái Tổ", "Lê Nhân Tông", "Lê Hoàn"], answer: 0, explain: "Lê Thánh Tông." }
  ]
});
})();
