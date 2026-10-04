/* Toán 8 – Luyện tập chung (sau Bài 12). Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C, G = S.geom;
  var A = [60, 190], B = [260, 190], Cc = [330, 60], D = [130, 60], E = G.mid(A, B), F = G.mid(D, Cc);
  THCS.registerLesson('toan-8/c3-ltc-2', {
    objectives: [
      'Vận dụng tính chất của hình bình hành để tính độ dài, số đo góc.',
      'Lựa chọn dấu hiệu phù hợp để chứng minh một tứ giác là hình bình hành.',
      'Chứng minh ba điểm thẳng hàng, hai đoạn thẳng bằng nhau nhờ hình bình hành.'
    ],
    intro: 'Hình bình hành là “công cụ” mạnh để chứng minh các đoạn thẳng bằng nhau hay song song. Buổi luyện tập này giúp em chọn đúng dấu hiệu.',
    steps: [
      { title: 'Bảng chọn dấu hiệu', html: `<table class="tbl"><tr><th>Đề bài cho</th><th>Nên dùng</th></tr>
        <tr><td>Trung điểm của hai đoạn cắt nhau</td><td>Đường chéo cắt nhau tại trung điểm mỗi đường</td></tr>
        <tr><td>Một cặp cạnh song song và bằng nhau</td><td>Hai cạnh đối song song và bằng nhau</td></tr>
        <tr><td>Nhiều cặp đoạn thẳng bằng nhau</td><td>Các cạnh đối bằng nhau</td></tr>
        <tr><td>Nhiều cặp góc</td><td>Các góc đối bằng nhau</td></tr></table>` },
      { title: 'Hình bình hành lồng nhau', html: `<p>Trong hình bình hành ABCD, lấy E, F là trung điểm AB, CD. Khi đó AEFD, EBCF và AECF đều là hình bình hành.</p>`,
        svg: S.geo({ w: 390, h: 230, P: { A: A, B: B, C: Cc, D: D, E: E, F: F }, seg: ['AB', 'BC', 'CD', 'DA', { s: 'EF', color: C.blue }, { s: 'AF', color: C.red, dash: true }, { s: 'EC', color: C.red, dash: true }], ticks: [['AE', 1], ['EB', 1], ['DF', 1], ['FC', 1]], off: { E: [0, 20], F: [0, -10] } }), caption: 'E, F là trung điểm hai cạnh đối: AECF là hình bình hành.' },
      { title: 'Chứng minh thẳng hàng', html: `<p>Nếu hai hình bình hành có chung một đường chéo thì các đường chéo còn lại có cùng trung điểm – từ đó suy ra ba điểm thẳng hàng hoặc ba đường thẳng đồng quy.</p>` },
      { title: 'Tính toán', html: `<p>Nhớ: nửa chu vi hình bình hành bằng tổng hai cạnh kề; hai góc kề bù nhau; hai góc đối bằng nhau.</p>` }
    ],
    summary: 'Chọn dấu hiệu theo dữ kiện: trung điểm → đường chéo; song song và bằng nhau → một cặp cạnh đối.',
    examples: [
      { title: 'Đường chéo chung trung điểm', problem: 'Hình bình hành ABCD, O là giao hai đường chéo. Một đường thẳng qua O cắt AB, CD tại M, N. Chứng minh AMCN là hình bình hành.', solution: 'ΔOAM = ΔOCN (g.c.g: OA = OC, ∠AOM = ∠CON, ∠OAM = ∠OCN so le trong) ⇒ OM = ON. Tứ giác AMCN có hai đường chéo AC, MN cắt nhau tại trung điểm O mỗi đường nên là hình bình hành.' },
      { title: 'Tính góc', problem: 'Hình bình hành ABCD có ∠A = 2∠B. Tính các góc.', solution: '∠A + ∠B = 180° ⇒ 3∠B = 180° ⇒ ∠B = ∠D = 60°, ∠A = ∠C = 120°.' },
      { title: 'Tính cạnh', problem: 'Hình bình hành ABCD có chu vi 40 cm, AB = 3AD. Tính AB, AD.', solution: 'AB + AD = 20 ⇒ 4AD = 20 ⇒ AD = 5 cm, AB = 15 cm.' }
    ],
    exercises: [
      { question: 'Hình bình hành ABCD có E, F là trung điểm AB, CD. Chứng minh AF // EC.', hints: ['AE // FC và AE = FC.', 'AECF là hình bình hành.'], solution: 'AECF là hình bình hành (hai cạnh đối song song và bằng nhau) nên AF // EC.' },
      { question: 'Hình bình hành có một góc bằng 72°. Tính góc kề với nó.', hints: ['Hai góc kề một cạnh bù nhau.', '180° − 72°.'], solution: '108°.' },
      { question: 'Cho tam giác ABC. Vẽ D sao cho ABCD là hình bình hành. Nếu AB = 5 cm, BC = 7 cm thì chu vi ABCD là bao nhiêu?', hints: ['CD = AB, AD = BC.', '2(5 + 7).'], solution: '24 cm.' }
    ],
    quiz: [
      { type: 'short', calc: '180 / 3', q: 'Hình bình hành ABCD có ∠A = 2∠B. Tính ∠B (độ).', unit: 'độ', answer: '60', explain: '3∠B = 180°.' },
      { type: 'short', calc: '20 / 4 * 3', q: 'Hình bình hành có chu vi 40 cm và AB = 3AD. Tính AB (cm).', unit: 'cm', answer: '15', explain: 'AD = 5, AB = 15.' },
      { type: 'mcq', q: 'Đề bài cho O là trung điểm của AC và của BD. Dấu hiệu phù hợp để chứng minh ABCD là hình bình hành là:', options: ['Các góc đối bằng nhau', 'Hai đường chéo cắt nhau tại trung điểm mỗi đường', 'Các cạnh đối bằng nhau', 'Hai cạnh kề bằng nhau'], answer: 1, explain: 'Dữ kiện trung điểm hai đường chéo.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tứ giác có hai cặp góc đối bằng nhau là hình bình hành.', answer: true, explain: 'Dấu hiệu nhận biết.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tứ giác có một cặp cạnh đối song song và một cặp cạnh đối bằng nhau luôn là hình bình hành.', answer: false, explain: 'Hình thang cân cũng thoả mãn nhưng không phải hình bình hành. Cần “cùng một cặp” vừa song song vừa bằng nhau.' },
      { type: 'mcq', q: 'E, F là trung điểm AB, CD của hình bình hành ABCD. Tứ giác AEFD là:', options: ['Hình thang cân', 'Hình bình hành', 'Tam giác', 'Tứ giác không đặc biệt'], answer: 1, explain: 'AE // DF và AE = DF.' },
      { type: 'short', calc: '180 - 72', q: 'Hình bình hành có một góc 72°. Góc kề với nó bằng bao nhiêu độ?', unit: 'độ', answer: '108', explain: '180° − 72°.' },
      { type: 'short', calc: '2 * (5 + 7)', q: 'Hình bình hành ABCD có AB = 5 cm, BC = 7 cm. Chu vi bằng bao nhiêu cm?', unit: 'cm', answer: '24', explain: '2(5 + 7).' }
    ]
  });
})();
