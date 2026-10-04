/* Toán 9 – Bài tập cuối chương X. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-9/c10-on-tap', {
    objectives: [
      'Hệ thống hoá các yếu tố và công thức của hình trụ, hình nón, hình cầu.',
      'Vận dụng công thức để giải bài toán tính toán và bài toán thực tế.',
      'Giải thích, so sánh diện tích và thể tích của các hình tròn xoay.'
    ],
    intro: 'Ôn tập chương X – chương cuối của chương trình Toán THCS.',
    steps: [
      { title: 'Sơ đồ chương', html: `<p>Các nội dung chính:</p>`,
        svg: S.mindmap({ center: 'Hình trụ – nón – cầu', branches: [
          { title: 'Hình trụ', items: ['S_xq = 2πrh', 'V = πr²h'] },
          { title: 'Hình nón', items: ['l² = h² + r²', 'S_xq = πrl', 'V = ⅓πr²h'] },
          { title: 'Hình cầu', items: ['S = 4πR²', 'V = (4/3)πR³'] },
          { title: 'Ứng dụng', items: ['Vật thể ghép', 'Đổi đơn vị, khối lượng'] }
        ] }) },
      { title: 'Ba hình tròn xoay', html: `<p>Quay hình chữ nhật, tam giác vuông, nửa hình tròn quanh một cạnh (đường kính) ta được ba hình tròn xoay.</p>`,
        svg: [S.round({ kind: 'tru', r: 45, h: 110, dims: { r: 'r', h: 'h' } }), S.round({ kind: 'non', r: 50, h: 120, dims: { r: 'r', h: 'h', l: 'l' } }), S.round({ kind: 'cau', r: 55, dims: { r: 'R' } })], caption: 'Hình trụ, hình nón, hình cầu.' },
      { title: 'Bài tập mẫu', html: `<p>Một hình nón có bán kính đáy 6 cm và diện tích xung quanh 60π cm². Tính thể tích.</p><p>πrl = 60π ⇒ l = 10; h = √(100 − 36) = 8; V = {{1|3}}π · 36 · 8 = 96π cm³.</p>` },
      { title: 'Sai lầm thường gặp', html: `<ul><li>Nhầm chiều cao h với đường sinh l của hình nón.</li><li>Dùng đường kính thay cho bán kính.</li><li>Quên hệ số {{1|3}} (nón) hoặc {{4|3}} (cầu).</li><li>Không đổi đơn vị trước khi tính.</li></ul>` }
    ],
    summary: 'Trụ: 2πrh, πr²h. Nón: l² = h² + r², πrl, ⅓πr²h. Cầu: 4πR², (4/3)πR³. Chú ý bán kính, đơn vị, hệ số.',
    examples: [
      { title: 'Nón', problem: 'Hình nón có bán kính đáy 6 cm, diện tích xung quanh 60π cm². Tính thể tích (theo π).', solution: 'l = 10, h = 8 ⇒ V = 96π cm³.' },
      { title: 'Trụ', problem: 'Một hình trụ có chu vi đáy 20π cm và chiều cao 7 cm. Tính thể tích (theo π).', solution: '2πr = 20π ⇒ r = 10 ⇒ V = π · 100 · 7 = 700π cm³.' },
      { title: 'Cầu', problem: 'Thể tích hình cầu là 972π cm³. Tính diện tích mặt cầu (theo π).', solution: '{{4|3}}R³ = 972 ⇒ R³ = 729 ⇒ R = 9 ⇒ S = 4π · 81 = 324π cm².' }
    ],
    exercises: [
      { question: 'Một chiếc cốc hình trụ có đường kính đáy 8 cm, cao 10 cm. Đổ đầy nước vào cốc rồi rót sang các cốc hình nón có cùng đáy và chiều cao. Rót được đầy bao nhiêu cốc nón?', hints: ['V<sub>nón</sub> = {{1|3}} V<sub>trụ</sub>.', 'Số cốc = 3.'], solution: '3 cốc.' },
      { question: 'Một quả bóng bàn có đường kính 4 cm. Tính diện tích bề mặt (π ≈ 3,14, làm tròn đến hàng phần trăm).', hints: ['R = 2.', '4 · 3,14 · 4.'], solution: '≈ 50,24 cm².' },
      { question: 'Hình nón có chiều cao 12 cm, đường sinh 13 cm. Tính diện tích toàn phần (theo π).', hints: ['r = √(169 − 144) = 5.', 'S<sub>tp</sub> = πrl + πr².'], solution: '65π + 25π = 90π cm².' }
    ],
    quiz: [
      { type: 'short', calc: '6 ** 2 * Math.sqrt((60 / 6) ** 2 - 6 ** 2) / 3', q: 'Hình nón r = 6 cm, S_xq = 60π cm². V = kπ cm³. Tìm k.', answer: '96', explain: 'l = 10, h = 8.' },
      { type: 'short', calc: '(20 / 2) ** 2 * 7', q: 'Hình trụ có chu vi đáy 20π cm, cao 7 cm. V = kπ cm³. Tìm k.', answer: '700', explain: 'r = 10.' },
      { type: 'short', calc: '4 * Math.cbrt(972 * 3 / 4) ** 2', q: 'Hình cầu có V = 972π cm³. Diện tích mặt cầu là kπ cm². Tìm k.', answer: '324', explain: 'R = 9.' },
      { type: 'short', calc: 'round(4 * 3.14 * 2 ** 2, 2)', q: 'Quả bóng bàn đường kính 4 cm. Diện tích bề mặt (cm², π ≈ 3,14)?', unit: 'cm²', answer: '50.24', explain: '4 · 3,14 · 4.' },
      { type: 'short', calc: '5 * 13 + 5 ** 2', q: 'Hình nón cao 12 cm, đường sinh 13 cm. S_tp = kπ cm². Tìm k.', answer: '90', explain: 'r = 5: 65 + 25.' },
      { type: 'mcq', q: 'Rót nước từ cốc trụ đầy sang các cốc nón cùng đáy, cùng chiều cao được:', options: ['2 cốc', '3 cốc', '4 cốc', '6 cốc'], answer: 1, explain: 'V_nón = ⅓V_trụ.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Trong hình nón, đường sinh luôn dài hơn chiều cao.', answer: true, explain: 'l² = h² + r² &gt; h².' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Thể tích hình cầu bán kính R là 4πR².', answer: false, explain: 'V = (4/3)πR³; 4πR² là diện tích mặt cầu.' }
    ]
  });
})();
