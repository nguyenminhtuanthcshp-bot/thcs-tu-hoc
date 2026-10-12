/* Tin học 7 – Bài 8. Công cụ hỗ trợ tính toán. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-7/bai-8', {
  objectives: [
    'Sử dụng được các hàm SUM, AVERAGE, MAX, MIN, COUNT với đối số là vùng dữ liệu.',
    'Tính đúng kết quả của các hàm trên một bảng số liệu.',
    'Sao chép được công thức và giải thích được sự thay đổi của địa chỉ tương đối.'
  ],
  intro: 'Tính tổng điểm của 10 môn bằng =B2+C2+D2+… rất dài. <b>Hàm</b> là công thức viết sẵn, chỉ cần =SUM(B2:K2).',
  steps: [
    { title: 'Hàm và cách viết', html: `<p>Hàm viết theo dạng <code>=TÊNHÀM(đối số)</code>; đối số có thể là số, địa chỉ ô, vùng, cách nhau bởi dấu phẩy (hoặc chấm phẩy tuỳ cài đặt).</p>`,
      svg: S.table({ title: 'Năm hàm thông dụng', head: ['Hàm', 'Ý nghĩa'], rows: [['SUM', 'Tính tổng'], ['AVERAGE', 'Tính trung bình cộng'], ['MAX', 'Tìm giá trị lớn nhất'], ['MIN', 'Tìm giá trị nhỏ nhất'], ['COUNT', 'Đếm số ô chứa số']], colW: 220 }), caption: 'Các hàm thường dùng.' },
    { title: 'Ví dụ trên bảng điểm', html: `<p>Với bảng dưới (B2:B6 là điểm Tin của 5 bạn): <code>=SUM(B2:B6)</code> = 40; <code>=AVERAGE(B2:B6)</code> = 8; <code>=MAX(B2:B6)</code> = 10; <code>=MIN(B2:B6)</code> = 6; <code>=COUNT(B2:B6)</code> = 5.</p>`,
      svg: S.sheet({ title: 'Điểm Tin (số liệu minh hoạ)', cols: ['A', 'B', 'C'], rows: [['Họ tên', 'Tin', ''], ['An', 9, ''], ['Bình', 6, ''], ['Chi', 10, ''], ['Dũng', 7, ''], ['Hà', 8, ''], ['Trung bình', 8, '']], active: 'B7', formula: '=AVERAGE(B2:B6)', sel: ['B2', 'B6'], colW: 130 }), caption: 'AVERAGE(B2:B6) = 40 : 5 = 8.' },
    { title: 'Sao chép công thức – địa chỉ tương đối', html: `<p>Khi sao chép công thức sang ô khác, các địa chỉ ô <b>tự thay đổi</b> theo vị trí mới (địa chỉ tương đối). Ví dụ: D2 chứa <code>=B2*C2</code>, sao chép xuống D3 thành <code>=B3*C3</code>. Có thể kéo <b>nút điền</b> (ô vuông nhỏ góc dưới phải) để sao chép nhanh.</p>`,
      svg: S.sheet({ title: 'Sao chép D2 xuống D3:D4', cols: ['A', 'B', 'C', 'D'], rows: [['Mặt hàng', 'SL', 'Giá', 'Tiền'], ['Vở', 10, 8, '=B2*C2'], ['Bút', 5, 6, '=B3*C3'], ['Thước', 2, 4, '=B4*C4']], colW: 110, note: 'Công thức hiện để minh hoạ; trong ô thật sẽ thấy 80, 30, 8' }), caption: 'Địa chỉ tương đối thay đổi theo hàng.' },
    { title: 'Lưu ý', html: `<ul><li>COUNT chỉ đếm ô chứa <b>số</b>, bỏ qua ô văn bản và ô trống.</li><li>AVERAGE bỏ qua ô trống, nhưng tính ô chứa số 0.</li></ul>
      <div class="box key">SUM, AVERAGE, MAX, MIN, COUNT – viết =HÀM(vùng).</div>` }
  ],
  summary: 'Hàm là công thức viết sẵn: =SUM (tổng), =AVERAGE (trung bình), =MAX (lớn nhất), =MIN (nhỏ nhất), =COUNT (đếm ô chứa số). Sao chép công thức thì địa chỉ tương đối thay đổi theo vị trí mới.',
  examples: [
    { title: 'Tính bằng hàm', problem: 'B2:B5 chứa 4, 7, 5, 8. Tính =SUM(B2:B5) và =AVERAGE(B2:B5).', solution: 'Tổng 24; trung bình 24 : 4 = 6.' },
    { title: 'COUNT', problem: 'A1:A5 chứa 3, “vắng”, 7, (trống), 0. =COUNT(A1:A5) bằng bao nhiêu?', solution: 'Ô chứa số: 3, 7, 0 → 3.' },
    { title: 'Sao chép', problem: 'E2 chứa =SUM(B2:D2). Sao chép sang E5 thì công thức là gì?', solution: '=SUM(B5:D5) (hàng tăng thêm 3).' }
  ],
  exercises: [
    { question: 'B2:B6 chứa 12, 15, 9, 20, 14. Tính MAX, MIN và AVERAGE.', hints: ['Lớn nhất, nhỏ nhất đọc trực tiếp.', 'Tổng 70, chia 5.'], solution: 'MAX = 20, MIN = 9, AVERAGE = 70 : 5 = 14.' },
    { question: 'Viết công thức tính điểm cao nhất của vùng C2:C41.', hints: ['Hàm tìm giá trị lớn nhất là gì?', 'Đối số là vùng.'], solution: '=MAX(C2:C41)' },
    { question: 'D3 chứa =B3+C3. Sao chép sang D7 thì công thức là gì?', hints: ['Từ hàng 3 sang hàng 7 tăng mấy hàng?', 'Cột không đổi vì sao chép cùng cột.'], solution: '=B7+C7.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hàm AVERAGE dùng để tính trung bình cộng.', answer: true, explain: 'Đúng.' },
    { type: 'short', q: 'B1:B4 chứa 5, 8, 6, 9. Kết quả =SUM(B1:B4)?', answer: '28', calc: '5+8+6+9', explain: 'Tổng 28.' },
    { type: 'short', q: 'B1:B4 chứa 5, 8, 6, 9. Kết quả =AVERAGE(B1:B4)?', answer: '7', calc: '(5+8+6+9)/4', explain: '28 : 4.' },
    { type: 'mcq', q: 'Hàm tìm giá trị nhỏ nhất là:', options: ['MAX', 'MIN', 'SUM', 'COUNT'], answer: 1, explain: 'MIN.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hàm COUNT đếm cả ô chứa văn bản.', answer: false, explain: 'Chỉ đếm ô chứa số.' },
    { type: 'mcq', q: 'D2 chứa =B2*C2, sao chép xuống D4 được:', options: ['=B2*C2', '=B4*C4', '=D4*D4', '=B3*C3'], answer: 1, explain: 'Hàng tăng 2.' },
    { type: 'short', q: 'A1:A6 chứa 4, “x”, 7, 2, (trống), 9. Kết quả =COUNT(A1:A6)?', answer: '4', calc: '4', explain: 'Ô số: 4, 7, 2, 9.' },
    { type: 'short', q: 'C1:C5 chứa 3, 11, 7, 2, 6. Kết quả =MAX(C1:C5)−MIN(C1:C5)?', answer: '9', calc: '11-2', explain: '11 − 2.' }
  ]
});
})();
