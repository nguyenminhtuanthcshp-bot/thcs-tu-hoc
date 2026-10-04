/* Toán 7 – Bài 2. Cộng, trừ, nhân, chia số hữu tỉ. Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('toan-7/bai-2', {
  objectives: [
    'Thực hiện được các phép cộng, trừ, nhân, chia số hữu tỉ.',
    'Vận dụng được các tính chất giao hoán, kết hợp, phân phối để tính nhanh, tính hợp lí.',
    'Giải được một số bài toán thực tế có sử dụng các phép tính với số hữu tỉ.'
  ],
  intro: 'Các phép tính với số hữu tỉ thực chất là các phép tính với phân số mà em đã học ở lớp 6 – chỉ cần cẩn thận thêm với dấu “−”.',
  steps: [
    { title: 'Cộng và trừ số hữu tỉ', html: `<p>Viết các số hữu tỉ dưới dạng phân số <b>cùng mẫu dương</b>, rồi cộng (trừ) các tử và giữ nguyên mẫu:</p>
      <p class="math">{{a|m}} + {{b|m}} = {{a + b|m}}; &nbsp; {{a|m}} − {{b|m}} = {{a − b|m}}</p>
      <p>Nếu các số đều ở dạng số thập phân, có thể cộng trừ như số thập phân.</p>
      <div class="box note">Phép cộng số hữu tỉ có tính chất giao hoán, kết hợp, cộng với 0, cộng với số đối – giống phép cộng số nguyên.</div>` },
    { title: 'Nhân số hữu tỉ', html: `<p class="math">{{a|b}} · {{c|d}} = {{a · c|b · d}}</p>
      <p>Nên rút gọn trước khi nhân để số nhỏ gọn hơn. Ví dụ: {{−3|4}} · {{8|9}} = {{−3 · 8|4 · 9}} = {{−1 · 2|1 · 3}} = −{{2|3}}.</p>
      <p>Tính chất phân phối: <span class="math">x · (y + z) = x · y + x · z</span>.</p>` },
    { title: 'Chia số hữu tỉ', html: `<p>Chia cho một số khác 0 bằng nhân với <b>số nghịch đảo</b> của nó:</p>
      <p class="math">{{a|b}} : {{c|d}} = {{a|b}} · {{d|c}} &nbsp; (với {{c|d}} ≠ 0)</p>
      <p>Số nghịch đảo của {{c|d}} là {{d|c}}. Ví dụ: nghịch đảo của −{{2|3}} là −{{3|2}}; nghịch đảo của 5 là {{1|5}}.</p>` },
    { title: 'Quy tắc dấu', html: `<p>Giống như với số nguyên:</p><ul><li>Tích (thương) của hai số <b>cùng dấu</b> là số dương.</li><li>Tích (thương) của hai số <b>khác dấu</b> là số âm.</li></ul>
      <p>Ví dụ: (−{{2|5}}) · (−{{5|4}}) = {{10|20}} = {{1|2}}.</p>` },
    { title: 'Tính nhanh, tính hợp lí', html: `<p>Quan sát biểu thức, tìm các số đối nhau, các số cộng lại tròn, hoặc thừa số chung:</p>
      <p class="math">−{{5|9}} + {{4|7}} + {{5|9}} = (−{{5|9}} + {{5|9}}) + {{4|7}} = {{4|7}}</p>
      <p class="math">{{3|7}} · {{2|5}} + {{3|7}} · {{3|5}} = {{3|7}} · ({{2|5}} + {{3|5}}) = {{3|7}} · 1 = {{3|7}}</p>` }
  ],
  summary: 'Cộng/trừ: đưa về cùng mẫu dương. Nhân: tử nhân tử, mẫu nhân mẫu. Chia: nhân với số nghịch đảo. Cùng dấu → dương, khác dấu → âm.',
  examples: [
    { title: 'Cộng hai số hữu tỉ', problem: 'Tính: −{{2|3}} + 0,5.', solution: '0,5 = {{1|2}}. Ta có −{{2|3}} + {{1|2}} = {{−4|6}} + {{3|6}} = {{−1|6}} = −{{1|6}}.' },
    { title: 'Nhân và chia', problem: 'Tính: a) (−{{3|4}}) · {{8|9}}; &nbsp; b) −{{5|6}} : {{10|3}}.', solution: 'a) (−{{3|4}}) · {{8|9}} = {{−24|36}} = −{{2|3}}.<br>b) −{{5|6}} : {{10|3}} = −{{5|6}} · {{3|10}} = {{−15|60}} = −{{1|4}}.' },
    { title: 'Tính hợp lí', problem: 'Tính hợp lí: {{3|7}} · {{2|5}} + {{3|7}} · {{3|5}}.', solution: 'Đặt thừa số chung {{3|7}}: {{3|7}} · ({{2|5}} + {{3|5}}) = {{3|7}} · 1 = {{3|7}}.' }
  ],
  exercises: [
    { question: 'Tính: {{1|4}} − {{5|6}}.', hints: ['Mẫu chung nhỏ nhất của 4 và 6 là 12.', '{{1|4}} = {{3|12}}; {{5|6}} = {{10|12}}.'], solution: '{{3|12}} − {{10|12}} = −{{7|12}}.' },
    { question: 'Tính: (−1,2) · {{2|3}}.', hints: ['Đổi −1,2 thành phân số: −1,2 = −{{6|5}}.', 'Nhân tử với tử, mẫu với mẫu rồi rút gọn; tích hai số khác dấu là số âm.'], solution: '−{{6|5}} · {{2|3}} = −{{12|15}} = −{{4|5}} (= −0,8).' },
    { question: 'Một bể nước đang chứa {{2|5}} bể. Người ta bơm thêm {{1|3}} bể nữa. Hỏi phần bể chưa có nước chiếm bao nhiêu phần của bể?', hints: ['Tính lượng nước sau khi bơm: {{2|5}} + {{1|3}}.', 'Cả bể là 1. Lấy 1 trừ đi lượng nước đã có.'], solution: 'Nước đã có: {{2|5}} + {{1|3}} = {{6|15}} + {{5|15}} = {{11|15}} (bể).<br>Phần chưa có nước: 1 − {{11|15}} = <b>{{4|15}} bể</b>.' }
  ],
  quiz: [
    { type: 'short', calc: '1/2 + (-1/3)', requireSimplest: true, q: 'Tính: {{1|2}} + (−{{1|3}}). Viết kết quả dạng a/b tối giản.', answer: ['1/6'], answerText: '1/6', explain: '{{3|6}} − {{2|6}} = {{1|6}}.' },
    { type: 'mcq', q: 'Kết quả của (−{{2|5}}) · (−{{5|4}}) là:', options: ['−{{1|2}}', '{{1|2}}', '{{10|9}}', '−{{7|9}}'], answer: 1, explain: 'Hai số cùng dấu nên tích dương: {{2 · 5|5 · 4}} = {{10|20}} = {{1|2}}.' },
    { type: 'short', calc: '(3/4) / (-3/8)', q: 'Tính: {{3|4}} : (−{{3|8}}).', answer: '-2', answerText: '−2', explain: '{{3|4}} · (−{{8|3}}) = −{{24|12}} = −2.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Số nghịch đảo của −{{2|3}} là {{3|2}}.', answer: false, explain: 'Số nghịch đảo của −{{2|3}} là −{{3|2}} (vì −{{2|3}} · (−{{3|2}}) = 1).' },
    { type: 'mcq', q: 'Kết quả của 0,25 − {{3|4}} là:', options: ['{{1|2}}', '−{{1|2}}', '−1', '{{1|4}}'], answer: 1, explain: '0,25 = {{1|4}}; {{1|4}} − {{3|4}} = −{{2|4}} = −{{1|2}}.' },
    { type: 'short', calc: '-5/9 + 4/7 + 5/9', requireSimplest: true, q: 'Tính nhanh: −{{5|9}} + {{4|7}} + {{5|9}}. Viết kết quả dạng a/b tối giản.', answer: ['4/7'], answerText: '4/7', explain: '−{{5|9}} và {{5|9}} là hai số đối nhau, tổng bằng 0. Kết quả: {{4|7}}.' },
    { type: 'mcq', q: 'Kết quả của {{2|3}} · (−{{9|4}}) là:', options: ['−{{3|2}}', '{{3|2}}', '−{{18|7}}', '−{{2|3}}'], answer: 0, explain: '{{2|3}} · (−{{9|4}}) = −{{18|12}} = −{{3|2}}.' },
    { type: 'short', calc: '3/4 * 1/3', q: 'Một sợi dây dài {{3|4}} m. Bạn Lan cắt đi {{1|3}} sợi dây. Đoạn dây cắt đi dài bao nhiêu mét? (viết dạng a/b hoặc số thập phân)', answer: ['1/4', '0.25'], answerText: '1/4 m (0,25 m)', explain: '{{1|3}} của {{3|4}} m là {{3|4}} · {{1|3}} = {{3|12}} = {{1|4}} (m).' }
  ]
});
