/* Ngữ văn 9 – Bài 2. Viết: Bài văn nghị luận phân tích một tác phẩm văn học (thơ song thất lục bát). Ngữ liệu: bài thơ song thất lục bát “Nhớ quê” và bài văn phân tích mẫu – cả hai do nhóm biên soạn tự viết; có dẫn lại hai dòng “Chinh phụ ngâm” (phạm vi công cộng). */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-9/b2-viet', {
  objectives: [
    'Viết được bài văn nghị luận phân tích một tác phẩm thơ song thất lục bát: nêu chủ đề, phân tích nét đặc sắc về nội dung và nghệ thuật (thể thơ, vần, nhịp, hình ảnh, biện pháp tu từ).',
    'Xây dựng được luận đề, hệ thống luận điểm rõ ràng; dùng bằng chứng là câu thơ, từ ngữ cụ thể trong tác phẩm.',
    'Biết lập dàn ý, viết đoạn phân tích, tự kiểm tra và chỉnh sửa bài viết.',
    'Trân trọng vẻ đẹp của thể thơ dân tộc và tình cảm gia đình, quê hương.'
  ],
  intro: 'Đọc một bài thơ, ta rung động; viết bài phân tích, ta giúp người khác cùng hiểu vì sao mình rung động. Với thơ song thất lục bát, cái hay nằm cả ở “lời” lẫn “nhạc”: nhịp 3/4 trầm buồn, vần lưng nối nhau như tiếng ru.',
  text: {
    title: 'Bài thơ “Nhớ quê” và bài phân tích mẫu',
    html: `<div class="poem"><b>Nhớ quê</b><br>Chiều quê ngoại khói lam vương vấn,<br>Bóng mẹ về lận đận bờ đê.<br>Con đi xa cách sơn khê,<br>Mỗi mùa gió bấc tái tê nhớ nhà.<br><br>
Nhớ nếp nhà, nhớ cà mẹ muối,<br>Nhớ vườn xưa trái chuối vàng ươm.<br>Mai về ngồi bếp thơm rơm,<br>Nghe lời mẹ kể ấm hơn lửa hồng.</div>
<p><b>Bài phân tích mẫu (rút gọn)</b></p>
<p><i>Mở bài.</i> Song thất lục bát là thể thơ của những nỗi niềm sâu kín, từ tiếng than của người chinh phụ “Cùng trông lại mà cùng chẳng thấy” đến những lời nhớ thương giản dị hôm nay. Bài thơ “Nhớ quê” là một ví dụ: chỉ hai khổ thơ mà chứa trọn nỗi nhớ mẹ, nhớ nhà của người con xa quê.</p>
<p><i>Thân bài – luận điểm 1: Nỗi nhớ gắn với hình ảnh người mẹ.</i> Khổ đầu mở ra khung cảnh “chiều quê ngoại khói lam vương vấn” – thời khắc dễ gợi nhớ nhất. Trên nền ấy hiện lên “bóng mẹ về lận đận bờ đê”: từ láy “lận đận” vừa tả dáng đi vất vả, vừa gợi cả cuộc đời nhọc nhằn của mẹ. Đối lập với hình ảnh ấy là “con đi xa cách sơn khê”; khoảng cách không gian càng làm nỗi nhớ “tái tê” mỗi mùa gió bấc.</p>
<p><i>Luận điểm 2: Nỗi nhớ cụ thể, bình dị.</i> Khổ thứ hai dùng điệp ngữ “nhớ” ba lần, liệt kê những điều nhỏ bé: nếp nhà, cà mẹ muối, trái chuối vàng ươm. Chính những chi tiết đời thường ấy khiến nỗi nhớ chân thật, ai đọc cũng thấy quê mình trong đó. Kết thúc là một ước mong ấm áp: “Nghe lời mẹ kể ấm hơn lửa hồng” – phép so sánh khẳng định tình mẹ là ngọn lửa sưởi ấm con.</p>
<p><i>Luận điểm 3: Âm điệu song thất lục bát.</i> Dòng bảy tiếng ngắt nhịp 3/4 (“Chiều quê ngoại / khói lam vương vấn”) chậm, buồn; vần lưng nối liền “vấn – đận”, “đê – khê – tê”, “muối – chuối” khiến các dòng quấn quýt như lời ru, hợp với nỗi nhớ day dứt.</p>
<p><i>Kết bài.</i> Bằng thể thơ dân tộc, hình ảnh bình dị và âm điệu tha thiết, “Nhớ quê” nhắc mỗi người: dù đi đâu, quê nhà và mẹ vẫn là nơi để trở về.</p>`,
    source: 'Bài thơ “Nhớ quê” và bài phân tích mẫu do nhóm biên soạn tự viết; dòng thơ “Cùng trông lại mà cùng chẳng thấy” trích “Chinh phụ ngâm” (bản diễn Nôm, thuộc phạm vi công cộng).'
  },
  steps: [
    { title: 'Yêu cầu của bài văn', html: `<ul><li>Giới thiệu tác giả (nếu có), tác phẩm, nêu <b>luận đề</b> (nhận định khái quát về giá trị bài thơ).</li>
      <li>Phân tích nội dung (chủ đề, cảm xúc, hình tượng) và nghệ thuật (thể thơ, vần, nhịp, từ ngữ, hình ảnh, biện pháp tu từ) – <b>gắn nghệ thuật với nội dung</b>.</li>
      <li>Mỗi luận điểm có lí lẽ và <b>bằng chứng</b> là câu thơ, từ ngữ được trích dẫn chính xác.</li>
      <li>Khẳng định giá trị, nêu cảm nghĩ ở phần kết.</li></ul>` },
    { title: 'Tìm ý', html: `<p>Đặt câu hỏi khi đọc bài thơ:</p>
      <ul><li>Bài thơ viết về ai, về điều gì? Cảm xúc chủ đạo là gì?</li>
      <li>Mạch cảm xúc phát triển thế nào qua từng khổ?</li>
      <li>Những từ ngữ, hình ảnh nào đặc sắc? Biện pháp tu từ nào nổi bật?</li>
      <li>Vần, nhịp của thể song thất lục bát góp phần thể hiện cảm xúc ra sao?</li></ul>` },
    { title: 'Lập dàn ý', html: `<p>Dàn ý của bài phân tích mẫu:</p>`,
      svg: S.flow({ vertical: true, w: 580, items: [{ title: 'Mở bài', text: 'Giới thiệu thể thơ, bài thơ; nêu luận đề' }, { title: 'Luận điểm 1', text: 'Nỗi nhớ gắn với hình ảnh người mẹ (khổ 1)' }, { title: 'Luận điểm 2', text: 'Nỗi nhớ cụ thể, bình dị (khổ 2)' }, { title: 'Luận điểm 3', text: 'Âm điệu song thất lục bát: nhịp 3/4, vần lưng' }, { title: 'Kết bài', text: 'Khẳng định giá trị, cảm nghĩ' }] }),
      caption: 'Dàn ý bài văn phân tích bài thơ “Nhớ quê”.' },
    { title: 'Viết đoạn phân tích: công thức gợi ý', html: `<p>Mỗi đoạn thân bài có thể theo trình tự:</p>`,
      svg: S.flow({ w: 620, items: [{ title: 'Nêu', text: 'câu chủ đề' }, { title: 'Dẫn', text: 'câu thơ' }, { title: 'Phân tích', text: 'từ ngữ, biện pháp' }, { title: 'Đánh giá', text: 'tác dụng, ý nghĩa' }] }),
      caption: 'Trình tự một đoạn văn phân tích thơ.' },
    { title: 'Kiểm tra và chỉnh sửa', html: `<ul><li>Luận đề có rõ không? Các luận điểm có làm sáng tỏ luận đề?</li>
      <li>Câu thơ trích dẫn có chính xác, đặt trong ngoặc kép?</li>
      <li>Đã phân tích nghệ thuật gắn với nội dung chưa, hay chỉ kể tên biện pháp?</li>
      <li>Có dùng từ ngữ chuyển đoạn (Trước hết, Không chỉ vậy, Bên cạnh đó…)? Lỗi chính tả, diễn đạt?</li></ul>
      <div class="box warn">Tránh diễn xuôi bài thơ (kể lại nội dung từng câu) mà không phân tích cái hay.</div>` }
  ],
  summary: 'Bài văn phân tích thơ song thất lục bát: mở bài giới thiệu và nêu luận đề; thân bài triển khai các luận điểm về nội dung và nghệ thuật, mỗi luận điểm có lí lẽ và bằng chứng là câu thơ, chú ý vai trò của nhịp 3/4, vần lưng, vần chân; kết bài khẳng định giá trị. Viết đoạn theo trình tự: nêu – dẫn – phân tích – đánh giá; tránh diễn xuôi.',
  examples: [
    { title: 'Nhận diện luận đề', problem: 'Câu nào nêu luận đề của bài phân tích mẫu?', solution: 'Câu cuối mở bài: “chỉ hai khổ thơ mà chứa trọn nỗi nhớ mẹ, nhớ nhà của người con xa quê.” Câu này nêu nhận định khái quát; ba luận điểm ở thân bài (hình ảnh người mẹ, những điều bình dị, âm điệu thể thơ) đều làm sáng tỏ nhận định ấy.' },
    { title: 'Phân tích từ láy', problem: 'Viết 2 – 3 câu phân tích từ láy “lận đận” trong dòng “Bóng mẹ về lận đận bờ đê”.', solution: '“Lận đận” là từ láy gợi hình ảnh dáng đi chậm, vất vả của mẹ trên con đê chiều. Không chỉ tả dáng đi, từ láy còn gợi cả cuộc đời nhiều gian truân mẹ đã trải qua. Nhờ từ láy này, hình ảnh người mẹ hiện lên vừa cụ thể vừa khiến người đọc xót thương.' },
    { title: 'Gắn nghệ thuật với nội dung', problem: 'Câu “Bài thơ có vần lưng và nhịp 3/4.” đã đủ chưa? Hãy sửa.', solution: 'Chưa đủ vì chỉ gọi tên nghệ thuật mà không nêu tác dụng. Sửa: “Dòng bảy tiếng ngắt nhịp 3/4 (“Chiều quê ngoại / khói lam vương vấn”) chậm rãi, trầm buồn, cùng vần lưng “vấn – đận”, “đê – khê – tê” nối các dòng thơ quấn quýt như lời ru, diễn tả nỗi nhớ day dứt không nguôi của người con xa quê.”' }
  ],
  exercises: [
    { question: 'Chứng minh bài thơ “Nhớ quê” viết theo thể song thất lục bát (số tiếng, nhịp, vần).', hints: ['Đếm số tiếng từng dòng của một khổ.', 'Tìm các cặp tiếng hiệp vần.'], solution: 'Mỗi khổ 4 dòng: 7 – 7 – 6 – 8 tiếng (VD khổ 1: “Chiều quê ngoại khói lam vương vấn” – 7; “Bóng mẹ về lận đận bờ đê” – 7; “Con đi xa cách sơn khê” – 6; “Mỗi mùa gió bấc tái tê nhớ nhà” – 8). Dòng bảy tiếng ngắt nhịp 3/4. Vần: “vấn – đận” (trắc), “đê – khê – tê” (bằng); khổ 2: “muối – chuối”, “ươm – rơm”; tiếng cuối khổ 1 “nhà” vần với tiếng 5 dòng đầu khổ 2 “cà”.' },
    { question: 'Viết đoạn văn phân tích phép so sánh trong dòng cuối “Nghe lời mẹ kể ấm hơn lửa hồng”.', hints: ['So sánh không ngang bằng: “ấm hơn”.', 'Lửa hồng gợi gì? Lời mẹ kể mang ý nghĩa gì với người con?'], solution: 'Ví dụ: Dòng thơ khép lại bài bằng một phép so sánh không ngang bằng đầy ấm áp: “lời mẹ kể” được so với “lửa hồng” và còn “ấm hơn”. Lửa hồng bên bếp rơm vốn là hình ảnh của hơi ấm gia đình trong những chiều gió bấc; vậy mà lời mẹ còn ấm hơn thế. Phép so sánh khẳng định tình yêu thương của mẹ là nguồn sưởi ấm lớn nhất, xua tan cái “tái tê” của những năm tháng xa nhà. Kết thúc bằng hơi ấm, bài thơ chuyển nỗi nhớ buồn thành niềm mong mỏi tha thiết được trở về.' },
    { question: 'Lập dàn ý cho đề: “Phân tích đoạn trích ba khổ thơ ‘Chinh phụ ngâm’ (Bài 2 – Đọc hiểu).”', hints: ['Luận đề: nỗi sầu chia li và lời oán trách chiến tranh.', 'Luận điểm theo từng khổ và về nghệ thuật.'], solution: 'Mở bài: giới thiệu “Chinh phụ ngâm” (Đặng Trần Côn, bản diễn Nôm tương truyền của Đoàn Thị Điểm); luận đề: đoạn trích diễn tả sâu sắc nỗi sầu chia li của người chinh phụ, gián tiếp tố cáo chiến tranh. Thân bài: (1) Khổ 1 – lời oán trách trời xanh qua câu hỏi tu từ; (2) Khổ 2 – phép đối “Chàng thì… / Thiếp thì…”, khoảng cách ngày càng xa; (3) Khổ 3 – điệp ngữ vòng, màu xanh mênh mông, câu hỏi “ai sầu hơn ai?”; (4) Nghệ thuật song thất lục bát: nhịp 3/4, vần lưng tạo âm điệu triền miên. Kết bài: khẳng định giá trị nhân đạo và vẻ đẹp của thể thơ dân tộc.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Bằng chứng chủ yếu trong bài văn phân tích thơ là:', options: ['câu thơ, từ ngữ trích từ tác phẩm', 'số liệu thống kê', 'ý kiến trên mạng xã hội', 'câu chuyện đời tư tác giả'], answer: 0, explain: 'Bằng chứng lấy từ chính văn bản.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Chỉ cần gọi tên biện pháp tu từ là đủ, không cần nêu tác dụng.', answer: false, explain: 'Phải gắn nghệ thuật với nội dung, nêu tác dụng.' },
    { type: 'short', q: 'Trong bài “Nhớ quê”, từ nào được điệp lại ba lần ở khổ thứ hai?', answer: ['nhớ', 'nho'], answerText: 'nhớ', explain: '“Nhớ nếp nhà, nhớ cà…, Nhớ vườn xưa…”' },
    { type: 'mcq', q: 'Lỗi thường gặp nhất khi phân tích thơ là:', options: ['diễn xuôi nội dung từng câu mà không phân tích cái hay', 'trích dẫn chính xác', 'có luận đề rõ ràng', 'dùng từ ngữ chuyển đoạn'], answer: 0, explain: 'Cần phân tích chứ không kể lại.' },
    { type: 'mcq', q: 'Dòng “Nghe lời mẹ kể ấm hơn lửa hồng” sử dụng biện pháp:', options: ['so sánh không ngang bằng', 'nói lái', 'hoán dụ', 'điệp thanh trắc'], answer: 0, explain: '“ấm hơn lửa hồng”.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nhịp 3/4 của dòng bảy tiếng góp phần tạo âm điệu trầm buồn cho thơ song thất lục bát.', answer: true, explain: 'Nhịp lẻ trước chẵn sau, chậm rãi.' },
    { type: 'short', q: 'Trình tự viết đoạn phân tích: nêu – dẫn – phân tích – … (từ còn thiếu chỉ việc nêu tác dụng, ý nghĩa)', answer: ['đánh giá', 'danh gia'], answerText: 'đánh giá', explain: 'Nêu – dẫn – phân tích – đánh giá.' },
    { type: 'mcq', q: 'Luận đề của bài văn phân tích thơ thường được nêu ở:', options: ['phần mở bài', 'giữa thân bài', 'chỉ ở nhan đề', 'không cần nêu'], answer: 0, explain: 'Mở bài nêu nhận định khái quát.' }
  ]
});
})();
