/* LS&ĐL 7 – Lịch sử, Bài 1. Chế độ phong kiến ở Tây Âu. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-7/ls-bai-1', {
  objectives: [
    'Kể lại được những sự kiện chủ yếu về quá trình hình thành xã hội phong kiến ở Tây Âu.',
    'Trình bày được đặc điểm của lãnh địa phong kiến và quan hệ xã hội của chế độ phong kiến Tây Âu.',
    'Phân tích được vai trò của thành thị trung đại.',
    'Mô tả được sơ lược sự ra đời của Thiên Chúa giáo.'
  ],
  intro: 'Những toà lâu đài đá có tường cao, hào sâu vẫn còn rải rác khắp nước Pháp, nước Đức. Mỗi toà lâu đài từng là trung tâm của một <b>lãnh địa phong kiến</b> – “vương quốc thu nhỏ” của một lãnh chúa.',
  steps: [
    { title: 'Sự hình thành', html: `<p>Năm <b>476</b>, đế quốc Tây La Mã sụp đổ trước sự tấn công của người Giéc-man. Họ chiếm ruộng đất, phong tước cho nhau, hình thành tầng lớp <b>lãnh chúa</b>; nô lệ và nông dân mất đất trở thành <b>nông nô</b>.</p>`,
      svg: S.flowchart({ title: 'Xã hội phong kiến Tây Âu hình thành', steps: [{ t: 'start', s: 'Tây La Mã sụp đổ' }, { t: 'proc', s: 'Giéc-man chia đất' }, { t: 'proc', s: 'Lãnh chúa ra đời' }, { t: 'end', s: 'Nông nô lệ thuộc' }] }), caption: 'Quá trình diễn ra từ cuối thế kỉ V.' },
    { title: 'Lãnh địa phong kiến', html: `<ul><li>Vùng đất rộng do lãnh chúa làm chủ, có lâu đài, nhà thờ, ruộng đất, làng nông nô.</li><li>Kinh tế <b>tự cấp tự túc</b>, đóng kín.</li><li>Lãnh chúa có quyền như một “ông vua” riêng: thu thuế, xử án, có quân đội.</li></ul>` },
    { title: 'Quan hệ xã hội', html: `<p>Hai giai cấp chính:</p>`,
      svg: S.table({ title: 'Hai giai cấp cơ bản', head: ['Lãnh chúa', 'Nông nô'], rows: [['Có ruộng đất, lâu đài', 'Không có ruộng đất'], ['Sống sung sướng, bóc lột', 'Nộp tô thuế nặng nề'], ['Nắm quyền cai trị', 'Lệ thuộc vào lãnh chúa']], colW: 250 }), caption: 'Quan hệ bóc lột lãnh chúa – nông nô.' },
    { title: 'Thành thị và Thiên Chúa giáo', html: `<p>Từ thế kỉ XI, thủ công nghiệp phát triển, <b>thành thị trung đại</b> xuất hiện, phá vỡ kinh tế tự cấp, thúc đẩy buôn bán. Thiên Chúa giáo (Ki-tô giáo) chi phối đời sống tinh thần, Giáo hội có nhiều ruộng đất.</p>
      <div class="box key">Lãnh địa: tự cấp tự túc. Thành thị: hàng hoá, tự do buôn bán.</div>` }
  ],
  summary: 'Năm 476 Tây La Mã sụp đổ; người Giéc-man chia ruộng đất, hình thành lãnh chúa và nông nô – xã hội phong kiến Tây Âu ra đời. Lãnh địa là đơn vị kinh tế, chính trị độc lập, tự cấp tự túc. Từ thế kỉ XI, thành thị trung đại xuất hiện, thúc đẩy sản xuất và buôn bán. Thiên Chúa giáo chi phối đời sống tinh thần.',
  examples: [
    { title: 'Đặc điểm', problem: 'Vì sao nói lãnh địa là “vương quốc thu nhỏ”?', solution: 'Lãnh chúa có toàn quyền: đất đai, quân đội, thu thuế, xử án; kinh tế tự cấp tự túc.' },
    { title: 'Thời gian', problem: 'Năm 476 thuộc thế kỉ nào?', solution: 'Thế kỉ V.' },
    { title: 'Vai trò thành thị', problem: 'Thành thị trung đại có vai trò gì?', solution: 'Thúc đẩy sản xuất hàng hoá, buôn bán, phá vỡ kinh tế tự cấp tự túc của lãnh địa.' }
  ],
  exercises: [
    { question: 'Nêu hai giai cấp cơ bản của xã hội phong kiến Tây Âu.', hints: ['Người có đất.', 'Người cày thuê.'], solution: 'Lãnh chúa và nông nô.' },
    { question: 'Từ năm 476 đến thế kỉ XI (năm 1001) khoảng bao nhiêu năm?', hints: ['1001 − 476.', 'Hơn 500.'], solution: '525 năm.' },
    { question: 'Vì sao kinh tế lãnh địa gọi là tự cấp tự túc?', hints: ['Tự sản xuất.', 'Ít trao đổi.'], solution: 'Lãnh địa tự sản xuất hầu hết mọi thứ cần dùng, rất ít trao đổi với bên ngoài.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Năm 476, đế quốc Tây La Mã sụp đổ.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Hai giai cấp cơ bản của xã hội phong kiến Tây Âu:', options: ['Lãnh chúa và nông nô', 'Địa chủ và tá điền', 'Chủ nô và nô lệ', 'Tư sản và vô sản'], answer: 0, explain: 'Đúng.' },
    { type: 'short', q: 'Năm 476 thuộc thế kỉ thứ mấy? (ghi số)', answer: '5', calc: 'Math.floor((476-1)/100)+1', explain: 'V.' },
    { type: 'mcq', q: 'Đặc điểm kinh tế lãnh địa:', options: ['Tự cấp tự túc', 'Buôn bán quốc tế', 'Công nghiệp hiện đại', 'Kinh tế thị trường'], answer: 0, explain: 'Tự cấp.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Thành thị trung đại làm kinh tế lãnh địa đóng kín hơn.', answer: false, explain: 'Phá vỡ tính đóng kín.' },
    { type: 'short', q: 'Từ năm 476 đến năm 1001 là bao nhiêu năm?', answer: '525', unit: 'năm', calc: '1001-476', explain: '525.' },
    { type: 'mcq', q: 'Tộc người lập nhiều vương quốc trên đất Tây La Mã cũ:', options: ['Giéc-man', 'Mông Cổ', 'A-ri-a', 'Xu-me'], answer: 0, explain: 'Giéc-man.' },
    { type: 'mcq', q: 'Tôn giáo chi phối đời sống tinh thần Tây Âu trung đại:', options: ['Thiên Chúa giáo', 'Phật giáo', 'Hồi giáo', 'Nho giáo'], answer: 0, explain: 'Thiên Chúa giáo.' }
  ]
});
})();
