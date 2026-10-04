/* Toán 8 – Bài tập cuối chương X. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-8/c10-on-tap', {
    objectives: [
      'Hệ thống hoá các yếu tố của hình chóp tam giác đều và hình chóp tứ giác đều.',
      'Vận dụng thành thạo công thức diện tích xung quanh, diện tích toàn phần và thể tích.',
      'Giải quyết bài toán thực tế tổng hợp gắn với hình chóp đều (vật liệu, dung tích, chi phí).'
    ],
    intro: 'Ôn tập chương X để tính toán chính xác vật liệu và thể tích cho các đồ vật có dạng hình chóp đều.',
    steps: [
      { title: 'Sơ đồ chương', html: `<p>Các ý chính:</p>`,
        svg: S.mindmap({ center: 'Hình chóp đều', branches: [
          { title: 'Chóp tam giác đều', items: ['Đáy tam giác đều', '4 mặt, 6 cạnh'] },
          { title: 'Chóp tứ giác đều', items: ['Đáy hình vuông', '5 mặt, 8 cạnh'] },
          { title: 'Diện tích', items: ['Sxq = p · d', 'Stp = Sxq + Sđáy'] },
          { title: 'Thể tích', items: ['V = ⅓ · Sđáy · h'] }
        ] }) },
      { title: 'Hình chóp tam giác đều', html: `<p>Chiều cao SO với O là tâm tam giác đáy; trung đoạn SM với M là trung điểm cạnh đáy.</p>`,
        svg: S.pyramid({ kind: 'chop3', dims: { h: 'h', d: 'd' } }), caption: 'Các yếu tố của hình chóp tam giác đều.' },
      { title: 'Quy trình giải bài toán thực tế', html: `<ol><li>Xác định dạng hình chóp và các số đo đã biết.</li><li>Tính đại lượng trung gian (trung đoạn, diện tích đáy…) nếu cần.</li><li>Áp dụng công thức, đổi đơn vị, trả lời câu hỏi.</li></ol>` },
      { title: 'Sai lầm thường gặp', html: `<ul><li>Nhầm trung đoạn với cạnh bên hoặc chiều cao.</li><li>Dùng chu vi thay cho nửa chu vi trong S<sub>xq</sub> = p · d.</li><li>Quên hệ số {{1|3}} trong công thức thể tích.</li></ul>` }
    ],
    summary: 'S<sub>xq</sub> = p · d (p nửa chu vi đáy), S<sub>tp</sub> = S<sub>xq</sub> + S<sub>đáy</sub>, V = {{1|3}} · S<sub>đáy</sub> · h. Với chóp tứ giác đều: d² = h² + ({{a|2}})².',
    examples: [
      { title: 'Chi phí sơn', problem: 'Mái nhà hình chóp tứ giác đều cạnh đáy 8 m, trung đoạn 5 m. Sơn mỗi mét vuông hết 40 000 đồng. Tính chi phí sơn mái.', solution: 'S<sub>xq</sub> = 16 · 5 = 80 m²; chi phí 80 · 40 000 = 3 200 000 đồng.' },
      { title: 'Kim tự tháp thu nhỏ', problem: 'Mô hình kim tự tháp thuỷ tinh hình chóp tứ giác đều cạnh đáy 12 cm, chiều cao 8 cm. Tính thể tích và diện tích xung quanh.', solution: 'V = {{1|3}} · 144 · 8 = 384 cm³; d = √(64 + 36) = 10 cm; S<sub>xq</sub> = 24 · 10 = 240 cm².' },
      { title: 'Hộp quà tam giác', problem: 'Hộp quà hình chóp tam giác đều cạnh đáy 9 cm, trung đoạn 11 cm, diện tích đáy ≈ 35,1 cm². Tính diện tích giấy làm hộp (cả đáy).', solution: 'S<sub>xq</sub> = 13,5 · 11 = 148,5 cm²; S<sub>tp</sub> ≈ 148,5 + 35,1 = 183,6 cm².' }
    ],
    exercises: [
      { question: 'Một lều trại hình chóp tứ giác đều cạnh đáy 2,4 m, chiều cao 1,6 m. Tính thể tích không khí trong lều.', hints: ['S<sub>đáy</sub> = 5,76 m².', 'V = {{1|3}} · 5,76 · 1,6.'], solution: 'V = 3,072 m³.' },
      { question: 'Hình chóp tứ giác đều có S<sub>xq</sub> = 96 cm² và cạnh đáy 6 cm. Tính trung đoạn.', hints: ['p = 12 cm.', 'd = 96 : 12.'], solution: 'd = 8 cm.' },
      { question: 'Hai hình chóp tứ giác đều có cùng chiều cao; cạnh đáy hình thứ hai gấp đôi hình thứ nhất. Thể tích hình thứ hai gấp mấy lần?', hints: ['V tỉ lệ với a².', '2² = 4.'], solution: 'Gấp 4 lần.' }
    ],
    quiz: [
      { type: 'short', calc: '16 * 5 * 40000', q: 'Mái hình chóp tứ giác đều cạnh đáy 8 m, trung đoạn 5 m; sơn 40 000 đồng/m². Chi phí sơn (đồng)?', unit: 'đồng', answer: '3200000', answerText: '3 200 000', explain: '80 m² · 40 000.' },
      { type: 'short', calc: '12 * 12 * 8 / 3', q: 'Hình chóp tứ giác đều cạnh đáy 12 cm, cao 8 cm. Thể tích?', unit: 'cm³', answer: '384', explain: '{{1|3}} · 144 · 8.' },
      { type: 'short', calc: '2.4 * 2.4 * 1.6 / 3', q: 'Lều hình chóp tứ giác đều cạnh đáy 2,4 m, cao 1,6 m. Thể tích (m³)?', unit: 'm³', answer: '3.072', explain: '{{1|3}} · 5,76 · 1,6.' },
      { type: 'short', calc: '96 / 12', q: 'Hình chóp tứ giác đều có S<sub>xq</sub> = 96 cm², cạnh đáy 6 cm. Trung đoạn?', unit: 'cm', answer: '8', explain: 'p = 12.' },
      { type: 'mcq', q: 'Cạnh đáy hình chóp tứ giác đều tăng gấp đôi, chiều cao giữ nguyên. Thể tích:', options: ['gấp 2 lần', 'gấp 4 lần', 'gấp 8 lần', 'không đổi'], answer: 1, explain: 'V tỉ lệ a².' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Trong công thức S<sub>xq</sub> = p · d, p là chu vi đáy.', answer: false, explain: 'p là nửa chu vi đáy.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Trung đoạn của hình chóp đều luôn lớn hơn chiều cao của nó.', answer: true, explain: 'SM là cạnh huyền của tam giác vuông SOM.' },
      { type: 'short', calc: '13.5 * 11', q: 'Hộp hình chóp tam giác đều cạnh đáy 9 cm, trung đoạn 11 cm. S<sub>xq</sub>?', unit: 'cm²', answer: '148.5', explain: 'p = 13,5.' }
    ]
  });
})();
