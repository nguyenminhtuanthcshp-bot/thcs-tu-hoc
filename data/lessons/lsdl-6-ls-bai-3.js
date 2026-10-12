/* LS&ĐL 6 – Lịch sử, Bài 3. Thời gian trong lịch sử. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-6/ls-bai-3', {
  objectives: [
    'Nêu được một số khái niệm thời gian: thập kỉ, thế kỉ, thiên niên kỉ, trước Công nguyên, Công nguyên, âm lịch, dương lịch.',
    'Hiểu cách tính thời gian theo Công lịch.',
    'Tính được khoảng cách thời gian giữa các sự kiện và xác định thế kỉ của một năm.',
    'Đọc được trục thời gian đơn giản.'
  ],
  intro: 'Trên tờ lịch treo tường nhà Lan có hai ngày: ngày dương lịch in to và ngày âm lịch in nhỏ. Lan thắc mắc: “Tại sao lại có hai loại lịch? Năm 938 thuộc thế kỉ mấy?”. Bài học này giúp em <b>tính thời gian trong lịch sử</b>.',
  steps: [
    { title: 'Âm lịch và dương lịch', html: `<ul><li><b>Âm lịch</b>: dựa vào sự di chuyển của Mặt Trăng quanh Trái Đất; một tháng khoảng 29–30 ngày.</li><li><b>Dương lịch</b>: dựa vào sự di chuyển của Trái Đất quanh Mặt Trời; một năm có 365 ngày (năm nhuận 366 ngày).</li><li><b>Công lịch</b>: dương lịch được nhiều nước dùng chung, lấy năm tương truyền Chúa Giê-xu ra đời làm năm 1 Công nguyên (CN).</li></ul>` },
    { title: 'Các đơn vị thời gian', html: `<p>Ghi nhớ:</p>`,
      svg: S.table({ title: 'Đơn vị tính thời gian', head: ['Đơn vị', 'Bằng'], rows: [['1 thập kỉ', '10 năm'], ['1 thế kỉ', '100 năm'], ['1 thiên niên kỉ', '1 000 năm'], ['Thế kỉ I', 'năm 1 đến năm 100'], ['Thế kỉ XXI', 'năm 2001 đến năm 2100']], colW: 250 }), caption: 'Thế kỉ thường viết bằng số La Mã.' },
    { title: 'Trước Công nguyên và Công nguyên', html: `<p>Năm trước năm 1 gọi là năm <b>trước Công nguyên (TCN)</b>, tính ngược về quá khứ. Năm càng lớn thì càng xa xưa.</p>`,
      svg: S.timeline({ title: 'Trục thời gian TCN – CN', items: [{ y: '3000 TCN', s: 'Rất xa xưa' }, { y: '208 TCN', s: 'Âu Lạc ra đời' }, { y: 'Năm 1', s: 'Mốc Công nguyên' }, { y: '40', s: 'Hai Bà Trưng' }, { y: '938', s: 'Bạch Đằng' }] }), caption: 'Bên trái năm 1 là TCN, bên phải là CN.' },
    { title: 'Cách xác định thế kỉ', html: `<p>Với năm CN: <b>thế kỉ = phần nguyên của (năm − 1) : 100, cộng 1</b>.</p><ul><li>Năm 938: (938 − 1) : 100 = 9,37 → 9 + 1 = thế kỉ X.</li><li>Năm 2000: (2000 − 1) : 100 = 19,99 → 19 + 1 = thế kỉ XX.</li><li>Năm 2026: thế kỉ XXI.</li></ul>
      <div class="box key">Khoảng cách giữa hai năm CN = năm sau − năm trước.</div>` }
  ],
  summary: 'Âm lịch dựa vào chuyển động của Mặt Trăng quanh Trái Đất; dương lịch dựa vào chuyển động của Trái Đất quanh Mặt Trời. Công lịch lấy năm 1 làm mốc Công nguyên; năm trước đó là TCN. 1 thập kỉ = 10 năm, 1 thế kỉ = 100 năm, 1 thiên niên kỉ = 1 000 năm. Thế kỉ của năm n (CN) là phần nguyên của (n − 1) : 100 cộng 1.',
  examples: [
    { title: 'Xác định thế kỉ', problem: 'Năm 544 (Lý Bí lập nước Vạn Xuân) thuộc thế kỉ nào?', solution: '(544 − 1) : 100 = 5,43 → thế kỉ VI.' },
    { title: 'Khoảng cách', problem: 'Từ khởi nghĩa Hai Bà Trưng (40) đến chiến thắng Bạch Đằng (938) bao nhiêu năm?', solution: '938 − 40 = 898 năm.' },
    { title: 'So sánh TCN', problem: 'Năm 700 TCN và năm 208 TCN, năm nào xa xưa hơn?', solution: 'Năm 700 TCN (số lớn hơn thì xa hơn).' }
  ],
  exercises: [
    { question: 'Năm 1945 thuộc thế kỉ nào? Năm 2001 thuộc thế kỉ nào?', hints: ['Dùng công thức (n − 1) : 100.', 'Lấy phần nguyên rồi cộng 1.'], solution: 'Năm 1945: thế kỉ XX; năm 2001: thế kỉ XXI.' },
    { question: 'Chiến thắng Bạch Đằng năm 938. Đến năm 2026 là bao nhiêu năm, khoảng bao nhiêu thế kỉ?', hints: ['2026 − 938.', 'Chia 100.'], solution: '1 088 năm, khoảng hơn 10 thế kỉ.' },
    { question: 'Vì sao trên lịch Việt Nam ghi cả âm lịch và dương lịch?', hints: ['Công việc, học tập dùng lịch nào?', 'Lễ Tết dùng lịch nào?'], solution: 'Dương lịch dùng trong công việc, giao dịch quốc tế; âm lịch dùng cho lễ Tết, mùa vụ, phong tục truyền thống.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Một thế kỉ bằng 100 năm.', answer: true, explain: 'Đúng.' },
    { type: 'short', q: 'Năm 938 thuộc thế kỉ thứ mấy? (ghi số)', answer: '10', calc: 'Math.floor((938-1)/100)+1', explain: 'Thế kỉ X.' },
    { type: 'mcq', q: 'Âm lịch dựa vào chuyển động của:', options: ['Mặt Trăng quanh Trái Đất', 'Trái Đất quanh Mặt Trời', 'Mặt Trời quanh Trái Đất', 'Các ngôi sao'], answer: 0, explain: 'Mặt Trăng.' },
    { type: 'short', q: 'Từ năm 40 đến năm 938 là bao nhiêu năm?', answer: '898', unit: 'năm', calc: '938-40', explain: '898.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Năm 500 TCN gần ngày nay hơn năm 100 TCN.', answer: false, explain: 'Số TCN lớn hơn thì xa hơn.' },
    { type: 'short', q: 'Một thiên niên kỉ bằng bao nhiêu năm?', answer: '1000', answerText: '1 000', unit: 'năm', calc: '1000', explain: '1 000.' },
    { type: 'short', q: 'Năm 2026 thuộc thế kỉ thứ mấy? (ghi số)', answer: '21', calc: 'Math.floor((2026-1)/100)+1', explain: 'Thế kỉ XXI.' },
    { type: 'mcq', q: 'Năm 2000 thuộc thế kỉ:', options: ['XX', 'XXI', 'XIX', 'XXII'], answer: 0, explain: 'Thế kỉ XX (1901–2000).' }
  ]
});
})();
