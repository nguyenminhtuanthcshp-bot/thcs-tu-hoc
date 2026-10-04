/* Toán 6 – Bài 37. Số đo góc. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
function small(d, t) { return { svg: S.angle({ deg: d, w: 240 }), caption: t }; }
THCS.registerLesson('toan-6/bai-37', {
  objectives: [
    'Đo được góc bằng thước đo góc; biết đơn vị đo góc là độ (°).',
    'So sánh được hai góc dựa vào số đo.',
    'Nhận biết góc nhọn, góc vuông, góc tù, góc bẹt.'
  ],
  intro: 'Hai chiếc compa mở rộng khác nhau thì “độ mở” khác nhau. Để nói chính xác độ mở của một góc, ta dùng số đo góc, đo bằng thước đo góc.',
  steps: [
    { title: 'Thước đo góc', html: `<p>Thước đo góc là nửa hình tròn, được chia thành 180 phần bằng nhau, mỗi phần ứng với <b>1 độ (1°)</b>. Các số 0 đến 180 được ghi theo hai chiều ngược nhau.</p>` },
    { title: 'Cách đo góc xOy', html: `<ol><li>Đặt thước sao cho <b>tâm thước trùng đỉnh O</b>, vạch 0 nằm trên cạnh Ox.</li><li>Cạnh Oy đi qua vạch nào thì đó là số đo của góc (đọc theo dãy số bắt đầu từ 0 ở cạnh Ox).</li></ol>`,
      svg: S.protractor({ deg: 60, names: ['y', 'x'] }), caption: 'Cạnh Oy đi qua vạch 60: ∠xOy = 60°.' },
    { title: 'So sánh hai góc', html: `<p>Hai góc bằng nhau nếu số đo bằng nhau. Góc nào có số đo lớn hơn thì lớn hơn. Ví dụ ∠A = 45°, ∠B = 60° thì ∠A &lt; ∠B.</p><p>Mỗi góc (không phải góc bẹt) có số đo lớn hơn 0° và nhỏ hơn 180°. Góc bẹt có số đo 180°.</p>` },
    { title: 'Các loại góc', html: `<ul><li><b>Góc nhọn</b>: lớn hơn 0° và nhỏ hơn 90°.</li><li><b>Góc vuông</b>: bằng 90°.</li><li><b>Góc tù</b>: lớn hơn 90° và nhỏ hơn 180°.</li><li><b>Góc bẹt</b>: bằng 180°.</li></ul>`,
      svg: S.row([small(50, 'Góc nhọn'), small(90, 'Góc vuông'), small(130, 'Góc tù'), small(180, 'Góc bẹt')]) }
  ],
  summary: 'Đơn vị đo góc là độ (°). Đo góc: tâm thước trùng đỉnh, vạch 0 trên một cạnh, đọc vạch ở cạnh kia. Nhọn &lt; 90° = vuông &lt; tù &lt; 180° = bẹt.',
  examples: [
    { title: 'Phân loại', problem: 'Phân loại các góc: 35°; 90°; 145°; 180°; 89°.', solution: 'Nhọn: <b>35°, 89°</b>. Vuông: <b>90°</b>. Tù: <b>145°</b>. Bẹt: <b>180°</b>.' },
    { title: 'Góc đồng hồ', problem: 'Lúc 2 giờ, góc tạo bởi kim giờ và kim phút là bao nhiêu độ?', solution: 'Mặt đồng hồ có 12 khoảng, mỗi khoảng 360° : 12 = 30°. Lúc 2 giờ hai kim cách 2 khoảng: <b>60°</b> (góc nhọn).' },
    { title: 'So sánh', problem: 'Cho ∠A = 120°, ∠B = 90°, ∠C = 75°. Sắp xếp các góc tăng dần.', solution: '<b>∠C &lt; ∠B &lt; ∠A</b>.' }
  ],
  exercises: [
    { question: 'Lúc 4 giờ, hai kim đồng hồ tạo góc bao nhiêu độ? Đó là góc gì?', hints: ['Mỗi khoảng giữa hai số liền nhau là 30°.', 'Lúc 4 giờ hai kim cách 4 khoảng.'], solution: '4 · 30° = <b>120°</b>: góc tù.' },
    { question: 'Góc xOy = 90°. Tia Oz nằm trong góc sao cho ∠xOz = 30°. Góc zOy bằng bao nhiêu độ (biết ∠xOz + ∠zOy = ∠xOy)?', hints: ['∠zOy = ∠xOy − ∠xOz.', '90° − 30°.'], solution: '<b>60°</b>.' },
    { question: 'Một thanh chắn đường mở từ vị trí nằm ngang lên vị trí thẳng đứng. Thanh đã quay được góc bao nhiêu độ?', hints: ['Nằm ngang và thẳng đứng vuông góc với nhau.', 'Góc vuông có số đo?'], solution: '<b>90°</b>.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Góc có số đo 110° là:', options: ['Góc nhọn', 'Góc vuông', 'Góc tù', 'Góc bẹt'], answer: 2, explain: '90° &lt; 110° &lt; 180°.' },
    { type: 'short', q: 'Góc bẹt có số đo bao nhiêu độ?', answer: '180', unit: '°', calc: '180', explain: '180°.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Góc có số đo 89° là góc nhọn.', answer: true, explain: '89° &lt; 90°.' },
    { type: 'short', q: 'Lúc 3 giờ, góc giữa hai kim đồng hồ bằng bao nhiêu độ?', answer: '90', unit: '°', calc: '3*30', explain: '3 · 30° = 90°.' },
    { type: 'short', q: 'Lúc 5 giờ, góc giữa hai kim đồng hồ bằng bao nhiêu độ?', answer: '150', unit: '°', calc: '5*30', explain: '5 · 30° = 150°.' },
    { type: 'mcq', q: 'Khi đo góc, tâm của thước đo góc phải đặt trùng với:', options: ['Một điểm trên cạnh', 'Đỉnh của góc', 'Điểm bất kì', 'Vạch 90'], answer: 1, explain: 'Tâm thước trùng đỉnh góc.' },
    { type: 'short', q: 'Tia Oz nằm trong ∠xOy, ∠xOz = 25°, ∠zOy = 50°. Tính ∠xOy (độ).', answer: '75', unit: '°', calc: '25+50', explain: '25° + 50° = 75°.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Góc tù lớn hơn góc vuông.', answer: true, explain: 'Góc tù &gt; 90°.' }
  ]
});
})();
