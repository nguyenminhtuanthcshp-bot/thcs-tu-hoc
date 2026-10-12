/* LS&ĐL 7 – Địa lí, Bài 1. Vị trí địa lí, đặc điểm tự nhiên châu Âu. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-7/dl-bai-1', {
  objectives: [
    "Trình bày được vị trí địa lí, hình dạng và kích thước châu Âu.",
    "Phân tích được đặc điểm các khu vực địa hình chính.",
    "Trình bày được đặc điểm phân hoá khí hậu; xác định được các sông lớn.",
    "Trình bày được các đới thiên nhiên chủ yếu."
  ],
  intro: "Châu Âu nhỏ thứ hai trong sáu châu lục, nhưng bờ biển bị cắt xẻ mạnh với nhiều bán đảo, vũng vịnh. Thiên nhiên nơi đây có những nét gì riêng?",
  steps: [
    { title: "Vị trí, hình dạng, kích thước", html: "<p>Châu Âu có diện tích khoảng <b>10 triệu km²</b>, nằm chủ yếu trong khoảng vĩ độ 36°B – 71°B. Phía bắc giáp Bắc Băng Dương, phía tây giáp Đại Tây Dương, phía nam giáp Địa Trung Hải, phía đông ngăn cách với châu Á bởi dãy <b>U-ran</b>.</p>",
      svg: S.sketchMap({ title: "Vị trí châu Âu (minh hoạ)", areas: [{ pts: [[120, 60], [420, 40], [470, 120], [430, 250], [300, 260], [150, 230], [100, 150]], label: "Châu Âu", lx: 260, ly: 150 }, { pts: [[470, 40], [600, 30], [600, 280], [440, 270], [480, 140]], label: "Châu Á", lx: 540, ly: 150, fill: "#fde68a" }], lines: [{ pts: [[470, 40], [470, 140], [450, 250]], label: "Dãy U-ran", color: "#92400e", lp: [476, 90] }], points: [{ x: 70, y: 150, label: "Đại Tây Dương" }, { x: 250, y: 285, label: "Địa Trung Hải" }, { x: 250, y: 20, label: "Bắc Băng Dương" }], note: 'Lược đồ giản lược, không theo tỉ lệ.' }), caption: "Vị trí các đại dương ghi tương đối." },
    { title: "Địa hình", html: "<ul><li><b>Đồng bằng</b> chiếm phần lớn diện tích (Đông Âu, Trung Âu, Tây Âu).</li><li><b>Núi già</b> ở phía bắc và trung tâm (Xcan-đi-na-vi, U-ran).</li><li><b>Núi trẻ</b> ở phía nam: An-pơ, Các-pát, Ban-căng; đỉnh Mông Blăng cao khoảng 4 800 m.</li></ul>" },
    { title: "Khí hậu và sông ngòi", html: "<p>Phần lớn châu Âu có khí hậu ôn đới (hải dương ở phía tây, lục địa ở phía đông); phía nam có khí hậu cận nhiệt địa trung hải; phía bắc có khí hậu cực, cận cực. Các sông lớn: <b>Von-ga</b> (dài nhất châu Âu), Đa-nuýp, Rai-nơ.</p>",
      svg: S.climateChart({ title: "Biểu đồ khí hậu một trạm ôn đới hải dương (minh hoạ)", temp: [5, 6, 9, 12, 15, 18, 20, 20, 17, 13, 8, 5], rain: [55, 45, 50, 50, 60, 55, 60, 55, 50, 60, 55, 60], tMax: 40, rMax: 200, tMin: 0, note: "Số liệu làm tròn, chỉ để minh hoạ." }), caption: "Ôn đới hải dương: mùa đông ấm, mùa hạ mát, mưa quanh năm." },
    { title: "Các đới thiên nhiên", html: "<p>Tóm tắt:</p>",
      svg: S.table({ title: "Đới thiên nhiên châu Âu", head: ["Đới", "Đặc điểm"], rows: [["Đới lạnh", "Đài nguyên, ở cực bắc"], ["Đới ôn hoà (phía tây)", "Rừng lá rộng"], ["Đới ôn hoà (phía đông)", "Rừng lá kim, thảo nguyên"], ["Phía nam", "Rừng cây bụi lá cứng"]], colW: 250 }), caption: "Thiên nhiên thay đổi từ bắc xuống nam và từ tây sang đông." }
  ],
  summary: "Châu Âu rộng khoảng 10 triệu km², nằm khoảng từ 36°B đến 71°B, ba mặt giáp biển và đại dương, phía đông giáp châu Á (ranh giới là dãy U-ran). Đồng bằng chiếm phần lớn diện tích; núi già ở phía bắc và trung tâm, núi trẻ ở phía nam. Khí hậu chủ yếu ôn đới, phía nam cận nhiệt địa trung hải. Sông lớn: Von-ga, Đa-nuýp, Rai-nơ. Có đới lạnh và đới ôn hoà.",
  examples: [
    { title: "Tính", problem: "Châu Âu trải từ khoảng 36°B đến 71°B, qua bao nhiêu độ vĩ?", solution: "71 − 36 = 35 độ vĩ." },
    { title: "Đọc biểu đồ", problem: "Ở biểu đồ minh hoạ, tháng nóng nhất bao nhiêu °C, tháng lạnh nhất bao nhiêu °C? Biên độ nhiệt?", solution: "20 °C và 5 °C; biên độ 15 °C." },
    { title: "Giải thích", problem: "Vì sao phía tây châu Âu ấm và ẩm hơn phía đông?", solution: "Do ảnh hưởng của dòng biển nóng Bắc Đại Tây Dương và gió Tây ôn đới từ biển thổi vào." }
  ],
  exercises: [
    { question: "Sông dài nhất châu Âu?", hints: ["Chảy ở Đông Âu, đổ vào biển Ca-xpi.", "Von-…"], solution: "Sông Von-ga." },
    { question: "Dãy núi ngăn cách châu Âu với châu Á?", hints: ["Núi già.", "U-…"], solution: "Dãy U-ran." },
    { question: "Dạng địa hình chiếm phần lớn diện tích châu Âu?", hints: ["Thấp, bằng phẳng.", "Không phải núi."], solution: "Đồng bằng." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Châu Âu có diện tích khoảng 10 triệu km².", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Dãy núi trẻ ở châu Âu:", options: ["An-pơ", "U-ran", "Xcan-đi-na-vi", "Hi-ma-lay-a"], answer: 0, explain: "An-pơ." },
    { type: 'short', q: "Châu Âu trải từ khoảng 36°B đến 71°B. Qua bao nhiêu độ vĩ?", answer: "35", unit: "độ", calc: "71-36", explain: "35." },
    { type: 'mcq', q: "Phía nam châu Âu giáp:", options: ["Địa Trung Hải", "Bắc Băng Dương", "Ấn Độ Dương", "Thái Bình Dương"], answer: 0, explain: "Địa Trung Hải." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Phía đông châu Âu có khí hậu ôn đới hải dương.", answer: false, explain: "Phía đông ôn đới lục địa; phía tây ôn đới hải dương." },
    { type: 'mcq', q: "Sông dài nhất châu Âu:", options: ["Von-ga", "Rai-nơ", "Đa-nuýp", "Nin"], answer: 0, explain: "Von-ga." },
    { type: 'short', q: "Tháng nóng nhất 20 °C, tháng lạnh nhất 5 °C. Biên độ nhiệt năm là bao nhiêu °C?", answer: "15", unit: "°C", calc: "20-5", explain: "15 °C." },
    { type: 'mcq', q: "Đới thiên nhiên chiếm phần lớn diện tích châu Âu:", options: ["Đới ôn hoà", "Đới nóng", "Đới lạnh", "Xích đạo"], answer: 0, explain: "Đới ôn hoà." }
  ]
});
})();
