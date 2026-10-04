/* Toán 8 – Bài 29. Hệ số góc của đường thẳng. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-8/bai-29', {
    objectives: [
      'Nhận biết được khái niệm hệ số góc của đường thẳng y = ax + b (a ≠ 0).',
      'Nhận biết được góc tạo bởi đường thẳng với trục Ox và mối liên hệ với dấu của hệ số góc.',
      'Sử dụng hệ số góc để nhận biết và giải thích được sự cắt nhau, song song, trùng nhau của hai đường thẳng.'
    ],
    intro: 'Con dốc càng “dựng đứng” thì càng khó leo. Trong mặt phẳng toạ độ, độ dốc của một đường thẳng được đo bằng một con số: hệ số góc.',
    steps: [
      { title: 'Hệ số góc', html: `<p>Với đường thẳng y = ax + b (a ≠ 0), số <b>a</b> gọi là <b>hệ số góc</b> của đường thẳng.</p>
        <p>Góc tạo bởi đường thẳng và trục Ox là góc α tạo bởi tia Ox và tia AT (A là giao điểm của đường thẳng với Ox, T là điểm thuộc đường thẳng nằm phía trên Ox).</p>
        <ul><li>a &gt; 0: α là góc nhọn; a càng lớn thì α càng lớn (đường càng dốc).</li><li>a &lt; 0: α là góc tù.</li></ul>`,
        svg: S.plane({ x: [-3, 4], y: [-2, 5], u: 32, lines: [{ a: 0.5, b: 1, label: 'y = 0,5x + 1', color: C.green, at: 0.9 }, { a: 1, b: 1, label: 'y = x + 1', color: C.blue, at: 0.8 }, { a: 3, b: 1, label: 'y = 3x + 1', color: C.red, at: 0.95 }] }), caption: 'Cùng cắt trục tung tại (0; 1); hệ số góc càng lớn, đường càng dốc.' },
      { title: 'Hệ số góc âm', html: `<p>Khi a &lt; 0, đường thẳng “đi xuống” từ trái sang phải: khi x tăng thì y giảm.</p>`,
        svg: S.plane({ x: [-3, 4], y: [-2, 5], u: 32, lines: [{ a: -1, b: 3, label: 'y = −x + 3', color: C.purple, at: 0.55 }, { a: 1, b: 1, label: 'y = x + 1', color: C.blue, at: 0.8 }] }), caption: 'y = −x + 3 tạo với Ox một góc tù.' },
      { title: 'Vị trí tương đối của hai đường thẳng', html: `<p>Cho d: y = ax + b và d': y = a'x + b' (a, a' ≠ 0):</p>
        <table class="tbl"><tr><th>Điều kiện</th><th>Vị trí</th></tr><tr><td>a ≠ a'</td><td>d cắt d'</td></tr><tr><td>a = a' và b ≠ b'</td><td>d // d'</td></tr><tr><td>a = a' và b = b'</td><td>d trùng d'</td></tr></table>
        <div class="box tip">Hai đường thẳng có hệ số góc khác nhau và cùng tung độ gốc b thì cắt nhau tại một điểm trên trục tung (0; b).</div>` },
      { title: 'Tìm giao điểm', html: `<p>Để tìm giao điểm của hai đường thẳng cắt nhau, giải phương trình ax + b = a'x + b' để tìm x, rồi thay vào một trong hai công thức để tìm y.</p>
        <p>Ví dụ: y = 2x − 1 và y = −x + 5: 2x − 1 = −x + 5 ⇔ x = 2, y = 3. Giao điểm (2; 3).</p>`,
        svg: S.plane({ x: [-2, 5], y: [-2, 5], u: 30, lines: [{ a: 2, b: -1, label: 'y = 2x − 1', color: C.blue, at: 0.45, dx: 10, dy: 4 }, { a: -1, b: 5, label: 'y = −x + 5', color: C.orange, at: 0.15 }], pts: [{ x: 2, y: 3, label: '(2; 3)', proj: true, color: C.red, dx: 10, dy: 4 }] }), caption: 'Hai đường thẳng cắt nhau tại (2; 3).' }
    ],
    summary: 'Hệ số góc a của y = ax + b quyết định độ dốc: a &gt; 0 góc nhọn, a &lt; 0 góc tù. a ≠ a′: cắt nhau; a = a′, b ≠ b′: song song; a = a′, b = b′: trùng nhau.',
    examples: [
      { title: 'Xác định vị trí', problem: 'Xét vị trí tương đối của d<sub>1</sub>: y = 3x − 2, d<sub>2</sub>: y = 3x + 1, d<sub>3</sub>: y = −2x + 1.', solution: 'd<sub>1</sub> // d<sub>2</sub> (a bằng nhau, b khác nhau). d<sub>1</sub> cắt d<sub>3</sub>; d<sub>2</sub> cắt d<sub>3</sub> tại (0; 1) trên trục tung.' },
      { title: 'Tìm m để song song', problem: 'Tìm m để đường thẳng y = (m − 1)x + 4 song song với y = 2x − 3.', solution: 'Cần m − 1 = 2 và 4 ≠ −3 ⇒ m = 3.' },
      { title: 'Viết phương trình đường thẳng', problem: 'Viết phương trình đường thẳng có hệ số góc −2 và đi qua điểm A(1; 3).', solution: 'y = −2x + b; thay A: 3 = −2 + b ⇒ b = 5. Vậy y = −2x + 5.' }
    ],
    exercises: [
      { question: 'Tìm hệ số góc của đường thẳng y = 4 − {{1|2}}x. Góc tạo với Ox là nhọn hay tù?', hints: ['Viết lại y = −{{1|2}}x + 4.', 'a &lt; 0.'], solution: 'a = −{{1|2}}; góc tù.' },
      { question: 'Tìm giao điểm của y = x + 2 và y = −2x + 5.', hints: ['x + 2 = −2x + 5.', '3x = 3.'], solution: '(1; 3).' },
      { question: 'Tìm m để y = (2m + 1)x − 1 cắt y = 3x + 2.', hints: ['Cần hai hệ số góc khác nhau.', '2m + 1 ≠ 3; ngoài ra 2m + 1 ≠ 0 để là hàm bậc nhất.'], solution: 'm ≠ 1 và m ≠ −{{1|2}}.' }
    ],
    quiz: [
      { type: 'short', calc: '-2', q: 'Hệ số góc của đường thẳng y = −2x + 7 là bao nhiêu?', answer: '-2', answerText: '−2', explain: 'a = −2.' },
      { type: 'mcq', q: 'Đường thẳng nào song song với y = 3x − 2?', options: ['y = −3x − 2', 'y = 3x + 5', 'y = 2x + 3', 'y = 3x − 2'], answer: 1, explain: 'Cùng a = 3, khác b.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Đường thẳng y = −x + 3 tạo với trục Ox một góc nhọn.', answer: false, explain: 'a = −1 &lt; 0 nên góc tù.' },
      { type: 'short', calc: '2 + 1', q: 'Tìm m để y = (m − 1)x + 4 song song với y = 2x − 3.', answer: '3', explain: 'm − 1 = 2.' },
      { type: 'short', calc: '(5 + 1) / 3', q: 'Hoành độ giao điểm của y = 2x − 1 và y = −x + 5 là bao nhiêu?', answer: '2', explain: '3x = 6.' },
      { type: 'mcq', q: 'Trong các đường thẳng sau, đường nào dốc nhất?', options: ['y = 0,5x + 1', 'y = x + 1', 'y = 3x + 1', 'y = 2x + 1'], answer: 2, explain: 'Hệ số góc dương lớn nhất.' },
      { type: 'short', calc: '3 + 2', q: 'Đường thẳng có hệ số góc −2 đi qua A(1; 3) có dạng y = −2x + b. Tìm b.', answer: '5', explain: '3 = −2 + b.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hai đường thẳng y = 2x + 1 và y = −x + 1 cắt nhau tại điểm (0; 1).', answer: true, explain: 'Hệ số góc khác nhau và cùng b = 1.' }
    ]
  });
})();
