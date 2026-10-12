/* LS&ĐL 9 – Địa lí, Bài 6. Thực hành: Viết báo cáo về một mô hình sản xuất nông nghiệp có hiệu quả. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-9/dl-bai-6', {
  objectives: [
    "Lựa chọn được một mô hình sản xuất nông nghiệp có hiệu quả.",
    "Thu thập, xử lí thông tin và viết được báo cáo ngắn.",
    "Rút ra được bài học về điều kiện thành công của mô hình."
  ],
  intro: "Một hợp tác xã trồng rau hữu cơ, một trang trại tôm – lúa, một vườn cà phê đạt chứng nhận… Đâu là bí quyết để mô hình nông nghiệp thành công?",
  steps: [
    { title: "Lựa chọn mô hình", html: "<p>Gợi ý: lúa – tôm, rau thuỷ canh, cây ăn quả VietGAP, chăn nuôi khép kín, du lịch nông nghiệp… Nên chọn mô hình ở địa phương để dễ tìm hiểu.</p>" },
    { title: "Dàn ý báo cáo", html: "<p>Báo cáo gồm các phần:</p>",
      svg: S.flowchart({ title: "Dàn ý báo cáo", steps: [{ t: 'start', s: "Giới thiệu mô hình" }, { t: 'proc', s: "Điều kiện phát triển" }, { t: 'proc', s: "Hiệu quả kinh tế – xã hội – môi trường" }, { t: 'end', s: "Bài học, kiến nghị" }] }), caption: "Báo cáo dài khoảng 1 – 2 trang." },
    { title: "Ví dụ xử lí số liệu", html: "<p>Bảng dưới đây là <b>số liệu minh hoạ</b> (giả định) của một trang trại rau:</p>",
      svg: S.table({ title: "Trang trại rau (số liệu minh hoạ)", head: ["Khoản mục", "Triệu đồng/năm"], rows: [["Doanh thu", "600"], ["Chi phí", "420"], ["Lợi nhuận", "180"]], colW: 250 }), caption: "Số liệu giả định, chỉ để luyện tính toán." },
    { title: "Tiêu chí đánh giá", html: "<div class=\"box key\">Một mô hình hiệu quả: lợi nhuận ổn định, tạo việc làm, thân thiện môi trường, có thị trường tiêu thụ và có thể nhân rộng.</div>" }
  ],
  summary: "Bài thực hành yêu cầu chọn một mô hình nông nghiệp hiệu quả, thu thập thông tin, viết báo cáo theo dàn ý: giới thiệu, điều kiện phát triển, hiệu quả, bài học. Mô hình hiệu quả có lợi nhuận ổn định, thân thiện môi trường, có thị trường và có thể nhân rộng.",
  examples: [
    { title: "Tính", problem: "Doanh thu 600 triệu, chi phí 420 triệu (số liệu minh hoạ). Lợi nhuận?", solution: "180 triệu đồng." },
    { title: "Tính", problem: "Tỉ suất lợi nhuận trên doanh thu?", solution: "180 : 600 = 30%." },
    { title: "Đánh giá", problem: "Vì sao cần xét yếu tố môi trường?", solution: "Để sản xuất bền vững, không làm suy thoái đất, nước, bảo đảm an toàn thực phẩm." }
  ],
  exercises: [
    { question: "Phần cuối của báo cáo?", hints: ["Rút ra điều gì.", "Bài học, …"], solution: "Bài học và kiến nghị." },
    { question: "Một mô hình kết hợp ở ĐBSCL?", hints: ["Vừa trồng vừa nuôi.", "Lúa – …"], solution: "Lúa – tôm." },
    { question: "Tiêu chuẩn sản xuất nông nghiệp tốt của Việt Nam?", hints: ["Chữ viết tắt.", "Viet…"], solution: "VietGAP." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Báo cáo mô hình nông nghiệp cần nêu hiệu quả kinh tế, xã hội và môi trường.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Tiêu chí không phải của mô hình hiệu quả:", options: ["Gây ô nhiễm nặng", "Lợi nhuận ổn định", "Có thị trường", "Nhân rộng được"], answer: 0, explain: "Gây ô nhiễm." },
    { type: 'short', q: "Doanh thu 600 triệu, chi phí 420 triệu (minh hoạ). Lợi nhuận bao nhiêu triệu đồng?", answer: "180", unit: "triệu đồng", calc: "600-420", explain: "180." },
    { type: 'mcq', q: "Bước đầu tiên khi viết báo cáo:", options: ["Giới thiệu mô hình", "Kiến nghị", "Tính lợi nhuận", "In báo cáo"], answer: 0, explain: "Giới thiệu mô hình." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Mô hình chỉ cần lợi nhuận cao, không cần quan tâm môi trường.", answer: false, explain: "Cần thân thiện môi trường." },
    { type: 'mcq', q: "Nguồn thông tin phù hợp:", options: ["Phỏng vấn chủ mô hình", "Đoán theo cảm tính", "Chép nguyên văn sách", "Tin đồn"], answer: 0, explain: "Phỏng vấn." },
    { type: 'short', q: "Lợi nhuận 180 triệu, doanh thu 600 triệu. Tỉ suất lợi nhuận bao nhiêu %?", answer: "30", unit: "%", calc: "180/600*100", explain: "30." },
    { type: 'mcq', q: "Mô hình phù hợp vùng nhiễm mặn ven biển ĐBSCL:", options: ["Lúa – tôm", "Trồng chè", "Trồng cà phê", "Trồng lúa mì"], answer: 0, explain: "Lúa – tôm." }
  ]
});
})();
