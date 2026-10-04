/* Toán 8 – Bài 38. Hình chóp tam giác đều. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-8/bai-38', {
    objectives: [
      'Mô tả được đỉnh, mặt đáy, mặt bên, cạnh bên, chiều cao, trung đoạn của hình chóp tam giác đều.',
      'Tạo lập được hình chóp tam giác đều từ tấm bìa (vẽ hình khai triển rồi gấp).',
      'Tính được diện tích xung quanh và thể tích của hình chóp tam giác đều.',
      'Giải quyết được một số bài toán thực tế gắn với hình chóp tam giác đều (hộp quà, mô hình, lều).'
    ],
    intro: 'Một số hộp quà, đồ chơi xếp hình hay chiếc lều trại có dạng một “kim tự tháp” đáy tam giác. Đó là hình chóp tam giác đều.',
    steps: [
      { title: 'Nhận biết hình chóp tam giác đều', html: `<p>Hình chóp tam giác đều S.ABC có:</p><ul><li><b>đáy</b> ABC là tam giác đều;</li><li>ba <b>cạnh bên</b> SA, SB, SC bằng nhau;</li><li>ba <b>mặt bên</b> là các tam giác cân bằng nhau, chung đỉnh S.</li></ul>`,
        svg: S.pyramid({ kind: 'chop3', height: false, apothem: false }), caption: 'Hình chóp tam giác đều S.ABC (cạnh AC khuất vẽ nét đứt).' },
      { title: 'Chiều cao và trung đoạn', html: `<ul><li><b>Chiều cao</b> SO: đoạn nối đỉnh S với tâm O của tam giác đáy (O là giao ba đường trung tuyến).</li><li><b>Trung đoạn</b> SM: đường cao của mặt bên kẻ từ S (M là trung điểm cạnh đáy).</li></ul>`,
        svg: S.pyramid({ kind: 'chop3', dims: { h: 'h', d: 'd' } }), caption: 'SO = h là chiều cao, SM = d là trung đoạn.' },
      { title: 'Hình khai triển', html: `<p>Cắt dọc ba cạnh bên rồi trải phẳng: ta được một tam giác đều ở giữa và ba tam giác cân gắn vào ba cạnh. Ngược lại, gấp hình khai triển lên sẽ được hình chóp.</p>`,
        svg: S.draw({ w: 300, h: 250, items: [
          { poly: [[100, 150], [200, 150], [150, 63.4]], fill: C.blueL },
          { poly: [[100, 150], [200, 150], [150, 225]], fill: C.orangeL },
          { poly: [[200, 150], [150, 63.4], [240, 69.2]], fill: C.orangeL },
          { poly: [[150, 63.4], [100, 150], [60, 69.2]], fill: C.orangeL },
          { text: [150, 128, 'đáy'], size: 13, color: C.blue, bold: true },
          { text: [150, 178, 'mặt bên'], size: 12, color: C.orange }
        ] }), caption: 'Một hình khai triển của hình chóp tam giác đều.' },
      { title: 'Diện tích xung quanh', html: `<div class="box key">S<sub>xq</sub> = p · d, trong đó p là <b>nửa chu vi đáy</b>, d là <b>trung đoạn</b>.</div>
        <p>Vì mỗi mặt bên có diện tích {{1|2}} · a · d, ba mặt bên có tổng {{3a|2}} · d = p · d.</p><p>Diện tích toàn phần = S<sub>xq</sub> + S<sub>đáy</sub>.</p>` },
      { title: 'Thể tích', html: `<div class="box key">V = {{1|3}} · S<sub>đáy</sub> · h.</div><p>Thể tích hình chóp bằng một phần ba thể tích hình lăng trụ có cùng đáy và cùng chiều cao.</p>`,
        svg: S.pyramid({ kind: 'chop3', apothem: false, dims: { h: 'h', a: 'a' } }), caption: 'V = {{1|3}} · S<sub>đáy</sub> · h.' }
    ],
    summary: 'Hình chóp tam giác đều: đáy tam giác đều, cạnh bên bằng nhau. S<sub>xq</sub> = p · d (p nửa chu vi đáy, d trung đoạn); V = {{1|3}} · S<sub>đáy</sub> · h.',
    examples: [
      { title: 'Diện tích xung quanh', problem: 'Hình chóp tam giác đều có cạnh đáy 6 cm, trung đoạn 8 cm. Tính S<sub>xq</sub>.', solution: 'p = 3 · 6 : 2 = 9 cm; S<sub>xq</sub> = 9 · 8 = 72 cm².' },
      { title: 'Thể tích', problem: 'Hình chóp tam giác đều có diện tích đáy 15,6 cm² và chiều cao 10 cm. Tính thể tích.', solution: 'V = {{1|3}} · 15,6 · 10 = 52 cm³.' },
      { title: 'Diện tích toàn phần', problem: 'Hình chóp tam giác đều có cạnh đáy 4 cm, trung đoạn 5 cm, diện tích đáy ≈ 6,93 cm². Tính diện tích toàn phần (làm tròn đến hàng phần mười).', solution: 'S<sub>xq</sub> = 6 · 5 = 30 cm²; S<sub>tp</sub> ≈ 30 + 6,93 ≈ 36,9 cm².' }
    ],
    exercises: [
      { question: 'Một hộp quà hình chóp tam giác đều cạnh đáy 10 cm, trung đoạn 12 cm. Cần bao nhiêu cm² giấy để dán kín ba mặt bên?', hints: ['p = 15 cm.', 'S<sub>xq</sub> = p · d.'], solution: '15 · 12 = 180 cm².' },
      { question: 'Hình chóp tam giác đều có thể tích 40 cm³, diện tích đáy 12 cm². Tính chiều cao.', hints: ['V = {{1|3}} · S · h.', 'h = 3V : S.'], solution: 'h = 120 : 12 = 10 cm.' },
      { question: 'Hình chóp tam giác đều có tất cả các cạnh bằng 6 cm. Tính trung đoạn (làm tròn đến hàng phần mười).', hints: ['Mặt bên là tam giác đều cạnh 6; trung đoạn là đường cao của nó.', 'd = √(6² − 3²) = √27.'], solution: 'd ≈ 5,2 cm.' }
    ],
    quiz: [
      { type: 'mcq', q: 'Mặt đáy của hình chóp tam giác đều là:', options: ['tam giác vuông', 'tam giác cân bất kì', 'tam giác đều', 'hình vuông'], answer: 2, explain: 'Đáy là tam giác đều.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Các mặt bên của hình chóp tam giác đều là những tam giác cân bằng nhau.', answer: true, explain: 'Cạnh bên bằng nhau, cạnh đáy bằng nhau.' },
      { type: 'short', calc: '3 * 6 / 2 * 8', q: 'Hình chóp tam giác đều cạnh đáy 6 cm, trung đoạn 8 cm. S<sub>xq</sub> = ?', unit: 'cm²', answer: '72', explain: 'p = 9, 9 · 8.' },
      { type: 'short', calc: '15.6 * 10 / 3', q: 'Hình chóp tam giác đều có S<sub>đáy</sub> = 15,6 cm², h = 10 cm. Thể tích?', unit: 'cm³', answer: '52', explain: '{{1|3}} · 156.' },
      { type: 'short', calc: '3 * 40 / 12', q: 'Hình chóp có V = 40 cm³, S<sub>đáy</sub> = 12 cm². Chiều cao?', unit: 'cm', answer: '10', explain: 'h = 3V : S.' },
      { type: 'mcq', q: 'Trung đoạn của hình chóp tam giác đều là:', options: ['cạnh bên', 'đường cao của mặt bên kẻ từ đỉnh', 'đường cao của hình chóp', 'đường cao của đáy'], answer: 1, explain: 'SM với M là trung điểm cạnh đáy.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Chân đường cao của hình chóp tam giác đều là trung điểm một cạnh đáy.', answer: false, explain: 'Chân đường cao là tâm O của tam giác đáy.' },
      { type: 'short', calc: '15 * 12', q: 'Hộp quà hình chóp tam giác đều cạnh đáy 10 cm, trung đoạn 12 cm. Diện tích ba mặt bên?', unit: 'cm²', answer: '180', explain: 'p = 15.' }
    ]
  });
})();
