/* LS&ĐL 7 – Chủ đề chung, Chủ đề chung 2. Đô thị: Lịch sử và hiện tại. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-7/cdc-2', {
  objectives: [
    "Nêu được vai trò của đô thị trong lịch sử cổ đại và trung đại.",
    "Giới thiệu được một số đô thị tiêu biểu.",
    "Trình bày được xu hướng đô thị hoá hiện nay."
  ],
  intro: "Ngày nay hơn một nửa dân số thế giới sống ở đô thị. Nhưng đô thị đã xuất hiện từ hàng nghìn năm trước, bên những dòng sông và bờ biển.",
  steps: [
    { title: "Đô thị cổ đại", html: "<p>Ở Hy Lạp và La Mã cổ đại, các thành thị như <b>A-ten</b>, <b>Rô-ma</b> là trung tâm chính trị, buôn bán, văn hoá; có quảng trường, đền thờ, nhà hát.</p>" },
    { title: "Đô thị trung đại châu Âu", html: "<p>Từ thế kỉ XI, thành thị trung đại châu Âu ra đời từ nhu cầu buôn bán, thủ công. Các thành thị Ý như <b>Phi-ren-xơ</b>, <b>Vơ-ni-dơ</b> giàu mạnh, là cái nôi của Văn hoá Phục hưng.</p>" },
    { title: "Đô thị ở Việt Nam", html: "<p>Ví dụ đô thị tiêu biểu:</p>",
      svg: S.table({ title: "Một số đô thị trong lịch sử Việt Nam", head: ["Đô thị", "Đặc điểm"], rows: [["Thăng Long", "Kinh đô từ năm 1010"], ["Vân Đồn", "Thương cảng thời Lý, Trần"], ["Phố Hiến", "Thương cảng TK XVI – XVII"], ["Hội An", "Thương cảng TK XVI – XVII"]], colW: 250 }), caption: "TK: thế kỉ. Phố cổ Hội An là Di sản thế giới (1999)." },
    { title: "Đô thị hoá hiện nay", html: "<p>Theo Liên hợp quốc, năm 2018 khoảng <b>55%</b> dân số thế giới sống ở đô thị, dự báo khoảng 68% vào năm 2050.</p>",
      svg: S.pieChart({ title: "Dân số thế giới năm 2018 (làm tròn)", parts: [{ v: 55, label: "Đô thị: 55%" }, { v: 45, label: "Nông thôn: 45%" }] }), caption: "Nguồn: Liên hợp quốc, World Urbanization Prospects 2018." }
  ],
  summary: "Đô thị xuất hiện từ thời cổ đại (A-ten, Rô-ma) là trung tâm chính trị, kinh tế, văn hoá. Thành thị trung đại châu Âu (từ thế kỉ XI) gắn với buôn bán, thủ công; các thành thị Ý là cái nôi Văn hoá Phục hưng. Ở Việt Nam có Thăng Long, Vân Đồn, Phố Hiến, Hội An. Ngày nay, khoảng 55% dân số thế giới sống ở đô thị (2018) và tỉ lệ này còn tăng.",
  examples: [
    { title: "Tính", problem: "Theo dự báo, tỉ lệ dân đô thị tăng từ 55% (2018) lên 68% (2050), tăng bao nhiêu điểm phần trăm?", solution: "68 − 55 = 13 điểm phần trăm." },
    { title: "Tính", problem: "Thăng Long thành kinh đô năm 1010. Đến năm 2010 là bao nhiêu năm?", solution: "1 000 năm." },
    { title: "Phân tích", problem: "Vì sao đô thị thường ra đời bên sông, biển?", solution: "Thuận lợi giao thông, buôn bán, có nước cho sinh hoạt và sản xuất." }
  ],
  exercises: [
    { question: "Kể tên một thành thị Ý thời trung đại.", hints: ["Cái nôi Phục hưng.", "Phi-ren-xơ hoặc …"], solution: "Phi-ren-xơ (hoặc Vơ-ni-dơ)." },
    { question: "Năm 2018, khoảng bao nhiêu phần trăm dân số thế giới sống ở nông thôn?", hints: ["100% − 55%.", "Ít hơn một nửa."], solution: "Khoảng 45%." },
    { question: "Nêu một vấn đề của đô thị hiện nay.", hints: ["Nghĩ đến giao thông.", "Hoặc môi trường."], solution: "Ùn tắc giao thông, ô nhiễm, thiếu nhà ở." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Thành thị trung đại châu Âu gắn với buôn bán và thủ công.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Thương cảng nổi tiếng ở Quảng Nam thế kỉ XVI – XVII:", options: ["Hội An", "Vân Đồn", "Phố Hiến", "Óc Eo"], answer: 0, explain: "Hội An." },
    { type: 'short', q: "Năm 2018 khoảng 55% dân số thế giới sống ở đô thị. Tỉ lệ ở nông thôn là bao nhiêu phần trăm?", answer: "45", unit: "%", calc: "100-55", explain: "45%." },
    { type: 'mcq', q: "Đô thị cổ đại tiêu biểu ở Hy Lạp:", options: ["A-ten", "Phi-ren-xơ", "Vơ-ni-dơ", "Thăng Long"], answer: 0, explain: "A-ten." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Hiện nay tỉ lệ dân đô thị thế giới đang giảm.", answer: false, explain: "Đang tăng." },
    { type: 'mcq', q: "Thăng Long trở thành kinh đô năm:", options: ["1010", "968", "1428", "1802"], answer: 0, explain: "1010." },
    { type: 'short', q: "Dự báo tỉ lệ dân đô thị năm 2050 là 68%, năm 2018 là 55%. Tăng bao nhiêu điểm phần trăm?", answer: "13", unit: "điểm phần trăm", calc: "68-55", explain: "13." },
    { type: 'mcq', q: "Thương cảng thời Lý, Trần ở Quảng Ninh:", options: ["Vân Đồn", "Hội An", "Phố Hiến", "Sài Gòn"], answer: 0, explain: "Vân Đồn." }
  ]
});
})();
