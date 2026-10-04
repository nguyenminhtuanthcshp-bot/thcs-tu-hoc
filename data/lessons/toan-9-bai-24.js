/* Toán 9 – Bài 24. Bảng tần số, tần số tương đối ghép nhóm và biểu đồ. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-9/bai-24', {
    objectives: [
      'Hiểu vì sao cần ghép nhóm số liệu và cách chia nhóm dạng [a; b).',
      'Lập được bảng tần số ghép nhóm và bảng tần số tương đối ghép nhóm.',
      'Xác định giá trị đại diện (trung điểm) của mỗi nhóm.',
      'Vẽ và đọc biểu đồ tần số (tương đối) ghép nhóm dạng cột sát nhau và dạng đoạn thẳng.'
    ],
    intro: 'Chiều cao của 40 học sinh gồm rất nhiều giá trị khác nhau (152 cm, 157 cm, 161 cm…). Lập bảng tần số cho từng giá trị sẽ rất dài; thay vào đó ta chia thành các nhóm như [150; 155), [155; 160)…',
    steps: [
      { title: 'Ghép nhóm số liệu', html: `<p>Chia khoảng giá trị thành các nhóm liên tiếp <b>[a; b)</b> (gồm a, không gồm b). Độ dài nhóm là b − a; <b>giá trị đại diện</b> của nhóm là {{a + b|2}}.</p><p>Ví dụ: nhóm [155; 160) có độ dài 5, giá trị đại diện 157,5.</p>` },
      { title: 'Bảng tần số ghép nhóm', html: `<p>Chiều cao (cm) của 40 học sinh lớp 9:</p><table class="tbl"><tr><th>Nhóm (cm)</th><th>Tần số</th><th>Tần số tương đối</th></tr><tr><td>[150; 155)</td><td>5</td><td>12,5%</td></tr><tr><td>[155; 160)</td><td>12</td><td>30%</td></tr><tr><td>[160; 165)</td><td>14</td><td>35%</td></tr><tr><td>[165; 170)</td><td>7</td><td>17,5%</td></tr><tr><td>[170; 175)</td><td>2</td><td>5%</td></tr><tr><th>Cộng</th><th>40</th><th>100%</th></tr></table>` },
      { title: 'Biểu đồ tần số ghép nhóm', html: `<p>Các cột <b>đặt sát nhau</b>; mỗi cột trải trên một nhóm, chiều cao là tần số của nhóm.</p>`,
        svg: S.histogram({ title: 'Chiều cao của 40 học sinh', edges: [150, 155, 160, 165, 170, 175], values: [5, 12, 14, 7, 2], yMax: 16, yStep: 4, yLabel: 'Tần số', xLabel: 'Chiều cao (cm)', color: C.blue }), caption: 'Biểu đồ tần số ghép nhóm dạng cột.' },
      { title: 'Biểu đồ tần số tương đối ghép nhóm', html: `<p>Có thể vẽ dạng cột với trục đứng là phần trăm, hoặc dạng đoạn thẳng: nối các điểm (giá trị đại diện; tần số tương đối).</p>`,
        svg: S.lineChart({ title: 'Tần số tương đối ghép nhóm (%)', cats: ['152,5', '157,5', '162,5', '167,5', '172,5'], values: [12.5, 30, 35, 17.5, 5], yMax: 40, yStep: 10, yLabel: '%', xLabel: 'Giá trị đại diện (cm)', width: 480, height: 280 }), caption: 'Biểu đồ đoạn thẳng tần số tương đối ghép nhóm.' },
      { title: 'Đọc bảng ghép nhóm', html: `<ul><li>Nhóm [160; 165) có tần số lớn nhất.</li><li>Số học sinh cao dưới 160 cm: 5 + 12 = 17 (42,5%).</li><li>Lưu ý: từ bảng ghép nhóm không biết chính xác từng giá trị, chỉ biết thuộc nhóm nào.</li></ul>` }
    ],
    summary: 'Ghép nhóm [a; b) khi dữ liệu có nhiều giá trị; giá trị đại diện (a + b)/2. Bảng và biểu đồ tần số (tương đối) ghép nhóm: cột sát nhau hoặc đoạn thẳng qua các giá trị đại diện.',
    examples: [
      { title: 'Xếp vào nhóm', problem: 'Các số 155; 159,5; 160 thuộc nhóm nào trong bảng chiều cao?', solution: '155 và 159,5 thuộc [155; 160); 160 thuộc [160; 165).' },
      { title: 'Tần số tương đối', problem: 'Nhóm [165; 170) có tần số 7 trong 40 học sinh. Tính tần số tương đối.', solution: '{{7|40}} = 17,5%.' },
      { title: 'Giá trị đại diện', problem: 'Thời gian tự học (phút) được chia nhóm [30; 45), [45; 60), [60; 75). Tìm giá trị đại diện mỗi nhóm.', solution: '37,5; 52,5; 67,5.' }
    ],
    exercises: [
      { question: 'Cân nặng (kg) của 12 bạn: 42, 47, 51, 45, 49, 53, 44, 50, 48, 46, 52, 43. Lập bảng tần số ghép nhóm với các nhóm [40; 45), [45; 50), [50; 55).', hints: ['Đếm các số từ 40 đến dưới 45.', 'Số 50 thuộc nhóm [50; 55).'], solution: '[40; 45): 3; [45; 50): 5; [50; 55): 4.' },
      { question: 'Với bảng trên, tính tần số tương đối của nhóm [45; 50) (làm tròn đến hàng phần mười).', hints: ['{{5|12}}.', '≈ 0,4167.'], solution: '≈ 41,7%.' },
      { question: 'Ước lượng chiều cao trung bình của 40 học sinh dùng giá trị đại diện.', hints: ['Nhân mỗi giá trị đại diện với tần số.', '(152,5·5 + 157,5·12 + 162,5·14 + 167,5·7 + 172,5·2) : 40.'], solution: '6445 : 40 ≈ 161,1 cm.' }
    ],
    quiz: [
      { type: 'short', calc: '(155 + 160) / 2', q: 'Giá trị đại diện của nhóm [155; 160) là?', answer: '157.5', explain: '(155 + 160)/2.' },
      { type: 'short', calc: '7 / 40 * 100', q: 'Nhóm có tần số 7 trong cỡ mẫu 40. Tần số tương đối (%)?', unit: '%', answer: '17.5', explain: '7/40.' },
      { type: 'short', calc: '5 + 12', q: 'Bảng chiều cao: [150; 155): 5, [155; 160): 12. Số học sinh cao dưới 160 cm?', unit: 'học sinh', answer: '17', explain: '5 + 12.' },
      { type: 'short', calc: 'round((152.5*5 + 157.5*12 + 162.5*14 + 167.5*7 + 172.5*2) / 40, 1)', q: 'Ước lượng chiều cao trung bình (cm) của 40 học sinh từ bảng ghép nhóm (tần số 5; 12; 14; 7; 2 với các nhóm từ [150; 155) đến [170; 175)), làm tròn đến hàng phần mười.', unit: 'cm', answer: '161.1', explain: '6445 : 40 = 161,125.' },
      { type: 'short', calc: '[42, 47, 51, 45, 49, 53, 44, 50, 48, 46, 52, 43].filter(v => v >= 45 && v < 50).length', q: 'Cân nặng 12 bạn: 42, 47, 51, 45, 49, 53, 44, 50, 48, 46, 52, 43. Tần số của nhóm [45; 50)?', answer: '5', explain: '47, 45, 49, 48, 46.' },
      { type: 'mcq', q: 'Số 160 thuộc nhóm nào?', options: ['[155; 160)', '[160; 165)', 'cả hai nhóm', 'không nhóm nào'], answer: 1, explain: 'Nhóm [a; b) chứa a, không chứa b.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Trong biểu đồ tần số ghép nhóm dạng cột, các cột được vẽ sát nhau.', answer: true, explain: 'Các nhóm liên tiếp nhau.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Từ bảng tần số ghép nhóm ta biết chính xác từng giá trị của mẫu.', answer: false, explain: 'Chỉ biết số giá trị trong mỗi nhóm.' }
    ]
  });
})();
