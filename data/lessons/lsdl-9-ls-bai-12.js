/* LS&ĐL 9 – Lịch sử, Bài 12. Khu vực Mỹ La-tinh và châu Á từ năm 1945 đến năm 1991. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-9/ls-bai-12', {
  objectives: [
    "Nêu được nét chính về Mỹ La-tinh và cách mạng Cu-ba.",
    "Trình bày được sự thành lập và phát triển của Trung Quốc, Ấn Độ.",
    "Nêu được quá trình giành độc lập và sự ra đời của ASEAN ở Đông Nam Á."
  ],
  intro: "Từ Cu-ba ở “sân sau” của Mỹ đến Đông Nam Á, sau năm 1945 hàng loạt quốc gia độc lập ra đời. Bản đồ chính trị thế giới thay đổi thế nào?",
  steps: [
    { title: "Mỹ La-tinh", html: "<p>Phong trào chống chế độ độc tài thân Mỹ phát triển. Ngày <b>1/1/1959</b>, cách mạng Cu-ba do Phi-đen Cát-xtơ-rô lãnh đạo giành thắng lợi.</p>" },
    { title: "Trung Quốc và Ấn Độ", html: "<ul><li>1/10/<b>1949</b>: nước Cộng hoà Nhân dân Trung Hoa thành lập. Từ 12/1978, Trung Quốc tiến hành cải cách, mở cửa.</li><li>15/8/<b>1947</b>: Ấn Độ độc lập (tách thành Ấn Độ và Pa-ki-xtan); năm 1950 thành nước cộng hoà.</li></ul>",
      svg: S.timeline({ title: "Châu Á sau 1945", items: [{ y: "17/8/1945", s: "In-đô-nê-xi-a độc lập" }, { y: "15/8/1947", s: "Ấn Độ độc lập" }, { y: "1/10/1949", s: "CHND Trung Hoa" }, { y: "8/8/1967", s: "ASEAN" }, { y: "12/1978", s: "TQ cải cách" }] }), caption: "Một số mốc tiêu biểu." },
    { title: "Đông Nam Á và ASEAN", html: "<p>Ngày <b>8/8/1967</b>, ASEAN thành lập ở Băng Cốc gồm 5 nước: In-đô-nê-xi-a, Ma-lai-xi-a, Phi-líp-pin, Xin-ga-po, Thái Lan. Hiệp ước Ba-li (1976) xác định nguyên tắc quan hệ.</p>",
      svg: S.table({ title: "Năm gia nhập ASEAN (một số nước)", head: ["Nước", "Năm"], rows: [["Bru-nây", "1984"], ["Việt Nam", "1995"], ["Lào, Mi-an-ma", "1997"], ["Cam-pu-chia", "1999"]], colW: 250 }), caption: "Đông Ti-mo trở thành thành viên thứ 11 năm 2025." },
    { title: "Ghi nhớ", html: "<div class=\"box key\">Sau 1945, phong trào giải phóng dân tộc làm hệ thống thuộc địa tan rã; nhiều nước châu Á, Mỹ La-tinh giành độc lập và phát triển, ASEAN dần mở rộng.</div>" }
  ],
  summary: "Sau 1945, cách mạng Cu-ba thắng lợi (1/1/1959). Ở châu Á, Ấn Độ độc lập (15/8/1947), nước CHND Trung Hoa thành lập (1/10/1949), Trung Quốc cải cách mở cửa từ 12/1978. Đông Nam Á lần lượt giành độc lập; ASEAN ra đời ngày 8/8/1967 với 5 nước, sau mở rộng (Việt Nam gia nhập năm 1995).",
  examples: [
    { title: "Tính", problem: "Từ 1967 đến 1995 là bao nhiêu năm?", solution: "28 năm." },
    { title: "Giải thích", problem: "Mục tiêu thành lập ASEAN?", solution: "Hợp tác phát triển kinh tế, văn hoá, giữ hoà bình, ổn định khu vực." },
    { title: "Nhận xét", problem: "Ý nghĩa cách mạng Cu-ba?", solution: "Lá cờ đầu của phong trào giải phóng dân tộc ở Mỹ La-tinh." }
  ],
  exercises: [
    { question: "ASEAN thành lập ở đâu?", hints: ["Thủ đô Thái Lan.", "Băng …"], solution: "Băng Cốc (8/8/1967)." },
    { question: "Lãnh tụ cách mạng Cu-ba?", hints: ["Họ Cát-xtơ-rô.", "Phi-…"], solution: "Phi-đen Cát-xtơ-rô." },
    { question: "Ấn Độ độc lập ngày nào?", hints: ["Năm 1947.", "Ngày 15/…"], solution: "15/8/1947." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: ASEAN ra đời ngày 8/8/1967.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Nước CHND Trung Hoa thành lập ngày:", options: ["1/10/1949", "1/1/1959", "15/8/1947", "8/8/1967"], answer: 0, explain: "1/10/1949." },
    { type: 'short', q: "ASEAN ban đầu có 5 nước; đến 1999 có 10 nước. Tăng thêm bao nhiêu nước?", answer: "5", unit: "nước", calc: "10-5", explain: "5." },
    { type: 'mcq', q: "Năm Việt Nam gia nhập ASEAN:", options: ["1995", "1997", "1984", "1999"], answer: 0, explain: "1995." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Cách mạng Cu-ba thắng lợi năm 1949.", answer: false, explain: "Ngày 1/1/1959." },
    { type: 'mcq', q: "Trung Quốc bắt đầu cải cách mở cửa từ:", options: ["12/1978", "1/10/1949", "1966", "1991"], answer: 0, explain: "12/1978." },
    { type: 'short', q: "Từ 1959 đến 2029 là bao nhiêu năm?", answer: "70", unit: "năm", calc: "2029-1959", explain: "70." },
    { type: 'mcq', q: "Nước sáng lập ASEAN:", options: ["Thái Lan", "Việt Nam", "Lào", "Bru-nây"], answer: 0, explain: "Thái Lan." }
  ]
});
})();
