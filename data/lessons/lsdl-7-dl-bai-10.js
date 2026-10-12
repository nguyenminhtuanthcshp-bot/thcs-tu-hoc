/* LS&ĐL 7 – Địa lí, Bài 10. Đặc điểm dân cư, xã hội châu Phi. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-7/dl-bai-10', {
  objectives: [
    "Trình bày được một số đặc điểm dân cư, xã hội châu Phi.",
    "Nêu được các vấn đề nổi cộm: gia tăng dân số, nạn đói, xung đột.",
    "Biết được một số di sản lịch sử như văn minh Ai Cập cổ đại."
  ],
  intro: "Kim tự tháp Ai Cập được xây dựng cách đây hơn 4 500 năm. Ngày nay, châu Phi là châu lục có dân số tăng nhanh nhất thế giới.",
  steps: [
    { title: "Dân cư", html: "<p>Năm 2023, châu Phi có khoảng <b>1,48 tỉ người</b> (làm tròn theo Liên hợp quốc). Tỉ lệ gia tăng dân số tự nhiên cao nhất thế giới; dân số trẻ.</p>",
      svg: S.table({ title: "Dân số châu Phi (tỉ người, làm tròn)", head: ["Năm", "Dân số"], rows: [["2000", "0,82"], ["2023", "1,48"]], colW: 250 }), caption: "Số liệu làm tròn theo Liên hợp quốc." },
    { title: "Vấn đề xã hội", html: "<ul><li>Gia tăng dân số nhanh gây sức ép về việc làm, lương thực.</li><li>Nạn đói, dịch bệnh ở một số nước.</li><li>Xung đột quân sự ở một số khu vực.</li></ul>" },
    { title: "Di sản lịch sử", html: "<p>Châu Phi là nơi có nền văn minh <b>Ai Cập cổ đại</b> bên sông Nin: kim tự tháp, chữ tượng hình, lịch, toán học.</p>",
      svg: S.mindmap({ center: "Văn minh Ai Cập cổ đại", branches: [{ title: "Kiến trúc", items: ["Kim tự tháp", "Tượng Nhân sư"] }, { title: "Chữ viết", items: ["Chữ tượng hình"] }, { title: "Khoa học", items: ["Lịch", "Toán học, hình học"] }], w: 640, size: 13 }), caption: "Kim tự tháp Kê-ốp là kì quan cổ duy nhất còn tồn tại." },
    { title: "Ghi nhớ", html: "<div class=\"box key\">Châu Phi: dân số tăng nhanh, trẻ; còn nạn đói, xung đột; có di sản văn minh Ai Cập cổ đại.</div>" }
  ],
  summary: "Châu Phi có khoảng 1,48 tỉ dân (2023), gia tăng tự nhiên cao nhất thế giới, dân số trẻ. Các vấn đề: sức ép dân số, nạn đói, dịch bệnh, xung đột. Châu Phi có nền văn minh Ai Cập cổ đại với kim tự tháp, chữ tượng hình, lịch, toán học.",
  examples: [
    { title: "Tính", problem: "Dân số châu Phi tăng từ 0,82 tỉ (2000) lên 1,48 tỉ (2023), tăng bao nhiêu tỉ người?", solution: "0,66 tỉ người." },
    { title: "Giải thích", problem: "Dân số tăng nhanh gây khó khăn gì?", solution: "Thiếu việc làm, lương thực, trường học; môi trường bị khai thác quá mức." },
    { title: "Lịch sử", problem: "Văn minh Ai Cập cổ đại gắn với dòng sông nào?", solution: "Sông Nin." }
  ],
  exercises: [
    { question: "Kể một công trình nổi tiếng của Ai Cập cổ đại.", hints: ["Hình chóp.", "Kim …"], solution: "Kim tự tháp." },
    { question: "Từ 1,48 tỉ (2023), nếu tăng thêm 0,02 tỉ thì dân số châu Phi là bao nhiêu?", hints: ["Cộng.", "Tròn."], solution: "1,5 tỉ người." },
    { question: "Nêu một vấn đề xã hội ở châu Phi.", hints: ["Lương thực.", "Hoặc chiến tranh."], solution: "Nạn đói (hoặc xung đột, dịch bệnh)." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Châu Phi có tỉ lệ gia tăng dân số tự nhiên cao nhất thế giới.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Nền văn minh cổ đại ở châu Phi:", options: ["Ai Cập", "Lưỡng Hà", "Hy Lạp", "La Mã"], answer: 0, explain: "Ai Cập." },
    { type: 'short', q: "Dân số châu Phi năm 2000 khoảng 0,82 tỉ, năm 2023 khoảng 1,48 tỉ. Tăng bao nhiêu tỉ?", answer: "0.66", answerText: "0,66", unit: "tỉ người", calc: "1.48-0.82", explain: "0,66." },
    { type: 'mcq', q: "Chữ viết của người Ai Cập cổ đại:", options: ["Chữ tượng hình", "Chữ La-tinh", "Chữ Nôm", "Chữ Phạn"], answer: 0, explain: "Tượng hình." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Châu Phi có cơ cấu dân số già.", answer: false, explain: "Dân số trẻ." },
    { type: 'mcq', q: "Hệ quả của dân số tăng nhanh:", options: ["Thiếu việc làm, lương thực", "Thiếu trẻ em", "Già hoá nhanh", "Dư thừa lương thực"], answer: 0, explain: "Thiếu việc làm, lương thực." },
    { type: 'short', q: "Kim tự tháp xây cách đây khoảng 4 500 năm. 4 500 năm bằng bao nhiêu thế kỉ?", answer: "45", unit: "thế kỉ", calc: "4500/100", explain: "45." },
    { type: 'mcq', q: "Văn minh Ai Cập phát triển bên sông:", options: ["Nin", "Công-gô", "Ni-giê", "Dăm-be-di"], answer: 0, explain: "Nin." }
  ]
});
})();
