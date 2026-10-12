/* LS&ĐL 7 – Địa lí, Bài 16. Đặc điểm tự nhiên Trung và Nam Mỹ. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-7/dl-bai-16', {
  objectives: [
    "Trình bày được sự phân hoá tự nhiên theo chiều đông – tây, bắc – nam và theo độ cao.",
    "Mô tả được dãy An-đét và đồng bằng A-ma-dôn.",
    "Trình bày được đặc điểm khí hậu và sông ngòi."
  ],
  intro: "Dãy An-đét dài hàng nghìn ki-lô-mét dọc bờ tây Nam Mỹ, có đỉnh A-côn-ca-goa cao khoảng 6 961 m – đỉnh cao nhất châu Mỹ.",
  steps: [
    { title: "Phân hoá theo chiều đông – tây", html: "<ul><li>Phía tây: dãy núi trẻ <b>An-đét</b> cao đồ sộ.</li><li>Ở giữa: các đồng bằng rộng, lớn nhất là đồng bằng <b>A-ma-dôn</b>.</li><li>Phía đông: các sơn nguyên (Bra-xin, Guy-a-na).</li></ul>",
      svg: S.sketchMap({ title: "Địa hình Nam Mỹ (giản lược)", areas: [{ pts: [[180, 10], [420, 10], [460, 90], [400, 200], [300, 295], [250, 295], [200, 150]], label: "", lx: 0, ly: 0, fill: "#bbf7d0" }, { pts: [[180, 10], [215, 10], [240, 150], [265, 295], [250, 295], [200, 150]], label: "", lx: 0, ly: 0, fill: "#d97706" }, { pts: [[240, 60], [400, 60], [390, 120], [250, 120]], label: "Đồng bằng A-ma-dôn", lx: 320, ly: 90, fill: "#a7f3d0" }, { pts: [[350, 130], [440, 110], [400, 200], [340, 200]], label: "SN Bra-xin", lx: 390, ly: 160, fill: "#fde68a" }], lines: [], points: [{ x: 215, y: 100, label: "An-đét", left: true }], note: 'Lược đồ giản lược, không theo tỉ lệ.' }), caption: "SN: sơn nguyên. An-đét (màu nâu) chạy dọc bờ tây." },
    { title: "Phân hoá bắc – nam và theo độ cao", html: "<p>Từ bắc xuống nam: khí hậu xích đạo, cận xích đạo, nhiệt đới, cận nhiệt, ôn đới. Trên dãy An-đét, thiên nhiên thay đổi theo độ cao – từ rừng nhiệt đới ở chân núi tới băng tuyết trên đỉnh.</p>",
      svg: S.table({ title: "Thiên nhiên theo độ cao ở An-đét (giản lược)", head: ["Độ cao", "Cảnh quan"], rows: [["Dưới 1 000 m", "Rừng nhiệt đới"], ["1 000 – 3 000 m", "Rừng lá rộng, lá kim"], ["3 000 – 4 500 m", "Đồng cỏ núi cao"], ["Trên 4 500 m", "Băng tuyết"]], colW: 250 }), caption: "Ranh giới độ cao chỉ mang tính gần đúng (sườn đông, vùng xích đạo)." },
    { title: "Khí hậu, sông ngòi", html: "<p>Phần lớn lãnh thổ có khí hậu nóng ẩm. Sông <b>A-ma-dôn</b> có lưu vực rộng nhất và lượng nước lớn nhất thế giới.</p>" },
    { title: "Ghi nhớ", html: "<div class=\"box key\">Tây: An-đét; giữa: đồng bằng A-ma-dôn; đông: sơn nguyên. Thiên nhiên phân hoá đông – tây, bắc – nam và theo độ cao.</div>" }
  ],
  summary: "Trung và Nam Mỹ có thiên nhiên phân hoá theo chiều đông – tây (phía tây là dãy An-đét, ở giữa là đồng bằng A-ma-dôn, phía đông là các sơn nguyên), theo chiều bắc – nam (từ xích đạo đến ôn đới) và theo độ cao trên An-đét. Đỉnh A-côn-ca-goa cao khoảng 6 961 m. Sông A-ma-dôn có lưu vực và lượng nước lớn nhất thế giới.",
  examples: [
    { title: "So sánh", problem: "A-côn-ca-goa (6 961 m) cao hơn Ki-li-man-gia-rô (5 895 m) bao nhiêu?", solution: "1 066 m." },
    { title: "Giải thích", problem: "Vì sao trên An-đét có băng tuyết dù ở gần Xích đạo?", solution: "Càng lên cao nhiệt độ càng giảm (khoảng 0,6 °C mỗi 100 m)." },
    { title: "Tính", problem: "Chân núi 26 °C, lên cao 3 000 m nhiệt độ giảm bao nhiêu?", solution: "3 000 : 100 × 0,6 = 18 °C, còn khoảng 8 °C." }
  ],
  exercises: [
    { question: "Đỉnh cao nhất châu Mỹ?", hints: ["Ở dãy An-đét.", "A-côn-…"], solution: "A-côn-ca-goa." },
    { question: "Đồng bằng lớn nhất Nam Mỹ?", hints: ["Có sông lớn nhất.", "A-…"], solution: "Đồng bằng A-ma-dôn." },
    { question: "Lên cao 2 000 m, nhiệt độ giảm bao nhiêu °C (0,6 °C/100 m)?", hints: ["2 000 : 100 = 20.", "× 0,6."], solution: "12 °C." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Dãy An-đét nằm ở phía tây Nam Mỹ.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Sông có lượng nước lớn nhất thế giới:", options: ["A-ma-dôn", "Nin", "Mi-xi-xi-pi", "Trường Giang"], answer: 0, explain: "A-ma-dôn." },
    { type: 'short', q: "Lên cao 3 000 m, nhiệt độ giảm bao nhiêu °C (0,6 °C mỗi 100 m)?", answer: "18", unit: "°C", calc: "3000/100*0.6", explain: "18." },
    { type: 'mcq', q: "Phía đông Nam Mỹ chủ yếu là:", options: ["Sơn nguyên", "Núi trẻ", "Hoang mạc Xa-ha-ra", "Băng"], answer: 0, explain: "Sơn nguyên." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Thiên nhiên trên dãy An-đét không thay đổi theo độ cao.", answer: false, explain: "Thay đổi rõ theo độ cao." },
    { type: 'mcq', q: "Đỉnh A-côn-ca-goa cao khoảng:", options: ["6 961 m", "8 849 m", "4 805 m", "3 147 m"], answer: 0, explain: "6 961 m." },
    { type: 'short', q: "A-côn-ca-goa 6 961 m, Ki-li-man-gia-rô 5 895 m. Chênh lệch bao nhiêu m?", answer: "1066", answerText: "1 066", unit: "m", calc: "6961-5895", explain: "1 066." },
    { type: 'mcq', q: "Đồng bằng rộng nhất Nam Mỹ:", options: ["A-ma-dôn", "Pam-pa", "La Pla-ta", "Ô-ri-nô-cô"], answer: 0, explain: "A-ma-dôn." }
  ]
});
})();
