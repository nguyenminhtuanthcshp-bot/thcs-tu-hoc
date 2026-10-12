/* LS&ĐL 6 – Địa lí, Bài 8. Chuyển động của Trái Đất quanh Mặt Trời và hệ quả. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-6/dl-bai-8', {
  objectives: [
    'Mô tả được chuyển động của Trái Đất quanh Mặt Trời.',
    'Trình bày được hiện tượng các mùa trên Trái Đất.',
    'Mô tả được hiện tượng ngày đêm dài ngắn theo mùa.',
    'Xác định các ngày đặc biệt trong năm.'
  ],
  intro: 'Vì sao tháng 6 ở Việt Nam là mùa hè nóng bức, còn ở Ô-xtrây-li-a lại là mùa đông? Câu trả lời nằm ở chuyển động <b>quanh Mặt Trời</b> của Trái Đất với trục nghiêng không đổi.',
  steps: [
    { title: 'Đặc điểm chuyển động', html: `<ul><li>Trái Đất chuyển động quanh Mặt Trời theo quỹ đạo hình elip gần tròn, hướng <b>từ Tây sang Đông</b>.</li><li>Một vòng hết <b>365 ngày 6 giờ</b> (một năm).</li><li>Trục nghiêng và <b>không đổi hướng</b> trong khi chuyển động.</li></ul>`,
      svg: S.orbit({ title: 'Trái Đất trên quỹ đạo quanh Mặt Trời', pos: [{ label: '22/12', sub: 'Đông chí' }, { label: '21/3', sub: 'Xuân phân' }, { label: '22/6', sub: 'Hạ chí' }, { label: '23/9', sub: 'Thu phân' }] }), caption: 'Hình giản lược. Ngày 22/6 nửa cầu Bắc ngả về phía Mặt Trời; các ngày có thể lệch 1 ngày tuỳ năm.' },
    { title: 'Các mùa', html: `<p>Do trục nghiêng không đổi, hai nửa cầu lần lượt ngả về phía Mặt Trời → góc chiếu sáng và lượng nhiệt khác nhau → các mùa. Mùa ở hai nửa cầu <b>trái ngược nhau</b>.</p>`,
      svg: S.table({ title: 'Mùa ở hai nửa cầu', head: ['Thời gian', 'Bắc / Nam bán cầu'], rows: [['21/3 – 22/6', 'Xuân / Thu'], ['22/6 – 23/9', 'Hạ / Đông'], ['23/9 – 22/12', 'Thu / Xuân'], ['22/12 – 21/3', 'Đông / Hạ']], colW: 250 }), caption: 'Theo cách tính dương lịch ở nửa cầu Bắc.' },
    { title: 'Ngày đêm dài ngắn theo mùa', html: `<ul><li>Mùa hè: ngày dài hơn đêm; mùa đông: ngày ngắn hơn đêm.</li><li>Ngày 21/3 và 23/9: mọi nơi có ngày dài bằng đêm.</li><li>Từ vòng cực đến cực có ngày (hoặc đêm) dài 24 giờ; ở cực có 6 tháng ngày, 6 tháng đêm.</li><li>Ở Xích đạo quanh năm ngày dài bằng đêm.</li></ul>` },
    { title: 'Ghi nhớ', html: `<div class="box key">365 ngày 6 giờ – trục nghiêng không đổi → các mùa, ngày đêm dài ngắn khác nhau.</div>` }
  ],
  summary: 'Trái Đất chuyển động quanh Mặt Trời theo quỹ đạo elip gần tròn, từ Tây sang Đông, một vòng 365 ngày 6 giờ, trục nghiêng không đổi. Hệ quả: các mùa (trái ngược ở hai nửa cầu) và ngày đêm dài ngắn theo mùa, theo vĩ độ. Ngày 21/3, 23/9 ngày dài bằng đêm khắp nơi; 22/6, 22/12 là hạ chí, đông chí ở nửa cầu Bắc.',
  examples: [
    { title: 'Năm nhuận', problem: 'Vì sao cứ 4 năm có một năm nhuận 366 ngày?', solution: 'Mỗi năm dư 6 giờ; 4 × 6 = 24 giờ = 1 ngày.' },
    { title: 'Mùa trái ngược', problem: 'Tháng 7 ở Ô-xtrây-li-a là mùa gì?', solution: 'Mùa đông (nửa cầu Nam).' },
    { title: 'Tính giờ', problem: 'Một năm có bao nhiêu giờ (365 ngày 6 giờ)?', solution: '365 × 24 + 6 = 8 766 giờ.' }
  ],
  exercises: [
    { question: 'Ngày nào trong năm mọi nơi có ngày dài bằng đêm?', hints: ['Xuân phân.', 'Thu phân.'], solution: '21/3 và 23/9.' },
    { question: 'Sau 8 năm, số giờ dư tích luỹ là bao nhiêu? Bằng mấy ngày?', hints: ['8 × 6 giờ.', 'Chia 24.'], solution: '48 giờ = 2 ngày.' },
    { question: 'Ở cực Bắc có bao nhiêu tháng ngày liên tục?', hints: ['Nửa năm.', '12 : 2.'], solution: 'Khoảng 6 tháng.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Trục Trái Đất giữ nguyên độ nghiêng và hướng khi chuyển động quanh Mặt Trời.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Thời gian Trái Đất quay một vòng quanh Mặt Trời:', options: ['365 ngày 6 giờ', '24 giờ', '30 ngày', '12 giờ'], answer: 0, explain: '365 ngày 6 giờ.' },
    { type: 'short', q: '4 năm dư bao nhiêu giờ (mỗi năm dư 6 giờ)?', answer: '24', unit: 'giờ', calc: '4*6', explain: '24 = 1 ngày.' },
    { type: 'mcq', q: 'Ngày hạ chí ở nửa cầu Bắc:', options: ['22/6', '22/12', '21/3', '23/9'], answer: 0, explain: '22/6.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khi nửa cầu Bắc là mùa hạ thì nửa cầu Nam cũng là mùa hạ.', answer: false, explain: 'Trái ngược.' },
    { type: 'short', q: 'Một năm (365 ngày 6 giờ) có bao nhiêu giờ?', answer: '8766', answerText: '8 766', unit: 'giờ', calc: '365*24+6', explain: '8 766.' },
    { type: 'mcq', q: 'Nơi quanh năm ngày dài bằng đêm:', options: ['Xích đạo', 'Cực Bắc', 'Vòng cực', 'Chí tuyến'], answer: 0, explain: 'Xích đạo.' },
    { type: 'short', q: 'Sau 8 năm, số giờ dư bằng mấy ngày?', answer: '2', unit: 'ngày', calc: '8*6/24', explain: '2.' }
  ]
});
})();
