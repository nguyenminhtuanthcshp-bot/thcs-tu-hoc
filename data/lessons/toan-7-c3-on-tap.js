/* Toán 7 – Bài tập cuối chương III. Góc và đường thẳng song song. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, G = S.geom, C = S.C, O = [190, 120];
THCS.registerLesson('toan-7/c3-on-tap', {
  objectives: [
    'Hệ thống kiến thức chương III: góc kề bù, đối đỉnh, tia phân giác, các cặp góc, song song, tiên đề Euclid, định lí.',
    'Giải các bài toán tính góc tổng hợp nhiều bước.',
    'Chứng minh hai đường thẳng song song hoặc vuông góc có lập luận chặt chẽ.'
  ],
  intro: 'Ôn tập chương III. Trước khi làm bài, hãy chắc chắn em nhớ hình ảnh của từng khái niệm – vẽ nhanh ra nháp là cách nhớ tốt nhất.',
  steps: [
    { title: 'Tổng kết các loại góc', html: `<table class="tbl"><tr><th>Quan hệ</th><th>Kết luận</th></tr><tr><td>Kề bù</td><td>Tổng 180°</td></tr><tr><td>Đối đỉnh</td><td>Bằng nhau</td></tr><tr><td>Tia phân giác</td><td>Chia đôi góc</td></tr><tr><td>a // b: so le trong, đồng vị</td><td>Bằng nhau</td></tr><tr><td>a // b: trong cùng phía</td><td>Bù nhau</td></tr></table>`,
      svg: S.geo({ w: 380, h: 230, P: { O: O, x: G.polar(O, 0, 170), "x'": G.polar(O, 180, 170), y: G.polar(O, 90, 100), t: G.polar(O, 45, 130), "t'": G.polar(O, 225, 130) }, seg: ["x-x'", "t-t'"], ray: ['Oy'], ext: 0, right: ['xOy'], arcs: [['x-O-t', 1, '45°', C.orange, 42], ["x'-O-t'", 1, '45°', C.orange, 42], ["t-O-y", 1, '', C.green, 28]], off: { O: [12, 20], x: [0, 20], "x'": [0, 20] } }),
      caption: 'Ot là phân giác của góc vuông xOy; ∠xOt và ∠x\'Ot\' đối đỉnh.' },
    { title: 'Song song và vuông góc', html: `<ul><li>Tiên đề Euclid: qua điểm ngoài đường thẳng chỉ có một đường song song.</li><li>Dấu hiệu: so le trong/đồng vị bằng nhau ⇒ song song.</li><li>c ⊥ a, c ⊥ b ⇒ a // b; a // b, c ⊥ a ⇒ c ⊥ b.</li></ul>` },
    { title: 'Định lí và chứng minh', html: `<p>Định lí “Nếu … thì …”: GT – KL. Chứng minh là chuỗi suy luận có căn cứ; bác bỏ bằng phản ví dụ.</p>` },
    { title: 'Chiến lược giải bài tính góc', html: `<ol><li>Đánh dấu các góc đã biết lên hình.</li><li>Tìm quan hệ (kề bù, đối đỉnh, phân giác, song song) nối góc đã biết với góc cần tìm.</li><li>Nếu chưa thấy, kẻ thêm đường song song hoặc vuông góc.</li></ol>`,
      svg: S.transversal({ deg: 70, show: { A: [1, 2, 3, 4], B: [1, 2, 3, 4] }, mark: [['A', 2, C.blue, '110°']], namePos: { A: [-36, 22] } }),
      caption: 'a // b, ∠A₂ = 110°: em có tính được cả 8 góc không?' }
  ],
  summary: 'Kề bù 180°, đối đỉnh bằng nhau, phân giác chia đôi; a // b ⇔ (có) so le trong/đồng vị bằng nhau; trong cùng phía bù nhau; tiên đề Euclid; định lí gồm GT – KL và chứng minh.',
  examples: [
    { title: 'Tính cả 8 góc', problem: 'a // b, ∠A₂ = 110°. Tính các góc tại A và B.', solution: '∠A₂ = ∠A₄ = 110°; ∠A₁ = ∠A₃ = 70°. Do a // b nên các góc đồng vị bằng nhau: ∠B₁ = ∠B₃ = 70°, ∠B₂ = ∠B₄ = 110°.' },
    { title: 'Phân giác và vuông góc', problem: 'Ot là phân giác của ∠xOy = 90°, Ot\' là tia đối của Ot. Tính ∠x\'Ot\' (x\' là tia đối của Ox).', solution: '∠xOt = 45°; ∠x\'Ot\' đối đỉnh với ∠xOt nên bằng 45°.' },
    { title: 'Chứng minh song song', problem: 'Cho ∠xAB = 50° và ∠ABy = 50°, hai tia Ax, By nằm khác phía đối với đường thẳng AB. Chứng minh Ax // By.', solution: '∠xAB và ∠ABy là hai góc so le trong (AB là cát tuyến) và bằng nhau ⇒ đường thẳng chứa Ax song song với đường thẳng chứa By.' }
  ],
  exercises: [
    { question: 'Hai đường thẳng cắt nhau, hiệu hai góc kề bù bằng 30°. Tính bốn góc tạo thành.', hints: ['Góc lớn = (180° + 30°) : 2.', 'Dùng đối đỉnh.'], solution: '105°, 75°, 105°, 75°.' },
    { question: 'a // b, ∠A₁ = x + 20°, ∠B₃ = 3x − 40°. Tìm x và ∠A₁.', hints: ['∠A₁ = ∠A₃ (đối đỉnh) = ∠B₃ (đồng vị).', 'Giải x + 20° = 3x − 40°.'], solution: 'x = 30°, ∠A₁ = 50°.' },
    { question: 'Cho a // b. Đường thẳng c cắt a tại A và vuông góc với a. Đường thẳng d đi qua A và song song với b. Hỏi d có trùng a không? Vì sao?', hints: ['Qua A có a // b và d // b.', 'Tiên đề Euclid.'], solution: 'Qua A chỉ có một đường thẳng song song với b, nên d trùng a.' }
  ],
  quiz: [
    { type: 'short', calc: '180 - 110', q: 'a // b, ∠A₂ = 110°. Tính ∠B₁ (độ).', unit: 'độ', answer: '70', explain: '∠B₂ = 110° (đồng vị) ⇒ ∠B₁ = 70°.' },
    { type: 'short', calc: '(180 + 30) / 2', q: 'Hai góc kề bù hơn kém nhau 30°. Góc lớn bằng bao nhiêu độ?', unit: 'độ', answer: '105', explain: '(180° + 30°) : 2 = 105°.' },
    { type: 'mcq', q: 'Hai góc đối đỉnh thì:', options: ['bù nhau', 'phụ nhau', 'bằng nhau', 'kề nhau'], answer: 2, explain: 'Tính chất hai góc đối đỉnh.' },
    { type: 'short', calc: '(20 + 40) / 2 + 20', q: 'a // b, ∠A₁ = x + 20°, ∠B₃ = 3x − 40° (∠A₃ đối đỉnh ∠A₁, đồng vị ∠B₃). Tính ∠A₁ (độ).', unit: 'độ', answer: '50', explain: 'x = 30° ⇒ ∠A₁ = 50°.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hai góc trong cùng phía tạo bởi một cát tuyến cắt hai đường thẳng song song thì bằng nhau.', answer: false, explain: 'Chúng bù nhau (tổng 180°), chỉ bằng nhau khi cùng bằng 90°.' },
    { type: 'short', calc: '90 / 2', q: 'Ot là phân giác của góc vuông xOy. Tính ∠tOy (độ).', unit: 'độ', answer: '45', explain: '90° : 2.' },
    { type: 'mcq', q: 'Qua điểm M nằm ngoài đường thẳng a có bao nhiêu đường thẳng vuông góc với a?', options: ['0', '1', '2', 'vô số'], answer: 1, explain: 'Chỉ có một đường thẳng qua M vuông góc với a (đã học ở lớp 6/7).' },
    { type: 'short', calc: '50', q: '∠xAB = ∠ABy (so le trong) và Ax // By. Nếu ∠xAB = 50° thì ∠ABy = ? (độ)', unit: 'độ', answer: '50', explain: 'Hai góc so le trong bằng nhau.' }
  ]
});
})();
