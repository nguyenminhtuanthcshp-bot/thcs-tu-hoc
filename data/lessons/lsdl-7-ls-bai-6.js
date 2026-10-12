/* LS&ĐL 7 – Lịch sử, Bài 6. Các vương quốc phong kiến Đông Nam Á (nửa sau TK X – nửa đầu TK XVI). Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-7/ls-bai-6', {
  objectives: [
    'Mô tả được quá trình hình thành, phát triển của các quốc gia Đông Nam Á từ nửa sau thế kỉ X đến nửa đầu thế kỉ XVI.',
    'Giới thiệu được những thành tựu văn hoá tiêu biểu của Đông Nam Á.',
    'Kể tên được một số vương quốc tiêu biểu.',
    'Trân trọng các di sản văn hoá trong khu vực.'
  ],
  intro: 'Hàng nghìn ngôi chùa, tháp ở Pa-gan (Mi-an-ma) trải dài trên đồng bằng như một rừng tháp. Đó là dấu ấn của thời kì <b>phát triển thịnh đạt</b> của các vương quốc phong kiến Đông Nam Á.',
  steps: [
    { title: 'Các vương quốc tiêu biểu', html: `<p>Nhiều quốc gia lớn, thống nhất ra đời:</p>`,
      svg: S.table({ title: 'Một số vương quốc (TK X – XVI)', head: ['Vương quốc', 'Ngày nay'], rows: [['Đại Việt, Chăm-pa', 'Việt Nam'], ['Ăng-co', 'Cam-pu-chia'], ['Pa-gan (1044)', 'Mi-an-ma'], ['Su-khô-thai (1238)', 'Thái Lan'], ['Lạn Xạng (1353)', 'Lào'], ['Mô-giô-pa-hít (1293)', 'In-đô-nê-xi-a']], colW: 250 }), caption: 'TK: thế kỉ.' },
    { title: 'Phát triển thịnh đạt', html: `<ul><li>Từ thế kỉ X đến nửa đầu thế kỉ XVI là thời kì thịnh đạt.</li><li>Kinh tế: nông nghiệp lúa nước, buôn bán đường biển; nhiều thương cảng.</li><li>Từ nửa sau thế kỉ XVI, các vương quốc dần suy yếu.</li></ul>` },
    { title: 'Thành tựu văn hoá', html: `<p>Lĩnh vực nổi bật:</p>`,
      svg: S.mindmap({ center: 'Văn hoá ĐNA', branches: [{ title: 'Tôn giáo', items: ['Phật giáo, Hồi giáo', 'Hin-đu giáo'] }, { title: 'Chữ viết', items: ['Chữ Nôm (Việt)', 'Chữ Thái, chữ Lào cổ'] }, { title: 'Kiến trúc', items: ['Ăng-co Vát', 'Chùa tháp Pa-gan'] }, { title: 'Văn học', items: ['Văn học dân gian', 'Văn học viết'] }], w: 640, size: 13 }), caption: 'Hồi giáo lan rộng ở hải đảo từ thế kỉ XIII.' },
    { title: 'Ghi nhớ', html: `<div class="box key">Thế kỉ X – nửa đầu XVI: thời kì thịnh đạt của các vương quốc Đông Nam Á.</div>` }
  ],
  summary: 'Từ nửa sau thế kỉ X đến nửa đầu thế kỉ XVI, các vương quốc phong kiến Đông Nam Á phát triển thịnh đạt: Đại Việt, Chăm-pa, Ăng-co, Pa-gan (1044), Su-khô-thai (1238), Lạn Xạng (1353), Mô-giô-pa-hít (1293)… Văn hoá phong phú: Phật giáo, Hồi giáo, chữ viết riêng, kiến trúc Ăng-co Vát, chùa tháp Pa-gan. Từ nửa sau thế kỉ XVI, các vương quốc dần suy yếu.',
  examples: [
    { title: 'Nhận diện', problem: 'Vương quốc Su-khô-thai thuộc nước nào ngày nay?', solution: 'Thái Lan.' },
    { title: 'Tính thời gian', problem: 'Pa-gan (1044) ra đời trước Su-khô-thai (1238) bao nhiêu năm?', solution: '194 năm.' },
    { title: 'Thế kỉ', problem: 'Năm 1353 thuộc thế kỉ nào?', solution: 'Thế kỉ XIV.' }
  ],
  exercises: [
    { question: 'Vương quốc Lạn Xạng thuộc nước nào ngày nay?', hints: ['Không giáp biển.', 'Thủ đô Viêng Chăn.'], solution: 'Lào.' },
    { question: 'Từ 1238 đến 1353 là bao nhiêu năm?', hints: ['1353 − 1238.', 'Hơn 100.'], solution: '115 năm.' },
    { question: 'Kể hai công trình kiến trúc tiêu biểu.', hints: ['Cam-pu-chia.', 'Mi-an-ma.'], solution: 'Ăng-co Vát, chùa tháp Pa-gan.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Ăng-co Vát là công trình của Cam-pu-chia.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Vương quốc Pa-gan thuộc:', options: ['Mi-an-ma', 'Thái Lan', 'Lào', 'In-đô-nê-xi-a'], answer: 0, explain: 'Mi-an-ma.' },
    { type: 'short', q: 'Từ 1044 đến 1238 là bao nhiêu năm?', answer: '194', unit: 'năm', calc: '1238-1044', explain: '194.' },
    { type: 'mcq', q: 'Vương quốc Mô-giô-pa-hít thành lập năm:', options: ['1293', '1044', '1353', '1238'], answer: 0, explain: '1293.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hồi giáo không có mặt ở Đông Nam Á.', answer: false, explain: 'Lan rộng ở hải đảo.' },
    { type: 'short', q: 'Năm 1353 thuộc thế kỉ thứ mấy? (ghi số)', answer: '14', calc: 'Math.floor((1353-1)/100)+1', explain: 'XIV.' },
    { type: 'mcq', q: 'Chữ viết người Việt sáng tạo dựa trên chữ Hán:', options: ['Chữ Nôm', 'Chữ Phạn', 'Chữ La-tinh', 'Chữ hình nêm'], answer: 0, explain: 'Chữ Nôm.' },
    { type: 'short', q: 'Từ 1238 đến 1353 là bao nhiêu năm?', answer: '115', unit: 'năm', calc: '1353-1238', explain: '115.' }
  ]
});
})();
