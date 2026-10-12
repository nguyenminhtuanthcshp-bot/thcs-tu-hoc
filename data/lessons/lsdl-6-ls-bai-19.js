/* LS&ĐL 6 – Lịch sử, Bài 19. Vương quốc Chăm-pa từ thế kỉ II đến thế kỉ X. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-6/ls-bai-19', {
  objectives: [
    'Mô tả được sự thành lập, quá trình phát triển và suy yếu của Vương quốc Chăm-pa.',
    'Trình bày được những nét chính về tổ chức xã hội và kinh tế của Chăm-pa.',
    'Nhận biết được một số thành tựu văn hoá của Chăm-pa.',
    'Trân trọng di sản văn hoá Chăm.'
  ],
  intro: 'Giữa thung lũng xanh ở Mỹ Sơn, những ngôi tháp gạch đỏ đã đứng hơn một nghìn năm. Đó là di sản của <b>Vương quốc Chăm-pa</b> – quốc gia cổ ở miền Trung Việt Nam.',
  steps: [
    { title: 'Thành lập và phát triển', html: `<p>Diễn biến chính:</p>`,
      svg: S.timeline({ title: 'Vương quốc Chăm-pa', items: [{ y: '192', s: 'Khu Liên lập Lâm Ấp' }, { y: 'TK IV', s: 'Kinh đô Sin-ha-pu-ra' }, { y: 'TK VI', s: 'Tên Chăm-pa' }, { y: 'TK IX', s: 'Đô In-đra-pu-ra' }], note: 'TK: thế kỉ. Niên đại xấp xỉ.' }), caption: 'Sin-ha-pu-ra ở Trà Kiệu, In-đra-pu-ra ở Đồng Dương (Quảng Nam cũ).' },
    { title: 'Tổ chức xã hội', html: `<ul><li>Đứng đầu là vua, có quyền lực tối cao, được thần thánh hoá.</li><li>Xã hội gồm: quý tộc, tăng lữ, dân tự do (nông dân, thợ thủ công), nô lệ.</li></ul>` },
    { title: 'Kinh tế', html: `<ul><li>Trồng lúa nước, làm ruộng bậc thang; có hệ thống thuỷ lợi.</li><li>Khai thác lâm sản (trầm hương, quế), đánh cá, buôn bán đường biển; nhiều cảng thị.</li></ul>` },
    { title: 'Văn hoá', html: `<p>Thành tựu:</p>`,
      svg: S.table({ title: 'Văn hoá Chăm-pa', head: ['Lĩnh vực', 'Thành tựu'], rows: [['Chữ viết', 'Chữ Chăm cổ (từ chữ Phạn)'], ['Tôn giáo', 'Hin-đu giáo, Phật giáo'], ['Kiến trúc', 'Tháp Mỹ Sơn, tháp Pô Na-gar'], ['Điêu khắc', 'Tượng thần, vũ nữ Áp-sa-ra']], colW: 250 }), caption: 'Khu đền tháp Mỹ Sơn là Di sản văn hoá thế giới (1999).' }
  ],
  summary: 'Năm 192, Khu Liên lập nước Lâm Ấp ở vùng Tượng Lâm, sau đổi tên Chăm-pa; kinh đô Sin-ha-pu-ra (Trà Kiệu), sau là In-đra-pu-ra (Đồng Dương). Vua có quyền tối cao; xã hội gồm quý tộc, tăng lữ, dân tự do, nô lệ. Kinh tế: lúa nước, lâm sản, đánh cá, buôn bán đường biển. Văn hoá: chữ Chăm cổ, Hin-đu giáo, tháp Mỹ Sơn, tháp Pô Na-gar, điêu khắc tinh xảo.',
  examples: [
    { title: 'Thời gian', problem: 'Lâm Ấp ra đời năm 192, thuộc thế kỉ nào?', solution: 'Thế kỉ II.' },
    { title: 'Kinh tế', problem: 'Vì sao Chăm-pa phát triển buôn bán đường biển?', solution: 'Có bờ biển dài, nhiều cảng tốt, nằm trên đường hàng hải.' },
    { title: 'Di sản', problem: 'Mỹ Sơn được công nhận Di sản thế giới năm 1999. Đến năm 2026 là bao nhiêu năm?', solution: '27 năm.' }
  ],
  exercises: [
    { question: 'Ai lập nước Lâm Ấp?', hints: ['Năm 192.', 'Khu …'], solution: 'Khu Liên.' },
    { question: 'Từ năm 192 đến năm 2026 là bao nhiêu năm?', hints: ['2026 − 192.', 'Hơn 1 800.'], solution: '1 834 năm.' },
    { question: 'Kể tên hai công trình kiến trúc Chăm.', hints: ['Quảng Nam.', 'Nha Trang.'], solution: 'Tháp Mỹ Sơn, tháp Pô Na-gar.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Năm 192, Khu Liên lập nước Lâm Ấp.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Chữ viết của người Chăm cổ dựa trên:', options: ['Chữ Phạn', 'Chữ Hán', 'Chữ Nôm', 'Chữ La-tinh'], answer: 0, explain: 'Chữ Phạn.' },
    { type: 'short', q: 'Năm 192 thuộc thế kỉ thứ mấy? (ghi số)', answer: '2', calc: 'Math.floor((192-1)/100)+1', explain: 'II.' },
    { type: 'mcq', q: 'Tôn giáo chủ yếu của Chăm-pa:', options: ['Hin-đu giáo', 'Hồi giáo', 'Nho giáo', 'Thiên Chúa giáo'], answer: 0, explain: 'Hin-đu.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Kinh tế Chăm-pa chỉ dựa vào chăn nuôi du mục.', answer: false, explain: 'Lúa nước, biển.' },
    { type: 'short', q: 'Từ năm 1999 đến năm 2026 là bao nhiêu năm?', answer: '27', unit: 'năm', calc: '2026-1999', explain: '27.' },
    { type: 'mcq', q: 'Tháp Pô Na-gar ở:', options: ['Nha Trang', 'Hà Nội', 'Huế', 'Cần Thơ'], answer: 0, explain: 'Nha Trang.' },
    { type: 'mcq', q: 'Kinh đô Sin-ha-pu-ra ở:', options: ['Trà Kiệu', 'Cổ Loa', 'Óc Eo', 'Hoa Lư'], answer: 0, explain: 'Trà Kiệu.' }
  ]
});
})();
