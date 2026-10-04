/* Toán 6 – Bài 26. Phép nhân và phép chia phân số. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, C = S.C;
var it = [
  { poly: [[40, 20], [280, 20], [280, 200], [40, 200]], fill: '#fff' },
  { poly: [[40, 140], [220, 140], [220, 200], [40, 200]], fill: C.blueL, width: 0.1 },
  { poly: [[220, 20], [280, 20], [280, 140], [220, 140]], fill: C.orangeL, width: 0.1 },
  { poly: [[40, 20], [220, 20], [220, 140], [40, 140]], fill: '#c7e9c0', width: 0.1 }
];
[100, 160, 220].forEach(function (x) { it.push({ seg: [x, 20, x, 200], width: 1, color: C.muted }); });
[80, 140].forEach(function (y) { it.push({ seg: [40, y, 280, y], width: 1, color: C.muted }); });
it.push({ poly: [[40, 20], [280, 20], [280, 200], [40, 200]], width: 2.2 });
it.push({ seg: [40, 214, 220, 214], color: C.blue, width: 3 }, { text: [130, 234, '3/4 chiều ngang'], color: C.blue, bold: true, size: 13 });
it.push({ seg: [26, 20, 26, 140], color: C.orange, width: 3 }, { text: [20, 84, '2/3'], color: C.orange, bold: true, size: 13, anchor: 'end' });
var area = S.draw({ w: 300, h: 245, items: it, aria: 'Mô hình diện tích cho phép nhân 2/3 · 3/4' });
THCS.registerLesson('toan-6/bai-26', {
  objectives: [
    'Nhân được hai phân số; vận dụng tính chất của phép nhân phân số để tính nhanh.',
    'Tìm được phân số nghịch đảo của một phân số khác 0.',
    'Chia được hai phân số; giải bài toán tìm x và bài toán thực tế.'
  ],
  intro: 'Một mảnh vườn chiếm {{3|4}} khu đất, trong đó {{2|3}} mảnh vườn trồng rau. Phần trồng rau chiếm bao nhiêu phần khu đất? Ta cần tính {{2|3}} · {{3|4}}.',
  steps: [
    { title: 'Nhân hai phân số', html: `<p class="math">{{a|b}} · {{c|d}} = {{a · c|b · d}}</p><p>Nhân tử với tử, mẫu với mẫu. Nên rút gọn trước khi nhân để số nhỏ hơn.</p>`,
      svg: area, caption: 'Phần xanh lá chiếm 6 trong 12 ô: {{2|3}} · {{3|4}} = {{6|12}} = {{1|2}}.' },
    { title: 'Tính chất của phép nhân', html: `<ul><li>Giao hoán, kết hợp; nhân với 1: {{a|b}} · 1 = {{a|b}}; nhân với 0 bằng 0.</li><li>Phân phối: {{a|b}} · ({{c|d}} + {{p|q}}) = {{a|b}} · {{c|d}} + {{a|b}} · {{p|q}}.</li><li>Nhân số nguyên với phân số: n · {{a|b}} = {{n · a|b}}.</li></ul>` },
    { title: 'Phân số nghịch đảo', html: `<p>Hai số gọi là <b>nghịch đảo</b> của nhau nếu tích của chúng bằng 1. Nghịch đảo của {{a|b}} (a ≠ 0) là {{b|a}}.</p><p>Ví dụ: nghịch đảo của {{−3|5}} là {{5|−3}} = {{−5|3}}; nghịch đảo của 7 là {{1|7}}. Số 0 không có nghịch đảo.</p>` },
    { title: 'Chia hai phân số', html: `<p class="math">{{a|b}} : {{c|d}} = {{a|b}} · {{d|c}} (c ≠ 0)</p><p>Chia cho một phân số là nhân với phân số nghịch đảo của nó. Ví dụ: {{3|4}} : {{9|8}} = {{3|4}} · {{8|9}} = {{24|36}} = {{2|3}}.</p>` },
    { title: 'Thứ tự tính và tìm x', html: `<p>Thứ tự thực hiện phép tính giống với số tự nhiên, số nguyên. Tìm x: x · {{2|3}} = {{4|9}} ⇒ x = {{4|9}} : {{2|3}} = {{4|9}} · {{3|2}} = {{2|3}}.</p>` }
  ],
  summary: 'Nhân: tử nhân tử, mẫu nhân mẫu. Nghịch đảo của {{a|b}} là {{b|a}} (a ≠ 0). Chia: nhân với nghịch đảo của số chia. Rút gọn trước khi nhân cho gọn.',
  examples: [
    { title: 'Nhân có rút gọn', problem: 'Tính {{−5|12}} · {{8|15}}.', solution: 'Rút gọn chéo: 5 với 15 (÷5), 8 với 12 (÷4): {{−1|3}} · {{2|3}} = <b>{{−2|9}}</b>.' },
    { title: 'Chia phân số', problem: 'Tính {{−7|10}} : {{14|5}}.', solution: '{{−7|10}} · {{5|14}} = {{−35|140}} = <b>{{−1|4}}</b>.' },
    { title: 'Thực tế', problem: 'Một chai nước có {{3|4}} lít. Rót đều vào các cốc, mỗi cốc {{3|20}} lít. Được bao nhiêu cốc?', solution: '{{3|4}} : {{3|20}} = {{3|4}} · {{20|3}} = <b>5 cốc</b>.' }
  ],
  exercises: [
    { question: 'Tính {{4|9}} · {{27|8}}.', hints: ['Rút gọn 4 với 8, 9 với 27.', '{{1|1}} · {{3|2}}.'], solution: '<b>{{3|2}}</b>.' },
    { question: 'Tính nhanh: {{5|7}} · {{3|11}} + {{5|7}} · {{8|11}}.', hints: ['Dùng tính chất phân phối.', '{{3|11}} + {{8|11}} = 1.'], solution: '{{5|7}} · 1 = <b>{{5|7}}</b>.' },
    { question: 'Tìm x biết {{3|5}} : x = {{9|10}}.', hints: ['x là số chia: x = {{3|5}} : {{9|10}}.', 'Nhân với nghịch đảo {{10|9}}.'], solution: 'x = {{30|45}} = <b>{{2|3}}</b>.' }
  ],
  quiz: [
    { type: 'short', requireSimplest: true, q: 'Tính {{2|5}} · {{3|4}} (dạng a/b, tối giản).', answer: '3/10', answerText: '{{3|10}}', calc: '2/5*3/4', explain: '{{6|20}} = {{3|10}}.' },
    { type: 'mcq', q: 'Nghịch đảo của {{−2|7}} là:', options: ['{{2|7}}', '{{7|2}}', '{{−7|2}}', '{{−2|7}}'], answer: 2, calc: '-7/2', explain: 'Đảo tử và mẫu: {{7|−2}} = {{−7|2}}.' },
    { type: 'short', requireSimplest: true, q: 'Tính {{3|4}} : {{1|2}} (dạng a/b, tối giản).', answer: '3/2', answerText: '{{3|2}}', calc: '(3/4)/(1/2)', explain: '{{3|4}} · 2 = {{3|2}}.' },
    { type: 'short', requireSimplest: true, q: 'Tính 6 · {{5|9}} (dạng a/b, tối giản).', answer: '10/3', answerText: '{{10|3}}', calc: '6*5/9', explain: '{{30|9}} = {{10|3}}.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Số 0 có phân số nghịch đảo là 0.', answer: false, explain: 'Không có số nào nhân với 0 được 1.' },
    { type: 'mcq', q: '{{−4|5}} : {{8|15}} bằng:', options: ['{{−3|2}}', '{{3|2}}', '{{−32|75}}', '{{−2|3}}'], answer: 0, calc: '(-4/5)/(8/15)', explain: '{{−4|5}} · {{15|8}} = {{−60|40}} = {{−3|2}}.' },
    { type: 'short', requireSimplest: true, q: 'Tìm x biết x · {{4|7}} = {{8|21}} (dạng a/b, tối giản).', answer: '2/3', answerText: '{{2|3}}', calc: '(8/21)/(4/7)', explain: 'x = {{8|21}} · {{7|4}} = {{2|3}}.' },
    { type: 'short', requireSimplest: true, q: 'Một hình chữ nhật có chiều dài {{5|4}} m, chiều rộng {{2|3}} m. Diện tích là bao nhiêu m² (dạng a/b, tối giản)?', answer: '5/6', answerText: '{{5|6}}', unit: 'm²', calc: '5/4*2/3', explain: '{{10|12}} = {{5|6}} m².' }
  ]
});
})();
