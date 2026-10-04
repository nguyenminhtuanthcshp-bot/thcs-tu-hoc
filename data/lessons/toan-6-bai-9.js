/* Toán 6 – Bài 9. Dấu hiệu chia hết. Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('toan-6/bai-9', {
  objectives: [
    'Nhận biết và vận dụng dấu hiệu chia hết cho 2, cho 5.',
    'Nhận biết và vận dụng dấu hiệu chia hết cho 9, cho 3.',
    'Kết hợp các dấu hiệu để tìm chữ số chưa biết và giải bài toán thực tế.'
  ],
  intro: 'Số 123 456 789 có chia hết cho 3 không? Không cần đặt phép chia dài, chỉ cần nhìn vào các chữ số là biết. Đó là sức mạnh của dấu hiệu chia hết.',
  steps: [
    { title: 'Dấu hiệu chia hết cho 2', html: `<p>Các số có chữ số tận cùng là <b>0, 2, 4, 6, 8</b> (số chẵn) thì chia hết cho 2, và chỉ những số đó mới chia hết cho 2.</p><p>Ví dụ: 3 458 ⋮ 2; 1 237 ⋮̸ 2.</p>` },
    { title: 'Dấu hiệu chia hết cho 5', html: `<p>Các số có chữ số tận cùng là <b>0 hoặc 5</b> thì chia hết cho 5, và chỉ những số đó.</p><p>Chia hết cho <b>cả 2 và 5</b> ⇔ tận cùng là <b>0</b>. Ví dụ 2 340.</p>` },
    { title: 'Dấu hiệu chia hết cho 9', html: `<p>Số có <b>tổng các chữ số chia hết cho 9</b> thì chia hết cho 9, và chỉ những số đó.</p><p>Ví dụ: 7 452 có tổng 7 + 4 + 5 + 2 = 18 ⋮ 9 nên 7 452 ⋮ 9.</p>` },
    { title: 'Dấu hiệu chia hết cho 3', html: `<p>Số có <b>tổng các chữ số chia hết cho 3</b> thì chia hết cho 3, và chỉ những số đó.</p><p>Chia hết cho 9 thì chắc chắn chia hết cho 3; nhưng chia hết cho 3 chưa chắc chia hết cho 9 (ví dụ 12).</p><p>123 456 789 có tổng các chữ số 45 ⋮ 3 (và ⋮ 9) nên chia hết cho 3 và cho 9.</p>` },
    { title: 'Tìm chữ số chưa biết', html: `<p>Ví dụ: tìm chữ số * để <span class="math">4*7</span> chia hết cho 9. Tổng 4 + * + 7 = 11 + * phải chia hết cho 9. Vì * là chữ số (0 đến 9) nên 11 + * = 18 ⇒ * = 7. Số cần tìm: 477.</p>` }
  ],
  summary: 'Chia hết cho 2: tận cùng chẵn; cho 5: tận cùng 0 hoặc 5; cho cả 2 và 5: tận cùng 0. Chia hết cho 9 (cho 3): tổng các chữ số chia hết cho 9 (cho 3).',
  examples: [
    { title: 'Phân loại số', problem: 'Trong các số 1 350; 2 471; 8 604; 945, số nào chia hết cho 2, cho 5, cho 3, cho 9?', solution: '• Cho 2: 1 350; 8 604. • Cho 5: 1 350; 945.<br>• Tổng chữ số: 1 350 → 9; 2 471 → 14; 8 604 → 18; 945 → 18.<br>• Cho 3 và cho 9: 1 350; 8 604; 945. 2 471 không chia hết cho 3.' },
    { title: 'Tìm chữ số', problem: 'Tìm chữ số a để số 25a chia hết cho cả 2 và 3.', solution: 'Chia hết cho 2: a ∈ {0; 2; 4; 6; 8}. Tổng 2 + 5 + a = 7 + a ⋮ 3 ⇒ a ∈ {2; 5; 8}. Kết hợp: <b>a = 2 hoặc a = 8</b> (252 và 258).' },
    { title: 'Thực tế', problem: 'Có 135 quyển vở. Có thể chia đều cho 9 tổ được không? Cho 2 tổ được không?', solution: 'Tổng các chữ số 1 + 3 + 5 = 9 ⋮ 9 nên <b>chia đều cho 9 tổ được</b> (mỗi tổ 15 quyển). 135 tận cùng là 5, lẻ, nên <b>không chia đều cho 2 tổ</b>.' }
  ],
  exercises: [
    { question: 'Viết số tự nhiên nhỏ nhất có ba chữ số chia hết cho cả 2, 3, 5 và 9.', hints: ['Chia hết cho 2 và 5 ⇒ tận cùng 0.', 'Tổng các chữ số phải chia hết cho 9; thử các số 1_0 nhỏ nhất.'], solution: 'Dạng a b 0 với a + b ⋮ 9, nhỏ nhất là <b>180</b>.' },
    { question: 'Tìm chữ số x để 7x5 chia hết cho 3 nhưng không chia hết cho 9.', hints: ['Tổng các chữ số: 7 + x + 5 = 12 + x.', '12 + x chia hết cho 3 nhưng không chia hết cho 9.'], solution: '12 + x ∈ {12; 15; 21} (bỏ 18) ⇒ <b>x ∈ {0; 3; 9}</b>.' },
    { question: 'Không làm phép chia, tìm số dư khi chia 2 027 cho 5.', hints: ['Chỉ cần xét chữ số tận cùng.', '2 025 chia hết cho 5.'], solution: '2 027 = 2 025 + 2 nên số dư là <b>2</b>.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Số nào chia hết cho 5?', options: ['1 234', '5 051', '3 470', '7 008'], answer: 2, explain: 'Tận cùng là 0 hoặc 5: 3 470.' },
    { type: 'mcq', q: 'Số nào chia hết cho 9?', options: ['1 233', '4 527', '8 102', '3 336'], answer: 1, explain: '4 + 5 + 2 + 7 = 18 ⋮ 9.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mọi số chia hết cho 3 đều chia hết cho 9.', answer: false, explain: 'Ví dụ 6 ⋮ 3 nhưng 6 ⋮̸ 9.' },
    { type: 'short', q: 'Tìm chữ số * để số 38* chia hết cho cả 2 và 5.', answer: '0', explain: 'Chia hết cho cả 2 và 5 ⇔ tận cùng là 0.' },
    { type: 'short', q: 'Tìm chữ số a khác 0 để số 5a4 chia hết cho 9.', answer: '9', calc: '18-5-4', explain: '5 + a + 4 = 9 + a phải chia hết cho 9 ⇒ a = 0 hoặc a = 9. Vì a ≠ 0 nên a = 9 (số 594).' },
    { type: 'short', q: 'Số dư khi chia 1 234 cho 9 là bao nhiêu?', answer: '1', calc: '1234%9', explain: 'Tổng các chữ số 10, chia 9 dư 1 nên 1 234 chia 9 dư 1.' },
    { type: 'mcq', q: 'Có bao nhiêu số có hai chữ số chia hết cho 5?', options: ['18', '19', '20', '17'], answer: 0, calc: '(95-10)/5+1', explain: '10; 15; …; 95: (95 − 10) : 5 + 1 = 18 số.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Số 2 010 chia hết cho cả 2, 3 và 5.', answer: true, explain: 'Tận cùng 0 (chia hết cho 2 và 5), tổng chữ số 3 ⋮ 3.' }
  ]
});
