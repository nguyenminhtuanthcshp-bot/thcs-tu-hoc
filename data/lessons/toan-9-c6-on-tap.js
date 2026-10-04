/* Toán 9 – Bài tập cuối chương VI. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-9/c6-on-tap', {
    objectives: [
      'Hệ thống hoá kiến thức về hàm số y = ax² và phương trình bậc hai một ẩn.',
      'Vận dụng công thức nghiệm, định lí Viète để giải và biện luận phương trình bậc hai.',
      'Giải bài toán thực tế và bài toán về giao điểm parabol – đường thẳng.'
    ],
    intro: 'Tổng kết chương VI – một trong những chương trọng tâm của kì thi vào lớp 10.',
    steps: [
      { title: 'Sơ đồ chương', html: `<p>Các mạch kiến thức chính:</p>`,
        svg: S.mindmap({ center: 'y = ax² và PT bậc hai', branches: [
          { title: 'Hàm số y = ax²', items: ['Parabol đỉnh O', 'a > 0 hướng lên', 'a < 0 hướng xuống'] },
          { title: 'Công thức nghiệm', items: ['Δ = b² − 4ac', 'Δ\' = b\'² − ac'] },
          { title: 'Viète', items: ['S = −b/a, P = c/a', 'Nhẩm nghiệm', 'x² − Sx + P = 0'] },
          { title: 'Ứng dụng', items: ['Lập phương trình', 'Giao điểm parabol – đường thẳng'] }
        ] }) },
      { title: 'Parabol và đường thẳng', html: `<p>Số giao điểm của y = ax² và y = mx + n bằng số nghiệm của ax² − mx − n = 0: Δ &gt; 0 cắt tại hai điểm, Δ = 0 tiếp xúc, Δ &lt; 0 không giao nhau.</p>`,
        svg: S.plane({ x: [-3, 3], y: [-2, 5], u: 32, curves: [{ f: function (x) { return x * x; }, label: 'y = x²', color: C.blue, lx: -2.1, dx: -56, dy: 6 }], lines: [{ a: 2, b: -1, label: 'y = 2x − 1', color: C.red, at: 0.85, dx: -96, dy: -2 }], pts: [{ x: 1, y: 1, label: '(1; 1)', dx: 10, dy: 16 }] }), caption: 'Đường thẳng y = 2x − 1 tiếp xúc với parabol y = x² tại (1; 1) vì x² − 2x + 1 = 0 có nghiệm kép.' },
      { title: 'Chọn phương pháp', html: `<table class="tbl"><tr><th>Dấu hiệu</th><th>Cách làm</th></tr><tr><td>c = 0 hoặc b = 0</td><td>Đặt nhân tử / đưa về x² = k</td></tr><tr><td>a + b + c = 0 hoặc a − b + c = 0</td><td>Nhẩm nghiệm</td></tr><tr><td>b chẵn</td><td>Δ'</td></tr><tr><td>Các trường hợp khác</td><td>Δ</td></tr></table>` },
      { title: 'Sai lầm thường gặp', html: `<ul><li>Dùng Viète khi phương trình vô nghiệm.</li><li>Nhầm dấu: S = −{{b|a}} (có dấu trừ).</li><li>Quên loại nghiệm không thỏa điều kiện trong bài toán thực tế.</li><li>Đặt t = x² nhưng quên điều kiện t ≥ 0.</li></ul>` }
    ],
    summary: 'Parabol y = ax²; công thức nghiệm Δ, Δ\'; Viète S = −b/a, P = c/a; phương trình hoành độ giao điểm; lập phương trình và đối chiếu điều kiện.',
    examples: [
      { title: 'Tổng hợp', problem: 'Cho parabol y = −x² và đường thẳng y = 2x − 3. Tìm toạ độ giao điểm.', solution: '−x² = 2x − 3 ⇔ x² + 2x − 3 = 0 ⇔ x = 1 hoặc x = −3. Giao điểm (1; −1), (−3; −9).' },
      { title: 'Tham số', problem: 'Tìm m để x² − 4x + m = 0 có hai nghiệm thỏa x<sub>1</sub> = 3x<sub>2</sub>.', solution: 'S = 4 ⇒ 4x<sub>2</sub> = 4 ⇒ x<sub>2</sub> = 1, x<sub>1</sub> = 3 ⇒ m = P = 3 (Δ\' = 4 − 3 &gt; 0).' },
      { title: 'Thực tế', problem: 'Một mảnh đất hình vuông, nếu tăng mỗi cạnh 3 m thì diện tích thành 121 m². Tính cạnh ban đầu.', solution: '(x + 3)² = 121 ⇒ x + 3 = 11 ⇒ x = 8 m.' }
    ],
    exercises: [
      { question: 'Tìm a để parabol y = ax² đi qua giao điểm của hai đường thẳng y = x + 1 và y = −x + 5.', hints: ['Giao điểm là (2; 3).', 'a = {{3|4}}.'], solution: 'a = {{3|4}}.' },
      { question: 'Giải 2x² + 5x − 7 = 0 và tính tổng lập phương hai nghiệm.', hints: ['a + b + c = 0 ⇒ x = 1; x = −{{7|2}}.', '1 − {{343|8}}.'], solution: 'x<sub>1</sub>³ + x<sub>2</sub>³ = −{{335|8}}.' },
      { question: 'Tìm m để đường thẳng y = 2x + m tiếp xúc với parabol y = x².', hints: ['x² − 2x − m = 0 có nghiệm kép.', 'Δ\' = 1 + m = 0.'], solution: 'm = −1.' }
    ],
    quiz: [
      { type: 'short', calc: '(-2 - Math.sqrt(4 + 12)) / 2', q: 'Parabol y = −x² cắt đường thẳng y = 2x − 3 tại hai điểm. Hoành độ nhỏ hơn là?', answer: '-3', explain: 'x² + 2x − 3 = 0.' },
      { type: 'short', calc: '3 * (4 / 4) ** 2', q: 'Tìm m để x² − 4x + m = 0 có hai nghiệm thỏa x₁ = 3x₂.', answer: '3', explain: 'x₂ = 1, x₁ = 3.' },
      { type: 'short', calc: 'Math.sqrt(121) - 3', q: 'Tăng mỗi cạnh hình vuông thêm 3 m thì diện tích là 121 m². Cạnh ban đầu (m)?', unit: 'm', answer: '8', explain: 'x + 3 = 11.' },
      { type: 'short', calc: '3 / 2 ** 2', requireSimplest: true, q: 'Parabol y = ax² đi qua giao điểm của y = x + 1 và y = −x + 5. Tìm a (phân số tối giản).', answer: ['3/4'], explain: 'Giao điểm (2; 3).' },
      { type: 'short', calc: '-((-2 / 2) ** 2)', q: 'Tìm m để y = 2x + m tiếp xúc với y = x².', answer: '-1', explain: 'Δ\' = 1 + m = 0.' },
      { type: 'mcq', q: 'Phương trình 2x² + 5x − 7 = 0 có nghiệm:', options: ['1 và 7/2', '1 và −7/2', '−1 và 7/2', '−1 và −7/2'], answer: 1, explain: 'a + b + c = 0.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Đường thẳng y = 2x − 1 tiếp xúc với parabol y = x².', answer: true, explain: 'x² − 2x + 1 = 0 có nghiệm kép.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tổng hai nghiệm của 3x² − 6x − 1 = 0 bằng −2.', answer: false, explain: 'S = 6/3 = 2.' }
    ]
  });
})();
