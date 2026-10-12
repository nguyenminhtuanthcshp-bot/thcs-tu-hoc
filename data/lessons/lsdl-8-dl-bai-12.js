/* LS&ĐL 8 – Địa lí, Bài 12. Môi trường và tài nguyên thiên nhiên biển đảo Việt Nam. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-8/dl-bai-12', {
  objectives: [
    "Nêu được đặc điểm môi trường biển đảo và vấn đề bảo vệ.",
    "Trình bày được các tài nguyên biển đảo.",
    "Nêu được các biện pháp khai thác bền vững tài nguyên biển."
  ],
  intro: "Mỗi năm, hàng nghìn tấn rác nhựa trôi ra biển. Bảo vệ môi trường biển là trách nhiệm của mỗi người.",
  steps: [
    { title: "Môi trường biển đảo", html: "<p>Môi trường biển nước ta còn khá tốt nhưng đang bị ô nhiễm ở một số nơi do rác thải, nước thải, dầu loang, khai thác quá mức; rạn san hô, rừng ngập mặn suy giảm.</p>" },
    { title: "Tài nguyên biển đảo", html: "<p>Tóm tắt:</p>",
      svg: S.mindmap({ center: "Tài nguyên biển đảo", branches: [{ title: "Sinh vật", items: ["Hải sản phong phú", "Rạn san hô"] }, { title: "Khoáng sản", items: ["Dầu mỏ, khí đốt", "Cát, muối"] }, { title: "Du lịch", items: ["Bãi biển đẹp", "Vịnh, đảo"] }, { title: "Giao thông", items: ["Cảng biển", "Tuyến hàng hải"] }], w: 640, size: 13 }), caption: "Nước ta có nhiều bãi biển đẹp như Mỹ Khê, Nha Trang." },
    { title: "Khai thác bền vững", html: "<p>Các biện pháp:</p>",
      svg: S.flowchart({ title: "Khai thác bền vững biển đảo", steps: [{ t: 'start', s: "Đánh bắt xa bờ hợp lí" }, { t: 'proc', s: "Lập khu bảo tồn biển" }, { t: 'proc', s: "Xử lí rác, nước thải" }, { t: 'end', s: "Phòng chống dầu loang" }] }), caption: "Khu bảo tồn biển Cù Lao Chàm, Hòn Mun… góp phần bảo vệ san hô." },
    { title: "Ghi nhớ", html: "<div class=\"box key\">Biển đảo giàu tài nguyên (hải sản, dầu khí, du lịch, giao thông) nhưng môi trường đang chịu sức ép; cần khai thác bền vững, giảm rác nhựa.</div>" }
  ],
  summary: "Môi trường biển đảo Việt Nam đang chịu sức ép từ rác thải, nước thải, dầu loang, khai thác quá mức. Tài nguyên biển phong phú: hải sản, dầu khí, muối, cát, du lịch, giao thông biển. Cần đánh bắt hợp lí, lập khu bảo tồn biển, xử lí chất thải, phòng chống dầu loang và giảm rác nhựa.",
  examples: [
    { title: "Phân loại", problem: "Dầu khí thuộc loại tài nguyên nào của biển?", solution: "Tài nguyên khoáng sản." },
    { title: "Giải thích", problem: "Vì sao cần lập khu bảo tồn biển?", solution: "Để bảo vệ rạn san hô, nơi sinh sản của hải sản, giữ đa dạng sinh học." },
    { title: "Tính", problem: "Một bãi biển thu gom 120 kg rác/ngày, trong đó 45% là nhựa. Bao nhiêu kg nhựa? (minh hoạ)", solution: "120 × 45% = 54 kg." }
  ],
  exercises: [
    { question: "Kể một tài nguyên du lịch biển.", hints: ["Cát trắng, nước xanh.", "Bãi …"], solution: "Bãi biển đẹp (Nha Trang, Mỹ Khê)." },
    { question: "Kể một khu bảo tồn biển.", hints: ["Ở Quảng Nam.", "Cù Lao …"], solution: "Cù Lao Chàm (hoặc Hòn Mun)." },
    { question: "Nêu một việc làm giảm rác nhựa ra biển.", hints: ["Túi.", "Chai."], solution: "Hạn chế dùng túi nilon, chai nhựa dùng một lần." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Rác nhựa là một nguyên nhân gây ô nhiễm biển.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Tài nguyên khoáng sản biển:", options: ["Dầu khí", "Rạn san hô", "Bãi tắm", "Cảng biển"], answer: 0, explain: "Dầu khí." },
    { type: 'short', q: "Thu gom 120 kg rác, 45% là nhựa. Bao nhiêu kg nhựa? (minh hoạ)", answer: "54", unit: "kg", calc: "120*45/100", explain: "54." },
    { type: 'mcq', q: "Biện pháp khai thác bền vững:", options: ["Lập khu bảo tồn biển", "Đánh bắt bằng chất nổ", "Xả thải ra biển", "Phá rừng ngập mặn"], answer: 0, explain: "Khu bảo tồn biển." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Đánh bắt bằng chất nổ giúp bảo vệ nguồn hải sản.", answer: false, explain: "Huỷ hoại hải sản." },
    { type: 'mcq', q: "Khu bảo tồn biển ở Quảng Nam (nay thuộc Đà Nẵng):", options: ["Cù Lao Chàm", "Cần Giờ", "Cúc Phương", "Ba Bể"], answer: 0, explain: "Cù Lao Chàm." },
    { type: 'short', q: "Một tàu đánh bắt 8 tấn cá/chuyến, 5 chuyến. Tổng bao nhiêu tấn? (minh hoạ)", answer: "40", unit: "tấn", calc: "8*5", explain: "40." },
    { type: 'mcq', q: "Tài nguyên biển phục vụ giao thông:", options: ["Cảng biển", "Mỏ than", "Đất phù sa", "Rừng thông"], answer: 0, explain: "Cảng biển." }
  ]
});
})();
