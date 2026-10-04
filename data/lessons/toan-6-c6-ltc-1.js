/* Toán 6 – Chương VI. Luyện tập chung (sau Bài 24). Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('toan-6/c6-ltc-1', {
  objectives: [
    'Củng cố khái niệm phân số, phân số bằng nhau, rút gọn phân số.',
    'Quy đồng mẫu và so sánh phân số thành thạo.',
    'Chuyển đổi giữa phân số và hỗn số dương.'
  ],
  intro: 'Luyện tập Bài 23 và Bài 24. Hãy luôn rút gọn phân số trước khi so sánh để số nhỏ và dễ tính hơn.',
  steps: [
    { title: 'Phân số bằng nhau', html: `<p>{{a|b}} = {{c|d}} ⇔ ad = bc. Nhân/chia tử và mẫu với cùng số khác 0 được phân số bằng nó.</p>` },
    { title: 'Rút gọn và tối giản', html: `<p>Chia tử và mẫu cho ƯCLN (phần số) để được phân số tối giản. Viết phân số với mẫu dương.</p>` },
    { title: 'So sánh', html: `<p>Quy đồng mẫu dương rồi so sánh tử. Mẹo: so sánh với 0, với 1, hoặc với một phân số trung gian như {{1|2}}.</p>`,
      svg: S.numberLine({ min: 0, max: 1, div: 6, fracLabels: true, marks: [{ v: 2 / 6, label: '1/3', color: S.C.orange }, { v: 0.5, label: '1/2', color: S.C.muted }, { v: 5 / 6, label: '5/6', color: S.C.blue }] }),
      caption: '{{1|3}} &lt; {{1|2}} &lt; {{5|6}}: dùng {{1|2}} làm mốc trung gian.' },
    { title: 'Hỗn số', html: `<p>{{a|b}} (a &gt; b &gt; 0): chia a cho b được thương q, dư r ⇒ q{{r|b}}. Ngược lại q{{r|b}} = {{qb + r|b}}.</p>` }
  ],
  summary: 'Phân số bằng nhau (tích chéo), rút gọn về tối giản, quy đồng và so sánh, đổi phân số ↔ hỗn số.',
  examples: [
    { title: 'Rút gọn rồi so sánh', problem: 'So sánh {{15|25}} và {{18|30}}.', solution: '{{15|25}} = {{3|5}}; {{18|30}} = {{3|5}} ⇒ <b>hai phân số bằng nhau</b>.' },
    { title: 'Phân số trung gian', problem: 'So sánh {{3|7}} và {{5|9}} bằng cách so sánh với {{1|2}}.', solution: '{{3|7}} &lt; {{3,5|7}} = {{1|2}} (vì 3 &lt; 3,5), còn {{5|9}} &gt; {{1|2}} (vì 5 &gt; 4,5). Vậy <b>{{3|7}} &lt; {{5|9}}</b>.' },
    { title: 'Bài toán thực tế', problem: 'Lớp 6A có {{3|5}} số học sinh thích bóng đá, lớp 6B có {{5|8}} số học sinh thích bóng đá. Lớp nào có tỉ lệ thích bóng đá cao hơn?', solution: 'Quy đồng mẫu 40: {{24|40}} và {{25|40}} ⇒ <b>lớp 6B</b> có tỉ lệ cao hơn.' }
  ],
  exercises: [
    { question: 'Rút gọn: {{−84|120}}.', hints: ['Tìm ƯCLN(84, 120).', 'ƯCLN = 12.'], solution: '<b>{{−7|10}}</b>.' },
    { question: 'Tìm các số nguyên x sao cho {{x|5}} nằm giữa {{−3|5}} và {{2|5}} (không lấy hai đầu).', hints: ['Cùng mẫu 5 nên chỉ cần −3 &lt; x &lt; 2.', 'Liệt kê các số nguyên.'], solution: 'x ∈ <b>{−2; −1; 0; 1}</b>.' },
    { question: 'Viết các phân số {{11|3}}, {{25|7}} dưới dạng hỗn số rồi so sánh.', hints: ['11 : 3 = 3 dư 2; 25 : 7 = 3 dư 4.', 'Cùng phần nguyên 3, so sánh {{2|3}} và {{4|7}}.'], solution: '3{{2|3}} và 3{{4|7}}; {{2|3}} = {{14|21}} &gt; {{12|21}} = {{4|7}} ⇒ <b>{{11|3}} &gt; {{25|7}}</b>.' }
  ],
  quiz: [
    { type: 'short', q: 'Tìm x biết {{x|15}} = {{4|5}}.', answer: '12', calc: '15*4/5', explain: 'x = 15 · 4 : 5 = 12.' },
    { type: 'mcq', q: 'Phân số tối giản của {{36|−48}} là:', options: ['{{3|4}}', '{{−3|4}}', '{{−9|12}}', '{{−6|8}}'], answer: 1, explain: 'Chia cho 12 và đưa dấu lên tử: {{−3|4}}.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: {{4|9}} &lt; {{1|2}}.', answer: true, explain: '{{8|18}} &lt; {{9|18}}.' },
    { type: 'mcq', q: 'Sắp xếp giảm dần nào đúng?', options: ['{{3|4}}; {{2|3}}; {{1|2}}', '{{1|2}}; {{2|3}}; {{3|4}}', '{{2|3}}; {{3|4}}; {{1|2}}', '{{3|4}}; {{1|2}}; {{2|3}}'], answer: 0, explain: '{{9|12}} &gt; {{8|12}} &gt; {{6|12}}.' },
    { type: 'short', requireSimplest: true, q: 'Viết 5{{1|3}} dưới dạng phân số (dạng a/b, tối giản).', answer: '16/3', answerText: '{{16|3}}', calc: '5+1/3', explain: '{{5 · 3 + 1|3}} = {{16|3}}.' },
    { type: 'mcq', q: 'Hỗn số của {{29|8}} là:', options: ['3{{5|8}}', '3{{3|8}}', '2{{13|8}}', '4{{3|8}}'], answer: 0, explain: '29 = 8 · 3 + 5.' },
    { type: 'short', q: 'Có bao nhiêu số nguyên x để {{x|7}} là phân số dương nhỏ hơn 1?', answer: '6', calc: '6', explain: '0 &lt; x &lt; 7: x ∈ {1; …; 6}.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: {{−5|−8}} là phân số dương.', answer: true, explain: 'Tử và mẫu cùng dấu.' }
  ]
});
})();
