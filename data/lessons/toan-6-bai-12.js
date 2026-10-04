/* Toán 6 – Bài 12. Bội chung. Bội chung nhỏ nhất. Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('toan-6/bai-12', {
  objectives: [
    'Hiểu khái niệm bội chung, bội chung nhỏ nhất (BCNN).',
    'Tìm BCNN bằng liệt kê và bằng phân tích ra thừa số nguyên tố; tìm bội chung thông qua BCNN.',
    'Quy đồng mẫu các phân số bằng BCNN của các mẫu.',
    'Giải bài toán thực tế về các sự kiện lặp lại.'
  ],
  intro: 'Xe buýt tuyến A cứ 10 phút có một chuyến, tuyến B cứ 15 phút có một chuyến. Lúc 7 giờ hai xe cùng xuất phát. Lần gần nhất hai xe lại cùng xuất phát là lúc mấy giờ? Đó là bài toán BCNN.',
  steps: [
    { title: 'Bội chung', html: `<p>Bội chung của hai hay nhiều số là số là bội của <b>tất cả</b> các số đó. Kí hiệu BC(a, b).</p>
      <p>B(4) = {0; 4; 8; 12; 16; 20; 24; …}, B(6) = {0; 6; 12; 18; 24; …} ⇒ BC(4, 6) = {0; 12; 24; 36; …}.</p>` },
    { title: 'Bội chung nhỏ nhất', html: `<p>BCNN(a, b) là số <b>nhỏ nhất khác 0</b> trong BC(a, b). Ví dụ BCNN(4, 6) = 12.</p>
      <p>Mọi bội chung đều là bội của BCNN: BC(4, 6) = B(12).</p>
      <p>Nếu a ⋮ b thì BCNN(a, b) = a. Nếu a, b nguyên tố cùng nhau thì BCNN(a, b) = a · b.</p>` },
    { title: 'Tìm BCNN bằng phân tích ra thừa số nguyên tố', html: `<ol><li>Phân tích mỗi số ra thừa số nguyên tố.</li><li>Chọn <b>tất cả</b> các thừa số nguyên tố (chung và riêng).</li><li>Lấy mỗi thừa số với số mũ <b>lớn nhất</b>, rồi nhân lại.</li></ol>
      <p>Ví dụ: 12 = 2<sup>2</sup> · 3; 18 = 2 · 3<sup>2</sup> ⇒ BCNN = 2<sup>2</sup> · 3<sup>2</sup> = 36.</p>
      <p>So sánh: ƯCLN lấy thừa số <b>chung</b>, mũ <b>nhỏ nhất</b>; BCNN lấy <b>tất cả</b>, mũ <b>lớn nhất</b>.</p>` },
    { title: 'Quy đồng mẫu phân số', html: `<p>Để quy đồng {{5|12}} và {{7|18}}, lấy mẫu chung là BCNN(12, 18) = 36:</p>
      <p class="math">{{5|12}} = {{5 · 3|12 · 3}} = {{15|36}}; &nbsp; {{7|18}} = {{7 · 2|18 · 2}} = {{14|36}}</p>` },
    { title: 'Bài toán thực tế', html: `<p>Dấu hiệu: “cùng lúc lặp lại”, “ít nhất”, “nhỏ nhất” ⇒ nghĩ đến BCNN.</p>
      <p>Bài toán xe buýt: BCNN(10, 15) = 30 phút. Hai xe lại cùng xuất phát lúc 7 giờ 30 phút.</p>` }
  ],
  summary: 'BCNN(a, b) là số nhỏ nhất khác 0 trong BC(a, b); BC(a, b) = B(BCNN(a, b)). Tìm BCNN: lấy tất cả thừa số nguyên tố với số mũ lớn nhất. Dùng BCNN của các mẫu để quy đồng phân số.',
  examples: [
    { title: 'Tìm BCNN', problem: 'Tìm BCNN(8, 12, 30).', solution: '8 = 2<sup>3</sup>; 12 = 2<sup>2</sup> · 3; 30 = 2 · 3 · 5. BCNN = 2<sup>3</sup> · 3 · 5 = <b>120</b>.' },
    { title: 'Bội chung trong khoảng', problem: 'Tìm các bội chung của 6 và 9 nhỏ hơn 60.', solution: 'BCNN(6, 9) = 18 ⇒ BC(6, 9) = B(18) = {0; 18; 36; 54; 72; …}. Nhỏ hơn 60: <b>0; 18; 36; 54</b>.' },
    { title: 'Xếp hàng', problem: 'Số học sinh khối 6 của một trường trong khoảng 200 đến 300. Khi xếp hàng 8, hàng 10, hàng 12 đều vừa đủ. Tính số học sinh.', solution: 'Số học sinh là bội chung của 8, 10, 12. BCNN = 2<sup>3</sup> · 3 · 5 = 120 ⇒ BC = {0; 120; 240; 360; …}. Trong khoảng 200–300: <b>240 học sinh</b>.' }
  ],
  exercises: [
    { question: 'Tìm BCNN(15, 20).', hints: ['15 = 3 · 5; 20 = 2<sup>2</sup> · 5.', 'Lấy 2<sup>2</sup>, 3, 5.'], solution: 'BCNN = 2<sup>2</sup> · 3 · 5 = <b>60</b>.' },
    { question: 'Quy đồng mẫu các phân số {{3|8}} và {{5|6}}.', hints: ['Mẫu chung là BCNN(8, 6).', 'BCNN(8, 6) = 24.'], solution: '{{3|8}} = <b>{{9|24}}</b>; {{5|6}} = <b>{{20|24}}</b>.' },
    { question: 'Ba chiếc đèn nháy lần lượt sau mỗi 4 giây, 6 giây và 9 giây. Chúng cùng nháy lúc 20 giờ. Sau ít nhất bao nhiêu giây chúng lại cùng nháy?', hints: ['Cần tìm BCNN(4, 6, 9).', '4 = 2<sup>2</sup>; 6 = 2 · 3; 9 = 3<sup>2</sup>.'], solution: 'BCNN = 2<sup>2</sup> · 3<sup>2</sup> = <b>36 giây</b>.' }
  ],
  quiz: [
    { type: 'short', q: 'Tìm BCNN(9, 12).', answer: '36', calc: 'lcm(9,12)', explain: '9 = 3<sup>2</sup>; 12 = 2<sup>2</sup> · 3 ⇒ 2<sup>2</sup> · 3<sup>2</sup> = 36.' },
    { type: 'short', q: 'Tìm BCNN(7, 8).', answer: '56', calc: 'lcm(7,8)', explain: '7 và 8 nguyên tố cùng nhau ⇒ BCNN = 7 · 8 = 56.' },
    { type: 'short', q: 'Tìm BCNN(5, 20).', answer: '20', calc: 'lcm(5,20)', explain: '20 ⋮ 5 nên BCNN = 20.' },
    { type: 'mcq', q: 'Khi tìm BCNN bằng phân tích ra thừa số nguyên tố, ta lấy:', options: ['Thừa số chung, số mũ nhỏ nhất', 'Thừa số chung và riêng, số mũ lớn nhất', 'Thừa số chung, số mũ lớn nhất', 'Thừa số riêng, số mũ nhỏ nhất'], answer: 1, explain: 'BCNN: tất cả thừa số, mũ lớn nhất.' },
    { type: 'mcq', q: 'Mẫu chung nhỏ nhất để quy đồng {{1|6}} và {{3|10}} là:', options: ['60', '16', '30', '20'], answer: 2, calc: 'lcm(6,10)', explain: 'BCNN(6, 10) = 30.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Số 0 là bội chung nhỏ nhất của 4 và 6.', answer: false, explain: 'BCNN là số nhỏ nhất khác 0 trong tập bội chung: BCNN(4, 6) = 12.' },
    { type: 'short', q: 'Tìm BCNN(6, 10, 15).', answer: '30', calc: 'lcm(lcm(6,10),15)', explain: '2 · 3 · 5 = 30.' },
    { type: 'mcq', q: 'Hai bạn trực nhật: An cứ 4 ngày trực một lần, Bình cứ 6 ngày trực một lần. Hôm nay cả hai cùng trực. Sau ít nhất bao nhiêu ngày hai bạn lại cùng trực?', options: ['24', '10', '12', '2'], answer: 2, calc: 'lcm(4,6)', explain: 'BCNN(4, 6) = 12 ngày.' }
  ]
});
