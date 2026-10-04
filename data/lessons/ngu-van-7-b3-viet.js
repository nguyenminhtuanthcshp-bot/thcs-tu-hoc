/* Ngữ văn 7 – Bài 3. Viết: Bài văn phân tích đặc điểm nhân vật trong một tác phẩm văn học. Tác phẩm phân tích: truyện “Mùa ổi chín” (nhóm biên soạn sáng tác, xem bài Đọc hiểu) và truyện cổ tích “Thạch Sanh” (dân gian). Bài mẫu do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-7/b3-viet', {
  objectives: [
    'Nắm được yêu cầu của bài văn phân tích đặc điểm nhân vật trong một tác phẩm văn học.',
    'Biết tìm ý, lập dàn ý: nêu đặc điểm nhân vật và chứng minh bằng chi tiết (lời nói, hành động, suy nghĩ…).',
    'Viết được bài văn có bố cục ba phần, lí lẽ rõ ràng, dẫn chứng chính xác; biết tự chỉnh sửa.'
  ],
  intro: 'Em đã quen kể lại truyện. Nhưng phân tích nhân vật thì khác: em cần trả lời câu hỏi “Nhân vật này là người như thế nào, dựa vào đâu mà em nói vậy, và nhà văn muốn gửi gắm điều gì qua nhân vật?”.',
  steps: [
    { title: 'Yêu cầu của bài văn', html: `<ul><li>Giới thiệu được tác phẩm, tác giả (nếu có) và <b>nhân vật</b> cần phân tích.</li>
      <li>Nêu được các <b>đặc điểm</b> nổi bật của nhân vật (ngoại hình, tính cách, phẩm chất…).</li>
      <li>Mỗi đặc điểm được làm rõ bằng <b>chi tiết, bằng chứng</b> trong tác phẩm: lời nói, hành động, suy nghĩ, quan hệ với nhân vật khác.</li>
      <li>Nêu được <b>ý nghĩa</b> của nhân vật và <b>nghệ thuật</b> xây dựng nhân vật.</li></ul>
      <div class="box tip">Phân tích ≠ kể lại. Mỗi đoạn thân bài nên bắt đầu bằng một câu nêu đặc điểm, sau đó mới dẫn chi tiết và giải thích.</div>` },
    { title: 'Tìm ý bằng bảng “đặc điểm – chi tiết – nhận xét”', html: `<p>Ví dụ với nhân vật bà ngoại trong truyện “Mùa ổi chín”:</p>
      <table class="tbl"><tr><th>Đặc điểm</th><th>Chi tiết (bằng chứng)</th><th>Nhận xét</th></tr>
      <tr><td>Chăm chỉ, chu đáo</td><td>“Sáng nào bà cũng dậy sớm, lấy sào hái một rổ đầy”</td><td>Việc làm đều đặn, bền bỉ</td></tr>
      <tr><td>Hào phóng, sống nghĩa tình</td><td>Chọn quả to nhất đem cho bà Tư, cho các cháu nhà chú Sáu</td><td>Dành phần ngon nhất cho người khác</td></tr>
      <tr><td>Biết ơn cộng đồng, hiền hậu</td><td>“Cây ổi… mọc trên đất làng, uống nước mưa của trời”; bà cười khi cháu phụng phịu</td><td>Dạy cháu bằng lời nói mộc mạc, không trách mắng</td></tr>
      <tr><td>Được mọi người yêu quý</td><td>Khi bà ốm, hàng xóm đến nấu cháo, mua thuốc</td><td>Tấm lòng của bà được đáp đền</td></tr></table>` },
    { title: 'Lập dàn ý', html: `<p>Dàn ý bài văn phân tích nhân vật:</p>`,
      svg: S.mindmap({ center: 'Phân tích nhân vật', branches: [{ title: 'Mở bài', items: ['Giới thiệu tác phẩm, nhân vật', 'Ấn tượng chung'] }, { title: 'Thân bài', items: ['Đặc điểm 1 + chi tiết', 'Đặc điểm 2 + chi tiết', 'Đặc điểm 3 + chi tiết', 'Nghệ thuật xây dựng nhân vật'] }, { title: 'Kết bài', items: ['Khẳng định ý nghĩa nhân vật', 'Bài học, cảm nghĩ'] }] }),
      caption: 'Sơ đồ dàn ý bài văn phân tích đặc điểm nhân vật.' },
    { title: 'Viết đoạn thân bài', html: `<p>Mỗi đoạn theo mô hình: <b>Câu chủ đề (đặc điểm) → Dẫn chi tiết → Giải thích, nhận xét → Câu chốt</b>.</p>
      <div class="box note">Bà ngoại trước hết là một người hào phóng, sống rất nghĩa tình. Mỗi sáng, bà hái ổi nhưng không giữ cho riêng mình mà “nhặt những quả to nhất” đem biếu hàng xóm. Việc chọn quả to nhất để cho đi cho thấy bà luôn dành điều tốt đẹp nhất cho người khác. Với bà, niềm vui không nằm ở việc có nhiều mà ở việc được sẻ chia. Chính tấm lòng ấy đã làm nên tình làng nghĩa xóm ấm áp trong truyện.</div>` },
    { title: 'Kiểm tra và chỉnh sửa', html: `<table class="tbl"><tr><th>Tiêu chí</th><th>Đạt?</th></tr>
      <tr><td>Mở bài giới thiệu đúng tác phẩm, nhân vật</td><td></td></tr>
      <tr><td>Thân bài nêu ít nhất 2 – 3 đặc điểm, mỗi đặc điểm có chi tiết chính xác</td><td></td></tr>
      <tr><td>Có giải thích, nhận xét (không chỉ kể lại)</td><td></td></tr>
      <tr><td>Có nhận xét về nghệ thuật xây dựng nhân vật</td><td></td></tr>
      <tr><td>Kết bài nêu ý nghĩa, bài học</td><td></td></tr>
      <tr><td>Chính tả, dấu câu, trích dẫn trong ngoặc kép</td><td></td></tr></table>` }
  ],
  summary: 'Bài văn phân tích đặc điểm nhân vật: mở bài giới thiệu tác phẩm và nhân vật; thân bài lần lượt nêu các đặc điểm nổi bật, mỗi đặc điểm được chứng minh bằng chi tiết (lời nói, hành động, suy nghĩ, quan hệ với nhân vật khác) kèm giải thích, rồi nhận xét nghệ thuật xây dựng nhân vật; kết bài khẳng định ý nghĩa của nhân vật và bài học rút ra.',
  examples: [
    { title: 'Mở bài', problem: 'Viết mở bài cho đề: “Phân tích đặc điểm nhân vật bà ngoại trong truyện Mùa ổi chín”.', solution: '“Mùa ổi chín” là một câu chuyện nhỏ về tình bà cháu và tình làng nghĩa xóm. Để lại ấn tượng sâu sắc nhất trong truyện là nhân vật bà ngoại – một người phụ nữ nông thôn hiền hậu, hào phóng, luôn biết sẻ chia với mọi người xung quanh.' },
    { title: 'Nhận xét nghệ thuật', problem: 'Nêu một nét nghệ thuật xây dựng nhân vật bà ngoại.', solution: 'Tác giả không miêu tả trực tiếp tính cách bà mà để bà hiện lên qua <b>hành động</b> (hái ổi đem cho) và <b>lời nói</b> mộc mạc; đồng thời nhìn bà qua con mắt của đứa cháu (người kể ngôi thứ nhất), nên hình ảnh bà vừa gần gũi, vừa đáng kính.' },
    { title: 'Phân tích nhân vật cổ tích', problem: 'Nêu hai đặc điểm của nhân vật Thạch Sanh (truyện cổ tích) kèm chi tiết.', solution: '(1) Dũng cảm, tài giỏi: diệt chằn tinh; bắn trúng đại bàng tinh, lần theo vết máu xuống hang diệt nó để cứu công chúa. (2) Thật thà, nhân hậu, yêu hoà bình: nhiều lần bị Lí Thông lừa vẫn tin người; tha tội chết cho mẹ con Lí Thông; dùng tiếng đàn thần và niêu cơm thần khiến quân mười tám nước chư hầu cảm phục, xin rút quân.' }
  ],
  exercises: [
    { question: 'Lập bảng “đặc điểm – chi tiết – nhận xét” cho nhân vật “tôi” trong truyện “Mùa ổi chín”.', hints: ['Nhân vật có thay đổi: lúc đầu và lúc cuối khác nhau.', 'Chú ý các chi tiết: phụng phịu, giấu ổi, đỏ mặt, chợt hiểu, hái ổi đem cho.'], solution: 'Lúc đầu trẻ con, ích kỉ – “phụng phịu”, lén giấu ổi – chỉ nghĩ đến bản thân. Biết xấu hổ – “đỏ mặt”, “không dám nhìn bà” – có lòng tự trọng. Biết nhận ra lỗi và thay đổi – “chợt hiểu”, tự hái ổi đem cho – trưởng thành, thấm thía bài học sẻ chia.' },
    { question: 'Viết đoạn văn thân bài (5 – 6 câu) phân tích đặc điểm “biết nhận ra lỗi và thay đổi” của nhân vật “tôi”.', hints: ['Câu chủ đề nêu đặc điểm.', 'Dẫn chi tiết cuối truyện và giải thích ý nghĩa.'], solution: 'Ví dụ: Điều đáng quý nhất ở nhân vật “tôi” là biết nhận ra lỗi và thay đổi. Khi thấy hàng xóm tận tình chăm sóc bà, cậu bé “chợt hiểu những rổ ổi của bà đã đi đâu”. Từ “chợt hiểu” cho thấy một sự vỡ lẽ, một bước trưởng thành trong suy nghĩ. Hành động cuối truyện – tự hái những quả to nhất, bọc khăn đem cho – lặp lại đúng việc làm của bà. Cậu bé không nói lời xin lỗi nào nhưng việc làm ấy còn ý nghĩa hơn mọi lời nói. Qua đó, tác giả gửi gắm niềm tin rằng yêu thương có thể lan toả từ người này sang người khác.' },
    { question: 'Viết kết bài cho bài văn phân tích nhân vật bà ngoại.', hints: ['Khẳng định lại vẻ đẹp của nhân vật.', 'Nêu bài học hoặc cảm nghĩ của em.'], solution: 'Ví dụ: Bằng những chi tiết giản dị, truyện “Mùa ổi chín” đã khắc hoạ thành công hình ảnh người bà hiền hậu, hào phóng và giàu nghĩa tình. Nhân vật bà nhắc em rằng những gì ta cho đi bằng tấm lòng chân thành sẽ trở về bằng yêu thương. Em mong mình cũng biết sống sẻ chia như bà.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Điểm khác nhau cơ bản giữa phân tích nhân vật và kể lại truyện là:', options: ['Phân tích cần nêu đặc điểm và giải thích, chứng minh bằng chi tiết', 'Phân tích phải dài hơn', 'Phân tích không cần dẫn chứng', 'Không có gì khác nhau'], answer: 0, explain: 'Phân tích tập trung làm rõ nhân vật là người thế nào và vì sao.' },
    { type: 'mcq', q: 'Bằng chứng để phân tích nhân vật thường là:', options: ['Lời nói, hành động, suy nghĩ, quan hệ với nhân vật khác', 'Số trang của truyện', 'Năm xuất bản', 'Màu bìa sách'], answer: 0, explain: 'Chi tiết trong tác phẩm thể hiện nhân vật.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mỗi đoạn thân bài nên mở đầu bằng câu nêu đặc điểm của nhân vật.', answer: true, explain: 'Câu chủ đề giúp đoạn văn rõ ràng.' },
    { type: 'mcq', q: 'Phần nào nêu ý nghĩa của nhân vật và bài học rút ra?', options: ['Kết bài', 'Mở bài', 'Nhan đề', 'Không phần nào'], answer: 0, explain: 'Kết bài khẳng định ý nghĩa, bài học.' },
    { type: 'short', q: 'Mô hình đoạn thân bài: Câu chủ đề → Dẫn chi tiết → Giải thích, nhận xét → Câu … (điền một từ)', answer: ['chốt', 'kết'], answerText: 'chốt (câu kết đoạn)', explain: 'Câu chốt khép lại ý của đoạn.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khi trích dẫn lời nhân vật, cần đặt trong dấu ngoặc kép và chép chính xác.', answer: true, explain: 'Đảm bảo bằng chứng trung thực.' },
    { type: 'mcq', q: 'Chi tiết “Thạch Sanh tha tội chết cho mẹ con Lí Thông” thể hiện đặc điểm:', options: ['Nhân hậu, bao dung', 'Nhút nhát', 'Tham lam', 'Nóng nảy'], answer: 0, explain: 'Thạch Sanh không báo thù dù bị hãm hại nhiều lần.' },
    { type: 'mcq', q: 'Câu nào phù hợp làm câu chủ đề cho một đoạn thân bài?', options: ['Bà ngoại trước hết là người hào phóng, giàu nghĩa tình.', 'Ngày xưa có một cây ổi.', 'Truyện rất hay.', 'Bà đi chợ.'], answer: 0, explain: 'Câu nêu rõ một đặc điểm của nhân vật.' }
  ]
});
})();
