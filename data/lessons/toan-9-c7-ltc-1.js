/* Toán 9 – Luyện tập chung (sau Bài 23). Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-9/c7-ltc-1', {
    objectives: [
      'Củng cố cách lập bảng tần số, bảng tần số tương đối từ dữ liệu thô.',
      'Chuyển đổi qua lại giữa tần số, tần số tương đối và số đo góc hình quạt.',
      'Lựa chọn và đọc biểu đồ phù hợp để trả lời câu hỏi thực tế.'
    ],
    intro: 'Luyện tập tổng hợp: từ dãy số liệu đến bảng, từ bảng đến biểu đồ và ngược lại.',
    steps: [
      { title: 'Ba đại lượng liên hệ', html: `<ul><li>Tần số n; cỡ mẫu N.</li><li>Tần số tương đối f = {{n|N}} · 100%.</li><li>Góc hình quạt = f · 360°.</li></ul><p>Biết một đại lượng và cỡ mẫu, ta tìm được hai đại lượng còn lại.</p>` },
      { title: 'Đọc biểu đồ hình quạt', html: `<p>Kết quả bình chọn điểm tham quan của 60 học sinh:</p>`,
        svg: S.sectorChart({ title: 'Điểm tham quan được chọn', parts: [{ label: 'Bảo tàng', value: 30 }, { label: 'Vườn quốc gia', value: 45 }, { label: 'Làng nghề', value: 25 }], unit: '%', r: 80 }), caption: 'Số học sinh chọn Vườn quốc gia: 60 · 45% = 27.' },
      { title: 'Chọn loại biểu đồ', html: `<table class="tbl"><tr><th>Mục đích</th><th>Biểu đồ nên dùng</th></tr><tr><td>So sánh tần số các giá trị</td><td>Cột</td></tr><tr><td>Thấy xu hướng theo thứ tự/thời gian</td><td>Đoạn thẳng</td></tr><tr><td>Thấy tỉ lệ từng phần trong tổng thể</td><td>Hình quạt tròn</td></tr></table>` },
      { title: 'Kiểm tra tính hợp lí', html: `<p>Trước khi kết luận: tổng tần số phải bằng N, tổng tần số tương đối phải bằng 100%, tổng các góc hình quạt phải bằng 360°.</p>` }
    ],
    summary: 'n ↔ f = n/N ↔ góc f·360°. Chọn biểu đồ cột để so sánh, đoạn thẳng để thấy xu hướng, hình quạt để thấy tỉ lệ; luôn kiểm tra tổng.',
    examples: [
      { title: 'Từ góc ra tần số', problem: 'Khảo sát 90 người, hình quạt “đi bộ” có góc 48°. Có bao nhiêu người đi bộ?', solution: 'f = {{48|360}} = {{2|15}} ⇒ n = 90 · {{2|15}} = 12 người.' },
      { title: 'Phát hiện sai sót', problem: 'Một bảng ghi tần số tương đối 32%, 28%, 25%, 20%. Bảng có hợp lí không?', solution: 'Tổng 105% ≠ 100% ⇒ có sai sót.' },
      { title: 'So sánh', problem: 'Trường A: 45 trong 150 học sinh bị cận thị; trường B: 52 trong 200. Trường nào có tỉ lệ cận thị cao hơn?', solution: 'A: 30%; B: 26% ⇒ trường A.' }
    ],
    exercises: [
      { question: 'Trong 60 học sinh, 25% chọn làng nghề. Tính số học sinh và góc hình quạt tương ứng.', hints: ['60 · 25%.', '25% · 360°.'], solution: '15 học sinh; 90°.' },
      { question: 'Tần số tương đối của ba giá trị là 40%, 35% và x%. Tìm x.', hints: ['Tổng bằng 100%.', 'x = 100 − 75.'], solution: 'x = 25.' },
      { question: 'Mẫu có cỡ 32; một giá trị có tần số tương đối 12,5%. Tìm tần số của giá trị đó.', hints: ['n = N · f.', '32 · 0,125.'], solution: 'n = 4.' }
    ],
    quiz: [
      { type: 'short', calc: '60 * 45 / 100', q: '60 học sinh, 45% chọn Vườn quốc gia. Số học sinh?', unit: 'học sinh', answer: '27', explain: '60 · 0,45.' },
      { type: 'short', calc: '90 * 48 / 360', q: 'Khảo sát 90 người, hình quạt “đi bộ” có góc 48°. Số người đi bộ?', unit: 'người', answer: '12', explain: '90 · 48/360.' },
      { type: 'short', calc: '100 - 40 - 35', q: 'Tần số tương đối của ba giá trị: 40%, 35%, x%. Tìm x.', answer: '25', explain: 'Tổng 100%.' },
      { type: 'short', calc: '32 * 0.125', q: 'Cỡ mẫu 32, tần số tương đối 12,5%. Tần số?', answer: '4', explain: '32 · 0,125.' },
      { type: 'short', calc: '45 / 150 * 100', q: 'Trường A có 45 trong 150 học sinh cận thị. Tỉ lệ (%)?', unit: '%', answer: '30', explain: '45/150.' },
      { type: 'mcq', q: 'Để thể hiện tỉ lệ từng phần trong tổng thể, nên dùng:', options: ['biểu đồ đoạn thẳng', 'biểu đồ hình quạt tròn', 'bảng số liệu thô', 'biểu đồ tranh'], answer: 1, explain: 'Hình quạt thể hiện tỉ lệ.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Bảng có các tần số tương đối 32%, 28%, 25%, 20% là hợp lí.', answer: false, explain: 'Tổng 105%.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hình quạt ứng với tần số tương đối 25% có góc ở tâm 90°.', answer: true, explain: '0,25 · 360°.' }
    ]
  });
})();
