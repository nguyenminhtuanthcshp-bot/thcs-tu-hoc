/* LS&ĐL 9 – Lịch sử, Bài 7. Phong trào cách mạng Việt Nam thời kì 1930 – 1939. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-9/ls-bai-7', {
  objectives: [
    "Trình bày được phong trào cách mạng 1930 – 1931 và Xô viết Nghệ – Tĩnh.",
    "Nêu được sự phục hồi lực lượng cách mạng (1932 – 1935).",
    "Trình bày được phong trào dân chủ 1936 – 1939 và ý nghĩa."
  ],
  intro: "Ra đời chưa đầy một năm, Đảng đã lãnh đạo một cao trào cách mạng rộng lớn, đỉnh cao là Xô viết Nghệ – Tĩnh. Cách mạng đã trải qua những bước thăng trầm nào trong mười năm ấy?",
  steps: [
    { title: "Phong trào 1930 – 1931", html: "<p>Khủng hoảng kinh tế làm đời sống nhân dân cùng cực. Ngày 1/5/1930, phong trào bùng lên khắp cả nước. Ở Nghệ An, Hà Tĩnh, chính quyền địch tan rã, các <b>Xô viết</b> ra đời, thực hiện nhiều chính sách tiến bộ.</p>",
      svg: S.timeline({ title: "1930 – 1939", items: [{ y: "5/1930", s: "Bùng nổ phong trào" }, { y: "9/1930", s: "Đỉnh cao Nghệ – Tĩnh" }, { y: "10/1930", s: "Luận cương chính trị" }, { y: "1932 – 1935", s: "Phục hồi" }, { y: "1936 – 1939", s: "Phong trào dân chủ" }] }), caption: "Các giai đoạn." },
    { title: "Luận cương chính trị (10/1930)", html: "<p>Hội nghị Ban Chấp hành Trung ương lần thứ nhất (10/1930) đổi tên thành Đảng Cộng sản Đông Dương, thông qua Luận cương chính trị do <b>Trần Phú</b> soạn thảo; Trần Phú được bầu làm Tổng Bí thư.</p>" },
    { title: "Phục hồi và phong trào dân chủ", html: "<ul><li>1932 – 1935: lực lượng được phục hồi; Đại hội lần thứ nhất của Đảng họp ở Ma Cao (3/1935).</li><li>1936 – 1939: đấu tranh công khai, hợp pháp đòi tự do, dân chủ, cơm áo, hoà bình; lập Mặt trận Dân chủ Đông Dương.</li></ul>",
      svg: S.table({ title: "So sánh hai phong trào", head: ["1930 – 1931", "1936 – 1939"], rows: [["Bạo lực, quyết liệt", "Công khai, hợp pháp"], ["Đỉnh cao: Xô viết", "Mặt trận Dân chủ"], ["Bị khủng bố", "Mở rộng ảnh hưởng"]], colW: 250 }), caption: "Hai hình thức đấu tranh." },
    { title: "Ý nghĩa", html: "<div class=\"box key\">Phong trào 1930 – 1931 là cuộc tập dượt đầu tiên; phong trào 1936 – 1939 là cuộc tập dượt thứ hai, chuẩn bị lực lượng chính trị, cán bộ cho Cách mạng tháng Tám năm 1945.</div>" }
  ],
  summary: "Phong trào 1930 – 1931 với đỉnh cao Xô viết Nghệ – Tĩnh là cuộc tập dượt đầu tiên của cách mạng. Tháng 10/1930, Đảng đổi tên thành Đảng Cộng sản Đông Dương, thông qua Luận cương do Trần Phú soạn. 1932 – 1935 lực lượng phục hồi (Đại hội I, 3/1935). 1936 – 1939 là phong trào dân chủ công khai, hợp pháp – cuộc tập dượt thứ hai.",
  examples: [
    { title: "Tính", problem: "Từ 1930 đến 1945 là bao nhiêu năm?", solution: "15 năm." },
    { title: "So sánh", problem: "Mục tiêu đấu tranh 1936 – 1939 khác 1930 – 1931 thế nào?", solution: "1936 – 1939 tập trung đòi tự do, dân chủ, cơm áo, hoà bình (mục tiêu trước mắt), hình thức công khai, hợp pháp." },
    { title: "Giải thích", problem: "Vì sao gọi là “tập dượt”?", solution: "Đảng và quần chúng rút ra kinh nghiệm về lãnh đạo, tổ chức, hình thức đấu tranh để chuẩn bị cho tổng khởi nghĩa." }
  ],
  exercises: [
    { question: "Ai soạn Luận cương chính trị 10/1930?", hints: ["Tổng Bí thư đầu tiên.", "Trần …"], solution: "Trần Phú." },
    { question: "Đại hội I của Đảng họp ở đâu?", hints: ["Ngoài lãnh thổ, năm 1935.", "Ma …"], solution: "Ma Cao (3/1935)." },
    { question: "Đỉnh cao phong trào 1930 – 1931?", hints: ["Hai tỉnh miền Trung.", "Xô viết …"], solution: "Xô viết Nghệ – Tĩnh." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Xô viết Nghệ – Tĩnh là đỉnh cao của phong trào 1930 – 1931.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Tháng 10/1930, Đảng đổi tên thành:", options: ["Đảng Cộng sản Đông Dương", "Đảng Lao động Việt Nam", "Đông Dương Cộng sản đảng", "Hội Việt Nam Cách mạng Thanh niên"], answer: 0, explain: "Đảng Cộng sản Đông Dương." },
    { type: 'short', q: "Từ 1936 đến 1939 là bao nhiêu năm?", answer: "3", unit: "năm", calc: "1939-1936", explain: "3." },
    { type: 'mcq', q: "Hình thức đấu tranh chủ yếu 1936 – 1939:", options: ["Công khai, hợp pháp", "Khởi nghĩa vũ trang", "Chiến tranh du kích", "Ám sát"], answer: 0, explain: "Công khai, hợp pháp." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Đại hội lần thứ nhất của Đảng họp năm 1930.", answer: false, explain: "Họp tháng 3/1935." },
    { type: 'mcq', q: "Tổng Bí thư đầu tiên của Đảng:", options: ["Trần Phú", "Lê Duẩn", "Trường Chinh", "Nguyễn Văn Cừ"], answer: 0, explain: "Trần Phú." },
    { type: 'short', q: "Từ Luận cương chính trị (1930) đến Đại hội I của Đảng (1935) là bao nhiêu năm?", answer: "5", unit: "năm", calc: "1935-1930", explain: "5." },
    { type: 'mcq', q: "Mặt trận được lập trong thời kì 1936 – 1939:", options: ["Mặt trận Dân chủ Đông Dương", "Mặt trận Việt Minh", "Mặt trận Liên Việt", "Mặt trận Tổ quốc"], answer: 0, explain: "Mặt trận Dân chủ Đông Dương." }
  ]
});
})();
