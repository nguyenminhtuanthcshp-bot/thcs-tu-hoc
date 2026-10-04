/* Toán 9 – Bài 10. Căn bậc ba và căn thức bậc ba. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-9/bai-10', {
    objectives: [
      'Nhận biết được khái niệm căn bậc ba của một số thực.',
      'Tính được giá trị (đúng hoặc gần đúng) căn bậc ba của một số bằng máy tính cầm tay.',
      'Nhận biết được căn thức bậc ba và vận dụng tính chất ∛(a<sup>3</sup>) = a, (∛a)<sup>3</sup> = a.'
    ],
    intro: 'Một chiếc hộp hình lập phương có thể tích 27 dm³ thì mỗi cạnh dài bao nhiêu? Ta cần số mà lập phương của nó bằng 27 – đó là căn bậc ba.',
    steps: [
      { title: 'Căn bậc ba', html: `<div class="box key">Căn bậc ba của số a là số x sao cho x<sup>3</sup> = a. Kí hiệu ∛a.</div><p>Mỗi số thực (kể cả số âm) có <b>đúng một</b> căn bậc ba. Ví dụ: ∛8 = 2; ∛(−27) = −3; ∛0 = 0.</p>` },
      { title: 'Ý nghĩa hình học', html: `<p>Lập phương có thể tích V thì cạnh a = ∛V.</p>`,
        svg: S.solid({ kind: 'lapphuong', a: 110, dims: { a: 'a = ∛V' } }), caption: 'V = 27 dm³ ⇒ a = ∛27 = 3 dm.' },
      { title: 'Tính bằng máy tính', html: `<p>Dùng phím ∛: ∛2 ≈ 1,260; ∛100 ≈ 4,642; ∛(−10) ≈ −2,154.</p>` },
      { title: 'Tính chất', html: `<ul><li>∛(a<sup>3</sup>) = a và (∛a)<sup>3</sup> = a với mọi a.</li><li>a &lt; b ⇔ ∛a &lt; ∛b.</li></ul><p>Ví dụ: ∛((−5)<sup>3</sup>) = −5 (khác với căn bậc hai: √((−5)<sup>2</sup>) = 5).</p>` },
      { title: 'Căn thức bậc ba', html: `<p>Với A là biểu thức, ∛A gọi là <b>căn thức bậc ba</b>; ∛A xác định với <b>mọi</b> giá trị làm A xác định.</p><p>Ví dụ: ∛(x<sup>3</sup> − 3x<sup>2</sup> + 3x − 1) = ∛((x − 1)<sup>3</sup>) = x − 1.</p>` }
    ],
    summary: '∛a là số x với x³ = a; mọi số thực có đúng một căn bậc ba. ∛(a³) = a. Lập phương thể tích V có cạnh ∛V.',
    examples: [
      { title: 'Tính căn bậc ba', problem: 'Tính ∛125, ∛(−64), ∛0,001.', solution: '5; −4; 0,1.' },
      { title: 'Lập phương', problem: 'Một bể nước hình lập phương chứa được 8 000 lít. Tính cạnh bể.', solution: '8 000 lít = 8 m³ ⇒ cạnh ∛8 = 2 m.' },
      { title: 'Rút gọn', problem: 'Tính ∛54 : ∛2 + ∛(−8).', solution: '∛27 + (−2) = 3 − 2 = 1.' }
    ],
    exercises: [
      { question: 'Tính ∛(−0,125) + ∛216.', hints: ['(−0,5)<sup>3</sup> = −0,125.', '6<sup>3</sup> = 216.'], solution: '5,5.' },
      { question: 'So sánh 2∛3 và ∛23.', hints: ['2∛3 = ∛(8 · 3) = ∛24.', '24 &gt; 23.'], solution: '2∛3 &gt; ∛23.' },
      { question: 'Tìm x biết ∛(2x − 1) = 3.', hints: ['Lập phương hai vế: 2x − 1 = 27.', '2x = 28.'], solution: 'x = 14.' }
    ],
    quiz: [
      { type: 'short', calc: 'Math.cbrt(-64)', q: 'Tính ∛(−64).', answer: '-4', answerText: '−4', explain: '(−4)³ = −64.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Số âm không có căn bậc ba.', answer: false, explain: 'Mọi số thực có đúng một căn bậc ba.' },
      { type: 'short', calc: 'Math.cbrt(8000 / 1000)', q: 'Bể lập phương chứa 8 000 lít. Cạnh bể bao nhiêu mét?', unit: 'm', answer: '2', explain: '8 m³.' },
      { type: 'short', calc: 'Math.cbrt(54 / 2) + Math.cbrt(-8)', q: 'Tính ∛54 : ∛2 + ∛(−8).', answer: '1', explain: '3 − 2.' },
      { type: 'short', calc: '(27 + 1) / 2', q: 'Tìm x biết ∛(2x − 1) = 3.', answer: '14', explain: '2x − 1 = 27.' },
      { type: 'mcq', q: 'So sánh 2∛3 và ∛23:', options: ['2∛3 &lt; ∛23', '2∛3 = ∛23', '2∛3 &gt; ∛23', 'Không so sánh được'], answer: 2, explain: '∛24 &gt; ∛23.' },
      { type: 'short', calc: 'round(Math.cbrt(100), 2)', q: 'Tính ∛100 (làm tròn đến hàng phần trăm).', answer: '4.64', explain: '≈ 4,642.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: ∛((−5)<sup>3</sup>) = −5.', answer: true, explain: '∛(a³) = a.' }
    ]
  });
})();
