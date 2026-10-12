/* LS&ĐL 8 – Lịch sử, Bài 14. Trung Quốc và Nhật Bản từ nửa sau thế kỉ XIX đến đầu thế kỉ XX. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-8/ls-bai-14', {
  objectives: [
    "Trình bày được quá trình xâm lược Trung Quốc của các nước đế quốc.",
    "Nêu được nét chính của Cách mạng Tân Hợi (1911).",
    "Trình bày được nội dung và ý nghĩa của cuộc Duy tân Minh Trị."
  ],
  intro: "Cùng ở châu Á, cùng bị phương Tây đe doạ, nhưng Trung Quốc bị xâu xé còn Nhật Bản lại trở thành cường quốc. Vì sao?",
  steps: [
    { title: "Trung Quốc bị xâu xé", html: "<p>Sau Chiến tranh thuốc phiện (<b>1840 – 1842</b>), Trung Quốc từng bước bị các nước đế quốc xâu xé, trở thành nước nửa thuộc địa, nửa phong kiến. Nhân dân đấu tranh mạnh mẽ: Thái bình Thiên quốc (1851 – 1864), Duy tân Mậu Tuất (1898), Nghĩa Hoà đoàn (cuối thế kỉ XIX – đầu thế kỉ XX).</p>" },
    { title: "Cách mạng Tân Hợi (1911)", html: "<p>Tôn Trung Sơn lập Trung Quốc Đồng minh hội (1905) với chủ nghĩa Tam dân. Ngày 10/10/<b>1911</b>, khởi nghĩa Vũ Xương thắng lợi; năm 1912 Trung Hoa Dân quốc thành lập, chế độ quân chủ bị lật đổ.</p>",
      svg: S.timeline({ title: "Trung Quốc", items: [{ y: "1840 – 1842", s: "Chiến tranh thuốc phiện" }, { y: "1851 – 1864", s: "Thái bình Thiên quốc" }, { y: "1898", s: "Duy tân Mậu Tuất" }, { y: "1911", s: "Cách mạng Tân Hợi" }] }), caption: "Cách mạng Tân Hợi là cuộc cách mạng dân chủ tư sản." },
    { title: "Duy tân Minh Trị (1868)", html: "<p>Năm <b>1868</b>, Thiên hoàng Minh Trị tiến hành cải cách toàn diện:</p>",
      svg: S.table({ title: "Nội dung cải cách Minh Trị", head: ["Lĩnh vực", "Nội dung"], rows: [["Chính trị", "Xoá chế độ Mạc phủ, ban hành hiến pháp"], ["Kinh tế", "Thống nhất tiền tệ, phát triển công nghiệp"], ["Quân sự", "Tổ chức quân đội theo kiểu phương Tây"], ["Giáo dục", "Bắt buộc, chú trọng khoa học"]], colW: 250 }), caption: "Nhờ cải cách, Nhật Bản thoát khỏi nguy cơ bị xâm lược." },
    { title: "So sánh", html: "<div class=\"box key\">Trung Quốc: triều Mãn Thanh bảo thủ → bị xâu xé. Nhật Bản: cải cách Minh Trị → phát triển thành nước đế quốc.</div>" }
  ],
  summary: "Sau Chiến tranh thuốc phiện (1840 – 1842), Trung Quốc bị đế quốc xâu xé thành nước nửa thuộc địa, nửa phong kiến; nhân dân đấu tranh: Thái bình Thiên quốc, Duy tân Mậu Tuất (1898), Nghĩa Hoà đoàn. Cách mạng Tân Hợi (1911) do Tôn Trung Sơn lãnh đạo lật đổ triều Mãn Thanh. Ở Nhật Bản, Duy tân Minh Trị (1868) cải cách toàn diện, đưa Nhật thành nước tư bản, rồi đế quốc.",
  examples: [
    { title: "Tính", problem: "Từ 1868 đến 1911 là bao nhiêu năm?", solution: "43 năm." },
    { title: "Khái niệm", problem: "Chủ nghĩa Tam dân gồm gì?", solution: "Dân tộc độc lập, dân quyền tự do, dân sinh hạnh phúc." },
    { title: "Phân tích", problem: "Vì sao Nhật Bản thoát khỏi số phận thuộc địa?", solution: "Nhờ cuộc cải cách Minh Trị toàn diện, hiện đại hoá đất nước." }
  ],
  exercises: [
    { question: "Ai lãnh đạo Cách mạng Tân Hợi?", hints: ["Người sáng lập Đồng minh hội.", "Tôn …"], solution: "Tôn Trung Sơn." },
    { question: "Duy tân Minh Trị bắt đầu năm nào?", hints: ["Nửa sau thế kỉ XIX.", "186…"], solution: "Năm 1868." },
    { question: "Thái bình Thiên quốc kéo dài bao nhiêu năm (1851 – 1864)?", hints: ["1864 − 1851.", "…"], solution: "13 năm." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Cách mạng Tân Hợi diễn ra năm 1911.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Cuộc cải cách ở Nhật Bản năm 1868:", options: ["Duy tân Minh Trị", "Duy tân Mậu Tuất", "Tân Hợi", "Thái bình Thiên quốc"], answer: 0, explain: "Minh Trị." },
    { type: 'short', q: "Từ 1840 đến 1842 là bao nhiêu năm?", answer: "2", unit: "năm", calc: "1842-1840", explain: "2." },
    { type: 'mcq', q: "Tổ chức do Tôn Trung Sơn lập năm 1905:", options: ["Trung Quốc Đồng minh hội", "Nghĩa Hoà đoàn", "Quốc tế thứ hai", "Đảng Bôn-sê-vích"], answer: 0, explain: "Đồng minh hội." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Cải cách Minh Trị khiến Nhật Bản trở thành thuộc địa.", answer: false, explain: "Nhật trở thành cường quốc." },
    { type: 'mcq', q: "Cuối thế kỉ XIX, Trung Quốc trở thành nước:", options: ["Nửa thuộc địa, nửa phong kiến", "Đế quốc", "Tư bản phát triển", "Xã hội chủ nghĩa"], answer: 0, explain: "Đúng." },
    { type: 'short', q: "Từ 1868 đến 1911 là bao nhiêu năm?", answer: "43", unit: "năm", calc: "1911-1868", explain: "43." },
    { type: 'mcq', q: "Phong trào cải cách ở Trung Quốc năm 1898:", options: ["Duy tân Mậu Tuất", "Minh Trị", "Tân Hợi", "Ngũ Tứ"], answer: 0, explain: "Mậu Tuất." }
  ]
});
})();
