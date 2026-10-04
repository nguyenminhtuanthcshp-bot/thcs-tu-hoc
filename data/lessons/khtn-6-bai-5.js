/* KHTN 6 – Bài 5. Đo chiều dài. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-6/bai-5', {
  objectives: [
    'Nêu được đơn vị đo chiều dài và đổi được giữa các đơn vị thường dùng (km, m, dm, cm, mm).',
    'Xác định được giới hạn đo (GHĐ) và độ chia nhỏ nhất (ĐCNN) của thước.',
    'Đo được chiều dài của vật bằng thước đúng cách và ghi kết quả chính xác.',
    'Biết cách giảm sai số khi đo (đo nhiều lần, lấy giá trị trung bình).'
  ],
  intro: 'May một bộ quần áo vừa người, lát gạch cho thẳng hàng, chạy thi 100 m… đều cần đo chiều dài. Nếu chỉ đo bằng gang tay, bước chân thì mỗi người một kết quả. Vì vậy con người dùng <b>đơn vị đo chung</b> và <b>thước đo</b>.',
  steps: [
    { title: 'Đơn vị đo chiều dài', html: `<p>Đơn vị đo chiều dài trong hệ đo lường hợp pháp của Việt Nam là <b>mét (m)</b>. Các đơn vị thường dùng khác:</p>
      <table class="tbl"><tr><th>Đơn vị</th><th>Kí hiệu</th><th>Đổi ra mét</th></tr>
      <tr><td>ki-lô-mét</td><td>km</td><td>1 km = 1 000 m</td></tr><tr><td>đề-xi-mét</td><td>dm</td><td>1 dm = 0,1 m</td></tr>
      <tr><td>xăng-ti-mét</td><td>cm</td><td>1 cm = 0,01 m</td></tr><tr><td>mi-li-mét</td><td>mm</td><td>1 mm = 0,001 m</td></tr></table>
      <div class="box key">1 m = 10 dm = 100 cm = 1 000 mm; 1 cm = 10 mm.</div>` },
    { title: 'Thước đo: GHĐ và ĐCNN', html: `<p>Một số loại thước: thước thẳng, thước dây (thợ may), thước cuộn (thợ xây), thước kẹp (đo đường kính nhỏ).</p>
      <ul><li><b>Giới hạn đo (GHĐ)</b>: độ dài lớn nhất ghi trên thước.</li><li><b>Độ chia nhỏ nhất (ĐCNN)</b>: độ dài giữa hai vạch chia liên tiếp trên thước.</li></ul>
      <p>Thước ở hình dưới có GHĐ 10 cm; giữa hai số 0 và 1 có 10 khoảng chia nên ĐCNN = 1 cm : 10 = <b>0,1 cm = 1 mm</b>.</p>`,
      svg: S.ruler({ min: 0, max: 10, div: 10, width: 600 }), caption: 'Thước thẳng có GHĐ 10 cm, ĐCNN 1 mm.' },
    { title: 'Các bước đo chiều dài', html: `<ol><li><b>Ước lượng</b> chiều dài cần đo để chọn thước có GHĐ và ĐCNN phù hợp.</li>
      <li><b>Đặt thước</b> dọc theo chiều dài cần đo, <b>một đầu của vật thẳng với vạch số 0</b>.</li>
      <li><b>Đặt mắt</b> nhìn theo hướng <b>vuông góc</b> với cạnh thước ở đầu kia của vật.</li>
      <li><b>Đọc và ghi kết quả</b> theo vạch chia gần nhất với đầu kia của vật, kèm đơn vị.</li></ol>`,
      svg: S.ruler({ min: 0, max: 10, obj: [0, 7.4], shape: 'pencil', objLabel: 'Bút chì dài 7,4 cm' }), caption: 'Đầu bút chì thẳng vạch 0, đầu kia gần vạch 7,4 cm nhất.' },
    { title: 'Khi vật không đặt ở vạch 0', html: `<p>Nếu vì lí do nào đó đầu vật không trùng vạch 0, ta lấy <b>số đo ở đầu sau trừ số đo ở đầu trước</b>.</p>
      <p>Ví dụ: vật đặt từ vạch 1,0 cm đến vạch 7,4 cm thì dài 7,4 − 1,0 = <b>6,4 cm</b>.</p>`,
      svg: S.ruler({ min: 0, max: 10, obj: [1, 7.4], objColor: '#16a34a', objLabel: 'Thanh gỗ' }), caption: 'Chiều dài = 7,4 cm − 1,0 cm = 6,4 cm.' },
    { title: 'Giảm sai số khi đo', html: `<p>Mỗi lần đo có thể lệch một chút do đặt thước, đặt mắt chưa chuẩn. Để kết quả đáng tin cậy hơn, ta <b>đo nhiều lần rồi lấy giá trị trung bình</b>.</p>
      <p>Ví dụ đo 3 lần được 15,2 cm; 15,4 cm; 15,3 cm. Giá trị trung bình = (15,2 + 15,4 + 15,3) : 3 = <b>15,3 cm</b>.</p>
      <div class="box tip">Đặt mắt nhìn xiên (không vuông góc) sẽ đọc sai kết quả.</div>` }
  ],
  summary: 'Đơn vị đo chiều dài là mét (m); 1 m = 100 cm = 1 000 mm, 1 km = 1 000 m. GHĐ là độ dài lớn nhất ghi trên thước, ĐCNN là khoảng cách giữa hai vạch chia liên tiếp. Đo: ước lượng – chọn thước – đặt một đầu vật ở vạch 0 – mắt nhìn vuông góc – đọc theo vạch gần nhất.',
  examples: [
    { title: 'Đổi đơn vị', problem: 'Đổi: a) 2,5 m ra cm; b) 450 mm ra cm; c) 3 200 m ra km.', solution: 'a) 2,5 m = 2,5 × 100 = <b>250 cm</b>. b) 450 mm = 450 : 10 = <b>45 cm</b>. c) 3 200 m = 3 200 : 1 000 = <b>3,2 km</b>.' },
    { title: 'Chọn thước phù hợp', problem: 'Có ba thước: A (GHĐ 30 cm, ĐCNN 1 mm), B (GHĐ 1,5 m, ĐCNN 1 cm), C (GHĐ 20 m, ĐCNN 1 cm). Nên dùng thước nào để đo: a) chiều dài quyển sách; b) chiều dài lớp học?', solution: 'a) Quyển sách dài khoảng 25 cm: dùng <b>thước A</b> (đo một lần, chính xác tới mm). b) Lớp học dài khoảng 8 – 10 m: dùng <b>thước C</b> để đo một lần là đủ.' },
    { title: 'Đọc kết quả đo', problem: 'Một chiếc lá đặt dọc thước có ĐCNN 1 mm, cuống lá ở vạch 2,0 cm, chóp lá ở vạch 11,6 cm. Lá dài bao nhiêu?', solution: 'Chiều dài lá = 11,6 − 2,0 = <b>9,6 cm</b> (= 96 mm).' }
  ],
  exercises: [
    { question: 'Một thước có số lớn nhất là 50 cm; giữa số 0 và số 1 có 5 khoảng chia. Tìm GHĐ và ĐCNN của thước.', hints: ['GHĐ là số lớn nhất ghi trên thước.', 'ĐCNN = 1 cm chia cho số khoảng chia giữa hai số liên tiếp.'], solution: 'GHĐ = 50 cm. ĐCNN = 1 cm : 5 = 0,2 cm = 2 mm.' },
    { question: 'Bạn Lan đo chiều dài bàn học 4 lần được: 120,2 cm; 120,4 cm; 120,1 cm; 120,3 cm. Tính giá trị trung bình.', hints: ['Cộng 4 kết quả lại.', 'Chia tổng cho số lần đo (4).'], solution: 'Tổng = 481,0 cm. Trung bình = 481,0 : 4 = <b>120,25 cm</b> (có thể làm tròn khoảng 120,3 cm).' },
    { question: 'Nêu hai lỗi thường gặp khi đo chiều dài bằng thước và cách khắc phục.', hints: ['Nghĩ về vị trí đặt thước so với vật.', 'Nghĩ về cách đặt mắt khi đọc số.'], solution: 'Ví dụ: (1) đặt thước lệch, không dọc theo chiều dài vật → đặt thước song song, sát cạnh vật; (2) mắt nhìn xiên → đặt mắt vuông góc với thước ở đầu kia của vật; (3) quên kiểm tra đầu vật có ở vạch 0 không → đặt lại hoặc lấy hiệu hai số đo.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Đơn vị đo chiều dài trong hệ đo lường hợp pháp của Việt Nam là:', options: ['cm', 'mét (m)', 'km', 'gang tay'], answer: 1, explain: 'Đơn vị chuẩn là mét; cm, km là đơn vị ước và bội của mét.' },
    { type: 'short', q: 'Đổi 1,75 m ra xăng-ti-mét.', answer: '175', unit: 'cm', calc: '1.75*100', explain: '1,75 × 100 = 175 cm.' },
    { type: 'mcq', q: 'Độ chia nhỏ nhất (ĐCNN) của thước là:', options: ['Độ dài lớn nhất ghi trên thước', 'Độ dài giữa hai vạch chia liên tiếp trên thước', 'Chiều dài của cả cây thước', 'Số vạch chia trên thước'], answer: 1, explain: 'ĐCNN là độ dài giữa hai vạch chia liên tiếp.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khi đọc kết quả, mắt phải nhìn theo hướng vuông góc với cạnh thước ở đầu kia của vật.', answer: true, explain: 'Nhìn vuông góc giúp đọc đúng, tránh sai số.' },
    { type: 'short', q: 'Một vật được đặt dọc theo thước, đầu thứ nhất ở vạch 3,0 cm, đầu thứ hai ở vạch 12,5 cm. Vật dài bao nhiêu xăng-ti-mét?', answer: '9,5', unit: 'cm', calc: '12.5-3', explain: '12,5 − 3,0 = 9,5 cm.' },
    { type: 'mcq', q: 'Để đo chiều dài sân trường (khoảng 50 m) nên dùng:', options: ['Thước kẻ học sinh 20 cm', 'Thước kẹp', 'Thước cuộn có GHĐ 50 m', 'Thước dây thợ may 1,5 m'], answer: 2, explain: 'Chọn thước có GHĐ đủ lớn để đo một lần: thước cuộn 50 m.' },
    { type: 'short', q: 'Ba lần đo chiều dài một cuốn vở được 24,8 cm; 25,0 cm; 24,9 cm. Giá trị trung bình là bao nhiêu xăng-ti-mét?', answer: '24,9', unit: 'cm', calc: '(24.8+25+24.9)/3', explain: '(24,8 + 25,0 + 24,9) : 3 = 74,7 : 3 = 24,9 cm.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: 1 km = 100 m.', answer: false, explain: '1 km = 1 000 m.' }
  ]
});
})();
