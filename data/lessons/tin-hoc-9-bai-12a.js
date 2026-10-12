/* Tin học 9 – Bài 12a. Sử dụng hàm IF. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-9/bai-12a', {
  objectives: [
    'Nêu được cú pháp và ý nghĩa của hàm IF.',
    'Viết được biểu thức điều kiện với các phép so sánh; sử dụng IF lồng nhau đơn giản.',
    'Sử dụng được IF để phân loại, ra quyết định tự động trên bảng tính.'
  ],
  intro: 'Nếu điểm từ 5 trở lên thì “Đạt”, ngược lại “Chưa đạt”. Bảng tính có thể tự viết kết luận ấy cho cả lớp nhờ <b>hàm IF</b> – cấu trúc rẽ nhánh trong bảng tính.',
  steps: [
    { title: 'Cú pháp', html: `<p><code>=IF(điều_kiện, giá_trị_nếu_đúng, giá_trị_nếu_sai)</code>. Điều kiện dùng phép so sánh =, &lt;&gt;, &gt;, &gt;=, &lt;, &lt;=. Giá trị văn bản đặt trong ngoặc kép.</p>`,
      svg: S.flowchart({ title: 'Hàm IF hoạt động như rẽ nhánh', steps: [{ t: 'start', s: 'Đọc điểm ở C2' }, { t: 'if', s: 'C2 >= 5 ?', yes: 'Trả về “Đạt”', no: 'Trả về “Chưa đạt”' }, { t: 'end', s: 'Hiện kết quả ở D2' }] }), caption: '=IF(C2>=5,"Đạt","Chưa đạt").' },
    { title: 'Ví dụ: xếp loại và tính phí', html: `<p>Ngoài văn bản, IF có thể trả về số hoặc công thức: phí ship <code>=IF(B2&gt;=300,0,20)</code> (đơn từ 300 nghìn miễn phí, nếu không mất 20 nghìn).</p>`,
      svg: S.sheet({ title: 'Kết luận tự động', cols: ['A', 'B', 'C', 'D'], rows: [['Họ tên', 'Giữa kì', 'Cuối kì', 'Kết luận'], ['An', 8, 9, 'Đạt'], ['Bình', 4, 4, 'Chưa đạt'], ['Chi', 6, 5, 'Đạt']], active: 'D3', formula: '=IF((B3+C3*2)/3>=5,"Đạt","Chưa đạt")', colW: 110, note: 'Bình: (4 + 8) : 3 = 4 < 5 → Chưa đạt' }), caption: 'Điều kiện có thể là một biểu thức.' },
    { title: 'IF lồng nhau', html: `<p>Khi có nhiều hơn hai trường hợp, đặt một IF bên trong IF khác: <code>=IF(C2&gt;=8,"Tốt",IF(C2&gt;=6.5,"Khá",IF(C2&gt;=5,"Đạt","Chưa đạt")))</code>. Phần mềm xét lần lượt từ điều kiện đầu tiên.</p>` },
    { title: 'Lưu ý', html: `<ul><li>Số ngoặc mở phải bằng số ngoặc đóng.</li><li>Sắp xếp điều kiện hợp lí (từ cao xuống thấp).</li><li>Kiểm tra với giá trị biên: 5; 6,5; 8.</li></ul>
      <div class="box key">=IF(điều kiện; đúng thì…; sai thì…) – rẽ nhánh trong bảng tính.</div>` }
  ],
  summary: 'Hàm =IF(điều_kiện, giá_trị_nếu_đúng, giá_trị_nếu_sai) trả về một trong hai giá trị tuỳ điều kiện đúng hay sai; giá trị có thể là văn bản, số, công thức. Nhiều trường hợp dùng IF lồng nhau, xét điều kiện lần lượt. Kiểm tra các giá trị biên.',
  examples: [
    { title: 'Tính kết quả', problem: '=IF(A1>10,"Lớn","Nhỏ") với A1 = 10?', solution: '10 > 10 sai → “Nhỏ”.' },
    { title: 'Phí ship', problem: 'Với =IF(B2>=300,0,20), đơn 250 nghìn và đơn 300 nghìn phải trả ship bao nhiêu?', solution: '250: 20 nghìn; 300: 0 (miễn phí).' },
    { title: 'IF lồng nhau', problem: 'Với công thức xếp loại ở bước 3, điểm 6,5 và 7,9 được xếp loại gì?', solution: 'Cả hai đều “Khá”.' }
  ],
  exercises: [
    { question: 'Viết công thức: nếu số buổi vắng (B2) lớn hơn 10 thì “Cảnh báo”, ngược lại để trống.', hints: ['Giá trị trống là "".', 'Điều kiện B2>10.'], solution: '=IF(B2>10,"Cảnh báo","").' },
    { question: 'Tiền điện giả định: nếu dùng (A2) ≤ 50 kWh thì A2×1 800, ngược lại 50×1 800 + (A2−50)×2 000. Viết công thức và tính với A2 = 70.', hints: ['Dùng IF với hai công thức.', 'Thay A2 = 70.'], solution: '=IF(A2<=50,A2*1800,50*1800+(A2-50)*2000); với 70: 90 000 + 40 000 = 130 000 đồng.' },
    { question: 'Với công thức xếp loại ở bước 3, điểm 4,9 được xếp loại gì? Giải thích theo thứ tự xét.', hints: ['Xét ≥ 8, rồi ≥ 6,5, rồi ≥ 5.', 'Không thoả cái nào.'], solution: '“Chưa đạt” vì 4,9 không thoả cả ba điều kiện.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hàm IF trả về một trong hai giá trị tuỳ điều kiện đúng hay sai.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: '=IF(C2>=5,"Đạt","Chưa đạt") với C2 = 5 cho:', options: ['Đạt', 'Chưa đạt', 'Lỗi', '5'], answer: 0, explain: '5 ≥ 5 đúng.' },
    { type: 'short', q: '=IF(B2>=300,0,20) với B2 = 180. Kết quả?', answer: '20', calc: '20', explain: '180 < 300.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Giá trị văn bản trong hàm IF không cần đặt trong ngoặc kép.', answer: false, explain: 'Cần ngoặc kép.' },
    { type: 'short', q: 'Giá điện giả định: ≤ 50 kWh giá 1 800 đ; phần vượt 2 000 đ. Dùng 65 kWh hết bao nhiêu đồng?', answer: '120000', answerText: '120 000', unit: 'đồng', calc: '50*1800+15*2000', explain: '90 000 + 30 000.' },
    { type: 'mcq', q: 'Với công thức xếp loại lồng nhau (≥ 8 Tốt, ≥ 6,5 Khá, ≥ 5 Đạt), điểm 8 xếp loại:', options: ['Tốt', 'Khá', 'Đạt', 'Chưa đạt'], answer: 0, explain: '8 ≥ 8.' },
    { type: 'short', q: 'Giữa kì 4, cuối kì 7 (hệ số 2). Điểm (B+C×2)/3 bằng bao nhiêu?', answer: '6', calc: '(4+7*2)/3', explain: '18 : 3.' },
    { type: 'mcq', q: 'Hàm IF tương ứng với cấu trúc nào trong lập trình?', options: ['Rẽ nhánh', 'Lặp', 'Tuần tự', 'Biến'], answer: 0, explain: 'Rẽ nhánh.' }
  ]
});
})();
