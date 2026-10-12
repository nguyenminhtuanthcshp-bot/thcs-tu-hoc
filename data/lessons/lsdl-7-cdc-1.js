/* LS&ĐL 7 – Chủ đề chung, Chủ đề chung 1. Các cuộc đại phát kiến địa lí. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-7/cdc-1', {
  objectives: [
    "Nêu được nguyên nhân và điều kiện của các cuộc đại phát kiến địa lí.",
    "Trình bày được hành trình của một số nhà hàng hải tiêu biểu.",
    "Phân tích được tác động của các cuộc đại phát kiến địa lí."
  ],
  intro: "Trước thế kỉ XV, người châu Âu chưa biết đến châu Mỹ và chưa đi vòng quanh Trái Đất bằng đường biển. Chỉ trong vài chục năm, những chuyến đi táo bạo đã làm thay đổi bản đồ thế giới.",
  steps: [
    { title: "Nguyên nhân và điều kiện", html: "<ul><li>Nhu cầu vàng bạc, hương liệu, thị trường của châu Âu; con đường buôn bán cũ qua Tây Á bị cản trở.</li><li>Tiến bộ kĩ thuật: la bàn, tàu ca-ra-ven, hiểu biết rằng Trái Đất hình cầu.</li></ul>" },
    { title: "Những hành trình tiêu biểu", html: "<p>Các mốc chính:</p>",
      svg: S.table({ title: "Các cuộc phát kiến địa lí tiêu biểu", head: ["Năm", "Sự kiện"], rows: [["1487 – 1488", "B. Đi-a-xơ tới mũi Hảo Vọng"], ["1492", "C. Cô-lôm-bô tới châu Mỹ"], ["1497 – 1498", "Va-xcô đơ Ga-ma tới Ấn Độ"], ["1519 – 1522", "Ma-gien-lan: vòng quanh Trái Đất"]], colW: 250 }), caption: "Ma-gien-lan mất trên đường đi (1521); đoàn tàu của ông hoàn thành chuyến đi năm 1522." },
    { title: "Hành trình trên bản đồ", html: "<p>Lược đồ minh hoạ hướng đi:</p>",
      svg: S.sketchMap({ title: "Hướng đi của một số nhà hàng hải (minh hoạ)", areas: [{ pts: [[240, 20], [330, 20], [330, 90], [250, 90]], label: "Châu Âu", lx: 290, ly: 55 }, { pts: [[250, 110], [360, 110], [340, 260], [290, 260]], label: "Châu Phi", lx: 310, ly: 170 }, { pts: [[20, 40], [140, 40], [160, 260], [90, 280], [60, 150]], label: "Châu Mỹ", lx: 95, ly: 150 }, { pts: [[420, 60], [580, 60], [580, 170], [430, 170]], label: "Châu Á", lx: 505, ly: 110 }], lines: [{ pts: [[260, 80], [200, 110], [150, 120]], label: "Cô-lôm-bô", color: "#dc2626", lp: [160, 105] }, { pts: [[255, 85], [230, 200], [330, 280], [400, 200], [450, 165]], label: "Ga-ma", color: "#7c3aed", lp: [355, 255] }], points: [], note: 'Lược đồ giản lược, không theo tỉ lệ.' }), caption: "Châu Mỹ được vẽ thu nhỏ, chỉ để minh hoạ hướng đi." },
    { title: "Tác động", html: "<div class=\"box key\">Tích cực: mở ra con đường mới, đem lại hiểu biết mới về Trái Đất, thúc đẩy thương mại thế giới. Tiêu cực: mở đầu quá trình xâm chiếm thuộc địa, buôn bán nô lệ.</div>" }
  ],
  summary: "Từ cuối thế kỉ XV, do nhu cầu hương liệu, vàng bạc, thị trường và nhờ tiến bộ kĩ thuật (la bàn, tàu ca-ra-ven), người châu Âu tiến hành các cuộc phát kiến địa lí: Đi-a-xơ tới mũi Hảo Vọng (1487 – 1488), Cô-lôm-bô tới châu Mỹ (1492), Va-xcô đơ Ga-ma tới Ấn Độ (1497 – 1498), Ma-gien-lan vòng quanh Trái Đất (1519 – 1522). Các cuộc phát kiến mở rộng hiểu biết, thúc đẩy thương mại nhưng cũng mở đầu thời kì xâm chiếm thuộc địa.",
  examples: [
    { title: "Tính", problem: "Chuyến đi vòng quanh Trái Đất kéo dài từ 1519 đến 1522 khoảng bao nhiêu năm?", solution: "Khoảng 3 năm." },
    { title: "Nhân vật", problem: "Ai tìm ra đường biển từ châu Âu sang Ấn Độ qua châu Phi?", solution: "Va-xcô đơ Ga-ma (1497 – 1498)." },
    { title: "Phân tích", problem: "Chuyến đi của Ma-gien-lan chứng minh điều gì?", solution: "Trái Đất hình cầu; có thể đi vòng quanh bằng đường biển." }
  ],
  exercises: [
    { question: "Năm Cô-lôm-bô tới châu Mỹ?", hints: ["Cuối thế kỉ XV.", "Năm 14…"], solution: "Năm 1492." },
    { question: "Từ 1492 đến 1522 là bao nhiêu năm?", hints: ["1522 − 1492.", "Ba chục."], solution: "30 năm." },
    { question: "Nêu một hệ quả tiêu cực của các cuộc phát kiến địa lí.", hints: ["Liên quan đến thuộc địa.", "Hoặc nô lệ."], solution: "Mở đầu quá trình xâm chiếm, cướp bóc thuộc địa và buôn bán nô lệ." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Cô-lôm-bô đến châu Mỹ năm 1492.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Người đầu tiên chỉ huy đoàn tàu đi vòng quanh Trái Đất:", options: ["Ma-gien-lan", "Cô-lôm-bô", "Đi-a-xơ", "Ga-ma"], answer: 0, explain: "Ma-gien-lan (1519 – 1522)." },
    { type: 'short', q: "Từ 1487 đến 1492 là bao nhiêu năm?", answer: "5", unit: "năm", calc: "1492-1487", explain: "5 năm." },
    { type: 'mcq', q: "Loại tàu được dùng trong các cuộc phát kiến:", options: ["Ca-ra-ven", "Tàu hơi nước", "Tàu ngầm", "Thuyền độc mộc"], answer: 0, explain: "Ca-ra-ven." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Va-xcô đơ Ga-ma tìm ra châu Mỹ.", answer: false, explain: "Ông tới Ấn Độ." },
    { type: 'mcq', q: "Đi-a-xơ đi tới:", options: ["Mũi Hảo Vọng", "Ấn Độ", "Châu Mỹ", "Phi-líp-pin"], answer: 0, explain: "Mũi Hảo Vọng." },
    { type: 'short', q: "Từ 1492 đến 1522 là bao nhiêu năm?", answer: "30", unit: "năm", calc: "1522-1492", explain: "30 năm." },
    { type: 'mcq', q: "Tác động tích cực của các cuộc phát kiến:", options: ["Thúc đẩy thương mại thế giới", "Gây chiến tranh", "Buôn bán nô lệ", "Xâm chiếm thuộc địa"], answer: 0, explain: "Thương mại phát triển." }
  ]
});
})();
