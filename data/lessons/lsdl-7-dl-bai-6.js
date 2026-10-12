/* LS&ĐL 7 – Địa lí, Bài 6. Đặc điểm dân cư, xã hội châu Á. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-7/dl-bai-6', {
  objectives: [
    "Trình bày được đặc điểm dân cư, tôn giáo châu Á.",
    "Trình bày được sự phân bố dân cư và các đô thị lớn.",
    "Biết cách đọc bảng số liệu, biểu đồ về dân số."
  ],
  intro: "Cứ khoảng 10 người trên Trái Đất thì có 6 người sống ở châu Á. Châu Á cũng là quê hương của nhiều tôn giáo lớn.",
  steps: [
    { title: "Quy mô dân số", html: "<p>Năm 2023, châu Á có khoảng <b>4,75 tỉ người</b>, chiếm gần <b>60%</b> dân số thế giới (số liệu làm tròn theo Liên hợp quốc). Hai nước đông dân nhất thế giới là Ấn Độ và Trung Quốc (mỗi nước hơn 1,4 tỉ người).</p>",
      svg: S.pieChart({ title: "Tỉ lệ dân số châu Á trong thế giới (làm tròn)", parts: [{ v: 59, label: "Châu Á: 59%" }, { v: 41, label: "Các châu lục khác: 41%" }] }), caption: "Số liệu làm tròn, năm 2023." },
    { title: "Thành phần dân cư, tôn giáo", html: "<p>Dân cư thuộc nhiều chủng tộc, chủ yếu là Môn-gô-lô-it và Ơ-rô-pê-ô-it. Châu Á là nơi ra đời của nhiều tôn giáo lớn:</p>",
      svg: S.table({ title: "Nơi ra đời của các tôn giáo lớn", head: ["Tôn giáo", "Nơi ra đời"], rows: [["Ấn Độ giáo", "Ấn Độ"], ["Phật giáo", "Ấn Độ"], ["Ki-tô giáo", "Tây Á (Pa-le-xtin)"], ["Hồi giáo", "Tây Á (A-rập Xê-út)"]], colW: 250 }), caption: "Các tôn giáo lan toả ra nhiều nơi trên thế giới." },
    { title: "Phân bố dân cư", html: "<p>Dân cư phân bố không đều: tập trung đông ở các đồng bằng, ven biển Đông Á, Đông Nam Á, Nam Á; thưa thớt ở vùng núi cao, hoang mạc, vùng lạnh Bắc Á.</p>" },
    { title: "Đô thị", html: "<p>Nhiều đô thị rất lớn: Tô-ki-ô, Thượng Hải, Niu Đê-li, Mum-bai, Gia-các-ta, Băng Cốc. Tốc độ đô thị hoá nhanh.</p>" }
  ],
  summary: "Châu Á có khoảng 4,75 tỉ dân (2023), gần 60% dân số thế giới; Ấn Độ và Trung Quốc đông dân nhất. Dân cư gồm nhiều chủng tộc; châu Á là nơi ra đời của Ấn Độ giáo, Phật giáo, Ki-tô giáo, Hồi giáo. Dân cư tập trung ở đồng bằng, ven biển; thưa ở núi cao, hoang mạc. Có nhiều đô thị lớn, đô thị hoá nhanh.",
  examples: [
    { title: "Tính", problem: "Dân số thế giới khoảng 8 tỉ, châu Á chiếm khoảng 59%. Châu Á có khoảng bao nhiêu tỉ người?", solution: "8 × 59% ≈ 4,72 tỉ người." },
    { title: "Giải thích", problem: "Vì sao dân cư tập trung ở đồng bằng ven biển?", solution: "Đất bằng, màu mỡ, khí hậu thuận lợi, giao thông dễ dàng." },
    { title: "Phân loại", problem: "Phật giáo ra đời ở đâu?", solution: "Ấn Độ." }
  ],
  exercises: [
    { question: "Hai nước đông dân nhất châu Á?", hints: ["Đều hơn 1,4 tỉ người.", "Ở Nam Á và Đông Á."], solution: "Ấn Độ và Trung Quốc." },
    { question: "Hồi giáo ra đời ở khu vực nào?", hints: ["Khu vực giàu dầu mỏ.", "Tây …"], solution: "Tây Á (A-rập Xê-út)." },
    { question: "Kể tên hai đô thị lớn ở châu Á.", hints: ["Thủ đô Nhật Bản.", "…"], solution: "Tô-ki-ô, Thượng Hải." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Châu Á là châu lục đông dân nhất thế giới.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Tôn giáo ra đời ở Ấn Độ:", options: ["Phật giáo", "Hồi giáo", "Ki-tô giáo", "Do Thái giáo"], answer: 0, explain: "Phật giáo (và Ấn Độ giáo)." },
    { type: 'short', q: "Châu Á chiếm 59% dân số thế giới. Các châu lục khác chiếm bao nhiêu %?", answer: "41", unit: "%", calc: "100-59", explain: "41%." },
    { type: 'mcq', q: "Nơi dân cư châu Á thưa thớt:", options: ["Hoang mạc, núi cao", "Đồng bằng sông Hằng", "Ven biển Đông Á", "Đồng bằng Hoa Bắc"], answer: 0, explain: "Hoang mạc, núi cao." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Dân cư châu Á phân bố đều khắp lãnh thổ.", answer: false, explain: "Không đều." },
    { type: 'mcq', q: "Đô thị nào thuộc châu Á?", options: ["Mum-bai", "Pa-ri", "Lu-an-đa", "Li-ma"], answer: 0, explain: "Mum-bai (Ấn Độ)." },
    { type: 'short', q: "Dân số thế giới khoảng 8 tỉ, châu Á chiếm 60% (làm tròn). Châu Á khoảng bao nhiêu tỉ người?", answer: "4.8", answerText: "4,8", unit: "tỉ người", calc: "8*60/100", explain: "4,8." },
    { type: 'mcq', q: "Chủng tộc chủ yếu ở châu Á:", options: ["Môn-gô-lô-it", "Nê-grô-it", "Ô-xtra-lô-it", "Không có"], answer: 0, explain: "Môn-gô-lô-it." }
  ]
});
})();
