/* Toán 8 – Bài 17. Tính chất đường phân giác của tam giác. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C, G = S.geom;
  var A = [130, 40], B = [40, 200], Cc = [340, 200], D = G.bisectFoot(A, B, Cc);
  THCS.registerLesson('toan-8/bai-17', {
    objectives: [
      'Giải thích được tính chất đường phân giác trong của tam giác.',
      'Lập được tỉ lệ thức từ tính chất đường phân giác và tính độ dài đoạn thẳng.',
      'Vận dụng tính chất đường phân giác trong các bài toán chứng minh, tính toán đơn giản.'
    ],
    intro: 'Tia phân giác của một góc trong tam giác chia cạnh đối diện thành hai đoạn không bằng nhau – nhưng tỉ lệ của chúng lại có quy luật rất đẹp.',
    steps: [
      { title: 'Định lí', html: `<div class="box key">Trong tam giác, đường phân giác của một góc chia cạnh đối diện thành hai đoạn thẳng tỉ lệ với hai cạnh kề hai đoạn ấy.</div>
        <p>ΔABC, AD là phân giác của ∠BAC (D ∈ BC) ⇒ {{DB|DC}} = {{AB|AC}}.</p>`,
        svg: S.geo({ w: 380, h: 230, P: { A: A, B: B, C: Cc, D: D }, seg: ['AB', 'BC', 'CA', { s: 'AD', color: C.blue, width: 2.5 }], arcs: [['BAD', 1, '', C.orange, 26], ['DAC', 1, '', C.orange, 30]], off: { D: [0, 20] } }), caption: 'AD là phân giác góc A: DB : DC = AB : AC.' },
      { title: 'Vì sao?', html: `<p>Qua B kẻ đường thẳng song song với AD cắt đường thẳng AC tại E. Khi đó ∠ABE = ∠BAD (so le trong) và ∠AEB = ∠DAC (đồng vị), mà ∠BAD = ∠DAC nên ΔABE cân tại A: AE = AB.</p>
        <p>Theo Thalès trong ΔCBE với AD // BE: {{DB|DC}} = {{AE|AC}} = {{AB|AC}}.</p>` },
      { title: 'Tính độ dài', html: `<p>Ví dụ: AB = 6, AC = 9, BC = 10. Tính DB, DC.</p>
        <p>{{DB|DC}} = {{6|9}} = {{2|3}} ⇒ DB = {{2|5}} · 10 = 4, DC = 6.</p>
        <div class="box tip">Mẹo: {{DB|AB}} = {{DC|AC}} = {{DB + DC|AB + AC}} = {{BC|AB + AC}} (tính chất dãy tỉ số bằng nhau).</div>` },
      { title: 'Phân giác ngoài (mở rộng)', html: `<p>Định lí vẫn đúng với phân giác của góc ngoài: nếu AE là phân giác góc ngoài tại A (E thuộc đường thẳng BC) thì {{EB|EC}} = {{AB|AC}} (với AB ≠ AC).</p>` }
    ],
    summary: 'AD phân giác trong của ∠A ⇒ {{DB|DC}} = {{AB|AC}}; dùng dãy tỉ số bằng nhau để tính DB, DC.',
    examples: [
      { title: 'Tính đoạn thẳng', problem: 'ΔABC có AB = 4 cm, AC = 6 cm, BC = 5 cm, AD là phân giác. Tính DB, DC.', solution: '{{DB|4}} = {{DC|6}} = {{5|10}} = {{1|2}} ⇒ DB = 2 cm, DC = 3 cm.' },
      { title: 'Tìm cạnh', problem: 'ΔABC có phân giác AD, DB = 3 cm, DC = 4,5 cm, AB = 6 cm. Tính AC.', solution: '{{DB|DC}} = {{AB|AC}} ⇒ {{3|4,5}} = {{6|AC}} ⇒ AC = 9 cm.' },
      { title: 'Tỉ số diện tích', problem: 'ΔABC có AB = 5, AC = 7, AD là phân giác. Tính tỉ số diện tích hai tam giác ABD và ACD.', solution: 'Hai tam giác có chung đường cao hạ từ A nên tỉ số diện tích bằng {{DB|DC}} = {{AB|AC}} = {{5|7}}.' }
    ],
    exercises: [
      { question: 'ΔMNP có MN = 8, MP = 12, NP = 15, MK là phân giác (K ∈ NP). Tính NK.', hints: ['{{NK|8}} = {{KP|12}} = {{15|20}}.', 'NK = 8 · {{3|4}}.'], solution: 'NK = 6, KP = 9.' },
      { question: 'Tam giác ABC cân tại A có phân giác AD. Tính {{DB|DC}}.', hints: ['{{DB|DC}} = {{AB|AC}}.', 'AB = AC.'], solution: '{{DB|DC}} = 1, D là trung điểm BC.' },
      { question: 'ΔABC vuông tại A có AB = 6, AC = 8, BC = 10. Phân giác BE (E ∈ AC). Tính AE.', hints: ['{{EA|EC}} = {{BA|BC}} = {{6|10}}.', '{{EA|6}} = {{EC|10}} = {{8|16}}.'], solution: 'AE = 3, EC = 5.' }
    ],
    quiz: [
      { type: 'mcq', q: 'AD là phân giác của ΔABC. Tỉ lệ thức đúng là:', options: ['{{DB|DC}} = {{AC|AB}}', '{{DB|DC}} = {{AB|AC}}', '{{DB|AB}} = {{AC|DC}}', '{{DB|DC}} = {{BC|AB}}'], answer: 1, explain: 'Định lí đường phân giác.' },
      { type: 'short', calc: '4 * 5 / (4 + 6)', q: 'ΔABC có AB = 4, AC = 6, BC = 5, AD là phân giác. Tính DB.', answer: '2', explain: '{{DB|4}} = {{5|10}}.' },
      { type: 'short', calc: '6 * 4.5 / 3', q: 'Phân giác AD có DB = 3, DC = 4,5, AB = 6. Tính AC.', answer: '9', explain: '{{3|4,5}} = {{6|AC}}.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Trong tam giác cân tại A, phân giác AD đi qua trung điểm BC.', answer: true, explain: '{{DB|DC}} = {{AB|AC}} = 1.' },
      { type: 'short', requireSimplest: true, calc: '5 / 7', q: 'ΔABC có AB = 5, AC = 7, AD là phân giác. Tỉ số diện tích ΔABD và ΔACD là bao nhiêu? (Dạng a/b tối giản.)', answer: ['5/7'], answerText: '5/7', explain: 'Chung đường cao nên bằng {{DB|DC}} = {{5|7}}.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Phân giác của một góc trong tam giác luôn chia cạnh đối diện thành hai phần bằng nhau.', answer: false, explain: 'Chỉ khi hai cạnh kề bằng nhau.' },
      { type: 'short', calc: '8 * 6 / (6 + 10)', q: 'ΔABC vuông tại A, AB = 6, AC = 8, BC = 10, phân giác BE (E ∈ AC). Tính AE.', answer: '3', explain: '{{EA|6}} = {{EC|10}} = {{8|16}}.' },
      { type: 'mcq', q: 'ΔABC có AB = 6, AC = 9, BC = 10, phân giác AD. DC bằng:', options: ['4', '5', '6', '7,5'], answer: 2, explain: '{{DC|9}} = {{10|15}} ⇒ DC = 6.' }
    ]
  });
})();
