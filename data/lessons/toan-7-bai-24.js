/* Toán 7 – Bài 24. Biểu thức đại số. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, C = S.C;
THCS.registerLesson('toan-7/bai-24', {
  objectives: [
    'Nhận biết biểu thức số và biểu thức đại số; biến số trong biểu thức đại số.',
    'Viết được biểu thức đại số biểu thị các đại lượng trong tình huống thực tế.',
    'Tính được giá trị của biểu thức đại số tại các giá trị cho trước của biến.'
  ],
  intro: 'Tiền điện tháng này = giá mỗi số điện × số điện đã dùng. Nếu gọi số điện là x thì ta có một “công thức có chữ” – đó là biểu thức đại số.',
  steps: [
    { title: 'Biểu thức số và biểu thức đại số', html: `<p><b>Biểu thức số</b> gồm các số nối với nhau bởi dấu phép tính: 3 · 5 − 2<sup>2</sup>.</p>
      <p><b>Biểu thức đại số</b> gồm các số và các chữ (đại diện cho số) nối với nhau bởi dấu phép tính và dấu ngoặc: 2(a + b), x<sup>2</sup> − 3x + 1.</p>
      <p>Các chữ đại diện cho số tuỳ ý gọi là <b>biến số</b> (biến).</p>` },
    { title: 'Quy ước viết gọn', html: `<ul><li>Không viết dấu nhân giữa các biến hoặc giữa số và biến: 3 · x viết là 3x; x · y viết là xy.</li><li>Viết số trước, biến sau: x · 5 viết là 5x.</li><li>1 · x viết là x; (−1) · x viết là −x.</li></ul>` },
    { title: 'Viết biểu thức đại số', html: `<p>Hình chữ nhật có chiều dài a, chiều rộng b:</p><ul><li>Chu vi: 2(a + b).</li><li>Diện tích: ab.</li></ul>`,
      svg: S.draw({ w: 320, h: 170, items: [{ poly: [[40, 30], [260, 30], [260, 130], [40, 130]], fill: C.blueL, color: C.blue }, { text: [150, 152, 'a'], bold: true, color: C.orange, size: 16 }, { text: [276, 85, 'b'], bold: true, color: C.orange, size: 16 }, { text: [150, 78, 'S = ab'], bold: true, size: 18 }, { text: [150, 102, 'P = 2(a + b)'], size: 15 }] }),
      caption: 'Công thức chu vi, diện tích là những biểu thức đại số quen thuộc.' },
    { title: 'Giá trị của biểu thức đại số', html: `<p>Để tính giá trị của biểu thức đại số tại các giá trị cho trước của biến: <b>thay</b> các giá trị đó vào biến rồi <b>thực hiện</b> phép tính.</p>
      <p>Ví dụ: giá trị của x<sup>2</sup> − 3x + 1 tại x = −2 là (−2)<sup>2</sup> − 3 · (−2) + 1 = 4 + 6 + 1 = 11.</p>
      <div class="box note">Khi thay số âm vào, nhớ đặt trong dấu ngoặc.</div>` }
  ],
  summary: 'Biểu thức đại số chứa số, chữ (biến) và phép tính. Viết gọn: 3x, xy, −x. Tính giá trị: thay giá trị của biến (số âm để trong ngoặc) rồi tính.',
  examples: [
    { title: 'Viết biểu thức', problem: 'Viết biểu thức tính số tiền mua x quyển vở giá 8 000 đồng và y cái bút giá 5 000 đồng.', solution: '8 000x + 5 000y (đồng).' },
    { title: 'Tính giá trị', problem: 'Tính giá trị của 2a<sup>2</sup> − ab tại a = 3, b = −1.', solution: '2 · 9 − 3 · (−1) = 18 + 3 = 21.' },
    { title: 'Ứng dụng', problem: 'Quãng đường ô tô đi được là s = vt. Tính s khi v = 55 km/h, t = 2,5 giờ.', solution: 's = 55 · 2,5 = 137,5 (km).' }
  ],
  exercises: [
    { question: 'Viết biểu thức đại số: “Tổng bình phương của x và y”; “Bình phương tổng của x và y”.', hints: ['Tổng bình phương: bình phương từng số rồi cộng.', 'Bình phương tổng: cộng trước rồi bình phương.'], solution: 'x<sup>2</sup> + y<sup>2</sup>; (x + y)<sup>2</sup>.' },
    { question: 'Tính giá trị của 3x<sup>2</sup> − 5x + 2 tại x = 1 và tại x = {{2|3}}.', hints: ['Thay x = 1: 3 − 5 + 2.', 'x = {{2|3}}: 3 · {{4|9}} − {{10|3}} + 2.'], solution: 'Tại x = 1: 0. Tại x = {{2|3}}: {{4|3}} − {{10|3}} + 2 = 0.' },
    { question: 'Tiền điện: 1 800 đồng/số cho 50 số đầu, 2 000 đồng/số cho các số tiếp theo. Viết biểu thức tính tiền khi dùng x số (x &gt; 50) và tính khi x = 120.', hints: ['50 số đầu: 50 · 1 800.', 'Các số sau: (x − 50) · 2 000.'], solution: '90 000 + 2 000(x − 50). Khi x = 120: 90 000 + 140 000 = 230 000 đồng.' }
  ],
  quiz: [
    { type: 'short', calc: 'poly([1, -3, 1], -2)', q: 'Tính giá trị của x<sup>2</sup> − 3x + 1 tại x = −2.', answer: '11', explain: '4 + 6 + 1 = 11.' },
    { type: 'mcq', q: 'Cách viết gọn đúng của x · 5 · y là:', options: ['x5y', '5xy', 'xy5', '5 · xy'], answer: 1, explain: 'Số viết trước, không cần dấu nhân.' },
    { type: 'short', calc: '2 * 9 - 3 * (-1)', q: 'Tính giá trị của 2a<sup>2</sup> − ab tại a = 3, b = −1.', answer: '21', explain: '18 + 3 = 21.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: (x + y)<sup>2</sup> là “tổng bình phương của x và y”.', answer: false, explain: 'Đó là bình phương của tổng.' },
    { type: 'short', calc: '55 * 2.5', q: 's = vt. Tính s (km) khi v = 55 km/h, t = 2,5 giờ.', unit: 'km', answer: '137.5', answerText: '137,5', explain: '55 · 2,5.' },
    { type: 'short', calc: 'poly([2, -5, 3], 1)', q: 'Tính giá trị của 3x<sup>2</sup> − 5x + 2 tại x = 1.', answer: '0', explain: '3 − 5 + 2 = 0.' },
    { type: 'short', calc: '90000 + 2000 * (120 - 50)', q: 'Tiền điện 90 000 + 2 000(x − 50) đồng. Tính khi x = 120.', unit: 'đồng', answer: '230000', answerText: '230 000', explain: '90 000 + 140 000.' },
    { type: 'mcq', q: 'Biểu thức nào là biểu thức số?', options: ['2x + 1', '3 · 4 − 5', 'ab', 'x<sup>2</sup>'], answer: 1, explain: 'Chỉ có số và phép tính.' }
  ]
});
})();
