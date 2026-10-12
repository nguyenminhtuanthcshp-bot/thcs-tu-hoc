/* LS&ĐL 6 – Địa lí, Bài 13. Các dạng địa hình chính trên Trái Đất. Khoáng sản. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-6/dl-bai-13', {
  objectives: [
    'Phân biệt được độ cao tuyệt đối và độ cao tương đối.',
    'Phân biệt được các dạng địa hình chính: núi, đồi, cao nguyên, đồng bằng.',
    'Kể được tên một số loại khoáng sản.',
    'Có ý thức sử dụng tiết kiệm khoáng sản.'
  ],
  intro: 'Đỉnh Phan-xi-păng cao hơn 3 100 m so với mực nước biển, nhưng nếu đứng ở Sa Pa (khoảng 1 600 m) nhìn lên thì chỉ cao hơn khoảng 1 550 m. Cùng một ngọn núi, hai con số khác nhau: đó là <b>độ cao tuyệt đối</b> và <b>độ cao tương đối</b>.',
  steps: [
    { title: 'Độ cao tuyệt đối và tương đối', html: `<ul><li><b>Độ cao tuyệt đối</b>: tính từ mực nước biển trung bình đến đỉnh.</li><li><b>Độ cao tương đối</b>: tính từ chân đến đỉnh.</li></ul>
      <p>Đỉnh Ê-vơ-rét cao 8 848,86 m (số đo công bố năm 2020) – cao nhất thế giới. Phan-xi-păng khoảng 3 147 m – cao nhất Việt Nam.</p>` },
    { title: 'Các dạng địa hình chính', html: `<p>Bảng phân biệt:</p>`,
      svg: S.table({ title: 'Các dạng địa hình chính', head: ['Dạng', 'Đặc điểm'], rows: [['Núi', 'Trên 500 m, đỉnh nhọn, sườn dốc'], ['Đồi', 'Cao tương đối < 200 m, sườn thoải'], ['Cao nguyên', 'Trên 500 m, mặt bằng, sườn dốc'], ['Đồng bằng', 'Thấp (thường < 200 m), bằng phẳng']], colW: 250 }), caption: 'Ví dụ: cao nguyên Mộc Châu, đồng bằng sông Cửu Long.' },
    { title: 'Khoáng sản', html: `<p>Khoáng sản là những khoáng vật và đá có ích được con người khai thác. Phân loại:</p>`,
      svg: S.table({ title: 'Phân loại khoáng sản', head: ['Nhóm', 'Ví dụ'], rows: [['Năng lượng (nhiên liệu)', 'Than, dầu mỏ, khí đốt'], ['Kim loại', 'Sắt, đồng, chì, bô-xit (nhôm)'], ['Phi kim loại', 'Đá vôi, cát, a-pa-tít']], colW: 250 }), caption: 'Khoáng sản hình thành rất lâu, phần lớn không tái tạo.' },
    { title: 'Ghi nhớ', html: `<div class="box key">Độ cao tương đối = độ cao đỉnh − độ cao chân (cùng tính từ mực nước biển).</div>` }
  ],
  summary: 'Độ cao tuyệt đối tính từ mực nước biển; độ cao tương đối tính từ chân lên đỉnh. Các dạng địa hình chính: núi (trên 500 m, sườn dốc), đồi (cao tương đối dưới 200 m), cao nguyên (trên 500 m, mặt bằng, sườn dốc), đồng bằng (thấp, bằng phẳng). Khoáng sản gồm nhóm năng lượng, kim loại, phi kim loại; phần lớn không tái tạo nên cần khai thác tiết kiệm.',
  examples: [
    { title: 'Độ cao tương đối', problem: 'Đỉnh núi cao 3 147 m, chân núi ở độ cao 1 500 m. Độ cao tương đối?', solution: '3 147 − 1 500 = 1 647 m.' },
    { title: 'So sánh', problem: 'Ê-vơ-rét cao hơn Phan-xi-păng khoảng bao nhiêu mét (lấy 8 849 và 3 147)?', solution: '8 849 − 3 147 = 5 702 m.' },
    { title: 'Phân loại', problem: 'Than đá thuộc nhóm khoáng sản nào?', solution: 'Năng lượng (nhiên liệu).' }
  ],
  exercises: [
    { question: 'Một ngọn đồi đỉnh cao 350 m, chân ở 200 m. Độ cao tương đối? Có đúng là đồi không?', hints: ['350 − 200.', 'Đồi: dưới 200 m tương đối.'], solution: '150 m – đúng là đồi.' },
    { question: 'Đỉnh cao 2 000 m, độ cao tương đối 1 200 m. Chân núi ở độ cao bao nhiêu?', hints: ['Chân = đỉnh − tương đối.', '2 000 − 1 200.'], solution: '800 m.' },
    { question: 'Xếp vào nhóm: sắt, đá vôi, dầu mỏ.', hints: ['Kim loại?', 'Nhiên liệu?'], solution: 'Sắt – kim loại; đá vôi – phi kim loại; dầu mỏ – năng lượng.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Độ cao tuyệt đối được tính từ mực nước biển trung bình.', answer: true, explain: 'Đúng.' },
    { type: 'short', q: 'Đỉnh 3 147 m, chân 1 500 m. Độ cao tương đối (m)?', answer: '1647', answerText: '1 647', unit: 'm', calc: '3147-1500', explain: '1 647.' },
    { type: 'mcq', q: 'Dạng địa hình có bề mặt bằng phẳng nhưng sườn dốc, cao trên 500 m:', options: ['Cao nguyên', 'Đồng bằng', 'Đồi', 'Thung lũng'], answer: 0, explain: 'Cao nguyên.' },
    { type: 'short', q: 'Đỉnh 2 000 m, độ cao tương đối 1 200 m. Chân núi ở độ cao bao nhiêu m?', answer: '800', unit: 'm', calc: '2000-1200', explain: '800.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Dầu mỏ thuộc nhóm khoáng sản kim loại.', answer: false, explain: 'Năng lượng.' },
    { type: 'mcq', q: 'Đỉnh núi cao nhất thế giới:', options: ['Ê-vơ-rét', 'Phan-xi-păng', 'Ki-li-man-gia-rô', 'Phú Sĩ'], answer: 0, explain: 'Ê-vơ-rét.' },
    { type: 'short', q: 'Ê-vơ-rét 8 849 m, Phan-xi-păng 3 147 m. Chênh lệch (m)?', answer: '5702', answerText: '5 702', unit: 'm', calc: '8849-3147', explain: '5 702.' },
    { type: 'mcq', q: 'Bô-xit dùng để sản xuất:', options: ['Nhôm', 'Xăng', 'Xi măng', 'Phân lân'], answer: 0, explain: 'Nhôm.' }
  ]
});
})();
