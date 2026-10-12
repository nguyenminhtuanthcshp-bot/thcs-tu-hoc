/* LS&ĐL 6 – Địa lí, Bài 24. Rừng nhiệt đới. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-6/dl-bai-24', {
  objectives: [
    'Trình bày được đặc điểm của rừng nhiệt đới.',
    'Phân biệt rừng mưa nhiệt đới và rừng nhiệt đới gió mùa.',
    'Nêu được tầm quan trọng của việc bảo vệ rừng nhiệt đới.',
    'Đề xuất được biện pháp bảo vệ rừng.'
  ],
  intro: 'Rừng A-ma-dôn ở Nam Mỹ – khu rừng nhiệt đới lớn nhất thế giới – được ví như “lá phổi xanh” của hành tinh. Thế nhưng mỗi năm, những diện tích rừng nhiệt đới rộng lớn vẫn bị mất đi. Vì sao phải bảo vệ <b>rừng nhiệt đới</b>?',
  steps: [
    { title: 'Phân bố và đặc điểm chung', html: `<ul><li>Phân bố chủ yếu ở vùng nội chí tuyến (giữa hai chí tuyến).</li><li>Nhiệt độ cao quanh năm (trung bình trên 21 °C), lượng mưa lớn (thường trên 1 700 mm/năm).</li><li>Rừng có nhiều tầng, nhiều loài cây, động vật phong phú.</li></ul>` },
    { title: 'Hai kiểu rừng', html: `<p>So sánh:</p>`,
      svg: S.table({ title: 'Rừng mưa nhiệt đới và rừng nhiệt đới gió mùa', head: ['Rừng mưa nhiệt đới', 'Rừng nhiệt đới gió mùa'], rows: [['Mưa nhiều quanh năm', 'Có mùa mưa và mùa khô'], ['Xanh quanh năm, nhiều tầng', 'Một số cây rụng lá mùa khô'], ['Ví dụ: A-ma-dôn, Công-gô', 'Ví dụ: Đông Nam Á, Ấn Độ']], colW: 250 }), caption: 'Việt Nam chủ yếu có rừng nhiệt đới gió mùa.' },
    { title: 'Vai trò và bảo vệ', html: `<p>Rừng nhiệt đới:</p>`,
      svg: S.mindmap({ center: 'Rừng nhiệt đới', branches: [{ title: 'Môi trường', items: ['Điều hoà khí hậu', 'Hấp thụ CO₂'] }, { title: 'Đa dạng sinh học', items: ['Nơi sống nhiều loài', 'Nguồn gen quý'] }, { title: 'Con người', items: ['Gỗ, thuốc, thực phẩm', 'Du lịch sinh thái'] }, { title: 'Bảo vệ', items: ['Trồng rừng', 'Chống cháy, chặt phá'] }], w: 640, size: 13 }), caption: 'Mất rừng gây xói mòn, lũ quét, mất loài.' },
    { title: 'Ghi nhớ', html: `<div class="box key">Nhiều tầng – nhiều loài – nóng ẩm; cần bảo vệ “lá phổi xanh”.</div>` }
  ],
  summary: 'Rừng nhiệt đới phân bố chủ yếu giữa hai chí tuyến, nóng ẩm quanh năm, nhiều tầng, nhiều loài. Có hai kiểu chính: rừng mưa nhiệt đới (mưa quanh năm, xanh quanh năm, như A-ma-dôn) và rừng nhiệt đới gió mùa (có mùa khô, một số cây rụng lá, như ở Việt Nam). Rừng điều hoà khí hậu, giữ đa dạng sinh học; cần trồng rừng, chống chặt phá và cháy rừng.',
  examples: [
    { title: 'Phân biệt', problem: 'Rừng có cây rụng lá vào mùa khô là kiểu rừng nào?', solution: 'Rừng nhiệt đới gió mùa.' },
    { title: 'Tính diện tích', problem: 'Một khu rừng 5 000 ha, mỗi năm mất 2%. Một năm mất bao nhiêu ha?', solution: '5 000 × 2% = 100 ha.' },
    { title: 'Hậu quả', problem: 'Nêu hai hậu quả của phá rừng.', solution: 'Xói mòn đất, lũ quét; mất nơi sống của động vật.' }
  ],
  exercises: [
    { question: 'Rừng nhiệt đới lớn nhất thế giới ở đâu?', hints: ['Nam Mỹ.', 'Con sông lớn.'], solution: 'Rừng A-ma-dôn (Nam Mỹ).' },
    { question: 'Trồng mới 250 ha mỗi năm. Sau 4 năm trồng được bao nhiêu ha?', hints: ['250 × 4.', 'Kết quả nghìn.'], solution: '1 000 ha.' },
    { question: 'Nêu ba việc học sinh làm để bảo vệ rừng.', hints: ['Giấy.', 'Lửa, tuyên truyền.'], solution: 'Tiết kiệm giấy, không đốt lửa trong rừng, trồng cây, tuyên truyền.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Rừng nhiệt đới có cấu trúc nhiều tầng.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Rừng nhiệt đới lớn nhất thế giới:', options: ['A-ma-dôn', 'Cúc Phương', 'Rừng Tai-ga', 'Rừng Đen'], answer: 0, explain: 'A-ma-dôn.' },
    { type: 'short', q: 'Rừng 5 000 ha, mất 2%/năm. Một năm mất bao nhiêu ha?', answer: '100', unit: 'ha', calc: '5000*2/100', explain: '100.' },
    { type: 'mcq', q: 'Kiểu rừng chủ yếu ở Việt Nam:', options: ['Rừng nhiệt đới gió mùa', 'Rừng lá kim', 'Rừng ôn đới lá rộng', 'Rừng mưa xích đạo'], answer: 0, explain: 'Gió mùa.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Rừng mưa nhiệt đới có một mùa khô kéo dài.', answer: false, explain: 'Mưa quanh năm.' },
    { type: 'short', q: 'Trồng 250 ha/năm. Sau 4 năm bao nhiêu ha?', answer: '1000', answerText: '1 000', unit: 'ha', calc: '250*4', explain: '1 000.' },
    { type: 'mcq', q: 'Rừng nhiệt đới phân bố chủ yếu:', options: ['Giữa hai chí tuyến', 'Vùng cực', 'Ôn đới', 'Hoang mạc'], answer: 0, explain: 'Nội chí tuyến.' },
    { type: 'mcq', q: 'Hậu quả của phá rừng:', options: ['Xói mòn, lũ quét', 'Khí hậu mát hơn', 'Thêm loài mới', 'Đất màu mỡ hơn'], answer: 0, explain: 'Đúng.' }
  ]
});
})();
