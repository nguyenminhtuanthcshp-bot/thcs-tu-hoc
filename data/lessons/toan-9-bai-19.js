/* Toán 9 – Bài 19. Phương trình bậc hai một ẩn. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-9/bai-19', {
    objectives: [
      'Nhận biết được phương trình bậc hai một ẩn ax² + bx + c = 0 (a ≠ 0) và xác định các hệ số a, b, c.',
      'Giải được phương trình bậc hai khuyết b hoặc khuyết c, và bằng cách đưa về bình phương.',
      'Giải được phương trình bậc hai bằng công thức nghiệm (biệt thức Δ) và công thức nghiệm thu gọn (Δ\').',
      'Sử dụng máy tính cầm tay để tìm nghiệm của phương trình bậc hai.'
    ],
    intro: 'Một mảnh vườn hình chữ nhật có chiều dài hơn chiều rộng 3 m và diện tích 40 m². Gọi chiều rộng là x thì x(x + 3) = 40, tức x² + 3x − 40 = 0 – một phương trình bậc hai.',
    steps: [
      { title: 'Định nghĩa', html: `<p>Phương trình bậc hai một ẩn có dạng <b>ax² + bx + c = 0</b>, trong đó x là ẩn, a, b, c là các số cho trước và <b>a ≠ 0</b>.</p><p>Ví dụ: 2x² − 5x + 1 = 0 (a = 2, b = −5, c = 1); x² − 9 = 0 (b = 0); 3x² + 6x = 0 (c = 0).</p>` },
      { title: 'Trường hợp đặc biệt', html: `<ul><li><b>Khuyết c</b>: ax² + bx = 0 ⇔ x(ax + b) = 0 ⇔ x = 0 hoặc x = −{{b|a}}.</li><li><b>Khuyết b</b>: ax² + c = 0 ⇔ x² = −{{c|a}}. Có nghiệm khi −{{c|a}} ≥ 0.</li><li><b>Đưa về bình phương</b>: x² − 4x + 1 = 0 ⇔ (x − 2)² = 3 ⇔ x = 2 ± √3.</li></ul>` },
      { title: 'Công thức nghiệm', html: `<p>Với ax² + bx + c = 0 (a ≠ 0), đặt <b>Δ = b² − 4ac</b>.</p>`,
        svg: S.flow({ items: [{ title: 'Tính Δ', text: 'Δ = b² − 4ac' }, { title: 'Δ > 0', text: 'x = (−b ± √Δ) : 2a' }, { title: 'Δ = 0', text: 'nghiệm kép −b : 2a' }, { title: 'Δ < 0', text: 'vô nghiệm' }], w: 660, size: 14 }), caption: 'Quy trình giải phương trình bậc hai bằng công thức nghiệm.' },
      { title: 'Công thức nghiệm thu gọn', html: `<p>Khi b = 2b' (b chẵn), đặt <b>Δ' = b'² − ac</b>:</p><ul><li>Δ' &gt; 0: x<sub>1,2</sub> = {{−b' ± √Δ'|a}}.</li><li>Δ' = 0: nghiệm kép x = −{{b'|a}}.</li><li>Δ' &lt; 0: vô nghiệm.</li></ul><p>Ví dụ: x² − 6x + 5 = 0 có b' = −3, Δ' = 9 − 5 = 4 ⇒ x = 3 ± 2, tức x = 5 hoặc x = 1.</p>` },
      { title: 'Nhận xét và máy tính', html: `<p>Nếu a và c <b>trái dấu</b> (ac &lt; 0) thì Δ = b² − 4ac &gt; 0 nên phương trình luôn có hai nghiệm phân biệt.</p><p>Trên máy tính cầm tay, chọn chế độ giải phương trình bậc hai (EQN / Polynomial, bậc 2), nhập a, b, c để đọc nghiệm – dùng để kiểm tra kết quả.</p>`,
        svg: S.plane({ x: [-2, 6], y: [-4, 4], u: 28, curves: [{ f: function (x) { return x * x - 4 * x + 1 - 0; }, label: 'y = x² − 4x + 1', color: C.blue, lx: 4.2, dx: -150, dy: -8 }], pts: [{ x: 2 - Math.sqrt(3), y: 0, color: C.red, label: '2 − √3', dx: -62, dy: 34 }, { x: 2 + Math.sqrt(3), y: 0, color: C.red, label: '2 + √3', dx: 6, dy: 34 }] }), caption: 'Nghiệm của x² − 4x + 1 = 0 là hoành độ giao điểm của đồ thị với trục Ox.' }
    ],
    summary: 'ax² + bx + c = 0 (a ≠ 0). Δ = b² − 4ac: Δ > 0 hai nghiệm (−b ± √Δ)/(2a); Δ = 0 nghiệm kép −b/(2a); Δ < 0 vô nghiệm. Khi b = 2b\', dùng Δ\' = b\'² − ac. ac < 0 thì luôn có hai nghiệm phân biệt.',
    examples: [
      { title: 'Khuyết hệ số', problem: 'Giải: a) 3x² − 12x = 0; b) 2x² − 50 = 0.', solution: 'a) 3x(x − 4) = 0 ⇒ x = 0 hoặc x = 4. b) x² = 25 ⇒ x = ±5.' },
      { title: 'Dùng Δ', problem: 'Giải 2x² − 7x + 3 = 0.', solution: 'Δ = 49 − 24 = 25, √Δ = 5. x<sub>1</sub> = {{7 + 5|4}} = 3; x<sub>2</sub> = {{7 − 5|4}} = {{1|2}}.' },
      { title: 'Bài toán mảnh vườn', problem: 'Mảnh vườn hình chữ nhật dài hơn rộng 3 m, diện tích 40 m². Tính chiều rộng.', solution: 'x² + 3x − 40 = 0, Δ = 9 + 160 = 169 ⇒ x = {{−3 + 13|2}} = 5 (nhận) hoặc x = −8 (loại). Chiều rộng 5 m.' }
    ],
    exercises: [
      { question: 'Giải phương trình x² + 8x + 15 = 0 bằng công thức nghiệm thu gọn.', hints: ['b\' = 4, Δ\' = 16 − 15 = 1.', 'x = −4 ± 1.'], solution: 'x = −3 hoặc x = −5.' },
      { question: 'Giải 9x² − 6x + 1 = 0.', hints: ['Δ\' = 9 − 9 = 0.', 'Nghiệm kép x = −b\'/a = {{3|9}}.'], solution: 'Nghiệm kép x = {{1|3}}.' },
      { question: 'Không giải, cho biết phương trình −3x² + 5x + 7 = 0 có bao nhiêu nghiệm.', hints: ['Xét dấu của a và c.', 'ac = −21 &lt; 0.'], solution: 'a, c trái dấu nên có hai nghiệm phân biệt.' }
    ],
    quiz: [
      { type: 'short', calc: '(-7) ** 2 - 4 * 2 * 3', q: 'Tính Δ của phương trình 2x² − 7x + 3 = 0.', answer: '25', explain: '49 − 24.' },
      { type: 'short', calc: '(-3 + Math.sqrt(9 + 160)) / 2', q: 'Nghiệm dương của x² + 3x − 40 = 0 là bao nhiêu?', answer: '5', explain: 'Δ = 169.' },
      { type: 'short', calc: '3 / 9', requireSimplest: true, q: '9x² − 6x + 1 = 0 có nghiệm kép x = ? (phân số tối giản a/b)', answer: ['1/3'], explain: 'x = 3/9 = 1/3.' },
      { type: 'short', calc: '4 ** 2 - 1 * 15', q: 'Tính Δ\' của phương trình x² + 8x + 15 = 0.', answer: '1', explain: 'b\' = 4: 16 − 15.' },
      { type: 'short', calc: 'Math.sqrt(50 / 2)', q: 'Nghiệm dương của 2x² − 50 = 0 là bao nhiêu?', answer: '5', explain: 'x² = 25.' },
      { type: 'mcq', q: 'Phương trình nào là phương trình bậc hai một ẩn?', options: ['0x² + 2x − 1 = 0', '3x² − √2 x = 0', 'x³ − x = 0', '2x + 5 = 0'], answer: 1, explain: 'a = 3 ≠ 0, bậc 2.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Phương trình x² + x + 1 = 0 vô nghiệm.', answer: true, explain: 'Δ = 1 − 4 = −3 &lt; 0.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nếu a và c cùng dấu thì phương trình ax² + bx + c = 0 vô nghiệm.', answer: false, explain: 'Chẳng hạn x² − 5x + 6 = 0 có hai nghiệm 2 và 3.' }
    ]
  });
})();
