/* Toán 6 – Bài 8. Quan hệ chia hết và tính chất. Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('toan-6/bai-8', {
  objectives: [
    'Nhận biết quan hệ chia hết; dùng đúng kí hiệu ⋮ và ⋮̸.',
    'Hiểu khái niệm ước và bội; tìm được các ước, các bội của một số tự nhiên nhỏ.',
    'Vận dụng tính chất chia hết của một tổng, một hiệu để xét chia hết mà không cần tính tổng.'
  ],
  intro: 'Có 24 cái bánh, chia đều cho 6 bạn thì vừa hết, nhưng chia cho 5 bạn thì còn thừa. Bài này giới thiệu ngôn ngữ “chia hết”, “ước”, “bội” để nói về những tình huống như vậy.',
  steps: [
    { title: 'Quan hệ chia hết', html: `<p>Với a, b ∈ ℕ, b ≠ 0: nếu có số tự nhiên k sao cho <span class="math">a = k · b</span> thì a <b>chia hết</b> cho b, kí hiệu <span class="math">a ⋮ b</span>.</p>
      <p>Nếu a không chia hết cho b, ta viết <span class="math">a ⋮̸ b</span>. Ví dụ: 24 ⋮ 6 (vì 24 = 4 · 6); 24 ⋮̸ 5.</p>` },
    { title: 'Ước và bội', html: `<p>Nếu a ⋮ b thì a là <b>bội</b> của b, còn b là <b>ước</b> của a. Kí hiệu: Ư(a) là tập hợp các ước của a; B(b) là tập hợp các bội của b.</p>
      <ul><li><b>Tìm ước của a:</b> chia a lần lượt cho 1, 2, 3, …, a; số nào chia hết thì là ước. Ư(12) = {1; 2; 3; 4; 6; 12}.</li>
      <li><b>Tìm bội của b (b ≠ 0):</b> nhân b lần lượt với 0, 1, 2, 3, … B(4) = {0; 4; 8; 12; 16; …}.</li></ul>` },
    { title: 'Tính chất chia hết của một tổng', html: `<p>Nếu <b>tất cả</b> các số hạng đều chia hết cho m thì tổng chia hết cho m:</p>
      <p class="math">a ⋮ m và b ⋮ m ⇒ (a + b) ⋮ m</p>
      <p>Tương tự với hiệu (a ≥ b): a ⋮ m và b ⋮ m ⇒ (a − b) ⋮ m. Ví dụ: 35 ⋮ 7, 70 ⋮ 7 nên (35 + 70) ⋮ 7.</p>` },
    { title: 'Khi có một số hạng không chia hết', html: `<p>Nếu <b>chỉ có đúng một</b> số hạng không chia hết cho m, các số hạng còn lại đều chia hết cho m, thì tổng <b>không</b> chia hết cho m.</p>
      <p>Ví dụ: 40 ⋮ 4, 12 ⋮ 4, 7 ⋮̸ 4 ⇒ (40 + 12 + 7) ⋮̸ 4.</p>
      <p>Chú ý: nếu có hai số hạng không chia hết thì chưa kết luận được: 3 ⋮̸ 4, 5 ⋮̸ 4 nhưng 3 + 5 = 8 ⋮ 4.</p>` }
  ],
  summary: 'a ⋮ b (b ≠ 0) khi a = k · b; khi đó a là bội của b, b là ước của a. Tổng (hiệu) các số chia hết cho m thì chia hết cho m; nếu chỉ một số hạng không chia hết cho m thì tổng không chia hết cho m.',
  examples: [
    { title: 'Tìm ước', problem: 'Tìm Ư(18).', solution: '18 chia hết cho 1, 2, 3, 6, 9, 18. Vậy Ư(18) = <b>{1; 2; 3; 6; 9; 18}</b>.' },
    { title: 'Tìm bội có điều kiện', problem: 'Tìm các bội của 6 nhỏ hơn 40.', solution: 'Nhân 6 với 0, 1, 2, …: 0; 6; 12; 18; 24; 30; 36 (6 · 7 = 42 &gt; 40). Vậy có <b>{0; 6; 12; 18; 24; 30; 36}</b>.' },
    { title: 'Xét tính chia hết không cần tính', problem: 'Không tính tổng, cho biết 120 + 45 + 36 có chia hết cho 3 không? Có chia hết cho 5 không?', solution: '120, 45, 36 đều chia hết cho 3 nên tổng <b>chia hết cho 3</b>.<br>120 ⋮ 5, 45 ⋮ 5 nhưng 36 ⋮̸ 5 (chỉ một số hạng) nên tổng <b>không chia hết cho 5</b>.' }
  ],
  exercises: [
    { question: 'Tìm Ư(20).', hints: ['Thử chia 20 cho 1, 2, 3, 4, 5, …', 'Các ước đi theo cặp: 1 · 20, 2 · 10, 4 · 5.'], solution: 'Ư(20) = <b>{1; 2; 4; 5; 10; 20}</b>.' },
    { question: 'Tìm các số x ∈ B(7) sao cho 20 &lt; x &lt; 50.', hints: ['Liệt kê các bội của 7: 0; 7; 14; 21; …', 'Chọn các số lớn hơn 20 và nhỏ hơn 50.'], solution: 'x ∈ <b>{21; 28; 35; 42; 49}</b>.' },
    { question: 'Hiệu 84 − 36 có chia hết cho 6 không? Vì sao?', hints: ['Xét từng số: 84 có chia hết cho 6 không? 36 thì sao?', 'Dùng tính chất chia hết của một hiệu.'], solution: '84 = 6 · 14 và 36 = 6 · 6 đều chia hết cho 6 nên <b>(84 − 36) ⋮ 6</b>.' }
  ],
  quiz: [
    { type: 'short', q: 'Tập hợp Ư(15) có bao nhiêu phần tử?', answer: '4', calc: '[1,3,5,15].length', explain: 'Ư(15) = {1; 3; 5; 15}.' },
    { type: 'mcq', q: 'Số nào là bội của 9?', options: ['39', '63', '92', '19'], answer: 1, calc: '63', explain: '63 = 9 · 7.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: 0 là bội của mọi số tự nhiên khác 0.', answer: true, explain: '0 = 0 · b nên 0 chia hết cho mọi b ≠ 0.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: 1 là ước của mọi số tự nhiên.', answer: true, explain: 'a = a · 1 với mọi a.' },
    { type: 'mcq', q: 'Tổng nào chia hết cho 8?', options: ['16 + 40 + 5', '24 + 32 + 64', '8 + 12', '48 + 18'], answer: 1, explain: '24, 32, 64 đều chia hết cho 8 nên tổng chia hết cho 8.' },
    { type: 'short', q: 'Số lớn nhất có hai chữ số là bội của 13 là số nào?', answer: '91', calc: 'Math.floor(99/13)*13', explain: '13 · 7 = 91, 13 · 8 = 104 có ba chữ số.' },
    { type: 'mcq', q: 'Có bao nhiêu bội của 5 nằm trong khoảng từ 1 đến 50 (kể cả 50)?', options: ['9', '10', '11', '5'], answer: 1, calc: 'Math.floor(50/5)', explain: '5; 10; …; 50: có 50 : 5 = 10 số.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Vì 7 ⋮̸ 4 và 9 ⋮̸ 4 nên (7 + 9) ⋮̸ 4.', answer: false, explain: '7 + 9 = 16 ⋮ 4. Có hai số hạng không chia hết thì chưa kết luận được.' }
  ]
});
