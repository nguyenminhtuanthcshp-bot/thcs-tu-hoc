/* LS&ĐL 9 – Địa lí, Bài 1. Dân tộc và dân số. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-9/dl-bai-1', {
  objectives: [
    "Trình bày được đặc điểm thành phần dân tộc ở Việt Nam.",
    "Phân tích được sự thay đổi quy mô, gia tăng và cơ cấu dân số.",
    "Đọc và nhận xét được bảng số liệu, biểu đồ về dân số."
  ],
  intro: "Năm 2024, dân số trung bình của Việt Nam khoảng 101,3 triệu người (Tổng cục Thống kê) – đông thứ ba Đông Nam Á. Dân số đông mang lại thuận lợi và thách thức gì?",
  steps: [
    { title: "Thành phần dân tộc", html: "<p>Việt Nam có <b>54 dân tộc</b>. Theo Tổng điều tra dân số năm 2019, người Kinh chiếm 85,3%, 53 dân tộc thiểu số chiếm 14,7%.</p>",
      svg: S.pieChart({ title: "Cơ cấu dân tộc năm 2019 (%)", parts: [{ v: 85.3, label: "Kinh 85,3" }, { v: 14.7, label: "53 dân tộc thiểu số 14,7" }] }), caption: "Nguồn: Tổng điều tra dân số và nhà ở năm 2019, Tổng cục Thống kê." },
    { title: "Phân bố các dân tộc", html: "<p>Người Kinh sống khắp cả nước, đông ở đồng bằng, ven biển; các dân tộc thiểu số sống chủ yếu ở miền núi, trung du. Ngày nay sự phân bố có nhiều thay đổi do di cư, phát triển kinh tế.</p>" },
    { title: "Quy mô và gia tăng dân số", html: "<p>Năm 2024: dân số trung bình 101,3 triệu người, tỉ lệ tăng 1,03%; tuổi thọ trung bình 74,7 năm (Tổng cục Thống kê).</p>",
      svg: S.table({ title: "Một số chỉ tiêu dân số năm 2024", head: ["Chỉ tiêu", "Giá trị"], rows: [["Dân số trung bình", "101,3 triệu người"], ["Tỉ lệ tăng dân số", "1,03%"], ["Tỉ lệ dân thành thị", "38,5%"], ["Tuổi thọ trung bình", "74,7 năm"], ["Tỉ số giới tính khi sinh", "111,4 nam/100 nữ"]], colW: 250 }), caption: "Nguồn: Tổng cục Thống kê." },
    { title: "Cơ cấu dân số", html: "<div class=\"box key\">Việt Nam đang trong thời kì <b>cơ cấu dân số vàng</b> (người trong độ tuổi lao động đông), đồng thời dân số đang già hoá. Tỉ số giới tính khi sinh còn cao (111,4) là vấn đề cần quan tâm.</div>" }
  ],
  summary: "Việt Nam có 54 dân tộc, người Kinh chiếm 85,3% (2019). Năm 2024, dân số trung bình khoảng 101,3 triệu người, tỉ lệ tăng 1,03%, dân thành thị 38,5%, tuổi thọ trung bình 74,7 năm (Tổng cục Thống kê). Nước ta đang trong thời kì cơ cấu dân số vàng nhưng dân số già hoá và tỉ số giới tính khi sinh còn cao.",
  examples: [
    { title: "Tính", problem: "Dân số 101,3 triệu, dân thành thị 38,5%. Dân thành thị khoảng bao nhiêu triệu người?", solution: "101,3 × 0,385 ≈ 39 triệu người (khớp số liệu 39 triệu của Tổng cục Thống kê)." },
    { title: "Nhận xét", problem: "Ý nghĩa của cơ cấu dân số vàng?", solution: "Nguồn lao động dồi dào – cơ hội tăng trưởng nếu tạo đủ việc làm và nâng chất lượng lao động." },
    { title: "Giải thích", problem: "Vì sao tỉ số giới tính khi sinh cao là đáng lo?", solution: "Gây mất cân bằng giới tính, ảnh hưởng đến hôn nhân, gia đình trong tương lai." }
  ],
  exercises: [
    { question: "Việt Nam có bao nhiêu dân tộc?", hints: ["Hơn 50.", "5…"], solution: "54 dân tộc." },
    { question: "Dân số trung bình năm 2024?", hints: ["Hơn 100 triệu.", "101,…"], solution: "Khoảng 101,3 triệu người." },
    { question: "Tỉ lệ người Kinh năm 2019?", hints: ["Trên 85%.", "85,…"], solution: "85,3%." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Việt Nam có 54 dân tộc.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Dân số trung bình Việt Nam năm 2024 (Tổng cục Thống kê):", options: ["101,3 triệu", "96,2 triệu", "110 triệu", "90 triệu"], answer: 0, explain: "101,3 triệu." },
    { type: 'short', q: "Người Kinh chiếm 85,3%. Các dân tộc thiểu số chiếm bao nhiêu %?", answer: "14.7", answerText: "14,7", unit: "%", calc: "100-85.3", explain: "14,7." },
    { type: 'mcq', q: "Tuổi thọ trung bình năm 2024:", options: ["74,7 năm", "65 năm", "80 năm", "70,1 năm"], answer: 0, explain: "74,7 năm." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Dân thành thị chiếm hơn một nửa dân số nước ta năm 2024.", answer: false, explain: "Chỉ khoảng 38,5%." },
    { type: 'mcq', q: "Dân tộc thiểu số sống chủ yếu ở:", options: ["Miền núi, trung du", "Đồng bằng ven biển", "Đô thị lớn", "Hải đảo"], answer: 0, explain: "Miền núi, trung du." },
    { type: 'short', q: "Dân số 101,3 triệu, thành thị 39 triệu. Nông thôn bao nhiêu triệu?", answer: "62.3", answerText: "62,3", unit: "triệu người", calc: "101.3-39", explain: "62,3." },
    { type: 'mcq', q: "Tỉ lệ tăng dân số năm 2024:", options: ["1,03%", "2,5%", "0,5%", "3%"], answer: 0, explain: "1,03%." }
  ]
});
})();
