/* KHTN 7 – Bài 8. Tốc độ chuyển động. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-7/bai-8', {
  objectives: [
    'Nêu được ý nghĩa vật lí của tốc độ: đại lượng cho biết mức độ nhanh hay chậm của chuyển động.',
    'Viết được công thức tính tốc độ v = s : t và nêu được các đơn vị đo tốc độ thường dùng.',
    'Vận dụng công thức để tính tốc độ, quãng đường hoặc thời gian; đổi được đơn vị km/h và m/s.'
  ],
  intro: 'Trong một cuộc thi chạy, người về đích trước là người chạy nhanh nhất. Nhưng nếu hai bạn chạy trên hai quãng đường khác nhau, trong những khoảng thời gian khác nhau, làm sao biết ai nhanh hơn? Ta cần một đại lượng chung: <b>tốc độ</b>.',
  steps: [
    { title: 'So sánh nhanh, chậm', html: `<p>Có hai cách so sánh chuyển động nhanh hay chậm:</p>
      <ul><li>Cùng một quãng đường, vật nào đi <b>hết ít thời gian hơn</b> thì chuyển động nhanh hơn.</li><li>Cùng một khoảng thời gian, vật nào đi được <b>quãng đường dài hơn</b> thì chuyển động nhanh hơn.</li></ul>
      <p>Cách thứ hai dẫn đến khái niệm tốc độ: so sánh quãng đường đi được trong <b>cùng một đơn vị thời gian</b> (1 giây, 1 giờ).</p>`,
      svg: S.motionStrip({ rows: [{ label: 'Người đi bộ', d: 1.5 }, { label: 'Xe đạp', d: 5 }, { label: 'Xe máy', d: 12 }], n: 4, max: 50, unit: 'm' }),
      caption: 'Vị trí của ba vật sau mỗi giây: trong cùng 1 s, xe máy đi xa nhất nên chuyển động nhanh nhất.' },
    { title: 'Tốc độ và công thức', html: `<p><b>Tốc độ</b> là đại lượng cho biết mức độ nhanh hay chậm của chuyển động, được xác định bằng quãng đường đi được trong một đơn vị thời gian.</p>
      <p class="math">v = {{s|t}}</p>
      <p>trong đó s là quãng đường đi được, t là thời gian đi hết quãng đường đó, v là tốc độ.</p>
      <div class="box key">Từ công thức suy ra: s = v · t và t = {{s|v}}.</div>` },
    { title: 'Đơn vị tốc độ', html: `<p>Đơn vị tốc độ phụ thuộc đơn vị quãng đường và thời gian. Hai đơn vị thường dùng: <b>mét trên giây (m/s)</b> và <b>kilômét trên giờ (km/h)</b>.</p>
      <p class="math">1 m/s = 3,6 km/h &nbsp;&nbsp; và &nbsp;&nbsp; 1 km/h = {{1|3,6}} m/s</p>
      <p>Ví dụ: 36 km/h = 36 : 3,6 = 10 m/s; 20 m/s = 20 · 3,6 = 72 km/h.</p>
      <div class="box warn">Trước khi tính, đổi s và t về cùng hệ đơn vị: (m và s) hoặc (km và h).</div>` },
    { title: 'Một số tốc độ tham khảo', html: `<table class="tbl"><tr><th>Chuyển động</th><th>Tốc độ gần đúng</th></tr>
      <tr><td>Người đi bộ</td><td>1,5 m/s (khoảng 5 km/h)</td></tr><tr><td>Xe đạp</td><td>4 – 6 m/s (15 – 20 km/h)</td></tr>
      <tr><td>Ô tô trên đường cao tốc</td><td>khoảng 25 – 30 m/s (90 – 110 km/h)</td></tr><tr><td>Âm thanh trong không khí (20 °C)</td><td>khoảng 343 m/s</td></tr>
      <tr><td>Ánh sáng trong chân không</td><td>khoảng 300 000 km/s</td></tr></table>` }
  ],
  summary: 'Tốc độ cho biết mức độ nhanh, chậm của chuyển động: v = s : t (suy ra s = v · t, t = s : v). Đơn vị: m/s, km/h; 1 m/s = 3,6 km/h. Nhớ đổi đơn vị quãng đường và thời gian cho phù hợp trước khi tính.',
  examples: [
    { title: 'Tính tốc độ', problem: 'Một bạn chạy 100 m hết 20 s. Tính tốc độ của bạn theo m/s và km/h.', solution: 'v = {{100|20}} = 5 (m/s) = 5 · 3,6 = 18 (km/h).' },
    { title: 'Tính quãng đường', problem: 'Một ô tô đi với tốc độ 50 km/h trong 1 giờ 30 phút. Tính quãng đường ô tô đi được.', solution: 'Đổi t = 1 giờ 30 phút = 1,5 h. s = v · t = 50 · 1,5 = 75 (km).' },
    { title: 'Ai nhanh hơn?', problem: 'An đi xe đạp được 3,6 km trong 15 phút; Bình đi xe đạp với tốc độ 4 m/s. Ai đi nhanh hơn?', solution: 'Tốc độ của An: 3 600 m : 900 s = 4 m/s. Hai bạn đi nhanh như nhau.' }
  ],
  exercises: [
    { question: 'Một đoàn tàu đi quãng đường 120 km hết 2,5 h. Tính tốc độ của tàu theo km/h.', hints: ['Dùng v = s : t.', 's = 120 km, t = 2,5 h.'], solution: 'v = 120 : 2,5 = 48 (km/h).' },
    { question: 'Nhà Lan cách trường 1,8 km. Lan đi bộ với tốc độ 1,5 m/s. Hỏi Lan cần bao nhiêu phút để đến trường?', hints: ['Đổi 1,8 km ra mét.', 't = s : v rồi đổi giây ra phút.'], solution: 's = 1 800 m; t = 1 800 : 1,5 = 1 200 s = 20 phút.' },
    { question: 'Sắp xếp theo thứ tự tăng dần tốc độ: xe máy 54 km/h; con báo 30 m/s; xe đạp 5 m/s.', hints: ['Đổi tất cả về m/s.', '54 km/h = 54 : 3,6 m/s.'], solution: 'Xe máy: 54 : 3,6 = 15 m/s. Thứ tự tăng dần: xe đạp (5 m/s) < xe máy (15 m/s) < con báo (30 m/s).' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tốc độ cho biết mức độ nhanh hay chậm của chuyển động.', answer: true, explain: 'Đó chính là ý nghĩa của tốc độ.' },
    { type: 'mcq', q: 'Công thức tính tốc độ là:', options: ['v = s · t', 'v = {{s|t}}', 'v = {{t|s}}', 'v = s + t'], answer: 1, explain: 'Tốc độ bằng quãng đường chia thời gian.' },
    { type: 'short', q: 'Đổi 36 km/h ra m/s.', answer: '10', unit: 'm/s', calc: '36/3.6', explain: '36 : 3,6 = 10 m/s.' },
    { type: 'short', q: 'Một người đi được 150 m trong 30 s. Tốc độ của người đó là bao nhiêu m/s?', answer: '5', unit: 'm/s', calc: '150/30', explain: 'v = 150 : 30 = 5 m/s.' },
    { type: 'short', q: 'Một xe đi với tốc độ 40 km/h trong 1,5 h. Quãng đường xe đi được là bao nhiêu km?', answer: '60', unit: 'km', calc: '40*1.5', explain: 's = v · t = 40 · 1,5 = 60 km.' },
    { type: 'mcq', q: 'Đơn vị nào KHÔNG phải là đơn vị tốc độ?', options: ['m/s', 'km/h', 'km·h', 'cm/s'], answer: 2, explain: 'Đơn vị tốc độ = đơn vị độ dài : đơn vị thời gian; km·h không phải.' },
    { type: 'short', q: 'Một vận động viên chạy với tốc độ 5 m/s. Thời gian để chạy hết 100 m là bao nhiêu giây?', answer: '20', unit: 's', calc: '100/5', explain: 't = s : v = 100 : 5 = 20 s.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: 15 m/s nhỏ hơn 50 km/h.', answer: false, explain: '15 m/s = 15 · 3,6 = 54 km/h > 50 km/h.' }
  ]
});
})();
