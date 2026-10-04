/* Toán 6 – Bài 25. Phép cộng và phép trừ phân số. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('toan-6/bai-25', {
  objectives: [
    'Cộng, trừ được hai phân số cùng mẫu và khác mẫu.',
    'Tìm số đối của một phân số; hiểu phép trừ là cộng với số đối.',
    'Vận dụng tính chất giao hoán, kết hợp và quy tắc dấu ngoặc để tính nhanh.'
  ],
  intro: 'Mẹ cắt bánh: sáng em ăn {{1|4}} cái, chiều ăn thêm {{2|4}} cái. Cả ngày em ăn bao nhiêu phần cái bánh? Và nếu ăn {{1|3}} cái rồi thêm {{1|2}} cái thì sao?',
  steps: [
    { title: 'Cộng hai phân số cùng mẫu', html: `<p class="math">{{a|m}} + {{b|m}} = {{a + b|m}}</p><p>Cộng các tử, giữ nguyên mẫu. Ví dụ: {{1|4}} + {{2|4}} = {{3|4}}; {{−5|9}} + {{2|9}} = {{−3|9}} = {{−1|3}}.</p>`,
      svg: S.fracBars({ bars: [{ parts: 4, shaded: 1, label: '1/4' }, { parts: 4, shaded: 2, label: '2/4', color: S.C.orange }, { parts: 4, shaded: 3, label: '3/4', color: S.C.green }] }),
      caption: '{{1|4}} + {{2|4}} = {{3|4}}.' },
    { title: 'Cộng hai phân số khác mẫu', html: `<p>Quy đồng mẫu rồi cộng như phân số cùng mẫu.</p><p class="math">{{1|3}} + {{1|2}} = {{2|6}} + {{3|6}} = {{5|6}}</p><p><b>Sai lầm cần tránh:</b> cộng tử với tử, mẫu với mẫu: {{1|3}} + {{1|2}} ≠ {{2|5}}.</p>` },
    { title: 'Số đối của phân số', html: `<p>Hai phân số gọi là <b>đối nhau</b> nếu tổng bằng 0. Số đối của {{a|b}} là <span class="math">−{{a|b}} = {{−a|b}} = {{a|−b}}</span>.</p>`,
      svg: S.numberLine({ min: -1, max: 1, div: 4, fracLabels: true, marks: [{ v: -0.75, label: '−3/4', color: S.C.orange }, { v: 0.75, label: '3/4', color: S.C.blue }] }),
      caption: '{{3|4}} và {{−3|4}} cách đều điểm 0.' },
    { title: 'Phép trừ phân số', html: `<p class="math">{{a|b}} − {{c|d}} = {{a|b}} + (−{{c|d}})</p><p>Ví dụ: {{3|4}} − {{5|6}} = {{9|12}} + {{−10|12}} = {{−1|12}}.</p>` },
    { title: 'Tính chất và dấu ngoặc', html: `<p>Phép cộng phân số có tính chất giao hoán, kết hợp, cộng với 0. Quy tắc dấu ngoặc giống với số nguyên.</p><p>Ví dụ tính nhanh: {{2|7}} + {{3|5}} + {{5|7}} = ({{2|7}} + {{5|7}}) + {{3|5}} = 1 + {{3|5}} = {{8|5}}.</p>` }
  ],
  summary: 'Cùng mẫu: cộng (trừ) tử, giữ mẫu. Khác mẫu: quy đồng trước. Số đối của {{a|b}} là {{−a|b}}. a − b = a + (−b). Dùng giao hoán, kết hợp, dấu ngoặc để tính nhanh; rút gọn kết quả.',
  examples: [
    { title: 'Cộng khác mẫu', problem: 'Tính {{−3|8}} + {{5|12}}.', solution: 'Mẫu chung 24: {{−9|24}} + {{10|24}} = <b>{{1|24}}</b>.' },
    { title: 'Trừ phân số', problem: 'Tính {{2|3}} − {{−1|4}}.', solution: '{{2|3}} + {{1|4}} = {{8|12}} + {{3|12}} = <b>{{11|12}}</b>.' },
    { title: 'Bài toán thực tế', problem: 'Một bể nước: vòi thứ nhất mỗi giờ chảy được {{1|4}} bể, vòi thứ hai mỗi giờ chảy được {{1|6}} bể. Nếu mở cả hai vòi thì mỗi giờ chảy được bao nhiêu phần bể?', solution: '{{1|4}} + {{1|6}} = {{3|12}} + {{2|12}} = <b>{{5|12}} bể</b>.' }
  ],
  exercises: [
    { question: 'Tính: {{5|6}} − {{3|4}}.', hints: ['Mẫu chung là 12.', '{{10|12}} − {{9|12}}.'], solution: '<b>{{1|12}}</b>.' },
    { question: 'Tính nhanh: {{−4|9}} + {{7|11}} + {{4|9}} + {{4|11}}.', hints: ['Gom {{−4|9}} với {{4|9}}.', 'Gom {{7|11}} với {{4|11}}.'], solution: '0 + 1 = <b>1</b>.' },
    { question: 'Tìm x biết x + {{1|3}} = {{3|4}}.', hints: ['x = {{3|4}} − {{1|3}}.', 'Mẫu chung 12.'], solution: 'x = {{9|12}} − {{4|12}} = <b>{{5|12}}</b>.' }
  ],
  quiz: [
    { type: 'short', requireSimplest: true, q: 'Tính {{2|7}} + {{3|7}} (dạng a/b, tối giản).', answer: '5/7', answerText: '{{5|7}}', calc: '2/7+3/7', explain: 'Cùng mẫu: {{5|7}}.' },
    { type: 'mcq', q: '{{1|2}} + {{1|3}} bằng:', options: ['{{2|5}}', '{{5|6}}', '{{1|6}}', '{{2|6}}'], answer: 1, calc: '1/2+1/3', explain: '{{3|6}} + {{2|6}} = {{5|6}}.' },
    { type: 'short', requireSimplest: true, q: 'Tính {{3|4}} − {{1|2}} (dạng a/b, tối giản).', answer: '1/4', answerText: '{{1|4}}', calc: '3/4-1/2', explain: '{{3|4}} − {{2|4}} = {{1|4}}.' },
    { type: 'mcq', q: 'Số đối của {{−5|7}} là:', options: ['{{5|−7}}', '{{5|7}}', '{{−7|5}}', '{{7|5}}'], answer: 1, calc: '5/7', explain: '−({{−5|7}}) = {{5|7}}.' },
    { type: 'short', requireSimplest: true, q: 'Tính {{−2|3}} + {{1|6}} (dạng a/b, tối giản).', answer: '-1/2', answerText: '{{−1|2}}', calc: '-2/3+1/6', explain: '{{−4|6}} + {{1|6}} = {{−3|6}} = {{−1|2}}.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: {{1|4}} + {{1|4}} = {{2|8}}.', answer: false, explain: '{{1|4}} + {{1|4}} = {{2|4}} = {{1|2}}.' },
    { type: 'short', requireSimplest: true, q: 'Tìm x biết x − {{2|5}} = {{1|10}} (dạng a/b, tối giản).', answer: '1/2', answerText: '{{1|2}}', calc: '1/10+2/5', explain: 'x = {{1|10}} + {{4|10}} = {{5|10}} = {{1|2}}.' },
    { type: 'mcq', q: 'Bạn Hà đọc {{1|3}} cuốn sách ngày thứ nhất, {{2|5}} cuốn ngày thứ hai. Hai ngày Hà đọc được:', options: ['{{3|8}} cuốn', '{{11|15}} cuốn', '{{2|15}} cuốn', '{{3|15}} cuốn'], answer: 1, calc: '1/3+2/5', explain: '{{5|15}} + {{6|15}} = {{11|15}}.' }
  ]
});
})();
