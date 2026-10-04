/* Toán 6 – Bài 10. Số nguyên tố. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, G = S.C.green, GL = S.C.greenL;
function node(x, y, t, prime) { return prime ? [{ circle: [x, y - 5, 15], fill: GL, color: G }, { text: [x, y, t], bold: true, color: G }] : [{ text: [x, y, t], bold: true }]; }
var tree = S.draw({ w: 290, h: 200, items: [].concat(
  [{ seg: [130, 32, 88, 60], width: 1.6 }, { seg: [130, 32, 172, 60], width: 1.6 }, { seg: [180, 82, 142, 110], width: 1.6 }, { seg: [180, 82, 218, 110], width: 1.6 }, { seg: [226, 132, 192, 160], width: 1.6 }, { seg: [226, 132, 258, 160], width: 1.6 }],
  node(130, 25, '60'), node(80, 80, '2', true), node(180, 80, '30'), node(136, 130, '2', true), node(226, 130, '15'), node(186, 180, '3', true), node(262, 180, '5', true)
) });
THCS.registerLesson('toan-6/bai-10', {
  objectives: [
    'Nhận biết số nguyên tố, hợp số.',
    'Phân tích được một số tự nhiên lớn hơn 1 ra thừa số nguyên tố (theo cột dọc hoặc sơ đồ cây).',
    'Viết kết quả phân tích gọn bằng luỹ thừa, sắp các thừa số nguyên tố tăng dần.'
  ],
  intro: 'Giống như mọi chất được tạo nên từ các nguyên tố hoá học, mọi số tự nhiên lớn hơn 1 đều “được xây” từ các số nguyên tố bằng phép nhân.',
  steps: [
    { title: 'Số nguyên tố và hợp số', html: `<ul><li><b>Số nguyên tố</b> là số tự nhiên lớn hơn 1, chỉ có hai ước là 1 và chính nó. Ví dụ: 2, 3, 5, 7, 11, 13.</li>
      <li><b>Hợp số</b> là số tự nhiên lớn hơn 1, có nhiều hơn hai ước. Ví dụ: 4, 6, 9, 15.</li>
      <li>Số <b>0 và 1</b> không là số nguyên tố, cũng không là hợp số.</li>
      <li>2 là số nguyên tố chẵn duy nhất.</li></ul>` },
    { title: 'Nhận biết nhanh', html: `<p>Để kiểm tra số n có phải hợp số không, thử chia n cho các số nguyên tố 2, 3, 5, 7, 11, … (chỉ cần thử đến khi bình phương số chia vượt quá n). Nếu có phép chia hết thì n là hợp số.</p>
      <p>Ví dụ: 91 = 7 · 13 nên 91 là hợp số (dễ nhầm là số nguyên tố!). 97 không chia hết cho 2, 3, 5, 7 (và 11<sup>2</sup> = 121 &gt; 97) nên 97 là số nguyên tố.</p>
      <p>Các số nguyên tố nhỏ hơn 30: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29.</p>` },
    { title: 'Phân tích bằng sơ đồ cây', html: `<p>Tách số thành tích hai thừa số, tiếp tục tách các thừa số chưa là số nguyên tố cho đến khi mọi “lá” đều là số nguyên tố (khoanh tròn).</p>`,
      svg: tree, caption: 'Sơ đồ cây: 60 = 2 · 2 · 3 · 5 = 2<sup>2</sup> · 3 · 5.' },
    { title: 'Phân tích theo cột dọc', html: `<p>Chia liên tiếp cho các số nguyên tố từ nhỏ đến lớn:</p>
      <p class="math">84 | 2<br>42 | 2<br>21 | 3<br>&nbsp;7 | 7<br>&nbsp;1 |</p>
      <p>Vậy 84 = 2<sup>2</sup> · 3 · 7. Dù phân tích cách nào, kết quả cũng chỉ có một (không kể thứ tự các thừa số).</p>` }
  ],
  summary: 'Số nguyên tố: lớn hơn 1, chỉ có ước 1 và chính nó. Hợp số: lớn hơn 1, có nhiều hơn hai ước. 0 và 1 không thuộc loại nào. Mọi số lớn hơn 1 phân tích được thành tích các thừa số nguyên tố theo một cách duy nhất.',
  examples: [
    { title: 'Phân loại', problem: 'Trong các số 1; 17; 21; 29; 51; 2, số nào là số nguyên tố, số nào là hợp số?', solution: 'Số nguyên tố: 2; 17; 29. Hợp số: 21 = 3 · 7; 51 = 3 · 17. Số 1 không là số nguyên tố cũng không là hợp số.' },
    { title: 'Phân tích ra thừa số nguyên tố', problem: 'Phân tích 120 ra thừa số nguyên tố.', solution: '120 = 2 · 60 = 2 · 2 · 30 = 2 · 2 · 2 · 15 = 2 · 2 · 2 · 3 · 5. Vậy <b>120 = 2<sup>3</sup> · 3 · 5</b>.' },
    { title: 'Tìm ước từ phân tích', problem: 'Biết 45 = 3<sup>2</sup> · 5, hãy viết tất cả các ước của 45.', solution: 'Các ước là tích của các thừa số lấy từ phân tích: 1; 3; 5; 9; 15; 45.' }
  ],
  exercises: [
    { question: 'Phân tích 180 ra thừa số nguyên tố.', hints: ['Chia liên tiếp cho 2 đến khi không chia được nữa.', '180 → 90 → 45; rồi chia cho 3, cho 5.'], solution: '180 = <b>2<sup>2</sup> · 3<sup>2</sup> · 5</b>.' },
    { question: 'Tổng 3 · 5 · 7 + 11 là số nguyên tố hay hợp số?', hints: ['Tính 3 · 5 · 7 = 105.', 'Xét tính chẵn lẻ của tổng 105 + 11.'], solution: '105 + 11 = 116 chia hết cho 2, lớn hơn 2 nên là <b>hợp số</b>.' },
    { question: 'Tìm số nguyên tố p sao cho p + 2 và p + 4 cũng là số nguyên tố.', hints: ['Thử p = 2, 3, 5, 7.', 'Trong ba số p, p + 2, p + 4 luôn có một số chia hết cho 3.'], solution: 'p = 3 cho 3, 5, 7 đều nguyên tố. Với p khác 3, một trong ba số chia hết cho 3 và lớn hơn 3 nên là hợp số. Vậy <b>p = 3</b>.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Số nào sau đây là số nguyên tố?', options: ['51', '57', '53', '91'], answer: 2, explain: '51 = 3 · 17; 57 = 3 · 19; 91 = 7 · 13; 53 chỉ có ước 1 và 53.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Số 1 là số nguyên tố nhỏ nhất.', answer: false, explain: 'Số nguyên tố nhỏ nhất là 2; số 1 không phải số nguyên tố.' },
    { type: 'short', q: 'Có bao nhiêu số nguyên tố nhỏ hơn 20?', answer: '8', calc: '[2,3,5,7,11,13,17,19].length', explain: '2, 3, 5, 7, 11, 13, 17, 19.' },
    { type: 'mcq', q: 'Kết quả phân tích 72 ra thừa số nguyên tố là:', options: ['2<sup>3</sup> · 3<sup>2</sup>', '2<sup>2</sup> · 3<sup>3</sup>', '8 · 9', '2 · 36'], answer: 0, explain: '72 = 8 · 9 = 2<sup>3</sup> · 3<sup>2</sup>. 8 và 9 không phải số nguyên tố.' },
    { type: 'short', q: 'Số nguyên tố lớn nhất có hai chữ số là số nào?', answer: '97', explain: '99 = 9 · 11; 98 chẵn; 97 là số nguyên tố.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mọi số nguyên tố đều là số lẻ.', answer: false, explain: '2 là số nguyên tố chẵn.' },
    { type: 'short', q: 'Biết n = 2<sup>2</sup> · 5 · 7. Tìm n.', answer: '140', calc: '4*5*7', explain: '4 · 5 · 7 = 140.' },
    { type: 'mcq', q: 'Số 2 · 3 · 5 + 1 là:', options: ['Số nguyên tố', 'Hợp số', 'Không phải số tự nhiên', 'Chia hết cho 5'], answer: 0, explain: '2 · 3 · 5 + 1 = 31, là số nguyên tố.' }
  ]
});
})();
