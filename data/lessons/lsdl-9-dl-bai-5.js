/* LS&ĐL 9 – Địa lí, Bài 5. Lâm nghiệp và thuỷ sản. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-9/dl-bai-5', {
  objectives: [
    "Trình bày được sự phát triển và phân bố lâm nghiệp.",
    "Trình bày được sự phát triển và phân bố ngành thuỷ sản.",
    "Nêu được vấn đề phát triển bền vững lâm nghiệp, thuỷ sản."
  ],
  intro: "Năm 2024, tỉ lệ che phủ rừng toàn quốc đạt 42,03% (Bộ Nông nghiệp và Môi trường). Rừng và biển mang lại cho nước ta những nguồn lợi nào?",
  steps: [
    { title: "Tài nguyên rừng", html: "<p>Năm 2024, tổng diện tích có rừng khoảng 14,87 triệu ha, gồm rừng tự nhiên 10,13 triệu ha và rừng trồng 4,74 triệu ha; tỉ lệ che phủ 42,03%.</p>",
      svg: S.pieChart({ title: "Diện tích rừng năm 2024 (triệu ha)", parts: [{ v: 10.13, label: "Rừng tự nhiên 10,13" }, { v: 4.74, label: "Rừng trồng 4,74" }] }), caption: "Nguồn: Quyết định công bố hiện trạng rừng toàn quốc năm 2024, Bộ Nông nghiệp và Môi trường." },
    { title: "Lâm nghiệp", html: "<ul><li>Ba loại rừng: đặc dụng, phòng hộ, sản xuất.</li><li>Khai thác gỗ, chế biến đồ gỗ xuất khẩu; trồng rừng, bảo vệ rừng.</li></ul>" },
    { title: "Thuỷ sản", html: "<p>Năm 2024, sản lượng thuỷ sản ước đạt 9 547,0 nghìn tấn: nuôi trồng 5 721,6 nghìn tấn, khai thác 3 825,4 nghìn tấn (Tổng cục Thống kê).</p>",
      svg: S.table({ title: "Sản lượng thuỷ sản năm 2024", head: ["Loại", "Nghìn tấn"], rows: [["Nuôi trồng", "5 721,6"], ["Khai thác", "3 825,4"], ["Tổng", "9 547,0"]], colW: 250 }), caption: "Nguồn: Tổng cục Thống kê. Nuôi trồng chiếm khoảng 60%." },
    { title: "Phát triển bền vững", html: "<div class=\"box key\">Bảo vệ rừng đầu nguồn, rừng ngập mặn; khai thác xa bờ hợp lí, chống khai thác bất hợp pháp; nuôi trồng theo tiêu chuẩn, bảo vệ môi trường.</div>" }
  ],
  summary: "Năm 2024, diện tích có rừng khoảng 14,87 triệu ha, tỉ lệ che phủ 42,03%. Lâm nghiệp gồm trồng, bảo vệ, khai thác, chế biến lâm sản. Sản lượng thuỷ sản năm 2024 khoảng 9 547,0 nghìn tấn, trong đó nuôi trồng 5 721,6 nghìn tấn, khai thác 3 825,4 nghìn tấn (Tổng cục Thống kê). Cần phát triển bền vững.",
  examples: [
    { title: "Tính", problem: "Nuôi trồng 5 721,6 trong tổng 9 547,0 nghìn tấn chiếm bao nhiêu %?", solution: "≈ 59,9%." },
    { title: "Giải thích", problem: "Vai trò của rừng ngập mặn?", solution: "Chắn sóng, chống xói lở, là nơi sinh sản của nhiều loài thuỷ sản." },
    { title: "Nhận xét", problem: "Cơ cấu thuỷ sản năm 2024?", solution: "Nuôi trồng lớn hơn khai thác." }
  ],
  exercises: [
    { question: "Tỉ lệ che phủ rừng 2024?", hints: ["Trên 42%.", "42,0…"], solution: "42,03%." },
    { question: "Ba loại rừng?", hints: ["Theo mục đích sử dụng.", "Đặc dụng, …"], solution: "Đặc dụng, phòng hộ, sản xuất." },
    { question: "Sản lượng thuỷ sản 2024?", hints: ["Gần 9,6 triệu tấn.", "9 547,…"], solution: "9 547,0 nghìn tấn." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Năm 2024, sản lượng thuỷ sản nuôi trồng lớn hơn khai thác.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Tỉ lệ che phủ rừng toàn quốc năm 2024:", options: ["42,03%", "20%", "60%", "35,5%"], answer: 0, explain: "42,03%." },
    { type: 'short', q: "Nuôi trồng 5 721,6, khai thác 3 825,4 nghìn tấn. Tổng sản lượng?", answer: "9547", answerText: "9 547", unit: "nghìn tấn", calc: "5721.6+3825.4", explain: "9 547." },
    { type: 'mcq', q: "Loại rừng bảo vệ nguồn nước, chống xói mòn:", options: ["Rừng phòng hộ", "Rừng sản xuất", "Rừng trồng cao su", "Vườn cây ăn quả"], answer: 0, explain: "Phòng hộ." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Diện tích rừng trồng lớn hơn rừng tự nhiên.", answer: false, explain: "Rừng tự nhiên 10,13 triệu ha > rừng trồng 4,74." },
    { type: 'mcq', q: "Biện pháp phát triển thuỷ sản bền vững:", options: ["Khai thác xa bờ hợp lí", "Đánh bắt bằng chất nổ", "Phá rừng ngập mặn nuôi tôm", "Đánh bắt cá con"], answer: 0, explain: "Khai thác xa bờ hợp lí." },
    { type: 'short', q: "Rừng tự nhiên 10,13 triệu ha, rừng trồng 4,74 triệu ha. Tổng?", answer: "14.87", answerText: "14,87", unit: "triệu ha", calc: "10.13+4.74", explain: "14,87." },
    { type: 'mcq', q: "Rừng ngập mặn phân bố chủ yếu ở:", options: ["Ven biển", "Đỉnh núi cao", "Cao nguyên", "Thung lũng sông"], answer: 0, explain: "Ven biển." }
  ]
});
})();
