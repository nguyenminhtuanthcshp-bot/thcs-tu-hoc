/* LS&ĐL 9 – Lịch sử, Bài 20. Châu Á từ năm 1991 đến nay. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-9/ls-bai-20', {
  objectives: [
    "Nêu được sự phát triển của Nhật Bản, Hàn Quốc, Trung Quốc, Ấn Độ từ năm 1991.",
    "Trình bày được quá trình mở rộng và hợp tác của ASEAN.",
    "Nhận xét được vai trò của châu Á trong kinh tế thế giới."
  ],
  intro: "Ngày nay, nhiều nền kinh tế lớn nhất thế giới nằm ở châu Á. Châu lục này đã vươn lên như thế nào sau năm 1991?",
  steps: [
    { title: "Các nước lớn", html: "<ul><li>Trung Quốc: tiếp tục cải cách, mở cửa; năm 2010 trở thành nền kinh tế lớn thứ hai thế giới.</li><li>Nhật Bản: cường quốc kinh tế, khoa học – công nghệ.</li><li>Hàn Quốc: nước công nghiệp mới, mạnh về điện tử, ô tô, văn hoá đại chúng.</li><li>Ấn Độ: cải cách kinh tế từ năm 1991, mạnh về công nghệ thông tin.</li></ul>" },
    { title: "ASEAN mở rộng", html: "<p>Từ 5 nước sáng lập, ASEAN mở rộng thành 10 nước (1999) và 11 nước khi Đông Ti-mo gia nhập (10/2025).</p>",
      svg: S.timeline({ title: "ASEAN", items: [{ y: "1967", s: "5 nước sáng lập" }, { y: "1995", s: "Việt Nam" }, { y: "1999", s: "10 nước" }, { y: "2015", s: "Cộng đồng ASEAN" }, { y: "10/2025", s: "Đông Ti-mo" }] }), caption: "Cộng đồng ASEAN chính thức hình thành cuối năm 2015." },
    { title: "Cộng đồng ASEAN", html: "<p>Ba trụ cột:</p>",
      svg: S.mindmap({ center: "Cộng đồng ASEAN", branches: [{ title: "Chính trị – An ninh", items: ["Hoà bình, ổn định"] }, { title: "Kinh tế", items: ["Thị trường chung"] }, { title: "Văn hoá – Xã hội", items: ["Bản sắc ASEAN"] }], w: 640, size: 13 }), caption: "Thành lập ngày 31/12/2015." },
    { title: "Ghi nhớ", html: "<div class=\"box key\">Châu Á là khu vực năng động bậc nhất thế giới, đóng góp ngày càng lớn vào tăng trưởng toàn cầu; ASEAN giữ vai trò trung tâm trong hợp tác khu vực.</div>" }
  ],
  summary: "Từ năm 1991, Trung Quốc, Nhật Bản, Hàn Quốc, Ấn Độ phát triển mạnh, châu Á trở thành khu vực năng động nhất thế giới. ASEAN mở rộng lên 10 nước (1999), hình thành Cộng đồng ASEAN (31/12/2015) với ba trụ cột, và có 11 thành viên khi Đông Ti-mo gia nhập (10/2025).",
  examples: [
    { title: "Tính", problem: "Từ 1967 đến 2025 ASEAN đã tồn tại bao nhiêu năm?", solution: "58 năm." },
    { title: "Giải thích", problem: "Vì sao châu Á phát triển năng động?", solution: "Dân số đông, lao động dồi dào, cải cách mở cửa, ứng dụng khoa học – công nghệ, hội nhập." },
    { title: "Nhận xét", problem: "Ba trụ cột của Cộng đồng ASEAN?", solution: "Chính trị – An ninh, Kinh tế, Văn hoá – Xã hội." }
  ],
  exercises: [
    { question: "ASEAN có 10 nước từ năm nào?", hints: ["Cam-pu-chia gia nhập.", "199…"], solution: "Năm 1999." },
    { question: "Thành viên thứ 11 của ASEAN?", hints: ["Gia nhập năm 2025.", "Đông …"], solution: "Đông Ti-mo." },
    { question: "Ấn Độ bắt đầu cải cách kinh tế năm?", hints: ["Cùng năm Liên Xô tan rã.", "199…"], solution: "Năm 1991." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Cộng đồng ASEAN được thành lập cuối năm 2015.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Nền kinh tế lớn thứ hai thế giới từ năm 2010:", options: ["Trung Quốc", "Nhật Bản", "Ấn Độ", "Hàn Quốc"], answer: 0, explain: "Trung Quốc." },
    { type: 'short', q: "ASEAN có 10 nước, nay thêm Đông Ti-mo. Tổng số thành viên?", answer: "11", unit: "nước", calc: "10+1", explain: "11." },
    { type: 'mcq', q: "Trụ cột nào không thuộc Cộng đồng ASEAN?", options: ["Quân sự chung", "Kinh tế", "Chính trị – An ninh", "Văn hoá – Xã hội"], answer: 0, explain: "Không có trụ cột quân sự chung." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: ASEAN hiện chỉ có 5 thành viên.", answer: false, explain: "Có 11 thành viên." },
    { type: 'mcq', q: "Thế mạnh nổi bật của Ấn Độ:", options: ["Công nghệ thông tin", "Dầu mỏ", "Ô tô điện", "Đóng tàu"], answer: 0, explain: "Công nghệ thông tin." },
    { type: 'short', q: "Từ 1999 đến 2025 là bao nhiêu năm?", answer: "26", unit: "năm", calc: "2025-1999", explain: "26." },
    { type: 'mcq', q: "Hàn Quốc được xếp vào nhóm:", options: ["Nước công nghiệp mới", "Nước kém phát triển", "Nước nông nghiệp", "Nước xuất khẩu dầu"], answer: 0, explain: "Nước công nghiệp mới." }
  ]
});
})();
