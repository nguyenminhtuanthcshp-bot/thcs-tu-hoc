/* Toán 6 – Bài tập cuối chương I. Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('toan-6/c1-on-tap', {
  objectives: [
    'Hệ thống hoá kiến thức chương I: tập hợp, ghi số, thứ tự, bốn phép tính, luỹ thừa, thứ tự phép tính.',
    'Vận dụng tổng hợp để giải bài tập và bài toán thực tế.',
    'Tự đánh giá mức độ nắm vững chương trước khi học chương II.'
  ],
  intro: 'Đây là bài ôn tập cuối chương I. Hãy đọc sơ đồ kiến thức, làm các ví dụ, bài tập rồi kiểm tra bằng bài trắc nghiệm 8 câu.',
  steps: [
    { title: 'Tập hợp và số tự nhiên', html: `<ul><li>Viết tập hợp: liệt kê hoặc nêu tính chất đặc trưng; kí hiệu ∈, ∉.</li><li>Hệ thập phân: giá trị chữ số phụ thuộc vị trí; số La Mã I, V, X.</li><li>So sánh, tia số, số liền trước/liền sau; a ≤ b, a ≥ b.</li></ul>` },
    { title: 'Bốn phép tính', html: `<ul><li>Cộng, nhân: giao hoán, kết hợp; phân phối a(b + c) = ab + ac.</li><li>Trừ a − b trong ℕ khi a ≥ b.</li><li>Chia: a = b · q + r, 0 ≤ r &lt; b; không chia cho 0.</li></ul>` },
    { title: 'Luỹ thừa', html: `<p>a<sup>n</sup>; a<sup>m</sup> · a<sup>n</sup> = a<sup>m+n</sup>; a<sup>m</sup> : a<sup>n</sup> = a<sup>m−n</sup>; a<sup>0</sup> = 1.</p>` },
    { title: 'Thứ tự thực hiện phép tính', html: `<p>Luỹ thừa → nhân, chia → cộng, trừ; ngoặc ( ) → [ ] → { }.</p><p>Mẹo ôn tập: tự viết lại sơ đồ này vào vở bằng lời của em, rồi làm bài tập không nhìn sơ đồ.</p>` }
  ],
  summary: 'Chương I gồm: tập hợp, cách ghi và so sánh số tự nhiên, bốn phép tính và tính chất, luỹ thừa, thứ tự thực hiện phép tính.',
  examples: [
    { title: 'Tổng hợp', problem: 'Cho A = {x ∈ ℕ | 3 ≤ x &lt; 8}. Tính tổng các phần tử của A.', solution: 'A = {3; 4; 5; 6; 7}. Tổng: 3 + 4 + 5 + 6 + 7 = (3 + 7) + (4 + 6) + 5 = <b>25</b>.' },
    { title: 'Tính hợp lí', problem: 'Tính: 4 · 5<sup>2</sup> − 2 · 3<sup>2</sup> + 12 : 2<sup>2</sup>.', solution: '4 · 25 − 2 · 9 + 12 : 4 = 100 − 18 + 3 = <b>85</b>.' },
    { title: 'Bài toán thực tế', problem: 'Một thư viện có 1 250 cuốn sách, xếp đều vào các giá, mỗi giá 48 cuốn. Cần ít nhất bao nhiêu giá, và giá cuối có bao nhiêu cuốn?', solution: '1 250 = 48 · 26 + 2. Cần 26 giá đầy và 1 giá chứa 2 cuốn: ít nhất <b>27 giá</b>, giá cuối có <b>2 cuốn</b>.' }
  ],
  exercises: [
    { question: 'Tính nhanh: 998 + 357 + 2 + 643.', hints: ['Ghép 998 với 2, 357 với 643.', 'Mỗi cặp là một số tròn trăm hoặc tròn nghìn.'], solution: '(998 + 2) + (357 + 643) = 1 000 + 1 000 = <b>2 000</b>.' },
    { question: 'Tìm x biết 3 · (x + 4)<sup>2</sup> = 243.', hints: ['Chia hai vế cho 3: (x + 4)<sup>2</sup> = 81.', '81 = 9<sup>2</sup>.'], solution: 'x + 4 = 9 ⇒ <b>x = 5</b>.' },
    { question: 'Có bao nhiêu số tự nhiên có hai chữ số?', hints: ['Số nhỏ nhất có hai chữ số là 10, lớn nhất là 99.', 'Số lượng = số cuối − số đầu + 1.'], solution: '99 − 10 + 1 = <b>90</b> số.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Cách viết nào đúng?', options: ['0 ∈ ℕ*', '0 ∈ ℕ', '5 ∉ ℕ', '{1; 2} ∈ ℕ'], answer: 1, explain: '0 là số tự nhiên nhưng không thuộc ℕ*.' },
    { type: 'short', q: 'Số La Mã XVI biểu diễn số nào?', answer: '16', calc: '10+5+1', explain: 'X = 10, V = 5, I = 1: 16.' },
    { type: 'short', q: 'Tính: 37 · 45 + 37 · 55.', answer: '3700', answerText: '3 700', calc: '37*45+37*55', explain: '37 · 100 = 3 700.' },
    { type: 'short', q: 'Số dư khi chia 2 026 cho 9 là bao nhiêu?', answer: '1', calc: '2026%9', explain: '2 026 = 9 · 225 + 1.' },
    { type: 'mcq', q: 'Viết 5<sup>3</sup> · 5<sup>4</sup> : 5<sup>2</sup> dưới dạng một luỹ thừa:', options: ['5<sup>5</sup>', '5<sup>9</sup>', '5<sup>24</sup>', '5<sup>6</sup>'], answer: 0, explain: '3 + 4 − 2 = 5.' },
    { type: 'short', q: 'Tính: 2 · [ 50 − (7 − 2)<sup>2</sup> ] + 1.', answer: '51', calc: '2*(50-25)+1', explain: '(5)<sup>2</sup> = 25; 50 − 25 = 25; 2 · 25 = 50; 50 + 1 = 51.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mọi số tự nhiên đều có số liền sau.', answer: true, explain: 'Số liền sau của a là a + 1; không có số tự nhiên lớn nhất.' },
    { type: 'mcq', q: 'Một hộp bánh giá 35 000 đồng, một hộp sữa giá 8 000 đồng. Mua 2 hộp bánh và 5 hộp sữa hết bao nhiêu tiền?', options: ['110 000 đồng', '215 000 đồng', '86 000 đồng', '43 000 đồng'], answer: 0, calc: '2*35000+5*8000', explain: '70 000 + 40 000 = 110 000 (đồng).' }
  ]
});
