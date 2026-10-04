/* Toán 7 – Chương III. Luyện tập chung (sau Bài 11). Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, C = S.C;
THCS.registerLesson('toan-7/c3-ltc-2', {
  objectives: [
    'Vận dụng tiên đề Euclid và tính chất hai đường thẳng song song để tính góc.',
    'Kết hợp dấu hiệu nhận biết và tính chất trong cùng một bài toán.',
    'Trình bày lời giải có căn cứ, viết được GT – KL của bài toán hình học.'
  ],
  intro: 'Luyện tập Bài 10 và Bài 11. Hãy phân biệt rõ: dấu hiệu (từ góc suy ra song song) và tính chất (từ song song suy ra góc).',
  steps: [
    { title: 'Dấu hiệu hay tính chất?', html: `<table class="tbl"><tr><th></th><th>Biết</th><th>Suy ra</th></tr><tr><td>Dấu hiệu (Bài 9)</td><td>Một cặp so le trong / đồng vị bằng nhau</td><td>a // b</td></tr><tr><td>Tính chất (Bài 10)</td><td>a // b</td><td>So le trong, đồng vị bằng nhau; trong cùng phía bù nhau</td></tr></table>` },
    { title: 'Kẻ thêm đường song song', html: `<p>Khi một góc có đỉnh nằm giữa hai đường thẳng song song, hãy kẻ qua đỉnh đó một đường thẳng song song với chúng để tách góc thành hai phần.</p>`,
      svg: S.geo({ w: 380, h: 210, P: { x: [340, 40], A: [80, 40], y: [340, 180], B: [42, 180], O: [163, 110], z: [30, 110], E: [20, 40], F: [20, 180] }, seg: ['EA', 'Ax', 'FB', 'By', 'AO', 'OB', { s: 'Oz', dash: true, color: C.green }], hide: ['E', 'F'], parallel: [['Ax', 1, 0.75], ['By', 1, 0.75]], arcs: [['x-A-O', 1, '40°', C.orange, 30], ['A-O-z', 1, '40°', C.orange, 30], ['y-B-O', 1, '30°', C.blue, 34], ['z-O-B', 1, '30°', C.blue, 40]], off: { A: [0, -12], B: [0, 22], O: [14, 6], z: [-8, -8] } }),
      caption: 'Ax // By, kẻ Oz // Ax: ∠AOB = ∠AOz + ∠zOB = 40° + 30° = 70°.' },
    { title: 'Kết hợp vuông góc – song song', html: `<ul><li>c ⊥ a, c ⊥ b ⇒ a // b.</li><li>a // b, c ⊥ a ⇒ c ⊥ b.</li><li>a // c, b // c ⇒ a // b.</li></ul><p>Đây là những “cầu nối” giúp chuyển thông tin qua lại giữa các đường thẳng.</p>` },
    { title: 'Trình bày một chứng minh', html: `<ol><li>Vẽ hình, ghi GT – KL.</li><li>Tìm con đường: KL cần gì? Điều đó suy ra từ đâu?</li><li>Viết lại theo chiều từ GT đến KL, mỗi bước kèm lí do trong ngoặc.</li></ol>` }
  ],
  summary: 'Dấu hiệu: góc ⇒ song song; tính chất: song song ⇒ góc. Kẻ thêm đường song song qua đỉnh góc ở giữa; dùng các cầu nối vuông góc – song song. Trình bày có GT – KL và lí do.',
  examples: [
    { title: 'Tính góc bằng tính chất', problem: 'a // b; c cắt a tại A, cắt b tại B; ∠A₂ = 115°. Tính ∠B₁, ∠B₃.', solution: '∠B₂ = ∠A₂ = 115° (đồng vị) ⇒ ∠B₁ = 180° − 115° = 65° (kề bù), ∠B₃ = ∠B₁ = 65° (đối đỉnh).' },
    { title: 'Chứng minh rồi tính', problem: 'Đường thẳng c cắt a, b; ∠A₃ = ∠B₁ = 72°. Đường thẳng d cắt a tại M với ∠(d, a) = 90°. Tính góc giữa d và b.', solution: '∠A₃ = ∠B₁ (so le trong) ⇒ a // b. d ⊥ a và a // b ⇒ d ⊥ b: góc bằng 90°.' },
    { title: 'Góc ở giữa', problem: 'Ax // By, O nằm giữa hai tia, ∠xAO = 35°, ∠AOB = 80°. Tính ∠yBO.', solution: 'Kẻ Oz // Ax. ∠AOz = 35° ⇒ ∠zOB = 80° − 35° = 45° ⇒ ∠yBO = 45° (so le trong).' }
  ],
  exercises: [
    { question: 'a // b; ∠A₄ = 2∠A₁. Tính ∠B₂.', hints: ['∠A₁ + ∠A₄ = 180° (kề bù) ⇒ ∠A₁ = 60°.', '∠B₂ so le trong với ∠A₄.'], solution: '∠A₄ = 120° ⇒ ∠B₂ = 120°.' },
    { question: 'Cho a ⊥ c, b ⊥ c, đường thẳng d cắt a, b tại M, N với ∠aMd (góc nhọn) = 50°. Tính góc nhọn tạo bởi d và b tại N.', hints: ['a // b vì cùng vuông góc với c.', 'Dùng góc đồng vị.'], solution: 'a // b ⇒ góc nhọn tại N bằng 50° (đồng vị).' },
    { question: 'Viết GT – KL cho bài toán: “Cho a // b, c cắt a tại A và b tại B. Chứng minh hai tia phân giác của hai góc so le trong song song với nhau.”', hints: ['GT gồm quan hệ song song, cát tuyến và hai tia phân giác.', 'KL: hai tia phân giác song song.'], solution: 'GT: a // b; c ∩ a = A, c ∩ b = B; At là phân giác ∠A₃, Bt\' là phân giác ∠B₁. KL: At // Bt\'.' }
  ],
  quiz: [
    { type: 'short', calc: '180 - 115', q: 'a // b, ∠A₂ = 115°. Tính ∠B₁ (độ).', unit: 'độ', answer: '65', explain: '∠B₂ = 115° (đồng vị) ⇒ ∠B₁ = 65°.' },
    { type: 'mcq', q: 'Từ “a // b” suy ra “hai góc so le trong bằng nhau” là dùng:', options: ['dấu hiệu nhận biết', 'tính chất hai đường thẳng song song', 'tiên đề Euclid', 'định nghĩa góc đối đỉnh'], answer: 1, explain: 'Biết song song, suy ra góc: tính chất.' },
    { type: 'short', calc: '80 - 35', q: 'Ax // By, ∠xAO = 35°, ∠AOB = 80°. Tính ∠yBO (độ).', unit: 'độ', answer: '45', explain: 'Kẻ Oz // Ax: ∠zOB = 45° = ∠yBO.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nếu a ⊥ c và b ⊥ c thì a ⊥ b.', answer: false, explain: 'a // b (khi a, b phân biệt).' },
    { type: 'short', calc: '180 / 3 * 2', q: 'a // b, ∠A₄ = 2∠A₁ (kề bù). Tính ∠B₂ (độ).', unit: 'độ', answer: '120', explain: '∠A₄ = 120° = ∠B₂ (so le trong).' },
    { type: 'short', calc: '40 + 30', q: 'Ax // By, ∠xAO = 40°, ∠yBO = 30° (O ở giữa). ∠AOB bằng bao nhiêu độ?', unit: 'độ', answer: '70', explain: '40° + 30° = 70°.' },
    { type: 'mcq', q: 'a // b, c ⊥ a. Góc tạo bởi c và b bằng:', options: ['45°', '60°', '90°', '180°'], answer: 2, explain: 'c ⊥ b.' },
    { type: 'short', calc: '180 - 72', q: 'a // b, ∠A₃ = 72°. Tính ∠B₂ (trong cùng phía với ∠A₃), đơn vị độ.', unit: 'độ', answer: '108', explain: '180° − 72° = 108°.' }
  ]
});
})();
