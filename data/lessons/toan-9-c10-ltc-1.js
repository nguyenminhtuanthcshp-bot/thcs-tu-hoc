/* Toán 9 – Luyện tập chung (sau Bài 32). Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-9/c10-ltc-1', {
    objectives: [
      'Củng cố công thức diện tích, thể tích của hình trụ, hình nón, hình cầu.',
      'Tính toán với các vật thể ghép từ nhiều hình tròn xoay.',
      'Giải bài toán thực tế về vật liệu, sức chứa, khối lượng.'
    ],
    intro: 'Nhiều đồ vật thực tế là sự kết hợp của các hình: viên thuốc con nhộng (trụ + hai nửa cầu), cây kem (nón + nửa cầu), bồn chứa (trụ + nón)…',
    steps: [
      { title: 'Vật thể ghép', html: `<p>Thể tích (diện tích bề mặt) của vật thể ghép bằng tổng thể tích (diện tích phần mặt lộ ra) của các phần.</p><p>Ví dụ: viên con nhộng gồm hình trụ bán kính r, chiều cao h và hai nửa hình cầu bán kính r: V = πr²h + {{4|3}}πr³.</p>`,
        svg: [S.round({ kind: 'tru', r: 45, h: 110, dims: { r: 'r', h: 'h' } }), S.round({ kind: 'cau', r: 55, dims: { r: 'r' } })], caption: 'Viên con nhộng = hình trụ + hình cầu (hai nửa cầu ghép lại).' },
      { title: 'Nón ghép nửa cầu', html: `<p>Cây kem ốc quế: phần ốc là hình nón (r, h), phần kem phía trên là nửa hình cầu bán kính r. V = {{1|3}}πr²h + {{2|3}}πr³.</p>`,
        svg: S.round({ kind: 'non', r: 55, h: 140, dims: { r: 'r', h: 'h' } }), caption: 'Phần ốc quế hình nón.' },
      { title: 'Tỉ số thể tích', html: `<p>Hình trụ ngoại tiếp hình cầu bán kính R (r = R, h = 2R):</p><ul><li>V<sub>trụ</sub> = 2πR³; V<sub>cầu</sub> = {{4|3}}πR³ ⇒ V<sub>cầu</sub> : V<sub>trụ</sub> = 2 : 3 (phát hiện của Archimedes).</li><li>Hình nón cùng đáy, cùng chiều cao 2R: V<sub>nón</sub> = {{2|3}}πR³ ⇒ nón : cầu : trụ = 1 : 2 : 3.</li></ul>` },
      { title: 'Đổi đơn vị', html: `<p>1 m³ = 1000 dm³ = 1000 lít; 1 dm³ = 1000 cm³; 1 cm³ = 1 ml. Khối lượng = khối lượng riêng × thể tích.</p>` }
    ],
    summary: 'Chia vật thể thành các phần trụ, nón, cầu; cộng thể tích; chú ý chỉ cộng phần diện tích lộ ra. Tỉ số nón : cầu : trụ (cùng r = R, h = 2R) là 1 : 2 : 3.',
    examples: [
      { title: 'Con nhộng', problem: 'Viên thuốc con nhộng có phần trụ dài 10 mm, bán kính 3 mm, hai đầu là nửa cầu. Tính thể tích (theo π).', solution: 'V = π · 9 · 10 + {{4|3}}π · 27 = 90π + 36π = 126π mm³.' },
      { title: 'Cây kem', problem: 'Ốc quế hình nón bán kính 3 cm, cao 12 cm; phía trên là nửa quả cầu kem bán kính 3 cm. Tính tổng thể tích kem nếu ốc quế đầy kem (theo π).', solution: '{{1|3}}π · 9 · 12 + {{2|3}}π · 27 = 36π + 18π = 54π cm³.' },
      { title: 'Archimedes', problem: 'Một quả cầu bán kính 6 cm đặt vừa khít trong hộp hình trụ. Tính thể tích phần trống của hộp (theo π).', solution: 'V<sub>trụ</sub> = π · 36 · 12 = 432π; V<sub>cầu</sub> = 288π ⇒ phần trống 144π cm³.' }
    ],
    exercises: [
      { question: 'Một bồn chứa gồm phần trụ (bán kính 1 m, cao 3 m) và phần đáy hình nón (cao 0,6 m) cùng bán kính. Tính thể tích bồn (π ≈ 3,14, làm tròn đến hàng phần trăm).', hints: ['V = π · 1 · 3 + {{1|3}}π · 1 · 0,6.', '= 3,2π.'], solution: '≈ 10,05 m³.' },
      { question: 'Một quả cầu sắt bán kính 2 cm, khối lượng riêng 7,8 g/cm³. Tính khối lượng quả cầu (π ≈ 3,14, làm tròn đến hàng đơn vị).', hints: ['V = {{4|3}}π · 8.', 'm = 7,8 · V.'], solution: 'V ≈ 33,49 cm³; m ≈ 261 g.' },
      { question: 'Hình trụ ngoại tiếp một hình cầu có thể tích 60 cm³. Tính thể tích hình cầu.', hints: ['V<sub>cầu</sub> = {{2|3}} V<sub>trụ</sub>.', '60 · {{2|3}}.'], solution: '40 cm³.' }
    ],
    quiz: [
      { type: 'short', calc: '9 * 10 + 4 / 3 * 27', q: 'Con nhộng: trụ dài 10 mm, bán kính 3 mm, hai đầu nửa cầu. V = kπ mm³. Tìm k.', answer: '126', explain: '90 + 36.' },
      { type: 'short', calc: '9 * 12 / 3 + 2 / 3 * 27', q: 'Kem: nón r = 3 cm, h = 12 cm, trên là nửa cầu r = 3 cm. V = kπ cm³. Tìm k.', answer: '54', explain: '36 + 18.' },
      { type: 'short', calc: '36 * 12 - 4 / 3 * 216', q: 'Quả cầu bán kính 6 cm vừa khít hộp trụ. Phần trống = kπ cm³. Tìm k.', answer: '144', explain: '432 − 288.' },
      { type: 'short', calc: 'round(3.14 * (1 * 3 + 0.6 / 3), 2)', q: 'Bồn: trụ r = 1 m, cao 3 m, đáy nón cao 0,6 m. Thể tích (m³, π ≈ 3,14, làm tròn đến hàng phần trăm)?', unit: 'm³', answer: '10.05', explain: '3,2π.' },
      { type: 'short', calc: '60 * 2 / 3', q: 'Hình trụ ngoại tiếp hình cầu có thể tích 60 cm³. Thể tích hình cầu (cm³)?', unit: 'cm³', answer: '40', explain: '2/3 thể tích trụ.' },
      { type: 'mcq', q: 'Với cùng R, tỉ số thể tích nón : cầu : trụ (h = 2R) là:', options: ['1 : 1 : 1', '1 : 2 : 3', '1 : 3 : 4', '2 : 3 : 4'], answer: 1, explain: '⅔ : ⁴⁄₃ : 2.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: 1 dm³ bằng 1 lít.', answer: true, explain: 'Đúng.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Diện tích bề mặt viên con nhộng bằng diện tích toàn phần hình trụ cộng diện tích mặt cầu.', answer: false, explain: 'Hai đáy trụ bị che, chỉ tính S_xq trụ + mặt cầu.' }
    ]
  });
})();
