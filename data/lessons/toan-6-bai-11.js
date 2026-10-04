/* Toán 6 – Bài 11. Ước chung. Ước chung lớn nhất. Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('toan-6/bai-11', {
  objectives: [
    'Hiểu khái niệm ước chung, ước chung lớn nhất (ƯCLN).',
    'Tìm ƯCLN bằng cách liệt kê và bằng phân tích ra thừa số nguyên tố.',
    'Tìm ước chung thông qua ƯCLN; nhận biết hai số nguyên tố cùng nhau; rút gọn phân số về tối giản.',
    'Giải bài toán thực tế về chia đều lớn nhất.'
  ],
  intro: 'Cô giáo có 24 quyển vở và 36 cái bút, muốn chia thành các phần quà giống hệt nhau, nhiều phần nhất có thể. Mỗi phần có mấy vở, mấy bút? Câu trả lời nằm ở ƯCLN.',
  steps: [
    { title: 'Ước chung', html: `<p>Ước chung của hai hay nhiều số là số là ước của <b>tất cả</b> các số đó. Kí hiệu ƯC(a, b).</p>
      <p>Ư(12) = {1; 2; 3; 4; 6; 12}, Ư(18) = {1; 2; 3; 6; 9; 18} ⇒ ƯC(12, 18) = {1; 2; 3; 6}.</p>` },
    { title: 'Ước chung lớn nhất', html: `<p>ƯCLN(a, b) là số lớn nhất trong tập hợp ƯC(a, b). Ví dụ: ƯCLN(12, 18) = 6.</p>
      <p>Tính chất quan trọng: <b>mọi ước chung đều là ước của ƯCLN</b>. Vì vậy ƯC(12, 18) = Ư(6).</p>
      <p>Nếu a ⋮ b thì ƯCLN(a, b) = b. ƯCLN(a, 1) = 1.</p>` },
    { title: 'Tìm ƯCLN bằng phân tích ra thừa số nguyên tố', html: `<ol><li>Phân tích mỗi số ra thừa số nguyên tố.</li><li>Chọn các thừa số nguyên tố <b>chung</b>.</li><li>Lấy mỗi thừa số với số mũ <b>nhỏ nhất</b>, rồi nhân lại.</li></ol>
      <p>Ví dụ: 36 = 2<sup>2</sup> · 3<sup>2</sup>; 84 = 2<sup>2</sup> · 3 · 7. Thừa số chung: 2 và 3. ƯCLN = 2<sup>2</sup> · 3 = 12.</p>` },
    { title: 'Số nguyên tố cùng nhau', html: `<p>Hai số có ƯCLN bằng 1 gọi là <b>hai số nguyên tố cùng nhau</b>. Ví dụ 8 và 15 (dù cả hai đều là hợp số).</p>
      <p>Ứng dụng: phân số {{a|b}} <b>tối giản</b> khi ƯCLN(a, b) = 1. Để rút gọn về tối giản, chia cả tử và mẫu cho ƯCLN: {{36|84}} = {{36 : 12|84 : 12}} = {{3|7}}.</p>` },
    { title: 'Bài toán thực tế', html: `<p>Dấu hiệu nhận biết: “chia đều”, “nhiều nhất”, “lớn nhất” ⇒ nghĩ đến ƯCLN.</p>
      <p>Bài toán mở đầu: số phần quà nhiều nhất là ƯCLN(24, 36) = 12. Mỗi phần có 24 : 12 = 2 vở và 36 : 12 = 3 bút.</p>` }
  ],
  summary: 'ƯC(a, b) là tập các ước chung; ƯCLN là số lớn nhất trong đó và ƯC(a, b) = Ư(ƯCLN(a, b)). Tìm ƯCLN: phân tích ra thừa số nguyên tố, lấy thừa số chung với số mũ nhỏ nhất. ƯCLN = 1 thì hai số nguyên tố cùng nhau.',
  examples: [
    { title: 'Tìm ƯCLN', problem: 'Tìm ƯCLN(48, 60, 72).', solution: '48 = 2<sup>4</sup> · 3; 60 = 2<sup>2</sup> · 3 · 5; 72 = 2<sup>3</sup> · 3<sup>2</sup>. Thừa số chung: 2 (mũ nhỏ nhất 2), 3 (mũ nhỏ nhất 1). ƯCLN = 2<sup>2</sup> · 3 = <b>12</b>.' },
    { title: 'Tìm ước chung qua ƯCLN', problem: 'Tìm ƯC(30, 45).', solution: 'ƯCLN(30, 45) = 15 ⇒ ƯC(30, 45) = Ư(15) = <b>{1; 3; 5; 15}</b>.' },
    { title: 'Cắt gạch lát', problem: 'Một nền nhà hình chữ nhật 420 cm × 360 cm cần lát kín bằng các viên gạch vuông bằng nhau, không cắt gạch. Cạnh viên gạch lớn nhất là bao nhiêu?', solution: 'Cạnh gạch phải là ước chung của 420 và 360, lớn nhất: 420 = 2<sup>2</sup> · 3 · 5 · 7; 360 = 2<sup>3</sup> · 3<sup>2</sup> · 5. ƯCLN = 2<sup>2</sup> · 3 · 5 = <b>60 cm</b>.' }
  ],
  exercises: [
    { question: 'Tìm ƯCLN(56, 140).', hints: ['Kiểm tra 140 có chia hết cho 56 không? Nếu không, phân tích cả hai số.', '56 = 2<sup>3</sup> · 7; 140 = 2<sup>2</sup> · 5 · 7.'], solution: 'ƯCLN = 2<sup>2</sup> · 7 = <b>28</b>.' },
    { question: 'Rút gọn phân số {{54|90}} về phân số tối giản.', hints: ['Tìm ƯCLN(54, 90).', '54 = 2 · 3<sup>3</sup>; 90 = 2 · 3<sup>2</sup> · 5.'], solution: 'ƯCLN = 18. {{54|90}} = <b>{{3|5}}</b>.' },
    { question: 'Có 96 cái kẹo và 72 cái bánh, chia đều vào các túi sao cho mỗi túi có cả kẹo và bánh. Có thể chia được nhiều nhất bao nhiêu túi? Mỗi túi có bao nhiêu kẹo, bao nhiêu bánh?', hints: ['Số túi nhiều nhất = ƯCLN(96, 72).', '96 = 2<sup>5</sup> · 3; 72 = 2<sup>3</sup> · 3<sup>2</sup>.'], solution: 'ƯCLN = 2<sup>3</sup> · 3 = 24 túi. Mỗi túi: 96 : 24 = <b>4 kẹo</b>, 72 : 24 = <b>3 bánh</b>.' }
  ],
  quiz: [
    { type: 'short', q: 'Tìm ƯCLN(18, 30).', answer: '6', calc: 'gcd(18,30)', explain: '18 = 2 · 3<sup>2</sup>; 30 = 2 · 3 · 5 ⇒ ƯCLN = 2 · 3 = 6.' },
    { type: 'short', q: 'Tìm ƯCLN(15, 45).', answer: '15', calc: 'gcd(15,45)', explain: '45 ⋮ 15 nên ƯCLN = 15.' },
    { type: 'mcq', q: 'Cặp số nào là hai số nguyên tố cùng nhau?', options: ['12 và 18', '9 và 16', '14 và 21', '10 và 25'], answer: 1, explain: 'ƯCLN(9, 16) = 1.' },
    { type: 'short', q: 'ƯC(20, 32) có bao nhiêu phần tử?', answer: '3', calc: 'divisors(gcd(20,32)).length', explain: 'ƯCLN = 4 ⇒ ƯC = Ư(4) = {1; 2; 4}.' },
    { type: 'mcq', q: 'Phân số tối giản của {{24|40}} là:', options: ['{{12|20}}', '{{6|10}}', '{{3|5}}', '{{2|5}}'], answer: 2, explain: 'Chia tử và mẫu cho ƯCLN = 8.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hai hợp số không thể nguyên tố cùng nhau.', answer: false, explain: 'Ví dụ 8 và 9 đều là hợp số nhưng ƯCLN(8, 9) = 1.' },
    { type: 'short', q: 'Tìm ƯCLN(24, 36, 60).', answer: '12', calc: 'gcd(gcd(24,36),60)', explain: '24 = 2<sup>3</sup> · 3; 36 = 2<sup>2</sup> · 3<sup>2</sup>; 60 = 2<sup>2</sup> · 3 · 5 ⇒ 2<sup>2</sup> · 3 = 12.' },
    { type: 'mcq', q: 'Chia 40 bông hồng và 56 bông cúc thành các bó giống nhau (mỗi bó có cả hai loại), nhiều bó nhất. Mỗi bó có bao nhiêu bông cúc?', options: ['8', '7', '5', '14'], answer: 1, calc: '56/gcd(40,56)', explain: 'Số bó = ƯCLN(40, 56) = 8. Mỗi bó có 56 : 8 = 7 bông cúc (và 5 bông hồng).' }
  ]
});
