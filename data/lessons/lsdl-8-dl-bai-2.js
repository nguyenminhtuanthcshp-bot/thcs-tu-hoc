/* LS&ĐL 8 – Địa lí, Bài 2. Địa hình Việt Nam. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-8/dl-bai-2', {
  objectives: [
    "Trình bày được đặc điểm chung của địa hình Việt Nam.",
    "Trình bày được đặc điểm các khu vực địa hình.",
    "Phân tích được ảnh hưởng của địa hình đến sự phân hoá tự nhiên và khai thác kinh tế."
  ],
  intro: "Đỉnh Phan-xi-păng cao 3 147,3 m (số đo năm 2015 của Bộ Tài nguyên và Môi trường) là “nóc nhà Đông Dương”. Nhưng phần lớn đồi núi nước ta lại là đồi núi thấp.",
  steps: [
    { title: "Đặc điểm chung", html: "<ul><li>Đồi núi chiếm khoảng <b>3/4</b> diện tích, chủ yếu là đồi núi thấp; đồng bằng chiếm khoảng 1/4.</li><li>Hướng chính: <b>tây bắc – đông nam</b> và <b>vòng cung</b>.</li><li>Địa hình nhiệt đới ẩm gió mùa, chịu tác động mạnh của con người.</li></ul>",
      svg: S.pieChart({ title: "Cơ cấu diện tích địa hình (gần đúng)", parts: [{ v: 75, label: "Đồi núi: khoảng 3/4" }, { v: 25, label: "Đồng bằng: khoảng 1/4" }] }), caption: "Tỉ lệ gần đúng, thường dùng trong địa lí Việt Nam." },
    { title: "Khu vực đồi núi", html: "<p>Bảng tóm tắt:</p>",
      svg: S.table({ title: "Các vùng núi", head: ["Vùng núi", "Đặc điểm"], rows: [["Đông Bắc", "Các dãy núi cánh cung"], ["Tây Bắc", "Cao nhất, hướng tây bắc – đông nam"], ["Trường Sơn Bắc", "Núi thấp, hướng tây bắc – đông nam"], ["Trường Sơn Nam", "Các cao nguyên badan"]], colW: 250 }), caption: "Dãy Hoàng Liên Sơn có đỉnh Phan-xi-păng." },
    { title: "Khu vực đồng bằng", html: "<p>Hai đồng bằng châu thổ lớn: <b>đồng bằng sông Hồng</b> (có hệ thống đê) và <b>đồng bằng sông Cửu Long</b> (không có đê lớn, nhiều kênh rạch). Dải đồng bằng ven biển miền Trung hẹp ngang.</p>" },
    { title: "Ảnh hưởng của địa hình", html: "<div class=\"box key\">Địa hình làm thiên nhiên phân hoá theo độ cao và theo hướng; miền núi có thế mạnh về khoáng sản, thuỷ điện, lâm nghiệp; đồng bằng thuận lợi cho nông nghiệp, dân cư. Cần chống xói mòn, lũ quét ở miền núi.</div>" }
  ],
  summary: "Đồi núi chiếm khoảng 3/4 diện tích Việt Nam, chủ yếu là đồi núi thấp; hướng chính tây bắc – đông nam và vòng cung. Bốn vùng núi: Đông Bắc, Tây Bắc (có Phan-xi-păng 3 147,3 m), Trường Sơn Bắc, Trường Sơn Nam. Đồng bằng sông Hồng và sông Cửu Long là hai châu thổ lớn; đồng bằng ven biển miền Trung hẹp. Địa hình ảnh hưởng đến phân hoá tự nhiên và phát triển kinh tế.",
  examples: [
    { title: "Tính", problem: "Diện tích đất liền 331 345 km², đồi núi chiếm 3/4. Đồi núi khoảng bao nhiêu km² (làm tròn đến nghìn)?", solution: "331 345 × 3/4 ≈ 248 509 ≈ 249 nghìn km²." },
    { title: "So sánh", problem: "Đồng bằng sông Hồng khác đồng bằng sông Cửu Long ở điểm nào?", solution: "Sông Hồng có hệ thống đê bao quanh; sông Cửu Long không có đê lớn, có nhiều kênh rạch." },
    { title: "Xác định", problem: "Vùng núi có các dãy cánh cung?", solution: "Đông Bắc." }
  ],
  exercises: [
    { question: "Đỉnh núi cao nhất Việt Nam?", hints: ["Dãy Hoàng Liên Sơn.", "Phan-…"], solution: "Phan-xi-păng (3 147,3 m)." },
    { question: "Hai hướng chính của địa hình?", hints: ["Một hướng chéo.", "Một hướng cong."], solution: "Tây bắc – đông nam và vòng cung." },
    { question: "Phan-xi-păng 3 147,3 m so với 3 143 m (số đo cũ) cao hơn bao nhiêu m?", hints: ["Trừ.", "Có phần thập phân."], solution: "4,3 m." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Đồi núi chiếm khoảng 3/4 diện tích Việt Nam.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Vùng núi cao nhất nước ta:", options: ["Tây Bắc", "Đông Bắc", "Trường Sơn Bắc", "Trường Sơn Nam"], answer: 0, explain: "Tây Bắc." },
    { type: 'short', q: "Đồi núi chiếm 3/4 diện tích. Đồng bằng chiếm bao nhiêu phần trăm?", answer: "25", unit: "%", calc: "100-75", explain: "25%." },
    { type: 'mcq', q: "Vùng có các cao nguyên badan:", options: ["Trường Sơn Nam", "Đông Bắc", "Tây Bắc", "Đồng bằng sông Hồng"], answer: 0, explain: "Trường Sơn Nam." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Địa hình nước ta chủ yếu là núi cao trên 2 000 m.", answer: false, explain: "Chủ yếu là đồi núi thấp." },
    { type: 'mcq', q: "Đồng bằng có hệ thống đê bao quanh:", options: ["Đồng bằng sông Hồng", "Đồng bằng sông Cửu Long", "Đồng bằng ven biển miền Trung", "Không có"], answer: 0, explain: "Sông Hồng." },
    { type: 'short', q: "Phan-xi-păng cao 3 147,3 m. Làm tròn đến hàng trăm là bao nhiêu m?", answer: "3100", answerText: "3 100", unit: "m", calc: "Math.round(3147.3/100)*100", explain: "3 100." },
    { type: 'mcq', q: "Hướng các dãy núi vùng Đông Bắc:", options: ["Vòng cung", "Tây bắc – đông nam", "Bắc – nam", "Đông – tây"], answer: 0, explain: "Vòng cung." }
  ]
});
})();
