/* LS&ĐL 7 – Địa lí, Bài 11. Phương thức con người khai thác, sử dụng và bảo vệ thiên nhiên ở châu Phi. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-7/dl-bai-11', {
  objectives: [
    "Trình bày được cách con người khai thác thiên nhiên ở các môi trường khác nhau của châu Phi.",
    "Nêu được các vấn đề môi trường.",
    "Đề xuất được biện pháp bảo vệ thiên nhiên."
  ],
  intro: "Ở hoang mạc Xa-ha-ra, cây chà là mọc xanh tốt quanh những ốc đảo. Mỗi môi trường ở châu Phi có cách khai thác riêng.",
  steps: [
    { title: "Môi trường xích đạo", html: "<p>Trồng cây công nghiệp nhiệt đới (ca cao, cà phê, cọ dầu) trong các đồn điền; khai thác gỗ. Rừng bị chặt phá nhiều.</p>" },
    { title: "Môi trường nhiệt đới, hoang mạc", html: "<ul><li>Nhiệt đới (xa-van): trồng lúa, ngô, kê; chăn nuôi gia súc; lập các khu bảo tồn động vật hoang dã.</li><li>Hoang mạc: trồng chà là, cam, chanh ở ốc đảo; chăn nuôi du mục; khai thác dầu mỏ, khí đốt.</li></ul>",
      svg: S.table({ title: "Khai thác thiên nhiên theo môi trường", head: ["Môi trường", "Hoạt động chính"], rows: [["Xích đạo", "Cây công nghiệp, gỗ"], ["Nhiệt đới", "Ngô, kê; chăn nuôi; du lịch"], ["Hoang mạc", "Ốc đảo, du mục, dầu khí"], ["Cận nhiệt", "Nho, cam, ô liu"]], colW: 250 }), caption: "Du lịch sinh thái phát triển ở các vườn quốc gia." },
    { title: "Vấn đề môi trường", html: "<p>Phá rừng, hoang mạc hoá, săn bắt động vật trái phép, khai thác khoáng sản bừa bãi.</p>" },
    { title: "Bảo vệ thiên nhiên", html: "<p>Các biện pháp:</p>",
      svg: S.mindmap({ center: "Bảo vệ thiên nhiên châu Phi", branches: [{ title: "Rừng", items: ["Trồng rừng", "Hạn chế chặt phá"] }, { title: "Hoang mạc hoá", items: ["Trồng “bức tường xanh”"] }, { title: "Động vật", items: ["Vườn quốc gia", "Chống săn trộm"] }], w: 640, size: 13 }), caption: "Sáng kiến “Bức tường xanh vĩ đại” trồng cây dọc rìa nam Xa-ha-ra." }
  ],
  summary: "Ở môi trường xích đạo, người dân trồng cây công nghiệp, khai thác gỗ; nhiệt đới: trồng ngô, kê, chăn nuôi, du lịch sinh thái; hoang mạc: canh tác ốc đảo, chăn nuôi du mục, khai thác dầu khí; cận nhiệt: trồng nho, cam, ô liu. Vấn đề: phá rừng, hoang mạc hoá, săn trộm. Biện pháp: trồng rừng, “Bức tường xanh”, lập vườn quốc gia, chống săn trộm.",
  examples: [
    { title: "Phân loại", problem: "Chà là được trồng ở môi trường nào?", solution: "Hoang mạc (ở ốc đảo)." },
    { title: "Giải thích", problem: "Vì sao hoang mạc hoá mở rộng?", solution: "Do khí hậu khô hạn và con người chăn thả, chặt cây quá mức." },
    { title: "Tính", problem: "Một vườn quốc gia có 120 con voi, năm sau tăng 15 con. Tổng số voi? (số liệu minh hoạ)", solution: "135 con." }
  ],
  exercises: [
    { question: "Cây công nghiệp ở môi trường xích đạo?", hints: ["Làm sô-cô-la.", "Ca …"], solution: "Ca cao (cà phê, cọ dầu)." },
    { question: "Ốc đảo là gì?", hints: ["Ở hoang mạc.", "Có nước."], solution: "Vùng có nguồn nước, cây cối giữa hoang mạc." },
    { question: "Nêu một biện pháp chống hoang mạc hoá.", hints: ["Trồng cây.", "“Bức tường …”."], solution: "Trồng cây chắn cát, như “Bức tường xanh”." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Ca cao là cây trồng ở môi trường xích đạo châu Phi.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Hoạt động ở hoang mạc châu Phi:", options: ["Chăn nuôi du mục", "Trồng lúa nước", "Đánh cá voi", "Trồng chè"], answer: 0, explain: "Du mục." },
    { type: 'short', q: "Vườn quốc gia có 120 con voi, tăng thêm 15 con. Tổng bao nhiêu con? (số liệu minh hoạ)", answer: "135", unit: "con", calc: "120+15", explain: "135." },
    { type: 'mcq', q: "Cây ở môi trường cận nhiệt châu Phi:", options: ["Ô liu", "Cọ dầu", "Ca cao", "Chà là"], answer: 0, explain: "Ô liu." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Săn bắt động vật hoang dã trái phép giúp bảo vệ thiên nhiên.", answer: false, explain: "Gây hại." },
    { type: 'mcq', q: "Sáng kiến chống hoang mạc hoá:", options: ["Bức tường xanh", "Đập Tam Hiệp", "Kênh Xuy-ê", "Vạn Lí Trường Thành"], answer: 0, explain: "Bức tường xanh." },
    { type: 'short', q: "Mỗi năm trồng 30 nghìn cây, trong 4 năm trồng bao nhiêu nghìn cây? (minh hoạ)", answer: "120", unit: "nghìn cây", calc: "30*4", explain: "120." },
    { type: 'mcq', q: "Vấn đề môi trường ở châu Phi:", options: ["Hoang mạc hoá", "Băng tan ở cực", "Núi lửa băng", "Bão tuyết"], answer: 0, explain: "Hoang mạc hoá." }
  ]
});
})();
