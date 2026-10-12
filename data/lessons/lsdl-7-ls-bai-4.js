/* LS&ĐL 7 – Lịch sử, Bài 4. Trung Quốc từ thế kỉ VII đến giữa thế kỉ XIX. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-7/ls-bai-4', {
  objectives: [
    'Lập được sơ đồ tiến trình phát triển của Trung Quốc từ thế kỉ VII đến giữa thế kỉ XIX (các thời Đường, Tống, Nguyên, Minh, Thanh).',
    'Nêu được những nét chính về sự thịnh vượng của Trung Quốc dưới thời Đường.',
    'Giới thiệu và nhận xét được những thành tựu văn hoá tiêu biểu.',
    'Hiểu ảnh hưởng của văn hoá Trung Quốc với khu vực.'
  ],
  intro: 'Bốn bộ tiểu thuyết “Tam quốc diễn nghĩa”, “Thuỷ hử”, “Tây du kí”, “Hồng lâu mộng” đến nay vẫn được dựng thành phim. Chúng ra đời trong thời kì phong kiến Trung Quốc phát triển rực rỡ, từ <b>nhà Đường đến nhà Thanh</b>.',
  steps: [
    { title: 'Tiến trình các triều đại', html: `<p>Trục thời gian:</p>`,
      svg: S.timeline({ title: 'Trung Quốc từ thế kỉ VII đến giữa thế kỉ XIX', items: [{ y: '618', s: 'Nhà Đường' }, { y: '960', s: 'Nhà Tống' }, { y: '1271', s: 'Nhà Nguyên' }, { y: '1368', s: 'Nhà Minh' }, { y: '1644', s: 'Nhà Thanh' }] }), caption: 'Nhà Thanh tồn tại đến năm 1911. Giữa Đường và Tống là thời Ngũ đại.' },
    { title: 'Nhà Đường thịnh vượng', html: `<ul><li>Chính trị: hoàn thiện bộ máy, mở khoa cử tuyển quan lại.</li><li>Kinh tế: chế độ quân điền, nông nghiệp phát triển; “con đường tơ lụa” sầm uất.</li><li>Lãnh thổ mở rộng.</li></ul>` },
    { title: 'Thành tựu văn hoá', html: `<p>Nhiều lĩnh vực:</p>`,
      svg: S.table({ title: 'Thành tựu văn hoá tiêu biểu', head: ['Lĩnh vực', 'Thành tựu'], rows: [['Thơ', 'Thơ Đường: Lý Bạch, Đỗ Phủ'], ['Tiểu thuyết', 'Tam quốc, Thuỷ hử, Tây du kí…'], ['Kiến trúc', 'Tử Cấm Thành (thời Minh)'], ['Kĩ thuật', 'In, la bàn, thuốc súng phát triển']], colW: 250 }), caption: 'Nho giáo giữ vai trò hệ tư tưởng chính.' },
    { title: 'Ghi nhớ', html: `<div class="box key">Đường – Tống – Nguyên – Minh – Thanh.</div>` }
  ],
  summary: 'Từ thế kỉ VII đến giữa thế kỉ XIX, Trung Quốc trải qua các triều Đường (618), Tống (960), Nguyên (1271), Minh (1368), Thanh (1644). Nhà Đường thịnh vượng: bộ máy hoàn thiện, khoa cử, chế độ quân điền, buôn bán phát triển. Thành tựu văn hoá: thơ Đường, tiểu thuyết chương hồi, Tử Cấm Thành, kĩ thuật in, la bàn, thuốc súng.',
  examples: [
    { title: 'Tính thời gian', problem: 'Nhà Đường tồn tại từ 618 đến 907, bao nhiêu năm?', solution: '289 năm.' },
    { title: 'Nhận diện', problem: 'Hai nhà thơ nổi tiếng thời Đường?', solution: 'Lý Bạch, Đỗ Phủ.' },
    { title: 'Thế kỉ', problem: 'Nhà Minh thành lập năm 1368, thế kỉ nào?', solution: 'Thế kỉ XIV.' }
  ],
  exercises: [
    { question: 'Sắp xếp: Minh, Đường, Thanh, Tống, Nguyên.', hints: ['Bắt đầu 618.', 'Kết thúc 1644.'], solution: 'Đường → Tống → Nguyên → Minh → Thanh.' },
    { question: 'Nhà Minh tồn tại từ 1368 đến 1644, bao nhiêu năm?', hints: ['1644 − 1368.', 'Gần 280.'], solution: '276 năm.' },
    { question: 'Kể tên bốn tiểu thuyết lớn của Trung Quốc.', hints: ['Tam…, Thuỷ…', 'Tây…, Hồng…'], solution: 'Tam quốc diễn nghĩa, Thuỷ hử, Tây du kí, Hồng lâu mộng.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nhà Đường được thành lập năm 618.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Triều đại do người Mông Cổ lập ở Trung Quốc:', options: ['Nguyên', 'Minh', 'Tống', 'Đường'], answer: 0, explain: 'Nguyên.' },
    { type: 'short', q: 'Nhà Đường từ 618 đến 907 tồn tại bao nhiêu năm?', answer: '289', unit: 'năm', calc: '907-618', explain: '289.' },
    { type: 'mcq', q: 'Triều đại phong kiến cuối cùng của Trung Quốc:', options: ['Thanh', 'Minh', 'Nguyên', 'Tống'], answer: 0, explain: 'Thanh.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Lý Bạch là nhà thơ thời Thanh.', answer: false, explain: 'Thời Đường.' },
    { type: 'short', q: 'Nhà Minh từ 1368 đến 1644 tồn tại bao nhiêu năm?', answer: '276', unit: 'năm', calc: '1644-1368', explain: '276.' },
    { type: 'mcq', q: 'Tác phẩm kể chuyện Đường Tăng đi thỉnh kinh:', options: ['Tây du kí', 'Thuỷ hử', 'Tam quốc diễn nghĩa', 'Hồng lâu mộng'], answer: 0, explain: 'Tây du kí.' },
    { type: 'short', q: 'Năm 1368 thuộc thế kỉ thứ mấy? (ghi số)', answer: '14', calc: 'Math.floor((1368-1)/100)+1', explain: 'XIV.' }
  ]
});
})();
