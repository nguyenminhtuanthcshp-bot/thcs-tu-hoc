/* LS&ĐL 8 – Lịch sử, Bài 19. Phong trào yêu nước chống Pháp ở Việt Nam từ đầu thế kỉ XX đến năm 1917. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-8/ls-bai-19', {
  objectives: [
    "Trình bày được những nét chính về hoạt động của Phan Bội Châu, Phan Châu Trinh.",
    "Nêu được phong trào Đông Kinh nghĩa thục, chống thuế ở Trung Kì.",
    "Nêu được những hoạt động đầu tiên của Nguyễn Tất Thành."
  ],
  intro: "Ngày 5/6/1911, từ bến cảng Nhà Rồng, người thanh niên Nguyễn Tất Thành rời Tổ quốc ra đi tìm đường cứu nước. Ngày này nay là Ngày Bác Hồ ra đi tìm đường cứu nước.",
  steps: [
    { title: "Phan Bội Châu và phong trào Đông Du", html: "<p>Năm <b>1904</b>, Phan Bội Châu lập <b>Duy Tân hội</b>, chủ trương bạo động giành độc lập, dựa vào Nhật Bản. Phong trào <b>Đông Du</b> (1905 – 1908) đưa thanh niên sang Nhật học tập.</p>" },
    { title: "Phan Châu Trinh và cuộc vận động Duy tân", html: "<p>Phan Châu Trinh chủ trương cải cách, nâng cao dân trí, dân quyền. Năm <b>1907</b>, <b>Đông Kinh nghĩa thục</b> mở ở Hà Nội. Năm <b>1908</b>, phong trào chống thuế bùng nổ ở Trung Kì.</p>",
      svg: S.table({ title: "Hai xu hướng cứu nước đầu thế kỉ XX", head: ["Xu hướng", "Chủ trương"], rows: [["Bạo động (Phan Bội Châu)", "Dùng vũ lực, nhờ ngoại viện"], ["Cải cách (Phan Châu Trinh)", "Nâng cao dân trí, dân quyền"]], colW: 250 }), caption: "Cả hai đều đặt mục tiêu cứu nước, nhưng con đường khác nhau." },
    { title: "Nguyễn Tất Thành ra đi tìm đường cứu nước", html: "<p>Ngày <b>5/6/1911</b>, Nguyễn Tất Thành rời bến Nhà Rồng, sang phương Tây tìm hiểu các cuộc cách mạng, tìm con đường cứu nước mới.</p>",
      svg: S.timeline({ title: "Phong trào yêu nước (1904 – 1917)", items: [{ y: "1904", s: "Duy Tân hội" }, { y: "1905 – 1908", s: "Phong trào Đông Du" }, { y: "1907", s: "Đông Kinh nghĩa thục" }, { y: "5/6/1911", s: "Nguyễn Tất Thành ra đi" }] }), caption: "Năm 1912, Phan Bội Châu lập Việt Nam Quang phục hội." },
    { title: "Ghi nhớ", html: "<div class=\"box key\">Đầu thế kỉ XX: phong trào yêu nước theo khuynh hướng dân chủ tư sản (Phan Bội Châu, Phan Châu Trinh); Nguyễn Tất Thành ra đi tìm con đường cứu nước mới (1911).</div>" }
  ],
  summary: "Đầu thế kỉ XX, Phan Bội Châu lập Duy Tân hội (1904), tổ chức phong trào Đông Du (1905 – 1908); Phan Châu Trinh chủ trương cải cách, nâng cao dân trí; năm 1907 Đông Kinh nghĩa thục ra đời; năm 1908 phong trào chống thuế ở Trung Kì. Ngày 5/6/1911, Nguyễn Tất Thành ra đi tìm đường cứu nước.",
  examples: [
    { title: "Tính", problem: "Phong trào Đông Du kéo dài từ 1905 đến 1908 là bao nhiêu năm?", solution: "3 năm." },
    { title: "So sánh", problem: "Phan Bội Châu và Phan Châu Trinh khác nhau ở điểm nào?", solution: "Phan Bội Châu chủ trương bạo động, dựa vào Nhật; Phan Châu Trinh chủ trương cải cách, nâng cao dân trí." },
    { title: "Tính", problem: "Từ 5/6/1911 đến 5/6/2011 là bao nhiêu năm?", solution: "100 năm." }
  ],
  exercises: [
    { question: "Tổ chức do Phan Bội Châu lập năm 1904?", hints: ["Duy …", "… hội."], solution: "Duy Tân hội." },
    { question: "Đông Kinh nghĩa thục mở ở đâu?", hints: ["“Đông Kinh” là tên cũ của …", "Thủ đô."], solution: "Hà Nội." },
    { question: "Nguyễn Tất Thành ra đi từ bến cảng nào?", hints: ["Ở Sài Gòn.", "Nhà …"], solution: "Bến cảng Nhà Rồng." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Ngày 5/6/1911, Nguyễn Tất Thành ra đi tìm đường cứu nước.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Phong trào đưa thanh niên sang Nhật học:", options: ["Đông Du", "Duy tân", "Cần Vương", "Chống thuế"], answer: 0, explain: "Đông Du." },
    { type: 'short', q: "Từ 1904 đến 1911 là bao nhiêu năm?", answer: "7", unit: "năm", calc: "1911-1904", explain: "7." },
    { type: 'mcq', q: "Người chủ trương cải cách, nâng cao dân trí:", options: ["Phan Châu Trinh", "Phan Bội Châu", "Hoàng Hoa Thám", "Tôn Thất Thuyết"], answer: 0, explain: "Phan Châu Trinh." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Đông Kinh nghĩa thục mở năm 1917.", answer: false, explain: "Năm 1907." },
    { type: 'mcq', q: "Phong trào chống thuế ở Trung Kì diễn ra năm:", options: ["1908", "1905", "1911", "1885"], answer: 0, explain: "1908." },
    { type: 'short', q: "Từ 1911 đến 2026 là bao nhiêu năm?", answer: "115", unit: "năm", calc: "2026-1911", explain: "115." },
    { type: 'mcq', q: "Phan Bội Châu dựa vào nước nào để đánh Pháp?", options: ["Nhật Bản", "Anh", "Mỹ", "Nga"], answer: 0, explain: "Nhật Bản." }
  ]
});
})();
