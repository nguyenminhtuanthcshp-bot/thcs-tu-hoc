/* LS&ĐL 6 – Lịch sử, Bài 15. Chính sách cai trị của phong kiến phương Bắc và sự chuyển biến của Việt Nam thời kì Bắc thuộc. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-6/ls-bai-15', {
  objectives: [
    'Nêu được một số chính sách cai trị của phong kiến phương Bắc trong thời kì Bắc thuộc.',
    'Nhận biết được một số chuyển biến quan trọng về kinh tế, xã hội, văn hoá thời Bắc thuộc.',
    'Hiểu mục đích thâm độc của chính sách đồng hoá.',
    'Trân trọng ý chí giữ gìn bản sắc của tổ tiên.'
  ],
  intro: 'Từ năm 179 TCN đến năm 938, hơn một nghìn năm, đất nước ta bị các triều đại phong kiến phương Bắc đô hộ. Vậy họ cai trị nước ta thế nào, và vì sao người Việt vẫn giữ được tiếng nói, phong tục của mình?',
  steps: [
    { title: 'Chính sách về chính trị', html: `<ul><li>Chia nước ta thành các quận, huyện (như Giao Chỉ, Cửu Chân, Nhật Nam), sáp nhập vào lãnh thổ phương Bắc.</li><li>Cử quan lại người Hán cai trị; xây thành, đặt quân đồn trú.</li></ul>` },
    { title: 'Chính sách kinh tế, văn hoá', html: `<p>Mục đích bóc lột và đồng hoá:</p>`,
      svg: S.table({ title: 'Chính sách cai trị', head: ['Lĩnh vực', 'Chính sách'], rows: [['Kinh tế', 'Thuế nặng, cống nạp sản vật quý'], ['Kinh tế', 'Độc quyền muối, sắt'], ['Văn hoá', 'Truyền chữ Hán, Nho giáo'], ['Văn hoá', 'Bắt theo phong tục người Hán']], colW: 250 }), caption: 'Cống nạp: ngọc trai, sừng tê, ngà voi…' },
    { title: 'Chuyển biến kinh tế, xã hội', html: `<ul><li>Dùng phổ biến công cụ sắt, cày bừa có trâu bò kéo; thuỷ lợi phát triển.</li><li>Thủ công: rèn sắt, làm giấy, dệt vải, gốm; xuất hiện một số trung tâm buôn bán (Luy Lâu, Long Biên).</li><li>Xã hội phân hoá; mâu thuẫn giữa nhân dân ta với chính quyền đô hộ ngày càng gay gắt.</li></ul>`,
      svg: S.timeline({ title: 'Thời kì Bắc thuộc', items: [{ y: '179 TCN', s: 'Triệu Đà chiếm Âu Lạc' }, { y: '40', s: 'Hai Bà Trưng' }, { y: '542', s: 'Lý Bí khởi nghĩa' }, { y: '938', s: 'Chiến thắng Bạch Đằng' }] }), caption: 'Hơn 1 000 năm đấu tranh giành độc lập.' },
    { title: 'Giữ gìn bản sắc', html: `<p>Người Việt vẫn giữ tiếng nói, phong tục (nhuộm răng, ăn trầu, thờ cúng tổ tiên), tiếp thu có chọn lọc văn hoá phương Bắc.</p>
      <div class="box key">Chính sách đồng hoá thất bại: “sông có thể cạn, núi có thể mòn” nhưng tiếng Việt vẫn còn.</div>` }
  ],
  summary: 'Thời Bắc thuộc (179 TCN – 938), phong kiến phương Bắc chia nước ta thành quận, huyện, cử quan lại cai trị, bắt nộp thuế và cống nạp nặng nề, độc quyền muối và sắt, truyền bá chữ Hán, Nho giáo, thực hiện đồng hoá. Kinh tế có chuyển biến (công cụ sắt, dùng trâu bò cày kéo, thủ công, buôn bán). Người Việt vẫn giữ được tiếng nói và phong tục.',
  examples: [
    { title: 'Mục đích', problem: 'Vì sao chính quyền đô hộ độc quyền muối và sắt?', solution: 'Để thu lợi và hạn chế nhân dân ta có công cụ, vũ khí bằng sắt.' },
    { title: 'Tính thời gian', problem: 'Hai Bà Trưng khởi nghĩa năm 40, Lý Bí khởi nghĩa năm 542. Cách nhau bao nhiêu năm?', solution: '542 − 40 = 502 năm.' },
    { title: 'Bản sắc', problem: 'Nêu bằng chứng chính sách đồng hoá thất bại.', solution: 'Người Việt giữ tiếng nói, tục nhuộm răng, ăn trầu, thờ cúng tổ tiên.' }
  ],
  exercises: [
    { question: 'Kể tên ba quận thời Hán trên đất nước ta.', hints: ['Giao…', 'Cửu…, Nhật…'], solution: 'Giao Chỉ, Cửu Chân, Nhật Nam.' },
    { question: 'Từ năm 542 đến năm 938 là bao nhiêu năm?', hints: ['Cùng Công nguyên.', '938 − 542.'], solution: '396 năm.' },
    { question: 'Nêu hai chuyển biến trong nông nghiệp thời Bắc thuộc.', hints: ['Công cụ.', 'Sức kéo.'], solution: 'Dùng phổ biến công cụ sắt; dùng trâu bò cày kéo; thuỷ lợi phát triển.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Chính quyền đô hộ phương Bắc thực hiện chính sách đồng hoá người Việt.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Chính quyền đô hộ độc quyền:', options: ['Muối và sắt', 'Lúa và gạo', 'Vải và lụa', 'Gỗ và đá'], answer: 0, explain: 'Muối, sắt.' },
    { type: 'short', q: 'Từ năm 40 đến năm 542 là bao nhiêu năm?', answer: '502', unit: 'năm', calc: '542-40', explain: '502.' },
    { type: 'mcq', q: 'Trung tâm buôn bán thời Bắc thuộc:', options: ['Luy Lâu', 'Hội An', 'Phố Hiến', 'Óc Eo'], answer: 0, explain: 'Luy Lâu.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Thời Bắc thuộc, người Việt mất hết tiếng nói và phong tục.', answer: false, explain: 'Vẫn giữ được.' },
    { type: 'short', q: 'Từ năm 542 đến năm 938 là bao nhiêu năm?', answer: '396', unit: 'năm', calc: '938-542', explain: '396.' },
    { type: 'mcq', q: 'Chữ viết được truyền bá vào nước ta thời Bắc thuộc:', options: ['Chữ Hán', 'Chữ Phạn', 'Chữ La-tinh', 'Chữ Nôm'], answer: 0, explain: 'Chữ Hán.' },
    { type: 'mcq', q: 'Thời kì Bắc thuộc kết thúc với sự kiện:', options: ['Chiến thắng Bạch Đằng 938', 'Khởi nghĩa Hai Bà Trưng', 'Lý Bí lập Vạn Xuân', 'Triệu Đà chiếm Âu Lạc'], answer: 0, explain: '938.' }
  ]
});
})();
