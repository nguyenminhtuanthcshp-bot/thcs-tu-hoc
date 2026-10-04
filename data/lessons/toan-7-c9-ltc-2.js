/* Toán 7 – Chương IX. Luyện tập chung (sau Bài 35). Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, C = S.C, G = S.geom;
var A = [190, 35], B = [80, 205], Cc = [300, 205], M = G.mid(B, Cc), Gt = G.centroid(A, B, Cc);
THCS.registerLesson('toan-7/c9-ltc-2', {
  objectives: [
    'Phân biệt trọng tâm, giao điểm ba phân giác, giao điểm ba trung trực, trực tâm.',
    'Vận dụng tính chất các điểm đồng quy để tính độ dài và số đo góc.',
    'Nhận biết sự trùng nhau của các đường đặc biệt trong tam giác cân, tam giác đều.'
  ],
  intro: 'Luyện tập Bài 34 và Bài 35. Bốn “điểm đặc biệt” của tam giác – mỗi điểm một tính chất riêng, đừng nhầm lẫn!',
  steps: [
    { title: 'Bảng tổng hợp', html: `<table class="tbl"><tr><th>Ba đường</th><th>Giao điểm</th><th>Tính chất</th></tr><tr><td>Trung tuyến</td><td>Trọng tâm G</td><td>AG = {{2|3}} trung tuyến</td></tr><tr><td>Phân giác</td><td>I</td><td>Cách đều ba cạnh</td></tr><tr><td>Trung trực</td><td>O</td><td>Cách đều ba đỉnh</td></tr><tr><td>Đường cao</td><td>Trực tâm H</td><td>—</td></tr></table>` },
    { title: 'Tam giác cân', html: `<p>Trong tam giác ABC cân tại A, đường trung tuyến AM đồng thời là phân giác, đường cao, và nằm trên trung trực của BC. Vì vậy G, I, O, H đều nằm trên AM.</p>`,
      svg: S.geo({ w: 380, h: 230, P: { A: A, B: B, C: Cc, M: M, G: Gt }, seg: ['AB', 'AC', 'BC', { s: 'AM', color: C.blue }], ticks: [['AB', 1], ['AC', 1], ['BM', 2], ['MC', 2]], right: ['AMC'], off: { M: [0, 22], G: [14, -2] } }),
      caption: 'AM vừa là trung tuyến, vừa là đường cao, phân giác.' },
    { title: 'Mẹo nhớ', html: `<ul><li><b>T</b>rung <b>t</b>uyến – <b>t</b>rọng <b>t</b>âm (cùng chữ T).</li><li>Phân giác – cách đều <b>cạnh</b> (phân chia góc tạo bởi hai cạnh).</li><li>Trung trực – cách đều <b>đỉnh</b> (trung trực đi qua trung điểm nối hai đỉnh).</li></ul>` },
    { title: 'Bài toán phối hợp', html: `<p>Tam giác ABC cân tại A, AB = AC = 10 cm, BC = 12 cm, trung tuyến AM = 8 cm. Trọng tâm G: AG = {{2|3}} · 8 = {{16|3}} cm; GM = {{8|3}} cm.</p>` }
  ],
  summary: 'G: trọng tâm (AG = {{2|3}}AM); I: cách đều ba cạnh; O: cách đều ba đỉnh; H: trực tâm. Trong tam giác cân, các đường xuất phát từ đỉnh trùng nhau; tam giác đều: G ≡ I ≡ O ≡ H.',
  examples: [
    { title: 'Chọn điểm', problem: 'Cần đặt đèn chiếu sáng cách đều ba góc của một khu vườn tam giác. Chọn điểm nào?', solution: 'Giao điểm ba đường trung trực.' },
    { title: 'Tính độ dài', problem: 'Tam giác cân tại A, trung tuyến AM = 8 cm. Tính GM.', solution: '{{8|3}} cm.' },
    { title: 'Góc', problem: 'Tam giác ABC cân tại A có góc A = 40°, AM là trung tuyến. Tính góc BAM và góc AMB.', solution: 'Góc BAM = 20°, góc AMB = 90°.' }
  ],
  exercises: [
    { question: 'Cần đặt một bồn hoa tròn lớn nhất có thể trong mảnh đất tam giác, tâm bồn hoa ở đâu?', hints: ['Tâm phải cách đều ba cạnh (bờ).', 'Giao điểm ba phân giác.'], solution: 'Giao điểm ba đường phân giác.' },
    { question: 'Tam giác đều cạnh 6 cm có trung tuyến dài khoảng 5,2 cm. Tính khoảng cách từ trọng tâm đến mỗi đỉnh (làm tròn 0,1).', hints: ['{{2|3}} · 5,2.', '≈ 3,47.'], solution: '≈ 3,5 cm.' },
    { question: 'Tam giác ABC có trực tâm trùng đỉnh B. Tam giác đó có gì đặc biệt?', hints: ['BA, BC là đường cao.', 'Góc B = 90°.'], solution: 'Vuông tại B.' }
  ],
  quiz: [
    { type: 'short', calc: '8 / 3', requireSimplest: true, q: 'G là trọng tâm, trung tuyến AM = 8 cm. GM bằng bao nhiêu cm? (phân số tối giản)', unit: 'cm', answer: '8/3', explain: '{{1|3}} · 8.' },
    { type: 'short', calc: '2 / 3 * 8', requireSimplest: true, q: 'Trung tuyến AM = 8 cm. AG bằng bao nhiêu cm? (phân số tối giản)', unit: 'cm', answer: '16/3', explain: '{{2|3}} · 8.' },
    { type: 'short', calc: '40 / 2', q: 'Tam giác ABC cân tại A, góc A = 40°, AM là trung tuyến. Góc BAM = ?°', unit: '°', answer: '20', explain: 'AM là phân giác.' },
    { type: 'short', calc: '90', q: 'Tam giác cân tại A, AM là trung tuyến. Góc AMB = ?°', unit: '°', answer: '90', explain: 'AM là đường cao.' },
    { type: 'mcq', q: 'Điểm cách đều ba cạnh của tam giác là giao điểm ba đường:', options: ['trung tuyến', 'phân giác', 'trung trực', 'cao'], answer: 1, explain: 'Tính chất phân giác.' },
    { type: 'mcq', q: 'Điểm cách đều ba đỉnh của tam giác là giao điểm ba đường:', options: ['trung tuyến', 'phân giác', 'trung trực', 'cao'], answer: 2, explain: 'Tính chất trung trực.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Trong tam giác đều, trọng tâm cách đều ba đỉnh.', answer: true, explain: 'G ≡ O.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Trọng tâm luôn cách đều ba cạnh của mọi tam giác.', answer: false, explain: 'Chỉ đúng với tam giác đều.' }
  ]
});
})();
