/* LS&ĐL 6 – Địa lí, Bài 20. Sông và hồ. Nước ngầm và băng hà. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-6/dl-bai-20', {
  objectives: [
    'Mô tả được các bộ phận của một dòng sông lớn; mối quan hệ giữa mùa lũ với nguồn cấp nước.',
    'Nêu được tầm quan trọng của việc sử dụng tổng hợp nước sông, hồ.',
    'Nêu được tầm quan trọng của nước ngầm và băng hà.',
    'Tính được lưu lượng, tổng lượng nước đơn giản.'
  ],
  intro: 'Sông Hồng mang nặng phù sa đỏ, mùa hạ nước lên cuồn cuộn, mùa đông lại hiền hoà. Vì sao dòng sông thay đổi theo mùa, và con người khai thác <b>sông, hồ, nước ngầm</b> như thế nào?',
  steps: [
    { title: 'Sông và hệ thống sông', html: `<ul><li><b>Sông</b>: dòng chảy thường xuyên, tương đối ổn định trên bề mặt lục địa.</li><li><b>Hệ thống sông</b>: sông chính + <b>phụ lưu</b> (đổ nước vào) + <b>chi lưu</b> (thoát nước ra).</li><li><b>Lưu vực</b>: vùng đất cung cấp nước cho sông. <b>Lưu lượng</b>: lượng nước chảy qua mặt cắt ngang trong 1 giây (m³/s).</li></ul>`,
      svg: S.sketchMap({ title: 'Hệ thống sông (sơ đồ minh hoạ)', sea: false, areas: [{ pts: [[480, 200], [600, 160], [600, 300], [460, 300]], fill: '#bae6fd', label: 'Biển', lx: 545, ly: 255 }], lines: [{ pts: [[40, 60], [160, 110], [300, 150], [420, 190], [490, 230]], label: 'Sông chính', w: 4, lp: [70, 62] }, { pts: [[120, 260], [220, 200], [300, 150]], label: 'Phụ lưu', w: 2.5, lp: [150, 245] }, { pts: [[200, 20], [250, 90], [300, 150]], label: 'Phụ lưu', w: 2.5, lp: [255, 50] }, { pts: [[420, 190], [450, 260], [480, 290]], label: 'Chi lưu', w: 2, lp: [380, 255] }], points: [{ x: 40, y: 60, label: 'Nguồn' }, { x: 490, y: 230, label: 'Cửa sông', left: true }], note: 'Sơ đồ minh hoạ, không theo tỉ lệ.' }), caption: 'Phụ lưu đổ vào, chi lưu thoát ra.' },
    { title: 'Chế độ nước và sử dụng', html: `<p>Mùa lũ trùng mùa mưa (nếu sông được cấp nước chủ yếu từ mưa) hoặc mùa băng tuyết tan. Sử dụng tổng hợp: thuỷ lợi, thuỷ điện, giao thông, du lịch, nuôi trồng thuỷ sản.</p>
      <p><b>Hồ</b>: vùng trũng chứa nước; hồ tự nhiên (hồ Ba Bể) và hồ nhân tạo (hồ Hoà Bình).</p>` },
    { title: 'Nước ngầm và băng hà', html: `<p>So sánh:</p>`,
      svg: S.table({ title: 'Nước ngầm và băng hà', head: ['Nước ngầm', 'Băng hà'], rows: [['Nằm trong các lớp đất đá', 'Ở vùng cực, núi cao'], ['Nguồn nước sinh hoạt, tưới tiêu', 'Kho nước ngọt lớn nhất'], ['Khai thác quá mức: sụt lún, nhiễm mặn', 'Tan nhanh do Trái Đất nóng lên']], colW: 250 }), caption: 'Cần khai thác nước ngầm hợp lí.' },
    { title: 'Ghi nhớ', html: `<div class="box key">Tổng lượng nước = lưu lượng (m³/s) × thời gian (giây).</div>` }
  ],
  summary: 'Sông là dòng chảy thường xuyên; hệ thống sông gồm sông chính, phụ lưu, chi lưu; lưu lượng là lượng nước qua mặt cắt trong 1 giây. Mùa lũ gắn với nguồn cấp nước (mưa, băng tan). Sông, hồ cần sử dụng tổng hợp (thuỷ lợi, thuỷ điện, giao thông, du lịch, thuỷ sản). Nước ngầm là nguồn nước ngọt quan trọng; băng hà là kho nước ngọt lớn nhất.',
  examples: [
    { title: 'Tổng lượng nước', problem: 'Lưu lượng 500 m³/s. Trong 1 phút chảy qua bao nhiêu m³?', solution: '500 × 60 = 30 000 m³.' },
    { title: 'Phân biệt', problem: 'Sông nhỏ đổ nước vào sông chính gọi là gì?', solution: 'Phụ lưu.' },
    { title: 'Mùa lũ', problem: 'Sông ở Việt Nam chủ yếu được cấp nước bằng gì? Mùa lũ vào mùa nào?', solution: 'Nước mưa; mùa lũ trùng mùa mưa.' }
  ],
  exercises: [
    { question: 'Lưu lượng 200 m³/s. Trong 1 giờ chảy qua bao nhiêu m³?', hints: ['1 giờ = 3 600 giây.', '200 × 3 600.'], solution: '720 000 m³.' },
    { question: 'Nêu ba lợi ích của hồ nhân tạo.', hints: ['Điện.', 'Tưới, du lịch.'], solution: 'Thuỷ điện, thuỷ lợi, du lịch, nuôi cá, điều tiết lũ.' },
    { question: 'Vì sao không nên khai thác nước ngầm quá mức?', hints: ['Mặt đất.', 'Nước biển.'], solution: 'Gây sụt lún đất, cạn kiệt, nhiễm mặn.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Chi lưu là sông làm nhiệm vụ thoát nước cho sông chính.', answer: true, explain: 'Đúng.' },
    { type: 'short', q: 'Lưu lượng 500 m³/s. Trong 1 phút có bao nhiêu m³?', answer: '30000', answerText: '30 000', unit: 'm³', calc: '500*60', explain: '30 000.' },
    { type: 'mcq', q: 'Hồ nhân tạo:', options: ['Hồ Hoà Bình', 'Hồ Ba Bể', 'Biển Hồ (Cam-pu-chia)', 'Hồ Bai-can'], answer: 0, explain: 'Hoà Bình.' },
    { type: 'short', q: 'Lưu lượng 200 m³/s. Trong 1 giờ bao nhiêu m³?', answer: '720000', answerText: '720 000', unit: 'm³', calc: '200*3600', explain: '720 000.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khai thác nước ngầm càng nhiều càng tốt.', answer: false, explain: 'Gây sụt lún, nhiễm mặn.' },
    { type: 'mcq', q: 'Lưu lượng nước sông đo bằng đơn vị:', options: ['m³/s', 'km/h', '°C', 'mm'], answer: 0, explain: 'm³/s.' },
    { type: 'mcq', q: 'Kho nước ngọt lớn nhất Trái Đất:', options: ['Băng hà', 'Sông', 'Hồ', 'Hơi nước'], answer: 0, explain: 'Băng hà.' },
    { type: 'short', q: 'Lưu lượng 150 m³/s. Trong 10 giây bao nhiêu m³?', answer: '1500', answerText: '1 500', unit: 'm³', calc: '150*10', explain: '1 500.' }
  ]
});
})();
