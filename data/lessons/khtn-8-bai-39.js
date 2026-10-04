/* KHTN 8 – Bài 39. Da và điều hoà thân nhiệt ở người. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-8/bai-39', {
  objectives: [
    'Nêu được cấu tạo sơ lược và chức năng của da.',
    'Nêu được một số bệnh về da và biện pháp chăm sóc, bảo vệ, làm đẹp da an toàn.',
    'Nêu được khái niệm thân nhiệt, vai trò của da và hệ thần kinh trong điều hoà thân nhiệt.',
    'Nêu được các biện pháp chống nóng, chống lạnh; cách xử lí khi bị cảm nóng, cảm lạnh, sốt.'
  ],
  intro: 'Da là cơ quan lớn nhất của cơ thể, diện tích khoảng 1,5 – 2 m² ở người trưởng thành. Vì sao khi trời nóng ta đổ mồ hôi, còn khi lạnh lại “nổi da gà” và run?',
  steps: [
    { title: 'Cấu tạo và chức năng của da', html: `<ul><li><b>Lớp biểu bì</b>: tầng sừng (tế bào chết) bảo vệ, tầng tế bào sống có hạt sắc tố.</li><li><b>Lớp bì</b>: có thụ quan, tuyến mồ hôi, tuyến nhờn, lông và bao lông, mạch máu, cơ co chân lông.</li><li><b>Lớp mỡ dưới da</b>: dự trữ năng lượng, cách nhiệt.</li></ul>
      <p>Chức năng: bảo vệ cơ thể, cảm giác, bài tiết (mồ hôi), điều hoà thân nhiệt; tạo vitamin D dưới ánh nắng.</p>`,
      svg: S.skinSection() },
    { title: 'Bảo vệ và làm đẹp da', html: `<ul><li>Bệnh về da: mụn trứng cá, lang ben, hắc lào, ghẻ, bỏng…</li><li>Biện pháp: tắm rửa thường xuyên; mặc quần áo sạch; tránh nắng gắt (dùng mũ, áo chống nắng); ăn uống đủ chất, uống đủ nước; không nặn mụn; dùng mĩ phẩm phù hợp, có nguồn gốc rõ ràng.</li></ul>` },
    { title: 'Thân nhiệt và điều hoà thân nhiệt', html: `<p><b>Thân nhiệt</b> là nhiệt độ của cơ thể, ở người khoẻ mạnh luôn ổn định khoảng 37 °C (đo ở miệng khoảng 36,5 – 37,5 °C, tham khảo).</p>
      <table class="tbl"><tr><th>Khi trời nóng</th><th>Khi trời lạnh</th></tr><tr><td>mạch máu dưới da dãn, tăng toả nhiệt</td><td>mạch máu dưới da co, giảm toả nhiệt</td></tr><tr><td>tiết nhiều mồ hôi</td><td>cơ co chân lông co (“nổi da gà”)</td></tr><tr><td>giảm sinh nhiệt</td><td>run cơ, tăng sinh nhiệt</td></tr></table>
      <p>Hệ thần kinh (vùng dưới đồi ở não) điều khiển các phản ứng trên.</p>`,
      svg: S.row([{ svg: S.thermometer({ min: 34, max: 42, step: 1, minor: 5, value: 37, title: 'Bình thường', label: 'Nhiệt kế chỉ thân nhiệt bình thường 37 °C' }), caption: 'Khoảng 37 °C' }, { svg: S.thermometer({ min: 34, max: 42, step: 1, minor: 5, value: 39, title: 'Đang sốt', label: 'Nhiệt kế chỉ 39 °C khi sốt' }), caption: 'Sốt 39 °C' }]) },
    { title: 'Phòng chống nóng, lạnh; sốt', html: `<ul><li>Chống nóng: đội mũ, mặc áo thoáng, uống đủ nước, không ra nắng giờ cao điểm.</li><li>Chống lạnh: mặc ấm, giữ ấm cổ, tay, chân; rèn luyện thể dục.</li><li><b>Sốt</b>: thân nhiệt tăng (thường từ 38 °C) – phản ứng của cơ thể khi nhiễm bệnh. Khi sốt cao cần chườm mát, uống nhiều nước, đưa đến cơ sở y tế; chỉ dùng thuốc hạ sốt theo chỉ dẫn.</li><li>Cảm nóng: đưa người bệnh vào chỗ mát, thoáng, lau người bằng khăn ẩm; cảm lạnh: giữ ấm, uống nước ấm.</li></ul>` }
  ],
  summary: 'Da gồm biểu bì, bì, lớp mỡ dưới da; chức năng bảo vệ, cảm giác, bài tiết, điều hoà thân nhiệt. Thân nhiệt ổn định khoảng 37 °C nhờ da và hệ thần kinh: trời nóng mạch dãn, tiết mồ hôi; trời lạnh mạch co, nổi da gà, run. Giữ vệ sinh da, chống nóng, chống lạnh hợp lí.',
  examples: [
    { title: 'Mức sốt', problem: 'Một bạn có thân nhiệt 38,5 °C. Cao hơn mức 37 °C bao nhiêu độ?', solution: '38,5 − 37 = 1,5 (°C); bạn đang sốt.' },
    { title: 'Mồ hôi làm mát', problem: 'Vì sao đổ mồ hôi giúp cơ thể mát hơn?', solution: 'Mồ hôi bay hơi trên da, lấy nhiệt từ cơ thể nên làm giảm nhiệt độ da.' },
    { title: 'Mùa đông', problem: 'Vì sao mùa đông da thường tái hơn?', solution: 'Mạch máu dưới da co lại để giảm toả nhiệt, lượng máu qua da ít hơn nên da tái.' }
  ],
  exercises: [
    { question: 'Nêu các lớp cấu tạo của da.', hints: ['Có ba lớp.', 'Lớp ngoài cùng có tầng sừng.'], solution: 'Lớp biểu bì, lớp bì, lớp mỡ dưới da.' },
    { question: 'Diện tích da khoảng 1,8 m². Nếu mỗi cm² da có khoảng 200 tuyến mồ hôi (số liệu minh hoạ), tính số tuyến mồ hôi.', hints: ['1 m² = 10 000 cm².', 'Nhân diện tích với mật độ.'], solution: '1,8 m² = 18 000 cm²; 18 000 · 200 = 3 600 000 tuyến.' },
    { question: 'Khi bạn bị cảm nóng, em cần làm gì?', hints: ['Đưa đến chỗ nào?', 'Làm mát bằng cách nào?'], solution: 'Đưa bạn vào chỗ thoáng mát, nới lỏng quần áo, lau người bằng khăn ướt, cho uống nước; nếu nặng thì gọi nhân viên y tế.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khi trời nóng, mạch máu dưới da dãn ra giúp tăng toả nhiệt.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Thân nhiệt của người khoẻ mạnh khoảng:', options: ['35 °C', '37 °C', '39 °C', '40 °C'], answer: 1, explain: 'Ổn định khoảng 37 °C.' },
    { type: 'short', q: 'Một bạn sốt 39,2 °C. Thân nhiệt cao hơn 37 °C bao nhiêu độ C?', answer: '2,2', unit: '°C', calc: '39.2-37', explain: '39,2 − 37 = 2,2 °C.' },
    { type: 'mcq', q: 'Khi trời lạnh, phản ứng nào giúp tăng sinh nhiệt?', options: ['Tiết mồ hôi', 'Run cơ', 'Mạch dãn', 'Uống nước lạnh'], answer: 1, explain: 'Run cơ sinh nhiệt.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nặn mụn bằng tay là cách chăm sóc da an toàn.', answer: false, explain: 'Dễ nhiễm trùng, để sẹo.' },
    { type: 'short', q: 'Diện tích da của một người khoảng 1,6 m². Đổi ra cm².', answer: '16000', answerText: '16 000', unit: 'cm²', calc: '1.6*10000', explain: '1,6 · 10 000 = 16 000 cm².' },
    { type: 'mcq', q: 'Lớp nào của da có tuyến mồ hôi, thụ quan và mạch máu?', options: ['Tầng sừng', 'Lớp bì', 'Lớp mỡ dưới da', 'Lớp sắc tố'], answer: 1, explain: 'Lớp bì.' },
    { type: 'short', q: 'Nhiệt độ ngoài trời 36 °C, thân nhiệt 37 °C. Chênh lệch là bao nhiêu độ C?', answer: '1', unit: '°C', calc: '37-36', explain: '37 − 36 = 1 °C.' }
  ]
});
})();
