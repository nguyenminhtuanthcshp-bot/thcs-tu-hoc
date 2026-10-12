/* LS&ĐL 9 – Địa lí, Bài 8. Thực hành: Xác định các trung tâm công nghiệp chính ở nước ta. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-9/dl-bai-8', {
  objectives: [
    "Xác định được các trung tâm công nghiệp chính trên lược đồ.",
    "Nhận xét được sự phân bố các trung tâm công nghiệp.",
    "Giải thích được vì sao các trung tâm tập trung ở một số khu vực."
  ],
  intro: "Nếu đánh dấu các trung tâm công nghiệp lớn lên bản đồ, em sẽ thấy chúng tụ lại ở hai đầu đất nước. Vì sao vậy?",
  steps: [
    { title: "Lược đồ", html: "<p>Các trung tâm công nghiệp lớn trên lược đồ giản lược:</p>",
      svg: S.sketchMap({ title: "Một số trung tâm công nghiệp (giản lược)", areas: [{ pts: [[170, 10], [300, 20], [290, 70], [240, 95], [262, 150], [290, 200], [280, 250], [230, 285], [200, 270], [245, 230], [255, 190], [225, 140], [200, 90], [160, 60]], label: "", lx: 0, ly: 0, fill: "#e0f2fe" }], lines: [], points: [{ x: 225, y: 55, label: "Hà Nội", left: true }, { x: 262, y: 60, label: "Hải Phòng" }, { x: 270, y: 45, label: "Quảng Ninh" }, { x: 278, y: 148, label: "Đà Nẵng" }, { x: 240, y: 250, label: "TP Hồ Chí Minh", left: true }, { x: 262, y: 243, label: "Đồng Nai" }], note: 'Lược đồ giản lược, không theo tỉ lệ.' }), caption: "Vị trí chỉ mang tính tương đối." },
    { title: "Hai khu vực tập trung", html: "<ul><li>Đồng bằng sông Hồng và phụ cận: Hà Nội, Hải Phòng, Quảng Ninh, Bắc Ninh…</li><li>Đông Nam Bộ: TP Hồ Chí Minh (từ 2025 gồm cả Bình Dương, Bà Rịa – Vũng Tàu cũ), Đồng Nai…</li></ul>" },
    { title: "Giải thích", html: "<p>Bảng nhân tố:</p>",
      svg: S.table({ title: "Vì sao tập trung?", head: ["Nhân tố", "Biểu hiện"], rows: [["Vị trí", "Gần cảng, đầu mối giao thông"], ["Lao động", "Đông, có tay nghề"], ["Hạ tầng", "Khu công nghiệp, điện, nước"], ["Thị trường", "Đô thị lớn, xuất khẩu"]], colW: 250 }), caption: "Nhiều nhân tố cùng tác động." },
    { title: "Cách làm bài", html: "<div class=\"box key\">Xác định trung tâm trên lược đồ → lập bảng tên trung tâm, ngành chính → nhận xét sự phân bố → giải thích bằng các nhân tố vị trí, lao động, hạ tầng, thị trường.</div>" }
  ],
  summary: "Các trung tâm công nghiệp lớn tập trung ở hai khu vực: Đồng bằng sông Hồng và phụ cận (Hà Nội, Hải Phòng, Quảng Ninh…) và Đông Nam Bộ (TP Hồ Chí Minh, Đồng Nai…). Nguyên nhân: vị trí thuận lợi, lao động đông, hạ tầng tốt, thị trường lớn. Miền núi ít trung tâm do hạ tầng, lao động hạn chế.",
  examples: [
    { title: "Nhận xét", problem: "Phân bố trung tâm công nghiệp có đều không?", solution: "Không đều: tập trung ở ĐB sông Hồng và Đông Nam Bộ, thưa ở miền núi." },
    { title: "Giải thích", problem: "Vì sao Hải Phòng là trung tâm công nghiệp lớn?", solution: "Có cảng biển lớn, giao thông thuận lợi, gần Hà Nội." },
    { title: "Liên hệ", problem: "Tỉnh em có khu công nghiệp nào?", solution: "Học sinh tự tìm hiểu tên, ngành chính." }
  ],
  exercises: [
    { question: "Trung tâm công nghiệp lớn nhất phía Nam?", hints: ["Thành phố đông dân nhất.", "TP …"], solution: "TP Hồ Chí Minh." },
    { question: "Trung tâm gắn với than?", hints: ["Vùng Đông Bắc.", "Quảng …"], solution: "Quảng Ninh (Hạ Long, Cẩm Phả)." },
    { question: "Nhân tố hạ tầng gồm gì?", hints: ["Điện, nước…", "Khu công nghiệp…"], solution: "Khu công nghiệp, điện, nước, giao thông." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Trung tâm công nghiệp nước ta tập trung chủ yếu ở ĐB sông Hồng và Đông Nam Bộ.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Trung tâm công nghiệp ở Đông Nam Bộ:", options: ["TP Hồ Chí Minh", "Hải Phòng", "Hà Nội", "Quảng Ninh"], answer: 0, explain: "TP Hồ Chí Minh." },
    { type: 'short', q: "Lược đồ có 6 trung tâm; 3 ở miền Bắc, 1 ở miền Trung. Số trung tâm ở miền Nam?", answer: "2", unit: "trung tâm", calc: "6-3-1", explain: "2." },
    { type: 'mcq', q: "Nhân tố giúp Hải Phòng phát triển công nghiệp:", options: ["Cảng biển", "Cao nguyên badan", "Rừng nguyên sinh", "Sa mạc"], answer: 0, explain: "Cảng biển." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Miền núi có nhiều trung tâm công nghiệp lớn nhất cả nước.", answer: false, explain: "Miền núi ít trung tâm." },
    { type: 'mcq', q: "Từ năm 2025, Bình Dương cũ thuộc:", options: ["TP Hồ Chí Minh", "Đồng Nai", "Tây Ninh", "Bình Phước"], answer: 0, explain: "TP Hồ Chí Minh." },
    { type: 'short', q: "Hà Nội rộng 3 359,84 km², TP Hồ Chí Minh rộng 6 772,6 km². TP Hồ Chí Minh rộng hơn bao nhiêu km²?", answer: "3412.76", answerText: "3412,76", unit: "km²", calc: "6772.6-3359.84", explain: "3 412,76." },
    { type: 'mcq', q: "Bước cuối của bài thực hành:", options: ["Giải thích sự phân bố", "Vẽ lược đồ", "Liệt kê", "Tô màu"], answer: 0, explain: "Giải thích." }
  ]
});
})();
