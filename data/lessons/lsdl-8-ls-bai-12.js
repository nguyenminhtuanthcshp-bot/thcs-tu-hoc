/* LS&ĐL 8 – Lịch sử, Bài 12. Chiến tranh thế giới thứ nhất (1914 – 1918) và Cách mạng tháng Mười Nga năm 1917. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-8/ls-bai-12', {
  objectives: [
    "Trình bày được nguyên nhân, diễn biến chính và hậu quả của Chiến tranh thế giới thứ nhất.",
    "Nêu được những nét chính của Cách mạng tháng Mười Nga.",
    "Nêu được ý nghĩa lịch sử của Cách mạng tháng Mười."
  ],
  intro: "Ngày 28/6/1914, Thái tử Áo – Hung bị ám sát ở Xa-ra-ê-vô. Một tháng sau, châu Âu chìm trong cuộc chiến tranh lớn nhất từ trước đến lúc đó.",
  steps: [
    { title: "Nguyên nhân", html: "<p>Mâu thuẫn về thuộc địa giữa các nước đế quốc dẫn đến hình thành hai khối: <b>Liên minh</b> (Đức, Áo – Hung, I-ta-li-a) và <b>Hiệp ước</b> (Anh, Pháp, Nga). Vụ ám sát ngày 28/6/1914 là duyên cớ.</p>" },
    { title: "Diễn biến và kết quả", html: "<p>Ngày 28/7/1914, Áo – Hung tuyên chiến với Xéc-bi; chiến tranh lan rộng. Năm 1917, Mỹ tham chiến bên khối Hiệp ước. Ngày <b>11/11/1918</b>, Đức kí hiệp định đầu hàng.</p>",
      svg: S.timeline({ title: "Chiến tranh thế giới thứ nhất", items: [{ y: "28/6/1914", s: "Vụ ám sát ở Xa-ra-ê-vô" }, { y: "28/7/1914", s: "Chiến tranh bùng nổ" }, { y: "1917", s: "Mỹ tham chiến" }, { y: "11/11/1918", s: "Đức đầu hàng" }] }), caption: "Chiến tranh làm khoảng 10 triệu người chết (ước tính phổ biến)." },
    { title: "Cách mạng tháng Mười Nga", html: "<p>Tháng 2/1917, nhân dân Nga lật đổ Nga hoàng. Đêm 24, ngày 25/10/1917 (theo lịch Nga cũ, tức 7/11/1917), dưới sự lãnh đạo của Đảng Bôn-sê-vích do <b>V. I. Lê-nin</b> đứng đầu, nhân dân khởi nghĩa ở Pê-tơ-rô-grát, lập chính quyền Xô viết.</p>" },
    { title: "Ý nghĩa", html: "<p>Tóm tắt:</p>",
      svg: S.mindmap({ center: "Cách mạng tháng Mười", branches: [{ title: "Nước Nga", items: ["Lập nhà nước Xô viết", "Ruộng đất cho nông dân"] }, { title: "Thế giới", items: ["Cổ vũ phong trào công nhân", "Cổ vũ giải phóng dân tộc"] }], w: 640, size: 13 }), caption: "Nguyễn Ái Quốc tìm thấy con đường cứu nước từ ảnh hưởng của Cách mạng tháng Mười." }
  ],
  summary: "Chiến tranh thế giới thứ nhất (28/7/1914 – 11/11/1918) do mâu thuẫn thuộc địa giữa khối Liên minh và khối Hiệp ước; duyên cớ là vụ ám sát ở Xa-ra-ê-vô (28/6/1914). Đức và đồng minh thất bại; chiến tranh gây tổn thất to lớn. Năm 1917 ở Nga có Cách mạng tháng Hai và Cách mạng tháng Mười (25/10, tức 7/11/1917) do Lê-nin lãnh đạo, lập chính quyền Xô viết, cổ vũ phong trào cách mạng thế giới.",
  examples: [
    { title: "Tính", problem: "Chiến tranh kéo dài từ 1914 đến 1918 khoảng mấy năm?", solution: "Hơn 4 năm." },
    { title: "Lịch", problem: "Vì sao gọi là “Cách mạng tháng Mười” dù diễn ra ngày 7/11?", solution: "Vì theo lịch Nga cũ, đó là ngày 25/10." },
    { title: "Phân tích", problem: "Vì sao Mỹ tham chiến muộn?", solution: "Mỹ đứng ngoài để buôn bán vũ khí kiếm lời, đến năm 1917 mới tham chiến để giành phần lợi." }
  ],
  exercises: [
    { question: "Duyên cớ của chiến tranh?", hints: ["Một vụ ám sát.", "Ở Xa-ra-ê-vô."], solution: "Thái tử Áo – Hung bị ám sát (28/6/1914)." },
    { question: "Người lãnh đạo Cách mạng tháng Mười?", hints: ["Đảng Bôn-sê-vích.", "Lê-…"], solution: "V. I. Lê-nin." },
    { question: "Từ 1917 đến 2027 là bao nhiêu năm?", hints: ["2027 − 1917.", "Hơn một thế kỉ."], solution: "110 năm." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Chiến tranh thế giới thứ nhất kết thúc năm 1918.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Khối Hiệp ước gồm:", options: ["Anh, Pháp, Nga", "Đức, Áo – Hung", "Đức, I-ta-li-a", "Mỹ, Nhật"], answer: 0, explain: "Anh, Pháp, Nga." },
    { type: 'short', q: "Từ 1914 đến 1918 là bao nhiêu năm (tính theo năm)?", answer: "4", unit: "năm", calc: "1918-1914", explain: "4." },
    { type: 'mcq', q: "Ngày Cách mạng tháng Mười theo lịch mới:", options: ["7/11/1917", "25/10/1918", "1/5/1917", "14/7/1917"], answer: 0, explain: "7/11/1917." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Mỹ tham chiến ngay từ năm 1914.", answer: false, explain: "Năm 1917." },
    { type: 'mcq', q: "Ngày Đức kí hiệp định đầu hàng:", options: ["11/11/1918", "28/7/1914", "7/11/1917", "28/6/1914"], answer: 0, explain: "11/11/1918." },
    { type: 'short', q: "Từ 1917 đến 2027 là bao nhiêu năm?", answer: "110", unit: "năm", calc: "2027-1917", explain: "110." },
    { type: 'mcq', q: "Chính quyền thành lập sau Cách mạng tháng Mười:", options: ["Xô viết", "Cộng hoà tư sản", "Quân chủ lập hiến", "Công xã Pa-ri"], answer: 0, explain: "Xô viết." }
  ]
});
})();
