/* LS&ĐL 9 – Địa lí, Bài 2. Phân bố dân cư và các loại hình quần cư. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-9/dl-bai-2', {
  objectives: [
    "Trình bày được đặc điểm phân bố dân cư Việt Nam.",
    "Phân biệt được quần cư thành thị và quần cư nông thôn.",
    "Nêu được đặc điểm đô thị hoá ở nước ta."
  ],
  intro: "Mật độ dân số Việt Nam năm 2024 là 305 người/km² – thứ ba Đông Nam Á, sau Xin-ga-po và Phi-líp-pin. Nhưng dân cư có phân bố đều không?",
  steps: [
    { title: "Mật độ dân số", html: "<p>Theo Điều tra dân số giữa kì 2024 (Tổng cục Thống kê), mật độ dân số nước ta là <b>305 người/km²</b>, tăng 15 người/km² so với năm 2019.</p>" },
    { title: "Phân bố không đều", html: "<ul><li>Đông ở đồng bằng, ven biển, đô thị; thưa ở miền núi.</li><li>Đồng bằng sông Hồng có mật độ cao nhất; Tây Nguyên, Trung du và miền núi phía Bắc thấp.</li><li>Năm 2024, khoảng 61,5% dân số sống ở nông thôn.</li></ul>",
      svg: S.pieChart({ title: "Dân số thành thị và nông thôn năm 2024 (%)", parts: [{ v: 38.5, label: "Thành thị 38,5" }, { v: 61.5, label: "Nông thôn 61,5" }] }), caption: "Nguồn: Tổng cục Thống kê. Dân số trung bình năm 2024." },
    { title: "Hai loại hình quần cư", html: "<p>So sánh:</p>",
      svg: S.table({ title: "Quần cư nông thôn và thành thị", head: ["Nông thôn", "Thành thị"], rows: [["Làng, bản, phum, sóc", "Phố phường, khu đô thị"], ["Mật độ thấp", "Mật độ cao"], ["Chủ yếu nông nghiệp", "Công nghiệp, dịch vụ"]], colW: 250 }), caption: "Ranh giới hai loại hình ngày càng gần nhau." },
    { title: "Đô thị hoá", html: "<div class=\"box key\">Tỉ lệ dân thành thị tăng nhanh (giai đoạn 2019 – 2024 dân số thành thị tăng bình quân 3,06%/năm); đô thị mở rộng nhưng còn áp lực về nhà ở, giao thông, môi trường.</div>" }
  ],
  summary: "Mật độ dân số nước ta năm 2024 là 305 người/km² (Tổng cục Thống kê), phân bố không đều: đông ở đồng bằng, ven biển, thưa ở miền núi; 61,5% dân số sống ở nông thôn. Có hai loại hình quần cư: nông thôn và thành thị. Đô thị hoá diễn ra nhanh, dân số thành thị giai đoạn 2019 – 2024 tăng 3,06%/năm.",
  examples: [
    { title: "Tính", problem: "Mật độ 2024 là 305 người/km², tăng 15 so với 2019. Mật độ 2019?", solution: "305 − 15 = 290 người/km²." },
    { title: "Giải thích", problem: "Vì sao đồng bằng đông dân?", solution: "Địa hình bằng phẳng, đất phù sa, nước ngọt, giao thông thuận lợi, lịch sử khai thác lâu đời." },
    { title: "Nhận xét", problem: "Hệ quả của đô thị hoá nhanh?", solution: "Tăng việc làm, dịch vụ nhưng gây ách tắc, ô nhiễm, thiếu nhà ở." }
  ],
  exercises: [
    { question: "Mật độ dân số năm 2024?", hints: ["Trên 300.", "30…"], solution: "305 người/km²." },
    { question: "Vùng có mật độ cao nhất?", hints: ["Một châu thổ phía Bắc.", "Đồng bằng …"], solution: "Đồng bằng sông Hồng." },
    { question: "Tỉ lệ dân nông thôn 2024?", hints: ["Hơn một nửa.", "61,…"], solution: "61,5%." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Dân cư nước ta phân bố không đều giữa đồng bằng và miền núi.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Mật độ dân số Việt Nam năm 2024:", options: ["305 người/km²", "100 người/km²", "1 000 người/km²", "50 người/km²"], answer: 0, explain: "305 người/km²." },
    { type: 'short', q: "Mật độ năm 2024 là 305, năm 2019 là 290 người/km². Tăng bao nhiêu?", answer: "15", unit: "người/km²", calc: "305-290", explain: "15." },
    { type: 'mcq', q: "Hoạt động kinh tế chủ yếu ở quần cư nông thôn:", options: ["Nông nghiệp", "Tài chính", "Công nghiệp công nghệ cao", "Hàng không"], answer: 0, explain: "Nông nghiệp." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Tỉ lệ dân thành thị nước ta đang giảm dần.", answer: false, explain: "Đang tăng nhanh." },
    { type: 'mcq', q: "Nước có mật độ dân số cao nhất Đông Nam Á:", options: ["Xin-ga-po", "Việt Nam", "Lào", "Phi-líp-pin"], answer: 0, explain: "Xin-ga-po." },
    { type: 'short', q: "Dân số 101,3 triệu, diện tích khoảng 331 345 km². Mật độ (người/km², làm tròn đến đơn vị)?", answer: "306", unit: "người/km²", calc: "Math.round(101300000/331345)", explain: "306 (theo dân số trung bình; số liệu điều tra 1/4/2024 là 305)." },
    { type: 'mcq', q: "Loại hình quần cư có mật độ cao, chủ yếu công nghiệp, dịch vụ:", options: ["Thành thị", "Nông thôn", "Bản làng", "Phum sóc"], answer: 0, explain: "Thành thị." }
  ]
});
})();
