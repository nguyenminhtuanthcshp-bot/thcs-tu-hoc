/* KHTN 8 – Bài 9. Base. Thang pH. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-8/bai-9', {
  objectives: [
    'Nêu được khái niệm base (tạo ra ion OH<sup>−</sup> khi tan trong nước); phân biệt base tan (kiềm) và base không tan.',
    'Trình bày được tính chất hoá học của base: làm đổi màu chất chỉ thị, tác dụng với acid (phản ứng trung hoà).',
    'Nêu được thang pH và sử dụng pH để đánh giá độ acid – base của dung dịch.',
    'Tính được lượng chất trong phản ứng trung hoà đơn giản.'
  ],
  intro: 'Xà phòng, nước vôi trong có vị nhờn, chát và làm quỳ tím hoá xanh – trái ngược với acid. Đó là tính chất của <b>base</b>. Làm sao so sánh một dung dịch “chua” hay “nhờn” đến mức nào? Các nhà khoa học dùng <b>thang pH</b>.',
  steps: [
    { title: 'Khái niệm base', html: `<p><b>Base</b> là hợp chất trong phân tử có nguyên tử kim loại liên kết với nhóm hydroxide (OH). Khi tan trong nước, base tạo ra ion <b>OH<sup>−</sup></b>.</p>
      <ul><li><b>Base tan (kiềm)</b>: NaOH, KOH, Ba(OH)<sub>2</sub>; Ca(OH)<sub>2</sub> ít tan.</li><li><b>Base không tan</b>: Cu(OH)<sub>2</sub>, Fe(OH)<sub>3</sub>, Mg(OH)<sub>2</sub>…</li></ul>
      <p>Ví dụ: M(NaOH) = 23 + 16 + 1 = 40 g/mol; M(Ca(OH)<sub>2</sub>) = 40 + 2 · 17 = 74 g/mol.</p>` },
    { title: 'Base làm đổi màu chất chỉ thị', html: `<p>Dung dịch base (kiềm) làm <b>quỳ tím hoá xanh</b> và <b>phenolphthalein không màu hoá hồng</b>.</p>`,
      svg: S.tubesCompare({ title: 'Chất chỉ thị trong các dung dịch', tubes: [{ label: 'Quỳ + HCl', sub: 'màu đỏ', liquid: '#fca5a5' }, { label: 'Quỳ + NaOH', sub: 'màu xanh', liquid: '#93c5fd' }, { label: 'Phenolphthalein + NaOH', sub: 'màu hồng', liquid: '#f9a8d4' }], cw: 180 }) },
    { title: 'Base tác dụng với acid', html: `<p>Base tác dụng với acid tạo thành <b>muối và nước</b>. Phản ứng giữa acid và base gọi là <b>phản ứng trung hoà</b>.</p>
      <p class="math">NaOH + HCl → NaCl + H<sub>2</sub>O</p><p class="math">2KOH + H<sub>2</sub>SO<sub>4</sub> → K<sub>2</sub>SO<sub>4</sub> + 2H<sub>2</sub>O</p><p class="math">Cu(OH)<sub>2</sub> + 2HCl → CuCl<sub>2</sub> + 2H<sub>2</sub>O</p>
      <p>Base không tan bị nhiệt phân: <span class="math">Cu(OH)<sub>2</sub> → CuO + H<sub>2</sub>O</span> (khi đun nóng).</p>` },
    { title: 'Thang pH', html: `<p><b>pH</b> dùng để biểu thị độ acid hoặc độ base của dung dịch, thường có giá trị từ 0 đến 14.</p>
      <ul><li>pH &lt; 7: môi trường acid (pH càng nhỏ, tính acid càng mạnh).</li><li>pH = 7: môi trường trung tính (nước cất).</li><li>pH &gt; 7: môi trường base (pH càng lớn, tính base càng mạnh).</li></ul>
      <p>Xác định pH bằng giấy chỉ thị vạn năng (so màu) hoặc máy đo pH.</p>`,
      svg: S.phScale({ marks: [{ v: 2, label: 'Nước chanh' }, { v: 3, label: 'Giấm ăn' }, { v: 7, label: 'Nước cất' }, { v: 7.4, label: 'Máu' }, { v: 10, label: 'Nước xà phòng' }, { v: 12, label: 'Nước vôi trong' }] }), caption: 'Thang pH và giá trị pH gần đúng của một số dung dịch quen thuộc (giá trị tham khảo).' },
    { title: 'pH trong đời sống', html: `<ul><li>Máu người có pH khoảng 7,35 – 7,45; dịch vị dạ dày có pH khoảng 1,5 – 3,5.</li><li>Mỗi loại cây trồng thích hợp với một khoảng pH của đất; đất chua (pH thấp) có thể bón vôi để khử chua.</li><li>Nước mưa có pH &lt; 5,6 gọi là mưa acid, gây hại cho cây cối và công trình.</li></ul>` }
  ],
  summary: 'Base tạo ion OH<sup>−</sup> khi tan trong nước; kiềm: NaOH, KOH, Ba(OH)<sub>2</sub>, Ca(OH)<sub>2</sub>. Kiềm làm quỳ tím hoá xanh, phenolphthalein hoá hồng. Acid + base → muối + nước (trung hoà). pH &lt; 7: acid; pH = 7: trung tính; pH &gt; 7: base.',
  examples: [
    { title: 'Phản ứng trung hoà', problem: 'Tính số mol HCl cần để trung hoà vừa đủ 0,2 mol NaOH.', solution: 'NaOH + HCl → NaCl + H<sub>2</sub>O. Tỉ lệ 1 : 1 ⇒ n<sub>HCl</sub> = 0,2 mol.' },
    { title: 'So sánh pH', problem: 'Dung dịch A có pH = 3, dung dịch B có pH = 5. Dung dịch nào có tính acid mạnh hơn?', solution: 'Cả hai có tính acid; A có pH nhỏ hơn nên tính acid mạnh hơn.' },
    { title: 'Tính khối lượng base', problem: 'Cần bao nhiêu gam NaOH để trung hoà 0,1 mol H<sub>2</sub>SO<sub>4</sub>?', solution: '2NaOH + H<sub>2</sub>SO<sub>4</sub> → Na<sub>2</sub>SO<sub>4</sub> + 2H<sub>2</sub>O. n<sub>NaOH</sub> = 0,2 mol; m = 0,2 · 40 = 8 (g).' }
  ],
  exercises: [
    { question: 'Kể tên hai base tan và hai base không tan.', hints: ['Base của kim loại Na, K, Ba thường tan.', 'Base của Cu, Fe, Mg thường không tan.'], solution: 'Base tan: NaOH, KOH. Base không tan: Cu(OH)<sub>2</sub>, Fe(OH)<sub>3</sub>.' },
    { question: 'Trung hoà 200 mL dung dịch NaOH 1 M cần bao nhiêu mol HCl?', hints: ['n<sub>NaOH</sub> = C<sub>M</sub> · V = 1 · 0,2.', 'Tỉ lệ NaOH : HCl = 1 : 1.'], solution: 'n<sub>NaOH</sub> = 0,2 mol ⇒ n<sub>HCl</sub> = 0,2 mol.' },
    { question: 'Khi bị ong đốt (nọc có tính acid), người ta thường bôi vôi hoặc kem đánh răng lên vết đốt. Giải thích.', hints: ['Vôi, kem đánh răng có tính base nhẹ.', 'Acid và base phản ứng với nhau.'], solution: 'Chất có tính base trung hoà bớt acid trong nọc ong, làm giảm đau rát.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Dung dịch NaOH làm phenolphthalein không màu chuyển sang màu hồng.', answer: true, explain: 'Dung dịch kiềm làm phenolphthalein hoá hồng.' },
    { type: 'mcq', q: 'Dung dịch có pH = 12 có môi trường:', options: ['acid', 'trung tính', 'base', 'không xác định'], answer: 2, explain: 'pH &gt; 7 là môi trường base.' },
    { type: 'short', q: 'Khối lượng mol của NaOH là bao nhiêu g/mol? (Na = 23, O = 16, H = 1)', answer: '40', unit: 'g/mol', calc: '23+16+1', explain: '23 + 16 + 1 = 40 g/mol.' },
    { type: 'mcq', q: 'Base nào sau đây KHÔNG tan trong nước?', options: ['NaOH', 'KOH', 'Cu(OH)<sub>2</sub>', 'Ba(OH)<sub>2</sub>'], answer: 2, explain: 'Cu(OH)<sub>2</sub> là base không tan (kết tủa xanh).' },
    { type: 'short', q: 'Để trung hoà 0,3 mol KOH cần bao nhiêu mol H<sub>2</sub>SO<sub>4</sub>? (2KOH + H<sub>2</sub>SO<sub>4</sub> → K<sub>2</sub>SO<sub>4</sub> + 2H<sub>2</sub>O)', answer: '0,15', unit: 'mol', calc: '0.3/2', explain: 'n<sub>H₂SO₄</sub> = 0,3 : 2 = 0,15 mol.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nước cất có pH = 7.', answer: true, explain: 'Nước cất trung tính, pH = 7.' },
    { type: 'short', q: 'Cần bao nhiêu gam NaOH (M = 40) để trung hoà vừa đủ 0,25 mol HCl?', answer: '10', unit: 'g', calc: '0.25*40', explain: 'n<sub>NaOH</sub> = 0,25 mol; m = 0,25 · 40 = 10 g.' },
    { type: 'mcq', q: 'Sản phẩm của phản ứng trung hoà giữa acid và base là:', options: ['muối và khí H<sub>2</sub>', 'muối và nước', 'oxide và nước', 'chỉ có nước'], answer: 1, explain: 'Acid + base → muối + nước.' }
  ]
});
})();
