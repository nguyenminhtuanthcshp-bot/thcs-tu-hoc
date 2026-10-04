/* Toán 6 – Bài 23. Mở rộng phân số. Phân số bằng nhau. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('toan-6/bai-23', {
  objectives: [
    'Hiểu phân số {{a|b}} với a, b là số nguyên, b ≠ 0; nhận biết phân số có tử hoặc mẫu âm.',
    'Nhận biết hai phân số bằng nhau theo quy tắc a · d = b · c.',
    'Vận dụng tính chất cơ bản của phân số để viết phân số bằng nhau, rút gọn phân số, đưa phân số về mẫu dương.'
  ],
  intro: 'Ở Tiểu học, em đã biết phân số như {{3|4}} cái bánh. Nhưng nhiệt độ giảm 3 °C trong 4 giờ thì mỗi giờ thay đổi (−3) : 4 = {{−3|4}} °C. Ta cần mở rộng phân số để tử và mẫu có thể là số nguyên âm.',
  steps: [
    { title: 'Phân số với tử và mẫu là số nguyên', html: `<p>Với a, b ∈ ℤ, b ≠ 0, ta gọi <span class="math">{{a|b}}</span> là một <b>phân số</b>; a là tử số, b là mẫu số. Phân số {{a|b}} chính là kết quả của phép chia a : b.</p>
      <p>Ví dụ: {{−3|4}}, {{5|−7}}, {{0|6}} đều là phân số. Mọi số nguyên n đều viết được dạng phân số {{n|1}}.</p>
      <p>Trên trục số, các phân số âm nằm bên trái điểm 0:</p>`,
      svg: S.numberLine({ min: -1, max: 1, div: 4, fracLabels: true, marks: [{ v: -0.75, label: '−3/4', color: S.C.orange }, { v: 0.5, label: '1/2', color: S.C.blue }] }),
      caption: 'Điểm biểu diễn các phân số {{−3|4}} và {{1|2}} trên trục số.' },
    { title: 'Hai phân số bằng nhau', html: `<p>Hai phân số {{a|b}} và {{c|d}} bằng nhau nếu <span class="math">a · d = b · c</span> (tích “chéo” bằng nhau).</p>
      <p>Ví dụ: {{3|4}} = {{6|8}} vì 3 · 8 = 4 · 6 = 24. Còn {{2|3}} ≠ {{3|5}} vì 2 · 5 ≠ 3 · 3.</p>`,
      svg: S.row([{ svg: S.pie({ parts: 4, shaded: 3, label: '3/4' }), caption: '3 phần của 4' }, { svg: S.pie({ parts: 8, shaded: 6, label: '6/8' }), caption: '6 phần của 8' }]),
      caption: 'Phần tô màu bằng nhau nên {{3|4}} = {{6|8}}.' },
    { title: 'Tính chất cơ bản của phân số', html: `<ul><li>Nhân cả tử và mẫu với cùng một số nguyên khác 0, được phân số bằng phân số đã cho: {{a|b}} = {{a · m|b · m}} (m ≠ 0).</li>
      <li>Chia cả tử và mẫu cho cùng một ước chung n của chúng: {{a|b}} = {{a : n|b : n}}.</li></ul>`,
      svg: S.fracBars({ bars: [{ parts: 2, shaded: 1, label: '1/2' }, { parts: 4, shaded: 2, label: '2/4' }, { parts: 8, shaded: 4, label: '4/8' }] }),
      caption: '{{1|2}} = {{2|4}} = {{4|8}}: cùng một độ dài băng giấy.' },
    { title: 'Đưa về mẫu dương', html: `<p>Nhân cả tử và mẫu với −1: {{a|−b}} = {{−a|b}}. Ví dụ {{5|−7}} = {{−5|7}}; {{−2|−9}} = {{2|9}}. Ta thường viết phân số với <b>mẫu dương</b>.</p>` },
    { title: 'Rút gọn phân số', html: `<p>Chia cả tử và mẫu cho một ước chung (khác 1 và −1). Khi chia cho <b>ƯCLN</b> của tử và mẫu (lấy phần số), ta được <b>phân số tối giản</b>.</p>
      <p>Ví dụ: {{−18|24}} = {{−18 : 6|24 : 6}} = {{−3|4}}.</p>` }
  ],
  summary: 'Phân số {{a|b}} (a, b ∈ ℤ, b ≠ 0). {{a|b}} = {{c|d}} khi ad = bc. Nhân hoặc chia cả tử và mẫu cho cùng một số khác 0 (ước chung) được phân số bằng nó. Rút gọn đến tối giản bằng cách chia cho ƯCLN.',
  examples: [
    { title: 'Kiểm tra bằng nhau', problem: 'Các cặp phân số sau có bằng nhau không? a) {{−4|6}} và {{6|−9}}; b) {{3|5}} và {{9|16}}.', solution: 'a) (−4) · (−9) = 36 và 6 · 6 = 36 ⇒ <b>bằng nhau</b>.<br>b) 3 · 16 = 48, 5 · 9 = 45 ⇒ <b>không bằng nhau</b>.' },
    { title: 'Tìm số chưa biết', problem: 'Tìm x biết {{x|12}} = {{−5|6}}.', solution: 'x · 6 = 12 · (−5) = −60 ⇒ <b>x = −10</b>.' },
    { title: 'Rút gọn', problem: 'Rút gọn về phân số tối giản: {{−45|60}}.', solution: 'ƯCLN(45, 60) = 15 ⇒ {{−45|60}} = <b>{{−3|4}}</b>.' }
  ],
  exercises: [
    { question: 'Viết phân số {{7|−11}} về dạng có mẫu dương.', hints: ['Nhân cả tử và mẫu với −1.', 'Tử 7 thành −7, mẫu −11 thành 11.'], solution: '<b>{{−7|11}}</b>.' },
    { question: 'Tìm x biết {{3|x}} = {{−9|15}}.', hints: ['Dùng quy tắc tích chéo: 3 · 15 = x · (−9).', 'x = 45 : (−9).'], solution: '<b>x = −5</b>.' },
    { question: 'Viết ba phân số bằng {{2|5}} có mẫu lần lượt là 10, 20, −15.', hints: ['10 = 5 · 2; 20 = 5 · 4; −15 = 5 · (−3).', 'Nhân tử với cùng số tương ứng.'], solution: '{{4|10}}; {{8|20}}; <b>{{−6|−15}}</b>.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Cách viết nào không phải là phân số?', options: ['{{−3|7}}', '{{0|5}}', '{{4|0}}', '{{6|−1}}'], answer: 2, explain: 'Mẫu số phải khác 0.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: {{−2|3}} = {{4|−6}}.', answer: true, explain: '(−2) · (−6) = 12 = 3 · 4.' },
    { type: 'short', q: 'Tìm x biết {{x|8}} = {{3|4}}.', answer: '6', calc: '8*3/4', explain: 'x · 4 = 24 ⇒ x = 6.' },
    { type: 'mcq', q: 'Phân số tối giản của {{−16|24}} là:', options: ['{{−8|12}}', '{{−4|6}}', '{{−2|3}}', '{{2|3}}'], answer: 2, explain: 'Chia cả tử và mẫu cho ƯCLN(16, 24) = 8. Hai phương án đầu bằng nhưng chưa tối giản.' },
    { type: 'short', q: 'Tìm x biết {{−6|x}} = {{3|5}}.', answer: '-10', answerText: '−10', calc: '-6*5/3', explain: '−6 · 5 = 3x ⇒ x = −10.' },
    { type: 'mcq', q: 'Phân số nào bằng {{5|−8}}?', options: ['{{5|8}}', '{{−5|8}}', '{{8|5}}', '{{−8|5}}'], answer: 1, calc: '5/-8', explain: 'Nhân cả tử và mẫu với −1.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: {{0|7}} = 0.', answer: true, explain: '0 : 7 = 0.' },
    { type: 'short', requireSimplest: true, q: 'Nhiệt độ giảm 9 °C trong 12 giờ. Trung bình mỗi giờ nhiệt độ thay đổi bao nhiêu độ (viết dưới dạng phân số tối giản, ví dụ −1/2)?', answer: '-3/4', answerText: '{{−3|4}}', calc: '-9/12', explain: '(−9) : 12 = {{−9|12}} = {{−3|4}} °C.' }
  ]
});
})();
