/* Toán 7 – Bài tập cuối chương VI. Tỉ lệ thức và đại lượng tỉ lệ. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, C = S.C;
THCS.registerLesson('toan-7/c6-on-tap', {
  objectives: [
    'Hệ thống kiến thức chương VI: tỉ lệ thức, dãy tỉ số bằng nhau, đại lượng tỉ lệ thuận, tỉ lệ nghịch.',
    'Giải thành thạo các dạng toán: tìm x, tìm các số theo tỉ lệ, bài toán thực tế.',
    'Lựa chọn đúng mô hình thuận/nghịch và trình bày lời giải đầy đủ.'
  ],
  intro: 'Ôn tập chương VI. Tỉ lệ có mặt khắp nơi: công thức nấu ăn, bản đồ, giá cả, năng suất lao động… Hãy tự tin áp dụng!',
  steps: [
    { title: 'Sơ đồ chương', html: `<p>Các kiến thức của chương liên kết chặt chẽ với nhau:</p>`,
      svg: S.mindmap({ center: 'Tỉ lệ', branches: [{ title: 'Tỉ lệ thức', items: ['a/b = c/d', 'ad = bc'] }, { title: 'Dãy tỉ số', items: ['(a+c)/(b+d)', 'chia tỉ lệ'] }, { title: 'Tỉ lệ thuận', items: ['y = kx', 'y/x không đổi'] }, { title: 'Tỉ lệ nghịch', items: ['xy = a', 'tích không đổi'] }] }) },
    { title: 'Các bước giải bài toán tỉ lệ', html: `<ol><li>Gọi ẩn, nêu điều kiện.</li><li>Xác định quan hệ: tỉ lệ thuận hay nghịch.</li><li>Lập tỉ lệ thức hoặc dãy tỉ số bằng nhau.</li><li>Tính, đối chiếu điều kiện và trả lời.</li></ol>` },
    { title: 'Dạng tìm x', html: `<p>{{2x − 1|5}} = {{3|2}} ⇒ 2(2x − 1) = 15 ⇒ 4x = 17 ⇒ x = {{17|4}}.</p>` },
    { title: 'Bài toán tổng hợp', html: `<p>Ba lớp 7A, 7B, 7C trồng cây; số cây tỉ lệ thuận với sĩ số 40, 36, 44; lớp 7C trồng nhiều hơn lớp 7B 16 cây. Gọi số cây là x, y, z: {{x|40}} = {{y|36}} = {{z|44}} = {{z − y|8}} = 2 ⇒ x = 80, y = 72, z = 88.</p>` }
  ],
  summary: 'Tỉ lệ thức: nhân chéo. Dãy tỉ số: tìm giá trị chung. Thuận: thương không đổi; nghịch: tích không đổi. Bài toán: gọi ẩn – xác định quan hệ – lập dãy tỉ số – tính – trả lời.',
  examples: [
    { title: 'Tìm x', problem: 'Tìm x: {{2x − 1|5}} = {{3|2}}.', solution: '4x − 2 = 15 ⇒ x = {{17|4}} = 4,25.' },
    { title: 'Thuận', problem: 'Một xe đi 150 km hết 10 lít xăng. Đi 240 km hết bao nhiêu lít?', solution: '10 : 150 · 240 = 16 (lít).' },
    { title: 'Nghịch', problem: 'Một bếp ăn dự trữ gạo đủ cho 120 người ăn trong 20 ngày. Nếu có 150 người thì đủ ăn trong bao nhiêu ngày?', solution: '120 · 20 = 150 · x ⇒ x = 16 (ngày).' }
  ],
  exercises: [
    { question: 'Tìm x, y biết 3x = 5y và x − y = 8.', hints: ['3x = 5y ⇒ {{x|5}} = {{y|3}}.', '{{x − y|2}} = 4.'], solution: 'x = 20, y = 12.' },
    { question: 'Để làm 1 cái bánh cần 250 g bột và 3 quả trứng. Có 1 kg bột thì cần bao nhiêu quả trứng để làm hết số bột?', hints: ['1 kg = 1 000 g = 4 lần 250 g.', 'Trứng tỉ lệ thuận với bột.'], solution: '12 quả trứng.' },
    { question: 'Hai người cùng làm một công việc: người thứ nhất làm một mình mất 6 giờ, người thứ hai mất 4 giờ. Tiền công 500 000 đồng chia theo khối lượng mỗi người làm khi cùng làm (cùng thời gian). Mỗi người nhận bao nhiêu?', hints: ['Năng suất tỉ lệ nghịch với thời gian: tỉ lệ {{1|6}} : {{1|4}} = 2 : 3.', 'Chia 500 000 theo 2 : 3.'], solution: '200 000 đồng và 300 000 đồng.' }
  ],
  quiz: [
    { type: 'short', calc: '(3 * 5 / 2 + 1) / 2', requireSimplest: true, q: 'Tìm x: {{2x − 1|5}} = {{3|2}} (dạng a/b tối giản).', answer: ['17/4'], answerText: '17/4', explain: '4x − 2 = 15 ⇒ x = {{17|4}}.' },
    { type: 'short', calc: '10 / 150 * 240', q: '150 km hết 10 lít xăng. 240 km hết bao nhiêu lít?', unit: 'lít', answer: '16', explain: '240 : 15 = 16.' },
    { type: 'short', calc: '120 * 20 / 150', q: 'Gạo đủ cho 120 người trong 20 ngày. 150 người ăn được bao nhiêu ngày?', unit: 'ngày', answer: '16', explain: '2 400 : 150 = 16.' },
    { type: 'short', calc: '8 / 2 * 5', q: 'Tìm x biết 3x = 5y và x − y = 8.', answer: '20', explain: '{{x|5}} = {{y|3}} = 4.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: 250 g bột cần 3 quả trứng thì 1 kg bột cần 12 quả trứng (số trứng tỉ lệ thuận với khối lượng bột).', answer: true, explain: '1 kg = 4 · 250 g ⇒ 4 · 3 = 12 quả.' },
    { type: 'short', calc: '16 / 8 * 44', q: 'Số cây tỉ lệ với 40, 36, 44; lớp thứ ba hơn lớp thứ hai 16 cây. Lớp thứ ba trồng bao nhiêu cây?', answer: '88', explain: 'Giá trị chung 2 ⇒ 88.' },
    { type: 'mcq', q: 'Số người và số ngày ăn hết một lượng gạo là hai đại lượng:', options: ['tỉ lệ thuận', 'tỉ lệ nghịch', 'bằng nhau', 'không liên quan'], answer: 1, explain: 'Nhiều người thì ăn hết nhanh hơn.' },
    { type: 'short', calc: '500000 / 5 * 3', q: 'Chia 500 000 đồng theo tỉ lệ 2 : 3. Phần lớn hơn là bao nhiêu đồng?', unit: 'đồng', answer: '300000', answerText: '300 000', explain: '100 000 · 3.' }
  ]
});
})();
