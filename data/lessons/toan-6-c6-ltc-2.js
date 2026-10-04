/* Toán 6 – Chương VI. Luyện tập chung (sau Bài 27). Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('toan-6/c6-ltc-2', {
  objectives: [
    'Thực hiện thành thạo bốn phép tính với phân số, theo đúng thứ tự.',
    'Vận dụng tính chất các phép tính để tính nhanh.',
    'Giải bài toán thực tế về giá trị phân số của một số và tìm một số biết giá trị phân số của nó.'
  ],
  intro: 'Luyện tập Bài 25 – Bài 27. Hãy rút gọn ở mọi bước có thể để phép tính gọn nhẹ.',
  steps: [
    { title: 'Cộng, trừ', html: `<p>Quy đồng mẫu, cộng/trừ tử. a − b = a + (−b).</p>` },
    { title: 'Nhân, chia', html: `<p>Nhân tử với tử, mẫu với mẫu; chia là nhân với nghịch đảo. Rút gọn chéo trước khi nhân.</p>` },
    { title: 'Tính nhanh', html: `<p>Nhận ra thừa số chung để dùng tính chất phân phối: {{a|b}} · x + {{a|b}} · y = {{a|b}} · (x + y). Gom các phân số có tổng là số nguyên.</p>` },
    { title: 'Hai bài toán về phân số', html: `<p>Biết tổng tìm phần: nhân với phân số. Biết phần tìm tổng: chia cho phân số.</p>` }
  ],
  summary: 'Cộng trừ: quy đồng. Nhân: tử × tử, mẫu × mẫu. Chia: nhân nghịch đảo. Tính nhanh bằng phân phối, kết hợp. Bài toán thực tế: nhân (tìm phần) hoặc chia (tìm tổng).',
  examples: [
    { title: 'Thứ tự phép tính', problem: 'Tính {{1|2}} + {{3|4}} : {{3|2}} − {{1|3}}.', solution: 'Chia trước: {{3|4}} · {{2|3}} = {{1|2}}. Rồi {{1|2}} + {{1|2}} − {{1|3}} = 1 − {{1|3}} = <b>{{2|3}}</b>.' },
    { title: 'Tính nhanh', problem: 'Tính {{−5|9}} · {{4|7}} + {{−5|9}} · {{3|7}} + {{5|9}}.', solution: '{{−5|9}} · ({{4|7}} + {{3|7}}) + {{5|9}} = {{−5|9}} + {{5|9}} = <b>0</b>.' },
    { title: 'Thực tế', problem: 'Một mảnh vải dài 12 m. Lần đầu cắt {{1|4}} mảnh vải, lần sau cắt {{2|3}} phần còn lại. Mảnh vải còn bao nhiêu mét?', solution: 'Lần đầu 3 m ⇒ còn 9 m. Lần sau 9 · {{2|3}} = 6 m ⇒ còn <b>3 m</b>.' }
  ],
  exercises: [
    { question: 'Tính ({{2|3}} − {{1|4}}) · {{12|5}}.', hints: ['Trong ngoặc: {{8|12}} − {{3|12}} = {{5|12}}.', '{{5|12}} · {{12|5}}.'], solution: '<b>1</b>.' },
    { question: 'Tìm x biết {{2|3}}x − {{1|2}} = {{5|6}}.', hints: ['{{2|3}}x = {{5|6}} + {{1|2}} = {{4|3}}.', 'x = {{4|3}} : {{2|3}}.'], solution: '<b>x = 2</b>.' },
    { question: 'Bạn Nga tiêu {{3|5}} số tiền để mua sách và còn lại 48 000 đồng. Hỏi lúc đầu Nga có bao nhiêu tiền?', hints: ['Phần còn lại chiếm 1 − {{3|5}} = {{2|5}} số tiền.', '48 000 : {{2|5}}.'], solution: '<b>120 000 đồng</b>.' }
  ],
  quiz: [
    { type: 'short', requireSimplest: true, q: 'Tính {{5|6}} − {{1|3}} (dạng a/b, tối giản).', answer: '1/2', answerText: '{{1|2}}', calc: '5/6-1/3', explain: '{{5|6}} − {{2|6}} = {{3|6}} = {{1|2}}.' },
    { type: 'short', requireSimplest: true, q: 'Tính {{3|8}} · {{16|9}} (dạng a/b, tối giản).', answer: '2/3', answerText: '{{2|3}}', calc: '3/8*16/9', explain: 'Rút gọn chéo: {{1|1}} · {{2|3}}.' },
    { type: 'short', requireSimplest: true, q: 'Tính {{5|4}} : {{15|8}} (dạng a/b, tối giản).', answer: '2/3', answerText: '{{2|3}}', calc: '(5/4)/(15/8)', explain: '{{5|4}} · {{8|15}} = {{2|3}}.' },
    { type: 'mcq', q: 'Giá trị của {{1|2}} + {{1|2}} · {{1|2}} là:', options: ['{{1|2}}', '{{3|4}}', '1', '{{1|4}}'], answer: 1, calc: '1/2+1/2*1/2', explain: 'Nhân trước: {{1|4}}; {{1|2}} + {{1|4}} = {{3|4}}.' },
    { type: 'short', q: 'Tìm x biết x : {{3|4}} = 8.', answer: '6', calc: '8*3/4', explain: 'x = 8 · {{3|4}} = 6.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: {{2|3}} : 2 = {{1|3}}.', answer: true, explain: '{{2|3}} · {{1|2}} = {{1|3}}.' },
    { type: 'short', q: 'Một bể chứa 1 200 lít nước. Đã dùng {{3|8}} lượng nước. Còn lại bao nhiêu lít?', answer: '750', unit: 'lít', calc: '1200-1200*3/8', explain: 'Dùng 450 lít, còn 750 lít.' },
    { type: 'short', q: '{{3|4}} số cây của vườn là 42 cây. Vườn có bao nhiêu cây?', answer: '56', calc: '42/(3/4)', explain: '42 : {{3|4}} = 56.' }
  ]
});
