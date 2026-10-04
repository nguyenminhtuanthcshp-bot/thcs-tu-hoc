/* KHTN 6 – Bài 22. Cơ thể sinh vật. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-6/bai-22', {
  objectives: [
    'Phân biệt được vật sống và vật không sống qua các đặc trưng của sự sống.',
    'Nêu được khái niệm cơ thể đơn bào, cơ thể đa bào và lấy được ví dụ.',
    'Kể được các quá trình sống cơ bản của cơ thể.'
  ],
  intro: 'Con mèo, cây bàng, cây nấm là vật sống; hòn đá, chiếc bàn là vật không sống. Dựa vào đâu để phân biệt? Và vì sao có sinh vật chỉ gồm một tế bào nhưng vẫn sống được?',
  steps: [
    { title: 'Vật sống và vật không sống', html: `<p><b>Vật sống</b> (sinh vật) có các đặc trưng mà vật không sống không có:</p>
      <ul><li><b>Trao đổi chất và chuyển hoá năng lượng</b>: lấy thức ăn, nước, khí từ môi trường và thải chất thải.</li><li><b>Sinh trưởng</b> (lớn lên) và <b>phát triển</b>.</li>
      <li><b>Cảm ứng</b>: phản ứng với kích thích (cây hướng về ánh sáng, tay rụt lại khi chạm vật nóng).</li><li><b>Sinh sản</b>: tạo ra cá thể mới.</li><li><b>Vận động</b>, <b>hô hấp</b>, <b>bài tiết</b>.</li></ul>` },
    { title: 'Cơ thể đơn bào', html: `<p><b>Cơ thể đơn bào</b> chỉ gồm <b>một tế bào</b>; tế bào đó thực hiện <b>tất cả</b> các quá trình sống.</p>
      <p>Ví dụ: vi khuẩn, trùng roi, trùng giày, trùng biến hình, tảo lục đơn bào, nấm men.</p>` },
    { title: 'Cơ thể đa bào', html: `<p><b>Cơ thể đa bào</b> gồm <b>nhiều tế bào</b>; các tế bào <b>phân hoá</b> thành nhiều loại, mỗi loại đảm nhận chức năng riêng và phối hợp với nhau.</p>
      <p>Ví dụ: cây cam, cây rêu, con ếch, con người, nấm rơm.</p>`,
      svg: S.mindmap({ center: 'Cơ thể sinh vật', branches: [{ title: 'Đơn bào', items: ['1 tế bào', 'Vi khuẩn, trùng roi', 'Nấm men, trùng giày'] }, { title: 'Đa bào', items: ['Nhiều tế bào', 'Tế bào phân hoá', 'Cây, con vật, người'] }], w: 600 }),
      caption: 'Hai nhóm cơ thể sinh vật.' },
    { title: 'So sánh', html: `<table class="tbl"><tr><th>Tiêu chí</th><th>Đơn bào</th><th>Đa bào</th></tr><tr><td>Số tế bào</td><td>Một</td><td>Nhiều</td></tr>
      <tr><td>Phân hoá chức năng</td><td>Một tế bào làm mọi việc</td><td>Mỗi loại tế bào một chức năng</td></tr><tr><td>Kích thước</td><td>Thường rất nhỏ, cần kính hiển vi</td><td>Thường lớn, nhìn thấy bằng mắt thường</td></tr></table>` }
  ],
  summary: 'Vật sống có các đặc trưng: trao đổi chất, sinh trưởng, cảm ứng, sinh sản, vận động, hô hấp, bài tiết. Cơ thể đơn bào gồm một tế bào làm mọi chức năng; cơ thể đa bào gồm nhiều tế bào đã phân hoá, phối hợp với nhau.',
  examples: [
    { title: 'Vật sống?', problem: 'Chiếc xe máy cũng "ăn" xăng, "thải" khói và chuyển động. Xe máy có phải vật sống không?', solution: '<b>Không</b>. Xe máy không tự lớn lên, không sinh sản, không cảm ứng; nó không có cấu tạo tế bào.' },
    { title: 'Phân loại', problem: 'Xếp vào nhóm đơn bào hoặc đa bào: trùng roi, cây lúa, vi khuẩn lactic, con cá chép.', solution: 'Đơn bào: <b>trùng roi, vi khuẩn lactic</b>. Đa bào: <b>cây lúa, cá chép</b>.' },
    { title: 'Cảm ứng', problem: 'Chạm vào lá cây xấu hổ (trinh nữ), lá cụp lại. Đây là đặc trưng nào của sự sống?', solution: '<b>Cảm ứng</b> – phản ứng với kích thích từ môi trường.' }
  ],
  exercises: [
    { question: 'Nêu 3 dấu hiệu chứng tỏ con gà là vật sống.', hints: ['Gà có ăn, lớn lên không?', 'Gà có đẻ trứng, phản ứng khi bị đuổi không?'], solution: 'Gà ăn thóc, uống nước, thải phân (trao đổi chất); gà con lớn thành gà trưởng thành (sinh trưởng); gà đẻ trứng nở ra gà con (sinh sản); gà chạy khi bị đuổi (cảm ứng, vận động).' },
    { question: 'Vì sao nói một tế bào trùng giày là một cơ thể hoàn chỉnh?', hints: ['Trùng giày có mấy tế bào?', 'Tế bào đó thực hiện những quá trình sống nào?'], solution: 'Trùng giày chỉ có một tế bào nhưng tế bào đó tự thực hiện được mọi quá trình sống: lấy thức ăn, tiêu hoá, hô hấp, bài tiết, di chuyển, sinh sản – nên nó là một cơ thể hoàn chỉnh (cơ thể đơn bào).' },
    { question: 'Nấm men làm bánh mì và nấm rơm đều là nấm. Chúng thuộc nhóm cơ thể nào?', hints: ['Nấm men có kích thước thế nào?', 'Nấm rơm nhìn thấy bằng mắt thường.'], solution: 'Nấm men: cơ thể <b>đơn bào</b>. Nấm rơm: cơ thể <b>đa bào</b>.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Vật nào sau đây là vật sống?', options: ['Hòn đá', 'Cây nấm', 'Chiếc xe đạp', 'Ngọn nến'], answer: 1, explain: 'Nấm có cấu tạo tế bào, trao đổi chất, sinh sản.' },
    { type: 'mcq', q: 'Cơ thể đơn bào là cơ thể:', options: ['Gồm một tế bào', 'Gồm hai tế bào', 'Không có tế bào', 'Gồm nhiều tế bào giống nhau'], answer: 0, explain: 'Đơn bào = một tế bào.' },
    { type: 'mcq', q: 'Sinh vật nào là cơ thể đa bào?', options: ['Trùng roi', 'Vi khuẩn', 'Cây rêu', 'Trùng giày'], answer: 2, explain: 'Cây rêu gồm nhiều tế bào.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Ở cơ thể đa bào, các tế bào phân hoá thành nhiều loại, mỗi loại có chức năng riêng.', answer: true, explain: 'Đó là đặc điểm của cơ thể đa bào.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Cơ thể đơn bào không thực hiện được quá trình sinh sản.', answer: false, explain: 'Cơ thể đơn bào sinh sản bằng cách phân chia tế bào.' },
    { type: 'mcq', q: 'Cây hướng ngọn về phía có ánh sáng là biểu hiện của:', options: ['Sinh sản', 'Cảm ứng', 'Bài tiết', 'Hô hấp'], answer: 1, explain: 'Phản ứng với kích thích ánh sáng là cảm ứng.' },
    { type: 'mcq', q: 'Đặc điểm nào KHÔNG phải của vật sống?', options: ['Trao đổi chất', 'Sinh sản', 'Được con người chế tạo ra', 'Lớn lên'], answer: 2, explain: 'Vật do người chế tạo là vật không sống.' },
    { type: 'short', q: 'Cơ thể chỉ gồm một tế bào gọi là cơ thể gì? (điền 2 tiếng)', answer: ['đơn bào', 'don bao'], answerText: 'đơn bào', explain: 'Ví dụ trùng roi, vi khuẩn.' }
  ]
});
})();
