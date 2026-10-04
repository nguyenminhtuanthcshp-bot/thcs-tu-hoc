/* Toán 6 – Bài 42. Kết quả có thể và sự kiện trong trò chơi, thí nghiệm. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, C = S.C;
function die(n) { var P = { 1: [[2, 2]], 2: [[1, 1], [3, 3]], 3: [[1, 1], [2, 2], [3, 3]], 4: [[1, 1], [3, 1], [1, 3], [3, 3]], 5: [[1, 1], [3, 1], [2, 2], [1, 3], [3, 3]], 6: [[1, 1], [3, 1], [1, 2], [3, 2], [1, 3], [3, 3]] }[n];
  var it = [{ poly: [[8, 8], [72, 8], [72, 72], [8, 72]], fill: '#fff', width: 2.4 }]; P.forEach(function (p) { it.push({ circle: [8 + p[0] * 16, 8 + p[1] * 16, 6], fill: n === 1 ? C.red : C.ink, color: n === 1 ? C.red : C.ink }); });
  return S.draw({ w: 80, h: 80, items: it, aria: 'Mặt ' + n + ' chấm' }); }
function spinner() { var cols = [C.blue, C.orange, C.green, C.orange], it = [], cx = 90, cy = 90, r = 70;
  var b = ''; for (var i = 0; i < 4; i++) { var a1 = -Math.PI / 2 + i * Math.PI / 2, a2 = a1 + Math.PI / 2; b += '<path d="M' + cx + ',' + cy + ' L' + (cx + r * Math.cos(a1)).toFixed(2) + ',' + (cy + r * Math.sin(a1)).toFixed(2) + ' A' + r + ',' + r + ' 0 0 1 ' + (cx + r * Math.cos(a2)).toFixed(2) + ',' + (cy + r * Math.sin(a2)).toFixed(2) + ' Z" fill="' + cols[i] + '" fill-opacity="0.75" stroke="#1f2937" stroke-width="2"/>'; }
  var names = ['Xanh', 'Cam', 'Lục', 'Cam']; for (i = 0; i < 4; i++) { var am = -Math.PI / 4 + i * Math.PI / 2; b += '<text x="' + (cx + 40 * Math.cos(am)).toFixed(1) + '" y="' + (cy + 40 * Math.sin(am) + 5).toFixed(1) + '" text-anchor="middle" font-size="14" font-weight="700" fill="#fff">' + names[i] + '</text>'; }
  b += '<line x1="90" y1="90" x2="146" y2="70" stroke="#1f2937" stroke-width="4" stroke-linecap="round"/><circle cx="90" cy="90" r="6" fill="#1f2937"/>';
  return '<svg class="fig-svg" viewBox="0 0 180 180" width="180" role="img" aria-label="Vòng quay chia 4 phần: xanh, cam, lục, cam" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">' + b + '</svg>'; }
THCS.registerLesson('toan-6/bai-42', {
  objectives: [
    'Liệt kê được các kết quả có thể của một trò chơi, thí nghiệm đơn giản (tung đồng xu, gieo xúc xắc, lấy bóng, quay vòng quay).',
    'Nhận biết sự kiện chắc chắn, sự kiện không thể, sự kiện có thể xảy ra.',
    'Xác định một sự kiện có xảy ra hay không dựa vào kết quả thực hiện.'
  ],
  intro: 'Tung một đồng xu, em có biết trước nó sẽ ra mặt sấp hay mặt ngửa không? Những trò chơi như vậy giúp ta làm quen với “sự may rủi” – nền tảng của xác suất.',
  steps: [
    { title: 'Kết quả có thể', html: `<p>Khi thực hiện một trò chơi hay thí nghiệm mà ta không biết trước kết quả, tập hợp tất cả những gì có thể xảy ra gọi là các <b>kết quả có thể</b>.</p>
      <ul><li>Tung đồng xu: 2 kết quả có thể — sấp (S), ngửa (N).</li><li>Gieo xúc xắc: 6 kết quả có thể — mặt 1, 2, 3, 4, 5, 6 chấm.</li></ul>`,
      svg: S.row([1, 2, 3, 4, 5, 6].map(function (n) { return { svg: die(n), caption: n + ' chấm' }; })), caption: 'Sáu kết quả có thể khi gieo một con xúc xắc.' },
    { title: 'Sự kiện', html: `<p>Một <b>sự kiện</b> là một phát biểu về kết quả, ví dụ “gieo được mặt có số chấm chẵn”. Sự kiện <b>xảy ra</b> nếu kết quả thực hiện thuộc về sự kiện đó.</p><p>Ví dụ: gieo được mặt 4 chấm thì sự kiện “số chấm chẵn” xảy ra; gieo được mặt 3 chấm thì không xảy ra.</p>` },
    { title: 'Chắc chắn, không thể, có thể', html: `<ul><li><b>Sự kiện chắc chắn</b>: luôn xảy ra (gieo xúc xắc được số chấm nhỏ hơn 7).</li><li><b>Sự kiện không thể</b>: không bao giờ xảy ra (gieo được mặt 8 chấm).</li><li><b>Sự kiện có thể xảy ra</b>: có lúc xảy ra, có lúc không (gieo được mặt 6 chấm).</li></ul>` },
    { title: 'Vòng quay may mắn', html: `<p>Vòng quay chia 4 phần bằng nhau: xanh, cam, lục, cam. Kết quả có thể: mũi tên chỉ vào xanh, cam hoặc lục. Sự kiện “chỉ vào màu cam” có thể xảy ra; “chỉ vào màu tím” là không thể.</p>`,
      svg: spinner(), caption: 'Vòng quay 4 phần: 1 xanh, 2 cam, 1 lục.' }
  ],
  summary: 'Kết quả có thể là mọi kết quả có thể xảy ra của trò chơi, thí nghiệm. Sự kiện chắc chắn luôn xảy ra, sự kiện không thể không bao giờ xảy ra, sự kiện có thể xảy ra thì lúc có lúc không.',
  examples: [
    { title: 'Lấy bóng', problem: 'Hộp có 1 bóng đỏ, 1 bóng xanh, 1 bóng vàng. Lấy ngẫu nhiên 1 bóng. Liệt kê các kết quả có thể.', solution: 'Có <b>3 kết quả</b>: đỏ, xanh, vàng.' },
    { title: 'Phân loại sự kiện', problem: 'Gieo một xúc xắc. Phân loại: A “số chấm lớn hơn 0”; B “số chấm là 7”; C “số chấm chia hết cho 3”.', solution: 'A: <b>chắc chắn</b>. B: <b>không thể</b>. C: <b>có thể xảy ra</b> (mặt 3 hoặc 6).' },
    { title: 'Tung hai đồng xu', problem: 'Tung đồng thời hai đồng xu. Liệt kê các kết quả có thể.', solution: 'SS, SN, NS, NN: <b>4 kết quả</b>.' }
  ],
  exercises: [
    { question: 'Hộp có 5 thẻ ghi số 1, 2, 3, 4, 5. Rút một thẻ. Sự kiện “rút được thẻ ghi số nguyên tố” xảy ra với những kết quả nào?', hints: ['Liệt kê các số nguyên tố trong 1 đến 5.', 'Số 1 không phải số nguyên tố.'], solution: 'Thẻ <b>2, 3, 5</b>.' },
    { question: 'Túi chỉ có 4 viên bi xanh. Lấy ra 1 viên. Sự kiện “lấy được bi đỏ” là sự kiện gì?', hints: ['Trong túi có bi đỏ không?', 'Không có thì không thể lấy được.'], solution: 'Sự kiện <b>không thể</b>.' },
    { question: 'Gieo một xúc xắc. Có bao nhiêu kết quả làm cho sự kiện “số chấm lớn hơn 4” xảy ra?', hints: ['Liệt kê các mặt có số chấm lớn hơn 4.', 'Mặt 5 và mặt 6.'], solution: '<b>2</b> kết quả.' }
  ],
  quiz: [
    { type: 'short', q: 'Gieo một con xúc xắc có bao nhiêu kết quả có thể?', answer: '6', explain: 'Mặt 1 đến 6 chấm.' },
    { type: 'short', q: 'Tung đồng thời hai đồng xu có bao nhiêu kết quả có thể?', answer: '4', calc: '2*2', explain: 'SS, SN, NS, NN.' },
    { type: 'mcq', q: 'Gieo xúc xắc, sự kiện nào là chắc chắn?', options: ['Số chấm là 6', 'Số chấm nhỏ hơn 7', 'Số chấm chẵn', 'Số chấm là 0'], answer: 1, explain: 'Mọi mặt đều có số chấm nhỏ hơn 7.' },
    { type: 'mcq', q: 'Tung một đồng xu, sự kiện “xuất hiện cả sấp và ngửa” là:', options: ['Chắc chắn', 'Không thể', 'Có thể', 'Luôn xảy ra'], answer: 1, explain: 'Một lần tung chỉ ra một mặt.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Gieo xúc xắc được mặt 5 chấm thì sự kiện “số chấm lẻ” xảy ra.', answer: true, explain: '5 là số lẻ.' },
    { type: 'short', q: 'Gieo xúc xắc, có bao nhiêu kết quả làm sự kiện “số chấm chia hết cho 2” xảy ra?', answer: '3', explain: 'Mặt 2, 4, 6.' },
    { type: 'mcq', q: 'Với vòng quay ở bước 4, sự kiện “mũi tên chỉ vào màu tím” là:', options: ['Chắc chắn', 'Có thể', 'Không thể', 'Không xác định'], answer: 2, explain: 'Vòng quay không có màu tím.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Rút một thẻ từ các thẻ 2, 4, 6, 8 thì “rút được số chẵn” là sự kiện chắc chắn.', answer: true, explain: 'Mọi thẻ đều ghi số chẵn.' }
  ]
});
})();
