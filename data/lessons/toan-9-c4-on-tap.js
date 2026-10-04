/* Toán 9 – Bài tập cuối chương IV. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-9/c4-on-tap', {
    objectives: [
      'Hệ thống hoá tỉ số lượng giác của góc nhọn và các hệ thức giữa cạnh và góc trong tam giác vuông.',
      'Giải tam giác vuông, tính độ dài và số đo góc trong các hình phẳng.',
      'Giải quyết bài toán thực tế về đo chiều cao, khoảng cách, độ dốc.'
    ],
    intro: 'Ôn tập chương IV bằng các bài tổng hợp và các tình huống đo đạc ngoài thực tế.',
    steps: [
      { title: 'Sơ đồ chương', html: `<p>Các nội dung chính:</p>`,
        svg: S.mindmap({ center: 'Hệ thức lượng', branches: [
          { title: 'Tỉ số lượng giác', items: ['sin = đối/huyền', 'cos = kề/huyền', 'tan = đối/kề'] },
          { title: 'Góc phụ nhau', items: ['sin α = cos(90° − α)', 'tan α = cot(90° − α)'] },
          { title: 'Hệ thức cạnh – góc', items: ['b = a·sin B = a·cos C', 'b = c·tan B'] },
          { title: 'Ứng dụng', items: ['Góc nâng, góc hạ', 'Độ dốc'] }
        ] }) },
      { title: 'Góc hạ', html: `<p>Từ đỉnh ngọn hải đăng cao 40 m, người quan sát nhìn một con thuyền với góc hạ 20°. Góc hạ bằng góc nâng từ thuyền lên đỉnh (so le trong), nên khoảng cách từ thuyền đến chân hải đăng là 40 : tan 20° ≈ 109,9 m.</p>`,
        svg: S.geo({ w: 360, h: 220, P: { T: [300, 40], G: [300, 190], B: [50, 190], X: [180, 40] }, hide: ['X'], seg: [{ s: 'TG', color: C.gray, width: 5 }, 'GB', { s: 'BT', color: C.orange }], dash: ['TX'], right: ['TGB'], arcs: [['XTB', 1, '20°', C.red, 44], ['GBT', 1, '20°', C.orange, 50]], text: [[320, 118, '40 m', C.ink], [175, 210, 'd', C.blue]], off: { B: [-8, 16] } }), caption: 'Góc hạ 20° bằng góc nâng 20° (so le trong).' },
      { title: 'Chiến lược giải bài toán thực tế', html: `<ol><li>Vẽ hình, xác định tam giác vuông.</li><li>Ghi các yếu tố đã biết (cạnh, góc).</li><li>Chọn tỉ số lượng giác chứa đúng cạnh cần tìm và yếu tố đã biết.</li><li>Tính và làm tròn theo yêu cầu.</li></ol>` },
      { title: 'Sai lầm thường gặp', html: `<ul><li>Nhầm cạnh đối với cạnh kề.</li><li>Máy tính để chế độ radian.</li><li>Quên cộng chiều cao tầm mắt.</li></ul>` }
    ],
    summary: 'Nắm vững định nghĩa tỉ số lượng giác, bảng góc đặc biệt, quan hệ góc phụ nhau và các hệ thức cạnh – góc để giải tam giác vuông và đo đạc thực tế.',
    examples: [
      { title: 'Góc hạ', problem: 'Hải đăng cao 40 m, góc hạ tới thuyền 20°. Tính khoảng cách từ thuyền tới chân hải đăng (làm tròn đến hàng phần mười).', solution: 'd = 40 : tan 20° ≈ 109,9 m.' },
      { title: 'Tính góc dốc', problem: 'Một đoạn đường dài 200 m (theo mặt dốc) lên cao 14 m. Tính góc dốc (làm tròn đến độ).', solution: 'sin α = {{14|200}} = 0,07 ⇒ α ≈ 4°.' },
      { title: 'Biểu thức lượng giác', problem: 'Tính B = sin<sup>2</sup> 20° + sin<sup>2</sup> 70°.', solution: 'sin 70° = cos 20° ⇒ B = sin<sup>2</sup> 20° + cos<sup>2</sup> 20° = 1.' }
    ],
    exercises: [
      { question: 'Tam giác ABC vuông tại A có BC = 26, cos B = {{5|13}}. Tính AB và AC.', hints: ['AB = BC · cos B = 10.', 'AC = √(26<sup>2</sup> − 10<sup>2</sup>).'], solution: 'AB = 10, AC = 24.' },
      { question: 'Một người cao 1,6 m đứng cách cột cờ 15 m, nhìn đỉnh cột với góc nâng 42°. Tính chiều cao cột cờ (làm tròn đến hàng phần mười).', hints: ['15 · tan 42° ≈ 13,5.', 'Cộng 1,6 m.'], solution: '≈ 15,1 m.' },
      { question: 'Chứng minh tan α · cot α = 1 với α nhọn.', hints: ['tan α = {{đối|kề}}, cot α = {{kề|đối}}.', 'Nhân hai phân số.'], solution: 'Tích bằng 1.' }
    ],
    quiz: [
      { type: 'short', calc: 'round(40 / Math.tan(20 * Math.PI / 180), 1)', q: 'Hải đăng cao 40 m, góc hạ tới thuyền 20°. Khoảng cách thuyền – chân hải đăng (m, làm tròn đến hàng phần mười)?', unit: 'm', answer: '109.9', explain: '40 : tan 20°.' },
      { type: 'short', calc: 'Math.round(Math.asin(14 / 200) * 180 / Math.PI)', q: 'Đường dốc dài 200 m lên cao 14 m. Góc dốc (độ, làm tròn đến độ)?', unit: 'độ', answer: '4', explain: 'sin α = 0,07.' },
      { type: 'short', calc: 'round(Math.sin(20 * Math.PI / 180) ** 2 + Math.sin(70 * Math.PI / 180) ** 2, 9)', q: 'Tính sin² 20° + sin² 70°.', answer: '1', explain: 'sin 70° = cos 20°.' },
      { type: 'short', calc: '26 * 5 / 13', q: 'Tam giác ABC vuông tại A, BC = 26, cos B = {{5|13}}. Tính AB.', answer: '10', explain: 'AB = BC · cos B.' },
      { type: 'short', calc: 'round(15 * Math.tan(42 * Math.PI / 180) + 1.6, 1)', q: 'Người cao 1,6 m cách cột cờ 15 m, góc nâng 42°. Chiều cao cột cờ (m, làm tròn đến hàng phần mười)?', unit: 'm', answer: '15.1', explain: '15 · tan 42° + 1,6.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Góc hạ từ đỉnh tháp xuống một điểm bằng góc nâng từ điểm đó lên đỉnh tháp.', answer: true, explain: 'Hai góc so le trong.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: tan α · cot α = 2.', answer: false, explain: 'Tích bằng 1.' },
      { type: 'mcq', q: 'cos 30° bằng:', options: ['{{1|2}}', '{{√2|2}}', '{{√3|2}}', '√3'], answer: 2, explain: 'Bảng góc đặc biệt.' }
    ]
  });
})();
