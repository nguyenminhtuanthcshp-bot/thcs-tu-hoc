/* Toán 9 – Bài 18. Hàm số y = ax² (a ≠ 0). Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-9/bai-18', {
    objectives: [
      'Nhận biết được hàm số y = ax² (a ≠ 0) và tính được giá trị của hàm số tại một giá trị cho trước của x.',
      'Lập bảng giá trị và vẽ được đồ thị (parabol) của hàm số y = ax².',
      'Nêu được các đặc điểm của parabol: đỉnh O, trục đối xứng Oy, bề lõm theo dấu của a.',
      'Vận dụng hàm số y = ax² để mô tả một số hiện tượng thực tế (quãng đường rơi tự do, diện tích hình vuông…).'
    ],
    intro: 'Thả một hòn bi từ trên cao: quãng đường rơi sau t giây xấp xỉ 5t² mét. Diện tích hình vuông cạnh x là x². Đó là những ví dụ về hàm số dạng y = ax².',
    steps: [
      { title: 'Hàm số y = ax²', html: `<p>Hàm số <b>y = ax²</b> với a là hằng số khác 0 xác định với mọi số thực x.</p><p>Ví dụ: y = 3x² (a = 3), y = −{{1|2}}x² (a = −{{1|2}}), s = 5t² (a = 5).</p><p>Tính giá trị: với y = 3x², khi x = −2 thì y = 3 · (−2)² = 12.</p><table class="tbl"><tr><th>x</th><td>−2</td><td>−1</td><td>0</td><td>1</td><td>2</td></tr><tr><th>y = x²</th><td>4</td><td>1</td><td>0</td><td>1</td><td>4</td></tr></table>` },
      { title: 'Đồ thị khi a > 0', html: `<p>Đồ thị của y = ax² là một đường cong gọi là <b>parabol</b> đỉnh O, nhận trục Oy làm trục đối xứng.</p><p>Khi a &gt; 0: parabol nằm <b>phía trên</b> trục hoành, O là điểm thấp nhất. |a| càng lớn, parabol càng “hẹp”.</p>`,
        svg: S.plane({ x: [-3, 3], y: [-1, 6], u: 34, curves: [{ f: function (x) { return x * x; }, label: 'y = x²', color: C.blue, lx: 2.3, dx: 8, dy: 6 }, { f: function (x) { return 2 * x * x; }, label: 'y = 2x²', color: C.orange, lx: -1.65, dx: -72, dy: 4 }], pts: [{ x: 1, y: 1, label: '(1; 1)', color: C.blue, dx: 8, dy: 12 }, { x: -1, y: 2, label: '(−1; 2)', color: C.orange, dx: -58, dy: 4 }] }), caption: 'Parabol y = x² và y = 2x² (a > 0).' },
      { title: 'Đồ thị khi a < 0', html: `<p>Khi a &lt; 0: parabol nằm <b>phía dưới</b> trục hoành, O là điểm cao nhất.</p><p>Đồ thị y = ax² và y = −ax² đối xứng với nhau qua trục Ox.</p>`,
        svg: S.plane({ x: [-4, 4], y: [-5, 1], u: 32, curves: [{ f: function (x) { return -x * x / 2; }, label: 'y = −½x²', color: C.purple, lx: 2, dx: 10, dy: 4 }], pts: [{ x: 2, y: -2, color: C.purple }, { x: -2, y: -2, label: '(−2; −2)', color: C.purple, dx: -70, dy: 4 }] }), caption: 'Parabol y = −½x² (a < 0).' },
      { title: 'Cách vẽ đồ thị', html: `<ol><li>Lập bảng giá trị với khoảng 5 giá trị của x đối xứng qua 0 (chẳng hạn −2; −1; 0; 1; 2).</li><li>Biểu diễn các điểm (x; y) trên mặt phẳng toạ độ.</li><li>Nối các điểm bằng một đường cong trơn, đối xứng qua Oy (không nối bằng đoạn thẳng).</li></ol><p>Điểm M(x<sub>0</sub>; y<sub>0</sub>) thuộc đồ thị khi và chỉ khi y<sub>0</sub> = a·x<sub>0</sub>².</p>` },
      { title: 'Tìm hệ số a', html: `<p>Nếu parabol y = ax² đi qua điểm M(x<sub>0</sub>; y<sub>0</sub>) với x<sub>0</sub> ≠ 0 thì a = {{y<sub>0</sub>|x<sub>0</sub>²}}.</p><p>Ví dụ: đi qua (2; −8) ⇒ a = {{−8|4}} = −2.</p>` }
    ],
    summary: 'y = ax² (a ≠ 0) có đồ thị là parabol đỉnh O, trục đối xứng Oy; a > 0 thì parabol hướng lên (O thấp nhất), a < 0 thì hướng xuống (O cao nhất). M(x₀; y₀) thuộc đồ thị ⇔ y₀ = a·x₀².',
    examples: [
      { title: 'Tính giá trị', problem: 'Cho y = −2x². Tính y khi x = 3 và khi x = −{{1|2}}.', solution: 'x = 3: y = −2 · 9 = −18. x = −{{1|2}}: y = −2 · {{1|4}} = −{{1|2}}.' },
      { title: 'Tìm a', problem: 'Parabol y = ax² đi qua A(−3; 6). Tìm a và cho biết điểm B(6; 24) có thuộc parabol không.', solution: 'a = {{6|9}} = {{2|3}}. Với x = 6: {{2|3}} · 36 = 24 ⇒ B thuộc parabol.' },
      { title: 'Rơi tự do', problem: 'Quãng đường rơi của một vật được tính bởi s = 5t² (m, t tính bằng giây). Vật được thả từ độ cao 180 m. Sau bao lâu vật chạm đất?', solution: '5t² = 180 ⇒ t² = 36 ⇒ t = 6 (t &gt; 0). Vật chạm đất sau 6 giây.' }
    ],
    exercises: [
      { question: 'Cho y = {{1|4}}x². Lập bảng giá trị với x ∈ {−4; −2; 0; 2; 4}.', hints: ['Tính (−4)² = 16 rồi nhân {{1|4}}.', 'Các giá trị đối xứng cho cùng y.'], solution: 'y lần lượt là 4; 1; 0; 1; 4.' },
      { question: 'Tìm a để parabol y = ax² đi qua điểm M(2; −12). Với a vừa tìm, tìm các điểm trên parabol có tung độ −27.', hints: ['a = {{−12|4}}.', 'Giải −3x² = −27.'], solution: 'a = −3; x² = 9 ⇒ x = ±3: các điểm (3; −27), (−3; −27).' },
      { question: 'Diện tích toàn phần của hình lập phương cạnh x là S = 6x². Tính cạnh khi S = 96 cm².', hints: ['6x² = 96.', 'x² = 16, x &gt; 0.'], solution: 'x = 4 cm.' }
    ],
    quiz: [
      { type: 'short', calc: '2 * (-3) ** 2', q: 'Cho y = 2x². Tính y khi x = −3.', answer: '18', explain: '2 · 9 = 18.' },
      { type: 'short', calc: '-8 / 2 ** 2', q: 'Parabol y = ax² đi qua (2; −8). Tìm a.', answer: '-2', explain: 'a = −8 : 4.' },
      { type: 'short', calc: '6 / 4 ** 2', requireSimplest: true, q: 'Parabol y = ax² đi qua (4; 6). Tìm a (viết dạng phân số tối giản a/b).', answer: ['3/8'], explain: 'a = 6/16 = 3/8.' },
      { type: 'short', calc: 'Math.sqrt(180 / 5)', q: 'Vật rơi theo s = 5t² (m). Thời gian rơi hết 180 m là bao nhiêu giây?', unit: 'giây', answer: '6', explain: 't² = 36.' },
      { type: 'mcq', q: 'Đồ thị hàm số y = −3x² nằm:', options: ['phía trên trục hoành, O là điểm thấp nhất', 'phía dưới trục hoành, O là điểm cao nhất', 'bên phải trục tung', 'bên trái trục tung'], answer: 1, explain: 'a = −3 &lt; 0.' },
      { type: 'mcq', q: 'Điểm nào thuộc đồ thị y = {{1|2}}x²?', options: ['(2; 1)', '(−2; 2)', '(4; 4)', '(−1; −½)'], answer: 1, explain: '{{1|2}} · 4 = 2.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Đồ thị của y = ax² (a ≠ 0) luôn nhận trục tung làm trục đối xứng.', answer: true, explain: 'Vì a(−x)² = ax².' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Parabol y = x² “hẹp” hơn parabol y = 3x².', answer: false, explain: '|a| càng lớn parabol càng hẹp: y = 3x² hẹp hơn.' }
    ]
  });
})();
