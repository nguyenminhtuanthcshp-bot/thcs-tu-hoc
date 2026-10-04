/* KHTN 8 – Bài 41. Môi trường và các nhân tố sinh thái. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-8/bai-41', {
  objectives: [
    'Nêu được khái niệm môi trường sống của sinh vật; phân biệt bốn loại môi trường sống chủ yếu.',
    'Nêu được khái niệm nhân tố sinh thái; phân biệt nhân tố vô sinh và nhân tố hữu sinh (kể cả con người).',
    'Trình bày được khái niệm giới hạn sinh thái; đọc được sơ đồ giới hạn sinh thái.',
    'Lấy được ví dụ về ảnh hưởng của các nhân tố sinh thái lên đời sống sinh vật.'
  ],
  intro: 'Cá sống dưới nước, giun sống trong đất, chấy sống trên đầu người… Mỗi loài có “ngôi nhà” riêng và chịu ảnh hưởng của rất nhiều yếu tố xung quanh. Đó là những yếu tố nào?',
  steps: [
    { title: 'Môi trường sống', html: `<p><b>Môi trường sống</b> là nơi sinh sống của sinh vật, bao gồm tất cả các nhân tố xung quanh sinh vật, có tác động trực tiếp hoặc gián tiếp lên sinh vật.</p>
      <table class="tbl"><tr><th>Môi trường</th><th>Ví dụ sinh vật</th></tr><tr><td>Môi trường nước</td><td>cá, tôm, rong</td></tr><tr><td>Môi trường trên cạn</td><td>hổ, cây lúa, chim</td></tr><tr><td>Môi trường trong đất</td><td>giun đất, dế trũi</td></tr><tr><td>Môi trường sinh vật</td><td>giun đũa trong ruột người, tầm gửi trên cây</td></tr></table>` },
    { title: 'Nhân tố sinh thái', html: `<p><b>Nhân tố sinh thái</b> là những nhân tố của môi trường tác động đến sinh vật.</p><ul><li><b>Nhân tố vô sinh</b>: ánh sáng, nhiệt độ, độ ẩm, nước, đất, không khí…</li><li><b>Nhân tố hữu sinh</b>: các sinh vật khác và <b>con người</b>. Con người là nhân tố hữu sinh có tác động mạnh mẽ nhất (có thể có lợi hoặc có hại).</li></ul>`,
      svg: S.mindmap({ center: 'Nhân tố sinh thái', branches: [{ title: 'Vô sinh', items: ['ánh sáng, nhiệt độ', 'nước, độ ẩm, đất'] }, { title: 'Hữu sinh', items: ['các sinh vật khác', 'con người'] }], size: 14, label: 'Phân loại nhân tố sinh thái' }) },
    { title: 'Giới hạn sinh thái', html: `<p><b>Giới hạn sinh thái</b> là khoảng giá trị xác định của một nhân tố sinh thái mà trong đó sinh vật có thể tồn tại và phát triển. Ngoài giới hạn (dưới giới hạn dưới hoặc trên giới hạn trên) sinh vật sẽ chết.</p>
      <p>Trong giới hạn có <b>khoảng thuận lợi</b> – sinh vật sinh trưởng, phát triển tốt nhất; và <b>khoảng chống chịu</b> – hoạt động sống bị ức chế.</p>
      <p>Ví dụ: cá rô phi ở Việt Nam sống được từ 5,6 °C đến 42 °C, thuận lợi từ 20 °C đến 35 °C (số liệu tham khảo).</p>`,
      svg: S.toleranceRange({ name: 'cá rô phi', min: 5.6, max: 42, lo: 20, hi: 35, unit: '°C' }), caption: 'Giới hạn sinh thái về nhiệt độ của cá rô phi (số liệu tham khảo).' },
    { title: 'Ảnh hưởng của nhân tố sinh thái', html: `<ul><li>Ánh sáng: cây ưa sáng (lúa, ngô) và cây ưa bóng (lá lốt, vạn niên thanh); động vật hoạt động ngày, hoạt động đêm.</li><li>Nhiệt độ: động vật ở vùng lạnh có bộ lông dày, lớp mỡ dày; nhiều loài ngủ đông.</li><li>Độ ẩm: cây ở sa mạc có lá biến thành gai, thân mọng nước để giảm thoát hơi nước.</li></ul>` }
  ],
  summary: 'Môi trường sống gồm bốn loại: nước, trên cạn, trong đất, sinh vật. Nhân tố sinh thái gồm vô sinh (ánh sáng, nhiệt độ, nước…) và hữu sinh (sinh vật, con người). Giới hạn sinh thái là khoảng giá trị của nhân tố mà sinh vật tồn tại được, trong đó có khoảng thuận lợi và khoảng chống chịu.',
  examples: [
    { title: 'Tính độ rộng giới hạn', problem: 'Cá rô phi sống được từ 5,6 °C đến 42 °C. Tính độ rộng giới hạn sinh thái về nhiệt độ.', solution: '42 − 5,6 = 36,4 (°C).' },
    { title: 'Phân loại nhân tố', problem: 'Xếp các nhân tố sau vào vô sinh hoặc hữu sinh: nhiệt độ, sâu hại, con người, độ ẩm, vi khuẩn.', solution: 'Vô sinh: nhiệt độ, độ ẩm. Hữu sinh: sâu hại, con người, vi khuẩn.' },
    { title: 'So sánh hai loài', problem: 'Cá chép sống được từ 2 °C đến 44 °C; cá rô phi từ 5,6 °C đến 42 °C. Loài nào có giới hạn chịu nhiệt rộng hơn?', solution: 'Cá chép: 44 − 2 = 42 °C; cá rô phi: 36,4 °C ⇒ cá chép có giới hạn rộng hơn (số liệu tham khảo).' }
  ],
  exercises: [
    { question: 'Xác định môi trường sống của: giun đũa, cá chép, giun đất, cây bàng.', hints: ['Giun đũa kí sinh.', 'Có bốn loại môi trường.'], solution: 'Giun đũa: môi trường sinh vật; cá chép: nước; giun đất: trong đất; cây bàng: trên cạn.' },
    { question: 'Một loài vi khuẩn suối nước nóng sống được từ 70 °C đến 90 °C, thuận lợi từ 75 °C đến 85 °C (số liệu minh hoạ). Tính độ rộng giới hạn sinh thái và khoảng thuận lợi.', hints: ['Lấy giới hạn trên trừ giới hạn dưới.', 'Làm tương tự với khoảng thuận lợi.'], solution: 'Giới hạn: 90 − 70 = 20 °C; khoảng thuận lợi: 85 − 75 = 10 °C.' },
    { question: 'Vì sao nói con người là nhân tố hữu sinh đặc biệt?', hints: ['Con người có ý thức, công cụ.', 'Tác động có lợi và có hại.'], solution: 'Con người có trí tuệ, có thể cải tạo hoặc phá huỷ môi trường ở quy mô lớn, tác động mạnh mẽ nhất đến sinh vật.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Con người là một nhân tố sinh thái hữu sinh.', answer: true, explain: 'Con người có tác động mạnh mẽ đến sinh vật.' },
    { type: 'mcq', q: 'Nhân tố nào là nhân tố vô sinh?', options: ['Vi khuẩn', 'Nhiệt độ', 'Con người', 'Cỏ dại'], answer: 1, explain: 'Nhiệt độ là nhân tố vô sinh.' },
    { type: 'mcq', q: 'Môi trường sống của giun đũa kí sinh là:', options: ['môi trường nước', 'môi trường trong đất', 'môi trường sinh vật', 'môi trường trên cạn'], answer: 2, explain: 'Sống trong ruột người.' },
    { type: 'short', q: 'Cá rô phi sống được từ 5,6 °C đến 42 °C. Độ rộng giới hạn sinh thái về nhiệt độ là bao nhiêu °C?', answer: '36,4', unit: '°C', calc: '42-5.6', explain: '42 − 5,6 = 36,4 °C.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Ngoài giới hạn sinh thái, sinh vật vẫn sinh trưởng tốt nhất.', answer: false, explain: 'Ngoài giới hạn sinh vật sẽ chết.' },
    { type: 'short', q: 'Khoảng thuận lợi về nhiệt độ của cá rô phi từ 20 °C đến 35 °C. Độ rộng khoảng thuận lợi là bao nhiêu °C?', answer: '15', unit: '°C', calc: '35-20', explain: '35 − 20 = 15 °C.' },
    { type: 'mcq', q: 'Cây xương rồng có lá biến thành gai là thích nghi với nhân tố:', options: ['ánh sáng mạnh', 'độ ẩm thấp (khô hạn)', 'nhiệt độ thấp', 'gió mạnh'], answer: 1, explain: 'Giảm thoát hơi nước.' },
    { type: 'short', q: 'Cá chép sống được từ 2 °C đến 44 °C (tham khảo). Độ rộng giới hạn sinh thái về nhiệt độ là bao nhiêu °C?', answer: '42', unit: '°C', calc: '44-2', explain: '44 − 2 = 42 °C.' }
  ]
});
})();
