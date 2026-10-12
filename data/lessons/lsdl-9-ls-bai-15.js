/* LS&ĐL 9 – Lịch sử, Bài 15. Việt Nam kháng chiến chống thực dân Pháp xâm lược giai đoạn 1951 – 1954. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-9/ls-bai-15', {
  objectives: [
    "Nêu được Đại hội đại biểu lần thứ II của Đảng (2/1951).",
    "Trình bày được cuộc tiến công chiến lược Đông – Xuân 1953 – 1954 và chiến dịch Điện Biên Phủ.",
    "Nêu được nội dung, ý nghĩa Hiệp định Giơ-ne-vơ (21/7/1954)."
  ],
  intro: "“Lừng lẫy năm châu, chấn động địa cầu” – đó là cách người ta nói về chiến thắng Điện Biên Phủ. Chiến thắng ấy đã đến như thế nào?",
  steps: [
    { title: "Đại hội II", html: "<p>Tháng 2/<b>1951</b>, Đại hội đại biểu toàn quốc lần thứ II đưa Đảng ra hoạt động công khai với tên Đảng Lao động Việt Nam, đẩy mạnh kháng chiến.</p>" },
    { title: "Đông – Xuân 1953 – 1954", html: "<p>Pháp – Mỹ đề ra kế hoạch Na-va. Ta mở các cuộc tiến công ở Lai Châu, Trung Lào, Thượng Lào, Bắc Tây Nguyên, buộc địch phân tán lực lượng.</p>" },
    { title: "Chiến dịch Điện Biên Phủ", html: "<p>Chiến dịch diễn ra từ 13/3 đến <b>7/5/1954</b>, chia làm 3 đợt; tập đoàn cứ điểm mạnh nhất Đông Dương bị tiêu diệt.</p>",
      svg: S.timeline({ title: "Điện Biên Phủ 1954", items: [{ y: "13/3", s: "Đợt 1" }, { y: "30/3", s: "Đợt 2" }, { y: "1/5", s: "Đợt 3" }, { y: "7/5", s: "Toàn thắng" }, { y: "21/7", s: "Hiệp định Giơ-ne-vơ" }] }), caption: "Chiến dịch kéo dài 56 ngày đêm." },
    { title: "Hiệp định Giơ-ne-vơ", html: "<div class=\"box key\">Ngày 21/7/1954, Hiệp định Giơ-ne-vơ được kí: các nước tham dự cam kết tôn trọng độc lập, chủ quyền, thống nhất, toàn vẹn lãnh thổ của Việt Nam, Lào, Cam-pu-chia; vĩ tuyến 17 là giới tuyến quân sự tạm thời; tổng tuyển cử thống nhất dự kiến 7/1956.</div>" }
  ],
  summary: "Đại hội II (2/1951) đưa Đảng ra hoạt động công khai. Trước kế hoạch Na-va, ta mở cuộc tiến công chiến lược Đông – Xuân 1953 – 1954, đỉnh cao là chiến dịch Điện Biên Phủ (13/3 – 7/5/1954, 56 ngày đêm). Hiệp định Giơ-ne-vơ (21/7/1954) công nhận các quyền dân tộc cơ bản của Việt Nam, Lào, Cam-pu-chia; miền Bắc hoàn toàn giải phóng.",
  examples: [
    { title: "Tính", problem: "Từ 13/3 đến 7/5/1954 là bao nhiêu ngày (tính cả hai đầu)?", solution: "19 + 30 + 7 = 56 ngày." },
    { title: "Giải thích", problem: "Ý nghĩa chiến thắng Điện Biên Phủ?", solution: "Đập tan kế hoạch Na-va, buộc Pháp kí Hiệp định Giơ-ne-vơ, cổ vũ phong trào giải phóng dân tộc." },
    { title: "Nhận xét", problem: "Vì sao vĩ tuyến 17 chỉ là giới tuyến tạm thời?", solution: "Hiệp định quy định tổng tuyển cử thống nhất sau 2 năm; đây không phải biên giới quốc gia." }
  ],
  exercises: [
    { question: "Đại hội II họp năm nào?", hints: ["Đầu thập niên 1950.", "Tháng 2/…"], solution: "Tháng 2/1951." },
    { question: "Chiến dịch Điện Biên Phủ kết thúc ngày nào?", hints: ["Tháng 5/1954.", "Ngày 7/…"], solution: "7/5/1954." },
    { question: "Giới tuyến quân sự tạm thời?", hints: ["Một vĩ tuyến.", "Số 17."], solution: "Vĩ tuyến 17." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Chiến dịch Điện Biên Phủ kết thúc thắng lợi ngày 7/5/1954.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Hiệp định Giơ-ne-vơ được kí ngày:", options: ["21/7/1954", "7/5/1954", "27/1/1973", "6/3/1946"], answer: 0, explain: "21/7/1954." },
    { type: 'short', q: "Chiến dịch Điện Biên Phủ diễn ra từ 13/3 đến 7/5/1954. Tính số ngày (31 ngày tháng 3 tính từ 13, 30 ngày tháng 4, 7 ngày tháng 5).", answer: "56", unit: "ngày", calc: "(31-13+1)+30+7", explain: "56." },
    { type: 'mcq', q: "Kế hoạch quân sự của Pháp – Mỹ năm 1953:", options: ["Na-va", "Đờ Lát đơ Tát-xi-nhi", "Rơ-ve", "Mác-san"], answer: 0, explain: "Na-va." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Hiệp định Giơ-ne-vơ lấy vĩ tuyến 16 làm giới tuyến.", answer: false, explain: "Vĩ tuyến 17." },
    { type: 'mcq', q: "Tại Đại hội II, Đảng lấy tên:", options: ["Đảng Lao động Việt Nam", "Đảng Cộng sản Đông Dương", "Đảng Cộng sản Việt Nam", "Đảng Nhân dân"], answer: 0, explain: "Đảng Lao động Việt Nam." },
    { type: 'short', q: "Từ 1954 đến 2024 là bao nhiêu năm?", answer: "70", unit: "năm", calc: "2024-1954", explain: "70." },
    { type: 'mcq', q: "Chiến dịch Điện Biên Phủ có mấy đợt tiến công?", options: ["3", "2", "4", "5"], answer: 0, explain: "3 đợt." }
  ]
});
})();
