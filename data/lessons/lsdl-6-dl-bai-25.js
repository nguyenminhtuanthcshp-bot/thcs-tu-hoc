/* LS&ĐL 6 – Địa lí, Bài 25. Sự phân bố các đới thiên nhiên trên Trái Đất. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-6/dl-bai-25', {
  objectives: [
    'Xác định được trên bản đồ sự phân bố các đới thiên nhiên trên thế giới.',
    'Trình bày được đặc điểm khí hậu, sinh vật của từng đới.',
    'Giải thích vì sao thiên nhiên thay đổi theo vĩ độ.',
    'Liên hệ đới thiên nhiên của Việt Nam.'
  ],
  intro: 'Đi từ Xích đạo về phía cực, em sẽ lần lượt gặp rừng rậm, xa-van, rừng lá rộng, rừng lá kim rồi đài nguyên băng giá. Thiên nhiên thay đổi theo vĩ độ, tạo nên các <b>đới thiên nhiên</b>.',
  steps: [
    { title: 'Ba đới thiên nhiên chính', html: `<p>Phân bố theo vĩ độ (mỗi nửa cầu):</p>`,
      svg: S.table({ title: 'Các đới thiên nhiên', head: ['Đới', 'Phạm vi – đặc điểm'], rows: [['Đới nóng', 'Giữa hai chí tuyến; nóng, nhiều loài'], ['Đới ôn hoà (ôn đới)', 'Chí tuyến – vòng cực; bốn mùa rõ'], ['Đới lạnh', 'Vòng cực – cực; lạnh, ít sinh vật']], colW: 250 }), caption: 'Ranh giới gần đúng: chí tuyến 23°27′, vòng cực 66°33′.' },
    { title: 'Vì sao khác nhau?', html: `<p>Càng xa Xích đạo, góc chiếu của tia sáng Mặt Trời càng nhỏ → nhận ít nhiệt → khí hậu lạnh dần → sinh vật thay đổi.</p>`,
      svg: S.latLonGrid({ title: 'Vị trí các đới (minh hoạ trên lưới)', step: 30, points: [{ lon: 0, lat: 0, label: 'Đới nóng' }, { lon: 60, lat: 45, label: 'Đới ôn hoà' }, { lon: 120, lat: 75, label: 'Đới lạnh' }, { lon: 106, lat: 16, label: 'Việt Nam' }], note: 'Chỉ minh hoạ vị trí tương đối theo vĩ độ ở nửa cầu Bắc.' }), caption: 'Nửa cầu Nam có các đới đối xứng.' },
    { title: 'Việt Nam', html: `<p>Việt Nam nằm trong <b>đới nóng</b>, chịu ảnh hưởng gió mùa → thiên nhiên nhiệt đới ẩm gió mùa, rừng xanh tốt.</p>` },
    { title: 'Ghi nhớ', html: `<div class="box key">Nóng – ôn hoà – lạnh: thay đổi theo vĩ độ do lượng nhiệt Mặt Trời.</div>` }
  ],
  summary: 'Trên Trái Đất có ba đới thiên nhiên chính ở mỗi nửa cầu: đới nóng (giữa hai chí tuyến, nóng quanh năm, sinh vật phong phú), đới ôn hoà (từ chí tuyến đến vòng cực, bốn mùa rõ), đới lạnh (từ vòng cực đến cực, lạnh giá). Nguyên nhân: lượng nhiệt Mặt Trời giảm dần từ Xích đạo về cực. Việt Nam thuộc đới nóng.',
  examples: [
    { title: 'Xác định đới', problem: 'Một nơi ở vĩ độ 50°B thuộc đới nào?', solution: 'Đới ôn hoà (giữa 23°27′ và 66°33′).' },
    { title: 'Tính', problem: 'Đới nóng trải từ 23°27′N đến 23°27′B rộng bao nhiêu độ vĩ?', solution: '46°54′.' },
    { title: 'Sinh vật', problem: 'Rừng lá kim tiêu biểu cho đới nào?', solution: 'Đới ôn hoà (phần lạnh, gần vòng cực).' }
  ],
  exercises: [
    { question: 'Vĩ độ 75°N thuộc đới nào?', hints: ['So với 66°33′.', 'Lớn hơn vòng cực.'], solution: 'Đới lạnh (nửa cầu Nam).' },
    { question: 'Đới nóng rộng 46°54′. Đổi ra phút góc.', hints: ['46 × 60 + 54.', 'Kết quả hơn 2 800.'], solution: '2 814′.' },
    { question: 'Vì sao đới lạnh ít sinh vật?', hints: ['Nhiệt độ.', 'Băng tuyết.'], solution: 'Nhiệt độ rất thấp, băng tuyết bao phủ lâu, thực vật khó phát triển.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Đới nóng nằm giữa hai chí tuyến.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Vĩ độ 50°B thuộc:', options: ['Đới ôn hoà', 'Đới nóng', 'Đới lạnh', 'Xích đạo'], answer: 0, explain: 'Ôn hoà.' },
    { type: 'short', q: '46°54′ bằng bao nhiêu phút góc?', answer: '2814', answerText: '2 814', unit: '′', calc: '46*60+54', explain: '2 814.' },
    { type: 'mcq', q: 'Việt Nam thuộc đới:', options: ['Nóng', 'Ôn hoà', 'Lạnh', 'Cận cực'], answer: 0, explain: 'Nóng.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Đới lạnh có sinh vật phong phú nhất.', answer: false, explain: 'Đới nóng.' },
    { type: 'short', q: 'Mỗi nửa cầu có 3 đới. Cả Trái Đất có bao nhiêu khu vực đới (đới nóng tính 1)?', answer: '5', calc: '1+2+2', explain: '5.' },
    { type: 'mcq', q: 'Nguyên nhân thiên nhiên thay đổi theo vĩ độ:', options: ['Lượng nhiệt Mặt Trời khác nhau', 'Dân số', 'Màu đất', 'Thuỷ triều'], answer: 0, explain: 'Đúng.' },
    { type: 'mcq', q: 'Ranh giới đới ôn hoà và đới lạnh:', options: ['Vòng cực', 'Chí tuyến', 'Xích đạo', 'Kinh tuyến 180°'], answer: 0, explain: 'Vòng cực.' }
  ]
});
})();
