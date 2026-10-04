/* Toán 7 – Bài 22. Đại lượng tỉ lệ thuận. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, C = S.C;
THCS.registerLesson('toan-7/bai-22', {
  objectives: [
    'Nhận biết hai đại lượng tỉ lệ thuận; xác định hệ số tỉ lệ.',
    'Nắm tính chất của hai đại lượng tỉ lệ thuận.',
    'Giải bài toán về đại lượng tỉ lệ thuận, bài toán chia tỉ lệ thuận.'
  ],
  intro: 'Mua càng nhiều vở thì trả càng nhiều tiền; đi càng lâu (vận tốc không đổi) thì quãng đường càng dài. Đó là những cặp đại lượng tỉ lệ thuận.',
  steps: [
    { title: 'Định nghĩa', html: `<p>Nếu đại lượng y liên hệ với đại lượng x theo công thức <b>y = kx</b> (k là hằng số khác 0) thì ta nói <b>y tỉ lệ thuận với x theo hệ số tỉ lệ k</b>.</p>
      <p>Khi đó x cũng tỉ lệ thuận với y theo hệ số {{1|k}}.</p>
      <p>Ví dụ: một quyển vở giá 8 000 đồng; số tiền y (đồng) khi mua x quyển: y = 8 000x.</p>` },
    { title: 'Tính chất', html: `<p>Nếu y tỉ lệ thuận với x theo hệ số k thì:</p><ul><li>Tỉ số hai giá trị tương ứng luôn không đổi: {{y₁|x₁}} = {{y₂|x₂}} = … = k.</li><li>Tỉ số hai giá trị bất kì của đại lượng này bằng tỉ số hai giá trị tương ứng của đại lượng kia: {{x₁|x₂}} = {{y₁|y₂}}.</li></ul>
      <table class="tbl"><tr><th>x (giờ)</th><td>1</td><td>2</td><td>3</td><td>4</td></tr><tr><th>y (km)</th><td>40</td><td>80</td><td>120</td><td>160</td></tr></table>
      <p>{{y|x}} luôn bằng 40: y tỉ lệ thuận với x theo hệ số 40.</p>`,
      svg: S.bar({ title: 'Quãng đường ô tô đi được (40 km/h)', cats: ['1 giờ', '2 giờ', '3 giờ', '4 giờ'], series: [{ name: 'km', values: [40, 80, 120, 160] }], yMax: 160, yStep: 40, yLabel: 'km', width: 480, height: 260 }),
      caption: 'Thời gian gấp đôi, gấp ba thì quãng đường cũng gấp đôi, gấp ba.' },
    { title: 'Bài toán tỉ lệ thuận', html: `<p>12 m dây đồng nặng 216 g. Hỏi 20 m dây nặng bao nhiêu?</p>
      <p>Khối lượng tỉ lệ thuận với chiều dài: {{m|20}} = {{216|12}} = 18 ⇒ m = 360 g.</p>` },
    { title: 'Chia tỉ lệ thuận', html: `<p>Chia một số thành các phần tỉ lệ thuận với a, b, c: dùng dãy tỉ số bằng nhau (Bài 21).</p>
      <p>Ví dụ: ba cạnh tam giác tỉ lệ với 3, 4, 5, chu vi 36 cm ⇒ mỗi phần 3 cm ⇒ các cạnh 9, 12, 15 cm.</p>` }
  ],
  summary: 'y = kx (k ≠ 0): y tỉ lệ thuận với x, hệ số k. Tỉ số {{y|x}} không đổi; {{x₁|x₂}} = {{y₁|y₂}}. Giải bằng tỉ lệ thức hoặc dãy tỉ số bằng nhau.',
  examples: [
    { title: 'Tìm hệ số', problem: 'y tỉ lệ thuận với x, khi x = 4 thì y = 10. Tìm k và tính y khi x = 6.', solution: 'k = 10 : 4 = 2,5; y = 2,5 · 6 = 15.' },
    { title: 'Bài toán thực tế', problem: 'Mua 5 kg táo hết 175 000 đồng. Mua 8 kg hết bao nhiêu?', solution: 'Giá 1 kg = 35 000 đồng ⇒ 8 kg: 280 000 đồng.' },
    { title: 'Chia tỉ lệ', problem: 'Ba lớp quyên góp 120 quyển sách, tỉ lệ thuận với sĩ số 36, 40, 44. Mỗi lớp góp bao nhiêu?', solution: '{{120|120}} = 1 ⇒ 36; 40; 44 quyển.' }
  ],
  exercises: [
    { question: 'y tỉ lệ thuận với x theo hệ số −3. Tính y khi x = −2; tìm x khi y = 12.', hints: ['y = −3x.', 'x = y : (−3).'], solution: 'y = 6; x = −4.' },
    { question: '3 người làm được 45 sản phẩm trong một ngày (năng suất như nhau). 7 người làm được bao nhiêu?', hints: ['Số sản phẩm tỉ lệ thuận với số người.', '45 : 3 = 15.'], solution: '105 sản phẩm.' },
    { question: 'Ba góc của tam giác tỉ lệ thuận với 2; 3; 4. Tính góc lớn nhất.', hints: ['Tổng 180°, 9 phần.', 'Mỗi phần 20°.'], solution: '80°.' }
  ],
  quiz: [
    { type: 'short', calc: '6 / 2', q: 'y = kx; khi x = 2 thì y = 6. Tìm k.', answer: '3', explain: 'k = 6 : 2.' },
    { type: 'short', calc: '10 / 4 * 6', q: 'y tỉ lệ thuận với x; x = 4 thì y = 10. Tính y khi x = 6.', answer: '15', explain: 'k = 2,5; y = 15.' },
    { type: 'short', calc: '216 / 12 * 20', q: '12 m dây nặng 216 g. 20 m dây nặng bao nhiêu gam?', unit: 'g', answer: '360', explain: '18 · 20 = 360.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nếu y tỉ lệ thuận với x theo hệ số 4 thì x tỉ lệ thuận với y theo hệ số 4.', answer: false, explain: 'Hệ số là {{1|4}}.' },
    { type: 'short', calc: '175000 / 5 * 8', q: '5 kg táo giá 175 000 đồng. 8 kg giá bao nhiêu đồng?', unit: 'đồng', answer: '280000', answerText: '280 000', explain: '35 000 · 8.' },
    { type: 'short', calc: '36 / 12 * 5', q: 'Ba cạnh tam giác tỉ lệ thuận với 3, 4, 5, chu vi 36 cm. Cạnh dài nhất bao nhiêu cm?', unit: 'cm', answer: '15', explain: '3 · 5 = 15.' },
    { type: 'mcq', q: 'Công thức nào cho biết y tỉ lệ thuận với x?', options: ['y = {{5|x}}', 'y = 5x', 'y = x + 5', 'xy = 5'], answer: 1, explain: 'Dạng y = kx.' },
    { type: 'short', calc: '12 / -3', q: 'y = −3x. Tìm x khi y = 12.', answer: '-4', answerText: '−4', explain: 'x = 12 : (−3).' }
  ]
});
})();
