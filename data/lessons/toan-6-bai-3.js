/* Toán 6 – Bài 3. Thứ tự trong tập hợp các số tự nhiên. Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('toan-6/bai-3', {
  objectives: [
    'Biểu diễn được số tự nhiên trên tia số.',
    'So sánh được hai số tự nhiên.',
    'Tìm được số liền trước, số liền sau của một số tự nhiên.',
    'Sử dụng đúng các kí hiệu &lt;, &gt;, ≤, ≥ và tính chất bắc cầu.'
  ],
  intro: 'Khi xếp hàng theo chiều cao, khi so điểm kiểm tra… ta đều đang “so sánh”. Bài học này giúp em so sánh các số tự nhiên thật nhanh và chính xác.',
  steps: [
    { title: 'Tia số', html: `<p>Vẽ một tia, gốc ghi số 0. Đặt liên tiếp các đoạn thẳng bằng nhau, ta được các điểm biểu diễn số 1, 2, 3, …</p>
      <p>Trên tia số (nằm ngang, chiều từ trái sang phải), điểm biểu diễn số nhỏ hơn nằm <b>bên trái</b> điểm biểu diễn số lớn hơn.</p>`,
      svg: THCS.svg.numberLine({ min: 0, max: 8, ray: true, width: 560, marks: [{ v: 2, label: 'a = 2' }, { v: 5, label: 'b = 5' }] }),
      caption: 'Tia số: điểm 2 nằm bên trái điểm 5 nên 2 &lt; 5.' },
    { title: 'So sánh hai số tự nhiên', html: `<p>Với hai số tự nhiên a, b khác nhau thì hoặc a &lt; b, hoặc a &gt; b.</p>
      <ul><li>Số nào có <b>nhiều chữ số hơn</b> thì lớn hơn: 1 000 &gt; 999.</li>
      <li>Nếu có <b>cùng số chữ số</b>: so sánh từng cặp chữ số cùng hàng, từ trái sang phải. Cặp đầu tiên khác nhau quyết định kết quả: 23 456 &lt; 23 465 (vì ở hàng chục 5 &lt; 6).</li></ul>` },
    { title: 'Số liền trước, số liền sau', html: `<ul><li>Số liền sau của a là <b>a + 1</b>. Số liền trước của a (a ≠ 0) là <b>a − 1</b>.</li>
      <li>Hai số tự nhiên liên tiếp hơn kém nhau 1 đơn vị.</li>
      <li>Số 0 là số tự nhiên nhỏ nhất và <b>không có số liền trước</b> (trong tập hợp số tự nhiên).</li>
      <li>Không có số tự nhiên lớn nhất: số nào cũng có số liền sau.</li></ul>` },
    { title: 'Kí hiệu ≤ và ≥', html: `<p><span class="math">a ≤ b</span> nghĩa là “a nhỏ hơn hoặc bằng b” (a &lt; b hoặc a = b).</p>
      <p><span class="math">a ≥ b</span> nghĩa là “a lớn hơn hoặc bằng b”.</p>
      <p>Ví dụ: A = {x ∈ ℕ | 12 ≤ x ≤ 15} = {12; 13; 14; 15} (có cả 12 và 15).</p>` },
    { title: 'Tính chất bắc cầu', html: `<p>Nếu <span class="math">a &lt; b</span> và <span class="math">b &lt; c</span> thì <span class="math">a &lt; c</span>.</p>
      <p>Ví dụ: Lan cao hơn Mai, Mai cao hơn Hoa thì Lan cao hơn Hoa. Tương tự: 15 &lt; 20 và 20 &lt; 31 nên 15 &lt; 31.</p>` }
  ],
  summary: 'So sánh số tự nhiên: nhiều chữ số hơn thì lớn hơn; cùng số chữ số thì so từ trái sang phải. Số liền sau của a là a + 1; số 0 không có số liền trước. a ≤ b nghĩa là a &lt; b hoặc a = b.',
  examples: [
    { title: 'So sánh', problem: 'So sánh: a) 99 999 và 100 000; b) 23 456 và 23 465.', solution: 'a) 99 999 có 5 chữ số, 100 000 có 6 chữ số nên 99 999 &lt; 100 000.<br>b) Cùng 5 chữ số; hàng chục nghìn, nghìn, trăm giống nhau; hàng chục 5 &lt; 6 nên 23 456 &lt; 23 465.' },
    { title: 'Ba số liên tiếp', problem: 'Điền vào chỗ trống để được ba số tự nhiên liên tiếp tăng dần: …; 101; …', solution: 'Số liền trước 101 là 100, số liền sau là 102. Ta có: 100; 101; 102.' },
    { title: 'Liệt kê theo điều kiện', problem: 'Viết tập hợp B = {x ∈ ℕ | 7 &lt; x ≤ 11} bằng cách liệt kê.', solution: 'x lớn hơn 7 (không lấy 7) và nhỏ hơn hoặc bằng 11 (lấy 11): B = {8; 9; 10; 11}.' }
  ],
  exercises: [
    { question: 'Sắp xếp các số sau theo thứ tự tăng dần: 5 042; 4 999; 5 240; 5 024.', hints: ['Các số đều có 4 chữ số. So sánh chữ số hàng nghìn trước.', 'Ba số có hàng nghìn là 5: tiếp tục so sánh hàng trăm, rồi hàng chục.'], solution: '4 999 &lt; 5 024 &lt; 5 042 &lt; 5 240.' },
    { question: 'Tìm các số tự nhiên x sao cho 25 &lt; x &lt; 29.', hints: ['Không lấy 25 và 29 vì dấu là “&lt;”.', 'Liệt kê các số nằm giữa 25 và 29.'], solution: 'x ∈ {26; 27; 28}.' },
    { question: 'Có bao nhiêu số tự nhiên x thoả mãn 10 ≤ x ≤ 100?', hints: ['Lấy cả 10 và 100.', 'Số các số tự nhiên liên tiếp từ a đến b là b − a + 1.'], solution: 'Có 100 − 10 + 1 = <b>91</b> số.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Số liền trước của 1 000 là:', options: ['1 001', '999', '990', '100'], answer: 1, explain: 'Số liền trước của a là a − 1: 1 000 − 1 = 999.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Số 0 có số liền trước trong tập hợp số tự nhiên.', answer: false, explain: '0 là số tự nhiên nhỏ nhất nên không có số tự nhiên liền trước.' },
    { type: 'short', q: 'Số liền sau của 2 099 là số nào?', answer: '2100', answerText: '2 100', explain: '2 099 + 1 = 2 100.' },
    { type: 'mcq', q: 'Khẳng định nào dưới đây đúng?', options: ['12 345 &gt; 12 354', '12 345 &lt; 12 354', '9 999 &gt; 10 000', '5 010 &lt; 5 001'], answer: 1, explain: 'So sánh hàng chục: 4 &lt; 5 nên 12 345 &lt; 12 354.' },
    { type: 'short', q: 'Tập hợp {x ∈ ℕ | 5 ≤ x &lt; 11} có bao nhiêu phần tử?', answer: '6', explain: 'Các phần tử: 5; 6; 7; 8; 9; 10 → 6 phần tử (lấy 5, không lấy 11).' },
    { type: 'mcq', q: 'Trên tia số nằm ngang (chiều từ trái sang phải), điểm biểu diễn số 7 nằm ở đâu so với điểm biểu diễn số 9?', options: ['Bên trái', 'Bên phải', 'Trùng nhau', 'Không xác định được'], answer: 0, explain: 'Số nhỏ hơn nằm bên trái số lớn hơn: 7 &lt; 9.' },
    { type: 'short', q: 'Viết số tự nhiên lớn nhất có ba chữ số khác nhau.', answer: '987', explain: 'Chọn các chữ số lớn nhất, khác nhau, xếp giảm dần: 9, 8, 7 → 987.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nếu a &lt; b và b &lt; 20 thì a &lt; 20.', answer: true, explain: 'Đây là tính chất bắc cầu.' }
  ]
});
