/* KHTN 6 – Bài 30. Nguyên sinh vật. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-6/bai-30', {
  objectives: [
    'Nhận biết được một số nguyên sinh vật thông qua hình dạng, cách di chuyển.',
    'Nêu được vai trò của nguyên sinh vật trong tự nhiên và đời sống.',
    'Trình bày được con đường lây truyền và cách phòng bệnh sốt rét, kiết lị do nguyên sinh vật gây ra.'
  ],
  intro: 'Trong giọt nước ao có những sinh vật đơn bào nhân thực bơi lội, bò trườn: trùng roi, trùng giày, trùng biến hình, tảo… Đó là <b>nguyên sinh vật</b>.',
  steps: [
    { title: 'Nguyên sinh vật là gì?', html: `<ul><li>Là nhóm sinh vật có cấu tạo <b>tế bào nhân thực</b>, kích thước hiển vi; <b>đa số là đơn bào</b>, một số là đa bào (như một số tảo biển).</li>
      <li>Hình dạng đa dạng: hình giày (trùng giày), hình thoi có roi (trùng roi), không có hình dạng cố định (trùng biến hình)…</li>
      <li>Có loại có lục lạp, tự quang hợp (tảo, trùng roi xanh); có loại sống dị dưỡng, ăn vi khuẩn, mảnh vụn hữu cơ.</li></ul>` },
    { title: 'Một số đại diện', html: `<table class="tbl"><tr><th>Đại diện</th><th>Đặc điểm nhận biết</th><th>Di chuyển</th></tr>
      <tr><td>Trùng roi xanh</td><td>Hình thoi, có lục lạp, có điểm mắt</td><td>Bằng roi</td></tr><tr><td>Trùng giày</td><td>Hình đế giày</td><td>Bằng lông bơi</td></tr>
      <tr><td>Trùng biến hình</td><td>Hình dạng luôn thay đổi</td><td>Bằng chân giả</td></tr><tr><td>Tảo lục, tảo silic</td><td>Có lục lạp, quang hợp</td><td>Trôi nổi hoặc bám</td></tr></table>`,
      svg: S.draw({ w: 600, h: 180, aria: 'Ba nguyên sinh vật thường gặp', items: [
        { poly: [[40, 80], [80, 55], [150, 70], [170, 85], [150, 100], [80, 108]], fill: '#bbf7d0', color: '#15803d' }, { seg: [40, 80, 10, 50], color: '#15803d' }, { circle: [100, 82, 9], fill: '#15803d', color: '#15803d' }, { circle: [55, 76, 4], fill: '#dc2626', color: '#dc2626' }, { text: [95, 150, 'Trùng roi xanh'], bold: true, size: 14 },
        { poly: [[230, 85], [250, 55], [320, 50], [370, 75], [360, 105], [300, 100], [260, 115]], fill: '#dcfce7', color: '#166534' }, { circle: [300, 78, 9], fill: '#86efac', color: '#166534' }, { text: [300, 150, 'Trùng giày'], bold: true, size: 14 },
        { poly: [[440, 80], [460, 45], [490, 70], [520, 40], [545, 75], [575, 90], [540, 115], [500, 100], [470, 120]], fill: '#e0e7ff', color: '#4338ca' }, { circle: [505, 82, 9], fill: '#4338ca', color: '#4338ca' }, { text: [505, 150, 'Trùng biến hình'], bold: true, size: 14 }] }),
      caption: 'Hình vẽ đơn giản (không theo tỉ lệ).' },
    { title: 'Vai trò', html: `<ul><li>Tảo và nguyên sinh vật quang hợp tạo ra <b>oxygen</b> và là <b>thức ăn</b> cho động vật nhỏ ở nước (cá, tôm, ốc…).</li>
      <li>Một số tảo được dùng làm thực phẩm (rau câu làm thạch), làm thuốc, làm phân bón.</li><li>Một số nguyên sinh vật ăn vi khuẩn, góp phần làm sạch nước.</li>
      <li><b>Tác hại</b>: gây bệnh ở người và động vật; một số tảo phát triển quá mức gây hiện tượng "nước nở hoa", "thuỷ triều đỏ", làm cá chết.</li></ul>` },
    { title: 'Bệnh sốt rét và bệnh kiết lị', html: `<table class="tbl"><tr><th></th><th>Sốt rét</th><th>Kiết lị</th></tr>
      <tr><td>Tác nhân</td><td>Trùng sốt rét (kí sinh trong hồng cầu)</td><td>Trùng kiết lị (kí sinh ở thành ruột)</td></tr>
      <tr><td>Lây truyền</td><td>Qua vết đốt của <b>muỗi Anopheles</b> (muỗi đòn xóc)</td><td>Qua <b>đường ăn uống</b>: thức ăn, nước uống nhiễm bào xác trùng</td></tr>
      <tr><td>Biểu hiện</td><td>Sốt cao, rét run, vã mồ hôi từng cơn; thiếu máu</td><td>Đau bụng, đi ngoài nhiều lần, phân có máu và chất nhầy</td></tr>
      <tr><td>Phòng bệnh</td><td>Ngủ màn, diệt muỗi, phát quang bụi rậm, khơi thông cống rãnh</td><td>Ăn chín uống sôi, rửa tay trước khi ăn và sau khi đi vệ sinh, giữ vệ sinh nguồn nước</td></tr></table>` }
  ],
  summary: 'Nguyên sinh vật là sinh vật nhân thực, đa số đơn bào, kích thước hiển vi; di chuyển bằng roi, lông bơi hoặc chân giả. Chúng tạo oxygen, làm thức ăn cho động vật nước, một số làm thực phẩm; nhưng có loại gây bệnh: trùng sốt rét (lây qua muỗi Anopheles), trùng kiết lị (lây qua ăn uống).',
  examples: [
    { title: 'Nhận diện', problem: 'Một sinh vật đơn bào có lục lạp, có roi, bơi trong nước ao. Đó có thể là gì?', solution: '<b>Trùng roi xanh</b>.' },
    { title: 'Đường lây', problem: 'Vì sao sống ở vùng rừng núi nhiều muỗi dễ mắc sốt rét hơn?', solution: 'Trùng sốt rét lây qua vết đốt của <b>muỗi Anopheles</b>; nơi rừng núi, bụi rậm, nước đọng có nhiều loại muỗi này.' },
    { title: 'Phòng kiết lị', problem: 'Nêu hai thói quen giúp phòng bệnh kiết lị.', solution: '<b>Ăn chín, uống sôi</b>; <b>rửa tay bằng xà phòng</b> trước khi ăn và sau khi đi vệ sinh.' }
  ],
  exercises: [
    { question: 'So sánh cách di chuyển của trùng roi, trùng giày và trùng biến hình.', hints: ['Mỗi loài có "bộ phận" di chuyển riêng.', 'Roi – lông bơi – chân giả.'], solution: 'Trùng roi di chuyển bằng <b>roi</b>; trùng giày bằng <b>lông bơi</b> (vừa tiến vừa xoay); trùng biến hình bằng <b>chân giả</b> (phần tế bào chất lồi ra).' },
    { question: 'Vì sao nói tảo có vai trò quan trọng trong ao, hồ, biển?', hints: ['Tảo quang hợp tạo ra chất gì?', 'Ai ăn tảo?'], solution: 'Tảo quang hợp tạo <b>oxygen</b> cho các sinh vật ở nước hô hấp và là nguồn <b>thức ăn</b> đầu tiên cho nhiều động vật nhỏ, từ đó nuôi cá, tôm.' },
    { question: 'Tại sao người bị bệnh sốt rét thường bị thiếu máu?', hints: ['Trùng sốt rét sống ở đâu trong cơ thể?', 'Chúng làm gì với các tế bào đó?'], solution: 'Trùng sốt rét kí sinh và sinh sản trong <b>hồng cầu</b>, phá huỷ nhiều hồng cầu, nên người bệnh bị thiếu máu.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Nguyên sinh vật có cấu tạo tế bào:', options: ['Nhân thực', 'Nhân sơ', 'Không có tế bào', 'Chỉ có vỏ protein'], answer: 0, explain: 'Nguyên sinh vật là sinh vật nhân thực.' },
    { type: 'mcq', q: 'Bệnh sốt rét lây truyền qua:', options: ['Muỗi Anopheles đốt', 'Uống nước lã', 'Bắt tay', 'Ăn rau sống'], answer: 0, explain: 'Muỗi Anopheles truyền trùng sốt rét.' },
    { type: 'mcq', q: 'Trùng biến hình di chuyển bằng:', options: ['Roi', 'Lông bơi', 'Chân giả', 'Vây'], answer: 2, explain: 'Chân giả là phần tế bào chất lồi ra.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Bệnh kiết lị lây qua đường ăn uống.', answer: true, explain: 'Trùng kiết lị theo thức ăn, nước uống vào ruột.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tất cả nguyên sinh vật đều gây bệnh.', answer: false, explain: 'Nhiều nguyên sinh vật có ích (tảo tạo oxygen, làm thức ăn).' },
    { type: 'mcq', q: 'Trùng sốt rét kí sinh trong:', options: ['Hồng cầu', 'Tóc', 'Móng tay', 'Xương'], answer: 0, explain: 'Chúng phá huỷ hồng cầu.' },
    { type: 'mcq', q: 'Nguyên sinh vật nào có lục lạp, quang hợp được?', options: ['Trùng roi xanh', 'Trùng kiết lị', 'Trùng sốt rét', 'Trùng biến hình'], answer: 0, explain: 'Trùng roi xanh có lục lạp.' },
    { type: 'short', q: 'Nguyên sinh vật gây bệnh kiết lị có tên là trùng gì? (điền 2 tiếng)', answer: ['kiết lị', 'kiet li', 'kiết lỵ'], answerText: 'kiết lị', explain: 'Trùng kiết lị.' }
  ]
});
})();
