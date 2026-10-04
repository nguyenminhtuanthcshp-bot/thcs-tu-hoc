/* KHTN 9 – Bài 43. Nguyên phân và giảm phân. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-9/bai-43', {
  objectives: [
    'Mô tả được sơ lược diễn biến và kết quả của nguyên phân: từ một tế bào 2n tạo ra hai tế bào con 2n.',
    'Mô tả được sơ lược diễn biến và kết quả của giảm phân: từ một tế bào 2n tạo ra bốn tế bào con n.',
    'Nêu được ý nghĩa của nguyên phân, giảm phân và thụ tinh trong việc duy trì bộ NST đặc trưng của loài.'
  ],
  intro: 'Từ một hợp tử duy nhất, cơ thể người trưởng thành có hàng chục nghìn tỉ tế bào với bộ NST giống hệt nhau. Nhưng giao tử lại chỉ có một nửa số NST. Hai kiểu phân bào khác nhau đảm nhận hai nhiệm vụ đó.',
  steps: [
    { title: 'Nguyên phân', html: `<p><b>Nguyên phân</b> xảy ra ở tế bào sinh dưỡng và tế bào sinh dục sơ khai. Trước khi phân bào, NST nhân đôi thành NST kép. Nguyên phân gồm 4 kì:</p>
      <ul><li><b>Kì đầu:</b> NST kép co xoắn, thoi phân bào hình thành.</li><li><b>Kì giữa:</b> NST kép co xoắn cực đại, xếp thành <b>một hàng</b> trên mặt phẳng xích đạo.</li><li><b>Kì sau:</b> hai chromatid tách nhau ở tâm động, đi về hai cực.</li><li><b>Kì cuối:</b> hình thành hai nhân mới, tế bào chất phân chia.</li></ul>
      <p>Kết quả: 1 tế bào mẹ (2n) → <b>2 tế bào con (2n)</b> giống hệt tế bào mẹ.</p>`,
      svg: S.cellStages({ kind: 'nguyen-phan' }), caption: 'Các kì của nguyên phân (minh hoạ tế bào có 2n = 4).' },
    { title: 'Giảm phân', html: `<p><b>Giảm phân</b> xảy ra ở tế bào sinh dục chín (tạo giao tử), gồm <b>hai lần phân bào</b> liên tiếp nhưng NST chỉ nhân đôi một lần.</p>
      <ul><li><b>Giảm phân I:</b> các cặp NST kép tương đồng tiếp hợp, xếp thành <b>hai hàng</b> ở kì giữa I, rồi phân li về hai cực ⇒ 2 tế bào có n NST kép.</li><li><b>Giảm phân II:</b> giống nguyên phân, các chromatid tách nhau ⇒ 4 tế bào con.</li></ul>
      <p>Kết quả: 1 tế bào (2n) → <b>4 tế bào con (n)</b>.</p>`,
      svg: S.cellStages({ kind: 'giam-phan' }), caption: 'Giảm phân: một tế bào 2n tạo bốn tế bào n (minh hoạ 2n = 4).' },
    { title: 'So sánh nguyên phân và giảm phân', html: `<table><tr><th></th><th>Nguyên phân</th><th>Giảm phân</th></tr><tr><td>Loại tế bào</td><td>sinh dưỡng, sinh dục sơ khai</td><td>sinh dục chín</td></tr><tr><td>Số lần phân bào</td><td>1</td><td>2</td></tr><tr><td>Kết quả</td><td>2 tế bào 2n</td><td>4 tế bào n</td></tr></table>
      <p>Một tế bào nguyên phân liên tiếp k lần tạo ra <span class="math">2<sup>k</sup></span> tế bào con.</p>` },
    { title: 'Ý nghĩa', html: `<ul><li><b>Nguyên phân:</b> giúp cơ thể lớn lên, thay thế tế bào già, tái sinh mô; là cơ sở của sinh sản vô tính; duy trì ổn định bộ NST qua các thế hệ tế bào.</li><li><b>Giảm phân</b> tạo giao tử n; <b>thụ tinh</b> (n + n) khôi phục bộ 2n ở hợp tử ⇒ duy trì bộ NST đặc trưng của loài qua các thế hệ; tạo nhiều biến dị tổ hợp.</li></ul>` }
  ],
  summary: 'Nguyên phân (4 kì: đầu, giữa, sau, cuối): 1 tế bào 2n → 2 tế bào 2n; k lần nguyên phân tạo 2ᵏ tế bào. Giảm phân (2 lần phân bào, NST nhân đôi 1 lần): 1 tế bào 2n → 4 tế bào n. Nguyên phân giúp sinh trưởng, sinh sản vô tính; giảm phân và thụ tinh duy trì bộ NST 2n của loài, tạo biến dị tổ hợp.',
  examples: [
    { title: 'Số tế bào con', problem: 'Một tế bào nguyên phân liên tiếp 5 lần. Tính số tế bào con.', solution: '2<sup>5</sup> = 32 tế bào.' },
    { title: 'Số NST', problem: 'Tế bào ruồi giấm (2n = 8) nguyên phân 3 lần. Tổng số NST trong các tế bào con?', solution: '2<sup>3</sup> = 8 tế bào · 8 NST = 64 NST.' },
    { title: 'Giảm phân', problem: '10 tế bào sinh tinh giảm phân. Tạo ra bao nhiêu tinh trùng?', solution: 'Mỗi tế bào sinh tinh tạo 4 tinh trùng ⇒ 40 tinh trùng.' }
  ],
  exercises: [
    { question: 'Một tế bào người (2n = 46) nguyên phân 2 lần. Tính số tế bào con và số NST trong mỗi tế bào con.', hints: ['Số tế bào = 2<sup>k</sup>.', 'Nguyên phân giữ nguyên 2n.'], solution: '4 tế bào con, mỗi tế bào 46 NST.' },
    { question: 'Phân biệt kì giữa nguyên phân và kì giữa I của giảm phân.', hints: ['NST xếp thành mấy hàng?', 'NST đơn chiếc hay cặp tương đồng?'], solution: 'Kì giữa nguyên phân: các NST kép xếp một hàng. Kì giữa I: các cặp NST kép tương đồng xếp thành hai hàng.' },
    { question: 'Vì sao nhờ giảm phân và thụ tinh, bộ NST của loài được duy trì ổn định?', hints: ['Giao tử có bao nhiêu NST?', 'Thụ tinh kết hợp hai giao tử.'], solution: 'Giảm phân tạo giao tử n; thụ tinh kết hợp giao tử đực n và giao tử cái n thành hợp tử 2n, khôi phục bộ NST của loài.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Kết quả của nguyên phân là từ một tế bào 2n tạo ra hai tế bào con 2n.', answer: true, explain: 'Bộ NST được giữ nguyên.' },
    { type: 'short', q: 'Một tế bào nguyên phân liên tiếp 4 lần tạo ra bao nhiêu tế bào con?', answer: '16', unit: 'tế bào', calc: 'Math.pow(2,4)', explain: '2<sup>4</sup> = 16.' },
    { type: 'mcq', q: 'Ở kì giữa của nguyên phân, NST:', options: ['tháo xoắn', 'xếp thành một hàng trên mặt phẳng xích đạo', 'tách về hai cực', 'xếp thành hai hàng'], answer: 1, explain: 'NST kép co xoắn cực đại, xếp một hàng.' },
    { type: 'short', q: 'Một tế bào sinh trứng giảm phân tạo ra 4 tế bào con. Mỗi tế bào con ở người có bao nhiêu NST?', answer: '23', unit: 'NST', calc: '46/2', explain: 'n = 23.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Giảm phân gồm hai lần phân bào nhưng NST chỉ nhân đôi một lần.', answer: true, explain: 'Do đó số NST giảm một nửa.' },
    { type: 'mcq', q: 'Giảm phân xảy ra ở:', options: ['tế bào da', 'tế bào sinh dục chín', 'tế bào gan', 'hợp tử'], answer: 1, explain: 'Giảm phân tạo giao tử.' },
    { type: 'short', q: '5 tế bào sinh tinh giảm phân tạo ra bao nhiêu tinh trùng?', answer: '20', unit: 'tinh trùng', calc: '5*4', explain: '5 · 4 = 20.' },
    { type: 'mcq', q: 'Ý nghĩa của nguyên phân là:', options: ['tạo giao tử', 'giúp cơ thể lớn lên, thay thế tế bào già', 'giảm số NST', 'tạo biến dị tổ hợp'], answer: 1, explain: 'Nguyên phân giúp sinh trưởng, tái sinh.' }
  ]
});
})();
