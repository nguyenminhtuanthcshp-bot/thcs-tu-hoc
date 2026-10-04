/* KHTN 6 – Bài 24. Thực hành: Quan sát và mô tả cơ thể đơn bào, cơ thể đa bào. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-6/bai-24', {
  objectives: [
    'Chuẩn bị được mẫu nước ngâm rơm để quan sát sinh vật đơn bào (trùng giày).',
    'Quan sát và mô tả được hình dạng, cách di chuyển của trùng giày dưới kính hiển vi.',
    'Quan sát và chỉ ra được các cơ quan của một cơ thể đa bào (cây rau, con cá hoặc tranh ảnh).'
  ],
  intro: 'Trong một giọt nước ao hay nước ngâm rơm có cả một "thế giới" sinh vật đơn bào bơi lội. Bài thực hành này giúp em quan sát chúng và so sánh với cơ thể đa bào.',
  steps: [
    { title: 'Chuẩn bị mẫu nước ngâm rơm', html: `<ol><li>Khoảng 5–7 ngày trước buổi học: cắt một nắm rơm khô (hoặc cỏ khô) thành đoạn ngắn, cho vào lọ thuỷ tinh, đổ nước ao hoặc nước máy để lâu cho ngập.</li>
      <li>Để lọ ở chỗ thoáng, có ánh sáng nhưng tránh nắng gắt; không đậy kín.</li><li>Sau vài ngày, mặt nước có lớp váng mỏng – nơi tập trung nhiều trùng giày.</li></ol>
      <div class="box warn">Rửa tay bằng xà phòng sau khi làm việc với nước ngâm rơm, nước ao.</div>` },
    { title: 'Làm tiêu bản và quan sát trùng giày', html: `<ol><li>Dùng ống nhỏ giọt lấy một giọt nước ở lớp váng, nhỏ lên lam kính.</li><li>Đặt vài sợi bông thật mảnh vào giọt nước để cản bớt tốc độ bơi của trùng giày; đậy lamen.</li>
      <li>Quan sát ở vật kính 10x, sau đó 40x.</li></ol>
      <p>Trùng giày có hình dạng giống <b>chiếc đế giày</b>, cơ thể phủ nhiều <b>lông bơi</b> nhỏ; vừa bơi vừa xoay tròn.</p>`,
      svg: S.labelled({ w: 580, h: 220, body: '<path d="M120,110 C120,60 190,40 260,50 C330,58 400,70 410,110 C400,150 330,160 280,150 C240,142 210,170 160,165 C130,160 120,140 120,110 Z" fill="#dcfce7" stroke="#15803d" stroke-width="3"/>' + (function () { var s = ''; for (var i = 0; i < 40; i++) { var t = i / 40 * 2 * Math.PI, x = 265 + 150 * Math.cos(t), y = 108 + 58 * Math.sin(t); s += '<line x1="' + x.toFixed(1) + '" y1="' + y.toFixed(1) + '" x2="' + (265 + 162 * Math.cos(t)).toFixed(1) + '" y2="' + (108 + 66 * Math.sin(t)).toFixed(1) + '" stroke="#15803d" stroke-width="1.3"/>'; } return s; })() + '<ellipse cx="250" cy="100" rx="22" ry="14" fill="#86efac" stroke="#166534" stroke-width="2"/><circle cx="310" cy="120" r="9" fill="#bbf7d0" stroke="#166534" stroke-width="2"/><circle cx="190" cy="115" r="8" fill="#fff" stroke="#166534" stroke-width="2"/>', labels: [[410, 100, 470, 40, 'Lông bơi'], [250, 100, 250, 205, 'Nhân'], [190, 115, 90, 200, 'Không bào'], [310, 120, 420, 200, 'Không bào tiêu hoá']] }),
      caption: 'Hình vẽ đơn giản trùng giày (không theo tỉ lệ).' },
    { title: 'Quan sát sinh vật đơn bào khác (nếu có)', html: `<p>Trong nước ao có thể gặp: <b>trùng roi xanh</b> (hình thoi, có một roi, có hạt diệp lục màu xanh), <b>trùng biến hình</b> (hình dạng luôn thay đổi, di chuyển bằng chân giả), <b>tảo lục đơn bào</b>.</p>` },
    { title: 'Quan sát cơ thể đa bào', html: `<p>Quan sát một cây rau (cây cải, cây rau muống cả rễ) hoặc tranh con cá, con ếch:</p>
      <ul><li>Cây: chỉ ra rễ, thân, lá (hoa, quả nếu có); xác định hệ rễ và hệ chồi.</li><li>Con vật: chỉ ra đầu, thân, các cơ quan bên ngoài (mắt, vây/chi…).</li></ul>
      <p>Báo cáo: vẽ hình trùng giày; lập bảng so sánh cơ thể đơn bào (trùng giày) và đa bào (cây rau).</p>` }
  ],
  summary: 'Ngâm rơm khô trong nước vài ngày để có mẫu chứa trùng giày. Lấy giọt nước ở lớp váng, quan sát bằng kính hiển vi: trùng giày hình đế giày, có lông bơi, bơi xoay tròn. Cơ thể đa bào (cây rau, con cá) có nhiều cơ quan quan sát được bằng mắt thường.',
  examples: [
    { title: 'Vì sao lấy ở lớp váng', problem: 'Vì sao nên lấy giọt nước ở lớp váng trên mặt nước ngâm rơm?', solution: 'Trùng giày cần nhiều <b>oxygen</b> và thức ăn (vi khuẩn), tập trung nhiều ở lớp nước mặt, nên lấy ở đó dễ thấy chúng hơn.' },
    { title: 'Sợi bông', problem: 'Vì sao nên đặt vài sợi bông vào giọt nước?', solution: 'Sợi bông tạo "vật cản", làm trùng giày <b>bơi chậm lại</b>, dễ quan sát hơn.' },
    { title: 'Nhận diện', problem: 'Dưới kính hiển vi, em thấy một sinh vật hình dạng luôn thay đổi, bò chậm bằng những phần lồi ra. Đó là sinh vật gì?', solution: '<b>Trùng biến hình</b> – di chuyển bằng chân giả.' }
  ],
  exercises: [
    { question: 'Trùng giày là cơ thể đơn bào hay đa bào? Nêu một bằng chứng từ buổi quan sát.', hints: ['Em thấy mỗi con trùng giày gồm mấy tế bào?', 'Nó có một nhân hay nhiều tế bào có nhân?'], solution: '<b>Đơn bào</b>: mỗi con trùng giày chỉ là một tế bào (có màng, tế bào chất, nhân) nhưng vẫn tự bơi, lấy thức ăn…' },
    { question: 'Lập bảng so sánh ngắn trùng giày và cây rau cải về: số tế bào, kích thước, cách quan sát.', hints: ['Trùng giày: một tế bào, rất nhỏ.', 'Cây cải: nhiều tế bào, lớn.'], solution: 'Trùng giày: 1 tế bào; rất nhỏ (khoảng 0,1–0,3 mm); phải quan sát bằng kính hiển vi. Cây cải: rất nhiều tế bào, có rễ, thân, lá; lớn; quan sát bằng mắt thường.' },
    { question: 'Nếu để lọ nước ngâm rơm đậy kín nắp và để trong tủ tối, có tìm thấy nhiều trùng giày không? Vì sao?', hints: ['Trùng giày cần gì để sống?', 'Đậy kín thì thiếu gì?'], solution: 'Thường <b>ít</b> hơn nhiều: đậy kín thiếu oxygen, trùng giày khó phát triển. Nên để lọ thoáng, không đậy kín.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Trùng giày có hình dạng giống:', options: ['Chiếc đế giày', 'Ngôi sao', 'Hình cầu', 'Sợi chỉ dài'], answer: 0, explain: 'Tên gọi xuất phát từ hình dạng đế giày.' },
    { type: 'mcq', q: 'Trùng giày di chuyển nhờ:', options: ['Chân giả', 'Lông bơi', 'Vây', 'Chân khớp'], answer: 1, explain: 'Cơ thể phủ nhiều lông bơi.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Có thể nhìn rõ cấu tạo trùng giày bằng mắt thường.', answer: false, explain: 'Trùng giày rất nhỏ, phải quan sát bằng kính hiển vi.' },
    { type: 'mcq', q: 'Để có mẫu trùng giày, người ta thường:', options: ['Ngâm rơm khô trong nước vài ngày', 'Luộc rơm', 'Phơi khô nước', 'Cho muối vào nước'], answer: 0, explain: 'Nước ngâm rơm là môi trường tốt cho trùng giày.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Trùng giày là cơ thể đơn bào.', answer: true, explain: 'Trùng giày chỉ gồm một tế bào.' },
    { type: 'mcq', q: 'Sinh vật đơn bào di chuyển bằng chân giả là:', options: ['Trùng giày', 'Trùng roi', 'Trùng biến hình', 'Cây rêu'], answer: 2, explain: 'Trùng biến hình tạo chân giả.' },
    { type: 'mcq', q: 'Cây rau cải là cơ thể:', options: ['Đơn bào', 'Đa bào', 'Không có tế bào', 'Nhân sơ'], answer: 1, explain: 'Cây gồm rất nhiều tế bào, có rễ, thân, lá.' },
    { type: 'short', q: 'Quan sát với thị kính 10x và vật kính 10x thì ảnh phóng to bao nhiêu lần?', answer: '100', unit: 'lần', calc: '10*10', explain: '10 × 10 = 100.' }
  ]
});
})();
