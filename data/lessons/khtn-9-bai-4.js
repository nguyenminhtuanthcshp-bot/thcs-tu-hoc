/* KHTN 9 – Bài 4. Công và công suất. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-9/bai-4', {
  objectives: [
    'Nêu được khi nào có công cơ học và viết được công thức A = F · s.',
    'Nêu được ý nghĩa và đơn vị của công suất, viết được công thức P = A / t.',
    'Vận dụng được công thức tính công, công suất trong các tình huống đơn giản.'
  ],
  intro: 'Hai bạn cùng kéo một thùng hàng lên tầng hai: một bạn mất 30 giây, bạn kia mất 1 phút. Công hai bạn thực hiện như nhau, nhưng ai “làm việc khoẻ” hơn? Câu trả lời nằm ở đại lượng <b>công suất</b>.',
  steps: [
    { title: 'Khi nào có công cơ học?', html: `<p>Có <b>công cơ học</b> khi có <b>lực tác dụng</b> vào vật và vật <b>dịch chuyển</b> (theo phương của lực hoặc có thành phần theo phương của lực).</p>
      <ul><li>Người đẩy xe làm xe chuyển động: lực đẩy thực hiện công.</li><li>Người đỡ thùng hàng đứng yên: dù rất mỏi tay, lực đỡ <b>không</b> thực hiện công vì vật không dịch chuyển.</li></ul>` },
    { title: 'Công thức tính công', html: `<p>Khi lực F không đổi, cùng hướng với chuyển động và vật dịch chuyển quãng đường s:</p>
      <p class="math">A = F · s</p>
      <p>F đo bằng niutơn (N), s bằng mét (m), A bằng <b>jun</b> (J): 1 J = 1 N · m. Ngoài ra còn dùng kJ: 1 kJ = 1 000 J.</p>
      <div class="box key">Nâng vật lên đều theo phương thẳng đứng: F = P = 10m, s = h ⇒ A = 10m · h.</div>`,
      svg: S.workForce({ F: 'F = 50 N', s: 's = 4 m' }), caption: 'Lực kéo F = 50 N làm vật dịch chuyển s = 4 m ⇒ A = 50 · 4 = 200 J.' },
    { title: 'Công suất', html: `<p><b>Công suất</b> là đại lượng đặc trưng cho <b>tốc độ thực hiện công</b>, đo bằng công thực hiện được trong một đơn vị thời gian:</p>
      <p class="math">P = A / t</p>
      <p>A (J), t (s), P đo bằng <b>oát</b> (W): 1 W = 1 J/s. Bội số: 1 kW = 1 000 W; 1 MW = 1 000 000 W.</p>
      <div class="box tip">Máy có công suất 1 000 W nghĩa là trong mỗi giây máy thực hiện được công 1 000 J.</div>` },
    { title: 'So sánh khả năng làm việc', html: `<table><tr><th>Bạn</th><th>Công A</th><th>Thời gian t</th><th>P</th></tr><tr><td>An</td><td>1 800 J</td><td>30 s</td><td>60 W</td></tr><tr><td>Bình</td><td>1 800 J</td><td>60 s</td><td>30 W</td></tr></table>
      <p>Cùng một công, ai mất ít thời gian hơn thì công suất lớn hơn, tức là làm việc khoẻ hơn.</p>
      <p>Từ P = A/t suy ra A = P · t và t = A / P.</p>`,
      svg: S.bar({ title: 'Công suất của An và Bình (số liệu minh hoạ)', cats: ['An (30 s)', 'Bình (60 s)'], series: [{ name: 'P (W)', values: [60, 30], color: '#2563eb' }], yMax: 80, yStep: 20, width: 420, height: 260 }), caption: 'Cùng công 1 800 J: An mất 30 s (60 W), Bình mất 60 s (30 W) – số liệu minh hoạ.' }
  ],
  summary: 'Có công cơ học khi lực tác dụng làm vật dịch chuyển: A = F · s (J). Công suất là tốc độ thực hiện công: P = A / t (W); 1 kW = 1 000 W. Suy ra A = P · t.',
  examples: [
    { title: 'Tính công', problem: 'Một người kéo xe với lực 200 N đi được 15 m theo hướng của lực. Tính công của lực kéo.', solution: 'A = F · s = 200 · 15 = 3 000 (J) = 3 kJ.' },
    { title: 'Nâng vật', problem: 'Cần cẩu nâng thùng hàng 500 kg lên cao 6 m trong 20 s. Tính công và công suất của cần cẩu.', solution: 'P = 10 · 500 = 5 000 N.<br>A = 5 000 · 6 = 30 000 J.<br>P = 30 000 / 20 = 1 500 W = 1,5 kW.' },
    { title: 'Tính thời gian', problem: 'Một máy bơm có công suất 2 kW cần thực hiện công 120 kJ. Máy cần bao lâu?', solution: 't = A / P = 120 000 / 2 000 = 60 (s) = 1 phút.' }
  ],
  exercises: [
    { question: 'Một học sinh xách cặp 3 kg đứng chờ xe buýt trong 10 phút. Lực xách cặp có thực hiện công không? Vì sao?', hints: ['Điều kiện để có công: có lực và vật dịch chuyển.', 'Cặp có dịch chuyển không?'], solution: 'Không. Cặp không dịch chuyển nên lực xách không thực hiện công cơ học (A = F · 0 = 0).' },
    { question: 'Một người đi lên cầu thang cao 4 m trong 8 s. Khối lượng người 50 kg. Tính công suất của người đó.', hints: ['A = 10m · h.', 'P = A / t.'], solution: 'A = 10 · 50 · 4 = 2 000 J; P = 2 000 / 8 = 250 W.' },
    { question: 'Động cơ của một thang máy có công suất 6 kW hoạt động trong 2 phút. Tính công động cơ thực hiện.', hints: ['Đổi 6 kW = 6 000 W; 2 phút = 120 s.', 'A = P · t.'], solution: 'A = 6 000 · 120 = 720 000 J = 720 kJ.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Một người giữ quả tạ đứng yên trên vai thì lực của người đó thực hiện công cơ học.', answer: false, explain: 'Quả tạ không dịch chuyển nên không có công cơ học.' },
    { type: 'mcq', q: 'Đơn vị của công suất là:', options: ['Jun (J)', 'Oát (W)', 'Niutơn (N)', 'Paxcan (Pa)'], answer: 1, explain: 'Công suất đo bằng oát, 1 W = 1 J/s.' },
    { type: 'short', q: 'Lực 40 N kéo vật đi 5 m theo hướng của lực. Công của lực là bao nhiêu jun?', answer: '200', unit: 'J', calc: '40*5', explain: 'A = 40 · 5 = 200 J.' },
    { type: 'short', q: 'Một máy thực hiện công 6 000 J trong 30 s. Công suất của máy là bao nhiêu oát?', answer: '200', unit: 'W', calc: '6000/30', explain: 'P = 6 000 / 30 = 200 W.' },
    { type: 'mcq', q: 'Công thức tính công suất là:', options: ['P = A · t', 'P = A / t', 'P = t / A', 'P = F / s'], answer: 1, explain: 'P = A / t.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: 1 kW = 1 000 W.', answer: true, explain: 'Tiền tố kilô = 1 000.' },
    { type: 'short', q: 'Nâng vật 20 kg lên cao 3 m. Công tối thiểu cần thực hiện là bao nhiêu jun?', answer: '600', unit: 'J', calc: '10*20*3', explain: 'A = 10 · 20 · 3 = 600 J.' },
    { type: 'mcq', q: 'Máy A thực hiện công 1 000 J trong 10 s, máy B thực hiện công 1 000 J trong 20 s. Kết luận đúng:', options: ['Máy A có công suất lớn hơn', 'Máy B có công suất lớn hơn', 'Hai máy có công suất bằng nhau', 'Không so sánh được'], answer: 0, explain: 'P<sub>A</sub> = 100 W > P<sub>B</sub> = 50 W.' }
  ]
});
})();
