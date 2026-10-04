/* Toán 8 – Bài 10. Tứ giác. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  var A = [80, 50], B = [270, 36], Cc = [310, 190], D = [40, 176];
  THCS.registerLesson('toan-8/bai-10', {
    objectives: [
      'Nhận biết được tứ giác, tứ giác lồi; các yếu tố: đỉnh, cạnh, góc, đường chéo.',
      'Giải thích được định lí tổng các góc trong một tứ giác lồi bằng 360°.',
      'Vận dụng định lí tổng các góc để tính số đo góc chưa biết trong tứ giác.'
    ],
    intro: 'Mặt bàn, viên gạch lát, cánh diều… đều có dạng tứ giác. Chương III bắt đầu bằng việc tìm hiểu tứ giác nói chung trước khi đi vào các tứ giác đặc biệt.',
    steps: [
      { title: 'Tứ giác là gì?', html: `<p>Tứ giác ABCD là hình gồm bốn đoạn thẳng AB, BC, CD, DA, trong đó <b>không có hai đoạn thẳng nào cùng nằm trên một đường thẳng</b>.</p>
        <ul><li><b>Đỉnh:</b> A, B, C, D. <b>Cạnh:</b> AB, BC, CD, DA.</li><li><b>Hai đỉnh kề</b> nhau: A và B,…; <b>hai đỉnh đối</b> nhau: A và C, B và D.</li><li><b>Đường chéo:</b> đoạn nối hai đỉnh đối nhau – AC và BD.</li></ul>`,
        svg: S.geo({ w: 350, h: 220, P: { A: A, B: B, C: Cc, D: D }, seg: ['AB', 'BC', 'CD', 'DA'], dash: ['AC', 'BD'], fill: [['ABCD', C.blueL]] }), caption: 'Tứ giác lồi ABCD với hai đường chéo AC, BD (nét đứt).' },
      { title: 'Tứ giác lồi', html: `<p>Tứ giác lồi là tứ giác mà hai đỉnh thuộc một cạnh bất kì luôn nằm về một phía của đường thẳng đi qua hai đỉnh còn lại. Nói gọn: tứ giác lồi luôn nằm trong một nửa mặt phẳng có bờ là đường thẳng chứa bất kì cạnh nào.</p>
        <div class="box tip">Từ nay, khi nói “tứ giác” mà không giải thích gì thêm, ta hiểu đó là tứ giác lồi.</div>` },
      { title: 'Tổng các góc của một tứ giác', html: `<div class="box key">Tổng các góc của một tứ giác bằng 360°.</div>
        <p>Giải thích: đường chéo AC chia tứ giác thành hai tam giác ABC và ACD. Tổng các góc của mỗi tam giác là 180°, nên tổng các góc của tứ giác là 180° + 180° = 360°.</p>`,
        svg: S.geo({ w: 350, h: 220, P: { A: A, B: B, C: Cc, D: D }, seg: ['AB', 'BC', 'CD', 'DA', { s: 'AC', color: C.red, width: 2.5 }], fill: [['ABC', C.greenL], ['ACD', C.orangeL]], arcs: [['DAB', 1, '', C.blue], ['ABC', 1, '', C.green], ['BCD', 1, '', C.orange], ['CDA', 1, '', C.purple]] }), caption: 'Đường chéo AC chia tứ giác thành hai tam giác.' },
      { title: 'Tính góc chưa biết', html: `<p>Biết ba góc của tứ giác, góc còn lại bằng 360° trừ tổng ba góc đã biết.</p>
        <p>Ví dụ: ∠A = 80°, ∠B = 110°, ∠C = 95° ⇒ ∠D = 360° − 285° = 75°.</p>` },
      { title: 'Góc ngoài của tứ giác', html: `<p>Góc kề bù với một góc của tứ giác gọi là <b>góc ngoài</b> tại đỉnh đó. Mỗi góc ngoài bằng 180° trừ góc trong tương ứng; tổng bốn góc ngoài (mỗi đỉnh một góc) bằng 4 · 180° − 360° = 360°.</p>` }
    ],
    summary: 'Tứ giác ABCD có 4 đỉnh, 4 cạnh, 2 đường chéo. Tổng bốn góc của tứ giác bằng 360°.',
    examples: [
      { title: 'Tính góc', problem: 'Tứ giác MNPQ có ∠M = 70°, ∠N = 120°, ∠P = 90°. Tính ∠Q.', solution: '∠Q = 360° − (70° + 120° + 90°) = 80°.' },
      { title: 'Góc theo tỉ lệ', problem: 'Các góc của tứ giác ABCD tỉ lệ với 1 : 2 : 3 : 4. Tính số đo các góc.', solution: 'Gọi các góc là k, 2k, 3k, 4k. Ta có 10k = 360° ⇒ k = 36°. Các góc: 36°, 72°, 108°, 144°.' },
      { title: 'Tứ giác có hai góc vuông', problem: 'Tứ giác ABCD có ∠A = ∠C = 90° và ∠B = 65°. Tính ∠D.', solution: '∠D = 360° − 90° − 90° − 65° = 115°. (Khi ∠A = ∠C = 90° thì ∠B + ∠D = 180°.)' }
    ],
    exercises: [
      { question: 'Tứ giác EFGH có ∠E = 100°, ∠F = ∠G = 85°. Tính ∠H.', hints: ['Dùng tổng bốn góc bằng 360°.', '360° − (100° + 85° + 85°).'], solution: '∠H = 90°.' },
      { question: 'Tứ giác ABCD có ∠A = ∠B = ∠C = ∠D. Mỗi góc bằng bao nhiêu độ?', hints: ['Bốn góc bằng nhau có tổng 360°.', '360° : 4.'], solution: 'Mỗi góc bằng 90°.' },
      { question: 'Tứ giác ABCD có ∠A = 60°, ∠B = 110°, góc ngoài tại C bằng 70°. Tính ∠D.', hints: ['Góc trong tại C bằng 180° − 70° = 110°.', '∠D = 360° − 60° − 110° − 110°.'], solution: '∠D = 80°.' }
    ],
    quiz: [
      { type: 'mcq', q: 'Hai đường chéo của tứ giác ABCD là:', options: ['AB và CD', 'AC và BD', 'AD và BC', 'AB và BC'], answer: 1, explain: 'Đường chéo nối hai đỉnh đối nhau.' },
      { type: 'short', calc: '360 - (70 + 120 + 90)', q: 'Tứ giác có ba góc 70°, 120°, 90°. Góc còn lại bằng bao nhiêu độ?', unit: 'độ', answer: '80', explain: '360° − 280° = 80°.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Một tứ giác có thể có cả bốn góc đều nhọn.', answer: false, explain: 'Bốn góc nhọn có tổng nhỏ hơn 360°, vô lí.' },
      { type: 'mcq', q: 'Đỉnh đối của đỉnh B trong tứ giác ABCD là:', options: ['A', 'C', 'D', 'Không có'], answer: 2, explain: 'Các cặp đỉnh đối: A – C và B – D.' },
      { type: 'short', calc: '4 * 360 / 10', q: 'Các góc của một tứ giác tỉ lệ với 1 : 2 : 3 : 4. Góc lớn nhất bằng bao nhiêu độ?', unit: 'độ', answer: '144', explain: 'k = 36°, góc lớn nhất 4k = 144°.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tổng bốn góc ngoài (mỗi đỉnh một góc) của một tứ giác bằng 360°.', answer: true, explain: '4 · 180° − 360° = 360°.' },
      { type: 'mcq', q: 'Tứ giác ABCD có ∠A = ∠C = 90°. Khi đó:', options: ['∠B = ∠D', '∠B + ∠D = 180°', '∠B + ∠D = 90°', '∠B + ∠D = 360°'], answer: 1, explain: '∠B + ∠D = 360° − 180° = 180°.' },
      { type: 'short', calc: '360 - 60 - 110 - (180 - 70)', q: 'Tứ giác ABCD có ∠A = 60°, ∠B = 110°, góc ngoài tại C bằng 70°. Tính ∠D (độ).', unit: 'độ', answer: '80', explain: '∠C = 110°; ∠D = 360° − 280° = 80°.' }
    ]
  });
})();
