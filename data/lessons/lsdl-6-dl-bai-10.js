/* LS&ĐL 6 – Địa lí, Bài 10. Cấu tạo của Trái Đất. Các mảng kiến tạo. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-6/dl-bai-10', {
  objectives: [
    'Trình bày được cấu tạo của Trái Đất gồm ba lớp.',
    'Nêu được đặc điểm (độ dày, trạng thái, nhiệt độ) của từng lớp.',
    'Xác định được trên lược đồ các mảng kiến tạo lớn.',
    'Nêu được hệ quả của sự tách xa, xô vào nhau của các mảng.'
  ],
  intro: 'Lỗ khoan sâu nhất thế giới (bán đảo Côn-la, Nga) chỉ đạt khoảng 12 km, chưa bằng 1/500 quãng đường tới tâm Trái Đất. Vậy làm sao các nhà khoa học biết bên trong <b>Trái Đất</b> có những gì? Họ nghiên cứu sóng địa chấn truyền qua các lớp.',
  steps: [
    { title: 'Ba lớp cấu tạo', html: `<p>Từ ngoài vào trong:</p>`,
      svg: S.earthLayers({ title: 'Cấu tạo bên trong Trái Đất', layers: [{ name: 'Vỏ Trái Đất', sub: 'dày 5 – 70 km, rắn' }, { name: 'Man-ti', sub: 'dày khoảng 2 900 km' }, { name: 'Nhân', sub: 'ngoài lỏng, trong rắn; rất nóng' }], note: 'Hình cắt giản lược, không theo tỉ lệ.' }), caption: 'Càng vào sâu, nhiệt độ và áp suất càng tăng.' },
    { title: 'Vỏ Trái Đất', html: `<ul><li>Mỏng nhất, chỉ chiếm khoảng 1% thể tích, nhưng là nơi tồn tại sự sống và mọi hoạt động của con người.</li><li>Vỏ lục địa dày (tới khoảng 70 km), vỏ đại dương mỏng (khoảng 5 – 10 km).</li></ul>` },
    { title: 'Các mảng kiến tạo', html: `<p>Vỏ Trái Đất và phần trên của man-ti bị chia cắt thành các mảng lớn nhỏ, gọi là <b>mảng kiến tạo</b>. Bảy mảng lớn:</p>`,
      svg: S.table({ title: 'Bảy mảng kiến tạo lớn', head: ['Mảng', 'Ghi chú'], rows: [['Âu – Á', 'Việt Nam nằm trên mảng này'], ['Phi', 'Gồm lục địa Phi'], ['Ấn Độ – Ô-xtrây-li-a', 'Xô vào mảng Âu – Á'], ['Bắc Mỹ, Nam Mỹ', 'Hai mảng châu Mỹ'], ['Thái Bình Dương', 'Lớn nhất, chủ yếu là đáy đại dương'], ['Nam Cực', 'Bao quanh cực Nam']], colW: 250 }), caption: 'Các mảng di chuyển chậm, vài cm mỗi năm.' },
    { title: 'Hệ quả', html: `<ul><li>Hai mảng <b>tách xa</b>: mác-ma trào lên, hình thành sống núi ngầm đại dương.</li><li>Hai mảng <b>xô vào</b>: tạo núi cao, động đất, núi lửa (ví dụ dãy Hi-ma-lay-a).</li></ul>
      <div class="box key">Vỏ – Man-ti – Nhân; ranh giới các mảng là nơi hay xảy ra động đất, núi lửa.</div>` }
  ],
  summary: 'Trái Đất gồm ba lớp: vỏ (dày 5 – 70 km, rắn), man-ti (dày khoảng 2 900 km), nhân (ngoài lỏng, trong rắn, nhiệt độ rất cao). Vỏ Trái Đất và phần trên man-ti chia thành các mảng kiến tạo, gồm 7 mảng lớn: Âu – Á, Phi, Ấn Độ – Ô-xtrây-li-a, Bắc Mỹ, Nam Mỹ, Thái Bình Dương, Nam Cực. Các mảng tách xa hoặc xô vào nhau gây ra núi, động đất, núi lửa.',
  examples: [
    { title: 'Tỉ lệ', problem: 'Bán kính Trái Đất khoảng 6 370 km. Lỗ khoan 12 km bằng khoảng bao nhiêu phần trăm bán kính? (làm tròn 1 chữ số thập phân)', solution: '12 : 6 370 × 100 ≈ 0,2%.' },
    { title: 'Nhiệt độ theo độ sâu', problem: 'Trong vỏ Trái Đất, xuống sâu 100 m nhiệt độ tăng khoảng 3 °C. Mặt đất 25 °C, ở độ sâu 1 000 m khoảng bao nhiêu độ?', solution: '25 + 3 × 10 = 55 °C.' },
    { title: 'Mảng', problem: 'Việt Nam nằm trên mảng kiến tạo nào?', solution: 'Mảng Âu – Á.' }
  ],
  exercises: [
    { question: 'Kể tên ba lớp của Trái Đất từ ngoài vào trong.', hints: ['Lớp mỏng nhất ở ngoài.', 'Lớp ở tâm.'], solution: 'Vỏ Trái Đất, man-ti, nhân.' },
    { question: 'Mặt đất 20 °C. Mỗi 100 m sâu tăng 3 °C. Ở độ sâu 2 000 m khoảng bao nhiêu độ?', hints: ['2 000 : 100 = 20 lần.', '20 + 3 × 20.'], solution: '80 °C.' },
    { question: 'Hai mảng xô vào nhau gây ra hiện tượng gì?', hints: ['Địa hình.', 'Thiên tai.'], solution: 'Tạo núi, động đất, núi lửa.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Vỏ Trái Đất là lớp mỏng nhất trong ba lớp.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Lớp có trạng thái lỏng:', options: ['Nhân ngoài', 'Vỏ Trái Đất', 'Nhân trong', 'Vỏ đại dương'], answer: 0, explain: 'Nhân ngoài.' },
    { type: 'short', q: 'Mặt đất 25 °C, mỗi 100 m sâu tăng 3 °C. Ở độ sâu 1 000 m bao nhiêu độ C?', answer: '55', unit: '°C', calc: '25+3*1000/100', explain: '55.' },
    { type: 'mcq', q: 'Việt Nam nằm trên mảng:', options: ['Âu – Á', 'Thái Bình Dương', 'Phi', 'Nam Mỹ'], answer: 0, explain: 'Âu – Á.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Các mảng kiến tạo đứng yên tuyệt đối.', answer: false, explain: 'Di chuyển chậm.' },
    { type: 'short', q: 'Có bao nhiêu mảng kiến tạo lớn?', answer: '7', unit: 'mảng', calc: '7', explain: '7.' },
    { type: 'short', q: 'Mặt đất 20 °C, mỗi 100 m tăng 3 °C. Ở 2 000 m bao nhiêu độ C?', answer: '80', unit: '°C', calc: '20+3*2000/100', explain: '80.' },
    { type: 'mcq', q: 'Dãy núi hình thành do mảng Ấn Độ – Ô-xtrây-li-a xô vào mảng Âu – Á:', options: ['Hi-ma-lay-a', 'An-đét', 'An-pơ', 'U-ran'], answer: 0, explain: 'Hi-ma-lay-a.' }
  ]
});
})();
