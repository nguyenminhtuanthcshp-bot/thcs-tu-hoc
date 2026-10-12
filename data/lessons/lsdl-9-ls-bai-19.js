/* LS&ĐL 9 – Lịch sử, Bài 19. Trật tự thế giới mới từ năm 1991 đến nay. Liên bang Nga và nước Mỹ từ năm 1991 đến nay. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-9/ls-bai-19', {
  objectives: [
    "Nêu được những xu hướng chính của thế giới sau Chiến tranh lạnh.",
    "Trình bày được tình hình Liên bang Nga từ năm 1991.",
    "Trình bày được tình hình nước Mỹ từ năm 1991."
  ],
  intro: "Khi trật tự hai cực I-an-ta sụp đổ, thế giới không còn chia hai phe. Các cường quốc đã sắp xếp lại quan hệ ra sao?",
  steps: [
    { title: "Trật tự thế giới mới", html: "<ul><li>Trật tự hai cực I-an-ta tan rã (1991); thế giới hình thành theo xu hướng <b>đa cực</b>.</li><li>Các nước tập trung phát triển kinh tế; hoà bình, hợp tác là xu thế chủ đạo, nhưng xung đột khu vực, khủng bố vẫn diễn ra.</li></ul>",
      svg: S.mindmap({ center: "Xu hướng sau 1991", branches: [{ title: "Đa cực", items: ["Nhiều trung tâm"] }, { title: "Kinh tế", items: ["Ưu tiên phát triển"] }, { title: "Hợp tác", items: ["Liên kết khu vực"] }, { title: "Thách thức", items: ["Xung đột", "Khủng bố"] }], w: 640, size: 13 }), caption: "Một số xu hướng chính." },
    { title: "Liên bang Nga", html: "<p>Sau khi Liên Xô tan rã, Liên bang Nga kế thừa vị thế ở Liên hợp quốc. Thập niên 1990 kinh tế suy giảm; từ năm 2000 phục hồi, Nga khẳng định lại vị thế cường quốc.</p>" },
    { title: "Nước Mỹ", html: "<p>Mỹ vẫn là nền kinh tế lớn nhất thế giới, dẫn đầu về khoa học – công nghệ. Sự kiện khủng bố <b>11/9/2001</b> làm thay đổi chính sách an ninh của Mỹ; năm 2008 khủng hoảng tài chính bắt đầu từ Mỹ.</p>",
      svg: S.timeline({ title: "Sau năm 1991", items: [{ y: "12/1991", s: "Liên Xô tan rã" }, { y: "11/9/2001", s: "Khủng bố ở Mỹ" }, { y: "2008", s: "Khủng hoảng tài chính" }, { y: "1995", s: "Mỹ – Việt Nam bình thường hoá" }] }), caption: "Một số mốc." },
    { title: "Ghi nhớ", html: "<div class=\"box key\">Từ năm 1991, thế giới chuyển sang xu thế đa cực, lấy phát triển kinh tế làm trọng tâm; Mỹ và Nga vẫn là những cường quốc có ảnh hưởng lớn.</div>" }
  ],
  summary: "Sau năm 1991, trật tự hai cực I-an-ta sụp đổ, thế giới hướng tới đa cực, các nước ưu tiên phát triển kinh tế; hoà bình, hợp tác là xu thế chính song còn xung đột, khủng bố. Liên bang Nga kế thừa vị thế của Liên Xô, phục hồi từ năm 2000. Mỹ vẫn là cường quốc hàng đầu; chịu tác động của vụ khủng bố 11/9/2001 và khủng hoảng tài chính 2008.",
  examples: [
    { title: "Tính", problem: "Từ 1991 đến 2026 là bao nhiêu năm?", solution: "35 năm." },
    { title: "Giải thích", problem: "Vì sao các nước ưu tiên phát triển kinh tế?", solution: "Sức mạnh quốc gia dựa chủ yếu vào kinh tế, khoa học – công nghệ." },
    { title: "Nhận xét", problem: "Thách thức lớn của thế giới hiện nay?", solution: "Xung đột khu vực, khủng bố, biến đổi khí hậu, dịch bệnh." }
  ],
  exercises: [
    { question: "Trật tự thế giới hai cực tên gì?", hints: ["Hội nghị năm 1945.", "I-an-…"], solution: "Trật tự I-an-ta." },
    { question: "Vụ khủng bố ở Mỹ ngày nào?", hints: ["Năm 2001.", "Ngày 11/9."], solution: "11/9/2001." },
    { question: "Mỹ và Việt Nam bình thường hoá năm?", hints: ["Cùng năm Việt Nam vào ASEAN.", "199…"], solution: "Năm 1995." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Sau năm 1991, thế giới phát triển theo xu hướng đa cực.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Nước kế thừa vị thế của Liên Xô ở Liên hợp quốc:", options: ["Liên bang Nga", "U-crai-na", "Bê-la-rút", "Ca-dắc-xtan"], answer: 0, explain: "Liên bang Nga." },
    { type: 'short', q: "Từ 2001 đến 2021 là bao nhiêu năm?", answer: "20", unit: "năm", calc: "2021-2001", explain: "20." },
    { type: 'mcq', q: "Khủng hoảng tài chính toàn cầu bắt đầu năm:", options: ["2008", "1929", "1997", "2001"], answer: 0, explain: "2008." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Sau 1991, Chiến tranh lạnh vẫn tiếp diễn.", answer: false, explain: "Đã chấm dứt từ 1989." },
    { type: 'mcq', q: "Xu thế chủ đạo của thế giới sau Chiến tranh lạnh:", options: ["Hoà bình, hợp tác và phát triển", "Chạy đua vũ trang", "Chia hai phe", "Biệt lập"], answer: 0, explain: "Hoà bình, hợp tác." },
    { type: 'short', q: "Từ 1995 đến 2025 Việt Nam – Mỹ bình thường hoá được bao nhiêu năm?", answer: "30", unit: "năm", calc: "2025-1995", explain: "30." },
    { type: 'mcq', q: "Trật tự thế giới tồn tại từ 1945 đến 1991:", options: ["Hai cực I-an-ta", "Véc-xai – Oa-sinh-tơn", "Đa cực", "Đơn cực"], answer: 0, explain: "I-an-ta." }
  ]
});
})();
