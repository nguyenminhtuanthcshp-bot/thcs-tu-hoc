/* KHTN 9 – Bài 31. Protein. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-9/bai-31', {
  objectives: [
    'Nêu được khái niệm, đặc điểm cấu tạo phân tử protein (do nhiều amino acid tạo nên).',
    'Trình bày được tính chất hoá học của protein: phản ứng thuỷ phân, sự đông tụ, phản ứng khi đun nóng mạnh (cháy có mùi khét).',
    'Nêu được vai trò của protein với cơ thể sống và nguồn thực phẩm giàu protein.'
  ],
  intro: 'Thịt, cá, trứng, sữa, đậu… là thực phẩm giàu <b>protein</b>. Tóc, móng, da, cơ bắp, enzyme tiêu hoá, kháng thể… của cơ thể người đều được cấu tạo chủ yếu từ protein.',
  steps: [
    { title: 'Khái niệm và thành phần', html: `<p><b>Protein</b> là những hợp chất hữu cơ có phân tử khối rất lớn, có trong mọi tế bào sống. Thành phần nguyên tố chủ yếu: <b>C, H, O, N</b>, có thể có S, P…</p>
      <p>Phân tử protein được tạo thành từ nhiều <b>amino acid</b> liên kết với nhau. Mỗi amino acid là một mắt xích; protein khác nhau ở số lượng, thành phần và trật tự sắp xếp các amino acid.</p>
      <p>Ví dụ amino acid đơn giản nhất: glycine H<sub>2</sub>N–CH<sub>2</sub>–COOH.</p>`,
      svg: S.polymerChain({ kind: 'protein' }), caption: 'Chuỗi protein gồm nhiều amino acid liên kết với nhau.' },
    { title: 'Phản ứng thuỷ phân', html: `<p>Khi đun nóng protein với acid, base hoặc nhờ enzyme, protein bị thuỷ phân thành các <b>amino acid</b>:</p>
      <p class="math">Protein + nước → hỗn hợp amino acid (acid/base/enzyme, t°)</p>
      <p>Trong cơ thể, protein trong thức ăn được thuỷ phân thành amino acid; cơ thể dùng amino acid để tổng hợp protein của mình.</p>` },
    { title: 'Sự đông tụ và phản ứng khi đun nóng mạnh', html: `<ul><li><b>Đông tụ</b>: khi đun nóng hoặc cho thêm acid, base, muối kim loại nặng, protein bị kết tủa (lòng trắng trứng đông lại khi luộc; nấu canh cua gạch cua nổi lên; vắt chanh vào sữa đậu nành).</li><li><b>Đun nóng mạnh, đốt cháy</b>: protein bị phân huỷ, có mùi khét (đốt tóc, sợi len, lông gà).</li></ul>`,
      svg: S.tubesCompare({ title: 'Đun nóng dung dịch lòng trắng trứng', cw: 170, tubes: [{ label: 'Trước khi đun', sub: 'trong, hơi đục', liquid: '#f8fafc' }, { label: 'Sau khi đun', sub: 'kết tủa trắng (đông tụ)', liquid: '#f1f5f9', solid: 'powder', solidColor: '#ffffff' }] }), caption: 'Protein trong lòng trắng trứng đông tụ khi bị đun nóng.' },
    { title: 'Vai trò của protein', html: `<ul><li>Cấu tạo tế bào, cơ thể (cơ, da, tóc).</li><li>Enzyme xúc tác các phản ứng; hormone điều hoà; kháng thể bảo vệ cơ thể; vận chuyển (hemoglobin chở O<sub>2</sub>).</li><li>Cung cấp năng lượng khi cần (≈ 4 kcal/g).</li></ul>
      <p>Nhu cầu protein tham khảo của học sinh khoảng 1 g cho mỗi kg khối lượng cơ thể mỗi ngày.</p>` }
  ],
  summary: 'Protein là hợp chất hữu cơ phân tử khối rất lớn, chứa C, H, O, N…, gồm nhiều amino acid liên kết. Protein bị thuỷ phân thành amino acid; bị đông tụ khi đun nóng hoặc gặp acid, base, muối kim loại nặng; cháy có mùi khét. Protein có vai trò cấu tạo, xúc tác, vận chuyển, bảo vệ cơ thể.',
  examples: [
    { title: 'Phân biệt sợi', problem: 'Làm thế nào phân biệt sợi len lông cừu và sợi bông?', solution: 'Đốt thử: sợi len (protein) cháy có mùi khét như tóc cháy; sợi bông (cellulose) cháy không có mùi khét đó.' },
    { title: 'Giải thích hiện tượng', problem: 'Vì sao khi nấu canh cua, phần “gạch cua” nổi lên thành từng mảng?', solution: 'Protein trong cua bị đông tụ khi đun nóng, tạo mảng nhẹ nổi lên.' },
    { title: 'Nhu cầu protein', problem: 'Một bạn nặng 45 kg. Theo mức tham khảo 1 g/kg/ngày, bạn cần khoảng bao nhiêu gam protein mỗi ngày?', solution: '45 · 1 = 45 g protein mỗi ngày.' }
  ],
  exercises: [
    { question: 'Nêu ba thực phẩm giàu protein có nguồn gốc động vật và hai thực phẩm có nguồn gốc thực vật.', hints: ['Thịt, cá, trứng, sữa…', 'Các loại đậu.'], solution: 'Động vật: thịt, cá, trứng, sữa. Thực vật: đậu nành, đậu xanh, lạc.' },
    { question: 'Vì sao khi bị ngộ độc muối kim loại nặng (như muối chì), người ta cho uống sữa hoặc lòng trắng trứng?', hints: ['Muối kim loại nặng làm protein thế nào?', 'Protein trong sữa sẽ “giữ” kim loại nặng lại.'], solution: 'Protein trong sữa, lòng trắng trứng bị đông tụ bởi muối kim loại nặng, giữ chúng lại, giảm tác hại đối với protein của cơ thể (sơ cứu tạm thời trước khi đến cơ sở y tế).' },
    { question: 'Một người 60 kg, nhu cầu protein tham khảo 1,2 g/kg/ngày. Tính lượng protein cần mỗi ngày.', hints: ['Nhân khối lượng với 1,2.', 'Kết quả theo gam.'], solution: '60 · 1,2 = 72 g.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Thuỷ phân hoàn toàn protein thu được hỗn hợp các amino acid.', answer: true, explain: 'Amino acid là mắt xích của protein.' },
    { type: 'mcq', q: 'Nguyên tố nhất thiết có trong protein nhưng không có trong tinh bột là:', options: ['C', 'H', 'O', 'N'], answer: 3, explain: 'Protein luôn chứa nitrogen.' },
    { type: 'mcq', q: 'Hiện tượng khi luộc trứng, lòng trắng trứng đặc lại gọi là:', options: ['sự thuỷ phân', 'sự đông tụ', 'sự lên men', 'sự xà phòng hoá'], answer: 1, explain: 'Protein đông tụ khi đun nóng.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Đốt sợi bông có mùi khét giống như đốt tóc.', answer: false, explain: 'Sợi bông là cellulose; tóc là protein mới có mùi khét đặc trưng.' },
    { type: 'short', q: 'Một bạn 50 kg, nhu cầu protein tham khảo 1 g/kg/ngày. Bạn cần bao nhiêu gam protein mỗi ngày?', answer: '50', unit: 'g', calc: '50*1', explain: '50 · 1 = 50 g.' },
    { type: 'mcq', q: 'Enzyme, kháng thể trong cơ thể có bản chất là:', options: ['chất béo', 'protein', 'tinh bột', 'glucose'], answer: 1, explain: 'Phần lớn enzyme, kháng thể là protein.' },
    { type: 'short', q: 'Phân tử khối của glycine H<sub>2</sub>N–CH<sub>2</sub>–COOH (C<sub>2</sub>H<sub>5</sub>NO<sub>2</sub>) là bao nhiêu?', answer: '75', calc: '2*12+5+14+2*16', explain: '24 + 5 + 14 + 32 = 75.' },
    { type: 'short', q: '20 g protein cung cấp khoảng bao nhiêu kcal (lấy 4 kcal/g)?', answer: '80', unit: 'kcal', calc: '20*4', explain: '20 · 4 = 80 kcal.' }
  ]
});
})();
