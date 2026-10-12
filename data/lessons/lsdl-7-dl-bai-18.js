/* LS&ĐL 7 – Địa lí, Bài 18. Châu Đại Dương. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-7/dl-bai-18', {
  objectives: [
    "Xác định được vị trí, phạm vi châu Đại Dương.",
    "Trình bày được đặc điểm tự nhiên của lục địa Ô-xtrây-li-a và các đảo.",
    "Trình bày được đặc điểm dân cư, xã hội và khai thác tự nhiên ở Ô-xtrây-li-a."
  ],
  intro: "Chuột túi (căng-gu-ru) và gấu túi (cô-a-la) chỉ sống tự nhiên ở Ô-xtrây-li-a. Châu Đại Dương có nhiều loài động vật độc đáo.",
  steps: [
    { title: "Vị trí, phạm vi", html: "<p>Châu Đại Dương rộng khoảng <b>8,5 triệu km²</b>, nhỏ nhất thế giới, gồm <b>lục địa Ô-xtrây-li-a</b> (khoảng 7,7 triệu km²) và các đảo, quần đảo ở Thái Bình Dương: Niu Di-len, Mê-la-nê-di, Mi-crô-nê-di, Pô-li-nê-di.</p>",
      svg: S.pieChart({ title: "Diện tích châu Đại Dương (làm tròn)", parts: [{ v: 91, label: "Lục địa Ô-xtrây-li-a: khoảng 91%" }, { v: 9, label: "Các đảo: khoảng 9%" }] }), caption: "7,7 : 8,5 ≈ 91% (làm tròn)." },
    { title: "Tự nhiên Ô-xtrây-li-a", html: "<ul><li>Địa hình: phía tây là sơn nguyên, giữa là đồng bằng, phía đông là dãy Trường Sơn Ô-xtrây-li-a.</li><li>Khí hậu khô hạn; hoang mạc chiếm phần lớn nội địa.</li><li>Sinh vật độc đáo: thú có túi, cây bạch đàn.</li></ul>" },
    { title: "Các đảo", html: "<p>Phần lớn các đảo có khí hậu nóng ẩm, rừng nhiệt đới; nhiều đảo san hô. Niu Di-len có khí hậu ôn hoà.</p>" },
    { title: "Dân cư, kinh tế Ô-xtrây-li-a", html: "<p>Dân số khoảng <b>27 triệu</b> (2024), phần lớn gốc Âu và người nhập cư từ châu Á; người bản địa là thổ dân Ô-xtrây-li-a. Dân cư tập trung ở ven biển đông nam. Kinh tế phát triển: khai khoáng, chăn nuôi cừu, bò, trồng lúa mì, du lịch.</p>",
      svg: S.table({ title: "Ô-xtrây-li-a", head: ["Nội dung", "Đặc điểm"], rows: [["Thủ đô", "Can-bê-ra"], ["Đô thị lớn", "Xít-ni, Men-bơn"], ["Vật nuôi", "Cừu, bò"], ["Khoáng sản", "Sắt, than, vàng"]], colW: 250 }), caption: "Ô-xtrây-li-a xuất khẩu nhiều quặng sắt, than, len." }
  ],
  summary: "Châu Đại Dương rộng khoảng 8,5 triệu km², nhỏ nhất thế giới, gồm lục địa Ô-xtrây-li-a và các đảo ở Thái Bình Dương. Ô-xtrây-li-a có khí hậu khô hạn, hoang mạc rộng, sinh vật độc đáo (thú có túi). Các đảo phần lớn nóng ẩm. Ô-xtrây-li-a có khoảng 27 triệu dân, tập trung ven biển đông nam, kinh tế phát triển với khai khoáng, chăn nuôi, du lịch.",
  examples: [
    { title: "Tính", problem: "Châu Đại Dương (8,5) trừ lục địa Ô-xtrây-li-a (7,7) còn bao nhiêu triệu km²?", solution: "0,8 triệu km²." },
    { title: "Giải thích", problem: "Vì sao nội địa Ô-xtrây-li-a khô hạn?", solution: "Chí tuyến Nam đi qua giữa lục địa, có áp cao; dãy núi phía đông chắn gió ẩm từ biển." },
    { title: "Nhận biết", problem: "Thủ đô Ô-xtrây-li-a là gì?", solution: "Can-bê-ra." }
  ],
  exercises: [
    { question: "Kể một loài thú có túi.", hints: ["Nhảy bằng hai chân sau.", "Căng-…"], solution: "Căng-gu-ru (chuột túi)." },
    { question: "Thủ đô của Ô-xtrây-li-a?", hints: ["Không phải Xít-ni.", "Can-…"], solution: "Can-bê-ra." },
    { question: "Dân cư Ô-xtrây-li-a tập trung ở đâu?", hints: ["Gần biển.", "Phía đông nam."], solution: "Ven biển đông nam." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Châu Đại Dương là châu lục nhỏ nhất thế giới.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Thủ đô của Ô-xtrây-li-a:", options: ["Can-bê-ra", "Xít-ni", "Men-bơn", "Ôc-len"], answer: 0, explain: "Can-bê-ra." },
    { type: 'short', q: "Châu Đại Dương 8,5 triệu km², Ô-xtrây-li-a 7,7 triệu km². Các đảo bao nhiêu triệu km²?", answer: "0.8", answerText: "0,8", unit: "triệu km²", calc: "8.5-7.7", explain: "0,8." },
    { type: 'mcq', q: "Động vật đặc trưng của Ô-xtrây-li-a:", options: ["Căng-gu-ru", "Gấu trúc", "Hổ", "Lạc đà"], answer: 0, explain: "Căng-gu-ru." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Nội địa Ô-xtrây-li-a có khí hậu mưa nhiều quanh năm.", answer: false, explain: "Khô hạn, nhiều hoang mạc." },
    { type: 'mcq', q: "Vật nuôi quan trọng của Ô-xtrây-li-a:", options: ["Cừu", "Tuần lộc", "Trâu nước", "Voi"], answer: 0, explain: "Cừu." },
    { type: 'short', q: "Ô-xtrây-li-a có khoảng 27 triệu dân; nếu 80% sống ở đô thị thì là bao nhiêu triệu người? (tỉ lệ minh hoạ)", answer: "21.6", answerText: "21,6", unit: "triệu người", calc: "27*80/100", explain: "27 × 80% = 21,6." },
    { type: 'mcq', q: "Quần đảo thuộc châu Đại Dương:", options: ["Pô-li-nê-di", "Ăng-ti", "Ha-oai thuộc châu Mỹ", "Ca-na-ri"], answer: 0, explain: "Pô-li-nê-di." }
  ]
});
})();
