/* KHTN 9 – Bài 28. Lipid. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-9/bai-28', {
  objectives: [
    'Nêu được khái niệm lipid, khái niệm chất béo (ester của glycerol và acid béo); trạng thái tự nhiên và tính chất vật lí của chất béo.',
    'Trình bày được tính chất hoá học của chất béo: phản ứng thuỷ phân trong môi trường acid và môi trường kiềm (xà phòng hoá).',
    'Nêu được vai trò của chất béo với cơ thể và ứng dụng trong đời sống.'
  ],
  intro: 'Mỡ lợn, dầu lạc, dầu ô liu, bơ… đều là chất béo. Nấu ăn bằng dầu mỡ giúp thức ăn ngon hơn và cơ thể hấp thụ được các vitamin A, D, E, K. Chất béo cũng là nguyên liệu để sản xuất xà phòng.',
  steps: [
    { title: 'Lipid và chất béo', html: `<p><b>Lipid</b> là những hợp chất hữu cơ có trong tế bào sống, không tan trong nước, tan trong dung môi hữu cơ (xăng, benzene…). Lipid gồm chất béo, sáp, steroid…</p>
      <p><b>Chất béo</b> là ester của <b>glycerol</b> C<sub>3</sub>H<sub>5</sub>(OH)<sub>3</sub> với các <b>acid béo</b> (acid hữu cơ mạch dài, ví dụ C<sub>17</sub>H<sub>35</sub>COOH). Công thức chung: <span class="math">(RCOO)<sub>3</sub>C<sub>3</sub>H<sub>5</sub></span></p>` },
    { title: 'Trạng thái và tính chất vật lí', html: `<ul><li>Chất béo động vật (mỡ lợn, mỡ bò) thường ở thể <b>rắn</b>; chất béo thực vật (dầu lạc, dầu đậu nành) thường ở thể <b>lỏng</b> (trừ dầu dừa, bơ cacao).</li><li>Nhẹ hơn nước, không tan trong nước; tan trong xăng, dầu hoả.</li></ul>
      <div class="box tip">Vết dầu mỡ trên áo không giặt sạch bằng nước lã, nhưng tẩy được bằng xà phòng hoặc xăng.</div>` },
    { title: 'Phản ứng thuỷ phân', html: `<p><b>Trong môi trường acid</b> (đun nóng): chất béo + nước ⇌ glycerol + acid béo.</p>
      <p class="math">(RCOO)<sub>3</sub>C<sub>3</sub>H<sub>5</sub> + 3H<sub>2</sub>O ⇌ C<sub>3</sub>H<sub>5</sub>(OH)<sub>3</sub> + 3RCOOH</p>
      <p><b>Trong môi trường kiềm</b> (phản ứng <b>xà phòng hoá</b>):</p>
      <p class="math">(RCOO)<sub>3</sub>C<sub>3</sub>H<sub>5</sub> + 3NaOH → C<sub>3</sub>H<sub>5</sub>(OH)<sub>3</sub> + 3RCOONa</p>
      <p>Muối sodium của acid béo (RCOONa) là thành phần chính của <b>xà phòng</b>.</p>`,
      svg: S.flow({ items: ['Chất béo + dung dịch NaOH', 'Đun nóng, khuấy đều', 'Glycerol + muối RCOONa', 'Tách lấy muối, ép khuôn', 'Xà phòng'], size: 13, label: 'Sơ đồ sản xuất xà phòng từ chất béo' }), caption: 'Phản ứng xà phòng hoá chất béo tạo glycerol và xà phòng.' },
    { title: 'Vai trò của chất béo', html: `<ul><li>Cung cấp năng lượng nhiều nhất: khoảng <b>9 kcal/g</b> (≈ 38 kJ/g), gấp đôi carbohydrate và protein (≈ 4 kcal/g).</li><li>Hoà tan vitamin A, D, E, K; dự trữ năng lượng, giữ ấm, bảo vệ nội tạng.</li><li>Dùng sản xuất xà phòng, glycerol (mĩ phẩm, dược phẩm).</li></ul>
      <p>Ăn quá nhiều chất béo động vật có thể gây béo phì, bệnh tim mạch.</p>`,
      svg: S.bar({ title: 'Năng lượng từ 1 g chất dinh dưỡng (kcal, tham khảo)', cats: ['Chất béo', 'Carbohydrate', 'Protein'], series: [{ name: 'kcal/g', values: [9, 4, 4], color: '#f59e0b' }], yMax: 10, yStep: 2, width: 520, height: 270 }), caption: 'Chất béo cung cấp khoảng 9 kcal/g, carbohydrate và protein khoảng 4 kcal/g (tham khảo).' }
  ],
  summary: 'Lipid là chất hữu cơ trong tế bào sống, không tan trong nước. Chất béo là ester của glycerol và acid béo, (RCOO)₃C₃H₅. Thuỷ phân trong acid tạo glycerol và acid béo; trong kiềm (xà phòng hoá) tạo glycerol và muối của acid béo (xà phòng). Chất béo cung cấp khoảng 9 kcal/g, hoà tan vitamin A, D, E, K.',
  examples: [
    { title: 'Năng lượng', problem: 'Một bữa ăn có 20 g chất béo. Tính năng lượng chất béo cung cấp (theo kcal, lấy 9 kcal/g).', solution: 'E = 20 · 9 = 180 kcal.' },
    { title: 'Xà phòng hoá', problem: 'Xà phòng hoá hoàn toàn 0,1 mol chất béo cần bao nhiêu mol NaOH? Thu được bao nhiêu mol glycerol?', solution: 'Tỉ lệ 1 : 3 : 1 ⇒ cần 0,3 mol NaOH, thu 0,1 mol glycerol.' },
    { title: 'Giải thích', problem: 'Vì sao không nên dùng nước để dập đám cháy chảo dầu?', solution: 'Dầu nhẹ hơn nước, không tan trong nước, nên nổi lên và bắn tung toé, làm đám cháy lan rộng. Nên tắt bếp, đậy kín nắp chảo hoặc dùng khăn ướt trùm kín.' }
  ],
  exercises: [
    { question: 'Phân biệt dầu ăn và dầu hoả bằng cách đun với dung dịch NaOH. Giải thích.', hints: ['Dầu ăn là chất béo, dầu hoả là hydrocarbon.', 'Chất nào bị xà phòng hoá?'], solution: 'Dầu ăn bị xà phòng hoá, sau phản ứng tạo hỗn hợp đồng nhất (tan); dầu hoả không phản ứng, vẫn tách lớp.' },
    { question: 'Xà phòng hoá hoàn toàn 0,2 mol chất béo. Tính khối lượng glycerol (M = 92) thu được.', hints: ['n<sub>glycerol</sub> = n<sub>chất béo</sub>.', 'm = n · M.'], solution: 'm = 0,2 · 92 = 18,4 g.' },
    { question: 'Vì sao trong bữa ăn cần có một lượng chất béo hợp lí?', hints: ['Chất béo hoà tan những vitamin nào?', 'Thiếu và thừa chất béo đều gây hại.'], solution: 'Chất béo cung cấp năng lượng và giúp hấp thụ vitamin A, D, E, K; thiếu thì cơ thể thiếu năng lượng, vitamin; thừa dễ gây béo phì, bệnh tim mạch.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Chất béo không tan trong nước nhưng tan trong xăng, benzene.', answer: true, explain: 'Tính chất vật lí của lipid.' },
    { type: 'mcq', q: 'Chất béo là ester của:', options: ['ethylic alcohol và acetic acid', 'glycerol và acid béo', 'glucose và nước', 'methane và chlorine'], answer: 1, explain: '(RCOO)<sub>3</sub>C<sub>3</sub>H<sub>5</sub>.' },
    { type: 'mcq', q: 'Phản ứng xà phòng hoá là phản ứng thuỷ phân chất béo trong môi trường:', options: ['acid', 'kiềm', 'trung tính', 'không khí'], answer: 1, explain: 'Thuỷ phân bằng NaOH, KOH.' },
    { type: 'short', q: 'Xà phòng hoá hoàn toàn 0,05 mol chất béo cần bao nhiêu mol NaOH?', answer: '0,15', unit: 'mol', calc: '3*0.05', explain: 'Tỉ lệ 1 : 3.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mỡ động vật và dầu thực vật đều ở thể lỏng ở nhiệt độ thường.', answer: false, explain: 'Mỡ động vật thường ở thể rắn.' },
    { type: 'short', q: 'Ăn 15 g chất béo cung cấp khoảng bao nhiêu kcal (lấy 9 kcal/g)?', answer: '135', unit: 'kcal', calc: '15*9', explain: '15 · 9 = 135 kcal.' },
    { type: 'mcq', q: 'Thành phần chính của xà phòng là:', options: ['glycerol', 'muối sodium của acid béo', 'chất béo', 'acetic acid'], answer: 1, explain: 'RCOONa.' },
    { type: 'short', q: 'Xà phòng hoá 0,1 mol chất béo thu được bao nhiêu gam glycerol (M = 92)?', answer: '9,2', unit: 'g', calc: '0.1*92', explain: '0,1 · 92 = 9,2 g.' }
  ]
});
})();
