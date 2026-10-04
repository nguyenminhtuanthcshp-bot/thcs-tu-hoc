/* KHTN 9 – Bài 21. Sự khác nhau cơ bản giữa phi kim và kim loại. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-9/bai-21', {
  objectives: [
    'Nêu được sự khác nhau cơ bản về tính chất vật lí giữa phi kim và kim loại.',
    'Nêu được sự khác nhau về tính chất hoá học: khả năng tạo ion, tạo oxide, phản ứng với acid.',
    'Vận dụng để phân biệt và dự đoán tính chất của một số đơn chất.'
  ],
  intro: 'Carbon trong ruột bút chì, sulfur màu vàng, chlorine là khí độc màu vàng lục… khác hẳn đồng, sắt, nhôm. Vậy phi kim và kim loại khác nhau ở những điểm cơ bản nào?',
  steps: [
    { title: 'Vị trí trong bảng tuần hoàn', html: `<p>Kim loại chiếm phần lớn bảng tuần hoàn (bên trái và giữa). Phi kim nằm ở góc trên bên phải (C, N, O, F, P, S, Cl…). Khí hiếm (nhóm VIIIA) rất kém hoạt động.</p>`,
      svg: S.periodicTable({ highlight: ['C', 'N', 'O', 'S', 'Cl'] }), caption: 'Một số phi kim thường gặp (viền đỏ) nằm ở phía bên phải bảng tuần hoàn.' },
    { title: 'Khác nhau về tính chất vật lí', html: `<table><tr><th>Tính chất</th><th>Kim loại</th><th>Phi kim</th></tr><tr><td>Trạng thái (thường)</td><td>rắn (trừ Hg lỏng)</td><td>rắn, lỏng (Br<sub>2</sub>) hoặc khí</td></tr><tr><td>Ánh kim</td><td>có</td><td>thường không có</td></tr><tr><td>Dẫn điện, nhiệt</td><td>tốt</td><td>kém (trừ than chì dẫn điện)</td></tr><tr><td>Tính dẻo</td><td>dẻo</td><td>giòn (nếu rắn)</td></tr></table>` },
    { title: 'Khác nhau về tính chất hoá học', html: `<ul><li><b>Tạo ion:</b> kim loại dễ <b>nhường</b> electron tạo ion dương (Na<sup>+</sup>, Mg<sup>2+</sup>); phi kim dễ <b>nhận</b> electron tạo ion âm (Cl<sup>−</sup>, O<sup>2−</sup>).</li><li><b>Oxide:</b> kim loại thường tạo <b>oxide base</b> (Na<sub>2</sub>O, CaO, CuO); phi kim thường tạo <b>oxide acid</b> (CO<sub>2</sub>, SO<sub>2</sub>, P<sub>2</sub>O<sub>5</sub>).</li><li><b>Với acid:</b> nhiều kim loại tác dụng với HCl, H<sub>2</sub>SO<sub>4</sub> loãng; phi kim không phản ứng với các acid này.</li><li>Phi kim tác dụng với hydrogen tạo hợp chất khí: H<sub>2</sub> + Cl<sub>2</sub> → 2HCl.</li></ul>`,
      svg: S.flow({ items: ['Kim loại Na', 'nhường 1e', 'ion dương Na⁺', 'kết hợp Cl⁻', 'NaCl (liên kết ion)'], size: 13, label: 'Kim loại nhường electron, phi kim nhận electron' }), caption: 'Na nhường electron cho Cl tạo ion Na⁺ và Cl⁻.' },
    { title: 'Oxide và dung dịch', html: `<p class="math">CaO + H<sub>2</sub>O → Ca(OH)<sub>2</sub> (base, làm quỳ tím hoá xanh)</p>
      <p class="math">CO<sub>2</sub> + H<sub>2</sub>O ⇌ H<sub>2</sub>CO<sub>3</sub> (acid yếu, làm quỳ tím hoá đỏ nhạt)</p>
      <p>Đây là cách đơn giản để nhận biết oxide của kim loại hay phi kim.</p>` }
  ],
  summary: 'Kim loại: ánh kim, dẫn điện nhiệt tốt, dẻo; nhường electron tạo ion dương; tạo oxide base; nhiều kim loại tác dụng với acid loãng. Phi kim: thường không ánh kim, dẫn điện nhiệt kém, giòn; nhận electron tạo ion âm; tạo oxide acid; không tác dụng với HCl, H₂SO₄ loãng.',
  examples: [
    { title: 'Phân loại oxide', problem: 'Phân loại các oxide: SO<sub>2</sub>, MgO, P<sub>2</sub>O<sub>5</sub>, K<sub>2</sub>O.', solution: 'Oxide acid (phi kim): SO<sub>2</sub>, P<sub>2</sub>O<sub>5</sub>. Oxide base (kim loại): MgO, K<sub>2</sub>O.' },
    { title: 'Tạo ion', problem: 'Nguyên tử Mg và O tạo ion thế nào khi phản ứng với nhau?', solution: 'Mg nhường 2 electron tạo Mg<sup>2+</sup>; O nhận 2 electron tạo O<sup>2−</sup>; tạo MgO.' },
    { title: 'Tính khối lượng', problem: 'Đốt cháy 3,2 g sulfur trong oxygen dư. Tính thể tích SO<sub>2</sub> ở 25 °C, 1 bar.', solution: 'S + O<sub>2</sub> → SO<sub>2</sub>; n = 3,2 / 32 = 0,1 mol; V = 0,1 · 24,79 = 2,479 L.' }
  ],
  exercises: [
    { question: 'Nêu ba điểm khác nhau về tính chất vật lí giữa kim loại và phi kim.', hints: ['Ánh kim.', 'Dẫn điện, dẫn nhiệt, tính dẻo.'], solution: 'Kim loại có ánh kim, dẫn điện và nhiệt tốt, dẻo; phi kim thường không có ánh kim, dẫn điện và nhiệt kém, giòn.' },
    { question: 'Cho mẩu than (C) và mẩu kẽm (Zn) vào dung dịch HCl. Nêu hiện tượng.', hints: ['Zn đứng trước H.', 'Phi kim có phản ứng với HCl không?'], solution: 'Mẩu kẽm tan, sủi bọt khí H<sub>2</sub>; mẩu than không có hiện tượng.' },
    { question: 'Hoà tan oxide X vào nước, dung dịch làm quỳ tím hoá xanh. X là oxide của kim loại hay phi kim?', hints: ['Quỳ tím hoá xanh khi gặp base.', 'Oxide nào tạo base?'], solution: 'X là oxide base của kim loại (ví dụ Na<sub>2</sub>O, CaO).' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Phi kim thường tạo thành oxide acid.', answer: true, explain: 'Ví dụ CO<sub>2</sub>, SO<sub>2</sub>, P<sub>2</sub>O<sub>5</sub>.' },
    { type: 'mcq', q: 'Phi kim nào ở thể lỏng ở nhiệt độ thường?', options: ['Chlorine', 'Bromine', 'Sulfur', 'Carbon'], answer: 1, explain: 'Br<sub>2</sub> là chất lỏng màu nâu đỏ.' },
    { type: 'mcq', q: 'Khi phản ứng, nguyên tử kim loại có xu hướng:', options: ['nhận electron tạo ion âm', 'nhường electron tạo ion dương', 'không thay đổi', 'nhận proton'], answer: 1, explain: 'Kim loại nhường electron.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Sulfur tác dụng với dung dịch HCl loãng giải phóng H<sub>2</sub>.', answer: false, explain: 'Phi kim không tác dụng với acid loãng.' },
    { type: 'short', q: 'Đốt cháy hoàn toàn 1,2 g carbon. Số mol CO<sub>2</sub> tạo thành là bao nhiêu?', answer: '0,1', unit: 'mol', calc: '1.2/12', explain: 'C + O<sub>2</sub> → CO<sub>2</sub>; n = 0,1 mol.' },
    { type: 'mcq', q: 'Oxide nào là oxide base?', options: ['CO<sub>2</sub>', 'SO<sub>3</sub>', 'CaO', 'P<sub>2</sub>O<sub>5</sub>'], answer: 2, explain: 'CaO là oxide của kim loại Ca.' },
    { type: 'short', q: 'Đốt 6,4 g sulfur trong oxygen dư. Khối lượng SO<sub>2</sub> thu được là bao nhiêu gam?', answer: '12,8', unit: 'g', calc: '6.4/32*64', explain: 'n = 0,2 mol; m = 0,2 · 64 = 12,8 g.' },
    { type: 'mcq', q: 'Phi kim dẫn điện được là:', options: ['lưu huỳnh', 'than chì (graphite)', 'oxygen', 'iodine'], answer: 1, explain: 'Than chì dẫn điện, dùng làm điện cực.' }
  ]
});
})();
