/* LS&ĐL 8 – Chủ đề chung, Chủ đề chung 2. Bảo vệ chủ quyền, các quyền và lợi ích hợp pháp của Việt Nam ở Biển Đông. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-8/cdc-2', {
  objectives: [
    "Trình bày được quá trình xác lập và thực thi chủ quyền của Việt Nam ở Biển Đông.",
    "Nêu được vị trí, tầm quan trọng của Biển Đông.",
    "Nêu được chủ trương giải quyết tranh chấp bằng biện pháp hoà bình và trách nhiệm của học sinh."
  ],
  intro: "Ở đảo Lý Sơn (Quảng Ngãi) hằng năm có lễ Khao lề thế lính Hoàng Sa, tưởng nhớ những người lính của đội Hoàng Sa đã ra đi giữ gìn biển đảo.",
  steps: [
    { title: "Quá trình xác lập chủ quyền", html: "<p>Từ thế kỉ XVII, các chúa Nguyễn lập đội Hoàng Sa, đội Bắc Hải ra khai thác, quản lí các đảo. Nhà Nguyễn tiếp tục đo đạc, dựng bia, cắm mốc, ghi vào bản đồ (Đại Nam nhất thống toàn đồ).</p>",
      svg: S.timeline({ title: "Xác lập và bảo vệ chủ quyền", items: [{ y: "TK XVII", s: "Đội Hoàng Sa" }, { y: "1982", s: "Công ước Luật Biển" }, { y: "2002", s: "Tuyên bố DOC" }, { y: "2012", s: "Luật Biển Việt Nam" }] }), caption: "TK: thế kỉ. DOC: Tuyên bố về ứng xử của các bên ở Biển Đông, kí giữa ASEAN và Trung Quốc năm 2002." },
    { title: "Tầm quan trọng của Biển Đông", html: "<ul><li>Nằm trên tuyến hàng hải quốc tế nhộn nhịp nối Thái Bình Dương và Ấn Độ Dương.</li><li>Giàu tài nguyên: dầu khí, hải sản.</li><li>Có ý nghĩa quốc phòng, an ninh quan trọng.</li></ul>",
      svg: S.sketchMap({ title: "Biển Đông và các quần đảo (giản lược)", areas: [{ pts: [[60, 0], [200, 0], [190, 80], [230, 140], [220, 230], [160, 300], [60, 300]], label: "Đất liền", lx: 110, ly: 150, fill: "#bbf7d0" }, { pts: [[440, 40], [520, 40], [520, 170], [450, 170]], label: "Phi-líp-pin", lx: 480, ly: 100 }], lines: [], points: [{ x: 300, y: 90, label: "QĐ Hoàng Sa" }, { x: 360, y: 200, label: "QĐ Trường Sa" }], note: 'Lược đồ giản lược, không theo tỉ lệ.' }), caption: "Vị trí các quần đảo vẽ tương đối." },
    { title: "Giải quyết tranh chấp bằng hoà bình", html: "<p>Việt Nam chủ trương giải quyết các tranh chấp bằng biện pháp hoà bình, trên cơ sở luật pháp quốc tế, đặc biệt là Công ước của Liên hợp quốc về Luật Biển năm 1982 (UNCLOS).</p>" },
    { title: "Trách nhiệm của học sinh", html: "<div class=\"box key\">Học tập, tìm hiểu lịch sử, luật pháp về biển đảo; tuyên truyền, ủng hộ ngư dân, chiến sĩ; bảo vệ môi trường biển.</div>" }
  ],
  summary: "Việt Nam xác lập chủ quyền ở Hoàng Sa, Trường Sa từ thế kỉ XVII qua hoạt động của đội Hoàng Sa, Bắc Hải; nhà Nguyễn tiếp tục thực thi chủ quyền. Biển Đông có vị trí quan trọng về giao thông, tài nguyên, quốc phòng. Việt Nam chủ trương giải quyết tranh chấp bằng biện pháp hoà bình, dựa trên luật pháp quốc tế, nhất là UNCLOS 1982; Luật Biển Việt Nam được thông qua năm 2012.",
  examples: [
    { title: "Tính", problem: "Từ 1982 đến 2012 là bao nhiêu năm?", solution: "30 năm." },
    { title: "Giải thích", problem: "Vì sao nói đội Hoàng Sa là bằng chứng chủ quyền?", solution: "Đây là hoạt động của nhà nước, được tổ chức thường xuyên, có ghi chép trong sử sách." },
    { title: "Liên hệ", problem: "Học sinh có thể làm gì để góp phần bảo vệ biển đảo?", solution: "Học tập, tìm hiểu, tuyên truyền về chủ quyền; giữ gìn môi trường biển." }
  ],
  exercises: [
    { question: "Lễ Khao lề thế lính Hoàng Sa tổ chức ở đâu?", hints: ["Một đảo ở Quảng Ngãi.", "Lý …"], solution: "Đảo Lý Sơn." },
    { question: "Công ước Luật Biển ra đời năm nào?", hints: ["Thế kỉ XX.", "198…"], solution: "Năm 1982." },
    { question: "Từ năm 2002 đến 2026 là bao nhiêu năm?", hints: ["2026 − 2002.", "…"], solution: "24 năm." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Việt Nam chủ trương giải quyết tranh chấp ở Biển Đông bằng biện pháp hoà bình.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Đội thực thi chủ quyền ở Hoàng Sa từ thế kỉ XVII:", options: ["Đội Hoàng Sa", "Đội Thần Sách", "Đội Tiền phong", "Đội Long Vân"], answer: 0, explain: "Đội Hoàng Sa." },
    { type: 'short', q: "Từ 1982 đến 2012 là bao nhiêu năm?", answer: "30", unit: "năm", calc: "2012-1982", explain: "30." },
    { type: 'mcq', q: "Văn bản pháp lí quốc tế quan trọng về biển:", options: ["UNCLOS 1982", "Hiệp ước Nam Cực", "Hiệp ước Rô-ma", "Hoà ước Véc-xai"], answer: 0, explain: "UNCLOS 1982." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Biển Đông không có tuyến hàng hải quốc tế nào.", answer: false, explain: "Có tuyến hàng hải nhộn nhịp." },
    { type: 'mcq', q: "Tuyên bố DOC được kí năm:", options: ["2002", "1982", "2012", "1998"], answer: 0, explain: "2002." },
    { type: 'short', q: "Từ năm 2012 đến năm 2032 là bao nhiêu năm?", answer: "20", unit: "năm", calc: "2032-2012", explain: "20." },
    { type: 'mcq', q: "Trách nhiệm của học sinh với biển đảo:", options: ["Tìm hiểu, tuyên truyền về chủ quyền", "Xả rác ra biển", "Thờ ơ", "Đánh bắt bằng chất nổ"], answer: 0, explain: "Đúng." }
  ]
});
})();
