/* Toán 7 – Chương III. Luyện tập chung (sau Bài 9). Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, G = S.geom, C = S.C, O = [190, 150];
THCS.registerLesson('toan-7/c3-ltc-1', {
  objectives: [
    'Củng cố: hai góc kề bù, đối đỉnh, tia phân giác của một góc.',
    'Nhận ra nhanh các cặp góc so le trong, đồng vị, trong cùng phía.',
    'Vận dụng dấu hiệu nhận biết để chứng tỏ hai đường thẳng song song.'
  ],
  intro: 'Luyện tập Bài 8 và Bài 9. Mọi bài toán góc đều quy về ba “công cụ”: kề bù = 180°, đối đỉnh thì bằng nhau, phân giác chia đôi.',
  steps: [
    { title: 'Ba công cụ tính góc', html: `<ul><li>Kề bù: ∠1 + ∠2 = 180°.</li><li>Đối đỉnh: ∠1 = ∠3.</li><li>Tia phân giác Ot của ∠xOy: ∠xOt = ∠tOy = {{1|2}}∠xOy.</li></ul>
      <p>Hình bên: hai đường thẳng cắt nhau tại O và Ot là tia phân giác của ∠xOy.</p>`,
      svg: S.geo({ w: 380, h: 280, P: { O: O, x: G.polar(O, 0, 170), "x'": G.polar(O, 180, 170), y: G.polar(O, 70, 125), "y'": G.polar(O, 250, 125), t: G.polar(O, 35, 150) }, seg: ["x-x'", "y-y'"], ray: [{ s: 'Ot', color: C.green, width: 2.5 }], ext: 0, arcs: [['x-O-t', 1, '35°', C.orange, 40], ['t-O-y', 1, '35°', C.orange, 40], ["x'-O-y'", 1, '70°', C.blue, 28]], off: { O: [-4, 22], x: [0, 20], "x'": [0, 20] } }),
      caption: '∠x\'Oy\' = ∠xOy = 70° (đối đỉnh); ∠xOt = ∠tOy = 35°.' },
    { title: 'Nhận dạng cặp góc', html: `<p>Đường thẳng c cắt a tại A, cắt b tại B:</p><ul><li>So le trong: “chữ Z” – nằm giữa a và b, khác phía của c.</li><li>Đồng vị: “chữ F” – cùng vị trí ở hai giao điểm.</li><li>Trong cùng phía: “chữ U” – nằm giữa a và b, cùng phía của c.</li></ul>` },
    { title: 'Chứng minh hai đường thẳng song song', html: `<p>Chỉ ra <b>một</b> trong các điều sau là đủ:</p><ul><li>một cặp góc so le trong bằng nhau;</li><li>một cặp góc đồng vị bằng nhau;</li><li>hai đường thẳng cùng vuông góc với một đường thẳng.</li></ul><p>Thường phải dùng thêm kề bù hoặc đối đỉnh để “chuyển” góc về đúng vị trí.</p>`,
      svg: S.transversal({ deg: 55, show: { A: [1, 3], B: [3] }, mark: [['A', 1, C.orange, '55°'], ['B', 3, C.orange, '55°']], namePos: { B: [16, 24] } }),
      caption: '∠A₁ = ∠B₃ = 55°. Vì ∠A₃ = ∠A₁ (đối đỉnh) nên ∠A₃ = ∠B₃: cặp đồng vị bằng nhau ⇒ a // b.' },
    { title: 'Mẹo trình bày', html: `<ol><li>Ghi rõ lí do mỗi bước: (kề bù), (đối đỉnh), (tia phân giác), (so le trong)…</li><li>Kí hiệu góc có 3 chữ cái, đỉnh ở giữa: ∠xOy, ∠ABC.</li><li>Kết thúc bằng câu trả lời cho đề bài.</li></ol>` }
  ],
  summary: 'Kề bù 180°, đối đỉnh bằng nhau, phân giác chia đôi. Nhận dạng chữ Z (so le trong), F (đồng vị), U (trong cùng phía). Một cặp so le trong/đồng vị bằng nhau ⇒ song song.',
  examples: [
    { title: 'Kết hợp đối đỉnh và phân giác', problem: 'Hai đường thẳng xx\', yy\' cắt nhau tại O, ∠xOy = 70°. Ot là tia phân giác của ∠xOy. Tính ∠x\'Ot.', solution: '∠xOt = 35°. ∠x\'Ot kề bù với ∠xOt nên ∠x\'Ot = 180° − 35° = 145°.' },
    { title: 'Chứng tỏ song song', problem: 'c cắt a, b tại A, B; ∠A₄ = 125°, ∠B₁ = 55°. Chứng tỏ a // b.', solution: '∠A₃ = 180° − 125° = 55° (kề bù với ∠A₄). Vậy ∠A₃ = ∠B₁ = 55°, là cặp so le trong bằng nhau ⇒ a // b.' },
    { title: 'Tìm góc chưa biết', problem: 'Hai góc kề bù ∠xOy và ∠yOz, trong đó ∠xOy = 2∠yOz. Om là tia phân giác của ∠xOy. Tính ∠mOz.', solution: '3∠yOz = 180° ⇒ ∠yOz = 60°, ∠xOy = 120° ⇒ ∠mOy = 60°. ∠mOz = ∠mOy + ∠yOz = 120°.' }
  ],
  exercises: [
    { question: 'Hai đường thẳng cắt nhau tạo thành bốn góc, tổng của hai trong bốn góc đó là 100° (hai góc không kề nhau). Tính bốn góc.', hints: ['Hai góc không kề nhau là hai góc đối đỉnh, chúng bằng nhau.', 'Mỗi góc bằng 50°; hai góc còn lại kề bù với 50°.'], solution: 'Bốn góc: 50°, 130°, 50°, 130°.' },
    { question: 'c cắt a, b tại A, B; ∠A₂ = 3x, ∠B₂ = x + 40°. Tìm x để a // b.', hints: ['∠A₂ và ∠B₂ là cặp đồng vị.', 'Cho 3x = x + 40°.'], solution: '2x = 40° ⇒ x = 20°. Khi đó ∠A₂ = ∠B₂ = 60° ⇒ a // b.' },
    { question: 'Cho ∠xOy = 90°, Ot là tia phân giác. Tính góc tạo bởi Ot và tia đối của tia Ox.', hints: ['∠xOt = 45°.', 'Góc cần tính kề bù với ∠xOt.'], solution: '180° − 45° = 135°.' }
  ],
  quiz: [
    { type: 'short', calc: '180 - 70 / 2', q: 'xx\' cắt yy\' tại O, ∠xOy = 70°, Ot là tia phân giác của ∠xOy. Tính ∠x\'Ot (độ).', unit: 'độ', answer: '145', explain: '180° − 35° = 145°.' },
    { type: 'mcq', q: '“Chữ Z” gợi nhớ cặp góc nào?', options: ['đồng vị', 'so le trong', 'trong cùng phía', 'kề bù'], answer: 1, explain: 'Hai góc so le trong nằm ở hai góc trong của chữ Z.' },
    { type: 'short', calc: '100 / 2', q: 'Hai góc đối đỉnh có tổng 100°. Mỗi góc bằng bao nhiêu độ?', unit: 'độ', answer: '50', explain: 'Hai góc đối đỉnh bằng nhau: 100° : 2.' },
    { type: 'short', calc: '40 / 2', q: '∠A₂ = 3x, ∠B₂ = x + 40° (đồng vị). Tìm x (độ) để a // b.', unit: 'độ', answer: '20', explain: '3x = x + 40° ⇒ x = 20°.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nếu ∠A₄ = 125° và ∠B₁ = 55° thì a // b.', answer: true, explain: '∠A₃ = 55° = ∠B₁ (so le trong).' },
    { type: 'short', calc: '180 / 3 * 2 / 2 + 180 / 3', q: '∠xOy và ∠yOz kề bù, ∠xOy = 2∠yOz; Om là phân giác của ∠xOy. Tính ∠mOz (độ).', unit: 'độ', answer: '120', explain: '∠yOz = 60°, ∠mOy = 60°; ∠mOz = 120°.' },
    { type: 'mcq', q: 'Ot là tia phân giác của góc vuông xOy. ∠xOt bằng:', options: ['30°', '45°', '60°', '90°'], answer: 1, explain: '90° : 2 = 45°.' },
    { type: 'short', calc: '180 - 90 / 2', q: 'Ot là phân giác của góc vuông xOy, Ox\' là tia đối của Ox. Tính ∠x\'Ot (độ).', unit: 'độ', answer: '135', explain: '180° − 45° = 135°.' }
  ]
});
})();
