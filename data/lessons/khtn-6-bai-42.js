/* KHTN 6 – Bài 42. Biến dạng của lò xo. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-6/bai-42', {
  objectives: [
    'Nhận biết được vật biến dạng đàn hồi và vật biến dạng không đàn hồi.',
    'Tính được độ biến dạng (độ dãn) của lò xo: Δl = l − l₀.',
    'Nêu được độ dãn của lò xo treo thẳng đứng tỉ lệ với khối lượng vật treo (trong giới hạn đàn hồi) và vận dụng để tính toán.'
  ],
  intro: 'Kéo dây chun rồi thả, dây chun co lại như cũ; bóp cục đất nặn thì nó méo luôn. Lò xo là ví dụ tiêu biểu của vật có tính <b>đàn hồi</b>, được dùng trong lực kế, nệm, bút bi, giảm xóc xe máy.',
  steps: [
    { title: 'Biến dạng đàn hồi và không đàn hồi', html: `<ul><li><b>Biến dạng đàn hồi</b>: khi thôi tác dụng lực, vật <b>trở lại</b> hình dạng ban đầu. Ví dụ: lò xo, dây chun, quả bóng cao su.</li>
      <li><b>Biến dạng không đàn hồi</b> (biến dạng dẻo): khi thôi tác dụng lực, vật <b>không trở lại</b> hình dạng ban đầu. Ví dụ: đất nặn, lon nhôm bị bóp bẹp.</li></ul>
      <div class="box warn">Nếu kéo lò xo quá mạnh (vượt <b>giới hạn đàn hồi</b>), lò xo bị dãn luôn, không co lại như cũ.</div>` },
    { title: 'Độ dãn của lò xo', html: `<p>Gọi <b>l₀</b> là chiều dài tự nhiên (khi chưa treo vật), <b>l</b> là chiều dài khi treo vật. Độ dãn (độ biến dạng) của lò xo:</p>
      <div class="box key">Δl = l − l₀</div>`,
      svg: S.springs({ pxPerCm: 16, maxCm: 16, items: [{ l: 8, label: 'Chưa treo' }, { l: 10, load: '50 g', label: 'Treo 50 g' }, { l: 12, load: '100 g', label: 'Treo 100 g' }, { l: 14, load: '150 g', label: 'Treo 150 g' }] }),
      caption: 'Lò xo dài tự nhiên 8 cm; mỗi quả nặng 50 g làm lò xo dãn thêm 2 cm.' },
    { title: 'Độ dãn tỉ lệ với khối lượng vật treo', html: `<table class="tbl"><tr><th>Khối lượng treo (g)</th><th>0</th><th>50</th><th>100</th><th>150</th></tr>
      <tr><td>Chiều dài l (cm)</td><td>8</td><td>10</td><td>12</td><td>14</td></tr><tr><td>Độ dãn Δl = l − 8 (cm)</td><td>0</td><td>2</td><td>4</td><td>6</td></tr></table>
      <p>Khối lượng tăng gấp 2, gấp 3 thì độ dãn cũng tăng gấp 2, gấp 3: <b>độ dãn của lò xo tỉ lệ thuận với khối lượng vật treo</b> (khi chưa vượt giới hạn đàn hồi).</p>` },
    { title: 'Vận dụng', html: `<p>Với lò xo trên (dãn 2 cm cho mỗi 50 g):</p><ul><li>Treo 200 g: Δl = 200 : 50 × 2 = 8 cm → l = 8 + 8 = 16 cm.</li><li>Lò xo dài 11 cm: Δl = 3 cm → khối lượng = 3 : 2 × 50 = 75 g.</li></ul>
      <p>Đây chính là nguyên tắc hoạt động của <b>lực kế lò xo</b> và cân lò xo.</p>` }
  ],
  summary: 'Vật biến dạng đàn hồi trở lại hình dạng ban đầu khi thôi tác dụng lực; vật biến dạng không đàn hồi thì không. Độ dãn của lò xo Δl = l − l₀. Trong giới hạn đàn hồi, độ dãn của lò xo treo thẳng đứng tỉ lệ thuận với khối lượng vật treo – nguyên tắc của lực kế lò xo.',
  examples: [
    { title: 'Tính độ dãn', problem: 'Lò xo dài tự nhiên 15 cm, khi treo vật dài 18 cm. Tính độ dãn.', solution: 'Δl = 18 − 15 = <b>3 cm</b>.' },
    { title: 'Tỉ lệ', problem: 'Treo vật 100 g, lò xo dãn 2 cm. Treo vật 300 g (chưa vượt giới hạn đàn hồi) thì lò xo dãn bao nhiêu?', solution: '300 g gấp 3 lần 100 g nên độ dãn gấp 3: 2 × 3 = <b>6 cm</b>.' },
    { title: 'Tìm chiều dài', problem: 'Lò xo dài tự nhiên 10 cm; mỗi 50 g làm lò xo dãn 1 cm. Treo vật 250 g thì lò xo dài bao nhiêu?', solution: 'Δl = 250 : 50 × 1 = 5 cm. l = 10 + 5 = <b>15 cm</b>.' }
  ],
  exercises: [
    { question: 'Lò xo dài tự nhiên 12 cm. Treo vật 200 g, lò xo dài 16 cm. Nếu treo vật 100 g thì lò xo dài bao nhiêu?', hints: ['Tính độ dãn khi treo 200 g.', '100 g bằng một nửa 200 g nên độ dãn bằng một nửa.'], solution: 'Treo 200 g: Δl = 16 − 12 = 4 cm. Treo 100 g: Δl = 2 cm. l = 12 + 2 = <b>14 cm</b>.' },
    { question: 'Lò xo dài tự nhiên 8 cm, cứ treo thêm 50 g thì dãn thêm 2 cm. Khi lò xo dài 13 cm thì khối lượng vật treo là bao nhiêu?', hints: ['Δl = 13 − 8 = 5 cm.', '1 cm ứng với 25 g.'], solution: 'Δl = 5 cm. Mỗi cm ứng với 50 : 2 = 25 g. Khối lượng: 5 × 25 = <b>125 g</b>.' },
    { question: 'Xếp các vật sau vào nhóm biến dạng đàn hồi hoặc không đàn hồi: dây chun, cục đất sét, lò xo bút bi, tờ giấy bị vo tròn.', hints: ['Thôi tác dụng lực, vật có trở lại như cũ không?', 'Giấy vo tròn mở ra có phẳng lại như cũ không?'], solution: 'Đàn hồi: <b>dây chun, lò xo bút bi</b>. Không đàn hồi: <b>cục đất sét, tờ giấy vo tròn</b>.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Vật nào có tính chất đàn hồi?', options: ['Lò xo', 'Đất nặn', 'Sáp nến mềm', 'Lon nhôm bị bóp bẹp'], answer: 0, explain: 'Lò xo trở lại hình dạng ban đầu khi thôi tác dụng lực.' },
    { type: 'short', q: 'Lò xo dài tự nhiên 10 cm, khi treo vật dài 13,5 cm. Độ dãn là bao nhiêu cm? (dùng dấu phẩy)', answer: '3,5', unit: 'cm', calc: '13.5-10', explain: '13,5 − 10 = 3,5 cm.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Trong giới hạn đàn hồi, độ dãn của lò xo tỉ lệ thuận với khối lượng vật treo.', answer: true, explain: 'Khối lượng gấp đôi thì độ dãn gấp đôi.' },
    { type: 'short', q: 'Treo 50 g lò xo dãn 2 cm. Treo 150 g lò xo dãn bao nhiêu cm?', answer: '6', unit: 'cm', calc: '150/50*2', explain: '150 : 50 × 2 = 6 cm.' },
    { type: 'short', q: 'Nhìn hình: lò xo dài tự nhiên 8 cm. Khi treo quả nặng, lò xo dài bao nhiêu cm?', svg: S.springs({ pxPerCm: 16, maxCm: 14, items: [{ l: 8, label: 'Chưa treo' }, { l: 12, load: '100 g', label: 'Treo 100 g' }] }), answer: '12', unit: 'cm', explain: 'Đầu dưới lò xo ngang vạch 12 cm.' },
    { type: 'mcq', q: 'Nếu kéo lò xo vượt quá giới hạn đàn hồi thì:', options: ['Lò xo không trở lại hình dạng ban đầu', 'Lò xo co ngắn hơn ban đầu', 'Lò xo nặng hơn', 'Không có gì thay đổi'], answer: 0, explain: 'Lò xo bị biến dạng vĩnh viễn.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Công thức tính độ dãn lò xo là Δl = l₀ − l.', answer: false, explain: 'Δl = l − l₀ (chiều dài khi treo trừ chiều dài tự nhiên).' },
    { type: 'short', q: 'Lò xo dài tự nhiên 20 cm; mỗi 100 g làm dãn 1 cm. Treo vật 400 g thì lò xo dài bao nhiêu cm?', answer: '24', unit: 'cm', calc: '20+400/100', explain: 'Δl = 4 cm; l = 20 + 4 = 24 cm.' }
  ]
});
})();
