/* LS&ĐL 9 – Lịch sử, Bài 11. Nước Mỹ và Tây Âu từ năm 1945 đến năm 1991. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-9/ls-bai-11', {
  objectives: [
    "Trình bày được sự phát triển kinh tế, khoa học – kĩ thuật của Mỹ sau 1945.",
    "Nêu được chính sách đối nội, đối ngoại của Mỹ.",
    "Trình bày được sự phát triển và quá trình liên kết của Tây Âu."
  ],
  intro: "Sau chiến tranh, Mỹ nắm khoảng một nửa sản lượng công nghiệp thế giới. Tây Âu thì từ đổ nát vươn lên và tiến tới liên kết thành một khối.",
  steps: [
    { title: "Kinh tế Mỹ", html: "<p>Sau 1945, Mỹ trở thành trung tâm kinh tế – tài chính lớn nhất thế giới; đi đầu trong cách mạng khoa học – kĩ thuật (máy tính, vũ trụ: năm <b>1969</b> đưa người lên Mặt Trăng).</p>" },
    { title: "Chính sách của Mỹ", html: "<ul><li>Đối nội: duy trì chế độ hai đảng (Dân chủ và Cộng hoà).</li><li>Đối ngoại: “chiến lược toàn cầu” nhằm làm bá chủ thế giới; can thiệp nhiều nơi, trong đó có chiến tranh xâm lược Việt Nam.</li></ul>" },
    { title: "Tây Âu", html: "<p>Nhờ Kế hoạch Mác-san, Tây Âu phục hồi (1945 – 1950), rồi phát triển nhanh, trở thành một trong ba trung tâm kinh tế thế giới (cùng Mỹ, Nhật Bản).</p>",
      svg: S.timeline({ title: "Liên kết Tây Âu", items: [{ y: "1951", s: "Cộng đồng Than – Thép" }, { y: "1957", s: "Cộng đồng Kinh tế châu Âu" }, { y: "1967", s: "Cộng đồng châu Âu" }, { y: "1993", s: "Liên minh châu Âu" }] }), caption: "Hiệp ước Ma-a-xtrích kí năm 1992, có hiệu lực từ 1/11/1993." },
    { title: "Ghi nhớ", html: "<div class=\"box key\">Mỹ và Tây Âu là đồng minh chặt chẽ trong Chiến tranh lạnh (NATO). Liên kết Tây Âu là mô hình liên kết khu vực thành công nhất thế giới.</div>" }
  ],
  summary: "Sau 1945, Mỹ là nước giàu mạnh nhất, đi đầu cách mạng khoa học – kĩ thuật, theo đuổi chiến lược toàn cầu. Tây Âu phục hồi nhờ Kế hoạch Mác-san, trở thành một trong ba trung tâm kinh tế; tiến trình liên kết từ Cộng đồng Than – Thép (1951) đến Liên minh châu Âu (1993).",
  examples: [
    { title: "Tính", problem: "Từ 1951 đến 1993 là bao nhiêu năm?", solution: "42 năm." },
    { title: "Giải thích", problem: "Vì sao Mỹ phát triển mạnh sau chiến tranh?", solution: "Không bị tàn phá, thu lợi từ buôn bán vũ khí, tài nguyên phong phú, ứng dụng khoa học – kĩ thuật." },
    { title: "So sánh", problem: "Ba trung tâm kinh tế thế giới thập niên 1970?", solution: "Mỹ, Tây Âu, Nhật Bản." }
  ],
  exercises: [
    { question: "Mỹ đưa người lên Mặt Trăng năm nào?", hints: ["Cuối thập niên 1960.", "196…"], solution: "Năm 1969." },
    { question: "Liên minh châu Âu ra đời năm?", hints: ["Hiệp ước Ma-a-xtrích.", "199…"], solution: "Năm 1993." },
    { question: "Kế hoạch giúp Tây Âu phục hồi?", hints: ["Mang tên một ngoại trưởng Mỹ.", "Mác-…"], solution: "Kế hoạch Mác-san." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Mỹ đưa người lên Mặt Trăng năm 1969.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Liên minh châu Âu (EU) ra đời năm:", options: ["1993", "1957", "1951", "1967"], answer: 0, explain: "1993." },
    { type: 'short', q: "Từ 1957 đến 1993 là bao nhiêu năm?", answer: "36", unit: "năm", calc: "1993-1957", explain: "36." },
    { type: 'mcq', q: "Hai đảng thay nhau cầm quyền ở Mỹ:", options: ["Dân chủ và Cộng hoà", "Bảo thủ và Công đảng", "Xã hội và Cộng sản", "Tự do và Xanh"], answer: 0, explain: "Dân chủ và Cộng hoà." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Tây Âu phục hồi kinh tế không cần viện trợ từ bên ngoài.", answer: false, explain: "Nhờ Kế hoạch Mác-san." },
    { type: 'mcq', q: "Ba trung tâm kinh tế thế giới thập niên 1970:", options: ["Mỹ, Tây Âu, Nhật Bản", "Mỹ, Liên Xô, Trung Quốc", "Anh, Pháp, Đức", "Nhật, Hàn, Trung Quốc"], answer: 0, explain: "Mỹ, Tây Âu, Nhật Bản." },
    { type: 'short', q: "Từ 1945 đến 1969 là bao nhiêu năm?", answer: "24", unit: "năm", calc: "1969-1945", explain: "24." },
    { type: 'mcq', q: "Tổ chức liên kết đầu tiên ở Tây Âu (1951):", options: ["Cộng đồng Than – Thép châu Âu", "EU", "NATO", "SEV"], answer: 0, explain: "Than – Thép." }
  ]
});
})();
