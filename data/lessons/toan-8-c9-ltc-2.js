/* Toán 8 – Luyện tập chung (sau Bài 37). Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-8/c9-ltc-2', {
    objectives: [
      'Vận dụng định lí Pythagore và định lí đảo để tính độ dài, nhận biết tam giác vuông.',
      'Vận dụng các trường hợp đồng dạng của tam giác vuông để tính độ dài và đo gián tiếp.',
      'Nhận biết hình đồng dạng, tính độ dài và diện tích theo tỉ số đồng dạng.'
    ],
    intro: 'Bài luyện tập kết hợp ba công cụ: định lí Pythagore, tam giác vuông đồng dạng và hình đồng dạng, qua các tình huống tính toán và thực tế.',
    steps: [
      { title: 'Nhắc lại công thức', html: `<ul><li>Pythagore: c<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup> (c là cạnh huyền).</li><li>Tam giác vuông đồng dạng: một góc nhọn bằng nhau, hai cạnh góc vuông tỉ lệ, hoặc cạnh huyền – cạnh góc vuông tỉ lệ.</li><li>Tỉ số đồng dạng k ⇒ tỉ số chu vi k, tỉ số diện tích k<sup>2</sup>.</li></ul>` },
      { title: 'Khoảng cách trên mặt phẳng toạ độ', html: `<p>Khoảng cách giữa A(1; 1) và B(4; 5): tạo tam giác vuông có hai cạnh góc vuông 3 và 4 ⇒ AB = √(9 + 16) = 5.</p>`,
        svg: S.plane({ x: [-1, 6], y: [-1, 6], u: 32, pts: [{ x: 1, y: 1, label: 'A', dx: -16, dy: -8 }, { x: 4, y: 5, label: 'B' }, { x: 4, y: 1, label: 'H', color: C.muted, dx: 6, dy: 16 }], lines: [{ a: 4 / 3, b: -1 / 3, color: C.blue }, { a: 0, b: 1, color: C.muted, dash: '5 4' }, { a: null, x0: 4, color: C.muted, dash: '5 4' }] }), caption: 'AH = 3, BH = 4, AB = 5.' },
      { title: 'Chọn công cụ', html: `<ul><li>Biết hai cạnh của tam giác vuông, tìm cạnh thứ ba → Pythagore.</li><li>Có hai tam giác vuông chung/ bằng một góc nhọn → đồng dạng, lập tỉ lệ thức.</li><li>Bản đồ, mô hình, phóng ảnh → hình đồng dạng, nhân/chia theo tỉ số.</li></ul>` },
      { title: 'Lưu ý khi làm tròn', html: `<p>Giữ căn bậc hai đến bước cuối rồi mới làm tròn, tránh sai số cộng dồn.</p>` }
    ],
    summary: 'Pythagore cho độ dài; đồng dạng cho tỉ lệ; hình đồng dạng cho phóng to/thu nhỏ. Tỉ số diện tích bằng bình phương tỉ số đồng dạng.',
    examples: [
      { title: 'Khoảng cách', problem: 'Tính khoảng cách giữa hai điểm A(1; 1) và B(4; 5) trên mặt phẳng toạ độ (đơn vị trên trục là 1 cm).', solution: 'AH = 3, BH = 4 ⇒ AB = 5 cm.' },
      { title: 'Đường chéo hình hộp', problem: 'Một chiếc hộp hình chữ nhật có đáy 6 cm × 8 cm. Đường chéo của đáy dài bao nhiêu?', solution: '√(36 + 64) = 10 cm.' },
      { title: 'Tỉ số diện tích', problem: 'Mô hình ngôi nhà tỉ lệ 1 : 50. Sàn mô hình có diện tích 400 cm². Diện tích sàn thật?', solution: '400 · 50² = 1 000 000 cm² = 100 m².' }
    ],
    exercises: [
      { question: 'Một cột cờ có bóng dài 6 m, cùng lúc một người cao 1,6 m có bóng dài 1,2 m. Tính chiều cao cột cờ.', hints: ['Hai tam giác vuông có góc nhọn bằng nhau (góc của tia nắng).', '{{h|1,6}} = {{6|1,2}}.'], solution: 'h = 8 m.' },
      { question: 'Tam giác có ba cạnh 20 cm, 21 cm, 29 cm có phải tam giác vuông không?', hints: ['400 + 441 = ?', 'So với 29² = 841.'], solution: '400 + 441 = 841 ⇒ vuông.' },
      { question: 'Hai tam giác đồng dạng có chu vi lần lượt 12 cm và 18 cm. Diện tích tam giác nhỏ là 8 cm². Tính diện tích tam giác lớn.', hints: ['k = {{18|12}} = {{3|2}}.', 'S = 8 · ({{3|2}})².'], solution: '18 cm².' }
    ],
    quiz: [
      { type: 'short', calc: 'sqrt(3*3 + 4*4)', q: 'Khoảng cách giữa A(1; 1) và B(4; 5) (đơn vị 1 cm)?', unit: 'cm', answer: '5', explain: '√(9 + 16).' },
      { type: 'short', calc: '1.6 * 6 / 1.2', q: 'Cột cờ có bóng 6 m; người cao 1,6 m có bóng 1,2 m. Cột cờ cao bao nhiêu mét?', unit: 'm', answer: '8', explain: '{{h|1,6}} = {{6|1,2}}.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tam giác có ba cạnh 20 cm, 21 cm, 29 cm là tam giác vuông.', answer: true, explain: '400 + 441 = 841.' },
      { type: 'short', calc: '8 * (18/12) * (18/12)', q: 'Hai tam giác đồng dạng có chu vi 12 cm và 18 cm, tam giác nhỏ có diện tích 8 cm². Diện tích tam giác lớn?', unit: 'cm²', answer: '18', explain: 'k² = {{9|4}}.' },
      { type: 'mcq', q: 'Hai tam giác vuông đồng dạng khi:', options: ['có cạnh huyền bằng nhau', 'có một góc nhọn bằng nhau', 'có chu vi bằng nhau', 'có một cạnh góc vuông bằng nhau'], answer: 1, explain: 'g.g.' },
      { type: 'short', calc: '400 * 50 * 50 / 10000', q: 'Mô hình tỉ lệ 1 : 50, sàn mô hình 400 cm². Diện tích sàn thật bằng bao nhiêu mét vuông?', unit: 'm²', answer: '100', explain: '400 · 2500 cm².' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nếu tỉ số đồng dạng là 2 thì tỉ số diện tích cũng là 2.', answer: false, explain: 'Tỉ số diện tích là 4.' },
      { type: 'short', calc: 'sqrt(6*6 + 8*8)', q: 'Đáy hộp hình chữ nhật 6 cm × 8 cm. Đường chéo đáy dài bao nhiêu?', unit: 'cm', answer: '10', explain: '√100.' }
    ]
  });
})();
