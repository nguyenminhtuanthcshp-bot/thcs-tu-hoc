/* LS&ĐL 7 – Địa lí, Bài 5. Vị trí địa lí, đặc điểm tự nhiên châu Á. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-7/dl-bai-5', {
  objectives: [
    "Trình bày được vị trí, hình dạng, kích thước châu Á.",
    "Trình bày được đặc điểm địa hình, khoáng sản.",
    "Trình bày được đặc điểm khí hậu, sông hồ và các đới thiên nhiên.",
    "Nêu được ý nghĩa của đặc điểm tự nhiên với sử dụng và bảo vệ tự nhiên."
  ],
  intro: "Châu Á có đỉnh núi cao nhất thế giới – Ê-vơ-rét, cao 8 848,86 m (số đo công bố năm 2020) – và cũng là châu lục rộng nhất. Thiên nhiên nơi đây vô cùng đa dạng.",
  steps: [
    { title: "Vị trí, kích thước", html: "<p>Châu Á rộng khoảng <b>44,4 triệu km²</b> (kể cả đảo), lớn nhất thế giới; trải dài từ vùng cực Bắc đến gần Xích đạo. Giáp ba đại dương: Bắc Băng Dương, Thái Bình Dương, Ấn Độ Dương; giáp châu Âu và châu Phi.</p>" },
    { title: "Địa hình, khoáng sản", html: "<ul><li>Nhiều hệ thống núi và sơn nguyên cao đồ sộ ở trung tâm: <b>Hi-ma-lay-a</b>, Côn Luân, sơn nguyên Tây Tạng.</li><li>Đồng bằng rộng: Tây Xi-bia, Hoa Bắc, Ấn – Hằng.</li><li>Khoáng sản phong phú: dầu mỏ, khí đốt (Tây Á), than, sắt.</li></ul>" },
    { title: "Khí hậu, sông hồ", html: "<p>Khí hậu phân hoá đa dạng; phổ biến là <b>khí hậu gió mùa</b> (Đông Á, Đông Nam Á, Nam Á) và <b>khí hậu lục địa</b> (nội địa, Tây Á). Sông lớn: Trường Giang, Hoàng Hà, Mê Công, Ô-bi, Hằng.</p>",
      svg: S.climateChart({ title: "Biểu đồ khí hậu một trạm gió mùa nhiệt đới (minh hoạ)", temp: [17, 18, 21, 24, 28, 29, 29, 29, 28, 25, 22, 18], rain: [20, 25, 45, 90, 190, 240, 290, 320, 250, 130, 45, 20], tMax: 40, rMax: 400, tMin: 0, note: "Số liệu làm tròn, chỉ để minh hoạ." }), caption: "Gió mùa: mùa hạ nóng, mưa nhiều; mùa đông khô." },
    { title: "Các đới thiên nhiên", html: "<p>Tóm tắt:</p>",
      svg: S.table({ title: "Đới thiên nhiên châu Á", head: ["Đới", "Cảnh quan"], rows: [["Đới lạnh", "Đài nguyên"], ["Đới ôn hoà", "Rừng lá kim, thảo nguyên, hoang mạc"], ["Đới nóng", "Rừng nhiệt đới ẩm, xa-van"]], colW: 250 }), caption: "Cần khai thác hợp lí và phòng chống thiên tai (động đất, bão, lũ)." }
  ],
  summary: "Châu Á rộng khoảng 44,4 triệu km², lớn nhất thế giới, giáp ba đại dương. Địa hình nhiều núi, sơn nguyên cao ở trung tâm (Hi-ma-lay-a, đỉnh Ê-vơ-rét 8 848,86 m), đồng bằng rộng. Khoáng sản phong phú. Khí hậu đa dạng, phổ biến là gió mùa và lục địa. Nhiều sông lớn. Có đới lạnh, đới ôn hoà và đới nóng.",
  examples: [
    { title: "So sánh", problem: "Châu Á (khoảng 44 triệu km²) rộng gấp khoảng mấy lần châu Âu (khoảng 10 triệu km²)?", solution: "44 : 10 = 4,4 lần." },
    { title: "Đọc biểu đồ", problem: "Ở biểu đồ minh hoạ, tháng mưa nhiều nhất là tháng mấy, bao nhiêu mm?", solution: "Tháng 8, 320 mm." },
    { title: "Giải thích", problem: "Vì sao nội địa châu Á khô hạn?", solution: "Lãnh thổ rộng, xa biển, lại bị núi cao chắn gió ẩm." }
  ],
  exercises: [
    { question: "Dãy núi có đỉnh Ê-vơ-rét?", hints: ["Ở Nam Á.", "Hi-…"], solution: "Hi-ma-lay-a." },
    { question: "Hai kiểu khí hậu phổ biến ở châu Á?", hints: ["Một kiểu có gió đổi chiều theo mùa.", "Một kiểu khô."], solution: "Gió mùa và lục địa." },
    { question: "Từ biểu đồ: 320 mm (tháng 8) và 20 mm (tháng 1) chênh nhau bao nhiêu mm?", hints: ["Trừ.", "Ba trăm."], solution: "300 mm." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Châu Á là châu lục rộng nhất thế giới.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Đỉnh núi cao nhất thế giới:", options: ["Ê-vơ-rét", "Mông Blăng", "Ki-li-man-gia-rô", "A-côn-ca-goa"], answer: 0, explain: "Ê-vơ-rét." },
    { type: 'short', q: "Làm tròn: châu Á khoảng 44 triệu km², châu Âu khoảng 10 triệu km². Châu Á rộng gấp mấy lần?", answer: "4.4", answerText: "4,4", unit: "lần", calc: "44/10", explain: "44 : 10 = 4,4." },
    { type: 'mcq', q: "Khu vực giàu dầu mỏ của châu Á:", options: ["Tây Á", "Bắc Á", "Đông Á", "Trung Á"], answer: 0, explain: "Tây Á." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Châu Á chỉ giáp một đại dương.", answer: false, explain: "Giáp ba đại dương." },
    { type: 'mcq', q: "Sông thuộc châu Á:", options: ["Mê Công", "Von-ga", "A-ma-dôn", "Nin"], answer: 0, explain: "Mê Công." },
    { type: 'short', q: "Tháng mưa nhiều nhất 320 mm, ít nhất 20 mm. Chênh lệch bao nhiêu mm?", answer: "300", unit: "mm", calc: "320-20", explain: "300." },
    { type: 'mcq', q: "Khí hậu phổ biến ở Đông Nam Á:", options: ["Gió mùa", "Cực", "Địa trung hải", "Hoang mạc"], answer: 0, explain: "Gió mùa." }
  ]
});
})();
