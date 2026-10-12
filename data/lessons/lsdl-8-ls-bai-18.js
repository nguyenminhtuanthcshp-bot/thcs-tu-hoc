/* LS&ĐL 8 – Lịch sử, Bài 18. Phong trào chống Pháp trong những năm 1885 – 1896. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-8/ls-bai-18', {
  objectives: [
    "Trình bày được nguyên nhân, diễn biến chính của phong trào Cần Vương.",
    "Mô tả được các cuộc khởi nghĩa tiêu biểu.",
    "Nêu được cuộc khởi nghĩa Yên Thế và ý nghĩa của phong trào."
  ],
  intro: "Đêm 4 rạng sáng 5/7/1885, phe chủ chiến trong triều do Tôn Thất Thuyết đứng đầu tấn công quân Pháp ở kinh thành Huế. Cuộc tấn công thất bại, nhưng mở đầu một phong trào lớn.",
  steps: [
    { title: "Chiếu Cần Vương", html: "<p>Sau khi tấn công Pháp thất bại, Tôn Thất Thuyết đưa vua <b>Hàm Nghi</b> ra Tân Sở (Quảng Trị). Ngày <b>13/7/1885</b>, nhân danh vua Hàm Nghi, ông ra <b>chiếu Cần Vương</b>, kêu gọi văn thân, sĩ phu và nhân dân giúp vua cứu nước.</p>" },
    { title: "Các cuộc khởi nghĩa tiêu biểu", html: "<p>Tóm tắt:</p>",
      svg: S.table({ title: "Khởi nghĩa tiêu biểu (1885 – 1896)", head: ["Khởi nghĩa", "Thời gian, lãnh đạo"], rows: [["Ba Đình", "1886 – 1887, Phạm Bành, Đinh Công Tráng"], ["Bãi Sậy", "1883 – 1892, Nguyễn Thiện Thuật"], ["Hương Khê", "1885 – 1896, Phan Đình Phùng"], ["Yên Thế", "1884 – 1913, Hoàng Hoa Thám"]], colW: 250 }), caption: "Hương Khê là cuộc khởi nghĩa lớn nhất trong phong trào Cần Vương." },
    { title: "Khởi nghĩa Yên Thế", html: "<p>Khởi nghĩa nông dân Yên Thế (Bắc Giang) do <b>Hoàng Hoa Thám</b> (Đề Thám) lãnh đạo, kéo dài gần 30 năm (1884 – 1913), không nằm trong phong trào Cần Vương.</p>",
      svg: S.timeline({ title: "Phong trào chống Pháp cuối thế kỉ XIX", items: [{ y: "1884", s: "Khởi nghĩa Yên Thế" }, { y: "13/7/1885", s: "Chiếu Cần Vương" }, { y: "1888", s: "Vua Hàm Nghi bị bắt" }, { y: "1896", s: "Hương Khê kết thúc" }] }), caption: "Phong trào Cần Vương kết thúc năm 1896." },
    { title: "Ý nghĩa", html: "<div class=\"box key\">Thể hiện tinh thần yêu nước, ý chí chống ngoại xâm; tuy thất bại (do thiếu đường lối đúng, chỉ trong khuôn khổ ý thức hệ phong kiến) nhưng để lại nhiều bài học.</div>" }
  ],
  summary: "Sau cuộc tấn công ở kinh thành Huế (7/1885) thất bại, ngày 13/7/1885 Tôn Thất Thuyết nhân danh vua Hàm Nghi ra chiếu Cần Vương. Các khởi nghĩa tiêu biểu: Ba Đình (1886 – 1887), Bãi Sậy (1883 – 1892), Hương Khê (1885 – 1896, lớn nhất). Khởi nghĩa nông dân Yên Thế (1884 – 1913) do Hoàng Hoa Thám lãnh đạo. Phong trào thất bại nhưng thể hiện tinh thần yêu nước.",
  examples: [
    { title: "Tính", problem: "Khởi nghĩa Yên Thế kéo dài từ 1884 đến 1913 là bao nhiêu năm?", solution: "29 năm." },
    { title: "Khái niệm", problem: "“Cần Vương” nghĩa là gì?", solution: "Giúp vua cứu nước." },
    { title: "Phân tích", problem: "Vì sao phong trào Cần Vương thất bại?", solution: "Thiếu đường lối đúng đắn, lãnh đạo là văn thân phong kiến, các cuộc khởi nghĩa lẻ tẻ." }
  ],
  exercises: [
    { question: "Chiếu Cần Vương ban ra ngày nào?", hints: ["Tháng 7 năm 1885.", "Ngày 13."], solution: "13/7/1885." },
    { question: "Lãnh đạo khởi nghĩa Hương Khê?", hints: ["Phan Đình …", "Người Hà Tĩnh."], solution: "Phan Đình Phùng." },
    { question: "Hương Khê kéo dài bao nhiêu năm (1885 – 1896)?", hints: ["1896 − 1885.", "…"], solution: "11 năm." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Chiếu Cần Vương được ban ra năm 1885.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Cuộc khởi nghĩa lớn nhất phong trào Cần Vương:", options: ["Hương Khê", "Ba Đình", "Bãi Sậy", "Yên Thế"], answer: 0, explain: "Hương Khê." },
    { type: 'short', q: "Từ 1884 đến 1913 là bao nhiêu năm?", answer: "29", unit: "năm", calc: "1913-1884", explain: "29." },
    { type: 'mcq', q: "Lãnh đạo khởi nghĩa Yên Thế:", options: ["Hoàng Hoa Thám", "Phan Đình Phùng", "Nguyễn Thiện Thuật", "Đinh Công Tráng"], answer: 0, explain: "Hoàng Hoa Thám." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Khởi nghĩa Yên Thế nằm trong phong trào Cần Vương.", answer: false, explain: "Là khởi nghĩa nông dân tự phát." },
    { type: 'mcq', q: "Người nhân danh vua Hàm Nghi ra chiếu Cần Vương:", options: ["Tôn Thất Thuyết", "Phan Bội Châu", "Nguyễn Trung Trực", "Trương Định"], answer: 0, explain: "Tôn Thất Thuyết." },
    { type: 'short', q: "Từ 1885 đến 1896 là bao nhiêu năm?", answer: "11", unit: "năm", calc: "1896-1885", explain: "11." },
    { type: 'mcq', q: "Khởi nghĩa Ba Đình diễn ra ở tỉnh:", options: ["Thanh Hoá", "Hà Tĩnh", "Hưng Yên", "Bắc Giang"], answer: 0, explain: "Thanh Hoá." }
  ]
});
})();
