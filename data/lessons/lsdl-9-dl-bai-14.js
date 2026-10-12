/* LS&ĐL 9 – Địa lí, Bài 14. Vùng Bắc Trung Bộ. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-9/dl-bai-14', {
  objectives: [
    "Trình bày được vị trí, phạm vi lãnh thổ của vùng (từ năm 2025).",
    "Phân tích được đặc điểm tự nhiên, thiên tai và dân cư.",
    "Trình bày được sự phát triển kinh tế biển, nông – lâm nghiệp và du lịch."
  ],
  intro: "Dải đất hẹp ngang này hứng chịu nhiều bão, lũ và gió phơn tây nam (“gió Lào”), nhưng lại sở hữu nhiều di sản thế giới. Vùng đã vượt khó ra sao?",
  steps: [
    { title: "Phạm vi", html: "<p>Từ năm 2025, vùng gồm 5 tỉnh, thành phố: Thanh Hoá, Nghệ An, Hà Tĩnh, Quảng Trị (gồm cả Quảng Bình cũ) và thành phố Huế.</p>",
      svg: S.table({ title: "Các tỉnh, thành phố (từ năm 2025)", head: ["Tỉnh, thành phố", "Diện tích (km²)"], rows: [["Nghệ An", "16 486,49"], ["Quảng Trị", "12 700"], ["Thanh Hoá", "11 114,71"], ["Hà Tĩnh", "5 994,45"], ["TP Huế", "4 947,11"]], colW: 250 }), caption: "Diện tích theo đề án sắp xếp đơn vị hành chính năm 2025 (Nghị quyết 306/NQ-CP). Tổng khoảng 51 243 km²." },
    { title: "Tự nhiên", html: "<ul><li>Lãnh thổ hẹp ngang; từ tây sang đông: núi, gò đồi, đồng bằng, biển.</li><li>Thiên tai: bão, lũ, hạn hán, gió phơn tây nam khô nóng.</li><li>Tài nguyên: rừng, đá vôi, sắt (Thạch Khê – Hà Tĩnh), biển.</li></ul>",
      svg: S.flowchart({ title: "Lát cắt tây – đông (giản lược)", steps: [{ t: 'start', s: "Núi phía tây" }, { t: 'proc', s: "Gò đồi" }, { t: 'proc', s: "Đồng bằng hẹp" }, { t: 'end', s: "Biển" }] }), caption: "Lát cắt mang tính sơ đồ." },
    { title: "Dân cư, văn hoá", html: "<p>Phía đông chủ yếu người Kinh; phía tây có Thái, Mường, Bru – Vân Kiều… Di sản: Phong Nha – Kẻ Bàng (Quảng Trị), Quần thể di tích Cố đô Huế, Thành nhà Hồ (Thanh Hoá).</p>" },
    { title: "Kinh tế", html: "<div class=\"box key\">Kinh tế biển: cảng Nghi Sơn, Vũng Áng; khu kinh tế ven biển; công nghiệp lọc hoá dầu, luyện kim. Nông – lâm nghiệp: trồng rừng phòng hộ ven biển, chăn nuôi bò. Du lịch di sản, biển (Sầm Sơn, Cửa Lò).</div>" }
  ],
  summary: "Vùng Bắc Trung Bộ (từ 2025 gồm 5 tỉnh, thành phố, khoảng 51 243 km²) hẹp ngang, nhiều thiên tai (bão, lũ, gió phơn tây nam). Có nhiều di sản: Phong Nha – Kẻ Bàng, Cố đô Huế, Thành nhà Hồ. Kinh tế biển phát triển (Nghi Sơn, Vũng Áng), trồng rừng ven biển, du lịch di sản và biển.",
  examples: [
    { title: "Tính", problem: "Nghệ An 16 486,49 km² chiếm khoảng bao nhiêu % diện tích vùng (51 243 km²)?", solution: "≈ 32,2%." },
    { title: "Giải thích", problem: "Vì sao phải trồng rừng phòng hộ ven biển?", solution: "Chắn gió, chắn cát bay, hạn chế xâm nhập mặn và tác hại của bão." },
    { title: "Nhận xét", problem: "Gió phơn tây nam ảnh hưởng thế nào?", solution: "Gây khô nóng, hạn hán vào đầu mùa hạ." }
  ],
  exercises: [
    { question: "Quảng Bình cũ nay thuộc tỉnh nào?", hints: ["Tỉnh phía nam.", "Quảng …"], solution: "Quảng Trị." },
    { question: "Di sản ở Thanh Hoá?", hints: ["Một toà thành đá.", "Thành nhà …"], solution: "Thành nhà Hồ." },
    { question: "Cảng nước sâu ở Hà Tĩnh?", hints: ["Khu kinh tế lớn.", "Vũng …"], solution: "Vũng Áng." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Vùng Bắc Trung Bộ chịu ảnh hưởng của gió phơn tây nam khô nóng.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Di sản thiên nhiên thế giới của vùng:", options: ["Phong Nha – Kẻ Bàng", "Vịnh Hạ Long", "Tràng An", "Cát Tiên"], answer: 0, explain: "Phong Nha – Kẻ Bàng." },
    { type: 'short', q: "Vùng có 5 tỉnh, thành phố, tổng khoảng 51 243 km². Diện tích trung bình (làm tròn km²)?", answer: "10249", answerText: "10 249", unit: "km²", calc: "Math.round(51243/5)", explain: "10 249." },
    { type: 'mcq', q: "Tỉnh lớn nhất vùng:", options: ["Nghệ An", "Hà Tĩnh", "Thanh Hoá", "Huế"], answer: 0, explain: "Nghệ An." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Lãnh thổ vùng Bắc Trung Bộ rộng ngang, không giáp biển.", answer: false, explain: "Hẹp ngang, giáp biển." },
    { type: 'mcq', q: "Cảng gắn với khu kinh tế ở Thanh Hoá:", options: ["Nghi Sơn", "Cái Mép", "Dung Quất", "Chân Mây"], answer: 0, explain: "Nghi Sơn." },
    { type: 'short', q: "Thanh Hoá 11 114,71 km², Hà Tĩnh 5 994,45 km². Chênh lệch?", answer: "5120.26", answerText: "5120,26", unit: "km²", calc: "11114.71-5994.45", explain: "5 120,26." },
    { type: 'mcq', q: "Thiên tai thường gặp nhất ở vùng:", options: ["Bão, lũ", "Động đất mạnh", "Núi lửa", "Sóng thần thường xuyên"], answer: 0, explain: "Bão, lũ." }
  ]
});
})();
