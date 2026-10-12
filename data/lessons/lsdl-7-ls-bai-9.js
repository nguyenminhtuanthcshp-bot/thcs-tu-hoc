/* LS&ĐL 7 – Lịch sử, Bài 9. Đất nước buổi đầu độc lập (939 – 967). Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-7/ls-bai-9', {
  objectives: [
    'Trình bày được những nét chính về thời Ngô.',
    'Mô tả được cuộc dẹp loạn 12 sứ quân và thống nhất đất nước của Đinh Bộ Lĩnh.',
    'Nêu được ý nghĩa của việc Ngô Quyền xưng vương.',
    'Đánh giá được công lao của Ngô Quyền và Đinh Bộ Lĩnh.'
  ],
  intro: 'Sau chiến thắng Bạch Đằng năm 938, Ngô Quyền không nhận chức Tiết độ sứ của phương Bắc mà xưng vương. Đó là bước đi khẳng định <b>nền độc lập</b>. Nhưng đất nước còn phải trải qua nhiều thử thách.',
  steps: [
    { title: 'Nhà Ngô', html: `<p>Năm <b>939</b>, Ngô Quyền xưng vương, đóng đô ở <b>Cổ Loa</b>, bỏ chức Tiết độ sứ, đặt triều nghi, chế định phẩm phục. Năm 944 Ngô Quyền mất, triều đình rối loạn.</p>` },
    { title: 'Loạn 12 sứ quân', html: `<p>Cuối thời Ngô, các thủ lĩnh địa phương cát cứ, gây ra <b>loạn 12 sứ quân</b>, đất nước bị chia cắt, nhân dân khổ cực.</p>` },
    { title: 'Đinh Bộ Lĩnh thống nhất', html: `<p>Quá trình:</p>`,
      svg: S.flowchart({ title: 'Dẹp loạn 12 sứ quân', steps: [{ t: 'start', s: 'Xây căn cứ Hoa Lư' }, { t: 'proc', s: 'Liên kết sứ quân' }, { t: 'proc', s: 'Đánh dẹp cát cứ' }, { t: 'end', s: 'Thống nhất (967)' }] }), caption: 'Đinh Bộ Lĩnh được nhân dân suy tôn là Vạn Thắng Vương.' },
    { title: 'Mốc thời gian', html: `<p>Trục thời gian:</p>`,
      svg: S.timeline({ title: 'Đất nước buổi đầu độc lập', items: [{ y: '938', s: 'Bạch Đằng' }, { y: '939', s: 'Xưng vương' }, { y: '944', s: 'Ngô Quyền mất' }, { y: '967', s: 'Thống nhất đất nước' }] }), caption: 'Năm 968 Đinh Bộ Lĩnh lên ngôi hoàng đế.' }
  ],
  summary: 'Năm 939, Ngô Quyền xưng vương, đóng đô ở Cổ Loa, xây dựng chính quyền độc lập, khẳng định chủ quyền. Năm 944 Ngô Quyền mất, triều đình suy yếu, loạn 12 sứ quân nổ ra. Đinh Bộ Lĩnh xây dựng căn cứ ở Hoa Lư, liên kết và đánh dẹp các sứ quân, thống nhất đất nước năm 967.',
  examples: [
    { title: 'Ý nghĩa', problem: 'Vì sao Ngô Quyền bỏ chức Tiết độ sứ?', solution: 'Để khẳng định đất nước độc lập, không còn lệ thuộc phương Bắc.' },
    { title: 'Tính thời gian', problem: 'Từ 939 đến 967 là bao nhiêu năm?', solution: '28 năm.' },
    { title: 'Căn cứ', problem: 'Căn cứ của Đinh Bộ Lĩnh ở đâu?', solution: 'Hoa Lư (Ninh Bình).' }
  ],
  exercises: [
    { question: 'Ngô Quyền đóng đô ở đâu?', hints: ['Kinh đô cũ của An Dương Vương.', 'Đông Anh, Hà Nội.'], solution: 'Cổ Loa.' },
    { question: 'Từ năm 944 đến 967 là bao nhiêu năm?', hints: ['967 − 944.', 'Hơn 20.'], solution: '23 năm.' },
    { question: 'Loạn 12 sứ quân gây hậu quả gì?', hints: ['Đất nước.', 'Nhân dân.'], solution: 'Đất nước bị chia cắt, nhân dân khổ cực, nguy cơ ngoại xâm.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Năm 939, Ngô Quyền xưng vương.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Người dẹp loạn 12 sứ quân:', options: ['Đinh Bộ Lĩnh', 'Lê Hoàn', 'Ngô Quyền', 'Lý Công Uẩn'], answer: 0, explain: 'Đinh Bộ Lĩnh.' },
    { type: 'short', q: 'Từ 939 đến 967 là bao nhiêu năm?', answer: '28', unit: 'năm', calc: '967-939', explain: '28.' },
    { type: 'mcq', q: 'Kinh đô thời Ngô:', options: ['Cổ Loa', 'Hoa Lư', 'Thăng Long', 'Phú Xuân'], answer: 0, explain: 'Cổ Loa.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Ngô Quyền nhận chức Tiết độ sứ của nhà Hán.', answer: false, explain: 'Bỏ chức Tiết độ sứ.' },
    { type: 'short', q: 'Từ 944 đến 967 là bao nhiêu năm?', answer: '23', unit: 'năm', calc: '967-944', explain: '23.' },
    { type: 'mcq', q: 'Đinh Bộ Lĩnh được suy tôn là:', options: ['Vạn Thắng Vương', 'Bố Cái Đại Vương', 'Mai Hắc Đế', 'Lý Nam Đế'], answer: 0, explain: 'Vạn Thắng Vương.' },
    { type: 'mcq', q: 'Năm đất nước được thống nhất trở lại:', options: ['967', '939', '944', '1009'], answer: 0, explain: '967.' }
  ]
});
})();
