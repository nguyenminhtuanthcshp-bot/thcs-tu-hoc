/* GDCD 6 – Bài 5. Tự lập. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('gdcd-6/bai-5', {
  objectives: [
    'Nêu được khái niệm và biểu hiện của tính tự lập.',
    'Hiểu được vì sao phải tự lập.',
    'Tự thực hiện được nhiệm vụ của bản thân trong học tập, sinh hoạt; phê phán thói ỷ lại, dựa dẫm.'
  ],
  intro: 'Năm lớp 6, Quân bắt đầu tự đạp xe đi học, tự soạn sách vở, tự giặt quần áo của mình. Mẹ bảo: “Con lớn thật rồi!”. Quân đang rèn luyện <b>tính tự lập</b>.',
  steps: [
    { title: 'Tự lập là gì?', html: `<p><b>Tự lập</b> là tự làm lấy, tự giải quyết công việc của mình, tự lo liệu, tạo dựng cuộc sống cho mình; không trông chờ, dựa dẫm, phụ thuộc vào người khác.</p>
      <p>Tấm gương tiêu biểu: ngày 5/6/1911, người thanh niên Nguyễn Tất Thành (Bác Hồ) rời bến Nhà Rồng ra đi tìm đường cứu nước; Người làm nhiều nghề để tự nuôi sống bản thân trong những năm bôn ba.</p>` },
    { title: 'Biểu hiện', html: `<p>Người có tính tự lập thường tự tin, có bản lĩnh, dám đương đầu với khó khăn:</p>`,
      svg: S.compare({ title: 'Tự lập và ỷ lại', left: { h: 'Tự lập', items: ['Tự giác học bài, chuẩn bị đồ dùng', 'Tự giặt quần áo, dọn phòng', 'Tự tìm cách giải bài khó', 'Tự đi học khi đủ điều kiện an toàn'] }, right: { h: 'Ỷ lại, dựa dẫm', items: ['Chờ bố mẹ soạn cặp sách', 'Nhờ bạn làm hộ bài tập', 'Việc gì cũng hỏi người khác', 'Không dám tự quyết việc nhỏ'] } }), caption: 'Tự lập không có nghĩa là từ chối mọi sự giúp đỡ chính đáng.' },
    { title: 'Vì sao phải tự lập?', html: `<ul><li>Giúp ta trưởng thành, tự tin, vượt qua khó khăn.</li><li>Có khả năng thành công trong cuộc sống.</li><li>Được mọi người tôn trọng, tin cậy.</li></ul>` },
    { title: 'Rèn luyện từ việc nhỏ', html: `<p>Lập danh sách việc tự làm mỗi ngày; tập tự giải quyết trước khi nhờ giúp; học các kĩ năng sống cơ bản (nấu cơm, giặt đồ, quản lí thời gian).</p>`,
      svg: S.table({ title: 'Bảng tự theo dõi một tuần (ví dụ)', head: ['Việc tự làm', 'Số ngày làm được / 7'], rows: [['Tự dậy đúng giờ', '6'], ['Tự soạn sách vở', '7'], ['Gấp quần áo', '5'], ['Tự học 1 giờ', '6']], colW: 240 }), caption: 'Ghi lại để thấy sự tiến bộ.' }
  ],
  summary: 'Tự lập là tự làm lấy, tự giải quyết công việc, tự lo liệu cho bản thân, không dựa dẫm người khác. Tự lập giúp con người trưởng thành, tự tin, thành công và được tôn trọng. Rèn luyện từ việc nhỏ hằng ngày; phê phán thói ỷ lại, dựa dẫm.',
  examples: [
    { title: 'Nhận diện', problem: 'Gặp bài toán khó, Vy đọc lại lí thuyết, thử nhiều cách rồi mới hỏi cô. Vy thể hiện điều gì?', solution: 'Tính tự lập trong học tập (tự giải quyết trước, nhờ giúp khi thật cần).' },
    { title: 'Phân biệt', problem: 'Nhờ bạn giảng lại bài có phải là thiếu tự lập không?', solution: 'Không. Tự lập không có nghĩa là không nhận giúp đỡ; điều sai là nhờ người khác làm hộ mà không tự cố gắng.' },
    { title: 'Tính tỉ lệ', problem: 'Theo bảng ở bước 4, tổng số lần làm được là bao nhiêu trên tối đa 28?', solution: '6 + 7 + 5 + 6 = 24 trên 28 (≈ 85,7%).' }
  ],
  exercises: [
    { question: 'Kể ba việc em đã tự làm được ở nhà.', hints: ['Việc vệ sinh cá nhân, dọn dẹp.', 'Việc học tập.'], solution: 'Ví dụ: tự dọn giường, rửa bát, tự học bài và chuẩn bị sách vở.' },
    { question: 'Tuấn nói: “Bố mẹ giàu nên mình không cần tự lập.” Em nhận xét gì?', hints: ['Tự lập có liên quan đến giàu nghèo không?', 'Tương lai của Tuấn thế nào nếu ỷ lại?'], solution: 'Suy nghĩ sai; ai cũng cần tự lập để trưởng thành, tự lo cho bản thân, không thể dựa dẫm mãi vào bố mẹ.' },
    { question: 'Năm 1911 Bác Hồ ra đi tìm đường cứu nước. Đến năm 2026 là bao nhiêu năm?', hints: ['Lấy 2026 trừ 1911.', 'Phép trừ.'], solution: '115 năm.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tự lập là tự làm lấy, tự giải quyết công việc của mình.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Biểu hiện của thói ỷ lại:', options: ['Tự soạn sách vở', 'Nhờ bạn làm hộ bài tập', 'Tự giặt quần áo', 'Tự học bài'], answer: 1, explain: 'Làm hộ.' },
    { type: 'mcq', q: 'Ngày Nguyễn Tất Thành rời bến Nhà Rồng ra đi tìm đường cứu nước:', options: ['5/6/1911', '2/9/1945', '19/5/1890', '3/2/1930'], answer: 0, explain: '5/6/1911.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Người tự lập không bao giờ nhận sự giúp đỡ của ai.', answer: false, explain: 'Vẫn có thể nhận giúp đỡ chính đáng.' },
    { type: 'short', q: 'Một tuần tự dậy đúng giờ 6 ngày. Tỉ lệ ngày làm được (%) làm tròn đến hàng đơn vị?', answer: '86', unit: '%', calc: 'Math.round(6/7*100)', explain: '≈ 86%.' },
    { type: 'short', q: 'Từ năm 1911 đến năm 2026 là bao nhiêu năm?', answer: '115', unit: 'năm', calc: '2026-1911', explain: '115.' },
    { type: 'mcq', q: 'Ý nghĩa của tự lập:', options: ['giúp trưởng thành, tự tin', 'làm ta cô lập', 'không cần học', 'phụ thuộc người khác'], answer: 0, explain: 'Đúng.' },
    { type: 'mcq', q: 'Cách rèn luyện tự lập phù hợp với học sinh lớp 6:', options: ['tự làm các việc vừa sức hằng ngày', 'tự đi xa một mình không báo ai', 'bỏ ngoài tai lời bố mẹ', 'từ chối mọi lời khuyên'], answer: 0, explain: 'Việc vừa sức.' }
  ]
});
})();
