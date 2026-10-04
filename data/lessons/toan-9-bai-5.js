/* Toán 9 – Bài 5. Bất đẳng thức và tính chất. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-9/bai-5', {
    objectives: [
      'Nhận biết được thứ tự trên tập số thực, bất đẳng thức và các kí hiệu &gt;, &lt;, ≥, ≤.',
      'Giải thích được tính chất bắc cầu, liên hệ giữa thứ tự với phép cộng và phép nhân.',
      'Vận dụng các tính chất để so sánh hai số, chứng minh bất đẳng thức đơn giản.'
    ],
    intro: 'Khi nói “tốc độ tối đa 60 km/h” hay “phải từ 18 tuổi trở lên”, ta đang dùng bất đẳng thức. Bài này nghiên cứu các quy tắc biến đổi bất đẳng thức.',
    steps: [
      { title: 'Bất đẳng thức', html: `<p>Hệ thức dạng a &gt; b (hoặc a &lt; b, a ≥ b, a ≤ b) gọi là <b>bất đẳng thức</b>; a là vế trái, b là vế phải.</p><p>Trên trục số, điểm biểu diễn số lớn hơn nằm bên phải.</p>`,
        svg: S.numberLine({ min: -3, max: 4, width: 420, marks: [{ v: -2, label: '−2', color: C.blue }, { v: 3, label: '3', color: C.red }] }), caption: '−2 &lt; 3: điểm −2 nằm bên trái điểm 3.' },
      { title: 'Tính chất bắc cầu', html: `<div class="box key">Nếu a &lt; b và b &lt; c thì a &lt; c.</div><p>Ví dụ: √2 &lt; 1,5 và 1,5 &lt; √3 ⇒ √2 &lt; √3.</p>` },
      { title: 'Liên hệ với phép cộng', html: `<div class="box key">a &lt; b ⇔ a + c &lt; b + c (với mọi số c).</div><p>Cộng cùng một số vào hai vế, bất đẳng thức <b>giữ nguyên chiều</b>.</p>` },
      { title: 'Liên hệ với phép nhân', html: `<div class="box key">Nếu a &lt; b và c &gt; 0 thì ac &lt; bc. Nếu a &lt; b và c &lt; 0 thì ac &gt; bc.</div><p>Nhân với số âm thì <b>đổi chiều</b> bất đẳng thức. Ví dụ: 2 &lt; 5 ⇒ −3 · 2 &gt; −3 · 5, tức −6 &gt; −15.</p>` },
      { title: 'Chứng minh bằng hiệu', html: `<p>Để chứng minh A ≥ B, ta xét hiệu A − B và chứng tỏ A − B ≥ 0.</p><p>Ví dụ: a<sup>2</sup> + 1 ≥ 2a vì a<sup>2</sup> + 1 − 2a = (a − 1)<sup>2</sup> ≥ 0.</p>` }
    ],
    summary: 'Bắc cầu: a &lt; b, b &lt; c ⇒ a &lt; c. Cộng cùng số: giữ chiều. Nhân số dương: giữ chiều; nhân số âm: đổi chiều. Chứng minh A ≥ B bằng cách xét A − B ≥ 0.',
    examples: [
      { title: 'So sánh', problem: 'Cho a &lt; b. So sánh 3a − 5 và 3b − 5.', solution: 'a &lt; b ⇒ 3a &lt; 3b (nhân 3 &gt; 0) ⇒ 3a − 5 &lt; 3b − 5 (cộng −5).' },
      { title: 'Nhân số âm', problem: 'Cho a &gt; b. So sánh −2a + 1 và −2b + 1.', solution: 'a &gt; b ⇒ −2a &lt; −2b ⇒ −2a + 1 &lt; −2b + 1.' },
      { title: 'Chứng minh', problem: 'Chứng minh (a + b)<sup>2</sup> ≥ 4ab với mọi a, b.', solution: '(a + b)<sup>2</sup> − 4ab = a<sup>2</sup> − 2ab + b<sup>2</sup> = (a − b)<sup>2</sup> ≥ 0. Dấu bằng khi a = b.' }
    ],
    exercises: [
      { question: 'Cho x &lt; y. So sánh 5 − 4x và 5 − 4y.', hints: ['Nhân hai vế với −4: đổi chiều.', 'Cộng 5 vào hai vế.'], solution: '5 − 4x &gt; 5 − 4y.' },
      { question: 'So sánh 2024 · 2026 và 2025<sup>2</sup> mà không tính trực tiếp.', hints: ['2024 · 2026 = (2025 − 1)(2025 + 1).', '= 2025<sup>2</sup> − 1.'], solution: '2024 · 2026 &lt; 2025<sup>2</sup>.' },
      { question: 'Chứng minh a<sup>2</sup> + 4 ≥ 4a với mọi a.', hints: ['Xét hiệu a<sup>2</sup> + 4 − 4a.', '= (a − 2)<sup>2</sup>.'], solution: '(a − 2)<sup>2</sup> ≥ 0 nên bất đẳng thức đúng; dấu bằng khi a = 2.' }
    ],
    quiz: [
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nếu a &lt; b thì −5a &lt; −5b.', answer: false, explain: 'Nhân số âm phải đổi chiều.' },
      { type: 'mcq', q: 'Cho a &gt; b. Khẳng định nào đúng?', options: ['a − 3 &lt; b − 3', '2a &lt; 2b', '−a &lt; −b', 'a + 1 &lt; b'], answer: 2, explain: 'Nhân −1: đổi chiều.' },
      { type: 'short', calc: '2025 * 2025 - 2024 * 2026', q: 'Tính hiệu 2025<sup>2</sup> − 2024 · 2026.', answer: '1', explain: '(2025 − 1)(2025 + 1) = 2025² − 1.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Với mọi a, ta có a<sup>2</sup> + 1 ≥ 2a.', answer: true, explain: '(a − 1)² ≥ 0.' },
      { type: 'mcq', q: 'Bất đẳng thức nào đúng với mọi số thực a?', options: ['a<sup>2</sup> &gt; 0', 'a<sup>2</sup> ≥ 0', '2a &gt; a', '−a &lt; 0'], answer: 1, explain: 'a = 0 thì a² = 0.' },
      { type: 'short', calc: '4 / 2', q: 'Dấu bằng trong a<sup>2</sup> + 4 ≥ 4a xảy ra khi a bằng bao nhiêu?', answer: '2', explain: '(a − 2)² = 0.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nếu a &lt; b và b &lt; c thì a &lt; c.', answer: true, explain: 'Tính chất bắc cầu.' },
      { type: 'mcq', q: 'Cho x &lt; y. So sánh 5 − 4x và 5 − 4y.', options: ['5 − 4x &lt; 5 − 4y', '5 − 4x &gt; 5 − 4y', '5 − 4x = 5 − 4y', 'Không so sánh được'], answer: 1, explain: 'Nhân −4 đổi chiều.' }
    ]
  });
})();
