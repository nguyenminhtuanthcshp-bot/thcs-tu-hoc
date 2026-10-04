/* Toán 8 – Bài 36. Các trường hợp đồng dạng của hai tam giác vuông. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  var P = { A: [40, 190], B: [40, 50], C: [220, 190], D: [260, 190], E: [260, 120], F: [350, 190] };
  THCS.registerLesson('toan-8/bai-36', {
    objectives: [
      'Nhận biết được các trường hợp đồng dạng của hai tam giác vuông: một góc nhọn bằng nhau; hai cạnh góc vuông tỉ lệ; cạnh huyền và cạnh góc vuông tỉ lệ.',
      'Chứng minh được hai tam giác vuông đồng dạng.',
      'Vận dụng tam giác vuông đồng dạng để tính độ dài, đo gián tiếp chiều cao, khoảng cách.'
    ],
    intro: 'Hai tam giác vuông đã có sẵn một cặp góc bằng nhau (góc vuông), nên việc nhận biết chúng đồng dạng đơn giản hơn tam giác thường.',
    steps: [
      { title: 'Áp dụng trường hợp của tam giác thường', html: `<p>Hai tam giác vuông đồng dạng nếu:</p><ul><li>có một góc nhọn bằng nhau (suy từ g.g);</li><li>có hai cạnh góc vuông tỉ lệ (suy từ c.g.c, góc xen giữa là góc vuông).</li></ul>`,
        svg: S.geo({ w: 380, h: 220, P: P, seg: ['AB', 'AC', 'BC', 'DE', 'DF', 'EF'], right: ['BAC', 'EDF'], arcs: [['ACB', 1, '', C.green, 22], ['DFE', 1, '', C.green, 16]], fill: [['ABC', C.blueL], ['DEF', C.orangeL]], off: { D: [-12, 14], A: [-12, 14] } }), caption: '∠C = ∠F ⇒ ΔABC ∽ ΔDEF.' },
      { title: 'Trường hợp riêng: cạnh huyền – cạnh góc vuông', html: `<div class="box key">Nếu cạnh huyền và một cạnh góc vuông của tam giác vuông này tỉ lệ với cạnh huyền và một cạnh góc vuông của tam giác vuông kia thì hai tam giác vuông đó đồng dạng.</div>
        <p>ΔABC vuông tại A, ΔDEF vuông tại D, {{EF|BC}} = {{DE|AB}} ⇒ ΔDEF ∽ ΔABC.</p><p>Lí do: theo Pythagore, cạnh góc vuông thứ ba cũng tỉ lệ cùng tỉ số.</p>` },
      { title: 'Tỉ số đường cao và diện tích', html: `<p>Nếu ΔA'B'C' ∽ ΔABC với tỉ số k thì:</p><ul><li>tỉ số hai đường cao tương ứng bằng k;</li><li>tỉ số diện tích bằng k<sup>2</sup>.</li></ul>` },
      { title: 'Đo gián tiếp', html: `<p>Nhờ bóng nắng hoặc gương phẳng, ta tạo ra hai tam giác vuông có một góc nhọn bằng nhau để tính chiều cao của vật khó đo trực tiếp.</p>` }
    ],
    summary: 'Tam giác vuông đồng dạng khi: một góc nhọn bằng nhau; hoặc hai cạnh góc vuông tỉ lệ; hoặc cạnh huyền và một cạnh góc vuông tỉ lệ. Tỉ số diện tích bằng bình phương tỉ số đồng dạng.',
    examples: [
      { title: 'Góc nhọn', problem: 'ΔABC vuông tại A có ∠B = 40°, ΔDEF vuông tại D có ∠F = 50°. Hai tam giác có đồng dạng không?', solution: '∠C = 90° − 40° = 50° = ∠F ⇒ ΔABC ∽ ΔDEF.' },
      { title: 'Cạnh huyền – cạnh góc vuông', problem: 'ΔABC vuông tại A: BC = 10, AB = 6. ΔMNP vuông tại M: NP = 5, MN = 3. Chứng minh đồng dạng và tính MP.', solution: '{{NP|BC}} = {{MN|AB}} = {{1|2}} ⇒ ΔMNP ∽ ΔABC. AC = √(100 − 36) = 8 ⇒ MP = 4.' },
      { title: 'Tỉ số diện tích', problem: 'ΔA\'B\'C\' ∽ ΔABC theo tỉ số 3, diện tích ΔABC bằng 5 cm². Tính diện tích ΔA\'B\'C\'.', solution: 'S\' = 3² · 5 = 45 cm².' }
    ],
    exercises: [
      { question: 'Một người đặt gương nằm trên mặt đất, lùi lại đến khi thấy đỉnh cây trong gương. Mắt cao 1,5 m, người cách gương 2 m, gương cách gốc cây 10 m. Tính chiều cao cây.', hints: ['Góc tới bằng góc phản xạ ⇒ hai tam giác vuông có góc nhọn bằng nhau.', '{{h|1,5}} = {{10|2}}.'], solution: 'h = 7,5 m.' },
      { question: 'ΔABC vuông tại A, ΔDEF vuông tại D có AB = 4, AC = 6, DE = 6, DF = 9. Hai tam giác có đồng dạng không? Tỉ số?', hints: ['So sánh {{DE|AB}} và {{DF|AC}}.', 'Cả hai bằng {{3|2}}.'], solution: 'Đồng dạng (hai cạnh góc vuông tỉ lệ), ΔDEF ∽ ΔABC theo tỉ số {{3|2}}.' },
      { question: 'Hai tam giác vuông đồng dạng có tỉ số diện tích là 16. Tỉ số đồng dạng là bao nhiêu?', hints: ['k² = 16.', 'k > 0.'], solution: 'k = 4.' }
    ],
    quiz: [
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hai tam giác vuông có một góc nhọn bằng nhau thì đồng dạng.', answer: true, explain: 'Thêm góc vuông ⇒ g.g.' },
      { type: 'short', calc: '1.5 * 10 / 2', q: 'Mắt cao 1,5 m, người cách gương 2 m, gương cách gốc cây 10 m. Cây cao bao nhiêu mét?', unit: 'm', answer: '7.5', explain: '{{h|1,5}} = {{10|2}}.' },
      { type: 'short', calc: 'sqrt(100 - 36) / 2', q: 'ΔABC vuông tại A: BC = 10, AB = 6. ΔMNP vuông tại M: NP = 5, MN = 3. Tính MP.', answer: '4', explain: 'AC = 8, tỉ số {{1|2}}.' },
      { type: 'short', calc: '3 * 3 * 5', q: 'ΔA\'B\'C\' ∽ ΔABC theo tỉ số 3, S<sub>ABC</sub> = 5 cm². Tính S<sub>A\'B\'C\'</sub>.', unit: 'cm²', answer: '45', explain: 'k² · S.' },
      { type: 'mcq', q: 'ΔABC vuông tại A có ∠B = 35°. Tam giác vuông nào đồng dạng với nó?', options: ['ΔDEF vuông tại D, ∠E = 45°', 'ΔMNP vuông tại M, ∠P = 55°', 'ΔXYZ vuông tại X, ∠Y = 60°', 'ΔHIK vuông tại H, ∠K = 45°'], answer: 1, explain: '∠C = 55° = ∠P.' },
      { type: 'short', calc: 'sqrt(16)', q: 'Tỉ số diện tích hai tam giác đồng dạng là 16. Tỉ số đồng dạng?', answer: '4', explain: 'k² = 16.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hai tam giác vuông có cạnh huyền tỉ lệ thì luôn đồng dạng.', answer: false, explain: 'Cần thêm một cặp cạnh góc vuông tỉ lệ hoặc góc nhọn bằng nhau.' },
      { type: 'short', requireSimplest: true, calc: '6 / 4', q: 'ΔABC vuông tại A (AB = 4, AC = 6), ΔDEF vuông tại D (DE = 6, DF = 9). Tỉ số đồng dạng của ΔDEF so với ΔABC? (Dạng a/b tối giản.)', answer: ['3/2'], answerText: '3/2', explain: '{{6|4}} = {{3|2}}.' }
    ]
  });
})();
