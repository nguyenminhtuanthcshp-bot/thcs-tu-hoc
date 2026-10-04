/* Toán 9 – Bài tập cuối chương VIII. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-9/c8-on-tap', {
    objectives: [
      'Hệ thống hoá: phép thử ngẫu nhiên, không gian mẫu, biến cố, xác suất.',
      'Tính xác suất trong các mô hình đơn giản bằng liệt kê, sơ đồ cây, bảng.',
      'Vận dụng xác suất vào các tình huống thực tế (trò chơi, bốc thăm, kiểm tra chất lượng).'
    ],
    intro: 'Ôn tập chương VIII – xác suất của biến cố trong một số mô hình xác suất đơn giản.',
    steps: [
      { title: 'Sơ đồ chương', html: `<p>Các nội dung chính:</p>`,
        svg: S.mindmap({ center: 'Xác suất', branches: [
          { title: 'Phép thử', items: ['Biết các kết quả có thể', 'Không biết trước kết quả'] },
          { title: 'Không gian mẫu Ω', items: ['Liệt kê', 'Sơ đồ cây', 'Bảng'] },
          { title: 'Biến cố A', items: ['Kết quả thuận lợi', 'n(A)'] },
          { title: 'Xác suất', items: ['P(A) = n(A)/n(Ω)', '0 ≤ P(A) ≤ 1', 'Đồng khả năng'] }
        ] }) },
      { title: 'Ví dụ tổng hợp', html: `<p>Một vòng quay chia 4 ô bằng nhau ghi 1, 2, 3, 4. Quay hai lần. A: “tổng hai số là số chẵn”.</p>`,
        svg: S.outcomeGrid({ rows: [1, 2, 3, 4], cols: [1, 2, 3, 4], rowName: 'Lần 1', colName: 'Lần 2', cell: function (r, c) { return String(r + c); }, mark: function (r, c) { return (r + c) % 2 === 0; }, cw: 44 }), caption: 'Có 8 ô tổng chẵn trong 16 ô: P(A) = 1/2.' },
      { title: 'Ứng dụng: trò chơi công bằng', html: `<p>Trò chơi giữa hai bạn là <b>công bằng</b> nếu xác suất thắng của hai bạn bằng nhau. Ví dụ gieo hai đồng xu: An thắng nếu hai mặt giống nhau (P = {{1|2}}), Bình thắng nếu khác nhau (P = {{1|2}}) ⇒ công bằng.</p>` },
      { title: 'Sai lầm thường gặp', html: `<ul><li>Quên thứ tự: coi SN và NS là một kết quả.</li><li>Dùng công thức khi các kết quả không đồng khả năng.</li><li>Nhầm giữa lấy có hoàn lại và không hoàn lại.</li></ul>` }
    ],
    summary: 'Phép thử – không gian mẫu – biến cố – xác suất P(A) = n(A)/n(Ω) với kết quả đồng khả năng. Liệt kê bằng sơ đồ cây hoặc bảng; kiểm tra thứ tự, hoàn lại.',
    examples: [
      { title: 'Bốc thăm', problem: 'Lớp có 15 nam và 20 nữ. Chọn ngẫu nhiên 1 bạn làm lớp trưởng. Tính xác suất chọn được bạn nữ.', solution: 'P = {{20|35}} = {{4|7}}.' },
      { title: 'Kiểm tra sản phẩm', problem: 'Một lô 50 sản phẩm có 4 sản phẩm lỗi. Lấy ngẫu nhiên 1 sản phẩm. Tính xác suất lấy được sản phẩm tốt.', solution: 'P = {{46|50}} = {{23|25}} = 92%.' },
      { title: 'Vòng quay', problem: 'Quay hai lần vòng quay 4 ô (1 → 4). Tính xác suất tích hai số bằng 4.', solution: 'Các cặp (1,4), (4,1), (2,2): 3 kết quả ⇒ P = {{3|16}}.' }
    ],
    exercises: [
      { question: 'Gieo xúc xắc hai lần. Tính xác suất số chấm lần hai lớn hơn lần một.', hints: ['Loại 6 cặp bằng nhau, còn 30 cặp chia đều.', '15 cặp lần hai lớn hơn.'], solution: '{{15|36}} = {{5|12}}.' },
      { question: 'Hộp có 2 bi đỏ, 1 bi xanh. Lấy lần lượt 2 bi không hoàn lại. Tính xác suất lần hai lấy được bi xanh.', hints: ['Đánh số Đ1, Đ2, X: Ω có 6 kết quả.', 'Kết quả lần hai là X: Đ1X, Đ2X.'], solution: '{{2|6}} = {{1|3}}.' },
      { question: 'An và Bình chơi gieo một xúc xắc: An thắng nếu ra số lớn hơn 4, ngược lại Bình thắng. Trò chơi có công bằng không?', hints: ['An thắng khi ra 5, 6.', 'P(An) = {{2|6}}.'], solution: 'P(An) = {{1|3}}, P(Bình) = {{2|3}} ⇒ không công bằng.' }
    ],
    quiz: [
      { type: 'short', calc: '20 / (15 + 20)', requireSimplest: true, q: 'Lớp 15 nam, 20 nữ. Xác suất chọn được bạn nữ (phân số tối giản)?', answer: ['4/7'], explain: '20/35.' },
      { type: 'short', calc: '(50 - 4) / 50 * 100', q: 'Lô 50 sản phẩm có 4 lỗi. Xác suất lấy được sản phẩm tốt (%)?', unit: '%', answer: '92', explain: '46/50.' },
      { type: 'short', calc: '[1,2,3,4].flatMap(a => [1,2,3,4].map(b => a * b)).filter(p => p === 4).length / 16', requireSimplest: true, q: 'Quay hai lần vòng quay 4 ô (1 → 4). Xác suất tích bằng 4 (phân số tối giản)?', answer: ['3/16'], explain: '(1,4), (4,1), (2,2).' },
      { type: 'short', calc: '[1,2,3,4,5,6].flatMap(a => [1,2,3,4,5,6].filter(b => b > a)).length / 36', requireSimplest: true, q: 'Gieo xúc xắc hai lần. Xác suất lần hai lớn hơn lần một (phân số tối giản)?', answer: ['5/12'], explain: '15/36.' },
      { type: 'short', calc: '[1,2,3,4].flatMap(a => [1,2,3,4].map(b => a + b)).filter(s => s % 2 === 0).length / 16', requireSimplest: true, q: 'Quay hai lần vòng quay 4 ô. Xác suất tổng chẵn (phân số tối giản)?', answer: ['1/2'], explain: '8/16.' },
      { type: 'mcq', q: 'Trò chơi gieo xúc xắc: An thắng nếu ra số lớn hơn 4. Xác suất An thắng là:', options: ['1/2', '1/3', '2/3', '1/6'], answer: 1, explain: '2/6.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Gieo hai đồng xu, An thắng khi hai mặt giống nhau, Bình thắng khi khác nhau – đây là trò chơi công bằng.', answer: true, explain: 'Cùng xác suất 1/2.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Lấy lần lượt không hoàn lại 2 bi từ hộp 2 đỏ, 1 xanh thì xác suất lần hai được bi xanh là 1/2.', answer: false, explain: 'Bằng 2/6 = 1/3.' }
    ]
  });
})();
