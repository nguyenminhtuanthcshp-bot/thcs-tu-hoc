/* LS&ĐL 9 – Địa lí, Bài 3. Thực hành: Tìm hiểu vấn đề việc làm ở địa phương và phân hoá thu nhập theo vùng. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-9/dl-bai-3', {
  objectives: [
    "Thu thập, xử lí thông tin về vấn đề việc làm ở địa phương.",
    "Nhận xét được sự phân hoá thu nhập bình quân đầu người theo vùng.",
    "Đề xuất được giải pháp giải quyết việc làm."
  ],
  intro: "Năm 2024, thu nhập bình quân ở Đông Nam Bộ gần gấp đôi Trung du và miền núi phía Bắc. Vì sao lại có khoảng cách ấy?",
  steps: [
    { title: "Lao động và việc làm", html: "<p>Năm 2024, lực lượng lao động từ 15 tuổi trở lên khoảng <b>53,2 triệu người</b>; tỉ lệ thất nghiệp trong độ tuổi lao động 2,24% (Tổng cục Thống kê).</p>" },
    { title: "Thu nhập theo vùng", html: "<p>Khảo sát mức sống dân cư năm 2024: thu nhập bình quân 1 người 1 tháng là 5,4 triệu đồng.</p>",
      svg: S.table({ title: "Thu nhập bình quân 1 người/tháng năm 2024", head: ["Phạm vi", "Triệu đồng"], rows: [["Cả nước", "5,4"], ["Thành thị", "6,9"], ["Nông thôn", "4,5"], ["Đông Nam Bộ (cao nhất)", "gần 7,1"], ["TD và MN phía Bắc (thấp nhất)", "gần 3,8"]], colW: 250 }), caption: "Nguồn: Khảo sát mức sống dân cư năm 2024, Tổng cục Thống kê (theo 6 vùng trước sắp xếp năm 2025)." },
    { title: "Các bước thực hành", html: "<p>Quy trình:</p>",
      svg: S.flowchart({ title: "Tìm hiểu việc làm ở địa phương", steps: [{ t: 'start', s: "Chọn chủ đề, câu hỏi" }, { t: 'proc', s: "Thu thập thông tin" }, { t: 'proc', s: "Xử lí, lập bảng" }, { t: 'end', s: "Viết báo cáo, đề xuất" }] }), caption: "Có thể phỏng vấn người thân, tra cứu cổng thông tin của tỉnh." },
    { title: "Gợi ý nhận xét", html: "<div class=\"box key\">Thu nhập cao ở vùng công nghiệp, dịch vụ phát triển (Đông Nam Bộ, Đồng bằng sông Hồng); thấp ở vùng miền núi, nông nghiệp. Giải pháp: phát triển ngành nghề, đào tạo nghề, thu hút đầu tư, hỗ trợ vùng khó khăn.</div>" }
  ],
  summary: "Năm 2024, lực lượng lao động khoảng 53,2 triệu người, tỉ lệ thất nghiệp 2,24%. Thu nhập bình quân 1 người/tháng 5,4 triệu đồng; thành thị 6,9 triệu, nông thôn 4,5 triệu; Đông Nam Bộ cao nhất (gần 7,1 triệu), Trung du và miền núi phía Bắc thấp nhất (gần 3,8 triệu) (Tổng cục Thống kê). Thực hành gồm: chọn chủ đề, thu thập, xử lí, báo cáo.",
  examples: [
    { title: "Tính", problem: "Thu nhập Đông Nam Bộ 7,1 triệu, TD và MN phía Bắc 3,8 triệu. Gấp bao nhiêu lần (làm tròn 1 chữ số thập phân)?", solution: "7,1 : 3,8 ≈ 1,9 lần." },
    { title: "Tính", problem: "Thành thị 6,9 triệu, nông thôn 4,5 triệu. Chênh lệch?", solution: "2,4 triệu đồng." },
    { title: "Đề xuất", problem: "Một giải pháp tạo việc làm cho thanh niên nông thôn?", solution: "Đào tạo nghề gắn với nhu cầu doanh nghiệp; phát triển làng nghề, du lịch nông thôn." }
  ],
  exercises: [
    { question: "Thu nhập bình quân cả nước năm 2024?", hints: ["Khoảng 5 triệu.", "5,…"], solution: "5,4 triệu đồng/người/tháng." },
    { question: "Vùng có thu nhập thấp nhất?", hints: ["Vùng miền núi phía Bắc.", "Trung du …"], solution: "Trung du và miền núi phía Bắc." },
    { question: "Tỉ lệ thất nghiệp 2024?", hints: ["Khoảng 2%.", "2,2…"], solution: "2,24%." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Năm 2024, Đông Nam Bộ là vùng có thu nhập bình quân đầu người cao nhất.", answer: true, explain: "Đúng, gần 7,1 triệu đồng/tháng." },
    { type: 'mcq', q: "Thu nhập bình quân 1 người/tháng cả nước năm 2024:", options: ["5,4 triệu đồng", "2 triệu đồng", "10 triệu đồng", "7,1 triệu đồng"], answer: 0, explain: "5,4 triệu đồng." },
    { type: 'short', q: "Thu nhập thành thị 6,9 triệu, nông thôn 4,5 triệu. Chênh lệch bao nhiêu triệu đồng?", answer: "2.4", answerText: "2,4", unit: "triệu đồng", calc: "6.9-4.5", explain: "2,4." },
    { type: 'mcq', q: "Lực lượng lao động năm 2024 khoảng:", options: ["53,2 triệu người", "101,3 triệu người", "20 triệu người", "80 triệu người"], answer: 0, explain: "53,2 triệu." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Thu nhập ở nông thôn cao hơn thành thị.", answer: false, explain: "Thành thị 6,9 > nông thôn 4,5 triệu." },
    { type: 'mcq', q: "Bước đầu tiên khi làm báo cáo thực hành:", options: ["Chọn chủ đề, câu hỏi", "Viết kết luận", "Vẽ biểu đồ", "Trình bày"], answer: 0, explain: "Chọn chủ đề." },
    { type: 'short', q: "Thu nhập Đông Nam Bộ 7,1 triệu, Trung du và miền núi phía Bắc 3,8 triệu. Chênh lệch?", answer: "3.3", answerText: "3,3", unit: "triệu đồng", calc: "7.1-3.8", explain: "3,3." },
    { type: 'mcq', q: "Giải pháp phù hợp để tăng thu nhập ở miền núi:", options: ["Phát triển nông nghiệp đặc sản, du lịch cộng đồng", "Phá rừng làm rẫy", "Bỏ học sớm", "Hạn chế giao thông"], answer: 0, explain: "Đặc sản, du lịch cộng đồng." }
  ]
});
})();
