/* KHTN 8 – Bài 8. Acid. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-8/bai-8', {
  objectives: [
    'Nêu được khái niệm acid (tạo ra ion H<sup>+</sup> khi tan trong nước) và kể tên được một số acid thường gặp.',
    'Trình bày được tính chất hoá học của acid: làm đổi màu quỳ tím, tác dụng với một số kim loại.',
    'Viết được phương trình hoá học minh hoạ và tính được lượng chất trong phản ứng đơn giản.',
    'Nêu được ứng dụng của một số acid (HCl, H<sub>2</sub>SO<sub>4</sub>, CH<sub>3</sub>COOH) và cách sử dụng an toàn.'
  ],
  intro: 'Vị chua của quả chanh, quả me, giấm ăn đều do acid tạo nên. Trong dạ dày của em cũng có hydrochloric acid giúp tiêu hoá thức ăn. Vậy acid là gì và có những tính chất nào?',
  steps: [
    { title: 'Khái niệm acid', html: `<p><b>Acid</b> là hợp chất trong phân tử có nguyên tử hydrogen liên kết với gốc acid. Khi tan trong nước, acid tạo ra ion <b>H<sup>+</sup></b>.</p>
      <table class="tbl"><tr><th>Acid</th><th>Công thức</th><th>M (g/mol)</th></tr><tr><td>Hydrochloric acid</td><td>HCl</td><td>36,5</td></tr><tr><td>Sulfuric acid</td><td>H<sub>2</sub>SO<sub>4</sub></td><td>98</td></tr><tr><td>Nitric acid</td><td>HNO<sub>3</sub></td><td>63</td></tr><tr><td>Acetic acid</td><td>CH<sub>3</sub>COOH</td><td>60</td></tr></table>` },
    { title: 'Acid làm đổi màu chất chỉ thị', html: `<p>Dung dịch acid làm <b>quỳ tím chuyển sang màu đỏ</b>. Dựa vào đó có thể nhận biết dung dịch acid.</p>`,
      svg: S.tubesCompare({ title: 'Nhỏ dung dịch vào giấy quỳ tím', tubes: [{ label: 'Nước cất', sub: 'quỳ giữ màu tím', liquid: '#ddd6fe' }, { label: 'Dung dịch HCl', sub: 'quỳ hoá đỏ', liquid: '#fca5a5' }, { label: 'Giấm ăn', sub: 'quỳ hoá đỏ', liquid: '#fecaca' }] }) },
    { title: 'Acid tác dụng với kim loại', html: `<p>Dung dịch acid (HCl, H<sub>2</sub>SO<sub>4</sub> loãng) tác dụng với nhiều kim loại (Mg, Al, Zn, Fe…) tạo thành <b>muối và khí hydrogen</b>:</p>
      <p class="math">Zn + 2HCl → ZnCl<sub>2</sub> + H<sub>2</sub>↑</p><p class="math">Fe + H<sub>2</sub>SO<sub>4</sub> → FeSO<sub>4</sub> + H<sub>2</sub>↑</p><p class="math">2Al + 6HCl → 2AlCl<sub>3</sub> + 3H<sub>2</sub>↑</p>
      <p>Một số kim loại như Cu, Ag, Au <b>không</b> tác dụng với dung dịch HCl, H<sub>2</sub>SO<sub>4</sub> loãng.</p>`,
      svg: S.tubesCompare({ title: 'Kim loại trong dung dịch HCl cùng nồng độ', tubes: [{ label: 'Mg', sub: 'sủi bọt rất mạnh', liquid: '#e0f2fe', bubbles: 22, solid: 'strip', solidColor: '#d1d5db' }, { label: 'Zn', sub: 'sủi bọt', liquid: '#e0f2fe', bubbles: 12, solid: 'chunk', solidColor: '#9ca3af' }, { label: 'Fe', sub: 'sủi bọt chậm', liquid: '#e0f2fe', bubbles: 5, solid: 'strip', solidColor: '#6b7280' }, { label: 'Cu', sub: 'không phản ứng', liquid: '#e0f2fe', solid: 'strip', solidColor: '#c2410c' }] }) },
    { title: 'Ứng dụng của một số acid', html: `<ul><li><b>Sulfuric acid</b>: sản xuất phân bón, chất tẩy rửa, acid trong ắc quy…</li><li><b>Hydrochloric acid</b>: tẩy gỉ kim loại, sản xuất hoá chất; có trong dịch vị dạ dày.</li><li><b>Acetic acid</b>: thành phần chính của giấm ăn (khoảng 2 – 5 %).</li></ul>
      <div class="box tip">Acid đặc có tính ăn mòn mạnh. Khi dùng phải đeo găng tay, kính bảo hộ; nếu acid dính vào da, rửa ngay dưới vòi nước nhiều lần.</div>` }
  ],
  summary: 'Acid tạo ion H<sup>+</sup> khi tan trong nước; ví dụ HCl, H<sub>2</sub>SO<sub>4</sub>, HNO<sub>3</sub>, CH<sub>3</sub>COOH. Acid làm quỳ tím hoá đỏ; tác dụng với kim loại (Mg, Al, Zn, Fe…) tạo muối và khí H<sub>2</sub>; Cu, Ag không phản ứng.',
  examples: [
    { title: 'Viết phương trình', problem: 'Viết phương trình hoá học của magnesium với dung dịch hydrochloric acid.', solution: 'Mg + 2HCl → MgCl<sub>2</sub> + H<sub>2</sub>↑.' },
    { title: 'Tính thể tích khí', problem: 'Cho 2,4 g Mg tác dụng hết với dung dịch HCl. Tính thể tích khí H<sub>2</sub> thu được ở điều kiện chuẩn.', solution: 'n<sub>Mg</sub> = 2,4 : 24 = 0,1 mol ⇒ n<sub>H₂</sub> = 0,1 mol. V = 0,1 · 24,79 = 2,479 (L).' },
    { title: 'Nhận biết', problem: 'Có hai lọ mất nhãn đựng nước cất và dung dịch HCl. Nêu cách nhận biết.', solution: 'Nhỏ mỗi dung dịch lên mẩu giấy quỳ tím: lọ làm quỳ hoá đỏ là dung dịch HCl, lọ không làm đổi màu quỳ là nước cất.' }
  ],
  exercises: [
    { question: 'Tính khối lượng mol của sulfuric acid H<sub>2</sub>SO<sub>4</sub> (H = 1, S = 32, O = 16).', hints: ['Có 2 nguyên tử H, 1 nguyên tử S, 4 nguyên tử O.', 'M = 2 · 1 + 32 + 4 · 16.'], solution: 'M = 2 + 32 + 64 = 98 (g/mol).' },
    { question: 'Cho 5,6 g sắt tác dụng hết với dung dịch H<sub>2</sub>SO<sub>4</sub> loãng. Tính khối lượng muối FeSO<sub>4</sub> thu được.', hints: ['Fe + H<sub>2</sub>SO<sub>4</sub> → FeSO<sub>4</sub> + H<sub>2</sub>.', 'M(FeSO<sub>4</sub>) = 56 + 32 + 64 = 152 g/mol.'], solution: 'n<sub>Fe</sub> = 0,1 mol = n<sub>FeSO₄</sub>; m = 0,1 · 152 = 15,2 (g).' },
    { question: 'Có nên đựng giấm ăn trong nồi nhôm lâu ngày không? Vì sao?', hints: ['Giấm chứa acetic acid.', 'Acid tác dụng với nhôm.'], solution: 'Không nên, vì acetic acid trong giấm tác dụng dần với nhôm, làm hỏng nồi và thức ăn có thể lẫn hợp chất của nhôm.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Dung dịch acid làm quỳ tím chuyển sang màu xanh.', answer: false, explain: 'Acid làm quỳ tím hoá đỏ.' },
    { type: 'mcq', q: 'Kim loại nào KHÔNG tác dụng với dung dịch HCl?', options: ['Mg', 'Zn', 'Fe', 'Cu'], answer: 3, explain: 'Đồng không tác dụng với dung dịch HCl.' },
    { type: 'short', q: 'Khối lượng mol của HCl là bao nhiêu g/mol? (H = 1, Cl = 35,5)', answer: '36,5', unit: 'g/mol', calc: '1+35.5', explain: '1 + 35,5 = 36,5 g/mol.' },
    { type: 'mcq', q: 'Sản phẩm của kẽm tác dụng với dung dịch HCl là:', options: ['ZnCl<sub>2</sub> và H<sub>2</sub>', 'ZnCl<sub>2</sub> và H<sub>2</sub>O', 'ZnO và H<sub>2</sub>', 'ZnCl và H<sub>2</sub>'], answer: 0, explain: 'Zn + 2HCl → ZnCl<sub>2</sub> + H<sub>2</sub>.' },
    { type: 'short', q: 'Cho 6,5 g Zn (Zn = 65) tác dụng hết với dung dịch HCl. Thể tích khí H<sub>2</sub> thu được ở điều kiện chuẩn là bao nhiêu lít?', answer: '2,479', unit: 'L', calc: '6.5/65*24.79', explain: 'n<sub>H₂</sub> = n<sub>Zn</sub> = 0,1 mol; V = 0,1 · 24,79 = 2,479 L.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khi tan trong nước, acid tạo ra ion H<sup>+</sup>.', answer: true, explain: 'Ion H<sup>+</sup> gây nên tính chất chung của acid.' },
    { type: 'short', q: '2Al + 6HCl → 2AlCl<sub>3</sub> + 3H<sub>2</sub>. Cho 0,2 mol Al phản ứng hết thì thu được bao nhiêu mol H<sub>2</sub>?', answer: '0,3', unit: 'mol', calc: '0.2*3/2', explain: 'n<sub>H₂</sub> = 0,2 · 3 : 2 = 0,3 mol.' },
    { type: 'mcq', q: 'Acid có trong giấm ăn là:', options: ['Hydrochloric acid', 'Sulfuric acid', 'Acetic acid', 'Nitric acid'], answer: 2, explain: 'Giấm ăn là dung dịch acetic acid loãng.' }
  ]
});
})();
