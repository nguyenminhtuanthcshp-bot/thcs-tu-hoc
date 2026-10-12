/* LS&ĐL 8 – Địa lí, Bài 8. Tác động của biến đổi khí hậu đối với khí hậu và thuỷ văn Việt Nam. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-8/dl-bai-8', {
  objectives: [
    "Phân tích được tác động của biến đổi khí hậu đối với khí hậu Việt Nam.",
    "Phân tích được tác động đối với thuỷ văn.",
    "Nêu được giải pháp ứng phó với biến đổi khí hậu."
  ],
  intro: "Theo Kịch bản biến đổi khí hậu năm 2020 của Bộ Tài nguyên và Môi trường, nhiệt độ trung bình năm của nước ta giai đoạn 1958 – 2018 tăng khoảng 0,89 °C.",
  steps: [
    { title: "Tác động đến khí hậu", html: "<ul><li>Nhiệt độ trung bình tăng; số ngày nắng nóng tăng.</li><li>Lượng mưa thay đổi thất thường; mưa lớn cực đoan nhiều hơn.</li><li>Thiên tai (bão mạnh, hạn hán) có xu hướng gia tăng.</li></ul>" },
    { title: "Tác động đến thuỷ văn", html: "<p>Chế độ dòng chảy thất thường: lũ lớn hơn, mùa cạn kiệt hơn; mực nước biển dâng gây <b>xâm nhập mặn</b>, nhất là ở đồng bằng sông Cửu Long.</p>",
      svg: S.flowchart({ title: "Chuỗi tác động", steps: [{ t: 'start', s: "Trái Đất nóng lên" }, { t: 'proc', s: "Nước biển dâng" }, { t: 'proc', s: "Xâm nhập mặn" }, { t: 'end', s: "Ảnh hưởng sản xuất" }] }), caption: "Đồng bằng sông Cửu Long là một trong những vùng chịu ảnh hưởng nặng nhất." },
    { title: "Giải pháp", html: "<p>Tóm tắt:</p>",
      svg: S.mindmap({ center: "Ứng phó biến đổi khí hậu", branches: [{ title: "Giảm nhẹ", items: ["Năng lượng tái tạo", "Trồng rừng"] }, { title: "Thích ứng", items: ["Giống chịu mặn, chịu hạn", "Công trình chống ngập"] }, { title: "Học sinh", items: ["Tiết kiệm điện", "Giảm rác nhựa"] }], w: 640, size: 13 }), caption: "Giảm nhẹ: hạn chế khí nhà kính; thích ứng: điều chỉnh cách sống, sản xuất." },
    { title: "Ghi nhớ", html: "<div class=\"box key\">Biến đổi khí hậu làm nhiệt độ tăng, mưa thất thường, thiên tai tăng, nước biển dâng, xâm nhập mặn; cần vừa giảm nhẹ vừa thích ứng.</div>" }
  ],
  summary: "Biến đổi khí hậu làm nhiệt độ trung bình năm ở Việt Nam tăng (khoảng 0,89 °C giai đoạn 1958 – 2018 theo Bộ Tài nguyên và Môi trường), mưa thất thường, thiên tai cực đoan tăng. Thuỷ văn: lũ lớn hơn, mùa cạn kiệt hơn, nước biển dâng gây xâm nhập mặn. Giải pháp: giảm nhẹ (năng lượng tái tạo, trồng rừng) và thích ứng (giống chịu mặn, công trình chống ngập).",
  examples: [
    { title: "Tính", problem: "Giai đoạn 1958 – 2018 dài bao nhiêu năm?", solution: "60 năm." },
    { title: "Giải thích", problem: "Vì sao nước biển dâng gây xâm nhập mặn?", solution: "Nước biển lấn sâu vào sông, kênh rạch và đất liền." },
    { title: "Phân loại", problem: "Trồng giống lúa chịu mặn là giải pháp giảm nhẹ hay thích ứng?", solution: "Thích ứng." }
  ],
  exercises: [
    { question: "Vùng chịu xâm nhập mặn nặng nhất?", hints: ["Ở phía nam.", "Đồng bằng sông …"], solution: "Đồng bằng sông Cửu Long." },
    { question: "Nêu một giải pháp giảm nhẹ.", hints: ["Liên quan đến năng lượng.", "Hoặc trồng rừng."], solution: "Dùng năng lượng tái tạo (hoặc trồng rừng)." },
    { question: "Nhiệt độ tăng 0,89 °C trong 60 năm. Trung bình mỗi 10 năm tăng khoảng bao nhiêu? (làm tròn)", hints: ["0,89 : 6.", "Khoảng 0,15."], solution: "Khoảng 0,15 °C." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Biến đổi khí hậu làm gia tăng thiên tai cực đoan.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Hậu quả của nước biển dâng ở đồng bằng sông Cửu Long:", options: ["Xâm nhập mặn", "Tăng phù sa", "Giảm nhiệt độ", "Hết bão"], answer: 0, explain: "Xâm nhập mặn." },
    { type: 'short', q: "Giai đoạn 1958 – 2018 dài bao nhiêu năm?", answer: "60", unit: "năm", calc: "2018-1958", explain: "60." },
    { type: 'mcq', q: "Giải pháp thích ứng:", options: ["Giống lúa chịu mặn", "Đốt than nhiều hơn", "Chặt rừng ngập mặn", "Xả rác nhựa"], answer: 0, explain: "Giống chịu mặn." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Biến đổi khí hậu không ảnh hưởng tới sông ngòi.", answer: false, explain: "Dòng chảy thất thường hơn." },
    { type: 'mcq', q: "Giải pháp giảm nhẹ biến đổi khí hậu:", options: ["Phát triển điện gió, điện mặt trời", "Tăng xe chạy xăng", "Đốt rừng", "Dùng nhiều túi nilon"], answer: 0, explain: "Năng lượng tái tạo." },
    { type: 'short', q: "Nhiệt độ tăng 0,89 °C. Làm tròn đến hàng phần mười?", answer: "0.9", answerText: "0,9", unit: "°C", calc: "Math.round(0.89*10)/10", explain: "0,9." },
    { type: 'mcq', q: "Cơ quan công bố Kịch bản biến đổi khí hậu năm 2020:", options: ["Bộ Tài nguyên và Môi trường", "Bộ Giáo dục", "Bộ Y tế", "Bộ Công an"], answer: 0, explain: "Bộ Tài nguyên và Môi trường." }
  ]
});
})();
