/* KHTN 9 – Bài 20. Tách kim loại và việc sử dụng hợp kim. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-9/bai-20', {
  objectives: [
    'Nêu được kim loại tồn tại trong tự nhiên chủ yếu ở dạng hợp chất (quặng) và các phương pháp tách kim loại.',
    'Trình bày được sơ lược quá trình sản xuất gang, thép và sản xuất nhôm.',
    'Nêu được khái niệm hợp kim, thành phần và ứng dụng của gang, thép, inox, duralumin.'
  ],
  intro: 'Trong lòng đất hiếm khi có sắt hay nhôm nguyên chất; chúng nằm trong các quặng như hematite (Fe<sub>2</sub>O<sub>3</sub>) hay bauxite (Al<sub>2</sub>O<sub>3</sub>). Làm thế nào để lấy kim loại ra, và vì sao ta thường dùng hợp kim thay vì kim loại nguyên chất?',
  steps: [
    { title: 'Kim loại trong tự nhiên', html: `<p>Chỉ một số kim loại kém hoạt động (vàng, bạc, platinum) tồn tại ở dạng <b>đơn chất</b>. Phần lớn kim loại tồn tại ở dạng <b>hợp chất</b> trong <b>quặng</b>: quặng hematite chứa Fe<sub>2</sub>O<sub>3</sub>, quặng bauxite chứa Al<sub>2</sub>O<sub>3</sub>, quặng pyrite chứa FeS<sub>2</sub>.</p>` },
    { title: 'Các phương pháp tách kim loại', html: `<table><tr><th>Phương pháp</th><th>Dùng cho</th><th>Ví dụ</th></tr><tr><td>Điện phân nóng chảy</td><td>kim loại mạnh: K, Na, Ca, Mg, Al</td><td>2Al<sub>2</sub>O<sub>3</sub> → 4Al + 3O<sub>2</sub> (điện phân nóng chảy, có cryolite)</td></tr><tr><td>Nhiệt luyện (khử bằng C, CO, H<sub>2</sub>)</td><td>kim loại trung bình, yếu: Zn, Fe, Pb, Cu</td><td>Fe<sub>2</sub>O<sub>3</sub> + 3CO → 2Fe + 3CO<sub>2</sub> (t°)</td></tr><tr><td>Thuỷ luyện</td><td>kim loại yếu</td><td>Fe + CuSO<sub>4</sub> → FeSO<sub>4</sub> + Cu</td></tr></table>
      <p>Kim loại càng hoạt động thì càng khó tách ra khỏi hợp chất.</p>` },
    { title: 'Sản xuất gang, thép', html: `<p><b>Gang</b> được luyện trong <b>lò cao</b> từ quặng sắt, than cốc và chất tạo xỉ (đá vôi). Than cốc cháy tạo CO; CO khử oxide sắt:</p>
      <p class="math">C + O<sub>2</sub> → CO<sub>2</sub>;  CO<sub>2</sub> + C → 2CO;  Fe<sub>2</sub>O<sub>3</sub> + 3CO → 2Fe + 3CO<sub>2</sub></p>
      <p><b>Thép</b> được luyện từ gang bằng cách thổi oxygen để đốt bớt carbon và tạp chất (Si, Mn, S, P).</p>`,
      svg: S.blastFurnace(), caption: 'Sơ đồ đơn giản lò cao luyện gang.' },
    { title: 'Hợp kim', html: `<p><b>Hợp kim</b> là vật liệu kim loại có chứa một kim loại cơ bản và một số kim loại hoặc phi kim khác. Hợp kim thường cứng, bền hơn, chống ăn mòn tốt hơn kim loại nguyên chất.</p>
      <table><tr><th>Hợp kim</th><th>Thành phần chính</th><th>Ứng dụng</th></tr><tr><td>Gang</td><td>Fe, 2 – 5 % C</td><td>nồi, bệ máy, ống dẫn</td></tr><tr><td>Thép</td><td>Fe, dưới 2 % C</td><td>xây dựng, ô tô, dụng cụ</td></tr><tr><td>Inox</td><td>Fe, Cr, Ni</td><td>dao kéo, xoong nồi</td></tr><tr><td>Duralumin</td><td>Al, Cu, Mg, Mn</td><td>thân máy bay, khung xe</td></tr></table>`,
      svg: S.pieChart({ title: 'Thành phần một loại inox 304 (tham khảo)', parts: [{ label: 'Fe ≈ 71%', v: 71, color: '#64748b' }, { label: 'Cr ≈ 18%', v: 18, color: '#2563eb' }, { label: 'Ni ≈ 8%', v: 8, color: '#16a34a' }, { label: 'Khác ≈ 3%', v: 3, color: '#f59e0b' }] }), caption: 'Inox 304 chứa khoảng 18 % Cr và 8 % Ni nên ít bị gỉ (giá trị tham khảo).' }
  ],
  summary: 'Phần lớn kim loại tồn tại trong quặng. Tách kim loại: điện phân nóng chảy (K → Al), nhiệt luyện bằng C, CO, H₂ (Zn → Cu), thuỷ luyện. Gang (2 – 5 % C) luyện trong lò cao; thép (< 2 % C) luyện từ gang. Hợp kim (gang, thép, inox, duralumin) có nhiều tính chất ưu việt hơn kim loại nguyên chất.',
  examples: [
    { title: 'Khối lượng sắt', problem: 'Tính khối lượng Fe tối đa thu được từ 1 tấn Fe<sub>2</sub>O<sub>3</sub>.', solution: 'Cứ 160 tấn Fe<sub>2</sub>O<sub>3</sub> cho 2 · 56 = 112 tấn Fe ⇒ 1 tấn cho 112 / 160 = 0,7 tấn Fe.' },
    { title: 'Chọn phương pháp', problem: 'Nên dùng phương pháp nào để sản xuất nhôm từ Al<sub>2</sub>O<sub>3</sub>?', solution: 'Điện phân nóng chảy Al<sub>2</sub>O<sub>3</sub> (có cryolite), vì Al hoạt động mạnh, không khử được bằng CO.' },
    { title: 'Phương trình nhiệt luyện', problem: 'Viết phương trình khử CuO bằng H<sub>2</sub>.', solution: 'CuO + H<sub>2</sub> → Cu + H<sub>2</sub>O (t°).' }
  ],
  exercises: [
    { question: 'Phân biệt gang và thép về thành phần và tính chất.', hints: ['So sánh hàm lượng carbon.', 'Gang giòn hay dẻo?'], solution: 'Gang chứa 2 – 5 % C, cứng, giòn; thép chứa dưới 2 % C, cứng, bền, đàn hồi, dễ gia công hơn.' },
    { question: 'Tính khối lượng Al thu được khi điện phân nóng chảy 10,2 tấn Al<sub>2</sub>O<sub>3</sub> (hiệu suất 100 %).', hints: ['M<sub>Al₂O₃</sub> = 102.', '102 tấn Al<sub>2</sub>O<sub>3</sub> chứa 54 tấn Al.'], solution: 'm<sub>Al</sub> = 10,2 · 54 / 102 = 5,4 tấn.' },
    { question: 'Vì sao thân máy bay làm bằng duralumin mà không làm bằng nhôm nguyên chất?', hints: ['Nhôm nguyên chất mềm.', 'Duralumin vẫn nhẹ nhưng thế nào?'], solution: 'Duralumin nhẹ gần như nhôm nhưng cứng và bền hơn nhiều, chịu được lực lớn.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nhôm được sản xuất bằng cách điện phân nóng chảy Al<sub>2</sub>O<sub>3</sub>.', answer: true, explain: 'Al hoạt động mạnh nên dùng điện phân nóng chảy.' },
    { type: 'mcq', q: 'Gang là hợp kim của sắt với carbon, trong đó carbon chiếm:', options: ['dưới 2 %', '2 – 5 %', '10 – 20 %', 'trên 50 %'], answer: 1, explain: 'Gang chứa 2 – 5 % C.' },
    { type: 'mcq', q: 'Chất khử chính trong lò cao luyện gang là:', options: ['CO', 'O<sub>2</sub>', 'CO<sub>2</sub>', 'N<sub>2</sub>'], answer: 0, explain: 'CO khử oxide sắt thành sắt.' },
    { type: 'short', q: 'Từ 160 kg Fe<sub>2</sub>O<sub>3</sub> có thể thu được tối đa bao nhiêu kg Fe?', answer: '112', unit: 'kg', calc: '160/160*2*56', explain: '1 kmol Fe<sub>2</sub>O<sub>3</sub> → 2 kmol Fe = 112 kg.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Có thể dùng CO để khử Al<sub>2</sub>O<sub>3</sub> thành Al trong công nghiệp.', answer: false, explain: 'Al hoạt động mạnh, phải điện phân nóng chảy.' },
    { type: 'mcq', q: 'Inox (thép không gỉ) chứa thêm các nguyên tố chủ yếu:', options: ['Cr, Ni', 'Cu, Zn', 'Pb, Sn', 'Na, K'], answer: 0, explain: 'Cr và Ni làm thép chống gỉ.' },
    { type: 'short', q: 'Điện phân nóng chảy 204 kg Al<sub>2</sub>O<sub>3</sub> (hiệu suất 100 %) thu được bao nhiêu kg Al?', answer: '108', unit: 'kg', calc: '204/102*2*27', explain: '2 kmol Al<sub>2</sub>O<sub>3</sub> → 4 kmol Al = 108 kg.' },
    { type: 'mcq', q: 'Phương pháp thuỷ luyện dùng phản ứng:', options: ['điện phân nóng chảy', 'kim loại mạnh đẩy kim loại yếu ra khỏi dung dịch muối', 'khử oxide bằng CO ở nhiệt độ cao', 'đốt quặng trong oxygen'], answer: 1, explain: 'Ví dụ Fe + CuSO<sub>4</sub> → FeSO<sub>4</sub> + Cu.' }
  ]
});
})();
