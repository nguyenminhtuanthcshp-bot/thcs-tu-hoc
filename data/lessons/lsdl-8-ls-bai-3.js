/* LS&ĐL 8 – Lịch sử, Bài 3. Cách mạng công nghiệp (nửa sau thế kỉ XVIII – giữa thế kỉ XIX). Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-8/ls-bai-3', {
  objectives: [
    "Trình bày được những thành tựu tiêu biểu của cách mạng công nghiệp.",
    "Nêu được tác động của cách mạng công nghiệp đối với sản xuất và đời sống.",
    "Giải thích được vì sao cách mạng công nghiệp bắt đầu ở Anh."
  ],
  intro: "Trước kia, vải được dệt bằng tay trong từng gia đình. Đến thế kỉ XVIII, những cỗ máy chạy bằng hơi nước đã đưa con người vào thời đại công nghiệp.",
  steps: [
    { title: "Bắt đầu ở Anh", html: "<p>Cách mạng công nghiệp bắt đầu ở Anh từ những năm 60 của thế kỉ XVIII, khởi đầu trong ngành <b>dệt</b>. Anh có điều kiện thuận lợi: vốn tích luỹ từ thuộc địa, nhân công dồi dào, nhu cầu thị trường lớn.</p>" },
    { title: "Thành tựu tiêu biểu", html: "<p>Các phát minh:</p>",
      svg: S.table({ title: "Một số phát minh tiêu biểu", head: ["Năm", "Phát minh"], rows: [["1733", "Thoi bay (G. Cay)"], ["1764", "Máy kéo sợi Gien-ni"], ["1784", "Máy hơi nước (G. Oát)"], ["1785", "Máy dệt chạy bằng sức nước, hơi nước"], ["1814", "Đầu máy xe lửa (Xti-phen-xơn)"]], colW: 250 }), caption: "Oát cải tiến máy hơi nước trong những năm 1769 – 1784; năm 1784 là mốc thường dùng khi máy được đưa vào sản xuất. Máy dệt của Các-rai được cấp bằng năm 1785." },
    { title: "Lan rộng", html: "<p>Đến thế kỉ XIX, cách mạng công nghiệp lan sang Pháp, Đức, Mỹ. Năm 1807, Phơn-tơn (Mỹ) chế tạo thành công tàu thuỷ chạy bằng hơi nước.</p>",
      svg: S.flowchart({ title: "Tác động của cách mạng công nghiệp", steps: [{ t: 'start', s: "Máy móc thay sức người" }, { t: 'proc', s: "Năng suất tăng nhanh" }, { t: 'proc', s: "Đô thị, nhà máy mọc lên" }, { t: 'end', s: "Hình thành tư sản và vô sản" }] }), caption: "Xã hội hình thành hai giai cấp cơ bản: tư sản và vô sản." },
    { title: "Tác động", html: "<ul><li>Tích cực: năng suất lao động tăng, của cải dồi dào, giao thông phát triển.</li><li>Tiêu cực: công nhân bị bóc lột nặng nề, ô nhiễm môi trường, lao động trẻ em.</li></ul>" }
  ],
  summary: "Cách mạng công nghiệp bắt đầu ở Anh từ những năm 60 của thế kỉ XVIII, khởi đầu ở ngành dệt, rồi lan sang Pháp, Đức, Mỹ. Thành tựu: thoi bay (1733), máy kéo sợi Gien-ni (1764), máy hơi nước của Oát (1784), máy dệt (1785), tàu thuỷ hơi nước (1807), đầu máy xe lửa (1814). Cách mạng công nghiệp làm năng suất tăng vọt, hình thành giai cấp tư sản và vô sản, nhưng cũng gây bóc lột, ô nhiễm.",
  examples: [
    { title: "Tính", problem: "Từ 1764 (máy Gien-ni) đến 1814 (đầu máy xe lửa) là bao nhiêu năm?", solution: "50 năm." },
    { title: "Giải thích", problem: "Vì sao ngành dệt đi đầu?", solution: "Nhu cầu vải rất lớn, máy dệt đơn giản, vốn ít, thu lợi nhanh." },
    { title: "Nhân vật", problem: "Ai cải tiến máy hơi nước?", solution: "Giêm Oát." }
  ],
  exercises: [
    { question: "Cách mạng công nghiệp bắt đầu ở nước nào?", hints: ["Một đảo quốc châu Âu.", "Có nhiều thuộc địa."], solution: "Nước Anh." },
    { question: "Hai giai cấp cơ bản hình thành?", hints: ["Chủ và thợ.", "Tư sản và …"], solution: "Tư sản và vô sản." },
    { question: "Từ 1733 đến 1784 là bao nhiêu năm?", hints: ["1784 − 1733.", "Hơn 50."], solution: "51 năm." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Cách mạng công nghiệp bắt đầu ở Anh.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Người cải tiến máy hơi nước:", options: ["G. Oát", "G. Cay", "Phơn-tơn", "Xti-phen-xơn"], answer: 0, explain: "Oát." },
    { type: 'short', q: "Từ 1764 đến 1814 là bao nhiêu năm?", answer: "50", unit: "năm", calc: "1814-1764", explain: "50." },
    { type: 'mcq', q: "Ngành đi đầu trong cách mạng công nghiệp ở Anh:", options: ["Dệt", "Hàng không", "Điện tử", "Ô tô"], answer: 0, explain: "Dệt." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Cách mạng công nghiệp không có tác động tiêu cực nào.", answer: false, explain: "Có bóc lột, ô nhiễm." },
    { type: 'mcq', q: "Tàu thuỷ chạy bằng hơi nước do ai chế tạo (1807)?", options: ["Phơn-tơn", "Oát", "Gien-ni", "Ê-đi-xơn"], answer: 0, explain: "Phơn-tơn." },
    { type: 'short', q: "Năm 1784 thuộc thế kỉ thứ mấy? (ghi số)", answer: "18", calc: "Math.floor((1784-1)/100)+1", explain: "Thế kỉ XVIII." },
    { type: 'mcq', q: "Đầu máy xe lửa của Xti-phen-xơn ra đời năm:", options: ["1814", "1764", "1733", "1900"], answer: 0, explain: "1814." }
  ]
});
})();
