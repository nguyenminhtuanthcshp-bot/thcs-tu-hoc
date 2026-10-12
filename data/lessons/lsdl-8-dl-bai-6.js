/* LS&ĐL 8 – Địa lí, Bài 6. Thuỷ văn Việt Nam. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-8/dl-bai-6', {
  objectives: [
    "Trình bày được đặc điểm mạng lưới sông và chế độ dòng chảy.",
    "Nêu được đặc điểm một số hệ thống sông lớn.",
    "Trình bày được vai trò của hồ, đầm và nước ngầm."
  ],
  intro: "Nước ta có 2 360 con sông dài từ 10 km trở lên. Vì sao sông ngòi nước ta lại dày đặc như vậy?",
  steps: [
    { title: "Đặc điểm sông ngòi", html: "<ul><li>Mạng lưới sông dày đặc: 2 360 sông dài từ 10 km trở lên, phần lớn là sông nhỏ, ngắn, dốc.</li><li>Hướng chính: tây bắc – đông nam và vòng cung.</li><li>Chế độ nước theo mùa: mùa lũ và mùa cạn rõ rệt.</li><li>Sông nhiều nước, giàu phù sa.</li></ul>" },
    { title: "Một số hệ thống sông lớn", html: "<p>Bảng tóm tắt:</p>",
      svg: S.table({ title: "Hệ thống sông lớn", head: ["Hệ thống sông", "Đặc điểm"], rows: [["Sông Hồng", "Lũ tháng 6 – 10, nhiều phù sa"], ["Sông Mê Công (Cửu Long)", "Lũ tháng 7 – 11, lên chậm, rút chậm"], ["Sông Thu Bồn", "Ngắn, dốc, lũ tháng 9 – 12"]], colW: 250 }), caption: "Mùa lũ của sông thay đổi theo chế độ mưa từng vùng." },
    { title: "Hồ, đầm, nước ngầm", html: "<p>Hồ tự nhiên (hồ Ba Bể, Hồ Tây) và hồ nhân tạo (hồ Hoà Bình, Trị An) có vai trò thuỷ lợi, thuỷ điện, du lịch. Nước ngầm phong phú nhưng một số nơi bị khai thác quá mức, ô nhiễm.</p>",
      svg: S.flowchart({ title: "Vì sao sông dày đặc, nhiều nước", steps: [{ t: 'start', s: "Mưa nhiều" }, { t: 'proc', s: "Địa hình nhiều đồi núi" }, { t: 'proc', s: "Nước chảy tạo nhiều sông" }, { t: 'end', s: "Sông nhiều nước, phù sa" }] }), caption: "Khí hậu và địa hình quyết định đặc điểm sông ngòi." },
    { title: "Ghi nhớ", html: "<div class=\"box key\">Sông dày đặc, nhiều nước, giàu phù sa, chế độ nước theo mùa; cần sử dụng hợp lí và bảo vệ nguồn nước.</div>" }
  ],
  summary: "Mạng lưới sông Việt Nam dày đặc (2 360 sông dài từ 10 km trở lên), chủ yếu nhỏ, ngắn, dốc; chảy theo hướng tây bắc – đông nam và vòng cung; chế độ nước theo mùa; nhiều nước, giàu phù sa. Hệ thống sông lớn: sông Hồng, Mê Công (Cửu Long), Thu Bồn. Hồ, đầm và nước ngầm có vai trò quan trọng trong sản xuất, sinh hoạt.",
  examples: [
    { title: "Giải thích", problem: "Vì sao sông miền Trung lũ lên nhanh?", solution: "Sông ngắn, dốc, mưa lớn tập trung." },
    { title: "So sánh", problem: "Mùa lũ sông Hồng và sông Mê Công khác nhau thế nào?", solution: "Sông Hồng lũ tháng 6 – 10; sông Mê Công lũ tháng 7 – 11, lên chậm, rút chậm." },
    { title: "Tính", problem: "Mùa lũ sông Hồng từ tháng 6 đến tháng 10 kéo dài mấy tháng?", solution: "5 tháng." }
  ],
  exercises: [
    { question: "Nước ta có bao nhiêu sông dài từ 10 km trở lên?", hints: ["Hơn 2 000.", "2 3…"], solution: "2 360 sông." },
    { question: "Kể tên một hồ nhân tạo.", hints: ["Có nhà máy thuỷ điện.", "Hoà …"], solution: "Hồ Hoà Bình (hoặc Trị An)." },
    { question: "Mùa lũ sông Mê Công tháng 7 – 11 kéo dài mấy tháng?", hints: ["Đếm từ 7 đến 11.", "…"], solution: "5 tháng." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Mạng lưới sông ngòi nước ta dày đặc.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Hồ tự nhiên:", options: ["Hồ Ba Bể", "Hồ Hoà Bình", "Hồ Trị An", "Hồ Dầu Tiếng"], answer: 0, explain: "Ba Bể." },
    { type: 'short', q: "Mùa lũ từ tháng 7 đến tháng 11 kéo dài mấy tháng?", answer: "5", unit: "tháng", calc: "11-7+1", explain: "5." },
    { type: 'mcq', q: "Sông có lũ lên chậm, rút chậm:", options: ["Mê Công", "Thu Bồn", "Đà Rằng", "Hương"], answer: 0, explain: "Mê Công." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Phần lớn sông ngòi nước ta là sông lớn, dài.", answer: false, explain: "Chủ yếu nhỏ, ngắn, dốc." },
    { type: 'mcq', q: "Hướng chảy chính của sông ngòi:", options: ["Tây bắc – đông nam và vòng cung", "Bắc – nam", "Đông – tây", "Nam – bắc"], answer: 0, explain: "Đúng." },
    { type: 'short', q: "Có 2 360 sông dài từ 10 km trở lên. Làm tròn đến hàng trăm?", answer: "2400", answerText: "2 400", unit: "sông", calc: "Math.round(2360/100)*100", explain: "2 400." },
    { type: 'mcq', q: "Vai trò của hồ thuỷ điện:", options: ["Phát điện, thuỷ lợi", "Tăng hạn hán", "Gây ô nhiễm", "Không có"], answer: 0, explain: "Phát điện, thuỷ lợi." }
  ]
});
})();
