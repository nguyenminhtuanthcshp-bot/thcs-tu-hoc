/* Toán 8 – Bài 19. Biểu diễn dữ liệu bằng bảng, biểu đồ. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-8/bai-19', {
    objectives: [
      'Lựa chọn và biểu diễn được dữ liệu vào bảng, biểu đồ thích hợp: bảng thống kê, biểu đồ tranh, biểu đồ cột, cột kép, biểu đồ hình quạt tròn, biểu đồ đoạn thẳng.',
      'Chuyển đổi được dữ liệu từ dạng biểu diễn này sang dạng biểu diễn khác.',
      'Nhận biết được ưu điểm của từng loại biểu đồ.'
    ],
    intro: 'Cùng một bộ số liệu có thể được “kể” bằng nhiều cách: bảng, cột, quạt tròn, đoạn thẳng… Chọn đúng loại biểu đồ giúp người xem hiểu ngay điều cần nói.',
    steps: [
      { title: 'Bảng thống kê', html: `<p>Số học sinh tham gia các câu lạc bộ của khối 8:</p>
        <table class="tbl"><tr><th>CLB</th><th>Bóng đá</th><th>Cờ vua</th><th>Mĩ thuật</th><th>Tiếng Anh</th></tr><tr><td>Số học sinh</td><td>45</td><td>20</td><td>25</td><td>30</td></tr></table>
        <p>Bảng cho số liệu chính xác, dễ tra cứu.</p>` },
      { title: 'Biểu đồ cột', html: `<p>Biểu đồ cột giúp <b>so sánh</b> nhanh giữa các đối tượng.</p>`,
        svg: S.bar({ title: 'Số học sinh các CLB – khối 8', cats: ['Bóng đá', 'Cờ vua', 'Mĩ thuật', 'Tiếng Anh'], series: [{ name: 'Học sinh', values: [45, 20, 25, 30] }], yMax: 50, yStep: 10, yLabel: 'Học sinh', width: 520, height: 280 }), caption: 'Cột cao nhất: CLB Bóng đá.' },
      { title: 'Biểu đồ hình quạt tròn', html: `<p>Biểu đồ quạt tròn cho biết <b>tỉ lệ phần trăm</b> của mỗi phần so với tổng thể. Tổng: 45 + 20 + 25 + 30 = 120 học sinh. Bóng đá chiếm {{45|120}} = 37,5%.</p>`,
        svg: S.sectorChart({ title: 'Tỉ lệ học sinh các CLB', parts: [{ label: 'Bóng đá', value: 37.5 }, { label: 'Cờ vua', value: 16.7 }, { label: 'Mĩ thuật', value: 20.8 }, { label: 'Tiếng Anh', value: 25 }], unit: '%' }), caption: 'Các phần trăm được làm tròn đến hàng phần mười.' },
      { title: 'Biểu đồ đoạn thẳng', html: `<p>Biểu đồ đoạn thẳng thể hiện <b>sự thay đổi theo thời gian</b>.</p>`,
        svg: S.lineChart({ title: 'Số sách thư viện cho mượn (quyển)', cats: ['Th9', 'Th10', 'Th11', 'Th12', 'Th1'], values: [120, 150, 180, 140, 200], yMin: 0, yMax: 220, yStep: 40, yLabel: 'quyển' }), caption: 'Tháng 1 có số sách mượn nhiều nhất.' },
      { title: 'Chọn loại biểu diễn', html: `<table class="tbl"><tr><th>Mục đích</th><th>Nên dùng</th></tr><tr><td>So sánh số lượng</td><td>Biểu đồ cột (cột kép khi so sánh hai nhóm)</td></tr><tr><td>Tỉ lệ các phần trong tổng thể</td><td>Biểu đồ hình quạt tròn</td></tr><tr><td>Xu hướng theo thời gian</td><td>Biểu đồ đoạn thẳng</td></tr><tr><td>Trình bày sinh động cho học sinh nhỏ</td><td>Biểu đồ tranh</td></tr></table>` }
    ],
    summary: 'Bảng: chính xác. Cột: so sánh. Quạt tròn: tỉ lệ phần trăm. Đoạn thẳng: xu hướng theo thời gian. Có thể chuyển đổi qua lại giữa các dạng.',
    examples: [
      { title: 'Tính phần trăm cho quạt tròn', problem: 'Lớp 8B có 40 học sinh: 18 bạn đi xe đạp, 12 bạn đi bộ, 10 bạn được đưa đón. Tính tỉ lệ phần trăm mỗi nhóm.', solution: 'Xe đạp: {{18|40}} = 45%; đi bộ: {{12|40}} = 30%; đưa đón: {{10|40}} = 25%.' },
      { title: 'Đọc biểu đồ cột', problem: 'Dựa vào biểu đồ cột các CLB ở trên, CLB Bóng đá nhiều hơn CLB Cờ vua bao nhiêu học sinh?', solution: '45 − 20 = 25 học sinh.' },
      { title: 'Chọn biểu đồ', problem: 'Muốn biểu diễn nhiệt độ trung bình 12 tháng trong năm của Đà Lạt thì nên dùng biểu đồ gì?', solution: 'Biểu đồ đoạn thẳng, vì cần thể hiện sự thay đổi theo thời gian.' }
    ],
    exercises: [
      { question: 'Một cửa hàng bán được 50 chiếc áo: 20 áo trắng, 15 áo xanh, 15 áo đen. Tính tỉ lệ phần trăm áo trắng.', hints: ['Tỉ lệ = số áo trắng : tổng số áo.', '{{20|50}} · 100%.'], solution: '40%.' },
      { question: 'Trên biểu đồ quạt tròn, một phần chiếm 25% ứng với bao nhiêu độ của hình tròn?', hints: ['Cả hình tròn là 360°.', '25% · 360°.'], solution: '90°.' },
      { question: 'Để so sánh số học sinh nam và nữ của 4 lớp khối 8, nên dùng biểu đồ gì?', hints: ['Mỗi lớp có hai số liệu.', 'Biểu đồ có hai cột cạnh nhau cho mỗi lớp.'], solution: 'Biểu đồ cột kép.' }
    ],
    quiz: [
      { type: 'mcq', q: 'Muốn thể hiện tỉ lệ phần trăm các thành phần trong tổng thể, nên dùng:', options: ['Biểu đồ đoạn thẳng', 'Biểu đồ hình quạt tròn', 'Biểu đồ tranh', 'Bảng hai chiều'], answer: 1, explain: 'Quạt tròn cho thấy tỉ lệ phần trăm.' },
      { type: 'short', calc: '18 / 40 * 100', q: 'Lớp có 40 học sinh, 18 bạn đi xe đạp. Tỉ lệ phần trăm đi xe đạp là bao nhiêu (%)?', unit: '%', answer: '45', explain: '{{18|40}} = 0,45 = 45%.' },
      { type: 'short', calc: '0.25 * 360', q: 'Phần chiếm 25% trên biểu đồ quạt tròn ứng với góc ở tâm bao nhiêu độ?', unit: 'độ', answer: '90', explain: '0,25 · 360°.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Biểu đồ đoạn thẳng thích hợp để biểu diễn sự thay đổi của một đại lượng theo thời gian.', answer: true, explain: 'Đúng.' },
      { type: 'short', calc: '45 - 20', q: 'CLB Bóng đá có 45 bạn, CLB Cờ vua có 20 bạn. Bóng đá nhiều hơn bao nhiêu bạn?', answer: '25', explain: '45 − 20.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tổng các phần trăm trên một biểu đồ quạt tròn có thể lớn hơn 100%.', answer: false, explain: 'Tổng các phần luôn bằng 100%.' },
      { type: 'mcq', q: 'So sánh số học sinh nam và nữ của từng lớp, nên dùng:', options: ['Biểu đồ cột kép', 'Biểu đồ quạt tròn', 'Biểu đồ tranh', 'Biểu đồ đoạn thẳng một đường'], answer: 0, explain: 'Cột kép so sánh hai nhóm trong từng hạng mục.' },
      { type: 'short', calc: '20 / 50 * 100', q: 'Bán 50 áo, trong đó 20 áo trắng. Áo trắng chiếm bao nhiêu phần trăm?', unit: '%', answer: '40', explain: '{{20|50}} = 40%.' }
    ]
  });
})();
