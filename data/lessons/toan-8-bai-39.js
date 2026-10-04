/* Toán 8 – Bài 39. Hình chóp tứ giác đều. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-8/bai-39', {
    objectives: [
      'Mô tả được đỉnh, mặt đáy, mặt bên, cạnh bên, chiều cao, trung đoạn của hình chóp tứ giác đều.',
      'Tạo lập được hình chóp tứ giác đều từ hình khai triển.',
      'Tính được diện tích xung quanh và thể tích của hình chóp tứ giác đều.',
      'Giải quyết được bài toán thực tế gắn với hình chóp tứ giác đều (kim tự tháp, mái nhà, chụp đèn).'
    ],
    intro: 'Kim tự tháp Kheops ở Ai Cập, mái chòi nghỉ, chiếc chụp đèn… có dạng hình chóp đáy vuông. Đó là hình chóp tứ giác đều.',
    steps: [
      { title: 'Nhận biết hình chóp tứ giác đều', html: `<p>Hình chóp tứ giác đều S.ABCD có:</p><ul><li><b>đáy</b> ABCD là hình vuông;</li><li>bốn cạnh bên SA, SB, SC, SD bằng nhau;</li><li>bốn mặt bên là các tam giác cân bằng nhau.</li></ul>`,
        svg: S.pyramid({ kind: 'chop4', height: false, apothem: false, diag: false }), caption: 'Hình chóp tứ giác đều S.ABCD (các cạnh khuất vẽ nét đứt).' },
      { title: 'Chiều cao và trung đoạn', html: `<ul><li><b>Chiều cao</b> SO với O là giao hai đường chéo của hình vuông đáy.</li><li><b>Trung đoạn</b> SM với M là trung điểm cạnh đáy.</li></ul><p>Tam giác SOM vuông tại O, OM bằng nửa cạnh đáy: SM<sup>2</sup> = SO<sup>2</sup> + OM<sup>2</sup>.</p>`,
        svg: S.pyramid({ kind: 'chop4', dims: { h: 'h', d: 'd', a: 'a' } }), caption: 'SO = h, SM = d, AB = a.' },
      { title: 'Hình khai triển', html: `<p>Một hình vuông ở giữa và bốn tam giác cân bằng nhau gắn vào bốn cạnh của nó.</p>`,
        svg: S.draw({ w: 280, h: 280, items: [
          { poly: [[100, 100], [180, 100], [180, 180], [100, 180]], fill: C.blueL },
          { poly: [[100, 100], [180, 100], [140, 30]], fill: C.orangeL },
          { poly: [[180, 100], [180, 180], [250, 140]], fill: C.orangeL },
          { poly: [[180, 180], [100, 180], [140, 250]], fill: C.orangeL },
          { poly: [[100, 180], [100, 100], [30, 140]], fill: C.orangeL },
          { text: [140, 145, 'đáy'], size: 13, color: C.blue, bold: true }
        ] }), caption: 'Hình khai triển của hình chóp tứ giác đều.' },
      { title: 'Công thức', html: `<div class="box key">S<sub>xq</sub> = p · d (p là nửa chu vi đáy = 2a) &nbsp;&nbsp; V = {{1|3}} · a<sup>2</sup> · h.</div><p>S<sub>tp</sub> = S<sub>xq</sub> + a<sup>2</sup>.</p>` },
      { title: 'Ứng dụng', html: `<p>Kim tự tháp Kheops (khi mới xây) có đáy là hình vuông cạnh khoảng 230 m, cao khoảng 147 m. Thể tích xấp xỉ {{1|3}} · 230<sup>2</sup> · 147 ≈ 2 592 100 m³.</p>` }
    ],
    summary: 'Hình chóp tứ giác đều: đáy hình vuông, bốn cạnh bên bằng nhau. S<sub>xq</sub> = p · d = 2a · d; V = {{1|3}} · a² · h; d² = h² + ({{a|2}})².',
    examples: [
      { title: 'Diện tích xung quanh', problem: 'Hình chóp tứ giác đều cạnh đáy 10 cm, trung đoạn 13 cm. Tính S<sub>xq</sub> và S<sub>tp</sub>.', solution: 'p = 20 cm; S<sub>xq</sub> = 20 · 13 = 260 cm²; S<sub>tp</sub> = 260 + 100 = 360 cm².' },
      { title: 'Thể tích', problem: 'Hình chóp tứ giác đều cạnh đáy 6 cm, chiều cao 4 cm. Tính thể tích.', solution: 'V = {{1|3}} · 36 · 4 = 48 cm³.' },
      { title: 'Tính trung đoạn từ chiều cao', problem: 'Hình chóp tứ giác đều cạnh đáy 10 cm, chiều cao 12 cm. Tính trung đoạn và S<sub>xq</sub>.', solution: 'OM = 5 cm; d = √(144 + 25) = 13 cm; S<sub>xq</sub> = 20 · 13 = 260 cm².' }
    ],
    exercises: [
      { question: 'Mái một chòi nghỉ có dạng hình chóp tứ giác đều, cạnh đáy 4 m, trung đoạn 3 m. Tính diện tích mái (không tính đáy).', hints: ['p = 8 m.', 'S<sub>xq</sub> = p · d.'], solution: '8 · 3 = 24 m².' },
      { question: 'Hình chóp tứ giác đều có thể tích 100 cm³, cạnh đáy 5 cm. Tính chiều cao.', hints: ['S<sub>đáy</sub> = 25 cm².', 'h = 3V : S.'], solution: 'h = 300 : 25 = 12 cm.' },
      { question: 'Hình chóp tứ giác đều có chiều cao 4 cm và trung đoạn 5 cm. Tính cạnh đáy và thể tích.', hints: ['OM = √(25 − 16) = 3 cm, cạnh đáy = 2 · OM.', 'V = {{1|3}} · 36 · 4.'], solution: 'Cạnh đáy 6 cm, V = 48 cm³.' }
    ],
    quiz: [
      { type: 'mcq', q: 'Đáy của hình chóp tứ giác đều là:', options: ['hình chữ nhật', 'hình thoi', 'hình vuông', 'hình thang cân'], answer: 2, explain: 'Đáy là hình vuông.' },
      { type: 'short', calc: '2 * 10 * 13', q: 'Hình chóp tứ giác đều cạnh đáy 10 cm, trung đoạn 13 cm. S<sub>xq</sub> = ?', unit: 'cm²', answer: '260', explain: 'p = 20.' },
      { type: 'short', calc: '6 * 6 * 4 / 3', q: 'Hình chóp tứ giác đều cạnh đáy 6 cm, chiều cao 4 cm. Thể tích?', unit: 'cm³', answer: '48', explain: '{{1|3}} · 36 · 4.' },
      { type: 'short', calc: 'sqrt(12*12 + 5*5)', q: 'Hình chóp tứ giác đều cạnh đáy 10 cm, chiều cao 12 cm. Trung đoạn?', unit: 'cm', answer: '13', explain: 'd² = 12² + 5².' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hình chóp tứ giác đều có 8 cạnh.', answer: true, explain: '4 cạnh đáy + 4 cạnh bên.' },
      { type: 'short', calc: '3 * 100 / 25', q: 'Hình chóp tứ giác đều có V = 100 cm³, cạnh đáy 5 cm. Chiều cao?', unit: 'cm', answer: '12', explain: 'h = 300 : 25.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Chân đường cao của hình chóp tứ giác đều là giao điểm hai đường chéo của đáy.', answer: true, explain: 'O là tâm hình vuông.' },
      { type: 'mcq', q: 'Hình chóp tứ giác đều có bao nhiêu mặt?', options: ['4', '5', '6', '8'], answer: 1, explain: '1 đáy + 4 mặt bên.' }
    ]
  });
})();
