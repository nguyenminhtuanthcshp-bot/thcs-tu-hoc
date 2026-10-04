/* KHTN 9 – Bài 27. Acetic acid. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-9/bai-27', {
  objectives: [
    'Viết được công thức phân tử, công thức cấu tạo của acetic acid (CH<sub>3</sub>COOH); nêu được nhóm –COOH.',
    'Trình bày được tính chất hoá học: tính acid (với quỳ tím, kim loại, base, oxide base, muối carbonate) và phản ứng ester hoá.',
    'Nêu được ứng dụng và phương pháp điều chế acetic acid (lên men giấm).'
  ],
  intro: 'Giấm ăn có vị chua là nhờ <b>acetic acid</b> (nồng độ khoảng 2 – 5 %). Người xưa làm giấm bằng cách để rượu loãng tiếp xúc với không khí – một ứng dụng sớm của vi sinh vật.',
  steps: [
    { title: 'Cấu tạo và tính chất vật lí', html: `<p>Công thức phân tử C<sub>2</sub>H<sub>4</sub>O<sub>2</sub>, M = 60. Công thức cấu tạo thu gọn CH<sub>3</sub>COOH, có nhóm <b>–COOH</b> (nhóm carboxyl) gây ra tính acid.</p>
      <p>Chất lỏng không màu, vị chua, tan vô hạn trong nước.</p>`,
      svg: S.structFormula({ mol: 'CH3COOH', title: 'Acetic acid: CH₃–COOH' }), caption: 'Phân tử acetic acid có nhóm –COOH.' },
    { title: 'Tính acid', html: `<p>Acetic acid là acid yếu, có đầy đủ tính chất của acid:</p>
      <ul><li>Làm quỳ tím hoá đỏ.</li><li>Tác dụng với kim loại đứng trước H: 2CH<sub>3</sub>COOH + Mg → (CH<sub>3</sub>COO)<sub>2</sub>Mg + H<sub>2</sub>↑</li><li>Với base: CH<sub>3</sub>COOH + NaOH → CH<sub>3</sub>COONa + H<sub>2</sub>O</li><li>Với oxide base: 2CH<sub>3</sub>COOH + CaO → (CH<sub>3</sub>COO)<sub>2</sub>Ca + H<sub>2</sub>O</li><li>Với muối carbonate: 2CH<sub>3</sub>COOH + CaCO<sub>3</sub> → (CH<sub>3</sub>COO)<sub>2</sub>Ca + CO<sub>2</sub>↑ + H<sub>2</sub>O</li></ul>`,
      svg: S.tubesCompare({ title: 'Acetic acid tác dụng với đá vôi và kẽm', tubes: [{ label: 'CaCO₃', sub: 'sủi bọt CO₂', liquid: '#f1f5f9', bubbles: 8, solid: 'chunk', solidColor: '#f8fafc' }, { label: 'Zn', sub: 'sủi bọt H₂ (chậm)', liquid: '#f1f5f9', bubbles: 4, solid: 'chunk', solidColor: '#94a3b8' }, { label: 'Cu', sub: 'không phản ứng', liquid: '#f1f5f9', solid: 'chunk', solidColor: '#c2410c' }] }), caption: 'Giấm làm tan đá vôi (sủi bọt CO₂), phản ứng chậm với Zn, không phản ứng với Cu.' },
    { title: 'Phản ứng ester hoá', html: `<p>Đun acetic acid với ethylic alcohol có H<sub>2</sub>SO<sub>4</sub> đặc làm xúc tác, tạo <b>ethyl acetate</b> (ester có mùi thơm):</p>
      <p class="math">CH<sub>3</sub>COOH + C<sub>2</sub>H<sub>5</sub>OH ⇌ CH<sub>3</sub>COOC<sub>2</sub>H<sub>5</sub> + H<sub>2</sub>O (H<sub>2</sub>SO<sub>4</sub> đặc, t°)</p>
      <p>Phản ứng thuận nghịch, gọi là phản ứng <b>ester hoá</b>.</p>`,
      svg: S.structFormula({ mol: 'CH3COOC2H5', u: 46, title: 'Ethyl acetate CH₃COOC₂H₅' }), caption: 'Ester ethyl acetate tạo thành từ acetic acid và ethylic alcohol.' },
    { title: 'Ứng dụng và điều chế', html: `<p><b>Ứng dụng:</b> giấm ăn, bảo quản thực phẩm (dưa chua), sản xuất chất dẻo, tơ sợi, dược phẩm, thuốc diệt nấm.</p>
      <p><b>Điều chế:</b> lên men giấm dung dịch ethylic alcohol loãng nhờ vi khuẩn acetic:</p>
      <p class="math">C<sub>2</sub>H<sub>5</sub>OH + O<sub>2</sub> → CH<sub>3</sub>COOH + H<sub>2</sub>O (men giấm)</p>` }
  ],
  summary: 'Acetic acid CH₃COOH (M = 60) có nhóm –COOH; là acid yếu: làm quỳ hoá đỏ, tác dụng với kim loại trước H, base, oxide base, muối carbonate. Ester hoá với ethylic alcohol tạo ethyl acetate (H₂SO₄ đặc, t°). Giấm ăn là dung dịch 2 – 5 %; điều chế bằng lên men giấm.',
  examples: [
    { title: 'Trung hoà', problem: 'Tính khối lượng NaOH cần để trung hoà 6 g CH<sub>3</sub>COOH.', solution: 'n = 6 / 60 = 0,1 mol ⇒ n<sub>NaOH</sub> = 0,1 mol; m = 4 g.' },
    { title: 'Với đá vôi', problem: 'Cho giấm dư tác dụng với 10 g CaCO<sub>3</sub>. Tính thể tích CO<sub>2</sub> (25 °C, 1 bar).', solution: 'n<sub>CaCO₃</sub> = 0,1 mol ⇒ n<sub>CO₂</sub> = 0,1 mol; V = 2,479 L.' },
    { title: 'Ester hoá', problem: 'Đun 0,1 mol CH<sub>3</sub>COOH với C<sub>2</sub>H<sub>5</sub>OH dư, giả sử hiệu suất 100 %. Tính khối lượng ester (M = 88).', solution: 'n<sub>ester</sub> = 0,1 mol; m = 8,8 g. (Thực tế hiệu suất nhỏ hơn do phản ứng thuận nghịch.)' }
  ],
  exercises: [
    { question: 'Một loại giấm chứa 5 % CH<sub>3</sub>COOH về khối lượng. Tính khối lượng CH<sub>3</sub>COOH trong 200 g giấm.', hints: ['m = 200 · 5 / 100.', 'Kết quả theo gam.'], solution: 'm = 10 g.' },
    { question: 'Vì sao dùng giấm để làm sạch cặn trắng (CaCO<sub>3</sub>) trong ấm đun nước?', hints: ['Acetic acid tác dụng với muối carbonate.', 'Sản phẩm có tan không?'], solution: '2CH<sub>3</sub>COOH + CaCO<sub>3</sub> → (CH<sub>3</sub>COO)<sub>2</sub>Ca + CO<sub>2</sub> + H<sub>2</sub>O; muối calcium acetate tan nên cặn bị loại bỏ.' },
    { question: 'Viết phương trình acetic acid tác dụng với Zn.', hints: ['Zn hoá trị II.', 'Tạo muối và H<sub>2</sub>.'], solution: '2CH<sub>3</sub>COOH + Zn → (CH<sub>3</sub>COO)<sub>2</sub>Zn + H<sub>2</sub>↑' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Acetic acid làm quỳ tím hoá đỏ.', answer: true, explain: 'Acetic acid có tính acid.' },
    { type: 'mcq', q: 'Nhóm nguyên tử gây ra tính acid của acetic acid là:', options: ['–OH', '–COOH', '–CH<sub>3</sub>', '–CHO'], answer: 1, explain: 'Nhóm carboxyl –COOH.' },
    { type: 'short', q: 'Phân tử khối của CH<sub>3</sub>COOH là bao nhiêu?', answer: '60', calc: '2*12+4+32', explain: '24 + 4 + 32 = 60.' },
    { type: 'mcq', q: 'Sản phẩm của phản ứng ester hoá giữa CH<sub>3</sub>COOH và C<sub>2</sub>H<sub>5</sub>OH là:', options: ['CH<sub>3</sub>COONa', 'CH<sub>3</sub>COOC<sub>2</sub>H<sub>5</sub> và H<sub>2</sub>O', 'C<sub>2</sub>H<sub>4</sub>', 'CO<sub>2</sub> và H<sub>2</sub>O'], answer: 1, explain: 'Ethyl acetate và nước.' },
    { type: 'short', q: 'Trung hoà 0,2 mol CH<sub>3</sub>COOH cần bao nhiêu gam NaOH?', answer: '8', unit: 'g', calc: '0.2*40', explain: '0,2 · 40 = 8 g.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Acetic acid tác dụng được với Cu giải phóng H<sub>2</sub>.', answer: false, explain: 'Cu đứng sau H.' },
    { type: 'short', q: 'Trong 500 g giấm 4 % có bao nhiêu gam CH<sub>3</sub>COOH?', answer: '20', unit: 'g', calc: '500*4/100', explain: '500 · 0,04 = 20 g.' },
    { type: 'mcq', q: 'Giấm ăn là dung dịch acetic acid có nồng độ khoảng:', options: ['2 – 5 %', '20 – 30 %', '50 %', '98 %'], answer: 0, explain: 'Giấm ăn khoảng 2 – 5 %.' }
  ]
});
})();
