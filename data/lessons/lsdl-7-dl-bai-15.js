/* LS&ĐL 7 – Địa lí, Bài 15. Đặc điểm dân cư, xã hội, phương thức khai thác tự nhiên bền vững ở Bắc Mỹ. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-7/dl-bai-15', {
  objectives: [
    "Trình bày được đặc điểm dân cư, nguồn gốc người nhập cư.",
    "Phân tích được vấn đề đô thị hoá ở Bắc Mỹ.",
    "Trình bày được phương thức khai thác tự nhiên bền vững."
  ],
  intro: "Năm 1872, Hoa Kỳ lập Vườn quốc gia Y-lô-xtôn – vườn quốc gia đầu tiên trên thế giới. Bảo vệ thiên nhiên đã có truyền thống lâu đời ở Bắc Mỹ.",
  steps: [
    { title: "Dân cư, nhập cư", html: "<p>Dân cư Bắc Mỹ có nguồn gốc đa dạng: người bản địa (Anh-điêng, E-xki-mô), người gốc Âu, gốc Phi, gốc Á và người lai. Đây là kết quả của các luồng nhập cư trong nhiều thế kỉ.</p>" },
    { title: "Đô thị hoá", html: "<p>Tỉ lệ dân thành thị cao, ở Hoa Kỳ và Ca-na-đa trên <b>80%</b>. Các đô thị lớn tập trung ở ven Đại Tây Dương, quanh Hồ Lớn và ven Thái Bình Dương: Niu Oóc, Lốt An-giơ-lét, Si-ca-gô, Tô-rôn-tô.</p>",
      svg: S.pieChart({ title: "Dân thành thị và nông thôn ở Hoa Kỳ (làm tròn)", parts: [{ v: 83, label: "Thành thị: 83%" }, { v: 17, label: "Nông thôn: 17%" }] }), caption: "Số liệu làm tròn, khoảng năm 2023 (Ngân hàng Thế giới)." },
    { title: "Khai thác tự nhiên bền vững", html: "<ul><li><b>Rừng</b>: khai thác có kế hoạch, trồng lại rừng; lập vườn quốc gia.</li><li><b>Đất</b>: luân canh, canh tác bảo tồn, hạn chế xói mòn.</li><li><b>Nước</b>: kiểm soát ô nhiễm, phục hồi Hồ Lớn.</li><li><b>Khoáng sản</b>: tái chế, dùng năng lượng tái tạo.</li></ul>" },
    { title: "Tổng hợp", html: "<p>Sơ đồ:</p>",
      svg: S.mindmap({ center: "Khai thác bền vững ở Bắc Mỹ", branches: [{ title: "Rừng", items: ["Trồng lại rừng", "Vườn quốc gia"] }, { title: "Đất", items: ["Luân canh", "Chống xói mòn"] }, { title: "Nước", items: ["Xử lí ô nhiễm"] }, { title: "Năng lượng", items: ["Gió, Mặt Trời"] }], w: 640, size: 13 }), caption: "Vườn quốc gia Y-lô-xtôn thành lập năm 1872." }
  ],
  summary: "Dân cư Bắc Mỹ đa dạng, phần lớn có nguồn gốc nhập cư (gốc Âu, Phi, Á) cùng người bản địa. Đô thị hoá cao, tỉ lệ dân thành thị ở Hoa Kỳ và Ca-na-đa trên 80%; các đô thị lớn ở ven biển và quanh Hồ Lớn. Bắc Mỹ khai thác tự nhiên bền vững: trồng lại rừng, lập vườn quốc gia (Y-lô-xtôn, 1872), luân canh, xử lí ô nhiễm nước, dùng năng lượng tái tạo.",
  examples: [
    { title: "Tính", problem: "Vườn quốc gia Y-lô-xtôn thành lập năm 1872. Đến năm 2022 là bao nhiêu năm?", solution: "150 năm." },
    { title: "Đọc biểu đồ", problem: "Theo biểu đồ, tỉ lệ dân nông thôn Hoa Kỳ là bao nhiêu?", solution: "17%." },
    { title: "Giải thích", problem: "Vì sao dân cư Bắc Mỹ đa dạng?", solution: "Do nhiều luồng nhập cư từ châu Âu, châu Phi, châu Á trong nhiều thế kỉ." }
  ],
  exercises: [
    { question: "Kể tên hai đô thị lớn ở Bắc Mỹ.", hints: ["Một ở bờ đông Hoa Kỳ.", "…"], solution: "Niu Oóc, Lốt An-giơ-lét." },
    { question: "Vườn quốc gia đầu tiên trên thế giới?", hints: ["Ở Hoa Kỳ, năm 1872.", "Y-…"], solution: "Y-lô-xtôn." },
    { question: "Nêu một cách khai thác rừng bền vững.", hints: ["Sau khi chặt.", "Trồng …"], solution: "Trồng lại rừng sau khai thác." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Dân cư Bắc Mỹ phần lớn có nguồn gốc nhập cư.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Vườn quốc gia đầu tiên thế giới:", options: ["Y-lô-xtôn", "Cúc Phương", "Xê-ren-ghê-ti", "Ba Bể"], answer: 0, explain: "Y-lô-xtôn." },
    { type: 'short', q: "Từ năm 1872 đến năm 2022 là bao nhiêu năm?", answer: "150", unit: "năm", calc: "2022-1872", explain: "150." },
    { type: 'mcq', q: "Đô thị lớn quanh Hồ Lớn:", options: ["Si-ca-gô", "Lốt An-giơ-lét", "Mai-a-mi", "Xan Phran-xi-xcô"], answer: 0, explain: "Si-ca-gô." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Tỉ lệ dân thành thị ở Hoa Kỳ dưới 50%.", answer: false, explain: "Trên 80%." },
    { type: 'mcq', q: "Biện pháp bảo vệ đất:", options: ["Luân canh", "Đốt rừng", "Bỏ hoang", "Chăn thả quá mức"], answer: 0, explain: "Luân canh." },
    { type: 'short', q: "Dân thành thị Hoa Kỳ 83%. Dân nông thôn bao nhiêu %?", answer: "17", unit: "%", calc: "100-83", explain: "17." },
    { type: 'mcq', q: "Người bản địa ở Bắc Mỹ:", options: ["Anh-điêng, E-xki-mô", "Mông Cổ", "Ả Rập", "Ma-ori"], answer: 0, explain: "Anh-điêng, E-xki-mô." }
  ]
});
})();
