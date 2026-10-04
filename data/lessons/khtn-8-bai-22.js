/* KHTN 8 – Bài 22. Mạch điện đơn giản. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-8/bai-22', {
  objectives: [
    'Nêu được mạch điện đơn giản gồm nguồn điện, dây nối, thiết bị tiêu thụ điện và khoá (công tắc).',
    'Nhận biết và vẽ được kí hiệu của các bộ phận trong mạch điện: nguồn, công tắc, bóng đèn, điện trở, cầu chì, điốt, LED, ampe kế, vôn kế.',
    'Vẽ được sơ đồ mạch điện đơn giản và mắc được mạch theo sơ đồ.',
    'Nêu được chức năng của cầu chì, công tắc, điốt phát quang.'
  ],
  intro: 'Kĩ sư điện không vẽ từng sợi dây, từng bóng đèn như thật mà dùng các <b>kí hiệu</b> quy ước để vẽ <b>sơ đồ mạch điện</b> – ai đọc cũng hiểu và lắp đặt được.',
  steps: [
    { title: 'Mạch điện đơn giản', html: `<p>Mạch điện đơn giản gồm:</p><ul><li><b>Nguồn điện</b> (pin, acquy): cung cấp năng lượng điện.</li><li><b>Thiết bị tiêu thụ điện</b> (bóng đèn, quạt, chuông…).</li><li><b>Dây nối</b>: dẫn dòng điện.</li><li><b>Công tắc (khoá K)</b>: đóng, ngắt mạch.</li></ul>
      <p>Dòng điện chỉ chạy trong <b>mạch kín</b> (các bộ phận nối liền nhau từ cực dương về cực âm). Khi công tắc mở, mạch hở, không có dòng điện.</p>` },
    { title: 'Kí hiệu các bộ phận', html: `<p>Mỗi bộ phận có một kí hiệu quy ước:</p>`,
      svg: S.circuitSymbols({ items: ['cell', 'battery', 'switch', 'switch-open', 'lamp', 'resistor', 'fuse', 'led', 'ammeter', 'voltmeter', 'motor', 'wire'] }), caption: 'Kí hiệu một số bộ phận của mạch điện.' },
    { title: 'Sơ đồ mạch điện', html: `<p><b>Sơ đồ mạch điện</b> là hình vẽ biểu diễn mạch điện bằng các kí hiệu. Khi vẽ: dùng thước kẻ các dây nối thẳng, các kí hiệu đặt đúng vị trí; có thể đánh dấu chiều dòng điện bằng mũi tên (từ cực + đến cực −).</p>`,
      svg: [S.circuit({ items: ['cell', 'switch', 'lamp'], closed: true, arrows: true, labels: true, label: 'Mạch điện kín: nguồn, công tắc đóng, bóng đèn' }), S.circuit({ items: ['cell', 'switch', 'lamp'], closed: false, labels: true, label: 'Mạch điện hở: công tắc mở, đèn không sáng' })] },
    { title: 'Chức năng của một số bộ phận', html: `<ul><li><b>Cầu chì</b>: bảo vệ mạch điện – khi dòng điện quá lớn, dây chì nóng chảy và đứt, ngắt mạch.</li><li><b>Công tắc</b>: đóng, ngắt mạch theo ý muốn; lắp ở dây pha (dây nóng).</li><li><b>Điốt</b>: chỉ cho dòng điện đi qua theo một chiều. <b>Điốt phát quang (LED)</b> sáng khi có dòng điện đi qua theo chiều thuận.</li><li><b>Điện trở</b>: hạn chế dòng điện trong mạch.</li></ul>
      <div class="box tip">Thay cầu chì đúng loại; không thay dây chì bằng dây đồng to vì khi quá tải dây đồng không đứt, có thể gây cháy.</div>` }
  ],
  summary: 'Mạch điện đơn giản: nguồn, dây nối, thiết bị tiêu thụ, công tắc; dòng điện chỉ chạy trong mạch kín. Sơ đồ mạch điện dùng kí hiệu quy ước. Cầu chì bảo vệ mạch; điốt cho dòng điện đi một chiều; LED sáng khi dòng điện đi theo chiều thuận.',
  examples: [
    { title: 'Đọc sơ đồ', problem: 'Sơ đồ ở bước 3 (mạch kín) gồm những bộ phận nào? Dòng điện chạy qua đèn theo chiều nào?', solution: 'Gồm nguồn điện (pin), công tắc đóng, bóng đèn và dây nối. Dòng điện đi từ cực dương của pin qua dây nối, bóng đèn, công tắc rồi về cực âm.' },
    { title: 'Tìm lỗi', problem: 'Mắc mạch gồm pin, công tắc đóng, bóng đèn tốt nhưng đèn không sáng. Nêu nguyên nhân có thể.', solution: 'Pin hết điện; dây nối bị đứt hoặc tiếp xúc kém ở chốt nối; mạch chưa kín ở chỗ nào đó.' },
    { title: 'LED', problem: 'Mắc LED vào mạch nhưng LED không sáng, đảo hai đầu LED thì sáng. Giải thích.', solution: 'LED chỉ cho dòng điện qua theo một chiều; lúc đầu mắc ngược chiều nên không có dòng điện qua LED.' }
  ],
  exercises: [
    { question: 'Vẽ sơ đồ mạch điện gồm 2 pin nối tiếp, 1 công tắc, 1 bóng đèn và 1 cầu chì (mô tả bằng lời thứ tự các kí hiệu).', hints: ['Các bộ phận mắc nối tiếp thành một vòng kín.', 'Dùng kí hiệu bộ pin, công tắc, đèn, cầu chì.'], solution: 'Vòng kín: bộ pin (2 pin) → cầu chì → công tắc → bóng đèn → trở về cực âm của bộ pin.' },
    { question: 'Vì sao trong gia đình, cầu chì (hoặc aptomat) được mắc ở đầu đường dây, trước các thiết bị?', hints: ['Cầu chì bảo vệ gì?', 'Khi đứt, cầu chì ngắt dòng điện cho phần mạch nào?'], solution: 'Để khi có sự cố quá tải, ngắn mạch, cầu chì ngắt điện cho toàn bộ các thiết bị phía sau, bảo vệ mạch và phòng cháy.' },
    { question: 'Một mạch có 3 công tắc mắc nối tiếp với một bóng đèn. Đèn sáng khi nào?', hints: ['Mạch nối tiếp chỉ có một đường đi.', 'Một công tắc mở thì mạch thế nào?'], solution: 'Đèn chỉ sáng khi cả 3 công tắc đều đóng.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Dòng điện chỉ chạy trong mạch điện kín.', answer: true, explain: 'Mạch hở không có dòng điện.' },
    { type: 'mcq', q: 'Bộ phận có chức năng bảo vệ mạch khi dòng điện quá lớn là:', options: ['công tắc', 'cầu chì', 'bóng đèn', 'điốt'], answer: 1, explain: 'Dây chì nóng chảy, ngắt mạch.' },
    { type: 'mcq', q: 'Điốt phát quang (LED) có đặc điểm:', options: ['cho dòng điện đi theo cả hai chiều', 'chỉ cho dòng điện đi theo một chiều', 'không cho dòng điện đi qua', 'luôn sáng khi có pin'], answer: 1, explain: 'LED chỉ sáng khi dòng điện đi theo chiều thuận.' },
    { type: 'short', q: 'Một mạch điện gồm 2 pin, 1 công tắc, 2 bóng đèn và 1 cầu chì. Mạch có tổng cộng bao nhiêu bộ phận (không tính dây nối)?', answer: '6', unit: 'bộ phận', calc: '2+1+2+1', explain: '2 + 1 + 2 + 1 = 6 bộ phận.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Có thể thay dây chì trong cầu chì bằng dây đồng to cho bền.', answer: false, explain: 'Dây đồng không đứt khi quá tải, có thể gây cháy.' },
    { type: 'short', q: 'Nguồn gồm 2 pin 1,5 V ghép nối tiếp. Hiệu điện thế của nguồn là bao nhiêu V?', answer: '3', unit: 'V', calc: '2*1.5', explain: '2 · 1,5 = 3 V.' },
    { type: 'mcq', q: 'Kí hiệu có vạch dài và vạch ngắn song song biểu diễn:', options: ['bóng đèn', 'nguồn điện', 'điện trở', 'công tắc'], answer: 1, explain: 'Vạch dài là cực dương, vạch ngắn là cực âm.' },
    { type: 'short', q: 'Một cầu chì chịu được tối đa 5 A. Nếu dòng điện qua mạch tăng gấp 3 lần so với 2 A thì dòng điện là bao nhiêu A (khi đó cầu chì sẽ đứt)?', answer: '6', unit: 'A', calc: '2*3', explain: '2 · 3 = 6 A &gt; 5 A nên dây chì nóng chảy, ngắt mạch.' }
  ]
});
})();
