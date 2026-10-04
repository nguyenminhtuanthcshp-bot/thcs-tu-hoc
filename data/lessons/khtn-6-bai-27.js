/* KHTN 6 – Bài 27. Vi khuẩn. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-6/bai-27', {
  objectives: [
    'Mô tả được hình dạng và cấu tạo đơn giản của vi khuẩn.',
    'Nêu được vai trò có lợi và tác hại của vi khuẩn; kể được một số bệnh do vi khuẩn gây ra.',
    'Trình bày được một số biện pháp phòng bệnh do vi khuẩn và tính được số vi khuẩn sau nhiều lần phân chia.'
  ],
  intro: 'Vi khuẩn có mặt ở khắp nơi: trong đất, nước, không khí, trên da và trong ruột chúng ta. Có loại gây bệnh, nhưng cũng có rất nhiều loại có ích.',
  steps: [
    { title: 'Hình dạng vi khuẩn', html: `<p>Vi khuẩn là sinh vật <b>đơn bào, nhân sơ</b>, kích thước rất nhỏ (khoảng 1–5 µm). Chúng có nhiều hình dạng: <b>hình cầu, hình que, hình xoắn, hình dấu phẩy</b>.</p>`,
      svg: S.bacteria(), caption: 'Một số hình dạng vi khuẩn (hình vẽ phóng to, không theo tỉ lệ).' },
    { title: 'Cấu tạo', html: `<p>Tế bào vi khuẩn gồm: <b>thành tế bào</b>, <b>màng tế bào</b>, <b>tế bào chất</b>, <b>vùng nhân</b> (chưa có màng nhân). Một số vi khuẩn có <b>roi</b> để di chuyển, <b>lông</b> để bám.</p>`,
      svg: S.cell('nhan-so'), caption: 'Sơ đồ cấu tạo tế bào vi khuẩn.' },
    { title: 'Vai trò có lợi', html: `<ul><li><b>Phân giải</b> xác sinh vật, chất thải thành chất khoáng cho cây – làm sạch môi trường.</li><li>Vi khuẩn cố định đạm ở nốt sần rễ cây họ Đậu giúp đất màu mỡ.</li>
      <li>Chế biến thực phẩm: sữa chua, dưa muối, cà muối, giấm (vi khuẩn lactic, vi khuẩn acetic).</li><li>Vi khuẩn có ích trong ruột giúp tiêu hoá, tổng hợp một số vitamin.</li></ul>` },
    { title: 'Tác hại và bệnh do vi khuẩn', html: `<ul><li>Gây bệnh ở người: <b>tả, lao, thương hàn, uốn ván, tiêu chảy, viêm da…</b></li><li>Gây bệnh cho động vật, thực vật (bệnh bạc lá lúa, héo xanh cà chua).</li><li>Làm hỏng thức ăn: thức ăn ôi thiu.</li></ul>
      <p><b>Phòng bệnh</b>: ăn chín uống sôi, rửa tay bằng xà phòng, giữ vệ sinh môi trường, tiêm vaccine (lao, uốn ván, bạch hầu, ho gà…), bảo quản thực phẩm đúng cách. Khi bị bệnh do vi khuẩn, bác sĩ có thể kê <b>kháng sinh</b>; phải dùng đúng, đủ liều theo chỉ định.</p>` },
    { title: 'Vi khuẩn sinh sản rất nhanh', html: `<p>Vi khuẩn sinh sản bằng cách <b>phân đôi</b>. Trong điều kiện thuận lợi, có loài cứ khoảng <b>20 phút</b> lại phân đôi một lần.</p>
      <div class="box key">Sau n lần phân đôi, 1 vi khuẩn tạo ra 2<sup>n</sup> vi khuẩn. 2 giờ = 120 phút = 6 lần × 20 phút → 2<sup>6</sup> = 64 vi khuẩn.</div>
      <p>Vì vậy thức ăn để ở nhiệt độ phòng lâu rất dễ bị ôi thiu – nên bảo quản lạnh.</p>` }
  ],
  summary: 'Vi khuẩn là sinh vật đơn bào nhân sơ, rất nhỏ, có hình cầu, que, xoắn, dấu phẩy. Vi khuẩn phân giải chất hữu cơ, dùng chế biến thực phẩm, cố định đạm; nhưng nhiều loại gây bệnh (tả, lao, thương hàn…) và làm hỏng thức ăn. Phòng bệnh bằng vệ sinh, ăn chín uống sôi, tiêm vaccine.',
  examples: [
    { title: 'Tính số vi khuẩn', problem: 'Một vi khuẩn cứ 20 phút phân đôi một lần. Sau 1 giờ có bao nhiêu vi khuẩn?', solution: '1 giờ = 60 phút = 3 lần phân đôi. Số vi khuẩn: 2<sup>3</sup> = <b>8</b>.' },
    { title: 'Có lợi hay có hại', problem: 'Vi khuẩn lactic và vi khuẩn gây bệnh tả: loại nào có lợi?', solution: '<b>Vi khuẩn lactic</b> có lợi (làm sữa chua, dưa muối); vi khuẩn tả gây bệnh.' },
    { title: 'Bảo quản thức ăn', problem: 'Vì sao cất thức ăn thừa vào tủ lạnh giúp để được lâu hơn?', solution: 'Nhiệt độ thấp làm vi khuẩn <b>sinh sản chậm lại</b>, nên thức ăn lâu bị ôi thiu hơn.' }
  ],
  exercises: [
    { question: 'Một vi khuẩn cứ 30 phút phân đôi một lần. Sau 3 giờ, từ 1 vi khuẩn sẽ có bao nhiêu vi khuẩn?', hints: ['3 giờ = 180 phút. Có mấy lần phân đôi?', '180 : 30 = 6; tính 2⁶.'], solution: '180 : 30 = 6 lần. 2<sup>6</sup> = <b>64</b> vi khuẩn.' },
    { question: 'Kể tên hai bệnh do vi khuẩn gây ra ở người và nêu hai biện pháp phòng bệnh.', hints: ['Bệnh lây qua đường ăn uống, bệnh lây qua đường hô hấp.', 'Vệ sinh ăn uống, tiêm phòng.'], solution: 'Ví dụ: bệnh tả, bệnh lao. Phòng bệnh: ăn chín uống sôi, rửa tay bằng xà phòng; tiêm vaccine phòng lao; giữ vệ sinh nhà ở.' },
    { question: 'Vì sao nói vi khuẩn là "người dọn vệ sinh" của tự nhiên?', hints: ['Xác động vật, lá rụng sẽ ra sao nếu không bị phân huỷ?', 'Vi khuẩn biến chúng thành gì?'], solution: 'Vi khuẩn phân giải xác sinh vật, chất thải thành các chất đơn giản (chất khoáng) trả lại cho đất, cây xanh lại sử dụng được. Nếu không có chúng, xác và chất thải sẽ chất đống khắp nơi.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Vi khuẩn có cấu tạo tế bào:', options: ['Nhân sơ', 'Nhân thực', 'Không có tế bào', 'Đa bào phức tạp'], answer: 0, explain: 'Vi khuẩn chưa có màng nhân.' },
    { type: 'mcq', q: 'Bệnh nào do vi khuẩn gây ra?', options: ['Bệnh lao', 'Bệnh cúm', 'Bệnh sốt rét', 'Bệnh thuỷ đậu'], answer: 0, explain: 'Lao do vi khuẩn lao; cúm, thuỷ đậu do virus; sốt rét do trùng sốt rét.' },
    { type: 'short', q: 'Một vi khuẩn cứ 20 phút phân đôi một lần. Sau 2 giờ có bao nhiêu vi khuẩn?', answer: '64', unit: 'vi khuẩn', calc: '2*2*2*2*2*2', explain: '120 : 20 = 6 lần; 2⁶ = 64.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mọi vi khuẩn đều có hại cho con người.', answer: false, explain: 'Nhiều vi khuẩn có ích (lactic, cố định đạm, vi khuẩn đường ruột).' },
    { type: 'mcq', q: 'Vi khuẩn được dùng để làm:', options: ['Sữa chua', 'Bánh mì (lên men bột)', 'Nấm rơm', 'Muối ăn'], answer: 0, explain: 'Vi khuẩn lactic làm sữa chua; bánh mì dùng nấm men.' },
    { type: 'mcq', q: 'Hình dạng nào KHÔNG phải hình dạng phổ biến của vi khuẩn?', options: ['Hình cầu', 'Hình que', 'Hình xoắn', 'Hình ngôi sao nhiều cánh'], answer: 3, explain: 'Vi khuẩn thường hình cầu, que, xoắn, dấu phẩy.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Bảo quản thức ăn trong tủ lạnh giúp làm chậm sự sinh sản của vi khuẩn.', answer: true, explain: 'Nhiệt độ thấp làm vi khuẩn phát triển chậm.' },
    { type: 'mcq', q: 'Vi khuẩn sinh sản chủ yếu bằng cách:', options: ['Phân đôi', 'Đẻ trứng', 'Tạo hạt', 'Nảy chồi như cây'], answer: 0, explain: 'Một vi khuẩn chia đôi thành hai.' }
  ]
});
})();
