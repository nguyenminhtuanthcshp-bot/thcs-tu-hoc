/* LS&ĐL 9 – Lịch sử, Bài 5. Phong trào dân tộc dân chủ những năm 1918 – 1930. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-9/ls-bai-5', {
  objectives: [
    "Nêu được chương trình khai thác thuộc địa lần thứ hai của Pháp và tác động đến xã hội Việt Nam.",
    "Trình bày được phong trào yêu nước của tư sản, tiểu tư sản.",
    "Nêu được phong trào công nhân những năm 1918 – 1930."
  ],
  intro: "Sau năm 1918, Pháp đổ vốn vào Đông Dương nhiều chưa từng có. Xã hội Việt Nam vì thế biến đổi ra sao, và ai đứng lên đấu tranh?",
  steps: [
    { title: "Khai thác thuộc địa lần hai", html: "<p>Từ năm <b>1919</b>, Pháp đẩy mạnh khai thác: đồn điền cao su, mỏ than là trọng tâm; giao thông được mở rộng; thuế khoá nặng nề.</p>",
      svg: S.mindmap({ center: "Xã hội Việt Nam sau 1919", branches: [{ title: "Địa chủ", items: ["Phân hoá"] }, { title: "Nông dân", items: ["Bị bần cùng"] }, { title: "Tư sản", items: ["Dân tộc và mại bản"] }, { title: "Tiểu tư sản", items: ["Hăng hái cách mạng"] }, { title: "Công nhân", items: ["Tăng nhanh, giác ngộ"] }], w: 640, size: 13 }), caption: "Các giai cấp, tầng lớp." },
    { title: "Tư sản, tiểu tư sản", html: "<ul><li>Tư sản: phong trào chấn hưng nội hoá, bài trừ ngoại hoá (1919); chống độc quyền cảng Sài Gòn (1923).</li><li>Tiểu tư sản: đòi thả Phan Bội Châu (1925), để tang Phan Châu Trinh (1926); ra các tờ báo tiến bộ.</li></ul>" },
    { title: "Phong trào công nhân", html: "<p>Công nhân ngày càng đấu tranh có tổ chức. Tiêu biểu: bãi công của thợ máy xưởng Ba Son (8/<b>1925</b>) ngăn tàu Pháp chở lính sang Trung Quốc, đánh dấu bước chuyển từ tự phát sang tự giác.</p>",
      svg: S.timeline({ title: "Phong trào 1919 – 1926", items: [{ y: "1919", s: "Chấn hưng nội hoá" }, { y: "1923", s: "Chống độc quyền cảng" }, { y: "8/1925", s: "Bãi công Ba Son" }, { y: "1926", s: "Để tang Phan Châu Trinh" }] }), caption: "Một số sự kiện." },
    { title: "Ghi nhớ", html: "<div class=\"box key\">Những năm 1918 – 1930, phong trào dân tộc dân chủ phát triển sôi nổi với nhiều giai cấp tham gia; khuynh hướng vô sản dần chiếm ưu thế.</div>" }
  ],
  summary: "Sau Chiến tranh thế giới thứ nhất, Pháp tiến hành khai thác thuộc địa lần thứ hai (từ 1919), làm xã hội Việt Nam phân hoá sâu sắc. Tư sản đấu tranh đòi quyền lợi kinh tế; tiểu tư sản đòi thả Phan Bội Châu, để tang Phan Châu Trinh; công nhân đấu tranh ngày càng tự giác, tiêu biểu là bãi công Ba Son (8/1925).",
  examples: [
    { title: "Tính", problem: "Từ 1919 đến 1929 là bao nhiêu năm?", solution: "10 năm." },
    { title: "Giải thích", problem: "Vì sao bãi công Ba Son có ý nghĩa đặc biệt?", solution: "Không chỉ đòi quyền lợi kinh tế mà còn có mục đích chính trị, thể hiện tình đoàn kết quốc tế với cách mạng Trung Quốc." },
    { title: "Nhận xét", problem: "Hạn chế của phong trào tư sản dân tộc?", solution: "Dễ thoả hiệp khi được Pháp nhượng bộ một ít quyền lợi." }
  ],
  exercises: [
    { question: "Thợ máy xưởng nào bãi công năm 1925?", hints: ["Ở Sài Gòn.", "Ba …"], solution: "Xưởng Ba Son." },
    { question: "Năm 1926 có phong trào gì?", hints: ["Liên quan đến một nhà yêu nước mất năm đó.", "Để tang …"], solution: "Để tang Phan Châu Trinh." },
    { question: "Trọng tâm khai thác lần hai?", hints: ["Hai lĩnh vực.", "Cao su và …"], solution: "Đồn điền cao su và mỏ than." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Bãi công Ba Son diễn ra năm 1925.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Phong trào “chấn hưng nội hoá, bài trừ ngoại hoá” do tầng lớp nào khởi xướng?", options: ["Tư sản", "Công nhân", "Nông dân", "Địa chủ"], answer: 0, explain: "Tư sản." },
    { type: 'short', q: "Từ 1925 đến 1930 là bao nhiêu năm?", answer: "5", unit: "năm", calc: "1930-1925", explain: "5." },
    { type: 'mcq', q: "Lĩnh vực Pháp đầu tư nhiều nhất trong khai thác lần hai:", options: ["Nông nghiệp (cao su)", "Công nghiệp nặng", "Hàng không", "Đóng tàu"], answer: 0, explain: "Đồn điền cao su." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Phong trào đòi thả Phan Bội Châu do công nhân lãnh đạo.", answer: false, explain: "Chủ yếu do tiểu tư sản." },
    { type: 'mcq', q: "Giai cấp tăng nhanh về số lượng sau năm 1919:", options: ["Công nhân", "Quý tộc", "Địa chủ phong kiến", "Thương nhân nước ngoài"], answer: 0, explain: "Công nhân." },
    { type: 'short', q: "Phan Châu Trinh mất năm 1926. Từ đó đến 2026 là bao nhiêu năm?", answer: "100", unit: "năm", calc: "2026-1926", explain: "100." },
    { type: 'mcq', q: "Chống độc quyền cảng Sài Gòn năm:", options: ["1923", "1919", "1925", "1930"], answer: 0, explain: "1923." }
  ]
});
})();
