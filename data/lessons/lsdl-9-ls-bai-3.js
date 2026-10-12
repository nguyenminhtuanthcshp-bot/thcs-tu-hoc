/* LS&ĐL 9 – Lịch sử, Bài 3. Châu Á từ năm 1918 đến năm 1945. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-9/ls-bai-3', {
  objectives: [
    "Nêu được những nét chính về Nhật Bản giữa hai cuộc chiến tranh.",
    "Trình bày được phong trào cách mạng ở Trung Quốc, Ấn Độ.",
    "Nêu được phong trào độc lập dân tộc ở Đông Nam Á."
  ],
  intro: "Đầu những năm 1920, nhiều đảng cộng sản ra đời ở châu Á. Khu vực này đã chuyển mình như thế nào trong hai thập niên giữa hai cuộc chiến?",
  steps: [
    { title: "Nhật Bản", html: "<p>Khủng hoảng 1929 – 1933 đẩy Nhật vào con đường quân phiệt hoá. Năm <b>1931</b> Nhật đánh chiếm Đông Bắc Trung Quốc, năm 1937 mở rộng chiến tranh xâm lược Trung Quốc.</p>" },
    { title: "Trung Quốc và Ấn Độ", html: "<ul><li>Phong trào Ngũ tứ (4/5/<b>1919</b>) mở đầu cách mạng dân chủ mới; Đảng Cộng sản Trung Quốc thành lập tháng 7/<b>1921</b>.</li><li>Ấn Độ: Đảng Quốc đại do M. Gan-đi lãnh đạo, đấu tranh bằng phương pháp bất bạo động.</li></ul>",
      svg: S.timeline({ title: "Châu Á 1919 – 1937", items: [{ y: "4/5/1919", s: "Phong trào Ngũ tứ" }, { y: "7/1921", s: "ĐCS Trung Quốc" }, { y: "1931", s: "Nhật chiếm Đông Bắc TQ" }, { y: "7/1937", s: "Nhật xâm lược TQ" }] }), caption: "Một số mốc." },
    { title: "Đông Nam Á", html: "<p>Giai cấp công nhân trưởng thành; các đảng cộng sản ra đời: In-đô-nê-xi-a (1920), Việt Nam (1930), Mã Lai, Xiêm, Phi-líp-pin (1930). Ở Xiêm, cuộc cách mạng năm 1932 chuyển sang quân chủ lập hiến.</p>",
      svg: S.table({ title: "Phong trào ở Đông Nam Á", head: ["Nước", "Nét chính"], rows: [["In-đô-nê-xi-a", "Đảng Cộng sản (1920)"], ["Việt Nam", "Đảng Cộng sản (1930)"], ["Xiêm", "Cách mạng 1932"], ["Miến Điện", "Đòi độc lập"]], colW: 250 }), caption: "Một số ví dụ tiêu biểu." },
    { title: "Ghi nhớ", html: "<div class=\"box key\">Giai đoạn 1918 – 1945, phong trào độc lập dân tộc ở châu Á phát triển mạnh với hai khuynh hướng: dân chủ tư sản và vô sản. Trong khi đó, Nhật Bản trở thành lò lửa chiến tranh ở châu Á.</div>" }
  ],
  summary: "Từ 1918 đến 1945, Nhật Bản quân phiệt hoá, xâm lược Trung Quốc (1931, 1937). Ở Trung Quốc, phong trào Ngũ tứ (1919) mở đầu cách mạng dân chủ mới, Đảng Cộng sản thành lập (1921). Ấn Độ đấu tranh bất bạo động do Gan-đi lãnh đạo. Ở Đông Nam Á, các đảng cộng sản lần lượt ra đời; phong trào độc lập phát triển theo hai khuynh hướng.",
  examples: [
    { title: "Tính", problem: "Từ phong trào Ngũ tứ (1919) đến khi ĐCS Trung Quốc thành lập (1921) là bao nhiêu năm?", solution: "2 năm." },
    { title: "Nhận xét", problem: "Phương pháp đấu tranh của Gan-đi?", solution: "Bất bạo động, bất hợp tác với chính quyền thực dân Anh." },
    { title: "Giải thích", problem: "Vì sao các đảng cộng sản ra đời ở châu Á những năm 1920 – 1930?", solution: "Giai cấp công nhân trưởng thành, chủ nghĩa Mác – Lê-nin được truyền bá, ảnh hưởng của Cách mạng tháng Mười." }
  ],
  exercises: [
    { question: "Phong trào Ngũ tứ ngày nào?", hints: ["Tên gọi gợi ý ngày, tháng.", "Năm 1919."], solution: "4/5/1919." },
    { question: "Đảng Cộng sản In-đô-nê-xi-a ra đời năm?", hints: ["Sớm nhất Đông Nam Á.", "Năm 192…"], solution: "Năm 1920." },
    { question: "Nhật chiếm Đông Bắc Trung Quốc năm?", hints: ["Trong khủng hoảng.", "Năm 193…"], solution: "Năm 1931." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Đảng Cộng sản Trung Quốc thành lập năm 1921.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Lãnh tụ Đảng Quốc đại theo đường lối bất bạo động:", options: ["M. Gan-đi", "Tôn Trung Sơn", "Xu-các-nô", "Mao Trạch Đông"], answer: 0, explain: "Gan-đi." },
    { type: 'short', q: "Từ 1920 đến 1930 là bao nhiêu năm?", answer: "10", unit: "năm", calc: "1930-1920", explain: "10." },
    { type: 'mcq', q: "Nước Đông Nam Á có cách mạng năm 1932 chuyển sang quân chủ lập hiến:", options: ["Xiêm", "Miến Điện", "Lào", "Phi-líp-pin"], answer: 0, explain: "Xiêm." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Nhật Bản đi theo con đường cải cách dân chủ như Mỹ.", answer: false, explain: "Nhật quân phiệt hoá." },
    { type: 'mcq', q: "Phong trào mở đầu cách mạng dân chủ mới ở Trung Quốc:", options: ["Ngũ tứ", "Nghĩa Hoà đoàn", "Thái bình Thiên quốc", "Duy tân Mậu Tuất"], answer: 0, explain: "Ngũ tứ." },
    { type: 'short', q: "Từ 1931 đến 1945 là bao nhiêu năm?", answer: "14", unit: "năm", calc: "1945-1931", explain: "14." },
    { type: 'mcq', q: "Đảng Cộng sản đầu tiên ở Đông Nam Á ra đời ở:", options: ["In-đô-nê-xi-a", "Việt Nam", "Xiêm", "Mã Lai"], answer: 0, explain: "In-đô-nê-xi-a (1920)." }
  ]
});
})();
