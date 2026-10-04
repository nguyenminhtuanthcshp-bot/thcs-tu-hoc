/* KHTN 7 – Bài 7. Hoá trị và công thức hoá học. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-7/bai-7', {
  objectives: [
    'Trình bày được khái niệm hoá trị (cho chất cộng hoá trị); viết được công thức hoá học của đơn chất, hợp chất.',
    'Nêu được ý nghĩa của công thức hoá học; tính được khối lượng phân tử và phần trăm khối lượng các nguyên tố trong hợp chất.',
    'Vận dụng quy tắc hoá trị để tìm hoá trị của một nguyên tố và lập công thức hoá học của hợp chất hai nguyên tố.'
  ],
  intro: 'Chỉ một dòng ngắn “H<sub>2</sub>SO<sub>4</sub>” đã cho biết chất gồm những nguyên tố nào, mỗi phân tử có bao nhiêu nguyên tử và nặng bao nhiêu. Đó là sức mạnh của <b>công thức hoá học</b>.',
  steps: [
    { title: 'Công thức hoá học', html: `<ul><li>Đơn chất kim loại, khí hiếm: dùng kí hiệu hoá học (Fe, Cu, He).</li><li>Đơn chất phi kim có phân tử gồm nhiều nguyên tử: thêm chỉ số (O<sub>2</sub>, N<sub>2</sub>, Cl<sub>2</sub>, O<sub>3</sub>).</li><li>Hợp chất: viết kí hiệu các nguyên tố kèm chỉ số ở chân: A<sub>x</sub>B<sub>y</sub> (chỉ số 1 không viết).</li></ul>
      <p><b>Ý nghĩa</b> của công thức H<sub>2</sub>O: chất tạo nên từ H và O; mỗi phân tử có 2 nguyên tử H và 1 nguyên tử O; khối lượng phân tử 18 amu.</p>` },
    { title: 'Hoá trị', html: `<p><b>Hoá trị</b> của một nguyên tố trong hợp chất cộng hoá trị bằng số liên kết (số cặp electron dùng chung) mà nguyên tử đó tạo được. Hoá trị viết bằng số La Mã. Quy ước: H có hoá trị I, O có hoá trị II.</p>
      <table class="tbl"><tr><th>Nguyên tố / nhóm</th><th>Hoá trị</th><th>Nguyên tố / nhóm</th><th>Hoá trị</th></tr>
      <tr><td>H, Na, K, Cl (với H, kim loại)</td><td>I</td><td>Al</td><td>III</td></tr>
      <tr><td>O, Mg, Ca, Zn, Ba</td><td>II</td><td>Fe</td><td>II, III</td></tr>
      <tr><td>C</td><td>II, IV</td><td>S</td><td>II, IV, VI</td></tr>
      <tr><td>Nhóm OH, NO<sub>3</sub></td><td>I</td><td>Nhóm SO<sub>4</sub>, CO<sub>3</sub></td><td>II</td></tr></table>` },
    { title: 'Quy tắc hoá trị', html: `<p>Trong hợp chất A<sub>x</sub>B<sub>y</sub> (A có hoá trị a, B có hoá trị b):</p>
      <p class="math">x · a = y · b</p>
      <p>Ví dụ: trong CH<sub>4</sub>: 1 · a = 4 · I ⇒ C có hoá trị IV. Trong Fe<sub>2</sub>O<sub>3</sub>: 2 · a = 3 · II ⇒ a = 3, Fe có hoá trị III.</p>` },
    { title: 'Lập công thức hoá học', html: `<ol><li>Viết công thức dạng chung A<sub>x</sub>B<sub>y</sub>.</li><li>Áp dụng quy tắc hoá trị: x · a = y · b.</li><li>Chuyển thành tỉ lệ {{x|y}} = {{b|a}} và chọn x, y là các số nguyên dương nhỏ nhất.</li><li>Viết công thức.</li></ol>
      <p>Ví dụ: Al (III) và O (II): {{x|y}} = {{II|III}} = {{2|3}} ⇒ Al<sub>2</sub>O<sub>3</sub>.</p>`,
      svg: S.valenceCross({ a: 'Al', va: 'III', b: 'O', vb: 'II', x: 2, y: 3 }), caption: 'Mẹo “chéo hoá trị”: hoá trị của nguyên tố này thành chỉ số của nguyên tố kia (rồi rút gọn nếu được).' },
    { title: 'Phần trăm khối lượng nguyên tố', html: `<p>Trong hợp chất A<sub>x</sub>B<sub>y</sub>:</p>
      <p class="math">%A = {{x · khối lượng nguyên tử A|khối lượng phân tử}} · 100%</p>
      <p>Ví dụ: trong CO<sub>2</sub> (44 amu): %C = {{12|44}} · 100% ≈ 27,3%; %O = 100% − 27,3% = 72,7%.</p>` }
  ],
  summary: 'Công thức hoá học cho biết nguyên tố tạo nên chất, số nguyên tử mỗi nguyên tố và khối lượng phân tử. Hoá trị: H = I, O = II. Quy tắc hoá trị: x · a = y · b. Lập công thức: x : y = b : a (tối giản). %A = x · M(A) : M(phân tử) · 100%.',
  examples: [
    { title: 'Tìm hoá trị', problem: 'Tìm hoá trị của N trong ammonia NH<sub>3</sub> và của S trong SO<sub>3</sub>.', solution: 'NH<sub>3</sub>: 1 · a = 3 · I ⇒ N hoá trị III. SO<sub>3</sub>: 1 · a = 3 · II ⇒ a = 6, S hoá trị VI.' },
    { title: 'Lập công thức', problem: 'Lập công thức hoá học của hợp chất tạo bởi Ca (II) và Cl (I).', solution: 'Ca<sub>x</sub>Cl<sub>y</sub>: x · II = y · I ⇒ {{x|y}} = {{1|2}} ⇒ x = 1, y = 2 ⇒ CaCl<sub>2</sub>.' },
    { title: 'Phần trăm khối lượng', problem: 'Tính phần trăm khối lượng của H trong nước H<sub>2</sub>O.', solution: 'Khối lượng phân tử 18 amu. %H = {{2 · 1|18}} · 100% ≈ 11,1%; %O ≈ 88,9%.' }
  ],
  exercises: [
    { question: 'Lập công thức hoá học của hợp chất tạo bởi Mg (II) và O (II).', hints: ['Viết x · II = y · II.', 'Tỉ lệ x : y = 1 : 1.'], solution: 'x : y = II : II = 1 : 1 ⇒ MgO.' },
    { question: 'Tính khối lượng phân tử của Al<sub>2</sub>O<sub>3</sub> và phần trăm khối lượng Al trong hợp chất (Al = 27, O = 16).', hints: ['Khối lượng phân tử = 2 · 27 + 3 · 16.', '%Al = 54 : khối lượng phân tử · 100%.'], solution: 'Khối lượng phân tử = 54 + 48 = 102 amu. %Al = {{54|102}} · 100% ≈ 52,9%.' },
    { question: 'Công thức của sắt(III) oxide được một bạn viết là FeO<sub>3</sub>. Bạn viết đúng không? Sửa lại nếu sai.', hints: ['Fe có hoá trị III, O có hoá trị II.', 'Kiểm tra: x · III có bằng y · II không?'], solution: 'Sai (1 · III ≠ 3 · II). Lập lại: x : y = II : III = 2 : 3 ⇒ Fe<sub>2</sub>O<sub>3</sub>.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Hoá trị của C trong CH<sub>4</sub> là:', options: ['I', 'II', 'III', 'IV'], answer: 3, explain: '1 · a = 4 · I ⇒ a = IV.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Công thức hoá học của hợp chất tạo bởi Al (III) và O (II) là Al<sub>2</sub>O<sub>3</sub>.', answer: true, explain: 'x : y = II : III = 2 : 3.' },
    { type: 'short', q: 'Tính khối lượng phân tử của Al<sub>2</sub>O<sub>3</sub> (Al = 27, O = 16).', answer: '102', unit: 'amu', calc: '2*27+3*16', explain: '2 · 27 + 3 · 16 = 102 (amu).' },
    { type: 'mcq', q: 'Công thức hoá học của hợp chất tạo bởi Na (I) và O (II) là:', options: ['NaO', 'Na<sub>2</sub>O', 'NaO<sub>2</sub>', 'Na<sub>2</sub>O<sub>3</sub>'], answer: 1, explain: 'x : y = II : I = 2 : 1 ⇒ Na₂O.' },
    { type: 'short', q: 'Phần trăm khối lượng của O trong CO<sub>2</sub> là bao nhiêu phần trăm? (làm tròn đến hàng đơn vị)', answer: '73', unit: '%', calc: 'Math.round(2*16/44*100)', explain: '%O = 32 : 44 · 100% ≈ 72,7% ≈ 73%.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Trong hợp chất Fe<sub>2</sub>O<sub>3</sub>, sắt có hoá trị II.', answer: false, explain: '2 · a = 3 · II ⇒ a = 3: sắt có hoá trị III.' },
    { type: 'short', q: 'Mỗi phân tử H<sub>2</sub>SO<sub>4</sub> có tổng cộng bao nhiêu nguyên tử?', answer: '7', calc: '2+1+4', explain: '2 + 1 + 4 = 7 nguyên tử.' },
    { type: 'short', q: 'Tính khối lượng phân tử của CaCO<sub>3</sub> (Ca = 40, C = 12, O = 16).', answer: '100', unit: 'amu', calc: '40+12+3*16', explain: '40 + 12 + 48 = 100 (amu).' }
  ]
});
})();
