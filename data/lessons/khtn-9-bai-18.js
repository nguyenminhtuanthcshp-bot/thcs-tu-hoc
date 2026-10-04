/* KHTN 9 – Bài 18. Tính chất chung của kim loại. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-9/bai-18', {
  objectives: [
    'Nêu được tính chất vật lí chung của kim loại: tính dẻo, dẫn điện, dẫn nhiệt, ánh kim.',
    'Trình bày được tính chất hoá học cơ bản của kim loại: tác dụng với phi kim (oxygen, chlorine, sulfur), với dung dịch acid loãng, với dung dịch muối.',
    'Viết được phương trình hoá học minh hoạ và tính toán theo phương trình.'
  ],
  intro: 'Nồi bằng nhôm, dây điện bằng đồng, nhẫn bằng vàng, khung xe bằng thép… Kim loại có mặt khắp nơi nhờ những tính chất rất đặc trưng mà phi kim không có.',
  steps: [
    { title: 'Tính chất vật lí', html: `<ul><li><b>Tính dẻo:</b> dát mỏng, kéo sợi được (vàng dát thành lá rất mỏng; nhôm làm giấy bạc).</li><li><b>Dẫn điện</b> tốt: bạc > đồng > vàng > nhôm > sắt.</li><li><b>Dẫn nhiệt</b> tốt: làm nồi, chảo.</li><li><b>Ánh kim:</b> bề mặt sáng lấp lánh (làm đồ trang sức).</li></ul>
      <p>Ngoài ra kim loại khác nhau về khối lượng riêng, nhiệt độ nóng chảy (thuỷ ngân lỏng ở nhiệt độ thường; tungsten nóng chảy ở khoảng 3 400 °C), độ cứng.</p>` },
    { title: 'Tác dụng với phi kim', html: `<p><b>Với oxygen</b> → oxide:</p>
      <p class="math">3Fe + 2O<sub>2</sub> <span class="arrow">→</span> Fe<sub>3</sub>O<sub>4</sub> (t°)</p><p class="math">4Al + 3O<sub>2</sub> <span class="arrow">→</span> 2Al<sub>2</sub>O<sub>3</sub> (t°)</p>
      <p><b>Với chlorine, sulfur</b> → muối:</p>
      <p class="math">2Na + Cl<sub>2</sub> <span class="arrow">→</span> 2NaCl (t°)</p><p class="math">Fe + S <span class="arrow">→</span> FeS (t°)</p>` },
    { title: 'Tác dụng với dung dịch acid', html: `<p>Nhiều kim loại (Mg, Al, Zn, Fe…) tác dụng với dung dịch HCl, H<sub>2</sub>SO<sub>4</sub> loãng tạo thành <b>muối và khí hydrogen</b>:</p>
      <p class="math">Zn + 2HCl <span class="arrow">→</span> ZnCl<sub>2</sub> + H<sub>2</sub>↑</p><p class="math">Fe + H<sub>2</sub>SO<sub>4</sub> <span class="arrow">→</span> FeSO<sub>4</sub> + H<sub>2</sub>↑</p>
      <p>Cu, Ag, Au <b>không</b> tác dụng với HCl, H<sub>2</sub>SO<sub>4</sub> loãng.</p>`,
      svg: S.tubesCompare({ title: 'Kim loại trong dung dịch HCl loãng', tubes: [{ label: 'Mg', sub: 'sủi bọt mạnh', liquid: '#f1f5f9', bubbles: 9, solid: 'chunk', solidColor: '#cbd5e1' }, { label: 'Zn', sub: 'sủi bọt', liquid: '#f1f5f9', bubbles: 5, solid: 'chunk', solidColor: '#94a3b8' }, { label: 'Cu', sub: 'không hiện tượng', liquid: '#f1f5f9', solid: 'chunk', solidColor: '#c2410c' }] }), caption: 'Mg, Zn phản ứng với HCl giải phóng H₂; Cu không phản ứng.' },
    { title: 'Tác dụng với dung dịch muối', html: `<p>Kim loại hoạt động mạnh hơn (trừ K, Na, Ca…) đẩy kim loại yếu hơn ra khỏi dung dịch muối:</p>
      <p class="math">Fe + CuSO<sub>4</sub> <span class="arrow">→</span> FeSO<sub>4</sub> + Cu</p>
      <p>Hiện tượng: đinh sắt được phủ lớp đỏ (Cu), màu xanh của dung dịch nhạt dần.</p>
      <p class="math">Cu + 2AgNO<sub>3</sub> <span class="arrow">→</span> Cu(NO<sub>3</sub>)<sub>2</sub> + 2Ag</p>`,
      svg: S.tubesCompare({ title: 'Đinh sắt trong dung dịch CuSO₄', cw: 190, tubes: [{ label: 'Ban đầu', sub: 'dung dịch xanh lam', liquid: '#7dd3fc' }, { label: 'Sau 15 phút', sub: 'Cu đỏ bám đinh, nhạt màu', liquid: '#bae6fd', solid: 'chunk', solidColor: '#b45309' }] }), caption: 'Sắt đẩy đồng ra khỏi dung dịch muối đồng(II) sulfate.' }
  ],
  summary: 'Kim loại có tính dẻo, dẫn điện, dẫn nhiệt, ánh kim. Tính chất hoá học: tác dụng với phi kim (O₂ → oxide; Cl₂, S → muối), với dung dịch HCl, H₂SO₄ loãng (→ muối + H₂, trừ Cu, Ag, Au…), với dung dịch muối của kim loại yếu hơn.',
  examples: [
    { title: 'Thể tích khí', problem: 'Cho 6,5 g Zn tác dụng hết với dung dịch HCl. Tính thể tích H<sub>2</sub> thu được ở 25 °C, 1 bar (24,79 L/mol).', solution: 'n<sub>Zn</sub> = 6,5 / 65 = 0,1 mol. Zn + 2HCl → ZnCl<sub>2</sub> + H<sub>2</sub> ⇒ n<sub>H₂</sub> = 0,1 mol.<br>V = 0,1 · 24,79 = 2,479 L.' },
    { title: 'Khối lượng kim loại', problem: 'Ngâm đinh sắt dư trong dung dịch chứa 0,05 mol CuSO<sub>4</sub>. Tính khối lượng Cu tạo thành.', solution: 'n<sub>Cu</sub> = n<sub>CuSO₄</sub> = 0,05 mol; m = 0,05 · 64 = 3,2 g.' },
    { title: 'Viết phương trình', problem: 'Viết phương trình Mg tác dụng với dung dịch HCl.', solution: 'Mg + 2HCl → MgCl<sub>2</sub> + H<sub>2</sub>↑' }
  ],
  exercises: [
    { question: 'Cho 2,4 g Mg tác dụng hết với dung dịch H<sub>2</sub>SO<sub>4</sub> loãng. Tính khối lượng muối MgSO<sub>4</sub> tạo thành.', hints: ['n<sub>Mg</sub> = 2,4 / 24.', 'M<sub>MgSO₄</sub> = 24 + 32 + 64 = 120.'], solution: 'Mg + H<sub>2</sub>SO<sub>4</sub> → MgSO<sub>4</sub> + H<sub>2</sub>. n = 0,1 mol; m = 0,1 · 120 = 12 g.' },
    { question: 'Vì sao dùng nhôm làm dây dẫn điện cao thế, dùng đồng làm dây điện trong nhà?', hints: ['So sánh khối lượng riêng của nhôm và đồng.', 'Đồng dẫn điện tốt hơn nhôm.'], solution: 'Nhôm nhẹ, rẻ, dẫn điện khá tốt nên hợp với dây cao thế dài; đồng dẫn điện tốt hơn, bền, dễ uốn nên dùng trong nhà.' },
    { question: 'Có hiện tượng gì khi cho dây đồng vào dung dịch AgNO<sub>3</sub>? Viết phương trình.', hints: ['Cu hoạt động mạnh hơn Ag.', 'Dung dịch Cu(NO<sub>3</sub>)<sub>2</sub> có màu xanh.'], solution: 'Có lớp bạc trắng xám bám trên dây đồng, dung dịch chuyển dần màu xanh. Cu + 2AgNO<sub>3</sub> → Cu(NO<sub>3</sub>)<sub>2</sub> + 2Ag.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Đồng tác dụng với dung dịch HCl loãng giải phóng khí hydrogen.', answer: false, explain: 'Cu đứng sau H trong dãy hoạt động, không đẩy được H.' },
    { type: 'mcq', q: 'Kim loại dẫn điện tốt nhất là:', options: ['Nhôm', 'Sắt', 'Bạc', 'Vàng'], answer: 2, explain: 'Bạc dẫn điện tốt nhất, sau đó đến đồng.' },
    { type: 'mcq', q: 'Sản phẩm của Fe tác dụng với dung dịch H<sub>2</sub>SO<sub>4</sub> loãng là:', options: ['Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> và H<sub>2</sub>', 'FeSO<sub>4</sub> và H<sub>2</sub>', 'FeSO<sub>4</sub> và H<sub>2</sub>O', 'FeO và SO<sub>2</sub>'], answer: 1, explain: 'Fe + H<sub>2</sub>SO<sub>4</sub> loãng → FeSO<sub>4</sub> + H<sub>2</sub>.' },
    { type: 'short', q: 'Cho 5,6 g Fe tác dụng hết với dung dịch HCl. Số mol H<sub>2</sub> sinh ra là bao nhiêu?', answer: '0,1', unit: 'mol', calc: '5.6/56', explain: 'n<sub>H₂</sub> = n<sub>Fe</sub> = 0,1 mol.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Kim loại có tính dẻo nên dát mỏng và kéo sợi được.', answer: true, explain: 'Đây là tính chất vật lí chung của kim loại.' },
    { type: 'short', q: 'Cho 0,2 mol Zn tác dụng hết với HCl. Thể tích H<sub>2</sub> (25 °C, 1 bar) là bao nhiêu lít? (24,79 L/mol)', answer: '4,958', unit: 'L', calc: '0.2*24.79', explain: '0,2 · 24,79 = 4,958 L.' },
    { type: 'mcq', q: 'Ngâm đinh sắt trong dung dịch CuSO<sub>4</sub>, hiện tượng là:', options: ['không có hiện tượng', 'có lớp đỏ bám trên đinh, màu xanh nhạt dần', 'có khí thoát ra', 'dung dịch hoá đỏ'], answer: 1, explain: 'Fe + CuSO<sub>4</sub> → FeSO<sub>4</sub> + Cu.' },
    { type: 'short', q: 'Đốt cháy hoàn toàn 2,7 g Al trong oxygen. Khối lượng Al<sub>2</sub>O<sub>3</sub> thu được là bao nhiêu gam?', answer: '5,1', unit: 'g', calc: '2.7/27/2*102', explain: 'n<sub>Al</sub> = 0,1 mol ⇒ n<sub>Al₂O₃</sub> = 0,05 mol; m = 0,05 · 102 = 5,1 g.' }
  ]
});
})();
