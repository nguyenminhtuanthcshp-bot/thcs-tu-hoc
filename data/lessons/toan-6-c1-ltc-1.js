/* Toán 6 – Chương I. Luyện tập chung (sau Bài 5). Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('toan-6/c1-ltc-1', {
  objectives: [
    'Ôn lại cách viết tập hợp, kí hiệu ∈, ∉, cách ghi số tự nhiên và số La Mã.',
    'So sánh số tự nhiên, dùng tia số.',
    'Phối hợp bốn phép tính cộng, trừ, nhân, chia số tự nhiên và các tính chất để tính nhanh.',
    'Giải bài toán thực tế nhiều bước.'
  ],
  intro: 'Buổi luyện tập này gom lại kiến thức từ Bài 1 đến Bài 5. Hãy tự làm trước từng ví dụ rồi mới xem lời giải nhé!',
  steps: [
    { title: 'Nhắc lại: tập hợp', html: `<ul><li>Hai cách viết: liệt kê phần tử, ví dụ A = {0; 1; 2; 3}; hoặc nêu tính chất đặc trưng: A = {x ∈ ℕ | x &lt; 4}.</li>
      <li>ℕ = {0; 1; 2; …}, ℕ* = {1; 2; 3; …} (không có 0).</li></ul>` },
    { title: 'Nhắc lại: ghi số và so sánh', html: `<ul><li>Giá trị của mỗi chữ số phụ thuộc vào vị trí: trong 5 372, chữ số 3 có giá trị 300.</li>
      <li>Số La Mã: I = 1, V = 5, X = 10; ví dụ IV = 4, IX = 9, XIV = 14, XXVI = 26.</li>
      <li>So sánh: nhiều chữ số hơn thì lớn hơn; cùng số chữ số thì so từ trái sang phải.</li></ul>` },
    { title: 'Nhắc lại: bốn phép tính', html: `<ul><li>Giao hoán, kết hợp cho cả phép cộng và phép nhân.</li>
      <li>Phân phối: a · (b + c) = ab + ac; a · (b − c) = ab − ac.</li>
      <li>a − b thực hiện được trong ℕ khi a ≥ b; a = b · q + r với 0 ≤ r &lt; b.</li></ul>` },
    { title: 'Chiến lược giải bài toán lời văn', html: `<ol><li>Đọc kĩ, gạch chân dữ kiện và câu hỏi.</li><li>Viết từng bước tính kèm câu trả lời ngắn.</li><li>Kiểm tra lại đơn vị và tính hợp lí của đáp số (ví dụ số xe phải là số tự nhiên, làm tròn lên nếu còn dư người).</li></ol>` }
  ],
  summary: 'Nắm chắc cách viết tập hợp, giá trị chữ số theo vị trí, số La Mã, so sánh số tự nhiên và các tính chất của bốn phép tính để tính nhanh, tính đúng.',
  examples: [
    { title: 'Tập hợp', problem: 'Viết tập hợp M các số tự nhiên lớn hơn 5 và không vượt quá 9 bằng hai cách.', solution: 'Liệt kê: M = {6; 7; 8; 9}. Nêu tính chất: M = {x ∈ ℕ | 5 &lt; x ≤ 9}.' },
    { title: 'Tính nhanh', problem: 'Tính nhanh: 38 · 63 + 37 · 38.', solution: '= 38 · (63 + 37) = 38 · 100 = <b>3 800</b>.' },
    { title: 'Bài toán nhiều bước', problem: 'Một trường mua 35 bộ bàn ghế, mỗi bộ giá 1 200 000 đồng. Trường đã trả trước 25 000 000 đồng. Hỏi trường còn phải trả bao nhiêu tiền?', solution: 'Tổng tiền: 35 · 1 200 000 = 42 000 000 (đồng).<br>Còn phải trả: 42 000 000 − 25 000 000 = <b>17 000 000 đồng</b>.' }
  ],
  exercises: [
    { question: 'Viết số La Mã biểu diễn các số 19 và 24.', hints: ['19 = 10 + 9; 9 viết là IX.', '24 = 20 + 4; 4 viết là IV.'], solution: '19 = <b>XIX</b>; 24 = <b>XXIV</b>.' },
    { question: 'Tính nhanh: 2 · 125 · 8 · 5.', hints: ['Ghép 2 với 5 và 125 với 8.', '2 · 5 = 10; 125 · 8 = 1 000.'], solution: '(2 · 5) · (125 · 8) = 10 · 1 000 = <b>10 000</b>.' },
    { question: 'Tìm số tự nhiên x biết 3x + 17 = 62.', hints: ['Tìm 3x trước: 3x = 62 − 17.', 'Rồi chia cho 3.'], solution: '3x = 45 ⇒ x = <b>15</b>.' }
  ],
  quiz: [
    { type: 'short', q: 'Tập hợp {x ∈ ℕ* | x ≤ 6} có bao nhiêu phần tử?', answer: '6', explain: 'Các phần tử: 1; 2; 3; 4; 5; 6 (ℕ* không có 0).' },
    { type: 'mcq', q: 'Trong số 48 215, giá trị của chữ số 8 là:', options: ['8', '800', '8 000', '80 000'], answer: 2, calc: '8000', explain: 'Chữ số 8 ở hàng nghìn nên có giá trị 8 000.' },
    { type: 'mcq', q: 'Số La Mã XXIX biểu diễn số:', options: ['29', '31', '19', '21'], answer: 0, calc: '10+10+9', explain: 'XX = 20, IX = 9 ⇒ 29.' },
    { type: 'short', q: 'Tính: 56 · 25 + 56 · 75.', answer: '5600', answerText: '5 600', calc: '56*25+56*75', explain: '56 · (25 + 75) = 56 · 100 = 5 600.' },
    { type: 'short', q: 'Tìm x biết 5x − 12 = 48.', answer: '12', calc: '(48+12)/5', explain: '5x = 60 ⇒ x = 12.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Số tự nhiên nhỏ nhất có bốn chữ số khác nhau là 1 023.', answer: true, explain: 'Chữ số hàng nghìn nhỏ nhất là 1, sau đó chọn 0, 2, 3.' },
    { type: 'short', q: 'Chia 347 cho 12 được số dư là bao nhiêu?', answer: '11', calc: '347%12', explain: '347 = 12 · 28 + 11.' },
    { type: 'mcq', q: 'Một quyển vở giá 8 500 đồng. Mua 12 quyển và trả bằng tờ 200 000 đồng thì được trả lại bao nhiêu?', options: ['98 000 đồng', '102 000 đồng', '108 000 đồng', '92 000 đồng'], answer: 0, calc: '200000-12*8500', explain: '12 · 8 500 = 102 000; 200 000 − 102 000 = 98 000 (đồng).' }
  ]
});
