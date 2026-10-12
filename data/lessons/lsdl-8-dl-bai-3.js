/* LS&ĐL 8 – Địa lí, Bài 3. Khoáng sản Việt Nam. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-8/dl-bai-3', {
  objectives: [
    "Trình bày được đặc điểm chung của tài nguyên khoáng sản Việt Nam.",
    "Xác định được sự phân bố các loại khoáng sản chủ yếu.",
    "Nêu được vấn đề sử dụng hợp lí tài nguyên khoáng sản."
  ],
  intro: "Than ở Quảng Ninh, dầu khí ở thềm lục địa phía nam, bô-xít ở Tây Nguyên… Việt Nam có nguồn khoáng sản phong phú.",
  steps: [
    { title: "Đặc điểm chung", html: "<p>Nước ta có khoảng <b>5 000</b> điểm quặng và tụ khoáng với hơn <b>60</b> loại khoáng sản khác nhau. Phần lớn các mỏ có trữ lượng vừa và nhỏ; một số có trữ lượng lớn: than, dầu khí, bô-xít, đất hiếm, đá vôi.</p>" },
    { title: "Phân bố", html: "<p>Bảng tóm tắt:</p>",
      svg: S.table({ title: "Phân bố một số khoáng sản", head: ["Khoáng sản", "Nơi phân bố chính"], rows: [["Than đá", "Quảng Ninh"], ["Dầu mỏ, khí đốt", "Thềm lục địa phía nam"], ["Bô-xít", "Tây Nguyên"], ["A-pa-tít", "Lào Cai"], ["Đá vôi", "Miền Bắc, miền Trung"]], colW: 250 }), caption: "Bể Cửu Long và Nam Côn Sơn là hai bể dầu khí quan trọng." },
    { title: "Vấn đề khai thác", html: "<p>Khai thác thiếu quy hoạch gây lãng phí, ô nhiễm môi trường (bụi than, nước thải), sạt lở đất.</p>",
      svg: S.flowchart({ title: "Sử dụng hợp lí khoáng sản", steps: [{ t: 'start', s: "Quy hoạch thăm dò" }, { t: 'proc', s: "Khai thác tiết kiệm" }, { t: 'proc', s: "Xử lí chất thải" }, { t: 'end', s: "Hoàn nguyên môi trường" }] }), caption: "Luật Khoáng sản quy định việc bảo vệ, khai thác khoáng sản." },
    { title: "Ghi nhớ", html: "<div class=\"box key\">Khoáng sản là tài nguyên không thể phục hồi; cần khai thác hợp lí, tiết kiệm và bảo vệ môi trường.</div>" }
  ],
  summary: "Việt Nam có khoảng 5 000 điểm quặng và tụ khoáng với hơn 60 loại khoáng sản, phần lớn trữ lượng vừa và nhỏ. Khoáng sản chính: than (Quảng Ninh), dầu khí (thềm lục địa phía nam), bô-xít (Tây Nguyên), a-pa-tít (Lào Cai), đá vôi. Khai thác thiếu quy hoạch gây ô nhiễm, lãng phí; cần quy hoạch, tiết kiệm, hoàn nguyên môi trường.",
  examples: [
    { title: "Xác định", problem: "Than đá tập trung chủ yếu ở đâu?", solution: "Quảng Ninh." },
    { title: "Phân tích", problem: "Vì sao khoáng sản là tài nguyên không phục hồi?", solution: "Phải mất hàng triệu năm mới hình thành, khai thác hết là cạn kiệt." },
    { title: "Tính", problem: "Một mỏ có trữ lượng 30 triệu tấn, mỗi năm khai thác 2 triệu tấn. Đủ khai thác bao nhiêu năm? (số liệu minh hoạ)", solution: "30 : 2 = 15 năm." }
  ],
  exercises: [
    { question: "A-pa-tít tập trung ở tỉnh nào?", hints: ["Vùng núi Tây Bắc.", "Lào …"], solution: "Lào Cai." },
    { question: "Bô-xít phân bố nhiều ở vùng nào?", hints: ["Cao nguyên badan.", "Tây …"], solution: "Tây Nguyên." },
    { question: "Nêu một biện pháp sử dụng hợp lí khoáng sản.", hints: ["Tiết kiệm.", "Hoặc hoàn nguyên."], solution: "Khai thác theo quy hoạch, tiết kiệm, hoàn nguyên môi trường." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Khoáng sản là tài nguyên không thể phục hồi.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Vùng có nhiều than đá nhất:", options: ["Quảng Ninh", "Tây Nguyên", "Lào Cai", "Đồng bằng sông Cửu Long"], answer: 0, explain: "Quảng Ninh." },
    { type: 'short', q: "Mỏ có 30 triệu tấn, mỗi năm khai thác 2 triệu tấn. Đủ bao nhiêu năm? (minh hoạ)", answer: "15", unit: "năm", calc: "30/2", explain: "15." },
    { type: 'mcq', q: "Dầu khí tập trung ở:", options: ["Thềm lục địa phía nam", "Vùng núi Tây Bắc", "Đồng bằng sông Hồng", "Cao nguyên Mộc Châu"], answer: 0, explain: "Thềm lục địa phía nam." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Phần lớn mỏ khoáng sản nước ta có trữ lượng rất lớn.", answer: false, explain: "Phần lớn vừa và nhỏ." },
    { type: 'mcq', q: "Bô-xít phân bố chủ yếu ở:", options: ["Tây Nguyên", "Quảng Ninh", "Thanh Hoá", "Hà Nội"], answer: 0, explain: "Tây Nguyên." },
    { type: 'short', q: "Nước ta có hơn 60 loại khoáng sản; nếu đã học 12 loại thì còn ít nhất bao nhiêu loại?", answer: "48", unit: "loại", calc: "60-12", explain: "48." },
    { type: 'mcq', q: "Hậu quả của khai thác khoáng sản bừa bãi:", options: ["Ô nhiễm môi trường", "Tăng diện tích rừng", "Giảm bụi", "Đất màu mỡ hơn"], answer: 0, explain: "Ô nhiễm." }
  ]
});
})();
