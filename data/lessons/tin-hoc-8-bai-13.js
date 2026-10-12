/* Tin học 8 – Bài 13. Biểu diễn dữ liệu. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-8/bai-13', {
  objectives: [
    'Giải thích được khái niệm biến, hằng trong chương trình; tạo và sử dụng được biến trong Scratch.',
    'Nhận biết được các kiểu dữ liệu cơ bản: số, xâu kí tự, logic.',
    'Tính được giá trị các biểu thức số học, so sánh và logic.'
  ],
  intro: 'Trong trò chơi, điểm số tăng dần mỗi khi nhân vật ăn được một quả táo. Con số ấy được lưu ở đâu? Trong một <b>biến</b>.',
  steps: [
    { title: 'Biến và hằng', html: `<p><b>Biến</b> là tên đại diện cho một vùng nhớ lưu dữ liệu, giá trị có thể <b>thay đổi</b> khi chương trình chạy (ví dụ: điểm, số lần). <b>Hằng</b> là giá trị <b>không đổi</b> (ví dụ: 3,14; 60 giây/phút).</p>
      <p>Trong Scratch: nhóm <b>Các biến số</b> → Tạo một biến; dùng khối <b>đặt … thành …</b> và <b>thay đổi … một lượng …</b>.</p>`,
      svg: S.blocks({ title: 'Biến điểm trong trò chơi', stack: [{ k: 'event', s: 'khi bấm vào lá cờ xanh' }, { k: 'variables', s: 'đặt điểm thành 0' }, { k: 'control', s: 'lặp lại 5 lần', inner: [{ k: 'variables', s: 'thay đổi điểm một lượng 10' }] }, { k: 'looks', s: 'nói (điểm)' }] }), caption: 'Sau 5 lần lặp, biến điểm bằng 50.' },
    { title: 'Kiểu dữ liệu', html: `<p>Các kiểu dữ liệu cơ bản:</p>`,
      svg: S.table({ title: 'Kiểu dữ liệu cơ bản', head: ['Kiểu', 'Ví dụ', 'Phép toán thường dùng'], rows: [['Số', '15; −3; 2,5', '+ − × :, chia lấy dư'], ['Xâu kí tự', '"Xin chào"; "8A"', 'nối, lấy độ dài'], ['Logic', 'đúng / sai', 'và, hoặc, không']], colW: 170 }), caption: 'Mỗi kiểu dữ liệu có phép toán riêng.' },
    { title: 'Biểu thức số học và so sánh', html: `<ul><li>Số học: <code>7 + 3 × 2 = 13</code>; <b>phần dư</b> của 17 chia 5 là 2; làm tròn 4,6 được 5.</li><li>So sánh (&gt;, &lt;, =) cho kết quả <b>logic</b>: <code>8 &gt; 5</code> là đúng; <code>3 = 4</code> là sai.</li></ul>` },
    { title: 'Biểu thức logic', html: `<ul><li><b>A và B</b>: đúng khi cả A và B đều đúng.</li><li><b>A hoặc B</b>: đúng khi ít nhất một trong hai đúng.</li><li><b>không A</b>: đảo giá trị của A.</li></ul><p>Ví dụ: (điểm ≥ 5) và (điểm ≤ 10) kiểm tra điểm có nằm trong đoạn từ 5 đến 10.</p>
      <div class="box key">Biến thay đổi được, hằng thì không. Kiểu: số, xâu, logic.</div>` }
  ],
  summary: 'Biến lưu dữ liệu có thể thay đổi; hằng không đổi. Scratch: tạo biến, đặt … thành, thay đổi … một lượng. Kiểu dữ liệu: số, xâu kí tự, logic. Biểu thức số học (+ − × :, chia lấy dư, làm tròn), so sánh cho kết quả logic, phép logic và, hoặc, không.',
  examples: [
    { title: 'Giá trị biến', problem: 'đặt x thành 4; thay đổi x một lượng 3; thay đổi x một lượng −1. x bằng bao nhiêu?', solution: '4 + 3 − 1 = 6.' },
    { title: 'Phần dư', problem: 'Phần dư của 23 chia 4? Dùng phần dư để kiểm tra số chẵn thế nào?', solution: '3. Số chẵn khi phần dư chia cho 2 bằng 0.' },
    { title: 'Biểu thức logic', problem: 'Với a = 7: (a > 5) và (a < 6) đúng hay sai? (a > 5) hoặc (a < 6)?', solution: 'Và: đúng và sai → sai. Hoặc: đúng.' }
  ],
  exercises: [
    { question: 'Phân biệt biến và hằng, cho ví dụ mỗi loại trong trò chơi bắt táo.', hints: ['Giá trị nào thay đổi?', 'Giá trị nào cố định?'], solution: 'Biến: điểm, số mạng còn lại. Hằng: số điểm cho mỗi quả táo (10), thời gian một lượt chơi cố định.' },
    { question: 'Tính: phần dư của 50 chia 7; làm tròn 7,5; 6 + 18 : 3.', hints: ['50 = 7 × 7 + 1.', 'Chia trước cộng sau.'], solution: '1; 8; 12.' },
    { question: 'Viết biểu thức logic kiểm tra số n là số có hai chữ số.', hints: ['n từ 10 đến 99.', 'Dùng phép “và”.'], solution: '(n ≥ 10) và (n ≤ 99) (trong Scratch: (n > 9) và (n < 100)).' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Giá trị của biến có thể thay đổi khi chương trình chạy.', answer: true, explain: 'Đúng.' },
    { type: 'short', q: 'Phần dư của 29 chia 6 là bao nhiêu?', answer: '5', calc: '29%6', explain: '29 = 6 × 4 + 5.' },
    { type: 'short', q: 'đặt s thành 10; lặp lại 4 lần: thay đổi s một lượng 5. Giá trị s cuối cùng?', answer: '30', calc: '10+4*5', explain: '10 + 20.' },
    { type: 'mcq', q: '"Lớp 8A" thuộc kiểu dữ liệu:', options: ['Số', 'Xâu kí tự', 'Logic', 'Hằng số'], answer: 1, explain: 'Xâu.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Biểu thức (5 > 3) và (2 > 4) có giá trị đúng.', answer: false, explain: 'Vế sau sai.' },
    { type: 'mcq', q: 'Biểu thức (x > 10) hoặc (x < 0) đúng khi x bằng:', options: ['5', '0', '−2', '10'], answer: 2, explain: '−2 < 0.' },
    { type: 'short', q: 'Giá trị của biểu thức 8 + 12 : 4 × 2 là bao nhiêu?', answer: '14', calc: '8+12/4*2', explain: '8 + 6.' },
    { type: 'mcq', q: 'Kết quả của phép so sánh có kiểu:', options: ['Số', 'Xâu', 'Logic', 'Hình ảnh'], answer: 2, explain: 'Đúng/sai.' }
  ]
});
})();
