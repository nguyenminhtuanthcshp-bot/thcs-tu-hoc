/* KHTN 9 – Bài 23. Alkane. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-9/bai-23', {
  objectives: [
    'Nêu được khái niệm alkane, công thức chung C<sub>n</sub>H<sub>2n+2</sub>; gọi tên 4 alkane đầu dãy.',
    'Trình bày được cấu tạo phân tử methane, ethane, propane, butane (chỉ có liên kết đơn).',
    'Trình bày được tính chất hoá học: phản ứng cháy, phản ứng thế với chlorine của methane; nêu ứng dụng của alkane.'
  ],
  intro: 'Bình gas nấu ăn chứa chủ yếu propane và butane; khí biogas và khí mỏ dầu chứa nhiều methane. Chúng thuộc cùng một loại hydrocarbon có tên là <b>alkane</b>.',
  steps: [
    { title: 'Khái niệm alkane', html: `<p><b>Alkane</b> là hydrocarbon mạch hở, trong phân tử chỉ có <b>liên kết đơn</b>. Công thức chung: <span class="math">C<sub>n</sub>H<sub>2n+2</sub> (n ≥ 1)</span></p>
      <table><tr><th>n</th><th>Công thức</th><th>Tên</th></tr><tr><td>1</td><td>CH<sub>4</sub></td><td>methane</td></tr><tr><td>2</td><td>C<sub>2</sub>H<sub>6</sub></td><td>ethane</td></tr><tr><td>3</td><td>C<sub>3</sub>H<sub>8</sub></td><td>propane</td></tr><tr><td>4</td><td>C<sub>4</sub>H<sub>10</sub></td><td>butane</td></tr></table>` },
    { title: 'Cấu tạo phân tử', html: `<p>Mỗi nguyên tử C tạo 4 liên kết đơn với C hoặc H. Ví dụ ethane CH<sub>3</sub>–CH<sub>3</sub>, propane CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>3</sub>.</p>`,
      svg: S.structFormula({ mol: ['CH4', 'C2H6', 'C3H8'], u: 44 }), caption: 'Công thức cấu tạo của methane, ethane, propane: chỉ có liên kết đơn.' },
    { title: 'Tính chất vật lí và phản ứng cháy', html: `<p>Ở điều kiện thường, C<sub>1</sub> – C<sub>4</sub> là chất khí; alkane không tan trong nước, nhẹ hơn nước.</p>
      <p>Alkane cháy toả nhiều nhiệt, tạo CO<sub>2</sub> và H<sub>2</sub>O:</p>
      <p class="math">CH<sub>4</sub> + 2O<sub>2</sub> → CO<sub>2</sub> + 2H<sub>2</sub>O (t°)</p><p class="math">C<sub>3</sub>H<sub>8</sub> + 5O<sub>2</sub> → 3CO<sub>2</sub> + 4H<sub>2</sub>O (t°)</p>
      <div class="box tip">Đun nấu thiếu không khí sinh ra khí CO rất độc. Phải dùng bếp gas nơi thông thoáng và khoá van khi không dùng.</div>` },
    { title: 'Phản ứng thế với chlorine', html: `<p>Dưới ánh sáng, nguyên tử H của methane bị thay thế bởi nguyên tử Cl:</p>
      <p class="math">CH<sub>4</sub> + Cl<sub>2</sub> → CH<sub>3</sub>Cl + HCl (ánh sáng)</p>
      <p>Phản ứng thế là phản ứng đặc trưng của alkane.</p>
      <p><b>Ứng dụng:</b> nhiên liệu (khí đốt, gas, xăng, dầu), nguyên liệu sản xuất hoá chất.</p>`,
      svg: S.structFormula({ mol: ['CH4', 'CH3Cl'], u: 48, title: 'Phản ứng thế: một nguyên tử H được thay bằng Cl' }), caption: 'Methane → methyl chloride: nguyên tử H được thay thế bằng nguyên tử Cl.' }
  ],
  summary: 'Alkane: hydrocarbon mạch hở chỉ có liên kết đơn, C<sub>n</sub>H<sub>2n+2</sub>: methane, ethane, propane, butane. Tính chất: cháy toả nhiều nhiệt tạo CO₂ và H₂O; phản ứng thế với Cl₂ khi có ánh sáng. Dùng làm nhiên liệu và nguyên liệu.',
  examples: [
    { title: 'Viết phương trình cháy', problem: 'Viết phương trình đốt cháy butane.', solution: '2C<sub>4</sub>H<sub>10</sub> + 13O<sub>2</sub> → 8CO<sub>2</sub> + 10H<sub>2</sub>O (t°).' },
    { title: 'Thể tích oxygen', problem: 'Tính thể tích O<sub>2</sub> (25 °C, 1 bar) cần để đốt cháy hết 0,1 mol CH<sub>4</sub>.', solution: 'n<sub>O₂</sub> = 2 · 0,1 = 0,2 mol; V = 0,2 · 24,79 = 4,958 L.' },
    { title: 'Nhận biết alkane', problem: 'C<sub>5</sub>H<sub>12</sub> có phải alkane không?', solution: 'n = 5 ⇒ 2n + 2 = 12. Đúng công thức C<sub>n</sub>H<sub>2n+2</sub> nên là alkane (pentane).' }
  ],
  exercises: [
    { question: 'Viết công thức phân tử của alkane có 6 nguyên tử carbon.', hints: ['C<sub>n</sub>H<sub>2n+2</sub>.', 'n = 6.'], solution: 'C<sub>6</sub>H<sub>14</sub> (hexane).' },
    { question: 'Đốt cháy hoàn toàn 4,4 g propane. Tính khối lượng CO<sub>2</sub> tạo thành.', hints: ['n<sub>C₃H₈</sub> = 4,4 / 44 = 0,1 mol.', 'n<sub>CO₂</sub> = 3 · n<sub>C₃H₈</sub>.'], solution: 'n<sub>CO₂</sub> = 0,3 mol; m = 0,3 · 44 = 13,2 g.' },
    { question: 'Vì sao không nên đun nấu bằng bếp than, bếp gas trong phòng kín?', hints: ['Thiếu oxygen thì nhiên liệu cháy thế nào?', 'Khí sinh ra có độc không?'], solution: 'Thiếu oxygen, nhiên liệu cháy không hoàn toàn sinh khí CO rất độc, có thể gây ngạt, tử vong.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Trong phân tử alkane chỉ có liên kết đơn.', answer: true, explain: 'Đó là đặc điểm cấu tạo của alkane.' },
    { type: 'mcq', q: 'Công thức chung của alkane là:', options: ['C<sub>n</sub>H<sub>2n</sub>', 'C<sub>n</sub>H<sub>2n+2</sub>', 'C<sub>n</sub>H<sub>2n−2</sub>', 'C<sub>n</sub>H<sub>n</sub>'], answer: 1, explain: 'C<sub>n</sub>H<sub>2n+2</sub>.' },
    { type: 'mcq', q: 'Phản ứng đặc trưng của methane là:', options: ['phản ứng cộng', 'phản ứng thế với chlorine', 'phản ứng trùng hợp', 'phản ứng với nước'], answer: 1, explain: 'CH<sub>4</sub> + Cl<sub>2</sub> → CH<sub>3</sub>Cl + HCl.' },
    { type: 'short', q: 'Alkane có 3 nguyên tử carbon có bao nhiêu nguyên tử hydrogen?', answer: '8', calc: '2*3+2', explain: '2 · 3 + 2 = 8 (C<sub>3</sub>H<sub>8</sub>).' },
    { type: 'short', q: 'Đốt cháy hết 0,2 mol CH<sub>4</sub> cần bao nhiêu mol O<sub>2</sub>?', answer: '0,4', unit: 'mol', calc: '2*0.2', explain: 'Tỉ lệ 1 : 2.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Ở điều kiện thường, butane là chất lỏng.', answer: false, explain: 'C<sub>1</sub> – C<sub>4</sub> là chất khí (butane được nén hoá lỏng trong bình gas).' },
    { type: 'short', q: 'Đốt cháy hoàn toàn 1,6 g CH<sub>4</sub> thu được bao nhiêu gam CO<sub>2</sub>?', answer: '4,4', unit: 'g', calc: '1.6/16*44', explain: 'n = 0,1 mol ⇒ m<sub>CO₂</sub> = 4,4 g.' },
    { type: 'mcq', q: 'Thành phần chính của khí biogas là:', options: ['methane', 'butane', 'ethylene', 'hydrogen'], answer: 0, explain: 'Biogas chứa chủ yếu CH<sub>4</sub>.' }
  ]
});
})();
