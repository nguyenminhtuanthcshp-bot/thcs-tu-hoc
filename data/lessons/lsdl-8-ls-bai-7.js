/* LS&ĐL 8 – Lịch sử, Bài 7. Khởi nghĩa nông dân ở Đàng Ngoài thế kỉ XVIII. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-8/ls-bai-7', {
  objectives: [
    "Nêu được nguyên nhân bùng nổ các cuộc khởi nghĩa nông dân ở Đàng Ngoài.",
    "Trình bày được một số cuộc khởi nghĩa tiêu biểu.",
    "Nêu được ý nghĩa của phong trào."
  ],
  intro: "Giữa thế kỉ XVIII, “Quận He” Nguyễn Hữu Cầu khởi nghĩa ở vùng ven biển Hải Dương, khiến chúa Trịnh nhiều phen khốn đốn.",
  steps: [
    { title: "Nguyên nhân", html: "<p>Thế kỉ XVIII, chính quyền Lê – Trịnh suy thoái, quan lại tham nhũng; ruộng đất bị cường hào chiếm đoạt; thuế khoá nặng nề, mất mùa, đói kém. Đời sống nông dân cực khổ.</p>",
      svg: S.flowchart({ title: "Nguyên nhân khởi nghĩa", steps: [{ t: 'start', s: "Chính quyền mục nát" }, { t: 'proc', s: "Ruộng đất bị chiếm" }, { t: 'proc', s: "Thuế nặng, đói kém" }, { t: 'end', s: "Nông dân nổi dậy" }] }), caption: "Phong trào bùng nổ mạnh từ những năm 30 – 40 của thế kỉ XVIII." },
    { title: "Các cuộc khởi nghĩa tiêu biểu", html: "<p>Tóm tắt:</p>",
      svg: S.table({ title: "Khởi nghĩa nông dân Đàng Ngoài", head: ["Lãnh đạo", "Thời gian"], rows: [["Nguyễn Danh Phương", "1740 – 1751"], ["Nguyễn Hữu Cầu", "1741 – 1751"], ["Hoàng Công Chất", "1739 – 1769"], ["Lê Duy Mật", "1738 – 1770"]], colW: 250 }), caption: "Mốc thời gian theo cách ghi phổ biến trong sách sử." },
    { title: "Kết quả", html: "<p>Các cuộc khởi nghĩa cuối cùng đều bị đàn áp, nhưng đã làm lung lay chính quyền Lê – Trịnh.</p>" },
    { title: "Ý nghĩa", html: "<div class=\"box key\">Thể hiện tinh thần đấu tranh chống áp bức của nông dân, làm suy yếu chính quyền Lê – Trịnh, tạo tiền đề cho phong trào Tây Sơn sau này.</div>" }
  ],
  summary: "Thế kỉ XVIII, chính quyền Lê – Trịnh mục nát, ruộng đất bị chiếm đoạt, thuế nặng, đói kém khiến nông dân Đàng Ngoài nổi dậy. Tiêu biểu: Nguyễn Danh Phương (1740 – 1751), Nguyễn Hữu Cầu (1741 – 1751), Hoàng Công Chất (1739 – 1769), Lê Duy Mật (1738 – 1770). Các cuộc khởi nghĩa thất bại nhưng làm lung lay chính quyền Lê – Trịnh.",
  examples: [
    { title: "Tính", problem: "Khởi nghĩa Hoàng Công Chất kéo dài từ 1739 đến 1769 là bao nhiêu năm?", solution: "30 năm." },
    { title: "Phân tích", problem: "Vì sao các cuộc khởi nghĩa thất bại?", solution: "Lực lượng phân tán, thiếu liên kết, chưa có đường lối rõ ràng." },
    { title: "Xác định", problem: "Nguyễn Hữu Cầu còn được gọi là gì?", solution: "Quận He." }
  ],
  exercises: [
    { question: "Kể tên một thủ lĩnh khởi nghĩa nông dân Đàng Ngoài.", hints: ["Quận He.", "Hoặc Hoàng Công Chất."], solution: "Nguyễn Hữu Cầu (Quận He)." },
    { question: "Khởi nghĩa Lê Duy Mật kéo dài bao nhiêu năm (1738 – 1770)?", hints: ["1770 − 1738.", "Hơn 30."], solution: "32 năm." },
    { question: "Nêu một nguyên nhân dẫn đến khởi nghĩa.", hints: ["Về thuế.", "Hoặc ruộng đất."], solution: "Thuế khoá nặng nề, ruộng đất bị chiếm đoạt." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Thế kỉ XVIII, chính quyền Lê – Trịnh suy thoái.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Thủ lĩnh được gọi là “Quận He”:", options: ["Nguyễn Hữu Cầu", "Hoàng Công Chất", "Lê Duy Mật", "Nguyễn Danh Phương"], answer: 0, explain: "Nguyễn Hữu Cầu." },
    { type: 'short', q: "Từ 1739 đến 1769 là bao nhiêu năm?", answer: "30", unit: "năm", calc: "1769-1739", explain: "30." },
    { type: 'mcq', q: "Kết quả của các cuộc khởi nghĩa:", options: ["Bị đàn áp", "Lật đổ chúa Trịnh", "Lập triều đại mới", "Thống nhất đất nước"], answer: 0, explain: "Bị đàn áp." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Các cuộc khởi nghĩa nông dân không có ý nghĩa gì.", answer: false, explain: "Làm lung lay chính quyền." },
    { type: 'mcq', q: "Phong trào tiếp nối tinh thần đấu tranh này cuối thế kỉ XVIII:", options: ["Tây Sơn", "Cần Vương", "Đông Du", "Lam Sơn"], answer: 0, explain: "Tây Sơn." },
    { type: 'short', q: "Từ 1738 đến 1770 là bao nhiêu năm?", answer: "32", unit: "năm", calc: "1770-1738", explain: "32." },
    { type: 'mcq', q: "Nguyên nhân khởi nghĩa:", options: ["Thuế khoá nặng nề", "Ngoại xâm phương Bắc", "Thiên tai ở châu Âu", "Cách mạng công nghiệp"], answer: 0, explain: "Thuế nặng." }
  ]
});
})();
