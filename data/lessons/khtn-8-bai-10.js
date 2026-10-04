/* KHTN 8 – Bài 10. Oxide. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-8/bai-10', {
  objectives: [
    'Nêu được khái niệm oxide là hợp chất của oxygen với một nguyên tố khác.',
    'Phân loại được oxide: oxide base, oxide acid, oxide lưỡng tính, oxide trung tính.',
    'Trình bày được tính chất hoá học của oxide base (tác dụng với acid) và oxide acid (tác dụng với base).',
    'Viết được phương trình hoá học và tính được thành phần, khối lượng trong bài toán đơn giản.'
  ],
  intro: 'Gỉ sắt, vôi sống, khí carbon dioxide trong hơi thở, cát trắng (silicon dioxide)… đều là <b>oxide</b>. Chúng có mặt ở khắp nơi quanh ta nhưng tính chất lại rất khác nhau.',
  steps: [
    { title: 'Khái niệm oxide', html: `<p><b>Oxide</b> là hợp chất của hai nguyên tố, trong đó có một nguyên tố là <b>oxygen</b>.</p>
      <p>Ví dụ: CaO (calcium oxide – vôi sống), CuO (copper(II) oxide), Fe<sub>2</sub>O<sub>3</sub> (iron(III) oxide), CO<sub>2</sub> (carbon dioxide), SO<sub>2</sub> (sulfur dioxide), P<sub>2</sub>O<sub>5</sub> (diphosphorus pentoxide).</p>
      <p>Tên oxide = tên nguyên tố (kèm hoá trị nếu nguyên tố có nhiều hoá trị) + oxide.</p>` },
    { title: 'Phân loại oxide', html: `<ul><li><b>Oxide base</b>: tác dụng với acid tạo muối và nước (thường là oxide của kim loại): CaO, CuO, Fe<sub>2</sub>O<sub>3</sub>, Na<sub>2</sub>O.</li><li><b>Oxide acid</b>: tác dụng với base tạo muối và nước (thường là oxide của phi kim): CO<sub>2</sub>, SO<sub>2</sub>, SO<sub>3</sub>, P<sub>2</sub>O<sub>5</sub>.</li><li><b>Oxide lưỡng tính</b>: tác dụng được với cả acid và base: Al<sub>2</sub>O<sub>3</sub>, ZnO.</li><li><b>Oxide trung tính</b>: không tác dụng với acid, base: CO, NO.</li></ul>`,
      svg: S.mindmap({ center: 'Oxide', branches: [{ title: 'Oxide base', items: ['CaO, CuO, Fe₂O₃', '+ acid → muối + nước'] }, { title: 'Oxide acid', items: ['CO₂, SO₂, P₂O₅', '+ base → muối + nước'] }, { title: 'Oxide lưỡng tính', items: ['Al₂O₃, ZnO', '+ acid và + base'] }, { title: 'Oxide trung tính', items: ['CO, NO', 'không tác dụng với acid, base'] }], size: 14, label: 'Phân loại oxide' }) },
    { title: 'Tính chất của oxide base', html: `<p>Oxide base tác dụng với acid tạo thành muối và nước:</p>
      <p class="math">CuO + 2HCl → CuCl<sub>2</sub> + H<sub>2</sub>O</p><p class="math">Fe<sub>2</sub>O<sub>3</sub> + 6HCl → 2FeCl<sub>3</sub> + 3H<sub>2</sub>O</p>
      <p>Một số oxide base (Na<sub>2</sub>O, K<sub>2</sub>O, CaO, BaO) tác dụng với nước tạo base: <span class="math">CaO + H<sub>2</sub>O → Ca(OH)<sub>2</sub></span></p>`,
      svg: S.tubesCompare({ title: 'Bột CuO màu đen tan trong dung dịch HCl', tubes: [{ label: 'Trước', sub: 'bột CuO đen', liquid: '#f1f5f9', solid: 'powder', solidColor: '#111827' }, { label: 'Sau khi lắc', sub: 'dung dịch xanh lục', liquid: '#6ee7b7' }] }) },
    { title: 'Tính chất của oxide acid', html: `<p>Oxide acid tác dụng với dung dịch base tạo thành muối và nước:</p>
      <p class="math">CO<sub>2</sub> + Ca(OH)<sub>2</sub> → CaCO<sub>3</sub>↓ + H<sub>2</sub>O</p><p class="math">SO<sub>2</sub> + 2NaOH → Na<sub>2</sub>SO<sub>3</sub> + H<sub>2</sub>O</p>
      <p>Thổi hơi thở vào nước vôi trong, nước vôi bị vẩn đục do tạo kết tủa CaCO<sub>3</sub> – cách nhận biết khí CO<sub>2</sub>.</p>
      <p>Nhiều oxide acid tác dụng với nước tạo acid: <span class="math">SO<sub>3</sub> + H<sub>2</sub>O → H<sub>2</sub>SO<sub>4</sub>; &nbsp;P<sub>2</sub>O<sub>5</sub> + 3H<sub>2</sub>O → 2H<sub>3</sub>PO<sub>4</sub></span></p>`,
      svg: S.tubesCompare({ title: 'Thổi khí CO₂ vào nước vôi trong', tubes: [{ label: 'Nước vôi trong', sub: 'trong suốt', liquid: '#f0f9ff' }, { label: 'Sau khi thổi', sub: 'vẩn đục (CaCO₃)', liquid: '#e5e7eb', bubbles: 6, solid: 'powder', solidColor: '#ffffff' }] }) },
    { title: 'Oxide trong đời sống', html: `<ul><li>Vôi sống CaO dùng khử chua đất, xử lí nước thải, trong xây dựng.</li><li>Khí SO<sub>2</sub>, NO<sub>2</sub> thải ra từ nhà máy, phương tiện giao thông là nguyên nhân gây mưa acid.</li><li>Khí CO không màu, không mùi, rất độc; không đốt than trong phòng kín.</li></ul>` }
  ],
  summary: 'Oxide: hợp chất của oxygen với một nguyên tố khác. Oxide base + acid → muối + nước; oxide acid + base → muối + nước; oxide lưỡng tính (Al<sub>2</sub>O<sub>3</sub>, ZnO) tác dụng cả acid và base; oxide trung tính (CO, NO) không tác dụng với acid, base.',
  examples: [
    { title: 'Phân loại', problem: 'Phân loại các oxide: Na<sub>2</sub>O, SO<sub>3</sub>, CO, Al<sub>2</sub>O<sub>3</sub>.', solution: 'Na<sub>2</sub>O: oxide base; SO<sub>3</sub>: oxide acid; CO: oxide trung tính; Al<sub>2</sub>O<sub>3</sub>: oxide lưỡng tính.' },
    { title: 'Phần trăm khối lượng', problem: 'Tính phần trăm khối lượng oxygen trong CuO (Cu = 64, O = 16).', solution: 'M(CuO) = 80 g/mol. %O = {{16|80}} · 100 % = 20 %.' },
    { title: 'Tính khối lượng kết tủa', problem: 'Dẫn 0,1 mol CO<sub>2</sub> vào dung dịch Ca(OH)<sub>2</sub> dư. Tính khối lượng kết tủa.', solution: 'CO<sub>2</sub> + Ca(OH)<sub>2</sub> → CaCO<sub>3</sub>↓ + H<sub>2</sub>O. n<sub>CaCO₃</sub> = 0,1 mol; m = 0,1 · 100 = 10 (g).' }
  ],
  exercises: [
    { question: 'Viết phương trình hoá học khi cho vôi sống CaO tác dụng với dung dịch HCl.', hints: ['CaO là oxide base.', 'Oxide base + acid → muối + nước.'], solution: 'CaO + 2HCl → CaCl<sub>2</sub> + H<sub>2</sub>O.' },
    { question: 'Tính khối lượng mol của Fe<sub>2</sub>O<sub>3</sub> (Fe = 56, O = 16) và phần trăm khối lượng Fe trong đó.', hints: ['M = 2 · 56 + 3 · 16.', '%Fe = 112 : M · 100 %.'], solution: 'M = 160 g/mol; %Fe = 112 : 160 · 100 % = 70 %.' },
    { question: 'Có hai khí không màu là O<sub>2</sub> và CO<sub>2</sub>. Nêu cách phân biệt.', hints: ['Khí nào làm vẩn đục nước vôi trong?', 'CO<sub>2</sub> là oxide acid.'], solution: 'Dẫn lần lượt từng khí vào nước vôi trong: khí làm nước vôi vẩn đục là CO<sub>2</sub>, khí còn lại là O<sub>2</sub>.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: CO<sub>2</sub> là oxide acid.', answer: true, explain: 'CO<sub>2</sub> tác dụng với base tạo muối và nước.' },
    { type: 'mcq', q: 'Oxide nào là oxide base?', options: ['SO<sub>2</sub>', 'P<sub>2</sub>O<sub>5</sub>', 'CuO', 'CO'], answer: 2, explain: 'CuO tác dụng với acid tạo muối và nước.' },
    { type: 'short', q: 'Khối lượng mol của CaO là bao nhiêu g/mol? (Ca = 40, O = 16)', answer: '56', unit: 'g/mol', calc: '40+16', explain: '40 + 16 = 56 g/mol.' },
    { type: 'mcq', q: 'Khí làm vẩn đục nước vôi trong là:', options: ['O<sub>2</sub>', 'H<sub>2</sub>', 'CO<sub>2</sub>', 'N<sub>2</sub>'], answer: 2, explain: 'CO<sub>2</sub> + Ca(OH)<sub>2</sub> → CaCO<sub>3</sub>↓ + H<sub>2</sub>O.' },
    { type: 'short', q: 'Phần trăm khối lượng oxygen trong CuO (Cu = 64, O = 16) là bao nhiêu %?', answer: '20', unit: '%', calc: '16/(64+16)*100', explain: '16 : 80 · 100 % = 20 %.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Al<sub>2</sub>O<sub>3</sub> chỉ tác dụng với acid, không tác dụng với base.', answer: false, explain: 'Al<sub>2</sub>O<sub>3</sub> là oxide lưỡng tính, tác dụng được với cả acid và base.' },
    { type: 'short', q: 'Dẫn 0,05 mol CO<sub>2</sub> vào nước vôi trong dư. Khối lượng kết tủa CaCO<sub>3</sub> (M = 100) là bao nhiêu gam?', answer: '5', unit: 'g', calc: '0.05*100', explain: 'n<sub>CaCO₃</sub> = 0,05 mol; m = 5 g.' },
    { type: 'short', q: 'CuO + 2HCl → CuCl<sub>2</sub> + H<sub>2</sub>O. Hoà tan 0,1 mol CuO cần bao nhiêu mol HCl?', answer: '0,2', unit: 'mol', calc: '0.1*2', explain: 'n<sub>HCl</sub> = 2 · 0,1 = 0,2 mol.' }
  ]
});
})();
