/* Toán 6 – Bài 24. So sánh phân số. Hỗn số dương. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('toan-6/bai-24', {
  objectives: [
    'Quy đồng mẫu nhiều phân số.',
    'So sánh được hai phân số cùng mẫu, khác mẫu; so sánh phân số với 0 và với 1.',
    'Viết được phân số lớn hơn 1 dưới dạng hỗn số dương và ngược lại.'
  ],
  intro: 'An ăn {{2|5}} cái bánh, Bình ăn {{3|8}} cái bánh. Ai ăn nhiều hơn? Để trả lời, ta cần so sánh hai phân số khác mẫu.',
  steps: [
    { title: 'Quy đồng mẫu', html: `<p>Quy đồng mẫu là biến đổi các phân số về cùng một mẫu (thường chọn BCNN của các mẫu dương):</p>
      <ol><li>Tìm mẫu chung (BCNN các mẫu).</li><li>Tìm thừa số phụ: mẫu chung chia cho từng mẫu.</li><li>Nhân tử và mẫu của mỗi phân số với thừa số phụ tương ứng.</li></ol>
      <p>Ví dụ: {{2|5}} và {{3|8}}: mẫu chung 40 ⇒ {{16|40}} và {{15|40}}.</p>` },
    { title: 'So sánh hai phân số cùng mẫu (mẫu dương)', html: `<p>Phân số nào có <b>tử lớn hơn</b> thì lớn hơn: {{−3|7}} &lt; {{2|7}}; {{5|9}} &gt; {{4|9}}.</p>
      <p>Trên trục số, phân số lớn hơn nằm bên phải:</p>`,
      svg: S.numberLine({ min: -1, max: 2, div: 4, fracLabels: true, marks: [{ v: -0.25, label: '−1/4', color: S.C.orange }, { v: 0.75, label: '3/4', color: S.C.blue }, { v: 1.25, label: '5/4', color: S.C.green }] }),
      caption: '{{−1|4}} &lt; {{3|4}} &lt; {{5|4}}.' },
    { title: 'So sánh hai phân số khác mẫu', html: `<p>Viết hai phân số về cùng mẫu dương rồi so sánh tử. Ví dụ bài toán mở đầu: {{16|40}} &gt; {{15|40}} nên {{2|5}} &gt; {{3|8}}: An ăn nhiều hơn.</p>
      <p>Nhận xét: phân số có tử và mẫu cùng dấu thì <b>dương</b> (&gt; 0); khác dấu thì <b>âm</b> (&lt; 0). Phân số dương có tử lớn hơn mẫu thì lớn hơn 1.</p>` },
    { title: 'Hỗn số dương', html: `<p>Phân số dương lớn hơn 1 có thể viết thành <b>hỗn số</b>: phần nguyên và phần phân số (nhỏ hơn 1).</p>
      <p>{{9|4}} = 9 : 4 = 2 dư 1 ⇒ {{9|4}} = 2{{1|4}} (đọc “hai và một phần tư”).</p>`,
      svg: S.row([{ svg: S.pie({ parts: 4, shaded: 4, r: 40 }), caption: '1' }, { svg: S.pie({ parts: 4, shaded: 4, r: 40 }), caption: '1' }, { svg: S.pie({ parts: 4, shaded: 1, r: 40 }), caption: '1/4' }]),
      caption: '{{9|4}} = 2 + {{1|4}} = 2{{1|4}}.' },
    { title: 'Đổi hỗn số ra phân số', html: `<p class="math">a{{b|c}} = {{a · c + b|c}}</p><p>Ví dụ: 3{{2|5}} = {{3 · 5 + 2|5}} = {{17|5}}.</p>` }
  ],
  summary: 'Quy đồng: đưa về mẫu chung (BCNN). Cùng mẫu dương: tử lớn hơn thì lớn hơn. Khác mẫu: quy đồng rồi so sánh. Phân số dương lớn hơn 1 viết được thành hỗn số a{{b|c}} = {{ac + b|c}}.',
  examples: [
    { title: 'Quy đồng ba phân số', problem: 'Quy đồng mẫu: {{1|4}}; {{−5|6}}; {{7|12}}.', solution: 'Mẫu chung 12. {{1|4}} = {{3|12}}; {{−5|6}} = {{−10|12}}; {{7|12}} giữ nguyên.' },
    { title: 'So sánh', problem: 'So sánh {{−3|4}} và {{−5|6}}.', solution: 'Mẫu chung 12: {{−9|12}} và {{−10|12}}. Vì −9 &gt; −10 nên <b>{{−3|4}} &gt; {{−5|6}}</b>.' },
    { title: 'Hỗn số', problem: 'Viết {{23|6}} dưới dạng hỗn số và 4{{3|7}} dưới dạng phân số.', solution: '23 : 6 = 3 dư 5 ⇒ {{23|6}} = <b>3{{5|6}}</b>. 4{{3|7}} = {{4 · 7 + 3|7}} = <b>{{31|7}}</b>.' }
  ],
  exercises: [
    { question: 'Sắp xếp theo thứ tự tăng dần: {{1|2}}; {{−2|3}}; {{5|6}}; {{−1|6}}.', hints: ['Quy đồng mẫu 6.', 'So sánh các tử: 3; −4; 5; −1.'], solution: '<b>{{−2|3}} &lt; {{−1|6}} &lt; {{1|2}} &lt; {{5|6}}</b>.' },
    { question: 'So sánh {{7|8}} và {{8|9}}.', hints: ['Mẫu chung 72.', 'Hoặc so sánh phần bù tới 1: {{1|8}} và {{1|9}}.'], solution: '{{63|72}} &lt; {{64|72}} ⇒ <b>{{7|8}} &lt; {{8|9}}</b>.' },
    { question: 'Một quãng đường dài {{17|4}} km. Viết dưới dạng hỗn số.', hints: ['17 : 4 = 4 dư 1.', 'Phần nguyên 4, phần phân số {{1|4}}.'], solution: '<b>4{{1|4}} km</b>.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Phân số nào lớn nhất?', options: ['{{3|7}}', '{{5|7}}', '{{−6|7}}', '{{4|7}}'], answer: 1, calc: '5/7', explain: 'Cùng mẫu 7, tử 5 lớn nhất.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: {{−2|5}} &lt; 0.', answer: true, explain: 'Tử và mẫu khác dấu nên phân số âm.' },
    { type: 'mcq', q: 'Mẫu chung nhỏ nhất của {{1|6}} và {{3|8}} là:', options: ['48', '24', '14', '12'], answer: 1, calc: 'lcm(6,8)', explain: 'BCNN(6, 8) = 24.' },
    { type: 'mcq', q: 'Khẳng định nào đúng?', options: ['{{2|3}} &lt; {{3|5}}', '{{2|3}} &gt; {{3|5}}', '{{2|3}} = {{3|5}}', 'Không so sánh được'], answer: 1, explain: '{{10|15}} &gt; {{9|15}}.' },
    { type: 'short', requireSimplest: true, q: 'Viết hỗn số 2{{3|4}} dưới dạng phân số (dạng a/b, tối giản).', answer: '11/4', answerText: '{{11|4}}', calc: '2+3/4', explain: '{{2 · 4 + 3|4}} = {{11|4}}.' },
    { type: 'mcq', q: '{{17|5}} viết dưới dạng hỗn số là:', options: ['3{{2|5}}', '2{{7|5}}', '3{{5|2}}', '1{{7|5}}'], answer: 0, explain: '17 : 5 = 3 dư 2.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: {{−3|4}} &gt; {{−2|3}}.', answer: false, explain: '{{−9|12}} &lt; {{−8|12}} nên {{−3|4}} &lt; {{−2|3}}.' },
    { type: 'mcq', q: 'Hùng đi bộ {{3|4}} giờ, Lan đi bộ {{5|6}} giờ. Ai đi lâu hơn?', options: ['Hùng', 'Lan', 'Bằng nhau', 'Không xác định'], answer: 1, explain: '{{9|12}} &lt; {{10|12}} nên Lan đi lâu hơn.' }
  ]
});
})();
