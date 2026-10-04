/* Toán 7 – Bài tập cuối chương II. Số thực. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('toan-7/c2-on-tap', {
  objectives: [
    'Hệ thống kiến thức chương II: số thập phân vô hạn tuần hoàn, số vô tỉ, căn bậc hai số học, tập hợp số thực.',
    'Giải thành thạo các dạng: chuyển đổi, so sánh, tính toán, tìm x có căn và giá trị tuyệt đối.',
    'Vận dụng làm tròn số và căn bậc hai vào các bài toán thực tế.'
  ],
  intro: 'Ôn tập chương II. Hãy nhớ sơ đồ bao hàm: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ, còn 𝕀 là phần “còn lại” của ℝ.',
  steps: [
    { title: 'Sơ đồ các tập hợp số', html: `<p>Mỗi tập hợp nằm trong tập hợp lớn hơn; số vô tỉ nằm trong ℝ nhưng ngoài ℚ.</p>`,
      svg: S.draw({ w: 440, h: 220, items: [{ poly: [[10, 10], [430, 10], [430, 210], [10, 210]], fill: '#f5f3ff', color: S.C.purple }, { poly: [[25, 35], [300, 35], [300, 195], [25, 195]], fill: S.C.blueL, color: S.C.blue }, { poly: [[40, 65], [210, 65], [210, 180], [40, 180]], fill: S.C.greenL, color: S.C.green }, { poly: [[55, 100], [140, 100], [140, 165], [55, 165]], fill: S.C.orangeL, color: S.C.orange }, { text: [415, 30, 'ℝ'], bold: true, color: S.C.purple, anchor: 'end', size: 18 }, { text: [285, 55, 'ℚ'], bold: true, color: S.C.blue, anchor: 'end', size: 18 }, { text: [195, 85, 'ℤ'], bold: true, color: S.C.green, anchor: 'end', size: 18 }, { text: [128, 120, 'ℕ'], bold: true, color: S.C.orange, anchor: 'end', size: 18 }, { text: [97, 150, '0; 5'], size: 13 }, { text: [175, 150, '−3'], size: 13 }, { text: [255, 120, '−2/3'], size: 13 }, { text: [255, 150, '0,(3)'], size: 13 }, { text: [365, 90, '𝕀'], bold: true, color: S.C.pink, size: 18 }, { text: [365, 130, '√2; π'], size: 13 }, { text: [365, 160, '−√5'], size: 13 }] }),
      caption: 'ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ; các số vô tỉ (𝕀) nằm trong ℝ nhưng ngoài ℚ.' },
    { title: 'Các kiến thức cần nhớ', html: `<ul><li>Phân số tối giản mẫu dương: mẫu chỉ có ước 2, 5 → thập phân hữu hạn; ngược lại → vô hạn tuần hoàn.</li><li>√a (a ≥ 0): số không âm có bình phương bằng a.</li><li>|a| = a (a ≥ 0), |a| = −a (a &lt; 0).</li><li>0 ≤ a &lt; b ⇔ √a &lt; √b.</li></ul>` },
    { title: 'Dạng bài tìm x', html: `<ul><li>x<sup>2</sup> = a (a &gt; 0) ⇒ x = √a hoặc x = −√a.</li><li>√x = a (a ≥ 0) ⇒ x = a<sup>2</sup>.</li><li>|x| = a (a &gt; 0) ⇒ x = ±a.</li></ul><p>Ví dụ: x<sup>2</sup> = 3 ⇒ x = √3 hoặc x = −√3; √x = 5 ⇒ x = 25.</p>` },
    { title: 'Bài toán thực tế', html: `<p>Căn bậc hai thường xuất hiện khi biết diện tích hình vuông cần tìm cạnh; làm tròn giúp đưa ra con số dùng được trong thực tế (mua vật liệu, cắt vải…). Khi mua vật liệu, thường làm tròn <b>lên</b> để đủ dùng.</p>` }
  ],
  summary: 'Chương II: thập phân hữu hạn/tuần hoàn (hữu tỉ), vô hạn không tuần hoàn (vô tỉ); √a, |a|; ℝ lấp đầy trục số; các dạng tìm x với x², √x, |x|; làm tròn trong thực tế.',
  examples: [
    { title: 'Tìm x có căn', problem: 'Tìm x, biết: √x − 3 = 1.', solution: '√x = 4 ⇒ x = 16.' },
    { title: 'So sánh', problem: 'So sánh √26 + 1 và 6.', solution: '√26 &gt; √25 = 5 nên √26 + 1 &gt; 6.' },
    { title: 'Làm tròn thực tế', problem: 'Cần rào xung quanh một mảnh đất hình vuông diện tích 130 m². Cần mua ít nhất bao nhiêu mét lưới (làm tròn đến mét)?', solution: 'Cạnh = √130 ≈ 11,40 m; chu vi ≈ 45,6 m. Để đủ rào cần mua <b>46 m</b> (làm tròn lên).' }
  ],
  exercises: [
    { question: 'Tìm x, biết: x<sup>2</sup> = {{16|49}}.', hints: ['{{16|49}} = ({{4|7}})<sup>2</sup>.', 'Nhớ nghiệm âm.'], solution: 'x = {{4|7}} hoặc x = −{{4|7}}.' },
    { question: 'Tính: √0,81 · √100 − √(2<sup>4</sup>).', hints: ['√0,81 = 0,9; √100 = 10.', '√(2<sup>4</sup>) = √16 = 4.'], solution: '0,9 · 10 − 4 = 5.' },
    { question: 'Chứng tỏ 0,(3) + 0,(6) = 1.', hints: ['0,(3) = {{1|3}}.', '0,(6) = {{2|3}}.'], solution: '{{1|3}} + {{2|3}} = 1. (Cũng có nghĩa 0,(9) = 1.)' }
  ],
  quiz: [
    { type: 'short', calc: 'Math.pow(3 + 1, 2)', q: 'Tìm x, biết √x − 3 = 1.', answer: '16', explain: '√x = 4 ⇒ x = 16.' },
    { type: 'mcq', q: 'Khẳng định nào sai?', options: ['ℤ ⊂ ℚ', 'ℚ ⊂ ℝ', '√2 ∈ ℚ', 'π ∈ ℝ'], answer: 2, explain: '√2 là số vô tỉ nên √2 ∉ ℚ.' },
    { type: 'short', calc: 'Math.sqrt(0.81) * Math.sqrt(100) - Math.sqrt(Math.pow(2, 4))', q: 'Tính: √0,81 · √100 − √(2<sup>4</sup>).', answer: '5', explain: '9 − 4 = 5.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: √26 + 1 &gt; 6.', answer: true, explain: '√26 &gt; 5.' },
    { type: 'short', calc: 'Math.ceil(4 * Math.sqrt(130))', q: 'Mảnh đất hình vuông diện tích 130 m². Cần mua ít nhất bao nhiêu mét lưới (số nguyên mét) để rào quanh?', unit: 'm', answer: '46', explain: '4 · √130 ≈ 45,6 → cần 46 m.' },
    { type: 'short', calc: 'Math.sqrt(16/49)', requireSimplest: true, q: 'Tìm x dương, biết x<sup>2</sup> = {{16|49}} (dạng a/b tối giản).', answer: ['4/7'], answerText: '4/7', explain: 'x = {{4|7}} (loại −{{4|7}} vì âm).' },
    { type: 'mcq', q: 'Số nào sau đây bằng 0,(9)?', options: ['0,9', '0,99', '1', '{{9|10}}'], answer: 2, explain: '0,(9) = 3 · 0,(3) = 3 · {{1|3}} = 1.' },
    { type: 'short', calc: 'Math.abs(-7) - Math.abs(3)', q: 'Tính: |−7| − |3|.', answer: '4', explain: '7 − 3 = 4.' }
  ]
});
})();
