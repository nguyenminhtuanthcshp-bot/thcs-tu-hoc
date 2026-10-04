/* Toán 7 – Bài tập cuối chương VIII. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, C = S.C;
THCS.registerLesson('toan-7/c8-on-tap', {
  objectives: [
    'Hệ thống kiến thức chương VIII: biến cố và xác suất của biến cố.',
    'Giải bài tập tổng hợp phân loại biến cố và tính xác suất.',
    'Vận dụng xác suất vào tình huống thực tế: trò chơi, bốc thăm, chọn ngẫu nhiên.'
  ],
  intro: 'Ôn tập chương VIII. Xác suất không cho biết chắc điều gì sẽ xảy ra, nhưng cho biết điều gì “dễ” xảy ra hơn – rất hữu ích khi phải ra quyết định.',
  steps: [
    { title: 'Sơ đồ chương', html: `<p>Các ý chính của chương:</p>`,
      svg: S.mindmap({ center: 'Biến cố, xác suất', branches: [{ title: 'Chắc chắn', items: ['luôn xảy ra', 'xác suất 1'] }, { title: 'Không thể', items: ['không xảy ra', 'xác suất 0'] }, { title: 'Ngẫu nhiên', items: ['có thể xảy ra', 'giữa 0 và 1'] }, { title: 'Đồng khả năng', items: ['n kết quả', 'k/n'] }] }) },
    { title: 'Thang xác suất', html: `<p>Đặt một số biến cố khi gieo xúc xắc lên thang từ 0 đến 1:</p>`,
      svg: S.draw({ w: 440, h: 90, items: [{ seg: [30, 40, 410, 40], width: 3 }, { text: [30, 25, '0'], size: 13 }, { text: [410, 25, '1'], size: 13 }, { pt: [30, 40, 'số 7', 0, 26], color: C.red }, { pt: [93, 40, 'mặt 6', 0, 26], color: C.orange }, { pt: [220, 40, 'số chẵn', 0, 26], color: C.blue }, { pt: [347, 40, 'khác 6', 0, 26], color: C.purple }, { pt: [410, 40, '< 7', 0, 26], color: C.green }] }),
      caption: 'Không thể – {{1|6}} – {{1|2}} – {{5|6}} – chắc chắn.' },
    { title: 'Lỗi thường gặp', html: `<ul><li>Quên kiểm tra các kết quả có đồng khả năng không.</li><li>Đếm sót hoặc đếm trùng kết quả thuận lợi.</li><li>Không rút gọn phân số.</li><li>Nhầm “lớn hơn 4” (5, 6) với “không nhỏ hơn 4” (4, 5, 6).</li></ul>` },
    { title: 'Bài toán mẫu', html: `<p>Hộp có các thẻ số 1, 2, …, 15. Rút ngẫu nhiên một thẻ.</p><ol><li>A “số chính phương”: 1, 4, 9 ⇒ {{3|15}} = {{1|5}}.</li><li>B “số lớn hơn 15”: không thể ⇒ 0.</li><li>C “số có một hoặc hai chữ số”: chắc chắn ⇒ 1.</li></ol>` }
  ],
  summary: 'Biến cố chắc chắn (1), không thể (0), ngẫu nhiên (từ 0 đến 1). Khi n kết quả đồng khả năng: xác suất = {{k|n}} (k kết quả thuận lợi), rút gọn tối giản.',
  examples: [
    { title: 'Bốc thăm', problem: 'Lớp có 36 học sinh, trong đó 12 bạn đội tuyển. Bốc thăm ngẫu nhiên một bạn. Tính xác suất bạn đó ở đội tuyển.', solution: '{{12|36}} = {{1|3}}.' },
    { title: 'Số chính phương', problem: 'Rút một thẻ từ 15 thẻ số 1 – 15. Tính xác suất số chính phương.', solution: '{{1|5}}.' },
    { title: 'Đồng xu hai lần', problem: 'Tung đồng xu hai lần. Các kết quả: SS, SN, NS, NN. Tính xác suất có đúng một lần ngửa.', solution: 'SN, NS ⇒ {{2|4}} = {{1|2}}.' }
  ],
  exercises: [
    { question: 'Gieo xúc xắc. Tính xác suất “số chấm là bội của 3”.', hints: ['3, 6.', '{{2|6}}.'], solution: '{{1|3}}.' },
    { question: 'Tung đồng xu hai lần. Tính xác suất cả hai lần đều sấp.', hints: ['4 kết quả đồng khả năng.', 'Chỉ SS.'], solution: '{{1|4}}.' },
    { question: 'Một vòng quay chia 8 ô bằng nhau, trong đó 3 ô ghi “Thưởng”. Tính xác suất quay vào ô “Thưởng”.', hints: ['8 kết quả.', '3 thuận lợi.'], solution: '{{3|8}}.' }
  ],
  quiz: [
    { type: 'short', calc: '12 / 36', requireSimplest: true, q: 'Lớp 36 bạn, 12 bạn đội tuyển. Xác suất bốc thăm được bạn đội tuyển (phân số tối giản)?', answer: '1/3', explain: '{{12|36}}.' },
    { type: 'short', calc: '3 / 15', requireSimplest: true, q: 'Rút một thẻ từ 15 thẻ số 1 – 15. Xác suất số chính phương (phân số tối giản)?', answer: '1/5', explain: '1, 4, 9.' },
    { type: 'short', calc: '2 / 4', requireSimplest: true, q: 'Tung đồng xu hai lần. Xác suất có đúng một lần ngửa (phân số tối giản)?', answer: '1/2', explain: 'SN, NS.' },
    { type: 'short', calc: '1 / 4', requireSimplest: true, q: 'Tung đồng xu hai lần. Xác suất cả hai lần sấp?', answer: '1/4', explain: 'Chỉ SS.' },
    { type: 'short', calc: '3 / 8', requireSimplest: true, q: 'Vòng quay 8 ô bằng nhau, 3 ô “Thưởng”. Xác suất quay vào ô “Thưởng”?', answer: '3/8', explain: '3 trên 8.' },
    { type: 'short', calc: '5 / 6', requireSimplest: true, q: 'Gieo xúc xắc. Xác suất “số chấm khác 6” (phân số tối giản)?', answer: '5/6', explain: '5 kết quả thuận lợi.' },
    { type: 'mcq', q: 'Rút thẻ từ các thẻ số 1 – 15. Biến cố “số lớn hơn 15” có xác suất:', options: ['0', '{{1|15}}', '1', '{{15|16}}'], answer: 0, explain: 'Biến cố không thể.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Biến cố ngẫu nhiên có xác suất lớn hơn 0 và nhỏ hơn 1.', answer: true, explain: 'Có thể xảy ra hoặc không.' }
  ]
});
})();
