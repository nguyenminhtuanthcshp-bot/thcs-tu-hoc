/* GDCD 8 – Bài 6. Xác định mục tiêu cá nhân. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('gdcd-8/bai-6', {
  objectives: [
    'Nêu được thế nào là mục tiêu cá nhân và các loại mục tiêu.',
    'Hiểu vì sao phải xác định mục tiêu và lập kế hoạch thực hiện.',
    'Xác định được mục tiêu cá nhân theo tiêu chí SMART và lập kế hoạch thực hiện.',
    'Kiên trì thực hiện, điều chỉnh mục tiêu khi cần.'
  ],
  intro: 'Đầu năm, Minh tuyên bố: “Năm nay mình sẽ giỏi tiếng Anh”. Ba tháng trôi qua, Minh vẫn chưa bắt đầu vì không biết làm gì trước. Còn Thư đặt mục tiêu: “Đạt 8,0 môn Tiếng Anh cuối học kì I, mỗi ngày học 10 từ mới”. Thư tiến bộ rõ rệt. Khác biệt nằm ở cách <b>xác định mục tiêu</b>.',
  steps: [
    { title: 'Mục tiêu cá nhân là gì?', html: `<p><b>Mục tiêu cá nhân</b> là kết quả mà mỗi người mong muốn đạt được sau một khoảng thời gian nhất định. Có <b>mục tiêu ngắn hạn</b> (vài ngày, vài tháng) và <b>mục tiêu dài hạn</b> (một năm, nhiều năm); mục tiêu về học tập, sức khoẻ, kĩ năng, nghề nghiệp…</p>` },
    { title: 'Mục tiêu SMART', html: `<p>Một mục tiêu tốt cần đáp ứng 5 tiêu chí:</p>`,
      svg: S.table({ title: 'Tiêu chí SMART', head: ['Tiêu chí', 'Ý nghĩa'], rows: [['S – Specific', 'Cụ thể, rõ ràng'], ['M – Measurable', 'Đo lường được'], ['A – Achievable', 'Vừa sức, khả thi'], ['R – Relevant', 'Phù hợp bản thân'], ['T – Time-bound', 'Có thời hạn']], colW: 250 }), caption: 'Ví dụ: “Đạt 8,0 Tiếng Anh cuối học kì I” là mục tiêu SMART.' },
    { title: 'Lập kế hoạch thực hiện', html: `<p>Các bước:</p>`,
      svg: S.flowchart({ title: 'Từ mục tiêu đến kết quả', steps: [{ t: 'start', s: 'Mục tiêu SMART' }, { t: 'proc', s: 'Chia nhỏ việc, đặt mốc thời gian' }, { t: 'proc', s: 'Thực hiện, ghi lại tiến độ' }, { t: 'if', s: 'Đúng tiến độ?', yes: 'Tiếp tục', no: 'Điều chỉnh cách làm' }, { t: 'end', s: 'Đạt mục tiêu' }] }), caption: 'Kiểm tra tiến độ định kì.' },
    { title: 'Vì sao cần xác định mục tiêu?', html: `<ul><li>Định hướng hành động, tập trung thời gian, sức lực.</li><li>Tạo động lực, giúp kiên trì vượt khó.</li><li>Dễ đánh giá sự tiến bộ của bản thân.</li></ul>
      <div class="box key">Mục tiêu không có kế hoạch chỉ là mong ước.</div>` }
  ],
  summary: 'Mục tiêu cá nhân là kết quả mong muốn đạt được trong một thời gian nhất định (ngắn hạn, dài hạn). Mục tiêu tốt theo tiêu chí SMART: cụ thể, đo lường được, khả thi, phù hợp, có thời hạn. Cần lập kế hoạch, chia nhỏ việc, theo dõi tiến độ, kiên trì và điều chỉnh khi cần.',
  examples: [
    { title: 'Sửa mục tiêu', problem: 'Viết lại “Mình sẽ khoẻ hơn” thành mục tiêu SMART.', solution: '“Chạy bộ 20 phút mỗi sáng, 5 ngày/tuần, trong 2 tháng tới.”' },
    { title: 'Tính tiến độ', problem: 'Mỗi ngày học 10 từ mới. Sau 12 tuần (84 ngày) học được bao nhiêu từ?', solution: '10 × 84 = 840 từ.' },
    { title: 'Phân loại', problem: '“Trở thành kĩ sư phần mềm” và “Hoàn thành bài tập Toán tuần này” là mục tiêu gì?', solution: 'Dài hạn và ngắn hạn.' }
  ],
  exercises: [
    { question: 'Đặt một mục tiêu SMART về học tập trong học kì này.', hints: ['Có con số đo được.', 'Có thời hạn.'], solution: 'Ví dụ: “Đọc xong 6 cuốn sách văn học trước 31/12, mỗi tuần 50 trang.”' },
    { question: 'Mục tiêu đọc 600 trang trong 12 tuần. Mỗi tuần cần đọc bao nhiêu trang?', hints: ['Chia đều.', '600 : 12.'], solution: '50 trang.' },
    { question: 'Nếu không đạt tiến độ do bị ốm, em nên làm gì?', hints: ['Không bỏ cuộc.', 'Điều chỉnh.'], solution: 'Điều chỉnh kế hoạch (dời mốc, chia lại khối lượng), tiếp tục thực hiện khi khoẻ.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mục tiêu cá nhân là kết quả mong muốn đạt được trong một thời gian nhất định.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Chữ “T” trong SMART nghĩa là:', options: ['Có thời hạn', 'Thú vị', 'Tập thể', 'Tốn kém'], answer: 0, explain: 'Time-bound.' },
    { type: 'short', q: 'Mỗi ngày học 10 từ mới, sau 84 ngày học được bao nhiêu từ?', answer: '840', unit: 'từ', calc: '10*84', explain: '840.' },
    { type: 'mcq', q: 'Mục tiêu đáp ứng SMART:', options: ['Đạt 8,0 Toán cuối học kì I', 'Học giỏi hơn', 'Sống tốt', 'Thật nổi tiếng'], answer: 0, explain: 'Cụ thể, đo được, có hạn.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Đã đặt mục tiêu thì tuyệt đối không được điều chỉnh.', answer: false, explain: 'Có thể điều chỉnh phù hợp.' },
    { type: 'short', q: 'Đọc 600 trang trong 12 tuần. Mỗi tuần bao nhiêu trang?', answer: '50', unit: 'trang', calc: '600/12', explain: '50.' },
    { type: 'short', q: 'SMART gồm bao nhiêu tiêu chí?', answer: '5', unit: 'tiêu chí', calc: '5', explain: '5.' },
    { type: 'mcq', q: 'Mục tiêu dài hạn:', options: ['Trở thành bác sĩ', 'Làm xong bài tập hôm nay', 'Dọn phòng tối nay', 'Đọc 10 trang sách'], answer: 0, explain: 'Nhiều năm.' }
  ]
});
})();
