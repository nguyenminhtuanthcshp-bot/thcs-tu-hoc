/* Toán 9 – Bài 31. Hình trụ và hình nón. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C, G = S.geom;
  var net = S.geo({ w: 380, h: 250, P: { A: [60, 70], B: [320, 70], Cc: [320, 180], D: [60, 180], O1: [190, 36], O2: [190, 214] }, circles: [{ c: 'O1', r: 34, color: C.ink, fill: '#dbeafe' }, { c: 'O2', r: 34, color: C.ink, fill: '#dbeafe' }], seg: ['AB', 'B-Cc', 'Cc-D', 'DA'], fill: [['A-B-Cc-D', C.blueL]], hide: ['A', 'B', 'Cc', 'D', 'O1', 'O2'], text: [[190, 130, 'chiều dài 2πr', C.blue, true, 14], [336, 130, 'h', C.red, true, 15]] });
  var S0 = [190, 40], ang = 360 * 50 / 140;
  var coneNet = S.geo({ w: 380, h: 250, P: { S: S0, A: G.polar(S0, -90 - ang / 2, 150), B: G.polar(S0, -90 + ang / 2, 150) }, sectors: [{ c: 'S', a: 'A', b: 'B', fill: C.orangeL }], seg: ['SA', 'SB'], carcs: [{ c: 'S', a: 'A', b: 'B', color: C.blue, width: 3 }], text: [[140, 110, 'l', C.purple, true, 15], [190, 212, 'độ dài cung 2πr', C.blue, true, 14]], hide: ['A', 'B'], off: { S: [0, -10] } });
  THCS.registerLesson('toan-9/bai-31', {
    objectives: [
      'Nhận biết hình trụ, hình nón và các yếu tố: đáy, bán kính đáy, chiều cao, đường sinh.',
      'Tính được diện tích xung quanh và thể tích của hình trụ.',
      'Tính được diện tích xung quanh và thể tích của hình nón.',
      'Giải quyết bài toán thực tế gắn với hình trụ, hình nón (lon nước, bồn chứa, nón lá, phễu…).'
    ],
    intro: 'Lon nước ngọt, ống cống, bồn chứa nước có dạng hình trụ; chiếc nón lá, cây kem ốc quế, phễu có dạng hình nón. Biết tính diện tích và thể tích của chúng giúp ta ước lượng vật liệu và sức chứa.',
    steps: [
      { title: 'Hình trụ', html: `<p>Quay hình chữ nhật một vòng quanh một cạnh cố định ta được <b>hình trụ</b>. Hai đáy là hai hình tròn bằng nhau, song song; bán kính đáy r; chiều cao h (khoảng cách hai đáy), mỗi đường sinh có độ dài h.</p>`,
        svg: S.round({ kind: 'tru', r: 60, h: 140, dims: { r: 'r', h: 'h' } }), caption: 'Hình trụ bán kính đáy r, chiều cao h.' },
      { title: 'Diện tích và thể tích hình trụ', html: `<p>Khai triển mặt xung quanh được hình chữ nhật có chiều dài 2πr và chiều rộng h:</p><ul><li><b>S<sub>xq</sub> = 2πrh</b>; S<sub>tp</sub> = 2πrh + 2πr².</li><li><b>V = πr²h</b> (diện tích đáy nhân chiều cao).</li></ul>`,
        svg: net, caption: 'Hình khai triển của hình trụ.' },
      { title: 'Hình nón', html: `<p>Quay tam giác vuông SOA một vòng quanh cạnh góc vuông SO ta được <b>hình nón</b>: đỉnh S, đáy là hình tròn tâm O bán kính r, chiều cao h = SO, đường sinh l = SA với <b>l² = h² + r²</b>.</p>`,
        svg: S.round({ kind: 'non', r: 70, h: 150, dims: { r: 'r', h: 'h', l: 'l' } }), caption: 'Hình nón: đỉnh S, bán kính đáy r, chiều cao h, đường sinh l.' },
      { title: 'Diện tích và thể tích hình nón', html: `<p>Khai triển mặt xung quanh được một hình quạt bán kính l, độ dài cung 2πr:</p><ul><li><b>S<sub>xq</sub> = πrl</b>; S<sub>tp</sub> = πrl + πr².</li><li><b>V = {{1|3}}πr²h</b> (bằng {{1|3}} thể tích hình trụ cùng đáy, cùng chiều cao).</li></ul>`,
        svg: coneNet, caption: 'Mặt xung quanh hình nón khai triển thành hình quạt.' },
      { title: 'Chú ý khi giải toán', html: `<ul><li>Đổi về cùng đơn vị trước khi tính; 1 dm³ = 1 lít.</li><li>Đề cho đường kính thì chia đôi để có bán kính.</li><li>Kết quả có thể để dạng “kπ” hoặc lấy π ≈ 3,14 khi đề yêu cầu.</li></ul>` }
    ],
    summary: 'Hình trụ: S_xq = 2πrh, V = πr²h. Hình nón: l² = h² + r², S_xq = πrl, V = ⅓πr²h.',
    examples: [
      { title: 'Lon nước', problem: 'Một lon nước hình trụ có đường kính đáy 6 cm, chiều cao 12 cm. Tính diện tích xung quanh và thể tích (theo π).', solution: 'r = 3: S<sub>xq</sub> = 2π · 3 · 12 = 72π cm²; V = π · 9 · 12 = 108π cm³ ≈ 339 cm³.' },
      { title: 'Nón lá', problem: 'Một chiếc nón lá có đường kính vành 40 cm, chiều cao 15 cm. Tính đường sinh và diện tích lá cần để phủ mặt nón (π ≈ 3,14).', solution: 'r = 20, l = √(400 + 225) = 25 cm. S<sub>xq</sub> = 3,14 · 20 · 25 = 1570 cm².' },
      { title: 'Phễu', problem: 'Một phễu hình nón có bán kính miệng 6 cm, chiều cao 8 cm. Phễu chứa được bao nhiêu mililít nước (π ≈ 3,14, làm tròn đến hàng đơn vị)?', solution: 'V = {{1|3}} · 3,14 · 36 · 8 ≈ 301 cm³ ≈ 301 ml.' }
    ],
    exercises: [
      { question: 'Một bồn nước hình trụ có bán kính đáy 0,5 m, chiều cao 1,6 m. Bồn chứa được bao nhiêu lít (π ≈ 3,14)?', hints: ['V = πr²h (m³).', '1 m³ = 1000 lít.'], solution: 'V = 3,14 · 0,25 · 1,6 = 1,256 m³ = 1256 lít.' },
      { question: 'Hình nón có bán kính đáy 5 cm, đường sinh 13 cm. Tính chiều cao và thể tích (theo π).', hints: ['h = √(169 − 25) = 12.', 'V = {{1|3}}π · 25 · 12.'], solution: 'h = 12 cm; V = 100π cm³.' },
      { question: 'Một hình trụ và một hình nón có cùng bán kính đáy và cùng chiều cao. Thể tích hình trụ là 90 cm³. Tính thể tích hình nón.', hints: ['V<sub>nón</sub> = {{1|3}} V<sub>trụ</sub>.', '90 : 3.'], solution: '30 cm³.' }
    ],
    quiz: [
      { type: 'short', calc: '2 * 3 * 12', q: 'Lon nước hình trụ đường kính 6 cm, cao 12 cm có S_xq = kπ cm². Tìm k.', answer: '72', explain: '2 · 3 · 12.' },
      { type: 'short', calc: '3 ** 2 * 12', q: 'Lon nước trên có thể tích kπ cm³. Tìm k.', answer: '108', explain: '9 · 12.' },
      { type: 'short', calc: 'Math.sqrt(20 ** 2 + 15 ** 2)', q: 'Nón lá đường kính vành 40 cm, cao 15 cm. Đường sinh (cm)?', unit: 'cm', answer: '25', explain: '√(400 + 225).' },
      { type: 'short', calc: 'round(3.14 * 0.5 ** 2 * 1.6 * 1000, 6)', q: 'Bồn trụ bán kính 0,5 m, cao 1,6 m chứa bao nhiêu lít (π ≈ 3,14)?', unit: 'lít', answer: '1256', explain: '1,256 m³.' },
      { type: 'short', calc: '5 ** 2 * Math.sqrt(13 ** 2 - 5 ** 2) / 3', q: 'Hình nón r = 5 cm, l = 13 cm có V = kπ cm³. Tìm k.', answer: '100', explain: 'h = 12.' },
      { type: 'mcq', q: 'Công thức diện tích xung quanh hình nón là:', options: ['2πrh', 'πrl', 'πr²h', '⅓πr²h'], answer: 1, explain: 'S_xq = πrl.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Thể tích hình nón bằng một phần ba thể tích hình trụ có cùng bán kính đáy và chiều cao.', answer: true, explain: 'V = ⅓πr²h.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hình trụ có r = 2 cm, h = 5 cm thì S_xq = 10π cm².', answer: false, explain: '2π · 2 · 5 = 20π.' }
    ]
  });
})();
