/* LS&ĐL 9 – Lịch sử, Bài 2. Châu Âu và nước Mỹ từ năm 1918 đến năm 1945. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-9/ls-bai-2', {
  objectives: [
    "Nêu được phong trào cách mạng ở châu Âu sau Chiến tranh thế giới thứ nhất và sự thành lập Quốc tế Cộng sản.",
    "Trình bày được tác động của cuộc khủng hoảng kinh tế 1929 – 1933.",
    "Nêu được sự hình thành chủ nghĩa phát xít ở Đức, I-ta-li-a.",
    "Trình bày được Chính sách mới của Ru-dơ-ven ở Mỹ."
  ],
  intro: "Ngày “Thứ Năm đen tối” 24/10/1929, thị trường chứng khoán New York sụp đổ, mở đầu cuộc khủng hoảng lớn nhất thế giới tư bản. Các nước đã tìm lối thoát bằng những con đường nào?",
  steps: [
    { title: "Châu Âu sau chiến tranh", html: "<p>Cao trào cách mạng lan rộng ở Đức, Hung-ga-ri… Tháng 3/<b>1919</b>, <b>Quốc tế Cộng sản</b> được thành lập ở Mát-xcơ-va. Những năm 1924 – 1929, các nước tư bản ổn định và phát triển.</p>",
      svg: S.timeline({ title: "Thế giới tư bản", items: [{ y: "3/1919", s: "Quốc tế Cộng sản" }, { y: "1924 – 1929", s: "Ổn định" }, { y: "10/1929", s: "Khủng hoảng" }, { y: "1/1933", s: "Hít-le lên nắm quyền" }] }), caption: "Các mốc chính." },
    { title: "Khủng hoảng 1929 – 1933", html: "<p>Sản xuất ồ ạt, “cung vượt quá cầu” dẫn tới khủng hoảng thừa: hàng loạt nhà máy, ngân hàng phá sản; hàng chục triệu người thất nghiệp; đời sống nhân dân điêu đứng.</p>",
      svg: S.flowchart({ title: "Hai con đường thoát khủng hoảng", steps: [{ t: 'start', s: "Khủng hoảng 1929 – 1933" }, { t: 'proc', s: "Mỹ, Anh, Pháp: cải cách" }, { t: 'proc', s: "Đức, I-ta-li-a, Nhật: phát xít hoá" }, { t: 'end', s: "Nguy cơ chiến tranh mới" }] }), caption: "Hai con đường khác nhau." },
    { title: "Chủ nghĩa phát xít", html: "<ul><li>I-ta-li-a: Mút-xô-li-ni nắm quyền từ năm 1922.</li><li>Đức: tháng 1/<b>1933</b> Hít-le làm Thủ tướng, thiết lập chế độ độc tài, ráo riết chuẩn bị chiến tranh.</li></ul>" },
    { title: "Nước Mỹ và Chính sách mới", html: "<div class=\"box key\">Tổng thống Ru-dơ-ven (nhậm chức năm 1933) thực hiện <b>Chính sách mới</b>: Nhà nước can thiệp vào kinh tế, giải quyết thất nghiệp, phục hồi sản xuất, cứu trợ người nghèo. Mỹ vượt qua khủng hoảng mà vẫn giữ chế độ dân chủ tư sản.</div>" }
  ],
  summary: "Sau Chiến tranh thế giới thứ nhất, châu Âu dâng cao phong trào cách mạng; Quốc tế Cộng sản thành lập (3/1919). Khủng hoảng kinh tế 1929 – 1933 tàn phá thế giới tư bản. Mỹ, Anh, Pháp cải cách (Chính sách mới của Ru-dơ-ven); Đức, I-ta-li-a, Nhật Bản đi theo con đường phát xít hoá, gây nguy cơ chiến tranh.",
  examples: [
    { title: "Tính", problem: "Khủng hoảng 1929 – 1933 kéo dài bao nhiêu năm (tính theo năm)?", solution: "1933 − 1929 = 4 năm." },
    { title: "So sánh", problem: "Mỹ và Đức thoát khủng hoảng bằng hai con đường nào?", solution: "Mỹ: cải cách kinh tế – xã hội, giữ dân chủ; Đức: phát xít hoá, độc tài, chạy đua vũ trang." },
    { title: "Giải thích", problem: "Vì sao gọi là “khủng hoảng thừa”?", solution: "Hàng sản xuất ra quá nhiều nhưng người dân không đủ tiền mua, hàng ế ẩm, xí nghiệp đóng cửa." }
  ],
  exercises: [
    { question: "Quốc tế Cộng sản ra đời năm nào?", hints: ["Ngay sau chiến tranh.", "Tháng 3."], solution: "Tháng 3/1919." },
    { question: "Ai đề ra Chính sách mới ở Mỹ?", hints: ["Tổng thống Mỹ.", "Ru-…"], solution: "Ph. Ru-dơ-ven." },
    { question: "Hít-le lên nắm quyền năm nào?", hints: ["Giữa khủng hoảng.", "Năm 193…"], solution: "Tháng 1/1933." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Khủng hoảng kinh tế thế giới bắt đầu năm 1929.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Chính sách mới được thực hiện ở:", options: ["Mỹ", "Đức", "I-ta-li-a", "Nhật Bản"], answer: 0, explain: "Mỹ." },
    { type: 'short', q: "Từ 1919 (Quốc tế Cộng sản) đến 1943 (giải tán) là bao nhiêu năm?", answer: "24", unit: "năm", calc: "1943-1919", explain: "24." },
    { type: 'mcq', q: "Hít-le làm Thủ tướng Đức năm:", options: ["1933", "1929", "1922", "1939"], answer: 0, explain: "1933." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Đức thoát khủng hoảng bằng cải cách dân chủ.", answer: false, explain: "Đức phát xít hoá." },
    { type: 'mcq', q: "Người đứng đầu chủ nghĩa phát xít I-ta-li-a:", options: ["Mút-xô-li-ni", "Hít-le", "Ru-dơ-ven", "Lê-nin"], answer: 0, explain: "Mút-xô-li-ni." },
    { type: 'short', q: "Từ 1924 đến 1929 (ổn định) là bao nhiêu năm?", answer: "5", unit: "năm", calc: "1929-1924", explain: "5." },
    { type: 'mcq', q: "Hậu quả chính trị lớn của khủng hoảng 1929 – 1933:", options: ["Chủ nghĩa phát xít xuất hiện ở một số nước", "Liên Xô tan rã", "Chiến tranh lạnh", "Thành lập Liên hợp quốc"], answer: 0, explain: "Phát xít hoá." }
  ]
});
})();
