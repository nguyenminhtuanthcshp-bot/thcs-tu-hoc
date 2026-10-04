/* Toán 6 – Bài 20. Chu vi và diện tích của một số tứ giác đã học. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('toan-6/bai-20', {
  objectives: [
    'Nhớ và vận dụng công thức chu vi, diện tích hình vuông, hình chữ nhật.',
    'Vận dụng công thức chu vi, diện tích hình thoi, hình bình hành, hình thang.',
    'Giải bài toán thực tế: lát nền, trồng cỏ, làm hàng rào, tính diện tích hình ghép.'
  ],
  intro: 'Nhà em cần lát gạch phòng khách, rào quanh mảnh vườn, mua giấy dán tường… Tất cả đều cần tính chu vi hoặc diện tích.',
  steps: [
    { title: 'Hình vuông và hình chữ nhật', html: `<p>Hình vuông cạnh a: <span class="math">C = 4a; &nbsp; S = a · a = a<sup>2</sup></span>.</p><p>Hình chữ nhật chiều dài a, chiều rộng b (cùng đơn vị): <span class="math">C = 2(a + b); &nbsp; S = a · b</span>.</p>`,
      svg: S.shape('hcn', { names: false, angles: true, dims: [{ side: 0, label: 'a' }, { side: 1, label: 'b' }] }), caption: 'Hình chữ nhật có chiều dài a, chiều rộng b.' },
    { title: 'Hình thoi', html: `<p>Hình thoi cạnh a, hai đường chéo m và n: <span class="math">C = 4a; &nbsp; S = {{1|2}} · m · n</span>.</p><p>Lí do: hình thoi bằng một nửa hình chữ nhật có hai cạnh m và n bao quanh nó.</p>`,
      svg: S.shape('thoi', { names: false, diag: true, extra: [{ text: [150, 88, 'm'], color: S.C.blue, bold: true }, { text: [130, 150, 'n'], color: S.C.blue, bold: true }] }), caption: 'Hình thoi có hai đường chéo m và n.' },
    { title: 'Hình bình hành', html: `<p>Hình bình hành có cạnh đáy a, chiều cao tương ứng h, cạnh bên b: <span class="math">C = 2(a + b); &nbsp; S = a · h</span>.</p><p>Cắt tam giác ở một bên rồi ghép sang bên kia, ta được hình chữ nhật có cùng đáy a, cao h.</p>`,
      svg: S.shape('binhhanh', { names: false, height: true, dims: [{ side: 2, label: 'a' }, { side: 1, label: 'b' }] }), caption: 'Hình bình hành: đáy a, chiều cao h.' },
    { title: 'Hình thang', html: `<p>Hình thang có hai đáy a, b và chiều cao h: <span class="math">S = {{(a + b) · h|2}}</span>. Chu vi bằng tổng độ dài bốn cạnh.</p>`,
      svg: S.shape('thangcan', { names: false, height: true, dims: [{ side: 0, label: 'b' }, { side: 2, label: 'a' }] }), caption: 'Hình thang: hai đáy a, b; chiều cao h.' },
    { title: 'Lưu ý khi tính', html: `<ul><li>Đổi các độ dài về <b>cùng đơn vị</b> trước khi tính.</li><li>Chu vi có đơn vị độ dài (m, cm); diện tích có đơn vị diện tích (m², cm²).</li><li>Hình phức tạp: chia thành các hình đơn giản rồi cộng (hoặc lấy hình lớn trừ phần bị khoét).</li></ul>` }
  ],
  summary: 'Vuông: C = 4a, S = a². Chữ nhật: C = 2(a + b), S = ab. Thoi: C = 4a, S = ½ · m · n. Bình hành: S = a · h. Thang: S = (a + b) · h : 2. Nhớ đổi cùng đơn vị.',
  examples: [
    { title: 'Lát nền', problem: 'Một căn phòng hình chữ nhật dài 6 m, rộng 4 m được lát bằng gạch vuông cạnh 40 cm. Cần bao nhiêu viên gạch (bỏ qua mạch vữa)?', solution: 'Diện tích phòng: 6 · 4 = 24 m² = 240 000 cm². Một viên: 40 · 40 = 1 600 cm². Số viên: 240 000 : 1 600 = <b>150 viên</b>.' },
    { title: 'Hình thoi', problem: 'Một chiếc diều hình thoi có hai đường chéo 50 cm và 36 cm. Tính diện tích giấy làm diều.', solution: 'S = {{1|2}} · 50 · 36 = <b>900 cm²</b>.' },
    { title: 'Hình thang', problem: 'Một mảnh ruộng hình thang có hai đáy 30 m và 20 m, chiều cao 15 m. Tính diện tích.', solution: 'S = (30 + 20) · 15 : 2 = <b>375 m²</b>.' }
  ],
  exercises: [
    { question: 'Tính chu vi và diện tích hình vuông cạnh 12 cm.', hints: ['C = 4a.', 'S = a · a.'], solution: 'C = 48 cm; S = <b>144 cm²</b>.' },
    { question: 'Hình bình hành có đáy 15 cm, chiều cao 8 cm. Tính diện tích.', hints: ['S = a · h.', '15 · 8.'], solution: '<b>120 cm²</b>.' },
    { question: 'Một mảnh vườn hình chữ nhật dài 25 m, rộng 12 m. Người ta làm hàng rào quanh vườn, chừa lối vào rộng 2 m. Tính chiều dài hàng rào.', hints: ['Chu vi = 2 · (25 + 12).', 'Trừ đi lối vào 2 m.'], solution: 'Chu vi 74 m; hàng rào dài 74 − 2 = <b>72 m</b>.' }
  ],
  quiz: [
    { type: 'short', q: 'Diện tích hình chữ nhật dài 9 cm, rộng 6 cm là bao nhiêu cm²?', answer: '54', unit: 'cm²', calc: '9*6', explain: '9 · 6 = 54 cm².' },
    { type: 'short', q: 'Chu vi hình chữ nhật dài 9 cm, rộng 6 cm là bao nhiêu cm?', answer: '30', unit: 'cm', calc: '2*(9+6)', explain: '2 · (9 + 6) = 30 cm.' },
    { type: 'short', q: 'Hình vuông có chu vi 28 cm. Diện tích là bao nhiêu cm²?', answer: '49', unit: 'cm²', calc: 'Math.pow(28/4,2)', explain: 'Cạnh 7 cm; S = 49 cm².' },
    { type: 'mcq', q: 'Hình thoi có hai đường chéo 10 cm và 12 cm. Diện tích là:', options: ['120 cm²', '60 cm²', '44 cm²', '22 cm²'], answer: 1, calc: '10*12/2', explain: '½ · 10 · 12 = 60 cm².' },
    { type: 'short', q: 'Hình thang có hai đáy 8 m và 12 m, chiều cao 5 m. Diện tích là bao nhiêu m²?', answer: '50', unit: 'm²', calc: '(8+12)*5/2', explain: '(8 + 12) · 5 : 2 = 50 m².' },
    { type: 'mcq', q: 'Công thức diện tích hình bình hành (đáy a, chiều cao h) là:', options: ['a + h', '2(a + h)', 'a · h', '½ · a · h'], answer: 2, explain: 'S = a · h.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hai hình chữ nhật có cùng chu vi thì có cùng diện tích.', answer: false, explain: 'Ví dụ 5 × 1 và 3 × 3 đều có chu vi 12 nhưng diện tích 5 và 9.' },
    { type: 'short', q: 'Nền nhà 5 m × 4 m lát gạch vuông cạnh 50 cm. Cần bao nhiêu viên gạch?', answer: '80', calc: '(500*400)/(50*50)', explain: '20 m² = 200 000 cm²; mỗi viên 2 500 cm²; 200 000 : 2 500 = 80 viên.' }
  ]
});
})();
