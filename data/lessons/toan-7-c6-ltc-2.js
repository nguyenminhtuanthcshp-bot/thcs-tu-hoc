/* Toán 7 – Chương VI. Luyện tập chung (sau Bài 23). Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('toan-7/c6-ltc-2', {
  objectives: [
    'Phân biệt hai đại lượng tỉ lệ thuận và tỉ lệ nghịch trong tình huống thực tế.',
    'Giải bài toán tỉ lệ thuận, tỉ lệ nghịch bằng tỉ lệ thức hoặc dãy tỉ số bằng nhau.',
    'Giải bài toán chia một số thành các phần tỉ lệ thuận hoặc tỉ lệ nghịch.'
  ],
  intro: 'Luyện tập Bài 22 và Bài 23. Câu hỏi quan trọng nhất: khi đại lượng này gấp lên 2 lần, đại lượng kia gấp lên 2 lần hay giảm đi 2 lần?',
  steps: [
    { title: 'So sánh tỉ lệ thuận – tỉ lệ nghịch', html: `<table class="tbl"><tr><th></th><th>Tỉ lệ thuận</th><th>Tỉ lệ nghịch</th></tr><tr><td>Công thức</td><td>y = kx</td><td>xy = a</td></tr><tr><td>Không đổi</td><td>Thương {{y|x}}</td><td>Tích x · y</td></tr><tr><td>x gấp m lần</td><td>y gấp m lần</td><td>y giảm m lần</td></tr><tr><td>Tỉ số</td><td>{{x₁|x₂}} = {{y₁|y₂}}</td><td>{{x₁|x₂}} = {{y₂|y₁}}</td></tr></table>` },
    { title: 'Nhận dạng qua bảng', html: `<p>Kiểm tra thương hoặc tích các cặp giá trị:</p><table class="tbl"><tr><th>x</th><td>2</td><td>4</td><td>5</td></tr><tr><th>y</th><td>10</td><td>5</td><td>4</td></tr></table><p>Tích xy luôn bằng 20 ⇒ y tỉ lệ nghịch với x.</p>` },
    { title: 'Nhận dạng qua tình huống', html: `<ul><li>Số sản phẩm – số công nhân (cùng thời gian): thuận.</li><li>Thời gian hoàn thành – số công nhân (cùng công việc): nghịch.</li><li>Số tiền – số lượng hàng (cùng giá): thuận.</li><li>Số hàng mua được – giá mỗi món (cùng số tiền): nghịch.</li></ul>` },
    { title: 'Chia tỉ lệ nghịch', html: `<p>Chia N tỉ lệ nghịch với a, b, c ⇔ chia tỉ lệ thuận với {{1|a}}, {{1|b}}, {{1|c}}. Có thể nhân các nghịch đảo với BCNN(a, b, c) để được số nguyên.</p>` }
  ],
  summary: 'Thuận: thương không đổi, cùng tăng. Nghịch: tích không đổi, cái này tăng cái kia giảm. Chia nghịch với a, b, c = chia thuận với nghịch đảo.',
  examples: [
    { title: 'Nghịch: mua hàng', problem: 'Với số tiền có sẵn, mua được 15 quyển vở giá 6 000 đồng. Nếu giá mỗi quyển 9 000 đồng thì mua được bao nhiêu quyển?', solution: '15 · 6 000 = x · 9 000 ⇒ x = 10 quyển.' },
    { title: 'Thuận: sản phẩm', problem: 'Máy A trong 3 giờ làm 450 sản phẩm. Trong 5 giờ làm bao nhiêu?', solution: '450 : 3 · 5 = 750 sản phẩm.' },
    { title: 'Chia nghịch', problem: 'Chia 52 thành ba phần tỉ lệ nghịch với 2, 3, 4.', solution: 'Tỉ lệ thuận với {{1|2}}, {{1|3}}, {{1|4}}, nhân 12: 6, 4, 3 (tổng 13). 52 : 13 = 4 ⇒ 24, 16, 12.' }
  ],
  exercises: [
    { question: 'Cho bảng: x = 1, 2, 3; y = 6, 12, 18. y tỉ lệ thuận hay nghịch với x? Hệ số?', hints: ['Tính {{y|x}}.', 'Thương đều bằng 6.'], solution: 'Tỉ lệ thuận, k = 6.' },
    { question: 'Một ô tô chạy 3 giờ với vận tốc 50 km/h. Quay về với vận tốc 60 km/h thì mất bao lâu?', hints: ['Quãng đường không đổi.', 'v · t không đổi.'], solution: '150 : 60 = 2,5 giờ.' },
    { question: 'Ba bạn chạy cùng quãng đường hết 10, 12, 15 phút. Vận tốc tỉ lệ với các số nào?', hints: ['Vận tốc tỉ lệ nghịch với thời gian.', 'Tỉ lệ thuận với {{1|10}}, {{1|12}}, {{1|15}}; nhân 60.'], solution: 'Tỉ lệ với 6 : 5 : 4.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Bảng x = 2, 4, 5; y = 10, 5, 4 cho thấy:', options: ['y tỉ lệ thuận với x', 'y tỉ lệ nghịch với x', 'không tỉ lệ', 'y = x + 8'], answer: 1, explain: 'Tích luôn bằng 20.' },
    { type: 'short', calc: '15 * 6000 / 9000', q: 'Mua được 15 quyển vở giá 6 000 đồng. Cùng số tiền, vở giá 9 000 đồng thì mua được bao nhiêu quyển?', answer: '10', explain: '90 000 : 9 000.' },
    { type: 'short', calc: '450 / 3 * 5', q: 'Máy làm 450 sản phẩm trong 3 giờ. Trong 5 giờ làm bao nhiêu?', answer: '750', explain: '150 · 5.' },
    { type: 'short', calc: '52 / 13 * 6', q: 'Chia 52 thành ba phần tỉ lệ nghịch với 2, 3, 4. Phần lớn nhất bằng bao nhiêu?', answer: '24', explain: 'Tỉ lệ 6 : 4 : 3.' },
    { type: 'short', calc: '3 * 50 / 60', q: 'Đi 3 giờ với 50 km/h. Quay về với 60 km/h mất bao nhiêu giờ?', unit: 'giờ', answer: '2.5', answerText: '2,5', explain: '150 : 60.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Cùng một công việc, số công nhân và thời gian hoàn thành là hai đại lượng tỉ lệ thuận.', answer: false, explain: 'Tỉ lệ nghịch.' },
    { type: 'short', calc: '6', q: 'x = 1, 2, 3 và y = 6, 12, 18. Hệ số tỉ lệ thuận k bằng bao nhiêu?', answer: '6', explain: '{{y|x}} = 6.' },
    { type: 'mcq', q: 'Ba bạn chạy cùng quãng đường hết 10, 12, 15 phút. Vận tốc của họ tỉ lệ với:', options: ['10 : 12 : 15', '6 : 5 : 4', '4 : 5 : 6', '1 : 1 : 1'], answer: 1, explain: 'Tỉ lệ nghịch với thời gian.' }
  ]
});
