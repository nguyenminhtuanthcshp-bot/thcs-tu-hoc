/* KHTN 8 – Bài 11. Muối. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-8/bai-11', {
  objectives: [
    'Nêu được khái niệm muối; đọc được tên một số muối thông dụng.',
    'Chỉ ra được một số muối tan và muối không tan (dựa vào bảng tính tan).',
    'Trình bày được tính chất hoá học của muối: tác dụng với kim loại, acid, base, muối.',
    'Nêu được một số cách điều chế muối.'
  ],
  intro: 'Nhắc đến “muối”, em nghĩ ngay đến muối ăn. Nhưng trong hoá học, muối là cả một nhóm hợp chất lớn: đá vôi, thạch cao, phèn chua, thuốc tím, phân đạm… đều là muối.',
  steps: [
    { title: 'Khái niệm và tên gọi', html: `<p><b>Muối</b> là hợp chất được tạo thành khi thay thế ion H<sup>+</sup> của acid bằng ion kim loại hoặc ion ammonium (NH<sub>4</sub><sup>+</sup>).</p>
      <p>Tên muối = tên kim loại (kèm hoá trị nếu kim loại có nhiều hoá trị) + tên gốc acid.</p>
      <table class="tbl"><tr><th>Muối</th><th>Tên gọi</th></tr><tr><td>NaCl</td><td>sodium chloride</td></tr><tr><td>CuSO<sub>4</sub></td><td>copper(II) sulfate</td></tr><tr><td>CaCO<sub>3</sub></td><td>calcium carbonate</td></tr><tr><td>KNO<sub>3</sub></td><td>potassium nitrate</td></tr><tr><td>Na<sub>3</sub>PO<sub>4</sub></td><td>sodium phosphate</td></tr></table>` },
    { title: 'Tính tan của muối', html: `<ul><li>Muối của Na, K và muối nitrate đều <b>tan</b>.</li><li>Hầu hết muối chloride tan, trừ AgCl.</li><li>Hầu hết muối sulfate tan, trừ BaSO<sub>4</sub> (CaSO<sub>4</sub> ít tan).</li><li>Hầu hết muối carbonate <b>không tan</b>, trừ muối của Na, K.</li></ul>` },
    { title: 'Muối tác dụng với kim loại và với acid', html: `<p><b>Muối + kim loại → muối mới + kim loại mới</b> (kim loại mạnh hơn đẩy kim loại yếu hơn ra khỏi dung dịch muối):</p>
      <p class="math">Fe + CuSO<sub>4</sub> → FeSO<sub>4</sub> + Cu</p>
      <p><b>Muối + acid → muối mới + acid mới</b>:</p><p class="math">CaCO<sub>3</sub> + 2HCl → CaCl<sub>2</sub> + CO<sub>2</sub>↑ + H<sub>2</sub>O</p><p class="math">BaCl<sub>2</sub> + H<sub>2</sub>SO<sub>4</sub> → BaSO<sub>4</sub>↓ + 2HCl</p>` },
    { title: 'Muối tác dụng với base và với muối', html: `<p><b>Dung dịch muối + dung dịch base → muối mới + base mới</b>:</p><p class="math">CuSO<sub>4</sub> + 2NaOH → Cu(OH)<sub>2</sub>↓ + Na<sub>2</sub>SO<sub>4</sub></p>
      <p><b>Dung dịch muối + dung dịch muối → hai muối mới</b>:</p><p class="math">NaCl + AgNO<sub>3</sub> → AgCl↓ + NaNO<sub>3</sub></p>
      <div class="box key">Phản ứng giữa các dung dịch chỉ xảy ra khi sản phẩm có chất kết tủa hoặc chất khí.</div>`,
      svg: S.tubesCompare({ title: 'Một số phản ứng của muối', tubes: [{ label: 'Đinh sắt + CuSO₄', sub: 'đồng đỏ bám vào đinh', liquid: '#93c5fd', solid: 'strip', solidColor: '#b45309' }, { label: 'CuSO₄ + NaOH', sub: 'kết tủa xanh Cu(OH)₂', liquid: '#dbeafe', solid: 'powder', solidColor: '#3b82f6' }, { label: 'NaCl + AgNO₃', sub: 'kết tủa trắng AgCl', liquid: '#f1f5f9', solid: 'powder', solidColor: '#ffffff' }], cw: 170 }) },
    { title: 'Điều chế muối', html: `<p>Một số cách tạo thành muối:</p>`,
      svg: S.mindmap({ center: 'Điều chế muối', branches: [{ title: 'Acid + base', items: ['HCl + NaOH → NaCl + H₂O'] }, { title: 'Acid + oxide base', items: ['CuO + H₂SO₄ → CuSO₄ + H₂O'] }, { title: 'Acid + kim loại', items: ['Zn + 2HCl → ZnCl₂ + H₂'] }, { title: 'Oxide acid + base', items: ['CO₂ + 2NaOH → Na₂CO₃ + H₂O'] }, { title: 'Muối + muối', items: ['BaCl₂ + Na₂SO₄ → BaSO₄ + 2NaCl'] }, { title: 'Kim loại + phi kim', items: ['2Na + Cl₂ → 2NaCl'] }], size: 13, label: 'Một số cách điều chế muối' }) }
  ],
  summary: 'Muối: ion kim loại (hoặc NH<sub>4</sub><sup>+</sup>) + gốc acid. Muối tác dụng với kim loại, acid, base, muối; phản ứng giữa các dung dịch xảy ra khi tạo kết tủa hoặc khí. Muối được điều chế từ acid + base, acid + oxide base, acid + kim loại, oxide acid + base, muối + muối…',
  examples: [
    { title: 'Gọi tên muối', problem: 'Gọi tên: MgCl<sub>2</sub>, FeSO<sub>4</sub>, Na<sub>2</sub>CO<sub>3</sub>.', solution: 'Magnesium chloride; iron(II) sulfate; sodium carbonate.' },
    { title: 'Dự đoán phản ứng', problem: 'Trộn dung dịch KCl với dung dịch NaNO<sub>3</sub> có xảy ra phản ứng không?', solution: 'Không. Các sản phẩm có thể tạo thành (KNO<sub>3</sub>, NaCl) đều tan, không có kết tủa hay khí.' },
    { title: 'Tính khối lượng kết tủa', problem: 'Cho dung dịch chứa 0,1 mol CuSO<sub>4</sub> tác dụng với NaOH dư. Tính khối lượng kết tủa Cu(OH)<sub>2</sub> (Cu = 64, O = 16, H = 1).', solution: 'n<sub>Cu(OH)₂</sub> = 0,1 mol; M = 64 + 2 · 17 = 98 g/mol; m = 9,8 (g).' }
  ],
  exercises: [
    { question: 'Ngâm một đinh sắt trong dung dịch CuSO<sub>4</sub>. Nêu hiện tượng và viết phương trình hoá học.', hints: ['Sắt hoạt động mạnh hơn đồng.', 'Màu xanh của dung dịch CuSO<sub>4</sub> thay đổi thế nào?'], solution: 'Có lớp đồng màu đỏ bám trên đinh sắt, màu xanh của dung dịch nhạt dần. Fe + CuSO<sub>4</sub> → FeSO<sub>4</sub> + Cu.' },
    { question: 'Tính khối lượng mol của CaCO<sub>3</sub> và thể tích khí CO<sub>2</sub> (đkc) thu được khi cho 10 g CaCO<sub>3</sub> tác dụng hết với HCl.', hints: ['M = 40 + 12 + 3 · 16.', 'n<sub>CO₂</sub> = n<sub>CaCO₃</sub>.'], solution: 'M = 100 g/mol; n = 0,1 mol; V = 0,1 · 24,79 = 2,479 (L).' },
    { question: 'Nêu cách nhận biết hai dung dịch NaCl và Na<sub>2</sub>SO<sub>4</sub>.', hints: ['BaSO<sub>4</sub> là kết tủa trắng.', 'Dùng dung dịch BaCl<sub>2</sub>.'], solution: 'Nhỏ dung dịch BaCl<sub>2</sub> vào mỗi mẫu: mẫu tạo kết tủa trắng là Na<sub>2</sub>SO<sub>4</sub> (BaCl<sub>2</sub> + Na<sub>2</sub>SO<sub>4</sub> → BaSO<sub>4</sub>↓ + 2NaCl); mẫu không hiện tượng là NaCl.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tất cả các muối của sodium đều tan trong nước.', answer: true, explain: 'Muối của Na, K đều tan.' },
    { type: 'mcq', q: 'Muối nào KHÔNG tan trong nước?', options: ['NaCl', 'KNO<sub>3</sub>', 'BaSO<sub>4</sub>', 'CuSO<sub>4</sub>'], answer: 2, explain: 'BaSO<sub>4</sub> là kết tủa trắng.' },
    { type: 'short', q: 'Khối lượng mol của CuSO<sub>4</sub> là bao nhiêu g/mol? (Cu = 64, S = 32, O = 16)', answer: '160', unit: 'g/mol', calc: '64+32+4*16', explain: '64 + 32 + 64 = 160 g/mol.' },
    { type: 'mcq', q: 'Kim loại nào đẩy được đồng ra khỏi dung dịch CuSO<sub>4</sub>?', options: ['Ag', 'Fe', 'Au', 'Pt'], answer: 1, explain: 'Fe hoạt động mạnh hơn Cu.' },
    { type: 'short', q: 'Cho 20 g CaCO<sub>3</sub> (M = 100) tác dụng hết với dung dịch HCl. Số mol CO<sub>2</sub> thu được là bao nhiêu?', answer: '0,2', unit: 'mol', calc: '20/100', explain: 'n<sub>CO₂</sub> = n<sub>CaCO₃</sub> = 0,2 mol.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Trộn hai dung dịch muối luôn luôn xảy ra phản ứng.', answer: false, explain: 'Chỉ xảy ra khi sản phẩm có kết tủa hoặc khí.' },
    { type: 'short', q: 'CuSO<sub>4</sub> + 2NaOH → Cu(OH)<sub>2</sub>↓ + Na<sub>2</sub>SO<sub>4</sub>. Cho 0,05 mol CuSO<sub>4</sub> phản ứng hết cần bao nhiêu mol NaOH?', answer: '0,1', unit: 'mol', calc: '0.05*2', explain: 'n<sub>NaOH</sub> = 2 · 0,05 = 0,1 mol.' },
    { type: 'mcq', q: 'Tên gọi của CaCO<sub>3</sub> là:', options: ['calcium carbide', 'calcium carbonate', 'calcium oxide', 'calcium chloride'], answer: 1, explain: 'CO<sub>3</sub> là gốc carbonate.' }
  ]
});
})();
