/* LS&ĐL 9 – Địa lí, Bài 7. Công nghiệp. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-9/dl-bai-7', {
  objectives: [
    "Phân tích được các nhân tố ảnh hưởng đến sự phát triển và phân bố công nghiệp.",
    "Trình bày được sự phát triển và phân bố một số ngành công nghiệp chủ yếu.",
    "Nêu được vai trò của công nghiệp xanh."
  ],
  intro: "Năm 2024, chỉ số sản xuất công nghiệp nước ta tăng 8,4% – cao nhất kể từ năm 2020 (Tổng cục Thống kê). Những ngành nào đang dẫn dắt tăng trưởng?",
  steps: [
    { title: "Nhân tố ảnh hưởng", html: "<p>Tài nguyên khoáng sản, nguồn năng lượng (than, dầu khí, thuỷ năng), lao động, thị trường, vốn đầu tư, chính sách và kết cấu hạ tầng.</p>" },
    { title: "Các ngành chủ yếu", html: "<p>Tóm tắt:</p>",
      svg: S.table({ title: "Một số ngành công nghiệp", head: ["Ngành", "Phân bố chính"], rows: [["Khai thác than", "Quảng Ninh"], ["Dầu khí", "Thềm lục địa phía Nam"], ["Thuỷ điện", "Sông Đà (Sơn La, Hoà Bình)"], ["Điện tử", "Bắc Ninh, Thái Nguyên, TP HCM"], ["Dệt may, da giày", "Đông Nam Bộ, ĐB sông Hồng"]], colW: 250 }), caption: "Tên tỉnh theo đơn vị hành chính từ năm 2025." },
    { title: "Tăng trưởng năm 2024", html: "<ul><li>Chỉ số sản xuất công nghiệp tăng 8,4%.</li><li>Công nghiệp chế biến, chế tạo tăng 9,83%; sản xuất và phân phối điện tăng 10,05%; khai khoáng giảm 7,24% (Tổng cục Thống kê).</li></ul>",
      svg: S.flowchart({ title: "Hướng phát triển", steps: [{ t: 'start', s: "Khai thác tài nguyên" }, { t: 'proc', s: "Chế biến, chế tạo" }, { t: 'proc', s: "Công nghệ cao" }, { t: 'end', s: "Công nghiệp xanh" }] }), caption: "Chuyển dịch theo hướng giảm khai khoáng, tăng chế biến, chế tạo." },
    { title: "Công nghiệp xanh", html: "<div class=\"box key\">Phát triển năng lượng tái tạo (điện gió, điện mặt trời), sản xuất sạch, tiết kiệm tài nguyên, giảm phát thải – xu hướng tất yếu để phát triển bền vững.</div>" }
  ],
  summary: "Công nghiệp nước ta chịu ảnh hưởng của tài nguyên, lao động, thị trường, vốn, chính sách. Các ngành chủ yếu: khai thác than (Quảng Ninh), dầu khí, điện, điện tử, dệt may. Năm 2024, chỉ số sản xuất công nghiệp tăng 8,4%, chế biến, chế tạo tăng 9,83%, khai khoáng giảm 7,24% (Tổng cục Thống kê). Hướng tới công nghiệp xanh.",
  examples: [
    { title: "Tính", problem: "Chế biến, chế tạo tăng 9,83%, khai khoáng giảm 7,24%. Chênh lệch tốc độ?", solution: "9,83 − (−7,24) = 17,07 điểm phần trăm." },
    { title: "Giải thích", problem: "Vì sao Quảng Ninh là trung tâm than?", solution: "Có bể than đá lớn nhất cả nước." },
    { title: "Nhận xét", problem: "Ý nghĩa của việc khai khoáng giảm, chế biến tăng?", solution: "Cơ cấu chuyển dịch theo hướng hiện đại, tạo giá trị gia tăng cao hơn." }
  ],
  exercises: [
    { question: "Tỉnh khai thác than lớn nhất?", hints: ["Vùng Đông Bắc.", "Quảng …"], solution: "Quảng Ninh." },
    { question: "Chỉ số sản xuất công nghiệp 2024 tăng?", hints: ["Hơn 8%.", "8,…"], solution: "8,4%." },
    { question: "Hai nguồn năng lượng tái tạo?", hints: ["Từ thiên nhiên.", "Gió, …"], solution: "Điện gió, điện mặt trời." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Năm 2024, chỉ số sản xuất công nghiệp nước ta tăng 8,4%.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Tỉnh tập trung khai thác than:", options: ["Quảng Ninh", "Cà Mau", "Lâm Đồng", "Tây Ninh"], answer: 0, explain: "Quảng Ninh." },
    { type: 'short', q: "Chế biến, chế tạo tăng 9,83%, điện tăng 10,05%. Chênh lệch bao nhiêu điểm %?", answer: "0.22", answerText: "0,22", unit: "điểm %", calc: "10.05-9.83", explain: "0,22." },
    { type: 'mcq', q: "Ngành giảm trong năm 2024:", options: ["Khai khoáng", "Chế biến, chế tạo", "Sản xuất điện", "Dệt may"], answer: 0, explain: "Khai khoáng giảm 7,24%." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Dầu khí được khai thác chủ yếu ở vùng núi phía Bắc.", answer: false, explain: "Ở thềm lục địa phía Nam." },
    { type: 'mcq', q: "Nguồn năng lượng tái tạo:", options: ["Điện mặt trời", "Than đá", "Dầu mỏ", "Khí đốt"], answer: 0, explain: "Điện mặt trời." },
    { type: 'short', q: "Thuỷ điện Sơn La 2 400 MW, Lai Châu 1 200 MW. Tổng công suất?", answer: "3600", answerText: "3 600", unit: "MW", calc: "2400+1200", explain: "3 600." },
    { type: 'mcq', q: "Hướng phát triển công nghiệp bền vững:", options: ["Công nghiệp xanh", "Tăng khai thác thô", "Bỏ qua xử lí chất thải", "Dùng nhiều than"], answer: 0, explain: "Công nghiệp xanh." }
  ]
});
})();
