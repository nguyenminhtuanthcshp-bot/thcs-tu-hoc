/* LS&ĐL 9 – Địa lí, Bài 20. Vùng Đồng bằng sông Cửu Long. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-9/dl-bai-20', {
  objectives: [
    "Trình bày được vị trí, phạm vi lãnh thổ của vùng (từ năm 2025).",
    "Phân tích được thế mạnh và hạn chế tự nhiên.",
    "Trình bày được sự phát triển sản xuất lương thực, thuỷ sản, cây ăn quả."
  ],
  intro: "Năm 2024, Đồng bằng sông Cửu Long sản xuất khoảng 24,14 triệu tấn lúa – hơn một nửa cả nước. Châu thổ này còn có thế mạnh gì?",
  steps: [
    { title: "Phạm vi", html: "<p>Từ năm 2025, vùng gồm 5 tỉnh, thành phố: Cần Thơ, Đồng Tháp, Vĩnh Long, An Giang, Cà Mau.</p>",
      svg: S.table({ title: "Các tỉnh, thành phố (từ năm 2025)", head: ["Tỉnh, thành phố", "Diện tích (km²)"], rows: [["An Giang", "9 888,9"], ["Cà Mau", "7 942,4"], ["TP Cần Thơ", "6 360,8"], ["Vĩnh Long", "6 296,2"], ["Đồng Tháp", "5 938,7"]], colW: 250 }), caption: "Diện tích theo đề án sắp xếp đơn vị hành chính năm 2025 (Nghị quyết 306/NQ-CP). Tổng khoảng 36 427 km²." },
    { title: "Tự nhiên", html: "<ul><li>Đất phù sa ngọt ven sông Tiền, sông Hậu; đất phèn, đất mặn rộng.</li><li>Khí hậu cận xích đạo; sông ngòi, kênh rạch chằng chịt.</li><li>Hạn chế: mùa khô thiếu nước ngọt, xâm nhập mặn; sạt lở bờ sông, bờ biển.</li></ul>" },
    { title: "Kinh tế", html: "<p>Cơ cấu thế mạnh:</p>",
      svg: S.mindmap({ center: "Đồng bằng sông Cửu Long", branches: [{ title: "Lúa gạo", items: ["Hơn 1/2 cả nước"] }, { title: "Thuỷ sản", items: ["Tôm", "Cá tra"] }, { title: "Cây ăn quả", items: ["Xoài", "Sầu riêng"] }, { title: "Du lịch", items: ["Sông nước", "Miệt vườn"] }], w: 640, size: 13 }), caption: "Vùng trọng điểm lương thực, thực phẩm." },
    { title: "Sản xuất lúa", html: "<div class=\"box key\">Năm 2024: ĐBSCL khoảng 24,14 triệu tấn lúa trong tổng 43,46 triệu tấn cả nước (khoảng 55,5%). Định hướng: giảm lúa, tăng trái cây, thuỷ sản; đề án 1 triệu ha lúa chất lượng cao, phát thải thấp.</div>" }
  ],
  summary: "Vùng Đồng bằng sông Cửu Long (từ 2025 gồm 5 tỉnh, thành phố, khoảng 36 427 km²) có đất phù sa, khí hậu cận xích đạo, sông ngòi dày đặc, nhưng mùa khô thiếu nước ngọt, xâm nhập mặn. Vùng sản xuất hơn một nửa sản lượng lúa cả nước (khoảng 24,14/43,46 triệu tấn năm 2024), dẫn đầu về thuỷ sản, cây ăn quả.",
  examples: [
    { title: "Tính", problem: "24,14 : 43,46 × 100 ≈ ?", solution: "≈ 55,5%." },
    { title: "Giải thích", problem: "Vì sao phải chuyển đổi cơ cấu cây trồng, vật nuôi?", solution: "Thích ứng xâm nhập mặn, nâng giá trị sản xuất." },
    { title: "Nhận xét", problem: "Thế mạnh thuỷ sản của vùng?", solution: "Nhiều sông, kênh, vùng ven biển rộng – nuôi tôm, cá tra lớn nhất cả nước." }
  ],
  exercises: [
    { question: "Vùng có sản lượng lúa lớn nhất?", hints: ["Hơn 24 triệu tấn.", "Đồng bằng sông …"], solution: "Đồng bằng sông Cửu Long." },
    { question: "Tỉnh lớn nhất vùng (2025)?", hints: ["Gồm Kiên Giang cũ.", "An …"], solution: "An Giang." },
    { question: "Hạn chế lớn mùa khô?", hints: ["Nước biển lấn vào.", "Xâm nhập …"], solution: "Xâm nhập mặn." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Đồng bằng sông Cửu Long chiếm hơn một nửa sản lượng lúa cả nước.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Từ năm 2025, Kiên Giang cũ thuộc tỉnh:", options: ["An Giang", "Cà Mau", "Cần Thơ", "Đồng Tháp"], answer: 0, explain: "An Giang." },
    { type: 'short', q: "Lúa ĐBSCL 24,14, cả nước 43,46 triệu tấn. Tỉ lệ % (làm tròn 1 chữ số thập phân)?", answer: "55.5", answerText: "55,5", unit: "%", calc: "Math.round(24.14/43.46*1000)/10", explain: "55,5." },
    { type: 'mcq', q: "Loài thuỷ sản nuôi nổi tiếng của vùng:", options: ["Cá tra", "Cá hồi", "Cá tuyết", "Cá ngừ đại dương"], answer: 0, explain: "Cá tra." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Đồng bằng sông Cửu Long có hệ thống đê bao quanh như đồng bằng sông Hồng.", answer: false, explain: "Không có hệ thống đê lớn bao quanh." },
    { type: 'mcq', q: "Đề án lớn về lúa ở ĐBSCL:", options: ["1 triệu ha lúa chất lượng cao, phát thải thấp", "Trồng lúa mì", "Chuyển hết sang cà phê", "Xây đê bao toàn vùng"], answer: 0, explain: "1 triệu ha lúa." },
    { type: 'short', q: "An Giang 9 888,9 km², Đồng Tháp 5 938,7 km². Chênh lệch?", answer: "3950.2", answerText: "3950,2", unit: "km²", calc: "9888.9-5938.7", explain: "3 950,2." },
    { type: 'mcq', q: "Từ năm 2025, Bạc Liêu cũ thuộc tỉnh:", options: ["Cà Mau", "Cần Thơ", "An Giang", "Vĩnh Long"], answer: 0, explain: "Cà Mau." }
  ]
});
})();
