/* GDCD 6 – Bài 8. Tiết kiệm. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('gdcd-6/bai-8', {
  objectives: [
    'Nêu được khái niệm và biểu hiện của tiết kiệm (tiền bạc, đồ dùng, thời gian, điện, nước).',
    'Hiểu được vì sao phải tiết kiệm.',
    'Lập được kế hoạch chi tiêu, tiết kiệm đơn giản; phê phán lối sống lãng phí.'
  ],
  intro: 'Mỗi tuần Linh được bố mẹ cho 50 000 đồng tiền tiêu vặt. Linh để dành mỗi tuần 20 000 đồng, sau vài tháng tự mua được bộ sách yêu thích. Đó là biết <b>tiết kiệm</b>.',
  steps: [
    { title: 'Tiết kiệm là gì?', html: `<p><b>Tiết kiệm</b> là sử dụng một cách hợp lí, đúng mức của cải vật chất, thời gian, sức lực của mình và của người khác.</p>
      <p>Tiết kiệm khác với keo kiệt, bủn xỉn (không dám chi cho những việc cần thiết). Tục ngữ: <i>“Tích tiểu thành đại”</i>.</p>` },
    { title: 'Biểu hiện', html: `<p>Tiết kiệm thể hiện ở nhiều mặt:</p>`,
      svg: S.compare({ title: 'Tiết kiệm và lãng phí', left: { h: 'Tiết kiệm', items: ['Tắt đèn, quạt khi ra khỏi phòng', 'Khoá vòi nước khi đánh răng', 'Dùng lại giấy một mặt để nháp', 'Sắp xếp thời gian hợp lí'] }, right: { h: 'Lãng phí', items: ['Mua đồ không cần thiết', 'Bỏ thừa thức ăn', 'Mở điều hoà khi không có người', 'Thức khuya chơi điện tử'] } }), caption: 'Tiết kiệm cả tiền bạc, đồ dùng, điện nước và thời gian.' },
    { title: 'Kế hoạch chi tiêu', html: `<p>Chia tiền tiêu vặt theo mục đích, ưu tiên việc cần trước việc muốn:</p>`,
      svg: S.pieChart({ title: 'Kế hoạch dùng 200 000 đồng/tháng của Linh (minh hoạ)', parts: [{ v: 80, label: 'Để dành: 80 000' }, { v: 60, label: 'Đồ dùng học tập: 60 000' }, { v: 40, label: 'Ăn sáng thêm: 40 000' }, { v: 20, label: 'Ủng hộ bạn khó khăn: 20 000' }] }), caption: 'Số liệu minh hoạ; để dành 40%.' },
    { title: 'Ý nghĩa', html: `<ul><li>Giúp ổn định cuộc sống, có tiền cho việc cần thiết, phòng khi khó khăn.</li><li>Bảo vệ tài nguyên, môi trường (tiết kiệm điện, nước, giấy).</li><li>Thể hiện sự quý trọng công sức lao động của bản thân và người khác.</li></ul>
      <div class="box key">Tiết kiệm là dùng đúng mức, đúng lúc – không phải keo kiệt.</div>` }
  ],
  summary: 'Tiết kiệm là sử dụng hợp lí, đúng mức của cải, thời gian, sức lực của mình và người khác; khác với keo kiệt. Biểu hiện: tiết kiệm tiền bạc, đồ dùng, điện, nước, thời gian. Lập kế hoạch chi tiêu, ưu tiên việc cần. Tiết kiệm giúp ổn định cuộc sống, bảo vệ môi trường, quý trọng lao động; phê phán lãng phí.',
  examples: [
    { title: 'Tính tiền để dành', problem: 'Mỗi tuần để dành 20 000 đồng. Sau 12 tuần có bao nhiêu?', solution: '240 000 đồng.' },
    { title: 'Tiết kiệm điện', problem: 'Bóng đèn 40 W bật thừa 3 giờ mỗi ngày. Mỗi tháng (30 ngày) lãng phí bao nhiêu kWh?', solution: '40 × 3 × 30 = 3 600 Wh = 3,6 kWh.' },
    { title: 'Phân biệt', problem: 'Hưng không chịu mua vở mới dù vở cũ đã hết trang để “tiết kiệm”. Đúng không?', solution: 'Không; đó là keo kiệt, ảnh hưởng học tập. Tiết kiệm là chi đúng cho việc cần thiết.' }
  ],
  exercises: [
    { question: 'Nêu ba việc làm tiết kiệm điện, nước ở trường.', hints: ['Khi ra về.', 'Ở khu vệ sinh.'], solution: 'Tắt đèn, quạt khi ra khỏi lớp; khoá vòi nước sau khi dùng; báo thầy cô khi thấy vòi nước rò rỉ.' },
    { question: 'Theo biểu đồ ở bước 3, tiền để dành chiếm bao nhiêu phần trăm?', hints: ['80 000 trên 200 000.', 'Nhân 100%.'], solution: '40%.' },
    { question: 'Muốn mua cuốn sách 150 000 đồng, mỗi tuần để dành 25 000 đồng. Cần bao nhiêu tuần?', hints: ['Chia giá sách cho số tiền mỗi tuần.', '150 000 : 25 000.'], solution: '6 tuần.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tiết kiệm là sử dụng hợp lí, đúng mức của cải, thời gian, sức lực.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Hành vi lãng phí:', options: ['Tắt đèn khi ra khỏi phòng', 'Bỏ thừa thức ăn', 'Dùng giấy nháp hai mặt', 'Khoá vòi nước'], answer: 1, explain: 'Bỏ thừa.' },
    { type: 'short', q: 'Mỗi tuần để dành 15 000 đồng. Sau 10 tuần có bao nhiêu đồng?', answer: '150000', answerText: '150 000', unit: 'đồng', calc: '15000*10', explain: '150 000.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tiết kiệm nghĩa là không chi tiêu cho bất cứ việc gì.', answer: false, explain: 'Đó là keo kiệt.' },
    { type: 'short', q: 'Quạt 50 W bật thừa 2 giờ/ngày trong 30 ngày. Lãng phí bao nhiêu kWh?', answer: '3', unit: 'kWh', calc: '50*2*30/1000', explain: '3 000 Wh = 3 kWh.' },
    { type: 'short', q: 'Sách giá 120 000 đồng, mỗi tuần để dành 20 000 đồng. Cần bao nhiêu tuần?', answer: '6', unit: 'tuần', calc: '120000/20000', explain: '6.' },
    { type: 'mcq', q: 'Câu tục ngữ nói về tiết kiệm:', options: ['Tích tiểu thành đại', 'Uống nước nhớ nguồn', 'Thương người như thể thương thân', 'Có chí thì nên'], answer: 0, explain: 'Tích tiểu thành đại.' },
    { type: 'mcq', q: 'Khi lập kế hoạch chi tiêu nên:', options: ['ưu tiên việc cần trước việc muốn', 'mua mọi thứ thích', 'tiêu hết ngay', 'vay bạn để mua đồ chơi'], answer: 0, explain: 'Cần trước, muốn sau.' }
  ]
});
})();
