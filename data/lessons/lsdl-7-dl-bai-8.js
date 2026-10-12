/* LS&ĐL 7 – Địa lí, Bài 8. Thực hành: Tìm hiểu về các nền kinh tế lớn và nền kinh tế mới nổi của châu Á. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-7/dl-bai-8', {
  objectives: [
    "Thu thập, chọn lọc thông tin về các nền kinh tế lớn và mới nổi của châu Á.",
    "Đọc và xử lí bảng số liệu GDP.",
    "Trình bày được một số đặc điểm phát triển của các nền kinh tế đó."
  ],
  intro: "Châu Á có nhiều nền kinh tế lớn của thế giới như Trung Quốc, Nhật Bản, Ấn Độ, cùng những nền kinh tế mới nổi phát triển nhanh như Hàn Quốc, Xin-ga-po.",
  steps: [
    { title: "Các nền kinh tế lớn", html: "<p>Trung Quốc, Nhật Bản, Ấn Độ thuộc nhóm các nền kinh tế lớn nhất thế giới (tính theo GDP).</p>",
      svg: S.table({ title: "GDP năm 2023 (nghìn tỉ USD, làm tròn)", head: ["Quốc gia", "GDP"], rows: [["Trung Quốc", "18,3"], ["Nhật Bản", "4,4"], ["Ấn Độ", "3,5"], ["Hàn Quốc", "1,8"]], colW: 250 }), caption: "Số liệu làm tròn theo Ngân hàng Thế giới (2023), có thể khác chút ít giữa các nguồn." },
    { title: "Các nền kinh tế mới nổi", html: "<p>Hàn Quốc, Xin-ga-po (và trước đây là các “con rồng” châu Á) phát triển nhanh nhờ công nghiệp hoá, xuất khẩu, đầu tư cho giáo dục và công nghệ.</p>" },
    { title: "Cách làm bài thực hành", html: "<p>Các bước:</p>",
      svg: S.flowchart({ title: "Các bước thực hành", steps: [{ t: 'start', s: "Chọn quốc gia" }, { t: 'proc', s: "Thu thập số liệu" }, { t: 'proc', s: "Lập bảng, vẽ biểu đồ" }, { t: 'end', s: "Nhận xét, trình bày" }] }), caption: "Ghi rõ nguồn và năm của số liệu." },
    { title: "Nhận xét mẫu", html: "<div class=\"box key\">GDP Trung Quốc gấp khoảng 4 lần Nhật Bản; Ấn Độ tăng trưởng nhanh. Ngành mũi nhọn: Nhật Bản – ô tô, điện tử; Hàn Quốc – điện tử, đóng tàu; Ấn Độ – phần mềm, dịch vụ.</div>" }
  ],
  summary: "Châu Á có các nền kinh tế lớn (Trung Quốc, Nhật Bản, Ấn Độ) và các nền kinh tế mới nổi phát triển nhanh (Hàn Quốc, Xin-ga-po). Khi thực hành cần thu thập số liệu có nguồn, lập bảng, vẽ biểu đồ, nhận xét. Năm 2023, GDP (làm tròn): Trung Quốc 18,3; Nhật Bản 4,4; Ấn Độ 3,5; Hàn Quốc 1,8 nghìn tỉ USD.",
  examples: [
    { title: "Tính", problem: "Tổng GDP 4 nước trong bảng là bao nhiêu nghìn tỉ USD?", solution: "18,3 + 4,4 + 3,5 + 1,8 = 28." },
    { title: "So sánh", problem: "GDP Nhật Bản hơn Ấn Độ bao nhiêu?", solution: "4,4 − 3,5 = 0,9 nghìn tỉ USD." },
    { title: "Nhận xét", problem: "Nước nào có GDP lớn nhất trong bảng?", solution: "Trung Quốc." }
  ],
  exercises: [
    { question: "GDP Trung Quốc gấp khoảng mấy lần Nhật Bản?", hints: ["18,3 : 4,4.", "Làm tròn đến hàng đơn vị."], solution: "Khoảng 4 lần." },
    { question: "Nêu một ngành mũi nhọn của Hàn Quốc.", hints: ["Điện thoại, ti vi…", "Hoặc tàu biển."], solution: "Điện tử (hoặc đóng tàu, ô tô)." },
    { question: "Nêu một điều cần ghi khi dùng số liệu.", hints: ["Lấy từ đâu?", "Năm nào?"], solution: "Nguồn và năm của số liệu." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Nhật Bản là một nền kinh tế lớn của châu Á.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Nước có GDP lớn nhất trong bảng:", options: ["Trung Quốc", "Nhật Bản", "Ấn Độ", "Hàn Quốc"], answer: 0, explain: "Trung Quốc." },
    { type: 'short', q: "Tổng GDP Nhật Bản (4,4) và Ấn Độ (3,5), nghìn tỉ USD?", answer: "7.9", answerText: "7,9", unit: "nghìn tỉ USD", calc: "4.4+3.5", explain: "7,9." },
    { type: 'mcq', q: "Nền kinh tế mới nổi tiêu biểu:", options: ["Hàn Quốc", "Áp-ga-ni-xtan", "Ne-pan", "Lào"], answer: 0, explain: "Hàn Quốc." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Khi làm bài thực hành không cần ghi nguồn số liệu.", answer: false, explain: "Phải ghi nguồn, năm." },
    { type: 'mcq', q: "Ngành nổi bật của Ấn Độ:", options: ["Phần mềm, dịch vụ", "Khai thác băng", "Đánh bắt cá voi", "Chăn nuôi tuần lộc"], answer: 0, explain: "Phần mềm." },
    { type: 'short', q: "GDP Hàn Quốc 1,8, Ấn Độ 3,5 (nghìn tỉ USD). Chênh lệch bao nhiêu?", answer: "1.7", answerText: "1,7", unit: "nghìn tỉ USD", calc: "3.5-1.8", explain: "1,7." },
    { type: 'mcq', q: "Bước đầu tiên của bài thực hành:", options: ["Chọn quốc gia", "Vẽ biểu đồ", "Nhận xét", "Thuyết trình"], answer: 0, explain: "Chọn quốc gia." }
  ]
});
})();
