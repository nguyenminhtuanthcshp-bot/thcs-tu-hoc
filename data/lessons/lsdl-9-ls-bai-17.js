/* LS&ĐL 9 – Lịch sử, Bài 17. Việt Nam kháng chiến chống Mỹ, cứu nước, thống nhất đất nước giai đoạn 1965 – 1975. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-9/ls-bai-17', {
  objectives: [
    "Trình bày được cuộc chiến đấu chống chiến lược “Chiến tranh cục bộ” và “Việt Nam hoá chiến tranh”.",
    "Nêu được Hiệp định Pa-ri (27/1/1973).",
    "Trình bày được cuộc Tổng tiến công và nổi dậy Xuân 1975, nguyên nhân thắng lợi và ý nghĩa."
  ],
  intro: "11 giờ 30 phút ngày 30/4/1975, lá cờ cách mạng tung bay trên nóc Dinh Độc Lập. Hai mươi mốt năm kháng chiến đã kết thúc bằng thắng lợi trọn vẹn.",
  steps: [
    { title: "“Chiến tranh cục bộ” (1965 – 1968)", html: "<p>Mỹ đưa quân viễn chinh vào miền Nam, mở rộng ném bom miền Bắc. Ta thắng ở Vạn Tường (8/1965), đánh bại hai mùa khô; Tổng tiến công và nổi dậy Tết Mậu Thân (<b>1968</b>) buộc Mỹ “phi Mỹ hoá” chiến tranh.</p>" },
    { title: "“Việt Nam hoá chiến tranh” và Hiệp định Pa-ri", html: "<p>Từ 1969, Mỹ rút dần quân, dùng quân đội Sài Gòn. Cuối năm 1972, quân dân miền Bắc đánh bại cuộc tập kích bằng B-52 vào Hà Nội, Hải Phòng (“Điện Biên Phủ trên không”). Ngày <b>27/1/1973</b>, Hiệp định Pa-ri được kí; Mỹ rút hết quân.</p>",
      svg: S.table({ title: "Các chiến lược của Mỹ", head: ["Chiến lược", "Thời gian"], rows: [["Chiến tranh đặc biệt", "1961 – 1965"], ["Chiến tranh cục bộ", "1965 – 1968"], ["Việt Nam hoá chiến tranh", "1969 – 1973"]], colW: 250 }), caption: "Ba chiến lược chiến tranh ở miền Nam." },
    { title: "Xuân 1975", html: "<p>Cuộc Tổng tiến công và nổi dậy diễn ra qua ba chiến dịch lớn.</p>",
      svg: S.timeline({ title: "Xuân 1975", items: [{ y: "4/3 – 24/3", s: "Tây Nguyên" }, { y: "21/3 – 29/3", s: "Huế – Đà Nẵng" }, { y: "26/4 – 30/4", s: "Hồ Chí Minh" }] }), caption: "Chiến dịch Tây Nguyên mở đầu bằng trận Buôn Ma Thuột (10/3/1975)." },
    { title: "Ý nghĩa", html: "<div class=\"box key\">Kết thúc 21 năm kháng chiến chống Mỹ và 30 năm chiến tranh giải phóng dân tộc (1945 – 1975); hoàn thành cách mạng dân tộc dân chủ nhân dân trong cả nước, thống nhất đất nước; mở ra kỉ nguyên độc lập, thống nhất, đi lên chủ nghĩa xã hội.</div>" }
  ],
  summary: "Giai đoạn 1965 – 1975, quân dân ta đánh bại “Chiến tranh cục bộ” (Vạn Tường 1965, Mậu Thân 1968) và “Việt Nam hoá chiến tranh”; thắng “Điện Biên Phủ trên không” (12/1972), buộc Mỹ kí Hiệp định Pa-ri (27/1/1973). Tổng tiến công và nổi dậy Xuân 1975 qua ba chiến dịch Tây Nguyên, Huế – Đà Nẵng, Hồ Chí Minh, giải phóng miền Nam ngày 30/4/1975.",
  examples: [
    { title: "Tính", problem: "Từ 1954 đến 1975 là bao nhiêu năm?", solution: "21 năm." },
    { title: "Giải thích", problem: "Vì sao Hiệp định Pa-ri là thắng lợi lớn?", solution: "Mỹ phải cam kết tôn trọng các quyền dân tộc cơ bản và rút hết quân, tạo thời cơ giải phóng miền Nam." },
    { title: "So sánh", problem: "Chiến dịch Hồ Chí Minh diễn ra trong mấy ngày?", solution: "Từ 26/4 đến 30/4/1975: 5 ngày." }
  ],
  exercises: [
    { question: "Hiệp định Pa-ri kí ngày nào?", hints: ["Đầu năm 1973.", "Ngày 27/1."], solution: "27/1/1973." },
    { question: "Chiến dịch mở đầu Xuân 1975?", hints: ["Ở vùng cao nguyên.", "Tây …"], solution: "Chiến dịch Tây Nguyên." },
    { question: "“Điện Biên Phủ trên không” diễn ra năm nào?", hints: ["Cuối năm 1972.", "Tháng 12."], solution: "12/1972." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Miền Nam được hoàn toàn giải phóng ngày 30/4/1975.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Chiến lược Mỹ dùng quân viễn chinh là chủ yếu:", options: ["Chiến tranh cục bộ", "Chiến tranh đặc biệt", "Việt Nam hoá chiến tranh", "Chiến tranh lạnh"], answer: 0, explain: "Chiến tranh cục bộ." },
    { type: 'short', q: "Chiến dịch Hồ Chí Minh từ 26/4 đến 30/4/1975 kéo dài mấy ngày (tính cả hai đầu)?", answer: "5", unit: "ngày", calc: "30-26+1", explain: "5." },
    { type: 'mcq', q: "Trận mở màn chiến dịch Tây Nguyên:", options: ["Buôn Ma Thuột", "Plây-cu", "Kon Tum", "Đà Lạt"], answer: 0, explain: "Buôn Ma Thuột." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Hiệp định Pa-ri được kí năm 1975.", answer: false, explain: "Ngày 27/1/1973." },
    { type: 'mcq', q: "Chiến thắng đầu tiên của ta trước quân Mỹ (8/1965):", options: ["Vạn Tường", "Ấp Bắc", "Bình Giã", "Khe Sanh"], answer: 0, explain: "Vạn Tường." },
    { type: 'short', q: "Từ 1945 đến 1975 là bao nhiêu năm chiến tranh giải phóng?", answer: "30", unit: "năm", calc: "1975-1945", explain: "30." },
    { type: 'mcq', q: "Sự kiện năm 1968 ở miền Nam:", options: ["Tổng tiến công và nổi dậy Tết Mậu Thân", "Đồng khởi", "Hiệp định Pa-ri", "Chiến dịch Hồ Chí Minh"], answer: 0, explain: "Mậu Thân." }
  ]
});
})();
