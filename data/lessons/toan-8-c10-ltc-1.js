/* Toán 8 – Luyện tập chung (sau Bài 39). Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-8/c10-ltc-1', {
    objectives: [
      'Nhận biết và phân biệt hình chóp tam giác đều, hình chóp tứ giác đều qua các yếu tố đỉnh, cạnh, mặt.',
      'Tính diện tích xung quanh, diện tích toàn phần và thể tích của hình chóp đều.',
      'Vận dụng định lí Pythagore để tính trung đoạn, chiều cao của hình chóp tứ giác đều.'
    ],
    intro: 'Hình chóp đều xuất hiện ở mái nhà, chụp đèn, hộp quà. Buổi luyện tập giúp tính nhanh diện tích vật liệu và thể tích của chúng.',
    steps: [
      { title: 'Bảng so sánh', html: `<table class="tbl"><tr><th></th><th>Chóp tam giác đều</th><th>Chóp tứ giác đều</th></tr><tr><td>Đáy</td><td>tam giác đều</td><td>hình vuông</td></tr><tr><td>Số mặt</td><td>4</td><td>5</td></tr><tr><td>Số cạnh</td><td>6</td><td>8</td></tr><tr><td>Số đỉnh</td><td>4</td><td>5</td></tr></table>` },
      { title: 'Tam giác vuông SOM', html: `<p>Trong hình chóp tứ giác đều cạnh đáy a: OM = {{a|2}}, SO = h, SM = d và d<sup>2</sup> = h<sup>2</sup> + ({{a|2}})<sup>2</sup>.</p>`,
        svg: S.pyramid({ kind: 'chop4', diag: false, dims: { h: 'h', d: 'd' } }), caption: 'Tam giác SOM vuông tại O.' },
      { title: 'Công thức chung', html: `<div class="box key">S<sub>xq</sub> = p · d; S<sub>tp</sub> = S<sub>xq</sub> + S<sub>đáy</sub>; V = {{1|3}} · S<sub>đáy</sub> · h.</div>` },
      { title: 'Đổi đơn vị', html: `<p>1 dm³ = 1 lít; 1 m³ = 1000 lít; 1 m² = 10 000 cm². Luôn đưa về cùng đơn vị trước khi tính.</p>` }
    ],
    summary: 'Chóp tam giác đều: 4 mặt, 6 cạnh. Chóp tứ giác đều: 5 mặt, 8 cạnh. S<sub>xq</sub> = p · d, V = {{1|3}} · S<sub>đáy</sub> · h; d² = h² + ({{a|2}})² với chóp tứ giác đều.',
    examples: [
      { title: 'Chụp đèn', problem: 'Chụp đèn hình chóp tứ giác đều (không có đáy) cạnh đáy 20 cm, trung đoạn 25 cm. Tính diện tích vải cần dùng.', solution: 'S<sub>xq</sub> = 40 · 25 = 1000 cm².' },
      { title: 'Thể tích theo lít', problem: 'Một bình hình chóp tứ giác đều (đặt ngược) cạnh đáy 3 dm, chiều cao 4 dm. Bình chứa được bao nhiêu lít?', solution: 'V = {{1|3}} · 9 · 4 = 12 dm³ = 12 lít.' },
      { title: 'Tính chiều cao', problem: 'Hình chóp tứ giác đều cạnh đáy 16 cm, trung đoạn 17 cm. Tính chiều cao và thể tích.', solution: 'h = √(289 − 64) = 15 cm; V = {{1|3}} · 256 · 15 = 1280 cm³.' }
    ],
    exercises: [
      { question: 'Hình chóp tam giác đều có cạnh đáy 8 cm, trung đoạn 10 cm. Tính S<sub>xq</sub>.', hints: ['p = 12 cm.', 'S<sub>xq</sub> = 12 · 10.'], solution: '120 cm².' },
      { question: 'Mái một tháp chuông hình chóp tứ giác đều cạnh đáy 6 m, chiều cao 4 m. Tính diện tích mái.', hints: ['d = √(16 + 9) = 5 m.', 'S<sub>xq</sub> = 12 · 5.'], solution: '60 m².' },
      { question: 'Một khối gỗ hình lập phương cạnh 6 cm được gọt thành hình chóp tứ giác đều có cùng đáy và cùng chiều cao. Tính thể tích phần gỗ bị gọt bỏ.', hints: ['V<sub>lập phương</sub> = 216 cm³.', 'V<sub>chóp</sub> = {{1|3}} · 36 · 6 = 72 cm³.'], solution: '216 − 72 = 144 cm³.' }
    ],
    quiz: [
      { type: 'mcq', q: 'Hình chóp tứ giác đều có bao nhiêu đỉnh?', options: ['4', '5', '6', '8'], answer: 1, explain: 'S và 4 đỉnh đáy.' },
      { type: 'short', calc: '2 * 20 * 25', q: 'Chụp đèn hình chóp tứ giác đều không đáy, cạnh đáy 20 cm, trung đoạn 25 cm. Diện tích vải?', unit: 'cm²', answer: '1000', explain: 'p = 40.' },
      { type: 'short', calc: '3 * 3 * 4 / 3', q: 'Bình hình chóp tứ giác đều cạnh đáy 3 dm, cao 4 dm chứa được bao nhiêu lít?', unit: 'lít', answer: '12', explain: '12 dm³.' },
      { type: 'short', calc: 'sqrt(17*17 - 8*8)', q: 'Hình chóp tứ giác đều cạnh đáy 16 cm, trung đoạn 17 cm. Chiều cao?', unit: 'cm', answer: '15', explain: '√(289 − 64).' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hình chóp tam giác đều có 6 cạnh.', answer: true, explain: '3 cạnh đáy + 3 cạnh bên.' },
      { type: 'short', calc: '6 * 6 * 6 - 6 * 6 * 6 / 3', q: 'Lập phương cạnh 6 cm gọt thành hình chóp tứ giác đều cùng đáy, cùng chiều cao. Thể tích gỗ bỏ đi?', unit: 'cm³', answer: '144', explain: '216 − 72.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Thể tích hình chóp bằng nửa thể tích hình lăng trụ cùng đáy, cùng chiều cao.', answer: false, explain: 'Bằng một phần ba.' },
      { type: 'short', calc: '12 * sqrt(4*4 + 3*3)', q: 'Mái tháp hình chóp tứ giác đều cạnh đáy 6 m, cao 4 m. Diện tích mái?', unit: 'm²', answer: '60', explain: 'd = 5, p = 12.' }
    ]
  });
})();
