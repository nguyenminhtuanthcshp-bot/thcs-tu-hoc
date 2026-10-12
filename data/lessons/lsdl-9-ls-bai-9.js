/* LS&ĐL 9 – Lịch sử, Bài 9. Chiến tranh lạnh (1947 – 1989). Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-9/ls-bai-9', {
  objectives: [
    "Nêu được nguyên nhân, biểu hiện của Chiến tranh lạnh.",
    "Trình bày được sự hình thành hai khối đối lập.",
    "Nêu được sự kết thúc và hậu quả của Chiến tranh lạnh."
  ],
  intro: "Không có một trận đánh trực tiếp nào giữa Mỹ và Liên Xô, nhưng thế giới đã sống trong căng thẳng suốt hơn 40 năm. Đó là “Chiến tranh lạnh”.",
  steps: [
    { title: "Nguồn gốc", html: "<p>Sau năm 1945, Mỹ và Liên Xô đối đầu về mục tiêu và chiến lược. Tháng 3/<b>1947</b>, Tổng thống Mỹ Tru-man đưa ra học thuyết chống Liên Xô và các nước xã hội chủ nghĩa – mở đầu Chiến tranh lạnh.</p>" },
    { title: "Hai khối đối lập", html: "<p>Các tổ chức đối đầu:</p>",
      svg: S.table({ title: "Hai khối", head: ["Khối do Mỹ đứng đầu", "Khối do Liên Xô đứng đầu"], rows: [["Kế hoạch Mác-san (1947)", "Hội đồng Tương trợ KT (1949)"], ["NATO (4/1949)", "Tổ chức Hiệp ước Vác-sa-va (5/1955)"]], colW: 250 }), caption: "Sự đối đầu về kinh tế và quân sự." },
    { title: "Biểu hiện", html: "<ul><li>Chạy đua vũ trang, đặc biệt là vũ khí hạt nhân.</li><li>Lập các khối quân sự, căn cứ quân sự.</li><li>Can thiệp vào các cuộc chiến tranh cục bộ: Triều Tiên, Việt Nam…</li></ul>",
      svg: S.timeline({ title: "Chiến tranh lạnh", items: [{ y: "3/1947", s: "Học thuyết Tru-man" }, { y: "4/1949", s: "NATO" }, { y: "5/1955", s: "Vác-sa-va" }, { y: "8/1961", s: "Bức tường Béc-lin" }, { y: "11/1989", s: "Bức tường sụp đổ" }, { y: "12/1989", s: "Gặp gỡ Man-ta" }] }), caption: "Một số mốc tiêu biểu." },
    { title: "Kết thúc", html: "<div class=\"box key\">Tháng 12/<b>1989</b>, tại cuộc gặp không chính thức ở đảo Man-ta, lãnh đạo Liên Xô và Mỹ tuyên bố chấm dứt Chiến tranh lạnh. Hậu quả: thế giới luôn căng thẳng, chi phí quân sự khổng lồ, nhiều cuộc chiến tranh cục bộ.</div>" }
  ],
  summary: "Chiến tranh lạnh mở đầu bằng học thuyết Tru-man (3/1947), là sự đối đầu toàn diện giữa hai khối do Mỹ và Liên Xô đứng đầu, nhưng không xung đột trực tiếp. Biểu hiện: chạy đua vũ trang, lập NATO (1949) và Vác-sa-va (1955), can thiệp vào chiến tranh cục bộ. Tháng 12/1989, gặp gỡ Man-ta chấm dứt Chiến tranh lạnh.",
  examples: [
    { title: "Tính", problem: "Chiến tranh lạnh kéo dài từ 1947 đến 1989 là bao nhiêu năm?", solution: "42 năm." },
    { title: "Giải thích", problem: "Vì sao gọi là chiến tranh “lạnh”?", solution: "Hai siêu cường không đánh nhau trực tiếp mà đối đầu bằng chính trị, kinh tế, chạy đua vũ trang, chiến tranh cục bộ." },
    { title: "So sánh", problem: "NATO và Tổ chức Hiệp ước Vác-sa-va ra đời cách nhau mấy năm?", solution: "1955 − 1949 = 6 năm." }
  ],
  exercises: [
    { question: "Ai mở đầu Chiến tranh lạnh?", hints: ["Tổng thống Mỹ năm 1947.", "Tru-…"], solution: "Tổng thống Tru-man." },
    { question: "Bức tường Béc-lin sụp đổ năm nào?", hints: ["Cùng năm kết thúc Chiến tranh lạnh.", "Tháng 11."], solution: "11/1989." },
    { question: "Khối quân sự của phương Tây?", hints: ["Thành lập năm 1949.", "Tên viết tắt 4 chữ."], solution: "NATO." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Chiến tranh lạnh chấm dứt năm 1989.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Tổ chức quân sự do Mỹ đứng đầu:", options: ["NATO", "Vác-sa-va", "SEV", "ASEAN"], answer: 0, explain: "NATO." },
    { type: 'short', q: "Từ 1947 đến 1989 là bao nhiêu năm?", answer: "42", unit: "năm", calc: "1989-1947", explain: "42." },
    { type: 'mcq', q: "Kế hoạch viện trợ của Mỹ cho Tây Âu năm 1947:", options: ["Kế hoạch Mác-san", "Chính sách mới", "NEP", "Kế hoạch 5 năm"], answer: 0, explain: "Mác-san." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Liên Xô và Mỹ đánh nhau trực tiếp trong Chiến tranh lạnh.", answer: false, explain: "Không đánh nhau trực tiếp." },
    { type: 'mcq', q: "Nơi gặp gỡ chấm dứt Chiến tranh lạnh:", options: ["Man-ta", "Béc-lin", "I-an-ta", "Pa-ri"], answer: 0, explain: "Man-ta." },
    { type: 'short', q: "Bức tường Béc-lin tồn tại từ 1961 đến 1989 là bao nhiêu năm?", answer: "28", unit: "năm", calc: "1989-1961", explain: "28." },
    { type: 'mcq', q: "Tổ chức Hiệp ước Vác-sa-va thành lập năm:", options: ["1955", "1949", "1947", "1961"], answer: 0, explain: "1955." }
  ]
});
})();
