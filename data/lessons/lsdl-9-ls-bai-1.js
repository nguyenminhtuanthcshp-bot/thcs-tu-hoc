/* LS&ĐL 9 – Lịch sử, Bài 1. Nước Nga và Liên Xô từ năm 1918 đến năm 1945. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-9/ls-bai-1', {
  objectives: [
    "Nêu được những nét chính về nước Nga trước khi Liên Xô thành lập.",
    "Trình bày được sự thành lập Liên Xô (30/12/1922).",
    "Nêu được thành tựu và hạn chế của công cuộc xây dựng chủ nghĩa xã hội ở Liên Xô (1922 – 1941)."
  ],
  intro: "Chỉ hơn mười năm sau nội chiến, Liên Xô đã trở thành một cường quốc công nghiệp. Con đường ấy diễn ra như thế nào?",
  steps: [
    { title: "Nước Nga 1918 – 1921", html: "<p>Sau Cách mạng tháng Mười (1917), nước Nga Xô viết phải chống thù trong giặc ngoài. Chính quyền thực hiện <b>Chính sách cộng sản thời chiến</b> để dồn sức cho chiến thắng.</p>",
      svg: S.timeline({ title: "Nước Nga Xô viết", items: [{ y: "1918 – 1920", s: "Nội chiến, can thiệp" }, { y: "3/1921", s: "Chính sách kinh tế mới" }, { y: "30/12/1922", s: "Liên Xô thành lập" }] }), caption: "Chính sách kinh tế mới (NEP) được thông qua tháng 3/1921." },
    { title: "Chính sách kinh tế mới", html: "<ul><li>Thay trưng thu lương thực thừa bằng <b>thuế lương thực</b>.</li><li>Cho phép tự do buôn bán, mở lại chợ; cho tư nhân thuê nhỏ xí nghiệp.</li><li>Khuyến khích tư bản nước ngoài đầu tư.</li></ul><p>Nhờ NEP, kinh tế được phục hồi nhanh.</p>" },
    { title: "Liên Xô thành lập", html: "<p>Ngày <b>30/12/1922</b>, Liên bang Cộng hoà xã hội chủ nghĩa Xô viết (Liên Xô) ra đời, ban đầu gồm 4 nước cộng hoà: Nga, U-crai-na, Bê-lô-rút-xi-a và Ngoại Cáp-ca-dơ.</p>",
      svg: S.mindmap({ center: "Liên Xô 1922 – 1941", branches: [{ title: "Công nghiệp hoá", items: ["Kế hoạch 5 năm", "Ưu tiên công nghiệp nặng"] }, { title: "Tập thể hoá", items: ["Nông trang tập thể"] }, { title: "Văn hoá", items: ["Xoá nạn mù chữ"] }, { title: "Hạn chế", items: ["Nóng vội", "Vi phạm dân chủ"] }], w: 640, size: 13 }), caption: "Thành tựu và hạn chế." },
    { title: "Thành tựu và hạn chế", html: "<div class=\"box key\">Qua các kế hoạch 5 năm (từ 1928), Liên Xô từ nước nông nghiệp trở thành cường quốc công nghiệp; văn hoá, giáo dục phát triển. Tuy vậy, quá trình xây dựng có biểu hiện nóng vội, thiếu dân chủ, cưỡng bức trong tập thể hoá.</div>" }
  ],
  summary: "Sau nội chiến (1918 – 1920), nước Nga thực hiện Chính sách kinh tế mới (3/1921) để phục hồi kinh tế. Ngày 30/12/1922, Liên Xô thành lập. Từ 1928, Liên Xô thực hiện các kế hoạch 5 năm, công nghiệp hoá và tập thể hoá nông nghiệp, trở thành cường quốc công nghiệp, song cũng mắc sai lầm: nóng vội, thiếu dân chủ.",
  examples: [
    { title: "Tính", problem: "Từ Cách mạng tháng Mười (1917) đến khi Liên Xô thành lập (1922) là bao nhiêu năm?", solution: "1922 − 1917 = 5 năm." },
    { title: "So sánh", problem: "Điểm khác căn bản giữa Chính sách cộng sản thời chiến và NEP về lương thực?", solution: "Cộng sản thời chiến trưng thu lương thực thừa; NEP thay bằng thuế lương thực, nông dân được bán phần còn lại." },
    { title: "Đánh giá", problem: "Vì sao nói NEP là bước chuyển hợp lí?", solution: "Nó phù hợp với nền kinh tế bị tàn phá, khôi phục sản xuất và khối liên minh công – nông." }
  ],
  exercises: [
    { question: "Liên Xô thành lập ngày nào?", hints: ["Cuối năm 1922.", "Ngày 30/…"], solution: "30/12/1922." },
    { question: "NEP thông qua năm nào?", hints: ["Sau nội chiến.", "Đầu thập niên 1920."], solution: "Tháng 3/1921." },
    { question: "Ban đầu Liên Xô gồm mấy nước cộng hoà?", hints: ["Có Nga, U-crai-na…", "Một số nhỏ hơn 5."], solution: "4 nước cộng hoà." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Liên Xô được thành lập ngày 30/12/1922.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Chính sách thay trưng thu lương thực bằng thuế lương thực:", options: ["Chính sách kinh tế mới", "Cộng sản thời chiến", "Kế hoạch Mác-san", "Chính sách mới của Ru-dơ-ven"], answer: 0, explain: "NEP." },
    { type: 'short', q: "Từ 1921 (NEP) đến 1928 (kế hoạch 5 năm đầu) là bao nhiêu năm?", answer: "7", unit: "năm", calc: "1928-1921", explain: "7." },
    { type: 'mcq', q: "Ưu tiên hàng đầu của công nghiệp hoá ở Liên Xô:", options: ["Công nghiệp nặng", "Công nghiệp nhẹ", "Thương mại", "Du lịch"], answer: 0, explain: "Công nghiệp nặng." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Công cuộc xây dựng ở Liên Xô không có hạn chế nào.", answer: false, explain: "Có biểu hiện nóng vội, thiếu dân chủ." },
    { type: 'mcq', q: "Nông nghiệp Liên Xô được tổ chức lại theo hướng:", options: ["Tập thể hoá", "Tư nhân hoá", "Đồn điền", "Lãnh địa"], answer: 0, explain: "Tập thể hoá." },
    { type: 'short', q: "Từ 1922 đến 1941 là bao nhiêu năm?", answer: "19", unit: "năm", calc: "1941-1922", explain: "19." },
    { type: 'mcq', q: "Nội chiến ở nước Nga diễn ra trong khoảng:", options: ["1918 – 1920", "1914 – 1918", "1929 – 1933", "1939 – 1945"], answer: 0, explain: "1918 – 1920." }
  ]
});
})();
