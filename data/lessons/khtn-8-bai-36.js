/* KHTN 8 – Bài 36. Điều hoà môi trường trong của cơ thể người. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-8/bai-36', {
  objectives: [
    'Nêu được khái niệm môi trường trong và cân bằng môi trường trong.',
    'Nêu được vai trò của việc duy trì ổn định môi trường trong.',
    'Nêu được một số chỉ số sinh lí (glucose, pH, thân nhiệt…) và ý nghĩa khi xét nghiệm.',
    'Kể được một số bệnh do mất cân bằng môi trường trong (tiểu đường, gout…).'
  ],
  intro: 'Dù trời nóng hay lạnh, dù vừa ăn no hay đang đói, thân nhiệt và lượng đường trong máu của em vẫn gần như không đổi. Cơ thể làm thế nào để giữ “môi trường bên trong” ổn định như vậy?',
  steps: [
    { title: 'Môi trường trong', html: `<p><b>Môi trường trong</b> của cơ thể gồm <b>máu, nước mô</b> (dịch mô) và <b>bạch huyết</b>. Tế bào nhận O<sub>2</sub>, chất dinh dưỡng và thải chất thải qua môi trường trong.</p>` },
    { title: 'Cân bằng môi trường trong', html: `<p><b>Cân bằng môi trường trong</b> là duy trì sự ổn định các điều kiện lí, hoá của môi trường trong (nhiệt độ, pH, nồng độ glucose, muối khoáng, áp suất…), giúp tế bào hoạt động bình thường.</p>
      <p>Các cơ quan như thận, gan, phổi, da cùng hệ thần kinh, nội tiết tham gia điều hoà.</p>
      <table class="tbl"><tr><th>Chỉ số</th><th>Giá trị bình thường (tham khảo)</th></tr><tr><td>Thân nhiệt</td><td>khoảng 36,5 – 37,5 °C</td></tr><tr><td>pH máu</td><td>7,35 – 7,45</td></tr><tr><td>Glucose máu lúc đói</td><td>khoảng 3,9 – 5,6 mmol/L</td></tr></table>
      <p>(Ngưỡng cụ thể có thể khác nhau tuỳ tài liệu và phòng xét nghiệm.)</p>` },
    { title: 'Ví dụ: điều hoà đường huyết', html: `<p>Sau bữa ăn, glucose máu tăng ⇒ tuyến tuỵ tiết <b>insulin</b> giúp chuyển glucose thành glycogen dự trữ ở gan, cơ ⇒ glucose máu giảm về mức bình thường. Khi đói, glucose máu giảm ⇒ tuỵ tiết <b>glucagon</b> giúp chuyển glycogen thành glucose ⇒ glucose máu tăng lên.</p>`,
      svg: [S.flow({ items: ['Glucose máu tăng (sau ăn)', 'Tuyến tuỵ tiết insulin', 'Gan, cơ tích glycogen', 'Glucose máu trở về bình thường'], size: 13, label: 'Điều hoà đường huyết khi glucose tăng' }),
        S.xyGraph({ series: [{ pts: [[0, 5], [0.5, 7.2], [1, 6.8], [1.5, 6], [2, 5.4], [3, 5]], color: '#dc2626', dots: true }], xmax: 3.5, ymax: 8, xstep: 0.5, ystep: 1, xlabel: 't (giờ)', ylabel: 'Glucose (mmol/L)', label: 'Glucose máu sau bữa ăn ở người khoẻ mạnh (số liệu minh hoạ)' })] },
    { title: 'Mất cân bằng môi trường trong', html: `<ul><li><b>Bệnh tiểu đường</b>: glucose máu cao kéo dài do thiếu insulin hoặc insulin hoạt động kém.</li><li><b>Bệnh gout</b>: nồng độ acid uric trong máu cao, lắng đọng ở khớp gây sưng đau.</li><li>Mất nước do tiêu chảy, sốt cao làm rối loạn muối khoáng; cần bù nước và điện giải.</li></ul>
      <div class="box tip">Xét nghiệm máu, nước tiểu định kì giúp phát hiện sớm sự mất cân bằng môi trường trong.</div>` }
  ],
  summary: 'Môi trường trong: máu, nước mô, bạch huyết. Cân bằng môi trường trong là duy trì ổn định nhiệt độ, pH, glucose, muối khoáng… nhờ thận, gan, phổi, da và hệ thần kinh, nội tiết. Mất cân bằng gây bệnh như tiểu đường, gout.',
  examples: [
    { title: 'Đọc kết quả xét nghiệm', problem: 'Một người có glucose máu lúc đói 9 mmol/L. So với giá trị tham khảo 3,9 – 5,6 mmol/L, kết quả này thế nào?', solution: 'Cao hơn nhiều so với giá trị bình thường; người này cần đi khám để kiểm tra bệnh tiểu đường.' },
    { title: 'Đọc đồ thị', problem: 'Theo đồ thị minh hoạ, glucose máu cao nhất sau bữa ăn bao lâu và bằng bao nhiêu?', solution: 'Khoảng 0,5 giờ sau ăn, đạt 7,2 mmol/L; sau đó giảm dần về khoảng 5 mmol/L.' },
    { title: 'Vai trò của thận', problem: 'Thận tham gia cân bằng môi trường trong như thế nào?', solution: 'Thận lọc máu, thải chất thải (urea, acid uric), điều chỉnh lượng nước và muối khoáng, góp phần ổn định pH máu.' }
  ],
  exercises: [
    { question: 'Môi trường trong gồm những thành phần nào? Vai trò của môi trường trong?', hints: ['Có ba thành phần.', 'Tế bào trao đổi chất qua đâu?'], solution: 'Máu, nước mô, bạch huyết; giúp tế bào trao đổi chất với môi trường ngoài.' },
    { question: 'Vì sao người bệnh tiểu đường cần hạn chế đồ ngọt?', hints: ['Đồ ngọt làm glucose máu thay đổi thế nào?', 'Người bệnh thiếu hoặc kém insulin.'], solution: 'Đồ ngọt làm glucose máu tăng nhanh, trong khi cơ thể người bệnh không điều hoà được do thiếu hoặc kém insulin.' },
    { question: 'Glucose máu tăng từ 5 lên 7,2 mmol/L. Tăng bao nhiêu mmol/L?', hints: ['Lấy giá trị sau trừ giá trị trước.', '7,2 − 5.'], solution: '7,2 − 5 = 2,2 mmol/L.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Môi trường trong của cơ thể gồm máu, nước mô và bạch huyết.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Hormone làm giảm glucose máu là:', options: ['glucagon', 'insulin', 'adrenaline', 'thyroxine'], answer: 1, explain: 'Insulin do tuyến tuỵ tiết.' },
    { type: 'mcq', q: 'pH máu ở người bình thường khoảng:', options: ['1,5 – 2', '5 – 6', '7,35 – 7,45', '9 – 10'], answer: 2, explain: 'Máu có tính base rất yếu.' },
    { type: 'short', q: 'Theo đồ thị minh hoạ, glucose máu từ 7,2 mmol/L giảm về 5 mmol/L. Giảm bao nhiêu mmol/L?', answer: '2,2', unit: 'mmol/L', calc: '7.2-5', explain: '7,2 − 5 = 2,2 mmol/L.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Bệnh gout liên quan đến nồng độ acid uric trong máu cao.', answer: true, explain: 'Acid uric lắng đọng ở khớp.' },
    { type: 'short', q: 'Thân nhiệt bình thường khoảng 37 °C. Một người sốt 39,5 °C thì cao hơn bình thường bao nhiêu °C?', answer: '2,5', unit: '°C', calc: '39.5-37', explain: '39,5 − 37 = 2,5 °C.' },
    { type: 'mcq', q: 'Bệnh tiểu đường là do:', options: ['glucose máu thấp kéo dài', 'glucose máu cao kéo dài do thiếu hoặc kém insulin', 'thiếu calcium', 'thừa iodine'], answer: 1, explain: 'Rối loạn điều hoà glucose máu.' },
    { type: 'short', q: 'Giới hạn trên của glucose lúc đói (tham khảo) là 5,6 mmol/L. Kết quả 6,3 mmol/L vượt bao nhiêu mmol/L?', answer: '0,7', unit: 'mmol/L', calc: '6.3-5.6', explain: '6,3 − 5,6 = 0,7 mmol/L.' }
  ]
});
})();
