/* LS&ĐL 8 – Địa lí, Bài 11. Phạm vi Biển Đông. Vùng biển đảo và đặc điểm tự nhiên vùng biển đảo Việt Nam. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-8/dl-bai-11', {
  objectives: [
    "Xác định được phạm vi Biển Đông và các nước, vùng lãnh thổ có chung Biển Đông với Việt Nam.",
    "Trình bày được các bộ phận của vùng biển nước ta theo Luật Biển.",
    "Nêu được đặc điểm tự nhiên vùng biển đảo."
  ],
  intro: "Biển Đông rộng khoảng 3,44 triệu km², là một trong những biển lớn của Thái Bình Dương. Vùng biển Việt Nam là một phần của Biển Đông.",
  steps: [
    { title: "Phạm vi Biển Đông", html: "<p>Biển Đông là biển tương đối kín, rộng khoảng <b>3,44 triệu km²</b>, trải từ khoảng 3°N đến 26°B. Có 9 nước tiếp giáp: Việt Nam, Trung Quốc, Phi-líp-pin, Ma-lai-xi-a, Bru-nây, In-đô-nê-xi-a, Xin-ga-po, Thái Lan, Cam-pu-chia.</p>",
      svg: S.sketchMap({ title: "Biển Đông và các quần đảo (giản lược)", areas: [{ pts: [[60, 0], [200, 0], [190, 80], [230, 140], [220, 230], [160, 300], [60, 300]], label: "Đất liền", lx: 110, ly: 150, fill: "#bbf7d0" }, { pts: [[440, 40], [520, 40], [520, 170], [450, 170]], label: "Phi-líp-pin", lx: 480, ly: 100 }], lines: [], points: [{ x: 300, y: 90, label: "QĐ Hoàng Sa" }, { x: 360, y: 200, label: "QĐ Trường Sa" }], note: 'Lược đồ giản lược, không theo tỉ lệ.' }), caption: "QĐ: quần đảo. Hoàng Sa thuộc thành phố Đà Nẵng; Trường Sa thuộc tỉnh Khánh Hoà." },
    { title: "Các vùng biển theo Luật Biển", html: "<p>Theo Công ước của Liên hợp quốc về Luật Biển năm 1982 và Luật Biển Việt Nam năm 2012:</p>",
      svg: S.table({ title: "Các vùng biển (tính từ đường cơ sở)", head: ["Vùng biển", "Chiều rộng"], rows: [["Nội thuỷ", "Phía trong đường cơ sở"], ["Lãnh hải", "12 hải lí"], ["Vùng tiếp giáp lãnh hải", "12 hải lí (ngoài lãnh hải)"], ["Vùng đặc quyền kinh tế", "200 hải lí"], ["Thềm lục địa", "Đáy biển kéo dài"]], colW: 250 }), caption: "1 hải lí = 1 852 m." },
    { title: "Đặc điểm tự nhiên", html: "<ul><li>Khí hậu biển mang tính nhiệt đới gió mùa; nhiệt độ nước biển tầng mặt cao.</li><li>Có hơn 4 000 đảo lớn nhỏ (theo số liệu thường dùng); nhiều vũng vịnh đẹp: Hạ Long, Cam Ranh.</li><li>Độ muối trung bình khoảng 32 – 33‰.</li></ul>" },
    { title: "Ghi nhớ", html: "<div class=\"box key\">Biển Đông rộng khoảng 3,44 triệu km²; vùng biển Việt Nam gồm nội thuỷ, lãnh hải (12 hải lí), vùng tiếp giáp, vùng đặc quyền kinh tế (200 hải lí), thềm lục địa.</div>" }
  ],
  summary: "Biển Đông rộng khoảng 3,44 triệu km², có 9 nước tiếp giáp. Theo Công ước Luật Biển 1982 và Luật Biển Việt Nam 2012, vùng biển nước ta gồm nội thuỷ, lãnh hải (12 hải lí), vùng tiếp giáp lãnh hải, vùng đặc quyền kinh tế (200 hải lí tính từ đường cơ sở) và thềm lục địa. Vùng biển có khí hậu nhiệt đới gió mùa, nhiều đảo, vũng vịnh; quần đảo Hoàng Sa (Đà Nẵng), Trường Sa (Khánh Hoà).",
  examples: [
    { title: "Tính", problem: "12 hải lí bằng bao nhiêu km (1 hải lí = 1 852 m)?", solution: "12 × 1 852 = 22 224 m ≈ 22,2 km." },
    { title: "Tính", problem: "200 hải lí bằng bao nhiêu km?", solution: "200 × 1,852 = 370,4 km." },
    { title: "Xác định", problem: "Quần đảo Trường Sa thuộc tỉnh nào?", solution: "Khánh Hoà." }
  ],
  exercises: [
    { question: "Biển Đông rộng khoảng bao nhiêu?", hints: ["Hơn 3 triệu km².", "3,4…"], solution: "Khoảng 3,44 triệu km²." },
    { question: "Lãnh hải rộng bao nhiêu hải lí?", hints: ["Một chục và …", "…"], solution: "12 hải lí." },
    { question: "24 hải lí bằng bao nhiêu m?", hints: ["24 × 1 852.", "Hơn 44 nghìn."], solution: "44 448 m." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Lãnh hải Việt Nam rộng 12 hải lí.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Quần đảo Hoàng Sa thuộc:", options: ["Thành phố Đà Nẵng", "Tỉnh Khánh Hoà", "Tỉnh Quảng Ninh", "TP Hồ Chí Minh"], answer: 0, explain: "Đà Nẵng." },
    { type: 'short', q: "200 hải lí bằng bao nhiêu km (1 hải lí = 1,852 km)?", answer: "370.4", answerText: "370,4", unit: "km", calc: "200*1.852", explain: "370,4." },
    { type: 'mcq', q: "Số nước tiếp giáp Biển Đông:", options: ["9", "5", "12", "3"], answer: 0, explain: "9 nước." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Vùng đặc quyền kinh tế rộng 12 hải lí.", answer: false, explain: "200 hải lí tính từ đường cơ sở." },
    { type: 'mcq', q: "Luật Biển Việt Nam được thông qua năm:", options: ["2012", "1982", "2002", "1992"], answer: 0, explain: "2012." },
    { type: 'short', q: "12 hải lí bằng bao nhiêu m (1 hải lí = 1 852 m)?", answer: "22224", answerText: "22 224", unit: "m", calc: "12*1852", explain: "22 224." },
    { type: 'mcq', q: "Vịnh nổi tiếng là Di sản thiên nhiên thế giới:", options: ["Hạ Long", "Cam Ranh", "Vân Phong", "Xuân Đài"], answer: 0, explain: "Hạ Long." }
  ]
});
})();
