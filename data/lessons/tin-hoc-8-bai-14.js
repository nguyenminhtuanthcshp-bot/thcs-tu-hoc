/* Tin học 8 – Bài 14. Cấu trúc điều khiển. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-8/bai-14', {
  objectives: [
    'Nêu được ba cấu trúc điều khiển: tuần tự, rẽ nhánh, lặp; nhận biết khối lệnh tương ứng trong Scratch.',
    'Sử dụng được cấu trúc rẽ nhánh dạng thiếu (nếu … thì) và dạng đủ (nếu … thì … nếu không thì).',
    'Sử dụng được cấu trúc lặp với số lần biết trước và lặp có điều kiện; tính được kết quả chương trình.'
  ],
  intro: 'Mọi chương trình, dù phức tạp đến đâu, đều được ghép từ ba “viên gạch”: làm lần lượt, chọn một trong hai, và làm đi làm lại. Đó là ba <b>cấu trúc điều khiển</b>.',
  steps: [
    { title: 'Ba cấu trúc điều khiển', html: `<ul><li><b>Tuần tự</b>: các lệnh thực hiện lần lượt từ trên xuống.</li><li><b>Rẽ nhánh</b>: kiểm tra điều kiện để chọn lệnh thực hiện.</li><li><b>Lặp</b>: lặp lại một nhóm lệnh.</li></ul>` },
    { title: 'Rẽ nhánh', html: `<p><b>Dạng thiếu</b>: <i>nếu</i> điều kiện đúng <i>thì</i> làm việc A. <b>Dạng đủ</b>: <i>nếu</i> điều kiện đúng <i>thì</i> A, <i>nếu không thì</i> B. Ví dụ: nếu điểm ≥ 5 thì nói “Đạt”, nếu không thì nói “Chưa đạt”.</p>`,
      svg: S.flowchart({ title: 'Rẽ nhánh dạng đủ', steps: [{ t: 'start', s: 'Bắt đầu' }, { t: 'io', s: 'Nhập điểm' }, { t: 'if', s: 'điểm ≥ 5?', yes: 'Nói “Đạt”', no: 'Nói “Chưa đạt”' }, { t: 'end', s: 'Kết thúc' }] }), caption: 'Chỉ một trong hai nhánh được thực hiện.' },
    { title: 'Lặp với số lần biết trước', html: `<p>Khối <b>lặp lại n lần</b>. Ví dụ tính tổng 1 + 2 + … + 10:</p>`,
      svg: S.blocks({ title: 'Tính tổng 1 + 2 + … + 10', stack: [{ k: 'event', s: 'khi bấm vào lá cờ xanh' }, { k: 'variables', s: 'đặt tổng thành 0' }, { k: 'variables', s: 'đặt i thành 1' }, { k: 'control', s: 'lặp lại 10 lần', inner: [{ k: 'variables', s: 'thay đổi tổng một lượng (i)' }, { k: 'variables', s: 'thay đổi i một lượng 1' }] }, { k: 'looks', s: 'nói (tổng)' }] }), caption: 'Kết quả: tổng = 55.' },
    { title: 'Lặp có điều kiện', html: `<p>Khối <b>lặp lại cho đến khi &lt;điều kiện&gt;</b>: lặp đến khi điều kiện đúng thì dừng. Ví dụ: nhân vật di chuyển cho đến khi chạm cạnh sân khấu. Khối <b>liên tục</b> lặp mãi (dùng trong trò chơi).</p>
      <div class="box key">Tuần tự – rẽ nhánh (nếu … thì … nếu không thì) – lặp (n lần / cho đến khi).</div>` }
  ],
  summary: 'Ba cấu trúc điều khiển: tuần tự, rẽ nhánh, lặp. Rẽ nhánh dạng thiếu (nếu … thì) và dạng đủ (nếu … thì … nếu không thì). Lặp với số lần biết trước (lặp lại n lần), lặp có điều kiện (lặp lại cho đến khi), lặp liên tục.',
  examples: [
    { title: 'Kết quả rẽ nhánh', problem: 'Nếu x chia hết cho 2 thì nói “Chẵn”, nếu không thì nói “Lẻ”. Với x = 15?', solution: '“Lẻ”.' },
    { title: 'Kết quả lặp', problem: 'đặt s thành 1; lặp lại 5 lần: đặt s thành (s × 2). s bằng bao nhiêu?', solution: '1 × 2⁵ = 32.' },
    { title: 'Lặp có điều kiện', problem: 'đặt n thành 0; lặp lại cho đến khi n > 20: thay đổi n một lượng 6. Giá trị cuối của n?', solution: '6, 12, 18, 24 → dừng khi n = 24.' }
  ],
  exercises: [
    { question: 'Viết (bằng khối lệnh mô tả bằng lời) chương trình nhập tuổi, nếu tuổi ≥ 13 thì nói “Đủ tuổi”, nếu không thì nói “Chưa đủ tuổi”.', hints: ['Dùng hỏi … và đợi.', 'Khối nếu … thì … nếu không thì.'], solution: 'khi bấm lá cờ → hỏi Tuổi? và đợi → nếu (trả lời) > 12 thì nói “Đủ tuổi” nếu không thì nói “Chưa đủ tuổi”.' },
    { question: 'Sửa chương trình ở bước 3 để tính tổng 1 + 2 + … + 20. Kết quả?', hints: ['Đổi số lần lặp.', 'Tổng = 20 × 21 : 2.'], solution: 'Đổi “lặp lại 10 lần” thành “lặp lại 20 lần”; kết quả 210.' },
    { question: 'đặt a thành 100; lặp lại cho đến khi a < 30: đặt a thành (a − 25). Giá trị cuối của a và số lần lặp?', hints: ['100 → 75 → …', 'Dừng khi a < 30.'], solution: '75, 50, 25 → a = 25 sau 3 lần lặp.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Có ba cấu trúc điều khiển cơ bản là tuần tự, rẽ nhánh và lặp.', answer: true, explain: 'Đúng.' },
    { type: 'short', q: 'Chương trình tính tổng 1 + 2 + … + 10 cho kết quả bao nhiêu?', answer: '55', calc: '10*11/2', explain: '55.' },
    { type: 'mcq', q: 'Khối “nếu … thì … nếu không thì” là cấu trúc:', options: ['tuần tự', 'rẽ nhánh dạng đủ', 'lặp', 'rẽ nhánh dạng thiếu'], answer: 1, explain: 'Dạng đủ.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Ở rẽ nhánh dạng đủ, cả hai nhánh đều được thực hiện.', answer: false, explain: 'Chỉ một nhánh.' },
    { type: 'short', q: 'đặt s thành 1; lặp lại 4 lần: đặt s thành (s × 3). Giá trị s?', answer: '81', calc: '3**4', explain: '3⁴.' },
    { type: 'short', q: 'đặt n thành 0; lặp lại cho đến khi n > 10: thay đổi n một lượng 4. Giá trị cuối của n?', answer: '12', calc: '12', explain: '4, 8, 12.' },
    { type: 'mcq', q: 'Khối lặp với số lần biết trước trong Scratch:', options: ['lặp lại n lần', 'nếu … thì', 'đợi 1 giây', 'nói Xin chào'], answer: 0, explain: 'lặp lại n lần.' },
    { type: 'mcq', q: 'Nếu điểm ≥ 5 thì nói “Đạt”, nếu không nói “Chưa đạt”. Điểm 4,5 nói:', options: ['Đạt', 'Chưa đạt', 'Không nói gì', 'Cả hai'], answer: 1, explain: '4,5 < 5.' }
  ]
});
})();
