/* KHTN 8 – Bài 28. Sự truyền nhiệt. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-8/bai-28', {
  objectives: [
    'Nêu được năng lượng nhiệt truyền từ vật nóng hơn sang vật lạnh hơn.',
    'Mô tả được ba hình thức truyền nhiệt: dẫn nhiệt, đối lưu, bức xạ nhiệt.',
    'Phân biệt được vật dẫn nhiệt tốt và vật dẫn nhiệt kém.',
    'Giải thích được một số hiện tượng và ứng dụng của sự truyền nhiệt trong đời sống.'
  ],
  intro: 'Cầm thìa kim loại khuấy cốc trà nóng, một lúc sau cán thìa cũng nóng. Nước trong nồi được đun ở đáy nhưng cả nồi đều sôi. Mặt Trời ở cách xa hàng trăm triệu kilômét vẫn sưởi ấm Trái Đất. Nhiệt đã truyền đi bằng những cách nào?',
  steps: [
    { title: 'Chiều truyền năng lượng nhiệt', html: `<p>Năng lượng nhiệt luôn tự truyền từ vật có nhiệt độ <b>cao hơn</b> sang vật có nhiệt độ <b>thấp hơn</b>. Quá trình dừng lại khi hai vật có nhiệt độ bằng nhau.</p>
      <p>Ví dụ: thả thìa inox lạnh vào cốc nước nóng, thìa nóng lên, nước nguội bớt.</p>` },
    { title: 'Dẫn nhiệt', html: `<p><b>Dẫn nhiệt</b> là sự truyền năng lượng nhiệt trực tiếp từ các phân tử có động năng lớn hơn sang các phân tử có động năng nhỏ hơn (từ phần nóng sang phần lạnh của vật, hoặc từ vật này sang vật khác khi tiếp xúc).</p>
      <ul><li>Chất rắn dẫn nhiệt tốt; kim loại dẫn nhiệt tốt nhất (bạc, đồng, nhôm…).</li><li>Chất lỏng, chất khí dẫn nhiệt kém; không khí dẫn nhiệt rất kém.</li></ul>`,
      svg: S.heatTransfer('dan'), caption: 'Đun một đầu thanh kim loại: các đinh gắn bằng sáp rơi dần từ đầu gần ngọn lửa ra xa.' },
    { title: 'Đối lưu', html: `<p><b>Đối lưu</b> là sự truyền nhiệt nhờ tạo thành các dòng chất lỏng hoặc chất khí. Phần chất lỏng ở đáy nóng lên, nở ra, nhẹ đi nên đi lên; phần lạnh ở trên nặng hơn đi xuống, tạo thành dòng đối lưu.</p>
      <p>Đối lưu là hình thức truyền nhiệt chủ yếu của chất lỏng và chất khí. Ví dụ: đun nước, gió biển, máy điều hoà đặt ở trên cao, bóng đèn kéo quân.</p>`,
      svg: S.heatTransfer('doi-luu') },
    { title: 'Bức xạ nhiệt', html: `<p><b>Bức xạ nhiệt</b> là sự truyền nhiệt bằng các tia nhiệt đi thẳng. Bức xạ nhiệt có thể xảy ra cả trong chân không.</p>
      <p>Vật có bề mặt sẫm màu, xù xì hấp thụ bức xạ nhiệt tốt; vật có bề mặt sáng màu, nhẵn bóng phản xạ bức xạ nhiệt tốt.</p>`,
      svg: S.heatTransfer('buc-xa'), caption: 'Năng lượng nhiệt từ Mặt Trời truyền đến Trái Đất bằng bức xạ nhiệt qua khoảng chân không.' },
    { title: 'Ứng dụng', html: `<ul><li>Nồi, xoong làm bằng kim loại (dẫn nhiệt tốt), quai và vung bằng nhựa, gỗ (dẫn nhiệt kém).</li><li>Áo bông, chăn bông giữ ấm vì chứa nhiều không khí (dẫn nhiệt kém).</li><li>Mùa hè nên mặc áo sáng màu để phản xạ bớt bức xạ nhiệt.</li><li>Phích (bình giữ nhiệt): lớp chân không giữa hai vỏ ngăn dẫn nhiệt, đối lưu; mặt tráng bạc phản xạ bức xạ nhiệt.</li></ul>` }
  ],
  summary: 'Nhiệt truyền từ vật nóng hơn sang vật lạnh hơn. Dẫn nhiệt: chủ yếu ở chất rắn (kim loại tốt nhất). Đối lưu: tạo dòng chất lỏng, chất khí. Bức xạ nhiệt: tia nhiệt đi thẳng, xảy ra cả trong chân không; bề mặt sẫm màu hấp thụ tốt.',
  examples: [
    { title: 'Chọn hình thức truyền nhiệt', problem: 'Hình thức truyền nhiệt chủ yếu trong mỗi trường hợp: a) cán nồi nóng lên; b) nước trong nồi nóng đều; c) sưởi ấm bên đống lửa.', solution: 'a) Dẫn nhiệt; b) đối lưu; c) bức xạ nhiệt.' },
    { title: 'Giải thích', problem: 'Vì sao máy điều hoà nhiệt độ thường được lắp ở trên cao trong phòng?', solution: 'Không khí lạnh từ máy nặng hơn nên đi xuống, không khí nóng nhẹ hơn đi lên, tạo dòng đối lưu làm mát cả phòng.' },
    { title: 'Màu áo', problem: 'Mùa hè nên mặc áo màu trắng hay màu đen khi đi ngoài nắng? Vì sao?', solution: 'Áo màu trắng, vì bề mặt sáng màu phản xạ bức xạ nhiệt tốt, hấp thụ ít nhiệt hơn áo đen.' }
  ],
  exercises: [
    { question: 'Vì sao về mùa đông mặc nhiều áo mỏng ấm hơn mặc một áo dày có cùng khối lượng?', hints: ['Giữa các lớp áo có gì?', 'Không khí dẫn nhiệt thế nào?'], solution: 'Giữa các lớp áo mỏng có nhiều lớp không khí dẫn nhiệt kém, giúp giữ nhiệt cơ thể tốt hơn.' },
    { question: 'Khi đun nước, nên đặt dây đốt nóng (hoặc ngọn lửa) ở đáy hay ở trên miệng ấm? Vì sao?', hints: ['Nước nóng đi lên hay đi xuống?', 'Đối lưu.'], solution: 'Ở đáy ấm: nước ở đáy nóng lên, đi lên; nước lạnh đi xuống, tạo dòng đối lưu làm nóng đều cả ấm.' },
    { question: 'Vì sao trong chân không không có dẫn nhiệt và đối lưu nhưng vẫn có bức xạ nhiệt?', hints: ['Dẫn nhiệt, đối lưu cần các phân tử vật chất.', 'Tia nhiệt truyền đi thẳng.'], solution: 'Dẫn nhiệt và đối lưu cần phân tử chất; chân không không có phân tử. Bức xạ nhiệt truyền bằng tia nhiệt nên đi qua được chân không.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Năng lượng nhiệt tự truyền từ vật lạnh hơn sang vật nóng hơn.', answer: false, explain: 'Nhiệt tự truyền từ vật nóng hơn sang vật lạnh hơn.' },
    { type: 'mcq', q: 'Hình thức truyền nhiệt chủ yếu của chất lỏng và chất khí là:', options: ['dẫn nhiệt', 'đối lưu', 'bức xạ nhiệt', 'bay hơi'], answer: 1, explain: 'Đối lưu tạo dòng chất lỏng, khí.' },
    { type: 'mcq', q: 'Nhiệt từ Mặt Trời truyền đến Trái Đất chủ yếu bằng:', options: ['dẫn nhiệt', 'đối lưu', 'bức xạ nhiệt', 'cả dẫn nhiệt và đối lưu'], answer: 2, explain: 'Giữa Mặt Trời và Trái Đất là khoảng chân không.' },
    { type: 'short', q: 'Thả thìa ở 25 °C vào cốc nước 75 °C. Chênh lệch nhiệt độ ban đầu giữa nước và thìa là bao nhiêu °C?', answer: '50', unit: '°C', calc: '75-25', explain: '75 − 25 = 50 °C; nhiệt truyền từ nước sang thìa.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Kim loại dẫn nhiệt tốt hơn không khí.', answer: true, explain: 'Không khí dẫn nhiệt rất kém.' },
    { type: 'short', q: 'Trong thí nghiệm dẫn nhiệt, các đinh gắn sáp cách nhau 4 cm, đinh thứ 5 cách đầu hơ nóng bao nhiêu cm nếu đinh thứ nhất cách đầu hơ 4 cm?', answer: '20', unit: 'cm', calc: '5*4', explain: '5 · 4 = 20 cm.' },
    { type: 'mcq', q: 'Vật nào hấp thụ bức xạ nhiệt tốt nhất?', options: ['Tấm tôn sáng bóng', 'Tấm gương', 'Tấm vải màu đen, xù xì', 'Giấy bạc'], answer: 2, explain: 'Bề mặt sẫm màu, xù xì hấp thụ tốt.' },
    { type: 'short', q: 'Nước trong nồi đang ở 30 °C, đun thêm đến khi sôi ở 100 °C. Nhiệt độ nước tăng thêm bao nhiêu °C?', answer: '70', unit: '°C', calc: '100-30', explain: '100 − 30 = 70 °C.' }
  ]
});
})();
