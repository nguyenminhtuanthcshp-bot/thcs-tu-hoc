/* KHTN 6 – Bài 44. Lực ma sát. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-6/bai-44', {
  objectives: [
    'Nêu được lực ma sát là lực tiếp xúc xuất hiện ở bề mặt tiếp xúc giữa hai vật.',
    'Phân biệt được lực ma sát trượt, ma sát lăn và ma sát nghỉ; biểu diễn được lực ma sát bằng mũi tên.',
    'Nêu được tác dụng có lợi, có hại của ma sát và cách làm tăng, giảm ma sát; liên hệ an toàn giao thông.'
  ],
  intro: 'Nếu không có ma sát, em không thể cầm bút, không thể đi bộ, xe không thể phanh lại. Nhưng ma sát cũng làm mòn lốp xe, đế giày. Lực ma sát vừa có lợi, vừa có hại.',
  steps: [
    { title: 'Lực ma sát là gì?', html: `<p><b>Lực ma sát</b> là lực <b>tiếp xúc</b> xuất hiện ở <b>bề mặt tiếp xúc</b> giữa hai vật, có tác dụng cản trở hoặc chống lại xu hướng chuyển động của vật.</p>
      <p>Lực ma sát có chiều <b>ngược</b> với chiều chuyển động (hoặc xu hướng chuyển động) của vật.</p>`,
      svg: S.forces({ w: 480, h: 200, ground: 150, box: { x: 180, y: 90, w: 120, h: 60, label: 'Thùng hàng' }, arrows: [{ x: 300, y: 110, deg: 0, len: 120, label: 'F kéo' }, { x: 180, y: 146, deg: 180, len: 90, label: 'F ma sát', color: '#2563eb', lx: 92, ly: 132, anchor: 'start' }], items: [{ text: [240, 30, 'Chiều chuyển động →'], bold: true, color: '#475569', size: 14 }] }),
      caption: 'Kéo thùng hàng trượt sang phải: lực ma sát trượt ở mặt tiếp xúc hướng sang trái.' },
    { title: 'Ba loại lực ma sát', html: `<table class="tbl"><tr><th>Loại</th><th>Xuất hiện khi</th><th>Ví dụ</th></tr>
      <tr><td><b>Ma sát trượt</b></td><td>Vật <b>trượt</b> trên bề mặt vật khác</td><td>Phanh xe: má phanh trượt trên vành bánh; kéo thùng hàng trên sàn</td></tr>
      <tr><td><b>Ma sát lăn</b></td><td>Vật <b>lăn</b> trên bề mặt vật khác</td><td>Bánh xe lăn trên đường; quả bóng lăn trên sân</td></tr>
      <tr><td><b>Ma sát nghỉ</b></td><td>Giữ vật <b>đứng yên</b> khi có lực tác dụng</td><td>Quyển sách nằm yên trên mặt bàn nghiêng; đẩy tủ nặng mà tủ chưa nhúc nhích</td></tr></table>
      <p>Với cùng một vật, ma sát lăn nhỏ hơn ma sát trượt rất nhiều – vì vậy người ta dùng bánh xe, ổ bi.</p>` },
    { title: 'Ma sát có lợi', html: `<ul><li>Giúp ta đi lại không bị trượt ngã (ma sát giữa đế giày và mặt đường).</li><li>Giúp cầm nắm đồ vật, viết bảng bằng phấn.</li><li>Giúp xe phanh, dừng lại được; lốp xe bám đường.</li>
      <li>Giữ đinh, ốc vít chặt trong gỗ.</li></ul><p><b>Tăng ma sát có lợi</b>: lốp xe, đế giày có khía rãnh; rắc cát lên đường trơn; dùng găng tay cao su khi cầm vật trơn.</p>` },
    { title: 'Ma sát có hại', html: `<ul><li>Làm mòn lốp xe, đế giày, xích và líp xe đạp, các chi tiết máy.</li><li>Làm nóng máy móc, tốn năng lượng.</li><li>Cản trở chuyển động khi đẩy, kéo vật nặng.</li></ul>
      <p><b>Giảm ma sát có hại</b>: tra dầu mỡ vào xích xe, bản lề; dùng ổ bi, bánh xe; làm nhẵn bề mặt.</p>
      <div class="box warn"><b>An toàn giao thông:</b> khi đường ướt, ma sát giữa lốp và mặt đường giảm, xe dễ trượt, phanh khó dừng. Cần đi chậm, giữ khoảng cách, không phanh gấp; thay lốp khi lốp đã mòn hết rãnh.</div>` }
  ],
  summary: 'Lực ma sát là lực tiếp xúc ở bề mặt giữa hai vật, ngược chiều chuyển động hoặc xu hướng chuyển động. Có ma sát trượt, ma sát lăn, ma sát nghỉ; ma sát lăn nhỏ hơn ma sát trượt. Ma sát có lợi (đi lại, cầm nắm, phanh xe) và có hại (làm mòn, nóng máy); có thể tăng bằng khía rãnh, giảm bằng dầu mỡ, ổ bi.',
  examples: [
    { title: 'Xác định loại ma sát', problem: 'Gọi tên lực ma sát: a) Bánh xe đạp lăn trên đường; b) Em bé trượt cầu trượt; c) Chiếc cặp nằm yên trên mặt dốc.', solution: 'a) <b>Ma sát lăn</b>. b) <b>Ma sát trượt</b>. c) <b>Ma sát nghỉ</b>.' },
    { title: 'Có lợi hay có hại', problem: 'Ma sát giữa xích và líp xe đạp có lợi hay có hại? Cách khắc phục?', solution: '<b>Có hại</b>: làm mòn xích, líp và khiến đạp nặng. Khắc phục: <b>tra dầu</b> thường xuyên.' },
    { title: 'Đường trơn', problem: 'Vì sao sau cơn mưa, các bác tài xế phải lái xe chậm hơn?', solution: 'Mặt đường ướt làm <b>ma sát giảm</b>, xe dễ trượt và cần quãng đường dài hơn mới phanh dừng được.' }
  ],
  exercises: [
    { question: 'Vì sao lốp ô tô, đế giày thể thao thường có nhiều khía rãnh?', hints: ['Khía rãnh làm ma sát tăng hay giảm?', 'Ma sát giữa lốp và đường có lợi hay có hại?'], solution: 'Khía rãnh làm <b>tăng ma sát</b> với mặt đường – đây là ma sát có lợi, giúp xe bám đường, người đi không trơn trượt; rãnh còn giúp thoát nước khi đường ướt.' },
    { question: 'Tại sao người ta đặt các thanh gỗ tròn (con lăn) dưới vật nặng khi muốn di chuyển nó?', hints: ['Con lăn biến ma sát trượt thành loại ma sát nào?', 'So sánh độ lớn hai loại ma sát.'], solution: 'Con lăn thay <b>ma sát trượt</b> bằng <b>ma sát lăn</b> – nhỏ hơn nhiều, nên đẩy vật nặng nhẹ nhàng hơn.' },
    { question: 'Biểu diễn lực ma sát khi một hộp đang trượt sang trái trên mặt sàn, độ lớn 20 N, tỉ xích 1 cm ứng với 10 N.', hints: ['Lực ma sát ngược chiều chuyển động.', 'Độ dài mũi tên = 20 : 10.'], solution: 'Mũi tên đặt tại mặt tiếp xúc giữa hộp và sàn, phương <b>nằm ngang</b>, chiều <b>sang phải</b> (ngược chiều trượt), dài <b>2 cm</b>.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Lực ma sát xuất hiện ở:', options: ['Bề mặt tiếp xúc giữa hai vật', 'Tâm của vật', 'Trong không khí xa vật', 'Chỉ ở vật đang bay'], answer: 0, explain: 'Ma sát là lực tiếp xúc ở bề mặt.' },
    { type: 'mcq', q: 'Khi bánh xe lăn trên mặt đường, giữa bánh xe và mặt đường có:', options: ['Ma sát lăn', 'Ma sát trượt', 'Ma sát nghỉ', 'Không có ma sát'], answer: 0, explain: 'Bánh xe lăn – ma sát lăn.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tra dầu vào xích xe đạp giúp giảm ma sát có hại.', answer: true, explain: 'Dầu mỡ làm giảm ma sát.' },
    { type: 'mcq', q: 'Trường hợp nào ma sát có lợi?', options: ['Ma sát giúp ta cầm được cốc nước', 'Ma sát làm mòn đế giày', 'Ma sát làm nóng động cơ', 'Ma sát làm đẩy tủ khó khăn'], answer: 0, explain: 'Nhờ ma sát mà cốc không tuột khỏi tay.' },
    { type: 'mcq', q: 'Lực ma sát trượt có chiều:', options: ['Ngược chiều chuyển động của vật', 'Cùng chiều chuyển động', 'Luôn hướng lên trên', 'Luôn hướng xuống dưới'], answer: 0, explain: 'Ma sát cản trở chuyển động.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Với cùng một vật, ma sát lăn thường lớn hơn ma sát trượt.', answer: false, explain: 'Ma sát lăn nhỏ hơn ma sát trượt rất nhiều.' },
    { type: 'mcq', q: 'Quyển sách nằm yên trên mặt bàn nghiêng nhờ:', options: ['Ma sát nghỉ', 'Ma sát lăn', 'Lực đẩy của nước', 'Lực của nam châm'], answer: 0, explain: 'Ma sát nghỉ giữ vật đứng yên.' },
    { type: 'short', q: 'Biểu diễn lực ma sát 30 N với tỉ xích 1 cm ứng với 10 N thì mũi tên dài bao nhiêu cm?', answer: '3', unit: 'cm', calc: '30/10', explain: '30 : 10 = 3 cm.' }
  ]
});
})();
