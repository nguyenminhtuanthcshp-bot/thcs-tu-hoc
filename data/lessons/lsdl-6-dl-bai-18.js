/* LS&ĐL 6 – Địa lí, Bài 18. Thực hành: Phân tích biểu đồ nhiệt độ, lượng mưa. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-6/dl-bai-18', {
  objectives: [
    'Đọc được biểu đồ nhiệt độ và lượng mưa.',
    'Xác định được tháng nóng nhất, lạnh nhất, mưa nhiều nhất, ít nhất.',
    'Tính được biên độ nhiệt năm, tổng lượng mưa các tháng.',
    'Nhận xét được đặc điểm khí hậu của một địa điểm.'
  ],
  intro: 'Một biểu đồ nhỏ với cột xanh và đường đỏ có thể cho em biết gần hết về khí hậu một nơi: mùa nào nóng, mùa nào mưa. Hôm nay em sẽ học cách “đọc” <b>biểu đồ nhiệt độ – lượng mưa</b>.',
  steps: [
    { title: 'Cấu trúc biểu đồ', html: `<ul><li>Trục ngang: 12 tháng.</li><li><b>Đường đỏ</b>: nhiệt độ (°C), đọc ở trục trái.</li><li><b>Cột xanh</b>: lượng mưa (mm), đọc ở trục phải.</li></ul>` },
    { title: 'Biểu đồ khí hậu Hà Nội', html: `<p>Số liệu trung bình 1991 – 2020 tại trạm Láng (làm tròn):</p>`,
      svg: S.climateChart({ title: 'Nhiệt độ và lượng mưa Hà Nội (gần đúng)', temp: [16, 17, 20, 24, 27, 29, 29, 29, 28, 25, 22, 18], rain: [20, 20, 36, 104, 165, 264, 254, 274, 228, 155, 61, 20], tMax: 40, tMin: 0, rMax: 400, note: 'Trạm Láng (Hà Nội), trung bình 1991 – 2020, làm tròn.' }), caption: 'Đỏ: nhiệt độ; xanh: lượng mưa.' },
    { title: 'Phân tích', html: `<p>Các bước:</p>`,
      svg: S.flowchart({ title: 'Phân tích biểu đồ', steps: [{ t: 'start', s: 'Đọc nhiệt độ' }, { t: 'proc', s: 'Biên độ nhiệt năm' }, { t: 'proc', s: 'Đọc lượng mưa' }, { t: 'end', s: 'Nhận xét mùa' }] }), caption: 'Tháng mưa ≥ 100 mm thường xếp vào mùa mưa.' },
    { title: 'Kết luận', html: `<div class="box key">Hà Nội: mùa hè nóng, mưa nhiều (khoảng tháng 4 – 10); mùa đông lạnh, ít mưa – khí hậu nhiệt đới gió mùa.</div>` }
  ],
  summary: 'Biểu đồ khí hậu gồm đường nhiệt độ (trục trái, °C) và cột lượng mưa (trục phải, mm) theo 12 tháng. Khi phân tích: tìm tháng nóng nhất, lạnh nhất, tính biên độ nhiệt năm; tìm tháng mưa nhiều, ít, xác định mùa mưa; rồi nhận xét. Hà Nội có mùa hè nóng, mưa nhiều và mùa đông lạnh, ít mưa.',
  examples: [
    { title: 'Biên độ', problem: 'Theo biểu đồ, tháng nóng nhất 29 °C, lạnh nhất 16 °C. Biên độ nhiệt năm?', solution: '29 − 16 = 13 °C.' },
    { title: 'Mùa mưa', problem: 'Các tháng có lượng mưa ≥ 100 mm?', solution: 'Tháng 4 đến tháng 10 (tháng 4: 104 mm; tháng 10: 155 mm).' },
    { title: 'Tổng mưa mùa hè', problem: 'Tổng lượng mưa tháng 6, 7, 8?', solution: '264 + 254 + 274 = 792 mm.' }
  ],
  exercises: [
    { question: 'Tháng nào mưa nhiều nhất, bao nhiêu mm?', hints: ['Cột cao nhất.', 'So tháng 6 và tháng 8.'], solution: 'Tháng 8: 274 mm.' },
    { question: 'Tính tổng lượng mưa tháng 12, 1, 2.', hints: ['20 + 20 + 20.', 'Kết quả dưới 100.'], solution: '60 mm.' },
    { question: 'Lượng mưa tháng 8 gấp khoảng bao nhiêu lần tháng 1? (làm tròn đến hàng đơn vị)', hints: ['274 : 20.', 'Khoảng 13,7.'], solution: 'Khoảng 14 lần.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Trên biểu đồ khí hậu, lượng mưa thường thể hiện bằng cột.', answer: true, explain: 'Đúng.' },
    { type: 'short', q: 'Nóng nhất 29 °C, lạnh nhất 16 °C. Biên độ nhiệt năm (°C)?', answer: '13', unit: '°C', calc: '29-16', explain: '13.' },
    { type: 'short', q: 'Tổng lượng mưa tháng 6, 7, 8 (264, 254, 274 mm)?', answer: '792', unit: 'mm', calc: '264+254+274', explain: '792.' },
    { type: 'mcq', q: 'Tháng mưa nhiều nhất ở Hà Nội theo biểu đồ:', options: ['Tháng 8', 'Tháng 1', 'Tháng 4', 'Tháng 12'], answer: 0, explain: '274 mm.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mùa đông ở Hà Nội mưa nhiều hơn mùa hè.', answer: false, explain: 'Ít mưa hơn.' },
    { type: 'short', q: 'Tổng mưa tháng 12, 1, 2 (mỗi tháng 20 mm)?', answer: '60', unit: 'mm', calc: '20+20+20', explain: '60.' },
    { type: 'short', q: 'Tháng 8 (274 mm) gấp khoảng bao nhiêu lần tháng 1 (20 mm)? (làm tròn đơn vị)', answer: '14', unit: 'lần', calc: 'Math.round(274/20)', explain: '≈ 14.' },
    { type: 'mcq', q: 'Kiểu khí hậu của Hà Nội:', options: ['Nhiệt đới gió mùa', 'Hoang mạc', 'Ôn đới lục địa', 'Hàn đới'], answer: 0, explain: 'Đúng.' }
  ]
});
})();
