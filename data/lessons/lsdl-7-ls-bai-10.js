/* LS&ĐL 7 – Lịch sử, Bài 10. Đại Cồ Việt thời Đinh và Tiền Lê (968 – 1009). Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-7/ls-bai-10', {
  objectives: [
    'Mô tả được những nét chính về tổ chức chính quyền thời Đinh – Tiền Lê.',
    'Nêu được đời sống xã hội, văn hoá thời Đinh – Tiền Lê.',
    'Giới thiệu được nét chính về cuộc kháng chiến chống Tống năm 981.',
    'Đánh giá được công lao của Đinh Tiên Hoàng và Lê Hoàn.'
  ],
  intro: 'Lễ hội Trường Yên ở Ninh Bình mỗi mùa xuân vẫn tái hiện cảnh cậu bé Đinh Bộ Lĩnh “cờ lau tập trận”. Cậu bé ấy đã trở thành vị hoàng đế đặt quốc hiệu <b>Đại Cồ Việt</b>.',
  steps: [
    { title: 'Nhà Đinh', html: `<p>Năm <b>968</b>, Đinh Bộ Lĩnh lên ngôi hoàng đế (Đinh Tiên Hoàng), đặt quốc hiệu <b>Đại Cồ Việt</b>, đóng đô ở <b>Hoa Lư</b>, đặt niên hiệu Thái Bình, xây dựng quân đội.</p>` },
    { title: 'Nhà Tiền Lê và kháng chiến chống Tống', html: `<p>Năm <b>980</b>, quân Tống chuẩn bị xâm lược; Lê Hoàn được suy tôn lên ngôi. Năm <b>981</b>, quân dân Đại Cồ Việt đánh tan quân Tống trên sông Bạch Đằng và ở Chi Lăng.</p>`,
      svg: S.timeline({ title: 'Thời Đinh – Tiền Lê', items: [{ y: '968', s: 'Đại Cồ Việt' }, { y: '980', s: 'Lê Hoàn lên ngôi' }, { y: '981', s: 'Thắng quân Tống' }, { y: '1005', s: 'Lê Hoàn mất' }, { y: '1009', s: 'Lập nhà Lý' }] }), caption: 'Kinh đô Hoa Lư (Ninh Bình).' },
    { title: 'Tổ chức chính quyền', html: `<p>Bộ máy:</p>`,
      svg: S.flowchart({ title: 'Chính quyền thời Tiền Lê', steps: [{ t: 'start', s: 'Hoàng đế' }, { t: 'proc', s: 'Văn ban, võ ban' }, { t: 'proc', s: '10 lộ' }, { t: 'end', s: 'Phủ, châu' }] }), caption: 'Quân đội gồm cấm quân và quân địa phương.' },
    { title: 'Kinh tế, văn hoá', html: `<ul><li>Lê Hoàn tổ chức lễ cày ruộng tịch điền; đào kênh, đúc tiền (tiền Thái Bình hưng bảo).</li><li>Phật giáo được coi trọng; nhà sư có vai trò lớn.</li></ul>
      <div class="box key">968: Đại Cồ Việt – Hoa Lư. 981: thắng Tống.</div>` }
  ],
  summary: 'Năm 968, Đinh Bộ Lĩnh lên ngôi, đặt quốc hiệu Đại Cồ Việt, đóng đô ở Hoa Lư. Năm 980 Lê Hoàn lên ngôi, lập nhà Tiền Lê; năm 981 đánh tan quân Tống. Chính quyền gồm văn ban, võ ban, chia 10 lộ. Kinh tế được chú ý (lễ tịch điền, đào kênh, đúc tiền); Phật giáo phát triển.',
  examples: [
    { title: 'Quốc hiệu', problem: 'Quốc hiệu “Đại Cồ Việt” nghĩa là gì?', solution: 'Nước Việt lớn – thể hiện ý thức tự chủ, ngang hàng với phương Bắc.' },
    { title: 'Tính thời gian', problem: 'Từ 968 đến 1009 là bao nhiêu năm?', solution: '41 năm.' },
    { title: 'Nhân vật', problem: 'Ai chỉ huy kháng chiến chống Tống năm 981?', solution: 'Lê Hoàn.' }
  ],
  exercises: [
    { question: 'Kinh đô thời Đinh – Tiền Lê?', hints: ['Ninh Bình.', 'Hoa…'], solution: 'Hoa Lư.' },
    { question: 'Từ 980 đến 1005 là bao nhiêu năm?', hints: ['1005 − 980.', '25.'], solution: '25 năm.' },
    { question: 'Lễ tịch điền có ý nghĩa gì?', hints: ['Vua cày ruộng.', 'Khuyến khích…'], solution: 'Khuyến khích sản xuất nông nghiệp.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Năm 968, Đinh Bộ Lĩnh đặt quốc hiệu Đại Cồ Việt.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Năm 981, quân dân Đại Cồ Việt đánh tan quân:', options: ['Tống', 'Nam Hán', 'Nguyên', 'Minh'], answer: 0, explain: 'Tống.' },
    { type: 'short', q: 'Từ 968 đến 1009 là bao nhiêu năm?', answer: '41', unit: 'năm', calc: '1009-968', explain: '41.' },
    { type: 'mcq', q: 'Người lập nhà Tiền Lê:', options: ['Lê Hoàn', 'Lê Lợi', 'Đinh Bộ Lĩnh', 'Lý Công Uẩn'], answer: 0, explain: 'Lê Hoàn.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Kinh đô thời Đinh là Thăng Long.', answer: false, explain: 'Hoa Lư.' },
    { type: 'short', q: 'Thời Tiền Lê chia đất nước thành bao nhiêu lộ?', answer: '10', unit: 'lộ', calc: '10', explain: '10.' },
    { type: 'mcq', q: 'Tôn giáo được coi trọng thời Đinh – Tiền Lê:', options: ['Phật giáo', 'Thiên Chúa giáo', 'Hồi giáo', 'Tin Lành'], answer: 0, explain: 'Phật giáo.' },
    { type: 'short', q: 'Từ 980 đến 1005 là bao nhiêu năm?', answer: '25', unit: 'năm', calc: '1005-980', explain: '25.' }
  ]
});
})();
