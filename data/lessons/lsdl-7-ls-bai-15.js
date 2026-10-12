/* LS&ĐL 7 – Lịch sử, Bài 15. Nước Đại Ngu thời Hồ (1400 – 1407). Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-7/ls-bai-15', {
  objectives: [
    "Trình bày được sự ra đời của nhà Hồ.",
    "Giới thiệu được nội dung chủ yếu của cải cách Hồ Quý Ly.",
    "Nêu được nguyên nhân thất bại của cuộc kháng chiến chống quân Minh."
  ],
  intro: "Thành nhà Hồ ở Thanh Hoá, xây bằng những khối đá lớn xếp khít nhau, đã được UNESCO công nhận là Di sản thế giới năm 2011. Người cho xây thành là <b>Hồ Quý Ly</b>.",
  steps: [
    { title: "Nhà Hồ thành lập", html: "<p>Cuối thế kỉ XIV, nhà Trần suy yếu. Năm <b>1400</b>, Hồ Quý Ly phế vua Trần, lập nhà Hồ, đổi quốc hiệu là <b>Đại Ngu</b>, đóng đô ở <b>Tây Đô</b> (Thanh Hoá).</p>" },
    { title: "Cải cách của Hồ Quý Ly", html: "<p>Các nội dung chính:</p>",
      svg: S.table({ title: "Cải cách Hồ Quý Ly", head: ["Lĩnh vực", "Nội dung"], rows: [["Chính trị", "Thay quan họ Trần bằng người mới"], ["Kinh tế", "Phát hành tiền giấy; hạn điền"], ["Xã hội", "Hạn nô (hạn chế số nô tì)"], ["Văn hoá", "Đề cao chữ Nôm"], ["Quân sự", "Tăng quân, xây thành, đóng thuyền"]], colW: 250 }), caption: "Tiền giấy “Thông bảo hội sao” phát hành năm 1396, khi Hồ Quý Ly còn làm quan nhà Trần." },
    { title: "Kháng chiến chống Minh", html: "<p>Năm <b>1406</b>, quân Minh xâm lược. Nhà Hồ dựa vào thành luỹ để chống giữ nhưng không được nhân dân ủng hộ. Năm <b>1407</b>, cuộc kháng chiến thất bại, nước ta bị nhà Minh đô hộ.</p>",
      svg: S.timeline({ title: "Nhà Hồ", items: [{ y: "1397", s: "Xây thành Tây Đô" }, { y: "1400", s: "Lập nhà Hồ" }, { y: "1406", s: "Minh xâm lược" }, { y: "1407", s: "Kháng chiến thất bại" }] }), caption: "Thành nhà Hồ là Di sản thế giới (2011)." },
    { title: "Đánh giá", html: "<div class=\"box key\">Cải cách có nhiều điểm tiến bộ, làm suy yếu thế lực quý tộc; nhưng chưa hợp lòng dân nên kháng chiến thất bại. Bài học: phải dựa vào sức mạnh đoàn kết toàn dân.</div>" }
  ],
  summary: "Năm 1400 Hồ Quý Ly lập nhà Hồ, quốc hiệu Đại Ngu, kinh đô Tây Đô. Cải cách trên nhiều lĩnh vực: tiền giấy, hạn điền, hạn nô, đề cao chữ Nôm, củng cố quân đội. Năm 1406 quân Minh xâm lược; năm 1407 kháng chiến thất bại vì không đoàn kết được toàn dân.",
  examples: [
    { title: "Tính", problem: "Nhà Hồ tồn tại từ 1400 đến 1407 là bao nhiêu năm?", solution: "7 năm." },
    { title: "Khái niệm", problem: "“Hạn điền” nghĩa là gì?", solution: "Hạn chế số ruộng tư mà mỗi người được sở hữu." },
    { title: "Phân tích", problem: "Vì sao kháng chiến chống Minh của nhà Hồ thất bại?", solution: "Nhà Hồ không đoàn kết được nhân dân, chỉ dựa vào thành luỹ." }
  ],
  exercises: [
    { question: "Quốc hiệu thời Hồ?", hints: ["Hai chữ.", "Đại …"], solution: "Đại Ngu." },
    { question: "Kinh đô nhà Hồ ở đâu?", hints: ["Ở Thanh Hoá.", "Tây …"], solution: "Tây Đô." },
    { question: "Từ năm 1397 đến năm 2011 (công nhận Di sản) là bao nhiêu năm?", hints: ["2011 − 1397.", "Hơn 600."], solution: "614 năm." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Năm 1400, Hồ Quý Ly lập nhà Hồ.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Quốc hiệu thời Hồ:", options: ["Đại Ngu", "Đại Việt", "Đại Cồ Việt", "Vạn Xuân"], answer: 0, explain: "Đại Ngu." },
    { type: 'short', q: "Từ 1400 đến 1407 là bao nhiêu năm?", answer: "7", unit: "năm", calc: "1407-1400", explain: "7 năm." },
    { type: 'mcq', q: "Chính sách hạn chế số nô tì:", options: ["Hạn nô", "Hạn điền", "Ngụ binh ư nông", "Quân điền"], answer: 0, explain: "Hạn nô." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Cuộc kháng chiến chống Minh của nhà Hồ giành thắng lợi.", answer: false, explain: "Thất bại năm 1407." },
    { type: 'mcq', q: "Thành nhà Hồ thuộc tỉnh:", options: ["Thanh Hoá", "Ninh Bình", "Nghệ An", "Hà Nam"], answer: 0, explain: "Thanh Hoá." },
    { type: 'short', q: "Từ năm 1396 (phát hành tiền giấy) đến 1400 là bao nhiêu năm?", answer: "4", unit: "năm", calc: "1400-1396", explain: "4 năm." },
    { type: 'mcq', q: "Năm quân Minh xâm lược Đại Ngu:", options: ["1406", "1400", "1418", "1427"], answer: 0, explain: "1406." }
  ]
});
})();
