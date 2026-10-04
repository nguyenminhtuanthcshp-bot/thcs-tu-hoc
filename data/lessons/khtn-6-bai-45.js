/* KHTN 6 – Bài 45. Lực cản của nước. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-6/bai-45', {
  objectives: [
    'Nêu được khi vật chuyển động trong nước (hoặc không khí), vật chịu tác dụng của lực cản.',
    'Nêu được độ lớn lực cản phụ thuộc vào diện tích mặt cản (hình dạng) của vật và tốc độ chuyển động.',
    'Giải thích được vì sao tàu, thuyền, cá có hình dạng thuôn và nêu được ứng dụng của lực cản.'
  ],
  intro: 'Đi bộ dưới hồ bơi khó hơn nhiều so với đi trên cạn. Cá, tàu thuỷ, máy bay đều có hình dạng thuôn nhọn. Đó là vì nước và không khí gây ra <b>lực cản</b>.',
  steps: [
    { title: 'Lực cản của nước', html: `<p>Khi một vật chuyển động trong nước, nước tác dụng lên vật một lực <b>ngược chiều chuyển động</b>, cản trở chuyển động của vật. Lực này gọi là <b>lực cản của nước</b>.</p>
      <p>Tương tự, vật chuyển động trong không khí chịu <b>lực cản của không khí</b> (nhỏ hơn lực cản của nước rất nhiều).</p>`,
      svg: S.forces({ w: 560, h: 180, body: '<rect x="0" y="40" width="560" height="140" fill="#dbeafe"/><path d="M150,110 C180,80 290,80 330,110 C290,140 180,140 150,110 Z M150,110 L115,85 L120,110 L115,135 Z" fill="#fb923c" stroke="#c2410c" stroke-width="2"/><circle cx="305" cy="104" r="4" fill="#1f2937"/>', arrows: [{ x: 332, y: 110, deg: 0, len: 110, label: 'Chiều bơi', color: '#16a34a' }, { x: 250, y: 150, deg: 180, len: 100, label: 'Lực cản của nước', color: '#2563eb', lx: 145, ly: 172, anchor: 'end' }] }),
      caption: 'Cá bơi sang phải, lực cản của nước hướng ngược lại (sang trái).' },
    { title: 'Lực cản phụ thuộc vào gì?', html: `<p>Thí nghiệm: kéo lần lượt một miếng nhựa phẳng qua nước theo hai cách – để mặt phẳng vuông góc với chiều chuyển động, và để cạnh mỏng đi trước.</p>
      <ul><li><b>Diện tích mặt cản</b> càng lớn thì lực cản càng lớn (miếng nhựa đặt vuông góc khó kéo hơn).</li><li>Vật chuyển động càng <b>nhanh</b> thì lực cản càng lớn.</li>
      <li>Vật có hình dạng <b>thuôn, nhọn</b> ở phía trước chịu lực cản nhỏ hơn.</li></ul>` },
    { title: 'Ứng dụng: giảm lực cản', html: `<ul><li>Tàu, thuyền, tàu ngầm có mũi nhọn, thân thuôn dài.</li><li>Cá, chim cánh cụt có thân hình thoi; vận động viên bơi lội mặc đồ bơi bó sát, đội mũ bơi.</li>
      <li>Máy bay, tàu cao tốc, ô tô đua có hình dạng khí động học.</li></ul>` },
    { title: 'Ứng dụng: tận dụng lực cản', html: `<ul><li>Mái chèo có bản rộng, chân vịt (vây bơi) giúp đẩy nước mạnh.</li><li>Chân vịt, chân ếch có màng giúp bơi nhanh.</li>
      <li>Dù (dù nhảy) có diện tích lớn, tăng lực cản không khí giúp người rơi chậm, tiếp đất an toàn.</li></ul>` }
  ],
  summary: 'Vật chuyển động trong nước (không khí) chịu lực cản ngược chiều chuyển động. Lực cản càng lớn khi diện tích mặt cản càng lớn và vật chuyển động càng nhanh. Người ta làm tàu, thuyền, máy bay có hình dạng thuôn để giảm lực cản, và dùng mái chèo, dù để tận dụng lực cản.',
  examples: [
    { title: 'Đi trong nước', problem: 'Vì sao đi bộ dưới nước khó hơn đi trên cạn?', solution: 'Dưới nước, cơ thể chịu <b>lực cản của nước</b> lớn hơn nhiều so với lực cản của không khí.' },
    { title: 'Hình dạng', problem: 'Hai con thuyền giống nhau, một chiếc mũi nhọn, một chiếc mũi vuông. Chiếc nào đi nhanh hơn khi cùng lực đẩy?', solution: 'Chiếc <b>mũi nhọn</b>, vì chịu lực cản của nước nhỏ hơn.' },
    { title: 'Chiếc dù', problem: 'Vì sao người nhảy dù rơi chậm khi dù đã bung?', solution: 'Dù có <b>diện tích mặt cản lớn</b>, lực cản của không khí lớn làm người rơi chậm lại.' }
  ],
  exercises: [
    { question: 'Vì sao vận động viên bơi lội thường đội mũ bơi và mặc đồ bó sát?', hints: ['Tóc, quần áo rộng làm gì với dòng nước?', 'Lực cản phụ thuộc hình dạng bề mặt.'], solution: 'Mũ bơi và đồ bó sát làm bề mặt cơ thể trơn, gọn, giảm <b>lực cản của nước</b>, giúp bơi nhanh hơn.' },
    { question: 'Thiết kế thí nghiệm đơn giản chứng tỏ lực cản của nước phụ thuộc diện tích mặt cản.', hints: ['Dùng một miếng bìa nhựa phẳng.', 'Kéo qua nước theo hai cách khác nhau, so sánh cảm giác (hoặc số chỉ lực kế).'], solution: 'Gắn miếng nhựa phẳng vào lực kế, kéo qua chậu nước với cùng tốc độ: lần 1 để mặt rộng vuông góc chiều kéo, lần 2 để cạnh mỏng đi trước. Số chỉ lực kế lần 1 lớn hơn → diện tích mặt cản lớn thì lực cản lớn.' },
    { question: 'Mái chèo có bản rộng để làm gì?', hints: ['Mái chèo đẩy nước về phía sau.', 'Diện tích lớn thì lực tương tác với nước thế nào?'], solution: 'Bản rộng tăng diện tích tiếp xúc, giúp mái chèo <b>đẩy được nhiều nước</b> về phía sau, nhờ đó thuyền được đẩy về phía trước mạnh hơn (tận dụng lực cản của nước).' }
  ],
  quiz: [
    { type: 'mcq', q: 'Lực cản của nước có chiều:', options: ['Ngược chiều chuyển động của vật', 'Cùng chiều chuyển động', 'Luôn hướng xuống', 'Luôn hướng lên'], answer: 0, explain: 'Lực cản chống lại chuyển động.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Diện tích mặt cản càng lớn thì lực cản của nước càng lớn.', answer: true, explain: 'Mặt cản lớn đẩy nhiều nước hơn.' },
    { type: 'mcq', q: 'Hình dạng nào giúp tàu thuỷ giảm lực cản của nước?', options: ['Mũi nhọn, thân thuôn dài', 'Hình hộp vuông', 'Hình cầu to', 'Mặt trước phẳng rộng'], answer: 0, explain: 'Thuôn nhọn giảm lực cản.' },
    { type: 'mcq', q: 'Vật nào tận dụng lực cản của không khí?', options: ['Chiếc dù', 'Mũi tên', 'Viên đạn', 'Tàu cao tốc'], answer: 0, explain: 'Dù tăng lực cản để rơi chậm.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Lực cản của không khí thường lớn hơn lực cản của nước.', answer: false, explain: 'Lực cản của nước lớn hơn nhiều.' },
    { type: 'mcq', q: 'Vật chuyển động trong nước càng nhanh thì lực cản:', options: ['Càng lớn', 'Càng nhỏ', 'Không đổi', 'Bằng 0'], answer: 0, explain: 'Tốc độ tăng, lực cản tăng.' },
    { type: 'mcq', q: 'Cá có thân hình thoi giúp:', options: ['Giảm lực cản của nước khi bơi', 'Tăng lực cản', 'Nổi lên mặt nước', 'Thở tốt hơn'], answer: 0, explain: 'Hình thoi thuôn giảm lực cản.' },
    { type: 'short', q: 'Lực cản của nước lên thuyền 150 N được biểu diễn bằng mũi tên với tỉ xích 1 cm ứng với 50 N. Mũi tên dài bao nhiêu cm?', answer: '3', unit: 'cm', calc: '150/50', explain: '150 : 50 = 3 cm.' }
  ]
});
})();
