/* LS&ĐL 7 – Địa lí, Bài 13. Vị trí địa lí, phạm vi châu Mỹ. Sự phát kiến ra châu Mỹ. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-7/dl-bai-13', {
  objectives: [
    "Trình bày được khái quát vị trí địa lí, phạm vi châu Mỹ.",
    "Xác định được các bộ phận của châu Mỹ.",
    "Phân tích được hệ quả địa lí – lịch sử của việc Cô-lôm-bô phát kiến ra châu Mỹ."
  ],
  intro: "Năm 1492, Cô-lôm-bô tưởng mình đã đến Ấn Độ. Thực ra ông đã đặt chân tới một châu lục mà người châu Âu chưa biết: <b>châu Mỹ</b>.",
  steps: [
    { title: "Vị trí, phạm vi", html: "<p>Châu Mỹ rộng khoảng <b>42 triệu km²</b>, nằm hoàn toàn ở <b>nửa cầu Tây</b>, trải dài từ vùng cực Bắc đến vùng cận cực Nam. Giáp Thái Bình Dương, Đại Tây Dương, Bắc Băng Dương.</p>" },
    { title: "Các bộ phận", html: "<p>Gồm <b>Bắc Mỹ</b>, <b>Trung Mỹ</b> (eo đất và quần đảo Ăng-ti) và <b>Nam Mỹ</b>. Kênh đào <b>Pa-na-ma</b> (khánh thành năm 1914) cắt qua eo đất, nối Thái Bình Dương với Đại Tây Dương.</p>",
      svg: S.sketchMap({ title: "Các bộ phận châu Mỹ (giản lược)", areas: [{ pts: [[60, 10], [300, 10], [280, 90], [200, 130], [150, 120], [80, 70]], label: "Bắc Mỹ", lx: 180, ly: 60 }, { pts: [[200, 130], [240, 130], [260, 165], [245, 170]], label: "", lx: 0, ly: 0, fill: "#fde68a" }, { pts: [[250, 170], [360, 170], [380, 220], [320, 300], [280, 300], [255, 220]], label: "Nam Mỹ", lx: 315, ly: 230 }], lines: [], points: [{ x: 222, y: 148, label: "Trung Mỹ", left: true }, { x: 252, y: 166, label: "Kênh Pa-na-ma" }, { x: 80, y: 200, label: "Thái Bình Dương" }, { x: 430, y: 100, label: "Đại Tây Dương" }], note: 'Lược đồ giản lược, không theo tỉ lệ.' }), caption: "Hình dạng chỉ mang tính tượng trưng." },
    { title: "Phát kiến ra châu Mỹ", html: "<p>Ngày 12/10/<b>1492</b>, đoàn tàu của Cô-lôm-bô tới quần đảo Ba-ha-ma. Tên châu Mỹ (America) đặt theo nhà hàng hải A-mê-ri-gô Ve-xpu-xi, người nhận ra đây là “Tân thế giới”.</p>" },
    { title: "Hệ quả", html: "<p>Tóm tắt:</p>",
      svg: S.table({ title: "Hệ quả của việc phát kiến châu Mỹ", head: ["Mặt", "Hệ quả"], rows: [["Địa lí", "Hiểu biết mới về thế giới"], ["Kinh tế", "Trao đổi cây trồng, vật nuôi"], ["Xã hội", "Người châu Âu di cư sang"], ["Tiêu cực", "Thổ dân bị tàn sát, nô lệ"]], colW: 250 }), caption: "Ngô, khoai tây, cà chua từ châu Mỹ lan ra toàn thế giới." }
  ],
  summary: "Châu Mỹ rộng khoảng 42 triệu km², nằm hoàn toàn ở nửa cầu Tây, gồm Bắc Mỹ, Trung Mỹ và Nam Mỹ; kênh đào Pa-na-ma (1914) nối hai đại dương. Năm 1492 Cô-lôm-bô tới châu Mỹ. Phát kiến này mở rộng hiểu biết, thúc đẩy trao đổi giữa các châu lục, nhưng cũng dẫn đến tàn sát thổ dân và buôn bán nô lệ.",
  examples: [
    { title: "Tính", problem: "Từ năm 1492 đến năm 2026 là bao nhiêu năm?", solution: "534 năm." },
    { title: "Nhận biết", problem: "Châu Mỹ nằm ở nửa cầu Đông hay Tây?", solution: "Nửa cầu Tây." },
    { title: "Giải thích", problem: "Vai trò của kênh đào Pa-na-ma?", solution: "Rút ngắn đường biển giữa Thái Bình Dương và Đại Tây Dương, không phải vòng qua Nam Mỹ." }
  ],
  exercises: [
    { question: "Tên “châu Mỹ” đặt theo ai?", hints: ["Một nhà hàng hải người Ý.", "A-mê-ri-gô …"], solution: "A-mê-ri-gô Ve-xpu-xi." },
    { question: "Kênh Pa-na-ma khánh thành năm nào?", hints: ["Đầu thế kỉ XX.", "Năm 191…"], solution: "Năm 1914." },
    { question: "Kể một cây trồng có nguồn gốc châu Mỹ.", hints: ["Hạt vàng.", "Hoặc củ."], solution: "Ngô (khoai tây, cà chua)." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Châu Mỹ nằm hoàn toàn ở nửa cầu Tây.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Kênh đào nối Thái Bình Dương và Đại Tây Dương:", options: ["Pa-na-ma", "Xuy-ê", "Ki-en", "Cô-rinh"], answer: 0, explain: "Pa-na-ma." },
    { type: 'short', q: "Từ năm 1492 đến năm 1914 là bao nhiêu năm?", answer: "422", unit: "năm", calc: "1914-1492", explain: "422." },
    { type: 'mcq', q: "Châu Mỹ rộng khoảng:", options: ["42 triệu km²", "10 triệu km²", "30 triệu km²", "8,5 triệu km²"], answer: 0, explain: "42 triệu km²." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Cô-lôm-bô biết rõ mình đã tìm ra một châu lục mới.", answer: false, explain: "Ông tưởng là Ấn Độ." },
    { type: 'mcq', q: "Bộ phận nằm giữa Bắc Mỹ và Nam Mỹ:", options: ["Trung Mỹ", "Tây Mỹ", "Đông Mỹ", "Nam Cực"], answer: 0, explain: "Trung Mỹ." },
    { type: 'short', q: "Châu Mỹ khoảng 42 triệu km², châu Phi khoảng 30 triệu km². Châu Mỹ rộng hơn bao nhiêu triệu km²?", answer: "12", unit: "triệu km²", calc: "42-30", explain: "12." },
    { type: 'mcq', q: "Cây trồng có nguồn gốc châu Mỹ:", options: ["Khoai tây", "Lúa nước", "Chè", "Lúa mì"], answer: 0, explain: "Khoai tây." }
  ]
});
})();
