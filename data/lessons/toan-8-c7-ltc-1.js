/* Toán 8 – Luyện tập chung (sau Bài 26). Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('toan-8/c7-ltc-1', {
  objectives: [
    'Giải thành thạo phương trình bậc nhất một ẩn và phương trình đưa được về dạng ax + b = 0.',
    'Nhận biết phương trình vô nghiệm, phương trình nghiệm đúng với mọi x.',
    'Giải bài toán thực tế bằng cách lập phương trình, có đối chiếu điều kiện của ẩn.'
  ],
  intro: 'Luyện tập kết hợp kĩ năng giải phương trình và kĩ năng “dịch” lời văn thành phương trình.',
  steps: [
    { title: 'Khử mẫu đúng cách', html: `<p>Nhân <b>tất cả</b> các hạng tử của hai vế với mẫu chung – kể cả hạng tử không có mẫu.</p>
      <p class="math">{{x|3}} + 1 = {{x + 5|4}} ⇔ 4x + 12 = 3(x + 5) ⇔ x = 3</p>
      <div class="box warn">Lỗi hay gặp: quên nhân số 1 với 12.</div>` },
    { title: 'Đặt ngoặc khi tử là đa thức', html: `<p>{{x − 1|2}} nhân với 6 được 3(x − 1), không phải 3x − 1.</p>` },
    { title: 'Kiểm tra nghiệm', html: `<p>Thay nghiệm tìm được vào phương trình ban đầu để kiểm tra – mất chưa đến một phút nhưng tránh được nhiều sai sót.</p>` },
    { title: 'Dạng toán năng suất', html: `<p>Khối lượng công việc = năng suất × thời gian. Nếu làm xong một công việc trong x ngày thì mỗi ngày làm được {{1|x}} công việc.</p>` }
  ],
  summary: 'Khử mẫu nhân mọi hạng tử; đặt ngoặc; chuyển vế đổi dấu; kiểm tra nghiệm; đối chiếu điều kiện.',
  examples: [
    { title: 'Phương trình có mẫu', problem: 'Giải: {{x + 2|3}} − {{x − 1|4}} = {{x|6}} + 1.', solution: 'MC = 12: 4(x + 2) − 3(x − 1) = 2x + 12 ⇔ x + 11 = 2x + 12 ⇔ x = −1.' },
    { title: 'Năng suất', problem: 'Một xưởng dự định mỗi ngày may 50 bộ quần áo. Thực tế mỗi ngày may 60 bộ nên hoàn thành sớm 2 ngày. Tính số bộ quần áo phải may.', solution: 'Gọi số bộ là x (x nguyên dương). {{x|50}} − {{x|60}} = 2 ⇔ 6x − 5x = 600 ⇔ x = 600 bộ.' },
    { title: 'Hình học', problem: 'Một tam giác có chu vi 36 cm, cạnh thứ hai dài hơn cạnh thứ nhất 3 cm, cạnh thứ ba dài hơn cạnh thứ nhất 6 cm. Tính các cạnh.', solution: 'Gọi cạnh thứ nhất x (cm), x &gt; 0: x + (x + 3) + (x + 6) = 36 ⇔ x = 9. Các cạnh 9, 12, 15 cm.' }
  ],
  exercises: [
    { question: 'Giải: {{x|3}} + 1 = {{x + 5|4}}.', hints: ['Nhân hai vế với 12.', '4x + 12 = 3x + 15.'], solution: 'x = 3.' },
    { question: 'Giải: 3(2x − 1) − 2(3x + 1) = −5.', hints: ['Bỏ ngoặc: 6x − 3 − 6x − 2.', 'Thu gọn được 0x = 0.'], solution: 'Nghiệm đúng với mọi x.' },
    { question: 'Một người đi xe đạp từ A đến B với vận tốc 12 km/h, lúc về đi với vận tốc 10 km/h nên thời gian về nhiều hơn thời gian đi 30 phút. Tính quãng đường AB.', hints: ['Gọi quãng đường là x (km). {{x|10}} − {{x|12}} = {{1|2}}.', 'Nhân hai vế với 60: 6x − 5x = 30.'], solution: 'AB = 30 km.' }
  ],
  quiz: [
    { type: 'short', calc: '-1', q: 'Giải: {{x + 2|3}} − {{x − 1|4}} = {{x|6}} + 1.', answer: '-1', answerText: '−1', explain: 'x + 11 = 2x + 12.' },
    { type: 'short', calc: '3', q: 'Giải: {{x|3}} + 1 = {{x + 5|4}}.', answer: '3', explain: '4x + 12 = 3x + 15.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Phương trình 3(2x − 1) − 2(3x + 1) = −5 nghiệm đúng với mọi x.', answer: true, explain: '0x = 0.' },
    { type: 'mcq', q: 'Nhân hai vế của {{x − 1|2}} = 5 với 6 ta được:', options: ['3x − 1 = 30', '3(x − 1) = 30', '3(x − 1) = 5', 'x − 1 = 30'], answer: 1, explain: 'Đặt ngoặc và nhân cả vế phải.' },
    { type: 'short', calc: '600', q: 'Dự định may 50 bộ/ngày, thực tế 60 bộ/ngày nên xong sớm 2 ngày. Phải may bao nhiêu bộ?', unit: 'bộ', answer: '600', explain: '{{x|50}} − {{x|60}} = 2.' },
    { type: 'short', calc: '30', q: 'Đi 12 km/h, về 10 km/h, về lâu hơn 30 phút. Quãng đường AB dài bao nhiêu km?', unit: 'km', answer: '30', explain: '{{x|10}} − {{x|12}} = {{1|2}}.' },
    { type: 'mcq', q: 'Tam giác chu vi 36 cm, các cạnh là x, x + 3, x + 6. Cạnh lớn nhất là:', options: ['9 cm', '12 cm', '15 cm', '18 cm'], answer: 2, explain: 'x = 9 nên cạnh lớn nhất 15 cm.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nếu làm xong công việc trong x ngày thì mỗi ngày làm được x công việc.', answer: false, explain: 'Mỗi ngày làm được {{1|x}} công việc.' }
  ]
});
