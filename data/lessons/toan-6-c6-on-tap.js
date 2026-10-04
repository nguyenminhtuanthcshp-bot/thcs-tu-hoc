/* Toán 6 – Bài tập cuối chương VI. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('toan-6/c6-on-tap', {
  objectives: [
    'Hệ thống hoá kiến thức chương VI: phân số, phân số bằng nhau, so sánh, hỗn số, bốn phép tính, hai bài toán về phân số.',
    'Vận dụng tổng hợp vào bài tập và tình huống thực tế.',
    'Tự đánh giá mức độ nắm vững chương VI.'
  ],
  intro: 'Ôn tập chương VI – Phân số. Chương này rất quan trọng cho lớp 7 (số hữu tỉ), hãy làm cẩn thận!',
  steps: [
    { title: 'Khái niệm và tính chất', html: `<p>Phân số {{a|b}} (a, b ∈ ℤ, b ≠ 0); {{a|b}} = {{c|d}} ⇔ ad = bc; tính chất cơ bản; rút gọn, tối giản.</p>`,
      svg: S.fracBars({ bars: [{ parts: 3, shaded: 2, label: '2/3' }, { parts: 6, shaded: 4, label: '4/6' }, { parts: 12, shaded: 8, label: '8/12' }] }), caption: '{{2|3}} = {{4|6}} = {{8|12}}.' },
    { title: 'So sánh và hỗn số', html: `<p>Quy đồng mẫu dương rồi so sánh tử. Hỗn số a{{b|c}} = {{ac + b|c}}.</p>`,
      svg: S.numberLine({ min: -1, max: 2, div: 2, fracLabels: true, marks: [{ v: -0.5, label: '−1/2' }, { v: 1.5, label: '3/2' }] }), caption: '{{3|2}} = 1{{1|2}} nằm giữa 1 và 2.' },
    { title: 'Bốn phép tính', html: `<p>Cộng/trừ: quy đồng. Nhân: tử × tử, mẫu × mẫu. Chia: nhân với nghịch đảo.</p>` },
    { title: 'Hai bài toán', html: `<p>{{m|n}} của b: b · {{m|n}}. Số có {{m|n}} bằng a: a : {{m|n}}.</p>` }
  ],
  summary: 'Chương VI: phân số với tử, mẫu nguyên; phân số bằng nhau; so sánh; hỗn số; cộng, trừ, nhân, chia phân số; hai bài toán về phân số.',
  examples: [
    { title: 'Biểu thức', problem: 'Tính (−{{3|4}} + {{5|6}}) : {{1|12}}.', solution: '−{{9|12}} + {{10|12}} = {{1|12}}; {{1|12}} : {{1|12}} = <b>1</b>.' },
    { title: 'So sánh', problem: 'Sắp xếp tăng dần: {{−5|6}}; {{2|3}}; {{−3|4}}; {{1|2}}.', solution: 'Mẫu chung 12: −10; 8; −9; 6 ⇒ <b>{{−5|6}} &lt; {{−3|4}} &lt; {{1|2}} &lt; {{2|3}}</b>.' },
    { title: 'Thực tế', problem: 'Một lớp có 45 học sinh. Số học sinh giỏi chiếm {{1|5}} số học sinh cả lớp; số học sinh khá bằng {{5|3}} số học sinh giỏi; còn lại là học sinh đạt. Tính số học sinh mỗi loại.', solution: 'Giỏi: 45 · {{1|5}} = <b>9</b> em. Khá: 9 · {{5|3}} = <b>15</b> em. Đạt: 45 − 9 − 15 = <b>21</b> em.' }
  ],
  exercises: [
    { question: 'Tìm x biết {{x|6}} = {{−10|12}}.', hints: ['Rút gọn {{−10|12}} = {{−5|6}}.', 'So sánh tử.'], solution: '<b>x = −5</b>.' },
    { question: 'Tính 2{{1|3}} + 1{{1|2}}.', hints: ['Đổi ra phân số: {{7|3}} + {{3|2}}.', 'Mẫu chung 6.'], solution: '{{14|6}} + {{9|6}} = {{23|6}} = <b>3{{5|6}}</b>.' },
    { question: 'Một người đi xe đạp trong 3 giờ: giờ đầu đi được {{1|3}} quãng đường, giờ thứ hai đi được {{2|5}} quãng đường, giờ thứ ba đi 16 km cuối. Tính quãng đường.', hints: ['Giờ thứ ba chiếm 1 − {{1|3}} − {{2|5}} = {{4|15}} quãng đường.', '16 : {{4|15}}.'], solution: '<b>60 km</b>.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: {{−6|8}} = {{9|−12}}.', answer: true, explain: '(−6) · (−12) = 72 = 8 · 9.' },
    { type: 'mcq', q: 'Phân số nhỏ nhất trong {{−1|2}}; {{−2|3}}; {{−3|4}}; {{−1|4}} là:', options: ['{{−1|2}}', '{{−2|3}}', '{{−3|4}}', '{{−1|4}}'], answer: 2, calc: '-3/4', explain: 'Mẫu chung 12: −6; −8; −9; −3.' },
    { type: 'short', requireSimplest: true, q: 'Tính {{3|5}} + {{−7|10}} (dạng a/b, tối giản).', answer: '-1/10', answerText: '{{−1|10}}', calc: '3/5-7/10', explain: '{{6|10}} − {{7|10}} = {{−1|10}}.' },
    { type: 'short', requireSimplest: true, q: 'Tính {{−9|10}} · {{5|3}} (dạng a/b, tối giản).', answer: '-3/2', answerText: '{{−3|2}}', calc: '-9/10*5/3', explain: '{{−45|30}} = {{−3|2}}.' },
    { type: 'short', requireSimplest: true, q: 'Tính {{7|8}} : (−{{7|4}}) (dạng a/b, tối giản).', answer: '-1/2', answerText: '{{−1|2}}', calc: '(7/8)/(-7/4)', explain: '{{7|8}} · {{−4|7}} = {{−1|2}}.' },
    { type: 'mcq', q: '3{{3|4}} viết dưới dạng phân số là:', options: ['{{9|4}}', '{{15|4}}', '{{12|4}}', '{{33|4}}'], answer: 1, calc: '3+3/4', explain: '{{3 · 4 + 3|4}} = {{15|4}}.' },
    { type: 'short', q: '{{3|8}} của 64 là bao nhiêu?', answer: '24', calc: '64*3/8', explain: '64 : 8 · 3 = 24.' },
    { type: 'short', q: 'Tìm số biết {{2|9}} của nó bằng 14.', answer: '63', calc: '14/(2/9)', explain: '14 · {{9|2}} = 63.' }
  ]
});
})();
