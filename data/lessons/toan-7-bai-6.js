/* Toán 7 – Bài 6. Số vô tỉ. Căn bậc hai số học. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('toan-7/bai-6', {
  objectives: [
    'Nhận biết số vô tỉ là số viết được dưới dạng số thập phân vô hạn không tuần hoàn.',
    'Hiểu khái niệm căn bậc hai số học và tính được căn bậc hai số học của số chính phương, phân số đơn giản.',
    'Dùng máy tính cầm tay để tính gần đúng căn bậc hai và làm tròn kết quả.'
  ],
  intro: 'Một hình vuông có diện tích 2 m² thì cạnh dài bao nhiêu? Không có phân số nào bình phương lên bằng 2 – con số đó là một loại số mới: số vô tỉ.',
  steps: [
    { title: 'Hình vuông diện tích 2', html: `<p>Ghép bốn nửa hình vuông đơn vị (mỗi nửa có diện tích {{1|2}}) ta được hình vuông ABCD có diện tích 2. Cạnh AB là đường chéo của hình vuông cạnh 1.</p>
      <p>Độ dài x = AB thoả mãn x<sup>2</sup> = 2. Người ta chứng minh được không có số hữu tỉ nào như vậy; x = 1,41421356… là số thập phân <b>vô hạn không tuần hoàn</b>.</p>`,
      svg: S.draw({ w: 300, h: 240, items: [{ poly: [[50, 20], [250, 20], [250, 220], [50, 220]], fill: '#fff', color: S.C.muted, dash: true }, { poly: [[150, 20], [250, 120], [150, 220], [50, 120]], fill: S.C.blueL, color: S.C.blue, width: 2.5 }, { seg: [150, 20, 150, 220], dash: true, color: S.C.muted }, { seg: [50, 120, 250, 120], dash: true, color: S.C.muted }, { pt: [150, 20, 'A', 14, -3] }, { pt: [250, 120, 'B', 14, 5] }, { pt: [150, 220, 'C', 14, 13] }, { pt: [50, 120, 'D', -14, 5] }, { text: [40, 176, '1'], color: S.C.muted, size: 15, bold: true, anchor: 'end' }, { text: [100, 238, '1'], color: S.C.muted, size: 15, bold: true }] }),
      caption: 'Hình vuông ABCD (tô xanh) có diện tích bằng một nửa hình vuông lớn 2 × 2, tức là 2.' },
    { title: 'Số vô tỉ', html: `<p><b>Số vô tỉ</b> là số viết được dưới dạng số thập phân vô hạn <b>không tuần hoàn</b>. Tập hợp các số vô tỉ kí hiệu là 𝕀.</p>
      <p>Ví dụ: 1,41421356…; số π = 3,14159265…; 0,101001000100001… (số chữ số 0 tăng dần, không có chu kì).</p>
      <div class="box note">Số hữu tỉ: thập phân hữu hạn hoặc vô hạn tuần hoàn. Số vô tỉ: vô hạn không tuần hoàn.</div>` },
    { title: 'Căn bậc hai số học', html: `<p><b>Căn bậc hai số học</b> của số a không âm là số x <b>không âm</b> sao cho x<sup>2</sup> = a. Kí hiệu √a.</p>
      <p class="math">√a = x &nbsp;⇔&nbsp; x ≥ 0 và x<sup>2</sup> = a</p>
      <p>Ví dụ: √49 = 7 (7 ≥ 0 và 7<sup>2</sup> = 49); √0 = 0; √{{9|16}} = {{3|4}}; √(0,25) = 0,5.</p>
      <p>Số âm không có căn bậc hai số học. Chú ý (√a)<sup>2</sup> = a với a ≥ 0.</p>` },
    { title: 'Căn của số không chính phương', html: `<p>Nếu số tự nhiên a không phải là số chính phương thì √a là số vô tỉ: √2, √3, √5, √7…</p>
      <p>Dùng máy tính cầm tay (phím √) để tính gần đúng: √2 ≈ 1,414; √5 ≈ 2,236; √10 ≈ 3,162.</p>
      <p>Ước lượng nhanh: 3<sup>2</sup> = 9 &lt; 10 &lt; 16 = 4<sup>2</sup> nên 3 &lt; √10 &lt; 4.</p>` }
  ],
  summary: 'Số vô tỉ = thập phân vô hạn không tuần hoàn. √a (a ≥ 0) là số không âm có bình phương bằng a. Căn của số tự nhiên không chính phương là số vô tỉ; dùng máy tính để tính gần đúng.',
  examples: [
    { title: 'Tính căn bậc hai số học', problem: 'Tính: √81; √{{4|25}}; √(0,36); √(3<sup>2</sup>).', solution: '√81 = 9; √{{4|25}} = {{2|5}}; √(0,36) = 0,6; √(3<sup>2</sup>) = √9 = 3.' },
    { title: 'Ước lượng', problem: 'Căn bậc hai số học của 50 nằm giữa hai số tự nhiên liên tiếp nào?', solution: '7<sup>2</sup> = 49 &lt; 50 &lt; 64 = 8<sup>2</sup> nên 7 &lt; √50 &lt; 8.' },
    { title: 'Bài toán diện tích', problem: 'Một mảnh vườn hình vuông có diện tích 196 m². Tính độ dài cạnh.', solution: 'Cạnh = √196 = 14 (m) vì 14<sup>2</sup> = 196.' }
  ],
  exercises: [
    { question: 'Tính: 2√16 − √{{1|4}} + (√3)<sup>2</sup>.', hints: ['√16 = 4; √{{1|4}} = {{1|2}}.', '(√3)<sup>2</sup> = 3.'], solution: '2 · 4 − {{1|2}} + 3 = {{21|2}} = 10,5.' },
    { question: 'Dùng máy tính cầm tay, tính √7 rồi làm tròn đến hàng phần trăm.', hints: ['Bấm √ 7 = được 2,6457513…', 'Nhìn chữ số hàng phần nghìn (5).'], solution: '√7 ≈ 2,65.' },
    { question: 'Tìm x ≥ 0, biết x<sup>2</sup> = 2,25.', hints: ['x là căn bậc hai số học của 2,25.', '1,5 · 1,5 = ?'], solution: 'x = √2,25 = 1,5.' }
  ],
  quiz: [
    { type: 'short', calc: 'Math.sqrt(49)', q: 'Tính: √49.', answer: '7', explain: '7 ≥ 0 và 7<sup>2</sup> = 49.' },
    { type: 'mcq', q: 'Số nào là số vô tỉ?', options: ['0,(3)', '√9', '√5', '−{{1|2}}'], answer: 2, explain: '5 không phải số chính phương nên √5 là số vô tỉ; √9 = 3 là số hữu tỉ.' },
    { type: 'short', calc: 'Math.sqrt(0.36)', q: 'Tính: √0,36.', answer: '0.6', answerText: '0,6', explain: '0,6<sup>2</sup> = 0,36.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: √25 = −5.', answer: false, explain: 'Căn bậc hai số học luôn không âm: √25 = 5.' },
    { type: 'short', calc: 'round(Math.sqrt(7), 2)', q: 'Làm tròn √7 đến hàng phần trăm.', answer: '2.65', answerText: '2,65', explain: '√7 = 2,6457…, làm tròn được 2,65.' },
    { type: 'short', calc: '2 * Math.sqrt(16) - Math.sqrt(1/4) + 3', q: 'Tính: 2√16 − √{{1|4}} + (√3)<sup>2</sup>.', answer: ['10.5', '21/2'], answerText: '10,5', explain: '8 − 0,5 + 3 = 10,5.' },
    { type: 'short', calc: 'Math.sqrt(196)', q: 'Mảnh vườn hình vuông có diện tích 196 m². Cạnh dài bao nhiêu mét?', unit: 'm', answer: '14', explain: '√196 = 14.' },
    { type: 'mcq', q: '√50 nằm giữa hai số tự nhiên liên tiếp nào?', options: ['6 và 7', '7 và 8', '8 và 9', '24 và 26'], answer: 1, explain: '49 &lt; 50 &lt; 64 nên 7 &lt; √50 &lt; 8.' }
  ]
});
})();
