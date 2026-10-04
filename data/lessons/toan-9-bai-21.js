/* Toán 9 – Bài 21. Giải bài toán bằng cách lập phương trình. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-9/bai-21', {
    objectives: [
      'Nắm vững các bước giải bài toán bằng cách lập phương trình (bậc hai).',
      'Lập được phương trình bậc hai từ các bài toán về số, hình học, chuyển động, năng suất.',
      'Đối chiếu điều kiện của ẩn để chọn nghiệm phù hợp và trả lời bài toán.'
    ],
    intro: 'Nhiều bài toán thực tế – tính kích thước mảnh đất, vận tốc xe, số sản phẩm mỗi ngày – dẫn đến phương trình bậc hai. Giải xong phương trình chưa phải là xong bài toán: còn phải chọn nghiệm hợp lí.',
    steps: [
      { title: 'Ba bước giải', html: `<p>Quy trình quen thuộc từ lớp 8, nay phương trình thu được thường là bậc hai.</p>`,
        svg: S.flow({ items: [{ title: 'Lập phương trình', text: 'chọn ẩn, đặt điều kiện, biểu diễn các đại lượng' }, { title: 'Giải phương trình', text: 'dùng Δ, Δ\' hoặc nhẩm nghiệm' }, { title: 'Trả lời', text: 'đối chiếu điều kiện, kết luận' }], w: 600, size: 14 }), caption: 'Các bước giải bài toán bằng cách lập phương trình.' },
      { title: 'Bài toán hình học', html: `<p>Mảnh đất hình chữ nhật chu vi 34 m, diện tích 60 m². Gọi chiều rộng là x (0 &lt; x &lt; 8,5) thì chiều dài 17 − x và x(17 − x) = 60 ⇔ x² − 17x + 60 = 0 ⇔ x = 5 hoặc x = 12. Chọn x = 5: kích thước 5 m × 12 m.</p>`,
        svg: S.geo({ w: 320, h: 170, P: { A: [40, 30], B: [280, 30], C: [280, 130], D: [40, 130] }, seg: ['AB', 'BC', 'CD', 'DA'], fill: [['ABCD', C.greenL]], text: [[160, 158, '17 − x', C.ink, true, 14], [22, 85, 'x', C.ink, true, 14], [160, 86, 'S = 60 m²', C.green, true, 15]], dots: false, hide: ['A', 'B', 'C', 'D'] }), caption: 'Chiều rộng x, chiều dài 17 − x.' },
      { title: 'Bài toán chuyển động', html: `<p>Quãng đường AB dài 120 km. Xe thứ nhất đi nhanh hơn xe thứ hai 10 km/h nên đến sớm hơn 1 giờ. Gọi vận tốc xe thứ hai là x (km/h, x &gt; 0):</p><p style="text-align:center">{{120|x}} − {{120|x + 10}} = 1 ⇔ x² + 10x − 1200 = 0 ⇔ x = 30 (nhận) hoặc x = −40 (loại).</p>` },
      { title: 'Bài toán năng suất', html: `<p>Một tổ dự định làm 360 sản phẩm trong một số ngày. Mỗi ngày làm thêm 6 sản phẩm nên xong sớm 2 ngày. Gọi số sản phẩm dự định mỗi ngày là x (x nguyên dương): {{360|x}} − {{360|x + 6}} = 2 ⇔ x² + 6x − 1080 = 0 ⇔ x = 30.</p><p><b>Mẹo</b>: lập bảng (dự định / thực tế) với các cột “năng suất – thời gian – khối lượng” để không nhầm.</p>` }
    ],
    summary: 'Chọn ẩn và đặt điều kiện → biểu diễn các đại lượng → lập phương trình → giải → đối chiếu điều kiện → trả lời. Luôn loại nghiệm âm hoặc không nguyên khi ẩn là độ dài, vận tốc, số sản phẩm…',
    examples: [
      { title: 'Bài toán về số', problem: 'Tìm hai số tự nhiên liên tiếp có tích bằng 132.', solution: 'x(x + 1) = 132 ⇔ x² + x − 132 = 0 ⇔ x = 11 (nhận) hoặc x = −12 (loại). Hai số: 11 và 12.' },
      { title: 'Lối đi quanh vườn', problem: 'Vườn hình chữ nhật 20 m × 15 m. Người ta làm lối đi rộng đều x m bên trong, dọc theo bốn cạnh; phần còn lại có diện tích 204 m². Tính x.', solution: '(20 − 2x)(15 − 2x) = 204 ⇔ 4x² − 70x + 96 = 0 ⇔ 2x² − 35x + 48 = 0 ⇔ x = 1,5 hoặc x = 16 (loại vì 15 − 2x &gt; 0). Lối đi rộng 1,5 m.' },
      { title: 'Ca nô', problem: 'Một ca nô xuôi dòng 45 km rồi ngược dòng 45 km hết tổng cộng 8 giờ; vận tốc dòng nước là 3 km/h. Tính vận tốc ca nô khi nước yên lặng.', solution: 'Gọi vận tốc là x (km/h, x &gt; 3): {{45|x + 3}} + {{45|x − 3}} = 8 ⇔ 90x = 8(x² − 9) ⇔ 4x² − 45x − 36 = 0. Δ = 2025 + 576 = 2601 = 51² ⇒ x = 12 (nhận) hoặc x = −{{3|4}} (loại). Vận tốc ca nô là 12 km/h.' }
    ],
    exercises: [
      { question: 'Một hình chữ nhật có chiều dài hơn chiều rộng 4 cm và diện tích 96 cm². Tính chu vi.', hints: ['x(x + 4) = 96.', 'x = 8.'], solution: 'Kích thước 8 × 12, chu vi 40 cm.' },
      { question: 'Một người đi xe đạp 36 km. Nếu tăng vận tốc thêm 3 km/h thì đến sớm hơn 1 giờ. Tính vận tốc dự định.', hints: ['{{36|x}} − {{36|x + 3}} = 1.', 'x² + 3x − 108 = 0.'], solution: 'x = 9 km/h.' },
      { question: 'Tìm số tự nhiên có hai chữ số, biết chữ số hàng chục hơn chữ số hàng đơn vị 2 và tích của số đó với tổng hai chữ số của nó bằng 252.', hints: ['Gọi chữ số hàng đơn vị là y (y nguyên, 0 ≤ y ≤ 7): số đó là 11y + 20, tổng hai chữ số là 2y + 2.', '(11y + 20)(2y + 2) = 252 ⇔ 11y² + 31y − 106 = 0.'], solution: 'y = 2 (nhận), nghiệm còn lại âm (loại). Số cần tìm là 42.' }
    ],
    quiz: [
      { type: 'short', calc: '(17 - Math.sqrt(289 - 240)) / 2', q: 'Hình chữ nhật chu vi 34 m, diện tích 60 m². Chiều rộng (m)?', unit: 'm', answer: '5', explain: 'x² − 17x + 60 = 0.' },
      { type: 'short', calc: '(-10 + Math.sqrt(100 + 4800)) / 2', q: 'AB = 120 km; xe I nhanh hơn xe II 10 km/h, đến sớm hơn 1 giờ. Vận tốc xe II (km/h)?', unit: 'km/h', answer: '30', explain: 'x² + 10x − 1200 = 0.' },
      { type: 'short', calc: '(-1 + Math.sqrt(1 + 528)) / 2', q: 'Số nhỏ trong hai số tự nhiên liên tiếp có tích 132 là?', answer: '11', explain: 'x² + x − 132 = 0.' },
      { type: 'short', calc: '(35 - Math.sqrt(35 * 35 - 8 * 48)) / 4', q: 'Vườn 20 m × 15 m, lối đi rộng x m dọc 4 cạnh bên trong, phần còn lại 204 m². Tìm x (m).', unit: 'm', answer: '1.5', explain: '2x² − 35x + 48 = 0.' },
      { type: 'short', calc: '(-3 + Math.sqrt(9 + 432)) / 2', q: 'Đi 36 km; nếu tăng vận tốc thêm 3 km/h thì đến sớm 1 giờ. Vận tốc dự định (km/h)?', unit: 'km/h', answer: '9', explain: 'x² + 3x − 108 = 0.' },
      { type: 'mcq', q: 'Gọi chiều rộng là x (m), hình chữ nhật dài hơn rộng 4 m và diện tích 96 m². Phương trình là:', options: ['x² + 4x + 96 = 0', 'x² + 4x − 96 = 0', 'x² − 4x − 96 = 0', '2x + 4 = 96'], answer: 1, explain: 'x(x + 4) = 96.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khi giải bài toán bằng cách lập phương trình, mọi nghiệm của phương trình đều là đáp số của bài toán.', answer: false, explain: 'Phải đối chiếu điều kiện của ẩn.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nếu vận tốc riêng của ca nô là x và vận tốc dòng nước là 3 km/h thì vận tốc ngược dòng là x − 3 (km/h).', answer: true, explain: 'Ngược dòng bị nước cản.' }
    ]
  });
})();
