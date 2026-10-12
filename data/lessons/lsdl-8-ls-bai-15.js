/* LS&ĐL 8 – Lịch sử, Bài 15. Ấn Độ và Đông Nam Á từ nửa sau thế kỉ XIX đến đầu thế kỉ XX. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-8/ls-bai-15', {
  objectives: [
    "Trình bày được tình hình Ấn Độ dưới ách thống trị của Anh và phong trào đấu tranh.",
    "Nêu được nét chính về phong trào đấu tranh ở Đông Nam Á.",
    "Giải thích được vì sao Xiêm giữ được độc lập."
  ],
  intro: "Năm 1857, những người lính Ấn Độ phục vụ trong quân đội Anh (lính Xi-pay) đã nổi dậy, mở đầu một cuộc khởi nghĩa lớn chống thực dân.",
  steps: [
    { title: "Ấn Độ dưới ách thống trị của Anh", html: "<p>Giữa thế kỉ XIX, Anh hoàn thành xâm lược Ấn Độ, vơ vét tài nguyên, chia để trị. Cuộc khởi nghĩa <b>Xi-pay</b> (1857 – 1859) lan rộng. Năm <b>1885</b>, <b>Đảng Quốc đại</b> thành lập, lãnh đạo đấu tranh giành độc lập.</p>" },
    { title: "Phong trào ở Đông Nam Á", html: "<p>Tóm tắt:</p>",
      svg: S.table({ title: "Một số phong trào ở Đông Nam Á", head: ["Nước", "Phong trào"], rows: [["In-đô-nê-xi-a", "Hiệp hội Hồi giáo (1911)"], ["Phi-líp-pin", "Cách mạng 1896 – 1898"], ["Miến Điện", "Kháng chiến chống Anh"], ["Việt Nam", "Cần Vương, Yên Thế"]], colW: 250 }), caption: "Phi-líp-pin tuyên bố độc lập năm 1898 nhưng sau đó bị Mỹ chiếm." },
    { title: "Xiêm cải cách", html: "<p>Vua <b>Ra-ma V</b> (Chu-la-long-con) tiến hành cải cách theo hướng phương Tây, đồng thời thực hiện chính sách ngoại giao mềm dẻo, lợi dụng mâu thuẫn Anh – Pháp, nhờ đó Xiêm giữ được độc lập (dù phải cắt nhượng một số vùng đất).</p>",
      svg: S.flowchart({ title: "Vì sao Xiêm giữ được độc lập", steps: [{ t: 'start', s: "Cải cách theo phương Tây" }, { t: 'proc', s: "Ngoại giao mềm dẻo" }, { t: 'proc', s: "Làm “vùng đệm” Anh – Pháp" }, { t: 'end', s: "Giữ được độc lập" }] }), caption: "Xiêm (Thái Lan) nằm giữa thuộc địa Anh (Miến Điện) và Pháp (Đông Dương)." },
    { title: "Ghi nhớ", html: "<div class=\"box key\">Ấn Độ: khởi nghĩa Xi-pay (1857 – 1859), Đảng Quốc đại (1885). Đông Nam Á: đấu tranh khắp nơi; Xiêm giữ được độc lập nhờ cải cách và ngoại giao.</div>" }
  ],
  summary: "Giữa thế kỉ XIX, Anh hoàn thành xâm lược Ấn Độ; nhân dân nổi dậy, tiêu biểu là khởi nghĩa Xi-pay (1857 – 1859); năm 1885 Đảng Quốc đại thành lập. Ở Đông Nam Á, phong trào chống thực dân diễn ra ở In-đô-nê-xi-a, Phi-líp-pin, Miến Điện, Việt Nam. Xiêm giữ được độc lập nhờ cải cách của vua Ra-ma V và chính sách ngoại giao mềm dẻo.",
  examples: [
    { title: "Tính", problem: "Khởi nghĩa Xi-pay kéo dài từ 1857 đến 1859 là bao nhiêu năm?", solution: "2 năm." },
    { title: "Giải thích", problem: "Vì sao Xiêm được coi là “vùng đệm”?", solution: "Nằm giữa thuộc địa của Anh và Pháp, hai nước đều không muốn đối phương chiếm Xiêm." },
    { title: "Tính", problem: "Từ 1885 đến 1947 (Ấn Độ độc lập) là bao nhiêu năm?", solution: "62 năm." }
  ],
  exercises: [
    { question: "Chính đảng lãnh đạo đấu tranh ở Ấn Độ (1885)?", hints: ["Quốc …", "Quốc đại."], solution: "Đảng Quốc đại." },
    { question: "Vua Xiêm tiến hành cải cách?", hints: ["Ra-ma …", "Chu-la-long-con."], solution: "Ra-ma V." },
    { question: "Cách mạng Phi-líp-pin 1896 – 1898 kéo dài bao lâu?", hints: ["1898 − 1896.", "…"], solution: "2 năm." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Đảng Quốc đại Ấn Độ thành lập năm 1885.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Nước Đông Nam Á giữ được độc lập:", options: ["Xiêm", "Miến Điện", "In-đô-nê-xi-a", "Phi-líp-pin"], answer: 0, explain: "Xiêm." },
    { type: 'short', q: "Từ 1857 đến 1885 là bao nhiêu năm?", answer: "28", unit: "năm", calc: "1885-1857", explain: "28." },
    { type: 'mcq', q: "Thực dân thống trị Ấn Độ:", options: ["Anh", "Pháp", "Hà Lan", "Tây Ban Nha"], answer: 0, explain: "Anh." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Khởi nghĩa Xi-pay diễn ra ở In-đô-nê-xi-a.", answer: false, explain: "Ở Ấn Độ." },
    { type: 'mcq', q: "Vua tiến hành cải cách ở Xiêm:", options: ["Ra-ma V", "Minh Trị", "Quang Trung", "Tôn Trung Sơn"], answer: 0, explain: "Ra-ma V." },
    { type: 'short', q: "Từ 1857 đến 1859 là bao nhiêu năm?", answer: "2", unit: "năm", calc: "1859-1857", explain: "2." },
    { type: 'mcq', q: "Tổ chức yêu nước ở In-đô-nê-xi-a năm 1911:", options: ["Hiệp hội Hồi giáo", "Đảng Quốc đại", "Đồng minh hội", "Duy Tân hội"], answer: 0, explain: "Hiệp hội Hồi giáo." }
  ]
});
})();
