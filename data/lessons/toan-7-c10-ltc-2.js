/* Toán 7 – Chương X. Luyện tập (sau Bài 37). Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, C = S.C;
THCS.registerLesson('toan-7/c10-ltc-2', {
  objectives: [
    'Củng cố các yếu tố và công thức của hình lăng trụ đứng tam giác, tứ giác.',
    'Tính diện tích xung quanh, thể tích với đáy là tam giác, hình thang, hình thoi, hình bình hành.',
    'Giải bài toán thực tế: tính lượng vật liệu, dung tích.'
  ],
  intro: 'Luyện tập Bài 37. Mọi lăng trụ đứng đều dùng chung hai công thức; điều khác nhau chỉ là cách tính chu vi và diện tích đáy.',
  steps: [
    { title: 'Hai công thức chung', html: `<p style="text-align:center"><b>S<sub>xq</sub> = C<sub>đáy</sub> · h &nbsp;&nbsp;&nbsp; V = S<sub>đáy</sub> · h</b></p>
      <p>Diện tích toàn phần: S<sub>tp</sub> = S<sub>xq</sub> + 2S<sub>đáy</sub>.</p>` },
    { title: 'Nhắc lại diện tích đáy', html: `<table class="tbl"><tr><th>Đáy</th><th>Diện tích</th></tr><tr><td>Tam giác</td><td>{{1|2}} · cạnh · đường cao tương ứng</td></tr><tr><td>Hình thang</td><td>(đáy lớn + đáy bé) · cao : 2</td></tr><tr><td>Hình thoi</td><td>tích hai đường chéo : 2</td></tr><tr><td>Hình bình hành</td><td>cạnh đáy · chiều cao</td></tr></table>` },
    { title: 'Đặt lăng trụ “nằm”', html: `<p>Một lăng trụ đặt nằm ngang (như lều, máng nước) thì “chiều cao lăng trụ” là chiều dài nằm ngang. Luôn xác định hai đáy trước – đó là hai mặt đa giác bằng nhau, song song.</p>`,
      svg: S.solid({ kind: 'langtru3', a: 5, b: 4, c: 2.6, names: false, fill: C.orangeL, dims: { a: '3 m', c: '2 m' } }),
      caption: 'Khối bê tông lăng trụ tam giác: xác định đáy trước khi tính.' },
    { title: 'Bài toán vật liệu', html: `<p>Máng nước lăng trụ đứng đáy hình thang (miệng 60 cm, đáy 40 cm, sâu 30 cm), dài 2 m = 200 cm. Dung tích: (60 + 40) · 30 : 2 · 200 = 300 000 cm³ = 300 lít.</p>` }
  ],
  summary: 'S<sub>xq</sub> = chu vi đáy · h; V = S<sub>đáy</sub> · h; S<sub>tp</sub> = S<sub>xq</sub> + 2S<sub>đáy</sub>. Xác định đúng hai đáy; đổi đơn vị trước khi tính.',
  examples: [
    { title: 'Đáy hình thoi', problem: 'Lăng trụ đứng đáy hình thoi cạnh 5 cm, hai đường chéo 6 cm và 8 cm, chiều cao 10 cm. Tính S<sub>xq</sub> và V.', solution: 'S<sub>xq</sub> = 20 · 10 = 200 cm²; V = 24 · 10 = 240 cm³.' },
    { title: 'Máng nước', problem: 'Máng đáy hình thang (60 cm, 40 cm, sâu 30 cm), dài 200 cm. Dung tích bao nhiêu lít?', solution: '300 lít.' },
    { title: 'Toàn phần', problem: 'Lăng trụ đáy tam giác vuông 3 – 4 – 5 cm, h = 10 cm. Tính S<sub>tp</sub>.', solution: '120 + 2 · 6 = 132 cm².' }
  ],
  exercises: [
    { question: 'Lăng trụ đứng đáy hình bình hành cạnh 6 cm, chiều cao tương ứng 4 cm; chiều cao lăng trụ 5 cm. Tính V.', hints: ['S<sub>đáy</sub> = 24.', '24 · 5.'], solution: '120 cm³.' },
    { question: 'Lều trại lăng trụ tam giác: tam giác cân đáy 2,4 m, cạnh bên 2 m, cao 1,6 m; dài 3 m. Tính diện tích vải làm hai mái và hai đầu lều.', hints: ['Hai mái: 2 · 2 · 3.', 'Hai đầu: 2 · {{1|2}} · 2,4 · 1,6.'], solution: '12 + 3,84 = 15,84 m².' },
    { question: 'Lăng trụ đứng tam giác có V = 150 cm³, h = 10 cm, một cạnh đáy 6 cm. Tính đường cao tương ứng của tam giác đáy.', hints: ['S<sub>đáy</sub> = 15.', '15 · 2 : 6.'], solution: '5 cm.' }
  ],
  quiz: [
    { type: 'short', calc: '4 * 5 * 10', q: 'Lăng trụ đứng đáy hình thoi cạnh 5 cm, chiều cao 10 cm. S<sub>xq</sub> (cm²)?', unit: 'cm²', answer: '200', explain: '20 · 10.' },
    { type: 'short', calc: '6 * 8 / 2 * 10', q: 'Đáy hình thoi hai đường chéo 6 cm, 8 cm; h = 10 cm. V (cm³)?', unit: 'cm³', answer: '240', explain: '24 · 10.' },
    { type: 'short', calc: '(60 + 40) * 30 / 2 * 200 / 1000', q: 'Máng đáy hình thang (60 cm, 40 cm, sâu 30 cm), dài 200 cm. Dung tích (lít)?', unit: 'lít', answer: '300', explain: '300 000 cm³.' },
    { type: 'short', calc: '(3 + 4 + 5) * 10 + 2 * (3 * 4 / 2)', q: 'Lăng trụ đáy tam giác vuông 3 – 4 – 5 cm, h = 10 cm. S<sub>tp</sub> (cm²)?', unit: 'cm²', answer: '132', explain: '120 + 12.' },
    { type: 'mcq', q: 'Lăng trụ đứng đáy hình bình hành cạnh 6 cm, chiều cao tương ứng 4 cm; chiều cao lăng trụ 5 cm. Thể tích là:', options: ['60 cm³', '120 cm³', '150 cm³', '240 cm³'], answer: 1, explain: 'S<sub>đáy</sub> = 24 cm²; V = 24 · 5 = 120 cm³.' },
    { type: 'short', calc: '2 * 2 * 3 + 2 * (2.4 * 1.6 / 2)', q: 'Lều: hai mái 2 m × 3 m; hai đầu tam giác đáy 2,4 m, cao 1,6 m. Tổng diện tích vải (m²)?', unit: 'm²', answer: '15.84', answerText: '15,84', explain: '12 + 3,84.' },
    { type: 'short', calc: '150 / 10 * 2 / 6', q: 'Lăng trụ tam giác V = 150 cm³, h = 10 cm, cạnh đáy 6 cm. Đường cao tương ứng của đáy (cm)?', unit: 'cm', answer: '5', explain: 'S<sub>đáy</sub> = 15.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: S<sub>tp</sub> = S<sub>xq</sub> + 2S<sub>đáy</sub>.', answer: true, explain: 'Thêm hai đáy.' }
  ]
});
})();
