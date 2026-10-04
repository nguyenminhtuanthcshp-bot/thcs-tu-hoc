/* KHTN 6 – Bài 48. Sự chuyển hoá năng lượng. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-6/bai-48', {
  objectives: [
    'Nêu được năng lượng có thể chuyển hoá từ dạng này sang dạng khác.',
    'Mô tả được sự chuyển hoá năng lượng trong một số thiết bị, hiện tượng quen thuộc.',
    'Phát biểu được định luật bảo toàn năng lượng và vận dụng để tính toán đơn giản.'
  ],
  intro: 'Khi bật quạt, điện biến thành chuyển động của cánh quạt. Khi ta đạp xe có đèn dynamo, chuyển động biến thành ánh sáng. Năng lượng không tự sinh ra, cũng không tự mất đi, mà chỉ <b>chuyển hoá</b> từ dạng này sang dạng khác.',
  steps: [
    { title: 'Sự chuyển hoá năng lượng', html: `<p>Năng lượng có thể <b>chuyển hoá</b> (biến đổi) từ dạng này sang dạng khác:</p>
      <table class="tbl"><tr><th>Thiết bị / hiện tượng</th><th>Chuyển hoá năng lượng</th></tr>
      <tr><td>Quạt điện</td><td>Điện → động năng (cánh quạt) + nhiệt + âm thanh</td></tr><tr><td>Bóng đèn</td><td>Điện → ánh sáng + nhiệt</td></tr>
      <tr><td>Nồi cơm điện, bàn là</td><td>Điện → nhiệt</td></tr><tr><td>Pin mặt trời</td><td>Ánh sáng → điện</td></tr><tr><td>Cây xanh quang hợp</td><td>Ánh sáng → hoá học (chất hữu cơ)</td></tr>
      <tr><td>Bếp gas</td><td>Hoá học → nhiệt + ánh sáng</td></tr><tr><td>Quả bóng rơi</td><td>Thế năng hấp dẫn → động năng</td></tr></table>` },
    { title: 'Ví dụ: nhà máy thuỷ điện', html: `<p>Nước ở hồ chứa trên cao có thế năng hấp dẫn → chảy xuống, thế năng chuyển thành động năng → làm quay tua-bin → máy phát biến động năng thành điện năng.</p>`,
      svg: S.flow({ items: ['Thế năng của nước trên cao', 'Động năng dòng nước', 'Tua-bin quay', 'Năng lượng điện'], w: 640, size: 13 }).replace('Sơ đồ các bước', 'Chuyển hoá năng lượng ở nhà máy thuỷ điện'),
      caption: 'Chuỗi chuyển hoá năng lượng ở nhà máy thuỷ điện.' },
    { title: 'Định luật bảo toàn năng lượng', html: `<div class="box key">Năng lượng <b>không tự sinh ra</b> và <b>không tự mất đi</b>; nó chỉ <b>chuyển hoá</b> từ dạng này sang dạng khác hoặc <b>truyền</b> từ vật này sang vật khác. Tổng năng lượng được bảo toàn.</div>
      <p>Ví dụ: bóng đèn nhận 100 J điện năng thì tổng năng lượng ánh sáng và nhiệt nó toả ra cũng đúng bằng 100 J.</p>`,
      svg: S.energyFlow({ input: { label: 'Điện năng', value: 100 }, outputs: [{ label: 'Ánh sáng', value: 20 }, { label: 'Nhiệt', value: 80 }], unit: 'J' }),
      caption: 'Ví dụ một bóng đèn sợi đốt: 100 J điện năng = 20 J ánh sáng + 80 J nhiệt (số liệu minh hoạ).' },
    { title: 'Con lắc và quả bóng nảy', html: `<p>Con lắc dao động: ở vị trí cao nhất, thế năng lớn nhất; khi đi xuống, thế năng chuyển dần thành động năng; ở vị trí thấp nhất, động năng lớn nhất; rồi lại chuyển ngược lại.</p>
      <p>Quả bóng rơi xuống rồi nảy lên nhưng không cao bằng lúc đầu: một phần năng lượng đã chuyển thành nhiệt và âm thanh (không mất đi mà chuyển sang dạng khác).</p>` }
  ],
  summary: 'Năng lượng có thể chuyển hoá từ dạng này sang dạng khác (điện → ánh sáng, nhiệt, động năng; ánh sáng → điện, hoá học; thế năng ↔ động năng…). Định luật bảo toàn năng lượng: năng lượng không tự sinh ra, không tự mất đi, chỉ chuyển hoá hoặc truyền đi; tổng năng lượng được bảo toàn.',
  examples: [
    { title: 'Mô tả chuyển hoá', problem: 'Mô tả sự chuyển hoá năng lượng khi dùng máy sấy tóc.', solution: 'Điện năng → <b>nhiệt</b> (gió nóng) + <b>động năng</b> (quạt quay tạo gió) + <b>âm thanh</b> (tiếng ồn).' },
    { title: 'Tính theo bảo toàn', problem: 'Một quạt điện nhận 500 J điện năng, trong đó 400 J chuyển thành động năng cánh quạt. Phần còn lại chuyển thành nhiệt và âm thanh là bao nhiêu?', solution: '500 − 400 = <b>100 J</b>.' },
    { title: 'Quả bóng nảy', problem: 'Vì sao quả bóng nảy lên mỗi lần một thấp hơn?', solution: 'Mỗi lần chạm đất, một phần năng lượng cơ học chuyển thành <b>nhiệt</b> và <b>âm thanh</b>, nên thế năng lúc nảy lên nhỏ dần.' }
  ],
  exercises: [
    { question: 'Bóng đèn LED nhận 50 J điện năng, phát ra 20 J năng lượng ánh sáng. Tính năng lượng chuyển thành nhiệt.', hints: ['Áp dụng định luật bảo toàn năng lượng.', 'Điện năng = ánh sáng + nhiệt.'], solution: 'Nhiệt = 50 − 20 = <b>30 J</b>.' },
    { question: 'Mô tả chuỗi chuyển hoá năng lượng khi em ăn cơm rồi chạy bộ.', hints: ['Cơm chứa năng lượng dạng gì?', 'Chạy bộ: cơ thể chuyển động, nóng lên.'], solution: 'Năng lượng <b>hoá học</b> trong cơm → cơ thể chuyển hoá thành <b>động năng</b> (chạy) và <b>nhiệt</b> (cơ thể nóng lên, đổ mồ hôi).' },
    { question: 'Có người nói: "Khi quả bóng lăn chậm dần rồi dừng lại, năng lượng của nó đã biến mất." Câu nói đó đúng không? Giải thích.', hints: ['Nhắc lại định luật bảo toàn năng lượng.', 'Ma sát làm gì với năng lượng?'], solution: '<b>Không đúng</b>. Động năng của quả bóng đã chuyển hoá thành <b>nhiệt</b> (do ma sát với mặt đất và không khí) và một ít âm thanh; năng lượng không tự mất đi.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Bóng đèn điện sáng chuyển hoá điện năng chủ yếu thành:', options: ['Ánh sáng và nhiệt', 'Động năng', 'Năng lượng hoá học', 'Âm thanh'], answer: 0, explain: 'Đèn phát sáng và nóng lên.' },
    { type: 'mcq', q: 'Pin mặt trời chuyển hoá:', options: ['Năng lượng ánh sáng thành điện năng', 'Điện năng thành ánh sáng', 'Nhiệt thành âm thanh', 'Hoá năng thành động năng'], answer: 0, explain: 'Pin mặt trời tạo ra điện từ ánh sáng.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Năng lượng có thể tự sinh ra từ không có gì.', answer: false, explain: 'Theo định luật bảo toàn, năng lượng không tự sinh ra.' },
    { type: 'short', q: 'Một thiết bị nhận 200 J điện năng, tạo ra 150 J năng lượng có ích. Phần năng lượng chuyển sang dạng khác (không có ích) là bao nhiêu J?', answer: '50', unit: 'J', calc: '200-150', explain: '200 − 150 = 50 J.' },
    { type: 'mcq', q: 'Khi quả táo rơi từ trên cây xuống, năng lượng chuyển hoá:', options: ['Thế năng hấp dẫn → động năng', 'Động năng → thế năng', 'Điện → nhiệt', 'Ánh sáng → hoá học'], answer: 0, explain: 'Độ cao giảm, tốc độ tăng.' },
    { type: 'mcq', q: 'Quang hợp ở cây xanh chuyển hoá:', options: ['Năng lượng ánh sáng → năng lượng hoá học', 'Năng lượng hoá học → ánh sáng', 'Điện → nhiệt', 'Động năng → âm thanh'], answer: 0, explain: 'Cây dự trữ năng lượng ánh sáng trong chất hữu cơ.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nồi cơm điện chuyển hoá điện năng chủ yếu thành nhiệt năng.', answer: true, explain: 'Nồi cơm điện dùng để nấu (làm nóng).' },
    { type: 'short', q: 'Một bóng đèn nhận 100 J điện năng và toả ra 80 J nhiệt. Năng lượng ánh sáng là bao nhiêu J?', answer: '20', unit: 'J', calc: '100-80', explain: '100 − 80 = 20 J.' }
  ]
});
})();
