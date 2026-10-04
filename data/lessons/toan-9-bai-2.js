/* Toán 9 – Bài 2. Giải hệ hai phương trình bậc nhất hai ẩn. Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('toan-9/bai-2', {
  objectives: [
    'Giải được hệ hai phương trình bậc nhất hai ẩn bằng phương pháp thế.',
    'Giải được hệ hai phương trình bậc nhất hai ẩn bằng phương pháp cộng đại số.',
    'Nhận biết được hệ vô nghiệm, hệ có vô số nghiệm.'
  ],
  intro: 'Có hai “chìa khoá” để giải hệ phương trình: <b>thế</b> một ẩn từ phương trình này sang phương trình kia, hoặc <b>cộng (trừ)</b> hai phương trình để khử bớt một ẩn. Mục tiêu chung: đưa về phương trình một ẩn.',
  steps: [
    { title: 'Phương pháp thế', html: `<ol><li>Từ một phương trình, biểu diễn một ẩn theo ẩn kia (ví dụ x theo y).</li><li>Thế biểu thức đó vào phương trình còn lại → được phương trình một ẩn.</li><li>Giải phương trình một ẩn, rồi suy ra ẩn còn lại.</li></ol>
      <p>Ví dụ: <span class="sys"><span>x − 2y = 1</span><span>2x + y = 7</span></span> Từ (1): x = 1 + 2y. Thế vào (2): 2(1 + 2y) + y = 7 ⇒ 5y = 5 ⇒ y = 1 ⇒ x = 3.</p>
      <p>Hệ có nghiệm duy nhất (3; 1).</p>` },
    { title: 'Phương pháp cộng đại số', html: `<ol><li>Nhân hai vế mỗi phương trình với số thích hợp (nếu cần) để hệ số của một ẩn <b>bằng nhau hoặc đối nhau</b>.</li><li>Cộng (nếu đối nhau) hoặc trừ (nếu bằng nhau) từng vế hai phương trình → khử được một ẩn.</li><li>Giải phương trình một ẩn, rồi thay vào để tìm ẩn còn lại.</li></ol>
      <p>Ví dụ: <span class="sys"><span>3x + 2y = 8</span><span>5x − 2y = 8</span></span> Cộng từng vế: 8x = 16 ⇒ x = 2. Thay vào: 6 + 2y = 8 ⇒ y = 1. Nghiệm (2; 1).</p>` },
    { title: 'Khi nào cần nhân thêm?', html: `<p>Xét <span class="sys"><span>2x + 3y = 7</span><span>x + y = 3</span></span> Nhân hai vế phương trình thứ hai với 2: 2x + 2y = 6.</p>
      <p>Trừ từng vế: (2x + 3y) − (2x + 2y) = 7 − 6 ⇒ y = 1 ⇒ x = 2. Nghiệm (2; 1).</p>
      <div class="box tip">Luôn thay nghiệm tìm được vào <b>cả hai</b> phương trình ban đầu để kiểm tra.</div>` },
    { title: 'Hệ vô nghiệm, hệ vô số nghiệm', html: `<p>Khi khử ẩn mà được phương trình dạng <b>0x = c</b>:</p>
      <ul><li>Nếu c ≠ 0: phương trình vô nghiệm ⇒ <b>hệ vô nghiệm</b>. Ví dụ: <span class="sys"><span>x + y = 2</span><span>2x + 2y = 5</span></span> nhân (1) với 2 rồi trừ: 0x + 0y = 1 (vô lí).</li>
      <li>Nếu c = 0: <b>hệ có vô số nghiệm</b>. Ví dụ: <span class="sys"><span>x − y = 1</span><span>3x − 3y = 3</span></span> hai phương trình thực chất là một; nghiệm là (x; x − 1) với x tuỳ ý.</li></ul>`,
      svg: THCS.svg.plane({ x: [-2, 4], y: [-2, 4], u: 30, lines: [{ a: -1, b: 2, label: 'x + y = 2', color: THCS.svg.C.blue, at: 0.95, dx: -96, dy: 12 }, { a: -1, b: 2.5, label: '2x + 2y = 5', color: THCS.svg.C.orange, at: 0.62 }] }), caption: 'Hai đường thẳng song song: hệ vô nghiệm.' }
  ],
  summary: 'Thế: rút một ẩn rồi thế vào phương trình kia. Cộng đại số: làm cho hệ số một ẩn bằng/đối nhau rồi trừ/cộng. Gặp 0x = c: c ≠ 0 → vô nghiệm; c = 0 → vô số nghiệm.',
  examples: [
    { title: 'Giải bằng phương pháp thế', problem: 'Giải hệ <span class="sys"><span>y = 2x − 3</span><span>3x + y = 7</span></span>', solution: 'Thế y = 2x − 3 vào phương trình thứ hai: 3x + 2x − 3 = 7 ⇒ 5x = 10 ⇒ x = 2 ⇒ y = 1.<br>Vậy hệ có nghiệm duy nhất (2; 1).' },
    { title: 'Giải bằng phương pháp cộng đại số', problem: 'Giải hệ <span class="sys"><span>2x + 3y = 13</span><span>2x − y = 1</span></span>', solution: 'Hệ số của x bằng nhau, trừ từng vế: 4y = 12 ⇒ y = 3.<br>Thay vào 2x − y = 1: 2x = 4 ⇒ x = 2. Nghiệm (2; 3).<br>Kiểm tra: 4 + 9 = 13 ✔; 4 − 3 = 1 ✔.' },
    { title: 'Nhận biết hệ vô nghiệm', problem: 'Giải hệ <span class="sys"><span>x − 2y = 3</span><span>−2x + 4y = 1</span></span>', solution: 'Nhân phương trình thứ nhất với 2: 2x − 4y = 6. Cộng với phương trình thứ hai: 0x + 0y = 7 (vô lí).<br>Vậy hệ <b>vô nghiệm</b>.' }
  ],
  exercises: [
    { question: 'Giải hệ bằng phương pháp thế: <span class="sys"><span>x + y = 10</span><span>x − y = 4</span></span>', hints: ['Từ phương trình thứ hai: x = y + 4.', 'Thế vào phương trình thứ nhất: (y + 4) + y = 10.'], solution: '2y + 4 = 10 ⇒ y = 3 ⇒ x = 7. Nghiệm (7; 3).' },
    { question: 'Giải hệ bằng phương pháp cộng đại số: <span class="sys"><span>3x − 2y = 4</span><span>x + 2y = 4</span></span>', hints: ['Hệ số của y là −2 và 2 (đối nhau) nên cộng từng vế.', 'Cộng được 4x = 8.'], solution: '4x = 8 ⇒ x = 2. Thay vào x + 2y = 4: 2y = 2 ⇒ y = 1. Nghiệm (2; 1).' },
    { question: 'Giải hệ <span class="sys"><span>2x + y = 5</span><span>3x + 2y = 8</span></span>', hints: ['Nhân phương trình thứ nhất với 2: 4x + 2y = 10.', 'Trừ từng vế cho phương trình thứ hai: (4x + 2y) − (3x + 2y) = 10 − 8.'], solution: 'x = 2. Thay vào 2x + y = 5: y = 1. Nghiệm (2; 1). Kiểm tra: 6 + 2 = 8 ✔.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Nghiệm của hệ <span class="sys"><span>x + y = 7</span><span>x − y = 1</span></span> là:', options: ['(3; 4)', '(4; 3)', '(5; 2)', '(6; 1)'], answer: 1, explain: 'Cộng từng vế: 2x = 8 ⇒ x = 4; y = 3.' },
    { type: 'short', calc: '(7 - 1) / 3', q: 'Giải hệ <span class="sys"><span>y = x + 1</span><span>2x + y = 7</span></span> và cho biết giá trị của x.', answer: '2', explain: 'Thế: 2x + x + 1 = 7 ⇒ 3x = 6 ⇒ x = 2 (y = 3).' },
    { type: 'mcq', q: 'Để khử ẩn y trong hệ <span class="sys"><span>x + 3y = 5</span><span>2x − 3y = 1</span></span>, ta nên:', options: ['cộng từng vế hai phương trình', 'trừ từng vế hai phương trình', 'nhân phương trình thứ nhất với 2', 'nhân phương trình thứ hai với 3'], answer: 0, explain: 'Hệ số của y là 3 và −3 (đối nhau) nên cộng từng vế sẽ khử được y.' },
    { type: 'short', calc: '(8 - 2) / 3', q: 'Tìm y trong nghiệm của hệ <span class="sys"><span>x + 2y = 8</span><span>x − y = 2</span></span>', answer: '2', explain: 'Trừ từng vế: 3y = 6 ⇒ y = 2 (x = 4).' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hệ <span class="sys"><span>x + y = 1</span><span>x + y = 3</span></span> vô nghiệm.', answer: true, explain: 'Trừ từng vế được 0 = −2 (vô lí), nên hệ vô nghiệm.' },
    { type: 'mcq', q: 'Hệ <span class="sys"><span>x − y = 2</span><span>2x − 2y = 4</span></span> có:', options: ['nghiệm duy nhất', 'vô nghiệm', 'vô số nghiệm', 'đúng hai nghiệm'], answer: 2, explain: 'Phương trình thứ hai chính là phương trình thứ nhất nhân với 2, nên hệ có vô số nghiệm.' },
    { type: 'short', calc: '(9 + 3) / 3', q: 'Giải hệ <span class="sys"><span>2x + y = 9</span><span>x − y = 3</span></span> và cho biết giá trị của x.', answer: '4', explain: 'Cộng từng vế: 3x = 12 ⇒ x = 4 (y = 1).' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hệ <span class="sys"><span>3x + 2y = 12</span><span>x − 2y = 4</span></span> có nghiệm (4; 0).', answer: true, explain: '3 · 4 + 0 = 12 ✔; 4 − 0 = 4 ✔.' }
  ]
});
