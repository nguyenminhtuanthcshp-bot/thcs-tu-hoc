/* Toán 9 – Bài 16. Vị trí tương đối của đường thẳng và đường tròn. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C, G = S.geom;
  var O = [120, 120], R = 70, M = [300, 120], a = Math.acos(R / 180) * 180 / Math.PI;
  var T1 = G.polar(O, a, R), T2 = G.polar(O, -a, R);
  function pos(y, name) { return S.geo({ w: 200, h: 215, P: { O: [100, 90], H: [100, 90 + y], P1: [10, 90 + y], P2: [190, 90 + y] }, hide: ['P1', 'P2'], circles: [{ c: 'O', r: 60, color: C.blue }], seg: [{ s: 'P1-P2', color: C.red }], dash: ['OH'], text: [[100, 208, name, C.ink, true, 13]], off: { O: [-12, -4], H: [12, 16] } }); }
  THCS.registerLesson('toan-9/bai-16', {
    objectives: [
      'Mô tả được ba vị trí tương đối của đường thẳng và đường tròn qua khoảng cách d từ tâm đến đường thẳng.',
      'Giải thích được dấu hiệu nhận biết tiếp tuyến và tính chất của hai tiếp tuyến cắt nhau.',
      'Vận dụng tính chất tiếp tuyến để tính độ dài, số đo góc và giải bài toán thực tế.'
    ],
    intro: 'Một chiếc bánh xe lăn trên mặt đường chỉ chạm mặt đường tại đúng một điểm: mặt đường là tiếp tuyến của bánh xe.',
    steps: [
      { title: 'Ba vị trí tương đối', html: `<p>Gọi d là khoảng cách từ tâm O đến đường thẳng a.</p><table class="tbl"><tr><th>Vị trí</th><th>Số điểm chung</th><th>Hệ thức</th></tr><tr><td>Cắt nhau</td><td>2</td><td>d &lt; R</td></tr><tr><td>Tiếp xúc</td><td>1</td><td>d = R</td></tr><tr><td>Không giao nhau</td><td>0</td><td>d &gt; R</td></tr></table>`,
        svg: [pos(30, 'd < R: cắt nhau'), pos(60, 'd = R: tiếp xúc'), pos(80, 'd > R: không giao')], caption: 'Ba vị trí của đường thẳng đối với đường tròn.' },
      { title: 'Tiếp tuyến và dấu hiệu nhận biết', html: `<p>Đường thẳng tiếp xúc với đường tròn gọi là <b>tiếp tuyến</b>, điểm chung là <b>tiếp điểm</b>.</p><div class="box key">Tiếp tuyến vuông góc với bán kính tại tiếp điểm. Ngược lại, nếu đường thẳng a đi qua điểm A của đường tròn và vuông góc với OA thì a là tiếp tuyến.</div>` },
      { title: 'Hai tiếp tuyến cắt nhau', html: `<p>Từ điểm M nằm ngoài (O) kẻ hai tiếp tuyến MA, MB (A, B là tiếp điểm):</p><ul><li>MA = MB;</li><li>MO là tia phân giác của ∠AMB;</li><li>OM là tia phân giác của ∠AOB.</li></ul>`,
        svg: S.geo({ w: 340, h: 250, P: { O: O, M: M, A: T1, B: T2 }, circles: [{ c: 'O', r: R, color: C.blue }], seg: ['MA', 'MB', 'OA', 'OB'], dash: ['OM'], right: ['OAM', 'OBM'], ticks: [['MA', 1], ['MB', 1]], arcs: [['AMO', 1, '', C.orange, 30], ['OMB', 1, '', C.orange, 36]], off: { O: [-14, 5], M: [14, 5] } }), caption: 'MA = MB, MO là phân giác ∠AMB.' },
      { title: 'Tính độ dài tiếp tuyến', html: `<p>Tam giác OAM vuông tại A: MA = √(OM<sup>2</sup> − R<sup>2</sup>).</p><p>Ví dụ: R = 5 cm, OM = 13 cm ⇒ MA = √(169 − 25) = 12 cm.</p>` }
    ],
    summary: 'd < R: cắt; d = R: tiếp xúc; d > R: không giao. Tiếp tuyến ⊥ bán kính tại tiếp điểm. Hai tiếp tuyến từ M: MA = MB, MO là phân giác. MA = √(OM² − R²).',
    examples: [
      { title: 'Xác định vị trí', problem: 'Cho (O; 6 cm) và đường thẳng a cách O 4 cm. Xác định vị trí tương đối và tính độ dài dây cung tạo thành.', solution: 'd = 4 &lt; 6: cắt nhau tại A, B. AB = 2√(36 − 16) = 4√5 ≈ 8,94 cm.' },
      { title: 'Độ dài tiếp tuyến', problem: 'Từ M cách O 10 cm kẻ tiếp tuyến MA tới (O; 6 cm). Tính MA.', solution: 'MA = √(100 − 36) = 8 cm.' },
      { title: 'Góc giữa hai tiếp tuyến', problem: 'Từ M kẻ hai tiếp tuyến MA, MB tới (O; R) với OM = 2R. Tính ∠AMB.', solution: 'sin ∠AMO = {{R|2R}} = {{1|2}} ⇒ ∠AMO = 30° ⇒ ∠AMB = 60°.' }
    ],
    exercises: [
      { question: 'Cho (O; 5 cm), điểm A thuộc đường tròn. Đường thẳng qua A vuông góc với OA có phải tiếp tuyến không? Vì sao?', hints: ['Khoảng cách từ O tới đường thẳng là OA.', 'OA = R.'], solution: 'Có, vì d = OA = R (dấu hiệu nhận biết tiếp tuyến).' },
      { question: 'Từ M kẻ hai tiếp tuyến MA, MB tới (O; 3 cm), MA = 4 cm. Tính OM và chu vi tứ giác OAMB.', hints: ['OM = √(9 + 16).', 'Chu vi = 2(OA + MA).'], solution: 'OM = 5 cm; chu vi 14 cm.' },
      { question: 'Mắt người quan sát ở độ cao h = 0,02 km so với mặt biển; bán kính Trái Đất R ≈ 6400 km. Tầm nhìn xa tới đường chân trời là √((R + h)<sup>2</sup> − R<sup>2</sup>). Tính (làm tròn đến km).', hints: ['(6400,02)<sup>2</sup> − 6400<sup>2</sup> ≈ 256.', '√256.'], solution: '≈ 16 km.' }
    ],
    quiz: [
      { type: 'mcq', q: 'Cho (O; 6 cm), đường thẳng a cách O 6 cm. Vị trí tương đối là:', options: ['cắt nhau', 'tiếp xúc', 'không giao nhau', 'trùng nhau'], answer: 1, explain: 'd = R.' },
      { type: 'short', calc: 'Math.sqrt(10 * 10 - 6 * 6)', q: 'M cách O 10 cm, tiếp tuyến MA tới (O; 6 cm). MA = ? (cm)', unit: 'cm', answer: '8', explain: '√(100 − 36).' },
      { type: 'short', calc: '2 * Math.asin(1 / 2) * 180 / Math.PI', q: 'Hai tiếp tuyến MA, MB tới (O; R), OM = 2R. Tính ∠AMB (độ).', unit: 'độ', answer: '60', explain: '∠AMO = 30°.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tiếp tuyến của đường tròn vuông góc với bán kính tại tiếp điểm.', answer: true, explain: 'Tính chất tiếp tuyến.' },
      { type: 'short', calc: '2 * (3 + 4)', q: 'MA, MB là tiếp tuyến của (O; 3 cm), MA = 4 cm. Chu vi tứ giác OAMB (cm)?', unit: 'cm', answer: '14', explain: '2(3 + 4).' },
      { type: 'short', calc: 'Math.round(Math.sqrt(6400.02 ** 2 - 6400 ** 2))', q: 'Tầm nhìn xa √((R + h)² − R²) với R = 6400 km, h = 0,02 km (km, làm tròn đến km)?', unit: 'km', answer: '16', explain: '√256.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nếu d &gt; R thì đường thẳng cắt đường tròn tại hai điểm.', answer: false, explain: 'd &gt; R: không giao nhau.' },
      { type: 'mcq', q: 'Từ M ngoài (O) kẻ hai tiếp tuyến MA, MB. Khẳng định nào SAI?', options: ['MA = MB', 'MO là phân giác ∠AMB', 'OM ⊥ AB', 'MA = OM'], answer: 3, explain: 'MA là cạnh góc vuông, OM là cạnh huyền nên MA &lt; OM.' }
    ]
  });
})();
