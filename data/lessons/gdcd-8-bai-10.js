/* GDCD 8 – Bài 10. Quyền và nghĩa vụ lao động của công dân. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('gdcd-8/bai-10', {
  objectives: [
    'Nêu được khái niệm và vai trò của lao động.',
    'Nêu được một số quy định cơ bản của pháp luật về quyền, nghĩa vụ lao động của công dân và lao động chưa thành niên.',
    'Nêu được quyền và nghĩa vụ cơ bản của các bên trong hợp đồng lao động.',
    'Tích cực tham gia lao động phù hợp lứa tuổi; nhận biết hành vi vi phạm quyền của lao động chưa thành niên.'
  ],
  intro: 'Kỳ nghỉ hè, Long (14 tuổi) được một xưởng gần nhà mời làm việc 9 giờ mỗi ngày, cả buổi tối, để bốc vác hàng. Mẹ Long lo lắng: “Con còn nhỏ, làm như thế có đúng luật không?”. Bài học về <b>quyền và nghĩa vụ lao động</b> sẽ giúp trả lời.',
  steps: [
    { title: 'Lao động và vai trò', html: `<p><b>Lao động</b> là hoạt động có mục đích của con người nhằm tạo ra của cải vật chất và giá trị tinh thần cho xã hội. Lao động là hoạt động chủ yếu, quan trọng nhất, là nhân tố quyết định sự tồn tại và phát triển của con người và xã hội.</p>` },
    { title: 'Quyền và nghĩa vụ lao động', html: `<ul><li><b>Hiến pháp năm 2013, Điều 35</b>: công dân có quyền làm việc, lựa chọn nghề nghiệp, việc làm và nơi làm việc.</li><li><b>Bộ luật Lao động năm 2019</b> (Luật số 45/2019/QH14, hiệu lực từ 1/1/2021): người lao động có quyền làm việc, hưởng lương, được bảo đảm an toàn; có nghĩa vụ thực hiện hợp đồng, chấp hành kỉ luật lao động.</li><li>Mọi công dân có nghĩa vụ lao động để nuôi sống bản thân, gia đình, góp phần phát triển đất nước.</li></ul>` },
    { title: 'Lao động chưa thành niên', html: `<p>Lao động chưa thành niên là người lao động <b>chưa đủ 18 tuổi</b> (Bộ luật Lao động 2019, Điều 143). Người dưới 15 tuổi chỉ được làm những công việc theo quy định chặt chẽ (Điều 143, 145).</p>`,
      svg: S.table({ title: 'Thời giờ làm việc (Bộ luật Lao động 2019, Điều 146)', head: ['Độ tuổi', 'Tối đa'], rows: [['Chưa đủ 15 tuổi', '4 giờ/ngày, 20 giờ/tuần'], ['Từ đủ 15 đến dưới 18', '8 giờ/ngày, 40 giờ/tuần'], ['Chưa đủ 15 tuổi', 'Cấm làm thêm giờ, ban đêm']], colW: 250 }), caption: 'Điều 147 cấm dùng người từ đủ 15 đến chưa đủ 18 tuổi làm một số công việc nặng nhọc, độc hại, nguy hiểm.' },
    { title: 'Hợp đồng lao động', html: `<p>Hợp đồng lao động là sự thoả thuận giữa người lao động và người sử dụng lao động về việc làm có trả công, tiền lương, điều kiện lao động, quyền và nghĩa vụ của mỗi bên.</p>`,
      svg: S.table({ title: 'Quyền và nghĩa vụ chính trong hợp đồng lao động', head: ['Bên', 'Quyền', 'Nghĩa vụ'], rows: [['Người lao động', 'Lương, an toàn', 'Làm đúng hợp đồng'], ['Người sử dụng LĐ', 'Tuyển, bố trí', 'Trả lương, bảo hiểm']], colW: 170 }), caption: 'Tóm tắt, diễn đạt lại; LĐ: lao động. Hai bên cùng tuân thủ nội quy, bảo đảm an toàn.' }
  ],
  summary: 'Lao động tạo ra của cải vật chất, tinh thần, quyết định sự tồn tại và phát triển của xã hội. Công dân có quyền làm việc, lựa chọn nghề nghiệp (Hiến pháp 2013, Điều 35) và nghĩa vụ lao động. Bộ luật Lao động 2019 bảo vệ lao động chưa thành niên: người chưa đủ 15 tuổi làm tối đa 4 giờ/ngày, 20 giờ/tuần, không làm thêm giờ, ban đêm (Điều 146). Hợp đồng lao động quy định quyền, nghĩa vụ của các bên.',
  examples: [
    { title: 'Tình huống của Long', problem: 'Xưởng mời Long (14 tuổi) bốc vác 9 giờ/ngày cả buổi tối. Có đúng luật không?', solution: 'Không. Người chưa đủ 15 tuổi chỉ làm tối đa 4 giờ/ngày, không làm ban đêm; bốc vác nặng không phù hợp.' },
    { title: 'Tính giờ vượt', problem: 'Long làm 9 giờ/ngày, vượt mức tối đa bao nhiêu giờ?', solution: '9 − 4 = 5 giờ.' },
    { title: 'Lao động phù hợp lứa tuổi', problem: 'Kể việc lao động phù hợp với học sinh lớp 8.', solution: 'Làm việc nhà, chăm sóc cây, tham gia lao động công ích ở trường, giúp bố mẹ việc nhẹ.' }
  ],
  exercises: [
    { question: 'Một bạn 16 tuổi làm thêm 6 ngày/tuần, mỗi ngày 8 giờ. Tổng số giờ có vượt quy định không?', hints: ['Tính 6 × 8.', 'So sánh với 40 giờ/tuần.'], solution: '48 giờ/tuần, vượt 8 giờ so với mức tối đa 40 giờ.' },
    { question: 'Nêu hai quyền của người lao động trong hợp đồng lao động.', hints: ['Tiền lương.', 'An toàn.'], solution: 'Được trả lương đúng, đủ, đúng hạn; được làm việc trong điều kiện an toàn, vệ sinh lao động.' },
    { question: 'Vì sao pháp luật hạn chế giờ làm của người chưa đủ 15 tuổi?', hints: ['Sức khoẻ, thể chất.', 'Việc học.'], solution: 'Để bảo vệ sức khoẻ, sự phát triển và bảo đảm quyền học tập của trẻ em.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Công dân có quyền làm việc, lựa chọn nghề nghiệp, việc làm và nơi làm việc.', answer: true, explain: 'Hiến pháp 2013, Điều 35.' },
    { type: 'short', q: 'Người chưa đủ 15 tuổi làm việc tối đa bao nhiêu giờ một ngày?', answer: '4', unit: 'giờ', calc: '4', explain: 'Điều 146.' },
    { type: 'mcq', q: 'Lao động chưa thành niên là người lao động:', options: ['chưa đủ 18 tuổi', 'chưa đủ 15 tuổi', 'chưa đủ 16 tuổi', 'chưa đủ 21 tuổi'], answer: 0, explain: 'Điều 143.' },
    { type: 'short', q: 'Người từ đủ 15 đến dưới 18 tuổi làm tối đa bao nhiêu giờ một tuần?', answer: '40', unit: 'giờ', calc: '40', explain: '40 giờ.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Người chưa đủ 15 tuổi được làm việc ban đêm nếu có lương cao.', answer: false, explain: 'Bị cấm.' },
    { type: 'short', q: 'Làm 6 ngày, mỗi ngày 8 giờ. Tổng bao nhiêu giờ/tuần?', answer: '48', unit: 'giờ', calc: '6*8', explain: '48.' },
    { type: 'mcq', q: 'Bộ luật Lao động hiện hành được ban hành năm:', options: ['2019', '2012', '1994', '2005'], answer: 0, explain: 'Luật số 45/2019/QH14.' },
    { type: 'mcq', q: 'Nghĩa vụ của người lao động:', options: ['Thực hiện hợp đồng, chấp hành kỉ luật', 'Tự ý nghỉ việc nhiều ngày', 'Không cần tuân thủ nội quy', 'Tiết lộ bí mật kinh doanh'], answer: 0, explain: 'Đúng.' }
  ]
});
})();
