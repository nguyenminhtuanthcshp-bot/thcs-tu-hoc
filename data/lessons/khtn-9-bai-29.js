/* KHTN 9 – Bài 29. Carbohydrate. Glucose và saccharose. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-9/bai-29', {
  objectives: [
    'Nêu được khái niệm carbohydrate; công thức phân tử, trạng thái tự nhiên, tính chất vật lí của glucose C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> và saccharose C<sub>12</sub>H<sub>22</sub>O<sub>11</sub>.',
    'Trình bày được tính chất hoá học của glucose (phản ứng tráng bạc, lên men rượu) và saccharose (phản ứng thuỷ phân).',
    'Nêu được vai trò, ứng dụng của glucose, saccharose và tính toán theo phương trình.'
  ],
  intro: 'Quả nho chín rất ngọt vì chứa nhiều <b>glucose</b>; đường kính làm từ mía hay củ cải đường là <b>saccharose</b>. Cả hai thuộc nhóm <b>carbohydrate</b> – nguồn năng lượng chính của con người.',
  steps: [
    { title: 'Carbohydrate', html: `<p><b>Carbohydrate</b> là hợp chất hữu cơ tạp chức, thường có công thức chung C<sub>n</sub>(H<sub>2</sub>O)<sub>m</sub>. Ví dụ: glucose, fructose C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>; saccharose C<sub>12</sub>H<sub>22</sub>O<sub>11</sub>; tinh bột, cellulose (C<sub>6</sub>H<sub>10</sub>O<sub>5</sub>)<sub>n</sub>.</p>
      <p>Carbohydrate được thực vật tạo ra nhờ <b>quang hợp</b>:</p>
      <p class="math">6CO<sub>2</sub> + 6H<sub>2</sub>O → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub> (ánh sáng, diệp lục)</p>`,
      svg: S.photosynthesisScheme(), caption: 'Cây xanh tổng hợp glucose từ CO₂ và H₂O nhờ năng lượng ánh sáng.' },
    { title: 'Glucose', html: `<p>Chất rắn, không màu, vị ngọt, dễ tan trong nước. Có nhiều trong quả chín (nho), mật ong; trong máu người có khoảng 0,1 % glucose (tham khảo).</p>
      <p><b>Phản ứng tráng bạc</b> (đun nhẹ với dung dịch AgNO<sub>3</sub> trong NH<sub>3</sub>, viết gọn):</p>
      <p class="math">C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + Ag<sub>2</sub>O → C<sub>6</sub>H<sub>12</sub>O<sub>7</sub> + 2Ag↓ (NH<sub>3</sub>, t°)</p>
      <p><b>Lên men rượu:</b> <span class="math">C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> → 2C<sub>2</sub>H<sub>5</sub>OH + 2CO<sub>2</sub> (men rượu, 30 – 35 °C)</span></p>`,
      svg: S.tubesCompare({ title: 'Phản ứng tráng bạc của glucose', cw: 170, tubes: [{ label: 'Trước khi đun', sub: 'dung dịch không màu', liquid: '#f8fafc' }, { label: 'Sau khi đun nhẹ', sub: 'lớp bạc sáng bám thành ống', liquid: '#cbd5e1' }] }), caption: 'Glucose khử hợp chất bạc tạo lớp bạc sáng như gương.' },
    { title: 'Saccharose', html: `<p>Chất rắn kết tinh, không màu, vị ngọt, rất dễ tan trong nước. Có nhiều trong mía, củ cải đường, thốt nốt.</p>
      <p>Saccharose <b>không</b> tham gia phản ứng tráng bạc. Khi đun với dung dịch acid, saccharose bị <b>thuỷ phân</b>:</p>
      <p class="math">C<sub>12</sub>H<sub>22</sub>O<sub>11</sub> + H<sub>2</sub>O → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> (glucose) + C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> (fructose) (acid, t°)</p>` },
    { title: 'Vai trò và ứng dụng', html: `<ul><li>Glucose: chất dinh dưỡng, dịch truyền trong y tế, tráng gương, tráng ruột phích, sản xuất ethylic alcohol.</li><li>Saccharose: thực phẩm (bánh kẹo, nước giải khát), pha chế thuốc.</li></ul>
      <p>Nên hạn chế đồ uống nhiều đường để phòng béo phì, sâu răng, tiểu đường.</p>` }
  ],
  summary: 'Carbohydrate: glucose, fructose C₆H₁₂O₆; saccharose C₁₂H₂₂O₁₁; tinh bột, cellulose (C₆H₁₀O₅)n; được tạo ra nhờ quang hợp. Glucose có phản ứng tráng bạc và lên men rượu. Saccharose không tráng bạc, bị thuỷ phân trong acid tạo glucose và fructose.',
  examples: [
    { title: 'Tráng bạc', problem: 'Cho 18 g glucose phản ứng tráng bạc hoàn toàn. Tính khối lượng Ag.', solution: 'n = 18 / 180 = 0,1 mol ⇒ n<sub>Ag</sub> = 0,2 mol; m = 0,2 · 108 = 21,6 g.' },
    { title: 'Lên men', problem: 'Lên men 36 g glucose (hiệu suất 100 %). Tính thể tích CO<sub>2</sub> (25 °C, 1 bar).', solution: 'n = 0,2 mol ⇒ n<sub>CO₂</sub> = 0,4 mol; V = 0,4 · 24,79 = 9,916 L.' },
    { title: 'Phân biệt', problem: 'Phân biệt dung dịch glucose và dung dịch saccharose.', solution: 'Dùng phản ứng tráng bạc: dung dịch tạo lớp bạc sáng là glucose; saccharose không phản ứng.' }
  ],
  exercises: [
    { question: 'Tính phân tử khối của glucose và saccharose.', hints: ['C = 12, H = 1, O = 16.', 'C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> và C<sub>12</sub>H<sub>22</sub>O<sub>11</sub>.'], solution: 'Glucose: 72 + 12 + 96 = 180. Saccharose: 144 + 22 + 176 = 342.' },
    { question: 'Thuỷ phân hoàn toàn 34,2 g saccharose. Tính khối lượng glucose thu được.', hints: ['n<sub>saccharose</sub> = 34,2 / 342 = 0,1 mol.', '1 mol saccharose → 1 mol glucose.'], solution: 'm<sub>glucose</sub> = 0,1 · 180 = 18 g (và 18 g fructose).' },
    { question: 'Lên men 0,5 mol glucose (hiệu suất 80 %). Tính khối lượng ethylic alcohol.', hints: ['Lí thuyết: n = 1 mol C<sub>2</sub>H<sub>5</sub>OH.', 'Nhân với 80 %.'], solution: 'n thực tế = 1 · 0,8 = 0,8 mol; m = 0,8 · 46 = 36,8 g.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Saccharose tham gia phản ứng tráng bạc.', answer: false, explain: 'Saccharose không tráng bạc; glucose có.' },
    { type: 'mcq', q: 'Công thức phân tử của glucose là:', options: ['C<sub>12</sub>H<sub>22</sub>O<sub>11</sub>', 'C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>', '(C<sub>6</sub>H<sub>10</sub>O<sub>5</sub>)<sub>n</sub>', 'C<sub>2</sub>H<sub>5</sub>OH'], answer: 1, explain: 'Glucose C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>.' },
    { type: 'short', q: 'Phân tử khối của glucose là bao nhiêu?', answer: '180', calc: '6*12+12+6*16', explain: '72 + 12 + 96 = 180.' },
    { type: 'mcq', q: 'Đường mía (đường kính) có thành phần chính là:', options: ['glucose', 'fructose', 'saccharose', 'tinh bột'], answer: 2, explain: 'Saccharose.' },
    { type: 'short', q: 'Tráng bạc hoàn toàn 0,05 mol glucose thu được bao nhiêu gam Ag?', answer: '10,8', unit: 'g', calc: '2*0.05*108', explain: 'n<sub>Ag</sub> = 0,1 mol; m = 10,8 g.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Thuỷ phân saccharose thu được glucose và fructose.', answer: true, explain: 'Trong môi trường acid, đun nóng.' },
    { type: 'short', q: 'Lên men hoàn toàn 0,1 mol glucose thu được bao nhiêu mol CO<sub>2</sub>?', answer: '0,2', unit: 'mol', calc: '2*0.1', explain: 'Tỉ lệ 1 : 2.' },
    { type: 'mcq', q: 'Trong y tế, dung dịch nào được dùng để truyền cung cấp năng lượng cho người bệnh?', options: ['Dung dịch glucose', 'Dung dịch saccharose', 'Dung dịch acetic acid', 'Cồn 90°'], answer: 0, explain: 'Glucose được hấp thụ trực tiếp vào máu.' }
  ]
});
})();
