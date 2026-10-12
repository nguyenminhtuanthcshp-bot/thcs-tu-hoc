/* LS&ĐL 7 – Địa lí, Bài 3. Khai thác, sử dụng và bảo vệ thiên nhiên châu Âu. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-7/dl-bai-3', {
  objectives: [
    "Nêu được các vấn đề môi trường ở châu Âu.",
    "Trình bày được các biện pháp bảo vệ môi trường không khí, nước.",
    "Trình bày được các biện pháp bảo vệ đa dạng sinh học."
  ],
  intro: "Nhiều thành phố châu Âu đã có làn đường xe đạp, vùng hạn chế ô tô, và cấm xe chạy dầu cũ vào trung tâm. Vì sao họ làm vậy?",
  steps: [
    { title: "Bảo vệ môi trường không khí", html: "<p>Khí thải công nghiệp, giao thông từng gây ô nhiễm nặng. Các biện pháp: kiểm soát khí thải, đánh thuế các-bon, phát triển <b>năng lượng tái tạo</b> (gió, Mặt Trời), giao thông công cộng, xe điện.</p>" },
    { title: "Bảo vệ môi trường nước", html: "<p>Nước sông, biển bị ô nhiễm do chất thải. Các nước kiểm soát nước thải, xử lí rác, hợp tác bảo vệ các dòng sông chảy qua nhiều nước như sông Rai-nơ, Đa-nuýp.</p>",
      svg: S.flowchart({ title: "Quy trình xử lí nước thải (giản lược)", steps: [{ t: 'start', s: "Thu gom nước thải" }, { t: 'proc', s: "Lọc rác, lắng cặn" }, { t: 'proc', s: "Xử lí sinh học" }, { t: 'end', s: "Thải ra sông, hồ" }] }), caption: "Nước thải phải được xử lí trước khi đổ ra môi trường." },
    { title: "Bảo vệ đa dạng sinh học", html: "<ul><li>Lập các khu bảo tồn, vườn quốc gia.</li><li>Trồng rừng, khai thác rừng có kế hoạch.</li><li>Hạn chế dùng hoá chất trong nông nghiệp.</li></ul>" },
    { title: "Tổng hợp", html: "<p>Bảng tóm tắt:</p>",
      svg: S.table({ title: "Bảo vệ thiên nhiên châu Âu", head: ["Vấn đề", "Giải pháp"], rows: [["Ô nhiễm không khí", "Năng lượng tái tạo, xe điện"], ["Ô nhiễm nước", "Xử lí nước thải"], ["Suy giảm rừng", "Trồng rừng, bảo tồn"], ["Rác thải", "Phân loại, tái chế"]], colW: 250 }), caption: "Châu Âu đặt mục tiêu trung hoà các-bon vào năm 2050." }
  ],
  summary: "Châu Âu từng bị ô nhiễm không khí, nước do công nghiệp và giao thông. Các biện pháp: kiểm soát khí thải, phát triển năng lượng tái tạo, giao thông công cộng; xử lí nước thải, hợp tác bảo vệ sông; lập khu bảo tồn, trồng rừng. Liên minh châu Âu đặt mục tiêu trung hoà các-bon vào năm 2050.",
  examples: [
    { title: "Phân loại", problem: "Gió và Mặt Trời thuộc loại năng lượng nào?", solution: "Năng lượng tái tạo." },
    { title: "Tính", problem: "Từ năm 2026 đến mục tiêu năm 2050 còn bao nhiêu năm?", solution: "24 năm." },
    { title: "Liên hệ", problem: "Học sinh có thể làm gì để giảm ô nhiễm không khí?", solution: "Đi bộ, đi xe đạp, dùng phương tiện công cộng, tiết kiệm điện." }
  ],
  exercises: [
    { question: "Kể hai nguồn năng lượng tái tạo.", hints: ["Không cạn kiệt.", "Từ thiên nhiên."], solution: "Gió, Mặt Trời." },
    { question: "Vì sao các nước phải hợp tác bảo vệ sông Rai-nơ?", hints: ["Sông chảy qua nhiều nước.", "Ô nhiễm lan theo dòng chảy."], solution: "Vì sông chảy qua nhiều nước, ô nhiễm ở thượng nguồn ảnh hưởng hạ nguồn." },
    { question: "Nêu một biện pháp bảo vệ đa dạng sinh học.", hints: ["Khu …", "Hoặc trồng rừng."], solution: "Lập khu bảo tồn, vườn quốc gia." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Năng lượng gió là năng lượng tái tạo.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Biện pháp giảm ô nhiễm không khí:", options: ["Phát triển xe điện", "Đốt nhiều than", "Tăng xe cá nhân", "Chặt rừng"], answer: 0, explain: "Xe điện." },
    { type: 'short', q: "Liên minh châu Âu đặt mục tiêu trung hoà các-bon năm 2050. Từ năm 2026 còn bao nhiêu năm?", answer: "24", unit: "năm", calc: "2050-2026", explain: "24." },
    { type: 'mcq', q: "Biện pháp bảo vệ môi trường nước:", options: ["Xử lí nước thải", "Đổ rác xuống sông", "Dùng nhiều phân hoá học", "Xả khói nhà máy"], answer: 0, explain: "Xử lí nước thải." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Châu Âu chưa có biện pháp nào bảo vệ môi trường.", answer: false, explain: "Có nhiều biện pháp." },
    { type: 'mcq', q: "Biện pháp bảo vệ đa dạng sinh học:", options: ["Lập khu bảo tồn", "Săn bắt tự do", "Phá rừng làm đường", "Xả thải ra biển"], answer: 0, explain: "Khu bảo tồn." },
    { type: 'short', q: "Một thành phố có 40 km làn xe đạp, xây thêm 25 km. Tổng là bao nhiêu km? (số liệu minh hoạ)", answer: "65", unit: "km", calc: "40+25", explain: "65." },
    { type: 'mcq', q: "Sông chảy qua nhiều nước châu Âu:", options: ["Đa-nuýp", "Hằng", "Nin", "Mê Công"], answer: 0, explain: "Đa-nuýp." }
  ]
});
})();
