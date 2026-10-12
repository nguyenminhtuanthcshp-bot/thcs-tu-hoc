/* LS&ĐL 8 – Lịch sử, Bài 9. Tình hình kinh tế, văn hoá, tôn giáo trong các thế kỉ XVI – XVIII. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-8/ls-bai-9', {
  objectives: [
    "Nêu được những nét chính về tình hình kinh tế trong các thế kỉ XVI – XVIII.",
    "Mô tả được sự hình thành các đô thị, thương cảng.",
    "Trình bày được những nét chính về văn hoá, tôn giáo, chữ Quốc ngữ."
  ],
  intro: "Chữ viết em đang đọc – chữ Quốc ngữ – được hình thành từ thế kỉ XVII, khi các giáo sĩ phương Tây cùng người Việt dùng chữ cái La-tinh để ghi âm tiếng Việt.",
  steps: [
    { title: "Kinh tế", html: "<ul><li>Nông nghiệp: Đàng Trong khai hoang mạnh; Đàng Ngoài ruộng đất bị chiếm, có lúc trì trệ.</li><li>Thủ công nghiệp: nhiều làng nghề như gốm Bát Tràng, dệt La Khê.</li><li>Thương nghiệp: buôn bán với nước ngoài (Nhật Bản, Trung Quốc, Hà Lan, Bồ Đào Nha…).</li></ul>" },
    { title: "Đô thị, thương cảng", html: "<p>Một số đô thị tiêu biểu:</p>",
      svg: S.table({ title: "Đô thị thế kỉ XVI – XVIII", head: ["Đô thị", "Vị trí ngày nay"], rows: [["Thăng Long (Kẻ Chợ)", "Hà Nội"], ["Phố Hiến", "Hưng Yên"], ["Hội An", "Đà Nẵng (trước thuộc Quảng Nam)"], ["Thanh Hà", "Huế"]], colW: 250 }), caption: "Dân gian có câu: “Thứ nhất Kinh Kỳ, thứ nhì Phố Hiến”." },
    { title: "Tôn giáo", html: "<p>Nho giáo vẫn được đề cao; Phật giáo, Đạo giáo phục hồi; tín ngưỡng dân gian phát triển. Từ thế kỉ XVI, đạo <b>Thiên Chúa</b> được truyền bá vào nước ta.</p>" },
    { title: "Chữ Quốc ngữ, văn học", html: "<p>Thế kỉ XVII, chữ Quốc ngữ ra đời; năm 1651, cuốn từ điển Việt – Bồ – La của A. đơ Rốt được in. Văn học chữ Nôm phát triển; văn học dân gian phong phú.</p>",
      svg: S.timeline({ title: "Chữ Quốc ngữ", items: [{ y: "Thế kỉ XVII", s: "Hình thành chữ Quốc ngữ" }, { y: "1651", s: "Từ điển Việt – Bồ – La" }] }), caption: "Ban đầu chữ Quốc ngữ chủ yếu dùng để truyền đạo." }
  ],
  summary: "Thế kỉ XVI – XVIII, nông nghiệp Đàng Trong phát triển nhờ khai hoang; thủ công nghiệp có nhiều làng nghề; buôn bán với nước ngoài phát triển, hình thành các đô thị Thăng Long, Phố Hiến, Hội An, Thanh Hà. Nho giáo vẫn được đề cao, Phật giáo phục hồi, đạo Thiên Chúa du nhập. Chữ Quốc ngữ hình thành ở thế kỉ XVII (từ điển Việt – Bồ – La năm 1651).",
  examples: [
    { title: "Tính", problem: "Từ 1651 đến 2026 là bao nhiêu năm?", solution: "375 năm." },
    { title: "Xác định", problem: "Phố Hiến nay thuộc tỉnh nào?", solution: "Hưng Yên." },
    { title: "Giải thích", problem: "Vì sao đô thị phát triển thời kì này?", solution: "Do buôn bán trong nước và với nước ngoài phát triển, thủ công nghiệp phát đạt." }
  ],
  exercises: [
    { question: "Câu “Thứ nhất Kinh Kỳ, thứ nhì …”?", hints: ["Một đô thị ở Hưng Yên.", "Phố …"], solution: "Thứ nhì Phố Hiến." },
    { question: "Chữ Quốc ngữ hình thành thế kỉ nào?", hints: ["Sau thế kỉ XVI.", "Trước thế kỉ XVIII."], solution: "Thế kỉ XVII." },
    { question: "Kể một làng nghề thủ công thời kì này.", hints: ["Gốm.", "Ở Hà Nội."], solution: "Gốm Bát Tràng." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Chữ Quốc ngữ hình thành vào thế kỉ XVII.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Thương cảng sầm uất ở Đàng Trong:", options: ["Hội An", "Vân Đồn", "Phố Hiến", "Thăng Long"], answer: 0, explain: "Hội An." },
    { type: 'short', q: "Từ 1651 đến 2026 là bao nhiêu năm?", answer: "375", unit: "năm", calc: "2026-1651", explain: "375." },
    { type: 'mcq', q: "Tôn giáo được truyền bá vào nước ta từ thế kỉ XVI:", options: ["Thiên Chúa giáo", "Phật giáo", "Nho giáo", "Đạo giáo"], answer: 0, explain: "Thiên Chúa giáo." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Thời kì này Việt Nam không buôn bán với nước ngoài.", answer: false, explain: "Buôn bán với nhiều nước." },
    { type: 'mcq', q: "Làng gốm nổi tiếng:", options: ["Bát Tràng", "La Khê", "Vạn Phúc", "Đông Hồ"], answer: 0, explain: "Bát Tràng." },
    { type: 'short', q: "Năm 1651 thuộc thế kỉ thứ mấy? (ghi số)", answer: "17", calc: "Math.floor((1651-1)/100)+1", explain: "Thế kỉ XVII." },
    { type: 'mcq', q: "Phố Hiến nay thuộc:", options: ["Hưng Yên", "Quảng Nam", "Huế", "Bình Định"], answer: 0, explain: "Hưng Yên." }
  ]
});
})();
