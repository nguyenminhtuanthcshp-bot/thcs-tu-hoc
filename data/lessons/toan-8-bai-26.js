/* Toán 8 – Bài 26. Giải bài toán bằng cách lập phương trình. Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('toan-8/bai-26', {
  objectives: [
    'Mô tả được các bước giải bài toán bằng cách lập phương trình.',
    'Chọn ẩn, đặt điều kiện cho ẩn và biểu diễn các đại lượng chưa biết qua ẩn.',
    'Giải quyết được một số bài toán thực tiễn gắn với phương trình bậc nhất (chuyển động, năng suất, phần trăm, hình học…).'
  ],
  intro: 'Phương trình là “chiếc cầu” nối lời văn của bài toán với phép tính. Chỉ cần dịch đúng lời văn thành phương trình, phần còn lại chỉ là giải phương trình bậc nhất.',
  steps: [
    { title: 'Ba bước giải', html: `<ol><li><b>Lập phương trình:</b> chọn ẩn và đặt điều kiện; biểu diễn các đại lượng chưa biết theo ẩn và các đại lượng đã biết; lập phương trình biểu thị mối quan hệ.</li><li><b>Giải phương trình.</b></li><li><b>Trả lời:</b> kiểm tra nghiệm có thoả điều kiện của ẩn không rồi kết luận.</li></ol>` },
    { title: 'Bảng phân tích', html: `<p>Với bài toán chuyển động, năng suất… nên lập bảng:</p>
      <table class="tbl"><tr><th></th><th>Vận tốc (km/h)</th><th>Thời gian (h)</th><th>Quãng đường (km)</th></tr><tr><td>Xe máy</td><td>x</td><td>2</td><td>2x</td></tr><tr><td>Ô tô</td><td>x + 20</td><td>1,5</td><td>1,5(x + 20)</td></tr></table>
      <p>Hai xe đi cùng quãng đường ⇒ 2x = 1,5(x + 20).</p>` },
    { title: 'Điều kiện của ẩn', html: `<ul><li>Số người, số sản phẩm: số tự nhiên.</li><li>Vận tốc, độ dài, thời gian: số dương.</li><li>Chữ số: từ 0 đến 9.</li></ul>
      <div class="box warn">Đừng quên đối chiếu điều kiện: nghiệm x = 2,5 không thể là số học sinh!</div>` },
    { title: 'Các dạng thường gặp', html: `<ul><li>Chuyển động: s = v · t.</li><li>Năng suất: khối lượng công việc = năng suất × thời gian.</li><li>Phần trăm: giá sau giảm a% = giá gốc × (1 − a%).</li><li>Hình học: chu vi, diện tích theo ẩn.</li></ul>` }
  ],
  summary: 'Chọn ẩn + điều kiện → biểu diễn đại lượng → lập phương trình → giải → đối chiếu điều kiện → trả lời.',
  examples: [
    { title: 'Chuyển động', problem: 'Một xe máy đi từ A đến B hết 2 giờ, ô tô đi cùng quãng đường hết 1,5 giờ. Vận tốc ô tô lớn hơn xe máy 20 km/h. Tính quãng đường AB.', solution: 'Gọi vận tốc xe máy là x (km/h), x &gt; 0. Ta có 2x = 1,5(x + 20) ⇔ 0,5x = 30 ⇔ x = 60. Quãng đường AB = 2 · 60 = 120 km.' },
    { title: 'Tuổi', problem: 'Năm nay tuổi mẹ gấp 3 lần tuổi con. Sau 12 năm nữa, tuổi mẹ gấp 2 lần tuổi con. Tính tuổi con năm nay.', solution: 'Gọi tuổi con là x (x nguyên dương). 3x + 12 = 2(x + 12) ⇔ x = 12. Con 12 tuổi, mẹ 36 tuổi.' },
    { title: 'Phần trăm', problem: 'Một chiếc áo sau khi giảm giá 20% còn 240 000 đồng. Hỏi giá ban đầu?', solution: 'Gọi giá ban đầu là x (đồng), x &gt; 0. 0,8x = 240 000 ⇔ x = 300 000 đồng.' }
  ],
  exercises: [
    { question: 'Tổng hai số là 50, số lớn hơn số bé 8. Tìm hai số.', hints: ['Gọi số bé là x, số lớn là x + 8.', 'x + x + 8 = 50.'], solution: 'Số bé 21, số lớn 29.' },
    { question: 'Hình chữ nhật có chiều dài hơn chiều rộng 5 m và chu vi 50 m. Tính diện tích.', hints: ['Gọi chiều rộng x (m), x &gt; 0; chiều dài x + 5.', '2(x + x + 5) = 50 ⇔ x = 10.'], solution: 'Chiều rộng 10 m, chiều dài 15 m, diện tích 150 m<sup>2</sup>.' },
    { question: 'Một lớp có 40 học sinh, số nữ nhiều hơn số nam 4 bạn. Tính số nam.', hints: ['Gọi số nam là x, số nữ x + 4.', '2x + 4 = 40.'], solution: '18 nam, 22 nữ.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Bước đầu tiên khi giải bài toán bằng cách lập phương trình là:', options: ['Giải phương trình', 'Chọn ẩn và đặt điều kiện cho ẩn', 'Trả lời', 'Vẽ đồ thị'], answer: 1, explain: 'Chọn ẩn, đặt điều kiện.' },
    { type: 'short', calc: '2 * 60', q: 'Xe máy đi A → B hết 2 giờ, ô tô hết 1,5 giờ, ô tô nhanh hơn 20 km/h. Quãng đường AB dài bao nhiêu km?', unit: 'km', answer: '120', explain: '2x = 1,5(x + 20) ⇒ x = 60.' },
    { type: 'short', calc: '12', q: 'Tuổi mẹ gấp 3 lần tuổi con; 12 năm sau gấp 2 lần. Con bao nhiêu tuổi?', unit: 'tuổi', answer: '12', explain: '3x + 12 = 2(x + 12).' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nếu ẩn là số học sinh thì nghiệm x = 12,5 được chấp nhận.', answer: false, explain: 'Số học sinh phải là số tự nhiên.' },
    { type: 'short', calc: '240000 / 0.8', q: 'Áo giảm 20% còn 240 000 đồng. Giá ban đầu là bao nhiêu đồng?', unit: 'đồng', answer: '300000', explain: '0,8x = 240 000.' },
    { type: 'short', calc: '10 * 15', q: 'Hình chữ nhật dài hơn rộng 5 m, chu vi 50 m. Diện tích là bao nhiêu m²?', unit: 'm²', answer: '150', explain: 'Rộng 10, dài 15.' },
    { type: 'mcq', q: 'Tổng hai số là 50, số lớn hơn số bé 8. Gọi số bé là x, phương trình là:', options: ['x + 8 = 50', '2x + 8 = 50', '2x − 8 = 50', 'x(x + 8) = 50'], answer: 1, explain: 'x + (x + 8) = 50.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Sau khi giải phương trình cần đối chiếu nghiệm với điều kiện của ẩn trước khi trả lời.', answer: true, explain: 'Bước 3.' }
  ]
});
