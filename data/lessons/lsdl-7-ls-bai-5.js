/* LS&ĐL 7 – Lịch sử, Bài 5. Ấn Độ từ thế kỉ IV đến giữa thế kỉ XIX. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-7/ls-bai-5', {
  objectives: [
    'Nêu được những nét chính về điều kiện tự nhiên của Ấn Độ.',
    'Trình bày được khái quát sự ra đời và tình hình chính trị, kinh tế, xã hội của Ấn Độ dưới thời các vương triều Gúp-ta, Đê-li và Mô-gôn.',
    'Giới thiệu được một số thành tựu văn hoá tiêu biểu.',
    'Trân trọng di sản văn hoá Ấn Độ.'
  ],
  intro: 'Lăng Ta-giơ Ma-han bằng đá cẩm thạch trắng được xây để tưởng nhớ một hoàng hậu, nay là biểu tượng của Ấn Độ. Công trình ra đời dưới <b>vương triều Mô-gôn</b> – một trong ba vương triều lớn của Ấn Độ thời trung đại.',
  steps: [
    { title: 'Ba vương triều lớn', html: `<p>Trục thời gian:</p>`,
      svg: S.timeline({ title: 'Ấn Độ từ thế kỉ IV đến giữa thế kỉ XIX', items: [{ y: 'TK IV – VI', s: 'Vương triều Gúp-ta' }, { y: '1206 – 1526', s: 'Hồi giáo Đê-li' }, { y: '1526 – 1857', s: 'Vương triều Mô-gôn' }], note: 'TK: thế kỉ. Niên đại theo tài liệu phổ biến.' }), caption: 'Đê-li và Mô-gôn do người theo Hồi giáo lập nên.' },
    { title: 'Chính trị, kinh tế, xã hội', html: `<ul><li>Gúp-ta: thống nhất miền Bắc, kinh tế phát triển, biết luyện sắt giỏi.</li><li>Đê-li: truyền bá Hồi giáo, có lúc phân biệt tôn giáo.</li><li>Mô-gôn: thời A-cơ-ba (A-kba) chính sách hoà hợp tôn giáo, kinh tế, văn hoá phát triển.</li></ul>` },
    { title: 'Thành tựu văn hoá', html: `<p>Tiêu biểu:</p>`,
      svg: S.table({ title: 'Thành tựu văn hoá Ấn Độ', head: ['Lĩnh vực', 'Thành tựu'], rows: [['Tôn giáo', 'Hin-đu giáo, Phật giáo, Hồi giáo'], ['Chữ viết, văn học', 'Chữ Phạn hoàn thiện; văn học Hin-đu'], ['Kiến trúc', 'Chùa hang A-gian-ta; lăng Ta-giơ Ma-han'], ['Khoa học', 'Chữ số, số 0, thiên văn']], colW: 250 }), caption: 'Lăng Ta-giơ Ma-han xây khoảng 1632 – 1653.' },
    { title: 'Ghi nhớ', html: `<div class="box key">Gúp-ta – Đê-li – Mô-gôn.</div>` }
  ],
  summary: 'Ấn Độ thời trung đại trải qua ba vương triều lớn: Gúp-ta (thế kỉ IV – VI), Hồi giáo Đê-li (1206 – 1526), Mô-gôn (1526 – 1857). Kinh tế phát triển, Hồi giáo được truyền bá; vua A-cơ-ba thực hiện hoà hợp tôn giáo. Thành tựu: Hin-đu giáo, chữ Phạn, chùa hang A-gian-ta, lăng Ta-giơ Ma-han, chữ số và số 0.',
  examples: [
    { title: 'Tính thời gian', problem: 'Vương triều Hồi giáo Đê-li tồn tại 1206 – 1526, bao nhiêu năm?', solution: '320 năm.' },
    { title: 'Kiến trúc', problem: 'Lăng Ta-giơ Ma-han thuộc vương triều nào?', solution: 'Mô-gôn.' },
    { title: 'Thời gian xây', problem: 'Lăng xây khoảng 1632 – 1653, mất bao nhiêu năm?', solution: 'Khoảng 21 năm.' }
  ],
  exercises: [
    { question: 'Sắp xếp ba vương triều theo thời gian.', hints: ['Sớm nhất: thế kỉ IV.', 'Muộn nhất: 1526.'], solution: 'Gúp-ta → Đê-li → Mô-gôn.' },
    { question: 'Vương triều Mô-gôn tồn tại 1526 – 1857, bao nhiêu năm?', hints: ['1857 − 1526.', 'Hơn 300.'], solution: '331 năm.' },
    { question: 'Chính sách nổi bật của vua A-cơ-ba?', hints: ['Tôn giáo.', 'Hoà…'], solution: 'Hoà hợp tôn giáo, khuyến khích phát triển kinh tế, văn hoá.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Lăng Ta-giơ Ma-han được xây dưới vương triều Mô-gôn.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Vương triều Hồi giáo Đê-li thành lập năm:', options: ['1206', '1526', '1857', '618'], answer: 0, explain: '1206.' },
    { type: 'short', q: 'Đê-li tồn tại từ 1206 đến 1526, bao nhiêu năm?', answer: '320', unit: 'năm', calc: '1526-1206', explain: '320.' },
    { type: 'mcq', q: 'Vị vua Mô-gôn nổi tiếng với chính sách hoà hợp tôn giáo:', options: ['A-cơ-ba', 'A-sô-ka', 'Ham-mu-ra-bi', 'Tần Thuỷ Hoàng'], answer: 0, explain: 'A-cơ-ba.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Vương triều Gúp-ta do người Mông Cổ lập nên.', answer: false, explain: 'Không đúng.' },
    { type: 'short', q: 'Mô-gôn tồn tại từ 1526 đến 1857, bao nhiêu năm?', answer: '331', unit: 'năm', calc: '1857-1526', explain: '331.' },
    { type: 'mcq', q: 'Công trình chùa hang nổi tiếng của Ấn Độ:', options: ['A-gian-ta', 'Bô-rô-bu-đua', 'Ăng-co Vát', 'Tử Cấm Thành'], answer: 0, explain: 'A-gian-ta.' },
    { type: 'mcq', q: 'Tôn giáo được truyền bá mạnh dưới thời Đê-li:', options: ['Hồi giáo', 'Tin Lành', 'Nho giáo', 'Thần đạo'], answer: 0, explain: 'Hồi giáo.' }
  ]
});
})();
