/* LS&ĐL 8 – Lịch sử, Bài 8. Phong trào Tây Sơn. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-8/ls-bai-8', {
  objectives: [
    "Trình bày được nguyên nhân bùng nổ và những thắng lợi tiêu biểu của phong trào Tây Sơn.",
    "Mô tả được trận Rạch Gầm – Xoài Mút và trận Ngọc Hồi – Đống Đa.",
    "Nêu được vai trò của Nguyễn Huệ – Quang Trung."
  ],
  intro: "Mùng 5 Tết Kỷ Dậu (1789), vua Quang Trung tiến vào Thăng Long sau chiến thắng Ngọc Hồi – Đống Đa. Ngày nay, lễ hội gò Đống Đa vẫn được tổ chức vào mùng 5 Tết.",
  steps: [
    { title: "Khởi nghĩa bùng nổ", html: "<p>Năm <b>1771</b>, ba anh em Nguyễn Nhạc, Nguyễn Huệ, Nguyễn Lữ dựng cờ khởi nghĩa ở Tây Sơn (Gia Lai ngày nay, trước thuộc Bình Định), lật đổ chính quyền chúa Nguyễn ở Đàng Trong.</p>" },
    { title: "Đánh tan quân Xiêm (1785)", html: "<p>Tháng 1/<b>1785</b>, Nguyễn Huệ phục kích trên sông Tiền ở đoạn <b>Rạch Gầm – Xoài Mút</b>, đánh tan quân Xiêm.</p>" },
    { title: "Ra Bắc và đại phá quân Thanh", html: "<p>Năm 1786, Nguyễn Huệ ra Bắc lật đổ họ Trịnh. Cuối năm <b>1788</b>, Nguyễn Huệ lên ngôi hoàng đế (Quang Trung), tiến quân ra Bắc; Tết Kỷ Dậu (<b>1789</b>) đại phá quân Thanh ở <b>Ngọc Hồi – Đống Đa</b>.</p>",
      svg: S.timeline({ title: "Phong trào Tây Sơn", items: [{ y: "1771", s: "Khởi nghĩa ở Tây Sơn" }, { y: "1785", s: "Rạch Gầm – Xoài Mút" }, { y: "1786", s: "Lật đổ họ Trịnh" }, { y: "1789", s: "Ngọc Hồi – Đống Đa" }] }), caption: "Năm 1792, vua Quang Trung qua đời." },
    { title: "Vai trò của Quang Trung", html: "<p>Tóm tắt:</p>",
      svg: S.mindmap({ center: "Nguyễn Huệ – Quang Trung", branches: [{ title: "Quân sự", items: ["Thần tốc, bất ngờ", "Đánh tan Xiêm, Thanh"] }, { title: "Thống nhất", items: ["Xoá bỏ ranh giới chia cắt"] }, { title: "Xây dựng", items: ["Chiếu khuyến nông", "Đề cao chữ Nôm"] }], w: 640, size: 13 }), caption: "Quang Trung là nhà quân sự thiên tài." }
  ],
  summary: "Năm 1771, khởi nghĩa Tây Sơn bùng nổ do ba anh em Nguyễn Nhạc, Nguyễn Huệ, Nguyễn Lữ lãnh đạo, lật đổ chúa Nguyễn. Năm 1785, Nguyễn Huệ đánh tan quân Xiêm ở Rạch Gầm – Xoài Mút; năm 1786 lật đổ họ Trịnh; cuối năm 1788 lên ngôi Quang Trung, Tết Kỷ Dậu 1789 đại phá quân Thanh ở Ngọc Hồi – Đống Đa. Phong trào xoá bỏ chia cắt, bảo vệ độc lập dân tộc.",
  examples: [
    { title: "Tính", problem: "Từ 1771 đến 1789 là bao nhiêu năm?", solution: "18 năm." },
    { title: "Phân tích", problem: "Nét đặc sắc trong cách đánh của Quang Trung?", solution: "Hành quân thần tốc, tấn công bất ngờ vào dịp Tết." },
    { title: "Tính", problem: "Từ năm 1789 đến năm 2029 là bao nhiêu năm?", solution: "240 năm." }
  ],
  exercises: [
    { question: "Trận đánh tan quân Xiêm năm 1785?", hints: ["Trên sông Tiền.", "Rạch …"], solution: "Rạch Gầm – Xoài Mút." },
    { question: "Nguyễn Huệ lên ngôi lấy niên hiệu gì?", hints: ["Năm 1788.", "Quang …"], solution: "Quang Trung." },
    { question: "Từ 1788 đến 1792 vua Quang Trung trị vì khoảng mấy năm?", hints: ["1792 − 1788.", "…"], solution: "Khoảng 4 năm." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Khởi nghĩa Tây Sơn bùng nổ năm 1771.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Trận đại phá quân Thanh:", options: ["Ngọc Hồi – Đống Đa", "Rạch Gầm – Xoài Mút", "Bạch Đằng", "Chi Lăng"], answer: 0, explain: "Ngọc Hồi – Đống Đa." },
    { type: 'short', q: "Từ 1771 đến 1785 là bao nhiêu năm?", answer: "14", unit: "năm", calc: "1785-1771", explain: "14." },
    { type: 'mcq', q: "Quân xâm lược bị đánh tan ở Rạch Gầm – Xoài Mút:", options: ["Xiêm", "Thanh", "Minh", "Pháp"], answer: 0, explain: "Xiêm." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Nguyễn Huệ lên ngôi hoàng đế sau khi đánh tan quân Thanh.", answer: false, explain: "Lên ngôi cuối năm 1788, trước trận Ngọc Hồi – Đống Đa." },
    { type: 'mcq', q: "Thủ lĩnh không thuộc ba anh em Tây Sơn:", options: ["Nguyễn Ánh", "Nguyễn Nhạc", "Nguyễn Huệ", "Nguyễn Lữ"], answer: 0, explain: "Nguyễn Ánh." },
    { type: 'short', q: "Từ 1789 đến 2029 là bao nhiêu năm?", answer: "240", unit: "năm", calc: "2029-1789", explain: "240." },
    { type: 'mcq', q: "Vua Quang Trung qua đời năm:", options: ["1792", "1789", "1802", "1786"], answer: 0, explain: "1792." }
  ]
});
})();
