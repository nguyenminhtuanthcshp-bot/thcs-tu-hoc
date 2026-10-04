/* Ngữ văn 8 – Bài 7. Viết: Tập làm một bài thơ tự do; viết đoạn văn ghi lại cảm nghĩ về một bài thơ tự do. Bài thơ mẫu “Bàn tay bố” và đoạn văn mẫu do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-8/b7-viet', {
  objectives: [
    'Biết lựa chọn đề tài, cảm xúc và hình ảnh để tập làm một bài thơ tự do; vận dụng được cách ngắt dòng, vần nhịp linh hoạt, biện pháp tu từ.',
    'Viết được đoạn văn ghi lại cảm nghĩ về một bài thơ tự do: nêu ấn tượng chung, phân tích nét đặc sắc về nội dung và hình thức.',
    'Biết tự đọc lại, chỉnh sửa bài thơ và đoạn văn của mình.'
  ],
  intro: 'Thơ tự do mở ra cho em một “sân chơi” rộng: không cần đếm chữ, không bắt buộc vần. Nhưng tự do không có nghĩa là tuỳ tiện – mỗi lần xuống dòng, mỗi hình ảnh đều phải có lí do. Hôm nay, em sẽ vừa làm thơ, vừa viết về thơ.',
  text: {
    title: 'Bài thơ mẫu: Bàn tay bố (thơ tự do)',
    html: `<div class="poem">Bàn tay bố<br>thô ráp như vỏ cây bàng đầu ngõ,<br>mười ngón chai sần<br>đếm không hết những mùa mưa nắng.<br><br>Bàn tay ấy<br>từng nâng con lên cao<br>cho con chạm vào bầu trời đầu tiên,<br>từng buông con ra<br>trên chiếc xe đạp chòng chành<br>rồi đứng lặng<br>nhìn con tự đi.<br><br>Giờ con lớn<br>con mới hiểu<br>có những cái buông tay<br>cũng là một cách ôm.</div>`,
    source: 'Bài thơ tự do do nhóm biên soạn tự sáng tác để minh hoạ.'
  },
  steps: [
    { title: 'Tập làm thơ tự do: chọn đề tài và cảm xúc', html: `<ul><li><b>Đề tài</b> gần gũi, em có cảm xúc thật: gia đình, bạn bè, thầy cô, quê hương, một khoảnh khắc thiên nhiên, một ước mơ…</li><li><b>Cảm xúc chủ đạo</b>: biết ơn, nhớ thương, tự hào, hi vọng…</li><li><b>Hình ảnh trung tâm</b>: một sự vật cụ thể chứa đựng cảm xúc (bàn tay bố, chiếc áo mẹ, ô cửa sổ lớp học…).</li></ul>
      <div class="box key">Thơ hay bắt đầu từ một chi tiết thật, nhỏ mà em nhìn thấy bằng cả trái tim.</div>` },
    { title: 'Quy trình làm một bài thơ tự do', html: `<p>Bốn bước làm thơ tự do:</p>`,
      svg: S.flow({ items: [{ title: 'Tìm ý', text: 'Đề tài, cảm xúc, hình ảnh' }, { title: 'Viết nháp', text: 'Viết thành câu, rồi ngắt dòng' }, { title: 'Trau chuốt', text: 'Tu từ, nhịp, từ ngữ' }, { title: 'Đọc lại', text: 'Đọc to, sửa chỗ vấp' }] }),
      caption: 'Quy trình tập làm một bài thơ tự do.' },
    { title: 'Kĩ thuật ngắt dòng và trau chuốt', html: `<ul><li><b>Ngắt dòng</b> ở chỗ muốn người đọc dừng lại, suy ngẫm: “rồi đứng lặng / nhìn con tự đi.”</li><li>Đặt từ ngữ quan trọng thành <b>một dòng riêng</b> để nhấn mạnh.</li><li>Dùng <b>so sánh, ẩn dụ, điệp ngữ</b> vừa phải: “thô ráp như vỏ cây bàng”, “từng nâng…/ từng buông…”.</li><li>Kết thúc bằng một <b>ý thơ bất ngờ, sâu sắc</b>: “có những cái buông tay / cũng là một cách ôm.”</li></ul>` },
    { title: 'Viết đoạn văn ghi lại cảm nghĩ về một bài thơ tự do', html: `<table class="tbl"><tr><th>Phần</th><th>Nội dung</th></tr>
      <tr><td>Mở đoạn</td><td>Giới thiệu bài thơ, tác giả (nếu có); nêu ấn tượng, cảm xúc chung</td></tr>
      <tr><td>Thân đoạn</td><td>Nêu cảm nghĩ về nội dung (hình ảnh, cảm xúc) và hình thức (ngắt dòng, nhịp, biện pháp tu từ); có dẫn chứng</td></tr>
      <tr><td>Kết đoạn</td><td>Khẳng định ý nghĩa bài thơ với bản thân</td></tr></table>
      <p><i>Đoạn mẫu:</i> Bài thơ tự do “Bàn tay bố” để lại trong em một cảm xúc ấm áp và sâu lắng. Chỉ bằng hình ảnh bàn tay “thô ráp như vỏ cây bàng”, “mười ngón chai sần”, bài thơ đã gợi lên cả một đời vất vả của người cha. Em xúc động nhất với khổ thơ thứ hai: bàn tay “từng nâng con lên cao” rồi “từng buông con ra”; cách ngắt dòng “rồi đứng lặng / nhìn con tự đi” khiến em như thấy dáng bố lặng lẽ phía sau. Hai dòng kết “có những cái buông tay / cũng là một cách ôm” thật bất ngờ: yêu thương đôi khi là để con tự bước đi. Bài thơ giúp em hiểu và thương bố nhiều hơn.</p>` },
    { title: 'Tự kiểm tra', html: `<table class="tbl"><tr><th>Bài thơ tự do</th><th>Đoạn văn cảm nghĩ</th></tr>
      <tr><td>☐ Có cảm xúc chủ đạo rõ</td><td>☐ Nêu được ấn tượng chung</td></tr>
      <tr><td>☐ Có hình ảnh trung tâm cụ thể</td><td>☐ Có cảm nghĩ về nội dung và hình thức</td></tr>
      <tr><td>☐ Ngắt dòng có dụng ý</td><td>☐ Có dẫn chứng câu thơ</td></tr>
      <tr><td>☐ Dùng biện pháp tu từ phù hợp</td><td>☐ Đúng hình thức đoạn văn (viết liền, lùi đầu dòng)</td></tr></table>` }
  ],
  summary: 'Tập làm thơ tự do: chọn đề tài, cảm xúc thật và hình ảnh trung tâm; viết nháp rồi ngắt dòng có dụng ý; trau chuốt bằng biện pháp tu từ, nhịp điệu; đọc to để sửa. Đoạn văn ghi lại cảm nghĩ về bài thơ tự do gồm mở đoạn (ấn tượng chung), thân đoạn (cảm nghĩ về nội dung và hình thức, có dẫn chứng), kết đoạn (ý nghĩa với bản thân).',
  examples: [
    { title: 'Tìm hình ảnh trung tâm', problem: 'Với đề tài “mẹ”, hãy đề xuất ba hình ảnh trung tâm cụ thể có thể làm “hồn” cho bài thơ.', solution: 'Ví dụ: (1) Chiếc nón lá đã sờn vành mẹ đội đi chợ sớm; (2) Bếp lửa mẹ nhóm mỗi sáng, khói bay vào mắt mẹ; (3) Đôi dép nhựa mòn gót mẹ đi suốt bao năm. Mỗi hình ảnh cụ thể gợi sự vất vả, hi sinh và tình thương của mẹ.' },
    { title: 'Ngắt dòng có dụng ý', problem: 'Ngắt câu sau thành các dòng thơ tự do để nhấn mạnh sự chờ đợi: “Mẹ ngồi bên hiên nhà đợi con về dưới cơn mưa chiều.”', solution: 'Ví dụ: “Mẹ ngồi bên hiên / đợi / con về / dưới cơn mưa chiều.” Chữ “đợi” đứng riêng một dòng buộc người đọc dừng lại, cảm nhận khoảng thời gian chờ đợi dài và nỗi mong ngóng của mẹ.' },
    { title: 'Nêu cảm nghĩ về hình thức', problem: 'Viết 2 câu nêu cảm nghĩ về cách kết thúc bài “Bàn tay bố”.', solution: 'Hai dòng kết “có những cái buông tay / cũng là một cách ôm” là một nghịch lí bất ngờ mà sâu sắc: buông tay vốn là rời xa, nhưng với bố, đó là cách yêu thương để con trưởng thành. Cách ngắt thành hai dòng ngắn khiến ý thơ lắng lại, đọng mãi trong lòng người đọc.' }
  ],
  exercises: [
    { question: 'Lập phiếu tìm ý cho bài thơ tự do về một người thân: đề tài – cảm xúc chủ đạo – hình ảnh trung tâm – 3 chi tiết – ý kết.', hints: ['Chọn một người thân và một kỉ niệm cụ thể.', 'Ý kết nên là một phát hiện, suy ngẫm.'], solution: 'Ví dụ: Đề tài: bà nội. Cảm xúc: nhớ thương, biết ơn. Hình ảnh trung tâm: chiếc quạt nan. Chi tiết: bà quạt cho em ngủ trưa hè; tiếng quạt phành phạch hoà cùng tiếng ru; quạt nan giờ treo trên vách. Ý kết: “bà đi xa rồi / mà gió vẫn còn thổi / trong những giấc mơ con.”' },
    { question: 'Viết một bài thơ tự do (8 – 12 dòng) dựa trên phiếu tìm ý ở bài tập 1.', hints: ['Viết thành câu trước, rồi ngắt dòng.', 'Dùng ít nhất một so sánh hoặc điệp ngữ; kết bằng một ý thơ đọng lại.'], solution: 'Ví dụ: “Chiếc quạt nan / treo trên vách nhà / như một cánh chim đã mỏi. // Những trưa hè ngày ấy / bà quạt, / bà ru, / tiếng quạt phành phạch / đưa con vào giấc ngủ. // Bà đi xa rồi / mà gió vẫn còn thổi / trong những giấc mơ con.” (Bài làm của học sinh có thể khác, miễn có cảm xúc thật, hình ảnh cụ thể, ngắt dòng có dụng ý.)' },
    { question: 'Viết đoạn văn (7 – 9 câu) ghi lại cảm nghĩ về bài thơ “Những ô cửa sáng đèn” đã học.', hints: ['Mở đoạn: ấn tượng chung.', 'Thân đoạn: một hình ảnh/khổ thơ em thích + nét đặc sắc hình thức (ngắt dòng, điệp ngữ).'], solution: 'Ví dụ: Bài thơ tự do “Những ô cửa sáng đèn” mang đến cho em cảm giác bình yên và ấm áp. Hình ảnh những ô cửa “lần lượt sáng đèn / như những vì sao nhỏ / thắp lên từ mặt đất” khiến em nhìn buổi chiều thành phố bằng con mắt mới. Điệp ngữ “có” ở khổ hai mở ra những cuộc đời bình dị: người mẹ nhóm bếp, cậu bé giải bài toán, ông lão lau huân chương. Em thích nhất dòng thơ “bởi những ngọn đèn không mang tên tôi” vì nó nói về hơi ấm của tình người, dù không quen biết. Khổ cuối ngắt thành nhiều dòng ngắn, nhịp chậm dần, dồn vào hai chữ “tìm về” đầy xúc động. Hình thức tự do giúp cảm xúc tuôn chảy tự nhiên. Bài thơ nhắc em hãy trở thành một “ô cửa sáng đèn” cho người khác.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Bước đầu tiên khi tập làm thơ tự do là:', options: ['tìm ý: đề tài, cảm xúc, hình ảnh', 'đếm số chữ mỗi dòng', 'chọn vần trắc', 'chép một bài thơ có sẵn'], answer: 0, explain: 'Tìm ý trước khi viết.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Trong thơ tự do, có thể xuống dòng tuỳ tiện ở bất kì chỗ nào mà không cần dụng ý.', answer: false, explain: 'Ngắt dòng cần có dụng ý.' },
    { type: 'short', q: 'Trong bài “Bàn tay bố”, bàn tay được so sánh với vỏ của cây gì?', answer: ['bàng', 'cây bàng'], answerText: 'cây bàng', explain: '“thô ráp như vỏ cây bàng đầu ngõ”.' },
    { type: 'mcq', q: 'Đoạn văn cảm nghĩ về bài thơ cần có:', options: ['cảm nghĩ về nội dung và hình thức, có dẫn chứng câu thơ', 'chỉ chép lại bài thơ', 'kể chuyện tưởng tượng', 'tóm tắt tiểu sử nhà thơ'], answer: 0, explain: 'Cảm nghĩ + dẫn chứng.' },
    { type: 'mcq', q: 'Hai dòng “có những cái buông tay / cũng là một cách ôm” thể hiện:', options: ['yêu thương là để con tự trưởng thành', 'bố không thương con', 'con giận bố', 'bố bận việc'], answer: 0, explain: 'Ý thơ nghịch lí mà sâu sắc.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Đặt một từ quan trọng thành một dòng riêng là cách nhấn mạnh trong thơ tự do.', answer: true, explain: 'Kĩ thuật ngắt dòng.' },
    { type: 'short', q: 'Bài thơ “Bàn tay bố” có mấy khổ?', answer: ['3', 'ba'], answerText: '3', explain: 'Ba khổ thơ.' },
    { type: 'mcq', q: 'Hình thức của đoạn văn cảm nghĩ là:', options: ['viết liền mạch, lùi đầu dòng chữ đầu tiên', 'viết thành nhiều dòng thơ', 'gạch đầu dòng từng ý', 'chỉ có một câu'], answer: 0, explain: 'Đúng hình thức đoạn văn.' }
  ]
});
})();
