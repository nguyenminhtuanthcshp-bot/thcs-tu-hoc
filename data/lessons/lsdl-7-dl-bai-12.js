/* LS&ĐL 7 – Địa lí, Bài 12. Thực hành: Tìm hiểu khái quát Cộng hoà Nam Phi. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-7/dl-bai-12', {
  objectives: [
    "Trình bày được khái quát về Cộng hoà Nam Phi: vị trí, tự nhiên, dân cư.",
    "Nêu được những nét chính về kinh tế Nam Phi.",
    "Biết thu thập và trình bày thông tin về một quốc gia."
  ],
  intro: "Cộng hoà Nam Phi là một trong những nền kinh tế phát triển nhất châu Phi, nổi tiếng với vàng, kim cương và vị tổng thống Nen-xơn Man-đê-la.",
  steps: [
    { title: "Vị trí, tự nhiên", html: "<p>Nam Phi ở cực nam châu Phi, giáp Đại Tây Dương và Ấn Độ Dương; diện tích khoảng <b>1,22 triệu km²</b>. Khí hậu cận nhiệt và nhiệt đới; giàu khoáng sản: vàng, kim cương, bạch kim, than.</p>" },
    { title: "Lịch sử, dân cư", html: "<p>Năm <b>1994</b>, chế độ phân biệt chủng tộc A-pác-thai bị xoá bỏ, Nen-xơn Man-đê-la trở thành tổng thống da đen đầu tiên. Theo điều tra năm 2022, dân số khoảng <b>62 triệu</b>. Nam Phi có ba thủ đô: Prê-tô-ri-a (hành pháp), Kếp-tao (lập pháp), Blum-phôn-tên (tư pháp).</p>",
      svg: S.table({ title: "Ba thủ đô của Nam Phi", head: ["Thủ đô", "Chức năng"], rows: [["Prê-tô-ri-a", "Hành pháp"], ["Kếp-tao", "Lập pháp (Quốc hội)"], ["Blum-phôn-tên", "Tư pháp"]], colW: 250 }), caption: "Nam Phi là nước hiếm hoi có ba thủ đô." },
    { title: "Kinh tế", html: "<ul><li>Công nghiệp khai khoáng, luyện kim, chế tạo máy, hoá chất.</li><li>Nông nghiệp: nho, cam, ngô; chăn nuôi cừu.</li><li>Dịch vụ: tài chính, du lịch.</li></ul>" },
    { title: "Trình bày kết quả", html: "<p>Sơ đồ bài báo cáo:</p>",
      svg: S.flowchart({ title: "Báo cáo về một quốc gia", steps: [{ t: 'start', s: "Vị trí, tự nhiên" }, { t: 'proc', s: "Dân cư, lịch sử" }, { t: 'proc', s: "Kinh tế" }, { t: 'end', s: "Nhận xét chung" }] }), caption: "Kèm bản đồ, hình ảnh và nguồn số liệu." }
  ],
  summary: "Cộng hoà Nam Phi ở cực nam châu Phi, rộng khoảng 1,22 triệu km², dân số khoảng 62 triệu (2022), giàu vàng, kim cương, bạch kim. Năm 1994 chế độ A-pác-thai bị xoá bỏ, Nen-xơn Man-đê-la làm tổng thống. Nam Phi có ba thủ đô; kinh tế phát triển hàng đầu châu Phi với khai khoáng, chế tạo, dịch vụ.",
  examples: [
    { title: "Tính", problem: "Mật độ dân số Nam Phi khoảng bao nhiêu người/km² (62 triệu người, 1,22 triệu km²)?", solution: "62 : 1,22 ≈ 51 người/km²." },
    { title: "Tính", problem: "Từ năm 1994 đến 2024 là bao nhiêu năm?", solution: "30 năm." },
    { title: "Lịch sử", problem: "A-pác-thai là gì?", solution: "Chế độ phân biệt chủng tộc ở Nam Phi, bị xoá bỏ năm 1994." }
  ],
  exercises: [
    { question: "Nam Phi có mấy thủ đô?", hints: ["Hành pháp, lập pháp, tư pháp.", "Một mỗi loại."], solution: "3 thủ đô." },
    { question: "Tổng thống da đen đầu tiên của Nam Phi?", hints: ["Năm 1994.", "Nen-xơn …"], solution: "Nen-xơn Man-đê-la." },
    { question: "Kể hai khoáng sản nổi tiếng của Nam Phi.", hints: ["Quý giá.", "Làm trang sức."], solution: "Vàng, kim cương." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Nam Phi có ba thủ đô.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Chế độ A-pác-thai bị xoá bỏ năm:", options: ["1994", "1957", "2002", "1975"], answer: 0, explain: "1994." },
    { type: 'short', q: "Từ năm 1994 đến năm 2024 là bao nhiêu năm?", answer: "30", unit: "năm", calc: "2024-1994", explain: "30." },
    { type: 'mcq', q: "Thủ đô hành pháp của Nam Phi:", options: ["Prê-tô-ri-a", "Kếp-tao", "Blum-phôn-tên", "Giô-han-ne-xbớc"], answer: 0, explain: "Prê-tô-ri-a." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Nam Phi nằm ở cực bắc châu Phi.", answer: false, explain: "Cực nam." },
    { type: 'mcq', q: "Khoáng sản nổi tiếng của Nam Phi:", options: ["Kim cương", "Băng cháy", "Thiếc ở Sibia", "Than bùn Bắc Cực"], answer: 0, explain: "Kim cương." },
    { type: 'short', q: "Nam Phi 62 triệu dân trên 1,24 triệu km² (làm tròn). Mật độ bao nhiêu người/km²?", answer: "50", unit: "người/km²", calc: "62/1.24", explain: "50." },
    { type: 'mcq', q: "Nam Phi giáp hai đại dương:", options: ["Đại Tây Dương và Ấn Độ Dương", "Thái Bình Dương và Bắc Băng Dương", "Chỉ Đại Tây Dương", "Chỉ Ấn Độ Dương"], answer: 0, explain: "Đúng." }
  ]
});
})();
