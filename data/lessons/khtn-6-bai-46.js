/* KHTN 6 – Bài 46. Năng lượng và sự truyền năng lượng. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-6/bai-46', {
  objectives: [
    'Nêu được năng lượng đặc trưng cho khả năng tác dụng lực (thực hiện công việc, làm biến đổi vật).',
    'Lấy được ví dụ về sự truyền năng lượng từ vật này sang vật khác.',
    'Nêu được đơn vị năng lượng là jun (J), kilojun (kJ) và đổi được giữa hai đơn vị.'
  ],
  intro: 'Cơ thể cần ăn để có sức học tập, vui chơi; xe máy cần xăng để chạy; quạt cần điện để quay. Thức ăn, xăng, điện đều cung cấp <b>năng lượng</b>.',
  steps: [
    { title: 'Năng lượng là gì?', html: `<p>Một vật có <b>năng lượng</b> khi nó có khả năng <b>tác dụng lực</b> lên vật khác – làm vật khác chuyển động, biến dạng – hoặc làm nóng vật khác.</p>
      <ul><li>Gió có năng lượng: làm quay cánh quạt gió, đẩy thuyền buồm.</li><li>Dòng nước chảy có năng lượng: làm quay tua-bin, cuốn trôi vật.</li><li>Ngọn lửa có năng lượng: đun sôi nước.</li></ul>
      <div class="box key">Năng lượng đặc trưng cho khả năng tác dụng lực (khả năng thực hiện công việc).</div>` },
    { title: 'Đơn vị năng lượng', html: `<p>Đơn vị năng lượng là <b>jun</b>, kí hiệu <b>J</b>. Ngoài ra thường dùng <b>kilojun (kJ)</b>: <b>1 kJ = 1 000 J</b>.</p>
      <p>Trên bao bì thực phẩm thường ghi năng lượng bằng kJ và kcal (kilocalo): 1 kcal ≈ 4,2 kJ. Ví dụ: 100 g cơm cung cấp khoảng 540 kJ (khoảng 130 kcal).</p>` },
    { title: 'Sự truyền năng lượng', html: `<p>Năng lượng có thể được <b>truyền</b> từ vật này sang vật khác, từ nơi này đến nơi khác:</p>
      <ul><li>Mặt Trời truyền năng lượng (ánh sáng, nhiệt) tới Trái Đất.</li><li>Chân truyền năng lượng cho quả bóng khi đá.</li><li>Bếp truyền năng lượng nhiệt cho nồi nước.</li><li>Dây điện truyền năng lượng điện từ nhà máy đến nhà em.</li></ul>`,
      svg: S.flow({ items: ['Thức ăn', 'Cơ thể người', 'Chân đá bóng', 'Quả bóng bay đi'], w: 620, size: 14 }).replace('Sơ đồ các bước', 'Năng lượng truyền từ thức ăn tới quả bóng'),
      caption: 'Năng lượng từ thức ăn được cơ thể sử dụng và truyền cho quả bóng.' },
    { title: 'Năng lượng và nhiên liệu', html: `<p><b>Nhiên liệu</b> (than, xăng, dầu, khí gas, củi…) khi bị đốt cháy sẽ giải phóng năng lượng nhiệt và ánh sáng. Muốn nhiên liệu cháy cần có <b>oxygen</b> và nhiệt độ đủ cao.</p>
      <p>Thức ăn là "nhiên liệu" của cơ thể: cung cấp năng lượng cho mọi hoạt động sống.</p>` }
  ],
  summary: 'Năng lượng đặc trưng cho khả năng tác dụng lực, làm vật chuyển động, biến dạng hoặc nóng lên. Đơn vị năng lượng là jun (J); 1 kJ = 1 000 J. Năng lượng có thể truyền từ vật này sang vật khác (Mặt Trời → Trái Đất, bếp → nồi, chân → quả bóng). Nhiên liệu khi cháy giải phóng năng lượng.',
  examples: [
    { title: 'Đổi đơn vị', problem: 'Đổi 2,5 kJ ra J và 4 200 J ra kJ.', solution: '2,5 kJ = 2,5 × 1 000 = <b>2 500 J</b>. 4 200 J = 4 200 : 1 000 = <b>4,2 kJ</b>.' },
    { title: 'Nhận biết năng lượng', problem: 'Giải thích vì sao mỗi vật sau có năng lượng: a) Viên bi đang lăn; b) Lò xo đang bị nén; c) Cốc nước nóng.', solution: 'a) Viên bi đang lăn có thể đẩy viên bi khác chuyển động. b) Lò xo bị nén khi thả ra có thể bật đẩy vật đi. c) Cốc nước nóng có thể làm nóng thìa, làm tan cục đá. Cả ba đều có khả năng tác dụng lực hoặc làm nóng vật khác nên <b>đều có năng lượng</b>.' },
    { title: 'Truyền năng lượng', problem: 'Khi đun nước bằng bếp gas, năng lượng được truyền như thế nào?', solution: 'Gas cháy tạo ngọn lửa → năng lượng nhiệt truyền qua đáy nồi → truyền vào nước, làm nước nóng lên.' }
  ],
  exercises: [
    { question: 'Một gói bánh ghi "Năng lượng: 2 000 kJ". Đổi ra jun.', hints: ['1 kJ = 1 000 J.', 'Nhân 2 000 với 1 000.'], solution: '2 000 × 1 000 = <b>2 000 000 J</b>.' },
    { question: 'Nêu hai ví dụ về sự truyền năng lượng trong đời sống hằng ngày.', hints: ['Nghĩ về bếp, ánh nắng.', 'Nghĩ về trò chơi với bóng.'], solution: 'Ví dụ: ánh nắng Mặt Trời làm nóng mặt đường (Mặt Trời → mặt đường); bàn là nóng làm phẳng quần áo (bàn là → vải); tay ném bóng (tay → quả bóng).' },
    { question: 'Vì sao nói gió có năng lượng? Nêu một ứng dụng.', hints: ['Gió có thể tác dụng lực lên vật nào?', 'Có máy nào quay nhờ gió?'], solution: 'Gió tác dụng lực đẩy được thuyền buồm, làm quay cánh quạt – tức là có năng lượng. Ứng dụng: <b>tua-bin gió</b> phát điện, thuyền buồm, cối xay gió.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Đơn vị đo năng lượng là:', options: ['Jun (J)', 'Niutơn (N)', 'Mét (m)', 'Kilôgam (kg)'], answer: 0, explain: 'Năng lượng đo bằng jun.' },
    { type: 'short', q: 'Đổi 3 kJ ra J.', answer: '3000', unit: 'J', calc: '3*1000', explain: '3 × 1 000 = 3 000 J.' },
    { type: 'short', q: 'Đổi 1 500 J ra kJ (dùng dấu phẩy).', answer: '1,5', unit: 'kJ', calc: '1500/1000', explain: '1 500 : 1 000 = 1,5 kJ.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Năng lượng có thể truyền từ vật này sang vật khác.', answer: true, explain: 'Ví dụ bếp truyền nhiệt cho nồi.' },
    { type: 'mcq', q: 'Năng lượng từ Mặt Trời truyền tới Trái Đất chủ yếu dưới dạng:', options: ['Ánh sáng và nhiệt', 'Âm thanh', 'Điện qua dây dẫn', 'Gió'], answer: 0, explain: 'Mặt Trời phát ánh sáng và nhiệt.' },
    { type: 'mcq', q: 'Vật nào dưới đây có thể làm vật khác chuyển động nhờ chính sự chuyển động của nó?', options: ['Dòng nước lũ đang chảy xiết', 'Cuốn sách nằm yên trên sàn', 'Hòn sỏi nằm dưới đáy chậu', 'Chiếc ghế đặt trên sàn'], answer: 0, explain: 'Dòng nước chảy có thể cuốn trôi vật.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: 1 kJ = 100 J.', answer: false, explain: '1 kJ = 1 000 J.' },
    { type: 'mcq', q: 'Thức ăn cung cấp cho cơ thể:', options: ['Năng lượng để hoạt động', 'Chỉ nước', 'Chỉ khí oxygen', 'Lực hấp dẫn'], answer: 0, explain: 'Thức ăn là nguồn năng lượng của cơ thể.' }
  ]
});
})();
