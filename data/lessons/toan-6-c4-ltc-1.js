/* Toán 6 – Chương IV. Luyện tập chung (sau Bài 20). Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('toan-6/c4-ltc-1', {
  objectives: [
    'Củng cố đặc điểm các hình: tam giác đều, hình vuông, lục giác đều, chữ nhật, thoi, bình hành, thang cân.',
    'Tính thành thạo chu vi, diện tích các tứ giác đã học.',
    'Tính diện tích hình ghép bằng cách chia nhỏ hoặc bù trừ.'
  ],
  intro: 'Luyện tập chương IV. Với hình ghép, hãy vẽ nét đứt để chia thành những hình quen thuộc.',
  steps: [
    { title: 'Nhận dạng nhanh', html: `<p>Nhìn vào cạnh (bằng nhau? song song?), góc (vuông?) và đường chéo (bằng nhau? vuông góc?) để gọi đúng tên hình.</p>`,
      svg: S.row([{ svg: S.shape('hinhvuong', { names: false, diag: true }), caption: 'Hình vuông' }, { svg: S.shape('thoi', { names: false, diag: true }), caption: 'Hình thoi' }, { svg: S.shape('thangcan', { names: false, diag: true }), caption: 'Hình thang cân' }]) },
    { title: 'Bảng công thức', html: `<table class="tbl"><tr><th>Hình</th><th>Chu vi</th><th>Diện tích</th></tr><tr><td>Vuông (cạnh a)</td><td>4a</td><td>a<sup>2</sup></td></tr><tr><td>Chữ nhật (a, b)</td><td>2(a + b)</td><td>a · b</td></tr><tr><td>Thoi (cạnh a; chéo m, n)</td><td>4a</td><td>{{m · n|2}}</td></tr><tr><td>Bình hành (đáy a, cạnh b, cao h)</td><td>2(a + b)</td><td>a · h</td></tr><tr><td>Thang (đáy a, b; cao h)</td><td>tổng 4 cạnh</td><td>{{(a + b) · h|2}}</td></tr></table>` },
    { title: 'Hình ghép', html: `<p>Hình chữ L dưới đây có thể chia thành hai hình chữ nhật, hoặc lấy hình chữ nhật lớn trừ đi phần khuyết.</p>`,
      svg: S.draw({ w: 300, h: 200, items: [{ poly: [[30, 20], [130, 20], [130, 100], [270, 100], [270, 170], [30, 170]], fill: S.C.orangeL }, { seg: [130, 100, 30, 100], dash: true, color: S.C.muted }, { text: [80, 14, '10 m'], color: S.C.blue, bold: true, size: 13 }, { text: [150, 190, '24 m'], color: S.C.blue, bold: true, size: 13 }, { text: [22, 98, '15 m'], anchor: 'end', color: S.C.blue, bold: true, size: 13 }, { text: [282, 140, '7 m'], anchor: 'start', color: S.C.blue, bold: true, size: 13 }] }),
      caption: 'Chia hình chữ L bằng nét đứt thành hai hình chữ nhật.' },
    { title: 'Kiểm tra đơn vị', html: `<p>1 m = 100 cm; 1 m² = 10 000 cm². Diện tích luôn ghi đơn vị “vuông”.</p>` }
  ],
  summary: 'Nhận dạng hình qua cạnh, góc, đường chéo; nhớ bảng công thức chu vi – diện tích; chia hình ghép thành các hình quen thuộc.',
  examples: [
    { title: 'Hình chữ L', problem: 'Tính diện tích hình chữ L ở bước 3 (cạnh trên 10 m, cạnh đáy 24 m, cạnh trái 15 m, cạnh phải 7 m).', solution: 'Chia bằng nét đứt: phần dưới là hình chữ nhật 24 m × 7 m = 168 m²; phần trên là hình chữ nhật 10 m × (15 − 7) m = 80 m². Tổng <b>248 m²</b>.' },
    { title: 'Bù trừ', problem: 'Một tấm bìa hình vuông cạnh 20 cm bị khoét ở giữa một lỗ hình chữ nhật 8 cm × 5 cm. Tính diện tích phần bìa còn lại.', solution: '20 · 20 − 8 · 5 = 400 − 40 = <b>360 cm²</b>.' },
    { title: 'Tìm cạnh', problem: 'Hình chữ nhật có diện tích 96 m², chiều rộng 8 m. Tính chu vi.', solution: 'Chiều dài 96 : 8 = 12 m. Chu vi 2 · (12 + 8) = <b>40 m</b>.' }
  ],
  exercises: [
    { question: 'Hình bình hành có diện tích 72 cm², đáy 12 cm. Tính chiều cao tương ứng.', hints: ['S = a · h ⇒ h = S : a.', '72 : 12.'], solution: 'h = <b>6 cm</b>.' },
    { question: 'Một con đường rộng 2 m chạy quanh (bên trong, sát mép) một khu vườn hình chữ nhật 30 m × 20 m. Tính diện tích con đường.', hints: ['Phần bên trong con đường là hình chữ nhật (30 − 4) × (20 − 4).', 'Lấy diện tích cả vườn trừ phần bên trong.'], solution: '600 − 26 · 16 = 600 − 416 = <b>184 m²</b>.' },
    { question: 'Hình thoi có cạnh 5 cm, hai đường chéo 6 cm và 8 cm. Tính chu vi và diện tích.', hints: ['C = 4a.', 'S = m · n : 2.'], solution: 'C = 20 cm; S = <b>24 cm²</b>.' }
  ],
  quiz: [
    { type: 'short', q: 'Hình vuông cạnh 15 cm có diện tích bao nhiêu cm²?', answer: '225', unit: 'cm²', calc: '15*15', explain: '15 · 15 = 225.' },
    { type: 'short', q: 'Hình chữ nhật có chu vi 50 m, chiều dài 15 m. Chiều rộng bằng bao nhiêu mét?', answer: '10', unit: 'm', calc: '50/2-15', explain: 'Nửa chu vi 25 m; 25 − 15 = 10 m.' },
    { type: 'mcq', q: 'Tứ giác có hai đường chéo bằng nhau và vuông góc, cắt nhau tại trung điểm mỗi đường là:', options: ['Hình thoi', 'Hình chữ nhật', 'Hình vuông', 'Hình thang cân'], answer: 2, explain: 'Chỉ hình vuông có đủ các tính chất này.' },
    { type: 'short', q: 'Hình thang có đáy 6 cm và 10 cm, cao 4 cm. Diện tích (cm²)?', answer: '32', unit: 'cm²', calc: '(6+10)*4/2', explain: '16 · 4 : 2 = 32.' },
    { type: 'short', q: 'Hình bình hành đáy 9 m, chiều cao 7 m. Diện tích (m²)?', answer: '63', unit: 'm²', calc: '9*7', explain: '9 · 7 = 63.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Diện tích hình thoi bằng tích hai đường chéo.', answer: false, explain: 'Bằng nửa tích hai đường chéo.' },
    { type: 'short', q: 'Tấm bìa 30 cm × 20 cm, cắt đi 4 hình vuông cạnh 5 cm ở bốn góc. Diện tích còn lại (cm²)?', answer: '500', unit: 'cm²', calc: '30*20-4*25', explain: '600 − 100 = 500.' },
    { type: 'mcq', q: 'Lục giác đều cạnh 3 cm có chu vi:', options: ['9 cm', '18 cm', '12 cm', '15 cm'], answer: 1, calc: '6*3', explain: '6 · 3 = 18 cm.' }
  ]
});
})();
