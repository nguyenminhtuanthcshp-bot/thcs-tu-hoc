/* KHTN 9 – Bài 12. Đoạn mạch nối tiếp, song song. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-9/bai-12', {
  objectives: [
    'Nêu được đặc điểm về cường độ dòng điện và hiệu điện thế trong đoạn mạch nối tiếp, song song.',
    'Tính được điện trở tương đương của đoạn mạch nối tiếp, song song gồm hai điện trở.',
    'Vận dụng được định luật Ohm cho từng điện trở và cho cả đoạn mạch.'
  ],
  intro: 'Dây đèn trang trí kiểu cũ: một bóng hỏng, cả dây tắt. Đèn trong phòng học: tắt một bóng, các bóng khác vẫn sáng. Hai cách mắc khác nhau – <b>nối tiếp</b> và <b>song song</b> – cho hai kết quả rất khác.',
  steps: [
    { title: 'Đoạn mạch nối tiếp', html: `<p>Hai điện trở R<sub>1</sub>, R<sub>2</sub> mắc nối tiếp: chỉ có <b>một đường</b> cho dòng điện đi qua.</p>
      <ul><li>Cường độ dòng điện như nhau tại mọi điểm: I = I<sub>1</sub> = I<sub>2</sub>.</li><li>Hiệu điện thế: U = U<sub>1</sub> + U<sub>2</sub>.</li><li>Điện trở tương đương: <span class="math">R<sub>tđ</sub> = R<sub>1</sub> + R<sub>2</sub></span></li></ul>
      <p>Hiệu điện thế trên mỗi điện trở tỉ lệ thuận với điện trở đó: U<sub>1</sub> / U<sub>2</sub> = R<sub>1</sub> / R<sub>2</sub>.</p>`,
      svg: S.resCircuit({ kind: 'noi-tiep', r: ['R₁ = 4 Ω', 'R₂ = 8 Ω'], ammeter: true, label: 'Hai điện trở mắc nối tiếp' }), caption: 'R₁ nối tiếp R₂: R<sub>tđ</sub> = 4 + 8 = 12 Ω.' },
    { title: 'Đoạn mạch song song', html: `<p>Hai điện trở mắc song song: dòng điện <b>rẽ nhánh</b> qua hai đường.</p>
      <ul><li>Hiệu điện thế như nhau: U = U<sub>1</sub> = U<sub>2</sub>.</li><li>Cường độ dòng điện mạch chính: I = I<sub>1</sub> + I<sub>2</sub>.</li><li>Điện trở tương đương: <span class="math">{{1|R<sub>tđ</sub>}} = {{1|R<sub>1</sub>}} + {{1|R<sub>2</sub>}}</span>, hay R<sub>tđ</sub> = {{R<sub>1</sub>R<sub>2</sub>|R<sub>1</sub> + R<sub>2</sub>}}.</li></ul>
      <p>R<sub>tđ</sub> nhỏ hơn mỗi điện trở thành phần. Cường độ dòng điện qua mỗi nhánh tỉ lệ nghịch với điện trở: I<sub>1</sub> / I<sub>2</sub> = R<sub>2</sub> / R<sub>1</sub>.</p>`,
      svg: S.resCircuit({ kind: 'song-song', r: ['R₁ = 6 Ω', 'R₂ = 3 Ω'], ammeter: true, label: 'Hai điện trở mắc song song' }), caption: 'R₁ song song R₂: R<sub>tđ</sub> = 6 · 3 / (6 + 3) = 2 Ω.' },
    { title: 'So sánh hai cách mắc', html: `<table><tr><th></th><th>Nối tiếp</th><th>Song song</th></tr><tr><td>I</td><td>bằng nhau</td><td>I = I₁ + I₂</td></tr><tr><td>U</td><td>U = U₁ + U₂</td><td>bằng nhau</td></tr><tr><td>R<sub>tđ</sub></td><td>R₁ + R₂</td><td>R₁R₂ / (R₁ + R₂)</td></tr></table>
      <div class="box key">Các thiết bị điện trong gia đình được mắc <b>song song</b> để cùng hoạt động ở hiệu điện thế định mức 220 V và hoạt động độc lập với nhau.</div>` },
    { title: 'Giải bài toán mạch điện', html: `<p>Các bước: ① Xác định cách mắc. ② Tính R<sub>tđ</sub>. ③ Tính I mạch chính bằng I = U / R<sub>tđ</sub>. ④ Tính I, U của từng điện trở.</p>
      <p>Ví dụ: R<sub>1</sub> = 4 Ω nối tiếp R<sub>2</sub> = 8 Ω, U = 24 V ⇒ R<sub>tđ</sub> = 12 Ω; I = 2 A; U<sub>1</sub> = 8 V; U<sub>2</sub> = 16 V.</p>` }
  ],
  summary: 'Nối tiếp: I như nhau, U = U₁ + U₂, R<sub>tđ</sub> = R₁ + R₂. Song song: U như nhau, I = I₁ + I₂, 1/R<sub>tđ</sub> = 1/R₁ + 1/R₂ (R<sub>tđ</sub> nhỏ hơn mỗi điện trở). Dụng cụ điện trong nhà mắc song song.',
  examples: [
    { title: 'Mạch nối tiếp', problem: 'R<sub>1</sub> = 10 Ω nối tiếp R<sub>2</sub> = 20 Ω, U = 12 V. Tính I và U<sub>2</sub>.', solution: 'R<sub>tđ</sub> = 30 Ω; I = 12 / 30 = 0,4 A; U<sub>2</sub> = 0,4 · 20 = 8 V.' },
    { title: 'Mạch song song', problem: 'R<sub>1</sub> = 6 Ω song song R<sub>2</sub> = 3 Ω, U = 6 V. Tính I<sub>1</sub>, I<sub>2</sub>, I.', solution: 'I<sub>1</sub> = 6 / 6 = 1 A; I<sub>2</sub> = 6 / 3 = 2 A; I = 3 A (R<sub>tđ</sub> = 2 Ω, 6 / 2 = 3 A).' },
    { title: 'Hai điện trở bằng nhau', problem: 'Hai điện trở 10 Ω mắc song song. Tính R<sub>tđ</sub>.', solution: 'R<sub>tđ</sub> = 10 · 10 / 20 = 5 Ω (bằng một nửa mỗi điện trở).' }
  ],
  exercises: [
    { question: 'R<sub>1</sub> = 5 Ω nối tiếp R<sub>2</sub> = 15 Ω, dòng điện trong mạch 0,5 A. Tính U của cả đoạn mạch.', hints: ['R<sub>tđ</sub> = R<sub>1</sub> + R<sub>2</sub>.', 'U = I · R<sub>tđ</sub>.'], solution: 'R<sub>tđ</sub> = 20 Ω; U = 0,5 · 20 = 10 V.' },
    { question: 'R<sub>1</sub> = 12 Ω song song R<sub>2</sub> = 4 Ω. Tính R<sub>tđ</sub>.', hints: ['R<sub>tđ</sub> = R<sub>1</sub>R<sub>2</sub> / (R<sub>1</sub> + R<sub>2</sub>).', '48 / 16 = ?'], solution: 'R<sub>tđ</sub> = 48 / 16 = 3 Ω.' },
    { question: 'Vì sao trong gia đình không mắc nối tiếp các đồ dùng điện?', hints: ['Mạch nối tiếp: U chia cho các dụng cụ.', 'Một dụng cụ hỏng thì sao?'], solution: 'Nếu mắc nối tiếp, mỗi dụng cụ không nhận đủ 220 V định mức và khi một dụng cụ hỏng hay tắt thì các dụng cụ khác cũng không hoạt động.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Trong đoạn mạch nối tiếp, cường độ dòng điện qua các điện trở bằng nhau.', answer: true, explain: 'Chỉ có một đường cho dòng điện.' },
    { type: 'short', q: 'R<sub>1</sub> = 4 Ω mắc nối tiếp R<sub>2</sub> = 6 Ω. Điện trở tương đương bằng bao nhiêu ôm?', answer: '10', unit: 'Ω', calc: '4+6', explain: '4 + 6 = 10 Ω.' },
    { type: 'short', q: 'R<sub>1</sub> = 6 Ω mắc song song R<sub>2</sub> = 12 Ω. Điện trở tương đương bằng bao nhiêu ôm?', answer: '4', unit: 'Ω', calc: '6*12/(6+12)', explain: '72 / 18 = 4 Ω.' },
    { type: 'mcq', q: 'Trong đoạn mạch song song:', options: ['I như nhau ở mọi nhánh', 'U như nhau ở mọi nhánh', 'R<sub>tđ</sub> = R<sub>1</sub> + R<sub>2</sub>', 'U = U<sub>1</sub> + U<sub>2</sub>'], answer: 1, explain: 'Các nhánh song song có cùng hiệu điện thế.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Điện trở tương đương của đoạn mạch song song lớn hơn mỗi điện trở thành phần.', answer: false, explain: 'Nhỏ hơn mỗi điện trở thành phần.' },
    { type: 'short', q: 'Mạch nối tiếp có R<sub>tđ</sub> = 12 Ω, U = 24 V. Cường độ dòng điện bằng bao nhiêu ampe?', answer: '2', unit: 'A', calc: '24/12', explain: 'I = 24 / 12 = 2 A.' },
    { type: 'mcq', q: 'Các đồ dùng điện trong gia đình được mắc:', options: ['nối tiếp', 'song song', 'nửa nối tiếp, nửa song song', 'tuỳ ý'], answer: 1, explain: 'Để cùng có U = 220 V và hoạt động độc lập.' },
    { type: 'short', q: 'Hai nhánh song song có I<sub>1</sub> = 0,3 A và I<sub>2</sub> = 0,5 A. Cường độ dòng điện mạch chính bằng bao nhiêu ampe?', answer: '0,8', unit: 'A', calc: '0.3+0.5', explain: 'I = I<sub>1</sub> + I<sub>2</sub> = 0,8 A.' }
  ]
});
})();
