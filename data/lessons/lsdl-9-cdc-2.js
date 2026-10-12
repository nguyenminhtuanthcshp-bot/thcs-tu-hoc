/* LS&ĐL 9 – Chủ đề chung, Chủ đề chung 2. Văn minh châu thổ sông Hồng và sông Cửu Long. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-9/cdc-2', {
  objectives: [
    "Nêu được quá trình hình thành và phát triển của hai châu thổ.",
    "Trình bày được những thành tựu tiêu biểu của nền văn minh châu thổ.",
    "Liên hệ được việc phát triển bền vững hai châu thổ hiện nay."
  ],
  intro: "Một châu thổ có đê bao, một châu thổ có kênh rạch chằng chịt – hai cách người Việt chung sống với sông nước. Những giá trị nào của văn minh châu thổ vẫn còn đến hôm nay?",
  steps: [
    { title: "Hai châu thổ", html: "<p>So sánh:</p>",
      svg: S.table({ title: "Hai châu thổ", head: ["Sông Hồng", "Sông Cửu Long"], rows: [["Khai phá từ rất sớm", "Khai phá mạnh từ thế kỉ XVII"], ["Hệ thống đê bao", "Kênh rạch, “sống chung với lũ”"], ["Lúa nước thâm canh", "Lúa, cây ăn quả, thuỷ sản"]], colW: 250 }), caption: "Hai cách thích ứng với tự nhiên khác nhau." },
    { title: "Thành tựu văn minh", html: "<ul><li>Châu thổ sông Hồng: văn minh Văn Lang – Âu Lạc, Đại Việt; hệ thống đê điều; làng xã, chợ, làng nghề.</li><li>Châu thổ sông Cửu Long: văn hoá Óc Eo, kênh đào (Vĩnh Tế, Thoại Hà), chợ nổi, miệt vườn.</li></ul>",
      svg: S.timeline({ title: "Kênh đào Nam Bộ", items: [{ y: "1818", s: "Kênh Thoại Hà" }, { y: "1819 – 1824", s: "Kênh Vĩnh Tế" }] }), caption: "Hai công trình thuỷ lợi tiêu biểu thời Nguyễn." },
    { title: "Hiện tại", html: "<p>Năm 2024, ĐBSCL sản xuất khoảng 24,14 triệu tấn lúa (hơn 1/2 cả nước); Đồng bằng sông Hồng là vùng có mật độ dân số cao nhất, công nghiệp – dịch vụ phát triển mạnh.</p>" },
    { title: "Phát triển bền vững", html: "<div class=\"box key\">Giữ gìn di sản (đê điều, làng nghề, đờn ca tài tử, chợ nổi); thích ứng biến đổi khí hậu; sử dụng đất, nước hợp lí.</div>" }
  ],
  summary: "Châu thổ sông Hồng khai phá sớm, với hệ thống đê, làng xã, lúa nước thâm canh; châu thổ sông Cửu Long khai phá mạnh từ thế kỉ XVII với kênh rạch, “sống chung với lũ”, kênh Thoại Hà (1818), Vĩnh Tế (1819 – 1824). Ngày nay, ĐBSCL sản xuất hơn một nửa lượng lúa cả nước; Đồng bằng sông Hồng phát triển mạnh công nghiệp, dịch vụ. Cần bảo tồn di sản, thích ứng biến đổi khí hậu.",
  examples: [
    { title: "Tính", problem: "Kênh Vĩnh Tế đào từ 1819 đến 1824 trong bao nhiêu năm?", solution: "5 năm." },
    { title: "So sánh", problem: "Cách ứng phó với lũ của hai châu thổ?", solution: "Sông Hồng: đắp đê ngăn lũ; Cửu Long: sống chung với lũ, tận dụng phù sa." },
    { title: "Liên hệ", problem: "Một di sản phi vật thể ở Nam Bộ?", solution: "Đờn ca tài tử Nam Bộ." }
  ],
  exercises: [
    { question: "Kênh đào nối Châu Đốc với Hà Tiên?", hints: ["Thời Gia Long – Minh Mạng.", "Vĩnh …"], solution: "Kênh Vĩnh Tế." },
    { question: "Văn hoá cổ ở Nam Bộ?", hints: ["Gắn với vương quốc Phù Nam.", "Óc …"], solution: "Văn hoá Óc Eo." },
    { question: "Công trình tiêu biểu ở châu thổ sông Hồng?", hints: ["Ngăn lũ.", "Hệ thống …"], solution: "Hệ thống đê điều." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Châu thổ sông Hồng có hệ thống đê điều bao quanh.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Kênh Thoại Hà được đào năm:", options: ["1818", "1698", "1802", "1858"], answer: 0, explain: "1818." },
    { type: 'short', q: "Từ 1818 đến 2018 kênh Thoại Hà tròn bao nhiêu năm?", answer: "200", unit: "năm", calc: "2018-1818", explain: "200." },
    { type: 'mcq', q: "Hình thức buôn bán đặc trưng của châu thổ sông Cửu Long:", options: ["Chợ nổi", "Chợ phiên vùng cao", "Hội chợ triển lãm", "Siêu thị"], answer: 0, explain: "Chợ nổi." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Châu thổ sông Cửu Long được khai phá trước châu thổ sông Hồng.", answer: false, explain: "Sông Hồng khai phá sớm hơn." },
    { type: 'mcq', q: "Văn hoá cổ ở Nam Bộ:", options: ["Óc Eo", "Đông Sơn", "Sa Huỳnh", "Hoà Bình"], answer: 0, explain: "Óc Eo." },
    { type: 'short', q: "Lúa ĐBSCL 24,14 triệu tấn, cả nước 43,46 triệu tấn. Các vùng khác bao nhiêu triệu tấn?", answer: "19.32", answerText: "19,32", unit: "triệu tấn", calc: "43.46-24.14", explain: "19,32." },
    { type: 'mcq', q: "Di sản phi vật thể Nam Bộ:", options: ["Đờn ca tài tử", "Quan họ", "Ca trù", "Hát xoan"], answer: 0, explain: "Đờn ca tài tử." }
  ]
});
})();
