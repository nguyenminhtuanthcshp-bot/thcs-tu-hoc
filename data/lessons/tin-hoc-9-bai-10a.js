/* Tin học 9 – Bài 10a. Sử dụng hàm COUNTIF. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-9/bai-10a', {
  objectives: [
    'Nêu được cú pháp và ý nghĩa của hàm COUNTIF.',
    'Viết được điều kiện dạng giá trị, văn bản và so sánh (">=8", "<5").',
    'Sử dụng được COUNTIF để thống kê dữ liệu thực tế.'
  ],
  intro: 'Lớp có bao nhiêu bạn đạt từ 8 điểm trở lên? Bao nhiêu bạn nữ? Hàm COUNT đếm tất cả ô số, còn <b>COUNTIF</b> chỉ đếm những ô <b>thoả mãn điều kiện</b>.',
  steps: [
    { title: 'Cú pháp', html: `<p><code>=COUNTIF(vùng, điều_kiện)</code>: đếm số ô trong <b>vùng</b> thoả mãn <b>điều_kiện</b>.</p><ul><li>Điều kiện là số: <code>=COUNTIF(C2:C9, 10)</code>.</li><li>Văn bản: <code>=COUNTIF(B2:B9, "Nữ")</code>.</li><li>So sánh: đặt trong ngoặc kép, <code>=COUNTIF(C2:C9, "&gt;=8")</code>.</li><li>Điều kiện lấy từ ô: <code>=COUNTIF(C2:C9, "&gt;="&amp;F1)</code>.</li></ul>` },
    { title: 'Ví dụ trên bảng điểm', html: `<p>Bảng dưới có 6 bạn:</p>`,
      svg: S.sheet({ title: 'Đếm số bạn đạt từ 8 điểm (số liệu minh hoạ)', cols: ['A', 'B', 'C', 'D', 'E'], rows: [['Họ tên', 'Giới tính', 'Điểm', '', ''], ['An', 'Nam', 9, 'Từ 8 trở lên:', 3], ['Bình', 'Nữ', 6, 'Số bạn nữ:', 4], ['Chi', 'Nữ', 8, 'Dưới 5:', 1], ['Dũng', 'Nam', 7, '', ''], ['Hà', 'Nữ', 4, '', ''], ['Lan', 'Nữ', 10, '', '']], active: 'E2', formula: '=COUNTIF(C2:C7,">=8")', colW: 100 }), caption: 'Các điểm 9, 8, 10 thoả mãn ≥ 8.' },
    { title: 'Kết hợp với tỉ lệ', html: `<p>Tỉ lệ bạn đạt từ 8 điểm: <code>=COUNTIF(C2:C7,"&gt;=8")/COUNT(C2:C7)</code> → 3/6 = 50% (định dạng phần trăm).</p>`,
      svg: S.pieChart({ title: 'Tỉ lệ điểm (từ bảng minh hoạ)', parts: [{ v: 3, label: 'Từ 8: 3 bạn (50%)' }, { v: 2, label: '5 – dưới 8: 2 bạn' }, { v: 1, label: 'Dưới 5: 1 bạn' }] }), caption: 'COUNTIF cung cấp số liệu cho biểu đồ.' },
    { title: 'Lưu ý', html: `<ul><li>Điều kiện so sánh và văn bản phải đặt trong dấu ngoặc kép.</li><li>COUNTIF không phân biệt chữ hoa, chữ thường.</li><li>Dùng địa chỉ tuyệt đối cho vùng nếu sao chép công thức.</li></ul>
      <div class="box key">=COUNTIF(vùng, điều_kiện): đếm có điều kiện.</div>` }
  ],
  summary: 'Hàm =COUNTIF(vùng, điều_kiện) đếm số ô trong vùng thoả mãn điều kiện. Điều kiện có thể là số, văn bản ("Nữ"), so sánh (">=8") hoặc ghép với ô (">="&F1). Kết hợp COUNT để tính tỉ lệ. Điều kiện văn bản và so sánh đặt trong ngoặc kép.',
  examples: [
    { title: 'Đếm văn bản', problem: 'Theo bảng bước 2, =COUNTIF(B2:B7,"Nam") cho kết quả?', solution: '2 (An, Dũng).' },
    { title: 'Đếm so sánh', problem: '=COUNTIF(C2:C7,"<7") cho kết quả?', solution: 'Điểm 6 và 4 → 2.' },
    { title: 'Tỉ lệ', problem: 'Tính tỉ lệ bạn nữ trong bảng.', solution: '4 : 6 ≈ 66,7%.' }
  ],
  exercises: [
    { question: 'Viết công thức đếm số bạn có điểm đúng bằng 10 trong vùng C2:C41.', hints: ['Điều kiện là số.', 'Không cần ngoặc kép.'], solution: '=COUNTIF(C2:C41,10).' },
    { question: 'Vùng D2:D11 chứa: Tốt, Khá, Tốt, Đạt, Tốt, Khá, Khá, Tốt, Đạt, Tốt. =COUNTIF(D2:D11,"Tốt") = ?', hints: ['Đếm số lần xuất hiện “Tốt”.', 'Đếm cẩn thận.'], solution: '5.' },
    { question: 'Lớp 40 bạn, =COUNTIF(C2:C41,">=5") cho 36. Bao nhiêu bạn dưới 5 và tỉ lệ đạt?', hints: ['40 − 36.', '36 : 40.'], solution: '4 bạn dưới 5; tỉ lệ đạt 90%.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hàm COUNTIF đếm số ô thoả mãn một điều kiện.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Công thức đếm số ô có giá trị ≥ 8 trong C2:C9:', options: ['=COUNTIF(C2:C9,">=8")', '=COUNTIF(C2:C9,>=8)', '=COUNT(C2:C9,">=8")', '=SUMIF(C2:C9,">=8")'], answer: 0, explain: 'Điều kiện trong ngoặc kép.' },
    { type: 'short', q: 'Vùng chứa 5, 8, 9, 3, 8, 10. Kết quả =COUNTIF(vùng,">=8")?', answer: '4', calc: '4', explain: '8, 9, 8, 10.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: COUNTIF phân biệt “nữ” và “Nữ”.', answer: false, explain: 'Không phân biệt hoa thường.' },
    { type: 'short', q: 'Vùng chứa 4, 7, 2, 9, 5. Kết quả =COUNTIF(vùng,"<5")?', answer: '2', calc: '2', explain: '4 và 2.' },
    { type: 'short', q: 'Lớp 32 bạn, COUNTIF đếm 24 bạn đạt. Tỉ lệ đạt (%)?', answer: '75', unit: '%', calc: '24/32*100', explain: '75%.' },
    { type: 'mcq', q: 'Đếm số bạn “Nữ” trong B2:B30:', options: ['=COUNTIF(B2:B30,"Nữ")', '=COUNT(B2:B30)', '=SUM(B2:B30)', '=COUNTIF("Nữ",B2:B30)'], answer: 0, explain: 'Vùng trước, điều kiện sau.' },
    { type: 'short', q: 'Vùng chứa: Khá, Tốt, Khá, Đạt, Khá. =COUNTIF(vùng,"Khá") = ?', answer: '3', calc: '3', explain: '3.' }
  ]
});
})();
