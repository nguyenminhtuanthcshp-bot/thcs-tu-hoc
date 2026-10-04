/* KHTN 9 – Bài 26. Ethylic alcohol. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-9/bai-26', {
  objectives: [
    'Viết được công thức phân tử, công thức cấu tạo của ethylic alcohol (C<sub>2</sub>H<sub>5</sub>OH); nêu được nhóm –OH.',
    'Nêu được tính chất vật lí; khái niệm độ cồn; trình bày được tính chất hoá học: phản ứng cháy, phản ứng với sodium.',
    'Nêu được phương pháp điều chế, ứng dụng và tác hại của việc lạm dụng rượu bia.'
  ],
  intro: 'Cồn sát khuẩn, cồn khô đun lẩu, xăng sinh học E5… đều chứa <b>ethylic alcohol</b> (ethanol). Đây cũng là thành phần của rượu, bia – thứ đồ uống cần tránh với học sinh.',
  steps: [
    { title: 'Cấu tạo và tính chất vật lí', html: `<p>Công thức phân tử C<sub>2</sub>H<sub>6</sub>O, M = 46. Công thức cấu tạo: CH<sub>3</sub>–CH<sub>2</sub>–OH, viết gọn C<sub>2</sub>H<sub>5</sub>OH. Nhóm <b>–OH</b> làm cho ethylic alcohol có tính chất đặc trưng.</p>
      <p>Chất lỏng không màu, sôi ở 78,3 °C, nhẹ hơn nước (D ≈ 0,8 g/mL), <b>tan vô hạn</b> trong nước, hoà tan được nhiều chất (iodine, benzene…).</p>`,
      svg: S.structFormula({ mol: 'C2H5OH', title: 'Ethylic alcohol: CH₃–CH₂–OH' }), caption: 'Phân tử ethylic alcohol có nhóm –OH liên kết với nguyên tử carbon.' },
    { title: 'Độ cồn', html: `<p><b>Độ cồn</b> là số mililít ethylic alcohol có trong 100 mL hỗn hợp ethylic alcohol với nước.</p>
      <p class="math">Độ cồn = V<sub>alcohol</sub> / V<sub>hỗn hợp</sub> · 100</p>
      <p>Ví dụ: cồn 70° chứa 70 mL C<sub>2</sub>H<sub>5</sub>OH trong 100 mL dung dịch (dùng sát khuẩn).</p>` },
    { title: 'Tính chất hoá học', html: `<p><b>Phản ứng cháy</b> (lửa màu xanh nhạt, toả nhiều nhiệt):</p>
      <p class="math">C<sub>2</sub>H<sub>5</sub>OH + 3O<sub>2</sub> → 2CO<sub>2</sub> + 3H<sub>2</sub>O (t°)</p>
      <p><b>Phản ứng với sodium</b> (giải phóng H<sub>2</sub>, do nguyên tử H trong nhóm –OH):</p>
      <p class="math">2C<sub>2</sub>H<sub>5</sub>OH + 2Na → 2C<sub>2</sub>H<sub>5</sub>ONa + H<sub>2</sub>↑</p>` },
    { title: 'Điều chế, ứng dụng và tác hại', html: `<ul><li><b>Lên men</b> tinh bột hoặc đường: C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> → 2C<sub>2</sub>H<sub>5</sub>OH + 2CO<sub>2</sub> (men rượu, 30 – 35 °C).</li><li>Trong công nghiệp: cộng nước vào ethylene (có xúc tác acid).</li></ul>
      <p><b>Ứng dụng:</b> nhiên liệu (cồn, xăng E5), dung môi, sát khuẩn, sản xuất acetic acid, dược phẩm.</p>
      <div class="box note">Lạm dụng rượu bia gây hại gan, tim, thần kinh, gây tai nạn giao thông. Pháp luật Việt Nam cấm bán rượu bia cho người dưới 18 tuổi và cấm điều khiển phương tiện khi trong máu hoặc hơi thở có nồng độ cồn.</div>`,
      svg: S.bar({ title: 'Độ cồn của một số sản phẩm (tham khảo)', cats: ['Bia', 'Rượu vang', 'Rượu mạnh', 'Cồn y tế'], series: [{ name: 'Độ cồn (°)', values: [5, 12, 40, 70], color: '#7c3aed' }], yMax: 80, yStep: 20, width: 500, height: 270 }), caption: 'Độ cồn tham khảo: bia khoảng 5°, rượu vang khoảng 12°, cồn y tế 70°.' }
  ],
  summary: 'Ethylic alcohol C₂H₅OH (CH₃–CH₂–OH, M = 46): chất lỏng, sôi 78,3 °C, tan vô hạn trong nước. Độ cồn = số mL alcohol trong 100 mL hỗn hợp. Cháy tạo CO₂ và H₂O; tác dụng với Na giải phóng H₂. Điều chế bằng lên men tinh bột, đường hoặc từ ethylene. Lạm dụng rượu bia gây hại nghiêm trọng.',
  examples: [
    { title: 'Tính thể tích alcohol', problem: 'Có bao nhiêu mL C<sub>2</sub>H<sub>5</sub>OH trong 500 mL rượu 40°?', solution: 'V = 500 · 40 / 100 = 200 mL.' },
    { title: 'Phản ứng với Na', problem: 'Cho 4,6 g C<sub>2</sub>H<sub>5</sub>OH tác dụng hết với Na. Tính thể tích H<sub>2</sub> (25 °C, 1 bar).', solution: 'n = 4,6 / 46 = 0,1 mol ⇒ n<sub>H₂</sub> = 0,05 mol; V = 0,05 · 24,79 ≈ 1,24 L.' },
    { title: 'Lên men glucose', problem: 'Lên men hoàn toàn 0,5 mol glucose thu được bao nhiêu gam ethylic alcohol?', solution: 'n<sub>C₂H₅OH</sub> = 2 · 0,5 = 1 mol; m = 46 g.' }
  ],
  exercises: [
    { question: 'Pha 30 mL C<sub>2</sub>H<sub>5</sub>OH với nước thành 100 mL dung dịch. Tính độ cồn.', hints: ['Độ cồn = V<sub>alcohol</sub> / V<sub>hh</sub> · 100.', '30 / 100 · 100.'], solution: 'Độ cồn = 30°.' },
    { question: 'Đốt cháy hoàn toàn 9,2 g C<sub>2</sub>H<sub>5</sub>OH. Tính số mol CO<sub>2</sub> và H<sub>2</sub>O.', hints: ['n = 9,2 / 46 = 0,2 mol.', 'Tỉ lệ 1 : 2 : 3.'], solution: 'n<sub>CO₂</sub> = 0,4 mol; n<sub>H₂O</sub> = 0,6 mol.' },
    { question: 'Vì sao có thể dùng cồn 70° để sát khuẩn tay?', hints: ['Ethylic alcohol tác động lên vi khuẩn thế nào?', 'Cồn bay hơi nhanh.'], solution: 'Ethylic alcohol làm đông tụ protein, phá huỷ màng tế bào của nhiều vi khuẩn, virus; cồn bay hơi nhanh, không đọng lại trên da.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Ethylic alcohol tan vô hạn trong nước.', answer: true, explain: 'Do có nhóm –OH.' },
    { type: 'mcq', q: 'Nhóm nguyên tử gây nên tính chất đặc trưng của ethylic alcohol là:', options: ['–CH<sub>3</sub>', '–OH', '–COOH', '–CH<sub>2</sub>–'], answer: 1, explain: 'Nhóm hydroxyl –OH.' },
    { type: 'short', q: 'Có bao nhiêu mL C<sub>2</sub>H<sub>5</sub>OH trong 250 mL rượu 12°?', answer: '30', unit: 'mL', calc: '250*12/100', explain: '250 · 12 / 100 = 30 mL.' },
    { type: 'mcq', q: 'Sản phẩm của phản ứng C<sub>2</sub>H<sub>5</sub>OH với Na là:', options: ['C<sub>2</sub>H<sub>5</sub>ONa và H<sub>2</sub>', 'NaOH và C<sub>2</sub>H<sub>4</sub>', 'CO<sub>2</sub> và H<sub>2</sub>O', 'CH<sub>3</sub>COONa'], answer: 0, explain: '2C<sub>2</sub>H<sub>5</sub>OH + 2Na → 2C<sub>2</sub>H<sub>5</sub>ONa + H<sub>2</sub>.' },
    { type: 'short', q: 'Phân tử khối của C<sub>2</sub>H<sub>5</sub>OH là bao nhiêu?', answer: '46', calc: '2*12+6+16', explain: '24 + 6 + 16 = 46.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Rượu 45° nghĩa là trong 100 g rượu có 45 g ethylic alcohol.', answer: false, explain: 'Độ cồn tính theo thể tích: 45 mL trong 100 mL hỗn hợp.' },
    { type: 'short', q: 'Đốt cháy hoàn toàn 0,1 mol C<sub>2</sub>H<sub>5</sub>OH cần bao nhiêu mol O<sub>2</sub>?', answer: '0,3', unit: 'mol', calc: '3*0.1', explain: 'Tỉ lệ 1 : 3.' },
    { type: 'mcq', q: 'Ethylic alcohol được điều chế bằng cách lên men:', options: ['muối ăn', 'tinh bột hoặc đường', 'dầu mỏ', 'đá vôi'], answer: 1, explain: 'Lên men glucose tạo C<sub>2</sub>H<sub>5</sub>OH và CO<sub>2</sub>.' }
  ]
});
})();
