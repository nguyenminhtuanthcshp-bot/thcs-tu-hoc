/* Toán 7 – Bài 12. Tổng các góc trong một tam giác. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, C = S.C;
THCS.registerLesson('toan-7/bai-12', {
  objectives: [
    'Chứng minh và vận dụng định lí tổng ba góc trong một tam giác bằng 180°.',
    'Nhận biết tam giác nhọn, tam giác vuông, tam giác tù; biết hai góc nhọn của tam giác vuông phụ nhau.',
    'Hiểu góc ngoài của tam giác và tính chất góc ngoài.'
  ],
  intro: 'Cắt ba góc của một tam giác giấy rồi ghép sát nhau – chúng luôn tạo thành một góc bẹt! Vì sao lại luôn như vậy, dù tam giác to hay nhỏ, méo hay đều?',
  steps: [
    { title: 'Định lí tổng ba góc', html: `<div class="box note">Tổng ba góc trong một tam giác bằng <b>180°</b>: ∠A + ∠B + ∠C = 180°.</div>
      <p><b>Chứng minh</b>: qua A kẻ đường thẳng xy // BC. Khi đó ∠xAB = ∠B, ∠yAC = ∠C (so le trong). Ba góc ∠xAB, ∠BAC, ∠CAy tạo thành góc bẹt nên ∠B + ∠A + ∠C = 180°.</p>`,
      svg: S.geo({ w: 380, h: 210, P: { A: [150, 50], B: [60, 180], C: [320, 180], x: [20, 50], y: [360, 50] }, seg: ['AB', 'BC', 'CA', { s: 'xy', dash: true, color: C.green }], arcs: [['A-B-C', 1, '', C.orange, 26], ['x-A-B', 1, '', C.orange, 26], ['B-C-A', 2, '', C.blue, 26], ['C-A-y', 2, '', C.blue, 26], ['B-A-C', 1, '', C.purple, 18]], off: { A: [0, -12], x: [0, -10], y: [0, -10] } }),
      caption: 'xy // BC: các góc cùng màu bằng nhau (so le trong), ba góc tại A tạo thành góc bẹt.' },
    { title: 'Phân loại tam giác theo góc', html: `<ul><li><b>Tam giác nhọn</b>: ba góc đều nhọn.</li><li><b>Tam giác vuông</b>: có một góc vuông. Cạnh đối diện góc vuông là cạnh huyền, hai cạnh kia là cạnh góc vuông.</li><li><b>Tam giác tù</b>: có một góc tù.</li></ul>
      <p>Trong tam giác vuông, hai góc nhọn <b>phụ nhau</b> (tổng 90°).</p>`,
      svg: S.row([{ svg: S.geo({ w: 170, h: 140, P: { A: [80, 20], B: [20, 120], C: [150, 120] }, seg: ['AB', 'BC', 'CA'] }), caption: 'Nhọn' }, { svg: S.geo({ w: 170, h: 140, P: { A: [30, 20], B: [30, 120], C: [150, 120] }, seg: ['AB', 'BC', 'CA'], right: ['ABC'] }), caption: 'Vuông tại B' }, { svg: S.geo({ w: 190, h: 140, P: { A: [50, 50], B: [20, 120], C: [162, 120] }, seg: ['AB', 'BC', 'CA'], arcs: [['B-A-C', 1, '', C.orange, 16]] }), caption: 'Tù tại A' }]) },
    { title: 'Góc ngoài của tam giác', html: `<p><b>Góc ngoài</b> của tam giác là góc kề bù với một góc của tam giác. Ví dụ ∠ACx (x trên tia đối của tia CB) là góc ngoài tại C.</p>
      <div class="box note">Mỗi góc ngoài bằng tổng hai góc trong không kề với nó: ∠ACx = ∠A + ∠B. Do đó góc ngoài lớn hơn mỗi góc trong không kề với nó.</div>`,
      svg: S.geo({ w: 380, h: 190, P: { A: [140, 40], B: [40, 160], C: [240, 160], x: [360, 160] }, seg: ['AB', 'BC', 'CA', { s: 'Cx', dash: true }], arcs: [['A-C-x', 1, '∠A + ∠B', C.green, 24], ['C-A-B', 1, '', C.orange, 22], ['A-B-C', 1, '', C.blue, 26]], off: { A: [0, -12], x: [0, 20] } }),
      caption: 'Góc ngoài tại C bằng tổng hai góc trong không kề với nó.' },
    { title: 'Tính góc chưa biết', html: `<ul><li>Biết hai góc: góc thứ ba = 180° − tổng hai góc đã biết.</li><li>Tam giác vuông: góc nhọn còn lại = 90° − góc nhọn đã biết.</li><li>Biết tỉ lệ các góc: đặt các góc theo số phần rồi dùng tổng 180°.</li></ul>` }
  ],
  summary: 'Tổng ba góc tam giác = 180°. Tam giác vuông: hai góc nhọn phụ nhau. Góc ngoài = tổng hai góc trong không kề, nên lớn hơn mỗi góc đó.',
  examples: [
    { title: 'Tính góc thứ ba', problem: 'Tam giác ABC có ∠A = 65°, ∠B = 48°. Tính ∠C.', solution: '∠C = 180° − 65° − 48° = 67°.' },
    { title: 'Tam giác vuông', problem: 'Tam giác MNP vuông tại M, ∠N = 37°. Tính ∠P.', solution: '∠N + ∠P = 90° ⇒ ∠P = 53°.' },
    { title: 'Góc theo tỉ lệ', problem: 'Các góc A, B, C của tam giác tỉ lệ với 1 : 2 : 3. Tính mỗi góc và cho biết tam giác thuộc loại nào.', solution: 'Tổng 6 phần = 180° ⇒ 1 phần = 30°. ∠A = 30°, ∠B = 60°, ∠C = 90°: tam giác vuông tại C.' }
  ],
  exercises: [
    { question: 'Tam giác ABC có ∠A = 90°, ∠B = 2∠C. Tính ∠B, ∠C.', hints: ['∠B + ∠C = 90°.', '3∠C = 90°.'], solution: '∠C = 30°, ∠B = 60°.' },
    { question: 'Tam giác ABC có ∠B = 50°, ∠C = 70°. Tính góc ngoài tại đỉnh A.', hints: ['Góc ngoài tại A = ∠B + ∠C.', 'Hoặc tính ∠A rồi lấy 180° − ∠A.'], solution: '50° + 70° = 120°.' },
    { question: 'Có tam giác nào có hai góc tù không? Giải thích.', hints: ['Giả sử có hai góc tù, mỗi góc &gt; 90°.', 'Tổng hai góc đó so với 180°?'], solution: 'Không. Hai góc tù có tổng lớn hơn 180°, trái với định lí tổng ba góc.' }
  ],
  quiz: [
    { type: 'short', calc: '180 - 65 - 48', q: 'Tam giác ABC có ∠A = 65°, ∠B = 48°. Tính ∠C (độ).', unit: 'độ', answer: '67', explain: '180° − 65° − 48° = 67°.' },
    { type: 'short', calc: '90 - 37', q: 'Tam giác MNP vuông tại M, ∠N = 37°. Tính ∠P (độ).', unit: 'độ', answer: '53', explain: 'Hai góc nhọn phụ nhau: 90° − 37°.' },
    { type: 'mcq', q: 'Tam giác có các góc 30°, 60°, 90° là:', options: ['tam giác nhọn', 'tam giác vuông', 'tam giác tù', 'tam giác đều'], answer: 1, explain: 'Có một góc vuông.' },
    { type: 'short', calc: '50 + 70', q: 'Tam giác ABC có ∠B = 50°, ∠C = 70°. Góc ngoài tại A bằng bao nhiêu độ?', unit: 'độ', answer: '120', explain: '∠B + ∠C = 120°.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Một tam giác có thể có hai góc vuông.', answer: false, explain: 'Hai góc vuông đã có tổng 180°, góc thứ ba bằng 0° – vô lí.' },
    { type: 'short', calc: '180 / 6 * 3', q: 'Ba góc của tam giác tỉ lệ với 1 : 2 : 3. Góc lớn nhất bằng bao nhiêu độ?', unit: 'độ', answer: '90', explain: '1 phần = 30°; góc lớn nhất 90°.' },
    { type: 'short', calc: '90 / 3 * 2', q: 'Tam giác ABC vuông tại A, ∠B = 2∠C. Tính ∠B (độ).', unit: 'độ', answer: '60', explain: '3∠C = 90° ⇒ ∠C = 30°, ∠B = 60°.' },
    { type: 'mcq', q: 'Góc ngoài của một tam giác:', options: ['nhỏ hơn góc trong kề với nó', 'bằng tổng hai góc trong không kề với nó', 'luôn là góc nhọn', 'bằng 180°'], answer: 1, explain: 'Tính chất góc ngoài.' }
  ]
});
})();
