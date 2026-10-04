/* Toán 9 – Bài 22. Bảng tần số và biểu đồ tần số. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-9/bai-22', {
    objectives: [
      'Hiểu khái niệm tần số của một giá trị trong mẫu dữ liệu.',
      'Lập được bảng tần số từ dãy số liệu thống kê.',
      'Vẽ và đọc được biểu đồ tần số dạng cột và dạng đoạn thẳng.',
      'Rút ra nhận xét đơn giản về dữ liệu từ bảng và biểu đồ tần số.'
    ],
    intro: 'Cô giáo ghi lại điểm kiểm tra của 30 học sinh. Thay vì đọc 30 con số rời rạc, ta đếm xem mỗi mức điểm xuất hiện bao nhiêu lần – đó là tần số.',
    steps: [
      { title: 'Tần số', html: `<p>Số lần xuất hiện của một giá trị trong mẫu dữ liệu gọi là <b>tần số</b> của giá trị đó.</p><p>Ví dụ: dãy 7, 8, 7, 9, 7, 8 có giá trị 7 xuất hiện 3 lần ⇒ tần số của 7 là 3. Tổng các tần số bằng số giá trị của mẫu (cỡ mẫu N).</p>` },
      { title: 'Bảng tần số', html: `<p>Bảng tần số gồm hai dòng (hoặc hai cột): các giá trị khác nhau x và tần số n tương ứng.</p><table class="tbl"><tr><th>Điểm (x)</th><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><th>Cộng</th></tr><tr><th>Tần số (n)</th><td>2</td><td>4</td><td>7</td><td>9</td><td>5</td><td>3</td><td>N = 30</td></tr></table><p>Mẹo đếm: gạch từng số liệu đã đếm, ghi vạch theo nhóm 5 để tránh sót.</p>` },
      { title: 'Biểu đồ tần số dạng cột', html: `<p>Trục ngang ghi các giá trị, trục đứng ghi tần số; mỗi giá trị ứng với một cột có chiều cao bằng tần số.</p>`,
        svg: S.bar({ title: 'Điểm kiểm tra của lớp 9A', cats: ['5', '6', '7', '8', '9', '10'], series: [{ name: 'Tần số', values: [2, 4, 7, 9, 5, 3], color: C.blue }], yMax: 10, yStep: 2, yLabel: 'Tần số', xLabel: 'Điểm', width: 480, height: 280 }), caption: 'Biểu đồ tần số dạng cột.' },
      { title: 'Biểu đồ tần số dạng đoạn thẳng', html: `<p>Biểu diễn mỗi cặp (giá trị; tần số) bằng một điểm rồi nối các điểm liên tiếp bằng đoạn thẳng. Dạng này giúp thấy rõ xu hướng tăng giảm.</p>`,
        svg: S.lineChart({ title: 'Điểm kiểm tra của lớp 9A', cats: ['5', '6', '7', '8', '9', '10'], values: [2, 4, 7, 9, 5, 3], yMax: 10, yStep: 2, yLabel: 'Tần số', xLabel: 'Điểm', width: 480, height: 280 }), caption: 'Biểu đồ tần số dạng đoạn thẳng.' },
      { title: 'Nhận xét từ biểu đồ', html: `<ul><li>Điểm 8 có tần số lớn nhất (9 học sinh).</li><li>Số học sinh đạt từ 8 điểm trở lên: 9 + 5 + 3 = 17.</li><li>Điểm thấp nhất là 5, cao nhất là 10.</li></ul>` }
    ],
    summary: 'Tần số là số lần xuất hiện của một giá trị; tổng các tần số bằng cỡ mẫu N. Bảng tần số và biểu đồ tần số (cột, đoạn thẳng) giúp tổ chức và nhận xét dữ liệu.',
    examples: [
      { title: 'Lập bảng', problem: 'Số con trong 20 gia đình: 2, 1, 2, 3, 2, 1, 0, 2, 2, 1, 3, 2, 1, 2, 0, 2, 1, 2, 3, 2. Lập bảng tần số.', solution: 'Giá trị 0: 2; 1: 5; 2: 10; 3: 3. Tổng 20.' },
      { title: 'Đọc biểu đồ', problem: 'Từ biểu đồ điểm lớp 9A, có bao nhiêu học sinh đạt dưới 7 điểm?', solution: '2 + 4 = 6 học sinh.' },
      { title: 'Tìm giá trị thiếu', problem: 'Bảng tần số cỡ mẫu 40 có các tần số 6, 11, m, 9, 4. Tìm m.', solution: 'm = 40 − (6 + 11 + 9 + 4) = 10.' }
    ],
    exercises: [
      { question: 'Cỡ giày của 15 bạn: 38, 39, 38, 40, 37, 38, 39, 41, 38, 39, 40, 38, 37, 39, 38. Lập bảng tần số và cho biết cỡ nào phổ biến nhất.', hints: ['Đếm lần lượt 37, 38, 39, 40, 41.', 'Cỡ 38 xuất hiện 6 lần.'], solution: '37: 2; 38: 6; 39: 4; 40: 2; 41: 1. Cỡ 38 phổ biến nhất.' },
      { question: 'Với bảng điểm lớp 9A, tính điểm trung bình của lớp (làm tròn đến hàng phần mười).', hints: ['Tính tổng x·n.', '(10 + 24 + 49 + 72 + 45 + 30) : 30.'], solution: '230 : 30 ≈ 7,7.' },
      { question: 'Vì sao biểu đồ tần số dạng đoạn thẳng thích hợp để biểu diễn số ca mắc bệnh theo tháng?', hints: ['Các giá trị được sắp theo thời gian.', 'Cần thấy xu hướng tăng, giảm.'], solution: 'Vì các điểm nối liên tiếp thể hiện rõ xu hướng biến đổi theo thời gian.' }
    ],
    quiz: [
      { type: 'short', calc: '2 + 4 + 7 + 9 + 5 + 3', q: 'Bảng tần số điểm có các tần số 2; 4; 7; 9; 5; 3. Cỡ mẫu N bằng?', answer: '30', explain: 'Tổng các tần số.' },
      { type: 'short', calc: '40 - (6 + 11 + 9 + 4)', q: 'Mẫu có cỡ 40, các tần số 6; 11; m; 9; 4. Tìm m.', answer: '10', explain: '40 − 30.' },
      { type: 'short', calc: '9 + 5 + 3', q: 'Lớp 9A (điểm 8, 9, 10 có tần số 9; 5; 3). Số học sinh đạt từ 8 trở lên?', unit: 'học sinh', answer: '17', explain: 'Cộng các tần số.' },
      { type: 'short', calc: 'round((5*2 + 6*4 + 7*7 + 8*9 + 9*5 + 10*3) / 30, 1)', q: 'Điểm trung bình lớp 9A (điểm 5→10 có tần số 2; 4; 7; 9; 5; 3), làm tròn đến hàng phần mười?', answer: '7.7', explain: '230 : 30.' },
      { type: 'short', calc: '[2, 1, 2, 3, 2, 1, 0, 2, 2, 1, 3, 2, 1, 2, 0, 2, 1, 2, 3, 2].filter(v => v === 2).length', q: 'Dãy số con: 2, 1, 2, 3, 2, 1, 0, 2, 2, 1, 3, 2, 1, 2, 0, 2, 1, 2, 3, 2. Tần số của giá trị 2?', answer: '10', explain: 'Đếm số lần xuất hiện.' },
      { type: 'mcq', q: 'Trong biểu đồ tần số dạng cột, chiều cao mỗi cột biểu diễn:', options: ['giá trị', 'tần số', 'cỡ mẫu', 'số giá trị khác nhau'], answer: 1, explain: 'Trục đứng là tần số.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tổng các tần số trong bảng tần số bằng cỡ mẫu.', answer: true, explain: 'Mỗi số liệu được đếm đúng một lần.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Giá trị có tần số lớn nhất luôn là giá trị lớn nhất của mẫu.', answer: false, explain: 'Ở lớp 9A, điểm 8 có tần số lớn nhất nhưng giá trị lớn nhất là 10.' }
    ]
  });
})();
