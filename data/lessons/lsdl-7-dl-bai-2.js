/* LS&ĐL 7 – Địa lí, Bài 2. Đặc điểm dân cư, xã hội châu Âu. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-7/dl-bai-2', {
  objectives: [
    "Trình bày được đặc điểm cơ cấu dân cư châu Âu.",
    "Nêu được đặc điểm di cư.",
    "Trình bày được đặc điểm đô thị hoá ở châu Âu."
  ],
  intro: "Ở nhiều nước châu Âu, số người trên 65 tuổi đã nhiều hơn số trẻ em dưới 15 tuổi. Điều đó đặt ra những thách thức gì?",
  steps: [
    { title: "Quy mô và cơ cấu dân số", html: "<p>Năm 2023, châu Âu có khoảng <b>740 triệu người</b> (số liệu làm tròn theo Liên hợp quốc). Dân số tăng rất chậm, nhiều nước giảm; tỉ lệ người cao tuổi cao – <b>dân số già</b>.</p>",
      svg: S.pieChart({ title: "Cơ cấu dân số theo nhóm tuổi (minh hoạ)", parts: [{ v: 16, label: "0 – 14 tuổi: 16%" }, { v: 64, label: "15 – 64 tuổi: 64%" }, { v: 20, label: "65 tuổi trở lên: 20%" }] }), caption: "Số liệu làm tròn, chỉ để minh hoạ xu hướng dân số già." },
    { title: "Di cư", html: "<p>Châu Âu là nơi nhập cư lớn: người lao động, du học sinh, người tị nạn từ nhiều châu lục. Trong nội bộ, người dân di chuyển giữa các nước để làm việc, học tập.</p>" },
    { title: "Đô thị hoá", html: "<p>Châu Âu có mức đô thị hoá cao: khoảng <b>3/4</b> dân số sống ở thành thị. Nhiều đô thị lớn: Luân Đôn, Pa-ri, Mát-xcơ-va. Xu hướng mở rộng đô thị ra vùng ngoại ô.</p>" },
    { title: "Thách thức", html: "<p>Hệ quả của dân số già:</p>",
      svg: S.mindmap({ center: "Dân số già", branches: [{ title: "Lao động", items: ["Thiếu lao động", "Cần nhập cư"] }, { title: "Xã hội", items: ["Chi phí y tế tăng", "Lương hưu tăng"] }, { title: "Giải pháp", items: ["Khuyến khích sinh con", "Tăng tuổi nghỉ hưu"] }], w: 640, size: 13 }), caption: "Mỗi nước có chính sách riêng." }
  ],
  summary: "Châu Âu có khoảng 740 triệu dân (2023), dân số tăng chậm, cơ cấu dân số già. Châu Âu là nơi nhập cư lớn, đồng thời có di cư nội bộ. Mức đô thị hoá cao, khoảng 3/4 dân số sống ở thành thị. Dân số già gây thiếu lao động, tăng chi phí phúc lợi.",
  examples: [
    { title: "Tính", problem: "Nếu 3/4 dân số châu Âu (740 triệu) sống ở thành thị, đó là bao nhiêu triệu người?", solution: "740 × 3/4 = 555 triệu người." },
    { title: "Đọc biểu đồ", problem: "Ở biểu đồ minh hoạ, nhóm 65 tuổi trở lên nhiều hơn nhóm 0 – 14 tuổi bao nhiêu điểm %?", solution: "20 − 16 = 4 điểm %." },
    { title: "Giải thích", problem: "Vì sao châu Âu thu hút người nhập cư?", solution: "Kinh tế phát triển, thu nhập cao, thiếu lao động do dân số già." }
  ],
  exercises: [
    { question: "Châu Âu có cơ cấu dân số trẻ hay già?", hints: ["Nhiều người cao tuổi.", "Tỉ lệ sinh thấp."], solution: "Dân số già." },
    { question: "Kể tên hai đô thị lớn ở châu Âu.", hints: ["Thủ đô nước Anh, nước Pháp.", "…"], solution: "Luân Đôn, Pa-ri." },
    { question: "Nêu một hệ quả của dân số già.", hints: ["Lao động.", "Chi phí."], solution: "Thiếu lao động; chi phí y tế, lương hưu tăng." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Châu Âu có cơ cấu dân số già.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Khoảng bao nhiêu dân số châu Âu sống ở thành thị?", options: ["3/4", "1/4", "1/2", "1/10"], answer: 0, explain: "Khoảng 3/4." },
    { type: 'short', q: "Châu Âu có 740 triệu dân, 3/4 sống ở thành thị. Số dân thành thị là bao nhiêu triệu người?", answer: "555", unit: "triệu người", calc: "740*3/4", explain: "555." },
    { type: 'mcq', q: "Đô thị nào thuộc châu Âu?", options: ["Pa-ri", "Tô-ki-ô", "Cai-rô", "Niu Oóc"], answer: 0, explain: "Pa-ri." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Dân số châu Âu đang tăng rất nhanh.", answer: false, explain: "Tăng rất chậm, nhiều nước giảm." },
    { type: 'mcq', q: "Hệ quả của dân số già:", options: ["Thiếu lao động", "Thừa lao động trẻ", "Thiếu trường mầm non", "Tăng tỉ lệ sinh"], answer: 0, explain: "Thiếu lao động." },
    { type: 'short', q: "Cơ cấu minh hoạ: 0 – 14 tuổi 16%, 65 tuổi trở lên 20%. Nhóm 15 – 64 tuổi chiếm bao nhiêu %?", answer: "64", unit: "%", calc: "100-16-20", explain: "64%." },
    { type: 'mcq', q: "Châu Âu là nơi:", options: ["Nhập cư lớn", "Không có di cư", "Chỉ xuất cư", "Dân số trẻ nhất"], answer: 0, explain: "Nhập cư lớn." }
  ]
});
})();
