/* Toán 9 – Bài tập cuối chương VII. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-9/c7-on-tap', {
    objectives: [
      'Hệ thống hoá các khái niệm: tần số, tần số tương đối, ghép nhóm, giá trị đại diện.',
      'Lập bảng và vẽ, đọc các loại biểu đồ tần số, tần số tương đối (kể cả ghép nhóm).',
      'Vận dụng để phân tích dữ liệu thực tế và so sánh các mẫu.'
    ],
    intro: 'Ôn tập chương VII: tổ chức dữ liệu bằng bảng và biểu đồ để rút ra thông tin.',
    steps: [
      { title: 'Sơ đồ chương', html: `<p>Các nội dung chính:</p>`,
        svg: S.mindmap({ center: 'Tần số', branches: [
          { title: 'Tần số', items: ['Số lần xuất hiện', 'Tổng = N'] },
          { title: 'Tần số tương đối', items: ['f = n/N', 'Tổng = 100%', 'Góc = f · 360°'] },
          { title: 'Ghép nhóm', items: ['Nhóm [a; b)', 'Đại diện (a + b)/2'] },
          { title: 'Biểu đồ', items: ['Cột, đoạn thẳng', 'Hình quạt tròn', 'Cột sát nhau (ghép nhóm)'] }
        ] }) },
      { title: 'Ví dụ tổng hợp', html: `<p>Thời gian (phút) đi từ nhà đến trường của 50 học sinh:</p><table class="tbl"><tr><th>Nhóm</th><td>[0; 10)</td><td>[10; 20)</td><td>[20; 30)</td><td>[30; 40)</td></tr><tr><th>Tần số</th><td>12</td><td>20</td><td>13</td><td>5</td></tr><tr><th>f (%)</th><td>24</td><td>40</td><td>26</td><td>10</td></tr></table>`,
        svg: S.histogram({ title: 'Tần số tương đối (%)', edges: [0, 10, 20, 30, 40], values: [24, 40, 26, 10], yMax: 50, yStep: 10, unit: '%', xLabel: 'Thời gian (phút)', color: C.green }), caption: 'Biểu đồ tần số tương đối ghép nhóm.' },
      { title: 'Ước lượng số trung bình', html: `<p>Dùng giá trị đại diện 5; 15; 25; 35: {{5·12 + 15·20 + 25·13 + 35·5|50}} = {{860|50}} = 17,2 phút.</p>` },
      { title: 'Sai lầm thường gặp', html: `<ul><li>Xếp đầu mút b vào nhóm [a; b) (sai: b thuộc nhóm sau).</li><li>Tính tần số tương đối nhưng quên chia cho cỡ mẫu.</li><li>So sánh hai mẫu khác cỡ bằng tần số thay vì tần số tương đối.</li></ul>` }
    ],
    summary: 'Tần số và tần số tương đối (f = n/N); ghép nhóm [a; b) với giá trị đại diện (a + b)/2; các loại biểu đồ và cách đọc; ước lượng trung bình bằng giá trị đại diện.',
    examples: [
      { title: 'Đọc bảng', problem: 'Với bảng thời gian đến trường, có bao nhiêu phần trăm học sinh mất từ 20 phút trở lên?', solution: '26% + 10% = 36%.' },
      { title: 'Góc hình quạt', problem: 'Vẽ biểu đồ hình quạt cho bảng trên, tính góc của nhóm [10; 20).', solution: '40% · 360° = 144°.' },
      { title: 'So sánh', problem: 'Lớp A có 12/40 bạn đạt loại Tốt; lớp B có 10/32. Lớp nào tỉ lệ cao hơn?', solution: 'A: 30%; B: 31,25% ⇒ lớp B.' }
    ],
    exercises: [
      { question: 'Điểm thi của 20 bạn: 6, 7, 8, 5, 9, 7, 8, 8, 6, 7, 9, 10, 8, 7, 6, 8, 9, 7, 8, 5. Lập bảng tần số và tần số tương đối.', hints: ['Đếm từng giá trị 5 → 10.', 'Chia cho 20.'], solution: '5: 2 (10%); 6: 3 (15%); 7: 5 (25%); 8: 6 (30%); 9: 3 (15%); 10: 1 (5%).' },
      { question: 'Tính điểm trung bình của 20 bạn ở bài trên.', hints: ['Σx·n = 10 + 18 + 35 + 48 + 27 + 10.', 'Chia cho 20.'], solution: '148 : 20 = 7,4.' },
      { question: 'Trong bảng thời gian đến trường, ước lượng số học sinh mất dưới 15 phút, giả sử các giá trị trong nhóm [10; 20) phân bố đều.', hints: ['Nhóm [0; 10): 12 bạn.', 'Nửa nhóm [10; 20): 10 bạn.'], solution: 'Khoảng 22 học sinh.' }
    ],
    quiz: [
      { type: 'short', calc: '26 + 10', q: 'Bảng thời gian: [20; 30) chiếm 26%, [30; 40) chiếm 10%. Phần trăm học sinh mất từ 20 phút trở lên?', unit: '%', answer: '36', explain: 'Cộng hai nhóm.' },
      { type: 'short', calc: '0.4 * 360', q: 'Nhóm có tần số tương đối 40%. Góc hình quạt (độ)?', unit: '°', answer: '144', explain: '0,4 · 360°.' },
      { type: 'short', calc: '(5*12 + 15*20 + 25*13 + 35*5) / 50', q: 'Ước lượng thời gian trung bình (phút) từ bảng: [0; 10): 12, [10; 20): 20, [20; 30): 13, [30; 40): 5.', unit: 'phút', answer: '17.2', explain: '860 : 50.' },
      { type: 'short', calc: '(5*2 + 6*3 + 7*5 + 8*6 + 9*3 + 10*1) / 20', q: 'Điểm 5; 6; 7; 8; 9; 10 có tần số 2; 3; 5; 6; 3; 1. Điểm trung bình?', answer: '7.4', explain: '148 : 20.' },
      { type: 'short', calc: '10 / 32 * 100', q: 'Lớp B có 10/32 bạn loại Tốt. Tỉ lệ (%)?', unit: '%', answer: '31.25', explain: '10/32.' },
      { type: 'mcq', q: 'Giá trị đại diện của nhóm [20; 30) là:', options: ['20', '25', '30', '10'], answer: 1, explain: '(20 + 30)/2.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Giá trị 30 thuộc nhóm [20; 30).', answer: false, explain: 'Thuộc nhóm [30; 40).' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tổng các góc ở tâm trong biểu đồ hình quạt tròn bằng 360°.', answer: true, explain: 'Ứng với 100%.' }
    ]
  });
})();
