/* LS&ĐL 6 – Lịch sử, Bài 11. Các quốc gia sơ kì ở Đông Nam Á. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-6/ls-bai-11', {
  objectives: [
    'Trình bày được sơ lược về vị trí địa lí của vùng Đông Nam Á.',
    'Trình bày được quá trình xuất hiện và giao lưu thương mại của các quốc gia sơ kì ở Đông Nam Á từ đầu Công nguyên đến thế kỉ VII.',
    'Kể tên được một số quốc gia sơ kì tiêu biểu.',
    'Nêu được tác động của điều kiện tự nhiên đến đời sống cư dân Đông Nam Á.'
  ],
  intro: 'Đông Nam Á được ví như “ngã tư đường” của thế giới: tàu thuyền từ Ấn Độ, Trung Quốc, Tây Á thường ghé qua. Nhờ vị trí ấy, nơi đây sớm xuất hiện những <b>quốc gia sơ kì</b> giàu mạnh nhờ nông nghiệp lúa nước và buôn bán đường biển.',
  steps: [
    { title: 'Vị trí và tự nhiên', html: `<ul><li>Nằm giữa Trung Quốc và Ấn Độ, giữa Thái Bình Dương và Ấn Độ Dương.</li><li>Gồm hai bộ phận: <b>Đông Nam Á lục địa</b> và <b>Đông Nam Á hải đảo</b>.</li><li>Khí hậu nhiệt đới gió mùa, nhiều sông lớn (Mê Công, Hồng…) → thuận lợi trồng lúa nước.</li></ul>` },
    { title: 'Sự ra đời các quốc gia sơ kì', html: `<p>Từ những thế kỉ trước Công nguyên đến thế kỉ VII, nhiều quốc gia sơ kì xuất hiện:</p>`,
      svg: S.table({ title: 'Một số quốc gia sơ kì ở Đông Nam Á', head: ['Quốc gia', 'Khu vực ngày nay'], rows: [['Văn Lang – Âu Lạc', 'Bắc Bộ, Bắc Trung Bộ Việt Nam'], ['Lâm Ấp (Chăm-pa)', 'Trung Bộ Việt Nam'], ['Phù Nam', 'Nam Bộ VN, Cam-pu-chia'], ['Các tiểu quốc ở Gia-va, Xu-ma-tơ-ra', 'In-đô-nê-xi-a']], colW: 250 }), caption: 'Quốc gia sơ kì: nhà nước còn đơn giản, quy mô nhỏ.' },
    { title: 'Giao lưu thương mại', html: `<p>Nhiều thương cảng sầm uất ra đời, tiêu biểu là <b>Óc Eo</b> (An Giang) của Phù Nam: tìm thấy đồ trang sức, tiền đồng La Mã, gương đồng Trung Hoa… chứng tỏ buôn bán rộng khắp.</p>`,
      svg: S.flowchart({ title: 'Vì sao thương mại biển phát triển?', steps: [{ t: 'start', s: 'Vị trí cầu nối' }, { t: 'proc', s: 'Tàu buôn ghé qua' }, { t: 'proc', s: 'Thương cảng ra đời' }, { t: 'end', s: 'Quốc gia giàu mạnh' }] }), caption: 'Óc Eo là thương cảng tiêu biểu của Phù Nam.' },
    { title: 'Ý nghĩa', html: `<div class="box key">Nông nghiệp lúa nước và thương mại biển là hai nền tảng của các quốc gia sơ kì Đông Nam Á.</div>` }
  ],
  summary: 'Đông Nam Á nằm giữa Ấn Độ và Trung Quốc, gồm phần lục địa và hải đảo, khí hậu nhiệt đới gió mùa. Từ trước Công nguyên đến thế kỉ VII xuất hiện các quốc gia sơ kì như Văn Lang – Âu Lạc, Lâm Ấp (Chăm-pa), Phù Nam, các tiểu quốc ở In-đô-nê-xi-a. Thương mại biển phát triển, tiêu biểu là thương cảng Óc Eo.',
  examples: [
    { title: 'Vị trí', problem: 'Vì sao Đông Nam Á được ví là “ngã tư đường”?', solution: 'Nằm trên đường biển nối Ấn Độ Dương với Thái Bình Dương, giữa Ấn Độ và Trung Quốc.' },
    { title: 'Chứng cứ', problem: 'Hiện vật nào ở Óc Eo chứng tỏ buôn bán xa?', solution: 'Đồng tiền La Mã, gương đồng Trung Hoa.' },
    { title: 'Thời gian', problem: 'Từ thế kỉ I đến thế kỉ VII là bao nhiêu thế kỉ?', solution: '7 thế kỉ (I, II, …, VII).' }
  ],
  exercises: [
    { question: 'Kể tên ba quốc gia sơ kì trên lãnh thổ Việt Nam ngày nay.', hints: ['Miền Bắc.', 'Miền Trung và Nam.'], solution: 'Văn Lang – Âu Lạc, Lâm Ấp (Chăm-pa), Phù Nam.' },
    { question: 'Đông Nam Á gồm mấy bộ phận? Kể tên.', hints: ['Đất liền.', 'Đảo.'], solution: '2: lục địa và hải đảo.' },
    { question: 'Thương cảng Óc Eo thuộc tỉnh nào ngày nay?', hints: ['Nam Bộ.', 'Tỉnh giáp Cam-pu-chia.'], solution: 'An Giang.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Đông Nam Á nằm giữa Ấn Độ và Trung Quốc.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Thương cảng nổi tiếng của Phù Nam:', options: ['Óc Eo', 'Hội An', 'Phố Hiến', 'Vân Đồn'], answer: 0, explain: 'Óc Eo.' },
    { type: 'short', q: 'Từ thế kỉ I đến thế kỉ VII gồm bao nhiêu thế kỉ?', answer: '7', unit: 'thế kỉ', calc: '7-1+1', explain: '7.' },
    { type: 'mcq', q: 'Quốc gia sơ kì ở Trung Bộ Việt Nam:', options: ['Lâm Ấp', 'Phù Nam', 'Văn Lang', 'Sri Vi-giay-a'], answer: 0, explain: 'Lâm Ấp.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khí hậu Đông Nam Á chủ yếu là ôn đới lục địa.', answer: false, explain: 'Nhiệt đới gió mùa.' },
    { type: 'short', q: 'Đông Nam Á gồm mấy bộ phận?', answer: '2', unit: 'bộ phận', calc: '2', explain: 'Lục địa, hải đảo.' },
    { type: 'mcq', q: 'Ngành kinh tế chủ yếu của cư dân Đông Nam Á cổ:', options: ['Nông nghiệp lúa nước', 'Chăn nuôi du mục', 'Khai thác dầu', 'Công nghiệp'], answer: 0, explain: 'Lúa nước.' },
    { type: 'mcq', q: 'Hiện vật ở Óc Eo chứng tỏ buôn bán với phương Tây:', options: ['Tiền đồng La Mã', 'Trống đồng', 'Rìu đá', 'Bia đá'], answer: 0, explain: 'Tiền La Mã.' }
  ]
});
})();
