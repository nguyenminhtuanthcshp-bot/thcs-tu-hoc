/* Toán 8 – Bài tập cuối chương I. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-8/c1-on-tap', {
    objectives: [
      'Hệ thống hoá kiến thức về đơn thức, đa thức và các phép tính với đa thức.',
      'Thực hiện phối hợp cộng, trừ, nhân, chia đa thức để rút gọn và tính giá trị biểu thức.',
      'Vận dụng đa thức để biểu thị và giải quyết một số bài toán thực tế về chu vi, diện tích, thể tích.'
    ],
    intro: 'Chương I đã trang bị cho em công cụ tính toán với biểu thức chứa chữ. Bài ôn tập này tổng kết bằng sơ đồ và các bài tập tổng hợp.',
    steps: [
      { title: 'Sơ đồ tư duy chương I', html: `<p>Ôn lại toàn bộ chương theo sơ đồ sau:</p>`, svg: S.mindmap({ center: 'Đa thức', branches: [
        { title: 'Đơn thức', items: ['Hệ số, phần biến', 'Bậc', 'Đồng dạng'] },
        { title: 'Đa thức', items: ['Hạng tử', 'Thu gọn', 'Bậc của đa thức'] },
        { title: 'Cộng, trừ', items: ['Bỏ ngoặc', 'Gộp đồng dạng'] },
        { title: 'Nhân, chia', items: ['Từng hạng tử', 'Chia hết khi…'] } ] }), caption: 'Bốn mảng kiến thức chính của chương I.' },
      { title: 'Những lỗi thường gặp', html: `<ul><li>Tìm bậc khi chưa thu gọn.</li><li>Quên đổi dấu mọi hạng tử khi bỏ ngoặc sau dấu “−”.</li><li>Nhân số mũ thay vì cộng: x<sup>2</sup> · x<sup>3</sup> = x<sup>5</sup> (không phải x<sup>6</sup>).</li><li>Viết A : A = 0 thay vì 1.</li></ul>` },
      { title: 'Chiến lược rút gọn', html: `<ol><li>Thực hiện các phép nhân, chia.</li><li>Bỏ ngoặc cẩn thận về dấu.</li><li>Gộp các hạng tử đồng dạng, sắp xếp theo bậc giảm dần.</li><li>Nếu đề yêu cầu tính giá trị: thay số vào biểu thức <b>đã rút gọn</b>.</li></ol>` },
      { title: 'Đa thức trong thực tế', html: `<p>Đa thức dùng để biểu thị các đại lượng phụ thuộc vào một số chưa biết: chu vi, diện tích, thể tích, số tiền phải trả…</p>
        <p>Ví dụ: một bể nước hình hộp có đáy (x + 1) × x (m) và cao 2 m có thể tích 2x(x + 1) = 2x<sup>2</sup> + 2x (m<sup>3</sup>).</p>` }
    ],
    summary: 'Thu gọn – phép tính – thử lại. Đơn thức: hệ số, phần biến, bậc. Đa thức: cộng trừ theo hạng tử đồng dạng; nhân chia theo từng hạng tử.',
    examples: [
      { title: 'Tổng hợp các phép tính', problem: 'Rút gọn P = (2x − 3)(x + 1) − 2x(x − 2) + (9x<sup>2</sup>y − 3xy) : 3xy.', solution: '(2x − 3)(x + 1) = 2x<sup>2</sup> − x − 3; 2x(x − 2) = 2x<sup>2</sup> − 4x; (9x<sup>2</sup>y − 3xy) : 3xy = 3x − 1.<br>P = 2x<sup>2</sup> − x − 3 − 2x<sup>2</sup> + 4x + 3x − 1 = 6x − 4.' },
      { title: 'Giá trị biểu thức', problem: 'Tính giá trị của P ở ví dụ trên tại x = {{1|2}}.', solution: 'P = 6 · {{1|2}} − 4 = 3 − 4 = −1.' },
      { title: 'Bài toán thể tích', problem: 'Một hộp quà hình hộp chữ nhật có chiều dài (x + 3) cm, chiều rộng x cm, chiều cao 5 cm. Viết đa thức biểu thị thể tích; tính thể tích khi x = 4.', solution: 'V = 5x(x + 3) = 5x<sup>2</sup> + 15x (cm<sup>3</sup>). Khi x = 4: V = 80 + 60 = 140 cm<sup>3</sup>.' }
    ],
    exercises: [
      { question: 'Cho A = 3x<sup>2</sup>y − 2xy + 1, B = x<sup>2</sup>y + xy − 4. Tính A − 2B.', hints: ['2B = 2x<sup>2</sup>y + 2xy − 8.', 'A − 2B = 3x<sup>2</sup>y − 2xy + 1 − 2x<sup>2</sup>y − 2xy + 8.'], solution: 'A − 2B = x<sup>2</sup>y − 4xy + 9.' },
      { question: 'Chứng minh giá trị của (x − 1)(x + 2) − (x + 3)(x − 2) không phụ thuộc vào x.', hints: ['(x − 1)(x + 2) = x<sup>2</sup> + x − 2.', '(x + 3)(x − 2) = x<sup>2</sup> + x − 6.'], solution: 'Hiệu bằng x<sup>2</sup> + x − 2 − x<sup>2</sup> − x + 6 = 4 với mọi x.' },
      { question: 'Một mảnh đất hình chữ nhật dài (2x + 5) m, rộng (x + 2) m. Người ta đào một ao hình vuông cạnh x m ở trong. Viết đa thức biểu thị phần diện tích đất còn lại và tính khi x = 6.', hints: ['Diện tích mảnh đất: (2x + 5)(x + 2) = 2x<sup>2</sup> + 9x + 10.', 'Trừ đi diện tích ao x<sup>2</sup>.'], solution: 'Phần còn lại: x<sup>2</sup> + 9x + 10 (m<sup>2</sup>). Khi x = 6: 36 + 54 + 10 = 100 m<sup>2</sup>.' }
    ],
    quiz: [
      { type: 'mcq', q: 'Đơn thức nào đồng dạng với −4x<sup>2</sup>y?', options: ['4xy<sup>2</sup>', '{{1|3}}x<sup>2</sup>y', '−4x<sup>2</sup>', '−4x<sup>2</sup>yz'], answer: 1, explain: 'Cùng phần biến x<sup>2</sup>y và hệ số khác 0.' },
      { type: 'short', calc: '3 + 2', q: 'Bậc của đa thức x<sup>3</sup>y<sup>2</sup> − 5x<sup>2</sup>y + 7 là bao nhiêu?', answer: '5', explain: 'Hạng tử x<sup>3</sup>y<sup>2</sup> có bậc 5 là cao nhất.' },
      { type: 'mcq', q: '(3x − 2y) − (x − 5y) bằng:', options: ['2x − 7y', '2x + 3y', '2x − 3y', '4x + 3y'], answer: 1, explain: '3x − 2y − x + 5y = 2x + 3y.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: x<sup>3</sup> · x<sup>4</sup> = x<sup>12</sup>.', answer: false, explain: 'Cộng số mũ: x<sup>7</sup>.' },
      { type: 'mcq', q: '(x − 3)(x + 3) bằng:', options: ['x<sup>2</sup> − 9', 'x<sup>2</sup> + 9', 'x<sup>2</sup> − 6x − 9', 'x<sup>2</sup> − 6'], answer: 0, explain: 'x<sup>2</sup> + 3x − 3x − 9 = x<sup>2</sup> − 9.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: (6x<sup>3</sup>y − 3xy) : 3xy = 2x<sup>2</sup> − 1.', answer: true, explain: '6x<sup>3</sup>y : 3xy = 2x<sup>2</sup>; 3xy : 3xy = 1.' },
      { type: 'short', calc: '6 * (1/2) - 4', q: 'Rút gọn P = (2x − 3)(x + 1) − 2x(x − 2) + (9x<sup>2</sup>y − 3xy) : 3xy rồi tính giá trị tại x = {{1|2}}.', answer: '-1', answerText: '−1', explain: 'P = 6x − 4 = 3 − 4 = −1.' },
      { type: 'short', calc: '5 * 4 * (4 + 3)', q: 'Hộp hình hộp chữ nhật dài (x + 3) cm, rộng x cm, cao 5 cm. Tính thể tích (cm³) khi x = 4.', unit: 'cm³', answer: '140', explain: 'V = 5 · 4 · 7 = 140 cm³.' }
    ]
  });
})();
