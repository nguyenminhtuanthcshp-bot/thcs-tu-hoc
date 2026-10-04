/* KHTN 6 – Bài 4. Sử dụng kính hiển vi quang học. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-6/bai-4', {
  objectives: [
    'Nêu được cấu tạo (các bộ phận chính) và công dụng của kính hiển vi quang học.',
    'Tính được độ phóng đại của kính hiển vi từ số ghi trên thị kính và vật kính.',
    'Trình bày được các bước sử dụng kính hiển vi để quan sát một mẫu vật.',
    'Biết cách cầm, bảo quản kính hiển vi đúng cách.'
  ],
  intro: 'Một giọt nước ao nhìn bằng mắt thường chỉ là nước. Nhưng dưới <b>kính hiển vi</b>, em sẽ thấy cả một thế giới những sinh vật tí hon đang bơi lội! Kính lúp không đủ mạnh để thấy chúng – ta cần một dụng cụ phóng đại lớn hơn nhiều.',
  steps: [
    { title: 'Kính hiển vi quang học dùng để làm gì?', html: `<p><b>Kính hiển vi quang học</b> dùng ánh sáng và hệ thống thấu kính để tạo ảnh phóng to của những vật rất nhỏ mà mắt thường và kính lúp không nhìn rõ được, ví dụ: tế bào, vi khuẩn lớn, trùng giày, hạt phấn hoa.</p>
      <p>Kính hiển vi quang học thường phóng to ảnh của vật từ khoảng <b>40 lần đến 3 000 lần</b>, trong khi kính lúp chỉ khoảng 3 – 20 lần.</p>` },
    { title: 'Các bộ phận chính', html: `<table class="tbl"><tr><th>Hệ thống</th><th>Bộ phận</th></tr>
      <tr><td>Phóng đại</td><td><b>Thị kính</b> (kính để mắt nhìn vào) và <b>vật kính</b> (kính gần vật, gắn trên đĩa quay)</td></tr>
      <tr><td>Chiếu sáng</td><td><b>Đèn</b> (hoặc gương) chiếu ánh sáng qua mẫu vật</td></tr>
      <tr><td>Điều chỉnh</td><td><b>Ốc to</b> (ốc sơ cấp) để tìm ảnh, <b>ốc nhỏ</b> (ốc vi cấp) để làm ảnh rõ nét</td></tr>
      <tr><td>Cơ học (giá đỡ)</td><td>Chân kính, thân kính, bàn kính, kẹp giữ mẫu</td></tr></table>`,
      svg: S.microscope(), caption: 'Hình vẽ minh hoạ các bộ phận của kính hiển vi quang học.' },
    { title: 'Độ phóng đại của kính', html: `<p>Trên thị kính và vật kính đều có ghi số phóng đại, ví dụ thị kính <b>10x</b>, vật kính <b>4x, 10x, 40x</b>.</p>
      <p class="math">Độ phóng đại của kính = số ghi trên thị kính × số ghi trên vật kính</p>
      <p>Ví dụ: thị kính 10x, vật kính 40x thì ảnh được phóng to 10 × 40 = <b>400 lần</b>.</p>
      <div class="box tip">Khi bắt đầu quan sát, luôn dùng <b>vật kính có số nhỏ nhất</b> (phóng đại ít) để dễ tìm mẫu vật, sau đó mới chuyển sang vật kính lớn hơn.</div>` },
    { title: 'Các bước sử dụng', html: `<ol><li>Chọn vật kính có độ phóng đại nhỏ nhất; bật đèn (hoặc chỉnh gương) để có đủ ánh sáng.</li>
      <li>Đặt tiêu bản (lam kính có mẫu vật) lên bàn kính, dùng kẹp giữ lại sao cho mẫu nằm đúng giữa lỗ bàn kính.</li>
      <li><b>Mắt nhìn từ bên ngoài</b>, vặn ốc to để hạ vật kính xuống gần sát tiêu bản (không để chạm vào tiêu bản).</li>
      <li>Mắt nhìn vào thị kính, vặn ốc to <b>từ từ nâng vật kính lên</b> cho đến khi thấy ảnh của vật.</li>
      <li>Vặn ốc nhỏ để ảnh rõ nét nhất.</li></ol>` },
    { title: 'Cầm và bảo quản kính', html: `<ul><li>Khi di chuyển: <b>một tay cầm thân kính, một tay đỡ chân kính</b>, giữ kính thẳng đứng.</li>
      <li>Không dùng tay chạm vào mặt thấu kính; lau thấu kính bằng giấy lau chuyên dụng.</li>
      <li>Dùng xong: tắt đèn, tháo tiêu bản, đưa vật kính nhỏ nhất về vị trí làm việc, lau sạch và cất nơi khô ráo, có hộp hoặc túi che bụi.</li></ul>
      <div class="box note">Kính hiển vi là dụng cụ đắt tiền và dễ hỏng: hãy làm theo hướng dẫn của thầy cô và thao tác nhẹ nhàng.</div>` }
  ],
  summary: 'Kính hiển vi quang học phóng to ảnh khoảng 40 – 3 000 lần, gồm hệ thống phóng đại (thị kính, vật kính), chiếu sáng, điều chỉnh (ốc to, ốc nhỏ) và giá đỡ. Độ phóng đại = số của thị kính × số của vật kính. Bắt đầu với vật kính nhỏ nhất; hạ vật kính khi nhìn từ ngoài, nâng lên khi nhìn vào thị kính.',
  examples: [
    { title: 'Tính độ phóng đại', problem: 'Thị kính ghi 15x, vật kính ghi 10x. Ảnh của vật được phóng to bao nhiêu lần?', solution: 'Độ phóng đại = 15 × 10 = <b>150 lần</b>.' },
    { title: 'Chọn dụng cụ quan sát', problem: 'Em nên dùng kính lúp hay kính hiển vi để quan sát: a) chân con ruồi; b) tế bào biểu bì vảy hành?', solution: 'a) Chân ruồi khá lớn, dùng <b>kính lúp</b> là thấy rõ. b) Tế bào vảy hành rất nhỏ, cần dùng <b>kính hiển vi</b>.' },
    { title: 'Sửa lỗi thao tác', problem: 'Bạn Hải vừa nhìn vào thị kính vừa vặn ốc to hạ vật kính xuống thật nhanh. Việc này có thể gây ra hậu quả gì?', solution: 'Khi mắt đang nhìn vào thị kính, Hải không thấy khoảng cách giữa vật kính và tiêu bản, nên vật kính có thể đâm vào làm <b>vỡ tiêu bản và trầy, hỏng vật kính</b>. Cần hạ vật kính khi mắt nhìn từ bên ngoài, sau đó mới nhìn vào thị kính và nâng vật kính lên từ từ.' }
  ],
  exercises: [
    { question: 'Kể tên hai bộ phận thuộc hệ thống phóng đại và hai bộ phận thuộc hệ thống điều chỉnh của kính hiển vi.', hints: ['Hệ thống phóng đại gồm các “kính” có ghi số 10x, 40x…', 'Hệ thống điều chỉnh gồm các núm vặn ở hai bên thân kính.'], solution: 'Hệ thống phóng đại: thị kính và vật kính. Hệ thống điều chỉnh: ốc to (ốc sơ cấp) và ốc nhỏ (ốc vi cấp).' },
    { question: 'Kính hiển vi có thị kính 10x và ba vật kính 4x, 10x, 40x. Hãy tính các độ phóng đại có thể có. Muốn thấy tế bào to nhất thì chọn vật kính nào?', hints: ['Nhân số của thị kính với từng số của vật kính.', 'Độ phóng đại càng lớn thì ảnh càng to.'], solution: '10 × 4 = 40 lần; 10 × 10 = 100 lần; 10 × 40 = 400 lần. Muốn ảnh to nhất chọn vật kính <b>40x</b> (phóng đại 400 lần) – nhưng nên tìm mẫu ở vật kính 4x trước rồi mới chuyển lên.' },
    { question: 'Vì sao khi di chuyển kính hiển vi phải dùng cả hai tay: một tay cầm thân kính, một tay đỡ chân kính?', hints: ['Kính hiển vi khá nặng và có nhiều bộ phận có thể rời ra (thị kính, gương…).', 'Nếu chỉ cầm một tay, điều gì dễ xảy ra?'], solution: 'Vì kính nặng và dễ vỡ; cầm hai tay giúp giữ kính chắc chắn, thẳng đứng, không bị rơi, không làm tuột thị kính hay các bộ phận khác.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Bộ phận nào của kính hiển vi là nơi mắt nhìn vào?', options: ['Vật kính', 'Thị kính', 'Bàn kính', 'Ốc to'], answer: 1, explain: 'Thị kính là kính để mắt nhìn vào; vật kính ở gần mẫu vật.' },
    { type: 'short', q: 'Thị kính ghi 10x, vật kính ghi 40x. Kính phóng to ảnh bao nhiêu lần?', answer: '400', unit: 'lần', calc: '10*40', explain: '10 × 40 = 400 lần.' },
    { type: 'mcq', q: 'Ốc nhỏ (ốc vi cấp) dùng để:', options: ['Bật đèn', 'Giữ tiêu bản', 'Làm ảnh rõ nét hơn', 'Thay vật kính'], answer: 2, explain: 'Ốc to dùng để tìm ảnh; ốc nhỏ điều chỉnh tinh để ảnh rõ nét.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khi bắt đầu quan sát nên dùng vật kính có độ phóng đại lớn nhất.', answer: false, explain: 'Nên bắt đầu với vật kính nhỏ nhất để dễ tìm mẫu vật, sau đó mới chuyển sang vật kính lớn hơn.' },
    { type: 'mcq', q: 'Vật nào sau đây cần dùng kính hiển vi mới quan sát rõ?', options: ['Vân tay', 'Cánh con bướm', 'Trùng giày trong giọt nước ao', 'Gân lá cây'], answer: 2, explain: 'Trùng giày là sinh vật đơn bào rất nhỏ, cần kính hiển vi.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khi hạ vật kính xuống gần tiêu bản, mắt phải nhìn từ bên ngoài.', answer: true, explain: 'Nhìn từ ngoài giúp tránh để vật kính chạm, làm vỡ tiêu bản.' },
    { type: 'short', q: 'Thị kính ghi 15x. Để ảnh được phóng to 600 lần thì vật kính phải ghi bao nhiêu (chỉ nhập số)?', answer: '40', calc: '600/15', explain: 'Số ghi trên vật kính = 600 : 15 = 40 (vật kính 40x).' },
    { type: 'mcq', q: 'Kính hiển vi quang học thường phóng to ảnh của vật trong khoảng:', options: ['2 – 5 lần', '3 – 20 lần', '40 – 3 000 lần', 'Hàng triệu lần'], answer: 2, explain: 'Kính hiển vi quang học phóng to khoảng 40 – 3 000 lần; 3 – 20 lần là của kính lúp.' }
  ]
});
})();
