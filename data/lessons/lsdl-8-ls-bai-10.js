/* LS&ĐL 8 – Lịch sử, Bài 10. Sự hình thành chủ nghĩa đế quốc ở các nước Âu – Mỹ (cuối thế kỉ XIX – đầu thế kỉ XX). Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-8/ls-bai-10', {
  objectives: [
    "Nêu được những nét chính về quá trình hình thành chủ nghĩa đế quốc.",
    "Trình bày được đặc điểm của các nước đế quốc Anh, Pháp, Đức, Mỹ.",
    "Nêu được sự tăng cường xâm lược thuộc địa."
  ],
  intro: "Đầu thế kỉ XX, người ta nói “Mặt Trời không bao giờ lặn trên đế quốc Anh”, vì thuộc địa của Anh trải khắp các châu lục.",
  steps: [
    { title: "Sự hình thành chủ nghĩa đế quốc", html: "<p>Cuối thế kỉ XIX, sản xuất công nghiệp tập trung cao, hình thành các <b>công ti độc quyền</b> (các-ten, xanh-đi-ca, tơ-rớt). Các nước tư bản tăng cường xâm chiếm thuộc địa – chủ nghĩa tư bản chuyển sang giai đoạn <b>đế quốc chủ nghĩa</b>.</p>" },
    { title: "Đặc điểm các nước đế quốc", html: "<p>Tóm tắt:</p>",
      svg: S.table({ title: "Đặc điểm các nước đế quốc", head: ["Nước", "Đặc điểm (thường gọi)"], rows: [["Anh", "Chủ nghĩa đế quốc thực dân"], ["Pháp", "Chủ nghĩa đế quốc cho vay lãi"], ["Đức", "Đế quốc quân phiệt, hiếu chiến"], ["Mỹ", "Xứ sở của các “ông vua” công nghiệp"]], colW: 250 }), caption: "Cách gọi theo truyền thống sử học, nhấn mạnh nét nổi bật của từng nước." },
    { title: "Xâm chiếm thuộc địa", html: "<p>Các nước đế quốc chia nhau châu Á, châu Phi; Anh có thuộc địa lớn nhất, sau đó là Pháp. Đức, Mỹ phát triển nhanh nhưng có ít thuộc địa nên đòi chia lại thế giới.</p>",
      svg: S.flowchart({ title: "Từ độc quyền đến chiến tranh", steps: [{ t: 'start', s: "Tập trung sản xuất" }, { t: 'proc', s: "Công ti độc quyền" }, { t: 'proc', s: "Tranh giành thuộc địa" }, { t: 'end', s: "Mâu thuẫn, chiến tranh" }] }), caption: "Mâu thuẫn giữa các nước đế quốc dẫn tới Chiến tranh thế giới thứ nhất." },
    { title: "Ghi nhớ", html: "<div class=\"box key\">Cuối thế kỉ XIX – đầu thế kỉ XX: chủ nghĩa tư bản chuyển sang chủ nghĩa đế quốc với các công ti độc quyền và cuộc chạy đua giành thuộc địa.</div>" }
  ],
  summary: "Cuối thế kỉ XIX – đầu thế kỉ XX, sản xuất tập trung hình thành các công ti độc quyền; các nước tư bản đẩy mạnh xâm chiếm thuộc địa, chủ nghĩa tư bản chuyển sang chủ nghĩa đế quốc. Anh – đế quốc thực dân; Pháp – đế quốc cho vay lãi; Đức – đế quốc quân phiệt; Mỹ – xứ sở của các “ông vua” công nghiệp. Mâu thuẫn về thuộc địa ngày càng gay gắt.",
  examples: [
    { title: "Khái niệm", problem: "Công ti độc quyền là gì?", solution: "Liên minh lớn của các nhà tư bản, nắm phần lớn sản xuất và tiêu thụ một loại hàng." },
    { title: "Phân tích", problem: "Vì sao Đức, Mỹ đòi chia lại thuộc địa?", solution: "Kinh tế phát triển nhanh nhưng có ít thuộc địa." },
    { title: "Tính", problem: "Từ 1870 đến 1914 là bao nhiêu năm?", solution: "44 năm." }
  ],
  exercises: [
    { question: "Đế quốc có nhiều thuộc địa nhất?", hints: ["“Mặt Trời không bao giờ lặn”.", "Một đảo quốc."], solution: "Đế quốc Anh." },
    { question: "Pháp được gọi là đế quốc gì?", hints: ["Liên quan đến tiền.", "Cho vay …"], solution: "Chủ nghĩa đế quốc cho vay lãi." },
    { question: "Nêu một hình thức công ti độc quyền.", hints: ["Tơ-…", "Hoặc các-ten."], solution: "Tơ-rớt (các-ten, xanh-đi-ca)." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Cuối thế kỉ XIX, các công ti độc quyền ra đời ở các nước tư bản.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "“Chủ nghĩa đế quốc thực dân” là đặc điểm của:", options: ["Anh", "Pháp", "Đức", "Mỹ"], answer: 0, explain: "Anh." },
    { type: 'short', q: "Từ 1870 đến 1914 là bao nhiêu năm?", answer: "44", unit: "năm", calc: "1914-1870", explain: "44." },
    { type: 'mcq', q: "Đế quốc quân phiệt, hiếu chiến:", options: ["Đức", "Anh", "Pháp", "Mỹ"], answer: 0, explain: "Đức." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Đức là nước có nhiều thuộc địa nhất thế giới.", answer: false, explain: "Anh có nhiều nhất." },
    { type: 'mcq', q: "Hình thức độc quyền phổ biến ở Mỹ:", options: ["Tơ-rớt", "Công xã", "Phường hội", "Thái ấp"], answer: 0, explain: "Tơ-rớt." },
    { type: 'short', q: "Năm 1900 thuộc thế kỉ thứ mấy? (ghi số)", answer: "19", calc: "Math.floor((1900-1)/100)+1", explain: "Thế kỉ XIX (năm 1900 là năm cuối thế kỉ XIX)." },
    { type: 'mcq', q: "Hệ quả của tranh giành thuộc địa:", options: ["Chiến tranh thế giới", "Hoà bình lâu dài", "Các nước giải trừ quân bị", "Xoá bỏ độc quyền"], answer: 0, explain: "Chiến tranh." }
  ]
});
})();
