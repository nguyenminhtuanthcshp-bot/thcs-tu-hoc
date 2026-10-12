/* LS&ĐL 7 – Địa lí, Bài 14. Đặc điểm tự nhiên Bắc Mỹ. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-7/dl-bai-14', {
  objectives: [
    "Trình bày được sự phân hoá địa hình Bắc Mỹ.",
    "Phân tích được sự phân hoá khí hậu.",
    "Xác định được các sông, hồ lớn và các đới thiên nhiên."
  ],
  intro: "Đi theo vĩ tuyến 40°B từ tây sang đông Bắc Mỹ, ta lần lượt gặp núi cao đồ sộ, đồng bằng mênh mông rồi núi thấp. Địa hình nơi đây có cấu trúc rất rõ.",
  steps: [
    { title: "Địa hình", html: "<p>Bắc Mỹ có 3 khu vực địa hình kéo dài theo chiều kinh tuyến:</p>",
      svg: S.table({ title: "Ba khu vực địa hình Bắc Mỹ", head: ["Khu vực", "Đặc điểm"], rows: [["Phía tây: Coóc-đi-e", "Núi trẻ cao, đồ sộ"], ["Ở giữa: đồng bằng", "Rộng, thấp dần về phía nam"], ["Phía đông: A-pa-lát", "Núi già, thấp"]], colW: 250 }), caption: "Thứ tự từ tây sang đông." },
    { title: "Lát cắt địa hình", html: "<p>Lát cắt từ tây sang đông (minh hoạ):</p>",
      svg: S.profile({ title: 'Lát cắt địa hình Bắc Mỹ (minh hoạ)', pts: [[0,0],[1,2500],[2,3500],[3,1800],[4,600],[5,300],[6,200],[7,900],[8,300],[9,0]], labels: [{ k: 2, t: 'Coóc-đi-e' }, { k: 5, t: 'Đồng bằng' }, { k: 7, t: 'A-pa-lát' }], hMax: 4000, note: 'Số liệu minh hoạ, không theo tỉ lệ (mỗi đơn vị khoảng 500 km).' }), caption: "Cao ở phía tây, thấp ở giữa, núi thấp ở phía đông." },
    { title: "Khí hậu", html: "<p>Khí hậu phân hoá theo chiều bắc – nam (cực, cận cực, ôn đới, cận nhiệt, nhiệt đới) và theo chiều tây – đông (phía tây dãy Coóc-đi-e ẩm hơn, sườn khuất gió và nội địa khô hơn). Vùng ôn đới chiếm diện tích lớn nhất.</p>" },
    { title: "Sông, hồ và đới thiên nhiên", html: "<ul><li>Hệ thống sông <b>Mít-xu-ri – Mi-xi-xi-pi</b> dài, lưu vực rộng.</li><li><b>Hồ Lớn</b> (Ngũ Hồ) – hệ thống hồ nước ngọt lớn nhất thế giới.</li><li>Đới lạnh (đài nguyên), đới ôn hoà (rừng lá kim, rừng lá rộng, thảo nguyên), đới nóng (phía nam).</li></ul>" }
  ],
  summary: "Địa hình Bắc Mỹ có 3 khu vực kéo dài theo kinh tuyến: hệ thống Coóc-đi-e ở phía tây (núi trẻ cao), đồng bằng ở giữa, dãy A-pa-lát ở phía đông (núi già). Khí hậu phân hoá theo bắc – nam và tây – đông, ôn đới chiếm diện tích lớn nhất. Sông lớn: Mít-xu-ri – Mi-xi-xi-pi; có Hồ Lớn (Ngũ Hồ). Đới thiên nhiên: lạnh, ôn hoà, nóng.",
  examples: [
    { title: "So sánh", problem: "Coóc-đi-e khác A-pa-lát thế nào?", solution: "Coóc-đi-e là núi trẻ, cao, đồ sộ ở phía tây; A-pa-lát là núi già, thấp ở phía đông." },
    { title: "Giải thích", problem: "Vì sao không khí lạnh từ phía bắc dễ tràn sâu xuống phía nam?", solution: "Đồng bằng ở giữa thấp, kéo dài bắc – nam, không có núi chắn ngang." },
    { title: "Đọc lát cắt", problem: "Theo lát cắt minh hoạ, điểm cao nhất bao nhiêu m?", solution: "3 500 m (ở Coóc-đi-e)." }
  ],
  exercises: [
    { question: "Hệ thống núi phía tây Bắc Mỹ?", hints: ["Núi trẻ.", "Coóc-…"], solution: "Coóc-đi-e." },
    { question: "Ngũ Hồ là gì?", hints: ["Năm hồ.", "Nước ngọt."], solution: "Hệ thống 5 hồ nước ngọt lớn ở biên giới Ca-na-đa – Hoa Kỳ." },
    { question: "Theo lát cắt: Coóc-đi-e 3 500 m, A-pa-lát 900 m. Chênh lệch?", hints: ["Trừ.", "Hơn 2 nghìn."], solution: "2 600 m." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Dãy A-pa-lát là núi già.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Hệ thống núi trẻ phía tây Bắc Mỹ:", options: ["Coóc-đi-e", "A-pa-lát", "An-đét", "U-ran"], answer: 0, explain: "Coóc-đi-e." },
    { type: 'short', q: "Lát cắt minh hoạ: điểm cao nhất 3 500 m, A-pa-lát 900 m. Chênh lệch bao nhiêu m?", answer: "2600", answerText: "2 600", unit: "m", calc: "3500-900", explain: "2 600." },
    { type: 'mcq', q: "Hệ thống sông lớn ở Bắc Mỹ:", options: ["Mít-xu-ri – Mi-xi-xi-pi", "A-ma-dôn", "Nin", "Von-ga"], answer: 0, explain: "Đúng." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Địa hình Bắc Mỹ có các dãy núi chạy theo hướng đông – tây chắn ngang.", answer: false, explain: "Kéo dài theo kinh tuyến." },
    { type: 'mcq', q: "Đới khí hậu chiếm diện tích lớn nhất ở Bắc Mỹ:", options: ["Ôn đới", "Nhiệt đới", "Xích đạo", "Cận xích đạo"], answer: 0, explain: "Ôn đới." },
    { type: 'short', q: "Ngũ Hồ có bao nhiêu hồ lớn?", answer: "5", unit: "hồ", calc: "5", explain: "5." },
    { type: 'mcq', q: "Ở giữa Bắc Mỹ là:", options: ["Đồng bằng rộng lớn", "Núi trẻ", "Hoang mạc Xa-ha-ra", "Sơn nguyên Tây Tạng"], answer: 0, explain: "Đồng bằng." }
  ]
});
})();
