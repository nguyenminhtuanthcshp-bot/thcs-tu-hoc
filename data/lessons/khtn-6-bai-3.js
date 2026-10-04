/* KHTN 6 – Bài 3. Sử dụng kính lúp. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-6/bai-3', {
  objectives: [
    'Nêu được cấu tạo và công dụng của kính lúp.',
    'Biết cách sử dụng kính lúp để quan sát vật nhỏ.',
    'Biết cách bảo quản kính lúp và các lưu ý an toàn khi dùng.'
  ],
  intro: 'Đường gân trên chiếc lá, những chiếc chân tí hon của con kiến, các chữ in rất nhỏ trên vỏ hộp thuốc… Mắt thường khó nhìn rõ, nhưng với một chiếc <b>kính lúp</b>, mọi thứ hiện ra to và rõ hơn nhiều.',
  steps: [
    { title: 'Kính lúp dùng để làm gì?', html: `<p><b>Kính lúp</b> là dụng cụ hỗ trợ mắt quan sát rõ những vật nhỏ bằng cách tạo ra <b>ảnh lớn hơn vật</b>.</p>
      <p>Trên kính lúp thường ghi số bội giác như <b>3x, 5x, 10x</b>. Kính ghi 5x cho ta nhìn thấy ảnh lớn gấp khoảng 5 lần so với khi nhìn bằng mắt thường. Kính lúp thường có số bội giác từ khoảng 3x đến 20x.</p>` },
    { title: 'Cấu tạo', html: `<p>Kính lúp gồm ba bộ phận chính:</p><ol><li><b>Tay cầm</b> (cán kính).</li><li><b>Khung</b> (vành kính) giữ mặt kính.</li><li><b>Mặt kính</b>: làm bằng thuỷ tinh hoặc nhựa trong suốt, <b>dày ở giữa và mỏng ở rìa</b> (thấu kính hội tụ).</li></ol>`,
      svg: S.magnifier(), caption: 'Các bộ phận của kính lúp; hình nhỏ: mặt cắt của mặt kính.' },
    { title: 'Cách sử dụng', html: `<ol><li>Cầm kính lúp bằng tay (thường là tay trái), tay kia có thể cầm vật hoặc ghi chép.</li><li>Đặt mặt kính <b>gần</b> vật cần quan sát.</li><li>Mắt nhìn qua mặt kính, <b>từ từ điều chỉnh khoảng cách</b> giữa kính và vật cho đến khi nhìn thấy ảnh rõ nét.</li></ol>` },
    { title: 'Bảo quản và an toàn', html: `<ul><li>Lau mặt kính bằng khăn mềm hoặc giấy lau kính; không dùng vật ráp, nhám.</li><li>Cất kính ở nơi khô ráo, tránh rơi vỡ, trầy xước.</li></ul>
      <div class="box tip"><b>Tuyệt đối không</b> dùng kính lúp nhìn trực tiếp vào Mặt Trời – có thể gây tổn thương mắt rất nặng. Không để kính lúp ngoài nắng gần giấy, rơm, vải: kính hội tụ ánh nắng có thể gây cháy.</div>` }
  ],
  summary: 'Kính lúp tạo ảnh lớn hơn vật, gồm tay cầm, khung và mặt kính dày ở giữa. Đặt kính gần vật, chỉnh khoảng cách đến khi thấy rõ. Không nhìn Mặt Trời qua kính lúp.',
  examples: [
    { title: 'Đọc số bội giác', problem: 'Một kính lúp ghi 10x. Con số này cho biết điều gì?', solution: 'Kính có số bội giác 10: ảnh nhìn qua kính lớn gấp khoảng 10 lần so với khi nhìn bằng mắt thường.' },
    { title: 'Chọn dụng cụ phù hợp', problem: 'Để quan sát gân lá cây, em có thể dùng kính lúp không? Còn để quan sát tế bào vi khuẩn thì sao?', solution: 'Gân lá khá lớn, dùng kính lúp là đủ. Vi khuẩn rất nhỏ, kính lúp không đủ phóng đại; cần dùng kính hiển vi (sẽ học ở bài sau).' },
    { title: 'Khắc phục ảnh mờ', problem: 'Bạn Mai nhìn qua kính lúp nhưng ảnh bị mờ. Bạn nên làm gì?', solution: 'Từ từ dịch chuyển kính lại gần hoặc ra xa vật cho tới khi ảnh rõ nét; kiểm tra mặt kính có bị bẩn thì lau bằng khăn mềm.' }
  ],
  exercises: [
    { question: 'Kể tên ba bộ phận chính của kính lúp.', hints: ['Bộ phận để cầm nắm.', 'Bộ phận giữ mặt kính và chính mặt kính.'], solution: 'Tay cầm, khung (vành kính) và mặt kính.' },
    { question: 'Mặt kính của kính lúp có đặc điểm gì về hình dạng?', hints: ['Sờ nhẹ vào mặt kính từ rìa vào giữa.', 'Phần giữa và phần rìa dày mỏng khác nhau thế nào?'], solution: 'Mặt kính trong suốt, dày ở giữa và mỏng ở rìa (thấu kính hội tụ).' },
    { question: 'Nêu hai việc không nên làm khi sử dụng, bảo quản kính lúp.', hints: ['Nghĩ đến việc an toàn cho mắt.', 'Nghĩ đến cách lau chùi mặt kính.'], solution: 'Ví dụ: không nhìn Mặt Trời qua kính lúp; không lau mặt kính bằng vật ráp, nhám (hoặc: không để kính dưới nắng gần vật dễ cháy).' }
  ],
  quiz: [
    { type: 'mcq', q: 'Kính lúp dùng để:', options: ['Quan sát các thiên thể ở xa', 'Quan sát rõ các vật nhỏ', 'Đo độ dài', 'Đo khối lượng'], answer: 1, explain: 'Kính lúp hỗ trợ mắt quan sát vật nhỏ bằng cách tạo ảnh lớn hơn vật.' },
    { type: 'mcq', q: 'Mặt kính của kính lúp có đặc điểm:', options: ['Mỏng ở giữa, dày ở rìa', 'Dày ở giữa, mỏng ở rìa', 'Dày đều', 'Có màu đen'], answer: 1, explain: 'Mặt kính lúp là thấu kính hội tụ, dày ở giữa và mỏng ở rìa.' },
    { type: 'short', q: 'Kính lúp ghi 5x cho ảnh lớn gấp khoảng bao nhiêu lần so với nhìn bằng mắt thường?', answer: '5', unit: 'lần', explain: 'Số ghi 5x nghĩa là số bội giác bằng 5.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Có thể dùng kính lúp để nhìn trực tiếp vào Mặt Trời.', answer: false, explain: 'Nhìn Mặt Trời qua kính lúp có thể gây tổn thương mắt rất nặng.' },
    { type: 'mcq', q: 'Khi quan sát, nếu thấy ảnh mờ, em nên:', options: ['Lắc mạnh kính', 'Điều chỉnh khoảng cách giữa kính và vật', 'Nhắm một mắt lại và đưa kính ra xa hết cỡ', 'Đổi sang dùng thước'], answer: 1, explain: 'Từ từ điều chỉnh khoảng cách đến khi ảnh rõ nét.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nên lau mặt kính lúp bằng khăn mềm.', answer: true, explain: 'Khăn mềm không làm trầy xước mặt kính.' },
    { type: 'mcq', q: 'Vật nào sau đây có thể quan sát tốt bằng kính lúp?', options: ['Vi khuẩn', 'Tế bào máu', 'Cánh con ong', 'Virus'], answer: 2, explain: 'Cánh ong đủ lớn để quan sát bằng kính lúp; vi khuẩn, tế bào máu, virus cần kính hiển vi.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Để kính lúp ngoài nắng gần giấy khô có thể gây cháy.', answer: true, explain: 'Kính lúp hội tụ ánh nắng vào một điểm, làm điểm đó nóng lên và có thể gây cháy.' }
  ]
});
})();
