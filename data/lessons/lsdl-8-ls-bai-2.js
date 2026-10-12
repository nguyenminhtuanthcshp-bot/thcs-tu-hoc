/* LS&ĐL 8 – Lịch sử, Bài 2. Cách mạng tư sản Pháp cuối thế kỉ XVIII. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-8/ls-bai-2', {
  objectives: [
    "Nêu được nguyên nhân của Cách mạng tư sản Pháp.",
    "Trình bày được diễn biến chính của cách mạng.",
    "Nêu được tính chất, ý nghĩa."
  ],
  intro: "Ngày 14/7 hằng năm là Quốc khánh nước Pháp, kỉ niệm ngày nhân dân Pa-ri tấn công pháo đài – nhà tù Ba-xti năm 1789.",
  steps: [
    { title: "Nguyên nhân", html: "<p>Cuối thế kỉ XVIII, nước Pháp theo chế độ quân chủ chuyên chế. Xã hội chia ba đẳng cấp: tăng lữ, quý tộc (có đặc quyền) và <b>đẳng cấp thứ ba</b> (tư sản, nông dân, bình dân thành thị) chịu mọi thứ thuế. Các nhà tư tưởng Khai sáng (Mông-te-xki-ơ, Vôn-te, Rút-xô) phê phán chế độ cũ.</p>",
      svg: S.pieChart({ title: "Ba đẳng cấp ở Pháp (gần đúng, theo dân số)", parts: [{ v: 0.5, label: "Tăng lữ: khoảng 0,5%" }, { v: 1.5, label: "Quý tộc: khoảng 1,5%" }, { v: 98, label: "Đẳng cấp thứ ba: khoảng 98%" }] }), caption: "Tỉ lệ gần đúng, chỉ để minh hoạ." },
    { title: "Mở đầu cách mạng", html: "<p>Ngày <b>14/7/1789</b>, quần chúng Pa-ri tấn công ngục Ba-xti, mở đầu cách mạng. Tháng 8/1789, <b>Tuyên ngôn Nhân quyền và Dân quyền</b> được thông qua.</p>" },
    { title: "Đỉnh cao cách mạng", html: "<p>Năm <b>1792</b>, nền cộng hoà được thành lập. Năm 1793 – 1794, phái Gia-cô-banh (đứng đầu là Rô-be-xpi-e) nắm quyền, thực hiện nhiều chính sách tiến bộ – đỉnh cao của cách mạng. Tháng 7/1794, phái này bị lật đổ.</p>",
      svg: S.timeline({ title: "Cách mạng tư sản Pháp", items: [{ y: "14/7/1789", s: "Chiếm ngục Ba-xti" }, { y: "8/1789", s: "Tuyên ngôn Nhân quyền" }, { y: "1792", s: "Lập cộng hoà" }, { y: "1793 – 1794", s: "Chuyên chính Gia-cô-banh" }] }), caption: "Sau năm 1794, cách mạng thoái trào." },
    { title: "Ý nghĩa", html: "<div class=\"box key\">Lật đổ chế độ phong kiến, mở đường cho chủ nghĩa tư bản ở Pháp; tư tưởng “Tự do – Bình đẳng – Bác ái” lan rộng khắp thế giới.</div>" }
  ],
  summary: "Cuối thế kỉ XVIII, mâu thuẫn giữa đẳng cấp thứ ba với chế độ quân chủ chuyên chế ở Pháp gay gắt; tư tưởng Khai sáng chuẩn bị về tư tưởng. Ngày 14/7/1789 nhân dân chiếm ngục Ba-xti; tháng 8/1789 thông qua Tuyên ngôn Nhân quyền và Dân quyền; năm 1792 lập cộng hoà; 1793 – 1794 là đỉnh cao với chuyên chính Gia-cô-banh. Cách mạng lật đổ chế độ phong kiến, lan toả tư tưởng tự do, bình đẳng.",
  examples: [
    { title: "Tính", problem: "Từ 1789 đến 1794 là bao nhiêu năm?", solution: "5 năm." },
    { title: "Phân tích", problem: "Vì sao đẳng cấp thứ ba bất bình?", solution: "Họ đông nhất, đóng mọi thứ thuế nhưng không có quyền chính trị." },
    { title: "Nhân vật", problem: "Kể tên một nhà tư tưởng Khai sáng Pháp.", solution: "Rút-xô (hoặc Vôn-te, Mông-te-xki-ơ)." }
  ],
  exercises: [
    { question: "Ngày Quốc khánh Pháp?", hints: ["Ngày chiếm ngục Ba-xti.", "Tháng 7."], solution: "Ngày 14/7." },
    { question: "Phái nào đưa cách mạng lên đỉnh cao?", hints: ["Đứng đầu là Rô-be-xpi-e.", "Gia-…"], solution: "Phái Gia-cô-banh." },
    { question: "Từ 1789 đến 2039 là bao nhiêu năm?", hints: ["2039 − 1789.", "Hai trăm năm mươi."], solution: "250 năm." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Ngày 14/7/1789, nhân dân Pa-ri tấn công ngục Ba-xti.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Văn kiện được thông qua tháng 8/1789:", options: ["Tuyên ngôn Nhân quyền và Dân quyền", "Tuyên ngôn Độc lập", "Tuyên ngôn của Đảng Cộng sản", "Hiến chương Đại Tây Dương"], answer: 0, explain: "Đúng." },
    { type: 'short', q: "Từ 1789 đến 1792 là bao nhiêu năm?", answer: "3", unit: "năm", calc: "1792-1789", explain: "3." },
    { type: 'mcq', q: "Người đứng đầu phái Gia-cô-banh:", options: ["Rô-be-xpi-e", "Vôn-te", "Na-pô-lê-ông", "Crôm-oen"], answer: 0, explain: "Rô-be-xpi-e." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Đẳng cấp thứ ba ở Pháp được miễn mọi thứ thuế.", answer: false, explain: "Họ phải đóng thuế." },
    { type: 'mcq', q: "Khẩu hiệu nổi tiếng của cách mạng Pháp:", options: ["Tự do – Bình đẳng – Bác ái", "Đánh trước để chế ngự", "Ruộng đất cho dân cày", "Hoà bình – Ruộng đất"], answer: 0, explain: "Đúng." },
    { type: 'short', q: "Năm 1789 thuộc thế kỉ thứ mấy? (ghi số)", answer: "18", calc: "Math.floor((1789-1)/100)+1", explain: "Thế kỉ XVIII." },
    { type: 'mcq', q: "Nền cộng hoà đầu tiên ở Pháp ra đời năm:", options: ["1792", "1789", "1794", "1804"], answer: 0, explain: "1792." }
  ]
});
})();
