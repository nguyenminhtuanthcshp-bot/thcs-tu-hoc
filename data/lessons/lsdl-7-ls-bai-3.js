/* LS&ĐL 7 – Lịch sử, Bài 3. Phong trào Văn hoá Phục hưng và Cải cách tôn giáo. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-7/ls-bai-3', {
  objectives: [
    'Giới thiệu được sự biến đổi quan trọng về kinh tế – xã hội của Tây Âu từ thế kỉ XIII đến thế kỉ XVI.',
    'Trình bày được những thành tựu tiêu biểu của phong trào Văn hoá Phục hưng.',
    'Nêu được và giải thích được nguyên nhân của phong trào Cải cách tôn giáo.',
    'Mô tả được tác động của Cải cách tôn giáo đến xã hội Tây Âu.'
  ],
  intro: 'Nụ cười bí ẩn của nàng Mô-na Li-sa đã khiến hàng triệu người đến bảo tàng Lu-vơ (Pa-ri). Bức tranh là kiệt tác của Lê-ô-na-đô đa Vin-xi – nhân vật tiêu biểu của phong trào <b>Văn hoá Phục hưng</b>.',
  steps: [
    { title: 'Bối cảnh', html: `<p>Giai cấp tư sản mới ra đời có thế lực kinh tế nhưng bị Giáo hội và chế độ phong kiến kìm hãm. Họ muốn có tư tưởng, văn hoá mới đề cao con người.</p>` },
    { title: 'Văn hoá Phục hưng', html: `<p>Bắt đầu ở I-ta-li-a (thế kỉ XIV), lan rộng khắp Tây Âu (thế kỉ XV – XVI):</p>`,
      svg: S.table({ title: 'Một số nhân vật tiêu biểu', head: ['Nhân vật', 'Thành tựu'], rows: [['Lê-ô-na-đô đa Vin-xi', 'Hoạ sĩ, nhà khoa học (Mô-na Li-sa)'], ['Sếch-xpia (Anh)', 'Kịch Rô-mê-ô và Giu-li-ét'], ['Xéc-van-tét (Tây Ban Nha)', 'Tiểu thuyết Đôn Ki-hô-tê'], ['Cô-péc-ních (Ba Lan)', 'Thuyết Trái Đất quay quanh Mặt Trời']], colW: 250 }), caption: 'Đề cao giá trị con người, khoa học.' },
    { title: 'Cải cách tôn giáo', html: `<p>Năm <b>1517</b>, Mác-tin Lu-thơ (Đức) công bố 95 luận đề, phê phán Giáo hội. Sau đó Can-vanh tiến hành cải cách ở Thuỵ Sĩ. Đạo Tin Lành ra đời.</p>`,
      svg: S.flowchart({ title: 'Cải cách tôn giáo', steps: [{ t: 'start', s: 'Giáo hội hủ bại' }, { t: 'proc', s: 'Lu-thơ: 95 luận đề' }, { t: 'proc', s: 'Lan khắp Tây Âu' }, { t: 'end', s: 'Đạo Tin Lành ra đời' }] }), caption: 'Thiên Chúa giáo chia thành Cựu giáo và Tân giáo.' },
    { title: 'Ý nghĩa', html: `<div class="box key">Phục hưng và Cải cách tôn giáo đề cao con người, mở đường cho văn hoá và khoa học châu Âu cận đại.</div>` }
  ],
  summary: 'Từ thế kỉ XIV, phong trào Văn hoá Phục hưng bắt đầu ở I-ta-li-a, đề cao con người và khoa học, với những tên tuổi như Lê-ô-na-đô đa Vin-xi, Sếch-xpia, Xéc-van-tét, Cô-péc-ních. Năm 1517, Mác-tin Lu-thơ khởi xướng Cải cách tôn giáo ở Đức, sau đó Can-vanh ở Thuỵ Sĩ; đạo Tin Lành ra đời, Thiên Chúa giáo bị phân hoá.',
  examples: [
    { title: 'Nhận diện', problem: 'Ai viết “Rô-mê-ô và Giu-li-ét”?', solution: 'Sếch-xpia (Anh).' },
    { title: 'Tính thời gian', problem: 'Năm 1517 cách năm 2017 bao nhiêu năm?', solution: '500 năm.' },
    { title: 'Ý nghĩa', problem: 'Thuyết của Cô-péc-ních thách thức điều gì?', solution: 'Quan niệm của Giáo hội cho rằng Trái Đất là trung tâm vũ trụ.' }
  ],
  exercises: [
    { question: 'Phong trào Văn hoá Phục hưng bắt đầu ở nước nào?', hints: ['Quê của đa Vin-xi.', 'Bán đảo hình chiếc ủng.'], solution: 'I-ta-li-a.' },
    { question: 'Năm 1517 thuộc thế kỉ nào?', hints: ['(1517 − 1) : 100.', 'Phần nguyên + 1.'], solution: 'Thế kỉ XVI.' },
    { question: 'Kết quả của Cải cách tôn giáo?', hints: ['Tôn giáo mới.', 'Giáo hội chia rẽ.'], solution: 'Đạo Tin Lành ra đời; Thiên Chúa giáo chia thành Cựu giáo và Tân giáo.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Phong trào Văn hoá Phục hưng bắt đầu ở I-ta-li-a.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Tác giả bức hoạ Mô-na Li-sa:', options: ['Lê-ô-na-đô đa Vin-xi', 'Sếch-xpia', 'Cô-péc-ních', 'Lu-thơ'], answer: 0, explain: 'Đa Vin-xi.' },
    { type: 'short', q: 'Năm 1517 thuộc thế kỉ thứ mấy? (ghi số)', answer: '16', calc: 'Math.floor((1517-1)/100)+1', explain: 'XVI.' },
    { type: 'mcq', q: 'Người khởi xướng Cải cách tôn giáo năm 1517:', options: ['Mác-tin Lu-thơ', 'Can-vanh', 'Cô-lôm-bô', 'Xéc-van-tét'], answer: 0, explain: 'Lu-thơ.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Cô-péc-ních cho rằng Mặt Trời quay quanh Trái Đất.', answer: false, explain: 'Ngược lại.' },
    { type: 'short', q: 'Từ năm 1517 đến năm 2017 là bao nhiêu năm?', answer: '500', unit: 'năm', calc: '2017-1517', explain: '500.' },
    { type: 'mcq', q: 'Tác phẩm “Đôn Ki-hô-tê” của:', options: ['Xéc-van-tét', 'Sếch-xpia', 'Ra-bơ-le', 'Hô-me'], answer: 0, explain: 'Xéc-van-tét.' },
    { type: 'mcq', q: 'Tôn giáo mới ra đời từ Cải cách tôn giáo:', options: ['Tin Lành', 'Phật giáo', 'Hồi giáo', 'Hin-đu giáo'], answer: 0, explain: 'Tin Lành.' }
  ]
});
})();
