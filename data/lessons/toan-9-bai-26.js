/* Toán 9 – Bài 26. Xác suất của biến cố liên quan tới phép thử. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-9/bai-26', {
    objectives: [
      'Nhận biết biến cố liên quan tới phép thử và kết quả thuận lợi cho biến cố.',
      'Tính được xác suất của biến cố bằng công thức P(A) = n(A) : n(Ω) khi các kết quả đồng khả năng.',
      'Tính xác suất trong các mô hình gieo xúc xắc, gieo đồng xu, rút thẻ, lấy bi.',
      'Vận dụng xác suất để giải thích một số tình huống thực tế.'
    ],
    intro: 'Gieo hai con xúc xắc, khả năng tổng số chấm bằng 7 là bao nhiêu? Đếm các kết quả thuận lợi trên bảng 36 ô là trả lời được.',
    steps: [
      { title: 'Biến cố và kết quả thuận lợi', html: `<p>Một <b>biến cố</b> A liên quan tới phép thử là một sự kiện mà việc xảy ra hay không phụ thuộc vào kết quả của phép thử.</p><p>Kết quả làm cho A xảy ra gọi là <b>kết quả thuận lợi</b> cho A. Ví dụ: gieo xúc xắc, A: “số chấm chẵn” có 3 kết quả thuận lợi 2, 4, 6.</p>` },
      { title: 'Công thức xác suất', html: `<p>Nếu các kết quả của phép thử là <b>đồng khả năng</b> thì:</p><p style="text-align:center"><b>P(A) = {{n(A)|n(Ω)}}</b></p><p>trong đó n(A) là số kết quả thuận lợi cho A, n(Ω) là số phần tử của không gian mẫu. Luôn có 0 ≤ P(A) ≤ 1.</p>` },
      { title: 'Ví dụ với hai xúc xắc', html: `<p>Biến cố B: “tổng số chấm bằng 7”. Các ô tô màu là kết quả thuận lợi.</p>`,
        svg: S.outcomeGrid({ rows: [1, 2, 3, 4, 5, 6], cols: [1, 2, 3, 4, 5, 6], rowName: 'Xanh', colName: 'Xúc xắc đỏ', cell: function (r, c) { return String(r + c); }, mark: function (r, c) { return r + c === 7; }, cw: 40 }), caption: 'Mỗi ô ghi tổng số chấm; có 6 ô tổng bằng 7 nên P(B) = 6/36 = 1/6.' },
      { title: 'Ví dụ với sơ đồ cây', html: `<p>Gieo đồng xu ba lần. C: “có đúng hai lần ngửa”.</p>`,
        svg: S.probTree({ levels: [['S', 'N'], ['S', 'N'], ['S', 'N']], names: ['Lần 1', 'Lần 2', 'Lần 3'], dx: 90, dy: 24, mark: function (p) { return p.filter(function (x) { return x === 'N'; }).length === 2; } }), caption: 'Có 3 kết quả thuận lợi (tô đỏ) trong 8 kết quả: P(C) = 3/8.' },
      { title: 'Các bước tính xác suất', html: `<ol><li>Mô tả không gian mẫu, đếm n(Ω); kiểm tra các kết quả đồng khả năng.</li><li>Liệt kê/đếm các kết quả thuận lợi cho A: n(A).</li><li>Tính P(A) = {{n(A)|n(Ω)}}.</li></ol>` }
    ],
    summary: 'Biến cố A; kết quả thuận lợi. Khi các kết quả đồng khả năng: P(A) = n(A)/n(Ω), 0 ≤ P(A) ≤ 1. Dùng bảng hoặc sơ đồ cây để đếm.',
    examples: [
      { title: 'Rút thẻ', problem: 'Hộp có 20 thẻ đánh số 1 đến 20. Rút ngẫu nhiên một thẻ. Tính xác suất rút được thẻ ghi số chia hết cho 3.', solution: 'Các số 3, 6, 9, 12, 15, 18: n(A) = 6. P(A) = {{6|20}} = {{3|10}}.' },
      { title: 'Lấy bi', problem: 'Hộp có 3 bi đỏ và 2 bi xanh (cùng kích thước). Lấy ngẫu nhiên đồng thời 2 viên. Tính xác suất lấy được 2 bi đỏ.', solution: 'Đánh số Đ1, Đ2, Đ3, X1, X2: có 10 cặp. Cặp 2 bi đỏ: 3. P = {{3|10}}.' },
      { title: 'Hai xúc xắc', problem: 'Gieo hai xúc xắc. Tính xác suất để tổng số chấm lớn hơn 10.', solution: 'Tổng 11: (5,6), (6,5); tổng 12: (6,6) ⇒ 3 kết quả. P = {{3|36}} = {{1|12}}.' }
    ],
    exercises: [
      { question: 'Gieo một xúc xắc. Tính xác suất xuất hiện mặt có số chấm là số nguyên tố.', hints: ['Các số nguyên tố từ 1 đến 6: 2, 3, 5.', 'P = {{3|6}}.'], solution: '{{1|2}}.' },
      { question: 'Gieo đồng xu hai lần. Tính xác suất có ít nhất một lần sấp.', hints: ['Ω = {SS; SN; NS; NN}.', 'Chỉ NN không thỏa.'], solution: '{{3|4}}.' },
      { question: 'Gieo hai xúc xắc. Tính xác suất hai mặt có cùng số chấm.', hints: ['Các cặp (1,1), …, (6,6).', '6 trong 36.'], solution: '{{1|6}}.' }
    ],
    quiz: [
      { type: 'short', calc: '6 / 20', requireSimplest: true, q: 'Rút một thẻ từ 20 thẻ đánh số 1 → 20. Xác suất số chia hết cho 3 (phân số tối giản)?', answer: ['3/10'], explain: '6/20.' },
      { type: 'short', calc: '[1,2,3,4,5,6].flatMap(a => [1,2,3,4,5,6].map(b => a + b)).filter(s => s === 7).length / 36', requireSimplest: true, q: 'Gieo hai xúc xắc. Xác suất tổng số chấm bằng 7 (phân số tối giản)?', answer: ['1/6'], explain: '6/36.' },
      { type: 'short', calc: '[0, 1, 2, 3, 4, 5, 6, 7].filter(k => (k & 1) + (k >> 1 & 1) + (k >> 2 & 1) === 2).length / 8', requireSimplest: true, q: 'Gieo đồng xu 3 lần. Xác suất có đúng 2 lần ngửa (phân số tối giản)?', answer: ['3/8'], explain: 'NNS, NSN, SNN.' },
      { type: 'short', calc: '(3 * 2 / 2) / (5 * 4 / 2)', requireSimplest: true, q: 'Hộp 3 bi đỏ, 2 bi xanh; lấy đồng thời 2 viên. Xác suất được 2 bi đỏ (phân số tối giản)?', answer: ['3/10'], explain: '3 cặp đỏ / 10 cặp.' },
      { type: 'short', calc: '[1,2,3,4,5,6].flatMap(a => [1,2,3,4,5,6].map(b => a + b)).filter(s => s > 10).length / 36', requireSimplest: true, q: 'Gieo hai xúc xắc. Xác suất tổng số chấm lớn hơn 10 (phân số tối giản)?', answer: ['1/12'], explain: '3/36.' },
      { type: 'mcq', q: 'Gieo đồng xu hai lần. Xác suất có ít nhất một lần sấp là:', options: ['1/4', '1/2', '3/4', '1'], answer: 2, explain: 'Chỉ NN không thỏa.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Xác suất của một biến cố có thể bằng 1,2.', answer: false, explain: '0 ≤ P(A) ≤ 1.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Gieo một xúc xắc, xác suất xuất hiện mặt có số chấm nguyên tố bằng 1/2.', answer: true, explain: '2, 3, 5: 3/6.' }
    ]
  });
})();
