/* Toán 7 – Chương X. Luyện tập (sau Bài 36). Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, C = S.C;
THCS.registerLesson('toan-7/c10-ltc-1', {
  objectives: [
    'Củng cố các yếu tố của hình hộp chữ nhật, hình lập phương.',
    'Tính thành thạo diện tích xung quanh, diện tích toàn phần, thể tích.',
    'Giải bài toán thực tế có đổi đơn vị và tìm kích thước chưa biết.'
  ],
  intro: 'Luyện tập Bài 36. Chú ý đổi về cùng đơn vị trước khi tính, và phân biệt diện tích (đơn vị vuông) với thể tích (đơn vị khối).',
  steps: [
    { title: 'Nhắc lại công thức', html: `<table class="tbl"><tr><th></th><th>S<sub>xq</sub></th><th>S<sub>tp</sub></th><th>V</th></tr><tr><td>Hình hộp chữ nhật</td><td>2(a + b)c</td><td>2(ab + bc + ca)</td><td>abc</td></tr><tr><td>Lập phương</td><td>4a<sup>2</sup></td><td>6a<sup>2</sup></td><td>a<sup>3</sup></td></tr></table>` },
    { title: 'Tìm kích thước chưa biết', html: `<p>Biết V và hai kích thước: chiều còn lại = V : (tích hai kích thước). Biết S<sub>xq</sub> và chu vi đáy: chiều cao = S<sub>xq</sub> : chu vi đáy.</p>`,
      svg: S.solid({ kind: 'hhcn', a: 5, b: 2.5, c: 3, dims: { a: '10 cm', b: '5 cm', c: '? cm' } }),
      caption: 'V = 300 cm³ ⇒ c = 300 : (10 · 5) = 6 cm.' },
    { title: 'Đổi đơn vị', html: `<ul><li>1 m = 10 dm = 100 cm; 1 m² = 10 000 cm²; 1 m³ = 1 000 000 cm³.</li><li>1 lít = 1 dm³ = 1 000 cm³.</li></ul>` },
    { title: 'Thay đổi kích thước', html: `<p>Nếu cạnh hình lập phương gấp 2 lần thì diện tích xung quanh gấp 4 lần, thể tích gấp 8 lần.</p>` }
  ],
  summary: 'S<sub>xq</sub> = chu vi đáy × chiều cao; V = diện tích đáy × chiều cao. Đổi cùng đơn vị. Cạnh lập phương gấp k lần: diện tích gấp k<sup>2</sup>, thể tích gấp k<sup>3</sup>.',
  examples: [
    { title: 'Tìm chiều cao', problem: 'Hình hộp chữ nhật có V = 300 cm³, đáy 10 cm × 5 cm. Tính chiều cao.', solution: '6 cm.' },
    { title: 'Toàn phần', problem: 'Tính diện tích toàn phần hình hộp 4 cm × 3 cm × 2 cm.', solution: '2(12 + 6 + 8) = 52 cm².' },
    { title: 'Gấp đôi cạnh', problem: 'Hình lập phương cạnh 3 cm, nếu cạnh tăng gấp đôi thì thể tích tăng bao nhiêu lần?', solution: '27 → 216: gấp 8 lần.' }
  ],
  exercises: [
    { question: 'Hộp quà hình lập phương cạnh 20 cm. Cần bao nhiêu cm² giấy để bọc kín (không tính mép dán)?', hints: ['6a<sup>2</sup>.', '6 · 400.'], solution: '2 400 cm².' },
    { question: 'Hình hộp chữ nhật có chu vi đáy 18 cm, S<sub>xq</sub> = 90 cm². Tính chiều cao.', hints: ['S<sub>xq</sub> = chu vi đáy · h.', '90 : 18.'], solution: '5 cm.' },
    { question: 'Bể nước dài 1,2 m, rộng 0,8 m, cao 1 m; đang chứa 480 lít. Mực nước cao bao nhiêu dm?', hints: ['Đổi: 12 dm, 8 dm.', '480 : 96.'], solution: '5 dm.' }
  ],
  quiz: [
    { type: 'short', calc: '300 / (10 * 5)', q: 'Hình hộp chữ nhật V = 300 cm³, đáy 10 cm × 5 cm. Chiều cao (cm)?', unit: 'cm', answer: '6', explain: '300 : 50.' },
    { type: 'short', calc: '2 * (4 * 3 + 3 * 2 + 2 * 4)', q: 'Diện tích toàn phần hình hộp 4 cm × 3 cm × 2 cm (cm²)?', unit: 'cm²', answer: '52', explain: '2 · 26.' },
    { type: 'short', calc: '6 * 20 * 20', q: 'Hộp lập phương cạnh 20 cm. Diện tích giấy bọc kín (cm²)?', unit: 'cm²', answer: '2400', answerText: '2 400', explain: '6 · 400.' },
    { type: 'short', calc: '90 / 18', q: 'Chu vi đáy 18 cm, S<sub>xq</sub> = 90 cm². Chiều cao (cm)?', unit: 'cm', answer: '5', explain: '90 : 18.' },
    { type: 'short', calc: '480 / (12 * 8)', q: 'Bể dài 12 dm, rộng 8 dm chứa 480 lít. Mực nước cao bao nhiêu dm?', unit: 'dm', answer: '5', explain: '480 : 96.' },
    { type: 'short', calc: '2 * 2 * 2', q: 'Cạnh hình lập phương tăng gấp 2 thì thể tích tăng gấp bao nhiêu lần?', answer: '8', explain: '2<sup>3</sup>.' },
    { type: 'mcq', q: '1 m³ bằng:', options: ['100 dm³', '1 000 dm³', '10 000 dm³', '10 dm³'], answer: 1, explain: '10<sup>3</sup>.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Diện tích toàn phần hình lập phương cạnh a là 6a<sup>2</sup>.', answer: true, explain: '6 mặt vuông.' }
  ]
});
})();
