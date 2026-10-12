/* LS&ĐL 9 – Địa lí, Bài 21. Thực hành: Tìm hiểu về tác động của biến đổi khí hậu đối với Đồng bằng sông Cửu Long. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-9/dl-bai-21', {
  objectives: [
    "Thu thập thông tin về biểu hiện biến đổi khí hậu ở ĐBSCL.",
    "Phân tích được tác động đến sản xuất và đời sống.",
    "Đề xuất được giải pháp thích ứng."
  ],
  intro: "Mỗi mùa khô, nước mặn lại lấn sâu vào ruộng vườn ở ĐBSCL. Biến đổi khí hậu đang thay đổi châu thổ này ra sao?",
  steps: [
    { title: "Biểu hiện", html: "<ul><li>Nhiệt độ tăng; mùa khô khắc nghiệt hơn.</li><li>Nước biển dâng, xâm nhập mặn sâu.</li><li>Sạt lở bờ sông, bờ biển; sụt lún đất.</li></ul>" },
    { title: "Tác động", html: "<p>Sơ đồ:</p>",
      svg: S.flowchart({ title: "Chuỗi tác động", steps: [{ t: 'start', s: "Nước biển dâng, hạn mặn" }, { t: 'proc', s: "Đất nhiễm mặn" }, { t: 'proc', s: "Giảm năng suất cây trồng" }, { t: 'end', s: "Thu nhập giảm, di cư" }] }), caption: "Sơ đồ mang tính khái quát." },
    { title: "Ví dụ tính toán", html: "<p>Bảng dưới là <b>số liệu minh hoạ</b> về độ mặn đo tại một điểm:</p>",
      svg: S.table({ title: "Độ mặn tại một điểm (số liệu minh hoạ)", head: ["Tháng", "Độ mặn (‰)"], rows: [["1", "2"], ["2", "4"], ["3", "6"], ["4", "5"]], colW: 250 }), caption: "Số liệu giả định để luyện đọc bảng; lúa thường bị hại khi độ mặn từ khoảng 4‰." },
    { title: "Giải pháp", html: "<div class=\"box key\">“Thuận thiên”: chuyển đổi cơ cấu (lúa – tôm, cây ăn quả chịu mặn); trữ nước ngọt, xây cống ngăn mặn; trồng rừng ngập mặn; hạn chế khai thác nước ngầm, cát lòng sông.</div>" }
  ],
  summary: "Biến đổi khí hậu ở ĐBSCL biểu hiện qua nhiệt độ tăng, nước biển dâng, xâm nhập mặn, sạt lở, sụt lún. Tác động: đất nhiễm mặn, giảm năng suất, thu nhập giảm, di cư. Giải pháp: phát triển theo hướng thuận thiên, chuyển đổi cơ cấu sản xuất, trữ ngọt, ngăn mặn, trồng rừng ngập mặn, hạn chế khai thác nước ngầm.",
  examples: [
    { title: "Tính", problem: "Theo bảng minh hoạ, độ mặn trung bình 4 tháng?", solution: "(2 + 4 + 6 + 5) : 4 = 4,25‰." },
    { title: "Nhận xét", problem: "Tháng nào độ mặn cao nhất?", solution: "Tháng 3 (6‰)." },
    { title: "Đề xuất", problem: "Vì sao hạn chế khai thác nước ngầm?", solution: "Khai thác quá mức gây sụt lún, làm nước mặn xâm nhập sâu hơn." }
  ],
  exercises: [
    { question: "Biểu hiện rõ nhất mùa khô?", hints: ["Nước biển lấn vào.", "Xâm nhập …"], solution: "Xâm nhập mặn." },
    { question: "Mô hình sản xuất thích ứng?", hints: ["Luân canh vụ lúa và vụ tôm.", "Lúa – …"], solution: "Lúa – tôm." },
    { question: "Rừng giúp chống sạt lở bờ biển?", hints: ["Ven biển.", "Rừng ngập …"], solution: "Rừng ngập mặn." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Xâm nhập mặn là một tác động của biến đổi khí hậu ở ĐBSCL.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Giải pháp thích ứng:", options: ["Trồng rừng ngập mặn", "Khai thác cát lòng sông", "Phá rừng nuôi tôm", "Khai thác nước ngầm tối đa"], answer: 0, explain: "Trồng rừng ngập mặn." },
    { type: 'short', q: "Độ mặn minh hoạ: 2, 4, 6, 5 ‰. Trung bình bao nhiêu ‰?", answer: "4.25", answerText: "4,25", unit: "‰", calc: "(2+4+6+5)/4", explain: "4,25." },
    { type: 'mcq', q: "Nguyên nhân làm sụt lún đất:", options: ["Khai thác nước ngầm quá mức", "Trồng cây", "Mưa nhiều", "Xây hồ chứa"], answer: 0, explain: "Khai thác nước ngầm." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Biến đổi khí hậu không ảnh hưởng đến sản xuất lúa.", answer: false, explain: "Làm giảm năng suất." },
    { type: 'mcq', q: "Hướng phát triển “thuận thiên” nghĩa là:", options: ["Thích ứng với tự nhiên", "Chống lại tự nhiên bằng mọi giá", "Bỏ sản xuất", "Chỉ trồng lúa"], answer: 0, explain: "Thích ứng." },
    { type: 'short', q: "Độ mặn minh hoạ tháng 3 là 6‰, tháng 1 là 2‰. Tháng 3 gấp mấy lần?", answer: "3", unit: "lần", calc: "6/2", explain: "3." },
    { type: 'mcq', q: "Hậu quả xã hội của hạn mặn:", options: ["Di cư tìm việc", "Tăng mạnh năng suất", "Giảm nhu cầu nước", "Không có"], answer: 0, explain: "Di cư." }
  ]
});
})();
