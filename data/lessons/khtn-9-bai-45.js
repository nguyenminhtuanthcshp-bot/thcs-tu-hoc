/* KHTN 9 – Bài 45. Di truyền liên kết. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-9/bai-45', {
  objectives: [
    'Mô tả được thí nghiệm của Morgan trên ruồi giấm về di truyền liên kết.',
    'Nêu được khái niệm di truyền liên kết: các gene nằm trên cùng một NST thường di truyền cùng nhau.',
    'Nêu được ý nghĩa của di truyền liên kết trong chọn giống và so sánh với phân li độc lập.'
  ],
  intro: 'Ruồi giấm có khoảng hàng chục nghìn gene nhưng chỉ có 4 cặp NST. Vì vậy mỗi NST phải mang rất nhiều gene. Các gene “đi chung một chuyến xe” có di truyền độc lập như Mendel mô tả không?',
  steps: [
    { title: 'Thí nghiệm của Morgan', html: `<p>Morgan chọn ruồi giấm vì dễ nuôi, đẻ nhiều, vòng đời ngắn (khoảng 10 – 14 ngày, tham khảo), có nhiều biến dị dễ quan sát, ít NST (2n = 8).</p>
      <p>P: thân xám, cánh dài (thuần chủng) × thân đen, cánh cụt → F<sub>1</sub>: 100 % thân xám, cánh dài.</p>
      <p>Lai phân tích ruồi <b>đực</b> F<sub>1</sub> với ruồi cái thân đen, cánh cụt → F<sub>B</sub>: <b>1 thân xám, cánh dài : 1 thân đen, cánh cụt</b> (không phải 1 : 1 : 1 : 1).</p>`,
      svg: S.crossScheme({ title: 'Lai phân tích ruồi đực F₁ (Morgan)', rows: [['P', 'BV/BV (xám, dài)', '×', 'bv/bv (đen, cụt)'], ['F₁', 'BV/bv – 100 % xám, dài'], ['Pa', 'BV/bv (♂ F₁)', '×', 'bv/bv (♀)'], ['G', 'BV ; bv', '', 'bv'], ['Fa', '1 BV/bv (xám, dài) : 1 bv/bv (đen, cụt)']] }), caption: 'B – thân xám, b – thân đen; V – cánh dài, v – cánh cụt. Kết quả 1 : 1 chứng tỏ hai gene liên kết.' },
    { title: 'Giải thích', html: `<p>Hai gene quy định màu thân và độ dài cánh cùng nằm trên <b>một NST</b>. Ruồi đực F<sub>1</sub> (BV/bv) chỉ tạo hai loại giao tử BV và bv thay vì bốn loại.</p>
      <div class="box key"><b>Di truyền liên kết</b> là hiện tượng một nhóm tính trạng được di truyền cùng nhau, được quy định bởi các gene trên cùng một NST, cùng phân li trong quá trình phân bào.</div>`,
      svg: S.linkedGenes({ top: ['B', 'V'], bottom: ['b', 'v'] }), caption: 'Hai gene B, V cùng nằm trên một NST và di truyền cùng nhau.' },
    { title: 'So sánh với phân li độc lập', html: `<table><tr><th></th><th>Phân li độc lập</th><th>Liên kết gene</th></tr><tr><td>Vị trí gene</td><td>trên các cặp NST khác nhau</td><td>trên cùng một NST</td></tr><tr><td>Giao tử của AaBb</td><td>4 loại</td><td>2 loại (liên kết hoàn toàn)</td></tr><tr><td>Lai phân tích</td><td>1 : 1 : 1 : 1</td><td>1 : 1</td></tr><tr><td>Biến dị tổ hợp</td><td>nhiều</td><td>hạn chế</td></tr></table>` },
    { title: 'Ý nghĩa', html: `<ul><li>Di truyền liên kết <b>hạn chế xuất hiện biến dị tổ hợp</b>, đảm bảo sự di truyền bền vững của từng nhóm tính trạng.</li><li>Trong chọn giống, có thể chọn được những nhóm tính trạng tốt luôn đi kèm nhau (ví dụ ở lúa, gene năng suất cao liên kết với gene chống chịu).</li></ul>` }
  ],
  summary: 'Morgan lai phân tích ruồi đực F₁ thân xám, cánh dài thu được tỉ lệ 1 : 1 ⇒ hai gene cùng nằm trên một NST, di truyền liên kết. Di truyền liên kết: các gene trên cùng một NST cùng phân li khi phân bào, tạo thành nhóm gene liên kết; hạn chế biến dị tổ hợp, giúp chọn được nhóm tính trạng tốt đi kèm nhau.',
  examples: [
    { title: 'Số loại giao tử', problem: 'Cơ thể có kiểu gene AB/ab (liên kết hoàn toàn) tạo ra những loại giao tử nào?', solution: 'Hai loại: AB và ab, mỗi loại 1/2.' },
    { title: 'Tỉ lệ lai phân tích', problem: 'Lai phân tích AB/ab (liên kết hoàn toàn) với ab/ab. Tỉ lệ kiểu hình đời con?', solution: '1 AB/ab (trội cả hai tính trạng) : 1 ab/ab (lặn cả hai tính trạng).' },
    { title: 'Nhóm liên kết', problem: 'Ruồi giấm có 2n = 8. Số nhóm gene liên kết bằng bao nhiêu?', solution: 'Bằng số NST trong bộ đơn bội: n = 4 nhóm liên kết.' }
  ],
  exercises: [
    { question: 'Vì sao Morgan chọn ruồi giấm làm đối tượng nghiên cứu?', hints: ['Vòng đời và khả năng sinh sản.', 'Số NST, biến dị.'], solution: 'Dễ nuôi, vòng đời ngắn, đẻ nhiều, có nhiều biến dị dễ quan sát, số NST ít (2n = 8).' },
    { question: 'Lúa nước có 2n = 24. Lúa có bao nhiêu nhóm gene liên kết?', hints: ['Số nhóm liên kết = n.', '24 / 2.'], solution: '12 nhóm liên kết.' },
    { question: 'Phân biệt kết quả lai phân tích hai cặp tính trạng trong trường hợp phân li độc lập và liên kết hoàn toàn.', hints: ['Phân li độc lập: 4 loại giao tử.', 'Liên kết hoàn toàn: 2 loại giao tử.'], solution: 'Phân li độc lập: 1 : 1 : 1 : 1 (4 kiểu hình). Liên kết hoàn toàn: 1 : 1 (2 kiểu hình giống P).' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Các gene nằm trên cùng một NST có xu hướng di truyền cùng nhau.', answer: true, explain: 'Đó là di truyền liên kết.' },
    { type: 'mcq', q: 'Đối tượng nghiên cứu của Morgan là:', options: ['đậu Hà Lan', 'ruồi giấm', 'lúa nước', 'chuột'], answer: 1, explain: 'Ruồi giấm Drosophila.' },
    { type: 'mcq', q: 'Lai phân tích ruồi đực F₁ thân xám, cánh dài (BV/bv), Morgan thu được tỉ lệ:', options: ['1 : 1 : 1 : 1', '3 : 1', '1 : 1', '9 : 3 : 3 : 1'], answer: 2, explain: '1 xám, dài : 1 đen, cụt.' },
    { type: 'short', q: 'Ruồi giấm có 2n = 8. Số nhóm gene liên kết là bao nhiêu?', answer: '4', unit: 'nhóm', calc: '8/2', explain: 'Bằng n = 4.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Di truyền liên kết làm tăng xuất hiện biến dị tổ hợp.', answer: false, explain: 'Liên kết gene hạn chế biến dị tổ hợp.' },
    { type: 'short', q: 'Đậu Hà Lan có 2n = 14. Số nhóm gene liên kết là bao nhiêu?', answer: '7', unit: 'nhóm', calc: '14/2', explain: 'n = 7.' },
    { type: 'mcq', q: 'Cơ thể AB/ab liên kết hoàn toàn tạo bao nhiêu loại giao tử?', options: ['1', '2', '3', '4'], answer: 1, explain: 'AB và ab.' },
    { type: 'mcq', q: 'Ý nghĩa của di truyền liên kết trong chọn giống là:', options: ['tạo nhiều biến dị tổ hợp', 'chọn được nhóm tính trạng tốt luôn đi kèm nhau', 'làm tăng số NST', 'gây đột biến'], answer: 1, explain: 'Các gene tốt liên kết được di truyền cùng nhau.' }
  ]
});
})();
