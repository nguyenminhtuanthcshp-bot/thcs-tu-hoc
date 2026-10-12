/* LS&ĐL 6 – Lịch sử, Bài 4. Nguồn gốc loài người. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-6/ls-bai-4', {
  objectives: [
    'Giới thiệu được sơ lược quá trình tiến hoá từ vượn người thành người.',
    'Nêu được đặc điểm của Vượn người, Người tối cổ, Người tinh khôn.',
    'Xác định được dấu tích của người tối cổ ở Đông Nam Á và Việt Nam.',
    'Biết quý trọng thành quả lao động đã giúp con người tiến hoá.'
  ],
  intro: 'Ở hang Thẩm Khuyên (Lạng Sơn), các nhà khảo cổ tìm thấy những chiếc răng hoá thạch của người tối cổ. Từ những dấu vết nhỏ như vậy, các nhà khoa học đã dần phục dựng hành trình hàng triệu năm <b>từ vượn người thành người</b>.',
  steps: [
    { title: 'Quá trình tiến hoá', html: `<p>Loài người có nguồn gốc từ một loài vượn người. Quá trình tiến hoá kéo dài hàng triệu năm:</p>`,
      svg: S.timeline({ title: 'Các giai đoạn tiến hoá (cách ngày nay)', items: [{ y: '5–6 triệu năm', s: 'Vượn người' }, { y: '~4 triệu năm', s: 'Người tối cổ' }, { y: '~150 000 năm', s: 'Người tinh khôn' }], note: 'Niên đại xấp xỉ theo các phát hiện khảo cổ.' }), caption: 'Lao động giúp con người hoàn thiện dần.' },
    { title: 'Đặc điểm từng giai đoạn', html: `<ul><li><b>Vượn người</b>: đi bằng hai chân nhưng chưa thật thẳng; còn sống nhiều trên cây.</li><li><b>Người tối cổ</b>: đi đứng thẳng, đôi tay khéo léo hơn, biết ghè đẽo đá làm công cụ, biết dùng lửa; thể tích hộp sọ lớn hơn.</li><li><b>Người tinh khôn</b>: cấu tạo cơ thể cơ bản giống người ngày nay; hộp sọ lớn, trán cao; đôi tay khéo léo.</li></ul>` },
    { title: 'Dấu tích ở Đông Nam Á và Việt Nam', html: `<p>Đông Nam Á là một trong những nơi có dấu tích người tối cổ sớm. Ở Việt Nam:</p>`,
      svg: S.sketchMap({ title: 'Một số nơi có dấu tích người tối cổ ở Việt Nam', areas: [{ pts: [[215,15],[260,10],[300,22],[340,40],[345,62],[318,78],[300,95],[285,110],[280,125],[300,150],[320,175],[335,200],[340,225],[330,250],[300,270],[270,290],[255,280],[268,262],[290,245],[295,220],[280,195],[262,170],[245,145],[235,120],[248,100],[240,80],[220,65],[205,40]], fill: '#bbf7d0', label: 'VIỆT NAM', lx: 420, ly: 150, size: 13 }], points: [{ x: 325, y: 50, label: 'Thẩm Khuyên, Thẩm Hai (Lạng Sơn)' }, { x: 262, y: 92, label: 'Núi Đọ (Thanh Hoá)', left: true }, { x: 308, y: 205, label: 'An Khê (Gia Lai)' }], note: 'Lược đồ giản lược, không theo tỉ lệ; vị trí chỉ mang tính minh hoạ.' }), caption: 'Các hang động và di chỉ có công cụ đá, răng hoá thạch.' },
    { title: 'Vai trò của lao động', html: `<p>Nhờ lao động (chế tạo công cụ, tìm thức ăn), đôi tay và bộ não của con người ngày càng phát triển; ngôn ngữ ra đời để trao đổi khi làm việc chung.</p>
      <div class="box key">Lao động là yếu tố quan trọng giúp vượn người tiến hoá thành người.</div>` }
  ],
  summary: 'Loài người tiến hoá từ vượn người (khoảng 5–6 triệu năm trước) qua Người tối cổ (khoảng 4 triệu năm trước) đến Người tinh khôn (khoảng 150 000 năm trước). Người tối cổ đi đứng thẳng, biết làm công cụ đá, dùng lửa. Ở Việt Nam có dấu tích người tối cổ ở Thẩm Khuyên, Thẩm Hai (Lạng Sơn), Núi Đọ (Thanh Hoá), An Khê (Gia Lai). Lao động giúp con người hoàn thiện.',
  examples: [
    { title: 'So sánh', problem: 'Người tinh khôn khác Người tối cổ ở điểm nào?', solution: 'Cơ thể giống người hiện đại, hộp sọ lớn hơn, trán cao, đôi tay khéo léo hơn.' },
    { title: 'Tính thời gian', problem: 'Người tối cổ xuất hiện cách nay khoảng 4 triệu năm, Người tinh khôn khoảng 150 000 năm. Hai mốc cách nhau bao nhiêu năm?', solution: '4 000 000 − 150 000 = 3 850 000 năm.' },
    { title: 'Địa danh', problem: 'Kể tên một di chỉ người tối cổ ở Việt Nam.', solution: 'Núi Đọ (Thanh Hoá).' }
  ],
  exercises: [
    { question: 'Sắp xếp theo thứ tự xuất hiện: Người tinh khôn, Vượn người, Người tối cổ.', hints: ['Ai xuất hiện sớm nhất?', 'Người tinh khôn gần ta nhất.'], solution: 'Vượn người → Người tối cổ → Người tinh khôn.' },
    { question: '150 000 năm bằng bao nhiêu thiên niên kỉ?', hints: ['1 thiên niên kỉ = 1 000 năm.', '150 000 : 1 000.'], solution: '150 thiên niên kỉ.' },
    { question: 'Vì sao nói lao động giúp con người tiến hoá?', hints: ['Đôi tay.', 'Bộ não, ngôn ngữ.'], solution: 'Lao động làm đôi tay khéo léo, bộ não phát triển, cần giao tiếp nên ngôn ngữ ra đời.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Loài người có nguồn gốc từ một loài vượn người.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Người tối cổ xuất hiện cách nay khoảng:', options: ['4 triệu năm', '150 000 năm', '10 000 năm', '100 năm'], answer: 0, explain: '~4 triệu năm.' },
    { type: 'mcq', q: 'Di chỉ Núi Đọ thuộc tỉnh:', options: ['Thanh Hoá', 'Lạng Sơn', 'Gia Lai', 'Hà Nội'], answer: 0, explain: 'Thanh Hoá.' },
    { type: 'short', q: '150 000 năm bằng bao nhiêu thiên niên kỉ?', answer: '150', unit: 'thiên niên kỉ', calc: '150000/1000', explain: '150.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Người tối cổ chưa biết dùng lửa.', answer: false, explain: 'Đã biết dùng lửa.' },
    { type: 'short', q: '4 000 000 − 150 000 bằng bao nhiêu năm?', answer: '3850000', answerText: '3 850 000', unit: 'năm', calc: '4000000-150000', explain: '3 850 000.' },
    { type: 'mcq', q: 'Đặc điểm của Người tinh khôn:', options: ['Cơ thể cơ bản giống người ngày nay', 'Còn sống trên cây', 'Chưa đi thẳng', 'Không biết làm công cụ'], answer: 0, explain: 'Đúng.' },
    { type: 'mcq', q: 'Yếu tố quan trọng giúp vượn người tiến hoá thành người:', options: ['Lao động', 'Ngủ nhiều', 'Sống đơn độc', 'Ăn sống'], answer: 0, explain: 'Lao động.' }
  ]
});
})();
