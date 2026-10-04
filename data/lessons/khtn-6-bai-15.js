/* KHTN 6 – Bài 15. Một số lương thực, thực phẩm. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-6/bai-15', {
  objectives: [
    'Phân biệt được lương thực và thực phẩm; kể tên được một số lương thực, thực phẩm thông dụng.',
    'Nêu được các nhóm chất dinh dưỡng (carbohydrate, protein, lipid, vitamin, chất khoáng) và vai trò của chúng.',
    'Trình bày được cách bảo quản, sử dụng lương thực, thực phẩm an toàn và hợp lí.'
  ],
  intro: 'Mỗi ngày em ăn cơm, uống sữa, ăn rau, thịt, cá… Thức ăn cung cấp năng lượng để em học tập, vui chơi và các chất để cơ thể lớn lên. Ăn thế nào cho đủ chất và an toàn?',
  steps: [
    { title: 'Lương thực và thực phẩm', html: `<ul><li><b>Lương thực</b>: thức ăn chứa nhiều <b>tinh bột</b>, là nguồn chính cung cấp năng lượng: gạo, ngô, khoai, sắn, lúa mì…</li>
      <li><b>Thực phẩm</b>: các loại đồ ăn, uống cung cấp chất dinh dưỡng cho cơ thể: thịt, cá, trứng, sữa, rau, củ, quả, dầu ăn…</li></ul>` },
    { title: 'Các nhóm chất dinh dưỡng', html: `<table class="tbl"><tr><th>Nhóm chất</th><th>Có nhiều trong</th><th>Vai trò chính</th></tr>
      <tr><td><b>Carbohydrate</b> (tinh bột, đường)</td><td>Gạo, ngô, khoai, bánh mì, mía</td><td>Cung cấp năng lượng chủ yếu</td></tr>
      <tr><td><b>Protein</b> (chất đạm)</td><td>Thịt, cá, trứng, sữa, đậu</td><td>Xây dựng, sửa chữa cơ thể; giúp cơ thể lớn lên</td></tr>
      <tr><td><b>Lipid</b> (chất béo)</td><td>Dầu ăn, mỡ, bơ, lạc, vừng</td><td>Dự trữ và cung cấp năng lượng; giúp hấp thụ một số vitamin</td></tr>
      <tr><td><b>Vitamin, chất khoáng</b></td><td>Rau xanh, quả chín, sữa, hải sản</td><td>Điều hoà hoạt động cơ thể, tăng sức đề kháng</td></tr></table>`,
      svg: S.mindmap({ center: 'Chất dinh dưỡng', branches: [{ title: 'Carbohydrate', items: ['năng lượng'] }, { title: 'Protein', items: ['xây dựng cơ thể'] }, { title: 'Lipid', items: ['dự trữ năng lượng'] }, { title: 'Vitamin, khoáng', items: ['điều hoà, đề kháng'] }], w: 620 }), caption: 'Bốn nhóm chất dinh dưỡng chính.' },
    { title: 'Ăn uống hợp lí', html: `<ul><li>Ăn <b>đa dạng</b> nhiều loại thức ăn, phối hợp đủ các nhóm chất; nhiều rau, quả.</li>
      <li>Ăn đủ bữa, đúng giờ; uống đủ nước; hạn chế đồ ngọt, đồ chiên rán, thức ăn nhanh, nước ngọt có ga.</li>
      <li>Ăn quá nhiều gây thừa cân, béo phì; ăn thiếu chất gây suy dinh dưỡng, còi xương, thiếu máu.</li></ul>
      <div class="box note">Em có biết: 1 g tinh bột hoặc 1 g chất đạm cung cấp khoảng 4 kcal, còn 1 g chất béo cung cấp khoảng 9 kcal.</div>` },
    { title: 'Bảo quản và an toàn thực phẩm', html: `<ul><li>Cách bảo quản: làm lạnh (tủ lạnh), làm khô (phơi, sấy), ướp muối, đóng hộp, hút chân không…</li>
      <li>Dấu hiệu thực phẩm hỏng: có mùi lạ, đổi màu, bị mốc, nhớt, vỏ hộp phồng.</li>
      <li>Chọn thực phẩm tươi, rõ nguồn gốc, còn hạn sử dụng; <b>ăn chín, uống sôi</b>; rửa tay trước khi ăn; để riêng thực phẩm sống và chín.</li></ul>
      <div class="box tip">Không ăn thực phẩm bị mốc (như lạc, ngô mốc): nấm mốc có thể sinh độc tố gây hại gan.</div>` }
  ],
  summary: 'Lương thực giàu tinh bột (gạo, ngô, khoai, sắn); thực phẩm là đồ ăn uống cung cấp chất dinh dưỡng. Carbohydrate cung cấp năng lượng; protein xây dựng cơ thể; lipid dự trữ năng lượng; vitamin, chất khoáng điều hoà hoạt động. Ăn đa dạng, cân đối; bảo quản đúng cách, ăn chín uống sôi.',
  examples: [
    { title: 'Nhận ra nhóm chất', problem: 'Mỗi thức ăn sau giàu nhóm chất nào: a) cơm; b) trứng gà; c) dầu lạc; d) quả cam?', solution: 'a) <b>Carbohydrate</b> (tinh bột). b) <b>Protein</b>. c) <b>Lipid</b>. d) <b>Vitamin</b> (vitamin C) và chất khoáng.' },
    { title: 'Tính năng lượng (mở rộng)', problem: 'Một gói bánh chứa 20 g tinh bột và 10 g chất béo. Gói bánh cung cấp khoảng bao nhiêu kcal? (1 g tinh bột ≈ 4 kcal, 1 g chất béo ≈ 9 kcal)', solution: '20 × 4 + 10 × 9 = 80 + 90 = <b>170 kcal</b>.' },
    { title: 'Bảo quản đúng cách', problem: 'Vì sao cá khô, mực khô để được lâu hơn cá tươi?', solution: 'Vì đã được <b>làm khô</b>, lượng nước còn rất ít, vi khuẩn và nấm mốc khó phát triển nên thực phẩm lâu hỏng.' }
  ],
  exercises: [
    { question: 'Bữa trưa của Nam gồm: cơm, canh rau muống, thịt kho, dưa hấu. Hãy cho biết mỗi món cung cấp chủ yếu nhóm chất nào. Bữa ăn này đã cân đối chưa?', hints: ['Xếp từng món vào một nhóm chất.', 'Kiểm tra xem bữa ăn có đủ cả bốn nhóm không.'], solution: 'Cơm: carbohydrate; canh rau muống: vitamin, chất khoáng; thịt kho: protein và lipid; dưa hấu: vitamin, nước. Bữa ăn có đủ các nhóm chất nên khá cân đối.' },
    { question: 'Nêu ba dấu hiệu cho thấy thực phẩm đã bị hỏng, không nên ăn.', hints: ['Dùng mắt và mũi để kiểm tra.', 'Với đồ hộp, quan sát vỏ hộp.'], solution: 'Ví dụ: có mùi ôi, chua, lạ; đổi màu hoặc có mốc; bị nhớt, chảy nước; hộp bị phồng, méo, rỉ; quá hạn sử dụng.' },
    { question: 'Bạn Hà thường bỏ bữa sáng và ăn nhiều bánh kẹo ngọt. Em hãy đưa ra lời khuyên cho Hà.', hints: ['Bữa sáng cung cấp năng lượng cho buổi học.', 'Ăn nhiều đồ ngọt có hại gì?'], solution: 'Hà nên ăn sáng đầy đủ (ví dụ bánh mì với trứng, sữa) để có năng lượng học tập; hạn chế bánh kẹo ngọt vì dễ gây sâu răng, thừa cân, và thiếu các chất dinh dưỡng khác; ăn thêm rau, quả.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Loại nào sau đây là lương thực?', options: ['Thịt lợn', 'Gạo', 'Cà chua', 'Dầu ăn'], answer: 1, explain: 'Gạo giàu tinh bột, là lương thực chính của người Việt.' },
    { type: 'mcq', q: 'Chất dinh dưỡng giúp xây dựng và sửa chữa cơ thể là:', options: ['Carbohydrate', 'Lipid', 'Protein (chất đạm)', 'Nước'], answer: 2, explain: 'Protein là “vật liệu” xây dựng cơ thể.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Rau xanh và quả chín cung cấp nhiều vitamin và chất khoáng.', answer: true, explain: 'Rau, quả là nguồn vitamin, chất khoáng và chất xơ.' },
    { type: 'mcq', q: 'Cách nào KHÔNG phải là cách bảo quản thực phẩm?', options: ['Làm lạnh', 'Phơi khô', 'Ướp muối', 'Để ngoài trời nắng nhiều ngày khi đã nấu chín'], answer: 3, explain: 'Thức ăn chín để ngoài nhiệt độ phòng lâu sẽ bị vi khuẩn phát triển, gây hỏng.' },
    { type: 'short', q: 'Mỗi gam chất béo cung cấp khoảng 9 kcal. 15 g dầu ăn cung cấp khoảng bao nhiêu kcal?', answer: '135', unit: 'kcal', calc: '15*9', explain: '15 × 9 = 135 kcal.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Có thể ăn lạc bị mốc sau khi rang kĩ.', answer: false, explain: 'Độc tố của nấm mốc rất bền, rang không phá huỷ hết; không nên ăn thực phẩm mốc.' },
    { type: 'mcq', q: 'Dầu ăn, mỡ động vật, bơ chứa nhiều:', options: ['Tinh bột', 'Chất béo (lipid)', 'Chất đạm', 'Vitamin C'], answer: 1, explain: 'Đây là các thực phẩm giàu lipid.' },
    { type: 'short', q: 'Một bát cơm chứa khoảng 50 g tinh bột. Biết 1 g tinh bột cung cấp khoảng 4 kcal, bát cơm cung cấp khoảng bao nhiêu kcal từ tinh bột?', answer: '200', unit: 'kcal', calc: '50*4', explain: '50 × 4 = 200 kcal.' }
  ]
});
})();
