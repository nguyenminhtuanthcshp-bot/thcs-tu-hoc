/* LS&ĐL 9 – Lịch sử, Bài 14. Việt Nam kháng chiến chống thực dân Pháp xâm lược giai đoạn 1946 – 1950. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-9/ls-bai-14', {
  objectives: [
    "Nêu được nguyên nhân bùng nổ cuộc kháng chiến toàn quốc.",
    "Trình bày được đường lối kháng chiến.",
    "Trình bày được chiến dịch Việt Bắc thu – đông 1947 và chiến dịch Biên giới thu – đông 1950."
  ],
  intro: "Đêm 19/12/1946, tiếng súng kháng chiến nổ ra ở Hà Nội. Chủ tịch Hồ Chí Minh kêu gọi: “Chúng ta thà hi sinh tất cả, chứ nhất định không chịu mất nước”.",
  steps: [
    { title: "Kháng chiến toàn quốc", html: "<p>Pháp bội ước, gửi tối hậu thư đòi ta giải giáp. Đêm <b>19/12/1946</b>, cuộc kháng chiến toàn quốc bùng nổ; Chủ tịch Hồ Chí Minh ra Lời kêu gọi toàn quốc kháng chiến.</p>" },
    { title: "Đường lối kháng chiến", html: "<div class=\"box key\">Kháng chiến <b>toàn dân, toàn diện, lâu dài, dựa vào sức mình là chính</b>.</div>",
      svg: S.mindmap({ center: "Đường lối kháng chiến", branches: [{ title: "Toàn dân", items: ["Mọi người dân"] }, { title: "Toàn diện", items: ["Quân sự", "Chính trị", "Kinh tế", "Văn hoá"] }, { title: "Lâu dài", items: ["Chuyển hoá lực lượng"] }, { title: "Tự lực", items: ["Dựa vào sức mình"] }], w: 640, size: 13 }), caption: "Đường lối được nêu trong các văn kiện của Đảng." },
    { title: "Việt Bắc thu – đông 1947", html: "<p>Pháp tấn công lên Việt Bắc (10/<b>1947</b>) hòng tiêu diệt cơ quan đầu não kháng chiến. Sau hơn 2 tháng, ta đánh bại cuộc tấn công, bảo vệ căn cứ địa.</p>" },
    { title: "Biên giới thu – đông 1950", html: "<p>Ta chủ động mở chiến dịch (9 – 10/<b>1950</b>), giải phóng biên giới Việt – Trung, khai thông đường liên lạc quốc tế, giành quyền chủ động chiến lược.</p>",
      svg: S.timeline({ title: "1946 – 1950", items: [{ y: "19/12/1946", s: "Toàn quốc kháng chiến" }, { y: "10/1947", s: "Việt Bắc" }, { y: "1950", s: "Biên giới" }] }), caption: "Các mốc chính." }
  ],
  summary: "Ngày 19/12/1946, kháng chiến toàn quốc bùng nổ. Đường lối: toàn dân, toàn diện, lâu dài, dựa vào sức mình là chính. Chiến thắng Việt Bắc thu – đông 1947 làm phá sản kế hoạch “đánh nhanh thắng nhanh” của Pháp. Chiến dịch Biên giới thu – đông 1950 giúp ta giành quyền chủ động chiến lược.",
  examples: [
    { title: "Tính", problem: "Từ 1946 đến 1954 cuộc kháng chiến chống Pháp kéo dài mấy năm?", solution: "8 năm (gần 9 năm nếu tính từ 23/9/1945)." },
    { title: "So sánh", problem: "Điểm khác giữa chiến dịch 1947 và 1950?", solution: "1947 ta phản công cuộc tấn công của địch; 1950 ta chủ động mở chiến dịch tiến công." },
    { title: "Giải thích", problem: "Vì sao kháng chiến phải lâu dài?", solution: "Tương quan lực lượng ban đầu chênh lệch, cần thời gian để chuyển hoá thế và lực." }
  ],
  exercises: [
    { question: "Kháng chiến toàn quốc ngày nào?", hints: ["Cuối năm 1946.", "Ngày 19/…"], solution: "19/12/1946." },
    { question: "Kế hoạch của Pháp bị phá sản sau Việt Bắc 1947?", hints: ["Muốn thắng nhanh.", "“Đánh nhanh …”"], solution: "Kế hoạch “đánh nhanh thắng nhanh”." },
    { question: "Chiến dịch mở năm 1950?", hints: ["Gần Trung Quốc.", "Biên …"], solution: "Chiến dịch Biên giới." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Cuộc kháng chiến toàn quốc chống Pháp bùng nổ ngày 19/12/1946.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Chiến dịch giúp ta giành quyền chủ động chiến lược:", options: ["Biên giới thu – đông 1950", "Việt Bắc 1947", "Điện Biên Phủ", "Hoà Bình"], answer: 0, explain: "Biên giới 1950." },
    { type: 'short', q: "Từ 1947 đến 1950 là bao nhiêu năm?", answer: "3", unit: "năm", calc: "1950-1947", explain: "3." },
    { type: 'mcq', q: "Đường lối kháng chiến không có nội dung nào?", options: ["Dựa hoàn toàn vào nước ngoài", "Toàn dân", "Toàn diện", "Lâu dài"], answer: 0, explain: "Dựa vào sức mình là chính." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Chiến dịch Việt Bắc năm 1947 do ta chủ động mở.", answer: false, explain: "Ta phản công cuộc tấn công của Pháp." },
    { type: 'mcq', q: "Mục tiêu của Pháp khi tấn công Việt Bắc:", options: ["Tiêu diệt cơ quan đầu não kháng chiến", "Chiếm Sài Gòn", "Mở đường sang Lào", "Chiếm Huế"], answer: 0, explain: "Tiêu diệt đầu não." },
    { type: 'short', q: "Từ 1946 đến 2026 là bao nhiêu năm?", answer: "80", unit: "năm", calc: "2026-1946", explain: "80." },
    { type: 'mcq', q: "Ai ra Lời kêu gọi toàn quốc kháng chiến?", options: ["Hồ Chí Minh", "Võ Nguyên Giáp", "Trường Chinh", "Phạm Văn Đồng"], answer: 0, explain: "Hồ Chí Minh." }
  ]
});
})();
