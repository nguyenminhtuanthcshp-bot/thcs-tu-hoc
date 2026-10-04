/* Toán 9 – Bài 7. Căn bậc hai và căn thức bậc hai. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-9/bai-7', {
    objectives: [
      'Nhận biết được khái niệm căn bậc hai của số thực không âm, căn bậc hai số học.',
      'Tính được giá trị (đúng hoặc gần đúng) căn bậc hai của một số bằng máy tính cầm tay.',
      'Nhận biết được căn thức bậc hai, điều kiện xác định của √A, và vận dụng hằng đẳng thức √(A<sup>2</sup>) = |A|.'
    ],
    intro: 'Một mảnh đất hình vuông có diện tích 49 m² thì cạnh dài 7 m. Còn nếu diện tích là 2 m²? Cạnh khi đó là √2 m – một căn bậc hai.',
    steps: [
      { title: 'Căn bậc hai', html: `<p>Căn bậc hai của số a không âm là số x sao cho x<sup>2</sup> = a.</p><ul><li>Số dương a có đúng hai căn bậc hai đối nhau: √a và −√a.</li><li>Số 0 có một căn bậc hai là 0.</li><li>Số âm không có căn bậc hai.</li></ul><p>√a (a ≥ 0) gọi là <b>căn bậc hai số học</b> của a.</p>` },
      { title: 'Ý nghĩa hình học', html: `<p>Ghép 4 ô vuông cạnh 1 thành hình vuông lớn. Nối trung điểm các cạnh được hình vuông ABCD gồm 4 nửa ô vuông, nên có diện tích 2 và cạnh AB = √2.</p>`,
        svg: S.geo({ w: 280, h: 260, P: { A: [140, 30], B: [240, 130], C: [140, 230], D: [40, 130], M: [40, 30], N: [240, 30], P: [240, 230], Q: [40, 230], O: [140, 130] }, hide: ['M', 'N', 'P', 'Q'], seg: ['AB', 'BC', 'CD', 'DA'], dash: ['MN', 'NP', 'PQ', 'QM', 'AC', 'BD'], fill: [['ABCD', C.blueL]], text: [[204, 72, '√2', C.red], [90, 52, '1', C.muted], [26, 84, '1', C.muted]], off: { O: [12, 18] } }), caption: 'Hình vuông ABCD có diện tích 2 nên cạnh AB = √2.' },
      { title: 'Tính bằng máy tính', html: `<p>Nhấn phím √ rồi nhập số: √2 ≈ 1,414; √3 ≈ 1,732; √10 ≈ 3,162.</p><div class="box tip">Với số chính phương như 144, √144 = 12 (vì 12<sup>2</sup> = 144).</div>` },
      { title: 'Căn thức bậc hai', html: `<p>Với A là một biểu thức đại số, √A gọi là <b>căn thức bậc hai</b>, A là biểu thức lấy căn.</p><div class="box key">√A xác định ⇔ A ≥ 0.</div><p>Ví dụ: √(2x − 6) xác định khi 2x − 6 ≥ 0 ⇔ x ≥ 3.</p>` },
      { title: 'Hằng đẳng thức √(A<sup>2</sup>) = |A|', html: `<p>√(A<sup>2</sup>) = A nếu A ≥ 0; = −A nếu A &lt; 0.</p><p>Ví dụ: √((−7)<sup>2</sup>) = 7; √((x − 3)<sup>2</sup>) = x − 3 khi x ≥ 3.</p>` }
    ],
    summary: 'x là căn bậc hai của a ⇔ x² = a. √a ≥ 0 là căn bậc hai số học. √A xác định ⇔ A ≥ 0. √(A²) = |A|.',
    examples: [
      { title: 'Tìm căn bậc hai', problem: 'Tìm các căn bậc hai của 81 và của {{9|25}}.', solution: '81: ±9. {{9|25}}: ±{{3|5}}.' },
      { title: 'Điều kiện xác định', problem: 'Tìm x để √(5 − x) xác định.', solution: '5 − x ≥ 0 ⇔ x ≤ 5.' },
      { title: 'Hằng đẳng thức', problem: 'Rút gọn √((2 − √5)<sup>2</sup>).', solution: '= |2 − √5| = √5 − 2 (vì √5 &gt; 2).' }
    ],
    exercises: [
      { question: 'Tính √0,49 + √(1,44).', hints: ['√0,49 = 0,7.', '√1,44 = 1,2.'], solution: '1,9.' },
      { question: 'Một hình vuông có diện tích 50 cm². Tính cạnh (làm tròn đến hàng phần mười).', hints: ['Cạnh = √50.', '√50 ≈ 7,07.'], solution: '≈ 7,1 cm.' },
      { question: 'Rút gọn √((x − 4)<sup>2</sup>) với x &lt; 4.', hints: ['= |x − 4|.', 'x − 4 &lt; 0.'], solution: '= 4 − x.' }
    ],
    quiz: [
      { type: 'mcq', q: 'Các căn bậc hai của 64 là:', options: ['8', '−8', '8 và −8', '32 và −32'], answer: 2, explain: '8² = (−8)² = 64.' },
      { type: 'short', calc: 'sqrt(0.49) + sqrt(1.44)', q: 'Tính √0,49 + √1,44.', answer: '1.9', explain: '0,7 + 1,2.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Số −9 có căn bậc hai là −3.', answer: false, explain: 'Số âm không có căn bậc hai.' },
      { type: 'short', calc: '6 / 2', q: '√(2x − 6) xác định khi x ≥ a. Tìm a.', answer: '3', explain: '2x − 6 ≥ 0.' },
      { type: 'short', calc: 'sqrt(7 * 7)', q: 'Tính √((−7)<sup>2</sup>).', answer: '7', explain: '|−7| = 7.' },
      { type: 'short', calc: 'round(sqrt(50), 1)', q: 'Hình vuông diện tích 50 cm² có cạnh bao nhiêu cm (làm tròn đến hàng phần mười)?', unit: 'cm', answer: '7.1', explain: '√50 ≈ 7,07.' },
      { type: 'mcq', q: 'Với x &lt; 4, √((x − 4)<sup>2</sup>) bằng:', options: ['x − 4', '4 − x', '(x − 4)<sup>2</sup>', '|x| − 4'], answer: 1, explain: '|x − 4| = 4 − x.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: √144 = 12.', answer: true, explain: '12² = 144.' }
    ]
  });
})();
