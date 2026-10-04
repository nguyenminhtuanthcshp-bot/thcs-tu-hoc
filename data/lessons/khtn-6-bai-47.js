/* KHTN 6 – Bài 47. Một số dạng năng lượng. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-6/bai-47', {
  objectives: [
    'Kể được một số dạng năng lượng: động năng, thế năng hấp dẫn, thế năng đàn hồi, năng lượng nhiệt, ánh sáng, âm thanh, điện, hoá học.',
    'Nêu được động năng phụ thuộc khối lượng và tốc độ; thế năng hấp dẫn phụ thuộc khối lượng và độ cao.',
    'Nhận biết được dạng năng lượng của vật trong các tình huống cụ thể.'
  ],
  intro: 'Viên bi đang lăn, quả dừa trên cây cao, cánh cung đang giương, bóng đèn đang sáng, cái loa đang phát nhạc, cục pin… đều mang năng lượng nhưng ở những <b>dạng</b> khác nhau.',
  steps: [
    { title: 'Năng lượng cơ học: động năng và thế năng', html: `<ul><li><b>Động năng</b>: năng lượng của vật đang <b>chuyển động</b>. Vật có khối lượng càng lớn và chuyển động càng nhanh thì động năng càng lớn.</li>
      <li><b>Thế năng hấp dẫn</b>: năng lượng của vật ở <b>trên cao</b> so với mặt đất. Vật càng nặng và càng ở cao thì thế năng hấp dẫn càng lớn.</li>
      <li><b>Thế năng đàn hồi</b>: năng lượng của vật bị <b>biến dạng đàn hồi</b> (lò xo bị nén, dây cung bị kéo căng).</li></ul>` },
    { title: 'Các dạng năng lượng khác', html: `<table class="tbl"><tr><th>Dạng năng lượng</th><th>Ví dụ vật có năng lượng đó</th></tr>
      <tr><td><b>Năng lượng nhiệt</b></td><td>Nước nóng, bàn là nóng, ngọn lửa</td></tr><tr><td><b>Năng lượng ánh sáng</b></td><td>Ánh sáng Mặt Trời, đèn đang sáng</td></tr>
      <tr><td><b>Năng lượng âm thanh</b></td><td>Tiếng trống, loa đang phát nhạc</td></tr><tr><td><b>Năng lượng điện</b></td><td>Dòng điện chạy trong dây dẫn, ổ cắm điện</td></tr>
      <tr><td><b>Năng lượng hoá học</b></td><td>Thức ăn, xăng, than, pin, gas (dự trữ trong chất)</td></tr></table>`,
      svg: S.mindmap({ center: 'Các dạng năng lượng', branches: [{ title: 'Cơ học', items: ['Động năng', 'Thế năng hấp dẫn', 'Thế năng đàn hồi'] }, { title: 'Nhiệt', items: ['Nước nóng, lửa'] }, { title: 'Ánh sáng', items: ['Mặt Trời, đèn'] }, { title: 'Âm thanh', items: ['Tiếng trống, loa'] }, { title: 'Điện', items: ['Dòng điện'] }, { title: 'Hoá học', items: ['Thức ăn, pin, xăng'] }], w: 640 }),
      caption: 'Sơ đồ các dạng năng lượng thường gặp.' },
    { title: 'Một vật có thể có nhiều dạng năng lượng', html: `<p>Chiếc máy bay đang bay: có <b>động năng</b> (đang chuyển động), <b>thế năng hấp dẫn</b> (ở trên cao), động cơ phát ra <b>âm thanh</b> và <b>nhiệt</b>; nhiên liệu trong bình chứa <b>năng lượng hoá học</b>.</p>` },
    { title: 'So sánh động năng, thế năng', html: `<ul><li>Hai xe cùng tốc độ: xe tải (nặng) có động năng lớn hơn xe máy.</li><li>Cùng một quả bóng: lăn nhanh có động năng lớn hơn lăn chậm.</li>
      <li>Cùng một quả táo: ở cành cao có thế năng hấp dẫn lớn hơn ở cành thấp.</li></ul>
      <div class="box warn">Xe chạy càng nhanh, động năng càng lớn, va chạm càng nguy hiểm – vì vậy phải đi đúng tốc độ quy định.</div>` }
  ],
  summary: 'Các dạng năng lượng: động năng (vật chuyển động; phụ thuộc khối lượng và tốc độ), thế năng hấp dẫn (vật ở trên cao; phụ thuộc khối lượng và độ cao), thế năng đàn hồi (vật biến dạng đàn hồi), năng lượng nhiệt, ánh sáng, âm thanh, điện, hoá học. Một vật có thể đồng thời có nhiều dạng năng lượng.',
  examples: [
    { title: 'Gọi tên dạng năng lượng', problem: 'Vật có dạng năng lượng nào: a) Dây cung đang giương; b) Quả dừa trên cây; c) Cục pin; d) Ô tô đang chạy?', solution: 'a) <b>Thế năng đàn hồi</b>. b) <b>Thế năng hấp dẫn</b>. c) <b>Năng lượng hoá học</b>. d) <b>Động năng</b>.' },
    { title: 'So sánh động năng', problem: 'Hai quả bóng cùng lăn với cùng tốc độ: bóng đá (450 g) và bóng bàn (2,7 g). Quả nào có động năng lớn hơn?', solution: '<b>Bóng đá</b>, vì khối lượng lớn hơn khi cùng tốc độ.' },
    { title: 'So sánh thế năng', problem: 'Cùng một viên gạch đặt ở tầng 2 và tầng 5. Ở đâu thế năng hấp dẫn lớn hơn?', solution: 'Ở <b>tầng 5</b>, vì cao hơn.' }
  ],
  exercises: [
    { question: 'Kể tên các dạng năng lượng có ở chiếc loa đang phát nhạc.', hints: ['Loa dùng gì để hoạt động?', 'Loa phát ra gì? Sờ loa lâu có ấm không?'], solution: '<b>Năng lượng điện</b> (cung cấp cho loa), <b>năng lượng âm thanh</b> (phát ra), <b>năng lượng nhiệt</b> (loa ấm lên); màng loa rung có động năng.' },
    { question: 'Vì sao búa máy đóng cọc được nâng lên càng cao thì cọc bị đóng lún càng sâu?', hints: ['Búa ở trên cao có dạng năng lượng nào?', 'Độ cao ảnh hưởng thế nào đến năng lượng đó?'], solution: 'Búa ở càng cao thì <b>thế năng hấp dẫn càng lớn</b>; khi rơi xuống, năng lượng truyền cho cọc càng lớn nên cọc lún sâu hơn.' },
    { question: 'Vì sao xe tải chở nặng phải chạy chậm hơn xe con trên cùng một đoạn đường?', hints: ['Động năng phụ thuộc khối lượng và tốc độ.', 'Động năng lớn thì va chạm ra sao? Phanh có dễ không?'], solution: 'Xe tải chở nặng có khối lượng lớn nên cùng tốc độ thì <b>động năng lớn hơn</b> nhiều; khó phanh dừng và va chạm rất nguy hiểm. Chạy chậm giúp giảm động năng, an toàn hơn.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Năng lượng của vật đang chuyển động gọi là:', options: ['Động năng', 'Thế năng hấp dẫn', 'Năng lượng hoá học', 'Năng lượng âm thanh'], answer: 0, explain: 'Vật chuyển động có động năng.' },
    { type: 'mcq', q: 'Lò xo bị nén có:', options: ['Thế năng đàn hồi', 'Năng lượng ánh sáng', 'Năng lượng âm thanh', 'Năng lượng điện'], answer: 0, explain: 'Vật biến dạng đàn hồi có thế năng đàn hồi.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Vật ở càng cao thì thế năng hấp dẫn càng lớn.', answer: true, explain: 'Thế năng hấp dẫn tăng theo độ cao.' },
    { type: 'mcq', q: 'Thức ăn, xăng, pin dự trữ năng lượng dưới dạng:', options: ['Năng lượng hoá học', 'Động năng', 'Năng lượng âm thanh', 'Thế năng đàn hồi'], answer: 0, explain: 'Năng lượng dự trữ trong chất.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Động năng của vật chỉ phụ thuộc vào màu sắc của vật.', answer: false, explain: 'Phụ thuộc khối lượng và tốc độ.' },
    { type: 'mcq', q: 'Hai xe cùng khối lượng, xe nào có động năng lớn hơn?', options: ['Xe chạy nhanh hơn', 'Xe chạy chậm hơn', 'Xe đứng yên', 'Như nhau'], answer: 0, explain: 'Cùng khối lượng, tốc độ lớn hơn thì động năng lớn hơn.' },
    { type: 'mcq', q: 'Tiếng trống mang năng lượng:', options: ['Âm thanh', 'Hoá học', 'Điện', 'Thế năng đàn hồi'], answer: 0, explain: 'Âm thanh là một dạng năng lượng.' },
    { type: 'short', q: 'Máy bay đang bay trên cao có hai dạng năng lượng cơ học là động năng và thế năng gì? (điền 2 tiếng)', answer: ['hấp dẫn', 'hap dan'], answerText: 'hấp dẫn', explain: 'Vì ở trên cao nên có thế năng hấp dẫn.' }
  ]
});
})();
