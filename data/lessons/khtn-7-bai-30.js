/* KHTN 7 – Bài 30. Trao đổi nước và chất dinh dưỡng ở thực vật. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-7/bai-30', {
  objectives: [
    'Mô tả được quá trình trao đổi nước và các chất dinh dưỡng, lấy ví dụ ở thực vật: hút nước ở rễ, vận chuyển trong thân, thoát hơi nước ở lá.',
    'Nêu được vai trò thoát hơi nước ở lá và hoạt động đóng, mở khí khổng.',
    'Vận dụng hiểu biết về trao đổi chất ở thực vật để giải thích ý nghĩa của các biện pháp tưới nước, bón phân hợp lí.'
  ],
  intro: 'Một cây ngô trong suốt đời sống hút khoảng 200 lít nước, nhưng phần lớn lượng nước ấy lại thoát ra không khí. Cây “lãng phí” nước như vậy để làm gì?',
  steps: [
    { title: 'Rễ hút nước và muối khoáng', html: `<p>Rễ cây hút nước và muối khoáng hoà tan từ đất chủ yếu nhờ <b>lông hút</b> – những tế bào biểu bì kéo dài ở miền lông hút của rễ, làm tăng diện tích tiếp xúc với đất. Nước và muối khoáng đi từ lông hút qua các lớp tế bào vỏ rễ vào <b>mạch gỗ</b> của rễ.</p>` },
    { title: 'Vận chuyển các chất trong thân', html: `<ul><li><b>Mạch gỗ</b>: vận chuyển nước và muối khoáng từ rễ lên thân, lá (dòng đi lên).</li><li><b>Mạch rây</b>: vận chuyển chất hữu cơ do lá tổng hợp đến các cơ quan (rễ, hoa, quả, hạt…) để sử dụng hoặc dự trữ.</li></ul>`,
      svg: S.plantTransport(), caption: 'Nước, muối khoáng đi lên theo mạch gỗ; chất hữu cơ được vận chuyển theo mạch rây.' },
    { title: 'Thoát hơi nước ở lá', html: `<p>Phần lớn nước cây hút vào (khoảng <b>98%</b>) thoát ra ngoài dưới dạng hơi nước, chủ yếu qua <b>khí khổng</b> ở lá. Vai trò:</p>
      <ul><li>Tạo <b>lực hút</b> giúp nước và muối khoáng vận chuyển từ rễ lên lá.</li><li><b>Làm giảm nhiệt độ</b> bề mặt lá, tránh lá bị đốt nóng khi trời nắng.</li><li>Khí khổng mở cho hơi nước ra đồng thời cho <b>carbon dioxide vào</b> lá phục vụ quang hợp.</li></ul>
      <p>Khi đủ nước, tế bào hạt đậu trương nước, khí khổng mở; khi thiếu nước, khí khổng đóng lại để hạn chế mất nước.</p>`,
      svg: S.stomataPair(), caption: 'Hoạt động đóng, mở khí khổng điều chỉnh sự thoát hơi nước.' },
    { title: 'Vận dụng: tưới nước, bón phân hợp lí', html: `<ul><li>Tưới đủ nước, đúng lúc (tránh tưới giữa trưa nắng gắt); mỗi loại cây, mỗi giai đoạn cần lượng nước khác nhau.</li><li>Bón phân đúng loại, đủ lượng, đúng thời điểm; bón xong cần tưới nước để phân hoà tan, rễ dễ hấp thụ.</li><li>Làm đất tơi xốp giúp rễ phát triển, lông hút hoạt động tốt.</li></ul>` }
  ],
  summary: 'Rễ hút nước và muối khoáng nhờ lông hút; mạch gỗ vận chuyển nước, muối khoáng từ rễ lên lá; mạch rây vận chuyển chất hữu cơ từ lá đến các cơ quan. Khoảng 98% lượng nước hút vào thoát ra qua khí khổng: tạo lực hút nước, làm mát lá, giúp carbon dioxide vào lá. Tưới nước, bón phân hợp lí giúp cây sinh trưởng tốt.',
  examples: [
    { title: 'Tính lượng nước thoát ra', problem: 'Một cây ngô hút 200 L nước trong cả đời sống, khoảng 98% lượng đó thoát ra qua lá. Lượng nước thoát ra là bao nhiêu lít? Cây giữ lại bao nhiêu lít?', solution: 'Thoát ra: 200 · 98 : 100 = 196 L; giữ lại: 200 − 196 = 4 L.' },
    { title: 'Vì sao cây héo khi nắng gắt', problem: 'Vì sao vào buổi trưa hè, lá một số cây bị héo rũ?', solution: 'Trời nóng, cây thoát hơi nước rất mạnh, lượng nước rễ hút vào không bù kịp lượng nước mất đi nên tế bào mất nước, lá héo.' },
    { title: 'Khi cấy lúa, trồng cây', problem: 'Vì sao khi trồng cây non người ta thường tỉa bớt lá?', solution: 'Rễ cây mới trồng bị tổn thương, hút nước kém; tỉa bớt lá làm giảm thoát hơi nước, giúp cây không bị héo, dễ sống.' }
  ],
  exercises: [
    { question: 'Phân biệt chức năng của mạch gỗ và mạch rây.', hints: ['Mạch nào dẫn nước?', 'Chất hữu cơ được tạo ra ở đâu và đi đến đâu?'], solution: 'Mạch gỗ vận chuyển nước và muối khoáng từ rễ lên thân, lá. Mạch rây vận chuyển chất hữu cơ từ lá đến các bộ phận của cây.' },
    { question: 'Vì sao không nên bón quá nhiều phân cho cây một lần?', hints: ['Đất có nồng độ muối quá cao thì rễ hút nước thế nào?', 'Phân thừa đi đâu?'], solution: 'Nồng độ muối khoáng trong đất quá cao làm rễ khó hút nước, cây có thể héo, cháy lá; phân thừa bị rửa trôi gây lãng phí và ô nhiễm môi trường.' },
    { question: 'Một cây hút 5 L nước mỗi ngày, khoảng 98% thoát ra qua lá. Mỗi ngày cây giữ lại bao nhiêu mL nước?', hints: ['Phần giữ lại chiếm 2%.', '5 L = 5 000 mL.'], solution: '5 000 · 2 : 100 = 100 mL.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mạch gỗ vận chuyển nước và muối khoáng từ rễ lên lá.', answer: true, explain: 'Dòng đi lên trong thân.' },
    { type: 'mcq', q: 'Rễ hút nước và muối khoáng chủ yếu nhờ:', options: ['lông hút', 'chóp rễ', 'mạch rây', 'khí khổng'], answer: 0, explain: 'Lông hút tăng diện tích tiếp xúc với đất.' },
    { type: 'mcq', q: 'Hơi nước thoát ra khỏi lá chủ yếu qua:', options: ['gân lá', 'khí khổng', 'cuống lá', 'mạch rây'], answer: 1, explain: 'Khí khổng ở biểu bì lá.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mạch rây vận chuyển nước từ rễ lên lá.', answer: false, explain: 'Mạch rây vận chuyển chất hữu cơ.' },
    { type: 'short', q: 'Cây ngô hút 200 L nước, 98% thoát ra qua lá. Lượng nước thoát ra là bao nhiêu lít?', answer: '196', unit: 'L', calc: '200*98/100', explain: '200 · 0,98 = 196 L.' },
    { type: 'short', q: 'Cây hút 5 L nước/ngày, 98% thoát ra. Mỗi ngày cây giữ lại bao nhiêu mL nước?', answer: '100', unit: 'mL', calc: '5000*(100-98)/100', explain: '2% của 5 000 mL = 100 mL.' },
    { type: 'mcq', q: 'Vai trò nào KHÔNG phải của thoát hơi nước?', options: ['Tạo lực hút nước từ rễ lên lá', 'Làm giảm nhiệt độ của lá', 'Giúp carbon dioxide vào lá', 'Tạo ra tinh bột'], answer: 3, explain: 'Tinh bột do quang hợp tạo ra.' },
    { type: 'short', q: 'Thân cây có mạch gỗ dẫn nước với tốc độ 2 m/giờ. Nước đi hết thân cao 10 m trong bao nhiêu giờ?', answer: '5', unit: 'giờ', calc: '10/2', explain: '10 : 2 = 5 giờ.' }
  ]
});
})();
