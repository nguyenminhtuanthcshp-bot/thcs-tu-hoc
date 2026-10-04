/* Toán 9 – Bài 32. Hình cầu. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C, G = S.geom;
  var O = [150, 120], R = 85;
  var cut = S.geo({ w: 300, h: 250, P: { O: O, A: [O[0] + R, O[1]], B: [O[0] - R, O[1]], I: [O[0], O[1] - 45], M: [O[0] + Math.sqrt(R * R - 45 * 45), O[1] - 45], N: [O[0] - Math.sqrt(R * R - 45 * 45), O[1] - 45] }, circles: [{ c: 'O', r: R, color: C.ink, fill: C.blueL }], seg: [{ s: 'OM', color: C.blue }, { s: 'IM', color: C.green }, { s: 'IN', color: C.green, dash: true }], dash: ['OI', 'AB'], right: ['OIM'], text: [[175, 64, 'r', C.green, true, 14], [166, 108, 'R', C.blue, true, 14], [140, 104, 'd', C.red, true, 14], [150, 238, 'Mặt cắt cách tâm d có bán kính r = √(R² − d²)', C.muted, false, 12]], hide: ['A', 'B', 'N'], off: { O: [-12, 16], I: [-4, -10] } });
  THCS.registerLesson('toan-9/bai-32', {
    objectives: [
      'Nhận biết hình cầu, mặt cầu, tâm, bán kính, đường kính; mặt cắt của hình cầu bởi mặt phẳng.',
      'Tính được diện tích mặt cầu S = 4πR².',
      'Tính được thể tích hình cầu V = {{4|3}}πR³.',
      'Giải quyết bài toán thực tế gắn với hình cầu (quả bóng, bể chứa, viên bi…).'
    ],
    intro: 'Quả bóng, viên bi, quả địa cầu, bồn chứa khí hình cầu… Hình cầu là vật thể có diện tích bề mặt nhỏ nhất khi chứa cùng một thể tích – vì thế giọt nước và bong bóng xà phòng luôn “tròn”.',
    steps: [
      { title: 'Hình cầu', html: `<p>Quay nửa hình tròn tâm O bán kính R một vòng quanh đường kính của nó ta được một <b>hình cầu</b> tâm O bán kính R. Nửa đường tròn khi quay tạo thành <b>mặt cầu</b>.</p>`,
        svg: S.round({ kind: 'cau', r: 80, dims: { r: 'R' } }), caption: 'Hình cầu tâm O bán kính R.' },
      { title: 'Mặt cắt của hình cầu', html: `<p>Cắt hình cầu bởi một mặt phẳng được một <b>hình tròn</b>.</p><ul><li>Mặt phẳng đi qua tâm: được hình tròn lớn nhất, bán kính R (đường tròn lớn – như đường xích đạo).</li><li>Mặt phẳng cách tâm một khoảng d &lt; R: hình tròn bán kính r = √(R² − d²).</li></ul>`,
        svg: cut, caption: 'Mặt cắt cách tâm d: r² = R² − d².' },
      { title: 'Diện tích mặt cầu', html: `<p style="text-align:center"><b>S = 4πR²</b> (= πd² với d là đường kính).</p><p>Diện tích mặt cầu bằng bốn lần diện tích hình tròn lớn. Ví dụ: R = 5 cm ⇒ S = 100π ≈ 314 cm².</p>` },
      { title: 'Thể tích hình cầu', html: `<p style="text-align:center"><b>V = {{4|3}}πR³</b>.</p><p>Ví dụ: R = 3 cm ⇒ V = {{4|3}}π · 27 = 36π ≈ 113 cm³.</p><p>Nhận xét: nếu bán kính tăng gấp 2 thì diện tích tăng gấp 4, thể tích tăng gấp 8.</p>` },
      { title: 'So sánh ba hình tròn xoay', html: `<table class="tbl"><tr><th>Hình</th><th>Diện tích xung quanh / mặt</th><th>Thể tích</th></tr><tr><td>Trụ</td><td>2πrh</td><td>πr²h</td></tr><tr><td>Nón</td><td>πrl</td><td>{{1|3}}πr²h</td></tr><tr><td>Cầu</td><td>4πR²</td><td>{{4|3}}πR³</td></tr></table>` }
    ],
    summary: 'Hình cầu tâm O bán kính R; mặt cắt là hình tròn bán kính √(R² − d²). S = 4πR², V = (4/3)πR³.',
    examples: [
      { title: 'Quả bóng', problem: 'Một quả bóng có đường kính 22 cm. Tính diện tích da phủ mặt bóng (π ≈ 3,14, làm tròn đến hàng đơn vị).', solution: 'R = 11: S = 4 · 3,14 · 121 ≈ 1520 cm².' },
      { title: 'Viên bi', problem: 'Tính thể tích viên bi sắt bán kính 1,5 cm (theo π).', solution: 'V = {{4|3}}π · 3,375 = 4,5π cm³.' },
      { title: 'Mặt cắt', problem: 'Hình cầu bán kính 13 cm bị cắt bởi mặt phẳng cách tâm 5 cm. Tính bán kính và diện tích mặt cắt (theo π).', solution: 'r = √(169 − 25) = 12 cm; S = 144π cm².' }
    ],
    exercises: [
      { question: 'Mặt cầu có diện tích 36π cm². Tính bán kính và thể tích hình cầu (theo π).', hints: ['4πR² = 36π ⇒ R² = 9.', 'V = {{4|3}}π · 27.'], solution: 'R = 3 cm; V = 36π cm³.' },
      { question: 'Một bồn chứa khí hình cầu có đường kính 6 m. Tính thể tích bồn (π ≈ 3,14, làm tròn đến hàng phần mười).', hints: ['R = 3 m.', '{{4|3}} · 3,14 · 27.'], solution: '≈ 113,0 m³.' },
      { question: 'Nếu bán kính hình cầu tăng gấp 3 thì thể tích tăng gấp bao nhiêu lần?', hints: ['V tỉ lệ với R³.', '3³.'], solution: '27 lần.' }
    ],
    quiz: [
      { type: 'short', calc: 'Math.round(4 * 3.14 * 11 ** 2)', q: 'Quả bóng đường kính 22 cm. Diện tích mặt bóng (cm², π ≈ 3,14, làm tròn đến hàng đơn vị)?', unit: 'cm²', answer: '1520', explain: '4 · 3,14 · 121.' },
      { type: 'short', calc: '4 / 3 * 3 ** 3', q: 'Hình cầu bán kính 3 cm có thể tích kπ cm³. Tìm k.', answer: '36', explain: '4/3 · 27.' },
      { type: 'short', calc: 'Math.sqrt(13 ** 2 - 5 ** 2)', q: 'Hình cầu R = 13 cm, mặt phẳng cách tâm 5 cm. Bán kính mặt cắt (cm)?', unit: 'cm', answer: '12', explain: '√(169 − 25).' },
      { type: 'short', calc: 'Math.sqrt(36 / 4)', q: 'Mặt cầu có diện tích 36π cm². Bán kính (cm)?', unit: 'cm', answer: '3', explain: 'R² = 9.' },
      { type: 'short', calc: '3 ** 3', q: 'Bán kính hình cầu tăng gấp 3 thì thể tích tăng gấp bao nhiêu lần?', unit: 'lần', answer: '27', explain: '3³.' },
      { type: 'mcq', q: 'Diện tích mặt cầu bán kính R là:', options: ['πR²', '2πR²', '4πR²', '(4/3)πR³'], answer: 2, explain: 'S = 4πR².' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mặt phẳng cắt hình cầu luôn cho mặt cắt là hình tròn.', answer: true, explain: 'Bán kính √(R² − d²).' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Bán kính tăng gấp đôi thì diện tích mặt cầu tăng gấp đôi.', answer: false, explain: 'Tăng gấp 4.' }
    ]
  });
})();
