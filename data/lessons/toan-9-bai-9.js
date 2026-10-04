/* Toán 9 – Bài 9. Biến đổi đơn giản và rút gọn biểu thức chứa căn thức bậc hai. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-9/bai-9', {
    objectives: [
      'Thực hiện được phép đưa thừa số ra ngoài dấu căn và đưa thừa số vào trong dấu căn.',
      'Thực hiện được phép khử mẫu của biểu thức lấy căn và trục căn thức ở mẫu.',
      'Rút gọn được biểu thức chứa căn thức bậc hai bằng cách phối hợp các phép biến đổi.'
    ],
    intro: 'Biểu thức √8 + √18 − √50 trông phức tạp, nhưng sau khi “đưa thừa số ra ngoài” thì chỉ còn 2√2 + 3√2 − 5√2 = 0.',
    steps: [
      { title: 'Đưa thừa số ra ngoài dấu căn', html: `<div class="box key">Với B ≥ 0: √(A<sup>2</sup>B) = |A|√B.</div><p>Ví dụ: √50 = √(25 · 2) = 5√2; √(12x<sup>2</sup>) = 2|x|√3.</p><p>Nhờ đó cộng/trừ được các <b>căn đồng dạng</b>: 2√3 + 5√3 = 7√3.</p>` },
      { title: 'Đưa thừa số vào trong dấu căn', html: `<p>Với A ≥ 0, B ≥ 0: A√B = √(A<sup>2</sup>B). Với A &lt; 0: A√B = −√(A<sup>2</sup>B).</p><p>Ví dụ: 3√5 = √45; dùng để so sánh: 3√5 = √45 &lt; √48 = 4√3.</p>` },
      { title: 'Khử mẫu của biểu thức lấy căn', html: `<p>Với A · B ≥ 0, B ≠ 0: √({{A|B}}) = {{√(AB)|&#124;B&#124;}}.</p><p>Ví dụ: √({{2|3}}) = √({{6|9}}) = {{√6|3}}.</p>` },
      { title: 'Trục căn thức ở mẫu', html: `<ul><li>{{A|√B}} = {{A√B|B}} (B &gt; 0). Ví dụ: {{6|√3}} = {{6√3|3}} = 2√3.</li><li>Dùng biểu thức liên hợp: {{1|√a − √b}} = {{√a + √b|a − b}}. Ví dụ: {{1|√3 − √2}} = √3 + √2.</li></ul>`,
        svg: S.flow({ items: [{ title: 'Mẫu √a ± √b', text: 'nhân liên hợp' }, { title: '(√a − √b)(√a + √b)', text: '= a − b' }, { title: 'Mẫu không còn căn', text: 'rút gọn' }] }) },
      { title: 'Rút gọn biểu thức', html: `<p>Thứ tự thường dùng: đưa thừa số ra ngoài → trục căn ở mẫu → cộng các căn đồng dạng.</p><p>Ví dụ: √20 − 3√45 + {{10|√5}} = 2√5 − 9√5 + 2√5 = −5√5.</p>` }
    ],
    summary: 'Đưa ra ngoài: √(A²B) = |A|√B. Đưa vào trong: A√B = √(A²B) (A ≥ 0). Khử mẫu, trục căn thức (nhân liên hợp) để mẫu không còn căn. Rút gọn bằng cách gom căn đồng dạng.',
    examples: [
      { title: 'Căn đồng dạng', problem: 'Rút gọn √8 + √18 − √50.', solution: '2√2 + 3√2 − 5√2 = 0.' },
      { title: 'Trục căn thức', problem: 'Trục căn thức ở mẫu: {{4|√5 + 1}}.', solution: '{{4(√5 − 1)|5 − 1}} = √5 − 1.' },
      { title: 'Biểu thức chứa biến', problem: 'Rút gọn A = {{x − 4|√x − 2}} với x ≥ 0, x ≠ 4.', solution: 'x − 4 = (√x − 2)(√x + 2) ⇒ A = √x + 2.' }
    ],
    exercises: [
      { question: 'Rút gọn 2√27 − √75 + √12.', hints: ['√27 = 3√3, √75 = 5√3, √12 = 2√3.', '6√3 − 5√3 + 2√3.'], solution: '3√3.' },
      { question: 'Trục căn thức: {{1|√3 − √2}} + {{1|√3 + √2}}.', hints: ['Mỗi phân thức có mẫu nhân liên hợp bằng 1.', '(√3 + √2) + (√3 − √2).'], solution: '2√3.' },
      { question: 'Tính giá trị A = {{x − 4|√x − 2}} tại x = 9.', hints: ['A = √x + 2.', '√9 = 3.'], solution: 'A = 5.' }
    ],
    quiz: [
      { type: 'short', calc: 'sqrt(8) + sqrt(18) - sqrt(50)', q: 'Tính √8 + √18 − √50.', answer: '0', explain: '2√2 + 3√2 − 5√2.' },
      { type: 'mcq', q: '√50 bằng:', options: ['25√2', '5√2', '2√5', '10√5'], answer: 1, explain: '√(25 · 2).' },
      { type: 'mcq', q: 'Trục căn thức: {{6|√3}} bằng:', options: ['2√3', '3√2', '6√3', '√2'], answer: 0, explain: '{{6√3|3}}.' },
      { type: 'short', calc: 'Math.sqrt(9) + 2', q: 'A = {{x − 4|√x − 2}}. Tính A tại x = 9.', answer: '5', explain: 'A = √x + 2.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: {{1|√3 − √2}} = √3 + √2.', answer: true, explain: 'Mẫu liên hợp bằng 3 − 2 = 1.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: 3√5 &gt; 4√3.', answer: false, explain: '√45 &lt; √48.' },
      { type: 'short', calc: 'round((2 * Math.sqrt(27) - Math.sqrt(75) + Math.sqrt(12)) / Math.sqrt(3), 6)', q: 'Rút gọn 2√27 − √75 + √12 = k√3. Tìm k.', answer: '3', explain: '6√3 − 5√3 + 2√3.' },
      { type: 'short', calc: 'round((Math.sqrt(20) - 3 * Math.sqrt(45) + 10 / Math.sqrt(5)) / Math.sqrt(5), 6)', q: 'Rút gọn √20 − 3√45 + {{10|√5}} = k√5. Tìm k.', answer: '-5', answerText: '−5', explain: '2√5 − 9√5 + 2√5.' }
    ]
  });
})();
