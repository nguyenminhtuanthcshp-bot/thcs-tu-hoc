/* KHTN 9 – Bài 24. Alkene. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-9/bai-24', {
  objectives: [
    'Nêu được khái niệm alkene (có một liên kết đôi C=C), công thức chung C<sub>n</sub>H<sub>2n</sub>; cấu tạo của ethylene.',
    'Trình bày được tính chất hoá học của ethylene: phản ứng cháy, phản ứng cộng bromine, phản ứng trùng hợp.',
    'Nêu được ứng dụng của ethylene và phân biệt được ethylene với methane.'
  ],
  intro: 'Một nải chuối xanh để cạnh quả chuối chín sẽ chín nhanh hơn. Quả chín tiết ra một chất khí kích thích quá trình chín – đó là <b>ethylene</b>, alkene đơn giản nhất.',
  steps: [
    { title: 'Khái niệm alkene', html: `<p><b>Alkene</b> là hydrocarbon mạch hở, trong phân tử có <b>một liên kết đôi C=C</b>. Công thức chung: <span class="math">C<sub>n</sub>H<sub>2n</sub> (n ≥ 2)</span></p>
      <p>Ví dụ: ethylene C<sub>2</sub>H<sub>4</sub> (CH<sub>2</sub>=CH<sub>2</sub>), propylene C<sub>3</sub>H<sub>6</sub> (CH<sub>2</sub>=CH–CH<sub>3</sub>).</p>
      <p>Ethylene là chất khí không màu, gần như không mùi, ít tan trong nước.</p>`,
      svg: S.structFormula({ mol: 'C2H4', title: 'Công thức cấu tạo ethylene: CH₂=CH₂' }), caption: 'Phân tử ethylene có một liên kết đôi giữa hai nguyên tử carbon.' },
    { title: 'Phản ứng cháy', html: `<p class="math">C<sub>2</sub>H<sub>4</sub> + 3O<sub>2</sub> → 2CO<sub>2</sub> + 2H<sub>2</sub>O (t°)</p>
      <p>Phản ứng toả nhiều nhiệt.</p>` },
    { title: 'Phản ứng cộng bromine', html: `<p>Trong liên kết đôi có một liên kết kém bền, dễ bị đứt để cộng thêm nguyên tử khác. Dẫn ethylene vào nước bromine (màu da cam), nước bromine bị <b>mất màu</b>:</p>
      <p class="math">CH<sub>2</sub>=CH<sub>2</sub> + Br<sub>2</sub> → BrCH<sub>2</sub>–CH<sub>2</sub>Br</p>
      <p>Methane không làm mất màu nước bromine ⇒ dùng nước bromine để phân biệt ethylene và methane.</p>`,
      svg: S.tubesCompare({ title: 'Dẫn khí vào nước bromine', tubes: [{ label: 'Ban đầu', sub: 'da cam', liquid: '#fdba74' }, { label: 'Dẫn CH₄', sub: 'không mất màu', liquid: '#fdba74', bubbles: 4 }, { label: 'Dẫn C₂H₄', sub: 'mất màu', liquid: '#f8fafc', bubbles: 4 }] }), caption: 'Ethylene làm mất màu nước bromine, methane thì không.' },
    { title: 'Phản ứng trùng hợp và ứng dụng', html: `<p>Ở nhiệt độ, áp suất cao và có xúc tác, nhiều phân tử ethylene kết hợp với nhau tạo <b>polyethylene</b> (PE):</p>
      <p class="math">n CH<sub>2</sub>=CH<sub>2</sub> → (–CH<sub>2</sub>–CH<sub>2</sub>–)<sub>n</sub> (t°, p, xt)</p>
      <p>Ứng dụng của ethylene: sản xuất PE (túi, màng bọc), ethylic alcohol, acetic acid…; kích thích quả mau chín.</p>`,
      svg: S.polymerChain({ kind: 'pe' }), caption: 'Trùng hợp ethylene tạo polyethylene.' }
  ],
  summary: 'Alkene: hydrocarbon mạch hở có một liên kết đôi C=C, công thức C<sub>n</sub>H<sub>2n</sub>. Ethylene CH₂=CH₂: cháy tạo CO₂ và H₂O; làm mất màu nước bromine (phản ứng cộng); trùng hợp tạo PE. Dùng nước bromine phân biệt ethylene với methane.',
  examples: [
    { title: 'Phân biệt khí', problem: 'Có hai bình khí CH<sub>4</sub> và C<sub>2</sub>H<sub>4</sub>. Nêu cách phân biệt.', solution: 'Dẫn lần lượt hai khí qua nước bromine: khí làm mất màu là C<sub>2</sub>H<sub>4</sub>, khí không làm mất màu là CH<sub>4</sub>.' },
    { title: 'Tính khối lượng bromine', problem: 'Tính khối lượng Br<sub>2</sub> phản ứng vừa đủ với 0,05 mol C<sub>2</sub>H<sub>4</sub>.', solution: 'n<sub>Br₂</sub> = 0,05 mol; m = 0,05 · 160 = 8 g.' },
    { title: 'Phản ứng cháy', problem: 'Đốt cháy 2,8 g C<sub>2</sub>H<sub>4</sub>. Tính số mol CO<sub>2</sub>.', solution: 'n = 2,8 / 28 = 0,1 mol ⇒ n<sub>CO₂</sub> = 0,2 mol.' }
  ],
  exercises: [
    { question: 'Viết công thức phân tử của alkene có 4 nguyên tử carbon.', hints: ['C<sub>n</sub>H<sub>2n</sub>.', 'n = 4.'], solution: 'C<sub>4</sub>H<sub>8</sub>.' },
    { question: 'Dẫn 2,479 L C<sub>2</sub>H<sub>4</sub> (25 °C, 1 bar) vào nước bromine dư. Tính khối lượng sản phẩm C<sub>2</sub>H<sub>4</sub>Br<sub>2</sub>.', hints: ['n = 2,479 / 24,79 = 0,1 mol.', 'M<sub>C₂H₄Br₂</sub> = 28 + 160 = 188.'], solution: 'm = 0,1 · 188 = 18,8 g.' },
    { question: 'Vì sao người ta để chung chuối chín với chuối xanh để chuối mau chín?', hints: ['Quả chín tiết ra khí gì?', 'Khí đó có tác dụng gì?'], solution: 'Quả chín tiết ra ethylene, chất khí kích thích quá trình chín của quả xung quanh.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Ethylene làm mất màu nước bromine.', answer: true, explain: 'Phản ứng cộng vào liên kết đôi.' },
    { type: 'mcq', q: 'Công thức chung của alkene là:', options: ['C<sub>n</sub>H<sub>2n+2</sub>', 'C<sub>n</sub>H<sub>2n</sub>', 'C<sub>n</sub>H<sub>2n−2</sub>', 'C<sub>n</sub>H<sub>2n+1</sub>OH'], answer: 1, explain: 'Alkene có một liên kết đôi: C<sub>n</sub>H<sub>2n</sub>.' },
    { type: 'mcq', q: 'Trùng hợp ethylene thu được:', options: ['PVC', 'polyethylene (PE)', 'tinh bột', 'cao su'], answer: 1, explain: 'n CH<sub>2</sub>=CH<sub>2</sub> → (–CH<sub>2</sub>–CH<sub>2</sub>–)<sub>n</sub>.' },
    { type: 'short', q: 'Đốt cháy hoàn toàn 0,1 mol C<sub>2</sub>H<sub>4</sub> cần bao nhiêu mol O<sub>2</sub>?', answer: '0,3', unit: 'mol', calc: '3*0.1', explain: 'Tỉ lệ 1 : 3.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Methane làm mất màu nước bromine.', answer: false, explain: 'Methane chỉ có liên kết đơn, không phản ứng cộng.' },
    { type: 'short', q: '0,1 mol C<sub>2</sub>H<sub>4</sub> phản ứng vừa đủ với bao nhiêu gam Br<sub>2</sub>?', answer: '16', unit: 'g', calc: '0.1*160', explain: 'n<sub>Br₂</sub> = 0,1 mol; m = 16 g.' },
    { type: 'mcq', q: 'Chất khí kích thích quả mau chín là:', options: ['methane', 'ethylene', 'carbon dioxide', 'oxygen'], answer: 1, explain: 'Ethylene là hormone làm chín quả.' },
    { type: 'short', q: 'Phân tử khối của C<sub>3</sub>H<sub>6</sub> là bao nhiêu?', answer: '42', calc: '3*12+6', explain: '36 + 6 = 42.' }
  ]
});
})();
