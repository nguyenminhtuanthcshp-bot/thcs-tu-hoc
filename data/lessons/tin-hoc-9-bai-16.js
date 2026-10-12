/* Tin học 9 – Bài 16. Thực hành: Lập chương trình máy tính. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-9/bai-16', {
  objectives: [
    'Lập được chương trình Scratch giải một bài toán thực tế qua các bước: phân tích, thiết kế thuật toán, viết chương trình, kiểm thử.',
    'Sử dụng phối hợp biến, rẽ nhánh, lặp và chương trình con.',
    'Kiểm thử được chương trình với bộ dữ liệu, kể cả trường hợp biên; sửa lỗi.'
  ],
  intro: 'Hãy vận dụng tất cả: viết chương trình tính tiền điện theo bậc (bảng giá giả định đơn giản) – nhập số kWh, máy tính tự tính số tiền.',
  steps: [
    { title: 'Phân tích bài toán', html: `<p>Bảng giá giả định (để luyện tập): 50 kWh đầu: 1 800 đ/kWh; từ kWh thứ 51 trở đi: 2 000 đ/kWh. Input: số kWh (n). Output: số tiền.</p>
      <p>Nếu n ≤ 50: tiền = n × 1 800. Nếu n &gt; 50: tiền = 50 × 1 800 + (n − 50) × 2 000.</p>` },
    { title: 'Thiết kế thuật toán', html: `<p>Sơ đồ khối với cấu trúc rẽ nhánh:</p>`,
      svg: S.flowchart({ title: 'Thuật toán tính tiền điện (giá giả định)', steps: [{ t: 'start', s: 'Bắt đầu' }, { t: 'io', s: 'Nhập n (kWh)' }, { t: 'if', s: 'n ≤ 50 ?', yes: 'tiền ← n × 1800', no: 'Tính theo bậc 2' }, { t: 'io', s: 'Thông báo tiền' }, { t: 'end', s: 'Kết thúc' }] }), caption: 'Bậc 2: tiền ← 90 000 + (n − 50) × 2 000 (vì 50 × 1 800 = 90 000).' },
    { title: 'Viết chương trình Scratch', html: `<p>Dùng biến <b>n</b>, <b>tiền</b> và khối <b>nếu … thì … nếu không thì</b>; tách phần tính toán thành khối tự định nghĩa “tính tiền”.</p>`,
      svg: S.blocks({ title: 'Chương trình chính', stack: [{ k: 'event', s: 'khi bấm vào lá cờ xanh' }, { k: 'sensing', s: 'hỏi Số kWh đã dùng? và đợi' }, { k: 'variables', s: 'đặt n thành (trả lời)' }, { k: 'operators', s: 'tính tiền (gọi khối tự định nghĩa)' }, { k: 'looks', s: 'nói (kết hợp Tiền điện: với tiền)' }] }), caption: 'Chương trình chính gọn nhờ khối “tính tiền”.' },
    { title: 'Kiểm thử', html: `<p>Chuẩn bị bộ dữ liệu, tính tay kết quả đúng rồi so sánh:</p>`,
      svg: S.table({ title: 'Bộ kiểm thử (giá giả định)', head: ['n (kWh)', 'Kết quả đúng (đồng)', 'Ghi chú'], rows: [['0', '0', 'Biên dưới'], ['30', '54 000', 'Bậc 1'], ['50', '90 000', 'Biên giữa hai bậc'], ['80', '150 000', 'Bậc 2']], colW: 180 }), caption: 'Thử cả giá trị biên 0 và 50.' }
  ],
  summary: 'Lập chương trình theo các bước: phân tích bài toán (Input, Output, công thức), thiết kế thuật toán (sơ đồ khối có rẽ nhánh), viết chương trình Scratch dùng biến, nếu … thì … nếu không thì, khối tự định nghĩa; kiểm thử với bộ dữ liệu gồm cả trường hợp biên, sửa lỗi nếu có.',
  examples: [
    { title: 'Tính tay', problem: 'Với giá giả định, n = 65 kWh hết bao nhiêu tiền?', solution: '90 000 + 15 × 2 000 = 120 000 đồng.' },
    { title: 'Lỗi biên', problem: 'Bạn viết điều kiện “n < 50” thay vì “n ≤ 50”. Với n = 50 chương trình cho kết quả gì? Có đúng không?', solution: '90 000 + 0 × 2 000 = 90 000 – vẫn đúng do hai công thức trùng tại 50; nhưng nên viết đúng điều kiện theo đề.' },
    { title: 'Mở rộng', problem: 'Muốn chương trình tính cho nhiều hộ liên tiếp, dùng cấu trúc gì?', solution: 'Đặt phần hỏi – tính – nói trong khối lặp (ví dụ lặp lại cho đến khi nhập 0).' }
  ],
  exercises: [
    { question: 'Tính tiền điện (giá giả định) cho n = 42 và n = 100.', hints: ['42 ≤ 50: nhân 1 800.', '100 > 50: 90 000 + 50 × 2 000.'], solution: '42 × 1 800 = 75 600 đồng; 90 000 + 100 000 = 190 000 đồng.' },
    { question: 'Viết (mô tả khối lệnh) khối tự định nghĩa “tính tiền”.', hints: ['Dùng nếu … thì … nếu không thì.', 'Đặt biến tiền.'], solution: 'định nghĩa tính tiền: nếu n < 51 thì đặt tiền thành (n × 1800) nếu không thì đặt tiền thành (90000 + (n − 50) × 2000).' },
    { question: 'Đề xuất bộ kiểm thử 5 giá trị cho chương trình và giải thích lựa chọn.', hints: ['Biên 0, 50, 51.', 'Một giá trị mỗi bậc.'], solution: 'Ví dụ: 0 (biên), 25 (bậc 1), 50 (biên), 51 (ngay sau biên: 92 000), 120 (bậc 2: 230 000).' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Bộ kiểm thử nên có các trường hợp biên.', answer: true, explain: 'Đúng.' },
    { type: 'short', q: 'Giá giả định: n = 20 kWh hết bao nhiêu đồng?', answer: '36000', answerText: '36 000', unit: 'đồng', calc: '20*1800', explain: '36 000.' },
    { type: 'short', q: 'Giá giả định: n = 70 kWh hết bao nhiêu đồng?', answer: '130000', answerText: '130 000', unit: 'đồng', calc: '50*1800+20*2000', explain: '90 000 + 40 000.' },
    { type: 'mcq', q: 'Cấu trúc phù hợp để chọn công thức theo số kWh:', options: ['rẽ nhánh', 'tuần tự thuần tuý', 'chỉ lặp', 'không cần'], answer: 0, explain: 'Rẽ nhánh.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Chỉ cần thử một giá trị là đủ chắc chương trình đúng.', answer: false, explain: 'Cần nhiều bộ.' },
    { type: 'short', q: 'Giá giả định: n = 51 kWh hết bao nhiêu đồng?', answer: '92000', answerText: '92 000', unit: 'đồng', calc: '90000+2000', explain: '92 000.' },
    { type: 'mcq', q: 'Khối nhập số kWh từ bàn phím:', options: ['hỏi … và đợi', 'nói …', 'di chuyển …', 'đổi phông nền'], answer: 0, explain: 'hỏi … và đợi.' },
    { type: 'mcq', q: 'Bước ngay sau khi phân tích bài toán:', options: ['thiết kế thuật toán', 'xuất video', 'in kết quả', 'chia sẻ'], answer: 0, explain: 'Thiết kế thuật toán.' }
  ]
});
})();
