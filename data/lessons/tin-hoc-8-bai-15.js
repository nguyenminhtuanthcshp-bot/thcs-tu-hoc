/* Tin học 8 – Bài 15. Gỡ lỗi. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-8/bai-15', {
  objectives: [
    'Nhận biết được các loại lỗi: lỗi cú pháp, lỗi khi chạy, lỗi logic.',
    'Sử dụng được cách kiểm thử với bộ dữ liệu và theo dõi giá trị biến để tìm lỗi.',
    'Sửa được lỗi trong các chương trình Scratch đơn giản.'
  ],
  intro: 'Chương trình chạy nhưng kết quả sai: tính tổng 1 đến 10 lại ra 45 thay vì 55. Tìm và sửa những “con bọ” (bug) như vậy gọi là <b>gỡ lỗi</b> (debug).',
  steps: [
    { title: 'Các loại lỗi', html: `<p>Ba loại lỗi thường gặp:</p>`,
      svg: S.table({ title: 'Các loại lỗi', head: ['Loại lỗi', 'Biểu hiện', 'Ví dụ'], rows: [['Cú pháp', 'Viết sai quy tắc của ngôn ngữ', 'Thiếu dấu ngoặc (Python)'], ['Khi chạy', 'Chương trình dừng hoặc báo lỗi', 'Chia cho 0'], ['Logic', 'Chạy được nhưng kết quả sai', 'Lặp thiếu một lần']], colW: 215 }), caption: 'Scratch hạn chế lỗi cú pháp nhờ kéo thả, nhưng vẫn có lỗi logic.' },
    { title: 'Kiểm thử với bộ dữ liệu', html: `<p>Chuẩn bị các bộ dữ liệu <b>đã biết trước kết quả</b>, gồm trường hợp thông thường và trường hợp đặc biệt (biên, bằng 0, số âm). So sánh kết quả chương trình với kết quả đúng.</p>`,
      svg: S.table({ title: 'Kiểm thử chương trình xếp loại (đạt khi điểm ≥ 5)', head: ['Điểm nhập', 'Mong đợi', 'Chương trình cho', 'Đánh giá'], rows: [['8', 'Đạt', 'Đạt', 'Đúng'], ['3', 'Chưa đạt', 'Chưa đạt', 'Đúng'], ['5 (biên)', 'Đạt', 'Chưa đạt', 'SAI']], colW: 130 }), caption: 'Trường hợp biên phát hiện lỗi: điều kiện viết “> 5” thay vì “≥ 5”.' },
    { title: 'Theo dõi giá trị biến', html: `<p>Hiển thị biến trên sân khấu (đánh dấu ô vuông cạnh tên biến), thêm khối <b>nói</b> hoặc <b>đợi</b> để chạy chậm, xem giá trị qua từng vòng lặp.</p>`,
      svg: S.table({ title: 'Theo dõi biến khi chỉ lặp 9 lần (lỗi)', head: ['Vòng lặp', 'i', 'tổng'], rows: [['1', '1', '1'], ['2', '2', '3'], ['3', '3', '6'], ['…', '…', '…'], ['9', '9', '45 (dừng – thiếu i = 10)']], colW: 170 }), caption: 'Theo dõi biến cho thấy vòng lặp thiếu một lần.' },
    { title: 'Quy trình gỡ lỗi', html: `<ol><li>Chạy thử, phát hiện kết quả sai.</li><li>Khoanh vùng: lỗi ở khối lệnh nào?</li><li>Tìm nguyên nhân, sửa.</li><li>Chạy lại <b>tất cả</b> bộ kiểm thử.</li></ol>
      <div class="box key">Kiểm thử cả trường hợp biên; theo dõi biến để khoanh vùng lỗi.</div>` }
  ],
  summary: 'Lỗi cú pháp (sai quy tắc ngôn ngữ), lỗi khi chạy (chia cho 0…), lỗi logic (chạy được nhưng sai). Gỡ lỗi: kiểm thử với bộ dữ liệu đã biết kết quả (cả trường hợp biên), theo dõi giá trị biến, khoanh vùng, sửa, chạy lại toàn bộ kiểm thử.',
  examples: [
    { title: 'Phân loại lỗi', problem: 'Chương trình tính trung bình chia tổng cho số bạn; khi số bạn = 0 chương trình báo lỗi. Đây là lỗi gì?', solution: 'Lỗi khi chạy (chia cho 0).' },
    { title: 'Lỗi logic', problem: 'Chương trình đổi phút ra giây dùng “phút × 100”. Nhập 2 ra 200. Sửa thế nào?', solution: 'Lỗi logic; sửa thành phút × 60 (2 phút → 120 giây).' },
    { title: 'Chọn bộ kiểm thử', problem: 'Chương trình kiểm tra số dương (n > 0). Đề xuất 3 bộ dữ liệu.', solution: 'n = 5 (dương), n = −3 (âm), n = 0 (biên – không dương).' }
  ],
  exercises: [
    { question: 'Chương trình tổng 1..10 dùng “lặp lại 10 lần” nhưng đặt i thành 0 lúc đầu. Kết quả là bao nhiêu và vì sao sai?', hints: ['i lần lượt 0, 1, …, 9.', 'Cộng các giá trị đó.'], solution: '0 + 1 + … + 9 = 45; sai vì thiếu 10 – cần đặt i thành 1.' },
    { question: 'Nêu ba bộ kiểm thử cho chương trình “đạt khi điểm ≥ 5”.', hints: ['Một số lớn hơn 5, một số nhỏ hơn.', 'Trường hợp biên.'], solution: 'Ví dụ: 7 → Đạt; 2 → Chưa đạt; 5 → Đạt.' },
    { question: 'Chương trình tính chu vi hình chữ nhật dùng (dài + rộng) × 2 nhưng viết dài + rộng × 2. Với dài 5, rộng 3: kết quả sai và kết quả đúng?', hints: ['Nhân trước cộng sau.', 'Cần dấu ngoặc.'], solution: 'Sai: 5 + 6 = 11; đúng: 16.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Lỗi logic làm chương trình vẫn chạy nhưng cho kết quả sai.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Chia một số cho 0 gây ra:', options: ['lỗi cú pháp', 'lỗi khi chạy', 'không lỗi', 'lỗi phần cứng'], answer: 1, explain: 'Lỗi khi chạy.' },
    { type: 'short', q: 'Chương trình tính tổng 1..n nhưng lặp thiếu một lần, với n = 10 cho kết quả bao nhiêu?', answer: '45', calc: '9*10/2', explain: '1 + … + 9.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Chỉ cần kiểm thử một bộ dữ liệu là đủ.', answer: false, explain: 'Cần nhiều bộ, cả biên.' },
    { type: 'mcq', q: 'Với chương trình “đạt khi điểm ≥ 5”, bộ dữ liệu biên là:', options: ['10', '5', '0', '7'], answer: 1, explain: '5.' },
    { type: 'short', q: 'Viết nhầm dài + rộng × 2 với dài 6, rộng 4. Chương trình cho kết quả bao nhiêu?', answer: '14', calc: '6+4*2', explain: '6 + 8.' },
    { type: 'short', q: 'Chương trình đổi phút ra giây viết nhầm × 100. Nhập 3 thì kết quả sai hơn kết quả đúng bao nhiêu?', answer: '120', calc: '3*100-3*60', explain: '300 − 180.' },
    { type: 'mcq', q: 'Sau khi sửa lỗi, nên:', options: ['chạy lại tất cả bộ kiểm thử', 'xoá chương trình', 'không cần kiểm tra', 'chỉ chạy bộ vừa sai'], answer: 0, explain: 'Chạy lại tất cả.' }
  ]
});
})();
