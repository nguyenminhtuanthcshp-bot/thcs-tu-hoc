/* KHTN 9 – Bài 35. Khai thác nhiên liệu hoá thạch. Nguồn carbon. Chu trình carbon và sự ấm lên toàn cầu. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-9/bai-35', {
  objectives: [
    'Nêu được sơ lược cách khai thác than, dầu mỏ, khí tự nhiên và tác động của việc khai thác tới môi trường.',
    'Nêu được các nguồn carbon trong tự nhiên và mô tả được chu trình carbon.',
    'Giải thích được nguyên nhân, hậu quả của sự ấm lên toàn cầu và nêu được biện pháp giảm phát thải khí nhà kính.'
  ],
  intro: 'Nồng độ CO<sub>2</sub> trong khí quyển hiện nay đã vượt 400 ppm, cao hơn nhiều so với trước Cách mạng công nghiệp (khoảng 280 ppm, tham khảo). Carbon đi từ đâu tới đâu, và vì sao điều này làm Trái Đất nóng lên?',
  steps: [
    { title: 'Khai thác nhiên liệu hoá thạch', html: `<ul><li><b>Than</b>: khai thác lộ thiên (mỏ nông) hoặc hầm lò (mỏ sâu), như ở Quảng Ninh.</li><li><b>Dầu mỏ, khí tự nhiên</b>: khoan giếng sâu tới mỏ, dầu khí tự phun hoặc được bơm lên (giàn khoan trên biển).</li></ul>
      <p>Tác động: phát thải khí CH<sub>4</sub>, bụi than; ô nhiễm nước; nguy cơ tràn dầu, cháy nổ, sụt lún.</p>` },
    { title: 'Nguồn carbon', html: `<p>Carbon tồn tại trong tự nhiên ở nhiều dạng:</p>
      <ul><li>Khí quyển: CO<sub>2</sub>, CH<sub>4</sub>.</li><li>Sinh vật: chất hữu cơ (carbohydrate, protein, lipid).</li><li>Thạch quyển: đá vôi (CaCO<sub>3</sub>), than, dầu mỏ, khí tự nhiên.</li><li>Đại dương: CO<sub>2</sub> hoà tan, ion carbonate.</li></ul>` },
    { title: 'Chu trình carbon', html: `<p>Carbon luân chuyển liên tục giữa khí quyển, sinh vật, đại dương và đất đá:</p>
      <ul><li>Cây xanh <b>quang hợp</b> hấp thụ CO<sub>2</sub>, tạo chất hữu cơ.</li><li>Sinh vật <b>hô hấp</b>, vi sinh vật <b>phân giải</b> xác sinh vật thải CO<sub>2</sub>.</li><li>Con người <b>đốt nhiên liệu</b> hoá thạch thải CO<sub>2</sub>.</li><li>Đại dương hoà tan và giải phóng CO<sub>2</sub>.</li></ul>`,
      svg: S.carbonCycle(), caption: 'Chu trình carbon trong tự nhiên (sơ đồ đơn giản).' },
    { title: 'Sự ấm lên toàn cầu', html: `<p>CO<sub>2</sub>, CH<sub>4</sub>… là <b>khí nhà kính</b>: giữ lại một phần nhiệt Trái Đất bức xạ ra. Đốt nhiên liệu hoá thạch và phá rừng làm lượng khí nhà kính tăng nhanh ⇒ nhiệt độ trung bình Trái Đất tăng (<b>ấm lên toàn cầu</b>).</p>
      <p>Hậu quả: băng tan, nước biển dâng (đe doạ đồng bằng sông Cửu Long), thời tiết cực đoan, hạn hán, xâm nhập mặn.</p>
      <p>Biện pháp: tiết kiệm năng lượng, dùng năng lượng tái tạo, trồng và bảo vệ rừng, dùng phương tiện công cộng.</p>`,
      svg: S.bar({ title: 'Nồng độ CO₂ trung bình trong khí quyển (ppm, tham khảo)', cats: ['1960', '1980', '2000', '2020'], series: [{ name: 'CO₂ (ppm)', values: [317, 339, 370, 414], color: '#475569' }], yMax: 450, yStep: 50, width: 540, height: 280 }), caption: 'Nồng độ CO₂ khí quyển tăng liên tục (giá trị trung bình năm, làm tròn – tham khảo).' }
  ],
  summary: 'Nhiên liệu hoá thạch được khai thác bằng mỏ lộ thiên, hầm lò, giếng khoan. Carbon có trong khí quyển, sinh vật, đất đá, đại dương và luân chuyển theo chu trình carbon (quang hợp, hô hấp, phân giải, đốt cháy). Đốt nhiên liệu hoá thạch và phá rừng làm tăng CO₂ – nguyên nhân chính của ấm lên toàn cầu.',
  examples: [
    { title: 'Lượng CO₂ phát thải', problem: 'Đốt cháy hoàn toàn 12 kg carbon (than). Tính khối lượng CO<sub>2</sub> thải ra.', solution: 'C + O<sub>2</sub> → CO<sub>2</sub>: 12 kg C tạo 44 kg CO<sub>2</sub>.' },
    { title: 'Đốt methane', problem: 'Đốt cháy 16 g CH<sub>4</sub> tạo bao nhiêu gam CO<sub>2</sub>?', solution: 'n = 1 mol ⇒ n<sub>CO₂</sub> = 1 mol; m = 44 g.' },
    { title: 'Mức tăng', problem: 'Theo số liệu tham khảo, CO<sub>2</sub> tăng từ 317 ppm (1960) lên 414 ppm (2020). Tăng bao nhiêu ppm?', solution: '414 − 317 = 97 ppm.' }
  ],
  exercises: [
    { question: 'Đốt 1 tấn than chứa 90 % carbon. Tính khối lượng CO<sub>2</sub> tạo thành (giả sử cháy hoàn toàn).', hints: ['m<sub>C</sub> = 0,9 tấn.', '12 tấn C → 44 tấn CO<sub>2</sub>.'], solution: 'm<sub>CO₂</sub> = 0,9 · 44 / 12 = 3,3 tấn.' },
    { question: 'Nêu hai quá trình lấy CO<sub>2</sub> ra khỏi khí quyển và hai quá trình thải CO<sub>2</sub> vào khí quyển.', hints: ['Cây xanh làm gì với CO<sub>2</sub>?', 'Hô hấp, đốt cháy.'], solution: 'Lấy ra: quang hợp của cây xanh, hoà tan vào đại dương. Thải vào: hô hấp, đốt nhiên liệu (và phân giải xác sinh vật).' },
    { question: 'Vì sao trồng rừng giúp giảm ấm lên toàn cầu?', hints: ['Cây hấp thụ khí gì khi quang hợp?', 'Carbon được tích trữ ở đâu?'], solution: 'Cây xanh hấp thụ CO<sub>2</sub> khi quang hợp và tích trữ carbon trong thân, lá, rễ, làm giảm khí nhà kính.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Quang hợp của cây xanh làm giảm lượng CO<sub>2</sub> trong khí quyển.', answer: true, explain: 'Cây hấp thụ CO<sub>2</sub> tạo chất hữu cơ.' },
    { type: 'mcq', q: 'Khí nhà kính chủ yếu do đốt nhiên liệu hoá thạch thải ra là:', options: ['O<sub>2</sub>', 'CO<sub>2</sub>', 'N<sub>2</sub>', 'Ar'], answer: 1, explain: 'CO<sub>2</sub>.' },
    { type: 'short', q: 'Đốt cháy hoàn toàn 6 g carbon thu được bao nhiêu gam CO<sub>2</sub>?', answer: '22', unit: 'g', calc: '6/12*44', explain: '0,5 mol C → 0,5 mol CO<sub>2</sub> = 22 g.' },
    { type: 'mcq', q: 'Quá trình nào thải CO<sub>2</sub> vào khí quyển?', options: ['Quang hợp', 'Hô hấp của sinh vật', 'Trồng rừng', 'Hình thành đá vôi'], answer: 1, explain: 'Hô hấp tạo CO<sub>2</sub>.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Ấm lên toàn cầu có thể làm nước biển dâng, đe doạ các vùng đồng bằng ven biển.', answer: true, explain: 'Băng tan và nước biển giãn nở vì nhiệt.' },
    { type: 'short', q: 'Đốt cháy hoàn toàn 0,5 mol CH<sub>4</sub> tạo bao nhiêu gam CO<sub>2</sub>?', answer: '22', unit: 'g', calc: '0.5*44', explain: '0,5 · 44 = 22 g.' },
    { type: 'mcq', q: 'Biện pháp nào giúp giảm phát thải khí nhà kính?', options: ['Đốt rơm rạ ngoài đồng', 'Dùng năng lượng mặt trời, gió', 'Phá rừng làm nương', 'Dùng nhiều xe cá nhân'], answer: 1, explain: 'Năng lượng tái tạo ít phát thải CO<sub>2</sub>.' },
    { type: 'short', q: 'Theo số liệu tham khảo, CO<sub>2</sub> khí quyển năm 2000 là 370 ppm, năm 2020 là 414 ppm. Mức tăng là bao nhiêu ppm?', answer: '44', unit: 'ppm', calc: '414-370', explain: '414 − 370 = 44 ppm.' }
  ]
});
})();
