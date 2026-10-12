/* GDCD 8 – Bài 8. Lập kế hoạch chi tiêu. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('gdcd-8/bai-8', {
  objectives: [
    'Nêu được ý nghĩa của việc lập kế hoạch chi tiêu.',
    'Biết các bước lập kế hoạch chi tiêu.',
    'Lập được kế hoạch chi tiêu hợp lí cho bản thân và thực hiện theo kế hoạch.',
    'Rèn thói quen chi tiêu có kế hoạch, tiết kiệm.'
  ],
  intro: 'Mai muốn mua một chiếc máy tính cầm tay giá 450 000 đồng trước kì thi học kì. Mỗi tháng Mai có 400 000 đồng tiền tiêu vặt nhưng thường tiêu hết. Mai cần một <b>kế hoạch chi tiêu</b> để vừa đủ dùng vừa để dành.',
  steps: [
    { title: 'Ý nghĩa của kế hoạch chi tiêu', html: `<ul><li>Cân đối thu chi, không tiêu quá khả năng.</li><li>Thực hiện được mục tiêu tài chính (mua đồ dùng, quỹ dự phòng).</li><li>Rèn tính tiết kiệm, tự chủ, trách nhiệm.</li></ul>` },
    { title: 'Các bước lập kế hoạch', html: `<p>Bốn bước cơ bản:</p>`,
      svg: S.flowchart({ title: 'Lập kế hoạch chi tiêu', steps: [{ t: 'start', s: 'Đặt mục tiêu' }, { t: 'proc', s: 'Tính khoản thu dự kiến' }, { t: 'proc', s: 'Liệt kê, ưu tiên khoản chi' }, { t: 'if', s: 'Thu ≥ chi + tiết kiệm?', yes: 'Thực hiện, ghi chép', no: 'Cắt bớt khoản “muốn”' }, { t: 'end', s: 'Mua được đồ cần' }] }), caption: 'Mục tiêu cần có thời hạn. Ưu tiên “cần” trước “muốn”.' },
    { title: 'Ví dụ kế hoạch của Mai', html: `<p>Mai chia 400 000 đồng/tháng như sau:</p>`,
      svg: S.table({ title: 'Kế hoạch chi tiêu tháng của Mai (minh hoạ)', head: ['Khoản', 'Số tiền (đồng)'], rows: [['Tiết kiệm mua máy tính', '150 000'], ['Ăn sáng, đi lại', '160 000'], ['Đồ dùng học tập', '50 000'], ['Cá nhân, giải trí', '40 000'], ['Tổng', '400 000']], colW: 250 }), caption: 'Số liệu minh hoạ. Sau 3 tháng Mai có 450 000 đồng.' },
    { title: 'Thực hiện và điều chỉnh', html: `<ul><li>Ghi chép mỗi khoản chi; cuối tuần đối chiếu với kế hoạch.</li><li>Có khoản phát sinh: lấy từ khoản “muốn”, không lấy từ tiết kiệm.</li><li>Đạt mục tiêu: tự thưởng nhỏ và đặt mục tiêu mới.</li></ul>
      <div class="box key">Lập kế hoạch – ghi chép – đối chiếu – điều chỉnh.</div>` }
  ],
  summary: 'Kế hoạch chi tiêu giúp cân đối thu chi, đạt mục tiêu tài chính và rèn tính tiết kiệm, tự chủ. Các bước: xác định mục tiêu và thời hạn; tính khoản thu; liệt kê và ưu tiên khoản chi; cân đối, thực hiện, ghi chép và điều chỉnh.',
  examples: [
    { title: 'Thời gian để dành', problem: 'Máy tính 450 000 đồng, mỗi tháng để dành 150 000 đồng. Cần mấy tháng?', solution: '450 000 : 150 000 = 3 tháng.' },
    { title: 'Tỉ lệ tiết kiệm', problem: 'Mai tiết kiệm 150 000 trong 400 000 đồng. Tỉ lệ là bao nhiêu?', solution: '150 000 : 400 000 × 100% = 37,5%.' },
    { title: 'Xử lí phát sinh', problem: 'Tháng này Mai cần thêm 30 000 đồng mua quà sinh nhật bạn. Lấy từ đâu?', solution: 'Lấy từ khoản cá nhân, giải trí (40 000), giữ nguyên khoản tiết kiệm.' }
  ],
  exercises: [
    { question: 'Lập kế hoạch cho 300 000 đồng/tháng: tiết kiệm 20%, ăn uống 50%, học tập 20%, cá nhân 10%.', hints: ['Nhân 300 000 với từng tỉ lệ.', 'Kiểm tra tổng.'], solution: 'Tiết kiệm 60 000; ăn uống 150 000; học tập 60 000; cá nhân 30 000 đồng.' },
    { question: 'Muốn mua giày 540 000 đồng sau 6 tháng. Mỗi tháng cần để dành bao nhiêu?', hints: ['Chia đều.', '540 000 : 6.'], solution: '90 000 đồng.' },
    { question: 'Vì sao nên để dành tiền tiết kiệm ngay khi nhận tiền?', hints: ['Nếu để cuối tháng thì sao?', 'Thói quen.'], solution: 'Để tránh tiêu hết trước; tạo thói quen “trả cho mình trước”, bảo đảm đạt mục tiêu.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Lập kế hoạch chi tiêu giúp cân đối thu chi.', answer: true, explain: 'Đúng.' },
    { type: 'short', q: 'Để dành 150 000 đồng/tháng, mua đồ 450 000 đồng cần mấy tháng?', answer: '3', unit: 'tháng', calc: '450000/150000', explain: '3.' },
    { type: 'mcq', q: 'Bước đầu tiên khi lập kế hoạch chi tiêu:', options: ['Xác định mục tiêu, thời hạn', 'Tiêu hết tiền', 'Vay bạn', 'Mua đồ giảm giá'], answer: 0, explain: 'Đúng.' },
    { type: 'short', q: 'Có 300 000 đồng, tiết kiệm 20%. Tiết kiệm bao nhiêu đồng?', answer: '60000', answerText: '60 000', unit: 'đồng', calc: '300000*20/100', explain: '60 000.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khi có khoản phát sinh, nên rút hết tiền tiết kiệm.', answer: false, explain: 'Lấy từ khoản “muốn”.' },
    { type: 'short', q: 'Mua giày 540 000 đồng trong 6 tháng. Mỗi tháng để dành bao nhiêu đồng?', answer: '90000', answerText: '90 000', unit: 'đồng', calc: '540000/6', explain: '90 000.' },
    { type: 'mcq', q: 'Khoản nên ưu tiên:', options: ['Đồ dùng học tập cần thiết', 'Thẻ game', 'Đồ chơi trào lưu', 'Trà sữa hằng ngày'], answer: 0, explain: 'Cần thiết.' },
    { type: 'mcq', q: 'Việc giúp thực hiện đúng kế hoạch:', options: ['Ghi chép, đối chiếu thu chi', 'Không ghi lại gì', 'Tiêu theo cảm hứng', 'Mượn tiền thường xuyên'], answer: 0, explain: 'Kiểm soát.' }
  ]
});
})();
