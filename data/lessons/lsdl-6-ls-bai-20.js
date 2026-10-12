/* LS&ĐL 6 – Lịch sử, Bài 20. Vương quốc cổ Phù Nam. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-6/ls-bai-20', {
  objectives: [
    'Mô tả được sự thành lập, quá trình phát triển và suy vong của Vương quốc Phù Nam.',
    'Trình bày được những nét chính về tổ chức xã hội và kinh tế của Phù Nam.',
    'Nhận biết được một số thành tựu văn hoá của Phù Nam.',
    'Hiểu vai trò của văn hoá Óc Eo.'
  ],
  intro: 'Năm 1944, nhà khảo cổ người Pháp L. Ma-lơ-rê khai quật ở Óc Eo (An Giang) và tìm thấy nhiều đồ trang sức vàng, đồng tiền La Mã. Đó là dấu tích của <b>Vương quốc Phù Nam</b> – một quốc gia buôn bán sầm uất.',
  steps: [
    { title: 'Thành lập và phát triển', html: `<p>Diễn biến:</p>`,
      svg: S.timeline({ title: 'Vương quốc Phù Nam', items: [{ y: 'TK I', s: 'Hình thành' }, { y: 'TK III – V', s: 'Phát triển thịnh đạt' }, { y: 'Cuối TK VI', s: 'Suy yếu' }, { y: 'TK VII', s: 'Chân Lạp thôn tính' }], note: 'TK: thế kỉ. Niên đại xấp xỉ.' }), caption: 'Địa bàn: Nam Bộ Việt Nam và một phần Cam-pu-chia, Thái Lan.' },
    { title: 'Tổ chức xã hội', html: `<p>Vua đứng đầu; xã hội gồm quý tộc, tăng lữ, thương nhân, nông dân, thợ thủ công, nô lệ.</p>` },
    { title: 'Kinh tế', html: `<p>Kinh tế đa dạng:</p>`,
      svg: S.mindmap({ center: 'Kinh tế Phù Nam', branches: [{ title: 'Nông nghiệp', items: ['Lúa nước', 'Đào kênh thoát nước'] }, { title: 'Thủ công', items: ['Đồ trang sức vàng', 'Gốm, đúc kim loại'] }, { title: 'Thương mại', items: ['Cảng Óc Eo', 'Buôn với Ấn Độ, La Mã'] }, { title: 'Đánh bắt', items: ['Cá, hải sản', 'Khai thác lâm sản'] }], w: 640, size: 13 }), caption: 'Thương mại biển là thế mạnh nổi bật.' },
    { title: 'Văn hoá', html: `<ul><li>Chịu ảnh hưởng Ấn Độ: Hin-đu giáo, Phật giáo, chữ Phạn.</li><li>Ở nhà sàn; tượng Phật bằng gỗ, đá; kiến trúc đền thờ.</li></ul>
      <div class="box key">Văn hoá Óc Eo là cơ sở hình thành Vương quốc Phù Nam.</div>` }
  ],
  summary: 'Vương quốc Phù Nam hình thành khoảng thế kỉ I trên vùng Nam Bộ, phát triển thịnh đạt thế kỉ III – V, suy yếu cuối thế kỉ VI và bị Chân Lạp thôn tính thế kỉ VII. Kinh tế: lúa nước, thủ công (đồ vàng), thương mại biển với cảng Óc Eo. Văn hoá chịu ảnh hưởng Ấn Độ: Hin-đu giáo, Phật giáo; người dân ở nhà sàn.',
  examples: [
    { title: 'Bằng chứng', problem: 'Hiện vật nào chứng tỏ Phù Nam buôn bán với La Mã?', solution: 'Đồng tiền La Mã tìm thấy ở Óc Eo.' },
    { title: 'Tính thời gian', problem: 'Óc Eo được khai quật năm 1944. Đến năm 2026 là bao nhiêu năm?', solution: '82 năm.' },
    { title: 'So sánh', problem: 'Nêu một điểm giống nhau giữa Phù Nam và Chăm-pa.', solution: 'Đều chịu ảnh hưởng văn hoá Ấn Độ, phát triển thương mại biển.' }
  ],
  exercises: [
    { question: 'Phù Nam thịnh đạt vào những thế kỉ nào?', hints: ['Sau thế kỉ I.', 'III đến V.'], solution: 'Thế kỉ III – V.' },
    { question: 'Từ năm 1944 đến năm 2026 là bao nhiêu năm?', hints: ['2026 − 1944.', 'Hơn 80.'], solution: '82 năm.' },
    { question: 'Vương quốc nào thôn tính Phù Nam?', hints: ['Thế kỉ VII.', 'Ở Cam-pu-chia ngày nay.'], solution: 'Chân Lạp.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Óc Eo là thương cảng của Vương quốc Phù Nam.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Phù Nam hình thành khoảng:', options: ['Thế kỉ I', 'Thế kỉ VII TCN', 'Thế kỉ X', 'Năm 192'], answer: 0, explain: 'Thế kỉ I.' },
    { type: 'short', q: 'Từ năm 1944 đến năm 2026 là bao nhiêu năm?', answer: '82', unit: 'năm', calc: '2026-1944', explain: '82.' },
    { type: 'mcq', q: 'Vương quốc thôn tính Phù Nam:', options: ['Chân Lạp', 'Chăm-pa', 'Sri Vi-giay-a', 'Văn Lang'], answer: 0, explain: 'Chân Lạp.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Phù Nam nằm ở Bắc Bộ Việt Nam.', answer: false, explain: 'Nam Bộ.' },
    { type: 'short', q: 'Thời kì thịnh đạt từ thế kỉ III đến thế kỉ V gồm bao nhiêu thế kỉ?', answer: '3', unit: 'thế kỉ', calc: '5-3+1', explain: '3.' },
    { type: 'mcq', q: 'Nhà ở phổ biến của cư dân Phù Nam:', options: ['Nhà sàn', 'Nhà tầng bê tông', 'Lều du mục', 'Hang động'], answer: 0, explain: 'Nhà sàn.' },
    { type: 'mcq', q: 'Văn hoá là cơ sở hình thành Phù Nam:', options: ['Óc Eo', 'Đông Sơn', 'Sa Huỳnh', 'Hoà Bình'], answer: 0, explain: 'Óc Eo.' }
  ]
});
})();
