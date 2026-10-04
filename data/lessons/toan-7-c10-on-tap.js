/* Toán 7 – Bài tập cuối chương X. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, C = S.C;
THCS.registerLesson('toan-7/c10-on-tap', {
  objectives: [
    'Hệ thống kiến thức chương X: hình hộp chữ nhật, hình lập phương, lăng trụ đứng tam giác và tứ giác.',
    'Giải bài tập tổng hợp về diện tích xung quanh, toàn phần, thể tích.',
    'Vận dụng vào bài toán thực tế có nhiều bước tính và đổi đơn vị.'
  ],
  intro: 'Ôn tập chương X – chương cuối của Toán 7. Tất cả các hình khối trong chương đều là lăng trụ đứng, nên chỉ cần nhớ hai công thức!',
  steps: [
    { title: 'Sơ đồ chương', html: `<p>Các hình khối và công thức:</p>`,
      svg: S.mindmap({ center: 'Lăng trụ đứng', branches: [{ title: 'Hình hộp chữ nhật', items: ['Sxq = 2(a + b)c', 'V = abc'] }, { title: 'Lập phương', items: ['Sxq = 4a²', 'V = a³'] }, { title: 'Lăng trụ tam giác', items: ['đáy tam giác', '6 đỉnh, 9 cạnh'] }, { title: 'Công thức chung', items: ['Sxq = C.h', 'V = S.h'] }] }) },
    { title: 'So sánh các hình', html: `<table class="tbl"><tr><th></th><th>Đỉnh</th><th>Cạnh</th><th>Mặt</th></tr><tr><td>Lăng trụ tam giác</td><td>6</td><td>9</td><td>5</td></tr><tr><td>Lăng trụ tứ giác (hộp)</td><td>8</td><td>12</td><td>6</td></tr></table>` },
    { title: 'Hình ghép', html: `<p>Một khối gồm hình hộp chữ nhật 6 × 4 × 3 (cm) đặt trên hình lập phương cạnh 2 cm: V = 72 + 8 = 80 cm³. Với hình ghép, tính thể tích từng phần rồi cộng (hoặc trừ phần khoét).</p>`,
      svg: S.solid({ kind: 'lapphuong', a: 3, names: false, fill: C.yellowL, dims: { a: '3 cm' } }),
      caption: 'Lập phương cạnh 3 cm: V = 27 cm³, S<sub>tp</sub> = 54 cm².' },
    { title: 'Lỗi thường gặp', html: `<ul><li>Nhầm chiều cao lăng trụ với chiều cao tam giác đáy.</li><li>Quên đổi đơn vị (cm – m, lít – dm³).</li><li>Tính S<sub>xq</sub> thay cho S<sub>tp</sub> khi đề hỏi “bọc kín”, “sơn tất cả các mặt”.</li></ul>` }
  ],
  summary: 'Hình hộp chữ nhật, lập phương, lăng trụ đứng tam giác/tứ giác: S<sub>xq</sub> = chu vi đáy · h; V = S<sub>đáy</sub> · h; S<sub>tp</sub> = S<sub>xq</sub> + 2S<sub>đáy</sub>.',
  examples: [
    { title: 'Hình ghép', problem: 'Khối gồm hình hộp 6 × 4 × 3 cm và lập phương cạnh 2 cm. Tính thể tích.', solution: '72 + 8 = 80 cm³.' },
    { title: 'Sơn thùng', problem: 'Thùng lập phương cạnh 0,5 m không nắp. Tính diện tích cần sơn mặt ngoài.', solution: '5 mặt: 5 · 0,25 = 1,25 m².' },
    { title: 'Lăng kính', problem: 'Lăng kính lăng trụ tam giác đều cạnh đáy 3 cm, cao 6 cm. Tính S<sub>xq</sub>.', solution: '9 · 6 = 54 cm².' }
  ],
  exercises: [
    { question: 'Bể bơi dài 25 m, rộng 10 m, sâu 1,6 m. Bơm nước đầy {{3|4}} bể thì cần bao nhiêu m³?', hints: ['V bể = 400 m³.', '{{3|4}} · 400.'], solution: '300 m³.' },
    { question: 'Hình lập phương có S<sub>tp</sub> = 150 cm². Tính thể tích.', hints: ['Một mặt 25 cm² ⇒ a = 5.', '5<sup>3</sup>.'], solution: '125 cm³.' },
    { question: 'Khối gỗ hộp 10 × 8 × 6 cm bị khoét một lỗ lập phương cạnh 2 cm. Tính thể tích còn lại.', hints: ['480 − 8.', 'Trừ phần khoét.'], solution: '472 cm³.' }
  ],
  quiz: [
    { type: 'short', calc: '6 * 4 * 3 + 2 * 2 * 2', q: 'Khối gồm hình hộp 6 × 4 × 3 cm và lập phương cạnh 2 cm. Thể tích (cm³)?', unit: 'cm³', answer: '80', explain: '72 + 8.' },
    { type: 'short', calc: '5 * 0.5 * 0.5', q: 'Thùng lập phương cạnh 0,5 m không nắp. Diện tích sơn mặt ngoài (m²)?', unit: 'm²', answer: '1.25', answerText: '1,25', explain: '5 mặt.' },
    { type: 'short', calc: '3 / 4 * 25 * 10 * 1.6', q: 'Bể bơi 25 m × 10 m, sâu 1,6 m. Nước đầy {{3|4}} bể là bao nhiêu m³?', unit: 'm³', answer: '300', explain: '{{3|4}} · 400.' },
    { type: 'short', calc: 'Math.pow(sqrt(150 / 6), 3)', q: 'Hình lập phương có S<sub>tp</sub> = 150 cm². Thể tích (cm³)?', unit: 'cm³', answer: '125', explain: 'a = 5.' },
    { type: 'short', calc: '10 * 8 * 6 - 2 * 2 * 2', q: 'Khối gỗ 10 × 8 × 6 cm khoét lỗ lập phương cạnh 2 cm. Thể tích còn lại (cm³)?', unit: 'cm³', answer: '472', explain: '480 − 8.' },
    { type: 'mcq', q: 'Hình lăng trụ đứng tam giác có bao nhiêu cạnh?', options: ['6', '8', '9', '12'], answer: 2, explain: '3 cạnh đáy dưới + 3 cạnh đáy trên + 3 cạnh bên.' },
    { type: 'short', calc: '3 * 3 * 6', q: 'Lăng kính tam giác đều cạnh đáy 3 cm, cao 6 cm. S<sub>xq</sub> (cm²)?', unit: 'cm²', answer: '54', explain: '9 · 6.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khi đề hỏi “sơn tất cả các mặt” của hộp kín, ta tính diện tích toàn phần.', answer: true, explain: 'Gồm cả hai đáy.' }
  ]
});
})();
