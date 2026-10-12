/* LS&ĐL 9 – Địa lí, Bài 22. Phát triển tổng hợp kinh tế và bảo vệ tài nguyên, môi trường biển đảo. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-9/dl-bai-22', {
  objectives: [
    "Trình bày được các vùng biển của Việt Nam theo Luật Biển Việt Nam 2012.",
    "Trình bày được các ngành kinh tế biển.",
    "Nêu được biện pháp bảo vệ tài nguyên, môi trường biển đảo."
  ],
  intro: "Đường bờ biển nước ta dài khoảng 3 260 km với hàng nghìn đảo lớn nhỏ. Làm thế nào để phát triển kinh tế biển mà vẫn bảo vệ được môi trường?",
  steps: [
    { title: "Các vùng biển", html: "<p>Theo Luật Biển Việt Nam (2012), vùng biển gồm: nội thuỷ, lãnh hải (12 hải lí), vùng tiếp giáp lãnh hải (12 hải lí), vùng đặc quyền kinh tế (200 hải lí tính từ đường cơ sở) và thềm lục địa.</p>",
      svg: S.flowchart({ title: "Từ đường cơ sở ra khơi", steps: [{ t: 'start', s: "Nội thuỷ" }, { t: 'proc', s: "Lãnh hải 12 hải lí" }, { t: 'proc', s: "Tiếp giáp 12 hải lí" }, { t: 'end', s: "Đặc quyền kinh tế 200 hải lí" }] }), caption: "1 hải lí = 1 852 m." },
    { title: "Kinh tế biển tổng hợp", html: "<p>Các ngành:</p>",
      svg: S.table({ title: "Các ngành kinh tế biển", head: ["Ngành", "Ví dụ"], rows: [["Khai thác, nuôi trồng hải sản", "Ngư trường Hoàng Sa, Trường Sa"], ["Du lịch biển đảo", "Hạ Long, Nha Trang, Phú Quốc"], ["Giao thông vận tải biển", "Cảng Hải Phòng, Cái Mép"], ["Khai thác khoáng sản", "Dầu khí, muối, cát"]], colW: 250 }), caption: "Phát triển tổng hợp để khai thác hiệu quả tài nguyên." },
    { title: "Hai quần đảo", html: "<p>Quần đảo Hoàng Sa thuộc thành phố Đà Nẵng; quần đảo Trường Sa thuộc tỉnh Khánh Hoà. Đảo Phú Quốc thuộc tỉnh An Giang (từ năm 2025).</p>" },
    { title: "Bảo vệ môi trường", html: "<div class=\"box key\">Chống ô nhiễm (rác thải nhựa, tràn dầu); bảo vệ rừng ngập mặn, rạn san hô; khai thác hợp lí; mở rộng khu bảo tồn biển; tăng cường bảo vệ chủ quyền.</div>" }
  ],
  summary: "Theo Luật Biển Việt Nam 2012, vùng biển gồm nội thuỷ, lãnh hải 12 hải lí, vùng tiếp giáp 12 hải lí, vùng đặc quyền kinh tế 200 hải lí và thềm lục địa. Kinh tế biển tổng hợp: hải sản, du lịch, giao thông, khoáng sản. Hoàng Sa thuộc TP Đà Nẵng, Trường Sa thuộc Khánh Hoà. Cần bảo vệ môi trường, tài nguyên và chủ quyền biển đảo.",
  examples: [
    { title: "Tính", problem: "Lãnh hải 12 hải lí bằng bao nhiêu km?", solution: "12 × 1,852 ≈ 22,2 km." },
    { title: "Tính", problem: "Vùng đặc quyền kinh tế 200 hải lí bằng bao nhiêu km?", solution: "200 × 1,852 = 370,4 km." },
    { title: "Giải thích", problem: "Vì sao phải phát triển kinh tế biển tổng hợp?", solution: "Các ngành liên quan chặt chẽ; phát triển tổng hợp giúp hiệu quả cao và bảo vệ môi trường." }
  ],
  exercises: [
    { question: "Luật Biển Việt Nam ban hành năm nào?", hints: ["Thập niên 2010.", "201…"], solution: "Năm 2012." },
    { question: "Lãnh hải rộng bao nhiêu hải lí?", hints: ["Một tá.", "1…"], solution: "12 hải lí." },
    { question: "Phú Quốc thuộc tỉnh nào từ năm 2025?", hints: ["Kiên Giang cũ nhập vào.", "An …"], solution: "An Giang." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Quần đảo Hoàng Sa thuộc thành phố Đà Nẵng.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Chiều rộng vùng đặc quyền kinh tế:", options: ["200 hải lí", "12 hải lí", "24 hải lí", "350 hải lí"], answer: 0, explain: "200 hải lí." },
    { type: 'short', q: "200 hải lí, 1 hải lí = 1,852 km. Bằng bao nhiêu km?", answer: "370.4", answerText: "370,4", unit: "km", calc: "200*1.852", explain: "370,4." },
    { type: 'mcq', q: "Nguy cơ ô nhiễm biển lớn:", options: ["Rác thải nhựa, tràn dầu", "Trồng rừng ngập mặn", "Nuôi trồng có kiểm soát", "Khu bảo tồn biển"], answer: 0, explain: "Rác nhựa, tràn dầu." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Vùng tiếp giáp lãnh hải rộng 200 hải lí.", answer: false, explain: "Rộng 12 hải lí." },
    { type: 'mcq', q: "Ngành kinh tế biển:", options: ["Du lịch biển đảo", "Trồng chè", "Khai thác than hầm lò trên núi", "Chăn nuôi trâu"], answer: 0, explain: "Du lịch biển đảo." },
    { type: 'short', q: "Lãnh hải rộng 12 hải lí, 1 hải lí = 1 852 m. Lãnh hải rộng bao nhiêu m?", answer: "22224", answerText: "22 224", unit: "m", calc: "12*1852", explain: "22 224." },
    { type: 'mcq', q: "Biện pháp bảo vệ rạn san hô:", options: ["Lập khu bảo tồn biển", "Khai thác san hô làm vật liệu", "Đánh bắt bằng chất nổ", "Xả thải ra biển"], answer: 0, explain: "Khu bảo tồn." }
  ]
});
})();
