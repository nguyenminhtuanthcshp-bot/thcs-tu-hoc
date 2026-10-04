/* Toán 7 – Chương VI. Luyện tập chung (sau Bài 21). Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('toan-7/c6-ltc-1', {
  objectives: [
    'Vận dụng tính chất cơ bản của tỉ lệ thức để tìm số hạng chưa biết.',
    'Vận dụng dãy tỉ số bằng nhau để giải bài toán tìm hai, ba số.',
    'Giải bài toán thực tế về chia tỉ lệ, bản đồ, pha trộn.'
  ],
  intro: 'Luyện tập Bài 20 và Bài 21. Mẹo: luôn gọi ẩn, viết dãy tỉ số, rồi tìm “giá trị một phần”.',
  steps: [
    { title: 'Nhắc lại', html: `<ul><li>{{a|b}} = {{c|d}} ⇔ a · d = b · c.</li><li>{{a|b}} = {{c|d}} = {{a ± c|b ± d}}.</li></ul>` },
    { title: 'Dạng tìm x trong tỉ lệ thức', html: `<p>Nhân chéo, đưa về dạng a · x = b rồi chia. Ví dụ {{x − 1|3}} = {{8|6}} ⇒ 6(x − 1) = 24 ⇒ x − 1 = 4 ⇒ x = 5.</p>` },
    { title: 'Dạng biết tổng/hiệu và tỉ lệ', html: `<p>Gọi các số là x, y, z; viết {{x|a}} = {{y|b}} = {{z|c}}; cộng (trừ) để dùng dữ kiện tổng (hiệu); tìm giá trị chung k; suy ra x = ak, y = bk, z = ck.</p>` },
    { title: 'Dạng “biết tích”', html: `<p>Nếu {{x|a}} = {{y|b}} = k thì x = ak, y = bk. Khi biết x · y = P: ab · k<sup>2</sup> = P ⇒ tìm k (có thể có hai giá trị đối nhau).</p>
      <p>Ví dụ: {{x|2}} = {{y|3}}, xy = 24 ⇒ 6k<sup>2</sup> = 24 ⇒ k = ±2 ⇒ (x; y) = (4; 6) hoặc (−4; −6).</p>` }
  ],
  summary: 'Tỉ lệ thức: nhân chéo. Dãy tỉ số: tìm giá trị chung k từ tổng/hiệu. Biết tích: đặt x = ak, y = bk rồi tìm k.',
  examples: [
    { title: 'Tìm x', problem: 'Tìm x: {{x − 1|3}} = {{8|6}}.', solution: '6(x − 1) = 24 ⇒ x = 5.' },
    { title: 'Chia tiền lãi', problem: 'Ba người góp vốn 30, 40, 50 triệu đồng, lãi 24 triệu chia theo tỉ lệ vốn. Mỗi người nhận bao nhiêu?', solution: 'Tỉ lệ 3 : 4 : 5; một phần = 24 : 12 = 2 ⇒ 6; 8; 10 triệu đồng.' },
    { title: 'Biết tích', problem: 'Tìm x, y dương biết {{x|2}} = {{y|3}} và xy = 24.', solution: 'k = 2 ⇒ x = 4, y = 6.' }
  ],
  exercises: [
    { question: 'Tìm x: 0,4 : x = 1,2 : 4,5.', hints: ['0,4 · 4,5 = 1,2 · x.', 'x = 1,8 : 1,2.'], solution: 'x = 1,5.' },
    { question: 'Tìm x, y, z biết {{x|3}} = {{y|4}} = {{z|6}} và x + y − z = 5.', hints: ['{{x + y − z|3 + 4 − 6}} = 5.', 'k = 5.'], solution: 'x = 15, y = 20, z = 30.' },
    { question: 'Pha nước muối: 9 g muối cho 1 lít nước. Cần bao nhiêu gam muối cho 2,5 lít?', hints: ['{{9|1}} = {{x|2,5}}.', 'x = 9 · 2,5.'], solution: '22,5 g.' }
  ],
  quiz: [
    { type: 'short', calc: '8 * 3 / 6 + 1', q: 'Tìm x: {{x − 1|3}} = {{8|6}}.', answer: '5', explain: 'x − 1 = 4.' },
    { type: 'short', calc: '0.4 * 4.5 / 1.2', q: 'Tìm x: 0,4 : x = 1,2 : 4,5.', answer: '1.5', answerText: '1,5', explain: 'x = 1,8 : 1,2.' },
    { type: 'short', calc: '24 / 12 * 5', q: 'Lãi 24 triệu chia theo tỉ lệ 3 : 4 : 5. Người góp nhiều nhất nhận bao nhiêu triệu?', unit: 'triệu đồng', answer: '10', explain: '2 · 5 = 10.' },
    { type: 'short', calc: '5 * 6', q: '{{x|3}} = {{y|4}} = {{z|6}} và x + y − z = 5. Tìm z.', answer: '30', explain: 'k = 5 ⇒ z = 30.' },
    { type: 'short', calc: '9 * 2.5', q: '9 g muối cho 1 lít nước. Cần bao nhiêu gam muối cho 2,5 lít?', unit: 'g', answer: '22.5', answerText: '22,5', explain: '9 · 2,5.' },
    { type: 'short', calc: '2 * Math.sqrt(24 / 6)', q: 'Tìm x dương biết {{x|2}} = {{y|3}} và xy = 24.', answer: '4', explain: 'k<sup>2</sup> = 4, k = 2 ⇒ x = 4.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Từ {{x|2}} = {{y|3}} suy ra 3x = 2y.', answer: true, explain: 'Nhân chéo.' },
    { type: 'mcq', q: 'Nếu {{x|a}} = {{y|b}} = k thì:', options: ['x = a + k', 'x = ak', 'x = {{a|k}}', 'x = {{k|a}}'], answer: 1, explain: 'Từ {{x|a}} = k.' }
  ]
});
