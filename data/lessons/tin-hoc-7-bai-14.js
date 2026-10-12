/* Tin học 7 – Bài 14. Thuật toán tìm kiếm tuần tự. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-7/bai-14', {
  objectives: [
    'Giải thích được ý tưởng của thuật toán tìm kiếm tuần tự.',
    'Mô phỏng được từng bước tìm kiếm tuần tự trên một dãy cụ thể; đếm được số lần so sánh.',
    'Biểu diễn được thuật toán tìm kiếm tuần tự bằng các bước liệt kê và sơ đồ khối.'
  ],
  intro: 'Tìm một bạn tên Lan trong danh sách lớp chưa sắp xếp, em sẽ đọc lần lượt từ tên đầu tiên cho đến khi gặp. Đó chính là <b>tìm kiếm tuần tự</b>.',
  steps: [
    { title: 'Ý tưởng', html: `<p><b>Tìm kiếm tuần tự</b>: lần lượt so sánh giá trị cần tìm với từng phần tử của dãy, từ đầu đến cuối. Dừng khi tìm thấy, hoặc khi đã xét hết dãy mà không thấy.</p>
      <p>Thuật toán dùng được với <b>mọi dãy</b>, kể cả chưa sắp xếp.</p>` },
    { title: 'Mô phỏng từng bước', html: `<p>Tìm số <b>12</b> trong dãy 7, 4, 15, 12, 9.</p>`,
      svg: S.arraySteps({ title: 'Tìm 12 trong dãy 7, 4, 15, 12, 9', steps: [{ vals: [7, 4, 15, 12, 9], hl: [0], note: '7 ≠ 12, xét tiếp' }, { vals: [7, 4, 15, 12, 9], hl: [1], dim: [0], note: '4 ≠ 12, xét tiếp' }, { vals: [7, 4, 15, 12, 9], hl: [2], dim: [0, 1], note: '15 ≠ 12, xét tiếp' }, { vals: [7, 4, 15, 12, 9], ok: [3], dim: [0, 1, 2], note: '12 = 12: tìm thấy ở vị trí 4' }], legend: 'Ô vàng: đang so sánh; ô xám: đã xét; ô xanh: tìm thấy' }), caption: 'Sau 4 lần so sánh thì tìm thấy.' },
    { title: 'Sơ đồ khối', html: `<p>Các bước: (1) Xét phần tử đầu tiên. (2) Nếu bằng giá trị cần tìm → thông báo “tìm thấy”, kết thúc. (3) Nếu chưa hết dãy → xét phần tử tiếp theo, quay lại (2). (4) Hết dãy → “không tìm thấy”.</p>`,
      svg: S.flowchart({ title: 'Tìm kiếm tuần tự', steps: [{ t: 'start', s: 'Bắt đầu' }, { t: 'proc', s: 'Xét phần tử đầu tiên' }, { t: 'loop', s: 'Chưa thấy, còn phần tử?', body: ['Xét phần tử tiếp theo'] }, { t: 'io', s: 'Thông báo kết quả' }, { t: 'end', s: 'Kết thúc' }] }), caption: 'Lặp lại việc so sánh cho đến khi tìm thấy hoặc hết dãy.' },
    { title: 'Số lần so sánh', html: `<p>Với dãy n phần tử: nếu phần tử cần tìm ở vị trí k thì cần k lần so sánh; nếu không có trong dãy thì cần <b>n</b> lần (trường hợp xấu nhất).</p>
      <div class="box key">Tuần tự: so sánh lần lượt; nhiều nhất n lần với dãy n phần tử.</div>` }
  ],
  summary: 'Tìm kiếm tuần tự so sánh lần lượt giá trị cần tìm với từng phần tử từ đầu dãy; dừng khi tìm thấy hoặc hết dãy. Dùng được cho dãy chưa sắp xếp. Phần tử ở vị trí k cần k lần so sánh; không có trong dãy cần n lần.',
  examples: [
    { title: 'Mô phỏng', problem: 'Tìm 9 trong dãy 7, 4, 15, 12, 9. Cần mấy lần so sánh?', solution: '9 ở vị trí 5 nên cần 5 lần so sánh.' },
    { title: 'Không tìm thấy', problem: 'Tìm 10 trong dãy 7, 4, 15, 12, 9.', solution: 'So sánh cả 5 phần tử, không có phần tử nào bằng 10 → “không tìm thấy”, 5 lần so sánh.' },
    { title: 'Trong đời sống', problem: 'Nêu một tình huống dùng tìm kiếm tuần tự.', solution: 'Tìm chiếc áo màu đỏ trong chồng quần áo chưa xếp: lấy lần lượt từng chiếc ra xem.' }
  ],
  exercises: [
    { question: 'Mô phỏng tìm kiếm tuần tự số 3 trong dãy 8, 3, 6, 3, 1. Kết quả là vị trí nào?', hints: ['Dừng ở lần gặp đầu tiên.', 'So sánh 8, rồi 3.'], solution: 'Tìm thấy ở vị trí 2 sau 2 lần so sánh.' },
    { question: 'Danh sách có 45 học sinh, chưa sắp xếp. Trường hợp xấu nhất cần bao nhiêu lần so sánh để tìm một tên?', hints: ['Trường hợp xấu nhất là khi nào?', 'Phải xét hết dãy.'], solution: '45 lần.' },
    { question: 'Viết các bước tìm kiếm tuần tự “Lan” trong danh sách tên.', hints: ['Bắt đầu từ tên đầu tiên.', 'Khi nào dừng?'], solution: 'B1: xét tên đầu. B2: nếu là “Lan” → tìm thấy, dừng. B3: nếu còn tên → xét tên tiếp theo, quay lại B2. B4: hết danh sách → không tìm thấy.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tìm kiếm tuần tự dùng được cho dãy chưa sắp xếp.', answer: true, explain: 'Đúng.' },
    { type: 'short', q: 'Tìm 6 trong dãy 2, 9, 6, 1, 5 bằng tìm kiếm tuần tự. Cần mấy lần so sánh?', answer: '3', unit: 'lần', calc: '3', explain: '6 ở vị trí 3.' },
    { type: 'short', q: 'Dãy 30 phần tử, giá trị cần tìm không có trong dãy. Số lần so sánh?', answer: '30', unit: 'lần', calc: '30', explain: 'Phải xét hết.' },
    { type: 'mcq', q: 'Tìm kiếm tuần tự dừng lại khi:', options: ['đã so sánh một nửa dãy', 'tìm thấy hoặc hết dãy', 'gặp số lớn nhất', 'gặp số 0'], answer: 1, explain: 'Đúng.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tìm kiếm tuần tự bắt đầu so sánh từ phần tử ở giữa dãy.', answer: false, explain: 'Bắt đầu từ đầu dãy.' },
    { type: 'mcq', q: 'Tìm 5 trong dãy 5, 8, 2. Số lần so sánh là:', options: ['1', '2', '3', '0'], answer: 0, explain: 'Ở ngay vị trí đầu.' },
    { type: 'short', q: 'Tìm 4 trong dãy 4, 7, 4, 4. Tìm thấy ở vị trí nào (lần gặp đầu tiên)?', answer: '1', calc: '1', explain: 'Dừng ngay ở vị trí 1.' },
    { type: 'mcq', q: 'Trường hợp xấu nhất với dãy n phần tử cần:', options: ['1 lần', 'n lần', 'n/2 lần', '2n lần'], answer: 1, explain: 'n lần.' }
  ]
});
})();
