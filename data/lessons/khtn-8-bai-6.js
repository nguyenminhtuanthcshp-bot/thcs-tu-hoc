/* KHTN 8 – Bài 6. Tính theo phương trình hoá học. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-8/bai-6', {
  objectives: [
    'Tính được lượng chất (số mol, khối lượng, thể tích khí ở điều kiện chuẩn) của chất phản ứng và sản phẩm dựa vào phương trình hoá học.',
    'Xác định được chất phản ứng hết, chất còn dư khi biết lượng các chất phản ứng.',
    'Nêu được khái niệm hiệu suất phản ứng và tính được hiệu suất trong trường hợp đơn giản.'
  ],
  intro: 'Nhà máy muốn sản xuất 1 tấn vôi sống thì cần nung bao nhiêu đá vôi? Phòng thí nghiệm cần 2,479 L khí hydrogen thì phải lấy bao nhiêu gam kẽm? Phương trình hoá học giúp trả lời các câu hỏi đó.',
  steps: [
    { title: 'Các bước tính theo phương trình hoá học', html: `<ol><li>Viết phương trình hoá học.</li><li>Tính số mol chất đã biết: n = m : M hoặc n = V : 24,79.</li><li>Dựa vào tỉ lệ hệ số trong phương trình, tìm số mol chất cần tính.</li><li>Đổi số mol ra khối lượng (m = n · M) hoặc thể tích khí (V = n · 24,79).</li></ol>`,
      svg: S.flow({ items: ['Viết PTHH', 'Tính số mol chất đã biết', 'Suy ra số mol chất cần tìm theo tỉ lệ hệ số', 'Đổi ra m hoặc V'], size: 14, label: 'Các bước tính theo phương trình hoá học' }) },
    { title: 'Tính khối lượng, thể tích khí', html: `<p>Ví dụ: cho 6,5 g kẽm tác dụng hết với dung dịch HCl. Tính thể tích khí hydrogen thu được (điều kiện chuẩn).</p>
      <p class="math">Zn + 2HCl → ZnCl<sub>2</sub> + H<sub>2</sub></p>
      <p>n<sub>Zn</sub> = 6,5 : 65 = 0,1 mol. Theo phương trình, 1 mol Zn tạo 1 mol H<sub>2</sub> ⇒ n<sub>H₂</sub> = 0,1 mol.</p>
      <p>V<sub>H₂</sub> = 0,1 · 24,79 = 2,479 (L).</p>`,
      svg: S.gasCollect({ gas: 'Khí hydrogen', left: 'Kẽm + dung dịch HCl' }), caption: 'Điều chế khí hydrogen từ kẽm và hydrochloric acid, thu khí bằng cách đẩy nước.' },
    { title: 'Chất phản ứng hết, chất còn dư', html: `<p>Khi biết lượng của <b>cả hai</b> chất phản ứng, so sánh tỉ số <span class="math">{{n (đề cho)|hệ số}}</span> của mỗi chất: chất có tỉ số nhỏ hơn phản ứng <b>hết</b>, chất kia <b>dư</b>. Tính lượng sản phẩm theo chất phản ứng hết.</p>
      <p>Ví dụ: đốt 0,2 mol H<sub>2</sub> với 0,2 mol O<sub>2</sub>: 2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O. Tỉ số: H<sub>2</sub>: 0,2 : 2 = 0,1; O<sub>2</sub>: 0,2 : 1 = 0,2 ⇒ H<sub>2</sub> hết, O<sub>2</sub> dư 0,2 − 0,1 = 0,1 mol; n<sub>H₂O</sub> = 0,2 mol.</p>` },
    { title: 'Hiệu suất phản ứng', html: `<p>Trong thực tế, nhiều phản ứng không xảy ra hoàn toàn, lượng sản phẩm thu được ít hơn lượng tính theo phương trình (lượng lí thuyết).</p>
      <div class="box key">H = {{lượng sản phẩm thực tế|lượng sản phẩm lí thuyết}} · 100 %</div>
      <p>Ví dụ: nung 1 mol CaCO<sub>3</sub>, theo lí thuyết thu 1 mol CaO (56 g) nhưng thực tế chỉ thu 44,8 g ⇒ H = 44,8 : 56 · 100 % = 80 %.</p>` },
    { title: 'Bảng tóm tắt công thức', html: `<table class="tbl"><tr><th>Cần tính</th><th>Công thức</th></tr><tr><td>Số mol từ khối lượng</td><td>n = m : M</td></tr><tr><td>Số mol khí (đkc)</td><td>n = V : 24,79</td></tr><tr><td>Khối lượng</td><td>m = n · M</td></tr><tr><td>Thể tích khí (đkc)</td><td>V = n · 24,79</td></tr></table>`,
      svg: S.molMap(), caption: 'Đổi qua lại giữa m, n, V và N (điều kiện chuẩn: 25 °C, 1 bar).' }
  ],
  summary: 'Tính theo PTHH: viết PTHH → tính n chất đã biết → suy ra n chất cần tìm theo tỉ lệ hệ số → đổi ra m = n · M hoặc V = n · 24,79. Chất có tỉ số n : hệ số nhỏ hơn thì phản ứng hết. H = thực tế : lí thuyết · 100 %.',
  examples: [
    { title: 'Tính khối lượng sản phẩm', problem: 'Đốt cháy hoàn toàn 2,4 g magnesium trong oxygen. Tính khối lượng magnesium oxide tạo thành.', solution: '2Mg + O<sub>2</sub> → 2MgO. n<sub>Mg</sub> = 2,4 : 24 = 0,1 mol ⇒ n<sub>MgO</sub> = 0,1 mol. m<sub>MgO</sub> = 0,1 · 40 = 4 (g).' },
    { title: 'Tính thể tích khí cần dùng', problem: 'Tính thể tích khí oxygen (đkc) cần để đốt cháy hết 0,4 mol H<sub>2</sub>.', solution: '2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O. n<sub>O₂</sub> = 0,4 : 2 = 0,2 mol. V = 0,2 · 24,79 = 4,958 (L).' },
    { title: 'Tính hiệu suất', problem: 'Nung 10 g CaCO<sub>3</sub> thu được 4,48 g CaO. Tính hiệu suất phản ứng.', solution: 'CaCO<sub>3</sub> → CaO + CO<sub>2</sub>. n<sub>CaCO₃</sub> = 10 : 100 = 0,1 mol ⇒ m<sub>CaO</sub> lí thuyết = 0,1 · 56 = 5,6 g. H = 4,48 : 5,6 · 100 % = 80 %.' }
  ],
  exercises: [
    { question: 'Cho 5,6 g sắt tác dụng hết với dung dịch HCl: Fe + 2HCl → FeCl<sub>2</sub> + H<sub>2</sub>. Tính khối lượng FeCl<sub>2</sub> tạo thành.', hints: ['n<sub>Fe</sub> = 5,6 : 56.', 'M(FeCl<sub>2</sub>) = 56 + 2 · 35,5 = 127 g/mol.'], solution: 'n<sub>Fe</sub> = 0,1 mol ⇒ n<sub>FeCl₂</sub> = 0,1 mol; m = 0,1 · 127 = 12,7 (g).' },
    { question: 'Cần bao nhiêu gam kẽm để điều chế được 4,958 L khí hydrogen (đkc) theo phản ứng Zn + 2HCl → ZnCl<sub>2</sub> + H<sub>2</sub>?', hints: ['n<sub>H₂</sub> = 4,958 : 24,79.', 'n<sub>Zn</sub> = n<sub>H₂</sub>.'], solution: 'n<sub>H₂</sub> = 0,2 mol ⇒ n<sub>Zn</sub> = 0,2 mol; m = 0,2 · 65 = 13 (g).' },
    { question: 'Cho 0,3 mol Al tác dụng với 0,3 mol Cl<sub>2</sub>: 2Al + 3Cl<sub>2</sub> → 2AlCl<sub>3</sub>. Chất nào dư? Tính số mol AlCl<sub>3</sub>.', hints: ['So sánh 0,3 : 2 và 0,3 : 3.', 'Tính sản phẩm theo chất hết.'], solution: 'Al: 0,15; Cl<sub>2</sub>: 0,1 ⇒ Cl<sub>2</sub> hết, Al dư. n<sub>AlCl₃</sub> = 0,3 · 2 : 3 = 0,2 mol.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tỉ lệ hệ số trong phương trình hoá học cũng là tỉ lệ số mol các chất.', answer: true, explain: 'Hệ số cho biết tỉ lệ số phân tử, cũng là tỉ lệ số mol.' },
    { type: 'short', q: 'Zn + 2HCl → ZnCl<sub>2</sub> + H<sub>2</sub>. Cho 13 g Zn (Zn = 65) phản ứng hết. Số mol H<sub>2</sub> thu được là bao nhiêu?', answer: '0,2', unit: 'mol', calc: '13/65', explain: 'n<sub>Zn</sub> = 0,2 mol = n<sub>H₂</sub>.' },
    { type: 'short', q: 'Thể tích ở điều kiện chuẩn của 0,1 mol khí H<sub>2</sub> là bao nhiêu lít?', answer: '2,479', unit: 'L', calc: '0.1*24.79', explain: 'V = 0,1 · 24,79 = 2,479 L.' },
    { type: 'mcq', q: 'Theo phương trình 2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O, đốt cháy 0,6 mol H<sub>2</sub> cần số mol O<sub>2</sub> là:', options: ['0,3 mol', '0,6 mol', '1,2 mol', '0,2 mol'], answer: 0, calc: '0.6/2', explain: 'n<sub>O₂</sub> = 0,6 : 2 = 0,3 mol.' },
    { type: 'short', q: 'Đốt cháy 0,2 mol Mg: 2Mg + O<sub>2</sub> → 2MgO. Khối lượng MgO thu được là bao nhiêu gam? (Mg = 24, O = 16)', answer: '8', unit: 'g', calc: '0.2*(24+16)', explain: 'n<sub>MgO</sub> = 0,2 mol; m = 0,2 · 40 = 8 g.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Lượng sản phẩm được tính theo chất phản ứng còn dư.', answer: false, explain: 'Phải tính theo chất phản ứng hết.' },
    { type: 'short', q: 'Theo lí thuyết thu được 20 g sản phẩm, thực tế chỉ thu được 18 g. Hiệu suất phản ứng là bao nhiêu %?', answer: '90', unit: '%', calc: '18/20*100', explain: 'H = 18 : 20 · 100 % = 90 %.' },
    { type: 'mcq', q: 'Cho 0,2 mol H<sub>2</sub> và 0,2 mol O<sub>2</sub> phản ứng: 2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O. Chất còn dư là:', options: ['H<sub>2</sub>', 'O<sub>2</sub>', 'H<sub>2</sub>O', 'Không có chất dư'], answer: 1, explain: 'H<sub>2</sub>: 0,2 : 2 = 0,1 &lt; O<sub>2</sub>: 0,2 : 1 = 0,2 ⇒ O<sub>2</sub> dư.' }
  ]
});
})();
