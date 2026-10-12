/* LS&ĐL 7 – Địa lí, Bài 7. Bản đồ chính trị châu Á. Các khu vực của châu Á. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-7/dl-bai-7', {
  objectives: [
    "Sử dụng được bản đồ chính trị để xác định các khu vực của châu Á.",
    "Trình bày được đặc điểm tự nhiên nổi bật của từng khu vực.",
    "Kể tên được một số quốc gia ở mỗi khu vực."
  ],
  intro: "Châu Á có gần 50 quốc gia và vùng lãnh thổ, được chia thành 6 khu vực. Việt Nam thuộc khu vực nào?",
  steps: [
    { title: "Sáu khu vực của châu Á", html: "<p>Châu Á gồm 6 khu vực: <b>Bắc Á, Trung Á, Tây Á, Nam Á, Đông Á, Đông Nam Á</b>.</p>",
      svg: S.sketchMap({ title: "Các khu vực châu Á (giản lược)", areas: [{ pts: [[60, 10], [560, 10], [560, 90], [60, 90]], label: "Bắc Á", lx: 300, ly: 50 }, { pts: [[60, 90], [200, 90], [200, 170], [60, 170]], label: "Trung Á", lx: 130, ly: 130 }, { pts: [[0, 120], [60, 120], [60, 170], [120, 170], [110, 250], [10, 240]], label: "Tây Á", lx: 55, ly: 205 }, { pts: [[150, 170], [290, 170], [260, 280], [190, 280]], label: "Nam Á", lx: 225, ly: 215 }, { pts: [[200, 90], [560, 90], [540, 190], [380, 200], [290, 170], [200, 170]], label: "Đông Á", lx: 420, ly: 140 }, { pts: [[330, 200], [460, 195], [500, 280], [340, 290]], label: "Đông Nam Á", lx: 415, ly: 245 }], lines: [], points: [], note: 'Lược đồ giản lược, không theo tỉ lệ.' }), caption: "Ranh giới các khu vực chỉ vẽ tượng trưng." },
    { title: "Đặc điểm từng khu vực", html: "<p>Tóm tắt:</p>",
      svg: S.table({ title: "Đặc điểm nổi bật các khu vực", head: ["Khu vực", "Nổi bật"], rows: [["Bắc Á", "Lạnh, rừng lá kim (Xi-bia)"], ["Trung Á", "Khô hạn, thảo nguyên"], ["Tây Á", "Nhiều dầu mỏ, hoang mạc"], ["Nam Á", "Hi-ma-lay-a, gió mùa"], ["Đông Á", "Núi, đồng bằng, gió mùa"], ["Đông Nam Á", "Bán đảo, đảo; nhiệt đới"]], colW: 250 }), caption: "Mỗi khu vực có thiên nhiên riêng." },
    { title: "Một số quốc gia", html: "<ul><li>Đông Á: Trung Quốc, Nhật Bản, Hàn Quốc.</li><li>Nam Á: Ấn Độ, Pa-ki-xtan, Băng-la-đét.</li><li>Tây Á: A-rập Xê-út, I-ran, Thổ Nhĩ Kỳ.</li><li>Đông Nam Á: Việt Nam, Thái Lan, In-đô-nê-xi-a.</li></ul>" },
    { title: "Ghi nhớ", html: "<div class=\"box key\">Việt Nam thuộc khu vực Đông Nam Á, nằm trên bán đảo Đông Dương.</div>" }
  ],
  summary: "Châu Á có gần 50 quốc gia và vùng lãnh thổ, chia thành 6 khu vực: Bắc Á (lạnh, rừng lá kim), Trung Á (khô hạn), Tây Á (dầu mỏ, hoang mạc), Nam Á (Hi-ma-lay-a, gió mùa), Đông Á (núi và đồng bằng, gió mùa), Đông Nam Á (bán đảo và đảo, nhiệt đới). Việt Nam thuộc Đông Nam Á.",
  examples: [
    { title: "Xác định", problem: "Nhật Bản thuộc khu vực nào?", solution: "Đông Á." },
    { title: "Giải thích", problem: "Vì sao Tây Á có vị trí chiến lược?", solution: "Nằm ở ngã ba châu Á, châu Âu, châu Phi, lại giàu dầu mỏ." },
    { title: "Tính", problem: "Châu Á có 6 khu vực; nếu đã học 4 khu vực thì còn bao nhiêu?", solution: "2 khu vực." }
  ],
  exercises: [
    { question: "Việt Nam thuộc khu vực nào?", hints: ["Phía đông nam châu Á.", "Đông … Á."], solution: "Đông Nam Á." },
    { question: "Khu vực giàu dầu mỏ nhất?", hints: ["Có nhiều hoang mạc.", "Tây …"], solution: "Tây Á." },
    { question: "Ấn Độ thuộc khu vực nào?", hints: ["Có dãy Hi-ma-lay-a.", "… Á."], solution: "Nam Á." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Việt Nam thuộc khu vực Đông Nam Á.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Khu vực có rừng lá kim Xi-bia:", options: ["Bắc Á", "Nam Á", "Tây Á", "Đông Nam Á"], answer: 0, explain: "Bắc Á." },
    { type: 'short', q: "Châu Á được chia thành bao nhiêu khu vực?", answer: "6", unit: "khu vực", calc: "6", explain: "6." },
    { type: 'mcq', q: "Hàn Quốc thuộc khu vực:", options: ["Đông Á", "Nam Á", "Trung Á", "Tây Á"], answer: 0, explain: "Đông Á." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Trung Á là khu vực mưa nhiều nhất châu Á.", answer: false, explain: "Trung Á khô hạn." },
    { type: 'mcq', q: "A-rập Xê-út thuộc khu vực:", options: ["Tây Á", "Đông Á", "Bắc Á", "Nam Á"], answer: 0, explain: "Tây Á." },
    { type: 'short', q: "Đông Á có Trung Quốc, Nhật Bản, Hàn Quốc, Triều Tiên, Mông Cổ. Bỏ Mông Cổ thì còn mấy nước?", answer: "4", unit: "nước", calc: "5-1", explain: "4." },
    { type: 'mcq', q: "Khu vực có dãy Hi-ma-lay-a:", options: ["Nam Á", "Bắc Á", "Đông Nam Á", "Tây Á"], answer: 0, explain: "Nam Á." }
  ]
});
})();
