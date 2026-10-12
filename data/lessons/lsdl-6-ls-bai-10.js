/* LS&ĐL 6 – Lịch sử, Bài 10. Hy Lạp và La Mã cổ đại. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-6/ls-bai-10', {
  objectives: [
    'Giới thiệu được tác động của điều kiện tự nhiên (hải cảng, biển đảo) đối với sự hình thành nền văn minh Hy Lạp và La Mã.',
    'Trình bày được tổ chức nhà nước thành bang, nhà nước đế chế ở Hy Lạp và La Mã.',
    'Nêu được một số thành tựu văn hoá tiêu biểu của Hy Lạp, La Mã.',
    'Trân trọng những đóng góp của văn minh cổ đại phương Tây.'
  ],
  intro: 'Mỗi kì Thế vận hội (Olympic), ngọn đuốc được thắp ở Ô-lim-pi-a (Hy Lạp) rồi rước đến nước chủ nhà. Truyền thống ấy bắt nguồn từ các cuộc thi đấu thể thao của người <b>Hy Lạp cổ đại</b>, bắt đầu được ghi chép từ năm 776 TCN.',
  steps: [
    { title: 'Điều kiện tự nhiên', html: `<ul><li>Hy Lạp (bán đảo Ban-căng) và La Mã (bán đảo I-ta-li-a) nằm ven Địa Trung Hải; đồng bằng nhỏ hẹp, đất kém màu mỡ.</li><li>Bờ biển khúc khuỷu, nhiều vịnh, hải cảng tốt → thuận lợi phát triển <b>thủ công nghiệp và thương nghiệp đường biển</b>.</li></ul>`,
      svg: S.sketchMap({ title: 'Hy Lạp và La Mã cổ đại', areas: [{ pts: [[120, 40], [200, 60], [230, 140], [280, 230], [250, 250], [200, 170], [150, 110]], fill: '#fde68a', label: 'LA MÃ', lx: 175, ly: 95 }, { pts: [[360, 70], [430, 80], [440, 150], [410, 220], [380, 210], [370, 150]], fill: '#bbf7d0', label: 'HY LẠP', lx: 405, ly: 120 }], points: [{ x: 218, y: 168, label: 'Rô-ma' }, { x: 410, y: 180, label: 'A-ten' }], note: 'Lược đồ giản lược, không theo tỉ lệ; vùng nước là Địa Trung Hải.' }), caption: 'Hai bán đảo ven Địa Trung Hải.' },
    { title: 'Tổ chức nhà nước', html: `<ul><li><b>Hy Lạp</b>: nhiều <b>thành bang</b> độc lập; tiêu biểu là A-ten với nền <b>dân chủ chủ nô</b> – Đại hội nhân dân quyết định việc lớn (nhưng nô lệ, phụ nữ không có quyền).</li><li><b>La Mã</b>: từ thành bang Rô-ma phát triển thành nước cộng hoà, đến năm <b>27 TCN</b> trở thành đế chế do hoàng đế đứng đầu; đế quốc Tây La Mã sụp đổ năm <b>476</b>.</li></ul>` },
    { title: 'Thành tựu văn hoá', html: `<p>Nhiều thành tựu nổi bật:</p>`,
      svg: S.table({ title: 'Thành tựu tiêu biểu', head: ['Lĩnh vực', 'Thành tựu'], rows: [['Chữ viết', 'Hệ chữ cái La-tinh (A, B, C…)'], ['Khoa học', 'Py-ta-go, Ác-si-mét'], ['Văn học', 'Sử thi I-li-át, Ô-đi-xê (Hô-me)'], ['Kiến trúc', 'Đền Pác-tê-nông, đấu trường Cô-li-dê'], ['Thể thao', 'Thế vận hội Ô-lim-pích']], colW: 250 }), caption: 'Chữ cái La-tinh là cơ sở của chữ Quốc ngữ.' },
    { title: 'Ý nghĩa', html: `<p>Văn minh Hy Lạp, La Mã đặt nền móng cho văn minh phương Tây: dân chủ, luật pháp, khoa học, nghệ thuật, thể thao.</p>
      <div class="box key">Biển → thương nghiệp → thành bang giàu mạnh → văn hoá rực rỡ.</div>` }
  ],
  summary: 'Hy Lạp và La Mã ven Địa Trung Hải, đất ít màu mỡ nhưng nhiều hải cảng, thủ công nghiệp và thương nghiệp đường biển phát triển. Hy Lạp gồm nhiều thành bang, tiêu biểu là A-ten với nền dân chủ chủ nô; La Mã từ cộng hoà trở thành đế chế (27 TCN), Tây La Mã sụp đổ năm 476. Thành tựu: chữ cái La-tinh, toán học (Py-ta-go, Ác-si-mét), sử thi của Hô-me, đền Pác-tê-nông, đấu trường Cô-li-dê, Thế vận hội.',
  examples: [
    { title: 'So sánh', problem: 'Điều kiện tự nhiên của Hy Lạp khác Ai Cập thế nào?', solution: 'Ai Cập có đồng bằng phù sa màu mỡ (nông nghiệp); Hy Lạp đất xấu nhưng nhiều hải cảng (thương nghiệp).' },
    { title: 'Tính thời gian', problem: 'Thế vận hội cổ đại được ghi chép từ năm 776 TCN; Tây La Mã sụp đổ năm 476. Năm 476 thuộc thế kỉ nào?', solution: 'Thế kỉ V.' },
    { title: 'Liên hệ', problem: 'Thành tựu nào của Hy Lạp, La Mã em đang dùng hằng ngày?', solution: 'Chữ cái La-tinh (chữ Quốc ngữ), định lí Py-ta-go trong toán học.' }
  ],
  exercises: [
    { question: 'Vì sao nền dân chủ A-ten là “dân chủ chủ nô”?', hints: ['Ai được tham gia?', 'Nô lệ thì sao?'], solution: 'Chỉ công dân nam tự do có quyền; nô lệ, phụ nữ, kiều dân không có quyền.' },
    { question: 'Thế vận hội hiện đại tổ chức 4 năm một lần. Trong 20 năm có bao nhiêu kì?', hints: ['Chia 20 cho 4.', '20 : 4.'], solution: '5 kì.' },
    { question: 'Kể tên hai nhà khoa học Hy Lạp cổ đại.', hints: ['Định lí tam giác vuông.', 'Lực đẩy chất lỏng.'], solution: 'Py-ta-go, Ác-si-mét.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hy Lạp cổ đại có nhiều hải cảng, thuận lợi cho thương nghiệp đường biển.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Thành bang tiêu biểu với nền dân chủ chủ nô:', options: ['A-ten', 'Rô-ma', 'Ba-bi-lon', 'Mem-phít'], answer: 0, explain: 'A-ten.' },
    { type: 'short', q: 'Năm 476 thuộc thế kỉ thứ mấy? (ghi số)', answer: '5', calc: 'Math.floor((476-1)/100)+1', explain: 'Thế kỉ V.' },
    { type: 'mcq', q: 'Tác giả sử thi I-li-át và Ô-đi-xê:', options: ['Hô-me', 'Py-ta-go', 'Ác-si-mét', 'Xê-da'], answer: 0, explain: 'Hô-me.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Chữ Quốc ngữ của Việt Nam dùng hệ chữ cái La-tinh.', answer: true, explain: 'Đúng.' },
    { type: 'short', q: 'Thế vận hội 4 năm/lần. Trong 20 năm có bao nhiêu kì?', answer: '5', unit: 'kì', calc: '20/4', explain: '5.' },
    { type: 'mcq', q: 'La Mã trở thành đế chế từ năm:', options: ['27 TCN', '221 TCN', '476', '3200 TCN'], answer: 0, explain: '27 TCN.' },
    { type: 'mcq', q: 'Công trình kiến trúc của La Mã:', options: ['Đấu trường Cô-li-dê', 'Kim tự tháp', 'Vạn Lý Trường Thành', 'Đại bảo tháp San-chi'], answer: 0, explain: 'Cô-li-dê.' }
  ]
});
})();
