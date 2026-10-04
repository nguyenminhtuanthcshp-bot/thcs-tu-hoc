/* Toán 8 – Bài tập cuối chương VII. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-8/c7-on-tap', {
    objectives: [
      'Hệ thống hoá phương trình bậc nhất một ẩn và cách giải bài toán bằng cách lập phương trình.',
      'Hệ thống hoá khái niệm hàm số, hàm số bậc nhất, đồ thị và hệ số góc.',
      'Vận dụng tổng hợp phương trình và hàm số bậc nhất vào bài toán thực tiễn.'
    ],
    intro: 'Chương VII nối hai mảng: phương trình (tìm số chưa biết) và hàm số (mô tả sự phụ thuộc). Thực ra chúng gắn bó mật thiết: nghiệm của ax + b = 0 chính là hoành độ giao điểm của đồ thị y = ax + b với trục Ox.',
    steps: [
      { title: 'Sơ đồ chương VII', html: `<p>Hai mảng lớn của chương:</p>`, svg: S.mindmap({ center: 'Chương VII', branches: [
        { title: 'Phương trình', items: ['ax + b = 0 (a ≠ 0)', 'Chuyển vế, nhân chia', 'Lập phương trình'] },
        { title: 'Hàm số', items: ['Mỗi x một y', 'f(a)', 'Đồ thị (x; f(x))'] },
        { title: 'Hàm bậc nhất', items: ['y = ax + b', 'Đồ thị: đường thẳng'] },
        { title: 'Hệ số góc', items: ['a > 0 góc nhọn', 'Song song, cắt nhau'] } ] }), caption: 'Sơ đồ tư duy chương VII.' },
      { title: 'Phương trình và đồ thị', html: `<p>Nghiệm của phương trình 2x − 4 = 0 là x = 2 – đúng bằng hoành độ giao điểm của đường thẳng y = 2x − 4 với trục Ox.</p>`,
        svg: S.plane({ x: [-2, 4], y: [-4, 3], u: 30, lines: [{ a: 2, b: -4, label: 'y = 2x − 4', color: C.blue, at: 0.85 }], pts: [{ x: 2, y: 0, label: 'x = 2', color: C.red, dx: 8, dy: 18 }] }), caption: 'Nghiệm của 2x − 4 = 0 là giao điểm với trục hoành.' },
      { title: 'Bẫy thường gặp', html: `<ul><li>Chuyển vế quên đổi dấu.</li><li>Khử mẫu quên nhân hạng tử không có mẫu.</li><li>Quên đối chiếu điều kiện của ẩn.</li><li>Nhầm hệ số góc khi hàm số viết dạng y = b + ax.</li></ul>` },
      { title: 'Mô hình hoá thực tế', html: `<p>Nhiều bài toán thực tế có thể giải bằng cả hai cách: lập phương trình hoặc vẽ đồ thị hai hàm số rồi tìm giao điểm.</p>` }
    ],
    summary: 'ax + b = 0 ⇔ x = −b/a; nghiệm là hoành độ giao điểm của y = ax + b với Ox. Hàm bậc nhất y = ax + b có đồ thị là đường thẳng với hệ số góc a.',
    examples: [
      { title: 'Phương trình', problem: 'Giải {{3x − 1|4}} − {{x + 2|3}} = {{x|6}}.', solution: 'Nhân 12: 3(3x − 1) − 4(x + 2) = 2x ⇔ 5x − 11 = 2x ⇔ x = {{11|3}}.' },
      { title: 'Hàm số', problem: 'Cho hàm số y = (m + 2)x − 3. Tìm m để đồ thị đi qua A(1; 2), rồi tìm giao điểm của đồ thị với trục hoành.', solution: '2 = m + 2 − 3 ⇒ m = 3. Hàm số y = 5x − 3 cắt Ox tại ({{3|5}}; 0).' },
      { title: 'Thực tế', problem: 'Một vòi nước chảy vào bể rỗng, mỗi giờ được 150 lít. Một bể khác có sẵn 600 lít, mỗi giờ bơm ra 50 lít. Sau bao lâu hai bể có lượng nước bằng nhau?', solution: '150x = 600 − 50x ⇔ x = 3 giờ (khi đó mỗi bể có 450 lít).' }
    ],
    exercises: [
      { question: 'Giải phương trình 2(x − 3) + 5 = 3x − 4.', hints: ['2x − 6 + 5 = 3x − 4.', '−x = −3.'], solution: 'x = 3.' },
      { question: 'Vẽ đồ thị y = −2x + 2 (nêu hai điểm) và tính diện tích tam giác tạo bởi đồ thị với hai trục.', hints: ['Giao Oy: (0; 2); giao Ox: (1; 0).', 'S = {{1|2}} · 2 · 1.'], solution: 'Qua (0; 2) và (1; 0); diện tích bằng 1.' },
      { question: 'Một hình chữ nhật có chu vi 34 m, chiều dài hơn chiều rộng 7 m. Tính diện tích.', hints: ['Nửa chu vi 17 m: x + x + 7 = 17.', 'x = 5.'], solution: 'Rộng 5 m, dài 12 m, diện tích 60 m<sup>2</sup>.' }
    ],
    quiz: [
      { type: 'short', requireSimplest: true, calc: '11 / 3', q: 'Giải {{3x − 1|4}} − {{x + 2|3}} = {{x|6}} (nghiệm dạng a/b tối giản).', answer: ['11/3'], answerText: '11/3', explain: '5x − 11 = 2x.' },
      { type: 'short', calc: '2 + 3 - 2', q: 'Tìm m để đồ thị y = (m + 2)x − 3 đi qua A(1; 2).', answer: '3', explain: '2 = m − 1.' },
      { type: 'short', calc: '600 / 200', q: 'Bể I rỗng, mỗi giờ thêm 150 lít; bể II có 600 lít, mỗi giờ bớt 50 lít. Sau bao nhiêu giờ hai bể bằng nhau?', unit: 'giờ', answer: '3', explain: '200x = 600.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nghiệm của phương trình 2x − 4 = 0 là hoành độ giao điểm của đường thẳng y = 2x − 4 với trục Ox.', answer: true, explain: 'y = 0 ⇔ 2x − 4 = 0.' },
      { type: 'mcq', q: 'Hệ số góc của đường thẳng y = 5 − 3x là:', options: ['5', '−3', '3', '−5'], answer: 1, explain: 'Viết y = −3x + 5.' },
      { type: 'short', calc: '0.5 * 2 * 1', q: 'Diện tích tam giác tạo bởi y = −2x + 2 với hai trục toạ độ là bao nhiêu?', answer: '1', explain: '{{1|2}} · 2 · 1.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Phương trình 0x = 5 có nghiệm x = 0.', answer: false, explain: 'Vô nghiệm.' },
      { type: 'short', calc: '5 * 12', q: 'Hình chữ nhật có chu vi 34 m, dài hơn rộng 7 m. Diện tích là bao nhiêu m²?', unit: 'm²', answer: '60', explain: 'Rộng 5, dài 12.' }
    ]
  });
})();
