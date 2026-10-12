/* LS&ĐL 9 – Địa lí, Bài 4. Nông nghiệp. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-9/dl-bai-4', {
  objectives: [
    "Phân tích được các nhân tố ảnh hưởng đến sự phát triển và phân bố nông nghiệp.",
    "Trình bày được sự phát triển và phân bố trồng trọt, chăn nuôi.",
    "Nêu được ý nghĩa của nông nghiệp xanh, nông nghiệp công nghệ cao."
  ],
  intro: "Năm 2024, nước ta thu hoạch khoảng 43,46 triệu tấn lúa (Tổng cục Thống kê) và là một trong những nước xuất khẩu gạo hàng đầu thế giới. Điều gì giúp nông nghiệp đạt kết quả đó?",
  steps: [
    { title: "Nhân tố ảnh hưởng", html: "<p>Tự nhiên: đất (phù sa, feralit), khí hậu nhiệt đới ẩm gió mùa, nguồn nước dồi dào. Kinh tế – xã hội: lao động có kinh nghiệm, chính sách, thị trường, khoa học – công nghệ.</p>",
      svg: S.mindmap({ center: "Nhân tố phát triển nông nghiệp", branches: [{ title: "Tự nhiên", items: ["Đất", "Khí hậu", "Nước"] }, { title: "Kinh tế – xã hội", items: ["Lao động", "Chính sách", "Thị trường", "Công nghệ"] }], w: 640, size: 13 }), caption: "Các nhóm nhân tố." },
    { title: "Trồng trọt", html: "<p>Cây lúa là cây trồng chính. Năm 2024: diện tích lúa khoảng 7,13 triệu ha, năng suất 60,9 tạ/ha, sản lượng 43,46 triệu tấn.</p>",
      svg: S.table({ title: "Sản xuất lúa năm 2024", head: ["Chỉ tiêu", "Giá trị"], rows: [["Diện tích", "7,13 triệu ha"], ["Năng suất", "60,9 tạ/ha"], ["Sản lượng", "43,46 triệu tấn"], ["ĐBSCL", "khoảng 24,14 triệu tấn"]], colW: 250 }), caption: "Nguồn: Tổng cục Thống kê, số liệu năm 2024. Số liệu ĐBSCL theo Bộ Nông nghiệp (công bố đầu năm 2025)." },
    { title: "Cây công nghiệp và chăn nuôi", html: "<ul><li>Cây công nghiệp lâu năm: cà phê, cao su, hồ tiêu, điều (Tây Nguyên, Đông Nam Bộ); chè (Trung du và miền núi phía Bắc).</li><li>Chăn nuôi lợn, gia cầm phát triển theo hướng trang trại, công nghiệp.</li></ul>" },
    { title: "Hướng phát triển", html: "<div class=\"box key\">Phát triển nông nghiệp xanh, hữu cơ, ứng dụng công nghệ cao; xây dựng thương hiệu nông sản; thích ứng với biến đổi khí hậu.</div>" }
  ],
  summary: "Nông nghiệp nước ta phát triển nhờ điều kiện tự nhiên thuận lợi và các nhân tố kinh tế – xã hội. Năm 2024, diện tích lúa khoảng 7,13 triệu ha, sản lượng 43,46 triệu tấn (Tổng cục Thống kê), Đồng bằng sông Cửu Long chiếm hơn một nửa. Cây công nghiệp tập trung ở Tây Nguyên, Đông Nam Bộ; chăn nuôi theo hướng công nghiệp. Hướng tới nông nghiệp xanh, công nghệ cao.",
  examples: [
    { title: "Tính", problem: "ĐBSCL 24,14 triệu tấn, cả nước 43,46 triệu tấn. Chiếm khoảng bao nhiêu %?", solution: "24,14 : 43,46 × 100 ≈ 55,5%." },
    { title: "Tính", problem: "Năng suất 60,9 tạ/ha bằng bao nhiêu tấn/ha?", solution: "6,09 tấn/ha (1 tấn = 10 tạ)." },
    { title: "Giải thích", problem: "Vì sao Tây Nguyên trồng nhiều cà phê?", solution: "Đất badan màu mỡ, khí hậu cận xích đạo có mùa khô thuận lợi phơi sấy." }
  ],
  exercises: [
    { question: "Sản lượng lúa năm 2024?", hints: ["Hơn 43 triệu tấn.", "43,…"], solution: "43,46 triệu tấn." },
    { question: "Vùng trồng chè lớn nhất?", hints: ["Vùng núi phía Bắc.", "Trung du …"], solution: "Trung du và miền núi phía Bắc." },
    { question: "Đất thích hợp trồng lúa nhất?", hints: ["Ở đồng bằng.", "Đất phù …"], solution: "Đất phù sa." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Đồng bằng sông Cửu Long là vùng sản xuất lúa lớn nhất nước ta.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Sản lượng lúa cả nước năm 2024 (Tổng cục Thống kê):", options: ["43,46 triệu tấn", "10 triệu tấn", "60,9 triệu tấn", "100 triệu tấn"], answer: 0, explain: "43,46 triệu tấn." },
    { type: 'short', q: "Năng suất lúa 60,9 tạ/ha. Đổi ra tấn/ha.", answer: "6.09", answerText: "6,09", unit: "tấn/ha", calc: "60.9/10", explain: "6,09." },
    { type: 'mcq', q: "Vùng trồng cà phê lớn nhất:", options: ["Tây Nguyên", "Đồng bằng sông Hồng", "Bắc Trung Bộ", "Đồng bằng sông Cửu Long"], answer: 0, explain: "Tây Nguyên." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Chè được trồng chủ yếu ở Đồng bằng sông Cửu Long.", answer: false, explain: "Chủ yếu ở Trung du và miền núi phía Bắc." },
    { type: 'mcq', q: "Nhân tố kinh tế – xã hội ảnh hưởng đến nông nghiệp:", options: ["Thị trường", "Đất", "Khí hậu", "Nguồn nước"], answer: 0, explain: "Thị trường." },
    { type: 'short', q: "Sản lượng lúa ĐBSCL 24,14 triệu tấn, cả nước 43,46 triệu tấn. Các vùng còn lại bao nhiêu triệu tấn?", answer: "19.32", answerText: "19,32", unit: "triệu tấn", calc: "43.46-24.14", explain: "19,32." },
    { type: 'mcq', q: "Hướng phát triển nông nghiệp bền vững:", options: ["Nông nghiệp xanh, công nghệ cao", "Tăng phân bón hoá học tối đa", "Phá rừng mở rộng đất", "Bỏ hoang đất"], answer: 0, explain: "Nông nghiệp xanh." }
  ]
});
})();
