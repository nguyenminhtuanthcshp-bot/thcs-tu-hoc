/* KHTN 9 – Bài 34. Khai thác đá vôi. Công nghiệp silicate. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-9/bai-34', {
  objectives: [
    'Nêu được thành phần chính của đá vôi (CaCO<sub>3</sub>), cách khai thác và ứng dụng của đá vôi.',
    'Trình bày được các phản ứng nung vôi và tôi vôi.',
    'Nêu được nguyên liệu, công đoạn chính sản xuất đồ gốm, thuỷ tinh, xi măng (công nghiệp silicate).'
  ],
  intro: 'Vịnh Hạ Long, Phong Nha – Kẻ Bàng là những vùng núi đá vôi tuyệt đẹp. Đá vôi cũng là nguyên liệu không thể thiếu để sản xuất vôi, xi măng, thuỷ tinh – những vật liệu xây dựng nên nhà cửa, cầu đường.',
  steps: [
    { title: 'Đá vôi và ứng dụng', html: `<p>Thành phần chính của đá vôi là <b>calcium carbonate CaCO<sub>3</sub></b>. Đá vôi được khai thác ở các mỏ lộ thiên bằng khoan, nổ mìn, sau đó nghiền.</p>
      <p>Ứng dụng: đá xây dựng, sản xuất vôi, xi măng, thuỷ tinh, chất độn (sơn, giấy, nhựa), khử chua đất.</p>` },
    { title: 'Nung vôi và tôi vôi', html: `<p><b>Nung vôi</b> (khoảng 900 – 1 000 °C, tham khảo):</p>
      <p class="math">CaCO<sub>3</sub> → CaO + CO<sub>2</sub> (t°)</p>
      <p><b>Tôi vôi</b> (toả nhiều nhiệt):</p>
      <p class="math">CaO + H<sub>2</sub>O → Ca(OH)<sub>2</sub></p>
      <p>Vôi tôi dùng xây dựng (vữa), khử chua đất, sát trùng chuồng trại. Khi để ngoài không khí, vữa vôi đông cứng do: Ca(OH)<sub>2</sub> + CO<sub>2</sub> → CaCO<sub>3</sub> + H<sub>2</sub>O.</p>`,
      svg: S.flow({ items: ['Đá vôi CaCO₃', 'Nung ở nhiệt độ cao', 'Vôi sống CaO (+ CO₂)', 'Tôi vôi với nước', 'Vôi tôi Ca(OH)₂'], size: 13, label: 'Từ đá vôi đến vôi tôi' }), caption: 'Nung đá vôi tạo vôi sống; tôi vôi sống với nước tạo vôi tôi.' },
    { title: 'Công nghiệp silicate', html: `<table><tr><th>Sản phẩm</th><th>Nguyên liệu chính</th><th>Công đoạn chính</th></tr><tr><td>Đồ gốm (gạch, ngói, sành, sứ)</td><td>đất sét, cát, fenspat</td><td>nhào, tạo hình, sấy, nung</td></tr><tr><td>Thuỷ tinh</td><td>cát thạch anh (SiO<sub>2</sub>), đá vôi, soda (Na<sub>2</sub>CO<sub>3</sub>)</td><td>nấu chảy (≈ 1 500 °C), làm nguội, tạo hình</td></tr><tr><td>Xi măng</td><td>đá vôi, đất sét, quặng sắt, thạch cao</td><td>nung thành clinker (≈ 1 400 – 1 500 °C), nghiền với thạch cao</td></tr></table>`,
      svg: S.flow({ items: ['Đá vôi + đất sét + quặng sắt', 'Nghiền, trộn', 'Nung trong lò quay → clinker', 'Nghiền clinker + thạch cao', 'Xi măng'], size: 13, label: 'Sơ đồ sản xuất xi măng' }), caption: 'Các công đoạn chính sản xuất xi măng.' },
    { title: 'Bảo vệ môi trường', html: `<p>Khai thác đá vôi và sản xuất xi măng thải nhiều bụi và CO<sub>2</sub>, làm mất cảnh quan núi đá. Cần quy hoạch vùng khai thác, lắp thiết bị lọc bụi, tiết kiệm năng lượng, tái sử dụng phế thải (tro xỉ) làm phụ gia.</p>` }
  ],
  summary: 'Đá vôi chứa chủ yếu CaCO₃; nung vôi: CaCO₃ → CaO + CO₂; tôi vôi: CaO + H₂O → Ca(OH)₂. Công nghiệp silicate sản xuất gốm (từ đất sét, cát), thuỷ tinh (từ cát, đá vôi, soda), xi măng (từ đá vôi, đất sét, nung thành clinker). Cần khai thác hợp lí, giảm bụi và khí thải.',
  examples: [
    { title: 'Nung vôi', problem: 'Nung hoàn toàn 100 kg CaCO<sub>3</sub>. Tính khối lượng CaO thu được.', solution: 'Cứ 100 kg CaCO<sub>3</sub> tạo 56 kg CaO (và 44 kg CO<sub>2</sub>).' },
    { title: 'Hiệu suất', problem: 'Nung 1 tấn đá vôi chứa 90 % CaCO<sub>3</sub>, hiệu suất 100 %. Tính khối lượng CaO.', solution: 'm<sub>CaCO₃</sub> = 0,9 tấn ⇒ m<sub>CaO</sub> = 0,9 · 56 / 100 = 0,504 tấn.' },
    { title: 'Giải thích', problem: 'Vì sao tường quét vôi một thời gian thì trở nên cứng?', solution: 'Ca(OH)<sub>2</sub> hấp thụ CO<sub>2</sub> trong không khí tạo CaCO<sub>3</sub> rắn: Ca(OH)<sub>2</sub> + CO<sub>2</sub> → CaCO<sub>3</sub> + H<sub>2</sub>O.' }
  ],
  exercises: [
    { question: 'Nung 50 g CaCO<sub>3</sub>. Tính thể tích CO<sub>2</sub> thu được (25 °C, 1 bar).', hints: ['n = 50 / 100 = 0,5 mol.', 'V = n · 24,79.'], solution: 'V = 0,5 · 24,79 = 12,395 L.' },
    { question: 'Nêu nguyên liệu chính để sản xuất thuỷ tinh.', hints: ['Thành phần chính của cát.', 'Thêm đá vôi và soda.'], solution: 'Cát thạch anh (SiO<sub>2</sub>), đá vôi (CaCO<sub>3</sub>), soda (Na<sub>2</sub>CO<sub>3</sub>).' },
    { question: 'Vì sao khi tôi vôi cần cẩn thận, không để vôi bắn vào mắt, da?', hints: ['Phản ứng tôi vôi toả nhiệt hay thu nhiệt?', 'Ca(OH)<sub>2</sub> có tính gì?'], solution: 'Phản ứng toả nhiều nhiệt làm nước sôi, bắn; Ca(OH)<sub>2</sub> là base mạnh gây bỏng da, tổn thương mắt.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Thành phần chính của đá vôi là CaCO<sub>3</sub>.', answer: true, explain: 'Calcium carbonate.' },
    { type: 'mcq', q: 'Sản phẩm của phản ứng nung vôi là:', options: ['Ca(OH)<sub>2</sub> và CO<sub>2</sub>', 'CaO và CO<sub>2</sub>', 'CaO và H<sub>2</sub>O', 'Ca và CO<sub>2</sub>'], answer: 1, explain: 'CaCO<sub>3</sub> → CaO + CO<sub>2</sub>.' },
    { type: 'short', q: 'Nung hoàn toàn 200 kg CaCO<sub>3</sub> thu được bao nhiêu kg CaO?', answer: '112', unit: 'kg', calc: '200*56/100', explain: '200 · 56 / 100 = 112 kg.' },
    { type: 'mcq', q: 'Nguyên liệu chính để sản xuất đồ gốm là:', options: ['đất sét', 'dầu mỏ', 'quặng sắt', 'muối ăn'], answer: 0, explain: 'Đất sét được nhào, tạo hình, nung.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Phản ứng tôi vôi thu nhiệt mạnh.', answer: false, explain: 'Tôi vôi toả nhiều nhiệt.' },
    { type: 'short', q: 'Nung 0,2 mol CaCO<sub>3</sub> thu được bao nhiêu lít CO<sub>2</sub> (25 °C, 1 bar)? (24,79 L/mol)', answer: '4,958', unit: 'L', calc: '0.2*24.79', explain: '0,2 · 24,79 = 4,958 L.' },
    { type: 'mcq', q: 'Xi măng được sản xuất bằng cách nghiền clinker với:', options: ['thạch cao', 'muối ăn', 'than đá', 'cát'], answer: 0, explain: 'Thạch cao điều chỉnh thời gian đông kết.' },
    { type: 'mcq', q: 'Thành phần chính của cát thạch anh là:', options: ['CaCO<sub>3</sub>', 'SiO<sub>2</sub>', 'Al<sub>2</sub>O<sub>3</sub>', 'Fe<sub>2</sub>O<sub>3</sub>'], answer: 1, explain: 'Silicon dioxide.' }
  ]
});
})();
