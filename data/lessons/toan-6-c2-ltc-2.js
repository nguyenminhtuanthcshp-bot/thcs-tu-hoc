/* Toán 6 – Chương II. Luyện tập chung (sau Bài 12). Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('toan-6/c2-ltc-2', {
  objectives: [
    'Tìm thành thạo ƯCLN, BCNN của hai hoặc ba số.',
    'Phân biệt khi nào dùng ƯCLN, khi nào dùng BCNN trong bài toán thực tế.',
    'Vận dụng ƯCLN để rút gọn phân số, BCNN để quy đồng mẫu.'
  ],
  intro: 'Luyện tập Bài 11 và Bài 12. Câu hỏi quan trọng nhất: bài toán này cần ƯCLN hay BCNN?',
  steps: [
    { title: 'So sánh cách tìm', html: `<table class="tbl"><tr><th></th><th>ƯCLN</th><th>BCNN</th></tr><tr><td>Chọn thừa số</td><td>Chung</td><td>Chung và riêng</td></tr><tr><td>Số mũ</td><td>Nhỏ nhất</td><td>Lớn nhất</td></tr><tr><td>Kết quả</td><td>≤ số nhỏ nhất</td><td>≥ số lớn nhất</td></tr></table>` },
    { title: 'Nhận dạng bài toán', html: `<ul><li>Chia đều nhiều loại đồ vật thành nhiều phần nhất, cắt thành miếng lớn nhất ⇒ <b>ƯCLN</b>.</li><li>Sự việc lặp lại theo chu kì, gặp lại nhau sớm nhất, số nhỏ nhất chia hết cho các số ⇒ <b>BCNN</b>.</li></ul>` },
    { title: 'Mẹo kiểm tra', html: `<p>Với hai số a, b: <span class="math">ƯCLN(a, b) · BCNN(a, b) = a · b</span>. Ví dụ 12 và 18: 6 · 36 = 216 = 12 · 18 ✔.</p>` },
    { title: 'Bài toán có số dư', html: `<p>Nếu “chia cho 4, 5, 6 đều dư 1” thì số đó trừ đi 1 là bội chung của 4, 5, 6. Ta tìm bội chung rồi cộng thêm 1.</p>` }
  ],
  summary: 'ƯCLN: thừa số chung, mũ nhỏ nhất – dùng cho bài toán chia đều nhiều nhất. BCNN: mọi thừa số, mũ lớn nhất – dùng cho bài toán lặp lại, gặp nhau. ƯCLN · BCNN = a · b.',
  examples: [
    { title: 'Tìm cả hai', problem: 'Tìm ƯCLN và BCNN của 40 và 60.', solution: '40 = 2<sup>3</sup> · 5; 60 = 2<sup>2</sup> · 3 · 5. ƯCLN = 2<sup>2</sup> · 5 = <b>20</b>; BCNN = 2<sup>3</sup> · 3 · 5 = <b>120</b>. Kiểm tra: 20 · 120 = 2 400 = 40 · 60 ✔.' },
    { title: 'Bài toán có số dư', problem: 'Tìm số tự nhiên nhỏ nhất lớn hơn 1, khi chia cho 4, 5, 6 đều dư 1.', solution: 'Số cần tìm trừ 1 là bội chung khác 0 của 4, 5, 6. BCNN(4, 5, 6) = 60 ⇒ số cần tìm là <b>61</b>.' },
    { title: 'Nhận dạng', problem: 'Một mảnh vườn 48 m × 72 m được chia thành các ô vuông bằng nhau lớn nhất. Cạnh mỗi ô bao nhiêu mét, có bao nhiêu ô?', solution: 'Ô vuông lớn nhất ⇒ ƯCLN(48, 72) = 24 m. Số ô: (48 : 24) · (72 : 24) = 2 · 3 = <b>6 ô</b>.' }
  ],
  exercises: [
    { question: 'Tìm ƯCLN và BCNN của 28 và 42.', hints: ['28 = 2<sup>2</sup> · 7; 42 = 2 · 3 · 7.', 'ƯCLN lấy chung mũ nhỏ; BCNN lấy tất cả mũ lớn.'], solution: 'ƯCLN = 14; BCNN = 2<sup>2</sup> · 3 · 7 = <b>84</b>.' },
    { question: 'Hai bánh xe răng cưa ăn khớp: bánh A có 18 răng, bánh B có 24 răng. Sau khi bánh A quay ít nhất bao nhiêu vòng thì hai răng ban đầu lại khớp với nhau?', hints: ['Số răng đi qua điểm tiếp xúc phải là bội chung của 18 và 24.', 'BCNN(18, 24) = 72.'], solution: '72 : 18 = <b>4 vòng</b> (khi đó bánh B quay 3 vòng).' },
    { question: 'Số học sinh của một lớp khi xếp hàng 3, hàng 4, hàng 9 đều thừa 2 bạn. Biết số học sinh trong khoảng 30 đến 50. Tìm số học sinh.', hints: ['Số học sinh trừ 2 là bội chung của 3, 4, 9.', 'BCNN(3, 4, 9) = 36.'], solution: 'Số học sinh − 2 ∈ {0; 36; 72; …} ⇒ số học sinh = <b>38</b>.' }
  ],
  quiz: [
    { type: 'short', q: 'Tìm ƯCLN(36, 48).', answer: '12', calc: 'gcd(36,48)', explain: '2<sup>2</sup> · 3 = 12.' },
    { type: 'short', q: 'Tìm BCNN(36, 48).', answer: '144', calc: 'lcm(36,48)', explain: '2<sup>4</sup> · 3<sup>2</sup> = 144.' },
    { type: 'mcq', q: 'Biết ƯCLN(a, b) = 5 và a · b = 300. BCNN(a, b) bằng:', options: ['60', '1 500', '295', '305'], answer: 0, calc: '300/5', explain: 'BCNN = a · b : ƯCLN = 300 : 5 = 60.' },
    { type: 'mcq', q: 'Bài toán “Tìm số ngày ít nhất để ba tàu cùng cập cảng lần nữa” cần dùng:', options: ['ƯCLN', 'BCNN', 'Phép trừ', 'Luỹ thừa'], answer: 1, explain: 'Sự việc lặp lại theo chu kì ⇒ BCNN.' },
    { type: 'short', q: 'Tìm số tự nhiên nhỏ nhất khác 0 chia hết cho cả 8 và 14.', answer: '56', calc: 'lcm(8,14)', explain: 'BCNN(8, 14) = 56.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: ƯCLN(a, b) luôn nhỏ hơn hoặc bằng BCNN(a, b) (a, b ≠ 0).', answer: true, explain: 'ƯCLN ≤ min(a, b) ≤ max(a, b) ≤ BCNN.' },
    { type: 'short', q: 'Có 60 quả cam và 84 quả quýt chia đều vào các đĩa (mỗi đĩa có cả hai loại), nhiều đĩa nhất. Có bao nhiêu đĩa?', answer: '12', calc: 'gcd(60,84)', explain: 'ƯCLN(60, 84) = 12.' },
    { type: 'short', q: 'Tìm số nhỏ nhất lớn hơn 3 khi chia cho 5 và cho 7 đều dư 3.', answer: '38', calc: 'lcm(5,7)+3', explain: 'BCNN(5, 7) = 35; 35 + 3 = 38.' }
  ]
});
