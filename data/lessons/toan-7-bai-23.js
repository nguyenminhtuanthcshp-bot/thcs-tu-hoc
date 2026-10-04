/* Toán 7 – Bài 23. Đại lượng tỉ lệ nghịch. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, C = S.C;
THCS.registerLesson('toan-7/bai-23', {
  objectives: [
    'Nhận biết hai đại lượng tỉ lệ nghịch; xác định hệ số tỉ lệ.',
    'Nắm tính chất của hai đại lượng tỉ lệ nghịch; phân biệt với tỉ lệ thuận.',
    'Giải bài toán về đại lượng tỉ lệ nghịch, bài toán chia tỉ lệ nghịch.'
  ],
  intro: 'Càng nhiều người cùng làm, công việc càng nhanh xong; đi càng nhanh thì thời gian càng ngắn. Khi một đại lượng tăng mà đại lượng kia giảm “đúng bấy nhiêu lần”, ta có tỉ lệ nghịch.',
  steps: [
    { title: 'Định nghĩa', html: `<p>Nếu đại lượng y liên hệ với đại lượng x theo công thức <b>y = {{a|x}}</b> hay <b>x · y = a</b> (a là hằng số khác 0) thì ta nói <b>y tỉ lệ nghịch với x theo hệ số tỉ lệ a</b>.</p>
      <p>Khi đó x cũng tỉ lệ nghịch với y theo cùng hệ số a.</p>
      <p>Ví dụ: quãng đường 120 km; vận tốc v (km/h) và thời gian t (h) liên hệ bởi v · t = 120.</p>` },
    { title: 'Tính chất', html: `<p>Nếu y tỉ lệ nghịch với x theo hệ số a thì:</p><ul><li>Tích hai giá trị tương ứng luôn không đổi: x₁y₁ = x₂y₂ = … = a.</li><li>Tỉ số hai giá trị bất kì của đại lượng này bằng <b>nghịch đảo</b> tỉ số hai giá trị tương ứng của đại lượng kia: {{x₁|x₂}} = {{y₂|y₁}}.</li></ul>
      <table class="tbl"><tr><th>v (km/h)</th><td>20</td><td>30</td><td>40</td><td>60</td></tr><tr><th>t (giờ)</th><td>6</td><td>4</td><td>3</td><td>2</td></tr></table>`,
      svg: S.bar({ title: 'Thời gian đi 120 km theo vận tốc', cats: ['20 km/h', '30 km/h', '40 km/h', '60 km/h'], series: [{ name: 'giờ', values: [6, 4, 3, 2] }], yMax: 6, yStep: 1, yLabel: 'giờ', width: 480, height: 260 }),
      caption: 'Vận tốc gấp đôi thì thời gian giảm một nửa (tích v · t luôn bằng 120).' },
    { title: 'Bài toán tỉ lệ nghịch', html: `<p>8 công nhân xây xong bức tường trong 6 ngày. Hỏi 12 công nhân (năng suất như nhau) xây xong trong mấy ngày?</p>
      <p>Số người và số ngày tỉ lệ nghịch: 8 · 6 = 12 · x ⇒ x = 4 (ngày).</p>` },
    { title: 'Chia tỉ lệ nghịch', html: `<p>Chia số N thành các phần x, y, z <b>tỉ lệ nghịch</b> với a, b, c nghĩa là ax = by = cz, tức là x, y, z <b>tỉ lệ thuận</b> với {{1|a}}, {{1|b}}, {{1|c}}.</p>
      <p>Ví dụ: ba đội cùng khối lượng việc, xong trong 4, 6, 12 ngày; có 36 máy ⇒ số máy tỉ lệ nghịch với 4, 6, 12, tức tỉ lệ thuận với 3, 2, 1 (nhân {{1|4}}, {{1|6}}, {{1|12}} với 12) ⇒ 18, 12, 6 máy.</p>` }
  ],
  summary: 'x · y = a (a ≠ 0): y tỉ lệ nghịch với x. Tích tương ứng không đổi; {{x₁|x₂}} = {{y₂|y₁}}. Chia tỉ lệ nghịch với a, b, c = chia tỉ lệ thuận với {{1|a}}, {{1|b}}, {{1|c}}.',
  examples: [
    { title: 'Tìm hệ số', problem: 'y tỉ lệ nghịch với x, khi x = 3 thì y = 8. Tìm a và tính y khi x = 4.', solution: 'a = 3 · 8 = 24; y = 24 : 4 = 6.' },
    { title: 'Vận tốc – thời gian', problem: 'Đi với vận tốc 45 km/h hết 4 giờ. Đi với vận tốc 60 km/h hết bao lâu?', solution: '45 · 4 = 60 · t ⇒ t = 3 (giờ).' },
    { title: 'Năng suất', problem: 'Một đội 15 người làm xong việc trong 12 ngày. Muốn xong trong 9 ngày cần thêm bao nhiêu người?', solution: '15 · 12 = x · 9 ⇒ x = 20 ⇒ thêm 5 người.' }
  ],
  exercises: [
    { question: 'y tỉ lệ nghịch với x theo hệ số −12. Tính y khi x = 3; x khi y = −2.', hints: ['y = {{−12|x}}.', 'x = {{−12|y}}.'], solution: 'y = −4; x = 6.' },
    { question: 'Có 10 máy bơm cùng loại bơm đầy bể trong 6 giờ. Nếu dùng 4 máy thì mất bao lâu?', hints: ['Số máy và thời gian tỉ lệ nghịch.', '10 · 6 = 4 · t.'], solution: '15 giờ.' },
    { question: 'Ba đội máy cày (cùng loại máy, cánh đồng như nhau) xong việc trong 3, 5, 6 ngày. Tổng số máy là 21. Mỗi đội có bao nhiêu máy?', hints: ['Số máy tỉ lệ nghịch với 3, 5, 6.', 'Tỉ lệ thuận với {{1|3}}, {{1|5}}, {{1|6}}, hay 10, 6, 5.'], solution: '21 : 21 = 1 ⇒ 10; 6; 5 máy.' }
  ],
  quiz: [
    { type: 'short', calc: '3 * 8', q: 'y tỉ lệ nghịch với x; x = 3 thì y = 8. Hệ số tỉ lệ a bằng bao nhiêu?', answer: '24', explain: 'a = xy = 24.' },
    { type: 'short', calc: '3 * 8 / 4', q: 'y tỉ lệ nghịch với x; x = 3 thì y = 8. Tính y khi x = 4.', answer: '6', explain: '24 : 4 = 6.' },
    { type: 'short', calc: '8 * 6 / 12', q: '8 công nhân xây xong trong 6 ngày. 12 công nhân xây xong trong mấy ngày?', unit: 'ngày', answer: '4', explain: '48 : 12 = 4.' },
    { type: 'mcq', q: 'Công thức nào cho biết y tỉ lệ nghịch với x?', options: ['y = 3x', 'y = {{3|x}}', 'y = x − 3', 'y = {{x|3}}'], answer: 1, explain: 'Dạng y = {{a|x}}.' },
    { type: 'short', calc: '45 * 4 / 60', q: 'Vận tốc 45 km/h hết 4 giờ. Vận tốc 60 km/h hết mấy giờ?', unit: 'giờ', answer: '3', explain: '180 : 60 = 3.' },
    { type: 'short', calc: '15 * 12 / 9 - 15', q: '15 người làm xong trong 12 ngày. Muốn xong trong 9 ngày cần thêm bao nhiêu người?', unit: 'người', answer: '5', explain: 'Cần 20 người ⇒ thêm 5.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nếu y tỉ lệ nghịch với x theo hệ số a thì x tỉ lệ nghịch với y theo hệ số {{1|a}}.', answer: false, explain: 'Vẫn là hệ số a (vì xy = a).' },
    { type: 'short', calc: '10 * 6 / 4', q: '10 máy bơm đầy bể trong 6 giờ. 4 máy bơm đầy bể trong bao nhiêu giờ?', unit: 'giờ', answer: '15', explain: '60 : 4 = 15.' }
  ]
});
})();
