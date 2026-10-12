/* LS&ĐL 9 – Lịch sử, Bài 13. Việt Nam trong năm đầu sau Cách mạng tháng Tám năm 1945. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-9/ls-bai-13', {
  objectives: [
    "Nêu được tình hình nước Việt Nam Dân chủ Cộng hoà sau Cách mạng tháng Tám.",
    "Trình bày được các biện pháp xây dựng chính quyền, giải quyết nạn đói, nạn dốt, khó khăn tài chính.",
    "Nêu được sách lược đối phó với ngoại xâm và nội phản."
  ],
  intro: "Ngay sau ngày độc lập, chính quyền non trẻ phải đối mặt với “giặc đói, giặc dốt và giặc ngoại xâm”. Đất nước đã vượt qua tình thế “ngàn cân treo sợi tóc” như thế nào?",
  steps: [
    { title: "Tình thế hiểm nghèo", html: "<p>Miền Bắc có hơn 20 vạn quân Trung Hoa Dân quốc; miền Nam, quân Anh mở đường cho Pháp trở lại xâm lược (23/9/1945). Nạn đói, hơn 90% dân số mù chữ, ngân quỹ trống rỗng.</p>",
      svg: S.mindmap({ center: "Khó khăn năm 1945", branches: [{ title: "Giặc đói", items: ["Hậu quả nạn đói"] }, { title: "Giặc dốt", items: ["Hơn 90% mù chữ"] }, { title: "Tài chính", items: ["Ngân quỹ trống rỗng"] }, { title: "Ngoại xâm", items: ["Quân Trung Hoa Dân quốc", "Pháp ở Nam Bộ"] }], w: 640, size: 13 }), caption: "Ba thứ “giặc” và khó khăn tài chính." },
    { title: "Xây dựng chính quyền", html: "<p>Ngày <b>6/1/1946</b>, cả nước tổng tuyển cử bầu Quốc hội khoá I; tháng 11/1946 Quốc hội thông qua Hiến pháp đầu tiên.</p>" },
    { title: "Diệt giặc đói, giặc dốt", html: "<ul><li>Lập “hũ gạo cứu đói”, phát động tăng gia sản xuất.</li><li>8/9/1945: thành lập Nha Bình dân học vụ, phong trào xoá nạn mù chữ.</li><li>Tài chính: “Tuần lễ vàng”, “Quỹ Độc lập”; tháng 11/1946 phát hành tiền Việt Nam.</li></ul>" },
    { title: "Đối phó ngoại xâm", html: "<p>Hoà với Trung Hoa Dân quốc ở miền Bắc để tập trung kháng chiến ở Nam Bộ; khi Pháp – Trung Hoa Dân quốc kí Hiệp ước Hoa – Pháp, ta hoà với Pháp để đuổi quân Trung Hoa Dân quốc.</p>",
      svg: S.timeline({ title: "Hoà để tiến", items: [{ y: "23/9/1945", s: "Nam Bộ kháng chiến" }, { y: "6/1/1946", s: "Tổng tuyển cử" }, { y: "6/3/1946", s: "Hiệp định Sơ bộ" }, { y: "14/9/1946", s: "Tạm ước" }] }), caption: "Sách lược mềm dẻo, giữ vững nguyên tắc." }
  ],
  summary: "Sau Cách mạng tháng Tám, nước Việt Nam Dân chủ Cộng hoà gặp muôn vàn khó khăn. Chính phủ tổ chức tổng tuyển cử (6/1/1946), ban hành Hiến pháp (11/1946); diệt giặc đói, giặc dốt (Nha Bình dân học vụ), khắc phục tài chính; kháng chiến ở Nam Bộ (23/9/1945); kí Hiệp định Sơ bộ (6/3/1946), Tạm ước (14/9/1946) để tranh thủ thời gian chuẩn bị kháng chiến.",
  examples: [
    { title: "Tính", problem: "Từ 2/9/1945 đến 6/1/1946 khoảng mấy tháng?", solution: "Khoảng 4 tháng." },
    { title: "Giải thích", problem: "Vì sao kí Hiệp định Sơ bộ 6/3/1946?", solution: "Để đuổi quân Trung Hoa Dân quốc về nước, tránh phải đối phó cùng lúc nhiều kẻ thù, có thêm thời gian chuẩn bị." },
    { title: "Đánh giá", problem: "Ý nghĩa của tổng tuyển cử?", solution: "Khẳng định tính hợp pháp của Nhà nước, nâng cao uy tín trong và ngoài nước." }
  ],
  exercises: [
    { question: "Tổng tuyển cử bầu Quốc hội ngày nào?", hints: ["Đầu năm 1946.", "Ngày 6/…"], solution: "6/1/1946." },
    { question: "Cơ quan chống nạn mù chữ?", hints: ["Thành lập 8/9/1945.", "Nha …"], solution: "Nha Bình dân học vụ." },
    { question: "Nam Bộ kháng chiến bắt đầu ngày nào?", hints: ["Tháng 9/1945.", "Ngày 23/…"], solution: "23/9/1945." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Tổng tuyển cử bầu Quốc hội khoá I diễn ra ngày 6/1/1946.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Hiệp định kí với Pháp ngày 6/3/1946:", options: ["Hiệp định Sơ bộ", "Tạm ước", "Hiệp định Giơ-ne-vơ", "Hiệp định Pa-ri"], answer: 0, explain: "Hiệp định Sơ bộ." },
    { type: 'short', q: "Hơn 90% dân số mù chữ. Tỉ lệ biết chữ nhiều nhất khoảng bao nhiêu %?", answer: "10", unit: "%", calc: "100-90", explain: "Không quá 10%." },
    { type: 'mcq', q: "Phong trào giải quyết khó khăn tài chính:", options: ["Tuần lễ vàng", "Bình dân học vụ", "Hũ gạo cứu đói", "Đồng khởi"], answer: 0, explain: "Tuần lễ vàng." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Hiến pháp đầu tiên được thông qua năm 1945.", answer: false, explain: "Tháng 11/1946." },
    { type: 'mcq', q: "Quân đội vào miền Bắc với danh nghĩa giải giáp quân Nhật:", options: ["Trung Hoa Dân quốc", "Anh", "Pháp", "Mỹ"], answer: 0, explain: "Trung Hoa Dân quốc." },
    { type: 'short', q: "Từ 6/3 đến 14/9/1946 cách nhau mấy tháng (tính theo tháng)?", answer: "6", unit: "tháng", calc: "9-3", explain: "6." },
    { type: 'mcq', q: "Cuộc kháng chiến bắt đầu ngày 23/9/1945 ở:", options: ["Nam Bộ", "Hà Nội", "Huế", "Việt Bắc"], answer: 0, explain: "Nam Bộ." }
  ]
});
})();
