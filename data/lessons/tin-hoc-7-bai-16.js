/* Tin học 7 – Bài 16. Thuật toán sắp xếp. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-7/bai-16', {
  objectives: [
    'Giải thích được ý tưởng của thuật toán sắp xếp nổi bọt và sắp xếp chọn.',
    'Mô phỏng được từng bước hai thuật toán trên dãy số nhỏ; đếm số lần đổi chỗ.',
    'Nêu được ý nghĩa của việc chia một bài toán lớn thành các bài toán nhỏ.'
  ],
  intro: 'Xếp hàng theo chiều cao, sắp xếp danh sách theo điểm, theo vần… Máy tính sắp xếp hàng triệu dữ liệu mỗi ngày bằng các <b>thuật toán sắp xếp</b>. Hãy tìm hiểu hai thuật toán đơn giản.',
  steps: [
    { title: 'Sắp xếp nổi bọt', html: `<p><b>Sắp xếp nổi bọt</b> (tăng dần): duyệt dãy từ đầu, so sánh <b>hai phần tử liền kề</b>; nếu phần tử trước lớn hơn phần tử sau thì <b>đổi chỗ</b>. Sau mỗi lượt, phần tử lớn nhất còn lại “nổi” về cuối. Lặp lại đến khi không còn đổi chỗ.</p>`,
      svg: S.arraySteps({ title: 'Nổi bọt dãy 5, 3, 8, 1 (lượt 1)', steps: [{ label: 'Bắt đầu', vals: [5, 3, 8, 1], hl: [0, 1], note: '5 > 3 → đổi chỗ' }, { label: 'So 2', vals: [3, 5, 8, 1], hl: [1, 2], note: '5 < 8 → giữ nguyên' }, { label: 'So 3', vals: [3, 5, 8, 1], hl: [2, 3], note: '8 > 1 → đổi chỗ' }, { label: 'Hết lượt 1', vals: [3, 5, 1, 8], ok: [3], note: '8 đã về đúng vị trí cuối' }], legend: 'Ô vàng: cặp liền kề đang so sánh; ô xanh: đã đúng vị trí' }), caption: 'Lượt 1 đưa số lớn nhất về cuối dãy.' },
    { title: 'Các lượt tiếp theo', html: `<p>Lượt 2: 3, 5, 1, 8 → (3, 5) giữ; (5, 1) đổi → 3, 1, 5, 8. Lượt 3: (3, 1) đổi → <b>1, 3, 5, 8</b>. Tổng cộng 4 lần đổi chỗ.</p>`,
      svg: S.arraySteps({ title: 'Trạng thái sau mỗi lượt', steps: [{ label: 'Ban đầu', vals: [5, 3, 8, 1] }, { label: 'Lượt 1', vals: [3, 5, 1, 8], ok: [3], note: '2 lần đổi chỗ' }, { label: 'Lượt 2', vals: [3, 1, 5, 8], ok: [2, 3], note: '1 lần đổi chỗ' }, { label: 'Lượt 3', vals: [1, 3, 5, 8], ok: [0, 1, 2, 3], note: '1 lần đổi chỗ – xong' }] }), caption: 'Sau 3 lượt dãy đã tăng dần.' },
    { title: 'Sắp xếp chọn', html: `<p><b>Sắp xếp chọn</b> (tăng dần): ở lượt thứ i, <b>chọn phần tử nhỏ nhất</b> trong phần chưa sắp xếp rồi đổi chỗ nó với phần tử ở vị trí i.</p>`,
      svg: S.arraySteps({ title: 'Sắp xếp chọn dãy 5, 3, 8, 1', steps: [{ label: 'Ban đầu', vals: [5, 3, 8, 1], hl: [0, 3], note: 'Nhỏ nhất là 1 → đổi với vị trí 1' }, { label: 'Lượt 1', vals: [1, 3, 8, 5], ok: [0], hl: [1], note: 'Nhỏ nhất còn lại là 3, đã đúng chỗ' }, { label: 'Lượt 2', vals: [1, 3, 8, 5], ok: [0, 1], hl: [2, 3], note: 'Nhỏ nhất còn lại 5 → đổi với 8' }, { label: 'Lượt 3', vals: [1, 3, 5, 8], ok: [0, 1, 2, 3], note: 'Xong' }] }), caption: 'Mỗi lượt đưa phần tử nhỏ nhất còn lại về đúng chỗ.' },
    { title: 'Chia bài toán thành bài toán nhỏ', html: `<p>Cả hai thuật toán đều <b>chia</b> việc sắp xếp cả dãy thành nhiều <b>bài toán nhỏ</b> lặp lại: mỗi lượt chỉ cần đưa một phần tử về đúng vị trí. Chia nhỏ giúp vấn đề dễ hiểu, dễ giải quyết và dễ kiểm tra hơn.</p>
      <div class="box key">Nổi bọt: đổi chỗ cặp liền kề sai thứ tự. Chọn: chọn nhỏ nhất, đưa lên đầu phần chưa xếp.</div>` }
  ],
  summary: 'Sắp xếp nổi bọt so sánh, đổi chỗ các cặp liền kề sai thứ tự; mỗi lượt đưa phần tử lớn nhất còn lại về cuối. Sắp xếp chọn mỗi lượt chọn phần tử nhỏ nhất còn lại và đưa về đầu phần chưa sắp xếp. Cả hai chia bài toán lớn thành các bài toán nhỏ lặp lại.',
  examples: [
    { title: 'Nổi bọt một lượt', problem: 'Thực hiện lượt 1 sắp xếp nổi bọt tăng dần cho dãy 4, 2, 6, 3.', solution: '(4, 2) đổi → 2, 4, 6, 3; (4, 6) giữ; (6, 3) đổi → 2, 4, 3, 6.' },
    { title: 'Sắp xếp chọn', problem: 'Sắp xếp chọn tăng dần dãy 7, 9, 2, 5.', solution: 'Lượt 1: nhỏ nhất 2, đổi với 7 → 2, 9, 7, 5. Lượt 2: nhỏ nhất còn lại 5, đổi với 9 → 2, 5, 7, 9. Lượt 3: 7 đã đúng → 2, 5, 7, 9.' },
    { title: 'Sắp xếp giảm dần', problem: 'Muốn sắp xếp nổi bọt giảm dần, đổi chỗ khi nào?', solution: 'Đổi chỗ khi phần tử trước nhỏ hơn phần tử sau.' }
  ],
  exercises: [
    { question: 'Sắp xếp nổi bọt tăng dần dãy 3, 1, 2. Ghi dãy sau mỗi lượt và đếm số lần đổi chỗ.', hints: ['Lượt 1: so (3, 1) rồi (3, 2).', 'Lượt 2: so (1, 2).'], solution: 'Lượt 1: 1, 3, 2 → 1, 2, 3 (2 lần đổi). Lượt 2: không đổi. Tổng 2 lần đổi chỗ.' },
    { question: 'Với dãy 4 phần tử, lượt 1 của sắp xếp nổi bọt cần bao nhiêu lần so sánh? Cả 3 lượt (không dừng sớm) cần bao nhiêu lần?', hints: ['Lượt 1 so sánh các cặp (1,2), (2,3), (3,4).', 'Các lượt sau giảm dần 1 cặp.'], solution: 'Lượt 1: 3 lần; tổng 3 + 2 + 1 = 6 lần.' },
    { question: 'Sắp xếp chọn dãy 6, 4, 9, 1, 7: ghi dãy sau lượt 1 và lượt 2.', hints: ['Lượt 1: nhỏ nhất là 1.', 'Lượt 2: nhỏ nhất trong 4, 9, 6, 7.'], solution: 'Lượt 1: 1, 4, 9, 6, 7. Lượt 2: 4 đã đúng chỗ → 1, 4, 9, 6, 7.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Sắp xếp nổi bọt so sánh các cặp phần tử liền kề.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Sau lượt 1 sắp xếp nổi bọt tăng dần, phần tử nào chắc chắn ở cuối dãy?', options: ['Nhỏ nhất', 'Lớn nhất', 'Phần tử đầu', 'Không xác định'], answer: 1, explain: 'Lớn nhất nổi về cuối.' },
    { type: 'mcq', q: 'Sắp xếp chọn tăng dần: lượt 1 đưa phần tử nào về vị trí đầu?', options: ['Lớn nhất', 'Nhỏ nhất', 'Phần tử giữa', 'Phần tử cuối'], answer: 1, explain: 'Nhỏ nhất.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Sắp xếp nổi bọt tăng dần đổi chỗ khi phần tử trước nhỏ hơn phần tử sau.', answer: false, explain: 'Đổi khi phần tử trước lớn hơn.' },
    { type: 'short', q: 'Lượt 1 sắp xếp nổi bọt dãy 5 phần tử cần bao nhiêu lần so sánh?', answer: '4', unit: 'lần', calc: '5-1', explain: '4 cặp liền kề.' },
    { type: 'short', q: 'Sắp xếp nổi bọt dãy 6 phần tử, chạy đủ các lượt (không dừng sớm). Tổng số lần so sánh?', answer: '15', unit: 'lần', calc: '6*5/2', explain: '5 + 4 + 3 + 2 + 1.' },
    { type: 'short', q: 'Sắp xếp nổi bọt tăng dần dãy 2, 1, 4, 3. Tổng số lần đổi chỗ?', answer: '2', unit: 'lần', calc: '2', explain: 'Đổi (2,1) và (4,3).' },
    { type: 'mcq', q: 'Dãy 8, 2, 5 sau lượt 1 sắp xếp chọn tăng dần là:', options: ['2, 8, 5', '2, 5, 8', '8, 5, 2', '5, 2, 8'], answer: 0, explain: '2 đổi chỗ với 8.' }
  ]
});
})();
