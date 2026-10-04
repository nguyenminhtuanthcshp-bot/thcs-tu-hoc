/* Toán 7 – Bài 10. Tiên đề Euclid. Tính chất của hai đường thẳng song song. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, C = S.C;
THCS.registerLesson('toan-7/bai-10', {
  objectives: [
    'Phát biểu được tiên đề Euclid về đường thẳng song song.',
    'Nắm được tính chất: một đường thẳng cắt hai đường thẳng song song thì các góc so le trong bằng nhau, đồng vị bằng nhau, trong cùng phía bù nhau.',
    'Vận dụng tính chất để tính góc và giải thích quan hệ vuông góc, song song.'
  ],
  intro: 'Qua một điểm nằm ngoài một đường thẳng, em có thể vẽ được bao nhiêu đường thẳng song song với nó? Câu trả lời “chỉ một” được nhà toán học Euclid thừa nhận từ hơn 2 000 năm trước.',
  steps: [
    { title: 'Tiên đề Euclid', html: `<div class="box note">Qua một điểm ở ngoài một đường thẳng, <b>chỉ có một</b> đường thẳng song song với đường thẳng đó.</div>
      <p>Tiên đề là điều được thừa nhận là đúng mà không chứng minh. Hệ quả: nếu hai đường thẳng b, b' cùng đi qua M và cùng song song với a thì b trùng b'.</p>`,
      svg: S.geo({ w: 380, h: 190, P: { A: [40, 150], B: [340, 150], M: [190, 60], E: [40, 60], F: [340, 60], K: [40, 90], L: [340, 30] }, seg: ['AB', { s: 'EF', color: C.green, width: 2.5 }, { s: 'KL', color: C.muted, dash: true }], hide: ['A', 'B', 'E', 'F', 'K', 'L'], text: [[352, 154, 'a', C.blue, true, 15], [352, 64, 'b', C.green, true, 15], [352, 34, 'b\'', C.muted, true, 15]], off: { M: [0, -12] } }),
      caption: 'Đường thẳng b qua M song song với a là duy nhất; đường b\' qua M (khác b) chắc chắn cắt a.' },
    { title: 'Tính chất hai đường thẳng song song', html: `<p>Nếu một đường thẳng cắt <b>hai đường thẳng song song</b> thì:</p><ul><li>hai góc so le trong bằng nhau;</li><li>hai góc đồng vị bằng nhau;</li><li>hai góc trong cùng phía bù nhau (tổng 180°).</li></ul>
      <p>Đây là chiều <b>ngược lại</b> của dấu hiệu nhận biết ở Bài 9.</p>`,
      svg: S.transversal({ deg: 60, show: { A: [1, 3, 4], B: [1, 2] }, mark: [['A', 3, C.orange, '60°'], ['B', 1, C.orange, '60°'], ['A', 4, C.blue, '120°'], ['B', 2, C.blue, '120°']] }),
      caption: 'a // b: ∠A₃ = ∠B₁ = 60° (so le trong); ∠A₄ = ∠B₂ = 120°; ∠A₃ + ∠B₂ = 180° (trong cùng phía).' },
    { title: 'Quan hệ vuông góc và song song', html: `<ul><li>Nếu a // b và c ⊥ a thì c ⊥ b.</li><li>Nếu a ⊥ c và b ⊥ c thì a // b.</li><li>Hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì song song với nhau: a // c, b // c ⇒ a // b.</li></ul>` },
    { title: 'Cách dùng tính chất để tính góc', html: `<ol><li>Chỉ ra hai đường thẳng song song (giả thiết hoặc chứng minh).</li><li>Xác định cặp góc cần dùng (so le trong, đồng vị, trong cùng phía).</li><li>Suy ra số đo, kết hợp kề bù/đối đỉnh nếu cần.</li></ol>
      <p>Ví dụ: a // b, ∠A₁ = 70° ⇒ ∠B₁ = 70° (đồng vị) ⇒ ∠B₂ = 110° (kề bù).</p>` }
  ],
  summary: 'Qua điểm ngoài đường thẳng chỉ có một đường song song. a // b ⇒ so le trong bằng nhau, đồng vị bằng nhau, trong cùng phía bù nhau. c ⊥ a, a // b ⇒ c ⊥ b.',
  examples: [
    { title: 'Tính góc', problem: 'a // b, c cắt a, b tại A, B; ∠A₄ = 110°. Tính ∠B₂, ∠B₁.', solution: '∠B₂ = ∠A₄ = 110° (so le trong). ∠B₁ = 180° − 110° = 70° (kề bù).' },
    { title: 'Vuông góc', problem: 'a // b, đường thẳng c vuông góc với a tại A và cắt b tại B. Tính góc tạo bởi c và b.', solution: 'Vì a // b và c ⊥ a nên c ⊥ b: góc tạo bởi c và b bằng 90°.' },
    { title: 'Góc có đỉnh nằm giữa hai đường song song', problem: 'Cho Ax // By (hai tia cùng hướng sang phải), điểm O nằm giữa, ∠xAO = 40°, ∠yBO = 30°. Tính ∠AOB.', solution: 'Kẻ tia Oz // Ax (cũng // By). ∠AOz = ∠xAO = 40°, ∠zOB = ∠yBO = 30° (so le trong). ∠AOB = 40° + 30° = 70°.' }
  ],
  exercises: [
    { question: 'a // b; ∠A₁ = 3∠A₂. Tính ∠B₁.', hints: ['∠A₁ + ∠A₂ = 180° (kề bù).', '∠B₁ = ∠A₁ (đồng vị).'], solution: '4∠A₂ = 180° ⇒ ∠A₂ = 45°, ∠A₁ = 135° ⇒ ∠B₁ = 135°.' },
    { question: 'a // b, ∠A₃ = 2x + 10°, ∠B₁ = 70°. Tìm x.', hints: ['∠A₃ và ∠B₁ so le trong.', '2x + 10° = 70°.'], solution: 'x = 30°.' },
    { question: 'Giải thích: vì sao hai đường thẳng phân biệt cùng song song với đường thẳng c thì song song với nhau?', hints: ['Giả sử a và b cắt nhau tại M.', 'Khi đó qua M có hai đường thẳng song song với c – mâu thuẫn tiên đề Euclid.'], solution: 'Nếu a, b cắt nhau tại M thì qua M có hai đường thẳng khác nhau cùng song song với c, trái với tiên đề Euclid. Vậy a // b.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Qua một điểm ở ngoài đường thẳng a, có bao nhiêu đường thẳng song song với a?', options: ['0', '1', '2', 'vô số'], answer: 1, explain: 'Tiên đề Euclid: chỉ có một.' },
    { type: 'short', calc: '110', q: 'a // b, ∠A₄ = 110°. Tính ∠B₂ (so le trong với ∠A₄), đơn vị độ.', unit: 'độ', answer: '110', explain: 'Hai góc so le trong bằng nhau.' },
    { type: 'short', calc: '180 - 110', q: 'a // b, ∠A₃ = 110°. Tính ∠B₂ (trong cùng phía với ∠A₃), đơn vị độ.', unit: 'độ', answer: '70', explain: 'Hai góc trong cùng phía bù nhau: 180° − 110°.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nếu a // b và c ⊥ a thì c // b.', answer: false, explain: 'c ⊥ b chứ không song song.' },
    { type: 'short', calc: '(70 - 10) / 2', q: 'a // b, ∠A₃ = 2x + 10°, ∠B₁ = 70° (so le trong). Tìm x (độ).', unit: 'độ', answer: '30', explain: '2x + 10° = 70° ⇒ x = 30°.' },
    { type: 'short', calc: '40 + 30', q: 'Ax // By, O nằm giữa, ∠xAO = 40°, ∠yBO = 30°. Tính ∠AOB (độ).', unit: 'độ', answer: '70', explain: 'Kẻ Oz // Ax: 40° + 30° = 70°.' },
    { type: 'mcq', q: 'Cho a // c và b // c (a, b phân biệt). Khi đó:', options: ['a ⊥ b', 'a // b', 'a cắt b', 'không kết luận được'], answer: 1, explain: 'Hai đường thẳng phân biệt cùng song song với đường thẳng thứ ba thì song song.' },
    { type: 'short', calc: '180 / 4 * 3', q: 'a // b, ∠A₁ = 3∠A₂ (kề bù). Tính ∠B₁ (độ).', unit: 'độ', answer: '135', explain: '∠A₂ = 45°, ∠A₁ = 135° = ∠B₁ (đồng vị).' }
  ]
});
})();
