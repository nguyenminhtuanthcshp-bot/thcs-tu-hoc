/* KHTN 9 – Bài 37. Các quy luật di truyền của Mendel. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-9/bai-37', {
  objectives: [
    'Trình bày được thí nghiệm lai một cặp tính trạng và phát biểu được quy luật phân li.',
    'Trình bày được thí nghiệm lai hai cặp tính trạng và phát biểu được quy luật phân li độc lập.',
    'Nêu được phép lai phân tích; vận dụng khung Punnett để xác định tỉ lệ kiểu gene, kiểu hình.'
  ],
  intro: 'Từ hàng chục nghìn hạt đậu đếm được, Mendel phát hiện những tỉ lệ rất “tròn”: 3 : 1 và 9 : 3 : 3 : 1. Các tỉ lệ đó phản ánh cách các gene được truyền qua giao tử.',
  steps: [
    { title: 'Lai một cặp tính trạng', html: `<p>Lai đậu hạt vàng thuần chủng với hạt xanh thuần chủng: F<sub>1</sub> 100 % hạt vàng; cho F<sub>1</sub> tự thụ phấn, F<sub>2</sub> có tỉ lệ ≈ <b>3 vàng : 1 xanh</b>.</p>
      <p>Quy ước: A – hạt vàng (trội), a – hạt xanh (lặn).</p>`,
      svg: S.crossScheme({ title: 'Sơ đồ lai một cặp tính trạng', rows: [['P', 'AA (vàng)', '×', 'aa (xanh)'], ['G', 'A', '', 'a'], ['F₁', 'Aa – 100 % hạt vàng'], ['F₁ × F₁', 'Aa', '×', 'Aa'], ['F₂', '1 AA : 2 Aa : 1 aa ⇒ 3 vàng : 1 xanh']] }), caption: 'Sơ đồ lai: F₂ có tỉ lệ kiểu gene 1 : 2 : 1 và kiểu hình 3 : 1.' },
    { title: 'Quy luật phân li', html: `<div class="box key"><b>Quy luật phân li:</b> Mỗi tính trạng do một cặp nhân tố di truyền (cặp alen) quy định. Trong quá trình phát sinh giao tử, mỗi nhân tố di truyền trong cặp <b>phân li</b> về một giao tử và giữ nguyên bản chất như ở cơ thể P.</div>
      <p>F<sub>1</sub> (Aa) tạo hai loại giao tử A và a với tỉ lệ bằng nhau. Sự kết hợp ngẫu nhiên của các giao tử được biểu diễn bằng <b>khung Punnett</b>.</p>`,
      svg: S.punnett({ g1: ['A', 'a'], g2: ['A', 'a'], n1: 'Giao tử F₁ (♂)', n2: 'Giao tử F₁ (♀)', traits: ['Hạt vàng', 'Hạt xanh'] }), caption: 'Khung Punnett của F₁ × F₁ (Aa × Aa): 3/4 hạt vàng, 1/4 hạt xanh.' },
    { title: 'Phép lai phân tích', html: `<p><b>Lai phân tích</b> là phép lai giữa cơ thể mang tính trạng trội cần xác định kiểu gene với cơ thể mang tính trạng lặn.</p>
      <ul><li>Đời con 100 % trội ⇒ cơ thể trội đồng hợp (AA).</li><li>Đời con 1 trội : 1 lặn ⇒ cơ thể trội dị hợp (Aa).</li></ul>`,
      svg: S.punnett({ g1: ['A', 'a'], g2: ['a'], n1: 'Giao tử cây hạt vàng (Aa)', n2: 'Giao tử aa', traits: ['Hạt vàng', 'Hạt xanh'], label: 'Lai phân tích Aa × aa' }), caption: 'Lai phân tích Aa × aa cho tỉ lệ 1 hạt vàng : 1 hạt xanh.' },
    { title: 'Lai hai cặp tính trạng – quy luật phân li độc lập', html: `<p>P: hạt vàng, trơn (AABB) × hạt xanh, nhăn (aabb) → F<sub>1</sub>: 100 % vàng, trơn (AaBb). F<sub>1</sub> tự thụ phấn → F<sub>2</sub> ≈ <b>9 vàng, trơn : 3 vàng, nhăn : 3 xanh, trơn : 1 xanh, nhăn</b>.</p>
      <div class="box key"><b>Quy luật phân li độc lập:</b> Các cặp nhân tố di truyền (cặp alen) quy định các tính trạng khác nhau phân li độc lập trong quá trình phát sinh giao tử.</div>
      <p>F<sub>1</sub> AaBb tạo 4 loại giao tử với tỉ lệ bằng nhau: AB, Ab, aB, ab. Tỉ lệ kiểu hình F<sub>2</sub> = (3 : 1) × (3 : 1).</p>`,
      svg: S.punnett({ g1: ['AB', 'Ab', 'aB', 'ab'], g2: ['AB', 'Ab', 'aB', 'ab'], n1: 'Giao tử F₁ (♂)', n2: 'Giao tử F₁ (♀)' }), caption: 'Khung Punnett 4 × 4 của AaBb × AaBb: tỉ lệ kiểu hình 9 : 3 : 3 : 1.' }
  ],
  summary: 'Lai một cặp tính trạng: F₁ đồng tính trội, F₂ phân li 3 trội : 1 lặn (kiểu gene 1 : 2 : 1) – quy luật phân li. Lai phân tích (với cơ thể lặn) xác định kiểu gene cơ thể trội. Lai hai cặp tính trạng: F₂ 9 : 3 : 3 : 1 – quy luật phân li độc lập. Khung Punnett giúp tính tỉ lệ đời con.',
  examples: [
    { title: 'Xác định tỉ lệ', problem: 'Ở cà chua, A (quả đỏ) trội hoàn toàn so với a (quả vàng). Cho Aa × Aa. Tính tỉ lệ kiểu hình.', solution: 'F: 1 AA : 2 Aa : 1 aa ⇒ 3 quả đỏ : 1 quả vàng.' },
    { title: 'Lai phân tích', problem: 'Lai phân tích cây quả đỏ thu được 50 % quả đỏ, 50 % quả vàng. Xác định kiểu gene cây quả đỏ.', solution: 'Tỉ lệ 1 : 1 ⇒ cây quả đỏ dị hợp Aa.' },
    { title: 'Hai cặp tính trạng', problem: 'F<sub>2</sub> của phép lai hai cặp tính trạng có 1 600 cây. Ước tính số cây xanh, nhăn.', solution: 'Xanh, nhăn chiếm 1/16 ⇒ 1 600 / 16 = 100 cây.' }
  ],
  exercises: [
    { question: 'Ở đậu Hà Lan, A (thân cao) trội hoàn toàn so với a (thân thấp). Cho AA × aa, viết sơ đồ lai đến F<sub>2</sub>.', hints: ['F<sub>1</sub>: Aa.', 'F<sub>1</sub> × F<sub>1</sub>: Aa × Aa.'], solution: 'P: AA × aa → G: A, a → F<sub>1</sub>: Aa (100 % cao). F<sub>1</sub> × F<sub>1</sub> → F<sub>2</sub>: 1 AA : 2 Aa : 1 aa ⇒ 3 cao : 1 thấp.' },
    { question: 'Cơ thể AaBb tạo ra những loại giao tử nào? Tỉ lệ mỗi loại?', hints: ['Mỗi cặp alen phân li độc lập.', '2 · 2 = 4 loại.'], solution: 'AB, Ab, aB, ab, mỗi loại chiếm 1/4.' },
    { question: 'Ở phép lai AaBb × AaBb, tỉ lệ cây có kiểu hình vàng, trơn (A_B_) là bao nhiêu?', hints: ['P(A_) = 3/4; P(B_) = 3/4.', 'Nhân hai xác suất.'], solution: '3/4 · 3/4 = 9/16.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Lai một cặp tính trạng, F₂ có tỉ lệ kiểu hình 3 trội : 1 lặn.', answer: true, explain: 'Khi trội hoàn toàn.' },
    { type: 'mcq', q: 'Phép lai nào là lai phân tích?', options: ['Aa × Aa', 'AA × Aa', 'Aa × aa', 'AA × AA'], answer: 2, explain: 'Lai cơ thể trội với cơ thể lặn aa.' },
    { type: 'short', q: 'Ở phép lai Aa × Aa, tỉ lệ kiểu gene aa ở đời con là bao nhiêu phần trăm?', answer: '25', unit: '%', calc: '1/4*100', explain: '1/4 = 25 %.' },
    { type: 'mcq', q: 'Tỉ lệ kiểu hình ở F₂ khi lai hai cặp tính trạng (trội hoàn toàn, phân li độc lập) là:', options: ['3 : 1', '1 : 2 : 1', '9 : 3 : 3 : 1', '1 : 1 : 1 : 1'], answer: 2, explain: '(3 : 1)².' },
    { type: 'short', q: 'Cơ thể có kiểu gene AaBb tạo ra bao nhiêu loại giao tử?', answer: '4', unit: 'loại', calc: '2*2', explain: 'AB, Ab, aB, ab.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Lai phân tích cây hoa tím cho đời con 100 % hoa tím chứng tỏ cây đó dị hợp.', answer: false, explain: '100 % trội ⇒ cây đồng hợp AA.' },
    { type: 'short', q: 'F₂ của phép lai một cặp tính trạng có 800 cây. Số cây có kiểu gene dị hợp Aa (theo lí thuyết) là bao nhiêu?', answer: '400', unit: 'cây', calc: '800/2', explain: 'Aa chiếm 2/4 = 1/2.' },
    { type: 'mcq', q: 'Theo quy luật phân li, cơ thể Aa tạo giao tử:', options: ['chỉ A', 'chỉ a', 'A và a với tỉ lệ bằng nhau', 'Aa'], answer: 2, explain: 'Mỗi alen phân li về một giao tử.' }
  ]
});
})();
