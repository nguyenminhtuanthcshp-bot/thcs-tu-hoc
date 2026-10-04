/* Toán 7 – Chương I. Luyện tập chung (sau Bài 2). Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('toan-7/c1-ltc-1', {
  objectives: [
    'Củng cố cách nhận biết, so sánh và biểu diễn số hữu tỉ trên trục số.',
    'Thực hiện thành thạo bốn phép tính cộng, trừ, nhân, chia số hữu tỉ.',
    'Biết chọn cách tính hợp lí và giải bài toán thực tế đơn giản.'
  ],
  intro: 'Buổi luyện tập này gom lại mọi thứ của Bài 1 và Bài 2. Mẹo chung: đổi hết về phân số có mẫu dương rồi mới tính hoặc so sánh.',
  steps: [
    { title: 'Nhắc lại: số hữu tỉ và trục số', html: `<p>Số hữu tỉ là số viết được dạng {{a|b}} với a, b nguyên, b ≠ 0. Mỗi số hữu tỉ ứng với <b>một điểm</b> trên trục số; số nằm bên trái thì nhỏ hơn.</p>
      <p>Để biểu diễn {{a|b}} (b &gt; 0), chia mỗi đoạn đơn vị thành b phần bằng nhau rồi đếm a phần từ gốc O (sang phải nếu a &gt; 0, sang trái nếu a &lt; 0).</p>`,
      svg: S.numberLine({ min: -2, max: 2, div: 3, width: 560, fracLabels: true, marks: [{ v: -4 / 3, label: '−4/3', color: S.C.orange }, { v: 1 / 3, label: '1/3', color: S.C.blue }, { v: 5 / 3, label: '5/3', color: S.C.green }] }),
      caption: 'Chia mỗi đơn vị thành 3 phần để biểu diễn các số có mẫu 3.' },
    { title: 'So sánh số hữu tỉ', html: `<p>Ba cách hay dùng:</p><ul><li>Quy đồng mẫu dương rồi so sánh tử.</li><li>Đổi ra số thập phân rồi so sánh.</li><li>So sánh với số trung gian (0, 1, −1, {{1|2}}…).</li></ul>
      <div class="box note">Số hữu tỉ dương luôn lớn hơn 0, số hữu tỉ âm luôn nhỏ hơn 0; vì vậy mọi số dương lớn hơn mọi số âm.</div>` },
    { title: 'Bốn phép tính', html: `<table class="tbl"><tr><th>Phép tính</th><th>Cách làm</th></tr><tr><td>Cộng, trừ</td><td>Quy đồng mẫu dương, cộng (trừ) tử</td></tr><tr><td>Nhân</td><td>Tử nhân tử, mẫu nhân mẫu (rút gọn trước nếu được)</td></tr><tr><td>Chia</td><td>Nhân với số nghịch đảo của số chia</td></tr></table>
      <p>Dấu của tích và thương: cùng dấu → dương; khác dấu → âm.</p>` },
    { title: 'Tính hợp lí', html: `<p>Trước khi tính, hãy nhìn xem có:</p><ul><li>các số đối nhau (tổng bằng 0);</li><li>các số cộng lại được số nguyên;</li><li>thừa số chung để dùng tính chất phân phối.</li></ul>
      <p class="math">{{5|8}} · 13 − {{5|8}} · 5 = {{5|8}} · (13 − 5) = {{5|8}} · 8 = 5</p>` }
  ],
  summary: 'Đổi về phân số mẫu dương; so sánh bằng quy đồng hoặc số trung gian; cộng trừ theo mẫu chung, nhân tử với tử, chia là nhân nghịch đảo; luôn tìm cách tính hợp lí.',
  examples: [
    { title: 'Sắp xếp', problem: 'Sắp xếp theo thứ tự tăng dần: 0,5; −{{3|4}}; {{2|3}}; −1.', solution: 'Hai số âm: −1 &lt; −{{3|4}} (vì 1 &gt; {{3|4}}). Hai số dương: 0,5 = {{3|6}} &lt; {{4|6}} = {{2|3}}.<br>Thứ tự tăng dần: −1; −{{3|4}}; 0,5; {{2|3}}.' },
    { title: 'Biểu thức nhiều phép tính', problem: 'Tính: ({{2|3}} − {{1|2}}) : {{5|6}}.', solution: '{{2|3}} − {{1|2}} = {{4|6}} − {{3|6}} = {{1|6}}. Rồi {{1|6}} : {{5|6}} = {{1|6}} · {{6|5}} = {{1|5}}.' },
    { title: 'Bài toán thực tế', problem: 'Một cửa hàng có 45 kg gạo. Buổi sáng bán {{1|3}} số gạo, buổi chiều bán {{2|5}} số gạo còn lại. Hỏi cửa hàng còn bao nhiêu kg gạo?', solution: 'Sáng bán: 45 · {{1|3}} = 15 (kg), còn 30 kg.<br>Chiều bán: 30 · {{2|5}} = 12 (kg).<br>Còn lại: 30 − 12 = <b>18 kg</b>.' }
  ],
  exercises: [
    { question: 'So sánh −{{5|6}} và −{{7|9}}.', hints: ['Mẫu chung của 6 và 9 là 18.', '−{{5|6}} = −{{15|18}}; −{{7|9}} = −{{14|18}}. Với số âm, số nào có giá trị tuyệt đối lớn hơn thì nhỏ hơn.'], solution: '−{{15|18}} &lt; −{{14|18}} nên −{{5|6}} &lt; −{{7|9}}.' },
    { question: 'Tính hợp lí: (−{{3|7}}) · {{5|11}} + (−{{3|7}}) · {{6|11}}.', hints: ['Hai tích có thừa số chung là −{{3|7}}.', '{{5|11}} + {{6|11}} = 1.'], solution: '(−{{3|7}}) · ({{5|11}} + {{6|11}}) = (−{{3|7}}) · 1 = −{{3|7}}.' },
    { question: 'Một ô tô đi quãng đường AB trong 3 giờ. Giờ đầu đi được {{1|3}} quãng đường, giờ thứ hai đi được {{2|5}} quãng đường. Giờ thứ ba ô tô đi được bao nhiêu phần quãng đường?', hints: ['Cả quãng đường là 1.', 'Lấy 1 trừ đi tổng phần đã đi trong hai giờ đầu.'], solution: '{{1|3}} + {{2|5}} = {{5|15}} + {{6|15}} = {{11|15}}. Giờ thứ ba đi: 1 − {{11|15}} = <b>{{4|15}}</b> quãng đường.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Số nào sau đây KHÔNG phải là số hữu tỉ âm?', options: ['−{{1|5}}', '{{−3|−4}}', '−0,2', '{{2|−7}}'], answer: 1, explain: '{{−3|−4}} = {{3|4}} &gt; 0 nên không phải số hữu tỉ âm.' },
    { type: 'short', calc: '-2/3 + 3/4', requireSimplest: true, q: 'Tính: −{{2|3}} + {{3|4}} (dạng a/b tối giản).', answer: ['1/12'], answerText: '1/12', explain: '−{{8|12}} + {{9|12}} = {{1|12}}.' },
    { type: 'short', calc: '(-5/6) * (9/10)', requireSimplest: true, q: 'Tính: (−{{5|6}}) · {{9|10}} (dạng a/b tối giản).', answer: ['-3/4'], answerText: '−3/4', explain: '{{−5 · 9|6 · 10}} = {{−45|60}} = −{{3|4}}.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: −{{4|5}} &gt; −{{5|6}}.', answer: true, explain: '−{{4|5}} = −{{24|30}}, −{{5|6}} = −{{25|30}}; −24 &gt; −25 nên khẳng định đúng.' },
    { type: 'short', calc: '(2/3 - 1/2) / (5/6)', requireSimplest: true, q: 'Tính: ({{2|3}} − {{1|2}}) : {{5|6}} (dạng a/b tối giản).', answer: ['1/5'], answerText: '1/5', explain: '{{1|6}} : {{5|6}} = {{1|6}} · {{6|5}} = {{1|5}}.' },
    { type: 'mcq', calc: '5/8 * 13 - 5/8 * 5', q: 'Giá trị của {{5|8}} · 13 − {{5|8}} · 5 là:', options: ['5', '8', '{{5|8}}', '10'], answer: 0, explain: '{{5|8}} · (13 − 5) = {{5|8}} · 8 = 5.' },
    { type: 'short', calc: '45 - 45/3 - (45 - 45/3) * 2/5', q: 'Có 45 kg gạo, bán {{1|3}} số gạo, rồi bán tiếp {{2|5}} số còn lại. Còn lại bao nhiêu kg?', unit: 'kg', answer: '18', explain: 'Còn 30 kg sau lần 1; lần 2 bán 12 kg; còn 18 kg.' },
    { type: 'short', calc: '-1.25 / 0.5', q: 'Tính: (−1,25) : 0,5.', answer: ['-2.5', '-5/2'], answerText: '−2,5', explain: '1,25 : 0,5 = 2,5; hai số khác dấu nên thương là −2,5.' }
  ]
});
})();
