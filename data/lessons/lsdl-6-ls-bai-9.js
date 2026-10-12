/* LS&ĐL 6 – Lịch sử, Bài 9. Trung Quốc từ thời cổ đại đến thế kỉ VII. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-6/ls-bai-9', {
  objectives: [
    'Nêu được những điều kiện tự nhiên của lưu vực Hoàng Hà và Trường Giang.',
    'Mô tả được sơ lược quá trình thống nhất và xác lập chế độ phong kiến dưới thời Tần Thuỷ Hoàng.',
    'Xây dựng được trục thời gian từ đế chế Hán, Nam Bắc triều đến nhà Tuỳ.',
    'Nêu được những thành tựu cơ bản của nền văn minh Trung Quốc.'
  ],
  intro: 'Vạn Lý Trường Thành dài hàng nghìn ki-lô-mét, được xây dựng, nối dài qua nhiều triều đại. Công trình ấy là chứng tích của một nền văn minh lâu đời bên hai dòng sông lớn: <b>Hoàng Hà và Trường Giang</b>.',
  steps: [
    { title: 'Điều kiện tự nhiên', html: `<ul><li><b>Hoàng Hà</b> (sông Vàng) và <b>Trường Giang</b> (sông Dương Tử) bồi đắp những đồng bằng rộng lớn, màu mỡ.</li><li>Thuận lợi trồng lúa nước, kê, lúa mì; nhưng Hoàng Hà hay gây lũ lụt, đòi hỏi trị thuỷ.</li></ul>` },
    { title: 'Nhà Tần thống nhất Trung Quốc', html: `<p>Thời Xuân Thu – Chiến Quốc, Trung Quốc chia thành nhiều nước. <b>Năm 221 TCN</b>, Tần Thuỷ Hoàng thống nhất Trung Quốc, lập nhà Tần, thống nhất đo lường, tiền tệ, chữ viết; xác lập chế độ phong kiến (quan hệ địa chủ – nông dân lĩnh canh).</p>` },
    { title: 'Các triều đại đến thế kỉ VII', html: `<p>Trục thời gian:</p>`,
      svg: S.timeline({ title: 'Trung Quốc từ nhà Tần đến nhà Tuỳ', items: [{ y: '221 TCN', s: 'Nhà Tần' }, { y: '206 TCN', s: 'Nhà Hán' }, { y: '220', s: 'Tam quốc' }, { y: '280', s: 'Nhà Tấn' }, { y: '420', s: 'Nam – Bắc triều' }, { y: '581', s: 'Nhà Tuỳ' }, { y: '618', s: 'Nhà Đường' }] }), caption: 'Nhà Đường kéo dài đến năm 907.' },
    { title: 'Thành tựu văn minh', html: `<p>Nhiều thành tựu nổi bật:</p>`,
      svg: S.table({ title: 'Thành tựu tiêu biểu', head: ['Lĩnh vực', 'Thành tựu'], rows: [['Tư tưởng', 'Nho giáo (Khổng Tử)'], ['Sử học', '“Sử kí” của Tư Mã Thiên'], ['Kĩ thuật', 'Giấy, la bàn, thuốc súng, in'], ['Kiến trúc', 'Vạn Lý Trường Thành']], colW: 250 }), caption: 'Giấy, la bàn, thuốc súng, kĩ thuật in: “tứ đại phát minh”.' }
  ],
  summary: 'Văn minh Trung Quốc hình thành ở lưu vực Hoàng Hà và Trường Giang. Năm 221 TCN, Tần Thuỷ Hoàng thống nhất Trung Quốc, xác lập chế độ phong kiến. Các triều đại tiếp theo: Hán (206 TCN), Tam quốc (220), Tấn (280), Nam – Bắc triều (420), Tuỳ (581), Đường (618). Thành tựu: Nho giáo, “Sử kí”, giấy, la bàn, thuốc súng, kĩ thuật in, Vạn Lý Trường Thành.',
  examples: [
    { title: 'Ý nghĩa thống nhất', problem: 'Tần Thuỷ Hoàng đã thống nhất những gì?', solution: 'Lãnh thổ, đo lường, tiền tệ, chữ viết.' },
    { title: 'Tính thời gian', problem: 'Nhà Tuỳ (581) đến nhà Đường (618) cách nhau bao nhiêu năm?', solution: '618 − 581 = 37 năm.' },
    { title: 'Xác định thế kỉ', problem: 'Năm 618 thuộc thế kỉ nào?', solution: 'Thế kỉ VII.' }
  ],
  exercises: [
    { question: 'Kể tên “tứ đại phát minh” của Trung Quốc.', hints: ['Liên quan viết, in.', 'Liên quan định hướng, quân sự.'], solution: 'Giấy, kĩ thuật in, la bàn, thuốc súng.' },
    { question: 'Nhà Hán tồn tại từ 206 TCN đến năm 220. Năm 220 thuộc thế kỉ nào?', hints: ['(220 − 1) : 100.', 'Lấy phần nguyên + 1.'], solution: 'Thế kỉ III.' },
    { question: 'Vì sao cư dân Hoàng Hà phải trị thuỷ?', hints: ['Lũ lụt.', 'Bảo vệ mùa màng.'], solution: 'Hoàng Hà hay gây lũ lụt; trị thuỷ để bảo vệ mùa màng, nhà cửa.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Năm 221 TCN, Tần Thuỷ Hoàng thống nhất Trung Quốc.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Hai con sông lớn của Trung Quốc:', options: ['Hoàng Hà, Trường Giang', 'Sông Ấn, sông Hằng', 'Sông Nin', 'Ti-grơ, Ơ-phrát'], answer: 0, explain: 'Đúng.' },
    { type: 'short', q: 'Từ năm 581 đến 618 là bao nhiêu năm?', answer: '37', unit: 'năm', calc: '618-581', explain: '37.' },
    { type: 'mcq', q: 'Tác giả bộ “Sử kí”:', options: ['Tư Mã Thiên', 'Khổng Tử', 'Lão Tử', 'Tần Thuỷ Hoàng'], answer: 0, explain: 'Tư Mã Thiên.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: La bàn là phát minh của người Ai Cập.', answer: false, explain: 'Của người Trung Quốc.' },
    { type: 'short', q: 'Năm 618 thuộc thế kỉ thứ mấy? (ghi số)', answer: '7', calc: 'Math.floor((618-1)/100)+1', explain: 'Thế kỉ VII.' },
    { type: 'mcq', q: 'Triều đại nối tiếp nhà Tần:', options: ['Nhà Hán', 'Nhà Đường', 'Nhà Tuỳ', 'Nhà Tấn'], answer: 0, explain: 'Nhà Hán.' },
    { type: 'mcq', q: 'Người sáng lập Nho giáo:', options: ['Khổng Tử', 'Tư Mã Thiên', 'Lưu Bang', 'Mạnh Tử'], answer: 0, explain: 'Khổng Tử.' }
  ]
});
})();
