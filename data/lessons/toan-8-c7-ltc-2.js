/* Toán 8 – Luyện tập chung (sau Bài 29). Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-8/c7-ltc-2', {
    objectives: [
      'Tính giá trị hàm số, xác định điểm thuộc đồ thị.',
      'Vẽ đồ thị hàm số bậc nhất, tìm giao điểm với các trục và giao điểm của hai đường thẳng.',
      'Vận dụng hệ số góc để xét vị trí tương đối và tìm tham số.'
    ],
    intro: 'Buổi luyện tập tổng hợp ba bài về hàm số: khái niệm, đồ thị hàm số bậc nhất và hệ số góc.',
    steps: [
      { title: 'Các dạng bài chính', html: `<ol><li>Tính f(a); kiểm tra điểm thuộc đồ thị.</li><li>Vẽ đồ thị qua hai điểm.</li><li>Tìm hàm số khi biết điều kiện (đi qua điểm, song song, hệ số góc).</li><li>Tìm giao điểm, tính diện tích tam giác tạo bởi đường thẳng và hai trục.</li></ol>` },
      { title: 'Tam giác tạo bởi đường thẳng và hai trục', html: `<p>Đường thẳng y = −{{1|2}}x + 2 cắt Oy tại A(0; 2), cắt Ox tại B(4; 0). Tam giác OAB vuông tại O có diện tích {{1|2}} · 2 · 4 = 4 (đơn vị diện tích).</p>`,
        svg: S.plane({ x: [-1, 5], y: [-1, 3], u: 40, lines: [{ a: -0.5, b: 2, label: 'y = −0,5x + 2', color: C.blue, at: 0.5, dy: -12 }], pts: [{ x: 0, y: 2, label: 'A(0; 2)', color: C.red, dx: 8, dy: -8 }, { x: 4, y: 0, label: 'B(4; 0)', color: C.red, dx: -20, dy: -10 }] }), caption: 'ΔOAB có OA = 2, OB = 4.' },
      { title: 'Tìm hàm số', html: `<p>Hàm số y = ax + b có hai hệ số chưa biết nên cần hai điều kiện. Ví dụ: đồ thị song song với y = 3x (⇒ a = 3) và đi qua (1; 5) (⇒ b = 2).</p>` },
      { title: 'Bài toán thực tế', html: `<p>Hãng A: phí thuê bao 50 nghìn đồng/tháng, mỗi GB dữ liệu 10 nghìn đồng: y = 10x + 50. Hãng B: không thuê bao, 15 nghìn đồng/GB: y = 15x. Hai hãng bằng tiền khi 10x + 50 = 15x ⇔ x = 10 GB. Dùng hơn 10 GB thì chọn hãng A.</p>` }
    ],
    summary: 'Điểm thuộc đồ thị ⇔ toạ độ thoả công thức. Giao với trục: cho x = 0 hoặc y = 0. Giao hai đường: giải phương trình hoành độ. Song song: cùng a, khác b.',
    examples: [
      { title: 'Tìm hàm số', problem: 'Tìm a, b biết đồ thị y = ax + b song song với y = 3x và đi qua điểm (1; 5).', solution: 'a = 3; 5 = 3 + b ⇒ b = 2. Hàm số y = 3x + 2.' },
      { title: 'Diện tích tam giác', problem: 'Tính diện tích tam giác tạo bởi đường thẳng y = 2x + 4 và hai trục toạ độ.', solution: 'Cắt Oy tại (0; 4), cắt Ox tại (−2; 0). S = {{1|2}} · 4 · 2 = 4.' },
      { title: 'So sánh hai hãng', problem: 'Với hai hãng A (y = 10x + 50) và B (y = 15x) ở trên, dùng 6 GB thì chọn hãng nào?', solution: 'A: 110 nghìn; B: 90 nghìn. Chọn hãng B.' }
    ],
    exercises: [
      { question: 'Cho f(x) = {{1|2}}x − 3. Tìm x để f(x) = 1.', hints: ['{{1|2}}x − 3 = 1.', '{{1|2}}x = 4.'], solution: 'x = 8.' },
      { question: 'Tìm m để đường thẳng y = mx + 2 đi qua điểm (2; −4).', hints: ['−4 = 2m + 2.', '2m = −6.'], solution: 'm = −3.' },
      { question: 'Tìm giao điểm của y = 3x − 4 và y = x + 2.', hints: ['3x − 4 = x + 2.', 'x = 3.'], solution: '(3; 5).' }
    ],
    quiz: [
      { type: 'short', calc: '(1 + 3) * 2', q: 'Cho f(x) = {{1|2}}x − 3. Tìm x để f(x) = 1.', answer: '8', explain: '{{1|2}}x = 4.' },
      { type: 'short', calc: '(-4 - 2) / 2', q: 'Tìm m để y = mx + 2 đi qua (2; −4).', answer: '-3', answerText: '−3', explain: '2m = −6.' },
      { type: 'short', calc: '0.5 * 4 * 2', q: 'Diện tích tam giác tạo bởi y = 2x + 4 và hai trục toạ độ là bao nhiêu?', answer: '4', explain: '{{1|2}} · 4 · 2.' },
      { type: 'mcq', q: 'Đồ thị y = ax + b song song với y = 3x và đi qua (1; 5) là:', options: ['y = 3x + 5', 'y = 3x + 2', 'y = 5x + 3', 'y = 2x + 3'], answer: 1, explain: 'a = 3, b = 2.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Đường thẳng y = −0,5x + 2 cắt trục hoành tại điểm (4; 0).', answer: true, explain: '−0,5x + 2 = 0 ⇔ x = 4.' },
      { type: 'short', calc: '50 / 5', q: 'Hãng A: y = 10x + 50; hãng B: y = 15x (nghìn đồng, x là số GB). Dùng bao nhiêu GB thì hai hãng bằng tiền?', unit: 'GB', answer: '10', explain: '5x = 50.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hai đường thẳng y = 3x − 4 và y = x + 2 song song.', answer: false, explain: 'Hệ số góc khác nhau nên cắt nhau.' },
      { type: 'mcq', q: 'Giao điểm của y = 3x − 4 và y = x + 2 là:', options: ['(3; 5)', '(2; 4)', '(1; 3)', '(−3; −1)'], answer: 0, explain: 'x = 3, y = 5.' }
    ]
  });
})();
