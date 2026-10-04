/* Toán 6 – Bài 31. Một số bài toán về tỉ số và tỉ số phần trăm. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('toan-6/bai-31', {
  objectives: [
    'Hiểu tỉ số, tỉ số phần trăm của hai đại lượng (cùng đơn vị).',
    'Tính được tỉ số phần trăm của hai số.',
    'Tìm được giá trị phần trăm của một số và tìm một số khi biết giá trị phần trăm của nó; giải bài toán lãi suất, giảm giá.'
  ],
  intro: 'Cửa hàng giảm giá 30%, lãi suất ngân hàng 6% một năm, lớp em có 45% bạn nữ… Phần trăm có mặt ở khắp nơi trong đời sống.',
  steps: [
    { title: 'Tỉ số của hai số', html: `<p>Tỉ số của a và b (b ≠ 0) là thương a : b, kí hiệu <span class="math">a : b</span> hoặc {{a|b}}.</p><p>Khi nói tỉ số của hai đại lượng, hai đại lượng phải <b>cùng loại và cùng đơn vị</b>. Ví dụ: tỉ số của 30 cm và 2 m là 30 : 200 = {{3|20}}.</p>` },
    { title: 'Tỉ số phần trăm', html: `<p>Tỉ số phần trăm của a và b là <span class="math">{{a · 100|b}}%</span>.</p><p>Ví dụ: lớp có 40 bạn, 14 bạn nữ ⇒ tỉ số phần trăm số bạn nữ là {{14 · 100|40}}% = 35%.</p>`,
      svg: S.draw({ w: 330, h: 270, items: [{ grid: [15, 15, 10, 10, 24], filled: 35, fill: S.C.orangeL }, { text: [290, 140, '35%'], color: S.C.orange, bold: true, size: 20 }] }),
      caption: '35 ô trong 100 ô được tô màu: 35%.' },
    { title: 'Tìm giá trị phần trăm của một số', html: `<p>Muốn tìm m% của số b, ta tính <span class="math">b · {{m|100}}</span>.</p><p>Ví dụ: 15% của 240 000 đồng là 240 000 · {{15|100}} = 36 000 đồng.</p>` },
    { title: 'Tìm một số biết giá trị phần trăm của nó', html: `<p>Muốn tìm một số biết m% của nó bằng a, ta tính <span class="math">a : {{m|100}}</span>.</p><p>Ví dụ: 20% số tiền là 50 000 đồng ⇒ số tiền là 50 000 : {{20|100}} = 250 000 đồng.</p>` },
    { title: 'Bài toán giảm giá, lãi suất', html: `<ul><li>Giá sau khi giảm m%: giá gốc · (100% − m%).</li><li>Tiền lãi sau 1 năm với lãi suất r%/năm: tiền gửi · {{r|100}}.</li></ul><p>Ví dụ: áo giá 350 000 đồng giảm 20% ⇒ giá mới 350 000 · 80% = 280 000 đồng.</p>` }
  ],
  summary: 'Tỉ số a : b; tỉ số phần trăm {{a · 100|b}}%. m% của b là b · {{m|100}}. Số có m% bằng a là a : {{m|100}}. Giảm m% thì giá mới bằng (100 − m)% giá gốc.',
  examples: [
    { title: 'Tỉ số phần trăm', problem: 'Một mảnh vườn 250 m² trồng rau trên 60 m². Tính tỉ số phần trăm diện tích trồng rau.', solution: '{{60 · 100|250}}% = <b>24%</b>.' },
    { title: 'Giảm giá', problem: 'Chiếc balo giá 420 000 đồng, được giảm 15%. Hỏi giá sau khi giảm?', solution: 'Số tiền giảm: 420 000 · 15% = 63 000 đồng. Giá mới: <b>357 000 đồng</b>.' },
    { title: 'Lãi suất', problem: 'Bác Lan gửi tiết kiệm 50 triệu đồng với lãi suất 6%/năm. Sau 1 năm bác nhận được cả gốc lẫn lãi bao nhiêu?', solution: 'Lãi: 50 · 6% = 3 triệu đồng. Cả gốc lẫn lãi: <b>53 triệu đồng</b>.' }
  ],
  exercises: [
    { question: 'Tính tỉ số phần trăm của 18 và 72.', hints: ['{{18 · 100|72}}%.', '18 : 72 = 0,25.'], solution: '<b>25%</b>.' },
    { question: 'Trong một kì thi, 85% học sinh đạt, tức là 340 em. Có bao nhiêu học sinh dự thi?', hints: ['Đây là bài toán tìm một số biết giá trị phần trăm.', '340 : {{85|100}}.'], solution: '<b>400 học sinh</b>.' },
    { question: 'Tỉ số của 45 phút và 2 giờ là bao nhiêu?', hints: ['Đổi cùng đơn vị: 2 giờ = 120 phút.', 'Rút gọn {{45|120}}.'], solution: '<b>{{3|8}}</b>.' }
  ],
  quiz: [
    { type: 'short', q: 'Tỉ số phần trăm của 12 và 48 là bao nhiêu phần trăm?', answer: '25', unit: '%', calc: '12*100/48', explain: '{{12 · 100|48}} = 25%.' },
    { type: 'short', q: '30% của 150 là bao nhiêu?', answer: '45', calc: '150*30/100', explain: '150 · 0,3 = 45.' },
    { type: 'short', q: 'Tìm một số biết 40% của nó là 60.', answer: '150', calc: '60/(40/100)', explain: '60 : 0,4 = 150.' },
    { type: 'mcq', q: 'Tỉ số của 50 cm và 2 m là:', options: ['25', '{{1|4}}', '{{5|2}}', '4'], answer: 1, calc: '50/200', explain: '50 : 200 = {{1|4}}.' },
    { type: 'mcq', q: 'Đôi giày giá 500 000 đồng giảm 30%. Giá mới là:', options: ['150 000 đồng', '350 000 đồng', '470 000 đồng', '200 000 đồng'], answer: 1, calc: '500000*0.7', explain: '500 000 · 70% = 350 000 đồng.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: 50% của một số bằng một nửa số đó.', answer: true, explain: '50% = {{1|2}}.' },
    { type: 'short', q: 'Gửi 20 triệu đồng, lãi suất 5%/năm. Sau 1 năm tiền lãi là bao nhiêu triệu đồng?', answer: '1', calc: '20*5/100', explain: '20 · 5% = 1 triệu đồng.' },
    { type: 'short', q: 'Lớp có 36 học sinh, 9 bạn đạt giải. Tỉ số phần trăm số bạn đạt giải là bao nhiêu phần trăm?', answer: '25', unit: '%', calc: '9*100/36', explain: '{{9 · 100|36}} = 25%.' }
  ]
});
})();
