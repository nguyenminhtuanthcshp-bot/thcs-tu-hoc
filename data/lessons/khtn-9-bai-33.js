/* KHTN 9 – Bài 33. Sơ lược về hoá học vỏ Trái Đất và khai thác tài nguyên từ vỏ Trái Đất. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-9/bai-33', {
  objectives: [
    'Nêu được thành phần hoá học chủ yếu của vỏ Trái Đất (oxygen, silicon, aluminium, iron…).',
    'Nêu được các loại tài nguyên trong vỏ Trái Đất: khoáng sản kim loại, phi kim, nhiên liệu hoá thạch, đất, nước.',
    'Trình bày được sự cần thiết của việc khai thác, sử dụng tài nguyên tiết kiệm, hiệu quả và bảo vệ môi trường.'
  ],
  intro: 'Vỏ Trái Đất chỉ dày khoảng 5 – 70 km (tham khảo) nhưng cung cấp gần như mọi vật liệu cho con người: đá xây nhà, quặng luyện kim, than đá, dầu mỏ, đất trồng trọt… Vỏ Trái Đất được tạo nên từ những nguyên tố nào?',
  steps: [
    { title: 'Thành phần hoá học của vỏ Trái Đất', html: `<p>Vỏ Trái Đất gồm chủ yếu các hợp chất của oxygen với silicon, aluminium, iron, calcium… (dạng silicate, oxide, carbonate). Hai nguyên tố phổ biến nhất là <b>oxygen</b> và <b>silicon</b>.</p>`,
      svg: S.pieChart({ title: 'Thành phần nguyên tố của vỏ Trái Đất theo khối lượng (tham khảo)', parts: [{ label: 'O ≈ 46%', v: 46, color: '#dc2626' }, { label: 'Si ≈ 28%', v: 28, color: '#64748b' }, { label: 'Al ≈ 8%', v: 8, color: '#2563eb' }, { label: 'Fe ≈ 5%', v: 5, color: '#a16207' }, { label: 'Nguyên tố khác ≈ 13%', v: 13, color: '#16a34a' }] }), caption: 'Oxygen và silicon chiếm gần 3/4 khối lượng vỏ Trái Đất (giá trị tham khảo, làm tròn).' },
    { title: 'Tài nguyên trong vỏ Trái Đất', html: `<table><tr><th>Loại tài nguyên</th><th>Ví dụ</th></tr><tr><td>Khoáng sản kim loại</td><td>quặng sắt, bauxite (nhôm), quặng đồng, thiếc</td></tr><tr><td>Khoáng sản phi kim</td><td>đá vôi, cát, đất sét, apatite (phosphorus), muối mỏ</td></tr><tr><td>Nhiên liệu hoá thạch</td><td>than đá, dầu mỏ, khí tự nhiên</td></tr><tr><td>Tài nguyên khác</td><td>đất, nước ngầm, đá quý</td></tr></table>
      <p>Việt Nam có trữ lượng lớn bauxite (Tây Nguyên), than (Quảng Ninh), đá vôi, apatite (Lào Cai), dầu khí (thềm lục địa phía Nam).</p>` },
    { title: 'Khai thác tài nguyên', html: `<p>Khai thác khoáng sản gồm: thăm dò → khai thác (lộ thiên hoặc hầm lò) → tuyển quặng → chế biến (luyện kim, sản xuất vật liệu).</p>`,
      svg: S.flow({ items: ['Thăm dò, đánh giá trữ lượng', 'Khai thác (lộ thiên, hầm lò)', 'Tuyển quặng, làm giàu', 'Chế biến thành sản phẩm', 'Hoàn nguyên môi trường'], size: 13, label: 'Các bước khai thác khoáng sản' }), caption: 'Quy trình khai thác khoáng sản cần kết thúc bằng hoàn nguyên môi trường.' },
    { title: 'Sử dụng tài nguyên hợp lí', html: `<p>Tài nguyên khoáng sản là <b>không tái tạo</b> (hình thành qua hàng triệu năm). Khai thác bừa bãi gây cạn kiệt, ô nhiễm đất, nước, không khí, sạt lở, mất rừng.</p>
      <ul><li>Khai thác theo quy hoạch, có giấy phép; dùng công nghệ hiện đại để giảm hao hụt.</li><li>Tái chế kim loại, giấy, nhựa; dùng vật liệu thay thế.</li><li>Hoàn nguyên môi trường sau khai thác (lấp moong, trồng rừng).</li></ul>` }
  ],
  summary: 'Vỏ Trái Đất chủ yếu gồm O (≈ 46 %), Si (≈ 28 %), Al, Fe, Ca… ở dạng silicate, oxide, carbonate. Tài nguyên: khoáng sản kim loại, phi kim, nhiên liệu hoá thạch, đất, nước. Khoáng sản không tái tạo nên phải khai thác hợp lí, tiết kiệm, tái chế và bảo vệ môi trường.',
  examples: [
    { title: 'Phân loại', problem: 'Xếp các tài nguyên sau vào nhóm thích hợp: bauxite, đá vôi, than đá, quặng sắt, cát.', solution: 'Khoáng sản kim loại: bauxite, quặng sắt. Khoáng sản phi kim: đá vôi, cát. Nhiên liệu hoá thạch: than đá.' },
    { title: 'Tính khối lượng', problem: 'Một mẫu đá nặng 200 kg có thành phần giống vỏ Trái Đất (O ≈ 46 %). Ước tính khối lượng oxygen trong mẫu.', solution: 'm<sub>O</sub> ≈ 200 · 46 / 100 = 92 kg.' },
    { title: 'Tái chế', problem: 'Vì sao tái chế lon nhôm giúp tiết kiệm tài nguyên?', solution: 'Giảm lượng bauxite cần khai thác và tiết kiệm phần lớn năng lượng điện phân so với sản xuất nhôm mới.' }
  ],
  exercises: [
    { question: 'Kể tên hai nguyên tố phổ biến nhất trong vỏ Trái Đất.', hints: ['Xem biểu đồ thành phần.', 'Một phi kim tạo nên nước và không khí.'], solution: 'Oxygen và silicon.' },
    { question: 'Nêu hai tác hại của việc khai thác khoáng sản trái phép.', hints: ['Ảnh hưởng tới đất, nước, rừng.', 'An toàn lao động.'], solution: 'Gây ô nhiễm đất, nước, mất rừng, sạt lở; lãng phí tài nguyên; mất an toàn cho người lao động.' },
    { question: '1 tấn đá có 8 % aluminium (theo khối lượng). Khối lượng aluminium trong 1 tấn đá là bao nhiêu kg?', hints: ['1 tấn = 1 000 kg.', 'Nhân với 8 %.'], solution: '1 000 · 8 / 100 = 80 kg.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nguyên tố phổ biến nhất trong vỏ Trái Đất (theo khối lượng) là oxygen.', answer: true, explain: 'Oxygen chiếm khoảng 46 %.' },
    { type: 'mcq', q: 'Nguyên tố phổ biến thứ hai trong vỏ Trái Đất là:', options: ['iron', 'silicon', 'aluminium', 'calcium'], answer: 1, explain: 'Silicon ≈ 28 %.' },
    { type: 'mcq', q: 'Bauxite là quặng dùng để sản xuất:', options: ['sắt', 'nhôm', 'đồng', 'phân lân'], answer: 1, explain: 'Bauxite chứa Al<sub>2</sub>O<sub>3</sub>.' },
    { type: 'short', q: 'Một mẫu đất đá 500 kg chứa 28 % silicon. Khối lượng silicon là bao nhiêu kg?', answer: '140', unit: 'kg', calc: '500*28/100', explain: '500 · 0,28 = 140 kg.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khoáng sản là tài nguyên tái tạo nên có thể khai thác không giới hạn.', answer: false, explain: 'Khoáng sản không tái tạo.' },
    { type: 'mcq', q: 'Việc làm nào giúp sử dụng tài nguyên khoáng sản hợp lí?', options: ['Khai thác trái phép', 'Tái chế kim loại phế liệu', 'Bỏ hoang mỏ sau khai thác', 'Xuất khẩu quặng thô ồ ạt'], answer: 1, explain: 'Tái chế giảm nhu cầu khai thác.' },
    { type: 'short', q: 'Theo giá trị tham khảo, O ≈ 46 % và Si ≈ 28 %. Tổng phần trăm của hai nguyên tố là bao nhiêu %?', answer: '74', unit: '%', calc: '46+28', explain: '46 + 28 = 74 %.' },
    { type: 'mcq', q: 'Apatite là khoáng sản dùng sản xuất:', options: ['phân lân', 'xi măng', 'thuỷ tinh', 'xăng'], answer: 0, explain: 'Apatite chứa phosphorus.' }
  ]
});
})();
