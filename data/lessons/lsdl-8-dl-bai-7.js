/* LS&ĐL 8 – Địa lí, Bài 7. Vai trò của tài nguyên khí hậu và tài nguyên nước đối với sự phát triển kinh tế – xã hội của nước ta. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-8/dl-bai-7', {
  objectives: [
    "Phân tích được vai trò của khí hậu đối với nông nghiệp và du lịch.",
    "Phân tích được vai trò của tài nguyên nước.",
    "Nêu được biện pháp sử dụng hợp lí tài nguyên nước."
  ],
  intro: "Nhờ khí hậu nóng ẩm, nhiều vùng ở nước ta trồng lúa 2 – 3 vụ một năm. Nước sông còn cho ta điện, thuỷ sản và đường giao thông.",
  steps: [
    { title: "Vai trò của khí hậu", html: "<ul><li><b>Nông nghiệp</b>: nhiệt ẩm dồi dào giúp cây trồng phát triển quanh năm, thâm canh, tăng vụ; khí hậu phân hoá cho phép trồng cả cây nhiệt đới, cận nhiệt và ôn đới (ở vùng núi cao).</li><li><b>Du lịch</b>: nhiều nơi có khí hậu mát mẻ (Sa Pa, Đà Lạt); biển ấm thuận lợi du lịch biển.</li></ul>" },
    { title: "Vai trò của tài nguyên nước", html: "<p>Tóm tắt:</p>",
      svg: S.mindmap({ center: "Tài nguyên nước", branches: [{ title: "Nông nghiệp", items: ["Tưới tiêu", "Nuôi trồng thuỷ sản"] }, { title: "Công nghiệp", items: ["Thuỷ điện", "Nước sản xuất"] }, { title: "Dịch vụ", items: ["Giao thông đường sông", "Du lịch"] }, { title: "Sinh hoạt", items: ["Nước sạch"] }], w: 640, size: 13 }), caption: "Nước là tài nguyên quý, cần bảo vệ." },
    { title: "Khó khăn", html: "<p>Khí hậu nhiều thiên tai: bão, lũ, hạn hán, rét đậm rét hại. Nguồn nước phân bố không đều theo mùa, một số nơi bị ô nhiễm.</p>" },
    { title: "Sử dụng hợp lí", html: "<p>Các biện pháp:</p>",
      svg: S.flowchart({ title: "Sử dụng hợp lí tài nguyên nước", steps: [{ t: 'start', s: "Xây hồ chứa, thuỷ lợi" }, { t: 'proc', s: "Tiết kiệm nước" }, { t: 'proc', s: "Xử lí nước thải" }, { t: 'end', s: "Bảo vệ rừng đầu nguồn" }] }), caption: "Rừng đầu nguồn giúp điều hoà dòng chảy." }
  ],
  summary: "Khí hậu nhiệt đới ẩm gió mùa giúp nông nghiệp phát triển quanh năm, đa dạng cây trồng; tạo điều kiện cho du lịch. Tài nguyên nước phục vụ nông nghiệp (tưới, thuỷ sản), công nghiệp (thuỷ điện), giao thông, du lịch, sinh hoạt. Khó khăn: thiên tai, nước phân bố không đều, ô nhiễm. Cần xây dựng thuỷ lợi, tiết kiệm nước, xử lí nước thải, bảo vệ rừng đầu nguồn.",
  examples: [
    { title: "Giải thích", problem: "Vì sao Đà Lạt trồng được rau, hoa ôn đới?", solution: "Do độ cao lớn, khí hậu mát mẻ quanh năm." },
    { title: "Tính", problem: "Một ruộng trồng 3 vụ/năm, mỗi vụ 6 tấn thóc/ha. Một năm được bao nhiêu tấn/ha? (minh hoạ)", solution: "18 tấn/ha." },
    { title: "Liên hệ", problem: "Em có thể làm gì để tiết kiệm nước?", solution: "Khoá vòi khi không dùng, tái sử dụng nước rửa rau để tưới cây." }
  ],
  exercises: [
    { question: "Kể một nơi có khí hậu mát mẻ để du lịch.", hints: ["Ở Lào Cai.", "Sa …"], solution: "Sa Pa (hoặc Đà Lạt)." },
    { question: "Nêu một vai trò của nước với công nghiệp.", hints: ["Phát điện.", "Thuỷ …"], solution: "Thuỷ điện." },
    { question: "Nêu một biện pháp bảo vệ nguồn nước.", hints: ["Xử lí …", "Hoặc bảo vệ rừng."], solution: "Xử lí nước thải trước khi thải ra sông." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Khí hậu nóng ẩm giúp cây trồng phát triển quanh năm.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Vai trò của nước với công nghiệp:", options: ["Thuỷ điện", "Rét đậm", "Bão", "Sương muối"], answer: 0, explain: "Thuỷ điện." },
    { type: 'short', q: "Mỗi vụ 6 tấn/ha, 3 vụ/năm. Một năm được bao nhiêu tấn/ha? (minh hoạ)", answer: "18", unit: "tấn/ha", calc: "6*3", explain: "18." },
    { type: 'mcq', q: "Thiên tai do khí hậu:", options: ["Bão", "Động đất", "Núi lửa", "Sóng thần do động đất"], answer: 0, explain: "Bão." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Nguồn nước nước ta phân bố đều quanh năm.", answer: false, explain: "Không đều theo mùa." },
    { type: 'mcq', q: "Biện pháp bảo vệ tài nguyên nước:", options: ["Bảo vệ rừng đầu nguồn", "Chặt rừng", "Xả thải trực tiếp", "Lãng phí nước"], answer: 0, explain: "Đúng." },
    { type: 'short', q: "Một hộ dùng 15 m³ nước/tháng, tiết kiệm 20%. Mỗi tháng tiết kiệm bao nhiêu m³? (minh hoạ)", answer: "3", unit: "m³", calc: "15*20/100", explain: "3." },
    { type: 'mcq', q: "Nơi có khí hậu mát mẻ quanh năm:", options: ["Đà Lạt", "Cà Mau", "Hà Nội", "Vũng Tàu"], answer: 0, explain: "Đà Lạt." }
  ]
});
})();
