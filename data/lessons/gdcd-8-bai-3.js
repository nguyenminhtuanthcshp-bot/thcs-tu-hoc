/* GDCD 8 – Bài 3. Lao động cần cù, sáng tạo. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('gdcd-8/bai-3', {
  objectives: [
    'Nêu được khái niệm và biểu hiện của cần cù, sáng tạo trong lao động.',
    'Giải thích được ý nghĩa của lao động cần cù, sáng tạo.',
    'Thể hiện sự cần cù, sáng tạo trong học tập và lao động hằng ngày.',
    'Phê phán biểu hiện lười biếng, thụ động, dựa dẫm.'
  ],
  intro: 'Bố của Khoa trồng rau ở ngoại thành. Trước đây bố tưới bằng thùng, rất vất vả. Khoa cùng bố tự lắp hệ thống tưới nhỏ giọt từ ống nhựa và một bộ hẹn giờ cũ, vừa tiết kiệm nước vừa đỡ sức. Đó là <b>lao động cần cù, sáng tạo</b>.',
  steps: [
    { title: 'Thế nào là cần cù, sáng tạo?', html: `<ul><li><b>Cần cù</b>: chăm chỉ, chịu khó, làm việc thường xuyên, đều đặn, không ngại khó.</li><li><b>Sáng tạo</b>: luôn tìm tòi, cải tiến để có cách làm mới, hiệu quả hơn.</li></ul>` },
    { title: 'Biểu hiện', html: `<p>Cần cù và sáng tạo luôn đi cùng nhau:</p>`,
      svg: S.compare({ title: 'Cần cù, sáng tạo và trái ngược', left: { h: 'Cần cù, sáng tạo', items: ['Làm việc đến nơi đến chốn', 'Tìm cách giải mới cho bài toán', 'Cải tiến dụng cụ lao động', 'Kiên trì khi gặp khó'] }, right: { h: 'Lười biếng, thụ động', items: ['Ngại việc, đùn đẩy', 'Chỉ làm theo lối mòn', 'Chép bài của bạn', 'Bỏ dở khi gặp khó'] } }), caption: 'Tục ngữ: “Có công mài sắt, có ngày nên kim”.' },
    { title: 'Ý nghĩa', html: `<ul><li>Nâng cao năng suất, chất lượng, hiệu quả công việc.</li><li>Giúp bản thân tiến bộ, thành công; được mọi người tôn trọng.</li><li>Góp phần xây dựng gia đình, đất nước giàu mạnh.</li></ul>`,
      svg: S.lineChart({ title: 'Số luống rau Khoa tưới được trong 1 giờ (minh hoạ)', cats: ['Tưới thùng', 'Vòi cầm tay', 'Nhỏ giọt'], values: [4, 8, 20], yMin: 0, yMax: 24, yStep: 4, yLabel: 'luống' }), caption: 'Số liệu minh hoạ: cải tiến cách làm giúp tăng hiệu quả.' },
    { title: 'Rèn luyện', html: `<ul><li>Lập kế hoạch và hoàn thành việc học, việc nhà đúng hạn.</li><li>Đặt câu hỏi “Có cách nào tốt hơn không?”.</li><li>Học hỏi tấm gương lao động sáng tạo (nhà khoa học, nông dân sáng chế…).</li></ul>
      <div class="box key">Cần cù là nền tảng, sáng tạo là đòn bẩy.</div>` }
  ],
  summary: 'Cần cù là chăm chỉ, chịu khó, đều đặn; sáng tạo là tìm tòi, cải tiến cách làm mới hiệu quả hơn. Lao động cần cù, sáng tạo nâng cao năng suất, chất lượng, giúp bản thân thành công và đất nước phát triển. Cần phê phán lười biếng, thụ động, dựa dẫm.',
  examples: [
    { title: 'Nhận diện', problem: 'Lan làm bài tập đều đặn mỗi tối nhưng luôn chép cách giải mẫu, không thử cách khác. Lan đã cần cù, sáng tạo chưa?', solution: 'Lan cần cù nhưng chưa sáng tạo; nên thử tự tìm cách giải.' },
    { title: 'Tính hiệu quả', problem: 'Tưới thùng được 4 luống/giờ, tưới nhỏ giọt 20 luống/giờ. Hiệu quả tăng gấp mấy lần?', solution: '20 : 4 = 5 lần.' },
    { title: 'Ứng xử', problem: 'Nhóm em được giao làm mô hình; một bạn chỉ ngồi chơi. Em làm gì?', solution: 'Phân công cụ thể, động viên bạn nhận phần việc phù hợp, cùng nhau tìm ý tưởng.' }
  ],
  exercises: [
    { question: 'Nêu hai biểu hiện cần cù, sáng tạo trong học tập.', hints: ['Thói quen học.', 'Cách học.'], solution: 'Học bài đều đặn, làm đủ bài tập; tìm nhiều cách giải, dùng sơ đồ tư duy để ghi nhớ.' },
    { question: 'Trước đây mỗi ngày làm được 30 sản phẩm, sau khi cải tiến làm được 45 sản phẩm. Năng suất tăng bao nhiêu phần trăm?', hints: ['Tăng thêm 15 sản phẩm.', '15 : 30 × 100%.'], solution: '50%.' },
    { question: 'Giải thích câu tục ngữ “Có công mài sắt, có ngày nên kim”.', hints: ['Mài sắt thành kim rất lâu.', 'Liên hệ với sự kiên trì.'], solution: 'Kiên trì, chăm chỉ thì việc khó mấy cũng thành công.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Sáng tạo là luôn tìm tòi, cải tiến để làm việc hiệu quả hơn.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Biểu hiện của lười biếng:', options: ['Đùn đẩy việc cho người khác', 'Làm việc đến nơi đến chốn', 'Cải tiến dụng cụ', 'Kiên trì khi gặp khó'], answer: 0, explain: 'Lười biếng.' },
    { type: 'short', q: 'Năng suất tăng từ 4 lên 20 luống/giờ. Gấp mấy lần?', answer: '5', unit: 'lần', calc: '20/4', explain: '5.' },
    { type: 'mcq', q: 'Câu tục ngữ nói về cần cù:', options: ['Có công mài sắt, có ngày nên kim', 'Ăn quả nhớ kẻ trồng cây', 'Lá lành đùm lá rách', 'Gần mực thì đen'], answer: 0, explain: 'Kiên trì, chăm chỉ.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Chỉ cần cù mà không cần sáng tạo thì luôn đạt hiệu quả cao nhất.', answer: false, explain: 'Cần kết hợp cả hai.' },
    { type: 'short', q: 'Từ 30 lên 45 sản phẩm/ngày. Năng suất tăng bao nhiêu %?', answer: '50', unit: '%', calc: '(45-30)/30*100', explain: '50%.' },
    { type: 'mcq', q: 'Ý nghĩa của lao động cần cù, sáng tạo:', options: ['Nâng cao năng suất, chất lượng', 'Tốn thời gian vô ích', 'Chỉ có lợi cho người khác', 'Không cần thiết với học sinh'], answer: 0, explain: 'Đúng.' },
    { type: 'mcq', q: 'Việc làm thể hiện sáng tạo:', options: ['Tái chế chai nhựa thành chậu cây', 'Chép bài giải mẫu', 'Bỏ dở bài khó', 'Chờ bạn làm hộ'], answer: 0, explain: 'Cải tiến, tận dụng.' }
  ]
});
})();
