/* Toán 9 – Bài 23. Bảng tần số tương đối và biểu đồ tần số tương đối. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-9/bai-23', {
    objectives: [
      'Hiểu khái niệm tần số tương đối và cách tính f = n : N (thường viết dạng phần trăm).',
      'Lập được bảng tần số tương đối.',
      'Vẽ và đọc được biểu đồ tần số tương đối dạng cột và dạng hình quạt tròn.',
      'So sánh được hai mẫu dữ liệu có cỡ khác nhau nhờ tần số tương đối.'
    ],
    intro: 'Lớp A có 14 bạn thích bóng đá trên 40 bạn, lớp B có 12 bạn trên 30 bạn. Lớp nào “mê” bóng đá hơn? Muốn so sánh công bằng, ta dùng tỉ lệ phần trăm – tần số tương đối.',
    steps: [
      { title: 'Tần số tương đối', html: `<p>Tần số tương đối của giá trị x là tỉ số giữa tần số n của x và cỡ mẫu N:</p><p style="text-align:center"><b>f = {{n|N}}</b> (thường viết dưới dạng phần trăm: f = {{n · 100|N}}%).</p><p>Tổng các tần số tương đối bằng 100%.</p>` },
      { title: 'Bảng tần số tương đối', html: `<p>Môn thể thao yêu thích của 40 học sinh:</p><table class="tbl"><tr><th>Môn</th><th>Tần số</th><th>Tần số tương đối</th></tr><tr><td>Bóng đá</td><td>14</td><td>35%</td></tr><tr><td>Cầu lông</td><td>10</td><td>25%</td></tr><tr><td>Bơi</td><td>8</td><td>20%</td></tr><tr><td>Bóng rổ</td><td>8</td><td>20%</td></tr><tr><th>Cộng</th><th>40</th><th>100%</th></tr></table>` },
      { title: 'Biểu đồ hình quạt tròn', html: `<p>Mỗi hình quạt biểu diễn một giá trị; số đo góc ở tâm của hình quạt bằng f · 360°. Chẳng hạn 35% ứng với 0,35 · 360° = 126°.</p>`,
        svg: S.sectorChart({ title: 'Môn thể thao yêu thích', parts: [{ label: 'Bóng đá', value: 35 }, { label: 'Cầu lông', value: 25 }, { label: 'Bơi', value: 20 }, { label: 'Bóng rổ', value: 20 }], unit: '%', r: 85 }), caption: 'Biểu đồ tần số tương đối dạng hình quạt tròn.' },
      { title: 'Biểu đồ cột tần số tương đối', html: `<p>Giống biểu đồ tần số dạng cột nhưng trục đứng ghi tần số tương đối (%).</p>`,
        svg: S.bar({ title: 'Môn thể thao yêu thích (%)', cats: ['Bóng đá', 'Cầu lông', 'Bơi', 'Bóng rổ'], series: [{ name: '%', values: [35, 25, 20, 20], color: C.orange }], yMax: 40, yStep: 10, yLabel: 'Tỉ lệ (%)', width: 460, height: 270 }), caption: 'Biểu đồ tần số tương đối dạng cột.' },
      { title: 'So sánh hai mẫu', html: `<p>Lớp A: {{14|40}} = 35%; lớp B: {{12|30}} = 40%. Tuy số bạn lớp B ít hơn nhưng tỉ lệ thích bóng đá cao hơn.</p><p>Khi hai mẫu có cỡ khác nhau, nên so sánh bằng tần số tương đối thay vì tần số.</p>` }
    ],
    summary: 'f = n/N (hay n·100/N %); tổng các tần số tương đối bằng 100%. Biểu đồ hình quạt: góc = f·360°. Dùng tần số tương đối để so sánh các mẫu có cỡ khác nhau.',
    examples: [
      { title: 'Tính tần số tương đối', problem: 'Trong 25 lần gieo xúc xắc, mặt 6 xuất hiện 4 lần. Tính tần số tương đối của mặt 6.', solution: 'f = {{4|25}} = 16%.' },
      { title: 'Góc hình quạt', problem: 'Một giá trị có tần số tương đối 15%. Tính số đo góc ở tâm của hình quạt tương ứng.', solution: '0,15 · 360° = 54°.' },
      { title: 'Tìm tần số từ tần số tương đối', problem: 'Khảo sát 250 người, 36% chọn đi làm bằng xe buýt. Có bao nhiêu người chọn xe buýt?', solution: '250 · 36% = 90 người.' }
    ],
    exercises: [
      { question: 'Lập bảng tần số tương đối cho số con của 20 gia đình: 0 con: 2; 1 con: 5; 2 con: 10; 3 con: 3.', hints: ['Chia mỗi tần số cho 20.', 'Nhân 100 để ra phần trăm.'], solution: '10%; 25%; 50%; 15%.' },
      { question: 'Biểu đồ hình quạt có một phần ứng với góc 72°. Phần đó chiếm bao nhiêu phần trăm?', hints: ['f = {{72|360}}.', 'Đổi ra phần trăm.'], solution: '20%.' },
      { question: 'Lớp 9B có 18/45 bạn đi học bằng xe đạp; lớp 9C có 15/35 bạn. Lớp nào có tỉ lệ đi xe đạp cao hơn?', hints: ['Tính {{18|45}} và {{15|35}}.', '40% và khoảng 42,9%.'], solution: 'Lớp 9C.' }
    ],
    quiz: [
      { type: 'short', calc: '4 / 25 * 100', q: 'Mặt 6 xuất hiện 4 lần trong 25 lần gieo. Tần số tương đối (%)?', unit: '%', answer: '16', explain: '4/25 = 0,16.' },
      { type: 'short', calc: '0.15 * 360', q: 'Giá trị có tần số tương đối 15%. Góc ở tâm của hình quạt (độ)?', unit: '°', answer: '54', explain: '0,15 · 360°.' },
      { type: 'short', calc: '250 * 36 / 100', q: 'Khảo sát 250 người, 36% đi xe buýt. Số người đi xe buýt?', unit: 'người', answer: '90', explain: '250 · 0,36.' },
      { type: 'short', calc: '72 / 360 * 100', q: 'Hình quạt có góc ở tâm 72° ứng với bao nhiêu phần trăm?', unit: '%', answer: '20', explain: '72/360.' },
      { type: 'short', calc: '14 / 40 * 100', q: '14 trong 40 bạn thích bóng đá. Tần số tương đối (%)?', unit: '%', answer: '35', explain: '14/40.' },
      { type: 'mcq', q: 'Tổng các tần số tương đối của một mẫu dữ liệu bằng:', options: ['cỡ mẫu N', '1 (tức 100%)', '360', 'số giá trị khác nhau'], answer: 1, explain: 'Σn/N = 1.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nếu hai mẫu có cỡ khác nhau thì nên so sánh bằng tần số tương đối.', answer: true, explain: 'Tần số tương đối không phụ thuộc cỡ mẫu.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Lớp 9B (18/45 đi xe đạp) có tỉ lệ đi xe đạp cao hơn lớp 9C (15/35).', answer: false, explain: '40% &lt; 42,9%.' }
    ]
  });
})();
