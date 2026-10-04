/* KHTN 8 – Bài 15. Áp suất trên một bề mặt. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-8/bai-15', {
  objectives: [
    'Nêu được khái niệm áp lực và áp suất; viết được công thức p = F : S và đơn vị pascal (Pa).',
    'Tính được áp suất, áp lực hoặc diện tích bị ép.',
    'Giải thích được một số ứng dụng về tăng, giảm áp suất trong đời sống, kĩ thuật.'
  ],
  intro: 'Vì sao lưỡi dao phải mài sắc mới dễ cắt? Vì sao xe tăng nặng hàng chục tấn vẫn đi được trên đất mềm, còn ô tô nhẹ hơn nhiều lại dễ bị lún? Câu trả lời nằm ở <b>áp suất</b>.',
  steps: [
    { title: 'Áp lực', html: `<p><b>Áp lực</b> là lực ép có phương vuông góc với mặt bị ép.</p>
      <p>Ví dụ: trọng lượng của người đứng trên sàn nhà, của tủ đặt trên nền nhà là áp lực lên mặt sàn.</p>` },
    { title: 'Áp suất', html: `<p>Tác dụng của áp lực phụ thuộc vào độ lớn của áp lực và diện tích bị ép. <b>Áp suất</b> là độ lớn của áp lực trên một đơn vị diện tích bị ép:</p>
      <div class="box key">p = {{F|S}} &nbsp;(p: áp suất; F: áp lực, N; S: diện tích bị ép, m²)</div>
      <p>Đơn vị áp suất: <b>pascal (Pa)</b>; 1 Pa = 1 N/m². Ngoài ra còn dùng bar (1 bar = 100 000 Pa), atmosphere (1 atm ≈ 101 300 Pa), mmHg.</p>`,
      svg: S.pressureBricks(), caption: 'Cùng một viên gạch (cùng áp lực): diện tích tiếp xúc càng nhỏ thì áp suất càng lớn, gạch lún càng sâu.' },
    { title: 'Tính áp suất', html: `<p>Ví dụ: một thùng hàng nặng 800 N đặt trên sàn, diện tích mặt tiếp xúc 0,4 m².</p><p class="math">p = {{800|0,4}} = 2 000 (Pa)</p>
      <div class="box tip">Đổi diện tích ra m²: 1 cm² = 0,0001 m²; 1 dm² = 0,01 m².</div>` },
    { title: 'Tăng, giảm áp suất', html: `<ul><li><b>Tăng áp suất</b>: tăng áp lực hoặc giảm diện tích bị ép. Ví dụ: mài sắc lưỡi dao, mũi kim nhọn, đinh có đầu nhọn.</li><li><b>Giảm áp suất</b>: giảm áp lực hoặc tăng diện tích bị ép. Ví dụ: xe tăng có bản xích rộng, móng nhà xây rộng hơn tường, ván trượt tuyết rộng, xe tải nặng có nhiều bánh.</li></ul>` }
  ],
  summary: 'Áp lực: lực ép vuông góc với mặt bị ép. p = F : S; đơn vị Pa (1 Pa = 1 N/m²). Tăng áp suất: tăng F hoặc giảm S; giảm áp suất: giảm F hoặc tăng S.',
  examples: [
    { title: 'Áp suất của người', problem: 'Một người nặng 500 N đứng trên hai bàn chân, diện tích tiếp xúc tổng cộng 0,025 m². Tính áp suất lên mặt sàn.', solution: 'p = 500 : 0,025 = 20 000 (Pa).' },
    { title: 'Tính áp lực', problem: 'Áp suất lên mặt bàn là 1 500 Pa, diện tích tiếp xúc 0,02 m². Tính áp lực.', solution: 'F = p · S = 1 500 · 0,02 = 30 (N).' },
    { title: 'So sánh', problem: 'Vì sao đứng một chân thì lún sâu vào cát hơn đứng hai chân?', solution: 'Áp lực (trọng lượng) không đổi nhưng diện tích bị ép giảm một nửa nên áp suất tăng gấp đôi.' }
  ],
  exercises: [
    { question: 'Một xe tăng nặng 340 000 N, diện tích tiếp xúc của các bản xích là 1,7 m². Tính áp suất xe tăng tác dụng lên mặt đường.', hints: ['p = F : S.', 'F = 340 000 N; S = 1,7 m².'], solution: 'p = 340 000 : 1,7 = 200 000 (Pa).' },
    { question: 'Vì sao người ta làm móng nhà rộng hơn tường nhà?', hints: ['Trọng lượng ngôi nhà không đổi.', 'Tăng diện tích bị ép thì áp suất thế nào?'], solution: 'Móng rộng làm tăng diện tích bị ép, giảm áp suất lên nền đất, nhà không bị lún.' },
    { question: 'Một viên gạch nặng 20 N có kích thước 20 cm × 10 cm × 5 cm. Tính áp suất nhỏ nhất và lớn nhất khi đặt viên gạch trên sàn.', hints: ['Mặt lớn nhất: 0,2 m × 0,1 m; mặt nhỏ nhất: 0,1 m × 0,05 m.', 'p = F : S.'], solution: 'S lớn nhất = 0,02 m² ⇒ p nhỏ nhất = 1 000 Pa. S nhỏ nhất = 0,005 m² ⇒ p lớn nhất = 4 000 Pa.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Áp lực là lực ép có phương vuông góc với mặt bị ép.', answer: true, explain: 'Đúng định nghĩa.' },
    { type: 'short', q: 'Áp lực 600 N tác dụng lên diện tích 0,3 m². Áp suất là bao nhiêu Pa?', answer: '2000', answerText: '2 000', unit: 'Pa', calc: '600/0.3', explain: 'p = 600 : 0,3 = 2 000 Pa.' },
    { type: 'mcq', q: 'Đơn vị của áp suất là:', options: ['N', 'N/m²', 'N/m³', 'kg/m³'], answer: 1, explain: '1 Pa = 1 N/m².' },
    { type: 'mcq', q: 'Trường hợp nào làm TĂNG áp suất?', options: ['Xe tăng có bản xích rộng', 'Mài sắc lưỡi dao', 'Móng nhà xây rộng', 'Ván trượt tuyết dài, rộng'], answer: 1, explain: 'Mài sắc làm giảm diện tích bị ép.' },
    { type: 'short', q: 'Áp suất 2 500 Pa tác dụng lên diện tích 0,04 m². Áp lực là bao nhiêu N?', answer: '100', unit: 'N', calc: '2500*0.04', explain: 'F = 2 500 · 0,04 = 100 N.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Cùng một áp lực, diện tích bị ép càng lớn thì áp suất càng lớn.', answer: false, explain: 'Diện tích càng lớn thì áp suất càng nhỏ.' },
    { type: 'short', q: 'Một người nặng 450 N đứng một chân, diện tích tiếp xúc 0,015 m². Áp suất lên sàn là bao nhiêu Pa?', answer: '30000', answerText: '30 000', unit: 'Pa', calc: '450/0.015', explain: 'p = 450 : 0,015 = 30 000 Pa.' },
    { type: 'short', q: '1 bar bằng bao nhiêu Pa?', answer: '100000', answerText: '100 000', unit: 'Pa', calc: '1e5', explain: '1 bar = 100 000 Pa.' }
  ]
});
})();
