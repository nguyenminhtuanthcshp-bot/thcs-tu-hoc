/* GDCD 6 – Bài 3. Siêng năng, kiên trì. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('gdcd-6/bai-3', {
  objectives: [
    'Nêu được khái niệm và biểu hiện của siêng năng, kiên trì.',
    'Nhận biết được ý nghĩa của siêng năng, kiên trì đối với học tập và cuộc sống.',
    'Lập được kế hoạch rèn luyện siêng năng, kiên trì; phê phán sự lười biếng, ngại khó.'
  ],
  intro: 'Kiên học bơi mãi không nổi, nhiều lần muốn bỏ. Nhưng cậu vẫn tập đều mỗi chiều, sau một tháng đã bơi được 25 mét. Đó là sức mạnh của <b>siêng năng</b> và <b>kiên trì</b>.',
  steps: [
    { title: 'Khái niệm', html: `<ul><li><b>Siêng năng</b> là đức tính của con người, thể hiện ở sự cần cù, tự giác, miệt mài làm việc thường xuyên, đều đặn.</li><li><b>Kiên trì</b> là sự quyết tâm làm đến cùng, dù gặp khó khăn, gian khổ.</li></ul>
      <p>Tục ngữ: <i>“Có công mài sắt, có ngày nên kim”</i>; <i>“Kiến tha lâu cũng đầy tổ”</i>.</p>` },
    { title: 'Biểu hiện', html: `<p>Siêng năng, kiên trì thể hiện trong học tập, lao động và rèn luyện:</p>`,
      svg: S.compare({ title: 'Siêng năng, kiên trì và trái ngược', left: { h: 'Siêng năng, kiên trì', items: ['Tự giác làm bài tập mỗi ngày', 'Gặp bài khó vẫn tìm cách giải', 'Giúp việc nhà đều đặn', 'Tập luyện thể thao đều'] }, right: { h: 'Lười biếng, ngại khó', items: ['Chép bài giải của bạn', 'Gặp khó là bỏ cuộc', '“Nước đến chân mới nhảy”', 'Hay viện cớ trì hoãn'] } }), caption: 'Cần phân biệt với sự lười biếng, ngại khó.' },
    { title: 'Ý nghĩa', html: `<p>Siêng năng, kiên trì giúp con người tiến bộ, đạt kết quả tốt trong học tập và công việc, được mọi người tin yêu; giúp vượt qua khó khăn để thực hiện mục tiêu.</p>`,
      svg: S.lineChart({ title: 'Quãng đường bơi được qua các tuần tập đều (minh hoạ)', cats: ['Tuần 1', 'Tuần 2', 'Tuần 3', 'Tuần 4'], values: [5, 10, 18, 25], yMin: 0, yMax: 30, yStep: 5, yLabel: 'm' }), caption: 'Số liệu minh hoạ: tập đều đặn thì tiến bộ dần.' },
    { title: 'Rèn luyện', html: `<p>Đặt mục tiêu cụ thể, chia nhỏ việc; lập thời gian biểu và thực hiện đều đặn; không bỏ cuộc khi gặp khó, tìm cách khác hoặc nhờ giúp đỡ; tự đánh giá tiến bộ mỗi tuần.</p>
      <div class="box key">Siêng năng: chăm chỉ, đều đặn. Kiên trì: làm đến cùng.</div>` }
  ],
  summary: 'Siêng năng là cần cù, tự giác, miệt mài làm việc thường xuyên, đều đặn; kiên trì là quyết tâm làm đến cùng dù gặp khó khăn. Hai đức tính giúp con người tiến bộ, thành công, được tin yêu. Rèn luyện bằng mục tiêu cụ thể, thời gian biểu, không bỏ cuộc; phê phán lười biếng, ngại khó.',
  examples: [
    { title: 'Nhận diện', problem: 'Mai đặt mục tiêu mỗi ngày học 10 từ tiếng Anh và làm đều suốt học kì. Đó là đức tính gì?', solution: 'Siêng năng, kiên trì.' },
    { title: 'Phê phán', problem: 'Trung chỉ học khi sắp kiểm tra (“nước đến chân mới nhảy”). Em khuyên Trung thế nào?', solution: 'Học đều mỗi ngày, lập thời gian biểu; kiến thức được củng cố dần, đỡ áp lực trước kiểm tra.' },
    { title: 'Tính tích luỹ', problem: 'Mỗi ngày học 10 từ mới, sau 30 ngày học được bao nhiêu từ?', solution: '300 từ.' }
  ],
  exercises: [
    { question: 'Lập kế hoạch một tuần để rèn luyện tính siêng năng trong học tập.', hints: ['Mục tiêu cụ thể (môn, thời gian).', 'Cách tự kiểm tra.'], solution: 'Ví dụ: mỗi tối 19h–20h30 làm bài tập; mỗi ngày đọc 15 phút; Chủ nhật tự đánh giá, đánh dấu những ngày đã thực hiện.' },
    { question: 'Giải thích câu “Kiến tha lâu cũng đầy tổ”.', hints: ['Con kiến mỗi lần tha được bao nhiêu?', 'Làm đều đặn thì sao?'], solution: 'Việc nhỏ làm đều đặn, kiên trì lâu dài sẽ đạt kết quả lớn.' },
    { question: 'Mỗi ngày tiết kiệm 15 phút lướt mạng để đọc sách. Một tuần đọc thêm bao nhiêu phút? Một tháng (30 ngày) bao nhiêu giờ?', hints: ['15 × 7.', '15 × 30 rồi đổi ra giờ.'], solution: '105 phút/tuần; 450 phút = 7,5 giờ/tháng.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Kiên trì là quyết tâm làm đến cùng dù gặp khó khăn.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Câu tục ngữ nói về kiên trì:', options: ['Có công mài sắt, có ngày nên kim', 'Thương người như thể thương thân', 'Uống nước nhớ nguồn', 'Lá lành đùm lá rách'], answer: 0, explain: 'Mài sắt nên kim.' },
    { type: 'mcq', q: 'Biểu hiện của lười biếng:', options: ['Tự giác làm bài', 'Chép bài giải của bạn', 'Tập thể dục đều', 'Giúp việc nhà'], answer: 1, explain: 'Chép bài.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Siêng năng chỉ cần thể hiện trong học tập.', answer: false, explain: 'Cả lao động, rèn luyện.' },
    { type: 'short', q: 'Mỗi ngày làm 4 bài toán, sau 15 ngày làm được bao nhiêu bài?', answer: '60', unit: 'bài', calc: '4*15', explain: '60.' },
    { type: 'short', q: 'Đọc sách 20 phút mỗi ngày trong 30 ngày. Tổng bao nhiêu giờ?', answer: '10', unit: 'giờ', calc: '20*30/60', explain: '600 phút = 10 giờ.' },
    { type: 'mcq', q: '“Nước đến chân mới nhảy” phê phán:', options: ['sự trì hoãn, thiếu siêng năng', 'sự chăm chỉ', 'lòng yêu thương', 'tính trung thực'], answer: 0, explain: 'Trì hoãn.' },
    { type: 'mcq', q: 'Gặp bài khó, người kiên trì sẽ:', options: ['tìm cách khác hoặc hỏi thầy cô', 'bỏ qua ngay', 'chép đáp án', 'than phiền'], answer: 0, explain: 'Tìm cách giải.' }
  ]
});
})();
