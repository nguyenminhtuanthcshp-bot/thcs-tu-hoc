/* LS&ĐL 7 – Lịch sử, Bài 2. Các cuộc phát kiến địa lí và sự hình thành quan hệ sản xuất tư bản chủ nghĩa ở Tây Âu. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-7/ls-bai-2', {
  objectives: [
    'Mô tả được sơ lược các cuộc phát kiến địa lí lớn.',
    'Nêu được hệ quả của các cuộc phát kiến địa lí.',
    'Trình bày được sự nảy sinh phương thức sản xuất tư bản chủ nghĩa ở Tây Âu.',
    'Xác định được trên lược đồ hành trình của một số nhà hàng hải.'
  ],
  intro: 'Thế kỉ XV, các thương nhân châu Âu khao khát hương liệu, vàng bạc phương Đông, nhưng đường bộ bị chặn. Những con tàu nhỏ đã dũng cảm ra khơi vào đại dương chưa biết – mở đầu thời đại <b>phát kiến địa lí</b>.',
  steps: [
    { title: 'Nguyên nhân và điều kiện', html: `<ul><li>Nhu cầu vàng bạc, hương liệu; con đường buôn bán qua Tây Á bị người Thổ Nhĩ Kỳ kiểm soát.</li><li>Kĩ thuật: la bàn, tàu Ca-ra-ven, hiểu biết Trái Đất hình cầu.</li></ul>` },
    { title: 'Các cuộc phát kiến lớn', html: `<p>Trục thời gian:</p>`,
      svg: S.timeline({ title: 'Các cuộc phát kiến địa lí lớn', items: [{ y: '1487', s: 'Đi-a-xơ', sub: 'mũi Hảo Vọng' }, { y: '1492', s: 'Cô-lôm-bô', sub: 'đến châu Mỹ' }, { y: '1498', s: 'Va-xcô đơ Ga-ma', sub: 'đến Ấn Độ' }, { y: '1519 – 1522', s: 'Ma-gien-lan', sub: 'vòng quanh thế giới' }] }), caption: 'Đoàn Ma-gien-lan chứng minh Trái Đất hình cầu.' },
    { title: 'Hệ quả', html: `<p>Tích cực: mở ra con đường mới, đem lại hiểu biết mới, thúc đẩy thương nghiệp. Tiêu cực: nạn buôn bán nô lệ, cướp bóc thuộc địa.</p>` },
    { title: 'Quan hệ sản xuất tư bản', html: `<p>Quá trình:</p>`,
      svg: S.flowchart({ title: 'Hình thành quan hệ tư bản', steps: [{ t: 'start', s: 'Tích luỹ vốn, của cải' }, { t: 'proc', s: 'Lập công trường thủ công' }, { t: 'proc', s: 'Thuê nhân công' }, { t: 'end', s: 'Tư sản – vô sản' }] }), caption: 'Hai giai cấp mới: tư sản và vô sản.' }
  ],
  summary: 'Do nhu cầu hương liệu, vàng bạc và nhờ tiến bộ kĩ thuật, thế kỉ XV – XVI diễn ra các phát kiến địa lí: Đi-a-xơ (1487) đến mũi Hảo Vọng, Cô-lôm-bô (1492) đến châu Mỹ, Va-xcô đơ Ga-ma (1498) đến Ấn Độ, Ma-gien-lan (1519 – 1522) đi vòng quanh thế giới. Hệ quả: mở rộng thị trường, thúc đẩy thương nghiệp nhưng cũng dẫn tới buôn bán nô lệ, xâm chiếm thuộc địa. Quan hệ sản xuất tư bản chủ nghĩa hình thành với hai giai cấp tư sản và vô sản.',
  examples: [
    { title: 'Ý nghĩa', problem: 'Chuyến đi của Ma-gien-lan chứng minh điều gì?', solution: 'Trái Đất hình cầu; có thể đi vòng quanh thế giới bằng đường biển.' },
    { title: 'Tính thời gian', problem: 'Chuyến đi của Ma-gien-lan kéo dài từ 1519 đến 1522, bao nhiêu năm?', solution: '3 năm.' },
    { title: 'So sánh', problem: 'Cô-lôm-bô đến châu Mỹ trước Va-xcô đơ Ga-ma đến Ấn Độ bao nhiêu năm?', solution: '1498 − 1492 = 6 năm.' }
  ],
  exercises: [
    { question: 'Sắp xếp: Ma-gien-lan, Đi-a-xơ, Cô-lôm-bô, Va-xcô đơ Ga-ma.', hints: ['1487 sớm nhất.', '1519 muộn nhất.'], solution: 'Đi-a-xơ → Cô-lôm-bô → Va-xcô đơ Ga-ma → Ma-gien-lan.' },
    { question: 'Từ 1487 đến 1522 là bao nhiêu năm?', hints: ['1522 − 1487.', 'Hơn 30.'], solution: '35 năm.' },
    { question: 'Nêu một hệ quả tiêu cực của phát kiến địa lí.', hints: ['Con người bị mua bán.', 'Thuộc địa.'], solution: 'Buôn bán nô lệ da đen; cướp bóc, xâm chiếm thuộc địa.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Năm 1492, Cô-lôm-bô đến châu Mỹ.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Người đầu tiên chỉ huy đoàn thám hiểm đi vòng quanh thế giới:', options: ['Ma-gien-lan', 'Cô-lôm-bô', 'Đi-a-xơ', 'Va-xcô đơ Ga-ma'], answer: 0, explain: 'Ma-gien-lan.' },
    { type: 'short', q: 'Từ 1492 đến 1498 là bao nhiêu năm?', answer: '6', unit: 'năm', calc: '1498-1492', explain: '6.' },
    { type: 'mcq', q: 'Năm 1498, Va-xcô đơ Ga-ma đến:', options: ['Ấn Độ', 'châu Mỹ', 'Trung Quốc', 'Nhật Bản'], answer: 0, explain: 'Ấn Độ.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Phát kiến địa lí không gây ra hệ quả tiêu cực nào.', answer: false, explain: 'Có buôn bán nô lệ, thuộc địa.' },
    { type: 'short', q: 'Từ 1487 đến 1522 là bao nhiêu năm?', answer: '35', unit: 'năm', calc: '1522-1487', explain: '35.' },
    { type: 'mcq', q: 'Hai giai cấp mới trong quan hệ sản xuất tư bản:', options: ['Tư sản và vô sản', 'Lãnh chúa và nông nô', 'Quý tộc và nô lệ', 'Địa chủ và nông dân'], answer: 0, explain: 'Đúng.' },
    { type: 'mcq', q: 'Loại tàu giúp các cuộc thám hiểm thực hiện được:', options: ['Ca-ra-ven', 'Tàu hơi nước', 'Tàu ngầm', 'Bè tre'], answer: 0, explain: 'Ca-ra-ven.' }
  ]
});
})();
