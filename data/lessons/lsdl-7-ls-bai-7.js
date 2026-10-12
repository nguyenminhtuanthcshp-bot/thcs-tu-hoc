/* LS&ĐL 7 – Lịch sử, Bài 7. Vương quốc Lào. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-7/ls-bai-7', {
  objectives: [
    'Nêu được sự hình thành và phát triển của Vương quốc Lào.',
    'Mô tả được quá trình phát triển và sự suy yếu của Vương quốc Lạn Xạng.',
    'Nhận biết được sự phát triển của Vương quốc Lạn Xạng qua các thời kì.',
    'Đánh giá được sự phát triển văn hoá của Vương quốc Lào.'
  ],
  intro: 'Ngôi tháp vàng Thạt Luổng ở Viêng Chăn là biểu tượng quốc gia của Lào, xuất hiện cả trên quốc huy. Tháp được xây dựng lại quy mô lớn ở thế kỉ XVI, thời <b>Vương quốc Lạn Xạng</b> hưng thịnh.',
  steps: [
    { title: 'Sự hình thành', html: `<p>Chủ nhân đầu tiên là người Lào Thơng; từ khoảng thế kỉ XIII người Lào Lùm di cư đến. Năm <b>1353</b>, Pha Ngừm thống nhất các mường, lập nước <b>Lạn Xạng</b> (“Triệu Voi”).</p>` },
    { title: 'Thời kì thịnh vượng', html: `<p>Thế kỉ XV – XVII là thời kì thịnh vượng:</p>`,
      svg: S.timeline({ title: 'Vương quốc Lạn Xạng', items: [{ y: '1353', s: 'Pha Ngừm lập nước' }, { y: '1566', s: 'Xây lại Thạt Luổng' }, { y: 'TK XVII', s: 'Thịnh vượng' }, { y: 'TK XVIII', s: 'Suy yếu, chia ba' }], note: 'TK: thế kỉ.' }), caption: 'Cuối thế kỉ XVIII Lạn Xạng bị Xiêm thôn tính.' },
    { title: 'Chính trị và kinh tế', html: `<ul><li>Chia đất nước thành các mường, xây dựng quân đội mạnh.</li><li>Quan hệ hoà hiếu với Đại Việt, Cam-pu-chia; kiên quyết chống xâm lược Miến Điện.</li><li>Kinh tế: trồng lúa nương, khai thác lâm sản, buôn bán.</li></ul>` },
    { title: 'Văn hoá', html: `<p>Phật giáo trở thành quốc giáo; chữ Lào ra đời trên cơ sở chữ Khơ-me; lễ hội té nước (Bun Pi Mai).</p>`,
      svg: S.table({ title: 'Văn hoá Lào', head: ['Lĩnh vực', 'Biểu hiện'], rows: [['Tôn giáo', 'Phật giáo'], ['Chữ viết', 'Chữ Lào'], ['Kiến trúc', 'Thạt Luổng (Viêng Chăn)'], ['Lễ hội', 'Té nước, đua thuyền']], colW: 250 }), caption: 'Nhiều phong tục còn lưu giữ đến ngày nay.' }
  ],
  summary: 'Năm 1353, Pha Ngừm thống nhất các mường, lập Vương quốc Lạn Xạng. Thế kỉ XV – XVII là thời kì thịnh vượng: tổ chức đất nước chặt chẽ, quan hệ hoà hiếu với láng giềng, chống xâm lược Miến Điện. Thế kỉ XVIII Lạn Xạng suy yếu, chia thành ba tiểu quốc. Văn hoá: Phật giáo, chữ Lào, Thạt Luổng, lễ hội té nước.',
  examples: [
    { title: 'Ý nghĩa tên gọi', problem: '“Lạn Xạng” nghĩa là gì?', solution: '“Triệu Voi”.' },
    { title: 'Tính thời gian', problem: 'Từ 1353 đến 1566 là bao nhiêu năm?', solution: '213 năm.' },
    { title: 'Thế kỉ', problem: 'Năm 1566 thuộc thế kỉ nào?', solution: 'Thế kỉ XVI.' }
  ],
  exercises: [
    { question: 'Ai thống nhất các mường, lập Lạn Xạng?', hints: ['Năm 1353.', 'Pha…'], solution: 'Pha Ngừm.' },
    { question: 'Từ 1353 đến 2023 là bao nhiêu năm?', hints: ['2023 − 1353.', 'Hơn 600.'], solution: '670 năm.' },
    { question: 'Nêu hai nét văn hoá tiêu biểu của Lào.', hints: ['Tôn giáo.', 'Lễ hội.'], solution: 'Phật giáo; lễ hội té nước (chữ Lào, Thạt Luổng…).' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Năm 1353, Pha Ngừm lập nước Lạn Xạng.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Công trình biểu tượng của Lào:', options: ['Thạt Luổng', 'Ăng-co Vát', 'Bô-rô-bu-đua', 'Tháp Chăm'], answer: 0, explain: 'Thạt Luổng.' },
    { type: 'short', q: 'Từ 1353 đến 1566 là bao nhiêu năm?', answer: '213', unit: 'năm', calc: '1566-1353', explain: '213.' },
    { type: 'mcq', q: 'Tôn giáo chính của Lạn Xạng:', options: ['Phật giáo', 'Hồi giáo', 'Tin Lành', 'Nho giáo'], answer: 0, explain: 'Phật giáo.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Lạn Xạng có nghĩa là “Triệu Ngựa”.', answer: false, explain: '“Triệu Voi”.' },
    { type: 'short', q: 'Năm 1566 thuộc thế kỉ thứ mấy? (ghi số)', answer: '16', calc: 'Math.floor((1566-1)/100)+1', explain: 'XVI.' },
    { type: 'mcq', q: 'Lạn Xạng kiên quyết chống quân xâm lược:', options: ['Miến Điện', 'Đại Việt', 'Pháp', 'Mông Cổ'], answer: 0, explain: 'Miến Điện.' },
    { type: 'short', q: 'Từ 1353 đến 2023 là bao nhiêu năm?', answer: '670', unit: 'năm', calc: '2023-1353', explain: '670.' }
  ]
});
})();
