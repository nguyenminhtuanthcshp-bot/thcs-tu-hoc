/* Toán 6 – Bài tập cuối chương II. Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('toan-6/c2-on-tap', {
  objectives: [
    'Hệ thống hoá kiến thức chương II: chia hết, ước – bội, dấu hiệu chia hết, số nguyên tố, ƯCLN, BCNN.',
    'Vận dụng tổng hợp vào bài tập và bài toán thực tế.',
    'Tự kiểm tra mức độ nắm vững chương.'
  ],
  intro: 'Ôn tập toàn bộ chương II. Hãy tự tóm tắt từng mục bằng lời của em trước khi đọc.',
  steps: [
    { title: 'Chia hết, ước và bội', html: `<ul><li>a ⋮ b (b ≠ 0) ⇔ a = k · b ⇔ a là bội của b, b là ước của a.</li><li>Tính chất chia hết của tổng, hiệu.</li></ul>` },
    { title: 'Dấu hiệu chia hết', html: `<p>2: tận cùng chẵn; 5: tận cùng 0, 5; 3 (9): tổng chữ số chia hết cho 3 (9).</p>` },
    { title: 'Số nguyên tố, phân tích', html: `<p>Số nguyên tố chỉ có hai ước 1 và chính nó. Mọi số &gt; 1 phân tích được duy nhất ra tích các thừa số nguyên tố.</p>` },
    { title: 'ƯCLN và BCNN', html: `<p>ƯCLN: thừa số chung, mũ nhỏ nhất. BCNN: mọi thừa số, mũ lớn nhất. ƯC = Ư(ƯCLN); BC = B(BCNN).</p>` }
  ],
  summary: 'Chương II: quan hệ chia hết, ước và bội, dấu hiệu chia hết cho 2, 3, 5, 9, số nguyên tố, phân tích ra thừa số nguyên tố, ƯCLN, BCNN và ứng dụng.',
  examples: [
    { title: 'Dấu hiệu chia hết', problem: 'Dùng cả bốn chữ số 0, 3, 4, 5, viết số lớn nhất có bốn chữ số khác nhau chia hết cho 2, 3 và 5.', solution: 'Chia hết cho 2 và 5 ⇒ tận cùng 0. Tổng 0 + 3 + 4 + 5 = 12 ⋮ 3 ✔. Số lớn nhất: <b>5 430</b>.' },
    { title: 'ƯCLN và BCNN', problem: 'Tìm ƯCLN và BCNN của 45, 75.', solution: '45 = 3<sup>2</sup> · 5; 75 = 3 · 5<sup>2</sup>. ƯCLN = 3 · 5 = <b>15</b>; BCNN = 3<sup>2</sup> · 5<sup>2</sup> = <b>225</b>.' },
    { title: 'Thực tế', problem: 'Một đội có 48 nam và 36 nữ, chia thành các tổ sao cho số nam và số nữ ở các tổ bằng nhau. Chia được nhiều nhất bao nhiêu tổ?', solution: 'ƯCLN(48, 36) = 12 tổ, mỗi tổ 4 nam và 3 nữ.' }
  ],
  exercises: [
    { question: 'Tìm x ∈ Ư(40) sao cho x &gt; 6.', hints: ['Liệt kê Ư(40).', 'Ư(40) = {1; 2; 4; 5; 8; 10; 20; 40}.'], solution: 'x ∈ <b>{8; 10; 20; 40}</b>.' },
    { question: 'Tổng 1 + 2 + 3 + … + 9 có chia hết cho 9 không?', hints: ['Tính tổng bằng cách ghép cặp.', '1 + 9 = 2 + 8 = … = 10.'], solution: 'Tổng = 45 ⋮ 9. <b>Có</b>.' },
    { question: 'Hai đèn biển: đèn thứ nhất sáng sau mỗi 12 giây, đèn thứ hai sau mỗi 18 giây. Cùng sáng lúc 19 giờ. Trong 3 phút đầu tiên (kể từ 19 giờ, không tính thời điểm 19 giờ), hai đèn cùng sáng bao nhiêu lần?', hints: ['BCNN(12, 18) = 36 giây.', '3 phút = 180 giây; đếm các bội của 36 từ 36 đến 180.'], solution: '36, 72, 108, 144, 180 ⇒ <b>5 lần</b>.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Số nào chia hết cho cả 2 và 9?', options: ['3 456', '2 345', '1 118', '9 991'], answer: 0, explain: '3 456 chẵn và tổng chữ số 18 ⋮ 9.' },
    { type: 'short', q: 'Có bao nhiêu ước của 36?', answer: '9', calc: 'divisors(36).length', explain: '1; 2; 3; 4; 6; 9; 12; 18; 36.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tích của hai số nguyên tố luôn là hợp số.', answer: true, explain: 'Tích p · q có ít nhất các ước 1, p, q, pq nên là hợp số.' },
    { type: 'mcq', q: 'Phân tích 126 ra thừa số nguyên tố:', options: ['2 · 3<sup>2</sup> · 7', '2 · 63', '2<sup>2</sup> · 3 · 7', '3 · 42'], answer: 0, explain: '126 = 2 · 63 = 2 · 3<sup>2</sup> · 7.' },
    { type: 'short', q: 'Tìm ƯCLN(84, 126).', answer: '42', calc: 'gcd(84,126)', explain: '84 = 2<sup>2</sup> · 3 · 7; 126 = 2 · 3<sup>2</sup> · 7 ⇒ 2 · 3 · 7 = 42.' },
    { type: 'short', q: 'Tìm BCNN(10, 12, 15).', answer: '60', calc: 'lcm(lcm(10,12),15)', explain: '2<sup>2</sup> · 3 · 5 = 60.' },
    { type: 'mcq', q: 'Rút gọn {{84|126}} về tối giản:', options: ['{{2|3}}', '{{4|6}}', '{{42|63}}', '{{3|4}}'], answer: 0, explain: 'Chia cả tử và mẫu cho ƯCLN = 42.' },
    { type: 'short', q: 'Số tự nhiên nhỏ nhất có ba chữ số chia hết cho cả 4 và 6 là số nào?', answer: '108', calc: 'Math.ceil(100/12)*12', explain: 'BCNN(4, 6) = 12; bội nhỏ nhất có ba chữ số của 12 là 108.' }
  ]
});
