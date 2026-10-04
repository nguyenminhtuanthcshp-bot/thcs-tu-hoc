/* Toán 7 – Bài tập cuối chương I. Số hữu tỉ. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('toan-7/c1-on-tap', {
  objectives: [
    'Hệ thống lại kiến thức chương I: tập hợp ℚ, thứ tự, phép tính, luỹ thừa, thứ tự thực hiện, chuyển vế.',
    'Giải được các dạng bài tổng hợp: so sánh, tính giá trị biểu thức, tìm x.',
    'Vận dụng số hữu tỉ vào bài toán thực tế (phần trăm, tỉ số, tiền bạc).'
  ],
  intro: 'Ôn tập cả chương I theo sơ đồ: Số hữu tỉ → Thứ tự → Phép tính → Luỹ thừa → Biểu thức & tìm x. Hãy tự làm từng ví dụ trước khi xem lời giải.',
  steps: [
    { title: 'Sơ đồ chương', html: `<ul><li><b>ℚ</b> = tập hợp các số viết được dạng {{a|b}} (a, b ∈ ℤ, b ≠ 0). ℕ ⊂ ℤ ⊂ ℚ.</li><li><b>Số đối</b> của x là −x; <b>giá trị trên trục số</b>: số nhỏ hơn nằm bên trái.</li><li><b>Phép tính</b>: cộng, trừ, nhân, chia (chia cho số khác 0).</li><li><b>Luỹ thừa</b> x<sup>n</sup> = x · x · … · x (n thừa số), x<sup>0</sup> = 1 (x ≠ 0).</li><li><b>Chuyển vế</b>: đổi dấu số hạng.</li></ul>`,
      svg: S.numberLine({ min: -2, max: 2, div: 4, width: 560, marks: [{ v: -1.75, label: '−7/4', color: S.C.orange }, { v: -0.5, label: '−0,5', color: S.C.purple }, { v: 0.25, label: '1/4', color: S.C.blue }, { v: 1.5, label: '1,5', color: S.C.green }] }),
      caption: 'Các số hữu tỉ viết dưới nhiều dạng vẫn nằm đúng vị trí trên cùng một trục số.' },
    { title: 'Dạng 1: So sánh, sắp xếp', html: `<p>Đổi về cùng một dạng (phân số mẫu dương hoặc số thập phân). Dùng số trung gian khi thấy tiện: ví dụ {{13|12}} &gt; 1 &gt; {{11|12}}.</p>` },
    { title: 'Dạng 2: Tính giá trị biểu thức', html: `<p>Xác định thứ tự phép tính; tìm thừa số chung, số đối; luỹ thừa của tích/thương để rút gọn nhanh.</p>
      <p class="math">(0,25)<sup>5</sup> · 4<sup>5</sup> = (0,25 · 4)<sup>5</sup> = 1<sup>5</sup> = 1</p>` },
    { title: 'Dạng 3: Tìm x', html: `<p>Quy về dạng cơ bản: x + a = b; a · x = b; x<sup>n</sup> = c. Mỗi lần chuyển vế nhớ đổi dấu; khi chia hai vế cho a phải có a ≠ 0.</p>` },
    { title: 'Dạng 4: Toán thực tế', html: `<p>Đổi phần trăm ra phân số: p% = {{p|100}}. “Tìm {{m|n}} của a” → a · {{m|n}}; “biết {{m|n}} của một số là b” → b : {{m|n}}.</p>` }
  ],
  summary: 'Chương I: ℚ và trục số, so sánh, bốn phép tính, luỹ thừa (5 công thức), thứ tự phép tính, quy tắc dấu ngoặc và chuyển vế; áp dụng vào tính toán thực tế.',
  examples: [
    { title: 'So sánh bằng số trung gian', problem: 'So sánh {{2021|2020}} và {{2019|2020}}.', solution: '{{2021|2020}} &gt; 1 (tử lớn hơn mẫu), {{2019|2020}} &lt; 1. Vậy {{2021|2020}} &gt; {{2019|2020}}.' },
    { title: 'Biểu thức tổng hợp', problem: 'Tính: (−{{1|2}})<sup>3</sup> · 8 + {{3|5}} : (−{{3|10}}).', solution: '(−{{1|8}}) · 8 = −1; {{3|5}} · (−{{10|3}}) = −2. Tổng: −1 + (−2) = −3.' },
    { title: 'Phần trăm', problem: 'Một chiếc áo giá 250 000 đồng được giảm 12%. Hỏi giá sau khi giảm là bao nhiêu?', solution: 'Số tiền giảm: 250 000 · {{12|100}} = 30 000 (đồng).<br>Giá mới: 250 000 − 30 000 = <b>220 000 đồng</b>.' }
  ],
  exercises: [
    { question: 'Tìm x, biết: {{1|2}} − ({{2|3}}x − {{1|3}}) = {{2|3}}.', hints: ['Bỏ ngoặc: {{1|2}} − {{2|3}}x + {{1|3}} = {{2|3}}.', 'Chuyển vế: {{2|3}}x = {{1|2}} + {{1|3}} − {{2|3}} = {{1|6}}.'], solution: 'x = {{1|6}} : {{2|3}} = {{1|6}} · {{3|2}} = {{1|4}}.' },
    { question: 'Biết {{3|5}} số học sinh của lớp 7A là 21 em. Lớp 7A có bao nhiêu học sinh?', hints: ['Đây là bài toán tìm một số biết giá trị một phân số của nó.', 'Lấy 21 : {{3|5}}.'], solution: '21 : {{3|5}} = 21 · {{5|3}} = 35 (học sinh).' },
    { question: 'Tính nhanh: {{4<sup>5</sup> · 9<sup>4</sup>|2 · 6<sup>9</sup>}}.', hints: ['4<sup>5</sup> = 2<sup>10</sup>; 9<sup>4</sup> = 3<sup>8</sup>; 6<sup>9</sup> = 2<sup>9</sup> · 3<sup>9</sup>.', 'Mẫu = 2<sup>10</sup> · 3<sup>9</sup>.'], solution: '{{2<sup>10</sup> · 3<sup>8</sup>|2<sup>10</sup> · 3<sup>9</sup>}} = {{1|3}}.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Khẳng định nào sau đây đúng?', options: ['ℚ ⊂ ℤ', '−{{2|3}} ∈ ℤ', 'ℤ ⊂ ℚ', '0 ∉ ℚ'], answer: 2, explain: 'Mọi số nguyên a đều viết được dạng {{a|1}} nên ℤ ⊂ ℚ.' },
    { type: 'short', calc: 'Math.pow(-1/2, 3) * 8 + (3/5) / (-3/10)', q: 'Tính: (−{{1|2}})<sup>3</sup> · 8 + {{3|5}} : (−{{3|10}}).', answer: '-3', answerText: '−3', explain: '−1 + (−2) = −3.' },
    { type: 'short', calc: 'Math.pow(0.25, 5) * Math.pow(4, 5)', q: 'Tính: (0,25)<sup>5</sup> · 4<sup>5</sup>.', answer: '1', explain: '(0,25 · 4)<sup>5</sup> = 1<sup>5</sup> = 1.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: {{2021|2020}} &lt; {{2019|2020}}.', answer: false, explain: '{{2021|2020}} &gt; 1 &gt; {{2019|2020}}.' },
    { type: 'short', calc: '(1/2 + 1/3 - 2/3) / (2/3)', q: 'Tìm x, biết: {{1|2}} − ({{2|3}}x − {{1|3}}) = {{2|3}} (dạng a/b hoặc số thập phân).', answer: ['1/4', '0.25'], answerText: '1/4 (0,25)', explain: '{{2|3}}x = {{1|6}} ⇒ x = {{1|4}}.' },
    { type: 'short', calc: '250000 * (1 - 12/100)', q: 'Áo giá 250 000 đồng, giảm 12%. Giá sau giảm là bao nhiêu đồng?', unit: 'đồng', answer: '220000', answerText: '220 000', explain: 'Giảm 30 000 đồng; còn 220 000 đồng.' },
    { type: 'short', calc: '21 / (3/5)', q: 'Biết {{3|5}} số học sinh của một lớp là 21 em. Lớp đó có bao nhiêu học sinh?', unit: 'học sinh', answer: '35', explain: '21 : {{3|5}} = 35.' },
    { type: 'mcq', calc: 'Math.pow(4, 5) * Math.pow(9, 4) / (2 * Math.pow(6, 9))', q: 'Giá trị của {{4<sup>5</sup> · 9<sup>4</sup>|2 · 6<sup>9</sup>}} là:', options: ['{{1|3}}', '{{2|3}}', '3', '{{1|6}}'], answer: 0, explain: '{{2<sup>10</sup> · 3<sup>8</sup>|2<sup>10</sup> · 3<sup>9</sup>}} = {{1|3}}.' }
  ]
});
})();
