/* Toán 7 – Bài 36. Hình hộp chữ nhật và hình lập phương. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, C = S.C;
function net() {
  var s = 44, x0 = 120, y0 = 14, cells = [[1, 0], [0, 1], [1, 1], [2, 1], [3, 1], [1, 2]], it = [];
  cells.forEach(function (c, i) { var x = x0 + c[0] * s, y = y0 + c[1] * s; it.push({ poly: [[x, y], [x + s, y], [x + s, y + s], [x, y + s]], fill: i === 2 ? C.orangeL : C.blueL, color: C.blue }); });
  it.push({ text: [x0 + 1.5 * s, y0 + 1.5 * s + 5, 'đáy'], size: 12, bold: true, color: C.orange });
  return S.draw({ w: 420, h: y0 * 2 + 3 * s, items: it, aria: 'Hình khai triển của hình lập phương' });
}
THCS.registerLesson('toan-7/bai-36', {
  objectives: [
    'Nhận biết đỉnh, cạnh, mặt, đường chéo của hình hộp chữ nhật và hình lập phương.',
    'Tính diện tích xung quanh và thể tích của hình hộp chữ nhật, hình lập phương.',
    'Giải quyết bài toán thực tế: sơn tường, đổ nước vào bể, đóng thùng.'
  ],
  intro: 'Hộp sữa, viên gạch, bể cá, căn phòng… đều có dạng hình hộp chữ nhật. Biết tính diện tích và thể tích, em sẽ biết cần bao nhiêu sơn hay bao nhiêu nước!',
  steps: [
    { title: 'Các yếu tố của hình hộp chữ nhật', html: `<p>Hình hộp chữ nhật ABCD.A'B'C'D' có <b>8 đỉnh</b>, <b>12 cạnh</b>, <b>6 mặt</b> là hình chữ nhật và <b>4 đường chéo</b> (AC', BD', CA', DB') cắt nhau tại một điểm.</p>
      <p>Hai mặt đối diện (ví dụ ABCD và A'B'C'D') gọi là hai mặt đáy; bốn mặt còn lại là các mặt bên. Các cạnh bên AA', BB', CC', DD' bằng nhau.</p>`,
      svg: S.solid({ kind: 'hhcn', a: 5, b: 3, c: 3.2, names: true, dims: { a: 'a', b: 'b', c: 'c' } }),
      caption: 'Chiều dài a, chiều rộng b, chiều cao c. Cạnh khuất vẽ nét đứt.' },
    { title: 'Hình lập phương', html: `<p>Hình lập phương là hình hộp chữ nhật có tất cả các cạnh bằng nhau; 6 mặt là các hình vuông bằng nhau.</p>`,
      svg: net(), caption: 'Một hình khai triển của hình lập phương: 6 hình vuông bằng nhau.' },
    { title: 'Diện tích xung quanh', html: `<p><b>Diện tích xung quanh</b> là tổng diện tích bốn mặt bên:</p>
      <p style="text-align:center">Hình hộp chữ nhật: <b>S<sub>xq</sub> = 2(a + b) · c</b> &nbsp;&nbsp; Hình lập phương: <b>S<sub>xq</sub> = 4a<sup>2</sup></b></p>
      <p>Diện tích toàn phần = S<sub>xq</sub> + 2 · diện tích đáy (lập phương: 6a<sup>2</sup>).</p>` },
    { title: 'Thể tích', html: `<p style="text-align:center">Hình hộp chữ nhật: <b>V = a · b · c</b> &nbsp;&nbsp; Hình lập phương: <b>V = a<sup>3</sup></b></p>
      <p>Đơn vị: cm³, dm³, m³; 1 dm³ = 1 lít; 1 m³ = 1 000 dm³.</p>`,
      svg: S.solid({ kind: 'hhcn', a: 6, b: 3, c: 4, dims: { a: '6 cm', b: '3 cm', c: '4 cm' } }),
      caption: 'V = 6 · 3 · 4 = 72 cm³; S<sub>xq</sub> = 2(6 + 3) · 4 = 72 cm².' },
    { title: 'Bài toán thực tế', html: `<p>Bể cá dài 80 cm, rộng 50 cm, cao 45 cm. Thể tích bể: 80 · 50 · 45 = 180 000 cm³ = 180 lít. Nếu mực nước cao 40 cm thì lượng nước là 80 · 50 · 40 = 160 000 cm³ = 160 lít.</p>` }
  ],
  summary: 'Hình hộp chữ nhật: 8 đỉnh, 12 cạnh, 6 mặt, 4 đường chéo. S<sub>xq</sub> = 2(a + b)c; V = abc. Lập phương cạnh a: S<sub>xq</sub> = 4a<sup>2</sup>; V = a<sup>3</sup>. 1 dm³ = 1 lít.',
  examples: [
    { title: 'Hình hộp', problem: 'Hình hộp chữ nhật dài 6 cm, rộng 3 cm, cao 4 cm. Tính S<sub>xq</sub> và V.', solution: 'S<sub>xq</sub> = 2 · 9 · 4 = 72 cm²; V = 72 cm³.' },
    { title: 'Lập phương', problem: 'Hình lập phương cạnh 5 cm. Tính diện tích xung quanh và thể tích.', solution: 'S<sub>xq</sub> = 4 · 25 = 100 cm²; V = 125 cm³.' },
    { title: 'Bể nước', problem: 'Bể dài 2 m, rộng 1,5 m, cao 1 m. Bể chứa được bao nhiêu lít?', solution: 'V = 3 m³ = 3 000 lít.' }
  ],
  exercises: [
    { question: 'Một căn phòng dài 5 m, rộng 4 m, cao 3 m. Tính diện tích bốn bức tường.', hints: ['S<sub>xq</sub> = 2(5 + 4) · 3.', 'Chưa trừ cửa.'], solution: '54 m².' },
    { question: 'Hình lập phương có thể tích 64 cm³. Tính cạnh.', hints: ['a<sup>3</sup> = 64.', '4 · 4 · 4.'], solution: '4 cm.' },
    { question: 'Thùng hình hộp dài 40 cm, rộng 30 cm chứa 24 lít nước. Mực nước cao bao nhiêu cm?', hints: ['24 lít = 24 000 cm³.', '24 000 : (40 · 30).'], solution: '20 cm.' }
  ],
  quiz: [
    { type: 'short', calc: '2 * (6 + 3) * 4', q: 'Hình hộp chữ nhật 6 cm × 3 cm, cao 4 cm. Diện tích xung quanh (cm²)?', unit: 'cm²', answer: '72', explain: '2 · 9 · 4.' },
    { type: 'short', calc: '5 * 5 * 5', q: 'Thể tích hình lập phương cạnh 5 cm (cm³)?', unit: 'cm³', answer: '125', explain: '5<sup>3</sup>.' },
    { type: 'short', calc: '4 * 5 * 5', q: 'Diện tích xung quanh hình lập phương cạnh 5 cm (cm²)?', unit: 'cm²', answer: '100', explain: '4 · 25.' },
    { type: 'short', calc: '2 * 1.5 * 1 * 1000', q: 'Bể dài 2 m, rộng 1,5 m, cao 1 m chứa được bao nhiêu lít?', unit: 'lít', answer: '3000', answerText: '3 000', explain: '3 m³ = 3 000 dm³.' },
    { type: 'short', calc: '2 * (5 + 4) * 3', q: 'Phòng dài 5 m, rộng 4 m, cao 3 m. Diện tích bốn bức tường (m²)?', unit: 'm²', answer: '54', explain: '2 · 9 · 3.' },
    { type: 'short', calc: '24000 / (40 * 30)', q: 'Thùng dài 40 cm, rộng 30 cm chứa 24 lít nước. Mực nước cao bao nhiêu cm?', unit: 'cm', answer: '20', explain: '24 000 : 1 200.' },
    { type: 'mcq', q: 'Hình hộp chữ nhật có bao nhiêu cạnh?', options: ['6', '8', '12', '4'], answer: 2, explain: '12 cạnh.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: 1 dm³ = 1 lít.', answer: true, explain: 'Quy đổi.' }
  ]
});
})();
