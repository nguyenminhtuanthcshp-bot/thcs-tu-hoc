/* LS&ĐL 7 – Địa lí, Bài 9. Vị trí địa lí, đặc điểm tự nhiên châu Phi. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-7/dl-bai-9', {
  objectives: [
    "Trình bày được vị trí, hình dạng, kích thước châu Phi.",
    "Phân tích được đặc điểm địa hình, khí hậu, sông hồ.",
    "Trình bày được các môi trường tự nhiên của châu Phi."
  ],
  intro: "Đường Xích đạo đi qua gần chính giữa châu Phi, hai đường chí tuyến cũng đi qua lãnh thổ. Vì thế châu Phi được gọi là “châu lục nóng”.",
  steps: [
    { title: "Vị trí, kích thước", html: "<p>Châu Phi rộng khoảng <b>30,3 triệu km²</b>, lớn thứ ba thế giới; phần lớn lãnh thổ nằm giữa hai chí tuyến. Bờ biển ít bị chia cắt, ít vịnh và bán đảo. Giáp Địa Trung Hải, Đại Tây Dương, Ấn Độ Dương, biển Đỏ.</p>",
      svg: S.sketchMap({ title: "Châu Phi và các đường vĩ tuyến (giản lược)", areas: [{ pts: [[200, 20], [400, 20], [440, 90], [410, 180], [340, 280], [290, 270], [260, 170], [180, 120]], label: "Châu Phi", lx: 300, ly: 130 }], lines: [{ pts: [[150, 60], [470, 60]], label: "Chí tuyến Bắc", color: "#dc2626", lp: [460, 55] }, { pts: [[150, 150], [470, 150]], label: "Xích đạo", color: "#16a34a", lp: [460, 145] }, { pts: [[150, 240], [470, 240]], label: "Chí tuyến Nam", color: "#dc2626", lp: [460, 235] }], points: [], note: 'Lược đồ giản lược, không theo tỉ lệ.' }), caption: "Các vĩ tuyến vẽ tượng trưng." },
    { title: "Địa hình, khoáng sản", html: "<p>Châu Phi như một <b>khối cao nguyên khổng lồ</b>, độ cao trung bình khoảng 750 m; có đỉnh Ki-li-man-gia-rô (khoảng 5 895 m). Khoáng sản phong phú: vàng, kim cương, dầu mỏ, đồng.</p>" },
    { title: "Khí hậu, sông hồ", html: "<p>Khí hậu nóng và khô bậc nhất thế giới; hoang mạc <b>Xa-ha-ra</b> rộng lớn nhất thế giới (hoang mạc nóng). Sông <b>Nin</b> dài khoảng 6 650 km – một trong những sông dài nhất thế giới.</p>",
      svg: S.climateChart({ title: "Biểu đồ khí hậu một trạm hoang mạc nhiệt đới (minh hoạ)", temp: [14, 16, 20, 25, 29, 32, 33, 33, 30, 26, 20, 15], rain: [2, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 2], tMax: 40, rMax: 100, tMin: 0, note: "Số liệu làm tròn, chỉ để minh hoạ." }), caption: "Hoang mạc: nóng, gần như không mưa." },
    { title: "Các môi trường tự nhiên", html: "<p>Đối xứng qua Xích đạo:</p>",
      svg: S.table({ title: "Môi trường tự nhiên châu Phi", head: ["Môi trường", "Đặc điểm"], rows: [["Xích đạo", "Nóng ẩm, rừng rậm"], ["Nhiệt đới", "Xa-van, mùa khô rõ"], ["Hoang mạc", "Xa-ha-ra, Na-míp"], ["Cận nhiệt", "Hai đầu bắc và nam"]], colW: 250 }), caption: "Các môi trường phân bố gần như đối xứng." }
  ],
  summary: "Châu Phi rộng khoảng 30,3 triệu km², phần lớn nằm giữa hai chí tuyến, Xích đạo đi qua gần giữa. Địa hình là khối cao nguyên lớn, độ cao trung bình khoảng 750 m. Khí hậu nóng, khô; hoang mạc Xa-ha-ra rộng lớn. Sông Nin dài khoảng 6 650 km. Các môi trường: xích đạo, nhiệt đới, hoang mạc, cận nhiệt – phân bố gần đối xứng qua Xích đạo.",
  examples: [
    { title: "So sánh", problem: "Châu Phi (khoảng 30 triệu km²) rộng gấp mấy lần châu Âu (khoảng 10 triệu km²)?", solution: "3 lần." },
    { title: "Đọc biểu đồ", problem: "Ở biểu đồ minh hoạ, biên độ nhiệt năm là bao nhiêu?", solution: "33 − 14 = 19 °C." },
    { title: "Giải thích", problem: "Vì sao châu Phi nóng?", solution: "Phần lớn lãnh thổ nằm giữa hai chí tuyến, nhận nhiều nhiệt từ Mặt Trời." }
  ],
  exercises: [
    { question: "Hoang mạc lớn nhất châu Phi?", hints: ["Ở phía bắc.", "Xa-…"], solution: "Xa-ha-ra." },
    { question: "Sông dài nhất châu Phi?", hints: ["Chảy qua Ai Cập.", "N…"], solution: "Sông Nin." },
    { question: "Đỉnh Ki-li-man-gia-rô cao khoảng 5 895 m, đỉnh Mông Blăng khoảng 4 805 m. Chênh lệch?", hints: ["Trừ hai số.", "Khoảng một nghìn."], solution: "1 090 m." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Đường Xích đạo đi qua châu Phi.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Hoang mạc nóng lớn nhất thế giới:", options: ["Xa-ha-ra", "Gô-bi", "Na-míp", "A-ta-ca-ma"], answer: 0, explain: "Xa-ha-ra." },
    { type: 'short', q: "Châu Phi khoảng 30 triệu km², châu Âu khoảng 10 triệu km². Gấp mấy lần?", answer: "3", unit: "lần", calc: "30/10", explain: "3." },
    { type: 'mcq', q: "Địa hình chủ yếu của châu Phi:", options: ["Cao nguyên", "Đồng bằng thấp", "Núi trẻ", "Đảo"], answer: 0, explain: "Cao nguyên." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Bờ biển châu Phi bị chia cắt mạnh, nhiều vịnh, bán đảo.", answer: false, explain: "Ít bị chia cắt." },
    { type: 'mcq', q: "Sông Nin đổ ra:", options: ["Địa Trung Hải", "Ấn Độ Dương", "Đại Tây Dương", "Biển Đen"], answer: 0, explain: "Địa Trung Hải." },
    { type: 'short', q: "Tháng nóng nhất 33 °C, lạnh nhất 14 °C. Biên độ nhiệt?", answer: "19", unit: "°C", calc: "33-14", explain: "19." },
    { type: 'mcq', q: "Môi trường có rừng rậm nóng ẩm:", options: ["Xích đạo", "Hoang mạc", "Cận nhiệt", "Nhiệt đới khô"], answer: 0, explain: "Xích đạo." }
  ]
});
})();
