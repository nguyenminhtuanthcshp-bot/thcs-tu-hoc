/* LS&ĐL 9 – Lịch sử, Bài 18. Việt Nam từ năm 1976 đến năm 1991. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-9/ls-bai-18', {
  objectives: [
    "Trình bày được việc hoàn thành thống nhất đất nước về mặt nhà nước.",
    "Nêu được cuộc đấu tranh bảo vệ biên giới Tây Nam và phía Bắc.",
    "Trình bày được đường lối đổi mới (Đại hội VI, 12/1986) và thành tựu bước đầu."
  ],
  intro: "Từ một nước phải nhập khẩu lương thực, chỉ ba năm sau Đổi mới, năm 1989 Việt Nam đã xuất khẩu gạo. Bước ngoặt ấy bắt đầu từ đâu?",
  steps: [
    { title: "Thống nhất về nhà nước", html: "<p>Ngày <b>25/4/1976</b>, tổng tuyển cử bầu Quốc hội chung. Quốc hội khoá VI (7/1976) quyết định tên nước: <b>Cộng hoà xã hội chủ nghĩa Việt Nam</b>, thủ đô Hà Nội, Quốc ca “Tiến quân ca”, Quốc kì nền đỏ sao vàng.</p>",
      svg: S.timeline({ title: "1976 – 1991", items: [{ y: "25/4/1976", s: "Tổng tuyển cử" }, { y: "7/1976", s: "Tên nước CHXHCN VN" }, { y: "1977", s: "Vào Liên hợp quốc" }, { y: "2/1979", s: "Biên giới phía Bắc" }, { y: "12/1986", s: "Đại hội VI" }, { y: "6/1991", s: "Đại hội VII" }] }), caption: "Các mốc chính." },
    { title: "Bảo vệ Tổ quốc", html: "<ul><li>Biên giới Tây Nam: đánh trả tập đoàn Khơ-me Đỏ, giúp nhân dân Cam-pu-chia thoát khỏi chế độ diệt chủng (1/1979).</li><li>Biên giới phía Bắc: chiến đấu bảo vệ biên giới từ 17/2/1979.</li><li>Ngày 14/3/1988, hải chiến ở Gạc Ma (Trường Sa).</li></ul>" },
    { title: "Đường lối Đổi mới", html: "<p>Đại hội VI (12/<b>1986</b>) đề ra đường lối đổi mới toàn diện, trọng tâm là đổi mới kinh tế: xoá bỏ cơ chế tập trung quan liêu bao cấp, phát triển kinh tế hàng hoá nhiều thành phần.</p>",
      svg: S.mindmap({ center: "Đổi mới 1986", branches: [{ title: "Kinh tế", items: ["Nhiều thành phần", "Cơ chế thị trường"] }, { title: "Chính trị", items: ["Dân chủ hoá"] }, { title: "Đối ngoại", items: ["Đa dạng hoá quan hệ"] }], w: 640, size: 13 }), caption: "Đổi mới kinh tế là trọng tâm." },
    { title: "Thành tựu bước đầu", html: "<div class=\"box key\">Lương thực tăng mạnh; từ năm <b>1989</b> Việt Nam xuất khẩu gạo; lạm phát được kiềm chế dần; quan hệ đối ngoại mở rộng.</div>" }
  ],
  summary: "Ngày 25/4/1976 tổng tuyển cử bầu Quốc hội chung; tháng 7/1976 nước Cộng hoà xã hội chủ nghĩa Việt Nam ra đời. Ta bảo vệ biên giới Tây Nam, phía Bắc (từ 2/1979) và chủ quyền biển đảo (Gạc Ma 14/3/1988). Đại hội VI (12/1986) đề ra đường lối Đổi mới, trọng tâm là kinh tế; bước đầu thành công, từ 1989 Việt Nam xuất khẩu gạo.",
  examples: [
    { title: "Tính", problem: "Từ 1986 đến 2026 Đổi mới được bao nhiêu năm?", solution: "40 năm." },
    { title: "Giải thích", problem: "Vì sao phải đổi mới?", solution: "Cơ chế tập trung quan liêu bao cấp làm kinh tế khủng hoảng, lạm phát cao, đời sống khó khăn." },
    { title: "Nhận xét", problem: "Ý nghĩa của việc xuất khẩu gạo năm 1989?", solution: "Chứng tỏ chính sách đổi mới trong nông nghiệp (khoán) phát huy hiệu quả." }
  ],
  exercises: [
    { question: "Tên nước Cộng hoà xã hội chủ nghĩa Việt Nam có từ năm nào?", hints: ["Quốc hội khoá VI.", "Năm 197…"], solution: "Năm 1976 (tháng 7)." },
    { question: "Đại hội đề ra đường lối Đổi mới?", hints: ["Cuối năm 1986.", "Đại hội …"], solution: "Đại hội VI (12/1986)." },
    { question: "Hải chiến Gạc Ma ngày nào?", hints: ["Năm 1988.", "Ngày 14/3."], solution: "14/3/1988." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Đại hội VI của Đảng (12/1986) đề ra đường lối Đổi mới.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Tổng tuyển cử bầu Quốc hội chung cả nước ngày:", options: ["25/4/1976", "6/1/1946", "30/4/1975", "2/9/1976"], answer: 0, explain: "25/4/1976." },
    { type: 'short', q: "Từ 1976 đến 1986 là bao nhiêu năm?", answer: "10", unit: "năm", calc: "1986-1976", explain: "10." },
    { type: 'mcq', q: "Trọng tâm của đường lối Đổi mới:", options: ["Đổi mới kinh tế", "Đổi mới quân sự", "Đổi mới ngoại giao", "Đổi mới văn hoá"], answer: 0, explain: "Kinh tế." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Ngay trước Đổi mới (năm 1985), Việt Nam đã là nước xuất khẩu gạo lớn.", answer: false, explain: "Khi đó vẫn phải nhập khẩu lương thực; từ năm 1989 mới xuất khẩu gạo." },
    { type: 'mcq', q: "Việt Nam trở thành thành viên Liên hợp quốc năm:", options: ["1977", "1976", "1995", "1986"], answer: 0, explain: "1977." },
    { type: 'short', q: "Từ 1986 đến 1989 là bao nhiêu năm?", answer: "3", unit: "năm", calc: "1989-1986", explain: "3." },
    { type: 'mcq', q: "Hải chiến Gạc Ma diễn ra ở quần đảo:", options: ["Trường Sa", "Hoàng Sa", "Côn Sơn", "Thổ Chu"], answer: 0, explain: "Trường Sa." }
  ]
});
})();
