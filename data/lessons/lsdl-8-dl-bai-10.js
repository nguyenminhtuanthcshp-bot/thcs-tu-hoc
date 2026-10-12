/* LS&ĐL 8 – Địa lí, Bài 10. Sinh vật Việt Nam. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-8/dl-bai-10', {
  objectives: [
    "Chứng minh được sự đa dạng của sinh vật Việt Nam.",
    "Nêu được sự suy giảm đa dạng sinh học và nguyên nhân.",
    "Trình bày được biện pháp bảo tồn đa dạng sinh học."
  ],
  intro: "Năm 1962, Cúc Phương trở thành vườn quốc gia đầu tiên của Việt Nam. Ngày nay, nước ta có nhiều vườn quốc gia và khu bảo tồn để giữ gìn sự đa dạng sinh học.",
  steps: [
    { title: "Sự đa dạng sinh học", html: "<p>Sinh vật Việt Nam đa dạng về thành phần loài, nguồn gen, hệ sinh thái: rừng nhiệt đới gió mùa, rừng ngập mặn, hệ sinh thái biển (rạn san hô, cỏ biển), hệ sinh thái nông nghiệp.</p>" },
    { title: "Suy giảm đa dạng sinh học", html: "<p>Nguyên nhân:</p>",
      svg: S.flowchart({ title: "Nguyên nhân suy giảm", steps: [{ t: 'start', s: "Phá rừng, cháy rừng" }, { t: 'proc', s: "Săn bắt trái phép" }, { t: 'proc', s: "Ô nhiễm môi trường" }, { t: 'end', s: "Biến đổi khí hậu" }] }), caption: "Nhiều loài quý hiếm như voọc, sao la cần được bảo vệ." },
    { title: "Bảo tồn", html: "<p>Biện pháp:</p>",
      svg: S.table({ title: "Các hình thức bảo tồn", head: ["Hình thức", "Ví dụ"], rows: [["Vườn quốc gia", "Cúc Phương (1962), Cát Tiên"], ["Khu dự trữ sinh quyển", "Cần Giờ"], ["Sách Đỏ Việt Nam", "Ghi tên loài nguy cấp"], ["Luật", "Luật Đa dạng sinh học (2008)"]], colW: 250 }), caption: "Cần Giờ được UNESCO công nhận là khu dự trữ sinh quyển năm 2000." },
    { title: "Ghi nhớ", html: "<div class=\"box key\">Sinh vật Việt Nam rất đa dạng nhưng đang suy giảm; cần bảo vệ rừng, chống săn bắt trái phép, lập khu bảo tồn.</div>" }
  ],
  summary: "Sinh vật Việt Nam đa dạng về loài, nguồn gen và hệ sinh thái (rừng nhiệt đới, rừng ngập mặn, biển). Đa dạng sinh học suy giảm do phá rừng, săn bắt, ô nhiễm, biến đổi khí hậu. Biện pháp bảo tồn: lập vườn quốc gia (Cúc Phương – 1962), khu dự trữ sinh quyển (Cần Giờ), Sách Đỏ, Luật Đa dạng sinh học (2008).",
  examples: [
    { title: "Tính", problem: "Từ 1962 đến 2022 là bao nhiêu năm?", solution: "60 năm." },
    { title: "Phân loại", problem: "Rừng ngập mặn Cần Giờ thuộc hệ sinh thái nào?", solution: "Hệ sinh thái rừng ngập mặn ven biển." },
    { title: "Liên hệ", problem: "Học sinh có thể làm gì để bảo vệ sinh vật?", solution: "Không mua bán động vật hoang dã, trồng cây, giữ gìn môi trường." }
  ],
  exercises: [
    { question: "Vườn quốc gia đầu tiên của Việt Nam?", hints: ["Năm 1962.", "Cúc …"], solution: "Cúc Phương." },
    { question: "Kể một nguyên nhân suy giảm đa dạng sinh học.", hints: ["Rừng.", "Phá …"], solution: "Phá rừng (săn bắt trái phép, ô nhiễm)." },
    { question: "Từ 1962 đến 2008 là bao nhiêu năm?", hints: ["2008 − 1962.", "…"], solution: "46 năm." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Cúc Phương là vườn quốc gia đầu tiên của Việt Nam.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Khu dự trữ sinh quyển rừng ngập mặn ở TP Hồ Chí Minh:", options: ["Cần Giờ", "Cúc Phương", "Ba Vì", "Bạch Mã"], answer: 0, explain: "Cần Giờ." },
    { type: 'short', q: "Từ 1962 đến 2022 là bao nhiêu năm?", answer: "60", unit: "năm", calc: "2022-1962", explain: "60." },
    { type: 'mcq', q: "Nguyên nhân suy giảm đa dạng sinh học:", options: ["Săn bắt trái phép", "Trồng rừng", "Lập khu bảo tồn", "Phân loại rác"], answer: 0, explain: "Săn bắt." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Đa dạng sinh học Việt Nam đang tăng nhanh, không cần bảo vệ.", answer: false, explain: "Đang suy giảm." },
    { type: 'mcq', q: "Sách ghi tên các loài nguy cấp:", options: ["Sách Đỏ", "Sách Xanh", "Sách Trắng", "Niên giám thống kê"], answer: 0, explain: "Sách Đỏ." },
    { type: 'short', q: "Luật Đa dạng sinh học ban hành năm 2008. Đến năm 2028 là bao nhiêu năm?", answer: "20", unit: "năm", calc: "2028-2008", explain: "20." },
    { type: 'mcq', q: "Hệ sinh thái biển:", options: ["Rạn san hô", "Rừng thông", "Ruộng lúa", "Đồng cỏ núi cao"], answer: 0, explain: "Rạn san hô." }
  ]
});
})();
