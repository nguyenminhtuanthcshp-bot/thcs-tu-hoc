/* LS&ĐL 8 – Lịch sử, Bài 16. Việt Nam dưới thời Nguyễn (nửa đầu thế kỉ XIX). Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-8/ls-bai-16', {
  objectives: [
    "Trình bày được sự thành lập nhà Nguyễn.",
    "Nêu được tình hình chính trị, kinh tế, văn hoá, xã hội dưới thời Nguyễn.",
    "Nêu được quá trình thực thi chủ quyền đối với Hoàng Sa, Trường Sa."
  ],
  intro: "Kinh thành Huế – công trình được xây dựng từ đầu thế kỉ XIX – là một phần của Quần thể di tích Cố đô Huế, Di sản thế giới năm 1993.",
  steps: [
    { title: "Nhà Nguyễn thành lập", html: "<p>Năm <b>1802</b>, Nguyễn Ánh lên ngôi (vua Gia Long), lập nhà Nguyễn, đóng đô ở <b>Phú Xuân (Huế)</b>. Năm 1804 đặt quốc hiệu <b>Việt Nam</b>; năm <b>1838</b>, vua Minh Mạng đổi quốc hiệu là <b>Đại Nam</b>.</p>",
      svg: S.timeline({ title: "Nhà Nguyễn nửa đầu thế kỉ XIX", items: [{ y: "1802", s: "Gia Long lên ngôi" }, { y: "1804", s: "Quốc hiệu Việt Nam" }, { y: "1815", s: "Hoàng Việt luật lệ" }, { y: "1831 – 1832", s: "Cải cách Minh Mạng" }, { y: "1838", s: "Quốc hiệu Đại Nam" }] }), caption: "Hoàng Việt luật lệ còn gọi là luật Gia Long." },
    { title: "Chính trị", html: "<p>Thời Minh Mạng (1831 – 1832), cả nước chia thành <b>30 tỉnh</b> và phủ Thừa Thiên. Nhà Nguyễn ban hành <b>Hoàng Việt luật lệ</b> (1815). Đối ngoại: thần phục nhà Thanh, “đóng cửa” với phương Tây.</p>" },
    { title: "Kinh tế, văn hoá", html: "<ul><li>Khai hoang, lập ấp (Nguyễn Công Trứ ở Kim Sơn, Tiền Hải).</li><li>Văn học: Nguyễn Du với “Truyện Kiều”; Hồ Xuân Hương.</li><li>Kiến trúc: Kinh thành Huế, lăng tẩm; sử học: Quốc sử quán.</li></ul>" },
    { title: "Chủ quyền Hoàng Sa, Trường Sa", html: "<div class=\"box key\">Nhà Nguyễn tiếp tục cử đội Hoàng Sa ra đo đạc, cắm mốc, dựng bia chủ quyền; dưới thời Minh Mạng, quần đảo Hoàng Sa, Trường Sa được ghi vào bản đồ và sử sách chính thức.</div>" }
  ],
  summary: "Năm 1802, Nguyễn Ánh lập nhà Nguyễn, đóng đô ở Phú Xuân (Huế); năm 1804 đặt quốc hiệu Việt Nam, năm 1838 đổi thành Đại Nam. Thời Minh Mạng (1831 – 1832) cả nước chia thành 30 tỉnh và phủ Thừa Thiên; ban hành Hoàng Việt luật lệ (1815). Kinh tế có khai hoang; văn hoá có Truyện Kiều, Kinh thành Huế. Nhà Nguyễn tiếp tục thực thi chủ quyền ở Hoàng Sa, Trường Sa.",
  examples: [
    { title: "Tính", problem: "Từ 1802 đến 1838 là bao nhiêu năm?", solution: "36 năm." },
    { title: "Tính", problem: "Từ 1802 đến 1945 (nhà Nguyễn kết thúc) là bao nhiêu năm?", solution: "143 năm." },
    { title: "Phân tích", problem: "Chính sách “đóng cửa” với phương Tây có hạn chế gì?", solution: "Làm đất nước chậm phát triển, khó tiếp thu tiến bộ kĩ thuật." }
  ],
  exercises: [
    { question: "Quốc hiệu năm 1804?", hints: ["Hai chữ.", "Việt …"], solution: "Việt Nam." },
    { question: "Thời Minh Mạng chia cả nước thành bao nhiêu tỉnh?", hints: ["Cùng phủ Thừa Thiên.", "Ba chục."], solution: "30 tỉnh và phủ Thừa Thiên." },
    { question: "Tác giả “Truyện Kiều”?", hints: ["Đại thi hào.", "Nguyễn …"], solution: "Nguyễn Du." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Năm 1802, Nguyễn Ánh lập nhà Nguyễn.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Quốc hiệu nước ta năm 1838:", options: ["Đại Nam", "Việt Nam", "Đại Việt", "Đại Ngu"], answer: 0, explain: "Đại Nam." },
    { type: 'short', q: "Từ 1802 đến 1838 là bao nhiêu năm?", answer: "36", unit: "năm", calc: "1838-1802", explain: "36." },
    { type: 'mcq', q: "Bộ luật nhà Nguyễn ban hành năm 1815:", options: ["Hoàng Việt luật lệ", "Luật Hồng Đức", "Hình thư", "Quốc triều hình luật"], answer: 0, explain: "Hoàng Việt luật lệ." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Nhà Nguyễn mở cửa buôn bán rộng rãi với phương Tây.", answer: false, explain: "Chính sách “đóng cửa”." },
    { type: 'mcq', q: "Kinh đô nhà Nguyễn:", options: ["Phú Xuân (Huế)", "Thăng Long", "Gia Định", "Hoa Lư"], answer: 0, explain: "Huế." },
    { type: 'short', q: "Thời Minh Mạng có 30 tỉnh và 1 phủ. Tổng cộng bao nhiêu đơn vị?", answer: "31", unit: "đơn vị", calc: "30+1", explain: "31." },
    { type: 'mcq', q: "Người tổ chức khai hoang lập huyện Kim Sơn, Tiền Hải:", options: ["Nguyễn Công Trứ", "Nguyễn Du", "Gia Long", "Minh Mạng"], answer: 0, explain: "Nguyễn Công Trứ." }
  ]
});
})();
