/* Toán 9 – Luyện tập chung (sau Bài 2). Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  function sys(a, b) { return '<span class="sys"><span>' + a + '</span><span>' + b + '</span></span>'; }
  THCS.registerLesson('toan-9/c1-ltc-1', {
    objectives: [
      'Nhận biết được nghiệm của phương trình và hệ hai phương trình bậc nhất hai ẩn.',
      'Giải thành thạo hệ hai phương trình bậc nhất hai ẩn bằng phương pháp thế và phương pháp cộng đại số.',
      'Minh hoạ nghiệm của hệ bằng giao điểm của hai đường thẳng; tìm tham số để hệ có nghiệm cho trước.'
    ],
    intro: 'Buổi luyện tập này giúp em chọn phương pháp giải hệ nhanh nhất, kiểm tra nghiệm và hiểu ý nghĩa hình học của nghiệm.',
    steps: [
      { title: 'Chọn phương pháp', html: `<ul><li>Có một ẩn với hệ số 1 hoặc −1 (ví dụ y = 2x − 1): dùng <b>phương pháp thế</b>.</li><li>Hệ số của cùng một ẩn bằng nhau hoặc đối nhau: dùng <b>phương pháp cộng đại số</b>.</li><li>Hệ số “lẻ”: nhân mỗi phương trình với số thích hợp rồi cộng/trừ.</li></ul>` },
      { title: 'Ý nghĩa hình học', html: `<p>Mỗi phương trình ax + by = c (a, b không đồng thời bằng 0) biểu diễn một đường thẳng. Nghiệm của hệ là toạ độ giao điểm của hai đường thẳng.</p>`,
        svg: S.plane({ x: [-1, 5], y: [-2, 5], u: 30, lines: [{ a: -1, b: 4, label: 'x + y = 4', color: C.blue, at: 0.1 }, { a: 1, b: -2, label: 'x − y = 2', color: C.orange, at: 0.85 }], pts: [{ x: 3, y: 1, label: '(3; 1)', proj: true, dx: 8, dy: -8 }] }), caption: 'Hai đường thẳng cắt nhau tại (3; 1): hệ có nghiệm duy nhất.' },
      { title: 'Số nghiệm của hệ', html: `<table class="tbl"><tr><th>Vị trí hai đường thẳng</th><th>Số nghiệm của hệ</th></tr><tr><td>Cắt nhau</td><td>Nghiệm duy nhất</td></tr><tr><td>Song song</td><td>Vô nghiệm</td></tr><tr><td>Trùng nhau</td><td>Vô số nghiệm</td></tr></table>` },
      { title: 'Tìm tham số', html: `<p>Nếu biết (x<sub>0</sub>; y<sub>0</sub>) là nghiệm của hệ chứa tham số, ta <b>thay x<sub>0</sub>, y<sub>0</sub></b> vào từng phương trình để được hệ (hoặc phương trình) với ẩn là tham số.</p>` }
    ],
    summary: 'Thế khi có ẩn hệ số ±1; cộng đại số khi hệ số bằng/đối nhau. Nghiệm của hệ là giao điểm hai đường thẳng: cắt nhau – 1 nghiệm, song song – vô nghiệm, trùng nhau – vô số nghiệm.',
    examples: [
      { title: 'Nhân rồi cộng', problem: 'Giải hệ ' + sys('3x + 2y = 7', '2x − 3y = −4'), solution: 'Nhân phương trình (1) với 3, (2) với 2: 9x + 6y = 21; 4x − 6y = −8. Cộng: 13x = 13 ⇒ x = 1 ⇒ 2y = 4 ⇒ y = 2. Nghiệm (1; 2).' },
      { title: 'Đặt ẩn phụ', problem: 'Giải hệ ' + sys('{{1|x}} + {{1|y}} = 5', '{{1|x}} − {{1|y}} = 1'), solution: 'Đặt u = {{1|x}}, v = {{1|y}}: u + v = 5, u − v = 1 ⇒ u = 3, v = 2 ⇒ x = {{1|3}}, y = {{1|2}}.' },
      { title: 'Tìm tham số', problem: 'Tìm a, b để hệ ' + sys('ax + y = 5', 'x + by = 4') + ' có nghiệm (2; 1).', solution: 'Thay x = 2, y = 1: 2a + 1 = 5 ⇒ a = 2; 2 + b = 4 ⇒ b = 2.' }
    ],
    exercises: [
      { question: 'Giải hệ ' + sys('5x − y = 7', '3x + 2y = 12'), hints: ['Từ (1): y = 5x − 7.', 'Thế vào (2): 3x + 10x − 14 = 12.'], solution: '13x = 26 ⇒ x = 2, y = 3. Nghiệm (2; 3).' },
      { question: 'Không giải, cho biết hệ ' + sys('2x − y = 3', '4x − 2y = 1') + ' có bao nhiêu nghiệm.', hints: ['Viết mỗi phương trình dạng y = ax + b.', 'y = 2x − 3 và y = 2x − 0,5: cùng hệ số góc, tung độ gốc khác.'], solution: 'Hai đường thẳng song song nên hệ vô nghiệm.' },
      { question: 'Tìm m để hệ ' + sys('x + y = 3', 'mx − y = 1') + ' có nghiệm với x = 2.', hints: ['Từ x + y = 3 và x = 2 suy ra y = 1.', 'Thay vào phương trình thứ hai: 2m − 1 = 1.'], solution: 'm = 1.' }
    ],
    quiz: [
      { type: 'short', calc: '(7 - 3 * 1) / 2', q: 'Giải hệ ' + sys('3x + 2y = 7', '2x − 3y = −4') + ' và cho biết giá trị của y.', answer: '2', explain: 'x = 1, y = 2.' },
      { type: 'mcq', q: 'Hệ ' + sys('x + y = 4', 'x − y = 2') + ' có nghiệm là:', options: ['(1; 3)', '(3; 1)', '(2; 2)', '(4; 0)'], answer: 1, explain: 'Cộng: 2x = 6 ⇒ x = 3, y = 1.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hệ ' + sys('2x − y = 3', '4x − 2y = 1') + ' vô nghiệm.', answer: true, explain: 'Hai đường thẳng song song.' },
      { type: 'short', calc: '(5 - 1) / 2', q: 'Tìm a để hệ ' + sys('ax + y = 5', 'x + by = 4') + ' có nghiệm (2; 1).', answer: '2', explain: '2a + 1 = 5.' },
      { type: 'short', calc: '(1 + 1) / 2', q: 'Tìm m để hệ ' + sys('x + y = 3', 'mx − y = 1') + ' có nghiệm với x = 2.', answer: '1', explain: 'y = 1; 2m − 1 = 1.' },
      { type: 'mcq', q: 'Hai đường thẳng biểu diễn hai phương trình của một hệ trùng nhau. Hệ đó:', options: ['vô nghiệm', 'có nghiệm duy nhất', 'có vô số nghiệm', 'có đúng hai nghiệm'], answer: 2, explain: 'Mọi điểm chung đều là nghiệm.' },
      { type: 'short', requireSimplest: true, calc: '1 / 3', q: 'Giải hệ ' + sys('{{1|x}} + {{1|y}} = 5', '{{1|x}} − {{1|y}} = 1') + '. Giá trị của x là? (Dạng a/b tối giản.)', answer: ['1/3'], answerText: '1/3', explain: '{{1|x}} = 3.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Cặp số (2; 3) là nghiệm của hệ ' + sys('5x − y = 7', '3x + 2y = 12') + '.', answer: true, explain: '10 − 3 = 7; 6 + 6 = 12.' }
    ]
  });
})();
