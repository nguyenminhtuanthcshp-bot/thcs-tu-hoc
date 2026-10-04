/* Toán 8 – Luyện tập chung (sau Bài 24). Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('toan-8/c6-ltc-2', {
  objectives: [
    'Thực hiện phối hợp các phép cộng, trừ, nhân, chia phân thức.',
    'Rút gọn biểu thức phân thức và tính giá trị tại giá trị cho trước của biến (có đối chiếu điều kiện xác định).',
    'Vận dụng phân thức để biểu diễn đại lượng trong bài toán thực tế (vận tốc, năng suất).'
  ],
  intro: 'Bài toán rút gọn biểu thức phân thức là dạng rất quen thuộc trong các kì kiểm tra. Hãy làm theo một quy trình chặt chẽ.',
  steps: [
    { title: 'Quy trình giải bài rút gọn', html: `<ol><li>Tìm điều kiện xác định của <b>tất cả</b> các phân thức (kể cả phân thức chia).</li><li>Thực hiện trong ngoặc trước (quy đồng).</li><li>Nhân/chia rồi rút gọn.</li><li>Tính giá trị: kiểm tra giá trị của biến thoả điều kiện rồi thay vào biểu thức đã rút gọn.</li></ol>` },
    { title: 'Lưu ý với phép chia', html: `<p>Với {{A|B}} : {{C|D}} cần thêm điều kiện C ≠ 0 (phân thức chia khác 0).</p>
      <p>Ví dụ: {{1|x}} : {{x − 2|x}} cần x ≠ 0 và x ≠ 2.</p>` },
    { title: 'Phân thức trong thực tế', html: `<p>Quãng đường 120 km đi với vận tốc x km/h thì thời gian là {{120|x}} giờ. Nếu tăng vận tốc thêm 10 km/h thì thời gian là {{120|x + 10}} giờ; thời gian tiết kiệm được là {{120|x}} − {{120|x + 10}} = {{1200|x(x + 10)}} giờ.</p>` },
    { title: 'Tìm giá trị nguyên', html: `<p>Để {{A|B}} nhận giá trị nguyên (với biến nguyên), thường tách thành “đa thức + {{số|mẫu}}” rồi cho mẫu là ước của số đó.</p>
      <p>Ví dụ: {{x + 3|x − 1}} = 1 + {{4|x − 1}} nguyên ⇔ x − 1 ∈ Ư(4) = {±1; ±2; ±4}.</p>` }
  ],
  summary: 'ĐKXĐ (cả phân thức chia) → ngoặc → nhân chia → cộng trừ → rút gọn → đối chiếu điều kiện rồi mới thay số.',
  examples: [
    { title: 'Rút gọn tổng hợp', problem: 'Rút gọn A = ({{1|x − 2}} + {{1|x + 2}}) · {{x<sup>2</sup> − 4|x}} (x ≠ 0, x ≠ ±2).', solution: '{{1|x − 2}} + {{1|x + 2}} = {{2x|x<sup>2</sup> − 4}}. A = {{2x|x<sup>2</sup> − 4}} · {{x<sup>2</sup> − 4|x}} = 2.' },
    { title: 'Tính giá trị có đối chiếu điều kiện', problem: 'Cho B = {{x<sup>2</sup> − x|x<sup>2</sup> − 1}}. Tính B tại x = 1 và tại x = 3.', solution: 'ĐKXĐ: x ≠ ±1. B = {{x|x + 1}}. Tại x = 1: không thoả ĐKXĐ nên B không xác định. Tại x = 3: B = {{3|4}}.' },
    { title: 'Thực tế', problem: 'Một đội công nhân dự định làm 600 sản phẩm, mỗi ngày làm x sản phẩm. Thực tế mỗi ngày làm thêm 20 sản phẩm. Viết biểu thức số ngày rút ngắn được và tính khi x = 100.', solution: '{{600|x}} − {{600|x + 20}} = {{12000|x(x + 20)}}. Khi x = 100: {{12000|12000}} = 1 ngày.' }
  ],
  exercises: [
    { question: 'Rút gọn C = {{x|x − 3}} − {{x + 6|x<sup>2</sup> − 3x}} rồi tính C tại x = −1.', hints: ['MTC x(x − 3). Tử: x<sup>2</sup> − x − 6 = (x − 3)(x + 2).', 'C = {{x + 2|x}}.'], solution: 'C = {{x + 2|x}}; tại x = −1: C = −1.' },
    { question: 'Tìm số nguyên x để {{x + 3|x − 1}} có giá trị nguyên.', hints: ['{{x + 3|x − 1}} = 1 + {{4|x − 1}}.', 'x − 1 ∈ {±1; ±2; ±4}.'], solution: 'x ∈ {2; 0; 3; −1; 5; −3}.' },
    { question: 'Ô tô đi 120 km với vận tốc x km/h. Nếu tăng vận tốc thêm 10 km/h thì tiết kiệm được bao nhiêu giờ khi x = 50?', hints: ['Biểu thức: {{1200|x(x + 10)}}.', 'x = 50: {{1200|3000}}.'], solution: '0,4 giờ (24 phút).' }
  ],
  quiz: [
    { type: 'short', calc: '2', q: 'Rút gọn A = ({{1|x − 2}} + {{1|x + 2}}) · {{x<sup>2</sup> − 4|x}}. Kết quả là số nào?', answer: '2', explain: 'A = 2.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: B = {{x<sup>2</sup> − x|x<sup>2</sup> − 1}} có giá trị {{1|2}} tại x = 1.', answer: false, explain: 'x = 1 không thoả ĐKXĐ nên B không xác định.' },
    { type: 'short', requireSimplest: true, calc: '3 / 4', q: 'B = {{x<sup>2</sup> − x|x<sup>2</sup> − 1}}. Tính B tại x = 3 (dạng a/b tối giản).', answer: ['3/4'], answerText: '3/4', explain: 'B = {{x|x + 1}} = {{3|4}}.' },
    { type: 'mcq', q: 'Điều kiện xác định của biểu thức {{1|x}} : {{x − 2|x}} là:', options: ['x ≠ 0', 'x ≠ 2', 'x ≠ 0 và x ≠ 2', 'Mọi x'], answer: 2, explain: 'Mẫu khác 0 và phân thức chia khác 0.' },
    { type: 'short', calc: '(-1 + 2) / (-1)', q: 'Rút gọn C = {{x|x − 3}} − {{x + 6|x<sup>2</sup> − 3x}} rồi tính C tại x = −1.', answer: '-1', answerText: '−1', explain: 'C = {{x + 2|x}} = {{1|−1}} = −1.' },
    { type: 'short', calc: '1200 / (50 * 60)', q: 'Tiết kiệm {{1200|x(x + 10)}} giờ. Tính khi x = 50 (giờ, dùng dấu phẩy hoặc chấm).', unit: 'giờ', answer: '0.4', answerText: '0,4', explain: '{{1200|3000}} = 0,4.' },
    { type: 'short', calc: '6', q: 'Có bao nhiêu số nguyên x để {{x + 3|x − 1}} nhận giá trị nguyên?', answer: '6', explain: 'x − 1 là một trong 6 ước của 4.' },
    { type: 'mcq', q: 'Thời gian đi quãng đường 120 km với vận tốc (x + 10) km/h là:', options: ['{{120|x}} + 10', '{{120|x + 10}}', '120(x + 10)', '{{x + 10|120}}'], answer: 1, explain: 'Thời gian = quãng đường : vận tốc.' }
  ]
});
