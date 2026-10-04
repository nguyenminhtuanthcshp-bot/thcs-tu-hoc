/* Toán 7 – Bài 8. Góc ở vị trí đặc biệt. Tia phân giác của một góc. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, G = S.geom, C = S.C;
var O1 = [180, 150], O2 = [180, 125], O3 = [60, 190];
THCS.registerLesson('toan-7/bai-8', {
  objectives: [
    'Nhận biết hai góc kề bù, hai góc đối đỉnh; biết tổng hai góc kề bù bằng 180° và hai góc đối đỉnh thì bằng nhau.',
    'Nhận biết tia phân giác của một góc; tính được số đo các góc tạo bởi tia phân giác.',
    'Vẽ được tia phân giác của một góc bằng thước đo góc (hoặc gấp giấy).'
  ],
  intro: 'Khi hai chiếc đũa bắt chéo nhau, chúng tạo ra bốn góc. Có những cặp góc luôn bằng nhau, có những cặp luôn cộng lại được 180° – bài học này giải thích vì sao.',
  steps: [
    { title: 'Hai góc kề bù', html: `<p>Hai góc <b>kề nhau</b> là hai góc có chung đỉnh, chung một cạnh và hai cạnh còn lại nằm về hai phía của cạnh chung.</p>
      <p>Hai góc kề nhau có hai cạnh còn lại là hai tia đối nhau gọi là hai góc <b>kề bù</b>. Hai góc kề bù có tổng số đo bằng <b>180°</b>.</p>
      <p class="math">∠xOz + ∠zOy = 180°</p>`,
      svg: S.geo({ w: 380, h: 190, P: { x: [30, 150], O: O1, y: [340, 150], z: G.polar(O1, 55, 130) }, seg: ['xy'], ray: ['Oz'], ext: 0, arcs: [['yOz', 1, '55°', C.orange, 30], ['zOx', 1, '125°', C.blue, 24]], off: { O: [0, 22], x: [0, -12], y: [0, -12], z: [10, -4] } }),
      caption: 'Ox và Oy là hai tia đối nhau; ∠xOz và ∠zOy kề bù: 125° + 55° = 180°.' },
    { title: 'Hai góc đối đỉnh', html: `<p>Hai góc <b>đối đỉnh</b> là hai góc mà mỗi cạnh của góc này là tia đối của một cạnh của góc kia.</p>
      <p>Hai đường thẳng xx' và yy' cắt nhau tại O tạo thành hai cặp góc đối đỉnh: ∠xOy và ∠x'Oy'; ∠xOy' và ∠x'Oy.</p>
      <div class="box note"><b>Tính chất:</b> Hai góc đối đỉnh thì bằng nhau. (Vì cả hai đều kề bù với cùng một góc.)</div>`,
      svg: S.geo({ w: 380, h: 250, P: { O: O2, x: G.polar(O2, 20, 160), "x'": G.polar(O2, 200, 160), y: G.polar(O2, 125, 125), "y'": G.polar(O2, 305, 125) }, seg: ["x-x'", "y-y'"], arcs: [['x-O-y', 1, '', C.orange, 36], ["x'-O-y'", 1, '', C.orange, 36], ["y-O-x'", 2, '', C.blue, 18], ["y'-O-x", 2, '', C.blue, 18]], off: { O: [15, 7] } }),
      caption: 'Các góc cùng màu là các cặp góc đối đỉnh, chúng bằng nhau.' },
    { title: 'Tia phân giác của một góc', html: `<p><b>Tia phân giác</b> của một góc (không phải góc bẹt) là tia nằm giữa hai cạnh của góc và tạo với hai cạnh ấy hai góc bằng nhau.</p>
      <p class="math">Ot là tia phân giác của ∠xOy ⇔ Ot nằm giữa Ox, Oy và ∠xOt = ∠tOy = {{∠xOy|2}}</p>`,
      svg: S.geo({ w: 380, h: 220, P: { O: O3, x: G.polar(O3, 0, 290), y: G.polar(O3, 70, 170), t: G.polar(O3, 35, 250) }, ray: ['Ox', 'Oy', { s: 'Ot', color: C.green, width: 2.5 }], ext: 0, arcs: [['x-O-t', 1, '35°', C.orange, 60], ['t-O-y', 1, '35°', C.orange, 60]], off: { O: [-6, 20], x: [0, 20], t: [12, -2], y: [8, -8] } }),
      caption: 'Ot là tia phân giác của ∠xOy = 70°: ∠xOt = ∠tOy = 35°.' },
    { title: 'Vẽ tia phân giác', html: `<p><b>Dùng thước đo góc</b>: đo ∠xOy, chẳng hạn 70°. Vẽ tia Ot nằm giữa hai cạnh sao cho ∠xOt = 35°.</p>
      <p><b>Gấp giấy</b>: vẽ góc lên giấy trong, gấp sao cho cạnh Ox trùng Oy; nếp gấp là tia phân giác.</p>
      <p>Đường thẳng chứa tia phân giác gọi là <b>đường phân giác</b> của góc. Góc bẹt có tia phân giác là tia vuông góc với đường thẳng tạo thành góc bẹt.</p>` }
  ],
  summary: 'Kề bù: tổng 180°. Đối đỉnh: bằng nhau. Tia phân giác chia góc thành hai góc bằng nhau, mỗi góc bằng nửa góc ban đầu.',
  examples: [
    { title: 'Góc kề bù', problem: 'Cho ∠xOz và ∠zOy kề bù, ∠xOz = 3 · ∠zOy. Tính hai góc.', solution: '∠xOz + ∠zOy = 180° ⇒ 4 · ∠zOy = 180° ⇒ ∠zOy = 45°, ∠xOz = 135°.' },
    { title: 'Góc đối đỉnh', problem: 'Hai đường thẳng cắt nhau tạo thành bốn góc, trong đó một góc bằng 48°. Tính ba góc còn lại.', solution: 'Góc đối đỉnh với nó bằng 48°. Hai góc còn lại kề bù với góc 48° nên mỗi góc bằng 180° − 48° = 132°.' },
    { title: 'Tia phân giác', problem: 'Ot là tia phân giác của ∠xOy = 110°. Tính ∠xOt và góc kề bù với ∠xOt.', solution: '∠xOt = 110° : 2 = 55°. Góc kề bù với nó bằng 180° − 55° = 125°.' }
  ],
  exercises: [
    { question: 'Hai đường thẳng AB và CD cắt nhau tại O, ∠AOC = 65°. Tính ∠BOD, ∠AOD.', hints: ['∠BOD đối đỉnh với ∠AOC.', '∠AOD kề bù với ∠AOC.'], solution: '∠BOD = 65°; ∠AOD = 180° − 65° = 115°.' },
    { question: 'Cho ∠xOy = 130°, Om là tia phân giác. Tính ∠xOm.', hints: ['Tia phân giác chia đôi góc.', '130° : 2.'], solution: '∠xOm = 65°.' },
    { question: 'Hai góc kề bù hơn kém nhau 40°. Tính số đo mỗi góc.', hints: ['Tổng hai góc bằng 180°, hiệu bằng 40°.', 'Góc lớn = (180° + 40°) : 2.'], solution: 'Góc lớn 110°, góc nhỏ 70°.' }
  ],
  quiz: [
    { type: 'short', calc: '180 - 65', q: 'Hai góc kề bù, một góc bằng 65°. Góc kia bằng bao nhiêu độ?', unit: 'độ', answer: '115', explain: '180° − 65° = 115°.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hai góc bằng nhau thì đối đỉnh.', answer: false, explain: 'Hai góc đối đỉnh thì bằng nhau, nhưng hai góc bằng nhau chưa chắc đối đỉnh.' },
    { type: 'short', calc: '110 / 2', q: 'Ot là tia phân giác của ∠xOy = 110°. Tính ∠xOt (độ).', unit: 'độ', answer: '55', explain: '110° : 2 = 55°.' },
    { type: 'mcq', q: 'Hai đường thẳng cắt nhau tạo thành bao nhiêu cặp góc đối đỉnh (không kể góc bẹt)?', options: ['1', '2', '3', '4'], answer: 1, explain: 'Bốn góc tạo thành hai cặp góc đối đỉnh.' },
    { type: 'short', calc: '180 / 4', q: 'Hai góc kề bù có góc này gấp 3 lần góc kia. Góc nhỏ bằng bao nhiêu độ?', unit: 'độ', answer: '45', explain: '4 phần = 180° ⇒ 1 phần = 45°.' },
    { type: 'short', calc: '180 - 48', q: 'Hai đường thẳng cắt nhau, một góc bằng 48°. Góc kề bù với nó bằng bao nhiêu độ?', unit: 'độ', answer: '132', explain: '180° − 48° = 132°.' },
    { type: 'mcq', q: 'Tia phân giác của góc bẹt tạo với mỗi cạnh của góc một góc:', options: ['45°', '90°', '180°', '60°'], answer: 1, explain: '180° : 2 = 90°.' },
    { type: 'short', calc: '(180 + 40) / 2', q: 'Hai góc kề bù hơn kém nhau 40°. Góc lớn bằng bao nhiêu độ?', unit: 'độ', answer: '110', explain: '(180° + 40°) : 2 = 110°.' }
  ]
});
})();
