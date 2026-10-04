/* Toán 7 – Bài 4. Thứ tự thực hiện các phép tính. Quy tắc chuyển vế. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('toan-7/bai-4', {
  objectives: [
    'Thực hiện đúng thứ tự các phép tính trong biểu thức có hoặc không có dấu ngoặc.',
    'Vận dụng quy tắc dấu ngoặc để bỏ ngoặc và tính hợp lí với số hữu tỉ.',
    'Vận dụng quy tắc chuyển vế để tìm x trong các đẳng thức đơn giản.'
  ],
  intro: 'Cùng một dãy phép tính, làm sai thứ tự sẽ cho kết quả sai. Bài này nhắc lại “luật giao thông” của phép tính và thêm một công cụ mới: chuyển vế.',
  steps: [
    { title: 'Thứ tự thực hiện phép tính', html: `<p>Với số hữu tỉ, thứ tự giống như với số tự nhiên và số nguyên:</p>
      <ol><li>Biểu thức <b>không có ngoặc</b>: luỹ thừa → nhân, chia (từ trái sang phải) → cộng, trừ (từ trái sang phải).</li>
      <li>Biểu thức <b>có ngoặc</b>: làm trong ngoặc tròn ( ) → ngoặc vuông [ ] → ngoặc nhọn { }.</li></ol>
      <p>Ví dụ: 2 − {{1|2}} · 3<sup>2</sup> = 2 − {{1|2}} · 9 = 2 − {{9|2}} = −{{5|2}}.</p>` },
    { title: 'Quy tắc dấu ngoặc', html: `<p>Bỏ ngoặc có dấu “+” đằng trước: giữ nguyên dấu các số hạng trong ngoặc.</p>
      <p>Bỏ ngoặc có dấu “−” đằng trước: <b>đổi dấu</b> tất cả các số hạng trong ngoặc.</p>
      <p class="math">x − (y − z + t) = x − y + z − t</p>
      <p>Ngược lại, khi đưa các số hạng vào ngoặc có dấu “−” đằng trước thì cũng phải đổi dấu chúng.</p>` },
    { title: 'Quy tắc chuyển vế', html: `<p>Khi chuyển một số hạng từ vế này sang vế kia của một đẳng thức, ta phải <b>đổi dấu</b> số hạng đó: “+” thành “−” và “−” thành “+”.</p>
      <p class="math">x + a = b &nbsp;⇒&nbsp; x = b − a; &nbsp;&nbsp; x − a = b &nbsp;⇒&nbsp; x = b + a</p>
      <p>Có thể hình dung đẳng thức như chiếc cân thăng bằng: bớt cùng một lượng ở hai đĩa thì cân vẫn thăng bằng.</p>`,
      svg: S.draw({ w: 340, h: 150, items: [{ seg: [170, 130, 170, 50], width: 3 }, { poly: [[150, 132], [190, 132], [170, 118]], fill: S.C.muted }, { seg: [60, 50, 280, 50], width: 3 }, { seg: [80, 50, 60, 90] }, { seg: [80, 50, 100, 90] }, { seg: [260, 50, 240, 90] }, { seg: [260, 50, 280, 90] }, { poly: [[50, 90], [110, 90], [100, 102], [60, 102]], fill: S.C.blueL }, { poly: [[230, 90], [290, 90], [280, 102], [240, 102]], fill: S.C.orangeL }, { text: [80, 82, 'x + 3/4'], bold: true, color: S.C.blue, size: 14 }, { text: [260, 82, '2'], bold: true, color: S.C.orange, size: 15 }, { text: [170, 22, 'x + 3/4 = 2 ⇒ x = 2 − 3/4'], bold: true, size: 14 }] }),
      caption: 'Bớt 3/4 ở cả hai đĩa cân: x = 2 − 3/4 = 5/4.' },
    { title: 'Các bước tìm x', html: `<ol><li>Đưa các số hạng chứa x về một vế, các số đã biết về vế kia (nhớ đổi dấu khi chuyển vế).</li><li>Tính giá trị vế đã biết.</li><li>Nếu còn dạng a · x = b (a ≠ 0) thì x = b : a.</li><li>Thử lại bằng cách thay x vào đẳng thức ban đầu.</li></ol>
      <p>Ví dụ: {{2|3}}x − {{1|2}} = {{5|6}} ⇒ {{2|3}}x = {{5|6}} + {{1|2}} = {{4|3}} ⇒ x = {{4|3}} : {{2|3}} = 2.</p>` }
  ],
  summary: 'Luỹ thừa → nhân chia → cộng trừ; ngoặc ( ) → [ ] → { }. Bỏ ngoặc có dấu “−” thì đổi dấu mọi số hạng. Chuyển vế thì đổi dấu số hạng.',
  examples: [
    { title: 'Tính theo thứ tự', problem: 'Tính: {{3|4}} + {{1|4}} : (−{{1|2}})<sup>2</sup>.', solution: 'Luỹ thừa trước: (−{{1|2}})<sup>2</sup> = {{1|4}}.<br>Chia: {{1|4}} : {{1|4}} = 1.<br>Cộng: {{3|4}} + 1 = {{7|4}}.' },
    { title: 'Bỏ ngoặc để tính hợp lí', problem: 'Tính: ({{5|7}} − {{2|9}}) − ({{5|7}} + {{7|9}}).', solution: 'Bỏ ngoặc: {{5|7}} − {{2|9}} − {{5|7}} − {{7|9}} = ({{5|7}} − {{5|7}}) − ({{2|9}} + {{7|9}}) = 0 − 1 = −1.' },
    { title: 'Tìm x', problem: 'Tìm x, biết: x − {{2|5}} = −{{3|10}}.', solution: 'Chuyển vế: x = −{{3|10}} + {{2|5}} = −{{3|10}} + {{4|10}} = {{1|10}}.<br>Thử lại: {{1|10}} − {{4|10}} = −{{3|10}} ✓.' }
  ],
  exercises: [
    { question: 'Tính: [(−{{1|2}})<sup>2</sup> − 1] · {{4|3}}.', hints: ['Làm trong ngoặc vuông trước, bắt đầu từ luỹ thừa.', '(−{{1|2}})<sup>2</sup> = {{1|4}}; {{1|4}} − 1 = −{{3|4}}.'], solution: '(−{{3|4}}) · {{4|3}} = −1.' },
    { question: 'Tìm x, biết: {{3|4}} − x = {{1|6}}.', hints: ['Chuyển x sang vế phải và {{1|6}} sang vế trái (đổi dấu cả hai).', 'x = {{3|4}} − {{1|6}}; mẫu chung 12.'], solution: 'x = {{9|12}} − {{2|12}} = {{7|12}}.' },
    { question: 'Tìm x, biết: 2x + {{1|3}} = −{{5|3}}.', hints: ['Chuyển {{1|3}} sang vế phải: 2x = −{{5|3}} − {{1|3}}.', 'Tính được 2x = −2, rồi chia cho 2.'], solution: '2x = −{{6|3}} = −2 ⇒ x = −1. Thử lại: 2 · (−1) + {{1|3}} = −{{5|3}} ✓.' }
  ],
  quiz: [
    { type: 'short', calc: '2 - 1/2 * 9', q: 'Tính: 2 − {{1|2}} · 3<sup>2</sup> (dạng a/b hoặc số thập phân).', answer: ['-5/2', '-2.5'], answerText: '−5/2 (−2,5)', explain: 'Luỹ thừa trước: 3<sup>2</sup> = 9; nhân: {{9|2}}; trừ: 2 − {{9|2}} = −{{5|2}}.' },
    { type: 'mcq', q: 'Bỏ ngoặc biểu thức a − (b − c) ta được:', options: ['a − b − c', 'a + b − c', 'a − b + c', 'a + b + c'], answer: 2, explain: 'Trước ngoặc là dấu “−” nên đổi dấu cả b và −c: a − b + c.' },
    { type: 'short', calc: '1 - 3/5', requireSimplest: true, q: 'Tìm x, biết: x + {{3|5}} = 1 (dạng a/b tối giản).', answer: ['2/5'], answerText: '2/5', explain: 'x = 1 − {{3|5}} = {{2|5}}.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Từ x − 5 = 7 suy ra x = 7 − 5.', answer: false, explain: 'Chuyển −5 sang vế phải phải đổi thành +5: x = 7 + 5 = 12.' },
    { type: 'short', calc: '3/4 + (1/4) / Math.pow(-1/2, 2)', requireSimplest: true, q: 'Tính: {{3|4}} + {{1|4}} : (−{{1|2}})<sup>2</sup> (dạng a/b tối giản).', answer: ['7/4'], answerText: '7/4', explain: '(−{{1|2}})<sup>2</sup> = {{1|4}}; {{1|4}} : {{1|4}} = 1; {{3|4}} + 1 = {{7|4}}.' },
    { type: 'short', calc: '(5/6 + 1/2) / (2/3)', q: 'Tìm x, biết: {{2|3}}x − {{1|2}} = {{5|6}}.', answer: '2', explain: '{{2|3}}x = {{4|3}} ⇒ x = {{4|3}} : {{2|3}} = 2.' },
    { type: 'mcq', calc: '(5/7 - 2/9) - (5/7 + 7/9)', q: 'Giá trị của ({{5|7}} − {{2|9}}) − ({{5|7}} + {{7|9}}) là:', options: ['1', '−1', '{{10|7}}', '0'], answer: 1, explain: 'Bỏ ngoặc và nhóm: ({{5|7}} − {{5|7}}) − ({{2|9}} + {{7|9}}) = −1.' },
    { type: 'short', calc: '(-5/3 - 1/3) / 2', q: 'Tìm x, biết: 2x + {{1|3}} = −{{5|3}}.', answer: '-1', answerText: '−1', explain: '2x = −2 ⇒ x = −1.' }
  ]
});
})();
