/* Toán 7 – Bài 7. Tập hợp các số thực. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, u = 90, ox = 200, oy = 150;
function X(v) { return ox + v * u; }
THCS.registerLesson('toan-7/bai-7', {
  objectives: [
    'Nhận biết tập hợp số thực ℝ gồm số hữu tỉ và số vô tỉ; biểu diễn được số thực trên trục số.',
    'So sánh được hai số thực; hiểu và tính được số đối, giá trị tuyệt đối của một số thực.',
    'Thực hiện được phép tính với số thực, làm tròn kết quả khi cần.'
  ],
  intro: 'Gộp tất cả số hữu tỉ và số vô tỉ lại, ta được tập hợp các số thực. Mỗi điểm trên trục số đều ứng với đúng một số thực – trục số giờ đây được “lấp đầy”.',
  steps: [
    { title: 'Tập hợp số thực ℝ', html: `<p>Số hữu tỉ và số vô tỉ được gọi chung là <b>số thực</b>. Tập hợp các số thực kí hiệu là <b>ℝ</b>.</p>
      <p class="math">ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ; &nbsp; 𝕀 ⊂ ℝ</p>
      <p>Mỗi số thực là một số thập phân hữu hạn, vô hạn tuần hoàn (số hữu tỉ) hoặc vô hạn không tuần hoàn (số vô tỉ).</p>` },
    { title: 'Biểu diễn √2 trên trục số', html: `<p>Dựng hình vuông cạnh 1 trên đoạn [0; 1]. Đường chéo OB có độ dài √2. Quay compa tâm O, bán kính OB, cắt trục số tại điểm P: điểm P biểu diễn số √2.</p>
      <p>Mọi số thực đều biểu diễn được bởi một điểm trên trục số, và mỗi điểm trên trục số biểu diễn một số thực.</p>`,
      svg: S.draw({ w: 460, h: 200, items: [{ seg: [20, oy, 440, oy], width: 2 }, { poly: [[X(0), oy], [X(1), oy], [X(1), oy - u], [X(0), oy - u]], fill: S.C.blueL, color: S.C.blue }, { seg: [X(0), oy, X(1), oy - u], color: S.C.orange, width: 2.5 }, { arc: [X(0), oy, X(2), oy, X(1), oy - u], r: Math.SQRT2 * u, color: S.C.orange, dash: true }, { pt: [X(-1), oy, '−1', 0, 24] }, { pt: [X(0), oy, 'O', -4, 24] }, { pt: [X(1), oy, '1', 0, 24] }, { pt: [X(2), oy, '2', 0, 24] }, { pt: [X(Math.SQRT2), oy, 'P', 6, -10], color: S.C.orange }, { text: [X(Math.SQRT2), oy + 40, '√2'], bold: true, color: S.C.orange, size: 16 }, { pt: [X(1), oy - u, 'B', 10, -6] }] }),
      caption: 'OP = OB = √2 ≈ 1,414: điểm P biểu diễn số vô tỉ √2.' },
    { title: 'So sánh số thực', html: `<p>Với hai số thực a, b bất kì, luôn có a &lt; b, a = b hoặc a &gt; b. Trên trục số (nằm ngang), số nhỏ hơn nằm bên trái.</p>
      <p>Cách so sánh: viết dưới dạng thập phân rồi so sánh từng hàng. Ví dụ √2 = 1,414… &lt; 1,42 ; −π = −3,14… &lt; −3.</p>
      <p>Với a, b không âm: a &lt; b ⇔ √a &lt; √b. Ví dụ √7 &lt; √8 &lt; 3 = √9.</p>`,
      svg: S.numberLine({ min: -4, max: 3, div: 1, width: 560, marks: [{ v: -Math.PI, label: '−π', color: S.C.purple }, { v: -1.5, label: '−1,5', color: S.C.blue }, { v: Math.SQRT2, label: '√2', color: S.C.orange }, { v: Math.sqrt(7), label: '√7', color: S.C.green }] }),
      caption: 'Số hữu tỉ và số vô tỉ cùng nằm trên một trục số.' },
    { title: 'Số đối và giá trị tuyệt đối', html: `<p>Số đối của số thực a là −a (a + (−a) = 0). Ví dụ số đối của √3 là −√3.</p>
      <p><b>Giá trị tuyệt đối</b> của a, kí hiệu |a|, là khoảng cách từ điểm a đến gốc O trên trục số:</p>
      <p class="math">|a| = a nếu a ≥ 0; &nbsp; |a| = −a nếu a &lt; 0</p>
      <p>Ví dụ: |−2,5| = 2,5; |√5| = √5; |1 − √2| = √2 − 1 (vì 1 &lt; √2). Luôn có |a| ≥ 0.</p>` },
    { title: 'Tính toán với số thực', html: `<p>Các phép tính và tính chất trên ℝ giống như trên ℚ. Khi có số vô tỉ, có thể giữ nguyên dạng căn hoặc làm tròn để có giá trị gần đúng.</p>
      <p>Ví dụ: 2√3 + 5√3 = 7√3; &nbsp; π · 2<sup>2</sup> ≈ 3,14 · 4 = 12,56.</p>` }
  ],
  summary: 'ℝ = số hữu tỉ ∪ số vô tỉ, lấp đầy trục số. So sánh qua dạng thập phân; √a &lt; √b khi 0 ≤ a &lt; b. |a| là khoảng cách từ a đến 0, luôn không âm.',
  examples: [
    { title: 'So sánh', problem: 'So sánh: a) √11 và 3,3; b) −√5 và −2,3.', solution: 'a) √11 = 3,3166… &gt; 3,3.<br>b) √5 = 2,236… &lt; 2,3 nên −√5 &gt; −2,3.' },
    { title: 'Giá trị tuyệt đối', problem: 'Tìm x, biết |x| = 3,5.', solution: 'Hai điểm cách O một khoảng 3,5 là 3,5 và −3,5. Vậy x = 3,5 hoặc x = −3,5.' },
    { title: 'Sắp xếp', problem: 'Sắp xếp tăng dần: √3; 1,7; −√2; 0; {{7|4}}.', solution: '√3 ≈ 1,732; {{7|4}} = 1,75; −√2 ≈ −1,414.<br>Tăng dần: −√2; 0; 1,7; √3; {{7|4}}.' }
  ],
  exercises: [
    { question: 'Tính: |−{{3|4}}| + |0,25| − |−1|.', hints: ['|−{{3|4}}| = {{3|4}}; |0,25| = 0,25; |−1| = 1.', 'Cộng trừ các số không âm vừa tìm.'], solution: '{{3|4}} + {{1|4}} − 1 = 0.' },
    { question: 'Tìm x, biết |x − 1| = 2.', hints: ['x − 1 = 2 hoặc x − 1 = −2.', 'Giải hai trường hợp.'], solution: 'x = 3 hoặc x = −1.' },
    { question: 'Tính diện tích hình tròn bán kính 3 cm (lấy π ≈ 3,14; làm tròn đến hàng phần mười).', hints: ['S = π · r<sup>2</sup>.', '3,14 · 9 = ?'], solution: 'S ≈ 3,14 · 9 = 28,26 ≈ 28,3 (cm²).' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mọi số vô tỉ đều là số thực.', answer: true, explain: 'ℝ gồm số hữu tỉ và số vô tỉ nên 𝕀 ⊂ ℝ.' },
    { type: 'short', calc: 'Math.abs(-2.5)', q: 'Tính: |−2,5|.', answer: '2.5', answerText: '2,5', explain: '−2,5 &lt; 0 nên |−2,5| = 2,5.' },
    { type: 'mcq', q: 'Khẳng định nào đúng?', options: ['√11 &lt; 3,3', '√11 &gt; 3,3', '√11 = 3,3', '√11 &lt; 3'], answer: 1, explain: '√11 ≈ 3,317 &gt; 3,3.' },
    { type: 'short', calc: 'Math.abs(-3/4) + Math.abs(0.25) - Math.abs(-1)', q: 'Tính: |−{{3|4}}| + |0,25| − |−1|.', answer: '0', explain: '{{3|4}} + {{1|4}} − 1 = 0.' },
    { type: 'mcq', q: 'Số đối của −√3 là:', options: ['√3', '−√3', '{{1|√3}}', '3'], answer: 0, explain: '−√3 + √3 = 0.' },
    { type: 'short', calc: 'Math.max(1 + 2, 1 - 2)', q: 'Tìm số x dương thoả mãn |x − 1| = 2.', answer: '3', explain: 'x − 1 = 2 hoặc −2 nên x = 3 hoặc x = −1; số dương là 3.' },
    { type: 'short', calc: 'round(3.14 * 9, 1)', q: 'Diện tích hình tròn bán kính 3 cm (π ≈ 3,14), làm tròn đến hàng phần mười, là bao nhiêu cm²?', unit: 'cm²', answer: '28.3', answerText: '28,3', explain: '3,14 · 9 = 28,26 ≈ 28,3.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: |1 − √2| = 1 − √2.', answer: false, explain: '1 − √2 &lt; 0 nên |1 − √2| = √2 − 1.' }
  ]
});
})();
