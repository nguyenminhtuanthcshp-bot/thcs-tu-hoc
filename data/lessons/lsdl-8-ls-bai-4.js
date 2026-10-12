/* LS&ĐL 8 – Lịch sử, Bài 4. Đông Nam Á từ nửa sau thế kỉ XVI đến giữa thế kỉ XIX. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-8/ls-bai-4', {
  objectives: [
    "Trình bày được quá trình xâm nhập của tư bản phương Tây vào Đông Nam Á.",
    "Nêu được tình hình chính trị, kinh tế, văn hoá Đông Nam Á dưới ách đô hộ.",
    "Mô tả được các cuộc đấu tranh chống thực dân tiêu biểu."
  ],
  intro: "Năm 1511, người Bồ Đào Nha chiếm Ma-lắc-ca – cảng biển buôn bán sầm uất bậc nhất Đông Nam Á. Từ đó, thực dân phương Tây từng bước xâm nhập khu vực.",
  steps: [
    { title: "Thực dân phương Tây xâm nhập", html: "<p>Tóm tắt:</p>",
      svg: S.table({ title: "Thực dân xâm nhập Đông Nam Á", head: ["Thực dân", "Nơi xâm chiếm (chủ yếu)"], rows: [["Bồ Đào Nha", "Ma-lắc-ca (1511)"], ["Tây Ban Nha", "Phi-líp-pin (từ 1565)"], ["Hà Lan", "In-đô-nê-xi-a"], ["Anh", "Mã Lai, Miến Điện, Xin-ga-po"]], colW: 250 }), caption: "Xiêm (Thái Lan) là nước duy nhất giữ được độc lập." },
    { title: "Chính sách cai trị", html: "<ul><li>Chính trị: chia để trị, dùng tầng lớp phong kiến địa phương làm tay sai.</li><li>Kinh tế: vơ vét tài nguyên, bắt dân trồng cây xuất khẩu (cà phê, mía, hồ tiêu).</li><li>Văn hoá: truyền bá đạo Thiên Chúa, hạn chế giáo dục.</li></ul>" },
    { title: "Đấu tranh chống thực dân", html: "<p>Nhân dân Đông Nam Á nổi dậy ở nhiều nơi, tiêu biểu là cuộc khởi nghĩa của Đi-pô-nê-gô-rô ở In-đô-nê-xi-a (1825 – 1830).</p>",
      svg: S.sketchMap({ title: "Một số nơi bị thực dân chiếm (minh hoạ)", areas: [{ pts: [[120, 20], [260, 20], [250, 120], [200, 150], [150, 120]], label: "Lục địa ĐNÁ", lx: 190, ly: 70 }, { pts: [[210, 160], [260, 160], [260, 250], [220, 250]], label: "Mã Lai", lx: 238, ly: 205 }, { pts: [[300, 200], [560, 220], [560, 270], [300, 260]], label: "In-đô-nê-xi-a", lx: 430, ly: 240 }, { pts: [[420, 40], [480, 40], [480, 170], [430, 170]], label: "Phi-líp-pin", lx: 450, ly: 100 }], lines: [], points: [{ x: 225, y: 195, label: "Ma-lắc-ca", left: true }], note: 'Lược đồ giản lược, không theo tỉ lệ.' }), caption: "ĐNÁ: Đông Nam Á. Hình dạng chỉ mang tính tượng trưng." },
    { title: "Ghi nhớ", html: "<div class=\"box key\">Từ thế kỉ XVI, thực dân phương Tây từng bước xâm chiếm Đông Nam Á; nhân dân liên tục đấu tranh; chỉ Xiêm giữ được độc lập.</div>" }
  ],
  summary: "Từ thế kỉ XVI, thực dân phương Tây xâm nhập Đông Nam Á: Bồ Đào Nha chiếm Ma-lắc-ca (1511), Tây Ban Nha chiếm Phi-líp-pin (từ 1565), Hà Lan chiếm In-đô-nê-xi-a, Anh chiếm Mã Lai, Miến Điện. Chúng chia để trị, vơ vét tài nguyên, truyền đạo. Nhân dân nổi dậy, như khởi nghĩa Đi-pô-nê-gô-rô (1825 – 1830). Xiêm giữ được độc lập.",
  examples: [
    { title: "Tính", problem: "Từ 1511 đến 1565 là bao nhiêu năm?", solution: "54 năm." },
    { title: "Xác định", problem: "Hà Lan chủ yếu xâm chiếm nước nào?", solution: "In-đô-nê-xi-a." },
    { title: "Giải thích", problem: "Vì sao thực dân muốn chiếm Ma-lắc-ca?", solution: "Vì đây là cảng nằm trên tuyến buôn bán quan trọng giữa Ấn Độ Dương và Thái Bình Dương." }
  ],
  exercises: [
    { question: "Nước Đông Nam Á giữ được độc lập?", hints: ["Nay là Thái Lan.", "X…"], solution: "Xiêm." },
    { question: "Thực dân chiếm Phi-líp-pin?", hints: ["Từ năm 1565.", "Tây …"], solution: "Tây Ban Nha." },
    { question: "Khởi nghĩa Đi-pô-nê-gô-rô kéo dài bao nhiêu năm (1825 – 1830)?", hints: ["1830 − 1825.", "…"], solution: "5 năm." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Năm 1511, Bồ Đào Nha chiếm Ma-lắc-ca.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Thực dân xâm chiếm In-đô-nê-xi-a:", options: ["Hà Lan", "Pháp", "Anh", "Mỹ"], answer: 0, explain: "Hà Lan." },
    { type: 'short', q: "Từ 1511 đến 1565 là bao nhiêu năm?", answer: "54", unit: "năm", calc: "1565-1511", explain: "54." },
    { type: 'mcq', q: "Nước Đông Nam Á giữ được độc lập:", options: ["Xiêm", "Miến Điện", "Mã Lai", "Phi-líp-pin"], answer: 0, explain: "Xiêm." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Thực dân phương Tây phát triển mạnh giáo dục cho người bản xứ.", answer: false, explain: "Hạn chế giáo dục." },
    { type: 'mcq', q: "Thủ lĩnh khởi nghĩa ở In-đô-nê-xi-a 1825 – 1830:", options: ["Đi-pô-nê-gô-rô", "Pha Ngừm", "Ra-ma V", "Hô-xê Ri-dan"], answer: 0, explain: "Đi-pô-nê-gô-rô." },
    { type: 'short', q: "Năm 1565 thuộc thế kỉ thứ mấy? (ghi số)", answer: "16", calc: "Math.floor((1565-1)/100)+1", explain: "Thế kỉ XVI." },
    { type: 'mcq', q: "Chính sách cai trị phổ biến của thực dân:", options: ["Chia để trị", "Bình đẳng các dân tộc", "Trả độc lập", "Phát triển công nghiệp bản xứ"], answer: 0, explain: "Chia để trị." }
  ]
});
})();
