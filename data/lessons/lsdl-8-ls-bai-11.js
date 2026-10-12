/* LS&ĐL 8 – Lịch sử, Bài 11. Phong trào công nhân từ cuối thế kỉ XVIII đến đầu thế kỉ XX và sự ra đời của chủ nghĩa xã hội khoa học. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-8/ls-bai-11', {
  objectives: [
    "Trình bày được những nét chính về phong trào công nhân.",
    "Nêu được sự ra đời của chủ nghĩa xã hội khoa học.",
    "Trình bày được sự ra đời và hoạt động của Quốc tế thứ nhất, Công xã Pa-ri."
  ],
  intro: "Ngày 1/5 – Ngày Quốc tế Lao động – gắn với cuộc đấu tranh đòi ngày làm 8 giờ của công nhân Chi-ca-gô (Mỹ) năm 1886.",
  steps: [
    { title: "Phong trào công nhân ban đầu", html: "<p>Cuối thế kỉ XVIII – đầu thế kỉ XIX, công nhân bị bóc lột nặng nề. Họ đập phá máy móc, đốt công xưởng (phong trào Lút-đít ở Anh), rồi lập công đoàn, bãi công đòi tăng lương, giảm giờ làm.</p>" },
    { title: "Chủ nghĩa xã hội khoa học", html: "<p>Tháng 2/<b>1848</b>, C. Mác và Ph. Ăng-ghen công bố <b>Tuyên ngôn của Đảng Cộng sản</b> – văn kiện đầu tiên của chủ nghĩa xã hội khoa học.</p>",
      svg: S.timeline({ title: "Phong trào công nhân quốc tế", items: [{ y: "1848", s: "Tuyên ngôn Đảng Cộng sản" }, { y: "1864", s: "Quốc tế thứ nhất" }, { y: "1871", s: "Công xã Pa-ri" }, { y: "1889", s: "Quốc tế thứ hai" }] }), caption: "Năm 1889, Quốc tế thứ hai lấy ngày 1/5 làm ngày Quốc tế Lao động." },
    { title: "Công xã Pa-ri (1871)", html: "<p>Ngày 18/3/<b>1871</b>, nhân dân Pa-ri khởi nghĩa, lập <b>Công xã Pa-ri</b> – nhà nước kiểu mới đầu tiên của giai cấp vô sản. Công xã tồn tại 72 ngày thì bị đàn áp.</p>" },
    { title: "Ghi nhớ", html: "<div class=\"box key\">Từ tự phát (đập máy) đến tự giác (có lí luận, tổ chức); năm 1848 Tuyên ngôn của Đảng Cộng sản ra đời; 1864 Quốc tế thứ nhất; 1871 Công xã Pa-ri.</div>" }
  ],
  summary: "Phong trào công nhân phát triển từ hình thức tự phát (đập phá máy móc) đến lập công đoàn, bãi công. Năm 1848, Mác và Ăng-ghen công bố Tuyên ngôn của Đảng Cộng sản, đánh dấu sự ra đời của chủ nghĩa xã hội khoa học. Quốc tế thứ nhất thành lập năm 1864; Công xã Pa-ri (1871) tồn tại 72 ngày; Quốc tế thứ hai thành lập năm 1889.",
  examples: [
    { title: "Tính", problem: "Từ 1848 đến 1871 là bao nhiêu năm?", solution: "23 năm." },
    { title: "Giải thích", problem: "Vì sao công nhân đập phá máy móc?", solution: "Họ lầm tưởng máy móc là nguyên nhân khiến họ khổ cực, thất nghiệp." },
    { title: "Khái niệm", problem: "Công xã Pa-ri có ý nghĩa gì?", solution: "Là nhà nước kiểu mới đầu tiên của giai cấp vô sản." }
  ],
  exercises: [
    { question: "Ai soạn thảo Tuyên ngôn của Đảng Cộng sản?", hints: ["Hai người.", "Mác và …"], solution: "C. Mác và Ph. Ăng-ghen." },
    { question: "Công xã Pa-ri tồn tại bao nhiêu ngày?", hints: ["Hơn hai tháng.", "Bảy mươi …"], solution: "72 ngày." },
    { question: "Từ 1864 đến 1889 là bao nhiêu năm?", hints: ["1889 − 1864.", "Một phần tư thế kỉ."], solution: "25 năm." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Tuyên ngôn của Đảng Cộng sản được công bố năm 1848.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Nhà nước kiểu mới đầu tiên của giai cấp vô sản:", options: ["Công xã Pa-ri", "Quốc tế thứ nhất", "Công đoàn Anh", "Nước Mỹ"], answer: 0, explain: "Công xã Pa-ri." },
    { type: 'short', q: "Từ 1848 đến 1871 là bao nhiêu năm?", answer: "23", unit: "năm", calc: "1871-1848", explain: "23." },
    { type: 'mcq', q: "Quốc tế thứ nhất thành lập năm:", options: ["1864", "1848", "1871", "1889"], answer: 0, explain: "1864." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Phong trào Lút-đít là phong trào đòi độc lập dân tộc.", answer: false, explain: "Đó là phong trào đập phá máy móc." },
    { type: 'mcq', q: "Ngày Quốc tế Lao động:", options: ["1/5", "14/7", "4/7", "7/11"], answer: 0, explain: "1/5." },
    { type: 'short', q: "Công xã Pa-ri tồn tại bao nhiêu ngày?", answer: "72", unit: "ngày", calc: "72", explain: "72." },
    { type: 'mcq', q: "Người cùng Mác sáng lập chủ nghĩa xã hội khoa học:", options: ["Ăng-ghen", "Lê-nin", "Rô-be-xpi-e", "Oát"], answer: 0, explain: "Ăng-ghen." }
  ]
});
})();
