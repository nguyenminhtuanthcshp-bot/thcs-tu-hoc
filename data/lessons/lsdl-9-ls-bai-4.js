/* LS&ĐL 9 – Lịch sử, Bài 4. Chiến tranh thế giới thứ hai (1939 – 1945). Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-9/ls-bai-4', {
  objectives: [
    "Trình bày được nguyên nhân bùng nổ Chiến tranh thế giới thứ hai.",
    "Nêu được các giai đoạn và diễn biến chính của chiến tranh.",
    "Phân tích được nguyên nhân thắng lợi, vai trò của Liên Xô, Mỹ, Anh và hậu quả của chiến tranh."
  ],
  intro: "Cuộc chiến kéo dài 6 năm, lôi cuốn hơn 70 nước và làm khoảng 60 triệu người chết. Vì sao nó bùng nổ và kết thúc ra sao?",
  steps: [
    { title: "Nguyên nhân", html: "<p>Mâu thuẫn về quyền lợi, thị trường giữa các đế quốc; khủng hoảng 1929 – 1933 làm chủ nghĩa phát xít lên cầm quyền; chính sách nhượng bộ của Anh, Pháp tạo điều kiện cho phát xít bành trướng. Ngày <b>1/9/1939</b> Đức tấn công Ba Lan.</p>" },
    { title: "Diễn biến chính", html: "<p>Các mốc lớn:</p>",
      svg: S.timeline({ title: "Chiến tranh thế giới thứ hai", items: [{ y: "1/9/1939", s: "Đức đánh Ba Lan" }, { y: "22/6/1941", s: "Đức đánh Liên Xô" }, { y: "7/12/1941", s: "Trân Châu Cảng" }, { y: "2/1943", s: "Thắng ở Xta-lin-grát" }, { y: "6/1944", s: "Mặt trận thứ hai" }, { y: "9/5/1945", s: "Đức đầu hàng" }, { y: "2/9/1945", s: "Nhật kí đầu hàng" }] }), caption: "Ngày 6 và 9/8/1945 Mỹ ném bom nguyên tử xuống Hi-rô-si-ma và Na-ga-xa-ki." },
    { title: "Nguyên nhân thắng lợi", html: "<ul><li>Liên Xô là lực lượng đi đầu, đóng vai trò quyết định trong việc tiêu diệt phát xít Đức.</li><li>Mỹ, Anh góp phần quan trọng ở Tây Âu, Bắc Phi, Thái Bình Dương.</li><li>Nhân dân các nước bị chiếm đóng kiên cường kháng chiến.</li></ul>" },
    { title: "Hậu quả", html: "<div class=\"box key\">Khoảng 60 triệu người chết, 90 triệu người bị thương; thiệt hại vật chất khổng lồ. Chủ nghĩa phát xít bị tiêu diệt; cục diện thế giới thay đổi sâu sắc.</div>" }
  ],
  summary: "Chiến tranh thế giới thứ hai (1/9/1939 – 2/9/1945) bùng nổ do mâu thuẫn đế quốc và sự bành trướng của phát xít. Từ 22/6/1941, Liên Xô tham chiến; sau Trân Châu Cảng (7/12/1941) Mỹ tham chiến. Chiến thắng Xta-lin-grát (2/1943) tạo bước ngoặt. Đức đầu hàng ngày 9/5/1945, Nhật kí văn kiện đầu hàng ngày 2/9/1945. Liên Xô, Mỹ, Anh là trụ cột của phe Đồng minh. Khoảng 60 triệu người chết.",
  examples: [
    { title: "Tính", problem: "Chiến tranh kéo dài từ 1/9/1939 đến 2/9/1945 là bao nhiêu năm?", solution: "6 năm." },
    { title: "Giải thích", problem: "Vì sao trận Xta-lin-grát là bước ngoặt?", solution: "Quân Đức bị tiêu diệt lớn; Liên Xô chuyển sang phản công, Đức chuyển sang thế phòng ngự." },
    { title: "Nhận xét", problem: "Vai trò của Liên Xô?", solution: "Lực lượng đi đầu, chịu tổn thất nặng nề nhất, quyết định việc tiêu diệt phát xít Đức." }
  ],
  exercises: [
    { question: "Chiến tranh bùng nổ ngày nào?", hints: ["Đức tấn công Ba Lan.", "Ngày 1/9."], solution: "1/9/1939." },
    { question: "Mỹ tham chiến sau sự kiện gì?", hints: ["Một căn cứ hải quân ở Ha-oai.", "Trân …"], solution: "Nhật tấn công Trân Châu Cảng (7/12/1941)." },
    { question: "Phát xít Đức đầu hàng ngày nào?", hints: ["Tháng 5/1945.", "Ngày 9/…"], solution: "9/5/1945 (giờ Mát-xcơ-va)." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Chiến tranh thế giới thứ hai bùng nổ ngày 1/9/1939.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Trận được coi là bước ngoặt của chiến tranh:", options: ["Xta-lin-grát", "Trân Châu Cảng", "Na-ga-xa-ki", "Ba Lan"], answer: 0, explain: "Xta-lin-grát." },
    { type: 'short', q: "Khoảng 60 triệu người chết, 90 triệu người bị thương. Tổng là bao nhiêu triệu người?", answer: "150", unit: "triệu người", calc: "60+90", explain: "150." },
    { type: 'mcq', q: "Ngày Đức tấn công Liên Xô:", options: ["22/6/1941", "1/9/1939", "7/12/1941", "9/5/1945"], answer: 0, explain: "22/6/1941." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Nhật Bản đầu hàng trước phát xít Đức.", answer: false, explain: "Đức đầu hàng 5/1945, Nhật sau đó." },
    { type: 'mcq', q: "Thành phố bị ném bom nguyên tử ngày 6/8/1945:", options: ["Hi-rô-si-ma", "Tô-ki-ô", "Na-ga-xa-ki", "Ô-xa-ca"], answer: 0, explain: "Hi-rô-si-ma." },
    { type: 'short', q: "Từ 22/6/1941 đến 9/5/1945, theo năm là bao nhiêu năm?", answer: "4", unit: "năm", calc: "1945-1941", explain: "4." },
    { type: 'mcq', q: "Lực lượng đóng vai trò quyết định tiêu diệt phát xít Đức:", options: ["Liên Xô", "Nhật Bản", "I-ta-li-a", "Tây Ban Nha"], answer: 0, explain: "Liên Xô." }
  ]
});
})();
