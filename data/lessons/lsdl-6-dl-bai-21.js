/* LS&ĐL 6 – Địa lí, Bài 21. Biển và đại dương. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-6/dl-bai-21', {
  objectives: [
    'Xác định được trên bản đồ các đại dương thế giới.',
    'Nêu được sự khác biệt về nhiệt độ và độ muối giữa vùng biển nhiệt đới và ôn đới.',
    'Trình bày được các hiện tượng sóng, thuỷ triều, dòng biển.',
    'Tính được lượng muối dựa vào độ muối.'
  ],
  intro: 'Nếu lấy hết muối trong các đại dương rải đều lên lục địa, lớp muối sẽ dày hàng chục mét! Biển và đại dương chiếm khoảng 71% bề mặt Trái Đất, luôn chuyển động với <b>sóng, thuỷ triều, dòng biển</b>.',
  steps: [
    { title: 'Đại dương thế giới', html: `<p>Bốn đại dương chính (một số tài liệu tách thêm Nam Đại Dương):</p>`,
      svg: S.table({ title: 'Các đại dương', head: ['Đại dương', 'Ghi chú'], rows: [['Thái Bình Dương', 'Lớn nhất, sâu nhất'], ['Đại Tây Dương', 'Lớn thứ hai'], ['Ấn Độ Dương', 'Lớn thứ ba'], ['Bắc Băng Dương', 'Nhỏ nhất, phần lớn đóng băng']], colW: 250 }), caption: 'Biển Đông là một biển thuộc Thái Bình Dương.' },
    { title: 'Nhiệt độ và độ muối', html: `<ul><li>Độ muối trung bình nước đại dương khoảng <b>35‰</b> (35 g muối trong 1 lít nước).</li><li>Biển nhiệt đới: nhiệt độ cao, bốc hơi mạnh → độ muối thường cao hơn; biển ôn đới lạnh hơn, độ muối thường thấp hơn.</li><li>Nơi có nhiều sông đổ vào, mưa nhiều → độ muối thấp.</li></ul>` },
    { title: 'Chuyển động của nước biển', html: `<p>Ba hình thức:</p>`,
      svg: S.table({ title: 'Sóng, thuỷ triều, dòng biển', head: ['Hiện tượng', 'Nguyên nhân chính'], rows: [['Sóng biển', 'Gió (sóng thần: động đất đáy biển)'], ['Thuỷ triều', 'Sức hút của Mặt Trăng, Mặt Trời'], ['Dòng biển', 'Gió thổi thường xuyên']], colW: 250 }), caption: 'Dòng biển nóng làm khí hậu ven bờ ấm, ẩm; dòng lạnh làm khô, lạnh.' },
    { title: 'Ghi nhớ', html: `<div class="box key">Lượng muối (g) = độ muối (‰) × số lít nước.</div>` }
  ],
  summary: 'Đại dương thế giới gồm Thái Bình Dương (lớn nhất), Đại Tây Dương, Ấn Độ Dương, Bắc Băng Dương; biển và đại dương chiếm khoảng 71% bề mặt Trái Đất. Độ muối trung bình khoảng 35‰; biển nhiệt đới nóng hơn, thường mặn hơn biển ôn đới. Nước biển chuyển động: sóng (do gió), thuỷ triều (do sức hút Mặt Trăng, Mặt Trời), dòng biển (do gió thường xuyên).',
  examples: [
    { title: 'Lượng muối', problem: 'Nước biển độ muối 35‰. 10 lít chứa bao nhiêu gam muối?', solution: '35 × 10 = 350 g.' },
    { title: 'Biển Đông', problem: 'Biển Đông có độ muối khoảng 33‰. 20 lít chứa bao nhiêu gam muối?', solution: '33 × 20 = 660 g.' },
    { title: 'Nguyên nhân', problem: 'Vì sao có thuỷ triều?', solution: 'Do sức hút của Mặt Trăng và Mặt Trời đối với nước trên Trái Đất.' }
  ],
  exercises: [
    { question: 'Độ muối 35‰. Bao nhiêu lít nước biển chứa 1 050 g muối?', hints: ['Số lít = muối : 35.', '1 050 : 35.'], solution: '30 lít.' },
    { question: 'Kể tên bốn đại dương theo thứ tự diện tích giảm dần.', hints: ['Lớn nhất: Thái Bình Dương.', 'Nhỏ nhất: Bắc Băng Dương.'], solution: 'Thái Bình Dương, Đại Tây Dương, Ấn Độ Dương, Bắc Băng Dương.' },
    { question: 'Vì sao vùng cửa sông có độ muối thấp?', hints: ['Nước sông là nước gì?', 'Pha loãng.'], solution: 'Nước ngọt từ sông đổ ra làm loãng nước biển.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Thái Bình Dương là đại dương lớn nhất.', answer: true, explain: 'Đúng.' },
    { type: 'short', q: 'Độ muối 35‰. 10 lít nước biển chứa bao nhiêu gam muối?', answer: '350', unit: 'g', calc: '35*10', explain: '350.' },
    { type: 'mcq', q: 'Nguyên nhân chính sinh ra sóng biển:', options: ['Gió', 'Mặt Trăng', 'Núi lửa', 'Sông'], answer: 0, explain: 'Gió.' },
    { type: 'short', q: 'Bao nhiêu lít nước (35‰) chứa 1 050 g muối?', answer: '30', unit: 'lít', calc: '1050/35', explain: '30.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Thuỷ triều do gió gây ra.', answer: false, explain: 'Do sức hút Mặt Trăng, Mặt Trời.' },
    { type: 'mcq', q: 'Đại dương nhỏ nhất:', options: ['Bắc Băng Dương', 'Ấn Độ Dương', 'Đại Tây Dương', 'Thái Bình Dương'], answer: 0, explain: 'Bắc Băng Dương.' },
    { type: 'short', q: 'Độ muối 33‰. 20 lít chứa bao nhiêu gam muối?', answer: '660', unit: 'g', calc: '33*20', explain: '660.' },
    { type: 'mcq', q: 'Biển và đại dương chiếm khoảng bao nhiêu phần trăm bề mặt Trái Đất?', options: ['71%', '29%', '50%', '90%'], answer: 0, explain: '71%.' }
  ]
});
})();
