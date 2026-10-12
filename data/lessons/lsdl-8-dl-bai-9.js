/* LS&ĐL 8 – Địa lí, Bài 9. Thổ nhưỡng Việt Nam. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-8/dl-bai-9', {
  objectives: [
    "Trình bày được đặc điểm của ba nhóm đất chính.",
    "Phân tích được đặc điểm và giá trị sử dụng của đất feralit và đất phù sa.",
    "Nêu được vấn đề thoái hoá đất và biện pháp bảo vệ."
  ],
  intro: "Đất đỏ badan ở Tây Nguyên trồng cà phê nổi tiếng thế giới; đất phù sa ở đồng bằng là “nồi cơm” của cả nước.",
  steps: [
    { title: "Ba nhóm đất chính", html: "<p>Tỉ lệ diện tích (gần đúng):</p>",
      svg: S.pieChart({ title: "Các nhóm đất chính ở Việt Nam (gần đúng)", parts: [{ v: 65, label: "Đất feralit: khoảng 65%" }, { v: 24, label: "Đất phù sa: khoảng 24%" }, { v: 11, label: "Đất mùn núi cao: khoảng 11%" }] }), caption: "Tỉ lệ gần đúng, thường dùng trong địa lí Việt Nam." },
    { title: "Đất feralit", html: "<p>Hình thành ở vùng đồi núi thấp, có màu đỏ vàng do chứa nhiều sắt, nhôm; chua, dễ bị xói mòn. Đất feralit trên đá badan (Tây Nguyên, Đông Nam Bộ) rất thích hợp cho cây công nghiệp: cà phê, cao su, hồ tiêu.</p>" },
    { title: "Đất phù sa", html: "<p>Tập trung ở các đồng bằng sông Hồng, sông Cửu Long và ven biển; tơi xốp, giàu dinh dưỡng; thích hợp trồng lúa, hoa màu, cây ăn quả.</p>",
      svg: S.table({ title: "Giá trị sử dụng", head: ["Nhóm đất", "Thích hợp"], rows: [["Feralit", "Cây công nghiệp, rừng"], ["Phù sa", "Lúa, hoa màu, cây ăn quả"], ["Mùn núi cao", "Rừng đầu nguồn"]], colW: 250 }), caption: "Đất mùn núi cao cần được bảo vệ rừng." },
    { title: "Thoái hoá đất", html: "<div class=\"box key\">Nguyên nhân: phá rừng gây xói mòn, canh tác không hợp lí, dùng nhiều hoá chất, xâm nhập mặn. Biện pháp: trồng rừng, ruộng bậc thang, bón phân hữu cơ, cải tạo đất mặn, phèn.</div>" }
  ],
  summary: "Việt Nam có ba nhóm đất chính: feralit (khoảng 65% diện tích, ở đồi núi thấp, thích hợp cây công nghiệp), phù sa (khoảng 24%, ở đồng bằng, thích hợp lúa, hoa màu), mùn núi cao (khoảng 11%). Đất đang bị thoái hoá do xói mòn, canh tác không hợp lí; cần trồng rừng, làm ruộng bậc thang, bón phân hữu cơ, cải tạo đất.",
  examples: [
    { title: "Tính", problem: "Diện tích 331 345 km², đất feralit chiếm 65%. Khoảng bao nhiêu nghìn km²?", solution: "331 345 × 65% ≈ 215 374 ≈ 215 nghìn km²." },
    { title: "Giải thích", problem: "Vì sao đất feralit có màu đỏ vàng?", solution: "Do tích tụ nhiều ô-xít sắt và nhôm." },
    { title: "Xác định", problem: "Cà phê trồng nhiều trên loại đất nào?", solution: "Đất feralit trên đá badan (đất đỏ badan)." }
  ],
  exercises: [
    { question: "Nhóm đất chiếm diện tích lớn nhất?", hints: ["Ở đồi núi thấp.", "Fe-…"], solution: "Đất feralit." },
    { question: "Đất phù sa thích hợp trồng cây gì?", hints: ["Cây lương thực chính.", "L…"], solution: "Lúa (và hoa màu, cây ăn quả)." },
    { question: "Feralit 65%, phù sa 24%. Mùn núi cao chiếm bao nhiêu %?", hints: ["100 − 65 − 24.", "…"], solution: "11%." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Đất feralit chiếm diện tích lớn nhất nước ta.", answer: true, explain: "Đúng, khoảng 65%." },
    { type: 'mcq', q: "Đất thích hợp nhất cho cây lúa:", options: ["Phù sa", "Feralit", "Mùn núi cao", "Cát"], answer: 0, explain: "Phù sa." },
    { type: 'short', q: "Feralit 65%, phù sa 24%. Mùn núi cao chiếm bao nhiêu %?", answer: "11", unit: "%", calc: "100-65-24", explain: "11." },
    { type: 'mcq', q: "Đất đỏ badan tập trung ở:", options: ["Tây Nguyên", "Đồng bằng sông Hồng", "Ven biển miền Trung", "Đồng bằng sông Cửu Long"], answer: 0, explain: "Tây Nguyên." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Phá rừng không ảnh hưởng đến đất.", answer: false, explain: "Gây xói mòn." },
    { type: 'mcq', q: "Biện pháp chống xói mòn ở vùng đồi núi:", options: ["Làm ruộng bậc thang", "Đốt nương", "Chặt rừng", "Bỏ hoang"], answer: 0, explain: "Ruộng bậc thang." },
    { type: 'short', q: "Diện tích 331 345 km², đồng bằng phù sa chiếm khoảng 24%. Làm tròn: 330 000 × 24% = ? (km²)", answer: "79200", answerText: "79 200", unit: "km²", calc: "330000*24/100", explain: "79 200." },
    { type: 'mcq', q: "Màu đỏ vàng của đất feralit do:", options: ["Sắt và nhôm", "Muối", "Than bùn", "Cát trắng"], answer: 0, explain: "Sắt, nhôm." }
  ]
});
})();
