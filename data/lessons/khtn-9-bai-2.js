/* KHTN 9 – Bài 2. Động năng. Thế năng. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-9/bai-2', {
  objectives: [
    'Nêu được khái niệm động năng và viết được công thức Wđ = ½mv².',
    'Nêu được khái niệm thế năng trọng trường và viết được công thức Wt = Ph = 10mh (gần mặt đất).',
    'Vận dụng được công thức để tính động năng, thế năng trong các trường hợp đơn giản.'
  ],
  intro: 'Một quả bóng đang lăn có thể làm đổ chai nước; một quả dừa trên cao rơi xuống có thể làm móp mui xe. Cả hai đều có khả năng thực hiện công – tức là đều có <b>năng lượng</b>. Nhưng nguồn gốc năng lượng của chúng khác nhau.',
  steps: [
    { title: 'Động năng', html: `<p><b>Động năng</b> là năng lượng mà vật có được do <b>chuyển động</b>. Vật đứng yên thì động năng bằng 0.</p>
      <p class="math">W<sub>đ</sub> = {{1|2}} · m · v<sup>2</sup></p>
      <p>trong đó m là khối lượng (kg), v là tốc độ (m/s), W<sub>đ</sub> tính bằng jun (J).</p>` },
    { title: 'Động năng phụ thuộc vào gì?', html: `<ul><li>Khối lượng càng lớn, động năng càng lớn (tỉ lệ thuận với m).</li><li>Tốc độ càng lớn, động năng càng lớn – và phụ thuộc vào <b>bình phương</b> tốc độ.</li></ul>
      <div class="box key">Tốc độ tăng gấp đôi thì động năng tăng gấp <b>4</b> lần. Đó là lí do xe chạy nhanh rất nguy hiểm khi va chạm.</div>`,
      svg: S.bar({ title: 'Động năng của xe 1 000 kg ở các tốc độ', cats: ['5 m/s', '10 m/s', '15 m/s', '20 m/s'], series: [{ name: 'Wđ (kJ)', values: [12.5, 50, 112.5, 200], color: '#dc2626' }], yMax: 250, yStep: 50, width: 520, height: 280 }), caption: 'Wđ = ½mv²: tốc độ tăng 2 lần thì động năng tăng 4 lần (đơn vị kJ).' },
    { title: 'Thế năng trọng trường', html: `<p><b>Thế năng trọng trường</b> là năng lượng vật có được khi ở một <b>độ cao</b> nào đó so với vị trí được chọn làm <b>mốc</b> (thường chọn mặt đất).</p>
      <p>Gần mặt đất, trọng lượng P = 10m (N), nên:</p>
      <p class="math">W<sub>t</sub> = P · h = 10 · m · h</p>
      <p>trong đó m (kg), h là độ cao so với mốc (m), W<sub>t</sub> (J). Vật ở mốc có thế năng bằng 0.</p>`,
      svg: S.xyGraph({ series: [{ pts: [[0, 0], [1, 20], [2, 40], [3, 60], [4, 80], [5, 100]], color: '#2563eb', dots: true }], xmax: 5.5, ymax: 110, xstep: 1, ystep: 20, xlabel: 'h (m)', ylabel: 'Wt (J)', label: 'Thế năng của vật 2 kg tỉ lệ thuận với độ cao h' }), caption: 'Thế năng của vật 2 kg: W<sub>t</sub> = 10 · 2 · h tỉ lệ thuận với h.' },
    { title: 'Tính thử', html: `<p>Xe đạp và người: m = 60 kg, v = 5 m/s ⇒ W<sub>đ</sub> = {{1|2}} · 60 · 5<sup>2</sup> = 750 J.</p>
      <p>Quả dừa 2 kg trên cây cao 8 m ⇒ W<sub>t</sub> = 10 · 2 · 8 = 160 J.</p>
      <div class="box tip">Nhớ đổi đơn vị: gam → kilôgam (500 g = 0,5 kg), km/h → m/s (36 km/h = 10 m/s).</div>` }
  ],
  summary: 'Động năng W<sub>đ</sub> = ½mv² (do chuyển động). Thế năng trọng trường W<sub>t</sub> = 10mh (do độ cao so với mốc). Đơn vị năng lượng: jun (J). m tính bằng kg, v bằng m/s, h bằng m.',
  examples: [
    { title: 'Tính động năng', problem: 'Một quả bóng có khối lượng 0,4 kg bay với tốc độ 10 m/s. Tính động năng của quả bóng.', solution: 'W<sub>đ</sub> = {{1|2}} · 0,4 · 10<sup>2</sup> = 0,2 · 100 = 20 (J).' },
    { title: 'Tính thế năng', problem: 'Một chậu cây 3 kg đặt trên ban công cao 4 m so với mặt đất. Tính thế năng trọng trường của chậu (mốc là mặt đất).', solution: 'W<sub>t</sub> = 10 · 3 · 4 = 120 (J).' },
    { title: 'Ô tô chuyển động', problem: 'Một ô tô khối lượng 1 000 kg chạy với tốc độ 36 km/h. Tính động năng của ô tô.', solution: 'Đổi 36 km/h = 10 m/s.<br>W<sub>đ</sub> = {{1|2}} · 1 000 · 10<sup>2</sup> = 50 000 (J).' }
  ],
  exercises: [
    { question: 'Một vật khối lượng 2 kg chuyển động với tốc độ 3 m/s. Tính động năng.', hints: ['Công thức: W<sub>đ</sub> = ½ · m · v².', 'v² = 9.'], solution: 'W<sub>đ</sub> = ½ · 2 · 9 = 9 (J).' },
    { question: 'Một quả táo 200 g ở trên cành cao 3 m. Tính thế năng của quả táo so với mặt đất.', hints: ['Đổi 200 g = 0,2 kg.', 'W<sub>t</sub> = 10 · m · h.'], solution: 'W<sub>t</sub> = 10 · 0,2 · 3 = 6 (J).' },
    { question: 'Nếu tốc độ của một vật giảm đi một nửa thì động năng thay đổi thế nào?', hints: ['Động năng tỉ lệ với v².', '(½)² = ?'], solution: 'Động năng giảm đi 4 lần (chỉ còn ¼ so với ban đầu).' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Vật đặt tại vị trí mốc có thế năng trọng trường bằng 0.', answer: true, explain: 'Tại mốc, h = 0 nên W<sub>t</sub> = 0.' },
    { type: 'mcq', q: 'Vật nào sau đây có động năng?', options: ['Quyển sách nằm yên trên bàn', 'Chiếc xe đang chạy trên đường', 'Hòn đá nằm trên đỉnh núi', 'Lò xo bị nén đứng yên'], answer: 1, explain: 'Động năng là năng lượng do chuyển động; chỉ xe đang chạy chuyển động.' },
    { type: 'short', q: 'Tính động năng (J) của vật 4 kg chuyển động với tốc độ 5 m/s.', answer: '50', unit: 'J', calc: '0.5*4*5*5', explain: '½ · 4 · 25 = 50 J.' },
    { type: 'short', q: 'Tính thế năng trọng trường (J) của vật 2 kg ở độ cao 5 m so với mặt đất.', answer: '100', unit: 'J', calc: '10*2*5', explain: '10 · 2 · 5 = 100 J.' },
    { type: 'mcq', q: 'Khi tốc độ của vật tăng gấp đôi (khối lượng không đổi) thì động năng:', options: ['tăng gấp đôi', 'tăng gấp 4', 'không đổi', 'giảm một nửa'], answer: 1, explain: 'W<sub>đ</sub> tỉ lệ với v², 2² = 4.' },
    { type: 'mcq', q: 'Đơn vị của động năng và thế năng là:', options: ['Niutơn (N)', 'Oát (W)', 'Jun (J)', 'Mét trên giây (m/s)'], answer: 2, explain: 'Năng lượng có đơn vị jun (J).' },
    { type: 'short', q: 'Quả bóng 500 g bay với tốc độ 4 m/s. Động năng của quả bóng là bao nhiêu jun?', answer: '4', unit: 'J', calc: '0.5*0.5*4*4', explain: '500 g = 0,5 kg; ½ · 0,5 · 16 = 4 J.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Cùng độ cao, vật có khối lượng lớn hơn thì thế năng trọng trường lớn hơn.', answer: true, explain: 'W<sub>t</sub> = 10mh tỉ lệ thuận với m.' }
  ]
});
})();
