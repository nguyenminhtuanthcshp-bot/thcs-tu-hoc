/* Toán 7 – Bài 37. Hình lăng trụ đứng tam giác và hình lăng trụ đứng tứ giác. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, C = S.C;
function netPrism() {
  var k = 22, h = 80, y0 = 98, x0 = 40, wd = [3, 4, 5], it = [], x = x0;
  wd.forEach(function (v) { var w = v * k; it.push({ poly: [[x, y0], [x + w, y0], [x + w, y0 + h], [x, y0 + h]], fill: C.blueL, color: C.blue }, { text: [x + w / 2, y0 + h / 2 + 5, v + ' cm'], size: 13, color: C.blue, bold: true }); x += w; });
  it.push({ poly: [[x0, y0], [x0 + 3 * k, y0], [x0, y0 - 4 * k]], fill: C.orangeL, color: C.orange }, { poly: [[x0, y0 + h], [x0 + 3 * k, y0 + h], [x0, y0 + h + 4 * k]], fill: C.orangeL, color: C.orange });
  it.push({ seg: [x + 16, y0, x + 16, y0 + h], color: C.green, width: 1.6 }, { text: [x + 30, y0 + h / 2 + 5, 'h'], bold: true, color: C.green });
  it.push({ text: [220, y0 + h + 4 * k + 22, 'Mặt bên ghép lại: một hình chữ nhật dài bằng chu vi đáy, rộng bằng h'], size: 12, color: C.muted });
  return S.draw({ w: 440, h: y0 + h + 4 * k + 34, items: it, aria: 'Hình khai triển lăng trụ đứng tam giác' });
}
THCS.registerLesson('toan-7/bai-37', {
  objectives: [
    'Nhận biết hình lăng trụ đứng tam giác, lăng trụ đứng tứ giác: đỉnh, cạnh, mặt đáy, mặt bên, chiều cao.',
    'Tính diện tích xung quanh (S<sub>xq</sub> = chu vi đáy × chiều cao) và thể tích (V = diện tích đáy × chiều cao).',
    'Vận dụng vào các vật thể thực tế: lều trại, lăng kính, bể, khối bê tông.'
  ],
  intro: 'Chiếc lều cắm trại, miếng pho mát hình tam giác, hộp bánh… có dạng hình lăng trụ đứng. Hình hộp chữ nhật chính là một lăng trụ đứng tứ giác đặc biệt!',
  steps: [
    { title: 'Lăng trụ đứng tam giác', html: `<p>Hình lăng trụ đứng tam giác ABC.A'B'C' có: 6 đỉnh; hai <b>mặt đáy</b> ABC và A'B'C' là hai tam giác bằng nhau nằm trong hai mặt phẳng song song; ba <b>mặt bên</b> là các hình chữ nhật; các <b>cạnh bên</b> AA', BB', CC' bằng nhau, vuông góc với đáy. Độ dài cạnh bên là <b>chiều cao</b>.</p>`,
      svg: S.solid({ kind: 'langtru3', a: 5, b: 3, c: 3.4, names: true, fill: C.greenL }),
      caption: 'Lăng trụ đứng tam giác: đáy tam giác, mặt bên hình chữ nhật.' },
    { title: 'Lăng trụ đứng tứ giác', html: `<p>Hình lăng trụ đứng tứ giác ABCD.A'B'C'D' có hai đáy là hai tứ giác bằng nhau, bốn mặt bên là hình chữ nhật, 8 đỉnh, 12 cạnh. Hình hộp chữ nhật, hình lập phương là các lăng trụ đứng tứ giác.</p>`,
      svg: S.solid({ kind: 'langtru4', a: 5, b: 3, c: 3.2, names: true, fill: C.purpleL }),
      caption: 'Lăng trụ đứng có đáy là hình thang.' },
    { title: 'Diện tích xung quanh', html: `<p>Khai triển các mặt bên thành một hình chữ nhật có chiều dài bằng chu vi đáy và chiều rộng bằng chiều cao:</p>
      <p style="text-align:center"><b>S<sub>xq</sub> = C<sub>đáy</sub> · h</b></p>`,
      svg: netPrism(), caption: 'Đáy tam giác 3 – 4 – 5 cm: chu vi 12 cm.' },
    { title: 'Thể tích', html: `<p style="text-align:center"><b>V = S<sub>đáy</sub> · h</b></p>
      <p>Ví dụ: đáy là tam giác vuông có hai cạnh góc vuông 3 cm và 4 cm (cạnh còn lại 5 cm), chiều cao 10 cm:</p>
      <ul><li>S<sub>xq</sub> = (3 + 4 + 5) · 10 = 120 cm².</li><li>S<sub>đáy</sub> = {{1|2}} · 3 · 4 = 6 cm²; V = 6 · 10 = 60 cm³.</li></ul>` },
    { title: 'Lều trại', html: `<p>Lều có dạng lăng trụ đứng tam giác: mặt trước là tam giác đáy 3 m, cao 2 m; lều dài 4 m. Thể tích không khí trong lều: V = {{1|2}} · 3 · 2 · 4 = 12 m³.</p>` }
  ],
  summary: 'Lăng trụ đứng: hai đáy là đa giác bằng nhau, mặt bên là hình chữ nhật, cạnh bên = chiều cao h. S<sub>xq</sub> = chu vi đáy · h; V = diện tích đáy · h.',
  examples: [
    { title: 'Lăng trụ tam giác', problem: 'Đáy tam giác vuông 3 cm, 4 cm, 5 cm; h = 10 cm. Tính S<sub>xq</sub> và V.', solution: '120 cm²; 60 cm³.' },
    { title: 'Đáy hình thang', problem: 'Lăng trụ đứng đáy hình thang có hai đáy 4 cm, 6 cm, chiều cao hình thang 3 cm; chiều cao lăng trụ 8 cm. Tính V.', solution: 'S<sub>đáy</sub> = (4 + 6) · 3 : 2 = 15 cm²; V = 120 cm³.' },
    { title: 'Lều trại', problem: 'Lều: tam giác đáy 3 m, cao 2 m, dài 4 m. Tính thể tích.', solution: '12 m³.' }
  ],
  exercises: [
    { question: 'Lăng trụ đứng tam giác đều cạnh đáy 5 cm, chiều cao 9 cm. Tính S<sub>xq</sub>.', hints: ['Chu vi đáy 15 cm.', '15 · 9.'], solution: '135 cm².' },
    { question: 'Lăng trụ đứng đáy tam giác có diện tích 12 cm², thể tích 96 cm³. Tính chiều cao.', hints: ['V = S<sub>đáy</sub> · h.', '96 : 12.'], solution: '8 cm.' },
    { question: 'Lăng trụ đứng tứ giác có đáy là hình thoi hai đường chéo 6 cm và 8 cm, chiều cao 10 cm. Tính V.', hints: ['S<sub>đáy</sub> = 6 · 8 : 2.', '24 · 10.'], solution: '240 cm³.' }
  ],
  quiz: [
    { type: 'short', calc: '(3 + 4 + 5) * 10', q: 'Lăng trụ đứng đáy tam giác 3 – 4 – 5 cm, chiều cao 10 cm. S<sub>xq</sub> (cm²)?', unit: 'cm²', answer: '120', explain: '12 · 10.' },
    { type: 'short', calc: '3 * 4 / 2 * 10', q: 'Đáy tam giác vuông hai cạnh góc vuông 3 cm, 4 cm; chiều cao lăng trụ 10 cm. V (cm³)?', unit: 'cm³', answer: '60', explain: '6 · 10.' },
    { type: 'short', calc: '(4 + 6) * 3 / 2 * 8', q: 'Đáy hình thang (đáy 4 cm, 6 cm; cao 3 cm), chiều cao lăng trụ 8 cm. V (cm³)?', unit: 'cm³', answer: '120', explain: '15 · 8.' },
    { type: 'short', calc: '3 * 2 / 2 * 4', q: 'Lều: tam giác đáy 3 m, cao 2 m; lều dài 4 m. Thể tích (m³)?', unit: 'm³', answer: '12', explain: '3 · 4.' },
    { type: 'short', calc: '96 / 12', q: 'S<sub>đáy</sub> = 12 cm², V = 96 cm³. Chiều cao lăng trụ (cm)?', unit: 'cm', answer: '8', explain: '96 : 12.' },
    { type: 'short', calc: '6', q: 'Hình lăng trụ đứng tam giác có bao nhiêu đỉnh?', answer: '6', explain: '3 + 3.' },
    { type: 'mcq', q: 'Các mặt bên của hình lăng trụ đứng là:', options: ['tam giác', 'hình chữ nhật', 'hình thang', 'hình tròn'], answer: 1, explain: 'Cạnh bên vuông góc với đáy.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hình hộp chữ nhật là một hình lăng trụ đứng tứ giác.', answer: true, explain: 'Đáy là hình chữ nhật.' }
  ]
});
})();
