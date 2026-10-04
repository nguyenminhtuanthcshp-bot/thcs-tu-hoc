/* KHTN 6 – Bài 32. Nấm. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-6/bai-32', {
  objectives: [
    'Nhận biết được một số đại diện nấm và nêu được đặc điểm chung của nấm.',
    'Mô tả được cấu tạo của nấm mũ (mũ nấm, cuống nấm, sợi nấm).',
    'Nêu được vai trò, tác hại của nấm; cách phòng bệnh do nấm và cách phân biệt để tránh ăn phải nấm độc.'
  ],
  intro: 'Nấm rơm, nấm hương, mộc nhĩ là món ăn ngon; nấm men làm bánh mì nở xốp; nhưng mốc làm hỏng bánh mì và có loại nấm độc có thể gây chết người. Nấm là một giới riêng, rất đa dạng.',
  steps: [
    { title: 'Đặc điểm chung của nấm', html: `<ul><li>Nấm là sinh vật <b>nhân thực</b>, có loại <b>đơn bào</b> (nấm men) và loại <b>đa bào</b> (nấm mũ, mốc).</li>
      <li>Thành tế bào cấu tạo bằng <b>chitin</b>; <b>không có diệp lục</b>, không quang hợp → sống <b>dị dưỡng</b>: hoại sinh (phân giải xác sinh vật), kí sinh hoặc cộng sinh.</li>
      <li>Sinh sản chủ yếu bằng <b>bào tử</b>. Nấm ưa nơi ẩm, ấm, nhiều chất hữu cơ.</li></ul>` },
    { title: 'Cấu tạo nấm mũ', html: `<p>Phần ta thường ăn là <b>cơ quan sinh sản</b> (thể quả) gồm <b>mũ nấm</b> (mặt dưới có các phiến mỏng chứa bào tử) và <b>cuống nấm</b>. Phần nằm trong đất, gỗ là hệ <b>sợi nấm</b> hút chất dinh dưỡng.</p>`,
      svg: S.labelled({ w: 590, h: 260, body: '<path d="M110,110 C120,40 300,30 330,110 Z" fill="#f59e0b" stroke="#92400e" stroke-width="3"/><path d="M110,110 L330,110" stroke="#92400e" stroke-width="3"/>' + [130, 150, 170, 190, 210, 230, 250, 270, 290, 310].map(function (x) { return '<line x1="' + x + '" y1="110" x2="' + (220 + (x - 220) * 0.4) + '" y2="122" stroke="#b45309" stroke-width="1.5"/>'; }).join('') + '<path d="M200,122 L196,200 L244,200 L240,122 Z" fill="#fef3c7" stroke="#92400e" stroke-width="3"/><path d="M150,200 L290,200" stroke="#78350f" stroke-width="2"/><path d="M200,200 C180,215 160,210 140,228 M210,200 C205,220 190,230 185,245 M230,200 C240,220 255,228 270,240 M240,200 C260,208 285,210 300,225 M220,200 L222,245" stroke="#a16207" stroke-width="1.6" fill="none"/>', labels: [[220, 60, 400, 50, 'Mũ nấm'], [300, 116, 400, 110, 'Phiến nấm (chứa bào tử)'], [240, 165, 400, 170, 'Cuống nấm'], [260, 232, 400, 235, 'Sợi nấm']] }),
      caption: 'Cấu tạo nấm mũ (hình vẽ đơn giản).' },
    { title: 'Đa dạng nấm', html: `<ul><li><b>Nấm đơn bào</b>: nấm men (làm bánh mì, lên men rượu).</li><li><b>Nấm đa bào dạng sợi</b>: mốc trắng, mốc xanh (penicillium), mốc tương.</li>
      <li><b>Nấm mũ</b>: nấm rơm, nấm hương, nấm sò, nấm linh chi; mộc nhĩ (nấm tai mèo).</li><li><b>Nấm độc</b>: nấm độc đen, nấm độc trắng (Amanita)… có thể gây tử vong.</li></ul>` },
    { title: 'Vai trò và tác hại', html: `<table class="tbl"><tr><th>Có lợi</th><th>Có hại</th></tr>
      <tr><td>Làm thức ăn (nấm rơm, nấm hương, mộc nhĩ)<br>Làm thuốc (linh chi, đông trùng hạ thảo; <b>penicillin</b> – kháng sinh đầu tiên – chiết từ mốc xanh)<br>Chế biến thực phẩm (nấm men làm bánh mì, mốc tương)<br>Phân giải xác sinh vật, làm sạch môi trường</td>
      <td>Gây bệnh ở người: <b>hắc lào, lang ben</b>, nấm da, nấm móng, tưa lưỡi<br>Gây bệnh cây trồng (đạo ôn lúa, gỉ sắt)<br>Làm hỏng thức ăn, đồ dùng (mốc)<br>Nấm độc gây ngộ độc, tử vong</td></tr></table>` },
    { title: 'Phòng bệnh và tránh nấm độc', html: `<ul><li>Giữ cơ thể khô ráo, sạch sẽ; không dùng chung khăn, quần áo; phơi quần áo nơi có nắng.</li><li>Bảo quản thực phẩm nơi khô, thoáng; không ăn thức ăn bị mốc.</li>
      <li><b>Không hái, ăn nấm lạ mọc hoang</b>. Nhiều nấm độc trông rất giống nấm ăn được; nhiều nấm độc có màu sắc sặc sỡ, có vòng cuống và bao gốc, nhưng <b>không có quy tắc nào chắc chắn</b> để phân biệt bằng mắt thường – an toàn nhất là chỉ ăn nấm trồng rõ nguồn gốc.</li></ul>` }
  ],
  summary: 'Nấm là sinh vật nhân thực, đơn bào hoặc đa bào, thành tế bào bằng chitin, không có diệp lục, sống dị dưỡng, sinh sản bằng bào tử. Nấm mũ gồm mũ, cuống, sợi nấm. Nấm làm thức ăn, thuốc, chế biến thực phẩm, phân giải chất hữu cơ; nhưng gây bệnh (hắc lào, lang ben), làm hỏng đồ ăn, nấm độc có thể gây chết người.',
  examples: [
    { title: 'Vì sao nấm không phải thực vật', problem: 'Nấm mọc từ đất như cây. Vì sao không xếp nấm vào giới Thực vật?', solution: 'Nấm <b>không có diệp lục</b>, không tự quang hợp mà sống dị dưỡng; thành tế bào bằng <b>chitin</b> (thực vật: cellulose).' },
    { title: 'Mốc bánh mì', problem: 'Vì sao bánh mì để trong túi kín, nơi ẩm vài ngày sẽ bị mốc?', solution: 'Bào tử nấm mốc có sẵn trong không khí; bánh mì giàu chất hữu cơ, túi kín giữ <b>ẩm</b>, nhiệt độ ấm – điều kiện thuận lợi cho mốc phát triển.' },
    { title: 'Nấm có ích', problem: 'Kể tên một loại nấm dùng làm thức ăn và một loại dùng trong sản xuất thực phẩm.', solution: 'Làm thức ăn: <b>nấm rơm</b> (hoặc nấm hương, mộc nhĩ). Sản xuất thực phẩm: <b>nấm men</b> làm bánh mì.' }
  ],
  exercises: [
    { question: 'Vì sao nấm thường mọc nhiều vào mùa mưa, ở nơi ẩm ướt như thân cây mục, đống rơm?', hints: ['Nấm cần độ ẩm và nhiệt độ thế nào?', 'Nấm lấy chất dinh dưỡng từ đâu?'], solution: 'Nấm cần <b>độ ẩm cao</b>, nhiệt độ ấm và nhiều <b>chất hữu cơ</b> (nấm sống dị dưỡng). Thân cây mục, đống rơm vào mùa mưa có đủ các điều kiện đó.' },
    { question: 'Nêu ba biện pháp phòng bệnh nấm da (hắc lào, lang ben).', hints: ['Nấm ưa ẩm.', 'Bệnh lây qua đồ dùng chung.'], solution: 'Tắm rửa thường xuyên, lau khô người; mặc quần áo khô, thoáng, phơi nắng; không dùng chung khăn, quần áo, mũ với người bệnh.' },
    { question: 'Bạn Nam thấy một cây nấm màu đỏ tươi rất đẹp trong rừng và định hái về nấu canh. Em khuyên bạn thế nào?', hints: ['Có phân biệt chắc chắn nấm độc bằng mắt thường được không?', 'Nấm độc có thể gây hậu quả gì?'], solution: 'Khuyên bạn <b>tuyệt đối không hái, không ăn</b> nấm lạ mọc hoang. Nhiều nấm độc có màu sặc sỡ và không thể phân biệt chắc chắn bằng mắt thường; ăn phải có thể ngộ độc nặng, thậm chí tử vong. Chỉ ăn nấm trồng, rõ nguồn gốc.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Thành tế bào của nấm được cấu tạo từ:', options: ['Chitin', 'Cellulose', 'Protein', 'Tinh bột'], answer: 0, explain: 'Thành tế bào nấm bằng chitin.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nấm có diệp lục và tự quang hợp được.', answer: false, explain: 'Nấm không có diệp lục, sống dị dưỡng.' },
    { type: 'mcq', q: 'Nấm nào là nấm đơn bào?', options: ['Nấm men', 'Nấm rơm', 'Nấm hương', 'Mộc nhĩ'], answer: 0, explain: 'Nấm men là nấm đơn bào.' },
    { type: 'mcq', q: 'Kháng sinh penicillin được chiết xuất từ:', options: ['Nấm mốc xanh', 'Nấm rơm', 'Vi khuẩn lactic', 'Virus'], answer: 0, explain: 'Penicillin lấy từ mốc xanh Penicillium.' },
    { type: 'mcq', q: 'Bệnh nào do nấm gây ra?', options: ['Hắc lào', 'Sởi', 'Lao', 'Sốt rét'], answer: 0, explain: 'Hắc lào do nấm; sởi do virus; lao do vi khuẩn; sốt rét do nguyên sinh vật.' },
    { type: 'mcq', q: 'Phần nấm nằm trong đất, gỗ có chức năng hút chất dinh dưỡng là:', options: ['Sợi nấm', 'Mũ nấm', 'Phiến nấm', 'Cuống nấm'], answer: 0, explain: 'Hệ sợi nấm hút chất dinh dưỡng.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Có thể phân biệt chắc chắn nấm độc bằng cách nhìn màu sắc.', answer: false, explain: 'Không có quy tắc chắc chắn; không ăn nấm lạ.' },
    { type: 'short', q: 'Nấm sinh sản chủ yếu bằng gì? (điền 2 tiếng)', answer: ['bào tử', 'bao tu'], answerText: 'bào tử', explain: 'Bào tử nằm ở phiến nấm (nấm mũ).' }
  ]
});
})();
