/* Toán 6 – Bài 2. Cách ghi số tự nhiên. Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('toan-6/bai-2', {
  objectives: [
    'Đọc và viết được số tự nhiên trong hệ thập phân.',
    'Phân biệt được “số” và “chữ số”; biết giá trị của mỗi chữ số phụ thuộc vào vị trí của nó.',
    'Viết được số tự nhiên thành tổng giá trị các chữ số của nó.',
    'Đọc và viết được các số La Mã từ 1 đến 30.'
  ],
  intro: 'Chỉ với 10 kí hiệu 0, 1, 2, …, 9, ta có thể viết được mọi số tự nhiên, dù lớn đến đâu. Bí mật nằm ở <b>vị trí</b> của các chữ số!',
  steps: [
    { title: 'Chữ số và số', html: `<p>Ta dùng <b>10 chữ số</b> 0; 1; 2; 3; 4; 5; 6; 7; 8; 9 để ghi mọi số tự nhiên.</p>
      <p>Một số có thể có một hoặc nhiều chữ số. Ví dụ: số 7 có một chữ số; số 2 026 có bốn chữ số.</p>
      <div class="box tip">Đừng nhầm: “số 25” là một số; còn 2 và 5 là hai <b>chữ số</b> tạo nên số đó.</div>` },
    { title: 'Hệ thập phân: giá trị theo vị trí', html: `<p>Trong hệ thập phân, cứ <b>10 đơn vị</b> ở một hàng thì bằng <b>1 đơn vị</b> ở hàng liền trước nó (10 đơn vị = 1 chục, 10 chục = 1 trăm, …).</p>
      <p>Vì vậy giá trị của mỗi chữ số phụ thuộc vào vị trí của nó. Trong số 3 333:</p>
      <table class="tbl"><tr><th>Chữ số 3 ở hàng</th><td>nghìn</td><td>trăm</td><td>chục</td><td>đơn vị</td></tr><tr><th>Có giá trị</th><td>3 000</td><td>300</td><td>30</td><td>3</td></tr></table>
      <p>Khi viết số có nhiều chữ số, ta tách thành từng <b>lớp ba chữ số</b> từ phải sang trái cho dễ đọc: 12 345 678 đọc là “mười hai triệu ba trăm bốn mươi lăm nghìn sáu trăm bảy mươi tám”.</p>` },
    { title: 'Viết số thành tổng giá trị các chữ số', html: `<p>Mỗi số tự nhiên đều viết được thành tổng giá trị các chữ số của nó. Ví dụ:</p>
      <p class="math">4 506 = 4 × 1 000 + 5 × 100 + 0 × 10 + 6</p>
      <p>Tổng quát, với các chữ số a, b, c (a ≠ 0):</p>
      <p class="math"><span class="ol">ab</span> = a × 10 + b; &nbsp;&nbsp; <span class="ol">abc</span> = a × 100 + b × 10 + c</p>
      <div class="box note">Dấu gạch ngang trên đầu <span class="ol">abc</span> cho biết đây là một số có ba chữ số, không phải tích a · b · c.</div>` },
    { title: 'Số chục, số trăm khác chữ số hàng chục, hàng trăm', html: `<p>Với số 4 235:</p><ul><li>Chữ số hàng trăm là <b>2</b>, nhưng <b>số trăm</b> là <b>42</b> (vì 4 235 có 42 trăm).</li><li>Chữ số hàng chục là <b>3</b>, nhưng <b>số chục</b> là <b>423</b>.</li></ul>
      <div class="box tip">Mẹo: muốn tìm số chục, bỏ đi chữ số hàng đơn vị; muốn tìm số trăm, bỏ đi hai chữ số cuối.</div>` },
    { title: 'Số La Mã', html: `<p>Người La Mã cổ dùng các kí hiệu: <b>I = 1</b>; <b>V = 5</b>; <b>X = 10</b>.</p>
      <ul><li>Viết kí hiệu nhỏ hơn đứng <b>sau</b> thì cộng thêm: VI = 5 + 1 = 6; XII = 10 + 1 + 1 = 12.</li>
      <li>Hai trường hợp đặc biệt: <b>IV = 4</b> (5 − 1) và <b>IX = 9</b> (10 − 1).</li>
      <li>Một kí hiệu không được lặp lại quá ba lần liền nhau: viết 4 là IV chứ không viết IIII.</li></ul>
      <p>Ví dụ: 14 = X + IV = <b>XIV</b>; 19 = X + IX = <b>XIX</b>; 27 = XX + VII = <b>XXVII</b>; 30 = <b>XXX</b>.</p>` }
  ],
  summary: 'Giá trị của chữ số phụ thuộc vào vị trí: <span class="ol">abc</span> = a × 100 + b × 10 + c. Số La Mã: I = 1, V = 5, X = 10; IV = 4, IX = 9.',
  examples: [
    { title: 'Đọc và viết số', problem: 'a) Viết số: “năm mươi hai nghìn không trăm linh bảy”.<br>b) Đọc số 3 008 100.', solution: 'a) 52 007.<br>b) Tách lớp: 3 | 008 | 100 → “ba triệu không trăm linh tám nghìn một trăm”.' },
    { title: 'Viết thành tổng', problem: 'Viết số 5 207 thành tổng giá trị các chữ số của nó.', solution: '5 207 = 5 × 1 000 + 2 × 100 + 0 × 10 + 7 (có thể viết gọn 5 × 1 000 + 2 × 100 + 7).' },
    { title: 'Số La Mã', problem: 'a) Đọc các số La Mã: XIV; XXIX.<br>b) Viết số 19 và 26 bằng số La Mã.', solution: 'a) XIV = 10 + 4 = 14; XXIX = 20 + 9 = 29.<br>b) 19 = XIX; 26 = XXVI.' }
  ],
  exercises: [
    { question: 'Cho số 72 509. Hãy cho biết: chữ số hàng trăm; số trăm; giá trị của chữ số 7.', hints: ['Viết số vào bảng các hàng: chục nghìn, nghìn, trăm, chục, đơn vị.', 'Số trăm: bỏ hai chữ số cuối (0 và 9). Chữ số 7 đứng ở hàng chục nghìn.'], solution: 'Chữ số hàng trăm là 5; số trăm là 725; chữ số 7 có giá trị 70 000.' },
    { question: 'Viết các số sau bằng số La Mã: 24; 16; 30.', hints: ['Tách số thành chục và đơn vị: 24 = 20 + 4.', '20 = XX, 4 = IV, 6 = VI.'], solution: '24 = XXIV; 16 = XVI; 30 = XXX.' },
    { question: 'Dùng cả ba chữ số 0; 3; 7, hãy viết tất cả các số tự nhiên có ba chữ số khác nhau.', hints: ['Chữ số hàng trăm không thể là 0.', 'Hàng trăm là 3 thì hai chữ số còn lại (0 và 7) đổi chỗ được mấy cách? Làm tương tự với hàng trăm là 7.'], solution: 'Hàng trăm là 3: 307; 370. Hàng trăm là 7: 703; 730. Có tất cả <b>4 số</b>.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Số “ba triệu không trăm hai mươi nghìn năm trăm” được viết là:', options: ['3 020 500', '3 200 500', '3 002 500', '320 500'], answer: 0, explain: 'Tách lớp: 3 triệu | 020 nghìn | 500 đơn vị → 3 020 500.' },
    { type: 'short', q: 'Chữ số hàng chục của số 4 628 là bao nhiêu?', answer: '2', explain: 'Các chữ số từ phải sang trái: 8 (đơn vị), 2 (chục), 6 (trăm), 4 (nghìn).' },
    { type: 'short', q: 'Số chục của số 4 628 là bao nhiêu?', answer: '462', explain: 'Bỏ chữ số hàng đơn vị, ta được số chục là 462.' },
    { type: 'mcq', q: 'Số La Mã XIX biểu diễn số:', options: ['21', '19', '11', '9'], answer: 1, explain: 'XIX = X + IX = 10 + 9 = 19.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Số 4 được viết bằng số La Mã là IIII.', answer: false, explain: 'Không lặp một kí hiệu quá ba lần liền nhau; số 4 viết là IV.' },
    { type: 'mcq', q: 'Trong số 25 318, chữ số 5 có giá trị là:', options: ['5', '500', '5 000', '50 000'], answer: 2, explain: 'Chữ số 5 đứng ở hàng nghìn nên có giá trị 5 000.' },
    { type: 'short', q: 'Viết số tự nhiên nhỏ nhất có bốn chữ số khác nhau.', answer: '1023', answerText: '1 023', explain: 'Hàng nghìn nhỏ nhất khác 0 là 1, các hàng tiếp theo chọn nhỏ nhất và khác nhau: 0, 2, 3 → 1 023.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: 7 095 = 7 × 1 000 + 9 × 10 + 5.', answer: true, explain: '7 095 = 7 × 1 000 + 0 × 100 + 9 × 10 + 5; số hạng 0 × 100 bằng 0 nên có thể bỏ đi.' }
  ]
});
